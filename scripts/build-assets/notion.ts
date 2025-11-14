import {
  Client,
  type PageObjectResponse,
  type QueryDataSourceResponse,
} from '@notionhq/client'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { NotionToMarkdown } from 'notion-to-md'
import sharp from 'sharp'
import type { BlogPostMetadata } from '~/utils/blog/metadata'
import { logger } from './logger'
import { POSTS_FOLDER } from './utils'

const notionLogger = logger.scope('Notion')

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const POST_NUMBER_NEXT = 49

type PropertyType = keyof PageObjectResponse['properties']
type ArrayPropertyTypes = 'rich_text' | 'title'
type NotionProperty<
  propertyType extends PropertyType,
  extractedType extends Extract<
    PageObjectResponse['properties'][string],
    { type: propertyType }
  > = Extract<PageObjectResponse['properties'][string], { type: propertyType }>,
> = propertyType extends ArrayPropertyTypes
  ? Extract<extractedType, { [K in propertyType]: Array<unknown> }>
  : extractedType

type NotionPostProperties = {
  Authors: NotionProperty<'multi_select'>
  Slug: NotionProperty<'rich_text'>
  'Publish Date': NotionProperty<'date'>
  'Cover Image': NotionProperty<'files'>
  Description: NotionProperty<'rich_text'>
  Status: NotionProperty<'status'>
  Tags: NotionProperty<'multi_select'>
  Name: NotionProperty<'title'>
}
type NotionPostResponse = Omit<PageObjectResponse, 'properties'> & {
  properties: NotionPostProperties
}
type BlogPostMetadataNotion = BlogPostMetadata & {
  pageId: string
}

const getPostMetadata = (
  page_: QueryDataSourceResponse['results'][number],
): BlogPostMetadataNotion => {
  const page = page_ as NotionPostResponse
  const properties = page.properties as NotionPostProperties

  return {
    authors: properties.Authors.multi_select.map((author) => author.name),
    date: (() => {
      const dateProperty = properties['Publish Date']
      if (!dateProperty.date?.start) throw new Error('Publish Date is not set')
      return dateProperty.date.start
    })(),
    description: properties.Description.rich_text[0].plain_text,
    draft: false,
    slug: properties.Slug.rich_text[0].plain_text,
    tags: properties.Tags.multi_select.map((tag) => tag.name),
    title: properties.Name.title[0].plain_text,
    cover: (() => {
      const coverProperty = properties['Cover Image']
      if (coverProperty.files.length === 0) return
      if (coverProperty.files[0].type !== 'file') return
      const file = coverProperty.files[0].file
      return file.url
    })(),
    pageId: page.id,
  }
}

export const getNotionPostsMetadata = async () => {
  if (!process.env.NOTION_DATABASE_ID)
    throw new Error('NOTION_DATABASE_ID is not set')

  notionLogger.info('Getting Notion database')
  // get data sources
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  })
  notionLogger.success('Notion database retrieved')

  if (!('data_sources' in database))
    throw new Error('Database does not have data sources')

  if (database.data_sources.length !== 1)
    throw new Error('Database does not have exactly one data source')

  const dataSource = database.data_sources[0]

  notionLogger.info('Getting Notion published posts')
  // get published posts
  const response = await notion.dataSources.query({
    data_source_id: dataSource.id,
    filter: {
      property: 'Status',
      status: {
        equals: 'Live',
      },
    },
    sorts: [
      {
        property: 'Publish Date',
        direction: 'ascending',
      },
    ],
  })
  notionLogger.success('Notion published posts retrieved')

  return response.results.map(getPostMetadata)
}

const downloadFileAndSaveToPath = async ({
  url,
  path,
  name,
}: {
  url: string
  path: string
  name: string
}) => {
  notionLogger.info(`Downloading file for "${path}/${name}.webp".`)
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(
      `Failed to download "${url}": ${res.status} ${res.statusText}`,
    )
  }

  const data = await res.arrayBuffer()
  const contentType = res.headers.get('content-type')
  if (!contentType) {
    throw new Error(`No content type found for "${url}"`)
  }

  const image = sharp(data)
  const fileName = `${name}.webp`
  await image.toFormat('webp').toFile(join(path, fileName))
  notionLogger.success(`File downloaded and saved to "${path}/${name}.webp".`)

  return fileName
}

type PostId = string
type PostImageDownloadStore = { path: string; imageIndex: number }
const postImageDownloads = new Map<PostId, PostImageDownloadStore>()

const n2m = new NotionToMarkdown({ notionClient: notion })

type PageIdParent = Extract<PageObjectResponse['parent'], { type: 'page_id' }>
type BlockWithParent = { parent: BlockWithPotentialParent }
type BlockWithPotentialParent = BlockWithParent | PageIdParent
const hasMoreParents = (
  parent: BlockWithPotentialParent,
): parent is BlockWithParent =>
  'parent' in parent && parent.parent !== undefined

// override image transformer to download images
n2m.setCustomTransformer('image', async (block_) => {
  const block = block_ as Extract<typeof block_, { type: 'image' }>
  // use default transformer for external images, we don't need to download them
  if (block.image.type === 'external') return false

  const furthestParentPageId = (() => {
    let parent = block as BlockWithPotentialParent
    while (hasMoreParents(parent)) {
      parent = parent.parent
    }
    // parent should be page
    if (parent.type !== 'page_id') throw new Error('Parent is not a page_id')
    return parent.page_id
  })()

  const dlStore = postImageDownloads.get(furthestParentPageId)
  if (!dlStore) throw new Error('Post image download store not found')
  // biome-ignore lint/suspicious/noAssignInExpressions: we want to do at same time
  const imageIndex = (dlStore.imageIndex += 1)

  const fileName = await downloadFileAndSaveToPath({
    url: block.image.file.url,
    path: dlStore.path,
    name: `image${imageIndex}`,
  })

  block.image.file.url = `./${fileName}`

  // we modified the block, so can now use the default transformer
  return false
})

export const downloadNotionPosts = async () => {
  notionLogger.info('Downloading notion posts')
  notionLogger.info('Getting Notion posts metadata')
  const postsMetas = await getNotionPostsMetadata()
  notionLogger.success(
    `Notion posts metadata retrieved (${postsMetas.length} posts)`,
  )

  for (let i = 0; i < postsMetas.length; i++) {
    const postMeta = postsMetas[i]
    const postNumber = POST_NUMBER_NEXT + i
    const postDirectoryName = `${postNumber.toString().padStart(3, '0')}_${postMeta.slug.replace(/-/g, '_')}`
    const postDirectoryPath = `${POSTS_FOLDER.pathname}/${postDirectoryName}`

    notionLogger.info(
      `Processing post "${postDirectoryName}" (${i + 1} of ${postsMetas.length})`,
    )

    await mkdir(postDirectoryPath, { recursive: true })
    postImageDownloads.set(postMeta.pageId, {
      path: postDirectoryPath,
      imageIndex: 0,
    })

    // download cover image
    if (postMeta.cover) {
      await downloadFileAndSaveToPath({
        url: postMeta.cover,
        path: postDirectoryPath,
        name: 'cover',
      })
      delete postMeta.cover
    }
    notionLogger.info(`Downloading post "${postDirectoryName}" markdown`)
    const mdblocks = await n2m.pageToMarkdown(postMeta.pageId)
    const mdString = n2m.toMarkdownString(mdblocks)
    notionLogger.success(
      `Post "${postDirectoryName}" markdown downloaded and converted`,
    )

    await writeFile(`${postDirectoryPath}/readme.mdx`, mdString.parent)
    notionLogger.success(
      `Post readme.mdx written to "${postDirectoryPath}/readme.mdx".`,
    )
    await writeFile(
      `${postDirectoryPath}/meta.json`,
      JSON.stringify(postMeta, null, 2),
    )
    notionLogger.success(
      `Post meta.json written to "${postDirectoryPath}/meta.json".`,
    )
    notionLogger.success(`Post "${postDirectoryName}" processed`)
  }
  notionLogger.success(`Notion posts processed (${postsMetas.length} posts)`)
}

import { Feed } from 'feed'
import ogImage from 'public/og-image.png'
import { getPostsMetadata } from '~/utils/blog/posts'
import { getPostAssets } from '~/utils/blog/utils'
import { BASE_URL } from '~/utils/metadata'

export const dynamic = 'force-static'

export const GET = async () => {
  const feed = new Feed({
    title: 'ENS Blog',
    description: 'The official blog of the Ethereum Name Service',
    link: BASE_URL.toString(),
    language: 'en',
    image: new URL(ogImage.src, BASE_URL).toString(),
    generator: 'NextJS',
    feedLinks: {
      atom: new URL('/blog/rss.xml', BASE_URL).toString(),
    },
    id: BASE_URL.toString(),
    copyright: '© ENS Domains',
  })

  const posts = await getPostsMetadata()

  for (const post of posts) {
    const postCovers = getPostAssets(post.file)
    const postCoverThumb = await postCovers?.cover

    feed.addItem({
      title: post.title,
      guid: new URL('/blog/post/' + post.slug, BASE_URL).toString(),
      link: new URL('/blog/post/' + post.slug, BASE_URL).toString(),
      date: new Date(post.date),
      description: post.description,
      author: post.authors.map((author) => {
        return {
          name: author,
          link: new URL('/blog/author/' + author, BASE_URL).toString(),
        }
      }),
      image: postCoverThumb?.src,
    })
  }

  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}

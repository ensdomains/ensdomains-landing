import { type Author, authors, type Post, posts } from 'build-assets/assets.gen'
import { titleCase } from '../formatters'

const CURRENT_DIR = new URL(import.meta.url)

export const POSTS_DIR = new URL('../../../posts/', CURRENT_DIR)

export const getPostAssets = (slug: string) => {
  return posts[slug] as Post | undefined
}

export const getAuthorAssets = (name: string) => {
  return authors[name] as Author | undefined
}

export class AssetNotFoundError extends Error {
  constructor(asset: string) {
    super(`Asset ${asset} not found. Try doing pnpm build:assets`)
  }
}

const tagMap: Record<string, string> = {
  'ens-v2': 'ENSv2',
  dns: 'DNS',
}

export const formatTag = (tag: string) => {
  return tagMap[tag] || titleCase(tag)
}

import { z } from 'zod'

export const BlogPostMetadataSchema = z.object({
  // Slug of the post
  slug: z.string(),
  // Cover Image of the post
  cover: z.string().optional(),
  // Title of the post
  title: z.string(),
  // Description of the post
  description: z.string(),
  // Date of the post
  date: z.string().default(''),
  // Tags for the post
  tags: z.array(z.string()).default([]),
  // ENS Name of the author
  authors: z.array(z.string()),
  // Youtube video ID
  youtube: z.string().optional(),
  // Draft status of post
  draft: z.boolean().default(false),
})

export type BlogPostMetadata = z.infer<typeof BlogPostMetadataSchema>

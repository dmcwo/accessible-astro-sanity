// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // `author` may be omitted; pages will default to 'Doug Worsham'
    author: z.string().optional(),
    description: z.string(),
    featuredImage: z.string().optional(),
    authorRole: z.string().optional(),
  }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { projects }

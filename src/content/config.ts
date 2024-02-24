import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
		tags: z.array(z.string()),
    draft: z.boolean(),
	})
})

export const collections = {
	posts: postsCollection,
}

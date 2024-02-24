import { getCollection, type CollectionEntry } from "astro:content"

export type FilterParam = (filter: CollectionEntry<"posts">) => unknown

export const getSortedPosts = async (filter?: FilterParam) => {
  return (await getCollection("posts", filter)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  )
}

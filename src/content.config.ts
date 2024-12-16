import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
    schema: ({image}) => z.object({
        slug: z.string(),
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    })
});

export const collections = {
    posts: postsCollection,
}

import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const itinerary = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({pattern: "src/content/itinerary/**/*.md"}),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		intro: z.string(),
		duration: z.string(),
		price: z.string(),
		heroImage: image(),
		isFeatured: z.boolean().optional(),
	}),
});

const specials = defineCollection({
    loader: file("src/content/specials.json"),
    schema: ({image}) => z.object({
        title: z.string().max(65),
		description: z.string().max(160),
		details: z.string(),
		featured: z.boolean(),
		btn_text: z.string(),
        href: z.string().url(),
        image: image(),
    }),
});

const reviews = defineCollection({
    loader: file("src/content/reviews.json"),
    schema: ({image}) => z.object({
        name: z.string(),
		location: z.string(),
		description: z.string(),
		isFeatured: z.boolean(),
        image: image(),
		imageAlt: z.string(),
    }),
});

const philosophy = defineCollection({
    loader: file("src/content/philosophy.json"),
    schema: ({image}) => z.object({
        title: z.string(),
		description: z.string(),
        icon: image(),
    }),
});


export const collections = { itinerary, specials, philosophy, reviews };

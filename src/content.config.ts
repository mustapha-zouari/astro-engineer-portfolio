import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z
        .object({
            id: z
                .string()
                .regex(/^[1-9]\d*$/, 'Use a positive numeric ID as a string.')
                .optional(),
            title: z.string(),
            description: z.string(),
            tags: z.array(z.string()).default([]),
            publishedAt: z.coerce.date().optional(),
            locked: z.boolean().default(false),
        })
        .superRefine((post, context) => {
            if (!post.locked && !post.id) {
                context.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ['id'],
                    message: 'Published articles must define a positive numeric ID.',
                });
            }
        }),
});

export const collections = {
    blog: blogCollection,
};

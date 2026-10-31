import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
export const collections = { projects: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/projects' }), schema: z.object({title:z.string(),category:z.string(),summary:z.string(),tags:z.array(z.string()),image:z.string(),order:z.number(),imageAlt:z.string().default('Abstract landscape and spatial data illustration'),imagePending:z.boolean().default(false),status:z.enum(['sample','ongoing','completed']).default('sample')}) }) };

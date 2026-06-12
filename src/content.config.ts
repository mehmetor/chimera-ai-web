// CHIMERA AI — içerik koleksiyonları (Astro Content Layer, zod şemalı).
// GEO motoru (IA §4): tanımsal/yapılandırılmış içerik AI asistanlarınca alıntılanır.
// Dil alt klasörle ayrılır: <koleksiyon>/<tr|en>/<slug>.md → id "tr/slug".
// Gövde metinleri DCN'den onaylı gelir; buradaki tohumlar tanımsal/olgusaldır.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const lang = z.enum(["tr", "en"]);

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/glossary" }),
  schema: z.object({
    term: z.string(),
    lang,
    /** Eş/alternatif yazımlar (arama + tanıma) */
    aliases: z.array(z.string()).default([]),
    /** Kısa tanım — meta description + liste kartı */
    summary: z.string(),
    updated: z.coerce.date().optional(),
    /** İlgili terim slug'ları */
    seeAlso: z.array(z.string()).default([]),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    lang,
    category: z.string().default("genel"),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    lang,
    description: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { glossary, faq, blog };

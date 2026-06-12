// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// Kanonik site (IA §1). Redirect host'ları (chimera-ai.tr vb.) DNS/hosting katmanında
// 301'lenir — bkz. docs/bilgi-mimarisi-seo-geo.md §1.
const SITE = "https://chimera-ai.com.tr";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // TR ana (prefixsiz), EN çekirdek set (/en) — IA §2. hreflang Seo.astro'da kurulur.
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "tr",
        locales: { tr: "tr-TR", en: "en" },
      },
    }),
  ],
  // GEO/SEO: temiz URL'ler (IA §4.1 "temiz URL")
  trailingSlash: "never",
  build: { format: "directory" },
  prefetch: { defaultStrategy: "viewport" },
});

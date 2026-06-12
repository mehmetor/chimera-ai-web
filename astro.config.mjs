// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { readdirSync } from "node:fs";

// Kanonik site (IA §1). Redirect host'ları (chimera-ai.tr vb.) DNS/hosting katmanında
// 301'lenir — bkz. docs/bilgi-mimarisi-seo-geo.md §1.
const SITE = "https://chimera-ai.com.tr";

// Blog /dokumanlar/blog/* → /blog/* taşındı (URL temizliği). Eski yollar redirect'lenir;
// slug listesi içerik dizininden üretilir, makale eklenince redirect de otomatik gelir.
const BLOG_REDIRECTS = Object.fromEntries([
  ["/dokumanlar/blog", "/blog"],
  ...readdirSync("./src/content/blog/tr")
    .filter((f) => f.endsWith(".md"))
    .map((f) => `/dokumanlar/blog/${f.replace(/\.md$/, "")}`)
    .map((from) => [from, from.replace("/dokumanlar/blog/", "/blog/")]),
]);

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
  redirects: BLOG_REDIRECTS,
  // NOT: Diğer eski URL → Dokümanlar 301'leri lansmanda eklenecek (henüz kimse ziyaret etmedi).
  // GEO/SEO: temiz URL'ler (IA §4.1 "temiz URL")
  trailingSlash: "never",
  build: { format: "directory" },
  prefetch: { defaultStrategy: "viewport" },
  // Prod statik servis Railway'de `astro preview` ile yapılır; preview sunucusu
  // bilinmeyen Host header'larını bloklar (Astro bunu `server.allowedHosts`'tan okur,
  // vite.preview'den değil — bkz. astro/core/preview/static-preview-server.js).
  // Cloudflare proxy arkasındaki kanonik alan adı + Railway iç alan adına izin ver.
  server: {
    allowedHosts: [
      "chimera-ai.com.tr",
      "www.chimera-ai.com.tr",
      ".up.railway.app",
    ],
  },
});

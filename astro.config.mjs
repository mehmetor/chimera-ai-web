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
  // Eski yapı → Dokümanlar bölgesi (köklü nav değişikliği). Henüz deploy olmadı;
  // güvenlik için 301'ler. Dinamik detay yolları (sözlük/blog/rapor) az dış-linklidir,
  // ana/section URL'leri kapsanıyor.
  redirects: {
    "/platform/moduller": "/dokumanlar/platform/moduller",
    "/platform/nasil-calisir": "/dokumanlar/platform/nasil-calisir",
    "/platform/guvenlik": "/dokumanlar/platform/guvenlik",
    "/kaynaklar": "/dokumanlar",
    "/kaynaklar/sozluk": "/dokumanlar/sozluk",
    "/kaynaklar/sss": "/dokumanlar/sss",
    "/kaynaklar/rapor": "/dokumanlar/rapor",
    "/kaynaklar/blog": "/dokumanlar/blog",
    "/en/resources": "/en/docs",
    "/en/resources/glossary": "/en/docs/glossary",
    "/en/resources/faq": "/en/docs/faq",
    "/en/resources/blog": "/en/docs",
  },
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

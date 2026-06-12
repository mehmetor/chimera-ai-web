# Chimera AI — Web (chimera-ai.com.tr)

Chimera AI ürün sitesinin **üretim deposu** — kurulu ve **yayında**. Ürün/strateji DC NEXTGEN'de tanımlanır, geliştirme Simetri'de yapılır. Ayrıntılı geliştirme + içerik disiplini için **`CLAUDE.md`**; canlı iş takibi için **`docs/web-is-listesi.md`**.

---

## Sistem (özet — hatırlatma)

**Stack:** Astro 5 (SSG) + TypeScript (strict). Tailwind yok (prototipin CSS-değişken token sistemi taşındı). Fontlar self-host (OFL: Inter + IBM Plex Mono). 4 renk teması `body.theme-*` ile; slot adları sabit (`--bronze`=Platform, `--steel`=DevOps, `--terra`=App), **Alaşım kilitli varsayılan** (diğer 3 yalnız `?theme=` ile iç karşılaştırma).

**Altyapı (canlı):**

| Katman | Ne |
|---|---|
| Hosting | **Railway** (origin) arkasında **Cloudflare** (DNS + proxy) |
| Form CTA | **Cloudflare Worker + Email Routing** (`cloudflare/form-worker/`) → doğrulanmış Workspace hedefine düşer; 3. taraf form SaaS'ı yok. Ayrı deploy, Astro build'ine dahil değil |
| Analitik | **Umami** self-host (`analytics.simetri.app`), çerezsiz; pazarlama + dokümanlar bölgeleri |
| SEO/GEO | **Google Search Console** + **Bing Webmaster** (ChatGPT/Copilot Bing indeksini kullanır); `sitemap-index.xml`, `robots.txt` (AI botları izinli), `llms.txt`, JSON-LD, hreflang |

> ⚠️ **Cloudflare gotcha:** "Control AI crawlers" altındaki **Block AI training bots** ve **Manage your robots.txt** KAPALI kalmalı — açılırsa repo `robots.txt`'ini ezer ve GEO'yu kırar.

---

## Repo yapısı (kısa)

```
src/
  pages/        index (TR) · en/index (EN) · [...slug] (iç sayfalar route haritasından) · dokumanlar/* · 404
  components/   SealMark · ClosedCircuitDiagram · ModuleIcon · Nav/Footer/Frame/Seo · sections/*
  layouts/      Base.astro · DocsShell.astro (docs bölgesi, sol sidebar)
  content/      koleksiyonlar (zod): blog · glossary · faq · reports  (her biri tr/ + en/)
  i18n/         tr.ts (doğruluk kaynağı) · en.ts · routes.ts (merkezî route + hreflang) · utils.ts
  styles/       tokens.css (Alaşım + 3 tema) · base.css · components.css
  site.ts       merkezî config (alan adı, env anahtarları — gizli değer YOK)
cloudflare/form-worker/   form Worker (ayrı deploy) — kurulum README'si içinde
design/         prototip = GÖRSEL DOĞRULUK KAYNAĞI (üretim değil) + chat-transcript (niyet/iterasyon)
docs/           marka/IA referansları + web-is-listesi.md (canlı iş takibi)
```

## Komutlar

```bash
npm run dev      # localhost:4321
npm run build    # astro check (tip) + statik build → dist/  (sıfır hatadan geçmeli)
npm run preview  # build çıktısını sun
npm run check    # yalnız tip/diagnostik
npm run format   # prettier
```

---

## Değişmez bağlam

- **Çok-sayfa zorunlu (GEO):** her tanım/makale ayrı URL — AI asistanları kaynak gösterebilsin. Tek sayfa = yalnız ana sayfa.
- **Marka kilitli:** "Alaşım — Mühürlü Devre" (`docs/brief-marka-kimligi-v2.md`).
- **İçerik DCN'den damıtılır**, üretim metni uydurulmaz. Site Türkçe (ana) + EN çekirdek (GEO).
- **Public repo:** fiyat / müşteri adı / efor / sır / iç adres girmez.
- **Dürüstlük çizgisi:** "devrim/çığır" yok; El/MCP yol haritası dilinde; halüsinasyon "mimariyle yönetilir".

## Köken

Tasarım: Claude Design handoff v2 (2026-06-12). Kanonik strateji/içerik aslı DCN'de; `docs/` çalışma kopyalarıdır.

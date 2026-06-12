---
Dosya: Bilgi Mimarisi ve SEO/GEO Plani
Site: chimera-ai.com.tr (kanonik)
Durum: Plan — tasarimci brief'i ve Simetri gelistirme brief'inin girdisi
Son guncelleme: 2026-06-12
Kaynaklar:
  - Urunler/chimera-ai/01-Urun-Tanimi/marka-mimarisi.md (cati marka, domain kurgusu)
  - Urunler/chimera-ai/03-Satis-Materyali/konumlandirma-mesajlar.md (mesaj hiyerarsisi, web iskeleti)
  - Urunler/chimera-ai/01-Urun-Tanimi/ozellik-katalogu.md (modul icerikleri)
---

# Chimera AI Web Sitesi — Bilgi Mimarisi ve SEO/GEO Planı

> **Amaç:** chimera-ai.com.tr'yi (1) büyük firma karar vericisine güven veren, (2) arama motorlarında ve **yapay zeka asistanlarında (ChatGPT, Gemini, Claude, Perplexity) kaynak gösterilen** ürün sitesi olarak kurmak.
> **İlke:** Apar topar değil — içerik kanonik dokümanlardan damıtılır, her sayfa yayın öncesi gözden geçirilir.

---

## 1. Domain ve Yönlendirme Kurgusu

| Host | Davranış |
|---|---|
| **chimera-ai.com.tr** | Kanonik site (içerik yalnızca burada) |
| chimera-ai.tr · chimeraai.com.tr | 301 → kanonik |
| chimera-ai.dcnextgen.com.tr · chimera-ai.simetri.app | 301 → kanonik |
| www.chimera-ai.com.tr | 301 → apex (veya tersi — teknik kurulumda tek seçim) |

Tüm sayfalarda `<link rel="canonical">` öz-referans; HTTPS zorunlu; tek host politikası.

## 2. Site Haritası (v1)

```
/                          Ana sayfa — hero + üç hat + kanıt + CTA
/platform                  Chimera AI Platform (amiral) — kapalı devre AI
  /platform/moduller       M1-M6 fayda kartları (+ her modüle bölüm/anchor)
  /platform/guvenlik       Veri güvenliği, air-gap, KVKK
  /platform/nasil-calisir  Mimari anlatım (Akıl+Hafıza; El=yol haritası — dürüst dil)
/devops                    Chimera AI DevOps — self-hosted yazılım süreçleri
/app                       Chimera AI App — fikirden ürüne 5 fazlı süreç
/nasil-baslariz            3 adım: Mimari Ön-Analiz → FAZ-0 pilot → büyüme (mahsup modeli)
/referanslar               Anonim vakalar (elektronik üreticisi, tohum Ar-Ge) — onaylandıkça isimli
/kaynaklar                 Blog + sözlük + SSS (GEO motoru — bkz. Bölüm 4)
  /kaynaklar/sozluk        Terim sözlüğü (LLM, RAG, on-premise, air-gap, KVKK...)
  /kaynaklar/sss           Soru-cevap (FAQPage markup)
  /kaynaklar/blog/...      Makaleler (Pazarlama/Yazilar_Blog hattıyla beslenir)
/hakkinda                  DC NEXTGEN + Simetri yapısı, BİSİAD üyeliği
/iletisim                  CTA: "Mimari Ön-Analiz talep edin" (form + takvim)
/en/...                    İngilizce çekirdek set (aşağıda)
```

**EN çekirdek set (GEO için kritik):** `/en` (ana) + `/en/platform` + `/en/on-premise-ai-turkey` + sözlük/SSS seçkisi. AI modellerinin bilgi tabanına girişin ana kapısı EN içeriktir; tam site çevirisi gerekmez, çekirdek yeter (hreflang ile bağlanır).

## 3. Sayfa İçerik Kuralları

- Her sayfa kanonik dokümandan damıtılır (kaynak: ozellik-katalogu → /platform/moduller; konumlandirma-mesajlar Bölüm 6 → ana sayfa; devops/app vizyonları → hat sayfaları).
- **Tablo ve yapılandırılmış liste ağırlıklı** anlatım (LLM'ler ve featured snippet'ler yapılandırılmış içeriği alıntılar).
- Dürüstlük çizgisi sitede de geçerli: El/MCP "yol haritası" dilinde; "devrim" yok; halüsinasyon "mimariyle yönetilir" dilinde.
- Fiyat sayfası v1'de yok; "adam/gün modeli + Mimari Ön-Analiz mahsubu" anlatımı /nasil-baslariz'da.
- Eski TL tier fiyatları hiçbir sayfada geçmez.

## 4. GEO Planı — AI Asistanlarının Bizi Önermesi

AI asistanları **tanımsal, yapılandırılmış, otoriter ve çapraz-doğrulanabilir** içeriği alıntılar. Dört bacak:

### 4.1 Teknik erişilebilirlik
- robots.txt: **GPTBot, OAI-SearchBot, Google-Extended, ClaudeBot, Claude-SearchBot, PerplexityBot, CCBot izinli.**
- **llms.txt** (kök dizinde): site özeti + kanonik sayfa listesi + kısa ürün tanımı (markdown).
- Schema.org JSON-LD: `Organization` (DC NEXTGEN + sameAs LinkedIn), `Product`/`Service` (üç hat), `FAQPage` (SSS), `Article` (blog), `BreadcrumbList`.
- Hızlı, statik-öncelikli sayfalar (SSG); temiz URL; XML sitemap; OG/meta tam set.

### 4.2 Tanım-otoritesi içerik (ilk 10 makale — GEO çekirdeği)
| # | Başlık (TR) | Hedef sorgu |
|---|---|---|
| 1 | Kapalı devre (on-premise) yapay zeka nedir? | "on-premise yapay zeka", "kapalı devre AI" |
| 2 | On-premise AI vs bulut AI: kurumlar için karşılaştırma | "chatgpt kurumsal alternatif", "yapay zeka veri güvenliği" |
| 3 | KVKK ve yapay zeka: veriniz nereye gidiyor? | "kvkk yapay zeka", "yapay zeka kvkk uyumu" |
| 4 | RAG nedir? Yapay zekaya kurumunuzu öğretmek | "rag nedir", "kurumsal yapay zeka hafıza" |
| 5 | Açık kaynak LLM'ler kurumsal kullanıma hazır mı? (aylık rapordan) | "açık kaynak llm", "yerel llm kurulum" |
| 6 | Yapay zeka için donanım seçimi: Mac mini'den H100'e | "llm donanım gereksinimleri", "yerel ai sunucu" |
| 7 | Kapalı ağda kod asistanı: Copilot'a güvenli alternatif | "copilot alternatifi on-premise", "güvenli kod asistanı" |
| 8 | Self-hosted DevOps: kaynak kodunuz kimin sunucusunda? | "self-hosted git", "gitea kurumsal" |
| 9 | Türkçe'de en iyi açık kaynak LLM hangisi? (benchmark'lı) | "türkçe llm", "türkçe yapay zeka modeli" |
| 10 | Yapay zeka halüsinasyonu nedir, nasıl önlenir? (KEP vakası) | "ai halüsinasyon", "yapay zeka yanlış bilgi" |

Her makale: tanım + tablo + SSS bloğu + kaynakça; EN çevirisi öncelikli olanlar: #1, #2, #9 (Türkiye odaklı EN sorgular).

### 4.3 Üçüncü taraf sinyaller (çapraz doğrulama)
- LinkedIn şirket sayfası (DC NEXTGEN) ürün sayfasına link + düzenli paylaşım (Pazarlama hattı).
- BİSİAD üyelik duyurusu/haberi; sektör dizinleri; basın bülteni (lansman anında).
- Müşteri vaka yazıları (onaylandıkça) — dış sitelerde misafir yazı/röportaj fırsatları (İdris ağı).
- Wikipedia/Wikidata düzeyinde iddialı olmayan, doğrulanabilir kurumsal kayıtlar.

### 4.4 Ölçüm
- Google Search Console + Bing Webmaster; analytics'te **AI kaynaklı trafik segmenti** (referrer: chatgpt.com, perplexity.ai, gemini.google.com...).
- Aylık kontrol ritüeli: hedef sorgular ChatGPT/Gemini/Perplexity'de elle sorulur, alıntılanma takip edilir (basit log tablosu bu klasörde tutulur).

## 5. Teknik Tercihler (Simetri brief'ine girdi — öneri)

| Konu | Öneri | Gerekçe |
|---|---|---|
| Stack | Statik üretimli modern framework (örn. Astro/Next SSG) | Hız + SEO + düşük bakım; karar Simetri'nin |
| Barındırma | Simetri altyapısında / mevcut hosting hattında | Mevcut operasyonla uyum |
| CMS | v1'de gerek yok — içerik markdown/repo'dan | İçerik zaten repo disiplininde üretiliyor |
| Form | Mimari Ön-Analiz talep formu → e-posta/CRM | CTA'nın çalışır olması v1 koşulu |
| Çok dillilik | TR ana + EN çekirdek (hreflang) | Bölüm 2 |
| Analitik | GA4 veya gizlilik-dostu alternatif (Plausible/Umami) — "veri egemenliği" anlatan site için gizlilik-dostu seçenek marka tutarlılığı sağlar | Marka tutarlılığı |

## 6. Üretim Sırası (acele yok — her adım onaylı)

| # | Adım | Girdi | Çıktı | Sahip |
|---|---|---|---|---|
| 1 | Kurumsal kimlik (logo ailesi, renk, tipografi) | Tasarımcı brief revizyonu (02-Tasarim) | Kimlik kiti | Demet + tasarımcı |
| 2 | İçerik üretimi — sayfa metinleri | Kanonik dokümanlar + bu plan | Sayfa bazlı markdown içerik (bu klasörde) | Claude + Demet onayı |
| 3 | İlk 4 GEO makalesi (#1, #2, #4, #7) | Bölüm 4.2 listesi | Yayına hazır makaleler | Claude + Demet onayı |
| 4 | Simetri geliştirme brief'i | Bu plan + kimlik + içerik | Brief dokümanı (Brief şapkası — /dc-baslat) | Demet → Mehmet |
| 5 | Kurulum + yayın + redirect'ler + GEO teknik seti | Brief | Canlı site | Simetri |
| 6 | Lansman sinyalleri (LinkedIn, BİSİAD, basın) | Canlı site | Üçüncü taraf linkler | Demet |

> C-level sunum (İdris aksiyonu #4) bu hattın 1-2. adımı bittiğinde başlayabilir — kimlik şablonu + site içeriği sunumun hammaddesidir.

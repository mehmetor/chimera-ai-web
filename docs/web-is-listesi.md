# Chimera AI Web — İş Listesi

Web sitesi geliştirme + içerik hattının canlı takip dokümanı.
**Public repo disiplini:** bu dosyada ve sitede **fiyat / müşteri adı / a-g efor / iç satış notu / NDA içeriği YOK.**

> **Demet onayı geldi** (DCN içeriği — moduller/rapor/nasil-calisir/guvenlik deploy'a hazır).
> **Navigasyon köklü değişti:** İki bölge — Pazarlama (üst nav + footer) ve **Dokümanlar** (`/dokumanlar`, sol sidebar'lı docs shell). Teknik + referans + blog dokümanlar bölgesine taşındı; eski URL'ler 301'lendi. EN: `/en/docs`. Kırık iç link: 0.

---

## ✅ Tamamlanan (kod)

- Faz 0–4: Astro iskele, tasarım sistemi (4 tema), ana sayfa (11 bölüm), EN sayfaları + i18n, içerik koleksiyonları (sözlük/SSS/blog).
- GEO/SEO: JSON-LD (Organization/Product/FAQPage/Article/BreadcrumbList/DefinedTerm/BlogPosting), robots/llms/sitemap/canonical/hreflang.
- Yayın hazırlığı: 404, OG görseli, GitHub Actions CI, `.env.example`.
- Nav sadeleştirme (Platform·DevOps·App·Nasıl Başlarız) + zengin footer.

## 🔜 Sırada (az/hiç DCN kaynağı gerektirmeyen)

- [ ] **`/platform/moduller`** — özellik kataloğundan modül kataloğu (ne yapar / kime / bileşenler / teslim / sınırlar). *Kaynak: `ozellik-katalogu.md`.*
- [x] **`/platform/nasil-calisir`** — üçlü mimari dürüst anlatımı (Akıl/Hafıza=teslim, El/MCP=yol haritası) + kapalı devre diyagramı + KEP kanıtı.
- [x] **Sözlük genişletme** — 8 yeni terim: embedding, reranker, vektör veritabanı, MoE, quantization, MCP, fine-tuning/LoRA, guardrail. (STT/TTS ileride eklenebilir.) Toplam 13 TR terim.
- [x] **Mobil nav menüsü** — hamburger + açılır panel (erişilebilir, <1020px).
- [x] **`/platform/guvenlik`** — sıfır dış veri çıkışı, erişim denetimi, izleme, veri bütünlüğü, air-gap 3-faz, KVKK dürüst sınır. *Kaynak: ozellik-katalogu (M0 güvenlik).*

> **Platform alt sayfaları tamam:** moduller · nasil-calisir · guvenlik (hepsi Platform bölümünden + birbirinden linkli).

## ⏳ DCN içeriği / karar bekleyen

- [x] **Benchmark Raporu sayfası** (`/kaynaklar/rapor/2026-06`) — Haziran raporundan **public-safe damıtım** yapıldı: `reports` koleksiyonu + indeks + detay (TechArticle JSON-LD), ana sayfa Kaynaklar'a kart. Tüketici GPU sokak fiyatı göreceli rehbere indirildi, LaTeX düzeltildi, "her ay yayımlanan rapor" iddiasının **kanonik dayanağı** kuruldu. ⚠️ **Yayın (deploy) öncesi Demet onayı gerekir.**
- [x] **Rapordan odaklı blog yazıları** (IA §4.2): **#9 en iyi Türkçe LLM · #6 donanım seçimi · #5 LLM hazır mı ✅** (`/dokumanlar/blog/{turkce-icin-en-iyi-acik-kaynak-llm, on-premise-llm-donanim-secimi, acik-kaynak-llm-kuruma-hazir-mi}`). Tüm Türkçe içerik global `tr-humanizer` skill'iyle yazıldı (doğal Türkçe + AI-tell temizliği; noktadan-sonra-bağlaç kuralı dahil; her biri 3 mercekli adversaryal incelemeden geçti).
- [~] GEO makaleleri (IA §4.2 — 10 çekirdek). Tamam: **#2 on-premise vs bulut · #5 LLM hazır mı · #6 donanım · #9 Türkçe LLM · #1 kapalı devre nedir · #4 RAG nedir · #7 kapalı ağda kod asistanı** (7/10). Kalan: #3 KVKK, #8 self-hosted DevOps, #10 halüsinasyon (KEP vakası).
- [ ] Gerçek saha fotoğrafları (duotone slot'lar: hero, referanslar).
- [ ] Referans vaka detayları (anonim — onaya bağlı).

## 🚀 Deploy yapılandırması (içerik değil)

- [~] **Form (CTA):** Cloudflare Worker + Email Routing seçildi — kod hazır (`cloudflare/form-worker/`, lead Workspace kutusuna, 3. taraf SaaS yok). **Bekleyen (kullanıcı):** CF Email Routing'i `chimera-ai.com.tr`'de aç + hedefi doğrula + Worker deploy + Railway `PUBLIC_FORM_ENDPOINT`. Rehber: `cloudflare/form-worker/README.md`. (Bağlanana kadar form mailto'ya düşüyor.)
- [~] **Analitik:** Umami (self-host, çerezsiz, tek instance tüm siteler) seçildi — head snippet'i Umami formatına (`data-website-id`) geçti. **Bekleyen:** Umami örneği + `PUBLIC_ANALYTICS_WEBSITE_ID`/`_SRC`.
- [~] **SEO:** Google Search Console meta doğrulaması bağlandı (`PUBLIC_GSC_VERIFICATION`). **Bekleyen:** GSC'de domain doğrula + sitemap gönder. (GA kullanılmıyor — SEO/GEO'ya katkısı yok + KVKK çerez yükü.)

## 📚 İçerik kaynakları (DCN — kanonik, repo dışı)

Konum: `~/DCN/URUNLER/chimera-ai/`
- `01-Urun-Tanimi/ozellik-katalogu.md` — modül kataloğu **(işleniyor → moduller)**
- `01-Urun-Tanimi/marka-mimarisi.md`, `urun-vizyonu.md`, `model-donanim-matrisi.md`
- `2026-06-on-premise-acik-kaynak-llm-karsilastirma-raporu.md` — Haziran raporu (makale adayı)
- `03-Satis-Materyali/konumlandirma-mesajlar.md`
- ⚠️ `paketleme-fiyatlandirma.md` ve NDA PDF'i — **siteye/repoya asla girmez.**

# Chimera AI Web — İş Listesi

Web sitesi geliştirme + içerik hattının canlı takip dokümanı.
**Public repo disiplini:** bu dosyada ve sitede **fiyat / müşteri adı / a-g efor / iç satış notu / NDA içeriği YOK.**

---

## ✅ Tamamlanan (kod)

- Faz 0–4: Astro iskele, tasarım sistemi (4 tema), ana sayfa (11 bölüm), EN sayfaları + i18n, içerik koleksiyonları (sözlük/SSS/blog).
- GEO/SEO: JSON-LD (Organization/Product/FAQPage/Article/BreadcrumbList/DefinedTerm/BlogPosting), robots/llms/sitemap/canonical/hreflang.
- Yayın hazırlığı: 404, OG görseli, GitHub Actions CI, `.env.example`.
- Nav sadeleştirme (Platform·DevOps·App·Nasıl Başlarız) + zengin footer.

## 🔜 Sırada (az/hiç DCN kaynağı gerektirmeyen)

- [ ] **`/platform/moduller`** — özellik kataloğundan modül kataloğu (ne yapar / kime / bileşenler / teslim / sınırlar). *Kaynak: `ozellik-katalogu.md`.*
- [ ] **`/platform/nasil-calisir`** — **"Akıl (LLM) + Hafıza (RAG) var / El (MCP) = yol haritası"** dürüst mimari anlatımı. *Kaynak: katalog dürüstlük notu + mimari doc.*
- [ ] **Sözlük genişletme** — katalog Kısa Sözlük'ten: embedding, reranker, vektör veritabanı, MoE, quantization, MCP, LoRA/fine-tuning, guardrail, STT/TTS.
- [ ] **Mobil nav menüsü** (linkler 1020px altında gizleniyor, hamburger yok).
- [ ] `/platform/guvenlik` — güvenlik / KVKK / air-gap. *Kaynak: data-security içeriği.*

## ⏳ DCN içeriği / karar bekleyen

- [ ] **İlk GEO makaleleri** (IA §4.2). **Haziran 2026 raporu** aday (`2026-06-...-karsilastirma-raporu.md`) — uzun; muhtemelen özetlenip ayrı bir "rapor/benchmark" sayfası gerekir. → **Yaklaşım sonra konuşulacak.**
- [ ] Gerçek saha fotoğrafları (duotone slot'lar: hero, referanslar).
- [ ] Referans vaka detayları (anonim — onaya bağlı).

## 🚀 Deploy yapılandırması (içerik değil)

- [ ] Form servisi seçimi + `PUBLIC_FORM_ENDPOINT` (CTA'nın çalışması v1 koşulu).
- [ ] Gizlilik-dostu analitik (Plausible/Umami) + `PUBLIC_ANALYTICS_*`.

## 📚 İçerik kaynakları (DCN — kanonik, repo dışı)

Konum: `~/DCN/URUNLER/chimera-ai/`
- `01-Urun-Tanimi/ozellik-katalogu.md` — modül kataloğu **(işleniyor → moduller)**
- `01-Urun-Tanimi/marka-mimarisi.md`, `urun-vizyonu.md`, `model-donanim-matrisi.md`
- `2026-06-on-premise-acik-kaynak-llm-karsilastirma-raporu.md` — Haziran raporu (makale adayı)
- `03-Satis-Materyali/konumlandirma-mesajlar.md`
- ⚠️ `paketleme-fiyatlandirma.md` ve NDA PDF'i — **siteye/repoya asla girmez.**

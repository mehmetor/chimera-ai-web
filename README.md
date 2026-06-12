# Chimera AI — Web (chimera-ai.com.tr)

Bu depo **Chimera AI ürün sitesinin geliştirme evidir.** Tasarım handoff'u, marka/teknik dokümanlar ve (ileride) üretim kodu burada yaşar.

> **Kurumsal bağlam:** Ürün ve strateji DC NEXTGEN'de tanımlanır (DCN çalışma alanı), geliştirme Simetri'de yapılır. Burası **yapan** taraftır. Kanonik strateji/içerik dokümanlarının aslı DCN'dedir; bu depodaki `docs/` o dokümanların geliştirme için **çalışma kopyalarıdır**.

---

## Bu depoda ne var

```
chimera-ai-web/
├── README.md                     ← bu dosya (giriş + yön)
│
├── design/                       ← GÖRSEL DOĞRULUK KAYNAĞI (tasarım handoff)
│   ├── README-handoff.md         ← Claude Design'ın coding-agent talimatı
│   ├── chat-transcript.md        ← tasarım sürecinin tam sohbeti (niyet + iterasyonlar)
│   └── prototype/                ← ÇALIŞAN prototip (HTML/CSS/React-Babel, tarayıcıda açılır)
│       ├── index.html            ← ana dosya — tarayıcıda aç
│       ├── chimera.css           ← token'lar + 4 renk teması + tüm stil
│       ├── chimera-mark.jsx      ← mühür-işaret, ikon seti, kapalı devre diyagramı
│       ├── chimera-sections-a.jsx / -b.jsx
│       ├── chimera-content.js    ← tüm metin/içerik (TR + EN sözlük)
│       ├── tweaks-panel.jsx      ← canlı ayar paneli (tema, hero, mühür varyantı…)
│       └── image-slot.js         ← fotoğraf slotu bileşeni (duotone)
│
└── docs/                         ← MARKA + TEKNİK REFERANSLAR
    ├── brief-marka-kimligi-v2.md ← kilitli kimlik brief'i ("Alaşım — Mühürlü Devre")
    ├── bilgi-mimarisi-seo-geo.md ← site haritası + SEO/GEO planı (ÇOK-SAYFA mimarisi)
    ├── girdi-paketi-2026-06.pdf  ← ürün özü, mesajlar, modüller (tasarımcı girdi paketi)
    └── girdi-paketi-extracted.txt
```

---

## Durum (2026-06-12)

- **Tasarım: v2** — kilitli "Alaşım — Mühürlü Devre" konsepti üzerine kurulu, dört renk teması ve düzeltilmiş buton kontrastıyla. Yönetici kontrolünden geçti; 7 maddelik geri bildirim ve buton/kontrast düzeltmeleri kaynağa işlendi.
- **`prototype/` üretim kodu DEĞİL.** Tarayıcıda çalışan bir referans/mockup'tır (CDN'den React + Babel). Üretim sürümü buradaki görseli **birebir** yeniden kuracak — stack tercihi geliştiricinindir (IA planı Astro/Next SSG öneriyor, bkz. `docs/bilgi-mimarisi-seo-geo.md` §5).
- **Tweaks paneli kilitli değil** — kombinasyon (tema/hero/mühür) hâlâ karşılaştırma aşamasında; karar verilince `index.html` içindeki `TWEAK_DEFAULTS` sabitlenir ve panel sadeleştirilir.

### Dört renk teması

Hepsi mat/desature, aynı kontrast kalibrasyonuyla. Tema `body.theme-*` sınıfıyla değişir; slot adları sabit (`--bronze`=Platform, `--steel`=DevOps, `--terra`=App), temalar yalnızca değerleri yeniden eşler.

| Tema | Aile | Not |
|---|---|---|
| **Alaşım** (varsayılan) | Bronz / Çelik / Terrakota | Brief'in kilitli paleti |
| **Gece Çeliği** | mavi çelik / nikel / bakır | soğuk grafit zemin |
| **Patine** | patina yeşili / pirinç / oksit | yeşile çalan obsidyen |
| **Volkanik** | oksit kırmızı / kül / okra | nötr grafit zemin |

> **Marka notu:** Brief "Alaşım"ı kilitli palet ilan ediyor. Farklı bir tema kalıcı seçilirse kimlik dokümanına (`docs/brief-marka-kimligi-v2.md`) da yansıtılmalı. Temalar şu an karşılaştırma ve "yeni sayfaları farklı temalarla görme" amacıyla açık tutuluyor.

---

## Tek sayfa mı, çok sayfa mı?

Prototipteki tek uzun sayfa = **ana sayfa (`/`)**. Bütün site değil. SEO/GEO planı (`docs/bilgi-mimarisi-seo-geo.md`) çok-sayfalı bir mimari tanımlar (`/platform`, `/devops`, `/app`, `/kaynaklar/blog/...`, `/hakkinda` …) ve bu yapısal bir zorunluluktur: AI asistanlarının (ChatGPT/Gemini/Perplexity/Claude) içeriği kaynak göstermesi için her tanım/makale **ayrı URL** olmalı. Tek sayfa GEO motorunu taşıyamaz.

İçerik üretimi DCN tarafında (Claude + Demet onayı) kanonik dokümanlardan damıtılır; tasarımcı **şablon** verir, **metni** vermez.

---

## Geliştirmeye başlarken

1. **Prototipi gör:** `design/prototype/index.html`'i tarayıcıda aç. Sağdaki Tweaks panelinden temaları, hero ve mühür varyantlarını karşılaştır.
2. **Görseli oku, ekran görüntüsü alma:** ölçüler/renk/düzen kaynakta (`chimera.css`, `*.jsx`) açık yazılı.
3. **Üretim stack'i seç** (IA planı §5: statik üretimli modern framework — Astro/Next SSG; CMS'siz, içerik markdown/repo'dan).
4. **Çok-sayfa mimarisini** `docs/bilgi-mimarisi-seo-geo.md` §2'den kur; GEO teknik setini (robots.txt, llms.txt, JSON-LD, hreflang) §4'ten uygula.
5. Sayfa metinleri DCN'den sayfa-bazlı markdown olarak gelecek; şablona onları yerleştir.

---

## Kaynak / köken

- Tasarım: Claude Design (claude.ai/design) handoff bundle, sürüm 2 (`CbYpjTwBXyEAcN3ZfXzucQ`), 2026-06-12.
- Orijinal ana dosya adı "Chimera AI Web Sitesi.html" → boşluksuz kural gereği `index.html`.
- `docs/` içeriğinin kanonik aslı DCN'de: marka mimarisi/konumlandırma/özellik katalogu `DCN/Urunler/chimera-ai/`, IA planı `DCN/Web/chimera-ai-sitesi/`.

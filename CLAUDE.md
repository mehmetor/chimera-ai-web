# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Bu depo PUBLIC — sızıntı riski

Depo herkese açıktır. Commit etmeden önce **her zaman** kontrol et:

- **Kanonik strateji/iç dokümanlar buraya GİRMEZ.** Aslı DCN'dedir (`DCN/...`). `docs/` yalnızca geliştirme için damıtılmış **çalışma kopyalarıdır**; DCN'den ham doküman, iç notlar veya `dc-baslat` türü süreç çıktıları kopyalama.
- **Müşteri adı yok.** Referanslar onaylanana kadar anonim kalır ("elektronik üreticisi", "tohum Ar-Ge"). Gerçek firma/kişi adı ekleme.
- **Fiyat yok.** Eski TL tier fiyatları ve herhangi bir somut fiyat hiçbir dosyada/sayfada geçmez. Model "adam/gün + Mimari Ön-Analiz mahsubu" anlatımıyla sınırlı (bkz. `docs/bilgi-mimarisi-seo-geo.md` §3).
- Sır/anahtar/token, iç URL, kişisel veri, e-posta listeleri — hiçbiri commit edilmez.

Yeni içerik eklerken "bu satır public internette görünse sorun olur mu?" sorusunu geçemeyen şey commit edilmez.

## Deponun durumu: henüz üretim kodu YOK

Bu, üretim sitesinin **geliştirme evidir** ama şu an sadece tasarım handoff'u + dokümanlar var. Build/lint/test sistemi, paket yöneticisi, CI **yok**. `design/prototype/` dışında çalıştırılacak bir şey yok.

- **Üretim stack'i henüz seçilmedi.** IA planı SSG öneriyor (Astro/Next, CMS'siz, içerik markdown'dan) — bkz. `docs/bilgi-mimarisi-seo-geo.md` §5. Karar Simetri'nin; stack kurarken bu öneriyi başlangıç noktası al ama kullanıcıyla doğrula.
- Üretim kodu yazmaya başlamadan önce belirsizlikleri kullanıcıya sor (handoff talimatı `design/README-handoff.md`).

## `design/prototype/` — referans, üretim değil

Tarayıcıda çalışan bir mockup (CDN'den React 18 + Babel standalone, build yok). **Görsel doğruluk kaynağıdır, kopyalanacak mimari değil.**

- **Görevin: görseli birebir yeniden kurmak**, prototipin iç yapısını taşımak değil. React/Babel-CDN deseni üretime taşınmaz.
- **Tarayıcıda render etme / ekran görüntüsü alma** (kullanıcı istemedikçe). Tüm ölçü/renk/düzen kaynakta açık yazılı: `chimera.css` (tasarım token'ları + 4 tema), `*.jsx` (bölümler), `index.html` baş kısmındaki uzun yorum bloğu (tasarım sistemi kararları + uzman kontrast düzeltmeleri).
- İlk olarak `design/chat-transcript.md`'yi oku — niyet ve iterasyonların nerede durduğu orada.

### Prototip dosya rolleri
- `index.html` — kök; `TWEAK_DEFAULTS` (satır ~59, `EDITMODE-BEGIN/END` arası) varsayılan tema/varyantları tutar. Karar kesinleşince bu sabitlenir, Tweaks paneli sadeleşir.
- `chimera.css` — token'lar, `body.theme-*` ile değişen 4 renk teması, tüm stil.
- `chimera-content.js` — `window.CHIMERA_I18N` (TR + EN tüm metin). Üretim metni buradan DEĞİL, DCN'den sayfa-bazlı markdown olarak gelir.
- `chimera-mark.jsx` — mühür-işaret (kapalı halka), ikon seti, kapalı devre diyagramı.
- `chimera-sections-a.jsx` / `-b.jsx` — sayfa bölümleri.
- `tweaks-panel.jsx` — canlı karşılaştırma paneli (tema/hero/mühür varyantları); üretime taşınmaz.
- `image-slot.js` — duotone fotoğraf slotu bileşeni.

## Mimari kararlar (üretim sitesini kurarken bağlayıcı)

### Çok-sayfa zorunluluğu (tek sayfa DEĞİL)
Prototipteki tek uzun sayfa = yalnızca **ana sayfa (`/`)**. Tüm site `docs/bilgi-mimarisi-seo-geo.md` §2'deki çok-sayfalı haritadır (`/platform`, `/devops`, `/app`, `/kaynaklar/blog/...`, `/hakkinda` …). Bu **GEO zorunluluğudur**: AI asistanlarının (ChatGPT/Gemini/Claude/Perplexity) içeriği kaynak göstermesi için her tanım/makale **ayrı URL** olmalı. Tek sayfaya sıkıştırma.

### GEO/SEO teknik seti (üretimde uygulanır)
`docs/bilgi-mimarisi-seo-geo.md` §4: kökte `llms.txt`, AI bot'larına izinli `robots.txt` (GPTBot, ClaudeBot, PerplexityBot, CCBot…), Schema.org JSON-LD (`Organization`/`Product`/`FAQPage`/`Article`/`BreadcrumbList`), öz-referanslı `canonical`, TR ana + EN çekirdek `hreflang`, XML sitemap, statik-öncelikli hızlı sayfalar.

### Marka kimliği (kilitli)
`docs/brief-marka-kimligi-v2.md`: "Alaşım — Mühürlü Devre" konsepti. Inter (başlık −1.5% tracking) + IBM Plex Mono, ikisi de OFL. Çizgi dili 1.5px/kare düğüm. Mühür hareketi: halkanın kapanışı ~600ms ease-out tek sefer; `prefers-reduced-motion` → statik.

### Temalar
4 tema mat/desature, aynı kontrast kalibrasyonuyla; `body.theme-*` ile değişir. Slot adları sabit (`--bronze`=Platform, `--steel`=DevOps, `--terra`=App), temalar yalnız değerleri yeniden eşler. Brief "**Alaşım**"ı (varsayılan) kilitli palet ilan eder — farklı tema kalıcı seçilirse `docs/brief-marka-kimligi-v2.md` da güncellenmeli.

## Dil ve içerik

- Site ve tüm dokümanlar **Türkçe** (ana), EN çekirdek set GEO için. Yazışma/yorum/commit'leri repo diline (TR) uydur.
- **Şablon ile metin ayrıdır:** tasarım/kod şablonu verir, sayfa metinleri DCN'den onaylı markdown olarak gelir. Üretim metnini kendin uydurma.
- "Dürüstlük çizgisi": "devrim" yok; El/MCP yetenekleri "yol haritası" dilinde; halüsinasyon "mimariyle yönetilir" dilinde anlatılır.

# Chimera AI — Form Worker (Cloudflare + Email Routing)

Mimari Ön-Analiz formunun (`src/components/sections/Contact.astro`) lead'lerini
**üçüncü-taraf form servisine düşürmeden** kendi gelen kutuna ulaştırır.

## Mimari (neden böyle?)

```
Ziyaretçi → form POST → Cloudflare Worker (chimera-ai.com.tr/api/on-analiz)
                              │  send_email binding
                              ▼
                        Email Routing (chimera-ai.com.tr)
                              │  doğrulanmış hedefe yollar
                              ▼
                  Senin Google Workspace kutun (…@dcnextgen.com.tr)
```

- Lead verisi Formspree gibi **ABD SaaS'ına gitmez** — Cloudflare edge'de işlenir, kendi kutuna gelir. "Veri egemenliği" markasıyla tutarlı.
- **`dcnextgen.com.tr` ve Google Workspace'e DOKUNULMAZ.** Email Routing yalnız **`chimera-ai.com.tr`** üzerinde açılır. Workspace kutun sadece "doğrulanmış hedef" olur (MX'i değişmez).
- Worker `form@chimera-ai.com.tr`'den gönderir; `Reply-To` ziyaretçinin adresidir → kutudan **doğrudan yanıtlarsın**.

## Önkoşullar

- `chimera-ai.com.tr` Cloudflare'de ve **proxy'li** (turuncu bulut). Site Railway'de origin olarak kalır; bu kurulum yalnız e-posta (MX) ve `/api/on-analiz` route'unu etkiler.
- `chimera-ai.com.tr`'nin **başka e-posta ihtiyacı olmamalı** (Email Routing onun MX'ini devralır). Eğer bu domain'de Workspace/başka mail varsa önce bana söyle — `LEAD_FROM` domain'ini değiştiririz.

## Adımlar

### 1. Email Routing'i `chimera-ai.com.tr`'de aç
Cloudflare Dashboard → ilgili hesap → **`chimera-ai.com.tr`** → **Email** → **Email Routing** → **Get started / Enable**.
Cloudflare gerekli **MX + TXT (SPF/DKIM)** kayıtlarını otomatik ekler. (Site A/CNAME kayıtları, Railway proxy'si etkilenmez — yalnız e-posta kayıtları.)

### 2. Hedef (gelen kutusu) adresini doğrula
Email Routing → **Destination addresses** → **Add** → Workspace kutunu gir (örn. `info@dcnextgen.com.tr` ya da özel bir `lead@dcnextgen.com.tr`).
Cloudflare o adrese **doğrulama maili** yollar → mailden linke tıkla. ✅
> Bu adım `dcnextgen.com.tr`'nin MX'ini **değiştirmez** — sadece Cloudflare'in oraya yollamasına izin verir.

### 3. (Önerilir) `info@chimera-ai.com.tr`'yi yönlendir
Email Routing → **Routing rules** → `info@chimera-ai.com.tr` → **Send to** → doğruladığın Workspace kutusu. Böylece sitedeki `info@` adresi de sana ulaşır.

### 4. `wrangler.toml`'u düzenle
`GELEN_KUTUSU@dcnextgen.com.tr` geçen **iki satırı** (2. adımda doğruladığın gerçek adresle) değiştir:
- `[[send_email]] destination_address`
- `[vars] LEAD_TO`

### 5. Worker'ı deploy et
```bash
cd cloudflare/form-worker
npm install
npx wrangler login        # tarayıcıda Cloudflare hesabına izin ver
npx wrangler deploy
```
`routes` tanımı sayesinde `chimera-ai.com.tr/api/on-analiz` otomatik bağlanır.
> Hesapta birden çok zone varsa: `npx wrangler deploy` doğru hesabı seçili istersen `CLOUDFLARE_ACCOUNT_ID` ver.

### 6. Siteye endpoint'i tanıt
Railway (site) ortam değişkeni:
```
PUBLIC_FORM_ENDPOINT=https://chimera-ai.com.tr/api/on-analiz
```
Kaydet → siteyi yeniden deploy et. Artık form **AJAX** gönderir (mailto fallback devre dışı).

### 7. Test
Formu doldur → gönder. Workspace kutuna **"Mimari Ön-Analiz talebi — <Kurum>"** başlıklı mail düşmeli. Yanıtla'ya basınca doğrudan ziyaretçiye gider (Reply-To).

## Sorun giderme

```bash
npx wrangler tail         # canlı log
```
- **`send_failed` (502):** hedef adres doğrulanmamış (2. adım) ya da `LEAD_FROM` domain'inde Email Routing kapalı (1. adım).
- **Form mailto'ya düşüyor:** `PUBLIC_FORM_ENDPOINT` boş ya da site yeniden deploy edilmedi.
- **404 / route yok:** `chimera-ai.com.tr` proxy'li mi (turuncu bulut)? `routes` pattern'i doğru mu?
- **Spam:** honeypot (`_gotcha`) gizli alan botları sessizce eler; ekstra koru­ma gerekirse Turnstile eklenebilir.

## Notlar
- Worker'ın **çalışma zamanı bağımlılığı yok** (`cloudflare:email` yerleşik). `npm install` yalnız `wrangler` (deploy aracı) içindir.
- Bu klasör Astro build'ine dahil değildir; ayrı deploy edilir.

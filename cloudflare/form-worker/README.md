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
- **`chimera-ai.com.tr` için posta kutusu (mailbox) GEREKMEZ — bu ideal durum.** Email Routing bir kutu değil, yönlendiricidir; `form@chimera-ai.com.tr` sanal bir gönderen adresidir (kutu gerektirmez) ve lead'ler senin `dcnextgen.com.tr` Workspace kutuna düşer. Tek koşul: bu domain'de **zaten çalışan başka** bir mail servisi (Workspace vb.) OLMAMALI — yoksa Email Routing MX'i devralırken çakışır. Kutu yokluğu = çakışma yok. (Bu domain'de başka mail varsa söyle, `LEAD_FROM` domain'ini değiştiririz.)

## Adımlar

### ✅ 1. Email Routing'i `chimera-ai.com.tr`'de aç
Cloudflare Dashboard → ilgili hesap → **`chimera-ai.com.tr`** → **Email** → **Email Routing** → **Get started / Enable**.
Cloudflare gerekli **MX + TXT (SPF/DKIM)** kayıtlarını otomatik ekler. (Site A/CNAME kayıtları, Railway proxy'si etkilenmez — yalnız e-posta kayıtları.)

### ✅ 2. Hedef (gelen kutusu) adresini doğrula
Email Routing → **Destination addresses** → **Add** → doğruladığın Workspace hedef adresi girildi ve doğrulandı.
> Bu adım `dcnextgen.com.tr`'nin MX'ini **değiştirmez** — sadece Cloudflare'in oraya yollamasına izin verir.

### ✅ 3. (Önerilir) `info@chimera-ai.com.tr`'yi yönlendir
Email Routing → **Routing rules** → Catch-all etkinleştirildi → doğrulanmış hedefe yönlendiriliyor.

### ✅ 4. `wrangler.toml`'u düzenle
`destination_address` ve `LEAD_TO` → doğrulanmış hedef adresle güncellendi.

### ✅ 5. Worker'ı deploy et
```bash
cd cloudflare/form-worker
npm install
npx wrangler login        # tarayıcıda Cloudflare hesabına izin ver
npx wrangler deploy
```
`routes` tanımı sayesinde `chimera-ai.com.tr/api/on-analiz` otomatik bağlanır.
> Hesapta birden çok zone varsa: `npx wrangler deploy` doğru hesabı seçili istersen `CLOUDFLARE_ACCOUNT_ID` ver.

### ✅ 6. Siteye endpoint'i tanıt
Railway (site) ortam değişkeni `PUBLIC_FORM_ENDPOINT=https://chimera-ai.com.tr/api/on-analiz` eklendi, site yeniden deploy edildi.

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

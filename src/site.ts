// CHIMERA AI — merkezî site yapılandırması (tek doğruluk kaynağı).
// Gizli değer YOK (public depo) — yalnız ortam değişkeni anahtarları okunur.

export const SITE = {
  name: "Chimera AI",
  domain: "chimera-ai.com.tr",
  url: "https://chimera-ai.com.tr",
  /** Üretici kurum (endorsement: "bir DC NEXTGEN ürünüdür") */
  org: "DC NEXTGEN",
  email: "info@chimera-ai.com.tr",
  /** DCN LinkedIn şirket sayfası — IA §4.3 (sameAs). Doldurulunca JSON-LD'ye girer. */
  linkedin: "",
  /** Mimari Ön-Analiz formu hedefi — deploy'da .env (PUBLIC_FORM_ENDPOINT). Boşsa form mailto'ya düşer. */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? "",
  /** Gizlilik-dostu analitik domaini (Plausible/Umami) — boşsa analitik yüklenmez. */
  analyticsDomain: import.meta.env.PUBLIC_ANALYTICS_DOMAIN ?? "",
  analyticsSrc: import.meta.env.PUBLIC_ANALYTICS_SRC ?? "",
} as const;

/** Site geneli Organization JSON-LD (her sayfada — GEO çapraz-doğrulama, IA §4.1). */
export function organizationSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.org,
    url: SITE.url,
    brand: { "@type": "Brand", name: SITE.name },
    description:
      "Kurumun kendi sınırları içinde (on-premise, kapalı devre) çalışan kurumsal yapay zeka platformu Chimera AI'ı geliştiren ve teslim eden kurum.",
  };
  if (SITE.linkedin) schema.sameAs = [SITE.linkedin];
  return schema;
}

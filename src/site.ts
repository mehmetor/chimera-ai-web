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
  /** Mimari Ön-Analiz formu hedefi — Cloudflare Worker route (PUBLIC_FORM_ENDPOINT). Boşsa form mailto'ya düşer. */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? "",
  /** Umami self-host analitik (PUBLIC_ANALYTICS_*). İkisi de doluysa script yüklenir; çerezsiz. */
  analyticsWebsiteId: import.meta.env.PUBLIC_ANALYTICS_WEBSITE_ID ?? "",
  analyticsSrc: import.meta.env.PUBLIC_ANALYTICS_SRC ?? "",
  /** Google Search Console doğrulama token'ı (PUBLIC_GSC_VERIFICATION) — boşsa meta basılmaz. */
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION ?? "",
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

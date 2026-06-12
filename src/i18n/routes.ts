// CHIMERA AI — merkezî route haritası (nav + hreflang + sayfa üretimi tek kaynak).
// Yerelleştirilmiş slug'lar: TR ana (prefixsiz), EN /en + İngilizce slug (GEO).
// IA §2 site haritası. Yeni sayfa eklemek = buraya bir satır + (gerekirse) bölüm.
import type { Lang } from "./utils";

export type RouteKey =
  | "platform"
  | "devops"
  | "app"
  | "start"
  | "references"
  | "resources"
  | "about"
  | "contact";

interface LocaleRoute {
  /** Tam yol (lang prefixi dahil), sondaki slash yok. */
  slug: string;
  /** Nav etiketi. */
  label: string;
}
export interface RouteDef {
  key: RouteKey;
  /** Ana sayfada bu route'a karşılık gelen bölüm id'si (anchor) — varsa nav kıyaslamasında kullanılır. */
  section: string;
  inNav: boolean;
  tr: LocaleRoute;
  en: LocaleRoute;
}

export const ROUTES: RouteDef[] = [
  { key: "platform", section: "platform", inNav: true, tr: { slug: "/platform", label: "Platform" }, en: { slug: "/en/platform", label: "Platform" } },
  { key: "devops", section: "devops", inNav: true, tr: { slug: "/devops", label: "DevOps" }, en: { slug: "/en/devops", label: "DevOps" } },
  { key: "app", section: "app", inNav: true, tr: { slug: "/app", label: "App" }, en: { slug: "/en/app", label: "App" } },
  { key: "start", section: "nasil-baslariz", inNav: true, tr: { slug: "/nasil-baslariz", label: "Nasıl Başlarız" }, en: { slug: "/en/how-we-start", label: "How We Start" } },
  { key: "references", section: "referanslar", inNav: true, tr: { slug: "/referanslar", label: "Referanslar" }, en: { slug: "/en/references", label: "References" } },
  { key: "resources", section: "kaynaklar", inNav: true, tr: { slug: "/kaynaklar", label: "Kaynaklar" }, en: { slug: "/en/resources", label: "Resources" } },
  { key: "about", section: "hakkinda", inNav: true, tr: { slug: "/hakkinda", label: "Hakkında" }, en: { slug: "/en/about", label: "About" } },
  { key: "contact", section: "iletisim", inNav: false, tr: { slug: "/iletisim", label: "İletişim" }, en: { slug: "/en/contact", label: "Contact" } },
];

const BY_KEY: Record<RouteKey, RouteDef> = Object.fromEntries(
  ROUTES.map((r) => [r.key, r]),
) as Record<RouteKey, RouteDef>;

export function route(key: RouteKey): RouteDef {
  return BY_KEY[key];
}

export function homeSlug(lang: Lang): string {
  return lang === "tr" ? "/" : "/en";
}

/** Nav öğeleri (etiket + yol), aktif dile göre. */
export function navItems(lang: Lang) {
  return ROUTES.filter((r) => r.inNav).map((r) => ({ key: r.key, href: r[lang].slug, label: r[lang].label }));
}

export function contactSlug(lang: Lang): string {
  return route("contact")[lang].slug;
}

/** hreflang çiftleri: bir route key için tüm dillerdeki tam URL slug'ları. */
export function hreflangFor(key: RouteKey | "home"): { tr: string; en: string } {
  if (key === "home") return { tr: "/", en: "/en" };
  const r = BY_KEY[key];
  return { tr: r.tr.slug, en: r.en.slug };
}

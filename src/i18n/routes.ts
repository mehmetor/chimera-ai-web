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
  | "about"
  | "contact";

interface LocaleRoute {
  /** Tam yol (lang prefixi dahil), sondaki slash yok. */
  slug: string;
  /** Nav etiketi. */
  label: string;
}
export type RouteGroup = "lines" | "company";

export interface RouteDef {
  key: RouteKey;
  /** Ana sayfada bu route'a karşılık gelen bölüm id'si (anchor) — varsa nav kıyaslamasında kullanılır. */
  section: string;
  /** Üst nav'da görünür mü? (false → yalnız footer + doğrudan URL) */
  inNav: boolean;
  /** Footer gruplaması. */
  group: RouteGroup;
  tr: LocaleRoute;
  en: LocaleRoute;
}

// Üç hat üstte görünür (markanın yapısal imzası). Referanslar + Hakkında
// kalabalığı azaltmak için yalnız footer'da (sayfalar yine üretilir/erişilir).
export const ROUTES: RouteDef[] = [
  { key: "platform", section: "platform", inNav: true, group: "lines", tr: { slug: "/platform", label: "Platform" }, en: { slug: "/en/platform", label: "Platform" } },
  { key: "devops", section: "devops", inNav: true, group: "lines", tr: { slug: "/devops", label: "DevOps" }, en: { slug: "/en/devops", label: "DevOps" } },
  { key: "app", section: "app", inNav: true, group: "lines", tr: { slug: "/app", label: "App" }, en: { slug: "/en/app", label: "App" } },
  { key: "start", section: "nasil-baslariz", inNav: true, group: "company", tr: { slug: "/nasil-baslariz", label: "Nasıl Başlarız" }, en: { slug: "/en/how-we-start", label: "How We Start" } },
  { key: "references", section: "referanslar", inNav: false, group: "company", tr: { slug: "/referanslar", label: "Referanslar" }, en: { slug: "/en/references", label: "References" } },
  { key: "about", section: "hakkinda", inNav: false, group: "company", tr: { slug: "/hakkinda", label: "Hakkında" }, en: { slug: "/en/about", label: "About" } },
  { key: "contact", section: "iletisim", inNav: false, group: "company", tr: { slug: "/iletisim", label: "İletişim" }, en: { slug: "/en/contact", label: "Contact" } },
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

/** Footer linkleri, gruba göre (tüm sayfalar — nav'da olmayanlar dahil). */
export function footerGroup(group: RouteGroup, lang: Lang) {
  return ROUTES.filter((r) => r.group === group).map((r) => ({ key: r.key, href: r[lang].slug, label: r[lang].label }));
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

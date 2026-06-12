// CHIMERA AI — Dokümanlar (docs) navigasyon ağacı (iki dilli).
// Tek doğruluk kaynağı: sidebar + breadcrumb + sıralama buradan.
// EN'de henüz olmayan bölümler en:null → EN sidebar'da gizlenir.
import type { Lang } from "./utils";

export interface DocsLocale {
  slug: string;
  label: string;
}
export interface DocsLeaf {
  key: string;
  tr: DocsLocale;
  en: DocsLocale | null;
}
export interface DocsGroup {
  group: { tr: string; en: string };
  items: DocsLeaf[];
}
export type DocsNode = DocsLeaf | DocsGroup;

export function isGroup(n: DocsNode): n is DocsGroup {
  return (n as DocsGroup).items !== undefined;
}

export const DOCS_HOME: DocsLeaf = {
  key: "home",
  tr: { slug: "/dokumanlar", label: "Genel bakış" },
  en: { slug: "/en/docs", label: "Overview" },
};

export const DOCS_NAV: DocsNode[] = [
  {
    group: { tr: "Platform", en: "Platform" },
    items: [
      { key: "pf-moduller", tr: { slug: "/dokumanlar/platform/moduller", label: "Modüller (M0–M6)" }, en: { slug: "/en/docs/platform/modules", label: "Modules (M0–M6)" } },
      { key: "pf-how", tr: { slug: "/dokumanlar/platform/nasil-calisir", label: "Nasıl çalışır" }, en: { slug: "/en/docs/platform/how-it-works", label: "How it works" } },
      { key: "pf-sec", tr: { slug: "/dokumanlar/platform/guvenlik", label: "Güvenlik" }, en: { slug: "/en/docs/platform/security", label: "Security" } },
    ],
  },
  { key: "sozluk", tr: { slug: "/dokumanlar/sozluk", label: "Kavramlar (Sözlük)" }, en: { slug: "/en/docs/glossary", label: "Concepts (Glossary)" } },
  { key: "sss", tr: { slug: "/dokumanlar/sss", label: "SSS" }, en: { slug: "/en/docs/faq", label: "FAQ" } },
  { key: "rapor", tr: { slug: "/dokumanlar/rapor", label: "Benchmark Raporları" }, en: null },
  { key: "blog", tr: { slug: "/dokumanlar/blog", label: "Blog" }, en: null },
];

export function docsHome(lang: Lang): DocsLocale {
  return (DOCS_HOME[lang] ?? DOCS_HOME.tr) as DocsLocale;
}

/** Aktif dile göre sidebar yapısı (EN'de olmayanlar elenir). */
export interface SidebarLeaf {
  key: string;
  slug: string;
  label: string;
}
export interface SidebarGroup {
  label: string;
  items: SidebarLeaf[];
}
export function buildSidebar(lang: Lang): (SidebarLeaf | SidebarGroup)[] {
  const out: (SidebarLeaf | SidebarGroup)[] = [];
  for (const n of DOCS_NAV) {
    if (isGroup(n)) {
      const items = n.items.map((it) => it[lang]).filter(Boolean) as DocsLocale[];
      const keyed = n.items.filter((it) => it[lang]).map((it) => ({ key: it.key, ...(it[lang] as DocsLocale) }));
      if (keyed.length) out.push({ label: n.group[lang], items: keyed });
    } else {
      const loc = n[lang];
      if (loc) out.push({ key: n.key, ...loc });
    }
  }
  return out;
}

export function isSidebarGroup(n: SidebarLeaf | SidebarGroup): n is SidebarGroup {
  return (n as SidebarGroup).items !== undefined;
}

/** Verilen yol için aktif yaprağı bul (en uzun eşleşen slug). */
export function activeLeaf(pathname: string, lang: Lang): SidebarLeaf | null {
  const clean = pathname.replace(/\/$/, "") || "/";
  const leaves: SidebarLeaf[] = [];
  for (const n of buildSidebar(lang)) {
    if (isSidebarGroup(n)) leaves.push(...n.items);
    else leaves.push(n);
  }
  let best: SidebarLeaf | null = null;
  for (const l of leaves) {
    const s = l.slug.replace(/\/$/, "");
    if (clean === s || clean.startsWith(s + "/")) {
      if (!best || s.length > best.slug.length) best = l;
    }
  }
  return best;
}

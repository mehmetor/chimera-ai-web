// CHIMERA AI — içerik koleksiyonu yardımcıları (dil filtresi + slug + sıralama).
import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@i18n/utils";

/** id "tr/rag" → "rag" (dil alt klasörünü düşürür). */
export function entrySlug(id: string): string {
  const parts = id.split("/");
  return parts.slice(1).join("/") || parts[0];
}

export async function getGlossary(lang: Lang): Promise<CollectionEntry<"glossary">[]> {
  const all = await getCollection("glossary", (e) => e.data.lang === lang);
  return all.sort((a, b) => a.data.term.localeCompare(b.data.term, lang));
}

export async function getFaq(lang: Lang): Promise<CollectionEntry<"faq">[]> {
  const all = await getCollection("faq", (e) => e.data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getBlog(lang: Lang, includeDrafts = false): Promise<CollectionEntry<"blog">[]> {
  const all = await getCollection("blog", (e) => e.data.lang === lang && (includeDrafts || !e.data.draft));
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getReports(lang: Lang, includeDrafts = false): Promise<CollectionEntry<"reports">[]> {
  const all = await getCollection("reports", (e) => e.data.lang === lang && (includeDrafts || !e.data.draft));
  return all.sort((a, b) => b.data.period.localeCompare(a.data.period));
}

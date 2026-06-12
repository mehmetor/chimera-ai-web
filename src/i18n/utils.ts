// CHIMERA AI — i18n yardımcıları
// TR ana (prefixsiz), EN çekirdek (/en) — IA §2. astro.config i18n ile uyumlu.
import tr, { type Dict } from "./tr";
import en from "./en";

export const languages = { tr: "Türkçe", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "tr";

const dicts: Record<Lang, Dict> = { tr, en };

/** URL'nin ilk segmentinden dili çıkarır; bilinmiyorsa varsayılan (tr). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

/** Verilen dilin içerik sözlüğü. */
export function useTranslations(lang: Lang): Dict {
  return dicts[lang] ?? dicts[defaultLang];
}

/** İç yolu aktif dile göre prefixler (tr → prefixsiz, en → /en/...). */
export function localizePath(path: string, lang: Lang): string {
  const clean = "/" + path.replace(/^\/+/, "");
  if (lang === defaultLang) return clean === "/" ? "/" : clean.replace(/\/$/, "");
  return ("/" + lang + clean).replace(/\/$/, "") || "/" + lang;
}

/** Bu URL'nin diğer dildeki karşılığı (hreflang/lang-switch için). */
export function alternateUrl(url: URL, to: Lang): string {
  const current = getLangFromUrl(url);
  if (current === to) return url.pathname;
  let rest = url.pathname;
  if (current !== defaultLang) rest = rest.replace(new RegExp(`^/${current}`), "") || "/";
  return to === defaultLang ? rest : ("/" + to + rest).replace(/\/$/, "");
}

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

// NOT: Yol yerelleştirme ve hreflang eşlemesi artık @i18n/routes (route haritası)
// üzerinden yapılır — yerelleştirilmiş slug'ları (TR /nasil-baslariz ↔ EN
// /en/how-we-start) doğru eşleyebilmek için. Naif prefix-swap yardımcıları kaldırıldı.

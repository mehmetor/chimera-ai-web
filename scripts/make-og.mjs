// CHIMERA AI — varsayılan OG/sosyal görseli üretir (1200×630 PNG).
// Marka: Obsidyen zemin + bronz mühür + wordmark + kampanya cümlesi.
// Çalıştır: node scripts/make-og.mjs  → public/og/default.png
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "public/og/default.png";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#15130E"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#A87B3D" stroke-opacity="0.28" stroke-width="2" rx="14"/>

  <!-- mühür-işaret: kapalı halka + kare düğüm -->
  <g transform="translate(150,150)">
    <circle cx="0" cy="0" r="62" fill="none" stroke="#C99E63" stroke-width="20"/>
    <rect x="-13" y="-75" width="26" height="26" fill="#C99E63"/>
  </g>

  <!-- wordmark -->
  <text x="92" y="360" font-family="Inter, Helvetica, Arial, sans-serif" font-size="104" font-weight="700" letter-spacing="2" fill="#F4F1EA">CHIMERA <tspan fill="#C99E63">AI</tspan></text>

  <!-- kampanya cümlesi -->
  <text x="96" y="438" font-family="Inter, Helvetica, Arial, sans-serif" font-size="40" font-weight="500" fill="#E8E3D7">Yapay zeka.</text>
  <text x="96" y="492" font-family="Inter, Helvetica, Arial, sans-serif" font-size="40" font-weight="400" fill="#B5AC97">Sizin sınırlarınızda, sizin denetiminizde.</text>

  <!-- footer -->
  <text x="96" y="566" font-family="IBM Plex Mono, monospace" font-size="26" letter-spacing="1" fill="#948B76">chimera-ai.com.tr</text>
  <text x="1104" y="566" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="22" letter-spacing="1" fill="#736B58">bir DC NEXTGEN ürünüdür</text>
</svg>`;

mkdirSync(dirname(OUT), { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(OUT);
console.log("OG görseli yazıldı:", OUT);

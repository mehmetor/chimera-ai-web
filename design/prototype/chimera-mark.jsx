// CHIMERA AI — mühür-işaret, ikon seti, kapalı devre master diyagramı
// Konsept: üç yay segmenti + kare düğümler = tam kapalı halka (mühür / devre / alaşım)

const { useEffect, useRef, useState } = React;

/* ---------- geometri yardımcıları ---------- */
function polar(cx, cy, r, deg) {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}
function arcPath(cx, cy, r, a0, a1) {
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a1);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

/* ---------- işçilik varyantları (Brief §5 adım 2: segment oranı / düğüm / C-iması) ---------- */
const SEAL_VARIANTS = {
  // düğüm boyutu stroke'tan belirgin büyük (≈×1.5); gap düğümün altında kalacak
  // kadar dar — yay uçları kare portun ALTINA girer, halka hiçbir yerde açık uç
  // vermez (Brief §2.2 "tam kapalı halka"). Port, boşluk değil bağlantı elemanıdır.
  denge:   { spans: [138, 117, 105], strokes: [9, 9, 9],   node: 14, gap: 10, label: "A — Denge" },
  cimasi:  { spans: [172, 108, 80],  strokes: [11, 8, 8],  node: 14, gap: 11, label: "B — C-iması" },
  dugum:   { spans: [128, 120, 112], strokes: [8, 8, 8],   node: 17, gap: 13, label: "C — Endüstriyel düğüm" },
};

/* ---------- SealMark ----------
   accent: null | 'platform' | 'devops' | 'app'  (ilgili segment yüklenir, kalan nötr)
   variant: 'denge' | 'cimasi' | 'dugum'
   animate: tek seferlik kapanış imzası (reduced-motion fallback CSS'te)
   color: nötr renk (zemine göre) */
function SealMark({ size = 48, variant = "denge", accent = null, color = "currentColor", accents, animate = false }) {
  const v = SEAL_VARIANTS[variant] || SEAL_VARIANTS.denge;
  const ref = useRef(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setGo(true), 60);
    return () => clearTimeout(t);
  }, [animate]);

  const cx = 50, cy = 50, r = 36;
  const accentMap = accents || {
    platform: "var(--bronze)",
    devops: "var(--steel)",
    app: "var(--terra)",
  };
  const segColors = ["platform", "devops", "app"].map((k) =>
    accent === k ? accentMap[k] : color
  );

  // segment sınırları: -? başlangıç üstten (0deg = tepe)
  let a = 0;
  const bounds = [0];
  v.spans.forEach((s) => { a += s; bounds.push(a); });
  const total = bounds[3]; // 360
  const scale = 360 / total;

  const arcs = v.spans.map((s, i) => {
    const a0 = bounds[i] * scale + v.gap / 2;
    const a1 = bounds[i + 1] * scale - v.gap / 2;
    return { d: arcPath(cx, cy, r, a0, a1), w: v.strokes[i], c: segColors[i] };
  });
  const nodes = bounds.slice(0, 3).map((b) => {
    const ang = b * scale;
    const [x, y] = polar(cx, cy, r, ang);
    return { x, y, ang };
  });

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={(animate ? "seal-anim " : "") + (go ? "seal-go" : "")}
      role="img"
      aria-label="Chimera AI"
    >
      {arcs.map((p, i) => (
        <path key={i} className="seal-arc" d={p.d} stroke={p.c} strokeWidth={p.w} pathLength="1"></path>
      ))}
      {nodes.map((n, i) => (
        <rect
          key={i}
          className="seal-node"
          x={n.x - v.node / 2}
          y={n.y - v.node / 2}
          width={v.node}
          height={v.node}
          fill={accent && ["platform", "devops", "app"][i] === accent ? accentMap[accent] : color}
          transform={`rotate(${n.ang} ${n.x} ${n.y})`}
        ></rect>
      ))}
    </svg>
  );
}

/* ---------- ikon seti — 1.5px stroke, geometrik, dolgusuz, kare düğüm dili ---------- */
function Icon({ children, size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      {children}
    </svg>
  );
}
const MODULE_ICONS = {
  M0: (
    <Icon>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2"></rect>
      <circle cx="12" cy="12" r="4.5"></circle>
      <rect x="10.9" y="2.5" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
    </Icon>
  ),
  M1: (
    <Icon>
      <path d="M5 7.5h14v13H5z"></path>
      <path d="M7 7.5v-2a1.5 1.5 0 0 1 1.5-1.5H17"></path>
      <path d="M8.5 11.5h7M8.5 14.5h7M8.5 17.5h4"></path>
    </Icon>
  ),
  M2: (
    <Icon>
      <path d="M8.5 7.5 4 12l4.5 4.5M15.5 7.5 20 12l-4.5 4.5"></path>
      <rect x="10.9" y="10.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
    </Icon>
  ),
  M3: (
    <Icon>
      <path d="M4 19h4v-4h4v-4h4V7h4"></path>
      <rect x="2.9" y="17.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
      <rect x="18.9" y="5.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
    </Icon>
  ),
  M4: (
    <Icon>
      <path d="M5 3.5h10l4 4v13H5z"></path>
      <path d="M15 3.5v4h4"></path>
      <path d="M3 12.5h18" strokeDasharray="2.5 2.5"></path>
    </Icon>
  ),
  M5: (
    <Icon>
      <rect x="3.5" y="4.5" width="17" height="12" rx="2"></rect>
      <path d="M8 16.5v3.5l4-3.5"></path>
      <path d="M8 9h8M8 12h5"></path>
    </Icon>
  ),
  M6: (
    <Icon>
      <path d="M4 20V9M10 20V4M16 20v-8M21 20H3.5"></path>
      <rect x="14.9" y="10.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
    </Icon>
  ),
};
const LINE_ICONS = {
  platform: (
    <Icon>
      <circle cx="12" cy="12" r="8"></circle>
      <rect x="10.9" y="2.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
      <rect x="10.9" y="18.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
    </Icon>
  ),
  devops: (
    <Icon>
      <path d="M3 12h18"></path>
      <rect x="5.4" y="10.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
      <rect x="10.9" y="10.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
      <rect x="16.4" y="10.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
      <path d="M6.5 12V6h11v6M6.5 12v6h11v-6"></path>
    </Icon>
  ),
  app: (
    <Icon>
      <rect x="7.5" y="3.5" width="13" height="13" rx="1.5"></rect>
      <path d="M3.5 7.5v13h13"></path>
      <rect x="12.9" y="8.9" width="2.2" height="2.2" fill="currentColor" stroke="none"></rect>
    </Icon>
  ),
};

/* ---------- kapalı devre master diyagramı ----------
   Standart (Brief §3.3): kurum sınırı = kalın kapalı hat; içeride bileşen
   kutuları; dışarıda kesik çizgili bulut + kesilmiş bağlantı. */
function ClosedCircuitDiagram({ t, dark = false, animate = false }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    if (!animate) return;
    const id = setTimeout(() => setGo(true), 60);
    return () => clearTimeout(id);
  }, [animate]);
  const ink = dark ? "var(--n-100)" : "var(--n-800)";
  const dim = dark ? "var(--n-400)" : "var(--n-500)";
  const acc = dark ? "var(--bronze-on-dark)" : "var(--bronze-ink)";
  const boxBg = dark ? "rgba(232,227,215,0.04)" : "rgba(21,19,14,0.03)";
  const node = (x, y, cls) => (
    <rect className={cls} x={x - 3} y={y - 3} width="6" height="6" fill={acc} stroke="none"></rect>
  );
  const box = (x, y, w, h, title, sub) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={boxBg} stroke={ink} strokeWidth="1.5"></rect>
      <text x={x + w / 2} y={y + h / 2 - 5} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" letterSpacing="1" fill={ink} fontWeight="600">{title}</text>
      <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" letterSpacing="0.5" fill={dim}>{sub}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 760 400" style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-label={t.boundary}
      className={(animate ? "seal-anim " : "") + (go ? "seal-go" : "")}>
      {/* kurum sınırı — kalın kapalı hat; animate'te hareket imzası: hat çizilir ve mühürlenir */}
      <rect className="seal-arc" pathLength="1" x="24" y="40" width="520" height="330" rx="10" fill="none" stroke={acc} strokeWidth="3"></rect>
      {node(24, 110, "seal-node")}{node(544, 110, "seal-node")}{node(24, 300, "seal-node")}{node(544, 300, "seal-node")}
      <rect x="40" y="26" width="190" height="28" fill={dark ? "var(--bg-dark)" : "var(--bg-light)"} stroke="none"></rect>
      <text x="48" y="45" fontFamily="var(--font-mono)" fontSize="12.5" letterSpacing="1.5" fill={acc} fontWeight="600">{t.boundary}</text>

      {/* içerideki bileşenler — kullanıcılar dahil hepsi sınırdan belirgin içeride */}
      {box(70, 90, 180, 78, t.model, t.modelSub)}
      {box(70, 240, 180, 78, t.rag, t.ragSub)}
      {box(300, 165, 180, 78, t.users, t.usersSub)}

      {/* iç bağlantılar — 1.5px, kare düğümler */}
      <path d="M 160 168 V 240" stroke={ink} strokeWidth="1.5" fill="none"></path>
      {node(160, 204)}
      <path d="M 250 129 H 275 V 185 H 300" stroke={ink} strokeWidth="1.5" fill="none"></path>
      <path d="M 250 279 H 275 V 223 H 300" stroke={ink} strokeWidth="1.5" fill="none"></path>
      {node(275, 157)}{node(275, 251)}

      {/* dış bulut — kesik çizgili, bağlantı kesik */}
      <g opacity="0.75">
        <path
          d="M 622 150 a 22 22 0 0 1 21 -16 a 26 26 0 0 1 50 6 a 18 18 0 0 1 -2 35 h -62 a 19 19 0 0 1 -7 -25 z"
          fill="none" stroke={dim} strokeWidth="1.5" strokeDasharray="5 5"
        ></path>
        <text x="676" y="208" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11.5" letterSpacing="1" fill={dim}>{t.cloud}</text>
      </g>
      {/* kesilmiş bağlantı */}
      <path d="M 544 205 H 590" stroke={dim} strokeWidth="1.5" strokeDasharray="5 5"></path>
      <path d="M 600 196 l 16 18 M 616 196 l -16 18" stroke={dark ? "var(--terra-on-dark)" : "var(--terra)"} strokeWidth="2"></path>
      <path d="M 626 205 H 656" stroke={dim} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.5"></path>
      <text x="608" y="240" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" letterSpacing="1" fill={dark ? "var(--terra-on-dark)" : "var(--terra)"}>{t.noLink}</text>
    </svg>
  );
}

Object.assign(window, { SealMark, SEAL_VARIANTS, MODULE_ICONS, LINE_ICONS, ClosedCircuitDiagram, ChimeraIcon: Icon });

// CHIMERA AI — bölümler A: Nav, Hero, Sorun, Üç Hat, Platform
const { useState: useStateA } = React;

/* Çeper: ince KAPALI çerçeve (Brief §3.3). Köşe düğümü YOK — köşe tutamaçları
   "seçili nesne / crop-mark" gibi okunup mühür metaforunu bozuyordu. Kare
   düğümler yalnız devre HATLARININ üzerinde yaşar (port dili). */
function Frame({ children, className = "", style, nodes }) {
  return (
    <div className={"frame " + className} style={style}>
      {children}
    </div>
  );
}

function SiteNav({ t, lang, setLang, markVariant }) {
  return (
    <nav className="nav" data-screen-label="Nav">
      <div className="nav-inner">
        <a className="brand-lockup" href="#hero">
          <SealMark size={30} variant={markVariant} color="var(--n-100)" />
          <span className="brand-word">CHIMERA <span className="ai">AI</span></span>
        </a>
        <div className="nav-links">
          {t.nav.links.map(([href, label]) => (
            <a key={href} className="nav-link" href={href}>{label}</a>
          ))}
          <a className="nav-cta" href="#iletisim" style={{ marginLeft: 8 }}>{t.nav.cta}</a>
          <div className="lang-switch">
            <button className={lang === "tr" ? "active" : ""} onClick={() => setLang("tr")}>TR</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t, variant, markVariant, dose }) {
  const big = variant === "tipografik";
  return (
    <header id="hero" className="section" data-screen-label="Hero" style={{ paddingTop: "calc(72px * var(--ts))", paddingBottom: "calc(88px * var(--ts))" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: big ? "1.35fr 0.65fr" : "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div className="mono-label">{t.hero.label}</div>
          <h1 className="h-display" style={{ fontSize: big ? "calc(64px * var(--ts))" : "calc(50px * var(--ts))" }}>
            {t.hero.h1a}{" "}
            <span className="hero-h1b" style={{ color: dose === "yuksek" ? "var(--bronze-on-dark)" : "inherit" }}>{t.hero.h1b}</span>
          </h1>
          <p className="lede" style={{ maxWidth: 560 }}>{t.hero.lede}</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 6 }}>
            <a className="btn btn-primary" href="#iletisim">{t.hero.cta1}</a>
            <a className="btn btn-ghost" href="#uc-hat">{t.hero.cta2}</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, max-content))", columnGap: 28, rowGap: 12, marginTop: 10 }}>
            {t.hero.ticks.map((s) => (
              <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--n-400)", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 6, height: 6, background: dose === "olculu" ? "var(--n-500)" : "var(--bronze)", flex: "none" }}></span>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {variant === "tipografik" && (
            <SealMark size={300} variant={markVariant} color="var(--n-100)" animate={true} />
          )}
          {variant === "diyagram" && (
            <Frame style={{ padding: "28px 22px", width: "100%" }}>
              <ClosedCircuitDiagram t={t.platform.diagram} dark={true} animate={true} />
            </Frame>
          )}
          {variant === "fotograf" && (
            <div style={{ position: "relative", width: "100%" }}>
              <div className="duotone" style={{ width: "100%" }}>
                <image-slot id="hero-saha" style={{ width: "100%", height: "420px" }} shape="rounded" radius="8" placeholder={t.hero.photoPlaceholder}></image-slot>
                <span className="duo-caption">{t.hero.photoCaption}</span>
              </div>
              <div style={{ position: "absolute", top: -26, right: -16, background: "var(--bg-dark)", borderRadius: "50%", padding: 10, zIndex: 2 }}>
                <SealMark size={92} variant={markVariant} color="var(--n-100)" animate={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function ProblemSection({ t }) {
  return (
    <section id="sorun" className="section on-light" data-screen-label="Sorun">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ maxWidth: 660, display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="mono-label">{t.problem.label}</div>
          <h2 className="h-section">{t.problem.h2}</h2>
          <p className="lede">{t.problem.lede}</p>
        </div>
        <div className="grid-3">
          {t.problem.items.map((it) => (
            <div className="card" key={it.k}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 500, letterSpacing: "0.08em", color: "var(--accent-ink)" }}>{it.k}</span>
              <h3 className="h-card">{it.t}</h3>
              <p className="body-dim" style={{ fontSize: "calc(15.5px * var(--ts))" }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Üç hat — üç aksanın yan yana göründüğü TEK an (Brief §3.1 kuralı) */
function LinesSection({ t, markVariant }) {
  const accents = [
    { id: "platform", on: "var(--bronze-on-dark)", ink: "var(--bronze-ink)" },
    { id: "devops", on: "var(--steel-on-dark)", ink: "var(--steel-ink)" },
    { id: "app", on: "var(--terra-on-dark)", ink: "var(--terra-ink)" },
  ];
  return (
    <section id="uc-hat" className="section" data-screen-label="Üç Hat">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="mono-label">{t.lines.label}</div>
          <h2 className="h-section">{t.lines.h2}</h2>
          <p className="lede">{t.lines.lede}</p>
        </div>
        <div className="grid-3">
          {t.lines.items.map((it, i) => (
            <Frame key={it.id} style={{ padding: 30, display: "flex", flexDirection: "column", gap: 14, "--accent-on-dark": accents[i].on, "--accent-ink": accents[i].ink }}>
              <SealMark size={56} variant={markVariant} accent={it.id} color="var(--n-600)" />
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6 }}>
                <h3 className="h-card" style={{ fontSize: "calc(23px * var(--ts))" }}>Chimera AI <span style={{ color: accents[i].on }}>{it.name}</span></h3>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--n-400)" }}>{it.tag}</span>
              <p className="body-dim" style={{ fontSize: "calc(15.5px * var(--ts))", flex: 1 }}>{it.d}</p>
              <a className="btn-line" href={"#" + it.id} style={{ color: accents[i].on }}>{it.link} →</a>
            </Frame>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection({ t }) {
  return (
    <section id="platform" className="section on-light" data-screen-label="Platform" style={{ "--accent": "var(--bronze)", "--accent-ink": "var(--bronze-ink)", "--accent-on-dark": "var(--bronze-on-dark)" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="mono-label">{t.platform.label}</div>
          <h2 className="h-section">{t.platform.h2}</h2>
          <p className="lede">{t.platform.lede}</p>
        </div>

        <Frame style={{ padding: "36px 32px", background: "var(--card-light)" }}>
          <ClosedCircuitDiagram t={t.platform.diagram} dark={false} />
        </Frame>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h3 className="h-card" style={{ fontSize: "calc(26px * var(--ts))" }}>{t.platform.modulesH}</h3>
          <p className="body-dim" style={{ maxWidth: 560 }}>{t.platform.modulesLede}</p>
        </div>
        <div>
          {t.platform.modules.map(([code, name, desc]) => (
            <div className="module-row" key={code}>
              <div className="icon-tile">{MODULE_ICONS[code]}</div>
              <div>
                <div className="module-code">{code}</div>
                <div style={{ fontWeight: 600, fontSize: "calc(16.5px * var(--ts))" }}>{name}</div>
              </div>
              <p className="body-dim module-desc" style={{ fontSize: "calc(15px * var(--ts))" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Frame, SiteNav, Hero, ProblemSection, LinesSection, PlatformSection });

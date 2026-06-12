// CHIMERA AI — bölümler B: DevOps, App, Nasıl Başlarız, Referanslar, Kaynaklar, Hakkında, İletişim, Footer
const { useState: useStateB } = React;

/* DevOps — Çelik aksanı (hat sayfası bağlamı) */
function DevOpsSection({ t }) {
  return (
    <section id="devops" className="section" data-screen-label="DevOps" style={{ "--accent": "var(--steel)", "--accent-ink": "var(--steel-ink)", "--accent-on-dark": "var(--steel-on-dark)" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div style={{ maxWidth: 660, display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="mono-label">{t.devops.label}</div>
          <h2 className="h-section">{t.devops.h2}</h2>
          <p className="lede">{t.devops.lede}</p>
        </div>

        {/* üretim hattı — devre dili: tek hat üzerinde kare düğümler */}
        <Frame style={{ padding: "40px 36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", flexWrap: "wrap", gap: 24 }}>
            <div style={{ position: "absolute", left: 16, right: 16, top: "50%", height: 0, borderTop: "1.5px solid var(--n-600)", zIndex: 0 }}></div>
            {t.devops.stages.map((s) => (
              <div key={s} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <span style={{ width: 10, height: 10, background: "var(--steel-on-dark)" }}></span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--n-200)", background: "var(--bg-dark)", padding: "2px 6px" }}>{s}</span>
              </div>
            ))}
          </div>
        </Frame>

        <div className="grid-2">
          <div className="card">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--steel-on-dark)" }}>{t.devops.refsH}</span>
            {t.devops.refs.map((r, i) => (
              <p key={i} className="body-dim" style={{ fontSize: "calc(15.5px * var(--ts))", display: "flex", gap: 12 }}>
                <span style={{ width: 7, height: 7, background: "var(--steel-on-dark)", flex: "none", marginTop: 8 }}></span>
                <span>{r}</span>
              </p>
            ))}
          </div>
          <div className="card" style={{ justifyContent: "center" }}>
            <p className="body-dim" style={{ fontSize: "calc(15.5px * var(--ts))" }}>{t.devops.boundary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* App — Terrakota aksanı */
function AppSection({ t }) {
  return (
    <section id="app" className="section on-light" data-screen-label="App" style={{ "--accent": "var(--terra)", "--accent-ink": "var(--terra-ink)", "--accent-on-dark": "var(--terra-on-dark)" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div style={{ maxWidth: 660, display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="mono-label">{t.app.label}</div>
          <h2 className="h-section">{t.app.h2}</h2>
          <p className="lede">{t.app.lede}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: `repeat(${t.app.phases.length}, 1fr)`, gap: 14 }} className="app-phases">
          {t.app.phases.map((p, i) => (
            <Frame key={p} style={{ padding: "22px 18px", display: "flex", flexDirection: "column", gap: 8 }} nodes={false}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.08em", color: "var(--terra-ink)" }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontWeight: 600, fontSize: "calc(17px * var(--ts))" }}>{p}</span>
            </Frame>
          ))}
        </div>

        <p className="body-dim" style={{ maxWidth: 640, fontSize: "calc(16px * var(--ts))" }}>{t.app.closing}</p>
      </div>
    </section>
  );
}

function StartSection({ t }) {
  return (
    <section id="nasil-baslariz" className="section" data-screen-label="Nasıl Başlarız">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="mono-label">{t.start.label}</div>
          <h2 className="h-section">{t.start.h2}</h2>
          <p className="lede">{t.start.lede}</p>
        </div>
        <div className="grid-3">
          {t.start.steps.map((s) => (
            <div className="card" key={s.k}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.08em", color: "var(--bronze-on-dark)" }}>{s.k}</span>
              <h3 className="h-card">{s.t}</h3>
              <p className="body-dim" style={{ fontSize: "calc(15.5px * var(--ts))" }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap", justifyContent: "space-between" }}>
          <Frame style={{ padding: "20px 26px", display: "flex", gap: 20, alignItems: "center", flex: "1 1 460px" }} nodes={false}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.08em", color: "var(--bronze-on-dark)", flex: "none" }}>{t.start.kobiK}</span>
            <div>
              <span style={{ fontWeight: 600 }}>{t.start.kobiT}</span>
              <span className="body-dim" style={{ fontSize: "calc(15px * var(--ts))" }}> — {t.start.kobiD}</span>
            </div>
          </Frame>
          <a className="btn btn-primary" href="#iletisim">{t.start.cta}</a>
        </div>
      </div>
    </section>
  );
}

function RefsSection({ t }) {
  return (
    <section id="referanslar" className="section on-light" data-screen-label="Referanslar">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="mono-label">{t.refs.label}</div>
          <h2 className="h-section">{t.refs.h2}</h2>
          <p className="body-dim" style={{ fontSize: "calc(15px * var(--ts))" }}>{t.refs.lede}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-2">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {t.refs.items.map((it) => (
              <div className="card" key={it.t} style={{ gap: 8 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.08em", color: it.state === "ok" ? "var(--ok)" : "var(--warn)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 7, height: 7, background: "currentColor", flex: "none" }}></span>
                  {it.k}
                </span>
                <h3 className="h-card" style={{ fontSize: "calc(18px * var(--ts))" }}>{it.t}</h3>
                <p className="body-dim" style={{ fontSize: "calc(15px * var(--ts))" }}>{it.d}</p>
              </div>
            ))}
          </div>
          <div className="duotone" style={{ minHeight: 320 }}>
            <image-slot id="referans-saha" style={{ width: "100%", height: "100%", minHeight: "320px" }} shape="rounded" radius="8" placeholder={t.refs.photoPlaceholder}></image-slot>
            <span className="duo-caption">{t.refs.photoCaption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection({ t }) {
  return (
    <section id="kaynaklar" className="section on-light" data-screen-label="Kaynaklar" style={{ paddingTop: 0 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="mono-label">{t.resources.label}</div>
          <h2 className="h-section" style={{ fontSize: "calc(30px * var(--ts))" }}>{t.resources.h2}</h2>
        </div>
        <div className="grid-3">
          {t.resources.items.map(([name, d]) => (
            <div className="card" key={name} style={{ gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3 className="h-card" style={{ fontSize: "calc(17.5px * var(--ts))" }}>{name}</h3>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--n-500)", border: "1.5px solid rgba(21,19,14,0.18)", borderRadius: 3, padding: "3px 8px" }}>{t.resources.linkLabel}</span>
              </div>
              <p className="body-dim" style={{ fontSize: "calc(14.5px * var(--ts))" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ t, markVariant }) {
  return (
    <section id="hakkinda" className="section" data-screen-label="Hakkında" style={{ paddingBottom: "calc(72px * var(--ts))" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 48, alignItems: "center" }}>
        <SealMark size={120} variant={markVariant} color="var(--n-300)" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
          <div className="mono-label">{t.about.label}</div>
          <h2 className="h-section" style={{ fontSize: "calc(28px * var(--ts))", fontFamily: "var(--font-mono)", fontWeight: 500, letterSpacing: "0.03em" }}>{t.about.h2}</h2>
          <p className="body-dim" style={{ fontSize: "calc(16px * var(--ts))" }}>{t.about.d}</p>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  const [sent, setSent] = useStateB(false);
  const [vals, setVals] = useStateB({ name: "", org: "", mail: "" });
  const valid = vals.name.trim() && vals.org.trim() && /.+@.+\..+/.test(vals.mail);
  const inputStyle = {
    fontFamily: "var(--font-sans)", fontSize: "calc(15.5px * var(--ts))",
    padding: "13px 14px", borderRadius: "var(--radius-sm)",
    border: "1.5px solid rgba(21,19,14,0.25)", background: "var(--card-light)",
    color: "var(--n-900)", width: "100%",
  };
  return (
    <section id="iletisim" className="section on-light" data-screen-label="İletişim">
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="mono-label">{t.contact.label}</div>
          <h2 className="h-section">{t.contact.h2}</h2>
          <p className="lede">{t.contact.lede}</p>
          <p className="body-dim" style={{ fontSize: "calc(15px * var(--ts))" }}>
            {t.contact.alt}{" "}
            <a href="mailto:info@chimera-ai.com.tr" style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--bronze-ink)" }}>info@chimera-ai.com.tr</a>
          </p>
        </div>
        <Frame style={{ padding: 32 }}>
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <span style={{ width: 10, height: 10, background: "var(--ok)" }}></span>
              <p style={{ fontWeight: 600 }}>{t.contact.sent}</p>
            </div>
          ) : (
            <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={(e) => { e.preventDefault(); if (valid) setSent(true); }}>
              <div className="grid-2" style={{ gap: 14 }}>
                <input style={inputStyle} placeholder={t.contact.fName} value={vals.name} onChange={(e) => setVals({ ...vals, name: e.target.value })} />
                <input style={inputStyle} placeholder={t.contact.fOrg} value={vals.org} onChange={(e) => setVals({ ...vals, org: e.target.value })} />
              </div>
              <input style={inputStyle} type="email" placeholder={t.contact.fMail} value={vals.mail} onChange={(e) => setVals({ ...vals, mail: e.target.value })} />
              <textarea style={{ ...inputStyle, minHeight: 96, resize: "vertical" }} placeholder={t.contact.fMsg}></textarea>
              <button className="btn btn-primary" type="submit" disabled={!valid} style={{ opacity: valid ? 1 : 0.5, alignSelf: "flex-start", border: "none" }}>{t.contact.send}</button>
            </form>
          )}
        </Frame>
      </div>
    </section>
  );
}

function SiteFooter({ t, markVariant }) {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div className="brand-lockup">
            <SealMark size={26} variant={markVariant} color="var(--n-300)" />
            <span className="brand-word" style={{ fontSize: 14.5, color: "var(--n-200)" }}>CHIMERA <span className="ai">AI</span></span>
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            {t.footer.lines.map((l) => (
              <a key={l} href={"#" + l.toLowerCase()} className="nav-link" style={{ padding: "4px 6px" }}>{l}</a>
            ))}
          </div>
          <span className="endorsement">{t.footer.endorsement}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, borderTop: "1px solid rgba(232,227,215,0.1)", paddingTop: 20 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.05em", color: "var(--n-400)" }}>{t.footer.domain}</span>
          <span style={{ fontSize: 13, color: "var(--n-500)" }}>{t.footer.note}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { DevOpsSection, AppSection, StartSection, RefsSection, ResourcesSection, AboutSection, ContactSection, SiteFooter });

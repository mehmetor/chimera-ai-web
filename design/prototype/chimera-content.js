// CHIMERA AI — içerik sözlüğü (TR/EN)
// Kaynak: Tasarımcı Girdi Paketi 2026-06 + Brief v2
window.CHIMERA_I18N = {
  tr: {
    nav: {
      links: [
        ["#platform", "Platform"],
        ["#devops", "DevOps"],
        ["#app", "App"],
        ["#nasil-baslariz", "Nasıl Başlarız"],
        ["#referanslar", "Referanslar"],
        ["#kaynaklar", "Kaynaklar"],
        ["#hakkinda", "Hakkında"],
      ],
      cta: "Mimari Ön-Analiz",
    },
    hero: {
      label: "Kapalı Devre Kurumsal Yapay Zeka",
      h1a: "Yapay zeka.",
      h1b: "Sizin sınırlarınızda, sizin denetiminizde.",
      lede:
        "Chimera AI, kurumunuzun kendi sunucularında çalışan, dış buluta veri sızdırmayan ve kurumunuzun bilgisinden beslenen kapalı devre yapay zeka platformudur. Abonelik değil — kalıcı mülkünüz.",
      cta1: "Mimari Ön-Analiz talep edin",
      cta2: "Üç hattı inceleyin",
      ticks: ["ON-PREMISE", "AÇIK KAYNAK YIĞINI", "TÜRKÇE + KVKK", "2 AYDA CANLI"],
      photoCaption: "Saha fotoğrafı · Obsidyen+Bronz duotone",
      photoPlaceholder: "Saha fotoğrafını buraya bırakın (CNC, sunucu kabini, laboratuvar)",
    },
    problem: {
      label: "01 · Sorun",
      h2: "Veriniz binadan çıkmaz.",
      lede:
        "Kurumlar yapay zeka istiyor; ama üç engel her projeyi durduruyor. Chimera AI üçünü de aynı mimariyle çözer.",
      items: [
        {
          k: "VERİ EGEMENLİĞİ",
          t: "Veriniz başkasının sunucusunda",
          d: "Bulut AI kullandığınızda sohbetler, belgeler ve kod Microsoft, Google veya OpenAI sunucularına gider. Chimera AI'da her şey kurum sınırı içinde kalır.",
        },
        {
          k: "BAĞLAM",
          t: "Hazır AI kurumunuzu tanımıyor",
          d: "Jenerik sohbet araçları belgelerinizi ve süreçlerinizi bilmez — jenerik cevap, düşük fayda. Chimera AI kurumunuzun kendi bilgisinden beslenir ve kaynak göstererek yanıtlar.",
        },
        {
          k: "MÜLKİYET",
          t: "Kira değil, mülk",
          d: "Bulut AI aboneliktir; vazgeçince geriye hiçbir varlık kalmaz. Chimera AI açık kaynak yığını üzerine kurulur ve kurulduğu yerde kalır — kalıcı varlığınızdır.",
        },
      ],
    },
    lines: {
      label: "02 · Üç Hat",
      h2: "Üç hat, tek alaşım.",
      lede:
        "Chimera AI çatı markadır; altında üç hat yaşar. Aynı mühür, hattına göre yüklenir.",
      items: [
        {
          id: "platform",
          name: "Platform",
          tag: "Amiral ürün",
          d: "Kapalı devre AI: kurum sunucusunda model, kurumun bilgisi (RAG), sohbet ve kod asistanı. Modüler yapı: M0–M6.",
          link: "Platform'u incele",
        },
        {
          id: "devops",
          name: "DevOps",
          tag: "Üretim hattı",
          d: "Self-hosted yazılım üretim hattı: Git, CI/CD, otomatik test, dağıtım, sürüm süreçleri, Kanban ve eğitim.",
          link: "DevOps'u incele",
        },
        {
          id: "app",
          name: "App",
          tag: "Fikirden ürüne",
          d: "AI-hızlandırılmış uygulama geliştirme: Keşif → Tasarım → MVP → Yayın → Bakım. Her faz ayrı teslim, ayrı kriter.",
          link: "App'i incele",
        },
      ],
    },
    platform: {
      label: "03 · Chimera AI Platform",
      h2: "Model sizin sunucunuzda. Bilgi sizin bilginiz.",
      lede:
        "Kurum sunucusunda çalışan model, kurumun belgelerinden beslenen bilgi yönetimi ve kapalı ağda sohbet/kod asistanı — tek platformda, modüler.",
      diagram: {
        boundary: "KURUM SINIRI",
        model: "MODEL",
        modelSub: "kurum sunucusu",
        rag: "KURUM BİLGİSİ",
        ragSub: "RAG · kaynak gösterir",
        users: "KULLANICILAR",
        usersSub: "sohbet · kod asistanı",
        cloud: "DIŞ BULUT",
        noLink: "BAĞLANTI YOK",
      },
      modulesH: "Modül kataloğu",
      modulesLede: "M0 zorunlu temeldir; kalan modüller ihtiyaca göre eklenir.",
      modules: [
        ["M0", "Çekirdek Platform", "Kurum sunucusunda model, sohbet arayüzü, erişim, izleme ve güvenlik — zorunlu temel."],
        ["M1", "Bilgi Yönetimi (RAG)", "Kurum belgeleri yapay zekanın açık kitabı olur; kaynak göstererek yanıtlar."],
        ["M2", "Güvenli Kod Asistanı", "Kod editöründe, kapalı ağda kod tamamlama ve açıklama — kod binadan çıkmaz."],
        ["M3", "Ar-Ge & Akıl Yürütme", "Adım adım düşünen model ve güvenli kod çalıştırma alanı."],
        ["M4", "Görsel Doküman İşleme", "Taranmış PDF, şema ve tabloyu okur; arşiv aranabilir hale gelir."],
        ["M5", "Türkçe Chatbot", "Müşteri ve saha desteği için doğal Türkçe bot; istenirse sesli."],
        ["M6", "Veri Analizi", "Doğal dille soruya SQL üretir, salt-okunur çalıştırır, panelde gösterir."],
      ],
    },
    devops: {
      label: "04 · Chimera AI DevOps",
      h2: "Üretim hattı sizin binanızda.",
      lede:
        "Yazılım ekibinize self-hosted üretim hattı kurarız: kaynak kod hiçbir bulut servisine çıkmaz. Eğitim ve dokümantasyonla teslim edilir.",
      stages: ["Git", "CI/CD", "Test", "Dağıtım", "Sürüm", "Kanban", "Eğitim"],
      refsH: "Canlı referans konfigürasyonları",
      refs: [
        "Çok-platformlu üretici — 4 proje: web, masaüstü, mobil, gömülü.",
        "TFS'ten göç + sıfırdan otomatik test kurulumu.",
      ],
      boundary:
        "Kapsam sınırı: uygulama geliştirme (kod yazma) bu hattın işi değildir — o iş App hattınındır.",
    },
    app: {
      label: "05 · Chimera AI App",
      h2: "Fikirden ürüne — ajans işi değil, üretim süreci.",
      lede:
        "Ürünleştirilmiş geliştirme süreci: her faz ayrı teslim ve ayrı kabul kriteriyle ilerler. AI-hızlandırılmış üretim hattı aynı işi daha kısa sürede, daha tutarlı çıkarır.",
      phases: ["Keşif", "Tasarım", "MVP", "Yayın", "Bakım"],
      closing:
        "Çıkan ürün istenirse kapalı devrede çalışır, DevOps hattında yaşar ve Platform yetenekleriyle entegre olur.",
    },
    start: {
      label: "06 · Nasıl Başlarız",
      h2: "İlk adım bir taahhüt değil, bir analizdir.",
      lede: "Üç adımda kurulum — ilk sistem 2 ayda canlıda.",
      steps: [
        {
          k: "ADIM 1",
          t: "Mimari Ön-Analiz",
          d: "Altyapınızı, verinizi ve kullanım senaryolarınızı yerinde inceleriz; donanım ve modül önerisiyle raporlarız. Analiz bedeli, proje bedelinden mahsup edilir.",
        },
        {
          k: "ADIM 2",
          t: "FAZ-0 Pilot",
          d: "Seçilen tek senaryoda sınırlı kapsamlı pilot: gerçek verinizle, sizin sunucunuzda. Karar kanıt üzerinden verilir.",
        },
        {
          k: "ADIM 3",
          t: "Kurulum ve devir",
          d: "Tam kurulum, ekip eğitimi ve dokümantasyonla teslim. Sistem kurumunuzun kalıcı mülkü olarak kalır.",
        },
      ],
      kobiK: "KOBİ İÇİN",
      kobiT: "Hızlı Başlangıç",
      kobiD:
        "10–50 kişilik ekipler için mini bilgi yönetimi veya chatbot kurulumu — elle tutulur kanıt, küçük kapsam, kısa süre.",
      cta: "Mimari Ön-Analiz talep edin",
    },
    refs: {
      label: "07 · Referanslar",
      h2: "Kanıt sahada.",
      lede:
        "Müşteri adları dışa dönük materyalde anonimdir; isim kullanımı yazılı onaya bağlıdır.",
      items: [
        {
          k: "PİLOT · CANLI",
          t: "Elektronik üreticisi",
          d: "Kapalı devre platform pilotu canlıda (Mayıs–Eylül 2026). Kurum sunucusunda model + bilgi yönetimi.",
          state: "ok",
        },
        {
          k: "FAZ-0 · TEKLİF",
          t: "Tohum Ar-Ge şirketi",
          d: "Yazılım ekibi pilotu (FAZ-0) teklif aşamasında — DevOps hattı konfigürasyonu.",
          state: "warn",
        },
        {
          k: "AYLIK RAPOR",
          t: "Benchmark programı",
          d: "Model ve donanım önerileri her ay yayımlanan benchmark raporuyla güncellenir.",
          state: "ok",
        },
      ],
      photoCaption: "Pilot kurulum · saha",
      photoPlaceholder: "Pilot sahasından fotoğraf bırakın (gerçek mekân, gerçek iş)",
    },
    resources: {
      label: "08 · Kaynaklar",
      h2: "Okuyun, sorun, karşılaştırın.",
      items: [
        ["Blog", "Aylık model ve donanım benchmark raporu, saha notları, mimari yazıları."],
        ["Sözlük", "RAG'den kapalı devreye — kurumsal AI terimlerinin sade Türkçe açıklamaları."],
        ["SSS", "Güvenlik, lisans, donanım ve süreç hakkında en sık sorulan sorular."],
      ],
      linkLabel: "Yakında",
    },
    about: {
      label: "09 · Hakkında",
      h2: "bir DC NEXTGEN ürünüdür",
      d:
        "Chimera AI, DC NEXTGEN tarafından geliştirilir ve teslim edilir. Yaklaşımımız mühendislik disiplinidir: ölçülmüş donanım, kanıtlanmış açık kaynak yığını, her ay yenilenen benchmark — fütürizm kostümü yok, bugün çalışan teknoloji var.",
    },
    contact: {
      label: "10 · İletişim",
      h2: "Toplantı odanıza gelelim.",
      lede:
        "Mimari Ön-Analiz için yazın; 2 iş günü içinde dönüş yapalım.",
      fName: "Ad Soyad",
      fOrg: "Kurum",
      fMail: "E-posta",
      fMsg: "Kısaca ihtiyacınız (isteğe bağlı)",
      send: "Talep gönder",
      sent: "Talebiniz alındı — 2 iş günü içinde dönüş yapacağız.",
      alt: "Veya doğrudan yazın:",
    },
    footer: {
      endorsement: "bir DC NEXTGEN ürünüdür",
      domain: "chimera-ai.com.tr",
      note: "© 2026 DC NEXTGEN. Veriniz binadan çıkmaz.",
      lines: ["Platform", "DevOps", "App"],
    },
  },

  en: {
    nav: {
      links: [
        ["#platform", "Platform"],
        ["#devops", "DevOps"],
        ["#app", "App"],
        ["#nasil-baslariz", "How We Start"],
        ["#referanslar", "References"],
        ["#kaynaklar", "Resources"],
        ["#hakkinda", "About"],
      ],
      cta: "Architecture Pre-Analysis",
    },
    hero: {
      label: "Closed-Circuit Enterprise AI",
      h1a: "Artificial intelligence.",
      h1b: "Within your boundaries, under your control.",
      lede:
        "Chimera AI is a closed-circuit AI platform that runs on your own servers, leaks no data to external clouds, and feeds on your organization's own knowledge. Not a subscription — your permanent property.",
      cta1: "Request an Architecture Pre-Analysis",
      cta2: "Explore the three lines",
      ticks: ["ON-PREMISE", "OPEN-SOURCE STACK", "TURKISH + GDPR/KVKK", "LIVE IN 2 MONTHS"],
      photoCaption: "Field photo · Obsidian+Bronze duotone",
      photoPlaceholder: "Drop a field photo here (CNC, server rack, laboratory)",
    },
    problem: {
      label: "01 · The Problem",
      h2: "Your data never leaves the building.",
      lede:
        "Organizations want AI, but three obstacles stall every project. Chimera AI solves all three with one architecture.",
      items: [
        {
          k: "DATA SOVEREIGNTY",
          t: "Your data on someone else's server",
          d: "With cloud AI, your chats, documents and code travel to Microsoft, Google or OpenAI servers. With Chimera AI, everything stays inside your boundary.",
        },
        {
          k: "CONTEXT",
          t: "Off-the-shelf AI doesn't know you",
          d: "Generic chat tools know nothing of your documents and processes — generic answers, low value. Chimera AI feeds on your own knowledge and answers with citations.",
        },
        {
          k: "OWNERSHIP",
          t: "Property, not rent",
          d: "Cloud AI is a subscription; walk away and nothing remains. Chimera AI is built on an open-source stack and stays where it is installed — a permanent asset.",
        },
      ],
    },
    lines: {
      label: "02 · Three Lines",
      h2: "Three lines, one alloy.",
      lede:
        "Chimera AI is the umbrella brand; three lines live beneath it. The same seal, loaded per line.",
      items: [
        {
          id: "platform",
          name: "Platform",
          tag: "Flagship",
          d: "Closed-circuit AI: model on your server, your organization's knowledge (RAG), chat and code assistant. Modular: M0–M6.",
          link: "Explore Platform",
        },
        {
          id: "devops",
          name: "DevOps",
          tag: "Production line",
          d: "Self-hosted software production line: Git, CI/CD, automated testing, deployment, release processes, Kanban and training.",
          link: "Explore DevOps",
        },
        {
          id: "app",
          name: "App",
          tag: "Idea to product",
          d: "AI-accelerated application development: Discovery → Design → MVP → Launch → Maintenance. Each phase a separate delivery with its own criteria.",
          link: "Explore App",
        },
      ],
    },
    platform: {
      label: "03 · Chimera AI Platform",
      h2: "The model on your server. The knowledge, yours.",
      lede:
        "A model running on your own server, knowledge management fed by your documents, and a chat/code assistant on a closed network — one modular platform.",
      diagram: {
        boundary: "ORGANIZATION BOUNDARY",
        model: "MODEL",
        modelSub: "on-premise server",
        rag: "YOUR KNOWLEDGE",
        ragSub: "RAG · cites sources",
        users: "USERS",
        usersSub: "chat · code assistant",
        cloud: "EXTERNAL CLOUD",
        noLink: "NO CONNECTION",
      },
      modulesH: "Module catalog",
      modulesLede: "M0 is the mandatory core; the rest are added as needed.",
      modules: [
        ["M0", "Core Platform", "Model on your server, chat interface, access control, monitoring and security — the mandatory core."],
        ["M1", "Knowledge Management (RAG)", "Your documents become the AI's open book; it answers with citations."],
        ["M2", "Secure Code Assistant", "Code completion and explanation in your editor, on a closed network — code never leaves the building."],
        ["M3", "R&D & Reasoning", "Step-by-step reasoning model with a sandboxed code execution area."],
        ["M4", "Visual Document Processing", "Reads scanned PDFs, schematics and tables; your archive becomes searchable."],
        ["M5", "Turkish Chatbot", "Natural Turkish bot for customer and field support; voice optional."],
        ["M6", "Data Analysis", "Turns natural-language questions into SQL, runs read-only, shows results on a panel."],
      ],
    },
    devops: {
      label: "04 · Chimera AI DevOps",
      h2: "The production line, inside your building.",
      lede:
        "We set up a self-hosted production line for your software team: source code never touches a cloud service. Delivered with training and documentation.",
      stages: ["Git", "CI/CD", "Test", "Deploy", "Release", "Kanban", "Training"],
      refsH: "Live reference configurations",
      refs: [
        "Multi-platform manufacturer — 4 projects: web, desktop, mobile, embedded.",
        "Migration from TFS + automated testing built from scratch.",
      ],
      boundary:
        "Scope boundary: application development (writing code) is not this line's job — that belongs to the App line.",
    },
    app: {
      label: "05 · Chimera AI App",
      h2: "Idea to product — a process, not agency work.",
      lede:
        "A productized development process: each phase ships separately with its own acceptance criteria. The AI-accelerated production line delivers the same work faster and more consistently.",
      phases: ["Discovery", "Design", "MVP", "Launch", "Maintenance"],
      closing:
        "The resulting product can run closed-circuit, live on the DevOps line, and integrate with Platform capabilities.",
    },
    start: {
      label: "06 · How We Start",
      h2: "The first step is an analysis, not a commitment.",
      lede: "Three steps to deployment — first system live in 2 months.",
      steps: [
        {
          k: "STEP 1",
          t: "Architecture Pre-Analysis",
          d: "We examine your infrastructure, data and use cases on site, and report with hardware and module recommendations. The analysis fee is credited against the project.",
        },
        {
          k: "STEP 2",
          t: "PHASE-0 Pilot",
          d: "A limited-scope pilot on one chosen scenario: with your real data, on your server. The decision is made on evidence.",
        },
        {
          k: "STEP 3",
          t: "Deployment & handover",
          d: "Full deployment, team training and documentation. The system remains your organization's permanent property.",
        },
      ],
      kobiK: "FOR SMEs",
      kobiT: "Quick Start",
      kobiD:
        "Mini knowledge management or chatbot setup for teams of 10–50 — tangible proof, small scope, short timeline.",
      cta: "Request an Architecture Pre-Analysis",
    },
    refs: {
      label: "07 · References",
      h2: "The proof is in the field.",
      lede:
        "Customer names are anonymous in outward-facing material; named use requires written consent.",
      items: [
        {
          k: "PILOT · LIVE",
          t: "Electronics manufacturer",
          d: "Closed-circuit platform pilot live (May–Sep 2026). Model + knowledge management on the customer's server.",
          state: "ok",
        },
        {
          k: "PHASE-0 · PROPOSAL",
          t: "Seed R&D company",
          d: "Software team pilot (PHASE-0) at proposal stage — DevOps line configuration.",
          state: "warn",
        },
        {
          k: "MONTHLY REPORT",
          t: "Benchmark program",
          d: "Model and hardware recommendations are refreshed with a monthly published benchmark report.",
          state: "ok",
        },
      ],
      photoCaption: "Pilot installation · field",
      photoPlaceholder: "Drop a photo from the pilot site (real place, real work)",
    },
    resources: {
      label: "08 · Resources",
      h2: "Read, ask, compare.",
      items: [
        ["Blog", "Monthly model and hardware benchmark report, field notes, architecture writing."],
        ["Glossary", "From RAG to closed circuit — plain-language explanations of enterprise AI terms."],
        ["FAQ", "The most frequent questions on security, licensing, hardware and process."],
      ],
      linkLabel: "Soon",
    },
    about: {
      label: "09 · About",
      h2: "a DC NEXTGEN product",
      d:
        "Chimera AI is built and delivered by DC NEXTGEN. Our approach is engineering discipline: measured hardware, a proven open-source stack, benchmarks refreshed monthly — no futurism costume, just technology that works today.",
    },
    contact: {
      label: "10 · Contact",
      h2: "Let us come to your meeting room.",
      lede:
        "Write to us for an Architecture Pre-Analysis; we respond within 2 business days.",
      fName: "Full name",
      fOrg: "Organization",
      fMail: "E-mail",
      fMsg: "Briefly, your need (optional)",
      send: "Send request",
      sent: "Request received — we will respond within 2 business days.",
      alt: "Or write directly:",
    },
    footer: {
      endorsement: "a DC NEXTGEN product",
      domain: "chimera-ai.com.tr",
      note: "© 2026 DC NEXTGEN. Your data never leaves the building.",
      lines: ["Platform", "DevOps", "App"],
    },
  },
};

// CHIMERA AI — content dictionary (EN) — core set
// Source: design/prototype/chimera-content.js (CHIMERA_I18N.en) — ported verbatim.
// Shape is validated against `Dict` (tr.ts) at build time.
import type { Dict } from "./tr";

const en: Dict = {
  nav: {
    links: [
      ["/en/platform", "Platform"],
      ["/en/devops", "DevOps"],
      ["/en/app", "App"],
      ["/en/how-we-start", "How We Start"],
      ["/en/references", "References"],
      ["/en/resources", "Resources"],
      ["/en/about", "About"],
    ],
    cta: "Architecture Pre-Analysis",
  },
  hero: {
    label: "Closed-Circuit Enterprise AI",
    h1a: "Artificial intelligence.",
    h1b: "Within your boundaries, under your control.",
    lede: "Chimera AI is a closed-circuit AI platform that runs on your own servers, leaks no data to external clouds, and feeds on your organization's own knowledge. Not a subscription — your permanent property.",
    cta1: "Request an Architecture Pre-Analysis",
    cta2: "Explore the three lines",
    ticks: ["ON-PREMISE", "OPEN-SOURCE STACK", "TURKISH + GDPR/KVKK", "LIVE IN 2 MONTHS"],
    photoCaption: "Field photo · Obsidian+Bronze duotone",
    photoPlaceholder: "Field photo (CNC, server rack, laboratory)",
  },
  problem: {
    label: "01 · The Problem",
    h2: "Your data never leaves the building.",
    lede: "Organizations want AI, but three obstacles stall every project. Chimera AI solves all three with one architecture.",
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
    lede: "Chimera AI is the umbrella brand; three lines live beneath it. The same seal, loaded per line.",
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
    lede: "A model running on your own server, knowledge management fed by your documents, and a chat/code assistant on a closed network — one modular platform.",
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
    lede: "We set up a self-hosted production line for your software team: source code never touches a cloud service. Delivered with training and documentation.",
    stages: ["Git", "CI/CD", "Test", "Deploy", "Release", "Kanban", "Training"],
    refsH: "Live reference configurations",
    refs: [
      "Multi-platform manufacturer — 4 projects: web, desktop, mobile, embedded.",
      "Migration from TFS + automated testing built from scratch.",
    ],
    boundary: "Scope boundary: application development (writing code) is not this line's job — that belongs to the App line.",
  },
  app: {
    label: "05 · Chimera AI App",
    h2: "Idea to product — a process, not agency work.",
    lede: "A productized development process: each phase ships separately with its own acceptance criteria. The AI-accelerated production line delivers the same work faster and more consistently.",
    phases: ["Discovery", "Design", "MVP", "Launch", "Maintenance"],
    closing: "The resulting product can run closed-circuit, live on the DevOps line, and integrate with Platform capabilities.",
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
    kobiD: "Mini knowledge management or chatbot setup for teams of 10–50 — tangible proof, small scope, short timeline.",
    cta: "Request an Architecture Pre-Analysis",
  },
  refs: {
    label: "07 · References",
    h2: "The proof is in the field.",
    lede: "Customer names are anonymous in outward-facing material; named use requires written consent.",
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
    photoPlaceholder: "Photo from the pilot site (real place, real work)",
  },
  resources: {
    label: "08 · Resources",
    h2: "Read, ask, compare.",
    items: [
      ["Glossary", "From RAG to closed circuit — plain-language explanations of enterprise AI terms.", "/en/docs/glossary"],
      ["FAQ", "The most frequent questions on security, licensing, hardware and process.", "/en/docs/faq"],
      ["Documentation", "Platform modules, architecture and security — the full technical docs.", "/en/docs"],
    ],
    linkLabel: "Explore",
  },
  about: {
    label: "09 · About",
    h2: "a DC NEXTGEN product",
    d: "Chimera AI is built and delivered by DC NEXTGEN. Our approach is engineering discipline: measured hardware, a proven open-source stack, benchmarks refreshed monthly — no futurism costume, just technology that works today.",
  },
  contact: {
    label: "10 · Contact",
    h2: "Let us come to your meeting room.",
    lede: "Write to us for an Architecture Pre-Analysis; we respond within 2 business days.",
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
    lines: [
      ["Platform", "/en/platform"],
      ["DevOps", "/en/devops"],
      ["App", "/en/app"],
    ],
  },
};

export default en;

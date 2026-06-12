// CHIMERA AI — Platform module catalog (public-safe distillation, EN).
// Source: src/data/modules.ts. Public repo discipline: NO prices / man-day
// effort / customer names / internal sales notes. Only "what you are buying"
// + honest limits. Same exported names, types and structure as the TR source.

import type { PlatformModule } from "@/data/modules";
export type { ModuleTier, PlatformModule } from "@/data/modules";

/** Triadic architecture honesty frame (Brief + catalog honesty note). */
export const ARCHITECTURE_HONESTY = {
  triad: ["Mind (LLM)", "Memory (RAG)", "Hand (MCP)"],
  shippedToday: "Mind + Memory + Secure Code Assistant",
  roadmap:
    "The Hand (MCP / internal system integration) arrives in a later phase on the roadmap — it is not presented as something delivered today.",
};

export const MODULE_RULES = [
  "M0 is the mandatory core — Chimera AI is not sold without the core; every module is added on top of M0.",
  "Phased delivery: setup begins with PHASE-0 (M0 + a pilot of the 1–2 chosen modules). Value is proven first in a small team, then expanded module by module.",
  "Hardware belongs to the organization; DC NEXTGEN advises or brokers procurement.",
];

/** Hardware scale band — priceless, category level. */
export const CAPACITY_NOTE =
  "The system scales to need: from a single compact device for small teams (laptop-class unified memory or a single GPU) all the way to data-center-class GPUs for large departments and organization-wide use. The right band is determined in the Architecture Pre-Analysis based on the usage scenario and the number of concurrent users.";

export const MODULES: PlatformModule[] = [
  {
    code: "M0",
    name: "Core Platform",
    tier: "zorunlu",
    summary:
      "Lays the foundation of a ChatGPT-like AI platform running on the organization's own server: the model runs in-house, staff chat through a web interface, who accessed what is tracked, and no data leaves the building. Every other module is added on top of this foundation.",
    forWho:
      "The base of every deployment. Trigger: “We want to use AI, but our data must not go to the public cloud.”",
    includes: [
      "Open-source LLM setup + Turkish response validation",
      "Web chat interface (Open WebUI) — chat history stays in-house",
      "User/role access management; LDAP/AD integration on request",
      "Monitoring dashboard: resource usage, response time, queries/active users, error logs",
      "Data-security hardening: closed network, TLS, access logs, zero-external-egress verification",
    ],
    delivers: [
      "Model produces responses (including Turkish) on the in-house server",
      "Web interface is reachable from the company network; pilot users can log in",
      "Monitoring dashboard is live and collecting metrics",
      "Zero data egress to external services is confirmed",
      "Pilot users have received basic usage training",
    ],
    limits: [
      "M0 alone is not an AI that “knows your organization” — organizational knowledge comes with M1 (RAG).",
      "The right hardware band is critical: large models slow down on insufficient memory.",
      "GDPR/KVKK: the technical infrastructure is compliant; legal assessment is the responsibility of the data-controller organization.",
    ],
  },
  {
    code: "M1",
    name: "Enterprise Knowledge Management (RAG)",
    tier: "secmeli",
    hero: "Knowledge-intensive organizations",
    summary:
      "Turns the organization's documents (procedures, specifications, contracts, knowledge base) into the AI's “open book.” Staff ask a question; the system finds the right document and answers with source citations. Knowledge accumulated over years becomes queryable.",
    forWho:
      "The hero module for knowledge-intensive organizations without a software team. Trigger: “We have the knowledge, but it sits where no one can find it.”",
    includes: [
      "Vector database (Qdrant) + embedding + reranker for semantic search",
      "Document scanning → markdown conversion → chunking pipeline",
      "Source-referenced response generation",
      "Role-based knowledge isolation (only HR sees the HR document)",
    ],
    delivers: [
      "The defined document set is indexed",
      "The system produces source-referenced answers from the correct document",
      "Organization-specific term/abbreviation test is passed",
      "The document add/update mechanism works",
    ],
    limits: [
      "Answer quality depends on corpus quality — data preparation is joint work with the organization.",
      "Semantic drift can occur with complex tabular PDFs.",
    ],
  },
  {
    code: "M2",
    name: "Secure Code Assistant",
    tier: "secmeli",
    hero: "Companies with a software team",
    summary:
      "Integrates a code assistant running on the closed network into the software team's code editor (VS Code / JetBrains): completion, explanation, refactor, test/comment generation — without code or context ever leaving the building.",
    forWho:
      "The hero module for companies with a software team. Trigger: “We want to use Copilot, but security won't allow it.”",
    includes: [
      "IDE extension (Continue.dev / Tabby) connecting to the local server",
      "VS Code (primary delivery), JetBrains (supported)",
      "In-house codebase scanning + sensitive-data (key/password) cleanup",
    ],
    delivers: [
      "The code assistant runs in VS Code on the closed network; code does not leave",
      "Completion, explanation and refactor demonstrated on the team's own codebase",
      "Team members use the extension on their own machines",
    ],
    limits: [
      "Generated code may contain security flaws — static analysis before build is mandatory; the assistant does not replace review.",
      "Visual Studio (.NET) integration depends on feasibility and is not guaranteed.",
    ],
  },
  {
    code: "M3",
    name: "R&D and Reasoning Support",
    tier: "genisleme",
    summary:
      "Gives engineering and R&D teams a reasoning model that produces solutions by “thinking” step by step, plus a secure code-execution area (sandbox). Algorithm design, mathematical analysis, optimization — all on the closed network.",
    forWho:
      "Engineering / R&D-heavy companies. Trigger: “On complex computation and algorithm work we want depth, not a fast reply.”",
    includes: [
      "Step-by-step reasoning model",
      "Isolated code-execution sandbox (SymPy / NumPy / local Python)",
    ],
    delivers: [
      "Produces a stepwise solution on a sample R&D problem",
      "The sandbox runs in isolation; verified to have no outbound file/network access",
      "The customer's real problem scenarios are tested together",
    ],
    limits: [
      "Reasoning response time is long because of the “thinking” steps — it should not be confused with a fast-chat expectation.",
      "Sandbox scope (libraries, resource limits) is clarified in writing before setup.",
    ],
  },
  {
    code: "M4",
    name: "Visual Document Processing",
    tier: "genisleme",
    summary:
      "Sets up a visual-AI layer that “reads” scanned PDFs, technical drawings, schematics and tabular documents. Documents from the paper archive automatically turn into text and become searchable; combined with M1, the scanned archive joins the RAG too.",
    forWho:
      "Companies with heavily scanned documents/schematics in their archive. Trigger: “Half our knowledge is in scanned PDFs, none of it searchable.”",
    includes: [
      "OCR pre-processing (Tesseract / EasyOCR)",
      "Schematic/table reading with a multimodal model",
      "A batch pipeline that automatically processes documents dropped into a folder",
    ],
    delivers: [
      "Text extraction + query answering on a sample document set",
      "The batch processing pipeline works",
      "Accuracy measured and reported on a validation set chosen with the customer",
    ],
    limits: [
      "Accuracy can drop on handwriting and very small-font footnote tables (~70%) — this limit is stated openly during the sale.",
      "Low-resolution scans (below 300 DPI) are outside the quality guarantee.",
    ],
  },
  {
    code: "M5",
    name: "Turkish Chatbot — Customer/Field Support",
    tier: "secmeli",
    summary:
      "Sets up a chatbot that speaks natural Turkish and is fed with organizational knowledge for customer service, the dealer network or field teams. It answers frequently asked questions, explains procedures and takes load off the human team. Optional voice usage (Whisper STT/TTS).",
    forWho:
      "Companies with a call center, dealer/field network or heavy internal support demand. Trigger: “We answer the same questions a hundred times a day.”",
    includes: [
      "Natural-Turkish chat model",
      "Guardrail: out-of-scope/prohibited-topic safety filter",
      "Conversation analytics and traceability",
      "Option: voice question-answer (Whisper STT + TTS)",
    ],
    delivers: [
      "The bot produces natural Turkish answers from the defined FAQ/knowledge set",
      "Guardrail is active: safe responses on out-of-scope/prohibited topics tested",
      "Conversation records are traceable",
      "(If the option was taken) the voice flow works",
    ],
    limits: [
      "Hallucination risk in front of customers is always present — a publicly exposed bot is not put live without strict guardrails.",
      "The bot is placed in front of, not in place of, human support; a hand-off-to-human scenario is part of the design.",
    ],
  },
  {
    code: "M6",
    name: "Data Analysis and Reporting",
    tier: "genisleme",
    summary:
      "Translates a question a manager asks in natural language (“which product's returns rose last month?”) into a database query (SQL), runs it over a read-only connection, and presents the result in a table/chart panel. Reaching data by asking questions instead of waiting for a report.",
    forWho:
      "Companies with an ERP/production/sales database that face a reporting bottleneck. Trigger: “We ask IT for the report, it arrives three days later.”",
    includes: [
      "Natural language → SQL (Text-to-SQL)",
      "Read-only database connection",
      "Dynamic reporting panel (table/chart)",
    ],
    delivers: [
      "Produces correct SQL and returns the correct result on a sample question set",
      "It is technically verified that the database connection is read-only",
      "The reporting panel is reachable from the company network",
      "“I'm not sure” behavior tested on incorrect/ambiguous questions",
    ],
    limits: [
      "Wrong SQL → wrong report risk: read-only authorization on the database is mandatory; no write access is granted.",
      "Reports are decision support; for critical financial decisions, human verification is added to the process design.",
    ],
  },
];

/** Advanced/expansion modules — added as the platform matures. */
export const ADVANCED_MODULES: { name: string; what: string; roadmap?: boolean }[] = [
  { name: "Multi-model serving", what: "Task-based model routing (code question → code model, general question → general model); a separate model per department." },
  { name: "Fine-tuning (LoRA)", what: "Fine-tuning the model with the organization's terminology/tone/custom libraries. RAG is tried first; narrow-scope fine-tuning is avoided." },
  { name: "MCP / internal system integration", what: "The “Hand” layer: standard connectivity to systems like ERP/MRP — the phase where the AI does work, not just reads.", roadmap: true },
  { name: "GPU scaling + high availability", what: "Multiple GPUs/servers, load balancing; moving from the S/M band to L/XL." },
  { name: "Organization-wide rollout + training", what: "Expansion from the pilot team to all departments, role-based presets, a user training program." },
  { name: "SLA 24/7", what: "Defined response times, periodic maintenance, model updates, proactive monitoring (annual)." },
];

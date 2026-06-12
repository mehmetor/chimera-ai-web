---
term: "RAG (Retrieval-Augmented Generation)"
lang: "en"
aliases: ["retrieval augmented generation", "grounded generation", "what is RAG"]
summary: "A method where a language model retrieves relevant passages from the organization's own documents and answers with citations."
updated: 2026-06-12
seeAlso: ["on-premise-ai"]
---

**RAG (Retrieval-Augmented Generation)** is a method in which, before answering, a language
model **retrieves** the most relevant passages from the organization's own document set
(contracts, procedures, technical docs, archives) and **generates** its answer grounded in
those sources. The model answers from the organization's real knowledge rather than from
memory alone — and it can **cite its sources**.

## How it works

1. Documents are split into chunks and indexed semantically (a vector database).
2. When a user asks a question, the most relevant chunks are retrieved.
3. Those chunks are given to the model as context.
4. The model produces an answer grounded in that context and indicates which document it came from.

## Why it matters

- **Freshness:** new documents can be added without retraining the model.
- **Verifiability:** because the answer is tied to a source, it can be checked; hallucination
  is managed by architecture.
- **Privacy:** in an [on-premise](/en/resources/glossary/on-premise-ai) deployment, documents
  never leave the organization's boundary.

RAG is the layer that combines a large language model with the organization's knowledge base.

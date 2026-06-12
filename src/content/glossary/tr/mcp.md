---
term: "MCP (Model Context Protocol)"
lang: "tr"
aliases: ["model context protocol", "mcp nedir", "araç entegrasyonu", "El katmanı"]
summary: "Modelin kurum sistemlerine (ERP, veritabanı vb.) bağlanmasını sağlayan standart protokol — 'USB-C kablosu' benzetmesi."
updated: 2026-06-12
seeAlso: ["rag", "kapali-devre-on-premise"]
---

**MCP (Model Context Protocol)**, bir yapay zeka modelinin kurum sistemlerine — ERP, MRP,
veritabanı, dahili API'ler — standart bir biçimde bağlanmasını sağlayan açık protokoldür.
Sık kullanılan benzetme: araçlar arası **"USB-C kablosu"** — her sistem için ayrı özel
entegrasyon yazmak yerine ortak bir arayüz.

## Neden önemli

[RAG](/dokumanlar/sozluk/rag) modelin kurum bilgisini **okumasını** sağlar; MCP ise modelin
kurum sistemlerinde **iş yapmasını** sağlar (kayıt oluşturma, sorgu çalıştırma, süreç
tetikleme). Chimera AI mimarisinde bu, **"El"** katmanıdır.

> **Dürüst not:** Chimera AI'da bugün teslim edilen yetenekler Akıl (LLM) + Hafıza (RAG) +
> Güvenli Kod Asistanı'dır. **El (MCP / iç sistem entegrasyonu) yol haritasında ileri fazda
> gelir** — bugünün teslimi gibi sunulmaz. Bkz. [Nasıl çalışır](/dokumanlar/platform/nasil-calisir).

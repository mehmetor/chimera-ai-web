---
term: "LLM (Büyük Dil Modeli)"
lang: "tr"
aliases: ["large language model", "büyük dil modeli", "dil modeli", "LLM nedir"]
summary: "Büyük metin verisiyle eğitilmiş, doğal dili anlayıp üretebilen yapay zeka modeli."
updated: 2026-06-12
seeAlso: ["rag", "kapali-devre-on-premise"]
---

**LLM (Large Language Model — Büyük Dil Modeli)**, çok büyük miktarda metinle eğitilmiş,
doğal dili anlayıp üretebilen bir yapay zeka modelidir. Soru yanıtlama, özetleme, çeviri,
kod yazma gibi işleri tek bir genel amaçlı modelle yapabilir.

## Açık kaynak vs kapalı modeller

- **Kapalı (API) modeller:** sağlayıcının sunucusunda çalışır; veri dışarı gider.
- **Açık kaynak modeller:** ağırlıkları indirilebilir, kurum kendi sunucusunda çalıştırabilir
  — [kapalı devre](/kaynaklar/sozluk/kapali-devre-on-premise) kurulumun temelidir.

## Sınırları ve yönetimi

LLM'ler bazen kendinden emin ama yanlış yanıt üretebilir (halüsinasyon). Bu, mimariyle
yönetilir: [RAG](/kaynaklar/sozluk/rag) ile yanıtı kurumun belgelerine bağlamak ve kaynak
göstermek, doğruluğu belirgin biçimde artırır.

Bir LLM'in kuruma faydalı olması için onu **kurumun kendi bilgisiyle** birleştirmek gerekir;
bu birleştirme katmanı RAG'dir.

---
term: "Fine-tuning (ince ayar) ve LoRA"
lang: "tr"
aliases: ["fine tuning", "ince ayar", "LoRA", "lora nedir", "model eğitimi"]
summary: "Hazır bir modelin kurum verisiyle ek eğitimi; LoRA bunu az kaynakla yapan tekniktir."
updated: 2026-06-12
seeAlso: ["rag", "llm"]
---

**Fine-tuning (ince ayar)**, önceden eğitilmiş bir modeli kurumun kendi verisiyle ek eğitime
tabi tutarak terminolojisine, tonuna veya özel görevlerine uyarlamaktır. **LoRA** (Low-Rank
Adaptation), bunu modelin tamamını yeniden eğitmeden, çok daha az kaynakla yapan yaygın
tekniktir.

## RAG mı, fine-tune mı?

Çoğu kurumsal "AI bizim bilgimizi bilsin" ihtiyacında önce [RAG](/kaynaklar/sozluk/rag)
denenir — çünkü RAG belgeleri yeniden eğitim olmadan ekler, günceller ve kaynak gösterir.

Fine-tune ise daha çok **biçim/ton/özel dil** gerektiren durumlarda (örn. kurumsal yazım tonu,
tescilli kod kütüphaneleri) devreye girer.

> **Risk:** Yalnızca dar bir veriyle yapılan ince ayar, modelin genel mantık, matematik ve kod
> yeteneklerini kaybetmesine yol açabilir (**katastrofik unutma**). Bu yüzden dar kapsamlı
> fine-tune'dan kaçınılır; RAG önceliklidir.

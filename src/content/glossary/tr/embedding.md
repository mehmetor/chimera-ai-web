---
term: "Embedding (gömme)"
lang: "tr"
aliases: ["gömme", "vektör gömme", "embedding nedir", "metin gömme"]
summary: "Metinleri anlamlarına göre sayı dizilerine (vektör) çeviren model; RAG'da anlamsal arama bu vektörlerle yapılır."
updated: 2026-06-12
seeAlso: ["rag", "vektor-veritabani", "reranker"]
---

**Embedding (gömme)**, bir metni anlamına göre sabit uzunlukta bir sayı dizisine (vektöre)
çeviren modeldir. Anlamca yakın metinler, vektör uzayında da birbirine yakın düşer; böylece
"şu cümleye en yakın anlam hangi belgede?" sorusu matematiksel olarak yanıtlanabilir.

[RAG](/kaynaklar/sozluk/rag) mimarisinin temelidir: kurum belgeleri embedding'e çevrilip bir
[vektör veritabanında](/kaynaklar/sozluk/vektor-veritabani) saklanır, kullanıcı sorusu da
embedding'e çevrilip en yakın parçalar getirilir.

Türkçe semantik aramada çok dilli gömme modelleri (ör. `multilingual-e5-large`) yüksek
kararlılık sunar. Embedding kalitesi, doğru belgeyi bulma başarısını doğrudan belirler.

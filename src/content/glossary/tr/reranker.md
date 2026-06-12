---
term: "Reranker (yeniden sıralayıcı)"
lang: "tr"
aliases: ["yeniden sıralama", "reranker nedir", "yeniden sıralayıcı"]
summary: "Aramada bulunan ilk sonuçları ikinci bir değerlendirmeyle en alakalıdan sıralayan bileşen; RAG'da bağlam doğruluğunu artırır."
updated: 2026-06-12
seeAlso: ["rag", "embedding", "vektor-veritabani"]
---

**Reranker (yeniden sıralayıcı)**, anlamsal aramadan dönen ilk sonuç kümesini ikinci ve daha
hassas bir değerlendirmeyle yeniden sıralayan bileşendir. [Embedding](/kaynaklar/sozluk/embedding)
araması hızlıdır ama kaba olabilir; reranker, en alakalı parçaları en üste taşıyarak dil
modeline beslenecek bağlamın doğruluğunu yükseltir.

[RAG](/kaynaklar/sozluk/rag) hattındaki sırası: arama (embedding) → yeniden sıralama (reranker)
→ yanıt üretimi (LLM). Türkçe uyumu yüksek açık kaynak seçenekler (ör. `bge-reranker-v2-m3`)
kurumsal kurulumlarda tercih edilir. İyi bir reranker, "doğru belgeyi bulduk ama yanlış parçayı
modele verdik" hatasını belirgin biçimde azaltır.

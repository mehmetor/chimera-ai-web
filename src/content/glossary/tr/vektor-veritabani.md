---
term: "Vektör veritabanı"
lang: "tr"
aliases: ["vector database", "vektör db", "vektör veri tabanı", "Qdrant"]
summary: "Embedding'leri saklayan ve 'anlamca en yakın belge hangisi?' sorusunu milisaniyede yanıtlayan veritabanı."
updated: 2026-06-12
seeAlso: ["embedding", "rag", "reranker"]
---

**Vektör veritabanı**, metinlerin anlam vektörlerini ([embedding](/dokumanlar/sozluk/embedding))
saklayan ve "verilen bir vektöre anlamca en yakın olanlar hangileri?" sorusunu çok büyük
koleksiyonlarda bile milisaniyeler içinde yanıtlayan özel bir veritabanıdır.

Klasik veritabanları tam eşleşme (kelime kelime) ararken, vektör veritabanı **anlam yakınlığı**
arar — "izin prosedürü" sorgusu "yıllık tatil yönetmeliği" belgesini de bulabilir.

[RAG](/dokumanlar/sozluk/rag) kurulumlarının hafıza katmanıdır; açık kaynak Qdrant yaygın bir
tercihtir. Kapalı devre kurulumda vektör veritabanı da kurum sunucusunda çalışır, dışarı veri
göndermez.

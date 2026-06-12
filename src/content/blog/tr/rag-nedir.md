---
title: "RAG nedir? Yapay zekaya kurumunuzu öğretmek"
lang: "tr"
description: "RAG, dil modelini kurumunuzun kendi belgeleriyle yanıt verir hale getirir. Nasıl çalıştığını ve neden modeli yeniden eğitmediğini anlatıyoruz."
pubDate: 2026-06-12
tags: ["rag", "kurumsal-bilgi", "embedding", "on-premise"]
---

RAG (Retrieval-Augmented Generation), dil modelinin bir soruyu yanıtlamadan önce kurumun kendi belge dağarcığından ilgili parçaları getirip yanıtı o kaynaklara dayandırarak üretmesidir. Model ezberinden değil, sizin sözleşme ve prosedürlerinizden okuyup yanıt verir; üstelik hangi belgeye dayandığını söyler. Kurumun belgeleri, modelin önündeki açık kitap olur.

"AI bizim bilgimizi bilsin" diyen kurum aslında bunu sorar; RAG da tam buna cevap verir. Genel bir [dil modeli](/dokumanlar/sozluk/llm) internetin ortalamasını bilir; sizin satın alma prosedürünüzü, geçen yılki saha raporunuzu, müşteriye verdiğiniz özel taahhüdü bilmez. RAG bu boşluğu modeli yeniden eğitmeden kapatır.

## RAG nasıl çalışır?

Süreç dört adımda yürür.

1. **İndeksleme.** Belgeleriniz anlamlı parçalara bölünür, her parça [embedding](/dokumanlar/sozluk/embedding) ile bir sayı vektörüne çevrilip [vektör veritabanına](/dokumanlar/sozluk/vektor-veritabani) yazılır. Açık kaynak Qdrant bu işte yaygın.
2. **Getirme (retrieval).** Kullanıcı bir soru sorduğunda soru da aynı yöntemle vektöre çevrilir, veritabanı anlamca en yakın parçaları bulur. Kelime eşleşmesi değil, anlam yakınlığı arar; "yıllık izin hakkım" sorusu "izin tahakkuku" başlıklı maddeyi de bulur.
3. **Yeniden sıralama (rerank).** Bir [reranker](/dokumanlar/sozluk/reranker) getirilen adayları tekrar tartar ve gerçekten en alakalı parçayı üste taşır. İlk getirme hızlıdır ama kabadır; reranker keskinleştirir.
4. **Üretim (generation).** Model bu seçilmiş bağlamı okuyup yanıtı yazar ve cümlenin hangi belgeden geldiğini belirtir.

Araya rol bazlı izolasyon girer: İK belgesini yalnız İK görür, finans sözleşmesini yalnız yetkili. Böylece her kullanıcı yalnızca erişim hakkı olduğu belgelerden yanıt alır.

## Neden modeli yeniden eğitmek yerine RAG?

Üç pratik sebep RAG'i öne çıkarır.

İlki güncellik. Yeni bir prosedür yayımladınız, eski bir sözleşme yenilendi. RAG'de tek yaptığınız belgeyi indekslemek; model yeniden eğitime gerek kalmadan yeni bilgiyle yanıt verir. Yeniden eğitim ise pahalı, yavaş ve her güncellemede tekrarlanması gereken bir döngü.

İkincisi doğrulanabilirlik. RAG yanıtı bir kaynağa bağlı olduğu için kontrol edilebilir; modelin uydurma eğilimini (halüsinasyon) bu mimari sınırlar. Belge atfını açar, ilgili paragrafı okuyup doğrularsınız. Kaynağı olmayan bir cümle zaten şüpheyle karşılanır.

Üçüncüsü gizlilik. [Kapalı devrede](/dokumanlar/sozluk/kapali-devre-on-premise) belgeler kurum sınırından çıkmaz; vektör veritabanı da sizin sunucunuzda çalışır.

## RAG mı, fine-tune mu?

Karışan nokta genelde burası. [Fine-tuning](/dokumanlar/sozluk/fine-tuning) modele yeni *bilgi* öğretmek için değil, yeni bir *biçim* öğretmek için iyidir: belirli bir ton, kurumsal jargon, sabit bir çıktı şablonu. "AI bizim bilgimizi bilsin" ihtiyacında ise önce RAG denenir.

Bunun teknik bir sebebi var. Dar bir veriyle yapılan fine-tune, modelin matematik ve kod gibi genel yeteneklerini bozabilir; literatürdeki adıyla katastrofik unutma. Dar bir iç belge kümesiyle eğitilen model, o belgeleri biraz daha iyi taklit ederken genel yeteneklerinde körelir. RAG bu riski taşımaz: model olduğu gibi kalır, bilgiyi siz dışarıdan beslersiniz.

## Türkçe çalışır mı?

Çalışır, ama doğru bileşeni seçmek gerekir. multilingual-e5-large gibi çok dilli gömme modelleri Türkçe semantik aramada genellikle iyi sonuç verir; reranker tarafında bge-reranker-v2-m3 gibi Türkçe uyumlu bir model kullanırsınız. İkisi birlikte, Türkçenin sondan eklemeli yapısından doğan zorluğu büyük ölçüde aşar.

## Dürüst sınır

RAG sihir değil. Yanıtın kalitesi doğrudan korpusun kalitesine bağlıdır: çelişkili veya eksik belgelerle beslenen sistem, çelişkili yanıt verir. Veri hazırlığı bu yüzden kurumla ortak yürüyen bir iş; "belgeleri yükleyin gerisi olur" diyen bir anlatı eksik anlatıdır. Karmaşık, çok sütunlu tablolar içeren PDF'lerde de anlamsal kayma görülebilir; bu tür içerik çoğu zaman ayrı bir hazırlık ister.

Bunları baştan söylemek RAG'i zayıflatmaz; nerede sağlam, nerede dikkat gerektiğini bilerek kurarsınız.

Kurumunuzun belgeleri RAG için ne kadar hazır, hangi modülden başlamak mantıklı? Bunu tahminle değil, belgelerinize bakarak söyleriz. [Kurumsal Bilgi Yönetimi (RAG)](/dokumanlar/platform/moduller) modülü bu mimariyi kapsar; nereden başlayacağınızı ise [Mimari Ön-Analiz](/nasil-baslariz) somut belge örnekleriniz üzerinden çıkarır.

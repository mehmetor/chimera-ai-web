---
title: "Türkçe için en iyi açık kaynak LLM hangisi?"
lang: "tr"
description: "Kendi sunucusunda Türkçe çalışacak kurumlar için açık kaynak LLM seçimi: tokenizer, morfem koruma, TR-MMLU ve donanım bantlarıyla net bir karşılaştırma."
pubDate: 2026-06-12
tags: ["turkce-llm", "acik-kaynak", "on-premise", "tokenizer", "rag"]
---

Cevap donanımınıza bağlı. Yine de bugün kendi sunucunuzda Türkçe ile belge tabanlı erişimi ([RAG](/dokumanlar/sozluk/rag)) birlikte çalıştıracaksanız, en güçlü açık ağırlıklı adaylardan biri Qwen 3.6 35B-A3B. Bir [MoE](/dokumanlar/sozluk/moe) modeli; 248 bin maddelik geniş sözlüğü Türkçe morfem sınırlarını yüksek doğrulukla tanıyor. "En iyi" sorusunun cevabı parametre sayısında değil.

## Türkçe neden ayrı bir problem

Türkçe bitişken bir dil. Bir kök alır, üstüne ek üstüne ek bindirir; "evlerimizden" tek kelimede dört ayrı anlam birimi taşır. İngilizce ağırlıklı eğitilmiş bir tokenizer bunu göremez, kelimeyi anlamsız küçük parçalara böler. Sonuç yüksek fragmantasyon: aynı cümle daha çok token yer; bağlam penceresi boşa dolar, uzun cümlede anlam kayar.

Bu yüzden modelin Türkçe karnesini parametre boyutuyla okumak yanıltır. TR-MMLU bunu gösteriyor: makine çevirisi hatalarından temizlenmiş, yerel sınavlardan derlenmiş yaklaşık 6.200 soruluk bir küme. Başarıyı en güçlü açıklayan değişken model büyüklüğü değil, modelin morfem düzeyinde Türkçeyi ne kadar koruduğu; korelasyon +0,90 civarında. Türkçe morfolojisini koruyan küçük bir tokenizer, kelimeyi parçalara bölen çok daha büyük bir modelden daha tutarlı sonuç verebilir.

Geniş sözlüğün kazancı tam da bu morfem sınırlarında. Gemma 4 (262 bin) ve Qwen 3.5/3.6 (248 bin) sözlükleri morfem sınırlarını yüksek isabetle yakalıyor. Pratikte model, uzun cümlede "-da/-de" ya da "-a/-e" ekini yerli yerinde tutar.

## Sıkıştırma nerede başlıyor, nerede bitiyor

Modeli kendi sunucunuza sığdırmak için [quantization](/dokumanlar/sozluk/quantization) uygularsınız. İşe yarar, ama bir tabanı var. Q4 altına indiğinizde Türkçe diakritikler (ş, ç, ğ, ü, ö, ı) bozulmaya başlar; "için" yazması gereken model "icin" üretir. Pratikte Q4_K_M genel bir taban olarak iş görür; altına indikçe diakritik bozulması riski artar. Bu sınırı korumak, sıkıştırma kazancı ile Türkçe doğruluğu arasında makul dengeyi tutar.

İkinci tuzak fine-tune. Modeli yalnız dar bir Türkçe veriyle eğitmek cazip görünür, ama genel yeteneğini silebilir; literatürde buna katastrofik unutma deniyor. Çoğu kurumun ihtiyacı modeli yeniden eğitmek değil, sağlam bir tabanın üstüne kendi belgelerini [RAG](/dokumanlar/sozluk/rag) ve [embedding](/dokumanlar/sozluk/embedding) ile bağlamak. Bu yol genel zekâyı korur, veriyi de [kapalı devre / on-premise](/dokumanlar/sozluk/kapali-devre-on-premise) tutar.

## Senaryoya göre seçim

Tek bir model her işi en iyi yapmaz. Aşağıdaki tablo, 10 üzerinden dahili Türkçe-uygunluk değerlendirmemizden; metodolojinin tamamı raporda.

| Senaryo | Model | Türkçe skoru |
|---|---|---|
| Müşteri/saha desteği | Gemma 4 26B A4B | 9,8 |
| Bilgi yönetimi / RAG | Qwen 3.6 35B | 9,5 |
| Doküman + görsel | Qwen 3.6 35B Vision | 9,0 |
| Veri analizi | Qwen 3.6 35B | 8,8 |
| Kod | Qwen3-Coder-Flash-30B | 8,5 |
| Algoritma / Ar-Ge | QwQ-32B | 8,0 |

RAG ağırlıklı kurumsal bilgi tabanında Qwen 3.6 35B-A3B öne çıkıyor. "Thinking Preservation" özelliği akıl yürütme geçmişini koruduğu için ardışık belge sorgularında tutarlılık düşmüyor; aynı mekanizma KV cache ve token başına maliyeti azaltabilir (Haziran 2026 raporundaki ölçümde ~%30). Geri dönen sonuçları bir [reranker](/dokumanlar/sozluk/reranker) yeniden sıralar.

Yerel modeller de yerinde kalıyor. Trendyol-LLM ve Kumru-2B, sınırlı donanımda basit Türkçe komutları çok iyi işliyor. Çok adımlı RAG ve karmaşık çıkarımda küresel açık modellerin gerisinde kalıyorlar — beklenen şey, çünkü ölçek çok farklı.

## Donanım: nereden başlanır

[MoE](/dokumanlar/sozluk/moe) mimarisi seçimi rahatlatıyor. Qwen 3.6 35B-A3B sorgu başına yalnız ~3 milyar parametresini, Gemma 4 26B ise ~3,8 milyarını çalıştırır. Birleşik bellekli bir mini PC'de aynı modeli dense bir mimariye göre çok daha hızlı, üç katına yakın hızda döndürür.

Simülasyon ve ilk denemeler için Mac mini M4 Pro 24 GB sınıfı bir makine yeter; üstünde Gemma 4 E4B, Qwen 3.5 2B ya da Kumru-2B döner. Üretim RAG için tabanı 24 GB sınıfına çekin: 24 GB sınıfı bir GPU (ör. RTX 3090) ya da 32 GB birleşik bellekli bir Mac mini M4 Pro bu modeli taşıyabilir. Donanım eşiklerinin ayrıntısı için [SSS](/dokumanlar/sss) sayfasına bakabilirsiniz.

Lisans tarafı kurumsal kullanım için temiz. Gemma 4 ve Qwen aileleri Apache 2.0, ticari dağıtım serbest. Llama 4 Scout/Maverick ise Llama 4 Topluluk Lisansı'na tabi; aylık 700 milyon aktif kullanıcının altındaki kurumlarda ücretsiz ticari kullanım onaylı.

## "En iyi" donar mı

Donmaz. Bu sayfadaki sürüm numaraları birkaç ay içinde eskir; her ay yeni bir [LLM](/dokumanlar/sozluk/llm) sürümü çıkar, sıralama oynar. İki eğilim büyük ölçüde sabit kalıyor: Türkçeyi tokenizer düzeyinde koruyan modeller belirgin avantaj sağlıyor, çok agresif sıkıştırma (Q4_K_M altı) ise Türkçede doğruluğu düşürme eğiliminde. Gerisini senaryonuz belirler; doğru cevap senaryoya ve eldeki donanıma göre değişir.

Bu iki değişkeni birlikte tartmadan model seçerseniz erken davranmış olursunuz. [Mimari Ön-Analiz](/nasil-baslariz) tam bunun için var: senaryonuzu ve veri hacminizi ölçüp donanımınıza göre hangi modelin hangi [quantization](/dokumanlar/sozluk/quantization) ve hangi [Platform modülleri](/dokumanlar/platform/moduller) ile çalışacağını belirliyoruz. Altı ayda bir tabloyu yeniden çalıştırmak, listeyi güncel tutmaya yeter. Bütün karşılaştırmanın ham hâli ise [Haziran 2026 raporu](/dokumanlar/rapor/2026-06) içinde.

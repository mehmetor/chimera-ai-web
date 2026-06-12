---
title: "Açık kaynak LLM'ler kurumsal kullanıma hazır mı?"
lang: "tr"
description: "Açık ağırlıklı modeller benchmark'ta ve lisansta bugün kurumsal işe yetiyor. Asıl soru modelin değil, onu kuran sistemin hazır olup olmadığı."
pubDate: 2026-06-12
tags: ["llm","kurumsal-ai","on-premise","rag","guardrail"]
---

Kısa cevap: evet, ama "evet" iki ayrı soruya verilmiş gibi okunmalı. Açık ağırlıklı bir [modelin](/dokumanlar/sozluk/llm) ham yetkinliği bugün birçok kurumsal görevde fiilen iş gören seviyede; bunu benchmark, lisans ve Türkçe başarısı birlikte gösteriyor. "Sizin kurumunuza hazır" demekse modelden fazlasını anlatır: modeli kuran sistemi. Bu yazı iki katmanı ayırıyor, çünkü tereddüdün çoğu bu ikisinin karıştırılmasından doğuyor.

## Model katmanı: motor bugün yeterli

Birkaç sayı duruşu netleştirir. Akıl yürütmede (MMLU-Pro) güçlü açık modeller yaklaşık %85–89 bandında. Matematikte daha da iyiler: AIME'de %92–95. Kod (LiveCodeBench %80–84) ve çok dilli test (MMMLU %88–91) de iş gören seviyede. Bunlar artık "yaklaşıyor" değil, birçok kurumsal görevde fiilen çalışan rakamlar. Model adlarıyla tam tablo [Haziran 2026 raporunda](/dokumanlar/rapor/2026-06).

Türkçe tarafında sevindirici bir bulgu var: başarıyı belirleyen şey parametre sayısı değil, modelin morfem düzeyinde Türkçe'yi ne kadar koruduğu. Aynı rapordaki ölçümlerde bu koruma ile Türkçe başarısı arasında güçlü bir ilişki çıkıyor. Demek ki Türkçe'yi doğru parçalayan model, çok daha büyük ama kötü parçalayan bir modeli geçebiliyor; güçlü modeller TR-MMLU'da %84–88 bandında veriyor.

Lisans da artık bir engel değil. Gemma 4 ve Qwen aileleri Apache 2.0 ile geliyor, ticari kullanım serbest. Llama 4 Scout ve Maverick'i ise Topluluk Lisansı ücretsiz ticari kullanıma açar. Eşik yüksek: aylık 700 milyon aktif kullanıcının altındaki her kurum kapsamda. Çoğu kurum için ticari kullanım önünde lisans engeli kalmıyor.

Burada dürüst olmak gerek: benchmark her şey değil. Skorlar aylık değişir, bir model bu ay lider olur, gelecek ay ikinci sıraya düşer. Asıl belirleyici skor değil; kararı sizin senaryonuz ve verinizin kalitesi veriyor. Yüksek MMLU-Pro skoru, kurumunuzun on yıllık belgelerini tanıdığı anlamına gelmiyor. İkinci katman tam da burada başlıyor.

## Sistem katmanı: hazır olan motor değil, araç

Bir modelin laptopta soruya cevap vermesi ile kurumda üretime girmesi farklı şeyler. Aradaki boşluğu dolduran şey sistemdir. Çekirdek şunu yapar: model kurumun kendi sunucusunda çalışır, kullanıcılar role göre yetkilenir, bir panel kaynak kullanımını ve yanıt sürelerini gösterir. Sistem [kapalı ağda](/dokumanlar/sozluk/kapali-devre-on-premise) çalışır ve dışarıya sıfır veri çıktığını doğrular. Kurumsal kimlik dizinleri (LDAP/AD) isteğe bağlı entegre edilir. Türkçe yanıtı ayrıca bir doğrulama katmanı denetler; o da çekirdeğin parçası. Detayları [güvenlik sayfasında](/dokumanlar/platform/guvenlik) açtık.

Yine de bu çekirdek tek başına "kurumu bilen" bir AI değildir. Genel bir model kuruluştur, sizin sözleşmenizi, prosedürünüzü, ürün kataloğunuzu tanımaz. Kurumsal bilgi sisteme [RAG](/dokumanlar/sozluk/rag) ile girer. Kurumun belgeleri modelin açık kitabı olur; sistem her yanıta kaynak ekler ve bilgiyi role göre ayırır. İK belgesini yalnız İK görür. Model motordur; hazır olan, motoru kurumun bilgisine bağlayan bütün araçtır. Modüllerin tamamı [platform sayfasında](/dokumanlar/platform/moduller).

## Dürüst sınır: nereye kadar bugün, nereden sonra yol haritası

Üç katmanlı bir mimari düşünün. Akıl, modelin kendisi. Hafıza, RAG ile gelen kurumsal bilgi. İkisi de bugün teslim ediliyor. Üçüncüsü El: modelin ERP veya MRP gibi iç sistemlere standart bir protokolle ([MCP](/dokumanlar/sozluk/mcp)) bağlanıp fiilen iş yapması. Bu katman yol haritasında. Bugün teslim edilmiş gibi sunmuyoruz; dürüstlük bizde pazarlama cümlesi değil, mimarinin temeli.

Halüsinasyon konusunda da net olalım. Sıfırlanmıyor; mimariyle yönetiliyor. Kaynak atıflı yanıt ve [guardrail](/dokumanlar/sozluk/guardrail) filtreleri kapsam dışı soruları keser; kod tarafında build öncesi statik analiz zorunlu. Bunlar riski daraltır, garantiye çevirmez. Müşteri önüne çıkan bir bot, sıkı guardrail olmadan canlıya alınmaz; alındığında da insan desteğinin yerine değil önüne konur, insana devir senaryosu tasarımın parçasıdır. Üretilen kodda güvenlik açığı çıkabilir, asistan incelemenin yerini almaz.

[KVKK](/dokumanlar/sozluk/kvkk-yapay-zeka) tarafında ayrım önemli: teknik altyapı uyumlu kurulur — veriler kapalı devrede kalır, dışarı çıkmaz, erişim kaydı tutulur. Buna karşın hukuki değerlendirme, veri sorumlusu olarak kurumun sorumluluğundadır; biz altyapıyı uyumlu veririz, hukuki kararı veremeyiz.

Son bir ayrım, en sık karıştırılan: "model çalışıyor" gösterisi ile çalışan bir üretim sistemi aynı şey değil. Bir demo on dakikada etkiler; bir üretim sistemi erişim denetimini, izlemeyi ve veri izolasyonunu birlikte taşır — Türkçe doğrulaması ve guardrail de cabası. Bu yüzden kurulum fazlı ilerler: önce küçük bir ekipte, çekirdek ve seçili bir iki modülün pilotuyla değeri görürsünüz, sonra modül modül genişletirsiniz.

Tereddüdünüz "model yeterli mi" ise cevap büyük ölçüde verildi. "Benim kurumumda işe yarar mı" ise, o sorunun cevabı modelde değil, sizin senaryonuzda ve verinizde saklı. Onu da masada konuşmak gerekiyor: hangi süreç, hangi belge, hangi risk. [Mimari Ön-Analiz](/nasil-baslariz) tam olarak bu masa — kendi verinizle, kendi sorunuzla başlayıp neyin bugün, neyin yol haritasında olduğunu birlikte netleştirdiğimiz yer.

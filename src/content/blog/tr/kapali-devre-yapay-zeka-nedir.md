---
title: "Kapalı devre (on-premise) yapay zeka nedir?"
lang: "tr"
description: "Kapalı devre (on-premise) yapay zeka, modeli ve veriyi kurumun kendi sunucularında çalıştırır; veri dışarı çıkmaz. Tanımı, mimarisi ve sınırları."
pubDate: 2026-06-12
tags: ["on-premise", "kapali-devre", "veri-egemenligi", "mimari"]
---

Kapalı devre yapay zeka, modeli ve onu besleyen veriyi kurumun kendi altyapısında çalıştırır: kendi sunucularında ya da veri merkezinde. Çalışanların sorduğu sorular, yüklenen belgeler ve taranan kod kurum sınırının dışına çıkmaz. Herhangi bir dış buluta ya da üçüncü taraf servise veri gönderilmez. "Kapalı devre" adı tam da bunu anlatır: akım gibi düşünün, veri içeride döner ve halka dışarı açılmadan kapanır.

## Adın anlamı: halka neden kapanıyor?

Bulut tabanlı bir yapay zeka aracında her soru, sizin ağınızdan çıkıp sağlayıcının sunucusuna gider, orada işlenir ve cevap geri döner. Veri sürekli bir sınırı geçer; kapalı devrede o geçiş yok. Soru da cevap da aynı duvarların içinde işlenir.

Elektrikteki kapalı devre benzetmesi burada işe yarıyor. Açık devrede akım bir noktada dışarı kaçar; kapalı devrede halka tamamlanır ve enerji sistemin içinde dolaşır. Kurumsal yapay zekada "halkanın kapanması", verinin hiçbir adımda kurumun denetimi dışına çıkmamasıdır. Teknik olarak bu, [LLM](/dokumanlar/sozluk/llm) modelinin kurum sunucusunda barınması, kapalı bir ağda çalışması ve dış internete veri çıkışının kapalı ağ ve denetim kayıtlarıyla engellenmesiyle doğrulanır.

## Kapalı devre tam olarak neyi kapsar?

Kapalı devre kurulum tek bir parça değil, üst üste oturan birkaç katmandır. En altta model kurum sunucusunda çalışır; üstüne kapalı ağ ve şifreli (TLS) trafik biner. Sistem her erişimi kim, neye, ne zaman diye loglar. Hepsinin üzerinde tek bir ilke durur: verinin kurum sınırının dışına çıkışı kapalı ağ ve denetim kayıtlarıyla engellenir.

Modelin kurumu tanıması içinse ayrı bir katman gerekir. Çıplak bir model sizin sözleşmelerinizi ya da iç prosedürlerinizi bilmez; o yalnızca genel bir dil modelidir. Kurumun kendi bilgisinden cevap üretmesi için [RAG](/dokumanlar/sozluk/rag) devreye girer: model, soruya yanıt verirken kurumun belgelerini kaynak olarak kullanır ve oradan alıntılar. En katı senaryoda kurulum [air-gap](/dokumanlar/sozluk/air-gap) seviyesine çıkar, yani sistem dış ağdan fiziksel olarak tümüyle yalıtılır.

## Buluttan farkı, kısaca

İki yaklaşım dört eksende ayrışır: verinin konumu, çevrimdışı çalışabilme, mülkiyet ve uyum denetimi. Her birini gerçek senaryolar ve detaylı kıyas tablosuyla [on-premise AI vs bulut AI](/blog/on-premise-ai-vs-bulut) yazısında açtık. Burada tanımda kalalım.

## Ne zaman kapalı devre seçilir?

Bazı kurumlar için veri konumu bir tercih değil, çalışma şartıdır. Sağlık kuruluşunda hasta kaydı, finansta işlem geçmişi dış servise gidemez; savunma ve sanayide üretim sırrı için de durum aynı. Bu veriyi dışarı yollamak baştan masada değildir.

Mevzuat da çoğu zaman aynı yöne iter. Verinin yurt içinde ya da doğrudan kurum içinde kalmasını şart koşan düzenlemeler, kapalı devreyi öne çıkan seçenek yapar. [KVKK](/dokumanlar/sozluk/kvkk-yapay-zeka) açısından önemli bir ayrım var: kapalı devre kurulum teknik altyapıyı uyumlu hale getirir, ama bir kurulumun hukuken yeterli olup olmadığının değerlendirmesi veri sorumlusu kurumun sorumluluğundadır. Zemini altyapı hazırlar, hukuki güvenceyi kurum verir.

Bir de zaman ekseni var. Bulut aboneliği her ay yenilenen bir gider kalemidir; kapalı devre kurulum, kurumun kendi çatısı altında kalan bir varlıktır. Üç yıl sonra bulutta hâlâ fatura ödersiniz; kapalı devrede sunucu çoktan sizindir.

## Dürüst sınır: kapalı devre tek başına ne yapmaz?

Kapalı devre olmak bir modeli daha akıllı yapmaz. Veriyi içeride tutmak gizlilik ve egemenlik sorununu çözer, ama modelin zekâsına dokunmaz. "Kurumu bilen" bir asistan istiyorsanız bunu sağlayan şey kapalı devre değil, üstüne kurulan [RAG](/dokumanlar/sozluk/rag) katmanıdır. Bu ikisini ayırmadan beklenti kurmak, sonradan hayal kırıklığı üretir.

İkinci sınır donanımda. Modelin boyutu ve eşzamanlı kullanıcı sayısı, doğru donanım bandını belirler; bunu küçümseyen kurulum yavaşlar. Yanlış seçilmiş bir sunucu, doğru kurgulanmış bir mimariyi kullanılmaz hale getirebilir, bu yüzden donanım kararı baştan ve ciddiyetle verilir.

Üçüncüsü dürüstlük çizgisinin kendisi: hiçbir mimari modelin yanılmayacağını garanti etmez. Kapalı devre kurulumda da yanlış cevap olasılığı kaynak-atıf ve salt-okunur erişim gibi [güvenlik](/dokumanlar/platform/guvenlik) önlemleriyle yönetilir; denetim kayıtları da hatayı sonradan izlenebilir kılar. Yönetilir, sıfırlanmaz. Aradaki fark, hata olduğunda onu görebiliyor ve izini sürebiliyor olmanızdır.

## Nereden başlanır?

Kapalı devre bir kurulumun değeri, sizin verinizle ve sizin kısıtlarınızla buluştuğunda ortaya çıkar. Hangi veri içeride kalmak zorunda? Eldeki donanım hangi modeli kaldırır? RAG gerçekten gerekli mi? Cevap kuruma göre değişir. [Mimari Ön-Analiz](/nasil-baslariz) tam burada işe yarar; somut kurum durumunuza bakıp bugün neyin kurulabileceğini, neyin zamanla geleceğini ayırır. Tanım bu kadar. Sıra kendi devrenizin nerede kapanacağına bakmakta.

Terimlerin tam karşılığı için [kapalı devre / on-premise sözlük](/dokumanlar/sozluk/kapali-devre-on-premise) maddesine de bakabilirsiniz.

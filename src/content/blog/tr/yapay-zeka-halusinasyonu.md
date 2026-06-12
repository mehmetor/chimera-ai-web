---
title: "Yapay zeka halüsinasyonu nedir ve nasıl yönetilir?"
lang: "tr"
description: "Yapay zeka halüsinasyonu, modelin kendinden emin bir tonla yanlış ya da uydurma bilgi üretmesidir. Tanımı, KEP örneğiyle nedeni ve mimariyle nasıl yönetildiği."
pubDate: 2026-06-12
tags: ["halusinasyon", "rag", "guardrail", "dogruluk"]
---

Yapay zeka halüsinasyonu, bir dil modelinin kendinden emin bir tonla yanlış ya da tümüyle uydurma bilgi üretmesidir. Mesele modelin "yalan söylemesi" değil. Model, örüntünün güçlü olduğu yeri de zayıf olduğu yeri de aynı kararlı sesle doldurur, çünkü görevi cümleyi tamamlamaktır, gerçeği tartmak değil. Sorun da burada: yanlış cevap, doğru cevapla aynı kararlı sesle gelir.

## Model neden bilmediğini söylemez de uydurur?

Bir dil modeli, devasa metin yığınından "bir sonraki kelime ne olmalı" örüntüsünü öğrenir. Soruya cevap verirken bir gerçek veritabanına bakmaz; en olası kelime dizisini üretir. Bu yüzden cevabın doğru olması, modelin o konuyu gerçekten bilmesinden değil, doğru örüntünün yeterince güçlü olmasından gelir.

Konu modelin eğitim verisinde bolca geçtiyse örüntü sağlamdır, cevap genelde tutar. Niş bir kısaltma, kuruma özel bir prosedür ya da güncel bir veri söz konusu olduğunda örüntü zayıflar. Model yine de durmaz. Boşluğu istatistiksel olarak makul görünen, ama gerçekte yanlış bir cevapla doldurur. Örüntünün zayıf olduğu yerde durup işaret vermek yerine en akıcı tahmini gerçekmiş gibi sunar.

## KEP örneği: aynı model, aynı soru, iki farklı cevap

Bunu somut görmek için tek bir soruyu izleyelim: "KEP nedir?" Aynı modele iki farklı kurulumda soralım.

İlk kurulumda model tek başına çalışıyor, hiçbir kurum kaynağına bağlı değil. "KEP" kısaltması eğitim verisinde net bir karşılığa oturmadığı için model boşluğu tahminle doldurur ve "Kamu Görevlisi Elektronik Posta" gibi makul sesli, ama uydurma bir açılım üretir. Tonunda en ufak tereddüt yok. Cevap yanlıştır.

İkinci kurulumda aynı modelin önüne kurumun kendi dokümanı konur, yani [RAG](/dokumanlar/sozluk/rag) devrededir. Model cevap vermeden önce belgeden ilgili paragrafı getirir, "KEP = Kayıtlı Elektronik Posta" karşılığını oradan okur ve hangi belgeye dayandığını da söyler. Cevap doğrudur ve denetlenebilir.

| Kurulum | "KEP nedir?" yanıtı | Sonuç |
|---|---|---|
| Model tek başına (RAG yok) | KEP = Kamu Görevlisi Elektronik Posta | Yanlış — halüsinasyon |
| Model + RAG (kurum dokümanı) | KEP = Kayıtlı Elektronik Posta + kaynak referansı | Doğru |

Tablo tek bir şeyi gösteriyor. Model değişmedi, soru değişmedi, değişen tek şey mimariydi. Doğruluk modelin zekâsından değil, etrafına kurulan yapıdan geldi. "Daha akıllı model" arayışı çoğu zaman yanlış soru. Asıl soru, modelin neye bağlı olduğudur.

## Halüsinasyon mimariyle nasıl yönetilir?

Tek bir sihirli düğme yok; birbirini tamamlayan birkaç katman var. Her biri farklı bir hata tipini hedefler.

**RAG modeli kurum dokümanına bağlar.** Model ezberinden konuşmak yerine getirdiği belgeden alıntılar ve cevabı kaynakla işaretler. Uydurmak yerine okur. KEP örneğindeki farkı yaratan da budur; ayrıntısı için [RAG nedir](/blog/rag-nedir) yazısına bakın.

**Guardrail kapsam dışını kapatır.** Müşteriye açık bir botta her soru cevaplanmaz. Yasaklı ya da kapsam dışı konuda model serbestçe tahmin yürütmez, önceden tanımlı güvenli bir yanıt döner. Bu, M5 chatbot modülündeki [guardrail](/dokumanlar/sozluk/guardrail) filtresinin işidir; halüsinasyonun en görünür olduğu yer dışa açık botlardır, orada filtre olmadan sistem devreye alınmaz.

Salt-okunur erişim ise hatanın zarar vermesini engeller. Veriyle konuşan bir modülde model yanlış bir SQL üretse bile veritabanına yazamaz, çünkü bağlantı yazma yetkisi taşımaz. Yanlış komut en fazla yanlış bir tablo döndürür, kaydı bozmaz. Burada bir inceliği atlamamak gerekir: salt-okunur erişim veriyi korur, ama doğru görünen yanlış bir sonucu engellemez. Yanlış ama makul duran bir sayı yine de dönebilir; veriyi bozmasa da yanlış karara götürebilir. Yazma korumasını doğruluk garantisiyle karıştırmamak lazım. Bu yüzden kritik raporlarda devreye bir sonraki katman, insan doğrulaması girer.

İki katman daha bu üçünün üstüne biner. Denetim kayıtları, kim neyi ne zaman sordu ve sistem ne yanıtladı, hepsini tutar; bir hata fark edildiğinde olayın izini geriye doğru sürebilirsiniz. İnsan doğrulaması ise kritik kararları tasarıma sokar: finansal bir raporu ya da hukuki bir çıktıyı sistem üretir, kararı insan onaylar. Bu önlemlerin nasıl kurulduğunu [platform güvenliği](/dokumanlar/platform/guvenlik) ve [nasıl çalışır](/dokumanlar/platform/nasil-calisir) sayfalarında açtık.

## Dürüst sınır: hiçbir mimari halüsinasyonu tamamen bitirmez

Bunu net söylemek gerekiyor, çünkü piyasada tersini ima eden çok ses var. RAG modeli kaynağa bağlar, ama yanlış belgeyi getirebilir ya da doğru belgeyi yanlış yorumlayabilir. Guardrail kapsamı daraltır, her kenar durumu yakalamaz. Bunların hiçbiri modelin asla yanılmayacağını garanti etmez.

Bizim iddiamız da bu değil. Halüsinasyon yok demiyoruz, mimariyle yönetiyoruz diyoruz. Aradaki fark küçük değil. Yönetmek, hatayı bağladığı kaynakla görünür kılmak, kapsam dışını kapatmak, yanlışın zarar verebileceği yolları baştan kesmek ve olduğunda izini sürebilmek demektir. Yönetilir, sıfırlanmaz. Asıl kazanım, hata olduğunda onu fark edebiliyor ve nereden geldiğini bulabiliyor olmanızdır; kapalı bir kutuda sessizce yanlış üreten bir sistemde bu ikisi de elinizde değildir. [Açık kaynak bir LLM'in kuruma hazır olup olmadığı](/blog/acik-kaynak-llm-kuruma-hazir-mi) sorusu da büyük ölçüde bu yönetilebilirlik etrafında döner.

## Neden bu önce kapalı devrede anlamlı?

Halüsinasyonu yönetmek için hatayı görebilmeniz gerekir. Bunun için de cevabın hangi belgeye dayandığını, sorgunun ne döndürdüğünü ve sistemin ne yaptığını izleyebilmeniz şart. [Kapalı devre](/blog/kapali-devre-yapay-zeka-nedir) kurulum bu izlenebilirliği baştan verir: model, veri ve denetim kayıtları kurumun kendi sınırı içindedir, üçüncü tarafın kara kutusuna bağlı değildir. Kaynağı sizde olan bir cevabın doğruluğunu denetleyebilirsiniz; başkasının sunucusunda üretilen bir cevabın izini süremezsiniz.

Bu yüzden halüsinasyon yönetimi tek bir modülün özelliği değil, mimarinin tümünden çıkan bir sonuçtur. RAG bağlar, guardrail sınırlar, salt-okunur erişim korur, denetim kayıtları görünür kılar, insan kritik kararda durur. Beşi birlikte çalıştığında modelin yanılması felaket olmaktan çıkıp izlenebilir bir olaya dönüşür.

## Kurumunuz için ne anlama geliyor?

Sizin durumunuzda doğru cevap, hangi verinin sorulacağına ve hatanın nerede pahalıya patlayacağına göre değişir. Müşteriye açık bir bot mu kuruluyor, yoksa iç ekibin belge sorgusu mu? Birincisinde guardrail önde gelir, ikincisinde RAG'in belge kalitesi belirleyici olur. Bunu tahminle değil, somut senaryonuza bakarak ayırırız. [Mimari Ön-Analiz](/nasil-baslariz) tam burada işe yarar: hangi halüsinasyon önleminin sizin için zorunlu, hangisinin sonraki fazda yeterli olduğunu kurumunuzun gerçek kullanımına göre çıkarır.

Terimin tam karşılığı ve komşu kavramlar için [RAG sözlük maddesine](/dokumanlar/sozluk/rag) bakabilirsiniz. Doğruluğun modelden değil mimariden geldiğini bir kez gördükten sonra, asıl soru "hangi model" olmaktan çıkar, "modeli neye bağladık" olur.

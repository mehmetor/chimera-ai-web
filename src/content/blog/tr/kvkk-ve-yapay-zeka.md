---
title: "KVKK ve yapay zeka: veri nerede işleniyor?"
lang: "tr"
description: "6698 sayılı KVKK kişisel verinin işlenmesini düzenler; yapay zekada asıl soru verinin nerede ve kimin denetiminde işlendiğidir. Kapalı devre bunun teknik zeminini kurar."
pubDate: 2026-06-12
tags: ["kvkk", "veri-egemenligi", "on-premise", "hesap-verebilirlik"]
---

6698 sayılı KVKK, Türkiye'de kişisel verinin nasıl işleneceğini düzenler. İş yapay zekaya gelince kanunun tek bir sorusu var: veri nerede ve kimin denetiminde işleniyor? Bir çalışan müşteri sözleşmesini bir bulut asistanına yapıştırdığında o belge çoktan kurum sınırının dışına çıkmıştır. KVKK'nın dilinde bu sıradan bir kopyala-yapıştır değil, bir veri işleme faaliyetidir. Sorumluluğu da hâlâ kurumun üzerindedir.

## Asıl mesele "konum" mu, "denetim" mi?

İkisi birden. KVKK, kişisel veriyi işleyen kurumu "veri sorumlusu" sayar ve ona somut yükümlülükler yükler: işlemenin bir hukuki dayanağı olmalı, veri yalnızca toplandığı amaçla sınırlı kullanılmalı, gereğinden fazlası tutulmamalı, her erişim hesabı verilebilir olmalı. Bu yükümlülüklerin hepsi tek bir varsayıma dayanır. Kurum, verisine ne olduğunu biliyor ve gösterebiliyor.

Hazır bulut yapay zeka araçları bu varsayımı zorlar. Bir belgeyi modele gönderdiğinizde işleme nerede gerçekleşti, veri ne kadar saklandı, hangi alt yüklenici dokundu sorularının cevabı çoğu zaman sağlayıcının sözleşmesinde gömülüdür, sizin elinizde değil. Veri sorumlusu sizsiniz, ama denetim defteri başkasında. KVKK açısından gerilim tam burada başlar.

## Bulut AI nerede KVKK ile sürtüşür?

Hazır bir bulut aracına gönderilen sohbet, belge ya da müşteri kaydı çoğu zaman yurt dışındaki sağlayıcı sunucularında işlenir. Bu, üç ilkeyle aynı anda sürtüşür.

Birincisi yurt dışına aktarım. Verinin Türkiye dışındaki bir sunucuda işlenmesi, KVKK'nın aktarım rejimine girer ve kendine özgü koşullar ister. İkincisi açık rıza ve amaçla sınırlılık. Çalışanın bir müşteri verisini "denemek için" bir araca yapıştırması, o verinin toplandığı amaçla bağını koparabilir. Üçüncüsü hesap verebilirlik. Kurul bir denetimde "bu veri nerede, ne kadar süre, hangi amaçla işlendi" diye sorduğunda cevabın kurumun kendi kayıtlarında durması gerekir.

Bu gerilimlerin hiçbiri bulut aracını otomatik olarak hukuka aykırı kılmaz. Sözleşmeyle, rıza süreçleriyle, sağlayıcı taahhütleriyle yönetilebilirler, ama yönetilmesi gerekir ve yükü kurum taşır. [On-premise AI ile bulut AI karşılaştırmasını](/dokumanlar/blog/on-premise-ai-vs-bulut) ayrı bir yazıda açtık.

## Kapalı devre bu zemine ne katar?

Kapalı devre kurulumda model ve onu besleyen veri kurumun kendi altyapısında çalışır. Soru da cevap da aynı duvarların içinde işlenir. Bu, KVKK yükümlülüklerini hukuken karşılamaz, ama onları göstermeyi kolaylaştıran bir teknik zemin kurar. Ne demek istediğimizi tabloyla açalım.

| KVKK boyutu | Bulut AI gerilimi | Kapalı devre katkısı |
|---|---|---|
| Yurt dışına aktarım | Belge ve sohbet çoğu zaman yurt dışı sunucuda işlenir, aktarım rejimi devreye girer | Veri kurum sınırından çıkmadığı için yurt dışı aktarım fiilen gerçekleşmez; aktarımdan doğan yükümlülüklerin uygulanıp uygulanmadığını ise kurum kendi durumuna göre değerlendirir |
| Açık rıza / amaçla sınırlılık | Veri üçüncü tarafa gidince toplandığı amaçla bağı izlenemez olur | İşleme kurum içinde kaldığından kullanım amacı kurumun kendi politikasıyla sınırlanır |
| Veri minimizasyonu | Sağlayıcının ne sakladığı, ne kadar tuttuğu çoğu zaman kurumun görüş alanı dışında | İşleme kurum denetiminde olduğu için neyin tutulup tutulmadığı doğru kurulduğunda gösterilebilir |
| Hesap verebilirlik & loglama | Denetim kayıtları sağlayıcıdadır; kurum kendi defterini tam tutamayabilir | Loglama kurumun kendi sistemine kurulur, her erişim kim-neye-ne zaman olarak kayıt altına alınacak şekilde kurulabilir |
| Erişim denetimi | Yetkilendirme sağlayıcının modeline bağımlıdır | Erişim politikaları kurumun kendi kurallarına göre tanımlanır, en katı senaryoda [air-gap](/dokumanlar/sozluk/air-gap) ile dış ağdan tümüyle yalıtılır |

Tablonun anlattığı tek şey var. Veri içeride kalınca, veri sorumlusunun göstermesi gereken her şey kurumun kendi elindedir. Defteri başkası değil, kurumun kendisi tutar.

## Loglama ve erişim defteri neden bu kadar önemli?

KVKK'da hesap verebilirlik soyut bir ilke değil, bir kanıt yükümlülüğüdür. Kurul kapıyı çaldığında "biz dikkatliyiz" demek yetmez, gösterebilmek gerekir. Kapalı devrede her sorgu, her belge erişimi kurumun kendi loglarına düşer. Bir kişisel veri talebi geldiğinde "bu verinin hangi işlemlerde geçtiğini" kurum kendi kayıtlarından çıkarabilir.

Bu katmanı yüzeysel kurmak işe yaramaz. Kaynak-atıf, salt-okunur erişim ve denetim kayıtları bir bütün olarak çalışır; [platform güvenlik](/dokumanlar/platform/guvenlik) tarafında bunları ayrıntılandırdık. Mimari kararlarının nasıl alındığını ise [kapalı devre yapay zeka nedir](/dokumanlar/blog/kapali-devre-yapay-zeka-nedir) yazısı tanım düzeyinde anlatır. Bir de şu var: hesap verebilirlik sadece güvenlik için değil, modelin yanlış cevap verdiği anı sonradan izleyebilmek için de gerekir. Bu konuyu [yapay zeka halüsinasyonu](/dokumanlar/blog/yapay-zeka-halusinasyonu) yazısında ayrıca ele aldık.

## Dürüst sınır: kapalı devre tek başına neyi yapmaz?

Kapalı devre olmak bir kurulumu KVKK uyumlu yapmaz. Bu cümleyi olduğu gibi okuyun. Kapalı devre yalnızca teknik altyapıyı uyuma elverişli kılar; bir kurulumun hukuken yeterli olup olmadığının değerlendirmesi veri sorumlusu kurumun sorumluluğundadır. Zemini altyapı hazırlar, hukuki güvenceyi kurum verir.

Bunun pratik anlamı şu. Veriyi içeride tutmak, aydınlatma metninizi yazmaz, rıza süreçlerinizi kurmaz, veri envanterinizi çıkarmaz, saklama sürelerinizi belirlemez. Bunların hepsi kurumun hukuk ve uyum işidir; teknik mimari sadece bu işin zeminini sağlamlaştırır. Air-gap bir sunucu bile yanlış yapılandırılmış bir erişim politikasıyla veri sızdırabilir. Altyapı gereklidir, ama yeterli değildir.

Bir uyarı daha. Bu yazı bilgilendirme amaçlıdır, hukuki görüş değildir. Kurumunuza özgü bir uyum değerlendirmesi için kendi hukuk biriminize danışın. Biz "KVKK uyumludur" ya da "uyum garantisi" demiyoruz, çünkü bunu söyleyebilecek tek merci kurumun kendi sorumluluğudur.

## Nereden başlanır?

KVKK ile yapay zekanın kesişimi soyutta çözülmez. Hangi veri kişisel veri sayılıyor, hangisi kurum dışına hiç çıkmamalı, hangi işleme amaçla sınırlı kalmalı, loglar nasıl tutulmalı. Bunların cevabı her kurumda farklıdır. [Mimari Ön-Analiz](/nasil-baslariz) tam burada işe yarar: somut kurum durumunuza bakıp hangi verinin içeride kalması gerektiğini, hangi mimarinin bu kısıtları teknik olarak karşıladığını ayırır. Kararı hukuk biriminizle birlikte verirsiniz, biz zemini kurarız.

Terimlerin tam karşılığı için [KVKK ve yapay zeka sözlük](/dokumanlar/sozluk/kvkk-yapay-zeka) maddesine ve [kapalı devre / on-premise](/dokumanlar/sozluk/kapali-devre-on-premise) tanımına bakabilirsiniz.

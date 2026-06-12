---
title: "Self-hosted DevOps nedir? Kurum içi yazılım üretim hattı (Git, CI/CD)"
lang: "tr"
description: "Self-hosted DevOps, yazılım üretim hattının tamamını (Git, CI/CD, test, dağıtım) kurumun kendi binasında çalıştırır; kaynak kod hiçbir buluta çıkmaz. Tanımı, kıyası ve sınırları."
pubDate: 2026-06-12
tags: ["devops", "self-hosted", "kaynak-kodu", "veri-egemenligi"]
---

Bulut tabanlı bir git/DevOps servisinde (örneğin bulut GitHub ya da GitLab) kaynak kodunuz, CI/CD sırlarınız ve build çıktılarınız sağlayıcının sunucusunda durur. Self-hosted DevOps bu üretim hattının tamamını kurumun kendi binasına alır: Git deposu, sürekli entegrasyon, otomatik test, dağıtım ve sürüm süreçleri sizin sunucunuzda döner, kaynak kod hiçbir bulut servisine çıkmaz. Üretim hattı sizin binanızda.

## "Self-hosted" tam olarak neyi içeri alıyor?

Yazılım üreten bir ekibin günlük akışı tek bir araçtan ibaret değil. Geliştirici kodu bir Git sunucusuna gönderir, bir CI/CD süreci o kodu derler ve testten geçirir, çıkan build artefaktı bir kayıt deposunda (registry) saklanır, oradan bir ortama dağıtılır. SaaS modelinde bu zincirin her halkası sağlayıcının altyapısında çalışır. Self-hosted modelde aynı zincir kurumun kendi sunucularına kurulur.

Pratikte bu, kendi sunucunuzda bir Git sunucusu (açık kaynak Gitea ya da GitLab CE gibi), CI/CD koşucuları (runner), bir artefakt/registry deposu, otomatik test altyapısı ve bir Kanban panosu demektir. Hangi araç zincirinin kurulacağı kuruma göre belirlenir; ekibin mevcut alışkanlığı, dil/platform yelpazesi ve ölçeği bu seçimi yönlendirir. Chimera AI DevOps bu hattı kategori düzeyinde kurar, eğitim ve dokümantasyonla teslim eder. Hattın detayını [DevOps modülü sayfasında](/devops) bulabilirsiniz.

## Neden kurum içine alınır? Asıl mesele kaynak kodun konumu

Kaynak kod çoğu yazılım kurumunun en değerli varlığıdır; ticari sırrı ve iş mantığını orada tutar, yılların birikimi orada durur. Bulut bir DevOps servisinde bu kod, CI/CD sürecinde kullanılan veritabanı parolaları ve API anahtarlarıyla birlikte sağlayıcının sisteminde tutulur. Çoğu durumda bu yeterince güvenlidir, ama bazı kurumlar için kodun nerede durduğu bir tercih değil, çalışma şartıdır.

Savunma, kamu ve regüle sektörlerde üretim sırrı kurum sınırının dışına çıkamaz. Bir mevzuat ya da sözleşme, kaynak kodun yurt içinde veya doğrudan kurum içinde kalmasını şart koşabilir. Böyle bir kısıtta bulut DevOps baştan masada değildir; üretim hattını içeri almak tek yoldur. Hangi mevzuatın ne gerektirdiği kuruma ve sözleşmeye özgüdür; self-hosted teknik zemini hazırlar, hukuki yeterlilik değerlendirmesi kurumun hukuk biriminin işidir. Bu yazı bilgilendirme amaçlıdır, hukuki görüş değildir. Bu mantık, veriyi içeride tutan [kapalı devre yapay zeka](/dokumanlar/blog/kapali-devre-yapay-zeka-nedir) yaklaşımının kod tarafındaki karşılığıdır.

## Bulut DevOps ile self-hosted DevOps farkı

İki yaklaşım, üretim hattının her halkasında kontrolün kimde olduğu üzerinden ayrışır.

| Boyut | Bulut DevOps (SaaS) | Self-hosted DevOps |
|---|---|---|
| Kaynak kodun konumu | Sağlayıcının sunucusunda | Kurumun kendi sunucusunda |
| CI/CD sırları (secret) | Sağlayıcının sır deposunda | Kurumun denetimindeki sır deposunda |
| Build artefaktları | Sağlayıcı altyapısında barınır | Kurum içi registry'de barınır |
| Erişim denetimi | Sağlayıcının kimlik sistemine bağlı | Kurumun dizini ve politikalarına bağlı |
| Çevrimdışı çalışabilme | İnternet kesilince hat durur | Kapalı ağda çalışmaya devam eder |
| Sağlayıcı bağımlılığı / kilit | Fiyat ve kapsam sağlayıcıda; göç maliyetli | Hat kurumun mülkü; sağlayıcı kilidi yok |

Tabloyu tek cümleye indirmek mümkün. Bulutta üretim hattınızın koşulları başkasının elindedir, self-hosted'da hattın tamamı sizin denetiminizde döner. Aynı kıyasın yapay zeka tarafını [on-premise AI vs bulut](/dokumanlar/blog/on-premise-ai-vs-bulut) yazısında açtık.

## Sahadan iki örnek

İki konfigürasyon bu modelin nasıl şekil aldığını gösteriyor. Çok-platformlu bir üretici, dört ayrı projeyi (web, masaüstü, mobil, gömülü) tek bir kurum içi hatta topladı; her platform aynı Git deposundan beslenip kendi CI/CD akışında derleniyor. Farklı hedefler, tek üretim hattı.

Başka bir ekip eski bir TFS kurulumundan göç etti ve aynı geçişte sıfırdan otomatik test altyapısı kurdu. Burada kazanç sadece aracın değişmesi değil; daha önce elle yapılan derleme ve test adımları hatta gömülünce, değişiklikler otomatik derlenip test edilir hale geldi. İki örnekte de araç seçimi kurumun kendi koşullarına göre yapıldı, kilitli bir reçete uygulanmadı.

## Kapsam sınırı: bu hat kod yazmaz

Burada bir ayrımı net koymak gerekir. Self-hosted DevOps üretim hattının altyapısını kurar: kodun nerede durduğunu, nasıl derlendiğini, nasıl test edilip dağıtıldığını yönetir. Uygulamanın kendisini geliştirmek, yani kodu yazmak bu hattın işi değildir. O iş, ürünleştirilmiş geliştirme sürecini yürüten App hattının alanıdır. DevOps hattı boruları döşer; borudan akacak ürünü App hattı üretir.

Bu ayrım bir eksiklik değil, bir sınır çizgisidir. Hattı kuran ekiple ürünü geliştiren ekibin işini karıştırmamak, beklentiyi baştan doğru kurar.

## Dürüst sınır: self-hosted otomatik güvenlik vermez

Üretim hattını içeri almak, kaynak kodu sağlayıcının sunucusundan çıkarır, ama güvenliği kendiliğinden getirmez. Bulutta yama, yedekleme ve erişim yönetimi sağlayıcının işiydi; self-hosted'da bu sorumluluk kuruma geçer. Git sunucusunun güncel tutulması, build sunucularının yedeklenmesi, kimin neye erişeceğinin tanımlanması artık kurumun masasındadır.

Değişen güvenlik seviyesi değil, sorumluluğun yeri. Kötü yönetilen bir kurum içi hat, iyi yönetilen bir bulut servisinden daha kırılgandır. Bu yüzden teslim yalnızca kurulumla bitmez; hattın nasıl yamalanacağı, yedekleneceği ve erişimle yönetileceği eğitim ve dokümantasyonla devredilir. Erişim denetimi ve denetim kayıtları tarafında [platform güvenliği](/dokumanlar/platform/guvenlik) ilkeleri aynı mantığı paylaşır. Sorumluluk yer değiştirir, kaybolmaz.

## Hat ve asistan birlikte: uçtan uca kurum içi geliştirme

Self-hosted üretim hattı tek başına yarım resimdir. Hattı kuran altyapı, kodun güvenli aktığı boruları döşer; geliştiricinin editöründe kod tamamlayan ve açıklayan tarafı ise [kapalı ağda çalışan kod asistanı](/dokumanlar/blog/kapali-agda-kod-asistani-copilot-alternatifi) tamamlar. Bu, platformun M2 Güvenli Kod Asistanı modülüdür: kod editöründe, kapalı ağda öneri üretir, kod binadan çıkmaz.

İkisi birleşince tablo bütünlenir. Self-hosted hat kaynak kodu içeride tutar, kapalı ağ kod asistanı geliştirmeyi içeride hızlandırır. Hem üretim hattı hem yardımcı zeka aynı duvarların içinde kalır; uçtan uca kurum içi bir geliştirme ortamı çıkar.

## Nereden başlanır?

Hangi araç zincirinin kurulacağı, hangi süreçlerin önce otomatikleşeceği ve mevcut hattan göçün nasıl yapılacağı kuruma göre değişir. Eldeki sunucu kapasitesi, ekibin platform yelpazesi ve regülasyon kısıtları bu kararları yönlendirir. [Mimari Ön-Analiz](/nasil-baslariz) tam burada işe yarar: altyapınıza ve kısıtlarınıza bakıp bugün neyin kurulabileceğini, hangi adımların fazlı ilerleyeceğini ayırır. Kendi hattınızı kurmaya geçmeden önce, mevcut akışınızın nerede durduğuna bakmakla başlar iş.

Yapay zeka ve kod tarafındaki terimler için [kapalı devre / on-premise sözlük](/dokumanlar/sozluk/kapali-devre-on-premise) maddesine, modüllerin tamamı için [platform modül kataloğuna](/dokumanlar/platform/moduller) bakabilirsiniz.

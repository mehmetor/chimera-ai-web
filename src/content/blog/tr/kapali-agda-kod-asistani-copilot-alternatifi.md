---
title: "Kapalı ağda kod asistanı: Copilot’a güvenli alternatif"
lang: "tr"
description: "Kodu dış buluta gönderemeyen ekipler için on-premise kod asistanı: Copilot/Cursor yerine editöre kapalı ağda entegre çalışan güvenli alternatif."
pubDate: 2026-06-12
tags: ["kod-asistani", "copilot-alternatifi", "on-premise", "guvenlik"]
---

"Copilot kullanmak istiyoruz ama güvenlik izin vermiyor." Bu cümleyi kuran ekibin sorunu Copilot değil, Copilot'un kodu nereye gönderdiği. Çözüm, kod asistanından vazgeçmek değil; aynı işi yapan bir asistanı [kapalı ağda](/dokumanlar/sozluk/kapali-devre-on-premise) çalıştırmak. Editörünüze (VS Code ya da JetBrains) yerel bir sunucuya bağlı bir eklenti kurulur; tamamlama, açıklama, refactor ve test üretimi kodunuz bina dışına çıkmadan yapılır.

## Copilot'un takıldığı yer

Copilot ve Cursor bulut servisi. Siz yazarken yalnız o anki satırı değil, çevresindeki bağlamı (açık dosyalar, ilgili fonksiyonlar, bazen depo parçaları) modelin sunucusuna yollarlar. Çoğu ekip bunu fark etmez. Savunma ya da finans tarafında ise sözleşme açıktır; kaynak kod kurumun ağından çıkamaz. Aynı yasak, bağlam için de geçerli. Asistanın işe yaraması için kodu görmesi gerekir, görmesi için de dışarı yollaması. Bu yüzden bulut asistanı baştan elenir.

Buna iki yanlış tepki veriliyor: asistanı tümden rafa kaldırıp ekibi yalnız bırakmak ya da "nasılsa kimse bakmaz" deyip politikayı esnetmek. İkisine de gerek yok; modelin sunucusu başka birinin veri merkezinde olmak zorunda değil.

## Asistanı içeri almak

Çözüm yön değiştirmek: bağlamı dışarıdaki modele yollamak yerine modeli kendi sunucunuza koyuyorsunuz. [Güvenli Kod Asistanı](/dokumanlar/platform/moduller) modülü tam bunu kurar.

Editör tarafında açık kaynak bir eklenti (Continue.dev ya da Tabby) buluta değil, binadaki yerel sunucuya bağlanır. Ana teslim VS Code üzerinden; JetBrains ailesi destekli. Sunucuda bir kod [modeli](/dokumanlar/sozluk/llm) döner; eklenti istemleri buraya yollar. Kurulumda kod tabanını tarayıp asistanın bağlamına bağlarız; bu sırada anahtar, şifre gibi sırları ayıklarız, modele geçmezler. Geliştirici editöründe Copilot'takine benzer bir tamamlama ve refactor akışı görür; kalite seçilen modele ve donanıma göre değişir.

"Bitti" demek için ölçü net: asistan VS Code'da kapalı ağda çalışıyor ve kod bina dışına çıkmıyor. Ekip tamamlamayı kendi deposunda görüyor, herkes eklentiyi kendi makinesinde kullanıyor.

## Hangi model, hangi makine

Kod senaryosunda açık ağırlıklı modeller olgunlaştı. Repo seviyesi bağlamda — modelin açık dosyayı değil deponun yapısını gördüğü işlerde — Qwen3-Coder ailesi önde (büyük dağıtımda 480B-A35B, mütevazı donanımda Flash-30B-A3B). DeepSeek-Coder-V2 yakın ikinci. Codestral 22B'yi kurumsal ortamda öngörülebilirliği için tercih edenler var. Türkçe yorum ve değişken adlandırma tarafında bu modellerin kod uygunluğu 10 üzerinden 8,5 bandında; ölçümün tamamı [Haziran 2026 raporu](/dokumanlar/rapor/2026-06) içinde, dil tarafının ayrıntısı için [Türkçe için en iyi açık kaynak LLM](/blog/turkce-icin-en-iyi-acik-kaynak-llm) yazısına bakabilirsiniz.

Flash sınıfı bir model 24 GB tek kartta (RTX 4090) ya da 32 GB birleşik bellekli Mac mini M4 Pro üzerinde döner; ekibin paylaştığı ortak bir yerel sunucuya kurulur. Modeli sıfırdan eğitmek gerekmez; hazır ağırlık kendi ağınızda çalıştırılır.

## Asistan review'ın yerine geçmez

Burada markanın dürüstlük çizgisini açık koymak gerekiyor. Yerel asistan kodunuzu güvende tutar, ama ürettiği kodun her zaman güvenli olduğunu söylemez. Üretilen parçada, örneğin SQL enjeksiyonuna açık bir sorgu ya da eksik girdi doğrulaması çıkabilir; bu risk bulut asistanında da var, kapalı ağda da. Bu yüzden asistan, derleme öncesi statik analizin ([güvenlik](/dokumanlar/platform/guvenlik) tarafının) yerini almaz, onunla birlikte çalışır. Üretilen kod insan gözden geçirmesinden (code review) geçmeden ana dala girmemeli. Asistan kıdemli bir geliştiricinin hızını artırır, yargısını taşımaz.

İkinci sınır araç tarafında: Visual Studio (.NET) entegrasyonu eklenti ekosisteminin durumuna bağlı, fizibilite çalışmasıyla netleşir, baştan garanti edilmez. VS Code ve JetBrains tarafı ise bugün sağlam çalışıyor.

## Nereden başlanır

Bu kurulumun zor kısmı eklentiyi yüklemek değil, doğru modeli doğru donanımla eşleştirmek ve kod tabanını sırları sızdırmadan asistanın bağlamına bağlamak. Hangi model sizin dil ve repo profilinizde en tutarlı sonucu veriyor, eldeki kartta hangi sıkıştırmayla döner? Bunu tahminle değil ölçerek buluruz. [Mimari Ön-Analiz](/nasil-baslariz) tam bu eşleştirmeyi yapar: ekibin editörünü, kod hacmini ve güvenlik kısıtını ölçüp asistanın kapalı ağda nasıl kurulacağını çıkarır. Aynı asistan, kodunuzun çıkmadığı bir adreste çalışıyor; Mimari Ön-Analiz o adresi sizin donanımınıza göre kurar.

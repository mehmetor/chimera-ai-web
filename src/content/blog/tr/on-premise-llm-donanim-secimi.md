---
title: "On-premise LLM için donanım nasıl seçilir?"
lang: "tr"
description: "On-prem LLM donanımını model boyutu değil eşzamanlı kullanıcı sayısı belirler. Birleşik bellek mi NVIDIA VRAM mı, hangi bant size uyar?"
pubDate: 2026-06-12
tags: ["donanim","on-premise","gpu","moe","llm"]
---

Kendi sunucunuzda [LLM](/dokumanlar/sozluk/llm) çalıştıracaksanız ilk soru "hangi modeli?" değil. Asıl belirleyici, o modeli **aynı anda kaç kişinin** kullanacağı ve hangi senaryoda. Tek kişilik bir kod asistanı ile yirmi-otuz kişinin gün boyu sorgu attığı kurum içi destek hattı, aynı modeli çalıştırsa bile bambaşka donanım ister. Eşzamanlılık (concurrency) bütçeyi de mimariyi de model boyutundan daha çok belirler.

Bunu netleştirince donanım iki aileye ayrılıyor.

## İki yol: birleşik bellek mi, ayrılmış VRAM mı?

**Birleşik bellek** tarafında işlemci ve grafik birimi aynı RAM havuzunu paylaşır: Apple Silicon (Mac mini/Studio), NVIDIA DGX Spark, AMD Strix Halo. Tek cihaz, sessiz çalışır; fan uğultusu ve ayrı kasa yok. Mac Studio'yu prize ve ağa takıp çalıştırırsınız; kapalı ağ kurulumu için ekstra bir adım gerekmez. Karşılığında bir tavan var: birleşik RAM'in en fazla %50-60'ını çıkarıma ayırabilirsiniz, gerisini sistem tutar. 128 GB'lık bir cihazda model bütçeniz pratikte 64 GB'tan biraz fazlası, %60'a kadar. Küçük ekip ve yerel [RAG](/dokumanlar/sozluk/rag) için yeterli, kalabalık için değil.

**Ayrılmış VRAM** tarafı NVIDIA GPU dünyası. Kartın kendi belleği yüksek bant genişliğiyle çekirdeklere bağlıdır; bir veri merkezi kartı ~3 TB/s sunarken bir mini PC'nin paylaşımlı RAM'i ~256 GB/s'de kalır. Yüksek eşzamanlılıklı üretim buraya kurulur; vLLM, SGLang gibi yığınlar onlarca kullanıcıyı tek modelden besler. Daha pahalı ve gürültülü, ama kalabalığı o taşır.

## MoE neden mini PC'de fark yaratır?

Mini PC'lerin zayıf yanı bellek bant genişliği: ~256-273 GB/s, veri merkezi GPU'larının ~3 TB/s'sinin yanında dar. Burada [MoE](/dokumanlar/sozluk/moe) mimarisi devreye giriyor. Karışım-uzmanlar modeli her sorguda parametrelerinin yalnızca küçük bir bölümünü ateşler. Qwen 3 30B-A3B, üreticinin bildirdiğine göre toplam ~30 milyar parametrenin sorgu başına yalnızca ~3 milyarını aktive eder. Bu, dar bant genişliğinden daha az veri çekmek demek. Sonuç: aynı mini PC'de yoğun (dense) bir modele kıyasla yaklaşık üç kat hız. Birleşik bellekli bir cihaz alıyorsanız MoE bir model seçmek, aynı donanımdan dense modele kıyasla belirgin biçimde daha fazla verim çıkarır.

## Eşzamanlılığa göre donanım eşleştirmesi

Aşağıdaki tablo aynı MoE modeli Q4'te farklı donanımlarda çalıştırınca ne beklemeniz gerektiğini gösterir. Rakamlar tek-istek/orta bağlamda, belirli çıkarım yığınlarıyla gözlemlenen sınıf düzeyi değerlerdir; kurulumunuza göre değişir.

| Donanım | Bellek | Hız (yaklaşık) | Eşzamanlı kullanıcı (tipik aralık) | Tipik senaryo |
|---|---|---|---|---|
| Mac Studio M4 Max | 128 GB birleşik | ~35 t/s | 3-5 | Küçük ekip, yerel RAG |
| DGX Spark | 128 GB birleşik | ~30 t/s | 6-8 | Sürekli batch (vLLM/SGLang) |
| RTX 5090 | 32 GB VRAM | ~48 t/s | 8-10 | Kod asistanı, sohbet botu |
| H100 | 80 GB VRAM | ~85 t/s | 25-30 | Kurum geneli merkezi sunucu |

VRAM bantları büyüdükçe sığdırabildiğiniz model de büyür. 24 GB sınıfı kart (örneğin RTX 3090/4090) orta boy bir MoE modeli Q4'te kaldırır. 32 GB (RTX 5090) Blackwell'in yerel FP4/FP8 hızlandırmasıyla aynı modeli FP8'de yerel hızda sürer. 48 GB (L40S, RTX 6000 Ada) modeli FP16'da ya da daha büyük bir MoE'yi Q4'te taşır. 80 GB (H100/A100/H200) büyük bir MoE'yi FP8'de veya 235B sınıfı bir modeli Q4'te tek GPU'da çalıştırır. İki ya da daha fazla 80 GB kartı Tensor Parallelism ile (TP=2) birleştirince en üst sınıf modeli kurum geneline açarsınız.

## 128 GB birleşik bellekte üç seçenek

Aynı 128 GB sınıfında üç cihaz, üç farklı dünya. Mac Studio M4 Max ARM/Metal üstünde çalışır, prefill ~120 t/s, tak-çalıştır; kapalı ağa kurması bu üçlü içinde en az sürtünmeli yoldur. DGX Spark ARM/CUDA-TensorRT üstünde durur, prefill FP8'de ~350 t/s'ye çıkar, DGX OS hazır gelir ve veri merkezi yazılım yığınınızla uyumludur. AMD Strix Halo x86 tarafında; prefill ~85 t/s, en kararlı arka uç Vulkan, ROCm'i derlemek ise hatırı sayılır mühendislik eforu ister. CUDA/TensorRT şartınız varsa ama veri merkezi kurmak istemiyorsanız DGX Spark ortayı tutar.

## Dürüst sınırlar

Üç şey sonradan canınızı yakar; baştan söyleyelim.

İlk sınır [quantization](/dokumanlar/sozluk/quantization)'da. Pratik taban Q4_K_M. Daha agresif sıkıştırmada, özellikle küçük modellerde, Türkçe diakritiklerde (ç, ğ, ş, ı) bozulma gözlemlenebilir; tasarruf edeyim derken çıktının dil kalitesinden olabilirsiniz.

İkincisi kümeleme. Mac cihazlarını yerel ağda kümeleyip tek büyük makine gibi kullanmak cazip görünür, ama gecikme ve bakım yükü bunu önermeye değmez. Buna karşın iki DGX Spark'ı ConnectX-7 ile birleştirince 256 GB'a çıkar ve uygun quantization'da 405B sınıfı bir modeli belleğe sığdırabilirsiniz; bu birleştirme tasarımdan gelen bir yol. Yine de sığması ayrı, hedef gecikmenizde kullanılabilir olması ayrı sorudur.

Üçüncüsü, NVIDIA dışındaki seçenekler. AMD Instinct (MI300X/MI325X, 192-256 GB) bellek kapasitesi açısından çok kullanıcılı senaryoda NVIDIA dışı en güçlü seçeneklerden biri; ekosistem ve yazılım olgunluğu hâlâ NVIDIA'nın gerisinde. Intel Gaudi 3 henüz tak-çalıştır değil; kapalı ağda ayağa kaldırmak yüksek mühendislik eforu ister, bu yüzden şimdilik beklemekte fayda var.

Bütçe kısıtlıysa demo ve ilk aşama için ikinci el ya da yenilenmiş 24 GB sınıfı kartlar (örneğin RTX 3090) düşük maliyetli bir giriş. Gerçek üretime geçince denklem değişir. Yoğun prompt işleme ve yüksek eşzamanlı trafikte, yerel FP4/FP8 hızlandırmalı 32 GB sınıfı bir kart üretim trafiğinde daha sağlam bir throughput temeli sunar; yeni nesil FP4/FP8 format desteği sayesinde bir kuşak daha geçerli kalma şansı da yüksektir.

Tek bir "doğru donanım" yok. Doğru olan, sizin senaryonuza ve eşzamanlı kullanıcı sayınıza oturanı. Tablodaki bantlar yön verir, kararı vermez. Hangi modeli kaç kullanıcıya, hangi gecikme hedefiyle, ne kadar gizlilik kısıtıyla sunacağınız netleşmeden kart seçmek, çoğu kurumun ya fazla ya eksik alıp sonradan değiştirdiği yer. Biz bu kararı [Mimari Ön-Analiz](/nasil-baslariz)'de kurumun gerçek yüküyle birlikte çıkarıyoruz: eşzamanlılık profili, senaryo ve [kapalı devre / on-premise](/dokumanlar/sozluk/kapali-devre-on-premise) gereksinimleri masaya konunca tablo tek bir satıra iniyor. Donanım sınıflarının ve model bantlarının tam dökümü için [Haziran 2026 raporu](/dokumanlar/rapor/2026-06)'na, neyin hangi [Platform modülleri](/dokumanlar/platform/moduller) ile çalıştığına ve sık sorulan [donanım gereksinimi](/dokumanlar/sss) sorularına bakabilirsiniz.

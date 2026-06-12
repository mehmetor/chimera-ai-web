---
term: "Quantization (sıkıştırma)"
lang: "tr"
aliases: ["niceleme", "model sıkıştırma", "Q4", "FP8", "quantization nedir"]
summary: "Modelin bellek ihtiyacını %50-75 azaltan sıkıştırma tekniği; pratik kalite kaybı genelde ihmal edilebilir."
updated: 2026-06-12
seeAlso: ["llm", "moe"]
---

**Quantization (niceleme / sıkıştırma)**, bir modelin ağırlıklarını daha az bit kullanarak
saklama tekniğidir (ör. Q4, FP8). Bellek ihtiyacını **%50–75** azaltır; bu sayede aksi halde
sığmayacak büyük modeller, daha mütevazı donanımda çalıştırılabilir. Çoğu görevde pratik kalite
kaybı ihmal edilebilir düzeydedir.

**Türkçe uyarısı:** aşırı sıkıştırmada (Q4 altına inilince) Türkçe diakritik karakterler
("ş, ç, ğ, ü, ö, ı") bozulabilir ve kelime anlamı değişebilir. Bu yüzden kurumsal Türkçe
kurulumlarda **Q4_K_M altına inilmez**; sıkıştırma seviyesi kuruluma özel test edilir.

Quantization, [MoE](/kaynaklar/sozluk/moe) mimarisiyle birlikte, [açık kaynak modelleri](/kaynaklar/sozluk/llm)
kapalı devre donanımına sığdırmanın iki temel kaldıracından biridir.

---
term: "Air-gap (hava boşluğu)"
lang: "tr"
aliases: ["air gap", "hava aralığı", "ağ yalıtımı", "fiziksel yalıtım"]
summary: "Bir sistemin internet ve dış ağlardan fiziksel olarak tümüyle yalıtılması; veri yalnızca denetimli yollarla taşınır."
updated: 2026-06-12
seeAlso: ["kapali-devre-on-premise", "kvkk-yapay-zeka"]
---

**Air-gap (hava boşluğu)**, bir bilgisayar sisteminin internet ve diğer güvensiz ağlardan
**fiziksel olarak** (ve buna eşlik eden mantıksal denetimlerle) tümüyle ayrılmasıdır.
Sistemle dış dünya arasında doğrudan ağ bağlantısı yoktur; veri yalnızca denetimli ve kayıt
altına alınan yollarla (örn. onaylı aktarım süreçleri) taşınır.

## Yapay zeka bağlamında

En yüksek gizlilik gerektiren senaryolarda, [kapalı devre](/kaynaklar/sozluk/kapali-devre-on-premise)
bir AI kurulumu air-gap'li bir ağda çalıştırılabilir: model, belgeler ve kullanıcı
etkileşimleri dış ağa hiç ulaşmaz. Bu, savunma, kritik altyapı ve hassas Ar-Ge gibi
alanlarda tercih edilir.

## Dengeler

- **Avantaj:** dışarıdan saldırı ve veri sızıntısı yüzeyi en aza iner.
- **Bedel:** güncelleme ve model/veri aktarımı denetimli süreç gerektirir; operasyonel
  disiplin şarttır.

Air-gap bir "her şey ya da hiç" değildir; çoğu kurum için tam yalıtım yerine sıkı ağ
sınırlandırması ([kapalı devre](/kaynaklar/sozluk/kapali-devre-on-premise)) yeterli olur.

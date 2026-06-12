---
term: "MoE (Mixture of Experts)"
lang: "tr"
aliases: ["mixture of experts", "uzman karışımı", "moe nedir", "seyrek model"]
summary: "Modelin her soruda tüm parametrelerini değil yalnızca ilgili 'uzman' parçalarını çalıştırması; az donanımla yüksek hız."
updated: 2026-06-12
seeAlso: ["llm", "quantization"]
---

**MoE (Mixture of Experts — uzman karışımı)**, büyük bir dil modelinin her soruda tüm
parametrelerini değil, yalnızca o soruya ilgili "uzman" alt-parçalarını çalıştırması ilkesidir.
Böylece model çok büyük (yüksek toplam parametre) olabilir ama her sorguda yalnızca küçük bir
kısmı (düşük **aktif parametre**) işler.

Örneğin 35B toplam parametreli bir MoE model, sorgu başına yalnızca ~3B parametre çalıştırabilir.

**Neden önemli (on-premise):** bellek transfer yükü düştüğü için, bant genişliği kısıtlı
kompakt donanımlarda (mini-PC, birleşik bellek) MoE modeller yoğun (dense) modellere göre
**~3 kata kadar** daha yüksek hıza ulaşır — kurum sunucusunda daha az donanımla daha akıcı
[yapay zeka](/dokumanlar/sozluk/llm) demektir.

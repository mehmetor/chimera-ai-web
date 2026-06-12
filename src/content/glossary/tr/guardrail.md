---
term: "Guardrail (güvenlik korkuluğu)"
lang: "tr"
aliases: ["guardrail nedir", "güvenlik filtresi", "korkuluk", "içerik filtresi"]
summary: "Bir chatbot'un yanlış, kapsam dışı veya istenmeyen yanıt vermesini engelleyen güvenlik filtresi katmanı."
updated: 2026-06-12
seeAlso: ["llm", "rag"]
---

**Guardrail (güvenlik korkuluğu)**, bir yapay zeka asistanının yanlış, kapsam dışı, hassas
veya istenmeyen yanıtlar vermesini engelleyen kural ve filtre katmanıdır. Modelin girdisini
ve çıktısını denetler; izin verilen konu, ton ve veri sınırlarının dışına çıkılmasını önler.

## Neden gerekli

[Dil modelleri](/kaynaklar/sozluk/llm) bazen kendinden emin ama yanlış yanıt üretebilir
(halüsinasyon). Müşteriye dışa açık bir botta bu risk yönetilmek zorundadır: kapsam dışı
sorularda güvenli yanıt, yasaklı konularda ret, gerektiğinde **insana devretme**.

Bu yüzden Chimera AI'da dışa açık bir Türkçe chatbot, sıkı guardrail mekanizması kurulmadan
devreye alınmaz; guardrail davranışı yayın öncesi bir test setiyle doğrulanır. Bot, insan
desteğinin yerine değil **önüne** konur.

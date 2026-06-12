---
term: "Kapalı devre (on-premise) yapay zeka"
lang: "tr"
aliases: ["on-premise AI", "on-prem yapay zeka", "yerinde yapay zeka", "self-hosted AI"]
summary: "Yapay zeka modelinin ve verinin kurumun kendi sunucularında, dış buluta bağlanmadan çalıştığı kurulum biçimi."
updated: 2026-06-12
seeAlso: ["air-gap", "rag", "llm"]
---

**Kapalı devre (on-premise) yapay zeka**, modelin ve onu besleyen verinin kurumun kendi
altyapısında — kendi sunucularında veya veri merkezinde — çalıştığı kurulum biçimidir.
Sohbetler, belgeler ve kod kurum sınırının dışına çıkmaz; OpenAI, Microsoft veya Google
gibi dış servislere veri gönderilmez.

## Bulut yapay zekadan farkı

| Boyut | Bulut AI | Kapalı devre AI |
|---|---|---|
| Verinin konumu | Sağlayıcının sunucuları | Kurumun kendi sunucuları |
| Bağımlılık | Abonelik, internet | Kurulu sistem, çevrimdışı çalışabilir |
| Mülkiyet | Kira | Kalıcı kurulum |
| Uyum (KVKK/GDPR) | Sağlayıcıya bağlı | Kurum denetiminde |

## Ne zaman tercih edilir

- Veri egemenliği ve gizlilik öncelikliyse (sağlık, finans, savunma, sanayi).
- Mevzuat verinin yurt içinde/kurum içinde kalmasını gerektiriyorsa.
- Uzun vadede abonelik yerine kalıcı bir varlık isteniyorsa.

Kapalı devre kurulum genellikle [RAG](/dokumanlar/sozluk/rag) ile kurumun kendi bilgisinden
beslenir ve en katı senaryolarda [air-gap](/dokumanlar/sozluk/air-gap) ile dış ağdan tümüyle
yalıtılır.

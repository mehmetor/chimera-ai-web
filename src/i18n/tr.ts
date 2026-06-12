// CHIMERA AI — içerik sözlüğü (TR) — ana sayfa
// Kaynak: design/prototype/chimera-content.js (CHIMERA_I18N.tr) — birebir taşındı.
// NOT: İç sayfa gövde metinleri DCN'den onaylı markdown olarak gelecek;
// burası ana sayfanın (/) kilitli kopyasıdır.

const tr = {
  nav: {
    links: [
      ["/platform", "Platform"],
      ["/devops", "DevOps"],
      ["/app", "App"],
      ["/nasil-baslariz", "Nasıl Başlarız"],
      ["/referanslar", "Referanslar"],
      ["/kaynaklar", "Kaynaklar"],
      ["/hakkinda", "Hakkında"],
    ],
    cta: "Mimari Ön-Analiz",
  },
  hero: {
    label: "Kapalı Devre Kurumsal Yapay Zeka",
    h1a: "Yapay zeka.",
    h1b: "Sizin sınırlarınızda, sizin denetiminizde.",
    lede: "Chimera AI, kurumunuzun kendi sunucularında çalışan, dış buluta veri sızdırmayan ve kurumunuzun bilgisinden beslenen kapalı devre yapay zeka platformudur. Abonelik değil — kalıcı mülkünüz.",
    cta1: "Mimari Ön-Analiz talep edin",
    cta2: "Üç hattı inceleyin",
    ticks: ["ON-PREMISE", "AÇIK KAYNAK YIĞINI", "TÜRKÇE + KVKK", "2 AYDA CANLI"],
    photoCaption: "Saha fotoğrafı · Obsidyen+Bronz duotone",
    photoPlaceholder: "Saha fotoğrafı (CNC, sunucu kabini, laboratuvar)",
  },
  problem: {
    label: "01 · Sorun",
    h2: "Veriniz binadan çıkmaz.",
    lede: "Kurumlar yapay zeka istiyor; ama üç engel her projeyi durduruyor. Chimera AI üçünü de aynı mimariyle çözer.",
    items: [
      {
        k: "VERİ EGEMENLİĞİ",
        t: "Veriniz başkasının sunucusunda",
        d: "Bulut AI kullandığınızda sohbetler, belgeler ve kod Microsoft, Google veya OpenAI sunucularına gider. Chimera AI'da her şey kurum sınırı içinde kalır.",
      },
      {
        k: "BAĞLAM",
        t: "Hazır AI kurumunuzu tanımıyor",
        d: "Jenerik sohbet araçları belgelerinizi ve süreçlerinizi bilmez — jenerik cevap, düşük fayda. Chimera AI kurumunuzun kendi bilgisinden beslenir ve kaynak göstererek yanıtlar.",
      },
      {
        k: "MÜLKİYET",
        t: "Kira değil, mülk",
        d: "Bulut AI aboneliktir; vazgeçince geriye hiçbir varlık kalmaz. Chimera AI açık kaynak yığını üzerine kurulur ve kurulduğu yerde kalır — kalıcı varlığınızdır.",
      },
    ],
  },
  lines: {
    label: "02 · Üç Hat",
    h2: "Üç hat, tek alaşım.",
    lede: "Chimera AI çatı markadır; altında üç hat yaşar. Aynı mühür, hattına göre yüklenir.",
    items: [
      {
        id: "platform",
        name: "Platform",
        tag: "Amiral ürün",
        d: "Kapalı devre AI: kurum sunucusunda model, kurumun bilgisi (RAG), sohbet ve kod asistanı. Modüler yapı: M0–M6.",
        link: "Platform'u incele",
      },
      {
        id: "devops",
        name: "DevOps",
        tag: "Üretim hattı",
        d: "Self-hosted yazılım üretim hattı: Git, CI/CD, otomatik test, dağıtım, sürüm süreçleri, Kanban ve eğitim.",
        link: "DevOps'u incele",
      },
      {
        id: "app",
        name: "App",
        tag: "Fikirden ürüne",
        d: "AI-hızlandırılmış uygulama geliştirme: Keşif → Tasarım → MVP → Yayın → Bakım. Her faz ayrı teslim, ayrı kriter.",
        link: "App'i incele",
      },
    ],
  },
  platform: {
    label: "03 · Chimera AI Platform",
    h2: "Model sizin sunucunuzda. Bilgi sizin bilginiz.",
    lede: "Kurum sunucusunda çalışan model, kurumun belgelerinden beslenen bilgi yönetimi ve kapalı ağda sohbet/kod asistanı — tek platformda, modüler.",
    diagram: {
      boundary: "KURUM SINIRI",
      model: "MODEL",
      modelSub: "kurum sunucusu",
      rag: "KURUM BİLGİSİ",
      ragSub: "RAG · kaynak gösterir",
      users: "KULLANICILAR",
      usersSub: "sohbet · kod asistanı",
      cloud: "DIŞ BULUT",
      noLink: "BAĞLANTI YOK",
    },
    modulesH: "Modül kataloğu",
    modulesLede: "M0 zorunlu temeldir; kalan modüller ihtiyaca göre eklenir.",
    modules: [
      ["M0", "Çekirdek Platform", "Kurum sunucusunda model, sohbet arayüzü, erişim, izleme ve güvenlik — zorunlu temel."],
      ["M1", "Bilgi Yönetimi (RAG)", "Kurum belgeleri yapay zekanın açık kitabı olur; kaynak göstererek yanıtlar."],
      ["M2", "Güvenli Kod Asistanı", "Kod editöründe, kapalı ağda kod tamamlama ve açıklama — kod binadan çıkmaz."],
      ["M3", "Ar-Ge & Akıl Yürütme", "Adım adım düşünen model ve güvenli kod çalıştırma alanı."],
      ["M4", "Görsel Doküman İşleme", "Taranmış PDF, şema ve tabloyu okur; arşiv aranabilir hale gelir."],
      ["M5", "Türkçe Chatbot", "Müşteri ve saha desteği için doğal Türkçe bot; istenirse sesli."],
      ["M6", "Veri Analizi", "Doğal dille soruya SQL üretir, salt-okunur çalıştırır, panelde gösterir."],
    ],
  },
  devops: {
    label: "04 · Chimera AI DevOps",
    h2: "Üretim hattı sizin binanızda.",
    lede: "Yazılım ekibinize self-hosted üretim hattı kurarız: kaynak kod hiçbir bulut servisine çıkmaz. Eğitim ve dokümantasyonla teslim edilir.",
    stages: ["Git", "CI/CD", "Test", "Dağıtım", "Sürüm", "Kanban", "Eğitim"],
    refsH: "Canlı referans konfigürasyonları",
    refs: [
      "Çok-platformlu üretici — 4 proje: web, masaüstü, mobil, gömülü.",
      "TFS'ten göç + sıfırdan otomatik test kurulumu.",
    ],
    boundary: "Kapsam sınırı: uygulama geliştirme (kod yazma) bu hattın işi değildir — o iş App hattınındır.",
  },
  app: {
    label: "05 · Chimera AI App",
    h2: "Fikirden ürüne — ajans işi değil, üretim süreci.",
    lede: "Ürünleştirilmiş geliştirme süreci: her faz ayrı teslim ve ayrı kabul kriteriyle ilerler. AI-hızlandırılmış üretim hattı aynı işi daha kısa sürede, daha tutarlı çıkarır.",
    phases: ["Keşif", "Tasarım", "MVP", "Yayın", "Bakım"],
    closing: "Çıkan ürün istenirse kapalı devrede çalışır, DevOps hattında yaşar ve Platform yetenekleriyle entegre olur.",
  },
  start: {
    label: "06 · Nasıl Başlarız",
    h2: "İlk adım bir taahhüt değil, bir analizdir.",
    lede: "Üç adımda kurulum — ilk sistem 2 ayda canlıda.",
    steps: [
      {
        k: "ADIM 1",
        t: "Mimari Ön-Analiz",
        d: "Altyapınızı, verinizi ve kullanım senaryolarınızı yerinde inceleriz; donanım ve modül önerisiyle raporlarız. Analiz bedeli, proje bedelinden mahsup edilir.",
      },
      {
        k: "ADIM 2",
        t: "FAZ-0 Pilot",
        d: "Seçilen tek senaryoda sınırlı kapsamlı pilot: gerçek verinizle, sizin sunucunuzda. Karar kanıt üzerinden verilir.",
      },
      {
        k: "ADIM 3",
        t: "Kurulum ve devir",
        d: "Tam kurulum, ekip eğitimi ve dokümantasyonla teslim. Sistem kurumunuzun kalıcı mülkü olarak kalır.",
      },
    ],
    kobiK: "KOBİ İÇİN",
    kobiT: "Hızlı Başlangıç",
    kobiD: "10–50 kişilik ekipler için mini bilgi yönetimi veya chatbot kurulumu — elle tutulur kanıt, küçük kapsam, kısa süre.",
    cta: "Mimari Ön-Analiz talep edin",
  },
  refs: {
    label: "07 · Referanslar",
    h2: "Kanıt sahada.",
    lede: "Müşteri adları dışa dönük materyalde anonimdir; isim kullanımı yazılı onaya bağlıdır.",
    items: [
      {
        k: "PİLOT · CANLI",
        t: "Elektronik üreticisi",
        d: "Kapalı devre platform pilotu canlıda (Mayıs–Eylül 2026). Kurum sunucusunda model + bilgi yönetimi.",
        state: "ok",
      },
      {
        k: "FAZ-0 · TEKLİF",
        t: "Tohum Ar-Ge şirketi",
        d: "Yazılım ekibi pilotu (FAZ-0) teklif aşamasında — DevOps hattı konfigürasyonu.",
        state: "warn",
      },
      {
        k: "AYLIK RAPOR",
        t: "Benchmark programı",
        d: "Model ve donanım önerileri her ay yayımlanan benchmark raporuyla güncellenir.",
        state: "ok",
      },
    ],
    photoCaption: "Pilot kurulum · saha",
    photoPlaceholder: "Pilot sahasından fotoğraf (gerçek mekân, gerçek iş)",
  },
  resources: {
    label: "08 · Kaynaklar",
    h2: "Okuyun, sorun, karşılaştırın.",
    items: [
      ["Benchmark Raporu", "Her ay yenilenen açık kaynak LLM ve donanım karşılaştırması — model/donanım tavsiyesinin kanonik dayanağı.", "/dokumanlar/rapor"],
      ["Sözlük", "RAG'den kapalı devreye — kurumsal AI terimlerinin sade Türkçe açıklamaları.", "/dokumanlar/sozluk"],
      ["SSS", "Güvenlik, lisans, donanım ve süreç hakkında en sık sorulan sorular.", "/dokumanlar/sss"],
      ["Blog", "Saha notları ve kapalı devre AI üzerine mimari yazıları.", "/blog"],
    ],
    linkLabel: "İncele",
  },
  about: {
    label: "09 · Hakkında",
    h2: "bir DC NEXTGEN ürünüdür",
    d: "Chimera AI, DC NEXTGEN tarafından geliştirilir ve teslim edilir. Yaklaşımımız mühendislik disiplinidir: ölçülmüş donanım, kanıtlanmış açık kaynak yığını, her ay yenilenen benchmark — fütürizm kostümü yok, bugün çalışan teknoloji var.",
  },
  contact: {
    label: "10 · İletişim",
    h2: "Toplantı odanıza gelelim.",
    lede: "Mimari Ön-Analiz için yazın; 2 iş günü içinde dönüş yapalım.",
    fName: "Ad Soyad",
    fOrg: "Kurum",
    fMail: "E-posta",
    fMsg: "Kısaca ihtiyacınız (isteğe bağlı)",
    send: "Talep gönder",
    sending: "Gönderiliyor…",
    sent: "Talebiniz alındı — 2 iş günü içinde dönüş yapacağız.",
    error: "Gönderilemedi. Lütfen tekrar deneyin ya da doğrudan yazın:",
    alt: "Veya doğrudan yazın:",
  },
  footer: {
    endorsement: "bir DC NEXTGEN ürünüdür",
    domain: "chimera-ai.com.tr",
    note: "© 2026 DC NEXTGEN. Veriniz binadan çıkmaz.",
    lines: [
      ["Platform", "/platform"],
      ["DevOps", "/devops"],
      ["App", "/app"],
    ],
  },
};

/** Sözlük şekli — `en` bu tipe uymak zorundadır (eksik/fazla anahtar derleme hatası). */
export type Dict = typeof tr;

export default tr;

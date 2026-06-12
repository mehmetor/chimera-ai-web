// CHIMERA AI — Platform modül kataloğu (public-uygun damıtım).
// Kaynak: DCN ozellik-katalogu.md. Public repo disiplini: fiyat / a-g efor /
// müşteri adı / iç satış notu YOK. Yalnız "ne satın alınıyor" + dürüst sınırlar.

export type ModuleTier = "zorunlu" | "secmeli" | "genisleme";

export interface PlatformModule {
  code: "M0" | "M1" | "M2" | "M3" | "M4" | "M5" | "M6";
  name: string;
  tier: ModuleTier;
  /** Hangi segmentin "hero" modülü (varsa) */
  hero?: string;
  summary: string;
  forWho: string;
  /** Kapsam / bileşenler (kategori düzeyi, açık kaynak yığını) */
  includes: string[];
  /** Teslim kriterleri ("bitti" tanımı) */
  delivers: string[];
  /** Dürüst sınırlar / riskler */
  limits: string[];
}

/** Üçlü mimari dürüstlük çerçevesi (Brief + katalog dürüstlük notu). */
export const ARCHITECTURE_HONESTY = {
  triad: ["Akıl (LLM)", "Hafıza (RAG)", "El (MCP)"],
  shippedToday: "Akıl + Hafıza + Güvenli Kod Asistanı",
  roadmap:
    "El (MCP / iç sistem entegrasyonu) yol haritasında ileri fazda gelir — bugünün teslimi gibi sunulmaz.",
};

export const MODULE_RULES = [
  "M0 zorunlu temeldir — Chimera AI çekirdeksiz satılmaz; tüm modüller M0 üzerine eklenir.",
  "Fazlı teslim: kurulum FAZ-0 ile başlar (M0 + seçilen 1–2 modülün pilotu). Değer önce küçük ekipte kanıtlanır, sonra modül modül genişler.",
  "Donanım kurumun mülküdür; DC NEXTGEN tavsiye verir veya tedarike aracılık eder.",
];

/** Donanım ölçek bandı — fiyatsız, kategori düzeyi. */
export const CAPACITY_NOTE =
  "Sistem ihtiyaca göre ölçeklenir: küçük ekipler için tek kompakt cihazdan (dizüstü sınıfı birleşik bellek veya tek GPU), büyük departman ve kurum geneli kullanım için veri merkezi sınıfı GPU'lara kadar. Doğru bant kullanım senaryosu ve eşzamanlı kullanıcı sayısına göre Mimari Ön-Analiz'de belirlenir.";

export const MODULES: PlatformModule[] = [
  {
    code: "M0",
    name: "Çekirdek Platform",
    tier: "zorunlu",
    summary:
      "Kurumun kendi sunucusunda çalışan, ChatGPT benzeri bir yapay zeka platformunun temelini kurar: model şirket içinde çalışır, personel web arayüzünden sohbet eder, kimin neye eriştiği izlenir ve hiçbir veri dışarı çıkmaz. Tüm diğer modüller bu temele eklenir.",
    forWho:
      "Her kurulumun tabanı. Tetikleyici: “Yapay zekayı kullanmak istiyoruz ama verimiz dış buluta gitmesin.”",
    includes: [
      "Açık kaynak LLM kurulumu + Türkçe yanıt doğrulaması",
      "Web sohbet arayüzü (Open WebUI) — sohbet geçmişi şirket içinde",
      "Kullanıcı/rol erişim yönetimi; istenirse LDAP/AD entegrasyonu",
      "İzleme paneli: kaynak kullanımı, yanıt süresi, sorgu/aktif kullanıcı, hata logları",
      "Veri güvenliği sıkılaştırma: kapalı ağ, TLS, erişim logları, sıfır dış veri çıkışı doğrulaması",
    ],
    delivers: [
      "Model şirket içi sunucuda Türkçe dahil yanıt üretiyor",
      "Web arayüzü şirket ağından erişilebilir; pilot kullanıcılar giriş yapabiliyor",
      "İzleme paneli aktif, metrik topluyor",
      "Dış servise sıfır veri çıkışı teyit edildi",
      "Pilot kullanıcılara temel kullanım eğitimi verildi",
    ],
    limits: [
      "M0 tek başına “kurumu tanıyan” bir AI değildir — kurum bilgisi M1 (RAG) ile gelir.",
      "Doğru donanım bandı kritiktir: yetersiz bellekte büyük modeller yavaşlar.",
      "KVKK: teknik altyapı uyumludur; hukuki değerlendirme veri sorumlusu kurumun sorumluluğundadır.",
    ],
  },
  {
    code: "M1",
    name: "Kurumsal Bilgi Yönetimi (RAG)",
    tier: "secmeli",
    hero: "Bilgi yoğun kurumlar",
    summary:
      "Kurumun dokümanlarını (prosedürler, şartnameler, sözleşmeler, bilgi bankası) yapay zekanın “açık kitabı” haline getirir. Personel soru sorar; sistem doğru dokümanı bulur ve kaynak göstererek yanıtlar. Yıllar içinde biriken bilgi sorulabilir hale gelir.",
    forWho:
      "Bilgi yoğun, yazılım ekibi olmayan kurumların hero modülü. Tetikleyici: “Bilgi bizde var ama kimsenin bulamadığı yerlerde.”",
    includes: [
      "Vektör veritabanı (Qdrant) + embedding + reranker ile anlamsal arama",
      "Doküman tarama → markdown'a dönüştürme → parçalama hattı",
      "Kaynak referanslı yanıt üretimi",
      "Rol bazlı bilgi izolasyonu (İK dokümanını yalnız İK görür)",
    ],
    delivers: [
      "Belirlenen doküman seti indekslendi",
      "Sistem doğru dokümandan, kaynak referanslı yanıt üretiyor",
      "Kurum-spesifik terim/kısaltma testi geçildi",
      "Doküman ekleme/güncelleme mekanizması çalışıyor",
    ],
    limits: [
      "Yanıt kalitesi korpus kalitesine bağlıdır — veri hazırlığı kurumla ortak iştir.",
      "Karmaşık tablolu PDF'lerde anlamsal kayma yaşanabilir.",
    ],
  },
  {
    code: "M2",
    name: "Güvenli Kod Asistanı",
    tier: "secmeli",
    hero: "Yazılım ekibi olan firmalar",
    summary:
      "Yazılım ekibinin kod editörüne (VS Code / JetBrains) kapalı ağda çalışan bir kod asistanı entegre eder: tamamlama, açıklama, refactor, test/yorum üretimi — kod ve bağlam bina dışına çıkmadan.",
    forWho:
      "Yazılım ekibi olan firmaların hero modülü. Tetikleyici: “Copilot kullanmak istiyoruz ama güvenlik izin vermiyor.”",
    includes: [
      "IDE eklentisi (Continue.dev / Tabby) ile yerel sunucuya bağlantı",
      "VS Code (ana teslim), JetBrains (destekli)",
      "Şirket içi kod tabanı tarama + hassas veri (anahtar/şifre) temizliği",
    ],
    delivers: [
      "Kod asistanı VS Code'da kapalı ağda çalışıyor; kod dışarı çıkmıyor",
      "Tamamlama, açıklama ve refactor ekibin kendi kod tabanında gösterildi",
      "Ekip üyeleri eklentiyi kendi makinelerinde kullanıyor",
    ],
    limits: [
      "Üretilen kodda güvenlik açığı olabilir — derleme öncesi statik analiz şarttır; asistan gözden geçirmenin yerine geçmez.",
      "Visual Studio (.NET) entegrasyonu fizibiliteye bağlıdır, garanti edilmez.",
    ],
  },
  {
    code: "M3",
    name: "Ar-Ge ve Akıl Yürütme Desteği",
    tier: "genisleme",
    summary:
      "Mühendislik ve Ar-Ge ekiplerine adım adım “düşünerek” çözüm üreten bir akıl yürütme modeli ve güvenli bir kod çalıştırma alanı (sandbox) sunar. Algoritma tasarımı, matematiksel analiz, optimizasyon — hepsi kapalı ağda.",
    forWho:
      "Mühendislik / Ar-Ge ağırlıklı firmalar. Tetikleyici: “Karmaşık hesap ve algoritma işlerinde derinlik istiyoruz, hızlı cevap değil.”",
    includes: [
      "Adım adım düşünen akıl yürütme (reasoning) modeli",
      "İzole kod yürütme sandbox'ı (SymPy / NumPy / yerel Python)",
    ],
    delivers: [
      "Örnek Ar-Ge probleminde adımlı çözüm üretiyor",
      "Sandbox izole çalışıyor; dışa dosya/ağ erişimi olmadığı doğrulandı",
      "Müşterinin gerçek problem senaryoları birlikte test edildi",
    ],
    limits: [
      "Akıl yürütme yanıt süresi “düşünme” adımları nedeniyle uzundur — hızlı sohbet beklentisiyle karıştırılmamalıdır.",
      "Sandbox kapsamı (kütüphaneler, kaynak sınırları) kurulum öncesi yazılı netleştirilir.",
    ],
  },
  {
    code: "M4",
    name: "Görsel Doküman İşleme",
    tier: "genisleme",
    summary:
      "Taranmış PDF'ler, teknik çizimler, şemalar ve tablolu belgeleri “okuyan” görsel yapay zeka katmanı kurar. Kağıt arşivden gelen dokümanlar otomatik metne dönüşür ve aranabilir hale gelir; M1 ile birleşince taranmış arşiv de RAG'a dahil olur.",
    forWho:
      "Arşivinde yoğun taranmış belge/şema olan firmalar. Tetikleyici: “Bilgimizin yarısı taranmış PDF'lerde, hiçbiri aranabilir değil.”",
    includes: [
      "OCR ön işleme (Tesseract / EasyOCR)",
      "Multimodal model ile şema/tablo okuma",
      "Klasöre bırakılan belgeleri otomatik işleyen batch hattı",
    ],
    delivers: [
      "Örnek belge setinde metin çıkarımı + sorguya yanıt",
      "Batch işleme hattı çalışıyor",
      "Doğruluk, müşteriyle seçilen doğrulama setinde ölçüldü ve raporlandı",
    ],
    limits: [
      "El yazısı ve çok küçük fontlu dipnot tablolarında doğruluk düşebilir (~%70) — bu sınır satışta açıkça söylenir.",
      "Düşük çözünürlüklü taramalar (300 DPI altı) kalite garantisi dışındadır.",
    ],
  },
  {
    code: "M5",
    name: "Türkçe Chatbot — Müşteri/Saha Desteği",
    tier: "secmeli",
    summary:
      "Müşteri hizmetleri, bayi ağı veya saha ekipleri için doğal Türkçe konuşan, kurum bilgisiyle beslenmiş bir sohbet botu kurar. Sık sorulan soruları yanıtlar, prosedürleri anlatır, yükü insan ekibin üzerinden alır. İsteğe bağlı sesli kullanım (Whisper STT/TTS).",
    forWho:
      "Çağrı merkezi, bayi/saha ağı veya yoğun iç destek talebi olan firmalar. Tetikleyici: “Aynı soruları her gün yüz kez cevaplıyoruz.”",
    includes: [
      "Türkçe-doğal sohbet modeli",
      "Guardrail: kapsam dışı/yasaklı konu güvenlik filtresi",
      "Konuşma analitiği ve izlenebilirlik",
      "Opsiyon: sesli soru-yanıt (Whisper STT + TTS)",
    ],
    delivers: [
      "Bot belirlenen SSS/bilgi setinden doğal Türkçe yanıt üretiyor",
      "Guardrail aktif: kapsam dışı/yasaklı konularda güvenli yanıt test edildi",
      "Konuşma kayıtları izlenebilir",
      "(Opsiyon alındıysa) sesli akış çalışıyor",
    ],
    limits: [
      "Müşteri karşısında halüsinasyon riski her zaman vardır — sıkı guardrail olmadan dışa açık bot devreye alınmaz.",
      "Bot, insan desteğinin yerine değil önüne konur; insana devretme senaryosu tasarıma dahildir.",
    ],
  },
  {
    code: "M6",
    name: "Veri Analizi ve Raporlama",
    tier: "genisleme",
    summary:
      "Yöneticinin doğal dille sorduğu soruyu (“geçen ay hangi ürünün iadesi arttı?”) veritabanı sorgusuna (SQL) çevirir, salt-okunur bağlantıyla çalıştırır ve sonucu tablo/grafik panelinde sunar. Rapor beklemek yerine soru sorarak veriye ulaşma.",
    forWho:
      "ERP/üretim/satış veritabanı olan ve rapor darboğazı yaşayan firmalar. Tetikleyici: “Raporu BT'den istiyoruz, üç gün sonra geliyor.”",
    includes: [
      "Doğal dil → SQL (Text-to-SQL)",
      "Salt-okunur veritabanı bağlantısı",
      "Dinamik raporlama paneli (tablo/grafik)",
    ],
    delivers: [
      "Örnek soru setinde doğru SQL üretiyor ve doğru sonuç döndürüyor",
      "Veritabanı bağlantısının salt-okunur olduğu teknik doğrulandı",
      "Raporlama paneli şirket ağından erişilebilir",
      "Hatalı/belirsiz soruda “emin değilim” davranışı test edildi",
    ],
    limits: [
      "Yanlış SQL → hatalı rapor riski: veritabanına salt-okunur yetki zorunludur, yazma yetkisi verilmez.",
      "Raporlar karar desteğidir; kritik finansal kararlarda insan doğrulaması süreç tasarımına eklenir.",
    ],
  },
];

/** İleri/genişleme modülleri — platform olgunlaştıkça eklenir. */
export const ADVANCED_MODULES: { name: string; what: string; roadmap?: boolean }[] = [
  { name: "Çoklu model sunumu", what: "Görev bazlı model yönlendirme (kod sorusu → kod modeli, genel soru → genel model); departmana ayrı model." },
  { name: "Fine-tuning (LoRA)", what: "Modelin kurum terminolojisi/tonu/özel kütüphaneleriyle ince ayarı. Önce RAG denenir; dar kapsamlı ince ayardan kaçınılır." },
  { name: "MCP / iç sistem entegrasyonu", what: "“El” katmanı: ERP/MRP gibi sistemlere standart bağlantı — AI'ın okuduğu değil iş yaptığı faz.", roadmap: true },
  { name: "GPU ölçekleme + yüksek erişilebilirlik", what: "Çoklu GPU/sunucu, yük dengeleme; S/M bandından L/XL'e geçiş." },
  { name: "Kurum geneli yayılım + eğitim", what: "Pilot ekipten tüm departmanlara açılım, rol bazlı preset'ler, kullanıcı eğitim programı." },
  { name: "SLA 7/24", what: "Tanımlı müdahale süreleri, periyodik bakım, model güncellemeleri, proaktif izleme (yıllık)." },
];

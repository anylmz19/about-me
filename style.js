document.addEventListener("DOMContentLoaded", () => {
  console.log("Sayfa yüklendi.");

  // Hover efektine ekstra sparkle animasyonu gibi örnek bir şey
  const projeler = document.querySelectorAll(".proje");

  projeler.forEach((proje) => {
    proje.addEventListener("mouseenter", () => {
      proje.style.boxShadow = "0 0 25px #00ffffaa";
    });

    proje.addEventListener("mouseleave", () => {
      proje.style.boxShadow = "0 0 15px #08f";
    });
  });
});
const altYazilar = [
  "Yazılım Geliştirici",
  "Frontend & Backend Uzmanı",
  "Projeci Adam 🛠️",
  "Tasarım ve Fonksiyon Ustası",
   "Kodun Efendisi 👑",
  "Full Stack Savaşçısı ⚔️",
  "Yazılımın Mimar Beyni 🧠",
  "Bug Avcısı, Sistem Kurucusu 🛠️",
  "Karanlıkta Parlayan Debug Ustası 🌌",
  "Satır Satır Sanat Yazan Mühendis 🎨",
  "Geliştirici Değil, Dijital Zanaatkar 💻",
  "Frameworkleri Diz Çöktüren Adam 🔥",
  "Algoritma İçin Nefes Alan Bir Ruh 🧬",
  "Sıfırdan Sistem Kuran Kod Büyücüsü 🧙‍♂️"
 
];

let index = 0;
setInterval(() => {
  document.getElementById("bannerAlt").textContent = altYazilar[index];
  index = (index + 1) % altYazilar.length;
}, 2500);

document.addEventListener("DOMContentLoaded", () => {
  console.log("Sayfa yüklendi!");
});
function gosterMetin() {
  document.getElementById("metinTarzi").style.display = "block";
  document.getElementById("modernTarzi").style.display = "none";
}

function gosterModern() {
  document.getElementById("metinTarzi").style.display = "none";
  document.getElementById("modernTarzi").style.display = "block";
}
const data = [
  {
  "id": 1,
  "Proje-Adı": "ChronoSphere – Tarihsel Bilgi Platformu",
  "özet": "Geçmişin büyük imparatorluklarını, kahramanlarını ve savaşlarını dijital ortamda sunan bilgi platformu.",
  "genel-amaçı": "Kullanıcıların tarihsel olayları, imparatorlukları, kahramanları ve savaşları sistematik ve etkileşimli biçimde öğrenebileceği bir dijital bilgi portalı sunmak.",
  "Projenin-Amacı": "ChronoSphere, geçmişte yaşamış büyük imparatorluklar, kahramanlar ve savaşlar hakkında zengin ve organize edilmiş veriler sunan, kullanıcı tabanlı, dinamik bir web uygulamasıdır.\nBu proje, hem frontend hem backend yapılarıyla bütünleşmiş; modern kullanıcı arayüzü, güçlü veritabanı yönetimi ve kişisel kullanıcı deneyimiyle dikkat çeken bir sistem olarak tasarlanmıştır.\n\nKullanıcılar sisteme giriş yapabilir, profilini güncelleyebilir ve günlük/haftalık/aylık önerilen içeriklerle etkileşime geçebilir. \nTarihsel veriler SQL Server veritabanından çekilir, Flask/Python ile API üzerinden sunulur. \n\nFrontend kısmı tamamen responsive yapıdadır, arama motoru çoklu tablo desteklidir ve detay sayfaları dinamik olarak çalışır.\nProjede Quill.js ile not alma, html2pdf ile dışa aktarma gibi modüller de yer alır.\n\nKısacası ChronoSphere, tarih bilgisini dijital ortama taşıyan güçlü ve modern bir bilgi platformudur.",
  "Teme-Özellikler": "- Kullanıcı giriş/kayıt sistemi\n- Kullanıcı profil güncelleme ekranı\n- Günlük / haftalık / aylık editör seçimleri\n- İmparatorluk, savaş ve kahramanlara özel detay sayfaları\n- Çoklu tablo destekli arama motoru\n- API üzerinden veri çekme\n- Not alma ve dışa aktarma (PDF)\n- Responsive arayüz ve modern tasarım",
  "Backend-Mimarisi": "- Python & Flask kullanılarak RESTful API mimarisi kurulmuştur.\n- Kullanıcı işlemleri için POST ve GET endpoint'ler tanımlanmıştır.\n- Veritabanı bağlantısı pyodbc ile sağlanmıştır.\n- Giriş/güncelleme işlemlerinde session ve hash şifreleme sistemi yer alır.\n- Editör önerileri sisteminde rasgele seçim yapılır, gün bazlı sabitlenir.",
  "Veritabanı-Yapısı": "- users: Kayıtlı kullanıcı bilgileri\n- empire: İmparatorluklara ait detaylar\n- hero: Hükümdar bilgileri\n- war: Tarihi savaşlar\n- promise: Tarihten alıntılar\n- editor_gunluk/haftalık/aylık: Günlük öneriler",
  "Kullanılan-Teknolojiler": "- Backend: Flask, Python, pyodbc, SQL Server\n- Frontend: HTML, CSS, JavaScript\n- Kütüphaneler: FontAwesome, Quill.js, html2pdf.js, Animate.css\n- Diğer: Responsive grid sistem, JSON ile veri aktarımı",
  "resim": "img/chrono.png",
  "resim2": "img/chrono2.png",
  "resim3": "img/chrono3.png",
  "resim4": "img/chrono4.png",
  "resim5": "img/chrono5.png",
  "resim6": "img/chrono6.png",
  "resim7": "img/chrono7.png",
  "resim8": "img/chrono8.png",
  "resim9": "img/chrono9.png",
  "resim10": "img/chrono10.png",
  "resim11": "img/chrono11.png",
  "resim12": "img/chrono12.png",
  "resim13": "img/chrono13.png",
  "resim14": "img/chrono14.png",
  "resim15": "img/chrono15.png",
  "video": "video/ChronoSphere.mp4"

  },
  {
  "id": 2,
  "Proje-Adı": "WatchNest – Dizi & Film Takip Uygulaması",
  "özet": "Kullanıcıların izledikleri dizileri ve filmleri takip edebildiği, izleme ilerlemesini kaydedebildiği ve kişisel listeler oluşturabildiği Flutter tabanlı platform.",
  "genel-amaçı": "Dizi ve film severlerin izleme alışkanlıklarını düzenli bir şekilde yönetebileceği, izlediklerini işaretleyebileceği ve öneriler alabileceği çoklu platform (Android, iOS, Web) desteği sunan bir uygulama sağlamak.",
  "Projenin-Amacı": "WatchNest, kullanıcıların dizilerini ve filmlerini tek bir yerde toplar. Kullanıcılar izleme listeleri oluşturabilir, bölümleri işaretleyebilir, izledikleri yüzdesini görebilir ve hangi içerikleri takip ettiklerini düzenleyebilir.\n\nUygulama **Flutter** ile geliştirilmiştir ve Android, iOS ve Web üzerinde çalışmaktadır. **Firebase Authentication** ile kullanıcı girişi yapılır, **Firestore** üzerinde her kullanıcıya özel dizi/film bilgileri saklanır. Profil fotoğrafı gibi içerikler **Cloudinary** entegrasyonu ile yönetilir.\n\nModern UI, responsive tasarım ve kullanıcıya özel dinamik öneriler ile WatchNest, izleme deneyimini kişisel hale getirir.",
  "Temel-Özellikler": "- Flutter ile cross-platform geliştirme (Android, iOS, Web)\n- Kullanıcı giriş/kayıt sistemi (Firebase Auth)\n- Kullanıcı profili güncelleme (Cloudinary görsel desteği)\n- Dizi & film ekleme / çıkarma (mySeries, myMovies)\n- Bölüm işaretleme ve izleme yüzdesi hesaplama\n- İzleme durumu etiketleri (Devam Ediyor / Sona Erdi)\n- Günlük / haftalık / aylık öneriler\n- Responsive ve modern arayüz",
  "Backend-Mimarisi": "- Backend: Firebase Firestore (NoSQL)\n- Kimlik Doğrulama: Firebase Authentication\n- Görsel Yönetimi: Cloudinary\n- Flutter ile REST API / Firestore query entegrasyonu\n- İzleme yüzdesi hesaplama sistemi",
  "Veritabanı-Yapısı": "- users: Kullanıcı bilgileri (profil, görseller)\n- mySeries: Kullanıcının eklediği diziler\n- myMovies: Kullanıcının eklediği filmler\n- watched: İşaretlenen izlenen bölümler\n- favory: Kullanıcının favori içerikleri\n- editor_gunluk/haftalik/aylik: Öneriler",
  "Kullanılan-Teknolojiler": "- Flutter (Android, iOS, Web)\n- Firebase Authentication\n- Firebase Firestore\n- Cloudinary (görsel yükleme)\n- Dart dili\n- Responsive tasarım ve Material 3",
  "resim21": "img/watch_21.png",
  "resim": "img/watch_3.png",
  "resim2": "img/watch_1.png",
  "resim3": "img/watch_2.png",
  "resim4": "img/watch_4.png",
  "resim5": "img/watch_5.png",
  "resim6": "img/watch_6.png",
  "resim7": "img/watch_7.png",
  "resim8": "img/watch_8.png",
  "resim9": "img/watch_9.png",
  "resim10": "img/watch_10.png",
  "resim11": "img/watch_11.png",
  "resim12": "img/watch_12.png",
  "resim13": "img/watch_13.png",
  "resim14": "img/watch_14.png",
  "resim15": "img/watch_15.png",
  "resim16": "img/watch_16.png",
  "resim17": "img/watch_17.png",
  "resim18": "img/watch_18.png",
  "resim19": "img/watch_19.png",
  "resim20": "img/watch_20.png",

  "resim22": "img/watch_22.png",
  "resim23": "img/watch_23.png",
  "resim24": "img/watch_24.png",
  "resim25": "img/watch_25.png",
  "resim26": "img/watch_26.png",
  "resim27": "img/watch_27.png",
  "resim28": "img/watch_28.png",
  "resim29": "img/watch_29.png",
  "resim30": "img/watch_30.png",
  "resim31": "img/watch_31.png",
  "resim32": "img/watch_32.png",
  "resim33": "img/watch_33.png",
  "resim34": "img/watch_34.png",
  "resim35": "img/watch_35.png",
  "resim36": "img/watch_36.png",
  "video": "video/ChronoSphere.mp4"
},


 {
    "id": 3,
    "Proje-Adı": "AnılCheck – Teknolojik Cihaz Karşılaştırma ve İnceleme Platformu",
    "özet": "Bu proje, kullanıcıların teknolojik cihazları karşılaştırmasına, yorum bırakmasına ve detaylı bilgi almasına olanak tanıyan interaktif bir web uygulamasıdır.",
    "genel-amaçı": "Kullanıcıların teknoloji ürünleri hakkında karşılaştırmalı bilgi almasını, yorum yapmasını, favori listesi oluşturmasını ve daha bilinçli tercihler yapmasını sağlamak.",
    "Projenin-Amacı": "Tüm teknolojik cihazların detaylı teknik özelliklerini, kullanıcı yorumlarını, görsellerini ve karşılaştırma tablolarını tek bir sistem altında sunarak ziyaretçilere sade, hızlı ve işlevsel bir alışveriş/inceleme deneyimi sunmak.",
    "Teme-Özellikler": "- Detaylı ürün teknik özellik sayfaları\n- Karşılaştırma tabloları\n- Kullanıcı yorum sistemi (tarihli ve dinamik)\n- Dinamik arama kutusu (canlı filtreleme)\n- Video ve görsel destekli ürün kartları\n- Favori cihazlar listesi\n- Kullanıcı oturum yönetimi\n- Admin onaylı kayıt sistemi",
    "Backend-Mimarisi": "Flask kullanılarak geliştirilen REST API, pyodbc ile SQL Server'a bağlanarak veri çekimi ve yorum yönetimi yapıyor. Giriş, kayıt, karşılaştırma ve kullanıcı bilgileri işlemleri JSON formatında veri alışverişiyle API üzerinden kontrol ediliyor. Flask-Session ile oturum yönetimi sağlanıyor.",
    "Veritabanı-Yapısı": "- Her cihaz tipi için ayrı tablo (telefonlar, laptoplar, monitörler, vs.)\n- Her biri için karşılaştırma tablosu (örn: `telefon_compare`, `monitörler_compare`)\n- Kullanıcı bilgileri için `register` ve `users` tabloları\n- Yorumlar ayrı endpoint ile alınmakta: `/api/yorumlari-getir/{id}`",
    "Kullanılan-Teknolojiler": "- HTML5, CSS3, JavaScript (vanilla ve modüler yapılar)\n- Flask, Flask-CORS, Flask-Session\n- SQL Server (ODBC Driver 17)\n- pyodbc\n- Font Awesome ikonlar\n- JSON API formatı ile veri aktarımı",
     "resim": "img/anılcheck.png",
      "resim2": "img/anılcheck2.png",
      "resim3": "img/anılcheck3.png",
      "resim4": "img/anılcheck4.png",
      "resim5": "img/anılcheck5.png",
      "resim6": "img/anılcheck6.png",
      "resim7": "img/anılcheck7.png",
      "resim8": "img/anılcheck8.png",
      "resim9": "img/anılcheck9.png",
      "resim10": "img/anılcheck10.png",
      "resim11": "img/anılcheck11.png",
      "resim12": "img/anılcheck12.png",
      "resim13": "img/anılcheck13.png",
      "resim14": "img/anılcheck14.png",
      "resim15": "img/anılcheck15.png",
      "resim16": "img/anılcheck16.png",
       "video": "video/AnılCheck.mp4"
  },

  {
  "id": 4,
  "Proje-Adı": "AnılMarket - E-Ticaret Sistemi",
  "özet": "AnılMarket, kullanıcıların giriş yaparak ürünleri inceleyebileceği, arama yapabileceği, sepete ürün ekleyip satın alabileceği, sipariş takibi yapabileceği ve ürünler hakkında yorum bırakabileceği çok yönlü bir e-ticaret platformudur. Günlük, haftalık ve aylık kampanyalarla birlikte kişiselleştirilmiş kullanıcı deneyimi sunar.",
  "genel-amaçı": "Kullanıcıların online olarak ürün arayabileceği, satın alma gerçekleştirebileceği, yorum yapabileceği, sepetini yönetebileceği ve sipariş takibini görsel olarak yapabileceği kapsamlı bir alışveriş sistemini hayata geçirmek.",
  "Projenin-Amacı": "Amacımız, kullanıcı dostu, responsive, sade ama işlevsel bir e-ticaret sistemi geliştirmek. Sepet kontrolü, sipariş güncelleme, indirim yönetimi, kullanıcı bakiyesi takibi, yorum ve puanlama gibi birçok fonksiyonu tek sistemde toplamaktır.",
  "Teme-Özellikler": "- Gelişmiş arama popup'ı ile ürün filtreleme\n- Kullanıcı giriş bilgisi ve cüzdan bakiyesi entegrasyonu\n- Dinamik olarak güncellenen sepet ve stok kontrolü\n- Sipariş durumu ikonları ve detaylı görünüm\n- Kullanıcı yorumları ve yıldızlı puanlama sistemi\n- Günlük/haftalık/aylık kampanya gösterimi\n- Kategori ve mağaza bazlı ürün filtreleme\n- Sepet toplam fiyat hesaplama ve kargo ücreti ekleme",
  "Backend-Mimarisi": "Backend, Python/Flask ile RESTful API şeklinde yapılandırılmıştır. Yorum gönderme, ürün listeleme, sipariş iptali, bakiye güncelleme gibi işlemler API üzerinden yapılır. Gerekli endpoint'ler JSON üzerinden veri alışverişi yapar. Sipariş işlemlerinde backend hem siparişi işler hem de kullanıcının cüzdanını günceller.",
  "Veritabanı-Yapısı": "Veriler genellikle JSON dosyaları üzerinde tutulmaktadır (örneğin `kisiler.json`, `sepet.json`, `siparis.json`). Kullanıcıların bilgileri, ürünler, yorumlar ve sipariş geçmişi bu dosyalar aracılığıyla güncellenir. Ayrıca Flask API ile bu dosyalar arasında etkileşim sağlanır.",
  "Kullanılan-Teknolojiler": "- HTML5 / CSS3\n- Vanilla JavaScript\n- Python 3 / Flask\n- JSON veri dosyaları\n- Font Awesome ve Ionicons ikon setleri\n- Yerel sunucu (localhost) ile çalışan yapı",
  "resim": "img/marketing.png",
  "resim2": "img/marketing2.png",
  "resim3": "img/marketing3.png",
  "resim4": "img/marketing4.png",
  "resim5": "img/marketing5.png",
  "resim6": "img/marketing6.png",
  "resim7": "img/marketing7.png",
  "resim8": "img/marketing8.png",
  "resim9": "img/marketing9.png",
  "resim10": "img/marketing10.png",
  "resim11": "img/marketing11.png",
  "resim12": "img/marketing12.png",
  "resim13": "img/marketing13.png",
  "resim14": "img/marketing14.png",
  "resim15": "img/marketing15.png",
  "video": "video/marketing.mp4"
},

  {
      "id": 5,
      "Proje-Adı": "Anıl Bank – Online Bankacılık ve Kullanıcı Yönetim Sistemi",
      "özet": "Anıl Bank; kullanıcıların kayıt olabildiği, giriş yapabildiği, bilgilerinin tutulduğu, güncellenebildiği ve para transferi gerçekleştirebildiği tam kapsamlı bir bankacılık sistemidir.",
      "genel-amaçı": "Kullanıcılara dijital bir banka deneyimi sunmak ve işlemlerini çevrimiçi gerçekleştirebilecekleri, güvenli, kullanıcı dostu, işlevsel ve interaktif bir platform oluşturmaktır. Bu proje ile kullanıcılar hem bireysel bankacılık işlemlerini (para gönderme, bakiye görüntüleme, yatırım vadeleri) gerçekleştirebilir hem de sistemdeki bilgilerinin yönetimini sağlar. Aynı zamanda sistem yöneticileri (admin) tüm kullanıcıları görüntüleyip düzenleyebilir, silebilir ya da yeni kullanıcılar oluşturabilir. Bu yapı, hem frontend arayüz hem de backend API servisi olarak detaylı mimariyle desteklenmiştir.",
      "Projenin-Amacı": "Sistemin amacı, geleneksel bankacılık işlemlerini (giriş, para transferi, bakiye görüntüleme, yatırım getirisi hesaplama, kullanıcı bilgisi düzenleme gibi) internet tabanlı bir platforma taşıyarak tüm bu işlemleri kullanıcıya sunmaktır. Her kullanıcıya özel IBAN atanır, yatırım vadelerine göre faiz hesaplamaları yapılır ve günlük/aylık/yıllık oranlara göre para artışı sistemsel olarak güncellenir. API aracılığıyla bu işlemler her gün planlayıcı (scheduler) üzerinden otomatik olarak gerçekleştirilir. Sistem tüm kullanıcı verilerini `kisiler.json` üzerinde tutar ve güncellenen bilgileri `data.json` dosyasına aktarır. API üzerinden yapılan tüm işlemler bu verileri yönetir. Ayrıca kullanıcı arayüzü sade, kullanıcı dostu, responsive ve işlevsel olup, modern bankacılık hizmetlerini örnekler.",
      "Teme-Özellikler": "- Kullanıcı kayıt ve giriş sistemi (form tabanlı ve doğrulamalı)\n- Her kullanıcıya otomatik IBAN oluşturma\n- Günlük, aylık ve yıllık vadeli mevduat seçimi ve faiz oranına göre otomatik hesap artışı\n- Giriş yapıldıktan sonra bilgilerin HTML arayüzünde gösterimi\n- Bilgi güncelleme sayfası ile kullanıcının adres, telefon, vade ve bakiye bilgilerini düzenleyebilmesi\n- Transfer modülü ile başka kullanıcıya IBAN üzerinden para gönderimi (otomatik işlem ücreti kesintili)\n- Admin paneli ile kullanıcıları tablo halinde görme, düzenleme, silme ve adres güncelleme\n- Gerçek zamanlı döviz kuru entegrasyonu (arayüzde gösterim amacıyla yerleştirilmiş)\n- Her işlem ayrı `islem.json` dosyasında zaman damgası ile loglanır\n- Flask API ile tüm veri işleme işlemleri yapılır (login, kayıt, silme, güncelleme, transfer, vb.)\n- Arayüzde görsel carousel (slider), döviz bülteni, fonksiyon butonları ile modern kullanıcı deneyimi",
      "Backend-Mimarisi": "Python (Flask) tabanlı RESTful API mimarisi kullanılmıştır. API endpoint’leri kullanıcı yönetimi, giriş/kayıt, transfer, adres güncelleme, veri güncelleme ve işlem geçmişi sağlamak üzere yapılandırılmıştır. Her endpoint gelen JSON veriyi işler ve `kisiler.json` ile `data.json` dosyalarını yönetir. Transfer işlemleri sırasında bakiye kontrolü yapılır ve işlem geçmişi `islem.json` dosyasına zaman bilgisi ile yazılır. Ayrıca, yatırım vadesi sistemi her gün Flask uygulamasına bağlı `apscheduler` zamanlayıcısı sayesinde otomatik olarak çalışır ve vadeye göre faiz oranını hesaba ekler. Yani sistem aktif çalışırken kullanıcıların parası otomatik artar. Sistem ayrıca IBAN üretimini kendisi yapar ve her kullanıcıya farklı bir numara verir.",
      "Veritabanı-Yapısı": "kisiler.json → Tüm kullanıcı bilgilerini tutar. İçeriğinde her kullanıcıya ait id, isim, soyisim, telefon_no, ülke, adres, hesaptaki_para, kullanıcı adı, şifre, iban, vade, kayıt tarihi (tarih), faiz oranı (oran) ve son_guncelleme_tarihi gibi alanlar yer alır. Bu dosya tüm işlemlerin temelini oluşturur.\ndata.json → Sisteme en son giriş yapan kullanıcının bilgilerini geçici olarak tutar. Bu veri kullanıcıya özel sayfalarda görüntüleme, tahmin, bakiye veya form ön doldurma gibi işlemlerde kullanılır.\nislem.json → Tüm para transferlerinin geçmişini tutar. Her işlemde gönderenin ve alıcının adı, soyadı, IBAN'ı, id’si, gönderilen miktar (amount) ve işlem tarihi (date) kaydedilir. Sistem, bu dosya üzerinden işlem geçmişini gösterir ve takip eder.\noran → Sistemde her kullanıcı için vadeye göre farklı faiz oranları vardır. Bu oranlar kullanıcı kaydı sırasında ya da admin tarafından atanır. (örn: günlük %0.1, aylık %2, yıllık %10 gibi).\nvade → Kullanıcının seçtiği yatırım süresidir. 'günlük', 'aylık' veya 'yıllık' seçenekleri üzerinden sistem, yatırımı buna göre hesaplayarak faiz ekler.\nadmin işlemleri → Admin paneli `adminston.html` dosyasında DataTables ile kullanıcıları yönetir. Admin kullanıcıları düzenleyebilir, silebilir veya yeni kullanıcı ekleyebilir. Ayrıca ayrı bir adres güncelleme popup’ı ve şifre değişim alanı mevcuttur.\nlogin işlemleri → Kullanıcı adı ve şifre POST isteğiyle `/api/login` endpoint'ine gönderilir. Buradan kimlik doğrulaması yapılır. Başarılıysa `data.json` güncellenir.\nsignup işlemleri → Kayıt sırasında girilen bilgiler kontrol edilerek hem `kisiler.json` dosyasına eklenir hem de sisteme yeni bir IBAN otomatik oluşturulur.\nupdate işlemleri → Kullanıcının kişisel bilgilerini (`isim`, `soyisim`, `kullanici_adi`, `şifre`, `para`, `telefon`, `ülke`, `adres`) değiştirmesini sağlar. Yapılan güncelleme hem `kisiler.json` hem `data.json` üzerine yazılır.\ntransfer işlemleri → IBAN'a göre gönderici ve alıcı eşleştirilir. Para gönderiminde 1 USD işlem ücreti düşülerek alıcıya aktarılır. Gönderici bakiyesi düşer, alıcıya eklenir. İşlem detayları `islem.json`'a eklenir.\ntahmin hesaplama → `hesap.html` sayfasında kullanıcı, vade ve tarih seçerek ilerideki parasını tahmin edebilir. Hesaplama sırasında faiz oranı da uygulanarak 'tahmini para' ve 'kar' hesaplanır.\nfaiz güncelleme → `apscheduler` kütüphanesi ile sistem her gün otomatik çalışır ve kullanıcıların vade tipine göre faiz oranını hesaba ekler. Bu işlem sessizce `kisiler.json` üzerinden yapılır ve her kullanıcıya özel son_guncelleme_tarihi kaydedilir.",
      "Kullanılan-Teknolojiler": [
        "HTML5, CSS3",
        "Vanilla JavaScript (form validasyon, dinamik doldurma, AJAX gönderim)",
        "Python 3.10+",
        "Flask (REST API)",
        "Flask-CORS (güvenli istekler için)",
        "apscheduler (günlük faiz hesaplamaları için cron mantığında arka plan işlemleri)",
        "Font Awesome ve Google ikon seti",
        "jQuery + DataTables (admin paneli için)",
        "Localhost tabanlı web sunucusu",
        "JSON dosya tabanlı veri kaydı"
      ],
        "resim": "img/anılbank.png",
        "resim2": "img/anılbank2.png",
        "resim3": "img/anılbank3.png",
        "resim4": "img/anılbank4.png",
        "resim5": "img/anılbank5.png",
        "resim6": "img/anılbank6.png",
        "resim7": "img/anılbank7.png",
        "resim8": "img/anılbank8.png",
        "resim9": "img/anılbank9.png",
        "resim10": "img/anılbank10.png",
        "video": "video/anılbank.mp4"
  },{
  "id": 6,
  "Proje-Adı": "MoodMatch – Ruh Haline Göre Film, Müzik, Dizi ve Oyun Öneri Platformu",
  "özet": "MoodMatch; kullanıcıların ruh haline göre kendilerine uygun film, müzik, dizi ve oyun içeriklerini keşfetmesini sağlayan interaktif bir öneri sistemidir. Modern, responsive ve kullanıcı dostu tasarımı ile 4 ana kategoride öneriler sunar. Her sayfa kendi API’sinden verileri çeker, kullanıcı ruh haline göre filtreleme yapılır, rastgele öneriler veya AI destekli akıllı seçimler sunulur.",
  "genel-amaçı": "Kullanıcının ruh haline göre eğlenceli içerikleri (film, oyun, müzik ve dizi) tek bir çatı altında sunmak ve kullanıcıya özel filtreleme, önerme ve yönlendirme işlemlerini otomatikleştirmektir. Ruh haline göre kategorize edilmiş içeriklerle kullanıcı deneyimini daha keyifli hale getirir.",
  "Projenin-Amacı": "Ruh hali girişi ile çalışarak kullanıcılara uygun içerikler (mutluysan komedi, yalnızsan drama, enerjiksen aksiyon vs.) sunmak. Ayrıca seçilen ruh haline göre tür, platform ve yıl gibi filtreleri otomatik ayarlayarak önerileri sadeleştirmek. Kullanıcı isterse bu içerikleri detaylı olarak gezebilir veya ilgili kategoriye yönlendirilir.",
  "Temel-Özellikler": "- Ruh hali seçimine göre içerik filtreleme (mutlu, üzgün, yalnız, enerjik, vs.)\n- Film, dizi, müzik ve oyun sayfaları\n- Her kategori için ayrı API ile veri çekme\n- Film ve dizilerde TMDB, müzikte Last.fm, oyunlarda RAWG API kullanımı\n- Rastgele öneri sistemleri (her sayfa yenilendiğinde öneriler değişir)\n- Yapay zeka (chatbot tarzı) öneri modülü\n- Responsive navbar ve dropdown menüler\n- Kategorilere özel filtreleme: yıl, tür, ruh hali, platform\n- Hover ile açılan menüler, ikonlu etkileşimli tasarım\n- Kullanıcı arayüzünde font-awesome ikonlar ve animasyonlu bölümler",
  "Backend-Mimarisi": "Proje mostly frontend ağırlıklıdır fakat JavaScript üzerinden API istekleri ile backend verileri alınır. Her kategori için (movie.js, tv.js, music.js, game.js) ayrı JS dosyaları ile dinamik veri çekilir. Ayrıca AI arama modülü HuggingFace gibi servislerle chat tabanlı cevap oluşturmak için ayarlanmıştır. PHP ile proxy API gibi bağlantılar sağlanmıştır.",
  "Veritabanı-Yapısı": "Veritabanı yerine doğrudan dış API’lerden veri çekilmektedir. Ruh haline göre filtreleme için sabit haritalama listeleri (`moodGenreMap`, `moodTagMap` vs.) kullanılır. AI öneri modülü, kullanıcıdan alınan 'ruh hali' ve 'kategori' bilgisine göre cevap üretir ve gerekirse yönlendirme yapar.",
  "Kullanılan-Teknolojiler": [
    "HTML5, CSS3",
    "Vanilla JavaScript (DOM, Event, Fetch API)",
    "Font Awesome (ikonlar)",
    "Chat-based AI öneri (HuggingFace / LLaMa3)",
    "External API: TMDB, RAWG, Last.fm",
    "PHP (AI API entegrasyonu için)",
    "Responsive Web Design",
    "Dropdown navigation bar (Manychat stili)"
  ],
 "resim": "img/moodmatch.png",
"resim2": "img/moodmatch2.png",
"resim3": "img/moodmatch3.png",
"resim4": "img/moodmatch4.png",
"resim5": "img/moodmatch5.png",
"resim6": "img/moodmatch6.png",
"resim7": "img/moodmatch7.png",
"resim8": "img/moodmatch8.png",
"resim9": "img/moodmatch9.png",
"resim10": "img/moodmatch10.png",
"resim11": "img/moodmatch11.png",
"resim12": "img/moodmatch12.png",
"resim13": "img/moodmatch13.png",
"video": "video/moodmatch.mp4"

}

  
];

// === PROJE KARTLARINI YÜKLE ===
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projeContainer");
  if (!container) return;

  container.innerHTML = "";

  const unique = data.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);

  unique.forEach(proje => {
    const kart = document.createElement("div");
    kart.classList.add("proje-kart");

    kart.innerHTML = `
      <img src="${proje.resim}" alt="${proje["Proje-Adı"] || proje.isim}" class="proje-resim">
      <div class="proje-icerik">
        <h3>${proje["Proje-Adı"] || proje.isim}</h3>
        <p>${proje.özet}</p>
      </div>
      <div class="proje-btn">
        <a href="proje.html?id=${proje.id}"><i class="fas fa-arrow-right"></i> Projeye Git</a>
      </div>
    `;

    container.appendChild(kart);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buyukResim = document.getElementById("buyukResim");
  const galeriKucuk = document.querySelector(".galeri-kucuk");
  const solOk = document.getElementById("solOk");
  const sagOk = document.getElementById("sagOk");

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const proje = data.find(p => p.id === id);
  if (!proje) return;

  const resimListesi = Object.keys(proje)
    .filter(k => k.startsWith("resim"))
    .sort()
    .map(k => proje[k]);

  let aktifIndex = 0;

  if (buyukResim && resimListesi.length > 0) {
    buyukResim.src = resimListesi[0];
  }

  if (galeriKucuk) {
    galeriKucuk.innerHTML = "";
    resimListesi.forEach((url, i) => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = `Resim ${i + 1}`;
      img.classList.add("kucuk-resim");
      img.style.width = "100px";
      img.style.height = "100px";
      img.addEventListener("click", () => {
        aktifIndex = i;
        buyukResim.src = resimListesi[aktifIndex];
      });
      galeriKucuk.appendChild(img);
    });
  }

  solOk?.addEventListener("click", () => {
    aktifIndex = (aktifIndex - 1 + resimListesi.length) % resimListesi.length;
    buyukResim.src = resimListesi[aktifIndex];
  });

  sagOk?.addEventListener("click", () => {
    aktifIndex = (aktifIndex + 1) % resimListesi.length;
    buyukResim.src = resimListesi[aktifIndex];
  });
});


const urlParams = new URLSearchParams(window.location.search);
const projeID = parseInt(urlParams.get("id"));
const proje = data.find(p => p.id === projeID);

if (proje) {
  const bilgiKutu = document.getElementById("projeBilgiAlani");
  bilgiKutu.innerHTML = `
    <h2><i class="fas fa-folder-open"></i> ${proje["Proje-Adı"]}</h2>
    
    <p><i class="fas fa-bullseye"></i> <strong>Genel Amaç:</strong> ${proje["genel-amaçı"]}</p>
    <p><i class="fas fa-flag-checkered"></i> <strong>Amacı:</strong> ${proje["Projenin-Amacı"]}</p>
    <p><i class="fas fa-list-ul"></i> <strong>Temel Özellikler:</strong> ${proje["Teme-Özellikler"]}</p>
    <p><i class="fas fa-server"></i> <strong>Backend Mimarisi:</strong> ${proje["Backend-Mimarisi"]}</p>
    <p><i class="fas fa-database"></i> <strong>Veritabanı Yapısı:</strong> ${proje["Veritabanı-Yapısı"]}</p>
    <p><i class="fas fa-cogs"></i> <strong>Teknolojiler:</strong> ${proje["Kullanılan-Teknolojiler"]}</p>
  `;
}
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projeID = parseInt(urlParams.get("id"));

  const proje = data.find(p => p.id === projeID);
  const alan = document.getElementById("bilgiKartlariAlani");

  if (!proje || !alan) return;

  const kart = document.createElement("div");
  kart.classList.add("info-kart");

  kart.innerHTML = `
    <h3><i class="fas fa-folder-open"></i> ${proje.isim || proje["Proje-Adı"]}</h3>
    <p><i class="fas fa-lightbulb"></i> ${proje.özet}</p>
  `;

  alan.appendChild(kart);
});

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("videoKartAlani");
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  const proje = data.find(p => p.id === id);

  if (!proje || !proje.video) return;

  const kart = document.createElement("div");
  kart.className = "video-kart";

  kart.innerHTML = `
    <div class="video-container">
      <video controls>
        <source src="${proje.video}" type="video/mp4">
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
   
  `;

  container.appendChild(kart);
});


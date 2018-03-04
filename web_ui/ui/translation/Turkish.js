
var all_country 	= ["Avustralya","Avusturya","Belçika","Bulgaristan","Hırvatistan","Çek Cumhuriyeti","Danimarka","Finlandiya","Fransa","Almanya",
						"Yunanistan","Macaristan","İtalya","Lüksemburg","Hollanda","Norveç","Polonya","Portekiz","Romanya","Rusya",
						"Sırbistan","Slovenya","İspanya","İsveç","İsviçre","İngiltere","Yeni Zelanda"," "/*Arab*/,"Estonya"," "/*Hebrew*/,
						"Letonya","Slovakya","Türkiye","İrlanda","*","Filipinler","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Çin","*","*","*","*","*","*","Diğerleri","Litvanya"/*新添加的，底层结构体中没有*/,"Ukrayna"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litvanya"];							
				
var all_language 	= ["Çekçe","*","Danca","*","*","Almanca","İngilizce","İspanyolca","Yunanca","Fransızca",
						"Hırvatça","*","İtalyanca","Macarca","Felemenkçe","Norveççe","Lehçe","Portekizce","Rusça","Romence",
						"Slovence","Sırpça","Fince","İsveççe","Bulgarca","Slovakça","*","*","Kelt dili","*",
						"Galce","Arapça","Ирландский","Letonyaca","*","Türkçe","Estonyaca","Felemenkçe"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Orijinal Ses"/*Qaa*/,"Tanımsız"/*Undetermined*/,"*","Bilinmiyor",
						"Tanımsız","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Bask dili","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Белорусский","*","*","Katalan dili","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiçya lehçesi","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","İzlandaca","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litvanyaca",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantik ","*","*","*","*",
						"*","*","*","Samice","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teleteks",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraynaca","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Kapalı","Açık"];
var okCancel		= ["Tamam","İptal"];
var yesNo			= ["EVET","HAYIR"];
var level			= ["Kapalı","Düşük","Yüksek","Orta"];
var manualAuto		= ["Manuel","Oto"];
var homeShop		= ["Giriş","Mağaza"];
var picPreset		= ["Standart","Dinamik","Doğal","Sinema","Dijital Sinema","Kişisel"];
var picColorTemp	= ["Serin ","Normal","Sıcak","Sıcak2","Kullanıcı "];
var pic3dNavig		= ["Manuel","Oto","Yarı otomatik"];
var _3dOptions		= ["3D Modu","3D'den 2D'ye","Sl-Sğ Değiştir","Alan Derinliği"];
var pic3DMode       = ["Kapalı","2D'den 3D'ye","Yan Yana","Üst ve Alt","Satır Ekleme"];
var picEcoOptions	= ["Enerji tasarrufu","Işık sensörü","Yerel karartma","Karışık karartma"];
var picGeoOptions	= ["Geometri","Yatay Konum","Dikey Konum","Saat ","Safha "];//Geometry 无翻译
var picAdWhiteBal	= ["R Kazancı ","G Kazancı","B Kazancı","R Dengesi","G Dengesi","B Dengesi"];
var souOptions		= ["Ses ayarı","Denge","Ses gecikmesi","SRS TSHD","Oto. Ses Sev. Kont.",
						"SPDIF Tipi ","SPDIF Gecikmesi","TV yerleştirme","Ses Dili ","Ses Kanalı ",
						"Ses Açıklaması","Dijital ses çıkış türü","Dolby profesyonel ayar"];
var soundOutputoptions =["TV Hoparlörü DAP çıkışı","Harici AVR şifreleme çıkışı"];
var inteligenteqoptions 	=["Odaklı","Zengin"];						
var souSpdifType	= ["Oto"/*Dolby*/,"PCM","Kapalı"];
var colorSpace      = ["Oto","Ana dil","Kullanıcı ","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Ortam sanallaştırıcı","Diyalog geliştirici","Bas geliştirici","Akıllı ses","Akıllı medya","Grafik EQ","Akıllı EQ"];
var chOptions		= ["Kanal Tarama","Kanal Listesi ","EPG","Düzenleyici","Kanal kontrolleri",
						"zaman kaydırma","Altyazı ","Teleteks","Kanal Listesi Tipi"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Sinyal gücü","Sinyal Kalitesi","Frekans (KHz)","Hizmet Kodu","Ağ Kodu","Ağ adı"];
var chScanOptions	= ["Ülke ","Ayar modu","Otomatik arama","Taramayı Güncelle ","Analogue Elle Tarama",
						["Kablo manuel taraması","Anten elle taraması","Uydu manüel ayarı "],"Uydu anteni kurulumu","Favori ağ seçimi","Kanal listesini temizle",];
var favNetDes		= "Lütfen en sevdiğiniz ağı seçin";
var tuner			= ["Kablo","Anten","Uydu"];//Satelite 无翻译
var passError		= "Şifre yanlış \ Lütfen tekrar girin! ";
var chType			= ["Analog Kanallar : ","Dijital Kanallar: "];
var chScanStatus	= ["Durum: Tarıyor","Durum: Tarama Tamamlandı ","Durum: Tarama İptal Edildi ","Durum: Tarama Hatası "];
var chScanPara		= ["Frekans (KHz)","Modülasyon","Sembol hızı (Ksym/s)","Ağ Kodu","Sistem",
						"İnce ayar","Sinyal gücü","Sinyal Kalitesi","Tarama Modu","Kanal kimliği"];
var chScanParaMHZ      = ["Frekans (MHz)"];
var chAtvManSys		= ["BATI AVR ","DOĞU AVR ","Birleşik Krallık","Fransa"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Oto"];
var chCleanDes		= "Kanal listesini temizlemek istiyor musunuz?";
var chDeletDes		= "Kanalı silmek istiyor musunuz?";
var chOperator		= ["Ziggo","UPC","Diğerleri"];
var chScanType		= ["Dijital & Analog","Dijital","Analog"];
var chScanMode		= ["Tam","Gelişmiş","Hızlı"];
var bookingModes	= ["Kayıt  ","Hatırlatıcı"];
var dayName			= ["Paz","Pts","Sal","Çar","Per","Cum","Cts"];
var monthName		= ["Oca", "Şub","Mar","Nis","Mayıs","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];
var filter			= ["Filter","Tip ","Alt türler  "];
var chEpgFirstGenre	= ["Sinema","Haberler","Şov","Spor","Çocuk","Müzik","Sanat ","Sosyal","Eğitim","Hobi","ÖZEL "];
var chEpgSecondGenre= [["Drama","Polisiye","Macera ","Bilim Kurgu ","Komedi ","Dizi ","Romantik ","Ciddi","Yetişkin Filmi "," "," "," "],
						["Güncel olaylar ","Hava Durumu ","Haber Dergisi ","Belgesel ","Tartışma "," "," "," "," "," "," "," "],
						["Şov","Yarışma Programı","Değişik Gösteri ","Talk Show"," "," "," "," "," "," "," "," "],
						["Spor","Özel Etkinlikler ","Spor Magazini ","Futbol ","Tenis",
							"Takım Sporları ","Atletizm ","Motor Sporları ","Su Sporları ","Kış Sporları ",
							"Binicilik","Dövüş Sporları "],
						["Çocuk","Okul öncesi çocuk ","6 ila 14 yaş için eğlence ","10 ila 16 yaş için eğlence ","Bilgisel ","Çizgifilm "," "," "," "," "," "," "," "],
						["Müzik","Rock","Ciddi","Halk ","Jazz","Müzikal ","Bale"," "," "," "," "," "],
						["Sanat ","Sahne Sanatları ","Güzel Sanatlar ","Din ","Popüler kültür ",
							"Literatür","Film","Deneysel ","Yayıncılık ","Yeni Medya ",
							"Sanal dergileri","Moda "],
						["Sosyal","Magazin ","Ekonomi","Özel insanlar "," "," "," "," "," "," "," "," "],
						["Eğitim","Doğa ","Teknoloji ","Tıp ","Yabancı Ülkeler ","Sosyal bilimler ","İleri Eğitim ","Diller "," "," "," "," "],
						["Boş vakit hobileri ","Turizm ","El Sanatları ","Otomobil","Zindelik ve Sağlık ","Aşçılık ","Reklamcılık ","Bahçıvanlık "," "," "," "," "],
						["Asıl dil ","Siyah ve beyaz ","Yayınlanmamış ","Canlı Yayın "," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanal Atlama ","Kanalları Sıralama","Kanal Düzenleme ","Kanal silme","kanal takas","kanal ekleme"];
var chEditPara 		= ["Ağ adı","Kanal Numarası","Kanal Adı","Frekans ","Renk sistemi ","Ses sistemi "];
var chSatTitles		= ["Uydu Tipi","Uydu anteni kurulumu","Uydu Seç"];
var chSatEidtOptions= ["Uydu adı","Konum","LNB Güç","LNB frekansı (MHz)","Diseqc girişi",
						"Ton 22KHz","sesi patlama","Frekans (KHz)","Sembol hızı (Ksym/s)","Polarizasyon",
						"Sinyal gücü","Sinyal Kalitesi","Uydu durumu"];
var chSatAutoPromt	= [["Tümü","Ağ"],
						["Tümü","Boş"]];
var chSatAutoScanOptions=["Uydu Seç","Tarama Modu","Kanallar"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Evrensel",];
var chSatDiSEqCInput= ["Engelle","A","B","C","D"];
var chSatTone22KHz	= ["Oto","Açık","Kapalı"];
var chSatToneBurst	= ["Engelle","sesi patlama A","sesi patlama B"];
var chSatPolarization= ["Yatay","Dikey"];
var chSatSetupOptions=["Anten tipi","Ayar","Band frekansı"];
var chSatAntennaType= ["Tek Kablolu","Evrensel"];
var chSatUserBands	= ["Kullanıcı bandı 1","Kullanıcı bandı 2","Kullanıcı bandı 3","Kullanıcı bandı 4","Kullanıcı bandı 5","Kullanıcı bandı 6","Kullanıcı bandı 7","Kullanıcı bandı 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Kullanıcı tanımlı"];
var pleaseSelectSat = "Lütfen ilk önce uyduları seçin!";
var subOptions		= ["Altyazı ","Dijital Altyazı Dili ","Dijital Altyazı Dili 2","Altyazı Tipi "];
var ttxOptionsCon      = ["Syf Dili Şifr. Çözlyor","Dijital Teleteks Dili "];
var subType			= ["Normal","İşitme Engelli "];
var netIntf     	= ["Ethernet ","Kablosuz"];
var netConnDes		= ["TV ağ bağlantısını test ediyor.\nLütfen bekleyin",
						"Ağ bağlantı testi başarılı!",
						"Ağ bağlantı testi başarısız."];
var netSsidError	= "SSID geçerli uzunluğu 1~32 karakterdir. Lütfen SSID'yi kotrol edin.";
var netOthers		= ["PIN Kodu "];
var netWlessAutoDes	= ["Lütfen aşağıdaki PIN kodunun, TAMAM’a tıklamadan önce Erişim Noktasına yüklendiğinden emin olun.",
						"TAMAM’a tıklamadan önce lütfen Erişim Noktasındaki düğmeye 120 saniye içinde basın."];
var netConnRemind	= ["Şifre yanlış !",
						"Bağlanıyor. Lütfen bekleyin!",
						"Bağlantı başarılı ve IP alındı!",
						"Bağlantı Hatası",
						"TV AP'leri arıyor\nLütfen bekleyin",
						"TV'ye bağlı bulunan kablosuz bir aygıt yok!"];
var netWireIpOptions= ["IP ayarı","Adres türü","IP adresi","Altağ maskesi","Varsayılan ağ geçidi","Asıl DNS","Yardımcı DNS"];
var netWireConnRemind= ["Lütfen 0 ile 255 arasında bir değer girin.",
						"Başarıyla bağlandı!",
						"Lütfen geçerli bir adres yazın",
						"Başarıyla bağlandı!",
						"Bağlantı başarısız!",
						"Bağlanıyor. Lütfen bekleyin!",
						"Lütfen 1 ile 223 arasında bir değer girin."];
var netFlixOptions	= ["Engelle","ESN"];
var netFlixDes	 	= ["Engellemek istediğinize emin misiniz?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Yazılım yükseltme";
var netUpdateDialogTitle = "Yazılım güncelleme";
var netBGDownloadTitle 	= "İndiriliyor";
var netUpdateLoadingPrompt= ["Yükseltme aranıyor, lütfen bekleyin!",
							"Yazılım indiriyor... Lütfen bekleyin!",
							"Lütfen yazılım yükseltme esnasında TV setini kapatmayın!",
                            "Zorunlu yazılım güncelleştirmesi arka planda otomatik olarak indirilir!"];
var netUpdatePrompt= ["Tebrikler, artık yazılım sürümünüz yeni!",
						"Yeni yazılım sürümü XXXX bulundu. Şimdi indirmek istiyor musunuz? Bu işlem ağ durumunuza bağlı olarak biraz vakit alabilir.",
						"Oturum açamadı!",
						"Veril alınamadı, lütfen daha sonra tekrar deneyin!",
						"Temizlik Güncelleme XML başarısız!",
						"Bağlantı Hatası",
						"Yazılımı karşıdan yükleme başarılı oldu. Flash işlemini başlatmak istiyor musunuz?",
						"Veri kaybı! İndiremedi!",
						"Paketi kontrol edemedi, lütfen tekrar deneyin!",
						"Ağ normal değil. Lütfen kontrol edin ve tekrar bağlanın.",
						"Güncelleyemedi. Lütfen TV'yi yeniden başlatın!",
						"Yükseltme dosyası beklenmedik şekilde silindi. Lütfen ağ vasıtasıyla yükseltme işlemini tekrarlayın.",
						"Yazılım arka planda başarılı şekilde indirildi. Yükseltme işlemini yapmak istiyor musunuz?"];
var netUpdateButtonText = ["İndir", "Güncelle", "Sonra", "Hiçbir zaman", "Tamam","Devam"];
var autoDetectPrompt = ["Yeni yazılım sürümü XXXX bulundu. Şimdi indirmek istiyor musunuz? Bu işlem ağ durumunuza bağlı olarak biraz vakit alabilir.",
						"Yeni yazılım sürümü XXXX bulundu. Şimdi güncellemek istiyor musunuz?",
						"Ağ vasıtasıyla yükseltme işlemi son seferde iptal edildi. Yükseltme işlemini tekrar yapmalısınız.",
                        "Yeni yazılım sürümü XXXX indirme tamamlanmadı. Devam etmek istiyor musunuz?",
                        "Yazılım indirildi, şimdi güncellemek istiyor musunuz?"];
var sysOptions		= ["E-Kılavuz","Menü dili","Zamanlayıcı","Kilitle","Giriş Ayarları",
						"Yazılım yükseltme","Yer","HbbTV modu","Çerezler","Ortak Arayüz ",
						"Gelişmiş ayarlar","Alışverişi sıfırla","LED Gösterge"];
var sysResetDes		= "Emin misiniz ?";
var sysMenuLangOptions=["Dil","Tercih edilen sesli dil","Tercih edilen 2. ses dili"];
var sysTimerOptions	= ["Zaman Dilimi ","Bölge adı","Saat ","Uyku Zamanlaycs ","Oto. bekleme modu", "Country region"];

var sysTimeZone		= ["Yayıncı Olarak ","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Kapalı","10 Dak.","20 Dak.","30 Dak.","40 Dak.","50 Dak.","60 Dak.","90 Dak.","120 Dak."];
var sysStandby		= ["Kapalı","4 Saat","6 Saat","8 Saat"];
var sysRegionName	= ["Madrid ","Kanarya"];
var sysClockOptions	= ["Otomatik Eşzamanlama","Tarih","Saat","Aygıt Açma Zamanl.","Zamanlayıcı",
						"Kanala güç ver","Aygıt Kapama Zam.","Zamanlayıcı"];
var sysTimer		= ["Kapalı","Günlük","Bir kez"];

var sysInputSet		= ["Etiket yok","DVD","Mavi ışın","HDD","DVDR",
						"HD kyd.","Oyun  ","VCR","PC","Dijital STB",
						"HD dij STB","Kamera","Kaydedici","Diğer"];
var sysAvVideoInput	= ["Oto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["USB ile","Ağ Kodu ile","Kanal ile"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Uyduda yeni yazılım bulunamadı!",
						"Yeni yazılım sürümü XXXX bulundu. Şimdi güncellemek istiyor musunuz?",
						"Lütfen bir USB aygıtı takın.",
						"Paketi kontrol edemedi, lütfen tekrar deneyin!",
						"Ltf firma yzlm güncelleştirilirken USB donanım kilidini ÇIKARMAYIN ve TV'yi KAPATMAYIN!",
						"Yazılım başarıyla güncellendi.\nTV daha sonra otomatik olarak yeniden başlatılacak!",
						"Yeni yazılım sürümü XXXX bulundu. Şimdi indirmek istiyor musunuz? Bu işlem ağ durumunuza bağlı olarak biraz vakit alabilir.",
						"İndiriliyor",
						"Yazılımı karşıdan yükleme başarılı oldu. Flash işlemini başlatmak istiyor musunuz?",
						"Gncllme bşrsız!",
						"Güncelleme dosyaları aranıyor",
						"Yazılım başarıyla güncelleştirildi.\nLütfen TV’yi yeniden açın."];
var sysProductInfo	= ["Mevcut sürüm","Ürün adı","Üreticinin adı","Şasi adı"];
var sysCiDes		= ["CI kartı koyulmadı."];
var sysAdOptions	= ["DivX(R) kaydı","DivX(R) kayıt silme","T-Link","Authorization Error","Kayıt iptali onayı",
						"Kira Onayı","Kira. süresi dolmuş","Bluetooth bildirim kimliği"];
var sysRegistDes	= ["DivX korumalı videoları oynatmak için aygıtınızı kaydettirmelisiniz",
						"Kayıt Kodu:",
						"http://vod.divx.com sitesine kaydedin"];
var sysDregistDes	= ["Kayıt silme kodu:",
						"\"\"\"http://vod.divx.com\"\" adresinde kaydınızı silin.\"",
						"Kayıt işlemine devam edilsin mi?"];
var mediaAuthorization = ["Cihazınızın, bu DivX(R) korumalı videoyu oynatma yetkisi bulunmamaktadır."];
var deregistrationConfrimation = ["Aygıtınız önceden kaydedildi.","Kaydı kaldırmak istediğinizden emin misiniz?"];
var rentalConfirmation = "DivX(R) kiralama, YYYY izleme üzerinden XXXX kez kullanıldı. Devam edilsin mi?";
var rentalExpired 	= "DivX(R) kiralaması YYYY görüşten XXXX'ini kullandı. DivX kiralama süresi doldu.";
						
						
var sysLockOptions	= ["Kanal kilidi","Zaman aralık kilidi","Ebeveyn engelleme","Giriş Engelleme ","Ön panel kilidi","Kilitleme kurulumu",
						"Şifreyi Değiştir ","Maks ses","Tümünü Temizle "];
var sysTimeIntervals= ["Kilit türü","Başlangıç zamanı","Bitiş zamanı"];
var sysRatingOptions= ["Hiçbiri","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (İspanya)"];
var changePass		= ["Şifreyi Değiştir ","Yeni Şifre ","Şifreyi Doğrula "];
var changePassDes	= ["Şifre yanlış \ Lütfen tekrar girin! ",
						"Şifreler uyuşmadı.\nLütfen tekrar girin!",
						"Parola başarıyla belirlendi!",
						"Bu kod parola olarak ayarlanmak için çok basit.\nLütfen tekrar girin!"];
var sysPowerOnChOptions= "Mod seç";
var sysPowerOnCh	= ["Son durum","Kullanıcı seçimi"];
var netWlessSecu    = ["Aç","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Hiçbiri","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Desteklenmiyor"];
var netWlessSecu3	= ["Hiçbiri","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Desteklenmiyor"];
var netOptions		= ["İnternet bağlantısı","Arayüz","Kablosuz ayarlar","IP ayarları","Bilgi",
						"Bağlantı testi","DLNA","TV uzaktan","Netflix ayarları","WiFi TV bağlantısı",
						"Adres türü","IP adresi","Altağ maskesi","Varsayılan ağ geçidi","Asıl DNS",
						"Yardımcı DNS","SSID","BSSID","Lütfen SSID girin:","Kullanıcı Kimliği"];
var chEditDes		= ["Çift kanal numarası!","Mevcut karakteri silmek için Kırmızı Düğmeye basın!","Geçersiz Kanal Numaraları."];
var chEpgNoProgram	= "Şuanda hiçbir program bilgisi yok, lütfen önce kanalları arayın!";
var chEpgWords		= ["Program Kılavuzu","Program verileri yok.","Kanal Kitlendi!","Program detayları yok.","Program başlığı yok."];
var chEpgBooking	= ["Zamanlama bilgi", "Kanal Numarası","Başlangıç tarihi","Başlangıç zamanı","Bitiş zamanı",
						"Tekrar türü","Program türü","Ekle","Değiştir","Değiştir",
						"Ekle/Değiştir"];
var epgHotKey		= ["Önceki gün ","Sonraki gün","Filter","Program listesi","Program ekle"];
var chEpgBookRemind	= ["Hatalı Başlangıç Saati","Hatalı Bitiş Saati","Çift Çizelge","Başarıyla Kaydedildi.","Başarıyla silindi."];
var chSchePara		= ["Program listesi","Başlangıç zamanı","Başlangıç tarihi","Program Başlığı","Kanal Adı",
						"Süre","Yinele","Çizelge","Düzenle","Sil"];
var dateTimer		= ["Bir kez","Günlük","Haftalık"];
var scheduleDeleteReminds="Bu programı silmek istiyor musunuz?";
var scheduleNoLists	= "Hiçbir program listesi yok. Eklemek için \"Kırmızı\" düğmeye basın.";
var chListWords		= ["Kanal Listesi ","Listeyi Seç","Ayar modu","Favorilere Ekle","Kaldır",
						"Kanal listesi seçin","Tarayıcı modunu seçin","Değiştir"];
var chListType		= ["Tümü","Dijital","Analog","Radyo","Boş","Favoriler"];
var chAutoScanOptions=["Operatörü seçin","Kanal tipi","Otomatik arama"];
var souSoundType	= ["Geçersiz","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam çift",
						"Mono","LL","RR","LR"];
var souPreset		= ["Müzik","Sinema","Net ses","Standart","Kişisel"];
var picAdRgbMode	= ["Kapalı","Sadece Kırmızı","Sadece Yeşil","Sadece Mavi"];
var picAdOptions	= ["Gürültü azaltma","MPEG NR","RGB mode","Dinamik Kontrast","LED Hareket netliği",
						"Ten Tonu ","Film Modu","Oyun Modu","Renk Isısı ","Beyaz Ayarı",
						"Dondur","Siyah Iyileştirme","Overscan","Gama","HDMI Modu ","10P beyaz dengesi","Renk genişletici",
						"Bulanıklık azaltma","Titreme azaltma","Renk alanı","Hareket netliği"];
var pic10Pwhite     = ["Aralık","Kırmızı","Yeşil","Mavi","Sıfırla","Renk","Sarı","Deniz Mavisi","Macenta"];
var picMotionClarity = ["Hareket modu","Hareket enterpolasyonu","LED Hareket netliği","Bulanıklık azaltma","Titreme azaltma","Sıfırla"];
var picMotionMode   = ["Oto","Film","Pürüzsüz","Temizle ","Spor","Müşteri"];
var picResetDes		= "Tüm kişisel ayarlar sıfırlanacak. Seçilen işlemi yapmak istediğinizden emin misiniz?";
var pic10PReset     = "10P beyaz dengesini sıfırlamak istediğinizden emin misiniz?";
var picMotionReset  = "Hareket netliğini sıfırlamak istiyor musunuz?";
var picColorSpaceReset    = "Renk alanını sıfırlamak istediğinizden emin misiniz?";
var picOptions		= ["Resim önayarı ",
						"Arkı ışık","Parlaklık ","Kontrast","Doygunluk ","Ton","Netlik","Renk Isısı ","Ekran Modu ","Oto biçim",
						"Spor geliştirme","3D  ","3D navigasyon","ECO Ayarlar","Geometri",
						"Gelişmiş ayarlar","Resim modunu uygula","Resim sıfırlama"];
var picSize			= ["16:9 biçimi", "4:3 format", "14:9 formatı", "Sinerama",
						"16:9  Zoom", "16:9 uvećanje","14:9 Zoom","Stretch Zoom","Wide Zoom",
						"Zoom 2","Wide Zoom 2","Ekran Doğal Uyumu","Tačkasto","Orijinal","Panorama"];
var others			= ["Ses Seviyesi ","Yayın","Şifre ","Durum","Kaydet","Değiştir","Başlat","Çıkış ","Ara","Sil",
						"Hiçbiri","Otomatik","Tara","Güvenlik","Bağlan","Yenile","Tkr dn","Durdur","Ayarlar","Kanallar",
						"Düzenle","Ekle","Sinyal! ","Bitir","Stereo","Ses","Kaynak","Ses Yok ","İpuçları","Sıfırla",
						"Müşteri","Kurulum","Yükle","Kullanıcı","Klavyeyi kapat","Güvenlik modu","Hergün ","PVR listesi"];
var direction		= ["Sol","Sağ","Yukarı","Aşağı"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Bilinmiyor"];
var soundChannels   = ["Bilinmiyor","Mono","Alt","Çift Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2CH","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Sol","Sağ","Diğerleri"];
var prompts			= ["İzleme ortamınıza en uygun resim ayarlarını ayarlayın.",
						"Parlaklık seviyelerini ayarlayın. 100'e yaklaştıkça parlaklık artar.",
						"Kontrast seviyelerini ayarlayın. 100'e yaklaştıkça resim koyu-açık farklılığı artar.",
						"Doygunluk seviyelerini ayarlayın. 100'e yaklaştıkça renk güçlenir.",
						"Keskinlik seviyelerini ayarlayın. 100'e yaklaştıkça detaylar belirginleşir.",
						"Arka aydınlatma seviyelerini ayarlayın. 100'e yaklaştıkça ekran parlaklaşır.",
						"Renk tonu seviyelerini ayarlayın. Bu ayar renk tonlarını değiştirir.",
						"İzleyeceğiniz programa en uygun resim formatını seçin.",
						"Enerji tasarrufu seçeneklerini yapılandır.",
						"Bir PC'ye bağlarken ekran geometri ayarlarını yapın.",
						"Daha fazla resim gelişmiş ayarlarını seçin.",
						"Tüm resim ayarlarını varsayılana geri yükle.",
						"Kişisel tercihinize uygun bir ses modu seçin.",
						"Sol ve sağ kanal arasındaki ses dengesini ayarlayın.",
						"Ses Geri Alma Sistemi TruSurround HD yüksek ses performansıyla birlikte düşük ve yüksek frekanslarda berraklık sağlar.",
						"TV dijital ses çıkışını ev sinema ses donanımına bağlarken Dijital Arabirim Formatı.",
						"Kişisel tercihinize uyan ses dilini seçin.",
						"Görme Engellilerin televizyon programlarının keyfini çıkarmalarını sağlayın.",
						"TV'nizin resim, ses ve sinyalini test edin.",
						"TV sinyalinize uyan kanal listesi türünü seçin.",
						"Ekranın alt kısmında görüntülenen programın altyazı dilini seçin.",
						"Geçerli kanalın metin ve resimlerini görüntüleyin.",
						"Digital Living Network Alliance. Bir PC gibi ev ağına bağlı diğer cihazlardan müzik, resim ve videoların keyfini çıkarın.",
						"Akıllı telefonunuzdaki içerikleri TV'de görüntüleyin ve akıllı telefonunuzu bir TV kumandası olarak kullanın.",
						"TV'nizin ekranında bir Miracast uyumlu Android cihazdaki içerikleri görüntüleyin.",
						"TV’nize kilit koyun.",
						"Cihazınız için bir ad seçin.",
						"İzleme ortamınızı seçin.",
						"Tüm Sistem Ayarlarını varsayılana geri yükle."];
var initialTitle	= ["Hoşgeldiniz ","İlk kurulum "];
var initialPrompt	= ["İlk Kurulumunuzu yapın ve Heyecan Verici Deneyim Dünyası sizi bekliyor!",
						"Lütfen dilinizi seçin:",
						"Lütfen ülkenizi seçin:",
						"Lütfen yerinizi seçin:",
						"Lütfen ağ bağlantı türünüzü seçin:",
						"Lütfen kablolu ağ bağlantı modunuzu seçin:",
						"xxxxxxxxx bağlantısı başarısız! Lütfen cihazı aşağıdaki Diyagram göre bağlayın veya sıfırlamak için Sol seçin.",
						"xxxxxxxxx bağlantısı kuruldu! Devam etmek için Sağ seçin.",
						"1) TV'niz bir yerleşik Kablosuz Adaptörüne sahip olabilir\n 2) Veya bir Kablosuz USB adaptörü sağlanmış olabilir. Bunu TV'nize bağlayın. Ardından lütfen kablosuz ağ bağlantısı modunu seçin.",
						"Taranıyor. Lütfen bekleyin...",
						"TV'ye bağlı bulunan kablosuz bir aygıt yok!",
						"Aşağıdaki \"İleri\" tuşuna tıklamadan önce lütfen aşağıdaki PIN kodunun AP'ye kurulduğundan emin olun.",
						"Sağ düğmeye basmadan önce 120 saniye içinde AP üzerindeki düğmeye basın!",
						" WPS (Wi-Fi Korumalı Kurulum)",
						"PIN (Kişisel Kimlik Numarası)",
						"PBC (Basmalı Düğme Yapılandırması)",
						"Aşağıdaki içerikler yalnızca bir ağ bağlantısı ile ulaşılabilir. Ağ Kurulumunu atlamak istiyor musunuz?",
						"İndirmeniz için bekleyen yeni yazılım güncellemeleri var ve ağınızın durumuna bağlı olarak indirme işlemi biraz zaman alabilir.",
						"TV’nizin yazılımını güncellemek, en son özellik ve hizmetlerden faydalanmanızı sağlar.",
						"En yeni özellikler ve servislerin keyfini çıkaramayacaksınız. Yazılım Güncellemesini atlamak istiyor musunuz?",
						"Devam etmek için Sağ düğmeye basın.",
						"Güncelleme sırasında gücü kesmeyin aksi halde TV'niz arızalanabilir.",
						"Güncelleştirmek istemiyorsanız, HAYIR seçeneğini seçin.",
						"Güncelleniyor, lütfen bekleyin",
						"Ayrıca SİSTEM/YAZILIM GÜNCELLEME menüsünde yazılımı güncelleyebilirsiniz.",
						"Seçilen ülke parola ayarı yapılmasını istiyor.\nLütfen televizyonunuz için kodu ayarlayın ve onaylayın.",
						"This code is too simple.\nPlease use different digits.",
						"Tebrikler! İlk kurulum tamamlandı. Ana Menüden ve ilgili alt menülerden yapılandırmanızı değiştirebilirsiniz.",
						"Lütfen güvenlik modunu seçin:",
						"Lütfen kablosuz ağ bağlantısı modunu seçin:",
						"Ağ"];
var initNetCabAndDonRe = ["Hiçbir ağ kablosu bağlı değil, lütfen bir ağ kablosu takın!","Yerleşik adaptör veya kablosuz USB adaptörü sağlanmamış."];
var initChPrompt = ["TV Kanal kurulumu","Lütfen Anten tarama türünü seçin.","Otomatik ayarlama devam ediyor...","Aşağıdaki Anten kanalları bulundu:","Lütfen Kablolu arama türünü seçin.","Lütfen aşağıdaki listeden bir operatör seçin.","Lütfen arama bilgisini yapılandırın","Aşağıdaki Kablolu kanallar bulundu:","Lütfen aşağıdaki listeden bir operatör seçin","Lütfen aranacak uyduları seçin veya seçili uyduyu düzenleyin","Lütfen uydu parametrelerini ayarlayın","Aşağıdaki kanallar bulundu, ve kanal taraması Kanal/Kanal Tarama menüsünde yeniden gerçekleştirilebilir"];
var initClockPrompt = ["Ağ tarafından sağlanan zamanı alın!",
						"Lütfen Tarih ve Saati ayarlayın:"];
var initialOptions	= ["Ortam","Ağ Ayarı","Yazılım yükseltme","Kanal Kurulumu","Saat "];
var initialHotkeys	= ["Geri ","Seç","Sonraki"];
var initLocations	= ["Giriş","Mağaza","Gösterim ve Mağaza"];
var initNets		= ["Kablolu","Kablosuz","Bir ağ bağlantım yok"];
var initWireManuals	= ["IP adresi","Altağ maskesi","Varsayılan ağ geçidi","Asıl DNS","Yardımcı DNS"];
var initSoftUpdates = ["Şimdi güncelle","Sonra güncelle"];
var initChannelIns	= ["Devam","Kanalları yüklemek istemiyorum"];
var initChScanTypes	= ["Dijital & Analog","Dijital","Analog","Aramak istemiyorum"];
var initChDvbts		= ["Anten ATV kanalları:","Anten DTV kanalları:"];
var initChDvbcs		= ["Kablolu ATV kanallar:","Kablolu DTV kanallar:"];
var initChDvbss		= ["Uydu kanalları:"];
var initChDvbSOther	= ["Uydu aramak istemiyorum"];
var initEndConnectedStatus= ["Bağlantı kesildi","Wi-Fi bağlı","Kabloyla bağlı"];
var initEndInstallations= "XXXX kanalları yüklü";
var initEndUpdate	= ["Güncellendi"];

var audioScenes 	= ["Masa üstü","Duvara monte"];			
var screenSavers	= ["Şuanda hiçbir program bilgisi yok, lütfen önce kanalları arayın!",
						"Sinyal Yok! ",
						"Şifreli ",
						"Sadece Veri",
						"Ses Programı ",
						"Ses ve Video Yok ",
						"Kullanılamaz",
						"Teleteks Yok",
						"Program verileri yok.",
						"Program Kitlendi!",
						"Program Kitlendi!\nTamam'a basın ve kodunuzu girin.",
						"Program detayları yok.",
						"Çocuklar için zararlı program.\nTAMAM düğmesine basın ve kodu girin.",
						"Kanal Kitlendi!",
						"Kanal Kilitli!\nTamam'a basın ve kodunuzu girin.",
						"Giriş Kilitli!\nTamam'a basın ve kodunuzu girin.",
						"Desteklenmiyor!",
						"Bu hizmet şu anda kullanılmıyor",
						"Giriş Kilitli!",
						"Program başlığı yok.",
						"İşlev yok"
						];
var chBookingPromt	= ["Mevcut kanalda planlanmış bir kayıt var, TV kayda başlayacak.",
						"Programlı bir kayıt bulundu.\n Kaydetmek için XXXX geç",
						"Şu anki kanal bir hatırlatıcıya sahip.",
						"Programlı bir hatırlatıcı bulundu.\n XXXX geç"];
var timeUnit		= ["San.","dak"];
var ciPromt			= ["Ağ verileri değiştirildi. Güncellemek için bir güncelleme taraması gerçekleştirebilirsiniz. ",];
var othersPromt		= ["Lütfen Bekleyin...",];
var menuOptions		= ["Resim  ","Ses ","Kanal","Ağ","Sistem"];
var optionOptions	= ["Resim önayarı ","Ses ayarı","Dondur","T-Link","zaman kaydırma","PVR","Program listesi","Ayarlar"];
var optionTLinkPromt= [["Otomatik aç","Oto. bekleme modu","Kılavuz menü"],
						["Gücü Aç","Bekleme modu","Amplifikatör Sesi"]];
var powerPromt		= ["TV şimdi kapanacak! İptal etmek için lütfen bir düğmeye basın."];
var ttxLanguage		= ["BATI AVR ","DOĞU AVR ","Rusça","Arapça/İbranice","Farsça","Arapça","Белорусский","Yunanca","Türkçe"];
var ttxOptions		= ["Göster","Dairesel Alt Sayfalar","Dil","Alarm Sayfası","Yeni flaş"];
var weekday         = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var lcnConfflict	= "Bu programda sorun algılaması vardır. %d kanalında kullanabileceğiniz başka bir sürüm vardır.";
var inShopMode		= "TV'niz mağaza modunda. Ev modu için lütfen 'Sistem' seçin ve menüden 'Yer' seçeneğini değiştirin.";
var nitRefresh		= "Şebeke verileri değiştirildi. Güncelleme taraması yapmak istiyor musunuz?";
var picHDMIMode     = ["Oto","Grafik","Video"];

var glassRemind    	= ["Lütfen 3B gözlüklerinizi TV'niz ile eşleştirin\n(3B gözlük üzerindeki GÜÇ düğmesine basılı tutun).","3B gözlüğünüz TV'nize bağlandı ",""];
var pvrRemind 		= ["USB aygıtını çıkarmayın veya gücü kesmeyin"];
var pvrConName   	= ["PVR","Program bilgileri:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Kaydedilen video \"pvr\" klasörüne kaydedildi."],"Durdur","Kayıt  ","saat","Dakika","Süre","İpuçları","Kayıt süresini ayarlamak için ok tuşlarını kullanın."];
var pvrDisRemind 	= "Kayıt için lütfen USB çubuk takın.";
var pvrRemindWords  = ["Çıkmak istiyor musunuz?",
							"Kaydı durdurmak ve kayıtlı dosyalara göz atmak istiyor musunuz?",
							"Disk çıkartıldı.",
							"Yeterli boş alan yok.",
							"Kayıtlı dosya yok. Kaydı başlat.",
							"PVR, Şifreli Kanalda başlayamaz.",
							"Özellik bulunmamaktadır",
							"Başarıyla Kaydedildi.",
							"Kayıt sürecini durdurmak ve kaynak girişini değiştirmek istiyor musun?",
							"TV mevcut kaydı sonlandıracak. Çıkmak istiyor musunuz?",
							"PVR kaydı için TV sinyalinin düzgün olması gerekir, lütfen sinyalinizi kontrol edin."];
var pvrChangeCh 	= ["Kanalı açmak istiyor musunuz?",
							"Kayıt sürecini durdurmak ve kanalı değiştirmek istiyor musun?"];
var pvrChangeToPIN8	= ["Kaynağı SCART girişine bağlı aygıta değiştirmek istiyor musunuz?",
				    		"Kaydı durdurmak ve kaynağı SCART girişine bağlı aygıta değiştirmek istiyor musunuz?"];
var pvrChangeToCEC  = ["Kaynağı HDMI girişine bağlı aygıta değiştirmek istiyor musunuz?",
				  			 "Kaydı durdurmak ve kaynağı bir HDMI girişine bağlı aygıta değiştirmek istiyor musunuz?"];
var pvrGuideJump    = ["EPG girmek istiyor musunuz?",
							"Kayıt sürecini durdurmak ve EPG'ye girmek istiyor musun?"];
var pvrMediaJump    = ["Medya girmek istiyor musunuz?",
							"Kayıt sürecini durdurmak ve Media'ye girmek istiyor musun?"];
var timeshiftExtra	= ["Zmn kydrmyı drdrmk ve kanalı değiştir?",
						"Süre değişmeyi durdurmak ve kaynağı SCART girişine bağlı aygıta değiştirmek istiyor musunuz?",
						"Süre değişmeyi durdurmak ve kaynağı bir HDMI girişine bağlı aygıta değiştirmek istiyor musunuz?",
						"Zaman Kaydırma, Sifreli Kanalda başlayamaz.",
						"Süre değiştirmeyi durdurmak ve EPG girmek istiyor musunuz?",
						"Zmn kydrmyı drdrmk ve TV'yi USB moduna dğştrmek istiyor musunuz?",
						"Zmn kydrmyı drdrmk ve giriş kaynağını değiştir?",
						"Kayıt için lütfen USB çubuk takın.",
						"Disk boyutu yeterli değil.",
						"TV mevcut süre değiştirmeyi sonlandıracak. Çıkmak istiyor musunuz?"];
var timeshiftStatus	= ["Hızlı Geri","Durdur","Çal","Duraklat","Hızlı İleri"];
var pvrPowerOffRemind= ["Beklemede Kayıt","Bekleme modu","TV şuanda kayıt yapıyor, TV bekleme modundayken kaydı sürdürmek istiyor musunuz?"];
var timeshiftInitTitle= "Disk Ayarı";
var timeshiftInitReminds= ["Bu sihirbaz zaman kaydırmak için USD diskini ayarlamada kullanılır. Lütfen ayar modunu seçin.",
						 "Daha iyi performans elde etmek için USB diskini biçimlendirmenizi öneririz. Tüm verileri silecektir.",
						 "Lütfen zaman kaydırma için dosya boyutunu seçin.",
						 "Biçimlendiriyor",
						 "Yeterli boş alan yok.",
						 "Zaman kaydırma dosyası oluşturuyor",
						 "Hız testi",
						 "Zaman kaydırma özelliğini etkinleştirmek için disk hızı çok yavaş (< %f MB/san)!",
						 "Disk, zaman kaydırması için hazır. Fakat daha iyi performans için diski değiştirmenizi öneririz (hızı > %f MB/san olan).",
						 "Disk, zaman kaydırması için hazır."];
var timeshiftInitButtons= ["Biçimlendir ","Atla","İptal","Tamam","Bitir","Çıkış "];
var timeshiftInitOther=["Disk Hızı:","MB/sn"];

var selectChoice	= "Emin misiniz ?";
var chAtvStore		= "XXXX olarak sakla";
var chEpgFirstGenreUK= ["Sinema","Haberler ve Olaylar","EĞLENCE","Spor","Çocuk","Eğitim","Yaşam tarzı","Drama"];
var homePageTitleList = ["UYGULAMALAR","TV","VİDEOLAR","Ana sayfa"];
var homePageFavAndAllName  = ["Favori Uygulamalar","Tüm Uygulamalar"];
var homePageBackUp = ["E-Kılavuz","Kılavuz Açık"];
var homePageRemind   = ["Tüm işlevler yalnızca ağ bağlantısı kurulduktan sonra kullanılabilir.","TV'nizde henüz hiçbir kanal yok. Programlar kanal taramasından sonra kullanılabilir.","Program yok","Kanalları şimdi ara?"];
var homePageHistory = ["Geçmiş"];
var miracastTitle = ["WiFi TV bağlantısı","TCL cihazı"];
var miracastRemind=["WiFi TV bağlantısı, bir akıllı telefon veya bir tablet gibi cihazlarınızın ekranını ve sesini kablosuz (ör. kablolar olmadan) olarak TV'nizle paylaşmanıza imkân verir. Böylece akıllı telefonunuzda veya tabletinizde gördüğünüzü aynı zamanda TV'nizde de görebilirsiniz. Örneğin, akıllı telefonunuzda bir video başlatabilir ve aynı anda TV'nizde görüntüleyebilirsiniz veya içeriği TV'nizin büyük ekranında görüntülenen oyun kontrolcüsü olarak tabletinizi kullanın.","TV’de WiFi TV bağlantısı hazır. Lütfen cihazınızın ekranını şimdi TV ile paylaşın.","Bağlanıyor. Lütfen bekleyin!","Bağlantı başarısız!","Bağlanamadı. Lütfen kontrol edin!"];
var homePageLittleWin = ["Ayarlar","Ortam","Fav kanallar","Smart TV","EPG"];

var hbbtvStopRemind  = ["Oynatmayı durdurmak istiyor musunuz?"];
var colorSystem = ["Oto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Daha fazla bilgi için SEÇENEK düğmesine basın";
var emptyListInfo = "TV'ye bağlı bir aygıt yok!";
var optionVideoListArray_1 = ["Resim önayarı ", "Ses ayarı", "Oynat modu", "Ekran Modu ", "3D Modu", 
							  "Sl-Sğ Değiştir", "Alan Derinliği", "Altyazı ", "Ses bandı", "Başlık", "Bölüm", "Bilgiler"];
var optionVideoListArray_2 = ["Resim önayarı ", "Ses ayarı", "Oynat modu", "Ekran Modu ", 
							  "Altyazı ", "Ses bandı", "Başlık", "Bölüm", "Bilgiler"];
var bottomTipsText = ["Oynat/Duraklat", "Hızlı Geri", "Hızlı İleri", "Oynatma listesi", "Ayarlar"];
var picturePresetArray = ["Standart", "Dinamik", "Doğal", "Sinema", "Kişisel"];
var videoPlayModeArray = ["Tümünü Yinele", "Birini Yinele", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Sinerama", "Wide Zoom", "Zoom 2", "Wide Zoom 2", "Stretch Zoom", "Otomatik"];
var screenModeSDArray = ["16:9", "4:3", "Sinerama", "14:9 Zoom", "16:9  Zoom", "16:9 uvećanje", "Otomatik"];
var Mode3DArray = ["Kapalı", "2D'den 3D'ye", "Yan Yana", "Üst ve Alt", "Satır Ekleme"];
var videoOptionListArray = ["Kapalı", "Parça", "Altyazı ", "Başlık", "Bölüm"];
var subMenuTitleText = "Altyazı ";
var langMenuTitleText = "Ses Dili ";
var titleMenuTitleText = "Başlık";
var mode3DMenuTitleText = "3D Modu";
var langInfoText = "Parça";
var STOP_RESUME_INFO = "Durdur-Devam Et";
var playListName = " adı";
var eb_tips = "İpuçları";
var ok_button = "Tamam";
var eb_info = ["Ses kod çözme hatası.", "Video kod çözme hatası.", "Ses formatı desteklenmiyor.", 
			   "Video formatı desteklenmiyor.", "Bu dosya açılamaz.", "Oynatma hatası, lütfen tekrar deneyin.",
			   "Dosya biçimi desteklenmiyor.", "Eyvah! Oynatıcı çalışmayı durdurdu.",
			   "Dosya yolu mevcut değil veya geçersiz.\n Depolama aygıtını yeniden bağlayın ve tekrar deneyin.",
			   "Önceki\n oynatma durumundan oynatmaya devam edilsin mi?"];
var frameTitleText = "Yeni Cihaz";
var eb_quit_info = "Çıkmak istediğinizden emin misiniz?";
var eb_yes = "EVET";
var eb_no = "HAYIR";
var offinfo = "Kapalı";
var naInfo = "Boş";
var consoleInfoArray = ["Hızlı Geri", "Hızlı İleri", "Oynat/Duraklat", "Oynatma listesi"];
var cantOperateText = ["İşlev desteklenmiyor."];
var chapterChangeInfo = "Yalnızca 1 ila XXXX arasındaki Bölümler kullanılabilir.";
var metaDataArray = ["Başlık/Sürüm Metaverisi: ", "Bölüm Metaverisi: ", "Ses Metaverisi: ", "Altyazı Metaverisi: "];
var metaTitleInfo = "Başlık";
var metaChapterInfo = "Bölüm";
var videoLoadingInfo = "Analiz ediliyor...";
var listLoadingInfo = "Yükleniyor...";
var pgInfo = "Yasal Derecelendirme: ";
var fileNameText = " adı";
var fileDateText = "Tarih";
var fileSizeText = "Boyut";
var fileDurationText = "Süre";
var fileDirectorText = "Direktör";
var fileCopyrightText = "Telif hakkı";
var fileArtistText = "Sanatçı";
var fileAlbumText = "Albüm";
var fileGenreText = "Tür";
var fileYearText = "Yıl";
var fileGenreText = "Tür";
var mainListArray = ["Tümü", "Resim  ", "Video", "Müzik"];
var sortArray = [" adı", "Tarih"];
var parserArray = ["Normal", "Tekrarlı  "];
var emptyTipsInfo = "Eyvah! Desteklenen dosya bulunamadı.";
var emptyFolderInfo = "Eyvah! Desteklenen dosya bulunamadı.";
var sortName = "Sıralama biçimi";
var parserName = "Derleyici";
var divx_str1 = "DivX(R) kaydı";
var divx_str2 = "DivX(R) kayıt silme";
var infor_str = "Bilgiler";
var quickMenuEmptyText = "Kullanılabilir Seçenek Yok.";

var musicSoundPresetArray = ["Standart", "Sinema", "Müzik", "Net ses", "Kişisel"];
var musicInformationArray = [" adı", "Sanatçı", "Albüm", "Tür:", "Yıl:", "Süre:"];
var playListName = " adı";
var playTipsInfo = ["İlk dosyayı oynatıyorsunuz", "Son dosyayı oynatıyorsunuz"]
var musicNameInfo = "Name";
var musicArtistInfo = "Sanatçı";
var musicAlbumInfo = "Bilgiler";
var optionSoundPresetInfo = "Ses ayarı";
var optionBGMInfo = "Arka planda çal";
var optionAudioOnlyInfo = "Sadece ses";
var optionInfoText = "Bilgiler";

var remotePhoneConnecte = "XXXX TV'ye bağlandı!";
var tvRemoteTitle		= "TV uzaktan";
var tvRemoteDeveloper	= "Uygulama, TCL tarafından geliştirilmiştir";
var tvRemoteDeviceTitle	= "Cihaz Adı:";
var remoteOption		= ["Medya Paylaşım","Uzaktan Kumanda","Yardım","Hakkında","Akıllı Bağlantı"];
var remotebottom		= " Lütfen akıllı telefonunuz için \"TV Kumandası\" uygulamasını indirin ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Telefonunuz üzerinden fotoğraflar, videolar ve müziklerinizi TV'nizde paylaşımı.",
							"Adımlar: \n   1. Telefondaki \"TCL nScreen\" uygulamasını tıklatın. Telefonu aynı WiFi ağıyla TV'ye bağlayın;\n   2. Medya dosyalarını taramak için \"Medya Paylaşımı\" seçeneğini tıklatın;\n   3. Medyayı oynatmak üzere TV'ye gönderin (aşağıdaki seçeneklerden birisiyle)",
							"      a)  Klasörü/dosyayı sürükleyin ve ekranın en üstünde bulunan TV simgesine bırakın;\n      b) İlk dosyayı başlatmak için telefonu televizyona doğru sallayın;\n      c) Medya dosyasını telefonda çaldırın ve TV paylaşım simgesine tıklayın;",
							"   4.TV'de çalarken önceki veya sonraki dosyayı çaldırmak için telefonu sallayın."];
var controlReminds		= ["Televizyonu yönetmek için telefonu bir uzaktan kumanda gibi kullanın.",
							" ",
							"Adımlar: \n   1. Telefondaki \"TCL nScreen\" uygulamasını tıklatın. Telefonu aynı WiFi ağıyla TV'ye bağlayın;\n   2. TV'yi çalıştırmak için \"Uzaktan Kumanda\" seçeneğini tıklatın."];
var helpDeviceWords		= "Çoklu ekran etkileşimi";
var helpBottom			= "Bulut teknolojisi çağında, telefon ve TV gibi akıllı cihazlar ortak olarak bağlanır. Çoklu ekranlarda ailenizle medya paylaşın ve TV’yi telefondan kumanda edin! ";
var helpReminds			= ["Hazırlıklar\n   1. Google Play veya Apple Store'den \"TCL nScreen\" uygulamasını indirin.\n   2. Telefonu aynı WiFi ağıyla TV'ye bağlayın.",
							" ",
							"Önerilen telefon\n   1. İşlemci: 800MHz üzeri\n   2. Depolama: en az 80MB boş yer",
							" ",
							"Feragat\n   Telefonunuzda \"TCL nScreen\" uygulaması kullanılamıyorsa lütfen telefon üreticinizle irtibata geçin. "];
var helpButtons			= ["Geri","Sonraki"];
var aboutReminds		= ["TV uzaktan","Uygulama, TCL tarafından geliştirilmiştir"];
var aboutExit			= "Çıkış ";
var smartReminds		= ["TV ve telefon arasında hızlı ve akıllı bağlantı.",
							" ",
							"Adımlar\n   1. TV ve akıllı telefonu aynı LAN ağına bağlayın. Akıllı telefonda \"TCL nScreen\" uygulamasını tıklatın.\n   2. QR kodunu taramak için \"Smart Connect\" (Akıllı Bağlantı) seçeneğini tıklatın.\n   3. TV'niz yayın izleme modundayken, 4 saniye boyunca TV kumandasındaki INFO (BİLGİ) düğmesine basılı tutun ve tam ekran QR kodu açılacaktır.",];
var smartQRReminds		= ["Telefonunuzdaki TCL nScreen uygulamasındaki Smart Connect (Akıllı Bağlantı) seçeneğini tıklatın ve TV ve telefonu hızlı bir şekilde bağlamak için QR kodunu taratın.",
							"QR code LAN hesap bilgilerini içerir. Lütfen bu bilgileri saklayın."];
							

var consoleTipArray = ["Geri","Sonraki","Konsol","Oynatma listesi"];							
var optionInfoArray = ["Resim önayarı ","Oynat modu","Süre","Etki ","Bilgiler"];

var playModeArray = ["Normal","Karma","Yinele"];
var durationArray = ["Kısa(5sn)", "Orta(10sn)", "Uzun(15sn)"];
var effectArray = ["Hiçbiri", "Çöz", "Sağa sil", "Sola sil", "Yukarı sil", "Aşağı sil", "Kutu içi", "Kutu dışı", "Rastgele"];
var infoArray = ["Adı:","Boyut:","Tarih:","Yer"];

var picturePresetBarTitleInfo = "Resim önayarı ";
var picturePresetBarArray = ["Standart","Dinamik","Stüdyo","Sinema","Kişisel"];
var upTipsInfo = "Resmi Taşı"; //add yums 2014-10-10
var consoleTipsArray = ["Konsol","Geri","Sonraki","Oynatma listesi","Ayarlar"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Sonraki resmi görüntülemek için tekrar SAĞ düğmeye basın","Önceki resmi görüntülemek için tekrar SOL düğmeye basın","Oynatma listesini açmak için tekrar AŞAĞI düğmesine basın"]; //add yums 2014-10-10

var optionPvrListArray = ["Resim önayarı ","Ses ayarı", "Ekran Modu ", "3D Modu", "Altyazı ", "Ses bandı", "Bilgiler"];							
	
var titleSpanFirstArray = ["Kontrol ve Bağlantı","Temel İşlemler","UYGULAMALAR","TV","Ayarlar","Sıkça soru \n sormak"];
var titleSpanSecondArray = [["Uzaktan Kumanda","Panel Kontrol Düğmeleri","Kolay Navigasyon","TV Bağlantısı","TV Bağlantısı","TV Bağlantısı","Kablosuz"],["Başlatıcı","Durum çubuğu","Kaynak"],["Çalışan uygulamalar","Ortam","TV uzaktan"],["Kanal ve ses düzeyini ayarla","Kanal Listesi ","EPG","Kanal kurulumu kaldır","Favori kanallar"],["Resim ayarı","Ses ayarı","Kanal ayarı","Yazılım yükseltme","Dil","Ebeveyn kilidi"],["Sıkça soru sormak","Sıkça soru sormak","Sorun giderme","Sorun giderme","Şartlar ve koşullar"]];
var contentSpan1_1Array = [["LIST (LİSTE):","INFO (BİLGİ):","MENU (MENÜ):","POWER (GÜÇ):","SOURCE (KAYNAK):","GUIDE (REHBER):","SMART TV:"],["Kanal listesini gösterir","Program bilgilerini gösterir","Ana sayfaya gider","Gücü açar veya bekleme moduna alır","Giriş kaynağını seç","EPG (Elektronik Program Kılavuzu) bilgilerini gösterir","Smart TV sayfasını açar"]];
var contentSpan1_2Array = ["Önceki kanal","Sonraki kanal","Ses düzeyini artır","Ses düzeyini azalt","Ana sayfaya gider","Seçeneği onayla","Bekleme / Güç açık"];
var contentSpan1_3Array = ["OK/Guide","Kanal yukarı","Kanal aşağı","Ses azalt","Ses artır","Bazı işlevlerde ok tuşları olarak kullanılabilir."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adaptörü","LAN","Akıllı telefon","PC/Set üstü kutusu/DVD","Ses yükseltici","Ses yükseltici/Monitör","TV'niz tüm soketleri içermeyebilir."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Kulaklık","AV IN adaptörü","SPDIF","CMP AUDIO GİRİŞİ adaptörü","CMP GİRİŞİ (YPbPr) adaptörü","USB cihazları","USB cihazları","Kulaklık","DVC/Oyun Konsolu/Set üstü kutusu/DVD","Ses yükseltici","DVC/Oyun Konsolu/Set üstü kutusu/DVD","TV'niz tüm soketleri içermeyebilir."];
var contentSpan1_6Array = ["Ortak Arayüz ","SD","VGA","SCART","Mini SCART","ANTEN GİRİŞİ","PCMCIA Kartı","SD Kartı","PC","Set üstü kutusu/DVD","Anten/Kablo/Uydu","TV'niz tüm soketleri içermeyebilir."];
var contentSpan1_7Array = ["Tablet","PC","Yönlendirici","Telefon","TV"];

var contentSpan2Array = [["Giriş Sayfasını görmek için ok tuşlarına basın.","Ardından öne çıkan programlardan birini izlemek veya uygulamaya girmek için TAMAM düğmesine basın."],["Ekranın sağ üst köşesinde tarih, ağ ve aygıtları gösterin."],["Farklı bağlantı noktaları üzerinden TV, AV, HDMI gibi TV'ye bağlı aygıtlardan giriş kaynağını seçin."]];

var contentSpan3Array = ["Smart TV sayfası üzerinden sevdiğiniz Uygulamalarınızı görüntüleyin ve keyfini çıkarın","Bir USB depolama aygıtındaki fotoğrafları görüntüleyin, videoları izleyin ve müzikleri dinleyin açın","TV ve akıllı telefonunuzu veya tabletinizi aynı LAN ağına bağlayın.","Akıllı telefon ya da tabletinizdeki TCL nScreen veya TCL nScreen uygulamasını tıklatın.","Çoklu ekranlarda akıllı telefonunuz aracılığıyla TV'niz üzerinden fotoğraflarınızı, videolarınızı ve müziklerinizi ailenizle paylaşın."];

var contentSpan4Array = [["Kanalları değiştirmek için YUKARI/AŞAĞI düğmelerine basın","Ses düzeyini ayarlamak için SOL/SAĞ düğmelere basın"],["Kanalları sıralı şekilde görmek için kumandadaki LIST düğmesine basın","Kanalınızı seçmek için YUKARI/AŞAĞI düğmelerine basın"],["EPG planlanan TV programlarını görüntüleyen ekran üzeri bir kılavuzdur. Programlarda gezinebilir, bunları seçebilir, görüntüleyebilir ve kaydedebilirsiniz."],["Kanalları ara ve yükle"],["Kanal listesine favori kanallarınızı ekleyin veya bunları düzenleyin"]];

var contentSpan5Array = ["Video uygulamalarıyla favori programlarınızın keyfini çıkarın"];

var contentSpan6Array = [["Sistem ayarları seçeneklerini göstermek için MENU (MENÜ) düğmesine basın","Değerleri ayarlamak için Resim ayarlarını girin"],["Sistem ayarları seçeneklerini göstermek için MENU (MENÜ) düğmesine basın","Seçenekleri ayarlamak için Ses ayarlarını girin"],["Sistem ayarları seçeneklerini göstermek için MENU (MENÜ) düğmesine basın","Seçenekleri ayarlamak için Kanal ayarlarını girin"],["Yeni bir yazılım sürümü mevcut olduğunda TV'nizi güncelleyin"],["Tercih ettiğiniz menü dilini seçebilirsiniz"],["Ebeveynlerin çocuklar için uygun olmayan kanalları veya programları kilitlemelerini sağlar"]];

var contentSpan7_1Array = [["Resim yok, ses yok","Sigorta veya devre kesicinin çalıştığını kontrol edin.","Çalıştığından veya açık olduğundan emin olmak için elektrik prizine başka bir elektrikli cihaz bağlayın.","Fiş ile priz teması düzgün değil","Sinyal kaynağını kontrol edin."],["Normal resim, ses yok","Sesi düzeyini artırmak için ses YUKARI düğmesine basın.","Ses ayarları yanlış.","Yayınından sinyal hatası."],["Normal ses, resim yok","Parlaklığı ve kontrastı ayarlayın","Yayınından sinyal hatası.","Yalnızca ses modunda olup olmadığını kontrol edin."]];
var contentSpan7_2Array = [["Radyo frekansı paraziti","Bu parazit hareketli dalgalanmalar veya çapraz çizgiler oluşturur ve bazı durumlarda resimde kontrast kaybına neden olur. Radyo paraziti kaynağını bulun ve düzeltin."],["Renk yok","Renk ayarlarını değiştirin.","Başka bir kanalı deneyin. Siyah-beyaz program alınabilir."],["Uzaktan kumanda çalışmıyor","Pilleri değiştirin.","Piller düzgün yüklü değil. TV'nin ana güç kaynağı bağlı değil."]];
var contentSpan7_3Array = [["USB aygıtının içeriği görüntülenmiyor","USB depolama aygıtının TV ile uyumlu olduğunu kontrol edin.","Ses ve resim dosyası biçimlerinin TV tarafından desteklendiğini kontrol edin."],["Ses olmadan oynatılıyor","Videonun ses biçimi TV oynatıcı tarafından desteklenmiyor."],["Dosyalar sorunsuz oynatılmıyor","USB depolama aygıtının transfer performansı TV'ye veri transfer hızını sınırlayabilir."]];
var contentSpan7_4Array = [["Yazılım güncellemesi yaparken nelere dikkat etmeliyim?","Yazılım güncellemesi sırasında güç kesilmemeli.","Yazılım güncellemesi sırasında kumandanızda hiçbir işlem yapmayın.","Sabırlı olun çünkü yazılım güncelleme işlemi biraz zaman alabilir."],["Yazılım güncellemesinden sonra TV arabiriminde belirgin değişiklikler olmadı.","Bazı durumlarda SW güncellemesi güncelleme ve yeni işlevler eklemenin yanı sıra arabirimde belirgin değişiklikler olmadan TV setinizin performansını artırabilir. Ayrıca, TV arabirimi bazen dokunulmadan kalabilir."]];
var termsTitle = "Şartlar ve koşullar";
var termsConditions = ["TCL (Yasal Uyarı) - Bu TV setinin üreticisi. ","Akıllı TV özelliğini içeren ürünlerin çeşitli kapasitelerinden, hizmetlerden ve aynı zamanda kullanılabilir içerikteki kısıtlamadan dolayı belirli özellikler, uygulamalar ve hizmetler her cihazda veya bölgede kullanılamayabilir. AkıllıTV’de bulunan bazı özellikler aynı zamanda ilave çevresel aygırlar veya ayrı olarak satılan üyelik ücretleri gerektirebilir. Belirli cihaz bilgileri ve içerik kullanılabilirliği hakkında daha fazla bilgi için lütfen web sitemsizi ziyaret edin. AkıllıTV üzerinde alınan hizmetler ve içerik kullanılabilirliği önceden haber verilmeksizin zaman zaman değişikliğe tabidir. \n   Bu cihaz üzerinden ulaşılabilir olan tüm içerik ve hizmetler üçüncü kişilere aittir ve telif hakkı, patent, tescilli marka ve/veya diğer fikri mülkiyet kanunları tarafından korunurlar. Bu tip içerik ve hizmetler, kişisel ticari olmayan kullanımınız için ayrı olarak sağlanmaktadır. Hiç bir içerik veya hizmeti, içerik sahibi veya hizmet sağlayıcısı tarafından yetki verilmemiş şekilde kullanamazsanız. İlgili içerik sahibi veya hizmet sağlayıcısı tarafından açıkça yetki verilmedikçe, öncekini sınırlamaksızın bu cihaz aracılığıyla görüntülenen hiçbir içerik veya hizmeti hiçbir şekilde ve ortamda değiştiremez, kopyalayamaz, yeniden yayınlayamaz, internete yükleyemez, gönderemez, aktaramaz, çevirisini yapamaz, satamaz, türemiş çalışmalar oluşturamaz, faydalanamaz veya dağıtamazsınız. \n   CİHAZ KULLANIM RİSKİNİN VE TATMİN EDİCİ KALİTE, PERFORMANS VE DOĞRULUK GİBİ TÜM RİSKİN SİZE AİT OLDUĞUNU AÇIKÇA KABUL ETMİŞ VE ONAYLAMIŞ OLURSUNUZ. CİHAZ VE TÜM ÜÇÜNCÜ ŞAHIS İÇERİK VE, AÇIKÇA İMA YOLUYLA HERHANGİ BİR ÇEŞİT GARANTİ OLMAKSIZIN OLDUĞU GİBİ SAĞLANIR. TCL, TİCARETE ELVERİŞLİLİK, TATMİN EDİCİ KALİTE, BELİRLİ AMACA UYGUNLUK, DOĞRULUK, MÜDAHALESİZ KULLANIM VE ÜÇÜNCÜ TARAF HAKLARININ İHLALİ İLE SINIRLI OLMAMAK ÜZERE AÇIKÇA VEYA İMA YOLUYLA CİHAZ VE TÜM İÇERİK VE SERVİS İLE İLGİLİ TÜM GARANTİLERİ VE ŞARTLARI AÇIKÇA REDDEDER. TCL, BU CİHAZ VASITASIYLA SAĞLANAN HİÇBİR İÇREK VEYA HİZMETİN DOĞRULUĞUNU, GEÇERLİLİĞİNİ, ZAMANLAMASINI, KANUNA UYGUNLUĞUNU VEYA BÜTÜNLÜĞÜNÜ GARANTİ EDEMEZ VE CİHAZIN, İÇERİK VEYA HİZMETLERİN İHTİYAÇLARINIZI KARŞILAYACAĞINA VEYA CİHAZIN ÇALIŞMASININ YA DA HİZMETLERİN KESİLMEYECEĞİNE VEYA HATASIZ OLACAĞINA GARANTİ VERMEZ. İHMAL DAHİL HİÇBİR KOŞULDA TCL, SÖZLEŞMEDE YA DA FİİLİYATTA, HİÇBİR DOĞRUDAN, DOLAYLI, TESADÜFİ, ÖZEL VEYA BAĞLI OLAN HASARLAR, AVUKAT GİDERLERİ, HARCAMALAR VEYA İÇERDİĞİ BİLGİLERDEN YA DA CİHAZIN VEYA TARAFINIZDA ERİŞİNLE İÇERİK YA DA HİZMETİN KULLANIMINDAN VEYA ÜÇÜNCÜ TARAFTAN KAYNAKLANACAK DİĞER HASARLARDAN BU TİP HASARLARIN OLASILIĞI HAKKINDA BİLGİLENDİRİLSE DAHİ SORUMLU OLMAYACAKTIR. \n   Üçüncü taraf hizmetleri değiştirilebilir, bekletilebilir, kaldırılabilir, sonlandırılabilir veya kesilebilir ya da bildirilmeksizin herhangi bir zamanda erişim engellenebilir ve TCL (Thomson markalı TV’nin üreticisi) herhangi bir zaman diliminde herhangi bir içeriğin ya da hizmetin kullanılabilir olacağını beyan edemez veya garanti edemez. İçerik ve hizmetler, üzerlerinde TCL’nin kontrolünün olmadığı ağlar ve aktarma tesisleri vasıtasıyla üçüncü taraflarca aktarılır. Bu feragatnamenin genel çerçevesini kısıtlamadan TCL, açıkça bu cihaz tarafından kullanılabilir yapılan bir içerik veya hizmetin değiştirilmesi, kesilmesi, devre dışı bırakılması, kaldırılması veya askıya alınması tüm sorumluluğu ve yükümlülüğü reddeder. TCL, her durumda bildirmeksizin ve sorumluluk almadan belirli servis veya hizmetlerin kullanılması veya bunlara ulaşılması hakkında sınırlamalar koyabilir. TCL, içerik ve hizmetlerle ilgili müşteri hizmetlerinden sorumlu ve yükümlü değildir. İçerik ve hizmetlerle ilgili tüm soru ve istekler doğrudan ilgili içerik ve hizmet sağlayıcılarına yöneltilmelidir."];

var noChannelListRemind        = ["Kanal bulunamadı. Kanal listesi kanal taramasından sonra kullanılabilir.","Kanal Tarama"];
var closeSubtitleRemind   = "Altyazı kapalıyken işlev kullanılabilir olacaktır. Şimdi ayarlamak istiyor musunuz?";

var estickerTitles = ["Son derece gerçekçi görüntüler","Canlı renkler","Üstün gerçek hareketler","Dinamik görüntü kalitesi","SR UHD yükseltme","3B dünya deneyimi","Daha hızlı performans","Gelecek 4K içerik","Çevrimiçi dünyanın keyfini çıkarın","Ekstra içeriklere erişim","Entegre dijital ayarlayıcılar","Tüm aygıtlarına bağlantı","Çeşitli 4K kaynaklar","USB içeriği","Ultra hızlı WIFI","TV'de mobil içeriği","Mobil cihaz içeriği","Yerel içerik","DivX tarafından onaylanmış","Kusursuz resim","Kanal Hazır","TDT Premium"];
var estickerDescriptions = ["UHD ekranda Full HD detaylarını dörde katlayan görüntüler sayesinde mükemmel seyir deneyimi","Geniş renk yelpazesi canlı kırmızılar ve zümrüt yeşilleri ile her sahnede ayrı duygu yaşatır","4K çerçeve enterpolasyonu ve arka aydınlatma hareket bulanıklığı sorunlarıyla baş eder","Orijinal görüntünün canlılığı harikulade kontrast ile gerçek dinamik ifadeler oluşturmak için geliştirilmiştir.","Süper Çözünürlük teknolojisi sayesinde eskisine göre daha etkileyici TV şovları ve Blu-Ray disklerin keyfini çıkarın","3B TV ready deneyimini yaşayın ve çeşitli 3B içerikleri izleyin","Sorunsuz etkileşim, gelişmiş performans içn Dört Çekirdek ile daha keyifli eğlence deneyimi","Gelecek 4K video dağıtım standardı için HEVC (H.265) kodek desteği","Çevrimiçi uygulamalar, VOD hizmetleri, catch-up TV'ler ve internet web taraması zenginliği","En sevdiğiniz yayıncıların ek hizmetleri ve içeriklerinden daha fazlasını keşfedin","Ek set üstü kutusu olmadan yüksek netlikte TV kanallarına erişin","Evinizden birçok dijital kaynağa kolayca bağlanın","Gelecek için TV ready özelliği, HDCP 2.2 ile HDMI 2.0 üzerinden 4K 50/60Hz oynatabilme","USB sürücüsü, HDD veya kameradaki video veya fotoğraf içeriğini 4K çözünürlüklü büyük ekranda doğrudan görüntüleme","Rakipsiz internet erişim hızı sunan yeni nesil 2x2 MIMO ve AC standardı","Ekran aynalama teknolojisi sayesinde mobil cihazlarınızdaki fotoğraflar, videolar ve uygulamaları büyük ekranda görüntülemenin keyfini çıkarın","Akıllı telefon veya tabletteki fotoğraflar, videolar, uygulamalar büyük ekranda görüntülenebilir ","Yerel ağa bağlı cihazlardaki fotoğraflar ve videolar gibi yerel içerikleri büyük ekranda görüntüleyin","DivX korumalı kiralık veya satın alınmış filmleri izleyin","Ultra dar çerçeve ve süper ince tasarım","Canal+ tarafından test edilmiş ve onaylanmış","TDT Premium tarafından test edilmiş ve onaylanmış"];							

var eManualTextArray = ["E-Kılavuz","Tüm grafikler yalnızca temsili amaçlıdır."];
var frontPanelRemind = "Ön panel kilitli.";
var eRPRemind		 = "Alışveriş modu ERP talebini karşılayamıyor. Emin misiniz ?";	
var noRelatedChannel = "İlgili kanal yok";
var option0624Name          = ["BOP","BFS","Etkinlikten Etkinliğe","GetUserID","BGM","Reset all","Alışverişi sıfırla","NRM","DVB-T2 ve Ülke Seçimi,","HbbTV modu"];
var DVBT2AndChoice = ["Açık","Ülkeye göre","Kapalı"];
var hbbtvServiceRemind = "HbbTV hizmeti çok yakında.";
var insertWord = "Ekle";		
var viewDetail = "Detayları gör";							
							

var remindOAD  = "Yazılım güncellemesi. Yeni bir önerilen yazılım güncellemesi başka bir kanalda bulunmaktadır. Bunu indirmeyi kabul ederseniz, kanalı otomatik olarak değiştirebilir. Bunu şimdi yapmak ister misiniz?";

var LEDStatus = ["Yanıp sönme", "Normal"];
var netFlixRemind = "Bu fonksiyon, siz tekrar oturum açana kadar Netflix hizmetlerine olan erişimi keser.";
var ESNExplanation = "Elektronik Seri Numarası";
var resetShopRemind = "Sistem şimdi sıfırlanıyor, lütfen televizyonunuzu kapatmayın";
var initialSelectOption = "Lütfen bir seçenek seçin:";
var databaseRemind   = "Sistem, bilinmeyen bazı nedenlerden dolayı veri tabanının zarar gördüğünü belirledi ve otomatik olarak onardı, devam etmek için Tamam’a basın";
var Deactivation = "Etkisizleştirme";
var oadFutureRemind = "Yazılım güncellemesi. Yeni bir önerilen yazılım %s kısmında bulunmaktadır. Güncelleme biraz sürebilir ve ekran kararabilir. Güncelleme sırasında alıcıyı kapatmayın. Eğer bu güncellemeyi kabul ediyorsanız, lütfen alıcıyı programlanan zamanda açık ya da bekleme modunda bırakın. Bu güncellemeyi almak istiyor musunuz?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Ses çıkışı";
var bt_soundOutPutTV = "TV Hoparlörü";
var bt_soundOutPutBT = "Bluetooth Cihazı";
var bt_soundOutPutBT_TV = "Bluetooth ve TV";
var bt_refreshBarName = "Cihazlar";
var bt_settingTips_On = "Bluetooth işlevini açın ve cihazları arayın";
var bt_settingTips_Finding = "Uygun cihazlar bulunuyor…";
var bt_settingTips_NoDevice = "Uygun cihaz yok.";
var bt_deviceList_State_NoConnect = "Bağlı değil";
var bt_deviceList_State_Connecting = "Bağlanıyor…";
var bt_deviceList_State_Connected = "Bağlandı";
var bt_deviceList_State_Paired = "Eşleşti";
var bt_deviceList_Conncect_Failed_Tips1 = "Bağlantı başarısız.";
var bt_deviceList_Conncect_Failed_Tips2 = "XXX Bluetooth işlevinin Açık olduğunu onaylayın";
var bt_deviceList_Conncect_Success = "Bluetooth cihaza bağlandı";
var bt_deviceList_Disconncect_Success = " Bluetooth cihaz bağlantısı kesildi.";
var bt_deviceList_Disconnect = "XXX bağlantısını kesmek istediğinizden emin misiniz?";
var bt_tipsTitle = "İpucu";
var bt_bluetooth_Pairing_Title = "Bluetooth eşleme";
var bt_bluetooth_Input_Pin = "Lütfen PIN girin:";
var bt_bluetooth_Output_Pin_Tip = "Klavyeyle PIN XXXX girin";
var bt_bluetooth_Pin_Wrong_Tip = "Yanlış PIN";
var bt_bluetooth_Remove_Pair_Title = "Sorgula";
var bt_bluetooth_Remove_Pair_Ask = "Bu cihaz unutulsun mu?";
var bt_bluetooth_module_error = "Bluetooth modülü hatası!";			
			
var netflixDialogOptions = ["Tamam","Sonra","Bunu bir daha gösterme"];
var netflixDialogContent = "Netflix'de izlemeniz için binlerce film mevcut şimdi gitmek ister misiniz?";
var netflixRemoteDialogContent = "Netflix tuşuna sahip uzaktan kumandayı şimdi satın alabilirsiniz. Daha fazla bilgi için aşağıdaki web sitesini ziyaret edin.\nhttps://store.tcleu.com";
														
var applyPictureModeSwitchValue	 = ["Mevcut kaynak","Tüm kaynaklar"];
var audioDescriptionName = ["Ses Açıklaması","Hoparlör","Hoparlör ses seviyesi","Kulaklık","Kulaklık ses seviyesi","AD ses seviyesi","BT cihazı","BT cihazı ses seviyesi"];
var audioDescriptionOptions = ["Kapalı","Normal","Ses Açıklaması"];							
var volumeOffRemind = 'Lütfen XXX öğesini Ayarlar menüsünde “Açık” olarak ayarlayın.';
var switchSourceRemind   = " takıldı. Şimdi değiştirmek istiyor musunuz?";							
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Spor modu";
var resetStadium = "Stadyum";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Çıkış","0","Yakınlaştırma+",
                       	   "Çıkış",
                       	   "Listele","0","Metin","Rehber","Gir","Çıkış","Menü","Altyazı","Bilgi",
                       	   "Durdur",
                       	   "Bilgi","Menü","Çıkış"
                       	   ];
var nscreenTips = "GuideOn, kullanıcıların bu çok miktardaki içerik üzerinde gezinmelerine yardımcı olur.";
var nscreenContent = 'Adımlar: 1.Telefonunuzda "TCL nScreen"e tıklayın.  Telefonu aynı LAN üzerinden TV’ye bağlayın; 2.GuideOn uygulamasına girmek için "GuideOn"a tıklayın; 3.GuideOn, kullanıcıları hangi televizyon içeriğinin mevcut olduğuna dair bilgilendirerek yazılı program kılavuzuna benzer bir işlevsellik sunar;';
var singalBrokenoffTips = "Sinyal kesildi. Sistem, indirme işlemini tamamlayamıyor.";
var contentSpan1_1Array_AU =  [["POWER (GÜÇ):","SOURCE (KAYNAK):","MENU (MENÜ):","BACK:","INFO (BİLGİ):","HOME:","EXIT:","LIST (LİSTE):"],
    ["Turns power on or standby mode","Select the input source",
        "Show TV settings menu","Go back to the Previous menu or exit a running APP",
        "Program bilgilerini gösterir",
        "Ana sayfaya gider",
        "Go back to the Previous menu or exit a running APP",
        "Kanal listesini gösterir"]];
var guideDescriptionWords ="GuideOn uygulamasını telefonunuza indirmek için lütfen QR kodunu taratın";
var settingNoticeSourceName ="Otomatik kaynak";

var all_country 	= ["Austraalia","Austria","Belgia","Bulgaaria","Horvaatia","Tšehhi Vabariik","Taani","Soome","Prantsusmaa","Saksamaa",
						"Kreeka","Ungari","Itaalia","Luksemburg","Holland","Norra","Poola","Portugal","Rumeenia","Venemaa",
						"Serbia","Sloveenia","Hispaania","Rootsi","Šveits","Suurbritannia","Uus-Meremaa"," "/*Arab*/,"Eesti"," "/*Hebrew*/,
						"Läti","Slovakkia","Türgi","Iirimaa","*","Filipiinid","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Hiina","*","*","*","*","*","*","Muud","Leedu"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Leedu"];						
				
var all_language 	= ["Tšehhi","*","Taani","*","*","Saksa","Inglise","Hispaania","Kreeka","Prantsuse",
						"Horvaatia","*","Itaalia","Ungari","Hollandi","Norra","Poola","Portugali","Vene","Rumeenia",
						"Sloveenia","Serbia","Soome","Rootsi","Bulgaaria","Slovaki","*","*","Gaeli","*",
						"Uelsi","Araabia","Iiri","Läti","*","Türgi","Eesti","Hollandi"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","V.O."/*Qaa*/,"Määramata"/*Undetermined*/,"*","Tundmatu",
						"Määramata","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baski","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Valgevene","*","*","Katalaani","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galeegi","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandi","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Leedu",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantika","*","*","*","*",
						"*","*","*","Saami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraina","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Väljas","Sees"];
var okCancel		= ["OK","Katkesta"];
var yesNo			= ["JAH","EI"];
var level			= ["Väljas","Madal","Kõrge","Keskmine"];
var manualAuto		= ["Manuaalne","Automaatne"];
var homeShop		= ["Kodu","Osta"];
var picPreset		= ["Standard","Dynamic","Loomulik","Film","Digikino","Isiklik"];
var picColorTemp	= ["Jahe","Parasts","Soe","Soe2","Kasutaja"];
var pic3dNavig		= ["Manuaalne","Automaatne","Poolautomaatne"];
var _3dOptions		= ["3D Režiim","3D-st 2D-ks","P-V lüliti","Sügavusteravus"];
var pic3DMode       = ["Väljas","2D-st 3D-ks","Kõrvuti","Ülaosa ja alaosa","Vaheldumisi liin"];
var picEcoOptions	= ["Enerģijas taupīšana","Valgusandur","Kohalik hämardus","Virvenduseta hämardus"];
var picGeoOptions	= ["Geomeetria","H.asend","V.asend","Kell","Faas"];//Geometry 无翻译
var picAdWhiteBal	= ["R Suurendus","G Suurendus","B Suurendus","R Nihe","G Nihe","B Nihe"];
var souOptions		= ["Heli valmissäte","Tasakaal","Heli viive","SRS TSHD","Automaatne helitugevuse kontroll",
						"SPDIF tüüp","SPDIF viivitus","Teleri paigutus","Heli keel","Heli tüüp",
						"Suuline kirjeldus","Digitaalheli väljundi tüüp","Dolby professionaalne seadistus"];
var soundOutputoptions 	=["Teleri kõlari DAP väljund","Väline AVR kodeerija väljund"];							
var inteligenteqoptions =["Fokuseeritud","Rikas"];				
var souSpdifType	= ["Automaatne"/*Dolby*/,"PCM","Väljas"];
var colorSpace      = ["Automaatne","Natiivne","Kasutaja","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Virtuaalne ruumiheli","Dialoogi tugevdaja","Bassi tugevdaja","Intelligentne helitugevus","Intelligentne meedia","Graafiline ekvalaiser","Intelligentne EQ"];
var chOptions		= ["Kanali skaneering","Kanalite nimekiri","EPG","Organiseerija","Kanali diagnostika",
						"ajanihe","Subtiitrid","Teletekst","Kanālu saraksta tips"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signaalitugevus","Signaali kvaliteet","Sagedus (KHz)","Teenuse ID","Võrgu ID","Võrgu nimi"];
var chScanOptions	= ["Riik","Tuuneri režiim","Automaatne otsing","Automaatne uuendus","Manuaalne analoogskaneering",
						["Kaabli manuaalne skann","Antenni manuaalne skann","Satelliidi manuaalne häälestus"],"Satelliitantenni seadistamine","Lemmikvõrgu valik","Tühjenda kanalite loend",];
var favNetDes		= "Palun valige eelistatud võrk";
var tuner			= ["Kaabel","Antenn","Satelliit"];//Satelite 无翻译
var passError		= "Vale parool.\nPalun sisestage uuesti!";
var chType			= ["Analoogkanalid: ","Digitaalkanalid: "];
var chScanStatus	= ["Olek: Skannimine","Olek: Skaneering lõpetatud","Olek: Skaneering katkestatud","Olek: Skaneerimise viga"];
var chScanPara		= ["Sagedus (KHz)","Modulatsioon","Sümbolikiirus (Ksym/s)","Võrgu ID","Süsteem",
						"Peenhäälestus","Signaalitugevus","Signaali kvaliteet","Skannimisrežiim","Kanali ID"];
var chScanParaMHZ      = ["Sagedus (MHz)"];
var chAtvManSys		= ["LÄÄNE EUR","IDA EUR","Ühendkuningriik","Prantsusmaa"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Automaatne"];
var chCleanDes		= "Kas soovite kanalite loendi tühjendada?";
var chDeletDes		= "Kas soovite kanali kustutada?";
var chOperator		= ["Ziggo","UPC","Muud"];
var chScanType		= ["Digitaalne & Analoog","Digitaalne","Analoogne"];
var chScanMode		= ["Täielik","Edasi","Kiire"];
var bookingModes	= ["Lindista","Meenutus"];
var dayName			= ["P","E","T","K","N","R","L"];
var monthName		= ["Jan", "Veeb.","Mar.","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dets"];
var filter			= ["Filter","Tüüp","Alamtüüp"];
var chEpgFirstGenre	= ["Film","Uudised","Show","Sport","Lastele","Muusika","Kunstid","Sotsiaal-","Haridus","vaba aeg","SPECIAAL"];
var chEpgSecondGenre= [["Draama","Detektiiv","Seiklus","Ulme","Komöödia","Seep","Romantika","Tõsine","Täiskasvanute film"," "," "," "],
						["Poliitika","Ilmateade","Uudistemagasin","Dokumentaal","Arutelu"," "," "," "," "," "," "," "],
						["Show","Mängushow","Vaheldusshow","Jutusaade"," "," "," "," "," "," "," "," "],
						["Sport","Eriüritused","Spordimagasinid","Jalgpall","Tennis",
							"Meeskonnasport","Võimlemine","Mootorisport","Veesport","Talvesport",
							"Ratsutamine","Võitlusspordid"],
						["Lastele","Eelkooliealistele lastele","Meelelahutus 6...14-aastastele","Meelelahutus 10...16-aastastele","Informatiivne","Joonissaated"," "," "," "," "," "," "," "],
						["Muusika","Roks","Tõsine","Folk","Jazz","Muusikal","Ballett"," "," "," "," "," "],
						["Kunstid","Lavakunstid","Kaunid kunstid","Religioon","Popkultuur",
							"Kirjandus","Film","Eksperimentaalne","Saated","Uus meedia",
							"Kunstiajakirjad","Mood"],
						["Sotsiaal-","Ajakirjad","Majandus","Tähelepanuväärsed isikud"," "," "," "," "," "," "," "," "],
						["Haridus","Loodus","Tehnoloogia","Meditsiin","Välisriigid","Sotsiaalteadused","Edasine haridus","Keeled"," "," "," "," "],
						["Vaba aja hobid","Turism","Käsitöö","Tehnikaalad","Trenn ja tervis","Kokandus","Reklaam","Aiandus"," "," "," "," "],
						["Originaalkeeles","Mustvalge","Avaldamata","Otseülekanne"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanali vahelejätmine","Kanali sorteerimine","Kanali muutmine","Kanali kustutamine","kanali vahetus","kanal sisestada"];
var chEditPara 		= ["Võrgu nimi","Kanāla numurs","Kanāla nosaukums","Sagedus","Värvisüsteem","Helisüsteem"];
var chSatTitles		= ["Satelīta tips","Satelliitantenni seadistamine","Vali satelliit"];
var chSatEidtOptions= ["Satelliidi nimi","Pozīcija","LNB Võim","LNB sagedus (MHz)","Diseqc sisend",
						"Toon 22 KHz","tonis eksplozijas","Sagedus (KHz)","Sümbolikiirus (Ksym/s)","Polarisatsioon",
						"Signaalitugevus","Signaali kvaliteet","Satelīta statuss"];
var chSatAutoPromt	= [["Kõik","Võrk"],
						["Kõik","Tasuta"]];
var chSatAutoScanOptions=["Vali satelliit","Skannimisrežiim","Кanalid"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universaalne",];
var chSatDiSEqCInput= ["Deaktiveeri","A","B","C","D"];
var chSatTone22KHz	= ["Automaatne","Sees","Väljas"];
var chSatToneBurst	= ["Deaktiveeri","tonis eksplozijas A","tonis eksplozijas B"];
var chSatPolarization= ["Horisontaalne","Vertikaalne"];
var chSatSetupOptions=["Antenas tips","Tuuner","Joslas frekvence"];
var chSatAntennaType= ["Viens kabelis","Universaalne"];
var chSatUserBands	= ["Liet. frekv. j. 1","Liet. frekv. j. 2","Liet. frekv. j. 3","Liet. frekv. j. 4","Liet. frekv. j. 5","Liet. frekv. j. 6","Liet. frekv. j. 7","Liet. frekv. j. 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Kasutaja määratud"];
var pleaseSelectSat = "Palun valige esmalt satelliit!";
var subOptions		= ["Subtiitrid","Digitaalsete subtiitrite keel","Digitaalsete subtiitrite teine keel","Subtiitrite tüüp"];
var ttxOptionsCon      = ["Dekodeerimislehe keel","Digitaalne teleteksti keel"];
var subType			= ["Parasts","Kuulmiskahjustusega"];
var netIntf     	= ["Ethernet","Traadita"];
var netConnDes		= ["TV testib võrguühendust.\nPalun oota",
						"Võrguühenduse katse õnnestus!",
						"Võrguühenduse katse ebaõnnestus."];
var netSsidError	= "Kehtiva SSID pikkus on 1-32 tähemärki. Palun kontrollige SSID üle.";
var netOthers		= ["PIN-kood"];
var netWlessAutoDes	= ["Palun kontrolli järgmise PIN koodi Access Point'i paigaldatust enne nupule OK vajutamist.",
						"Palun vajuta nuppu Access Point'il 120 sekundi jooksul enne OK vajutamist."];
var netConnRemind	= ["Vale parool!",
						"Ühendamine. Palun oodake!",
						"Ühendus õnnestus ja IP on olemas!",
						"Link puudub",
						"Teler skaneerib pääsupunkte\nPalun oota",
						"Teleriga ei ole ühendatud ühtegi traadita seadet!"];
var netWireIpOptions= ["IP seadistus","Aadressi tüüp","IP aadress","Alamvõrgumask","Vaikelüüs","Primaarne DNS","Sekundaarne DNS"];
var netWireConnRemind= ["Palun sisesta väärtus vahemikus 0 - 255.",
						"Edukalt ühendatud!",
						"Palun sisestage kehtiv aadress",
						"Edukalt ühendatud!",
						"Ühendus ebaõnnestus!",
						"Ühendamine. Palun oodake!",
						"Palun sisestage väärtus vahemikus 1-223."];
var netFlixOptions	= ["Deaktiveeri","ESN"];
var netFlixDes	 	= ["Kas oled deaktiveerimises kindel?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Tarkvara uuendus";
var netUpdateDialogTitle = "Tarkvara uuendamine";
var netBGDownloadTitle 	= "Allalaadimine";
var netUpdateLoadingPrompt= ["Uuenduse otsimine, palun oodake!",
							"Tarkvara laetakse alla… Palun oodake!",
							"Palume telerit tarkvara uuendamise ajal MITTE VÄLJA LÜLITADA!",
                            "Hädavajalik tarkvara uuendus laetakse automaatselt taustal alla!"];
var netUpdatePrompt= ["Õnnitlused – sul on olemas tarkvara kõige uuem versioon!",
						"Leiti uus tarkvaraversioon XXXX. Kas tahad selle kohe alla laadida? See võib veidi aega võtta, sõltuvalt võrgu olukorrast.",
						"Sisselogimine ebaõnnestus!",
						"Andmeid ei õnnestunud kätte saada, palun proovige hiljem uuesti!",
						"XML Update sõelumine ebaõnnestus!",
						"Link puudub",
						" Tarkvara allalaadimine edukas. Kas soovite alustada vilgutamist?",
						"Andmed kadunud!Allalaadimine ebaõnnestus!",
						"Paketi kontroll ebaõnnestus,palun proovi uuesti!",
						"Võrk on ebanormaalne.Palun kontrolli ja ühenda uuesti…",
						"Värskendus ebaõnnestus.Palun käivita teler uuesti!",
						"Versiooniuuenduse fail kustutati ootamatult. Palun tehke versiooniuuendus võrgu kaudu uuesti.",
						"Tarkvara taustal alla laadimine õnnestus. Kas tahate alustada versiooniuuendust?"];
var netUpdateButtonText = ["Lae alla", "Uuendus", "Hiljem", "Mitte kunagi", "OK","Jätkake"];
var autoDetectPrompt = ["Leiti uus tarkvaraversioon XXXX. Kas tahad selle kohe alla laadida? See võib veidi aega võtta, sõltuvalt võrgu olukorrast.",
						"Leiti uus tarkvara versioon XXXX. Kas soovite kohe uuendada?",
						"Viimane versiooniuuenduse protsess võrgu kaudu katkestati. Versiooniuuendus tuleb uuesti teha.",
                        "Uue tarkvara versiooni XXXX allalaadimine ei ole lõppenud. Kas soovite allalaadimist kohe jätkata?",
                        "Tarkvara on alla laetud. Kas soovite kohe uuendada?"];
var sysOptions		= ["E-kasutusjuhend","Menüü keel","Taimer","Lukusta","Sisendi seaded",
						"Tarkvara uuendus","Asukoht","HbbTVrežīms","Küpsised","Ühisliides",
						"Täpsemad seaded","Taasta tegevus","LED indikaator"];
var sysResetDes		= "Olete kindel?";
var sysMenuLangOptions=["Keel","Eelistatav kuuldav keel","Teine helikeele eelistus"];
var sysTimerOptions	= ["Ajavöönd","Piirkonna nimi","Kell","Unetaimer","Autom. ootereziim", "Country region"];

var sysTimeZone		= ["Teadustajana","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Väljas","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Väljas","4 tundi","6 tundi","8 tundi"];
var sysRegionName	= ["Madriid ","Kanaarid"];
var sysClockOptions	= ["Automaatne sünkroniseerimine","Datums","Laiks","Sisselülitustaimer","Taimer",
						"Kanal sees","Väljalülitustaimer","Taimer"];
var sysTimer		= ["Väljas","Iga päev","Üks kord"];

var sysInputSet		= ["Nimetus puudub","DVD","Blu-ray","HDD","DVDR",
						"HD salvestus","Mäng","VCR","PC","Digitaalne STB ",
						"HD digitaalne STB","Kaamera","Salvestaja","Muu"];
var sysAvVideoInput	= ["Automaatne","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["USB kaudu","kaudu võrgu","Kanali kaupa"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Ei suuda eetris uut tarkvara leida!",
						"Leiti uus tarkvara versioon XXXX. Kas soovite kohe uuendada?",
						"Sisestage palun USB-mälupulk.",
						"Paketi kontroll ebaõnnestus,palun proovi uuesti!",
						"Palun ÄRGE ühendage USB pordilukku lahti ja lülitage TV-komplekti välja püsivara uuendamise ajal!!",
						"Tarkvara on edukalt uuendatud.\nTeler taaskäivitub siis automaatselt!",
						"Leiti uus tarkvaraversioon XXXX. Kas tahad selle kohe alla laadida? See võib veidi aega võtta, sõltuvalt võrgu olukorrast.",
						"Allalaadimine",
						" Tarkvara allalaadimine edukas. Kas soovite alustada vilgutamist?",
						"Ei uuendatud!",
						"Toimub uuendusfailide otsimine",
						"Tarkvara uuendamine õnnestus. \nPalun taaskäivitage teler."];
var sysProductInfo	= ["Praegune versioon","Toote nimi","Tootja nimetus","Korpuse nimetus"];
var sysCiDes		= ["CI kaarti pole esitatud."];
var sysAdOptions	= ["DivX(R) lindistus","DivX(R) registreeringu tühistus","T-Link","Authorization Error","Registrist kustutamise kinnitus",
						"Rendi kinnitus","Laenutusaeg on läbi","Bluetooth'i deklaratsiooni ID"];
var sysRegistDes	= ["Peate kaitstud DivX videote esitamiseks seadme registreerima",
						"Registreerimiskood:",
						"Registreeri siin: http://vod.divx.com"];
var sysDregistDes	= ["Registreeringu tühistuskood:",
						"Tühistage registreering siin: http://vod.divx.com",
						"Kas jätkate registreerimist?"];
var mediaAuthorization = ["Seadmega ei ole lubatud seda DivX(R) kaitstud videot esitada."];
var deregistrationConfrimation = ["Teie seade on juba registreeritud","Kas olete kindel, et soovite registreeringu tühistada?"];
var rentalConfirmation = "DivX(R) laenutus on kasutanud YYYY vaatamisest XXXX vaatamist. Kas jätkad?";
var rentalExpired 	= "DivX(R) laenutus on ära kasutanud XXXX/YYYY vaatamist. DivX laenutus on aegunud.";
						
						
var sysLockOptions	= ["Kanali lukustus","Ajaintervalli lukustus","Vanemlik reiting","Sisendi blokeerimine","Tagapaneeli lukk","Paigalduse lukustamine",
						"Parooli muutmine","Maks. helitugevus","Tühjenda kõik"];
var sysTimeIntervals= ["Lukustuse tüüp","Algusaeg","Lõpu aeg"];
var sysRatingOptions= ["Puudub","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-reiting (Hispaania)"];
var changePass		= ["Parooli muutmine","Uus parool","Parooli kinnitamine"];
var changePassDes	= ["Vale parool.\nPalun sisestage uuesti!",
						"Parool ei klapi.\nPalun sisestage uuesti!",
						"Salasõna muutmine õnnestus!",
						"See kood on parooliks liiga lihtne.\nPalun sisesta uuesti!"];
var sysPowerOnChOptions= "Vali režiim";
var sysPowerOnCh	= ["Viimane staatus","Kasutaja valib"];
var netWlessSecu    = ["Avatud","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Puudub","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Toetuseta"];
var netWlessSecu3	= ["Puudub","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Toetuseta"];
var netOptions		= ["Internetiühendus","Liides","Traadita ühenduse seadistused","IP seadistused","Informatsioon",
						"Ühenduse test","DLNA","Teleripult","Netflix’i seaded","Teleri WiFi-ühendus",
						"Aadressi tüüp","IP aadress","Alamvõrgumask","Vaikelüüs","Primaarne DNS",
						"Sekundaarne DNS","SSID","BSSID","Palun sisesta SSID:","Kasutajatunnus"];
var chEditDes		= ["Korduv kanali number!","Tähemärgi kustutamiseks vajutage punast nuppu!","Vigased kanalinumbrid."];
var chEpgNoProgram	= "Saateinfo puudub, palun otsige esmalt kanaleid!";
var chEpgWords		= ["Programmijuht","Saate andmed puuduvad.","Kanal lukus!","Saate teave puudub.","Saate pealkiri puudub."];
var chEpgBooking	= ["ajakava info", "Kanāla numurs","Alguskuupäev","Algusaeg","Lõpu aeg",
						"Korduse tüüp","Graafiku tüüp","Lisama","Asenda","Muuda",
						"Lisa/muuda"];
var epgHotKey		= ["Eelm. päev","Järgm. päev","Filter","Graafiku loend","Lisa graafik"];
var chEpgBookRemind	= ["Ebaõige algusaeg","Ebaõige lõppaeg","Korduv plaan","Salvestamine edukas.","Edukalt kustutatud."];
var chSchePara		= ["Graafiku loend","Algusaeg","Alguskuupäev","Programmi pealkiri","Kanāla nosaukums",
						"Ilgums","Kordus","Plaan","Muuda","Dzēst"];
var dateTimer		= ["Üks kord","Iga päev","Iga nädal"];
var scheduleDeleteReminds="Kas soovite selle graafikut kustutada?";
var scheduleNoLists	= "Graafikuloend puudub. Vajutage punast nuppu, et lisada graafik.";
var chListWords		= ["Kanalite nimekiri","Vali loend","Tuuneri režiim","Lisa lemmikute hulka","Eemalda",
						"Vali kanalie loend","Vali tuuneri režiim","Vaheta"];
var chListType		= ["Kõik","Digitaalne","Analoogne","Raadio","Tasuta","Lemmikud"];
var chAutoScanOptions=["Atlasiet operatoru","Kanali tüüp","Automaatne otsing"];
var souSoundType	= ["Kehtetu","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Duaal1","Duaal2","Duaal2",
						"Nicam mono","Nicam stereo","Nicam duāls 1","Nicam duāls 2","Nicam Dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muusika","Film","Selge hääl","Standard","Isiklik"];
var picAdRgbMode	= ["Väljas","Ainult punane","Ainult roheline","Ainult sinine"];
var picAdOptions	= ["Müravähendus","MPEG NR","RGB mode","Dynamic Contrast","LED-liikumise selgus",
						"Ihutoon","Filmirežiim","Mängurežiim","Värvitemperatuur","White Balance",
						"Külmuta","Black Stretch","Üleskaneering","Gamma","HDMI režiim","10P valge tasakaal","Värvihaarde parandaja",
						"Hägususe vähendamine","Värina vähendamine","Värviruum","Liikumise selgus"];
var pic10Pwhite     = ["Intervall","Punane","Roheline","Sinine","Taastamine","Värv","Kollane","Tsüaansinine","Purpurpunane"];
var picMotionClarity = ["Liikumisrežiim","Liikumise interpolatsioon","LED-liikumise selgus","Hägususe vähendamine","Värina vähendamine","Taastamine"];
var picMotionMode   = ["Automaatne","Film","Sujuv","Tühjenda","Sport","Klient"];
var picResetDes		= "Kõik personaalsed seadistused tühistatakse. Kas olete kindel, et soovite valitud tegevusega jätkata?";
var pic10PReset     = "Kas olete kindel, et soovite 10P valge tasakaalu lähtestada?";
var picMotionReset  = "Kas soovite liikumise selguse lähtestada?";
var picColorSpaceReset    = "Kas olete kindel, et soovite värviruumi lähtestada?";
var picOptions		= ["Pildi eelmääramine",
						"Taustvalgustus","Eredus","Kontrast","Värvitugevus","Värvivarjund","Teravus","Värvitemperatuur","Ekraani režiim","Automaatne vorming",
						"Spordi lisaseade","3D","3D navigācija","ECO Seaded","Geomeetria",
						"Täpsemad seaded","Rakenda pildirežiimi","Pildi lähtestus"];
var picSize			= ["16:9 formaat", "4:3 formaat", "14:9-vorming", "Kinovaade",
						"16:9 Suum", "16:9 Suum üles","14:9 Suum","Venitatud suum","Lai suum",
						"Suum 2","Lai suum 2","Algupärase resolutsiooni sobitus","Punkt punkti haaval","Originaal","Panoraam"];
var others			= ["Helitugevus","Pārraide","Parool","Olek","Salvesta","Asenda","Alusta","Välju","Otsing","Dzēst",
						"Puudub","Automaatne","Skaneerimine","Andmeturve","Ühenda","Värskenda","Proovi uuesti","Lõpetamine","Seaded","Кanalid",
						"Muuda","Sisesta","Signaal!","Lõpeta","Stereo","Heli","Allikas","Audio puudub","Nõuanded","Taastamine",
						"Klient","Seadistus","Salvesta","Kasutaja","Sulge klaviatuur","Turvarežiim","Iga päev","PVR-loend"];
var direction		= ["Vasak","Parem","Üles","Alla"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Tundmatu"];
var soundChannels   = ["Tundmatu","Mono","Alam","Kahe kanaliga mono","Stereo","Stereo Sub","Stereo Dolby Surround","Ümbritsev 2CH","Ümbritsev","3.0Ch","4.0Ch","5.0Ch","Mono LFE","Dual Mono LFE","Stereo LFE","Surround 2Ch LFE","Surround LFE","3.1Ch","4.1Ch","5.1CH","7.1CH","Liitstereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Vasak","Parem","Muud"];
var prompts			= ["Seadistage pilt vastavalt enda vaatamiskeskkonnale.",
						"Reguleerige heledust. Mida lähemal 100-le, seda eredam.",
						"Reguleerige kontrastsust. Mida lähemal 100-le, seda suurem on tumeda ja heleda erinevus.",
						"Reguleerige värviküllastust. Mida lähemal 100-le, seda intensiivsem on värv.",
						"Reguleerige teravust. Mida lähemal 100-le, seda selgemad on detailid.",
						"Reguleerige taustvalgustust. Mida lähemal 100-le, seda eredam on ekraan.",
						"Reguleerige värvitooni. See seade muudab värvitoone.",
						"Valige käimasoleva saate jaoks sobivaim pildivorming.",
						"Konfigureerige energiasäästuvalikud.",
						"Reguleerige arvutiseadme ühendamisel ekraanigeomeetria seadeid.",
						"Valige veel täpsemaid pildi seadistusi.",
						"Lähtestage kõik pildi seadistused vaikeseadistustele.",
						"Valige oma isiklike eelistustega sobiv helirežiim.",
						"Reguleerige helitugevuse tasakaalu vasaku kanali ja parema kanali vahel.",
						"Helipäringusüsteem TruSurround HD pakub rikkalikku ja selget heli madalatel või kõrgetel sagedustel.",
						"Digitaalne liidesevorming, mis ühendab teleri digitaalse heliväljundi kodukino helisüsteemiga. ",
						"Valige oma isiklike eelistustega sobiv heli keel.",
						"Võimaldab nägemispuudega inimestel telesaateid nautida.",
						"Kontrollige teleri pilti, heli ja signaali.",
						"Valige oma teleri signaalile sobiv kanalite loendi tüüp.",
						"Valige saate jaoks ekraani allosas kuvatavate subtiitrite keel.",
						"Vaata antud kanali teksti ja pilte",
						"Digital Living Network Alliance. Naudi koduvõrgu vahendusel teistest seadmetest (nt arvutist) muusikat, fotosid ja videoid. ",
						"Kuva nutitelefoni sisu teleris ja kasuta nutitelefoni teleri puldina.",
						"Kuva Miracast-ühilduva Android-seadme sisu enda teleri ekraanil.",
						"Pange oma teler lukku.",
						"Valige oma seadmele nimi.",
						"Valige oma vaatamiskeskkond.",
						"Lähtestage kõik süsteemi seadistused vaikeseadistustele."];
var initialTitle	= ["Tere tulemast","Algseadistus"];
var initialPrompt	= ["Tehke algseadistus kohe ja teid ootab maailm täis uusi kogemusi!",
						"Palun valige oma keel:",
						"Palun valige oma riik:",
						"Palun vali oma asukoht:",
						"Palun valige oma võrguühenduse tüüp:",
						"Palun valige traadiga võrguühenduse režiim:",
						"Xxxxxxxxx ühendamine ebaõnnestus! Palun ühendage seade vastavalt järgnevale skeemile või valige lähtestamiseks „Left\".",
						"Xxxxxxxxx ühendatud! Palun valige „Right”, et jätkata.",
						"1) Teie teleril võib olla juba sisseehitatud juhtmevaba adapter\n 2) Juhtmevaba USB adapteri olemasolul ühendage see teleriga. Seejärel palun valige juhtmevaba võrgu tüüp.",
						"Skaneerimine. Palun oodake…",
						"Teleriga ei ole ühendatud ühtegi traadita seadet!",
						"Palun veendu enne allpool ‘Järgmine’ nupule vajutamist, kas PIN kood on pääsupunkti paigaldatud.",
						"Enne, kui vajutate nupule „Right”, palun vajutage 120 sekundi jooksul vajutusnuppu pääsupunktil (AP).",
						"WPS (Wi-Fi kaitstud häälestus)",
						"PIN-kood",
						"PBC (vajutusnupu konfiguratsioon)",
						"Järgnevale sisule pääseb ligi ainult võrguühendusega. Kas soovite võrgu seadistamise vahele jätta?",
						"Uued tarkvara uuendused on saadaval, uuenduste allalaadimise aeg sõltub teie võrgu olekust.",
						"Teie teleri tarkvara uuendamine kindlustab, et saate nautida uusimaid funktsioone ja teenuseid.",
						"Te jääte ilma kõige uuematest funktsioonidest ja teenustest. Kas soovite tarkvara uuendamise vahele jätta?",
						"Jätkamiseks vajutage paremale noolt.",
						"Teleri väljalülitamine uuendamise ajal võib põhjustada rikkeid.",
						"Kui te ei soovi uuendada, siis palun valige „NO”.",
						"Uuendamine, palun oodake",
						"Tarkvara saab uuendada ka alamenüüst SYSTEM/SOFTWARE UPDATE.",
						"Valitud riik nõuab parooli seadistamist.\nPalun sisesta telerile kood ja kinnita see.",
						"This code is too simple.\nPlease use different digits.",
						"Õnnitleme! Esmane seadistamine on lõpule viidud. Konfiguratsiooni on võimalik muuta peamenüüst ja vastavatest alamenüüdest.",
						"Palun vali turvarežiim:",
						"Palun valige traadita võrguühenduse režiim:",
						"Võrk"];
var initNetCabAndDonRe = ["Võrgukaabel ei ole ühendatud, palun ühendage võrgukaabel!","Puudub sisseehitatud juhtmevaba adapter või juhtmevaba USB adapter."];
var initChPrompt = ["Telekanalite installeerimine","Palun valige antenni skaneerimistüüp.","Automaathäälestuse töötlemine...","Leiti järgmised antenni kanalid:","Palun valige kaabelkanalite otsingu tüüp.","Palun valige järgnevast nimekirjast üks operaator.","Palun konfigureerige otsingu teave","Leiti järgmised kaabelkanalid:","Palun valige üks operaator järgmisest loendist","Palun valige otsitavad satelliidid või redigeerige valitud satelliiti","Palun määrake satelliidi parameetrid","Leiti järgmised kanalid. Kanalite skaneerimist saab uuesti teostada alamenüüs „Channel/Channel Scan”."];
var initClockPrompt = ["Võtke kasutusele võrgu poolt pakutud kellaaeg!",
						"Palun seadistage kuupäev ja kellaaeg:"];
var initialOptions	= ["Keskkond","Võrguhäälestus","Tarkvara uuendus","Kanali paigaldamine","Kell"];
var initialHotkeys	= ["Tagasi","Valimine","Järgmine"];
var initLocations	= ["Kodu","Osta","Osta (demo)"];
var initNets		= ["Traadiga","Traadita","Mul ei ole võrguühendust"];
var initWireManuals	= ["IP aadress","Alamvõrgumask","Vaikelüüs","Primaarne DNS","Sekundaarne DNS"];
var initSoftUpdates = ["Uuenda kohe","Uuenda hiljem"];
var initChannelIns	= ["Jätkake","Ma ei soovi kanaleid installeerida"];
var initChScanTypes	= ["Digitaalne & Analoog","Digitaalne","Analoogne","Ma ei soovi otsida"];
var initChDvbts		= ["Antenni ATV-kanalid:","Antenni DTV-kanalid:"];
var initChDvbcs		= ["Kaabel-analoogtelekanalid:","Kaabel-digitelekanalid:"];
var initChDvbss		= ["Satelliitkanalid:"];
var initChDvbSOther	= ["Ma ei soovi satelliidilt otsida"];
var initEndConnectedStatus= ["Ühendus katkestatud","WiFi-ga ühendatud","Juhtmega ühendatud"];
var initEndInstallations= "XXXX kanalit installeeritud";
var initEndUpdate	= ["Uuendatud"];

var audioScenes 	= ["Laual","Seinakinnitus"];			
var screenSavers	= ["Saateinfo puudub, palun otsige esmalt kanaleid!",
						"Signaal puudub!",
						"Segatud signaal",
						"Ainult andmed",
						"Audio programm",
						"Ilma heli ja videota",
						"Pole saadaval",
						"Ilma teletekstita",
						"Saate andmed puuduvad.",
						"Programm lukus!",
						"Programm lukus!\nVajutage OK ja sisestage oma kood.",
						"Saate teave puudub.",
						"Saade on alaealistele ebasobiv.\nVajutage OK ja sisestage kood.",
						"Kanal lukus!",
						"Kanal lukustatud!\nVajutage OK ja sisestage oma kood.",
						"Sisend lukustatud!\nVajutage OK ja sisestage oma kood.",
						"Pole toetatud!",
						"See teenus ei ole hetkel saadaval",
						"Sisend lukus!",
						"Saate pealkiri puudub.",
						"Puuduv funktsioon"
						];
var chBookingPromt	= ["Antud kanalil on planeeritud salvestus, teler alustab salvestamist.",
						"Leiti planeeritud salvestamine.\n Lülitage salvestamiseks kanalile XXXX",
						"Käesoleval kanalil on meeldetuletus.",
						"Leiti planeeritud meeldetuletus.\n Lülitage kanalile XXXX"];
var timeUnit		= ["s","min"];
var ciPromt			= ["Võrgu andmed on muutunud. Uuendamiseks teostage uuenduste otsing.",];
var othersPromt		= ["Palun oodake…",];
var menuOptions		= ["Pilt","Heli","Kanal","Võrk","Süsteem"];
var optionOptions	= ["Pildi eelmääramine","Heli valmissäte","Külmuta","T-Link","ajanihe","PVR","Graafiku loend","Seaded"];
var optionTLinkPromt= [["Automaatne sisselülitamine","Autom. ootereziim","Abimenüü"],
						["Ieslēgšana","Ootel","Võimendi helitugevus"]];
var powerPromt		= ["Teler lülitub varsti välja! Palun vajuta tühistamiseks suvalist klahvi."];
var ttxLanguage		= ["LÄÄNE EUR","IDA EUR","Vene","Araabia/Heebrea","Farsi","Araabia","Valgevene","Kreeka","Türgi"];
var ttxOptions		= ["Paljasta","Alamlehtede kerimine","Keel","Alarmi leht","Uudisnupp"];
var weekday         = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
var lcnConfflict	= "Sellel programmil on probleemid vastuvõtuga. Teine versioon on saadaval kanalil %d.";
var inShopMode		= "Teler on poerežiimis. Kodurežiimi jaoks palun valige „System” ja muutke menüüs ära „Location”.";
var nitRefresh		= "Võrguandmed muutusid. Kas soovite läbi viia uuenduste skaneeringu?";
var picHDMIMode     = ["Automaatne","Graafika","Video"];

var glassRemind    	= ["Palun paaristage 3D prillid teleriga\n(Hoidke all POWER nuppu 3D prillidel).","Teie 3D prillid ei ole teleriga ühendatud",""];
var pvrRemind 		= ["Ärge eemaldage USB-seadet ega katkestage toidet"];
var pvrConName   	= ["PVR","Saateinfo:",["Note:If you record the HD channel,please to select  the  disk(of speed >5.0MB/sec),and to select the disk (of speed >3.0MB/sec) when yourecord the SD channel.","Salvestatud video asub kaustas \"pvr\"."],"Lõpetamine","Lindista","tund","Minut","Ilgums","Nõuanded","Kasuta nooleklahve, et muuta salvestamise kestust."];
var pvrDisRemind 	= "Palun sisestage lindistamiseks USB pulk.";
var pvrRemindWords  = ["Kas soovite väljuda?",
							"Kas soovite salvestamist katkestada ja salvestatud faile sirvida?",
							"Disks ir izstumts",
							"Kettal pole piisavalt vaba ruumi.",
							"Salvestatud faile ei ole. Alusta salvestamist.",
							"PVR-i ei saa skrambleeritud kanalis kasutada.",
							"See omadus pole kasutatav",
							"Salvestamine edukas.",
							"Kas tahad peatada lindistuse ja muuta sisendallikat?",
							"Teler lõpetab käimasoleva salvestuse. Kas soovite väljuda?",
							"PVR-salvestamine nõuab head teleri signaali, palun kontrollige signaali tugevust."];
var pvrChangeCh 	= ["Kas vahetan kanalit?",
							"Kas tahad peatada lindistuse ja muuta kanalit?"];
var pvrChangeToPIN8	= ["Kas soovite SCART-sisendiga ühendatud seadme allikaks muuta?  ",
				    		"Kas soovite salvestamisprotsessi lõpetada ja SCART-sisendiga ühendatud seadme allikaks muuta?"];
var pvrChangeToCEC  = ["Kas soovite HDMI-sisendiga ühendatud seadme allikaks muuta?",
				  			 "Kas soovite lõpetada salvestamisprotsessi ja HDMI-sisendiga ühendatud seadme allikaks muuta?"];
var pvrGuideJump    = ["Kas soovite sisestada EPG?",
							"Kas tahad peatada lindistuse ja siseneda ETK-sse?"];
var pvrMediaJump    = ["Kas soovite sisestada andmekandja?",
							"Kas tahad peatada lindistuse ja siseneda Media-sse?"];
var timeshiftExtra	= ["Kas soovite peatada ajanihke ja lülitada muudan kanalit?",
						"Kas soovite ajanihke lõpetada ja SCART-sisendiga ühendatud seadme allikaks muuta?",
						"Kas soovite ajanihke lõpetada ja HDMI-sisendiga ühendatud seadme allikaks muuta?",
						"Ajanihet ei saa skrambleeritud kanalis kasutada.",
						"Kas soovite ajanihke lõpetada ja EPG sisestada?",
						"Kas soovite peatada ajanihke ja lülitada teleri USB-režiimi?",
						"Kas soovite peatada ajanihke ja lülitada Muudan sisendi allikat?",
						"Palun sisestage lindistamiseks USB pulk.",
						"Ketta maht pole piisav",
						"Teler lõpetab käimasoleva ajanihke. Kas soovite väljuda?"];
var timeshiftStatus	= ["Edasikerimine","Lõpetamine","Mängi","Paus","Tagasikerimine"];
var pvrPowerOffRemind= ["Ooterežiimis salvestamine","Ootel","Teler salvestab praegu, kas soovite salvestamist jätkata, kui teler on ooterežiimis?"];
var timeshiftInitTitle= "Ketta seaded";
var timeshiftInitReminds= ["See viisard seadistab USB-kettaseadme ajanihke jaoks. Kasutage seadistusrežiimi.",
						 "Paremaks jõudluseks soovitame USB-ketta formaatida. Nii kustutatakse kõik andmed.",
						 "Ajanihke kasutamiseks valige faili suurus",
						 "Formaatimine",
						 "Kettal pole piisavalt vaba ruumi.",
						 "Ajanihke faili loomine",
						 "Kiiruse test",
						 "Kettaseadme kiirus (< %f MB/sec) on ajanihke funktsiooni aktiveerimiseks liiga väike!",
						 "Ketas on ajanihkeks valmis. Parema jõudluse saavutamiseks soovitame aga ketast muuta (kiirus > %f MB/sec).",
						 "Ketas on ajanihkeks valmis."];
var timeshiftInitButtons= ["Formaadi","Jäta vahele","Katkesta","OK","Lõpeta","Välju"];
var timeshiftInitOther=["Ketta kiirus:","MB/sek"];

var selectChoice	= "Olete kindel?";
var chAtvStore		= "Salvesta kui XXXX";
var chEpgFirstGenreUK= ["Film","Uudised ja päevakaja","MEELELAHUTUS","Sport","Lastele","Haridus","Elustiil","Draama"];
var homePageTitleList = ["RAKENDUSED","TV","VIDEOD","Avaleht"];
var homePageFavAndAllName  = ["Lemmikrakendused","Kõik rakendused"];
var homePageBackUp = ["E-kasutusjuhend","GuideOn"];
var homePageRemind   = ["Täielikud funktsioonid on saadaval ainult võrguühendusega.","Teie teleril ei ole veel ühtegi kanalit. Saated on saadaval peale kanalite skaneerimist.","No Program","Otsi kanaleid kohe?"];
var homePageHistory = ["Ajalugu"];
var miracastTitle = ["Teleri WiFi-ühendus","TCL-seade"];
var miracastRemind=["Teleri WiFi-ühendus võimaldab jagada nutitelefonide või tahvelarvuti ekraanipilti ja heli juhtmevabalt teleriga. Selle abil on võimalik vaadata nutitelefoni või tahvelarvuti sisu teleriekraanil. Võite näiteks käivitada oma nutitelefonis video ja näidata seda samal ajal teleriekraanil või tahvelarvutiga mängides mängu suurele teleriekraanile kuvada.","Selle teleri WiFi TV link on valmis. Alustage nüüd oma seadme ekraani teleriga jagamist.","Ühendamine. Palun oodake!","Ühendus ebaõnnestus!","Ühendamine ebaõnnestus. Palun kontrollige!"];
var homePageLittleWin = ["Seaded","Meedium","Lemmikkanalid","Smart TV","EPG"];

var hbbtvStopRemind  = ["Kas soovite taasesitust peatada?"];
var colorSystem = ["Automaatne","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Lisateabe saamiseks vajutage OPTIONS nuppu";
var emptyListInfo = "TV-ga ei ole ühendatud ühtegi seadet!";
var optionVideoListArray_1 = ["Pildi eelmääramine", "Heli valmissäte", "Taasesitusrežiim", "Ekraani režiim", "3D Režiim", 
							  "P-V lüliti", "Sügavusteravus", "Subtiitrid", "Heliriba", "Pealkiri", "Peatükk", "Informācija"];
var optionVideoListArray_2 = ["Pildi eelmääramine", "Heli valmissäte", "Taasesitusrežiim", "Ekraani režiim", 
							  "Subtiitrid", "Heliriba", "Pealkiri", "Peatükk", "Informācija"];
var bottomTipsText = ["Taasesitus/Paus", "Edasikerimine", "Tagasikerimine", "Esitusloend", "Seaded"];
var picturePresetArray = ["Standard", "Dynamic", "Loomulik", "Film", "Isiklik"];
var videoPlayModeArray = ["Korda kõiki", "Korda ühte", "Parasts"];
var screenModeHDArray = ["16:9", "4:3", "Kinovaade", "Lai suum", "Suum 2", "Lai suum 2", "Venitatud suum", "Automaatne"];
var screenModeSDArray = ["16:9", "4:3", "Kinovaade", "14:9 Suum", "16:9 Suum", "16:9 Suum üles", "Automaatne"];
var Mode3DArray = ["Väljas", "2D-st 3D-ks", "Kõrvuti", "Ülaosa ja alaosa", "Vaheldumisi liin"];
var videoOptionListArray = ["Väljas", "Lugu", "Subtiitrid", "Pealkiri", "Peatükk"];
var subMenuTitleText = "Subtiitrid";
var langMenuTitleText = "Heli keel";
var titleMenuTitleText = "Pealkiri";
var mode3DMenuTitleText = "3D Režiim";
var langInfoText = "Lugu";
var STOP_RESUME_INFO = "Peata-jätka";
var playListName = " nimi";
var eb_tips = "Nõuanded";
var ok_button = "OK";
var eb_info = ["Heli dekodeerimise viga.", "Video dekodeerimise viga.", "Helivorming ei ole toetatud.", 
			   "Videovormingut ei toetata.", "Faili ei ole võimalik avada.", "Viga taasesitamisel, palun proovige uuesti.",
			   "Failivorming ei ole toetatud.", "Oih! Pleier on lakanud töötamast.",
			   "Faili asukoht on vigane või puudub.\n Taassisestage mäluseade ja proovige uuesti.",
			   "Jätka taasesitust poolelijäänud kohast?"];
var frameTitleText = "Uus seade";
var eb_quit_info = "Kas olete kindel, et soovite väljuda?";
var eb_yes = "JAH";
var eb_no = "EI";
var offinfo = "Väljas";
var naInfo = "Kehtetu";
var consoleInfoArray = ["Edasikerimine", "Tagasikerimine", "Taasesitus/Paus", "Esitusloend"];
var cantOperateText = ["Funktsiooni ei toetata."];
var chapterChangeInfo = "Ainult peatükid 1 kuni XXXX on saadaval.";
var metaDataArray = ["Pealkirja/väljaande metaandmed:", "Peatüki metaandmed:", "Heli metaandmed:", "Subtiitrite metaandmed:"];
var metaTitleInfo = "Pealkiri";
var metaChapterInfo = "Peatükk";
var videoLoadingInfo = "Analüüsimine…";
var listLoadingInfo = "Laadimine…";
var pgInfo = "Reiting:";
var fileNameText = " nimi";
var fileDateText = "Datums";
var fileSizeText = "Suurus";
var fileDurationText = "Ilgums";
var fileDirectorText = "Režissöör";
var fileCopyrightText = "Autoriõigused";
var fileArtistText = "Esitaja";
var fileAlbumText = "Album";
var fileGenreText = "Žanr";
var fileYearText = "Aasta";
var fileGenreText = "Žanr";
var mainListArray = ["Kõik", "Pilt", "Video", "Muusika"];
var sortArray = [" nimi", "Datums"];
var parserArray = ["Parasts", "Rekursiivne"];
var emptyTipsInfo = "Oih! Ühtegi toetatud faili ei leitud.";
var emptyFolderInfo = "Oih! Ühtegi toetatud faili ei leitud.";
var sortName = "Järjesta";
var parserName = "Parser";
var divx_str1 = "DivX(R) lindistus";
var divx_str2 = "DivX(R) registreeringu tühistus";
var infor_str = "Informācija";
var quickMenuEmptyText = "Saadaval valikuid ei ole.";

var musicSoundPresetArray = ["Standard", "Film", "Muusika", "Selge hääl", "Isiklik"];
var musicInformationArray = [" nimi", "Esitaja", "Album", "Žanr:", "Aasta:", "Kestus:"];
var playListName = " nimi";
var playTipsInfo = ["Taasesitatakse esimest faili.", "Taasesitatakse viimast faili."]
var musicNameInfo = "Name";
var musicArtistInfo = "Esitaja";
var musicAlbumInfo = "Informācija";
var optionSoundPresetInfo = "Heli valmissäte";
var optionBGMInfo = "Mängi taustal";
var optionAudioOnlyInfo = "Ainult heli";
var optionInfoText = "Informācija";

var remotePhoneConnecte = "XXXX on teleriga ühendatud!";
var tvRemoteTitle		= "Teleripult";
var tvRemoteDeveloper	= "Rakenduse on välja töötanud TCL";
var tvRemoteDeviceTitle	= "Seadme nimetus:";
var remoteOption		= ["Meedia jagamine","Kaugjuhtimispult","Abi","Info","Smart Connect"];
var remotebottom		= "Palun laadige „TCL nScreen” enda nutitelefonis alla";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Telefoni kaudu teleriga fotode, videode ja muusika jagamine.",
							"Sammud: \n   1. Ava telefonis „TCL nScreen”. Ühenda telefon teleriga läbi sama WiFi-võrgu;\n   2. Kliki „Media Sharing” peal, et sirvida meediafaile;\n   3.  Saada meedia telerisse, et seda taasesitada (kasutades ühte järgnevatest valikutest)",
							"      a) Lohista kataloog/fail ekraani ülaosas teleri ikooni peale;\n      b) Viibuta telefoniga teleri suunas esimese faili esitamise alustamiseks;\n      c) Taasesita fail telefonis ja vajuta ikoonile, mis jagab seda teleriga;",
							"   4. Raputa teleris toimuva taasesituse ajal telefoni eelmise või järgmise faili esitamiseks."];
var controlReminds		= ["Kasuta telefoni teleri kaugjuhtimispuldina.",
							" ",
							"Sammud: \n   1. Ava telefonis „TCL nScreen”. Ühenda telefon teleriga läbi sama WiFi-võrgu;\n   2. Kliki „Remote Control” peal, et telekat juhtida."];
var helpDeviceWords		= "Mitme ekraani kasutamine";
var helpBottom			= "Pilvetehnoloogia ajastul on nutiseadmed nagu telefon ja teler omavahel ühendatud. Jaga meediat oma perega mitmel ekraanil ja juhi telerit telefoniga!";
var helpReminds			= ["Ettevalmistused\n   1. Lae Google Play või Apple Store keskkonnast alla rakendus „TCL nScreen” ja installeeri see.\n   2. Ühenda telefon teleriga läbi sama WiFi-võrgu.",
							" ",
							"Soovitatav telefon\n   1. CPU: üle 800 MHz\n   2. Mälu: vähemalt 80 MB vaba mälu",
							" ",
							"Vastutusest loobumine\n   Kui rakendus TCL nScreen ei ole teie telefonis saadaval, siis võtke ühendust telefoni tootjaga."];
var helpButtons			= ["Eelmine","Järgmine"];
var aboutReminds		= ["Teleripult","Rakenduse on välja töötanud TCL"];
var aboutExit			= "Välju";
var smartReminds		= ["Kiire ning nutikas ühendus teleri ja telefoni vahel.",
							" ",
							"Sammud: \n   1. Ühenda teler ja nutitelefon sama LAN-võrguga. Ava nutitelefonis „TCL nScreen”.\n   2. Kliki „Smart Connect” peal, et QR-koodi skaneerida.\n   3. Kui teler on saatevaatamisrežiimis, siis vajutage rakenduse TCL nScreen juhtpaneelil asuvat nuppu „INFO” ja hoidke seda 4 sekundit all. Ekraanile ilmub QR-kood.",];
var smartQRReminds		= ["Palun vajutage „Smart Connect” teie telefoni TCL nScreen rakenduses ja skaneerige sisse QR-kood, et teler ja telefon kiiresti ühendada.",
							"QR-kood sisaldab LAN konto infot. Palun hoidke seda."];
							

var consoleTipArray = ["Eelmine","Järgmine","Konsool","Esitusloend"];							
var optionInfoArray = ["Pildi eelmääramine","Taasesitusrežiim","Ilgums","Efekt","Informācija"];

var playModeArray = ["Parasts","Segamine","Kordus"];
var durationArray = ["Lühike (5s)", "Keskmine (10s)", "Pikk (15s)"];
var effectArray = ["Puudub", "Sulandumine", "Pilt paremale", "Pilt vasakule", "Pilt üles", "Pilt alla", "Kasti sisse", "Kastist välja", "Juhuslik"];
var infoArray = ["Nimi:","Suurus:","Kuupäev:","Asukoht"];

var picturePresetBarTitleInfo = "Pildi eelmääramine";
var picturePresetBarArray = ["Standard","Dynamic","Stuudio","Film","Isiklik"];
var upTipsInfo = "Liiguta pilti"; //add yums 2014-10-10
var consoleTipsArray = ["Konsool","Eelmine","Järgmine","Esitusloend","Seaded"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Järgmise pildi esitamiseks vajutage uuesti RIGHT","Eelmise pildi esitamiseks vajutage uuesti LEFT","Esitusloendi kuvamiseks vajutage uuesti DOWN"]; //add yums 2014-10-10

var optionPvrListArray = ["Pildi eelmääramine","Heli valmissäte", "Ekraani režiim", "3D Režiim", "Subtiitrid", "Heliriba", "Informācija"];							
	
var titleSpanFirstArray = ["Juhtimine ja ühendus","Põhitoimingud","RAKENDUSED","TV","Seaded","FAQ"];
var titleSpanSecondArray = [["Kaugjuhtimispult","Paneeli klahvid","Lihtne navigeerimine","Teleri ühendus","Teleri ühendus","Teleri ühendus","Traadita"],["Käivitaja","Olekuriba","Allikas"],["Mängurakendused","Meedium","Teleripult"],["Muuda kanalit ja helitugevust","Kanalite nimekiri","EPG","Kanali paigaldus","Lemmikkanalid"],["Pildi korrigeerimine","Heli korrigeerimine","Kanali korrigeerimine","Tarkvara uuendus","Keel","Lapselukk"],["Korduma kippuvad küsimused","Korduma kippuvad küsimused","Tõrkeotsing","Tõrkeotsing","Tingimused"]];
var contentSpan1_1Array = [["LOEND:","INFO:","MENÜÜ:","TOIDE:","ALLIKAS:","KAVA:","NUTI-TV:"],["Kuvab kanalite loendi","Kuvab saateinfo","Läheb avalehele","Lülitab sisse toite või ooterežiimi","Vali sisendiallikas","Näitab EPG (elektroonilise saatekava) infot","Liigub Smart TV lehele"]];
var contentSpan1_2Array = ["Eelmine kanal","Järgmine kanal","Suurenda helitugevust","Vähenda helitugevust","Läheb avalehele","Kinnita valik","Ooterežiim / Toide sisse"];
var contentSpan1_3Array = ["OK/kava","Kanal üles","Kanal alla","Helitugevus alla","Helitugevus üles","Mõningates funktsioonides nooleklahvidena kasutatav."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV VÄLJA adapter","LAN","Nutitelefon","PC/teleriboks/DVD","Helivõimendi","Helivõimendi/monitor","Teie teleril ei pruugi kõiki pistikuid olemas olla."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Peakomplekt","AV SISSE adapter","SPDIF","CMP AUDIO SISSE adapter","CMP SISSE (YPbPr) adapter","USB-seadmed","USB-seadmed","Peakomplekt","DVC/mängukonsool/ teleriboks/DVD","Helivõimendi","DVC/mängukonsool/ teleriboks/DVD","Teie teleril ei pruugi kõiki pistikuid olemas olla."];
var contentSpan1_6Array = ["Ühisliides","SD","VGA","SCART","Mini SCART","ANTENN SISSE","PCMCIA-kaart","SD-kaart","PC","Teleriboks/DVD","Antenn/kaabel/satelliit","Teie teleril ei pruugi kõiki pistikuid olemas olla."];
var contentSpan1_7Array = ["Tablett","PC","Ruuter","Telefoni","TV"];

var contentSpan2Array = [["Vajutage nooleklahve, et avalehte vaadata.","Seejärel vajutage OK, et vaadata esiletõstetud saateid või  siseneda rakendusse."],["Näita kuupäeva, võrku, seadmeid jms ekraani ülemises paremas nurgas."],["Valige sisendallikas teleriga ühendatud seadmete hulgast. Seadmed võivad olla ühendatud läbi mitmesuguste portide, nagu näiteks TV, AV, HDMI jne."]];

var contentSpan3Array = ["Nautige ja vaadake enda lemmikrakendusi Smart TV lehe vahendusel","Vaadake fotosid ja videoid ning kuulake muusikat USB-mäluseadmelt.","Ühenda enda teler ja nutitelefon või tahvelarvuti sama LAN-võrguga","Klikkige enda nutitelefonil või tahvelarvutil TCL nScreen või TCL nScreen","Jagage enda perega mitmel ekraanil fotosid, videoid ja muusikat ning kasutage teleka juhtimiseks nutitelefoni."];

var contentSpan4Array = [["Kanalite vahetamiseks vajuta UP/DOWN","Helitugevuse muutmiseks vajuta LEFT/RIGHT"],["Vajutage puldil LIST, et vaadata kanalite loendit","Kanali valimiseks vajuta UP/DOWN"],["EPG on ekraanil kuvatav saatekava, mis näitab plaanilisi saateid. Te saate navigeerida, valida, vaadata ja salvestada saateid."],["Otsi ja installeeri kanaleid"],["Lisa ja redigeeri kanaleid"]];

var contentSpan5Array = ["Naudi enda lemmiksaateid videorakenduste abil"];

var contentSpan6Array = [["Süsteemi seadistusvõimaluste kuvamiseks vajuta MENU","Väärtuste muutmiseks sisene pildi seadetesse"],["Süsteemi seadistusvõimaluste kuvamiseks vajuta MENU","Suvandite seadistamiseks sisenege heli seadetesse"],["Süsteemi seadistusvõimaluste kuvamiseks vajuta MENU","Suvandite seadistamiseks sisenege kanali seadetesse"],["Uuendage enda telerit, kui uus tarkvara versioon on saadaval"],["Te saate endale valida eelistatud menüü keele."],["Võimaldab lapsevanematel lukustada lastele ebasobivad kanalid või saated"]];

var contentSpan7_1Array = [["Puudub pilt ja heli","Kontrollige, kas kaitsekork ja voolukatkesti on töökorras.","Ühendage pistikupessa mõni muu elektriseade, et veenduda, kas pistikupesa on sisse lülitatud ja töökorras.","Toitejuhe ei ole pistikupesaga korralikult ühendatud","Kontrollige signaaliallikat."],["Pilt on normaalne, heli puudub","Helitugevuse suurendamiseks vajutage UP nuppu.","Viga heli seadistuses.","Ülekande signaali tõrge."],["Heli on normaalne, pilt puudub","Korrigeeri heledust ja kontrasti","Ülekande signaali tõrge.","Kontrolli, kas see on ainult heli režiimis."]];
var contentSpan7_2Array = [["Raadiosageduse häire","Antud häire põhjustab virvendamist või diagonaalseid triipe, mõningatel juhtudel ka pildi kontrastsuse kadu. Tuvastage raadiohäire allikas ja eemaldage see."],["Värv puudub","Korrigeeri värvi seadeid.","Proovige mõnda muud kanalit. Antud saade võib olla must-valge."],["Pult ei tööta","Vahetage patareisid.","Patareid on ebakorrektselt paigaldatud. Teleri põhitoide ei ole ühendatud."]];
var contentSpan7_3Array = [["USB-seadme sisu ei kuvata","Kontrollige, et USB-mäluseade ühilduks teleriga. ","Kontrollige, et teler toetaks heli- ja pildifailide vormingut."],["Ilma helita esitamine","Teleri pleier ei toeta video helivormingut."],["Failide esitamine ei ole sujuv","USB-mäluseadme ülekande jõudlus võib piirata teleri andmeülekandmiskiirust."]];
var contentSpan7_4Array = [["Millele peaksin tarkvara uuendamisel tähelepanu pöörama","Tarkvara uuendamise ajal ei tohi tekkida voolukatkestusi.","Tarkvara uuendamise ajal tuleks vältida puldi kasutamist.","Varuge kannatust, kuna tarkvara uuendamise protsess võib natukene rohkem aega võtta."],["Tarkvara uuendamine ei põhjusta märgatavaid muudatusi teleri kasutajaliideses.","Tarkvara uuendamine mitte ainult ei uuenda või lisa uusi funktsioone, vaid parandab teatud tingimustel ka teleri jõudlust. Tarkvara uuendamine ei põhjusta märgatavaid muudatusi kasutajaliideses. Mõnikord võib teleri kasutajaliides jääda puutumata."]];
var termsTitle = "Tingimused";
var termsConditions = ["Teleri tootja (TCL) õigusalane info.","SmartTV teenuseid pakkuvate toodete erinevate võimaluste ning saadavaloleva sisu piiratuse tõttu ei pruugi kõik funktsioonid, rakendused ja teenused olla saadaval kõigis seadmetes ega kõigis piirkondades. Mõned SmartTV funktsioonid võivad nõuda ka täiendavaid välisseadmeid või liikmemakse, mida müüakse eraldi. Palun külastage meie kodulehte, kust leiate konkreetsete seadmete andmed ja teavet sisu kättesaadavuse kohta. Teenused ja sisu kättesaadavus SmartTV kaudu võivad aeg-ajalt etteteatamata muutuda. \n   Kogu selle seadme kaudu kättesaadav sisu ja teenused kuuluvad kolmandatele isikutele ja on kaitstud autoriõiguste, patentide, kaubamärkide ja/või muude intellektuaalse omandi seadustega. Seda sisu ja teenuseid pakutakse üksnes isiklikuks mitteäriliseks kasutamiseks. Te ei tohi kasutada seda sisu ega teenuseid viisil, milleks sisu omanik või teenusepakkuja ei ole luba andnud. Ilma piiranguteta eeltoodule, v.a kui sisu omanik või teenusepakkuja ei ole seda selgesõnaliselt lubanud, ei tohi läbi selle seadme näidatud meediasisu muuta, kopeerida, taasavaldada, alla laadida, postitada, edastada, tõlkida, müüa, kasutada sellest tuletatud tööde loomiseks, ega ära kasutada või levitada mistahes viisil. \n   TE KINNITATE JA NÕUSTUTE SELLEGA, ET SEADME KASUTAMINE TOIMUB TEIE OMAL VASTUTUSEL NING TEIE KANDA ON KOGU RISK RAHULDAVA KVALITEEDI, JÕUDLUSE JA TÄPSUSE OSAS. SEADET JA KÕIGI KOLMANDATE ISIKUTE PAKUTAVAID SISU NING TEENUSEID PAKUTAKSE „NAGU ON“ PÕHIMÕTTEL, ILMA GASUGUSE OTSESE EGA KAUDSE GARANTIITA. TCL KEELDUB KÕIGIST OTSESTEST JA KAUDSETEST GARANTIIDEST NING TINGIMUSTEST SEOSES SEADME JA MISTAHES SISU VÕI TEENUSTEGA, KAASA ARVATUD – KUID MITTE AINULT – KAUBANDUSLIKE GARANTIIDE, SOBIVUSGA TEATUD EESMÄRGIKS, TÄPSUSEGA, VAIKSE KESKKONNAGA JA KOLMANDATE ISIKUTE ÕIGUSTE MITTERIKKUMISEGA. TCL EI GARANTEERI SELLE SEADME KAUDU PAKUTAVA MISTAHE SISU EGA TEENUSE TÄPSUST, KEHTIVUST, ÕIGEAEGSUST, SEADUSLIKKUST, EGA TERVIKLIKKUST NING EI GARANTEERI SEDA, ET SEADE, SISU VÕI TEENUSED VASTAVAD TEIE VAJADUSTELE EGA SEDA, ET SEADME NING TEENUSTE TÖÖ ON KATKEMATU VÕI ILMA VIGADETA. MITTE MINGIL TINGIMUSEL EI OLE TCL VASTUTAV EI KOKKULEPPEST EGA ÕIGUSERIKKUMISEST TULENEVAST MISTAHES OTSESTE, KAUDSETE, ERILISTE EGA PÕHJUSLIKE KAHJUDE EEST, MIS TULENEVAD VÕI ON SEOTUD SELLES OLEVA MISTAHES INFORMATSIOONIGA, VÕI MIS ON SEADME VÕI MISTAHES TEIE POOLT VÕI KOLMANDATE ISIKUTE POOLT KASUTATUD SISU VÕI TEENUSE KASUTAMISE TULEMUSEKS, ISEGI KUI TEID ON HOIATATUD TAOLISE KAHJU VÕIMALUSEST. \n   Kolmandate osapoolte teenuseid võib muuta, peatada, eemaldada, lõpetada või katkestada või nendele juurdepääsu võib keelata igal ajal ilma ette teatamata, ja TCL (Thomson kaubamärgiga telerite tootja) ei garanteeri mingil moel, et mistahes sisu või teenus on kättesaadav mistahes aja jooksul. Sisu ja teenuseid edastavad kolmandad osapooled võrkude ja vahendite kaudu, mille üle TCL-l puudub kontroll. Käesolevat vastutamatusesätet piiramata keeldub TCL selgesõnaliselt vastutusest või kohustustest mistahes käesoleva seadme kaudu kättesaadavaks tehtud sisu või teenuse mistahes muutuste, katkestuste, puuete, eemaldamise või peatamise eest. TCL võib kehtestada piirangud teatud teenuste või sisu kasutamisele või juurdepääsule igal juhul ja ilma etteteatamise ning vastutuseta. TCL ei ole kohustatud osutama sisu ja teenustega seotud klienditeenindust ega vastuta selle eest. Sisu või teenustega seotud mistahes küsimused või palved tuleks esitada otse vastava sisu ja teenuse pakkujatele."];

var noChannelListRemind        = ["Ühtegi kanalit ei leitud. Kanalite loend on saadaval peale kanalite skaneerimist.","Kanali skaneering"];
var closeSubtitleRemind   = "Funktsioon muutub kättesaadavaks, kui subtiitrid on väljalülitatud. Kas soovite seda kohe teha?";

var estickerTitles = ["Ülirealistlikud kujutised","Värvid, mis ärkavad ellu","Väga elutruu liikumine","Dünaamiline pildikvaliteet","SR UHD-võimendamine","Koge 3D-maailma","Parem jõudlus","Tulevane 4K-sisu","Naudi internetimaailma","Ligipääs lisamaterjalile","Integreeritud dibiboksid","Ühenda kõik seadmed","Mitmesugused 4K-allikad","USB","Ülikiire WiFi","Mobiili sisu teleris","Mobiilseadme sisu","Kohalik sisu","DivX poolt heaks kiidetud","Sujuv pilt","Kanal valmis","TDT Premium"];
var estickerDescriptions = ["Hämmastavad filmielamused tänu UHD-ekraanile, mis võimaldab 4 korda detailsemat pilti kui Full HD ekraanid","Lai värvispekter kasutab ära erepunaseid ja smaragdroheliseid, et edasi anda iga stseeni emotsioonid","4K kaadri interpolatsioon ja taustvalgustus võitlevad liikumishägu probleemidega","Originaalpildi erksust võimendatakse, et luua tõeliselt dünaamiline väljanägemine koos suurepärase kontrastsusega","Naudi varasemast teravamaid telesaateid ja Blu-Ray plaate tänu super-resolutsiooni tehnoloogiale","Koge 3D-telerit ja vaata mitmesugust 3D-materjali","Quad Core tagab sujuva koostoime ja suurema jõudluse abil veelgi nauditavama meelelahutuskogemuse","HEVC (H.265) koodeki toetus peatselt saabuva standardse 4K-videolevi jaoks","Veebirakenduste, VOD-teenuste, kordusTV-de ja Interneti veebisirvimise küllus ","Lisateenused ja -materjalid teie lemmikutelt saate-edastajatelt võimaldavad näha rohkem","Ligipääs kõrglahutusega telekanalitele ilma täiendava teleriboksita","Mitmete kodus leiduvate digitaalallikate mugav ühendamine","Tulevikuks valmis teler, mis on võimeline taasesitama 4K-videosid kaadrisagedusega 50/60 Hz läbi HDMI 2.0 pordi koos HDCP 2.2-ga","4K-resolutsioonis videod või pildid suurele ekraanile otse USB-draivilt, kõvakettalt või kaamerast","Viimase generatsiooni 2x2 MIMO- ja AC-standard toob teieni konkurentsitu internetiühenduse kiiruse","Ekraanipeegelduse funktsioon lubab teil suurel ekraanil nautida mobiilseadmetest pilte, videosid ja rakendusi","Nutitelefonist ja tahvelarvutist pärit pilte, videosid ja rakendusi on võimalik kuvada suurel ekraanil","Kuvage kohaliku võrguga ühendatud seadmete sisu, nagu näiteks pildid ja videod, suurele ekraanile","Esitage renditud või omaenda filme, mis on DivX poolt kaitstud","Ülipeenike raam ja superõhuke disain","Testitud ja heaks kiidetud Canal+ poolt","Testitud ja heaks kiidetud TDT Premium’i poolt"];							

var eManualTextArray = ["E-kasutusjuhend","Kõik sisalduvad kujutised on illustreerivad. "];
var frontPanelRemind = "Esipaneel lukustatud";
var eRPRemind		 = "Poe režiimis ei saa ERP-päringut täita. Olete kindel?";	
var noRelatedChannel = "Seotud kanalid puuduvad";
var option0624Name          = ["BOP","BFS","Sündmuste kaupa","GetUserID","BGM","Reset all","Taasta tegevus","NRM","DVB-T2 ja riigi valik","HbbTVrežīms"];
var DVBT2AndChoice = ["Sees","Riigi järgi","Väljas"];
var hbbtvServiceRemind = "HbbTV teenus lisatakse peatselt.";
var insertWord = "Sisesta";			
var viewDetail = "Vaata üksikasju";							

var remindOAD  = "Tarkvarauuendus. Teise kanali kaudu võib olla allalaaditav uus soovituslik tarkvarauuendus. Selle allalaadimise aktsepteerimisel võidakse kanalit automaatselt muuta. Kas soovita seda teha kohe?";

var LEDStatus = ["Vilgub", "Parasts"];
var netFlixRemind = "See funktsioon katkestab juurdepääsu Netflix'i teenustele kuni uue sisselogimiseni.";
var ESNExplanation = "Elektrooniline seerianumber";
var resetShopRemind = "Toimub süsteemi lähtestamine – ärge lülitage telerit välja";
var initialSelectOption = "Palun valige üks variantidest:";
var databaseRemind   = "Süsteem tuvastas andmebaasi teadmata põhjusel kahjustumise ja taastas selle automaatselt: vajutage jätkamiseks OK";
var Deactivation = "Deaktiveerimine";
var oadFutureRemind = "Tarkvarauuendus. %s pärast on saadaval uus soovitatav tarkvara. Uuendamine võib võtta veidi aega ja ekraan võib pimeneda. Vastuvõtjat ei tohi uuenduse ajal välja lülitada. Uuendusega nõustumise korral jäta vastuvõtja ettenähtud ajal sisse või ooterežiimile. Kas soovid uuenduse vastu võtta?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Heliväljund";
var bt_soundOutPutTV = "Teleri kõlarid";
var bt_soundOutPutBT = "Bluetooth seade";
var bt_soundOutPutBT_TV = "Bluetooth ja teler";
var bt_refreshBarName = "Seadmed";
var bt_settingTips_On = "Lülita sisse Bluetooth-funktsioon ja skänni seadmed. ";
var bt_settingTips_Finding = "Otsitakse kasutatavaid seadmeid...";
var bt_settingTips_NoDevice = "Kasutatavaid seadmeid ei leitud.";
var bt_deviceList_State_NoConnect = "Ei ole ühendatud";
var bt_deviceList_State_Connecting = "Ühendamine...";
var bt_deviceList_State_Connected = "Ühendatud";
var bt_deviceList_State_Paired = "Paaritud";
var bt_deviceList_Conncect_Failed_Tips1 = "Ühendus ebaõnnestus.";
var bt_deviceList_Conncect_Failed_Tips2 = "Kinnitage, kas XXX-i Bluetooth-funktsioon on sees";
var bt_deviceList_Conncect_Success = "Ühendatud Bluetooth seadmega.";
var bt_deviceList_Disconncect_Success = "Ühendus Bluetooth seadmega lõppenud.";
var bt_deviceList_Disconnect = "Oled kindel, et soovid XXX-ga ühenduse katkestada?";
var bt_tipsTitle = "Nõuanne";
var bt_bluetooth_Pairing_Title = "Bluetooth paarimine";
var bt_bluetooth_Input_Pin = "Sisesta PIN:";
var bt_bluetooth_Output_Pin_Tip = "Sisesta klahvidega PIN XXXX.";
var bt_bluetooth_Pin_Wrong_Tip = "Vale PIN";
var bt_bluetooth_Remove_Pair_Title = "Päring";
var bt_bluetooth_Remove_Pair_Ask = "Kustutad seadme mälust?";	
var bt_bluetooth_module_error = "Bluetooth mooduli viga!";
						
var netflixDialogOptions = ["OK","Hiljem","Ära näita seda enam"];
var netflixDialogContent = "Leiad Netflixist vaatamiseks tuhandeid filme. Vaatad kohe?";
var netflixRemoteDialogContent = "Nüüd on saadaval kaugjuhtimispult Netflix'i nupuga. Külasta lisateabe saamiseks järgnevat saiti.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Praegune allikas","Kõik allikad"];
var audioDescriptionName = ["Suuline kirjeldus","Kõlar","Kõlari helitugevus","Kõrvaklapp","Kõrvaklapi helitugevus","AD helitugevus","BT seade","BT seadme helitugevus"];
var audioDescriptionOptions = ["Väljas","Parasts","Suuline kirjeldus"];							
var volumeOffRemind = 'Aktiveeri XXX („On”) menüüs Seaded.';	
var switchSourceRemind   = " sisestatud. Soovid vahetada selle kohe?";								
	
	var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Spordi režiim";
var resetStadium = "Staadion";						
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							

//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Välju","0","Suumi+",
                       	   "Välju",
                       	   "Nimekiri","0","Tekst","Vednis","Sisene","Välju","Menüü","Subtiitrid","Info",
                       	   "Stopp",
                       	   "Info","Menüü","Välju"
                       	   ];
var nscreenTips = "GuideOn aitab kasutajatel sisus navigeerida.";
var nscreenContent = 'Teguviis: 1.Klõpsake telefonis „TCL nScreen“.  Ühendage telefon teleriga sama LAN võrgu kaudu; 2.Klõpsake GuideOn rakendusse sisenemiseks „GuideOn“; 3.GuideOn pakub sama sisu, kui trükitud saatekava st teatab kasutajale, mis on teleris kavas; ';
var singalBrokenoffTips = "Signaal on katkestatud. Süsteem ei saa allalaadimist lõpetada.";
var contentSpan1_1Array_AU = [["TOIDE:","ALLIKAS:","MENÜÜ:","BACK:","INFO:","HOME:","EXIT:","LOEND:"],
                             ["Turns power on or standby mode","Select the input source",
                                 "Show TV settings menu","Go back to the Previous menu or exit a running APP", "Kuvab saateinfo",
                             "Läheb avalehele","Go back to the Previous menu or exit a running APP","Kuvab kanalite loendi"]];
var guideDescriptionWords ="Skaneerige telefoni GuideOn rakenduse alla laadimiseks QR kood";
var settingNoticeSourceName ="Autom. allikas";
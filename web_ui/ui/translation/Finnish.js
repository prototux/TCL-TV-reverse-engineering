
var all_country 	= ["Australia","Itävalta","Belgia","Bulgaria","Kroatia","Tšekki","Tanska","Suomi","Ranska","Saksa",
						"Kreikka","Unkari","Italia","Luxemburg","Alankomaat","Norja","Puola","Portugali","Romania","Venäjä",
						"Serbia","Slovenia","Espanja","Ruotsi","Sveitsi","Yhdistynyt kuningaskunta","Uusi-Seelanti"," "/*Arab*/,"Viro"," "/*Hebrew*/,
						"Latvia","Slovakia","Turkki","Irlanti","*","Filippiinit","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kiina","*","*","*","*","*","*","Muut","Liettua"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Liettua"];
				
var all_language 	= ["Tšekki","*","Tanska","*","*","Saksa","Englanti","Ranska","Kreikka","Espanja",
						"Kroatia","*","Italia","Unkari","Hollanti","Norja","Puola","Portugali","Venäjä","Romania",
						"Sloveeni","Serbia","Suomi","Ruotsi","Bulgaria","Slovakki","*","*","Gaeli","*",
						"Kymri","Arabia ","Ιρλανδικά","Latvia","*","Turkki","Viro","Hollanti"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Alkup. ääni"/*Qaa*/,"Ei määritetty"/*Undetermined*/,"*","Tuntematon",
						"Ei määritetty","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baski","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Λευκορωσικά","*","*","Katalaani","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicia","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islanti","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Liettua",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantiikka","*","*","*","*",
						"*","*","*","Saami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teksti-TV",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraina","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Pois","Päällä"];
var okCancel		= ["Ok","Peruuta"];
var yesNo			= ["KYLLÄ","EI"];
var level			= ["Pois","Matala","Korkea","Keski"];
var manualAuto		= ["Ohjekirja","Automaattinen"];
var homeShop		= ["Koti","Liike"];
var picPreset		= ["Standardi","Dynaaminen","Luonnollinen","Elokuva","Digitaalinen elokuva","Oma"];
var picColorTemp	= ["Viileä","Normaali","Lämmin","Lämmin2","Oma"];
var pic3dNavig		= ["Ohjekirja","Automaattinen","Puoliautom."];
var _3dOptions		= ["3D-tila","3D-to-2D","V-O-kytkin","Terävyysalue"];
var pic3DMode       = ["Pois","2D-to-3D","Vierekkäin","Yläosa ja Alaosa","Rivilomitus"];
var picEcoOptions	= ["Energiansäästö","Valoanturi","Paikallinen himmennys","Sekoitettu himmennys"];
var picGeoOptions	= ["Geometria","H-asento","V-asento","Kellotus","Vaiheistus"];//Geometry 无翻译
var picAdWhiteBal	= ["Vahvistus, P","Vahvistus, V","Vahvistus, S","Offset, P","Offset, V","Offset, S"];
var souOptions		= ["Äänen esiasetus","Balanssi","Ääniviive","SRS TSHD","Autom. äänen säätö",
						"SPDIF","SPDIF-viive","Television asettaminen","Ääniraidan kieli","Äänikanava",
						"Kuvailutulkkaus","Digitaalisen äänen ulostulotyyppi","Dolby-ammattiasetus"];
var soundOutputoptions =["TV-kaiuttimen DAP-ulostulo","Ulkoinen AVR-koodin ulostulo"];
var inteligenteqoptions 	=["Kohdistettu","Runsas"];						
var souSpdifType	= ["Automaattinen"/*Dolby*/,"PCM","Pois"];
var colorSpace      = ["Automaattinen","Natiivi","Oma","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Ympäristön virtualisoija","Dialogin tehostin","Basson tehostin","Älykäs äänekkyys","Mediatiedustelu","Graafinen EQ","Älykäs EQ" ];
var chOptions		= ["Kanavahaku","Kanavalista","EPG","Järjestelijä","Kanavan vianetsintä",
						"ajan siirto","Tekstitys","Teksti-TV","Kanavalistan tyyppi"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signaalin voimakkuus","Signaalin laatu","Taajuus (KHz)","Palvelutunnus","Verkkotunnus","Verkon nimi"];
var chScanOptions	= ["Maa","Viritintila","Kanavien haku","Päivitä haku","An. kanavien haku",
						["Kaapeli manuaal. selaus","Antenni manuaal. Selaus","Satelliitin manuaalinen säätö"],"Satelliittiantennin asennus","Suosikkiverkon valinta","Tyhjennä kanavalista:",];
var favNetDes		= "Valitse suosikkiverkko";
var tuner			= ["Kaapeli","Antenni","Satelliitti"];//Satelite 无翻译
var passError		= "Väärä salasana.\nYritä uudelleen.";
var chType			= ["Analog. kanavat: ","Digit. kanavat: "];
var chScanStatus	= ["Tila: Selaus","Tila: Haku valmis","Tila: Haku peruttu","Tila: Virhe haussa"];
var chScanPara		= ["Taajuus (KHz)","Modulaatio","Symbolinopeus (Ksym/s)","Verkkotunnus","Järjestelmä",
						"Viritys","Signaalin voimakkuus","Signaalin laatu","Selaustila","ID kanava"];
var chScanParaMHZ      = ["Taajuus (MHz)"];
var chAtvManSys		= ["LÄNSI-EUR","ITÄ-EUR","UK","Ranska"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Automaattinen"];
var chCleanDes		= "Haluatko tyhjentää kanavalistan?";
var chDeletDes		= "Haluatko poistaa kanavan?";
var chOperator		= ["Ziggo","UPC","Muut"];
var chScanType		= ["Digitaalinen & Analoginen","Digitaalinen","Analoginen"];
var chScanMode		= ["Täysi","Eteenpäin","Pika"];
var bookingModes	= ["Tallennus","Muistutus"];
var dayName			= ["su","ma","ti","ke","to","pe","la"];
var monthName		= ["tammi", "helmi","maalis","huhti","toukokuu","kesä","heinä","elo","syys","loka","marras","joulu"];
var filter			= ["Filter","Tyyppi","Alatyyppi"];
var chEpgFirstGenre	= ["Elokuva","News","Viihde","Urheilu","Lapset","Musiikki","Taide","Yhteiskunta","Opetus","Vapaa-aika","ERITYISET"];
var chEpgSecondGenre= [["Draama","Dekkari","Seikkailu","Scifi","Komedia","Saippuaooppera","Romantiikka","Draama","Aikuisviihde"," "," "," "],
						["Ajankohtaisohjelmat","Säätiedotukset","Uutismakasiinit","Dokumentit","Keskusteluohjelmat"," "," "," "," "," "," "," "],
						["Viihde","Peliohjelmat","Varieteeohjelmat","Puheohjelmat"," "," "," "," "," "," "," "," "],
						["Urheilu","Erikoistapahtumat","Urheilumakasiinit","Jalkapallo","Tennis",
							"Joukkueurheilu","Voimistelu","Moottoriurheilu","Vesiurheilu","Talviurheilu",
							"Hevosurheilu","Kamppailulajit"],
						["Lapset","Esikouluikäiset","6 - 14-vuotiaat lapset","10 - 16-vuotiaat lapset","Opetusohjelmat","Piirretyt"," "," "," "," "," "," "," "],
						["Musiikki","Rock","Draama","Folk","Jazz","Musikaalit","Baletti"," "," "," "," "," "],
						["Taide","Näyttämötaide","Kuvataide","Uskonto","Populaarikulttuuri",
							"Kirjallisuus","Elokuva","Kokeellinen","Lähetys","Uusi media",
							"Taidelehdet","Muoti"],
						["Yhteiskunta","Makasiiniohjelmat","Talous","Merkittävät henkilöt"," "," "," "," "," "," "," "," "],
						["Opetus","Luonto","Teknologia","Lääketiede","Vieraat kulttuurit","Yhteiskuntatieteet","Jatko-opinnot","Kielet"," "," "," "," "],
						["Harrastukset","Matkailu","Käsityöt","Autoilu","Liikunta ja terveys","Ruoanlaitto","Mainonta","Puutarhanhoito"," "," "," "," "],
						["Alkuperäinen kieli","Mustavalkoinen","Julkaisematon","Live-lähetykset"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanavan ohit.","Kanavien lajittelu","Kanavien muokkaus","Kanavan poisto","kanava Vaihdetaan","kanavan insertin"];
var chEditPara 		= ["Verkon nimi","Kanavan numero","Kanavan nimi","Taajuus","Värijärjestelmä","Äänijärjestelmä"];
var chSatTitles		= ["Satelliitin tyyppi","Satelliittiantennin asennus","Valitse Satelliitti"];
var chSatEidtOptions= ["Satelliitin nimi","Asema","LNB Teho","LNB-taajuus (MHz)","Diseqc-tulo",
						"Ääni 22 KHz","äänipurskeen","Taajuus (KHz)","Symbolinopeus (Ksym/s)","Polarisaatio",
						"Signaalin voimakkuus","Signaalin laatu","Satelliitin tila"];
var chSatAutoPromt	= [["Kaikki","Verkko"],
						["Kaikki","Vapaa"]];
var chSatAutoScanOptions=["Valitse Satelliitti","Selaustila","Kanavat"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Yleinen",];
var chSatDiSEqCInput= ["Poista käytöstä","A","B","C","D"];
var chSatTone22KHz	= ["Automaattinen","Päällä","Pois"];
var chSatToneBurst	= ["Poista käytöstä","äänipurskeen A","äänipurskeen B"];
var chSatPolarization= ["Vaakasuora","Pystysuora"];
var chSatSetupOptions=["Antennin tyyppi","Viritin","Kaistan taajuus"];
var chSatAntennaType= ["SingleCable","Yleinen"];
var chSatUserBands	= ["Käyttäjän kaista 1","Käyttäjän kaista 2","Käyttäjän kaista 3","Käyttäjän kaista 4","Käyttäjän kaista 5","Käyttäjän kaista 6","Käyttäjän kaista 7","Käyttäjän kaista 8"];
var chSatOthers		= ["Lähetinvastaanotin"];
var chSatSetupOthers= ["Käyttäjä määritetty"];
var pleaseSelectSat = "Valitse ensin satelliitit!";
var subOptions		= ["Tekstitys","Digit. tekstityksen kieli","Digit. tekstityksen kieli 2.","Tekstitystyyppi"];
var ttxOptionsCon      = ["Dekoodaa sivun kieltä","Dig. teksti-TV:n kieli"];
var subType			= ["Normaali","Huonokuul. tekst."];
var netIntf     	= ["Ethernet","Langaton"];
var netConnDes		= ["TV testaa yhteyttä.\nOle hyvä ja odota",
						"Verkkoyhteystesti onnistui!",
						"Verkkoyhteystesti epäonnistui."];
var netSsidError	= "Oikea SSID-pituus on 1-32 merkkiä. Tarkista SSID.";
var netOthers		= ["PIN-koodi"];
var netWlessAutoDes	= ["Varmista, että liitäntäpisteeseen on asennettu seuraava Pinokoodi, ennen kuin painat OK.",
						"Paina liitäntäpisteen painiketta 120 sekunnin sisällä ennen OK-painikkeen napsauttamista."];
var netConnRemind	= ["Virheellinen salasana.",
						"Yhdistää. Odota hetki!",
						"Yhteys muodostettu ja IP-osoite haettu!",
						"Linkkivirhe",
						"TV hakee tukiasemia\nOdota",
						"Televisioon ei ole liitetty langatonta laitetta!"];
var netWireIpOptions= ["IP-asetukset","Osoitetyyppi","IP-osoite","Aliverkon peite","Oletusyhdyskäytävä","Ensisijainen DNS","Toissijainen DNS"];
var netWireConnRemind= ["Anna arvo väliltä 0-255.",
						"Yhteys onnistunut!",
						"Kirjoita kelvollinen osoite.",
						"Yhteys onnistunut!",
						"Yhteys epäonnistui!",
						"Yhdistää. Odota hetki!",
						"Syötä arvo välillä 1-223."];
var netFlixOptions	= ["Poista käytöstä","ESN"];
var netFlixDes	 	= ["Haluatko varmasti poistaa käytöstä?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Ohjelmistopäivitys";
var netUpdateDialogTitle = "Ohjelmiston päivittäminen";
var netBGDownloadTitle 	= "Lataa";
var netUpdateLoadingPrompt= ["Hakee päivitystä, odota hetki!",
							"Ohjelmiston lataus käynnissä... Odota hetki!",
							"ÄLÄ sammuta televisiota ohjelmistopäivityksen aikana!",
                            "Välttämätön ohjelmistopäivitys latautuu automaattisesti taustalla!"];
var netUpdatePrompt= ["Onneksi olkoon, sinulla on kaikkein uusin ohjelmistoversio!",
						"Löydettiin uusi ohjelmistoversio XXXX. Haluatko ladata sen nyt? Tämä saattaa kestää jonkin aikaa verkkoyhteydestäsi riippuen.",
						"Kirjautuminen epäonnistui!",
						"Tiedon vastaanotto epäonnistui. Yritä myöhemmin uudelleen!",
						"Parserin päivitys XML epäonnistui!",
						"Linkkivirhe",
						"Ohjelmiston lataus onnistui. Haluatko aloittaa siirron?",
						"Tiedot kadonneet!Lataus epäonnistui!",
						"Paketin tarkastus epäonnistui, yritä uudelleen!",
						"Verkko ei toimi normaalisti! Tarkasta ja yhdistä uudelleen…",
						"Päivitys epäonnistui. Käynnistä TV uudelleen!",
						"Päivitystiedosto poistettiin vahingossa. Tee päivitys verkon kautta uudelleen.",
						"Ohjelmiston lataaminen taustalla onnistui. Haluatko tehdä päivityksen?"];
var netUpdateButtonText = ["Lataa", "Päivitä", "Myöhemmin", "Ei koskaan", "Ok","Jatka"];
var autoDetectPrompt = ["Löydettiin uusi ohjelmistoversio XXXX. Haluatko ladata sen nyt? Tämä saattaa kestää jonkin aikaa verkkoyhteydestäsi riippuen.",
						"Löydettiin uusi ohjelmistoversio XXXX. Haluatko suorittaa päivityksen nyt?",
						"Päivitys verkon kautta keskeytettiin viime kerralla. Sinun täytyy tehdä päivitys uudelleen.",
                        "Uuden XXXX ohjelmistoversion lataus ei ole valmis. Haluatko jatkaa nyt?",
                        "Ohjelmiston lataus on suoritettu. Haluatko päivittää nyt?"];
var sysOptions		= ["E-manuaali","Näyttövalik. kieli","Ajastin","Lukitse","Syöttöasetukset",
						"Ohjelmistopäivitys","Sijainti","HbbTV-tila","Evästeet","Yleinen käyttöjärj",
						"Lisäasetukset","Resetoi kauppa","LED-merkkivalo"];
var sysResetDes		= "Oletko varma?";
var sysMenuLangOptions=["Kieli","Valittu äänentoistokieli","Toinen valittu audiokieli"];
var sysTimerOptions	= ["Aikavyöhyke","Alueen nimi","Kellotus","Uniajastus","Autom. valmiustila", "Country region"];

var sysTimeZone		= ["Lähettäjänä","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Pois","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Pois","4 tuntia","6 tuntia","8 tuntia"];
var sysRegionName	= ["Madrid ","Kanarian saaret"];
var sysClockOptions	= ["Autom. synkronointi","Päivämäärä","Aika","Käynnist. ajastus","Ajastin",
						"Käynnistyskanava","Sammut. ajastus","Ajastin"];
var sysTimer		= ["Pois","Päivittäin","Kerran"];

var sysInputSet		= ["Ei merkkiä","DVD","Blu-ray","HDD","DVDR",
						"HD nauh.","Peli ","VCR","PC","Digitaalinen STB",
						"HD dig STB","Kamera","Nauhoitin","Muu"];
var sysAvVideoInput	= ["Automaattinen","RGB_CVBS","RGB","CVBS","S-VIDEO"];
var sysUpdate		= ["USB:lla","Verkkotunnus:lla","Kanavittain"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Uutta ohjelmistoa ei löydetä!",
						"Löydettiin uusi ohjelmistoversio XXXX. Haluatko suorittaa päivityksen nyt?",
						"Syötä USB-tikku.",
						"Paketin tarkastus epäonnistui, yritä uudelleen!",
						"ÄLÄ irrota USB-liitintä tai sammuta televisiota laiteohjelmistopäivityksen aikana!",
						"Ohjelmiston päivitys on onnistunut.\nTV käynnistyy uudellen automaattisesti!",
						"Löydettiin uusi ohjelmistoversio XXXX. Haluatko ladata sen nyt? Tämä saattaa kestää jonkin aikaa verkkoyhteydestäsi riippuen.",
						"Lataa",
						"Ohjelmiston lataus onnistui. Haluatko aloittaa siirron?",
						"Päivitysvirhe!",
						"Etsitään päivitystiedostoja",
						"Ohjelmistopäivitys onnistui.\nKäynnistä televisio uudelleen."];
var sysProductInfo	= ["Nykyinen versio","Tuotteen nimi","Valmistaja","Alustan nimi"];
var sysCiDes		= ["Ei CI-korttia."];
var sysAdOptions	= ["DivX® rekisteröinti","DivX(R) rekisteröinnin poisto","T-Link","Authorization Error","Rekisteröinnin poiston varmistus",
						"Vuokran vahvistus","Vuokra-aika loppu","Bluetooth-ilmoituksen tunnus"];
var sysRegistDes	= ["Rekisteröi laitteesi toistaaksesi DivX-suojattuja videoita",
						"Rekisteröintikoodi:",
						"Rekist. osoitteessa http://vod.divx.com"];
var sysDregistDes	= ["Rekisteröinnin poistokoodi:",
						"Poista rek.koodi osoitteessa http://vod.divx.com",
						"Jatka rekisteröintiä?"];
var mediaAuthorization = ["Laitettasi ei ole valtuutettu toistamaan tätä DivX(R)-suojattua videota."];
var deregistrationConfrimation = ["Laitteesi on jo rekisteröity.","Haluatko varmasti poistaa rekisteröinnin?"];
var rentalConfirmation = "DivX(R) vuokrauskesta on käytetty XXXX/YYYY katselukertaa. Haluatko jatkaa?";
var rentalExpired 	= "DivX(R) vuokraus on käyttänyt XXXX toistoa YYYY:sta. DivX vuokra-aika on kulunut umpeen.";
						
						
var sysLockOptions	= ["Kanavan estäminen","Aikavälin lukitus","Ohjelman esto","Syötön esto","Takapaneelin lukitus","Lukituksen asennus",
						"Vaihda salasana","Maksimi voimakkuus","Tyhjennä kaikki"];
var sysTimeIntervals= ["Lukitustyyppi","Aloitusaika","Loppumisaika"];
var sysRatingOptions= ["Ei mitään","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Lapsille sopimaton sisältö (Espanja)"];
var changePass		= ["Vaihda salasana","Uusi salasana","Vahvista salasana"];
var changePassDes	= ["Väärä salasana.\nYritä uudelleen.",
						"Salasana ei täsmää.\nYritä uudelleen.",
						"Salasana asetettu!",
						"Salasanasi on liian yksinkertainen. \nValitse toinen salasana!"];
var sysPowerOnChOptions= "Valitse tila";
var sysPowerOnCh	= ["Viimeinen tila","Käyttäjän valinta"];
var netWlessSecu    = ["Auki","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ei mitään","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Ei tuettu."];
var netWlessSecu3	= ["Ei mitään","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Ei tuettu."];
var netOptions		= ["Internet-yhteys","Käyttöliittymä","Langattomat asetukset","IP-asetukset","Tiedot",
						"Yhteyden tarkistus","DLNA","Kaukosäädin","Netflix-asetukset","WiFi TV-linkki",
						"Osoitetyyppi","IP-osoite","Aliverkon peite","Oletusyhdyskäytävä","Ensisijainen DNS",
						"Toissijainen DNS","SSID","BSSID","Anna SSID:","Käyttäjätunnus"];
var chEditDes		= ["Kanavanumero on käytössä!","Paina punaista näppäintä tämän merkin poistamiseksi!","Virheellinen kanavanumero."];
var chEpgNoProgram	= "Ei ohjelmatietoja tällä hetkellä. Valitse ensin kanavat!";
var chEpgWords		= ["Ohjelmaopas","Ei ohjelmatietoa","Kanava lukittu!","Ei ohjelman yksityiskohtia","Ei ohjelman otsikkoa"];
var chEpgBooking	= ["aikataulu info", "Kanavan numero","Aloituspäivä","Aloitusaika","Loppumisaika",
						"Toistotyyppi","Aikataulutyyppi","Lisää ajastus","Vaihda","Muuta",
						"Lisää/Muokkaa"];
var epgHotKey		= ["Edellinen päivä","Seuraava päivä","Filter","Ajastuslista","Lisää ajastus"];
var chEpgBookRemind	= ["Virheellinen alkamisaika","Virheellinen päättymisaika","Päällekkäinen ajastus","Tallennettu.","Poisto onnistui."];
var chSchePara		= ["Ajastuslista","Aloitusaika","Aloituspäivä","Ohjelman nimi","Kanavan nimi",
						"Kesto","Toista","Aikataulu","Muokkaa","Poista"];
var dateTimer		= ["Kerran","Päivittäin","Viikoittain"];
var scheduleDeleteReminds="Haluatko poistaa tämän ajastuksen?";
var scheduleNoLists	= "Ei ajastuslistaa. Paina punaista painiketta ajastuksen lisäämiseksi.";
var chListWords		= ["Kanavalista","Valitse Lista","Viritintila","Lisää suosikeihin","Poista",
						"Valitse kanavaluettelo","Valitse viritintila","Vaihda"];
var chListType		= ["Kaikki","Digitaalinen","Analoginen","Radio","Vapaa","Suosikit"];
var chAutoScanOptions=["Valitse operaattori","Kanavan tyyppi","Kanavien haku"];
var souSoundType	= ["Virheellinen","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam-mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musiikki","Elokuva","Clear voice-toiminto","Standardi","Oma"];
var picAdRgbMode	= ["Pois","Vain punainen","Vain vihreä","Vain sininen"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynaaminen Kontrasti","LED Liikkuvan kuvan selkeys",
						"Ihonväri","elokuvatila","Pelitila","Värilämpö","Valkotasapaino",
						"Pysäytä","Musta Stretch","Ylisuuri pyyhkäisy","Gamma","HDMI-tila","10P valkotasapaino","Värilaajennus",
						"Sumennuksen vähennys","Värinän vähennys","Väritila","Liikkuvan kuvan selkeys"];
var pic10Pwhite     = ["Tauko","Punainen","Vihreä","Sininen","Resetointi","Väri","Keltainen","Cyan","Magenta"];
var picMotionClarity = ["Liikemoodi","Liikkeen interpolointi","LED Liikkuvan kuvan selkeys","Sumennuksen vähennys","Värinän vähennys","Resetointi"];
var picMotionMode   = ["Automaattinen","Elokuva","Tasainen","Tyhjennä","Urheilu","Asiakas"];
var picResetDes		= "Kaikki henkilökohtaiset asetukset nollautuvat. Haluatko varmasti suorittaa valitun toimenpiteen?";
var pic10PReset     = "Haluatko varmasti nollata 10P valkotasapainon?";
var picMotionReset  = "Haluatko nollata liikkuvan kuvan selkeyden?";
var picColorSpaceReset    = "Haluatko varmasti nollata väritilan?";
var picOptions		= ["Kuvansäätö",
						"Taustavalo","Kirkkaus","Kontrasti","Värikylläisyys","Sävy","Terävyys","Värilämpö","Näyttötila","Autom. formaatti",
						"Urheiluasetus","3D","3D-navigointi","ECO Asetukset","Geometria",
						"Lisäasetukset","Käytetäänkö kuvatilaa?","Kuvan palautus"];
var picSize			= ["16:09", "4:3-formaatti", "14:9 formaatti", "Kino",
						"Priblíženie16:9 ", " priblížiť16:9 ","Priblíženie14:9 ","Venytetty zoomaus","širokouhlé priblíženie",
						"Priblíženie2","širokouhlé priblíženie2","Alkuperäisen näytön yhteensopivuus","Bod po bode","Alkuperäinen","Panoraama"];
var others			= ["Äänenvoimakkuus","Lähetys","Salasana","Tila","Tallenna","Vaihda","Käynnistä","Poistu","Haku","Poista",
						"Ei mitään","Automaattinen","Haku","Tietoturva","Yhdistä","Päivitä","Yritä uudelleen","Pysäytä","Asetukset","Kanavat",
						"Muokkaa","Syötä","Signaali.","Päätä","Stereo","Ääni","Lähde","Ei ääntä","Vinkkejä","Resetointi",
						"Asiakas","Asetus","Tallenna","Käyttäjä","Sulje näppäimistö","Turvallisuustila","Joka päivä","PVR-lista"];
var direction		= ["Vasen","Oikea","Ylös","Alas"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Tuntematon"];
var soundChannels   = ["Tuntematon","Mono","Ali","Kaksoismono","Stereo","Stereo Sub","Stereo Dolby Surround","Kaksikanavainen surround-ääni","Surround-ääni","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1-kanavainen","7.1-kanavainen","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Vasen","Oikea","Muut"];
var prompts			= ["Säädä kuvan asetukset katseluympäristöön sopiviksi.",
						"Säädä kirkkautta. Mitä lähempänä arvoa 100, sitä kirkkaampi kuva.",
						"Säädä kontrastia. Mitä lähempänä arvoa 100, sitä suuremmat kuvan tummuus-kirkkaus erot",
						"Säädä värikylläisyyttä. Mitä lähempänä arvoa 100, sitä voimakkaammat värit.",
						"Säädä kuvan terävyys. Mitä lähempänä arvoa 100, sitä selkeämpiä yksityiskohdat ovat",
						"Säädä taustavaloa. Mitä lähempänä arvoa 100, sitä kirkkaampi näyttö.",
						"Säädä värisävyt. Tämä asetus muokkaa värisävyjä.",
						"Valitse katseltavalle ohjelmalle parhaiten sopiva kuvamuoto.",
						"Määritä energiansäästövalinnat.",
						"Säädä näytön geometriset asetukset yhdistettäessä PC-laitteeseen.",
						"Valitse kuvan lisäasetukset.",
						"Palauta kuvan oletusasetukset.",
						"Valitse esitykseesi parhaiten sopiva äänitila.",
						"Säädä äänen tasapaino vasemman ja oikean kanavan välillä.",
						"TruSurround HD-äänenpalautusjärjestelmä tarjoaa kokonaisvaltaisen äänentoiston selkein, matalin ja korkein taajuuksin.",
						"Digitaalinen liitäntä television digitaalisen äänilähdön ja kotiteatterin äänilaitteiston välillä",
						"Valitse esitykseesi parhaiten sopiva äänen kieli.",
						"Ota käyttöön näkövammaisille tarkoitettu toiminto voidaksesi nauttia kaikista televisio-ohjelmista.",
						"Tarkasta television kuvan, äänen ja signaalin laatu.",
						"Valitse televisiosignaaliisi sopiva kanavaluettelo.",
						"Valitse näytön alaosassa näkyvän ohjelmatekstityksen kieli.",
						"Tarkastele tämän kanavan tekstiä ja kuvia.",
						"Digital Living Network Alliance. Toista musiikkia, kuvia ja videoita kotiverkon välityksellä  muilta laitteilta, esimerkiksi tietokoneelta.",
						"Näytä älypuhelimen sisältö televisiolla ja käytä älypuhelinta television kaukosäätimenä.",
						"Näytä Miracast-yhteensopivan Android-laitteen sisältö television ruudulla.",
						"Lukitse televisio.",
						"Valitse laitteesi nimi.",
						"Valitse katseluympäristö.",
						"Palauta järjestelmän oletusasetukset."];
var initialTitle	= ["Tervetuloa","Alkuasetukset"];
var initialPrompt	= ["Suorita ensiasetukset nyt ja pääset jännittävien kokemusten maailmaan!",
						"Valitse kieli:",
						"Valitse maasi:",
						"Valitse kohde:",
						"Valitse verkkoyhteyden tyyppi:",
						"Valitse langallisen verkkoyhteyden tyyppi:",
						" xxxxxxxxx-kytkentä epäonnistui! Kytke laite seuraavan kaavan mukaisesti tai valitse Vasen nollaamista varten.",
						" xxxxxxxxx-kytkentä onnistui! Valitse Oikea jatkaaksesi.",
						"1)Televisiossasi saattaa jo olla sisäänrakennettu langaton sovitin\n 2)Tai jos sen mukana on toimitettu USB-sovitin, liitä se televisioon\n. Valitse sitten langattoman verkon tyyppi",
						"Skannaus käynnissä. Odota hetki...",
						"Televisioon ei ole liitetty langatonta laitetta!",
						"Varmista, että tämä PIN-koodi on asetettu tukiasemaan ennen 'Seuraava'-painikkeen napauttamista. ",
						"Paina AP:n painiketta 120 sekuntia ennen Oikea-painikkeen painamista.",
						"WPS (Wi-Fi suojattu asetus)",
						"PIN (henkilökohtainen tunnistenumero)",
						"PBC (Push Button Configuration) - Määritys painikkeella",
						"Seuraavat sisällöt saadaan ainoastaan verkkoyhteyden avulla. Haluatko ohittaa verkkoasetuksen?",
						"Saatavilla on uusia ohjelmistopäivityksiä. Niiden lataaminen saattaa kestää muutaman hetken, verkkosi tilasta riippuen.",
						"Päivittämällä televisiosi ohjelmiston pääset nauttimaan useimmista ominaisuuksista ja palveluista.",
						"Et pääse nauttimaan uusimmista ominaisuuksista ja palveluista. Haluatko ohittaa ohjelmistopäivityksen?",
						"Paina oikeanpuoleista painiketta jatkaaksesi.",
						"Älä käännä virtaa pois päivityksen aikana, sillä tämä saattaa aiheuttaa television virhetoiminnan.",
						"Jos et halua päivittää, valitse EI.",
						"Päivitys käynnissä. Odota hetki.",
						"Voit myös päivittää ohjelmiston kohdassa JÄRJESTELMÄ/OHJELMISTOPÄIVITYS",
						"Valitsemasi maa pyytää salasanan asettamista.\nAseta televisiollesi koodi ja vahvista.",
						"This code is too simple.\nPlease use different digits.",
						"Onnittelut! Alkuasetukset on suoritettu. Voit muokata asetuksia päävalikosta ja  alavalikoista.",
						"Valitse turvallisuustila:",
						"Valitse langattoman verkon kytkentätila:",
						"Verkko"];
var initNetCabAndDonRe = ["Verkkokaapelia ei ole kytketty. Kytke verkkokaapeli!","Sisäänrakennettua langatonta sovitinta tai langatonta USB-sovitinta ei ole saatavilla."];
var initChPrompt = ["TV-kanavan asennus","Valitse antennin hakutyyppi","Automaattista viritystä suoritetaan...","Seuraavat antennikanavat löytyivät:","Valitse kaapelin hakutyyppi.","Valitse seuraavasta luettelosta yksi operaattori.","Määritä hakutiedot","Löydettiin seuraavat kaapelikanavat:","Valitse seuraavasta luettelosta yksi operaattori","Valitse haettavat satelliitit tai muokkaa valittua satelliittia","Ole hyvä ja valitse satelliitin arvot","Seuraavat kanavat löytyivät ja kanavan haku voidaan suorittaa uudelleen kohdassa Kanava/Kanavan haku."];
var initClockPrompt = ["Siirry verkkoaikaan!",
						"Aseta päivämäärä ja aika:"];
var initialOptions	= ["Ympäristö","Verkon asetukset","Ohjelmistopäivitys","Kanavan asennus","Kellotus"];
var initialHotkeys	= ["Takaisin","Valitse","Seuraava"];
var initLocations	= ["Koti","Liike","Myymälädemo"];
var initNets		= ["Kiinteä","Langaton","Minulla ei ole verkkoyhteyttä"];
var initWireManuals	= ["IP-osoite","Aliverkon peite","Oletusyhdyskäytävä","Ensisijainen DNS","Toissijainen DNS"];
var initSoftUpdates = ["Päivitä nyt","Päivitä myöhemmin"];
var initChannelIns	= ["Jatka","En halua asentaa kanavia."];
var initChScanTypes	= ["Digitaalinen & Analoginen","Digitaalinen","Analoginen","En halua suorittaa hakua"];
var initChDvbts		= ["ATV-antennin kanavat:","DTV-antennin kanavat:"];
var initChDvbcs		= ["ATV-kaapelikanavat:","DTV-kaapelikanavat:"];
var initChDvbss		= ["Satelliittikanavat:"];
var initChDvbSOther	= ["En halua suorittaa satelliittihakua"];
var initEndConnectedStatus= ["Poiskytketty","WiFi kytketty päälle","Langallinen kytketty päälle"];
var initEndInstallations= "XXXX kanavat asennettu.";
var initEndUpdate	= ["Päivitetty"];

var audioScenes 	= ["Pöytä","Seinäasennus"];			
var screenSavers	= ["Ei ohjelmatietoja tällä hetkellä. Valitse ensin kanavat!",
						"Ei signaalia.",
						"Salattu",
						"Vain tiedot",
						"Ääniohjelma",
						"Ei ääntä eikä kuvaa",
						"Ei käytettävissä",
						"Ei teksti-TV:tä",
						"Ei ohjelmatietoa",
						"Ohjelma lukittu!",
						"Ohjelma lukittu!\nPaina OK ja syötä koodisi.",
						"Ei ohjelman yksityiskohtia",
						"Lapsille sopimaton ohjelma.\nPaina OK ja syötä koodi.",
						"Kanava lukittu!",
						"Kanava lukittu!\nPaina OK ja syötä koodisi.",
						"Syöttö lukittu!\nPaina OK ja syötä koodisi.",
						"Ei tuettu.",
						"Tämä palvelu ei ole käytettävissä",
						"Syöttö lukittu!",
						"Ei ohjelman otsikkoa",
						"Ei toimintoa"
						];
var chBookingPromt	= ["Tämänhetkisessä kanavassa on ajastettu tallennus.TV aloittaa tallennuksen.",
						"Ajastettu tallennus havaittu.\n Vaihda XXXX tallentaaksesi",
						"Kanavalla on muistutus.",
						"Ajastettu tallennus havaittu.\n Vaihda XXXX tallentaaksesi"];
var timeUnit		= ["Sek","min"];
var ciPromt			= ["Verkon tiedot ovat muuttuneet. Voit päivittää suorittamalla päivitysskannauksen.",];
var othersPromt		= ["Hetkinen...",];
var menuOptions		= ["Kuva","Ääni","Kanava","Verkko","Järjestelmä"];
var optionOptions	= ["Kuvansäätö","Äänen esiasetus","Pysäytä","T-Link","ajan siirto","PVR","Ajastuslista","Asetukset"];
var optionTLinkPromt= [["Automaattinen virrankatkaisu on päällä","Autom. valmiustila","Oppaan valikko"],
						["Virta päällä","Valmiustila","Vahvistimen voimak."]];
var powerPromt		= ["TV kääntyy pian pois päältä! Paina mitä tahansa painiketta peruuttaaksesi."];
var ttxLanguage		= ["LÄNSI-EUR","ITÄ-EUR","Venäjä","Arabia/hebrea","Farsi","Arabia ","Λευκορωσικά","Kreikka","Turkki"];
var ttxOptions		= ["Näytä","Kierrätä alasivuja","Kieli","Hälytyssivu","Uutistiedote"];
var weekday         = ["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"];
var lcnConfflict	= "Tämän ohjelman vastaanotossa on häiriötä. Toinen versio on saatavilla kanavalla %d.";
var inShopMode		= "Televisiosi on shop mode-tilassa. Jos haluat vaihtaa home mode-tilaan, valitse 'Järjestelmä' ja vaihda 'Sijainti' valikossa .";
var nitRefresh		= "Verkkotiedot muuttuivat. Haluatko suorittaa päivityshaun?";
var picHDMIMode     = ["Automaattinen","Grafiikka","Kuva"];

var glassRemind    	= ["Liitä 3D-lasit televisioon\n(Pidä POWER-näppäintä alaspainettuna 3D-lasien kohdalla).","3D-lasit on liitetty televisioon.",""];
var pvrRemind 		= ["Älä irrota USB-laitetta tai kytke virtaa pois päältä."];
var pvrConName   	= ["PVR","Ohjelmatiedot:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Tallennettu video on  \"pvr\"-kansiossa"],"Pysäytä","Tallennus","tunti","Minuutti","Kesto","Vinkkejä","Aseta tallennuksen kesto nuolinäppäimien avulla."];
var pvrDisRemind 	= "Liitä USB-tikku nauhoitukselle.";
var pvrRemindWords  = ["Haluatko poistua?",
							"Haluatko keskeyttää tallenuksen ja selata tallennettuja tiedostoja?",
							"Levyke on työnnetty ulos. ",
							"Ei riittävästi tilaa.   ",
							"Tallennettuja tiedostoja ei ole. Aloita tallennus.",
							"Videonauhuri ei voi käynn. sekoitetulla kanavalla",
							"Ominaisuus ei ole saatavilla",
							"Tallennettu.",
							"Haluatko pysäyttää nauhoituksen ja vaihtaa lähdettä?",
							"TV pysäyttää meneillään olevan tallennuksen. Haluatko poistua?",
							"PVR-tallennus tarvitsee signaalin toimiakseen oikein. Tarkista signaali."];
var pvrChangeCh 	= ["Haluatko vaihtaa kanavaa?",
							"Haluatko pysäyttää nauhoituksen ja vaihtaa kanavaa?"];
var pvrChangeToPIN8	= ["Haluatko vaihtaa lähteen SCART-sisääntuloon kytkettyyn laitteeseen?",
				    		"Haluatko keskeyttää tallennusprosessin ja vaihtaa lähteen SCART-sisääntuloon kytkettyyn laitteeseen?"];
var pvrChangeToCEC  = ["Haluatko vaihtaa lähteen HDMI-sisääntuloon kytkettyyn laitteeseen?",
				  			 "Haluatko keskeyttää tallennusprosessin ja vaihtaa lähteen HDMI-sisääntuloon kytkettyyn laitteeseen?"];
var pvrGuideJump    = ["Haluatko mennä EPG:hen?",
							"Haluatko pysäyttää nahoituksen ja siirtyä EPG-tilaan?"];
var pvrMediaJump    = ["Haluatko mennä Mediaan?",
							"Haluatko pysäyttää nauhoituksen ja siirtyä Media-tilaan?"];
var timeshiftExtra	= ["Haluatko lopettaa ajansiirron,muuta kanavaa?",
						"Haluatko pysäyttää timeshift-toiminnon  ja vaihtaa lähteen SCART-sisääntuloon kytkettyyn laitteeseen?",
						"Haluatko pysäyttää timeshift-toiminnon  ja vaihtaa lähteen HDMI-sisääntuloon kytkettyyn laitteeseen?",
						"Ajansiirto ei voi käynnistyä sek. kanavalla",
						"Haluatko pysäyttää timeshift-toiminnon  ja mennä EPG:hen?",
						"Haluatko lopettaa ajansiirron, ja vaihtaa television USB-tilaan?",
						"Haluatko lopettaa ajansiirron,vaihda tulolähdettä?",
						"Liitä USB-tikku nauhoitukselle.",
						"Levyn koko ei riitä.",
						"TV pysäyttää meneillään olevan timeshift-toiminnon.  Haluatko poistua?"];
var timeshiftStatus	= ["Nopeasti taaksepäin","Pysäytä","Käynnistä","Keskeytä","Nopeasti eteenpäin"];
var pvrPowerOffRemind= ["Tallennuksen valmiustila","Valmiustila","TV tallentaa nyt. Haluatko jatkaa tallennusta, kun TV on valmiustilassa?"];
var timeshiftInitTitle= "Levyn asetukset";
var timeshiftInitReminds= ["Avustettua ohjausta käyettään USB:n ajansiirron asetuksiin. Valitse asetustila.",
						 "Paremman suorituskyvyn vuoksi USB kannattaa formatoida. Formatointi poistaa kaikki USB:n tiedot. ",
						 "Valitse tiedoston koko ajansiirtoa varten. ",
						 "Formatoi",
						 "Ei riittävästi tilaa.   ",
						 "Luo ajansiirtotiedoston",
						 "Nopeustesti",
						 "Levyn nopeus (< %f MB/s) on liian hidas ajansiirrolle! ",
						 "Levy on valmis ajansiirrolle. Vaihda levy (nopeudeltaan > %f MB/sec) paremman suorituksen saamiseksi. ",
						 "Levy on valmis ajansiirrolle."];
var timeshiftInitButtons= ["Formaatti","Ohita","Peruuta","Ok","Päätä","Poistu"];
var timeshiftInitOther=["Levyn nopeus:","MB/sek"];

var selectChoice	= "Oletko varma?";
var chAtvStore		= "Tallenna XXXX-nimikkeellä.";
var chEpgFirstGenreUK= ["Elokuva","Uutiset ja ajankoht.","VIIHDE","Urheilu","Lapset","Opetus","Lifestyle","Draama"];
var homePageTitleList = ["SOVELLUKSET","TV","VIDEOT","Kotisivu"];
var homePageFavAndAllName  = ["Suosikkisovellukset","Kaikki sovellukset"];
var homePageBackUp = ["E-manuaali","GuideOn"];
var homePageRemind   = ["Täydelliset toiminnot saadaan vasta verkkoyhteyden jälkeen.","TV:ssä ei ole vielä yhtään kanavaa. Ohjelmat ovat saatavilla vasta  kanavien haun jälkeen","Ei ohjelmaa","Haluatko hakea kanavia nyt?"];
var homePageHistory = ["Historia"];
var miracastTitle = ["WiFi TV-linkki","TCL-laite"];
var miracastRemind=["WiFi TV-linkki mahdollistaa näytön ja äänen jakamisen laitteesta, kuten esim. älypuhelimesta tai tabletista, televisioosi langattomasti (ilman kaapeleita). Näin voit katsella televisiostasi älypuhelimesi tai tablettisi esittämää kuvaa. Voit esimerkiksi käynnistää videon älypuhelimellasi ja esittää sen samanaikaisesti televisiollasi tai käyttää tablettia peliohjaimena television toimiessa suurena näyttönä.","WiFi TV -yhteys on valmiina TV:ssä. Aloita laitteen näytön jakaminen TV:ssä nyt.","Yhdistää. Odota hetki!","Yhteys epäonnistui!","Yhdistäminen epäonnistui. Tarkista!"];
var homePageLittleWin = ["Asetukset","Media","Fav-kanavat","Smart TV","EPG"];

var hbbtvStopRemind  = ["Haluatko pysäyttää toiston?"];
var colorSystem = ["Automaattinen","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Paina OPTION lisätietoja varten.";
var emptyListInfo = "Televisioon ei ole liitetty laitetta!";
var optionVideoListArray_1 = ["Kuvansäätö", "Äänen esiasetus", "Toistotila", "Näyttötila", "3D-tila", 
							  "V-O-kytkin", "Terävyysalue", "Tekstitys", "Ääniraita", "Otsikko", "Kappale", "Info"];
var optionVideoListArray_2 = ["Kuvansäätö", "Äänen esiasetus", "Toistotila", "Näyttötila", 
							  "Tekstitys", "Ääniraita", "Otsikko", "Kappale", "Info"];
var bottomTipsText = ["Toisto/keskeytys", "Nopeasti taaksepäin", "Nopeasti eteenpäin", "Soittolista", "Asetukset"];
var picturePresetArray = ["Standardi", "Dynaaminen", "Luonnollinen", "Elokuva", "Oma"];
var videoPlayModeArray = ["Toista kaikki", "Toista yksi", "Normaali"];
var screenModeHDArray = ["16:9", "4:3", "Kino", "širokouhlé priblíženie", "Priblíženie2", "širokouhlé priblíženie2", "Venytetty zoomaus", "Automaattinen"];
var screenModeSDArray = ["16:9", "4:3", "Kino", "Priblíženie14:9 ", "Priblíženie16:9 ", " priblížiť16:9 ", "Automaattinen"];
var Mode3DArray = ["Pois", "2D-to-3D", "Vierekkäin", "Yläosa ja Alaosa", "Rivilomitus"];
var videoOptionListArray = ["Pois", "Kappale", "Tekstitys", "Otsikko", "Kappale"];
var subMenuTitleText = "Tekstitys";
var langMenuTitleText = "Ääniraidan kieli";
var titleMenuTitleText = "Otsikko";
var mode3DMenuTitleText = "3D-tila";
var langInfoText = "Kappale";
var STOP_RESUME_INFO = "Pysäytä/Jatka";
var playListName = " nimi";
var eb_tips = "Vinkkejä";
var ok_button = "Ok";
var eb_info = ["Äänen dekoodaushäiriö", "Videon dekoodaushäiriö", "Äänimuoto ei tuettu", 
			   "Videoformaatti ei ole tuettu.", "Tämä tiedosto ei avaudu.", "Toistovirhe. Yritä uudelleen.",
			   "Tiedostomuoto ei tuettu", "Hupsis! Soitin on pysähtynyt",
			   "Tiedostopolkua ei ole tai se on virheellinen.\n Kytke vielä muistilaite  ja yritä uudelleen.",
			   "Jatketaanko toistoa edellisestä\n toistotilasta?"];
var frameTitleText = "Uusi laite";
var eb_quit_info = "Haluatko varmasti lopettaa?";
var eb_yes = "KYLLÄ";
var eb_no = "EI";
var offinfo = "Pois";
var naInfo = "Null";
var consoleInfoArray = ["Nopeasti taaksepäin", "Nopeasti eteenpäin", "Toisto/keskeytys", "Soittolista"];
var cantOperateText = ["Toiminta ei ole tuettu."];
var chapterChangeInfo = "Vain kappaleet 1 - XXXX ovat saatavilla.";
var metaDataArray = ["Otsikko/Painos metatiedot:", "Kappaleen metatiedot:", "Äänen metatiedot:", "Tekstityksen metatiedot:"];
var metaTitleInfo = "Otsikko";
var metaChapterInfo = "Kappale";
var videoLoadingInfo = "Analysoi...";
var listLoadingInfo = "Lataa...";
var pgInfo = "Lakiluokittelu";
var fileNameText = " nimi";
var fileDateText = "Päivämäärä";
var fileSizeText = "Koko";
var fileDurationText = "Kesto";
var fileDirectorText = "Johtaja";
var fileCopyrightText = "Tekijänoikeudet";
var fileArtistText = "Artisti";
var fileAlbumText = "Albumi";
var fileGenreText = "Tyyli";
var fileYearText = "Vuosi";
var fileGenreText = "Tyyli";
var mainListArray = ["Kaikki", "Kuva", "Kuva", "Musiikki"];
var sortArray = [" nimi", "Päivämäärä"];
var parserArray = ["Normaali", "Rekursiivinen"];
var emptyTipsInfo = "Hupsis! Yhtään tuettua tiedostoa ei löytynyt.";
var emptyFolderInfo = "Hupsis! Yhtään tuettua tiedostoa ei löytynyt.";
var sortName = "Järjestä seuraavasti";
var parserName = "Jäsentäjä";
var divx_str1 = "DivX® rekisteröinti";
var divx_str2 = "DivX(R) rekisteröinnin poisto";
var infor_str = "Info";
var quickMenuEmptyText = "Ei vaihtoehtoja";

var musicSoundPresetArray = ["Standardi", "Elokuva", "Musiikki", "Clear voice-toiminto", "Oma"];
var musicInformationArray = [" nimi", "Artisti", "Albumi", "Tyyli:", "Vuosi:", "Kesto:"];
var playListName = " nimi";
var playTipsInfo = ["Toistat ensimmäistä tiedostoa.", "Toistat viimeistä tiedostoa."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artisti";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Äänen esiasetus";
var optionBGMInfo = "Soita taustalla";
var optionAudioOnlyInfo = "Vain ääni";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX kytketty televisioon!";
var tvRemoteTitle		= "Kaukosäädin";
var tvRemoteDeveloper	= "Sovelluksen on kehittänyt TCL";
var tvRemoteDeviceTitle	= "Laitteen nimi:";
var remoteOption		= ["Median jakaminen","Kaukosäädin","Apua","Tietoa","Smart Connect"];
var remotebottom		= "Lataa \"TCL nScreen\" älypuhelimeesi";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Valokuvien, videoiden ja musiikin jakaminen TV:ssä puhelimen välityksellä",
							"Toimenpiteet: \n  1. Klikkaa puhelimessa \"TCL nScreen\". Liitä puhelin televisioon saman WiFi-verkon kautta;\n  2. Klikkaa \"Median jakaminen\" voidaksesi selata mediatiedostoja;\n  3. Lähetä media televisioon toistoa varten (jonkun seuraavan vaihtoehdon mukaisesti)",
							"      a) Vedä & pudota kansio/tiedosto TV-kuvakkeeseen näytön yläreunassa;\n      b) Heilauta puhelinta TV:tä kohti ensimmäisen tiedoston käynnistämiseksi;\n      c) Toista media puhelimessa ja napsauta TV:n jakamiskuvaketta;",
							"   4. Heilauta puhelinta TV-toiston aikana toistaaksesi edellisen tai seuraavan tiedoston."];
var controlReminds		= ["Käytä puhelinta kaukosäätimenä TV:n ohjaamisessa.",
							" ",
							"Toimenpiteet: \n  1. Klikkaa puhelimessa \"TCL nScreen\".  Liitä puhelin televisioon saman WiFi-verkon kautta;\n  2. Klikkaa \"Kaukosäädin\" TV:n käyttöä varten."];
var helpDeviceWords		= "Monen näytön yhteistoiminta";
var helpBottom			= " Pilviteknologian aikana älylaitteet, kuten puhelimet ja televisiot, ovat yhteydessä toisiinsa. Jaa mediaa perheesi kanssa useilla ruuduilla, ja ohjaa televisiotasi puhelimellasi! ";
var helpReminds			= ["Valmistelut\n  1. Lataa ja asenna \"TCL nScreen\" Google Playstä tai Apple Storesta.\n   2. Liitä puhelin televisioon saman WiFi-verkon kautta.",
							" ",
							"Suositeltu puhelin\n   1. CPU: yli 800 MHz\n   2. Muisti: vähintään 80 Mt vapaata tilaa",
							" ",
							"Mikäli \"TCL nScreen\" ei ole saatavilla puhelimessasi, ota yhteys puhelimen valmistajaan."];
var helpButtons			= ["Edellinen","Seuraava"];
var aboutReminds		= ["Kaukosäädin","Sovelluksen on kehittänyt TCL"];
var aboutExit			= "Poistu";
var smartReminds		= ["Nopea ja älykäs liitäntä TV:n ja puhelimen välillä",
							" ",
							"Toimenpiteet: \n  1. Liitä TV ja älypuhelin samaan LAN-verkkoon.  Klikkaa \"TCL nScreen\" älypuhelimessa.\n  2. Klikkaa \"Smart Connect\" QR-koodin skannausta varten.\n  3.  Kun TV on lähetyksen katselutilassa, paina TV:n kaukosäätimessä olevaa INFO-näppäintä 4 sekunnin ajan, jolloin QR-koodi ponnahtaa esiin koko näytön kokoisena.",];
var smartQRReminds		= ["Klikkaa puhelimessa TCL nScreenn Smart Connect ja skannaa QR-koodi TV:n ja puhelimen nopeaa kytkentää varten.",
							"QR-koodi sisältää LAN-tilitiedot. Säilytä se hyvin."];
							

var consoleTipArray = ["Edellinen","Seuraava","Konsoli","Soittolista"];							
var optionInfoArray = ["Kuvansäätö","Toistotila","Kesto","Tehoste","Info"];

var playModeArray = ["Normaali","Sekoita","Toista"];
var durationArray = ["Lyhyt (5s)", "Keskipitkä (10s)", "Pitkä (15s)"];
var effectArray = ["Ei mitään", "Pura", "Levitä oikealle", "Levitä vasemmalle", "Levitä ylös", "Levitä alas", "Ruutu sisään", "Ruutu ulos", "Sattumanvarainen"];
var infoArray = ["Nimi:","Koko:","Päivämäärä:","Sijainti"];

var picturePresetBarTitleInfo = "Kuvansäätö";
var picturePresetBarArray = ["Standardi","Dynaaminen","Elokuva","Elokuva","Oma"];
var upTipsInfo = "Liikuta kuvaa"; //add yums 2014-10-10
var consoleTipsArray = ["Konsoli","Edellinen","Seuraava","Soittolista","Asetukset"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Paina uudelleen OIKEA-painiketta seuraavan kuvan toistamiseksi.","Paina uudelleen VASEN-painiketta edellisen kuvan toistamiseksi.","Paina uudelleen ALAS-painiketta saadaksesi soittolistan näytölle."]; //add yums 2014-10-10

var optionPvrListArray = ["Kuvansäätö","Äänen esiasetus", "Näyttötila", "3D-tila", "Tekstitys", "Ääniraita", "Info"];							
	
var titleSpanFirstArray = ["Ohjaus & liitäntä","Perustoiminnot","SOVELLUKSET","TV","Asetukset","FAQ"];
var titleSpanSecondArray = [["Kaukosäädin","Paneelin näppäimet","Helppo navigointi","TV kytkentä","TV kytkentä","TV kytkentä","Langaton"],["Launcher","Tilarivi","Lähde"],["Sovellusten toisto","Media","Kaukosäädin"],["Säädä kanava ja äänenvoimakkuus","Kanavalista","EPG","Kanavat","Suosikkikanavat"],["Kuvan säätö","Äänen säätö","Kanavan säätö","Ohjelmistopäivitys","Kieli","Lapsilukko"],["Usein kysytyt kysymykset","Usein kysytyt kysymykset","Vianetsintä","Vianetsintä","Ehdot ja edellytykset"]];
var contentSpan1_1Array = [["LISTA:","INFO:","VALIKKO:","TEHO:","LÄHDE:","OPPAAT:","ÄLY-TV:"],["Näyttää kanavaluettelon","Näyttää ohjelmatiedot","Menee kotisivulle","Kytkee virran päälle tai valmiustilaan","Valitse syötelähde","Näyttää EPG (Electronic Program Guide)tiedot","Menee äly-TV sivulle"]];
var contentSpan1_2Array = ["Edellinen kanava","Seuraava kanava","Lisää äänenvoimakkuutta","Vähennä äänenvoimakkuutta","Menee kotisivulle","Vahvista valinta","Valmiustila / Virta päällä"];
var contentSpan1_3Array = ["OK/Opas","Kanava ylös","Kanava alas","Äänenvoimakkuuden vähentäminen","Äänenvoimakkuuden lisääminen","Nuolinäppäiminä joissakin toiminnoissa"];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT sovitin","LAN","Älypuhelin","PC/Set-top box/DVD","Äänenvahvistin","Äänenvahvistin/monitori","Televisiossasi ei ehkä ole kaikkia pistorasioita."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Kuulokkeet","AV IN sovitin","SPDIF","CMP AUDIO IN sovitin","CMP IN (YPbPr) sovitin","USB-laitteet","USB-laitteet","Kuulokkeet","DVC/Game Console/Set-top box/DVD","Äänenvahvistin","DVC/Game Console/Set-top box/DVD","Televisiossasi ei ehkä ole kaikkia pistorasioita."];
var contentSpan1_6Array = ["Yleinen käyttöjärj","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA-kortti","SD-kortti","PC","Set-top box/DVD","Antenni/kaapeli/satelliitti","Televisiossasi ei ehkä ole kaikkia pistorasioita."];
var contentSpan1_7Array = ["Tabletti","PC","Reititin","Puhelin","TV"];

var contentSpan2Array = [["Paina nuolinäppäimiä saadaksesi kotisivun näyttöön.","Paina sitten OK katsoaksesi jotain esiteltyä ohjelmaa tai siirtyäksesi sovelluksiin."],["Näytä oikeassa yläkulmassa päivämäärä, verkko sekä laitteet ym. "],["Valitse syötelähde laitteista, jotka on kytketty televisioon eri porttien, kuten TV, AV, HDMI, ym. kautta."]];

var contentSpan3Array = ["Nauti ja katsele suosikkisovelluksiasi äly-TV:n sivullla.","Katsele valokuvia ja videoita ja toista musiikkia USB-tallennuslaitteesta.","Kytke TV ja älypuhelin tai tabletti samaan LAN:iin.","Klikkaa TCL nScreen tai TCL nScreen älypuhelimessa tai tabletissa.","Jaa moninäytöllä valokuvia, videoita ja musiikkia perheesi kanssa ja ohjaa televisiotasi älypuhelimella."];

var contentSpan4Array = [["Paina YLÖS/ALAS kanavan vaihtamiseksi.","Paina VASEN/OIKEA äänenvoimakkuuden säätämiseksi"],["Paina kaukosäätimen LIST-painiketta kanavavalikoiman näkemiseksi.","Paina YLÖS/ALAS kanavan valitsemiseksi."],["EPG on näytössä näkyvä TV-ohjelmien ohjelmaopas. Voit navigoida, valita, katsella ja tallentaa ohjelmia."],["Hae ja asenna kanavat"],["Lisää tai muuta suosikkikanaviasi kanavaluettelossa."]];

var contentSpan5Array = ["Nauti suosikkiohjelmistasi videosovelluksilla."];

var contentSpan6Array = [["Paina VALIKKO painiketta järjestelmän eri asetusten näkemiseksi.","Siirry kuva-asetuksiin arvojen asettamiseksi."],["Paina VALIKKO painiketta järjestelmän eri asetusten näkemiseksi.","Siirry ääniasetuksiin valintojen asettamiseksi."],["Paina VALIKKO painiketta järjestelmän eri asetusten näkemiseksi.","Siirry kanava-asetuksiin valintojen asettamiseksi."],["Päivitä televisiosi, kun uusi ohjelmaversio on saatavilla."],["Voit valita valikon kielen."],["Ominaisuus, jolla vanhemmat voivat lukita lapsille sopimattomiksi katsomansa kanavat tai ohjelmat."]];

var contentSpan7_1Array = [["Ei ääntä eikä kuvaa","Tarkista sulake tai suojakatkaisin.","Kytke toinen sähkölaite pistorasiaan varmistaaksesi, että se toimii tai on päällekytkettynä.","Pistokkeen ja pistorasian välinen kytkentä on huono.","Tarkista signaalin lähde."],["Normaali kuva, ääni ei kuulu","Paina volume UP-painiketta äänenvoimakkuuden lisäämiseksi.","Väärä ääniasetus","Signaalivirhe lähetyksessä"],["Normaali ääni, kuva ei näy","Säädä kirkkaus ja kontrasti.","Signaalivirhe lähetyksessä","Tarkista onko se Vain ääni-tilassa."]];
var contentSpan7_2Array = [["Radiotaajuinen häiriö","Tämä häiriö aiheuttaa liikehtivää väreilyä ja vinoraitoja, sekä jossain tapauksessa kuvan kontrastin menetyksen. Etsi ja poista radiohäiriön aiheuttaja."],["Ei väriä","Säädä väriasetukset","Kokeile toista kanavaa. Mustavalkoinen ohjelma voi näkyä."],["Kaukosäädin ei toimi.","Vaihda paristot","Paristot on asennettu väärin. TV ei ole kytketty päävirtalähteeseen."]];
var contentSpan7_3Array = [["USB-laitteen sisältö ei tule näkyviin.","Tarkista, että USB-tallennuslaite on yhteensopiva TV:n kanssa","Tarkista, että TV tukee ääni- ja kuvatiedostomuotoja."],["Toisto ilman ääntä","TV-soitin ei tue videon äänimuotoa."],["Tiedostotoisto ei ole tasainen.","USB-tallennuslaitteen siirtotoiminto saattaa rajoittaa tiedonsiirtonopeutta televisioon."]];
var contentSpan7_4Array = [["Mihin minun täytyy kiinnittää huomiota ohjelmistoa päivittäessäni?","Ohjelmistopäivityksen aikana ei saa olla sähkökatkoja.","Vältä kaukosäätimellä suoritettavia toimintoja ohjelmistopäivityksen aikana.","Ole kärsivällinen, sillä ohjelmistopäivitysprosessi saattaa kestää hieman kauemmin."],["TV:n käyttöliittymässä ei esiinny erityisiä muutoksia ohjelmistopäivityksen jälkeen.","Määrätyissä olosuhteissa ohjelmistopäivitys ei pelkästään päivitä tai lisää uusia toimintoja, vaan parantaa myös televisiolaitteen toimintaa ilman erityisiä muutoksia käyttöliittymässä. Joskus se ei vaikuta ollenkaan TV:n käyttöliittymään"]];
var termsTitle = "Ehdot ja edellytykset";
var termsConditions = ["(Oikeudellinen ilmoitus) TCL - Tämän TV-vastaanottimen valmistaja","SmartTV-palveluiden monista ominaisuuksista sekä käytettävissä olevan sisällön rajoituksista johtuen tietyt ominaisuudet, sovellukset ja palvelut eivät ehkä ole saatavilla kaikilla laitteilla tai kaikilla alueilla. Jotkin SmartTV:n ominaisuudet voivat myös vaatia lisäoheislaitteita tai jäsenmaksuja, jotka myydään erikseen. Vieraile verkkosivullamme saadaksesi lisää tietoja erityisistä laitteen tiedoista ja sisällön saatavuudesta. Palvelut ja sisällön saatavuus SmartTV:n kautta saattavat muuttua ajoittain ilman erillistä ilmoitusta. \n   Kaikki sisältö ja palvelut, jotka ovat käytettävissä tämän laitteen kautta, kuuluvat kolmansille osapuolille, ja ne ovat suojattuja tekijänoikeuslailla, patentilla, tavaramerkillä ja/tai muilla immateriaalioikeuksilla. Sisältö ja palvelut ovat tarkoitettuja vain henkilökohtaiseen, epäkaupalliseen käyttöösi. Sisältöä tai palveluita ei saa käyttää tavalla, jota sisällön omistaja tai palveluntarjoaja ei ole valtuuttanut. Rajoittamatta edellistä, ellei sisällön omistaja tai palveluntarjoaja ole nimenomaisesti antanut valtuutusta, et saa muokata, kopioida, julkaista uudelleen, siirtää, postittaa, lähettää, kääntää, myydä, luoda johdannaisia töitä, käyttää hyväksesi tai jakaa millään tavalla tai välineellä mitään sisältöä tai palveluita, joita esitetään tämän laitteen kautta. \n   SINÄ HYVÄKSYT NIMENOMAISESTI, ETTÄ KÄYTÄT LAITETTA OMALLA RISKILLÄSI JA ETTÄ KOKO RISKI LIITTYEN TYYDYTTÄVÄÄN LAATUUN, SUORITUSKYKYN JA TARKKUUTEEN ON SINULLA. LAITE JA KAIKKI KOLMANNEN OSAPUOLEN TUOTTAMA SISÄLTÖ JA PALVELUT TARJOTAAN SELLAISENAAN ILMAN MINKÄÄNLAISTA TAKUUTA SUORAA TAI EPÄSUORAA. TCL NIMENOMAISESTI KIISTÄÄ KAIKKI TAKUUT JA EHDOT LIITTYEN LAITTEESEEN, SISÄLTÖÖN TAI PALVELUIHIN, JOKO NIMENOMAISEEN TAI HILJAISEEN TAKUUSEEN, SISÄLTÄEN, MUTTEI RAJOITTUEN KAUPPAKELPOISUUTEEN, TYYDYTTÄVÄÄN LAATUUN, KÄYTTÖTARKOITUKSEEN SOVELTUVUUTEEN, TARKKUUTEEN, HILJAISEEN KÄYTTÖÖN JA KOLMANNEN OSAPUOLEN OIKEUKSIEN LOUKKAAMATTOMUUTEEN. TCL EI TAKAA MINKÄÄN TÄMÄN LAITTEEN AVULLA TARJOTUN SISÄLLÖN TAI PALVELUN TARKKUUTTA, VOIMASSAOLOA, OIKEA-AIKAISUUTTA, LAILLISUUTTA TAI TÄYDELLISYYTTÄ, EIKÄ TAKAA, ETTÄ LAITE, SISÄLTÖ TAI PALVELUT OVAT VAATIMUSTESI MUKAISIA, TAI ETTÄ LAITTEEN TOIMINTA TAI PALVELUT TOIMIVAT KESKEYTYKSETTÄ TAI VIRHEETTÖMÄSTI. MISSÄÄN OLOSUHTEISSA, MUKAAN LUKIEN LAIMINLYÖNTI, TCL EI OLE VASTUUSSA, OLIPA KYSEESSÄ SOPIMUS TAI RIKKOMUS, MISTÄÄN VÄLITTÖMÄSTÄ, VÄLILLISESTÄ, ERITYISESTÄ, SEURAUKSEEN PERUSTUVASTA TAI MUUSTA VAHINGOSTA, ASIANAJAJIEN MAKSUISTA, KULUISTA, TAI MISTÄÄN MUISTA VAHINGOISTA, JOTKA JOHTUVAT TAI LIITTYVÄT SISÄLTYVIIN TIETOIHIN TAI LAITTEEN KÄYTÖN TULOKSENA, TAI MIKÄ TAHANSA SISÄLTÖ TAI PALVELUT, JOTA KÄYTÄT TAI JOTA KOLMAS OSAPUOLI KÄYTTÄÄ, MYÖS JOS SELLAISTEN VAHINKOJEN MAHDOLLISUUDESTA ON KERROTTU. \n   Kolmannen osapuolen palveluita voidaan muuttaa, pidättää, poistaa, päättää tai keskeyttää, tai pääsy voidaan estää milloin tahansa ilman erillistä ilmoitusta, ja TCL (Thomson-merkkisten televisioiden valmistaja) ei tee tulkintoja tai takaa, että mikään sisältö tai palvelu pysyy saatavilla minkään ajanjakson ajan. Kolmannet osapuolet välittävät sisältöä ja palveluita verkkojen ja lähetystilojen avulla, jotka ovat TCL:n hallinnan ulottumattomissa. Rajoittamatta tämän vastuuvapauslausekkeen yleisluontoisuutta, TCL nimenomaisesti kiistää kaiken vastuun tai velvollisuuden koskien muutoksia, keskeytyksiä, käytöstä poistamista, poistamista tai minkään sisällön tai tämän laitteen avulla saataville olevan sisällön tai palvelun pidättämistä. TCL saattaa asettaa käyttö- tai pääsyrajoituksia tiettyihin palveluihin tai sisältöön, joka tapauksessa ja ilman erillistä ilmoitusta tai vastuuta. TCL ei ole vastuussa tai korvausvelvollinen asiakkaaseen liittyvistä sisällöistä tai palveluista. Kaikki sisältöön ja palveluihin liittyvät kysymykset tulee tehdä suoraan vastaavan sisällön ja palvelun tuottajalle."];

var noChannelListRemind        = ["Kanavia ei löytynyt. Kanavaluettelo saadaan kanavien haun jälkeen.","Kanavahaku"];
var closeSubtitleRemind   = "Toiminto on saatavilla, kun tekstitys on pois päältä. Haluatko asettaa nyt?";

var estickerTitles = ["Erittäin realistiset kuvat","Värit heräävät eloon","Sulava ja luonnollinen liike","Dynaaminen kuvanlaatu","SR UHD upscaling-toiminto","Koe 3-ulotteinen maailma","Nopeampi suorituskyky","Tuleva 4K-sisältö","Nauti nettimaailmasta","Pääsy ylimääräiseen sisältöön","Integroidut digitaalivirittimet","Kytke kaikki laitteet","Eri 4K lähteet","USB-sisältö","Ultranopea WiFi","Mobiilisisältö televisiossa","Mobiililaitteen sisältö","Paikallinen sisältö","DivX-hyväksytty","Saumaton kuva","Kanava valmis","TDT Premium"];

var estickerDescriptions = ["Loistava katselukokemus, sillä kuvan terävyys ja tarkkuus on nelinkertainen UHD- näytön Full HD-kuvaan verrattuna.","Laaja väriasteikko luo tunnetta joka esitykseen heleän punaisilla ja smaragdin vihreillä sävyillä. ","4K ruudun interpolointi ja takavalo sumennuksen estoon.","Alkuperäisen kuvan kirkkaus korostuu ja tuloksena on todella dynaaminen näkymä loistavalla kontrastilla.","Super Resolution-teknologian ansiosta näet TV-ohjelmat ja Blu-Ray kasettien sisällön entistä selkeämpinä ja terävimpinä.","Koe 3D TV-lähetykset ja katsele useita 3D-sisältöjä.","Quad Core tarjoaa entistä nautittavampia viihdekokemuksia joustavan vuorovaikutuksen ja parantuneen suorituskyvyn ansiosta.","HEVC (H.265) koodekin tuki 4K-videon tulevalle standardille","Runsaasti verkkosovelluksia, VOD-palveluja, catch-up TV-palveluja ja internetselailua","Näe lisää verkkopalvelusi lisäpalveluja ja sisältöjä käyttämällä.","Voit katsella teräväpiirto TV-kanavia ilman erillistä digisovitinta.","Helppo kytkeä moniin kotona käytettävissä oleviin digitaalilähteisiin.","Tulevaisuuden TV, pystyy toistamaan 4K 50/60Hz DMI 2.0 kautta HDCP 2.2 järjestelmällä","Video- tai valokuvasisältö suoraan USB-asemasta, HDD:stä tai kamerasta suureen näyttöön 4K resoluutiolla","Uusimman sukupolven 2x2 MIMO ja AC standard takaavat huippunopean internet-yhteyden.","Nauti valokuvista, videoista ja mobiililaitteiden sovelluksista suurella näytöllä screen mirroring-tekniikan ansiosta.","Valokuvia, videoita ja sovelluksia älypuhelimesta tai tabletista voidaan katsella suurella näytöllä.","Katsele suurella näytöllä paikallista sisältöä, kuten valokuvia sekä videoita paikalliseen verkkoon liitetyistä laitteista.","Voit toistaa vuokrattuja tai omia suojattuja DivX-elokuvia ","Erittäin ohutreunainen näyttö ja litteä muotoilu","Canal+ testattu ja hyväksytty","TDT Premium testattu ja hyväksytty"];							

var eManualTextArray = ["E-manuaali","Kaikki kuvat ovat vain viitteellisiä."];
var frontPanelRemind = "Etupaneeli on lukittu.";
var eRPRemind		 = "Myymälätila ei voi täyttää ERP-pyyntöä. Oletko varma?";	
var noRelatedChannel = "Ei vastaavaa kanavaa";
var option0624Name          = ["BOP","BFS","Tapahtuma kerrallaan","GetUserID","BGM","Reset all","Resetoi kauppa","NRM","DVB-T2 ja maan valinta","HbbTV-tila"];
var DVBT2AndChoice = ["Päällä","Maan mukaan","Pois"];
var hbbtvServiceRemind = "HbbTV-palvelu tulossa pian.";
var insertWord = "Syötä";			
var viewDetail = "Yksityiskohdat";							
							

var remindOAD  = "Ohjelmistopäivitys. Uusi suositeltava ohjelmistopäivitys voi olla toisella kanavalla. Jos hyväksyt sen lataamisen, se voi vaihtaa kanavaa automaattisesti. Haluatko tehdä sen nyt?";

var LEDStatus = ["Vilkkuu", "Normaali"];
var netFlixRemind = "Tämä toiminto keskeyttää pääsyn Netflix-palveluihin, kunnes kirjaudut uudelleen sisään.";
var ESNExplanation = "Elektroninen sarjanumero";
var resetShopRemind = "Järjestelmä palautuu nyt, älä sulje televisiota";
var initialSelectOption = "Valitse yksi vaihtoehto:";
var databaseRemind   = "Järjestelmä tunnisti tietokannan vaurioituneen jostain tuntemattomasta syystä ja rakensi sen automaattisesti uudelleen, jatka painamalla OK";
var Deactivation = "Palvelun sulkeminen";
var oadFutureRemind = "Ohjelmistopäivitys. Uusi suositeltava ohjelmisto on saatavilla %s. Päivitys voi viedä jonkin aikaa ja näyttö saattaa mennä mustaksi. Älä sammuta vastaanotinta päivityksen aikana. Jos hyväksyt päivityksen, jätä vastaanotin päälle tai standy-tilaan aikataulun mukaisesti. Haluatko vastaanottaa päivityksen?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Äänen ulost.";
var bt_soundOutPutTV = "TVkaiuttimet";
var bt_soundOutPutBT = "Bluetooth-laite";
var bt_soundOutPutBT_TV = "Bluetooth ja TV";
var bt_refreshBarName = "Laitteet";
var bt_settingTips_On = "Käynnistä Bluetooth-toiminto ja skannaus.";
var bt_settingTips_Finding = "Käytett.olev.laitt. haku..";
var bt_settingTips_NoDevice = "Ei laitt.käytettävissä";
var bt_deviceList_State_NoConnect = "Ei yhdistetty";
var bt_deviceList_State_Connecting = "Yhdistää...";
var bt_deviceList_State_Connected = "Yhdistetty";
var bt_deviceList_State_Paired = "Paritettu";
var bt_deviceList_Conncect_Failed_Tips1 = "Yhteys epäonnistui";
var bt_deviceList_Conncect_Failed_Tips2 = "Varmista että XXX Bluetooth-toiminto on päällä";
var bt_deviceList_Conncect_Success = "Yhdistetty Bluetooth-laitteeseen";
var bt_deviceList_Disconncect_Success = "Ei yhdistetty Bluetooth-laitteeseen";
var bt_deviceList_Disconnect = "Haluatko varmasti katkaista XXX-yhteyden?";
var bt_tipsTitle = "Vinkki";
var bt_bluetooth_Pairing_Title = "Bluetooth-paritus";
var bt_bluetooth_Input_Pin = "Syötä PIN:";
var bt_bluetooth_Output_Pin_Tip = "Syötä XXX PIN näppäimistöllä";
var bt_bluetooth_Pin_Wrong_Tip = "Väärä PIN";
var bt_bluetooth_Remove_Pair_Title = "Kys.";
var bt_bluetooth_Remove_Pair_Ask = "Unohda tämä laite?";
var bt_bluetooth_module_error = "Bluetooth-moduuli error!";
							
var netflixDialogOptions = ["OK","Myöhemmin","Älä näytä tätä uudelleen"];
var netflixDialogContent = "Netflix tarjoaa tuhansia elokuvia, haluatko katsoa nyt?";
var netflixRemoteDialogContent = "Netflix-näppäimellä varustettu kaukosäädin on nyt myynnissä. Lisätietoa saat käymällä seuraavalla verkkosivulla.\nhttps://store.tcleu.com";
var applyPictureModeSwitchValue	 = ["Nykyinen lähde","Kaikki lähteet"];
var audioDescriptionName = ["Kuvailutulkkaus","Kaiutin","Kaiuttimen äänenvoimakkuus","Kuulokkeet","Kuulokkeiden äänenvoimakkuus","AD äänenvoimakkuus","Bluetooth-laite","Bluetooth-laitteen taltio"];
var audioDescriptionOptions = ["Pois","Normaali","Kuvailutulkkaus"];							
var volumeOffRemind = 'Aseta XXX ”Päälle” asetusvalikosta.';
var switchSourceRemind   = " lisätty. Haluatko kytkeä sen nyt?";																					
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Urheilutila";
var resetStadium = "Stadion";
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Poistu","0","Tarkenna+",
                       	   "Poistu",
                       	   "Luettelo","0","Teksti","Opas","Vahvista","Poistu","Valikko","Tekstitys","Tiedot",
                       	   "Pysäytä",
                       	   "Tiedot","Valikko","Poistu"
                       	   ];
var nscreenTips = "GuideOn auttaa käyttäjiä selaamaan suurta sisältömäärää.";
var nscreenContent = 'Vaiheet: 1. Napsauta ”TCL nScreen” puhelimesta.  Yhdistä puhelin TV:n kanssa saman LAN-yhteyden kautta; 2. Siirry GuideOn-sovellukseen napsauttamalla ”GuideOn”; 3. GuideOn toimii samoin kuin painettu ohjelmaopas eli ilmoittaa käyttäjille mitä sisältöä televisiossa on saatavissa; ';
var singalBrokenoffTips = "Signaalissa on häiriöitä. Järjestelmä ei pysty suorittamaan latausta loppuun.";
var contentSpan1_1Array_AU =  [["TEHO:","LÄHDE:","MENÜÜ:","BACK:","INFO:","HOME:","EXIT:","LISTA:"],
                             ["Turns power on or standby mode","Select the input source",
                              "Show TV settings menu","Go back to the Previous menu or exit a running APP","Näyttää ohjelmatiedot",
                              "Menee kotisivulle","Go back to the Previous menu or exit a running APP","Näyttää kanavaluettelon"]];
var guideDescriptionWords ="Lataa GuideOn-sovellus puhelimeesi skannaamalla QR-koodi";
var settingNoticeSourceName ="Automaattinen lähde";

var all_country 	= ["Avstralija","Avstrija","Belgija","Bolgarija","Hrvaška","Češka","Danska","Finska","Francija","Nemčija",
						"Grčija","Madžarska","Italija","Luksemburg","Nizozemska","Norveška","Poljska","Portugalska","Romunija","Rusija",
						"Srbija","Slovenija","Španija","Švedska","Švica","Združeno Kraljestvo","Nova Zelandija"," "/*Arab*/,"Estonija"," "/*Hebrew*/,
						"Latvija","Slovaška","Turčija","Irska","*","Filipini","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kitajska","*","*","*","*","*","*","Drugi","Litva"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litva"];						
				
var all_language 	= ["Češčina","*","Danščina","*","*","nemščina","angleščina","francoščina","Grščina","španščina",
						"Hrvaščina","*","italijanščina","Madžarščina","Nizozemščina","Norveščina","Poljščina","Portugalščina","Ruščina","Romunščina",
						"Slovenščina","Srbščina","Finščina","Švedščina","Bolgarščina","Slovaščina","*","*","Keltščina","*",
						"Valižanščina","Arabščina","Irländska","Latvijščina","*","Turščina","Estonščina","Nizozemščina"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Original zvok"/*Qaa*/,"Ni določen"/*Undetermined*/,"*","Neznano",
						"Ni določen","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskovščina","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Vitryska","*","*","Katalonščina","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicijščina","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandščina","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litvanščina",
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
						"*","*","*","Samijščina","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrajinščina","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Izklop","Vklop"];
var okCancel		= ["V redu","Prekliči"];
var yesNo			= ["DA","NE"];
var level			= ["Izklop","Nizko","Visoko","Srednje"];
var manualAuto		= ["Ročno","Samodejno"];
var homeShop		= ["Domov","Trgovina"];
var picPreset		= ["Standardna","Dinamično","Naraven","Film","Digitalni kino","Osebno"];
var picColorTemp	= ["Hladno","Normalno","Toplo","Toplo2","Uporabnik"];
var pic3dNavig		= ["Ročno","Samodejno","Polavtomatsko"];
var _3dOptions		= ["3D način","3D-na-2D","L-D stikalo","Globina polja"];
var pic3DMode       = ["Izklop","2D-na-3D","En ob drugem","Zgoraj in spodaj","Prepletanje vrstic"];
var picEcoOptions	= ["Varčevanje z energijo","Svetlobni senzor","Lokalno zatemnjevanje","Optimizacija prikaza"];
var picGeoOptions	= ["Geometrija","Vodoravni položaj","Navpični položaj","Ura","Faza"];//Geometry 无翻译
var picAdWhiteBal	= ["Povečaj R","Povečaj G","Povečaj B","Izravnava R","Izravnava G","Izravnava B"];
var souOptions		= ["Prednastavitev zvoka","Ravnovesje","Avdio zamik","SRS TSHD","Samodejna nastavitev glasnosti",
						"Vrsta SPDIF","Zakasnitev SPDIF","Postavitev TV-ja","Jezik avdia","Vrsta zvoka",
						"Opis zvoka","Tip izhoda digitalnega avdia","Nastavitev Dolby professional "];
var soundOutputoptions =["DAP izhod TV zvočnika","Zunaji AVR izhod za kodiranje"];
var inteligenteqoptions 	=["Fokusirano","Bogato"];						
var souSpdifType	= ["Samodejno"/*Dolby*/,"PCM","Izklop"];
var colorSpace      = ["Samodejno","Izvorno","Uporabnik","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Prostorski virtualizator","Dialog enhancer","Bass enhancer","Pametna glasnost","Analiza medijev","Grafični EQ","Inteligenten EQ"];
var chOptions		= ["Skeniranje kanalov","Seznam kanalov","EPG","Organizator","Diagnostika kanala",
						"timeshit","Podnapisi","Teletekst","Tip seznama kanalov"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Moč signala","Kakovost signala","Frekvenca (kHz)","ID storitve","ID omrežja","Ime omrežja"];
var chScanOptions	= ["Država","Način tunerja","Samodejno iskanje","Samodejna posodobitev","Ročno analogno skeniranje",
						["Ročno iskanje kabel. kanalov","Ročno iskanje antene","Ročno nastavljanje satelita"],"Namestitev satelitske antene","Izbira priljubljenega omrežja","Počisti seznam kanalov",];
var favNetDes		= "Prosimo izberite svoje najljubše omrežje";
var tuner			= ["Kabel","Antena","Satelit"];//Satelite 无翻译
var passError		= "Geslo ni pravilno.\nPonovite vnos!";
var chType			= ["Analogni kanali: ","Digitalni kanali: "];
var chScanStatus	= ["Status: Iskanje","Status: iskanje končano","Status: skeniranje preklicano","Status: napaka pri iskanju"];
var chScanPara		= ["Frekvenca (kHz)","Modulacija","Frekvenca simbolov (Ksym/s)","ID omrežja","Sistem",
						"Fina nastavitev","Moč signala","Kakovost signala","Način iskanja","Identifikacija kanala"];
var chScanParaMHZ      = ["Frekvenca (MHz)"];
var chAtvManSys		= ["ZAHODNA EVROPA","VZHODNA EVROPA","Velika Britanija","Francija"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Samodejno"];
var chCleanDes		= "Ali želite izbrisati seznam kanalov?";
var chDeletDes		= "Želite izbrisati kanal";
var chOperator		= ["Ziggo","UPC","Drugi"];
var chScanType		= ["Digitalno & Analogno","Digitalno","Analogno"];
var chScanMode		= ["Celotno","Napredno","Hitro"];
var bookingModes	= ["Snemanje","Opomnik"];
var dayName			= ["ned","pon","tor","sre","čet","pet","sob"];
var monthName		= ["Jan", "Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"];
var filter			= ["Filter","Vrsta","Podzvrst"];
var chEpgFirstGenre	= ["Film","Novice","Razvedrilne oddaje","Šport","Za otroke","Glasba","Umetnost","Družabne vsebine","Izobraževalno","Prosti čas","POSEBNO"];
var chEpgSecondGenre= [["Drama","Detektivske zgodbe","Pustolovščina","Znanstvena fantastika","Komedija","Telenovele","Romantika","Resne vsebine","Film za odrasle"," "," "," "],
						["Aktualne vsebine","Vremenska napoved","Informativne oddaje","Dokumentarne oddaje","Informativno-pogovorne oddaje"," "," "," "," "," "," "," "],
						["Razvedrilne oddaje","Kvizi in igre","Variete","Pogovorne oddaje"," "," "," "," "," "," "," "," "],
						["Šport","Posebni dogodki","Športni pregledi","Nogomet","Tenis",
							"Ekipni športi","Atletika","Motošport","Vodni športi","Zimski športi",
							"Konjeništvo","Borilni športi"],
						["Za otroke","Predšolski otroci","Zabava za 6 do 14 let","Zabava za 10 do 16 let","Informativne oddaje","Risanke"," "," "," "," "," "," "," "],
						["Glasba","Rock ","Resne vsebine","Ljudska ","Jazz","Muzikli","Balet"," "," "," "," "," "],
						["Umetnost","Uprizoritvene umetnosti","Likovne umetnosti","Verske oddaje","Popularna kultura",
							"Literarne oddaje","Film","Zabavne znanstvene oddaje","Prenos","Novi mediji",
							"Oddaje o umetnosti","Moda"],
						["Družabne vsebine","Kronike","Gospodarstvo","Izjemni ljudje"," "," "," "," "," "," "," "," "],
						["Izobraževalno","Narava","Tehnologija","Medicina","Tuje države","Družbene vede","Dodatno izobraževanje","Jeziki"," "," "," "," "],
						["Konjički","Turizem","Ročna dela","Mehanika","Zdravje in dobro počutje","Kuhanje","Oglaševanje","Vrtnarjenje"," "," "," "," "],
						["Izvorni jezik","Črno-belo","Neobjavljeno","Prenos v živo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Preskoči kanal","Razvrsti kanale","Uredi kanal","Brisanje kanala","Kanal Menjaj","kanal vložek"];
var chEditPara 		= ["Ime omrežja","Številka kanala","Ime kanala","Frekvenca","Barvni sistem","Zvočni sistem "];
var chSatTitles		= ["Tip satelita","Namestitev satelitske antene","Izbira satelita"];
var chSatEidtOptions= ["Ime satelita","Položaj","LNB Moč","LNB frekvenca (MHz)","Vhod diseqc",
						"Ton 22KHz","ton počil","Frekvenca (kHz)","Frekvenca simbolov (Ksym/s)","Polarizacija",
						"Moč signala","Kakovost signala","Stanje satelita"];
var chSatAutoPromt	= [["Vse","Omrežje"],
						["Vse","Brezplačno"]];
var chSatAutoScanOptions=["Izbira satelita","Način iskanja","Kanali"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzalno",];
var chSatDiSEqCInput= ["Onemogočeno","A","B","C","D"];
var chSatTone22KHz	= ["Samodejno","Vklop","Izklop"];
var chSatToneBurst	= ["Onemogočeno","ton počil A","ton počil B"];
var chSatPolarization= ["Vodoravno","Navpično"];
var chSatSetupOptions=["Tip antene","Sprejemnik","Frekvenca pasu"];
var chSatAntennaType= ["Enojni kabel","Univerzalno"];
var chSatUserBands	= ["Uporabniški pas 1","Uporabniški pas 2","Uporabniški pas 3","Uporabniški pas 4","Uporabniški pas 5","Uporabniški pas 6","Uporabniški pas 7","Uporabniški pas 8"];
var chSatOthers		= ["Odzivnik"];
var chSatSetupOthers= ["Uporabniško določeno"];
var pleaseSelectSat = "Prosimo, najprej izberite satelite!";
var subOptions		= ["Podnapisi","Jezik digitalnih podnapisov","2. jezik digitalnih podnapisov","Vrsta podnapisov"];
var ttxOptionsCon      = ["Dekodiranje jezika strani","Jezik digitalnega teleteksta"];
var subType			= ["Normalno","Za gluhe in naglušne"];
var netIntf     	= ["Ethernet","Brezžično"];
var netConnDes		= ["TV preizkuša omrežno povezavo.\nProsimo počakajte",
						"Preizkus omrežne povezave uspešen!",
						"Preizkus omrežne povezave neuspešen."];
var netSsidError	= "Veljavna dolžina SSID imena je med 1-32 znaki. Prosimo, preverite SSID ime.";
var netOthers		= ["PIN koda"];
var netWlessAutoDes	= ["Preden kliknete OK se prepričajte, da je PIN koda nameščena v dostopno točko.",
						"Prosimo pritisnite tipko na dostopni točki v roku 120 sekund od klika tipke OK."];
var netConnRemind	= ["Geslo ni pravilno.",
						"Povezujem. Počakajte prosim!",
						"Povezava je bila uspešna in IP je pridobljen!",
						"Neuspešna povezava",
						"TV skenira DT\nProsimo počakajte.",
						"Na TV ni priključena nobena brezžična naprava!"];
var netWireIpOptions= ["IP nastavitev","Tip naslova","IP naslov","Maska podomrežja","Privzeti prehod","Primarni DNS","Sekundarni DNS"];
var netWireConnRemind= ["Prosimo vpišite vrednost med 0 in 255.",
						"Uspešno povezano!",
						"Prosimo vtipkajte veljaven naslov",
						"Uspešno povezano!",
						"Pripojenie zlyhalo!",
						"Povezujem. Počakajte prosim!",
						"Prosimo vnesite vrednost med 1 in 223."];
var netFlixOptions	= ["Deaktiviraj","ESN"];
var netFlixDes	 	= ["Ali želite deaktivirati?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Posodobitev programske opreme";
var netUpdateDialogTitle = "Posodabljanje programske opreme";
var netBGDownloadTitle 	= "Prenašam";
var netUpdateLoadingPrompt= ["Iskanje nadgradnje, prosimo počakajte!",
							"Programska oprema se prenaša ... Prosimo počakajte!",
							"Med posodabljanjem TV-ja NE UGAŠAJTE!",
                            "Nujno potrebna programska oprema se prenese samodejno v ozadju!"];
var netUpdatePrompt= ["Čestitamo, imate najnovejšo programsko opremo!",
						"Najdena je bila programske opreme z novejšo različico XXXX. Ali jo želite prenesti? Prenos lahko traja nekaj časa in je odvisen od vašega omrežja.",
						"Napaka v prijavi!",
						"Prenos podatkov ni uspel, prosimo poskusite ponovno kasneje!",
						"Napaka pri preb. Update XML!",
						"Neuspešna povezava",
						"Prenos programske opreme je končan. Ali želite začeti s posodobitvijo?",
						"Izguba podatkov! Napaka pri prenosu!",
						"Napaka pri preverjanu, prosimo poskusite znova!",
						"Napaka v omrežju. Prosimo preverite in se ponovno povežite…",
						"Napaka pri posodabljanju. Prosimo  ponovno zaženite TV!",
						"Datoteka, ki vsebuje nadgradnjo je bila nepričakovano izbrisana. Nadgradnjo omrežja zaženite znova.",
						"Programska oprema je bila uspešno prenesena v ozadje. Ali jo želite nadgraditi?"];
var netUpdateButtonText = ["Prenos", "Posodobi", "Kasneje", "Nikoli", "V redu","Nadaljuj"];
var autoDetectPrompt = ["Najdena je bila programske opreme z novejšo različico XXXX. Ali jo želite prenesti? Prenos lahko traja nekaj časa in je odvisen od vašega omrežja.",
						"Najdena nova različica programske opreme XXXX. Ali želite posodobiti?",
						"Zadnja nadgradnja omrežja je bila prekinjena. Nadgradnjo morate zagnati znova.",
                        "Prenos nove programske opreme, različica XXXX ni zaključen. Ali želite zdaj nadaljevati?",
                        "Programska oprema prenesena, ali jo želite posodobiti zdaj?"];
var sysOptions		= ["E-priročnik","Jezik menijev","Časovnik","Zaklepanje","Vnos nastavitev",
						"Posodobitev programske opreme","Lokacija","HbbTV način","Piškotki","Skupni vmesnik",
						"Napredne nastavitve","Ponastavi na tovarniške nastavitve","Indikatorska LED lučka"];
var sysResetDes		= "Ste prepričani?";
var sysMenuLangOptions=["Jezik","Preferenčni jezik avdia","2. prioritetni avdio jezik"];
var sysTimerOptions	= ["Časovni pas","Regija","Ura","Izklopni časovnik","Samodejno mirovanje", "Country region"];

var sysTimeZone		= ["Kot izdajatelj programa","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Izklop","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Izklop","4 uri","6 uri","8 uri"];
var sysRegionName	= ["Madrid","Kanarski otoki"];
var sysClockOptions	= ["Samodejna sinhronizacija","Datum","Čas","Vklopi časovnik","Časovnik",
						"Kanal pri vklopu","Izklopi časovnik","Časovnik"];
var sysTimer		= ["Izklop","Denne","Raz"];

var sysInputSet		= ["Ni oznake","DVD","Blu-ray","HDD","DVDR",
						"HD snemanje","Igrice","Video rekorder","Osebni računalnik","Digitalni STB",
						"HD digitalni STB","Kamera","Snemalnik","Drugo"];
var sysAvVideoInput	= ["Samodejno","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Z USB","Z omrežja","Po kanalu"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Ne najdem nove programske opreme!",
						"Najdena nova različica programske opreme XXXX. Ali želite posodobiti?",
						"Vložte prosím USB disk.",
						"Napaka pri preverjanu, prosimo poskusite znova!",
						"NE odstranite USB ključa in NE izklopite TV med posodabljanjem sistemskega programa!",
						"Programska oprema je bila uspešno posodobljena.\nTV se bo samodejno ponovno zagnal!",
						"Najdena je bila programske opreme z novejšo različico XXXX. Ali jo želite prenesti? Prenos lahko traja nekaj časa in je odvisen od vašega omrežja.",
						"Prenašam",
						"Prenos programske opreme je končan. Ali želite začeti s flashem?",
						"Neusp.posodob.!",
						"Iščem datoteke za posodobitev",
						"Programska oprema je bil posodobljena.\nProsimo ponovno zaženite TV."];
var sysProductInfo	= ["Trenutna različica","Názov výrobku","Proizvajalec","Ime šasije"];
var sysCiDes		= ["Ni CI kartice."];
var sysAdOptions	= ["DivX(R) registracija","DivX(R) odjava","T-Link","Authorization Error","Potrditev odjave",
						"Potrditev najema","Izposoja potekla","ID označbe za Bluetooth"];
var sysRegistDes	= ["Ak chcete prehrávať videá Divx, musíte zaregistrovať svoje zariadenie.",
						"Registračný kód:",
						"Zaregistrujte sa na http://vod.divx.com"];
var sysDregistDes	= ["Odjavna šifra:",
						"Odjavite se na http://vod.divx.com",
						"Želite nadaljevati z registracijo?"];
var mediaAuthorization = ["Vaša naprava ni pooblaščena za predvajanje tega zaščitenega DivX(R) video posnetka."];
var deregistrationConfrimation = ["Vaša naprava je že registrirana.","Ali ste prepričani, da jo želite odjaviti?"];
var rentalConfirmation = "Ta DivX(R) najem je porabil XXXX od YYYY ogledov. Nadaljujem?";
var rentalExpired 	= "DivX(R) izposoja je bila uporabljena XXXX krat od YYYY ogledov. DivX izposoja je potekla.";
						
						
var sysLockOptions	= ["Zaklepanje kanala","Intervalni zaklep","Starševska ocena","Blokiraj vnos","Zaklep sprednje plošče","Zakleni namestitev",
						"Zamenjaj geslo","Največja glasnost","Počisti vse"];
var sysTimeIntervals= ["Tip zaklepa","Začetni čas","Končni čas"];
var sysRatingOptions= ["Ni","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Cenzurirano (Španija)"];
var changePass		= ["Zamenjaj geslo","Novo geslo","Potrdi geslo"];
var changePassDes	= ["Geslo ni pravilno.\nPonovite vnos!",
						"Geslo ne ustreza.\nProsim vnesite ga ponovno!",
						"Geslo nastavljeno!",
						"Tento kód je príliš jednoduchý pre heslo.\nProsíme, zadajte iný!"];
var sysPowerOnChOptions= "Izberite način";
var sysPowerOnCh	= ["Zadnje stanje","Izbira uporabnika"];
var netWlessSecu    = ["Odprto","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ni","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Ni podpore"];
var netWlessSecu3	= ["Ni","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Ni podpore"];
var netOptions		= ["Internetna povezava","Vmesnik","Brezžične nastavitve","Nastavitve IP","Informacije",
						"Preizkus povezave","DLNA","TCL nScreen","Netflix nastavitve","WiFi TV povezava",
						"Tip naslova","IP naslov","Maska podomrežja","Privzeti prehod","Primarni DNS",
						"Sekundarni DNS","SSID","BSSID","Prosimo vpišite SSID:","Uporabniška identifikacija"];
var chEditDes		= ["Podvojena številka kanala!","Pritisnite rdečo tipko za brisanje trenutnega znaka!","Neveljavne številke kanalov."];
var chEpgNoProgram	= "Brez programskih informacij, prosimo, najprej poiščite kanale!";
var chEpgWords		= ["Programski vodič","Ni programskih datotek.","Kanal je zaklenjen!","Ni podrobnosti o programu.","Ni naslova programa."];
var chEpgBooking	= ["Razpored info", "Številka kanala","Datum začetka","Začetni čas","Končni čas",
						"Vrsta ponovitve","Vrsta razporeda","Dodajte urnik.","Zamenjaj","Spremeni",
						"Dodaj/uredi"];
var epgHotKey		= ["Prejšnji dan","Naslednji dan","Filter","Seznam urnikov.","Pridať plán"];
var chEpgBookRemind	= ["Nepravilen čas začetka","Nepravilen čas zaključka","Podvojen urnik","Uspešno shranjeno.","Uspešno izbrisan."];
var chSchePara		= ["Seznam urnikov.","Začetni čas","Datum začetka","Naslov programa","Ime kanala",
						"Trajanje","Ponovi","Urnik","Urejanje","Briši"];
var dateTimer		= ["Raz","Denne","Tedensko"];
var scheduleDeleteReminds="Želite odstraniti ta urnik?";
var scheduleNoLists	= "Na voljo ni nobenega urnika. Pritisnite rdečo tipko za dodajanje novega.";
var chListWords		= ["Seznam kanalov","Izbira seznama","Način tunerja","Dodaj med priljubljene","Odstrani",
						"Izberi seznam kanalov","Izberi način tunerja","Zamenjaj"];
var chListType		= ["Vse","Digitalno","Analogno","Radio","Brezplačno","Priljubljene"];
var chAutoScanOptions=["Izberite operaterja","Tip kanala","Samodejno iskanje"];
var souSoundType	= ["Nepravilno","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dvojno 1","Dvojno 2","Dvojno 2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Glasba","Film","Jasen glas","Standardna","Osebno"];
var picAdRgbMode	= ["Izklop","Samo rdeče","Samo zeleno","Samo modro"];
var picAdOptions	= ["Zmanjšanje šuma","MPEG NR","RGB mode","Dinamično Kontrastno","LED Jasnost premikanja",
						"Kožni odtenek","Filmski način","Igralni način","Barvna temperatura","Beline",
						"Zamrzni","črna Stretch","Črn rob","Gamma","Način HDMI","10P ravnovesje beline","Podaljševalec barve",
						"Zmanjšanje zamegljenosti","Zmanjšanje tresljajev","Barvni prostor","Razjasnitev premikanja"];
var pic10Pwhite     = ["Interval","Rdeče","Zeleno","Modro","Ponastavi","Barva","Rumena","Cijan","Magenta"];
var picMotionClarity = ["Način premikanja","Interpolacija premikanja","LED Jasnost premikanja","Zmanjšanje zamegljenosti","Zmanjšanje tresljajev","Ponastavi"];
var picMotionMode   = ["Samodejno","Film","Gladko","Počisti","Šport","Stranka"];
var picResetDes		= "Vse osebne nastavitve bodo ponastavljene. Ali ste prepričani, da žeite izvesti izbrano dejanje?";
var pic10PReset     = "Ali ste prepričani, da želite ponastaviti 10P ravnovesje beline?";
var picMotionReset  = "Ali želite ponastaviti Jasnost premikanja?";
var picColorSpaceReset    = "Ali ste prepričani, da želite ponastaviti barvno mesto?";
var picOptions		= ["Prednastavljena slika",
						"Osvetlitev odzadaj","Svetlost","Kontrast","Nasičenost","Odtenek","Ostrina","Barvna temperatura","Način zaslona","Samodejna nastavitev formata",
						"Izboljšanje športa","3D","3D navigacija","ECO Nastavitve","Geometrija",
						"Napredne nastavitve","Uporabi način slike","Ponastavitev slike"];
var picSize			= ["Format 16:9", "oblika 4:3", "Formát 14:9", "Cinerama",
						"Zoom 16:9", "Zoom 16:9 zgoraj","Zoom 14:9","Raztegnjeni zoom","Široki zoom",
						"Zoom 2","Široki zoom 2","Izvorno uparjanje zaslona","Punct cu punct","Izvirnik","Panorama"];
var others			= ["Glasnost","Oddajanje","Geslo","Stanje","Shrani","Zamenjaj","Začni","Izhod","Iskanje","Briši",
						"Ni","Samodejno","Skeniraj","Varnost","Poveži","Osveži","Ponovi","Ustavi","Nastavitve","Kanali",
						"Urejanje","Vstavi","Signala!","Končaj","Stereo","Avdio","Vir","Ni avdia","Napotki","Ponastavi",
						"Stranka","Nastavitev","Shrani","Uporabnik","Zapri tipkovnico","Varnostni način","Vsak dan","Seznam PVR"];
var direction		= ["Levo","Desno","Gor","Dol"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Neznano"];
var soundChannels   = ["Neznano","Mono","Pomožni","Dvojni mono","Stereo","Stereo nizkotonec","Stereo Dolby prostorski zvok","2-kanalni prostorski","Prostorski","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dvojni mono Lfe","Stereo Lfe","Prostorski 2Ch Lfe","Prostorski Lfe","3.1Ch","4.1Ch","5,1-kanalni","7,1-kanalni","Združeni stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dvojni","Levo","Desno","Drugi"];
var prompts			= ["Upravte nastavenia obrazu, ktoré najlepšie vyhovuje vášmu prostredie pre sledovanie.",
						"Nastavite svetlost zaslona. Čim bližje 100, svetleje bo.",
						"Nastavite kontrast. Čim bližje 100, večja bo razlika med temnim in svetlim.",
						"Nastavite saturacijo zaslona. Čim bližje 100, močnejša bo barva.",
						"Nastavite ostrino zaslona. Čim bližje 100, bolj čista bo slika.",
						"Nastavite ozadje zaslona. Čim bližje 100, bolj svetla bo slika.",
						"Nastavite barvne oddtenke zaslona.",
						"Izberite format slike, ki najbolje ustreza programu, ki ga gledate.",
						"Nastavite možnosti varčevanja z energijo.",
						"Ponastavite nastavitve zaslona za povezavo preko PC-ja.",
						"Izberite več naprednih nastavitev slike.",
						"Ponastavite vse nastavitve slike na privzete.",
						"Izberite način zvoka, ki vam najbolj ustreza.",
						"Prilagodite ravnovesje glasnosti med levim in desnim kanalom.",
						"Sistem za pridobivanje zvoka TruSurround HD prinese v vaš dom lep in bogat zvok na nizkih in visokih frekvencah.",
						"Digital Interface Format vam je na voljo za priklop zvočne opreme za domači kino.",
						"Izberite jezik zvoka, ki vam najbolj ustreza.",
						"Omogočite Visually Impared funkcijo za uživanje v programih, ki so vam na voljo.",
						"Testirajte TV sliko, zvok in signal.",
						"Izberite tip seznama kanalov, ki ustreza vašemu TV signalu.",
						"Izberite jezik podnapisov, ki so predvajani na dnu zaslona.",
						"Ogled besedil in slik trenutnega programa.",
						"Digital Living Network Alliance(DLNA). Uživajte v glasbi, slikah, video posnetkih preko domačega omrežja iz naprav kot je vaš PC.",
						"Predvajajte vsebino vašega mobilnega telefona na TV-ju in ga uporabite kot daljinski upravljalnik.",
						"Predvajajte vsebine preko Miracast kompatibilne Android naprave na vašem TV zaslonu.",
						"Zaklenite vaš TV.",
						"Izberite ime vaše naprave.",
						"Izberite prostor predvajanja.",
						"Ponastavite vse sistemske nastavitve na privzete."];
var initialTitle	= ["Dobrodošli","Začetna nastavitev"];
var initialPrompt	= ["Naredite vašo prvo nastavitev TV-ja.",
						"Prosim, izberite jezik:",
						"Prosimo izberite vašo državo:",
						"Prosimo, izberite lokacijo:",
						"Prosimo izberite tip omrežne povezave:",
						"Prosimo izberite način omrežne povezave:",
						"Povezava do xxxxxxxxx ni uspela! Prosimo povežite napravo glede na sledeči diagram ali izberite Levo za ponastavitev.",
						"Povezan z  xxxxxxxxx! Prosimo izberite Desno za nadaljevanje.",
						"1) Vaš TV ima mogoče že vgrajen WiFi adapter\n 2)Ali če imate WiFi USB adapter, ga vključite v vaš TV. Nato izberite možonst povezave preko WiFi-ja.",
						"Iskanje. Prosimo počakajte ...",
						"Na TV ni priključena nobena brezžična naprava!",
						"Prosimo preverite ali je PIN koda nameščena na DT, preden kliknete na spodnjo \"Next\" tipko.",
						"Prosimo, pritisnite gumb na vstopni točki, prej kot v 120 sekundah, preden pritisnete tipko Desno!",
						"WPS (namestitev zaščitenega Wi-Fi)",
						"PIN(Osebna identifikacijska številka)",
						"PBC(Konfiguracija na pritisk tipke)",
						"Do naslednjih vsebin je mogoče dostopati samo s pomočjo omrežne povezave. Ali želite preskočiti nastavljanje omrežja?",
						"Na voljo je nova posodobitev. To lahko traja nekaj časa, odvisno od vaše internetne povezave.",
						"S posodobitvijo programske opreme TV-ja lahko uživate v najnovejših funkcijah in storitvah.",
						"Ali želite preskočiti najnovejšo nadgradnjo programske opreme?",
						"Pritisnite Desno tipko za nadaljevanje.",
						"Med posodobitvijo ne izklapljajte TV-ja, saj to lahko povzroči okvaro.",
						"Če ne želite zagnati posodobitve, prosimo izberite NE.",
						"Posodabljamo, prosimo počakajte",
						"Prav tako lahko posodobite programsko opremo v SISTEMSKI/PROGRAMSKI POSODOBITVI.",
						"Izbrana država zahtev geslo. Nastavite svoje geslo na TV-ju in ga potrdite.",
						"Geslo je prelahko. Prosimo uporabite drugo geslo.",
						"Čestitamo! Prva nastavitev je končana. Konfiguracijo lahko spreminjate preko glavnega menija in povezanih podmenijev.",
						"Prosimo izberite način varnosti:",
						"Prosimo izberite način brezžične omrežne povezave:",
						"Omrežje"];
var initNetCabAndDonRe = ["Omrežni kabel ni priključen, prosimo priključite omrežni kabel!","Ni vgrajenega brezžičnega adapterja ali USB adapter ni prisoten."];
var initChPrompt = ["Namestitev TV kanalov","Prosimo izberite tip iskanja s pomočjo antene.","Obdelava samodejnega iskanja...","Naslednji antenski kanali so bili najdeni:","Prosimo izberite iskanje kabelskih kanalov.","Prosimo izberite enega operaterja s seznama.","Prosimo nastavite informacije iskanja","Najdeni so bili naslednji kabelski kanali:","Prosimo izberite enega operaterja iz naslednjega seznama","Prosimo izberite satelite za iskanje ali uredite izbrane satelite","Prosimo nastavite parametre satelita","Najdeni so bili naslednji kanali, ponovno iskanje kanalov lahko sprožite pod Kanal/Iskanje kanalov"];
var initClockPrompt = ["Pridobite čas s pomočjo omrežja!",
						"Prosimo nastavite datum in čas:"];
var initialOptions	= ["Prostor","Namestitev omrežja","Posodobitev programske opreme","Namestitev kanala","Ura"];
var initialHotkeys	= ["Nazaj","Izberi","Naslednje"];
var initLocations	= ["Domov","Trgovina","Obchod a demo"];
var initNets		= ["Ožičeno","Brezžično","Nimam omrežne povezave"];
var initWireManuals	= ["IP naslov","Maska podomrežja","Privzeti prehod","Primarni DNS","Sekundarni DNS"];
var initSoftUpdates = ["Posodobi zdaj","Posodobi kasneje"];
var initChannelIns	= ["Nadaljuj","Ne želim namestiti kanalov"];
var initChScanTypes	= ["Digitalno & Analogno","Digitalno","Analogno","Ne želim iskanja"];
var initChDvbts		= ["Antenski ATV kanali:","Antenski DTV kanali:"];
var initChDvbcs		= ["Kabelski ATV kanali:","Kabelski DTV kanali:"];
var initChDvbss		= ["Satelitski kanali:"];
var initChDvbSOther	= ["Ne želim iskanja satelitov"];
var initEndConnectedStatus= ["Prekinjen","Brezžično omrežje je povezano","Kabelska povezava"];
var initEndInstallations= "XXXX nameščenih kanalov";
var initEndUpdate	= ["Posodobljeno"];

var audioScenes 	= ["Na mizi","Na zidu"];			
var screenSavers	= ["Brez programskih informacij, prosimo, najprej poiščite kanale!",
						"Ni signala!",
						"Kodirano",
						"Samo podatki",
						"Avdio program",
						"Ni zvoka in slike",
						"Ni na voljo",
						"Ni teleteksta",
						"Ni podatkov o programu.",
						"Program je zaklenjen!",
						"Program je zaklenjen!\nPritisnite OK in vnesite kodo.",
						"Žiadne informácie o programe.",
						"Program je škodljiv za mladoletne.\nPritisnite OK in vnesite vašo kodo.",
						"Kanal je zaklenjen!",
						"Kanal je zaklenjen!\nPritisnite OK in vnesite kodo.",
						"Vnos je zaklenjen!\n Pritisnite OK in vnesite kodo.",
						"Ni podprto!",
						"Storitev trenutno ni na voljo",
						"Vnos zaklenjen!",
						"Ni naslova programa.",
						"Ni funkcije"
						];
var chBookingPromt	= ["Trenutni kanal ima nastavljeno snemanje, TV bo začnel snemati.",
						"Snemanje je najdeno.\n Preklopite na XXXX za snemanje",
						"Trenutni kanal ima opomnik.",
						"Opomnik je najden.\n Preklopite na XXXX"];
var timeUnit		= ["Sek","min"];
var ciPromt			= ["Omrežni podatki so se spremenili. Za nadgradnjo lahko izvedete pregled nadgradenj.",];
var othersPromt		= ["Prosim počakajte …",];
var menuOptions		= ["Slika","Zvok","Kanala","Omrežje","Sistem"];
var optionOptions	= ["Prednastavljena slika","Prednastavitev zvoka","Zamrzni","T-Link","timeshit","PVR","Seznam urnikov.","Nastavitve"];
var optionTLinkPromt= [["Samodejni vklop","Samodejno mirovanje","Meni vodiča"],
						["Vklop","Mirovanje","Pojačala za volumen"]];
var powerPromt		= ["TV se bo kmalu ugasnil! Prosimo pritisnite poljubno tipko za preklic."];
var ttxLanguage		= ["ZAHODNA EVROPA","VZHODNA EVROPA","Ruščina","Arabščina/hebrejščina","Perzijščina","Arabščina","Vitryska","Grščina","Turščina"];
var ttxOptions		= ["Razkrij","Listaj po podstraneh","Jezik","Alarmna stran","Zadnja novica"];
var weekday         = ["Nedelja","Ponedeljek","Torek","Sreda","četrtek","Petek","Sobota"];
var lcnConfflict	= "Motnje pri sprejemu tega programa. Na kanalu %d je na voljo še ena različica.";
var inShopMode		= "Vaš TV je v načinu za nakupe. Za domači način izberite \"Sistem\" in spremenite postavko \"Lokacija\" v meniju.";
var nitRefresh		= "Podatki o omrežju so se spremenili. Želite zagnati posodobljeno skeniranje?";
var picHDMIMode     = ["Samodejno","Grafični","Video"];

var glassRemind    	= ["Prosimo, uparite vaša 3D očala s TV-jem\n(Pritisnite in držite gumb za prižig na 3D očalih).","Vaša 3D očala so povezana s TV-jem",""];
var pvrRemind 		= ["Ne izklapljajte USB naprave ali prekinjajte napetosti"];
var pvrConName   	= ["PVR","Informacije o programu:",["Če boste snemali HD kanal, prosim izberite disk z hitrostjo višjo od 5.0MB/s, za snemanje SD kanala pa izberite disk s hitrostjo višjo od 3MB/s.","Posnet video je shranjen v mapo \"pvr\". "],"Ustavi","Snemanje","ura","Minuta","Trajanje","Napotki","Nastavite dolžino snemanja s pomočjo smernih tipk."];
var pvrDisRemind 	= "Prosimo vstavite USB ključ za snemanje.";
var pvrRemindWords  = ["Ali želite končati?",
							"Ali želite ustaviti snemanje in brskati med posnetimi datotekami?",
							"Disk je odstranjen.",
							"Ni dovolj prostora.  ",
							"Ni posnetkov. Začnite s snemanjem.",
							"PVR ne deluje v Kodiranih Kanalih.",
							"Funkcija ni na voljo",
							"Uspešno shranjeno.",
							"Ali želite ustaviti snemanje in spremeniti vhodni vir?",
							"TV bo končal trenutno snemanje. Ali želite končati?",
							"PVR snemanje potrebuje TV signal za pravilno delovanje, prosimo preverite signal."];
var pvrChangeCh 	= ["Ali želite zamenjati kanal?",
							"Ali želite ustaviti snemanje in spremeniti kanal?"];
var pvrChangeToPIN8	= ["Ali želite zamenjati vir na napravo, ki je priključena na vhod SCART?",
				    		"Ali želite, da se ustavi postopek zapisa in spremenite vir naprave, priključene na vhod SCART? "];
var pvrChangeToCEC  = ["Ali želite spremeniti vir naprave, priključene na HDMI vhod? ",
				  			 "Ali želite, da se ustavi postopek zapisa in spremenite vir naprave, priključene na HDMI vhod? "];
var pvrGuideJump    = ["Ali želite vnesti EPG? ",
							"Ali želite ustaviti snemanje in vstopiti v EPG?"];
var pvrMediaJump    = ["Želite vstopiti v medij? ",
							"Ali želite ustaviti snemanje in vstopiti v Media?"];
var timeshiftExtra	= ["Ali želite ustaviti timeshift in spremeniti TV zamenjaj kanal?",
						"Ali želite, ustaviti časovni razmik in spremeniti vir na napravo, priključeno na vhod SCART? ",
						"Ali želite, ustaviti časovni razmik in spremeniti vir na napravo, priključeno na vhod HDMI? ",
						"Časovni zamik ne deluje v Kodiranih Kanalih.",
						"Ali želite, da se ustavi časovnega razmika in vpišite EPG? ",
						"Ali želite ustaviti timeshift in spremeniti TV v način USB?",
						"Ali želite ustaviti timeshift in spremenit zamenjaj vir?",
						"Prosimo vstavite USB ključ za snemanje.",
						"Velikost diska ni zadostna.",
						"TV bo končal trenutni časovni zamik. Ali želite končati? "];
var timeshiftStatus	= ["Hitro vrtenje nazaj","Ustavi","Predvajaj","Premor","Hitro vrtenje naprej"];
var pvrPowerOffRemind= ["Pripravljenost snemanja","Mirovanje","TV snema zdaj, želite shraniti posnetek, ko je TV v stanju pripravljenosti? "];
var timeshiftInitTitle= "Nastavitev diska";
var timeshiftInitReminds= ["S tem čarovnikom nastavite USB disk za funkcijo timeshift. Prosimo izberite način nastavitev.",
						 "Za boljše delovanje vam priporočamo, da formatirate USB disk. Izbrisali boste vse podatke.",
						 "Prosimo izberite velikost datoteke za timeshift.",
						 "Formatiranje",
						 "Ni dovolj prostora.  ",
						 "Izdelava timeshift datoteke",
						 "Preizkus hitrosti",
						 "Disk je prepročasen (< %f MB/sec), da bi omogočili funkcijo timeshift!",
						 "Disk je pripravljen za timeshift. Pripročamo vam, da zamenjate  disk  (hitrosti > %f MB/sec) za boljše delovanje.",
						 "Disk je pripravljen za timeshift. "];
var timeshiftInitButtons= ["Formatiranje","Preskoči","Prekliči","V redu","Končaj","Izhod"];
var timeshiftInitOther=["Hitr. diska:","MB/s"];

var selectChoice	= "Ste prepričani?";
var chAtvStore		= "Shrani kot XXXX ";
var chEpgFirstGenreUK= ["Film","Novice in dejstva","ZABAVA","Šport","Za otroke","Izobraževalno","Način življenja","Drama"];
var homePageTitleList = ["APLIKACIJE","TV","VIDEI","Domača stran"];
var homePageFavAndAllName  = ["Priljubljene aplikacije","Vse aplikacije"];
var homePageBackUp = ["E-priročnik","GuideOn "];
var homePageRemind   = ["Polne funkcije so na voljo le po vzpostavitvi omrežne povezave.","Vaš TV nima še nobenih kanalov. Programi so na voljo po končanem iskanju kanalov.. ","Ni programa","Poiščem kanale zdaj?"];
var homePageHistory = ["zgodovina "];
var miracastTitle = ["WiFi TV povezava","TCL naprava"];
var miracastRemind=["WiFi TV vam omogoča brezžično (tj. brez kablov) deljenje zaslona in zvoka iz vaše naprave, kot je naprimer pametni telefon ali tablični računalnik na vaš TV. S tem lahko na vašem TV-ju gledate isto sliko, ki je prikazana na vašem pametnem telefonu ali tabličnem računalniku. Na primer, na pametnem telefonu lahko predvajate video posnetek in ga hkrati prikažete na TV-ju, ali pa uporabite vaš tablični računalnik kot kontrole za igre z vsebino, ki je prikazana na velikem zaslonu vašega TV-ja.","WiFi TV povezava na TV je pripravljena. Prosimo zaženite in delite zaslon vaše naprave na TV.","Povezujem. Počakajte prosim!","Pripojenie zlyhalo!","Pripojenie zlyhalo. Skontrolujte, prosím!"];
var homePageLittleWin = ["Nastavitve","Medij","Priljubljeni programi","Smart TV","EPG"];

var hbbtvStopRemind  = ["Chcete prerušiť prehrávanie?"];
var colorSystem = ["Samodejno","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Za več informacij pritisnite MOŽNOSTI";
var emptyListInfo = "Na TV ni priključene naprave !";
var optionVideoListArray_1 = ["Prednastavljena slika", "Prednastavitev zvoka", "Način predvajanja", "Način zaslona", "3D način", 
							  "L-D stikalo", "Globina polja", "Podnapisi", "Filmska glasba", "Naslov", "Poglavje", "Info"];
var optionVideoListArray_2 = ["Prednastavljena slika", "Prednastavitev zvoka", "Način predvajanja", "Način zaslona", 
							  "Podnapisi", "Filmska glasba", "Naslov", "Poglavje", "Info"];
var bottomTipsText = ["Predvajaj/premor", "Hitro vrtenje nazaj", "Hitro vrtenje naprej", "Seznam predvajanja", "Nastavitve"];
var picturePresetArray = ["Standardna", "Dinamično", "Naraven", "Film", "Osebno"];
var videoPlayModeArray = ["Ponovi vse", "Ponovi eno ", "Normalno"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Široki zoom", "Zoom 2", "Široki zoom 2", "Raztegnjeni zoom", "Samodejno"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Zoom 16:9 zgoraj", "Samodejno"];
var Mode3DArray = ["Izklop", "2D-na-3D", "En ob drugem", "Zgoraj in spodaj", "Prepletanje vrstic"];
var videoOptionListArray = ["Izklop", "Posnetek", "Podnapisi", "Naslov", "Poglavje"];
var subMenuTitleText = "Podnapisi";
var langMenuTitleText = "Jezik avdia";
var titleMenuTitleText = "Naslov";
var mode3DMenuTitleText = "3D način";
var langInfoText = "Posnetek";
var STOP_RESUME_INFO = "Ustavi-Nadaljuj";
var playListName = "Ime omrežja:";
var eb_tips = "Napotki";
var ok_button = "V redu";
var eb_info = ["Napaka pri dekodiranju zvoka.", "Napaka pri dekodiranju videa.", "Audio format ni podprt. ", 
			   "Oblika videozapisa ni podprta.", "Te datoteke ni mogoče odpreti.", "Napaka pri predvajanju za nazaj, poskusite znova.",
			   "Format datoteke ni podprt.", "Oops! Predvajalnik je prenehal delovati.",
			   "Pot datoteke ne obstaja ali pa je neveljavna. Ponovno vstavite vašo pomnilniško napravo in poskusite znova.",
			   "Želite nadaljevati s predvajanjem?"];
var frameTitleText = "Nova naprava";
var eb_quit_info = "Ali ste prepričani, da želite končati? ";
var eb_yes = "DA";
var eb_no = "NE";
var offinfo = "Izklop";
var naInfo = "Nič";
var consoleInfoArray = ["Hitro vrtenje nazaj", "Hitro vrtenje naprej", "Predvajaj/premor", "Seznam predvajanja"];
var cantOperateText = ["Funkcija ni podprta. "];
var chapterChangeInfo = "Samo poglavja od 1 do XXXX so na voljo. ";
var metaDataArray = ["Naslov / urejanje metapodatkov: ", "Metapodatki poglavja:", "Metapodatki zvoka:", "Metapodatki podnapisa:"];
var metaTitleInfo = "Naslov";
var metaChapterInfo = "Poglavje";
var videoLoadingInfo = "Analiziranje ... ";
var listLoadingInfo = "Nalaganje ... ";
var pgInfo = "Pravna ocena:";
var fileNameText = "Ime omrežja:";
var fileDateText = "Datum";
var fileSizeText = "Velikost";
var fileDurationText = "Trajanje";
var fileDirectorText = "Režiser";
var fileCopyrightText = "Avtorske pravice";
var fileArtistText = "Izvajalec";
var fileAlbumText = "Album";
var fileGenreText = "Zvrst";
var fileYearText = "Leto";
var fileGenreText = "Zvrst";
var mainListArray = ["Vse", "Slika", "Video", "Glasba"];
var sortArray = ["Ime omrežja:", "Datum"];
var parserArray = ["Normalno", "Rekurzivno"];
var emptyTipsInfo = "Podprte datoteke ni mogoče najti.";
var emptyFolderInfo = "Podprte datoteke ni mogoče najti.";
var sortName = "Razvrsti po ";
var parserName = "Parser";
var divx_str1 = "DivX(R) registracija";
var divx_str2 = "DivX(R) odjava";
var infor_str = "Info";
var quickMenuEmptyText = "Možnosti niso na voljo.";

var musicSoundPresetArray = ["Standardna", "Film", "Glasba", "Jasen glas", "Osebno"];
var musicInformationArray = ["Ime omrežja:", "Izvajalec", "Album", "Zvrst:", "Leto:", "Čas trajanja:"];
var playListName = "Ime omrežja:";
var playTipsInfo = ["Trenutno predvajate prvo datoteko.", "Trenutno predvajate zadnjo datoteko."]
var musicNameInfo = "Name";
var musicArtistInfo = "Izvajalec";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Prednastavitev zvoka";
var optionBGMInfo = "Predvajaj v ozadju ";
var optionAudioOnlyInfo = "Samo avdio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX je priključen na TV! ";
var tvRemoteTitle		= "TCL nScreen.";
var tvRemoteDeveloper	= "Program je razvilo podjetje TCL";
var tvRemoteDeviceTitle	= "Ime naprave:";
var remoteOption		= ["Deljenje medijev","Daljinski nadzor","Pomoč","O programu","Pametna povezava"];
var remotebottom		= "Prosimo da prenesete aplikacijo TCL nScreen na vaš pametni telefon.";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Deljenje fotografij, videoposnetkov in glasbe s TV preko telefona. ",
							"Koraki: \n 1. Kliknite \"aplikacija TCL nScreen\" na telefonu. Povežite telefon s TV-jem preko istega omrežja WiFi; \n 2. Kliknite \"Oddaljen nadzor\" za nadzor TV-ja. ",
							"      a) Povlecite in spustite mapo/datoteko na TV ikono na vrhu zaslona;\n      b) Zamahnite s telefonom proti TV-ju za zagon prve datoteke;\n      c) Predvajajte medij na telefonu in klinite ikono za deljenje na TV;",
							" 4. Med predvajanjem na TV-ju, telefon stresite za predvajanje prejšnje ali naslednje datoteke."];
var controlReminds		= ["Uporabite telefon kot daljinski upravljalnik za TV.",
							" ",
							"Koraki: \n 1. Kliknite \"aplikacija TCL nScreen\" na telefonu. Povežite telefon s TV-jem preko istega omrežja WiFi; \n 2. Kliknite \"Oddaljen nadzor\" za nadzor TV-ja. "];
var helpDeviceWords		= "Interakcija na več zaslonih";
var helpBottom			= " V času tehnologije oblaka so pametne naprave kot sta telefon in TV povezane. Z vašo družino lahko uživate v medijih na več zaslonih in nadzorujete vaš TV preko telefona! ";
var helpReminds			= ["Priprava:\ 1. Prenesite in namestite aplikacijo TCL nScreen preko Google Trgovine oz. Apple Trgovine.\n 2. Povežite telefon s TV-jem preko istega WiFi omrežja.",
							" ",
							"Priporočila za telefon\n   1. CPE: nad 800MHz\n   2. Pomnilnik: najmanj 80MB prostora",
							" ",
							"Če aplikacija TCL nScreen na vašem telefonu ni na voljo, prosim kontaktirajte proizvajalca vašega mobilnega telefona."];
var helpButtons			= ["Prejšnje","Naslednje"];
var aboutReminds		= ["TCL nScreen.","Program je razvilo podjetje TCL"];
var aboutExit			= "Izhod";
var smartReminds		= ["Hitra in pametna povezava med TV in telefonom.",
							" ",
							"Koraki \n 1. Povežite televizor in pametni telefon v istem lokalnem omrežju. Kliknite \"TV daljinec\" na pametnem telefonu. \n 2. Kliknite \"Smart Connect\" za skeniranje QR kode. \n 3. S TV-jem načinu oddajanja, pritisnite tipko INFO na daljinskem upravljalniku televizorja za 4 sekunde, dokler se ne prikaže celozaslonska QR koda.",];
var smartQRReminds		= ["Prosimo kliknite Smart Connect v aplikaciji TCL nScreen na vašem telefonu za skeniranje QR kode za hitro povezavo med telefonom inTV-jem.",
							"QR koda vsebuje informacije o računu lokalnega omrežja. Prosimo, da ga shranite."];
							

var consoleTipArray = ["Prejšnje","Naslednje","konzola ","Seznam predvajanja"];							
var optionInfoArray = ["Prednastavljena slika","Način predvajanja","Trajanje","Učinek","Info"];

var playModeArray = ["Normalno","Naključni izbor","Ponovi"];
var durationArray = ["Kratki (5s) ", "Srednji (10s) ", "Dolg (15s) "];
var effectArray = ["Ni", "Pojemanje", "Brisanje desno", "Brisanje levo", "Brisanje gor", "Brisanje gor", "Okvir navznoter", "Okvir navzven", "Naključno"];
var infoArray = ["Ime:","Velikost:","Datum:","Lokacija"];

var picturePresetBarTitleInfo = "Prednastavljena slika";
var picturePresetBarArray = ["Standardna","Dinamično","Studio","Film","Osebno"];
var upTipsInfo = "Premik slike"; //add yums 2014-10-10
var consoleTipsArray = ["konzola ","Prejšnje","Naslednje","Seznam predvajanja","Nastavitve"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Ponovno pritisnite RIGHT za predvajanje naslednje slike","Ponovno pritisnite LEFT za predvajanje prejšnje slike","Ponovno pritisnite DOWN za prikaz seznama predvajanja"]; //add yums 2014-10-10

var optionPvrListArray = ["Prednastavljena slika","Prednastavitev zvoka", "Način zaslona", "3D način", "Podnapisi", "Filmska glasba", "Info"];							
	
var titleSpanFirstArray = ["Nadzor & povezava","Osnovne funkcije","APLIKACIJE","TV","Nastavitve","Pogosta vprašanja "];
var titleSpanSecondArray = [["Daljinski nadzor","Tipke plošče","Jednoduchá navigácia","TV povezava","TV povezava","TV povezava","Brezžično"],["Zaganjalnik","Statusna vrstica","Vir"],["Predvajanje aplikacij","Medij","TCL nScreen."],["Prilagodite kanal in glasnost","Seznam kanalov","EPG","Namestitev kanala","Najljubši kanali "],["Prilagoditev slike ","Prilagoditev zvoka","Prilagoditev kanala","Posodobitev programske opreme","Jezik","Starševski zaklep "],["Pogosta vprašanja ","Pogosta vprašanja ","Odpravljanje težav ","Odpravljanje težav ","Obchodné podmienky"]];
var contentSpan1_1Array = [["SEZNAM: ","INFORMACIJE: ","MENI: ","NAPAJANJE: ","VIR: ","VODIČ:","SMART TV: "],["Prikazuje seznam kanalov","Prikazuje informacije o programu ","Gre na domačo stran ","Vklopi napajanje ali preide v stanje pripravljenost","Izberite vhodni vir ","Prikaz EPG(Elektronski programski vodič) informacij","Preklop na aplikacijo Smart TV"]];
var contentSpan1_2Array = ["Prejšnji kanal","Naslednji kanal","Povišanje glasnosti","Zmanjšanje glasnosti","Gre na domačo stran ","Potrdite možnost ","Pripravljenosti / vklop "];
var contentSpan1_3Array = ["OK/Vodič","Kanal višje","Kanal nižje","Znižati glasnost","Zvišati glasnost","Na voljo kot smerne tipke v nekaterih funkcijah."];
var contentSpan1_4Array = ["LAN ","HDMI (MHL) ","HDMI ","HDMI (ARC) ","AV OUT adapter ","LAN (Lokalno omrežje)","Pametni telefon","Osebni računanik /Sprejemnik/DVD","Audio ojačevalnik ","Audio ojačevalnik / Monitor ","Vaš TV morda nima vseh potrebnih vtičnic."];
var contentSpan1_5Array = ["USB 2.0 ","USB 3.0 ","Slušalke","AV IN adapter ","SPDIF ","CMP AUDIO IN adapter ","CMP IN (YPbPr) adapter ","USB naprave ","USB naprave ","Slušalke","DVC / Igralna konzole / Sprejemnik / DVD ","Audio ojačevalnik ","DVC / Igralna konzole / Sprejemnik / DVD ","Vaš TV morda nima vseh potrebnih vtičnic."];
var contentSpan1_6Array = ["Skupni vmesnik","SD ","VGA","SCART","mini SCART","VHOD ZA ANTENO","PCMCIA kartica ","SD kartica","Osebni računalnik","Sprejemnik / DVD ","Antena /Kabelski način/Satelitski način","Vaš TV morda nima vseh potrebnih vtičnic."];
var contentSpan1_7Array = ["Tablet","Osebni računalnik","Usmerjevalnik","Telefon","TV"];
var contentSpan2Array = [["Pritisnite smerne tipke za pregled domače strani.","Nato pritisnite OK za ogled enega izmed predstavljenih programov ali za vhod v aplikacijo."],["Prikaži datum, omrežja in naprav itd. v zgornjem desnem kotu zaslona. "],["Izberite vhodni vir med napravami, priključenimi na TV prek različnih vrat, kot so TV, AV, HDMI itd. "]];

var contentSpan3Array = ["Uživajte in glejte vaše priljubljene aplikacije preko strani pametne TV","Poglejte slike, video ali pa predvajajte glasbo preko USB ključa.","Povežite svoj televizor in pametni telefon ali tablični računalnik v istem omrežju","Kliknite na TCL nScreen na pametnem telefonu ali tablici","Z družino delite fotografije, video posnetke in glasbo na več zaslonih in nadzorujte vaš TV z vašim pametnim telefonom"];

var contentSpan4Array = [["Pritisnite UP / DOWN za preklop kanalov ","Pritisnite LEFT/RIGHT za prilagoditev glasnosti "],["Pre zobrazenie kanálov stlačte tlačidlo LIST na diaľkovom ovládaní","Pritisnite UP / DOWN za izbor kanala"],["EPG je vodnik na zaslonu, ki prikazuje TV-programe. Programe lahko pomikate, izbrate, pogledate in snemate. "],["Iskanje in namestitev kanalov "],["Dodajte ali urejajte vaše priljubljene kanale na seznamu kanalov "]];

var contentSpan5Array = ["Uživajte v vaših priljubljenih programov prek video aplikacij "];

var contentSpan6Array = [["Pritisnite MENU za prikaz možnosti nastavitev sistema ","Vhod v nastavitve slike za prilagoditev vrednosti "],["Pritisnite MENU za prikaz možnosti nastavitev sistema ","Vnesite Nastavitve zvoka, da nastavite možnosti "],["Pritisnite MENU za prikaz možnosti nastavitev sistema ","Vhod v nastavitve kanalov za nastavitev možnosti"],["Posodobite televizijo, ko je na voljo nova različica programske opreme "],["Lahko izberete želeni jezik menija "],["Omogoča staršem, da zaklenete kanale ali programe, ki so neprimerni za otroke "]];

var contentSpan7_1Array = [["Ni slike, ni zvoka ","Preverite, če je varovalka ali odklopnik deluje. ","Priklopite dodatno električno napravo v električno vtičnico se prepričajte, da deluje ali je vklopljen. ","Omrežni vtič je v slabem stiku z vtičnico ","Preverite vir signala. "],["Normalna slika, ni zvoka ","Pritisnite gumb za glasnost navzgor, da povečate glasnost. ","Nastavitev zvoka je napačna. ","Signal napake iz oddaje. "],["Normalen zvok, ni slike ","Prilagodite svetlost in kontrast ","Signal napake iz oddaje. ","Preverite, če je v načinu samo avdio. "]];
var contentSpan7_2Array = [["Radijske frekvence motenj ","Ta poseg proizvaja gibljive valove ali diagonalne črte, v nekaterih primerih, izgubo kontrasta v sliki. Poiščite in odstranite vir radijskih motenj. "],["Brez barve ","Prilagodite nastavitve barve. ","Poskusite drug kanal. Črno-beli program je morda dosegljiv."],["Daljinski upravljalnik ne deluje ","Zamenjajte baterije. ","Baterije niso nameščeni pravilno.TV morda ni priključen na električno omrežje."]];
var contentSpan7_3Array = [["Vsebina naprave USB se ne prikaže ","Preverite, ali je naprava za shranjevanje USB združljiva s TV-jem. ","Preverite, da so zvočne in slikovne datoteke podprte na TV-ju."],["Predvajanje brez zvoka","Audio format videa ni podprt s strani TV predvajalnika. "],["Datoteke se ne predvajajo gladko ","Zmogljivost prenosa iz naprave za shranjevanje USB, morda omejuje hitrost prenosa podatkov v TV."]];
var contentSpan7_4Array = [["Na kaj je treba paziti pri posodobitvi programske opreme ","Brez električnih prekinitev med posodobitvijo programske opreme.","Izogibajte se vseh operacij z vašim daljinskim upravljalnikom pri posodabljanju programske opreme. ","Bodite potrpežljivi, saj lahko postopek posodabljanja programske opreme traja malo dlje. "],["Po posodobitvi programske opreme ne bo prišlo do bistvenih sprememb TV vmesnika.","Pod določenimi pogoji lahko posodabljanje programske opreme pomeni ne le dodajanje novih funkcij, ampak tudi izboljša delovanje TV-ja brez bistvenih sprememb vmesnika. Prav tako lahko TV vmesnik ostane včasih nespremenjen. "]];
var termsTitle = "Določila in pogoji";
var termsConditions = ["Za vsebine in storitve (s skupnim imenom \"Licenčne aplikacije \") ki so vam na voljo prek tega televizorja (ta \"Naprava \") imate dovoljenje, niso pa vam prodane, v uporabo so vam dane le pod temi pogoji. Ponudniki licenčne uporabe (vsak \"Ponudnik Aplikacij \") si pridržuje vse pravice.\ N 1. Licence Aplikacij \ n dovoljenje za vas za licenčno uporabo s strani ustreznega ponudnika aplikacij je omejena na neprenosljivo licenco za uporabo licenčnih aplikacij na napravi, katere lastnik ste. Ne smete jih distribuirati ali jih prenašati na druge naprave. Ne smete jih dajati v najem, zakup, jih posojati ali prodati, redistribuirati ali podeljevati licence licenčnim aplikacijam. \ N Potrjujete in se strinjate, da se vse licenčne aplikacije, ter vse vsebine v njem, ki so na voljo v tej napravi, in so last ponudnika aplikacij in so zaščitene z veljavnimi zakoni o intelektualni lastnini. Ne smete spreminjati, kopirati, prevajati, razstaviti, objavljati, nalagati, prenašati, poskus pridobivanja izvorne kode ali kako drugače izkoriščati licenčnih aplikacij, njihovih posodobitev ali katerikoli njegovega dela . Če prekršite to omejitev, ste lahko pravno odgovorni za nastalo škodo.  Pogoji licence bodo veljali za vse nadgradnje, ki jih ponudi ponudnik aplikacij, ki nadomeščajo in / ali dopolnijo prvotno licenčno aplikacijo, razen če je takšna nadgradnja spremlja ločeno dovoljenje v tem primeru bodo pogoji te licence urejeni. Ti bodo edini odgovorni vse stroške (če obstajajo) za nadgradnjo licenčne aplikacije. \ N 2. Tretje osebni materiali \ n licencirane aplikacije lahko omogoči dostop do ponudnika. Uporaba tretjih oseb storitev in spletnih strani. Razumete, da z uporabo katere koli od storitev, lahko naletite na vsebine, ki utegnejo biti žaljiva, nedostojna, ali sporna, katere vsebine lahko ali pa ni mogoče prepoznati, in da so rezultati vseh iskanj ali vnosa posebnih URL-jev  lahko avtomatično in nenamerno ustvarijo povezave do neprimernih vsebin. Proizvajalec te naprave (v \"Proizvajalec \") in ponudnik ne nosi nobene odgovornosti za vsebine, ki jo je mogoče najti, da je žaljiva, nedostojna, ali sporna. \ N Če uporabite storitev priznavate in se strinjate, da je proizvajalec ni odgovoren za pregledovanje ali ocenjevanje vsebine, natančnost, popolnost, pravočasnost, veljavnost, spoštovanje avtorskih pravic, zakonitost, kakovost ali kateri koli drug vidik teh storitev. Proizvajalec ne jamči za vsebino in ne prevzema in ne bo imel nobene obveznosti ali odgovornosti do vas ali katere koli druge osebe, za katero od storitev. \ N Potrjujete in se strinjate, da lahko storitve vsebujejo lastniške vsebine, informacije in gradiva (skupaj \"tretje osebnih materialov \"), ki so zaščitene kot veljavna  intelektualna lastnina in drugimi zakoni, ter da ga ne boste uporabljali takšna gradiva tretjih oseb na kakršen koli način, razen za dovoljeno uporabo storitev. Strinjate se, da ne smete reproducirati, spreminjati, dajati v najem, zakup, posojati, prodati, distribuirati gradiva tretjih oseb ali ustvarjati del njih na kakršen koli način, in ne sme izkoriščati storitev na kakršen koli način ali izvajati nepooblaščeno distribucijo le teh. Poleg tega se strinjate, da ne boste uporabljali storitev na kakršen koli način za nadlegovanje, zlorabo, zalezovanje, grožnje, obrekovanje ali kako drugače kršili človekove pravice katere koli druge stranke, in da izdelovalec ni na noben način odgovoren za kakršno koli takšno uporabo,  niti za nadlegovanje, grožnje, obrekovanje, žalitve ali nezakonita sporočila ali prenose, ki jih lahko prejmejo kot posledica uporabe katere koli od storitev. \ N 3. Ni garanciji \ n V potrjujete in se strinjate, da je uporaba vseh licenčnih aplikacije in storitev je na lastno odgovornost. Vse Licenčne aplikacije in storitve so na voljo \", kot je \" in \", kot je na voljo \" brez kakršnega koli jamstva, bodisi izrecno ali implicitno. Proizvajalec izrecno zavrača vsa jamstva in pogoje v zvezi z licenčno aplikacije in storitve, izrecnih ali implicitnih, vključno vendar ne omejeno na, garancijo prodaje, zadovoljive kakovosti, o primernosti za določen namen, točnosti, za mirno uživanje in prepovedi kršitve pravic tretjih oseb. Proizvajalec ne jamči točnost, veljavnost, pravočasnost, zakonitost ali popolnost katere koli licenčne aplikacije ali storitve, ki so na voljo prek te naprave, in ne jamči, da bodo licenčne aplikacije ali storitve ustrezale vašim zahtevam, ali da je delovanje licenčne aplikacije ali storitve neprekinjeno ali brez napak, ali da bodo napake v licenčni aplikacije ali storitvi popravljene. Če se za licenčno aplikacijo ali storitev izkaže, da je pokvarjena, boste prevzeli vse stroške vseh potrebnih servisov, popravilo ali popravka. \ N Strinjate se, da se licenčne aplikacije in storitve lahko spremenijo, odstrani, prenehajo ali prekinejo, ali dostop lahko kadar koli onemogočite, brez predhodnega obvestila. Izdelovalec nikakor ne jamči, da bo katera koli vsebina ali storitev, vključenih v licenčno aplikacijo in, da bo storitev ostala na voljo za katero koli časovno obdobje. Takšne vsebine in storitve, se prenašajo s strani tretjih oseb prek omrežij in infrastrukture za prenašanje, na katere proizvajalec nima nadzora. Brez omejevanja splošnosti navedenega je proizvajalec izrecno zavrača kakršno koli odgovornosti za kakršne koli spremembe, prekinitve, onemogočanje, odstranjevanje ali začasno ustavitev katere koli vsebine ali storitve, ki so na voljo prek te naprave. Ponudnik aplikacij in drugi ponudniki storitev, ki si pridržuje pravico, da spremeni, začasno, odstrani ali onemogoči dostop do vseh licenčnih aplikacij ali storitev kadar koli brez predhodnega obvestila. Proizvajalec lahko uvede tudi omejitve glede uporabe ali dostopa do določene licenčne aplikacije ali storitve, v vsakem primeru in brez obvestila ali odgovornosti. \ NE Proizvajalec ni niti pristojen niti odgovoren za podporo strankam v zvezi z licenčnimi aplikacijami in storitvami. Kakršna koli vprašanja ali zahteve za podporo v zvezi z licenčno aplikacijo in storitev je treba vložiti neposredno pri posameznem ponudniku. \ N 4. Izbor in uporaba informacij \ n  Strinjate se, da lahko proizvajalec, ponudnik aplikacij in ponudniki storitev, ki zbirajo in uporabijo tehnične podatke in s tem povezane informacije, vključno vendar ne omejeno na tehnične informacije o tej napravi, sistemske in aplikativne programske opreme in perifernih naprav, za lažje opravljanje posodobitev programske opreme, podporo izdelka in druge storitve za vas (če obstaja), povezane z napravo in licenčnimi aplikacijami. Proizvajalec lahko ponudniki aplikacij in ponudniki storitev, ki uporabljajo te informacije, tako dolgo, kot je to potrebno,  da izboljšajo svoje izdelke ali opravljanja storitev ali tehnologije za vas. \ N 5. Nekatere značilnosti niso na voljo \ n Z omejitvam ponudniku aplikacij, nekatere funkcije, aplikacije in storitve morda ne bodo na voljo v tej napravi (vključno z njenimi perifernimi napravami) v vseh območjih. Nekatere funkcije na tej napravi lahko zahtevajo tudi dodatne periferne naprave ali članarine, ki se prodajajo ločeno. \ N 6. Omejitev od obveznosti, \ n Po veljavni zakonodaji proizvajalec pod nobenim pogojem ni odgovoren za nastalo škodo, vključno z malomarnostjo, odškodninske odgovornosti za kakršno koli neposredno, posredno, naključno, posebno ali posledično škodo, odvetniške pristojbine, stroški, ali katere koli druge poškodbe, ki izhajajo iz ali so v zvezi z vseh podatkov iz poslovnih ali kot posledica uporabe naprave."];

var noChannelListRemind        = ["Ni najdenih kanalov. Seznam kanalov bo na voljo po končanem iskanju kanalov.","Skeniranje kanalov"];
var closeSubtitleRemind   = "Funkcija bo na voljo, ko bodo podnapisi izklopljeni. Ali želite to nastaviti sedaj? ";

var estickerTitles = ["Visoko realistične slike","Barva, ki oživi","Mogočno, realistično premikanje","Sinamična kakovost slike","SR UHD prilagajanje","Izkusite 3D svet","Hitrejše delovanje ","Prihodnja 4k vsebina","Uživajte v svetu spletnih vsebin ","Dostopajte do dodatnih vsebin","Vgrajeni digitalni sprejemniki","Povežite vse naprave","Različni viri 4K ","USB vsebina","Izjemno hiter WiFi","Mobilne vsebine na televiziji ","Vsebine mobilnih naprav ","lokalne vsebine ","Odobreno s strani DivX","Brezhibna slika","Pripravljenost na kanale","TDT Premium"];
var estickerDescriptions = ["Neverjetna izkušnja gledanja zahvaljujoč slikam s štirikrat večjimi podrobnostmi polne visoke ločljivosti na UHD zaslonu ","Širok barvni razpon omogoča čustva v vsakem prizoru z živahnimi rdečimi in smaragdno zelenimi ","4K interpolacija okvirja in ovetlitev v ozadju, ki skrbi za odpravljanje zamegljenosti pri gibanju","Živost originalne slike je izboljšana in prikazuje resnično dinamične izraze z odličnim kontrastom ","Uživajte v jasnih in natančno prikazanih TV oddajah in v Blu-ray diskih, zahvaljujoč tehnologiji Super Resolution ","Izkusite TV s 3D pripravljenostjo in glejte različne 3D vsebine ","Bolj prijetna zabavna izkušnja s štirijedrnim procesorjem za nemoteno interakcijo, izboljšano delovanje ","HEVC (H.265) kodek podpora za prihajajoči standard 4K distribucijo videa ","Izobilje spletnih aplikacij, video na zahtevo, ogled preteklih vsebin in brskanje po spletu","Oglejte si več z dodatnimi storitvami in vsebino iz vaših najljubših oddaj","Dostopajte do TV kanalov v visoki ločljivosti brez dodatnega sprejemnika ","Enostaven priklop številnih digitalnih virov, ki so na voljo doma","TV pripravljen za prihodnost, ki lahko predvaja 4K 50 / 60Hz preko HDMI 2.0 z HDCP 2.2 ","Video in foto vsebin neposredno iz USB diska, trdega diska ali kamere na velikem zaslonu v 4K ločljivosti ","Najnovejša generacija 2x2 MIMO in AC standarda zagotavlja neprimerljivo hitrost dostopa do interneta ","Uživajte v fotografijah, video posnetkih, aplikacijah iz mobilnih naprav na velikem zaslonu, zahvaljujoč tehnologiji za zrcaljenje zaslona ","Fotografije, video posnetke, aplikacije iz pametnega telefona ali tabličnega mogoče prikazati na velikem zaslonu ","Prikaz lokalnih vsebin na velikem zaslonu , kot so fotografije, video posnetki iz naprav, povezanih v lokalno omrežje ","Igrajo v najem ali lastnih filmov zaščitena z DivX ","Izjemno ozek okvir in zelo tanka oblika","Testirano in odobreno s strani Canal+","Testirano in odobreno s strani TDT Premium"];							

var eManualTextArray = ["E-priročnik","Vse prednaložene slike so na voljo samo za predstavitev."];
var frontPanelRemind = "Sprednja plošča je zaklenjena.";
var eRPRemind		 = "Način Shop (Trgovina) ne izpolnjuje zahteve ERP. Ste prepričani?";	
var noRelatedChannel = "Ni kanala";
var option0624Name          = ["BOP","BFS","Po dogodkih","Pridobite ID številko uporabnika","BGM","Ponastavite vse","Ponastavi na tovarniške nastavitve","NRM","DVTB-T2 in izbor države","HbbTV način"];
var DVBT2AndChoice = ["Vklop","Po državah","Izklop"];
var hbbtvServiceRemind = "Storitev HbbTV bo na voljo kmalu.";
var insertWord = "Vstavi";			
var viewDetail = "Ogled podrobnosti";							

var remindOAD  = "Posodobitev programske opreme. Posodobitev programske opreme obstaja na drugem kanalu. Če sprejmete prenos se bo kanal samodejno spremenil. Ali želite izvesti posodobitev?";

var LEDStatus = ["Utripa", "Normalno"];
var netFlixRemind = "Ta funkcija bo prekinila dostop do storitev Netflix, dokler se ponovno ne vpišete.";
var ESNExplanation = "Elektronska serijska številka";
var resetShopRemind = "Sistem se ponovno zaganja, prosimo ne ugasnite TV-ja";
var initialSelectOption = "Prosimo izberite eno možnost:";
var databaseRemind   = "Sistem je zaznal, da je podatkovna baza iz neznanega razloga poškodovana in jo je samodejno ponovno zgradil. Pritisnite OK za nadaljevanje";
var Deactivation = "Deaktiviranje";
var oadFutureRemind = "Posodobitev programske opreme. Nova posodobitev bo na voljo %s. Posodobitev bo trajala nekaj časa in lahko povzroči, da se zaslon za trenutek izklopi. Ne izklapljajte TV-ja med posodobitvijo. Če boste izbrali to pososdobitev pustite TV vklopljen v času pososdobitve. Želite posodobiti programsko opremo vašega TV-ja?";
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Zvočni izhod";
var bt_soundOutPutTV = "TV-zvočniki";
var bt_soundOutPutBT = "Naprava Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth in TV";
var bt_refreshBarName = "Naprave";
var bt_settingTips_On = "Vključite Bluetooth in preglejte napravo.";
var bt_settingTips_Finding = "Iskanje naprav na voljo…";
var bt_settingTips_NoDevice = "Na voljo ni naprav.";
var bt_deviceList_State_NoConnect = "Ni povezano";
var bt_deviceList_State_Connecting = "Povezovanje…";
var bt_deviceList_State_Connected = "Povezano";
var bt_deviceList_State_Paired = "Združeno";
var bt_deviceList_Conncect_Failed_Tips1 = "Povezava ni uspela.";
var bt_deviceList_Conncect_Failed_Tips2 = "Potrdite, da je Bluetooth XXX vklopljen";
var bt_deviceList_Conncect_Success = "Povezano z napravo Bluetooth.";
var bt_deviceList_Disconncect_Success = "Povezava z Bluetooth prekinjena.";
var bt_deviceList_Disconnect = "Ali resnično želite izključiti iz XXX?";
var bt_tipsTitle = "Nasvet";
var bt_bluetooth_Pairing_Title = "Združevanje Bluetooth";
var bt_bluetooth_Input_Pin = "Vnesite PIN:";
var bt_bluetooth_Output_Pin_Tip = "Vnos PIN XXXX s tipkovnico.";
var bt_bluetooth_Pin_Wrong_Tip = "Napačen PIN";
var bt_bluetooth_Remove_Pair_Title = "Poizvedba";
var bt_bluetooth_Remove_Pair_Ask = "Pozabi to napravo?";
var bt_bluetooth_module_error = "Bluetooth modul napake!";

							
var netflixDialogOptions = ["V redu","Kasneje","Tega sporočila ne kaži več"];
var netflixDialogContent = "Na spletišču Netflix je na voljo tisoče filmov, ali si želite ogledati film sedaj?";
var netflixRemoteDialogContent = "Daljinski upravljavnik s tipko Netflix je že na voljo. Za več informacij obiščite naslednjo spletno stran.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Trenutni vir","Vsi viri"];
var audioDescriptionName = ["Opis zvoka","Zvočnik","Glasnost zvočnika","Slušalke","Glasnost slušalk","Glasnost AD","Naprava BT","Glasnost naprave BT"];
var audioDescriptionOptions = ["Izklop","Normalno","Opis zvoka"];							
var volumeOffRemind = 'V meniju Nastavitve, izberite “Vklop” za možnost XXX.';
var switchSourceRemind   = " Vstavljen. Ali želite preklopiti?";								

var mEPSRemind		 = "Nakupovalni način ne dosega MEPS zahtev. Ali ga želite vseeno izbrati?";
var parentRatingAUOptions = ["Ni blokade", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["Trenutna slika ne dosega MEPS zahtev, priporočamo standardni način.",
					   "Vaš TV je v nakupovalnem načinu. Za domači način odprite meni z nastavitvami."];

var footballModeName = "Športni način";
var resetStadium = "Stadion";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Izhod","0","Približaj+",
                       	   "Izhod",
                       	   "Seznam","0","Besedilo","Vodič","Potrdi","Izhod","Meni","Podnapisi","Info",
                       	   "Ustavi",
                       	   "Info","Meni","Izhod"
                       	   ];
var nscreenTips = "Aplikacija GuideOn pomaga uporabnikom skozi veliko količino vsebin.";
var nscreenContent = 'Koraki: 1. Na telefonu kliknite »TCL nScreen«.  Telefon povežite s TV preko istega omrežja; 2.Kliknite »GuideOn« za vstov v GuideOn; 3.GuideOn ima podobne lastnosti kot tiskan vodič po programih in nudi uporabnikom informacije o televizijskih vsebinah;';
var singalBrokenoffTips = "Signal je prekinjen. Sistem ne more zaključiti prenosa.";
var contentSpan1_1Array_AU =  [["NAPAJANJE:","VIR:","MENI:","NAZAJ:","INFORMACIJE:","DOMOV:","IZHOD:","SEZNAM:"],
    ["Vklop ali način pripravljenosti.","Izberite vir predvajanja",
        "Prikaz nastavitvenega menija","Nazaj na prejšni meni ali izhod iz trenutne aplikacije.",
        "Prikazuje informacije o programu",
        "Gre na domačo stran",
        "Nazaj na prejšni meni ali izhod iz trenutne aplikacije.",
        "Prikazuje seznam kanalov"]];
var guideDescriptionWords ="Prosimo skenirajte kodo QR in prenesite aplikacijo GuideOn na vaš telefon";
var settingNoticeSourceName ="Samodejni vir";
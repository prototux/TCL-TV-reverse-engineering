
var all_country 	= ["Austrália","Rakúsko","Belgicko","Bulharsko","Chorvátsko","Česká republika","Dánsko","Fínsko","Francúzsko","Nemecko",
						"Grécko","Maďarsko","Taliansko","Luxembursko","Holandsko","Nórsko","Poľsko","Portugalsko","Rumunsko","Rusko",
						"Srbsko","Slovinsko","Španielsko","Švédsko","Švajčiarsko","Spojené kráľovstvo","Nový Zéland"," "/*Arab*/,"Estónsko"," "/*Hebrew*/,
						"Lotyšsko","Slovensko","Turecko","Írsko","*","Filipíny","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Čína","*","*","*","*","*","*","Ostatné","Litva"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litva"];							
				
var all_language 	= ["Český","*","Dánsky","*","*","Nemčina","Angličtina","francúzština","Grécky","španielčina",
						"Chorvátsky","*","taliančina","Maďarský","Holandský","Nórsky","Poľský","Portugalský","Ruský","Rumunský",
						"Slovenščina","Srbský","Fínsky","Švédsky","Bulharský","Slovenčina","*","*","Galský","*",
						"Waleský","Arabsky","Irlantilainen","Lotyšský","*","Turecky","Estónsky","Holandský"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Pôvodný zvuk"/*Qaa*/,"Nedefinované"/*Undetermined*/,"*","Neznámy",
						"Nedefinované","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskický","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Valkovenäjä","*","*","Katalánsky","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galícijský","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandský","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litovský",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantický","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrajinský","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Vypnúť","Zapnúť"];
var okCancel		= ["OK","Zrušiť"];
var yesNo			= ["ÁNO","NIE"];
var level			= ["Vypnúť","Nízke","Vysoké","Stredné"];
var manualAuto		= ["Manuálne","Automaticky"];
var homeShop		= ["Domov","Obchod"];
var picPreset		= ["Štandardné","Dynamický","Prírodné","Kino","Digitálne kino","Užívateľ"];
var picColorTemp	= ["Studený","Normálne","Teplý","Teplý","Užívateľ"];
var pic3dNavig		= ["Manuálne","Automaticky","Poloautomaticky"];
var _3dOptions		= ["Režim 3D","3D na 2D","Prepnúť Ľ-P","Hĺbka poľa"];
var pic3DMode       = ["Vypnúť","2D na 3D","Vedľa seba","Hore a dole","Prekl. riadkovanie"];
var picEcoOptions	= ["Úspora energie","Senzor svetla","Lokálne tlmenie","Zmiešané stmievanie"];
var picGeoOptions	= ["Geometria","Horiz. poloha","Vertikálna poloha","Synchronizácia","Fáza"];//Geometry 无翻译
var picAdWhiteBal	= ["Pridať Č","Pridať Z","Pridať M","Vyvážiť Č","Vyvážiť Z","Vyvážiť M"];
var souOptions		= ["Prednastavený zvuk","Vyváženie","Oneskorenie zvuku","SRS TSHD","Aut. ovl. hlasit.",
						"Typ SPDIF","SPDIF oneskorenie","Umiestnenie TV"," Jazyk audia","Zvukový kanál",
						"Zvukový popis","Typ digit. audio výstupu","Profes. Nastavenie Dolby"];
var soundOutputoptions =["DAP výstup TV reproduktora","Externý výstup kódovania AVR"];
var inteligenteqoptions 	=["Zaostrený","Bohatý"];						
var souSpdifType	= ["Automaticky"/*Dolby*/,"PCM","Vypnúť"];
var colorSpace      = ["Automaticky","Natívne","Užívateľ","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Surround virtualizer","Dialog enhancer","Bass enhancer","Inteligentná hlasitosť","Mediálna inteligencia","Graficky EQ","Inteligentný EQ"];
var chOptions		= ["Vyhľadávanie kanálov","Zoznam kanálov","EPG","Organizátor","Diagnostika kanálov",
						"timeshift","Titulky","Teletext","Typ zoznamu kanálov"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Intenzita signálu","Kvalita signálu","Frekvencia (kHz)","ID služby","ID siete","Názov siete"];
var chScanOptions	= ["Krajina","Režim tunera","Preskúmanie kanála","Aktualne preskúmanie","Manuálne preskúmanie analógu",
						["Ručné hľadanie (kábel)","Ručné hľadanie (anténa)","Manuálne ladenie satelitu"],"Nastavenie satelitnej antény","Výber obľúbenej siete","Vymazať zoznam kanálov",];
var favNetDes		= "Prosím vyberte vašu obľúbenú sieť";
var tuner			= ["Kábel","Anténa","Satelit"];//Satelite 无翻译
var passError		= "Heslo je nesprávne.\nZadajte ho ešte raz prosím!";
var chType			= ["Analógové kanály: ","Digitálne kanály: "];
var chScanStatus	= ["Stav: Hľadá sa","Stav: Preskúmanie bolo dokončené","Stav: Zrušiť preskúmanie","Stav: Chyba preskúmania"];
var chScanPara		= ["Frekvencia (kHz)","Modulácia","Rýchl. symb. (ksym/s.)","ID siete","Systém",
						"Jemné ladenie","Intenzita signálu","Kvalita signálu","Režim hľadania","Č. kanálu"];
var chScanParaMHZ      = ["Frekvencia (MHz)"];
var chAtvManSys		= ["ZÁPADNÁ EURÓPA","VÝCHODNÁ EURÓPA","GB","Francúzsko"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Automaticky"];
var chCleanDes		= "Chcete vymazať zoznam kanálov?";
var chDeletDes		= "Ali želite izbrisati kanal?";
var chOperator		= ["Ziggo","UPC","Ostatné"];
var chScanType		= ["Digitálny & Analógový","Digitálny","Analógový"];
var chScanMode		= ["Úplne","Dopredu","Rýchle"];
var bookingModes	= ["Nahrať","Opomnik"];
var dayName			= ["Ne","Po","Ut","St","Št","Pi","So"];
var monthName		= ["jan.", "feb.","mar.","apr.","máj","jún","júl","aug.","sep.","okt.","nov.","dec."];
var filter			= ["Filtro","Typ","Podtyp"];
var chEpgFirstGenre	= ["Kino","Novinky","Zábavný program","Športy","Detské","Hudba","Umenie","Spoločenský","Vzdelávanie","Voľný čas","ŠPECIÁLNY"];
var chEpgSecondGenre= [["Dráma","Detektívka","Dobrodružný","Scie-fi","Komédia","Ľahký žáner","Romantický","Vážny","Film pre dospelých"," "," "," "],
						["Aktuálne udalosti","Správy o počasí","Spravodajský magazín","Dokumentárny","Diskusia"," "," "," "," "," "," "," "],
						["Zábavný program","Súťažný program","Estrádny program","Talk show"," "," "," "," "," "," "," "," "],
						["Športy","Špeciálne podujatia","Športové magazíny","Futbal","Tenis",
							"Kolektívne športy","Atletika","Motoristický šport","Vodné športy","Zimné športy",
							"Jazdectvo","Bojové športy"],
						["Detské","Pre deti predškolského veku","Zábava pre deti vo veku 6 až 14 rokov","Zábava pre deti vo veku 10 až 16 rokov","Informácie","Kreslené filmy"," "," "," "," "," "," "," "],
						["Hudba","Rock","Vážny","Folk","Džez","Muzikál","Balet"," "," "," "," "," "],
						["Umenie","Inscenačné umenie","Hudba a výtvarné umenia","Náboženstvo ","Ľudová kultúra",
							"Súhrn literatúry","Film","Experimentálne","Rozhlas a vysielanie","Nové médiá",
							"Časopisy o umení","Móda"],
						["Spoločenský","Magazíny","Ekonomika","Významné osobnosti"," "," "," "," "," "," "," "," "],
						["Vzdelávanie","Príroda","Technológie","Medicína","Cudzie krajiny","Spoločenské vedy","Ďalšie vzdelávanie","Jazyky"," "," "," "," "],
						["Oddych a hobby","Turistika","Remeslá","Motorizmus","Kondícia a zdravie","Varenie","Reklama","Záhradkárstvo"," "," "," "," "],
						["Pôvodný jazyk","Čiernobiela","Nepublikované","Živé vysielanie"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Preskočenie kanála","Triedenie kanálov","Editovanie kanála","Odstrániť kanál","kanál swapu","kanál vložka"];
var chEditPara 		= ["Názov siete","Číslo kanála","Názov kanála","Frekvencia","Systém farieb","Systém zvuku"];
var chSatTitles		= ["Typ satelitu","Nastavenie satelitnej antény","Vybrať satelit"];
var chSatEidtOptions= ["Názov satelitu","Pozícia","LNB Energie","Frekvencia LNB (MHz)","Diseqc vstup",
						"Tón 22 kHz","Tone Burst","Frekvencia (kHz)","Rýchl. symb. (ksym/s.)","Polarizácia",
						"Intenzita signálu","Kvalita signálu","Stav satelitu"];
var chSatAutoPromt	= [["Všetky","Sieť"],
						["Všetky","Voľné"]];
var chSatAutoScanOptions=["Vybrať satelit","Režim hľadania","Kanály"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzálny",];
var chSatDiSEqCInput= ["Vypnúť","A","B","C","D"];
var chSatTone22KHz	= ["Automaticky","Zapnúť","Vypnúť"];
var chSatToneBurst	= ["Vypnúť","Tone Burst A","Tone Burst B"];
var chSatPolarization= ["Vodorovná","Zvislá"];
var chSatSetupOptions=["Typ antény","Vylaďovač","Frekvencia pásma"];
var chSatAntennaType= ["Jeden kábel","Univerzálny"];
var chSatUserBands	= ["Vlastné pásmo 1","Vlastné pásmo 2","Vlastné pásmo 3","Vlastné pásmo 4","Vlastné pásmo 5","Vlastné pásmo 6","Vlastné pásmo 7","Vlastné pásmo 8"];
var chSatOthers		= ["Transpondér"];
var chSatSetupOthers= ["Definované používateľom"];
var pleaseSelectSat = "Najskôr vyberte satelity!";
var subOptions		= ["Titulky","Jazyk dig. titulkov","2.jazyk dig. titulkov ","Typ titulkov"];
var ttxOptionsCon      = ["Dekódovanie jazyka stránky","Jazyk digitál. teletextu"];
var subType			= ["Normálne","Poškodený sluch"];
var netIntf     	= ["Ethernet","Bezdrôtové"];
var netConnDes		= ["TV testuje sieťové pripojenie.\nProsím, čakajte",
						"Test pripojenia k sieti úspešný!",
						"Test pripojenia k sieti neúspešný."];
var netSsidError	= "Platná dĺžka SSID je 1~32 znakov. Skontrolujte prosím SSID.";
var netOthers		= ["Koda PIN "];
var netWlessAutoDes	= ["Pred kliknutím na tlačidlo OK sa uistite, či je na prístupovom bode nainštalovaný nasledujúci kód PIN.",
						"Pred kliknutím na tlačidlo OK stlačte do 120 sekúnd tlačidlo na prístupovom bode."];
var netConnRemind	= ["Heslo je nesprávne!",
						"Povezovanje. Prosimo, počakajte!",
						"Pripojenie úspešné, IP adresa získaná!",
						"Prepojenie zlyhalo",
						"TV hľadá prístupové body\nČakajte, prosím",
						"Žiadne bezdrôtové zariadenie pripojené k TV!"];
var netWireIpOptions= ["Nastavenie IP","Typ adresy","Adresa IP","Maska podsiete","Predvolená brána","Primárny DNS","Sekundárny DNS"];
var netWireConnRemind= ["Zadajte hodnotu od 0 do 255.",
						"Úspešne pripojené!",
						"Zadajte platnú adresu",
						"Úspešne pripojené!",
						"Povezava ni bila uspešna!",
						"Povezovanje. Prosimo, počakajte!",
						"Zadajte prosím hodnotu od 1 do 233."];
var netFlixOptions	= ["Deaktivovať","ESN"];
var netFlixDes	 	= ["Naozaj chcete deaktivovať?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Aktualiz. softvéru";
var netUpdateDialogTitle = "Prebieha aktualizácia softvéru";
var netBGDownloadTitle 	= "Preberá sa";
var netUpdateLoadingPrompt= ["Prebieha vyhľadávanie aktualizácií, počkajte, prosím!",
							"Prebieha preberanie softvéru... Počkajte, prosím!",
							"Počas aktualizácie softvéru NEVYPÍNAJTE televízor!",
                            "Povinná aktualizácia softvéru je preberie automaticky na pozadí!"];
var netUpdatePrompt= ["Blahoželáme, máte najnovšiu verziu softvéru!",
						"Našla sa nová verzia softvéru: XXXX. Chcete ju teraz prevziať? Môže to chvíľu trvať, závisí to od stavu siete.",
						"Prihlásenie neúspešné!",
						"Načítanie údajov zlyhalo, skúste prosím neskôr!",
						"Analýza aktualizácie XML neúspešná!",
						"Prepojenie zlyhalo",
						"Prenos programske opreme je končan. Ali želite začeti s flashem?",
						"Údaje sa stratili! Preberanie bolo neúspešné!",
						"Kontrola balíka bolo neúspešné, skúste znova!",
						"Sieť v nenormálnom stave! Skontrolujte a skúste znova…",
						"Aktualizácia neúspešná. Reštartujte TV!",
						"Súbor s inováciou bol nečakane odstránený. Inovujte cez sieť znova.",
						"Softvér bol úspešne na pozadí prevzatý. Chcete inovovať?"];
var netUpdateButtonText = ["Prevziať", "Aktualizovať", "Neskôr", "Nikdy", "OK","Pokračovať"];
var autoDetectPrompt = ["Našla sa nová verzia softvéru: XXXX. Chcete ju teraz prevziať? Môže to chvíľu trvať, závisí to od stavu siete.",
						"Našla sa nová verzia softvéru: XXXX. Chcete aktualizovať teraz?",
						"Proces inovácie cez sieť bol naposledy prerušený. Mali by ste inovovať znova.",
                        "Preberanie novej verzie softvéru XXXX nie je dokončené. Chcete teraz pokračovať?",
                        "Softvér stiahnutý, chcete teraz spustiť aktualizáciu?"];
var sysOptions		= ["Elektronická príručka","Jazyk OSD","Nastavenie času","Zamknúť","Nastavenia vstupu",
						"Aktualiz. softvéru","Miesto","Režim HbbTV","Cookies","Spoločné rozhranie",
						"Rozšírené nastavenia","Reset shop","LED kontrolka"];
var sysResetDes		= "Ste si istý?";
var sysMenuLangOptions=["Jazyk","Preferovaný jazyk zvuku","Preferovaný 2.jazyk audia"];
var sysTimerOptions	= ["Časové pásmo","Ime področja","Synchronizácia","Časovač vypnutia","Autom. pohotovosť", "Country region"];

var sysTimeZone		= ["Podľa vysielača","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Vypnúť","10 min.","20 min.","30 min.","40 min.","50 min.","60 min.","90 min.","120 min."];
var sysStandby		= ["Vypnúť","4 hodiny","6 hodiny","8 hodiny"];
var sysRegionName	= ["Madrid","Kanársky"];
var sysClockOptions	= ["Automatická synchronizácia","Dátum","Čas","Časovač zapnutia","Nastavenie času",
						"Kanál pri zapnutí","Časovač vypnutia","Nastavenie času"];
var sysTimer		= ["Vypnúť","Dnevno","Enkrat"];

var sysInputSet		= ["Bez označenia  ","DVD","Modrý lúč","HDD","DVDR",
						"Nahrávanie HD","Hry","VCR","PC","Digitálne STB",
						"HD digitálne STB","Fotoaparát","Prehrávač","Iné"];
var sysAvVideoInput	= ["Automaticky","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Cez USB","Cez siete","Podľa kanála"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Nedá sa nájsť žiadny nový softvér v sieti!",
						"Našla sa nová verzia softvéru: XXXX. Chcete aktualizovať teraz?",
						"Vstavite USB-ključ.",
						"Kontrola balíka bolo neúspešné, skúste znova!",
						"NEVYBERAJTE USB kľúč a nevypínajte. TV prijímač počas aktual. firmvéru!!",
						"Softvér bol úspešne aktualizovaný.\nTelevizor sa potom automaticky reštartuje!",
						"Našla sa nová verzia softvéru: XXXX. Chcete ju teraz prevziať? Môže to chvíľu trvať, závisí to od stavu siete.",
						"Preberá sa",
						"Prenos programske opreme je končan. Ali želite začeti s flashem?",
						"Akt. neúspešná!",
						"Hľadajú sa súbory inovácie",
						"Softvér bol úspešne aktualizovaný.\nTeraz reštartujte TV."];
var sysProductInfo	= ["Súčasná verzia","Ime izdelka","Názov výrobcu","Názov skrine"];
var sysCiDes		= ["Nebola nájená CI karta"];
var sysAdOptions	= ["Registrácia DivX(R)","Zrušenie registrácie pre DivX(R)","T-Link","Authorization Error","Potvrdenie zrušenia registrácie",
						"Potvrdenie zapožičania","Koniec vypožičania","ID deklarácie Bluetooth"];
var sysRegistDes	= ["Vašo napravo morate registrirati za predvajanje DivX zaščitenih videoposnetkov.",
						"Registracijska koda:",
						"Registrirajte se na http://vod.divx.com"];
var sysDregistDes	= ["Kód zrušenia registrácie:",
						"Zrušenie registrácie na http://vod.divx.com",
						"Pokračovať v registrácii?"];
var mediaAuthorization = ["Zariadenie nie je oprávnené prehrať toto chránené video DivX(R)."];
var deregistrationConfrimation = ["Vaše zariadenie už je zaregistrované.","Určite si želáte zrušiť registráciu?"];
var rentalConfirmation = "Počet použití zapožičaného videa DivX(R): XXXX z celkového počtu YYYY zobrazení. Pokračovať?";
var rentalExpired 	= "Prenájom DivX(R) použil XXXX z počtu YYYY zobrazení. Platnosť prenájmu DivX uplynula.";
						
						
var sysLockOptions	= ["Zablokovanie kanála","Zámok časového intervalu","Zablokovanie programu","Zablokovanie vstupu","Zámok predného panelu","Inštalácia zámku",
						"Zmeniť heslo","Maximálna hlasitosť","Vymazať všetky"];
var sysTimeIntervals= ["Typ zámku","Čas začiatku","Čas ukončenia"];
var sysRatingOptions= ["Ei mitään","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Španielsko)"];
var changePass		= ["Zmeniť heslo","Nové heslo","Potvrdiť heslo"];
var changePassDes	= ["Heslo je nesprávne.\nZadajte ho ešte raz prosím!",
						"Heslo nesúhlasí.\nZadajte ho ešte raz, prosím!",
						"Heslo úspešne nastavené!",
						"Ta koda je preveč enostavna za geslo. \nProsimo za ponovni vnos!"];
var sysPowerOnChOptions= "Vybrať režim";
var sysPowerOnCh	= ["Posledný stav","Vybrať používateľa"];
var netWlessSecu    = ["Otvoriť","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ei mitään","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Bez podpory"];
var netWlessSecu3	= ["Ei mitään","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Bez podpory"];
var netOptions		= ["Pripojenie na Internet","Rozhranie","Nastavenie bezdrôtového spojenia","Nastavenie IP","Informácie",
						"Test spojenia","DLNA","Diaľ. ovlád. TV","Nastavenie Netfix","WiFi TV link",
						"Typ adresy","Adresa IP","Maska podsiete","Predvolená brána","Primárny DNS",
						"Sekundárny DNS","SSID","BSSID","Zadajte SSID:","ID užívateľa"];
var chEditDes		= ["Duplicitné číslo kanála!","Za izbris trenutnega znaka pritisnite rdeči gumb.","Neplatné čísla kanálov."];
var chEpgNoProgram	= "V tomto momente žiadne informácie o programe. Najskôr prosím vyhľadajte kanály!";
var chEpgWords		= ["Zoznam programov","Ni podatkov o programu.","Kanál je zablokovaný!","Ni podrobnosti o programu.","Ni naslova programa."];
var chEpgBooking	= ["plán info", "Číslo kanála","Dátum štartu","Čas začiatku","Čas ukončenia",
						"Typ opakovania","Typ rozvrhu","Dodaj","Nahradiť","Zmeniť",
						"Pridať/Upraviť"];
var epgHotKey		= ["Predchádzajúci deň","Nasledujúci deň","Filtro","Urnik","Dodaj urnik"];
var chEpgBookRemind	= ["Nesprávny čas začiatku","Nesprávny čas konca","Duplicitný plán","Úspešne uložené.","Úspešne odstránené."];
var chSchePara		= ["Urnik","Čas začiatku","Dátum štartu","Názov programu","Názov kanála",
						"Trvanie","Opakovať","Plán","Upraviť","Odstrániť"];
var dateTimer		= ["Enkrat","Dnevno","Týždenne"];
var scheduleDeleteReminds="Ali želite izbrisati ta razpored?";
var scheduleNoLists	= "Na voljo ni seznama razporedov. Za dodajanje seznama razporedov pritisnite rdeč gumb.";
var chListWords		= ["Zoznam kanálov","Vybrať zoznam","Režim tunera","Pridať k obľúbeným","Odstrániť",
						"Vyberte zoznam kanálov","Vyberte režim tunera","Vymeniť"];
var chListType		= ["Všetky","Digitálny","Analógový","Rádiový","Voľné","Obľúbené"];
var chAutoScanOptions=["Vybrať operátora","Typ kanála","Preskúmanie kanála"];
var souSoundType	= ["Neplatné","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Duálny 1","Duálny 2","Duálny 2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dvojni",
						"Mono","LL","RR","LR"];
var souPreset		= ["Hudba","Kino","Jasný hlas","Štandardné","Užívateľ"];
var picAdRgbMode	= ["Vypnúť","Len červené","Len zelené","Len modré"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamický Kontrast","Zreteľnosť pohybu LED",
						"Farba pokožky ","Filmový režim","Režim hry","Teplota farieb","Vyváženie Bielej",
						"Zastaviť","Black Stretch","Nadsnímať","Gama","Režim HDMI","Vyváženie bielej 10P","Rozšírenie farebného spektra",
						"Zníženie rozostrenia","Zníženie otrasov","Farebný priestor","Zreteľnosť pohybu"];
var pic10Pwhite     = ["Interval","Červené","Zelené","Modré","Vynulovanie","Farba","Žltá","Azúrová","Purpúrová"];
var picMotionClarity = ["Režim pohybu","Interpolácia pohybu","Zreteľnosť pohybu LED","Zníženie rozostrenia","Zníženie otrasov","Vynulovanie"];
var picMotionMode   = ["Automaticky","Film","Vyrovnať","Vymazať","Šport","Zákazník"];
var picResetDes		= "Všetky osobné nastavenia budú obnovené. Naozaj chcete vykonať vybratú akciu?";
var pic10PReset     = "Naozaj chcete vynulovať vyváženie bielej 10P?";
var picMotionReset  = "Chcete obnoviť zreteľnosť pohybu?";
var picColorSpaceReset    = "Naozaj chcete vynulovať farebný priestor?";
var picOptions		= ["Režim pre obraz",
						"Podsvietenie","Jas","Kontrast","Sýtosť","Odtieň","Ostrosť","Teplota farieb","Režim obrazovky","Automatický formát",
						"Vylepšenie pre šport","3D","3D navigácia","ECO Nastavenie","Geometria",
						"Rozšírené nastavenia","Použiť režim obrázka","Vynulovanie obrazu"];
var picSize			= ["formát 16:9", "Formát 4:3", "Oblika zapisa 14 : 9", "Cinerama",
						"Zoom 16:9", "Zoom máximo 16:9","Zoom 14:9","Zoom expandido","Zoom alargado",
						"Zoom 2","Zoom alargado 2","Natívne prispôsobenie obrazovky","Ponto por ponto","Pôvodné","Panoráma"];
var others			= ["Hlasitosť","Vysielanie","Heslo","Stav","Uložiť","Nahradiť","Spustiť","Ukončiť","Vyhľadávanie","Odstrániť",
						"Ei mitään","Automaticky","Preskúmať","Zabezpečenie","Pripojiť","Osveži","Znova","Ukončiť ","Nastavenie","Kanály",
						"Upraviť","Vložiť","Signálu!","Dokončiť","Stereo","Zvuk","Vir","Bez zvuku","Tipy","Vynulovanie",
						"Zákazník","Nastavenia","Uložiť","Používateľ","Zatvoriť klávesnicou","Režim zabezpečenia","Každý deň","Zoznam PVR"];
var direction		= ["Doľava","Doprava","Nahor","Nadol"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Neznámy"];
var soundChannels   = ["Neznámy","Mono","Sub","Dvojité mono","Stereo","Stereo Sub","Stereo Dolby Surround","Priestorový 2 kanálový","Priestorový","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1 kanálový","7.1 kanálový","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Doľava","Doprava","Ostatné"];
var prompts			= ["Prilagodite nastavitev slike tako, da vam najbolje ustreza.",
						"Prilagodite nivoje osvetlitve. Osvetlitev je močnejša bližje številu 100. ",
						"Prilagodite nivoje kontrasta. Razlika med temno in svetlo sliko je večja bližje številu 100. ",
						"Prilagodite nivoje nasičenosti. Barva je močnejša bližje številu 100.",
						"Prilagodite nivoje ostrine. Slika je bolj jasna bližje številu 100.",
						"Prilagodite nivoje osvetlitve v ozadju. Zaslon je svetlejši bližje številu 100. ",
						"Prilagodite nivoje odtenka. Ta nastavitev spremeni ton barve.",
						"Izberite obliko slike, ki najbolj ustreza predvajanemu programu.",
						"Nakonfigurujte možnosti úspory energie.",
						"Prilagodite nastavitve zaslonske geometrije, ko priključite računalnik.",
						"Vyberte ďalšie rozšírené nastavenia obrazu.",
						"Obnovte všetky nastavenia obrazu na predvolené.",
						"Vyberte režim zvuku, ktorý najviac zodpovedá vašim osobným potrebám.",
						"Upravte vyváženie hlasitosti medzi ľavým a pravým kanálom.",
						"Zvočni sistem TruSurround HD zagotavlja bogat zvok in jasnosti pri nizkih in visokih frekvencah.",
						"Oblika digitalnega vmesnika za povezovanje digitalnega avdio TV izhoda na opremo domačega kina. ",
						"Vyberte jazyk zvuku, ktorý zodpovedá vašim osobným potrebám.",
						"Omogočite nastavitev za slabovidne in uživajte v televizijskem programu.",
						"Otestujte obraz, zvuk a signál vášho TV.",
						"Vyberte typ zoznamu kanálov, ktorý zodpovedá vášmu TV signálu.",
						"Izberite jezik podnapisov, ki bodo prikazani na dnu zaslonu.",
						"Pregled besedila in slik trenutnega kanala.",
						"Standard Digital Living Network Alliance. Uživajte v glasbi, fotografijah in videoposnetkih preko domačega omrežja in drugih naprav, kot je računalnik.",
						"Prikažite vsebino svojega pametnega telefona na televizorju in telefon uporabite kot daljinski upravljalnik za televizor. ",
						"Prikažite vsebino iz naprave Android, združljive z Miracast, na vašem zaslonu televizorja.",
						"Uzamknite TV.",
						"Vyberte názov svojho zariadenia.",
						"Vyberte prostredie, v ktorom pozeráte.",
						"Obnovte všetky systémové nastavenia na predvolené."];
var initialTitle	= ["Vitajte","Počiatočné nastavenie"];
var initialPrompt	= ["Izvedite začetno namestitev in čaka vas svet razburljivih dogodivščin!",
						"Zvoľte svoj jazyk prosím:",
						"Vyberte svoju krajinu:",
						"Vyberte umiestnenie",
						"Vyberte typ pripojenia k sieti:",
						"Vyberte režim pripojenia ku káblovej sieti:",
						"Nepodarilo sa pripojiť k xxxxxxxxx! Pripojte prosím zariadenie podľa nasledujúcej schémy alebo vyberte doľava pre obnovenie.",
						"Pripojené k xxxxxxxxx! Zvoľte prosím Doprava pre pokračovanie.",
						"1)Vaš TV morda že ima vgrajen brezžični vmesnik\n 2)Ali, če ste dobili brezžični USB vmesnik, ga priključite na vaš TV. Nato prosimo izberite način priključitve preko brezžičnega omrežja",
						"Prebieha skenovanie. Počkajte, prosím...",
						"Žiadne bezdrôtové zariadenie pripojené k TV!",
						"Pred kliknutím na „Ďalej“ sa uistite, či je na prístupovom bode nainštalovaný tento kód PIN.",
						"Pred stlačením tlačidla Doprava stlačte do 120 sekúnd tlačidlo na AP!",
						"WPS (Wi-Fi Protected Setup)",
						"PIN (osobné identifikačné číslo)",
						"PBC (Konfigurácia tlačidla)",
						"K nasledujúcemu obsahu možno pristupovať len so sieťovým pripojením. Chcete preskočiť nastavenia siete?",
						"Na voljo je nova programska oprema za prenos. Prenos lahko traja nekaj časa, odvisno od stanja omrežja.  ",
						"Aktualizácia softvéru TV zaistí, že budete môcť využiť najnovšie funkcie a služby.",
						"Ne boste mogli uporabljati najnovejših funkcij in storitev. Ali želite preskočiti posodobitev programske opreme? ",
						"Pritisnite desni gumb za nadaljevanje.",
						"Med posodobitvijo ne izključite napajanja, saj lahko to povzroči nepravilno delovanje televizorja.",
						"Ak nechcete aktualizovať, vyberte NIE.",
						"Prebieha aktualizácia, počkajte, prosím",
						"Softvér tiež môžete aktualizovať v časti SYSTÉM/AKTUALIZÁCIA SOFTVÉRU.",
						"Za izbrano državo potrebujete nastavitev gesla. \nProsimo nastavite kodo za vaš TV in jo potrdite.",
						"This code is too simple.\nPlease use different digits.",
						"Blahoželáme! Počiatočné nastavenie dokončené. Môžete zmeniť konfiguráciu cez hlavnú ponuku a súvisiace podponuky.",
						"Vyberte režim zabezpečenia:",
						"Vyberte režim pripojenia bezdrôtovej siete:",
						"Sieť"];
var initNetCabAndDonRe = ["Žiadny sieťový kábel nie je pripojený. Pripojte sieťový kábel!","Nie je k dispozícii žiadny vstavaný bezdrôtový adaptér alebo žiadny bezdrôtový USB adaptér."];
var initChPrompt = ["Uloženie TV kanálov","Vyberte typ skenovania anténnych kanálov.","Prebieha automatické ladenie...","Tieto anténne kanály boli nájdené:","Vyberte typ vyhľadávanie káblového vysielania.","Vyberte jedného operátora z nasledujúceho zoznamu.","Nakonfigurujte informácie vyhľadávania","Našli sa nasledujúce káblové kanály:","Vyberte jedného operátora z nasledujúceho zoznamu","Vyberte satelity, ktoré prehľadať, prípadne upravte vybraný satelit","Nastavte parametre satelitu","Tieto kanály boli nájdené. Skenovanie kanálov môžete opäť spustiť v časti Kanál/skenovanie kanál/skenovanie"];
var initClockPrompt = ["Získať čas zo siete!",
						"Nastavte dátum a čas:"];
var initialOptions	= ["Prostredie","Nastavenie siete","Aktualiz. softvéru","Inštalácia kanála","Synchronizácia"];
var initialHotkeys	= ["Späť","Zvoliť","Ďalej"];
var initLocations	= ["Domov","Obchod","Trgovina s predstavitvijo"];
var initNets		= ["Káblová","Bezdrôtové","Nemám pripojenie k sieti"];
var initWireManuals	= ["Adresa IP","Maska podsiete","Predvolená brána","Primárny DNS","Sekundárny DNS"];
var initSoftUpdates = ["Aktualizovať teraz","Aktualizovať neskôr"];
var initChannelIns	= ["Pokračovať","Nechcem do ukladať kanály"];
var initChScanTypes	= ["Digitálny & Analógový","Digitálny","Analógový","Nechcem vyhľadávať"];
var initChDvbts		= ["Kanály prijímané cez anténu ATV:","Kanály prijímané cez anténu DTV:"];
var initChDvbcs		= ["Káblové kanály ATV:","Káblové kanály DTV:"];
var initChDvbss		= ["Satelitné kanály:"];
var initChDvbSOther	= ["Nechcem prehľadávať satelit"];
var initEndConnectedStatus= ["Odpojené","Pripojené cez WiFi","Pripojené cez kábel"];
var initEndInstallations= "Uložených XXXX kanálov";
var initEndUpdate	= ["Aktualizované"];

var audioScenes 	= ["Na stole","Montáž na stenu"];			
var screenSavers	= ["V tomto momente žiadne informácie o programe. Najskôr prosím vyhľadajte kanály!",
						"Bez signálu!",
						"Kódovaný",
						"Len údaje",
						"Program so zvukom",
						"Bez zvuku a obrazu",
						"Nie je k dispozícii",
						"Bez teletextu",
						"Ni podatkov o programu.",
						"Program je zablokovaný!",
						"Program je zablokovaný!\nStlačte OK a vložte svoj kód.",
						"Ni podrobnosti o programu.",
						"Program škodlivý pre maloleté.\nStlačte OK a zadajte kód.",
						"Kanál je zablokovaný!",
						"Kanál je zamknutý!\nStlačte OK a vložte svoj kód.",
						"Vstup je zamknutý!\nStlačte OK a vložte svoj kód.",
						"Bez podpory!",
						"Táto služba momentálne nie je k dispozícii",
						"Vstup zamknutý!",
						"Ni naslova programa.",
						"Bez funkcie"
						];
var chBookingPromt	= ["Kanál má naplánované nahrávanie, TV začne nahrávanie.",
						"Našlo sa naplánované nahrávanie,\nprepína sa na XXXX pre nahrávanie",
						"Na aktuálnom kanáli je pripomenutie.",
						"Našlo sa naplánované pripomenutie.\nPrepína sa na XXXX"];
var timeUnit		= ["s.","min"];
var ciPromt			= ["Sieťové údaje boli zmenené. Pre aktualizáciu môžete spustiť kontrolu aktualizácií. ",];
var othersPromt		= ["Počkajte prosím...",];
var menuOptions		= ["Obraz  ","Zvuk","Kanál","Sieť","Systém"];
var optionOptions	= ["Režim pre obraz","Prednastavený zvuk","Zastaviť","T-Link","timeshift","PVR","Urnik","Nastavenie"];
var optionTLinkPromt= [["Automatické zapnutie","Autom. pohotovosť","Menu sprievodcu"],
						["Zapnúť","Pohot. režim","Hlasitosť zosilňovača"]];
var powerPromt		= ["Televízor sa čoskoro vypne! Zrušíte stlačením ľubovoľného tlačidla."];
var ttxLanguage		= ["ZÁPADNÁ EURÓPA","VÝCHODNÁ EURÓPA","Ruský","Arabsky/Hebrejsky","Farejsky","Arabsky","Valkovenäjä","Grécky","Turecky"];
var ttxOptions		= ["Odhaliť","Cykliť podstrany","Jazyk","Strana alarmu","Horúce novinky"];
var weekday         = ["Nedeľa","Pondelok","Utorok","Streda","štvrtok","Piatok","Sobota"];
var lcnConfflict	= "Tento program má problémy so signálom. Iná verzia je prístupná na kanáli %.";
var inShopMode		= "Váš TV je v režime obchodu. Domáci režim vyberte v časti \"Systém\" a v ponuke zmeňte \"Umiestenie\".";
var nitRefresh		= "Údaje siete boli zmenené. Chcete spustiť aktualizáciu?";
var picHDMIMode     = ["Automaticky","Grafický","Video"];

var glassRemind    	= ["Spárujte prosím vaše 3D okuliare s TV\n (pridržajte vypínač na 3D okuliaroch).","Vaše 3D okuliare sú pripojené k TV ",""];
var pvrRemind 		= ["Nevytiahujte USB zariadenie a neprerušujte napájanie"];
var pvrConName   	= ["PVR","Informácie o programe:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Nahraté video je uložené v “pvr“ adresári."],"Ukončiť ","Nahrať","hodina","Minúta","Trvanie","Tipy","Použite šípky na nastavenie dĺžky nahrávania."];
var pvrDisRemind 	= "Zapojte USB kľúč na nahrávanie.";
var pvrRemindWords  = ["Chcete ukončiť?",
							"Chcete zastaviť nahrávanie a prechádzať nahraté súbory?",
							"Disk je vytiahnutý.",
							"Nedostatok voľného miesta. ",
							"Žiadne nahraté súbory. Spustite nahrávanie.",
							"PVR nemožno spustiť na zakódovanom kanáli.",
							"Funkcia nedostupná",
							"Úspešne uložené.",
							"Chcete zastaviť proces nahrávania a zmeniť zdroj vstupu?",
							"TV skončí aktuálne nahrávanie. Chcete ukončiť?",
							"PVR nahrávanie potrebuje, aby televízny signál fungoval správne. Skontrolujte váš signál."];
var pvrChangeCh 	= ["Chcete prepnúť kanál?",
							"Chcete zastaviť proces nahrávania a zmeniť kanál?"];
var pvrChangeToPIN8	= ["Chcete zmeniť zdroj na zariadenie pripojené cez vstup SCART?",
				    		"Chcete zastaviť nahrávanie a zmeniť zdroj na zariadenie pripojené cez vstup SCART?"];
var pvrChangeToCEC  = ["Chcete zmeniť zdroj na zariadenie pripojené cez vstup HDMI?",
				  			 "Chcete zastaviť nahrávanie a zmeniť zdroj na zariadenie pripojené cez vstup HDMI?"];
var pvrGuideJump    = ["Chcete otvoriť EPG?",
							"Chcete zastaviť proces nahrávania a vstúpiť do EPG?"];
var pvrMediaJump    = ["Chcete otvoriť médiá?",
							"Chcete zastaviť proces nahrávania a vstúpiť do Media?"];
var timeshiftExtra	= ["Želáte si zastaviť časový posun a zmeniť TV zmeniť kanál?",
						"Chcete zrušiť časový posun a zmeniť zdroj na zariadenie pripojené cez vstup SCART?",
						"Chcete zrušiť časový posun a zmeniť zdroj na zariadenie pripojené cez vstup HDMI?",
						"Časový posun nemožno spustiť na kódovanom kanáli.",
						"Chcete zrušiť časový posun a otvoriť EPG?",
						"Želáte si zastaviť časový posun a zmeniť TV na USB mód?",
						"Želáte si zastaviť časový posun a zmeniť vstupný zdroj?",
						"Zapojte USB kľúč na nahrávanie.",
						"Veľkosť disku nepostačuje.",
						"TV skončí aktuálny časový posun. Chcete ukončiť?"];
var timeshiftStatus	= ["Rýchlo dozadu","Ukončiť ","Hrať","Pauza","Rýchlo dopredu"];
var pvrPowerOffRemind= ["Nahrávanie v pohotovostnom režime","Pohot. režim","TV teraz nahráva. Chcete pokračovať v nahrávaní, keď je TV v pohotovostnom režime?"];
var timeshiftInitTitle= "Nastavenie disku";
var timeshiftInitReminds= ["K nastaveniu disku pre časový posun slúži tento návod. Prosím zvoľte si mód pre nastavenie.",
						 "Pre zlepšenie výkonu doporučujeme naformátovať USB disk. Týmto krokom zmažete všetky údaje.",
						 "Prosím zvoľte veľkosť súboru pre časový posun.",
						 "Formátuje sa",
						 "Nedostatok voľného miesta. ",
						 "Vytvára sa súbor pre časový posun",
						 "Testuje sa rýchlosť",
						 "Rýchlosť disku je príliš pomalá (< %f MB/sek) pre spustenie funkcie časového posunu!",
						 "Disk je pripravený pre časový posun. Pre zlepšenie výkonu však doporučujeme vymeniť disk (s rýchlosťou > %f MB/sek)",
						 "Disk je pripravený pre časový posun."];
var timeshiftInitButtons= ["Formátovať","Preskočiť","Zrušiť","OK","Dokončiť","Ukončiť"];
var timeshiftInitOther=["Rýchlosť disku:","MB/s"];

var selectChoice	= "Ste si istý?";
var chAtvStore		= "Uložiť ako XXXX";
var chEpgFirstGenreUK= ["Kino","Správy a informácie","ZÁBAVA","Šport","Detské","Vzdelávanie","Životný štýl","Dráma"];
var homePageTitleList = ["APLIKÁCIE","TV","VIDEÁ","Domovská stránka"];
var homePageFavAndAllName  = ["Obľúbené aplikácie","Všetky aplikácie"];
var homePageBackUp = ["Elektronická príručka","GuideOn"];
var homePageRemind   = ["Všetky funkcie sú k dispozícii len po pripojení na sieť.","Váš televízor zatiaľ nemá žiadne kanály. Programy sú k dispozícii po skenovaní kanálov.","Žiadny program","Hľadať kanály teraz?"];
var homePageHistory = ["História"];
var miracastTitle = ["WiFi TV link","Zariadenie TCL"];
var miracastRemind=["Funkcia Odkaz na WiFi TV umožňuje bezdrôtovo (tzn. bez káblov) zdieľať obrazovku a zvuk zo zariadenia, ako je napríklad smartfón alebo tablete, na televízore. Vďaka tomu môžete súčasne pozerať na televízore to isté, čo sa zobrazuje na smartfóne alebo tablete. Môžete napríklad na smartfóne spustiť video a zobrazovať ho súčasne na televízore, prípadne môžete použiť tablet ako herný ovládač s obsahom zobrazeným na veľkej obrazovke televízora.","Wi-Fi TV linka na TV je pripravená. Spustite a zdieľajte obrazovku zariadenia na televízore.","Povezovanje. Prosimo, počakajte!","Povezava ni bila uspešna!","Ni mogoče povezati. Prosimo, preverite!"];
var homePageLittleWin = ["Nastavenie","Médiá","Obľúbené kanály","Smart TV","EPG"];

var hbbtvStopRemind  = ["Ali želite zaustaviti predvajanje?"];
var colorSystem = ["Automaticky","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Stlačte VOĽBA pre viac informácií";
var emptyListInfo = "Neexistuje zariadenie pripojené k TV!";
var optionVideoListArray_1 = ["Režim pre obraz", "Prednastavený zvuk", "Režim prehrávania", "Režim obrazovky", "Režim 3D", 
							  "Prepnúť Ľ-P", "Hĺbka poľa", "Titulky", "Zvuková stopa", "Názov", "Kapitola", "Informácie"];
var optionVideoListArray_2 = ["Režim pre obraz", "Prednastavený zvuk", "Režim prehrávania", "Režim obrazovky", 
							  "Titulky", "Zvuková stopa", "Názov", "Kapitola", "Informácie"];
var bottomTipsText = ["Prehrať/Pozast.", "Rýchlo dozadu", "Rýchlo dopredu", "Zoznam skladieb", "Nastavenie"];
var picturePresetArray = ["Štandardné", "Dynamický", "Prírodné", "Kino", "Užívateľ"];
var videoPlayModeArray = ["Opakovať všetko", "Opakovať jednu", "Normálne"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Zoom alargado", "Zoom 2", "Zoom alargado 2", "Zoom expandido", "Automaticky"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Zoom máximo 16:9", "Automaticky"];
var Mode3DArray = ["Vypnúť", "2D na 3D", "Vedľa seba", "Hore a dole", "Prekl. riadkovanie"];
var videoOptionListArray = ["Vypnúť", "Stopa", "Titulky", "Názov", "Kapitola"];
var subMenuTitleText = "Titulky";
var langMenuTitleText = " Jazyk audia";
var titleMenuTitleText = "Názov";
var mode3DMenuTitleText = "Režim 3D";
var langInfoText = "Stopa";
var STOP_RESUME_INFO = "Stop-Pokračovať";
var playListName = "názov";
var eb_tips = "Tipy";
var ok_button = "OK";
var eb_info = ["Chyba dekódovania zvuku.", "Chyba dekódovania videa.", "Audio formát nie je podporovaný.", 
			   "Formát videa nie je podporovaný.", "Ne morem odpreti te datoteke.", "Napaka pri predvajanju, prosimo poskusite ponovno.",
			   "Format ni podprt.", "Ups! Predvajalnik je prenehal delovati.",
			   "Pot datoteke ne obstaja ne obstaja ali ni veljavna.\n Ponovno vstavite napravo za shranjevanje in poskusite znova.",
			   "Nadaljujem s predvajanjem od zadnje\n točke predvajanja?"];
var frameTitleText = "Nové zariadenie";
var eb_quit_info = "Naozaj chcete ukončiť?";
var eb_yes = "ÁNO";
var eb_no = "NIE";
var offinfo = "Vypnúť";
var naInfo = "Null";
var consoleInfoArray = ["Rýchlo dozadu", "Rýchlo dopredu", "Prehrať/Pozast.", "Zoznam skladieb"];
var cantOperateText = ["Funkcia nie je podporovaná."];
var chapterChangeInfo = "K dispozícii sú iba kapitoly 1 až XXXX.";
var metaDataArray = ["Názov/vydanie - metadáta: ", "Kapitola - metadáta: ", "Audio - metadáta: ", "Podtitulky - metadáta: "];
var metaTitleInfo = "Názov";
var metaChapterInfo = "Kapitola";
var videoLoadingInfo = "Analyzujem...";
var listLoadingInfo = "Načítavam...";
var pgInfo = "Zákonné hodnotenie: ";
var fileNameText = "názov";
var fileDateText = "Dátum";
var fileSizeText = "Veľkosť";
var fileDurationText = "Trvanie";
var fileDirectorText = "Režisér";
var fileCopyrightText = "Autorské práva";
var fileArtistText = "Umelec";
var fileAlbumText = "Album";
var fileGenreText = "Žáner";
var fileYearText = "Rok";
var fileGenreText = "Žáner";
var mainListArray = ["Všetky", "Obraz  ", "Video", "Hudba"];
var sortArray = ["názov", "Dátum"];
var parserArray = ["Normálne", "Rekurzívne  "];
var emptyTipsInfo = "Ups. Nobena podprta datoteka ni bila najdena.";
var emptyFolderInfo = "Ups. Nobena podprta datoteka ni bila najdena.";
var sortName = "Triediť podľa";
var parserName = "Prehľadávač";
var divx_str1 = "Registrácia DivX(R)";
var divx_str2 = "Zrušenie registrácie pre DivX(R)";
var infor_str = "Informácie";
var quickMenuEmptyText = "Žiadne dostupné možnosti.";

var musicSoundPresetArray = ["Štandardné", "Kino", "Hudba", "Jasný hlas", "Užívateľ"];
var musicInformationArray = ["názov", "Umelec", "Album", "Žáner:", "Rok:", "Trvanie:"];
var playListName = "názov";
var playTipsInfo = ["Predvajate prvo datoteko.", "Predvajate zadnje datoteka."]
var musicNameInfo = "Name";
var musicArtistInfo = "Umelec";
var musicAlbumInfo = "Informácie";
var optionSoundPresetInfo = "Prednastavený zvuk";
var optionBGMInfo = "Prehrávanie na pozadí";
var optionAudioOnlyInfo = "Len zvuk";
var optionInfoText = "Informácie";

var remotePhoneConnecte = "XXXX je pripojené k TV!";
var tvRemoteTitle		= "Diaľ. ovlád. TV";
var tvRemoteDeveloper	= "Aplikáciu vyvinula spoločnosť TCL";
var tvRemoteDeviceTitle	= "Názov zariadenia:";
var remoteOption		= ["Zdieľanie médií","Diaľkové ovládanie","Pomoc","Čo je...","Inteligentné pripojenie"];
var remotebottom		= " Stiahnite si \"TCL nScreen\" na váš smartphone ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Zdieľanie fotografií, videa a hudby s TV cez telefón.",
							"Kroky: \n   1. Kliknite na \"TCL nScreen\" na telefóne. Spojte telefón s TV cez rovnakú WiFi sieť;\n   2. Kliknite na \"Zdieľanie médií\" a prehľadávajte mediálne súbory;\n   3. Pošlite mediálne súbory do TV a prehrajte ich (s niektorou z nasledovných možností)",
							"      a) Potiahnite priečinok alebo súbor na ikonu TV vo vrchnej časti obrazovky.\n      b) Nasmerujte telefón na TV, ak chcete spustiť prvý súbor.\n      c) Na telefóne spustite prehrávanie média a kliknite na ikonu zdieľania.",
							"   4. Počas prehrávania na TV môžete zatrasením telefónu prehrať predchádzajúci alebo nasledujúci súbor."];
var controlReminds		= ["Použite telefón ako diaľkové ovládanie TV.",
							" ",
							"Kroky: \n   1. Kliknite na \"TCL nScreen\" na telefóne. Spojte telefón s TV cez rovnakú WiFi sieť;\n   2. Kliknite na \"Diaľkové ovládanie\" pre ovládanie TV."];
var helpDeviceWords		= "Práca s viacerými obrazovkami";
var helpBottom			= " V období technológie Cloud sú inteligentné zariadenia, ako napríklad telefóny a televízory, vzájomne prepojené. Podeľte sa o médiá so svojou rodinou na viacerých obrazovkách a ovládajte televízor pomocou telefónu! ";
var helpReminds			= ["Príprava\n   1. Stiahnite a nainštalujte \"TCL nScreen\" z Google Play alebo z Apple Store.\n   2. Spojte telefón s TV cez rovnakú WiFi sieť.",
							" ",
							"Odporúčaný telefón\n   1. Procesor: viac ako 800 MHz\n   2. Pamäť: aspoň 80 MB voľného miesta",
							" ",
							"Zavrnitev odgovornosti\n   Če možnost TV-daljinca na vašem telefonu ni na voljo, se obrnite na proizvajalca telefona. "];
var helpButtons			= ["Predch.","Ďalej"];
var aboutReminds		= ["Diaľ. ovlád. TV","Aplikáciu vyvinula spoločnosť TCL"];
var aboutExit			= "Ukončiť";
var smartReminds		= ["Rýchle a inteligentné spojenie medzi TV a telefónom.",
							" ",
							"Kroky \n   1. Pripojte TV a smartphone k rovnakej sieti LAN. Kliknite na \"TCL nScreen\" na smartphone.\n   2. Kliknite na \"Inteligentné pripojenie\" a naskenujte QR kód.\n   3. S televízorov v režime na prezeranie vysielania stlačte tlačidlo INFO na diaľkovom ovládaní TV na 4 sekundy. Otvorí sa QR kód cez celú obrazovku.",];
var smartQRReminds		= ["Kliknite na Inteligentné pripojenie v TCL nScreen na telefóne a naskenujte QR kód pre rýchle spojenie TV a telefónu.",
							"QR kód obsahuje informácie o účte LAN. Dobre ho uchovajte."];
							

var consoleTipArray = ["Predch.","Ďalej","Konzola","Zoznam skladieb"];							
var optionInfoArray = ["Režim pre obraz","Režim prehrávania","Trvanie","Efekt","Informácie"];

var playModeArray = ["Normálne","Miešať","Opakovať"];
var durationArray = ["Krátky (5 s)", "Stredný (10 s)", "Dlhý (15 s)"];
var effectArray = ["Ei mitään", "Rozplynúť", "Zotrieť napravo", "Zotrieť naľavo", "Zotrieť nahor", "Zotrieť nadol", "Obdĺžník-roztiahnuť", "Obdĺžník-stiahnuť", "Náhodne"];
var infoArray = ["Názov:","Veľkosť:","Dátum:","Miesto"];

var picturePresetBarTitleInfo = "Režim pre obraz";
var picturePresetBarArray = ["Štandardné","Dynamický","Štúdio","Kino","Užívateľ"];
var upTipsInfo = "Posun obrazu"; //add yums 2014-10-10
var consoleTipsArray = ["Konzola","Predch.","Ďalej","Zoznam skladieb","Nastavenie"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Stlačte opäť DOPRAVA pre zobrazenie ďalšieho obrázku","Stlačte opäť DOľaVA pre zobrazenie predchádzajúceho obrázku","Stlačte opäť NADOL pre zobrazenie zoznamu skladieb"]; //add yums 2014-10-10

var optionPvrListArray = ["Režim pre obraz","Prednastavený zvuk", "Režim obrazovky", "Režim 3D", "Titulky", "Zvuková stopa", "Informácie"];							
	
var titleSpanFirstArray = ["Ovládanie a pripojenie","Základné operácie","APLIKÁCIE","TV","Nastavenie","FAQ"];
var titleSpanSecondArray = [["Diaľkové ovládanie","Tlačidlá na panelu","Preprosto krmarjenje","TV pripojenie","TV pripojenie","TV pripojenie","Bezdrôtové"],["Spúšťač","Stavový riadok","Vir"],["Aplikácie na prehrávanie","Médiá","Diaľ. ovlád. TV"],["Nastaviť hlasitosť a kanál","Zoznam kanálov","EPG","Kanály","Obľúbené kanály"],["Nastavenie obrazu","Nastavenie zvuku","Nastavenie kanálu","Aktualiz. softvéru","Jazyk","Rodičovský zámok"],["Často kladené otázky","Často kladené otázky","Riešenie problémov","Riešenie problémov","Pogoji uporabe"]];
var contentSpan1_1Array = [["ZOZNAM:","INFO:","PONUKA:","NAPÁJANIE:","ZDROJ:","SPRIEVODCA:","SMART TV:"],["Zobrazuje zoznam kanálov","Zobrazuje informácie o programe","Prejde na domovskú stránku","Zapína napájanie alebo pohotovostný režim","Vyberte vstupný zdroj","Prikaže informacije elektronskega programskega vodnika (EPG)","Vodi vas na stran pametne televizije (Smart TV)"]];
var contentSpan1_2Array = ["Predch. kanál","Nasled. kanál","Zvýšenie hlasitosti","Zníženie hlasitosti","Prejde na domovskú stránku","Potvrdiť voľbu","Pohotovostný režim/zapnutie"];
var contentSpan1_3Array = ["OK/vodnik","Kanal gor","Kanal dol","Glasnost gor","Glasnost dol","Na voljo kot puščični gumbi z istimi funkcijami."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptér AV OUT","LAN","Smartphone","PC/Set-top box/DVD","Audio zosilňovač","Audio zosilňovač/monitor","Váš televízor nemusí mať všetky zásuvky."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Slúchadlá","Adaptér AV IN","SPDIF","Adaptér CMP AUDIO IN","Adaptér CMP IN (YPbPr)","USB zariadenia","USB zariadenia","Slúchadlá","DVC/herná konzola/Set-top box/DVD","Audio zosilňovač","DVC/herná konzola/Set-top box/DVD","Váš televízor nemusí mať všetky zásuvky."];
var contentSpan1_6Array = ["Spoločné rozhranie","SD","VGA","SCART","Mini SCART","ANTÉNA IN","Karta PCMCIA","Karta SD","PC","Set-top box/DVD","Anténa/kábel/satelit","Váš televízor nemusí mať všetky zásuvky."];
var contentSpan1_7Array = ["Tablet","PC","Smerovač","Telefón","TV"];

var contentSpan2Array = [["Stlačením tlačidiel so šípkou zobrazíte hlavnú stránku.","Potom stlačte OK pre spustenie odporúčaného programu alebo otvorte aplikáciu."],["Zobraziť dátum, sieť a zariadenia atď v pravom hornom rohu obrazovky."],["Vyberte vstupný zdroj zo zariadenia pripojeného k TV prostredníctvom rôznych portov, ako je TV, AV, HDMI atď."]];

var contentSpan3Array = ["Využívajte a prezerajte svoje obľúbené aplikácie prostredníctvom stránky Integentný TV","Oglejte si fotografije, glejte videoposnetke in predvajajte glasbo iz USB-naprave za shranjevanje.","Spojte TV a smartphone alebo tablet do rovnakej siete LAN.","Kliknite TCL nScreen ali daljinski upravljalnik na pametnem telefonu ali tabličnem računalniku. ","Zdieľajte fotografie, videá a hudbu na viacerých obrazovkách so svojou rodinou a ovládajte televízor prostredníctvom smartfónu "];

var contentSpan4Array = [["Stlačte HORE/DOLE pre prepínanie kanálov","Stlačte DOĽAVA/DOPRAVA pre nastavenie hlasitosti"],["Pritisnite LIST na daljinskem upravljalniku za pregled seznama kanalov","Stlačte HORE/DOLE pre výber kanálu"],["EPG je sprievodca na obrazovke, ktorý zobrazuje naplánované TV programy. Môžete prechádzať, vyberať, prezerať a nahrávať programy."],["Hľadanie a ukladanie kanálov"],["Pridajte alebo upravte vaše obľúbené kanály v Zozname kanálov"]];

var contentSpan5Array = ["Vychutnajte si svoje obľúbené programy prostredníctvom video aplikácií"];

var contentSpan6Array = [["Stlačením PONUKU pre zobrazenie možností nastavenia systému","Otvorte Nastavenia obrazu a hodnoty upravte"],["Stlačením PONUKU pre zobrazenie možností nastavenia systému","Otvorte Nastavenia zvuku a voľby nastavte"],["Stlačením PONUKU pre zobrazenie možností nastavenia systému","Otvorte Nastavenia kanálov a voľby nastavte"],["Aktualizovať televízor, keď je k dispozícii nová verzia softvéru"],["Môžete si vybrať preferovaný jazyk ponuky"],["Umožňuje rodičom uzamknúť kanály alebo programy, ktoré sú nevhodné pre deti"]];

var contentSpan7_1Array = [["Žiadny obraz, žiadny zvuk","Skontrolujte, či poistka alebo istič funguje.","Zapojte do elektrickej zásuvky iné elektrické zariadenie a uistite sa, že funguje a je zapnuté.","Zástrčka má v elektrickej zásuvke zlý kontakt","Skontrolujte zdroj signálu."],["Normálny obraz, žiadny zvuk","Stlačte tlačidlo na zvýšenie hlasitosti a zvýšite hlasitosť.","Nastavenie zvuku je nesprávne.","Chyba signálu z vysielania."],["Normálny zvuk, žiadny obraz","Nastavte jas a kontrast","Chyba signálu z vysielania.","Skontrolujte, či nie je v režime len zvuk."]];
var contentSpan7_2Array = [["Rušenie rádiového vysielania","Toto rušenie produkuje pohyblivé vlny alebo diagonálne pruhy a v niektorých prípadoch stratu kontrastu v obraze. Vyhľadajte a odstránte zdroj rušenia rádiového vysielania."],["Žiadna farba","Upravte nastavenia farieb.","Skúste iný kanál. Možno prijímate čiernobiely program."],["Ďiaľkové ovládanie nefunguje","Vymeňte batérie.","Batérie nie sú správne vložené. Hlavné napájanie TV nie je pripojené."]];
var contentSpan7_3Array = [["Obsah USB zariadenia nie je zobrazený","Zkontrolujte, že pamäťové USB zariadenie je kompatibilné s TV.","Skontrolujte, že TV podporuje formáty zvukových a obrazových súborov."],["Prehrávanie bez zvuku","TV prehrávač nepodporuje zvukový formát videa."],["Súbory sa neprehrávajú plynulo","Prenosový výkon pamäťového USB zariadenia môže obmedziť rýchlosť prenosu dát do televízoru."]];
var contentSpan7_4Array = [["Čomu mám venovať pozornosť pri aktualizácii softvéru","Žiadne výpadky napájania počas aktualizácie softvéru.","Pri aktualizácii softvéru sa vyhnite akýmkoľvek operáciám s diaľkovým ovládaním.","Buďte trpezliví, pretože aktualizácia softvéru môže trvať trochu dlhšie."],["Po aktualizácii softvéru nedochádza k žiadnym zreteľným zmenám rozhrania TV.","Za určitých podmienok môže pri aktualizácii SW dôjsť nielen k aktualizácii alebo pridaní nových funkcií, ale tiež ke zvýšeniu výkonnosti televízora bez zreteľných zmien rozhrania. Rozhranie televízora môže tiež niekedy zostať beze zmeny."]];
var termsTitle = "Pogoji uporabe";
var termsConditions = ["(Pravna izjava) družbe TCL – proizvajalca tega televizorja. ","Kvôli rozmanitosti možností výrobkov s podporou služieb inteligentného TV, ako aj kvôli obmedzeniam v dostupnom obsahu, nemusia byť určité funkcie, aplikácie a služby k dispozícii na všetkých zariadeniach alebo na všetkých územiach. Niektoré funkcie inteligentného TV tiež môžu vyžadovať ďalšie periférne zariadenia alebo členské poplatky, ktoré sa zakupujú osobitne. Ďalšie informácie o konkrétnom zariadení a dostupnosti obsahu nájdete na našej webovej stránke. Služby a dostupnosť obsahu prostredníctvom inteligentného TV sa môžu občas zmeniť bez predchádzajúceho oznámenia. \n   Všetok obsah a služby, ktoré sú k dispozícii prostredníctvom tohto zariadenia, prináležia tretím stranám a sú chránené autorským právom, patentmi, ochrannými známkami alebo inými zákonmi na ochranu duševného vlastníctva. Tento obsah a služby sa poskytujú výhradne na osobné nekomerčné používanie. Nesmiete používať žiadny obsah alebo služby spôsobom, ktorý nie je vlastníkom práv alebo poskytovateľom služieb povolený. Bez obmedzenia na predchádzajúce vyhlásenie, a ak to nie je výslovne povolené príslušným vlastníkom obsahu alebo poskytovateľom služieb, nesmiete upravovať, kopírovať, znova uverejňovať, odovzdávať, pridávať, prenášať, prekladať, predávať, vytvárať odvodeniny, zneužívať ani nijakým spôsobom rozširovať žiadny obsah alebo služby zobrazované prostredníctvom tohto zariadenia. \n   VÝSLOVNE BERIETE NA VEDOMIE A SÚHLASÍTE S TÝM, ŽE ZARIADENIE POUŽÍVATE NA SVOJE VÝHRADNÉ RIZIKO, A ŽE ÚPLNÉ RIZIKO USPOKOJIVEJ KVALITY, VÝKONU A PRESNOSTI NESIETE VY. ZARIADENIE A VŠETOK OBSAH TRETÍCH STRÁN A SLUŽBY SA POSKYTUJÚ „TAK AKO SÚ“ BEZ ZÁRUKY AKÉHOKOĽVEK DRUHU, VÝSLOVNEJ ALEBO PREDPOKLADANEJ. SPOLOČNOSŤ TCL VÝSLOVNE NEPOSKYTUJE ŽIADNE ZÁRUKY A PODMIENKY TYKAJÚCE SA ZARIADENIA A AKÉHOKOĽVEK OBSAHU A SLUŽIEB, ČI UŽ VÝSLOVNÉ ALEBO PREDPOKLADANÉ, OKREM INÉHO ZÁRUKY PREDAJNOSTI, USPOKOJIVEJ KVALITY, VHODNOSTI NA KONKRÉTNY ÚČEL, PRESNOSTI, POKOJNÉHO VYUŽÍVANIA A NEPORUŠOVANIA PRÁV TRETÍCH STRÁN. SPOLOČNOSŤ TCL NEZARUČUJE PRESNOSŤ, PLATNOSŤ, ČASOVÚ NEOBMEDZENOSŤ, LEGÁLNOSŤ ANI ÚPLNOSŤ ŽIADNEHO OBSAHU ALEBO SLUŽBY DOSTUPNÝCH PROSTREDNÍCTVOM TOHTO ZARIADENIA A NERUČÍ ZA TO, ŽE BUDE OBSAH ALEBO SLUŽBA SPĹŇAŤ VAŠE POŽIADAVKY, A ANI ZA TO, ŽE BUDE PREVÁDZKA ZARIADENIA ALEBO SLUŽIEB NEPRERUŠOVANÁ ALEBO BEZCHYBNÁ. ZA ŽIADNYCH OKOLNOSTÍ VRÁTANE NEDBANLIVOSTI NENESIE SPOLOČNOSŤ TCL ZMLUVNÚ ANI TRESTNOPRÁVNU ZODPOVEDNOSŤ ZA ŽIADNE PRIAME, NEPRIAME, NÁHODNÉ, ZVLÁŠTNE ANI NÁSLEDNÉ ŠKODY, NÁKLADY NA PRÁVNE ZASTUPOVANIE ANI AKÉKOĽVEK INÉ ŠKODY VZNIKNUTÉ V SÚVISLOSTI S POUŽÍVANÍM ZARIADENIA, OBSAHU ALEBO SLUŽIEB, KTORÉ Sú K DISPOZÍCII VÁM ALEBO TRETEJ STRANE, A TO ANI V PRÍPADE, ŽE STE BOLI S TAKÝMITO ŠKODAMI OBOZNÁMENÍ. \n   Služby tretích strán môžu byť kedykoľvek bez oznámenia zmenené, pozastavené, odstránené, ukončené alebo prerušené, prípadne k nim môže byť prístup zrušený. Spoločnosť TCL (výrobca televízorov pod značkou Thomson) neposkytuje žiadne záruky na to, že bude obsah alebo služby k dispozícii po určitú dobu. Obsah a služby sú prenášané tretími stranami. To znamená, že spoločnosť TCL neriadi siete a zariadenia určené na prenos. Bez obmedzenia na všeobecnosť tohto vyhlásenia spoločnosť TCL výslovne odmieta akúkoľvek zodpovednosť za zmenu, prerušenie, vypnutie, odstránenie alebo pozastavenie obsahu alebo služby, ktoré sú k dispozícii prostredníctvom tohto zariadenia. Spoločnosť TCL môže kedykoľvek a bez oznámenia zaviesť obmedzenia využitia alebo prístupu k určitým službám alebo obsahu. Spoločnosť TCL nezodpovedá za zákaznícke služby súvisiace s obsahom a službami. Všetky otázky alebo žiadosti o servis súvisiaci s obsahom alebo službami je potrebné smerovať priamo na príslušného poskytovateľa obsahu alebo služieb."];

var noChannelListRemind        = ["Žiadne kanály nenájdené. Zoznam kanálov je k dispozícii po skenovaní kanálov.","Vyhľadávanie kanálov"];
var closeSubtitleRemind   = "Funkcia bude k dispozícii, keď budú titulky vypnuté. Chcete teraz nastaviť?";

var estickerTitles = ["Vysoko realistické obrazy","Farby, ktoré ožívajú","Skvelý prirodzený pohyb","Kvalita dynamického obrazu","SR UHD upscaling","Svet 3D skúseností","Rýchlejší výkon","Budúci obsah 4K","Vychutnajte si online svet","Prístup k extra obsahu","Integrované digitálne tunery","Pripojiť všetky zariadenia","Rôzne zdroje 4K","USB obsah","Ultra rýchle WiFi","Mobilný obsah na TV","Obsah mobilného zariadenia","Lokálny obsah","Schválené DivX","Plynulý obraz","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Úžasný zážitok zo sledovania vďaka obrazu s štyrikrát viac detailmi oproti obrazovce Full HD na UHD","Široký škála farieb prináša emócie v každej scéne s živou červenou alebo smaragdovo zelenou","Interpolácia rámu 4K a podsvietenie proti problémom s rozostrením pri pohybu","Živosť pôvodného obrazu je zvýraznená a prináša naozaj dynamický prejav so skvelým kontrastom","Užite si televízne relácie a Blu-Ray disky ostrejší než kedykoľvek predtým vďaka technológii Super Resolution","Zažite 3D TV ready sledujte rôzne obsahy 3D","Viac zábavy a skúsenosti s Quad Core pre plynulú interakciu, zvýšenie výkonu","Podpora kodeku HEVC (H.265) pre nadchádzujúci štandard distribúcie videa 4K","Množstvo online aplikácií, VOD služieb, zachýtenie TV vysielaní a prezeranie webových stránok","S ďalšími doplnkovými službami a obsahom z vašich obľúbených staníc získate viac","Prístup k TV kanálom vo vysokom rozlíšení bez dodatočného set-top boxu","Jednoduché pripojenie mnohých digitálnych zdrojov, ktoré sú dostupné doma","TV pripravený na budúcnosť, ktorý dokáže prehrávať 4K 50/60 Hz cez HDMI 2.0 s HDCP 2.2","Video alebo fotografie priamo z USB disku, pevného disku alebo fotoaparátu na veľkej obrazovke v rozlíšení 4K","Posledná generácia 2x2 MIMO a AC štandard prináša bezkonkurenčnú rýchlosť prístupu na internet","Užite si fotografie, videá, aplikácie z mobilných zariadení na veľkej obrazovke vďaka technológii zrkadlenia obrazovky","Fotografie, videá, aplikácie z chytrého telefónu alebo tabletu môžete prezerať na veľkej obrazovke ","Zobrazenie miestneho obsahu, ako sú fotografie, videa zo zariadení pripojených k lokálnej sieti, na veľkej obrazovke","Prehrávanie vypožičaných alebo vlastných filmov chránených cez DivX","Ultra tenký rám a super tenké prevedenie","Testované a schválené od Canal+","Testované a schválené od TDT Premium"];							

var eManualTextArray = ["Elektronická príručka","Vsi grafični prikazi v priročniku so namenjeni zgolj ponazoritvi."];
var frontPanelRemind = "Predný panel zamknutý.";
var eRPRemind		 = "Režim Obchod nemôže uspokojiť požiadavku ERP. Ste si istý?";	
var noRelatedChannel = "Ni povezanega kanala";
var option0624Name          = ["BOP","BFS","Po každej udalosti","GetUserID","BGM","Reset all","Reset shop","NRM","DVB-T2 in izbira države","Režim HbbTV"];
var DVBT2AndChoice = ["Zapnúť","Po državi","Vypnúť"];
var hbbtvServiceRemind = "Služba HbbTV bude k dispozícii čoskoro.";
var insertWord = "Vložiť";		
var viewDetail = "Zobraziť detail";							
							

var remindOAD  = "Aktualizácia softwaru. Nový doporučený software môže byť dostupný na inom kanáli. Ak sa rozhodne ho stiahnuť, môže byť kanál automaticky zmenený. Želáte si vykonať to teraz?";

var LEDStatus = ["Blikanie", "Normálne"];
var netFlixRemind = "Táto funkcia preruší prístup k službám Netflix, kým sa znova neprihlásite.";
var ESNExplanation = "Elektronické sériové číslo";
var resetShopRemind = "Systém sa resetuje, nevypínajte TV";
var initialSelectOption = "Vyberte možnosť:";
var databaseRemind   = "Systém identifikoval databázu ako z neznámeho dôvodu poškodenú a automaticky ju znova zostaví. Pokračujte stlačením tlačidlo OK";
var Deactivation = "Deaktivovanie";
var oadFutureRemind = "Posodobitve programske opreme. Posodobitev nove priporočene programske opreme bo na voljo čez %s. Posodabljanje lahko traja nekaj časa in ekran se lahko zatemni. Ne ugašajte sprejemnika med posodabljanjem. Za sprejem posodobitev ob načrtovanem času prosimo, da pustite sprejemnik prižgan ali v stanju pripravljenosti.  Ali želie prejeti posodobitve?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Zvukový výstup";
var bt_soundOutPutTV = "TV reproduktory";
var bt_soundOutPutBT = "Zariadenie Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth a TV";
var bt_refreshBarName = "Zariadenia";
var bt_settingTips_On = "Zapnúť funkciu Bluetooth a hľadať zariadenia.";
var bt_settingTips_Finding = "Hľadám dostupné zariadenia...";
var bt_settingTips_NoDevice = "Žiadne zariadenie k dispozícii.";
var bt_deviceList_State_NoConnect = "Nepripojené";
var bt_deviceList_State_Connecting = "Pripájam…";
var bt_deviceList_State_Connected = "Pripojené";
var bt_deviceList_State_Paired = "Spárované";
var bt_deviceList_Conncect_Failed_Tips1 = "Pripojenie zlyhalo.";
var bt_deviceList_Conncect_Failed_Tips2 = "Potvrďte prosím, že funkcie Bluetooth XXX je zap";
var bt_deviceList_Conncect_Success = "Pripojené k zariadeniu Bluetooth.";
var bt_deviceList_Disconncect_Success = "Odpojené od zariadenia Bluetooth.";
var bt_deviceList_Disconnect = "Ste si istí, že chcete odpojiť od XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Párovanie Bluetooth";
var bt_bluetooth_Input_Pin = "Zadajte PIN:";
var bt_bluetooth_Output_Pin_Tip = "Zadať PIN XXXX cez klávesnicu.";
var bt_bluetooth_Pin_Wrong_Tip = "Nesprávny PIN";
var bt_bluetooth_Remove_Pair_Title = "Dotaz";
var bt_bluetooth_Remove_Pair_Ask = "Zabudnúť toto zariadenie?";
var bt_bluetooth_module_error = "Bluetooth modul chyba!";			
				
var netflixDialogOptions = ["OK","Neskôr","Už to znova nezobrazovať"];
var netflixDialogContent = "Na Netflix sú tisíce filmov na pozeranie, prejsť tam teraz?";
var netflixRemoteDialogContent = "Teraz je k dispozícii na zakúpenie diaľkové ovládanie s tlačidlom Netflix. Ďalšie informácie nájdete na tejto webovej stránke.\nhttps://store.tcleu.com";
														
var applyPictureModeSwitchValue	 = ["Aktuálny zdroj","Všetky zdroje"];
var audioDescriptionName = ["Zvukový popis","Reproduktor","Hlasitosť reproduktora","Slúchadlá","Hlasitosť slúchadiel","Hlasitosť AD","Zariadenie s rozhraním Bluetooth","Hlasitosť zariadenia s rozhraním Bluetooth"];
var audioDescriptionOptions = ["Vypnúť","Normálne","Zvukový popis"];							
var volumeOffRemind = 'V ponuke Nastavenia nastavte pre XXX možnosť „Zap.“.';
var switchSourceRemind   = " Je vlož. Chcete teraz prepnúť?";							
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Režim Šport";
var resetStadium = "Štadión";						
var netflix = "NETFLIX";
var golive = "GOLIVE";							
							
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Ukončiť","0","Zväčšiť+",
                       	   "Ukončiť",
                       	   "Zoznam","0","Text","Sprievodca","Zadať","Ukončiť","Ponuka","Titulky","Informácie",
                       	   "Zastaviť",
                       	   "Informácie","Ponuka","Ukončiť"
                       	   ];

var nscreenTips = "GuideOn pomáha používateľom pohybovať sa vo veľkom množstve obsahu.";
var nscreenContent = 'Postup: 1. Na telefóne klepnite na „TCL nScreen“.  Pripojte telefón k TV cez rovnakú sieť LAN. 2. Kliknutím na „GuideOn“ otvorte GuideOn. 3. GuideOn poskytuje podobné funkcie ako tlačený televízny program. Informuje používateľov, ktorý televízny obsah je k dispozícii.';
var singalBrokenoffTips = "Signál bol prerušený. Systém nedokáže dokončiť preberanie.";
var contentSpan1_1Array_AU = [["NAPÁJANIE:","ZDROJ:","PONUKA:","BACK:","INFO:","HOME:","EXIT:","ZOZNAM:"],
    ["Turns power on or standby mode","Select the input source",
        "Show TV settings menu","Go back to the Previous menu or exit a running APP",
        "Zobrazuje informácie o programe",
        "Prejde na domovskú stránku",
        "Go back to the Previous menu or exit a running APP",
        "Zobrazuje zoznam kanálov"]];
var guideDescriptionWords ="Naskenovaním kódu QR prevezmite aplikáciu GuideOn do telefónu";
var settingNoticeSourceName ="Automatický zdroj";
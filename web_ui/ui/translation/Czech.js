
var all_country 	= ["Austrálie","Rakousko","Belgie","Bulharsko","Chorvatsko","Česká republika","Dánsko","Finsko","Francie","Německo",
						"Řecko","Maďarsko","Itálie","Lucembursko","Nizozemsko","Norsko","Polsko","Portugalsko","Rumunsko","Rusko",
						"Srbsko","Slovinsko","Španělsko","Švédsko","Švýcarsko","Velká Británie","Nový Zéland"," "/*Arab*/,"Estonsko"," "/*Hebrew*/,
						"Lotyšsko","Slovensko","Turecko","Irsko","*","Filipíny","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Čína","*","*","*","*","*","*","Ostatní","Litva"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litva"];							
				
var all_language 	= ["Čeština","*","Dánsky","*","*","němčina","angličtina","francouzština","řecky","španělština",
						"Chorvatsky","*","italština","Maďarsky","Holandsky","Norsky","Polsky","Portugalsky","rusky","Rumunsky",
						"Slovinsky","Srbsky","Finsky","Švédsky","Bulharsky","Slovensky","*","*","Galsky","*",
						"Velšsky","arabsky","Irlandais","Lotyšsky","*","turecky","Estonsky","Holandsky"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Ориг. Аудио"/*Qaa*/,"Není definováno"/*Undetermined*/,"*","Neznámé",
						"Není definováno","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskicky","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Hviderussisk","*","*","Katalánsky","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiciánsky","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandsky","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litevsky",
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
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrajinsky","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Vyp","Zap"];
var okCancel		= ["Ok","Storno"];
var yesNo			= ["ANO","NE"];
var level			= ["Vyp","Nízká","Vysoké","Střední"];
var manualAuto		= ["Ručně","Automaticky"];
var homeShop		= ["Domů","Obchod"];
var picPreset		= ["Standardní","Dynamický","Přírodní","Kino","Digitální kino","Uživatel"];
var picColorTemp	= ["Studené","Normální","Teplé","Teplé2","Uživatel"];
var pic3dNavig		= ["Ručně","Automaticky","Poloautomaticky"];
var _3dOptions		= ["3D režim","3D na 2D","Přepínač L/P oka","Hloubka pole"];
var pic3DMode       = ["Vyp","2D na 3D","Snímky vedle sebe","Snímky pod sebou","Prokládání řádků"];
var picEcoOptions	= ["Šetření energie","Světelné čidlo","Lokální ztlumení","Smíšené tlumení"];
var picGeoOptions	= ["Geometrie","H. poloha","V. poloha","Čas","Fáze"];//Geometry 无翻译
var picAdWhiteBal	= ["Zvýraznit Č","Zvýraznit Z","Zvýraznit M","Posun Č","Posun Z","Posun M"];
var souOptions		= ["Předn. zvuk","Zůstatek","Zpoždění zvuku","SRS TSHD","Auto. ovl. hlasit.",
						"Typ SPDIF","SPDIF Delay","Umístění TV","Jazyk zvuku","Zvukový kanál",
						"Automatický popis","Typ s digitálním audio výstupem","Dolby profesionální nastavení"];
var soundOutputoptions =["DAP výstup TV reproduktoru","Externí AVR šifrovaný výstup"];
var inteligenteqoptions 	=["Soustředěný","Sytý"];						
var souSpdifType	= ["Automaticky"/*Dolby*/,"PCM","Vyp"];
var colorSpace      = ["Automaticky","Nativní","Uživatel","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Surround virtualizer","Dialog enhancer","Bass enhancer","Inteligentní hlasitost","Mediální inteligence","Graficky EQ","Inteligentní EQ" ];
var chOptions		= ["Vyhledat kanály","Seznam kanálů","EPG","Organizér","Diagnostika kanálů",
						"časový posun","Titulky","Teletext","Typ seznamu kanálů"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Intenzita signálu","Kvalita signálu","Frekvence (kHz)","ID služby","ID sítě","Název sítě:"];
var chScanOptions	= ["Země","Režim tuneru","Aut. hledání","Aktual. hledání","Ručně hledat anal",
						["Ruční skenování kabelu","Ruční skenování antény","Ruční ladění satelitu"],"Nastavení satelitní antény","Výběr oblíbené sítě","Vyčištění seznamu kanálů",];
var favNetDes		= "Vyberte svou oblíbenou síť";
var tuner			= ["Kabel","Anténa","Satelit"];//Satelite 无翻译
var passError		= "Nesprávné heslo.\nZadejte heslo znovu!";
var chType			= ["Analogové kanály:","Digitální kanály:"];
var chScanStatus	= ["Stav: Skenování","Stav: Vyhledávání dokončeno","Stav: Vyhledávání zrušeno","Stav: Chyba vyhledávání"];
var chScanPara		= ["Frekvence (kHz)","Modulace","Přenos.rychlost (Ksym/s)","ID sítě","Systém",
						"Jemné ladění","Intenzita signálu","Kvalita signálu","Režim sken.","Č. kanálu"];
var chScanParaMHZ      = ["Frekvence (MHz)"];
var chAtvManSys		= ["ZÁP EVR","VÝCH EVR","Spojené Království","Francie"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Automaticky"];
var chCleanDes		= "Chcete vymazat seznam kanálů?";
var chDeletDes		= "Přejete si kanál odstranit?";
var chOperator		= ["Ziggo","UPC","Ostatní"];
var chScanType		= ["Digitální & Analog","Digitální","Analogový"];
var chScanMode		= ["Plné","Dopředu","Rychle"];
var bookingModes	= ["Záznam","Připomenutí"];
var dayName			= ["ne","po","út","st","čt","pá","so"];
var monthName		= ["led", "úno","bře","dub","květen","čen","čec","srp","zář","říj","lis","pro"];
var filter			= ["Filtr","Typ","Podtyp"];
var chEpgFirstGenre	= ["Kino","Novinky","Záb. pořad","Sport","Pro děti","Hudba","Umění","Společnost","Vzdělávání","Volný čas","SPECIÁLNÍ"];
var chEpgSecondGenre= [["Dramatické umění","Detektivní","Dobrodružný","Scifi","Komedie","Telenovela","Romantika","Vážná","Film pro dospělé"," "," "," "],
						["Aktuální události","Počasí","Zprávy","Dokument","Diskuze"," "," "," "," "," "," "," "],
						["Záb. pořad","Soutěžní pořad","Varietní pořad","Talk Show"," "," "," "," "," "," "," "," "],
						["Sport","Zvláštní události","Sportovní magazíny","Fotbal","Tenis",
							"Kolektivní sporty","Atletika","Motoristické sporty","Vodní sporty","Zimní sporty",
							"Jezdectví","Bojové sporty"],
						["Pro děti","Předškolní děti","Zábava pro 6 až 14","Zábava pro 10 až 16","Informativní","Animované"," "," "," "," "," "," "," "],
						["Hudba","Rock","Vážná","Folk","Jazz","Muzikál","Balet"," "," "," "," "," "],
						["Umění","Užitné umění","Výtvarné umění","Náboženství","Populárně-kulturní",
							"Literatura","Film","Experimentální","Vysílání","Nová média",
							"Magazíny o umění","Móda"],
						["Společnost","Magazíny","Ekonomika","Významné osoby"," "," "," "," "," "," "," "," "],
						["Vzdělávání","Příroda","Technika","Lékařství","Cizí země","Společenské vědy","Další vzdělávání","Jazyky"," "," "," "," "],
						["Záliby","Turistika","Kutilství","Motorismus","Tělesná kondice a zdraví","Vaření","Reklamy","Zahrádkářství"," "," "," "," "],
						["Původní jazyk","ČB","Nepublikováno","Živé vysílání"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Přeskočit kanál","Seřadit kanály","Upravit kanál","Smazání kanálů","kanál swapu","kanál vložka"];
var chEditPara 		= ["Název sítě:","Číslo kanálu","Název kanálu","Frekvence","Barevný systém","Zvukový systém"];
var chSatTitles		= ["Typ satelitu","Nastavení satelitní antény","Vyberte satelit"];
var chSatEidtOptions= ["Název satelitu","Pozice","LNB Energie","Frekvence LNB (MHz)","Diseqc vstup",
						"Tón 22KHz","tone Burst","Frekvence (kHz)","Přenos.rychlost (Ksym/s)","Polarizace",
						"Intenzita signálu","Kvalita signálu","Stav satelitu"];
var chSatAutoPromt	= [["Vše","Síť"],
						["Vše","Volné"]];
var chSatAutoScanOptions=["Vyberte satelit","Režim sken.","Kanály"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzální",];
var chSatDiSEqCInput= ["Zakázat","A","B","C","D"];
var chSatTone22KHz	= ["Automaticky","Zap","Vyp"];
var chSatToneBurst	= ["Zakázat","tone Burst A","tone Burst B"];
var chSatPolarization= ["Horizontální","Vertikální"];
var chSatSetupOptions=["Typ antény","Tuner","Frekvence pásma"];
var chSatAntennaType= ["Jeden kabel","Univerzální"];
var chSatUserBands	= ["Uživatel. pásmo 1","Uživatel. pásmo 2","Uživatel. pásmo 3","Uživatel. pásmo 4","Uživatel. pásmo 5","Uživatel. pásmo 6","Uživatel. pásmo 7","Uživatel. pásmo 8"];
var chSatOthers		= ["Transpondér"];
var chSatSetupOthers= ["Vlastní"];
var pleaseSelectSat = "Vyberte prosím nejprve satelity!";
var subOptions		= ["Titulky","Jazyk digitálních titulků","Jazyk digitálních titulků 2","Typ titulků"];
var ttxOptionsCon      = ["Dekódování jaz. str.","Jazyk dig. teletextu"];
var subType			= ["Normální","Sluchově postižení"];
var netIntf     	= ["Ethernet  ","Bezdrátové"];
var netConnDes		= ["TV testuje síťové připojení.\nČekejte prosím",
						"Test připojení sítě proběhl úspěšně!",
						"Test připojení sítě se nezdařil."];
var netSsidError	= "Platná délka SSID je 1~32 znaků. Zkontrolujte SSID.";
var netOthers		= ["PIN kód "];
var netWlessAutoDes	= ["Než klepnete na tlačítko OK, zkontrolujte, zda následující PIN kód souhlasí s přístupovým bodem.",
						"Stiskněte tlačítko na přístupovém bodu maximálně 120 sekund předtím, než klepnete na tlačítko OK."];
var netConnRemind	= ["Nesprávné heslo!",
						"Připojuji se. Čekejte, prosím!",
						"Úspěšné připojení a získání IP adresy! ",
						"Porucha spojení",
						"TV vyhledává přístupové body\\nProsím čekejte ",
						"K TV není připojeno žádné bezdrátové zařízení! "];
var netWireIpOptions= ["Nastavení IP","Typ adresy","Adresa IP","Maska podsítě","Výchozí brána","Primární DNS","Sekundární DNS"];
var netWireConnRemind= ["Zadejte hodnotu mezi 0 a 255.",
						"Připojení úspěšné!",
						"Zadejte platnou adresu",
						"Připojení úspěšné!",
						"Neúspěšné připojení!",
						"Připojuji se. Čekejte, prosím!",
						"Zadejte prosím hodnotu od 1 do 223."];
var netFlixOptions	= ["Deaktivovat","ESN"];
var netFlixDes	 	= ["Opravdu chcete deaktivovat?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Aktualizace softwaru ";
var netUpdateDialogTitle = "Aktualizace software";
var netBGDownloadTitle 	= "Stahování";
var netUpdateLoadingPrompt= ["Hledání aktualizací, čekejte prosím!",
							"Probíhá stahování software... Čekejte, prosím!",
							"Během aktualizace softwaru NEVYPÍNEJTE televizor.",
                            "Povinná aktualizace software se stáhne automaticky na pozadí!"];
var netUpdatePrompt= ["Blahopřejeme – máte nejnovější verzi softwaru!",
						"Byla nalezena nová verze softwaru XXXX. Chcete ji stáhnout nyní? Stažení může chvíli trvat v závislosti na stavu sítě.",
						"Přihlášení selhalo!",
						"Příjem dat se nezdařil, zkuste prosím později!",
						"Analýza aktual. formátu definice kanálu selhala!",
						"Porucha spojení",
						"Stažení softwaru bylo úspěšné! Chcete zahájit flashování?",
						"Ztráta dat.Stahování selhalo!",
						"Kontrola programového balíku selhala, zkuste to prosím znovu!",
						"Síť nepracuje normálně.Zkontrolujte ji a připojte se znovu...",
						"Aktualizace selhala.Restartujte prosím TV!",
						"Soubor upgradu byl neočekávaně odstraněn. Upgrade po síti je nutné znovu provést.",
						"Software byl úspěšně stažen na pozadí. Chcete provést upgrade?"];
var netUpdateButtonText = ["Stáhnout", "Aktualizovat", "Později", "Nikdy", "Ok","Pokračovat"];
var autoDetectPrompt = ["Byla nalezena nová verze softwaru XXXX. Chcete ji stáhnout nyní? Stažení může chvíli trvat v závislosti na stavu sítě.",
						"Byla nalezena nová verze softwaru XXXX. Chcete aktualizovat nyní?",
						"Při posledním upgradu po síti došlo k přerušení. Upgrade je nutné znovu provést.",
                        "Stahování nové verze software XXXX není dokončeno. Chcete nyní pokračovat?",
                        "Software stažen, chcete nyní spustit aktualizaci?"];
var sysOptions		= ["Elektronická příručka","Jazyk OSD","Nastavení času","Zamknout","Nastavení vstupů",
						"Aktualizace softwaru ","Místo","Režim HbbTV","Cookies","Společné rozhraní",
						"Upřesňující nastavení","Reset shop","LED indikátor"];
var sysResetDes		= "Opravdu?";
var sysMenuLangOptions=["Jazyk","Preferovaný jazyk zvuku","2. upřednostňovaný jazyk zvuku"];
var sysTimerOptions	= ["Časové pásmo","Název regionu","Čas","Časovač vypnutí","Autom. pohot. režim", "Country region"];

var sysTimeZone		= ["Jako vysílač","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Vyp","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Vyp","4 hod.","6 hod.","8 hod."];
var sysRegionName	= ["Madrid ","Kanárková"];
var sysClockOptions	= ["Aut. synchronizace","Datum","Čas","Časovač zapnutí","Nastavení času",
						"Zapnout kanál","Časovač vypnutí","Nastavení času"];
var sysTimer		= ["Vyp","Denně","Jednou"];

var sysInputSet		= ["Bez štítku","DVD","Blu-ray","HDD","DVDR",
						"HD nahr.","Hra","VCR","PC","Digital STB",
						"HD dig STB","Kamera","Rekordér","Jiné"];
var sysAvVideoInput	= ["Automaticky","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Přes USB","Přes sítě","Dle kanálu"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Bezdrátově nelze nový software vyhledat!",
						"Byla nalezena nová verze softwaru XXXX. Chcete aktualizovat nyní?",
						"Vložte prosím USB disk.",
						"Kontrola programového balíku selhala, zkuste to prosím znovu!",
						"Během aktualizace firmwaru NEODPOJUJTE adaptér USB klíče a nevypínejte televizor !!",
						"Aktualizace software byla úspěšná.\nTV se nyní automaticky restartuje!",
						"Byla nalezena nová verze softwaru XXXX. Chcete ji stáhnout nyní? Stažení může chvíli trvat v závislosti na stavu sítě.",
						"Stahování",
						"Stažení softwaru bylo úspěšné! Chcete zahájit flashování?",
						"Chyb. aktual.! ",
						"Vyhledávání souborů aktualizace",
						"Software úspěšně aktualizován.\nRestartujte nyní televizor."];
var sysProductInfo	= ["Aktuální verze","Název produktu","Název výrobce","Název skříně"];
var sysCiDes		= ["Žádná karta CI."];
var sysAdOptions	= ["Registrace DivX®","Zrušení registrace DivX(R)","T-Link","Authorization Error","Potvrzení zrušení registrace",
						"Potvrzení půjčení","Pronájem vypršel","ID prohlášení Bluetooth"];
var sysRegistDes	= ["K přehrávání chráněných DivX videí musíte své zařízení zaregistrovat",
						"Registrační kód:",
						"Zaregistrujte se na http://vod.divx.com"];
var sysDregistDes	= ["Kód k zrušení registrace:",
						"Registraci zrušte na http://vod.divx.com",
						"Pokračovat v registraci?"];
var mediaAuthorization = ["Zařízení není oprávněno přehrávat toto chráněné video DivX(R)."];
var deregistrationConfrimation = ["Vaše zařízení je již zaregistrováno.","Opravdu chcete zrušit registraci?"];
var rentalConfirmation = "Z půjčeného disku DivX(R) bylo využito XXXX ze YYYY zhlédnutí. Pokračovat?";
var rentalExpired 	= "Pro zapůjčení DivX(R) bylo vyčerpáno XXXX shlédnutí z YYYY. Platnost zapůjčení DivX vypršela.";
						
						
var sysLockOptions	= ["Blokovat kanál","Zámek časového intervalu","Hodnocení obsahu","Blokovat vstup","Zámek předního panelu","Instalace zámku",
						"Změnit heslo","Max.hlasitost","Vyčistit vše"];
var sysTimeIntervals= ["Typ zámku","Čas spuštění ","Čas ukončení"];
var sysRatingOptions= ["Žádný","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Španělsko)"];
var changePass		= ["Změnit heslo","Nové Heslo","Potvrdit heslo"];
var changePassDes	= ["Nesprávné heslo.\nZadejte heslo znovu!",
						"Heslo se neshoduje.\nZadejte heslo znovu!",
						"Heslo úspěšně nastaveno!",
						"Kód je pro nastavení hesla příliš jednoduchý.\nVložte prosím znovu jiný!"];
var sysPowerOnChOptions= "Vybrat režim";
var sysPowerOnCh	= ["Poslední stav","Výběr uživatele"];
var netWlessSecu    = ["Otevřít","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Žádný","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Není podporováno"];
var netWlessSecu3	= ["Žádný","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Není podporováno"];
var netOptions		= ["Připojení k internetu","Rozhraní","Bezdrátová nastavení","Nastavení IP","Informace",
						"Test připojení","DLNA","Dálkový ovládač","Nastavení Netflix","Odkaz na WiFi TV",
						"Typ adresy","Adresa IP","Maska podsítě","Výchozí brána","Primární DNS",
						"Sekundární DNS","SSID","BSSID","Zadejte identifikátor SSID:","Uživatelské jméno"];
var chEditDes		= ["Duplicitní číslo kanálu!","Stiskněte červené tlačítko pro odstranění aktuálního znaku!","Neplatná čísla kanálu."];
var chEpgNoProgram	= "Nyní žádné programové info, nejprve prosím hledejte stanice!";
var chEpgWords		= ["Programový průvodce","Žádná programová data.","Kanál uzamčen!","Žádná informace o programu.","Žádný název programu."];
var chEpgBooking	= ["Plán info", "Číslo kanálu","Datum od","Čas spuštění ","Čas ukončení",
						"Typ opakování","Typ harmonogramu","Přidat","Nahradit","Změnit",
						"Přidat/upravit"];
var epgHotKey		= ["Předchozí den","Následující den","Filtr","Seznam nahrávek","Přidat do seznamu"];
var chEpgBookRemind	= ["Nesprávný počáteční čas","Nesprávný koncový čas","Duplicitní plán","Úspěšně uloženo.","Úspěšně smazáno."];
var chSchePara		= ["Seznam nahrávek","Čas spuštění ","Datum od","Název programu","Název kanálu",
						"Délka","Opakovat","Plán","Editovat","Vymazání"];
var dateTimer		= ["Jednou","Denně","Týdně"];
var scheduleDeleteReminds="Chcete odstranit tento záznam?";
var scheduleNoLists	= "Neexistuje žádný seznam nahrávek. Stiskněte červené tlačítko pro přidání.";
var chListWords		= ["Seznam kanálů","Vyberte seznam","Režim tuneru","Přidat k oblíbeným","Odstranit",
						"Vyberte seznam kanálů","Vyberte režim tuneru","Zaměnit"];
var chListType		= ["Vše","Digitální","Analogový","Rádio","Volné","Oblíbené"];
var chAutoScanOptions=["Vyberte operátora","Typ kanálu","Aut. hledání"];
var souSoundType	= ["Neplatné","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Duální1","Duální2","Duální2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Hudba","Kino","Jasný hlas","Standardní","Uživatel"];
var picAdRgbMode	= ["Vyp","Pouze červená","Pouze zelená","Pouze modrá"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamický Kontrast","Jasnost pohybu LED",
						"Pleťový tón","Režim filmu","Herní režim","Teplota barev","Vyvážení Bílé",
						"Zmrazit","Black Stretch","Zvětšit","Gamma","Režim HDMI","Vyvážení bílé 10P","Rozšíření barevného spektra",
						"Redukce rozmazání","Snížení třesu","Barevn prostor","Zřetelnost pohybu"];
var pic10Pwhite     = ["interval","Červená","Zelená","Modrá","Reset","Barva","Žlutá","Azurová","Purpurová"];
var picMotionClarity = ["Režim pohybu","Interpolace pohybu","Jasnost pohybu LED","Redukce rozmazání","Snížení třesu","Reset"];
var picMotionMode   = ["Automaticky","Film","Vyhlazení","Vymazat","Sport","Zákazník"];
var picResetDes		= "Všechna osobní nastavení budou resetována. Jste si jisti, že vybranou akci chcete provést?";
var pic10PReset     = "Jste si jisti, že chcete obnovit vyvážení bílé 10P?";
var picMotionReset  = "Chcete obnovit zřetelnost pohybu?";
var picColorSpaceReset    = "Jste si jisti, že chcete obnovit barevný prostor?";
var picOptions		= ["Režim obrazu",
						"Podsvícení"," Jas ","Kontrast","Sytost","Odstín","Ostrost","Teplota barev","Režim obrazovky","Aut. formát ",
						"Vylepšení pro sport","3D","3D navigace","ECO Nastavení","Geometrie",
						"Upřesňující nastavení","Použít režim snímku","Resetovat obraz"];
var picSize			= ["16:09", "Formát 4:3", "Formát 14:9", "Cinerama",
						"Μεγέθυνση 16:9", "Μεγέθυνση 16:9","Μεγέθυνση 14:9","Άπλωμα Μεγέθυνσης","Πλατιά Μεγέθυνση",
						"Μεγέθυνση 2","Πλατιά Μεγέθυνση 2","Screen Native Match","Dot by Dot","Původní","Panorama"];
var others			= ["Zvuk","Vysílání","Heslo","Stav","Uložit","Nahradit","Spustit","Konec","Hledat","Vymazání",
						"Žádný","Automaticky","Vyhledat","Zabezpečení","Připojit","Obnovení","Opakovat","Zastavit","Nastavení","Kanály",
						"Editovat","Vložit","Signál!","Dokončit","Stereo","Zvuk","Zdroj","Žádný zvuk","Tipy","Reset",
						"Zákazník","Nastavení","Uložit","Uživatel","Zavřít klávesnici","Režim zabezpečení","Každý den","Seznam PVR"];
var direction		= ["Vlevo","Vpravo","Nahoru","Dolů"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Neznámé"];
var soundChannels   = ["Neznámé","Mono","Dílčí","Duální mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2CH","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1K","7.1K","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Vlevo","Vpravo","Ostatní"];
var prompts			= ["Upravte nastavení obrazu, které nejlépe vyhovuje vašemu prostředí pro sledování.",
						"Upravit úroveň jasu. Čím blíže k 100, tím jasnější.",
						"Upravit úrovně kontrastu. Čím blíže k 100, tím větší jsou rozdíly mezi tmavým a světlým v obrazu.",
						"Upravit úrovně sytosti. Čím blíž k 100, tím jsou barvy sytější.",
						"Upravit úrovně ostrosti. Čím blíž k 100, tím jsou detaily ostřejší.",
						"Upravit úrovně podsvícení. Čím blíž k 100, tím je obrazovka jasnější.",
						"Upravit úrovně odstínů. Toto nastavení změní barevné tóny.",
						"Zvolte formát obrazu, který nejlépe vyhovuje sledovanému programu.",
						"Nakonfigurujte možnosti úspory energie.",
						"Upravte nastavení geometrie obrazovky při připojení PC zařízení.",
						"Vyberte více pokročilých nastavení obrazu.",
						"Obnovte výchozí hodnoty všech nastavení obrazu.",
						"Vyberte režim zvuku dle osobních preferencí.",
						"Upravte vyvážení hlasitosti mezi levým a pravým kanálem.",
						"Systém vyhledávání zvuku TruSurround HD poskytuje bohatý zvukový výkon a zřetelnost při nízkých a vysokých frekvencích.",
						"Formát digitálního rozhraní pro připojení digitálního zvukového výstupu televizoru do audio zařízení domácího kina.",
						"Vyberte jazyk zvuku dle osobních preferencí.",
						"Dejte zrakově postiženým možnost vychutnat si televizní programy.",
						"Otestujte si obraz, zvuk a signál vaší TV.",
						"Vyberte typ seznamu kanálů, který odpovídá televiznímu signálu.",
						"Zvolte jazyk titulků k programu, které budou zobrazeny v dolní části obrazovky.",
						"Zobrazit text a obrázky k aktuálnímu kanálu.",
						"Digital Living Network Alliance (DLNA). Vychutnejte si hudbu, fotografie a video prostřednictvím domácí sítě z jiných zařízení, jako je osobní počítač.",
						"Zobrazujte na televizoru obsahy vašeho chytrého telefonu a použijte jej jako dálkové ovládání pro televizor.",
						"Zobrazujte na obrazovce televizoru obsahy ze zařízení se systémem Android, která jsou kompatibilní s Miracast.",
						"Mějte televizor ve svých rukou.",
						"Vyberte pro zařízení název.",
						"Vyberte prostředí sledování.",
						"Obnovte výchozí hodnoty všech nastavení systému."];
var initialTitle	= ["Vítejte","Počáteční nastavení"];
var initialPrompt	= ["Spusťte počáteční nastavení nyní – vzrušující svět zážitků vás již očekává!",
						"Vyberte jazyk:",
						"Vyberte zemi:",
						"Vyberte své umístění:",
						"Vyberte typ připojení k síti:",
						"Vyberte režim kabelového připojení k síti:",
						"Nepodařilo se připojit k xxxxxxxxx! Připojte prosím zařízení podle následujícího schématu a zvolte Doleva pro reset.",
						"Připojeno k xxxxxxxxx! Zvolte prosím Doprava pro pokračování.",
						"1) Váš televizor již může mít vestavěný bezdrátový adaptér\n 2) V případě, že používáte USB adaptér, připojte jej do vašeho televizoru.  Potom zvolte režim bezdrátového připojení k síti",
						"Probíhá skenování. Čekejte, prosím...",
						"K TV není připojeno žádné bezdrátové zařízení! ",
						"Před stiskem tlačítka \"Další\" se ujistěte, že je následující PIN nainstalován na přístupovém bodu. ",
						"Stiskněte tlačítko na AP během 120 vteřin, než stisknete tlačítko Doprava!",
						"WPS (chráněné nastavení Wi-Fi)",
						"PIN (osobní identifikační číslo)",
						"PBC (konfigurace tlačítka)",
						"K následujícímu obsahu je možné přistupovat pouze s připojením k síti. Chcete přeskočit Nastavení sítě?",
						"K dispozici jsou nové softwarové aktualizace, které si můžete stáhnout. V závislosti na stavu vaší sítě to může nějakou dobu trvat.",
						"Aktualizace softwaru televizoru zajistí, že si budete moci vychutnat nejnovější funkce a služby.",
						"Nebudete využívat nejnovější funkce a služby. Chcete přeskočit aktualizaci softwaru?",
						"Stiskněte pravé tlačítko pro pokračování.",
						"Nevypínejte během aktualizace napájení, mohlo by dojít k poškození správného fungování televizoru.",
						"Pokud nechcete spustit aktualizace, vyberte NE.",
						"Probíhá aktualizace, čekejte prosím",
						"Software můžete také aktualizovat části SYSTÉM/AKTUALIZACE SOFTWARE.",
						"Při výběru země dojde k výzvě o nastavení hesla.\nNastavte prosím kód vaší televize a potvrďte ho.",
						"This code is too simple.\nPlease use different digits.",
						"Blahopřejeme vám! Počáteční nastavení skončeno. Můžete změnit konfiguraci přes hlavní nabídku a navazující dílčí nabídky.",
						"Vyberte režim zabezpečení:",
						"Vyberte prosím režim připojení k bezdrátové síti:",
						"Síť"];
var initNetCabAndDonRe = ["Žádný síťový kabel není připojen. Připojte síťový kabel!","Není k dispozici žádný vestavěný bezdrátový adaptér, ani bezdrátový USB adaptér."];
var initChPrompt = ["Uložení TV stanice","Vyberte typ skenování přes anténu.","Probíhá automatické ladění…","Bylo nalezeny anténní kanály:","Vyberte kabelový typ vyhledávání.","Prosím, vyberte jednoho operátora z následujícího seznamu.","Nakonfigurujte info o vyhledávání","Byly nalezeny následující kabelové kanály:","Z následujícího seznamu vyberte jednoho provozovatele","Vyberte satelity k vyhledávání nebo upravte vybraný satelit","Nastavte parametry satelitu","Byly nalezeny následující kanály. Vyhledávání kanálů je také možné znovu spustit v nabídce Kanál/Skenovat kanály"];
var initClockPrompt = ["Získat čas ze sítě!",
						"Nastavte prosím datum a čas:"];
var initialOptions	= ["Prostředí","Nastavení sítě","Aktualizace softwaru ","Instalace kanálů","Čas"];
var initialHotkeys	= ["Zpět","Vybrat","Další"];
var initLocations	= ["Domů","Obchod","Obchod a demo"];
var initNets		= ["Kabelem","Bezdrátové","Nemám připojení k síti"];
var initWireManuals	= ["Adresa IP","Maska podsítě","Výchozí brána","Primární DNS","Sekundární DNS"];
var initSoftUpdates = ["Aktualizovat nyní","Aktualizovat později"];
var initChannelIns	= ["Pokračovat","Nechci ukládat programy"];
var initChScanTypes	= ["Digitální & Analog","Digitální","Analogový","Nechci vyhledat"];
var initChDvbts		= ["Anténní kanály ATV:","Anténní kanály DTV:"];
var initChDvbcs		= ["Kabelové ATV kanály:","Kabelové DTV kanály:"];
var initChDvbss		= ["Satelitní kanály:"];
var initChDvbSOther	= ["Nechci vyhledat satelity"];
var initEndConnectedStatus= ["Odpojeno","Připojeno přes WiFi","Připojeno kabelem"];
var initEndInstallations= "Uloženo XXXX kanálů";
var initEndUpdate	= ["Aktualizováno"];

var audioScenes 	= ["Na stole","Nástěnný držák"];			
var screenSavers	= ["Nyní žádné programové info, nejprve prosím hledejte stanice!",
						"Žádný signál!",
						"Kódované",
						"Pouze data",
						"Zvukový program",
						"Žádný zvuk ani video",
						"Není k dispozici",
						"Žádný teletext",
						"Žádná programová data.",
						"Program uzamčen!",
						"Program uzamčen!\nStiskněte OK a zadejte svůj kód.",
						"Žádná informace o programu.",
						"Program škodlivý pro nezletilé.\nStikněte OK zadejte svůj kód.",
						"Kanál uzamčen!",
						"Kanál uzamčen!\nStiskněte OK a zadejte svůj kód.",
						"Vstup uzamčen!\nStiskněte OK a zadejte svůj kód.",
						"Není podporováno!",
						"Tato služba není nyní k dispozici",
						"Vstup uzamčen!",
						"Žádný název programu.",
						"Bez funkce"
						];
var chBookingPromt	= ["Aktuální kanál má naplánované nahrávání, TV začne nahrávat.",
						"Bylo nalezeno naplánované nahrávání.\n Nahrávejte přepnutím na XXXX",
						"Pro aktuální kanál je nastaveno připomenutí.",
						"Bylo nalezeno naplánované připomenutí.\n Přepněte na XXXX"];
var timeUnit		= ["s","min."];
var ciPromt			= ["Data sítě byla změněna. Chcete-li provést aktualizaci, můžete spustit sken pro aktualizaci. ",];
var othersPromt		= ["Počkejte prosím...",];
var menuOptions		= ["Obraz ","Zvuk","Kanál","Síť","Systém"];
var optionOptions	= ["Režim obrazu","Předn. zvuk","Zmrazit","T-Link","časový posun","PVR","Seznam nahrávek","Nastavení"];
var optionTLinkPromt= [["Automatické zapnutí","Autom. pohot. režim","Nab. průvodce"],
						["Zapnuto","Pohotov. režim","Zesilovač objem"]];
var powerPromt		= ["Televizor se brzy vypne! Akci zrušíte stisknutím jakéhokoli tlačítka."];
var ttxLanguage		= ["ZÁP EVR","VÝCH EVR","rusky","arabsky/hebrejsky","persky","arabsky","Hviderussisk","řecky","turecky"];
var ttxOptions		= ["Odkrýt","Procházet dílčí stránky","Jazyk","Strana alarmů","Newsflash"];
var weekday         = ["Neděle","Pondělí","úterý","Středa","čtvrtek","Pátek","Sobota"];
var lcnConfflict	= "Tento program má slabý příjem. K dispozici je jiná verze na kanálu %d.";
var inShopMode		= "Váš televizor je v režimu obchodu. Pro domácí režim vyberte \"Systém\" a v nabídce změňte \"Umístění\".";
var nitRefresh		= "Síťová data se změnila. Chcete provést aktualizační prohledávání?";
var picHDMIMode     = ["Automaticky","Grafické","Video"];

var glassRemind    	= ["Spárujte prosím 3D brýle s TV\n(Držte tlačítko Napájení na 3D brýlích).","Vaše 3D brýle jsou připojeny k televizoru ",""];
var pvrRemind 		= ["Nevytahujte USB zařízení a nepřerušujte napájení"];
var pvrConName   	= ["PVR","Programové informace:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Nahrané video je uloženo ve složce \"pvr\"."],"Zastavit","Záznam","hodina","Minuta","Délka","Tipy","Pomocí šipek nastavte délku nahrávání."];
var pvrDisRemind 	= "K nahrávání vložte USB klíčenku.";
var pvrRemindWords  = ["Chcete ukončit?",
							"Chcete zastavit nahrávání a prohlížet nahrané soubory?",
							"Disk je vyjmut",
							"Není dostatek volného místa.",
							"Žádné nahrané soubory. Začněte nahrávat.",
							"Osob. videorekordér nelze spustit v šifr. kanálu. ",
							"Funkce není dostupná",
							"Úspěšně uloženo.",
							"Chcete zastavit proces nahrávání a změnit vstupní zdroj?",
							"TV ukončí probíhající nahrávání. Chcete ukončit?",
							"Nahrávání PVR potřebuje pro správné fungování televizní signál. Zkontrolujte prosím signál."];
var pvrChangeCh 	= ["Chcete spustit kanál?",
							"Chcete zastavit proces nahrávání a změnit kanál?"];
var pvrChangeToPIN8	= ["Chcete změnit zdroj na zařízení připojené na vstup SCART?",
				    		"Chcete zastavit nahrávání a změnit zdroj na zařízení připojené na vstup SCART?"];
var pvrChangeToCEC  = ["Chcete změnit zdroj na zařízení připojené na vstup HDMI?",
				  			 "Chcete zastavit nahrávání a změnit zdroj na zařízení připojené na vstup HDMI?"];
var pvrGuideJump    = ["Chcete otevřít EPG?",
							"Chcete zastavit proces nahrávání a přejít na EPG?"];
var pvrMediaJump    = ["Chcete otevřít média?",
							"Chcete zastavit proces nahrávání a přejít na Media?"];
var timeshiftExtra	= ["Chcete zastavit časový posun a přepnout TV Změnit kanál?",
						"Chcete přerušit časový posun a změnit zdroj na zařízení připojené na vstup SCART?",
						"Chcete přerušit časový posun a změnit zdroj na zařízení připojené na vstup HDMI?",
						"Časový posun nelze spustit v šifr. kanálu. ",
						"Chcete přerušit časový posun a otevřít EPG?",
						"Chcete zastavit časový posun a přepnout TV do režimu USB?",
						"Chcete zastavit časový posun a přepnout Změnit vstupní zdroj?",
						"K nahrávání vložte USB klíčenku.",
						"Velikost disku není dostačující.",
						"TV ukončí aktuální časový posun. Chcete ukončit?"];
var timeshiftStatus	= ["Rychle zpět","Zastavit","Přehrát","Pauza","Rychle vpřed"];
var pvrPowerOffRemind= ["Nahrávání v pohotovostním režimu","Pohotov. režim","TV nyní nahrává, chcete pokračovat v záznamu, když bude televizor v pohotovostním režimu?"];
var timeshiftInitTitle= "Nastavení disku";
var timeshiftInitReminds= ["Tento průvodce se používá pro nastavení disku USB na časový posun. Vyberte prosím režim nastavení.",
						 "Pro lepší výkon doporučujeme disk USB naformátovat. Tím se vymažou všechna data.",
						 "Vyberte prosím velikost souboru pro časový posun.",
						 "Formátování",
						 "Není dostatek volného místa.",
						 "Vytvoření souboru časového posunu",
						 "Testování rychlosti",
						 "Rychlost disku je pro umožnění funkce časového posunu příliš nízká (< %f MB/sek)!",
						 "Disk je připraven pro časový posun. Avšak doporučujeme změnit disk (rychlost > %f MB/sek) pro lepší výkon.",
						 "Disk je připraven pro časový posun. "];
var timeshiftInitButtons= ["Formátovat","Přeskočit","Storno","Ok","Dokončit","Konec"];
var timeshiftInitOther=["Rychl. disku:","MB/s"];

var selectChoice	= "Opravdu?";
var chAtvStore		= "Uložit jako XXXX";
var chEpgFirstGenreUK= ["Kino","Novinky a fakta","ZÁBAVA","Sport","Pro děti","Vzdělávání","Životní styl","Dramatické umění"];
var homePageTitleList = ["Aplikace","TV","Videa","Domovská stránka"];
var homePageFavAndAllName  = ["Oblíbené aplikace","Všechny aplikace"];
var homePageBackUp = ["Elektronická příručka","PrůvodceZap"];
var homePageRemind   = ["Všechny funkce jsou k dispozici pouze po připojení k síti.","Vaše TV ještě nemá žádné kanály. Programy jsou dostupné po skenování kanálů.","Žádný program","Vyhledávát kanály nyní?"];
var homePageHistory = ["Historie"];
var miracastTitle = ["Odkaz na WiFi TV","Zařízení TCL"];
var miracastRemind=["Funkcia Odkaz na WiFi TV umožňuje bezdrôtovo (tzn. bez káblov) zdieľať obrazovku a zvuk zo zariadenia, ako je napríklad smartfón alebo tablete, na televízore. Vďaka tomu môžete súčasne pozerať na televízore to isté, čo sa zobrazuje na smartfóne alebo tablete. Môžete napríklad na smartfóne spustiť video a zobrazovať ho súčasne na televízore, prípadne môžete použiť tablet ako herný ovládač s obsahom zobrazeným na veľkej obrazovke televízora.","WiFi TV vstup na televizoru je připravený. Začněte prosím sdílet obrazovku svého zařízení s televizorem.","Připojuji se. Čekejte, prosím!","Neúspěšné připojení!","Připojení se nezdařilo. Zkontrolujte, prosím!"];
var homePageLittleWin = ["Nastavení","Média","Obl. kanály","Smart TV","EPG"];

var hbbtvStopRemind  = ["Chcete přerušit přehrávání?"];
var colorSystem = ["Automaticky","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Stiskněte VOLBA pro více informací";
var emptyListInfo = "K TV není připojen žádný přístroj!";
var optionVideoListArray_1 = ["Režim obrazu", "Předn. zvuk", "Režim přehrávání", "Režim obrazovky", "3D režim", 
							  "Přepínač L/P oka", "Hloubka pole", "Titulky", "Zvuková stopa", "Název", "Kapitola", "Info"];
var optionVideoListArray_2 = ["Režim obrazu", "Předn. zvuk", "Režim přehrávání", "Režim obrazovky", 
							  "Titulky", "Zvuková stopa", "Název", "Kapitola", "Info"];
var bottomTipsText = ["Přehrávání/pauza", "Rychle zpět", "Rychle vpřed", "Seznam skladeb", "Nastavení"];
var picturePresetArray = ["Standardní", "Dynamický", "Přírodní", "Kino", "Uživatel"];
var videoPlayModeArray = ["Opakovat vše", "Opakovat jednu", "Normální"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Πλατιά Μεγέθυνση", "Μεγέθυνση 2", "Πλατιά Μεγέθυνση 2", "Άπλωμα Μεγέθυνσης", "Automaticky"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Μεγέθυνση 14:9", "Μεγέθυνση 16:9", "Μεγέθυνση 16:9", "Automaticky"];
var Mode3DArray = ["Vyp", "2D na 3D", "Snímky vedle sebe", "Snímky pod sebou", "Prokládání řádků"];
var videoOptionListArray = ["Vyp", "Skladba", "Titulky", "Název", "Kapitola"];
var subMenuTitleText = "Titulky";
var langMenuTitleText = "Jazyk zvuku";
var titleMenuTitleText = "Název";
var mode3DMenuTitleText = "3D režim";
var langInfoText = "Skladba";
var STOP_RESUME_INFO = "Zastav.-pokrač.";
var playListName = " název";
var eb_tips = "Tipy";
var ok_button = "Ok";
var eb_info = ["Chyba dekódování zvuku.", "Chyba dekódování video.", "Zvukový formát není podporován.", 
			   "Videoformát není podporován.", "Tento soubor není možné otevřít.", "Chyba přehrávání, zkuste prosím znovu.",
			   "Nepodporovaný formát souboru.", "Přehrávač přestal správně fungovat.",
			   "Cesta k souboru neexistuje nebo je neplatná.\n Vložte znovu paměťové zařízení a opakujte.",
			   "Pokračovat v přehrávání od předchozího\n stavu přehrávání?"];
var frameTitleText = "Nové zařízení";
var eb_quit_info = "Určitě chcete odejít?";
var eb_yes = "ANO";
var eb_no = "NE";
var offinfo = "Vyp";
var naInfo = "Null";
var consoleInfoArray = ["Rychle zpět", "Rychle vpřed", "Přehrávání/pauza", "Seznam skladeb"];
var cantOperateText = ["Funkce není podporována."];
var chapterChangeInfo = "K dispozici jsou pouze kapitoly od 1 do XXXX.";
var metaDataArray = ["Titul/vydání - metadata: ", "Kapitola - metadata: ", "Audio - metadata: ", "Podtitulek - metadata: "];
var metaTitleInfo = "Název";
var metaChapterInfo = "Kapitola";
var videoLoadingInfo = "Probíhá analýza...";
var listLoadingInfo = "Probíhá nahrávání...";
var pgInfo = "Zákonné hodnocení: ";
var fileNameText = " název";
var fileDateText = "Datum";
var fileSizeText = "Velikost";
var fileDurationText = "Délka";
var fileDirectorText = "Režie";
var fileCopyrightText = "Copyright";
var fileArtistText = "Autor";
var fileAlbumText = "Album";
var fileGenreText = "Žánr";
var fileYearText = "Rok";
var fileGenreText = "Žánr";
var mainListArray = ["Vše", "Obraz ", "Video", "Hudba"];
var sortArray = [" název", "Datum"];
var parserArray = ["Normální", "Rekurzivní  "];
var emptyTipsInfo = "Nebyl nalezen žádný podporovaný soubor.";
var emptyFolderInfo = "Nebyl nalezen žádný podporovaný soubor.";
var sortName = "Seřadit podle";
var parserName = "Parser";
var divx_str1 = "Registrace DivX®";
var divx_str2 = "Zrušení registrace DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Žádné dostupné možnosti.";

var musicSoundPresetArray = ["Standardní", "Kino", "Hudba", "Jasný hlas", "Uživatel"];
var musicInformationArray = [" název", "Autor", "Album", "Žánr:", "Rok:", "Doba trvání:"];
var playListName = " název";
var playTipsInfo = ["Přehráváte první soubor.", "Přehráváte poslední soubor."]
var musicNameInfo = "Name";
var musicArtistInfo = "Autor";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Předn. zvuk";
var optionBGMInfo = "Přehrávat na pozadí";
var optionAudioOnlyInfo = "Pouze zvuk";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX připojeno k TV!";
var tvRemoteTitle		= "Dálkový ovládač";
var tvRemoteDeveloper	= "Aplikaci vyvinula společnost TCL";
var tvRemoteDeviceTitle	= "Název zařízení:";
var remoteOption		= ["Sdílení médií","Dálkové ovládání","Nápověda","O aplikaci","Chytré připojení"];
var remotebottom		= " Stáhněte si prosím \"TCL nScreen\" do svého telefonu ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Sdílení fotografií, videa a hudby s televizí přes telefon.",
							"Kroky: \n   1. Klepněte na \"TCL nScreen\" na telefonu. Spojte telefon s TV přes stejnou WiFi síť;\n   2. Klepněte na \"Sdílení médií\" p procházejte mediální soubory;\n   3. Pošlete média do televize pro přehrávání (s jednou z následujících možností)",
							"      a) Přetáhněte složku nebo soubor na ikonu televizoru v horní části obrazovky.\n      b) Mávněte telefonem směrem k televizoru a spusťte tak první soubor.\n      c) Přehrajte média v telefonu a klepněte na ikonu sdílení s televizorem.",
							"   4. Chcete-li během přehrávání v televizoru přehrát předchozí nebo další soubor, zatřeste telefonem."];
var controlReminds		= ["Použijte telefon jako dálkové ovládání k televizoru.",
							" ",
							"Kroky: \n   1. Klepněte na \"TCL nScreen\" na telefonu. Spojte telefon s TV přes stejnou WiFi síť;\n   2. Klepněte na \"Dálkové ovládání\" pro ovládání televizoru."];
var helpDeviceWords		= "Interakce s více obrazovkami";
var helpBottom			= " V době cloudových technologií jsou chytrá zařízení jako telefon a televizor vzájemně propojená. Sdílejte média se svou rodinou na jakékoliv obrazovce a ovládejte televizor ze svého telefonu! ";
var helpReminds			= ["Příprava\n   1. Stáhněte si a nainstalujte \"TCL nScreen\" z Google Play nebo z Apple Store.\n   2. Spojte telefon s TV přes stejnou WiFi síť.",
							" ",
							"Doporučení pro telefon\n   1. Procesor: více než 800 MHz\n   2. Úložiště: alespoň 80 MB volného místa",
							" ",
							"Vyloučení odpovědnosti\n  Není-li TCL nScreen dostupné na vašem telefonu, obraťte se prosím na výrobce telefonu. "];
var helpButtons			= ["Předešlý","Další"];
var aboutReminds		= ["Dálkový ovládač","Aplikaci vyvinula společnost TCL"];
var aboutExit			= "Konec";
var smartReminds		= ["Rychlé a inteligentní spojení mezi telefonem a televizorem.",
							" ",
							"Kroky \n   1. Připojte televizor a chytrý telefon ke stejné síti LAN. Klepněte na \"TCL nScreen\" na chytrém telefonu.\n   2. Klepněte na \"Chytré připojení\" pro naskenování QR kódu.\n   3. Když je televizor v režimu obrazu vysílání, stiskněte tlačítko INFO na dálkovém ovládání televizoru na 4 sekundy. Otevře se QR kód přes celou obrazovku.",];
var smartQRReminds		= ["Klepněte na chytré připojení v TCL nScreen na vašem telefonu a naskenujte QR kód pro rychlé spojení televize a telefonu.",
							"QR kód obsahuje informace o LAN účtu. Dobře jej prosím uchovejte."];
							

var consoleTipArray = ["Předešlý","Další","Konzola","Seznam skladeb"];							
var optionInfoArray = ["Režim obrazu","Režim přehrávání","Délka","Efekt","Info"];

var playModeArray = ["Normální","Náhodně","Opakovat"];
var durationArray = ["Krátký (5 s)", "Střední (10 s)", "Dlouhý (15 s)"];
var effectArray = ["Žádný", "Prolínání", "Posun doprava", "Posun doleva", "Posun nahoru", "Posun dolů", "Čtverec dovnitř", "Čtverec ven", "Náhodně"];
var infoArray = ["Název:","Velikost:","Datum:","Místo"];

var picturePresetBarTitleInfo = "Režim obrazu";
var picturePresetBarArray = ["Standardní","Dynamický","Studio","Kino","Uživatel"];
var upTipsInfo = "Posunutí obrázku"; //add yums 2014-10-10
var consoleTipsArray = ["Konzola","Předešlý","Další","Seznam skladeb","Nastavení"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Znovu stiskněte DOPRAVA pro přehrání dalšího obrázku","Znovu stiskněte DOLEVA pro přehrání předchozího obrázku","Znovu stiskněte DOLŮ pro zobrazení seznamu skladeb"]; //add yums 2014-10-10

var optionPvrListArray = ["Režim obrazu","Předn. zvuk", "Režim obrazovky", "3D režim", "Titulky", "Zvuková stopa", "Info"];							
	
var titleSpanFirstArray = ["Ovládání a připojení","Základní operace","Aplikace","TV","Nastavení","FAQ"];
var titleSpanSecondArray = [["Dálkové ovládání","Tlačítka na panelu","Snadná navigace","Připojení k TV","Připojení k TV","Připojení k TV","Bezdrátové"],["Spouštěč","Stavový řádek","Zdroj"],["Spušptěné aplikace","Média","Dálkový ovládač"],["Upravit kanál a hlasitost","Seznam kanálů","EPG","Kanály","Oblíbené kanály"],["Nastavení obrazu","Nastavení zvuku","Nastavení kanálu","Aktualizace softwaru ","Jazyk","Rodičovský zámek"],["Často kladené otázky","Často kladené otázky","Odstraňování problémů","Odstraňování problémů","Obchodní podmínky"]];
var contentSpan1_1Array = [["SEZNAM:","INFO:","NABÍDKA:","NAPÁJENÍ:","ZDROJ:","PRŮVODCE:","SMART TV:"],["Zobrazí seznam kanálů","Zobrazí informace o programu","Přejde na domovskou stránku","Zapnutí nebo pohotovostní režim","Volba vstupního zdroje","Zobrazí informace z EPG (elektronického programového průvodce)","Přejde na stránku Smart TV"]];
var contentSpan1_2Array = ["Předchozí kanál","Následující kanál","Zvýšit hlasitost","Snížit hlasitost","Přejde na domovskou stránku","Potvrdit volbu","Pohotovostní režim/Zapnutí"];
var contentSpan1_3Array = ["OK/Průvodce","O kanál výš","O kanál níž","Snížit hlasitost","Zvýšit hlasitost","Dostupné jako šipky v některých funkcích."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptér AV OUT","LAN","Chytrý telefon","PC/Set-top box/DVD","Audio zesilovač","Audio zesilovač/monitor","Váš televizor nemusí mít všechny zdířky."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Sluchátka","Adaptér AV IN","SPDIF","Adaptér CMP AUDIO IN","Adaptér CMP IN (YPbPr)","USB zařízení","USB zařízení","Sluchátka","DVC/herní konzole/Set-top box/DVD","Audio zesilovač","DVC/herní konzole/Set-top box/DVD","Váš televizor nemusí mít všechny zdířky."];
var contentSpan1_6Array = ["Společné rozhraní","SD","VGA","SCART","Mini SCART","ANTÉNA IN","Karta PCMCIA","Karta SD","PC","Set-top box/DVD","Anténa/kabel/satelit","Váš televizor nemusí mít všechny zdířky."];
var contentSpan1_7Array = ["Tablet","PC","Směrovač","Telefon","TV"];

var contentSpan2Array = [["Stiskněte šipky pro zobrazení domovské stránky.","Stiskněte tlačítko OK pro sledování některého z doporučených programů nebo pro otevření aplikace."],["Zobrazit datum, síť a zařízení atd. v horním pravém rohu obrazovky."],["Vyberte vstupní zdroj ze zařízení připojených k televizoru prostřednictvím různých portů, jako je TV, AV, HDMI atd."]];

var contentSpan3Array = ["Užijte si a procházejte své oblíbené aplikace prostřednictvím stránky Smart TV","Prohlížejte fotografie, sledujte video a přehrávejte hudbu z paměťového zařízení USB.","Připojte televizor a chytrý telefon nebo tablet ke stejné síti LAN","Klepněte na TCL nScreen nebo TCL nScreen na chytrém telefonu nebo tabletu","Sdílejte fotografie, videa a hudbu na více obrazovkách se svou rodinou a ovládejte televizor prostřednictvím svého chytrého telefonu."];

var contentSpan4Array = [["Stiskněte nahoru/dolů pro přepínání kanálů","Stiskněte doleva/doprava pro nastavení hlasitosti"],["Pro zobrazení kanálů stiskněte tlačítko LIST na dálkovém ovládání","Stiskněte nahoru/dolů pro výběr kanálu"],["EPG je průvodce na obrazovce, který zobrazuje naplánované televizní programy. Můžete procházet, vybírat, prohlížet a nahrávat programy."],["Hledat a uložit kanály"],["Přidejte nebo upravte své oblíbené kanály v seznamu kanálů"]];

var contentSpan5Array = ["Vychutnejte si své oblíbené programy prostřednictvím video aplikací"];

var contentSpan6Array = [["Stiskněte MENU pro zobrazení možností nastavení systému","Otevřete Nastavení obrazu pro úpravu hodnot"],["Stiskněte MENU pro zobrazení možností nastavení systému","Otevřete Nastavení zvuku pro nastavení možností"],["Stiskněte MENU pro zobrazení možností nastavení systému","Otevřete Nastavení kanálu pro nastavení možností"],["Aktualizovat televizor, když je k dispozici nová verze softwaru"],["Můžete si vybrat svůj preferovaný jazyk nabídky"],["Umožňuje rodičům zamknutí kanálů nebo programů, které nejsou vhodné pro děti"]];

var contentSpan7_1Array = [["Žádný obraz, žádný zvuk","Zkontrolujte, zda pojistka nebo jistič funguje.","Připojte do zásuvky jiné elektrické zařízení, abyste se ujistili, že zásuvka funguje nebo je zapnutá.","Elektrická zástrčka má špatný kontakt se zásuvkou","Zkontrolujte zdroj signálu."],["Normální obraz, žádný zvuk","Stiskněte tlačítko pro zvýšení hlasitosti a zvyšte hlasitost.","Nastavení zvuku je nesprávné.","Chyba signálu z vysílání."],["Normální zvuk, žádný obraz","Nastavte jas a kontrast","Chyba signálu z vysílání.","Zkontrolujte, zda není v režimu pouze zvuk."]];
var contentSpan7_2Array = [["Rušení rádiových frekvencí","Toto rušení je zdrojem pohybujícícj se vln nebo šikmých pruhů a v některých případech ztrátu kontrastu obrazu. Najděte a odstraňte zdroj rádiového rušení."],["Chybí barva","Upravte nastavení barev.","Vyzkoušejte jiný kanál. Možná přijímáte černobílý program."],["Dálkové ovládání nefunguje","Výměňte baterie.","Baterie nejsou správně vloženy. Hlavní napájení televizoru není připojeno."]];
var contentSpan7_3Array = [["Obsah USB zařízení není zobrazen","Zkontrolujte, že USB zařízení je kompatibilní s televizorem.","Zkontrolujte, že televize podporuje formáty souborů zvuku a obrazu."],["Přehrávání bez zvuku","Televizní přehrávač nepodporuje formát audio souboru videa."],["Soubory se nepřehrávají hladce","Přenosový výkon paměťového zařízení USB může omezit rychlost přenosu dat do televizoru."]];
var contentSpan7_4Array = [["Na co mám dávat pozor při aktualizaci software","Žádné výpadky elektřiny při aktualizaci softwaru.","Při aktualizaci software se vyvarujte jakýmkoliv operacím s dálkovým ovládáním.","Buďte trpěliví, protože aktualizace softwaru může trvat o něco déle."],["Po aktualizaci softwaru nedojde k žádným zjevným změnám rozhraní televizoru.","Za určitých podmínek může při aktualizaci software dojít nejen k aktualizaci nebo přidání nových funkcí, ale také ke zlepšení výkonu televizoru bez zjevných změn rozhraní. Rozhraní televizoru může někdy také zůstat nezměněné."]];
var termsTitle = "Obchodní podmínky";
var termsConditions = ["(Zákonné prohlášení) společnosti TCL - výrobce tohoto televizoru. ","Kvůli různým možnostem výrobků s vlastnostmi Smart TV – služby i omezení dostupného obsahu, určité vlastnosti, aplikace a služby nemusí být dostupné na všech zařízeních nebo ve všech oblastech. Některé funkce Smart TV mohou také vyžadovat doplňková periferní zařízení nebo poplatky za členství, které jsou prodávány samostatně. Více informací o konkrétních funkcích zařízení a dostupnosti obsahu naleznete na našich webových stránkách. Služby a dostupnost obsahu Smart TV podléhají čas od času změnám bez předchozího upozornění. \n   Veškerý obsah a služby přístupné přes toto zařízení náležejí třetím stranám a jsou chráněny autorským právem, patentem, ochrannou známkou a/nebo zákony o duševním vlastnictví. Takovýto obsah a služby jsou poskytovány výhradně pro osobní nekomerční využití. Nesmíte jakýkoliv obsah nebo služby používat způsobem, který není autorizován vlastníkem obsahu nebo poskytovatelem služeb. Výše uvedený software můžete používat bez omezení, je-li výslovně udělena autorizace příslušného obsahu vlastníkem nebo poskytovatelem služeb jinak nesmíte modifikovat, kopírovat, znovu publikovat, uploadovat, posílat, přenášet, překládat, prodávat a vytvářet nepůvodní práce, zneužívat nebo distribuovat jakýmkoliv způsobem nebo medializovat jakýkoliv obsah nebo služby zobrazené na tomto zařízení. \n   OSOBNĚ VÝSLOVNĚ UZNÁVÁTE A SOUHLASÍTE, ŽE UŽÍVÁNÍ TOHOTO ZAŘÍZENÍ JE NA VAŠE VÝHRADNÍ RIZIKO A ŽE CELÉ RIZIKO, POKUD JDE O USPOKOJIVOU KVALITU, CHOD ZAŘÍZENÍ A PŘESNOST, JE NA VÁS. ZAŘÍZENÍ, VEŠKERÝ OBSAH TŘETÍ STRANY A SLUŽBY JSOU POSKYTOVÁNY „TAK, JAK JSOU“ BEZ JAKÉKOLIV ZÁRUKY, AŤ JIŽ VYJÁDŘENÉ VÝSLOVNĚ ČI KONKLUDENTNĚ. SPOLEČNOST TCL SE VÝSLOVNĚ ZŘÍKÁ VŠECH ZÁRUK A PODMÍNEK TÝKAJÍCÍCH SE TOHOTO ZAŘÍZENÍ A JAKÉHOKOLIV OBSAHU A SLUŽEB VYJÁDŘENÝCH VÝSLOVNĚ NEBO KONKLUDENTNĚ, VČETNĚ NAPŘÍKLAD ZÁRUK PRODEJNOSTI, USPOKOJIVÉ KVALITY, ZPŮSOBILOSTI PRO URČITÝ ÚČEL, PŘESNOSTI, NERUŠENÉHO UŽÍVÁNÍ A BEZ NEOPRÁVNĚNÉHO ZÁSAHU DO PRÁV TŘETÍ STRANY. SPOLEČNOST TCL NEPOSKYTUJE ZÁRUKU NA PŘESNOST, PLATNOST, VČASNOST, LEGÁLNOST NEBO KOMPLETNOST JAKÉHOKOLIV OBSAHU NEBO SLUŽBY, KTERÉ JSOU DOSTUPNÉ PŘES TOTO ZAŘÍZENÍ A NEZARUČUJE, ŽE TOTO ZAŘÍZENÍ, OBSAH NEBO SLUŽBY BUDOU SPLŇOVAT VAŠE POŽADAVKY NEBO ŽE FUNKCE TOHOTO ZAŘÍZENÍ NEBO SLUŽEB NEBUDE NARUŠENA ČI BEZCHYBNÁ. ZA ŽÁDNÝCH OKOLNOSTÍ VČETNĚ NEDBALOSTI NEBUDE SPOLEČNOST TCL ODPOVĚDNÁ, AŤ JIŽ SMLUVNĚ, NEBO PŘI ÚMYSLNÉM PORUŠENÍ PRÁV, ZA JAKÉKOLIV PŘÍMÉ ČI NEPŘÍMÉ, ZVLÁŠTNÍ NEBO VYPLÝVAJÍCÍ ŠKODY, PENÁLE, VÝDAJE NEBO PŘI JAKÝCHKOLIV ŠKODÁCH VZNIKLÝCH Z NEBO VE SPOJENÍ S JAKOUKOLIV OBSAŽENOU INFORMACÍ NEBO V DŮSLEDKU POUŽITÍ TOHOTO ZAŘÍZENÍ NEBO V RÁMCI JAKÉHOKOLIV OBSAHU NEBO SLUŽBY, KE KTERÝM PŘISTUPUJETE VY NEBO JAKÁKOLIV TŘETÍ STRANA, I KDYBY BYLA VYJÁDŘENA MOŽNOST TAKOVÝCHTO ŠKOD. \n   Služby třetích stran mohou být změněny, pozastaveny, vyjmuty, ukončeny nebo přerušeny nebo přístup může být po určitou dobu blokován bez upozornění a společnost TCL (výrobce značky televizorů Thomson) neposkytuje žádná fakta nebo záruky týkajícího se jakéhokoliv obsahu nebo služby, která zůstává k dispozici po jakoukoliv dobu. Obsah a služby jsou přenášeny třetími stranami pomocí sítí a přenosovými prostředky, nad kterými nemá společnost TCL žádnou kontrolu. V rámci tohoto zřeknutí se práv v univerzálním pojetí bez omezení se společnost TCL výslovně zříká jakékoliv odpovědnosti nebo ručení za jakoukoliv změnu, přerušení, deaktivaci, vyjmutí nebo pozastavení jakéhokoliv obsahu nebo služby, ke kterým toto zařízení přistupuje. Společnost TCL může nařídit omezení v použití nebo v přístupu k určitým službám nebo obsahu za všech okolností a bez upozornění nebo odpovědnosti. Společnost TCL není zodpovědná ani neručí za služby zákazníkům, které se vztahují k obsahu nebo službám. Jakákoliv otázka či požadavek týkající se obsahu nebo služeb by měla být adresována přímo poskytovateli příslušného obsahu nebo poskytovatelům služeb."];

var noChannelListRemind        = ["Žádné kanály nenalezeny. Seznam kanálů je k dispozici po skenování kanálů.","Vyhledat kanály"];
var closeSubtitleRemind   = "Funkce bude k dispozici, když budou titulky vypnuty. Chcete nyní provést nastavení?";

var estickerTitles = ["Velmi realistické obrazy","Barvy, které ožívají","Velmi realistický pohyb","Kvalita dynamického obrazu","SR UHD upscaling","Svět 3D zkušeností","Rychlejší výkon","Budoucí obsah 4K","Užijte si online svět","Přístup k extra obsahu","Integrované digitální tunery","Připojit všechna zařízení","Různé zdroje 4K","Obsah USB","Ultra rychlé WiFi","Mobilní obsah v televizi","Obsah mobilního zařízení","Lokální obsah","Schváleno DivX","Nekonečný obraz","Kanál připraven","TDT Premium"];

var estickerDescriptions = ["Úžasný zážitek ze sledování díky obrazu se čtyřnásobným detailem obrazovky Full HD na UHD","Široká škála barev přináší emoce v každé scéně s živě červenou barvou a smaragdově zelenou","Interpolace rámu 4K a podsvícení proti problémům s rozostřením při pohybu","Živost původního obrazu je zvyšována s cílem vytvořit opravdu dynamický výraz s vynikajícím kontrastem","Užijte si televizní pořady a Blu-Ray disky ostřejší než kdy předtím díky technologii Super Resolution","Vychutnejte si televizor 3D ready sledujte různý 3D obsah","Příjemnější zábava díky Quad Core pro hladkou interakce, zvýšený výkon","Podpora kodeku HEVC (H.265) pro nadcházející standard distribuce videa 4K","Množství online aplikací, VOD služeb, sledování televize a brouzdání po Internetu","Více s doplňkovými službami a obsahem z vašeho oblíbeného televizního vysílání","Přístup k televizním kanálům ve vysokém rozlišení bez dalšího set-top boxu","Snadné připojení mnoha digitálních zdrojů, které jsou k dispozici doma","Televizor připravený na budoucnost, možnost přehrávání 4K 50/60Hz přes HDMI 2.0 s HDCP 2.2","Video nebo fotografie přímo z USB disku, pevného disku nebo fotoaparátu na velkou obrazovku v rozlišení 4K","Nejnovější generace 2x2 MIMO a AC standard přináší bezkonkurenční rychlost internetového připojení","Užijte si fotografie, videa, aplikace z mobilních zařízení na velké obrazovce díky technologii zrcadlení obrazovky","Fotografie, videa, aplikace z telefonu nebo tabletu lze zobrazit na velké obrazovce ","Zobrazit na velké obrazovce místní obsah, jako jsou fotografie, videa ze zařízení připojených k místní síti","Přehrát vypůjčené nebo vlastní filmy chráněné DivX","Ultra úzké zkosené hrany a super tenký design","Testováno a schváleno Canal+","Testováno a schváleno TDT Premium"];							

var eManualTextArray = ["Elektronická příručka","Všechny grafické prvky uvnitř jsou pouze pro ilustraci."];
var frontPanelRemind = "Čelní panel uzamčen.";
var eRPRemind		 = "Režim Shop (Obchod) nemůže splnit požadavek ERP. Opravdu?";	
var noRelatedChannel = "Žádný související kanál";
var option0624Name          = ["BOP","BFS","Výpis událostí","GetUserID","BGM","Reset all","Reset shop","NRM","Volba DVB-T2 a Země","Režim HbbTV"];
var DVBT2AndChoice = ["Zap","Podle země","Vyp"];
var hbbtvServiceRemind = "Služba HbbTV již bude brzy k dispozici.";
var insertWord = "Vložit";		
var viewDetail = "Zobrazit podrobnosti";							

var remindOAD  = "Aktualizace softwaru. Nová doporučovaná aktualizace softwaru může existovat na jiném kanálu. Akceptujete-li její stažení, může na kanál přejít automaticky. Chcete toto provést právě nyní?";

var LEDStatus = ["Blikání", "Normální"];
var netFlixRemind = "Touto funkcí přerušíte přístup ke službám společnosti Netflix do doby, než se opět přihlásíte.";
var ESNExplanation = "Elektronické sériové číslo";
var resetShopRemind = "Nyní probíhá resetování systému, nevypínejte televizor";
var initialSelectOption = "Vyberte jednu možnost:";
var databaseRemind   = "Systém identifikoval databázi jako z nějakého neznámého důvodu poškozenou a automaticky ji znovu vytvořil. Pokračujte stisknutím tlačítka OK";
var Deactivation = "Deaktivace";
var oadFutureRemind = "Aktualizace software. Nová doporučená aktualizace software bude k dispozici za %s. Aktualizace může nějakou dobu trvat a obrazovka může zčernat. Během aktualizace nevypínejte přijímač. Jestliže ji chcete nainstalovat, ponechejte v době aktualizace přijímač zapnut nebo v pohotovostním režimu. Chcete přjmout tuto aktualizaci?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Výstup zvuku";
var bt_soundOutPutTV = "TV reproduktory";
var bt_soundOutPutBT = "Zařízení Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth a TV";
var bt_refreshBarName = "Zařízení";
var bt_settingTips_On = "Zapne funkci Bluetooth a vyhledá zařízení.";
var bt_settingTips_Finding = "Hledám dostupná zařízení…";
var bt_settingTips_NoDevice = "Žádná dostupná zařízení.";
var bt_deviceList_State_NoConnect = "Nepřipojeno";
var bt_deviceList_State_Connecting = "Připojuji se…";
var bt_deviceList_State_Connected = "Připojeno";
var bt_deviceList_State_Paired = "Spárováno";
var bt_deviceList_Conncect_Failed_Tips1 = "Připojení selhalo.";
var bt_deviceList_Conncect_Failed_Tips2 = "Přesvědčte se, zda má XXX zapnuté Bluetooth";
var bt_deviceList_Conncect_Success = "Připojeno k zařízení Bluetooth.";
var bt_deviceList_Disconncect_Success = "Odpojeno od zařízení Bluetooth.";
var bt_deviceList_Disconnect = "Opravdu se chcete odpojit od XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Párování Bluetooth";
var bt_bluetooth_Input_Pin = "Zadejte prosím PIN:";
var bt_bluetooth_Output_Pin_Tip = "Zadejte PIN XXXX na klávesnici.";
var bt_bluetooth_Pin_Wrong_Tip = "Špatné PIN";
var bt_bluetooth_Remove_Pair_Title = "Dotaz";
var bt_bluetooth_Remove_Pair_Ask = "Zapomenout zařízení?";							
var bt_bluetooth_module_error = "Bluetooth modul chyba!";
var applyPictureModeSwitchValue	 = ["Aktuální zdroj","Všechny zdroje"];
var audioDescriptionName = ["Automatický popis","Reproduktor","Hlasitost reproduktoru","Sluchátka","Hlasitost sluchátek","AD Hlasitost","Zařízení BT","Hlasitost zařízení BT"];
var audioDescriptionOptions = ["Vyp","Normální","Automatický popis"];							
var volumeOffRemind = 'V nabídce Nastavení nastavte možnost XXX na hodnotu „Zapnout“.';	
var netflixDialogOptions = ["OK","Později","Tuto zprávu již nikdy nezobrazovat"];
var netflixDialogContent = "Služba Netflix nabízí ke sledování tisíce filmů, chcete na ní přejít?";
var netflixRemoteDialogContent = "V prodeji je dálkové ovládání s tlačítkem Netflix. Více informací získáte na uvedené webové stránce.\nhttps://store.tcleu.com";
var switchSourceRemind   = " Vloženo. Chcete nyní provést přepnutí?";

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Režim Sport";
var resetStadium = "Stadion";								
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Konec","0","Lupa+",
                       	   "Konec",
                       	   "Seznam","0","Text","Průvodce","Potvrdit","Konec","Menu","Titulky","Info",
                       	   "Konec",
                       	   "Info","Menu","Konec"
                       	   ];
var nscreenTips = "GuideOn helps the users navigate through this vast amount of contents.";
var nscreenContent = 'Kroky: 1. Klikněte na „TCL nScreen“ na telefonu.  Propojte telefon s televizorem prostřednictvím stejné LAN. 2. Klikněte na „GuideOn“ a otevřete aplikaci GuideOn. 3. Aplikace GuideOn slouží k podobnému účelu, jako tištěný televizní program a informuje uživatele o dostupném obsahu televize. ';
var singalBrokenoffTips = "Signál byl přerušen. Systém nemůže dokončit stahování.";
var contentSpan1_1Array_AU =[["NAPÁJENÍ:","ZDROJ:","NABÍDKA:","BACK:","INFO:","HOME:","EXIT:","SEZNAM:"],
                           ["Turns power on or standby mode","Select the input source",
                                "Show TV settings menu","Go back to the Previous menu or exit a running APP","Zobrazí informace o programu",
                             "Přejde na domovskou stránku","Go back to the Previous menu or exit a running APP","Zobrazí seznam kanálů"]];
var guideDescriptionWords ="Aplikaci GuideOn stáhnete na svůj telefon naskenováním QR kódu.";	
var settingNoticeSourceName ="Autom. zdroj";		     
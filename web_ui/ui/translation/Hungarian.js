
var all_country 	= ["Ausztrália","Ausztria","Belgium","Bulgária","Horvátország","Cseh Köztársaság","Dánia","Finnország","Franciaország","Németország",
						"Görögország","Magyarország","Olaszország","Luxemburg","Hollandia","Norvégia","Lengyelország","Portugália","Románia","Oroszország",
						"Szerbia","Szlovénia","Spanyolország","Svédország","Svájc","Egyesült Királyság","Új-Zéland"," "/*Arab*/,"Észtország"," "/*Hebrew*/,
						"Lettország","Szlovákia","Törökország","Írország","*","Fülöp-szigetek","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kína","*","*","*","*","*","*","Egyéb","Litvánia"/*新添加的，底层结构体中没有*/,"Ukrajna"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litvánia"];							
				
var all_language 	= ["Cseh","*","Dán","*","*","Német","angol","spanyol ","Görög","francia ",
						"Horvát","*","Olasz","Magyar","Holland","Norvég","Lengyel","Portugál","Orosz","Román",
						"Szlovén","Szerb","Finn","Svéd","Bolgár","Szlovák","*","*","Kelta","*",
						"Walesi","Arab","Irsk","Lett","*","Török","Észt","Holland"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Eredeti audió"/*Qaa*/,"Nincs meghatározva"/*Undetermined*/,"*","Ismeretlen",
						"Nincs meghatározva","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baszk","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Hviterussisk","*","*","Katalán","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galíciai","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Izlandi","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litván",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantikus","*","*","*","*",
						"*","*","*","Számi","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrán","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Ki","Be"];
var okCancel		= ["OK","Mégse"];
var yesNo			= ["IGEN","NEM"];
var level			= ["Ki","Alacsony","Magas","Közepes"];
var manualAuto		= ["Manuális","Automatikus"];
var homeShop		= ["Kezdőlap","Üzlet"];
var picPreset		= ["Szabvány","Dinamikus","Természetes","Mozi","Digitális mozi","Személyes"];
var picColorTemp	= ["Hűvös","Normál","Meleg","Meleg2","Felhasználó"];
var pic3dNavig		= ["Manuális","Automatikus","Félautomatikus"];
var _3dOptions		= ["3D mód","3D-ből 2D","B-J kapcsoló","Mélységélesség"];
var pic3DMode       = ["Ki","2D-ből 3D","Egymás mellett","Fent és lent","Sorösszefésüléses"];
var picEcoOptions	= ["Energiatakarékos","Fényérzékelő","Helyi fényerőcsökk.","Kevert fényerő-szabályozás"];
var picGeoOptions	= ["Oldalarány","Vízszintes helyzet","Függőleges helyzet","Óra","Fázis"];//Geometry 无翻译
var picAdWhiteBal	= ["R erősítés","G erősítés","B erősítés","R kiegyenlítés","G kiegyenlítés","B kiegyenlítés"];
var souOptions		= ["Beprogramozott hangzás","Balansz","Hang késleltetés","SRS TSHD","Aut. hangerő-szab.",
						"SPDIF-típus","SPDIF késleltetés","A TV elhelyezése","Audio nyelv","Hangcsatorna",
						"Narráció","Digitális hangkimenet típusa","Dolby Professional beállítása"];
var soundOutputoptions =["TV-hangszóró DAP kimenet","Külső AVR kódolt kimenet"];
var inteligenteqoptions 	=["Éles","Gazdag"];						
var souSpdifType	= ["Automatikus"/*Dolby*/,"PCM","Ki"];
var colorSpace      = ["Automatikus","Natív","Felhasználó","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Surround virtualizátor","Beszéd kiemelés","Mélyhang kiemelés","Intelligens hangerő","Media intelligence","Grafikus EQ","Intelligens EQ"];
var chOptions		= ["Csatornakeresés","Csatornalista","EPG","Szervező","Csatorna diagnosztika",
						"időeltolás","Felirat","Teletext","Csatornalista-típus"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Jelerősség","Jelminőség","Frekvencia (KHz) ","Szolg.azonosító","Hálózatazon.","Hálózat neve"];
var chScanOptions	= ["Ország","Tuner mód","Csatornakeresés","Keresés módosítása","Analóg man. keres.",
						["Kábel kézi keresés","Antenna kézi keresés","Műhold kézi hangolás"],"A műholdantenna beállítása","Kedvenc hálózat kiválasztása","Csatornalista törlés",];
var favNetDes		= "Kérjük, válassza ki a kedvenc hálózatát";
var tuner			= ["kábel","Antenna","Műhold"];//Satelite 无翻译
var passError		= "A jelszó hibás.\nKérjük, adja meg újra.";
var chType			= ["Analóg csatornák:","Digit. csatornák:"];
var chScanStatus	= ["Állapot: Keresés","Állapot: Keresés befejezve","Állapot: Keresés megszakítva","Állapot: Keresési hiba"];
var chScanPara		= ["Frekvencia (KHz) ","Moduláció","Szim.sebesség (Ksym/s)","Hálózatazon.","Rendszer",
						"Finomhangolás","Jelerősség","Jelminőség","Keresés mód","Csatorna azonosító"];
var chScanParaMHZ      = ["Frekvencia (MHz)"];
var chAtvManSys		= ["NY-EURÓPA","K-EURÓPA","Nagy-Britannia","Franciaország"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Automatikus"];
var chCleanDes		= "Megtisztítja a csatornalistát?";
var chDeletDes		= "Törölni akarja a csatornát?";
var chOperator		= ["Ziggo","UPC","Egyéb"];
var chScanType		= ["Digitális & Analóg","Digitális","Analóg"];
var chScanMode		= ["Teljes","Előre","Gyors"];
var bookingModes	= ["Felvétel","Emlékeztető"];
var dayName			= ["V","H","K","Sze","Cs","P","Szo"];
var monthName		= ["jan.", "febr.","márc.","ápr.","május","jún.","júl.","aug.","szept.","okt.","nov.","dec."];
var filter			= ["Filtar","Típus","Altípus"];
var chEpgFirstGenre	= ["Mozi","News","Show","Sport","Gyerekműsor","Zene","Művészet","Társadalmi","Oktatás","Szabadidő","SPECIÁLIS"];
var chEpgSecondGenre= [["Dráma","Krimi","Kaland","Sci-fi","Vígjáték","Szappanopera","Romantikus","Komoly","Erotikus"," "," "," "],
						["Aktuális kérdések","Időjárásjelentés","Hírmagazin","Dokumentumfilm","Vitaműsor"," "," "," "," "," "," "," "],
						["Show","Vetélkedő","Varieté","Beszélgető show"," "," "," "," "," "," "," "," "],
						["Sport","Különleges események","Sportmagazinok","Futball","Tenisz",
							"Csapatsportok","Atlétika","Motorsport","Vízi sport","Téli sport",
							"Lovaglás","Harcművészetek"],
						["Gyerekműsor","Bábfilm","Szórakoztató műsor 6-14 éveseknek","Szórakoztató műsor 10-16 éveseknek","Ismeretterjesztő","Rajzfilmek"," "," "," "," "," "," "," "],
						["Zene","Rock","Komoly","Népzene","Jazz","Zenei","balett"," "," "," "," "," "],
						["Művészet","Előadóművészet","Képzőművészet","Vallás","Populáris kultúra",
							"Irodalom","Film","Kísérleti","műsorsugárzás","Új média",
							"Művészeti magazinok","Divat"],
						["Társadalmi","magazinok","Gazdaság","Rendkívüli emberek"," "," "," "," "," "," "," "," "],
						["Oktatás","Természet","Technológia","Orvostudomány","Idegen tájak","Társadalomtudományok","Továbbtanulás","Nyelvek"," "," "," "," "],
						["Szabadidős tevékenységek","Utazás","Kézművesség","Motorozás","Fitnesz és egészség","Főzés","Hirdetés","Kertészkedés"," "," "," "," "],
						["Eredeti nyelv","Fekete-fehér","Nem publikált","Élő közvetítés"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Csatorna átugrása","Csat.rendez.","Csat.szerk.","Csatorna törlése","csatorna csereügylet","csatorna betét"];
var chEditPara 		= ["Hálózat neve","Csat.szám","Csat.név","Frekvencia","Színrendszer","Hangrendszer"];
var chSatTitles		= ["Műholdtípus","A műholdantenna beállítása","Műholdválasztás"];
var chSatEidtOptions= ["Műholdnév","Helyzet","LNB Hatalom","LNB frekvencia (MHz)","DiSEqC bemenet",
						"22 kHz-es hang","tone burst","Frekvencia (KHz) ","Szim.sebesség (Ksym/s)","Polarizáció",
						"Jelerősség","Jelminőség","Műholdállapot"];
var chSatAutoPromt	= [["Mind","Hálózat"],
						["Mind","Ingyenes"]];
var chSatAutoScanOptions=["Műholdválasztás","Keresés mód","Csatornák"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Egyetemes",];
var chSatDiSEqCInput= ["Letilt","A","B","C","D"];
var chSatTone22KHz	= ["Automatikus","Be","Ki"];
var chSatToneBurst	= ["Letilt","tone burst A","tone burst B"];
var chSatPolarization= ["Vízszintes","Függőleges"];
var chSatSetupOptions=["Antennatípus","Vevőegység","Sáv frekvencia"];
var chSatAntennaType= ["EgyKábel","Egyetemes"];
var chSatUserBands	= ["1. felhaszn. sáv","2. felhaszn. sáv","3. felhaszn. sáv","4. felhaszn. sáv","5. felhaszn. sáv","6. felhaszn. sáv","7. felhaszn. sáv","8. felhaszn. sáv"];
var chSatOthers		= ["Transzponder"];
var chSatSetupOthers= ["Meghatározott felhasználó"];
var pleaseSelectSat = "Kérjük, először válassza ki a műholdat!";
var subOptions		= ["Felirat","Digit. felir. nyelve","Digit. felir. nyelve 2","Felirat típusa"];
var ttxOptionsCon      = ["Oldalnyelv kódolása","Digit. teletext nyelve"];
var subType			= ["Normál","Csökk. hallókép."];
var netIntf     	= ["Ethernet ","Vezeték nélküli"];
var netConnDes		= ["A TV ellenőrzi a hálózati kapcsolatot.\nKérem, várjon",
						"A hálózati kapcsolódás ellenőrzése sikeres.",
						"A kapcsolódás ellenőrzése sikertelen."];
var netSsidError	= "Az SSID érvényes hossza 1~32 karakter. Kérjük, ellenőrizze az SSID-t.";
var netOthers		= ["PIN kód "];
var netWlessAutoDes	= ["Az OK-ra kattintás előtt ellenőrizze, hogy a következő PIN-kód telepítve van-e a hozzáférési pontra.",
						"Az OK megnyomása előtt 120 másodpercen belül nyomja meg a hozzáférési pont gombját."];
var netConnRemind	= ["A jelszó hibás.",
						"Kapcsolódás. Kérem, várjon!",
						"Kapcsolódás sikerült, IP-cím lekérve!",
						"Nincs kapcsolat",
						"A TV hozzáférési pontokat keres\nKérjük várjon",
						"Nem kapcsolódik vezeték nélküli eszköz a TV-hez!"];
var netWireIpOptions= ["IP-beállítás","Címtípus","IP-cím","Alhálózati maszk","Alapértelmezett átjáró","Elsődleges DNS","Másodlagos DNS"];
var netWireConnRemind= ["Írjon be egy 0 és 255 közötti értéket.",
						"Sikeres csatlakozás!",
						"Kérjük, érvényes címet adjon meg",
						"Sikeres csatlakozás!",
						"Kapcsolódás nem sikerült!",
						"Kapcsolódás. Kérem, várjon!",
						"Kérjük, 1-223 közti értéket adjon meg."];
var netFlixOptions	= ["Deaktivál","ESN"];
var netFlixDes	 	= ["Biztos deaktiválja?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Szoftverfrissítés";
var netUpdateDialogTitle = "Szoftverfrissítés";
var netBGDownloadTitle 	= "Letöltés";
var netUpdateLoadingPrompt= ["Frissítés keresése, kérjük, várjon!",
							"A szoftver frissítése folyamatban…Kérjük, várjon!",
							"A szoftver frissítése közben NE kapcsolja ki a TV-készüléket!",
                            "A szükséges szoftverfrissítés automatikusan töltődik a háttérben!"];
var netUpdatePrompt= ["Gratulálunk, szoftvere a legfrissebb verziójú!",
						"Van új szoftver, verziószáma XXXX. Letölti most? Hálózata állapotától függően lehet, hogy várnia kell kicsit.",
						"Nem sikerült a bejelentkezés!",
						"Sikertelen adatfevétel, kérjük, próbálkozzon újra később!",
						"Sikertelen az elemzésfrissítő XML!",
						"Nincs kapcsolat",
						"A szoftver letöltése sikeresen befejeződött. Megkezdi a flash-memória programozását?",
						"Elvesztek az adatok! Nem sikerült a letöltés!",
						"Csomagellenőrzési hiba. Próbálkozzon újra!",
						"Hálózati rendellenesség. Ellenőrizze és kapcsolódjon újra...",
						"Nem sikerült a frissítés. Indítsa újra a TV-t!",
						"A frissítő fájl váratlanul törlődött. Frissítsen ismét a hálózatról.",
						"A szoftver sikeresen letöltődött a háttérben. Frissít?"];
var netUpdateButtonText = ["Letölt", "Frissít", "Később", "Soha", "OK","Tovább"];
var autoDetectPrompt = ["Van új szoftver, verziószáma XXXX. Letölti most? Hálózata állapotától függően lehet, hogy várnia kell kicsit.",
						"Van új szoftver, verziószáma XXXX. Frissít most?",
						"A legutóbbi hálózati frissítést megszakították. Meg kell ismételni.",
                        "A(z) XXXX verziójú új szoftver letöltése még nem fejeződött be. Folytatni kívánja?",
                        "A szoftver letöltődött, kívánja most frissíteni?"];
var sysOptions		= ["E-kézikönyv","OSD nyelv","Idő beállítása","Zárolás","Bemeneti beállítások",
						"Szoftverfrissítés","Helyszín","HbbTV mód","Cookies","Műholdv. kártyany.",
						"A speciális beállítások","Gyári alapbeállítás","LED jelzőfény"];
var sysResetDes		= "Biztos benne?";
var sysMenuLangOptions=["Nyelv","Hangsáv preferált nyelve","Második választott nyelv"];
var sysTimerOptions	= ["Időzóna","Régiónév","Óra","Autom. Ki","Autom. készenlét", "Country region"];

var sysTimeZone		= ["Műsorsugárzóként","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Ki","10 perc","20 perc","30 perc","40 perc","50 perc","60 perc","90 perc","120 perc"];
var sysStandby		= ["Ki","4 óra","6 óra","8 óra"];
var sysRegionName	= ["Madrid ","Kanári-szigetek"];
var sysClockOptions	= ["Autom. szinkroniz.","Dátum","Idő","Bekapcsolási idő","Idő beállítása",
						"Bekapcs. csatorna","Kikapcsolási idő","Idő beállítása"];
var sysTimer		= ["Ki","Naponta","Egyszer"];

var sysInputSet		= ["Nincs címke","DVD","Blu-ray","HDD","DVDR",
						"HD rec.","Játék","VCR","PC","Digitális STB",
						"HD dig STB","Kamera","Felvevő","Egyéb"];
var sysAvVideoInput	= ["Automatikus","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["USB-n","Hálózatazon.","Csatornánként"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Nem található új szoftver az éterben!",
						"Van új szoftver, verziószáma XXXX. Frissít most?",
						"Kérem, dugja be az USB pendrive-ot.",
						"Csomagellenőrzési hiba. Próbálkozzon újra!",
						"NE húzza ki az USB kulcsot és ne kapcsolja ki a TV-készüléket a firmware frissítése közben!!",
						"A szoftver frissítése sikiresen megtörtént. \n TV automatikusan újraindul!",
						"Van új szoftver, verziószáma XXXX. Letölti most? Hálózata állapotától függően lehet, hogy várnia kell kicsit.",
						"Letöltés",
						"A szoftver letöltése sikeresen befejeződött. Megkezdi a flash-memória programozását?",
						"Nincs friss.!",
						"Frissítő fájlok keresése",
						"A szoftver frissítése sikeres.\nIndítsa újra a TV-készüléket."];
var sysProductInfo	= ["Jelenlegi verzió","Terméknév","Gyártó neve","Alapkészülék neve"];
var sysCiDes		= ["Nincs CI-kártya."];
var sysAdOptions	= ["DivX(R) regisztrálás","DivX(R) regisztráció megszüntetése","T-Link","Authorization Error","Regisztráció törlésének megerősítése",
						"Bérlet megerősítése","A bérleti idő lejárt","Bluetooth azonosító"];
var sysRegistDes	= ["DivX-védett videók lejátszásához regisztrálnia kell készülékét",
						"Regisztrációs kód:",
						"Itt regisztrálhat: http://vod.divx.com"];
var sysDregistDes	= ["Regisztrációt megszüntető kód:",
						"Regisztráció megszüntetése: http://vod.divx.com",
						"Folytatja a regisztrálást?"];
var mediaAuthorization = ["Az Ön készüléke nem jogosult e DivX(R)-védett videó lejátszására."];
var deregistrationConfrimation = ["Készüléke már regisztrálva van.","Tényleg deregisztrál?"];
var rentalConfirmation = "A DivX(R) YYYY nézésből XXXX nézést használt fel. Folytatja?";
var rentalExpired 	= "A DivX(R) kölcsönzés YYYY megnézési lehetőségből XXXX számút már felhasznált. A DivX kölcsönzés határideje lejárt.";
						
						
var sysLockOptions	= ["Csatornazár","Időintervallum lezárás","zár","Bementi blokk","Elülső panel zárja","Zár telepítése",
						"Jelszó módosítása","Max. hangerő","Mindent töröl"];
var sysTimeIntervals= ["Lezárás típusa","Kezdési idő","Befej. idő"];
var sysRatingOptions= ["Nincs","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Spanyolország)"];
var changePass		= ["Jelszó módosítása","Új jelszó","Jelszó megerős."];
var changePassDes	= ["A jelszó hibás.\nKérjük, adja meg újra.",
						"A jelszó nem egyezik.\nAdja meg újra.",
						"A jelszó beállítása sikeres!",
						"Ez a kód túl egyszerű, jelszónak nem jó.\nAdjon meg másikat!"];
var sysPowerOnChOptions= "Módválasztás";
var sysPowerOnCh	= ["Legutóbbi állapot","Felhaszn által kivál."];
var netWlessSecu    = ["Nyitott","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nincs","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Nem támogatott."];
var netWlessSecu3	= ["Nincs","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nem támogatott."];
var netOptions		= ["Internet csatlakozás","Csatlakozó","WiFi beállítások","IP-beállítások","Információk",
						"Csatlakozásellenőrzés","DLNA","TV távvezérlő","Netfix-beállítások","WiFi TV link",
						"Címtípus","IP-cím","Alhálózati maszk","Alapértelmezett átjáró","Elsődleges DNS",
						"Másodlagos DNS","SSID","BSSID","Írja be a SSID-t:","Felhasználó azonosítója"];
var chEditDes		= ["Van már ilyen csatornaszám!","Nyomja meg a piros gombot, hogy törölje ezt a karaktert!","Érvénytelen csatornaszámok"];
var chEpgNoProgram	= "Jelenleg nem áll rendelkezésre programinformáció, kérjük, elsőzör válassza ki a csatornákat!";
var chEpgWords		= ["Műsortájékoztató","Nincs műsor adat.","A csatorna zárolva van!","Nincsenek műsor részletek.","Nincs program cím."];
var chEpgBooking	= ["Menetrend információk", "Csat.szám","Kezdés dátuma","Kezdési idő","Befej. idő",
						"Ismétlés típusa","Ütemezés típusa","Hozzáadása","Csere","Módosít",
						"Hozzáad/Változtat"];
var epgHotKey		= ["Előző nap","Következő nap","Filtar","Ütemezési lista","Ütemezés hozzáadása"];
var chEpgBookRemind	= ["Helytelen kezdési időpont","Helytelen befejezési időpont","Van már ilyen ütemezés","Sikeres mentés.","Sikeres törlés."];
var chSchePara		= ["Ütemezési lista","Kezdési idő","Kezdés dátuma","Program cím","Csat.név",
						"Időtartam","Ismétlés","Ütemez","Szerkeszt","Törlés"];
var dateTimer		= ["Egyszer","Naponta","Heti"];
var scheduleDeleteReminds="Törölni akarja ezt ütemezést?";
var scheduleNoLists	= "Nincs ütemezési lista. Piros gombbal adjon meg egyet.";
var chListWords		= ["Csatornalista","Listaválasztás","Tuner mód","Felvétel a kedvencek közé","Eltávolítás",
						"Csatornalista választás","Tuner mód választás","Csere"];
var chListType		= ["Mind","Digitális","Analóg","Rádió","Ingyenes","Kedvencek"];
var chAutoScanOptions=["Válasszon üzemeltetőt","Csatorna típus","Csatornakeresés"];
var souSoundType	= ["Érvénytelen","Monó","Monó","Sztereó","Sztereó",
						"Monó","Sztereó","Dual1","Dual2","Dual2",
						"Nicam monó","Nicam sztereó","Nicam kettős1","Nicam kettős2","NICAM duális",
						"Monó","LL","RR","LR"];
var souPreset		= ["Zene","Mozi","Tiszta hang","Szabvány","Személyes"];
var picAdRgbMode	= ["Ki","Csak piros","Csak zöld","Csak kék"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dinamikus Kontraszt","LED kép tisztasága",
						"Színtónus","Film mód","Játék mód","Színhőmérséklet","Fehéregyensúly",
						"képkimerevítés","Black Stretch","Túlpásztázás","Gamma","HDMI mód","10P fehéregyensúly","Színkiterjesztés",
						"Foltcsökkentés","Vibrálás csökkentése","Színtér","A kép tisztasága"];
var pic10Pwhite     = ["Intervallum","Piros","Zöld","Kék","Alaphelyzet","Szín","Sárga","Cián","Magenta"];
var picMotionClarity = ["A kép módja","A kép interpolációja","LED kép tisztasága","Foltcsökkentés","Vibrálás csökkentése","Alaphelyzet"];
var picMotionMode   = ["Automatikus","Film","Sima","Törlés","Sport","Vásárló"];
var picResetDes		= "Minden személyes beállítás törlődni fog. Biztosan a kiválasztott lépést szeretné végrehajtani?";
var pic10PReset     = "Biztosan törölni szeretné a 10P fehéregyensúlyt?";
var picMotionReset  = "Törölni szeretné a Kép tisztaságát?";
var picColorSpaceReset    = "Biztosan törölni szeretné a színteret?";
var picOptions		= ["Képmód",
						"Háttérvilágítás","Fényerő","Kontraszt","Telítettség","ÁRNYALAT","Élesség","Színhőmérséklet","Képernyő mód","Automatikus formátum",
						"Sportfejlesztés","3D","3D navigálás","ECO Beállítások","Oldalarány",
						"A speciális beállítások","Képüzemmód alkalmazása","Kép visszaállítás"];
var picSize			= ["16:9 formátum", "4:3 formátum", "14:9 formátum", "Cinerama",
						"16:9 Zoom", "16:9 Zoom up","14:9 Zoom","Rastezljivi zoom","Široki zoom",
						"Zoom 2","Široki zoom 2","Képernyő natív felbontása","Točka po točka","Eredeti","Panoráma"];
var others			= ["Hangerő","Műsorszórás","Jelszó","Állapot","Mentés","Csere","Kezdés","Kilépés","Keresés","Törlés",
						"Nincs","Automatikus","Keresés","Biztonság","Kapcsolódás","Frissítés","Újra"," Leállítása","Beállítások","Csatornák",
						"Szerkeszt","Beszúr","Jel.","Befejezés","Sztereó","Hang","Fő-","Nincs hang.","Tippek","Alaphelyzet",
						"Vásárló","Beállítás","Tárolás","Felhasználó","Billentyűzet lezárása","Biztonsági mód","Minden nap","PVR lista"];
var direction		= ["Bal","Jobb","Fel","Le"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Ismeretlen"];
var soundChannels   = ["Ismeretlen","Monó","Al-","Kettős mono","Sztereó","Stereo Sub","Stereo Dolby Surround","Térhatású 2CH","Térhatású","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Bal","Jobb","Egyéb"];
var prompts			= ["Állítsa a képet nézési környezetéhez legjobban illőre.",
						"Állítsa a fényerő szintet. 100-hoz közeledve növeli a fényerőt.",
						"Állítsa a kontraszt szintet. 100-hoz közeledve nő a sötét-fényes különbség.",
						"Állítsa a telítettség szintet. 100-hoz közeledve erősödnek a színek.",
						"Állítsa az élességi szintet. 100-hoz közeledve tisztulnak a részletek.",
						"Állítsa a háttérfény szintet. 100-hoz közeledve fényesedik a képernyő.",
						"Állítson árnyalat szintet. Változtatja a színtónusokat.",
						"Válassza a nézett műsorhoz legjobban illő képformátumot.",
						"Az energiatakarékossági beállításokat konfigurálja.",
						"Állítsa a képernyő geometriát, ha PC-hez kapcsolódik.",
						"További speciális képbeállításokat kínál.",
						"Alapértelmezettre állítja vissza az összes képbeállítást.",
						"Igény szerinti hangmód-beállítást kínál.",
						"A bal és jobb csatorna közötti egyensúlyt állítja.",
						"Az SRS TruSurround HD hangsugárzó rendszer telt hangminőséget és hang tisztaságot ad kis és nagy frekvenciákon.",
						"DIF digitális interfész formátum kapcsolat köti össze a TV digitális hang kimenetét a házimozi hang berendezéssel.",
						"Igény szerinti hangsáv nyelv beállítást kínál.",
						"Tegye lehetővé a látássérültek számára a televíziós műsorok nézését.",
						"Tesztelje TV-je képét, hangját és jelét.",
						"A TV jelnek megfelelő csatornalista-típust kínál.",
						"Válassza ki a képernyő alján látható műsor feliratok nyelvét.",
						"Nézze meg a jelen csatorna szövegeit és képeit.",
						"Digitális Élő Hálózat Szövetség (DLNA). Élvezze az otthoni hálózaton keresztül más eszközről (pl. PC) megosztott zenét, fényképet és videót.",
						"Jelenítse meg okostelefon tartalmait TV-n és használja okostelefonját TV távirányítóként.",
						"Jelenítsen meg TV képernyőjén Miracast-kompatibilis Android eszközről megosztott tartalmakat.",
						"Zárolja TV készülékét.",
						"Nevet választhat készülékének.",
						"Kiválaszthatja nézési környezetét.",
						"Alapértelmezettre állítja vissza az összes rendszerbeállítást."];
var initialTitle	= ["Üdvözöljük!","Alapbeállítás"];
var initialPrompt	= ["Végezze el a kezdeti beállítást most, és az izgalmas élmények világa vár Önre!",
						"Kérjük, válassza ki a megfelelő nyelvet:",
						"Válasszon országot:",
						"Kérjük, válasszon helyszínt:",
						"Válassza ki hálózati kapcsolata típusát:",
						"Válassza ki vezetékes hálózati kapcsolódási módját:",
						"Nem sikerült csatlakozni a(z) xxxxxxxxx eszközhöz! Kérjük, csatlakoztassa az eszközt a következő Diagrammnak megfelelően vagy válassza ki a Balra gombot a törléshez.",
						"Sikerült a csatlakozás a(z) xxxxxxxxx eszközhöz! Kérjük, válassza ki a Jobbra gombot a folytatáshoz.",
						"1)Az Ön TV-jében már lehet beépített drótnélküli adapter\n 2)Vagy, ha van egy drótnélküli USB adaptere, csatlakoztassa azt a TV-jéhez.  Ezután kérem, válassza ki a drótnélküli hálózati csatlakozási módot",
						"Pásztázás. Kérjük, várjon…",
						"Nem kapcsolódik vezeték nélküli eszköz a TV-hez!",
						"Az alábbi „Tovább” gomb megnyomása előtt ellenőrizze, telepítve van-e a hp-ba a következő PIN-kód.",
						"Kérjük, nyomja be a gombot a hozzáférési ponton 120 másodperccel a Jobb megnyomása előtt!",
						"WPS (Wi-Fi Protected Setup, védett WiFi beállítás)",
						"PIN (személyi azonosító szám)",
						"PBC (nyomógomb konfiguráció)",
						"A következő tartalmak csak hálózati kapcsolattal érhetők el. Ki kívánja hagyni a Hálózat beállítása lépést?",
						"Új szoftver frissítések letöltése áll rendelkezésére, hálózati állapotától függően ez eltarthat egy ideig.",
						"A TV szoftverének frissítése után élvezheti a legújabb funkciókat és szolgáltatásokat.",
						"Így nem élvezheti a legújabb jellemzőket és szolgáltatásokat. Biztosan ki akarja hagyni a szoftverfrissítést?",
						"Nyomja meg a jobb gombot a folytatáshoz.",
						"Frissítés közben ne áramtalanítson, mert ez a TV hibás működéséhez vezethet.",
						"Amennyiben nem kíván frissíteni, kérjük, válassza ki a NEM-et.",
						"Frissítés, kérjük, várjon",
						"A RENDSZER/SZOFTVERFRISSÍTÉS pontban is frissítheti a szoftverét.",
						"A kiválasztott ország jelszó beállítását igényli.\nKérjük, írja be és erősítse meg TV készüléke kódját.",
						"This code is too simple.\nPlease use different digits.",
						"Gratulálunk! A kezdeti beállítás befejeződött. Módosíthatja a konfigurációját a főmenün és a kapcsolódó almenükön keresztül.",
						"Válassza ki a biztonsági módot:",
						"Kérjük, válassza ki a vezeték nélküli hálózati kapcsolat módját:",
						"Hálózat"];
var initNetCabAndDonRe = ["Nincs hálózati kábel csatlakoztatva, kérjük, csatlakoztasson egy dugót a hálózati kábelbe!","Nincs beépített vezeték nélküli adapter vagy nincs vezeték nélküli USB adapter."];
var initChPrompt = ["A TV csatornabeállításai","Kérjük, válassza ki az Antenna pásztázási típusát.","Folyik az automatikus hangolás...","A következő Antenna csatornákat találta:","Válassza a kábel kereséstípust.","Kérjük, válasszon ki egy kezelőt a következő listából:","Állítsa be a keresési adatokat","A következő kábelcsatornákat találtam:","Válasszon üzemeltetőt a következő listáról","Válassza ki a keresendő műholdakat vagy módosítsa a kiválasztott műholdat","Állítsa be a műhold paramétereit","A következő csatornákat találta, és a csatornapásztázás újra elvégezhető a Csatorna/Csatornapásztázás pontban."];
var initClockPrompt = ["Kérje le a hálózat által biztosított időt!",
						"Kérjük, állítsa be a Dátumot és az Időt:"];
var initialOptions	= ["Környezet","Hálózatbeállítás","Szoftverfrissítés","Csatornatelepítés","Óra"];
var initialHotkeys	= ["Vissza","Kijelölés","Következő"];
var initLocations	= ["Kezdőlap","Üzlet","Bolti beállítás demóval"];
var initNets		= ["Vezetékes","Vezeték nélküli","Nincs hálózati kapcsolatom"];
var initWireManuals	= ["IP-cím","Alhálózati maszk","Alapértelmezett átjáró","Elsődleges DNS","Másodlagos DNS"];
var initSoftUpdates = ["Frissítés most","Frissítés később"];
var initChannelIns	= ["Tovább","Nem kívánom telepíteni a csatornákat"];
var initChScanTypes	= ["Digitális & Analóg","Digitális","Analóg","Nem akarok keresni"];
var initChDvbts		= ["Antenna ATV csatornák:","Antenna DTV csatornák:"];
var initChDvbcs		= ["Kábeles analóg TV-csatornák:","Kábeles digitális TV-csatornák:"];
var initChDvbss		= ["Műholdas csatornák:"];
var initChDvbSOther	= ["Nem akarok műholdat keresni"];
var initEndConnectedStatus= ["Nincs kapcsolat","Wi-Fi kapcsolat","Vezetékes kapcsolat"];
var initEndInstallations= "A(z) XXXX csatornák telepítésre kerültek";
var initEndUpdate	= ["Frissítve"];

var audioScenes 	= ["Asztali","Fali felerősítés"];			
var screenSavers	= ["Jelenleg nem áll rendelkezésre programinformáció, kérjük, elsőzör válassza ki a csatornákat!",
						"Nincs jel.",
						"Kódolt",
						"Csak adatok",
						"Hangműsor",
						"Nincs hang és nincs kép.",
						"Nem áll rendelkezésre",
						"Nincs teletext",
						"Nincs műsor adat.",
						"A program zárolva van!",
						"A program zárolva van!\nNyomja meg az OK gombot, majd írja be a kódot.",
						"Nincsenek műsor részletek.",
						"Kiskorúak számára veszélyes műsor.\Nyomja meg az OK-t és adja meg a kódját.",
						"A csatorna zárolva van!",
						"A csatorna zárolva van!\nNyomja meg az OK gombot, majd írja be a kódot.",
						"A bemenet zárolva van!\nNyomja meg az OK gombot, majd írja be a kódot.",
						"Nem támogatott.",
						"Ez a szolgáltatás pillanatnyilag nem áll rendelkezésre",
						"Bemenet zárolt!",
						"Nincs program cím.",
						"Nincs funkció"
						];
var chBookingPromt	= ["Az aktuális csatornának ütemezett felvétele van, a TV el fogja kezdeni a felvételt.",
						"Felvételütemezést találtam.\n Felvétel készítéséhez kapcsoljon ide: XXXX",
						"Emlékeztető van az aktuális csatornán.",
						"Ütemezett emlékeztetőt találtam.\n Kapcsoljon ide: XXXX"];
var timeUnit		= ["s","p"];
var ciPromt			= ["A hálózati adatok megváltoztak. A frissítéshez elvégezhet egy frissítő pásztázást.",];
var othersPromt		= ["Kérjük, várjon…",];
var menuOptions		= ["Kép","Hang","Csatorna","Hálózat","Rendszer"];
var optionOptions	= ["Képmód","Beprogramozott hangzás","képkimerevítés","T-Link","időeltolás","PVR","Ütemezési lista","Beállítások"];
var optionTLinkPromt= [["Automatikus bekapcsolás","Autom. készenlét","Műsorújság menü"],
						["Bekapcs.","Készenlét","Erősítő hangerő"]];
var powerPromt		= ["A TV hamarosan kikapcsol! Bármelyik billentyűvel megszakíthatja."];
var ttxLanguage		= ["NY-EURÓPA","K-EURÓPA","Orosz","Arab/héber","Perzsa","Arab","Hviterussisk","Görög","Török"];
var ttxOptions		= ["Felfed","Aloldalak görgetése","Nyelv","Ébresztés oldal","Hírek"];
var weekday         = ["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"];
var lcnConfflict	= "E műsor vételével problémák adódtak. Egy másik verzió is rendelkezésre áll a(z) %d csatornán.";
var inShopMode		= "A TV-je bolti módban áll. Az otthoni mód beállításához kérjük, válassza ki a 'Rendszer' opciót és a menüben változtassa meg a 'Hely'-et.";
var nitRefresh		= "Megváltoztak a hálózati adatok. Szeretne frissítő programkeresést végezni?";
var picHDMIMode     = ["Automatikus","Grafikus","Videó"];

var glassRemind    	= ["Kérjük, dugja be a TV-be 3D szemüvegét (Tartsa nyomva a POWER gombot a 3D szemüvegen).","3D szemüvege csatlakozik a TV-hez",""];
var pvrRemind 		= ["Ne húzza ki az USB eszközt, ne szakítsa meg az áramot"];
var pvrConName   	= ["PVR","Műsorinformáció:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","A felvett videót a \"pvr\" mappába mentettük."]," Leállítása","Felvétel","óra","Perc","Időtartam","Tippek","Használja a nyilakat a felvételi idő beállításához."];
var pvrDisRemind 	= "Helyezze be az USB-meghajtót a rögzítéshez.";
var pvrRemindWords  = ["Ki kíván lépni?",
							"Le kívánja állítani a felvételt és böngészni szeretné a rögzített fájlokat?",
							"Kivették a lemezt.",
							"Nincs elég szabad terület.",
							"Nincsenek rögzített fájlok. Felvétel indítása",
							"Titkosított csatornán nem tud elindulni a PVR .",
							"A funkció nem elérhető",
							"Sikeres mentés.",
							"Leállítja a felvételi eljárást és bemenőjel forrást vált?",
							"A TV be fogja fejezni az aktuális felvételt. Ki kíván lépni?",
							"A PVR felvételnek szüksége van a TV jelére a megfelelő működéshez, kérjük, ellenőrizze a jelét."];
var pvrChangeCh 	= ["Csatornát vált?",
							"Leállítja a felvételi eljárást és csatornát vált?"];
var pvrChangeToPIN8	= ["Meg kívánja változtatni a SCART inputhoz csatlakozó eszköz forrását?",
				    		"Le kívánja állítani a felvétel folyamatát és meg kívánja változtatni a SCART inputhoz csatlakozó eszköz forrását? "];
var pvrChangeToCEC  = ["Meg kívánja változtatni a HDMI inputhoz csatlakozó eszköz forrását?",
				  			 "Le kívánja állítani a felvétel folyamatát és meg kívánja változtatni a HDMI inputhoz csatlakozó eszköz forrását? "];
var pvrGuideJump    = ["Be kíván lépni az EPG-be?",
							"Leállítja a felvételi eljárást és az EPG-be lép?"];
var pvrMediaJump    = ["Be kíván lépni a Médiába?",
							"Leállítja a felvételi eljárást és az Media-be lép?"];
var timeshiftExtra	= ["Le kívánja állítani a timeshiftet,csatorna megváltoztatása?",
						"Le kívánja állítani a timeshiftet és meg kívánja változtatni a SCART inputhoz csatlakozó eszköz forrását?",
						"Le kívánja állítani a timeshiftet és meg kívánja változtatni a HDMI inputhoz csatlakozó eszköz forrását?",
						"Titk. csatornán nem tud elindulni az időeltolás.",
						"Le kívánja állítani a timeshiftet és be kíván lépni az EPG-be?",
						"Le kívánja állítani a timeshiftet, és a TV-t USB módra állítja?",
						"Le kívánja állítani a timeshiftet,bemeneti forrás megváltoztatása?",
						"Helyezze be az USB-meghajtót a rögzítéshez.",
						"A lemez mérete nem elegendő.",
						"A TV befejezi az aktuális timeshiftet. Ki kíván lépni?"];
var timeshiftStatus	= ["Gyors visszatekerés"," Leállítása","Lejátszás","Pillanat állj","Gyors előretekerés"];
var pvrPowerOffRemind= ["Készenléti felvétel","Készenlét","A TV jelenleg rögzít, folytatni kívánja a felvételt, amikor a TV készenléti módban áll?"];
var timeshiftInitTitle= "Lemez beállítása";
var timeshiftInitReminds= ["Ez a varázslóval állíthatja be az USB lemezen a timeshift funkciót. Válassza ki a beállítási módot.",
						 "A jobb teljesítmény érdekében javasoljuk az USB lemez formattálását. Ezzel minden adat törlődik.",
						 "Válassza ki a fájlméretet a timeshift funkcióhoz.",
						 "Formattálás",
						 "Nincs elég szabad terület.",
						 "Timeshift fájl létrehozása",
						 "Sebesség tesztelése",
						 "A lemez adatátviteli sebessége túl lassú (< %f MB/s) a timeshift funkcióhoz.",
						 "A lemez készen áll a timeshift funkció alkalmazására. Ehhez azonban lemezcsere javasolt ( > %f MB/s sebességűre).",
						 "A lemez készen áll a timeshift funkció alkalmazására. "];
var timeshiftInitButtons= ["Formázás","Kihagyás","Mégse","OK","Befejezés","Kilépés"];
var timeshiftInitOther=["Lemezsebesség:","MB/s"];

var selectChoice	= "Biztos benne?";
var chAtvStore		= "Tárolás mint XXXX";
var chEpgFirstGenreUK= ["Mozi","Hírek és tények","SZÓRAKOZTATÁS","Sport","Gyerekműsor","Oktatás","Életstílus","Dráma"];
var homePageTitleList = ["APPOK","TV","VIDEÓK","Honlap"];
var homePageFavAndAllName  = ["Kedvenc appok","Minden app"];
var homePageBackUp = ["E-kézikönyv","Útmutató"];
var homePageRemind   = ["A teljes funkciók csak a hálózatra való kapcsolódás után érhetők el.","A TV-jének még nincsenek csatornái. A programok a csatornaszkennelés után érhetők el.","Nincs műsor","Keres most csatornákat?"];
var homePageHistory = ["Előzmények"];
var miracastTitle = ["WiFi TV link","TCL eszköz"];
var miracastRemind=["A WiFi TV segítségével vezeték (kábelek) nélkül oszthatja meg eszköze, például okostelefonja vagy táblagépe képét és hangját a TV-készülékkel. Ez lehetővé teszi az okostelefon vagy táblagép képének és hangjának a TV-n való figyelését. Például elindíthat egy videót az okostelefonon és egyidejűleg a TV-n is nézheti, vagy játékvezérlőként használhatja táblagépét és tartalmát kiteheti a nagyképernyős TV-re.","A WiFi TV link a TV-n használatra kész. Indítsa el az eszköz képernyőjének TV-n való megosztásához.","Kapcsolódás. Kérem, várjon!","Kapcsolódás nem sikerült!","Sikertelen csatlakozás. Kérem, ellenőrizze!"];
var homePageLittleWin = ["Beállítások","Adathordozók","Kedvenc csatornák","Smart TV","EPG"];

var hbbtvStopRemind  = ["Le akarja állítani a lejátszást?"];
var colorSystem = ["Automatikus","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "További információért nyomja meg az OPCIÓT";
var emptyListInfo = "Nem csatlakozik eszköz a TV-hez!";
var optionVideoListArray_1 = ["Képmód", "Beprogramozott hangzás", "Lejátszási mód", "Képernyő mód", "3D mód", 
							  "B-J kapcsoló", "Mélységélesség", "Felirat", "Hangsáv", "Cím", "Fejezet", "Info"];
var optionVideoListArray_2 = ["Képmód", "Beprogramozott hangzás", "Lejátszási mód", "Képernyő mód", 
							  "Felirat", "Hangsáv", "Cím", "Fejezet", "Info"];
var bottomTipsText = ["Lejátszás/szünet", "Gyors visszatekerés", "Gyors előretekerés", "Játszási lista", "Beállítások"];
var picturePresetArray = ["Szabvány", "Dinamikus", "Természetes", "Mozi", "Személyes"];
var videoPlayModeArray = ["Minden ismétlése", "Egy ismétlése", "Normál"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Široki zoom", "Zoom 2", "Široki zoom 2", "Rastezljivi zoom", "Automatikus"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 Zoom", "16:9 Zoom", "16:9 Zoom up", "Automatikus"];
var Mode3DArray = ["Ki", "2D-ből 3D", "Egymás mellett", "Fent és lent", "Sorösszefésüléses"];
var videoOptionListArray = ["Ki", "Zeneszám", "Felirat", "Cím", "Fejezet"];
var subMenuTitleText = "Felirat";
var langMenuTitleText = "Audio nyelv";
var titleMenuTitleText = "Cím";
var mode3DMenuTitleText = "3D mód";
var langInfoText = "Zeneszám";
var STOP_RESUME_INFO = "Leáll.-Folyt.";
var playListName = " név";
var eb_tips = "Tippek";
var ok_button = "OK";
var eb_info = ["Hang dekódolási hiba.", "Videó dekódolási hiba.", "Nem támogatott hangformátum.", 
			   "Nem támogatott video formátum.", "Nem tudom megnyitni ezt a fájlt.", "Lejátszási hiba, kérem, próbálja újra.",
			   "A fájlformátum nem támogatott.", "Hoppá! A lejátszó leállt.",
			   "A fájl elérési útvonala nem létezik vagy érvénytelen.\n Helyezze be újra a tároló eszközt és próbálkozzon újra.",
			   "A lejátszást az előző\n lejátszási pozíciótól folytatja?"];
var frameTitleText = "Új eszköz";
var eb_quit_info = "Biztosan ki akar lépni?";
var eb_yes = "IGEN";
var eb_no = "NEM";
var offinfo = "Ki";
var naInfo = "Nulla";
var consoleInfoArray = ["Gyors visszatekerés", "Gyors előretekerés", "Lejátszás/szünet", "Játszási lista"];
var cantOperateText = ["Nem támogatott funkció."];
var chapterChangeInfo = "Csak az 1-XXXX. fejezet érhető el:";
var metaDataArray = ["Cím/Kiadás metaadat:", "Fejezet metaadat:", "Hang metaadat:", "Felirat metaadat:"];
var metaTitleInfo = "Cím";
var metaChapterInfo = "Fejezet";
var videoLoadingInfo = "Elemzés…";
var listLoadingInfo = "Betöltés…";
var pgInfo = "Alacsony értékelés:";
var fileNameText = " név";
var fileDateText = "Dátum";
var fileSizeText = "Méret";
var fileDurationText = "Időtartam";
var fileDirectorText = "Rendező";
var fileCopyrightText = "Copyright";
var fileArtistText = "Előadó";
var fileAlbumText = "Album";
var fileGenreText = "Műfaj";
var fileYearText = "Év";
var fileGenreText = "Műfaj";
var mainListArray = ["Mind", "Kép", "Videó", "Zene"];
var sortArray = [" név", "Dátum"];
var parserArray = ["Normál", "Rekurzív"];
var emptyTipsInfo = "Hoppá. Nem találtam támogatott fájlt.";
var emptyFolderInfo = "Hoppá. Nem találtam támogatott fájlt.";
var sortName = "Rendezve";
var parserName = "Elemző";
var divx_str1 = "DivX(R) regisztrálás";
var divx_str2 = "DivX(R) regisztráció megszüntetése";
var infor_str = "Info";
var quickMenuEmptyText = "Nincsenek elérhető opciók.";

var musicSoundPresetArray = ["Szabvány", "Mozi", "Zene", "Tiszta hang", "Személyes"];
var musicInformationArray = [" név", "Előadó", "Album", "Műfaj:", "Év:", "Időtartam:"];
var playListName = " név";
var playTipsInfo = ["Ön az első fájlt játssza le.", "Ön az utolsó fájlt játssza le."]
var musicNameInfo = "Name";
var musicArtistInfo = "Előadó";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Beprogramozott hangzás";
var optionBGMInfo = "Lejátszás a háttérben";
var optionAudioOnlyInfo = "Csak hang";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX csatlakozott a TV-hez!";
var tvRemoteTitle		= "TV távvezérlő";
var tvRemoteDeveloper	= "Az alkalmazást a TCL fejlesztette ki";
var tvRemoteDeviceTitle	= "Eszköznév:";
var remoteOption		= ["Médiamegosztás","Távirányító","Súgó","Névjegy","Okos csatlakoztatás"];
var remotebottom		= "Kérjük, töltse le a \"TV távirányító\" menüt az okostelefonjára.";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Osszon meg fényképeket, videókat és zenét a TV-vel a telefonján keresztül.",
							"Lépések: \n   1. Kattintson a \"TV távirányító\"-ra a telefonján. Csatlakoztassa a telefonját a TV-hez ugyanazon a WI-FI hálózaton keresztül;\n   2. Kattintson a \"Médiamegosztás\"-ra a médiafájlok közti böngészéshez;\n   3. Küldje el a fájlt a TV-nek a lejátszáshoz (a következő lehetőségek közül az egyikkel)",
							"      a) A mappa/fájl TV-ikonra vonszolásával a képernyő tetején;\n      b) A telefon TV felé lendítésével az első fájl indításához;\n      c) A média elindításával a telefonon és a TV megosztás ikonra kattintással;",
							"   4. A TV-n való lejátszás közben a telefon megrázásával játszhatja le az előző vagy következő fájlt."];
var controlReminds		= ["A telefon használata TV távirányítóként.",
							" ",
							"Lépések: \n   1. Kattintson a \"TV távirányító\"-ra a telefonján. Csatlakoztassa a telefonját a TV-hez ugyanazon a WI-FI hálózaton keresztül;\n   2. Kattintson a \"Távirányító\"-ra a TV működtetéséhez."];
var helpDeviceWords		= "Többképernyős interakció";
var helpBottom			= "A felhőtechnológia korában az intelligens eszközök, mint pl. telefonok és TV-k egymással kölcsönös összeköttetésben működnek. Több képernyőn keresztül megoszthatja családjával médiafájljait, valamint telefonján keresztül vezérelheti a TV-készüléket! ";
var helpReminds			= ["Előkészületek\n   1. Töltse le és telepítse a \"TV táviránytót\" a Google Play-ből vagy az App Store-ból.\n   2. Csatlakoztassa a telefonját a TV-hez ugyanazon a WI-FI hálózaton keresztül.",
							" ",
							"Ajánlott telefon\n   1. CPU: > 800 MHz\n   2. Tárhely: legalább 80 MB szabad",
							" ",
							"Jogi nyilatkozat\sz.   Ha a \"TV távirányító\" nem elérhető telefonján, kérjük, lépjen kapcsolatba a telefon gyártóval."];
var helpButtons			= ["Előző","Következő"];
var aboutReminds		= ["TV távvezérlő","Az alkalmazást a TCL fejlesztette ki"];
var aboutExit			= "Kilépés";
var smartReminds		= ["Gyors és okos kapcsolat a TV és a telefon között.",
							" ",
							"Lépések \n   1. Csatlakoztassa a TV-t és az okostelefonját ugyanarra a LAN-ra. Kattintson a \"TV távirányító\"-ra az okostelefonján.\n   2. Kattintson a \"Smart Connect\"-re a QR-kód beszkenneléséhez..\n   3. A TV álljon nézet módban, tartsa nyomva 4 másodpercig az INFO gombot a távirányítón, és egy teljes képernyős QR-kód fog felugrani.",];
var smartQRReminds		= ["Kérjük, kattintson a Smart connectre a TV távirányítóban a telefonján és szkennelje be a QR-kódot a TV-hez és a telefonhoz való gyors csatlakozáshoz.",
							"A QR-kód LAN fiókinformációkat tartalmaz. Kérjük, őrizze meg."];
							

var consoleTipArray = ["Előző","Következő","Konzol","Játszási lista"];							
var optionInfoArray = ["Képmód","Lejátszási mód","Időtartam","Hatás","Info"];

var playModeArray = ["Normál","Véletlenszerű","Ismétlés"];
var durationArray = ["Rövid (5 mp)", "Közepes (10 mp)", "Hosszú (15 mp)"];
var effectArray = ["Nincs", "Feloldás", "Törlés jobbra", "Törlés balra", "Törlés felfelé", "Törlés lefelé", "Doboz befelé", "Doboz kifelé", "Véletlenszerű"];
var infoArray = ["Név:","Méret:","Dátum:","Helyszín"];

var picturePresetBarTitleInfo = "Képmód";
var picturePresetBarArray = ["Szabvány","Dinamikus","Stúdió","Mozi","Személyes"];
var upTipsInfo = "Kép mozgatása"; //add yums 2014-10-10
var consoleTipsArray = ["Konzol","Előző","Következő","Játszási lista","Beállítások"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Nyomja meg újra a JOBB gombot a következő képhez","Nyomja meg újra a BAL gombot az előző képhez","Nyomja meg újra a LE gombot a játszási lista megjelenítéséhez"]; //add yums 2014-10-10

var optionPvrListArray = ["Képmód","Beprogramozott hangzás", "Képernyő mód", "3D mód", "Felirat", "Hangsáv", "Info"];							
	
var titleSpanFirstArray = ["Vezérlés és Kapcsolat","Alapvető műveletek","APPOK","TV","Beállítások","GYIK"];
var titleSpanSecondArray = [["Távirányító","Panelkulcsok","Egyszerű navigáció","TV csatlakozás","TV csatlakozás","TV csatlakozás","Vezeték nélküli"],["Indító","Állapotsáv","Fő-"],["Játékalkalmazások","Adathordozók","TV távvezérlő"],["Csatorna és hangerő beállítása","Csatornalista","EPG","Csatornák","Kedvenc csatornák"],["Képbeállítás","Hangbeállítás","Csatornabeállítás","Szoftverfrissítés","Nyelv","Szülői zár"],["Gyakran ismételt kérdések","Gyakran ismételt kérdések","Hibaelhárítás","Hibaelhárítás","Feltételek és kikötések"]];
var contentSpan1_1Array = [["LISTA:","INFORMÁCIÓ:","MENÜ:","TELJESÍTMÉNY:","FORRÁS:","ÚTMUTATÓ:","OKOS TV:"],["Mutatja a csatornalistát","Mutatja a programinformációt","Navigálás a honlapra","Bekapcsolás vagy készenléti mód","Válassza ki az input forrást","Az EPG (elektronikus műsortájékoztató) információkat mutatja","A Smart TV oldalra lép"]];
var contentSpan1_2Array = ["Előző csatorna","Következő csatorna","Emelje fel a hangerőt","Vegye le a hangerőt","Navigálás a honlapra","Az opció megerősítése","Készenlét / Bekapcsolás"];
var contentSpan1_3Array = ["OK/Tájékoztató","Csatorna fel","Csatorna le","Hangerő le","Hangerő fel","Néhány funkcióban nyílgombokként érhetők el."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapter","LAN","Okostelefon","PC/Set-top box/DVD","Hangerősítő","Hangerősítő/Monitor","A TV-je nem tartalmazhatja az összes foglalatot."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Fejhallgató","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB eszközök","USB eszközök","Fejhallgató","DVC/Játékkonzol/Set-top box/DVD","Hangerősítő","DVC/Játékkonzol/Set-top box/DVD","A TV-je nem tartalmazhatja az összes foglalatot."];
var contentSpan1_6Array = ["Műholdv. kártyany.","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA kártya","SD kártya","PC","Set-top box/DVD","Antenna/Kábel/Műhold","A TV-je nem tartalmazhatja az összes foglalatot."];
var contentSpan1_7Array = ["Tabletta","PC","Útválasztó","Telefon","TV"];

var contentSpan2Array = [["A kezdőlap nézéséhez nyomja meg a nyílgombokat. ","Majd nyomja meg az OK-t, hogy megnézhesse az egyik kiemelt műsort vagy üsse be az appot"],["Mutassa a dátumot, a hálózatot és eszközöket stb. a képernyő felső sarkában"],["Válassza ki az input forrásokat a különböző portokon, mint például TV, AV, HDMI stb. keresztül a TV-hez kapcsolódó eszközökből."]];

var contentSpan3Array = ["Élvezze és nézze kedvenc alkalmazásait a Smart TV lapon","Nézzen fényképeket, videókat és játsszon le zenét USB tároló eszközről.","Csatlakoztassa TV-jét és okostelefonját vagy tabletjét ugyanahhoz a LAN-hoz.","Kattintson TCL nScreen-re vagy TV távirányítóra az okostelefonon vagy a táblagépen","Osszon meg családjával több képernyőn fényképeket, videókat és zenét, irányítsa TV-jét okostelefonjával"];

var contentSpan4Array = [["Nyomja meg a FEL/LE gombokat a csatornaváltásokhoz","Nyomja meg a BAL/JOBB gombokat a hangerő beállításához"],["A csatorna felsorolás megnézéséhez nyomja meg a LIST gombot a távirányítón","Nyomja meg az FEL/LE gombokat a csatornák kiválasztásához."],["Az EPG egy olyan képernyőn megjelenő útmutató, amely kijelzi az ütemezett TV-műsort. Navigálhat, kiválaszthat, megtekinthet és felvehet műsorokat."],["Keresi és telepíti a csatornákat"],["Adja hozzá vagy Szerkessze a Csatornalistában kedvenc csatornáit"]];

var contentSpan5Array = ["Élvezze kedvenc műsorait a video apps-on keresztül"];

var contentSpan6Array = [["Nyomja meg a MENÜ gombot a rendszerbeállítási opciók megtekintéséhez.","Lépjen be a Kép beállításai pontba az értékek beállításához"],["Nyomja meg a MENÜ gombot a rendszerbeállítási opciók megtekintéséhez.","Lépjen be a Hangbeállításokba az opciók beállítására."],["Nyomja meg a MENÜ gombot a rendszerbeállítási opciók megtekintéséhez.","Lépjen be a Csatornabeállításokba az opciók beállításához"],["Frissítse a TV-jét, amint az új szoftververzió elérhető"],["Kiválaszthatja preferált menünyelvét"],["Lehetővé teszi a szülőknek, hogy lezárják a gyerekeik számára nem megfelelő csatornákat és műsorokat."]];

var contentSpan7_1Array = [["Nincs kép és hang","Ellenőrizze, hogy a biztosíték vagy a megszakító működik-e.","Dugjon egy másik elektromos eszközt az elektromos aljzatba, így megbizonyosodhat arról, hogy az működik és be van kapcsolva.","A hálózati csatlakozó érintkezése rossz a konnektorral.","Ellenőrizze a jelforrást."],["Normális kép, nincs hang","Nyomja meg a FEL gombot a hangerő növeléséhez.","A hangbeállítás nem megfelelő.","Hibás jel a közvetítésből."],["Normális kép, nincs hang","Állítsa be a fényességet és a kontrasztot","Hibás jel a közvetítésből.","Ellenőrizze, hogy csak audio módban van-e."]];
var contentSpan7_2Array = [["A rádió frekvencia interferenciája","Ez az interferencia mozgó hullámokat vagy átlós vonalakat produkál, és néhány esetben a kép kontrasztveszteségét. Keresse meg és távolítsa el a rádió interferencia forrását."],["Nincs szín","Állítsa be a színeket.","Próbáljon más csatornát. Fekete-fehér programot lehet fogni."],["A távirányító nem működik.","Cserélje ki az elemeket.","Az elemek nem megfelelően kerültek behelyezésre. A TV főkapcsolója nincs csatlakoztatva."]];
var contentSpan7_3Array = [["Az USB eszköz tartalma nem jelenik meg","Ellenőrizze, hogy az USB eszköz kompatibilis a TV-vel.","Ellenőrizze, hogy a hang- és képfájlok formátumát támogatja-e a készülék."],["Hang nélkül sugároz","A videó hangformátumát nem támogatja a TV-lejátszó."],["A fájlokat nem játssza le simán.","Az USB- eszköz átviteli teljesítménye korlátozhatja a TV adatátviteli mértékét."]];
var contentSpan7_4Array = [["Szoftverfrissítéskor mire kell odafigyelnem?","Szoftverfrissítéskor tilos áramtalanítani.","Szoftverfrissítéskor kerüljön minden, a távirányítóval végzett műveletet.","Legyen türelmes, mert a szoftverfrissítés folyamata hosszú ideig is eltarthat."],["A szoftverfrissítés után a TV interfészén nincs megkülönböztető változás.","Bizonyos körülmények között a szoftverfrissítés lehet, hogy nem csak frissít vagy új funkciókat vesz fel, hanem az interfészen való megkülönböztető változás nélkül javítja a TV beállítását. A TV interfésze néha érintetlen maradhat."]];

var termsTitle = "Feltételek és kikötések";
var termsConditions = ["(Jogi nyilatkozat). Kiadta a TCL - a TV készülék gyártója.","A SmartTV szolgáltatású termékek eltérő lehetőségei, valamint a rendelkezésre álló tartalom, szolgáltatások és alkalmazások korlátai miatt előfordulhat, hogy egyes szolgáltatások nem érhetők el egyes készülékeken vagy földrajzi területeken. A SmartTV egyes szolgáltatásainak használatához emellett külön vásárolható perifériák vagy tagsági díjak szükségesek. A készülékekről és a tartalomról webhelyünkön találhatók további részletek. A SmartTV-n elérhető szolgáltatások és tartalom választéka időről időre előzetes értesítés nélkül változhat. \n   A készüléken elérhető minden tartalom és szolgáltatás külső feleké és szerzői joggal, szabadalommal, védjeggyel és/vagy egyéb szellemitulajdon-joggal védett. E tartalmakat és szolgáltatásokat kizárólag az Ön személyes, nem kereskedelmi célú használatára nyújtjuk. A tartalmakat és szolgáltatásokat nem használhatja a tulajdonos vagy a szolgáltató által nem engedélyezett módon. A fentiek korlátozása nélkül tilos továbbá az e készüléken elért bármely tartalom vagy szolgáltatás bármely módon vagy eszközzel történő módosítása, másolása, újra közzététele, feltöltése, kiajánlása, átvitele, lefordítása, eladása, belőle származékos munka készítése, felhasználása és terjesztése a tartalom tulajdonosának vagy a szolgáltatás nyújtójának kifejezett engedélye nélkül. \n   ÖN KIFEJEZETTEN ÉS ELFOGADÓLAG TUDOMÁSUL VESZI, HOGY SAJÁT KOCKÁZATÁRA HASZNÁLJA A KÉSZÜLÉKET, ÉS A MEGFELELŐ MINŐSÉG, TELJESÍTMÉNY ÉS PONTOSSÁG TEKINTETÉBEN IS MINDEN KOCKÁZAT ÖNT TERHELI. A KÉSZÜLÉKET ÉS A KÜLSŐ FELEK ÁLTAL NYÚJTOTT MINDEN TARTALMAT ADOTT ÁLLAPOTUKBAN, KIFEJEZETT VAGY BELEÉRTETT JÓTÁLLÁS VAGY GARANCIA NÉLKÜL ADJUK. A TCL ELHÁRÍT MINDEN KIFEJEZETT VAGY BELEÉRTETT SZAVATOSSÁGOT, GARANCIÁT VAGY JÓTÁLLÁST A KÉSZÜLÉKKEL, A TARTALOMMAL ÉS A SZOLGÁLTATÁSOKKAL KAPCSOLATBAN, TEHÁT NEM SZAVATOLJA PÉLDÁUL EZEK ÉRTÉKESÍTHETŐSÉGÉT, MEGFELELŐ MINŐSÉGÉT, ADOTT CÉLRA VALÓ ALKALMASSÁGÁT, PONTOSSÁGÁT, NYUGODT ÉLVEZHETŐSÉGÉT ÉS HARMADIK FELEK JOGAINAK TISZTELETBEN TARTÁSÁT. A TCL NEM GARANTÁLJA A KÉSZÜLÉK ÚTJÁN NYÚJTOTT BÁRMELY TARTALOM VAGY SZOLGÁLTATÁS PONTOS, ÉRVÉNYES VAGY HIÁNYTALAN VOLTÁT, NEM GARANTÁLJA, HOGY A KÉSZÜLÉK, TARTALOM VAGY SZOLGÁLTATÁSOK MEGFELELNEK AZ ÖN IGÉNYEINEK VAGY KÖVETELMÉNYEINEK, ÉS A KÉSZÜLÉK VAGY A SZOLGÁLTATÁSOK MEGSZAKÍTÁS- ÉS HIBAMENTES MŰKÖDÉSÉT SEM GARANTÁLJA. A TCL SEMMILYEN KÖRÜLMÉNYEK KÖZÖTT, TEHÁT MÉG HANYAGSÁGBÓL KIFOLYÓLAG SEM TEHETŐ FELELŐSSÉ A KÉSZÜLÉK, VAGY AZ AZZAL ELÉRT BÁRMELY TARTALOM VAGY SZOLGÁLTATÁS BÁRKI ÁLTAL TÖRTÉNŐ HASZNÁLATÁVAL KAPCSOLATOS SEMMILYEN KÖZVETLEN, KÖVETKEZMÉNYES, KÜLÖNLEGES, KÖZVETETT, MINTASZERŰ VAGY BÜNTETÉS JELLEGŰ KÁRÉRT, AKÁR SZERZŐDÉSBŐL, ANNAK MEGSZEGÉSÉBŐL VAGY BÁRMELY MÁS JOGI ÉRTELMEZÉSBŐL ADÓDIK IS, MÉG AKKOR SEM, HA TÁJÉKOZTATTAK BENNÜNKET AZ ILYEN KÁROK BEKÖVETKEZÉSÉNEK LEHETŐSÉGÉRŐL. \n   A külső felek által nyújtott szolgáltatások bármikor előzetes értesítés nélkül módosíthatók, felfüggeszthetők, visszavonhatók, befejezhetők, lekapcsolhatók vagy megszakíthatók és a TCL (a Thomson márkájú TV-készülékek gyártója) semmilyen garanciát, biztosítékot vagy vállalást nem nyújt és nem vállal arra nézve, hogy a tartalom vagy szolgáltatás bármely időszakban ténylegesen rendelkezésre áll. A tartalmat és szolgáltatásokat külső felek nyújtják, olyan hálózatok és átviteltechnikai berendezések útján, amelyekre a TCL-nek semmilyen ráhatása nincs. A jelen felelősségelhárítás általános jellegének korlátozása nélkül a TCL kifejezetten elhárít minden felelősséget a jelen készülék útján nyújtott bármely tartalom vagy szolgáltatás bármely módosítása, megszakadása, letiltása, lekapcsolása vagy felfüggesztése kapcsán. A TCL bármikor, bármilyen értesítés vagy felelősség nélkül korlátozhatja egyes szolgáltatások vagy tartalmak használatát vagy elérhetőségét. A TCL-t semminemű felelősség nem terheli a tartalmat és a szolgáltatásokat érintő ügyfélszolgálattal kapcsolatban. A tartalommal és a szolgáltatásokkal kapcsolatos kérdésekkel közvetlenül az adott szolgáltatóhoz kell fordulni."];

var noChannelListRemind        = ["Nem található csatorna. A csatornalista a szkennelés után érhető el.","Csatornakeresés"];
var closeSubtitleRemind   = "Ez a funkció akkor érhető el, amikor a felirat funkció ki van kapcsolva. Be kívánja ezt most állítani?";

var estickerTitles = ["Nagyon realisztikus képek","Életre kelt színek","Élethű mozgás","Dinamikus képminőség","SR UHD upscaling","3D élmény","Gyorsabb teljesítmény","A jövő 4K tartalma","Élvezze az online világot","Extra tartalmakhoz való hozzáférés","Beépített digitális hangoló","Minden eszközhöz csatlakozik","Különféle 4K források","USB tartalom","Ultragyors WiFi","Mobiltartalom a TV-n","A mobileszköz tartalma","Helyi tartalom","A DivX jóváhagyásával","Határtalan kép","Csatorna kész","TDT Premium"];
var estickerDescriptions = ["Lenyűgöző vizuális élmény a Full HD négyszeres részleteinek köszönhetően az UHD képernyőn","A széles színskála minden jelenetbe érzelmeket visz az élénk pirosakkal és a smaragd zöldekkel","A 4K keret interpoláció és háttérvilágítás a képen jelentkező foltproblémák eltüntetéséhez","Az eredeti kép élességét megerősítették, hogy igazi dinamikus kifejező hatást mutasson ragyogó kontraszttal","Élvezze a minden eddiginél élesebb TV-show-kat és Blu-Ray lemezeket a Super Resolution technológiának köszönhetően","Élvezze a 3D élményt a TV-n és nézzen különböző 3D tartalmakat","További élvezetes szórakozás a Quad Core-ral a sima kapcsolatért, a fokozott teljesítményéért","HEVC (H.265) kodek támogatása a 4K videó közelgő felosztása tekintetében","Online applikációk, VOD-szolgáltatások, catch-up TV-k és internetes böngészések széles választéka","Nézzen több kiegészítő szolgáltatást és tartalmat kedvenc műsorszolgáltatók","A nagy felbontású TV csatornákhoz való hozzáférés kiegészítő set top box nélkül","Könnyű csatlakoztatni számos otthon elérhető digitális forráshoz","A TV készen áll a jövő kihívásaira, képes a 4K 50/60Hz HDMI 2.0-n keresztül HDCP 2.2-vel együtt lejátszani","4K felbontásban nagyképernyőn videó vagy fénykép közvetlenül az USB eszközről, HDD-ről vagy kameráról","A legújabb 2x2 MIMO és AC szabvány utolérhetetlen internet elérési sebességet nyújtanak","Élvezze nagyképernyőn a mobileszközökről származó fényképeket, videókat, applikációkat a képernyő-tükrözés technológiájának segítségével","Az okostelefonról vagy tabletta származó fényképek, videók, applikációk nagyképernyőn kivetíthetők","Nagy képernyőre vetít olyan helyi tartalmakat, mint a helyi hálózatból csatlakoztatott eszközökből származó fényképek és videók","Kölcsönzött vagy a DivX által védett filmeket játsszon le","Ultra keskeny keret és szupervékony stílus","A Canal+ tesztelte és jóváhagyta","A TDT Premium tesztelte és jóváhagyta"];							

var eManualTextArray = ["E-kézikönyv","Az itt bemutatott összes grafika csak tájékoztató jellegű."];
var frontPanelRemind = "Az előlap zárolva van.";
var eRPRemind		 = "Az üzlet mód nem elégíti ki az ERP kérést. Biztos benne?";	
var noRelatedChannel = "Nincs ide tartozó csatorna";
var option0624Name          = ["BOP","BFS","Eseményenként","GetUserID","BGM","Reset all","Gyári alapbeállítás","NRM","DVB-T2  és ország választás","HbbTV mód"];
var DVBT2AndChoice = ["Be","Országonként","Ki"];
var hbbtvServiceRemind = "Hamarosan jön a HbbTV szolgáltatás!";
var insertWord = "Beszúr";		
var viewDetail = "Részlet megtekintése";							

var remindOAD  = "Szoftverfrissítés. Új ajánlott szoftverfrissítés érhető el egy másik csatornán. Ha beleegyezik annak letöltésébe, akkor a csatorna automatikusan átválthat. Elvégzi most?";

var LEDStatus = ["Villog", "Normál"];
var netFlixRemind = "Ez a funkció a legközelebbi bejelentkezésig felfüggeszti a Netflix szolgáltatások elérését.";
var ESNExplanation = "Elektronikus sorozatszám";
var resetShopRemind = "A rendszer alaphelyzetbe áll, ne kapcsolja ki a TV-készüléket";
var initialSelectOption = "Válasszon egy opciót:";
var databaseRemind   = "A rendszer az adatbázis ismeretlen eredetű sérülését észlelte, ezért automatikusan újraépíti azt. A folytatáshoz nyomja meg az OK gombot";
var Deactivation = "Felfüggesztés";
var oadFutureRemind = "Szoftverfrissítés. Javasolt új szoftver jelenik meg ekkor: %s. A frissítés időigényes lehet, és közben elsötétülhet a képernyő. Ne kapcsolja ki a vevőkészüléket a frissítés közben. Ha elfogadja, kérjük hagyja készenléti módban bekapcsolva a vevőt az ütemezett időpontban. Fogadni kívánja ezt a frissítést?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Hangkimenet";
var bt_soundOutPutTV = "TV hangszórók";
var bt_soundOutPutBT = "Bluetooth eszköz";
var bt_soundOutPutBT_TV = "Bluetooth és TV";
var bt_refreshBarName = "Eszközök";
var bt_settingTips_On = "Kapcsolja be a bluetooth funkciót és keressen eszközöket.";
var bt_settingTips_Finding = "Elérhető eszközök keresése…";
var bt_settingTips_NoDevice = "Nincs elérhető eszköz.";
var bt_deviceList_State_NoConnect = "Nincs csatlakoztatva";
var bt_deviceList_State_Connecting = "Csatlakozás…";
var bt_deviceList_State_Connected = "Csatlakoztatva";
var bt_deviceList_State_Paired = "Párosítva";
var bt_deviceList_Conncect_Failed_Tips1 = "Csatlakozás sikertelen.";
var bt_deviceList_Conncect_Failed_Tips2 = "Igazolja vissza, hogy a(z) XXX bluetooth funkciója be van kapcsolva.";
var bt_deviceList_Conncect_Success = "Bluetooth eszközhöz csatlakoztatva.";
var bt_deviceList_Disconncect_Success = "Bluetooth eszközről leválasztva.";
var bt_deviceList_Disconnect = "Biztosan le akar csatlakozni a(z) XXX eszközről?";
var bt_tipsTitle = "Tipp";
var bt_bluetooth_Pairing_Title = "Bluetooth párosítás";
var bt_bluetooth_Input_Pin = "Adja be a PIN-kódot:";
var bt_bluetooth_Output_Pin_Tip = "Adja be a(z) XXXX PIN-kódot a billentyűzeten.";
var bt_bluetooth_Pin_Wrong_Tip = "Rossz PIN";
var bt_bluetooth_Remove_Pair_Title = "Lekérdezés";
var bt_bluetooth_Remove_Pair_Ask = "Elfelejti ezt az eszközt?";
var bt_bluetooth_module_error = "Bluetooth modul hiba!";	
	
var netflixDialogOptions = ["OK","Később","Ne jelenjen meg többet"];
var netflixDialogContent = "A Netflix szolgáltatásban több ezer filmet nézhet meg. Megnyitja?";
var netflixRemoteDialogContent = "Már megvásárolható a Netflix gombbal ellátott távirányító. További információkért látogasson a következő weboldalra.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Aktuális jelforrás","Minden jelforrás"];
var audioDescriptionName = ["Narráció","Hangszóró","Hangszóró hangereje","Fejhallgató","Fejhallgató hangereje","AD hangereje","BT-eszköz","BT-eszköz hangereje"];
var audioDescriptionOptions = ["Ki","Normál","Narráció"];							
var volumeOffRemind = 'A Beállítások menüben a XXX beállítása legyen „Be”.';
var switchSourceRemind   = " behelyezve. Kívánja most bekapcsolni?";									

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sport mód";
var resetStadium = "Stadion";				
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Kilépés","0","Zoom+",
                       	   "Kilépés",
                       	   "Lista","0","Szöveg","Műsortájékozt.","Bevitel","Kilépés","Menü","Felirat","Info",
                       	   "Leállítás",
                       	   "Info","Menü","Kilépés"
                       	   ];
var nscreenTips = "A GuideOn segít navigálni a kiterjedt tartalmon belül.";
var nscreenContent = 'Lépések: 1.Válassza a telefonon a „TCL nScreen” elemet.  Helyi hálózaton csatlakoztassa a telefont a TV-hez; 2.Válassza a „GuideOn” elemet a GuideOn megnyitásához; 3.A GuideOn a nyomtatott műsorfüzethez hasonlóan tájékoztat az elérhető tévéműsorokról;';
var singalBrokenoffTips = "A jel megszakadt. A rendszer nem tudja befejezni a letöltést.";
var contentSpan1_1Array_AU = [["TELJESÍTMÉNY:","FORRÁS:","MENÜ:","BACK:","INFORMÁCIÓ:","HOME:","EXIT:","LISTA:"],
                            ["Turns power on or standby mode","Select the input source",
                             "Show TV settings menu","Go back to the Previous menu or exit a running APP", "Mutatja a programinformációt",
                            "Navigálás a honlapra","Go back to the Previous menu or exit a running APP","Mutatja a csatornalistát"]];
var guideDescriptionWords ="A QR-kód beolvasásával töltse le a GuideOn alkalmazást telefonjára";
var settingNoticeSourceName ="Auto forrásválasztás";
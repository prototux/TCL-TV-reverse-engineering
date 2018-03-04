
var all_country 	= ["Australija","Austrija","Belgija","Bulgarija","Kroatija","Čekija","Danija","Suomija","Prancūzija","Vokietija",
						"Graikija","Vengrija","Italija","Liuksemburgas","Nyderlandai","Norvegija","Lenkija","Portugalija","Rumunija","Rusija",
						"Serbija","Slovėnija","Ispanija","Švedija","Šveicarija","Jungtinė Karalystė","Naujoji Zelandija"," "/*Arab*/,"Estija"," "/*Hebrew*/,
						"Latvija","Slovakija","Turkija","Airija","*","Filipinai","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kinija","*","*","*","*","*","*","Kita","Lietuva"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Lietuva"];							
				
var all_language 	= ["Čekų","*","Danų","*","*","Vokiečių","Anglų","Ispanų","Graikų","Prancūzų",
						"Kroatų","*","Italų","Vengrų","Olandų","Norvegų","Lenkų","Portugalų","Rusų","Rumunų",
						"Slovėnų","Serbų","Suomių","Švedų","Bulgarų","Slovakų","*","*","Gėlų","*",
						"Valų","Arabų","Airių","Latvių","*","Turkų","Estų","Olandų"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","V.O."/*Qaa*/,"Neapibrėžta"/*Undetermined*/,"*","Nežinoma",
						"Neapibrėžta","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskų","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Baltarusių","*","*","Katalonų","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galisų","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandų","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lietuvių",
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
						"*","*","*","Samių","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekstas",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainiečių","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Išj.","Įj."];
var okCancel		= ["Gerai","Atšaukti"];
var yesNo			= ["TAIP","NE"];
var level			= ["Išj.","Žemas","Aukštas","Vidutinis"];
var manualAuto		= ["Rankinis","Auto"];
var homeShop		= ["Pagrindinis","Pirkti"];
var picPreset		= ["Standartas","Dinaminis","Natūralu","Filmas","Skaitmeninis kinas","Asmeninė"];
var picColorTemp	= ["Vėsi","Normalus","Šilta","Šilta2","Naudotojo"];
var pic3dNavig		= ["Rankinis","Auto","Pusiau automat."];
var _3dOptions		= ["3D režimas","3D į 2D","K-D jungiklis","Lauko gylis"];
var pic3DMode       = ["Išj.","2D į 3D","Vienas šalia kito","Viršus ir apačia","Linijos įdėliojimas"];
var picEcoOptions	= ["energijos taupymas","Šviesos jutiklis","Vietinis tamsinimas","Skirtingas apšvietimas"];
var picGeoOptions	= ["Geometrija","H. padėtis","V. padėtis","Laikrodis","Žingsnis"];//Geometry 无翻译
var picAdWhiteBal	= ["R stiprinimas","Ž stiprinimas","M stiprinimas","R nuokrypis","Ž nuokrypis","M nuokrypis"];
var souOptions		= ["Garso išankstinė nuostata","Balansas","Garso delsa","SRS TSHD","Automatinis garso stiprumo valdymas",
						"SPDIF tipas","SPDIF delsa","TV vieta","Garso kalba","Garso tipas",
						"Garsinis apibūdinimas","Skaitmeninis audio išvesties tipas","Dolby profesionalūs nustatymai"];
var soundOutputoptions =["TV garso DAP išvestis","Išorinė AVR atkodavimo išvestis"];
var inteligenteqoptions 	=["Sufokusuota","Stipriai"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Išj."];
var colorSpace      = ["Auto","Savasis","Naudotojo","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Erdvinio garso efektas","Dialogo garsintuvas","Bosų garsintuvas","Išmanusis garsinimas","Duomenų rinkimas","Grafinis reguliatorius","Sumanus EQ"];
var chOptions		= ["Kanalų skenavimas","Kanalų sąrašas","EPG","Tvarkytuvė","Kanalo diagnostika",
						"laiko postūmis","Subtitrai","Teletekstas","Kanalų sąrašo tipas"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalo stiprumas","Signalų kokybė","Dažnis (KHz)","Serviso ID","Tinklo ID","Tinklo pavadinimas"];
var chScanOptions	= ["Valstybė","Tiunerio režimas","Automatinė paieška","Automatinis atnaujinimas","Rankinis analoginis skenavimas",
						["Rankinis kabel. sken.","Rankinis antenos sken.","Palydovo rankinis nustatymas"],"Palydovinės antenos statymas","Mėgiamo tiklo pasirinkimas","Išvalyti kanalų sąrašą",];
var favNetDes		= "Pasirinkite mėgstamiausią tinklą";
var tuner			= ["Kabelinė TV","Antena","Palydovas"];//Satelite 无翻译
var passError		= "Slaptažodis neteisingas.\nPrašome įvesti dar kartą!";
var chType			= ["Analoginių kanalų: ","Skaitmeninių kanalų: "];
var chScanStatus	= ["Būklė: Skenuojama","Būklė: skenavimas baigtas","Būklė: skenavimas atšaukiamas","Būklė: skenavimo klaida"];
var chScanPara		= ["Dažnis (KHz)","Moduliacija","Simbolių dažnis (Ksym/s)","Tinklo ID","Sistema",
						"Tiksliai derinti","Signalo stiprumas","Signalų kokybė","Skenavimo rež.","Kanalo ID"];
var chScanParaMHZ      = ["Dažnis (MHz)"];
var chAtvManSys		= ["VAKARŲ EUR.","RYTŲ EUR.","JK","Prancūzija"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Ar norite išvalyti kanalų sąrašą?";
var chDeletDes		= "Ar norite pašalinti kanalą?";
var chOperator		= ["„Ziggo“","UPC","Kita"];
var chScanType		= ["Skaitmeninis & Analoginiai","Skaitmeninis","Analoginis"];
var chScanMode		= ["Pilnas","Išsamiai","Greitai"];
var bookingModes	= ["Įrašyti","Priminimas"];
var dayName			= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthName		= ["Sau", "Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spa","Lap","Gru"];
var filter			= ["Filtras","Tipas","Potipis"];
var chEpgFirstGenre	= ["Filmas","Naujienos","Laida","Sportas","Vaikams","Muzika","Menai","Socialiniai","Švietimas","laisvalaikis","SPECIAAL"];
var chEpgSecondGenre= [["Drama","Detektyvas","Nuotykiai","Mokslinė fantastika","Komedija","Muilo opera","Romantika","Rimta","Filmas suaugusiems"," "," "," "],
						["Aktualijos","Orų prognozė","Naujienų žurnalas","Dokumentika","Diskusija"," "," "," "," "," "," "," "],
						["Laida","TV žaidimas","Estradinis koncertas","Pokalbių laida"," "," "," "," "," "," "," "," "],
						["Sportas","Specialūs įvykiai","Sporto žurnalai","Futbolas","Tenisas",
							"Komandinis sportas","Atletika","Auto ir moto sportas","Vandens sportas","Žiemos sportas",
							"Žirgų sportas","Kovos menai"],
						["Vaikams","Ikimokyklinio amžiaus","Pramogos 6–14 m. vaikams","Pramogos 10–16 m. vaikams","Informacija","Animaciniai filmai"," "," "," "," "," "," "," "],
						["Muzika","Rokas","Rimta","Folkloras","Džiazas","Miuziklas","Baletas"," "," "," "," "," "],
						["Menai","Scenos menai","Vaizduojamieji menai","Religija","Populiarioji kultūra",
							"Literatūra","Filmas","Eksperimentinė","Transliavimas","Naujoji medija",
							"Meno žurnalai","Mada"],
						["Socialiniai","Žurnalai","Ekonomika","Įžymūs žmonės"," "," "," "," "," "," "," "," "],
						["Švietimas","Gamta","Technologija","Medicina","Užsienio valstybės","Socialiniai mokslai","Tolimesnis švietimas","Kalbos"," "," "," "," "],
						["Laisvalaikio hobiai","Turizmas","Amatai","Automobilizmas","Kūno rengyba ir sveikata","Maisto gaminimas","Reklama","Sodininkystė"," "," "," "," "],
						["Originalo kalba","Juoda ir balta","Neskelbta","Tiesioginė transliacija"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanalo praleidimas","Kanalų rūšiavimas","Kanalų redagavimas","Kanalo trynimas","kanalas apsikeitimo","kanalas įterpti"];
var chEditPara 		= ["Tinklo pavadinimas","Kanalo numeris","Kanalo pavadinimas","Dažnis","Spalvų sistema","Garso sistema"];
var chSatTitles		= ["Palydovo tipas","Palydovinės antenos statymas","Pasirinkti palydovą"];
var chSatEidtOptions= ["Palydovo pavadinimas","Padėtis","LNB Galia","LNB dažnis (MHz)","Diseqc įvestis",
						"22 KHz toninis ","tonas sprogo","Dažnis (KHz)","Simbolių dažnis (Ksym/s)","Poliarizacija",
						"Signalo stiprumas","Signalų kokybė","Palydovo būsena"];
var chSatAutoPromt	= [["Viskas","Tinklas"],
						["Viskas","Laisvas"]];
var chSatAutoScanOptions=["Pasirinkti palydovą","Skenavimo rež.","Кanalų"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universalus",];
var chSatDiSEqCInput= ["Išjungti","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Įj.","Išj."];
var chSatToneBurst	= ["Išjungti","tonas sprogo A","tonas sprogo B"];
var chSatPolarization= ["Horizontaliai","Vertikaliai"];
var chSatSetupOptions=["Antenos tipas","Imtuvas","Dažnių juosta"];
var chSatAntennaType= ["„SingleCable“","Universalus"];
var chSatUserBands	= ["1 vartotojo juosta","2 vartotojo juosta","3 vartotojo juosta","4 vartotojo juosta","5 vartotojo juosta","6 vartotojo juosta","7 vartotojo juosta","8 vartotojo juosta"];
var chSatOthers		= ["Atsakiklis"];
var chSatSetupOthers= ["Naudotojas atpažintas"];
var pleaseSelectSat = "Pirmiausia pasirinkite palydovus!";
var subOptions		= ["Subtitrai","Skaitmeninių subtitrų kalba","Antroji skaitmeninių subtitrų kalba","Subtitrų tipas"];
var ttxOptionsCon      = ["Puslapių kalbos dekodavimas","Skaitmeninio teleteksto kalba"];
var subType			= ["Normalus","Turintiems klausos negalią"];
var netIntf     	= ["Eternetas","Belaidis "];
var netConnDes		= ["TV bando tinklo ryšį.\nPalaukite.",
						"Prisijungimo prie tinklo testas pavyko!",
						"Prisijungimo prie tinklo testas nepavyko."];
var netSsidError	= "SSID galimas ilgis yra 1~32 simbolių. Patikrinkite SSID.";
var netOthers		= ["PIN kodas "];
var netWlessAutoDes	= ["Prieš spustelėdami „Gerai“, patikrinkite, ar šis PIN kodas įdiegtas prieigos taške.",
						"Prieš spustelėdami „Gerai“, per 120 sekundžių paspauskite prieigos taško mygtuką."];
var netConnRemind	= ["Slaptažodis neteisingas!",
						"Jungiama. Palaukite!",
						"Sujungti pavyko ir IP priskirtas!",
						"Sujungti nepavyko",
						"TV skenuoja Ap\nPalaukite",
						"Prie TV neprijungtas belaidis prietaisas!"];
var netWireIpOptions= ["IP nustatymas","Adreso tipas","IP adresas","Potinklio kaukė","Num. tinklų siet.","Pagrindinė DNS","Papildoma DNS"];
var netWireConnRemind= ["Įveskite vertę tarp 0 ir 255.",
						"Sėkmingai pajungta!",
						"Įveskite teisingą adresą",
						"Sėkmingai pajungta!",
						"Nepavyko prisijungti!",
						"Jungiama. Palaukite!",
						"Įveskite reikšmę nuo 1 iki 223."];
var netFlixOptions	= ["Pasyvinti","ESN"];
var netFlixDes	 	= ["Ar tikrai norite pasyvinti?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Prog. įrang. atnauj.";
var netUpdateDialogTitle = "Programinė įranga atnaujinama";
var netBGDownloadTitle 	= "Atsisiunčiama";
var netUpdateLoadingPrompt= ["Ieškoma pagerinimo, palaukite.",
							"Programinė įranga atsiunčiama... Palaukite.",
							"Prašome NEIŠJUNGTI TV, kol atnaujinama programinė įranga!",
                            "Privalomas programinės įrangos naujinys automatiškai atsiųstas."];
var netUpdatePrompt= ["Sveikiname, turite naujausią programinės įrangos versiją!",
						"Rasta nauja programinės įrangos versija XXXXX. Ar norite atsisiųsti dabar? Tai gali šiek tiek užtrukti, priklausomai nuo jūsų tinklo būsenos.",
						"Nepavyko prisijungti!",
						"Nepavyko gauti duomenų, bandykite dar kartą vėliau.",
						"Atnaujinimo analizė XML nepavyko!",
						"Sujungti nepavyko",
						" Programinė įranga parsiųsta sėkmingai. Ar norite pradėti įrašymą į FLASH atmintį?",
						"Duomenys prarasti! Nepavyko atsiusti!",
						"Nepavyko patikrinti paketo, bandykite dar kartą!",
						"Tinklas neveikia. Patikrinkite ir pajunkite iš naujo...",
						"Nepavyko atnaujinti. Iš naujo paleiskite TV!",
						"Naujovinimo failas buvo netikėtai pašalintas. Atlikite naujovinimą per tinklą dar kartą.",
						"Programą atsisiųsti į foną pavyko.  Ar norite atlikti naujovinimą?"];
var netUpdateButtonText = ["Atsisiųsti", "Naujinti", "Vėliau", "Niekada", "Gerai","Tęsti"];
var autoDetectPrompt = ["Rasta nauja programinės įrangos versija XXXXX. Ar norite atsisiųsti dabar? Tai gali šiek tiek užtrukti, priklausomai nuo jūsų tinklo būsenos.",
						"Rasta nauja programinės įrangos versija XXXX. Ar norite naujinti dabar?",
						"Naujovinimo procesas per tinklą praeitą kartą buvo nutrauktas. Reikia naujovinti dar kartą.",
                        "Naujos programinės įrangos versija XXXX dar nebaigta atsiųsti. Ar norite tęsti dabar?",
                        "Programinė įranga atsiųsta. Norite naujinti dabar?"];
var sysOptions		= ["El. vadovas","Meniu kalba","Laikmatis","Užrakinti","Įvesties nustatymai",
						"Prog. įrang. atnauj.","Vieta","HbbTV režimas","Slapukai","Bendroji sąsaja (CI)",
						"Papildomi nustatymai","Atstatyti pard.","LED kontrolinė lemputė"];
var sysResetDes		= "Ar tikrai?";
var sysMenuLangOptions=["Kalba","Norima garso kalba","Antroji pageidaujama garso kalba"];
var sysTimerOptions	= ["Laiko juosta","Regiono pavad.","Laikrodis","Laukimo rež. laikmatis","Automatinė parengtis", "Country region"];

var sysTimeZone		= ["Kaip transliuotojas","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Išj.","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Išj.","4 val.","6 val.","8 val."];
var sysRegionName	= ["Madridas","Kanarai"];
var sysClockOptions	= ["Automatinis sinchronizavimas","Data","Laikas","Įjungimo laikmatis","Laikmatis",
						"Įjungti kanalą","Išjungimo laikmatis","Laikmatis"];
var sysTimer		= ["Išj.","Kasdien","Kartą"];

var sysInputSet		= ["Jokio pavadinimo","DVD","Blu-ray","HDD","DVDR",
						"HD įraš.","Žaidimas","Vaizdo magn.","Asmeninis kompiuteris","Skaitmeninis priedėlis",
						"HD skaitm. priedėlis","Kamera","Įrašymo įrenginys","Kita"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-VIDEO"];
var sysUpdate		= ["Per USB","Per Tinklo","Pagal kanalą"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Eteryje negalima rasti naujos programinės įrangos!",
						"Rasta nauja programinės įrangos versija XXXX. Ar norite naujinti dabar?",
						"Įkiškite USB atmintuką.",
						"Nepavyko patikrinti paketo, bandykite dar kartą!",
						"Kol vyksta programinės įrangos atnaujinimas, atjungti USB atmintinę išjungti televizorių DRAUDŽIAMA!",
						"Programinė įranga sėkmingai atnaujinta.\nTV automatiškai pasileis iš naujo!",
						"Rasta nauja programinės įrangos versija XXXXX. Ar norite atsisiųsti dabar? Tai gali šiek tiek užtrukti, priklausomai nuo jūsų tinklo būsenos.",
						"Atsisiunčiama",
						" Programinė įranga parsiųsta sėkmingai. Ar norite pradėti įrašymą į FLASH atmintį?",
						"Atn. nepavyko!",
						"Ieškoma bylų naujinių",
						"Programinė įranga sėkmingai atnaujinta.\nPrašome išjungti ir vėl įjungti TV."];
var sysProductInfo	= ["Esama versija","Produkto pavad","Gamintojo pavadinimas","Šasi pavadinimas"];
var sysCiDes		= ["Nėra jokios CI kortelės."];
var sysAdOptions	= ["DivX(R) registracija","DivX(R) išregistravimas","T-Link","Authorization Error","Išregistravimas patvirtinamas",
						"Nuoma patvirtinama","Nuoma nebegalioja","Bluetooth deklaracijos ID"];
var sysRegistDes	= ["Registruokite prietaisą, kad žiūrėtumėte DivX apsaugotus video",
						"Registracijos kodas",
						"Registruokitės http://vod.divx.com"];
var sysDregistDes	= ["Išregistravimo kodas:",
						"Išsiregistruokite adresu http://vod.divx.com",
						"Tęsti registraciją?"];
var mediaAuthorization = ["Šis įrenginys neturi leidimo atkurti vaizdo įrašo su DivX(R) apsauga."];
var deregistrationConfrimation = ["Jūsų prietaisas jau registruotas.","Ar tikrai norite išregistruoti?"];
var rentalConfirmation = "DivX(R) nuoma naudoja XXXX iš YYYY peržiūrų. Tęsti?";
var rentalExpired 	= "DivX(R) nuoma naudota XXXX kartų iš YYYY. DivX nuomos laikas baigėsi.";
						
						
var sysLockOptions	= ["Kanalo užrakinimas","Laiko intervalo blokuotė","Vaikų apsaugos reitingas","Įvesties blokavimas","Priekinio skydelio užrakinimas","Užrakinti nustatymą",
						"Pakeisti slaptažodį","Maks. garso stiprumas","Išvalyti viską"];
var sysTimeIntervals= ["Blokuotės tipas","Pradžios laikas","Pabaigos laikas"];
var sysRatingOptions= ["Nieko","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-vertinimas (Ispanija)"];
var changePass		= ["Pakeisti slaptažodį","Naujas slaptažodis","Patvirtinti slaptažodį"];
var changePassDes	= ["Slaptažodis neteisingas.\nPrašome įvesti dar kartą!",
						"Slaptažodis neatitinka.\Prašome įvesti dar kartą!",
						"Slaptažodis sėkmingai nustatytas!",
						"Šis kodas per paprastas slaptažodžiui.\nĮveskite dar kartą!"];
var sysPowerOnChOptions= "Pasirinkti režimą";
var sysPowerOnCh	= ["Paskutinė būsena","Naudotojo pas."];
var netWlessSecu    = ["Atidaryti","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nieko","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ",""];
var netWlessSecu3	= ["Nieko","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)",""];
var netOptions		= ["Interneto ryšys","Sąsaja","Belaidžio ryšio nuostatos","IP nuostatos","Informacija",
						"Ryšio bandymas","DLNA","TV nuot. vald.","„Netflix“ nuostatos","„WiFi“ TV nuoroda",
						"Adreso tipas","IP adresas","Potinklio kaukė","Num. tinklų siet.","Pagrindinė DNS",
						"Papildoma DNS","SSID","BSSID","Įveskite SSID:","Naudotojo ID"];
var chEditDes		= ["Dubliuotas kanalo numeris!","Spauskite raudoną mygtuką, kad pašalintumėte šį simbolį.","Netinkami kanalų numeriai."];
var chEpgNoProgram	= "Šiuo metu nėra programos informacijos, pirmiausia raskite kanalą!";
var chEpgWords		= ["Programų gidas","Programos duomenų nėra.","Kanalas užrakintas!","Programos informacijos nėra.","Programos pavadinimo nėra."];
var chEpgBooking	= ["Tvarkaraštis informacija", "Kanalo numeris","Pradžios data","Pradžios laikas","Pabaigos laikas",
						"Kartoti tipą","Tvarkaraščio tipas","Įtraukti","Pakeisti","Keisti",
						"Pridėti / keisti"];
var epgHotKey		= ["Pirmesnė diena","Paskesnė diena","Filtras","Tvarkaraščių sąrašas","Įtraukti tvarkaraštį"];
var chEpgBookRemind	= ["Netikslus pradžios laikas","Netikslus pabaigos laikas","Dubliuotas tvarkaraštis","Sėkmingai išsaugota.","Sėkmingai ištrinta."];
var chSchePara		= ["Tvarkaraščių sąrašas","Pradžios laikas","Pradžios data","Programos pavadinimas","Kanalo pavadinimas",
						"Trukmė","Kartoti","Tvarkaraštis","Taisyti","Panaikinti"];
var dateTimer		= ["Kartą","Kasdien","Savaitės"];
var scheduleDeleteReminds="Ar norite pašalinti šį tvarkaraštį?";
var scheduleNoLists	= "Tvarkaraščių sąrašo nėra. Spauskite raudoną mygtuką, kad sudarytumėte naują.";
var chListWords		= ["Kanalų sąrašas","Pasirinkti sąrašą","Tiunerio režimas","Pridėti prie parankinių","Pašalinti",
						"Pasirinkti kanalų sąrašą","Pasirinkti imtuvo režimą","Keisti"];
var chListType		= ["Viskas","Skaitmeninis","Analoginis","Radijas","Laisvas","Parankiniai"];
var chAutoScanOptions=["Pasirinkti operatorių","Kanalo tipas","Automatinė paieška"];
var souSoundType	= ["Negaliojantis","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dvigubas 1","Dvigubas 2","Dvigubas 2",
						"„NICAM“ mono","„Nicam“ stereofon.","„Nicam“ dual1","„Nicam“ dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muzika","Filmas","Aiškus balsas","Standartas","Asmeninė"];
var picAdRgbMode	= ["Išj.","Tik raudonas","Tik žalias","Tik mėlynas"];
var picAdOptions	= ["Triukšmo slopinimas","MPEG NR","RGB mode","Dinaminis kontrastas","LED judėjimo aiškumas",
						"Kūno tonas","Filmo režimas","Žaidimo režimas","Spalvų temperatūra","Baltos Spalvos Balansas",
						"Sustabdyti","Juoda Praplėtimas","Perteklinis skenavimas","Gama korekcija","HDMI režimas","10P baltos spalvos balansas","Spalvų spektro išplėtimas",
						"Susiliejimo mažinimas","Vibracijos sumažinimas","Spalvų erdvė","Judėjimo aiškumas"];
var pic10Pwhite     = ["Intervalas","Raudona","Žalia","Mėlyna","Atstatyti","Spal.","Geltona","Žydra","Rausvai raudona"];
var picMotionClarity = ["Judėjimo būsena","Judėjimo interpoliacija","LED judėjimo aiškumas","Susiliejimo mažinimas","Vibracijos sumažinimas","Atstatyti"];
var picMotionMode   = ["Auto","Filmas","Sklandu","Išvalyti","Sportas","Klientas"];
var picResetDes		= "Visi asmeniniai nustatymai bus išjungti. Ar tikrai norite įvykdyti pasirinktą veiksmą?";
var pic10PReset     = "Ar tikrai norite išjungti 10P baltos šviesos balansą?";
var picMotionReset  = "Ar norite išjungti judėjimo aiškumą?";
var picColorSpaceReset    = "Ar norite išjungti spalvų erdvę?";
var picOptions		= ["Vaizdo išankstinė nuostata",
						"Foninis apšvietimas","Šviesumas","Kontrastingumas","Sotis","Atspalvis","Aštrumas","Spalvų temperatūra","Ekrano režimas","Autom. formatas",
						"Sportinio režimo vaizdo gerinimas","3D režimas","3D naršymas","ECO Nustatymai","Geometrija",
						"Papildomi nustatymai","Taikyti paveikslėlio būseną","Vaizdo atkūrimas"];
var picSize			= ["16:9 formatas", "Formatas 4:3", "14:9 formatas", "Cinerama",
						"16:9 priartintas", "16:9 priartintas, pakeltas","14:9 priartintas","Išplėstas priartintas","Platus priartintas",
						"Priartintas 2","Platus priartintas 2","Rodyti vietinį sutapimą","Pagal taškus","Originalus","Panorama"];
var others			= ["Garso stiprumas","Transliacija","Slaptažodis","Būklė","Išsaugoti","Pakeisti","Pradėti","Išeiti","Ieškoti","Panaikinti",
						"Nieko","Automatinis","Skenuoti","Sauga","Sujungti","Atnaujinti","Iš naujo","Sustabdyti","Nustatymai","Кanalų",
						"Taisyti","Įterpti","Signalo!","Baigti","Stereo","Garsas","Šaltinis","Nėra garso","Patarimai","Atstatyti",
						"Klientas","Sąranka","Išsaugoti","Naudotojas","Uždaryti klaviatūrą","Saugos būsena","Kasdien","PVR sąrašas"];
var direction		= ["Kairė","Dešinė","Aukštyn","Žemyn"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nežinoma"];
var soundChannels   = ["Nežinoma","Mono","Žemadažnis","Dvigubas mono","Stereo","Stereo sub.","Stereo Dolby aplinka","Erdvinis, 2 kanalai","Erdvinis","3.0 Ch","4.0 Ch","5.0 Ch","Mono lfe.","Dual Mono lfe.","Stereo lfe.","Aplinka 2 Ch lfe.","Aplinke lfe.","3.1 Ch","4.1 Ch","5.1 kanalai","7.1 kanalai","Bendra Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Kairė","Dešinė","Kita"];
var prompts			= ["Pareguliuokite vaizdo nuostatas taip, kad jos geriausiai tiktų jūsų žiūrėjimo aplinkai.",
						"Pareguliuokite ryškumą. Kuo arčiau 100, tuo ryškiau.",
						"Pareguliuokite kontrastą. Kuo arčiau 100, tuo didesnis vaizdo šviesių ir tamsių zonų skirtumas.",
						"Pareguliuokite sodrumą. Kuo arčiau 100, tuo sodresnė spalva.",
						"Pareguliuokite aiškumą. Kuo arčiau 100, tuo aiškesnės detalės.",
						"Pareguliuokite foninį apšvietimą. Kuo arčiau 100, tuo ryškesnis ekranas.",
						"Pareguliuokite atspalvius. Ši nuostata keičia spalvų tonus.",
						"Pasirinkite tokį vaizdo formatą, kuris geriausiai tinka žiūrimai laidai.",
						"Konfigūruokite energijos taupymo parinktis.",
						"Prijungę kompiuterį pareguliuokite ekrano geometrijos nuostatas.",
						"Pasirinkite daugiau papildomų vaizdo nuostatų.",
						"Atkurkite visas numatytąsias vaizdo nuostatas.",
						"Pasirinkite garso režimą, tinkantį jūsų asmeniniams poreikiams.",
						"Pareguliuokite kairio ir dešinio kanalo garsumo balansą.",
						"Garso atkūrimo sistema „TruSurround HD“ užtikrina sodrų, aiškų garsą tiek žemais, tiek ir aukštais dažniais.",
						"Skaitmeninės sąsajos formatas, leidžiantis prijungti televizoriaus skaitmeninio garso signalo išėjimo jungtį prie namų kino teatro garso įrangos.",
						"Pasirinkite garso kalbą, tinkančią jūsų asmeniniams poreikiams.",
						"Aktyvinkite silpnaregiams skirtą funkciją, kad ir jie galėtų mėgautis televizijos laidomis.",
						"Išbandykite savo TV vaizdą, garsą ir signalą.",
						"Pasirinkite kanalo sąrašo tipą, atitinkantį jūsų televizoriaus signalą.",
						"Pasirinkite ekrano apačioje rodomų programos subtitrų kalbą.",
						"Peržiūrėkite dabartinio kanalo tekstą ir vaizdus.",
						"„Digital Living Network Alliance“. Per namų tinklą klausykitės muzikos, žiūrėkite nuotraukas ir vaizdo įrašus iš kitų įrenginių, pavyzdžiui, kompiuterio.",
						"Išmaniojo telefono turinį žiūrėkite per televizorių, o išmanųjį telefoną naudokite kaip nuotolinį televizoriaus valdymo pultą.",
						"Su „Miracast“ suderinamo „Android“ įrenginio turinį žiūrėkite per televizorių.",
						"Užblokuokite televizorių.",
						"Savo įrenginiui pasirinkite vardą.",
						"Pasirinkite žiūrėjimo aplinką.",
						"Atkurkite visas numatytąsias sistemos nuostatas."];
var initialTitle	= ["Sveikiname","Pirminė sąranka"];
var initialPrompt	= ["Dabar pat atlikite pradinę sąranką ir atsidursite jaudinančios patirties kupiname pasaulyje!",
						"Pasirinkite savo kalbą:",
						"Pasirinkite savo šalį:",
						"Pasirinkite savo vietą:",
						"Pasirinkite savo tinklo sujungimo tipą:",
						"Pasirinkite laidinio tinklo sujungimo režimą:",
						"Nepavyko prisijungti prie xxxxxxxxx! Prijunkite prietaisą pagal nurodytą diagramą arba spauskite į kairę, kad išvalytumėte nustatymus.",
						"Prisijungta prie xxxxxxxxx! Spauskite į dešinę, kad tęstumėte.",
						"1) Gali būti, kad šis televizorius turi įrengtą belaidžio ryšio adapterį\n 2) Jeigu turite belaidžio ryšio USB adapterį, prijunkite jį prie televizoriaus. Tada pasirinkite belaidžio tinklo ryšio režimą",
						"Nuskaitoma. Palaukite...",
						"Prie TV neprijungtas belaidis prietaisas!",
						"Patikrinkite, ar šis PIN kodas įdiegtas į AP prieš spausdami mygtuką \"Sekantis\".",
						"Paspauskite AP stūmimo mygtuką per 120 sekundžių prieš paspaudami į dešinę!",
						"WPS (apsaugota „Wi-Fi“ sąranka)",
						"PIN (asmeninio identifikavimo skaičius)",
						"PBC (stūmimo mygtuko konfigūracija)",
						"Toliau pateiktas turinys gali būti pasiekiamas tik esant tinklo jungčiai. Ar norite praleisti tinklo nustatymus?",
						"Yra programinės įrangos naujinių, kuriuos reikia atsisiųsti; tai gali užtrukti, priklausomai nuo tinklo būsenos.",
						"Programinės televizoriaus įrangos atnaujinimas užtikrina, kad naudositės naujausiomis funkcijomis ir paslaugomis.",
						"Negalėsite naudotis naujausiomis funkcijomis ir paslaugomis. Ar norite praleisti programinės įrangos naujinimą?",
						"Spauskite dešinįjį mygtuką, jeigu norite tęsti.",
						"Neišjunkite maitinimo vykstant naujinimui, nes gali sugesti televizorius.",
						"Jei norite atnaujinti, pasirinkite NO (Ne).",
						"Atnaujinama, palaukite.",
						"Taip pat galite atnaujinti programinę įrangą NAUJINYJE SISTEMA / PROGRAMINĖ ĮRANGA.",
						"Pagal pasirinktą valstybę reikia slaptažodžio nustatymo.\nNustatykite savo TV kodą ir jį patvirtinkite.",
						"This code is too simple.\nPlease use different digits.",
						"Sveikiname, pirminis nustatymas baigtas. Konfigūravimą galite keisti, įjungę pagrindinį meniu ir susijusius maniu papunkčius.",
						"Pasirinkite apsaugos režimą:",
						"Pasirinkite bevielio tinklo prijungimo būseną:",
						"Tinklas"];
var initNetCabAndDonRe = ["Neprijungtas tinklo kabelis, įjunkite jį!","Nėra integruoto bevielio adapterio arba pateikto bevielio USB adapterio."];
var initChPrompt = ["TV kanalų diegimas","Pasirinkite palydovo nuskaitymo tipą.","Vyksta automatinis derinimas...","Rasti šie antenos kanalai:","Pasirinkite kabelinio nuskaitymo tipą.","Iš pateikto sąrašo pasirinkite vieną tiekėją.","Konfigūruokite nuskaitymo informaciją","Rasti šie kabeliniai kanalai:","Pasirinkite vieną operatorių iš šio sąrašo","Pasirinkite palydovus nuskaitymui arba redaguokite pasirinktą palydovą","Nustatykite palydovo parametrus","Rasti toliau nurodyti kanalai. Kanalų nuskaitymą galima atlikti dar kartą, pasirinkus kanalų nuskaitymą"];
var initClockPrompt = ["Suteiktą laiką gaukite tinklo!",
						"Nustatykite datą ir laiką:"];
var initialOptions	= ["Aplinka","Tinklo sąranka","Prog. įrang. atnauj.","Kanalo įdiegimas","Laikrodis"];
var initialHotkeys	= ["Atgal","Pasirinkti","Kitas"];
var initLocations	= ["Pagrindinis","Pirkti","Pard. su demo."];
var initNets		= ["Laidinis","Belaidis ","Neturiu tinklo jungties"];
var initWireManuals	= ["IP adresas","Potinklio kaukė","Num. tinklų siet.","Pagrindinė DNS","Papildoma DNS"];
var initSoftUpdates = ["Naujinti dabar","Naujinti vėliau"];
var initChannelIns	= ["Tęsti","Nenoriu įdiegti kanalų"];
var initChScanTypes	= ["Skaitmeninis & Analoginiai","Skaitmeninis","Analoginis","Nenoriu nuskaityti"];
var initChDvbts		= ["Antenos ATV kanalai:","Antenos DTV kanalai:"];
var initChDvbcs		= ["Kabeliniai ATV kanalai:","Kabeliniai DTV kanalai:"];
var initChDvbss		= ["Palydoviniai kanalai:"];
var initChDvbSOther	= ["Nenoriu nuskaityti palydovo"];
var initEndConnectedStatus= ["Išjungta","„WiFi“ prijungta","Laidas prijungtas"];
var initEndInstallations= "Įdiegti XXXX kanalai";
var initEndUpdate	= ["Atnaujinta"];

var audioScenes 	= ["Pastatomas","Montuojamas prie sienos"];			
var screenSavers	= ["Šiuo metu nėra programos informacijos, pirmiausia raskite kanalą!",
						"Nėra signalo!",
						"Užšifruota",
						"Tik duomenys",
						"Garso programa",
						"Nėra garso ir vaizdo",
						"Nėra",
						"Teleteksto nėra",
						"Programos duomenų nėra.",
						"Programa užrakinta!",
						"Programa užrakinta!\nPaspauskite OK ir įveskite savo kodą.",
						"Programos informacijos nėra.",
						"Programa kenksminga nepilnamečiams.\nPaspauskite OK (gerai) ir įveskite savo kodą.",
						"Kanalas užrakintas!",
						"Kanalas užrakintas!\nPaspauskite OK ir įveskite savo kodą.",
						"Įvestis užrakinta!\nPaspauskite OK ir įveskite savo kodą.",
						"Nesuderinama!",
						"Paslauga šiuo metu neteikiama",
						"Įvestis užrak.!",
						"Programos pavadinimo nėra.",
						"Jokios funkcijos"
						];
var chBookingPromt	= ["Šį kanalą suplanuota įrašyti, TV pradės įrašinėti.",
						"Rastas tvarkaraštyje numatytas įrašymas.\n Įjunkite XXXX, kad įrašytumėte",
						"Šiam kanalui nustatytas priminimas.",
						"Rastas tvarkaraštyje numatytas įrašymas.\n Įjunkite XXXX"];
var timeUnit		= ["Sekundė","min"];
var ciPromt			= ["Pasikeitė tinklo duomenys. Norėdami atnaujinti, galite atlikti atnaujinimo nuskaitymą.",];
var othersPromt		= ["Prašome palaukti...",];
var menuOptions		= ["Vaizdas","Garsas","Kanalas","Tinklas","Sistema"];
var optionOptions	= ["Vaizdo išankstinė nuostata","Garso išankstinė nuostata","Sustabdyti","T-Link","laiko postūmis","PVR","Tvarkaraščių sąrašas","Nustatymai"];
var optionTLinkPromt= [["Automatinis įjungimas","Automatinė parengtis","Meniu vadovas"],
						["Įjungti maitin.","Budėjimas","Stiprintuvo garsumas"]];
var powerPromt		= ["TV tuoj išsijungs! Paspauskite bet kurį klavišą, kad nutrauktumėte."];
var ttxLanguage		= ["VAKARŲ EUR.","RYTŲ EUR.","Rusų","Arabų / hebrajų","Persų","Arabų","Baltarusių","Graikų","Turkų"];
var ttxOptions		= ["Parodyti","Ciklinis subpuslapių parinkimas","Kalba","Signalinis puslapis","Naujienų pranešimai"];
var weekday         = ["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","šeštadienis"];
var lcnConfflict	= " Su šios programos priėmimu kilo problemų. %d kanalu galima kita versija.";
var inShopMode		= "Jūsų TV nustatyta parduotuvės būsena. Norėdami perjungti į namų būseną, nustatykite „System“ (sistema) ir meniu pakeiskite „Location“ (vieta).";
var nitRefresh		= "Tinklo duomenys pakito. Ar norite atlikti atnaujinimų skenavimą?";
var picHDMIMode     = ["Auto","Grafika","Vaizdas"];

var glassRemind    	= ["Suderinkite savo 3D akinius su TV\n(3D akiniuose palaikykite ĮJUNGIMO mygtuką).","Jūsų 3D akiniai prijungti prie TV",""];
var pvrRemind 		= ["Neištraukite USB įrenginio arba neišjungite iš tinklo"];
var pvrConName   	= ["PVR","Programos informacija:",["Note:If you record the HD channel,please to select  the  disk(of speed >5.0MB/sec),and to select the disk (of speed >3.0MB/sec) when yourecord the SD channel.","Įrašytas video išsaugotas  \"pvr\"  aplanke."],"Sustabdyti","Įrašyti","valanda","Minutė","Trukmė","Patarimai","Naudokite rodykles, kad nustatytumėte įrašymo trukmę."];
var pvrDisRemind 	= "Norėdami įrašyti, įdėkite USB jungtį.";
var pvrRemindWords  = ["Norite išeiti?",
							"Norite nustoti įrašinėti ir peržiūrėti įrašytas bylas?",
							"Diskas išstumiamas.",
							"Nepakanka vietos diske.",
							"Nėra įrašytų bylų. Pradėti įrašinėti.",
							"PVR negali paleisti koduoto kanalo.",
							"Nėra tokios funkcijos",
							"Sėkmingai išsaugota.",
							"Ar norite sustabdyti įrašymo procesą ir pakeisti įvesties šaltinį?",
							"TV nustos įrašinėti. Norite baigti?",
							"PCR įrašymui reikia gerai veikiančio TV signalo, patikrinkite signalą."];
var pvrChangeCh 	= ["Ar norite įjungti kanalą?",
							"Ar norite sustabdyti įrašymo procesą ir pakeisti kanalą?"];
var pvrChangeToPIN8	= ["Norite pakeisti šaltinį į įrenginį, kuris prijungtas prie SCART įvesties?",
				    		"Norite nustoti įrašinėti ir pakeisti šaltinį į įrenginį, kuris prijungtas prie SCART įvesties?"];
var pvrChangeToCEC  = ["Norite pakeisti šaltinį į įrenginį, kuris prijungtas prie HDMI įvesties?",
				  			 "Norite nustoti įrašinėti ir pakeisti šaltinį į įrenginį, kuris prijungtas prie HDMI įvesties?"];
var pvrGuideJump    = ["Norite įeiti į EPG?",
							"Ar norite sustabdyti įrašymo procesą ir įeiti į EPG?"];
var pvrMediaJump    = ["Norite įeiti į Media?",
							"Ar norite sustabdyti įrašymo procesą ir įeiti į Media?"];
var timeshiftExtra	= ["Sustabdyti laiko keitimą ir perjungti keisti kanalą?",
						"Norite sustabdyti laiko poslinkį ir pakeisti šaltinį į įrenginį, kuris prijungtas prie SCART įvesties?",
						"Norite sustabdyti laiko poslinkį ir pakeisti šaltinį į įrenginį, kuris prijungtas prie HDMI įvesties?",
						"Laiko keitimas negali paleisti koduoto kanalo.",
						"Norite sustabdyti laiko poslinį ir įvesti EPG?",
						"Sustabdyti laiko keitimą ir perjungti televizorių į USB režimą?",
						"Sustabdyti laiko keitimą ir perjungti keisti įvesties šaltinį?",
						"Norėdami įrašyti, įdėkite USB jungtį.",
						"Disko dydis per mažas.",
						"TV užbaigs dabartinį laiko poslinkį. Norite išeiti?"];
var timeshiftStatus	= ["Greitai atgal","Sustabdyti","Groti","Pauzė","Greitai pirmyn"];
var pvrPowerOffRemind= ["Budėjimo įrašymas","Budėjimas","Dabar TV įrašinėja. Ar norite išlaikyti įrašinėjimą, kai TV yra budėjimo būsenoje?"];
var timeshiftInitTitle= "Disko nustatymai";
var timeshiftInitReminds= ["Šis vedlys naudojamas nustatyti USB diską laiko keitimui. Pasirinkite nustatymų režimą.",
						 "Norint užtikrinti geresnį veikimą, rekomenduojame formatuoti USB diską. Bus ištrinti visi duomenys.",
						 "Pasirinkite failų dydį laiko keitimui.",
						 "Formatavimas",
						 "Nepakanka vietos diske.",
						 "Laiko keitimo failo sukūrimas",
						 "Greičio testas",
						 "Disko greitis per mažas (< %f MB/sek), kad veiktų laiko keitimo funkcija!",
						 "Diskas paruoštas laiko keitimui. Tačiau rekomenduojame pakeisti diską (greitis > %f MB/sek) geresniam veikimui.",
						 "Diskas paruoštas laiko keitimui."];
var timeshiftInitButtons= ["Formatuoti","Praleisti","Atšaukti","Gerai","Baigti","Išeiti"];
var timeshiftInitOther=["Disko greitis:","MB / s"];

var selectChoice	= "Ar tikrai?";
var chAtvStore		= "Išlaikyti kaip XXXX";
var chEpgFirstGenreUK= ["Filmas","Naujienos ir žinios","PRAMOGOS","Sportas","Vaikams","Švietimas","Gyvenimo būdas","Drama"];
var homePageTitleList = ["Programėlės","TV","VAIZDO ĮRAŠAI","Pagrindinis puslapis"];
var homePageFavAndAllName  = ["Mėgiamiausios programėlės","Visos programos"];
var homePageBackUp = ["El. vadovas","GuideOn"];
var homePageRemind   = ["Visos funkcijos pasiekiamos tik esant tinklo ryšiui.","Jūsų TV dar nėra jokių kanalų. Programos atsiras tik nuskaičius kanalus.","Nėra programa","Ieškoti kanalų dabar?"];
var homePageHistory = ["Istorija"];
var miracastTitle = ["„WiFi“ TV nuoroda","TCL įrenginys"];
var miracastRemind=["„WiFi“ TV nuoroda suteikia galimybę bendrinti įrenginio, pavyzdžiui, išmaniojo telefono ar planšetės, ir televizoriaus ekraną ir garsą belaidžiu ryšiu (t. y. be laidų). Taip tuo pačiu metu televizoriaus ekrane galima stebėti, kas rodoma išmaniajame telefone ar planšetės ekrane. Pavyzdžiui, galite paleisti vaizdo įrašą išmaniajame telefone ir tuo pat metu rodyti jį per televizorių arba planšetę naudoti kaip žaidimų valdiklį, jos turinį rodant dideliame televizoriaus ekrane.","„Wi-Fi“ TV nuoroda televizoriuje paruošta. Transliuokite vaizdą iš savo įrenginio į TV jau dabar.","Jungiama. Palaukite!","Nepavyko prisijungti!","Prisijungti nepavyko. Patikrinkite!"];
var homePageLittleWin = ["Nustatymai","Media","Mėgst. kanalai","Smart TV","EPG"];

var hbbtvStopRemind  = ["Norite nutraukti peržiūrą?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Paspauskite OPTION (funkcija), kad gautumėte daugiau informacijos";
var emptyListInfo = "Prie TV neprijungtas joks įtaisas!";
var optionVideoListArray_1 = ["Vaizdo išankstinė nuostata", "Garso išankstinė nuostata", "Paleisties režimas", "Ekrano režimas", "3D režimas", 
							  "K-D jungiklis", "Lauko gylis", "Subtitrai", "Garso takelis", "Pavadinimas", "Skyrius", "Informacija"];
var optionVideoListArray_2 = ["Vaizdo išankstinė nuostata", "Garso išankstinė nuostata", "Paleisties režimas", "Ekrano režimas", 
							  "Subtitrai", "Garso takelis", "Pavadinimas", "Skyrius", "Informacija"];
var bottomTipsText = ["Leisti / prist.", "Greitai atgal", "Greitai pirmyn", "Grojaraštis", "Nustatymai"];
var picturePresetArray = ["Standartas", "Dinaminis", "Natūralu", "Filmas", "Asmeninė"];
var videoPlayModeArray = ["Kartoti visus", "Kartoti vieną", "Normalus"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Platus priartintas", "Priartintas 2", "Platus priartintas 2", "Išplėstas priartintas", "Automatinis"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 priartintas", "16:9 priartintas", "16:9 priartintas, pakeltas", "Automatinis"];
var Mode3DArray = ["Išj.", "2D į 3D", "Vienas šalia kito", "Viršus ir apačia", "Linijos įdėliojimas"];
var videoOptionListArray = ["Išj.", "Įrašas", "Subtitrai", "Pavadinimas", "Skyrius"];
var subMenuTitleText = "Subtitrai";
var langMenuTitleText = "Garso kalba";
var titleMenuTitleText = "Pavadinimas";
var mode3DMenuTitleText = "3D režimas";
var langInfoText = "Įrašas";
var STOP_RESUME_INFO = "Stab. suvestinę";
var playListName = "pavadinimas";
var eb_tips = "Patarimai";
var ok_button = "Gerai";
var eb_info = ["Garso dekodavimo klaida.", "Vaizdo dekodavimo klaida.", "Garso formatas nepalaikomas.", 
			   "Vaizdo formatas nepalaikomas.", "Nepavyksta atverti šios bylos.", "Peržiūros klaida. Bandykite dar kartą.",
			   "Neatpažįstamas bylos formatas.", "Atsiprašome. Grotuvas nebeveikia.",
			   "Tokio bylos adreso nėra arba jis neteisingas.\n Iš naujo įdėkite laikmeną ir bandykite dar kartą.",
			   "Toliau leisti nuo ankstesnės\n peržiūros būsenos?"];
var frameTitleText = "Naujas įrenginys";
var eb_quit_info = "Ar tikrai norite baigti?";
var eb_yes = "TAIP";
var eb_no = "NE";
var offinfo = "Išj.";
var naInfo = "Nulis";
var consoleInfoArray = ["Greitai atgal", "Greitai pirmyn", "Leisti / prist.", "Grojaraštis"];
var cantOperateText = ["Funkcija nepalaikoma."];
var chapterChangeInfo = "Galimi tik skyriai nuo 1 iki XXXX.";
var metaDataArray = ["Pavadinimo / Laidos metaduomenys:", "Skyriaus metaduomenys:", "Garso metaduomenys:", "Subtitrų metaduomenys:"];
var metaTitleInfo = "Pavadinimas";
var metaChapterInfo = "Skyrius";
var videoLoadingInfo = "Analizuojama...";
var listLoadingInfo = "Įkeliama...";
var pgInfo = "Žemas reitingas:";
var fileNameText = "pavadinimas";
var fileDateText = "Data";
var fileSizeText = "Dydis";
var fileDurationText = "Trukmė";
var fileDirectorText = "Režisierius";
var fileCopyrightText = "Autorių teisės";
var fileArtistText = "Atlikėjas";
var fileAlbumText = "Albumas";
var fileGenreText = "Žanras";
var fileYearText = "Metai";
var fileGenreText = "Žanras";
var mainListArray = ["Viskas", "Vaizdas", "Vaizdas", "Muzika"];
var sortArray = ["pavadinimas", "Data"];
var parserArray = ["Normalus", "Rekursinis"];
var emptyTipsInfo = "Atsiprašome. Atpažįstamų bylų nėra.";
var emptyFolderInfo = "Atsiprašome. Atpažįstamų bylų nėra.";
var sortName = "Surūšiuota pagal";
var parserName = "Analizatorius";
var divx_str1 = "DivX(R) registracija";
var divx_str2 = "DivX(R) išregistravimas";
var infor_str = "Informacija";
var quickMenuEmptyText = "Nėra galimų parinkčių.";

var musicSoundPresetArray = ["Standartas", "Filmas", "Muzika", "Aiškus balsas", "Asmeninė"];
var musicInformationArray = ["pavadinimas", "Atlikėjas", "Albumas", "Žanras:", "Metai:", "Trukmė:"];
var playListName = "pavadinimas";
var playTipsInfo = ["Leidžiate pirmą bylą.", "Leidžiate paskutinę bylą."]
var musicNameInfo = "Name";
var musicArtistInfo = "Atlikėjas";
var musicAlbumInfo = "Informacija";
var optionSoundPresetInfo = "Garso išankstinė nuostata";
var optionBGMInfo = "Groti fone";
var optionAudioOnlyInfo = "Tik garsas";
var optionInfoText = "Informacija";

var remotePhoneConnecte = "XXXX prijungta prie TV!";
var tvRemoteTitle		= "TV nuot. vald.";
var tvRemoteDeveloper	= "Programą sukūrė TLC";
var tvRemoteDeviceTitle	= "Prietaiso pavadinimas:";
var remoteOption		= ["Medijų bendrinimas","Nuotolinis valdymas","Pagalba","Apie","Išmanusis sujungimas"];
var remotebottom		= "Atsisiųskite „TCL nScreen“ į savo išmanųjį telefoną";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Nuotraukų, vaizdo įrašų ir muzikos bendrinimas TV naudojantis telefonu.",
							"Atliktini žingsniai: \n 1. Telefone spustelėkite „TCL nScreen“. Telefoną prijunkite prie TV per tą patį „WiFi“ tinklą;\n 2. Spustelėkite „Media Sharing“ (medijos bendrinimas), kad naršytumėte media bylas;\n 3. Siųskite mediją į TV, kad paleistų atgal (su viena iš toliau nurodytų parinkčių)",
							"      a) aplanką / failą vilkite ir numeskite ant TV piktogramos ekrano viršuje;\n      b) telefoną pakreipkite į televizorių, kad paleistumėte pirmą failą;\n      c) medijų failą paleiskite telefone ir spustelėkite TV bendrinimo piktogramą.",
							"   4. Vykstant atkūrimui televizoriuje, pakratykite telefoną, kad būtų leidžiamas ankstesnis arba kitas failas."];
var controlReminds		= ["Telefoną naudokite kaip nuotolinį valdymo pultą televizoriui reguliuoti.",
							" ",
							"Atliktini žingsniai: \n 1. Telefone spustelėkite „TCL nScreen“. Telefoną prijunkite prie TV per tą patį „WiFi“ tinklą;\n 2.Telefoną sujunkite su TV per tą patį „WiFi“ tinklą."];
var helpDeviceWords		= "Kelių ekranų sąveika";
var helpBottom			= " Debesų technologijos eroje išmanieji prietaisai, pvz., telefonai ir TV, abipusiai sujungti. Su savo šeima bendrinkite mediją keletoje ekranų ir TV kontroliuokite telefonu! ";
var helpReminds			= ["Paruošimai\n 1. Atsisiųskite ir įdiekite „TCL nScreen“ iš „Google Play“ arba „Apple Store“.\n 2. Prijunkite telefoną su TV per tą patį „WiFi“ tinklą.",
							" ",
							"Rekomenduojamas telefonas\n   1. CPU: daugiau kaip 800 MHz\n   2. Atmintis: mažiausiai 80 MB laisvos vietos",
							" ",
							"Atsakomybės apribojimas\n   Jeigu jūsų telefone nėra „TCL nScreen“ funkcijos, kreipkitės į telefono gamintoją. "];
var helpButtons			= ["Ankstesnis","Kitas"];
var aboutReminds		= ["TV nuot. vald.","Programą sukūrė TLC"];
var aboutExit			= "Išeiti";
var smartReminds		= ["Greitas ir išmanusis TV ir telefono sujungimas.",
							" ",
							"Atliktini žingsniai \n 1. Prijunkite TV ir išmanųjį telefoną į tą patį LAN. Išmaniajame telefone spustelėkite „TCL nScreen“.\n 2. Spustelėkite „Smart Connect“ (išmanusis prisijungimas), kad nuskaitytumėte QR kodą.\n 3. Esant TV transliavimo peržiūros būsenai, paspauskite mygtuką INFO, esantį TV valdymo pultelyje, ir palaikykite 4 sekundes, - iššoks QR kodas.",];
var smartQRReminds		= ["Spustelėkite išmanųjį prisijungimą savo telefone ir nuskaitykite QR kodą, kad greitai sujungtumėte TV ir telefoną.",
							"QR kode yra LAN paskyros informacija. Išsaugokite ją."];
							

var consoleTipArray = ["Ankstesnis","Kitas","Konsolė","Grojaraštis"];							
var optionInfoArray = ["Vaizdo išankstinė nuostata","Paleisties režimas","Trukmė","Efektas","Informacija"];

var playModeArray = ["Normalus","Atsitiktinė tvarka","Kartoti"];
var durationArray = ["Trumpas (5 s)", "Vidutinis (10 s)", "Ilgas (15 s)"];
var effectArray = ["Nieko", "Ištirpimas", "Vaizd. Dešinėn", "Vaizdas kairėn", "Vaizd. Aukštyn", "Vaizdas žemyn", "Dėžutė, vidun", "Dėžutė, išorėn", "Atsitiktinis"];
var infoArray = ["Pavadinimas:","Dydis:","Data:","Vieta"];

var picturePresetBarTitleInfo = "Vaizdo išankstinė nuostata";
var picturePresetBarArray = ["Standartas","Dinaminis","Studija","Filmas","Asmeninė"];
var upTipsInfo = "Pastumti paveikslėlį"; //add yums 2014-10-10
var consoleTipsArray = ["Konsolė","Ankstesnis","Kitas","Grojaraštis","Nustatymai"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Dar kartą paspauskite RIGHT (į dešinę), kad rodytų kitą paveikslėlį","Dar kartą paspauskite LEFT (į kairę), kad rodytų ankstesnį paveikslėlį","Dar kartą paspauskite DOWN (žemyn), kad rodytų grojaraštį"]; //add yums 2014-10-10

var optionPvrListArray = ["Vaizdo išankstinė nuostata","Garso išankstinė nuostata", "Ekrano režimas", "3D režimas", "Subtitrai", "Garso takelis", "Informacija"];							
	
var titleSpanFirstArray = ["Valdymas ir jungtis","Pagrindinės funkcijos","Programėlės","TV","Nustatymai","DUK"];
var titleSpanSecondArray = [["Nuotolinis valdymas","Panelės mygtukai","Paprastas naršymas","TV jungtis","TV jungtis","TV jungtis","Belaidis "],["Paleidėjas","Būsenos eilutė","Šaltinis"],["Veikiančios programos","Media","TV nuot. vald."],["Pritaikyti kanalą ir garsą","Kanalų sąrašas","EPG","Kanalų įdiegimas","Mėgstamiausi kanalai"],["Paveikslėlių pritaikymas","Garso pritaikymas","Kanalų pritaikymas","Prog. įrang. atnauj.","Kalba","Tėvų užraktas"],["Dažnai užduodami klausimai","Dažnai užduodami klausimai","Problemų sprendimas","Problemų sprendimas","Nuostatos ir sąlygos"]];
var contentSpan1_1Array = [["SĄRAŠAS:","INFORMACIJA:","MENIU:","GALIA:","ŠALTINIS:","GIDAS:","IŠMANUSIS TV:"],["Rodo kanalų sąrašą","Rodo programos informaciją","Eina į pagrindinį puslapį","Įjungia televizorių arba budėjimo būseną","Pasirinkti įvesties šaltinį","Rodoma EPG (elektroninio programų gido) informacija","Pereina į išmaniosios televizijos puslapį"]];
var contentSpan1_2Array = ["Ankstesnis kanalas","Kitas kanalas","Pagarsinti","Patildyti","Eina į pagrindinį puslapį","Patvirtinti parinktį","Budėjimas / Įjungimas"];
var contentSpan1_3Array = ["Gerai / gidas","Kanalas aukštyn","Kanalas žemyn","Sumažinti garsą","Padidinti garsą","Kai kurių funkcijų atveju veikia kaip mygtukai su rodyklėmis."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapteris","LAN","Išmanusis telefonas","Kompiuteris / TV imtuvas / DVD","Garso stiprintuvas","Garso stiprintuvas / Ekranas","Jūsų TV gali nebūti visų lizdų."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Ausinės","AV IN adapteris","SPDIF","CPM AUDIO IN adapteris","CPM IN (YPbPr) adapteris","USB įrenginiai","USB įrenginiai","Ausinės","DVC / žaidimų kompiuteris / TV imtuvas / DVD","Garso stiprintuvas","DVC / žaidimų kompiuteris / TV imtuvas / DVD","Jūsų TV gali nebūti visų lizdų."];
var contentSpan1_6Array = ["Bendroji sąsaja (CI)","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA kortelė","SD kortelė","Asmeninis kompiuteris","Rinkinio dėžutė / DVD","Antena / Kabelis / Palydovas","Jūsų TV gali nebūti visų lizdų."];
var contentSpan1_7Array = ["Tabletė","Asmeninis kompiuteris","maršrutizatorius","Telefonas","TV"];

var contentSpan2Array = [["Spauskite mygtukus su rodyklėmis, kad patektumėte į pagrindinį puslapį.","Tuomet spauskite OK (gerai), kad galėtumėte žiūrėti vieną iš siūlomų laidų arba įjungtumėte programėlę."],["Rodyti datą, tinklą, įrenginius ir t. t. ekrano viršutiniame dešiniajame kampelyje."],["Pasirinkite įvesties šaltinį iš įrenginio, sujungto su TV per skirtingus prievadus, pvz., TV, AV, HDMI ir t. t."]];

var contentSpan3Array = ["Išmaniosios televizijos puslapyje peržiūrėkite mėgiamiausias programėles ir jomis naudokitės","Žiūrėkite nuotraukas, vaizdo įrašus ir leiskite muziką iš USB įtaiso.","Sujunkite savo TV ir išmanųjį telefoną arba jutiklinį prietaisą į tą patį LAN","Išmaniajame telefone arba planšetėje spustelėkite „TCL nScreen“ arba „TCL nScreen“","Su savo šeima keliuose ekranuose žiūrėkite nuotraukas, vaizdo įrašus, leiskite muziką, o televizorių valdykite išmaniuoju telefonu."];

var contentSpan4Array = [["Paspauskite UP / DOWN (aukštyn / žemyn) ir perjungsite kanalus","Paspauskite LEFT / RIGHT (į kairę / į dešinę) ir pareguliuosite garsą"],["Spauskite nuotolinio valdymo pulto mygtuką LIST, kad atvertumėte kanalų sąrašą","Paspauskite UP / DOWN (aukštyn / žemyn) ir pasirinksite kanalą"],["EPG yra ant ekrano rodomas vadovas, rodantis TV programas. Galite naviguoti, pasirinkti, žiūrėti ir įrašyti programas."],["Ieškoti ir įdiegti kanalus"],["Pridėti arba redaguoti mėgstamiausius kanalus Kanalų sąraše"]];

var contentSpan5Array = ["Mėgstamiausias laidas žiūrėkite naudodamiesi vaizdo įrašų programėlėmis"];

var contentSpan6Array = [["Paspauskite MENU (meniu), kad rodytų sistemos nuostatų parinktis","Įveskite Paveikslėlių nuostatas, kad pritaikytumėte reikšmes"],["Paspauskite MENU (meniu), kad rodytų sistemos nuostatų parinktis","Įveskite Garso nuostatas, kad nustatytumėte parinktis"],["Paspauskite MENU (meniu), kad rodytų sistemos nuostatų parinktis","Įveskite Kanalų nuostatas, kad nustatytumėte parinktis"],["Atnaujinkite savo TV, kai atsiras nauja programinės įrangos versija"],["Galite pasirinkti norimą meniu kalbą."],["Leidžia tėvams užrakinti kanalus arba programas, netinkamas vaikams žiūrėti"]];

var contentSpan7_1Array = [["Nėra vaizdo, nėra garso","Patikrinkite, ar veikia saugilis arba grandinės pertraukiklis","Į elektros lizdą įjunkite kitą elektrinį prietaisą, kad įsitikintumėte, jog ji veikia.","Blogai įjungta į elektros tinklą","Patikrinkite, ar yra signalas."],["Įprastas vaizdas, be garso","Norėdami padidinti garsą, paspauskite garso mygtuką UP.","Garso nustatymai neteisingi.","Signalo klaida iš transliuotojo."],["Įprastas garsas, be vaizdo","Pritaikykite ryškumą ir kontrastą","Signalo klaida iš transliuotojo.","Patikrinkite, ar yra garso būsena."]];
var contentSpan7_2Array = [["Radijo dažnio triktis","Dėl šios trikties atsiranda bangelės arba įstrižainės ruoželiai, o kartais dingsta vaizdo kontrastas. Raskite ir pašalinkite radijo dažnio šaltinį."],["Be spalvų","Pritaikykite spalvų nustatymus.","Pabandykite perjungti kanalą. Gali būti gauta juodai balta programa."],["Nuotolinis valdymas neveikia","Pakeiskite elementus.","Elementai netinkamai įdėti. Pagrindinis TV jėgos šaltinis neprijungtas."]];
var contentSpan7_3Array = [["USB įrenginio turinys nerodomas","Patikrinkite, ar USB saugyklos įrenginys suderinamas su TV.","Patikrinkite, šis TV palaiko garso ir vaizdo bylų formatus."],["Rodoma be garso","Vaizdo garso formato TV grotuvas nepalaiko."],["Bylos sklandžiai nerodomos","USB saugyklos įrenginio veikimo perdavimas gali limituoti duomenų perdavimą į TV."]];
var contentSpan7_4Array = [["Į ką turėčiau atkreipti dėmesį, kai atnaujinu programinę įrangą","Kai atnaujinama programinė įranga, negalima išjungti iš elektros lizdo.","Kai atnaujinama programinė įranga, venkite atlikti bet kokius veiksmus su nuotolinio valdymo pulteliu.","Būkite kantrūs, nes programinės įrangos atnaujinimas gali užtrukti."],["Atnaujinus programinę įrangą, nėra jokių TV sąsajos ypatumų.","Esant tam tikroms sąlygoms, SW atnaujinimas gali ne tik atnaujinti arba pridėti naujų funkcijų, bet taip pat ir pagerinti TV rinkinio veikimą, be jokių ypatingų sąsajos pakitimų. O kartais TV sąsaja gali išlikti nepaliesta."]];
var termsTitle = "Nuostatos ir sąlygos";
var termsConditions = ["(Teisinis pareiškimas) - TCL, šio televizoriaus gamintoja. ","Dėl gaminių su išmaniojo TV funkcija įvairių galimybių: paslaugos, taip pat galimi turinio apribojimai, tam tikros funkcijos, programos ir paslaugos gali būti teikiamos ne visiems įrenginiams arba ne visose teritorijose. Kai kurioms išmaniojo TV funkcijoms gali reikėti papildomų atskirai įsigyjamų periferinių prietaisų arba narystės mokesčių. Daugiau informacijos apie konkretų prietaisą ir galimą turinį rasite mūsų svetainėje. Išmaniojo TV paslaugos ir turinio prieinamumas gali būti retkarčiais keičiami, iš anksto neįspėjus. \n   Visas turinys ir paslaugos, kuriais naudojamasi per šį prietaisą, priklauso trečiosioms šalims, jas saugo autorių teisės, patentai, prekių ženklai ir (arba) intelektinės nuosavybės teisės. Toks turinys pateikiamas ir paslaugos teikiamos tik naudoti asmeniniais, nekomerciniais tikslais. Jokio turinio ir paslaugų negalite naudoti taip, kaip neleido turinio savininkas ar paslaugos teikėjas. Neapsiribojant tuo, kas nurodyta toliau, nebent aiškiai tai daryti leido atitinkamas turinio savininkas ar paslaugos teikėjas, negalite keisti, kopijuoti, iš naujo skelbti, įkelti, siųsti, perduoti, versti, parduoti, kurti išvestinių produktų, eksploatuoti, naudoti bet kokiu būdu (įskaitant laikmenas) jokio turinio ir paslaugų, kuriomis naudojatės per šį prietaisą. \n   AIŠKIAI SUVOKIATE IR SUTINKATE, KAD ŠĮ PRIETAISĄ NAUDOJATE PRISIIMDAMI VISĄ RIZIKĄ, KAD UŽ BET KOKIĄ RIZIKĄ DĖL PATENKINAMOS KOKYBĖS, VEIKIMO IR TIKSLUMO ATSAKINGI JŪS PATYS. PRIETAISAS, VISAS TREČIŲJŲ ŠALIŲ TURINYS IR PASLAUGOS TEIKIAMI TOKIE, KOKIE YRA, NESUTEIKIANT JOKIOS NEI AIŠKIAI NURODYTOS, NEI NUMANOMOS GARANTIJOS. TCL AIŠKIAI ATSISAKO VISŲ GARANTIJŲ IR SĄLYGŲ DĖL PRIETAISO, BET KOKIO TURINIO IR PASLAUGŲ, NESVARBU, AR JOS AIŠKIAI NURODYTOS, AR NUMANOMOS, ĮSKAITANT GARANTIJAS DĖL PERKAMUMO, PATENKINAMOS KOKYBĖS, TIKIMO KONKREČIAM TIKSLUI, TIKSLUMO, TYLAUS PASITENKINIMO IR TREČIŲJŲ ŠALIŲ TEISIŲ NEPAŽEIDIMO, BET TUO NEAPSIRIBOJANT. TCL NEUŽTIKRINA, KAD BET KOKS TURINYS AR PASLAUGOS, KURIOMIS NAUDOJAMASI PER ŠĮ PRIETAISĄ, BUS TIKSLUS, GALIOJANTIS, ATITINKANTIS LAIKĄ, TEISĖTAS IR IŠBAIGTAS, TAIP PAT NEUŽTIKRINAMA, KAD PRIETAISAS, TURINYS IR PASLAUGOS ATITIKS REIKALAVIMUS, KAD PRIETAISAS IR PASLAUGOS VEIKS BE PERTRŪKIŲ IR KLAIDŲ. JOKIOMIS APLINKYBĖMIS, ĮSKAITANT APLAIDUMĄ, TCL NEBUS ATSAKINGAS (TIEK PAGAL SUTARTĮ, TIEK PAGAL DELIKTĄ) UŽ JOKIĄ TIESIOGINĘ, NETIESIOGINĘ, ATSITIKTINĘ, SPECIALIAI PADARYTĄ AR KAIP PASEKMĖ ATSIRADUSIĄ ŽALĄ, ADVOKATUI SUMOKĖTAS SUMAS, IŠLAIDAS, TAIP PAT UŽ JOKIĄ ŽALĄ, KURI KILO DĖL SĄSAJŲ SU BET KOKIA PATEIKTA INFORMACIJA, TAIP PAT UŽ ŽALĄ, ATSIRADUSIĄ DĖL PRIETAISO NAUDOJIMO, BET KOKIO TURINIO AR PASLAUGŲ, KURIE PRIEINAMI JUMS ARBA BET KOKIAI TREČIAJAI ŠALIAI, NET JEI BUVO ĮSPĖTA DĖL TOKIOS ŽALOS TIKIMYBĖS. \n   Trečiųjų šalių paslaugos gali būti keičiamos, laikinai sustabdytos, pašalintos, nutrauktos ar pertrauktos, prieiga prie jų gali būti išjungta bet kuriuo metu neįspėjus, TCL („Thomson“ prekių ženklo televizorių gamintojas) netvirtina ir neužtikrina, kad bet koks turinys ir paslaugos bus prieinami kurį nors laikotarpį. Turinį pateikia ir paslaugas teikia trečiosios šalys, tam naudojami tinklai ir perdavimo įranga, kurių TCL nekontroliuoja. Neribojant šio atsisakymo bendrųjų nuostatų, TCL aiškiai atsisako bet kokios atsakomybės ir prievolės dėl bet kokio turinio ar paslaugų, kuriomis naudojamasi per šį prietaisą, keitimo, pertraukimo, išjungimo, pašalinimo arba laikino sustabdymo. TCL gali riboti naudojimąsi tam tikromis paslaugomis ir turiniu, taip pat prieigą prie jų bet kokiu atveju, iš anksto neįspėjusi ir nesiėmusi prievolės. Už klientų paslaugas, susijusias su turiniu ir paslaugomis, TCL neprisiima nei atsakomybės, nei prievolių. Visus klausimus ir paslaugų prašymus, susijusius su turiniu ir paslaugomis, reikia tiesiogiai pateikti atitinkamo turinio ir paslaugų teikėjams."];

var noChannelListRemind        = ["Kanalų nerasta. Kanalų sąrašas bus matomas nuskaičius kanalus.","Kanalų skenavimas"];
var closeSubtitleRemind   = "Funkcija bus galima, kai bus išjungti subtitrai. Ar norite jau dabar nustatyti?";

var estickerTitles = ["Labai realistiškas vaizdas","Gyvos spalvos","Judesys lyg tikrame gyvenime","Dinamiška vaizdo kokybė","SR UHD patobulinimas","3D pasaulis","Greitesnis veikimas","Ateities 4K turinys","Mėgaukitės internetiniu pasauliu","Pasiekite papildomą turinį","Integruoti skaitmeniniai derintuvai","Sujunkite visus įrenginius","Įvairūs 4K šaltiniai","USB turinys","Ypač greitas WIFI","Mobilusis turinys TV","Mobiliojo įrenginio turinys","Vietos turinys","Patvirtinta DivX","Besiūlys vaizdas","Kanalas paruoštas","TDT Premium"];
var estickerDescriptions = ["Nuostabu žiūrėti dėl vaizdo su keturis kartus detalesniu pilnu HD ant UHD ekrano","Platus spalvų diapazonas išreiškia emocijas visose scenose su ryškia raudona ir sodria žalia spalva","4K rėmelio interpoliacija ir apšvietimas išvengti išliejimo problemų","Originalaus vaizdo ryškumas padidinamas, kad būtų matoma dinamiška ekspresija ir puikus kontrastas","Mėgaukitės ryškesniais kontūrais TV programose ir Blu-Ray diskuose dėl Super Resolution technologijos.","Žiūrėkite įvairias 3D laidas","Dar įdomiau žiūrėti su Quad Core, skirtu sklandžiam rodymui ir išplėstiniam veiksmui","HEVC (H.265) kodekas palaiko standartinę 4K vaizdo distribuciją","Internetinių programų, VOD paslaugų, TV ir naršymo internete galimybė","Pamatykite dar daugiau, pasinaudoję papildomomis paslaugomis ir turiniu iš mėgstamo transliuotojo","Pasiekite didelės raiškos TV kanalus be papildomo rinkinio dėžutės","Paprasta prijungti keletą skaitmeninių šaltinių, galimų namuose","TV paruoštas ateičiai, gali leisti 4K 50 / 60 Hz per HDMI 2.0 su HDCP 2.2","Vaizdas arba nuotraukos tiesiai iš USB disko, HDD arba fotoaparato didelio ekrano 4K rezoliucija","Naujausia 2x2 MIMO karta ir AC standartas pateikia neprilygstamą interneto prieigos greitį","Mėgaukitės nuotraukomis, vaizdo įrašais, programomis iš mobiliojo įrenginio dideliame ekrane dėl ekraną atspindinčios technologijos","Nuotraukas, vaizdo įrašus, programėles iš išmaniojo telefono arba planšetės galima rodyti dideliame ekrane","Rodykite dideliame ekrane vietos turinį, pvz., nuotraukas, vaizdo įrašus iš įrenginių, sujungtų su vietos tinklu","Paleiskite nuomotus arba savo filmus, apsaugotus DivX","Ypač plonas bezelis ir dizainas","Testuota ir patvirtinta Canal+","Testuota ir patvirtinta TDT Premium"];							

var eManualTextArray = ["El. vadovas","Visi vidiniai grafiniai elementai pateikti tik atvaizdavimo sumetimais."];
var frontPanelRemind = "Priekinė panelė užrak.";
var eRPRemind		 = "Parduotuvės režimas nepatenkina poreikio dėl ERP prašymo. Ar tikrai?";	
var noRelatedChannel = "Susijusio kanalo nėra";
var option0624Name          = ["BOP","BFS","Įvykis po įvykio","GetUserID","BGM","Reset all","Atstatyti pard.","NRM","DVB-T2 ir šalies pasirinkimas","HbbTV režimas"];
var DVBT2AndChoice = ["Įj.","Pagal šalį","Išj."];
var hbbtvServiceRemind = "Netrukus bus teikiama HbbTV paslauga";
var insertWord = "Įterpti";		
var viewDetail = "Rodyti daugiau";							

var remindOAD  = "Programinės įrangos atnaujinimas. Gali būti rekomenduojamų atnaujinimų kitame kanale. Patvirtinus atsisiuntimą, gali būti automatiškai perjungtas kitas kanalas. Ar norite tai padaryti dabar?";

var LEDStatus = ["Mirksintis", "Normalus"];
var netFlixRemind = "Ši funkcija pertraukia prieigą prie „Netflix“ paslaugų, kol vėl prie jų neprisijungiate.";
var ESNExplanation = "Elektroninis serijos numeris";
var resetShopRemind = "Sistema dabar nustatoma iš naujo, neišjunkite televizoriaus";
var initialSelectOption = "Pasirinkite vieną parinktį:";
var databaseRemind   = "Sistema aptiko dėl neaiškių priežasčių sugadintą duomenų bazę ir atkūrė ją automatiškai; spauskite OK, kad tęstumėte toliau";
var Deactivation = "Išsiregistravimas";
var oadFutureRemind = "Programinės įrangos atnaujinimas. Nauja rekomenduojama programinė įranga bus po %s. Atnaujinimas gali užimti šiek tiek laiko, o ekranas nieko nerodyti. Neišjunkite imtuvo atnaujinimo metu. Jei primate šį atnaujinimą, palikite imtuvą įjungtą arba parengties režime pagal nustatytą laiką. Ar norite gauti šį atnaujinimą?";														
							
var bt_title = "„Bluetooth“";
var bt_soundOutPutName = "Garso išėjimo signalas";
var bt_soundOutPutTV = "Televizoriaus garsiakalbis";
var bt_soundOutPutBT = "„Bluetooth“ įrenginys";
var bt_soundOutPutBT_TV = "„Bluetooth“ ir televizorius";
var bt_refreshBarName = "įrenginiai";
var bt_settingTips_On = "Įjunkite „Bluetooth“ funkciją ir ieškokite įrenginių.";
var bt_settingTips_Finding = "Ieškoma tinkamų įrenginių...";
var bt_settingTips_NoDevice = "Tinkamų įrenginių nėra.";
var bt_deviceList_State_NoConnect = "Neprijungta";
var bt_deviceList_State_Connecting = "Jungiama...";
var bt_deviceList_State_Connected = "Prijungta";
var bt_deviceList_State_Paired = "Sujungta";
var bt_deviceList_Conncect_Failed_Tips1 = "Prijungti nepavyko.";
var bt_deviceList_Conncect_Failed_Tips2 = "Patvirtinkite, kad XXX „Bluetooth“ funkcija įjungta.";
var bt_deviceList_Conncect_Success = "Prijungta prie „Bluetooth“ įrenginio.";
var bt_deviceList_Disconncect_Success = "Atjungta prie „Bluetooth“ įrenginio.";
var bt_deviceList_Disconnect = "Ar tikrai norite atsijungti nuo XXX?";
var bt_tipsTitle = "Patarimas";
var bt_bluetooth_Pairing_Title = "„Bluetooth“ įrenginių sujungimas";
var bt_bluetooth_Input_Pin = "Įveskite PIN kodą:";
var bt_bluetooth_Output_Pin_Tip = "Įveskite PIN kodą XXXX klaviatūra.";
var bt_bluetooth_Pin_Wrong_Tip = "Neteisingas PIN kodas";
var bt_bluetooth_Remove_Pair_Title = "Užklausa";
var bt_bluetooth_Remove_Pair_Ask = "Užmiršti šį įrenginį?";
var bt_bluetooth_module_error = "Bluetooth modulis klaida!";		
		
var netflixDialogOptions = ["Gerai","Vėliau","Daugiau to neberodyti"];
var netflixDialogContent = "„Netflix“ yra tūkstančiai filmų, kuriuos galima žiūrėti. Eiti ten?";
var netflixRemoteDialogContent = "Dabar galima nusipirkti „Netflix“ nuotolinį valdymą. Norėdami gauti daugiau informacijos, apsilankykite tinklalapyje.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Esamas šaltinis","Visi šaltiniai"];
var audioDescriptionName = ["Garsinis apibūdinimas","Garsiakalbis","Garsiakalbio garsas","Ausinės","Ausinių garsas","AD garsas","BT įrenginys","BT įrenginio garsumas"];
var audioDescriptionOptions = ["Išj.","Normalus","Garsinis apibūdinimas"];							
var volumeOffRemind = 'Nuostatų meniu XXX nustatykite „Įjungta“.';
var switchSourceRemind   = " įkištas. Ar norite jį perjungti dabar?";							

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sporto režimas";
var resetStadium = "Stadionas";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Išeiti","0","Keisti mastelį+",
                       	   "Išeiti",
                       	   "Sąrašas","0","Tekstas","Vesti","Įvesti","Išeiti","Meniu","Subtitrai","Informacija",
                       	   "Sustabdyti",
                       	   "Informacija","Meniu","Išeiti"
                       	   ];
var nscreenTips = "„GuideOn“ naudotojams padeda naviguoti.";
var nscreenContent = 'Žingsniai: 1. Telefone spustelėkite „TCL nScreen“.  Naudodamiesi tuo pačiu LAN sujunkite telefoną su TV; 2. Spustelėkite „GuideOn“, kad patektumėte į „GuideOn“; 3. „GuideOn“ suteikia panašių funkcijų, kaip ir atspausdinta programa, nes naudotojai informuojami, ką rodo per televizorių;';
var singalBrokenoffTips = "Signalas pertrauktas. Sistema negali baigti atsisiuntimo.";
var contentSpan1_1Array_AU =  [["GALIA:","ŠALTINIS:","MENIU:","BACK:","INFORMACIJA:","HOME:","EXIT:","SĄRAŠAS:"],
                            ["Turns power on or standby mode","Select the input source",
                             "Show TV settings menu","Go back to the Previous menu or exit a running APP","Rodo programos informaciją",
                            "Eina į pagrindinį puslapį", "Go back to the Previous menu or exit a running APP","Rodo kanalų sąrašą"]];
var guideDescriptionWords ="Nuskaitykite QR kodą, jei norite į savo telefoną atsisiųsti programą „GuideOn“";
var settingNoticeSourceName ="Aut. šaltinis";
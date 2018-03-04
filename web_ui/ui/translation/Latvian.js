
var all_country 	= ["Austrālija","Austrija","Beļģija","Bulgārija","Horvātija","Čehija","Dānija","Somija","Francija","Vācija",
						"Grieķija","Ungārija","Itālija","Luksemburga","Nīderlande","Norvēģija","Polija","Portugāle","Rumānija","Krievija",
						"Serbija","Slovēnija","Spānija","Zviedrija","Šveice","Apvienotā Karaliste","Jaunzēlande"," "/*Arab*/,"Igaunija"," "/*Hebrew*/,
						"Latvija","Slovākija","Turcija","Īrija","*","Filipīnas","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Ķīna","*","*","*","*","*","*","Citi","Lietuva"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Lietuva"];						
				
var all_language 	= ["Čehu","*","Dāņu","*","*","vācu","angļu","spāņu","grieķu","franču",
						"Horvātu","*","itāļu","Ungāru","Holandiešu","Norvēģu","Poļu","Portugāļu","krievu","Rumāņu",
						"Slovēņu","Serbu","Somu","Zviedru","Bulgāru","Slovāku","*","*","Gēlu","*",
						"Velsiešu","arābu","Īru","Latviešu","*","turku","Igauņu","Holandiešu"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","V.O."/*Qaa*/,"Nedefinēts"/*Undetermined*/,"*","Nezināms",
						"Nedefinēts","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Basku","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","baltkrievu","*","*","Katalāņu","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galīciešu","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandiešu","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lietuviešu",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantiska filma","*","*","*","*",
						"*","*","*","Sāmu","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teleteksts",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraiņu","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Izslēgts","Ieslēgts"];
var okCancel		= ["OK","Atcelt"];
var yesNo			= ["JĀ","Nr."];
var level			= ["Izslēgts","Zems","Augsts","Vidējs"];
var manualAuto		= ["Manuāli","Auto"];
var homeShop		= ["Mājas","Veikals"];
var picPreset		= ["Standarts","Dinamiskais","Dabisks","Filma","Digitālais kinoteātris","Personīgs"];
var picColorTemp	= ["Vēsa","Normaalne","Silta","Silta2","Lietotājs"];
var pic3dNavig		= ["Manuāli","Auto","Pusautomātiski"];
var _3dOptions		= ["3D režīms","No 3D uz 2D","K-L slēdzis","Lauka dziļums"];
var pic3DMode       = ["Izslēgts","No 2D uz 3D","No sāniem","No augšas un ap.","Rindu laikdale"];
var picEcoOptions	= ["Energia säästmine","Gaismas sensors","Vietējā aptumšošana","Jaukta aptumšošana"];
var picGeoOptions	= ["Ģeometrija","H novietojums","V novietojums","Pulkstenis","Fāze"];//Geometry 无翻译
var picAdWhiteBal	= ["R pastiprinājums","G pastiprinājums","B pastiprinājums","R nobīde","G nobīde","B nobīde"];
var souOptions		= ["Skaņas sākotnējā iestatīšana","Balanss","Audio aizture","SRS TSHD","Automātiska skaļuma regulēšana",
						"SPDIF tips","SPDIF aizkave","TV izvietošana","Audio valoda","Skaņas tips",
						"Audio apraksts","Digitālā audio izejas veids","Dolby profesionālais iestatījums"];
var soundOutputoptions =["Televizora skaļruņa DAP izeja","Ārējā AVR kodētā izeja"];
var inteligenteqoptions 	=["Fokusēts","Bagātīgs"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Izslēgts"];
var colorSpace      = ["Auto","Standarta","Lietotājs","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Ieskauj. skaņas virtualizētājs","Dialoga uzlabotājs","Basu uzlabotājs","Viedais skaļums","Satura informācija","Grafikas ekvalaizers","Inteliģentais EQ"];
var chOptions		= ["Kanālu meklēšana","Kanālu saraksts","EPG","Organizators","Kanālu diagnostika",
						"laika nobīde","Subtitri","Teleteksts","Kanaliloendi tüüp"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signāla stiprums","Signāla kvalitāte","Frekvence (kHz)","Pakalpojuma ID","Tīkla ID","Tīkla nosaukums"];
var chScanOptions	= ["Valsts","Uztvērēja režīms","Automātiskā meklēšana","Automātiskā atjaunināšana","Analogā manuālā meklēšana",
						["Kabeļtelev. manuāla mekl.","Antenas manuālā mekl.","Satelīta manuālā regulēšana"],"Satelīta antenas uzstādīšana","Izlases tīkla atlase","Dzēst kanālu sarakstu",];
var favNetDes		= "Lūdzu, atlasiet savu iecienītāko tīklu";
var tuner			= ["Kabelis","Antena","Satelīts"];//Satelite 无翻译
var passError		= "Nepareiza parole.\nLūdzu, ievadiet vēlreiz!";
var chType			= ["Analogie kanāli: ","Digitālie kanāli: "];
var chScanStatus	= ["Statuss: Meklēšana","Statuss: Meklēšana pabeigta","Statuss: Meklēšana atcelta","Statuss: Meklēšanas kļūda"];
var chScanPara		= ["Frekvence (kHz)","Modulācija","Pārraides ātr. (Ksimb/s)","Tīkla ID","Sistēma",
						"Precīza noskaņošana","Signāla stiprums","Signāla kvalitāte","Meklēš. rež.","Kanālu id"];
var chScanParaMHZ      = ["Frekvence (MHz)"];
var chAtvManSys		= ["RIETUMEIROPA","AUSTRUMEIROPA","AK","Francija"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Vai vēlaties izdzēst kanālu sarakstu?";
var chDeletDes		= "Vai vēlaties dzēst kanālu?";
var chOperator		= ["Ziggo","UPC","Citi"];
var chScanType		= ["Digitāls & Analogs","Digitāls","Analogs"];
var chScanMode		= ["Pilnekrāna","Uz priekšu","Ātri"];
var bookingModes	= ["Ierakstīt","Atgādinājums"];
var dayName			= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthName		= ["Janv.", "Feb.","Mar.","Apr.","Maijs","Jūn.","Jūl.","Aug.","Sept.","Okt.","Nov.","Dec."];
var filter			= ["Filtrs","Tips","Apakštips"];
var chEpgFirstGenre	= ["Filma","ziņa","Šovs","Sports","Bērnu","Mūzika","Māksla","Sociālie jautājumi","Izglītība","atpūta","SPETS."];
var chEpgSecondGenre= [["Drāma","Detektīvfilma","Piedzīvojumu filma","Zinātniskā fantastika","Komēdija","Seriāls","Romantiska filma","Nopietna filma","Filma pieaugušajiem"," "," "," "],
						["Jaunumi","Laika ziņas","Ziņu izlaidums","Dokumentālā filma","Diskusija"," "," "," "," "," "," "," "],
						["Šovs","Spēļu raidījums","Izklaides raidījums","Sarunu šovs"," "," "," "," "," "," "," "," "],
						["Sports","Īpaši notikumi","Sporta žurnāli","Futbols","Teniss",
							"Komandu sporta veidi","Vieglatlētika","Auto-moto sporta veidi","Ūdenssports","Ziemas sporta veidi",
							"Jāšana","Cīņas sporta veidi"],
						["Bērnu","Pirmskolas vecuma bērniem","Izklaide no 6 līdz 14","Izklaide no 10 līdz 16","Informatīvās pārraides","Multiplikācijas filmas"," "," "," "," "," "," "," "],
						["Mūzika","Rock","Nopietna filma","Folkmūzika","Džezs","Mūzikls","Balets"," "," "," "," "," "],
						["Māksla","Skatuves māksla","Tēlotājmāksla","Reliģija","Populārā kultūra",
							"Literatūra","Filma","Eksperimentālā pārraide","Apraide","Jaunie mēdiji",
							"Mākslas žurnāli","Mode"],
						["Sociālie jautājumi","Žurnāli","Ekonomika","Ievērojamie cilvēki"," "," "," "," "," "," "," "," "],
						["Izglītība","Daba","Tehnoloģija","Medicīna","Ārvalstis","Sabiedriskās zinātnes","Tālākizglītība","Valodas"," "," "," "," "],
						["Vaļasprieki atpūtai","Tūrisms","Mājamatniecība","Autosports","Fitness un veselība","Ēdiena gatavošana","Reklāma","Dārzniecība"," "," "," "," "],
						["Oriģinālvaloda","Melnbalts","Nepublicēts","Tiešraide"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanāla izlaišana","Kanālu šķirošana","Kanālu rediģēšana","Kanāla dzēšana","kanāls mijmaiņas","kanāls ieliktnis"];
var chEditPara 		= ["Tīkla nosaukums","Kanali number","Kanali nimi","Frekvence","Krāsu sistēma","Skaņas sistēma"];
var chSatTitles		= ["Satelliit, tüüp","Satelīta antenas uzstādīšana","Atlasīt satelītu"];
var chSatEidtOptions= ["Satelīta nosaukums","Asukoht","LNB Jauda","LNB frekvence (MHz)","Diseqc ievade",
						"Tonis 22 KHz","tooni","Frekvence (kHz)","Pārraides ātr. (Ksimb/s)","Polarizācija",
						"Signāla stiprums","Signāla kvalitāte","Satelliidi olek"];
var chSatAutoPromt	= [["Visi","Tīkls"],
						["Visi","Bez maksas"]];
var chSatAutoScanOptions=["Atlasīt satelītu","Meklēš. rež.","Кanāli"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universāls",];
var chSatDiSEqCInput= ["Atspējot","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Ieslēgts","Izslēgts"];
var chSatToneBurst	= ["Atspējot","tooni A","tooni B"];
var chSatPolarization= ["Horizontāli","Vertikāli"];
var chSatSetupOptions=["Antenni tüüp","Tūneris","Sagedusala"];
var chSatAntennaType= ["SingleCable","Universāls"];
var chSatUserBands	= ["Kasutaja ala 1","Kasutaja ala 2","Kasutaja ala 3","Kasutaja ala 4","Kasutaja ala 5","Kasutaja ala 6","Kasutaja ala 7","Kasutaja ala 8"];
var chSatOthers		= ["Retranslators"];
var chSatSetupOthers= ["Lietotāja definēts"];
var pleaseSelectSat = "Lūdzu, vispirms atlasiet satelītus!";
var subOptions		= ["Subtitri","Digitālo subtitru valoda","Otrā digitālo subtitru valoda","Subtitru tips"];
var ttxOptionsCon      = ["Lapas valodas dekodēšana","Digitālā teleteksta valoda"];
var subType			= ["Normaalne","Vājdzirdīgajiem"];
var netIntf     	= ["Ethernet ","Bezvadu"];
var netConnDes		= ["TV pārbauda tīkla savienojumu.\nLūdzu, uzgaidiet",
						"Tīkla savienojuma pārbaude veiksmīga!",
						"Tīkla savienojuma pārbaude neizdevās!"];
var netSsidError	= "SSID derīgais garums ir 1 ~ 32 rakstzīmes. Lūdzu, pārbaudiet SSID.";
var netOthers		= ["PIN kods"];
var netWlessAutoDes	= ["Pirms noklikšķināt OK, piekļuves punktā jāiestata norādītais PIN kods.",
						"Nospiediet pogu uz piekļuves punkta 120 sekunžu laikā, pirms noklikšķināt OK."];
var netConnRemind	= ["Parole nav pareiza!",
						"Veido savienojumu. Lūdzu, gaidiet.",
						"Savienojums izveidots un iegūta IP adrese!",
						"Saites kļūme",
						"TV meklē piekļuves punktus,\nlūdzu, uzgaidiet",
						"TV nav pievienota neviena bezvadu ierīce!"];
var netWireIpOptions= ["IP iestatījums","Adreses tips","IP adrese","Apakštīkla maska","Noklusējuma vārteja","Primārais DNS","Sekundārais DNS"];
var netWireConnRemind= ["Ievadiet vērtību no 0 līdz 255.",
						"Savienojums ir izveidots veiksmīgi!",
						"Lūdzu, ievadiet derīgu adresi.",
						"Savienojums ir izveidots veiksmīgi!",
						"Sakaru kļūme!",
						"Veido savienojumu. Lūdzu, gaidiet.",
						"Lūdzu, ievadiet vērtību no 1 līdz 223."];
var netFlixOptions	= ["Dezaktivēt","ESN"];
var netFlixDes	 	= ["Vai tiešām vēlaties dezaktivēt?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Program. atjaunin.";
var netUpdateDialogTitle = "Programmatūras atjaunināšana";
var netBGDownloadTitle 	= "Lejupielāde";
var netUpdateLoadingPrompt= ["Meklē jauninājums, lūdzu, uzgaidiet!",
							"Programmatūra tiek lejupielādēta... Lūdzu, uzgaidiet",
							"Programmatūras atjaunināšanas laikā NEIZSLĒDZIET televizoru!",
                            "Obligātais programmatūras atjauninājums tiek lejupielādēts automātiski fonā!"];
var netUpdatePrompt= ["Apsveicam! Jums ir jaunākā programmatūras versija!",
						"Atrasta jauna programmatūras versija XXXX. Vai lejupielādēt tagad? Nepieciešamais laiks ir atkarīgs no tīkla statusa.",
						"Neizdevās pieteikties!",
						"Neizdevās saņemt datus, lūdzu, mēģiniet vēlreiz vēlāk!",
						"XML faila atjaunināšanas parsēšana!",
						"Saites kļūme",
						" Programmatūras lejupielāde ir veiksmīga. Vai vēlaties atkārtot flešošanu?",
						"Dati zaudēti! Neizdevās lejupielādēt!",
						"Neizdevās pārbaudīt pakotni, lūdzu, mēģiniet vēlreiz!",
						"Tīkls ir anormāls. Lūdzu, pārbaudiet un pievienojiet  vēlreiz…",
						"Atjaunināšana neizdevās. Lūdzu, restartējiet TV!",
						"Jauninājuma fails negaidot tika izdzēsts. Veiciet jaunināšanu, izmantojot tīklu, vēlreiz.",
						"Programmatūra tika veiksmīgi lejupielādēta fona režīmā. Vai vēlaties veikt jaunināšanu?"];
var netUpdateButtonText = ["Lejupielādēt", "Atjaunināt", "Vēlāk", "Nekad", "OK","Turpināt"];
var autoDetectPrompt = ["Atrasta jauna programmatūras versija XXXX. Vai lejupielādēt tagad? Nepieciešamais laiks ir atkarīgs no tīkla statusa.",
						"Atrasta jauna programmatūras versija XXXX. Vai vēlaties atjaunināt tagad?",
						"Jaunināšana, izmantojot tīklu, iepriekšējā reizē tika priekšlaikus pārtraukta. Veiciet to vēlreiz.",
                        "Jaunas programmatūras versijas XXXX lejupielāde nav pabeigta. Vai vēlaties turpināt tagad?",
                        "Programmatūra ir lejupielādēta, vai vēlaties atjaunināt tagad?"];
var sysOptions		= ["E-rokasgrāmata","Izvēlnes valoda","Taimeris","Bloķēt","Ieejas iestatījumi",
						"Program. atjaunin.","Atrašanās vieta","HbbTV režiim","Sīkfaili","Kopējā saskarne",
						"Papildu uzstādījumi","Atiestatīt veikal režīmu","LED indikators"];
var sysResetDes		= "Vai esat pārliecināts?";
var sysMenuLangOptions=["Valoda","Vēlamā audio valoda","Vēlamā otrā audio valoda"];
var sysTimerOptions	= ["Laika zona","Reģiona nosauk.","Pulkstenis","Izslēgšanās taimeris","Autom. gaidstāve", "Country region"];

var sysTimeZone		= ["Kā pārraidītājs","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Izslēgts","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Izslēgts","4 stundas","6 stundas","8 stundas"];
var sysRegionName	= ["Madride","Kanāriju salas"];
var sysClockOptions	= ["Automātiskā sinhronizācija","Kuupäev","Aeg","Ieslēgšanās taimeris","Taimeris",
						"Ieslēgt kanālu","Izslēgšanās taimeris","Taimeris"];
var sysTimer		= ["Izslēgts","Katru dienu","Vienreiz"];

var sysInputSet		= ["Bez etiķetes","DVD","Blu-ray","HDD","DVDR",
						"HR ier.","Spēle","Videomagnetofons","Dators","TV dekoders (digitālais STB)",
						"HD dig. STB","Kamera","Rakstītājs","Citi"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Pa USB","Pa Tīkla","Pēc kanāla"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Nevar atrast jaunu programmatūru!",
						"Atrasta jauna programmatūras versija XXXX. Vai vēlaties atjaunināt tagad?",
						"Ievietojiet USB zibatmiņas disku.",
						"Neizdevās pārbaudīt pakotni, lūdzu, mēģiniet vēlreiz!",
						"Lūdzu, programmaparatūras atjaunināšanas laikā NEatvienojiet USB sargspraudni un izslēdziet televizoru.",
						"Programmatūra ir veiksmīgi atjaunināta.\nTV tiek automātiski restartēta!",
						"Atrasta jauna programmatūras versija XXXX. Vai lejupielādēt tagad? Nepieciešamais laiks ir atkarīgs no tīkla statusa.",
						"Lejupielāde",
						" Programmatūras lejupielāde ir veiksmīga. Vai vēlaties atkārtot flešošanu?",
						"Atjaun. neizd.!",
						"Meklē jaunināšanas failus",
						"Programmatūra veiksmīgi atjaunināta.\nRestartējiet televizoru tagad."];
var sysProductInfo	= ["Pašreiz. versija","Izstr. nosauk.","Ražotāja nosaukums","Korpusa nosaukums"];
var sysCiDes		= ["Nav uzrādīta CI karte."];
var sysAdOptions	= ["DivX(R) reģistrēšana","DivX(R) reģistrācijas deaktivizēšana","T-Link","Authorization Error","Reģistrācijas atcelšanas apstiprinājums",
						"Nomas apstiprinājums","Filipīnas","Bluetooth deklarācijas ID"];
var sysRegistDes	= ["Lai atskaņotu aizsargātus DivX video, jūsu ierīcei jābūt reģistrētai.",
						"Reģistrācijas kods:",
						"Reģistēties http://vod.divx.com"];
var sysDregistDes	= ["Reģistrācijas deaktiv. kods:",
						"Reģistrāciju deaktiv. vietnē http://vod.divx.com",
						"Vai turpināsiet reģistrāciju?"];
var mediaAuthorization = ["Ierīcē nav atļauts atskaņot šo DivX(R) aizsargāto video."];
var deregistrationConfrimation = ["Jūsu ierīce jau ir reģistrēta.","Vai tiešām vēlties dzēst reģistrāciju?"];
var rentalConfirmation = "DivX(R) noma izmantojusi XXXX no YYYY skatījumiem. Turpināt?";
var rentalExpired 	= "DivX(R) noma izmantoja XXXX no YYYY skatījumiem. DivX nomas derīgums ir beidzies.";
						
						
var sysLockOptions	= ["Kanālu bloķēšana","Laika intervāla bloķēšana","Vecāku vērtējums","Bloķēt ievadi","Priekšējā paneļa bloķēšana","Slēgt uzstādīšanu",
						"Mainīt paroli","Maks. skaļums","Notīrīt visu"];
var sysTimeIntervals= ["Bloķēšanas veids","Sākuma laiks","Beigu laiks"];
var sysRatingOptions= ["Nav","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-reitinga (Spānija)"];
var changePass		= ["Mainīt paroli","Jauna parole","Apstiprināt paroli"];
var changePassDes	= ["Nepareiza parole.\nLūdzu, ievadiet vēlreiz!",
						"Parole neatbilst.\nLūdzu, ievadiet vēlreiz!",
						"Parole iestatīta veiksmīgi!",
						"Šis kods ir pārāk vienkāršs, lai to iestatītu kā paroli.\nLūdzu, ievadiet citu!"];
var sysPowerOnChOptions= "Atlasīt režīmu";
var sysPowerOnCh	= ["Pēdējais statuss","Atlasīt lietotāju"];
var netWlessSecu    = ["Atvērt","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nav","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ",""];
var netWlessSecu3	= ["Nav","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)",""];
var netOptions		= ["Interneta pieslēgums","Saskarne","Bezvadu iestatījumi","IP iestatījumi","Informācija",
						"Pieslēguma tests","DLNA","TV tālvadība","Netflix iestatījumi","WiFi tīklojuma TV saite",
						"Adreses tips","IP adrese","Apakštīkla maska","Noklusējuma vārteja","Primārais DNS",
						"Sekundārais DNS","SSID","BSSID","Ievadiet SSID:","Lietotāja ID"];
var chEditDes		= ["Dublēts kanāla numurs!","Nospiediet sarkano taustiņu, lai dzēstu pašreizējo rakstzīmi.","Nederīgi kanālu numuri."];
var chEpgNoProgram	= "Nav nevienas programmas informācijas tagad, lūdzu, vispirms meklējiet kanālus!";
var chEpgWords		= ["Programmu ceļvedis","Nav programmas datu.","Kanāls bloķēts!","Nav programmas informācijas.","Nav programmas nosaukuma."];
var chEpgBooking	= ["Kalendārs info", "Kanali number","Sākuma datums","Sākuma laiks","Beigu laiks",
						"Atkārtošanas veids","Plānojuma veids","Pievienot","Aizstāt","Mainīt",
						"Pievienot/Pārveidot"];
var epgHotKey		= ["Iepr. diena","Nāk. diena","Filtrs","Plānojuma saraksts","Pievienot plānojumu"];
var chEpgBookRemind	= ["Nepareizs sākuma laiks","Nepareizs beigu laiks","Dublēts grafiks","Veiksmīgi saglabāts.","Veiksmīgi izdzēsts."];
var chSchePara		= ["Plānojuma saraksts","Sākuma laiks","Sākuma datums","Programmas nosaukums","Kanali nimi",
						"Kestvus","Atkārtot","Grafiks","Rediģēt","Kustuta"];
var dateTimer		= ["Vienreiz","Katru dienu","Katru nedēļu"];
var scheduleDeleteReminds="Vai vēlaties dzēst šo sarakstu?";
var scheduleNoLists	= "Nav plānojuma saraksta. Nospiediet sarkano taustiņu, lai to pievienotu.";
var chListWords		= ["Kanālu saraksts","Atlasīt sarakstu","Uztvērēja režīms","Pievienot izlasei","Izņemt",
						"Izvēlēties kanālu sarakstu","Izvēlēties uztvērēja režīmu","Samainīt"];
var chListType		= ["Visi","Digitāls","Analogs","Radio","Bez maksas","Izlase"];
var chAutoScanOptions=["Vali operaator","kanāla tipa","Automātiskā meklēšana"];
var souSoundType	= ["Nederīgs","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam Dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Mūzika","Filma","Skaidra balss","Standarts","Personīgs"];
var picAdRgbMode	= ["Izslēgts","Tikai sarkans","Tikai zaļš","Tikai zils"];
var picAdOptions	= ["Traucējumu samazināšana","MPEG NR","RGB mode","Dinamiskais Kontrasts","LED rezolūcijas skaidrība",
						"Miesas tonis","Filmu režīms","Spēļu režīms","Krāsu temperatūra","Baltās Krāsas Balansēšanas Iespējas",
						"Iesaldēt","Melns Stretch","Palielināts ekrāna izmērs","Gamma","HDMI režīms","10P baltā balanss","Krāsu paplašinātājs",
						"Neskaidras kontūras samazināšana","Stipru vibrāciju samazināšana","Krāsu telpa","Kustību skaidrība"];
var pic10Pwhite     = ["Intervāls","Sarkans","Zaļš","Zils","Atiestatīt","Krāsu","Dzeltena krāsa","Zili zaļa krāsa","Fuksīns"];
var picMotionClarity = ["Kustību režīms","Kustību interpolācija","LED rezolūcijas skaidrība","Neskaidras kontūras samazināšana","Stipru vibrāciju samazināšana","Atiestatīt"];
var picMotionMode   = ["Auto","Filma","Vienveidīgs","Notīrīt","Sports","Klients"];
var picResetDes		= "Visi individuālie iestatījumi tiks atiestatīti. Vai esat pārliecināts, ka vēlaties darīt atlasīto darbību?";
var pic10PReset     = "Vai tiešām vēlaties atiestatīt 10P baltā balansu?";
var picMotionReset  = "Vai vēlaties atiestatīt kustību skaidrību?";
var picColorSpaceReset    = "Vai tiešām vēlaties atiestatīt krāsu telpu?";
var picOptions		= ["Attēla sākotnējā iestatīšana",
						"Fona apgaismojums","Spilgtums","Kontrasts","Piesātinājums","Tonis","Asums","Krāsu temperatūra","Ekrāna režīms","Automātiskā formatēšana",
						"Sporta uzlabošana","3D","3D navigatsioon","ECO Iestatījumi","Ģeometrija",
						"Papildu uzstādījumi","Lietot attēla režīmu","Attēla atiestatīšana"];
var picSize			= ["16:9 formāts", "4:3 formāts", "14:9 formāts", "Panorāmas kino sistēma",
						"16:9 tālummaiņa", "16:9 pacelšana uz augšu","14:9 tālummaiņa","Izstieptais režīms","Apgrieztais režīms",
						"Tālummaiņa 2","Apgrieztais režīms 2","Ekrāna vietējā saskaņošana","Punktu pa punktam","Oriģināls","Panorāma"];
var others			= ["Skaņas skaļums","Ülekanne","Parole","Stāvoklis","Saglabāt","Aizstāt","Sākt","Iziet","Meklēšana","Kustuta",
						"Nav","Automātiski","Meklēt","Drošība","Savienot","Atsvaidzināt","Atkārtot","Beigt","Iestatījumi","Кanāli",
						"Rediģēt","Ievietot","Signāla!","Beigt","Stereo","Audio","Avots","Nav audio","Padomi","Atiestatīt",
						"Klients","Iestatīšana","Saglabāt","Lietotājs","Slēgta tastatūra","Drošības režīms","Katru dienu","PVR saraksts"];
var direction		= ["Pa kreisi","Pa labi","Augšup","Lejup"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", " Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nezināms"];
var soundChannels   = ["Nezināms","Mono","Sub","Duālais mono","Stereo"," Stereo Sub"," Stereo Dolby Surround","Telpiska skaņa 2CH","Telpiska skaņa","3.0Ch","4.0Ch","5.0Ch"," Mono Lfe"," Dual Mono Lfe"," Stereo Lfe"," Surround 2Ch Lfe"," Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Kopīga Stereo sistēma","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Pa kreisi","Pa labi","Citi"];
var prompts			= ["Pielāgojiet attēla iestatījumu, kas vislabāk atbilst jūsu skatīšanās videi. ",
						"Pielāgojiet spilgtuma līmeņus. Jo tuvāk vērtībai 100, jo spilgtāk. ",
						"Pielāgojiet kontrasta līmeņus. Jo tuvāk vērtībai 100, jo lielāka attēla tumšs/gaišs starpība. ",
						"Pielāgojiet piesātinājuma līmeņus. Jo tuvāk vērtībai 100, jo spēcīgāka krāsa.  ",
						"Pielāgojiet asuma līmeņus. Jo tuvāk vērtībai 100, jo skaidrākas detaļas. ",
						"Pielāgojiet izgaismojuma līmeņus. Jo tuvāk vērtībai 100, jo spilgtāks ekrāns.",
						"Pielāgojiet toņu līmeņus. Šis iestatījums pārveido krāsu toņus.  ",
						"Izvēlieties attēla formātu, kas vislabāk atbilst pārraidei, ko skatīsities. ",
						"Konfigurējiet enerģijas taupīšanas opcijas.",
						"Pielāgojiet ģeometrijas iestatījumus, izveidojot savienojumu ar datoru. ",
						"Izvēlieties vairāk attēla uzlabotos iestatījumus.",
						"Atjaunojiet visus attēla iestatījumus uz noklusējumu.",
						"Izvēlieties skaņas režīmu, kas atbilst jūsu personīgajām vēlmēm.",
						"Pielāgojiet skaļuma balansu starp kreisās un labās puses kanāliem.",
						"Skaņas atgūšanas sistēma TruSurround HD nodrošina bagātīgu un skaidru skaņu zemās un augstās frekvencēs. ",
						"Digitālā interfeisa formāts, kas savieno televizora digitālās skaņas izeju ar mājas kinozāles audio aprīkojumu. ",
						"Izvēlieties audio valodu, kas atbilst jūsu personīgajām vēlmēm.",
						"Iespēja vājredzīgajiem baudīt televīzijas pārraides. ",
						"Pārbaudiet TV attēlu, skaņu un signālu.",
						"Izvēlieties kanālu saraksta tipu, kas atbilst jūsu TV signālam.",
						"Izvēlieties valodu programmas subtitriem, kas tiks rādīti ekrāna apakšā. ",
						"Skatiet pašreizējā kanāla tekstu un attēlus. ",
						"Digital Living Network Alliance. Izmantojot mājas tīklu, baudiet mūziku, fotoattēlus un video no citām ierīcēm, piemēram, datora. ",
						"Parādiet sava viedtālruņa saturu televizorā un izmantojiet viedtālruni kā televizora tālvadības pulti. ",
						"Rādiet sava televizora ekrānā saturu no Android ierīces, kas saderīga ar Miracast. ",
						"Nobloķējiet televizoru.",
						"Izvēlieties ierīces nosaukumu.",
						"Izvēlieties skatīšanas vidi.",
						"Atjaunojiet visus sistēmas iestatījumus uz noklusējumu."];
var initialTitle	= ["Sveicināti","Sākotnējā iestatīšana"];
var initialPrompt	= ["Tagad veiciet sākotnējo iestatīšanu - jūs gaida aizraujoša pieredze! ",
						"Lūdzu, izvēlieties valodu:",
						"Izvēlieties savu valsti:",
						"Lūdzu, izvēlieties atrašanās vietu:",
						"Izvēlieties tīkla savienojuma veidu:",
						"Izvēlieties vadu tīkla savienojuma režīmu:",
						"Neizdevās savienoties ar xxxxxxxxx! Lūdzu, pievienojiet ierīci saskaņā ar šādu diagrammu vai atlasiet pogu Left (pa keisi), lai to atiestatītu.",
						"Savienojiet ar xxxxxxxxx! Lūdzu, atlasiet pogu Right (pa labi), lai turpinātu.",
						"1) Jūsu televizoram var jau būt iebūvēts bezvadu adapteris\n 2)Vai, ja ir pieejams bezvadu USB adapteris, savienojiet to ar televizoru.  Tad izvēlieties bezvadu tīkla savienojuma režīmu",
						"Skenēšana. Lūdzu, uzgaidiet...",
						"TV nav pievienota neviena bezvadu ierīce!",
						"Lūdzu, pirms zemāk pieejāmās pogas \"Nākamais\" nosp. pārliec., vai šis PIN kods ir uzst. piekļ. p.",
						"Lūdzu, nospiediet spiedpogu uz AP 120 sekunžu laikā, pirms nospiest pogu Right!",
						"WPS (Wi-Fi aizsargāta iestatīšana)",
						"PIN (Personīgais identifikācijas numurs)",
						"PBC (spiedpogas konfigurācija)",
						"Šādiem saturiem var piekļūt tikai ar tīkla savienojumu. Vai vēlaties izlaist tīkla iestatīšanu?",
						"Lejupielādei ir pieejami programmatūras atjauninājumi. Tas var aizņemt laiku atkarībā no tīkla stāvokļa.  ",
						"Televizora programmatūras atjaunināšana nodrošina jums iespēju izmantot jaunākās funkcijas un pakalpojumus.",
						"Jūs nevarēsit lietot jaunākās funkcijas un pakalpojumus. Vai vēlaties izlaist programmatūras atjaunināšanu? ",
						"Nospiediet labās puses pogu, lai turpinātu. ",
						"Neizslēdziet atjaunināšanas laikā, jo tas var radīt televizora nepareizu darbību. ",
						"Ja nevēlaties atjaunināt, lūdzu, atlasiet NĒ.",
						"Notiek atjaunināšana, lūdzu, uzgaidiet",
						"Jūs varat arī atjaunināt programmatūru SYSTEM (SISTĒMA)/SOFTWARE UPDATE (PROGRAMMATŪRAS ATJAUNINĀJUMS).",
						"Atlasītajai valstij tiek pieprasīt paroles iestatījums.\nLūdzu, iestatiet savam TV kodu un apstipriniet to.",
						"This code is too simple.\nPlease use different digits.",
						"Apsveicam! Sākotnējā uzstādīšana ir pabeigta. Jūs varat mainīt savu konfigurāciju, izmantojot galveno izvēlni un saistītās apakšgrupas izvēlnes.",
						"Izvēlieties drošības režīmu:",
						"Lūdzu, atlasiet bezvadu tīkla savienojuma režīmu:",
						"Tīkls"];
var initNetCabAndDonRe = ["Nav pievienots tīkla kabelis, lūdzu, pievienojiet tīkla kabeli!","Nav iebūvēts bezvadu adapteris vai nav piegādāts bezvadu USB adapteris."];
var initChPrompt = ["TV kanāla uzstādīšana","Lūdzu, atlasiet antenas skenēšanas veidu.","Automātiskā uztveršana...","Tika atrasti šādi antenas kanāli:","Izvēlieties kabeļu meklēšanas veidu.","Lūdzu, atlasiet vienu operatoru šajā sarakstā.","Konfigurējiet meklēšanas informāciju","Atrasti šādi kabeļu TV kanāli:","Sarakstā izvēlieties vienu operatoru","Izvēlieties satelītus meklēšanai vai rediģējiet izvēlēto satelītu","Iestatiet satelīta parametrus","Šādi kanāli tika atrasti, un kanālu skenēšana var veikt arī no jauna Channel (Kanāls)/Channel Scan (Kanālu skenēšana)"];
var initClockPrompt = ["Iegūstiet tīkla nodrošinātu laiku!",
						"Lūdzu, iestatiet datumu un laiku:"];
var initialOptions	= ["Vide","Tīkla iestatīšana","Program. atjaunin.","Kanālu iestatīšana","Pulkstenis"];
var initialHotkeys	= ["Atpakaļ","Izvēlieties","Nākamais"];
var initLocations	= ["Mājas","Veikals","Veikals ar demo"];
var initNets		= ["Vadu","Bezvadu","Nav tīkla savienojuma"];
var initWireManuals	= ["IP adrese","Apakštīkla maska","Noklusējuma vārteja","Primārais DNS","Sekundārais DNS"];
var initSoftUpdates = ["Atjaunināt tagad","Atjaunināt vēlāk"];
var initChannelIns	= ["Turpināt","Es nevēlos instalēt kanālus"];
var initChScanTypes	= ["Digitāls & Analogs","Digitāls","Analogs","Nevēlos meklēt"];
var initChDvbts		= ["Antenas ATV kanāli:","Antenas DTV kanāli:"];
var initChDvbcs		= ["Kabeļu ATV kanāli:","Kabeļu DTV kanāli:"];
var initChDvbss		= ["Satelīta kanāli:"];
var initChDvbSOther	= ["Nevēlos meklēt satelītu"];
var initEndConnectedStatus= ["Atvienots","Izveidots WiFi tīklāja savienojums","Izveidots vadu savienojums"];
var initEndInstallations= "XXXX kanāli ir uzstādīti";
var initEndUpdate	= ["Atjaunināts"];

var audioScenes 	= ["Galds","Sienas stiprinājums"];			
var screenSavers	= ["Nav nevienas programmas informācijas tagad, lūdzu, vispirms meklējiet kanālus!",
						"Nav signāla!",
						"Kodēts",
						"Tikai dati",
						"Audio programma",
						"Nav audio un video",
						"Nav pieejams",
						"Nav teleteksta",
						"Nav programmas datu.",
						"Programma bloķēta!",
						"Programma bloķēta!\nNospiediet OK un ievadiet savu kodu.",
						"Nav programmas informācijas.",
						"Programma ir kaitīga nepilngadīgajiem.\nNospiediet OK (LABI) un ievadiet savu kodu.",
						"Kanāls bloķēts!",
						"Kanāls bloķēts!\nNospiediet OK un ievadiet savu kodu.",
						"Ievade bloķēta!\nNospiediet OK un ievadiet savu kodu.",
						"Netiek atbalstīts!",
						"Šis pakalpojums pašlaik nav pieejams",
						"Ievade bloķēta",
						"Nav programmas nosaukuma.",
						"Nav funkcijas"
						];
var chBookingPromt	= ["Pašreizējam kanālam ir plānota ierakstīšana, TV sāks ierakstīt.",
						"Atrasts plānots ieraksts.\n Pārslēdziet uz XXXX, lai ierakstītu",
						"Pašreizējam kanālam ir atgādinājums.",
						"Atrasts plānots atgādinājums.\n Pārslēdziet uz XXXX"];
var timeUnit		= ["Sekundes","min"];
var ciPromt			= ["Tīkla dati ir mainījušies. Lai atjauninātu, jūs varat veikt atjauninājumu skenēšanu. ",];
var othersPromt		= ["Lūdzu, uzgaidiet ...",];
var menuOptions		= ["Attēls","Skaņa","Kanāls","Tīkls","Sistēma"];
var optionOptions	= ["Attēla sākotnējā iestatīšana","Skaņas sākotnējā iestatīšana","Iesaldēt","T-Link","laika nobīde","PVR","Plānojuma saraksts","Iestatījumi"];
var optionTLinkPromt= [["Automātiskā ieslēgšanās","Autom. gaidstāve","Ceļveža izvēlne"],
						["Vool sees","Gaidstāve","Pastiprinātāja skaļums"]];
var powerPromt		= ["Televizors drīz izslēgsies! Nospiediet jebkuru taustiņu, lai atceltu."];
var ttxLanguage		= ["RIETUMEIROPA","AUSTRUMEIROPA","krievu","arābu/ebreju","farsi","arābu","baltkrievu","grieķu","turku"];
var ttxOptions		= ["Atklāt","Secīgi mainīt apakšlapas","Valoda","Brīdinājumu lapa","Jaunākās ziņas"];
var weekday         = ["Svētdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena","Piektdiena","Sestdiena"];
var lcnConfflict	= "Šai programmai ir uztveršanas traucējumi. Kanālā %d ir pieejama cita versija.";
var inShopMode		= "Jūsu TV ir veikala režīmā. Mājas režīmā, lūdzu, atlasiet \"Sistēma\" un mainiet izvēlnē \"Atrašanās vieta\".";
var nitRefresh		= "Tīkla dati ir mainīti. Vai vēlaties veikt atjauninājumu meklēšanu?";
var picHDMIMode     = ["Auto","Grafisks","Video"];

var glassRemind    	= ["Lūdzu, sapārojiet 3D brilles ar TV\n(Turiet ieslēgtu 3D briļļu IESLĒGŠANAS taustiņu).","Jūsu 3D brilles ir savienotas ar TV ",""];
var pvrRemind 		= ["Neizvelciet USB ierīci vai nepārtrauciet strāvas padevi"];
var pvrConName   	= ["PVR","Programmas informācija:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Ierakstītais video tika saglabāts mapē \"pvr\"."],"Beigt","Ierakstīt","stunda","Minūte","Kestvus","Padomi","Izmantojiet bultiņu taustiņus, lai iestatītu ierakstīšanas ilgumu."];
var pvrDisRemind 	= "Ievietojiet USB zibatmiņu, lai veiktu ierakstu.";
var pvrRemindWords  = ["Vai vēlaties iziet?",
							"Vai vēlaties pārtraukt ierakstīšanu un pārlūkot ierakstītos failus?",
							"Ketas on välja tõmmatud.",
							"Nepietiek brivās vietas.",
							"Nav ierakstītu failu. Uzsākt ierakstu.",
							"PVR nevar startēt kodēta kanāla režīmā.",
							"Līdzeklis nav pieejams",
							"Veiksmīgi saglabāts.",
							"Vai vēlaties apturēt ieraksta procesu un mainīt ievades avotu?",
							"TV beigs pašreizējo ierakstu. Vai vēlaties iziet?",
							"Lai darbotos pareizi, PVR ierakstam ir nepieciešams TV signāls, lūdzu, pārbaudiet savu signālu."];
var pvrChangeCh 	= ["Vai vēlaties pārslēgt kanālu?",
							"Vai vēlaties apturēt ieraksta procesu un mainīt kanālu?"];
var pvrChangeToPIN8	= ["Vai vēlaties mainīt avotu ierīcei, kas ir pievienota SCART ieejai?",
				    		"Vai vēlaties apturēt ierakstīšanas procesu un mainītu avotu ierīcei, kas ir pievienota SCART ieejai?"];
var pvrChangeToCEC  = ["Vai vēlaties mainīt avotu ierīcei, kas ir pievienota SCART ieejai?",
				  			 "Vai vēlaties apturēt ierakstīšanas procesu un mainīt avotu ierīcei, kas ir pievienota SCART ieejai?"];
var pvrGuideJump    = ["Vai vēlaties ieiet EPG?",
							"Vai vēlaties apturēt ieraksta procesu un ievadīt EPG?"];
var pvrMediaJump    = ["Vai vēlaties ieiet Media?",
							"Vai vēlaties apturēt ieraksta procesu un ievadīt Media?"];
var timeshiftExtra	= ["Vai vēlaties apturēt laika nobīdi un nomainīt Vai nomainīt kanālu?",
						"Vai vēlaties apturēt laika nobīdi un mainīt avotu ierīcei, kas ir pievienota SCART ieejai?",
						"Vai vēlaties apturēt laika nobīdi un mainīt avotu ierīcei, kas ir pievienota HDMI ieejai?",
						"Laika nobīdi nevar startēt kodēta kanāla režīmā.",
						"Vai vēlaties apturēt laika nobīdi, un ievadīt EPG?",
						"Vai vēlaties apturēt laika nobīdi un nomainīt TV režīmu uz USB?",
						"Vai vēlaties apturēt laika nobīdi un nomainīt Vai nomainīt ieejas avotu?",
						"Ievietojiet USB zibatmiņu, lai veiktu ierakstu.",
						"Diskā nepietiek vietas.",
						"TV beigs pašreizējo laika nobīdi. Vai vēlaties iziet?"];
var timeshiftStatus	= ["Ātri atpakaļ","Beigt","Atskaņot","Pauze","Ātri uz priekšu"];
var pvrPowerOffRemind= ["Gaidstāves ierakstīšana","Gaidstāve","TV tagad ieraksta, vai vēlaties turpināt ierakstu, kad TV ir gaidstāves režīmā?"];
var timeshiftInitTitle= "Diska iestatīšana";
var timeshiftInitReminds= ["Šo vedni izmanto USB diska laika nobīdes iestatīšanai. Lūdzu, atlasiet iestatīšanas režīmu.",
						 "Labākai veiktspējai iesakām veikt USB diska formatēšanu. Šādi tiks dzēsti visi dati.",
						 "Lūdzu, atlasiet laika nobīdes faila lielumu.",
						 "Formatēšana",
						 "Nepietiek brivās vietas.",
						 "Laika nobīdes faila izveidošana",
						 "Ātruma pārbaude",
						 "Diska ātrums ir pārāk mazs (< %f MB/sek), lai iespējotu laika nobīdes līdzekli!",
						 "Disks ir gatavs laika nobīdei. Tomēr iesakām labākai veiktspējai nomainīt disku (lai ātrums būtu > %f MB/sek).",
						 "Disks ir gatavs laika nobīdei. "];
var timeshiftInitButtons= ["Formāts","Izlaist","Atcelt","OK","Beigt","Iziet"];
var timeshiftInitOther=["Diska ātrums:","MB/s"];

var selectChoice	= "Vai esat pārliecināts?";
var chAtvStore		= "Saglabāt kā XXXX";
var chEpgFirstGenreUK= ["Filma","Ziņas un fakti","IZKLAIDE","Sports","Bērnu","Izglītība","Dzīvesveids","Drāma"];
var homePageTitleList = ["LIETOTNES","TV","VIDEO","Sākumlapa"];
var homePageFavAndAllName  = ["Iecienītākās lietotnes","Visas lietotnes"];
var homePageBackUp = ["E-rokasgrāmata","GuideOn"];
var homePageRemind   = ["Pilnas funkcijas ir pieejamas tikai pēc tīkla savienojuma izveidošanas.","Jūsu TV tagad nav neviena kanāla. Programmas ir pieejamas pēc kanālu skenēšanas.","nē programma","Meklēt kanālus tagad?"];
var homePageHistory = ["Vēsture"];
var miracastTitle = ["WiFi tīklojuma TV saite","TCL ierīce"];
var miracastRemind=["WiFi tīklojuma TV saite ļauj jums kopīgot ierīces, piemēram, viedtālruņa vai planšetdatora, ekrānu un skaņu ar televizoru bezvadu režīmā (t.i., neizmantojot kabeļus). Tādējādi to, kas tiek rādīts viedtālrunī vai planšetdatorā, vienlaicīgi varat skatīt savā televizorā. Piemēram, jūs varat palaist video savā viedtālrunī un vienlaicīgi rādīt to televizorā vai izmantot planšetdatoru spēļu vadībai, attēlojot saturu lielajā televizora ekrānā.","WiFi TV saite televizorā ir gatava. Sāciet koplietot ierīces ekrānu ar televizoru.","Veido savienojumu. Lūdzu, gaidiet.","Sakaru kļūme!","Neizdevās izveidot savienojumu. Lūdzu, pārbaudiet!"];
var homePageLittleWin = ["Iestatījumi","Vide","Iecienītie kanāli","Smart TV","EPG"];

var hbbtvStopRemind  = ["Vai vēlaties beigt atskaņošanu?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Nospiediet pogu OPTION (OPCIJA), lai iegūtu sīkāku informāciju.";
var emptyListInfo = "Ierīce nav pievienota televizoram!";
var optionVideoListArray_1 = ["Attēla sākotnējā iestatīšana", "Skaņas sākotnējā iestatīšana", "Atskaņošanas režīms", "Ekrāna režīms", "3D režīms", 
							  "K-L slēdzis", "Lauka dziļums", "Subtitri", "Skaņu ieraksts", "Nosaukums", "Nodaļa", "Info"];
var optionVideoListArray_2 = ["Attēla sākotnējā iestatīšana", "Skaņas sākotnējā iestatīšana", "Atskaņošanas režīms", "Ekrāna režīms", 
							  "Subtitri", "Skaņu ieraksts", "Nosaukums", "Nodaļa", "Info"];
var bottomTipsText = ["Atskaņot/Pauze", "Ātri atpakaļ", "Ātri uz priekšu", "Atskaņošanas saraksts", "Iestatījumi"];
var picturePresetArray = ["Standarts", "Dinamiskais", "Dabisks", "Filma", "Personīgs"];
var videoPlayModeArray = ["Atkārtot visus", "Atkārtot vienu", "Normaalne"];
var screenModeHDArray = ["16:9", "4:3", "Panorāmas kino sistēma", "Apgrieztais režīms", "Tālummaiņa 2", "Apgrieztais režīms 2", "Izstieptais režīms", "Automātiski"];
var screenModeSDArray = ["16:9", "4:3", "Panorāmas kino sistēma", "14:9 tālummaiņa", "16:9 tālummaiņa", "16:9 pacelšana uz augšu", "Automātiski"];
var Mode3DArray = ["Izslēgts", "No 2D uz 3D", "No sāniem", "No augšas un ap.", "Rindu laikdale"];
var videoOptionListArray = ["Izslēgts", "Ieraksts", "Subtitri", "Nosaukums", "Nodaļa"];
var subMenuTitleText = "Subtitri";
var langMenuTitleText = "Audio valoda";
var titleMenuTitleText = "Nosaukums";
var mode3DMenuTitleText = "3D režīms";
var langInfoText = "Ieraksts";
var STOP_RESUME_INFO = "Apturēt-Atsākt";
var playListName = " nosaukums";
var eb_tips = "Padomi";
var ok_button = "OK";
var eb_info = ["Audio dekodēšanas kļūda.", "Video dekodēšanas kļūda.", "Audio formāts nav atbalstīts.", 
			   "Neatbalsta video formātu.", "Nevar atvērt šo failu.", "Atskaņošanas kļūda, lūdzu, mēģiniet vēlreiz.",
			   "Faila formāts netiek atbalstīts.", "Diemžēl atskaņotājs ir pārtraucis darboties.",
			   "Faila ceļš nepastāv vai ir nederīgs.\n No jauna ievietojiet atmiņas ierīci un mēģiniet vēlreiz.",
			   "Turpināt atskaņošanu no iepriekšējā\n atskaņošanas stāvokļa?"];
var frameTitleText = "Jaunā ierīce";
var eb_quit_info = "Vai tiešām vēlaties iziet?";
var eb_yes = "JĀ";
var eb_no = "Nr.";
var offinfo = "Izslēgts";
var naInfo = "Nulle";
var consoleInfoArray = ["Ātri atpakaļ", "Ātri uz priekšu", "Atskaņot/Pauze", "Atskaņošanas saraksts"];
var cantOperateText = ["Funkcija netiek atbalstīta."];
var chapterChangeInfo = "Tikai nodaļas no 1 līdz XXXX ir pieejamas.";
var metaDataArray = ["Nosaukums/Metadatu rediģēšana: ", "Metadatu nodaļa: ", "Metadatu audio: ", "Metadatu apakšvirsraksts: "];
var metaTitleInfo = "Nosaukums";
var metaChapterInfo = "Nodaļa";
var videoLoadingInfo = "Analizē...";
var listLoadingInfo = "Lādējas...";
var pgInfo = "Zems reitings: ";
var fileNameText = " nosaukums";
var fileDateText = "Kuupäev";
var fileSizeText = "Izmērs";
var fileDurationText = "Kestvus";
var fileDirectorText = "Direktors";
var fileCopyrightText = "Autortiesības";
var fileArtistText = "Izpildītājs";
var fileAlbumText = "Albūms";
var fileGenreText = "Žanrs";
var fileYearText = "Gads";
var fileGenreText = "Žanrs";
var mainListArray = ["Visi", "Attēls", "Video", "Mūzika"];
var sortArray = [" nosaukums", "Kuupäev"];
var parserArray = ["Normaalne", "Rekursīvs  "];
var emptyTipsInfo = "Diemžēl nav atrasts neviens atbalstīts fails.";
var emptyFolderInfo = "Diemžēl nav atrasts neviens atbalstīts fails.";
var sortName = "Kārtot pēc";
var parserName = "Parsētājs";
var divx_str1 = "DivX(R) reģistrēšana";
var divx_str2 = "DivX(R) reģistrācijas deaktivizēšana";
var infor_str = "Info";
var quickMenuEmptyText = "Nav pieejamas opcijas.";

var musicSoundPresetArray = ["Standarts", "Filma", "Mūzika", "Skaidra balss", "Personīgs"];
var musicInformationArray = [" nosaukums", "Izpildītājs", "Albūms", "Žanrs:", "Gads:", "Ilgums:"];
var playListName = " nosaukums";
var playTipsInfo = ["Jūs atskaņojat pirmo failu.", "Jūs atskaņojat pēdējo failu."]
var musicNameInfo = "Name";
var musicArtistInfo = "Izpildītājs";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Skaņas sākotnējā iestatīšana";
var optionBGMInfo = "Atskaņot fonā";
var optionAudioOnlyInfo = "Tikai audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX ir savienots ar TV!";
var tvRemoteTitle		= "TV tālvadība";
var tvRemoteDeveloper	= "Lietotni izstrādājis TCL";
var tvRemoteDeviceTitle	= "Ierīces nosaukums:";
var remoteOption		= ["Multivides koplietošana","Tālvadības pults","Palīdzība","Par","Viedā savienošana"];
var remotebottom		= " Lūdzu, lejupielādējiet \"TCL nScreen\" (\"TV tālvadība\") viedtālrunim ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Fotogrāfijas, video un mūzika ar TV koplietošanu, izmantojot tālruni.",
							"Soļi: \n   1. Noklikšķiniet tālrunī uz \"TCL nScreen\". Savienojiet tālruni ar TV, izmantojot to pašu WiFi tīklu;\n   2. Noklikšķiniet uz \"Media Sharing\" (\"Multivides koplietošana\") lai pārlūkotu multivides failus;\n   3. Nosūtiet multividi uz TV atskaņošanai (ar vienu no šādām iespējām)",
							"      a) velciet un nometiet mapi/failu uz televizora ikonu ekrāna augšdaļā;\n      b) pagrieziet telefonu virzienā uz televizoru, lai palaistu pirmo failu;\n      c) atskaņojiet multivides failu telefonā un noklikšķiniet uz televizora koplietošanas ikonas;",
							"   4. Atskaņojot televizorā, pakratiet telefonu, lai atskaņotu iepriekšējo vai nākamo failu."];
var controlReminds		= ["Izmantojiet telefonu kā televizora tālvadības pulti.",
							" ",
							"Soļi: \n   1. Noklikšķiniet tālrunī uz \"TCL nScreen\". Savienojiet tālruni ar TV, izmantojot to pašu WiFi tīklu;\n   2. Noklikšķiniet uz \"Remote Control\" (\"Tālvadības pults\"), lai darbotos TV."];
var helpDeviceWords		= "Vairāku ekrānu mijiedarbība";
var helpBottom			= "Mākoņu tehnoloģijas laikmetā tādas viedās ierīces kā tālrunis un televizors ir savstarpēji savienojami. Koplietojiet medijus ar savu ģimeni vairākos ekrānos un pārvaldiet televizoru, izmantojot tālruni! ";
var helpReminds			= ["Sagatavošanās\n   1. Lejupielādējiet \"TCL nScreen\" no Google Play vai Apple Store un uzinstalējiet.\n   2. Savienojiet tālruni ar TV, izmantojot to pašu WiFi tīklu.",
							" ",
							"Ieteicamais telefons\n   1. Centrālais procesors: virs 800 MHz\n   2. Atmiņa: vismaz 80 MB brīva vieta",
							" ",
							"Saistību atruna\n   Ja jūsu telefonā nav pieejama funkcija \"TV pults\", lūdzu, sazinieties ar telefona ražotāju."];
var helpButtons			= ["Iepriekš.","Nākamais"];
var aboutReminds		= ["TV tālvadība","Lietotni izstrādājis TCL"];
var aboutExit			= "Iziet";
var smartReminds		= ["Ātrs un vieds savienojums starp TV un tālruni.",
							" ",
							"Soļi \n   1. Pievienojiet TV un viedtālruni tam pašam LAN tīklam. Noklikšķiniet viedtālrunī uz \"TCL nScreen\".\n   2. Noklikšķiniet uz \"Smart Connect\" (\"Viedais savienojums\"), lai skenētu QR kodu.\n   3. Ar TV raidījuma skatīšanās režīmā, nospiediet taustiņu INFO uz TV tālvadības pults 4 sekundes, uznirs pilnekrāna QR kods.",];
var smartQRReminds		= ["Lūdzu, noklikšķiniet tālruņa TV pultī uz „Smart Connect” un skenējiet QR kodu, lai savienotu ātri TV ar tālruni.",
							"QR kods satur LAN konta informāciju. Lūdzu, saglabājiet to"];
							

var consoleTipArray = ["Iepriekš.","Nākamais","Konsole","Atskaņošanas saraksts"];							
var optionInfoArray = ["Attēla sākotnējā iestatīšana","Atskaņošanas režīms","Kestvus","Efekts","Info"];

var playModeArray = ["Normaalne","Sajaukt","Atkārtot"];
var durationArray = ["Īss (5s)", "Vidējs (10s)", "Garš (15s)"];
var effectArray = ["Nav", "Izpludināšana", "Slaucīt pa labi", "Slaucīt pa kreisi", "Slaucīt uz augšu", "Slaucīt uz leju", "Uz centru", "No centra", "Jauktā secībā"];
var infoArray = ["Nosaukums:","Izmērs:","Datums:","Atrašanās vieta"];

var picturePresetBarTitleInfo = "Attēla sākotnējā iestatīšana";
var picturePresetBarArray = ["Standarts","Dinamiskais","Kinoteātris","Filma","Personīgs"];
var upTipsInfo = "Pārvietot attēlu"; //add yums 2014-10-10
var consoleTipsArray = ["Konsole","Iepriekš.","Nākamais","Atskaņošanas saraksts","Iestatījumi"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Nospiediet vēlreiz pogu RIGHT (PA LABI), lai atskaņotu nākamo attēlu","Nospiediet vēlreiz pogu LEFT (PA KREISI), lai atskaņotu iepriekšējo attēlu","Nospiediet vēlreiz pogu DOWN (UZ LEJU), lai parādītu atskaņošanas sarakstu"]; //add yums 2014-10-10

var optionPvrListArray = ["Attēla sākotnējā iestatīšana","Skaņas sākotnējā iestatīšana", "Ekrāna režīms", "3D režīms", "Subtitri", "Skaņu ieraksts", "Info"];							
	
var titleSpanFirstArray = ["Kontrole un savienojums","Pamatdarbības","LIETOTNES","TV","Iestatījumi","BUJ"];
var titleSpanSecondArray = [["Tālvadības pults","Paneļa taustiņi","Viegla navigācija","TV savienojums","TV savienojums","TV savienojums","Bezvadu"],["Palaidējs","Statusa josla","Avots"],["Tiek atskaņotas lietotnes","Vide","TV tālvadība"],["Kanālu un skaļuma regulēšana","Kanālu saraksts","EPG","Kanālu iestatīšana","Iecienītākie kanāli"],["Attēla korekcija","Skaņas regulēšana","Kanālu regulēšana","Program. atjaunin.","Valoda","Vecāku slēdzene"],["Biežāk uzdotie jautājumi","Biežāk uzdotie jautājumi","Problēmrisinājumi","Problēmrisinājumi","Noteikumi"]];
var contentSpan1_1Array = [["SARAKSTS:","INFORMĀCIJA:","IZVĒLNE:","BAROŠANA:","AVOTS:","CEĻVEDIS:","VIEDAIS TV:"],["Rāda kanālu sarakstu","Rāda programmas informāciju","Dodieties uz sākumlapu","Ieslēdz barošanas vai gaidīšanas režīmu","Atlasa ieejas avotu","Attēlo elektroniskās programmas (EPG) informāciju","Pāriet uz Smart TV lapu"]];
var contentSpan1_2Array = ["Iepriekšējais kanāls","Nākamais kanāls","Palielināt skaļumu","Samazināt skaļumu","Dodieties uz sākumlapu","Apstiprināt opciju","Gaidstāves režīms/Barošana ieslēgta"];
var contentSpan1_3Array = ["Labi/Ceļvedis","Kanāls augšup","Kanāls lejup","Skaļums lejup","Skaļums augšup","Atsevišķās funkcijās pieejami kā bultu taustiņi."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapteris","LAN","Viedtālrunis","PC/pierīce/DVD","Audio pastiprinātājs","Audio pastiprinātājs/Monitors","Jūsu TV var neietvert visas ligzdas."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Radioaustiņas","AV IN adapteris","SPDIF","CMP AUDIO IN adapteris","CMP IN (YPbPr) adapteris","USB ierīces","USB ierīces","Radioaustiņas","DVC/Spēļu konsole/pierīce/DVD","Audio pastiprinātājs","DVC/Spēļu konsole/pierīce/DVD","Jūsu TV var neietvert visas ligzdas."];
var contentSpan1_6Array = ["Kopējā saskarne","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA karte","SD karte","Dators","Pierīce/DVD","Antena/Kabelis/Satelīts","Jūsu TV var neietvert visas ligzdas."];
var contentSpan1_7Array = ["Tabletes","Dators","Maršrutētājs","Tālrunis","TV"];

var contentSpan2Array = [["Nospiediet bultu taustiņus, lai skatītu sākumlapu.","Pēc tam nospiediet OK (LABI), lai noskatītos kādu no raksturīgajām programmām vai ievadītu lietotni."],["Augšējā labējā ekrāna stūrī parādās datums, tīkls un ierīces utt."],["Atlasiet ieejas avotu ierīcē, kas ir savienota ar TV, izmantojot dažādas pieslēgvietas, piemēram, TV, AV, HDMI u.c."]];

var contentSpan3Array = ["Izbaudiet un skatiet savas iecienītākās programmas no Smart TV lapas","Skatiet fotoattēlus, skatieties video un atskaņojiet mūziku no USB atmiņas ierīces.","Pievienojiet savu TV un viedtālruni vai planšetdatoru tam pašam LAN tīklam","Noklikšķiniet TCL nScreen vai TCL nScreen viedtālrunī vai planšetdatorā","Kopīgojiet fotoattēlus, video un mūziku vairākos ekrānos ar savu ģimeni un regulējiet televizoru, izmantojot savu viedtālruni"];

var contentSpan4Array = [["Nospiediet pogu UP/DOWN (UZ AUGŠU/UZ LEJU), lai pārslēgtu kanālus","Nospiediet LEFT/RIGHT (PA KREISI/PA LABI), lai noregulētu skaļumu"],["Nospiediet LIST uz tālvadības pults, lai skatītu kanālu sarakstu","Nospiediet pogu UP/DOWN (UZ AUGŠU/UZ LEJU), lai atlasītu savu kanālu"],["EPG ir ekrāna ceļvedis, kas parāda plānotās TV programmas. Jūs varat pārvietoties, atlasīt, apskatīt un ierakstīt programmas."],["Meklējiet un instalējiet kanālus"],["Pievienojiet vai rediģējiet savus iecienītākos kanālus Kanālu sarakstā"]];

var contentSpan5Array = ["Baudiet savas iecienītākās programmas, izmantojot video lietotnes"];

var contentSpan6Array = [["Nospiediet pogu MENU (IZVĒLNE), lai parādītu sistēmas iestatīšanas opcijas","Ievadiet attēla iestatījumus, lai pielāgotu vērtības"],["Nospiediet pogu MENU (IZVĒLNE), lai parādītu sistēmas iestatīšanas opcijas","Ievadiet Skaņas iestatījumus, lai iestatītu opcijas"],["Nospiediet pogu MENU (IZVĒLNE), lai parādītu sistēmas iestatīšanas opcijas","Ievadiet Kanālu iestatījumus, lai iestatītu opcijas"],["Atjauniniet savu TV, kad ir pieejama jauna programmatūras versija "],["Jūs varat izvēlēties sev vēlamo izvēlnes valodu"],["Ļauj vecākiem bloķēt kanālus vai programmas, kas nav piemērotas bērniem"]];

var contentSpan7_1Array = [["Nav attēla, nav skaņas","Pārbaudiet, vai drošinātājs vai slēgiekārta darbojas.","Pievienojiet citu elektrisko ierīci strāvas kontaktligzdai, lai pārliecinātos, vai tā darbojas, vai arī ir ieslēgta.","Strāvas spraudnim ir slikts kontakts ar strāvas kontaktligzdu","Pārbaudiet signāla avotu."],["Normāls attēls, nav skaņas","Nospiediet skaļuma pogu UP, lai palielinātu skaļumu.","Skaņas iestatījums nav pareizs.","Pārraides signāla kļūda."],["Normāla skaņa, nav attēla","Pielāgojiet spilgtumu un kontrastu","Pārraides signāla kļūda.","Pārbaudiet, vai tas ir tikai audio režīmā."]];
var contentSpan7_2Array = [["Radiofrekvences traucējumi","Šie traucējumi rada kustīgus viļņus vai diagonālas svītras, un dažos gadījumos, attēla kontrasta zaudējumu. Atrodiet un noņemiet radiotraucējumu avotu."],["Nav krāsu","Noregulējiet krāsu iestatījumus.","Mēģiniet citu kanālu. Melnbaltu programmu var saņemt."],["Tālvadības pults nedarbojas","Nomainiet baterijas.","Baterijas nav ievietotas pareizi. TV pieslēgts galvenajam barošanas avotam."]];
var contentSpan7_3Array = [["USB ierīces saturs netiek rādīts","Pārbaudiet, vai USB atmiņas ierīce ir saderīga ar TV.","Pārbaudiet, vai TV atbalsta audio un attēlu failu formātus."],["Atskaņo bez skaņas","TV atskaņotājs neatbalsta video audio formātu."],["Faili netiek atskaņoti vienmērīgi","USB atmiņas ierīces nodošanas sniegums var ierobežot TV datu pārraides ātrumu."]];
var contentSpan7_4Array = [["Kam jāpievērš uzmanība, veicot programmatūras atjaunināšanu","Programmatūras atjaunināšanas laikā nedrīkst būt strāvas padeves pārtraukuma.","Novērsiet jebkādas darbības ar tālvadības pulti programmatūras atjaunināšanas laikā.","Esiet pacietīgi, jo programmatūras atjaunināšanas process var aizņemt nedaudz ilgāku laiku."],["Pēc programmatūras atjaunināšana nav atsevišķā TV interfeisa izmaiņu.","Zināmos apstākļos programmatūras atjaunināšana var būt ne tikai atjaunināšana vai jaunu funkciju pievienošana, bet TV komplekta bez atšķirīgām interfeisa izmaiņām uzlabošana. Reizēm arī TV interfeiss var palikt neskarts."]];
var termsTitle = "Noteikumi";
var termsConditions = ["(Juridisko paziņojumu) sniedz TCL - šī televizora ražotājs","Tā kā produktiem ar SmartTV pakalpojumiem ir dažādas iespējas, kā arī ierobežojumi attiecībā uz pieejamo saturu, noteiktas funkcijas, lietojumi un pakalpojumi var nebūt pieejami visām ierīcēm un visās teritorijās. Dažām SmartTV funkcijām var būt nepieciešamas papildu perifērijas ierīces vai atsevišķa abonentmaksa. Apmeklējiet mūsu tīmekļa vietni, lai iegūtu vairāk informācijas par konkrētām ierīcēm un pieejamo saturu. Pakalpojumi un pieejamais saturs, izmantojot SmartTV, laiku pa laikam var tikt mainīti bez iepriekšēja paziņojuma. \n   Viss saturs un pakalpojumi, kuriem var piekļūt, izmantojot šo ierīci, pieder trešajām pusēm, un tos aizsargā likumi par autortiesībām, patentiem, prečzīmēm un/vai citu intelektuālo īpašumu. Šāds saturs un pakalpojumi tiek sniegti vienīgi jūsu personīgai nekomerciālai lietošanai. Jūs nedrīkstat izmantot nekāda veida saturu vai pakalpojumus veidā, kas nav atļauts no satura īpašnieka vai pakalpojuma sniedzēja puses. Neierobežojot iepriekšminēto, ja vien attiecīgais satura īpašnieks vai pakalpojuma sniedzējs nav skaidri atļāvis, jūs nedrīkstat pārveidot, kopēt, pārpublicēt, augšupielādēt, izvietot, pārsūtīt, tulkot, pārdot, izmantot, jebkādā veidā izplatīt saturu un pakalpojumus, kuri pieejami, izmantojot šo ierīci, kā arī radīt to atvasinātus darbus. \n   JŪS SKAIDRI APLIECINĀT UN PIEKRĪTAT, KA PILNĪBĀ UZŅEMATIES RISKU PAR ŠĪS IERĪCES LIETOŠANU, TĀS APMIERINOŠU KVALITĀTI, VEIKTSPĒJU UN PRECIZITĀTI. IERĪCE UN VISS TREŠO PUŠU SATURS UN PAKALPOJUMI TIEK SNIEGTI „TĀDI, KĀ IR” UN BEZ JEBKĀDA VEIDA SKAIDRI IZTEIKTAS VAI NETIEŠI NORĀDĪTAS GARANTIJAS. TCL SKAIDRI ATSAKĀS NO VISĀM SKAIDRI IZTEIKTĀM VAI NETIEŠI NORĀDĪTĀM GARANTIJĀM UN NOSACĪJUMIEM ATTIECĪBĀ UZ IERĪCI UN JEBKĀDU SATURU UN PAKAKPOJUMIEM, TAI SKAITĀ, BET NE TIKAI, GARANTIJĀM ATTIECĪBĀ UZ PIEPRASĪJUMU, APMIERINOŠU KVALITĀTI, ATBILSTĪBU KONKRĒTAM MĒRĶIM, PRECIZITĀTI, PATIKU UN TREŠO PUŠU TIESĪBU NEPĀRKĀPŠANU. TCL NEGARANTĒ SATURA VAI PAKALPOJUMU, KURI PIEEJAMI, IZMANTOJOT ŠO IERĪCI, PRECIZITĀTI, DERĪGUMU, SAVLAICĪGUMU, LIKUMĪGUMU UN PILNĪBU, KĀ ARĪ NEGARANTĒ, KA IERĪCE, SATURS VAI PAKALPOJUMI ATBILDĪS JŪSU PRASĪBĀM UN IERĪCES DARBĪBA VAI PAKALPOJUMI BŪS NEPĀRTRAUKTI UN BEZ KĻŪDĀM. NEKĀDOS APSTĀKĻOS, TAI SKAITĀ NEVĒRĪBAS GADĪJUMĀ, TCL NEUZŅEMAS ATBILDĪBU, SASKAŅĀ AR LĪGUMU VAI LIKUMU, PAR JEBKURIEM TIEŠIEM, NETIEŠIEM, NEJAUŠIEM, TĪŠIEM VAI IZRIETOŠIEM ZAUDĒJUMIEM, ADVOKĀTU IZMAKSĀM, IZDEVUMIEM VAI JEBKURIEM CITIEM ZAUDĒJUMIEM SAISTĪBĀ AR JEBKĀDU INFORMĀCIJU VAI IERĪCES LIETOŠANAS REZULTĀTĀ JEBKURU SATURU VAI PAKALPOJUMU, KURAM PIEKĻŪSTAT JŪS VAI JEBKURA TREŠĀ PUSE, PAT JA IR PAZIŅOTS PAR ŠĀDU ZAUDĒJUMU IESPĒJAMĪBU. \n   Trešo pušu pakalpojumi jebkurā laikā bez iepriekšēja paziņojuma var tikt mainīti, atlikti, atcelti, izbeigti vai pārtraukti vai piekļuve tiem var tikt liegta, un TCL (Thomson zīmola televizoru ražotājs) neizsaka protestus un nesniedz garantiju attiecībā uz to, ka jebkurš saturs vai pakalpojums saglabāsies pieejams uz jebkuru laika periodu. Saturu un pakalpojumus pārraida trešās puses, izmantojot tīklus un pārraides aprīkojumu, kuri nav TCL kontrolē. Neierobežojot šīs atrunas vispārību, TCL skaidri atsakās no jebkādas atbildības vai saistībām attiecībā uz saturu vai pakalpojumu, kuri pieejami, izmantojot šo ierīci, jebkādām izmaiņām, pārtraukumu, liegumu, atcelšanu vai atlikšanu. TCL var piemērot ierobežojumus konkrētu pakalpojumu vai satura izmantošanai vai piekļuvei jebkādos gadījumos un bez paziņojuma vai saistībām. TCL neuzņemas atbildību un saistības par klientu apkalpošanu saistībā ar saturu un pakalpojumiem. Jebkuri jautājumi vai prasības saistībā ar saturu vai pakalpojumiem ir adresējami tieši attiecīgajiem satura un pakalpojumu sniedzējiem."];

var noChannelListRemind        = ["Neviens kanāls nav atrasts. Kanālu saraksts ir pieejams pēc kanālu skenēšanas.","Kanālu meklēšana"];
var closeSubtitleRemind   = "Funkcija būs pieejama, kad apakšvirsraksts ir izslēgts. Vai vēlaties iestatīt tagad?";

var estickerTitles = ["Ļoti reāli attēli","Krāsa, kas ir dzīva","Lieliskas reālas kustības","Dinamiska attēla kvalitāte","SR UHD paaugstināta pārveidošana","Pieredze 3D pasaulē","Ātrāka veiktspēja","Nākotnes 4K saturs","Izbaudiet tiešsaistes pasauli","Pieeja papildus saturam","Integrēti ciparu uztvērēji","Savieno visas ierīces","Dažādi 4K avoti","USB saturs","Ļoti ātrs WIFI tīklojums","Mobilās ierīces saturs TV","Mobilās ierīces saturs","Vietējais saturs","DivX apstiprināts","Attēls bez apakšfona kontūrām","Kanāls gatavs","TDT Premium"];
var estickerDescriptions = ["Apbrīnojama skatīšanās pieredze, pateicoties četrkārtīgas detalizācijas attēliem pilna HD UHD ekrānā","Plaša krāsu gamma nodrošina emocijas katrā skatījumā ar spilgtu sarkanu un smaragdzaļu krāsu","4K kadru interpolācija un aizmugurgaismojuma vadība, lai apkarotu kustības izraisītu defektu problēmas","Sākotnējā attēla spilgtums ir uzlabots, lai iegūtu patiesi dinamisku izteiksmi ar spīdošu kontrastu","Izbaudiet asākā skatījumā nekā iepriekš TV raidījumus un Blu-ray diskus, pateicoties augstas rezolūcijas tehnoloģijai","Izbaudiet 3D TV un skatieties dažādu 3D saturu","Papildu patīkamas izklaides pieredze, izmantojot Quad Core, vienmērīgai mijiedarbībai, uzlabojot sniegumu","HEVC (H.265) kodekss atbalsta gaidāmo 4K video izplatīšanas standartu","Tiešsaistes lietotņu bagātība, VOD pakalpojumi, TV uztveršanas pieaugums un interneta tīmekļa pārlūkošana","Skatiet vairāk, izmantojot papildu pakalpojumus un jūsu iecienītāko pārraidītāju saturu","Piekļūstiet augstas izšķirtspējas TV kanāliem bez papildu pierīces","Daudzie digitālie avoti, kas ir viegli pievienojami, ir pieejami mājās","TV gatavs nākotnei, spēj atskaņot 4K 50/60Hz, izmantojot HDMI 2.0 ar HDCP 2.2","Video vai fotoattēlu saturs tieši no USB diska, HDD vai kameras lielajā ekrānā ar 4K izšķirtspēju","Jaunākās paaudzes 2x2 MIMO un AC standarts nodrošina nepārspējamu interneta piekļuves ātrumu","Izbaudiet fotoattēlus, videoklipus, lietotnes no mobilajām ierīcēm lielajā ekrānā, pateicoties ekrāna atspoguļošanas tehnoloģijai","Fotogrāfijas, video, lietotnes no viedtālruņa vai planšetdatora var parādīt lielajā ekrānā ","Parādiet lielajā ekrānā vietējo saturu, piemēram, fotogrāfijas, videoierakstus no ierīces, kas ir savienota ar lokālo tīklu","Atskaņojiet DivX aizsargātas iznomātās vai pašu filmas ","Ļoti šaurs ietvars un ļoti plāns dizains","Canal + ir pārbaudījis un apstiprinājis","TDT Premium ir pārbaudījis un apstiprinājis"];							

var eManualTextArray = ["E-rokasgrāmata","Visa iekļautā grafika ir sniegta tikai uzskates nolūkos."];
var frontPanelRemind = "Priekšējais panelis ir bloķēts.";
var eRPRemind		 = "Veikala režīms nevar apmierināt produkta enerģijas patēriņam izvirzītās prasības. Vai esat pārliecināts?";	
var noRelatedChannel = "Nav saistīta kanāla";
var option0624Name          = ["BOP","BFS","Notikums pēc notikuma","GetUserID","BGM","Reset all","Atiestatīt veikal režīmu","NRM","DVB-T2 un valsts izvēle","HbbTV režiim"];
var DVBT2AndChoice = ["Ieslēgts","Pēc valsts","Izslēgts"];
var hbbtvServiceRemind = "Drīz būs pieejams HbbTV pakalpojums.";
var insertWord = "Ievietot";		
var viewDetail = "Detalizēti";							

var remindOAD  = "Programmatūras jauninājums. Iespējams, citā kanālā ir jauns ieteicamais progr. jauninājums. Ja ļausiet tā lejupielādi, šādi, iespējams, automātiski tiks nomainīts kanāls. Vai vēlaties to darīt tagad?";

var LEDStatus = ["Mirgo", "Normaalne"];
var netFlixRemind = "Šī funkcija pārtrauks piekļuvi Netflix pakalpojumiem, līdz pieteiksieties atkārtoti.";
var ESNExplanation = "Elektroniskais sērijas numurs";
var resetShopRemind = "Sistēma tiek atiestatīta, lūdzu, neizslēdziet televizoru";
var initialSelectOption = "Lūdzu, izvēlieties vienu opciju:";
var databaseRemind   = "Sistēma ir identificējusi datubāzi kā bojātu nezināmu iemeslu dēļ un automātiski to pārveidojusi, nospiediet OK, lai turpinātu";
var Deactivation = "Deaktivizēšana";
var oadFutureRemind = "Programmatūras atjauninājums. Jauns ieteicamais programmatūras atjauninājums būs pieejams pēc %s. Atjaunināšana var ilgt zināmu laika periodu un tās laikā ekrāns var izslēgties. Apstiprinot šo atjauninājumu, lūdzu, atstājiet plānojuma laikā uztvērēju ieslēgtu vai gaidstāves režīmā. Vai vēlaties saņemt šo atjauninājumu?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Skaņas izeja";
var bt_soundOutPutTV = "TV skaļruņi";
var bt_soundOutPutBT = "Bluetooth ierīce";
var bt_soundOutPutBT_TV = "Bluetooth un TV";
var bt_refreshBarName = "Ierīces";
var bt_settingTips_On = "Ieslēgt Bluetooth funkciju un skenēt ierīces.";
var bt_settingTips_Finding = "Atrod pieejamās ierīces...";
var bt_settingTips_NoDevice = "Nav pieejamu ierīču.";
var bt_deviceList_State_NoConnect = "Nav savienots";
var bt_deviceList_State_Connecting = "Savienojas...";
var bt_deviceList_State_Connected = "Savienots";
var bt_deviceList_State_Paired = "Sapārots";
var bt_deviceList_Conncect_Failed_Tips1 = "Neizdevās savienot.";
var bt_deviceList_Conncect_Failed_Tips2 = "Pārliecinieties, ka XXX Bluetooth ir ieslēgts";
var bt_deviceList_Conncect_Success = "Savienots ar Bluetooth ierīci.";
var bt_deviceList_Disconncect_Success = "Atvienots no Bluetooth ierīces.";
var bt_deviceList_Disconnect = "Vai tiešām vēlaties atvienoties no XXX?";
var bt_tipsTitle = "Padoms";
var bt_bluetooth_Pairing_Title = "Bluetooth sapārošana";
var bt_bluetooth_Input_Pin = "Ievadiet PIN:";
var bt_bluetooth_Output_Pin_Tip = "Ievadiet XXXX PIN ar tastatūru.";
var bt_bluetooth_Pin_Wrong_Tip = "Nepareizs PIN";
var bt_bluetooth_Remove_Pair_Title = "Vaicājums";
var bt_bluetooth_Remove_Pair_Ask = "Aizmirst šo ierīci?";
var bt_bluetooth_module_error = "Bluetooth modulis kļūda!";

var netflixDialogOptions = ["OK","Vēlāk","Nekad nerādīt atkārtoti"];
var netflixDialogContent = "Netflix piedāvā tūkstošiem filmu. Skatīties tagad?";
var netflixRemoteDialogContent = "Tālvadības pults ar Netflix taustiņu ir pieejama iegādei. Lai uzzinātu vairāk, apmeklējiet šo tīmekļa vietni.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Pašreizējais avots","Visi avoti"];
var audioDescriptionName = ["Audio apraksts","Skaļrunis","Skaļruņa skaļums","Austiņas","Austiņu skaļums","AD skaļums","Bluetooth ierīce","Bluetooth ierīces skaļums"];
var audioDescriptionOptions = ["Izslēgts","Normaalne","Audio apraksts"];							
var volumeOffRemind = 'Iestatījumu izvēlnē iestatiet XXX „Ieslēgt”.';
var switchSourceRemind   = " ievietots. Vai vēlaties pārslēgt tagad?";							
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sporta režīms";
var resetStadium = "Stadions";
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Iziet","0","Tālummaiņa+",
                       	   "Iziet",
                       	   "Saraksts","0","Teksts","Kava","Ievadīt","Iziet","Izvēlne","Subtitri","Informācija",
                       	   "Apstādināšana",
                       	   "Informācija","Izvēlne","Iziet"
                       	   ];
var nscreenTips = "GuideOn palīdz lietotājiem pārvietoties apjomīgajā saturā.";
var nscreenContent = 'Soļi: 1.Tālrunī noklikšķiniet „TCL nScreen”.  Savienojiet tālruni ar televizoru, izmantojot to pašu LAN. 2.Noklikšķiniet „GuideOn”, lai atvērtu GuideOn. 3.GuideOn līdzinās drukātam programmu ceļvedim, informējot lietotājus par pieejamo TV saturu.';
var singalBrokenoffTips = "Signāls ir pārtraukts. Sistēma nevar pabeigt lejupielādi.";
var contentSpan1_1Array_AU = [["BAROŠANA:","AVOTS:","IZVĒLNE:","BACK:","INFORMĀCIJA:","HOME:","EXIT:","SARAKSTS:"],
                             ["Turns power on or standby mode","Select the input source",
                                 "Show TV settings menu","Go back to the Previous menu or exit a running APP","Rāda programmas informāciju",
                                 "Dodieties uz sākumlapu","Go back to the Previous menu or exit a running APP", "Rāda kanālu sarakstu"]];
var guideDescriptionWords ="Noskenējiet QR kodu, lai lejupielādētu lietojumprogrammu GuideOn savā tālrunī";				 
var settingNoticeSourceName ="Automātisks avots";
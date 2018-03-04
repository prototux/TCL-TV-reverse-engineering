
var all_country 	= ["Australien","Østrig","Belgien","Bulgarien","Kroatien","Tjekkiet","Danmark","Finland","Frankrig","Tyskland",
						"Grækenland","Ungarn","Italien","Luxembourg","Holland","Norge","Polen","Portugal","Rumænien","Rusland",
						"Serbien","Slovenien","Spanien","Sverige","Schweiz","Det Forenede Kongerige","New Zealand"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Letland","Slovakiet","Tyrkiet","Irland","*","Filippinerne","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kina","*","*","*","*","*","*","Andre","Litauen"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litauen"];							
				
var all_language 	= ["Tjekkisk","*","Dansk","*","*","Tysk","Engelsk","Fransk","Græsk","Spansk",
						"Kroatisk","*","Italiensk","Ungarsk","Hollandsk","Norsk","Polsk","Portugisisk","Russisk","Rumænsk",
						"Slovensk","Serbisk","Finsk","Svensk","Bulgarsk","Slovakisk","*","*","Gælisk","*",
						"Walisisk","Arabisk","Irisch","Latvian","*","Tyrkisk","Estonian","Hollandsk"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Original lyd"/*Qaa*/,"Ikke defineret"/*Undetermined*/,"*","Ukendt",
						"Ikke defineret","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskisk","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Witrussisch","*","*","Katalansk","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicisk","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandsk","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lithuanian",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantik","*","*","*","*",
						"*","*","*","Samisk","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Tekst-tv",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainian","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Fra","Til"];
var okCancel		= ["Ok","Annuller"];
var yesNo			= ["JA","NEJ"];
var level			= ["Fra","Lav","Høj","Mellem"];
var manualAuto		= ["Manuel","Auto"];
var homeShop		= ["Hjem","Butik"];
var picPreset		= ["Standard","Dynamic","Naturlig","Biograf","Digital biograf","Bruger"];
var picColorTemp	= ["Kold","Normal","Varm","Varm2","Bruger"];
var pic3dNavig		= ["Manuel","Auto","Semi-Auto"];
var _3dOptions		= ["3D tilstand","3D-til-2D","V-H knap","Dybde af felt"];
var pic3DMode       = ["Fra","2D-til-3D","Side-om-side","Top og bund","Linje indfletning"];
var picEcoOptions	= ["Energispare","Lyssensor","Lokal nedblænding","Variabel dæmpning"];
var picGeoOptions	= ["Geometri","V. position","L. position","Klokke","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["R forstærkning","G forstærkning","B forstærkning","R forskudt","G forskudt","B forskudt"];
var souOptions		= ["Forudindstillet lyd","Balance","Lydforsinkelse","SRS TSHD","Autom. lydst.kontr",
						"SPDIF-type","SPDIF-forsinkelse","Tv placering","Lydsprog","Lydkanal",
						"Audiobeskrivelse","Digital audio output-type","Dolby professionel indstilling"];
var soundOutputoptions =["TV-højttaler DAP output","Eksternt AVR krypteret output"];
var inteligenteqoptions 	=["Fokuseret","Omfattende"];								
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Fra"];
var colorSpace      = ["Auto","Lokal","Bruger","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Surround virtualisator","Dialog-forstærker","Bas-forstærker","Intelligent lydstyrke","Medie intelligens","Grafisk EQ" ,"Intelligent EQ"];
var chOptions		= ["Kanalscanning","Kanalliste","EPG","Organisator","Kanaloversigt",
						"tidsskift","Undertekst","Tekst-tv","Kanallistetype"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalstyrke","Signalkvalitet","Frekvens (KHz)","Service ID","Netværk-id","Netværksnavn"];
var chScanOptions	= ["Land","Tuner tilstand","Kanalscanning","Updater scanning","Analog man. scann.",
						["Kabel manuel søgning","Antenne manuel søgning","Manuel tuning af satellit"],"Satellitantennens opsætning","Vælg yndlingsnetværk","Ryd kanalliste",];
var favNetDes		= "Du bedes vælge dit foretrukne netværk";
var tuner			= ["Kabel","Antenne","Satellit"];//Satelite 无翻译
var passError		= "Adgangskode forkert.\nIndtast igen!";
var chType			= ["Analoge kanaler: ","Digitale kanaler: "];
var chScanStatus	= ["Status: Søger","Status: Scanning fuldført","Status: Scanning annulleret","Status: Scanningsfejl"];
var chScanPara		= ["Frekvens (KHz)","Modulering","Symbolhastighed (Ksym/s)","Netværk-id","System",
						"Finjuster","Signalstyrke","Signalkvalitet","Scanningstilstand","Kanal-id"];
var chScanParaMHZ      = ["Frekvens (MHz)"];
var chAtvManSys		= ["VEST EUR","ØST EUR","Storbritannien","Frankrig"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Auto"];
var chCleanDes		= "Vil du fjerne kanalerne fra oversigten?";
var chDeletDes		= "Ønsker du at slette kanalen?";
var chOperator		= ["Ziggo","UPC","Andre"];
var chScanType		= ["Digital & Analog","Digital","Analogue"];
var chScanMode		= ["Fuld","Avanceret","Hurtig"];
var bookingModes	= ["Optage","Påmindelse"];
var dayName			= ["Søn","man","Tir","Ons","Tor","Fre","Lør"];
var monthName		= ["Jan", "Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];
var filter			= ["Filtre","Type","Undertype"];
var chEpgFirstGenre	= ["Biograf","Nyheder","Show","Sport","Børn","Musik","Kunst","Socialt","Uddannelse","Fritid","SÆRLIGT"];
var chEpgSecondGenre= [["Drama","Krimi","Oplevelse","Science-fiction","Komedie","Sæbe","Romantik","Alvor","Erotisk film"," "," "," "],
						["Current Affairs","Vejrudsigt","Nyhedsmagasin","Dokumentar","Diskussion"," "," "," "," "," "," "," "],
						["Show","Quiz","Variete-show","Talkshow"," "," "," "," "," "," "," "," "],
						["Sport","Særlige begivenheder","Sportsmagasiner","Fodbold","Tennis",
							"Teamsport","Atletik","Motorsport","Vandsport","Vintersport",
							"Ridesport","Kampsport"],
						["Børn","Børnehaveprogrammer","Underholdning for 6 til 14","Underholdning for 10 til 16","Oplysende","Tegnefilm"," "," "," "," "," "," "," "],
						["Musik","Rock","Alvor","Folkemusik","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Kunst","Scenekunst","Kunst","Religion","Populærkultur",
							"Litteratur","Film","Eksperimental","Broadcasting","Nye medier",
							"Kunstmagasiner","Mode"],
						["Socialt","Magasiner","Økonomi","Særlige personligheder"," "," "," "," "," "," "," "," "],
						["Uddannelse","Natur","Teknologi","Medicin","Fremmede lande","Samfundsvidenskab","Videregående uddannelse","Sprog"," "," "," "," "],
						["Hobby og fritid","Turisme","Håndværk","Færdsel","Form og sundhed","Madlavning","Reklame","Havebrug"," "," "," "," "],
						["Originalsprog","Sort og hvidt","Ikke offentliggjort","Direkte udsendelse"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Spring kanal over","Sorter kanal","Rediger kanal","Slet kanal","kanal swap","kanal insert"];
var chEditPara 		= ["Netværksnavn","Kanalnummer","Kanalnavn","Frekvens","Farvesystem","Lydsystem"];
var chSatTitles		= ["Satellittype","Satellitantennens opsætning","Vælg satellit"];
var chSatEidtOptions= ["Satellitnavn","Position","LNB Magt","LNB frekvens (MHz)","Ulige indgang",
						"Tone 22KHz","tone burst","Frekvens (KHz)","Symbolhastighed (Ksym/s)","Polarisering",
						"Signalstyrke","Signalkvalitet","Satellitstatus"];
var chSatAutoPromt	= [["Alt","Netværk"],
						["Alt","Fri"]];
var chSatAutoScanOptions=["Vælg satellit","Scanningstilstand","Kanaler"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Deaktivere","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Til","Fra"];
var chSatToneBurst	= ["Deaktivere","tone burst A","tone burst B"];
var chSatPolarization= ["Horisontal","Vertikal"];
var chSatSetupOptions=["Antennetype","Tuner","Båndfrekvens"];
var chSatAntennaType= ["EnkeltKabel","Universal"];
var chSatUserBands	= ["Brugerbånd 1","Brugerbånd 2","Brugerbånd 3","Brugerbånd 4","Brugerbånd 5","Brugerbånd 6","Brugerbånd 7","Brugerbånd 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Brugerdefineret"];
var pleaseSelectSat = "Du bedes først vælge satellitter!";
var subOptions		= ["Undertekst","Digitalt undertekstsprog","Digitalt undertekstsprog 2nd","Underteksttype"];
var ttxOptionsCon      = ["Dekoder sidesprog","Digitalt tekst-tv sprog"];
var subType			= ["Normal","Hørehæmmet"];
var netIntf     	= ["Ethernet","Trådløs"];
var netConnDes		= ["TVet tester netværksforbindelsen.\nVent venligst",
						"Netværkstilslutningstest gennemført ok!",
						"Netværkstilslutningstest ej gennemført."];
var netSsidError	= "Den gyldige SSID-længde er 1~32 tegn. Du bedes kontrollere SSIDen.";
var netOthers		= ["PIN-kode "];
var netWlessAutoDes	= ["Sørg for, at følgende PIN-kode er indsat i dit adgangspunkt, inden du klikker på OK.",
						"Tryk på knappen på adgangspunktet indenfor 120 sekunder, inden du klikker på OK."];
var netConnRemind	= ["Adgangskode forkert!",
						"Opretter forbindelse. Vent venligst!",
						"Tilslutning udført og IP opnået!",
						"Link fejl",
						"TV søger AP\nVent venligst",
						"Der er ingen trådløs enhed tilsluttet til TV!"];
var netWireIpOptions= ["IP-indstilling","Adressetype","IP-adresse","Subnet mask","Standard gateway","Primær DNS","Sekundær DNS"];
var netWireConnRemind= ["Indtast en værdi mellem 0 og 255.",
						"Tilsluttet korrekt!",
						"Du bedes indtaste en gyldig adresse",
						"Tilsluttet korrekt!",
						"Tilslutning mislykkedes!",
						"Opretter forbindelse. Vent venligst!",
						"Du bedes indtaste en værdi mellem 1 og 223."];
var netFlixOptions	= ["Deaktiver","ESN"];
var netFlixDes	 	= ["Er du sikker på, at du ønsker at deaktivere?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Softwareopdatering";
var netUpdateDialogTitle = "Opdaterer software";
var netBGDownloadTitle 	= "Downloader";
var netUpdateLoadingPrompt= ["Søger efter opgradering, vent venligst!",
							"Softwaren bliver downloadet... Vent venligst!",
							"Sluk IKKE TV'et, mens softwaren opdateres!",
                            "Den nødvendige software opdatering bliver automatisk downloadet i baggrunden!"];
var netUpdatePrompt= ["Tillykke, du har den nyeste softwareversion!",
						"Der er fundet en ny softwareversion XXXX. Vil du downloade nu? Det kan tage nogle minutter afhængigt af din netværksstatus.",
						"Kunne ikke logge ind!",
						"Det lykkedes ikke at modtage data, du bedes prøve igen senere!",
						"Parse opdatering XML mislykkedes!",
						"Link fejl",
						"Softwaren blev hentet. Vil du starte visningen?",
						"Data tabt!Download mislykkedes!",
						"Kunne ikke tjekke pakken, prøv venligst igen!",
						"Netværk er unormalt.Kontroller venligst og tilslut igen…",
						"Opdatering mislykkedes.Genstart TV!",
						"Opdateringsfilen blev uventet slettet. Du skal gennemføre opdatering via netværk igen.",
						"Softwaren er blevet downloaded i baggrunden. Vil du gennemføre opdateringen?"];
var netUpdateButtonText = ["Download", "Opdatér", "Senere", "Aldrig", "Ok","Fortsæt"];
var autoDetectPrompt = ["Der er fundet en ny softwareversion XXXX. Vil du downloade nu? Det kan tage nogle minutter afhængigt af din netværksstatus.",
						"Fandt ny softwareversion XXXX. Vil du opdatere nu?",
						"Opdatering via netværk blev afbrudt sidst. Du skal gennemføre opdateringen igen.",
                        "Downloading af ny softwareversion XXXX er ikke færdig. Ønsker du at fortsætte nu?",
                        "Software downloadet, vil du opdatere nu?"];
var sysOptions		= ["E-Manual","OSD-sprog","Tidsindstilling","Spærre","Inputindstillinger",
						"Softwareopdatering","Placering","HbbTV-modus","Cookies","Fælles interface",
						"Avancerede indstillinger","Nulstil butik","LED-indikator"];
var sysResetDes		= "Er du sikker?";
var sysMenuLangOptions=["Sprog","Foretrukket lydsprog","Foretrukket 2. lydsprog"];
var sysTimerOptions	= ["Tidszone","Områdenavn","Klokke","Dvale-timer","Auto standby", "Country region"];

var sysTimeZone		= ["Som sender","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Fra","10 min.","20 min.","30 min.","40 min.","50 min.","60 min.","90 min.","120 min."];
var sysStandby		= ["Fra","4 timer","6 timer","8 timer"];
var sysRegionName	= ["Madrid","Kanariske Øer"];
var sysClockOptions	= ["Autom. synkron.","Dato","Tidspunkt","Aktiver Timer","Tidsindstilling",
						"Tænd for kanal","Deaktiver Timer","Tidsindstilling"];
var sysTimer		= ["Fra","Dagligt","En gang"];

var sysInputSet		= ["Ingen betegnelse","DVD","Blu-ray","HDD","DVDR",
						"HD-opt.","Spil","Videobåndoptager","Pc","Digital STB",
						"HD dig. STB","Kamera","Optager","Andet"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-video"];
var sysUpdate		= ["Via USB","Via Netværk","Efter kanal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Der blev ikke fundet nogen ny software!",
						"Fandt ny softwareversion XXXX. Vil du opdatere nu?",
						"Du bedes indsætte USB-stikket.",
						"Kunne ikke tjekke pakken, prøv venligst igen!",
						"Frakobl IKKE USB-donglen og sluk IKKE for tv'et under opdatering af firmwaren!!",
						"Softwaren er blevet opdateret korrekt.\nTV vil derefter genstarte automatisk!",
						"Der er fundet en ny softwareversion XXXX. Vil du downloade nu? Det kan tage nogle minutter afhængigt af din netværksstatus.",
						"Downloader",
						"Softwaren blev hentet. Vil du starte visningen?",
						"Opdat. Mislyk.!",
						"Søger efter opgraderingsfiler",
						"Softwareopdateringen er gennemført.\nGenstart dit TV nu."];
var sysProductInfo	= ["Aktuel version","Produktnavn","Producentens navn","Chassisets navn"];
var sysCiDes		= ["CI kort ikke fundet."];
var sysAdOptions	= ["DivX(R) registrering","DivX(R) framelding","T-Link","Authorization Error","Afregistreringsbekræftelse",
						"Lejebekræftelse","Lejeperiode udløbet","Bluetooth-deklaration ID"];
var sysRegistDes	= ["Du skal registrere din enhed for at afspille DivX beskyttede videoer",
						"Registreringskode:",
						"Registrer på http://vod.divx.com"];
var sysDregistDes	= ["Frameldingskode:",
						"Frameld på http://vod.divx.com",
						"Fortsæt registrering?"];
var mediaAuthorization = ["Din enhed er ikke autoriseret til afspilning af denne DivX(R)-beskyttede video."];
var deregistrationConfrimation = ["Din enhed er allerede registreret.","Er du sikker på at du ønsker at framelde?"];
var rentalConfirmation = "Du har brugt XXXX af dine YYYY afspilninger for denne DivX(R) lejevideo. Fortsæt?";
var rentalExpired 	= "DivX®-lejen har brugt XXXX ud af YYYY fremvisninger. DivX-lejen er udløbet.";
						
						
var sysLockOptions	= ["Kanalblok","Tidsinterval lås","Forældre vurdering","Input lås","Front panel lås","Installations lås",
						"Skift adgangskode","Max volumen ","Slet alt"];
var sysTimeIntervals= ["Låse-type","Starttidspunkt","Sluttidspunkt"];
var sysRatingOptions= ["Ingen","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-normeret (Spanien)"];
var changePass		= ["Skift adgangskode","Ny adgangskode","Bekræft adgangskode"];
var changePassDes	= ["Adgangskode forkert.\nIndtast igen!",
						"Adgangskode matcher ikke\nIndtast igen!",
						"Koden er ændret!",
						"Denne kode er for simpel til at blive indstillet som adgangskode.\nIndtast venligst igen!"];
var sysPowerOnChOptions= "Vælg tilstand";
var sysPowerOnCh	= ["Sidste status","Brugervalg"];
var netWlessSecu    = ["Åbn","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ingen","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Ingen støtte"];
var netWlessSecu3	= ["Ingen","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Ingen støtte"];
var netOptions		= ["Internetforbindelse","Interface","Trådløse indstillinger","IP-indstillinger","Information",
						"Forbindelsestest","DLNA","TCL nScreen","Netflix-indstillinger","WiFi TV link",
						"Adressetype","IP-adresse","Subnet mask","Standard gateway","Primær DNS",
						"Sekundær DNS","SSID","BSSID","Indtast venligst SSID:","Bruger-id"];
var chEditDes		= ["Kanalnummeret anvendes allerede!","Tryk på den røde tast for at slette det aktuelle tegn!","Ugyldige kanalnumre"];
var chEpgNoProgram	= "Ingen programoplysninger nu, du bedes først søge kanaler!";
var chEpgWords		= ["Programguide","Ingen programdata.","Kanal låst!","Ingen programoplysninger","Ingen programtitel."];
var chEpgBooking	= ["Planlæg info", "Kanalnummer","Startdato","Starttidspunkt","Sluttidspunkt",
						"Gentag type","Register type","Tilføj","Udskift","Skift",
						"Tilføj/Redigér"];
var epgHotKey		= ["Foregående dag","Næste dag","Filtre","Programliste","Tilføj program"];
var chEpgBookRemind	= ["Forkert starttidspunkt","Forkert sluttidspunkt","Tidsplanen findes allerede","Er blevet gemt.","Slettet korrekt."];
var chSchePara		= ["Programliste","Starttidspunkt","Startdato","Programtitel","Kanalnavn",
						"Varighed","Gentag","Tidsplan","Rediger","Slet"];
var dateTimer		= ["En gang","Dagligt","Hver uge"];
var scheduleDeleteReminds="Ønsker du at slette dette program?";
var scheduleNoLists	= "Der er ingen programliste. Tryk på den \"Røde\" tast for at tilføje et.";
var chListWords		= ["Kanalliste","Vælg liste","Tuner tilstand","Føj til favoritter","Fjern",
						"Vælg kanaloversigt","Vælg tuner-funktion","Skift"];
var chListType		= ["Alt","Digital","Analogue","Radio","Fri","Favoritter"];
var chAutoScanOptions=["Vælg udbyder","Kanaltype","Kanalscanning"];
var souSoundType	= ["Ugyldig","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musik","Biograf","Klar stemme","Standard","Bruger"];
var picAdRgbMode	= ["Fra","Kun rød","Kun grøn","Kun blå"];
var picAdOptions	= ["DNR","MPEG-støjreduktion","RGB mode","Dynamic Contrast","LED bevægelsesklarhed",
						"Hudkulør","Filmtilstand","Spiltilstand","Farvetemperatur","Hvidbalance",
						"Hold","Black Stretch","Overscanning","Gamma","HDMI-tilst.","10P hvidbalance","Farveforlænger",
						"Reduceret sløring","Reduceret vibration","Farveplads","Bevægelsesklarhed"];
var pic10Pwhite     = ["Interval","Rød","Grøn","Blå","Nulstil","Farve","Gul","Cyan","Magenta"];
var picMotionClarity = ["Bevægelsestilstand","Bevægelsesinterpolation","LED bevægelsesklarhed","Reduceret sløring","Reduceret vibration","Nulstil"];
var picMotionMode   = ["Auto","Film","Problemfri","Ryd","Sport","Kunde"];
var picResetDes		= "Alle personlige indstillinger bliver nulstillet. Er du sikker på du ønsker at foretage den valgte handling?";
var pic10PReset     = "Er du sikker på ønsker at nulstille 10P hvidbalance?";
var picMotionReset  = "Ønsker du at nulstille bevægelsesklarhed?";
var picColorSpaceReset    = "Er du sikker på du ønsker at nulstille farveplads?";
var picOptions		= ["Billedtilstand",
						"Baggrundslys","Lysstyrke","Kontrast","Mæthed","Farvetone","Skarphed","Farvetemperatur","Skærmtilstand","Automatisk",
						"Sportsforbedring","3D  ","3D-navigation","ECO Indstillinger","Geometri",
						"Avancerede indstillinger","Anvend billedtilstand","Nulstil billede"];
var picSize			= ["16:09", "4:3-format", "14:9-format", "Cinerama",
						"16:9 Zoom", "16:9 Zoom up","14:9 Zoom","Stretch Zoom","Wide Zoom",
						"Zoom 2","Stretch Zoom","Beskyt den lokale match","Bod po bodu","Original","Panorama"];
var others			= ["Lydstyrke","Udsendelse","Adgangskode","Status","Gem","Udskift","Start","Luk","Søg","Slet",
						"Ingen","Automatisk","Scan","Sikkerhed","Tilslut","Genopfrisk","Retry","Stop","Indstillinger","Kanaler",
						"Rediger","Indsæt","Signal!","Afslut","Stereo","Audio","Kilde","Ingen lyd","Tips","Nulstil",
						"Kunde","Konfiguration","Gem","Bruger","Luk tastatur","Sikkerhedstilstand","Hver dag","PVR-liste"];
var direction		= ["Venstre","Højre","Op","Ned"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Ukendt"];
var soundChannels   = ["Ukendt","Mono","Sub","Dual mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2KAN.","Surround","3.0 kanal","4.0 kanal","5.0 kanal","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3,1 kanal","4,1 kanal","5.1KAN.","7.1KAN.","Fælles stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Venstre","Højre","Andre"];
var prompts			= ["Juster billedindstillingen, til den der passer bedst til dit visningsmiljø.",
						"Juster lysstyrkeniveauerne. Jo tætte de er på 100, jo lysere er de.",
						"Juster kontrastniveauerne. Jo tættere de er på 100, jo større bliver billedets mørke-lyse forskelle.",
						"Juster mætningsniveauerne. Jo tættere de er på 100, jo stærkere bliver farven.",
						"Juster skarphedsniveuerne. Jo tættere de er på 100, jo tydeligere bliver detaljerne.",
						"Juster baggrundslysets niveauer. Jo tættere de er på 100, jo lysere bliver skærmen.",
						"Juster farveniveauerne. Denne indstilling ændrer farvetonerne.",
						"Vælg det format der passer bedst til det program, der vises.",
						"Angiv strømspareindstillinger.",
						"Juster skærmens geometriske indstillinger, når du tilslutter en PC-enhed.",
						"Angiv flere avancerede billedindstillinger.",
						"Sæt alle billedindstillinger tilbage til standardindstillingerne.",
						"Vælg dit foretrukne lydmodus.",
						"Justér lydbalancen mellem venstre og højre kanal.",
						"Sound Retrieval System TruSurround HD giver en fyldig lydkvalitet og klarhed ved lave og høje frekvenser.",
						"Digital Interface Format forbinder tv'ets lydudgang til hjemmebiograf lydudstyr.",
						"Vælg dit foretrukne sprog.",
						"Giver svagtseende mulighed for at nyde tv-programmer.",
						"Test dit tv-billede, lyd og signal.",
						"Vælg den kanallistetype, der passer til tv-signalet.",
						"Vælg sprog for programmets undertekster, der vises nederst på skærmen.",
						"Se den aktuelle kanals tekst og billeder.",
						"Digital Living Network Alliance. Nyd musik, fotos og videoer via dit hjemmenetværk fra andre enheder, såsom en pc.",
						"Vis din smartphone's indhol på tv'et, og brug din smartphone som en fjernbetjening til dit tv.",
						"Vis indhold fra en Miracast-kompatibel Android-enhed på din tv-skærm.",
						"Sæt en lås på dit tv.",
						"Giv din enhed et navn.",
						"Definér omgivelserne.",
						"Sæt alle systemindstillinger tilbage til standardindstillingerne."];
var initialTitle	= ["Velkommen","Indledende installation"];
var initialPrompt	= ["Foretag din første opsætning nu, og en verden af spændene oplevelser venter på dig!",
						"Vælg dit sprog:",
						"Angiv dit land:",
						"Vælg venligst Deres sted:",
						"Angiv tilslutningstypen for dit netværk:",
						"Angiv kabeltilslutningsmodus for dit netværk:",
						"Kunne ikke oprette forbindelse til xxxxxxxxx! Du bedes tilslutte enheden i henhold til følgende diagram elller vælg Left (venstre) for at nulstille.",
						"Forbundet til xxxxxxxxx! Du bedes vælge Right (højre) for at fortsætte.",
						"1)Dit tv har muligvis allerede en indbygget trådløs adapter\n 2) Eller, hvis en trådløs USB-adapter er tilvejebragt, skal du slutte den til dit tv.  Derefter skal du vælge det trådløse netværks tilslutningstilstand",
						"Scanner. Vent venligst...",
						"Der er ingen trådløs enhed tilsluttet til TV!",
						"Sørg for at den følgende PIN kode er installeret til AP før du klikker på knappen \"Næste\" herunder.",
						"Du bedes trykke på trykknappen på AP inden for 120 sekunder før du trykker på Right (højre)!",
						"WPS (Wi-Fi Protected Setup)",
						"PIN-kode(Personligt identifikationsnummer)",
						"PBC (Trykknap konfiguration)",
						"Der kan kun opnås adgang til følgende indhold med en netværksforbindelse. ønsker du at springe netværksopsætning over?",
						"Der er nye softwareopdateringer, som du kan downloade, og dette kan tage et stykke tid, afhængigt af dit netværkstatus.",
						"Opdatér dit tv's software for at få glæde af de nyeste funktioner og tjenester.",
						"Du vil gå glip af de seneste funktioner og services. Ønsker du at springe softwareopdateringen over?",
						"Tryk på den højre knap for at fortsætte.",
						"Du må ikke slukke under opdateringen, da dette kan forårsage at tv'et svigter.",
						"Hvis du ikke vil opdatere, skal du vælge NO (neJ).",
						"Opdaterer, vent venligst",
						"Du kan også opdatere softwaren i SYSTEM/SOFTWAREOPDATERING.",
						"Det valgte land anmoder om indstilling af adgangskode.\nIndstil venligst koden for dit fjernsyn og bekræft.",
						"This code is too simple.\nPlease use different digits.",
						"Tillykke! Den første opsætning er gennemført. Du kan ændre din konfiguration via hovedmenuen og de relaterede undermenuer.",
						"Vælg venligst sikkerhedstilstand:",
						"Du bedes vælge det trådløse netværks forbindelsestilstand:",
						"Netværk"];
var initNetCabAndDonRe = ["Intet netværkskabel er forbundet, du bedes tilslutte et netværkskabel!","Der findes ingen indbygget trådløs adapter, eller nogen USB-adapter."];
var initChPrompt = ["Installation af tv-kanal","Du bedes vælge antennens scan-type.","Udfører automatisk indstilling...","Følgende antennekanaler blev fundet:","Vælg scanningstypen Kabel.","Du bedes vælge en operatør fra den følgende liste.","Konfigurér scanningsoplysningerne","Følgende kanaler af typen Kabel findes:","Vælg en operatør på denne liste","Vælg satellitter til scanning, eller redigér det valgte","Angiv satellitparametre","Følgende kanaler blev fundet, og kanalscanningen kan også udføres igen i Kanal/Kanalscan"];
var initClockPrompt = ["Få netværkets tilvejebragte tid!",
						"Du bedes indstille dato og tid:"];
var initialOptions	= ["Miljø","Netværksopsætning","Softwareopdatering","Kanalopsætning","Klokke"];
var initialHotkeys	= ["Tilbage","Vælg","Næste"];
var initLocations	= ["Hjem","Butik","Shop med demo"];
var initNets		= ["Kablet","Trådløs","Jeg har ikke nogen netværksforbindelse"];
var initWireManuals	= ["IP-adresse","Subnet mask","Standard gateway","Primær DNS","Sekundær DNS"];
var initSoftUpdates = ["Opdatér nu","Opdatér senere"];
var initChannelIns	= ["Fortsæt","Jeg ønsker ikke at installere kanalerne"];
var initChScanTypes	= ["Digital & Analog","Digital","Analogue","Jeg vil ikke udføre scanning"];
var initChDvbts		= ["Antenne ATV-kanaler:","Antenne DTV-kanaler:"];
var initChDvbcs		= ["Kabel ATV-kanaler:","Kabel DTV-kanaler:"];
var initChDvbss		= ["Satellitkanaler:"];
var initChDvbSOther	= ["Jeg vil ikke udføre satellitscanning"];
var initEndConnectedStatus= ["Afbrudt","WiFi tilsluttet","Tilsluttet med kabel"];
var initEndInstallations= "XXXX kanaler installeret";
var initEndUpdate	= ["Opdateret"];

var audioScenes 	= ["Skrivebord","Vægmonteret"];			
var screenSavers	= ["Ingen programoplysninger nu, du bedes først søge kanaler!",
						"Ikke noget signal!",
						"Kodet",
						"Kun data",
						"Lydprogram",
						"Ingen lyd og video",
						"Ikke tilgængelig",
						"Ingen tekst-TV",
						"Ingen programdata.",
						"Program låst!",
						"Program låst!\nTryk på OK, og indtast koden.",
						"Ingen programoplysninger",
						"Programmet er skadefuldt for mindreårige.\nTryk på OK og indtast din kode.",
						"Kanal låst!",
						"Kanal låst!\nTryk på OK, og indtast koden.",
						"Indgang låst!\nTryk på OK, og indtast koden.",
						"Ingen støtte!",
						"Denne tjeneste er ikke tilgængelig på nuværende tidspunkt",
						"Input låst!",
						"Ingen programtitel.",
						"Ingen funktion"
						];
var chBookingPromt	= ["Den aktuelle kanal har en planlagt optagelse, Tv'et vil starte optagelsen.",
						"Der findes en planlagt optagelse.\n Skift til XXXX for at optage",
						"Den aktuelle kanal har en påmindelse.",
						"En planlagt påmindelse findes.\n Skift til XXXX"];
var timeUnit		= ["Sek.","min"];
var ciPromt			= ["Netværkets data er blevet ændret. For at opdatere kan du udføre en opdateringsscanning. ",];
var othersPromt		= ["Vent venligst...",];
var menuOptions		= ["Billede","Lyd","Kanal","Netværk","System"];
var optionOptions	= ["Billedtilstand","Forudindstillet lyd","Hold","T-Link","tidsskift","PVR","Programliste","Indstillinger"];
var optionTLinkPromt= [["Automatisk tænding","Auto standby","Guide menu"],
						["Tænd","Standby","Forstærkervolumen"]];
var powerPromt		= ["TV'et slukker snart! Tryk på en knap for at annullere."];
var ttxLanguage		= ["VEST EUR","ØST EUR","Russisk","Arabisk/hebræisk","Farsi","Arabisk","Witrussisch","Græsk","Tyrkisk"];
var ttxOptions		= ["Vis","Nav. i undersider","Sprog","Alarmside","Nyflamsk"];
var weekday         = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","lørdag"];
var lcnConfflict	= "Der er problemer med modtagelsen af dette program. Der er en ny version tilgængelig på kanalen %d.";
var inShopMode		= "Dit TV er i fabrikstilstand. For hjemmetilstand, skal du vælge 'System' og ændre 'Location' (placering) i menuen.";
var nitRefresh		= "Netværksdata ændret. Vil du udføre en opdateringsscanning?";
var picHDMIMode     = ["Auto","Grafik","Video"];

var glassRemind    	= ["Du bedes linjeparre dine 3D-briller med dit tv\n(Hold POWER-tasten nede på dine 3D-briller).","Dine 3D-briller er forbundet til fjernsynet ",""];
var pvrRemind 		= ["Du må ikke trække USB-enheden ud eller afbryde strømmen"];
var pvrConName   	= ["PVR","Programoplysninger:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Optaget video er gemt i \"pvr\" mappen."],"Stop","Optage","time","Minut","Varighed","Tips","Brug piletasterne til at indstille optagelsens varighed."];
var pvrDisRemind 	= "Indsæt USB-stick til optagelse.";
var pvrRemindWords  = ["Ønsker du af afslutte?",
							"Ønsker du at stoppe optagelsen og browse de optagede filer?",
							"Disk udtaget.",
							"Der er ikke nok fri plads.",
							"Ingen optagede filer. Start optagelsen.",
							"PVR kan ikke starte på en forvrænget kanal.",
							"Ikke tilgængelig",
							"Er blevet gemt.",
							"Vil du standse optagelsen og ændre input-kilde?",
							"Tv'et vil afslutte den aktuelle optagelse. Ønsker du at afslutte?",
							"PVR-optagelsen skal have et tv-signal for at fungere korrekt, du bedes tjekke dit signal."];
var pvrChangeCh 	= ["Ønsker du at skifte kanal?",
							"Vil du standse optagelsen og ændre kanal?"];
var pvrChangeToPIN8	= ["Ønsker du at ændre kilden til den enhed der er forbundet til SCART-indgangen?",
				    		"Ønsker du at stoppe optagelsensprocessen og ændre kilden til den anordning, der er forbundet til SCART-indgangen?"];
var pvrChangeToCEC  = ["Ønsker du at ændre kilden til den enhed der er forbundet til en HDMI-indgang?",
				  			 "Ønsker du at stoppe optagelsenprocessen og ændre kilden til den anordning, der er forbundet til en HDMI-indgang?"];
var pvrGuideJump    = ["Ønsker du at gå ind i EPG?",
							"Vil du standse optagelsen og gå til EPG?"];
var pvrMediaJump    = ["Ønsker du at gå ind i medier?",
							"Vil du standse optagelsen og gå til Media?"];
var timeshiftExtra	= ["Vil du standse tidsomstillingen,skift kanal?",
						"Ønsker du at stoppe tidsforskydningen, og ændre kilden til den enhed der er forbundet til SCART-indgangen?",
						"Ønsker du at stoppe tidsforskydningen, og ændre kilden til den enhed der er forbundet til en HDMI-indgang?",
						"Tidsskifte kan ikke starte på en forvrænget kanal.",
						"Ønsker du at stoppe tidsforskydningen og gå ind i EPG?",
						"Vil du standse tidsomstillingen, og skifte TV til USB?",
						"Vil du standse tidsomstillingen,skift input kilde?",
						"Indsæt USB-stick til optagelse.",
						"Disken er ikke stor nok.",
						"Tv'et vil afslutte den aktuelle tidsforskydning. Ønsker du at afslutte?"];
var timeshiftStatus	= ["Hurtigt tilbage","Stop","Afspil","Pause","Hurtigt frem"];
var pvrPowerOffRemind= ["Standby optagelse","Standby","Tv'et optager nu, ønsker du at fortsætte med at optage når tv'et er i standby-tilstand?"];
var timeshiftInitTitle= "Disk oprettelse";
var timeshiftInitReminds= ["Denne wizard bruges til oprettelse af USB disken til tidsomstilling. Vælg oprettelsesindstilling.",
						 "For bedre præstation anbefaler vi at du formatterer USB disken. Det vil slette alle data.",
						 "Vælg fil størrelse til tidsomstilling.",
						 "Formatterer",
						 "Der er ikke nok fri plads.",
						 "Opretter tidsomstillingsfil",
						 "Hastighedstest",
						 "Disk hastigheden er for langsom(<%f MB/sek) til at oprette tidsomstillings-mulighed!",
						 "Disken er klar til tidsomstilling. Men vi anbefaler ændring af disk (hastighed >%fMB/sek) for bedre præstation.",
						 "Disken er klar til tidsomstilling. "];
var timeshiftInitButtons= ["Formater","Spring over","Annuller","Ok","Afslut","Luk"];
var timeshiftInitOther=["Disk hast.","MB/sek."];

var selectChoice	= "Er du sikker?";
var chAtvStore		= "Gem som XXXX";
var chEpgFirstGenreUK= ["Biograf","Nyheder/aktualitet","UNDERHOLDNING","Sport","Børn","Uddannelse","Livsstil","Drama"];
var homePageTitleList = ["PROGRAMMER","TV","VIDEOER","Hjemmeside"];
var homePageFavAndAllName  = ["Foretrukne programmer","Alle programmer"];
var homePageBackUp = ["E-Manual","Håndbog om"];
var homePageRemind   = ["Alle funktioner er kun tilgængelige efter netværket er forbundet.","Dit tv har endnu ingen kanaler. Programmer er tilgængelige efter kanal scanning.","Intet program","Søge kanaler nu?"];
var homePageHistory = ["Historie"];
var miracastTitle = ["WiFi TV link","TCL-enhed"];
var miracastRemind=["WiFi tv-link gør det muligt trådløst (dvs. uden brug af kabler) at dele skærmbillede og lyd fra din enhed, f.eks. smartphone eller tablet, på dit TV. På denne måde kan du samtidig med, at noget vises på din smartphone eller tablet, se samme skærmbillede på dit TV. Du kan f.eks. starte afspilning af en video på din smartphone og vise den samtidig på dit TV, eller bruge din tablet som spil-controller og vise indholdet på den store skærm på TV'et.","WiFi TV-link på TV’et er klart. Begynd at dele din udstyrsskærm med TV’et nu.","Opretter forbindelse. Vent venligst!","Tilslutning mislykkedes!","Det lykkedes ikke at oprette forbindelse. Du bedes tjekke!"];
var homePageLittleWin = ["Indstillinger","Medie","Ynglingskanaler","Smart TV","EPG"];

var hbbtvStopRemind  = ["Ønsker du at stoppe afspilningen?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Tryk på OPTION (Funktioner) for yderligere oplysninger";
var emptyListInfo = "Intet udstyr er tilsluttet til TV!";
var optionVideoListArray_1 = ["Billedtilstand", "Forudindstillet lyd", "Afspilningstilstand", "Skærmtilstand", "3D tilstand", 
							  "V-H knap", "Dybde af felt", "Undertekst", "Lydspor", "Titel", "Kapitel", "Info"];
var optionVideoListArray_2 = ["Billedtilstand", "Forudindstillet lyd", "Afspilningstilstand", "Skærmtilstand", 
							  "Undertekst", "Lydspor", "Titel", "Kapitel", "Info"];
var bottomTipsText = ["Spil/Pause", "Hurtigt tilbage", "Hurtigt frem", "Playliste", "Indstillinger"];
var picturePresetArray = ["Standard", "Dynamic", "Naturlig", "Biograf", "Bruger"];
var videoPlayModeArray = ["Gentag alle", "Gentag en", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Wide Zoom", "Zoom 2", "Stretch Zoom", "Stretch Zoom", "Automatisk"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 Zoom", "16:9 Zoom", "16:9 Zoom up", "Automatisk"];
var Mode3DArray = ["Fra", "2D-til-3D", "Side-om-side", "Top og bund", "Linje indfletning"];
var videoOptionListArray = ["Fra", "Nummer", "Undertekst", "Titel", "Kapitel"];
var subMenuTitleText = "Undertekst";
var langMenuTitleText = "Lydsprog";
var titleMenuTitleText = "Titel";
var mode3DMenuTitleText = "3D tilstand";
var langInfoText = "Nummer";
var STOP_RESUME_INFO = "Stop-Fortsæt";
var playListName = "navn";
var eb_tips = "Tips";
var ok_button = "Ok";
var eb_info = ["Lydafkodningsfejl.", "Videoafkodningsfejl.", "Lydformat er ikke understøttet.", 
			   "Videoformat ej understøttet.", "Kan ikke åbne denne fil.", "Afspilningsfejl, prøv venligst igen.",
			   "Filformatet understøttes ikke.", "Ups! Afspilleren er holdt op med at fungere.",
			   "Filstien findes ikke eller er ugyldig.\n Genindsæt lagerenheden og prøv igen.",
			   "Fortsætte afspilningen fra det forrige\n afspilningsstatus?"];
var frameTitleText = "Ny enhed";
var eb_quit_info = "Er du sikker på du vil afslutte?";
var eb_yes = "JA";
var eb_no = "NEJ";
var offinfo = "Fra";
var naInfo = "Ugyldig";
var consoleInfoArray = ["Hurtigt tilbage", "Hurtigt frem", "Spil/Pause", "Playliste"];
var cantOperateText = ["Funktionen understøttes ikke."];
var chapterChangeInfo = "Kun kapitler fra 1 til XXXX er tilgængelige.";
var metaDataArray = ["Titel/udgave Metadata: ", "Kapitel Metadata: ", "Lyd Metadata:", "Undertekst Metadata: "];
var metaTitleInfo = "Titel";
var metaChapterInfo = "Kapitel";
var videoLoadingInfo = "Analyserer...";
var listLoadingInfo = "Indlæser...";
var pgInfo = "Lav normering:";
var fileNameText = "navn";
var fileDateText = "Dato";
var fileSizeText = "Størrelse";
var fileDurationText = "Varighed";
var fileDirectorText = "Instruktør";
var fileCopyrightText = "Copyright";
var fileArtistText = "Kunstner";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "År";
var fileGenreText = "Genre";
var mainListArray = ["Alt", "Billede", "Video", "Musik"];
var sortArray = ["navn", "Dato"];
var parserArray = ["Normal", "Rekursiv"];
var emptyTipsInfo = "Ups. Der findes ingen understøttet fil.";
var emptyFolderInfo = "Ups. Der findes ingen understøttet fil.";
var sortName = "Sorter efter";
var parserName = "Analyser";
var divx_str1 = "DivX(R) registrering";
var divx_str2 = "DivX(R) framelding";
var infor_str = "Info";
var quickMenuEmptyText = "Ingen tilgængelige funktioner.";

var musicSoundPresetArray = ["Standard", "Biograf", "Musik", "Klar stemme", "Bruger"];
var musicInformationArray = ["navn", "Kunstner", "Album", "Genre:", "År:", "Varighed:"];
var playListName = "navn";
var playTipsInfo = ["Du afspiller den første fil.", "Du afspiller den sidste fil."]
var musicNameInfo = "Name";
var musicArtistInfo = "Kunstner";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Forudindstillet lyd";
var optionBGMInfo = "Afspil i baggrunden";
var optionAudioOnlyInfo = "Kun lyd";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX er forbundet til dit tv!";
var tvRemoteTitle		= "TCL nScreen";
var tvRemoteDeveloper	= "Applikationen er udviklet af TCL";
var tvRemoteDeviceTitle	= "Enhedsnavn:";
var remoteOption		= ["Mediedeling","Fjernbetjening","Hjælp","Om","Smart Connect"];
var remotebottom		= " Du bedes downloade \"TCL nScreen\" til din smartphone ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Deling af fotos, videoer og musik med dit tv via telefonen.",
							"Trin: \n   1. Klik på \"TCL nScreen\" på telefonen. Forbind telefonen med dit tv via det samme WiFi-netværk;\n   2. Klik på \"Media Sharing\" for at browse mediefiler;\n   3. Send medier til tv'et for at afspille (med en af de følgende muligheder)",
							"      a) Træk & Slip mapper/filer til TV-ikonet i toppen af skærmen\n      b) Sving telefonen mod TV'et for at sende første fil;\n     c) Afspil mediet på telefonen og klik på TV-delings-ikonet; ",
							"   4. Under afspilning på TV'et kan du ryste telefonen for at afspille forrige eller næste fil."];
var controlReminds		= ["Brug telefonen til fjernbetjening af TV'et.",
							" ",
							"Trin: \n   1. Klik på \"TCL nScreen\" på telefonen. Forbind telefonen med tv'et va det samme WiFi-netværk;\n   2. Klik på \"Remote Control\" for at betjene tv'et."];
var helpDeviceWords		= "Flerskærmsinteraktion";
var helpBottom			= "I cloud-teknologiens tidsalder er smartenheder som telefon og TV gensidigt forbundet. Du kan dele media med din familie på flere skærme og styre TV'et via telefonen! ";
var helpReminds			= ["Forberedelser\n   1. Download og installer \"TCL nScreen\" fra Google Play eller Apple Store.\n   2. Forbind telefonen med dit tv via det samme WiFi-netværk.",
							" ",
							"Anbefalinger for telefon\n   1. CPU: over 800 MHz\n   2. Lagerkapacitet: mindst 80 MB fri plads",
							" ",
							"Ansvarsfraskrivelse\n   Hvis \"TCL nScreen\" ikke findes på din telefon, bedes du kontakte telefonproducenten. "];
var helpButtons			= ["Tidligere","Næste"];
var aboutReminds		= ["TCL nScreen","Applikationen er udviklet af TCL"];
var aboutExit			= "Luk";
var smartReminds		= ["Hurtig og smart forbindelse med dit tv og telefon.",
							" ",
							"Trin \n   1. Forbind dit tv og smartphone til den samme LAN. Klik på \"TCL nScreen\" på din smartphone.\n   2. Klik på \"Smart Connect\" for at scanne QR-koden.\n   3. Med dit tv i udsendelsestilstand, tryk på INFO-tasten på tv'ets fjernbetjening i 4 sekunder, en fuld skærm QR-kode vil poppe op.",];
var smartQRReminds		= ["Du sbedes klikke på Smart Connect på tv'ets fjernbetjening på din telefon og scanne QR-koden for hurtigt at forbinde tv'et og telefonen.",
							"QR-koden indeholder  LAN kontooplysninger. Du bedes opbevare dem på et sikkert sted."];
							

var consoleTipArray = ["Tidligere","Næste","Konsol","Playliste"];							
var optionInfoArray = ["Billedtilstand","Afspilningstilstand","Varighed","Effekt","Info"];

var playModeArray = ["Normal","Bland","Gentag"];
var durationArray = ["Kort (5 sekunder)", "Medium (10 sekunder)", "Lang (15 sekunder)"];
var effectArray = ["Ingen", "Opløs", "Træk mod højre", "Træk mod vst.", "Træk op", "Træk ned", "Boks ind", "Boks ud", "Tilfældig"];
var infoArray = ["Navn:","Størrelse:","Dato:","Placering"];

var picturePresetBarTitleInfo = "Billedtilstand";
var picturePresetBarArray = ["Standard","Dynamic","Studie","Biograf","Bruger"];
var upTipsInfo = "Flyt billede"; //add yums 2014-10-10
var consoleTipsArray = ["Konsol","Tidligere","Næste","Playliste","Indstillinger"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Tryk på RIGHT (højre) igen for at afspille det næste billede","Tryk på LEFT (venstre) igen for at afspille det forrige billede","Tryk på DOWN (ned) igen for at vise playlisten"]; //add yums 2014-10-10

var optionPvrListArray = ["Billedtilstand","Forudindstillet lyd", "Skærmtilstand", "3D tilstand", "Undertekst", "Lydspor", "Info"];							
	
var titleSpanFirstArray = ["Kontrol & forbindelse","Grundlæggende funktioner","PROGRAMMER","TV","Indstillinger","FAQ"];
var titleSpanSecondArray = [["Fjernbetjening","Paneltaster","Nem navigation","Tv-forbindelse","Tv-forbindelse","Tv-forbindelse","Trådløs"],["Startfil","Statuslinje","Kilde"],["Afspilning af programmer","Medie","TCL nScreen"],["Juster kanal og lydstyrke","Kanalliste","EPG","Kanaler","Foretrukne kanalerr"],["Billedjustering","Lydjustering","Kanaljustering","Softwareopdatering","Sprog","Forældrekontrol"],["Ofte stillede spørgsmål","Ofte stillede spørgsmål","Fejlfinding","Fejlfinding","Vilkår og betingelser"]];
var contentSpan1_1Array = [["LISTE:","INFO:","MENU:","STRØM:","KILDE:","GUIDE:","SMART TV:"],["Viser kanallisten","Viser programoplysninger","Går til hjemmesiden","Tænder strømmen eller standby-tilstand","Vælg indgangskilden","Viser oplysninger om EPG (Elektronisk programvejledning) ","Går til Smart TV-siden"]];
var contentSpan1_2Array = ["Forrige kanal","Næste kanal","Drej lydstyrken op","Drej lydstyrken ned","Går til hjemmesiden","Bekræft funktionen","Standby / Opstart"];
var contentSpan1_3Array = ["OK/Vejledning","Kanal op","Kanal ned","Lydstyrke ned","Lydstyrke op","Tilgængelige som piletaster i nogle funktioner."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapter","LAN","Smartphone","PC/Set-top-boks/DVD","Lydforstærker","Lydforstærker/skærm","Dit tv omfatter muligvis ikke alle stikkontakter."];
var contentSpan1_5Array = ["USB 2,0","USB 3,0","Hovedtelefoner","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB-enheder","USB-enheder","Hovedtelefoner","DVC/Spillekonsol/Set-top-boks/DVD","Lydforstærker","DVC/Spillekonsol/Set-top-boks/DVD","Dit tv omfatter muligvis ikke alle stikkontakter."];
var contentSpan1_6Array = ["Fælles interface","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA-kort","SD-kort","Pc","Set-top-boks/DVD","Antenne/kabel/Satellit","Dit tv omfatter muligvis ikke alle stikkontakter."];
var contentSpan1_7Array = ["Tablet","Pc","Router","Telefon","TV"];

var contentSpan2Array = [["Tryk på piletasterne for at se hjemmesiden.","Tryk derefter på OK for at se en af de detaljerede programmer eller for at gå ind i programmet."],["Vis dato, netværk og enheder osv. i øverste højre hjørne af skærmen."],["Vælg indgangskilden fra de enheder der er forbundet til tv'et via forskellige porte, såsom TV, AV, HDMI osv."]];

var contentSpan3Array = ["Nyd og se dine foretrukne programmer via Smart TV-siden","Se fotos, videoer og afspil musik fra en USB-lagerenhed.","Forbind dit tv og smartphone eller tablet til samme LAN","Klik på TCL n skærmen eller Tv'ets fjernbetjening på din smartphone eller tablet","Del fotos, videoer og musik på multi-skærme med din familie, og styr dit tv via din smartphone"];

var contentSpan4Array = [["Tryk på UP/DOWN (op/ned) for at skifte kanaler","Tryk på LEFT/RIGHT (venstre/højre) for at justere lydstyrken"],["Tryk på LIST på fjernbetjeningen for at se kanalernes opstilling","Tryk på UP/DOWN (op/ned) for at vælge din kanal"],["EPG er en vejledning på skærmen, der viser planlagte tv-programmer. Du kan navigere, vælge, se og optage programmer."],["Søg og installer kanaler"],["Tilføj eller rediger dine foretrukne kanaler på Kanallisten"]];

var contentSpan5Array = ["Nyt dine foretrukne programmer via videoprogrammerne"];

var contentSpan6Array = [["Tryk på MENU for at vise systemets indstillingsmuligheder","Gå ind i Billedindstillinger for at justere værdierne"],["Tryk på MENU for at vise systemets indstillingsmuligheder","Gå ind i Lydindstillinger for at indstille valgmulighederne"],["Tryk på MENU for at vise systemets indstillingsmuligheder","Gå ind i Kanalindstillingerne for at indstille valgmulighederne"],["Opdater dit tv når en ny softwareversion er tilgængelig"],["Du kan vælge dit foretrukne menusprog"],["Giver forældre mulighed for at låse de kanaler eller programmer, der er uegnede for børn"]];

var contentSpan7_1Array = [["Intet billede, ingen lyd","Tjek om sikringen eller afbryderen fungerer.","Sæt en anden elektrisk enhed ind i stikkontakten for at sørge for, at den fungerer eller er blevet tændt.","Stikket har en dårlig kontakt med stikkontakten","Kontroller signalkilden."],["Normalt billede, ingen lyd","Tryk på knappen lydstyrke op for at øge lydstyrken.","Lydindstillingen er forkert.","Signalfejl fra udsendelsen."],["Normal lyd, intet billede","Juster lysstyrken og kontrasten","Signalfejl fra udsendelsen.","Kontroller om den kun er i lyd-tilstand."]];
var contentSpan7_2Array = [["Radiofrekvens interferens","Denne interferens producerer bevægelige ringe eller diagonale striber, og i nogle tilfælde, tab af kontrast i billederne. Find og fjern radiointeferenskilden."],["Ingen farve","Juster farveindstillingerne.","Prøv en anden kanal. Et sort og hvidt program kan modtages."],["Fjernbetjeningen virker ikke","Udskift batterierne.","Batteriene er ikke installeret korrekt. Strømmen til tv'et er ikke tilsluttet."]];
var contentSpan7_3Array = [["USB-enhedens indhold vises ikke","Kontroller om USB-lagerenheden er kompatibel med tv'et.","Kontroller om lyden og billedets filformat understøttes af tv'et."],["Afspilles uden lyd","Videoen lydformat er ikke understøttet af tv'et afspiller."],["Filerne bliver ikke afspillet problemfrit","USB-lagerenhedens overførselsevne kan begrænse overførselshastigheden til tv'et."]];
var contentSpan7_4Array = [["Hvad du skal være opmærksom på, når du opdaterer software","Ingen strømafbrydelser når du opdaterer software.","Undgå at foretage nogen funktioner med fjernbetjeningen når du opdaterer software.","Vær tålmodig, fordi processen med opdatering af software kan tage lidt længere tid."],["Der er ingen bemærkelsesværdige ændringer i tv-grænsefladen efter opdatering af software.","I særlige tilfælde, kan SW opdateringen muligvis kun opdatere eller tilføje nye funktioner, med også forbedre tv'ets effektivitet uden tydelige ændringer af grænsefladen. Derudover kan tv'ets grænseflade nogen gange forblive intakt."]];
var termsTitle = "Vilkår og betingelser";
var termsConditions = ["(Lovbefalet erklæring) fra TCL - producent af dette tv-apparat. ","På grund af de forskellige funktioner for produkter der har SmartTV - tjenester, såvel som begrænsninger i det tilgængelige indhold, er visse funktioner, applikationer og tjenester muligvis ikke tilgængelige på alle enheder eller i alle områder. Visse funktioner på SmartTV kan også kræve ekstra periferiske enheder eller medlemsgebyrer, som sælges separat. Besøg venligst vores websted for yderligere oplysninger om specifikke enhedsoplysninger og tilgængelighed af indhold. Tjenesterne og tilgængeligheden af indholdet via SmartTV kan ændres når som helst, uden forudgående varsel. \n   Alt indhold og tilgængelige tjenester via denne enhed, tilhører tredjeparter og er beskyttet af love om ophavsret, patenter, varemærker og/eller anden intellektuel ejendomsret. Sådant indhold og tjenester leveres kun til dit personlige ikke-kommercielle brug. Du må ikke bruge noget indhold eller tjenester på en måde som ikke er autoriseret af ejeren af indholdet eller serviceudbyderen. Uden begrænsning af det føromtalte, med mindre det udtrykkeligt godkendes af ejeren af det relevante indhold eller serviceudbyderen, må du ikke ændre, kopiere, genudsende, uploade, poste, sende, oversætte, sælge, lave afledende arbejde, udnytte eller på nogen måde distribuere indhold eller tjenester der vises via denne enhed. \n   DU ANERKENDER OG ACCEPTERER UDTRYKKELIGT, AT BRUG AF DENNE ENHED SKER PÅ EGEN RISIKO, OG AT HELE RISIKOEN FOR TILFREDSSTILLENDE KVALITET, YDEEVNE OG NØJAGTIGHED PÅHVILER DIG. ENHEDEN OG ALT TREDJEPART INDHOLD OG TJENESTER LEVERES “SOM DE ER” UDEN NOGEN FORM FOR GARANTI, HVERKEN UDTRYKKELIG ELLER UNDERFORSTÅET. TCL FRASKRIVER SIG UDTRYKKELIGT ALLE GARANTIER OG FORHOLD MED HENSYN TIL ENHEDEN OG ALT INDHOLD OG TJENESTER, ENTEN UDTRYKKELIG ELLER UNDERFORSTÅET, INKLUSIV MEN IKKE BEGRÆNSET TIL, GARANTI FOR SALGBARHED, TILFREDSTILLENDE KVALITET, EGNETHED TIL ET SPECIFIKT FORMÅL, FOR NØJAGTIGHED, FOR UFORSTYRRET BESIDDELSE OG AT INGEN KRÆNKELSE AF TREDJEPARTS RETTIGHEDER FINDER STED. TCL GARANTERER IKKE NØJAGTIGHED, GYLDIGHED, BETIMELIGHED, LOVLIGHED ELLER FULDENDTHED AF NOGET INDHOLD ELLER TJENESTER, DER GØRES TILGÆNGELIGE VIA DENNE ENHED OG GARANTERER IKKE AT ENHEDEN, INDHOLDET ELLER TJENESTERNE LEVER OP TIL DINE BEHOV, ELLER AT ENHEDENS DRIFT ELLER TJENESTERNE SKER FEJLFRIT OG UDEN AFBRYDELSE. UNDER INGEN OMSTÆDIGHEDER, INKLUSIV UAGTSOMHED, ER TCL ANSVARLIG, HVAD ENTEN VIA KONTRAKT ELLER ERSTATNINGSFORPLIGTENDE RETSBRUD, FOR DIREKTE, INDIREKTE, UTILSIGTEDE, SPECIELLE ELLER FØLGESKADER, ADVOKATSALÆRER, UDGIFTER ELLER ANDEN SKADESERSTATNING DER OPSTÅR FRA, ELLER I FORBINDELSE MED, OPLYSNINGER DER FINDES I, ELLER SOM ET RESULTAT AF BRUG AF ENHEDEN, ELLER ANDET INDHOLD ELLER TJENESTER ANVENDT AF DIG ELLER TREDJEPART, SELV OM DU ADVARES MOD MULIGHEDEN FOR SÅDANNE SKADER. \n   Tjenester fra tredjepart kan ændres, indstilles, fjernes, afsluttes eller afbrydes, eller adgang kan blokeres når som helst uden varsel, og TCL (fabrikanten af fjernsyn af mærket Thomson) afgiver intet anbringende eller garanti for at indhold eller tjenester forbliver tilgængelige over en vis tidsperiode. Indhold og tjenester sendes af tredjeparter ved hjælp af netværk og overleveringsanlæg, som TCL ikke har kontrol over. Uden at begrænse generaliteten af denne ansvarsfraskrivelse, fraskriver TCL udtrykkeligt ethvert ansvar for ændringer, afbrydelse, deaktivering, fjernelse eller indstilling af ethvert indhold eller service, som gøres tilgængelig via denne enhed. TCL kan pålægge grænser for brug eller for adgang til visse tjenester eller indhold, i alle tilfælde uden varsel eller ansvarspådragelse. TCL er hverken ansvarlig eller hæfter for kundeservice relateret til indholdet og tjenesterne. Ethvert spørgsmål eller anmodning om service med hensyn til indhold eller tjenester skal sendes direkte til de respektive udbydere af indhold og tjenester."];

var noChannelListRemind        = ["Ikke fundet nogen kanaler. Kanallisten er tilgængelig efter kanal scanning.","Kanalscanning"];
var closeSubtitleRemind   = "Funktionen vil være tilgængelig, når undertekster er slået fra. Ønsker du at indstille nu?";

var estickerTitles = ["Meget realistiske billeder","Levende farver","Meget livagtig bevægelse","Dynamisk billedkvalitet","SR UHD upskalering","Oplev en 3D-verden","Hurtigere ydeevne","Fremtidigt 4K-indhold","Nyd online-verdenen","Få adgang til ekstra indhold","Integrerede digitale tunere","Forbind alle enheder","Forskellige 4K-kilder","USB-indhold","Ultra hurtig WIFI","Mobilt indhold på dit tv","Indhold på mobile enheder","Lokalt indhold","Godkendt af DivX","Perfekt billede","Kanalen er klar","TDT Premium"];
var estickerDescriptions = ["Utrolig fremvisningsoplevelse takket være billeder med detaljer der er fire gange større på en Full HD på UHD-skærm","Bredt farveskale giver følelser i hver scene med levende røde og smaragdgrønne farver","4K indrammet interpolation og baggrundsbelysning til bekæmpelse af sløringsproblemer","Det originale billedes livlighed er forbedret for at producere et ægte dynamisk udtryk med en fantastisk kontrast","Nyd endnu skarpere tv-shows og Blu-Ray-diske takket være Super Resolution-teknologi","Oplev 3D-klart tv og se det forskellige 3D-indhold","Opleve mere behagelig underholdning med Quad Core for problemfri interaktion og forbedret ydeevne","HEVC (H.265) codec-støtte for kommende standard af 4K videodistribution","Et væld af online-programmer, VOD-tjenester, catch-up tv og internet web browsing","Se mere med yderligere tjenester og indhold fra dine foretrukne tv-stationer","Få adgang til tv-kanaler i high definition uden ekstra set-top-bokse","Let at tilslutte mange digitale kilder til rådighed derhjemme","Tv'et er klar til fremtiden, og det er i stand til at afspille 4K 50/60Hz via HDMI 2,0 med HDCP 2,2","Video- eller fotoindhold direkte fra USB-drev, HDD eller kamera på en storskærm i 4K-opløsning","Seneste generation af 2x2 MIMO og AC standard leverer uovertruffen adgang til internettets hastighed","Nyd fotos, videoer, programmer fra mobile enheder på en storskærm, takket være skærmens afspejlingsteknologi","Fotos, videoer, programmer fra en smartphone eller tablet kan vises på storskærm ","Vis lokalt indhold på storskærm, såsom fotos, videoer fra enheder der er forbundet til det lokale netværk","Afspil lejede eller egne film der er beskyttet af DivX","Ultra smal indfatning og super slankt design","Testet og godkendt af Canal+","Testet og godkendt af TDT Premium"];							

var eManualTextArray = ["E-Manual","Al grafik indeni er kun en repræsentation."];
var frontPanelRemind = "Frontpanel er låst.";
var eRPRemind		 = "Butikstilstand opfylder ikke ERP kravene. Er du sikker?";	
var noRelatedChannel = "Ingen relateret kanal";
var option0624Name          = ["BOP","BFS","Begivenhed efter begivenhed","GetUserID","BGM","Reset all","Nulstil butik","NRM","Valg af DVB-T2 og land","HbbTV-modus"];
var DVBT2AndChoice = ["Til","Efter land","Fra"];
var hbbtvServiceRemind = "HbbTV-service kommer snart.";
var insertWord = "Indsæt";		
var viewDetail = "Se detaljer";							

var remindOAD  = "Software opdatering. Nyt anbefalet software kan måske fås på en anden kanal.  Hvis du accepterer download skifter det måske kanal automatisk. Vil du gøre det lige nu?";

var LEDStatus = ["Blinker", "Normal"];
var netFlixRemind = "Denne handling afbryder din adgang til Netflix, indtil du logger ind igen.";
var ESNExplanation = "Elektronisk Serienummer";
var resetShopRemind = "Systemet nulstiller, sluk ikke dit TV";
var initialSelectOption = "Vælg en mulighed:";
var databaseRemind   = "Systemet har registreret, at databasen af ukendt årsag er blevet beskadiget, og har automatisk gendannet den. Tryk på OK for at fortsætte";
var Deactivation = "Log ud";
var oadFutureRemind = "Softwareopdatering. En ny anbefalet software er tilgængelig ved %s. Opdateringen kan tage lidt tid og skærmen kan gå i sort. Sluk ikke for modtageren under opdateringen. Hvis du accepterer denne opdatering, bedes du venligst efterlade modtageren tændt eller i standby tilstand på det planlagte tidspunkt. Ønsker du at modtage denne opdatering?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Lydudgang";
var bt_soundOutPutTV = "TV-højtalere";
var bt_soundOutPutBT = "Bluetooth-enhed";
var bt_soundOutPutBT_TV = "Bluetooth og tv";
var bt_refreshBarName = "Enheder";
var bt_settingTips_On = "Tænd Bluetooth-funktionen og scan enhederne. ";
var bt_settingTips_Finding = "Finder tilgængelige enheder…";
var bt_settingTips_NoDevice = "Ingen enhed tilgængelig.";
var bt_deviceList_State_NoConnect = "Ikke tilsluttet";
var bt_deviceList_State_Connecting = "Tilslutter...";
var bt_deviceList_State_Connected = "Tilsluttet";
var bt_deviceList_State_Paired = "Linjeparret";
var bt_deviceList_Conncect_Failed_Tips1 = "Forbindelsen mislykkedes.";
var bt_deviceList_Conncect_Failed_Tips2 = "Bekræft at XXX Bluetooth-funktionen er On (tændt)";
var bt_deviceList_Conncect_Success = "Forbundet til Bluetooth-enhed.";
var bt_deviceList_Disconncect_Success = "Koblet fra Bluetooth-enhed.";
var bt_deviceList_Disconnect = "Er du sikker på du vil koble fra XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Bluetooth-linjeparring";
var bt_bluetooth_Input_Pin = "Indtast PIN-koden:";
var bt_bluetooth_Output_Pin_Tip = "Indtast PIN-koden XXXX fra tastaturet.";
var bt_bluetooth_Pin_Wrong_Tip = "Forkert PIN-kode";
var bt_bluetooth_Remove_Pair_Title = "Forespørgsel";
var bt_bluetooth_Remove_Pair_Ask = "Vil du glemme denne enhed?";							
var bt_bluetooth_module_error = "Bluetooth-modul fejl!";
						
var netflixDialogOptions = ["OK","Senere","Vis aldrig dette igen"];
var netflixDialogContent = "Der er tusindvis af film at se hos Netflix, besøg Netflix nu?";
var netflixRemoteDialogContent = "Fjernbetjeningen med Netflix-knap kan købes nu. Besøg følgende hjemmeside for yderligere oplysninger.\nhttps://store.tcleu.com";
var applyPictureModeSwitchValue	 = ["Aktuel kilde","Alle kilder"];
var audioDescriptionName = ["Audiobeskrivelse","Højttaler","Højttalerlydstyrke","Hovedtelefoner","Hovedtelefonlydstyrke","AD volume","BT-enhed","Lydstyrke for BT-enhed"];
var audioDescriptionOptions = ["Fra","Normal","Audiobeskrivelse"];							
var volumeOffRemind = 'Indstil venligst XXX på ”On” i indstillingsmenuen.';	
var switchSourceRemind   = " er sat i. Vil du skifte den nu?";								

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sportstilstand";
var resetStadium = "Stadion";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Luk","0","Zoom+",
                       	   "Luk",
                       	   "Liste","0","Tekst","Guide","Enter","Luk","Menu","Undertekst","Info",
                       	   "Stop",
                       	   "Info","Menu","Luk"
                       	   ];
var nscreenTips = "GuideOn hjælper brugeren til at navigere gennem det omfattende indhold.";
var nscreenContent = 'Trin: 1.Klik på "TCL nScreen" på telefonen.  Forbind telefonen med TV’et via det samme LAN; 2.Klik på "GuideOn" for at gå ind i GuideOn; 3.GuideOn yder samme funktionalitet som en trykt programguide, da den oplyser brugeren om det tilgængelige indhold; ';
var singalBrokenoffTips = "Signalet afbrudt. Systemet kan ikke afslutte download.";
var contentSpan1_1Array_AU = [["STRØM:","KILDE:","MENU:","BACK:","INFO:","HOME:","EXIT:","LISTE:"],
                             ["Turns power on or standby mode","Select the input source",
                                "Show TV settings menu","Go back to the Previous menu or exit a running APP","Viser programoplysninger",
                             "Går til hjemmesiden","Go back to the Previous menu or exit a running APP","Viser kanallisten"]];
var guideDescriptionWords ="Scan QR-koden for at downloade app’en GuideOn til din telefon";
var settingNoticeSourceName ="Automatisk kilde";
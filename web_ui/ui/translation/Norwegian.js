
var all_country 	= ["Australia","Østerrike","Belgia","Bulgaria","Kroatisk","Tsjekkia","Danmark","Finland","Frankrike","Tyskland",
						"Hellas","Ungarn","Italia","Luxemburg","Nederland","Norge","Polen","Portugal","Romania","Russland",
						"Serbia","Slovenia","Spania","Sverige","Sveits","Storbritannia","New Zealand"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Latvia","Slovakia","Tyrkia","Irland","*","Filippinene","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kina","*","*","*","*","*","*","Andre","Litauen"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litauen"];						
				
var all_language 	= ["Tsjekkisk","*","Dansk","*","*","Tysk","Engelsk","Fransk","Gresk","Spansk",
						"Kroatisk","*","Italiensk","Ungarsk","Nederlandsk","Norsk","Polsk","Portugisisk","Russisk","Rumensk",
						"Slovensk","Serbisk","Finsk","Svensk","Bulgarsk","Slovakisk","*","*","Gælisk","*",
						"Walisisk","Arabisk","Irlandês","Latvian","*","Tyrkisk","Estonian","Nederlandsk"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Original lyd"/*Qaa*/,"Ikke definert"/*Undetermined*/,"*","Ukjent",
						"Ikke definert","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskisk","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Bielorusso","*","*","Katalansk","*","*",
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
						"*","*","*","*","*","Romantikk","*","*","*","*",
						"*","*","*","Samisk","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Tekst-tv ",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainian","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Av","På"];
var okCancel		= ["OK","Avbryt"];
var yesNo			= ["JA","NEI"];
var level			= ["Av","Lav","Høy","Midten"];
var manualAuto		= ["Manuell","Auto"];
var homeShop		= ["Hjem","Handle"];
var picPreset		= ["Standard","Dynamic","Naturlig","Kino","Digital kino","Bruker"];
var picColorTemp	= ["Kald","Normal","Varm","Varm2","Bruker"];
var pic3dNavig		= ["Manuell","Auto","Semi-auto"];
var _3dOptions		= ["3D-modus","3D-til-2D","Venstre/høyre-justering","Dybdeskarphet"];
var pic3DMode       = ["Av","2D-til-3D","Side-ved-side","Topp og bunn","Linjeflettet"];
var picEcoOptions	= ["Energisparing","Lyssensor","Lokal demping","Miks-dimming"];
var picGeoOptions	= ["Geometri","H. posisjon","V. posisjon","Klokke","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["R økning","G økning","B økning","R Offset","G Offset","B Offset"];
var souOptions		= ["Forh.inst. lyd","Balanse","Lydforsinkelse","SRS TSHD","Auto volumkontroll",
						"SPDIF-Type","SPDIF-forsinkelse","TV-plassering","Lydspråk","Lydkanal",
						"Lydbeskrivelse","Digital audio utgangstype","Dolby profesjonell innstilling"];
var soundOutputoptions =["TV-høyttaler DAP-utgang","Ekstern AVR kodingsutgang"];
var inteligenteqoptions 	=["Fokusert","Fyldig"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Av"];
var colorSpace      = ["Auto","Opprinnelig","Bruker","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Virtuell surround","Dialogforbedring","Bassforbedring","Intelligent lydstyrke","Mediainformasjon","Grafisk EQ","Intelligent EQ" ];
var chOptions		= ["Søk kanal","Kanalliste","EPG","Organiser","Kanaldiagnostikk",
						"lagring","Undertekst","Tekst-tv ","Kanallistetype"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalstyrke","Signalkvalitet","Frekvens (KHz)","Serice-ID","Nettverk-ID","Nettverknavn"];
var chScanOptions	= ["Land","Tunermodus","Automatisk søk","Oppdater søk","Analog manuellsøk",
						["Kabel manuell skann","Antenne man. skanning","Manuell tuning av satellitt"],"Satellittantenneoppsett","Velg favorittnettverk ","Tøm kanalliste",];
var favNetDes		= "Velg foretrukket nettverk";
var tuner			= ["Kabel","Antenne","Satellitt"];//Satelite 无翻译
var passError		= "Feil passord.\nPrøv igjen!";
var chType			= ["Analoge kanaler: ","Digitale kanaler: "];
var chScanStatus	= ["Status: Skanner","Status: Søket er fullført","Status: Avbryt søk","Status: Feil med søk"];
var chScanPara		= ["Frekvens (KHz)","Modulering","Symbolrate (Ksym/s)","Nettverk-ID","System",
						"Fininnstille","Signalstyrke","Signalkvalitet","Skannemodus","Kanal-ID"];
var chScanParaMHZ      = ["Frekvens (MHz)"];
var chAtvManSys		= ["VEST EUR","ØST EUR","UK","Frankrike"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Ønsker du å tømme kanallisten?";
var chDeletDes		= "Ønsker du å slette kanalen?";
var chOperator		= ["Ziggo","UPC","Andre"];
var chScanType		= ["Digital & Analog","Digital","Analog"];
var chScanMode		= ["Full","Avanser","Hurtig"];
var bookingModes	= ["Ta opp","Påminner"];
var dayName			= ["Sø","Ma","Ti","on","to","fr","lø"];
var monthName		= ["jan", "feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"];
var filter			= ["Filter","Type","Undertype"];
var chEpgFirstGenre	= ["Kino","News","Vis","Sportsspill","Barn","Musikk","Kunst","Sosial","Utdanning","Fritid","Spesiell"];
var chEpgSecondGenre= [["Drama","Detektiv","Eventyr","Science Fiction","Komedie","Såpe","Romantikk","Seriøs","Voksen film"," "," "," "],
						["Aktuelle forhold","Værvarsel","Nyhetsmagasin","Dokumentar","Diskusjon"," "," "," "," "," "," "," "],
						["Vis","Spillshow","Blandingsshow","Talk Show"," "," "," "," "," "," "," "," "],
						["Sportsspill","Spesielle innslag","Sportsmagasiner","Fotball","Tennis",
							"Teamsporter","Idrettsutøver","Motorsport","Vannsport","Vintersport",
							"Kunstrytter","Kampsport"],
						["Barn","Førskolebarns","Underholdning for 6 til 14","Underholdning for 10 til 16","Informasjon","Tegnefilmer"," "," "," "," "," "," "," "],
						["Musikk","Rock","Seriøs","Folkemusikk","Jazz","Musikal","Ballett"," "," "," "," "," "],
						["Kunst","Kunster","Fin kunst","Religion","Populær kultur",
							"Litteratur","Film","Eksperimentell","Kringkasting","New media",
							"Kunstmagasiner","Mote"],
						["Sosial","Magasiner","Økonomi","Spesielle personer"," "," "," "," "," "," "," "," "],
						["Utdanning","Natur","Teknologi","Medisin","Utland","Samfunnsvitenskap","Videreutdannelse","Språk"," "," "," "," "],
						["Fritidshobbyer","Turisme","Håndverk","Motor","Fitness og helse","Matlaging","Reklame","Hagestell"," "," "," "," "],
						["Opprinnelig språk","Svart-hvitt","Upublisert","Direktesending"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Hopp over kanal","Sortere kanaler","Redigere kanaler","Kanal slett","kanal bytteavtalen","kanal Sett inn"];
var chEditPara 		= ["Nettverknavn","Kanalnummer","Kanalnavn","Frekvens","Fargesystem","Lydsystem"];
var chSatTitles		= ["Satellittype","Satellittantenneoppsett","Velg satellitt"];
var chSatEidtOptions= ["Satelittnavn","Posisjon","LNB Makt","LNB-frekvens (MHz)","Diseqc-inngang",
						"Tone 22KHz","tone burst","Frekvens (KHz)","Symbolrate (Ksym/s)","Polarisering",
						"Signalstyrke","Signalkvalitet","Satellittstatus"];
var chSatAutoPromt	= [["Alle","Nettverk"],
						["Alle","Gratis"]];
var chSatAutoScanOptions=["Velg satellitt","Skannemodus","Kanaler"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universiell",];
var chSatDiSEqCInput= ["Utkoble","A","B","C","D"];
var chSatTone22KHz	= ["Auto","På","Av"];
var chSatToneBurst	= ["Utkoble","tone burst A","tone burst B"];
var chSatPolarization= ["Horisontal","Vertikal"];
var chSatSetupOptions=["Antennetype","Tuner","Båndfrekvens"];
var chSatAntennaType= ["Enkeltkabel","Universiell"];
var chSatUserBands	= ["Brukerbånd 1","Brukerbånd 2","Brukerbånd 3","Brukerbånd 4","Brukerbånd 5","Brukerbånd 6","Brukerbånd 7","Brukerbånd 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Brukerdefinert"];
var pleaseSelectSat = "Velg satellitter først!";
var subOptions		= ["Undertekst","Språk, digital undertekst","2. språk, digital undertekst","Type undertekst"];
var ttxOptionsCon      = ["Språk dekodingsside","Digital tekst-tv språk"];
var subType			= ["Normal","Hørselshemmede"];
var netIntf     	= ["Eternett","Trådløst"];
var netConnDes		= ["TV tester nettverksforbindelsen.\nVennligst vent",
						"Nettverkstilkoblingstesten er vellykket!",
						"Nettverkstilkoblingstesten mislykkes."];
var netSsidError	= "Gyldig lengde på SSID er 1 ~ 32 tegn. Vennligst sjekk SSID.";
var netOthers		= ["PIN-kode "];
var netWlessAutoDes	= ["Vennligst sørg for at følgende PIN-kode er forbundet med tilgangspunktet før du klikker OK.",
						"Vennligst trykk på knappen til tilgangspunktet innen 120 sekunder før du klikker OK."];
var netConnRemind	= ["Feil passord!",
						"Kobler til. Vennligst vent...",
						"Tilkobling vellykket og IP mottatt!",
						"Feil på lenke",
						"TVen søker etter APer'\nVennligst vent",
						"Det er ingen trådløs enhet koblet til TVen!"];
var netWireIpOptions= ["IP-innstilling","Adressetype","IP-adresse","Subnet mask","Standard gateway","Primær DNS","Sekundær DNS"];
var netWireConnRemind= ["Vennligst tast inn en verdi mellom 0 og 255.",
						"Tilkobling OK.",
						"Skriv inn en gyldig adresse",
						"Tilkobling OK.",
						"Tilkobling mislyktes!",
						"Kobler til. Vennligst vent...",
						"Skriv inn en verdi på mellom 1 og 223."];
var netFlixOptions	= ["Deaktiver","ESN"];
var netFlixDes	 	= ["Er du sikker på at du vil deaktivere?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Programoppdatering";
var netUpdateDialogTitle = "Programvareoppdatering";
var netBGDownloadTitle 	= "Laster ned";
var netUpdateLoadingPrompt= ["Søker etter oppgradering, vennligst vent!",
							"Programvaren lastes ned... Vennligst vent!",
							"Vennligst ikke slå av TV-apparatet under softwareoppdateringen!",
                            "Programvareoppdateringen lastes ned automatisk i bakgrunnen!"];
var netUpdatePrompt= ["Gratulerer, du har den nyeste programvareversjonen!",
						"Den nye programvareversjonen XXXX ble funnet. Ønsker du å laste ned nå? Dette kan ta noe tid avhengig av nettverksstatusen din.",
						"Kunne ikke logge inn!",
						"Klarte ikke å motta data, prøv igjen senere!",
						"Feil ved spalting XML-oppdatering!",
						"Feil på lenke",
						"Programvarenedlasting vellykket! Vil du begynne å flashe?",
						"Data tapt! Kunne ikke laste ned!",
						"Kunne ikke sjekke pakken, vennligst prøv igjen!",
						"Nettverket er uvanlig. Vennligst sjekk og koble til igjen…",
						"Kunne ikke oppdatere. Start TV-en på nytt!",
						"Oppgraderingsfilen ble uventet slettet. Oppgrader nettverket igjen.",
						"Nedlastingen av programvaren i bakgrunnen var vellykket. Vil du foreta oppgraderingen?"];
var netUpdateButtonText = ["Last ned", "Oppdater", "Senere", "Aldri", "OK","Fortsett"];
var autoDetectPrompt = ["Den nye programvareversjonen XXXX ble funnet. Ønsker du å laste ned nå? Dette kan ta noe tid avhengig av nettverksstatusen din.",
						"Den nye programvareversjonen XXXX er funnet. Ønsker du å oppdatere nå?",
						"Oppgraderingsprosessen av nettverket ble avbrutt siste gang. Du må foreta oppgraderingen igjen.",
                        "Nedlasting av ny programvareversjon XXXX er ikke fullført. Ønsker du å fortsette nå?",
                        "Programvaren er lastet ned, ønsker du å oppdatere nå?"];
var sysOptions		= ["Elektronisk bruksanvisning","OSD-språk","Tidsoppsett","Lås","Inngangsinnstillinger",
						"Programoppdatering","Lokalisering","HbbTV-modus","Informasjonskapsler","Felles grensesnitt",
						"Avanserte innstillinger","Fabrikkinnstillinger","LED-indikator"];
var sysResetDes		= "Er du sikker?";
var sysMenuLangOptions=["Språk","Foretrukket lydspråk","Foretrukket talespråk, andre"];
var sysTimerOptions	= ["Tidssone","Regionnavn","Klokke","Sovtidsur","Automatisk standby", "Country region"];

var sysTimeZone		= ["Som kringkaster","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Av","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Av","4 timer","6 timer","8 timer"];
var sysRegionName	= ["Madrid","Canary"];
var sysClockOptions	= ["Auto synkronisering","Dato","Tid","På-telleverk","Tidsoppsett",
						"Slå på kanalen","Av-telleverk","Tidsoppsett"];
var sysTimer		= ["Av","Daglig","En gang"];

var sysInputSet		= ["Ingen etikett","DVD","Blu-ray","HDD","DVDR",
						"HD-oppt.","Spill","VCR","PC","Digital STB",
						"HD dig STB","Kamera","Opptaker","Annet"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Via USB","Via Nettverk","Ved kanal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Finner ikke ny programvare på luften!",
						"Den nye programvareversjonen XXXX er funnet. Ønsker du å oppdatere nå?",
						"Vennligst sett inn USB-pinnen.",
						"Kunne ikke sjekke pakken, vennligst prøv igjen!",
						"Vennligst IKKE fjern USB-donglen eller slå av TV-apparatet mens fastvaren oppdateres!",
						"Programvaren har blitt oppdatert.\nTV-apparatet vil starte på nytt!",
						"Den nye programvareversjonen XXXX ble funnet. Ønsker du å laste ned nå? Dette kan ta noe tid avhengig av nettverksstatusen din.",
						"Laster ned",
						"Programvarenedlasting vellykket! Vil du begynne å flashe?",
						"Oppdat.-feil!",
						"Søke oppgraderingsfiler",
						"Programvaren har blitt oppdatert.\nVennligst start TV-en nå."];
var sysProductInfo	= ["Aktuell versjon","Produktnavn","Produsentens navn","Navn på chassis"];
var sysCiDes		= ["Ingen CI-kort presen."];
var sysAdOptions	= ["Registrering av DivX(R) ","DivX® avregistrering","T-Link","Authorization Error","Avregistreringsbekreftelse",
						"Leiebekreftelse","Leie utgått","Bluetooth-deklarasjons-ID"];
var sysRegistDes	= ["Du må registrere enheten for å spille DivX-beskyttede videoer",
						"Registreringskode:",
						"Registrer deg på http://vod.divx.com"];
var sysDregistDes	= ["Avregistreringskode:",
						"Avregistrer på http://vod.divx.com",
						"Fortsette registrering?"];
var mediaAuthorization = ["Enheten din er ikke autorisert til å spille av denne DivX(R)-beskyttede videoen."];
var deregistrationConfrimation = ["Din enhet er allerede registrert.","Er du sikker på at du ønsker å avregistrere?"];
var rentalConfirmation = "DivX(R)-leien har brukt XXXX ut av YYYY visninger. Fortsett?";
var rentalExpired 	= "DivX(R) leie har brukt XXXX av YYYY visninger. DivX leie er utløpt.";
						
						
var sysLockOptions	= ["Blokker kanal","Tidsintervallås","Programsperre","Blokker inntasting","Frontpanellås","Lås installasjon",
						"Endre passord","Maks volum","Slett alle"];
var sysTimeIntervals= ["Låstype","Starttid","Stopptid"];
var sysRatingOptions= ["Ingen","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rangert (Spania)"];
var changePass		= ["Endre passord","Nytt passord","Bekreft passord"];
var changePassDes	= ["Feil passord.\nPrøv igjen!",
						"Passord samsvarer ikke.\nPrøv igjen!",
						"Passord valgt!",
						"Koden er for enkel til å bli angitt som passord.\nPrøv på nytt."];
var sysPowerOnChOptions= "Velg modus";
var sysPowerOnCh	= ["Siste status","Brukervalg"];
var netWlessSecu    = ["Åpen","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ingen","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Støttes ikke"];
var netWlessSecu3	= ["Ingen","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Støttes ikke"];
var netOptions		= ["Internettforbindelse","Grensesnitt","Trådløse innstillinger","IP-innstillinger","Informasjon",
						"Tilkoblingstest","DLNA","TV-kontroll","Netflix-innstillinger","WiFi TV-link",
						"Adressetype","IP-adresse","Subnet mask","Standard gateway","Primær DNS",
						"Sekundær DNS","SSID","BSSID","Vennligst tast inn SSID:","Bruker-ID"];
var chEditDes		= ["Duplisert kanalnummer!","Trykk på den røde tasten for å slette gjeldende tegn!","Ugyldige kanalnumre."];
var chEpgNoProgram	= "Ingen programinfo akkurat nå, vennligst søk etter kanaler først!";
var chEpgWords		= ["Programguide","Ingen programdata.","Kanal låst!","Ingen programdetaljer.","Ingen programtittel."];
var chEpgBooking	= ["Planlegg info", "Kanalnummer","Startdato","Starttid","Stopptid",
						"Gjenta-type","Plantype","Legg","Bytt ut","Endre",
						"Legg til/Rediger"];
var epgHotKey		= ["Forr dag","Neste dag","Filter","Planleggingsliste","Legg til plan"];
var chEpgBookRemind	= ["Ugyldig starttid","Ugyldig endetid","Duplisert timeplan","Vellykket lagret.","Slettet."];
var chSchePara		= ["Planleggingsliste","Starttid","Startdato","Programtittel","Kanalnavn",
						"Varighet","Gjenta","Timeplan","Endre","Slett"];
var dateTimer		= ["En gang","Daglig","Ukentlig"];
var scheduleDeleteReminds="Ønsker du å slette denne tidsplanen?";
var scheduleNoLists	= "Det er ingen tidsplanliste. Trykk \"Red\"-knappen for å legge til.";
var chListWords		= ["Kanalliste","Velg liste","Tunermodus","Legg til i Favoritter","Fjerne",
						"Velg kanalliste","Velg tunermodus","Bytt"];
var chListType		= ["Alle","Digital","Analog","Radio","Gratis","Favoritter"];
var chAutoScanOptions=["Velg operatør","Kanaltype","Automatisk søk"];
var souSoundType	= ["Ugyldig","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musikk","Kino","Klar stemme","Standard","Bruker"];
var picAdRgbMode	= ["Av","Kun rød","Kun grønn","Kun blå"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamic Contrast","LED bevegelsesklarhet",
						"Hudtone","Filmmodus","Spillemodus","Fargetemperatur","Hvitbalanse",
						"Frys","svart Stretch","Overskan.","Gamma","HDMI-modus","10P hvitbalanse","Fargeutvidelse",
						"Reduksjon av uskarphet","Flimmerreduksjon","Fargerom","Motion-klarhet"];
var pic10Pwhite     = ["Intervall","Rød","Grønn","Blå","Tilbakestill","Farge","Gul","Cyan","Magenta"];
var picMotionClarity = ["Motion-modus","Motion-interpolering","LED bevegelsesklarhet","Reduksjon av uskarphet","Flimmerreduksjon","Tilbakestill"];
var picMotionMode   = ["Auto","Film","Myk","Tøm","Sport","Kunde"];
var picResetDes		= "Alle egendefinerte innstillinger vil bli nullstilt. Er du sikker på at du ønsker å foreta den valgte handlingen?";
var pic10PReset     = "Er du sikker på at du vil nullstille 10P hvitbalanse?";
var picMotionReset  = "Ønsker du å nullstille Motion-klarhet?";
var picColorSpaceReset    = "Er du sikker på at du vil nullstille fargerom?";
var picOptions		= ["Bildemodus",
						"Bakgrunnsbelysning","Lysstyrke","kontrast","Metning","NYANSE","Skarphet","Fargetemperatur","Skjermmodus","Autoformat",
						"Sportsmodus","3D","3D-navigasjon","ECO Innstillinger","Geometri",
						"Avanserte innstillinger","Bruke bildemodus","Bildenullstilling"];
var picSize			= ["16:9 format", "4:3-format", "14: 9-format", "Cinerama",
						"16:9 Zoom", "16:9 Zoom felfelé","14:9 Zoom","Megnyújtás zoom","Széles zoom",
						"Zoom 2","Széles zoom 2","Tilpass til skjerm","Pontonkénti","Original","Panorama"];
var others			= ["Volum","Kringkasting","Passord","Status","Lagre","Bytt ut","Start","Avslutt","Søk","Slett",
						"Ingen","Automatisk","Søk","Sikkerhet","Koble til","Oppfrisk","Prøv","Stopp","Innstillinger","Kanaler",
						"Endre","Sett inn","Signal!","Ende","Stereo","Audio","Hoved","Ingen lyd","Tips","Tilbakestill",
						"Kunde","Oppsett","Lagre","Bruker","Lukk tastatur","Sikkerhetsmodus","Hver dag","PVR-liste"];
var direction		= ["Venstre","Høyre","Opp","Ned"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Ukjent"];
var soundChannels   = ["Ukjent","Mono","Under","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2CH","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Venstre","Høyre","Andre"];
var prompts			= ["Juster til bildeinnstillingen som best passer omgivelsene dine.",
						"Juster lysstyrken. Jo nærmere 100, jo lysere.",
						"Juster kontrastnivåene. Jo nærmere 100, desto større forskjeller mellom mørkt og lyst i bildet.",
						"Juster metningsnivåene. Jo nærmere 100, desto sterkere farger.",
						"Juster skarpheten. Jo nærmere 100, desto klarere detaljer.",
						"Juster bakgrunnsbelysningen. Jo nærmere 100, desto lysere skjerm.",
						"Juster fargetonenivåene. Denne innstillingen modifiserer fargetonene.",
						"Velg bildeformatet som best passer programmet som står på.",
						"Konfigurer energisparingsalternativer.",
						"Juster skjermgeometriinnstillingene når du kobler til en PC.",
						"Velg flere bildeavanserte innstillinger.",
						"Nullstill alle bildeinnstillinger til standard.",
						"Velg et lydmodus som best passer din personlige preferanse.",
						"Juster volumbalansen mellom venstre og høyre kanal.",
						"Sound Retrieval System TruSurround HD yter med en rik lydopplevelse og klarhet på lave og høye frekvenser.",
						"Digital Interface Format kobler TV-ens digitale lydutgang til hjemmekino-lydutstyr.",
						"Velg et lydspråk som best passer din personlige preferanse.",
						"Aktiver funksjonen for synshemmede for å nyte TV-programmer.",
						"Sjekk TV-bilde, lyd og signal.",
						"Velg kanallistetype for å tilpasse TV-signalet ditt.",
						"Velg språket for programmets undertekster som vises på bunnen av skjermen.",
						"Se gjeldende kanals tekst og bilder.",
						"Digital Living Network Alliance. Spill av musikk, bilder og video via hjemmenettverket fra andre enheter, f.eks. datamaskin.",
						"Vis smarttelefoninnholdet ditt på TV-en og bruk smarttelefonen som en fjernkontroll for TV-en.",
						"Vis innhold fra en Miracast-kompatibel Android-enhet på TV-skjermen din.",
						"Lås TV-en din.",
						"Velg et navn på enheten din.",
						"Velg omgivelsene dine.",
						"Nullstill alle systeminnstillinger til standard."];
var initialTitle	= ["Velkommen","Første gangs oppsett"];
var initialPrompt	= ["Gjennomfør den innledende installasjonen nå og en verden av spennende opplevelser venter deg!",
						"Velg språket ditt:",
						"Vennligst velg ditt land:",
						"Velg ditt sted:",
						"Vennligst velg din nettverkstype:",
						"Vennligst velg kablet nettverkstilkobling:",
						"Kunne ikke koble til xxxxxxxxx! Vennligst koble enheten i henhold til følgende diagram eller velg venstre for å nullstille.",
						"Koblet til xxxxxxxxx! Velg høyre for å fortsette.",
						"1) TV-apparatet har kanskje allerede en innebygd trådløs adapter\n2) Eller, hvis det følger med en trådløs USB-adapter, koble den til TV-apparatet.  Velg deretter modus for trådløs nettverkstilkobling.",
						"Søker... Vennligst vent...",
						"Det er ingen trådløs enhet koblet til TVen!",
						"Vennligst se til at følgende PIN-kode er installert på APen før du klikker på \"Neste\"-knappen under.",
						"Trykk på knappen på det trådløse tilgangspunktet i løpet av 120 sekunder før du trykker høyre!",
						"WPS (Wi-Fi Protected Setup)",
						"PIN-kode",
						"PBC (Push Button Configuration)",
						"Følgende innhold kan bare vises med en nettverkstilkobling. Vil du hoppe over nettverksoppsettet?",
						"Det venter nye programvareoppdateringen på deg. Nedlastningstiden avhenger av nettverksstatusen din.",
						"Oppdatering av TV-programvaren sikrer at du kan nyte alle de seneste funksjonene og tjenestene.",
						"Du vil ikke ha tilgang til de nyeste funksjonene og tjenestene. Vil du hoppe over programvareoppdateringen?",
						"Trykk på høyreknappen for å fortsette.",
						"Ikke slå av enheten under oppdatering, da dette kan føre til at TV-en slutter å fungere optimalt.",
						"Hvis du ikke ønsker å oppdatere, velger du NEI.",
						"Oppdaterer, vennligst vent!",
						"Du kan også oppdatere programvaren i SYSTEM/PROGRAMVAREOPPDATERING.",
						"Landet som er valgt ber om passordinnstilling.\nAngi koden for din TV og bekreft den.",
						"This code is too simple.\nPlease use different digits.",
						"Gratulerer! Førstegangs oppsett er fullført. Du kan endre innstillingene via hovedmenyen og undermenyene.",
						"Vennligst velg sikkerhetsmodus:",
						"Vennligst velg modus for trådløs nettverkstilkobling:",
						"Nettverk"];
var initNetCabAndDonRe = ["Ingen koblet nettverkskabel er tilkoblet, koble til en nettverkskabel!","Ingen innebygd trådløs adapter eller ingen trådløs USB-adapter ble funnet."];
var initChPrompt = ["Oppsett av TV-kanaler","Velg antenne som søketype.","Behandler auto-tuning...","Følgende kanaler ble funnet:","Vennligst velg kabelskanntype.","Vennligst velg en operatør fra følgende liste.","Vennligst konfigurer skanninfoen","Følgende kabelkanaler ble funnet:","Vennligst velg en operatør fra følgende liste","Vennligst velg satellitter for å skanne eller redigere valgte satellitt","Vennligst angi satellittens parametere","Følgende kanaler ble funnet, og kanalsøket kan også gjøres på nytt under Kanal/Kanalsøk"];
var initClockPrompt = ["Hent dato/klokkeslett fra nettverket.",
						"Angi dato og klokkeslett:"];
var initialOptions	= ["Omgivelser","Nettverksinstallasjon","Programoppdatering","Kanalinstallasjon","Klokke"];
var initialHotkeys	= ["Tilbake","Velg","Neste"];
var initLocations	= ["Hjem","Handle","Butikk med demo"];
var initNets		= ["Kablet","Trådløst","Jeg har ikke noen nettverkstilkobling"];
var initWireManuals	= ["IP-adresse","Subnet mask","Standard gateway","Primær DNS","Sekundær DNS"];
var initSoftUpdates = ["Oppdater nå","Oppdater senere"];
var initChannelIns	= ["Fortsett","Jeg ønsker ikke å sette opp kanaler"];
var initChScanTypes	= ["Digital & Analog","Digital","Analog","Jeg ønsker ikke å skanne"];
var initChDvbts		= ["Antenne ATV-kanaler:","Antenne DTV-kanaler:"];
var initChDvbcs		= ["Kabel ATV-kanaler:","Kabel DTV-kanaler:"];
var initChDvbss		= ["Satellittkanaler:"];
var initChDvbSOther	= ["Jeg ønsker ikke å skanne satellitt"];
var initEndConnectedStatus= ["Frakoblet","WiFi tilkoblet","Nettverkskabel tilkoblet"];
var initEndInstallations= "XXXX kanaler satt opp";
var initEndUpdate	= ["Oppdatert"];

var audioScenes 	= ["Bordplate","Veggmontering"];			
var screenSavers	= ["Ingen programinfo akkurat nå, vennligst søk etter kanaler først!",
						"Ingen signal!",
						"Kryptert",
						"Kun data",
						"Lydprogram",
						"Ingen lyd og bilde",
						"Ikke tilgjengelig",
						"Ingen tekst-tv",
						"Ingen programdata.",
						"Program låst!",
						"Program låst!\nTrykk OK og tast inn koden din.",
						"Ingen programdetaljer.",
						"Program skadelig for mindreårige.\nTrykk OK og tast inn koden.",
						"Kanal låst!",
						"Kanal låst!\nTrykk OK og tast inn koden din.",
						"Inntasting låst!\nTrykk OK og tast inn koden din.",
						"Støttes ikke!",
						"Denne tjenesten er ikke tilgjengelig for øyeblikket",
						"Inngang låst!",
						"Ingen programtittel.",
						"Ingen funksjon"
						];
var chBookingPromt	= ["Gjeldende kanal har et planlagt opptak, TV-aparatet vil starte opptaket.",
						"Et planlagt opptak ble funnet.\n Bytt til XXXX for å ta opp",
						"Gjeldende kanal har en påminner.",
						"En planlagt påminner ble funnet.\n Bytt til XXXX"];
var timeUnit		= ["Sek","min"];
var ciPromt			= ["Nettverksdataene er endret. For å oppdatere kan du utføre et søk. ",];
var othersPromt		= ["Vent…",];
var menuOptions		= ["Bilde","Lyd","Kanal","Nettverk","System"];
var optionOptions	= ["Bildemodus","Forh.inst. lyd","Frys","T-Link","lagring","PVR","Planleggingsliste","Innstillinger"];
var optionTLinkPromt= [["Slå på automatisk","Automatisk standby","Veivisermeny"],
						["Strøm på","Standby","Forsterkerlydnivå"]];
var powerPromt		= ["TV-en vil snart slå seg av! Vennligst trykk på hvilken som helst tast for å avbryte."];
var ttxLanguage		= ["VEST EUR","ØST EUR","Russisk","Arabisk/hebraisk","Farsi","Arabisk","Bielorusso","Gresk","Tyrkisk"];
var ttxOptions		= ["Vis","Bla gjennom undersider","Språk","Alarmside","Nyhetssending"];
var weekday         = ["søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","lørdag"];
var lcnConfflict	= "Dette programmet har problemer med mottaket. Det finnes en annen versjon på kanal %d.";
var inShopMode		= "TV-apparatet er i handlemodus. For hjemmemodus kan du velge \"System\" og endre \"Sted\" i menyen.";
var nitRefresh		= "Nettverksdata er endret. Vil du gjøre et oppdateringssøk?";
var picHDMIMode     = ["Auto","Grafisk","Video"];

var glassRemind    	= ["3D-brillene må parkobles med TV-apparatet\n(Hold inne av/på-knappen på 3D-brillene).","3D-brillene er koblet til TV-apparatet ",""];
var pvrRemind 		= ["Ikke trekk ut USB-enheten eller slå av strømmen"];
var pvrConName   	= ["PVR","Programinformasjon:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Opptak av video er lagret i mappen \"pvr\"."],"Stopp","Ta opp","time","Minutt","Varighet","Tips","Bruk piltastene til å angi opptaksvarighet."];
var pvrDisRemind 	= "Sett inn USB-pinne for opptak.";
var pvrRemindWords  = ["Ønsker du å avslutte?",
							"Ønsker du å stoppe opptaket og bla gjennom innspilte filer?",
							"Plate er trukket ut.",
							"Det er ikke nok ledig plass.",
							"Ingen innspilte filer. Start innspilling.",
							"PVR kan ikke begynne i ukodet kanal.",
							"Funksjonen er ikke tilgjengelig",
							"Vellykket lagret.",
							"Ønsker du å stoppe opptaksprosessen, og endre inngangskilde?",
							"TV'en vil avslutte den aktuelle innspillingen. Ønsker du å avslutte?",
							"Ved PVR-opptak må TV-signalet være sterkt nok, vennligst sjekk signalet."];
var pvrChangeCh 	= ["Vil du skifte kanal?",
							"Ønsker du å stoppe opptaksprosessen, og endre kanal?"];
var pvrChangeToPIN8	= ["Ønsker du å endre kilde til enheten som er koblet til SCART-inngangen?",
				    		"Ønsker du å stoppe innspillingen og endre kilde til enheten som er koblet til SCART-inngangen?"];
var pvrChangeToCEC  = ["Ønsker du å endre kilde til enheten som er koblet til en HDMI-inngang?",
				  			 "Ønsker du å stoppe innspillingen og endre kilde enhet som er koblet til en HDMI-inngang?"];
var pvrGuideJump    = ["Ønsker du å gå inn i EPG?",
							"Ønsker du å stoppe opptaksprosessen, og legge inn EPG?"];
var pvrMediaJump    = ["Ønsker du å gå inn i Media?",
							"Ønsker du å stoppe opptaksprosessen, og legge inn Media?"];
var timeshiftExtra	= ["Ønsker du å stoppe tidsskiftet og endre kanal?",
						"Ønsker du å stoppe tidsforskyvningen og endre kilde til enheten som er koblet til SCART-inngangen?",
						"Ønsker du å stoppe tidsforskyvningen og endre kilde til enhet som er koblet til en HDMI-inngang?",
						"Tidsskift kan ikke begynne i ukodet kanal.",
						"Ønsker du å stoppe tidsforskyvning og gå inn i EPG?",
						"Ønsker du å stoppe tidsskiftet og endre TV til USB-modus?",
						"Ønsker du å stoppe tidsskiftet og endre inngangskilde?",
						"Sett inn USB-pinne for opptak.",
						"Diskstørrelsen er ikke nok.",
						"TV vil avslutte den aktuelle tidsforskyvningen. Ønsker du å avslutte?"];
var timeshiftStatus	= ["Spole bakover","Stopp","Spill","Pause","Spole fremover"];
var pvrPowerOffRemind= ["Standby-opptak","Standby","TV-apparatet spiller for øyeblikket inn, ønsker du å fortsette opptaket når TV-apparatet er i standby-modus?"];
var timeshiftInitTitle= "Oppsett av plate";
var timeshiftInitReminds= ["Veiledningen er brukt til å sette opp USB-disken for tidsskift. Vennligst velg oppsettmodus.",
						 "For å ha bedre ytelse, anbefaler vi å formattere USB-disken. Det vil slette all data.",
						 "Vennligst velg filstørrelse for tidsskift.",
						 "Formatterer",
						 "Det er ikke nok ledig plass.",
						 "Lager tidsskift-fil",
						 "Tester hastighet",
						 "Diskens hastighet er for sakte (<%f MB/sek) til å aktivere tidsskift-funksjon!",
						 "Disken er klar for tidsskift. Men vi anbefaler at du endrer disk (av hastighet > %f MB/sek) for bedre ytelse.",
						 "Disken er klar for tidsskift."];
var timeshiftInitButtons= ["Formatter","Avbryt","Avbryt","OK","Ende","Avslutt"];
var timeshiftInitOther=["Diskhastighet:","MB/sek."];

var selectChoice	= "Er du sikker?";
var chAtvStore		= "Lagre som XXXX";
var chEpgFirstGenreUK= ["Kino","Nyheter og fakta","UNDERHOLDNING","Sport","Barn","Utdanning","Livsstil","Drama"];
var homePageTitleList = ["APPLIKASJONER","TV","VIDEOER","Hjemmeside"];
var homePageFavAndAllName  = ["Favoritt-apper","Alle apper"];
var homePageBackUp = ["Elektronisk bruksanvisning","GuideOn"];
var homePageRemind   = ["Fullstendige funksjoner er kun tilgjengelig ved tilkobling til nettverk.","TV-apparatet har foreløpig ingen kanaler. Programmer vil bli tilgjengelig etter kanalsøk.","Ingen program","Søke etter kanaler nå?"];
var homePageHistory = ["Historikk"];
var miracastTitle = ["WiFi TV-link","TCL-enhet"];
var miracastRemind=["WiFi TV-link lar deg dele skjerm og lyd fra enheten din, som en smarttelefon eller nettbrett, til TV-en, trådløst (dvs. uten kabler). Dette gjør det mulig å se på TV-en, samtidig, hva enn smarttelefonen eller nettbrettet ditt viser. For eksempel kan du sette på en video på smarttelefonen og vise den samtidig på TV-en, eller bruke nettbrettet ditt som en spillkontroll med innholdet vist på TV-skjermen.","WiFi TV-link på TV er klar. Start opp for å dele skjermen til din enhet med TV-en nå.","Kobler til. Vennligst vent...","Tilkobling mislyktes!","Kunne ikke koble til. Vennligst sjekk feilen!"];
var homePageLittleWin = ["Innstillinger","Media","Favorittkanaler","Smart TV","EPG"];

var hbbtvStopRemind  = ["Ønsker du å stoppe avspillingen?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Trykk på ALTERNATIVER for mer informasjon";
var emptyListInfo = "Det er ingen enhet koblet til Tven.";
var optionVideoListArray_1 = ["Bildemodus", "Forh.inst. lyd", "Avspillingsmodus", "Skjermmodus", "3D-modus", 
							  "Venstre/høyre-justering", "Dybdeskarphet", "Undertekst", "Lydspor", "Tittel", "Kapittel", "Info"];
var optionVideoListArray_2 = ["Bildemodus", "Forh.inst. lyd", "Avspillingsmodus", "Skjermmodus", 
							  "Undertekst", "Lydspor", "Tittel", "Kapittel", "Info"];
var bottomTipsText = ["Spill av / Pause", "Spole bakover", "Spole fremover", "Spilleliste", "Innstillinger"];
var picturePresetArray = ["Standard", "Dynamic", "Naturlig", "Kino", "Bruker"];
var videoPlayModeArray = ["Gjenta alle", "Gjenta en", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Széles zoom", "Zoom 2", "Széles zoom 2", "Megnyújtás zoom", "Automatisk"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 Zoom", "16:9 Zoom", "16:9 Zoom felfelé", "Automatisk"];
var Mode3DArray = ["Av", "2D-til-3D", "Side-ved-side", "Topp og bunn", "Linjeflettet"];
var videoOptionListArray = ["Av", "Spor", "Undertekst", "Tittel", "Kapittel"];
var subMenuTitleText = "Undertekst";
var langMenuTitleText = "Lydspråk";
var titleMenuTitleText = "Tittel";
var mode3DMenuTitleText = "3D-modus";
var langInfoText = "Spor";
var STOP_RESUME_INFO = "Stopp-Gjenoppta";
var playListName = "navn";
var eb_tips = "Tips";
var ok_button = "OK";
var eb_info = ["Feil i audiodekoding.", "Feil i videodekoding.", "Lydformatet støttes ikke.", 
			   "Video støttes ikke.", "Kan ikke åpne denne filen.", "Feil ved avspilling, prøv igjen.",
			   "Filformatet støttes ikke.", "Obs! Spilleren har stoppet.",
			   "Filbanen eksisterer ikke eller er ugyldig.\n Sett inn lagringsenheten på nytt og prøv igjen.",
			   "Fortsette å spille av der\n det stoppet?"];
var frameTitleText = "Ny enhet";
var eb_quit_info = "Er du sikker på at du ønsker å avslutte?";
var eb_yes = "JA";
var eb_no = "NEI";
var offinfo = "Av";
var naInfo = "Null";
var consoleInfoArray = ["Spole bakover", "Spole fremover", "Spill av / Pause", "Spilleliste"];
var cantOperateText = ["Funksjonen støttes ikke."];
var chapterChangeInfo = "Bare kapitler fra 1 til XXXX er tilgjengelig.";
var metaDataArray = ["Tittel/utgave metadata: ", "Kapittel metadata: ", "Audio metadata: ", "Teksting metadata: "];
var metaTitleInfo = "Tittel";
var metaChapterInfo = "Kapittel";
var videoLoadingInfo = "Analyserer...";
var listLoadingInfo = "Laster...";
var pgInfo = "Rangering: ";
var fileNameText = "navn";
var fileDateText = "Dato";
var fileSizeText = "Str.";
var fileDurationText = "Varighet";
var fileDirectorText = "Regissør";
var fileCopyrightText = "Opphavsrett";
var fileArtistText = "Artist";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "År";
var fileGenreText = "Genre";
var mainListArray = ["Alle", "Bilde", "Video", "Musikk"];
var sortArray = ["navn", "Dato"];
var parserArray = ["Normal", "Gjentagende  "];
var emptyTipsInfo = "Obs! Ingen støttede filer ble funnet.";
var emptyFolderInfo = "Obs! Ingen støttede filer ble funnet.";
var sortName = "Sorter etter";
var parserName = "Parser";
var divx_str1 = "Registrering av DivX(R) ";
var divx_str2 = "DivX® avregistrering";
var infor_str = "Info";
var quickMenuEmptyText = "Ingen tilgjengelige alternativer.";

var musicSoundPresetArray = ["Standard", "Kino", "Musikk", "Klar stemme", "Bruker"];
var musicInformationArray = ["navn", "Artist", "Album", "Genre:", "År:", "Varighet:"];
var playListName = "navn";
var playTipsInfo = ["Du spiller av den første filen.", "Du spiller av den siste filen."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artist";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Forh.inst. lyd";
var optionBGMInfo = "Spill i bakgrunnen";
var optionAudioOnlyInfo = "Kun lyd";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX er tilkoblet TV-apparatet!";
var tvRemoteTitle		= "TV-kontroll";
var tvRemoteDeveloper	= "Applikasjonen ble utviklet av TCL";
var tvRemoteDeviceTitle	= "Produktnavn:";
var remoteOption		= ["Mediadeling","Fjernkontroll","Hjelp","DualFlow","Smarttilkobling"];
var remotebottom		= " Vennligst last ned \"TCL nScreen\" til smarttelefonen ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Del bilder, videoer og musikk med TV-apparatet via telefonen.",
							"Fremgangsmåte: \n1. Klikk \"TCL nScreen\" på telefonen. Koble telefonen og TV-apparatet til det samme trådløse nettverke\n2.Klikk \"Media Sharing\" for å bla gjennom mediefile\n3.Send media til TV for avspilling (med ett av følgende alternativer)",
							"      a) Dra og slipp mappen/filen til TV-ikonet til toppen av skjermen;\n      b) Sving telefonen mot TV-en for å kjøre første fil;\n      c) Spill av mediet på telefonen og trykk på ikonet for TV-deling;",
							"4. Under avspilling på TV-en, ristes telefonen for å spille av forrige eller neste fil."];
var controlReminds		= ["Bruk telefonen som fjernkontroll til TV-en.",
							" ",
							"Fremgangsmåte: \n1. Klikk \"TCL nScreen\" på telefonen. Koble telefonen og TV-apparatet til det samme trådløse nettverket\n2. Klikk \"Remote Control\" for å betjene TV-apparatet."];
var helpDeviceWords		= "Interaksjon på flere skjermer";
var helpBottom			= " I cloud-teknologitiden, er smarte apparater slik som telefon og TV likt tilkoblet. Del media på flerskjermer med din familie og kontroller TV via telefon! ";
var helpReminds			= ["Fremgangsmåte\n   1. Last ned og installer \"TCL nScreen\" fra Google Play eller Apple Store.\n2. Koble telefonen og TV-apparatet til det samme trådløse nettverket.",
							" ",
							"Anbefalt telefon\n   1. CPU: over 800MHz\n   2. Lagring: minst 80 MB ledig plass",
							" ",
							"Ansvarsfraskrivelse\nDersom \"TCL nScreen\" ikke er tilgjengelig på telefonen din, ta kontakt med telefonprodusenten."];
var helpButtons			= ["Forrige","Neste"];
var aboutReminds		= ["TV-kontroll","Applikasjonen ble utviklet av TCL"];
var aboutExit			= "Avslutt";
var smartReminds		= ["Rask og smart tilkobling mellom TV og telefon.",
							" ",
							"Fremgangsmåte \n1. Koble TV og smarttelefon til samme LAN. Klikk \"TCL nScreen\" på smarttelefonen.\n2. Klikk \"Smart Connect\" for å skanne QR-koden.\n3. Med TV-apparatet i kringkastingsvisningsmodus, trykk INFO-tasten på fjernkontrollen i 4 sekunder, og en QR-kode vises over hele skjermen.",];
var smartQRReminds		= ["Klikk \"Smart Connect\" i \"TCL nScreen\" på telefonen og scan QR-koden for å koble sammen TV og telefon.",
							"QR-koden inneholder LAN-kontoinformasjon. Ta vare på denne informasjonen."];
							

var consoleTipArray = ["Forrige","Neste","Konsoll","Spilleliste"];							
var optionInfoArray = ["Bildemodus","Avspillingsmodus","Varighet","Effekt","Info"];

var playModeArray = ["Normal","Blande","Gjenta"];
var durationArray = ["Kort (5 sek.)", "Mellomlang (10 sek.)", "Lang (15 sek.)"];
var effectArray = ["Ingen", "Oppløs", "Viske høyre", "Viske venstre", "Viske opp", "Viske ned", "Boks inn", "Boks ut", "Tilfeldig"];
var infoArray = ["Navn:","Str.:","Dato:","Lokalisering"];

var picturePresetBarTitleInfo = "Bildemodus";
var picturePresetBarArray = ["Standard","Dynamic","Studio","Kino","Bruker"];
var upTipsInfo = "Flytt bilde"; //add yums 2014-10-10
var consoleTipsArray = ["Konsoll","Forrige","Neste","Spilleliste","Innstillinger"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Trykk HØYRE igjen for å vise neste bilde","Trykk VENSTRE igjen for å vise forrige bilde","Trykk NED igjen for å vise spilleliste"]; //add yums 2014-10-10

var optionPvrListArray = ["Bildemodus","Forh.inst. lyd", "Skjermmodus", "3D-modus", "Undertekst", "Lydspor", "Info"];							
	
var titleSpanFirstArray = ["Kontroll og tilkobling","Grunnleggende bruk","APPLIKASJONER","TV","Innstillinger","Ofte stilte spørsmål"];
var titleSpanSecondArray = [["Fjernkontroll","Paneltaster","Enkel navigering","TV-tilkobling","TV-tilkobling","TV-tilkobling","Trådløst"],["Starter","Statuslinje","Hoved"],["Spill-apper","Media","TV-kontroll"],["Justere kanal og volum","Kanalliste","EPG","Kanaler","Favorittkanaler"],["Bildeinnstillinger","Lydinnstillinger","Kanalinnstillinger","Programoppdatering","Språk","Foreldrelås"],["Ofte stilte spørsmål","Ofte stilte spørsmål","Feilsøking","Feilsøking","Vilkår og betingelser"]];
var contentSpan1_1Array = [["LISTE:","INFO:","MENY:","STRØM:","KILDE:","GUIDE:","SMART-TV:"],["Viser kanallisten","Viser programinfo","Går til hjemmesiden","Slår på strøm eller går i standby-modus","Velger kilde","Viser EPG-info (Elektronisk programguide)","Går til Smart TV-siden"]];
var contentSpan1_2Array = ["Forrige kanal","Neste kanal","Lydvolum opp","Lydvolum ned","Går til hjemmesiden","Bekrefter innstillingen","Standby / Strøm på"];
var contentSpan1_3Array = ["OK/Guide","Kanal opp","Kanal ned","Volum ned","Volum opp","Tilgjengelig som piltaster i enkelte funksjoner."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV UT adapter","LAN","Smarttelefon","PC/Set-top box/DVD","Lydforsterker","Lydforsterker/monitor","TV-apparatet leveres kanskje ikke med alle typer stikkontakter."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Hodetelefon","AV INN adapter","SPDIF","CMP AUDIO INN adapter","CMP INN (YPbPr) adapter","USB-innretning","USB-innretning","Hodetelefon","DVC/spillkonsoll/Set-top box/DVD","Lydforsterker","DVC/spillkonsoll/Set-top box/DVD","TV-apparatet leveres kanskje ikke med alle typer stikkontakter."];
var contentSpan1_6Array = ["Felles grensesnitt","SD","VGA","SCART","Mini-SCART","ANTENNE INN","PCMCIA-kort","SD-kort","PC","Set-top box/DVD","Antenne/kabel/satellitt","TV-apparatet leveres kanskje ikke med alle typer stikkontakter."];
var contentSpan1_7Array = ["Tavle","PC","Ruter","Telefon","TV"];
var contentSpan2Array = [["Trykk på piltastene for å vise hjemmesiden.","Trykk deretter OK for å se et av de valgte programmene eller start en app."],["Viser dato, nettverk og enheter, etc. øverts til høyre i bildet."],["Selecteer de ingangsbron van apparaten aangesloten op de TV via verschillende poorten, zoals TV, AV, HDMI enz."]];

var contentSpan3Array = ["Bruk dine favoritt-apper på Smart TV-siden","Se bilder, videoer og spill av musikk fra et USB-minne","Koble TV og smarttelefon/nettbrett til samme LAN.","Klikk TCL nScreen eller \"TCL nScreen\" på smarttelefonen/nettbrettet.","Del bilder, videoer og musikk på flere skjermer med familien din, og styr TV-apparatet med smarttelefonen."];

var contentSpan4Array = [["Trykk på OPP/NED for å bytte kanal","Trykk VENSTRE/HØYRE for å endre volumet"],["Trykk på LIST på fjernkontrollen for å se en oversikt over alle kanalene","Trykk på OPP/NED for å velge kanal"],["EPG er en programguide på skjermen som viser planlagte TV-programmer. Du kan navigere, velge, vise og ta opp programmer."],["Søke og lagre kanaler"],["Legg til eller endre favorittkanaler i kanallisten"]];

var contentSpan5Array = ["Se favorittprogrammene dine på videosiden"];

var contentSpan6Array = [["Trykk på MENY for å vise systeminnstillingene","Gå inn i bildeinnstillinger for å endre verdier"],["Trykk på MENY for å vise systeminnstillingene","Gå inn i lydinnstillinger for å endre verdier"],["Trykk på MENY for å vise systeminnstillingene","Gå inn i kanalinnstillinger for å endre verdier"],["Oppdater TV-apparatet når en ny programvareversjon er tilgjengelig"],["Du kan velge foretrukket menyspråk"],["Aktiverer foreldrelås for kanaler eller programmer som ikke er egnet for barn"]];

var contentSpan7_1Array = [["Ingen bilde, ingen lyd","Sjekk om sikringen er ok.","Koble til en annen elektrisk enhet i stikkontakten for å sjekke at den fungerer.","Støpselet er i dårlig kontakt med stikkontakten","Sjekk signalkilden."],["Normalt bilde, ingen lyd","Trykk på volumknappen for å øke volumet.","Lydinnstillingene er feil.","Signalfeil fra sendingen."],["Normal lyd, ikke noe bilde","Juster lysstyrke og kontrast","Signalfeil fra sendingen.","Sjekk om TV-apparatet er i lydmodus."]];
var contentSpan7_2Array = [["Radiofrekvensforstyrrelse","Denne forstyrrelsen kan generere krusninger eller diagonale striper, og i noen tilfeller tap av kontrast i bildet. Finn frem til og eliminer kilden til forstyrrelsen."],["Ingen farge","Juster fargeinnstillingene.","Prøv en annen kanal. Det kan være at programmet sendes i svart/hvitt."],["Fjernkontrollen virker ikke.","Skift batteriene.","Batteriene er ikke satt riktig inn. TV-apparatet er ikke tilkoblet strøm."]];
var contentSpan7_3Array = [["Innholdet på USB-minnet vises ikke","Kontroller at USB-minnet er kompatibelt med TV-apparatet.","Kontroller at lyd- og bildeformatet støttes av TV-apparatet."],["Avspilling uten lyd","Lydformatet i videoen støttes ikke av avspilleren."],["Filene spilles av ujevnt","Overføringshastigheten til USB-minnet kan begrense dataoverføringen til TV-apparatet."]];
var contentSpan7_4Array = [["Ved programvareoppdatering, vær oppmerksom på følgende","Ikke slå av strømmen under oppdateringen.","Ikke bruk fjernkontrollen under programvareoppdatering.","Programvareoppdateringen kan ta litt tid, så vær tålmodig."],["Det er ingen synlige endringer i TV-grensesnittet etter programvareoppdateringen.","Av og til er det ikke bare funksjoner som blir lagt til eller oppdatert, men TV-apparatets ytelse forbedres uten at det er synlige endringer i grensesnittet. Noen ganger forblir TV-grensesnittet akkurat slik det var."]];
var termsTitle = "Vilkår og betingelser";
var termsConditions = ["(Juridisk erklæring) fra TCL - produsenten av dette TV-apparatet. ","Grunnet de ulike funksjonene på produkter som har SmartTV-tjenester, og begrensningene i tilgjengelig innhold, vil enkelte funksjoner, bruksområder og tjenester kunne være utilgjengelige på enkelte apparater og i enkelte områder. Enkelte funksjoner på SmartTV kan også kreve ytterligere eksternt utstyr eller medlemskapsavgifter som selges separat. Besøk nettstedet vårt for mer informasjon om bestemte enheter og innholdstilgjengelighet. Tjenestene og innholdets tilgjengelighet via SmartTV kan endres fra tid til annen, uten varsel. \n   Alt av innhold og tjenester som er tilgjengelig via dette apparatet tilhører tredjeparter, og er beskyttet av opphavsrett, patentlovgivning, varemerkelovgivning og/eller annen åndsrett. Slikt innhold og tjenester tilbys kun for personlig, ikke-kommersielt bruk. Du kan ikke bruke innhold og tjenester på andre måter enn de som er autorisert av innholdets eier eller tjenesteleverandøren. Uten begrensning av det ovennevnte, med mindre eieren av det aktuelle tilbudet eller tjenesteleverandøren har gitt uttrykkelig tillatelse, kan du ikke endre, kopiere, republisere, laste opp, legge ut, overføre, oversette, selge, lage avledede produkter, utnytte, eller distribuere på noen måte eller gjennom noe medium, innhold eller tjenester som vises via dette apparatet. \n   DU ERKJENNER UTTRYKKELIG OG SAMTYKKER I AT BRUK AV APPARATET FOREGÅR HELT PÅ EGEN RISIKO MED HENSYN TIL KVALITET, YTELSE OG NØYAKTIGHET. APPARATET, OG ALT INNHOLD OG TJENESTER FRA TREDJEPARTER, LEVERES \"SOM DET ER\", UTEN NOEN FORM FOR GARANTI, VERKEN UTTRYKT ELLER IMPLISERT. TCL FRASIER SEG UTTRYKKELIG ALLE GARANTIER OG VILKÅR MED HENSYN TIL ENHETEN OG ALT INNHOLD OG TJENESTER, ENTEN UTTRYKT ELLER IMPLISERT, INKLUDERT, MEN IKKE BEGRENSET TIL, GARANTI FOR SALGBARHET, ELLER TILFREDSSTILLENDE KVALITET, VELEGNETHET TIL BESTEMTE FORMÅL, OG IKKE-KRENKELSE AV TREDJEPARTERS RETTIGHETER. TCL GARANTERER IKKE NØYAKTIGHETEN, GYLDIGHETEN, BETIMELIGHETEN, LOVLIGHETEN ELLER FULLSTENDIGHETEN AV INNHOLD ELLER TJENESTER SOM GJØRES TILGJENGELIG GJENNOM DETTE APPARATET, OG GARANTERER IKKE AT ENHETEN, INNHOLDET ELLER TJENESTEN IMØTEKOMMER DINE BEHOV, ELLER AT BRUK AV APPARATET ELLER TJENESTENE BLIR UAVBRUTT ELLER FEILFRITT. TCL SKAL IKKE UNDER NOEN OMSTENDIGHETER, INKLUDERT VED UAKTSOMHET, VERKEN I HENHOLD TIL KONTRAKT ELLER SKADE, VÆRE ANSVARLIG FOR EVENTUELL DIREKTE, INDIREKTE, TILFELDIG, SPESIELL ELLER KONSEKVENSIELL SKADE, ADVOKATSALÆRER, UTGIFTER ELLER ANNEN SKADE SOM OPPSTÅR SOM FØLGE AV, ELLER I FORBINDELSE MED, INFORMASJON I, ELLER SOM ET RESULTAT AV BRUK AV, APPARATET, ELLER INNHOLD ELLER TJENESTER SOM DU VÅR TILGANG TIL VIA EN TREDJEPART, SELV OM DE ER ADVART OM MULIGHETEN FOR SLIK SKADE. \n   Tjenester fra tredjeparter kan endres, suspenderes, fjernes, avsluttes eller avbrytes, og tilgang kan deaktiveres når som helst, uten forvarsel, og TCL (produsenten av Thomson-merkede TV-apparater) gir ingen fremstilling eller garanti om at innhold og tjenester forblir tilgjengelige i noen tidsperiode. Innhold og tjenester overføres av tredjeparter via nettverk og overføringsanlegg som TCL ikke har kontroll over. Uten begrensning av alminnelighetene i denne ansvarsfraskrivelsen, frasier TCL seg uttrykkelig ethvert ansvar for eventuelle endringer, forstyrrelser, deaktivering, fjerning eller avbrytelse av innhold og tjenester som gjøres tilgjengelig via dette apparatet. TCL kan pålegge begrensninger på bruk av eller tilgang til enkelte tjenester og innhold, uansett tilfelle og uten varsel eller ansvar. TCL er ikke ansvarlig for kundeservice knyttet til innholdet og tjenestene. Eventuelle spørsmål eller forespørsler om tjenester knyttet til innhold og tjenester bør rettes direkte til den respektive innholds- og tjenesteleverandøren."];

var noChannelListRemind        = ["Ingen kanaler funnet. Kanallisten er tilgjengelig etter kanalsøk.","Automatisk kanalsøk"];
var closeSubtitleRemind   = "Funksjonen vil være tilgjengelig når tekstingen er slått av. Ønsker du å angi dette nå?";

var estickerTitles = ["Svært realistiske bilder","Levende farger","Fantastiske naturtro bevegelser","Dynamisk bildekvalitet","SR UHD-oppskalering","Opplev en verden i 3D","Raskere ytelse","Fremtidig 4K-innhold","Opplev den elektroniske verden","Få tilgang til ekstra innhold","Integrerte digitale tunere","Tilkobling for alle enheter","Flere 4K-kilder","USB-innhold","Ultrarask WIFI","Mobilt innhold på TV","Innhold på mobil enhet","Lokalt innhold","Godkjent av DivX","Sømløst bilde","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Fantastisk seeropplevelse takket være bilder som er fire ganger bedre enn Full HD, på UHD-skjerm","Bredt fargespekter leverer følelser i hver eneste scene med levende rød og smaragdgrønn","4K ramme-interpolering og bakgrunnsbelysning for å redusere problemer med bevegelsesuskarphet","Livaktigheten fra det opprinnelige bildet er forbedret for å produsere et dynamisk uttrykk med strålende kontrast","Se TV-programmer og Bluray-filmer mye skarpere enn før, takket være Super Resolution-teknologi","Opplev 3D-innhold med 3D-TV","En morsommere underholdningsopplevelse med Quad Core-interaksjon, med forbedret ytelse","HEVC (H.265) kodek-støtte for kommende standard for 4K videodistribusjon","En mengde applikasjoner på nett, VOD-tjenester, catch-up TV og Internett-surfing","Se mer med tilleggstjenester og innhold fra dine favorittilbydere","Få tilgang til TV-kanaler i HD uten en ekstra set-top-boks","Koble enkelt til digitale kilder i hjemmet","TV-apparatet er klart for fremtiden, med avspilling i 4K 50/60Hz via HDMI 2.0 med HDCP 2.2","Video- eller bildeinnhold direkte fra USB-minne, harddisk eller kamera på storskjerm i 4K-oppløsning","Siste generasjon 2x2 MIMO og AC-standard leverer superrask trådløs hastighet","Se bilder, videoer, applikasjoner fra mobile enheter på storskjerm, takket være teknologi for skjermspeiling","Bilder, videoer, applikasjoner fra smarttelefonen eller nettbrettet kan vises på storskjerm ","Vis lokalt innhold som bilder og videoer fra enheter som er koblet til et lokalt nettverk","Spill av leide eller egne filmer beskyttet av DivX","Ultra smal ramme og superslankt design","Testet og godkjent av Canal+","Testet og godkjent av TDT Premium"];							

var eManualTextArray = ["Elektronisk bruksanvisning","All grafikk er kun ment til demonstrasjon."];
var frontPanelRemind = "Frontpanel er låst";
var eRPRemind		 = "Butikkmodus kan ikke tilfredsstille kravet til ERP. Er du sikker?";	
var noRelatedChannel = "Ingen tilknyttet kanal";
var option0624Name          = ["BOP","BFS","Hendelse for hendelse","GetUserID","BGM","Reset all","Fabrikkinnstillinger","NRM","DVB-T2 og valg av land","HbbTV-modus"];
var DVBT2AndChoice = ["På","Etter land","Av"];
var hbbtvServiceRemind = "HbbTV-tjeneste kommer snart.";
var insertWord = "Sett inn";		
var viewDetail = "Vis detaljer";							

var remindOAD  = "Programvareoppdatering. En ny anbefalt oppdatering kan finnes på en annen kanal. Godkjenner du å laste den ned, kan det endres til den kanalen automatisk. Ønsker du å gjøre det nå?";

var LEDStatus = ["Blinker", "Normal"];
var netFlixRemind = "Denne funksjonen vil avbryte tilgangen til Netflix’ tjenester til du logger inn igjen.";
var ESNExplanation = "Elektronisk serienummer";
var resetShopRemind = "Systemet tilbakestilles, ikke skru av TV-en";
var initialSelectOption = "Vennligst velg et valg:";
var databaseRemind   = "Systemet har identifisert databasen som skadet av ukjent grunn og bygd den opp igjen automatisk, trykk OK for å fortsette";
var Deactivation = "Deaktivering";
var oadFutureRemind = "Programvareoppdatering. En ny anbefalt programvare blir tilgjengelig %s. Oppdateringen kan ta litt tid, og skjermen kan gå i svart. Ikke slå av mottakeren under oppdateringen. Hvis du godtar denne oppdateringen, må du la mottakeren være på eller i hvilemodus på det planlagte tidspunktet. Ønsker du å motta denne oppdateringen?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Lydutgang";
var bt_soundOutPutTV = "TV-høyttalere";
var bt_soundOutPutBT = "Bluetooth-enhet";
var bt_soundOutPutBT_TV = "Bluetooth og TV";
var bt_refreshBarName = "Enheter";
var bt_settingTips_On = "Slå på Bluetooth og søk etter enheter. ";
var bt_settingTips_Finding = "Søker etter tilgjengelige enheter...";
var bt_settingTips_NoDevice = "Ingen tilgjengelige enheter.";
var bt_deviceList_State_NoConnect = "Ikke tilkoblet";
var bt_deviceList_State_Connecting = "Kobler til...";
var bt_deviceList_State_Connected = "Tilkoblet";
var bt_deviceList_State_Paired = "Parkoblet";
var bt_deviceList_Conncect_Failed_Tips1 = "Tilkoblingen mislyktes.";
var bt_deviceList_Conncect_Failed_Tips2 = "Sjekk at XXX Bluetooth-funksjonen er på";
var bt_deviceList_Conncect_Success = "Koblet til Bluetooth-enhet.";
var bt_deviceList_Disconncect_Success = "Koblet fra Bluetooth-enhet.";
var bt_deviceList_Disconnect = "Er du sikker på at du vil koble fra XXX?";
var bt_tipsTitle = "Tips";
var bt_bluetooth_Pairing_Title = "Bluetooth-paring";
var bt_bluetooth_Input_Pin = "Tast inn PIN:";
var bt_bluetooth_Output_Pin_Tip = "Tast inn PIN XXXX med tastaturet.";
var bt_bluetooth_Pin_Wrong_Tip = "Feil PIN";
var bt_bluetooth_Remove_Pair_Title = "Spørring";
var bt_bluetooth_Remove_Pair_Ask = "Glemme denne enheten?";
var bt_bluetooth_module_error = "Bluetooth-modul feil!";

var applyPictureModeSwitchValue	 = ["Nåværende kilde","Alle kilder"];
var audioDescriptionName = ["Lydbeskrivelse","Høyttaler","Høyttalervolum","Hodetelefon","Hodetelefonvolum","AD volume","Bluetooth-enhet","Volum til Bluetooth-enhet"];
var audioDescriptionOptions = ["Av","Normal","Lydbeskrivelse"];							
var volumeOffRemind = 'Still inn XXX til "På" i innstillingsmenyen.';
var netflixDialogOptions = ["OK","Senere","Ikke vis dette igjen"];
var netflixDialogContent = "Tusenvis av filmer kan sees på Netflix, besøk nå?";
var netflixRemoteDialogContent = "Fjernkontrollen med Netflix-knapp er nå til salgs. Besøk følgende nettside for mer informasjon.\nhttps://store.tcleu.com";
var switchSourceRemind   = " satt inn. Vil du bytte den nå?";							
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sportsmodus";
var resetStadium = "Stadion";
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Avslutt","0","Zoom+",
                       	   "Avslutt",
                       	   "Liste","0","Tekst","Guide","Enter","Avslutt","Meny","Teksting","Info",
                       	   "Stopp",
                       	   "Info","Meny","Avslutt"
                       	   ];
var nscreenTips = "GuideOn hjelper brukeren med å navigere seg gjennom dette store antallet innhold.";
var nscreenContent = 'Steg: 1. Klikk "TCL nScreen" på telefonen.  Koble telefonen til TV-en via samme LAN; 2. Klikk på "GuideOn" for å starte GuideOn; 3.GuideOn gir funksjonalitet som ligner på en skrevet programveiledning ved å informere brukerne angående hvilket TV-innhold som er tilgjengelig;';
var singalBrokenoffTips = "Signalet er avbrutt. Systemet kan ikke avslutte nedlastingen.";
var contentSpan1_1Array_AU = [["STRØM:","KILDE:","MENY:","BACK:","INFO:","HOME:","EXIT:","LISTE:"],
                             ["Turns power on or standby mode","Select the input source",
                              "Show TV settings menu","Go back to the Previous menu or exit a running APP","Viser programinfo",
                             "Går til hjemmesiden", "Go back to the Previous menu or exit a running APP", "Viser kanallisten"]];
var guideDescriptionWords ="Scann inn QR-koden for å laste ned appen GuideOn til din telefon";
var settingNoticeSourceName ="Automatisk kilde";
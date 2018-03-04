
var all_country 	= ["Australië","Oostenrijk","België","Bulgarije","Kroatië","Tjechische Republiek","Denemarken","Finland","Frankrijk","Duitsland",
						"Griekenland","Hongarije","Italië","Luxemburg","Nederland","Noorwegen","Polen","Portugal","Roemenië","Rusland",
						"Servië","Slovenië","Spanje","Zweden","Zwitserland","Verenigd Koninkrijk","Nieuw Zeeland"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Letland","Slowakije","Turkije","Ierland","*","Filippijnen","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"China","*","*","*","*","*","*","Andere","Litouwen"/*新添加的，底层结构体中没有*/,"Oekraïne"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litouwen"];						
				
var all_language 	= ["Tsjechisch","*","Deens","*","*","Duits","Engels","Spaans","Grieks","Frans",
						"Kroatisch","*","Italiaans","Hongaars","Nederlands","Noors","Pools","Portugees","Russisch","Roemeens",
						"Sloveens","Servisch","Fins","Zweeds","Bulgaars","Slowaaks","*","*","Gaelic","*",
						"Welsh","Arabisch","Irlandzki","Lets","*","Turks","Ests","Nederlands"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Oorspronkelijk audio"/*Qaa*/,"Niet gedefinieerd"/*Undetermined*/,"*","Onbekend",
						"Niet gedefinieerd","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskisch","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Białoruski","*","*","Catalaans","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicisch","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","IJslands","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litouws",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romance","*","*","*","*",
						"*","*","*","Samisch","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Oekraïens","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Uit","Aan"];
var okCancel		= ["OK","Annuleren"];
var yesNo			= ["JA","NEE"];
var level			= ["Uit","Laag","Hoog","Middel"];
var manualAuto		= ["Handmatig","Auto"];
var homeShop		= ["Thuis","Winkel"];
var picPreset		= ["Standaard","Dynamic","Natuurlijk","Film","Digitale thuisbioscoop","Gebruiker"];
var picColorTemp	= ["Koel","Normaal","Warm","Warm2","Gebruiker"];
var pic3dNavig		= ["Handmatig","Auto","Halfautomatisch"];
var _3dOptions		= ["3D Modus","3D-naar-2D","L-R Schakelaar","Diepte van Veld"];
var pic3DMode       = ["Uit","2D-naar-3D","Zij-bij-Zij","Boven- en Onderkant","Lijnspreiding"];
var picEcoOptions	= ["Energiebesparing","Lichtsensor","Lokale verduistering","Mix dimmen"];
var picGeoOptions	= ["Geometrie","H.positie","V. positie","Klok","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["R-versterking","G-versterking","B-versterking","R-offset","G-offset","B-offset"];
var souOptions		= ["Voorinstelling geluid","Balans","Audiovertraging","SRS TSHD","Auto volume",
						"SPDIF-type","SPDIF-vertraagd","TV-plaatsing","Audiotaal","Audiokanaal",
						"Audiobeschrijving","Type digitale audio-uitvoer","Dolby professional-instelling"];
var soundOutputoptions =["DAP-uitvoer tv-speaker","Coderingsuitvoer externe AVR"];
var inteligenteqoptions 	=["Gericht","Rijk"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Uit"];
var colorSpace      = ["Auto","Natief","Gebruiker","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Omring virtualizer","Dialoog versterker","Bas versterker","Intelligente luidheid","Media inlichtingendiensten","Grafische EQ","Intelligente EQ" ];
var chOptions		= ["Kanaalscan","Kanaallijst","EPG","Organisator","Kanaaldiagnostiek",
						"timeshift","Ondertitel","Teletekst","Type Kanaallijst"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signaalsterkte","Signaalkwaliteit","Frequentie (KHz)","Service ID","Netwerk ID","Netwerknaam"];
var chScanOptions	= ["Land","Versterkerfuncie","Kanaal scannen","Scan bijwerken","Analoog handm scan",
						["Handm scan kabel","Handm antenne scan","Satteliet handmatig afstemmen"],"Satelliet-antenne instelling","Selecteer favoriete netwerk","Wis de kanaallijst",];
var favNetDes		= "Gelieve uw favoriete netwerk te kiezen";
var tuner			= ["Kabel","Antenna","satelliet"];//Satelite 无翻译
var passError		= "Wachtwoord onjuist!\nGeef het opnieuw op.";
var chType			= ["Analoge kanalen:","Digitale kanalen:"];
var chScanStatus	= ["Status: Scannen","Status: Scan voltooid","Status: Scan annuleren","Status: Scanfout"];
var chScanPara		= ["Frequentie (KHz)","Modulatie","Symbol rate (Ksym/s)","Netwerk ID","Systeem",
						"Instellen","Signaalsterkte","Signaalkwaliteit","Scan-modus","Kanaal ID"];
var chScanParaMHZ      = ["Frequentie (MHz)"];
var chAtvManSys		= ["WEST-EUROPA","OOST-EUROPA","VK","Frankrijk"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Wilt u de kanaallijst wissen?";
var chDeletDes		= "Wilt u het kanaal verwijderen?";
var chOperator		= ["Ziggo","UPC","Andere"];
var chScanType		= ["Digitaal & Analoog","Digitaal","Analoog"];
var chScanMode		= ["Vol","Geavanc","Quick"];
var bookingModes	= ["Opnemen","Herinnering"];
var dayName			= ["zo","ma","di","wo","do","vr","za"];
var monthName		= ["jan", "feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
var filter			= ["Filtro","Type","Subtype"];
var chEpgFirstGenre	= ["Film","Nieuws","Voorstelling","Sport","Kinderen","Muziek","Kunst","Sociaal","Educatie","VRIJE TIJD","SPECIAAL"];
var chEpgSecondGenre= [["Drama","Detective","Avontuur","Science Fiction","Komedie","Soap","Romance","Ernstig","Pornofilm"," "," "," "],
						["Huidige zaken","Weerbericht","Nieuwstijdschrift","Documentaire","Discussie"," "," "," "," "," "," "," "],
						["Voorstelling","Spelvoorstelling","Varietévoorstelling","Praatprogramma"," "," "," "," "," "," "," "," "],
						["Sport","Speciale gebeurtenissen","Sporttijdschriften","Voetbal","Tennis",
							"Teamsport","Atletiek","Motorsport","Watersport","Wintersport",
							"Paardrijden","Vechtsport"],
						["Kinderen","Kleuters","Amusement van 6 to 14","Amusement van 10 to 16","Informatief","Tekenfilms"," "," "," "," "," "," "," "],
						["Muziek","Rock","Ernstig","Volksmuziek","Jazz","Muzikaal","Ballet"," "," "," "," "," "],
						["Kunst","Podiumkunsten","Schone kunsten","Godsdienst","Populaire cultuur",
							"Literatuur","Film","Experimenteel","Uitzenden","Nieuw medium",
							"Kunsttijdschriften","Mode"],
						["Sociaal","Tijdschriften","Economie","Opmerkelijke mensen"," "," "," "," "," "," "," "," "],
						["Educatie","Natuur","Technologie","Medicijnen","Vreemde landen","Sociale wetenschap","Verder onderwijs","Talen"," "," "," "," "],
						["Vrije-tijdsbesteding","Toerisme","Handwerken","Motorrijden","Lichamelijke conditie en gezondheid","Koken","Reclame","Tuinieren"," "," "," "," "],
						["Oorspronkelijke taal","Zwart-wit","Niet uitgegeven","Live-uitzending"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanaal overslaan","Kanaal sorteren","Kanaal bewerken","Kanaal wissen","kanaal swap","kanaalinsertie"];
var chEditPara 		= ["Netwerknaam","Kanaalnummer","Kanaalnaam","Frequentie","Kleursysteem","Geluidssysteem"];
var chSatTitles		= ["Satelliettype","Satelliet-antenne instelling","Selecteer satteliet"];
var chSatEidtOptions= ["Sattelietnaam","Positie","LNB Vermogen","LNB frequentie (MHz)","Disk-ingang",
						"Toon 22KHz","tone burst","Frequentie (KHz)","Symbol rate (Ksym/s)","Polarisatie",
						"Signaalsterkte","Signaalkwaliteit","Satellietstatus"];
var chSatAutoPromt	= [["Alle","Netwerk"],
						["Alle","Gratis"]];
var chSatAutoScanOptions=["Selecteer satteliet","Scan-modus","Kanalen"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universeel",];
var chSatDiSEqCInput= ["Ontkoppelen","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Aan","Uit"];
var chSatToneBurst	= ["Ontkoppelen","tone burst A","tone burst B"];
var chSatPolarization= ["Horizontaal","Verticaal"];
var chSatSetupOptions=["Antennetype","Tuner","Bandfrequentie"];
var chSatAntennaType= ["EnkeleKabel","Universeel"];
var chSatUserBands	= ["Gebruikersband 1","Gebruikersband 2","Gebruikersband 3","Gebruikersband 4","Gebruikersband 5","Gebruikersband 6","Gebruikersband 7","Gebruikersband 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Gedefinieerd door de gebruiker"];
var pleaseSelectSat = "Gelieve eerst satellieten te selecteren!";
var subOptions		= ["Ondertitel","Taal van digit ondertitels","Taal van digit ondertitels 2e","Type v. ondertitel"];
var ttxOptionsCon      = ["Taal v. decodeerpagina","Taal van digit teletekst"];
var subType			= ["Normaal","Auditief gehandicapt"];
var netIntf     	= ["Ethernet ","Draadloos"];
var netConnDes		= ["TV is de netwerkconnectie aan het testen.\nEven wachten",
						"De netwerkverbindingstest is geslaagd!",
						"De netwerkverbindingstest is mislukt."];
var netSsidError	= "De geldige lengte van SSID is 1 ~ 32 tekens. Controleer de SSID.";
var netOthers		= ["PIN-Code"];
var netWlessAutoDes	= ["Verifieer a.u.b. dat de volgende PIN-code is geïnstalleerd in het Toegangspunt voordat u op OK klikt.",
						"Druk a.u.b. binnen 120 seconden op de toets op het Toegangspunt voordat u op OK klikt."];
var netConnRemind	= ["Wachtwoord onjuist!",
						"Bezig met aansluiten. Een ogenblik geduld!",
						"Verbinding geslaagd en IP verkregen!",
						"Link Mislukt",
						"TV is aan het scannen van AP\nEven geduld",
						"Er is geen draadloos apparaat op TV aangesloten!"];
var netWireIpOptions= ["IP instelling","Adres type","IP adres","Subnetmasker","Standaard-gateway","Primaire DNS","Secundaire DNS"];
var netWireConnRemind= ["Voer a.u.b. een waarde in tussen 0 en 255.",
						"Aangesloten met succes!",
						"Type een geldig adres",
						"Aangesloten met succes!",
						"Verbinding mislukt!",
						"Bezig met aansluiten. Een ogenblik geduld!",
						"Gelieve een waarde in te voeren tussen 1 en 223."];
var netFlixOptions	= ["Deactiveren","ESN"];
var netFlixDes	 	= ["Weet u zeker dat u wilt deactiveren?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Software update";
var netUpdateDialogTitle = "Software wordt bijgewerkt";
var netBGDownloadTitle 	= "Downloaden...";
var netUpdateLoadingPrompt= ["Op zoek naar upgrade, gelieve te wachten!",
							"Software wordt bijgewerkt..... Een ogenblik geduld!",
							"Schakel de TV a.u.b. NIET uit tijdens de software-update!",
                            "De vereiste software-update wordt automatisch op de achtergrond gedownload!"];
var netUpdatePrompt= ["Gefeliciteerd, uw softwareversie is de nieuwste!",
						"De nieuwe softwareversie XXXX is gevonden. Wilt u deze nu downloaden? Dit kan even duren, afhankelijk van uw netwerkstatus.",
						"Aanmelden mislukt!",
						"Het is mislukt om gegevens te ontvangen, gelieve later opnieuw te proberen!",
						"Parse Update XML mislukt!",
						"Link Mislukt",
						"Downloaden software is voltooid Wilt u het bijwerken (flashen) van de software nu starten?",
						"Gegevens verloren! Download mislukt!",
						"Pakket controleren mislukt, probeer nogmaals a.u.b.!",
						"Netwerkstoring. Controleer a.u.b. en maak opnieuw verbinding...",
						"Update mislukt. Herstart TV a.u.b.!",
						"Het upgradebestand was onverwacht gewist. Voer de upgrade via netwerk a.u.b. opnieuw uit.",
						"De software is succesvol gedownload in de achtergrond. Wilt u de upgrade uitvoeren?"];
var netUpdateButtonText = ["Download", "Update", "Later", "Nooit", "OK","Vervolgen"];
var autoDetectPrompt = ["De nieuwe softwareversie XXXX is gevonden. Wilt u deze nu downloaden? Dit kan even duren, afhankelijk van uw netwerkstatus.",
						"De nieuwe softwareversie XXXX is gevonden. Wilt u de update nu uitvoeren?",
						"Het upgradeprocess via netwerk was de laatste keer afgebroken. Voer de upgrade opnieuw uit.",
                        "Het downloaden van nieuwe software versie XXXX is niet voltooid. Wilt u nu doorgaan?",
                        "Software is gedownload, wilt u nu bijwerken?"];
var sysOptions		= ["E-Handleiding","OSD-taal","Tijd instellen","Vergrendel","Invoerinstellingen",
						"Software update","Locatie","HbbTV modus","Cookies","Gemeenschappelijke interface",
						"Geavanceerde instellingen","Reset Winkel","LED-indicator"];
var sysResetDes		= "Weet u het zeker?";
var sysMenuLangOptions=["Taal","Gekozen audiotaal","Voorkeur audiotaal 2e"];
var sysTimerOptions	= ["Tijdzone","Regionaam","Klok","Slaaptimer","Auto stand-by", "Country region"];

var sysTimeZone		= ["As-zender","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Uit","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Uit","4 uur","6 uur","8 uur"];
var sysRegionName	= ["Madrid ","Canarische Eilanden"];
var sysClockOptions	= ["Auto synchronisatie","Datum","Tijd","Uitschakeltimer","Tijd instellen",
						"Kanaal aanzetten","Uitschakeltimer","Tijd instellen"];
var sysTimer		= ["Uit","Dagelijks","Eenmaal"];

var sysInputSet		= ["Geen label","DVD","Blu-ray","HDD","DVDR",
						"HD-rec.","Spel ","VCR","PC","Digitale STB",
						"HD dig STB","Camera","Recorder","Anders"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-video"];
var sysUpdate		= ["Met USB","Met Netwerk","Op kanaal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Kan de nieuwe software niet vinden!",
						"De nieuwe softwareversie XXXX is gevonden. Wilt u de update nu uitvoeren?",
						"Gelieve de USB-stick in te voegen.",
						"Pakket controleren mislukt, probeer nogmaals a.u.b.!",
						"Tijdens het bijwerken van de firmare NIET USB-dongle uittrekken en TV uitschakelen!!",
						"De software is succesvol bijgewerkt. \nTV zal dan automatisch opnieuw starten!",
						"De nieuwe softwareversie XXXX is gevonden. Wilt u deze nu downloaden? Dit kan even duren, afhankelijk van uw netwerkstatus.",
						"Downloaden...",
						"Downloaden software is voltooid Wilt u het bijwerken (flashen) van de software nu starten?",
						"Update mislukt!",
						"Zoeken naar upgradebestanden",
						"De software is succesvol bijgewerkt.\nHerstart de TV nu a.u.b."];
var sysProductInfo	= ["Huidige versie","Productnaam","Fabrikantnaam","Chassisnaam"];
var sysCiDes		= ["CI-kaart ontbreekt"];
var sysAdOptions	= ["DivX(R) registratie","DivX(R) uitschrijving","T-Link","Authorization Error","Afmeldbevestiging",
						"Verhuurbevestiging","Verhuur Verlopen","Bluetooth declaratie-ID"];
var sysRegistDes	= ["U dient uw apparaat te registreren om DivX beschermde video's te kunnen afspelen",
						"Registratiecode:",
						"Registreer u bij http://vod.divx.com"];
var sysDregistDes	= ["Uitschrijfcode:",
						"Schrijf uit op http://vod.divx.com",
						"Doorgaan met registratie?"];
var mediaAuthorization = ["Uw apparaat is niet geautoriseerd deze door DivX(R) beveiligde video af te spelen."];
var deregistrationConfrimation = ["Uw apparaat is al geregistreerd.","Wilt u echt deregistreren?"];
var rentalConfirmation = "De DivX(R) verhuur heeft XXXX van YYYY weergaves verbruikt. Verdergaan?";
var rentalExpired 	= "De DivX ®-verhuur is XXXX van de YYYYY beurten gebruikt. De DivX verhuur is verlopen.";
						
						
var sysLockOptions	= ["Kanaal blokkeren","Tijdsinterval vergrendelen","Programma blokken","Ingangsblokkering","Vergrendeling voorpaneel","Vergrendelinstallatie",
						"Verander wachtwoord","Max geluidsvolume","Alles verwijderen"];
var sysTimeIntervals= ["Vergrendel type","Starttijd","Eindtijd"];
var sysRatingOptions= ["Geen","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Beoordeel voor volwassenen (Spanje)"];
var changePass		= ["Verander wachtwoord","Nieuw wachtwoord","Wachtwrd herhalen"];
var changePassDes	= ["Wachtwoord onjuist!\nGeef het opnieuw op.",
						"Wachtwoord is niet goed.\nGeef het opnieuw op.",
						"Wachtwoord succesvol ingesteld!",
						"Deze code is te simpel om te worden ingesteld als wachtwoord.\nVoer nogmaals in!"];
var sysPowerOnChOptions= "Modus selecteren";
var sysPowerOnCh	= ["Laatste status","Gebruiker selecteren"];
var netWlessSecu    = ["Open","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Geen","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Niet ondersteund"];
var netWlessSecu3	= ["Geen","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Niet ondersteund"];
var netOptions		= ["internetconnectie","Interface","Draadloos-instellingen","IP-instellingen","Informatie",
						"connectietest","DLNA","TCL nScreen","Netflix-instellingen","WiFi TV-link",
						"Adres type","IP adres","Subnetmasker","Standaard-gateway","Primaire DNS",
						"Secundaire DNS","SSID","BSSID","SSID invoeren a.u.b.:","Gebruikers-ID"];
var chEditDes		= ["Gedupliceerd kanaalnummer!","Druk op de rode toets om het huidige teken te verwijderen!","Ongeldige kanaalnummers"];
var chEpgNoProgram	= "Geen programma-info op dit moment, zoek eerst naar kanalen!";
var chEpgWords		= ["Programmagids","Geen programmagegevens.","Kanaal geblokkeerd","Geen programma-informatie.","Geen programma-titel."];
var chEpgBooking	= ["Programmering Info", "Kanaalnummer","Startdatum","Starttijd","Eindtijd",
						"Herhaaltype","Schematype","Toevoegen","Vervangen","Wijzigen",
						"Toevoegen/Modificeren"];
var epgHotKey		= ["Vorige dag","Volgende dag","Filtro","Planningslijst","Planning toevoegen"];
var chEpgBookRemind	= ["Incorrecte Starttijd","Incorrecte Eindtijd","Gedupliceerd Tijdschema","Succesvol opgeslagen.","Succesvol Verwijderd."];
var chSchePara		= ["Planningslijst","Starttijd","Startdatum","Programmatitel","Kanaalnaam",
						"Tijdsduur","Herhalen","Tijdschema","Bewerken","Wissen"];
var dateTimer		= ["Eenmaal","Dagelijks","Wekelijks"];
var scheduleDeleteReminds="Wilt u dit schema verwijderen?";
var scheduleNoLists	= "Er is geen schemalijst. Druk op de \"Rode\"-toets om er een toe te voegen.";
var chListWords		= ["Kanaallijst","Selecteer lijst","Versterkerfuncie","Toevoegen aan Favorieten","Verwijderen",
						"Kanaallijst selecteren","Tunermodus selecteren","Verwisselen"];
var chListType		= ["Alle","Digitaal","Analoog","Radio","Gratis","Favorieten"];
var chAutoScanOptions=["Selecteer Provider","Kanaaltype","Kanaal scannen"];
var souSoundType	= ["Ongeldig","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dubbel1","Dubbel2","Dubbel2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","NICAM dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muziek","Film","Duidelijke stem","Standaard","Gebruiker"];
var picAdRgbMode	= ["Uit","Alleen Rood","Alleen Groen","Alleen Blauw"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamic Contrast","LED Bewegingsduidelijkheid",
						"Huidkleur","Filmmodus","Spelmodus","Kleurtemperatuur","Wwitbalans",
						"Stilzetten","Zwarte Stretch","Overscan","Gamma","HDMI modus","10P wit evenwicht","Kleuruitbreider",
						"Vermindering van het vervagen","Vermindering van het trillen","Kleurruimte","Bewegingsduidelijkheid"];
var pic10Pwhite     = ["Interval","Rood","Groen","Blauw","Resetten","Kleur","Geel","Cyaan","Magenta"];
var picMotionClarity = ["Bewegingsmodus","Bewegingsinterpolatie","LED Bewegingsduidelijkheid","Vermindering van het vervagen","Vermindering van het trillen","Resetten"];
var picMotionMode   = ["Auto","Film","Soepel","Wissen","Sport","Klant"];
var picResetDes		= "Alle persoonlijke instellingen worden teruggezet. Weet u zeker dat u de geselecteerde actie wilt uitvoeren?";
var pic10PReset     = "Weet u zeker dat u de 10P witbalans wilt herstellen?";
var picMotionReset  = "Wilt u de bewegingsduidelijkheid opnieuw instellen?";
var picColorSpaceReset    = "Weet u zeker dat u de kleurruimte opnieuw wilt instellen?";
var picOptions		= ["Beeldmodus",
						"Achtergrondlicht","Helderheid","Contrast","Verzadiging","TINT","Scherpte","Kleurtemperatuur","Schermmodus","Autoformaat",
						"Verbetering van sport","3D","3D navigatie","ECO Instellingen","Geometrie",
						"Geavanceerde instellingen","Beeldmodus toepassen","Beeldterugstelling"];
var picSize			= ["16:09", "4:3 formaat", "14:9 formaat", "Cinerama",
						"16:9 zoom", "16:9 zoom","14:9 zoom","Strukket zoom","Bred zoom",
						"Zoom 2","Zoom 2","Scherm Eigen Overeenkomst","Punkt for punkt","Origineel","Panorama"];
var others			= ["Geluidssterkte","Uitzending","Wachtwoord","Status","Opslaan","Vervangen","Start","Afsluiten","Zoeken","Wissen",
						"Geen","Automatisch","Scan","Beveiliging","Verbinden","Verversen","Opnieuw","Stop","Instellingen","Kanalen",
						"Bewerken","Invoeren","Signaal!","Einde","Stereo","Audio","Bron","Geen audio","Tips","Resetten",
						"Klant","Instellen","Opslaan","Gebruiker","Sluit toetsenbord","Beveiligingsmodus","Elke dag","PVR-lijst"];
var direction		= ["Links","Rechts","Omhoog","Omlaag"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D +"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Onbekend"];
var soundChannels   = ["Onbekend","Mono","Sub","Dubbel mono","Stereo","Stereo Sub","Stereo Dolby Surround","Omgeving 2-kanaals","Omgeving","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1ch","4.1ch","5.1 kanalen","7.1 kanalen","Gezamenlijke Stereo","Fmrdo Mono","Fmrdo Stereo","FM Mono Nicam Mono","FM Mono Nicam Stereo","FM Mono Nicam Dual","Links","Rechts","Andere"];
var prompts			= ["Beeldinstelling die het beste past bij uw kijkomgeving.",
						"Helderheidsniveaus aanpassen. Hoe dichter bij 100, hoe helderder.",
						"Niveaus voor contrast aanpassen. Hoe dichter bij 100, hoe groter de donker-lichte beeldverschillen zijn",
						"Verzadigingsniveaus aanpassen. Hoe dichter bij 100, hoe sterker de kleur.",
						"Niveaus voor scherpte aanpassen. Hoe dichter bij 100, hoe duidelijker de details.",
						"Niveaus voor achtergrondverlichting aanpassen. Hoe dichter bij 100, hoe helderder het scherm.",
						"Niveaus voor tint aanpassen. Deze instelling wijzigt de kleurtonen.",
						"Selecteer de beeldindeling die het best past bij het programma dat wordt bekeken.",
						"Energiebesparingopties configureren.",
						"Pas de scherm geometrie-instellingen aann wanneer u een apparaat via de PC aansluit.",
						"Meer geavanceerde beeldinstellingen selecteren.",
						"Alle beeldinstellingen terugstellen op standaard waarden.",
						"Selecteer de geluidsmodus die het beste past bij uw persoonlijke voorkeur.",
						"Pas de volumebalans aan tussen het linker en rechter kanaal.",
						"Geluid Ophaal Systeem TruSurround HD biedt rijke geluidsprestaties en duidelijkheid op lage en hoge frequenties.",
						"Digitaal Interface Formaat het digitale geluid van de TV-uitgang naar home theater audio apparatuur aansluiten.",
						"Selecteer de audiotaal die het beste past bij uw persoonlijke voorkeur.",
						"Sta de slechtzienden toe om te genieten van TV-programma's.",
						"Test uw TV-beeld, geluid en signaal.",
						"Selecteer het type kanaallijst dat het beste past bij uw TV-signaal.",
						"Selecteer de taal voor de ondertiteling van programma's weergegeven onderaan het scherm.",
						"Bekijk het huidige kanaal tekst en afbeeldingen.",
						"Digital Living Network Alliance. Geniet van muziek, foto's en video via het thuisnetwerk van andere apparaten zoals een PC.",
						"De inhoud van uw smartphone op de TV weergeven en de smartphone gebruiken als een afstandsbediening voor de TV.",
						"Inhoud van een Miracast-compatibel Androïde apparaat op uw TV-scherm weergegeven.",
						"Plaats een slot up uw TV.",
						"Selecteer een naam voor uw apparaat.",
						"Selecteer uw kijkomgeving.",
						"Stel alle Systeeminstellingen terug op de standaard waarden."];
var initialTitle	= ["Welkom","Eerste instelling"];
var initialPrompt	= ["Uw eerste Instelling nu uitvoeren en een wereld van opwindende ervaring wacht op u!",
						"Kies de taal:",
						"Selecteer a.u.b. uw land:",
						"Kies uw locatie:",
						"Selecteer a.u.b. uw type netwerkverbinding:",
						"Selecteer a.u.b. de aansluitmodus van uw draadnetwerk:",
						"Er kon geen verbinding gemaakt worden met xxxxxxxxx! Gelieve het toestel te verbinden volgens de volgende Diagram of Selecteer links om opnieuw in te stellen.",
						"Verbonden met xxxxxxxxx! Selecteer rechts om verder te gaan.",
						"1) Uw TV heeft al een ingebouwde draadloze adaptor\n2) Of, als een draadloze USB adaptor is geleverd, sluit het dan op uw TV aan.Selecteer dan de draadloze netwerk verbindingsmodus.",
						"Scannen is bezig. Een ogenblik geduld...",
						"Er is geen draadloos apparaat op TV aangesloten!",
						"Zorg ervoor dat de volgende PIN-code op de AP is geïnstalleerd voor u op de \"Volgende\"-knop klikt.",
						"Gelieve te drukken op de drukknop op het Toegangspunt binnen 120 seconden voordat u Rechts indrukt!",
						"WPS (Wi-Fi Beveiliginginstelling)",
						"PIN-code (Persoonlijke Identificatie Nummer)",
						"PBC (Drukknop Configuratie)",
						"De volgende inhoud kan alleen worden geopend met een netwerkverbinding. Wilt u de netwerk instelling overslaan?",
						"Er zijn nieuwe software-updates voor u om te downloaden, dit kan even duren afhankelijk van de status van uw netwerk.",
						"Update uw TV-software om altijd van de nieuwste eigenschappen en diensten te genieten.",
						"U zal niet genieten van de nieuwste functies en diensten. Wilt u de Software-Update overslaan?",
						"Druk op de knop rechts om door te gaan.",
						"Schakel niet uit tijdens het updaten omdat dit kan leiden tot TV-storing.",
						"Als u niet bijwerken wilt, selecteer dan Nee.",
						"Bezig met bijwerken, een moment geduld a.u.b.",
						"U kunt ook de software bijwerken in SYSTEEM/SOFTWARE-UPDATE.",
						"Het geselecteerde land vraagt om een wachtwoord instelling.\nDe code voor uw TV instellen en bevestigen.",
						"This code is too simple.\nPlease use different digits.",
						"Gefeliciteerd! Eerste instelling is voltooid. U kunt uw configuratie via het hoofdmenu en verwante sub-menu's wijzigen.",
						"Selecteer a.u.b. de beveiligingmodus:",
						"Selecteer draadloos netwerk verbindingsmodus:",
						"Netwerk"];
var initNetCabAndDonRe = ["Geen netwerkkabel aangesloten, sluit alstublieft een netwerkkabel aan!","Geen ingebouwde draadloze adapter of geen draadloze USB-adapter wordt geleverd."];
var initChPrompt = ["Installatie van de TV-zender","Selecteer type antenne-scan.","Automatische afstemming verwerken...","De volgende antenne-kanalen zijn gevonden:","Selecteer a.u.b. het Kabel scantype.","Selecteer een exploitant uit de volgende lijst.","Configureer a.u.b. de scaninformatie","De volgende Kabelkanalen zijn gevonden:","Selecteer a.u.b. één provider uit de volgende lijst","Selecteer a.u.b. satellieten om de geselecteerde satelliet te scannen of bewerken","Stel a.u.b. de satellietparameters in","De volgende kanalen werden gevonden en het scannen van de kanalen kan ook opnieuw worden uitgevoerd in de kanaal/kanaal scan"];
var initClockPrompt = ["Verkrijg de netwerk verstrekte tijd!",
						"Gelieve datum en tijd in te stellen:"];
var initialOptions	= ["Omgeving","Netwerkinstelling","Software update","Kanaalinstallatie","Klok"];
var initialHotkeys	= ["Terug","Selecteren","Volgende"];
var initLocations	= ["Thuis","Winkel","Winkelen met demo"];
var initNets		= ["Bedraad","Draadloos","Ik heb geen netwerkverbinding"];
var initWireManuals	= ["IP adres","Subnetmasker","Standaard-gateway","Primaire DNS","Secundaire DNS"];
var initSoftUpdates = ["Update nu","Update later"];
var initChannelIns	= ["Vervolgen","Ik wil geen kanalen installeren"];
var initChScanTypes	= ["Digitaal & Analoog","Digitaal","Analoog","Ik wil geen scan uitvoeren"];
var initChDvbts		= ["Antenne ATV-kanalen:","Antenne DTV-kanalen:"];
var initChDvbcs		= ["ATV-kabelkanalen:","DTV-kabelkanalen:"];
var initChDvbss		= ["Satellietkanalen:"];
var initChDvbSOther	= ["Ik wil geen satellietscan uitvoeren"];
var initEndConnectedStatus= ["Verbinding verbroken","WiFi verbonden","Bedraad aangesloten"];
var initEndInstallations= "XXXX kanalen geïnstalleerd";
var initEndUpdate	= ["Bijgewerkt"];

var audioScenes 	= ["Bureaublad","Muurmontage"];			
var screenSavers	= ["Geen programma-info op dit moment, zoek eerst naar kanalen!",
						"Geen signaal!",
						"Gecodeerd",
						"Alleen Gegevens",
						"Audioprogramma",
						"Geen audio en video",
						"Onbeschikbaar",
						"Geen teletekst",
						"Geen programmagegevens.",
						"Programma geblokkeerd!",
						"Programma geblokkeerd!\nDruk op OK en voer uw code in.",
						"Geen programma-informatie.",
						"Program niet gepast voor minderjarigen. \nKlik op OK en voer uw code in.",
						"Kanaal geblokkeerd",
						"Kanaal vergrendeld!\nDruk op OK en voer uw code in.",
						"Invoer vergrendeld!\nDruk op OK en voer uw code in.",
						"Niet ondersteund!",
						"Deze service is momenteel niet beschikbaar",
						"Invoer geblokk.",
						"Geen programma-titel.",
						"Geen functie"
						];
var chBookingPromt	= ["Het huidige kanaal heeft een geplande opname, TV zal beginnen op te nemen.",
						"Een geplande opname is gevonden.\n Schakelaar naar XXXX om op te nemen",
						"Het huidige kanaal heeft een herinnering.",
						"Een geplande herinnering is gevonden.\n Schakelaar naar XXXX"];
var timeUnit		= ["Sec","min"];
var ciPromt			= ["De gegevens van het netwerk zijn veranderd. Als u wilt bijwerken kunt u een update scan uitvoeren.",];
var othersPromt		= ["Even wachten",];
var menuOptions		= ["Beeld","Geluid","Kanaal","Netwerk","Systeem"];
var optionOptions	= ["Beeldmodus","Voorinstelling geluid","Stilzetten","T-Link","timeshift","PVR","Planningslijst","Instellingen"];
var optionTLinkPromt= [["Auto-aanschakelen staat aan","Auto stand-by","Gidsmenu"],
						["Inschakelen","Stand-by","Versterkervolume"]];
var powerPromt		= ["TV zal snel uitschakelen! Druk a.u.b. op een willekeurige toets om te annuleren."];
var ttxLanguage		= ["WEST-EUROPA","OOST-EUROPA","Russisch","Arabisch/Hebreeuws","Farsi","Arabisch","Białoruski","Grieks","Turks"];
var ttxOptions		= ["Tonen","Subpaginas schakelen","Taal","Alarmpagina","Laatste nieuws"];
var weekday         = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
var lcnConfflict	= "De ontvangst van dit HD-programma is verstoord. Er is een SD-versie via kanaal %d beschikbaar.";
var inShopMode		= "Uw TV bevindt zich in de winkelmodus. Selecteer: 'Systeem' en 'Locatie' wijzigen in het menu voor thuismodus.";
var nitRefresh		= "De netwerkgegevens zijn veranderd. Wilt u een update scan maken?";
var picHDMIMode     = ["Auto","Grafische","Video"];

var glassRemind    	= ["Gelieve uw 3D-bril te koppelen met de TV\n (Houd aan / uit-toets op 3D bril ingedrukt).","Uw 3D bril zijn aangesloten op de TV",""];
var pvrRemind 		= ["Verwijder het USB-apparaat niet of schakel niet uit"];
var pvrConName   	= ["PVR","Programma-informatie:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Opgenomen video is opgeslagen in \"pvr\"-map."],"Stop","Opnemen","uur","Minuut","Tijdsduur","Tips","Gebruik de pijltoetsen om de opname duur in te stellen."];
var pvrDisRemind 	= "Steek voor opname a.u.b. een USB-stick in.";
var pvrRemindWords  = ["Wilt u afsluiten?",
							"Wilt u stoppen met opnemen en bladeren door de opgenomen bestanden?",
							"Disk is uitgeworpen.",
							"Er is niet genoeg vrije ruimte.  ",
							"Geen opgenomen bestanden. Beginnen met opnemen.",
							"PVR kan niet in een versleuteld kanaal starten.",
							"Functie niet beschikbaar",
							"Succesvol opgeslagen.",
							"Wilt u het opnameproces stoppen, en ingangsbron veranderen?",
							"TV zal de huidige opname stoppen. Wilt u afsluiten?",
							"PVR-opname heeft TV-signaal nodig voor goede werking, controleer uw signaal."];
var pvrChangeCh 	= ["Wilt u van kanaal veranderen?",
							"Wilt u het opnameproces stoppen, en kanaal veranderen?"];
var pvrChangeToPIN8	= ["Wilt u de bron wijzigen van het apparaat aangesloten op de SCART-ingang?",
				    		"Wilt u het opname proces stoppen en de bron veranderen naar SCART-ingang?"];
var pvrChangeToCEC  = ["Wilt u de bron veranderen voor het apparaat aangesloten op een HDMI-ingang?",
				  			 "Wilt u het opname proces stoppen en de bron wijzigen van het toestel aangesloten op een HDMI-ingang?"];
var pvrGuideJump    = ["Wilt u EPG invoeren?",
							"Wilt u het opnameproces stoppen, en EPG invoeren?"];
var pvrMediaJump    = ["Wilt u Media invoeren?",
							"Wilt u het opnameproces stoppen, en Media invoeren?"];
var timeshiftExtra	= ["Stoppen met deeltijdfunctie &Van kanaal veranderen?",
						"Wilt u stoppen met de tijdverschuiving, en de bron wijzigen naar het apparaat aangesloten op de SCART-ingang?",
						"Wilt u stoppen met de tijdsverschuiving, en de bron wijzigen naar het apparaat aangesloten op een HDMI-ingang?",
						"Tijdsversch. start niet in versleuteld kanaal.",
						"Wilt u stoppen met de tijdverschuiving en EPG invoeren?",
						"Stoppen met deeltijdfunctie & veranderen van TV naar USB mode?",
						"Stoppen met deeltijdfunctie &Van ingangsbron veranderen?",
						"Steek voor opname a.u.b. een USB-stick in.",
						"De schijfgrootte is niet voldoende.",
						"TV zal de huidige tijdverschuiving beëindigen. Wilt u afsluiten?"];
var timeshiftStatus	= ["Snel Terug spoelen","Stop","Afspelen","Pauze","Snel Vooruit spoelen"];
var pvrPowerOffRemind= ["Standby-opname","Stand-by","TV neemt nu op, wilt u verder blijven opnemen wanneer de TV zich in de standby-modus bevindt?"];
var timeshiftInitTitle= "Schijf installeren";
var timeshiftInitReminds= ["Deze wizard wordt gebruikt  de voor instelling van de USB-schijf. Selecteer de instelfunctie.",
						 "Voor betere prestaties raden wij aan om de USB-schijf te formateren. Dit zal alle gegevens wissen.",
						 "Selecteer bestandsgrootte voor deeltijdfunctie.",
						 "Formatterende",
						 "Er is niet genoeg vrije ruimte.  ",
						 "Deeltijdfunctiebestand creëren",
						 "Snelheid testen",
						 "De schijfsnelheid is te laag (< %f MB/sec) om deeltijdfunctie in te schakelen!",
						 "Schijf is klaar voor deeltijdfunctie, wij adviseren een schijf (met een snelheid > %f MB/sec) voor betere prestaties.",
						 "Schijf is klaar voor deeltijdfunctie,"];
var timeshiftInitButtons= ["Formatteer","Sla over","Annuleren","OK","Einde","Afsluiten"];
var timeshiftInitOther=["Schijfsnelheid","MB/sec"];

var selectChoice	= "Weet u het zeker?";
var chAtvStore		= "Beaar als XXXX";
var chEpgFirstGenreUK= ["Film","Nieuws en Feiten","ENTERTAINMENT","Sport","Kinderen","Educatie","Levensstijl","Drama"];
var homePageTitleList = ["APPS","TV","VIDEO 'S","Startpagina"];
var homePageFavAndAllName  = ["Favoriete Apps","Alle Apps"];
var homePageBackUp = ["E-Handleiding","GidsAan"];
var homePageRemind   = ["Volledige functies zijn enkel beschikbaar na netwerkverbinding.","Uw TV beschikt nog niet over kanalen. Programma's zijn beschikbaar na het kanaal scannen.","Geen programma","Zoek nu naar kanalen?"];
var homePageHistory = ["Geschiedenis"];
var miracastTitle = ["WiFi TV-link","TCL-apparaat"];
var miracastRemind=["U kunt met WiFi TV-link op draadloze wijze (d.w.z. zonder kabels) het scherm en geluid delen van uw apparaat, zoals een smartphone of tablet, met uw TV. Hierdoor is het mogelijk gelijkertijd op uw TV te zien wat uw smartphone of tablet weergeeft. U kunt bijvoorbeeld een video op uw smartphone of tablet afspelen en deze gelijktijdig op uw TV weer te geven, of u kunt uw tablet als een spelconsole gebruiken met het beeld weergegeven op het grote scherm van uw TV.","WiFi-tv-verbinding op de tv is gereed. U kunt nu beginnen met het delen van uw apparaatscherm met de tv.","Bezig met aansluiten. Een ogenblik geduld!","Verbinding mislukt!","Kan geen verbinding maken. Gelieve te controleren!"];
var homePageLittleWin = ["Instellingen","Media","Fav kanalen","Smart TV","EPG"];

var hbbtvStopRemind  = ["Wilt u stoppen met playback?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Druk op optie voor meer informatie";
var emptyListInfo = "Er is geen apparaat met de TV verbonden!";
var optionVideoListArray_1 = ["Beeldmodus", "Voorinstelling geluid", "Afspeelmodus", "Schermmodus", "3D Modus", 
							  "L-R Schakelaar", "Diepte van Veld", "Ondertitel", "Geluid", "Titel", "Hoofdstuk", "Info"];
var optionVideoListArray_2 = ["Beeldmodus", "Voorinstelling geluid", "Afspeelmodus", "Schermmodus", 
							  "Ondertitel", "Geluid", "Titel", "Hoofdstuk", "Info"];
var bottomTipsText = ["Afspelen/Pauze", "Snel Terug spoelen", "Snel Vooruit spoelen", "Afspeellijst", "Instellingen"];
var picturePresetArray = ["Standaard", "Dynamic", "Natuurlijk", "Film", "Gebruiker"];
var videoPlayModeArray = ["Alles herhalen", "Herhaal Één", "Normaal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Bred zoom", "Zoom 2", "Zoom 2", "Strukket zoom", "Automatisch"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 zoom", "16:9 zoom", "16:9 zoom", "Automatisch"];
var Mode3DArray = ["Uit", "2D-naar-3D", "Zij-bij-Zij", "Boven- en Onderkant", "Lijnspreiding"];
var videoOptionListArray = ["Uit", "Nummer", "Ondertitel", "Titel", "Hoofdstuk"];
var subMenuTitleText = "Ondertitel";
var langMenuTitleText = "Audiotaal";
var titleMenuTitleText = "Titel";
var mode3DMenuTitleText = "3D Modus";
var langInfoText = "Nummer";
var STOP_RESUME_INFO = "Stop-Hervat";
var playListName = "naam";
var eb_tips = "Tips";
var ok_button = "OK";
var eb_info = ["Audio decodeerfout.", "Video decodeerfout.", "Audio-formaat niet ondersteund.", 
			   "Videoformaat niet ondersteund.", "Kan dit bestand niet openen", "Afspeelfout, probeer het opnieuw",
			   "Bestandsformaat niet ondersteund", "Oeps!Speler is gestopt.",
			   "Bestandspad bestaat niet of is ongeldig.\nPlaats het opslagmedium nog een keer en probeer opnieuw.",
			   "Doorgaan met afspelen van de vorige\n afspeelstatus?"];
var frameTitleText = "Nieuw apparaat";
var eb_quit_info = "Weet u zeker dat u wilt afsluiten?";
var eb_yes = "JA";
var eb_no = "NEE";
var offinfo = "Uit";
var naInfo = "Nul";
var consoleInfoArray = ["Snel Terug spoelen", "Snel Vooruit spoelen", "Afspelen/Pauze", "Afspeellijst"];
var cantOperateText = ["Functie niet ondersteund."];
var chapterChangeInfo = "Alleen de hoofdstukken 1 tot en met XXXX zijn beschikbaar.";
var metaDataArray = ["Titel/Editie metagegevens:", "Hoofdstuk metagegevens:", "Audio Metadata:", "Ondertitel metagegevens:"];
var metaTitleInfo = "Titel";
var metaChapterInfo = "Hoofdstuk";
var videoLoadingInfo = "Analyseren van...";
var listLoadingInfo = "Bezig met laden...";
var pgInfo = "Wettelijke Beoordeling:";
var fileNameText = "naam";
var fileDateText = "Datum";
var fileSizeText = "Grootte";
var fileDurationText = "Tijdsduur";
var fileDirectorText = "Regisseur";
var fileCopyrightText = "Auteursrecht";
var fileArtistText = "Artiest";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "Jaar";
var fileGenreText = "Genre";
var mainListArray = ["Alle", "Beeld", "Video", "Muziek"];
var sortArray = ["naam", "Datum"];
var parserArray = ["Normaal", "Recursieve"];
var emptyTipsInfo = "Oeps. Geen ondersteund bestand gevonden.";
var emptyFolderInfo = "Oeps. Geen ondersteund bestand gevonden.";
var sortName = "Sorteren op";
var parserName = "Parser";
var divx_str1 = "DivX(R) registratie";
var divx_str2 = "DivX(R) uitschrijving";
var infor_str = "Info";
var quickMenuEmptyText = "Geen beschikbare opties.";

var musicSoundPresetArray = ["Standaard", "Film", "Muziek", "Duidelijke stem", "Gebruiker"];
var musicInformationArray = ["naam", "Artiest", "Album", "Genre:", "Jaar:", "Tijdsduur:"];
var playListName = "naam";
var playTipsInfo = ["U speelt het eerste bestand af.", "U speelt het laatste bestand af."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artiest";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Voorinstelling geluid";
var optionBGMInfo = "Speel af op de achtergrond";
var optionAudioOnlyInfo = "Alleen audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX is aangesloten op TV!";
var tvRemoteTitle		= "TCL nScreen";
var tvRemoteDeveloper	= "De applicatie was ontwikkeld door TCL";
var tvRemoteDeviceTitle	= "Apparaatnaam:";
var remoteOption		= ["Media Sharing","Afstandsbediening","Help","Informatie","Smart Connect"];
var remotebottom		= "Gelieve de \"TV Afstandsbediening\" te downloaden naar uw smartphone";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Foto's, video's en muziek delen met TV via telefoon.",
							"Stappen: \n 1. Klik op \"TV Afstandsbediening\" op telefoon. Verbind de telefoon met de TV via hetzelfde WiFi-netwerk; \n 2. Klik op \"Media Delen\" om door de mediabestanden te bladeren; \n 3. Verzend media naar TV voor het afspelen (met een van de volgende opties)",
							"      a) Sleep folders/bestanden naar het TV-icoontje boven in het scherm;\n      b) Zwaai de telefoon richting de TV om het eerste bestand te starten;\n      c) Speel de media af op de telefoon en klik op het \"TV Sharing\"-icoontje;",
							"   4. Schud de telefoon tijdens weergave op de TV om het vorige of volgende bestand af te spelen."];
var controlReminds		= ["Uw telefoon als een afstandsbediening gebruiken om de TV te bedienen.",
							" ",
							"Stappen: \n 1. Klik op \"TV Afstandsbediening” op telefoon. Verbind de Telefoon met de TV via hetzelfde WiFi-netwerk; \n 2. Klik op \"Afstandsbediening\" voor het bedienen van de TV."];
var helpDeviceWords		= "Multischerm interacties";
var helpBottom			= " In deze tijden van Cloud Technologie, gaat smart-apparatuur zoals telefoons hand in hand met TV. Deel media op multischermen met uw familie en bedien uw TV via telefoon! ";
var helpReminds			= ["Voorbereidingen\n 1. Download en installeer: \"TV Afstandsbediening\" van Google Play of Apple Store. \n 2. Verbind de telefoon met de TV via hetzelfde WiFi-netwerk.",
							" ",
							"Telefoonaanbevelingen\n   1. CPU: hoger dan 800MHz\n   2. Geheugen: minstens 80MB vrije ruimte",
							" ",
							"Vrijwaring\n als \"TV Afstandsbediening\" niet beschikbaar is op uw telefoon neem dan contact op met de telefoonfabrikant."];
var helpButtons			= ["Vorige","Volgende"];
var aboutReminds		= ["TCL nScreen","De applicatie was ontwikkeld door TCL"];
var aboutExit			= "Afsluiten";
var smartReminds		= ["Snelle en slimme verbinding tussen TV en telefoon.",
							" ",
							"Stappen \n 1. Verbind TV en smartphone met hetzelfde LAN. Klik op \"TV Afstandsbediening\" op smartphone.\n 2. Klik op \"Slimme Verbinding\" om de QR-code te scannen. \n 3. In de uitzendmodus druk op de INFO-toets op de TV Afstandsbediening voor 4 seconden, een volledig scherm QR-code zal verschijnen.",];
var smartQRReminds		= ["Gelieve te klikken op de Slimme Verbinding op de TV Afstandsverbinding op uw telefoon en scan de QR code voor snelle verbinding van de TV en telefoon.",
							"QR-code bevat LAN-Accountinfo. Gelieve dit goed te bewaren."];
							

var consoleTipArray = ["Vorige","Volgende","Console","Afspeellijst"];							
var optionInfoArray = ["Beeldmodus","Afspeelmodus","Tijdsduur","Effect","Info"];

var playModeArray = ["Normaal","Shuffle","Herhalen"];
var durationArray = ["Kort(5s)", "Medium(10s)", "Lang(15S)"];
var effectArray = ["Geen", "Oplossen", "Rechts vegen", "Links vegen", "Boven vegen", "Onder vegen", "Inkaderen", "Uitkaderen", "Willekeurig"];
var infoArray = ["Naam:","Grootte:","Datum:","Locatie"];

var picturePresetBarTitleInfo = "Beeldmodus";
var picturePresetBarArray = ["Standaard","Dynamic","Studio","Film","Gebruiker"];
var upTipsInfo = "Afbeelding verplaatsen"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Vorige","Volgende","Afspeellijst","Instellingen"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Druk op Rechts opnieuw om de volgende film af te spelen","Druk op Links opnieuw om de vorige film af te spelen","Druk opnieuw naar beneden om de afspeellijst te tonen"]; //add yums 2014-10-10

var optionPvrListArray = ["Beeldmodus","Voorinstelling geluid", "Schermmodus", "3D Modus", "Ondertitel", "Geluid", "Info"];							
	
var titleSpanFirstArray = ["Bediening & verbinding","Basisfuncties","APPS","TV","Instellingen","Veel Gestelde Vragen"];
var titleSpanSecondArray = [["Afstandsbediening","Paneeltoetsen","Eenvoudige navigatie","TV-aansluiting","TV-aansluiting","TV-aansluiting","Draadloos"],["Starter","Statusbalk","Bron"],["Afspelende apps","Media","TCL nScreen"],["Kanaal en volume aanpassen","Kanaallijst","EPG","Kanalen","Favoriete kanalen"],["Film-aanpassing","Geluidsaanpassing","Kanaal-aanpassing","Software update","Taal","Kinderslot"],["Veel gestelde vragen","Veel gestelde vragen","Problemen Oplossen","Problemen Oplossen","Algemene voorwaarden"]];
var contentSpan1_1Array = [["LIJST:","INFO:","MENU:","STROOM:","BRON:","GIDS:","SLIMME TV:"],["Toont de lijst met zenders","Toont programinformatie","Gaat naar de startpagina","Hiermee schakelt u de stroom aan of schakelt u over naar de standby-modus","Selecteer de ingangsbron","Toont de EPG (elektronische programmagids) informatie","Gaat naar de Smart TV-pagina"]];
var contentSpan1_2Array = ["Vorig kanaal","Volgend kanaal","Verhoogt volume","Verlaagt volume","Gaat naar de startpagina","Bevestig de optie","Stand-by / Aanschakelen"];
var contentSpan1_3Array = ["OK/gids","Kanaal omhoog","Kanaal omlaag","Volume omlaag","Volume omhoog","Beschikbaar als pijltoetsen in sommige functies."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","AV OUT adapter","LAN","Smartphone","PC/Set-top box/DVD","Audio-versterker","Audio versterker/Monitor","Uw TV bevat misschien niet alle aansluitcontacten."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Hoofdtelefoon","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr)-adapter","USB-apparaten","USB-apparaten","Hoofdtelefoon","DVC/Game Console/Set-top box/DVD","Audio-versterker","DVC/Game Console/Set-top box/DVD","Uw TV bevat misschien niet alle aansluitcontacten."];
var contentSpan1_6Array = ["Gemeenschappelijke interface","SD","VGA","SCART","Mini SCART","ANTENNE IN","PCMCIA-kaart","SD-kaart","PC","Settop box/DVD","Antenne/kabel/satelliet","Uw TV bevat misschien niet alle aansluitcontacten."];
var contentSpan1_7Array = ["Tablet","PC","Router","Telefoon","TV"];

var contentSpan2Array = [["Druk op de pijltoetsen om de Homepage te bekijken.","Druk vervolgens op OK om terug te kijken naar een van de aanbevolen programma's of voer de app in."],["Toon datum, netwerk en apparaten enz. in de rechterbovenhoek van het scherm."],["Selecteer de ingangsbron van apparaten aangesloten op de TV via verschillende poorten, zoals TV, AV, HDMI enz."]];

var contentSpan3Array = ["Geniet van en bekijk uw favoriete Apps via de Smart TV-pagina","Bekijk foto's, video's en speel muziek af van een USB-opslagapparaat.","Sluit uw TV en smartphone of Tablet PC aan op hetzelfde LAN","Klik op TCL nScreen of TV-afstandsbediening op de smartphone of Tablet PC","Deel foto's, video's en muziek op meerdere schermen met uw familie en bestuurivan uw TV via uw smartphone"];

var contentSpan4Array = [["Druk op NAAR BOVEN/NAAR BENEDEN om kanalen te wijzigen","Druk op LINKS/RECHTS om het volume aanpassen"],["Druk op LIST op de afstandsbediening op om de kanalen omhoog te zien","Druk op NAAR BOVEN/NAAR BENEDEN om uw kanaal te te kiezen"],["EPG is een gids op scherm die geplande TV-programma’s weergeeft. U kunt navigeren, selecteren, programma's bekijken en opnemen."],["Zoek en installeer zenders"],["Voeg uw favoriete kanalen toe in de kanalenlijst of bewerk deze"]];

var contentSpan5Array = ["Geniet van uw favoriete programma's door middel van video apps"];

var contentSpan6Array = [["Druk op MENU voor het tonen van de systeem instellingsopties","Ga over naar de beeldinstellingen om de waarden aan te passen"],["Druk op MENU voor het tonen van de systeem instellingsopties","Geef de geluidsinstellingen in om de opties in te stellen"],["Druk op MENU voor het tonen van de systeem instellingsopties","Geef de kanaalinstellingen in om de opties in te stellen"],["Uw TV bijwerken wanneer een nieuwe softwareversie beschikbaar is"],["U kunt uw voorkeur menu-taal kiezen"],["Er wordt ouders toegestaan de kanalen of programma's die ongeschikt zijn voor kinderen te vergrendelen"]];

var contentSpan7_1Array = [["Geen beeld, geen geluid","Controleren of de zekering of stroomonderbreker werkt.","Sluit een ander elektrisch apparaat aan op het stopcontact om te controleren of dit werkt of dit ingeschakeld is.","Stekker heeft een slecht contact met het stopcontact","Controleer de signaalbron."],["Normaal beeld, geen geluid","Druk op de volumetoets voor meer geluid voor verhoging van het geluid.","Geluidsinstelling is onjuist.","Fout bij het signaal van de uitzending."],["Normaal geluid, geen beeld","De helderheid en contrast aanpassen","Fout bij het signaal van de uitzending.","Controleer of het enkel in de audio modus is."]];
var contentSpan7_2Array = [["Radiofrequentiestoringen","Deze storing produceert bewegende golven of diagonale strepen en in sommige gevallen, verlies van contrast in het beeld. Vind en verwijder de bron van de radiostoring."],["Geen kleur","De kleurinstellingen aanpassen.","Probeer een ander kanaal. Zwart-Wit programma kan worden ontvangen."],["Afstandsbediening werkt niet","Vervang de batterijen.","Batterijen zijn niet correct geïnstalleerd. Stroom voor de TV is niet aangesloten."]];
var contentSpan7_3Array = [["Inhoud van het USB-apparaat wordt niet weergegeven","Controleer of het USB-opslagapparaat compatibel is met de TV.","Controleer dat de audio- en foto-bestandsindelingen worden ondersteund door de TV."],["Afspelen zonder geluid","Het audio formaat van de video wordt niet ondersteund door de TV-speler."],["Bestanden worden niet goed afgespeeld","De prestaties van de overdracht van het USB-opslagapparaat kunnen de overdrachtssnelheid van de TV beperken."]];
var contentSpan7_4Array = [["Waaraan moet ik aandacht besteden wanneer ik software bijwerk","Geen stroomonderbreking wanneer de software wordt bijgewerkt.","Vermijd enige bewerkingen met uw afstandsbediening wanneer de software wordt bij gewerkt.","Wees geduldig omdat het bijwerken van de software een beetje tijd in beslag kan nemen."],["Er zijn geen duidelijke veranderingen van TV-Weergave na het bijwerken van de software.","Onder bepaalde voorwaarden, zal het bijwerken van de SW niet alleen bijwerken maar ook nieuwe functies toevoegen en ook de prestaties verbeteren van het TV-toestel zonder aparte wijzigingen van het beeld. Ook kan het beeld van de TV soms hetzelfde blijven."]];
var termsTitle = "Algemene voorwaarden";
var termsConditions = ["(Afwijzing) voor TCL - fabrikant van dit TV-toestel.","Vanwege de diverse mogelijkheden van producten met Smart TV-diensten, evenals beperkingen in de beschikbare inhoud, kunnen bepaalde functies, applicaties en diensten niet beschikbaar zijn op alle apparaten of in alle territoria. Sommige functies op Smart TV vereisen eventueel afzonderlijk aan te schaffen extra randapparatuur of een lidmaatschap. Bezoek onze website voor meer informatie over specifieke informatie over het apparaat en de beschikbaarheid van de inhoud. De diensten en de beschikbaarheid van de inhoud via Smart TV zijn van tijd tot tijd onderhevig aan wijzigen zonder voorafgaande kennisgeving. \n   Alle inhoud en diensten toegankelijk via dit apparaat zijn eigendom van derden en worden beschermd door auteursrecht, octrooirecht, merkenrecht en/of andere intellectuele eigendomsrechten. Dergelijke inhoud en diensten worden uitsluitend aangeboden voor uw persoonlijk niet-commercieel gebruik. Het is niet toegestaan enige inhoud of diensten op een manier te gebruiken die niet is geautoriseerd door de eigenaar van de inhoud of dienstverlener. Zonder het voorgaande te beperken, tenzij uitdrukkelijk toegestaan door de van toepassing zijnde eigenaar van de inhoud of dienstverlener, mag u de inhoud of diensten met betrekking tot dit apparaat op geen enkele manier of met geen enkel middel wijzigen, kopiëren, publiceren, uploaden, posten, verzenden, vertalen, verkopen, ander werk uit afleiden, exploiteren of distribueren. \n   U ERKENT UITDRUKKELIJK EN GAAT ERMEE AKKOORD DAT HET GEBRUIK VAN HET APPARAAT GEHEEL OP UW EIGEN RISICO IS EN DAT HET VOLLEDIGE RISICO VOOR GOEDE KWALITEIT, PRESTATIES EN NAUWKEURIGHEID OOK OP UW RISICO IS. HET APPARAAT EN ALLE INHOUD EN DIENSTEN VAN DERDEN WORDEN GELEVERD “ZOALS ZE ZIJN” ZONDER ENIGE VORM VAN GARANTIE, HETZIJ EXPLICIET OF IMPLICIET. TCL WIJST ALLE GARANTIES VAN DE HAND MET BETREKKING TOT HET APPARAAT EN ALLE INHOUD EN DIENSTEN, HETZIJ EXPLICIET OF IMPLICIET, INCLUSIEF MAAR NIET BEPERKT TOT, GARANTIES VAN VERKOOPBAARHEID, GOEDE KWALITEIT, GESCHIKTHEID VOOR EEN BEPAALD DOEL, NAUWKEURIGHEID, ONGESTOORD GENIETEN EN GEEN INBREUK OP RECHTEN VAN DERDEN. TCL BIEDT GEEN GARANTIE MET BETREKKING TOT DE GELDIGHEID, TIJDIGHEID, WETTIGHEID, VOLLEDIGHEID VAN INFORMATIE OF DIENSTEN DIE VIA DIT APPARAAT TER BESCHIKKING GESTELD ZIJN EN GARANDEERT NIET DAT HET APPARAAT MET INHOUD OF DIENSTEN AAN UW EISEN VOLDOET, OF DAT DE WERKING VAN HET APPARAAT OF DIENSTEN ONONDERBROKEN OF FOUTLOOS ZULLEN VERLOPEN. IN GEEN GEVAL, INCLUSIEF NALATIGHEID, ZAL TCL AANSPRAKELIJK ZIJN, HETZIJ IN CONTRACT OF ONRECHTMATIG, VOOR DIRECT, INDIRECT, INCIDENTEEL, BIJZONDERE OF GEVOLGSCHADE, ADVOCAATKOSTEN, OF ENIGE ANDERE SCHADE ALS GEVOLG VAN OF IN VERBAND MET ENIGE INFORMATIE IN, OF ALS GEVOLG VAN HET GEBRUIK VAN HET APPARAAT, OF ENIGE INHOUD OF DIENSTEN TOEGANKELIJK DOOR U OF DERDEN, ZELFS ALS U OP DE HOOGTE BENT VAN DERGELIJKE MOGELIJKE SCHADE. \n   Diensten van derden kunnen worden gewijzigd, geschorst, verwijderd, beëindigd of onderbroken worden, of toegang kan op ieder moment worden uitgeschakeld zonder voorafgaande kennisgeving, en TCL (fabrikant van het merk Thomson TV’s) geeft geen garantie dat de inhoud of diensten beschikbaar blijven voor een bepaalde periode. Inhoud en diensten door derden worden overgebracht door middel van netwerken transmissiefaciliteiten waarover TCL geen controle heeft. Zonder de algemeenheid van deze voorwaarden te beperken, wijst TCL uitdrukkelijk elke verantwoordelijkheid of aansprakelijkheid af voor elke wijziging, onderbreking, uitschakeling, verwijdering van of opschorting van enige inhoud of dienst die via dit apparaat ter beschikking is gesteld. TCL kan beperkingen opleggen met betrekking tot het gebruik of toegang tot bepaalde diensten of inhoud, op elk moment en zonder kennisgeving of aansprakelijkheid. TCL is niet verantwoordelijk of aansprakelijk voor de klantenservice met betrekking tot de inhoud en de diensten. Mocht u een vraag of verzoek hebben met betrekking tot de dienstverlening van de inhoud of diensten dan moet u rechtstreeks contact opnemen met de desbetreffende eigenaar van de inhoud en/of dienstverleners."];

var noChannelListRemind        = ["Geen zenders gevonden. Kanaallijst is beschikbaar na het kanaalscannen.","Kanaalscan"];
var closeSubtitleRemind   = "Functie zal beschikbaar zijn wanneer ondertiteling is uitgeschakeld. Wilt u dit nu instellen?";

var estickerTitles = ["Zeer realistische beelden","Kleur die tot leven komen","Geweldige levensechte beweging","Dynamische beeldkwaliteit","SR UHD upscaling","Ervaar 3D-wereld","Snellere prestaties","Toekomstige 4K inhoud","Geniet van de online wereld","Toegang tot extra inhoud","Geïntegreerde digitale tuners","Alle apparaten aansluiten","Verschillende 4K bronnen","USB-inhoud","Ultra snelle WIFI","Mobiele inhoud op TV","Inhoud op mobiele apparaten","Lokale inhoud","Goedgekeurd door DivX","Naadloos beeld","Kanaal klaar","TDT Premium"];

var estickerDescriptions = ["Geweldige kijkervaring dankzij beelden met vier keer de details van Full HD op UHD scherm","Breed kleurengamma levert emotie in elke scène met levendige rood en smaragdgroen","4K frame interpolatie en achtergrondverlichting als bestrijding van het vervagen van beweging","De levendigheid van de oorspronkelijke afbeelding wordt verbeterd voor de productie van echt dynamische expressie met briljant contrast","Geniet van scherpere TV-shows en Blu-Ray-schijven dankzij Super resolutie technologie","Geniet van 3D TV voorbereiding en bekijk verschillende 3D-inhoud","Meer plezierig amusementervaring met Quad Core voor soepele interactie, verbeterde prestaties","HEVC (H.265) codec ondersteuning voor aankomende standaard van 4K video distributie","Schat aan online applicaties, VOD-diensten, catch-up TV en Internet webbrowsen","Bekijk meer met aanvullende diensten en inhoud van uw favoriete zenders","Toegang tot TV-zenders in hoge definitie zonder extra set-top box","Eenvoudig aan te sluiten, vele digitale bronnen beschikbaar thuis","TV klaar voor de toekomst, kan 4K 50 / 60Hz via HDMI 2.0 met HDCP 2.2 afspelen","Video of foto inhoud rechtstreeks vanaf USB-schijf, HDD of camera op groot scherm in 4K resolutie","Nieuwste generatie 2 x 2 MIMO en AC standaard levert ongeëvenaarde snelheid van Internet toegang","Genieten van foto's, video's, toepassingen vanaf mobiele apparaten op groot scherm dankzij een scherm dat technologie weerspiegelt","Foto's, video's, toepassingen van smartphone of een tablet kan worden weergegeven op het grote scherm","Weergave op groot scherm lokale inhoud zoals foto's, video's van apparaten aangesloten op het lokale netwerk","Gehuurde of eigen DivX-films beschermd afspelen","Ultra smalle schuine kant en super slank ontwerp","Getest en goedgekeurd door Canal +","Getest en goedgekeurd door TDT Premium"];							

var eManualTextArray = ["E-Handleiding","Alle interne afbeeldingen dienen enkel als voorstelling."];
var frontPanelRemind = "Voorpaneel vergrendeld";
var eRPRemind		 = "Shopmodus kan niet aan ERP verzoek voldoen. Weet u het zeker?";	
var noRelatedChannel = "Geen verwant kanaal";
var option0624Name          = ["BOP","BFS","Gebeurtenis op gebeurtenis","GetUserID","BGM","Reset all","Reset Winkel","NRM","DVB-T2 and land keuze ","HbbTV modus"];
var DVBT2AndChoice = ["Aan","Bij land","Uit"];
var hbbtvServiceRemind = "HbbTV service komt binnenkort.";
var insertWord = "Invoeren";		
var viewDetail = "Bekijk detail";							

var remindOAD  = "Software-wijziging. Een nieuwe aanbevolen software kan beschikbaar zijn op een ander kanaal. Als u de download accepteert, kan dit het kanaal automatisch veranderen. Wilt u dit nu doen?";

var LEDStatus = ["Flashen", "Normaal"];
var netFlixRemind = "Deze functie onderbreekt de toegang tot Netflix-diensten totdat u opnieuw aanmeldt.";
var ESNExplanation = "Elektronisch serienummer";
var resetShopRemind = "Het systeem is opnieuw op aan het starten, schakel de tv niet uit";
var initialSelectOption = "Selecteer een optie:";
var databaseRemind   = "Systeem heeft een beschadigde database geïdentificeerd vanwege een onbekende reden. De database wordt opnieuw gemaakt. Druk op OK om verder te gaan.";
var Deactivation = "Deactivering";
var oadFutureRemind = "Software-update. Een nieuw aanbevolen software zal beschikbaar zijn op %s. De update kan enige tijd duren en het scherm zou zwart kunnen worden. Schakel de ontvanger niet uit tijdens de update. Als u deze update accepteert dient u de ontvanger aan te laten staan, of in de standby-modus op het geplande tijdstip. Wilt u deze update ontvangen?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Geluid uitvoer";
var bt_soundOutPutTV = " Televisie Sprekers";
var bt_soundOutPutBT = "Bluetooth Apparaat";
var bt_soundOutPutBT_TV = "Bluetooth en televisie";
var bt_refreshBarName = "Apparaten";
var bt_settingTips_On = "Zet Bluetooth functie en Scanapparaten. ";
var bt_settingTips_Finding = "Het vinden van verkrijgbare apparaten ...";
var bt_settingTips_NoDevice = "Geen verkrijgbaar apparaat.";
var bt_deviceList_State_NoConnect = "Niet verbonden";
var bt_deviceList_State_Connecting = "Verbindend...";
var bt_deviceList_State_Connected = "Verbonden";
var bt_deviceList_State_Paired = "Gepaarde";
var bt_deviceList_Conncect_Failed_Tips1 = "Aansluiting verzuimde.";
var bt_deviceList_Conncect_Failed_Tips2 = "Bevestig alstublieft dat XXX Bluetooth functie is Aan ";
var bt_deviceList_Conncect_Success = "Verbonden naar Bluetooth-apparaat.";
var bt_deviceList_Disconncect_Success = "Losgekoppeld van Bluetooth-apparaat.";
var bt_deviceList_Disconnect = "Bent u zeker u wilt loskoppelen van XXX?";
var bt_tipsTitle = "puntje";
var bt_bluetooth_Pairing_Title = "Bluetooth paarvorming";
var bt_bluetooth_Input_Pin = "Invoer alstublieft PIN ";
var bt_bluetooth_Output_Pin_Tip = "Invoer PIN  XXXX door klavier.";
var bt_bluetooth_Pin_Wrong_Tip = "Verkeerde PIN ";
var bt_bluetooth_Remove_Pair_Title = "Vraag";
var bt_bluetooth_Remove_Pair_Ask = "Vergeet dit apparaat?";
var bt_bluetooth_module_error = "Bluetooth-module fout!";			
			
var netflixDialogOptions = ["OK","Later","Deze show nooit meer weergeven"];
var netflixDialogContent = "U kunt duizenden films bekijken in Netflix, nu bezoeken?";
var netflixRemoteDialogContent = "De afstandsbediening met Netflix-toets is nu verkrijgbaar. Bezoek de volgende website voor meer informatie.\nhttps://store.tcleu.com";
var applyPictureModeSwitchValue	 = ["Huidige bron","Alle bronnen"];
var audioDescriptionName = ["Audiobeschrijving","Luidspreker","Luidsprekervolume","Hoofdtelefoon","Hoofdtelefoonvolume","AD volume","BT-apparaat","BT-apparaatvolume"];
var audioDescriptionOptions = ["Uit","Normaal","Audiobeschrijving"];							
var volumeOffRemind = 'Stel XXX a.u.b. in op “Aan” in het instellingsmenu.';	
var switchSourceRemind   = " aangesloten. Wilt u nu wisselen?";
							
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sportmodus";
var resetStadium = "Stadium";
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Afsluiten","0","Zoomen+",
                       	   "Afsluiten",
                       	   "Lijst","0","Tekst","Gids","Enter","Afsluiten","Menu","Ondertitel","Info",
                       	   "Stop",
                       	   "Info","Menu","Afsluiten"
                       	   ];
var nscreenTips = "GuideOn hilft Ihnen bei der Navigation der umfangreichen Inhalte.";
var nscreenContent = 'Schritte: 1. Tippen Sie auf „TCL nScreen“ auf Ihrem Smartphone.  Verbinden Sie das Telefon über das gleiche LAN mit dem Fernseher. 2. Tippen Sie auf „GuideOn“, um GuideOn aufzurufen. 3. GuideOn bietet Ihnen Funktionen ähnlich wie eine Fernsehzeitschrift. ';
var singalBrokenoffTips = "Het signaal is onderbroken. Het systeem kan het downloaden niet voltooien.";
var contentSpan1_1Array_AU = [["STROOM:","BRON:","MENU:","BACK:","INFO:","HOME:","EXIT:","LIJST:"],
                            ["Turns power on or standby mode","Select the input source",
                                "Show TV settings menu","Go back to the Previous menu or exit a running APP",
                             "Toont programinformatie","Gaat naar de startpagina","Go back to the Previous menu or exit a running APP","Toont de lijst met zenders"]];
var guideDescriptionWords ="Scan de QR-code om de app GuideOn op je telefoon te downloaden";
var settingNoticeSourceName ="Auto bron";
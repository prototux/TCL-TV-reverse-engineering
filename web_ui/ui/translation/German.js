
var all_country 	= ["Australien","Österreich","Belgien","Bulgarien","Kroatien","Tschechien","Dänemark","Finnland","Frankreich","Deutschland",
						"Griechenland","Ungarn","Italien","Luxemburg","Niederlande","Norwegen","Polen","Portugal","Rumänien","Russland",
						"Serbien","Slowenien","Spanien","Schweden","Schweiz","Vereinigtes Königreich","Neuseeland"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Lettland","Slowakei","Türkei","Irland","*","Philippinen","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"China","*","*","*","*","*","*","Sonstige","Litauen"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litauen"];						
				
var all_language 	= ["Tschechisch","*","Dänisch","*","*","Deutsch","Englisch","Spanisch","Griechisch","Französisch",
						"Kroatisch","*","Italienisch","Ungarisch","Holländisch","Norwegisch","Polnisch","Portugiesisch","Russisch","Rumänisch",
						"Slowenisch","Serbisch","Finnisch","Schwedisch","Bulgarisch","Slowakisch","*","*","Gälisch","*",
						"Walisisch","Arabisch","Irisch","Lettisch","*","Türkisch","Estnisch","Holländisch"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Original-Audio"/*Qaa*/,"Undefiniert"/*Undetermined*/,"*","Unbekannt",
						"Undefiniert","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskisch","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Belorussisch","*","*","Katalanisch","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galizisch","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Isländisch","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litauisch",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romanze","*","*","*","*",
						"*","*","*","Samisch","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Videotext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainisch","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Aus","Ein"];
var okCancel		= ["Ok","Abbrechen"];
var yesNo			= ["Ja","Nein"];
var level			= ["Aus","Niedrig","Hoch","Mittel"];
var manualAuto		= ["Manuell","Automatisch"];
var homeShop		= ["Zuhause","Geschäft"];
var picPreset		= ["Standard","Dynamik","Natürlich","Kino","Digitales Kino","Benutzer"];
var picColorTemp	= ["Kühl","Normal","Warm","Warm2","Benutzer"];
var pic3dNavig		= ["Manuell","Automatisch","Halbautom."];
var _3dOptions		= ["3D-Modus","3D-zu-2D","L-R Umschalter","Tiefeneffekt"];
var pic3DMode       = ["Aus","2D-zu-3D","Nebeneinander (SbS)","Oben/Unten (TaB)","Line-Interleave"];
var picEcoOptions	= ["Energieeinsparung","Lichtsensor","Lokal dimmen","Gemischtes Abblenden"];
var picGeoOptions	= ["Geometrie","H-Position","V-Position","Takt","Phase"];//Geometry 无翻译
var picAdWhiteBal	= ["R Gain","G Gain","B Gain","R Offset","G Offset","B Offset"];
var souOptions		= ["Tonvoreinstellung","Balance","Audioverzögerung","SRS TSHD","Auto Lautst.-Kontr.",
						"SPDIF Typ","SPDIF-Verzögerung","TV-Aufstellung","Audiosprache","Soundtyp",
						"Audio-Beschreibung","Digitaler Audioausgang,","Dolby Profi-Einstellung"];
var soundOutputoptions =["Fernsehlautsprecher DAP-Ausgang","Externer AVR-Encoding-Ausgang"];
var inteligenteqoptions 	=["Fokus","Satt"];						
var souSpdifType	= ["Automatisch"/*Dolby*/,"PCM","Aus"];
var colorSpace      = ["Automatisch","Nativ","Benutzer","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Surround-Virtualisierung","Dialogverbesserung","Bassverstärkung","Intelligente Lautstärke","Intelligente Medien","Grafischer EQ","Intelligenter EQ" ];
var chOptions		= ["Kanalscan","Kanalliste","EPG","Senderliste bearbeiten","Senderdiagnose",
						"Timeshift","Untertitel","Videotext","Kanalliste"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalstärke","Signalqualität","Frequenz (kHz)","Service-ID","Netzwerk-ID","Netzwerk-Name"];
var chScanOptions	= ["Land","Tunermodus","Automatische Suche","Autom. Aktualisierung","Manuelle Suche analoge Kanäle",
						["Manueller Kabel-Scan","Manueller Antennen-Scan","Manuelle Suche Satellit"],"Einstellung Satellitenantenne","Bevorzugtes Netzwerk wählen","Senderliste löschen",];
var favNetDes		= "Bitte wählen Sie Ihr bevorzugtes Netzwerk";
var tuner			= ["Kabel","Antenne","Satellit"];//Satelite 无翻译
var passError		= "Kennwort nicht korrekt.\nBitte neu eingeben!";
var chType			= ["Analoge Kanäle:  ","Digitale Kanäle:  "];
var chScanStatus	= ["Status: Suche läuft","Status: Suchvorgang abgeschlossen","Status: Suchvorgang abgebrochen","Status: Fehler beim Suchvorgang"];
var chScanPara		= ["Frequenz (kHz)","Modulation","Symbolrate (Ksym/s)","Netzwerk-ID","System",
						"Feineinstellung","Signalstärke","Signalqualität","Scanmodus","Kanal-ID"];
var chScanParaMHZ      = ["Frequenz (MHz)"];
var chAtvManSys		= ["WEST EUR","OST EUR","UK","Frankreich"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Automatisch"];
var chCleanDes		= "Möchten Sie die Senderliste löschen?";
var chDeletDes		= "Möchten Sie den Sender löschen?";
var chOperator		= ["Ziggo","UPC","Sonstige"];
var chScanType		= ["Digital & Analog","Digital","Analog"];
var chScanMode		= ["Voll","Erweitert","Schnell"];
var bookingModes	= ["Aufnahme","Erinnerung"];
var dayName			= ["So","Mo","Die","Mi","Do","Fr","Sa"];
var monthName		= ["Jan", "Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];
var filter			= ["Filter","Typ","Untertyp"];
var chEpgFirstGenre	= ["Kino","Nachrichten","Show","Sport","Kinder","Musik","Kunst","Soziales","Erziehung","Freizeit","SPEZIAL"];
var chEpgSecondGenre= [["Drama","Krimi","Abenteuer","Science-Fiction","Komödie","Seifenoper","Romanze","Ernst","Erwachsene"," "," "," "],
						["Aktuelle Nachrichten","Wetterbericht","Nachrichtensendung","Dokumentarfilm","Diskussion"," "," "," "," "," "," "," "],
						["Show","Spielshow","Varietee","Talkshow"," "," "," "," "," "," "," "," "],
						["Sport","Sonderveranstaltungen","Sportsendung","Fußball","Tennis",
							"Mannschaftssport","Leichtathletik","Motorsport","Wassersport","Wintersport",
							"Pferdesport","Kampfsport"],
						["Kinder","Für Vorschulkinder","Unterhaltung für 6 bis 14","Unterhaltung für 10 bis 16","Informationen","Zeichentrick"," "," "," "," "," "," "," "],
						["Musik","Rock","Ernst","Folk","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Kunst","Darstellende Kunst","Bildende Künste","Religion","Popkultur",
							"Literatur","Film","Experimentell","Sendung","Neue Medien",
							"Kunstmagazine","Mode"],
						["Soziales","Magazine","Wirtschaft","Herausragende Menschen"," "," "," "," "," "," "," "," "],
						["Erziehung","Natur","Technologie","Medizin","Fremde Länder","Sozialwissenschaften","Weiterführende Bildung","Sprachen"," "," "," "," "],
						["Freizeit und Hobbies","Tourismus","Handarbeit","Automobil","Fitness und Gesundheit","Kochen","Werbung","Gartenbau"," "," "," "," "],
						["Originalsprache","Schwarzweiss","Unveröffentlicht","Live-Sendung"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Sender überspringen","Sendersortierung","Sender bearbeiten","Sender löschen","Kanal tauschen","Kanal einfügen"];
var chEditPara 		= ["Netzwerk-Name","Kanalnummer","Kanalname","Frequenz","Farbsystem","Tonsystem"];
var chSatTitles		= ["Satellitentyp","Einstellung Satellitenantenne","Satellit wählen"];
var chSatEidtOptions= ["Satellitenname","Position","LNB-Spannung","LNB-Frequenz (MHz)","Diseqc Eingang",
						"Ton 22KHz","Tone Burst","Frequenz (kHz)","Symbolrate (Ksym/s)","Polarisation",
						"Signalstärke","Signalqualität","Satellitenstatus"];
var chSatAutoPromt	= [["Alle","Netzwerk"],
						["Alle","Frei"]];
var chSatAutoScanOptions=["Satellit wählen","Scanmodus","Kanäle"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Deaktivieren","A","B","C","D"];
var chSatTone22KHz	= ["Automatisch","Ein","Aus"];
var chSatToneBurst	= ["Deaktivieren","Tone Burst A","Tone Burst B"];
var chSatPolarization= ["Horizontal","Vertikal"];
var chSatSetupOptions=["Antennentyp","Tuner","Frequenz"];
var chSatAntennaType= ["Einzelkabel","Universal"];
var chSatUserBands	= ["Benutzer Band 1","Benutzer Band 2","Benutzer Band 3","Benutzer Band 4","Benutzer Band 5","Benutzer Band 6","Benutzer Band 7","Benutzer Band 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Benutzer-definiert"];
var pleaseSelectSat = "Bitte wählen Sie zunächst die Satelliten!";
var subOptions		= ["Untertitel","Digitale Untertitelsprache","Digitale Untertitelsprache 2","Untertiteltyp"];
var ttxOptionsCon      = ["Seitensprache decodieren","Digitale Videotextsprache"];
var subType			= ["Normal","Hörbehindert"];
var netIntf     	= ["Kabel","Drahtlos"];
var netConnDes		= ["TV testet Netzwerkverbindung.\nBitte warten",
						"Netzwerkverbindungstest war erfolgreich.",
						"Netzwerkverbindungstest fehlgeschlagen."];
var netSsidError	= "Die gültige Länge der SSID beträgt 1~32 Schriftzeichen. Bitte überprüfen Sie die SSID.";
var netOthers		= ["PIN-Code "];
var netWlessAutoDes	= ["Bevor Sie auf OK klicken, vergewissern Sie sich bitte, dass der folgende PIN-Code im Zugangspunkt installiert ist.",
						"Drücken Sie die Taste am Zugangspunkt innerhalb von 120 Sekunden, bevor Sie auf OK klicken."];
var netConnRemind	= ["Kennwort falsch!",
						"Verbinde. Bitte warten!",
						"Verbindung erfolgreich und IP erhalten!",
						"Verbindung fehlgeschlagen! Prüfen Sie Ihr Netzwerk und versuchen es erneut!",
						"TV scannt Zugangspunkte\nBitte warten",
						"Kein Drahtlosgerät am Fernseher angeschlossen!"];
var netWireIpOptions= ["IP-Einstellung","Adressentyp","IP-Adresse","Subnetzmaske","Standardgateway","Primäre DNS","Sekundäre DNS"];
var netWireConnRemind= ["Bitte einen Wert zwischen 0 und 255 eingeben.",
						"Erfolgreich verbunden!",
						"Bitte geben Sie eine gültige Adresse ein",
						"Erfolgreich verbunden!",
						"Verbindung fehlgeschlagen!",
						"Verbinde. Bitte warten!",
						"Bitte geben Sie einen Wert zwischen 1 und 223 ein."];
var netFlixOptions	= ["Deaktivieren","ESN"];
var netFlixDes	 	= ["Sind Sie sicher, dass Sie deaktivieren möchten?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Softwareupdate";
var netUpdateDialogTitle = "Software-Update";
var netBGDownloadTitle 	= "Download läuft";
var netUpdateLoadingPrompt= ["Suche nach Upgrade, bitte warten!",
							"Software wird heruntergeladen... bitte warten!",
							"Während der Aktualisierung NICHT den Fernseher ausschalten!",
                            "Die zwingend erforderliche Software-Aktualisierung wird automatisch im Hintergrund heruntergeladen!"];
var netUpdatePrompt= ["Herzlichen Glückwunsch, Sie haben die neueste Software!",
						"Die neue Software-Version XXXX ist verfügbar. Jetzt herunterladen? Je nach Netzwerkstatus kann dies einige Zeit dauern.",
						"Login fehlgeschlagen!",
						"Daten konnten nicht empfangen werden, bitte versuchen Sie es später noch einmal!",
						"Parse Update XML fehlgeschlagen!",
						"Verbindung fehlgeschlagen! Prüfen Sie Ihr Netzwerk und versuchen es erneut!",
						"Softwaredownload erfolgreich. Wollen Sie die Initialisierung beginnen?",
						"Daten verloren! Download fehlgeschlagen!",
						"Paket konnte nicht überprüft werden,bitte versuchen Sie es noch einmal!",
						"Netzwerk hat Probleme.Bitte überprüfen und neu verbinden…",
						"Update fehlgeschlagen. Bitte TV neu starten!",
						"Die Upgrade-Datei wurde unerwartet gelöscht. Bitte wiederholen Sie das Upgrade über das Netzwerk.",
						"Die Software wurde im Hintergrund erfolgreich heruntergeladen. Bitte führen Sie das Upgrade über das Netzwerk erneut durch."];
var netUpdateButtonText = ["Herunterladen", "Aktualisieren", "Später", "Niemals", "Ok","Fortfahren"];
var autoDetectPrompt = ["Die neue Software-Version XXXX ist verfügbar. Jetzt herunterladen? Je nach Netzwerkstatus kann dies einige Zeit dauern.",
						"Es wurde eine neue Software-Version XXXX gefunden. Jetzt aktualisieren?",
						"Das Update über Netzwerk wurde abgebrochen. Sie müssen das Update erneut durchführen.",
                        "Download der neuen Software-Version XXXX ist nicht beendet. Möchten Sie jetzt fortfahren?",
                        "Software heruntergeladen, möchten Sie jetzt aktualisieren?"];
var sysOptions		= ["eBedienungsanleitung","Menü-Sprache","Timer","Sperren","Einstellung für Eingänge",
						"Softwareupdate","Standort","HbbTV-Modus","Cookies","CI-Modul",
						"Experten-Einstellungen","Werkseinst. wiederherstellen","LED-Anzeige"];
var sysResetDes		= "Sind Sie sicher?";
var sysMenuLangOptions=["Sprache","Bevorzugte Audiosprache","Bevorzugte 2. Audiosprache"];
var sysTimerOptions	= ["Zeitzone","Region","Takt","Sleeptimer","Auto-Standby", "Country region"];

var sysTimeZone		= ["Wie Sender","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Aus","10 Min.","20 Min.","30 Min.","40 Min.","50 Min.","60 Min.","90 Min.","120 Min."];
var sysStandby		= ["Aus","4 Stunden","6 Stunden","8 Stunden"];
var sysRegionName	= ["Madrid","Kanarische Inseln"];
var sysClockOptions	= ["Autom. Synchronisation","Datum","Uhrzeit","Einschalt-Timer","Timer",
						"Kanal einschalten","Ausschalt-Timer","Timer"];
var sysTimer		= ["Aus","Täglich","Einmal"];

var sysInputSet		= ["Keine Bezeichnung","DVD","Blu-ray","HDD","DVDR",
						"HD rec.","Spiel","VCR","PC","Digitale STB",
						"HD Dig. STB","Kamera","Rekorder","Andere"];
var sysAvVideoInput	= ["Automatisch","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Über USB","Via Internet","Nach Kanal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Kann keine neue Software online finden!",
						"Es wurde eine neue Software-Version XXXX gefunden. Jetzt aktualisieren?",
						"Bitte USB-Stick anschließen.",
						"Paket konnte nicht überprüft werden,bitte versuchen Sie es noch einmal!",
						"Update läuft. Gerät nicht ausschalten und Speichergerät nicht abziehen! TV startet nach etwa 30 Sekunden automatisch neu.",
						"Die Software wurde erfolgreich aktualisiert.\nDer Fernseher wird automatisch neu gestartet!",
						"Die neue Software-Version XXXX ist verfügbar. Jetzt herunterladen? Je nach Netzwerkstatus kann dies einige Zeit dauern.",
						"Download läuft",
						"Softwaredownload erfolgreich. Wollen Sie die Initialisierung beginnen?",
						"Update fehlgeschlagen!",
						"Nach Aktualisierungsdateien suchen",
						"Die Software wurde aktualisiert.\nDen Fernseher jetzt bitte neu starten."];
var sysProductInfo	= ["Aktuelle Version","Produktname","Name des Herstellers","Name des Chassis"];
var sysCiDes		= ["Keine Karte für CI-Modul vorhanden."];
var sysAdOptions	= ["DivX(R) Anmeldung","DivX(R) Deaktivierung","T-Link","Authorization Error","Abmeldebestätigung",
						"Ausleihbestätigung","Leihzeit abgelaufen","Bluetooth-ID"];
var sysRegistDes	= ["Sie müssen das Gerät zur Wiedergabe von DivX-geschützten Videos registrieren",
						"Registriercode:",
						"Registrierung bei http://vod.divx.com"];
var sysDregistDes	= ["Deaktivierungscode:",
						"Registrierung auf http://vod.divx.com deaktivieren",
						"Mit der Registrierung fortfahren?"];
var mediaAuthorization = ["Ihr Gerät ist nicht für die Wiedergabe dieses geschützten DivX(R)-Videos autorisiert."];
var deregistrationConfrimation = ["Ihr Gerät ist bereits registriert.","Möchten Sie sich wirklich abmelden?"];
var rentalConfirmation = "Es wurden XXXX von YYYY Ansichten des DivX(R)-Verleihs in Anspruch genommen. Fortfahren?";
var rentalExpired 	= "Die DivX(R) Miete hat XXXX von YYYY Anzeigen verwendet. Die DivX Miete ist abgelaufen.";
						
						
var sysLockOptions	= ["Kanalsperre","Zeitintervallsperre","Jugendschutzeinstellung","Eingang sperren","TV-Bedienfeld sperren","Installationssperre",
						"Kennwort ändern","Max. Lautstärke","Alle zurücksetzen"];
var sysTimeIntervals= ["Sperrtyp","Startzeit","Endzeit"];
var sysRatingOptions= ["Keine","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Nicht jugendfrei (Spanien)"];
var changePass		= ["Kennwort ändern","Neues Passwort","Passwort bestätigen"];
var changePassDes	= ["Kennwort nicht korrekt.\nBitte neu eingeben!",
						"Kennwort stimmt nicht überein.\nBitte neu eingeben!",
						"Passwort wurde erfolgreich eingerichtet!",
						"Dieser Code ist als Passwort zu einfach.\nBitte geben Sie einen neuen Code ein!"];
var sysPowerOnChOptions= "Modus wählen";
var sysPowerOnCh	= ["Letzter Status","Benutzerauswahl"];
var netWlessSecu    = ["Offen","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Keine","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Nicht Unterstützt"];
var netWlessSecu3	= ["Keine","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nicht Unterstützt"];
var netOptions		= ["Internetverbindung","Anschluss","Schnurlose Einstellungen","IP-Einstellungen","Informationen",
						"Anschlusstest","DLNA","Fernbedienung","Netflix-Einstellungen","WLAN TV-Link",
						"Adressentyp","IP-Adresse","Subnetzmaske","Standardgateway","Primäre DNS",
						"Sekundäre DNS","SSID","BSSID","Bitte SSID eingeben:","Benutzer-ID"];
var chEditDes		= ["Duplizierte Sendernummer!","Drücken Sie die rote Farbtaste zum Löschen des aktuellen Schriftzeichens!","Ungültige Kanalnummern."];
var chEpgNoProgram	= "Keine Programminformationen, bitte erst Kanäle suchen!";
var chEpgWords		= ["Programmzeitschrift","Keine Programmdaten.","Kanal gesperrt!","Keine Programmdetails.","Kein Programmtitel."];
var chEpgBooking	= ["Zeitplaninfo", "Kanalnummer","Startdatum","Startzeit","Endzeit",
						"Wiederholungstyp","Programmtermintyp","Hinzufügen","Ersetzen","Ändern",
						"Hinzufügen/Modifizieren"];
var epgHotKey		= ["Vorh. Tag","Nächster Tag","Filter","Programmliste","Programm hinzufügen"];
var chEpgBookRemind	= ["Startzeit falsch","Endzeit falsch","Duplizierter Zeitplan","Erfolgreich gespeichert.","Erfolgreich gelöscht."];
var chSchePara		= ["Programmliste","Startzeit","Startdatum","Programmtitel","Kanalname",
						"Dauer","Wiederholen","Zeitplan","Bearbeiten","Löschen"];
var dateTimer		= ["Einmal","Täglich","Wöchentlich"];
var scheduleDeleteReminds="Möchten Sie diesen Zeitplan löschen?";
var scheduleNoLists	= "Es ist keine Zeitplanliste vorhanden. Drücken Sie die rote Farbtaste, um eine Zeitplanliste hinzuzufügen.";
var chListWords		= ["Kanalliste","Liste wählen","Tunermodus","Zu Favoriten hinzufügen","Entfernen",
						"Senderliste auswählen","Tuner-Modus auswählen","Tausch"];
var chListType		= ["Alle","Digital","Analog","Radio","Frei","Favoriten"];
var chAutoScanOptions=["Betreiber wählen","Kanaltyp","Automatische Suche"];
var souSoundType	= ["Ungültig","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam Mono","Nicam Stereo","Nicam Dual1","Nicam Dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musik","Kino","Stimme","Standard","Benutzer"];
var picAdRgbMode	= ["Aus","Nur Rot","Nur Grün","Nur Blau"];
var picAdOptions	= ["DNR","MPEG-Nr.","RGB-Modus","Dynamischer Kontrast","LED-Bewegungsschärfe",
						"Hautfarbe","Filmmodus","Spielmodus","Farbtemperatur","Weißabgleich",
						"Standbild","Schwarz-Erweiterung","Overscan","Gamma","HDMI-Modus","10P Weißabgleich","Farberweiterung",
						"Reduzierung der Unschärfe","Reduzierung des Flatterns","Farbraum","Bewegungsschärfe"];
var pic10Pwhite     = ["Intervall","Rot","Grün","Blau","Zurücksetzen","Farbe","Gelb","Cyan","Magenta"];
var picMotionClarity = ["Bewegungsmodus","Interpolation","LED-Bewegungsschärfe","Reduzierung der Unschärfe","Reduzierung des Flatterns","Zurücksetzen"];
var picMotionMode   = ["Automatisch","Film","Gleichmäßig","Löschen","Sport","Kunde"];
var picResetDes		= "Alle personalisierten Einstellungen werden zurückgesetzt. Sind Sie sicher, dass Sie den gewählten Vorgang durchführen möchten?";
var pic10PReset     = "Sind Sie sicher, dass Sie den 10P Weißabgleich zurücksetzen möchten?";
var picMotionReset  = "Möchten Sie die Bewegungsschärfe zurücksetzen?";
var picColorSpaceReset    = "Sind Sie sicher, dass Sie den Farbraum zurücksetzen möchten?";
var picOptions		= ["Bildvoreinstellung",
						"Hintergrundbeleuchtung","Helligkeit","Kontrast","Farbsättigung","Farbton","Bildschärfe","Farbtemperatur","Bildschirmmodus","Autom. format.",
						"Sport-Kontrastverstärkung","3D","3D-Navigation","ECO Einstellungen","Geometrie",
						"Experten-Einstellungen","Bildmodus anwenden","Bild zurücksetzen"];
var picSize			= ["16:9-Format", "4:3-Format", "14:9 Format", "Cinerama",
						"16:9-Zoom", "16:9-Zoom oben","14:9-Zoom","Stretch-Zoom","Breitbildzoom",
						"Zoom 2","Breitbildzoom 2","Bildschirm natürliche Anpassung","Punkt für Punkt","Original","Panorama"];
var others			= ["Lautstärke","Übertragung","Kennwort","Status","Speichern","Ersetzen","Starten","Beenden","Suche","Löschen",
						"Keine","Automatisch","Scannen","Sicherheit","Verbinden","Aktualisieren","Wiederholen","Stop","Einstellungen","Kanäle",
						"Bearbeiten","Einfügen","Signal!","Beenden","Stereo","Audio","Quelle","Kein Audio","Tipps","Zurücksetzen",
						"Kunde","Installation","Speichern","Benutzer","Tastatur schließen","Sicherheitsmodus","Täglich","PVR-Liste"];
var direction		= ["Links","Rechts","Hoch","Runter"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Unbekannt"];
var soundChannels   = ["Unbekannt","Mono","Sub","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2-Kanal","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1-Kanal","7.1-Kanal","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Links","Rechts","Sonstige"];
var prompts			= ["Wählen Sie die für Ihre Umgebungsbedingungen optimalen Bildeinstellungen aus.",
						"Helligkeit einstellen. Je näher an 100, desto heller.",
						"Kontrast einstellen. Je näher an 100, desto größer sind die Unterschiede zwischen hellen und dunklen Bildbereichen.",
						"Sättigung einstellen. Je näher an 100, desto intensiver ist die Farbe.",
						"Schärfe einstellen. Je näher an 100, desto deutlicher sind die Details.",
						"Hintergrundbeleuchtung einstellen. Je näher an 100, desto heller ist der Bildschirm. ",
						"Farbton einstellen. Mit dieser Einstellung werden die Farbtöne konfiguriert.  ",
						"Wählen Sie je nach wiedergegebenem Programm das optimale Bildformat aus.",
						"Energieverbrauch optional konfigurieren.",
						"Stellen Sie die Bildschirmgeometrie ein, wenn Sie einen PC verbinden.",
						"Wählen Sie mehr erweiterte Bildeinstellungen.",
						"Setzen Sie alle Bildeinstellungen auf die Werkseinstellungen zurück.",
						"Wählen Sie je nach Ihren Vorlieben einen Soundmodus aus.",
						"Stellen Sie das Lautstärkeverhältnis zwischen linkem und rechtem Kanal ein.",
						"Das TruSurround HD Soundsystem bietet sowohl bei niedrigen wie auch bei hohen Frequenzen einen hervorragenden und klaren Sound.",
						"Der digitale Anschluss verbindet den digitalen Soundausgang des Fernsehers mit dem Heimkinosystem.",
						"Wählen Sie je nach Ihren Vorlieben die gewünschte Audiosprache aus.",
						"Aktivieren Sie die Funktion für Sehbehinderte für bessere Unterhaltung.",
						"Testen Sie Ihr Fernsehbild, den Ton und das Signal.",
						"Wählen Sie den Senderlistentyp gemäß Ihrem TV-Signal aus.",
						"Wählen Sie die Sprache für die am unteren Bildrand angezeigten Untertitel des aktuellen Programms.",
						"Text und Bilder des aktuellen Senders anzeigen.",
						"Digital Living Network Alliance. Musik, Fotos und Videos von anderen Geräten (wie PC) über Heimnetzwerk anzeigen.",
						"Inhalte Ihres Smartphones auf dem Fernseher anzeigen und das Smartphone als Fernbedienung für den Fernseher verwenden.",
						"Inhalte von einem Miracast-kompatiblen Android-Gerät auf Ihrem Fernseher anzeigen.",
						"Den Fernseher sperren.",
						"Gerätenamen auswählen.",
						"Umgebungsbedingungen einstellen.",
						"Alle Systemeinstellungen zurücksetzen."];
var initialTitle	= ["Willkommen","Erstinstallation"];
var initialPrompt	= ["Führen Sie jetzt die Ersteinstellungen durch, um in eine Welt spannender Unterhaltung einzutauchen!",
						"Bitte wählen Sie Ihre Sprache:",
						"Wählen Sie Ihr Land:",
						"Bitte wählen Sie Ihren Standort:",
						"Wählen Sie Ihren Netzwerk-Verbindungstyp:",
						"Wählen Sie den Modus für die kabelgestützte Netzwerkverbindung:",
						"Konnte nicht mit xxxxxxxxx verbinden! Bitte schließen Sie das Gerät gemäß folgendem Diagramm an oder wählen Sie Links zur Rücksetzung.",
						"Mit xxxxxxxxx verbunden! Bitte wählen Sie Recht, um weiterzumachen.",
						"1)Ihr Fernseher hat möglicherweise bereits einen eingebauten WLAN-Adapter\n 2) Oder, falls ein WLAN-USB-Adapter mitgeliefert wurde, schließen Sie diesen an Ihrem Fernseher an. Anschließend wählen Sie bitte den WLAN-Verbindungsmodus.",
						"Scan läuft. Bitte warten...",
						"Kein Drahtlosgerät am Fernseher angeschlossen!",
						"Folgenden PIN-Code im Zugangspunkt eingeben, bevor Sie „Weiter“ klicken.",
						"Drücken Sie innerhalb von 120 Sekunden die Taste auf AP, bevor Sie die Pfeiltaste Rechts drücken!",
						"WPS (Gesicherter Wi-Fi-Setup)",
						"PIN (Persönliche Identifikationsnummer)",
						"PBC (Drucktastenkonfiguration)",
						"Auf die folgenden Inhalte kann nur mit einer Netzwerkverbindung zugegriffen werden. Möchten Sie die Netzwerkeinstellung überspringen?",
						"Es stehen neue Software-Updates zum Herunterladen bereit. Je nach Netzwerkstatus kann dies einige Zeit in Anspruch nehmen.",
						"Nach der Aktualisierung Ihrer TV-Software können Sie die aktuellsten Funktionen und Dienste nutzen.",
						"Sie können nicht die neuesten Funktionen und Dienste in Anspruch nehmen. Möchten Sie die Software-Aktualisierung überspringen?",
						"Drücken Sie die Navigationstaste rechts, um fortzufahren. ",
						"Schalten Sie das Gerät während des Updates nicht aus, da dies zu Fehlfunktionen führen kann. ",
						"Falls Sie nicht aktualisieren möchten, wählen Sie bitte NEIN.",
						"Update läuft, bitte warten",
						"Sie können die Software auch in SYSTEM/SOFTWARE-UPDATE aktualisieren.",
						"Das gewählte Land benötigt eine Passworteinstellung.\nBitte stellen Sie den Code für Ihren Fernseher ein und bestätigen Sie ihn.",
						"Dieser Code ist zu einfach.\nBitte verwenden Sie andere Ziffern.",
						"Glückwunsch! Die Ersteinstellung ist beendet. Sie können Ihre Konfiguration über das Hauptmenü und die entsprechenden Untermenüs ändern.",
						"Bitte den Sicherheitsmodus auswählen:",
						"Bitte wählen Sie einen Verbindungsmodus für das Drahtlosnetzwerk:",
						"Netzwerk"];
var initNetCabAndDonRe = ["Kein Netzwerkkabel angeschlossen, bitte schließen Sie ein Netzwerkkabel an!","Kein integrierter W-Lan-Adapter oder kein W-Lan-USB-Adapter vorhanden."];
var initChPrompt = ["Installation der Fernsehkanäle","Bitte wählen Sie den Antennen-Suchtyp.","Autom. Suche im Gange...","Folgende Antennenkanäle wurden gefunden:","Wählen Sie den Scan-Typ für Kabelsender.","Bitte wählen Sie einen Dienstanbieter aus der nachstehenden Liste.","Bitte konfigurieren Sie die Scan-Daten","Folgende Kabelsender wurden gefunden:","Wählen Sie in der nachfolgenden Liste einen Betreiber aus","Wählen Sie Satelliten aus, um den ausgewählten Satelliten zu scannen und zu bearbeiten.","Konfigurieren Sie die Parameter des Satelliten","Folgende Kanäle wurden gefunden und die Kanalsuche kann ebenfalls erneut in Kanal/Kanalsuche durchgeführt werden"];
var initClockPrompt = ["Erhalten Sie die vom Netzwerk gelieferte Zeit!",
						"Bitte Datum und Uhrzeit einstellen:"];
var initialOptions	= ["Umgebung","Netzwerkeinrichtung","Softwareupdate","Senderinstallation","Takt"];
var initialHotkeys	= ["Zurück","Auswählen","Weiter"];
var initLocations	= ["Zuhause","Geschäft","Shop-Modus mit Demo"];
var initNets		= ["Kabel","Drahtlos","Ich habe keine Netzwerkverbindung"];
var initWireManuals	= ["IP-Adresse","Subnetzmaske","Standardgateway","Primäre DNS","Sekundäre DNS"];
var initSoftUpdates = ["Jetzt aktualisieren","Später aktualisieren"];
var initChannelIns	= ["Fortfahren","Ich möchte keine Kanäle installieren"];
var initChScanTypes	= ["Digital & Analog","Digital","Analog","Ich möchte keine Sender scannen"];
var initChDvbts		= ["Antenne ATV-Kanäle:","Antenne DTV-Kanäle:"];
var initChDvbcs		= ["ATV-Kabelsender:","DTV-Kabelsender:"];
var initChDvbss		= ["Satellitensender:"];
var initChDvbSOther	= ["Ich möchte keine Satelliten scannen"];
var initEndConnectedStatus= ["Getrennt","WLAN verbunden","Mit verkabeltem verbunden"];
var initEndInstallations= "XXXX Kanäle installiert";
var initEndUpdate	= ["Aktualisiert"];

var audioScenes 	= ["Desktop","Wandhalterung"];			
var screenSavers	= ["Keine Programminformationen, bitte erst Kanäle suchen!",
						"Kein Signal!",
						"Verschlüsselt",
						"Nur Daten",
						"Audioprogramm",
						"Kein Audio und Video",
						"Nicht verfügbar",
						"Kein Videotext",
						"Keine Programmdaten.",
						"Programm gesperrt!",
						"Programm gesperrt!\nDrücken Sie OK und geben Sie Ihren Code ein.",
						"Keine Programmdetails.",
						"Programm für Minderjährige ungeeignet.\nDrücken Sie OK und geben Sie Ihren Code ein.",
						"Kanal gesperrt!",
						"Kanal gesperrt!\nDrücken Sie OK und geben Sie Ihren Code ein.",
						"Eingang gesperrt!\nDrücken Sie OK und geben Sie Ihren Code ein.",
						"Nicht unterstützt!",
						"Dieser Dienst ist aktuell nicht verfügbar",
						"Eingabesperre!",
						"Kein Programmtitel.",
						"Keine Funktion"
						];
var chBookingPromt	= ["Der aktuelle Kanal hat eine vorprogrammiert Aufnahme, der Fernseher beginnt jetzt mit der Aufnahme.",
						"Es wurde eine programmierte Aufnahme gefunden.\n Schalten Sie XXXX ein, um die Aufzeichnung zu starten",
						"Für den aktuellen Sender gibt es einen Termin.",
						"Es wurde ein Termin gefunden.\n Schalten Sie XXXX ein"];
var timeUnit		= ["Sek.","Min."];
var ciPromt			= ["Die Netzwerkdaten haben sich geändert. Zur Aktualisierung führen Sie einen Update-Scan durch. ",];
var othersPromt		= ["Bitte warten ...",];
var menuOptions		= ["Bild","Ton","Kanal","Netzwerk","System"];
var optionOptions	= ["Bildvoreinstellung","Tonvoreinstellung","Standbild","T-Link","Timeshift","PVR","Programmliste","Einstellungen"];
var optionTLinkPromt= [["Automatische Einschaltung","Auto-Standby","Anleitungsmenü"],
						["Einschalten","Standby","Verstärkerlautstärke"]];
var powerPromt		= ["Fernseher wird bald ausgeschaltet! Drücken Sie zum Abbrechen eine beliebige Taste."];
var ttxLanguage		= ["WEST EUR","OST EUR","Russisch","Arabisch/Hebräisch","Farsi","Arabisch","Belorussisch","Griechisch","Türkisch"];
var ttxOptions		= ["Zeigen","Unterseiten durchschalten","Sprache","Alarmseite","Kurzmeldung"];
var weekday         = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
var lcnConfflict	= "Dieses Programm hat Probleme beim Empfang. Auf Kanal %d ist eine andere Version verfügbar.";
var inShopMode		= "Ihr Fernseher befindet sich im Shop-Modus. Für den Home-Modus wählen Sie bitte „System“ und ändern Sie im Menü „Standort“.";
var nitRefresh		= "Die Netzwerkdaten wurden geändert. Möchten Sie einen Aktualisierungsscan durchführen?";
var picHDMIMode     = ["Automatisch","Grafik","Video"];

var glassRemind    	= ["Bitte koppeln Sie Ihre 3D-Brille mit dem Fernseher\n(Halten Sie die EIN-/AUSTASTE auf der 3D-Brille gedrückt).","Ihre 3D-Brille ist mit dem Fernseher verbunden ",""];
var pvrRemind 		= ["Ziehen Sie das USB-Gerät nicht ab und schalten Sie es nicht aus"];
var pvrConName   	= ["PVR","Programminformationen:",["Hinweis: Um HD-Sender aufnehmen, bitte die Festplatte (Geschwindigkeit> 5.0MB/sec) auswählen, um SD-Sender aufzunehmen, bitte die Festplatte (Geschwindigkeit> 3.0MB/sec) auswählen.","Aufgezeichnetes Video ist im Ordner „pvr“ gespeichert."],"Stop","Aufnahme","Stunde","Minute","Dauer","Tipps","Mit den Pfeiltasten stellen Sie die Aufnahmedauer ein."];
var pvrDisRemind 	= "Einen USB-Stick für die Aufnahme anschließen.";
var pvrRemindWords  = ["Möchten Sie die Funktion verlassen?",
							"Möchten Sie die Aufnahme beenden und Aufnahmedateien durchsuchen?",
							"Laufwerk abgezogen.",
							"Nicht genug Speicherplatz verfügbar.",
							"Keine Aufnahmedateien. Starten Sie die Aufnahme.",
							"PVR kann in verschlüsseltem Kanal nicht starten.",
							"Funktion nicht verfügbar",
							"Erfolgreich gespeichert.",
							"Aufnahme beenden und Eingangsquelle ändern?",
							"Der Fernseher beendet die aktuelle Aufnahme. Möchten Sie die Funktion verlassen?",
							"Die PVR-Aufnahme benötigt ein Fernsehsignal, um korrekt zu funktionieren, bitte überprüfen Sie Ihr Signal."];
var pvrChangeCh 	= ["Möchten Sie umschalten?",
							"Aufnahme beenden und Kanal ändern?"];
var pvrChangeToPIN8	= ["Möchten Sie die verbundene Signalquelle zu SCART-Eingang wechseln?",
				    		"Möchten Sie die Aufnahme beenden und die verbundene Signalquelle zu SCART-Eingang wechseln?"];
var pvrChangeToCEC  = ["Möchten Sie die verbundene Signalquelle zu einem HDMI-Eingang ändern?",
				  			 "Möchten Sie die Aufnahme beenden und die verbundene Signalquelle zu einem HDMI-Eingang ändern?"];
var pvrGuideJump    = ["Möchten Sie EPG aufrufen?",
							"Aufnahme beenden und EPG aufrufen?"];
var pvrMediaJump    = ["Möchten Sie Medien aufrufen?",
							"Aufnahme beenden und Media aufrufen?"];
var timeshiftExtra	= ["Timeshift-Funktion beenden und TV-Kanal wechseln?",
						"Möchten Sie die Timeshift-Funktion beenden und die verbundene Signalquelle zu SCART-Eingang wechseln?",
						"Möchten Sie die Timeshift-Funktion beenden und die verbundene Signalquelle zu einem HDMI-Eingang ändern?",
						"Timeshift kann in verschlüss Kanal nicht starten.",
						"Möchten Sie die Timeshift-Funktion beenden und EPG aufrufen?",
						"Timeshift-Funktion beenden und zum USB-Modus wechseln?",
						"Timeshift-Funktion beenden und Eingangsquelle ändern?",
						"Einen USB-Stick für die Aufnahme anschließen.",
						"Laufwerk nicht groß genug.",
						"Der Fernseher beendet die aktuelle Timeshift-Funktion. Möchten Sie die Funktion verlassen?"];
var timeshiftStatus	= ["Schneller Rücklauf","Stop","Wiedergabe","Pause","Schneller Vorlauf"];
var pvrPowerOffRemind= ["Stand-by-Aufnahme","Standby","Der Fernseher nimmt jetzt auf, möchten Sie weiterhin aufnehmen, wenn sich der Fernseher im Stand-by-Modus befindet?"];
var timeshiftInitTitle= "Einstellung Laufwerk";
var timeshiftInitReminds= ["Assistent zur Einstellung des USB-Laufwerks für Timeshift-Funktion. Einstellungsmodus wählen.",
						 "Für bessere Leistung empfehlen wir, das USB-Laufwerk zu formatieren. Alle Daten werden gelöscht.",
						 "Wählen Sie die Dateigröße für Timeshift.",
						 "Formatieren",
						 "Nicht genug Speicherplatz verfügbar.",
						 "Timeshift-Datei erstellen",
						 "Geschwindigkeitstest",
						 "Das Laufwerk ist zu langsam (< %f Mbit/s) für die Timeshift-Funktion!",
						 "Laufwerk ist für Timeshift bereit. Wir empfehlen Laufwerkwechsel (Geschwindigkeit > %f Mbit/s) für bessere Leistung.",
						 "Laufwerk ist für Timeshift bereit."];
var timeshiftInitButtons= ["Formatieren","Überspringen","Abbrechen","Ok","Beenden","Beenden"];
var timeshiftInitOther=["Laufwk Geschw:","Mbit/s"];

var selectChoice	= "Sind Sie sicher?";
var chAtvStore		= "Speichern als XXXX";
var chEpgFirstGenreUK= ["Kino","Nachrichten","UNTERHALTUNG","Sport","Kinder","Erziehung","Lifestyle","Drama"];
var homePageTitleList = ["APPS","TV","VIDEOS","Homepage"];
var homePageFavAndAllName  = ["Favoriten-Apps","Alle Apps"];
var homePageBackUp = ["eBedienungsanleitung","GuideOn"];
var homePageRemind   = ["Die gesamten Funktionen sind erst nach Netzwerkverbindung verfügbar.","Ihr Fernseher hat noch keine Kanäle gespeichert. Programme sind nach der Kanalsuche verfügbar.","Kein Programm","Jetzt Kanäle suchen?"];
var homePageHistory = ["Historie"];
var miracastTitle = ["WLAN TV-Link","TCL-Gerät"];
var miracastRemind=["WLAN TV-Link ermöglicht die kabellose Bild- und Tonübertragung von Ihrem Gerät, wie z.B. einem Smartphone oder Tablet, auf Ihr Fernsehgerät. Das erlaubt Ihnen, die auf Ihrem Smartphone oder Tablet angezeigten Inhalte gleichzeitig auf Ihrem Fernsehgerät anzuschauen. Sie können zum Beispiel ein Video auf Ihrem Smartphone abspielen und gleichzeitig auf Ihrem Fernseher anzeigen oder Ihr Tablet als Spielkonsole für Inhalte verwenden, die auf dem großen Bildschirm Ihres Fernsehgeräts angezeigt werden.","WLAN TV-Link auf Fernseher betriebsbereit. Geben Sie den Bildschirm Ihres Geräts jetzt für den Fernseher frei.","Verbinde. Bitte warten!","Verbindung fehlgeschlagen!","Verbindung fehlgeschlagen. Bitte überprüfen!"];
var homePageLittleWin = ["Einstellungen","Medien","Favoritenkanäle","Smart TV","EPG"];

var hbbtvStopRemind  = ["Möchten Sie die Wiedergabe beenden?"];
var colorSystem = ["Automatisch","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Drücken Sie für weitere Informationen OPTION ";
var emptyListInfo = "Kein USB-Gerät am TV angeschlossen!";
var optionVideoListArray_1 = ["Bildvoreinstellung", "Tonvoreinstellung", "Wiedergabemodus", "Bildschirmmodus", "3D-Modus", 
							  "L-R Umschalter", "Tiefeneffekt", "Untertitel", "Soundtrack", "Titel", "Kapitel", "Info"];
var optionVideoListArray_2 = ["Bildvoreinstellung", "Tonvoreinstellung", "Wiedergabemodus", "Bildschirmmodus", 
							  "Untertitel", "Soundtrack", "Titel", "Kapitel", "Info"];
var bottomTipsText = ["Wiedergabe/Pause", "Schneller Rücklauf", "Schneller Vorlauf", "Wiedergabeliste", "Einstellungen"];
var picturePresetArray = ["Standard", "Dynamik", "Natürlich", "Kino", "Benutzer"];
var videoPlayModeArray = ["Alle wiederholen", "Wiederholen", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Breitbildzoom", "Zoom 2", "Breitbildzoom 2", "Stretch-Zoom", "Automatisch"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9-Zoom", "16:9-Zoom", "16:9-Zoom oben", "Automatisch"];
var Mode3DArray = ["Aus", "2D-zu-3D", "Nebeneinander (SbS)", "Oben/Unten (TaB)", "Line-Interleave"];
var videoOptionListArray = ["Aus", "Track", "Untertitel", "Titel", "Kapitel"];
var subMenuTitleText = "Untertitel";
var langMenuTitleText = "Audiosprache";
var titleMenuTitleText = "Titel";
var mode3DMenuTitleText = "3D-Modus";
var langInfoText = "Track";
var STOP_RESUME_INFO = "Stopp-Weiter";
var playListName = "Name";
var eb_tips = "Tipps";
var ok_button = "Ok";
var eb_info = ["Audio-Decodierung Fehler.", "Video-Decodierung Fehler.", "Audioformat nicht unterstützt.", 
			   "Videoformat nicht unterstützt.", "Datei kann nicht geöffnet werden.", "Wiedergabefehler, bitte versuchen Sie es erneut.",
			   "Dateiformat nicht unterstützt.", "Ups! Player läuft nicht mehr.",
			   "Dateipfad existiert nicht oder ist ungültig.\n Schließen Sie das Speichermedium erneut an und versuchen Sie es noch einmal.",
			   "Wiedergabe von der vorherigen\n Stelle fortsetzen?"];
var frameTitleText = "Neues Gerät";
var eb_quit_info = "Sind Sie sicher, dass Sie die Funktion verlassen möchten?";
var eb_yes = "Ja";
var eb_no = "Nein";
var offinfo = "Aus";
var naInfo = "Null";
var consoleInfoArray = ["Schneller Rücklauf", "Schneller Vorlauf", "Wiedergabe/Pause", "Wiedergabeliste"];
var cantOperateText = ["Funktion nicht unterstützt."];
var chapterChangeInfo = "Nur Kapitel von 1 bis XXXX sind verfügbar.";
var metaDataArray = ["Titel/Ausgabe Metadaten: ", "Kapitel Metadaten: ", "Audio Metadaten: ", "Untertitel Metadaten: "];
var metaTitleInfo = "Titel";
var metaChapterInfo = "Kapitel";
var videoLoadingInfo = "Analyse läuft...";
var listLoadingInfo = "Laden läuft...";
var pgInfo = "Bewertung: ";
var fileNameText = "Name";
var fileDateText = "Datum";
var fileSizeText = "Größe";
var fileDurationText = "Dauer";
var fileDirectorText = "Regisseur";
var fileCopyrightText = "Copyright";
var fileArtistText = "Künstler";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "Jahr";
var fileGenreText = "Genre";
var mainListArray = ["Alle", "Bild", "Video", "Musik"];
var sortArray = ["Name", "Datum"];
var parserArray = ["Normal", "Rekursiv"];
var emptyTipsInfo = "Ups. Es wurde keine unterstützte Datei gefunden.";
var emptyFolderInfo = "Ups. Es wurde keine unterstützte Datei gefunden.";
var sortName = "Sortieren nach";
var parserName = "Parser";
var divx_str1 = "DivX(R) Anmeldung";
var divx_str2 = "DivX(R) Deaktivierung";
var infor_str = "Info";
var quickMenuEmptyText = "Keine verfügbaren Optionen.";

var musicSoundPresetArray = ["Standard", "Kino", "Musik", "Klare Stimme", "Benutzer"];
var musicInformationArray = ["Name", "Künstler", "Album", "Genre:", "Jahr:", "Länge:"];
var playListName = "Name";
var playTipsInfo = ["Sie spielen die erste Datei ab.", "Sie spielen die letzte Datei ab."]
var musicNameInfo = "Name";
var musicArtistInfo = "Künstler";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Tonvoreinstellung";
var optionBGMInfo = "Hintergrundwiedergabe";
var optionAudioOnlyInfo = "Nur Audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX hat sich mit Fernseher verbunden!";
var tvRemoteTitle		= "Fernbedienung";
var tvRemoteDeveloper	= "Diese Anwendung wurde von TCL entwickelt";
var tvRemoteDeviceTitle	= "Gerätebezeichnung:";
var remoteOption		= ["Media-Sharing","Fernbedienung","Hilfe","Info","Smart Connect"];
var remotebottom		= " Bitte „TV-Fernbedienung“ auf Ihr Smartphone herunterladen ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Freigabe von Fotos, Videos und Musik für den Fernseher über das Telefon.",
							"Schritte: \n   1. Tippen Sie auf „TCL nScreen“ auf Ihrem Smartphone. Verbinden Sie das Telefon über das gleiche Netzwerk mit dem Fernseher.\n   2. Tippen Sie auf „Medien freigeben“, um die Mediendateien zu durchsuchen.\n   3. Senden Sie die Medien zur Wiedergabe an den Fernseher (mit einer der folgenden Optionen).",
							"      a) Ziehen Sie den Ordner/die Datei auf das TV-Symbol am oberen Bildschirmrand.\n      b) Schwingen Sie das Telefon einmal in Richtung TV, um die erste Datei zu starten.\n      c) Spielen Sie Medien auf dem Telefon ab und klicken Sie auf das TV-Freigabe-Symbol.",
							"   4. Schütteln Sie das Smartphone während der Wiedergabe am TV, um die vorherige oder nächste Datei wiederzugeben."];
var controlReminds		= ["Verwenden Sie Ihr Smartphone als Fernbedienung für den TV.",
							" ",
							"Schritt: \n   1. Tippen Sie auf „TCL nScreen“ auf Ihrem Smartphone. Verbinden Sie das Telefon über das gleiche Netzwerk mit dem Fernseher.\n   2. Tippen Sie auf „Fernbedienung“, um den Fernseher zu bedienen."];
var helpDeviceWords		= "Multi-Screen-Interaktion";
var helpBottom			= "Im Zeitalter der Cloud-Technologie lassen sich Smartphones und Fernseher miteinander verbinden. Schauen Sie mit Ihrer Familie Inhalte auf mehreren Bildschirmen an und steuern Sie den Fernseher mit Ihrem Handy! ";
var helpReminds			= ["Vorbereitung\n   1. Laden Sie die App „TCL nScreen“ von Google Play oder Apple Store herunter und installieren Sie die App.\n   2. Verbinden Sie das Telefon über das gleiche WLAN-Netzwerk mit dem Fernseher.",
							" ",
							"Empfohlenes Telefon\n   1. CPU: Größer als 800 MHz\n   2. Speicher: Mindestens 80 MB freier Speicherplatz",
							" ",
							"Haftungsausschluss\n   Steht „TCL nScreen“ auf Ihrem Telefon nicht zur Verfügung, so wenden Sie sich bitte an der Hersteller des Telefons. "];
var helpButtons			= ["Zurück","Weiter"];
var aboutReminds		= ["Fernbedienung","Diese Anwendung wurde von TCL entwickelt"];
var aboutExit			= "Beenden";
var smartReminds		= ["Schnelle und intelligente Verbindung zwischen dem Fernseher und dem Telefon.",
							" ",
							"Schritte \n   1. Verbinden Sie das Telefon über das gleiche LAN mit dem Fernseher. Klicken Sie auf „TCL nScreen“ auf dem Smartphone.\n   2. Klicken Sie auf „Smart Connect“, um den QR-Code zu scannen.\n   3. Mit dem Fernseher im Übertragungsmodus halten Sie INFO auf der TV-Fernbedienung für 4 Sekunden gedrückt; ein QR-Code wird als Vollbild angezeigt.",];
var smartQRReminds		= ["Bitte klicken Sie auf Smart Connect in TV-Fernbedienung auf Ihrem Telefon und scannen Sie den QR-Code, um den Fernseher und das Telefon schnell zu verbinden.",
							"Der QR-Code enthält die Informationen zum LAN-Konto. Bitte gut aufbewahren."];
							

var consoleTipArray = ["Zurück","Weiter","Konsole","Wiedergabeliste"];							
var optionInfoArray = ["Bildvoreinstellung","Wiedergabemodus","Dauer","Effekt","Info"];

var playModeArray = ["Normal","Shuffle","Wiederholen"];
var durationArray = ["Kurz (5s)", "Mittel (10s)", "Lang (15s)"];
var effectArray = ["Keine", "Auflösen", "Von rechts rollen", "Von links rollen", "Von oben rollen", "Von unten rollen", "Box nach innen", "Box nach außen", "Zufall"];
var infoArray = ["Name:","Größe:","Datum:","Standort"];

var picturePresetBarTitleInfo = "Bildvoreinstellung";
var picturePresetBarArray = ["Standard","Dynamik","Studio","Kino","Benutzer"];
var upTipsInfo = "Bild verschieben"; //add yums 2014-10-10
var consoleTipsArray = ["Konsole","Zurück","Weiter","Wiedergabeliste","Einstellungen"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Drücken Sie erneut die Pfeiltaste RECHTS, um das nächste Bild anzuzeigen","Drücken Sie erneut die Pfeiltaste LINKS, um das vorherige Bild anzuzeigen","Drücken Sie erneut die Pfeiltaste ABWÄRTS, um die Wiedergabeliste anzuzeigen"]; //add yums 2014-10-10

var optionPvrListArray = ["Bildvoreinstellung","Tonvoreinstellung", "Bildschirmmodus", "3D-Modus", "Untertitel", "Soundtrack", "Info"];							
	
var titleSpanFirstArray = ["Steuerung & Verbindung","Allgemeine Bedienungshinweise","APPS","TV","Einstellungen","FAQs"];
var titleSpanSecondArray = [["Fernbedienung","Bedientasten","Einfache Navigation","TV-Anschluss","TV-Anschluss","TV-Anschluss","Drahtlos"],["Launcher","Statusbalken","Quelle"],["Laufende Apps","Medien","Fernbedienung"],["Kanal und Lautstärke einstellen","Kanalliste","EPG","Senderinstallation","Favoritenkanäle"],["Bildeinstellung","Toneinstellung","Kanaleinstellung","Softwareupdate","Sprache","Jugendschutz"],["Häufig gestellte Fragen","Häufig gestellte Fragen","Störungsbehebung","Störungsbehebung","Geschäftsbedingungen"]];
var contentSpan1_1Array = [["LISTE:","INFO:","MENÜ:","EIN/AUS:","SIGNALQUELLE:","PROGRAMMFÜHRUNG:","SMART TV:"],["Zeigt die Kanalliste an","Zeigt Programminformationen an","Rückkehr zur Homepage","Schaltet das Gerät ein oder in den Stand-by-Modus","Auswahl der Eingangsquelle","EPG (Elektronische Fernsehzeitschrift) wird angezeigt","Navigieren Sie zur Seite Smart TV"]];
var contentSpan1_2Array = ["Vorheriger Sender","Nächster Sender","Lautstärke erhöhen up","Lautstärke verringern","Rückkehr zur Homepage","Option bestätigen","Stand-by-Modus / Ein"];
var contentSpan1_3Array = ["OK/Menüführung","Sender aufwärts","Sender abwärts","Lautstärke verringern","Lautstärke erhöhen","Verwendung als Navigantionstasten in einigen Funktionen."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","AV-Ausgang","LAN","Smartphone","PC/Digitalempfänger/ DVD-Player","Audio-Verstärker","Audio-Verstärker/Monitor","Ihr Fernseher verfügt möglicherweise nicht über alle Anschlüsse."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Kopfhörer","AV-Eingang","SPDIF","CMP AUDIO Eingang","CMP Eingang (YPbPr)","USB-Geräte","USB-Geräte","Kopfhörer","DVC/Spielkonsole/ Digitalempfänger/DVD-Player","Audio-Verstärker","DVC/Spielkonsole/ Digitalempfänger/DVD-Player","Ihr Fernseher verfügt möglicherweise nicht über alle Anschlüsse."];
var contentSpan1_6Array = ["CI-Modul","SD","VGA","SCART","Mini SCART","ANTENNE Eingang","PCMCIA-Karte","SD-Karte","PC","Digitalempfänger/ DVD-Player","Antenne/Kabel/Satellit","Ihr Fernseher verfügt möglicherweise nicht über alle Anschlüsse."];
var contentSpan1_7Array = ["Tablette","PC","Router","Telefon","TV"];

var contentSpan2Array = [["Drücken Sie die Navigationstasten, um die Homepage anzuzeigen.","Dann drücken Sie OK, um eines der Programme anzuzeigen oder die App aufzurufen."],["Datum, Netzwerk und Geräte werden oben rechts im Bild angezeigt."],["Wählen Sie die Eingangsquelle unter den über die verschiedenen Anschlüsse mit dem Fernseher verbundenen Geräte, wie TV, AV, HDMI usw."]];

var contentSpan3Array = ["Zeigen Sie Ihre Lieblings-Apps auf der Seite Smart TV an","Fotos, Videos und Musik von USB-Speichermedium wiedergeben.","Verbinden Sie Ihren Fernseher und Ihr Smartphone oder Tablet auf dem gleichen LAN","Klicken Sie auf TCL nScreen oder TCL nScreen auf Ihrem Smartphone oder Tablet","Geben Sie Fotos, Videos und Musik für Ihre Familie auf mehreren Bildschirmen frei und bedienen Sie Ihren Fernseher über Ihr Smartphone"];

var contentSpan4Array = [["Drücken Sie AUFWÄRTS/ABWÄRTS, um Kanäle umzuschalten","Drücken Sie LINKS/RECHTS, um die Lautstärke einzustellen"],["Drücken Sie LIST auf der Fernbedienung, um die Programme anzuzeigen","Drücken Sie AUFWÄRTS/ABWÄRTS, um Ihren Kanal zu wählen"],["EPG ist eine elektronische Fernsehzeitschrift. In der Funktion können Sie die Programme navigieren, wählen, anzeigen und aufnehmen."],["Kanäle suchen und installieren"],["Favoritenkanäle in der Kanalliste hinzufügen oder bearbeiten"]];

var contentSpan5Array = ["Genießen Sie Ihre Favoritenprogramme über die Video-Apps"];

var contentSpan6Array = [["Drücken Sie MENÜ, um die Systemeinstellungen anzuzeigen","Rufen Sie die Bildeinstellungen auf, um die Werte einzustellen"],["Drücken Sie MENÜ, um die Systemeinstellungen anzuzeigen","Rufen Sie die Toneinstellungen auf, um die Optionen einzustellen"],["Drücken Sie MENÜ, um die Systemeinstellungen anzuzeigen","Rufen Sie die Kanaleinstellungen auf, um die Optionen einzustellen"],["Aktualisieren Sie Ihren Fernseher, wenn eine neue Software-Version verfügbar ist"],["Wählen Sie Ihre bevorzugte Menüsprache"],["Aktiviert die Jugendschutzsperre für Kanäle oder Programme, die für Kinder ungeeignet sind"]];

var contentSpan7_1Array = [["Kein Bild, kein Ton","Vergewissern Sie sich, dass Ihre Sicherung oder der Trennschalter in Ordnung ist.","Schließen Sie ein anderes Gerät zur Überprüfung an der Steckdose an.","Der Netzstecker steckt nicht richtig in der Steckdose.","Überprüfen Sie die Signalquelle."],["Bild, aber kein Ton","Erhöhen Sie die Lautstärke.","Die Toneinstellungen sind falsch.","Signalfehler vom Sender."],["Ton, aber kein Bild","Stellen Sie die Helligkeit und den Kontrast ein","Signalfehler vom Sender.","Überprüfen Sie, ob nur der Audiomodus eingestellt ist."]];
var contentSpan7_2Array = [["Funkfrequenzstörungen","Diese Störungen führen zu Wellen oder diagonalen Streifen und in einigen Fällen zum Verlust des Kontrasts im Bild. Finden und entfernen Sie die Störquelle."],["Keine Farbe","Ändern Sie die Farbeinstellungen.","Versuchen Sie einen anderen Kanal. Möglicherweise handelt es sich um einen Schwarz-Weiß-Film."],["Die Fernbedienung funktioniert nicht","Tauschen Sie die Batterien aus.","Die Batterien sind nicht richtig eingesetzt. Der Fernseher ist nicht angeschlossen."]];
var contentSpan7_3Array = [["Inhalte des USB-Geräts werden nicht angezeigt","Vergewissern Sie sich, dass das USB-Speichermedium mit dem Fernseher kompatibel ist.","Vergewissern Sie sich, dass Audio- und Bilddateiformate vom Fernseher unterstützt werden."],["Wiedergabe ohne Ton","Das Audioformat des Videos wird nicht durch den Player des Fernsehers unterstützt."],["Dateien werden nicht gleichmäßig abgespielt","Die Übertragungsleistung des USB-Speichermediums beeinträchtigt möglicherweise die Datenübertragungsrate zum Fernseher."]];
var contentSpan7_4Array = [["Worauf muss ich achten, wenn ich Software aktualisiere?","Keinesfalls das Gerät während der Software-Aktualisierung ausschalten.","Jede Steuerung mit der Fernbedienung während der Software-Aktualisierung vermeiden.","Seien Sie während der Software-Aktualisierung geduldig, es kann etwas länger dauern."],["Auf dem Bildschirm sind während der Software-Aktualisierung keine Veränderungen zu sehen.","Unter bestimmten Umständen wird nicht nur Ihre Software aktualisiert oder neue Funktionen hinzugefügt, sondern es kann sich auch die Leistung des Fernsehers verbessern, ohne dass Sie Veränderungen auf dem Bildschirm sehen. Auch die Benutzeroberfläche kann unverändert bleiben."]];
var termsTitle = "Geschäftsbedingungen";
var termsConditions = ["(Rechtlicher Hinweis) von TCL – Hersteller dieses Fernsehers. ","Aufgrund der vielfältigen Funktionen von Produkten mit SmartTV-Diensten und begrenzt verfügbarer Inhalte sind bestimmte Funktionen, Anwendungen oder Dienste nicht mit allen Geräten oder in allen Regionen verfügbar. Einige SmartTV-Funktionen erfordern möglicherweise zusätzliche Peripheriegeräte oder separat zu zahlende Mitgliedsbeiträge. Bitte besuchen Sie unsere Webseite für mehr Informationen über bestimmte Geräte und die Verfügbarkeit von Inhalten. Die Dienste und Verfügbarkeit von SmartTV-Inhalten unterliegen gelegentlichen und nicht vorher angekündigten Änderungen. \n   Alle über dieses Gerät angebotenen Inhalte und Dienste sind Eigentum Dritter und durch Urheberrechte, Patente, Markenzeichen und/oder geistige Eigentumsrechte geschützt. Solche Inhalte und Dienste werden Ihnen nur für private, nicht gewerbliche Zwecke angeboten. Es ist untersagt, Inhalte oder Dienste für Zwecke zu verwenden, die nicht vom Eigentümer oder Anbieter der Inhalte oder Dienste autorisiert wurden. Unbeschadet der Gültigkeit des Vorangehenden ist es ohne ausdrückliche Zustimmung der Eigentümer oder Anbieter der Inhalte oder Dienste nicht erlaubt, über dieses Gerät angebotene Inhalte oder Dienste auf irgendeine Art und Weise oder über ein Medium zu modifizieren, zu kopieren, neu zu veröffentlichen, hochzuladen, ins Internet zu stellen, zu übertragen, zu übersetzen, zu verkaufen, zu verwerten, zu vertreiben oder davon abgeleitete Erzeugnisse zu erstellen. \n   SIE ERKENNEN AUSDRÜCKLICH AN UND STIMMEN ZU, DASS SIE DAS GERÄT AUF EIGENE GEFAHR VERWENDEN UND DASS DAS RISIKO IN BEZUG AUF ZUFRIEDENSTELLENDE QUALITÄT, LEISTUNG UND GENAUIGKEIT VOLLSTÄNDIG BEI IHNEN LIEGT. DAS GERÄT UND ALLE INHALTE UND DIENSTE DRITTER WERDEN „OHNE GARANTIE“ – AUSDRÜCKLICH ODER STILLSCHWEIGEND – ANGEBOTEN. TCL LEHNT AUSDRÜCKLICH ALLE GARANTIEN UND AUFLAGEN, AUSDRÜCKLICH ODER STILLSCHWEIGEND, IN BEZUG AUF DAS GERÄT UND ALLE INHALTE UND DIENSTE AB, EINSCHLIESSLICH, JEDOCH NICHT AUSSCHLIESSLICH DER ZUSICHERUNG ALLGEMEINER GEBRAUCHSTAUGLICHKEIT, ZUFRIEDENSTELLENDER QUALITÄT, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, VON GENAUIGKEIT, GUTER UNTERHALTUNG, UND DER ZUSICHERUNG, DASS KEINE RECHTE DRITTER VERLETZT WERDEN. TCL GARANTIERT NICHT DIE GENAUIGKEIT, GÜLTIGKEIT, PÜNKTLICHKEIT, RECHTMÄSSIGKEIT ODER VOLLSTÄNDIGKEIT VON INHALTEN ODER DIENSTEN, DIE ÜBER DIESES GERÄT ANGEBOTEN WERDEN, UND GARANTIERT NICHT, DASS DAS GERÄT, DIE INHALTE ODER DIENSTE IHREN ANFORDERUNGEN ENTSPRECHEN ODER DASS DER BETRIEB DES GERÄTS ODER DIE DIENSTE UNUNTERBROCHEN UND FEHLERFREI SIND. UNTER KEINEN UMSTÄNDEN, AUCH NICHT BEI FAHRLÄSSIGKEIT, HAFTET TCL WEDER VERTRAGLICH NOCH GESETZLICH FÜR DIREKTE, INDIREKTE, BESONDERE ODER FOLGESCHÄDEN, FÜR ANWALTSKOSTEN ODER AUSGABEN, ODER FÜR ANDERE SCHÄDEN AUFGRUND VON ODER IN VERBINDUNG MIT ENTHALTENEN INFORMATIONEN, DER ANWENDUNG DIESES GERÄTS, ODER DER VON IHNEN ODER DRITTEN IN ANSPRUCH GENOMMENEN INHALTE UND DIENSTE, AUCH WENN SIE AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDEN. \n   Dienste Dritter können jederzeit und ohne Vorankündigung geändert, aufgehoben, entfernt, beendet, unterbrochen oder deren Zugang kann deaktiviert werden. TCL (Hersteller von Fernsehgeräten der Marke Thomson) übernimmt keine Vertretung oder Garantie dafür, dass Inhalte oder Dienste für einen bestimmten Zeitraum zur Verfügung stehen. Inhalte und Dienste werden von Dritten über Netzwerke und Übertragungsstationen übertragen, die außerhalb des Kontrollbereichs von TCL liegen. Unbeschadet der Allgemeingültigkeit dieses Haftungsausschlusses lehnt TCL ausdrücklich jede Verantwortung oder Haftung für Änderungen, Störungen, Deaktivierung, Entfernung oder Aufhebung von Inhalten oder Diensten, die über dieses Gerät angeboten werden, ab. TCL kann jederzeit und ohne Ankündigung oder Haftung Einschränkungen für die Nutzung von oder für den Zugang zu bestimmten Diensten oder Inhalten auferlegen. TCL kann für Kundendienste in Bezug auf die Inhalte und Dienste weder verantwortlich noch haftbar gemacht werden. Fragen oder Anfragen in Bezug auf die Inhalte und Dienste müssen direkt an die jeweiligen Anbieter der Inhalte und Dienste gestellt werden."];

var noChannelListRemind        = ["Keine Kanäle gefunden. Die Kanalliste ist nach der Kanalsuche verfügbar.","Kanalscan"];
var closeSubtitleRemind   = "Die Funktion ist verfügbar, wenn die Untertitel ausgeschaltet sind. Möchten Sie die Einstellung jetzt vornehmen?";

var estickerTitles = ["Sehr realistische Bilder","Farben erwecken zum Leben","Großartige lebensechte Bewegung","Dynamische Bildqualität","SR UHD Hochskalierung","Erleben Sie die Welt in 3D","Schnellere Leistung","Zukünftige 4K-Inhalte","Genießen Sie die Online-Welt","Greifen Sie auf zusätzliche Inhalte zu","Integrierte Digital-Tuner","Alle Geräte verbinden","Verschiedene 4K-Quellen","USB-Inhalte","Ultraschnelles WLAN","Mobile Inhalte auf dem Fernseher","Inhalte von Mobilgeräten","Lokale Inhalte","Zugelassen durch DivX","Nahtloses Bild","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Verblüffendes Seherlebnis auf dem UHD-Bildschirm dank der viermal mehr detaillierten Bilder eines FHD-Bildschirms.","Großer Farbbereich bietet Emotion in jeder Szene mit lebhaften Rot- und smaragdfarbenen Grüntönen","4K Frame-Interpolation und Hintergrundbeleuchtung gegen Probleme mit der Bewegungsunschärfe","Die Lebhaftigkeit des Originalbildes wird durch wahrhaft dynamischen Ausdruck mit brillantem Kontrast verbessert","Dank der Super-Resolution-Technologie genießen Sie frischere Fernsehshows und Blu-Ray Discs als je zuvor","Erleben Sie 3D TV-ready und sehen Sie verschiedene 3D-Inhalte","Angenehmere Unterhaltung mit Quad Core für ein gleichmäßiges Zusammenspiel und verbesserte Leistung","Unterstützt HEVC (H.265) Codec  für den zukünftigen Standard 4K-Video","Jede Menge Online-Apps, VOD-Dienste, Nachholsendungen und Web-Browsing im Internet","Sehen Sie mehr Zusatzdienste und Inhalte Ihres Lieblingssenders","Zugriff auf Fernsehkanäle in HD ohne zusätzlichen Digitalempfänger","Einfacher Anschluss vieler Digitalquellen, die zu Hause verfügbar sind","TV bereit für zukünftige Anwendungen, Wiedergabe von 4K 50/60 Hz über HDMI 2.0 mit HDCP 2.2 möglich","Videos oder Fotos direkt von USB-Speichermedien, Festplatten oder Kamera auf Leinwand in 4K-Auflösung","Neueste Generation 2x2 MIMO und AC-Standard konkurrenzlose Zugangsgeschwindigkeit für das Internet","Genießen Sie Fotos, Videos, Apps von Mobilgeräten dank der Bildschirm-Spiegelungstechnologie auf der Leinwand","Fotos, Videos und Apps von Smartphone oder Tablet können auf der Leinwand gezeigt werden ","Leinwanddarstellung lokaler Inhalte wie Fotos und Videos von Geräten, die mit dem lokalen Netzwerk verbunden sind","Wiedergabe geliehener oder eigener Filme, die mit DivX geschützt sind","Ultraschmale Einfassung und superflaches Design","Getestet und erprobt durch Canal+","Getestet und erprobt durch TDT Premium"];							

var eManualTextArray = ["eBedienungsanleitung","Die Abbildungen dienen nur als Referenz."];
var frontPanelRemind = "Nahbedientasten gesperrt.";
var eRPRemind		 = "Im Shopmodus werden die ERP-Anforderungen überstiegen. Sind Sie sicher?";	
var noRelatedChannel = "Kein zugehöriger Kanal";
var option0624Name          = ["BOP","BFS","Event nach Event","GetUserID","BGM","Reset all","Werkseinst. wiederherstellen","NRM","DVB-T2 und Land wählen","HbbTV-Modus"];
var DVBT2AndChoice = ["Ein","Nach Land","Aus"];
var hbbtvServiceRemind = "HbbTV bald verfügbar.";
var insertWord = "Einfügen";
var viewDetail = "Details anzeigen";

var remindOAD  = "Software-Aktualisierung. Neue empfohlene Software-Aktualisierung existiert auf anderem Kanal. Akzeptieren Sie den Download, so wird der Kanal automatisch umgeschaltet. Möchten Sie fortfahren?";

var LEDStatus = ["Blinkt", "Normal"];
var netFlixRemind = "Diese Funktion beendet den Zugriff auf die Netflix-Dienste, bis Sie sich wieder anmelden.";
var ESNExplanation = "Elektronische Seriennummer";
var resetShopRemind = "Das System setzt sich jetzt zurück, bitte schalten Sie den Fernseher nicht aus";
var initialSelectOption = "Bitte wählen Sie eine Option aus:";
var databaseRemind   = "Das System hat festgestellt, dass die Datenbank aus irgendeinem Grund beschädigt wurde und es stellt sie wieder automatisch her. Fahren Sie mit OK fort";
var Deactivation = "Deaktivierung";
var oadFutureRemind = "Softwareaktualisierung. Eine neue empfohlene Software steht um %s zur Verfügung. Die Aktualisierung kann einen Moment dauern und der Bildschirm wird dunkel. Schalten Sie das Gerät während der Aktualisierung nicht aus. Lassen Sie das Gerät zum entsprechenden Zeitpunkt eingeschaltet oder im Stand-by-Modus, falls Sie die Aktualisierung wünschen. Möchten Sie diese Aktualisierung empfangen?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Tonausgang";
var bt_soundOutPutTV = "TV-Sprecher";
var bt_soundOutPutBT = "Bluetooth-Gerät";
var bt_soundOutPutBT_TV = "Bluetooth und TV";
var bt_refreshBarName = "Geräte";
var bt_settingTips_On = "Bluetooth-Funktion aus und Geräte suchen. ";
var bt_settingTips_Finding = "Geräte werden gesucht…";
var bt_settingTips_NoDevice = "Kein Gerät verfügbar.";
var bt_deviceList_State_NoConnect = "Nicht verbunden";
var bt_deviceList_State_Connecting = "Verbinde...";
var bt_deviceList_State_Connected = "Verbunden";
var bt_deviceList_State_Paired = "Gekoppelt";
var bt_deviceList_Conncect_Failed_Tips1 = "Verbindungsfehler.";
var bt_deviceList_Conncect_Failed_Tips2 = "Bestätigen, XXX Bluetooth-Funktion ist an";
var bt_deviceList_Conncect_Success = "Mit Bluetooth-Gerät verbunden.";
var bt_deviceList_Disconncect_Success = "Von Bluetooth-Gerät getrennt.";
var bt_deviceList_Disconnect = "Möchten Sie wirklich von XXX trennen?";
var bt_tipsTitle = "Tipp";
var bt_bluetooth_Pairing_Title = "Bluetooth koppelen";
var bt_bluetooth_Input_Pin = "PIN eingeben:";
var bt_bluetooth_Output_Pin_Tip = "PIN XXXX mit Tastatur eingeben.";
var bt_bluetooth_Pin_Wrong_Tip = "Falsche PIN";
var bt_bluetooth_Remove_Pair_Title = "Frage";
var bt_bluetooth_Remove_Pair_Ask = "Gerät vergessen?";
var bt_bluetooth_module_error = "Bluetooth-Modul-Fehler!";							
var netflixDialogOptions = ["OK","Später","Nicht mehr anzeigen"];
var netflixDialogContent = "Bei Netflix gibt es tausende Filme zu sehen, jetzt hingehen?";
var netflixRemoteDialogContent = "Die Fernbedienung mit Netflix-Taste ist jetzt lieferbar. Besuchen Sie die folgende Website für weitere Informationen.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Aktuelle Quelle","Alle Quellen"];
var audioDescriptionName = ["Audio-Beschreibung","Lautsprecher","Lautstärke Lautsprecher","Kopfhörer","Lautstärke Kopfhörer","Lautstärke AD","BT-Gerät","Lautstärke BT-Gerät"];
var audioDescriptionOptions = ["Aus","Normal","Audio-Beschreibung"];							
var volumeOffRemind = 'Wählen Sie für XXX im Einstellungsmenü die Option „Ein“.';
var switchSourceRemind   = " eingefügt. Jetzt wechseln?";

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sportmodus";
var resetStadium = "Stadion";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Beenden","0","Zoom+",
                       	   "Beenden",
                       	   "Liste","0","Text","Programm-Guide","Eingeben","Beenden","Menü","Untertitel","Info",
                       	   "Stopp",
                       	   "Info","Menü","Beenden"
                       	   ];
var nscreenTips = "GuideOn hilft Ihnen bei der Navigation der umfangreichen Inhalte.";
var nscreenContent = 'Schritte: 1. Tippen Sie auf „TCL nScreen“ auf Ihrem Smartphone.  Verbinden Sie das Telefon über das gleiche LAN mit dem Fernseher. 2. Tippen Sie auf „GuideOn“, um GuideOn aufzurufen. 3. GuideOn bietet Ihnen Funktionen ähnlich wie eine Fernsehzeitschrift. ';
var singalBrokenoffTips = "Signal unterbrochen. System kann Download nicht beenden.";
var contentSpan1_1Array_AU =  [["ALIMENTATION:","SOURCE:","MENU:","BACK:","INFORMATIONS:","HOME:","EXIT:","LISTE:"],
                            ["Turns power on or standby mode","Select the input source",
                             "Show TV settings menu","Go back to the Previous menu or exit a running APP","Zeigt Programminformationen an",
                            "Rückkehr zur Homepage","Go back to the Previous menu or exit a running APP","Zeigt die Kanalliste an"]];
var guideDescriptionWords ="Scannen Sie den QR-Code zum Download der GuideOn App auf Ihr Smartphone.";
var settingNoticeSourceName ="Autom. Quelle";
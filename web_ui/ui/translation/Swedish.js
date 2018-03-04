
var all_country 	= ["Österrike","Österrike","Belgien","Bulgarien","Kroatien","Tjeckien","Danmark","Finland","Frankrike","Tyskland",
						"Grekland","Ungern","Italien","Luxemburg","Nederländerna","Norge","Polen","Portugal","Rumänien","Ryssland",
						"Serbien","Slovenien","Spanien","Sverige","Schweiz","Storbritannien","Nya Zeeland"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Lettland","Slovakien","Turkiet","Irland","*","Filippinerna","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kina","*","*","*","*","*","*","Annat","Litauen"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litauen"];							
				
var all_language 	= ["Tjeckiska","*","Danska","*","*","Tyska","Engelska","Spanska","Grekiska","Franska",
						"Kroatiska","*","Italienska","Ungerska","Holländska","Norska","Polska","Portugisiska","Ryska","Rumänska",
						"Slovenska","Serbiska","Finska","Svenska","Bulgariska","Slovakiska","*","*","Gaeliska","*",
						"Walesiska","Arabiska","Ирландски","Lettiska","*","Turkiska","Estländska","Holländska"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Originalljud"/*Qaa*/,"Ej definierat"/*Undetermined*/,"*","Okänt",
						"Ej definierat","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskiska","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Белоруски","*","*","Katalanska","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiciska","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Isländska","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litauiska",
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
						"*","*","*","Samiska","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Text-TV",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainska","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Av","På"];
var okCancel		= ["OK","Avbryt"];
var yesNo			= ["JA","NEJ"];
var level			= ["Av","Låg","Hög","Mellan"];
var manualAuto		= ["Manuell","Auto"];
var homeShop		= ["Hem","Butik"];
var picPreset		= ["Standard","Dynamisk","Naturlig","Bio","Digital bio","Användare"];
var picColorTemp	= ["Kall","Normal","Varm","Varm2","Användare"];
var pic3dNavig		= ["Manuell","Auto","Semi-auto"];
var _3dOptions		= ["3D Läge","3D-till-2D","V-H Brytare","Djupskärpa"];
var pic3DMode       = ["Av","2D-till-3D","Sida vid Sida","Topp och botten","Linje intersenkvensera"];
var picEcoOptions	= ["Energisparande","Ljussensor","Lokal dimming","Mixa  dimning"];
var picGeoOptions	= ["Geometri","H. position","V. position","Klocka","Fas"];//Geometry 无翻译
var picAdWhiteBal	= ["R ökning","G ökning","B ökning","R förskjutning","G förskjutning","B förskjutning"];
var souOptions		= ["Förinställning ljud","Balans","Ljudfördröjning","SRS TSHD","Auto. volymkontroll",
						"SPDIF typ","SPDIF fördröjning","TV placering","Ljudspråk","Ljudkanal",
						"Ljudbeskrivning","Digital ljudutgångstyp","Inställningar för Dolby professional"];
var soundOutputoptions =["DAP-utgång för TV-högtalare","Extern AVR-kodningsutgång"];
var inteligenteqoptions 	=["Fokuserad","Fyllig"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Av"];
var colorSpace      = ["Auto","Ursprunglig","Användare","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Surround virtualizer","Dialog förstärkare","Bas förstärkare","Intelligent loudness","Media intelligens","Grafisk EQ","Intelligent EQ" ];
var chOptions		= ["Kanalsökning","Kanallista","EPG","Organiserare","Kanaldiagnostik",
						"tildsförskjut.","Undertexter","Text-TV","Typ av kanallista"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalstyrka","Signalkvalitet","Frekvens (kHz)","Service-ID","Nätverks-ID","Nätverksnamn"];
var chScanOptions	= ["Land","Mottagarläge","Kanalsökning","Autouppdatering","Analog manuell sökn",
						["Manuell kabelskanning","Manuell antennskanning","Manuell inställning för satellit "],"Installation satellitantenn","Favoritnätverk valt","Rensa kanallistan",];
var favNetDes		= "Välj ditt favoritnätverk";
var tuner			= ["Kabel","Antenn","Satellite"];//Satelite 无翻译
var passError		= "Lösenord felaktigt.\nAnge igen!";
var chType			= ["Analoga kanaler: ","Digitala kanaler: "];
var chScanStatus	= ["Status: Skannar","Status: Sökning färdig","Status: Sökning avbruten","Status: Sökningsfel"];
var chScanPara		= ["Frekvens (kHz)","Modulering","Symbolhastighet (Ksym/s)","Nätverks-ID","System",
						"Fininställning","Signalstyrka","Signalkvalitet","Skanningsläge","Kanal id"];
var chScanParaMHZ      = ["Frekvens (MHz)"];
var chAtvManSys		= ["VÄSTEUROPA","ÖSTEUROPA","England","Frankrike"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Vill du rensa kanallistan?";
var chDeletDes		= "Vill du radera kanalen?";
var chOperator		= ["Ziggo","UPC","Övriga"];
var chScanType		= ["Digital & Analog","Digital","Analog"];
var chScanMode		= ["Fullt","Avancerad","Snabb"];
var bookingModes	= ["Inspelning","Påminnelse"];
var dayName			= ["sö","må","ti","on","to","fr","lö"];
var monthName		= ["jan", "feb","mar","apr","maj","Jun","juli","aug","sep","okt","Nov","dec"];
var filter			= ["Filter","Typ","Undertyper"];
var chEpgFirstGenre	= ["Bio","Nyheter","Underhållning","SPORT","Barn","Musik","Konst","Samhälle","Utbildning","Fritid","Speciell"];
var chEpgSecondGenre= [["Drama","Kriminal","Äventyr","Science fiction","Komedi","Såpa","Romantik","Allvarsamt","Vuxenfilm"," "," "," "],
						["Aktuella frågor","Väderrapport","Nyhetsmagasin","Dokumentär","Diskussion"," "," "," "," "," "," "," "],
						["Underhållning","Spelunderhållning","Varietéunderhållning","Intervjuprogram"," "," "," "," "," "," "," "," "],
						["SPORT","Speciella händelser","Sportmagasin","Fotboll","Tennis",
							"Lagsport","Idrott","Motorsport","Vattensport","Vintersport",
							"Hästsport","Kampsport"],
						["Barn","Förskolebarn","Underhållning för 6 till 14","Underhållning för 10 till 16","Information","Tecknat"," "," "," "," "," "," "," "],
						["Musik","Rock","Allvarsamt","Folkmusik","Jazz","Musikal","Balett"," "," "," "," "," "],
						["KONST","Bild- och teaterkonst","Finkultur","Religion","Populärkultur",
							"Literatura","Film","Exprimenterande","Sändning","Nya media",
							"Revistas de artes","Mode"],
						["SAMHÄLLE","Magasin","Ekonomi","Anmärkningsvärda personer"," "," "," "," "," "," "," "," "],
						["Utbildning","Natur","Teknologi","Medicin","Främmande länder","Socialvetenskap","Vidarutbildning","Språk"," "," "," "," "],
						["Fritid och hobby","Turism","Hantverk","Motor","Hälsovård","Matlagning ","Reklam","Trädgård"," "," "," "," "],
						["Originalspråk","Svart och vitt","Opublicerat","Direktsändning"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Hoppa över kanal","Kanalsortering","Kanalredigering","Radera kanal","kanal växlingsutrymme","kanal insats"];
var chEditPara 		= ["Nätverksnamn","Kanalnummer","Kanalnamn","Frekvens","Färgsystem","Ljudsystem"];
var chSatTitles		= ["Satellittyp","Installation satellitantenn","Välj satellit"];
var chSatEidtOptions= ["Satellitnamn","Position","LNB Ström","LNB-frekvens (MHz)","Diseqc ingång",
						"Ton 22Khz","tonskuren","Frekvens (kHz)","Symbolhastighet (Ksym/s)","Polarisering",
						"Signalstyrka","Signalkvalitet","Satellitstatus"];
var chSatAutoPromt	= [["Alla","Nätverk"],
						["Alla","Gratis"]];
var chSatAutoScanOptions=["Välj satellit","Skanningsläge","Kanaler"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Avaktivera","A","B","C","D"];
var chSatTone22KHz	= ["Auto","På","Av"];
var chSatToneBurst	= ["Avaktivera","tonskuren A","tonskuren B"];
var chSatPolarization= ["Horisontal","Vertikal"];
var chSatSetupOptions=["Antenntyp","Mottagare","Bandfrekvens"];
var chSatAntennaType= ["SingleCable","Universal"];
var chSatUserBands	= ["Användare band 1","Användare band 2","Användare band 3","Användare band 4","Användare band 5","Användare band 6","Användare band 7","Användare band 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Användardefinierad"];
var pleaseSelectSat = "Välj först satteliter! ";
var subOptions		= ["Undertexter","Språk digital undertext","Språk digital undertext 2","Undertexter typ"];
var ttxOptionsCon      = ["Kodning språk sidor","Språk digital text-TV"];
var subType			= ["Normal","Hörselskadad"];
var netIntf     	= ["Ethernet ","Trådlös"];
var netConnDes		= ["TV testar nätverksanslutningen.\nVänta",
						"Nätverksanslutningstestet lyckades!",
						"Nätverksanslutningstestet misslyckades."];
var netSsidError	= "Accepterad längd av SSID är 1~32 tecken. Vänligen kontrollera SSID. ";
var netOthers		= ["PIN-kod"];
var netWlessAutoDes	= ["Kontrollera att följande PIN-kod är installerad i Access Point innan du klickar på OK.",
						"Tryck på knappen i Access Point inom 120 sekunder innan du klickar på OK."];
var netConnRemind	= ["Lösenord felaktigt!",
						"Ansluter. Vänta!",
						"Anslutningen lyckad och IP adressen erhölls!",
						"Länkfel",
						"TV scannar AP\nVänligen vänta",
						"Det finns ingen trådlös enhet ansluten till TV! "];
var netWireIpOptions= ["IP-inställning","Ange adress","IP-adress","Subnätmask","Standardgateway ","Primär DNS","Sekundär DNS"];
var netWireConnRemind= ["Ange ett värde mellan 0 och 255.",
						"Anslutning lyckades! ",
						"Ange en giltig adress ",
						"Anslutning lyckades! ",
						"Misslyckad anslutning!",
						"Ansluter. Vänta!",
						"Ange ett värde mellan 1 och 223. "];
var netFlixOptions	= ["Avaktivera","ESN"];
var netFlixDes	 	= ["Är du säker på att du vill avaktivera?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Programuppdatering";
var netUpdateDialogTitle = "Mjukvaran uppgraderas";
var netBGDownloadTitle 	= "Laddar ner";
var netUpdateLoadingPrompt= ["Söker uppgradering, vänta! ",
							"Mjukvara laddas hem... vänta! ",
							"Stäng INTE AV TV:n under uppdatering av programvaran!",
                            "Mjukvarans imperativa uppgradering laddas hem automatiskt i bakgrunden!"];
var netUpdatePrompt= ["Grattis, du har den senaste programversionen!",
						"Den nya programversionen XXXX hittades. Vill du hämta den nu? Detta kan ta en stund, beroende på nätverksstatus.",
						"Misslyckad inloggning!",
						"Mottagning av data misslyckades, försök senare!",
						"Tolka uppdatera XML misslyckad!",
						"Länkfel",
						"Programvaran har hämtats. Vill du börja uppgradera?",
						"Data förlorad! Misslyckad nerladdning!",
						"Misslyckad kontroll av paketet, försök igen!",
						"Nätverket onormalt! Kontrollera och anslut på nytt...",
						"Misslyckad uppdatering. Starta om TV-n!",
						"Uppgraderingsfilen raderades oväntat. Vänligen gör om uppgraderingen via nätverket.",
						"Programmet har laddat ned i bakgrunden. Vill du utföra uppgraderingen?"];
var netUpdateButtonText = ["Hämta", "Uppdatera", "Senare", "Aldrig", "OK","Fortsätt"];
var autoDetectPrompt = ["Den nya programversionen XXXX hittades. Vill du hämta den nu? Detta kan ta en stund, beroende på nätverksstatus.",
						"Ny mjukvara med version XXXX hittades. Vill du uppdatera nu?",
						"Uppgraderingen via nätverket avbröts förra gången. Du måste göra om uppgraderingen.",
                        "Nedladdning av ny mjukvaruversion XXXX är inte avslutad. Vill du fortsätta nu? ",
                        "Mjukvara nedladdad, vill du uppgradera nu? "];
var sysOptions		= ["E-Manual","OSD-språk","Tidsinställning","Lås","Inmatningsinställningar",
						"Programuppdatering","Plats","HbbTV-läge","Cookies","Gemensamt gränssnitt",
						"Avancerade inställningar","Återställ","LED-indikator"];
var sysResetDes		= "Är du säker?";
var sysMenuLangOptions=["Språk","Proiriterat ljudspråk","Andra ljudspråk"];
var sysTimerOptions	= ["Tidszon","Regionsnamn","Klocka","Avstängningstimer","Automatisk standby", "Country region"];

var sysTimeZone		= ["Som sändare","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Av","10 minuter","20 minuter","30 minuter","40 minuter","50 minuter","60 minuter","90 minuter","120 minuter"];
var sysStandby		= ["Av","4 timmar","6 timmar","8 timmar"];
var sysRegionName	= ["Madrid","Kanarie"];
var sysClockOptions	= ["Auto synkronisering","Datum","Tid","Påslagningstimer","Tidsinställning",
						"Ström på kanal","Avstängningstimer","Tidsinställning"];
var sysTimer		= ["Av","Dagligen","En gång"];

var sysInputSet		= ["Inget namn","DVD","Blu-ray","HDD","DVDR",
						"HD-recorder","Spel","VCR","Dator","STB digital",
						"STB digital HD","Kamera","Recorder","Övrigt"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Via USB","Via nätverk","Via kanal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Hittar inte ny mjukvara!",
						"Ny mjukvara med version XXXX hittades. Vill du uppdatera nu?",
						"För in USB-minnet.",
						"Misslyckad kontroll av paketet, försök igen!",
						"Ta INTE UT USB-dongeln och stäng av TV:n medan den fasta programvaran uppdateras!!",
						"Mjukvaran har framgångsrikt uppdaterats. \nTV kommer nu att starta om automatiskt.",
						"Den nya programversionen XXXX hittades. Vill du hämta den nu? Detta kan ta en stund, beroende på nätverksstatus.",
						"Laddar ner",
						"Programvaran har hämtats. Vill du börja uppgradera?",
						"Ej uppdaterad",
						"Söker filer för uppgradering",
						"Programvaran har uppdaterats.\nStarta om TV:n nu."];
var sysProductInfo	= ["Aktuell version","Produktnamn","Tillverkarens namn","Namn på kåpa"];
var sysCiDes		= ["Inget CI-kort"];
var sysAdOptions	= ["DivX(R)-registrering","DivX(R) avregistrering","T-Link","Authorization Error","Avregistreringsbekräftelse",
						"Hyrbekräftelse","Hyrtid har gått ut","Bluetooth-deklarations-ID"];
var sysRegistDes	= ["Du måste registrera enheten för att spela DivX-skyddade filmer",
						"Registreringskod :",
						"Registrera på http://vod.divx.com"];
var sysDregistDes	= ["Kod för avregistrering ",
						"Avregistrera på http://vod.divx.com",
						"Fortsätt registreringen "];
var mediaAuthorization = ["Enheten är inte behörig att spela upp denna DivX(R)-skyddade video."];
var deregistrationConfrimation = ["Din enhet är redan registrerad. ","Är du säker på att du vill avregistrera? "];
var rentalConfirmation = "DivX(R)-hyran har använt XXXX av YYYY visningar. Fortsätt?";
var rentalExpired 	= "DivX(R) rental har använt XXXX utav YYYY visningar. DivX rental har utgått.  ";
						
						
var sysLockOptions	= ["Låst kanal","Tidsintervall lås","Åldersgräns","Inmatningslås","Inmatningslås","Installationslås",
						"Byt lösenord","Maximal volym","Rensa allt"];
var sysTimeIntervals= ["Låstyp","Starttid","Sluttid"];
var sysRatingOptions= ["Ingen","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Spanien)"];
var changePass		= ["Byt lösenord","Nytt lösenord","Bekräfta lösenord"];
var changePassDes	= ["Lösenord felaktigt.\nAnge igen!",
						"Lösenord stämmer inte.\nAnge igen!",
						"Lösenordet har angetts!",
						"Denna kod är för enkel som lösenord.\nVar vänlig mata in på nytt!"];
var sysPowerOnChOptions= "Välj läge";
var sysPowerOnCh	= ["Senaste status","Välj användare"];
var netWlessSecu    = ["Öppen","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ingen","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Inget stöd"];
var netWlessSecu3	= ["Ingen","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Inget stöd"];
var netOptions		= ["Internetanslutning","Gränssnitt","Trådlösa inställningar","IP-inställningar","Information",
						"Anslutningstest","DLNA","TCL nScreen","Netflix-inställningar","WiFi TV-link",
						"Ange adress","IP-adress","Subnätmask","Standardgateway ","Primär DNS",
						"Sekundär DNS","SSID","BSSID","Ange SSID:","Användar-ID"];
var chEditDes		= ["Duplicerat kanalnummer!","Tryck på röd knapp för att radera aktuellt tecken! ","Ogiltigt kanalnummer"];
var chEpgNoProgram	= "Programinfo ej tillgänglig, sök först kanaler!  ";
var chEpgWords		= ["Programguide","Programdata saknas.","Kanal låst!","Programdetaljer saknas.","Programtitel saknas."];
var chEpgBooking	= ["Arbetstider info", "Kanalnummer","Startdatum","Starttid","Sluttid",
						"Upprepningstyp","Schematyp","Lägg","Ersätt","Ändra",
						"Lägg till/Ändra"];
var epgHotKey		= ["Föregående dag","Nästa dag","Filter","Planeringslista","Lägg till plan"];
var chEpgBookRemind	= ["Felaktig starttid","Felaktig sluttid","Duplicerat schema","Sparats framgångsrikt.","Radering lyckad."];
var chSchePara		= ["Planeringslista","Starttid","Startdatum","Programtitel","Kanalnamn",
						"Längd","Repetera","Schema","Redigera","Radera"];
var dateTimer		= ["En gång","Dagligen","Varje vecka"];
var scheduleDeleteReminds="Vill du radera denna planeringslista?";
var scheduleNoLists	= "Planeringslista saknas. Tryck på \"Röd\" knapp för att lägga till en.";
var chListWords		= ["Kanallista","Välj lista","Mottagarläge","Lägg till i favoriter","Ta bort",
						"Välj kanallista","Välj tunerläge","Växla"];
var chListType		= ["Alla","Digital","Analog","Radio","Gratis","Favoriter"];
var chAutoScanOptions=["Välj Operatör","Kanaltyp","Kanalsökning"];
var souSoundType	= ["Ogiltig","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musik","Bio","Klar röst","Standard","Användare"];
var picAdRgbMode	= ["Av","Endast röd","Endast grön","Endast blå"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamisk Kontrast","LED Rörelseskärpa",
						"Hudton","Filmläge","Spelläge","Färgtemperatur","Vitbalans",
						"Stillbild","Svart Stretch","Överskanning","Gamma","HDMI-läge","10P vitbalans","Färgförlängare",
						"Skärpa","Bildstabilisering","Färgomfång","Rörelseskärpa"];
var pic10Pwhite     = ["Intervall ","Röd","Grön","Blå","Återställ","Färg","Gul","Cyan","Magenta"];
var picMotionClarity = ["Rörelseläge","Rörelseinterpolering","LED Rörelseskärpa","Skärpa","Bildstabilisering","Återställ"];
var picMotionMode   = ["Auto","Film","Mjuk","Rensa","Sport","Kund"];
var picResetDes		= "Alla personliga inställningar återställs. Är du säker på att du vill slutföra valet?";
var pic10PReset     = "Är du säker på att du vill återställa 10P vitbalans?";
var picMotionReset  = "Vill du återställa rörelseskärpa?";
var picColorSpaceReset    = "Är du säker på att du vill återställa färgomfång?";
var picOptions		= ["Bildläge",
						"Bakgrundsljus","Ljusstyrka","Kontrast","Mättnad","Färg","Skärpa","Färgtemperatur","Skärmläge","Hörlursvolym",
						"Sport förbättring","3D","3D-navigering","ECO Inställningar","Geometri",
						"Avancerade inställningar","Använd bildläge","Bildåterställning"];
var picSize			= ["16:9", "4:3 format", "14:9-format", "Cinerama",
						"Zoom 16:9", "Zoom 16:9 zgoraj","Zoom 14:9","Raztegnjeni zoom","Široki zoom ",
						"Zoom 2","Široki zoom 2","Matchning aktuell skärm","Dot by Dot","Original","Panorama"];
var others			= ["Volym","Broadcast","Lösenord","Status","Spara","Ersätt","Start","Avsluta","Sökning","Radera",
						"Ingen","Automatisk","Skanna","Säkerhet","Anslut","Uppdatera","Prova igen","Avsluta","Inställningar","Kanaler",
						"Redigera","För in","Signal!","Avsluta","Stereo","Ljud","Källa","Inget ljud","Tips","Återställ",
						"Kund","Inställning","Spara","Användare","Stäng tangentbord","Säkerhetsläge","Varje dag","PVR lista"];
var direction		= ["Vänster","Höger","Upp","Ned"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Okänt"];
var soundChannels   = ["Okänt","Mono","Under-","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2-kanal","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Vänster","Höger","Annat"];
var prompts			= ["Justera bildinställning till en som bäst passar din visningsmiljö.",
						"Justera ljusnivåer. Ju närmare 100, desto ljusare.",
						"Justera kontrastnivåer. Ju närmare 100, desto större kontrast mellan mörkt och ljust på bilden.",
						"Justera färgmättnadsnivåer. Ju närmare 100, desto starkare färger.",
						"Justera skärpenivåer. Ju närmare 100, desto klarare detaljer.",
						"Justera nivåer för bakgrundsljus. Ju närmare 100, desto ljusare bildskärm.",
						"Justera färgtonsnivåer. Dessa inställningar modifierar färgtoner.",
						"Välj det bildformat som bäst passar programmet som visas.",
						"Konfigurera energisparfunktioner.",
						"Vid anslutning av PC-enhet, justera inställningar för skärmgeometri.",
						"Välj fler avancerade bildinställningar.",
						"Återställ alla bildinställningar till standard.",
						"Välj den ljudinställning som du föredrar.",
						"Justera ljudbalansen mellan vänster och höger kanal.",
						"Sound Retrieval System TruSurround HD medger rik ljudprestanda och tydlighet både i låga och höga frekvenser. ",
						"Digital Interface Format ansluter TV:ns digitala ljudutgång till hemmabiosystemet. ",
						"Välj det ljudspråk som du föredrar.",
						"Möjliggör för synskadade att avnjuta TV-program.",
						"Testa din TV bild, ljud och signal.",
						"Välj den kanallista som passar din TV-signal.",
						"Välj språk för programmens undertexter som visas nederst på skärmen.",
						"Se den aktuella kanalens text och bilder.",
						"Digital Living Network Alliance. Via hemnätverket njuter du av musik, foto och video från andra enheter som t.ex. en PC.",
						"Visa innehållet från din smartphone på TV:n och använd din smartphone som fjärrkontroll för TV:n.",
						"Visa innehåll från en Miracast-kompatibel Android-enhet på din TV-skärm. ",
						"Lås din TV.",
						"Ange ett namn för din enhet.",
						"Välj din visningsmiljö.",
						"Återställ alla systeminställningar till standard."];
var initialTitle	= ["Välkommen","Första inställning"];
var initialPrompt	= ["Gör dina grundinställningar nu och en värld av spännande upplevelser väntar på dig! ",
						"Välj språk:",
						"Välj ditt land:",
						"Välj plats:",
						"Välj typ av nätverksanslutning:",
						"Välj anslutning för trådbundet nätverk:",
						"Anslutning till xxxxxxxxx misslyckades! Anslut enheten enligt följande diagram eller välj Vänster för återställning.",
						"ansluten via xxxxxxxxx! Välj Höger för att fortsätta.",
						"1) Din TV kanske redan har en trådlös adapter inbyggd\n 2)Eller ifall en trådlös USB adapter tillhandahålls, koppla den till din TV. Välj därefter anslutningsinställning för trådlöst nätverk.",
						"Söker. vänta…",
						"Det finns ingen trådlös enhet ansluten till TV! ",
						"Se till att följande PIN kod är installerad till AP innan du klickar på knappen ‘Nästa’ nedanför.",
						"Tryck ned tryckknappen på AP:n inom 120 sekunder innan du trycker på Höger!",
						"WPS (Wi-Fi Protected Setup)",
						"PIN(Personligt Identifieringsnummer)",
						"PBC(Tryckknappskonfiguration)",
						"Följande innehåll kan endast nås via nätverksuppkoppling. Vill du hoppa över nätverksinställning?",
						"Det finns nya uppgraderingar för din mjukvara att hämta hem, detta kan ta en stund beroende på din nätverksstatus.",
						"Genom att uppdatera TV:ns mjukvara säkerställer du att du kan utnyttja de senaste funktionerna och tjänsterna.",
						"Du kommer inte att kunna avnjuta de senaste funktionerna och tjänsterna. Vill du skippa uppgraderingen av mjukvaran?",
						"Tryck på höger knapp för att fortsätta.",
						"Stäng inte av strömmen under uppgraderingen då detta kan orsaka TV-fel.",
						"Vill du inte uppgradera, välj Nej.",
						"Uppgraderar, vänta!",
						"Du kan också uppgradera mjukvaran via: System/Programuppdatering.",
						"Landet du valt frågar efter lösenordsinställning.\nVar vänlig och ställ in koden för din TV och bekräfta den.",
						"This code is too simple.\nPlease use different digits.",
						"Gratulerar!  Första installationen är klar. Du kan modifiera din konfiguration via huvudmenyn och relaterade undermenyer. ",
						"Välj säkerhetsläge:",
						"Ange anslutningsläge för trådlöst nätverk:",
						"Nätverk"];
var initNetCabAndDonRe = ["Ingen nätverkskabel ansluten, anslut en nätverkskabel!","Ingen inbyggd trådlös adapter eller ingen trådlös USB adapter är tillhandahållen."];
var initChPrompt = ["TV Kanalinstallation","Ange typ av antennsökning.","Genomför autoinställning…","Följande antennkanaler hittades: ","Välj skanningsläge för Kabel.","Välj en operatör från följande lista.","Konfigurera skanningsinformationen","Följande kabelkanaler hittades:","Välj en operatör i följande lista","Välj satelliter att skanna eller redigera den valda satelliten","Ställ in satellitparametrarna","Följande kanaler hittades, och kanalsökningen kan också utföras igen via: Kanal/Kanalsökning"];
var initClockPrompt = ["Hämta nätverkets accesstid!",
						"Ange datum och tid: "];
var initialOptions	= ["Miljö","Nätverksinställningar","Programuppdatering","Kanalinstallation","Klocka"];
var initialHotkeys	= ["Tillbaka","Välj","Nästa"];
var initLocations	= ["Hem","Butik","Butik med demo"];
var initNets		= ["Kabel","Trådlös","Jag har ingen nätverksanslutning"];
var initWireManuals	= ["IP-adress","Subnätmask","Standardgateway ","Primär DNS","Sekundär DNS"];
var initSoftUpdates = ["Uppdatera nu","Uppdatera nu"];
var initChannelIns	= ["Fortsätt","Jag vill inte installera kanaler "];
var initChScanTypes	= ["Digital & Analog","Digital","Analog","Jag vill inte skanna"];
var initChDvbts		= ["Antenn ATV kanaler:","Antenn DTV kanaler:"];
var initChDvbcs		= ["ATV- kabelkanaler:","DTV-kabelkanaler:"];
var initChDvbss		= ["Satellitkanaler:"];
var initChDvbSOther	= ["Jag vill inte skanna satelliter"];
var initEndConnectedStatus= ["Frånkopplad"," WiFi ansluten","Kabel ansluten"];
var initEndInstallations= "XXXX kanaler installerade";
var initEndUpdate	= ["Uppdaterad"];

var audioScenes 	= ["Bordsstöd","Väggfäste"];			
var screenSavers	= ["Programinfo ej tillgänglig, sök först kanaler!  ",
						"Ingen signal!",
						"Kodad!",
						"Endast data",
						"Ljudprogram",
						"Inget ljud eller bild",
						"Ej tillgänglig",
						"Ingen text-TV",
						"Programdata saknas.",
						"Program låst!",
						"Program låst!\nTryck OK och din kod.",
						"Programdetaljer saknas.",
						"Program skadligt för minderåriga.\nTryck OK och ange din kod.",
						"Kanal låst!",
						"Kanallås!\nTryck OK och din kod.",
						"Inmatning låst!\nTryck OK och din kod.",
						"Inget stöd!",
						"Tjänsten är inte tillgänglig för tillfället",
						"Input låst!",
						"Programtitel saknas.",
						"Ingen funktion"
						];
var chBookingPromt	= ["Den aktuella kanalen har en schemalagd inspelning, TV:n kommer påbörja inspelning.",
						"En schemalagd inspelning hittades.\n Byt till XXXX för att spela in",
						"Den aktuella kanalen har en påminnelse.",
						"En schemalagd påminnelse hittades.\n Byt till XXXX"];
var timeUnit		= ["Sekunder","min"];
var ciPromt			= ["Nätverksdata har ändrats. För att uppdatera kan du utföra en uppdateringssökning. ",];
var othersPromt		= ["Vänta…",];
var menuOptions		= ["Bild","Ljud","Kanal","Nätverk","System"];
var optionOptions	= ["Bildläge","Förinställning ljud","Stillbild","T-Link","tildsförskjut.","PVR","Planeringslista","Inställningar"];
var optionTLinkPromt= [["Autostart på","Automatisk standby","Guidemeny"],
						["Påslagning","Vänteläge","Förstärkarvolym"]];
var powerPromt		= ["TV:n stängs snart av! Tryck på valfri knapp för att avbryta."];
var ttxLanguage		= ["VÄSTEUROPA","ÖSTEUROPA","Ryska","Arabiska/Hebreiska","Farsi","Arabiska","Белоруски","Grekiska","Turkiska"];
var ttxOptions		= ["Visa","Bläddra undersidor","Språk","Larmsida","Nyhetsnotiser"];
var weekday         = ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];
var lcnConfflict	= "Detta HD-program kan inte tas emot. Det finns en annan version på kanal %d.";
var inShopMode		= "Din TV är i butiksläge. För hemmaläge välj \"System\" och ändra \"Plats\" från menyn.";
var nitRefresh		= "Nätverksdata har ändrats. Vill du göra en uppdateringsskanning?";
var picHDMIMode     = ["Auto","Grafik","Bild"];

var glassRemind    	= ["Para samman dina 3D-glasögon med TV:n\n(håll på POWER-knappen på 3D glasögonen. ","Dina 3D glasögon är uppkopplade mot TV:n ",""];
var pvrRemind 		= ["Dra inte ur USB enheten eller bryt strömmen "];
var pvrConName   	= ["PVR","Programinformation:  ",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Inspelad video har sparats i \"pvr\" mapp."],"Avsluta","Inspelning","timme","Minut","Längd","Tips","Använd piltangenterna för att ange inspelningens varaktighet."];
var pvrDisRemind 	= "Sätt i USB-enheten för inspelning.";
var pvrRemindWords  = ["Vill du avsluta?  ",
							"Vill du avsluta inspelningen och bläddra igenom inspelade filer?  ",
							"Disk är utdragen.",
							"Det finns inte ledigt utrymme.",
							"Inga inspelade filer. Börja spela in. ",
							"PVR kan inte starta i kodad kanal.",
							"Egenskap ej tillgänglig",
							"Sparats framgångsrikt.",
							"Vill du stoppa inspelningsprocessen och ändra ingångskälla?",
							"TV:n kommer avsluta pågående inspelning. Vill du avsluta?  ",
							"PVR inspelning kräver TV signal för att fungera ordentligt, kontrollera din signal."];
var pvrChangeCh 	= ["Vill du ändra kanal?",
							"Vill du stoppa inspelningsprocessen och ändra kanal?"];
var pvrChangeToPIN8	= ["Vill du ändra källa till enhet ansluten via SCART ingång?",
				    		"Vill du avbryta inspelningsprocessen och ändra källa till enhet ansluten via SCART ingång?"];
var pvrChangeToCEC  = ["Vill du byta källa till enhet ansluten via en HDMI ingång?",
				  			 "Vill du avbryta inspelningsprocessen och byta källa till enhet ansluten via en HDMI ingång?"];
var pvrGuideJump    = ["Vill du gå in i EPG?",
							"Vill du stoppa inspelningsprocessen och öppna EPG?"];
var pvrMediaJump    = ["Vill du gå in i Media?",
							"Vill du stoppa inspelningsprocessen och öppna Media?"];
var timeshiftExtra	= ["Vill du stoppa tidskift och ändra kanal?",
						"Vill du stoppa timeshift och byta källa till enhet ansluten via SCART ingång?",
						"Vill du stoppa timeshift och byta källa till enhet ansluten via HDMI ingång?",
						"TimeShift kan inte starta i kodad kanal.",
						"Vill du stoppa timeshift och gå in i EPG?",
						"Vill du stoppa tidskift och ändra TV till USB läge?",
						"Vill du stoppa tidskift och ändra input källa?",
						"Sätt i USB-enheten för inspelning.",
						"Skivstorleken inte tillräcklig.",
						"TV:n kommer avsluta nuvarande timeshift. Vill du avsluta?"];
var timeshiftStatus	= ["Snabbt bakåt","Avsluta","Spela upp","Paus","Snabbt framåt"];
var pvrPowerOffRemind= ["Standby inspelning","Vänteläge","TV:n spelar nu in, vill du fortsätta inspelningen när TV:n är i standby läge?"];
var timeshiftInitTitle= "Skivinställning";
var timeshiftInitReminds= ["Guiden används för att ställa in USB skivan för tidsbyte. Välj inställningsläge.",
						 "För bättre prestanda rekommenderar vi att formatera USB skivan. Det raderar all data.",
						 "Välj filstorlek för tidsbyte.",
						 "Formaterar",
						 "Det finns inte ledigt utrymme.",
						 "Skapar tidsbytesfil.",
						 "Hastighetstest",
						 "Skivhastigheten är för låg  (< %f MB/sec) för att möjliggöra tidskiftsegenskaper!",
						 "Skivan är klar för tidsbyte. Men vi rekommenderar att byta en skiva (med hastighet > %f MB/s) för bättre prestanda.",
						 "Skivan är klar för tidsbyte."];
var timeshiftInitButtons= ["Format ","Hoppa","Avbryt","OK","Avsluta","Avsluta"];
var timeshiftInitOther=["Skivhastighet:","MB/s"];

var selectChoice	= "Är du säker?";
var chAtvStore		= "Lagra som XXXX";
var chEpgFirstGenreUK= ["Bio","Nyheter och fakta","UNDERHÅLLNING","Sport","Barn","Utbildning","Livsstil","Drama"];
var homePageTitleList = ["APPAR","TV","VIDEOS","Hemsida"];
var homePageFavAndAllName  = ["Favorit appar","Samtliga appar"];
var homePageBackUp = ["E-Manual","GuidePå"];
var homePageRemind   = ["Full funktion är endast tillgänglig efter nätverksanslutning.","Din TV har ännu inga kanaler. Program är tillgängliga efter kanalsökning.","Inget program","Sök kanaler nu?"];
var homePageHistory = ["Historik"];
var miracastTitle = ["WiFi TV-link","TCL enhet"];
var miracastRemind=["Med WiFi TV link kan du dela skärm och ljud för enheten, exempelvis för en smartphone eller en surfplatta, trådlöst med din TV (dvs. utan kablar). Detta gör det möjligt att samtidigt visa på TV:n vad din smartphone eller surfplatta visar. Du kan exempelvis visa en video på din smartphone och samtidigt visa den på TV:n, eller använda din surfplatta som spelkontroll och visa dess innehåll på den stora TV-skärmen.","WiFi TV link på TV:n är redo. Starta för att dela enhetens skärm med TV:n nu.","Ansluter. Vänta!","Misslyckad anslutning!","Anslutning misslyckades. Kontrollera!"];
var homePageLittleWin = ["Inställningar","Media","Favoritkanaler","Smart TV","EPG"];

var hbbtvStopRemind  = ["Vill du avbryta uppspelning?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Tryck på ALTERNATIV för ytterligare information";
var emptyListInfo = "Det finns ingen enhet ansluten till TVn!";
var optionVideoListArray_1 = ["Bildläge", "Förinställning ljud", "Spelläge", "Skärmläge", "3D Läge", 
							  "V-H Brytare", "Djupskärpa", "Undertexter", "Ljudspår", "Titel", "Kapitel", "Infotainment"];
var optionVideoListArray_2 = ["Bildläge", "Förinställning ljud", "Spelläge", "Skärmläge", 
							  "Undertexter", "Ljudspår", "Titel", "Kapitel", "Infotainment"];
var bottomTipsText = ["Spela upp/Paus", "Snabbt bakåt", "Snabbt framåt", "Spellista", "Inställningar"];
var picturePresetArray = ["Standard", "Dynamisk", "Naturlig", "Bio", "Användare"];
var videoPlayModeArray = ["Repetera alla", "Repetera en", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Široki zoom ", "Zoom 2", "Široki zoom 2", "Raztegnjeni zoom", "Automatisk"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Zoom 16:9 zgoraj", "Automatisk"];
var Mode3DArray = ["Av", "2D-till-3D", "Sida vid Sida", "Topp och botten", "Linje intersenkvensera"];
var videoOptionListArray = ["Av", "Spår", "Undertexter", "Titel", "Kapitel"];
var subMenuTitleText = "Undertexter";
var langMenuTitleText = "Ljudspråk";
var titleMenuTitleText = "Titel";
var mode3DMenuTitleText = "3D Läge";
var langInfoText = "Spår";
var STOP_RESUME_INFO = "Stopp-Återuppta";
var playListName = "Namn";
var eb_tips = "Tips";
var ok_button = "OK";
var eb_info = ["Avkodningsfel audio.", "Avkodningsfel video.", "Ljudformat stöds ej.", 
			   "Videoformat stöds inte.", "Filen kan inte öppnas.", "Uppspelningsfel, försök igen.",
			   "Filformat saknar stöd.", "Oj då! Spelaren har stannat.",
			   "Sökväg existerar inte eller är ogiltig.\n Sätt in förvaringsenheten på nytt och försök om igen.",
			   "Fortsätt spela från föregående\n uppspelningsposition?"];
var frameTitleText = "Ny enhet";
var eb_quit_info = "Är du säker på att du vill avsluta?";
var eb_yes = "JA";
var eb_no = "NEJ";
var offinfo = "Av";
var naInfo = "Noll";
var consoleInfoArray = ["Snabbt bakåt", "Snabbt framåt", "Spela upp/Paus", "Spellista"];
var cantOperateText = ["Funktion stöds ej"];
var chapterChangeInfo = "Endast avsnitt från 1 till XXXX är tillgängligt.";
var metaDataArray = ["Titel/upplaga metadata:", "Avsnitt metadata:", "Ljud metadata:", "Undertext metadata:"];
var metaTitleInfo = "Titel";
var metaChapterInfo = "Kapitel";
var videoLoadingInfo = "Analyserar…";
var listLoadingInfo = "Laddar…";
var pgInfo = "Klassificering:";
var fileNameText = "Namn";
var fileDateText = "Datum";
var fileSizeText = "Storlek";
var fileDurationText = "Längd";
var fileDirectorText = "Regissör";
var fileCopyrightText = "Copyright";
var fileArtistText = "Artist";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "År";
var fileGenreText = "Genre";
var mainListArray = ["Alla", "Bild", "Bild", "Musik"];
var sortArray = ["Namn", "Datum"];
var parserArray = ["Normal", "Rekursiv"];
var emptyTipsInfo = "Oj då! Fil som stöds saknas.";
var emptyFolderInfo = "Oj då! Fil som stöds saknas.";
var sortName = "Sortera efter";
var parserName = "Parser";
var divx_str1 = "DivX(R)-registrering";
var divx_str2 = "DivX(R) avregistrering";
var infor_str = "Infotainment";
var quickMenuEmptyText = "Tillgängliga alternativ saknas.";

var musicSoundPresetArray = ["Standard", "Bio", "Musik", "Klar röst", "Användare"];
var musicInformationArray = ["Namn", "Artist", "Album", "Genre:", "År:", "Längd:"];
var playListName = "Namn";
var playTipsInfo = ["Du spelar den första filen.", "Du spelar den sista filen."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artist";
var musicAlbumInfo = "Infotainment";
var optionSoundPresetInfo = "Förinställning ljud";
var optionBGMInfo = "Spela i bakgrunden";
var optionAudioOnlyInfo = "Endast ljud";
var optionInfoText = "Infotainment";

var remotePhoneConnecte = "XXXX har anslutits till TV:n!";
var tvRemoteTitle		= "TCL nScreen";
var tvRemoteDeveloper	= "Det här programmet har utvecklats av TCL";
var tvRemoteDeviceTitle	= "Enhetsnamn:";
var remoteOption		= ["Mediadelning","Fjärrkontroll","Hjälp","Om","Smart Anslutning"];
var remotebottom		= "Ladda hem \"TCL nScreen\" till din smartphone";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Delning av foto, video och musik med TV via telefon.",
							"Steg: \n 1. Klicka \"TCL nScreen\" på telefonen. Anslut telefonen till TV:n via samma WiFi nätverk;\n 2. Klicka \"Media Sharing\" för att bläddra igenom mediafiler;\n 3. Skicka media till TV:n för uppspelning (med ett av följande alternativ)",
							"      a) Dra & släpp mappen/filen till TV-ikonen högst upp på skärmen\n      b) Gör en kaströrelse med telefonen mot TV:n för att sätta igång uppspelning av den första filen\n      c) Spela upp media på telefonen och klicka på ikonen för TV-delning",
							"   4. Skaka på telefonen för att spela upp föregående eller nästa fil medan filer spelas upp på TV:n. "];
var controlReminds		= ["Använd telefonen som en fjärrkontroll för att styra TV:n.",
							" ",
							"Steg: \n 1. Klicka \"TCL nScreen\" på telefonen. Anslut telefonen till TV:n via samma WiFi nätverk;\n 2. Klicka \"Remore Control\" för att"];
var helpDeviceWords		= "Interaktion med flera skärmar";
var helpBottom			= " I området för molnteknik kopplas smarta enheter, såsom telefon och TV, ihop. Dela media på flera skärmar med familjen och styr TV:n med telefonen! ";
var helpReminds			= ["Förberedelser\n  1. Ladda hem och installera \"TCL nScreen\" från Google Play eller Apple Store.\n 2. Anslut telefonen till TV:n via samma WiFi nätverk",
							" ",
							"Telefoner som används bör ha följande:\n   1. Processor: minst 800 MHz\n   2. Minne: minst 80 MB ledigt utrymme",
							" ",
							"Friskrivningsklausul\n Ifall \"TCL nScreen\" inte är tillgänglig på din telefon, kontakta telefontillverkaren. "];
var helpButtons			= ["Föregående","Nästa"];
var aboutReminds		= ["TCL nScreen","Det här programmet har utvecklats av TCL"];
var aboutExit			= "Avsluta";
var smartReminds		= ["Snabb och smart uppkoppling mellan TV och telefon.",
							" ",
							"Steg \n 1. Anslut TV och smarphone till samma LAN. Klicka \"TCL nScreen\" på smartphone.\n 2. Klicka \"Smart Connect\" för att skanna QR koden.\n 3. Med TV:n i sändande visningsläge, tryck på INFO knappen på TV:ns fjärrkontroll i 4 sekunder och en fullskärms QR kod poppar upp.",];
var smartQRReminds		= ["På telefonens TCL nScreen  klickar du på Smart Connect och skannar QR koden för att snabbt koppla ihop TV och telefon. ",
							"QR kod innehåller LAN kontoinformation. Förvara den väl!  "];
							

var consoleTipArray = ["Föregående","Nästa","Konsol ","Spellista"];							
var optionInfoArray = ["Bildläge","Spelläge","Längd","Effekt","Infotainment"];

var playModeArray = ["Normal","Blanda","Repetera"];
var durationArray = ["Kort(5s)", "Mellan(10s)", "Lång(15s)"];
var effectArray = ["Ingen", "Lös upp", "Skjut in höger", "Skjut in vänster", "Skjut in upp", "Skjut in ner", "Ruta in", "Ruta ut", "Ranomderat"];
var infoArray = ["Namn:","Storlek:","Datum:","Plats"];

var picturePresetBarTitleInfo = "Bildläge";
var picturePresetBarArray = ["Standard","Dynamisk","Studio","Bio","Användare"];
var upTipsInfo = "Flytta bild"; //add yums 2014-10-10
var consoleTipsArray = ["Konsol ","Föregående","Nästa","Spellista","Inställningar"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Tryck HÖGER igen för att spela upp nästa bild","Tryck VÄNSTER igen för att spela upp föregående bild","Tryck NED igen för visning av spellistan"]; //add yums 2014-10-10

var optionPvrListArray = ["Bildläge","Förinställning ljud", "Skärmläge", "3D Läge", "Undertexter", "Ljudspår", "Infotainment"];							
	
var titleSpanFirstArray = ["Kontroll & Anslutning","Grundläggande funktioner","APPAR","TV","Inställningar","FAQ"];
var titleSpanSecondArray = [["Fjärrkontroll","Panelknappar","Enkel navigering","TV-anslutning","TV-anslutning","TV-anslutning","Trådlös"],["Startare","Statusfält","Källa"],["Spelande appar","Media","TCL nScreen"],["Justera kanal och volym","Kanallista","EPG","Kanaler","Favoritkanaler"],["Bildjustering","Ljudjustering","Kanaljustering","Programuppdatering","Språk","Föräldralås"],["Vanligt förekommande frågor ","Vanligt förekommande frågor ","Felsökning","Felsökning","Villkor"]];
var contentSpan1_1Array = [["LISTA:","INFO:","MENY:","STRÖM:","KÄLLA:","GUIDE:","SMART TV:"],["Visar kanallistan","Visar programinformation","Leder till hemsidan","Slår på strömmen eller standby läge","Välj ingångskällan","Visar EPG (Elektronisk Programguide) information","Går till Smart TV-sida"]];
var contentSpan1_2Array = ["Föregående kanal","Nästa kanal","Ökar volymen","Minskar volymen","Leder till hemsidan","Bekräfta valet","Standby / Ström på"];
var contentSpan1_3Array = ["OK/Guide","Kanal upp","Kanal ned","Volym ned","Volym upp","Visas som tangentpilar i vissa funktioner."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV UT adapter","LAN","Smartphone","PC/Digitalbox/DVD","Ljudförstärkare","Ljudförstärkare/Monitor","Din TV kan sakna vissa anslutningar"];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Hörlur","AV In adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB enheter","USB enheter","Hörlur","DVD/Spelkonsol/ Digitalbox/DVD","Ljudförstärkare","DVD/Spelkonsol/ Digitalbox/DVD","Din TV kan sakna vissa anslutningar"];
var contentSpan1_6Array = ["Gemensamt gränssnitt","SD","VGA","SCART","Mini SCART","ANTENN IN","PCMCIA kort","SD kort","Dator","Digitalbox/DVD","Antenn/Kabel/Sattelit","Din TV kan sakna vissa anslutningar"];
var contentSpan1_7Array = ["Tablett","Dator","Router","Telefon","TV"];

var contentSpan2Array = [["Tryck på tangentpilarna för att gå till hemsidan.","Tryck sedan OK för att se ett av programmen som erbjuds eller för att gå till appen."],["Visa datum, nätverk och enheter etc. på skärmens övre högra hörn."],["Välj ingångskälla för enheter anslutna till TV:n via olika portar som t.ex. TV, AV, HDMI etc."]];

var contentSpan3Array = ["Njut och se dina favoritappar via Smart TV-sidan","Titta på foto, se på video och spela musik från en USB-lagringsenhet.","Anslut din TV och smartphone eller surfplatta till samma LAN","Klicka på TCL nScreen eller TCL nScreen på din smartphone eller surfplatta.","Dela foto, video och musik med din familj via multi-skärmar, och styr din TV via din smartphone"];

var contentSpan4Array = [["Tryck på Upp/Ned för byte av kanal","Tryck på Vänster/Höger för justering av volym"],["Tryck LIST på fjärrkontrollen för att se en uppställning av kanalerna.","Tryck på Upp/Ned för att välja din kanal"],["EPG) är en on-screen guide på skärmen som visar schemalagda TV-program. Du kan navigera, välja, se och spela in program."],["Sök och installera kanaler "],["Lägg till eller ändra dina favoritkanaler i kanallistan "]];

var contentSpan5Array = ["Njut av dina favoritprogram via video appar "];

var contentSpan6Array = [["Tryck på Meny för visning av systeminställning","Gå till Bildinställning för justering av värden"],["Tryck på Meny för visning av systeminställning","Gå till Ljudinställning för justering av värden"],["Tryck på Meny för visning av systeminställning","Gå in på Kanalinställningar för att göra dina val"],["Uppgradera din TV när ny mjukvaruversion finns tillgänglig"],["Du kan ange önskat menyspråk"],["Möjliggör för föräldrar att låsa kanaler eller program som inte anses lämpliga för barn"]];

var contentSpan7_1Array = [["Ingen bild, inget ljud","Kontrollera om säkring eller kretsbrytare fungerar.","Anslut en annan elektrisk enhet till eluttaget för att försäkra dig om att den fungerar eller är påslagen. ","Kontakten har dålig anslutning mot strömuttaget ","Kontrollera signalkällan."],["Normal bild, inget ljud.","Tryck på volym Upp -knappen för att öka volymen.","Ljudinställning felaktig","Signalfel från sändningen."],["Normalt ljud, ingen bild","Ljustera ljusstyrka och kontrast","Signalfel från sändningen.","Kontrollera ifall den står i läge; enbart ljud."]];
var contentSpan7_2Array = [["Radiofrekvensstörning","Denna störning orsakar rörelsevågor eller diagonala ränder och i vissa fall förlust av bildkontrast. Lokalisera och avlägsna källan till radiostörningen. "],["Ingen färg","Justera färginställning.","Prova med annan kanal. Mottagning av svartvitt program kan vara orsak."],["Fjärrkontroll fungerar inte","Byt ut batterierna.","Batterierna är inte rätt installerade. TV:ns huvudström är inte ansluten."]];
var contentSpan7_3Array = [["Innehåll på USB enhet visas inte","Kontrollera att USB lagringsenhet är kompatibel med TV:n.","Kontrollera att ljud och bildformat stöds av Tv:n."],["Spelas utan ljud","Videons ljudformat stöds inte av TV-spelaren."],["Filer spelas inte jämt","USB lagringsenhet kan ha begränsad överföringskapacitet vilket kan begränsa hastighet för dataöverföring till TV:n."]];
var contentSpan7_4Array = [["Vad ska jag beakta när jag uppgraderar mjukvara","Inget strömbortfall under uppgradering av mjukvara.","Undvik alla manövrar med din fjärrkontroll då mjukvara uppgraderas.","Ha tålamod eftersom uppgraderingsprocessen kan dra ut på tiden."],["Det syns ingen speciell skillnad på TV-interfacet efter uppgradering av mjukvaran.","Under vissa förhållanden kan uppgradering av mjukvaran inte bara uppgradera eller lägga till nya funktioner, utan också förbättra TV:ns prestanda utan att tydliga förändringar i gränssnittet görs. Dessutom kan TV:ns gränssnitt ibland förbli intakt."]];
var termsTitle = "Villkor";
var termsConditions = ["(Juridiskt uttalande) från TCL - tillverkare av detta TV-set.","På grund av de olika funktionerna i produkter som tillhandahåller Smart-TV - Tjänster, liksom begränsningar i tillgängligt innehåll, är vissa funktioner, program och tjänster kanske inte tillgängliga på alla enheter eller inom alla regioner. Vissa funktioner på Smart-TV kanske även kräver ytterligare kringutrustning eller medlemsavgifter som säljs separat. Besök gärna vår hemsida för mer information om särskild information om enheten och innehållets tillgänglighet. De tjänster och tillgång till innehåll via Smart-TV kan ändras från tid till annan utan föregående meddelande. \n   Allt innehåll och tjänster som är tillgängliga genom denna enhet tillhör tredje part och skyddas av upphovsrätt, patent, varumärken och/eller andra immaterialrättsliga lagar. Sådant innehåll och tjänster tillhandahålls endast för ditt personliga och icke-kommersiella bruk. Du får inte använda något innehåll eller tjänster på ett sätt som inte har godkänts av innehållets ägare eller tjänsteleverantör. Utan att begränsa det föregående, om inte det uttryckligen har godkänts av beträffande innehållsägaren eller tjänsteleverantören får du inte ändra, kopiera, publicera, ladda upp, posta, överföra, översätta, sälja, skapa härledda verk, utnyttja eller distribuera på något sätt eller via något medium något innehåll eller några tjänster som visas via denna enhet. \n   DU UTTRYCKLIGEN BEKRÄFTAR OCH ACCEPTERAR ATT ANVÄNDNING AV ENHETEN ÄR PÅ EGEN RISK OCH ATT HELA RISKEN NÄR DET GÄLLER KVALITET, PRESTANDA OCH NOGGRANNHET LIGGER HOS DIG. ENHETEN OCH ALLT INNEHÅLL FRÅN TREDJE PART OCH ALLA TJÄNSTER TILLHANDAHÅLLS \"I BEFINTLIGT SKICK\" UTAN GARANTI AV NÅGOT SLAG, ANTINGEN UTTRYCKLIGA ELLER UNDERFÖRSTÅDDA. TCL FRÅNSÄGER SIG ALLA GARANTIER OCH VILLKOR FÖR ATT ENHETEN OCH INNEHÅLL OCH TJÄNSTER, VARKEN UTTRYCKLIGA ELLER UNDERFÖRSTÅDDA, INKLUSIVE MEN INTE BEGRÄNSADE TILL, GARANTIER OM SÄLJBARHET, PRESTANDA, LÄMPLIGHET FÖR ETT VISST ÄNDAMÅL, NOGGRANNHET, STÖRNINGSFRI ANVÄNDNING SAMT INTRÅNG I TREDJE PARTS RÄTTIGHETER. TCL GARANTERAR INTE OM NOGGRANNHET, GILTIGHET, LÄMPLIGHET, LAGLIGHET ELLER FULLSTÄNDIGHET AV INNEHÅLL ELLER TJÄNSTER SOM ÄR TILLGÄNGLIGA GENOM DENNA ENHET OCH GÖR GARANTERAR EJ HELLER ATT ENHETEN, INNEHÅLL ELLER TJÄNSTER UPPFYLLER DINA KRAV ELLER ATT ANVÄNDNING AV ENHETEN ELLER TJÄNSTER KOMMER ATT VARA UTAN AVBROTT ELLER FEL. UNDER INGA OMSTÄNDIGHETER, INKLUSIVE VÅRDSLÖSHET, SKA TCL ANSVARA, OAVSETT OM UNDER AVTAL ELLER VID KRÄNKNING, FÖR NÅGRA DIREKTA, INDIREKTA, TILLFÄLLIGA, SÄRSKILDA ELLER INDIREKTA SKADOR, JURIDISKA KOSTNADER, UTGIFTER, ELLER ANDRA SKADOR TILL FÖLJD AV ELLER I SAMBAND MED, NÅGON INFORMATION I, ELLER SOM EN FÖLJD AV ANVÄNDNINGEN AV ENHETEN, ELLER NÅGOT INNEHÅLL ELLER TJÄNST SOM TILLHANDAHÅLLS SOM DU ELLER NÅGON TREDJE PART HADE TILLGÅNG TILL ÄVEN OM DU HAR MEDDELATS OM RISKEN FÖR SÅDANA SKADOR. \n   Tjänster från tredje part kan komma att ändras, tillfälligt upphävas, tas bort, avslutas eller avbrytas, eller tillgången kan inaktiveras när som helst, utan förvarning, och TCL (tillverkare av TV-apparater av varumärket Thomson) gör inga utfästelser eller garantier om att något innehåll eller tjänst kommer att finnas tillgänglig under en viss tid. Innehåll och tjänster överförs av tredje part genom nätverk och anläggningar för överföring som TCL inte rår över. Utan att begränsa allmängiltigheten av denna ansvarsfriskrivning, frånsäger TCL sig uttryckligen allt ansvar för eventuella förändringar, avbrott, frånkoppling, borttagning, eller tillfälligt upphävande av innehåll eller tjänster som är tillgängliga via denna enhet. TCL får införa begränsningar för användningen av eller tillgång till vissa tjänster eller innehåll, i varje fall och utan förvarning eller ansvar. TCL är varken ansvarig eller skadeståndsansvarig för kundservice i samband med innehåll och tjänster. Alla frågor eller begäran om service relaterad till innehåll eller tjänster bör göras direkt till respektive innehåll- och tjänsteleverantörer."];

var noChannelListRemind        = ["Inga kanaler hittas. Kanallista är tillgänglig efter kanal","Kanalsökning"];
var closeSubtitleRemind   = "Funktion tillgänglig då undertext är avstängd. Vill du ställa in nu?";

var estickerTitles = ["Mycket realistiska bilder","Färg som vaknar till liv","Stor naturtrogen rörelse","Dynamisk bildkvalitet","SR UHD uppskalning","Upplev 3D-värld","Snabbare prestanda","Framtida 4K innehåll","Njut av online-världen","Tillgå extra innehåll","Integrerade digitala mottagare","Anslut alla enheter","Olika 4K källor","USB-innehåll","Ultrasnabb WIFI","Mobilt innehåll på TV","Innehåll Mobile-enhet","Lokalt innehåll","Godkänd av DivX","Sömlös bild","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Fantastisk tittarupplevelse tack vare bilder med fyra gånger detaljerna av Full HD på UHD skärm","Brett färgspektra ger känslor i varje scen med livligt rött och smaragdgrönt","4K bild interpolation och bakgrundsbelysning för motverkande av problem med rörelseoskärpa ","Originalbildens livfullhet förbättras för att producera verkligt dynamiskt uttryck med strålande kontrast","Avnjut skarpare än tidigare, TV-program och Blu-ray-skivor tack vare Super Resolution-teknik","Upplev 3D TV-ready och titta på olika 3D-innehåll","Mer njutbar underhållning med Quad Core för smidigt samspel, förbättrat resultat","HEVC (H.265) codec stöd för kommande standard för 4K videodistribution","Rikedom av online-applikationer, VOD-tjänster, catch-up TV och Internet surfning","Se mer med ytterligare tjänster och innehåll från dina favoriter bland programföretagen","Få tillgång till TV-kanaler i HD utan extra digitalbox","Enkel anslutning till flertalet av hemmets digitalkällor","TV-ready för framtiden, klarar uppspelning av 4K 50/60Hz via HDMI 2.0 med HDCP 2.2","Video eller fotoinnehåll direkt från USB drive, HDD eller kamera på stor skärm i upplösning 4K","Senaste generationens 2x2 MIMO och AC-standard ger tillgång till oöverträffad Internet hastighet","Njut av foton, videos, program från mobila enheter på storskärm tack vare skärmspeglings teknik","Foto, video, applikationer från smartphone eller surfplatta kan visas på storbildsskärm","Visa på storbildsskärm lokalt innehåll så som bilder, videos från enheter anslutna till det lokala nätverket","Spela upp hyrt eller eget innehåll som skyddas av DivX","Ultra tunn ram och supertunn design","Testad och godkänd av Canal+","Testad och godkänd av TDT Premium"];							

var eManualTextArray = ["E-Manual","All grafik på insidan är endast avsedd för representation. "];
var frontPanelRemind = "Frampanelen är låst";
var eRPRemind		 = "Butiksläge följer inte ERP-krav?";	
var noRelatedChannel = "Relaterad kanal saknas";
var option0624Name          = ["BOP","BFS","Händelse för händelse","GetUserID","BGM","Reset all","Återställ butik","NRM","DVB-T2 och Land val.","HbbTV-läge"];
var DVBT2AndChoice = ["På","Efter Land","Av"];
var hbbtvServiceRemind = "HbbTV-tjänsten är snart här.";
var insertWord = "För in";			
var viewDetail = "Se detaljer ";							
							

var remindOAD  = "Programuppdatering. En ny rekommenderad programuppdatering kan finnas på en annan kanal. Om du godkänner nerladdning kan kanalen ändras automatiskt. Vill du göra det nu?";

var LEDStatus = ["Blinkar", "Normal"];
var netFlixRemind = "Den här funktionen avbryter åtkomsten till Netflix-tjänsterna tills du loggar in igen.";
var ESNExplanation = "Elektroniskt serienummer";
var resetShopRemind = "Systemet återställs, stäng inte av TV:n";
var initialSelectOption = "Välj ett alternativ:";
var databaseRemind   = "Systemet har upptäckt att databasen är skadad på grund av okänd orsak och skapas om automatiskt. Tryck på OK för att fortsätta";
var Deactivation = "Inaktivering";
var oadFutureRemind = "Programuppdatering. \n En ny rekommenderat program kommer att bli tillgängligt på %s. Uppdateringen kan ta någon tid och bildskärmen kan bli svart. Stäng inte av mottagaren under uppdateringen. Om du accepterar uppdateringen, var snäll och lämna mottagren på eller i standby läge vid den planerade tiden. Vill du uppdatera nu?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Ljudutgång";
var bt_soundOutPutTV = "Tv högt.";
var bt_soundOutPutBT = "Bluetooth-enhet";
var bt_soundOutPutBT_TV = "Bluetooth och TV";
var bt_refreshBarName = "Enheter";
var bt_settingTips_On = "Aktivera Bluetooth-funkt. och skanna enheter.";
var bt_settingTips_Finding = "Söker tillgängl. enheter..";
var bt_settingTips_NoDevice = "Tillg. enhet saknas.";
var bt_deviceList_State_NoConnect = "Ej ansluten";
var bt_deviceList_State_Connecting = "Ansluter…";
var bt_deviceList_State_Connected = "Ansluten";
var bt_deviceList_State_Paired = "Parad";
var bt_deviceList_Conncect_Failed_Tips1 = "Ansl. misslyckad.";
var bt_deviceList_Conncect_Failed_Tips2 = "Bekräfta att XXX Bluetooth-funktion är på";
var bt_deviceList_Conncect_Success = "Ansluten till Bluetooth-enhet.";
var bt_deviceList_Disconncect_Success = "Frånkopplad från Bluetooth-enhet.";
var bt_deviceList_Disconnect = "Är du säker på att du vill koppla ifrån XXX?";
var bt_tipsTitle = "Tips";
var bt_bluetooth_Pairing_Title = "Bluetooth-parning";
var bt_bluetooth_Input_Pin = "Ange PIN:";
var bt_bluetooth_Output_Pin_Tip = "Ange PIN XXXX via keyboard.";
var bt_bluetooth_Pin_Wrong_Tip = "Fel PIN";
var bt_bluetooth_Remove_Pair_Title = "Fråga";
var bt_bluetooth_Remove_Pair_Ask = "Glöm denna enhet?";
var bt_bluetooth_module_error = "Bluetooth-modul fel!";
							
var netflixDialogOptions = ["OK","Senare","Visa inte det här meddelandet igen"];
var netflixDialogContent = "Tusentals filmer kan visas i Netflix. Vill du börja nu?";
var netflixRemoteDialogContent = "Fjärrstyrning med Netflix-nyckel finns att köpa nu. Besök följande webbplats för mer information.\nhttps://store.tcleu.com";
														
var applyPictureModeSwitchValue	 = ["Aktuell källa","Alla källor"];
var audioDescriptionName = ["Ljudbeskrivning","Högtalare","Högtalarvolym","Hörlur","Hörlursvolym","AD volym","BT-enhet","BT-enhetsvolym"];
var audioDescriptionOptions = ["Av","Normal","Ljudbeskrivning"];							
var volumeOffRemind = 'Ange XXX “På” i inställningsmenyn.';
var switchSourceRemind   = " infogad. Vill du växla nu?";								
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sportläge";
var resetStadium = "Stadium";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Avsluta","0","Zooma+",
                       	   "Avsluta",
                       	   "Lista","0","Text","Guide","Gå in","Avsluta","Meny","Undertexter","Info",
                       	   "Stopp",
                       	   "Info","Meny","Avsluta"
                       	   ];
var nscreenTips = "GuideOn hjälper användare att navigera genom ett stort utbud av innehåll.";
var nscreenContent = 'Steg: 1.Klicka på ”TCL nScreen” på telefonen.  Anslut telefonen till TV:n via samma nätverk; 2.Klicka på ”GuideOn” för att öppna GuideOn; 3.GuideOn erbjuder funktioner som påminner om en tryckt programguide genom att informera användarna om vilket tv-innehåll som är tillgängligt;';
var singalBrokenoffTips = "Signalen har brutits. Systemet kan inte slutföra hämtningen.";
var contentSpan1_1Array_AU =  [["STRÖM:","KÄLLA:","MENY:","BACK:","INFO:","HOME:","EXIT:","LISTA:"],
    ["Turns power on or standby mode","Select the input source",
        "Show TV settings menu","Go back to the Previous menu or exit a running APP",
        "Visar programinformation",
        "Leder till hemsidan",
        "Go back to the Previous menu or exit a running APP",
        "Visar kanallistan"]];
var guideDescriptionWords ="Skanna QR-koden för att hämta appen GuideOn till din telefon";
var settingNoticeSourceName ="Auto-källa";
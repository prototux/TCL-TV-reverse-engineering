
var all_country 	= ["Australia","Austria","Belgia","Bulgaria","Croaţia","Republica Cehă","Danemarca","Finlanda","Franţa","Germania",
						"Grecia","Ungaria","Italia","Luxembourg","Olanda","Norvegia","Polonia","Portugalia","România","Rusia",
						"Serbia","Slovenia","Spania","Suedia","Elveţia","Marea Britanie","Noua Zeelandă"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Letonia","Slovacia","Turcia","Irlanda","*","Filipine","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"China","*","*","*","*","*","*","Altele","Lituania"/*新添加的，底层结构体中没有*/,"Ucraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Lituania"];							
				
var all_language 	= ["Cehă","*","Daneză","*","*","germană","engleză","franceză","greacă","spaniolă",
						"Croată","*","italiană","Maghiară","Olandeză","Norvegiană","Poloneză","Portugheză","rusă","Română",
						"Slovenă","Sârbă","Finlandeză","Suedeză","Bulgară","Slovacă","*","*","Galică","*",
						"Galeză","arabă ","Irsko","Letonă","*","turcă","Estoniamă","Olandeză"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Audio original"/*Qaa*/,"Nedefinit"/*Undetermined*/,"*","Necunoscut",
						"Nedefinit","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Bască","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Beloruščina","*","*","Catalană","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiciană","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandeză","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lituaniană",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantic","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ucrainiană","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Oprit","Pornit"];
var okCancel		= ["Ok","Anuluj"];
var yesNo			= ["DA","NU"];
var level			= ["Oprit","Scăzut","Mare","Mediu"];
var manualAuto		= ["Manual","Auto"];
var homeShop		= ["Acasă","Magazin"];
var picPreset		= ["Standard","Dinamic","Natural","Cinema","Cinema digital","Personal"];
var picColorTemp	= ["Rece","Normal","Cald","Cald2","Utilizator"];
var pic3dNavig		= ["Manual","Auto","Semi-automat"];
var _3dOptions		= ["Regim 3D","de la 3D la 2D","Comutator S-D","Adâncimea imaginii"];
var pic3DMode       = ["Oprit","de la 2D la 3D","Unul lângă altul","Sus și jos","Intercalare linii"];
var picEcoOptions	= ["Economii energie","Senzor lumină","Gradaţie locală","Atenuare combinată"];
var picGeoOptions	= ["Geometrie","Poziţie H","Poziţie V","Ceas","Fază"];//Geometry 无翻译
var picAdWhiteBal	= ["Accent. R","Accent. G","Accent. A","Scoate R","Scoate G","Scoate A"];
var souOptions		= ["Sunet preconfig.","Balans","Întârziere audio","SRS TSHD","Volum control auto",
						"Tip SPDIF ","Întârziere SPDIF","Poziţionarea televizorului","Limbă audio","Tip audio",
						"Descriere audio","Tip ieşire audio digitală","Setare profesională Dolby"];
var soundOutputoptions =["Ieşire DAP difuzor TV","Ieşire codificare AVR extern"];
var inteligenteqoptions 	=["Concentrat","Bogat"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Oprit"];
var colorSpace      = ["Auto","Nativă","Utilizator","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Virtualizator stereo","Potenţiator de dialog","Potenţiator de bas","Intensitate inteligentă","Inteligență media","Egalizator grafic","EQ inteligent"];
var chOptions		= ["Scan. Canal","Listă canale","EPG","Agendă","Diagnosticare canal",
						"decalaj","Subtitrare","Teletext","Tip listă canale"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Putere semnal","Calitate Semnal","Frecvenţă (KHz)","ID serviciu","ID Reţea","Nume reţea"];
var chScanOptions	= ["Ţară","Mod tuner","Scan. automată","Actualiz. automată","Scan manual analog",
						["Scanare manuală cablu","Scanare manuală antenă","Ajustare manuală satelit"],"Instalarea antenei satelit","Selectarea reţelei preferate","Golirea listei de canale",];
var favNetDes		= "Selectaţi reţeaua preferată";
var tuner			= ["Cablu","Antenă","Satelit"];//Satelite 无翻译
var passError		= "Parolă greşită / Vă rugăm reintroduceţi!";
var chType			= ["Canale analogice:","Canale digitale: "];
var chScanStatus	= ["Stare: Scanare","Stare: Scan. completă","Stare: Scan. canal","Stare: Eroare scan."];
var chScanPara		= ["Frecvenţă (KHz)","Modulare","Debit de simbol (Ksym/s)","ID Reţea","Sistem",
						"Acord fin","Putere semnal","Calitate Semnal","Mod Scanare","ID canal"];
var chScanParaMHZ      = ["Frecvenţă (MHz)"];
var chAtvManSys		= ["EUR VEST","EUR EST","UK","Franţa"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Doriţi să curăţaţi lista de canale?";
var chDeletDes		= "Doriți să ștergeți canalul?";
var chOperator		= ["Ziggo","UPC","Altele"];
var chScanType		= ["Digital & Analogic","Digital","Analog"];
var chScanMode		= ["Complet","Avansare","Rapid"];
var bookingModes	= ["Înregistrare","Reamintire"];
var dayName			= ["Du","Lu","Ma","Mi","Jo","Vi","Sâ"];
var monthName		= ["ian", "feb","mar","apr","mai","iun","iul","aug","sep","oct","nov","dec"];
var filter			= ["Filtr","Tip","Categorii"];
var chEpgFirstGenre	= ["Cinema","News","Show","Sport","Pentru copii","Muzică","Arte","Social","Educaţie","Timp liber","SPECIAL"];
var chEpgSecondGenre= [["Dramă","Detectiv","Aventură","S.F.","Comedie","Serial","Romantic","Serios","Filme pt adulţi"," "," "," "],
						["Actualitate","Meteo","Ştiri","Documentar","Discuţii"," "," "," "," "," "," "," "],
						["Show","Jocuri","Varietăţi","Talk Show"," "," "," "," "," "," "," "," "],
						["Sport","Evenim. special","Revista sporturilor","Fotbal","Tenis",
							"Sporturi de echipă","Atletism","Sport cu motor","Sport nautic","Sport de iarnă",
							"Echitaţie","Arte marţiale"],
						["Pentru copii","Preşcolari","Amuzament pt copii de 6-14 ani","Amuzament pt copii de 10-16 ani","Informativ","Desene animate"," "," "," "," "," "," "," "],
						["Muzică","Rock","Serios","Folk","Jazz","Musical-uri","Balet"," "," "," "," "," "],
						["Arte","Arte interpretative","Arte frumoase","Religie","Folclor",
							"Literatură","Film","Experimental","Difuzare","Noua media",
							"Reviste de artă","Modă"],
						["Social","Reviste","Economie","Personalităţi"," "," "," "," "," "," "," "," "],
						["Educaţie","Natură","Tehnologie","Medicină","Ţări străine","Ştiinţe sociale","Educare supli.","Limbi străine        "," "," "," "," "],
						["Hobby-uri","Turism","Artizanat","Automobilism","Fitness şi sănătate","Artă culinară","Publicitate","Grădinărit"," "," "," "," "],
						["Limbă originală","Alb şi negru","Nepublicat","Difuzare în direct"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Ignoră canal","Sortare canal","Editare canal","Ştergere canal","canal de swap","canal inserați"];
var chEditPara 		= ["Nume reţea","Număr canal","Nume canal","Frecvenţă","Sistem culoare","Sistem sunet"];
var chSatTitles		= ["Tip satelit","Instalarea antenei satelit","Selectare satelit"];
var chSatEidtOptions= ["Nume satelit","Poziţie","LNB Putere","Frecvenţa LNB (MHz)","Input Diseqc",
						"Ton 22KHz","Tone Burst","Frecvenţă (KHz)","Debit de simbol (Ksym/s)","Polarizare",
						"Putere semnal","Calitate Semnal","Stare satelit"];
var chSatAutoPromt	= [["Tot","Reţea"],
						["Tot","Liber"]];
var chSatAutoScanOptions=["Selectare satelit","Mod Scanare","Canale"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Dezactivare","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Pornit","Oprit"];
var chSatToneBurst	= ["Dezactivare","Tone Burst A","Tone Burst B"];
var chSatPolarization= ["Orizontal","Vertical"];
var chSatSetupOptions=["Tip antenă","Tuner","Frecvenţă bandă"];
var chSatAntennaType= ["CabluUnic","Universal"];
var chSatUserBands	= ["Bandă utilizator 1","Bandă utilizator 2","Bandă utilizator 3","Bandă utilizator 4","Bandă utilizator 5","Bandă utilizator 6","Bandă utilizator 7","Bandă utilizator 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Definit de utilizator"];
var pleaseSelectSat = "Selectaţi sateliţii mai întâi!";
var subOptions		= ["Subtitrare","Limbă subtit. digitală","Limbă subtit. digitală 2","Tip subtitrare"];
var ttxOptionsCon      = ["Decodare lb. pg.","Lb. teletext digital"];
var subType			= ["Normal","Sonor neclar"];
var netIntf     	= ["Ethernet","Wireless"];
var netConnDes		= ["TV testează conexiunea la reţea.\nVă rugăm aşteptaţi",
						"Testul conexiunii de reţea a fost reuşit!",
						"Testul conexiunii de reţea a eşuat."];
var netSsidError	= "Lungimea validă a SSID este între 1 şi 32 de caractere. Verificaţi SSID.";
var netOthers		= ["Codul PIN"];
var netWlessAutoDes	= ["Înainte de a face clic pe OK, asigurați-vă că următorul cod PIN este instalat în punctul de acces.",
						"Apăsați butonul de pe punctul de acces în mai puțin de 120 de secunde, înainte de a face clic pe OK."];
var netConnRemind	= ["Parolă incorectă!",
						"Se conectează. Vă rugăm să așteptați!",
						"Conectare reuşită şi IP obţinut!",
						"Eroare link",
						"Televizorul scanează AP-uri\n. Aşteptaţi",
						"Niciun dispozitiv wireless nu este conectat la televizor!"];
var netWireIpOptions= ["Setare IP","Tip adresă","Adresă IP","Mască de subreţea","Poartă implicită","DNS primar","DNS secundar"];
var netWireConnRemind= ["Introduceți o valoare între 0 şi 255.",
						"Conectare reuşită!",
						"Introduceţi o adresă validă",
						"Conectare reuşită!",
						"Conexiune nereuşită!",
						"Se conectează. Vă rugăm să așteptați!",
						"Introduceţi o valoare între 1 şi 223."];
var netFlixOptions	= ["Dezactivare","ESN"];
var netFlixDes	 	= ["Sunteţi siguri că doriţi dezactivarea?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Actualizare software";
var netUpdateDialogTitle = "Se actualizează software-ul";
var netBGDownloadTitle 	= "Se descarcă";
var netUpdateLoadingPrompt= ["Se caută upgrade-uri, aşteptaţi!",
							"Software-ul este în curs de descărcare… Aşteptaţi!",
							"NU opriţi televizorul în timpul actualizării software!",
                            "Actualizarea imperativă a software-ului este descărcată automat în fundal!"];
var netUpdatePrompt= ["Felicitări, versiunea software este cea mai nouă!",
						"Este disponibilă versiunea software nouă XXXX. Doriți să descărcați acum? Aceasta ar putea dura mai mult timp, în funcție de starea rețelei.",
						"Autentificare nereuşită!",
						"Recepţionare date eşuată, reîncercaţi mai târziu!",
						"Parsare actualizare XML nereuşită!",
						"Eroare link",
						"Descărcare software realizată cu succes. Începeţi funcţia de clipire?",
						"Date pierdute! Descărcare nereuşită!",
						"Nu s-a putut verifica pachetul, reîncercaţi!",
						"Anomalie în reţea. Verificaţi şi reconectaţi-vă...",
						"Actualizare nereuşită. Reporniţi televizorul!",
						"Fişierul de upgrade a fost şters în mod neprevăzut. Efectuaţi din nou upgrade-ul prin reţea.",
						"S-a reuşit descărcarea software-ului în fundal. Doriţi să efectuaţi upgrade-ul?"];
var netUpdateButtonText = ["Descărcare", "Actualizare", "Mai târziu", "Niciodată", "Ok","Continuare"];
var autoDetectPrompt = ["Este disponibilă versiunea software nouă XXXX. Doriți să descărcați acum? Aceasta ar putea dura mai mult timp, în funcție de starea rețelei.",
						"Versiunea software nouă XXXX este găsită. Actualizaţi acum?",
						"S-a renunţat la upgrade prin reţea ultima oară. Trebuie să efectuaţi upgrade-ul din nou.",
                        "Descărcarea noii versiuni a software-ului XXXX nu s-a terminat. Doriţi să continuaţi acum?",
                        "Software descărcat, doriţi să actualizaţi acum?"];
var sysOptions		= ["Manual electronic","Limbă meniu","Cronometru","Blocare","Setări intrare",
						"Actualizare software","Locaţie","Mod HbbTV","Cookie-uri","Interfaţă comună",
						"Setări avansate","Reset. magaz.","Indicator LED"];
var sysResetDes		= "Sunteţi sigur?";
var sysMenuLangOptions=["Limbă","Limbă audio preferată","A 2 lb. audio preferată"];
var sysTimerOptions	= ["Zonă orară","Denumire regiune","Ceas","Timp repaus ","Auto standby", "Country region"];

var sysTimeZone		= ["Ca transmiţător","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Oprit","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Oprit","4 ore","6 ore","8 ore"];
var sysRegionName	= ["Madrid ","Canare"];
var sysClockOptions	= ["Autosincronizare","Dată","Oră","Programare pornire","Cronometru",
						"Pornire canal","Programare oprire","Cronometru"];
var sysTimer		= ["Oprit","Zilnic","O dată"];

var sysInputSet		= ["Fără etichetă","DVD","Blu-ray","HDD","DVDR",
						"rec. HD","Joc","VCR","PC","STB Digital ",
						"STB dig HD ","Cameră","Înregistrare","Altele"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Prin USB","Prin Reţea","După canal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Imposibil de găsit software nou în emisie!",
						"Versiunea software nouă XXXX este găsită. Actualizaţi acum?",
						"Vă rugăm să introduceți stick-ul USB.",
						"Nu s-a putut verifica pachetul, reîncercaţi!",
						"NU deconectaţi dispozitivul USB şi NU stingeţi TV la actualizarea firmware!",
						"Actualizare software reuşită.\nTelevizorul va reporni apoi automat!",
						"Este disponibilă versiunea software nouă XXXX. Doriți să descărcați acum? Aceasta ar putea dura mai mult timp, în funcție de starea rețelei.",
						"Se descarcă",
						"Descărcare software realizată cu succes. Începeţi funcţia de clipire?",
						"Actual. eşuată!",
						"Se caută fişiere de actualizare",
						"Software-ul a fost actualizat cu succes.\nReporniţi televizorul acum."];
var sysProductInfo	= ["Versiune curentă","Denumire produs","Nume producător","Nume şasiu"];
var sysCiDes		= ["Lipseşte cardul CI."];
var sysAdOptions	= ["Înregistrare DivX(R)","Înregistrare DivX(R)","T-Link","Authorization Error","Confirmare anulare înregistrare",
						"Confirmare închiriere","Închiriere expirată","ID declaraţie Bluetooth"];
var sysRegistDes	= ["Înregistraţi-vă dispozitivul pentru a reda materiale video protejate DivX",
						"Cod înregistrare:",
						"Înregistraţi-vă pe http://vod.divx.com"];
var sysDregistDes	= ["Cod anulare înregistrare:",
						"Anulare înregistrare pe http://vod.divx.com",
						"Continuaţi înregistrarea?"];
var mediaAuthorization = ["Dispozitivul dvs. nu este autorizat să redea acest videoclip protejat DivX(R)."];
var deregistrationConfrimation = ["Dispozitivul dvs. este deja înregistrat.","Sigur doriţi să anulaţi înregistrarea?"];
var rentalConfirmation = "Acest DivX(R) închiriat a utilizat XXXX din YYYY vizualizări. Continuați?";
var rentalExpired 	= "Închirierea DivX(R) a utilizat XXXX din YYYY vizualizări. Închirierea DivX a expirat.";
						
						
var sysLockOptions	= ["Blocare canal","Blocare interval timp","Caract. parent.","Blocare intro","Nicio Etichetă","Instalare blocare",
						"Schimbă parolă","Volum max.","Curăţare tot"];
var sysTimeIntervals= ["Tip blocare","Ora de pornire","Ora de oprire"];
var sysRatingOptions= ["Niciuna","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Conţinut explicit (Spania)"];
var changePass		= ["Schimbă parolă","Parolă nouă","Confirmă parolă"];
var changePassDes	= ["Parolă greşită / Vă rugăm reintroduceţi!",
						"Parola nu se potriveşte.\nVă rugăm reintroduceţi!",
						"Parolă setată cu succes!",
						"Acest cod este prea simplu pentru a fi setat ca parolă.\nVă rugăm să introduceţi codul din nou!"];
var sysPowerOnChOptions= "Mod selectare";
var sysPowerOnCh	= ["Ultima stare","Selectare utilizator"];
var netWlessSecu    = ["Deschidere","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Niciuna","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Intrare video incompatibilă"];
var netWlessSecu3	= ["Niciuna","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Intrare video incompatibilă"];
var netOptions		= ["Conexiune Internet","Interfaţă","Setări wireless","Setări IP","Informaţii",
						"Test conexiune","DLNA","Telecomandă","Setări Netflix","Legătură WiFi TV",
						"Tip adresă","Adresă IP","Mască de subreţea","Poartă implicită","DNS primar",
						"DNS secundar","SSID","BSSID","Introduceţi SSID:","ID utilizator"];
var chEditDes		= ["Număr de canal duplicat!","Apăsați tasta Rosie pentru a șterge caracterul curent!","Nr. de canal invalid:"];
var chEpgNoProgram	= "Nicio informaţie despre program în acest moment, căutaţi canalele mai întâi!";
var chEpgWords		= ["Ghid programe","Nu există date de program.","Canal blocat!","Nu există detalii de program.","Nici un titlu de program."];
var chEpgBooking	= ["Programarea meciului", "Număr canal","Data de început","Ora de pornire","Ora de oprire",
						"Tip repetiție","Tip programare","Adăugare","Înlocuire","Modificare",
						"Adăugare/Modificare"];
var epgHotKey		= ["Ieri","Mâine","Filtr","Lista programului","Adăugare program"];
var chEpgBookRemind	= ["Oră de început incorectă","Oră de sfârşit incorectă","Program duplicat","Salvare reuşită.","Ştergere reuşită."];
var chSchePara		= ["Lista programului","Ora de pornire","Data de început","Titlu program","Nume canal",
						"Durată","Repetă","Program","Editare","Ştergere"];
var dateTimer		= ["O dată","Zilnic","Săptămânal"];
var scheduleDeleteReminds="Doriți să ștergeți aceasta programare?";
var scheduleNoLists	= "Nu există nici o listă programare. Apăsați tasta \"Rosie\" pentru a adăuga una.";
var chListWords		= ["Listă canale","Selectare listă","Mod tuner","Adăugare la favorite","Şterge",
						"Selectare listă de canale","Selectaţi mod tuner","Schimbare"];
var chListType		= ["Tot","Digital","Analog","Radio","Liber","Favorite"];
var chAutoScanOptions=["Selectaţi operatorul","Canal de tip","Scan. automată"];
var souSoundType	= ["Nevalid","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dublu1","Nicam dublu2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muzică","Cinema","Voce clară","Standard","Personal"];
var picAdRgbMode	= ["Oprit","Doar roşu","Doar verde","Doar albastru"];
var picAdOptions	= ["Reducere zgomot","Nr MPEG","RGB mode","Contrast Dinamic","Claritate mişcare LED",
						"Nuanţa lumin.","Mod Film","Mod Joc","Temp. culorii","Balans De Alb",
						"Îngheaţă","Stretch","Mod overscan","Gama","Mod HDMI","Balans de alb 10P","Amplificator de culoare",
						"Reducere neclaritate","Reducere sacadări","Spaţiu culoare","Claritate mişcare"];
var pic10Pwhite     = ["Interval","Roşu","Verde","Albastru","Resetare","Color","Galben","Cyan","Magenta"];
var picMotionClarity = ["Mod Mişcare","Interpolare de mişcare","Claritate mişcare LED","Reducere neclaritate","Reducere sacadări","Resetare"];
var picMotionMode   = ["Auto","Film","Fără întreruperi","Şterge","Sport","Client"];
var picResetDes		= "Toate setările personale vor fi resetate. Sigur doriţi să executaţi acţiunea selectată?";
var pic10PReset     = "Sigur doriţi să resetaţi balansul de alb 10P?";
var picMotionReset  = "Doriţi să resetaţi claritatea mişcării?";
var picColorSpaceReset    = "Sigur doriţi să resetaţi spaţiul de culoare?";
var picOptions		= ["Preset imag.",
						"Iluminare de fundal","Luminozitate","Contrast","Saturaţie","Nuanţă","Claritate","Temp. culorii","Mod Ecran","Autoformat",
						"Îmbunătăţire sporturi","3D","Navigaţie 3D","ECO Setări","Geometrie",
						"Setări avansate","Aplicare mod imagine","Resetare imagine"];
var picSize			= ["Format 16:9", "Format 4:3", "Format 14:9", "Cinerama",
						"Zbliżenie 16:9", "Powiększ do 16:9","Zbliżenie 14:9","Rozciągnij","Zbliż szerokątn.",
						"Zbliżenie 2","Zbliż szerokątn. 2","Corespondenţă nativă ecran","Punkt po punkcie","Originală","Panoramic"];
var others			= ["Volum","Difuzare","Parolă","Stare","Salvare","Înlocuire","Pornire","Ieşire","Căutare","Ştergere",
						"Niciuna","Automat","Scanare","Securitate","Conectare","Reîmprosp.","Reîncercaţi","Oprire","Setări","Canale",
						"Editare","Inserare","Semnal!","Finalizare","Stereo","Audio","Sursă","Fără audio","Sfaturi","Resetare",
						"Client","Configurare","Memorare","Utilizator","Tastatură îngustă","Mod Securitate","Zilnic","Listă PVR"];
var direction		= ["Stânga","Dreapta","În sus","În jos"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D +"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Necunoscut"];
var soundChannels   = ["Necunoscut","Mono","Sub","Mono Dual","Stereo","Subtitrare stereo","Dolby Surround stereo","Surround 2CH    ","Surround","3.0CH","4.0CH","5.0CH","LFE mono","LFE mono dublu","LFE stereo","LFE 2CH surround","LFE surround","3.1CH","4.1CH","5.1CH","7.1CH","Stereo mixt","FMRDO mono","FMRDO stereo","FM mono Nicam mono","FM mono Nicam stereo","FM mono Nicam dublu","Stânga","Dreapta","Altele"];
var prompts			= ["Reglează setările de imagine care se potrivesc cel mai bine mediulului de vizionare.",
						"Reglează nivelul de luminozitate. Cu cât mai aproape de 100, cu atât mai luminoasă.",
						"Ajustați nivelul de contrast. Cu cât mai aproape de 100, cu atât mai mare diferențele intunecat-luminos de imagine .",
						"Ajustați nivelul de saturație. Cu cât mai aproape de 100, cu atât culoarea mai puternica.",
						"Ajustați nivelul de claritate. Cu cât mai aproape de 100, cu atât mai clare detaliile.",
						"Reglati nivelurile iluminării de fundal. Cu cât mai aproape de 100, cu atât mai luminos ecranul.",
						"Ajustați nivelul de nuanță. Această setare modifică tonurile de culoare.",
						"Selectați formatul de imagine care se potriveste cel mai bine programulului de vizualizat.",
						"Configuraţi opţiunile de economisire a energiei.",
						"Reglați setările de geometrie ale ecranului la conectarea unui dispozitiv PC.",
						"Selectaţi mai multe setări avansate pentru imagini.",
						"Restabiliţi toate setările de imagine la valorile prestabilite.",
						"Selectaţi un mod pentru sunet care să corespundă preferinţelor dvs. personale.",
						"Reglaţi echilibrul volumului dintre canalele stânga şi dreapta.",
						"Sistemul de preluare sunet TruSurround HD oferă un sunet bogat și claritate la frecvențe joase și înalte.",
						"Digital Interface Format conecteaza ieșirea sunet  digital TV pentru echipament audio home theater.",
						"Selectaţi limba audio care să corespundă preferinţelor dvs. personale.",
						"Activați Deficiență de Vedere pentru a vă bucura de programele de televiziune.",
						"Testaţi imaginea, sunetul şi semnalul TV.",
						"Selectaţi tipul listei de canale adecvat pentru semnalul dvs. TV.",
						"Selectați limba programului de subtitrare afisat in partea de jos a ecranului.",
						"Vezi textul și imaginile canalului curent.",
						"Digital Living Network Alliance. Bucurați-vă de muzică, fotografii și video prin rețeaua de acasa de la alte dispozitive, cum ar fi un PC.",
						"Afișează conținutul smartphone-ului pe televizor și foloseste smartphone-ul ca o telecomandă pentru televizor.",
						"Arată conținut de pe un dispozitiv Android Miracast-compatibil pe ecranul televizorului.",
						"Blocaţi televizorul.",
						"Selectaţi un nume pentru dispozitivul dvs.",
						"Selectaţi mediul de vizualizare.",
						"Restabiliţi toate setările sistemului la valorile prestabilite."];
var initialTitle	= ["Bun venit","Setare iniţială"];
var initialPrompt	= ["Faceți configurarea inițială acum, și o lume de experiență interesantă vă așteaptă!",
						"Vă rugăm selectaţi limba:",
						"Selectaţi ţara:",
						"Vă rugăm să vă selectaţi locaţia",
						"Selectaţi tipul de conexiune la reţea:",
						"Selectaţi modul de conexiune la reţea prin cablu:",
						"Conectare la xxxxxxxxx eşuată! Conectaţi aparatul conform următoarei scheme sau selectaţi Stânga pentru a reseta.",
						"Conectat la xxxxxxxxx! Selectaţi Dreapta pentru a continua.",
						"1) Televizorul dumneavoastră poate avea deja un adaptator wireless încorporat\n 2) Sau, dacă este furnizat un adaptator wireless USB, conectaţi-l la televizor.  Apoi, vă rugăm să selectați modul de conectare la rețea wireless.",
						"Se scanează. Aşteptaţi...",
						"Niciun dispozitiv wireless nu este conectat la televizor!",
						"Asigurați-vă că următorul cod PIN este instalat în AP înainte de a face clic pe butonul \"Urm.\".",
						"Apăsaţi butonul de comandă de pe punctul de acces în decurs de 120 de secunde înainte de a apăsa Dreapta!",
						"WPS (Configurare protejată Wi-Fi)",
						"PIN (număr personal de identificare)",
						"PBC (configurarea butonului de comandă)",
						"Conţinutul următor nu poate fi accesat decât printr-o conexiune de reţea. Doriţi să ignoraţi configurarea reţelei?",
						"Există noi actualizări de software pentru dvs. de descărcat, aceasta poate dura ceva timp, în funcție de starea rețelei.",
						"Actualizarea software-ului televizorului asigură că vă puteţi bucura de cele mai noi caracteristici şi servicii.",
						"Nu vă veți bucura de cele mai recente caracteristici și servicii. Vreți să săriți peste actualizarea de Software?",
						"Apăsați Butonul Dreapta pentru a continua.",
						"Nu opriți alimentarea la curent în timpul actualizării, deoarece aceasta poate duce la defectarea TV-ului.",
						"Dacă nu doriţi să actualizaţi, selectaţi NU.",
						"Se actualizează, aşteptaţi",
						"Puteţi actualiza software-ul şi din ACTUALIZARE SISTEM/SOFTWARE.",
						"Ţara selectată cere setarea parolei.\nVă rugăm să setaţi codul pentru TV-ul dvs. şi să-l confirmaţi.",
						"This code is too simple.\nPlease use different digits.",
						"Felicitări! Configurarea iniţială s-a încheiat. Configuraţia dvs. poate fi modificată din meniul principal şi submeniurile conexe.",
						"Selectați modul de securitate:",
						"Selectaţi modul de conectare a reţelei fără fir:",
						"Reţea"];
var initNetCabAndDonRe = ["Niciun cablu de reţea conectat, conectaţi un cablu de reţea!","Niciun adaptor fără fir încorporat sau niciun adaptor USB fără fir furnizat."];
var initChPrompt = ["Instalarea canalelor TV","Selectaţi tipul de scanare Antenă.","Procesare acord automat...","Au fost găsite următoarele canale Antenă:","Selectaţi tipul de scanare Cablu.","Selectaţi un operator din următoarea listă.","Configuraţi informaţiile de scanare","Au fost găsite următoarele canale prin Cablu:","Selectaţi un operator din lista următoare","Selectaţi sateliţii de scanat sau editaţi satelitul selectat","Setaţi parametrii satelitului","Au fost găsite următoarele canale. Scanarea canalelor poate fi efectuată din nou din Canal/Scanare canale"];
var initClockPrompt = ["Obţineţi ora furnizată de reţea!",
						"Setaţi data şi ora:"];
var initialOptions	= ["Mediu","Configurare reţea","Actualizare software","Instalare canale","Ceas"];
var initialHotkeys	= ["Înapoi","Selectare","Următorul"];
var initLocations	= ["Acasă","Magazin","Magazin cu demo"];
var initNets		= ["Cu fir","Wireless","Nu dispun de o conexiune la reţea"];
var initWireManuals	= ["Adresă IP","Mască de subreţea","Poartă implicită","DNS primar","DNS secundar"];
var initSoftUpdates = ["Actualizare acum","Actualizare mai târziu"];
var initChannelIns	= ["Continuare","Nu doresc să instalez canale"];
var initChScanTypes	= ["Digital & Analogic","Digital","Analog","Nu doresc să scanez"];
var initChDvbts		= ["Canale antenă ATV:","Canale antenă DTV:"];
var initChDvbcs		= ["Canale ATV prin cablu:","Canale DTV prin cablu:"];
var initChDvbss		= ["Canale prin satelit:"];
var initChDvbSOther	= ["Nu doresc să scanez satelitul"];
var initEndConnectedStatus= ["Deconectat","WiFi conectat","Cu fir conectat"];
var initEndInstallations= "XXXX canale instalate";
var initEndUpdate	= ["Actualizat"];

var audioScenes 	= ["Desktop","Montare pe perete"];			
var screenSavers	= ["Nicio informaţie despre program în acest moment, căutaţi canalele mai întâi!",
						"Fără semnal!",
						"Criptat",
						"Doar date",
						"Program audio",
						"Fără audio&video",
						"Nu este disponibil",
						"Fără Teletext",
						"Nu există date de program.",
						"Program blocat!",
						"Program blocat!\nApăsaţi OK şi introduceţi codul.",
						"Nu există detalii de program.",
						"Program neindicat minorilor.\nApăsaţi OK şi introduceţi codul dvs.",
						"Canal blocat!",
						"Canal Blocat!!\nApăsaţi OK şi introduceţi codul.",
						"Intrare Blocată!!\nApăsaţi OK şi introduceţi codul.",
						"Fără Suport!",
						"Serviciu indisponibil în prezent",
						"Intr. blocată!",
						"Nici un titlu de program.",
						"Fără Funcţie"
						];
var chBookingPromt	= ["Canalul actual este programat pentru înregistrare, televizorul va începe înregistrarea.",
						"O înregistrare programată este găsită.\n Comutaţi la XXXX pentru înregistrare",
						"Canalul curent are un memento.",
						"Un memento programat este găsit.\n Comutaţi la XXXX"];
var timeUnit		= ["Sec","min"];
var ciPromt			= ["Datele reţelei s-au schimbat. Pentru a actualiza, puteţi efectua o scanare a actualizărilor. ",];
var othersPromt		= ["Aşteptaţi...",];
var menuOptions		= ["Imagine ","Sunet ","Canal","Reţea","Sistem"];
var optionOptions	= ["Preset imag.","Sunet preconfig.","Îngheaţă","T-Link","decalaj","PVR","Lista programului","Setări"];
var optionTLinkPromt= [["Pornire automată","Auto standby","Meniu ghid"],
						["Pornire","În aşteptare","Volume amplificateur"]];
var powerPromt		= ["Televizorul se va opri în curând! Apăsați orice tastă pentru a anula."];
var ttxLanguage		= ["EUR VEST","EUR EST","rusă","arabă/ebraică","farsi","arabă ","Beloruščina","greacă","turcă"];
var ttxOptions		= ["Afişare","Ciclu sub-pg.","Limbă","Pg. Alarmă","Buletin informativ"];
var weekday         = ["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"];
var lcnConfflict	= "Acest program are probleme de recepţionare. Există o altă versiune disponibilă la canal %d. ";
var inShopMode		= "Televizorul dvs. este în modul Magazin. Pentru modul Pagină de start, selectaţi „Sistem” şi schimbaţi „Localizare” din meniu.";
var nitRefresh		= "Datele reţelei s-au modificat. Efectuaţi o scanare de actualizare?";
var picHDMIMode     = ["Auto","Grafic","Video"];

var glassRemind    	= ["Asociaţi ochelarii dvs. 3D cu televizorul\n(Ţineţi apăsată tasta POWER de pe ochelarii 3D).","Ochelarii dvs. 3D sunt conectaţi la televizor ",""];
var pvrRemind 		= ["Nu scoateţi dispozitivul USB şi nu întrerupeţi alimentarea"];
var pvrConName   	= ["PVR","Informaţii despre program:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Filmul înregistrat este salvat în directorul \"pvr\"."],"Oprire","Înregistrare","oră","Minut","Durată","Sfaturi","Utilizaţi tastele-săgeţi pentru a defini durata de înregistrare."];
var pvrDisRemind 	= "Introduceţi stickul USB pentru înregistrare.";
var pvrRemindWords  = ["Doriţi să ieşiţi?",
							"Doriţi să opriţi înregistrarea şi să parcurgeţi fişierele înregistrate?",
							"Discul este scos.",
							"Nu există spaţiu liber suficient.",
							"Niciun fişier înregistrat. Începeţi înregistrarea.",
							"PVR nu poate începe în Canal bruiat",
							"Funcţia nu este disponibilă",
							"Salvare reuşită.",
							"Opriţi procesul de înregistrare şi  schimbaţi sursa de intrare?",
							"Televizorul va încheia înregistrarea curentă. Doriţi să ieşiţi?",
							"Înregistrarea PVR are nevoie de semnalul TV pentru a funcţiona corect, verificaţi semnalul."];
var pvrChangeCh 	= ["Doriţi să porniţi pe canal?",
							"Opriţi procesul de înregistrare şi schimbaţi canalul?"];
var pvrChangeToPIN8	= ["Doriţi să modificaţi sursa la aparatul conectat la intrarea SCART?",
				    		"Doriţi să opriţi procesul de înregistrare şi să modificaţi sursa la aparatul conectat la intrarea SCART?"];
var pvrChangeToCEC  = ["Doriţi să modificaţi sursa la aparatul conectat la o intrare HDMI?",
				  			 "Doriţi să opriţi procesul de înregistrare şi să modificaţi sursa la aparatul conectat la o intrare HDMI?"];
var pvrGuideJump    = ["Doriţi să accesaţi EPG?",
							"Opriţi procesul de înregistrare şi intraţi în EPG?"];
var pvrMediaJump    = ["Doriţi să accesaţi Media?",
							"Opriţi procesul de înregistrare şi intraţi în Media?"];
var timeshiftExtra	= ["Doriţi să opriţi decalarea şi să treceţi televizorul schimbaţi canalul?",
						"Doriţi să opriţi alternanţa temporală şi să modificaţi sursa la aparatul conectat la intrarea SCART?",
						"Doriţi să opriţi alternanţa temporală şi să modificaţi sursa la aparatul conectat la o intrare HDMI?",
						"Decalajul temporal nu începe în Canal bruiat",
						"Doriţi să opriţi alternanţa temporală şi să accesaţi EPG?",
						"Doriţi să opriţi decalarea şi să treceţi televizorul în mod USB?",
						"Doriţi să opriţi decalarea şi să treceţi televizorul schimbaţi sursa de intrare?",
						"Introduceţi stickul USB pentru înregistrare.",
						"Dimensiunea discului este insuficientă.",
						"Televizorul va încheia alternanţa temporală curentă. Doriţi să ieşiţi?"];
var timeshiftStatus	= ["Repede înapoi","Oprire","Redare","Pauză","Repede înainte"];
var pvrPowerOffRemind= ["Înregistrare în aşteptare","În aşteptare","Televizorul înregistrează acum, doriţi să menţineţi înregistrarea atunci când televizorul este în modul în aşteptare?"];
var timeshiftInitTitle= "Setare disc";
var timeshiftInitReminds= ["Acest asistent este utilizat la reglarea discului USB pentru decalare. Selectaţi modul de reglare.",
						 "Pentru o mai bună performanţă, recomandăm formatarea discului USB. Aceasta va şterge toate datele.",
						 "Selectaţi dimensiunea fişierului pentru decalare.",
						 "Formatare",
						 "Nu există spaţiu liber suficient.",
						 "Creare fişier decalare",
						 "Testare viteză",
						 "Viteza discului este prea mică (< %f MB/sec) pentru a activa funcţia de decalare!",
						 "Disc gata pentru decalare. Recomandăm totuşi schimbarea acestuia (cu viteză > %f MB/sec) pentru o mai bună performanţă.",
						 "Disc gata pentru decalare. "];
var timeshiftInitButtons= ["Formatare","Salt","Anuluj","Ok","Finalizare","Ieşire"];
var timeshiftInitOther=["Viteză disc:","MB / sec"];

var selectChoice	= "Sunteţi sigur?";
var chAtvStore		= "Stocare ca XXXX";
var chEpgFirstGenreUK= ["Cinema","Ştiri şi informaţii","DIVERTISMENT","Sport","Pentru copii","Educaţie","Lifestyle","Dramă"];
var homePageTitleList = ["APLICAŢII","TV","VIDEO-URI","Pagină de start"];
var homePageFavAndAllName  = ["Aplicaţii favorite","Toate aplicaţiile"];
var homePageBackUp = ["Manual electronic","GuideOn"];
var homePageRemind   = ["Funcţiile complete sunt disponibile doar după conectarea la reţea.","Televizorul dvs. nu are, deocamdată, niciun canal. Programele vor fi disponibile după scanarea canalelor.","Nr.program","Căutaţi acum canale?"];
var homePageHistory = ["Istoric"];
var miracastTitle = ["Legătură WiFi TV","Dispozitiv TCL"];
var miracastRemind=["Legătură WiFi TV vă permite să partajaţi wireless (mai exact, fără cabluri) ecranul şi sunetul dispozitivului dvs. (de ex. smartphone sau tabletă) cu televizorul. Astfel, puteţi vedea la televizor ceea ce redă smartphone-ul sau tableta. De exemplu, puteţi lansa un clip pe smartphone şi îl puteţi afişa simultan pe televizor sau vă puteţi utiliza tableta drept controler pentru jocuri, iar conţinutul se poate afişa pe ecranul mare al televizorului.","Linkul prin WiFi la TV este pregătit. Acum, puteţi începe să partajaţi ecranul dispozitivului cu televizorul.","Se conectează. Vă rugăm să așteptați!","Conexiune nereuşită!","Nu s-a reușit să se conecteze. Vă rugăm verificati!"];
var homePageLittleWin = ["Setări","Media","Canale favorite","Smart TV","EPG"];

var hbbtvStopRemind  = ["Vreti sa opriti redarea?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Apăsaţi pe OPŢIUNE pentru informaţii suplimentare";
var emptyListInfo = "Niciun dispozitiv nu este conectat la TV!";
var optionVideoListArray_1 = ["Preset imag.", "Sunet preconfig.", "Mod de redare", "Mod Ecran", "Regim 3D", 
							  "Comutator S-D", "Adâncimea imaginii", "Subtitrare", "Pistă sonoră", "Titlu", "Capitol", "Info"];
var optionVideoListArray_2 = ["Preset imag.", "Sunet preconfig.", "Mod de redare", "Mod Ecran", 
							  "Subtitrare", "Pistă sonoră", "Titlu", "Capitol", "Info"];
var bottomTipsText = ["Redare/pauză", "Repede înapoi", "Repede înainte", "Listă de redare", "Setări"];
var picturePresetArray = ["Standard", "Dinamic", "Natural", "Cinema", "Personal"];
var videoPlayModeArray = ["Repetare toate", "Repetare una", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Zbliż szerokątn.", "Zbliżenie 2", "Zbliż szerokątn. 2", "Rozciągnij", "Automat"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zbliżenie 14:9", "Zbliżenie 16:9", "Powiększ do 16:9", "Automat"];
var Mode3DArray = ["Oprit", "de la 2D la 3D", "Unul lângă altul", "Sus și jos", "Intercalare linii"];
var videoOptionListArray = ["Oprit", "Melodie", "Subtitrare", "Titlu", "Capitol"];
var subMenuTitleText = "Subtitrare";
var langMenuTitleText = "Limbă audio";
var titleMenuTitleText = "Titlu";
var mode3DMenuTitleText = "Regim 3D";
var langInfoText = "Melodie";
var STOP_RESUME_INFO = "Oprire-Reluare";
var playListName = "nume";
var eb_tips = "Sfaturi";
var ok_button = "Ok";
var eb_info = ["Eroare de decodificare audio.", "Eroare de decodificare video.", "Format audio neacceptat.", 
			   "Format video neacceptat.", "Nu poate deschide acest fişier.", "Eroare de redare, vă rugăm să încercaţi din nou.",
			   "Formatul de fişier neacceptat.", "Ups! Player-ul a oprit redarea.",
			   "Cale fişier inexistentă sau incorectă.\n Reintroduceţi dispozitivul de stocare și încercați din nou.",
			   "Continuaţi redarea de la starea de redare\n iniţială?"];
var frameTitleText = "Dispozitiv nou";
var eb_quit_info = "Sigur doriţi să părăsiţi?";
var eb_yes = "DA";
var eb_no = "NU";
var offinfo = "Oprit";
var naInfo = "Nul";
var consoleInfoArray = ["Repede înapoi", "Repede înainte", "Redare/pauză", "Listă de redare"];
var cantOperateText = ["Funcţie neacceptată."];
var chapterChangeInfo = "Doar capitolele de la 1 la XXXX sunt disponibile.";
var metaDataArray = ["Metadate pentru titlu/ediţie: ", "Metadate pentru capitol: ", "Metadate audio: ", "Metadate pentru subtitrare: "];
var metaTitleInfo = "Titlu";
var metaChapterInfo = "Capitol";
var videoLoadingInfo = "Se analizează…";
var listLoadingInfo = "Se încarcă…";
var pgInfo = "Evaluare juridică: ";
var fileNameText = "nume";
var fileDateText = "Dată";
var fileSizeText = "Dimensiune";
var fileDurationText = "Durată";
var fileDirectorText = "Regizor";
var fileCopyrightText = "Drepturi de autor";
var fileArtistText = "Artist";
var fileAlbumText = "Album";
var fileGenreText = "Gen";
var fileYearText = "An";
var fileGenreText = "Gen";
var mainListArray = ["Tot", "Imagine ", "Video", "Muzică"];
var sortArray = ["nume", "Dată"];
var parserArray = ["Normal", "Recurent  "];
var emptyTipsInfo = "Ups. Niciun fişier suportat găsit.";
var emptyFolderInfo = "Ups. Niciun fişier suportat găsit.";
var sortName = "Ordonare după";
var parserName = "Analizator";
var divx_str1 = "Înregistrare DivX(R)";
var divx_str2 = "Înregistrare DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Nicio opţiune disponibilă.";

var musicSoundPresetArray = ["Standard", "Cinema", "Muzică", "Voce clară", "Personal"];
var musicInformationArray = ["nume", "Artist", "Album", "Gen:", "An:", "Durata:"];
var playListName = "nume";
var playTipsInfo = ["Redare primul fişier în curs.", "Redare ultimul fişier în curs."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artist";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Sunet preconfig.";
var optionBGMInfo = "Redare în fundal";
var optionAudioOnlyInfo = "Doar audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX s-a conectat la televizor !";
var tvRemoteTitle		= "Telecomandă";
var tvRemoteDeveloper	= "Aplicaţia a fost dezvoltată de TCL";
var tvRemoteDeviceTitle	= "Nume dispozitiv:";
var remoteOption		= ["Partajare media","Telecomandă","Ajutor","Despre","Conectare inteligentă"];
var remotebottom		= " Descărcaţi « TV la distanţă » pe smartphone-ul dvs. ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Partajarea fotografiilor, a video-urilor şi a melodiilor cu televizorul prin intermediul telefonului.",
							"Etape: \n 1. Faceţi clic pe « TV la distanţă » de pe telefon. Conectaţi telefonul cu televizorul prin intermediul aceleiaşi reţele WiFi; \n 2. Faceţi clic pe « Partajare media » pentru a parcurge fişierele media; \n 3. Trimiteţi media la televizor pentru a le reda (cu ajutorul uneia dintre următoarele opţiuni)",
							"      a) Trageţi şi plasaţi folderul/fişierul pe pictograma televizorului din partea de sus a ecranului;\n      b) Mişcaţi telefonul către televizor pentru a lansa primul fişier;\n      c) Redaţi fişierul media pe telefon şi faceţi clic pe pictograma de partajare cu televizorul;",
							" 4. În timpul redării pe televizor, agitaţi telefonul pentru a reda fişierul anterior sau următor."];
var controlReminds		= ["Utilizaţi telefonul ca telecomandă pentru a acţiona televizorul.",
							" ",
							"Etape: \n 1. Faceţi clic pe « TV la distanţă » de pe telefon. Conectaţi telefonul cu televizorul prin intermediul aceleiaşi reţele WiFi; \n 2. Faceţi clic pe « Telecomandă » pentru a acţiona televizorul."];
var helpDeviceWords		= "Interacţiune pe ecrane multiple";
var helpBottom			= " În era tehnologiei cloud, dispozitivele inteligente precum telefonul şi televizorul sunt conectate reciproc. Distribuiţi conţinut media pe mai multe ecrane cu familia şi controlaţi televizorul prin telefon! ";
var helpReminds			= ["Pregătiri\n 1. Descărcaţi şi instalaţi « TV la distanţă » din Google Play sau Apple Store.\n 2. Conectaţi telefonul cu televizorul prin intermediul aceleiaşi reţele WiFi.",
							" ",
							"Telefon recomandat\n   1. Procesor: peste 800 MHz\n   2. Spaţiu stocare: cel puţin 80 MB de spaţiu liber",
							" ",
							"Aviz de responsabilitate\n Dacă \"Telecomanda TV\" nu este disponibilă pe telefonul dvs., vă rugăm să contactați producătorul telefonului."];
var helpButtons			= ["Anterior","Următorul"];
var aboutReminds		= ["Telecomandă","Aplicaţia a fost dezvoltată de TCL"];
var aboutExit			= "Ieşire";
var smartReminds		= ["Conexiunea rapidă şi inteligentă între televizor şi telefon.",
							" ",
							"Etape\n 1. Conectaţi televizorul şi telefonul la aceeaşi LAN. Faceţi clic pe « TV la distanţă » de pe smartphone.\n 2. Faceţi clic pe « Conectare inteligentă » pentru a scana codul QR.\n 3. Cu televizorul în modul de vizualizare Transmisiune, apăsaţi tasta INFO de pe telecomanda televizorului pentru 4 secunde pentru a afişa un cod QR pe tot ecranul.",];
var smartQRReminds		= ["Faceţi clic pe Conectare inteligentă din TV la distanţă de pe telefonul dvs. şi scanaţi codul QR pentru a conecta rapid televizorul şi telefonul.",
							"Codul QR conţine informaţiile despre contul LAN. Păstraţi-l într-un loc sigur."];
							

var consoleTipArray = ["Anterior","Următorul","Consolă","Listă de redare"];							
var optionInfoArray = ["Preset imag.","Mod de redare","Durată","Efect","Info"];

var playModeArray = ["Normal","Amestec","Repetă"];
var durationArray = ["Scurt (5 s)", "Mediu (10 s)", "Lung (15 s)"];
var effectArray = ["Niciuna", "Dizolvare", "Şterge dreapta", "Şterge stânga", "Şterge sus", "Şterge jos", "Cutie recepţie", "Cutie expediere", "Aleatoriu"];
var infoArray = ["Nume:","Dimensiune:","Data:","Locaţie"];

var picturePresetBarTitleInfo = "Preset imag.";
var picturePresetBarArray = ["Standard","Dinamic","Studiou","Cinema","Personal"];
var upTipsInfo = "Mutare imagine"; //add yums 2014-10-10
var consoleTipsArray = ["Consolă","Anterior","Următorul","Listă de redare","Setări"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Apăsaţi din nou pe DREAPTA pentru a reda imaginea următoare","Apăsaţi din nou pe STÂNGA pentru a reda imaginea anterioară","Apăsaţi din nou pe JOS pentru a afişa lista de redare"]; //add yums 2014-10-10

var optionPvrListArray = ["Preset imag.","Sunet preconfig.", "Mod Ecran", "Regim 3D", "Subtitrare", "Pistă sonoră", "Info"];							
	
var titleSpanFirstArray = ["Control şi conexiune","Operaţiuni de bază","APLICAŢII","TV","Setări","FAQ"];
var titleSpanSecondArray = [["Telecomandă","Taste tastatură","Navigare ușoară ","Conexiune TV","Conexiune TV","Conexiune TV","Wireless"],["Lansator","Bară de stare","Sursă"],["Se redau aplicaţii","Media","Telecomandă"],["Reglare canal şi volum","Listă canale","EPG","Instal. canal","Canale favorite"],["Reglare imagine","Reglare sunet","Reglare canal","Actualizare software","Limbă","Control parental"],["Întrebări frecvente","Întrebări frecvente","Soluţii tehnice","Soluţii tehnice","Termeni și condiții"]];
var contentSpan1_1Array = [["LISTĂ:","INFORMAŢII:","MENIU:","ALIMENTARE:","SURSĂ :","GHID:","TV INTELIGENT:"],["Afişează lista de canale","Afişează informaţiile despre program","Sare la pagina de start","Porneşte alimentarea sau activează modul în aşteptare","Selectează sursa de intrare","Afișează informațiile GPE ( Ghid Program  Electronic) ","Merge la pagina Smart TV"]];
var contentSpan1_2Array = ["Canal precedent","Canal următor","Mărire volum","Reducere volum","Sare la pagina de start","Confirmare opţiune","În aşteptare/Alimentare pornită"];
var contentSpan1_3Array = ["OK / Ghid","Canal Sus","Canal Jos","Volum jos","Volum sus","Disponibil ca taste săgeată în unele funcții."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI  ","HDMI (ARC)","Adaptor AV OUT","LAN","Smartphone","PC/Decodor/DVD","Amplificator audio","Amplificator audio/Monitor","Televizorul dvs. nu poate include toate prizele."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Căşti","Adaptor AV IN","SPDIF","Adaptor CMP AUDIO IN","Adaptor CMP IN (YPbPr)","Dispozitive USB","Dispozitive USB","Căşti","DVC/Consolă jocuri/Decodor/DVD","Amplificator audio","DVC/Consolă jocuri/Decodor/DVD","Televizorul dvs. nu poate include toate prizele."];
var contentSpan1_6Array = ["Interfaţă comună","SD","VGA","SCART","Mini SCART","INTRARE ANTENĂ","Card PCMCIA","Card SD","PC","Decodor/DVD","Antenă/Cablu/Satelit","Televizorul dvs. nu poate include toate prizele."];
var contentSpan1_7Array = ["Comprimat","PC","Router","Telefon","TV"];

var contentSpan2Array = [["Apăsați tastele săgeată pentru a vizualiza Homepage.","Apoi apăsaţi pe OK pentru a urmări unul dintre programele dorite sau pentru a accesa aplicaţia."],["Afişaţi data, reţeaua şi dispozitivele etc. în colţul din dreapta sus al ecranului."],["Selectaţi sursa de intrare dintre dispozitivele conectate la televizor prin intermediul diverselor porturi, cum ar fi TV, AV, HDMI etc."]];

var contentSpan3Array = ["Bucurați-vă și vizualizați aplicațiile preferate prin intermediul paginii de Smart TV","Vizualizați fotografii, vizionați clipuri video și redați muzică de pe un dispozitiv de stocare USB.","Conectaţi televizorul dvs. şi smartphone-ul sau tableta la aceeaşi LAN","Faceți clic pe TCL nScreen sau TV de la distanță de pe smartphone sau tableta","Împărtășiți fotografii, clipuri video și muzică pe mai multe ecrane cu familia dvs. și controlați televizorul prin intermediul smartphone-ului dvs."];

var contentSpan4Array = [["Apăsaţi pe SUS/JOS pentru a comuta canalele","Apăsaţi pe STÂNGA/DREAPTA pentru a regla volumul"],["Apăsaţi pe LIST de pe telecomandă pentru a afişa canalele în ordine.","Apăsaţi pe SUS/JOS pentru a alege canalul"],["EPG este un ghid cu afişare pe ecran, care afişează programele TV programate. Puteţi naviga, selecta, vizualiza şi înregistra programe."],["Căutarea şi instalarea canalelor"],["Adăugaţi sau editaţi canalele dvs. preferate în Listă canale"]];

var contentSpan5Array = ["Bucuraţi-vă de programele dvs. preferate prin intermediul aplicaţiilor video"];

var contentSpan6Array = [["Apăsaţi pe MENIU pentru a afişa opţiunile de setare a sistemului ","Accesaţi Setări imagine pentru a regla valorile"],["Apăsaţi pe MENIU pentru a afişa opţiunile de setare a sistemului ","Accesaţi Setări sunet pentru a defini opţiunile"],["Apăsaţi pe MENIU pentru a afişa opţiunile de setare a sistemului ","Accesaţi Setări canal pentru a defini opţiunile"],["Actualizaţi televizorul atunci când apare o nouă versiune de software"],["Puteţi alege limba preferată a meniului"],["Le permite părinţilor să blocheze canalele sau programele nepotrivite pentru copii"]];

var contentSpan7_1Array = [["Lipsă imagine, lipsă sunet","Verificaţi dacă siguranţa sau disjunctorul funcţionează.","Introduceţi un alt aparat electric în priză pentru a vă asigura că priza funcţionează sau că alimentarea a fost pornită.","Fişa de alimentare este în contact greşit cu priza","Verificaţi sursa semnalului."],["Imagine normală, lipsă sunet","Apăsaţi pe butonul pentru volum SUS pentru a mări volumul.","Setarea sunetului este incorectă.","Eroare de semnal al transmisiunii."],["Sunet normal, lipsă imagine","Reglaţi luminozitatea şi contrastul","Eroare de semnal al transmisiunii.","Verificaţi dacă nu cumva este în modul doar audio."]];
var contentSpan7_2Array = [["Interferenţe radio","Această interferenţă produce unde mobile sau dungi diagonale şi, în unele cazuri, pierderea contrastului imaginii. Găsiţi şi eliminaţi sursa interferenţelor radio."],["Lipsă culoare","Reglaţi setările pentru culoare.","Încercaţi un alt canal. Programul ar putea fi recepţionat în alb şi negru."],["Telecomanda nu funcţionează","Înlocuiţi bateriile.","Bateriile nu sunt corect instalate. Alimentarea principală a televizorului nu este conectată."]];
var contentSpan7_3Array = [["Conţinutul dispozitivului USB nu este afişat","Verificaţi dacă dispozitivul de stocare USB este compatibil cu televizorul.","Verificaţi dacă formatele fişierelor audio şi imagine sunt acceptate de către televizor."],["Redare fără sunet","Formatul audio al video-ului nu este acceptat de către televizor."],["Fişierele nu sunt redate fără probleme","Performanţa de transfer a dispozitivului de stocare USB poate limita rata de transfer al datelor către televizor."]];
var contentSpan7_4Array = [["Aspecte importante de luat în considerare în momentul actualizării software-ului","Fără pene de curent în timpul actualizării software-ului.","Evitaţi orice operaţiune cu telecomanda în timpul actualizării software-ului.","Aveţi răbdare, deoarece procesul de actualizare a software-ului poate dura o vreme."],["Nu apar modificări observabile ale interfeţei televizorului după actualizarea software-ului.","În anumite condiţii, actualizarea software-ului ar putea nu numai să actualizeze sau să adauge funcţii noi, ci şi să îmbunătăţească performanţele televizorului fără modificări observabile ale interfeţei. În plus, interfaţa televizorului poate rămâne, uneori, intactă."]];
var termsTitle = "Termeni și condiții";
var termsConditions = ["(Declarație juridică) a TCL - producator al acestui televizor.","Din cauza diferitelor capacităţi ale produselor care oferă serviciile SmartTV precum şi a limitărilor conţinutului disponibil, anumite funcţii, aplicaţii şi servicii pot să nu fie disponibile pentru toate dispozitivele sau în toate ţările. Unele funcţii ale SmartTV pot să necesite dispozitive periferice suplimentare sau cotizaţii de membru care sunt vândute separat. Vă rugăm să vizitaţi website-ul nostru pentru mai multe informaţii despre dispozitivele specifice şi disponibilitatea de conţinut. Serviciile şi disponibilitatea de conţinut prin SmartTV sunt supuse periodic modificărilor fără notificare prealabilă. \n   Conţinutul şi serviciile accesibile prin acest dispozitiv aparţin terţilor şi sunt protejate de legea drepturilor de autor, brevete, mărci înregistrate şi/sau alte legi referitoare la proprietatea intelectuală. Un astfel de conţinut şi de servicii sunt furnizate exclusiv pentru uz personal necomercial. Nu puteţi folosi conţinutul sau serviciile într-un mod care nu a fost autorizat de proprietarul conţinutului sau de furnizorul de servicii. Fără limitare la cele de mai sus, cu excepţia cazului în care este autorizat în mod expres de proprietarul conţinutului sau de furnizorul de servicii, nu puteţi modifica, copia, republica, încărca, posta, transmite, traduce, vinde, crea lucrări derivate, exploata, sau distribui în orice mod sau orice mediu conţinutul sau serviciile afişate prin intermediul acestui dispozitiv. \n   CONFIRMAŢI ÎN MOD EXPRES ŞI SUNTEŢI DE ACORD CĂ UTILIZAREA ACESTUI DISPOZITIV ESTE PE PROPRIUL DUMNEAVOASTRĂ RISC ÎN CEEA CE PRIVEŞTE CALITATEA SATISFĂCĂTOARE, PERFORMANŢA ŞI PRECIZIA. DISPOZITIVUL ŞI CONŢINUTUL ŞI SERVICIILE DE LA TERŢI SUNT FURNIZATE „CA ATARE” FĂRĂ NICIUN FEL DE GARANŢIE, FIE EXPRESĂ, FIE IMPLICITĂ. TCL DECLINĂ ÎN MOD EXPRES TOATE GARANŢIILE ŞI CONDIŢIILE CU PRIVIRE LA ACEST DISPOZITIV ŞI ORICE CONŢINUT ŞI SERVICII, FIE EXPRESE, FIE IMPLICITE, INCLUZÂND, DAR FĂRĂ A SE LIMITA LA, GARANŢIILE DE VANDABILITATE, DE CALITATE SATISFĂCĂTOARE, ADECVARE PENTRU UN ANUMIT SCOP, ACURATEŢE, FOLOSINŢĂ ŞI RESPECTARE A DREPTURILOR PĂRŢILOR TERŢE. TCL NU GARANTEAZĂ ACURATEŢEA, VALIDITATEA, DURABILITATEA, OPORTUNITATEA, LEGALITATEA SAU CARACTERUL COMPLET AL CONŢINUTULUI SAU SERVICIILOR DISPONIBILE PRIN ACEST DISPOZITIV ŞI NU GARANTEAZĂ CĂ DISPOZITIVUL, CONŢINUTUL SAU SERVICIILE VOR ÎNTRUNI CERINŢELE DUMNEAVOASTRĂ SAU CĂ FUNCŢIONAREA DISPOZITIVULUI SAU SERVICIILOR VA FI CONTINUĂ SAU FĂRĂ PROBLEME. TCL NU VA FI RESPONSABIL ÎN NICIO SITUAŢIE, INCLUSIV CEA DE NEGLIJENŢĂ, FIE PRIN CONTRACT, FIE DIN CULPĂ, PENTRU ORICE DAUNE DIRECTE, INDIRECTE, ACCIDENTALE, SPECIALE SAU SUBSECVENTE, PENTRU ONORARIILE AVOCAŢILOR, CHELTUIELILE SAU ORICE ALTE DAUNE CARE DECURG DIN SAU AFERENTE ORICĂROR INFORMAŢII CONŢINUTE AICI SAU CARE REZULTĂ DIN UTILIZAREA DISPOZITIVULUI SAU ORICĂRUI CONŢINUT SAU SERVICIU ACCESAT DE CĂTRE DUMNEAVOASTRĂ SAU TERŢI CHIAR DACĂ A FOST AVERTIZAT DE POSIBILITATEA UNOR ASTFEL DE DAUNE. \n   Serviciile terţilor pot fi schimbate, suspendate, înlăturate sau întrerupte sau accesul poate fi dezactivat oricând fără preaviz, iar TCL (fabricantul aparatelor TV Thomson) nu transmite nicio asigurare sau nu oferă nici o garanţie că serviciile sau conţinutul vor rămâne disponibile pentru orice perioadă de timp. Conţinutul şi serviciile sunt transmise de către terţi prin reţele şi facilităţi de transmisie asupra cărora TCL nu deţine controlul. Fără a limita caracterul general al acestei declinări a răspunderii legale, TCL declină în mod expres orice responsabilitate sau răspundere pentru orice modificare, întrerupere, dezactivare, înlăturare sau suspendare a oricărui conţinut sau serviciu disponibil prin acest dispozitiv. TCL poate impune limite privind utilizarea sau accesul la anumite servicii sau conţinut oricând, fără preaviz sau responsabilitate. TCL nu este responsabil sau răspunzător de serviciul clienţi aferent conţinutului şi serviciilor. Orice întrebare privitoare la sau cerere de servicii referitoare la conţinut sau servicii trebuie adresată direct furnizorilor de servicii şi conţinut respectivi."];

var noChannelListRemind        = ["Niciun canal găsit. Lista de canale va fi disponibilă după scanarea canalelor.","Scan. Canal"];
var closeSubtitleRemind   = "Funcţia va fi disponibilă atunci când subtitrarea este dezactivată. Doriţi să instalaţi acum?";

var estickerTitles = ["Imagini extrem de realiste","Culori care par să prindă viaţă","Mişcare extraordinar de realistă","Calitate dinamică a imaginii","Scalare SR UHD","Experienţă a universului 3D","Performanţe mai rapide","Conţinut 4K de viitor","Bucuraţi-vă de lumea on-line","Accesaţi conţinut suplimentar","Tunere digitale încorporate","Posibilitate de conectare a tuturor dispozitivelor","Diverse surse 4K","Conţinut USB","WIFI ultra rapid","Conţinut mobil pe televizor","Conţinut al aparatelor mobile","Conţinut local","Aprobat de DivX","Imagine fără defecte","Canal Ready","TDT Premium"];
var estickerDescriptions = ["O experienţă de vizualizare extraordinară, mulţumită imaginilor cu de patru ori mai multe detalii decât ecranul Full HD sau UHD","Gama variată de culori asigură vivacitatea fiecărei scene, cu tonurile sale de roşu vibrant şi de verde smarald","Interpolare de cadru 4K şi redare în fundal pentru a combate neclaritatea de mişcare","Strălucirea imaginii originale este maximizată pentru a genera un rezultat cu adevărat dinamic, cu un contrast luminos","Bucuraţi-vă de emisiuni TV şi de discuri Blu-Ray mai clare ca niciodată, mulţumită tehnologiei Super Resolution","Experimentaţi opţiunea 3D TV Ready şi urmăriţi diverse conţinuturi în 3D ","O şi mai plăcută experienţă de divertisment, cu Quad Core pentru o interacţiune lină şi o performanţă îmbunătăţită","Acceptare a codecurilor HEVC (H.265) suplimentare pentru standardul de viitor pentru distribuţia video 4K","O multitudine de aplicaţii on-line, servicii VOD, posibilităţi de urmărire a emisiunilor după data transmiterii acestora şi de navigare Internet","Vedeţi mai mult cu servicii şi conţinut suplimentare de la emiţătorii dvs. preferaţi","Accesaţi canale de televiziune HD fără ajutorul unui decodor","Uşor de conectat multiple surse digitale la domiciliu","Televizor pregătit pentru viitor, capabil să redea 4K 50/60 Hz cu HDMI 2.0 prin HDCP 2.2","Conţinut video sau foto direct de pe discul USB, HDD sau aparatul foto sau camera video, pe ecran mare, la rezoluţie 4K","Standardul 2x2 MIMO şi AC de ultimă generaţie asigură o viteză de accesare a Internetului fără precedent","Bucuraţi-vă de fotografii, video-uri, aplicaţii de pe dispozitive mobile pe ecran mare mulţumită tehnologiei de oglindire pe ecran.","Fotografiile, video-urile, aplicaţiile de pe smartphone sau tabletă pot fi afişate pe un ecran mare ","Afişaţi pe un ecran mare conţinutul local, precum fotografiile, video-urile de pe dispozitivele conectate la reţeaua locală","Redaţi filme închiriate sau proprii protejate de DivX","Faţetă ultra îngustă şi design super plat","Testat şi aprobat de Canal+","Testat şi aprobat de TDT Premium"];							

var eManualTextArray = ["Manual electronic","Toate elementele grafice în interior sunt numai pentru reprezentare."];
var frontPanelRemind = "Panou frontal blocat.";
var eRPRemind		 = "Modul magazin incompatibil cu cererea ERP. Sunteţi sigur?";	
var noRelatedChannel = "Nici un canal relevant";
var option0624Name          = ["BOP","BFS","Fiecare caz în parte","GetUserID","BGM","Reset all","Reset. magaz.","NRM","DVB-T2 şi alegere ţară","Mod HbbTV"];
var DVBT2AndChoice = ["Pornit","După țară","Oprit"];
var hbbtvServiceRemind = "Serviciul HbbTV se va lansa în curând.";
var insertWord = "Inserare";		
var viewDetail = "Vezi detalii";							

var remindOAD  = "Actualizare software. O nouă actualizare recomandată poate fi disponibilă pe un alt canal. Dacă acceptaţi să o descărcaţi, canalul poate fi schimbat automat. Doriţi să faceţi asta chiar acum?";

var LEDStatus = ["Luminează intermitent", "Normal"];
var netFlixRemind = "Această funcţie va întrerupe accesul la serviciile Netflix până ce vă conectaţi din nou.";
var ESNExplanation = "Număr de serie electronic";
var resetShopRemind = "Sistemul se resetează acum, vă rugăm să nu vă închideţi televizorul";
var initialSelectOption = "Selectaţi o opţiune:";
var databaseRemind   = "Sistemul a detectat faptul că baza de date a fost deteriorată dintr-un motiv necunoscut şi a reconstruit-o automat, apăsaţi OK pentru continuare";
var Deactivation = "Deconectare";
var oadFutureRemind = "Updatare software. Un nou software recomandat va fi disponibil în %s. Updatarea poate lua câteva minute şi ecranul se poate colora negru. Nu opriţi receiver-ul în timpul updatării. Dacă acceptaţi această updatare, vă rugăm să lăsaţi receiver-ul pornit sau în modul standby, la ora programată. Doriţi să primiţi această updatare?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Ieşire sunet";
var bt_soundOutPutTV = "Boxe TV";
var bt_soundOutPutBT = "Aparat Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth şi TV";
var bt_refreshBarName = "Aparate";
var bt_settingTips_On = "Activaţi funcţia Bluetooth şi căutaţi aparate.";
var bt_settingTips_Finding = "Găsire aparate disponibile…";
var bt_settingTips_NoDevice = "Niciun aparat disponibil.";
var bt_deviceList_State_NoConnect = "Neconectat";
var bt_deviceList_State_Connecting = "Conectare...";
var bt_deviceList_State_Connected = "Conectat";
var bt_deviceList_State_Paired = "Asociat";
var bt_deviceList_Conncect_Failed_Tips1 = "Conexiune eşuată.";
var bt_deviceList_Conncect_Failed_Tips2 = "Vă rugăm să confirmaţi că funcţia Bluetooth a XXX este activată";
var bt_deviceList_Conncect_Success = "Conectat la aparatul Bluetooth.";
var bt_deviceList_Disconncect_Success = "Deconectat de la aparatul Bluetooth.";
var bt_deviceList_Disconnect = "Sigur că doriţi să deconectaţi de la XXX?";
var bt_tipsTitle = "Sfat";
var bt_bluetooth_Pairing_Title = "Asociere Bluetooth";
var bt_bluetooth_Input_Pin = "Introduceţi codul PIN:";
var bt_bluetooth_Output_Pin_Tip = "Introduceţi codul PIN XXXX cu tastatura";
var bt_bluetooth_Pin_Wrong_Tip = "PIN incorect";
var bt_bluetooth_Remove_Pair_Title = "Căutare";
var bt_bluetooth_Remove_Pair_Ask = "Uitaţi acest aparat?";
var bt_bluetooth_module_error = "Eroare modul Bluetooth!";		
		
var netflixDialogOptions = ["OK","Mai târziu","Nu mai afișa"];
var netflixDialogContent = "Se pot urmări mii de filme pe Netflix, accesați acum?";
var netflixRemoteDialogContent = "Telecomanda cu tasta Netflix poate fi achiziționată. Vizitați următorul site pentru mai multe informații.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Sursa curentă","Toate sursele"];
var audioDescriptionName = ["Descriere audio","Difuzor","Volum difuzor","Cască","Volum cască","volum AD","Dispozitiv Bluetooth","Volum dispozitiv Bluetooth"];
var audioDescriptionOptions = ["Oprit","Normal","Descriere audio"];						
var volumeOffRemind = 'Setaţi XXX pe „Pornit” în meniul Setări.';
var switchSourceRemind   = " introdus. Doriţi să comutaţi acum?";							

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Mod sport";
var resetStadium = "Stadion";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Ieşire","0","Zoom+",
                       	   "Ieşire",
                       	   "Listă","0","Text","Ghid","Intrare","Ieşire","Meniu","Subtitrare","Info",
                       	   "Stop",
                       	   "Info","Meniu","Ieşire"
                       	   ];
var nscreenTips = "GuideOn îi ajută pe utilizatori să parcurgă un volum mare de conţinut.";
var nscreenContent = 'Paşi: 1.Faceţi clic pe „TCL nScreen” pe telefon.  Conectaţi telefonul la televizor prin aceeaşi reţea LAN; 2.Faceţi clic pe „GuideOn” pentru a accesa GuideOn; 3.GuideOn are funcţii similare celor ale unui ghid de programe tipărit, informându-i pe utilizatori despre conţinutul televizat disponibil;';
var singalBrokenoffTips = "Semnal întrerupt. Sistemul nu poate finaliza descărcarea.";
var contentSpan1_1Array_AU =  [["ALIMENTARE:","SURSĂ:","MENIU:","BACK:","INFORMAŢII:","HOME:","EXIT:","LISTĂ:"],
                             ["Turns power on or standby mode","Select the input source",
                                 "Show TV settings menu","Go back to the Previous menu or exit a running APP",
                                 "Afişează informaţiile despre program",
                                 "Sare la pagina de start","Go back to the Previous menu or exit a running APP","Afişează lista de canale"]];
var guideDescriptionWords ="Scanaţi codul QR pentru a descărca aplicaţia GuideOn pe telefon";
var settingNoticeSourceName ="Sursă auto";
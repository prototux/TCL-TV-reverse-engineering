
var all_country 	= ["Australija ","Austrija","Belgija","Bugarska","Hrvatska","Češka republika","Danska","Finska","Francuska","Nemačka",
						"Grčka","Mađarska","Italija","Luksemburg","Holandija","Norveška","Poljska","Portugalija","Rumunija","Rusija",
						"Srbija","Slovenija","Španija","Švedska","Švajcarska","Ujedinjeno kraljevstvo","Novi Zeland"," "/*Arab*/,"Estonija"," "/*Hebrew*/,
						"Letonija","Slovačka","Turska","Irska","*","Filipini","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kina","*","*","*","*","*","*","Ostalo","Litvanija"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litvanija"];							
				
var all_language 	= ["Češki","*","Danski","*","*","nemački","engleski","francuski","grčki","španski",
						"Hrvatski","*","italijanski","Mađarski","Holandski","Norveški","Poljski","Portugalski","ruski","Rumunski",
						"Slovenački","Srpski","Finski","Švedski","Bugarski","Slovački","*","*","Galski","*",
						"Velški","arapski ","İrlandaca","Letonski","*","turski","Estonski","Holandski"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Originalni zvuk"/*Qaa*/,"Neodređeno"/*Undetermined*/,"*","Nepoznato",
						"Neodređeno","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskijski","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Beyaz Rusya Dili","*","*","Katalonski","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicijski","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandski","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litvanski",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantični","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrajinski","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Isključ.","Uključ."];
var okCancel		= ["Ok","Otkaži"];
var yesNo			= ["DA","NE"];
var level			= ["Isključ.","nisko","Jako","Srednje"];
var manualAuto		= ["Manuelno","Auto"];
var homeShop		= ["Početak","prodavnica"];
var picPreset		= ["Cтандард","Динамички","Prirodni","Bioskop","Digitalni bioskop","lično"];
var picColorTemp	= ["hladno","Normalno","toplo","toplo2","Korisnik"];
var pic3dNavig		= ["Manuelno","Auto","Poluautomatski"];
var _3dOptions		= ["3D režim","3D-u-2D","Prebacivanje L-D","Dubina polja"];
var pic3DMode       = ["Isključ.","2D-u-3D","Jedno-uz-Drugo","Vrh i Dno","Preplitanje linija"];
var picEcoOptions	= ["Čuvanje energije","svetlosni senzor ","Lokalno nedostupno","Mešovito zatamnjenje"];
var picGeoOptions	= ["Geometrija","H. Položaj","V. Položaj","Sat","Faza"];//Geometry 无翻译
var picAdWhiteBal	= ["R dodavanje","G dodavanje","B dodavanje","R izjednačavanje","G izjednačavanje","B izjednačavanje"];
var souOptions		= ["Unapred definisani zvuk ","Balans","Audio kašnjenje","SRS TSHD","Auto-kontrola tona",
						"SPDIF tip","SPDIF odlaganje","TV plasman","Audio jezik","Audio kanal",
						"Audio opis","Digitalni audio izlaz","Profesionalne Dolby postavke"];
var soundOutputoptions =["DAP izlaz za TV zvučnik","Spoljni AVR kodirani izlaz"];
var inteligenteqoptions 	=["Fokusiran","Bogat"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Isključ."];
var colorSpace      = ["Auto","Izvorno","Korisnik","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Okružujući virtualajzer","Pojačivač dialoga","Pojačivač basa","Inteligentna glasnost","Medijska inteligenca","Grafični ekvilajzer","Inteligentni EQ"];
var chOptions		= ["Skeniranje kanala ","Spisak kanala","EPG","Organizator","Analiza kanala",
						"vrem. pomeraj","Titl","Teletekst","Tip spiska kanala"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Jačina signala","kvalitet signala ","Frekvencija (KHz)","ID servisa","ID mreže","Ime mreže"];
var chScanOptions	= ["Država","Režim prijemnika","Skeniranje kanala","Automatsko ažuriranje","Analog. ručni sken",
						["Ručno sken. kablov.","Ručno sken. antene","Ručno podešavanje satelita"],"Nameštanje satelitske antene","Izbor omiljene mreže","Izbriši listu kanala",];
var favNetDes		= "Izaberite svoju omiljenu mrežu";
var tuner			= ["Kabl","Aнтена","Satelit"];//Satelite 无翻译
var passError		= "Lozinka netačna.\nMolimo vas da unesete lozinku ponovo!";
var chType			= ["Analogni kanali: ","Digitalni kanali: "];
var chScanStatus	= ["Status: Skeniranje","Status: Skeniranje završeno","Status: Skeniranje otkazano","Status: Greška u skeniranju"];
var chScanPara		= ["Frekvencija (KHz)","Modulacija","Opseg simbola (Ksym/s)","ID mreže","Sistem",
						"Fino podešavanje","Jačina signala","kvalitet signala ","Modus skeniranja","ID kanala"];
var chScanParaMHZ      = ["Frekvencija (MHz)"];
var chAtvManSys		= ["ZAPADNA EVROPA","ISTOČNA EVROPA","Velika Britanija ","Francuska"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Da li želiš da izbrišeš spisak kanala?";
var chDeletDes		= "Da li želite da izbrišete kanal ?";
var chOperator		= ["Ziggo","UPC","Ostalo"];
var chScanType		= ["Digitalno & Analogno ","Digitalno","Analogno"];
var chScanMode		= ["Puno","Unapre. Pretrag","brzo"];
var bookingModes	= ["Snimanje","Podsetnik"];
var dayName			= ["ned.","pon.","Ut.","Sr.","Čet.","Pet.","Sub."];
var monthName		= ["jan.", "feb.","mart","apr.","maj","jun","jul","avg.","sept.","okt.","nov.","dec."];
var filter			= ["Фильтр","Tip","Pod-tip"];
var chEpgFirstGenre	= ["Bioskop","News","Šou programi","Sportovi","Dečje","muzika","Umetnost","Društveni","Obrazovanje","Odmor","SPECIJALNI"];
var chEpgSecondGenre= [["Drama","Detektivski","Avantura","Naučna fantastika","Komedija","Sapunica","Romantični","Ozbiljni","Filmovi za odrasle"," "," "," "],
						["Trenutna dešavanja","Vremenski izveštaj","Novinski magazin","Dokumentarni","Rasprave"," "," "," "," "," "," "," "],
						["Šou programi","Kvizovi","Mešani sadržaj","Emisija sa razgovorima"," "," "," "," "," "," "," "," "],
						["Sportovi","Posebni događaji","Sportski magazini","Fudbal","Tenis",
							"Timski sportovi","Atletika","Automoto sport","Sportovi na vodi","Zimski sportovi",
							"Konjski sportovi","Borilački sportovi"],
						["Dečje","Deca predškolskog uzrasta","Zabava za decu od 6 do 14 godina","Zabava za decu od 10 do 16 godina","Informacioni","Crtani filmovi"," "," "," "," "," "," "," "],
						["muzika","Rock","Ozbiljni","Folk","Džez","Mjuzikl","Balet"," "," "," "," "," "],
						["Umetnost","Scenska umetnost","Likovne umetnosti","Religija","Popularna kultura",
							"Literatura ","Film","Eksperimentalni","Emitovanje","Novi mediji",
							"Umetnički magazini","Moda"],
						["Društveni","Magazini","Ekonomija","Neverovatni ljudi"," "," "," "," "," "," "," "," "],
						["Obrazovanje","Priroda","Tehnologija","Medicina","Strane države","Društvene nauke","Dalje obrazovanje","Jezici"," "," "," "," "],
						["Razonoda i hobiji","Turizam","Ručni rad","Motori","Fitnes i zdravlje","Kuvanje","Reklame","Baštovanstvo"," "," "," "," "],
						["Originalni jezik","Crno-belo","Neobjavljeni","Emitovanje uživo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Preskakanje kanala","Sortiranje kanala","Uređivanje kanala","Brisanje kanala","kanal zamjena","kanal umetak"];
var chEditPara 		= ["Ime mreže","Broj kanala","Naziv kanala","Frekvencija","Sistem boje","Zvučni sistem"];
var chSatTitles		= ["Tip satelita","Nameštanje satelitske antene","Izaberite satelit"];
var chSatEidtOptions= ["Naziv satelita","Položaj","LNB власт","LNB frekvencija ( MHz )","Disecq ulaz",
						"Tonski 22 kHz","тон Бурст","Frekvencija (KHz)","Opseg simbola (Ksym/s)","Polarizacija",
						"Jačina signala","kvalitet signala ","Status satelita"];
var chSatAutoPromt	= [["Sve","Mreža"],
						["Sve","Slobodno"]];
var chSatAutoScanOptions=["Izaberite satelit","Modus skeniranja","Kanali"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzalno",];
var chSatDiSEqCInput= ["Onemogući","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Uključ.","Isključ."];
var chSatToneBurst	= ["Onemogući","тон Бурст A","тон Бурст B"];
var chSatPolarization= ["Horizontalna","Vertikalna"];
var chSatSetupOptions=["Tip antene","podešivač","Frekvencija opsega"];
var chSatAntennaType= ["Jedan kabl","Univerzalno"];
var chSatUserBands	= ["Korisnički opseg 1","Korisnički opseg 2","Korisnički opseg 3","Korisnički opseg 4","Korisnički opseg 5","Korisnički opseg 6","Korisnički opseg 7","Korisnički opseg 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["korisnički definisano"];
var pleaseSelectSat = "Molimo odaberite prvo satelite!";
var subOptions		= ["Titl","Digitalni jezik titla","Digitalni jezik titla 2.","Tip titla"];
var ttxOptionsCon      = ["Jezik str. za dekod.","Jezik digit. teleteksta"];
var subType			= ["Normalno","Sa oštećenim sluh."];
var netIntf     	= ["Ethernet","Bežično"];
var netConnDes		= ["TV testira vezu sa mrežom.\nSačekajte! ",
						"Test povezanosti na mrežu je uspeo!",
						"Test povezanosti na mrežu nije uspeo."];
var netSsidError	= "Važeća dužina SSID je 1 ~ 32 karaktera . Molimo vas da proverite SSID .";
var netOthers		= ["PIN kod"];
var netWlessAutoDes	= ["Molim te proveri da li je sledeći PIN kod instaliran u pristupnu tačku pre nego što pritisneš OK.",
						"Molim te da u roku od 120 sekundi pritisneš dugme na pristupnoj tački pre nego što pritisneš OK."];
var netConnRemind	= ["Lozinka je netačna!",
						"Povezivanje . Molimo sačekajte!",
						"Povezivanje je bilo uspešno. IP adresa dobijena!",
						"Prekid veze!",
						"TV skenira pristupne tačke\nSačekajte",
						"Nema bežičnog uređaja povezanog sa TV-om!"];
var netWireIpOptions= ["IP podešavanja","Tip adrese","IP adresa","Maska podmreže","Podraz. mrežni prolaz","Primarni DNS","Sekundarni DNS"];
var netWireConnRemind= ["Molimo unesite broj između 0 i 255.",
						"Povezivanje uspešno!",
						"Molimo unesite važeću adresu",
						"Povezivanje uspešno!",
						"Povezivanje nije uspelo!",
						"Povezivanje . Molimo sačekajte!",
						"Unesite vrednost između 1 i 223 ."];
var netFlixOptions	= ["Deaktiviraj","ESN"];
var netFlixDes	 	= ["Jeste li sigurni da želite da deaktivirate?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Softver. ažuriranje";
var netUpdateDialogTitle = "Ažuriranje softvera";
var netBGDownloadTitle 	= "Preuzimanje";
var netUpdateLoadingPrompt= ["U potrazi za nadogradnju , sačekajte !",
							"Softver se preuzima ... molimo sačekajte!",
							"Molimo da NE isključujete TV tokom ažuriranja softvera!",
                            "Imperativno ažuriranje softvera se automatski preuzima u pozadini!"];
var netUpdatePrompt= ["Čestitam, imaš najnoviju verziju softvera!",
						"Pronađena je novija verzija softvera XXXX. Da li želiš da je sada preuzmeš? Ovo može potrajati, što zavisi od tvoje mreže.",
						"Neuspešno prijavljivanje!",
						"Nije uspelo dobiti podatke, pokušajte ponovo kasnije !",
						"Neuspešna operacija Parse Update XML!",
						"Prekid veze!",
						"Uspešno preuzet softver. Želite da pokrenete ažuriranje fleš memorije?",
						"Podaci izgubljeni! Preuzimanje neuspešno!",
						"Neuspešna provera paketa. Pokušajte ponovo!",
						"Neuobičajen rad mreže. Proverite i ponovo uspostavite vezu...",
						"Neuspešno ažuriranje. Isklj. i ponovo uklj. TV!",
						"Datoteka za nadogradnju je neočekivano obrisana. Ponovite nadogradnju preko mreže.",
						"Softver je preuzet u pozadini. Da li želite da obavite nadogradnju?"];
var netUpdateButtonText = ["Preuzimanje", "Ažuriranje", "Kasnije", "Nikad", "Ok","Nastavi"];
var autoDetectPrompt = ["Pronađena je novija verzija softvera XXXX. Da li želiš da je sada preuzmeš? Ovo može potrajati, što zavisi od tvoje mreže.",
						"Pronađen je novi softver, verzija XXXX. Da li želiš da sad ažuriraš?",
						"Poslednji proces nadogradnje preko mreže je prekinut. Potrebno je da ponovo pokrenete nadogradnju.",
                        "Preuzimanje nove verzije softvera XXXX nije završen . Da li želite da nastavite sada ?",
                        "Softver preuzet, da li želite da sada ažurirate ?"];
var sysOptions		= ["E - priručnik","Jezik menija","Tajmer","Zaključaj","Postavke unosa",
						"Softver. ažuriranje","Lokacija","HbbTV režim","kolači","Obični interfejs",
						"Напредна подешавања","Reset shop","LED indikator"];
var sysResetDes		= "Jeste li sigurni?";
var sysMenuLangOptions=["Jezik","Željeni jezik audia","Preferirani drugi audio jezik "];
var sysTimerOptions	= ["Vremenska zona","Naziv regiona","Sat","Tajmer mirovanja","Auto režim mirovanja", "Country region"];

var sysTimeZone		= ["Kao emitovalac","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Isključ.","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Isključ.","4 sata","6 sata","8 sata"];
var sysRegionName	= ["Madrid ","Kanari"];
var sysClockOptions	= ["Autom. sinhroniz.","Datum","Vreme","Tajmer za uključivanje","Tajmer",
						"Kanal pri uključivanju","Tajmer za isključivanje","Tajmer"];
var sysTimer		= ["Isključ.","Dnevno","Jednom"];

var sysInputSet		= ["nema oznake ","DVD","Blu-ray","HDD","DVDR",
						"HD zapis ","igirica ","VCR ","PC","Digital STB",
						"HD dig STB","kamera ","snimač","ostalo "];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["USB-om","mreže-om","Po kanalu"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"U etru nema novog softvera!",
						"Pronađen je novi softver, verzija XXXX. Da li želiš da sad ažuriraš?",
						"Molimo vas da ubacite USB stik.",
						"Neuspešna provera paketa. Pokušajte ponovo!",
						"Molimo NE izvlačite USB dongl i isključite TV tokom ažuriranja firmvera!!",
						"Softver je uspešno ažuriran .\nTV će tada automatski restartati!",
						"Pronađena je novija verzija softvera XXXX. Da li želiš da je sada preuzmeš? Ovo može potrajati, što zavisi od tvoje mreže.",
						"Preuzimanje",
						"Uspešno preuzet softver. Želite da pokrenete ažuriranje fleš memorije?",
						"Ažur. neuspelo!",
						"Pretraga datoteka za ažuriranje",
						"Softver je uspešno ažuriran.\nMolim, odmah restartujte TV."];
var sysProductInfo	= ["Trenutna verzija","Naziv proizvoda","Naziv proizvođača","Naziv šasije"];
var sysCiDes		= ["Nema CI kartice."];
var sysAdOptions	= ["DivX(R) registracija","Odjava registracije DivX(R)","T-Link","Authorization Error","Potvrda o uklanjanju iz registra",
						"Potvrda o iznajmljivanju","Najam je istekao","ID Bluetooth modula"];
var sysRegistDes	= ["Morate da registrujete svoj uređaj da biste reprodukovali DivX zaštićeni video",
						"Registracioni kôd:",
						"Registrujte se na http://vod.divx.com"];
var sysDregistDes	= ["Kôd za odjavu registracije:",
						"Odjavite registraciju na http://vod.divx.com",
						"Nastaviti sa registracijom?"];
var mediaAuthorization = ["Tvoj uređaj nema dozvolu da reprodukuje ovaj DivX(R) zaštićeni video."];
var deregistrationConfrimation = ["Vaš uređaj je već registrovan.","Jeste li sigurni da želite da odjavite registraciju?"];
var rentalConfirmation = "DivX(R) je iskoristio XXXX od YYYY pregleda. Želiš da nastaviš?";
var rentalExpired 	= "DivX ( R ) Iznajmljivanje je potrošilo XXXX od YYYY pogleda. DivX iznajmljivanje je isteklo .";
						
						
var sysLockOptions	= ["Kanal je zaključan","Brava vremenskog intervala","Roditeljska procena","Unoš. zaključano","Zaključavanje na prednjoj ploči","instalacija sistema za zaključavanje ",
						"Promenite lozinku","maks. jačina zvuka ","Očisti sve"];
var sysTimeIntervals= ["Tip brave","Vreme početka","Vreme završetka"];
var sysRatingOptions= ["Nema","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Cenzurirano ( Španija )"];
var changePass		= ["Promenite lozinku","Nova lozinka","Potvrdite lozinku"];
var changePassDes	= ["Lozinka netačna.\nMolimo vas da unesete lozinku ponovo!",
						"Lozinka se ne podudara.\nMolimo vas da unesete lozinku ponovo!",
						"Lozinka uspešno kreirana.",
						"Ovaj kod je previše jednostavan da bi se postavio kao lozinka.\nMolimo unesite ponovo!"];
var sysPowerOnChOptions= "Izaberite režim";
var sysPowerOnCh	= ["Poslednji status","Korisnički izbor"];
var netWlessSecu    = ["otvoreno","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nema","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Nema podrške"];
var netWlessSecu3	= ["Nema","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nema podrške"];
var netOptions		= ["Internet veza","Interfejs","Bežična podešavanja","IP podešavanja","Informacije",
						"Test veze","DLNA","TCL nScreen","Podešavanje Netflix-a","ViFi TV Link",
						"Tip adrese","IP adresa","Maska podmreže","Podraz. mrežni prolaz","Primarni DNS",
						"Sekundarni DNS","SSID","BSSID","Unesi SSID, molim:","ID korisnika"];
var chEditDes		= ["Dupli broj kanala!","Pritisnite crveni taster da biste izbrisali trenutni znak!","Nevažeći brojevi kanala"];
var chEpgNoProgram	= "Trenutačno nema informacije o programu, molim vas tražite prvo kanale!";
var chEpgWords		= ["Vodič kroz programe","Nema podataka o programu.","Kanal je zaključan!","Nema detajla o programu.","Nema naziva programa "];
var chEpgBooking	= ["Распоред инфо", "Broj kanala","Datum početka","Vreme početka","Vreme završetka",
						"Tip ponavljanja","Tip programiranog snemanja","Dodaj","Zameni","Promeni",
						"Dodaj/Izmeni"];
var epgHotKey		= ["Prethodni dan","Sledeći dan","Фильтр","Spisak zakazanog","Dodaj zakazano"];
var chEpgBookRemind	= ["Neispravno početno vreme","Neispravno završno vreme","Dupli raspored","Uspešno sačuvano","Uspešno izbrisan."];
var chSchePara		= ["Spisak zakazanog","Vreme početka","Datum početka","Naziv programa","Naziv kanala",
						"Trajanje","ponovi ","Raspored","Izmena","Obriši"];
var dateTimer		= ["Jednom","Dnevno","Nedeljno"];
var scheduleDeleteReminds="Da li želite da izbrišete ovaj plan?";
var scheduleNoLists	= "Ne postoji raspored liste. Pritisnite \" Crveni\" taster da dodate.";
var chListWords		= ["Spisak kanala","Izaberite listu","Režim prijemnika","Dodaj u omiljene","otkloni ",
						"Odaberi spisak kanala","Odaberi režim pretraživača","Zameni"];
var chListType		= ["Sve","Digitalno","Analogno","Radio","Slobodno","Favoriti"];
var chAutoScanOptions=["Odaberite operatora","тип канала","Skeniranje kanala"];
var souSoundType	= ["Neispravno","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dualno1","Dualno2","Dualno2",
						"Nicam mono","Nicam stereo","Nicam dual 1","Nicam dual 2","Nicam dvostruki",
						"Mono","LL","RR","LR"];
var souPreset		= ["muzika","Bioskop","jasan glas","Cтандард","lično"];
var picAdRgbMode	= ["Isključ.","Samo crveno","Samo zeleno","Samo plavo"];
var picAdOptions	= ["smanjenje šuma","MPEG NR","RGB mode","Динамички контраст","LED jasnoća kod kretanja",
						"Fleš ton","Film modus ","modus igrice ","Temperatura boje","Баланс беле боје",
						"Zamrznuti","Црна Стреч","Skeniranje preko","Gama osvetljenje","Režim HDMI","10P balans bele boje","Produživač boje",
						"Smanjenje zamućenja","smanjenje podrhtavanja","Mesto za boje","Jasnoća kod kretanja"];
var pic10Pwhite     = ["interval","Crveno","Zeleno","Plavo","Resetovanje","Boja","Žuti","Cian","Magenta"];
var picMotionClarity = ["Kretanja načinu","Interpolacija kretanja","LED jasnoća kod kretanja","Smanjenje zamućenja","smanjenje podrhtavanja","Resetovanje"];
var picMotionMode   = ["Auto","Film","glatko","Oèisti","Sport","kupac"];
var picResetDes		= "Sva lična podešavanja će biti resetovana . Da li ste sigurni da želite da uradite izabrane akcije?";
var pic10PReset     = "Da li ste sigurni da želite da poništite 10p balans belog ?";
var picMotionReset  = "Da li želite da resetujete jasnoću kod kretanja?";
var picColorSpaceReset    = "Da li ste sigurni da želite da poništite prostor boja?";
var picOptions		= ["Unpared definisana slika",
						"Pozadinsko svetlo","Osvetljenje","Kontrast","Zasićenje","Nijansa","Oštrina","Temperatura boje","Režim ekrana","Auto format",
						"Povećanje sporta","3D","3D navigacija","ECO Settings","Geometrija",
						"Напредна подешавања","Primeni režim slike","Ponovno podešavanje slike"];
var picSize			= ["16:9 format", "4:3 format", "14 : 9 format", "Синерама",
						"Масштабирование 16:9 ", "Увеличение 16:9 ","Масштабирование 14:9 ","Масштаб. с заполнением","Масштабир. по ширине",
						"Масштаб. режим 2","Масшт. по шир. режим 2","Izvorno isparavanje zaslona ","Режим без интерполяции","Originalno","panorama"];
var others			= ["Ton","Emitovanje","Lozinka","Status","Sačuvaj","Zameni","Start","Izlaz","Pretraga","Obriši",
						"Nema","Automatski","Skeniranje","Bezbednost","Poveži","Osveži","Opet","zaustavi","Settings","Kanali",
						"Izmena","Umetni","Signala!","Kraj","Stereo","Audio","Izvor","Nema audio tona","Saveti","Resetovanje",
						"kupac","postavka ","snimi ","korisnik","bližnja tastatura","Način bezbednosti","Svakog dana","Popis PVR"];
var direction		= ["Levo","Desno","Gore","Dole"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolbi D +"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nepoznato"];
var soundChannels   = ["Nepoznato","Mono","Sub","Dualni mono","Stereo","Stereo Nizkotonac","Stereo Dolbi Surround","Surround (okruženje) 2CH","Surround (okruženje)","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dvojni mono Lfe","Stereo Lfe","Okolinski 2Ch Lfe","Okolinski Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Zajednički stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dvojni","Levo","Desno","Ostalo"];
var prompts			= ["Podesite postavku slike koja najbolje odgovara vašemu okruženju gledanja.",
						"Podešavanje osvetljenosti nivoa. Što bliže 100, svetlija je slika.",
						"Podesite nivo kontrasta. Što bliže 100, veća je razlika na slici tamno - svetlo.",
						"Podesite nivoe zasićenja. Bliže 100, jača boj .",
						"Podesite nivo oštrine. Bliže 100, jasniji su detalji.",
						"Podesite nivo osvetljenosti . Bliže 100 , svetliji ekran .",
						"Podesite nivo nijansa. Ova postavka menja tonove boja.",
						"Izaberite format slike koji najviše odgovara posmatranom programu.",
						"Konfiguriši opcije za potrošnju energije.",
						"Prilagodite geometrijsko podešavanja ekrana kod povezivanja PC uređaja.",
						"Odaberi napredna podešavanja slike.",
						"Vrati sve postavke slike na osnovne postavke.",
						"Odaberi režim zvuka koji ti najviše odgovara.",
						"Podesi balans zvuka između levog i desnog kanala.",
						"Zvučni sistem TruSurrond HD obezbeđuje bogat zvuk i jasnoću na niskim i visokim frekvencijama.",
						"Digitalni interfejs Format povezuje TV digitalni zvuk na  audio opremu domaćeg kina.",
						"Odaberi audio jezik koji vam odgovara.",
						"Omogućite ljudima s oštećenim vidom da uživaju u televizijskim programima.",
						"Testirajte TV sliku , zvuk i signal .",
						"Odaberi tip spiska kanala koji odgovara tvom TV signalu.",
						"Izaberite jezik titlova programa, koji su prikazani na dnu ekrana.",
						"Pogledajte tekst i slike na trenutnom kanalu.",
						"Digital Living Network Alliance. Uživajte u muzici, foto i videu na kućnoj mreži od drugih uređaja, kao što je PC.",
						"Prikažite sadržaj pametnog telefona na TV-u i koristite pametni telefon kao daljinski upravljač za televizor.",
						"Prikaz sadržaja sa Miracast - kompatibilnom Android uređajem na TV ekranu.",
						"Zaključaj TV.",
						"Odaberi naziv za vaš uređaj.",
						"Odaberi okruženje gledanja.",
						"Vrati sva sistemska podešavanja na osnovne postavke."];
var initialTitle	= ["Dobrodošli","Početno podešavanje"];
var initialPrompt	= ["Obavite prvi nameštaj sada, i svet uzbudljivih iskustva vas čeka!",
						"Molimo vas da izaberete svoj jezik:",
						"Odaberi svoju zemlju:",
						"Molimo izaberite Vašu lokaciju:",
						"Odaberi tip mrežnog povezivanja:",
						"Odaberi režim kablovskog mrežnog povezivanja:",
						"Veza na kkkkkkkkk nije uspela ! Povežite uređaj prema sledećem grafikonu ili izaberite Levo za resetovanje ..",
						"Povezan sa kkkkkkkkk ! Izaberite Desno , da biste nastavili .",
						"1 ) Vaš TV možda već ima ugrađen bežični interfejs\n 2 ) Ili , ako dobijete bežični USB adapter, spojite ga na televizor. Zatim izaberite način spajanja preko bežične mreže",
						"Tražim . Sačekajte ...",
						"Nema bežičnog uređaja povezanog sa TV-om!",
						"Uverite se da je sledeći PIN instaliran na pristupnoj tački pre nego što kliknete na dugme „Dalje“.",
						"Molimo pritisnite dugme na dostupnoj tački , u manje od 120 sekundi pre nego što pritisnete Desno!",
						"WPS (Wi-Fi zaštićeno podešavanje)",
						"PIN ( lični identifikacioni broj )",
						"PBC ( Konfiguracija dugmeta )",
						"Do sledećeg sadržaja može se pristupiti samo pomoću mrežne veze . Želite li preskočiti postavljanje mreže ?",
						"Postoje nove ispravke softvera za prenos, ovo može potrajati u zavisnosti od vašeg statusa mreže.",
						"Ažuriranje softvera za TV obezbeđuje da uživaš u najnovijim osobinama i uslugama.",
						"Nećete uživati najnovije funkcije i usluge. Da li želite da preskočite ažuriranje softvera ?",
						"Pritisnite desni taster za nastavak.",
						"Nemojte gasiti tokom ažuriranja, jer to može da prouzrokuje TV kvar.",
						"Ako ne želite pokrenuti ispravke, izaberite Ne .",
						"Ažuriram , molimo sačekajte",
						"Takođe možete ažurirati softver u AŽURIRANJE SISTEMA / SOFTVERA .",
						"Odabrana zemlja traži podešavanje lozinke.\nMolimo podesite kod za vaš TV i potvrdite.",
						"This code is too simple.\nPlease use different digits.",
						"Čestitamo ! Prvo postavljanje je završeno.Konfiguracija se može menjati preko glavnog menija i podmenija .",
						"Odaberi bezbednosni režim, molim",
						"Molimo izaberite način bežičnih mrežnih veza :",
						"Mreža"];
var initNetCabAndDonRe = ["Mrežni kabl nije spojen , molimo spojite mrežni kabl !","Nema ugrađenog bežičnog adaptera ili USB adapter nije prisutan ."];
var initChPrompt = ["Instaliranje TV kanala","Izaberite vrstu pretraživanja pomoću antene.","Obrada automatsko pretraživanja...","Pronađeni su sledeći antenski kanali :","Odaberi kablovsko skeniranje.","Izaberite operatera sa liste .","Konfiguriši informacije skeniranja","Nađeni su sledeći kablovski kanali:","Odaberi jednog operatora sa ponuđenog spiska","Odaberi satelit da skeniraš ili podesiš odabrani satelit","Podesi parametre satelita","Pronađeni su sledeći kanali i ponovno pretraživanje kanala može se pokrenuti pod Kanali / Traženje kanala"];
var initClockPrompt = ["Pridobite vreme pomoću mreže!",
						"Molimo postavite datum i vreme :"];
var initialOptions	= ["Okruženje","Podešavanje mreže","Softver. ažuriranje","Instaliranje kanala","Sat"];
var initialHotkeys	= ["Nazad","Odaberi","Naredno"];
var initLocations	= ["Početak","prodavnica","Kupujte sa demom"];
var initNets		= ["Kabl","Bežično","Nisam povezan sa mrežom"];
var initWireManuals	= ["IP adresa","Maska podmreže","Podraz. mrežni prolaz","Primarni DNS","Sekundarni DNS"];
var initSoftUpdates = ["Ažuriraj odmah","Ažuriraj kasnije"];
var initChannelIns	= ["Nastavi","Ne želim instalirati kanala"];
var initChScanTypes	= ["Digitalno & Analogno ","Digitalno","Analogno","Ne želim da skeniram"];
var initChDvbts		= ["Antena ATV kanala :","Antena DTV kanala :"];
var initChDvbcs		= ["Kablovski analogni kanali:","Kablovski digitalni kanali:"];
var initChDvbss		= ["Satelitski kanali:"];
var initChDvbSOther	= ["Ne želim da skeniram satelit"];
var initEndConnectedStatus= ["prekinut","Bežična mreža spojena","kablovski priključak"];
var initEndInstallations= "Instaliranih XXXX kanala";
var initEndUpdate	= ["ažurirano"];

var audioScenes 	= ["Stoni","Nosač za zid"];			
var screenSavers	= ["Trenutačno nema informacije o programu, molim vas tražite prvo kanale!",
						"Nema signala!",
						"Skremblovano",
						"Samo podaci",
						"Audio program",
						"Nema audio i video zapisa",
						"Nije dostupan",
						"Nema teleteksta",
						"Nema podataka o programu.",
						"Program je zaključan!",
						"Program je zaključan!\nPritisnite OK i unesite vaš kod.",
						"Nema detajla o programu.",
						"Program je štetan za maloletne osobe . \nPritisnite U redu i unesite svoju šifru .",
						"Kanal je zaključan!",
						"Kanal je zaključan!\nPritisnite OK i unesite vaš kod.",
						"Ulaz je zaključan!\nPritisnite OK i unesite vaš kod.",
						"Nema podrške!",
						"Ova usluga trenutno nije dostupna",
						"Ulaz zaključan!",
						"Nema naziva programa ",
						"van funkcije "
						];
var chBookingPromt	= ["Trenutni kanal ima planirano snimanje . TV će početi snimati .",
						"Pronađeno je zakazano snimanje. \nPrebaci na XXXX da snimiš",
						"Trenutni kanal ima podsetnik.",
						"Pronađen je zakazani podsetnik. \nPrebaci na XXXX"];
var timeUnit		= ["Sek","min"];
var ciPromt			= ["Mrežni podaci su se menjali . Za nadogradnju možete obaviti pregled nadogradnje .",];
var othersPromt		= ["Molimo vas, sačekajte...",];
var menuOptions		= ["Slika","Zvuk ","Kanal","Mreža","Sistem"];
var optionOptions	= ["Unpared definisana slika","Unapred definisani zvuk ","Zamrznuti","T-Link","vrem. pomeraj","PVR","Spisak zakazanog","Settings"];
var optionTLinkPromt= [["Automatska aktivacija","Auto režim mirovanja","Vodič menija"],
						["Uključeno","Mirovnje","Jačina zvuka pojačala"]];
var powerPromt		= ["TV će se uskoro ugasiti! Molim te, pritisni bilo koji tasteri da otkažeš."];
var ttxLanguage		= ["ZAPADNA EVROPA","ISTOČNA EVROPA","ruski","arapski/jevrejski","farsi","arapski ","Beyaz Rusya Dili","grčki","turski"];
var ttxOptions		= ["Otkrij","Ciklus podstrana","Jezik","strana alarma ","Njufleš"];
var weekday         = ["недеља","понедељак","уторак","среда","четвртак","петак","субота"];
var lcnConfflict	= "Program ima problem sa prijemom. Druga verzija postoji na kanalu %d ";
var inShopMode		= "Vaš TV je u načinu za kupovinu . Za kućne način , izaberite \" Sistem \" i promenite \" Položaj \" iz menija .";
var nitRefresh		= "Podaci o mreži su promenjeni. Želite li da izvršite skenersko ažuriranje?";
var picHDMIMode     = ["Auto","grafika","Video"];

var glassRemind    	= ["Molimo uparite svoje 3D naočare sa TV - om \n ( Pritisnite i držite taster za aktivaciju na 3D naočarima ) .","Vaši 3D naočare su spojene na TV",""];
var pvrRemind 		= ["Nemojte isključivati USB uređaja ili isključiti napon"];
var pvrConName   	= ["PVR","Informacije o programu :",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Snimak je sačuvan u \"pvr\" fascikli"],"zaustavi","Snimanje","sat","Minuta","Trajanje","Saveti","Podesite dužinu snimanja pomoću smjernih tastera"];
var pvrDisRemind 	= "Molim, priključite USB memoriju radi snimanja.";
var pvrRemindWords  = ["Želite li izači ?",
							"Želite li zaustaviti snimanje i pregledati snimljene datoteke ?",
							"Disk je izvučen.",
							"Nema dovoljno slobodne memorije.",
							"Nema video zapisa. Početak snimanja.",
							"LDR se ne može pokrenuti na zaš. kanalu.",
							"Funkcija nije dostupna",
							"Uspešno sačuvano",
							"Da li želite da zaustavite snimanje i promenite izvor ulaza?",
							"TV će završiti trenutnu snimku. Želite li izači?",
							"PVR snimanje treba TV signal, da funkcioniše ispravno, proverite signal ."];
var pvrChangeCh 	= ["Želite li da uključite kanal?",
							"Da li želite da zaustavite snimanje i promenite kanal?"];
var pvrChangeToPIN8	= ["Želite li promeniti izvor uređaju, koji je spojen na SCART ulaz ?",
				    		"Želite li da se zaustavi proces snimanja i menjati izvorni uređaj povezan na SCART ulaz?"];
var pvrChangeToCEC  = ["Želite li promeniti izvorni uređaj povezan na HDMI ulaz?",
				  			 "Želite li da se zaustavi proces snimanja i menjati izvorni uređaj povezan na HDMI ulaz?"];
var pvrGuideJump    = ["Želite li ući u EPG?",
							"Da li želite da zaustavite snimanje i pokrenete el. vodič?"];
var pvrMediaJump    = ["Želite li ući u medije?",
							"Da li želite da zaustavite snimanje i pokrenete Media?"];
var timeshiftExtra	= ["Zaustavite pomeranje vremena i promenite režim TV Promeni kanal?",
						"Želite li zaustaviti interval i menjati izvorni uređaj povezan na SCART ulaz?",
						"Želite li zaustaviti vremensku odlaganje ili menjati izvorni uređaj povezan na HDMI ulaz?",
						"Vr. pomeraj se ne može pokrenuti na zaš. kanalu.",
						"Želite li zaustaviti vremensku odlaganje i uneti EPG?",
						"Zaustavite pomeranje vremena i promenite režim TV na režim USB?",
						"Zaustavite pomeranje vremena I promeni ulazni izvor?",
						"Molim, priključite USB memoriju radi snimanja.",
						"Veličina diska:nije dovoljna.",
						"TV će završiti trenutnu vremensku odlaganje. Želite li izači?"];
var timeshiftStatus	= ["brzo nazad","zaustavi","reprodukcija","pauza ","brzo napred"];
var pvrPowerOffRemind= ["Spremnost za snimanje","Mirovnje","TV momentalno snima, želite li nastaviti sa snimanjem, kad je TV prijemnik u pripravnom stanju?"];
var timeshiftInitTitle= "Podešavanje diska";
var timeshiftInitReminds= ["Čarobnjak se koristi za podešavanje USB diska za pomeranje vremena. Odaberite režim podešavanja.",
						 "Za bolje performanse, preporučujemo formatiranje USB diska. To će izbrisati sve podatke.",
						 "Odaberite veličinu datoteke za pomeranje vremena.",
						 "Formatiranje",
						 "Nema dovoljno slobodne memorije.",
						 "Kreiranje datoteke pomeranja vremena",
						 "Testiranje brzine",
						 "Brzina diska je previše mala (< %f MB/sec) da bi se omogućila funkcija pomeranje vremena!",
						 "Disk je spreman za pomeranje vreme. .Ali mi preporučujemo promenu brzine diska (brzina> %f MB/sec) za bolje performanse.",
						 "Disk je spreman za pomeranje vreme. ."];
var timeshiftInitButtons= ["Formatiranje","Preskoči","Otkaži","Ok","Kraj","Izlaz"];
var timeshiftInitOther=["Brzina diska","MB / sek"];

var selectChoice	= "Jeste li sigurni?";
var chAtvStore		= "Spremi kao XXXX";
var chEpgFirstGenreUK= ["Bioskop","Vesti i informacije","ZABAVA","Sport","Dečje","Obrazovanje","Stil života","Drama"];
var homePageTitleList = ["APLIKACIJE","TV","VIDEI","Početna stranica"];
var homePageFavAndAllName  = ["Popularne aplikacije","Sve aplikacije"];
var homePageBackUp = ["E - priručnik","GuideOn"];
var homePageRemind   = ["Pune funkcije su dostupne samo kada je uspostavljena mrežna veza.","Vaš TV nema kanala. Programi su dostupni na kraju pretraživanja kanala.","Nema programa","Pretražim kanale sada?"];
var homePageHistory = ["Istorija"];
var miracastTitle = ["ViFi TV Link","TCL uređaj"];
var miracastRemind=["ViFi TV Link vam omogućava da delite ekran i zvuk vašeg uređaja, kao što su pametni telefon ili tablet na TV, bežično (tj. bez kablova) . To omogućava da vidite na TV-u , u isto vreme , šta vaš pametni telefon ili tablet pokazuje. Na primer, možete da pokrenete video na pametnom telefonu i prikažete ga istovremeno na svom televizoru, ili koristite svoj tablični računar kao kontroler za igre sa sadržajem prikazanim na velikom ekranu vašeg televizora .","WiFi TV link na TV-u je spreman. Sada možete početi da delite ekran vašeg uređaja sa TV-om.","Povezivanje . Molimo sačekajte!","Povezivanje nije uspelo!","Ne mogu povezati. Molimo proverite!"];
var homePageLittleWin = ["Settings","Medijum","popularni programi","Smart TV","EPG"];

var hbbtvStopRemind  = ["Da li želite da zaustavite reprodukciju?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Za više informacija , pritisnite OPTION";
var emptyListInfo = "Nema uređaja povezanog sa TV-om!";
var optionVideoListArray_1 = ["Unpared definisana slika", "Unapred definisani zvuk ", "Režim reprodukovanja", "Režim ekrana", "3D režim", 
							  "Prebacivanje L-D", "Dubina polja", "Titl", "zvučna traka", "Naslov", "Poglavlje", "Info"];
var optionVideoListArray_2 = ["Unpared definisana slika", "Unapred definisani zvuk ", "Režim reprodukovanja", "Režim ekrana", 
							  "Titl", "zvučna traka", "Naslov", "Poglavlje", "Info"];
var bottomTipsText = ["Repr./Pauza", "brzo nazad", "brzo napred", "Lista za reprodukovanje", "Settings"];
var picturePresetArray = ["Cтандард", "Динамички", "Prirodni", "Bioskop", "lično"];
var videoPlayModeArray = ["Ponovi sve", "Ponovi jednom", "Normalno"];
var screenModeHDArray = ["16:9", "4:3", "Синерама", "Масштабир. по ширине", "Масштаб. режим 2", "Масшт. по шир. режим 2", "Масштаб. с заполнением", "Automatski"];
var screenModeSDArray = ["16:9", "4:3", "Синерама", "Масштабирование 14:9 ", "Масштабирование 16:9 ", "Увеличение 16:9 ", "Automatski"];
var Mode3DArray = ["Isključ.", "2D-u-3D", "Jedno-uz-Drugo", "Vrh i Dno", "Preplitanje linija"];
var videoOptionListArray = ["Isključ.", "Pesma", "Titl", "Naslov", "Poglavlje"];
var subMenuTitleText = "Titl";
var langMenuTitleText = "Audio jezik";
var titleMenuTitleText = "Naslov";
var mode3DMenuTitleText = "3D režim";
var langInfoText = "Pesma";
var STOP_RESUME_INFO = "Stop-Nastavak";
var playListName = "Ime   ";
var eb_tips = "Saveti";
var ok_button = "Ok";
var eb_info = ["Greška audio dekodiranja.", "Greška dekodiranja videa.", "Audio format nije podržan.", 
			   "Video format nije podržan.", "Ne mogu da otvorim ovaj fajl.", "Reprodukcijska greška, pokušajte ponovo.",
			   "Format nije podržan.", "Ups! Sastav je prestao da radi.",
			   "Putanja datoteka ne postoji ne postoji ili je neispravan .\n Zamenite uređaj za skladištenje i pokušajte ponovo.",
			   "Nastavi reprodukciju od poslednjeg\n statusa reprodukcije?"];
var frameTitleText = "Novi uređaj";
var eb_quit_info = "Jeste li sigurni da želite izaći?";
var eb_yes = "DA";
var eb_no = "NE";
var offinfo = "Isključ.";
var naInfo = "nijedan";
var consoleInfoArray = ["brzo nazad", "brzo napred", "Repr./Pauza", "Lista za reprodukovanje"];
var cantOperateText = ["Funkcija nije podržana."];
var chapterChangeInfo = "Samo poglavlja 1 do XXXX su dostupne .";
var metaDataArray = ["Adresa/uređivanje metapodataka :", "Metapodatki poglavlja:", "Metapodatki zvuka :", "Metapodatki podnaslova :"];
var metaTitleInfo = "Naslov";
var metaChapterInfo = "Poglavlje";
var videoLoadingInfo = "Analiziranje ...";
var listLoadingInfo = "Otvaram ...";
var pgInfo = "Pravna procena :";
var fileNameText = "Ime   ";
var fileDateText = "Datum";
var fileSizeText = "Veličina";
var fileDurationText = "Trajanje";
var fileDirectorText = "Direktor ";
var fileCopyrightText = "Autorsko pravo";
var fileArtistText = "Izvođač";
var fileAlbumText = "Album";
var fileGenreText = "Žanr";
var fileYearText = "godina";
var fileGenreText = "Žanr";
var mainListArray = ["Sve", "Slika", "Video", "muzika"];
var sortArray = ["Ime   ", "Datum"];
var parserArray = ["Normalno", "rekurzivan"];
var emptyTipsInfo = "Ups. Nije pronađen podržan fajl.";
var emptyFolderInfo = "Ups. Nije pronađen podržan fajl.";
var sortName = "sortiranje po";
var parserName = "Parser";
var divx_str1 = "DivX(R) registracija";
var divx_str2 = "Odjava registracije DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Opcije nisu dostupne .";

var musicSoundPresetArray = ["Cтандард", "Bioskop", "muzika", "jasan glas", "lično"];
var musicInformationArray = ["Ime   ", "Izvođač", "Album", "Žanr:", "Godina:", "Trajanje:"];
var playListName = "Ime   ";
var playTipsInfo = ["Reproducirate prvi fajl.", "Reproducirate zadnji fajl."]
var musicNameInfo = "Name";
var musicArtistInfo = "Izvođač";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Unapred definisani zvuk ";
var optionBGMInfo = "Reprodukovanje u pozadini";
var optionAudioOnlyInfo = "Samo audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX je spojen sa TV !";
var tvRemoteTitle		= "TCL nScreen";
var tvRemoteDeveloper	= "Aplikaciju je kreirao TCL";
var tvRemoteDeviceTitle	= "Naziv uređaja:";
var remoteOption		= ["Multimedijalno deljenje","Daljinski upravljač","Pomoć","O","Pametno povezivanje"];
var remotebottom		= "Molimo preuzmite \"TV daljinski upravljač\" na vaš pametni telefon";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Delite fotografije, video i muziku na TV - u preko telefona .",
							"Koraci : \n 1. Kliknite na \"TV daljinski upravljač\" na telefonu . Povežite svoj telefon s televizorom putem iste ViFi mreže ; \n 2. Kliknite na \"Deljenje medija\" za pregledanje multimediskih fajlova , \n 3. Pošaljite medij za reprodukciju na TV - u ( sa jednim od sledećih opcija )",
							"      a) Prevucite i spustite fasciklu/datoteku na ikon TV-a na gornjem delu ekrana.\n     b) Usmerite telefon prema TV-u da pokrenete prvu datoteku.\n      c) Reprodukujte multimedijalnu datoteku na telefonu i pritisnite na ikonu za deljenje sa TV-om.",
							"   4. Dok reprodukujete na TV-u, protresite telefon da reprodukujte prethodnu ili narednu datoteku."];
var controlReminds		= ["Koristite telefon kao daljinski upravljač za TV.",
							" ",
							"Koraci : \n 1. Kliknite na \"TV daljinski upravljač\" na telefonu . Povežite svoj telefon s televizorom putem iste ViFi mreže ; \n 2. Kliknite na \"daljinski upravljač\" za kontrolu TV-a."];
var helpDeviceWords		= "Interakcija više ekrana";
var helpBottom			= "U doba \"oblak\" tehnologije, pametni uređaji, kao što su telefon TV su međusobno povezani. Podelite medije na više ekrana sa vašom porodicom i kontrolišite TV preko telefona! ";
var helpReminds			= ["Pripreme\n 1. Preuzmite i instalirajte \"TV daljinac\" iz Google Play ili Apple Store . \n 2. Povežite svoj telefon s televizorom putem iste ViFi mreže .",
							" ",
							"Preporučeni telefoni\n   1. CPU: iznad 800 MHz.\n   2. Skladištenje: najmanje 80 MB slobodnog prostora.",
							" ",
							"Odricanje\n Ako \"TV upravljač\" nije dostupan na vašem telefonu, obratite se proizvođaču telefona."];
var helpButtons			= ["Prethodno","Naredno"];
var aboutReminds		= ["TCL nScreen","Aplikaciju je kreirao TCL"];
var aboutExit			= "Izlaz";
var smartReminds		= ["Brza i pametna veza između TV-a i telefona .",
							" ",
							"Koraci \n 1. Povežite TV i pametni telefon u istoj lokalnoj mreži . Kliknite na \"TV daljinski upravljač\" na vašem pametnom telefonu \n 2. Kliknite na \" Smart Connect \" skeniranje QR kodova . \n 3. Kada je TV u načinu prenosa, pritisnite dugme INFO na daljinskom upravljaču za 4 sekunde dok ne vidite cijelozaslonski QR kod.",];
var smartQRReminds		= ["Kliknite na Connect Smart na TV daljinskom upravljaču na telefonu i skenirajte QR kod za brzo povezivanje televizora i telefona .",
							"QR kodovi sadrže podatke o računu lokalne mreže. Molimo sačuvajte ga ."];
							

var consoleTipArray = ["Prethodno","Naredno","konzola","Lista za reprodukovanje"];							
var optionInfoArray = ["Unpared definisana slika","Režim reprodukovanja","Trajanje","Efekat","Info"];

var playModeArray = ["Normalno","slučajni izbor","ponovi "];
var durationArray = ["Kratka ( 5s )", "Središnja ( 10s )", "Duga ( 15s )"];
var effectArray = ["Nema", "pretapanje ", "prelaz prema desno ", "prelaz prema levo", "prelaz prema gore ", "prelaz prema dole ", "prelaz iz centra ", "prelaz prema centru ", "Nasumice"];
var infoArray = ["Ime:","Veličina:","Daum:","Lokacija"];

var picturePresetBarTitleInfo = "Unpared definisana slika";
var picturePresetBarArray = ["Cтандард","Динамички","Bioskop","Bioskop","lično"];
var upTipsInfo = "Premeštanje slike"; //add yums 2014-10-10
var consoleTipsArray = ["konzola","Prethodno","Naredno","Lista za reprodukovanje","Settings"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Ponovo pritisnite DESNO za reprodukciju slijedeče slike","Ponovo pritisnite LEVO za reprodukciju prethodne slike","Ponovo pritisnite DOLE za prikaz liste reprodukovanje"]; //add yums 2014-10-10

var optionPvrListArray = ["Unpared definisana slika","Unapred definisani zvuk ", "Režim ekrana", "3D režim", "Titl", "zvučna traka", "Info"];							
	
var titleSpanFirstArray = ["Kontrola i veza","Osnovne funkcije","APLIKACIJE","TV","Settings","FAQ"];
var titleSpanSecondArray = [["Daljinski upravljač","tasteri ploče","Jednostavna navigacija","TV priključak","TV priključak","TV priključak","Bežično"],["uređaj za lansiranje","Statusna traka","Izvor"],["reprodukcija aplikacija","Medijum","TCL nScreen"],["Podesite kanal i jačinu","Spisak kanala","EPG","Instal. kanala","Omiljeni kanali"],["podešavanje slike","podešavanje zvuka","Podešavanje kanala","Softver. ažuriranje","Jezik","Roditeljska zaštita"],["Najčešće postavljana pitanja","Najčešće postavljana pitanja","Rešavanje problema","Rešavanje problema","Uslovi korišćenja"]];
var contentSpan1_1Array = [["SPISAK :","INFORMACIJE :","MENI :","NAPAJANJE :","IZVOR :","VODIČ :","SMART TV :"],["Prikazuje listu kanala","Prikazuje informacije o programu","Ovo je početna stranica","Uključite napajanje ili ulazi u stanje mirovanja","Izaberite ulazni izvor","Pokazuje EPG ( Electronic Program Guide) informacije","Ide na Smart TV stranicu"]];
var contentSpan1_2Array = ["Prethodni kanal","Sledeći kanal","povećanje jačine","smanjenje jačine","Ovo je početna stranica","Potvrda opcije","Stanje mirovanja / S"];
var contentSpan1_3Array = ["OK / Vodič","Kanal gore","Kanal dole","Glas dole","Glas gore","Dostupan je kao strelica u nekim funkcijama."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapter","LAN ( lokalna mreža )","pametni telefon","Personalni računar / tuner / DVD","audio pojačalo","Audio pojačalo / Monitor","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","slušalice","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB uređaji","USB uređaji","slušalice","SPC / konzola za igre / prijemnik / DVD","audio pojačalo","SPC / konzola za igre / prijemnik / DVD","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_6Array = ["Obični interfejs","SD","VGA","SCART","Mini SCART","Ulaz za antenu","PCMCIA kartica","SD kartica","PC","Prijemnik / DVD","Antena / Kabl / Satelit","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_7Array = ["таблета","PC","роутер","телефон","TV"];

var contentSpan2Array = [["Pritisnite tastere sa strelicama za pogled naslovne stranice.","Zatim pritisnite OK za gledanje jednog od opremljenog programa ili za ulazak u aplikaciju."],["Prikaz datuma, mreže i naprava, itd u gornjem desnom uglu ekrana."],["Izbor izvora ulaznog signala uređaja, spojenih na TV putem različitih priključka, kao što su TV, AV, HDMI, itd"]];

var contentSpan3Array = ["Uživajte i gledajte omiljene aplikacije kroz Smart TV stranicu","Gledajte fotografije, gledajte video zapise i svirajte glazbu sa USB uređaja za skladištenje.","Spojite TV i vaš pametni telefon ili tablet na istoj mreži","Kliknite TCL nScreen ili TV upravljač na pametnom telefonu ili tabletu","Delite fotografije, video snimke i muziku na više ekranima sa vašom porodicom i kontrolišite vaš televizor kroz svoj pametni telefon"];

var contentSpan4Array = [["Pritisnite GORE / DOLE za prebacivanje kanala","Pritisnite LEVO / DESNO za podešavanje jačine zvuka"],["Pritisnite dugme LIST na daljinskom upravljaču za kretanje kroz listu kanala","Pritisnite GORE / DOLE za odabir kanala"],["EPG je vodič na ekranu koji prikazuje televizijske programe. Kroz programe se možete kretati, odabiriti, pogledati i snimati."],["Pronalaženje i instaliranje kanala"],["Dodavanje ili uređivanje svojih omiljenih kanala na listi kanala"]];

var contentSpan5Array = ["Uživajte u svojim omiljenim programima putem video aplikacija"];

var contentSpan6Array = [["Pritisnite MENU za prikaz postavljanja opcija sistema","Ulaz na podešavanja slike za podešavanje vrednosti"],["Pritisnite MENU za prikaz postavljanja opcija sistema","Ulaz na podešavanja zvuka za konfigurisanje opcija"],["Pritisnite MENU za prikaz postavljanja opcija sistema","Ulaz na podešavanja kanala za postavljanje opcije"],["Ažuriranje TV-a kada je nova verzija softvera dostupna"],["Možete odabrati željeni jezik menija"],["Omogućuje roditeljima zaključavanje kanala ili programa koji nisu prikladni za decu"]];

var contentSpan7_1Array = [["Nema slike, nema zvuka","Proverite da li osigurač ili prekidač radi.","Priključite drugi električni uređaj u utičnicu kako bi bili sigurni da radi, ili je uključen.","Utikač u lošem kontaktu sa utičnicom","Proverite izvor signala."],["Normalna slika , nema zvuka","Pritisnite taster za jačinu zvuka prema gore za povećanje jačine.","Zvučna postavka je netačna.","Greška signala emitovanja."],["Normalni zvuk, bez slike","Podesite osvetljenje i kontrast","Greška signala emitovanja.","Proverite da li je omogučen jedino audio naćin."]];
var contentSpan7_2Array = [["radiofrekvencijske smetnje","Ta smetnja stvara pokretne talase ili dijagonalne linije, u nekim slučajevima, gubitak kontrasta na slici. Pronađite i uklonite izvor radio smetnje."],["bez boja","Prilagodite podešavanja boje.","Pokušajte drugi kanal. Crno - beli program može biti dostupan."],["Daljinski upravljač ne radi","Zamenite baterije.","Baterije nisu instalirane pravilno. TV ne može biti priključene."]];
var contentSpan7_3Array = [["Sadržaja USB uređaja nije prikazan","Proverite da li je USB uređaj za skladištenje kompatibilan sa TV - om","Proverite da su audio i video fajla podržane na TV - u"],["Reprodukovanje bez zvuka","Audio format nije podržan od strane TV plejera"],["Datoteke neće igrati glatko","Performansa prenosa USB uređaja za skladištenje može ograničiti brzinu prenosa podataka na TV-u."]];
var contentSpan7_4Array = [["Na šta treba paziti kada se ažurira softver","Bez prekida napajanja tokom ažuriranja softvera.","Izbegavajte bilo kakve operacije sa daljinskim upravljačem, kada ažurirate softver.","Budite strpljivi, jer može da proces obnove softvera potrajati malo duže."],["Nakon ažuriranja softvera, neće biti nikakvih značajnih promena na TV interfejsu.","Pod određenim uslovima, ažuriranje softvera ne znači samo dodavanjem novih funkcij , nego i poboljšanje funkcionisanja TV-a bez značajnih promena u interfejsu. Takođe, TV interfejs ponekad ostaje nepromenjen."]];
var termsTitle = "Uslovi korišćenja";
var termsConditions = ["( Pravna Izjava ) o TCL - proizvođač ovog televizora .","Zbog različitih mogućnosti proizvoda koji koriste Smart TV - usluga, kao i ograničenja u dostupnim sadržaja, određene  funkcije, aplikacije i usluge možda nisu dostupna na svim uređajima ili na svim teritorijama. Neke funkcije na Smart TV mogu takođe zahtevati dodatne periferne uređaje ili članarinu koja se prodaju odvojeno. Molimo Vas da posetite naš  sajt za više informacija o specifičnim informacijama uređaja i dostupnosti sadržaja. Usluge i dostupnost sadržaja kroz Smart TV so odvisne od promena s vremena na vreme, bez prethodne najave.\n   Sav sadržaj i usluge dostupne preko ovog uređaja pripadaju trećim licima i zaštićene su autorskim pravima, patentom, žigom i / ili drugim zakonima o intelektualnoj svojini. Takav sadržaj i usluge su namenjene isključivo za ličnu i nekomercijalnu upotrebu. Ne možete koristiti bilo koji sadržaj ili usluge na način koji nije ovlašćen od strane vlasnika ili provajdera sadržaja. Bez ograničavanja navedenog, osim ako nije izričito dozvoljeno od strane važećeg vlasnika sadržaja ili provajdera, ne možete da menjate, kopirate, objavljivate, otpremate, prenosite, prevodite, prodavate, kreirate izvedene radove, eksploatišete, ili distribuirate na bilo koji način ili bilo koji medij sadržaja ili usluge, prikazane preko ovog uređaja .\n    Izričito prihvatate i slažete se da je korišćenje uređaja na sopstveni rizik i da je ceo rizik u pogledu zadovoljavajućeg kvaliteta, performansi i preciznost na vas. Uređaj i svi SADRŽAJI i usluge su dobavljeni \ \" kao što jesu \ \" , bez bilo kakve garancije, bilo izričite ili implicitne. TCL izričito odriče sve garancije i uslove u pogledu uređaja i bilo kog sadržaja i usluga, bilo izričitih ili implicitnih, uključujući, ali ne ograničavajući se na, garancije za prodaju, zadovoljavajućeg kvaliteta, pogodnosti za određenu svrhu , tačnosti , mirnog uživanja, i ne - kršenje prava trećih lica . TCL ne garantuje tačnost, valjanost,blagovremenost, zakonitost ili potpunost bilo kojeg sadržaja ili usluge dostupne preko ovog uređaja, a ne garantuje da će  uređaj, sadržaj ili usluge zadovoljavati vaše zahteve, ili da će uređaj ili usluga raditi bez prekida i bez grešaka. Ni pod kakvim okolnostima, uključujući i nemar, neće biti odgovoran TCL, bilo po ugovoru ili deliktu, za bilo koju direktnu, indirektnu, slučajnu, posebnu ili posledičnu štetu, troškove, ili bilo koje druge štete koje proističu iz ili su u vezi sa, bilo koje informacije sadržane u, ili kao posledica korišćenja uređaja, ili bilo kog sadržaja ili usluge pristupa vas ili bilo koje treće strane, čak i ako je obaveštena o mogućnosti takve štete.\n   Usluge treće strane mogu da se promene , da se suspendiraju, da se uklone, prestanu ili su prekinute , ili pristup može biti onemogućen u bilo koje vreme, bez prethodne najave, a TCL ne daje nikakve garancije da će bilo koji sadržaj ili usluga ostati na raspolaganju za bilo koji vremenski period. Sadržaj i usluge se prenose trećim stranama putem mreža i komunikacionih sredstava nad kojima TCL nema kontrolu. Ne ograničavajući opštost ovog odricanja, TCL izričito odriče bilo kakvu odgovornost za bilo kakvu promenu, prekid, onemogućavanje, uklanjanje ili prekid bilo kog sadržaja ili usluge dostupne preko ovog uređaja. TCL može da nametne ograničenja na korišćenje ili pristup određenim uslugama ili sadržaju, u svakom slučaju, a bez prethodnog obaveštenja ili odgovornosti. TCL je nije odgovoran za korisnički servis u vezi sa sadržajem i uslugama. Svako pitanje ili zahteve koji se odnosi na sadržaj ili usluge, treba uputiti direktno na provajdera tih sadržaja i usluga .\n"];

var noChannelListRemind        = ["Kanali nisu pronađeni. Popis kanala će biti dostupan krajem pretraživanje kanala.","Skeniranje kanala "];
var closeSubtitleRemind   = "Ova funkcija će biti dostupna kada su titlovi isključeni. Želite li jih konfigurisati sada?";

var estickerTitles = ["Vrlo realne slike","Boja koja oživljava","Veliko, životno kretanje","Dinamična kvaliteta slike","SR UHD adaptacija","Doživite 3D svet","brže performanse","Budući 4k sadržaj","Uživajte u svetu na internetu","Pristup dodatnim sadržajima","Ugrađen digitalni prijemnik","Povežite sve uređaje","Različiti izvori 4K","Sadržaj USB","Ultra - brz ViFi","Mobilni sadržaj na TV ","Sadržaj mobilnog uređaja","lokalni sadržaj","Odobreno s strani DivX","besprekorna slika","Spremnost za kanale","TDT Premium"];
var estickerDescriptions = ["Neverovatno iskustvo gledanja zahvaljujući sliki sa četiri puta više detalja punog HD ekrana na UHD","Širok spektar boja omogućava emocije u svakoj sceni sa živim bojama crvene i smaragdno zelene","4K okvirna interpolacija i svetlost u pozadini, pazeći da se eliminiše zamućenje u pokretu","Vedrina izvorne slike je poboljšana za istinski dinamične izraze sa izvrsnim kontrastom","Uživajte jasne i precizne TV emisije i Blu-ray diskove , zahvaljujući Super Resolution tehnologiji","Iskusite 3D TV spremnost i pogledajte razne 3D sadržaje","Više prijatno iskustvo zabave sa procesorom sa četiri jedra za glatke interakcije, bolje performanse","HEVC ( H.265 ) kodek podrška za nadolazeće standardne 4K video distribucije","Bogatstvo internetnih aplikacija , video na zahtev , gledajte istorijske sadržaje i pregledajte internet","Vidite više komplementarnih usluga i sadržaja iz vaše omiljene emisije","Pristupajte TV kanalima u visokoj rezoluciji bez dodatnog prijemnika","Jednostavno povezivanje mnogih digitalnih resursa, koji su dostupni kod kuće","TV je spreman za buduće reprodukovanje 4K 50 / 60Hz putem HDMI 2.0 s HDCP 2.2","Video i foto sadržaji direktno sa USB flash diska, hard diska ili kamere na velikom ekranu u rezoluciji 4K","Najnovija generacija 2×2 MIMO i AC standard obezbeđuje pristup internetu neuporedive brzine","Uživajte u fotografijama, videu, aplikacija sa mobilnih uređaja na velikom ekranu , zahvaljujući tehnologiji zrcaljenja ekrana","Fotografije, videji, aplikacije sa vašeg pametnog telefona ili tableta mogu se prikazati na velikom ekranu","Prikaz lokalnog sadržaja na velikom ekranu, kao što su fotografije, videji iz uređaja spojenih na lokalnu mrežu","Reproducirajte iznajmljene ili vlastite filmove, koji su zaštićeni sa strane DivX","Ultra uzak i veoma tanak dizajn","Ispitan i odobren od strane Canal +","Ispitan i odobren od strane TDT Premium"];							

var eManualTextArray = ["E - priručnik","Sve grafika unutra su samo za zastupanje."];
var frontPanelRemind = "pred. ploča je zaklj.";
var eRPRemind		 = "Šop režim ne ispunjava  ERP zahtev. Jeste li sigurni?";	
var noRelatedChannel = "Nema povezanih kanala";
var option0624Name          = ["BOP","BFS","Događaj po događaj","GetUserID","BGM","Reset all","Reset shop","NRM","DVB-T2 i selekcija zemlja","HbbTV režim"];
var DVBT2AndChoice = ["Uključ.","Po zemlji","Isključ."];
var hbbtvServiceRemind = "Usluga HbbTV stiže uskoro.";
var insertWord = "Umetni";		
var viewDetail = "Prikaz detalja";							

var remindOAD  = "Ažuriranje softvera. Novi preporučeni ažurirani softver možda posotji na drugom kanalu. Ako prihvatite preuzimanje, može automatski promeniti kanal. Žellte da to uradite odmah?";

var LEDStatus = ["Treperenje", "Normalno"];
var netFlixRemind = "Ova funkcija će prekinuti pristup Netflix uslugama dok se ponovo ne prijavite.";
var ESNExplanation = "Elektronski serijski broj";
var resetShopRemind = "Sistem se trenutno resetuje. Molimo nemojte isključivati TV";
var initialSelectOption = "Molimo odaberite jednu opciju:";
var databaseRemind   = "Sistem prepoznaje ovu banku podataka kao oštećenu iz nepoznatih razloga i automatski je popravlja. Pritisnite OK da nastavite";
var Deactivation = "Deaktivacija";
var oadFutureRemind = "Ažuriranje softvera. Novi preporučeni softver će biti dostupan za %s. Ažuriranje može potrajati i možda će se ekran zacrneti. Nemojte gasiti prijemnik tokom ažuriranja. Ako prihvatite ovo ažuriranje, molimo da ostavite prijemnik uključenim ili u režimu mirovanja u zakazano vreme. Da li želite da primite ovo ažuriranje?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Izlaz zvuka";
var bt_soundOutPutTV = "TV zvučnici";
var bt_soundOutPutBT = "Bluetooth uređaj";
var bt_soundOutPutBT_TV = "Bluetooth i TV";
var bt_refreshBarName = "Uređaji";
var bt_settingTips_On = "Uklopi Bluetooth funkciju i pretraži uređaje.";
var bt_settingTips_Finding = "Tražim uređaje, koji su na raspolaganju…";
var bt_settingTips_NoDevice = "Nema uređaja na raspolaganju.";
var bt_deviceList_State_NoConnect = "Nije priključeno";
var bt_deviceList_State_Connecting = "Povezujem…";
var bt_deviceList_State_Connected = "Povezano";
var bt_deviceList_State_Paired = "Upareno";
var bt_deviceList_Conncect_Failed_Tips1 = "Veza nije uspostavljena.";
var bt_deviceList_Conncect_Failed_Tips2 = "Molimo potvrdite, da je XXX Bluetooth funkcija uključena";
var bt_deviceList_Conncect_Success = "Priključen na Bluetooth uređaj.";
var bt_deviceList_Disconncect_Success = "Prekinut od Bluetooth uređaja.";
var bt_deviceList_Disconnect = "Da li ste sigurni, da želite prekinuti vezu sa XXX?";
var bt_tipsTitle = "Savet";
var bt_bluetooth_Pairing_Title = "Bluetooth parenje";
var bt_bluetooth_Input_Pin = "Molimo unesite PIN:";
var bt_bluetooth_Output_Pin_Tip = "Unesite PIN XXXX pomoću tastature.";
var bt_bluetooth_Pin_Wrong_Tip = "Pogrešan PIN.";
var bt_bluetooth_Remove_Pair_Title = "Upit";
var bt_bluetooth_Remove_Pair_Ask = "Zaboravim ovaj uređaj?";
var bt_bluetooth_module_error = "Блуетоотх модул грешке!";

var netflixDialogOptions = ["OK","Kasnije","Ne prikazuj ovo ponovo"];
var netflixDialogContent = "Na Netflix-u vas čekaju hiljade filmova. Idemo tamo?";
var netflixRemoteDialogContent = "Možete da kupite daljinski upravljač sa tasterom za Netflix. Na sledećem veb-sajtu ćete naći još informacija.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Trenutni izvor","Svi izvori"];
var audioDescriptionName = ["Audio opis","Zvučnik","Jačina zvuka iz zvučnika","Slušalice","Jačina zvuka iz slušalica","AD Jačina zvuka","BT uređaj","Jačina zvuka BT uređaja"];
var audioDescriptionOptions = ["Isključ.","Normalno","Audio opis"];							
var volumeOffRemind = 'Podesite XXX na „On“ (Uključ.) u meniju Podešavanja.';
var switchSourceRemind   = " Umetnuto. Želite li sada da promenite?";							
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sportski režim";
var resetStadium = "Stadion";
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Izlaz","0","uvećaj+",
                       	   "Izlaz",
                       	   "spisak","0","Tekst","Vodič","Uđi","Izlaz","Meni","Titl","Info.",
                       	   "Stop",
                       	   "Info.","Meni","Izlaz"
                       	   ];
var nscreenTips = "GuideOn pomaže korisnicima navigaciju kroz obilan sadržaj.";
var nscreenContent = 'Koraci: 1. Kliknite "TCL nScreen" na telefonu.  Povežite telefon sa TV-om preko istog LAN-a; 2. Kliknite "GuideOn" da uđete u GuideOn; 3.GuideOn ima sličnu funkcionalnost sa štampanim vodičem za program tako što obaveštava korisnike koji TV sadržaj je dostupan;';
var singalBrokenoffTips = "Signal je prekinut. Sistem ne može da dovrši preuzimanje.";
var contentSpan1_1Array_AU =  [["NAPAJANJE:","IZVOR:","MENI:","BACK:","INFORMACIJE:","HOME:","EXIT:","SPISAK:"],
                               ["Turns power on or standby mode","Select the input source",
                                   "Show TV settings menu","Go back to the Previous menu or exit a running APP","Prikazuje informacije o programu",
                             "Ovo je početna stranica","Go back to the Previous menu or exit a running APP","Prikazuje listu kanala"]];
var guideDescriptionWords ="Skenirajte QR kod da preuzmete GuideOn aplikaciju na telefon";
var settingNoticeSourceName ="Autom. Biranje izvora";
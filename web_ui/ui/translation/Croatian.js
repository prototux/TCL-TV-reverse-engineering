
var all_country 	= ["Australija","Austrija","Belgija","Bugarska","Hrvatska","Republika Češka","Danska","Finska","Francuska","Njemačka",
						"Grčka","Mađarska","Italija","Luksemburg","Nizozemska","Norveška","Poljska","Portugal","Rumunjska","Rusija",
						"Srbija","Slovenija","Španjolska","Švedska","Švicarska","Ujedinjeno Kraljevstvo","Novi Zeland"," "/*Arab*/,"Estonija"," "/*Hebrew*/,
						"Latvija","Slovačka","Turska","Irska","*","Filipini","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Kina","*","*","*","*","*","*","Ostalo","Litva"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litva"];						
				
var all_language 	= ["Češki","*","Danski","*","*","Njemački","Engleski","Španjolski","Grčki","Francuski",
						"Hrvatski","*","Talijanski","Mađarski","Nizozemski","Norveški","Poljski","Portugalski","Ruski","Rumunjski",
						"Slovenski","Srpski","Finski","Švedski","Bugarski","Slovački","*","*","Galski","*",
						"Velški","Arapski","Ír","Letonski","*","Turski","Estonijski","Nizozemski"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Originalni audio"/*Qaa*/,"Neodređeno"/*Undetermined*/,"*","Nepoznat",
						"Neodređeno","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskijski","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Belorusz","*","*","Katalonski","*","*",
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
						"*","*","*","*","*","Romantika","*","*","*","*",
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
var offOn			= ["Isklj.","Uklj."];
var okCancel		= ["U redu","Odustani"];
var yesNo			= ["DA","NE"];
var level			= ["Isklj.","Nisko","Visoko","Srednja"];
var manualAuto		= ["Ručno","Auto"];
var homeShop		= ["Poč.str.","Trgovina"];
var picPreset		= ["Standard","Dynamic","Prirodni ","Film","Digitalno kino","Osobni"];
var picColorTemp	= ["Hladno","Normalno","Topla","Topla2","Korisnik"];
var pic3dNavig		= ["Ručno","Auto","Poluautomatsko"];
var _3dOptions		= ["3D režim","3D na 2D","Sklopka L-D","Dubina polja"];
var pic3DMode       = ["Isklj.","2D na 3D","Jedno pored drugog","Gornje i donji dio","Preplitanje linije"];
var picEcoOptions	= ["Štedni način rada","Senzor svjetla","Lokalno zatamnjivanje","Miksanje prigušenja osvjetljenja"];
var picGeoOptions	= ["Geometrija","H.položaj","V.položaj","Sat","Faza"];//Geometry 无翻译
var picAdWhiteBal	= ["C poj.","Z poj.","P poj.","C poravnanje","Z poravnanje","P poravnanje"];
var souOptions		= ["Postavke zvuka","Balans","Zvučna odgoda","SRS TSHD","Automatska glasnoća",
						"SPDIF vrsta","SPDIF odgoda","Postavljanje TV-a ","Zvučni jezik","Vrsta zvuka",
						"Opis zvuka","Digitalni audio izlaz","Profesionalna postavka Dolby"];
var soundOutputoptions =["TV zvučnik DAP izlaz","Vanjski AVR enkodirani izlaz"];
var inteligenteqoptions 	=["Fokusirano","Obogaćeno"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Isklj."];
var colorSpace      = ["Auto","Izvorno","Korisnik","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Virtualizator ozvučenja","Pojačivač dijaloga","Pojačivač basa","Pametna kontrola jačine","Pametno upravljanje medijima","Grafički ekvalizator","Inteligentni EQ"];
var chOptions		= ["Skeniranje kanala","Popis kanala","EPG","Organizator","Dijagnostika kanala",
						"vremenski pomak","Prijevod","Teletekst","Vrsta popisa kanala"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Jačina signala","Kvaliteta signala","Frekvencija (KHz)","ID servisa","ID mreže","Ime mreže"];
var chScanOptions	= ["Zemlja","Tjunerski režim","Auto pretraga","Ažur. pret.","Ana. ruč. pretraž.",
						["Ručno skeniranje kabl.","Ručno skeniranje antene","Ručno podešavanje satelita"],"Ugradnja antene ","Izbor omiljene mreže","Brisanje popisa kanala",];
var favNetDes		= "Odaberite svoju ​​omiljenu mrežu ";
var tuner			= ["Kabel","Antena","Satelit"];//Satelite 无翻译
var passError		= "Neispravna lozinka.\nUpišite opet, molim!";
var chType			= ["Analogni kanali: ","Digitalni kanali: "];
var chScanStatus	= ["Status: Skeniranje","Status: Pretraživanje je dovršeno","Status: Prekini pretraživanje","Status: Greška pretraživanja"];
var chScanPara		= ["Frekvencija (KHz)","Podešavanje","Simbol (Ksym/s)","ID mreže","Sustav",
						"Fino podešavanja","Jačina signala","Kvaliteta signala","Modus skeniranja","Identifikacija kanala "];
var chScanParaMHZ      = ["Frekvencija (MHz)"];
var chAtvManSys		= ["ZAPAD EUR","ISTOK EUR","UK","Francuska"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Želite li obrisati listu kanala?";
var chDeletDes		= "Želite li izbrisati kanal?";
var chOperator		= ["Ziggo","UPC","Ostalo"];
var chScanType		= ["Digitalni & Analogni","Digitalni","Analogni"];
var chScanMode		= ["Puno","Dalje","Brzo"];
var bookingModes	= ["Snimanje","Podsjetnik"];
var dayName			= ["Ned","pon","uto","sri","čet","pet","sub"];
var monthName		= ["Sij", "Vlj","Ožu","Tra","Svibanj","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"];
var filter			= ["Filtro","Vrsta","Podvrsta"];
var chEpgFirstGenre	= ["Film","Novosti","Zabava ","Sport","Dječije","Glazba","Umjetnost","Društveni","Edukacija","Odmor","Posebni"];
var chEpgSecondGenre= [["Drama","Detektivski","Avantura","Znanstvena fantastika","Komedija","Sapunice","Romantika","Ozbiljni","Film za odrasle"," "," "," "],
						["Aktualnosti","Vremenska prognoza","Novosti","Dokumentarni","Rasprave"," "," "," "," "," "," "," "],
						["Zabava ","Zabavne igre","Različite zabavne igre","Govorne emisije"," "," "," "," "," "," "," "," "],
						["Sport","Posebni događaji","Sportske novosti","Nogomet","Tenis",
							"Kolektivni sportovi","Atletika","Motoristika","Vodeni sportovi","Zimski sportovi",
							"Jahanje","Borilački sportovi"],
						["Dječije","Predškolska djeca","Zabava za dob od 6 do 14 godina","Zabava za dob od 10 do 16 godina","Informativni","Crtani filmovi"," "," "," "," "," "," "," "],
						["Glazba","Rock","Ozbiljni","Narodna","Jazz","Mjuzikl","Balet"," "," "," "," "," "],
						["Umjetnost","Izvođačka umjetnost","Lijepa umjetnost","Religija","Popularna kultura",
							"Literatura","Film","Eksperimentalni","Emitiranje","Novi mediji",
							"Umjetnički časopis","Moda"],
						["Društveni","Novosti","Ekonomija","Poznati ljudi"," "," "," "," "," "," "," "," "],
						["Edukacija","Priroda","Tehnologija","Medicina","Strane zemlje","Društvene znanosti","Dalje obrazovanje","Jezici"," "," "," "," "],
						["Hobiji za opuštanje","Turizam","Rukotvorine","Motociklizam","Vježba i zdravlje","Kuhanje","Oglasi","Vrtlarstvo"," "," "," "," "],
						["Izvorni jezik.","Crno i bijelo","Neobjavljeno","Emisija uživo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Presk. kanal","Sortiranje kanala","Uredi kanal","Brisanje kanala","Канал своп","канала убаци"];
var chEditPara 		= ["Ime mreže","Broj kanala","Naziv kanala","Frekvencija","Sustav boje","Sustav zvuka"];
var chSatTitles		= ["Vrsta satelita","Ugradnja antene ","Odaberite satelit"];
var chSatEidtOptions= ["Ime satelita","Položaj","LNB Snaga","LNB Frekvencija (MHz) ","Diseqc ulaz",
						"Ton 22 KHz","ton praska","Frekvencija (KHz)","Simbol (Ksym/s)","Polarizacija",
						"Jačina signala","Kvaliteta signala","Status satelita"];
var chSatAutoPromt	= [["Sve","Mreža"],
						["Sve","Besplatno"]];
var chSatAutoScanOptions=["Odaberite satelit","Modus skeniranja","Kanali"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzalno",];
var chSatDiSEqCInput= ["Deaktiviraj","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Uklj.","Isklj."];
var chSatToneBurst	= ["Deaktiviraj","ton praska A","ton praska B"];
var chSatPolarization= ["Horizontalno","Vertikalno"];
var chSatSetupOptions=["Vrsta antene","Podešavač","Frekvencija opsega"];
var chSatAntennaType= ["Jedan kabel","Univerzalno"];
var chSatUserBands	= ["Korisnički opseg 1","Korisnički opseg 2","Korisnički opseg 3","Korisnički opseg 4","Korisnički opseg 5","Korisnički opseg 6","Korisnički opseg 7","Korisnički opseg 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Korisnički definirano "];
var pleaseSelectSat = "Najprije odaberite satelite! ";
var subOptions		= ["Prijevod","Jezik digitaln. prijevoda","Jezik digitaln. prijevoda 2","Vrsta prijev."];
var ttxOptionsCon      = ["Jezik dekod. stranice","Jezik digital. teleteksta"];
var subType			= ["Normalno","Slabočujne osobe"];
var netIntf     	= ["Ethernet ","Bežični"];
var netConnDes		= ["TV provjerava mrežnu vezu. \nMolimo pričekajte",
						"Test mrežne veze je uspješan!",
						"Test mrežne veze neuspješan."];
var netSsidError	= "Trenutna duljina naziva SSID između 1-32 znakova. Provjerite naziv SSID. ";
var netOthers		= ["Šifra PIN"];
var netWlessAutoDes	= ["Molimo, pobrinite se da je ovaj PIN kôd instaliran u pristupnu točku prije nego što kliknete U redu.",
						"Molimo, pritisnite gumb na pristupnoj točki unutar 120 sekundi prije nego što kliknete U redu."];
var netConnRemind	= ["Netočna lozinka!",
						"Povezivanje. Pričekajte!",
						"Povezivanje je uspjelo i IP je pribavljen!",
						"Veza nije uspjela",
						"TV pretražuje PTe\nPričekajte malo",
						"Nema priključenoga bežičnog uređaja na TV!"];
var netWireIpOptions= ["Postavke IP-a","Vrsta adrese","IP adresa","Maska podmreže","Zadani pristupnik","Primarni DNS","Sekundarni DNS"];
var netWireConnRemind= ["Molimo, upišite vrijednost između 0 i 255.",
						"Uspješno povezani! ",
						"Unesite valjanu adresu ",
						"Uspješno povezani! ",
						"Povezivanje nije uspjelo!",
						"Povezivanje. Pričekajte!",
						"Unesite vrijednost između 1 i 223. "];
var netFlixOptions	= ["Deaktiviraj","ESN"];
var netFlixDes	 	= ["Jeste li sigurni da želite deaktivirati?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Ažuriranje softvera";
var netUpdateDialogTitle = "Ažuriranje softvera ";
var netBGDownloadTitle 	= "Preuzimanje";
var netUpdateLoadingPrompt= ["Tražim nadogradnje, pričekajte! ",
							"Preuzimanje softvera ... Pričekajte! ",
							"NE isključujte TV prijemnik tijekom ažuriranja softvera!",
                            "Potreban softver automatski preuzet u pozadini! "];
var netUpdatePrompt= ["Čestitamo, imate najnoviju verziju softvera!",
						"Pronađena je nova verzija softvera XXXX. Želite li preuzeti sada? Ovo može potrajati ovisno o statusu vaše mreže.",
						"Neuspjela prijava!",
						"Prijenos podataka nije uspio, molimo pokušajte kasnije! ",
						"Parsiranje ažuriranja XML nije  uspjelo!",
						"Veza nije uspjela",
						"Preuzimanje softvera uspješno. Želite li započeti instalaciju?",
						"Izgubljeni podaci! Neuspjelo preuzimanje!",
						"Neuspjela provjera paketa, pokušajte opet!",
						"Mreža nije u redu. Provjerite i opet se povežite…",
						"Ažuriranje nije uspjelo. Iznova pokrenite TV!",
						"Datoteka za nadogradnju slučajno je obrisana. Molimo, ponovite postupak nadogradnje putem mreže.",
						"Softver je uspješno preuzet u pozadini. Želite li pokrenuti postupak nadogradnje?"];
var netUpdateButtonText = ["Preuzmi", "Ažuriraj", "Kasnije", "Nikada", "U redu","Nastavi"];
var autoDetectPrompt = ["Pronađena je nova verzija softvera XXXX. Želite li preuzeti sada? Ovo može potrajati ovisno o statusu vaše mreže.",
						"Pronađena je nova verzija softvera XXXX. Želite li ažurirati sada?",
						"Postupak nadogradnje putem mreže je prekinut prošli put. Ponovite postupak nadogradnje.",
                        "Prijenos nove verzije programa XXXX je dovršen. Želite li nastaviti sada? ",
                        "Softver je skinuti, da li želite ažurirati sada? "];
var sysOptions		= ["E-priručnik","Jezik izbornika","Pod. Tajm.","Zaključaj","Imput postavke",
						"Ažuriranje softvera","Položaj","HbbTV način rada","Kolačići","Zajedn. sučelje",
						"Napredne postavke","Ponovo postavi izbor","LED indikator"];
var sysResetDes		= "Jeste sigur.?";
var sysMenuLangOptions=["Jezik","Željeni jezik zvuka","Preferirani drugi audio jezik "];
var sysTimerOptions	= ["Vremenska zona","Naziv regije","Sat","Tajm. miro.","Automatsko mirovanje", "Country region"];

var sysTimeZone		= ["Kao odašiljač","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Isklj.","10 minuta","20 minuta","30 minuta","40 minuta","50 minuta","60 minuta","90 minuta","120 minuta"];
var sysStandby		= ["Isklj.","4 sata","6 sata","8 sata"];
var sysRegionName	= ["Madrid ","Kanari"];
var sysClockOptions	= ["Autosinkronizacija","Datum","Vrijeme","Uklj. tajmera","Pod. Tajm.",
						"Uključi kanal","Isklj. tajmera","Pod. Tajm."];
var sysTimer		= ["Isklj.","Svakodnevno","Jednom"];

var sysInputSet		= ["Bez oznake","DVD","Blu-ray","HDD","DVDR",
						"HD rec.","Igra","VCR","PC","Digitalni STB",
						"HD dig STB","Kamera","Snimač","Drugo"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-video"];
var sysUpdate		= ["USB","Přes mreže","Po kanalu"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Ne može pronaći novi softver!",
						"Pronađena je nova verzija softvera XXXX. Želite li ažurirati sada?",
						"Molimo umetnite memorijski privjesak USB.",
						"Neuspjela provjera paketa, pokušajte opet!",
						"NEMOJTE vaditi USB ključ niti isključivati TV prijemnik za vrijeme ažuriranja firmvera!",
						"Softver je uspješno ažuriran. \nTV će automatski ponovno pokrenuti! ",
						"Pronađena je nova verzija softvera XXXX. Želite li preuzeti sada? Ovo može potrajati ovisno o statusu vaše mreže.",
						"Preuzimanje",
						"Preuzimanje softvera uspješno. Želite li započeti instalaciju?",
						"Ažur. neuspj.!",
						"Pregledav. datoteka za nadogradnju",
						"Softver je uspješno ažuriran.\nSada ponovo pokrenite TV."];
var sysProductInfo	= ["Trenutačna verzija","Naziv proizvoda","Naziv proizvođača","Naziv kućišta"];
var sysCiDes		= ["Nema CI kartice."];
var sysAdOptions	= ["Registracija DivX(R)","Deregistracija za DivX(R)","T-Link","Authorization Error","Potvrda o odjavi",
						"Potvrda o najmu","Najam je istekao","ID deklaracija Bluetooth"];
var sysRegistDes	= ["Za prikaz zaštićenih DivX zapisa morate registrirati uređaj.",
						"Registracijski kod:",
						"Registrirajte na http://vod.divx.com"];
var sysDregistDes	= ["Kod za deregistraciju:",
						"Deregistrirajte se na http://vod.divx.com",
						"Nastaviti s registracijom?"];
var mediaAuthorization = ["Vaš uređaj nije autoriziran za reprodukciju ovog DivX(R) zaštićenog videozapisa."];
var deregistrationConfrimation = ["Vaš je uređaj već registriran.","Jeste li sigurni da se želite deregistrirati?"];
var rentalConfirmation = "DivX(R) najam iskoristio je XXXX od YYYY prikaza. Nastaviti?";
var rentalExpired 	= "DivX (R) iznajmljivanje je korišteno XXXX  puta od YYYY pogleda.. DivX najam je istekao. ";
						
						
var sysLockOptions	= ["Blok. kanal","Blokada vremenskog intervala","Blok. progr.","Zaklj. ulaz","Zaključavanje prednje ploče","Instalacija zaključavanja",
						"Promij. lozinku","Maks. Volumen","Obriši sve"];
var sysTimeIntervals= ["Vrsta blokade","Početno vrijeme","Završno vrijeme"];
var sysRatingOptions= ["Nema","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Cenzurirano (Španjolska) "];
var changePass		= ["Promij. lozinku","Nova lozinka","Potvrdi lozinku"];
var changePassDes	= ["Neispravna lozinka.\nUpišite opet, molim!",
						"Lozinka se ne podudara.\nUpišite je opet, molim!",
						"Lozinka uspješno postavljena!",
						"Ovaj kod je prejednostavan za lozinku.\nUpišite ponovno neki drugi!"];
var sysPowerOnChOptions= "Odaberi režim";
var sysPowerOnCh	= ["Posljednje stanje","Izbor korisnika"];
var netWlessSecu    = ["Otvoreno","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nema","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Nema podrške"];
var netWlessSecu3	= ["Nema","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nema podrške"];
var netOptions		= ["Internetska veza","Sučelje","Bežične postavke","IP postavke","Informacije",
						"Provjera veze","DLNA","Dalj. upr. TV-a","Netflix postavke","WiFi TV veza ",
						"Vrsta adrese","IP adresa","Maska podmreže","Zadani pristupnik","Primarni DNS",
						"Sekundarni DNS","SSID","BSSID","Molimo, unesite SSID:","Upute za identifikaciju "];
var chEditDes		= ["Duplicirani broj kanala!","Pritisnite crvenu gumb za brisanje trenutnog znaka!","Neispravni brojevi kanala."];
var chEpgNoProgram	= "Nema informacije o programu, molimo najprije pretražite programe!";
var chEpgWords		= ["Programski vodič","Nema podataka o programu.","Zaključan kanal!","Nema pojedinosti o programu.","Nema naziva programa."];
var chEpgBooking	= ["Распоред инфо", "Broj kanala","Datum početka","Početno vrijeme","Završno vrijeme",
						"Tip ponavljanja","Tip programiranog snimanja","Dodaj","Zamijeni","Promijeni",
						"Dodaj/izmijeni"];
var epgHotKey		= ["Prethodni dan","Sljedeći dan","Filtro","Raspored","Dodaj raspored"];
var chEpgBookRemind	= ["Netočno vrijeme početka","Netočno vrijeme završetka","Duplicirani raspored","Uspješno spremljeno.","Uspješno izbrisani. "];
var chSchePara		= ["Raspored","Početno vrijeme","Datum početka","Naziv programa","Naziv kanala",
						"Trajanje","Ponoviti","Raspored","Uredi","Izbriši"];
var dateTimer		= ["Jednom","Svakodnevno","Tjedno"];
var scheduleDeleteReminds="Želite li izbrisati ovaj raspored?";
var scheduleNoLists	= "Nema popisa rasporeda, Pritisnite „Crveno” kako biste dodali jedan.";
var chListWords		= ["Popis kanala","Odaberi popis","Tjunerski režim","Dodaj u favorite","Ukloniti",
						"Odaberi listu kanala","Odaberi način rada tjunera","Zamjena"];
var chListType		= ["Sve","Digitalni","Analogni","Radio","Besplatno","Favoriti"];
var chAutoScanOptions=["Odaberite operatera","Kanal tipa","Auto pretraga"];
var souSoundType	= ["Nevažeće","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dvojni1","Dvojni2","Dvojni2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Glazba","Film","Jasan glas","Standard","Osobni"];
var picAdRgbMode	= ["Isklj.","Samo crveno","Samo zeleno","Samo plavo"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamic Contrast","Jasnoća LED pokreta",
						"Nijansa tena","Film mod ","Mod/Postavka igre","Temperatura boje","White Balance",
						"Zamrzni","Crno Stretch","Veća slika","Gama","HDMI mod","10P Balans bijele boje","Ekstender boja",
						"Smanjenje zamućenja","Smanjenje vibracija ","Bojni prostor","Pojašnjenje kretanja "];
var pic10Pwhite     = ["interval ","Crvena","Zelena","Plava","Ponovno postavi","Boje","žuti ","cijan ","magenta"];
var picMotionClarity = ["Način pokreta","interpolacija pokreta ","Jasnoća LED pokreta","Smanjenje zamućenja","Smanjenje vibracija ","Ponovno postavi"];
var picMotionMode   = ["Auto","Film","glatko ","Obriši","Sport","kupac "];
var picResetDes		= "Sve osobne postavke će se vratiti. Jeste li sigurni da žeite izvesti odabranu akciju? ";
var pic10PReset     = "Jeste li sigurni da želite poništiti 10p blans bijele boje? ";
var picMotionReset  = "Želite li poništiti jasnoću pokreta? ";
var picColorSpaceReset    = "Jeste li sigurni da želite resetirati bojni prostor? ";
var picOptions		= ["Postavljanje slike",
						"Pozadinsko svjetlo","Svjetlina","Kontrast","Zasićenje","NIJANSA","Oštrina","Temperatura boje","Mod ekrana","Automatski oblik",
						"Sportsko poboljšanje","3D","3D navigacija","ECO Settings","Geometrija",
						"Napredne postavke","Primijenite način slike","Resetiranje slike"];
var picSize			= ["16:09", "Format 4:3 ", "format 14 : 9", "Синерама",
						"Увеличение16:9", "Увеличение над16:9","Увеличение 14:9 ","Увеличение с разпъване на образа","Широкоъгълно увеличение",
						"Увеличение 2","Широкоъгълно увеличение 2","Izvorno isparavanje zaslona ","Точка по точка","Originalno","panorama "];
var others			= ["Volumen","Prijenos","Lozinka","Status","Spremi","Zamijeni","Početak","Izlaz","Traženje","Izbriši",
						"Nema","Automatski","Pretraži","Sigurnost","Poveži se","Osvježi","Ponoviti","Zaustaviti","Settings","Kanali",
						"Uredi","Umetni","Signala!","Završi","Stereo","Audio","Izvor","Nema zvuka","Savjeti","Ponovno postavi",
						"kupac ","Podešavanje","Memoriraj","korisnik ","Bližnja tipkovnica ","Način sigurnosti ","Svaki dan","Popis PVR "];
var direction		= ["Lijevo","Desno","Gore","Dolje"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D + "/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nepoznat"];
var soundChannels   = ["Nepoznat","Mono","Pod","Dvojni mono","Stereo","Stereo niskotonac","Stereo Dolby Surround","Prostorni 2CH","Prostorni","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dvojni mono Lfe","Stereo Lfe","Okolinski 2Ch Lfe","Okolinski Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Zajednički stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dvojni","Lijevo","Desno","Ostalo"];
var prompts			= ["Podesite postavku slike koja najbolje odgovara Vašem okruženju gledanja.",
						"Podesite razinu svjetline. Razina svjetlina povećava se približavanjem broju 100. ",
						"Podesite razine kontrasta. Razina kontrasta između tamnih i svijetlih dijelova slike povećava se približavanjem broju 100.",
						"Podesite razinu zasićenosti. Razina zasićenosti povećava se približavanjem broju 100.",
						"Podesite razinu oštrine. Razina oštrine povećava se približavanjem broju 100.",
						"Podešavanje razine pozadinskog osvjetljenja. Razina pozadinskog osvjetljenja povećava se približavanjem broju 100.",
						"Podesite razinu nijansi. Ova postavka mijenja tonove boja.",
						"Odaberite format slike koja najbolje odgovara program koji trenutno gledate.",
						"Konfiguriraj opcije za uštedu energije.",
						"Podesite postavku geometrije zaslona prilikom priključivanja na uređaj PC.",
						"Odaberite više naprednih postavki slike.",
						"Vrati sve postavke slike na zadane.",
						"Odaberite način zvuka da odgovara vašoj osobnoj postavci.",
						"Prilagodite glasnoću između lijevog i desnog kanala.",
						"Sustav zvuka TruSurround HD pruža bogati zvuk i jasnoću pri niskim i visokim tonovima.",
						"Upotrijebite oblik digitalnog sučelja prilikom povezivanja digitalnog izlaza televizora na audio sustav kućnog kina.",
						"Odaberite audio jezik da odgovara vašoj osobnoj postavci.",
						"Omogućite funkciju slabovidnosti kako biste uživali u televizijskim programima.",
						"Testirajte TV sliku, zvuk i signal. ",
						"Odaberite vrstu liste kanala da odgovara vašem TV signalu.",
						"Odaberite jezik titlova koji se prikazuju na dnu zaslona.",
						"Prikaži trenutni tekst i slike kanala.",
						"Digital Living Network Alliance (standard DLNA). Uživajte slušanju glazbe, gledanju fotografija i videoisječaka putem kućne mreže s drugim uređajima, poput računala.",
						"Prikažite sadržaje sa svojeg pametnog telefona na televizoru i upotrijebite pametni telefon kao daljinski upravljač.",
						"Prikazuje sadržaje s uređaja Android koji podržava Miracast na zaslonu televizora.",
						"Postavite zaštitu na vaš TV.",
						"Odaberite naziv za vaš uređaj.",
						"Odaberite vaše okruženje prikaza.",
						"Vratite sve postavke sustava na zadane."];
var initialTitle	= ["Dobrodošli","Početno podešavanje"];
var initialPrompt	= ["Izvršite početno podešavanje sada jer Vas uzbudljivi svijet očekuje!",
						"Izaberite svoj jezik, molim:",
						"Molimo, odaberite vašu zemlju:",
						"Molimo odaberite lokaciju:",
						"Molimo, odaberite vrstu vaše mrežne veze:",
						"Molimo, odaberite način žične mrežne veze:",
						"Veza na xxxxxxxxx nije uspjela! Povežite uređaj prema sljedećem grafikonu ili odaberite Lijevo za resetiranje.. ",
						"Povezan s xxxxxxxxx! Odaberite Desno, da biste nastavili. ",
						"1) Vaš televizor može imati ugrađeni bežični adapter\n 2)Ili, ako je bežični adapter USB isporučen, priključite ga na Vaš televizor i zatim odaberite način spajanja bežična mreža",
						"Tražim. Pričekajte ... ",
						"Nema priključenoga bežičnog uređaja na TV!",
						"Provjerite je li instaliran sljedeći PIN na prije nego kliknete donji gumb ‘Dalje’.",
						"Molimo pritisnite gumb na dostupnoj točki, u manje od 120 sekundi prije nego što pritisnete Desno! ",
						"WPS (Zaštićeno Wi-Fi postavljanje)",
						"PIN (osobni identifikacijski broj) ",
						"PBC (Konfiguracija gumba) ",
						"Do sljedećeg sadržaja može se pristupiti samo pomoću mrežne veze. Želite li preskočiti postavljanje mreže? ",
						"Dostupne su nove nadogradnje upravljačkog programa koje možete preuzeti. Vrijeme potrebno za njihovo preuzimanje ovisi o stanju Vaše mreže.",
						"Ažuriranje vašeg TV softvera osigurava vam uživanje u posljednjim značajkama i uslugama.",
						"Nećete moći uživati najnovijih značajkama i usluge. Želite li preskočiti nadogradnju upravljačkog programa?",
						"Pritisnite desni gumb kako biste nastavili",
						"Ne isključujte televizor tijekom izvedbe postupka nadogradnje jer to može prouzročiti njegov neispravan rad.",
						"Ako ne želite pokrenuti ažuriranja, odaberite Ne. ",
						"Ažuriram, molimo pričekajte",
						"Također možete ažurirati softver u AŽURIRANJE SISTEMA/SOFTVERA.",
						"Izabrana zemlja zatražit će podešavanje lozinke.\nOdredite kod za vaš TV i potvrdite ga.",
						"This code is too simple.\nPlease use different digits.",
						"Čestitamo!Prvo postavljanje je završeno. Konfiguracija se može mijenjati preko glavnog izbornika i podizbornika.",
						"Molimo, odaberite način sigurnosti:",
						"Molimo odaberite način bežičnih mrežnih veza: ",
						"Mreža"];
var initNetCabAndDonRe = ["Mrežni kabel nije spojen, molimo spojite mrežni kabel! ","Nema ugrađenog bežičnog adaptera ili USB adapter nije prisutan. "];
var initChPrompt = ["Instaliranje TV kanala","Odaberite vrstu pretraživanja pomoću antene. ","U tijeku je obrada automatskog ugađanja...","Pronađeni su sljedeći antenski kanali: ","Molimo, odaberite vrstu kabelskog traženja.","Odaberite operatera s popisa. ","Molimo, konfigurirajte informacije traženja","Pronađeni su ovi kabelski kanali:","Molimo, odaberite jednog operatera s ove liste","Molimo, odaberite satelite za traženje ili uređivanje odabranog satelita","Molimo, namjestite parametre satelita","Pronađeni su sljedeći kanali i ponovno pretraživanje kanala može se pokrenuti pod Kanali / Traženje kanala "];
var initClockPrompt = ["Pridobite vrijeme pomoću mreže!",
						"Molimo postavite datum i vrijeme: "];
var initialOptions	= ["Okruženje","Postavljanje mreže","Ažuriranje softvera","Instalacija kanala","Sat"];
var initialHotkeys	= ["Natrag ","Izaberi","Sljedeće"];
var initLocations	= ["Poč.str.","Trgovina","Kupujte s demo"];
var initNets		= ["Žičana ","Bežični","Nemam mrežnu vezu"];
var initWireManuals	= ["IP adresa","Maska podmreže","Zadani pristupnik","Primarni DNS","Sekundarni DNS"];
var initSoftUpdates = ["Ažuriraj sada","Ažuriraj kasnije"];
var initChannelIns	= ["Nastavi","Ne želim instalirati kanala "];
var initChScanTypes	= ["Digitalni & Analogni","Digitalni","Analogni","Ne želim tražiti"];
var initChDvbts		= ["Antena ATV kanala: ","Antena DTV kanala: "];
var initChDvbcs		= ["Kabelski ATV kanali:","Kabelski DTV kanali:"];
var initChDvbss		= ["Satelitski kanali:"];
var initChDvbSOther	= ["Ne želim tražiti satelitski kanal"];
var initEndConnectedStatus= ["prekinut ","Bežična mreža spojena ","kabelski priključak "];
var initEndInstallations= "Instalirane XXXX kanala";
var initEndUpdate	= ["Ažurirano"];

var audioScenes 	= ["Stolno","Ugradnja na zid"];			
var screenSavers	= ["Nema informacije o programu, molimo najprije pretražite programe!",
						"Nema signala!",
						"Poremećeno",
						"Samo podaci",
						"Audio Program",
						"Nema zvuka i slike",
						"Nije dostupno",
						"Nema teleteksta",
						"Nema podataka o programu.",
						"Program je zaključan!",
						"Program je zaključan!\nPritisnite OK i unesite svoju šifru.",
						"Nema pojedinosti o programu.",
						"Program je štetan za maloljetne osobe. \nPritisnite u redu i unesite svoju šifru. ",
						"Zaključan kanal!",
						"Zaključan kanal!\nPritisnite OK i unesite svoju šifru.",
						"Zaključan unos!\nPritisnite OK i unesite svoju šifru.",
						"Nema podrške!",
						"Ova usluga trenutačno nije dostupna",
						"Ulaz zaključan!",
						"Nema naziva programa.",
						"Nema funkcije"
						];
var chBookingPromt	= ["Trenutni kanal ima planirano snimanje. TV će početi snimati.",
						"Pronađeno je planirano snimanje.\n Prebacite na XXXX za snimanje",
						"Trenutačni kanal ima podsjetnik.",
						"Pronađen je planirani podsjetnik.\n Prebacite na XXXX"];
var timeUnit		= ["Sekunda","min"];
var ciPromt			= ["Mrežni podaci su se mijenjali. Za nadogradnju možete obaviti pregled nadogradnje. ",];
var othersPromt		= ["Molim pričekajte...",];
var menuOptions		= ["Slika","Zvuk","Kanal","Mreža","Sustav"];
var optionOptions	= ["Postavljanje slike","Postavke zvuka","Zamrzni","T-Link","vremenski pomak","PVR","Raspored","Settings"];
var optionTLinkPromt= [["Automatska aktivacija ","Automatsko mirovanje","Izbornik vodiča"],
						["Uključivanje","Stanje čekanja","Glasnoća pojačala"]];
var powerPromt		= ["TV će se uskoro isključiti! Molimo, pritisnite tipku za otkaz."];
var ttxLanguage		= ["ZAPAD EUR","ISTOK EUR","Ruski","Arapski/Hebrejski","Farsi","Arapski","Belorusz","Grčki","Turski"];
var ttxOptions		= ["Pokazati","Ciklus podstrana","Jezik","Početna stranica","Dnevne vijesti"];
var weekday         = ["Nedjelja","Ponedjeljak","Utorak","Srijeda","četvrtak","Petak","Subota"];
var lcnConfflict	= "Ovaj program ima loš prijem. Moguća je druga verzija na kanalu %d.";
var inShopMode		= "Vaš TV je u načinu za kupnju. Za kućni način, odaberite \"Sistem\" i promijenite \"Položaj\" iz izbornika. ";
var nitRefresh		= "Došlo je do promijene mrežnih podataka. Da li želite provesti skeniranje nadogradnje? ";
var picHDMIMode     = ["Auto","Grafički","Video"];

var glassRemind    	= ["Molimo uparite svoje 3D naočale s TV-om \n (Pritisnite i držite tipku za aktivaciju na 3D naočalama). ","Vaši 3D naočale su spojene na TV ",""];
var pvrRemind 		= ["Nemojte isključivati USB uređaja  ​ili isključitI napon"];
var pvrConName   	= ["PVR","Informacije o programu: ",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Snimljeni video je spremljen u folder \"pvr\"."],"Zaustaviti","Snimanje","sat","inuta","Trajanje","Savjeti","Podesite duljinu snimanja pomoću smjernih tipka"];
var pvrDisRemind 	= "Umetnite USB privjesak za snimanje.";
var pvrRemindWords  = ["Želite li izači? ",
							"Želite li zaustaviti snimanje i pregledati snimljene datoteke? ",
							"Disk je izvučen.",
							"Nema dovoljno slobodnog prostora.",
							"Nema videozapisa. Početak snimanja. ",
							"PVR se ne može pokrenuti u šifriranom kanalu.",
							"Funkcija nije dostupna",
							"Uspješno spremljeno.",
							"Želite li zaustaviti postupak snimanja i promijeniti ulazni izvor?",
							"TV će završiti trenutnu snimku. Želite li izači? ",
							"PVR snimanje treba TV signal, da funkcionira ispravno, provjerite signal. "];
var pvrChangeCh 	= ["Želite li promijeniti kanal?",
							"Želite li zaustaviti postupak snimanja i promijeniti kanal?"];
var pvrChangeToPIN8	= ["Želite li promijeniti izvor uređaju, koji je spojen na SCART ulaz? ",
				    		"Želite li da se zaustavi proces snimanja i mijenjati izvorni uređaj spojen na SCART ulaz? "];
var pvrChangeToCEC  = ["Želite li promijeniti izvorni uređaj spojen na HDMI ulaz? ",
				  			 "Želite li da se zaustavi proces snimanja i mijenjati izvorni uređaj spojen na HDMI ulaz?"];
var pvrGuideJump    = ["Želite li ući u EPG? ",
							"Želite li zaus. Post. Snim. i unijeti EPG?"];
var pvrMediaJump    = ["Želite li ući u medije? ",
							"Želite li zaustaviti postupak snimanja i unijeti USB?"];
var timeshiftExtra	= ["Želite li zaustaviti pomak vremena i promijeniti TV promijeniti kanal?",
						"Želite li zaustaviti interval i mijenjati izvorni uređaj spojen na SCART ulaz? ",
						"Želite li zaustaviti vremensku odgodu l i mijenjati izvorni uređaj spojen na HDMI ulaz? ",
						"Vrem. pomak se ne može pokrenuti u šifrir. kanalu.",
						"Želite li zaustaviti vremensku odgodu i unesti EPG? ",
						"Želite li zaustaviti pomak vremena i promijeniti TV na USB režim?",
						"Želite li zaustaviti pomak vremena I promijeniti ulazni izvor?",
						"Umetnite USB privjesak za snimanje.",
						"Veličina diska nije dovoljna.",
						"TV će završiti trenutnu vremensku odgodu. Želite li prestati pušiti? "];
var timeshiftStatus	= ["Brzo nazad","Zaustaviti","Pokretanje","Pauza","Brzo naprijed "];
var pvrPowerOffRemind= ["Spremnost za snimanje ","Stanje čekanja","TV momentalno snima, želite li nastaviti sa snimanjem, kad je TV prijemnik u pripravnom stanju? "];
var timeshiftInitTitle= "Postavljanje diska";
var timeshiftInitReminds= ["Ovaj čarobnjak se koristi za postavljanje USB diska za pomak vremena. Odaberite režim postavljanja.",
						 "Za bolje performanse preporučamo da formatirate USB disk. Time ćete izbrisati sve podatke.",
						 "Odaberite veličinu datoteke za pomak vremena.",
						 "Formatiranje",
						 "Nema dovoljno slobodnog prostora.",
						 "Izrada datoteke za pomak vremena",
						 "Provjera brzine",
						 "Brzina diska je nedovoljna (< %f MB/sek) za omogućavanje funkcije pomaka vremena",
						 "Disk je spreman za pomak vremena, ali preporučujemo da promijenite disk (brzine > %f MB/sek) za bolje performanse.",
						 "Disk je spreman za pomak vremena, "];
var timeshiftInitButtons= ["Formatiraj","Preskoči","Odustani","U redu","Završi","Izlaz"];
var timeshiftInitOther=["Brzina diska:","MB / s"];

var selectChoice	= "Jeste sigur.?";
var chAtvStore		= "Spremi kao XXXX ";
var chEpgFirstGenreUK= ["Film","Vijesti i činjenica","ZABAVA","Sport","Dječije","Edukacija","Stil života","Drama"];
var homePageTitleList = ["APLIKACIJE","TV","VIDEO ","Početna stranica "];
var homePageFavAndAllName  = ["Popularne aplikacije ","Sve aplikacije "];
var homePageBackUp = ["E-priručnik","GuideOn "];
var homePageRemind   = ["Pune značajke su dostupne samo kada je uspostavljena mrežna veza. ","Vaš TV nema kanala. Programi su dostupni na kraju pretraživanja kanala .. ","Nema programa","Pretražim kanale sada? "];
var homePageHistory = ["Povijest "];
var miracastTitle = ["WiFi TV veza ","TCL uređaj"];
var miracastRemind=["WiFi TV omogućuje razmjenu zaslona i zvuka vašeg uređaja poput smartphone ili tablet uređaja na vaš TV, bežično (tj. bez kabela). Ova opcija omogućuje prikaz na vašem TV prijemniku i istovremeno sadržaj koji prikazuje vaš smartphone ili tablet uređaj. Primjerice, možete lansirati videozapis na vašem smartphone uređaju i istovremeno ga prikazati na vašem TV prijemniku ili koristiti tablet kao kontroler za igru sa sadržajem prikazanim na velikom ekranu vašeg TV prijemnika.","WiFi TV poveznica na TV-u je spremna. Molimo, počnite dijeliti zaslon vašeg uređaja s TV-om.","Povezivanje. Pričekajte!","Povezivanje nije uspjelo!","Neuspješno povezivanje. Provjerite!"];
var homePageLittleWin = ["Settings","Medij","Popularni programi ","Smart TV","EPG"];

var hbbtvStopRemind  = ["Želite li zaustaviti reprodukciju?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Za više informacija, pritisnite OPTION";
var emptyListInfo = "Nema priključenog uređaja na TV !";
var optionVideoListArray_1 = ["Postavljanje slike", "Postavke zvuka", "Režim reprodukcije", "Mod ekrana", "3D režim", 
							  "Sklopka L-D", "Dubina polja", "Prijevod", "zvučna traka ", "Naslov", "Poglavlje", "Informacije"];
var optionVideoListArray_2 = ["Postavljanje slike", "Postavke zvuka", "Režim reprodukcije", "Mod ekrana", 
							  "Prijevod", "zvučna traka ", "Naslov", "Poglavlje", "Informacije"];
var bottomTipsText = ["Reproduk./pauza", "Brzo nazad", "Brzo naprijed ", "Popis za reproduciranje", "Settings"];
var picturePresetArray = ["Standard", "Dynamic", "Prirodni ", "Film", "Osobni"];
var videoPlayModeArray = ["Ponovi sve", "Ponovi jedan", "Normalno"];
var screenModeHDArray = ["16:9", "4:3", "Синерама", "Широкоъгълно увеличение", "Увеличение 2", "Широкоъгълно увеличение 2", "Увеличение с разпъване на образа", "Automatski"];
var screenModeSDArray = ["16:9", "4:3", "Синерама", "Увеличение 14:9 ", "Увеличение16:9", "Увеличение над16:9", "Automatski"];
var Mode3DArray = ["Isklj.", "2D na 3D", "Jedno pored drugog", "Gornje i donji dio", "Preplitanje linije"];
var videoOptionListArray = ["Isklj.", "Zapis", "Prijevod", "Naslov", "Poglavlje"];
var subMenuTitleText = "Prijevod";
var langMenuTitleText = "Zvučni jezik";
var titleMenuTitleText = "Naslov";
var mode3DMenuTitleText = "3D režim";
var langInfoText = "Zapis";
var STOP_RESUME_INFO = "Zaust.-Nastavi";
var playListName = "ime ";
var eb_tips = "Savjeti";
var ok_button = "U redu";
var eb_info = ["Pogreška dekodiranja zvuka. ", "Pogreška dekodiranja videa. ", "Audio format nije podržan. ", 
			   "Video format nije podržan.", "Ova datoteka ne može se otvoriti.", "Greška prilikom reprodukcije, pokušajte ponovno.",
			   "Nepodržan oblik datoteke.", "Ups! Reproduktor je prestao s radom.",
			   "Nepostojeći ili neispravan put do datoteke.\n Ponovno umetnite uređaj za pohranu i pokušajte ponovno.",
			   "Nastaviti s reprodukcijom na mjestu \n prekida prethodno reproduciranog sadržaja?"];
var frameTitleText = "novi uređaj ";
var eb_quit_info = "Jeste li sigurni da želite izaći? ";
var eb_yes = "DA";
var eb_no = "NE";
var offinfo = "Isklj.";
var naInfo = "nijedan ";
var consoleInfoArray = ["Brzo nazad", "Brzo naprijed ", "Reproduk./pauza", "Popis za reproduciranje"];
var cantOperateText = ["Funkcija nije podržana. "];
var chapterChangeInfo = "Samo poglavlja 1 do XXXX su dostupne. ";
var metaDataArray = ["Adresa / uređivanje metapodataka: ", "Metapodatki poglavlja: ", "Metapodatki zvuka: ", "Metapodatki podnaslova: "];
var metaTitleInfo = "Naslov";
var metaChapterInfo = "Poglavlje";
var videoLoadingInfo = "Analiziranje ... ";
var listLoadingInfo = "Otvaram ... ";
var pgInfo = "Pravna procjena: ";
var fileNameText = "ime ";
var fileDateText = "Datum";
var fileSizeText = "Veličina";
var fileDurationText = "Trajanje";
var fileDirectorText = "Redatelj";
var fileCopyrightText = "Autorsko pravo";
var fileArtistText = "Izvođač";
var fileAlbumText = "Album";
var fileGenreText = "Žanr";
var fileYearText = "Godina";
var fileGenreText = "Žanr";
var mainListArray = ["Sve", "Slika", "Video", "Glazba"];
var sortArray = ["ime ", "Datum"];
var parserArray = ["Normalno", "Rekurzivan"];
var emptyTipsInfo = "Ups! Nije pronađena niti jedna podržana datoteka.";
var emptyFolderInfo = "Ups! Nije pronađena niti jedna podržana datoteka.";
var sortName = "Sortiranje po ";
var parserName = "Analizator";
var divx_str1 = "Registracija DivX(R)";
var divx_str2 = "Deregistracija za DivX(R)";
var infor_str = "Informacije";
var quickMenuEmptyText = "Opcije nisu dostupne. ";

var musicSoundPresetArray = ["Standard", "Film", "Glazba", "Jasan glas", "Osobni"];
var musicInformationArray = ["ime ", "Izvođač", "Album", "Žanr:", "Godina:", "Trajanje:"];
var playListName = "ime ";
var playTipsInfo = ["Trenutno se reproducira prva datoteka.", "Trenutno se reproducira zadnja datoteka."]
var musicNameInfo = "Name";
var musicArtistInfo = "Izvođač";
var musicAlbumInfo = "Informacije";
var optionSoundPresetInfo = "Postavke zvuka";
var optionBGMInfo = "Reproduciranje u pozadini ";
var optionAudioOnlyInfo = "Samo zvuk";
var optionInfoText = "Informacije";

var remotePhoneConnecte = "XXXX je spojen s TV-jem! ";
var tvRemoteTitle		= "Dalj. upr. TV-a";
var tvRemoteDeveloper	= "Ovu aplikaciju je razvila tvrtka TCL";
var tvRemoteDeviceTitle	= "Naziv uređaja:";
var remoteOption		= ["Dijeljenje medija","Daljinsko upravljanje","Pomoć","Više o","Aplikacija Smart Connect"];
var remotebottom		= "Molimo preuzmite \"TV daljinski upravljač\" na vaš pametni telefon";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Dijelite fotografije, videa i glazbe na TV-u preko telefonas. ",
							"Koraci: \n 1. Kliknite na \"TV daljinski\" upravljač 'na telefonu. Povežite svoj ​​telefon s televizorom putem iste WiFi mreže; \n 2. Kliknite na \"Dijeljenje medija\" za pregledavanje multimedijskim datotekama, \n 3. Pošaljite medij za reprodukciju na TV-u (s jednim od sljedećih opcija) ",
							"      a) Povucite i ispustite mapu/datoteku na ikonu TV na gornjem dijelu zaslona;\n      b) Zamahnite telefonom prema TV uređaju za pokretanje prve datoteke;\n      c) Reproducirajte medij na telefonu i kliknite TV ikonu za dijeljenje;",
							" 4. Tijekom reprodukcije na TV uređaju, protresite telefon za reprodukciju prethodne ili sljedeće datoteke."];
var controlReminds		= ["Koristite telefon kao daljinski upravljač za korištenje TV uređaja.",
							" ",
							"Koraci: \n 1. Kliknite na \"TV daljinski upravljač 'na telefonu. Povežite svoj ​​telefon s televizorom putem iste WiFi mreže; \n 2. Kliknite na \"daljinski upravljač\" za kontrolu TV-a. "];
var helpDeviceWords		= "Multi-screens interaction";
var helpBottom			= "U doba tehnologije u oblaku, pametni uređaji poput telefona i TV-a međusobno su povezani. Podijelite medijske sadržaje na multi-zaslonima sa svojom obitelji i upravljajte TV-preko telefona! ";
var helpReminds			= ["Pripreme \ n 1. Preuzmite i instalirajte \"TV daljinac\" iz Google Play ili Apple Store. \n 2. Povežite svoj telefon s televizorom putem iste WiFi mreže. ",
							" ",
							"Preporučeni telefon\n   1. CPU: više od 800 MHz\n   2. Pohrana: najmanje 80 MB slobodnog prostora",
							" ",
							"Izjava o odricanju od odgovornosti \ n Ako značajka daljinskog upravljača nije dostupna na Vašem telefonu, obratite se proizvođaču telefona."];
var helpButtons			= ["Prethodno","Sljedeće"];
var aboutReminds		= ["Dalj. upr. TV-a","Ovu aplikaciju je razvila tvrtka TCL"];
var aboutExit			= "Izlaz";
var smartReminds		= ["Brza i pametna veza između TV-a i telefona. ",
							" ",
							"Koraci \n 1. Spojite TV i pametni telefon u istoj lokalnoj mreži. Kliknite na \"TV daljinski upravljač\" na vašem pametnom telefonu\n 2. Kliknite na \"Smart Connect\" skeniranje QR kodova.\n 3. Kada je TV u načinu prijenosa, pritisnite gumb INFO na daljinskom upravljaču za 4 sekunde dok ne vidite cijelo zaslonski QR kod. ",];
var smartQRReminds		= ["Molimo kliknite na Connect Smart na TV daljinskom upravljaču na telefonu i skenirajte QR kod za brzo povezivanje televizora i telefona. ",
							"QR kodovi sadrže podatke o lokalnoj mreži računa. Molimo spremite ga. "];
							

var consoleTipArray = ["Prethodno","Sljedeće","konzola ","Popis za reproduciranje"];							
var optionInfoArray = ["Postavljanje slike","Režim reprodukcije","Trajanje","Efekt","Informacije"];

var playModeArray = ["Normalno","Promiješati","Ponoviti"];
var durationArray = ["Kratke (5s) ", "Središnja (10s) ", "Duge (15s) "];
var effectArray = ["Nema", "Otpustiti", "Obrisati desno", "Obrisati ljevo", "Obrisati gore", "Obrisati dolje", "Okvir iznutra", "Okvir izvana", "Nasumično"];
var infoArray = ["Ime:","Veličina:","Datum:","Položaj"];

var picturePresetBarTitleInfo = "Postavljanje slike";
var picturePresetBarArray = ["Standard","Dynamic","Film","Film","Osobni"];
var upTipsInfo = "Premještanje slike"; //add yums 2014-10-10
var consoleTipsArray = ["konzola ","Prethodno","Sljedeće","Popis za reproduciranje","Settings"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Ponovo pritisnite DESNO za reprodukciju slijedeče slike","Ponovo pritisnite LIJEVO za reprodukciju prethodne slike","Ponovno pritisnite DOLJE za prikaz popisa reproduciranje"]; //add yums 2014-10-10

var optionPvrListArray = ["Postavljanje slike","Postavke zvuka", "Mod ekrana", "3D režim", "Prijevod", "zvučna traka ", "Informacije"];							
	
var titleSpanFirstArray = ["Kontrola i veza","Osnovne funkcije ","APLIKACIJE","TV","Settings","FAQ"];
var titleSpanSecondArray = [["Daljinsko upravljanje","tipke ploče","Jednostavno kretanje","TV priključak ","TV priključak ","TV priključak ","Bežični"],["uređaj za lansiranje ","Statusna traka ","Izvor"],["Reprodukcija aplikacija","Medij","Dalj. upr. TV-a"],["Podesite kanal i glasnoću ","Popis kanala","EPG","Inst. Kanala","Omiljeni kanali "],["Podešavanje slike ","Podešavanje zvuka ","Podešavanje kanala ","Ažuriranje softvera","Jezik","Roditeljska zaštita "],["Najčešće postavljana pitanja","Najčešće postavljana pitanja","Rješavanje problema ","Rješavanje problema ","Odredbe i uvjeti"]];
var contentSpan1_1Array = [["POPIS: ","INFORMACIJE: ","IZBORNIK: ","NAPAJANJE: ","IZVOR: ","VODIČ: ","SMART TV: "],["Prikazuje popis kanala ","Prikazuje informacije o programu ","Ovo je početna stranica ","Uključite napajanje ili ulazi u stanje pripravnosti ","Odaberite ulazni izvor ","Prikazuje informacije EPG (elektronički programski vodič)","Ide na stranicu Smart TV"]];
var contentSpan1_2Array = ["Prethodni kanal","Sljedeći kanal","Povećanje glasnoće","Smanjenje glasnoće ","Ovo je početna stranica ","Potvrda opcije ","Stanje čekanja / Uključeno napajanje"];
var contentSpan1_3Array = ["U redu / vodič","Kanal gore","Kanal dolje","Smanjivanje glasnoće","Povećavanje glasnoće","Dostupno kao strelice u nekim značajkama."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","AV OUT adapter","LAN (lokalna mreža)","pametni telefon","Osobno računalo / tuner / DVD","Audio pojačalo","Audio pojačalo / Monitor","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Slušalice","AV IN adapter","SPDIF","CMP AUDIO Adapter","CMP I (YPbPr) adapter","USB uređaji","USB uređaji","Slušalice","SPC / konzola za igre / prijemnik / DVD","Audio pojačalo","SPC / konzola za igre / prijemnik / DVD","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_6Array = ["Zajedn. sučelje","SD","VGA","SCART","Mini SCART","Ulaz za antenu","PCMCIA kartica","SD kartica","PC","Prijemnik / DVD","Antena / Kabel / Satelit","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_7Array = ["Tableta","PC","Router","Telefon","TV"];

var contentSpan2Array = [["Pritisnite gumbe sa strelicama kako biste pregledali početnu stranicu.","Zatim pritisnite OK za gledanje jednog od opremljenog programa ili za ulazak u program."],["Pokaži datuma, mrežu i naprave, itd u gornjem desnom kutu ekrana."],["Odabir izvora ulaznog signala naprava, spojenih na TV putem različitih priključka, kao što su TV, AV, HDMI, itd"]];

var contentSpan3Array = ["Uživajte i pregledavajte svoje omiljene aplikacije putem stranice Smart TV","Pregledavajte fotografije, gledajte videoisječke i slušajte glazbu s uređaja za pohranu USB.","Spojite TV i vaš pametni telefon ili tablet računala na istoj mreži ","Kliknite TCL nZaslon ili Udaljeni TV na pametnom telefonu ili tabletu","Dijelite fotografije, videoisječke i glazbu na višedijelnim zaslonima sa svojom obitelji i upravljajte televizorom pomoću pametnog telefona"];

var contentSpan4Array = [["Pritisnite GORE / DOLJE za prebacivanje kanala ","Pritisnite LIJEVO / DESNO za podešavanje glasnoće "],["Pritisnite gumb LIST na daljinsko upravljaču kako bi se prikazao popis kanala u retku","Pritisnite GORE / DOLJE za odabir kanala "],["EPG je vodič na zaslonu koji prikazuje televizijske programe. Kroz programe se možete kretati, odabiriti, pogledati i snimati. "],["Pronalaženje i instaliranje kanala "],["Dodavanje ili uređivanje svojih omiljenih kanala na popisu kanala "]];

var contentSpan5Array = ["Uživajte u svojim omiljenim programima putem video aplikacija "];

var contentSpan6Array = [["Pritisnite MENU za prikaz postavljanja opcija sustava ","Ulaz na postavke slike za podešavanje vrijednosti "],["Pritisnite MENU za prikaz postavljanja opcija sustava ","Unesite postavke zvuka za konfiguriranje opcija "],["Pritisnite MENU za prikaz postavljanja opcija sustava ","Ulaz na postavke kanala za postavljanje opcije "],["Ažuriranje TV kada je nova verzija softvera dostupna"],["Možete odabrati željeni jezik izbornika "],["Omogućuje roditeljima zaključavanje kanala ili programa koji nisu prikladni za djecu "]];

var contentSpan7_1Array = [["Nema slike, nema zvuka ","Provjerite da li osigurač ili prekidač radi. ","Uključite drugi električni uređaj u strujnu utičnicu kako bi bili sigurni da radi, ili je uključen. ","Utikač u lošem kontaktu s utičnicom","Provjerite izvor signala. "],["Normalna slika, nema zvuka ","Pritisnite tipku glasnoće prema gore za povećanje glasnoće. ","Zvučna postavka je netočna. ","Pogreška signala emitiranja. "],["Normalni zvuk, bez slike ","Podesite svjetlinu i kontrast ","Pogreška signala emitiranja. ","Provjerite je li omogučen jedino audio naćin."]];
var contentSpan7_2Array = [["Radiofrekvencijske smetnje ","Ta smetnja stvara pokretne valove ili dijagonalne linije, u nekim slučajevima, gubitak kontrasta na slici. Pronađite i uklonite izvor radio smetnje. "],["Bez boja","Podesite postavke boje. ","Pokušajte drugi kanal. Crno-bijeli program može biti dostupan. "],["Daljinski upravljač ne radi ","Zamijenite baterije. ","Baterije nisu instalirani pravilno. TV ne može biti priključen. "]];
var contentSpan7_3Array = [["Sadržaja USB uređaja nije prikazan","Provjerite je li USB uređaj za pohranu kompatibilan s TV-om. ","Provjerite da su audio i video datoteke podržane na TV-u. "],["Reproduciranje bez zvuka ","Audio  format nije podržan od strane TV reproduktora. "],["Datoteke neće igrati glatko ","Performansa prijenosa USB uređaja za pohranu može ograničavati brzinu prijenosa podataka na TV-u. "]];
var contentSpan7_4Array = [["Na što treba paziti kada se ažurira softver","Bez prekida napajanja tijekom ažuriranja softvera. ","Izbjegavajte bilo kakve operacije s daljinskim upravljačem, kada ažurirate softver. ","Budite strpljivi, jer može proces obnove softvera potrajati  malo duže. "],["Nakon ažuriranja softvera, neće biti nikakvih značajnih promjena na TV sučelju.","Pod određenim uvjetima, ažuriranje softvera ne znači samo dodavanjem novih značajki, nego i poboljšanje funkcioniranja TV-a bez značajnih promjena u sučelju. Također, TV sučelje ponekad ostaje nepromijenjeno. "]];
var termsTitle = "Odredbe i uvjeti";
var termsConditions = ["(Pravna napomena) TCL-a - proizvođač ovog televizijskog kompleta.","Zbog raznih mogućnosti uređaja sa SmartTV – uslugama, ali i ograničenja u dostupnosti sadržaja, neke funkcije, aplikacije i usluge možda neće biti dostupne na svim uređajima i u svim regijama. Za značajke SmartTV-a možda će biti potrebni i dodatni vanjski uređaji ili odvojena uplata članarina. Specifične informacije o uređaju i dostupnosti sadržaja potražite na našem web-mjestu. Usluge i dostupnost sadržaja u SmartTV-u podložni su povremenim promjenama bez prethodne najave. \n   Sav sadržaj i usluge dostupne putem ovog uređaja pripadaju drugim proizvođačima i zaštićeni su zakonima o autorskim pravima, patentnima, trgovačkim znakovima i/ili intelektualnom vlasništvu. Takav sadržaj i usluge pružaju se samo za vašu osobnu, nekomercijalnu upotrebu. Sadržaj i usluge ne smijete koristiti na način koji nije odobren od njegova vlasnika ili pružatelja usluge. Bez ograničenja u gore navedenom, osim ako je tako izričito odobreno od važećeg vlasnika sadržaja ili pružatelja usluge, sav sadržaj i usluge prikazane pomoću ovog uređaja ne smijete mijenjati, kopirati, ponovno izdavati, slati, objavljivati, prenositi, prevoditi, prodavati, izrađivati prerađevine, iskorištava ili distribuirati na bilo koji način ni putem bilo kojeg medija. \n   OVIME IZRIČITO POTVRĐUJETE I SLAŽETE SE DA ĆETE UREĐAJ KORISTITI NA VLASTITI RIZIK I DA SAMI SNOSITE ODGOVORNOST ZA EVENTUALNO NEZADOVOLJSTVO KVALITETOM, PERFORMANSAMA ILI PRECIZNOŠĆU. OVAJ SADRŽAJ I SAV SADRŽAJ TE USLUGE DRUGIH PROIZVOĐAČA PRUŽA SE \"KAKAV JE\" BEZ JAMSTVA BILO KAKVE VRSTE, IZRIČITOG ILI PODRAZUMIJEVANOG. TCL SE IZRIČITO ODRIČE SVIH JAMSTAVA I UVJETA U ODNOSU NA UREĐAJ I NA SVE VRSTE SADRŽAJA I USLUGA, BILO IZRIČITO ILI PODRAZUMIJEVANO, ŠTO SE BEZ OGRANIČENJA ODNOSI NA JAMSTVA ZA MOGUĆNOST PRODAJE, ZADOVOLJAVAJUĆU RAZINU KVALITETE, PRIKLADNOST ZA ODREĐENU NAMJENU, PRECIZNOST, TIHI RAD I POŠTIVANJE PRAVA DRUGIH PROIZVOĐAČA. TCL NE JAMČI ZA PRECIZNOST, VALJANOST, PRAVOVREMENOST, ZAKONITOST ILI CJELOVITOST BILO KOJE VRSTE SADRŽAJA ILI USLUGA DOSTUPNIH PUTEM OVOG UREĐAJA I NE JAMČI DA ĆE UREĐAJ, NJEGOV SADRŽAJ I USLUGE ZADOVOLJITI VAŠE POTREBE ILI DA ĆE NJEGOV RAD I USLUGE BITI NEOMETAN I BEZ GREŠAKA. NI POD KOJIM OKOLNOSTIMA, UKLJUČUJUĆI NEMAR, TCL NEĆE ODGOVARATI UGOVORNO ILI KRIVNJOM ZA BILO KAKVA IZRAVNA, NEIZRAVNA, POSEBNA ILI POSLJEDIČNA OŠTEĆENJA, ODVJETNIČKE TROŠKOVE I OŠTEĆENJA U VEZI SA SADRŽANIM PODACIMA, KOJA NASTANU KAO POSLJEDICA KORIŠTENJA UREĐAJA, BILO KOJEG SADRŽAJA ILI USLUGA KOJIMA STE PRISTUPALI VI ILI TREĆA STRANA, ČAK I AKO STE UPOZORENI NA MOGUĆNOST TAKVIH OŠTEĆENJA. \n   Usluge drugih proizvođača mogu u bilo kojem trenutku i bez najave promijeniti, obustaviti, ukloniti, okončati, prekinuti ili se može onemogućiti pristup i TCL (proizvođač TV prijemnika marke Thomson) ne jamči za dostupnost sadržaja i usluga u bilo kojem vremenskom razdoblju. Sadržaj i usluge prenose drugi proizvođači putem mreža i naprava za prijenos nad kojima TCL nema nadzor. Bez ograničenja u općenitosti ovog odricanja od odgovornosti, TCL se izričito odriče svake odgovornosti i obveza zbog promjena, prekida, onemogućenja, uklanjanja ili obustave određenih sadržaja ili usluga koje su dostupne putem ovog uređaja. TCL bilo kada i bez najave i obveze može odrediti granice u korištenju ili u pristupanju određenim uslugama ili sadržajima. TCL ne odgovara niti se obvezuje u smislu pružanja korisničke podrške za sadržaje i usluge. Sva pitanja i zahtjeve za popravkom koji se tiču sadržaja ili usluga uputite izravno odgovarajućem dobavljaču usluga i sadržaja."];

var noChannelListRemind        = ["Kanali nisu pronađeni. Popis kanala će biti dostupan krajem pretraživanje kanala. ","Skeniranje kanala"];
var closeSubtitleRemind   = "Ova značajka će biti dostupna kada su titlovi isključeni. Želite li jih konfigurirati sada? ";

var estickerTitles = ["Vrlo realne slike ","Boja koja oživljava ","Veliko, životno kretanje","Dinamična kvaliteta slike","SR UHD adaptacija ","Doživite 3D svijet ","Brže performanse ","Budući 4k sadržaj ","Uživajte u svijetu na internetu","Pristup dodatnim sadržajima","Ugrađen digitalni prijamnik ","Povežite sve uređaje ","Različiti izvori 4K ","sadržaj USB ","Ultra-brz WiFi ","Mobilni sadržaj na TV-u ","Sadržaj mobilnog uređaja ","lokalni sadržaj","Odobreno s strani DivX","Besprijekorna slika ","Spremnost za kanale","TDT Premium "];

var estickerDescriptions = ["Nevjerojatno iskustvo gledanja zahvaljujući slike s četiri puta više detalja punog HD ekrana na UHD ","Širok raspon boja omogućuje emocije u svakoj sceni s živim bojama crvene i smaragdno zelene ","4K okvirna interpolacija i svijetlost u pozadini, pazeći da se eliminira zamućenje u pokretu ","Vedrina izvorne slike je poboljšana za istinski dinamične izraze s izvrsnom kontrastom","Uživajte jasne i precizne TV emisije i Blu-ray diskove, zahvaljujući Super Resolution tehnologiji","Iskusite 3D TV spremnost i pogledajte razne 3D sadržaje ","Više ugodno iskustvo zabave sa procesorom sa četiri jedra za glatke interakcije, bolje performanse ","HEVC (H.265) kodek podrška za nadolazeće standardne 4K video distribucije ","Bogatstvo internetnih aplikacija, video na zahtjev, gledajte povijesne sadržaje i pregledavajte internet","Vidite više komplementarnih usluga i sadržaja iz vaše omiljene emisije ","Pristupajte TV kanalima u visokoj razlučivosti bez dodatnog prijamnika ","Jednostavno povezivanje mnogih digitalnih resursa, koji su dostupni kod kuće ","TV je spreman za buduće reproduciranje 4K 50 / 60Hz putem HDMI 2.0 s HDCP 2.2 ","Video i foto sadržaji izravno s USB flash pogona, tvrdog diska ili kamere na velikom ekranu u razlučivosti 4K ","Najnovija generacija 2x2 MIMO i AC standard osigurava pristup internetu neusporedive brzine ","Uživajte u fotografijama, videu, aplikacija s mobilnih uređaja na velikom zaslonu, zahvaljujući tehnologiji zrcaljenja zaslona ","Fotografije, video snimke, aplikacije s vašeg pametnog telefona ili tableta mogu se prikazati na velikom zaslonu ","Prikaz lokalnog sadržaja na velikom ekranu, kao što su fotografije, video snimke iz uređaja spojenih na lokalnu mrežu ","Reproducirajte iznajmljenih ili vlastitih filmova, koji su zaštićeni sa strane DivX ","Ultra uzak i vrlo tanak dizajn ","Ispitan i odobren od strane Canal + ","Ispitan i odobren od strane TDT Premium"];							

var eManualTextArray = ["E-priručnik","Svi grafički prikazi navedeni u priručniku služe samo za ilustraciju."];
var frontPanelRemind = "Prednja ploča je zaklj";
var eRPRemind		 = "Modus trgovine ne zadovoljava ERP zahtjev. Jeste sigur?";	
var noRelatedChannel = "Nema srodnih kanala";
var option0624Name          = ["BOP","BFS","Iz događaja u događaj","GetUserID","BGM","Reset all","Ponovo postavi izbor","NRM","DVB - T2 i odabir zemlje","HbbTV način rada"];
var DVBT2AndChoice = ["Uklj.","Po zemlji","Isklj."];
var hbbtvServiceRemind = "HbbTV usluga dolazi uskoro.";
var insertWord = "Umetni";		
var viewDetail = "Prikaži pojedinosti";							

var remindOAD  = "Ažuriranje softvera. Novo preporučeno ažuriranje softvera možda postoji na drugom kanalu. Ako prihvatite preuzimanje, možda će se automatski prebaciti na taj kanal. Želite li to učiniti odmah?";

var LEDStatus = ["Treperenje", "Normalno"];
var netFlixRemind = "Ova funkcija će prekinuti pristup uslugama Netflix dok se ponovo ne prijavite.";
var ESNExplanation = "Elektronički serijski broj";
var resetShopRemind = "U tijeku je resetiranje sustava, ne isključujte TV prijemnik";
var initialSelectOption = "Molimo, odaberite jednu opciju:";
var databaseRemind   = "Sustav je identificirao bazu podataka kao oštećenu iz nepoznatog razloga i obnovit će je automatski, pritisnite U redu za nastavak";
var Deactivation = "Deaktivacija";
var oadFutureRemind = "Ažuriranje softvera. Novi preporučeni softver može se ažurirati na %s. Ažuriranje bi moglo potrajati neko vrijeme i ekran će možda za to vrijeme bit zatamnjen. Ne isključujte prijemnik za vrijeme ažuriranja! Ako prihvatite ovo ažuriranje, ostavite prijemnik uključen ili u staju pripravnosti u planirano vrijeme. Želite li prijem ovog ažuriranja?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Izlaz zvuka";
var bt_soundOutPutTV = "Zvučnici TV";
var bt_soundOutPutBT = "Uređaj Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth i TV";
var bt_refreshBarName = "Uređaji";
var bt_settingTips_On = "Uključite fun.Bluetooth i skenirajte uređaje.";
var bt_settingTips_Finding = "Pronalaženje dost.uređaja…";
var bt_settingTips_NoDevice = "Nema dost. uređaja.";
var bt_deviceList_State_NoConnect = "Nije spojeno";
var bt_deviceList_State_Connecting = "Povezivanje…";
var bt_deviceList_State_Connected = "Povezano";
var bt_deviceList_State_Paired = "Uparen";
var bt_deviceList_Conncect_Failed_Tips1 = "Neuspješna veza.";
var bt_deviceList_Conncect_Failed_Tips2 = "Potvrdite je li fun. Bluetooth XXX uključena";
var bt_deviceList_Conncect_Success = "Povezano s uređajem Bluetooth.";
var bt_deviceList_Disconncect_Success = "Odspojeno od uređaja Bluetooth.";
var bt_deviceList_Disconnect = "Potvrdite želite li odspojiti od XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Upar. Bluetootha";
var bt_bluetooth_Input_Pin = "Unesite PIN:";
var bt_bluetooth_Output_Pin_Tip = "Unes. PIN XXXX tipkovnicom.";
var bt_bluetooth_Pin_Wrong_Tip = "Pogr. PIN";
var bt_bluetooth_Remove_Pair_Title = "Upit";
var bt_bluetooth_Remove_Pair_Ask = "Zaboravi uređaj?";
var bt_bluetooth_module_error = "Bluetooth modul pogreške!";
							
var applyPictureModeSwitchValue	 = ["Trenutačni izvor","Svi izvori"];
var audioDescriptionName = ["Opis zvuka","Zvučnik","Glasnoća zvučnika","Slušalica","Glasnoća slušalice","Glasnoća AD","Bluetooth uređaj","Glasnoća Bluetooth uređaja"];
var audioDescriptionOptions = ["Isklj.","Normalno","Opis zvuka"];							
var volumeOffRemind = 'Podesite XXX “Uključeno” u izborniku Postavke.';	
var netflixDialogOptions = ["U redu","Kasnije","Ne prikazuj ponovno"];
var netflixDialogContent = "Na tisuće filmova dostupno je za gledanje u Netflixu, pogledaj sada?";
var netflixRemoteDialogContent = "Daljinski upravljač s tipkom Netflix je dostupan za kupnju. Više informacija potražite na ovom web-mjestu.\nhttps://store.tcleu.com";
var switchSourceRemind   = " umetnuto. Želite li ga sada uključiti?";

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sportski način rada";
var resetStadium = "Stadium";								
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应
var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Izlaz","0","Zoom+",
                       	   "Izlaz",
                       	   "Lista","0","Tekst","Vodič","Potvrdi","Izlaz","Izbornik","Prijevod","Informacije",
                       	   "Stop",
                       	   "Informacije","Izbornik","Izlaz"
                       	   ];
var nscreenTips = "GuideOn pomaže korisnicima u kretanju kroz veliku količinu sadržaja.";
var nscreenContent = 'Koraci: 1. Kliknite "TCL nScreen" na telefonu.  Povežite telefon s TV prijamnikom putem iste LAN mreže; 2. Kliknite "GuideOn" da uđete u GuideOn; 3. GuideOn pruža funkcionalnost sličnu ispisanom vodiču programa te informira korisnike o dostupnom televizijskom sadržaju; ';
var singalBrokenoffTips = "Signal je prekinut. Sustav ne može završiti preuzimanje.";
var contentSpan1_1Array_AU =  [["NAPAJANJE:","IZVOR:","IZBORNIK:","BACK:","INFORMACIJE:","HOME:","EXIT:","POPIS:"],
                             ["Turns power on or standby mode","Select the input source",
                                "Show TV settings menu","Go back to the Previous menu or exit a running APP","Prikazuje informacije o programu","Ovo je početna stranica",
                               "Go back to the Previous menu or exit a running APP","Prikazuje popis kanala"]];
var guideDescriptionWords ="Molimo, pregledajte QR kôd da preuzmete aplikaciju GuideOn na svoj telefon";
var settingNoticeSourceName ="Automatski izvor";
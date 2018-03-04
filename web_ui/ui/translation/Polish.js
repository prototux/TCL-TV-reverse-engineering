
var all_country 	= ["Australia","Austria","Belgia","Bułgaria","Chorwacja","Czechy","Dania","Finlandia","Francja","Niemcy",
						"Grecja","Węgry","Włochy","Luksemburg","Holandia","Norwegia","Polska","Portugalia","Rumunia","Rosja",
						"Serbia","Słowenia","Hiszpania","Szwecja","Szwajcaria","Wielka Brytania","Nowa Zelandia"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Łotwa","Słowacja","Turcja","Irlandia","*","Filipiny","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Chiny","*","*","*","*","*","*","Inne","Litwa"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Litwa"];						
				
var all_language 	= ["Czeski","*","Duński","*","*","Niemiecki","Angielski","Francuski","Grecki","Hiszpański",
						"Chorwacki","*","Włoski","Węgierski","Holenderski","Norweski","Polski","Portugalski","Rosyjski","Rumuński",
						"Słoweński","Serbski","Fiński","Szwedzki","Bułgarski","Słowacki","*","*","Gaelicki","*",
						"Walijski","Arabski","Irlandzki","Łotewski","*","Turecki","Estoński","Holenderski"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Oryginalne audio"/*Qaa*/,"Nieokreślone"/*Undetermined*/,"*","Nieznany",
						"Nieokreślone","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskijski","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Białoruski","*","*","Kataloński","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicyjski","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandzki","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litewski",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romans","*","*","*","*",
						"*","*","*","Lapoński","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraiński","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Tradycyjny Chiński","*"];
var offOn			= ["Wyłącz","Włącz"];
var okCancel		= ["Ok","Anuluj"];
var yesNo			= ["TAK","NIE"];
var level			= ["Wyłącz","Niska","Duże","Średnia"];
var manualAuto		= ["Ręczna","Automatyczne"];
var homeShop		= ["Dom","Sklep"];
var picPreset		= ["Standard","Dynamiczny","Naturalne","Film","Kino cyfrowe","Użytkownik"];
var picColorTemp	= ["Chłodne","Normalny","Ciepłe","Ciepłe2","Użytkownik"];
var pic3dNavig		= ["Ręczna","Automatyczne","Pół automatycznie"];
var _3dOptions		= ["Tryb 3D","3D-na-2D","Przeł. L - P ","Głębokość pola"];
var pic3DMode       = ["Wyłącz","2D-na-3D","Obok siebie","Góra i Dół","Przeplot linii"];
var picEcoOptions	= ["Oszczędzanie energii","Czujnik światła","Lokalne ściemnienie","Przyciemnianie mieszane"];
var picGeoOptions	= ["Geometria","Pozycja pozioma","Pozycja pionowa","Zegar","Faza"];//Geometry 无翻译
var picAdWhiteBal	= ["Wzmocnienie R","Wzmocnienie G","Wzmocnienie B","Offset R","Offset G","Offset B"];
var souOptions		= ["Ustawienie wstępne dźwięku","Balans","Opóźnienie audio","SRS TSHD","Auto regul. głośn.",
						"Typ SPDIF","Opóźnienie SPDIF","Ustawienie telewizora","Język audio","Kanał audio",
						"Opis audio","Typ cyfrowego wyjścia audio","Ustawienia Dolby"];
var soundOutputoptions =["Wyjście DAP na głośnik telewizora","Zewnętrzne wyjście kodera AVR"];
var inteligenteqoptions 	=["Skoncentrowany","Bogaty"];						
var souSpdifType	= ["Automatyczne"/*Dolby*/,"PCM","Wyłącz"];
var colorSpace      = ["Automatyczne","Natywny","Użytkownik","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Dźwięk przestrzenny","Uwydatnienie dialogów","Uwydatnienie basów","Inteligentna głośność","Inteligencja nośników","Korektor graficzny","Inteligentny korektor EQ"];
var chOptions		= ["Skanowanie w poszukiwaniu kanałów","Lista Kanałów","EPG","Organizer","Diagnostyka kanału",
						"przesun. czasowe","Napisy","Teletekst","Typ listy kanałów"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Siła sygnału","Jakość sygnału","Częstotliwość (KHz)","Identyfikator usługi","Identyfikator sieci","Nazwa sieci"];
var chScanOptions	= ["Kraj","Rodzaj sygnału","Szukaj automatycznie","Aktualizuj automatycznie","Kanały analogowe - ręcznie",
						["Ręczne skan. sygn. kabl.","Kanały cyfrowe - ręcznie","Ręczne dostrojenie do satelity"],"Konfiguracja anteny satelitarnej","Wybór ulubionej sieci","Skasuj listę kanałów",];
var favNetDes		= "Wybierz ulubioną sieć";
var tuner			= ["Kablowy","Antena","Satelitarny"];//Satelite 无翻译
var passError		= "Nieprawidłowe hasło.\nWprowadź ponownie!";
var chType			= ["Kanały analogowe: ","Kanały cyfrowe: "];
var chScanStatus	= ["Status: Skanowanie","Status: Szukanie zakończone","Status: Anulowanie szukania","Status: Błąd szukania"];
var chScanPara		= ["Częstotliwość (KHz)","Modulacja","Współczynnik (Ksym/s)","Identyfikator sieci","System",
						"Dostrajanie","Siła sygnału","Jakość sygnału","Tryb skan.","Identyfikator kanału"];
var chScanParaMHZ      = ["Częstotliwość (MHz)"];
var chAtvManSys		= ["EUR ZACHODNIA","EUR WSCHODNIA","Wlk Brytania","Francja"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Automatyczne"];
var chCleanDes		= "Skasować listę kanałów?";
var chDeletDes		= "Czy chcesz usunąć ten kanał?";
var chOperator		= ["Ziggo","UPC","Inne"];
var chScanType		= ["Cyfrowy & Analogowy","Cyfrowy","Analogowy"];
var chScanMode		= ["Pełna","Zaawansowane","Szybkie"];
var bookingModes	= ["Zapis","Uwaga"];
var dayName			= ["N","Pn","Wt","Śr","Cz","Pt","So"];
var monthName		= ["Sty", "Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"];
var filter			= ["Filtr","Typ","Podtyp"];
var chEpgFirstGenre	= ["Film","Aktualności","Przedstawienie","Sport","Dla dzieci","Muzyka","Sztuka","Społeczne","Edukacja","Rekreacja","SPECJALNE"];
var chEpgSecondGenre= [["Dramat","Detektywistyczne","Przygodowe","Fantastyka naukowa","Komedia","Opera mydlana","Romans","Poważna","Film dla dorosłych"," "," "," "],
						["Sprawy bieżące","Prognoza pogody","Wiadomości","Dokumentalny","Dyskusja"," "," "," "," "," "," "," "],
						["Przedstawienie","Teleturniej","Rewia","Talk Show"," "," "," "," "," "," "," "," "],
						["Sport","Wydarzenia specjalne","Magazyny sportowe","Piłka nożna","Tenis",
							"Sporty drużynowe","Lekka atletyka","Sporty motorowe","Sporty wodne","Sporty zimowe",
							"Jazda konna","Sporty wojskowe"],
						["Dla dzieci","Dla przedszkolaków","Rozrywka dla dzieci w wieku 6 do 14","Rozrywka dla dzieci w wieku 10 do 16","Informacyjne","Filmy rysunkowe"," "," "," "," "," "," "," "],
						["Muzyka","Rock","Poważna","Ludowa","Jazz","Muzyczne","Balet"," "," "," "," "," "],
						["Sztuka","Formy sztuki","Sztuki piękne","Religia","Popkultura",
							"Literatura","Film","Doświadczalne","Transmisja","Nowe media",
							"Sztuka","Moda"],
						["Społeczne","Magazyny","Ekonomia","Wybitni ludzie"," "," "," "," "," "," "," "," "],
						["Edukacja","Przyrodnicze","Technologia","Medycyna","Inne kraje","Nauki społeczne","Kształcenie uzupełniające","Języki"," "," "," "," "],
						["Hobby","Turystyka","Rzemiosło","Motoryzacja","Sprawność i zdrowie","Gotowanie","Reklama","Ogrodnictwo"," "," "," "," "],
						["Oryginalny język","Czarno-biały","Niepublikowane","Transmisja na żywo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Pomiń kanał","Sort. kanał.","Edycja kanału","Usunięcie kanału","Sortuj kanały","Dodaj kanał"];
var chEditPara 		= ["Nazwa sieci","Numer kanału","Nazwa kanału","Częstotliwość","System kolorów","System dźwięku"];
var chSatTitles		= ["Typ satelity","Konfiguracja anteny satelitarnej","Wybierz satelitę"];
var chSatEidtOptions= ["Nazwa satelity","Położenie","LNB Moc","Częstotliwość LNB (MHz)","Wejście Diseqc",
						"Sygnał 22KHz","tone Burst","Częstotliwość (KHz)","Współczynnik (Ksym/s)","Polaryzacja",
						"Siła sygnału","Jakość sygnału","Status satelity"];
var chSatAutoPromt	= [["Wszystkie","Sieć"],
						["Wszystkie","Niezakodowane"]];
var chSatAutoScanOptions=["Wybierz satelitę","Tryb skan.","Kanały"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Uniwersalny",];
var chSatDiSEqCInput= ["Wyłącz","A","B","C","D"];
var chSatTone22KHz	= ["Automatyczne","Włącz","Wyłącz"];
var chSatToneBurst	= ["Wyłącz","tone Burst A","tone Burst B"];
var chSatPolarization= ["Pozioma","Pionowa"];
var chSatSetupOptions=["Typ anteny","Tuner","Pasmo częstotliwości"];
var chSatAntennaType= ["Kabel pojedynczy","Uniwersalny"];
var chSatUserBands	= ["Pasmo użytkown. 1","Pasmo użytkown. 2","Pasmo użytkown. 3","Pasmo użytkown. 4","Pasmo użytkown. 5","Pasmo użytkown. 6","Pasmo użytkown. 7","Pasmo użytkown. 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Zdefiniowane przez użytkownika"];
var pleaseSelectSat = "Najpierw wybierz satelity!";
var subOptions		= ["Napisy","Cyfrowy język napisów","Cyfrowy język napisów 2.","Typ napisów"];
var ttxOptionsCon      = ["Język dekod. strony","Język cyfrow. teletekstu"];
var subType			= ["Normalny","Niesłyszący"];
var netIntf     	= ["Przewodowo ","Bezprzewodowa"];
var netConnDes		= ["Telewizor testuje połączenie sieci.\nProszę czekać",
						"Test połączenia sieciowego zakończony sukcesem!",
						"Próba połączenia zakończona niepowodzeniem."];
var netSsidError	= "Poprawna długość identyfikatora SSID to 1–32 znaków. Sprawdź identyfikator SSID.";
var netOthers		= ["Kod PIN "];
var netWlessAutoDes	= ["Przed kliknięciem OK, proszę sprawdzić wprowadzenie poniższego kodu PIN do punktu dostępu.",
						"Proszę nacisnąć przycisk na punkcie Dostępu w czasie 120 sekund przed kliknięciem OK."];
var netConnRemind	= ["Nieprawidłowe hasło!",
						"Trwa łączenie. Czekaj!",
						"Połączono pomyślnie i uzyskano IP!",
						"Brak połączenia",
						"Telewizor wyszukuje AP\nProszę czekać",
						"Brak urządzeń bezprzewodowych podłączonych do telewizora!"];
var netWireIpOptions= ["Ustawienie IP","Typ adresu","Adres IP","Maska podsieci","Brama domyślna","Pierwotny DNS","Wtórny DNS"];
var netWireConnRemind= ["Proszę wprowadzić liczbę od 0 do 255.",
						"Połączono!",
						"Wpisz poprawny adres",
						"Połączono!",
						"Brak połączenia!",
						"Trwa łączenie. Czekaj!",
						"Podaj wartość między 1 a 223."];
var netFlixOptions	= ["Dezaktywacja","ESN"];
var netFlixDes	 	= ["Na pewno chcesz wyłączyć?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Aktualizuj oprogram.";
var netUpdateDialogTitle = "Aktualizacja oprogramowania";
var netBGDownloadTitle 	= "Pobieranie";
var netUpdateLoadingPrompt= ["Wyszukiwanie aktualizacji, czekaj!",
							"Pobieranie oprogramowania... Czekaj!",
							"Proszę NIE wyłączać telewizora w trakcie aktualizacji oprogramowania!",
                            "Konieczna aktualizacja oprogramowania jest pobierana automatycznie w tle!"];
var netUpdatePrompt= ["Gratulacje, posiadane oprogramowanie jest najnowsze!",
						"Znaleziono nową wersję oprogramowania XXXX. Załadować teraz? Może to zająć nieco czasu, zależnie od stanu sieci.",
						"logowanie nieudane!",
						"Nie można odebrać danych, spróbuj ponownie później!",
						"Analiza Update XML nieudana!",
						"Brak połączenia",
						"Oprogramowanie zostało pobrane. Czy chcesz rozpocząć aktualizację TV?",
						"Dane utracone! Załadowanie nieudane!",
						"Nieprawidłowe sprawdzenie pakietu, proszę spróbować ponownie!",
						"Problem z połączeniem z siecią, proszę sprawdzić i połączyć się ponownie…",
						"Aktualiz. nieudana. Uruchom telew. ponownie!",
						"Plik aktualizacji został nieoczekiwanie skasowany. Ponów aktualizację przez sieć.",
						"Oprogramowanie zostało pomyślnie pobrane w tle. Czy chcesz przeprowadzić aktualizację?"];
var netUpdateButtonText = ["Pobierz", "Aktualizuj", "Później", "Nigdy", "Ok","Kontynuuj"];
var autoDetectPrompt = ["Znaleziono nową wersję oprogramowania XXXX. Załadować teraz? Może to zająć nieco czasu, zależnie od stanu sieci.",
						"Znaleziono nową wersję oprogramowania XXXX. Aktualizować?",
						"Poprzedni proces aktualizacji sieciowej został przerwany. Musisz zacząć jeszcze raz.",
                        "Trwa pobieranie nowej wersji oprogramowania XXXX. Czy chcesz teraz kontynuować?",
                        "Oprogramowanie zostało pobrane, czy chcesz zaktualizować teraz?"];
var sysOptions		= ["E-instrukcja","Język OSD","Ust. czasu","Blokada","Ustawienia sygn. wej.",
						"Aktualizuj oprogram.","Lokalizacja","Tryb HbbTV","Pliki cookies","Złącze CI",
						"Ustawienia zaawansowane","Zreset. sklep","Wskaźnik LED"];
var sysResetDes		= "Czy na pewno?";
var sysMenuLangOptions=["Język","Język ścieżki dźwiękowej","Preferowany język dźwięku"];
var sysTimerOptions	= ["Strefa czasowa","Nazwa strefy","Zegar","Zegar uśpienia","Auto wyłaczenie", "Country region"];

var sysTimeZone		= ["Według nadawcy","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Wyłącz","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Wyłącz","4 godziny","6 godziny","8 godziny"];
var sysRegionName	= ["Madryt ","Kanary"];
var sysClockOptions	= ["Automat. synchr.","Data","Czas","Program włączania","Ust. czasu",
						"Wybór kanału","Program wyłączania","Ust. czasu"];
var sysTimer		= ["Wyłącz","Codziennie","Raz"];

var sysInputSet		= ["Brak etykiety","DVD","Blu-ray","HDD","DVDR",
						"Nagrywarka HD","Gry","VCR","PC","Przystawka cyfrowa",
						"Przystawka cyfrowa HD","Aparat fotograficzny","Nagrywarka","Inne"];
var sysAvVideoInput	= ["Automatyczne","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Przez USB","Przez sieci","Wg kanału"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Nie można znaleźć nowego oprogramowania w sygnale!",
						"Znaleziono nową wersję oprogramowania XXXX. Aktualizować?",
						"Włóż nośnik USB.",
						"Nieprawidłowe sprawdzenie pakietu, proszę spróbować ponownie!",
						"Nie wyłączaj TV w czasie aktualizacji oprogramowania.",
						"Oprogramowanie zostało pomyślnie zaktualizowane.\nTelewizor uruchomi się ponownie!",
						"Znaleziono nową wersję oprogramowania XXXX. Załadować teraz? Może to zająć nieco czasu, zależnie od stanu sieci.",
						"Pobieranie",
						"Oprogramowanie zostało pobrane. Czy chcesz rozpocząć wyświetlanie?",
						"Akt. nieudana!",
						"Szukanie plików aktualizacji",
						"Oprogramowanie zaktualizowano pomyślnie, \nProszę teraz uruchomić telewizor ponownie."];
var sysProductInfo	= ["Bieżąca wersja","Nazwa produktu","Nazwa producenta","Nazwa chassis"];
var sysCiDes		= ["Brak karty CI."];
var sysAdOptions	= ["Rejestracja DivX(R)","Wyrejestrowanie DivX(R)","T-Link","Authorization Error","Potwierdzenie wyrejestrowania",
						"Potwierdzenie wynajęcia","Wygasło wynajęcie","Numer deklaracji Bluetooth"];
var sysRegistDes	= ["Musisz zarejestrować urządzenie aby odtwarzać zabezpieczone wideo DivX",
						"Kod rejestracji:",
						"Rejestracja na http://vod.divx.com"];
var sysDregistDes	= ["Kod wyrejestrowania:",
						"Wyrejestrowanie na http://vod.divx.com",
						"Kontynuować rejestrację?"];
var mediaAuthorization = ["Twoje urządzenie nie jest uprawnione do odtwarzania tego wideo zabezpieczonego przez DivX."];
var deregistrationConfrimation = ["Twoje urządzenie jest już zarejestrowane.","Na pewno chcesz wyrejestrować?"];
var rentalConfirmation = "Wynajęte DivX(R) wykorzystało XXXX, z dopuszczalnej ilości odtwarzań YYYY. Kontynuować?";
var rentalExpired 	= "Wypożyczalnia DivX(R) wykorzystała XXXX z YYYY projekcji. Wypożyczalnia DivX wygasła.";
						
						
var sysLockOptions	= ["Blokada kanału","Zamknięcie interwału czasu","Blokada wiekowa","Blokada wejść","Blokada klawiatury","Blokada instalacji",
						"Zmień hasło","Głośność maksymalna","Wyczyść wszyst."];
var sysTimeIntervals= ["Typ blokady","Godz. Rozpoczęcia","Godz. zakończenia"];
var sysRatingOptions= ["Brak","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Kategoria X (Hiszpania)"];
var changePass		= ["Zmień hasło","Nowe hasło","Potwierdź hasło"];
var changePassDes	= ["Nieprawidłowe hasło.\nWprowadź ponownie!",
						"Hasło nie pasuje.\nWprowadź ponownie!",
						"Pomyślne ustawienie hasła!",
						"Ten kod jest zbyt prosty jako hasło.\nProszę wprowadzić ponownie!"];
var sysPowerOnChOptions= "Tryb wyboru";
var sysPowerOnCh	= ["Ostatni status","Wybór użytkownika"];
var netWlessSecu    = ["Otwarte","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Brak","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Brak obsługi"];
var netWlessSecu3	= ["Brak","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Brak obsługi"];
var netOptions		= ["Połączenie internetowe","Interfejs","Ustawienia łączności bezprzewodowej","Ustawienia IP","Informacja ",
						"Test połączenia","DLNA","TCL nScreen","Ustawienia Netflix","Łącze WiFi TV",
						"Typ adresu","Adres IP","Maska podsieci","Brama domyślna","Pierwotny DNS",
						"Wtórny DNS","SSID","BSSID","Proszę wprowadzić SSID:","Identyfikator użytkownika:"];
var chEditDes		= ["Powtórzony numer kanału!","Naciśnij czerwony przycisk, aby usunąć bieżący znak!","Nieprawidłowe numery kanałów."];
var chEpgNoProgram	= "Aktualnie brak informacji o programach, najpierw wyszukaj kanały!";
var chEpgWords		= ["Przewodnik Programów","Brak informacji o programie.","Zablokowany kanał!","Brak danych programu.","Brak tytułu programu."];
var chEpgBooking	= ["Informacje o harmonogramie", "Numer kanału","Data rozpoczęcia","Godz. Rozpoczęcia","Godz. zakończenia",
						"Typ powtarzania","Typ harmonogramu","Dodaj","Zamień","Zmień",
						"Dodaj / Zmodyfikuj"];
var epgHotKey		= ["Poprzedni dzień","Następny dzień","Filtr","Lista audycji","Dodaj plan"];
var chEpgBookRemind	= ["Nieprawidłowy Czas Rozpoczęcia","Nieprawidłowy Godz. zakończenia","Powtórzony Terminarz","Zapisano pomyślnie.","Usunięto."];
var chSchePara		= ["Lista audycji","Godz. Rozpoczęcia","Data rozpoczęcia","Tytuł Programu","Nazwa kanału",
						"Czas trwania","Powtórzenie","Terminarz","Edycja","Usuń"];
var dateTimer		= ["Raz","Codziennie","Tygodniowo"];
var scheduleDeleteReminds="Czy chcesz usunąć ten harmonogram?";
var scheduleNoLists	= "Brak harmonogramu. Naciśnij czerwony przycisk, aby go dodać.";
var chListWords		= ["Lista Kanałów","Wybierz listę","Rodzaj sygnału","Dodaj do ulubionych","Usuń",
						"Wybierz listę kanałów","Wybierz tryb tunera","Zamiana"];
var chListType		= ["Wszystkie","Cyfrowy","Analogowy","Radio","Niezakodowane","Ulubione"];
var chAutoScanOptions=["Wybierz operatora","Typ kanału","Szukaj automatycznie"];
var souSoundType	= ["Nieprawidłowe","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Podwójny1","Podwójny2","Podwójny2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam Dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muzyka","Film","Mowa","Standard","Użytkownik"];
var picAdRgbMode	= ["Wyłącz","Tylko Czerwony","Tylko Zielony","Tylko Niebieski"];
var picAdOptions	= ["Redukcja szumów","Optymalizacja ruchu","Składowe koloru","Kontrast Dynamiczny","Wyrazistość ruchu LED",
						"Flesh Tone","Tryb filmu","Tryb gier","Temp. kolorów","Balans Bieli",
						"Stopklatka","Uwydatnienie czerni","Overscan","Gamma","Tryb HDMI","Bilans bieli 10P","Rozszerzenie kolorów",
						"Redukcja rozmazania","Redukcja migotania","Przestrzeń kolorów","Wyrazistość ruchów"];
var pic10Pwhite     = ["Okres","Czerwony","Zielony","Niebieski","Resetuj","Kolor","Żółty","Cyjan","Magenta"];
var picMotionClarity = ["Tryb ruchu","Interpolacja ruchu","Wyrazistość ruchu LED","Redukcja rozmazania","Redukcja migotania","Resetuj"];
var picMotionMode   = ["Automatyczne","Film","Gładko","Usuń","Sport","Użytkownik"];
var picResetDes		= "Wszystkie ustawienia użytkownika zostaną zresetowane. Czy na pewno chcesz wykonać wybraną czynność?";
var pic10PReset     = "Czy na pewno chcesz zresetować balans bieli 10P?";
var picMotionReset  = "Czy chcesz zresetować wyrazistość ruchu?";
var picColorSpaceReset    = "Czy na pewno chcesz zresetować przestrzeń kolorów?";
var picOptions		= ["Tryb obrazu",
						"Podświetlenie","Jasność ","Kontrast","Nasycenie","BARWA","Ostrość","Temp. kolorów","Tryb ekranu","Format automatyczny",
						"Lepszy sport","3D","Nawigacja 3D","Ustawienia ECO","Geometria",
						"Ustawienia zaawansowane","Zastosuj tryb obrazu","Reset obrazu"];
var picSize			= ["Format 16:9", "Format 4:3 ", "Format 14:9", "Cinerama",
						"Zoom 16:9", "Ultra Zoom 16:9","Zoom 14:9","Rozciągnięcie","Szeroki",
						"Ultra Zoom 2","Szeroki zoom 2","Rozdzielczość natywna","Punkt do punktu","Oryginał","Panorama"];
var others			= ["Głośność","Nadawanie","Hasło","Status","Zapisz","Zamień","Start","Zakończ","Szukaj","Usuń",
						"Brak","Automatyczny","Szukaj punktów dostępu ","Zabezpieczenia","Połącz","Odświeżanie","Ponów","Zatrzymaj","Ustawienia","Kanały",
						"Edycja","Wstawić","Sygnał","Zakończ","Stereo","Audio","Źródło","Brak audio","Wskazówki","Resetuj",
						"Użytkownik","Konfiguracja","Zachowaj","Użytkownik","Zamknij klawiaturę","Tryb bezpieczny","Co dzień","Lista PVR"];
var direction		= ["Lewy","Prawy","W górę","W dół"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nieznany"];
var soundChannels   = ["Nieznany","Mono","Pomocniczy","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Przestrzenny 2CH","Przestrzenny","3,0 Ch","4,0 Ch","5,0 Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2 Ch Lfe","Surround Lfe","3,1 Ch","4,1 Ch","5.1-kan.","7.1-kan.","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Lewy","Prawy","Inne"];
var prompts			= ["Dostosuj ustawienia obrazu, aby pasowały do warunków oglądania.",
						"Dostosuj jasność. Im bliżej do 100, tym jaśniej.",
						"Dostosuj kontrast. Im bliżej do 100, tym większa różnica pomiędzy bielą a czernią na obrazie.",
						"Dostosuj nasycenie. Im bliżej do 100, tym mocniejszy kolor.",
						"Dostosuj ostrość. Im bliżej do 100, tym wyraźniejsze szczegóły.",
						"Dostosuj jasność podświetlenia. Im bliżej do 100, tym jaśniejszy ekran.",
						"Dostosuj tonację. To ustawienie zmienia tonację kolorów.",
						"Wybierz format obrazu, który najlepiej pasuje do oglądanego programu.",
						"Skonfiguruj opcje oszczędności energii.",
						"Dostosuj ustawienia geometrii ekranu po podłączeniu komputera.",
						"Wybierz zaawansowane ustawienia obrazu.",
						"Przywróć wszystkie domyślne ustawienia obrazu.",
						"Wybierz tryb dźwięku stosownie do osobistych preferencji.",
						"Ustaw równowagę lewego / prawego kanału dźwięku.",
						"System dźwięku TruSurround HD zapewnia bogate doznania akustyczne i wyraźny dźwięk na niskich i wysokich częstotliwościach.",
						"Digital Interface Format łączy cyfrowe wyjście audio sygnału telewizyjnego z zestawem kina domowego.",
						"Wybierz język audio odpowiednio do swoich preferencji.",
						"Umożliwia oglądanie programów telewizyjnych osobom niedowidzącym.",
						"Sprawdź swój obraz telewizyjny, dźwięk i sygnał.",
						"Wybierz typ listy kanałów odpowiednio do sygnału TV.",
						"Wybierz język napisów wyświetlanych na dole ekranu.",
						"Zobacz tekst i obrazy z bieżącego kanału.",
						"DLNA. Ciesz się muzyką, zdjęciami i filmami z innych urządzeń, takich jak komputer, w sieci domowej.",
						"Wyświetlaj zawartość smartfonu na ekranie telewizora i używaj smartfonu jako pilota do telewizora.",
						"Wyświetlaj zawartość z urządzenia kompatybilnego z Miracast z systemem Android na ekranie telewizora.",
						"Zablokuj swój telewizor.",
						"Wybierz nazwę swojego urządzenia.",
						"Wybierz swoje środowisko oglądania.",
						"Przywróć wszystkie domyślne Ustawienia Systemu."];
var initialTitle	= ["Witamy","Ustawienia"];
var initialPrompt	= ["Wykonaj wstępną konfiguracją już teraz, aby poznać świat pełen przygód!",
						"Wybierz język:",
						"Proszę wybrać kraj:",
						"Wybierz lokalizację:",
						"Proszę wybrać typ połączenia sieci:",
						"Proszę wybrać typ kablowego połączenia sieci:",
						"Połączenie z xxxxxxxxx nie powiodło się! Podłącz urządzenie zgodnie z poniższym schematem lub wybierz Lewo, aby zresetować.",
						"Połączono z xxxxxxxxx! Wybierz Prawo, aby kontynuować.",
						"1) Twój telewizor może mieć wybudowany adapter bezprzewodowy\n 2) Jeśli adapter bezprzewodowy jest zewnętrzny, podłącz go do telewizora. Następnie wybierz tryb połączenia bezprzewodowego.",
						"Skanowanie. Czekaj...",
						"Brak urządzeń bezprzewodowych podłączonych do telewizora!",
						"Przed kliknięciem przycisku ‘Next’ (dalej) proszę sprawdzić, czy został zainstalowany kod PIN.",
						"Naciśnij przycisk na AP w ciągu 120 sekund przed naciśnięciem przycisku Prawo!",
						"WPS (Ustawienie ochrony Wi-Fi)",
						"PIN (osobisty numer identyfikacyjny)",
						"PBC (konfiguracja przycisku)",
						"Poniższe treści są dostępne po połączeniu z siecią. Czy chcesz pominąć konfigurację sieci?",
						"Dostępne są nowe aktualizacje oprogramowania do pobrania; może to trochę potrwać w zależności od parametrów sieci.",
						"Aktualizacja oprogramowania telewizora umożliwia skorzystanie z najnowszych właściwości i usług.",
						"Nie będziesz korzystać z najnowszych funkcji i usług. Czy chcesz pominąć konfigurację oprogramowania?",
						"Naciśnij przycisk Prawo, aby kontynuować.",
						"Nie wyłączaj zasilania podczas aktualizacji, ponieważ może to spowodować uszkodzenie telewizora.",
						"Jeśli nie chcesz zaktualizować, wybierz NIE.",
						"Trwa aktualizacja, czekaj",
						"Oprogramowanie można także zaktualizować w oknie SYSTEM/SOFTWARE UPDATE.",
						"Wybrany kraj wymaga ustawienia hasła.\nProszę ustawić kod dla telewizora i potwierdzić go.",
						"Hasło zbyt proste. \n Proszę użyć innego.",
						"Gratulacje! Wstępna konfiguracja została zakończona. Możesz zmienić konfigurację w menu głównym i na powiązanych podlistach menu.",
						"Wybierz tryb ustawienia zabezpieczenia:",
						"Wybierz tryb połączenia z siecią bezprzewodową:",
						"Sieć"];
var initNetCabAndDonRe = ["Niepodłączony kabel sieciowy, podłącz kabel sieciowy!","Brak wbudowanej karty sieci bezprzewodowej lub brak karty sieci bezprzewodowej USB."];
var initChPrompt = ["Instalacja kanałów telewizyjnych","Wybierz typ skanowania anteny.","Wykonuje się automatyczne dostrajanie…","Znaleziono następujące kanały antenowe:","Proszę wybrać typ wyszukiwania Kablowego.","Wybierz jednego operatora z poniższej listy.","Proszę skonfigurować informację o wyszukiwaniu","Znaleziono następujące kanały Kablowe:","Proszę wybrać operatora z poniższej listy","Wybierz satelity do wyszukiwania lub edytuj wybranego satelitę","Ustaw parametry satelity","Zostały znalezione następujące kanały; skanowanie kanałów można wykonać ponownie w pozycji Channel/Channel Scan"];
var initClockPrompt = ["Pobierz czas z sieci!",
						"Ustaw datę i godzinę:"];
var initialOptions	= ["Otoczenie","Ustawienia sieciowe","Aktualizuj oprogram.","Instalacja kanałów","Zegar"];
var initialHotkeys	= ["Wstecz","Wybierz","Dalej"];
var initLocations	= ["Dom","Sklep","Sklep z demo"];
var initNets		= ["Przewodowa","Bezprzewodowa","Nie mam połączenia sieciowego"];
var initWireManuals	= ["Adres IP","Maska podsieci","Brama domyślna","Pierwotny DNS","Wtórny DNS"];
var initSoftUpdates = ["Aktualizuj teraz","Aktualizuj później"];
var initChannelIns	= ["Kontynuuj","Nie chcę instalować kanałów"];
var initChScanTypes	= ["Cyfrowy & Analogowy","Cyfrowy","Analogowy","Nie chcę wyszukiwania"];
var initChDvbts		= ["Kanały antenowe ATV:","Kanały antenowe DTV:"];
var initChDvbcs		= ["Kanały Kablowe ATV:","Kanały Kablowe DTV:"];
var initChDvbss		= ["Kanały Satelitarne:"];
var initChDvbSOther	= ["Nie chcę wyszukiwania satelity"];
var initEndConnectedStatus= ["Odłączono","Podłączono WiFi","Podłączono przewodowo"];
var initEndInstallations= "Zainstalowano kanały XXXX";
var initEndUpdate	= ["Zaktualizowano"];

var audioScenes 	= ["Na stole","Na ścianie"];
var screenSavers	= ["Aktualnie brak informacji o programach, najpierw wyszukaj kanały!",
						"Brak sygnału!",
						"Zakodowane",
						"Tylko dane",
						"Program audio",
						"Brak audio i video",
						"Niedostępny",
						"Brak teletekstu",
						"Brak informacji o programie.",
						"Zablokowany program!",
						"Zablokowany program!\nNaciśnij przycisk OK i wprowadź kod.",
						"Brak danych programu.",
						"Program szkodliwy dla nieletnich.\nNaciśnij OK i wprowadź kod.",
						"Zablokowany kanał!",
						"Kanał jest zablokowany!\nNaciśnij przycisk OK i wprowadź kod.",
						"Wprowadzanie jest zablokowane!\nNaciśnij przycisk OK i wprowadź kod.",
						"Brak obsługi!",
						"Ta usługa jest aktualnie niedostępna",
						"Wej. zablok.!",
						"Brak tytułu programu.",
						"Brak funkcji"
						];
var chBookingPromt	= ["Aktualny kanał ma zaplanowane nagrywanie, telewizor rozpocznie nagrywanie.",
						"Znaleziono zaplanowany zapis. \n Przełączyć na XXXX, by zapisać",
						"Bieżący kanał ma przypomnienie.",
						"Znaleziono przypomnienie o zaplanowaniu. \n Przełączyć na XXXX"];
var timeUnit		= ["Sek.","min."];
var ciPromt			= ["Dane sieci zostały zmienione. Aby zaktualizować, możesz wykonać skan aktualizacji. ",];
var othersPromt		= ["Zaczekaj...",];
var menuOptions		= ["Obraz","Dźwięk","Kanał","Sieć","System"];
var optionOptions	= ["Tryb obrazu","Ustawienie wstępne dźwięku","Stopklatka","T-Link","przesun. czasowe","PVR","Lista audycji","Ustawienia"];
var optionTLinkPromt= [["Automatyczne włączanie","Auto wyłaczenie","Menu przewodn."],
						["Włączenie","Gotowość","Głośność wzmacniacza"]];
var powerPromt		= ["Telewizor wyłączy się wkrótce! Nacisnąć dowolny klawisz, by przerwać."];
var ttxLanguage		= ["EUR ZACHODNIA","EUR WSCHODNIA","Rosyjski","Arabski/hebrajski","Perski","Arabski","Białoruski","Grecki","Turecki"];
var ttxOptions		= ["Ujawnij","Zmiana podstron","Język","Strona alarmu","Pilna wiadomość"];
var weekday         = ["Niedziela","Poniedziałek","Wtorek","środa","Czwartek","Piątek","Sobota"];
var lcnConfflict	= "Wystąpił problem dotyczący odbierania tego programu w rozdzielczości HD. Na kanale %d jest dostępna wersja programu w innej rozdzielczości.";
var inShopMode		= "Twój telewizor jest w trybie sklepowym. Aby włączyć tryb domowy, wybierz opcję System i zmień parametr Location w menu.";
var nitRefresh		= "Dane sieciowe uległy zmianie. Czy chcesz przeprowadzić skanowanie w poszukiwaniu aktualizacji?";
var picHDMIMode     = ["Automatyczne","Grafika","Video"];

var glassRemind    	= ["Sparuj okulary 3D z telewizorem\n(Przytrzymaj wciśnięty przycisk POWER na okularach 3D).","Twoje okulary 3D są podłączone do telewizora ",""];
var pvrRemind 		= ["Nie wyciągaj urządzenia USB i nie wyłączaj zasilania"];
var pvrConName   	= ["PVR","Informacje o programach:",["Do nagrywania kanałów HD wybierz dysk z prędkością zapisu większą niż 5 MB/sek., dla kanałów SD wybierz dysk z prędkością zapisu większą niż 3 MB/sek","wideo zapisane w folderze \"pvr\""],"Zatrzymaj","Zapis","godzina","Minuta","Czas trwania","Wskazówki","Użyj klawiszy strzałek, aby ustawić czas nagrywania."];
var pvrDisRemind 	= "Proszę włożyć wtyk pamięci USB w celu zapisu.";
var pvrRemindWords  = ["Czy chcesz zamknąć?",
							"Czy chcesz zatrzymać nagrywanie i przejrzeć zapisane pliki?",
							"Wyjęty dysk.",
							"Brak wolnego miejsca.",
							"Brak zapisanych plików. Zacznij nagrywać.",
							"PVR nie może zaczynać się w kanale kodowanym.",
							"Urządzenie niedostępne",
							"Zapisano pomyślnie.",
							"Chcesz zatrzymać zapisywanie i zmienić źródło wejścia?",
							"Telewizor zakończy bieżące nagranie. Czy chcesz zamknąć?",
							"Nagrywarka PVR potrzebuje prawidłowego sygnału TV, sprawdź sygnał."];
var pvrChangeCh 	= ["Włączyć kanał?",
							"Chcesz zatrzymać zapisywanie i zmienić kanał?"];
var pvrChangeToPIN8	= ["Czy chcesz zmienić źródło na urządzenie podłączone do wejścia SCART?",
				    		"Czy chcesz zatrzymać nagrywanie i zmienić źródło na urządzenie podłączone do wejścia SCART?"];
var pvrChangeToCEC  = ["Czy chcesz zmienić źródło na urządzenie podłączone do wejścia HDMI?",
				  			 "Czy chcesz zatrzymać nagrywanie i zmienić źródło na urządzenie podłączone do wejścia HDMI?"];
var pvrGuideJump    = ["Czy chcesz otworzyć EPG?",
							"Zatrzymać zapisywanie i wprowadzić EPG?"];
var pvrMediaJump    = ["Czy chcesz otworzyć Media?",
							"Zatrzymać zapisywanie i wprowadzić Media?"];
var timeshiftExtra	= ["Zatrzymać opóźnianie i przejść w telewizorze zmienić kanał?",
						"Czy chcesz zatrzymać funkcję TimeShift i zmienić źródło na urządzenie podłączone do wejścia SCART?",
						"Czy chcesz zatrzymać funkcję TimeShift i zmienić źródło na urządzenie podłączone do wejścia HDMI?",
						"Przes. czasu nie może zaczynać się w kanale kodow.",
						"Czy chcesz zatrzymać funkcję TimeShift i otworzyć EPG?",
						"Zatrzymać opóźnianie i przejść w telewizorze do trybu USB?",
						"Zatrzymać opóźnianie i przejść w telewizorze zmienić źródło wejścia?",
						"Proszę włożyć wtyk pamięci USB w celu zapisu.",
						"Za mało miejsca na dysku.",
						"Telewizor zakończy działanie funkcji TimeShift. Czy chcesz zamknąć?"];
var timeshiftStatus	= ["Przewiń do tyłu","Zatrzymaj","Odtwarzanie","Wstrzymanie","Przewiń do przodu"];
var pvrPowerOffRemind= ["Nagrywanie w trybie czuwania","Gotowość","Trwa nagrywanie, czy chcesz kontynuować nagrywanie w trybie czuwania?"];
var timeshiftInitTitle= "Ustawienia dysku";
var timeshiftInitReminds= ["Kreator ustawiania dysku USB dla opóźnienia. Wybierz tryb ustawienia.",
						 "Dla lepszego działania sformatuj dysk. Wszystkie dane zostaną skasowane",
						 "Wybierz czas opóźnienia.",
						 "Formatowanie",
						 "Brak wolnego miejsca.",
						 "Tworzenie pliku opóźnienia",
						 "Test prędkości",
						 "Za mała prędkość dysku (< %f MB/sec) dla wprowadzenia opóźnienia!",
						 "Dysk gotowy do wprowadzenia opóźnienia. Dla lepszego działania zalecamy zmianę dysku (na dysk o prędkości> %f MB/sec).",
						 "Dysk gotowy do wprowadzenia opóźnienia."];
var timeshiftInitButtons= ["Format","Pomiń","Anuluj","Ok","Zakończ","Zakończ"];
var timeshiftInitOther=["Prędk. dysku:","MB / s"];

var selectChoice	= "Czy na pewno?";
var chAtvStore		= "Zapisz jako XXXX";
var chEpgFirstGenreUK= ["Film","Wiadomości i fakty","ROZRYWKA","Sport","Dla dzieci","Edukacja","Styl życia","Dramat"];
var homePageTitleList = ["Aplikacje do odtwarzania","TV","FILMY","Strona główna"];
var homePageFavAndAllName  = ["Ulubione aplikacje","Wszystkie aplikacje"];
var homePageBackUp = ["E-instrukcja","GuideOn"];
var homePageRemind   = ["Wszystkie funkcje są dostępne po podłączeniu do sieci.","W telewizorze nie ma jeszcze żadnych kanałów. Programy będą dostępne po przeskanowaniu kanałów.","Brak programu","Czy chcesz teraz wyszukać kanały?"];
var homePageHistory = ["Historia"];
var miracastTitle = ["Łącze WiFi TV","Urządzenie TCL"];
var miracastRemind=["Łącze WiFi TV umożliwia bezprzewodowe wpółdzielenie ekranu i dźwięku z posiadanego urządzenia, takiego jak smartfon lub tablet z posiadanym telewizorem. Umożliwia to jednoczesne oglądanie na TV tego co pokazuje smartfon lub tablet. Np. można uruchomić wideo w smartfonie i jednocześnie wyświetlać je w telewizorze, lub korzystać z tabletu jako sterownika gry z treścią wyświetlaną na dużym ekranie.","Łącze WiFi w telewizorze jest gotowe Udostępnij ekran swojego urządzenia na ekranie telewizora.","Trwa łączenie. Czekaj!","Brak połączenia!","Połączenie nie powiodło się. Sprawdź to!"];
var homePageLittleWin = ["Ustawienia","Media","Ulubione kanały","Smart TV","EPG"];

var hbbtvStopRemind  = ["Czy chcesz przerwać odtwarzanie?"];
var colorSystem = ["Automatyczne","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Naciśnij przycisk OPTION, aby uzyskać więcej informacji";
var emptyListInfo = "Brak urządzeń podłączonych do telewizora";
var optionVideoListArray_1 = ["Tryb obrazu", "Ustawienie wstępne dźwięku", "Tryb odtwarzania", "Tryb ekranu", "Tryb 3D", 
							  "Przeł. L - P ", "Głębokość pola", "Napisy", "Ścieżka dźwiękowa", "Tytuł", "Rozdział", "Info"];
var optionVideoListArray_2 = ["Tryb obrazu", "Ustawienie wstępne dźwięku", "Tryb odtwarzania", "Tryb ekranu", 
							  "Napisy", "Ścieżka dźwiękowa", "Tytuł", "Rozdział", "Info"];
var bottomTipsText = ["Odtwarz./Pauza", "Przewiń do tyłu", "Przewiń do przodu", "Lista odtwarzania", "Ustawienia"];
var picturePresetArray = ["Standard", "Dynamiczny", "Naturalne", "Film", "Użytkownik"];
var videoPlayModeArray = ["Powt. wszystk.", "Powt. jednokr.", "Normalny"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Szeroki", "Ultra Zoom 2", "Szeroki zoom 2", "Rozciągnięcie", "Automatyczny"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Ultra Zoom 16:9", "Automatyczny"];
var Mode3DArray = ["Wyłącz", "2D-na-3D", "Obok siebie", "Góra i Dół", "Przeplot linii"];
var videoOptionListArray = ["Wyłącz", "Ścieżka", "Napisy", "Tytuł", "Rozdział"];
var subMenuTitleText = "Napisy";
var langMenuTitleText = "Język audio";
var titleMenuTitleText = "Tytuł";
var mode3DMenuTitleText = "Tryb 3D";
var langInfoText = "Ścieżka";
var STOP_RESUME_INFO = "Stop - wznow.";
var playListName = "Nazwa";
var eb_tips = "Wskazówki";
var ok_button = "Ok";
var eb_info = ["Błąd dekodowania dźwięku.", "Błąd dekodowania wizji.", "Format audio nie jest obsługiwany.", 
			   "Nieobsługiwany format wideo.", "Nie można otworzyć tego pliku.", "Błąd odtwarzania, spróbuj ponownie później.",
			   "Ten format plików nie jest obsługiwany.", "Oj, odtwarzacz przestał działać.",
			   "Ścieżka pliku nie istnieje lub jest nieprawidłowa.\n Włóż nośnik pamięci i spróbuj ponownie.",
			   "Czy chcesz kontynuować odtwarzanie\n z poprzedniego statusu odtwarzania?"];
var frameTitleText = "Nowe urządzenie";
var eb_quit_info = "Czy na pewno chcesz zamknąć?";
var eb_yes = "TAK";
var eb_no = "NIE";
var offinfo = "Wyłącz";
var naInfo = "Zero";
var consoleInfoArray = ["Przewiń do tyłu", "Przewiń do przodu", "Odtwarz./Pauza", "Lista odtwarzania"];
var cantOperateText = ["Funkcja nie jest obsługiwana."];
var chapterChangeInfo = "Dostępne są tylko rozdziały od 1 do XXXX.";
var metaDataArray = ["Metadane tytułu/wersji: ", "Metadane rozdziału: ", "Metadane audio: ", "Metadane napisów: "];
var metaTitleInfo = "Tytuł";
var metaChapterInfo = "Rozdział";
var videoLoadingInfo = "Analizowanie...";
var listLoadingInfo = "Ładowanie...";
var pgInfo = "Ocena prawna: ";
var fileNameText = "Nazwa";
var fileDateText = "Data";
var fileSizeText = "Rozmiar";
var fileDurationText = "Czas trwania";
var fileDirectorText = "Reżyser";
var fileCopyrightText = "Prawa autorskie";
var fileArtistText = "Wykonawca";
var fileAlbumText = "Album";
var fileGenreText = "Gatunek";
var fileYearText = "Rok";
var fileGenreText = "Gatunek";
var mainListArray = ["Wszystkie", "Obraz", "Video", "Muzyka"];
var sortArray = ["Nazwa", "Data"];
var parserArray = ["Normalny", "Powtarzające się  "];
var emptyTipsInfo = "Oj, nie znaleziono żadnego pliku w obsługiwanym formacie.";
var emptyFolderInfo = "Oj, nie znaleziono żadnego pliku w obsługiwanym formacie.";
var sortName = "Sortuj według";
var parserName = "Parser";
var divx_str1 = "Rejestracja DivX(R)";
var divx_str2 = "Wyrejestrowanie DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Brak dostępnych opcji.";

var musicSoundPresetArray = ["Standard", "Film", "Muzyka", "Wycisz głos", "Użytkownik"];
var musicInformationArray = ["Nazwa", "Wykonawca", "Album", "Gatunek:", "Rok:", "Czas trwania:"];
var playListName = "Nazwa";
var playTipsInfo = ["Odtwarzasz pierwszy plik.", "Odtwarzasz ostatni plik."]
var musicNameInfo = "Name";
var musicArtistInfo = "Wykonawca";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Ustawienie wstępne dźwięku";
var optionBGMInfo = "Odtwarzaj w tle";
var optionAudioOnlyInfo = "Tylko audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX jest połączone z telewizorem!";
var tvRemoteTitle		= "TCL nScreen";
var tvRemoteDeveloper	= "Aplikacja opracowana przez TCL";
var tvRemoteDeviceTitle	= "Nazwa urządzenia:";
var remoteOption		= ["Współdzielenie mediów","TCL nScreen","Pomoc","Informacja o","Inteligentne połączenie"];
var remotebottom		= "Pobierz aplikację TCL nScreen na swój smartfon ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Udostępnianie zdjęć, filmów i muzyki w telewizorze przez telefon.",
							"Czynności: \n   1. Kliknij aplikację TCL nScreen na smartfonie. Połącz smartfon z telewizorem w tej samej sieci WiFi;\n   2. Kliknij opcję Media Sharing, aby przejrzeć pliki multimedialne;\n   3. Prześlij multimedia, aby je odtworzyć na telewizorze (na jeden z następujących sposobów).",
							"      a) Przeciągnąć i upuścić folder/plik na ikonę TV na górze ekranu;\n      b) Machnąć telefonem w kierunku telewizora, by uruchomić pierwszy plik;\n      c) Odtwarzać media w telefonie i kliknąć ikonę dzielenia się z telewizorem;",
							"   4. Podczas odtwarzania w telewizorze, potrząsnąć telefonem, by odtwarzać poprzedni lub następny plik."];
var controlReminds		= ["Użyć telefonu jako pilota do sterowania telewizorem.",
							" ",
							"Czynności: \n1. Kliknij aplikację TCL nScreen na smartfonie. Połącz smartfon z telewizorem w tej samej sieci WiFi;\n2. Kliknij opcję Remote Control, aby korzystać z telewizora."];
var helpDeviceWords		= "Współdziałanie wielu ekranów";
var helpBottom			= "W erze technologii chmury, urządzenia inteligentne jak telefon i telewizor są wzajemnie połączone. Dziel się mediami z rodziną, na wielu ekranach i steruj telewizorem przez telefon! ";
var helpReminds			= ["Przygotowania\n   1. Pobierz i zainstaluj aplikację TCL nScreen z Google Play lub Apple Store.\n   2. Połącz smartfon z telewizorem w tej samej sieci WiFi.",
							" ",
							"Zalecany telefon\n   1. CPU: powyżej 800MHz\n   2. Pamięć: dostępne co najmniej wolnych 80MB",
							" ",
							"Zastrzeżenie\ n Jeśli aplikacja TCL nScreen jest niedostępna w Twoim telefonie, skontaktuj się z producentem telefonu"];
var helpButtons			= ["Poprzednia","Dalej"];
var aboutReminds		= ["TCL nScreen","Aplikacja opracowana przez TCL"];
var aboutExit			= "Zakończ";
var smartReminds		= ["Szybkie i inteligentne połączenie smartfona z telewizorem.",
							" ",
							"Czynności \n   1. Podłącz telewizor i smartfon do tej samej sieci LAN. Kliknij aplikację TCL nScreen na smartfonie.\n   2. Kliknij opcję Smart Connect, aby zeskanować kod QR.\n   3. Ustaw telewizor w trybie oglądania i przytrzymaj wciśnięty przycisk INFO na pilocie telewizora przez 4 sekundy; zostanie wyświetlony kod QR na cały ekran.",];
var smartQRReminds		= ["Kliknij opcję Smart Connect w aplikacji TCL nScreen na smartfonie i zeskanuj kod QR, aby szybko połączyć telewizor ze smartfonem.",
							"Kod QR zawiera informacje o koncie LAN. Sprawdź, czy wszystko się zgadza."];
							

var consoleTipArray = ["Poprzednia","Dalej","Konsola","Lista odtwarzania"];							
var optionInfoArray = ["Tryb obrazu","Tryb odtwarzania","Czas trwania","Efekt","Info"];

var playModeArray = ["Normalny","Losowo","Powtórzenie"];
var durationArray = ["Krótkie (5 s)", "Średnie (10 s)", "Długie (15 s)"];
var effectArray = ["Brak", "Rozproszenie", "Wypar. w prawo", "Wypar. w lewo", "Wypar. w górę", "Wyparcie w dół", "Czwor. do śr.", "Czwor. od śr.", "Losowe"];
var infoArray = ["Nazwa:","Rozmiar:","Data:","Lokalizacja"];

var picturePresetBarTitleInfo = "Tryb obrazu";
var picturePresetBarArray = ["Standard","Dynamiczny","Studio","Film","Użytkownik"];
var upTipsInfo = "Przesuń zdjęcie"; //add yums 2014-10-10
var consoleTipsArray = ["Konsola","Poprzednia","Dalej","Lista odtwarzania","Ustawienia"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Naciśnij ponownie przycisk PRAWO, aby zobaczyć następne zdjęcie","Naciśnij ponownie przycisk LEWO, aby zobaczyć poprzednie zdjęcie","Naciśnij ponownie przycisk DÓŁ, aby pokazać listę odtwarzania"]; //add yums 2014-10-10

var optionPvrListArray = ["Tryb obrazu","Ustawienie wstępne dźwięku", "Tryb ekranu", "Tryb 3D", "Napisy", "Ścieżka dźwiękowa", "Info"];							
	
var titleSpanFirstArray = ["Sterowanie i połączenia","Podstawowe czynności","Aplikacje do odtwarzania","TV","Ustawienia","FAQ"];
var titleSpanSecondArray = [["TCL nScreen","Przyciski panelu","Łatwa nawigacja","Złącze telewizora","Złącze telewizora","Złącze telewizora","Bezprzewodowa"],["Uruchamianie","Pasek stanu","Źródło"],["Aplikacje do odtwarzania","Media","TCL nScreen"],["Dostosuj kanał i głośność","Lista Kanałów","EPG","Kanały","Ulubione kanały"],["Regulacja obrazu","Regulacja dźwięku","Regulacja kanału","Aktualizuj oprogram.","Język","Blokada rodzicielska"],["Najczęściej zadawane pytania","Najczęściej zadawane pytania","Rozwiązywanie problemów","Rozwiązywanie problemów","Regulamin"]];
var contentSpan1_1Array = [["LISTA:","INFO:","MENU:","ZASILANIE:","ŹRÓDŁO:","PRZEWODNIK:","SMART TV:"],["Pokazuje listę kanałów","Pokazuje informacje o programie","Wyświetla stronę główną","Włącza zasilanie lub tryb czuwania","Przełącza źródło sygnału wejściowego","Pokazuje informacje z EPG (Electronic Program Guide)","Otwiera stronę Smart TV"]];
var contentSpan1_2Array = ["Poprzedni kanał","Następny kanał","Zrób głośniej","Zrób ciszej","Wyświetla stronę główną","Potwierdź opcję","Tryb czuwania / Włączanie"];
var contentSpan1_3Array = ["OK / Przewodnik","Kanał w górę","Kanał w dół","Ciszej","Głośniej","Dostępne jako przyciski ze strzałkami w niektórych funkcjach."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","Adapter AV OUT","LAN","Smartfon","Komputer/Dekoder/DVD","Wzmacniacz dźwięku","Wzmacniacz dźwięku/Monitor","Twój telewizor może nie mieć wszystkich gniazd."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Słuchawki","Adapter AV OUT","SPDIF","Adapter CMP AUDIO IN","Adapter CMP IN (YPbPr)","Urządzenia USB","Urządzenia USB","Słuchawki","DVC / konsola do gier / dekoder / DVD","Wzmacniacz dźwięku","DVC / konsola do gier / dekoder / DVD","Twój telewizor może nie mieć wszystkich gniazd."];
var contentSpan1_6Array = ["Złącze CI","SD","VGA","SCART","Mini SCART","ANTENNA IN","Karta PCMCIA","Karta SD","PC","Dekoder/DVD","Antena / Kabel / Satelita","Twój telewizor może nie mieć wszystkich gniazd."];
var contentSpan1_7Array = ["Tablet","PC","Router","Telefon","TV"];

var contentSpan2Array = [["Naciśnij przyciski ze strzałkami, aby wyświetlić stronę główną.","Następnie naciśnij OK, aby obejrzeć jeden z wyróżnionych programów lub otworzyć aplikację."],["Pokaż datę, sieć, urządzenia itp. w prawym górnym rogu ekranu."],["Wybierz źródło sygnału z urządzeń podłączonych do telewizora za pomocą różnych portów, takich jak TV, AV, HDMI itp."]];

var contentSpan3Array = ["Ciesz się ulubionymi aplikacjami i przeglądaj je na stronie Smart TV","Zobacz zdjęcia, obejrzyj filmy i odtwarzaj muzykę z pamięci USB","Podłącz telewizor oraz smartfon lub tablet do tej samej sieci LAN","Uruchom aplikację TCL nScreen na smartfonie lub tablecie.","Udostępniaj zdjęcia, filmy i muzykę na wielu ekranach i steruj telewizorem za pomocą smartfonu."];

var contentSpan4Array = [["Naciśnij przycisk GÓRA / DÓŁ, aby przełączyć kanały","Naciśnij przycisk LEWO / PRAWO, aby wyregulować głośność"],["Naciśnij przycisk LIST na pilocie, aby zobaczyć zestawienie kanałów","Naciśnij przycisk GÓRA / DÓŁ, aby wybrać kanał"],["EPG to przewodnik po kanałach, który wyświetla godziny emisji programów telewizyjnych. Możesz przełączać, wybierać, oglądać i nustawiać przypomnienia dla programów."],["Wyszukaj i zainstaluj kanały"],["Dodaj i edytuj ulubione kanały na liście kanałów"]];

var contentSpan5Array = ["Ciesz się ulubionymi programami przez aplikacje wideo"];

var contentSpan6Array = [["Naciśnij przycisk MENU, aby wyświetlić opcje ustawień systemu","Otwórz ustawienia obrazu, aby dostosować wartości"],["Naciśnij przycisk MENU, aby wyświetlić opcje ustawień systemu","Otwórz ustawienia dźwięku, aby ustawić opcje"],["Naciśnij przycisk MENU, aby wyświetlić opcje ustawień systemu","Otwórz ustawienia kanałów, aby ustawić opcje"],["Zaktualizuj telewizor, kiedy będzie dostępna nowa wersja oprogramowania"],["Możesz wybrać preferowany język menu"],["Pozwala rodzicom zablokować kanały lub programy, które są nieodpowiednie do dzieci"]];

var contentSpan7_1Array = [["Brak obrazu, brak dźwięku","Sprawdź, czy działa bezpiecznik w obwodzie.","Podłącz inne urządzenie elektryczne do gniazdka elektrycznego, aby sprawdzić, czy działa i zostało włączone.","Wtyczka nie jest poprawnie wpięta do gniazdka","Sprawdź źródło sygnału."],["Obraz normalny, brak dźwięku","Naciśnij przycisk V+, aby zwiększyć głośność.","Ustawienie dźwięku jest nieprawidłowe.","Błąd sygnału w nadawaniu."],["Dźwięk normalny, brak obrazu","Wyreguluj jasność i kontrast","Błąd sygnału w nadawaniu.","Sprawdź, czy nie jest włączony tryb Tylko audio."]];
var contentSpan7_2Array = [["Zakłócenia częstotliwości radiowych","Zakłócenia powodują ruchome fale lub ukośne smugi, a w niektórych przypadkach utratę kontrastu obrazu. Znajdź i usuń źródło zakłóceń radiowych."],["Brak koloru","Dostosuj ustawienia kolorów.","Sprawdź inny kanał. Być może nadawany program jest czarno-biały."],["Nie działa pilot.","Wymień baterie.","Baterie nie są poprawnie zainstalowane. Nie jest podłączone główne zasilanie telewizora."]];
var contentSpan7_3Array = [["Nie jest wyświetlana zawartość urządzenia USB.","Sprawdź, czy urządzenie pamięci masowej USB jest zgodne z telewizorem.","Sprawdź, czy formaty plików audio i obrazów są obsługiwane przez telewizor."],["Odtwarzanie bez dźwięku","Format audio nie jest obsługiwany przez odbiornik telewizyjny."],["Pliki nie są odtwarzane płynnie","Parametry urządzenia pamięci masowej USB mogą ograniczać prędkość transmisji danych do telewizora."]];
var contentSpan7_4Array = [["Na co mam zwracać uwagę, kiedy aktualizuję oprogramowanie?","Podczas aktualizacji oprogramowania nie można wyłączać zasilania.","Podczas aktualizacji oprogramowania unikaj używania pilota.","Zachowaj cierpliwość, ponieważ proces aktualizacji oprogramowania może potrwać nieco dłużej."],["Brak wyraźnych zmian interfejsu po aktualizacji oprogramowania telewizora.","W pewnych warunkach, aktualizacja oprogramowania może nie tylko zaktualizować lub dodać nowe funkcje, ale także poprawić wydajność telewizora bez wyraźnych zmian w interfejsie. Ponadto, interfejs telewizora może czasem tracić stabilność."]];
var termsTitle = "Regulamin";
var termsConditions = ["(Nota prawna) od TCL — producent tego telewizora. ","Ze względu na różne właściwości produktów z usługami SmartTV, jak również istnienia ograniczeń dostępnej zawartości, niektóre własności, zastosowania i usługi mogą być niedostępne we wszystkich urządzeniach i na wszelkim terytorium. Niektóre właściwości SmartTV mogą też wymagać dodatkowych urządzeń peryferyjnych lub opłat członkowskich, sprzedawanych odrębnie. Więcej informacji o poszczególnych urządzeniach lub informacje o dostępności treści znajdują się na naszej stronie internetowej. Usługi i dostępność treści poprzez SmartTV ulegają czasem zmianie bez uprzedniego zawiadomienia. \n   Wszelkie treści i usługi dostępne przez to urządzenie należą do stron trzecich i są chronione prawem autorskim, patentami, znakami towarowymi i innymi prawami ochrony własności intelektualnej. Takie treści i usługi są udostępniane wyłącznie na twój osobisty, niekomercyjny użytek. Żadna treść lub usługa nie może być użyta w sposób nie zatwierdzony przez właściciela zawartości lub dostawcy usług. Nie ograniczając powyższego, bez wyraźnego upoważnienia właściciela odnośnej zawartości lub dostawcy usług, nie wolno modyfikować, kopiować, publikować ponownie, załadowywać, upubliczniać, transmitować, tłumaczyć, sprzedawać, tworzyć dzieł pochodnych, eksploatować, lub rozpowszechniać w jakikolwiek sposób albo poprzez jakiekolwiek medium, żadnej zawartości i usług wyświetlanych przez to urządzenie. \n   WYRAŹNIE POTWIERDZASZ I ZGADZASZ SIĘ, ŻE UŻYWANIE TEGO URZADZENIA JEST TWOIM WYŁĄCZNYM RYZYKIEM I ŻE CAŁE RYZYKO ODNOŚNIE ZADOWALAJĄCEJ JAKOŚCI, DZIAŁANIA I DOKŁADNOŚCI SPOCZYWA NA TOBIE. TREŚCI I USŁUGI URZĄDZENIA ORAZ STRON TRZECICH, SĄ DOSTARCZANE \"TAKIMI JAKIE SĄ\" BEZ GWARANCJI JAKIEGOKOLWIEK RODZAJU, ZARÓWNO WYRAŻONEJ JAK I DOMNIEMANEJ. FIRMA TCL WYRAŹNIE WYKLUCZA WSZELKIE GWARANCJE I WARUNKI W ODNIESIENIU DO URZĄDZENIA ORAZ WSZELKICH TREŚCI I USŁUGI, ZARÓWNO WYRAŹNE LUB DOMNIEMANE, WŁĄCZNIE ALE NIE WYŁĄCZNIE, ZE ZDOLNOŚCIĄ SPRZEDAŻY, ZADOWALAJĄCEJ JAKOŚCI, PRZYDATNOŚCI DO OKREŚLONEGO CELU, DOKŁADNOŚCI, SPOKOJNEGO ZADOWOLENIA I NIENARUSZALNOŚCI PRAW OSÓB TRZECICH. FIRMA TCL NIE GWARANTUJE DOKŁADNOŚCI, OBOWIĄZYWANIA, NIEOGRANICZONOŚCI W CZASIE, ZGODNOŚCI Z PRAWEM LUB PEŁNI JAKIEJKOLWIEK TRESCI LUB USŁUG UDOSTĘPNIANYCH PRZEZ TO URZĄDZENIE I NIE GWARANTUJE, ŻE URZĄDZENIE, TREŚĆ LUB USŁUGI SPEŁNIĄ TWOJE WYMAGANIA, ALBO ŻE PRACA URZĄDZENIA LUB USŁUGI BĘDĄ NIEPRZERWANE I WOLNE OD BŁĘDÓW. W ŻADNYCH OKOLICZNOŚCIACH, WŁĄCZAJĄC W TO ZANIEDBANIE, FIRMA TCL NIE ODPOWIADA, CZY TO W UMOWIE LUB ZA CZYN, ZA ŻADNE SZKODY BEZPOŚREDNIE, POŚREDNIE, PRZYPADKOWE, SPECJALNE LUB WTÓRNE, HONORARIA ADWOKACKIE, KOSZTY, LUB JAKICHKOLWIEK INNE SZKODY WYNIKŁE Z, LUB W POŁĄCZENIU Z JAKIMIKOLWIEK INFORMACJAMI ZAWARTYMI, LUB NABYTYMI W WYNIKU WYKORZYSTANIA URZĄDZENIA, ANI ZA TREŚCI I USŁUGI UDOSTĘPNIONE TOBIE LUB PRZEZ OSOBY TRZECIE, NAWET W RAZIE UPRZEDZENIA O MOŻLIWOŚCI WYSTĄPIENIA TAKICH SZKÓD. \n   Usługi osób trzecich mogą ulec zmianie, być zawieszone, przeniesione, zakończone lub przerwane a dostęp może być w każdym czasie wyłączony bez ostrzeżenia oraz TCL (producent telewizorów marki Thomson) nie jest przedstawicielem i nie gwarantuje, że żadne treści lub usługi pozostaną dostępne w jakimkolwiek czasie. Treści i usługi są przekazywane przez strony trzecie za pomocą sieci i urządzeń transmisji, niezależnie od firmy TCL. Bez ograniczenia ogólnosci tego wyłączenia gwarancji, firma TCL wyraźnie wyklucza jakąkolwiek odpowiedzialność za jakiekolwiek zmiany, przerwy, wyłączenia, usunięcia, zawieszenia jakichkolwiek treści albo usług udostępnianych przez to urządzenie. Firma TCL może nałożyć ograniczenia na użycie lub dostęp do niektórych usług lub treści, w każdym przypadku i bez ostrzeżenia albo odpowiedzialnosci. Firma TCL nie odpowiada również za usługi klienta związane z treściami lub usługami. Wszelkie pytania lub żądania obsługi odnoszące się do treści lub usług należy bezpośrednio kierować do dostawców treści i usług."];

var noChannelListRemind        = ["Nie znaleziono żadnych kanałów. Lista kanałów będzie dostępna po przeskanowaniu kanałów.","Skanowanie w poszukiwaniu kanałów"];
var closeSubtitleRemind   = "Funkcja będzie dostępna po wyłączeniu napisów. Czy chcesz ustawić teraz?";

var estickerTitles = ["Bardzo realistyczne obrazy","Kolor, który ożywa","Wspaniałe, naturalne ruchy","Dynamika obrazu","Skalowanie SR UHD","Świat w trójwymiarze","Szybsze działanie","Przyszłe materiały 4K","Ciesz się światem online","Sprawdź dodatkową zawartość","Zintegrowane tunery cyfrowe","Podłącz wszystkie urządzenia","Różne źródła 4K","Zawartość USB","Ultraszybkie WiFi","Materiały z urządzeń przenośnych w telewizorze","Materiały z urządzeń przenośnych","Treści lokalne","Zatwierdzone przez DivX","Obraz bez śladów łączenia","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Niesamowite wrażenia wizualne dzięki obrazowi z cztery razy większą liczbą detali od Full HD na ekranie UHD","Szeroka gama kolorów zapewnia emocje w każdej scenie z jaskrawą czerwienią i szmaragdową zielenią","Interpolacja klatek 4K i podświetlenie eliminują problem rozmazanych ruchów","Oryginalny obraz jest jeszcze żywszy, aby zapewnić naprawdę dynamiczną ekspresję i doskonały kontrast","Ciesz się wyraźniejszymi niż wcześniej programami telewizyjnymi i filmami na Blu-Ray dzięki technologii super rozdzielczości.","Ciesz się telewizją 3D i oglądaj różne programy telewizyjne w trójwymiarze","Jeszcze lepsza rozrywka dzięki procesorowi z czterema rdzeniami, który zapewnia płynną interakcję i większą wydajność","Obsługa kodeka HEVC (H.265) pozwoli korzystać z nadchodzącej technologii dystrybucji filmów 4K","Bogactwo aplikacji internetowych, usług VOD i kanałów powtórkowych oraz możliwość przeglądania Internetu","Zobacz więcej dodatkowych usług i treści od swoich ulubionych nadawców","Korzystaj z kanałów telewizyjnych w wysokiej rozdzielczości bez dodatkowego dekodera","Możliwość łatwego podłączenia wielu źródeł cyfrowych dostępnych w domu","Telewizja gotowa na przyszłość, możliwość odtwarzania 4K 50/60 Hz za pośrednictwem HDMI 2.0 przez HDCP 2.2","Materiały wideo i zdjęcia bezpośrednio z dysku USB, dysku twardego lub aparatu na dużym ekranie w rozdzielczości 4K","Najnowsza generacja 2x2 MIMO i standard AC zapewnia bezkonkurencyjnie szybki dostępu do Internetu","Ciesz się zdjęciami, filmami i aplikacjami z urządzeń przenośnych na dużym ekranie dzięki technologii lustrzanego ekranu","Zdjęcia, filmy, aplikacje ze smartfona lub tabletu mogą być wyświetlane na dużym ekranie ","Wyświetlaj na dużym ekranie treści lokalne, takie jak zdjęcia i filmy podłączone do sieci lokalnej","Odtwarzaj wynajmowane lub własne filmy zabezpieczone przez DivX","Ultrawąska ramka i supersmukła konstrukcja","Przetestowane i zatwierdzone przez Canal +","Przetestowane i zatwierdzone przez TDT Premium"];

var eManualTextArray = ["E-instrukcja","Wszystkie grafiki wewnątrz dokumentu mają wyłącznie charakter orientacyjny."];
var frontPanelRemind = "Panel przedni zablok.";
var eRPRemind		 = "Tryb sklepowy może nie odpowiadać normą zużycia energii. Czy na pewno?";
var noRelatedChannel = "Brak powiązanego kanału";
var option0624Name          = ["BOP","BFS","Zdarzenie po zdarzeniu","GetUserID","BGM","Reset all","Zreset. sklep","NRM","DVB-T2 i wybór kraju","Tryb HbbTV"];
var DVBT2AndChoice = ["Włącz","Według kraju","Wyłącz"];
var hbbtvServiceRemind = "Usługa  HbbTV dostępna wkrótce.";
var insertWord = "Wstawić";		
var viewDetail = "Zobacz szczegóły";							

var remindOAD  = "Aktualizacja oprogramowania. Nowe zalecane oprogramowanie może istnieć w innym kanale.  Po akceptacji aktualizacji, może automatycznie zmienić kanał. Wykonać to teraz?";

var LEDStatus = ["Miga", "Normalny"];
var netFlixRemind = "Ta funkcja zatrzyma dostęp do  usługi Netflix aż do momentu ponownego zarejestrowania się";
var ESNExplanation = "Elektroniczny numer seryjny";
var resetShopRemind = "System jest w tej chwili restartowany. Prosimy nie wyłączać odbiornika";
var initialSelectOption = "Wybierz jedną opcję:";
var databaseRemind   = "System określił iż baza danych jest uszkodzona z jakiegoś powodu i automatycznie ją naprawił. Naciśnij OK, aby kontynuować";
var Deactivation = "Wyłączanie";
var oadFutureRemind = "Aktualizacja oprogramowania. Nowe oprogramowanie będzie dostępna za %s. Aktualizacja potrwa jakiś czas i ekran może zgasnąć. Nie wyłączać odbiornika w czasie aktualizacji. Po akceptacji, zostawić odbiornik włączony lub w trybie gotowości w czasie zaplanowanym. Czy chcesz odebrać tę aktualizację?";
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Wyjście dźwięku";
var bt_soundOutPutTV = "Głośniki TV";
var bt_soundOutPutBT = "Urządzenie Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth i TV";
var bt_refreshBarName = "Urządzenia";
var bt_settingTips_On = "Włącz Bluetooth i szukaj urządzeń.";
var bt_settingTips_Finding = "Szukanie urządzeń…";
var bt_settingTips_NoDevice = "Brak urządzeń";
var bt_deviceList_State_NoConnect = "Nie połączono";
var bt_deviceList_State_Connecting = "Łączenie…";
var bt_deviceList_State_Connected = "Połączono";
var bt_deviceList_State_Paired = "Sparowano";
var bt_deviceList_Conncect_Failed_Tips1 = "Łączenie nie powiodło się.";
var bt_deviceList_Conncect_Failed_Tips2 = "Upewnij się, że włączyłeś Bluetooth w XXX";
var bt_deviceList_Conncect_Success = "Połączono przez Bluetooth.";
var bt_deviceList_Disconncect_Success = "Rozłączono z urządzeniem Bluetooth.";
var bt_deviceList_Disconnect = "Jesteś pewny, że chcesz rozłączyć się z XXX?";
var bt_tipsTitle = "Rada";
var bt_bluetooth_Pairing_Title = "Parowanie Bluetooth";
var bt_bluetooth_Input_Pin = "Wprowadź PIN:";
var bt_bluetooth_Output_Pin_Tip = "Wprowadź PIN XXXX z klawiatury.";
var bt_bluetooth_Pin_Wrong_Tip = "Zły PIN";
var bt_bluetooth_Remove_Pair_Title = "Kolejka";
var bt_bluetooth_Remove_Pair_Ask = "Skasować urządzenie?";
var bt_bluetooth_module_error = "Błąd modułu Bluetooth!";
		
var netflixDialogOptions = ["OK","Później","Nie pokazuj więcej"];
var netflixDialogContent = "Tysiące filmów do obejrzenia w Netflix. Przejść do serwisu?";
var netflixRemoteDialogContent = "Pilot z przyciskiem Netflix jest już dostępny w sprzedaży. Więcej informacji znajdziesz w poniższej witrynie.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Bieżące źródło","Wszystkie źródła"];
var audioDescriptionName = ["Opis audio","Głośnik","Siła głosu głośnika","Słuchawki","Siła głosu słuchawek","Siła głosu AD","Urządzenie Bluetooth","Głośność urządzenia Bluetooth"];
var audioDescriptionOptions = ["Wyłącz","Normalny","Opis audio"];							
var volumeOffRemind = 'W menu Ustawienia ustaw XXX na „Wł.””.';
var switchSourceRemind   = " włożone. Czy chcesz teraz włączyć to urządzenie?";

var mEPSRemind		 = "Tryb sklepowy nie spełnia norm dotyczących zużycia energii. Czy włączyć mimo to ?";
var parentRatingAUOptions = ["Bez blokowania", "Zablokuj G i powyżej(opcja)", "Zablokuj PG i powyżej",
							 "Zablokuj M i powyżej", "Zablokuj MA i powyżej", "Zablokuj AV i powyżej",
							 "Zablokuj R i powyżej", "Zablokuj wszystkie"];
var mEPSTips		= ["Aktualny tryb obrazu nie spełnia norm dotyczących zużycia energii. Zalecany jest tryb standardowy.",
					   "Twój TV jest w trybie sklepowym.\n Aby przełączyć na tryb DOM wejdź w ustawienia."];

var footballModeName = "Tryb sportowy";
var resetStadium = "Stadion";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Zakończ","0","Zoom+",
                       	   "Zakończ",
                       	   "Lista","0","Tekst","Przewodnik","Wejdź","Zakończ","Menu","Napisy","Info",
                       	   "Zatrzymaj",
                       	   "Info","Menu","Zakończ"
                       	   ];
var nscreenTips = "Aplikacja GuideOn pomaga użytkownikom poruszać się wśród ogromnej ilości treści.";
var nscreenContent = 'Kroki: 1. Kliknij opcję „TCL nScreen” na telefonie.  Podłącz telefon do telewizora poprzez tę samą sieć LAN; 2. Kliknij opcję „GuideOn”, aby przejść do aplikacji GuideOn; 3. Aplikacja GuideOn zapewnia funkcjonalność analogiczną do drukowanego program telewizyjnego, informując użytkowników o dostępnych treściach telewizyjnych;';
var singalBrokenoffTips = "Sygnał został przerwany. System nie może ukończyć pobierania.";
var contentSpan1_1Array_AU =  [["ZASILANIE:","ŹRÓDŁO:","MENU:","POWRÓT:","INFO:","HOME:","WYJŚCIE: ","LISTA:"],
                            ["Włącz zasilania lub tryb czuwania","Wybierz wejście",
                             "Pokaż menu ustawień TV","Wróć do poprzedniego menu lub wyjdź z aplikacji.", "Pokazuje informacje o programie",
                             "Wyświetla stronę główną","Wróć do poprzedniego menu lub wyjdź z aplikacji.","Pokazuje listę kanałów"]];
var guideDescriptionWords ="Proszę zeskanować kod QR aby pobrać aplikację na swój telefon";
var settingNoticeSourceName ="Automatyczne źródło";
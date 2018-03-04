
var all_country 	= ["Australia","Austria","Belgio","Bulgaria","Croazia","Repubblica Ceca","Danimarca","Finlandia","Francia","Germania",
						"Grecia","Ungheria","Italia","Lussemburgo","Paesi Bassi","Norvegia","Polonia","Portogallo","Romania","Russia",
						"Serbia","Slovenia","Spagna","Svezia","Svizzera","Regno Unito","Nuova Zelanda"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Lettonia","Slovacchia","Turchia","Irlanda","*","Filippine","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"Cina","*","*","*","*","*","*","Altri","Lituania"/*新添加的，底层结构体中没有*/,"Ucraina"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Lituania"];								
				
var all_language 	= ["Ceco","*","Danese","*","*","Tedesco","Inglese","Spagnolo","Greco","Francese",
						"Croato","*","Italiano","Ungherese","Olandese","Norvegese","Polacco","Portoghese","Russo","Rumeno",
						"Sloveno","Serbo","Finlandese","Svedese","Bulgaro","Slovacco","*","*","Gaelico","*",
						"Gallese","Arabo","Irlandese","Lettone","*","Turco","Estone","Olandese"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Audio originale"/*Qaa*/,"Non definito"/*Undetermined*/,"*","Sconosciuto",
						"Non definito","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Basco","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Bielorusso","*","*","Catalano","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiziano","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandese","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lituano",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantico","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Televideo",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ucraino","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Disattiva","Attiva"];
var okCancel		= ["OK","Annulla"];
var yesNo			= ["SÌ","NO"];
var level			= ["Disattiva","Basso","Alto","Medio"];
var manualAuto		= ["Manuale","Auto"];
var homeShop		= ["Casa","Negozio"];
var picPreset		= ["Standard","Dynamic","Naturale","Cinema","Cinema digitale","Personale"];
var picColorTemp	= ["Freddo","Normale","Caldo","Caldo2","Utente"];
var pic3dNavig		= ["Manuale","Auto","Semi-Auto"];
var _3dOptions		= ["Modalità 3D","Da 3D a 2D","Interruttore L-R","Profondità di Campo"];
var pic3DMode       = ["Disattiva","Da 2D a 3D","Lato con Lato","Alto e Basso","Interleaving linea"];
var picEcoOptions	= ["Risparmio energetico","Sensore luci","Attenuazione locale","Gestione indipendente della retroilluminazione"];
var picGeoOptions	= ["Geometria","Posizione O.","Posizione V.","Clock","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["Guadagno R","Guadagno V","Guadagno B","Compensazione R","Compensazione V","Compensazione B"];
var souOptions		= ["Preimpostazione del suono","Bilanciamento","Ritardo audio","SRS TSHD","Contr. aut. volume",
						"Tipo SPDIF","Ritardo SPDIF","Posizionamento televisore","Lingua audio","Tipo di suono",
						"Descrizione audio","Tipo di uscita audio digitale","Impostazioni Dolby professionali"];
var soundOutputoptions =["Uscita DAP altoparlante TV","Uscita codifica AVR esterna"];
var inteligenteqoptions 	=["Focalizzato","Pieno"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Disattiva"];
var colorSpace      = ["Auto","Nativo","Utente","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Virtualizzatore surround","Esaltatore del dialogo","Esaltatore dei bassi","Volume intelligente","Intelligenza multimediale","EQ grafico","EQ intelligente"];
var chOptions		= ["Scansione dei canali","Elenco dei canali","EPG","Organiser","Diagnosi canale",
						"timeshift","Sottotitoli","Televideo","Tipo lista canali"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Forza segnale","Qualità del segnale","Frequenza (KHz)","ID servizio","ID rete","Nome di rete"];
var chScanOptions	= ["Paese","Modalità sintonizzazione","Ricerca automatica","Aggiornamento automatico","Scansione manuale analogica",
						["Scans. Man. cavo","Scans. Man. antenna","Sintonizzazione manuale satellite"],"Impostazione antenna satellitare","Selezionate rete preferita","Annulla lista canali",];
var favNetDes		= "Si prega di selezionare la rete preferita";
var tuner			= ["Cavo","Antenna","Satellite"];//Satelite 无翻译
var passError		= "Password non corretta.\nInserirla di nuovo!";
var chType			= ["Canali analogici:  ","Canali digitali:  "];
var chScanStatus	= ["Stato: Scansione","Stato: scansione completata","Stato: scansione annullata","Stato: errore scansione"];
var chScanPara		= ["Frequenza (KHz)","Modulazione","Vel. Simbolo (Ksym/s)","ID rete","Sistema",
						"Sintonizzazione fine","Forza segnale","Qualità del segnale","Modo scans.","Id Canale"];
var chScanParaMHZ      = ["Frequenza (MHz)"];
var chAtvManSys		= ["EUR OCCID.","EUROPA OR.","Regno Unito","Francia"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Azzerare l'elenco canali?";
var chDeletDes		= "Si vuole cancellare il canale?";
var chOperator		= ["Ziggo","UPC","Altri"];
var chScanType		= ["Digitale & Analogico","Digitale","Analogico"];
var chScanMode		= ["Completo","Avanzato","Veloce"];
var bookingModes	= ["Registra","Promemoria"];
var dayName			= ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];
var monthName		= ["Gen", "Feb","Mar","Apr","Maggio","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
var filter			= ["Filtro","Tipo","Tipi secondari"];
var chEpgFirstGenre	= ["Cinema","Novità","Spettacolo","Sport","Bambini","Musica","Arte","Sociale","Educazione","Tempo lib.","SPECIALE"];
var chEpgSecondGenre= [["Dramma","Investigativo","Avventura","Fantascienza","Commedia","Soap opera","Romantico","Serio","Film per adulti"," "," "," "],
						["Attualità","Previsioni meteo","Notiziari","Documentario","Discussione"," "," "," "," "," "," "," "],
						["Spettacolo","Giochi","Varietà","Talk Show"," "," "," "," "," "," "," "," "],
						["Sport","Eventi speciali","Programmi sportivi","Calcio","Tennis",
							"Sport a squadre","Atletica","Motori","Sport acquatici","Sport invernali",
							"Ippica","Arti marziali"],
						["Bambini","Programmi pre-scolastici","Intrattenimento da 6 a 14 anni","Intrattenimento da 10 a 16 anni","Informativo","Cartoni"," "," "," "," "," "," "," "],
						["Musica","Rock","Serio","Folk","Jazz","Musical","Balletto"," "," "," "," "," "],
						["Arte","Arti figurative","Belle arti","Religione","Cultura popolare",
							"Letteratura","Film","Sperimentale","Diffusione","Nuova comunicazione",
							"Riviste d'arte","Moda"],
						["Sociale","Programmi","Economia","Personaggi importanti"," "," "," "," "," "," "," "," "],
						["Educazione","Natura","Tecnologia","Medicina","Paesi stranieri","Scienze sociali","Educazione avanzata","Lingue"," "," "," "," "],
						["Passatempo","Turismo","Artigianato","Motori","Fitness e Salute","Cucina","Annunci","Giardinaggio"," "," "," "," "],
						["Lingua originale","Bianco e Nero","Non pubblicato","Trasmissione dal vivo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Ignora canale","Ordina canali","Modifica canale","Elimina canale","Scambia canale","Canale inserto"];
var chEditPara 		= ["Nome di rete","Numero canale","Nome canale","Frequenza","Sistema colore","Sistema colore"];
var chSatTitles		= ["Tipo satellite","Impostazione antenna satellitare","Seleziona Satellite"];
var chSatEidtOptions= ["Nome satellite","Posizione","LNB Potenza","Frequenza LNB (MHz)","Ingresso Diseqc",
						"Tono 22KHz","Tone Burst","Frequenza (KHz)","Vel. Simbolo (Ksym/s)","Polarizzazione",
						"Forza segnale","Qualità del segnale","Stato satellite"];
var chSatAutoPromt	= [["Tutto","Rete"],
						["Tutto","Gratis"]];
var chSatAutoScanOptions=["Seleziona Satellite","Modo scans.","Canali"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universale",];
var chSatDiSEqCInput= ["Disabilita","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Attiva","Disattiva"];
var chSatToneBurst	= ["Disabilita","Burst A","Burst B"];
var chSatPolarization= ["Orizzontale","Verticale"];
var chSatSetupOptions=["Tipo antenna","Sintonizzatore","Frequenza banda"];
var chSatAntennaType= ["Cavo singolo","Universale"];
var chSatUserBands	= ["Banda utente 1","Banda utente 2","Banda utente 3","Banda utente 4","Banda utente 5","Banda utente 6","Banda utente 7","Banda utente 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Definito dall'utente"];
var pleaseSelectSat = "Si prega di selezionare prima i satelliti!";
var subOptions		= ["Sottotitoli","Lingua dei sottotitoli digitale","Lingua dei sottotitoli digitale 2°","Tipo do sottotitoli"];
var ttxOptionsCon      = ["Lingua pagina decodifica","Lingua televideo digitale"];
var subType			= ["Normale","Non udenti"];
var netIntf     	= ["Ethernet","Senza fili"];
var netConnDes		= ["TV sta testando il collegamento a internet.\nAttendere",
						"Test di connessione alla rete andato a buon fine.",
						"Test di connessione alla rete non riuscito."];
var netSsidError	= "La lunghezza valida di un SSID è da 1 a 32 caratteri. Si prega di controllare la SSID.";
var netOthers		= ["Codice PIN"];
var netWlessAutoDes	= ["Assicurarsi che il PIN seguente sia installato nell’Access Point prima di cliccare OK.",
						"Premere il tasto sull’Access Point entro 120 secondi prima di cliccare OK."];
var netConnRemind	= ["Password errata!",
						"Collegamento, si prega di aspettare!",
						"Connessione avvenuta e IP ottenuto!",
						"Errore link",
						"TV sta ricercando AP\nAttendere prego",
						"Non c'è alcun dispositivo senza fili collegato al TV!"];
var netWireIpOptions= ["Impostazione IP","Tipo indirizzo","Indirizzo IP","Maschera di sottorete","Porta predefinita","DNS primario","DNS secondario"];
var netWireConnRemind= ["Inserisca un valore compreso tra 0 e 255.",
						"Collegato con successo!",
						"Si prega di inserire un indirizzo valido",
						"Collegato con successo!",
						"Connessione fallita!",
						"Collegamento, si prega di aspettare!",
						"Si prega di inserire un valore tra 1 e 223."];
var netFlixOptions	= ["Disattiva","ESN"];
var netFlixDes	 	= ["Sicuro di voler disattivare?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Aggiorn. Software";
var netUpdateDialogTitle = "Aggiornamento software";
var netBGDownloadTitle 	= "In download";
var netUpdateLoadingPrompt= ["Ricerca aggiornamenti, si prega di attendere!",
							"Download software… si prega di attendere!",
							"NON spegnere il televisore durante l'aggiornamento del software!",
                            "L'aggiornamento software obbligatorio è scaricato automaticamente in background!"];
var netUpdatePrompt= ["Congratulazioni, la sua versione del software è la più recente!",
						"Nuova versione XXXX del software trovata. Desidera scaricarla adesso? Quest’operazione potrebbe richiedere del tempo a seconda del suo stato di rete.",
						"Errore di login!",
						"Impossibile ricevere dati, si prega di provare di nuovo più tardi!",
						"Analisi Aggiornamento fallita Premere on off con telecomando!",
						"Errore link",
						"Download software completato con successo. Avviare il processo di aggiornamento TV? ",
						"Dati persi! Scaricamento fallito!",
						"Errore nel controllo del pacchetto, riprovare!",
						"Rete anormale. Controllare e riconnettersi.",
						"Errore aggiornamento! Riavvia TV!",
						"L'aggiornamento è stato cancellato inaspettatamente. La preghiamo di ricominciare l'aggiornamento dal network.",
						"Il software è stato scaricato correttamente in secondo piano. Desidera effettuare l'aggiornamento?"];
var netUpdateButtonText = ["Scarica", "Aggiorna", "Più tardi", "Mai", "OK","Continua"];
var autoDetectPrompt = ["Nuova versione XXXX del software trovata. Desidera scaricarla adesso? Quest’operazione potrebbe richiedere del tempo a seconda del suo stato di rete.",
						"È stata trovata la versione XXXX del nuovo software. Effettuare l'aggiornamento adesso?",
						"L'ultimo  processo di aggiornamento dal network è stato interrotto. Si deve riifare l'aggiornamento.",
                        "Il download della nuova versione software XXXX non è completo. Si desidera continuare ora?",
                        "Software scaricato, si desidera aggiornare ora?"];
var sysOptions		= ["Manuale elettronico","Lingua menu","Temporizzatore","Blocca","Impostaz. Ingresso",
						"Aggiorn. Software","Luogo","Modalità HbbTV","Cookie","Interfaccia comune",
						"Impostazioni avanzate","Azzera negozio","Indicatore LED"];
var sysResetDes		= "Sicuro?";
var sysMenuLangOptions=["Lingua","Lingua audio preferita","2a lingua audio preferita"];
var sysTimerOptions	= ["Fuso orario","Nome regione","Clock","Timer di disattivazione","Standby automatico", "Country region"];

var sysTimeZone		= ["Come ente diffusore","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Disattiva","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Disattiva","4 ore","6 ore","8 ore"];
var sysRegionName	= ["Madrid ","Canarie"];
var sysClockOptions	= ["Sincr. autom.","Data","Orario","Temporizzatore di accensione","Temporizzatore",
						"Accendi canale","Temporizzatore di spegnimento","Temporizzatore"];
var sysTimer		= ["Disattiva","Quotidiana","Una volta"];

var sysInputSet		= ["Nessuna etichetta","DVD","Blu-ray","HDD","DVDR",
						"Reg. HD","Gioco","VCR","PC","STB digitale",
						"STB HD dig ","Camera","Registratore","Altro"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Via USB","Via rete","Per canale"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Non è possibile trovare il nuovo software in modalità over-the-air!",
						"È stata trovata la versione XXXX del nuovo software. Effettuare l'aggiornamento adesso?",
						"Si prega di inserire una chiavetta USB.",
						"Errore nel controllo del pacchetto, riprovare!",
						"Aggiornamento! Non rimuovere il dispositivo di memoria o spegnere il TV. Il tV ripartirà entro 30 secondi",
						"Il software è stato aggiornato con successo. \n Il televisore si riavvierà!",
						"Nuova versione XXXX del software trovata. Desidera scaricarla adesso? Quest’operazione potrebbe richiedere del tempo a seconda del suo stato di rete.",
						"In download",
						"Download software completato con successo. Avviare il processo di aggiornamento TV? ",
						"Aggiorn. KO!",
						"Ricerca file aggiornamento in corso",
						"Il software è stato aggiornato con successo.\nRiavvia il televisore."];
var sysProductInfo	= ["Vers. Attuale","Nome prodotto","Nome costruttore","Nome del telaio"];
var sysCiDes		= ["Nessuna scheda CI presente."];
var sysAdOptions	= ["Registrazione DivX(R) ","Cancellazione registrazione DivX(R)","T-Link","Errore di autorizzazione","Conferma di deregistrazione",
						"Conferma Noleggio","Noleggio scaduto","ID dichiarazione Bluetooth"];
var sysRegistDes	= ["Devi registrare il dispositivo per riprodurre video DivX protetti",
						"Codice Registrazione:",
						"Registrare su http://vod.divx.com"];
var sysDregistDes	= ["Codice di cancellazione:",
						"Cancellare la registrazione su http://vod.divx.com",
						"Continuare la registrazione?"];
var mediaAuthorization = ["Il suo dispositivo non è autorizzato a riprodurre questo video DivX(R) protetto."];
var deregistrationConfrimation = ["Il dispositivo è già registrato.","Sicuro di voler annullare la registrazione?"];
var rentalConfirmation = "Questo DivX(R) a noleggio ha consumato XXXX visualizzazioni su YYYY. Continuare?";
var rentalExpired 	= "Il noleggio del DivX(R) ha usato XXXX visualizzazioni su YYYY. Il noleggio DivX è terminato.";
						
						
var sysLockOptions	= ["Blocco canale","Blocco intervallo di tempo","Classificazione controllo genitori","Blocco input","Blocco comandi frontali","Blocca installazione",
						"Cambia password","Volume max.","Elimina tutto"];
var sysTimeIntervals= ["Tipo blocco","Orario inizio","Orario fine"];
var sysRatingOptions= ["Nessuno","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Rating X (Spagna)"];
var changePass		= ["Cambia password","Nuova password","Conferma password"];
var changePassDes	= ["Password non corretta.\nInserirla di nuovo!",
						"La password non corrisponde.\nInserirla di nuovo!",
						"Password impostata con successo!",
						"Questo codice è troppo semplice per essere impostato come password. \nInseritene uno nuovo!"];
var sysPowerOnChOptions= "Seleziona modo";
var sysPowerOnCh	= ["Ultimo stato","Selezione utente"];
var netWlessSecu    = ["Aperto","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nessuno","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Non supportato"];
var netWlessSecu3	= ["Nessuno","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Non supportato"];
var netOptions		= ["Collegamento a internet","Interfaccia","Impostazioni wireless","Impostazioni IP","Informazioni",
						"Test di collegamento","DLNA","Telecomando TV","Impostazioni Netflix","Collegamento TV WiFi",
						"Tipo indirizzo","Indirizzo IP","Maschera di sottorete","Porta predefinita","DNS primario",
						"DNS secondario","SSID","BSSID","Inserire SSID:","ID Utente"];
var chEditDes		= ["Numero canale duplicato!","Premere il tasto rosso per cancellare il carattere attuale!","Numeri di canali non valido."];
var chEpgNoProgram	= "Nessuna informazione del programma disponibile ora, si prega di cercare prima di canali!";
var chEpgWords		= ["Guida dei programmi","Nessun dato programma.","Canale bloccato!","Nessun dettaglio programma.","Nessun titolo programma."];
var chEpgBooking	= ["calendario Info", "Numero canale","Data di inizio","Orario inizio","Orario fine",
						"Tipo di ripetizione","Tipo di programmazione","Aggiungi lista","Sostituisci","Cambia",
						"Aggiungi/Modifica"];
var epgHotKey		= ["Giorno precedente","Giorno successivo","Filtro","Lista programmi","Aggiungi lista"];
var chEpgBookRemind	= ["Ora di inizio errata","Ora di fine errata","Programmazione duplicata","Salvataggio a buon fine.","Cancellato con successo!"];
var chSchePara		= ["Lista programmi","Orario inizio","Data di inizio","Titolo programma","Nome canale",
						"Durata","Ripeti","Programmazione","Modifica","Cancella"];
var dateTimer		= ["Una volta","Quotidiana","Settimanale"];
var scheduleDeleteReminds="Si vuole cancellare questa programmazione?";
var scheduleNoLists	= "Non esiste lista di programmazione. Premere il tasto \"Rosso\" per aggiungerne una.";
var chListWords		= ["Elenco dei canali","Seleziona Lista","Modalità sintonizzazione","Aggiungi ai preferiti","Rimuovi",
						"Seleziona l'elenco canali","Seleziona la modalità del sintonizzatore","Cambia"];
var chListType		= ["Tutto","Digitale","Analogico","Radio","Gratis","Preferiti"];
var chAutoScanOptions=["Selezionare operatore","Tipo di canale","Ricerca automatica"];
var souSoundType	= ["Non valido","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam Dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musica","Cinema","Voce chiara","Standard","Personale"];
var picAdRgbMode	= ["Disattiva","Solo Rosso","Solo Verde","Solo Blu"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Contrasto Dinamico","Nitidezza Movimento LED",
						"Tonalità pelle","Modalità film","Modalità gioco","Temperatura colore","Bilanciamento Del Bianco",
						"Fermo immagine","Black Stretch","Sovrascansione","Gamma","Modalità HDMI","Bilanciamento del bianco 10P.","Estensione colore",
						"Riduzione sfuocatura","Riduzione tremolio","Spazio colore","Nitidezza movimento"];
var pic10Pwhite     = ["Intervallo","Rosso","Verde","Blu","Azzera","Colore ","Giallo","Ciano","Magenta"];
var picMotionClarity = ["Modalità Movimento","Interpolazione movimento","Nitidezza Movimento LED","Riduzione sfuocatura","Riduzione tremolio","Azzera"];
var picMotionMode   = ["Auto","Film","Liscio","Elimina","Sport","Personalizzato"];
var picResetDes		= "Tutte le impostazioni personali saranno resettate. Si è sicuri di voler effettuare l'azione selezionata?";
var pic10PReset     = "Si è sicuri di voler resettare il bilanciamento del bianco 10P?";
var picMotionReset  = "Si vuole resettare la Nitidezza in Movimento?";
var picColorSpaceReset    = "Sei sicuro di voler resettsre lo spazio colore?";
var picOptions		= ["Modalità Immagine",
						"Retroilluminazione","Luminosità","Contrasto","Saturazione","TONALITÀ","Nitidezza","Temperatura colore","Modalità Schermo","Formato automatico",
						"Esaltazione Sport","3D","Navigazione 3D","ECO Impostazioni","Geometria",
						"Impostazioni avanzate","Applica la modalità immagine","Reimposta immagine"];
var picSize			= ["Formato 16:9", "Formato 4:3", "Formato 14:9", "Cinerama",
						"Zoom 16:9 ", "Zoom up 16:9 ","Zoom 14:9 ","Stretch Zoom","Wide zoom ",
						"Zoom 2","Wide Zoom 2","Abbinamento schermo nativo","Punto per punto","Originale","Panorama"];
var others			= ["Volume","Trasmissione","Password","Stato","Salva","Sostituisci","Avvio","Esci","Cerca","Cancella",
						"Nessuno","Automatico","Scansione","Sicurezza","Connetti","Aggiorna","Riprova","Arresta","Impostazioni","Canali",
						"Modifica","Inserisci","Segnale!","Termina","Stereo","Audio","Principale","Nessun audio","Suggerimenti","Azzera",
						"Personalizzato","Configurazione","Memorizza ","Utente","Chiudere tastiera","Modalità Sicurezza","Ogni giorno","Lista PVR"];
var direction		= ["Sinistro","Destro","Su","Giù"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Sconosciuto"];
var soundChannels   = ["Sconosciuto","Mono","Secondario","Dual Mono","Stereo","Sub Stereo","Dolby Surround Stereo","Surround 2 canali","Surround","3.0 Ch","4.0Ch","5.0Ch","Lfe Mono","Lfe Dual Mono","Lfe Stereo","Lfe 2 canali surround","Lfe Surround","3.1Ch","4.1Ch","5.1 canali","7.1 canali"," Stereo combinato","Mono Fmrdo","Stereo Fmrdo","Mono Nicam Mono Fm","Mono Fm Stero Nicam","Mono Fm Dual Nicam","Sinistro","Destro","Altri"];
var prompts			= ["Regolare le impostazioni immagini che si adattano al meglio all'ambiente di visione.",
						"Regolare i livelli di luminosità. Più il valore è vicino a 100, più luminoso sarà lo schermo.",
						"Regolare i livelli di contrasto. Più il valore è vicino a 100, maggiori sono le differenze tra zone scure e chiare.",
						"Regolare i livelli di saturazione. Più il valore è vicino a 100, più forte il colore.",
						"Regolare i livelli di nitidezza. Più il valore è vicino a 100, più chiari sono i dettagli.",
						"Aggiungere il livello di retro-illuminazione. Più il valore è vicino a 100, più luminoso è lo schermo.",
						"Regolare i livelli di tinta. Quest'impostazione modifica i toni del colore.",
						"Selezionare il formato immagine che meglio si adatta al programma che si sta guardando.",
						"Configurazione delle opzioni di risparmio energetico.",
						"Regolare le impostazioni della geometria dello schermo quando si collega un dispositivo PC.",
						"Selezione di ulteriori impostazioni avanzate dell'immagine.",
						"Ripristinare tutte le impostazioni dell'immagine ai valori predefiniti.",
						"Selezionare la modalità audio che meglio si adatta alle proprie preferenze.",
						"Regolare il bilanciamento del volume tra canale sinistro e canale destro.",
						"Il sistema di recupero suono TruSurround HD fornisce una resa audio ricca e chiarezza a frequenze basse ed alte.",
						"Il Formato Digitale di Interfaccia collega l'uscita suono digitale del televisore all'apparecchio audio dell'home theater.",
						"Selezionare la lingua dell'audio che meglio si adatta alle proprie preferenze.",
						"Permette agli Ipovedenti di godere dei programmi televisivi.",
						"Testare l'immagine, l'audio e il segnale del televisore.",
						"Selezionare il tipo di elenco canali che meglio si adatta al segnale TV.",
						"Selezionare la lingua dei sottotitoli del programma visualizzati in fondo allo schermo.",
						"Visualizzare il testo e le immagini del canale corrente.",
						"Digital Living Network Alliance. Godersi musica, foto e video attraverso la rete di casa da altri dispositivi come un PC.",
						"Visualizzare i contenuti dello smartphone sul televisore ed utilizzare lo smartphone come telecomando per il televisore.",
						"Visualizzare i contenuti sul televisore da un dispositivo Android compatibile con Miracast.",
						"Impostate un blocco per il televisore.",
						"Selezionate un nome per il vostro dispositivo.",
						"Selezionate l'ambiente di visione.",
						"Ripristinare tutte le impostazioni di sistema ai valori predefiniti."];
var initialTitle	= ["Benvenuti","Configurazione iniziale"];
var initialPrompt	= ["Effettua ora il Setup iniziale, un Mondo di Esperienze Eccitanti ti aspetta!",
						"Selezionare la lingua:",
						"Selezionare il Paese:",
						"Selezionare località:",
						"Selezionare il tipo di connessione di rete:",
						"Selezionare la modalità di connessione di rete cablata:",
						"Impossibile collegarsi a xxxxxxxxxx! Si prega di collegare il dispositivo secondo il diagramma seguente o di selezionare Sinistra per resettare.",
						"Collegato a xxxxxxxxx! Si prega di selezionare Destra per continuare.",
						"1) Il televisore potrebbe essere già dotato di un adattatore Wireless\n 2) O, se è fornito un adattatore wireless USB, collegarlo al televisore. Quindi si prega di selezionare la modalità di connessione di rete wireless.",
						"Scansione. Si prega di aspettare…",
						"Non c'è alcun dispositivo senza fili collegato al TV!",
						"Assicurarsi che il seguente codice PIN sia installato nell'AP prima di fare clic su 'Avanti'.",
						"SI prega di premere sul tasto AP entro 120 secondi prima di premere Destro!",
						"WPS (Wi-Fi Protected Setup, configurazione Wi-Fi protetta)",
						"PIN (numero personale di identificazione)",
						"PBC (Premere tasto configurazione)",
						"È possibile accedere ai seguenti contenuti solo con una connessione di rete. Si vuole saltare le Impostazioni di Rete?",
						"Vi sono nuovi aggiornamenti software da scaricare, questo potrebbe impiegare un po' di tempo a seconda dello stato della rete.",
						"L'aggiornamento del software del televisore consente di avere a disposizione le funzioni e i servizi più recenti.",
						"Non si potranno sfruttare le ultime caratteristiche e servizi. Volete saltare l'Aggiornamento Software?",
						"Premere il tasto Destro per continuare.",
						"Non spegnere durante l'aggiornamento perché ciò potrebbe causare il malfunzionamento del televisore.",
						"Se non si desidera aggiornare, selezionare NO.",
						"Aggiornamento, si prega di attendere.",
						"Inoltre è possibile aggiornare il software in AGGIORNAMENTO SISTEMA/SOFTWARE.",
						"La nazione selezionata necessita dell'impostazione password. \nInserite il codice per il vostro televisore e confermatelo.",
						"This code is too simple.\nPlease use different digits.",
						"Congratulazioni! Le impostazioni iniziali sono complete. È possibile modificare la configurazione attraverso il menù principale ed i sotto menù correlati.",
						"Selezionare una modalità di sicurezza:",
						"Si prega di selezionare la modalità di collegamento della rete wireless:",
						"Rete"];
var initNetCabAndDonRe = ["Nessun cavo di rete collegato, inserire un cavo di rete!","Nessun adattatore wireless integrato né adattatore USB wireless fornito."];
var initChPrompt = ["Installazione canali TV","Si prega di selezionare il tipo di scansione dell'Antenna.","Sintonizzazione automatica in corso...","Sono stati trovati i seguenti canali Antenna:","Selezionare il tipo di scansione Cavo.","Si prega di selezionare un operatore dalla seguente lista.","Configurare le informazioni di scansione","I seguenti canali via cavo sono stati trovati:","Selezionare un operatore dal seguente elenco","Selezionare i satelliti da scansionare o modificare il satellite selezionato","Impostare i parametri del satellite","Sono stati trovati i seguenti canali, e la scansione dei canali può essere eseguita nuovamente in Canali/Scansione Canali"];
var initClockPrompt = ["Ottenere l'ora via rete!",
						"Si prega di impostare Data ed Ora:"];
var initialOptions	= ["Ambiente","Configurazione della rete","Aggiorn. Software","Installazione dei canali","Clock"];
var initialHotkeys	= ["Indietro","Seleziona","Successivo"];
var initLocations	= ["Casa","Negozio","Negozio con demo"];
var initNets		= ["Cablata","Senza fili","Non ho una connessione di rete"];
var initWireManuals	= ["Indirizzo IP","Maschera di sottorete","Porta predefinita","DNS primario","DNS secondario"];
var initSoftUpdates = ["Aggiorna adesso","Aggiorna più tardi"];
var initChannelIns	= ["Continua","Non desidero installare canali"];
var initChScanTypes	= ["Digitale & Analogico","Digitale","Analogico","Non desidero eseguire la scansione"];
var initChDvbts		= ["Canali Antenna ATV","Canali Antenna DTV"];
var initChDvbcs		= ["Canali via cavo ATV:","Canali via cavo DTV:"];
var initChDvbss		= ["Canali satellitari:"];
var initChDvbSOther	= ["Non desidero eseguire la scansione del satellite"];
var initEndConnectedStatus= ["Scollegato","Wi-Fi collegato","Cavo collegato"];
var initEndInstallations= "Canali XXXX installati";
var initEndUpdate	= ["Aggiornato"];

var audioScenes 	= ["Scrivania","Montaggio a parete"];			
var screenSavers	= ["Nessuna informazione del programma disponibile ora, si prega di cercare prima di canali!",
						"Nessun segnale!",
						"Codificato",
						"Solo dati",
						"Programma audio",
						"Nessun audio e video",
						"Non disponibile",
						"Nessun Televideo",
						"Nessun dato programma.",
						"Programma bloccato!",
						"Programma bloccato!\nPremere OK e inserire il codice.",
						"Nessun dettaglio programma.",
						"Programma non adatto ai minori. \n Premere OK ed inserire il proprio codice.",
						"Canale bloccato!",
						"Canale bloccato!\nPremere OK e inserire il codice.",
						"Inserimento bloccato!\nPremere OK e inserire il codice.",
						"Non supportato!",
						"Questo servizio non è attualmente disponibile",
						"Ins. Bloccato!",
						"Nessun titolo programma.",
						"Nessuna funzione"
						];
var chBookingPromt	= ["Il canale corrente ha una registrazione programmata, il televisore inizierà a registrare.",
						"È stata trovata una registrazione programmata.\n Passare a XXXX per registrare",
						"Un avviso è stato programmato per il canale corrente",
						"È stato trovato un avviso programmato.\n Passare a XXXX"];
var timeUnit		= ["Sec","minuto"];
var ciPromt			= ["I dati della rete sono cambiati. Per aggiornarli si può fare una scansione aggiornamenti.",];
var othersPromt		= ["Attendere...",];
var menuOptions		= ["Immagine ","Suono","Canale","Rete","Sistema"];
var optionOptions	= ["Modalità Immagine","Preimpostazione del suono","Fermo immagine","T-Link","timeshift","Registrazione video USB","Lista programmi","Impostazioni"];
var optionTLinkPromt= [["Accensione automatica","Standby automatico","Menu guida"],
						["Accensione","Standby","Amplificatore di volume"]];
var powerPromt		= ["La TV si spegnerà a breve! Premere un tasto qualsiasi per cancellare."];
var ttxLanguage		= ["EUR OCCID.","EUROPA OR.","Russo","Arabo/Ebreo","Farsi","Arabo","Bielorusso","Greco","Turco"];
var ttxOptions		= ["Mostra","Ciclo sottopagine","Lingua","Pagina degli allarmi","Notiziario flash"];
var weekday         = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
var lcnConfflict	= "Questo programma ha problemi di ricezione. Esiste un'altra versione disponibile al canale **%d.";
var inShopMode		= "Il televisore è in Modalità Negozio. Per la modalità casa, si prega di selezione \"Sistema\" e di cambiare \"Località\" nel menù.";
var nitRefresh		= "I dati di rete sono cambiati. Avviare la scansione di aggiornamento?";
var picHDMIMode     = ["Auto","Grafica","Video"];

var glassRemind    	= ["Si prega accoppiare gli occhiali 3d con il televisore. \n (Tenere premuto il tasto ACCENSIONE sugli occhiali 3D).","Gli occhiali 3D sono collegati al televisore.",""];
var pvrRemind 		= ["Non estrarre il dispositivo USB né interrompere l'alimentazione."];
var pvrConName   	= ["Registrazione video USB","Informazioni del programma:",["Nota: Se registrate un canale Hd selezionare velocità disco( velocità >5.0MB/sec), se invecce registrate un canale SD selezionare velocità disco ( Velocità >3.0MB/sec).","Video registr. Salvato nella cartella \"pvr\"."],"Arresta","Registra","ora","Minuto","Durata","Suggerimenti","Utilizzare i tasti freccia per impostare la durata della registrazione."];
var pvrDisRemind 	= "Inserisci la chiavetta USB per la registrazione.";
var pvrRemindWords  = ["Si vuole uscire?",
							"Si vuole interrompere la registrazione e cercare tra i file registrati?",
							"Disco estratto.",
							"Spazio libero insufficiente. ",
							"Nessun file registrato, avvia registrazione.",
							"PVR non può avviarsi in Canale Codificato.",
							"Funz. Non disp.",
							"Salvataggio a buon fine.",
							"Interrompere il processo di registrazione e cambiare sorgente ingresso?",
							"Il televisore terminerà la registrazione corrente. Si vuole uscire?",
							"La registrazione PVR necessita del segnale TV per funzionare correttamente, si prega di controllare il segnale."];
var pvrChangeCh 	= ["Volete cambiare canale?",
							"Interrompere il processo di registrazione e cambiare canale?"];
var pvrChangeToPIN8	= ["Si vuole cambiare la sorgente e impostare il dispositivo collegato all'ingresso SCART?",
				    		"Si vuole interrompere il processo di registrazione e cambiare la sorgente impostando il dispositivo collegato all'ingresso SCART?"];
var pvrChangeToCEC  = ["Si vuole cambiare la sorgente ed impostare un dispositivo collegato ad un ingresso HDMI?",
				  			 "Si vuole interrompere il processo di registrazione e cambiare la sorgente impostando il dispositivo collegato ad un ingresso HDMI?"];
var pvrGuideJump    = ["Si vuole accedere alla EPG?",
							"Interrompere il processo di registrazione ed entrare in EPG?"];
var pvrMediaJump    = ["Si vuole accedere a Media?",
							"Interrompere il processo di registrazione ed entrare in Media?"];
var timeshiftExtra	= ["Bloccare timeshift e impostare TV Cambiare canale?",
						"Si vuole interrompere la differita e cambiare la sorgente impostando un dispositivo collegato all'ingresso SCART?",
						"Si vuole interrompere la differita e cambiare la sorgente impostando un dispositivo collegato ad un ingresso HDMI?",
						"Timeshift non può avviarsi in Canale Codificato.",
						"Si vuole interrompere la differita ed accedere alla EPG?",
						"Bloccare timeshift e impostare TV con modalità USB?",
						"Bloccare timeshift e impostare Cambiare fonte ingresso?",
						"Inserisci la chiavetta USB per la registrazione.",
						"Dimensione disco insufficiente. ",
						"Il televisore terminerà la differita corrente. Si vuole uscire?"];
var timeshiftStatus	= ["Riavvolgimento rapido","Arresta","Riproduci","Pausa","Avanzamento rapido"];
var pvrPowerOffRemind= ["Registrazione in stand by","Standby","Il televisore sta registrando ora, si vuole mantenere la registrazione quando il televisore è in modalità standby?"];
var timeshiftInitTitle= "Impost. Disco";
var timeshiftInitReminds= ["Guida di impost. Disco USB per timeshift. Selez. Modalità impost. ",
						 "Per una migliore performance, si consiglia la format. Del disco USB. I dati verranno cancellati.",
						 "Selez. Dimens. File per timeshift.",
						 "Formattazione…",
						 "Spazio libero insufficiente. ",
						 "Creazione file timeshift",
						 "Verifica velocità",
						 "Velocità disco troppo lenta (< %f MB/sec) per attiv. funz. Timeshift!",
						 "Disco pronto per timeshift. Ma si raccomanda di sost. il disco (vel. > %f MB/sec) per migliore performance.",
						 "Disco pronto per timeshift."];
var timeshiftInitButtons= ["Formattare","Saltare","Annulla","OK","Termina","Esci"];
var timeshiftInitOther=["Veloc. disco:","MB/sec."];

var selectChoice	= "Sicuro?";
var chAtvStore		= "Memorizza come XXXX";
var chEpgFirstGenreUK= ["Cinema","Notizie e fatti","INTRATTENIMENTO","Sport","Bambini","Educazione","Stile di vita","Dramma"];
var homePageTitleList = ["APP","TV","VIDEO","Homepage"];
var homePageFavAndAllName  = ["App preferite","Tutte le App"];
var homePageBackUp = ["Manuale elettronico","Guida"];
var homePageRemind   = ["Le funzioni complete sono disponibili solo dopo la connessione di rete.","Il televisore non ha memorizzato nessun canale. I programmi saranno disponibili dopo la scansione dei canali.","Nessun programma","Cercare canali ora?"];
var homePageHistory = ["Cronologia"];
var miracastTitle = ["Collegamento TV WiFi","Dispositivo TCL"];
var miracastRemind=["Collegamento Wi-Fi del televisore consente di condividere lo schermo e il suono di uno smartphone, un tablet, o altro dispositivo simile, con il vostro televisore in modalità wireless (ovvero senza cavi). In questo modo potrete vedere sul televisore quello che il vostro smartphone o tablet sta visualizzando. Ad esempio, potete avviare un video sullo smartphone e vederlo in simultanea sul televisore, oppure utilizzare il tablet come un controller per giochi e trasmettere i contenuti sul grande schermo del televisore.","La connessione WiFi TV sul televisore è pronta. Avviare per condividere immediatamente lo schermo del proprio dispositivo con il televisore.","Collegamento, si prega di aspettare!","Connessione fallita!","Impossibile collegare. Controllare!"];
var homePageLittleWin = ["Impostazioni","Media","Canali preferiti.","Smart TV","EPG"];

var hbbtvStopRemind  = ["Si vuole interrompere la riproduzione?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Premere OPZIONI per maggiori informazioni";
var emptyListInfo = "Nessun dispositivo collegato al TV!";
var optionVideoListArray_1 = ["Modalità Immagine", "Preimpostazione del suono", "Modalità gioco", "Modalità Schermo", "Modalità 3D", 
							  "Interruttore L-R", "Profondità di Campo", "Sottotitoli", "Traccia Audio", "Titolo", "Capitolo", "Info"];
var optionVideoListArray_2 = ["Modalità Immagine", "Preimpostazione del suono", "Modalità gioco", "Modalità Schermo", 
							  "Sottotitoli", "Traccia Audio", "Titolo", "Capitolo", "Info"];
var bottomTipsText = ["Riproduci/Pausa", "Riavvolgimento rapido", "Avanzamento rapido", "Playlist", "Impostazioni"];
var picturePresetArray = ["Standard", "Dynamic", "Naturale", "Cinema", "Personale"];
var videoPlayModeArray = ["Ripeti Tutto", "Ripeti Uno", "Normale"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Wide zoom ", "Zoom 2", "Wide Zoom 2", "Stretch Zoom", "Automatico"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9 ", "Zoom 16:9 ", "Zoom up 16:9 ", "Automatico"];
var Mode3DArray = ["Disattiva", "Da 2D a 3D", "Lato con Lato", "Alto e Basso", "Interleaving linea"];
var videoOptionListArray = ["Disattiva", "Traccia", "Sottotitoli", "Titolo", "Capitolo"];
var subMenuTitleText = "Sottotitoli";
var langMenuTitleText = "Lingua audio";
var titleMenuTitleText = "Titolo";
var mode3DMenuTitleText = "Modalità 3D";
var langInfoText = "Traccia";
var STOP_RESUME_INFO = "Stop-Continua";
var playListName = " nome";
var eb_tips = "Suggerimenti";
var ok_button = "OK";
var eb_info = ["Errore di decodifica audio", "Errore di decodifica video", "Formato audio non supportato", 
			   "Formato video non supportato.", "Impossibile aprire il file", "Errore di riproduzione, provare di nuovo in seguito",
			   "Formato file non supportato.", "Oops! Il lettore ha smesso di funzionare.",
			   "Il percorso del file non esiste o non è valido. \n Re-inserire il dispositivo di archiviazione e riprovare.",
			   "Continuare la riproduzione dal punto \n precedente?"];
var frameTitleText = "Nuovo dispositivo";
var eb_quit_info = "Si è sicuri di voler uscire?";
var eb_yes = "SÌ";
var eb_no = "NO";
var offinfo = "Disattiva";
var naInfo = "Nullo";
var consoleInfoArray = ["Riavvolgimento rapido", "Avanzamento rapido", "Riproduci/Pausa", "Playlist"];
var cantOperateText = ["Funzione non supportata"];
var chapterChangeInfo = "Sono disponibili solo capitoli da 1 a XXXX.";
var metaDataArray = ["Metadati Titolo/edizione:", " Capitolo Metadati:", "Metadati Audio:", "Metadati sottotitoli:"];
var metaTitleInfo = "Titolo";
var metaChapterInfo = "Capitolo";
var videoLoadingInfo = "Analisi in corso…";
var listLoadingInfo = "Caricamento…";
var pgInfo = "Valutazione di legge";
var fileNameText = " nome";
var fileDateText = "Data";
var fileSizeText = "Dimensione";
var fileDurationText = "Durata";
var fileDirectorText = "Regista";
var fileCopyrightText = "Copyright";
var fileArtistText = "Artista";
var fileAlbumText = "Album";
var fileGenreText = "Genere";
var fileYearText = "Anno";
var fileGenreText = "Genere";
var mainListArray = ["Tutto", "Immagine ", "Video", "Musica"];
var sortArray = [" nome", "Data"];
var parserArray = ["Normale", "Ricorrente"];
var emptyTipsInfo = "Oops. Impossibile trovare file supportati";
var emptyFolderInfo = "Oops. Impossibile trovare file supportati";
var sortName = "Scelto da";
var parserName = "Analizzatore";
var divx_str1 = "Registrazione DivX(R) ";
var divx_str2 = "Cancellazione registrazione DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Nessuna opzione disponibile.";

var musicSoundPresetArray = ["Standard", "Cinema", "Musica", "Voce chiara", "Personale"];
var musicInformationArray = [" nome", "Artista", "Album", "Genere:", "Anno:", "Durata:"];
var playListName = " nome";
var playTipsInfo = ["Si sta riproducendo il primo file", "Si sta riproducendo l'ultimo file."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artista";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Preimpostazione del suono";
var optionBGMInfo = "Riproduzione in background.";
var optionAudioOnlyInfo = "Solo audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX è stato collegato al televisore!";
var tvRemoteTitle		= "Telecomando TV";
var tvRemoteDeveloper	= "L'applicazione è stata sviluppata da TCL";
var tvRemoteDeviceTitle	= "Nome del dispositivo:";
var remoteOption		= ["Condivisione multimediale","Telecomando","Guida","Informazioni","Connessione Smart"];
var remotebottom		= "Scaricare \"Telecomando TV\" sul proprio smartphone.";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Condividere foto, video e musica col televisore attraverso il telefono.",
							"Fasi: \n   1. Cliccare \"Telecomando TV\" sul telefono. Collegare il telefono al televisore con la stessa rete WiFi;\n   2. Cliccare \"Condivisione Multimedia\" per cercare tra i file media;\n   3. Inviare i file media al televisore per riprodurli (con una delle seguenti opzioni)",
							"      a) Trascinare e lasciare andare la cartella/il file nell'icona del TV nella parte alta dello schermo;\n      b) Far oscillare il telefono verso la TV per lanciare il primo file;\n      c) Riprodurre i file sul telefono e fare clic sull'icona di condivisione TV;",
							"   4. Quando si riproduce sul TV, scuotere il telefono per riprodurre il file precedente o successivo."];
var controlReminds		= ["Usare il telefono come telecomando per far funzionare il TV.",
							" ",
							"Fasi: \n   1. Cliccare \"Telecomando TV\" sul telefono. Collegare il telefono al televisore con la stessa rete WiFi;\n   2. Cliccare \"Telecomando\" per utilizzare il televisore."];
var helpDeviceWords		= "Interazioni tra più schermi";
var helpBottom			= "Nell'era della tecnologia cloud, dispositivi smart, come telefoni e televisori, sono connessi l'uno con l'altro. Condividi con la tua famiglia i contenuti multimediali su schermi multipli e controlla il televisore tramite il telefonino! ";
var helpReminds			= ["Preparazioni\n   1. Scaricare ed installare \"Telecomando TV\" da Google Play o Apple Store.\n   2. Collegare il telefono con il televisore con la stessa rete WiFi.",
							" ",
							"Telefono raccomandato\n   1. CPU: oltre 800MHz\n   2. Spazio: almeno 80Mb di spazio libero",
							" ",
							"Dichiarazione\n   Se \"Telecomando TV\" non è disponibile sul telefono, contattare il produttore del telefono."];
var helpButtons			= ["Indietro","Successivo"];
var aboutReminds		= ["Telecomando TV","L'applicazione è stata sviluppata da TCL"];
var aboutExit			= "Esci";
var smartReminds		= ["Collegamenti rapidi ed efficaci tra televisore e telefono.",
							" ",
							"Fasi \n   1. Collegare il televisore e lo smartphone alla stessa LAN. Cliccare \"Telecomando TV\" sullo smartphone.\n   2. Cliccare \"Smart Connect\" per scansionare il codice QR.\n   3. Con la trasmissione TV in modalità trasmissione, premere il tasto INFO sul telecomando per 4 secondi, apparirà un codice QR a schermo intero.",];
var smartQRReminds		= ["Cliccare su Smart Connect sul telecomando TV sul telefono e scansionare il codice QR per collegare rapidamente televisore e telefono. ",
							"Il codice QR contiene info sull'account LAN. Conservarlo con cura."];
							

var consoleTipArray = ["Indietro","Successivo","Console","Playlist"];							
var optionInfoArray = ["Modalità Immagine","Modalità gioco","Durata","Effetto","Info"];

var playModeArray = ["Normale","Shuffle","Ripeti"];
var durationArray = ["Breve (5s)", "Medio (10s)", "Lungo (15s)"];
var effectArray = ["Nessuno", "Dissolvi", "Sposta a destra", "Sposta a sinistra", "Sposta in su", "Sposta in giù", "Box in", "Box out", "Casuale"];
var infoArray = ["Nome:","Dimensione:","Data:","Luogo"];

var picturePresetBarTitleInfo = "Modalità Immagine";
var picturePresetBarArray = ["Standard","Dynamic","Studio","Cinema","Personale"];
var upTipsInfo = "Muovi immagine"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Indietro","Successivo","Playlist","Impostazioni"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Premere di nuovo DESTRA per riprodurre l'immagine successiva","Premere di nuovo SINISTRA per riprodurre l'immagine precedente","Premere di nuovo GIÙ per mostrare la playlist"]; //add yums 2014-10-10

var optionPvrListArray = ["Modalità Immagine","Preimpostazione del suono", "Modalità Schermo", "Modalità 3D", "Sottotitoli", "Traccia Audio", "Info"];							
	
var titleSpanFirstArray = ["Controllo e collegamenti","Operazioni di base","APP","TV","Impostazioni","FAQ"];
var titleSpanSecondArray = [["Telecomando","Tasti comando del pannello","Navigazione facile","Collegamento TV","Collegamento TV","Collegamento TV","Senza fili"],["Lancio","Barra di stato","Principale"],["App in riproduzione","Media","Telecomando TV"],["Regolare canale e volume","Elenco dei canali","EPG","Installazione canali","Canali preferiti."],["Regolazione video","Regolazione audio","Regolazione canale","Aggiorn. Software","Lingua","Blocco parentale"],["Domande Frequenti","Domande Frequenti","Risoluzione dei Problemi","Risoluzione dei Problemi","Termini e condizioni"]];
var contentSpan1_1Array = [["LISTA:","INFO:","MENÙ:","ACCENSIONE:","SORGENTE:","GUIDA:","SMART TV:"],["Mostra la lista dei canali","Mostra informazioni dei programmi","Va alla homepage","Accende o mette in standby il televisore.","Seleziona la sorgente in ingresso.","Mostra le informazioni EPG (Guida elettronica alla programmazione).","Va alla pagina Smart TV"]];
var contentSpan1_2Array = ["Canale precedente","Canale successivo","Alza il volume","Abbassa il volume","Va alla homepage","Conferma l'opzione","Standby / accensione"];
var contentSpan1_3Array = ["OK/Guida","Canale su","Canale giù","Volume giù","Volume su","Disponibili come tasti freccia in alcune funzioni"];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","Adattatore per l'USCITA AV.","LAN","Smartphone","PC/Set-top box/DVD","Amplificatore Audio","Amplificatore audio/monitor","Il televisore potrebbe non avere tutte le prese."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Cuffie","Adattatore per l'INGRESSO AV","SPDIF","Adattatore INGRESSO AUDIO CMP","Adattatore INGRESSO CMP (YPbPr) ","Dispositivi USB","Dispositivi USB","Cuffie","DVC/Console di gioco/Set-top box/DVD","Amplificatore Audio","DVC/Console di gioco/Set-top box/DVD","Il televisore potrebbe non avere tutte le prese."];
var contentSpan1_6Array = ["Interfaccia comune","SD","VGA","SCART","Mini SCART","INGRESSO ANTENNA","Scheda PCMCIA","Scheda SD","PC","Set-top box/DVD","Antenna/via cavo/Satellitare","Il televisore potrebbe non avere tutte le prese."];
var contentSpan1_7Array = ["Tavoletta","PC","Router","Telefono","TV"];

var contentSpan2Array = [["Premere i tasti freccia per visualizzare l'homepage.","Quindi premere OK per guardare uno dei programmi inclusi o per accedere all'App."],["Mostra data, rete e dispositivi, etc, nell'angolo in alto a destra dello schermo."],["Selezionare la sorgente in ingresso per dispositivi collegati al televisore tramite porte diverse, come TV, AV, HDMI, etc."]];

var contentSpan3Array = ["Godere e visualizzare delle proprie App preferite attraverso la pagina Smart TV.","Visualizzare foto, vedere video e riprodurre musica da un dispositivo di archiviazione USB.","Collegare il televisore e il telefono o il tablet alla stessa LAN.","Cliccare TCL nScreen o Telecomando TV sullo smartphone o sul tablet.","Condividere foto, video e musica su schermi multipli con la propria famiglia e controllare il televisore tramite lo smartphone."];

var contentSpan4Array = [["Premere SU/GIÙ per cambiare i canali","Premere DESTRA/SINISTRA per regolare il volume."],["Premere LIST sul telecomando per visualizzare l'ordine dei canali.","Premere SU/GIÙ per scegliere il canale."],["EPG è una guida sullo schermo che visualizza i programmi TV previsti. È possibile navigare, selezionare, visualizzare e registrare i programmi."],["Cerca ed installa canali"],["Aggiungere o modificare i canali preferiti nella lista canali."]];

var contentSpan5Array = ["Godere dei propri programmi preferiti attraverso App video."];

var contentSpan6Array = [["Premere MENÙ per mostrare le opzioni di impostazione di sistema.","Accedere alle impostazioni Immagine per regolare i valori."],["Premere MENÙ per mostrare le opzioni di impostazione di sistema.","Accedere alle impostazioni Audio per impostare le opzioni."],["Premere MENÙ per mostrare le opzioni di impostazione di sistema.","Accedere alle impostazioni Canale per impostare le opzioni."],["Aggiornare il televisore quando è disponibile una nuova versione del software."],["È possibile scegliere la lingua menù preferita"],["Permette ai genitori di bloccare i canali od i programmi che non sono adatti ai bambini."]];

var contentSpan7_1Array = [["Nessuna immagina, nessun suono","Controllare se il fusibile o l'interruttore del circuito funzionano.","Collegare un altro dispositivo elettrico nella presa per assicurarsi che funzioni o che sia attiva.","La spina non fa contatto correttamente con la presa di corrente.","Controllare la sorgente del segnale."],["Immagine normale, nessun audio.","Premere il tasto volume SU per aumentare il volume.","Impostazioni audio non corrette.","Errore nel segnale della trasmissione"],["Audio normale, nessun'immagine.","Regolare la luminosità ed il contrasto","Errore nel segnale della trasmissione","Controllare se si è in modalità Solo Audio."]];
var contentSpan7_2Array = [["Interferenza da frequenze radio.","Questa interferenza crea onde in movimento o fasce diagonali e, in alcuni casi, la perdita del contrasto nell'immagine. Trovare e rimuovere la sorgente dell'interferenza radio."],["Nessun colore","Regolare le impostazioni colore.","Provare un altro canale. Potrebbe essere in trasmissione un programma in bianco e nero."],["Il telecomando non funziona.","Sostituire le batterie","Le batterie non sono installate correttamente. L'alimentazione del televisore non è collegata."]];
var contentSpan7_3Array = [["Il contenuto del dispositivo USB non viene visualizzato.","Controllare che il dispositivo di archiviazione USB sia compatibile con il televisore.","Controllare che i formati audio ed immagine siano supportati dal televisore."],["Riproduzione senza audio","Il formato audio del video non è supportato dal riproduttore del televisore."],["I file non vengono riprodotti in modo uniforme.","La performance di trasferimento del dispositivo di archiviazione USB potrebbe limitare la velocità di trasmissione dati al televisore."]];
var contentSpan7_4Array = [["A cosa è necessario fare attenzione quando si effettua l'aggiornamento del software.","Evitare le sospensioni di corrente durante l'aggiornamento.","Evitare operazioni con il telecomando durante l'aggiornamento.","Attendere con pazienza perché il processo di aggiornamento software può impiegare un po' di tempo."],["Non ci sono cambiamenti distintivi dell'interfaccia del televisore dopo l'aggiornamento del software.","In certe condizioni, l'aggiornamento SW non solo aggiornerà o aggiungerà nuove funzioni, ma migliorerà la resa del televisore senza cambiamenti evidenti all'interfaccia. Inoltre, l'interfaccia del televisore a volte può rimanere intoccata."]];
var termsTitle = "Termini e condizioni";
var termsConditions = ["(Dichiarazione legale )di TCL - produttore di questo televisore. ","Viste le diverse funzionalità dei prodotti con servizi Smart TV, così come le limitazioni nel contenuto disponibile, alcune caratteristiche, applicazioni e servizi potrebbero non essere disponibili su tutti i dispositivi in tutti i territori. Alcune caratteristiche su Smart TV possono anche richiedere dispositivi periferici addizionali o abbonamenti che vengono venduti separatamente. Visitare il nostro sito web per maggiori informazioni su dispositivi specifici e sulla disponibilità di contenuti. I servizi e la disponibilità di contenuti attraverso la Smart TV sono soggetti a modifiche periodiche senza preavviso. \n   Tutti i contenuti e servizi accessibili attraverso questo dispositivo appartengono a terze parti e sono protetti da diritti, brevetti marchi e/o altre leggi sulla proprietà intellettuale. Tali contenuti e servizi sono forniti solamente per l’uso non commerciale. Non è consentito utilizzare contenuti o servizi in modi non autorizzati dai relativi proprietari o fornitori del servizio. Senza limitazione in quanto segue, se non espressamente autorizzato dal proprietario del contenuto o fornitore del servizio, non è possibile modificare, copiare, ripubblicare, caricare in rete, postare, trasmettere, tradurre, vendere, utilizzare per la creazione di altri lavori, divulgare o distribuire in nessun modo o mezzo nessun contenuto o servizio visualizzato attraverso questo dispositivo. \n   SI PRENDE ESPRESSAMENTE ATTO E SI ACCETTA CHE L’USO DI QUESTO DISPOSITIVO È A PROPRIO RISCHIO E CHE IL RISCHIO RIGUARDANTE QUALITÀ, PRESTAZIONI E PRECISIONE SODDISFACENTI RICADE TOTALMENTE SULL’UTENTE. IL DISPOSITIVO E I CONTENUTI E I SERVIZI DI TERZE PARTI SONO FORNITI \"COME SONO\" SENZA GARANZIA ALCUNA, NÉ ESPRESSA NÉ IMPLICITA. TCL ESCLUDE ESPRESSAMENTE OGNI GARANZIA E OBBLIGAZIONE ESPRESSA O IMPLICITA RELATIVAMENTE AL DISPOSITIVO E A QUALSIASI CONTENUTO O SERVIZIO, INCLUSE, A TITOLI ESEMPLIFICATIVO, GARANZIE DI COMMERCIABILITÀ, DI QUALITÀ SODDISFACENTE, DI IDONEITÀ DEL PRODOTTO A SODDISFARE UNO SCOPO SPECIFICO, DI PRECISIONE, DI INTRATTENIMENTO TRANQUILLO O DI NON VIOLAZIONE DEI DIRITTI DI TERZI. TCL NON GARANTISCE LA PRECISIONE, LA VALIDITÀ, L’ATTUALITÀ, LA LEGALITÀ O LA COMPLETEZZA DI NESSUN CONTENUTO O SERVIZIO RESO DISPONIBILE ATTRAVERSO QUESTO DISPOSITIVO E NON GARANTISCE CHE IL DISPOSITIVO, I CONTENUTI O I SERVIZI SODDISFINO LE ESIGENZE DELL’UTENTE O CHE IL FUNZIONAMENTO DEL DISPOSITIVO O DEI SERVIZI SIA ININTERROTTO O ESENTE DA ERRORI. IN NESSUNA CIRCOSTANZA, NEPPURE PER NEGLIGENZA, TCL SARÀ RESPONSABILE, IN RAGIONE O TORTO, PER QUALSIASI DANNO DIRETTO, INDIRETTO, ACCIDENTALE, PARTICOLARE O CONSEGUENTE, SPESE LEGALI, SPESE, O ALTRI DANNI CHE EMERGANO O SIANO IN CONNESIONE CON INFORMAZIONI CONTENUTE O COME RISULTATO DELL’USO DEL DISPOSITIVIO, O QUALSIASI CONTENUTO O SERVIZIO A CUI SI ACCEDE, ANCHE SE LA POSSIBILITÀ DI TALI DANNI ERA STATA COMUNICATA. \n   Servizi di terze parti possono essere modificati, sospesi, rimossi, conclusi o interrotti, o l’accesso può essere disabilitato in qualsiasi momento, senza preavviso, e TCL (produttore di televisori di marca Thomson) non rilascia alcuna dichiarazione o garanzia che qualsiasi contenuto o servizio rimarrà a disposizione per qualsiasi periodo di tempo. Contenuto e servizi sono trasmessi da terze parti per mezzo di reti e dispositivi di trasmissioni che non sono al di fuori del controllo di TCL. Senza limitare il carattere generale della presente esclusione di responsabilità, TCL declina espressamente ogni responsabilità per qualsiasi cambiamento, interruzione, disattivazione, rimozione, o sospensione di qualsiasi contenuto o servizio reso disponibile attraverso questo dispositivo. TCL può imporre limiti all’uso o all’accesso di certi servizi o contenuti, in ogni caso e senza preavviso né responsabilità. TCL non è neppure responsabile per il servizio clienti relativo al contenuto o ai servizi. Ogni domanda o richiesta in merito ad assistenza relativa a contenuti o servizi dovrà essere inoltrata direttamente al rispettivo fornitore di contenuti e servizi."];

var noChannelListRemind        = ["Nessun canale trovato. La lista canali è disponibile dopo la scansione canali.","Scansione dei canali"];
var closeSubtitleRemind   = "La funzione sarà disponibile quando i sottotitoli sono disattivati. Si vuole impostarlo ora?";

var estickerTitles = ["Immagini molto realistiche","Colori che diventano vivi","Movimenti realistici fantastici","Qualità dell'immagine dinamica","Miglioramento SR UHD","Vivi il mondo 3D","Performance più veloce","Futuri contenuti a 4K","Godere del mondo on line.","Accedere a contenuti extra","Sintonizzatori digitali integrati","Collegare tutti i dispositivi","Varie sorgenti 4K","Contenuti USB","WiFi ultrarapida","Contenuto mobile in televisore.","Contenuto del dispositivo mobile","Contenuto locale","Approvato da DivX","Immagine scorrevole.","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Una splendida esperienza visiva grazie ad immagini con 4 volte i dettagli di un Full HD su uno schermo UHD.","L'ampia gamma di colori dà emozione ad ogni scena con rossi vivi e verdi smeraldi.","Interpolazione con struttura a 4K e retroilluminazione portano a problemi di offuscamento durante le scene di combattimento.","La chiarezza dell'immagine originale è esaltata per produrre un'espressione davvero dinamica con un contrasto brillante.","Sarà possibile godersi programmi televisivi e dischi Blu-Ray più nitidi che mai grazie alla tecnologia Super Resolution.","Vivere la televisione pronta per il 3D e guardare vari contenuti 3D.","Esperienza di intrattenimento più godibile con il Quad Core per interazioni scorrevoli e una performance esaltata.","Il codec HEVC (H.265) supporta i prossimi standard della distribuzione video 4K.","Una marea di applicazioni on line, servizi VOD (a richiesta), recupero TV e navigazione internet.","Vedere di più con servizi e contenuti addizionali dalle emittenti preferite.","Accesso ai canali TV in alta definizione senza set-top box addizionale.","Facile collegare le molte risorse digitali disponibili a casa.","Il televisore pronto per il futuro, in grado di riprodurre 4K 50/60 Hz attraverso la HDMI 2.0 con HDCP 2.2..","Contenuti video o foto direttamente da dispositivi USB, hard disk o telecamere sul grande schermo con 4K di risoluzione.","L'ultima generazione 2x2 MIMO e lo standard AC dà una velocità senza pari di accesso ad Internet.","Godere di foto, video, applicazioni dai dispositivi mobili sull'ampio schermo grazie alla tecnologia di mirroring dello schermo.","Foto, video, applicazioni da smartphone o tablet possono essere visualizzati sull'ampio schermo.","Visualizzare sul grosso schermo i contenuti locali come foto e video da dispositivi collegati alla rete locale.","Riprodurre film noleggiati o di proprietà su DivX.","Telaio ultrasottile e design super slim.","Testato e approvato da Canal+","Testato e approvato da TDT Premium"];							

var eManualTextArray = ["Manuale elettronico","Tutte le immagini all'interno sono solo a scopo rappresentativo."];
var frontPanelRemind = "Comandi frontali. Bloccati.";
var eRPRemind		 = "La modalità negozio non soddisfa la domanda rich. ERP. Sicuro?";	
var noRelatedChannel = "Nessun canale collegato.";
var option0624Name          = ["BOP","BFS","Evento per evento","GetUserID","BGM","Reset all","Azzera negozio","NRM","DVB-T2 e scelta Paese","Modalità HbbTV"];
var DVBT2AndChoice = ["Attiva","Per Paese","Disattiva"];
var hbbtvServiceRemind = "Il servizio HbbTV sarà  disponibile a breve.";
var insertWord = "Inserisci";		
var viewDetail = "Vedi dettagli";							

var remindOAD  = "Agg. software. Il nuovo agg. Software consigliato potrebbe essere presente su altro canale. Effettuando il download, il canale potrà essere automat. cambiato. Effettuare l'operazione ora?";		

var LEDStatus = ["Lampeggiante", "Normale"];
var netFlixRemind = "Questa funzione interromperà l’accesso ai servizi di Netflix fino a quando non si eseguirà di nuovo l’accesso.";
var ESNExplanation = "Numero di serie elettronico";
var resetShopRemind = "Reimpostazione del sistema in corso, non spegnere il televisore";
var initialSelectOption = "Selezionare un’opzione:";
var databaseRemind   = "Il sistema ha rilevato che il database è danneggiato per cause sconosciute e lo ricompilerà automaticamente; premere OK per continuare";
var Deactivation = "Disattivazione";
var oadFutureRemind = "Aggiornamento Software. Sarà disponibile un nuovo software raccomandato a %s. L'aggiornamento potrebbe impiegare alcuni minuti e lo schermo potrebbe diventare nero. Non spegnete il ricevitore durante l'aggiornamento. Se accettate lasciate acceso il ricevitore in modalità standby all'orario programmato. Volete ricevere questo aggiornamento?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Uscita audio";
var bt_soundOutPutTV = "Casse TV";
var bt_soundOutPutBT = "Disp. Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth e TV";
var bt_refreshBarName = "Disposit.";
var bt_settingTips_On = "Accendere funz. Bluetooth e scans. disp.";
var bt_settingTips_Finding = "Ricerca disp. disponibili…";
var bt_settingTips_NoDevice = "Nessun disp. dispon.";
var bt_deviceList_State_NoConnect = "Non connesso";
var bt_deviceList_State_Connecting = "Connessione…";
var bt_deviceList_State_Connected = "Connesso";
var bt_deviceList_State_Paired = "Sincr.";
var bt_deviceList_Conncect_Failed_Tips1 = "Connes. fallita.";
var bt_deviceList_Conncect_Failed_Tips2 = "Confermare funzione Bluetooh XXX accesa";
var bt_deviceList_Conncect_Success = "Connesso a disp. Bluetooth.";
var bt_deviceList_Disconncect_Success = "Sconnesso da disp. Bluetooth.";
var bt_deviceList_Disconnect = "Disconnettersi da XXX?";
var bt_tipsTitle = "Suggerim.";
var bt_bluetooth_Pairing_Title = "Sincr. Bluetooth";
var bt_bluetooth_Input_Pin = "Inserire PIN:";
var bt_bluetooth_Output_Pin_Tip = "Inserire PIN XXXX con tast.";
var bt_bluetooth_Pin_Wrong_Tip = "Err. PIN";
var bt_bluetooth_Remove_Pair_Title = "Domanda";
var bt_bluetooth_Remove_Pair_Ask = "Dimenticato disp.?";
var bt_bluetooth_module_error = "Errore del modulo Bluetooth!";							
var netflixDialogOptions = ["OK","Più tardi","Non mostrare mai più questo"];
var netflixDialogContent = "Migliaia di film sono disponibili su Netflix, naviga adesso?";
var netflixRemoteDialogContent = "Il telecomando con il tasto Netflix è acquistabile da subito. Visita il seguente sito web per maggiori informazioni.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Sorgente attuale","Tutte le sorgenti"];
var audioDescriptionName = ["Descrizione audio","Altoparlante","Volume altoparlante","Cuffia","Volume cuffia","AD volume","Dispositivo Bluetooth","Volume del dispositivo Bluetooth"];
var audioDescriptionOptions = ["Disattiva","Normale","Descrizione audio"];							
var volumeOffRemind = 'Impostare XXX “On” nel menu delle impostazioni.';
var switchSourceRemind   = " inserito. Vuoi attivare ora?";

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Modalità sport";
var resetStadium = "Stadio";						
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							

//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Esci","0","Zoom+",
                       	   "Esci",
                       	   "Lista","0","Testo","Guida","Invio","Esci","Menu","Sottotitoli","Info",
                       	   "Stop",
                       	   "Info","Menu","Esci"
                       	   ];
var nscreenTips = "GuideOn aiuta gli utenti a navigare nella vasta documentazione.";
var nscreenContent = 'Procedura: 1.Fare clic sul cellulare su "TCL nScreen".  Collegare il cellulare con il televisore tramite la stessa rete LAN; 2.Fare clic su "GuideOn" per accedere a GuideOn; 3.GuideOn è simile a una guida ai programmi stampata e informa gli utenti sui contenuti televisivi disponibili;';
var singalBrokenoffTips = "Il segnale si è interrotto. Il sistema non può terminare il download.";
var contentSpan1_1Array_AU =  [["ACCENSIONE:","SORGENTE:","MENÙ:","BACK:","INFO:","HOME:","EXIT:","LISTA:"],
                            ["Turns power on or standby mode","Select the input source",
                                "Show TV settings menu","Go back to the Previous menu or exit a running APP","Mostra informazioni dei programmi",
                              "Va alla homepage","Go back to the Previous menu or exit a running APP","Mostra la lista dei canali"]];
var guideDescriptionWords ="Eseguire la scansione del codice QR per scaricare l'app GuideOn sul cellulare";
var settingNoticeSourceName ="Sorgente automatica";
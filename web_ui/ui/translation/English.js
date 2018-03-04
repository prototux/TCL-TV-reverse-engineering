
var all_country 	= ["Australia","Austria","Belgium","Bulgaria","Croatia","Czech Republic","Denmark","Finland","France","Germany",
						"Greece","Hungary","Italy","Luxembourg","Netherlands","Norway","Poland","Portugal","Romania","Russia",
						"Serbia","Slovenia","Spain","Sweden","Switzerland","United Kingdom","New Zealand"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Latvia","Slovakia","Turkey","Ireland","Japan","Philippines","Thailand","Maldives","Uruguay","Peru",
						"Argentina","Chile","Venezuela","Ecuador","Costarica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"China","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Others","Lithuania"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Lithuania"];
				
var all_language 	= ["Czech","Chamic","Danish","Dargwa","Landdayak","German","English","Spanish","Greek","French",
						"Croatian","Sorbianupper","Italian","Hungarian","Dutch","Norwegian","Polish","Portuguese","Russian","Romanian",
						"Slovenian","Serbian","Finnish","Swedish","Bulgarian","Slovak","Chinese","Chuukese","Gaelic","Gbaya",
						"Welsh","Arabic","Irish","Latvian","Hebrew","Turkish","Estonian","Dutch"/*Netherlands*/,"Korean","Kosraean",
						"Hindi","Hittite","Hmong","Mandarin","Cantonese","Maori","Original Audio"/*Qaa*/,"Undefined"/*Undetermined*/,"Ad","Unknown",
						"Undefined","Abkhazian","Achinese","Acoli","Adangme","Adyghe","Afar","Afrihili","Afrikaans","Afro",
						"Ainu","Akan","Akkadian","Albanian","Aleut","Algonquian","Altaisouthern","Altaic","Amharic","Apache",
						"Aramaic","Aragonese","Arapaho","Araucanian","Arawak","Armenian","Artificial","Assamese","Asturian","Athapascan",
						"Austronesian","Australian","Avaric","Avestan","Awadhi","Aymara","Azerbaijani","Aztec","Balinese","Baltic",
						"Baluchi","Bambara","Bamileke","Banda","Bantu","Basa","Bashkir","Basque","Beja","Bemba",
						"Bengali","Berber","Bhojpuri","Bihari","Bikol","Bini","Bislama","Bosnian","Braj","Breton",
						"Buginese","Buriat","Burmese","Blin","Byelorussian","Caddo","Carib","Catalan","Caucasian","Cebuano",
						"Celtic","Centralamericanindian","Chagatai","Chamorro","Chechen","Cherokee","Cheyenne","Chibcha","Chinookjargon","Choctaw",
						"Chipewyan","Churchslavic","Chuvash","Coptic","Cornish","Corsican","Cree","Creek","Creolesandpidgins","Crimeantatar",
						"Creolesandpidginsenglish","Creolesandpidginsfrench","Creolesandpidginsportuguese","Kashubian","Cushitic","Dakota","Delaware","Slavey","Dogrib","Dhivehi",
						"Dinka","Divehi","Dogri","Dravidian","Sorbianlower","Duala","Dutchmiddle","Dyula","Dzongkha","Efik",
						"Egyptian","Ekajuk","Elamite","Englishmiddle","Englishold","Angika","Eskimo","Esperanto","Ewe","Ewondo",
						"Fang","Fanti","Faroese","Fijian","Filipino","Finnougrian","Fon","Frenchmiddle","Frenchold","Frisiannorthern",
						"Frisianeastern","Frisian","Fulah","Friulian","Ga","Galician","Ganda","Gayo","Geez","Georgian",
						"Germanmiddlehigh","Germanoldhigh","Gorontalo","Germanic","Gilbertese","Gondi","Gothic","Grebo","Greekancient","Greenlandic",
						"Guarani","Swissgerman","Gujarati","Gwichin","Haida","Haitiancreole","Hausa","Hawaiian","Herero","Hiligaynon",
						"Himachali","Hirimotu","Hupa","Iban","Icelandic","Ido","Nuosu","Igbo","Ijo","Iloko",
						"Indic","Indoeuropean","Ingush","Indonesian","Interlingua","Interlingue","Inuktitut","Inupiak","Iranian","Irishold",
						"Irishmiddle","Iroquoian","Japanese","Javanese","Lojban","Judeoarabic","Judeopersian","Kabyle","Kachin","Kamba",
						"Kannada","Kanuri","Karakalpak","Karen","Kashmiri","Kawi","Kazakh","Circassian","Khasi","Khmer",
						"Khoisan","Khotanese","Kikuyu","Kinyarwanda","Kirghiz","Kimbundu","Komi","Kongo","Konkani","Kpelle",
						"Karachaybalkar","Karelian","Kru","Kuanyama","Kumyk","Kurdish","Kurukh","Kusaie","Kutenai","Ladino",
						"Lahnda","Lamba","Langue","Lao","Latin","Luxembourgish","Lezghian","Limburgish","Lingala","Lithuanian",
						"Lozi","Lubalulua","Lubakatanga","Luiseno","Lunda","Luo","Lushai","Macedonian","Madurese","Magahi",
						"Maithili","Makasar","Malagasy","Malay","Moksha","Mandar","Malayalam","Maltese","Manchu","Mandingo",
						"Manipuri","Manobo","Manx","Marathi","Mari","Marshall","Mirandese","Marwari","Masai","Mayan",
						"Erzya","Mende","Micmac","Minangkabau","Miscellaneous","Mohawk","Moldavian","Monkmer","Mongo","Mongolian",
						"Mossi","Multiple","Munda","Neapolitan","Nauru","Navajo","Ndebelenorth","Ndebelesouth","Ndongo","Germanlow",
						"Nepali","Newari","Nias","Nigerkordofanian","Nilosaharan","Niuean","Norwegianbokmal","Nogai","Norseold","Northamericanindian",
						"Norwegiannynorsk","Nubian","Nyamwezi","Newariclassical","Nyanja","Nyankole","Nyoro","Nzima","Ojibwa","Oriya",
						"Oromo","Osage","Ossetic","Otomian","Pahlavi","Palauan","Pali","Pampanga","Pangasinan","Panjabi",
						"Papiamento","Papuanaustralian","Persian","Persianold","Phoenician","Philippine","Ponape","Prakrit","Provencalold","Pushto",
						"Quechua","Rhaetoromance","Rajasthani","Rapanui","Rarotongan","Romance","Romany","Rundi","Aromanian","Salishan",
						"Samaritanaramaic","Samisouthern","Saminorthern","Sami","Lulesami","Inarisami","Samoan","Skoltsami","Sandawe","Sango",
						"Sanskrit","Sardinian","Sasak","Santali","Sicilian","Scots","Selkup","Semitic","Sranantongo","Serbocroatian",
						"Serer","Sign","Shan","Shona","Sidamo","Siksika","Sindhi","Soninke","Singhalese","Sinotibetan",
						"Siouan","Slavic","Siswant","Sogdian","Somali","Songhai","Sorbian","Walloon","Nko","Sothonorthern",
						"Sothosouthern","Southamericanindian","Sukuma","Sumerian","Sudanese","Susu","Swahili","Swazi","Swize","Syriacclassical",
						"Syriac","Tagalog","Tahitian","Tetum","Tajik","Tamashek","Tai","Tamil","Tatar","Teletext",
						"Telugu","Tereno","Thai","Tibetan","Tigre","Tigrinya","Timne","Tivi","Klingon","Tokelau",
						"Tlingit","Tonganyasa","Tongaislands","Truk","Tokpisin","Tsimshian","Tsonga","Tswana","Tumbuka","Tupian",
						"Turkishottoman","Turkmen","Tuvinian","Tuvalu","Twi","Udmurt","Ugaritic","Uighur","Ukrainian","Umbundu",
						"Urdu","Uzbek","Vai","Venda","Vietnamese","Volapuk","Votic","Wakashan","Walamo","Waray",
						"Washo","Wolof","Kalmyk","Xhosa","Yakut","Yao","Yap","Yiddish","Yoruba","Yupik",
						"Zapotec","Blissymbolics","Zenaga","Zhuang","Zande","Zulu","Zuni","Zazaki","Valencian","ChineseTraditional","*"];
var offOn			= ["Off","On"];
var okCancel		= ["OK","Cancel"];
var yesNo			= ["Yes","No"];
var level			= ["Off","Low","High","Middle"];
var manualAuto		= ["Manual","Auto"];
var homeShop		= ["Home","Shop"];
var picPreset		= ["Standard","Dynamic","Natural","Movie","Digital Cinema","Personal"];
var picColorTemp	= ["Cool","Normal","Warm","Warm2","Custom"];
var pic3dNavig		= ["Manual","Auto","Semi-Auto"];
var _3dOptions		= ["3D Mode","3D-to-2D","L-R switch","Depth of field"];
var pic3DMode       = ["Off","2D-to-3D","Side-by-Side","Top-and-Bottom","Line Interleave"];
var picEcoOptions	= ["Energy saving","Light sensor","Local dimming","Mix dimming"];
var picGeoOptions	= ["Geometry","H.Position","V.Position","Clock","Phase"];//Geometry 无翻译
var picAdWhiteBal	= ["R Gain","G Gain","B Gain","R Offset","G Offset","B Offset"];
var souOptions		= ["Sound preset","Balance","Audio delay","SRS TSHD","Auto volume control",
						"SPDIF type","SPDIF delay","TV placement","Audio language","Sound type",
						"Audio description","Digital Audio Output Type","Dolby professional setting"];
var soundOutputoptions =["TV Speaker DAP output","External AVR encode output"];
var inteligenteqoptions 	=["Focused","Rich"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Off"];
var colorSpace      = ["Auto","Native","Custom","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","surround virtualizer","dialog enhancer","bass enhancer","intelligent loudness","Media intelligence","Graphic EQ","Inteligent EQ"];
var chOptions		= ["Channel scan","Channel list","EPG","Organiser","Channel diagnostics",
						"Timeshift","Subtitle","Teletext","Channel list type"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signal strength","Signal quality","Frequency (KHz)","Service ID","Network ID","Network Name"];
var chScanOptions	= ["Country","Tuner mode","Automatic search","Automatic update","Analogue manual scan",
						["Cable manual installation","Antenna manual installation","Satellite manual tuning"],"Satellite antenna setup","Favorite network select","Clean channel list",];
var favNetDes		= "Please select your favorite network";
var tuner			= ["Cable","Antenna","Satellite"];//Satelite 无翻译
var passError		= "Password incorrect.\nPlease enter again!";
var chType			= ["Analogue channels: ","Digital channels: "];
var chScanStatus	= ["Status: Scanning","Status: Scan complete","Status: Scan cancelled","Status: Scan error"];
var chScanPara		= ["Frequency (KHz)","Modulation","Symbol rate (Ksym/s)","Network ID","System",
						"Fine tune","Signal strength","Signal quality","Scan mode","Channel id"];
var chScanParaMHZ      = ["Frequency (MHz)"];
var chAtvManSys		= ["West EUR","East EUR","UK","France"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Do you want to clean channel list?";
var chDeletDes		= "Do you want to delete the channel?";
var chOperator		= ["Ziggo","UPC","Others"];
var chScanType		= ["Digital & Analogue","Digital","Analogue"];
var chScanMode		= ["Full","Advanced","Quick"];
var bookingModes	= ["Record","Reminder"];
var dayName			= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthName		= ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var filter			= ["Filter","Type","SubType"];
var chEpgFirstGenre	= ["Movie","News","Show","Sports","Children's","Music","Arts","Social","Education","Leisure","Special"];
var chEpgSecondGenre= [["Drama","Detective","Adventure","Science Fiction","Comedy","Soap","Romance","Serious","Adult Movie"," "," "," "],
						["Current Affairs","Weather Report","News Magazine","Documentary","Discussion"," "," "," "," "," "," "," "],
						["Show","Game Show","Variety Show","Talk Show"," "," "," "," "," "," "," "," "],
						["Sports","Special Events","Sports Magazines","Football","Tennis",
							"Team Sports","Athletics","Motor Sport","Water Sport","Winter Sport",
							"Equestrian","Martial Sports"],
						["Children's","Pre-school children's","Entertainment for 6 to 14","Entertainment for 10 to 16","Informational","Cartoons"," "," "," "," "," "," "," "],
						["Music","Rock","Serious","Folk","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Arts","Performing Arts","Fine Arts","Religion","Popular culture",
							"Literature","Film","Experimental","Broadcasting","New Media",
							"Arts Magazines","Fashion"],
						["Social","Magazines","Economics","Remarkable people"," "," "," "," "," "," "," "," "],
						["Education","Nature","Technology","Medicine","Foreign Countries","Social sciences","Further Education","Languages"," "," "," "," "],
						["Leisure Hobbies","Tourism","Handicraft","Motoring","Fitness and Health","Cooking","Advertisement","Gardening"," "," "," "," "],
						["Original language","Black and white","unpublished","Live Broadcast"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Channel skip","Channel sort","Channel edit","Channel delete","Channel swap","Channel insert"];
var chEditPara 		= ["Network name","Channel number","Channel name","Frequency","Color system","Sound system"];
var chSatTitles		= ["Satellite type","Satellite antenna setup","Select satellite"];
var chSatEidtOptions= ["Satellite name","Position","LNB power","LNB frequency (MHz)","DiSEqC input",
						"Tone 22KHz","Tone burst","Frequency (KHz)","Symbol rate (Ksym/s)","Polarization",
						"Signal strength","Signal quality","Satellite status"];
var chSatAutoPromt	= [["All","Network"],
						["All","Free"]];
var chSatAutoScanOptions=["Select satellite","Scan mode","Channels"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Disable","A","B","C","D"];
var chSatTone22KHz	= ["Auto","On","Off"];
var chSatToneBurst	= ["Disable","Tone burst A","Tone burst B"];
var chSatPolarization= ["Horizontal","Vertical"];
var chSatSetupOptions=["Antenna type","Tuner","Band frequency"];
var chSatAntennaType= ["SingleCable","Universal"];
var chSatUserBands	= ["User band 1","User band 2","User band 3","User band 4","User band 5","User band 6","User band 7","User band 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["User defined"];
var pleaseSelectSat = "Please select satellites first!";
var subOptions		= ["Subtitle","Digital subtitle language","Digital subtitle language 2nd","Subtitle type"];
var ttxOptionsCon      = ["Decoding page language","Digital teletext language"];
var subType			= ["Normal","Hearing Impaired"];
var netIntf     	= ["Ethernet ","Wireless"];
var netConnDes		= ["TV is testing the network connection.\nPlease wait",
						"The network connection test is successful!",
						"The network connection test failed."];
var netSsidError	= "The valid length of SSID is 1~32 characters. Please check the SSID.";
var netOthers		= ["PIN Code "];
var netWlessAutoDes	= ["Please ensure the following PIN code is installed into the Access Point before clicking OK.",
						"Please press the button on the Access Point within 120 seconds before clicking OK."];
var netConnRemind	= ["Password incorrect!",
						"Connecting. Please wait!",
						"Connection successful and IP address is obtained!",
						"Connection failed, please check network and try again!",
						"TV is scanning Access Points. \nPlease wait",
						"There is no Wireless Adapter connected to the TV!"];
var netWireIpOptions= ["IP setting","Address type","IP Address","Subnet Mask","Default Gateway","Primary DNS","Secondary DNS"];
var netWireConnRemind= ["Please enter a value between 0 and 255.",
						"Connected successfully!",
						"Please type a valid address",
						"Connected successfully!",
						"Connection failed!",
						"Connecting. Please wait!",
						"Please enter a value between 1 and 223."];
var netFlixOptions	= ["Deactivate","ESN"];
var netFlixDes	 	= ["Are you sure you want to deactivate?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Software update";
var netUpdateDialogTitle = "Software updating";
var netBGDownloadTitle 	= "Downloading";
var netUpdateLoadingPrompt= ["Searching for upgrade, please wait!",
							"Software is downloading... Please wait!",
							"Please DO NOT turn off the TV set during software updating!",
                            "The imperative software update is downloaded automatically in the background!"];
var netUpdatePrompt= ["Congratulations, your software version is the newest!",
						"The new software version XXXX is found. Do you want to download now? This may take a while depending on your network status.",
						"Login failed, please check and connect again!",
						"Failed to receive data,please try again later!",
						"Analysis of upgrade info failed, switch off/on with remote control!",
						"Connection failed, please check network and try again!",
						"Software downloaded successfully. Do you want to start updating your TV?",
						"Data lost! Download failed!",
						"Software file check failed, please try again!",
						"Connection problems. Please check and connect again!",
						"Update failed. Please switch off/on with remote control!",
						"The upgrade file was deleted unexpectedly. Please do the upgrade by network again.",
						"The software has been downloaded successfully in the background. Do you want to do the upgrade?"];
var netUpdateButtonText = ["Download", "Update", "Later", "Never", "OK","Continue"];
var autoDetectPrompt = ["The new software version XXXX is found. Do you want to download now? This may take a while depending on your network status.",
						"The new software version XXXX is found. Do you want to update now?",
						"The upgrade process by network was aborted last time. You have to do the upgrade again.",
                        "Downloading of new software version XXXX is not finished. Do you want to continue now?",
                        "Software downloaded, do you want to update now?"];
var sysOptions		= ["E-Manual","Menu language","Timer","Lock","Input settings",
						"Software update","Location","HbbTV mode","Cookies","Common Interface",
						"Advanced settings","Reset shop","LED Indicator"];
var sysResetDes		= "Are you sure you want to do the selected action?";
var sysMenuLangOptions=["Language","Preferred audio language","Preferred audio language 2nd"];
var sysTimerOptions	= ["Time zone","Region name","Clock","Sleep timer","Auto standby", "Country region"];

var sysTimeZone		= ["As per broadcast","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Off","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Off","4 Hours","6 Hours","8 Hours"];
var sysRegionName	= ["Madrid ","Canary Islands"];
var sysClockOptions	= ["Auto synchronization","Date","Time","Power on timer","Timer",
						"Power on channel","Power off timer","Timer"];
var sysTimer		= ["Off","Daily","Once"];

var sysInputSet		= ["No label","DVD","Blu-ray","HDD","DVDR",
						"HD rec.","Game","VCR","PC","Digital STB",
						"HD digital STB","Camera","Recorder","Other"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["By USB","By network","By channel"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Cannot find new software on the air!",
						"The new software version XXXX is found. Do you want to update now?",
						"Please insert the USB stick.",
						"Software file check failed, please try again!",
						"Updating. This will take some time to complete, TV will then auto-restart!",
						"The software has been successfully updated.\nTV will then auto-restart!",
						"The new software version XXXX is found. Do you want to download now? This may take a while depending on your network status.",
						"Downloading",
						"Software downloaded successfully. Do you want to start updating your TV?",
						"Update failed!",
						"Searching for upgrade files",
						"The software has been successfully updated.\nPlease restart the TV now."];
var sysProductInfo	= ["Current version","Product name","Manufacturer name","Name of chassis"];
var sysCiDes		= ["No CI card found."];
var sysAdOptions	= ["DivX(R) registration","DivX(R) deregistration","T-Link","Authorization error","Deregistration confirmation",
						"Rental Confirmation","Rental expired","Bluetooth declaration ID"];
var sysRegistDes	= ["You must register your device to play DivX(R) protected videos.",
						"Registration code:",
						"Register at http://vod.divx.com"];
var sysDregistDes	= ["Deregistration code:",
						"Deregister at http://vod.divx.com",
						"Continue with registration?"];
var mediaAuthorization = ["Your device is not authorized to play this DivX(R) protected video."];
var deregistrationConfrimation = ["Your device is already registered.","Are you sure you wish to deregister?"];
var rentalConfirmation = "The DivX(R) rental has used XXXX out of YYYY views. Continue?";
var rentalExpired 	= "The DivX(R) rental has used XXXX out of YYYY views. The DivX rental has expired.";
						
						
var sysLockOptions	= ["Channel lock","Time interval lock","Parental rating","Input lock","Front panel lock","Installation lock",
						"Change password","Max volume","Clean all"];
var sysTimeIntervals= ["Lock type","Start time","End time"];
var sysRatingOptions= ["None","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Spain)"];
var changePass		= ["Change password","New password","Confirm password"];
var changePassDes	= ["Password incorrect.\nPlease enter again!",
						"Password does not match.\nPlease enter again!",
						"Password set successfully!",
						"This code is too simple to be set as password.\nPlease enter again!"];
var sysPowerOnChOptions= "Select mode";
var sysPowerOnCh	= ["Last status","User select"];
var netWlessSecu    = ["Open","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["None","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Not supported"];
var netWlessSecu3	= ["None","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Not supported"];
var netOptions		= ["Internet connection","Interface","Wireless settings","IP settings","Information",
						"Connection test","DLNA","TCL nScreen","Netflix settings","WiFi TV link",
						"Address type","IP address","Subnet mask","Default gateway","Primary DNS",
						"Secondary DNS","SSID","BSSID","Please input SSID:","User ID"];
var chEditDes		= ["Duplicated channel number!","Press Red Key to delete current character!","Invalid channel numbers."];
var chEpgNoProgram	= "No program info now, please search channels first!";
var chEpgWords		= ["Program Guide","No program data.","Channel Locked!","No program details.","No program title."];
var chEpgBooking	= ["Schedule Info", "Channel Number","Start Date","Start Time","End Time",
						"Repeat type","Schedule type","Add schedule","Replace","Change",
						"Add/Modify"];
var epgHotKey		= ["Prev day","Next day","Filter","Schedule list","Add schedule"];
var chEpgBookRemind	= ["Incorrect Start Time","Incorrect End Time","Duplicated Schedule","Successfully saved.","Successfully deleted."];
var chSchePara		= ["Schedule List","Start Time","Start Date","Program Title","Channel Name",
						"Duration","Repeat","Schedule","Edit","Delete"];
var dateTimer		= ["Once","Daily","Weekly"];
var scheduleDeleteReminds="Do you want to delete this schedule?";
var scheduleNoLists	= "There is no schedule list. Press \"Red\" key to add one.";
var chListWords		= ["Channel list","Select list","Tuner mode","Add to Favorites","Remove",
						"Select channel list","Select tuner mode","Swap"];
var chListType		= ["All","Digital","Analogue","Radio","Free","Favorites"];
var chAutoScanOptions=["Select operator","Channel type","Automatic search"];
var souSoundType	= ["Invalid","Mono","Mono","Stereo","Stereo",
						"Mono","Stereo","Dual1","Dual2","Dual2",
						"Nicam Mono","Nicam Stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Music","Movie","Voice","Standard","Personal"];
var picAdRgbMode	= ["Off","Red Only","Green Only","Blue Only"];
var picAdOptions	= ["Noise reduction","MPEG NR","RGB mode","Dynamic contrast","LED Motion clarity",
						"Flesh tone","Film mode","Game mode","Color temperature","White balance",
						"Picture freeze","Black stretch","Overscan","Gamma","HDMI mode","10P white balance","Color extender",
						"Blur reduction","Judder reduction","Color space","Motion clarity"];
var pic10Pwhite     = ["Interval","Red","Green","Blue","Reset","Color","Yellow","Cyan","Magenta"];
var picMotionClarity = ["Motion mode","Motion interpolation","LED Motion clarity","Blur reduction","Judder reduction","Reset"];
var picMotionMode   = ["Auto","Film","Smooth","Clear","Sport","Customer"];
var picResetDes		= "All personal settings will be reset. Are you sure you want to do the selected action?";
var pic10PReset     = "Are you sure you want to reset 10P white balance?";
var picMotionReset  = "Do you want to reset Motion clarity?";
var picColorSpaceReset    = "Are you sure you want to reset color space?";
var picOptions		= ["Picture preset",
						"Backlight","Brightness","Contrast","Saturation","Tint","Sharpness","Color temperature","Screen mode","Auto format",
						"Sport enhancement","3D","3D navigation","ECO settings","Geometry",
						"Advanced settings","Apply Picture Mode","Picture reset"];
var picSize			= ["16:9 format", "4:3 format", "14:9 format", "Cinerama",
						"16:9 Zoom", "16:9 Zoom up","14:9 Zoom","Stretch Zoom","Wide Zoom",
						"Zoom 2","Wide Zoom 2","Screen Native Match","Dot by Dot","Original","Panorama"];
var others			= ["Volume","Broadcast","Password","Status","Save","Replace","Start","Exit","Search","Delete",
						"None","Automatic","Scan","Security","Connect","Refresh","Retry","Stop","Settings","Channels",
						"Edit","Insert","Signal","Finish","Stereo","Audio","Source","No audio","Tips","Reset",
						"Customer","Setup","Store","User","Close keyboard","Security mode","Every day","PVR list"];
var direction		= ["Left","Right","Up","Down"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Unknown"];
var soundChannels   = ["Unknown","Mono","Sub","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2Ch","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1Ch","7.1Ch","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Left","Right","Others"];
var prompts			= ["Adjust picture setting that best suits your viewing environment.",
						"Adjust brightness levels. The closer to 100, the brighter.",
						"Adjust contrast levels. The closer to 100, the bigger the picture dark-bright differences.",
						"Adjust saturation levels. The closer to 100, the stronger the color.",
						"Adjust sharpness levels. The closer to 100, the clearer the details.",
						"Adjust backlight levels. The closer to 100, the brighter the screen.",
						"Adjust tint levels. This setting modifies the color tones.",
						"Select the picture format that best suits the program being viewed.",
						"Configure energy saving options.",
						"Adjust screen geometry settings when connecting a PC device.",
						"Select more picture advanced settings.",
						"Restore all picture settings to default.",
						"Select a sound mode to suit your personal preference.",
						"Adjust the volume balance between left channel and right channel.",
						"Sound Retrieval System TruSurround HD provides rich sound performance and clarity at low and high frequencies.",
						"Digital Interface Format connecting the TV digital sound output to home theater audio equipment.",
						"Select audio language to suit your personal preference.",
						"Enable the Visually Impaired to enjoy television programs.",
						"Test your TV picture, sound and signal.",
						"Select channel list type to suit your TV signal.",
						"Select the language of the program's subtitles displayed at the bottom of the screen.",
						"View the current channel's text and images.",
						"Digital Living Network Alliance. Enjoy music, photos and videos via home network from other devices, such as a PC.",
						"Display your smartphone contents on the TV and use the smartphone as a remote control for the TV.",
						"Display contents from a Miracast-compatible Android device on your TV screen.",
						"Put a lock on your TV.",
						"Select a name for your device.",
						"Select your viewing environment.",
						"Restore all System Settings to default."];
var initialTitle	= ["Welcome","Initial Setup"];
var initialPrompt	= ["Do your Initial Setup now, and a World of Exciting Experience awaits you!",
						"Please select your language:",
						"Please select your country:",
						"Please select your location:",
						"Please select your network connection type:",
						"Please select wired network connection mode:",
						"Failed to connect to xxxxxxxxx! Please connect the device according to the following Diagram or select Left  to reset.",
						"Connected to xxxxxxxxx! Please select Right to continue.",
						"1)Your TV may already have a built-in Wireless Adapter\n 2)Or, if a Wireless USB Adapter is provided, connect it to your TV.  Then, please select wireless network connection mode",
						"Scanning. Please wait...",
						"There is no Wireless Adapter connected to the TV!",
						"Please ensure the following PIN code is installed into the Access Point before you click the below ‘Next’ button.",
						"Please press push button on the AP within 120 seconds before pressing Right !",
						"WPS(Wi-Fi Protected Setup)",
						"PIN (Personal Identification Number)",
						"PBC (Push Button Configuration)",
						"The following contents can only be accessed with a network connection. Do you want to skip Network Setup?",
						"There are new software updates for you to download, this may take a while depending on your network status.",
						"Updating your TV software ensures you can enjoy the latest features and services.",
						"You won't enjoy the latest features and services. Do you want to skip Software Update?",
						"Press the Right Button to continue.",
						"Do not power off during updating as this may cause TV malfunction.",
						"If you don't want to update, please select NO.",
						"Updating, please wait",
						"You can also update software in SYSTEM/SOFTWARE UPDATE.",
						"The country selected asks for password setting.\nPlease set code for your TV and confirm it.",
						"This code is too simple.\nPlease use different digits.",
						"Congratulations! Initial setup is completed. You can modify your configuration via the main Menu and related sub-menus.",
						"Please select the security mode:",
						"Please select wireless network connection mode:",
						"network"];
var initNetCabAndDonRe = ["No network cable connected, please plug in a network cable!","No built-in wireless adapter or no wireless USB adapter is provided."];
var initChPrompt = ["TV Channel installation","Please select Antenna scan type.","Processing auto tuning...","The following Antenna channels were found:","Please select Cable scan type.","Please select one operator from the following list.","Please configure the scan info","The following Cable channels were found:","Please select one operator from the following list","Please select satellites to scan or edit the selected satellite","Please set the satellite's parameters","The following channels were found, and the channel scan can also be performed again in Channel/Channel Scan"];
var initClockPrompt = ["Get the network-provided time!",
						"Please set Date and Time:"];
var initialOptions	= ["Environment","Network Setup","Software Update","Channel Installation","Clock"];
var initialHotkeys	= ["Back","Select","Next"];
var initLocations	= ["Home","Shop","Shop with demo"];
var initNets		= ["Wired","Wireless","I do not have a network connection"];
var initWireManuals	= ["IP Address","Subnet Mask","Default Gateway","Primary DNS","Secondary DNS"];
var initSoftUpdates = ["Update now","Update later"];
var initChannelIns	= ["Continue","I don't want to install channels"];
var initChScanTypes	= ["Digital & Analogue","Digital","Analogue","I don't want to scan"];
var initChDvbts		= ["Antenna ATV channels:","Antenna DTV channels:"];
var initChDvbcs		= ["Cable ATV channels:","Cable DTV channels:"];
var initChDvbss		= ["Satellite channels:"];
var initChDvbSOther	= ["I don't want to scan satellite"];
var initEndConnectedStatus= ["Disconnected","WiFi connected","Wired connected"];
var initEndInstallations= "XXXX channels installed";
var initEndUpdate	= ["Updated"];

var audioScenes 	= ["Desk top","Wall mount"];			
var screenSavers	= ["No program info now, please search channels first!",
						"No signal!",
						"Scrambled",
						"Data Only",
						"Audio program",
						"No Audio and Video",
						"Not Available",
						"No Teletext",
						"No program data.",
						"Program Locked!",
						"Program Locked!\nPress OK and enter your code.",
						"No program details.",
						"Program harmful for minors.\nPress OK and enter your code.",
						"Channel Locked!",
						"Channel Locked!\nPress OK and enter your code.",
						"Input Locked!\nPress OK and enter your code.",
						"Not supported!",
						"This service is not currently available",
						"Input Locked!",
						"No program title.",
						"No Function"
						];
var chBookingPromt	= ["The current channel has a scheduled recording, TV will start recording.",
						"A scheduled recording is found.\n Switch to XXXX to record",
						"The current channel has a reminder.",
						"A scheduled reminder is found.\n Switch to XXXX"];
var timeUnit		= ["Sec","Min"];
var ciPromt			= ["The network data have changed. To update you can perform an update scan. ",];
var othersPromt		= ["Please wait...",];
var menuOptions		= ["Picture","Sound","Channel","Network","System"];
var optionOptions	= ["Picture preset","Sound preset","Picture freeze","T-Link","Timeshift","PVR","Schedule list","Settings"];
var optionTLinkPromt= [["Auto power on","Auto standby","Guide menu"],
						["power on","standby","Amplifier Volume"]];
var powerPromt		= ["TV will power off soon!\n Please press any key to cancel."];
var ttxLanguage		= ["West EUR","East EUR","Russian","Arabic/Hebrew","Farsi","Arabic","Byelorussian","Greek","Turkish"];
var ttxOptions		= ["Reveal","Cycle subpages","Language","Alarm page","NewsFlash"];
var weekday         = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var lcnConfflict	= "This programme has reception problems. There is another version available on channel %d ";
var inShopMode		= "Your TV is in shop mode. For home mode please select 'System' and change 'Location' in menu.";
var nitRefresh		= "The network data have changed. Do you want to perform update scan?";
var picHDMIMode     = ["Auto","Graphic","Video"];

var glassRemind    	= ["Please pair your 3D glasses with the TV\n(Press and hold POWER key on 3D glasses).","Your 3D glasses are connected to the TV ",""];
var pvrRemind 		= ["Do not pull out USB drive or interrupt the power"];
var pvrConName   	= ["PVR","Program information:",["Note: To record HD channel, select  USB drive (of speed >5.0MB/sec); to record SD channel, select USB drive (of speed >3.0MB/sec). ","Recorded video is saved in  \"pvr\"  folder."],"Stop","Record","Hour","Minute","Duration","Tips","Use arrow keys to set recording duration."];
var pvrDisRemind 	= "Please insert USB drive for recording.";
var pvrRemindWords  = ["Do you want to exit?",
							"Do you want to stop recording and browse recorded files?",
							"USB drive removed.",
							"There is not enough free space.",
							"No recorded files. Start to record.",
							"PVR is not supported on Scrambled Channel.",
							"Feature not available",
							"Successfully saved.",
							"Do you want to stop the record process, and change input source?",
							"TV will end the current recording. Do you want to exit?",
							"PVR recording needs TV signal to work properly, please check your signal."];
var pvrChangeCh 	= ["Do you want to change channel?",
							"Do you want to stop the record process, and change channel?"];
var pvrChangeToPIN8	= ["Do you want to  change source to device connected to SCART input?",
				    		"Do you want to stop the record process and change source to device connected to SCART input?"];
var pvrChangeToCEC  = ["Do you want to change source to device connected to an HDMI input?",
				  			 "Do you want to stop the record process and change source to device connected to an HDMI input?"];
var pvrGuideJump    = ["Do you want to enter EPG?",
							"Do you want to stop the record process, and enter EPG?"];
var pvrMediaJump    = ["Do you want to enter Media?",
							"Do you want to stop the record process, and enter Media?"];
var timeshiftExtra	= ["Do you want to stop the timeshift, and change channel?",
						"Do you want to stop the timeshift, and change source to device connected to SCART input?",
						"Do you want to stop the timeshift, and change source to device connected to an HDMI input?",
						"Timeshift is not supported on Scrambled Channel.",
						"Do you want to stop the timeshift, and enter EPG?",
						"Do you want to stop the timeshift, and enter Media?",
						"Do you want to stop the timeshift, and change input source?",
						"Please insert USB drive for recording.",
						"The USB drive size is not enough.",
						"TV will end the current timeshift. Do you want to exit?"];
var timeshiftStatus	= ["Fast Backward","Stop","Play","Pause","Fast Forward"];
var pvrPowerOffRemind= ["Standby Recording","Standby","TV is recording now, do you want to keep recording when TV is in standby mode?"];
var timeshiftInitTitle= "USB drive setup";
var timeshiftInitReminds= ["This wizard is used to set up the USB drive for timeshift. Please select the setup mode.",
						 "For better performance, we recommend formatting the USB drive. This will erase all the data.",
						 "Please select the file size for timeshift.",
						 "Formatting",
						 "There is not enough free space.",
						 "Creating timeshift file",
						 "Speed testing",
						 "The USB drive speed is too slow (< %f MB/sec) for timeshift feature!",
						 "The USB drive is ready for timeshift. But we recommend changing it (to speed > %f MB/sec) for better performance.",
						 "The USB drive is ready for timeshift."];
var timeshiftInitButtons= ["Format","Skip","Cancel","OK","Finish","Exit"];
var timeshiftInitOther=["USB drive speed:","MB/sec"];

var selectChoice	= "Are you sure you want to do the selected action?";
var chAtvStore		= "Store as XXXX";
var chEpgFirstGenreUK= ["Movie","News and Factual","Entertainment","Sport","Children's","Education","Lifestyle","Drama"];
var homePageTitleList = ["APPS","TV","VIDEOS","Homepage"];
var homePageFavAndAllName  = ["Favorite Apps","All Apps"];
var homePageBackUp = ["E-Manual","GuideOn"];
var homePageRemind   = ["Full functions are available only after network connection.","Your TV does not have any channels yet. Programs are available after channel scanning.","No Program","Search channels now?"];
var homePageHistory = ["History"];
var miracastTitle = ["WiFi TV link","TCL device"];
var miracastRemind=["WiFi TV link allows you to share screen and sound of your device such as a smartphone or a tablet to your TV, wirelessly (i.e. without cables). This makes it possible to view on your TV, at the same time, what your smartphone or tablet is showing. For example, you can launch a video on your smartphone and display it simultaneously on your TV, or use your tablet as game controller with content displayed on the big screen of your TV.","WiFi TV link on the TV is ready, please start to share your device screen with the TV now.","Connecting. Please wait!","Connection failed!","Failed to connect.Please check!"];
var homePageLittleWin = ["Settings","Media","Fav channels","Smart TV","EPG"];

var hbbtvStopRemind  = ["Do you want to stop playback?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Press OPTION for more information";
var emptyListInfo = "There is no USB drive connected to TV !";
var optionVideoListArray_1 = ["Picture preset", "Sound preset", "Play mode", "Screen mode", "3D mode", 
							  "L-R switch", "Depth of field", "Subtitle", "Sound track", "Title", "Chapter", "Info"];
var optionVideoListArray_2 = ["Picture preset", "Sound preset", "Play mode", "Screen mode", 
							  "Subtitle", "Sound track", "Title", "Chapter", "Info"];
var bottomTipsText = ["Play/Pause", "Fast Backward", "Fast Forward", "Playlist", "Settings"];
var picturePresetArray = ["Standard", "Dynamic", "Natural", "Movie", "Personal"];
var videoPlayModeArray = ["Repeat All", "Repeat One", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Wide Zoom", "Zoom 2", "Wide Zoom 2", "Stretch Zoom", "Automatic"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 Zoom", "16:9 Zoom", "16:9 Zoom up", "Automatic"];
var Mode3DArray = ["Off", "2D-to-3D", "Side-by-Side", "Top-and-Bottom", "Line interleave"];
var videoOptionListArray = ["Off", "Track", "Subtitle", "Title", "Chapter"];
var subMenuTitleText = "Subtitle";
var langMenuTitleText = "Audio language";
var titleMenuTitleText = "Title";
var mode3DMenuTitleText = "3D mode";
var langInfoText = "Track";
var STOP_RESUME_INFO = "Stop-Resume";
var playListName = "name";
var eb_tips = "Tips";
var ok_button = "OK";
var eb_info = ["Audio decoding error.", "Video decoding error.", "Audio format not supported.", 
			   "Video format not supported.", "Can't open this file.", "Playback error, please try again.",
			   "File format not supported.", "Oops! Player has stopped running.",
			   "File path does not exist or is invalid.\n Re-insert the storage device and try again.",
			   "Continue playing from the previous\n playback status?"];
var frameTitleText = "New Device";
var eb_quit_info = "Are you sure you want to quit?";
var eb_yes = "Yes";
var eb_no = "No";
var offinfo = "Off";
var naInfo = "Null";
var consoleInfoArray = ["Fast Backward", "Fast Forward", "Play/Pause", "Playlist"];
var cantOperateText = ["Function not supported."];
var chapterChangeInfo = "Only Chapters from 1 to XXXX are available.";
var metaDataArray = ["Title/Edition Metadata: ", "Chapter Metadata: ", "Audio Metadata: ", "Subtitle Metadata: "];
var metaTitleInfo = "Title";
var metaChapterInfo = "Chapter";
var videoLoadingInfo = "Analyzing...";
var listLoadingInfo = "Loading...";
var pgInfo = "Law Rating: ";
var fileNameText = "Name";
var fileDateText = "Date";
var fileSizeText = "Size";
var fileDurationText = "Duration";
var fileDirectorText = "Director";
var fileCopyrightText = "Copyright";
var fileArtistText = "Artist";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "Year";
var fileGenreText = "Genre";
var mainListArray = ["All", "Picture", "Video", "Music"];
var sortArray = ["Name", "Date"];
var parserArray = ["Normal", "Recursive  "];
var emptyTipsInfo = "Oops. No supported file is found.";
var emptyFolderInfo = "Oops. No supported file is found.";
var sortName = "Sort by";
var parserName = "Parser";
var divx_str1 = "DivX(R) Registration";
var divx_str2 = "DivX(R) Deregistration";
var infor_str = "Info";
var quickMenuEmptyText = "No Available Options.";

var musicSoundPresetArray = ["Standard", "Movie", "Music", "Clear voice", "Personal"];
var musicInformationArray = ["Name", "Artist", "Album", "Genre:", "Year:", "Duration:"];
var playListName = "name";
var playTipsInfo = ["You are playing the first file.", "You are playing the last file."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artist";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Sound preset";
var optionBGMInfo = "Play in the background";
var optionAudioOnlyInfo = "Audio only";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX has connected to TV!";
var tvRemoteTitle		= "TCL nScreen";
var tvRemoteDeveloper	= "The application was developed by TCL";
var tvRemoteDeviceTitle	= "Device Name:";
var remoteOption		= ["Media Sharing","Remote Control","Help","About","Smart Connect"];
var remotebottom		= " Please download \"TCL nScreen\" to your smartphone ";
var remoteStage			= ["Android","iOS"];
var sharingReminds		= ["Sharing photos, videos and music with TV through phone.",
							"Steps: \n   1. Click \"TCL nScreen\" on phone. Connect phone with TV via same WiFi network;\n   2. Click \"Media Sharing\" to browse media files;\n   3. Send media to TV to play  back (with one of the following options)",
							"      a) Drag & Drop folder/file to the TV icon on top of the screen;\n      b) Swing phone towards TV to launch the first file;\n      c) Play the media on phone and click the TV sharing icon;",
							"   4. While playing on TV, shake the phone to play previous or next file."];
var controlReminds		= ["Use phone as a remote control to operate TV.",
							" ",
							"Steps: \n   1. Click \"TCL nScreen\" on phone. Connect phone with TV via same WiFi network;\n   2. Click \"Remote Control\" to operate TV."];
var helpDeviceWords		= "Multi-screen Interaction";
var helpBottom			= "In the cloud technology era, smart devices like phone and TV are mutually connected. Share media on multi-screens with your family and control TV through phone! ";
var helpReminds			= ["Preparations\n   1. Download and install \"TCL nScreen\" from Google Play or Apple Store.\n   2. Connect phone with TV via same WiFi network.",
							" ",
							"Phone recommended\n   1. CPU: above 800MHz\n   2. Storage: at least 80MB free space",
							" ",
							"Disclaimer\n   If \"TCL nScreen\" is unavailable on your phone, please contact the phone manufacturer. "];
var helpButtons			= ["Previous","Next"];
var aboutReminds		= ["TCL nScreen","The application was developed by TCL"];
var aboutExit			= "Exit";
var smartReminds		= ["Quick and smart connection between TV and phone.",
							" ",
							"Steps \n   1. Connect TV and smartphone to the same LAN. Click \"TCL nScreen\" on smartphone.\n   2. Click \"Smart Connect\" to scan the QR code.\n   3. With TV in broadcast viewing mode, press INFO key on TCL nScreen control for 4 seconds, a full screen QR code will pop up.",];
var smartQRReminds		= ["Please click \"Smart Connect\" in \"TCL nScreen\" on your phone and scan the QR code to connect TV and phone quickly.",
							"QR code contains LAN account info. Please keep it safe."];
							

var consoleTipArray = ["Previous","Next","Console","Playlist"];							
var optionInfoArray = ["Picture preset","Play mode","Duration","Effect","Info"];

var playModeArray = ["Normal","Shuffle","Repeat"];
var durationArray = ["Short (5s)", "Medium (10s)", "Long (15s)"];
var effectArray = ["None", "Dissolve", "Wipe right", "Wipe left", "Wipe up", "Wipe down", "Box in", "Box out", "Random"];
var infoArray = ["Name:","Size:","Date:","Location"];

var picturePresetBarTitleInfo = "Picture preset";
var picturePresetBarArray = ["Standard","Dynamic","Studio","Movie","Personal"];
var upTipsInfo = "Move Picture"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Previous","Next","Playlist","Settings"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Press RIGHT again to play next picture","Press LEFT again to play previous picture","Press DOWN again to show playlist"]; //add yums 2014-10-10

var optionPvrListArray = ["Picture preset","Sound preset", "Screen mode", "3D mode", "Subtitle", "Sound track", "Info"];							
	
var titleSpanFirstArray = ["Control & Connection","Basic Operations","Apps","TV","Settings","FAQ"];
var titleSpanSecondArray = [["Remote Control","Panel Keys","Easy Navigation","TV Connection","TV Connection","TV Connection","Wireless"],["Launcher","Status bar","Source"],["Playing apps","Media","TCL nScreen"],["Adjust channel and volume","Channel list","EPG","Channel install","Favorite channels"],["Picture adjustment","Sound adjustment","Channel adjustment","Software update","Language","Parental lock"],["Frequently asked questions","Frequently asked questions","Troubleshooting","Troubleshooting","Terms and conditions"]];
var contentSpan1_1Array = [["LIST:","INFO:","MENU:","POWER:","SOURCE:","GUIDE:","SMART TV:"],["Shows the channel list","Shows program information","Goes to homepage","Turns power on or switches to standby","Selects the input source","Shows the EPG (Electronic Program Guide) information","Goes to Smart TV page"]];
var contentSpan1_2Array = ["Previous channel","Next channel","Turn volume up","Turn volume down","Goes to Homepage","Confirm the option","Standby / Power on"];
var contentSpan1_3Array = ["OK/Guide","Channel up","Channel down","Volume down","Volume up","Available as arrow keys in some functions."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapter","LAN","Smartphone","PC/Set-top box/DVD","Audio amplifier","Audio amplifier/Monitor","Your TV may not include all sockets."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Headphone","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB devices","USB devices","Headphone","DVC/Game Console/Set-top box/DVD","Audio amplifier","DVC/Game Console/Set-top box/DVD","Your TV may not include all sockets."];
var contentSpan1_6Array = ["Common Interface","SD","VGA","SCART","Mini SCART","ANTENNA IN","CI  CAM","SD Card","PC","Set-top box/DVD","Antenna/Cable/Satellite","Your TV may not include all sockets."];
var contentSpan1_7Array = ["Tablet","PC","Router","Phone","TV"];

var contentSpan2Array = [["Press arrow keys to view Homepage.","Then press OK to watch one of the featured programs or enter the App."],["Show date, network and devices etc. at the upper right corner of the screen."],["Select the input source from devices connected to TV through different ports, such as TV, AV, HDMI etc."]];

var contentSpan3Array = ["Enjoy and view your favorite Apps through Smart TV page","View photos, watch videos and play music from a USB storage device.","Connect your TV and smartphone or tablet to the same LAN","Click TCL nScreen or TCL nScreen on the smartphone or tablet","Share photos, videos and music on multi-screens with your family and control your TV through your smartphone"];

var contentSpan4Array = [["Press P▲/P▼ to switch channels","Press V+/V- to adjust volume"],["Press LIST on the remote control to view channels line-up","Press UP/DOWN to choose your channel"],["EPG is an on-screen guide that displays scheduled TV programs. You can navigate, select, view and record programs."],["Search and install channels"],["Add or edit your favorite channels in Channel list"]];

var contentSpan5Array = ["Enjoy your favorite programs through video Apps"];

var contentSpan6Array = [["Press MENU then select Settings to show system setting options","Enter Picture settings to adjust the values"],["Press MENU then select Settings to show system setting options","Enter Sound settings to set the options"],["Press MENU then select Settings to show system setting options","Enter Channel settings to set the options"],["Update your TV when a new software version is available"],["You can choose your preferred menu language"],["Enables parents to lock the channels or programs which are unsuitable to children"]];

var contentSpan7_1Array = [["No picture, no sound","Check if the fuse or circuit breaker is working.","Plug another electrical device into the electric socket to make sure it is working or has been turned on.","Power plug is in bad contact with the power socket","Check the signal source."],["Normal picture, no sound","Press the volume V+ button to increase volume.","Sound setting is incorrect.","Signal error from the broadcast."],["Normal sound, no picture","Adjust the brightness and contrast","Signal error from the broadcast.","Check if it is in audio only mode."]];
var contentSpan7_2Array = [["Radio frequency interference","This interference produces moving ripples or diagonal streaks, and in some cases, loss of contrast in the picture. Find and remove the radio interference source."],["No color","Adjust the color settings.","Try another channel. Black-and-white program may be received."],["Remote control does not work","Replace the batteries.","Batteries are not installed correctly. Main power of the TV is not connected."]];
var contentSpan7_3Array = [["USB device content is not displayed","Check that the USB storage device is compatible with the TV.","Check that the audio and picture file formats are supported by the TV."],["Playing with no sound","The audio format of the video is not supported by the TV player."],["Files do not play smoothly","The transfer performance of the USB storage device may limit the data transfer rate to the TV."]];
var contentSpan7_4Array = [["What should I pay attention to, when I do software updating","No Power cuts when software updating.","Avoid any operations with your remote control when software updating.","Be patient because the software updating process may take a little longer."],["There are no distinct changes of TV interface after software updating.","Under certain conditions, SW updating may not only update or add new functions but also improve the performance of the TV set without distinct changes of interface. Also, the TV interface may remain intact sometimes."]];
var termsTitle = "Terms and conditions";
var termsConditions = ["The contents and services (collectively the \"Licensed Application\") made available to you through this TV set (this \"Device\") are licensed, not sold, to you for use only under these terms and conditions. The providers of the Licensed Application (each an \"Application Provider\") reserve all rights not expressly granted to you. \n 1.	Scope of License \n The license granted to you for a Licensed Application by the relevant Application Provider is limited to a non-transferable license to use the Licensed Application on the Device that you own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the Licensed Application. \n You acknowledge and agree that all Licensed Application and all contents included therein that are accessible through this Device belong to Application Provider and are protected by applicable intellectual property laws. You may not modify, copy, decompile, reverse engineer, disassemble, republish, upload, post, transmit, translate, attempt to derive the source code of, create derivative works of, or otherwise exploit any Licensed Application or any updates or any part thereof. If you breach this restriction, you may be subject to prosecution and damages. The terms of the license will govern any upgrades provided by Application Provider that replace and/or supplement the original Licensed Application, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern. You will be solely responsible for any and all costs (if any) for the upgrading of the Licensed Application. \n 2.	Third-party Materials \n The Licensed Application may enable access to Application Provider's and third party services and web sites (collectively the \"Services\"). You understand that by using any of the Services, you may encounter contents that may be deemed offensive, indecent, or objectionable, which contents may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. Nevertheless, you agree that the manufacturer of this Device (the \"Manufacturer\") and the Application Provider shall not have any liability to you for contents that may be found to be offensive, indecent, or objectionable.\nBy using the Services, you acknowledge and agree that the Manufacturer is not responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, quality or any other aspect of such Services. The Manufacturer does not warrant or endorse and does not assume and will not have any liability or responsibility to you or any other person for any of the Services. \n You acknowledge and agree that the Services may contain proprietary content, information and material (collectively \"Third-party Materials\") that are protected by applicable intellectual property and other laws, and that you will not use such Third-party Materials in any way whatsoever except for permitted use of the Services. You agree not to reproduce, modify, rent, lease, loan, sell, distribute the Third-party Materials or create derivative works thereof in any manner, and you shall not exploit the Services in any unauthorized way whatsoever. You further agree not to use the Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and that the Manufacturer is not in any way responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Services. \n 3.	No Warranty\nYou acknowledge and agree that use of the Licensed Application and the Services is at your sole risk. All Licensed Application and Services are provided \"as is\" and \"as available\" without warranty of any kind, either express or implied. The Manufacturer expressly disclaims all warranties and conditions with respect to the Licensed Application and the Services, either express or implied, including but not limited to, warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and of non-infringement of third party rights. The Manufacturer does not guarantee the accuracy, validity, timeliness, legality, or completeness of any Licensed Application or Services made available through this Device and does not warrant that the Device, the Licensed Application or the Services will meet your requirements, or that operation of the Licensed Application or the Services will be uninterrupted or error-free, or that defects in the Licensed Application or Services will be corrected. Should the Licensed Application or Services prove to be defective, you will assume the entire cost of all necessary servicing, repair or correction.\nYou acknowledge and agree that the Licensed Application and Services may be changed, suspended, removed, terminated or interrupted, or access may be disabled at any time, without notice, and the Manufacturer makes no representation or warranty that any content or service included in the Licensed Application and Services will remain available for any period of time. Such contents and services are transmitted by third parties by means of networks and transmission facilities over which the Manufacturer has no control. Without limiting the generality of the foregoing, the Manufacturer expressly disclaims any responsibility or liability for any change, interruption, disabling, removal of or suspension of any content or service made available through this device. The Application Provider and other providers of the Services reserve the right to change, suspend, remove, or disable access to any Licensed Application or Services at any time without notice. The Manufacturer may also impose limits on the use of or access to certain Licensed Application or Services, in any case and without notice or liability.\nThe Manufacturer is neither responsible nor liable for customer service related to the Licensed Application and the Services. Any question or request for service relating to the Licensed Application and the Services should be made directly to the respective provider.\n 4.	Collection and Use of Information\nYou agree that the Manufacturer, the Application Providers and the providers of the Services may collect and use technical data and related information, including but not limited to technical information about this Device, system and application software, and peripherals, to facilitate the provision of software updates, product support and other services to you (if any) related to the Device and the Licensed Application. The Manufacturer, the Application Providers and the providers of the Services may use such information, as long as it is in a form that does not personally identify you, to improve their products or to provide services or technologies to you. \n 5.	Unavailability of Certain Features\nDue to restrictions of Application Provider, certain features, applications, and services may not be available on this Device (including its peripheral devices) or in all territories. Some features on this Device may also require additional peripheral devices or membership fees that are sold separately. \n 6.	Limitation of Liabilities\nTo the extent not prohibited by the applicable law, under no circumstances, including negligence, shall the Manufacturer be liable, whether in contract or tort, for any direct, indirect, incidental, special or consequential damages, attorney fees, expenses, or any other damages arising out of, or in connection with, any information contained in, or as a result of the use of the Device, any Licensed Application or any Service by you or any third party, even if advised of the possibility of such damages."];

var noChannelListRemind        = ["No channels found. Channel list is available after channel scanning.","channel scan"];
var closeSubtitleRemind   = "Function will be available when subtitle is off. Do you want to set now?";

var estickerTitles = ["Highly realistic images","Colors that come alive","Great lifelike motion","Dynamic picture quality","SR UHD upscaling","Experience 3D world","Faster performance","Future 4K content","Enjoy online world","Access extra content","Integrated digital tuners","Connect all devices","Various 4K sources","USB content","Ultra fast WIFI","Mobile content on TV","Mobile device content","Local content","Approved by DivX","Seamless picture","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Amazing viewing experience thanks to images with four times the detail of Full HD on UHD screen","Wide color gamut delivers emotion in every scene with vivid reds and emerald greens","4K frame interpolation and backlight driving to combat motion blur problems","The vividness of the original image is enhanced to produce truly dynamic expression with brilliant contrast","Enjoy crisper than before TV shows and Blu-Ray discs thanks to Super Resolution technology","Experience 3D TV ready and watch various 3D content","More enjoyable entertainment experience with Quad Core for smooth interaction, enhanced performance","HEVC (H.265) codec support for upcoming standard of 4K video distribution","Wealth of online applications, VOD services, catch-up TVs and Internet web browsing","See more with additional services and content from your favorite broadcasters","Access TV channels in high definition without additional set top box","Easy to connect many digital sources available at home","TV ready for future, able to playback 4K 50/60Hz via HDMI 2.0 with HDCP 2.2","Video or photo content directly from USB drive, HDD or camera on big screen in 4K resolution","Latest generation 2x2 MIMO and AC standard delivers unrivaled Internet access speed","Enjoy photos, videos, applications from mobile devices on big screen thanks to screen mirroring technology","Photos, videos, applications from smartphone or tablet can be displayed on big screen ","Display on big screen local content like photos, videos from devices connected to local network","Play rented or own movies protected by DivX","Ultra narrow bezel and super slim design","Tested and approved by Canal+","TDT Premium tested and approved"];							

var eManualTextArray = ["E-Manual","All graphics inside are for representation only."];
var frontPanelRemind = "Front panel is locked.";
var eRPRemind		 = "Shop mode does not meet the ERP requirements. Are you sure you want to select it?";	
var noRelatedChannel = "No related channel";
var option0624Name          = ["BOP","BFS","Event by event","GetUserID","BGM","Reset All","Reset shop","NRM","DVB-T2 and Country choice","HbbTV mode"];
var DVBT2AndChoice = ["On","By country","Off"];
var hbbtvServiceRemind = "HbbTV service is coming soon.";
var insertWord = "Insert";
var viewDetail = "View detail";

var remindOAD  = "Software update. A new recommended software update may exist on another channel. If you accept to download it, the TV will switch to the channel automatically. Would you like to do it right now?";		

var LEDStatus = ["Flashing", "Normal"];
var netFlixRemind = "This function will interrupt the access to Netflix services until you sign in again.";
var ESNExplanation = "Electronic Serial Number";
var resetShopRemind = "System is resetting now, please do not switch off the TV";
var initialSelectOption = "Please select one option:";
var databaseRemind   = "System has identified the database as damaged for some unknown reason and rebuilt it automatically, press OK to continue";
var Deactivation = "Deactivation";
var oadFutureRemind = "Software update.\n A new recommended software will be available at %s. The update might take some time and the screen might go black. Do not turn off the receiver during the update. If you accept this update, please leave the receiver on or in standby mode at the scheduled time. Do you want to receive this update?";
														
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Sound output";
var bt_soundOutPutTV = "TV Speakers";
var bt_soundOutPutBT = "Bluetooth Device";
var bt_soundOutPutBT_TV = "Bluetooth and TV";
var bt_refreshBarName = "Devices";
var bt_settingTips_On = "Turn on Bluetooth function and scan devices. ";
var bt_settingTips_Finding = "Finding available devices…";
var bt_settingTips_NoDevice = "No available device.";
var bt_deviceList_State_NoConnect = "Not connected";
var bt_deviceList_State_Connecting = "Connecting...";
var bt_deviceList_State_Connected = "Connected";
var bt_deviceList_State_Paired = "Paired";
var bt_deviceList_Conncect_Failed_Tips1 = "Connection failed.";
var bt_deviceList_Conncect_Failed_Tips2 = "Please confirm XXX Bluetooth function is On";
var bt_deviceList_Conncect_Success = "Connected to Bluetooth device.";
var bt_deviceList_Disconncect_Success = "Disconnected from Bluetooth device.";
var bt_deviceList_Disconnect = "Are you sure you want to disconnect from XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Bluetooth pairing";
var bt_bluetooth_Input_Pin = "Please input PIN:";
var bt_bluetooth_Output_Pin_Tip = "Input PIN XXXX by keyboard.";
var bt_bluetooth_Pin_Wrong_Tip = "Wrong PIN";
var bt_bluetooth_Remove_Pair_Title = "Query";
var bt_bluetooth_Remove_Pair_Ask = "Forget this device?";
var bt_bluetooth_module_error = "Bluetooth module error!";
var applyPictureModeSwitchValue	 = ["Current Source","All source"];
var audioDescriptionName = ["Audio description","Speaker","Speaker Volume","Headphone","Headphone Volume","AD Volume","BT Device","BT Device Volume"];
var audioDescriptionOptions = ["Off","Normal","Audio description"];
var volumeOffRemind = 'Please set XXX "On" in Settings menu.';							
var netflixDialogOptions = ["ok","Later","Never show"];
var netflixDialogContent = "Thousands of movies are in Netflix for watching, go now?";
var netflixRemoteDialogContent = "Netflix remote is available for purchasing, get more information to view the following website.\nhttps://store.tcleu.com";
var switchSourceRemind   = " inserted.Do you want to switch?";

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Sports mode";
var resetStadium = "Stadium";						
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Exit","0","Zoom+",
                       	   "Exit",
                       	   "List","0","Text","Guide","Enter","Exit","Menu","Subtitle","Info",
                       	   "Stop",
                       	   "Info","Menu","Exit"
                       	   ];								
var nscreenTips = "GuideOn helps the users navigate through this vast amount of contents.";
var nscreenContent = 'Steps 1.Click "TCL nScreen" on phone. Connect phone with TV via same LAN; 2.Click "GuideOn" to enter GuideOn; 3.GuideOn provides functionality similar to a printed program guide by informing the users as to which television content is available;'
var singalBrokenoffTips = "The signal is interrupted. The system cannot finish downloading";
var contentSpan1_1Array_AU = [["POWER:","SOURCE:","MENU:","BACK:","INFO:","HOME:","EXIT:","LIST:"],
	["Turns power on or standby mode","Select the input source",
		"Show TV settings menu","Go back to the Previous menu or exit a running APP",
		"Shows program information","Goes to homepage","Go back to the Previous menu or exit a running APP",
		"Shows the channel list"]];
var contentSpan1_1Array_AU = [["POWER:","SOURCE:","MENU:","BACK:","INFO:","HOME:","EXIT:","LIST:"],
                            ["Turns power on or standby mode","Select the input source",
                                "Show TV settings menu","Go back to the Previous menu or exit a running APP",
                                "Shows program information","Goes to homepage","Go back to the Previous menu or exit a running APP",
                                "Shows the channel list"]];
var guideDescriptionWords ="Please scan the QR code to download the app Guideon to your telephone";
var settingNoticeSourceName ="Auto source";
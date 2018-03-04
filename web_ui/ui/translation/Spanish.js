
var all_country 	= ["Australia","Austria","Bélgica","Bulgaria","Croacia","República Checa","Dinamarca","Finlandia","Francia","Alemania",
						"Grecia","Hungría","Italia","Luxemburgo","Países Bajos","Noruega","Polonia","Portugal","Rumanía","Rusia",
						"Serbia","Eslovenia","España","Suecia","Suiza","Reino Unido","Nueva Zelanda"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Letonia","Eslovaquia","Turquía","Irlanda","*","Filipinas","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"China","*","*","*","*","*","*","Otros","Lituania"/*新添加的，底层结构体中没有*/,"Ucrania"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Lituania"];							
				
var all_language 	= ["Checo","*","Danés","*","*","Alemán","Inglés","Español","Griego","Francés",
						"Croata","*","Italiano","Húngaro","Holandés","Noruego","Polaco","Portugués","Ruso","Rumano",
						"Esloveno","Serbio","Finlandés","Sueco","Búlgaro","Eslovaco","*","*","Gaélico","*",
						"Galés","Árabe","Irski","Letón","*","Turco","Estonio","Holandés"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Audio original"/*Qaa*/,"No definido"/*Undetermined*/,"*","Desconocido",
						"No definido","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Vasco","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Bielorruso","*","*","Catalán","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Gallego","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandés","*","*","*","*","*",
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
						"*","*","*","*","*","Romance","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletexto",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ucraniano","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Des.","Act."];
var okCancel		= ["Aceptar","Cancelar"];
var yesNo			= ["SÍ","NO"];
var level			= ["Des.","Baja","Alta","Media"];
var manualAuto		= ["Manual","Auto"];
var homeShop		= ["Casa","Tienda"];
var picPreset		= ["Estándar","Dinámico","Natural","Cine","Cine Digital","Personal"];
var picColorTemp	= ["Fría","Normal","Cálida","Cálida2","Usuario"];
var pic3dNavig		= ["Manual","Auto","Semi-Auto"];
var _3dOptions		= ["Modo 3D","3D a 2D","Alternar I-D","Profundidad de Campo"];
var pic3DMode       = ["Des.","2D a 3D","Lado a Lado","Arriba y Abajo","Intercalar línea"];
var picEcoOptions	= ["Ahorro de energía","Sensor de luz","Atenuación local","Atenuación de mezcla"];
var picGeoOptions	= ["Geometría","Posición H.","Posición V.","Reloj","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["Rojo","Verde","Azul","Comp. Rojo","Comp. Verde","Comp. Azul"];
var souOptions		= ["Sonido preajustado","Balance","Retraso de audio","SRS TSHD","Ctrl volumen auto.",
						"Tipo SPDIF","Retraso SPDIF","Colocación de TV","Idioma de audio ","Tipo de sonido",
						"Descripción por audio","Tipo de salida de audio digital","Configuración Dolby profesional"];
var soundOutputoptions =["Salida DAP del altavoz del TV","Salida de codificación AVR externa"];
var inteligenteqoptions 	=["Focalizado","Enriquecido"];						
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Des."];
var colorSpace      = ["Auto","Estándar","Usuario","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Surround virtualizer","Activador de diálogo","Amplificador de bajos","Volumen inteligente","Media intelligence","Gráfico EQ","EQ inteligente"];
var chOptions		= ["Barrido de canales","Lista de canales","EPG","Organizador","Diagnóstico del canal",
						"cambio de hora","Subtítulo","Teletexto","Tipo de lista de canales"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Potencia señal","Calidad de señal","Frecuencia (KHz)","ID de servicio","Id. de red","Nombre de red"];
var chScanOptions	= ["País","Modo sintonizador","Búsqueda automática","Actualiz. autom. ","Búsqueda manual analógica ",
						["Búsqueda manual cable","Búsqueda manual antena","Sintonizado manual de satélite"],"Configuración de antena satelital","Selección de red favorita","Lista de canales limpios",];
var favNetDes		= "Seleccione su red favorita";
var tuner			= ["Cable","Antena","Satélite"];//Satelite 无翻译
var passError		= "Contraseña incorrecta.\n¡Introdúzcala de nuevo!";
var chType			= ["Canales analógicos: ","Canales digitales: "];
var chScanStatus	= ["Estado: Buscando","Estado: Búsqueda completada","Estado: Búsqueda cancelada","Estado: Error de búsqueda"];
var chScanPara		= ["Frecuencia (KHz)","Modulación","Vel. símb. (Ksím/s)","Id. de red","Sistema",
						"Ajuste fino","Potencia señal","Calidad de señal","Modo búsqueda","Id de canal"];
var chScanParaMHZ      = ["Frecuencia (MHz)"];
var chAtvManSys		= ["EUR OCC","EUR OR","Reino Unido","Francia"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Auto"];
var chCleanDes		= "¿Desea limpiar la lista de canales?";
var chDeletDes		= "¿Está seguro que desea eliminar el canal?";
var chOperator		= ["Ziggo","UPC","Otros"];
var chScanType		= ["Digital & Analógico","Digital","Analógico"];
var chScanMode		= ["Completo","Avanzado","Rápido"];
var bookingModes	= ["Grabación","Recordatorio"];
var dayName			= ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
var monthName		= ["Ene", "Feb","Mar","Abr","Mayo","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
var filter			= ["Филтър","Tipo","Subtipo"];
var chEpgFirstGenre	= ["Cine","Noticias","Espectáculo","Deportes","Infantil","Música","Arte","Social","Educación","Ocio","ESPECIAL"];
var chEpgSecondGenre= [["Drama","Detectives","Aventuras","Ciencia ficción","Comedia","Telenovela","Romance","Serio","Película para adultos"," "," "," "],
						["Actualidad","Información metereológica","Revista actualidad","Documental","Debate"," "," "," "," "," "," "," "],
						["Espectáculo","Concurso","Variedades","Entrevistas"," "," "," "," "," "," "," "," "],
						["Deportes","Eventos especiales","Revistas deportivas","Fútbol","Tenis",
							"Deportes de equipo","Atletismo","Deportes de motor","Deportes acuáticos","Deportes de invierno",
							"Hípica","Artes marciales"],
						["Infantil","Preescolar","Entretenimiento de 6 a 14 años","Entretenimiento de 10 a 16 años","Informativo","Dibujos animados"," "," "," "," "," "," "," "],
						["Música","Rock","Serio","Folk","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Arte","Artes escénicas","Bellas artes","Religión","Cultura popular",
							"Literatura","Películas","Experimental","Difusiones","Nuevos medios",
							"Revistas de arte","Moda"],
						["Social","Revistas","Economía","Gente famosa"," "," "," "," "," "," "," "," "],
						["Educación","Naturaleza","Tecnología","Medicina","Otros paises","Ciencias sociales","Educación adicional","Idiomas"," "," "," "," "],
						["Aficiones de entretenimiento","Turismo","Artesanía","Motor","Ejercicio y salud","Cocina","Publicidad","Jardinería"," "," "," "," "],
						["Idioma original","Blanco y negro","Sin publicar","Emisión en directo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Saltar canal","Ordenar canales","Editar canales","Borrar canal","Canal intercambio","Canal inserción"];
var chEditPara 		= ["Nombre de red","Número del canal","Nombre del canal","Frecuencia","Sistema de color","Sistema de sonido"];
var chSatTitles		= ["Tipo de satélite","Configuración de antena satelital","seleccionar Satélite"];
var chSatEidtOptions= ["Nombre de satélite","Posición","LNB poder","Frecuencia LNB (MHz)","Entrada de Disco",
						"Tono 22 Khz","ráfaga de tono","Frecuencia (KHz)","Vel. símb. (Ksím/s)","Polarización",
						"Potencia señal","Calidad de señal","Estado del satélite"];
var chSatAutoPromt	= [["Todos","Red"],
						["Todos","Libre"]];
var chSatAutoScanOptions=["seleccionar Satélite","Modo búsqueda","Canales"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Desactivar","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Act.","Des."];
var chSatToneBurst	= ["Desactivar","ráfaga de tono A","ráfaga de tono B"];
var chSatPolarization= ["Horizontal","Vertical"];
var chSatSetupOptions=["Tipo de antena","Sintonizador","Frecuencia de la banda"];
var chSatAntennaType= ["Cable único","Universal"];
var chSatUserBands	= ["Banda usuario 1","Banda usuario 2","Banda usuario 3","Banda usuario 4","Banda usuario 5","Banda usuario 6","Banda usuario 7","Banda usuario 8"];
var chSatOthers		= ["Repetidor"];
var chSatSetupOthers= ["Definido por el usuario"];
var pleaseSelectSat = "¡Seleccione primero los satélites!";
var subOptions		= ["Subtítulo","Idioma del subtítulo digital","2º idioma del subtítulo digital","Tipo de subtítulos"];
var ttxOptionsCon      = ["Idioma de la página de descodificación","Idioma de teletexto digital"];
var subType			= ["Normal","Sordos"];
var netIntf     	= ["Ethernet","Inalámbrico"];
var netConnDes		= ["La TV esta realizando test de conexión. Por favor, espere",
						"¡La prueba de conexión de red es exitosa!",
						"La prueba de conexión de red falló."];
var netSsidError	= "La longitud válida del SSID es de 1~32 caracteres. Verifique el SSID.";
var netOthers		= ["Código PIN "];
var netWlessAutoDes	= ["Por favor, cerciórese de que el PIN siguiente se instala en el Punto de Acceso antes de pulsar OK.",
						"Por favor, pulse el botón en su Punto de Acceso antes de que transcurran 120 segundos desde que pulsó OK."];
var netConnRemind	= ["¡Contraseña incorrecta!",
						"Conectando. ¡Espere!",
						"¡Conexión con éxito e IP obtenida!",
						"Fallo de Enlace",
						"El TV esta buscando Ap\nPor favor, espere",
						"¡No hay ningún dispositivo inalámbrico conectado al TV!"];
var netWireIpOptions= ["Instalación IP","Tipo de dirección","Dirección IP","Máscara Subnet","Puerta predeterminada","DNS primario","DNS secundario"];
var netWireConnRemind= ["Por favor, introduzca un valor entre 0 y 255.",
						"¡Conectado exitosamente!",
						"Ingrese una dirección válida",
						"¡Conectado exitosamente!",
						"¡Fallo al conectar!",
						"Conectando. ¡Espere!",
						"Ingrese un valor entre 1 y 223."];
var netFlixOptions	= ["Desactivar","ESN"];
var netFlixDes	 	= ["¿Está seguro que desea desactivar?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Actualizar software";
var netUpdateDialogTitle = "Actualización de software";
var netBGDownloadTitle 	= "Descargando";
var netUpdateLoadingPrompt= ["Buscando actualizaciones, espere",
							"Se está descargando el software... ¡Espere!",
							"¡NO apague la TV durante la actualización de software!",
                            "¡La actualización imperativa del software se descarga automáticamente en segundo plano!"];
var netUpdatePrompt= ["¡Enhorabuena, tiene la versión de software más actualizada!",
						"Se encontró la nueva versión XXXX del software. ¿Desea descargarla ahora? Esto puede tardar un poco dependiendo del estado de su red.",
						"Fallo en el Inicio de Sesión.",
						"¡No se pudieron recibir datos, intente nuevamente más tarde!",
						"¡Error de actualización XML!",
						"Fallo de Enlace",
						"Descarga de software realizada correctamente. ¿Desea iniciar la instalación?",
						"¡Datos perdidos! ¡Error en la descarga!",
						"Error al comprobar el paquete, ¡por favor inténtelo de nuevo!",
						"La red es anómala. Por favor, revísela y vuelva a conectar…",
						"Fallo al actualizar. Por favor, ¡Reinicie su TV!",
						"El archivo de actualización se eliminó de forma inesperada. Por favor, vuelva a actualizar por red.",
						"El software se ha descargado con éxito en segundo plano. ¿Quiere actualizar?"];
var netUpdateButtonText = ["Descargar", "Actualizar", "Más tarde", "Nunca", "Aceptar","Continuar"];
var autoDetectPrompt = ["Se encontró la nueva versión XXXX del software. ¿Desea descargarla ahora? Esto puede tardar un poco dependiendo del estado de su red.",
						"Se encontró la nueva versión XXXX del software. ¿Desea actualizarlo ahora?",
						"La actualización por red fue interrumpida la última vez. Debe volver a actualizar.",
                        "La descarga del nuevo software versión XXXX no ha finalizado. ¿Desea continuar ahora?",
                        "Software descargado, ¿desea actualizar ahora?"];
var sysOptions		= ["Manual electrónico","Idioma del menú ","Temporizador ","Bloquear","Configuración entradas",
						"Actualizar software","Ubicación","Modo HbbTV","Cookies","Interfaz común",
						"Ajustes avanzados","Restablecer tienda","Indicador LED"];
var sysResetDes		= "¿Está seguro?";
var sysMenuLangOptions=["Idioma","Lenguage de audio preferido","Idioma de audio preferido 2º"];
var sysTimerOptions	= ["Zona Horaria","Nombre de zona","Reloj","Tiempo de suspensión","Standby automático", "Country region"];

var sysTimeZone		= ["Como emisora","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Des.","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Des.","4 horas","6 horas","8 horas"];
var sysRegionName	= ["Madrid","Canarias"];
var sysClockOptions	= ["Sincr. automática","Fecha","Hora","Encendido autom.","Temporizador ",
						"Encender canal","Apagado autom.","Temporizador "];
var sysTimer		= ["Des.","Diariamente","Una vez"];

var sysInputSet		= ["Sin etiqueta","DVD","Blu-ray","HDD","DVDR",
						"Grabador HD","Juego","VCR","PC","STB digital",
						"HD digital STB","Cámara","Grabadora ","Otros"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Por USB","Por de red","Por canal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"¡No podemos encontrar el nuevo software en la transmisión!",
						"Se encontró la nueva versión XXXX del software. ¿Desea actualizarlo ahora?",
						"Inserte la memoria USB.",
						"Error al comprobar el paquete, ¡por favor inténtelo de nuevo!",
						"¡NO desconecte la llave USB ni apague la TV durante la actualización del firmware!",
						"El software se ha descargado correctamente.\n¡El TV se reiniciará automáticamente!",
						"Se encontró la nueva versión XXXX del software. ¿Desea descargarla ahora? Esto puede tardar un poco dependiendo del estado de su red.",
						"Descargando",
						"Descarga de software realizada correctamente. ¿Desea iniciar la instalación?",
						"¡Error!",
						"Buscando archivos de actualización",
						"El software se ha actualizado con éxito.\nReinicie la TV ahora."];
var sysProductInfo	= ["Versión actual","Nombre producto","Nombre del fabricante","Nombre de chasis"];
var sysCiDes		= ["Sin tarjeta CI presentada."];
var sysAdOptions	= ["Registrar DivX ®","Cancelación del registro DivX(R)","T-Link","Authorization Error","Confirmación de eliminación del registro",
						"Confirmación de alquiler","Alquiler caduco","ID declaración Bluetooth"];
var sysRegistDes	= ["Debe registrar su dispositivo para reproducir vídeos DivX protegidos",
						"Código de Registro:",
						"Registro en http://vod.divx.com"];
var sysDregistDes	= ["Código de cancelación:",
						"Cancele la cuenta en http://vod.divx.com",
						"¿Continuar con el alta?"];
var mediaAuthorization = ["Su dispositivo no tiene autorización para reproducir este vídeo DivX(R) protegido."];
var deregistrationConfrimation = ["Su dispositivo ya ha sido registrado","¿Está seguro de querer darse de baja?"];
var rentalConfirmation = "El alquiler de DivX(R) ha usado XXXX de los YYYY visionados. ¿Continuar?";
var rentalExpired 	= "El alquiler por DivX(R) ha usado XXXX de YYYY vistas. El alquiler por DivX ha caducado.";
						
						
var sysLockOptions	= ["Bloqueo de canal","Bloqueo intervalo de tiempo","Bloqueo de programas","Bloquear entrada","Bloqueo de panel frontal","Bloquear instalación",
						"Cambiar contraseña","Volumen máximo","Limpiar todos"];
var sysTimeIntervals= ["Tipo de bloqueo","Hora de inicio","Hora de fin"];
var sysRatingOptions= ["Ninguno","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Clasificación X (España)"];
var changePass		= ["Cambiar contraseña","Contraseña nueva","Confirmar contrasena"];
var changePassDes	= ["Contraseña incorrecta.\n¡Introdúzcala de nuevo!",
						"No coincide la contraseña.\n¡Introdúzcula de nuevo!",
						"¡Contraseña configurada con éxito!",
						"Este código es demasiado sencillo para establecerse como contraseña. n\Por favor, introduzca otro."];
var sysPowerOnChOptions= "Seleccionar modo";
var sysPowerOnCh	= ["último estado","Seleccionar usuario"];
var netWlessSecu    = ["Abrir","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ninguno","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","No ayuda"];
var netWlessSecu3	= ["Ninguno","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","No ayuda"];
var netOptions		= ["Conexión a Internet","Interfaz","Configuración inalámbrica","Configuración de IP","Información",
						"Test de conexión","DLNA","Mando a dist.","Ajustes de Netflix","Enlace WiFi TV",
						"Tipo de dirección","Dirección IP","Máscara Subnet","Puerta predeterminada","DNS primario",
						"DNS secundario","SSID","BSSID","Introduzca el SSID:","Id. de usuario"];
var chEditDes		= ["¡Número de canal duplicado!","¡Pulse la tecla Roja para eliminar el carácter actual!","Números de canales no válidos."];
var chEpgNoProgram	= "¡No hay información del programa, busque primero los canales!";
var chEpgWords		= ["Guía de Programas","No hay datos de programa.","¡Canal bloqueado!","No hay detalles de programa.","No hay título de programa."];
var chEpgBooking	= ["horario info", "Número del canal","Fecha de inicio","Hora de inicio","Hora de fin",
						"Tipo de repetición","Tipo de programa","Añadir","Reemplazar","Cambiar",
						"Añadir/Modificar"];
var epgHotKey		= ["El día anterior","El día siguiente","Филтър","Lista de programas","Añadir programa"];
var chEpgBookRemind	= ["Hora de inicio incorrecta","Hora final incorrecta","Programación duplicada","Guardado con éxito.","Exitosamente eliminado."];
var chSchePara		= ["Lista de programas","Hora de inicio","Fecha de inicio","Título del programa","Nombre del canal",
						"Duración","Repetir","Programación","Editar","Eliminar"];
var dateTimer		= ["Una vez","Diariamente","Semanal"];
var scheduleDeleteReminds="¿Desea eliminar este programa?";
var scheduleNoLists	= "No hay lista de programas. Pulse la tecla \"Roja\" para agregar uno.";
var chListWords		= ["Lista de canales","Selecccionar Lista","Modo sintonizador","Agregar a Favorito","Eliminar",
						"Seleccionar lista de canales","Seleccionar modo radio","Intercambiar"];
var chListType		= ["Todos","Digital","Analógico","Radio","Libre","Favoritos"];
var chAutoScanOptions=["Seleccionar operador","Tipo de canal","Búsqueda automática"];
var souSoundType	= ["No válido","Mono","Mono","Estéreo","Estéreo",
						"Mono","Estéreo","Dual1","Dual2","Dual2",
						"Mono Nicam","Nicam estéreo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Música","Cine","Voz clara","Estándar","Personal"];
var picAdRgbMode	= ["Des.","Sólo rojo","Sólo verde","Sólo azul"];
var picAdOptions	= ["Reducción de ruido","MPEG NR","RGB mode","Contraste Dinámico","Claridad de movimiento de LED",
						"Tono piel","Modo película","Modo Juego","Temperatura de color","Balance De Blancos",
						"Congelar","Estiramiento de Negro","Sobreexploración","Gamma","Modo HDMI","Balance de blancos 10P","Extensión de color",
						"Reducción de desenfoque","Reducción de vibración","Espacio de color","Claridad de movimiento"];
var pic10Pwhite     = ["Intervalo","Rojo","Verde","Azul","Restablecer","Color","Amarillo","Cian","Magenta"];
var picMotionClarity = ["Modo de movimiento","Interpolación de movimiento","Claridad de movimiento de LED","Reducción de desenfoque","Reducción de vibración","Restablecer"];
var picMotionMode   = ["Auto","Películas","Suave","Borrar","Deportes","Cliente"];
var picResetDes		= "Todos los ajustes personales serán restablecidos. ¿Está seguro que desea realizar la acción seleccionada?";
var pic10PReset     = "¿Está seguro que desea restablecer el balance de blancos 10P?";
var picMotionReset  = "¿Desea restablecer la claridad de movimiento?";
var picColorSpaceReset    = "¿Está seguro que desea restablecer el espacio de color?";
var picOptions		= ["Modo de imagen",
						"Luz de fondo","Brillo","Contraste","Saturación","Matiz","Nitidez","Temperatura de color","Modo de pantalla","Formato automático",
						"Realce en deportes","3D","Navegación 3D","ECO Configuración","Geometría",
						"Ajustes avanzados","Aplicar modo de imagen","Recuperar Imagen"];
var picSize			= ["Formato 16:9", "Formato 4:3", "Formato 14:9", "Cinerama",
						"Zoom 16:9", "Zoom arriba 16:9","Zoom 14:9","Zoom extendido","Zoom panorámico",
						"Zoom 2","Zoom panorámico 2","Coincidencia nativa de pantalla","Punto a punto ","Original","Panorama"];
var others			= ["Volumen","Retransmisión","Contraseña","Estado","Guardar","Reemplazar","Iniciar","Salir","Búsqueda","Eliminar",
						"Ninguno","Automático","Explorar","Seguridad","Conectar","Actualizar","Reintentar","Detener","Configuración","Canales",
						"Editar","Introducir","Señal!","Finalizar","Estéreo","Audio","Fuente","Sin audio","Consejos","Restablecer",
						"Cliente","Configuración","Guardar","Usuario","Cerrar teclado","Modo de seguridad","A diario","Lista PVR"];
var direction		= ["Izquierda","Derecho","Arriba","Abajo"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Desconocido"];
var soundChannels   = ["Desconocido","Mono","Sub","Mono dual","Estéreo","Stereo Sub","Stereo Dolby Surround","Surround 2CH","Surround","3,0 canales","4,0 canales","5,0 canales","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2 Canales Lfe","Surround Lfe","3,1 canales","4,1 canales","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Izquierda","Derecho","Otros"];
var prompts			= ["Ajuste la imagen que mejor se adapte a su entorno de visualización.",
						"Ajuste el nivel de brillo. Entre más cercano a 100 sea el valor, mayor será el brillo.",
						"Ajuste el nivel de contraste. Entre más cercano a 100 sea el valor, mayor será la diferencia entre oscuro y brillo de la imagen.",
						"Ajuste el nivel de saturación. Entre más cercano a 100 sea el valor, más intenso será el color.",
						"Ajuste el nivel de nitidez. Entre más cercano a 100 sea el valor, más claros serán los detalles.",
						"Ajuste el nivel de la luz de fondo. Entre más cercano a 100 sea el valor, más brillo tendrá la pantalla.",
						"Ajuste el nivel de tinte. Ese ajuste modifica los tonos de color.",
						"Seleccione el formato de la imagen que mejor se adapte al programa que está visualizando.",
						"Configurar las opciones de ahorro de energía.",
						"Ajuste la geometría de la pantalla cuando conecte un dispositivo de PC.",
						"Seleccionar más ajustes avanzados de imagen.",
						"Recuperar todos los parámetros de imagen a sus valores predeterminados.",
						"Seleccione un modo de sonido que se ajuste a sus preferencias personales.",
						"Ajustar el balance de volumen entre el canal izquierdo y el canal derecho.",
						"El sistema de recuperación de sonido TruSurround HD proporciona alto rendimiento en sonido y claridad a frecuencias bajas y altas.",
						"Formato de Interfaz Digital se está conectando la salida de sonido digital de TV al equipo de audio del teatro en casa.",
						"Seleccione el idioma de audio que se acomode a sus preferencias personales.",
						"Habilite la opción para personas con incapacidad auditiva para disfrutar programas de televisión.",
						"Pruebe la imagen, el sonido y la señal de su TV.",
						"Seleccione el tipo de lista de canales que se ajuste a la señal de su TV.",
						"Seleccione el idioma de los subtítulos de programa mostrados en la parte inferior de la pantalla.",
						"Vea el texto y las imágenes del canal actual.",
						"Digital Living Network Alliance. Disfrute de música, fotos y vídeo a través de la red local desde otros dispositivos, tales como un PC.",
						"Visualice el contenido del teléfono inteligente en el TV y use el teléfono inteligente como mando a distancia para el TV.",
						"Visualice el contenido de un dispositivo Android compatible con Miracast en la pantalla de su TV.",
						"Bloquee su TV.",
						"Seleccione un nombre para su dispositivo.",
						"Seleccione el su entorno de visionado.",
						"Recuperar todos los parámetros del sistema a sus valores predeterminados."];
var initialTitle	= ["Bienvenido","Configuración inicial"];
var initialPrompt	= ["Realice la configuración inicial ahora. Un mundo excitante le espera.",
						"Por favor, seleccione su idioma:",
						"Por favor, seleccione su país:",
						"Seleccione su ubicación:",
						"Por favor, seleccione el tipo de su conexión:",
						"Por favor, seleccione el modo de conexión de su red por cable:",
						"¡No se pudo conectar xxxxxxxxx! Conecte el dispositivo de acuerdo al siguiente diagrama o seleccione Izquierda para restablecer.",
						"¡Conectado a xxxxxxxxx! Seleccione Derecha para continuar.",
						"1) Su TV podría contar ya con un adaptador inalámbrico integrado\n 2) O, si se proporciona un adaptador USB inalámbrico, conéctelo a su TV.  Enseguida, seleccione el modo de conexión de red inalámbrica",
						"Explorando. Espere....",
						"¡No hay ningún dispositivo inalámbrico conectado al TV!",
						"Asegúrese de que el siguiente código PIN esté instalado en la AP antes de hacer clic en \"Siguiente\".",
						"¡Presione el botón en el AP en un tiempo de 120 segundos antes de pulsar Derecha!",
						"WPS (Configuración protegida Wi-Fi)",
						"PIN (Número de identificación personal)",
						"PBC (Configuración de botón pulsador)",
						"Solamente puede tener acceso al siguiente contenido si cuenta con una conexión a la red. ¿Desea omitir la configuración de la red?",
						"Existen nuevas actualizaciones de software para descargar, esto puede tardar dependiendo del estado de su red.",
						"Actualizando el software de su TV se asegura poder disfrutar de las últimas funciones y servicios.",
						"No disfrutará de las funciones y servicios más recientes. ¿Desea omitir la actualización de software?",
						"Pulse el botón Derecha para continuar.",
						"No apague el dispositivo durante la actualización ya que esto podría ocasionar un funcionamiento incorrecto del TV.",
						"Si no desea actualizar, seleccione NO.",
						"Actualizando, espere",
						"También puede actualizar el software en SISTEMA/ACTUALIZACIÓN DE SOFTWARE.",
						"El país seleccionado requiere establecer una contraseña. \nPor favor, establezca un código para su TV y confírmelo.",
						"This code is too simple.\nPlease use different digits.",
						"¡Felicidades! Configuración inicial completada. Puede modificar su configuración a través del menú principal y los menús secundarios relacionados.",
						"Por favor, seleccione el modo de seguridad:",
						"Seleccione el modo de conexión de red inalámbrica.",
						"Red"];
var initNetCabAndDonRe = ["¡No hay ningún cable de red conectado, conecte un cable de red!","No se ha proporcionado un adaptador inalámbrico integrado o adaptador USB inalámbrico."];
var initChPrompt = ["Instalación de canal de TV","Seleccione el tipo de exploración de Antena.","Procesando sintonía automática…","Se encontraron los siguientes canales de Antena:","Por favor, seleccione el tipo de búsqueda por cable.","Seleccione un operador de la siguiente lista.","Por favor, configure la información de búsqueda","Se han encontrado los siguientes canales por cable:","Por favor, seleccione un operador de la lista siguiente","Por favor, seleccione satélites para buscar o editar el satélite seleccionado","Por favor, establezca los parámetros del satélite","Se encontraron los siguientes canales y también se puede realizar nuevamente la exploración de canales en Canal/Exploración de canales."];
var initClockPrompt = ["¡Obtener la hora proporcionada por la red!",
						"Ajuste la fecha y la hora:"];
var initialOptions	= ["Entorno","Configuración de red","Actualizar software","Instalación de canales","Reloj"];
var initialHotkeys	= ["Volver","Seleccionar","Siguiente"];
var initLocations	= ["Casa","Tienda","Tienda con demo"];
var initNets		= ["Cableada","Inalámbrico","No tengo una conexión de red"];
var initWireManuals	= ["Dirección IP","Máscara Subnet","Puerta predeterminada","DNS primario","DNS secundario"];
var initSoftUpdates = ["Actualizar ahora","Actualizar más tarde"];
var initChannelIns	= ["Continuar","No deseo instalar canales"];
var initChScanTypes	= ["Digital & Analógico","Digital","Analógico","No quiero buscar"];
var initChDvbts		= ["Canales ATV de antena:","Canales DTV de antena:"];
var initChDvbcs		= ["canales ATV por cable:","canales DTV por cable:"];
var initChDvbss		= ["Canales por satélite:"];
var initChDvbSOther	= ["No quiero buscar satélites"];
var initEndConnectedStatus= ["Desconectado","WiFi conectada","Alámbrica conectada"];
var initEndInstallations= "XXXX canales instalados";
var initEndUpdate	= ["Actualizado"];

var audioScenes 	= ["Sobremesa","Colgado en la pared"];			
var screenSavers	= ["¡No hay información del programa, busque primero los canales!",
						"¡No hay señal!",
						"Codificado",
						"Sólo datos",
						"Programa audio",
						"Sin audio ni vídeo",
						"No disponible",
						"Sin teletexto",
						"No hay datos de programa.",
						"¡Programa bloqueado!",
						"¡Programa bloqueado!\nPulse OK e introduzca su código.",
						"No hay detalles de programa.",
						"Programa no apto para menores.\nPresione OK e ingrese su código.",
						"¡Canal bloqueado!",
						"¡Canal Bloqueado!\nPulse OK e introduzca su código.",
						"¡Entrada bloqueada!\nPulse OK e introduzca su código.",
						"¡No hay ayuda!",
						"Este servicio no está disponible actualmente",
						"Entrada cerrada",
						"No hay título de programa.",
						"Sin función"
						];
var chBookingPromt	= ["El canal actual tiene una grabación programada, el TV empezará a grabar.",
						"Se encontró la grabación programada.\n Cambie a XXXX para grabar",
						"El canal actual tiene un recordatorio.",
						"Se encontró un recordatorio.\n Cambie a XXXX"];
var timeUnit		= ["Seg","Min"];
var ciPromt			= ["Los datos de la red han cambiado. Para actualizar puede realizar una exploración de actualización. ",];
var othersPromt		= ["Por Favor, espere...",];
var menuOptions		= ["Imagen","Sonido","Canal","Red","Sistema"];
var optionOptions	= ["Modo de imagen","Sonido preajustado","Congelar","T-Link","cambio de hora","PVR","Lista de programas","Configuración"];
var optionTLinkPromt= [["Encendido automático","Standby automático","Menú Guía"],
						["Encendido","En espera","Amplificador de volumen"]];
var powerPromt		= ["¡El TV se apagará pronto! Por favor, pulse cualquier tecla para cancelar."];
var ttxLanguage		= ["EUR OCC","EUR OR","Ruso","Árabe / Hebreo","Persa","Árabe","Bielorruso","Griego","Turco"];
var ttxOptions		= ["Revelar","Subpáginas de ciclo","Idioma","Página de alarma","Últimas noticias"];
var weekday         = ["Domingo    ","Lunes ","Martes     ","Miércoles  ","Jueves     ","Viernes    ","Sábados    "];
var lcnConfflict	= "Este programa de presenta problemas de recepción. Existe otra versión disponible en el canal %d.";
var inShopMode		= "Su TV se encuentra en el modo de tienda. Para el modo de casa, seleccione \"Sistema\" y cambie \"Ubicación\" en el menú.";
var nitRefresh		= "Se han modificado los datos de red. ¿Desea realizar un barrido de actualización?";
var picHDMIMode     = ["Auto","Gráfico","Vídeo"];

var glassRemind    	= ["Empareje sus gafas 3D con el TV (Mantenga pulsada la tecla POWER de las gafas 3D).","Sus gafas 3D están conectadas al TV ",""];
var pvrRemind 		= ["No extraiga el dispositivo USB ni interrumpa la alimentación"];
var pvrConName   	= ["PVR","Información de programa:",["Nota: Si se graba el canal HD, por favor, para seleccionar el disco (de la velocidad> 5.0MB/sec), y para seleccionar el disco (de la velocidad> 3.0MB/sec) cuando desee grabar el canal SD.","El video grabado está guardado en la carpeta “pvr”."],"Detener","Grabación","Ordua","Minutos","Duración","Consejos","Use las teclas de flecha para ajustar la duración de la grabación."];
var pvrDisRemind 	= "Inserte un dispositivo USB para grabar.";
var pvrRemindWords  = ["¿Desea salir?",
							"¿Desea detener la grabación y explorar los archivos grabados?",
							"El disco ha sido extraído.",
							"No hay suficiente espacio libre.",
							"No hay archivos grabados. Iniciar la grabación.",
							"PVR  no puede iniciarse en un Canal Codificado.",
							"Función no disponible",
							"Guardado con éxito.",
							"¿Desea parar el proceso de grabado y cambiar la fuente de entrada?",
							"El TV finalizará la grabación en progreso. ¿Desea salir?",
							"La grabación PVR requiere una señal de TV para que funcione correctamente, compruebe la señal."];
var pvrChangeCh 	= ["¿Desea cambiar de canal?",
							"¿Desea parar el proceso de grabado y cambiar el canal?"];
var pvrChangeToPIN8	= ["¿Desea cambiar la fuente al dispositivo conectado en la entrada SCART?",
				    		"¿Desea detener la grabación en progreso y cambiar la fuente al dispositivo conectado en la entrada SCART?"];
var pvrChangeToCEC  = ["¿Desea cambiar la fuente al dispositivo conectado en una entrada HDMI?",
				  			 "¿Desea detener la grabación en progreso y cambiar la fuente al dispositivo conectado en una entrada HDMI?"];
var pvrGuideJump    = ["¿Desea ingresar a la EPG?",
							"¿Desea para el proceso de grabado e introducir EPG?"];
var pvrMediaJump    = ["¿Desea ingresar a medios?",
							"¿Desea parar el proceso de grabado e introducir Media?"];
var timeshiftExtra	= ["¿Desea detener el desp de tiempo y cambiar el Cambiar canal?",
						"¿Desea detener la pausa en directo y cambiar la fuente al dispositivo conectado en la entrada SCART?",
						"¿Desea detener la pausa en directo y cambiar la fuente al dispositivo conectado en una entrada HDMI?",
						"Timeshift no puede iniciarse en Canal Codificado.",
						"¿Desea detener la pausa en directo e ingresar a la EPG?",
						"¿Desea detener el desp de tiempo y cambiar el TV a modo USB?",
						"¿Desea detener el desp de tiempo y cambiar el Cambiar la fuente de entrada?",
						"Inserte un dispositivo USB para grabar.",
						"El tamaño del disco es insuficiente.",
						"El TV finalizará la pausa en directo en progreso. ¿Desea salir?"];
var timeshiftStatus	= ["Retroceso rápido","Detener","Reproducir","Pausa","Avance rápido"];
var pvrPowerOffRemind= ["Grabación en espera","En espera","El TV está grabando, ¿desea seguir grabando cuando el TV esté en el modo de espera?"];
var timeshiftInitTitle= "Conf. de disco";
var timeshiftInitReminds= ["Este asistente se usa para configurar el disco USB para desp. de tiempo. Selecc.modo config.",
						 "Para un mejor desempeño, recomendamos formatear el disco USB. Se borrarán todos los datos.",
						 "Seleccione tamaño de archivo para desp. de tiempo.",
						 "Formateando",
						 "No hay suficiente espacio libre.",
						 "Creando archivo para desp. de tiempo",
						 "Prueba de velocidad",
						 "¡Velocidad de disco muy baja (< %f MB/seg) para habilitar la función de desplazamiento de tiempo!",
						 "El disco está listo para el desp. de tiempo. Recomendamos cambiar a (de velocidad > %f MB/seg) para un mejor desempeño.",
						 "El disco está listo para el desp. de tiempo."];
var timeshiftInitButtons= ["Formato","Saltar","Cancelar","Aceptar","Finalizar","Salir"];
var timeshiftInitOther=["Veloc. disco:","MB/seg."];

var selectChoice	= "¿Está seguro?";
var chAtvStore		= "Guardar como XXXX";
var chEpgFirstGenreUK= ["Cine","Noticias, Actualidad","ENTRETENIMIENTO","Deportes","Infantil","Educación","Estilo de Vida","Drama"];
var homePageTitleList = ["APLICACIONES","TV","VÍDEOS","Página de inicio"];
var homePageFavAndAllName  = ["Aplicaciones favoritas","Todas las aplicaciones"];
var homePageBackUp = ["Manual electrónico","Guía activada"];
var homePageRemind   = ["Todas las funciones están disponibles solamente después de conectarse a la red.","Su TV no tiene todavía canales disponibles. Los programas están disponibles después de explorar los canales.","Ningún programa","¿Buscar canales ahora?"];
var homePageHistory = ["Historial"];
var miracastTitle = ["Enlace WiFi TV","Dispositivo TCL"];
var miracastRemind=["Enlace WiFi TV le permite compartir la pantalla y el sonido de un dispositivo como un smartphone o tableta en su TV, de manera inalámbrica (p.ej. sin cables). Hace posible que vea en su TV, al mismo tiempo, lo que su smartphone o tableta esté mostrando. Por ejemplo, puede ejecutar un vídeo en su smartphone y verlo simultáneamente en su TV, o usar su tableta como un mando de control del juego cuyo contenido está viendo en la pantalla grande de su TV.","El enlace WiFi TV está listo en el TV. Ahora empiece a compartir la presentación de su dispositivo en el TV.","Conectando. ¡Espere!","¡Fallo al conectar!","Error de conexión. ¡Verifique!"];
var homePageLittleWin = ["Configuración","Medios","Canales fav","Smart TV","EPG"];

var hbbtvStopRemind  = ["¿Desea detener la reproducción?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Presione OPCIÓN para obtener más información";
var emptyListInfo = "¡No hay ningún dispositivo conectado a la TV!";
var optionVideoListArray_1 = ["Modo de imagen", "Sonido preajustado", "Modo de reproducción", "Modo de pantalla", "Modo 3D", 
							  "Alternar I-D", "Profundidad de Campo", "Subtítulo", "Pista de sonido", "Título", "Capítulo", "Info"];
var optionVideoListArray_2 = ["Modo de imagen", "Sonido preajustado", "Modo de reproducción", "Modo de pantalla", 
							  "Subtítulo", "Pista de sonido", "Título", "Capítulo", "Info"];
var bottomTipsText = ["Play/ Pausa", "Retroceso rápido", "Avance rápido", "Lista de reproducción", "Configuración"];
var picturePresetArray = ["Estándar", "Dinámico", "Natural", "Cine", "Personal"];
var videoPlayModeArray = ["Repetir todas", "Repetir una", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Zoom panorámico", "Zoom 2", "Zoom panorámico 2", "Zoom extendido", "Automático"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Zoom arriba 16:9", "Automático"];
var Mode3DArray = ["Des.", "2D a 3D", "Lado a Lado", "Arriba y Abajo", "Intercalar línea"];
var videoOptionListArray = ["Des.", "Pista", "Subtítulo", "Título", "Capítulo"];
var subMenuTitleText = "Subtítulo";
var langMenuTitleText = "Idioma de audio ";
var titleMenuTitleText = "Título";
var mode3DMenuTitleText = "Modo 3D";
var langInfoText = "Pista";
var STOP_RESUME_INFO = "Detener-Retomar";
var playListName = " nombre";
var eb_tips = "Consejos";
var ok_button = "Aceptar";
var eb_info = ["Error de codificación de audio.", "Error de codificación de vídeo.", "El formato de audio no es compatible.", 
			   "Formato de vídeo no soportado.", "No se puede abrir este archivo.", "Error de reproducción, intente nuevamente.",
			   "El formato del archivo no es compatible.", "¡Ups! El reproductor ha dejado de funcionar.",
			   "La ruta de archivo no existe o no es válida.\n Vuelva a insertar el dispositivo de almacenamiento e intente nuevamente.",
			   "¿Continuar la reproducción desde el estado\n de reproducción anterior?"];
var frameTitleText = "Nuevo dispositivo";
var eb_quit_info = "¿Está seguro que desea salir?";
var eb_yes = "SÍ";
var eb_no = "NO";
var offinfo = "Des.";
var naInfo = "Nulo";
var consoleInfoArray = ["Retroceso rápido", "Avance rápido", "Play/ Pausa", "Lista de reproducción"];
var cantOperateText = ["Función no compatible."];
var chapterChangeInfo = "Solamente están disponibles los Capítulos 1 a XXXX.";
var metaDataArray = ["Metadatos de título/edición: ", "Metadatos de capítulo: ", "Metadatos de audio: ", "Metadatos de subtítulos: "];
var metaTitleInfo = "Título";
var metaChapterInfo = "Capítulo";
var videoLoadingInfo = "Analizando...";
var listLoadingInfo = "Cargando…";
var pgInfo = "Clasificación de ley... ";
var fileNameText = " nombre";
var fileDateText = "Fecha";
var fileSizeText = "Tamaño";
var fileDurationText = "Duración";
var fileDirectorText = "Director";
var fileCopyrightText = "Copyright";
var fileArtistText = "Artista";
var fileAlbumText = "Álbum";
var fileGenreText = "Género";
var fileYearText = "Año";
var fileGenreText = "Género";
var mainListArray = ["Todos", "Imagen", "Vídeo", "Música"];
var sortArray = [" nombre", "Fecha"];
var parserArray = ["Normal", "Repetitivo  "];
var emptyTipsInfo = "¡Ups! Se encontró un archivo no compatible.";
var emptyFolderInfo = "¡Ups! Se encontró un archivo no compatible.";
var sortName = "Ordenar por";
var parserName = "Analizador";
var divx_str1 = "Registrar DivX ®";
var divx_str2 = "Cancelación del registro DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "No hay opciones disponibles.";

var musicSoundPresetArray = ["Estándar", "Cine", "Música", "Voz clara", "Personal"];
var musicInformationArray = [" nombre", "Artista", "Álbum", "Género:", "Año:", "Duración:"];
var playListName = " nombre";
var playTipsInfo = ["Está reproduciendo el primer archivo.", "Está reproduciendo el último archivo."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artista";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Sonido preajustado";
var optionBGMInfo = "Reproducir en segundo plano";
var optionAudioOnlyInfo = "Solo audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "¡XXXX se ha conectado al TV!";
var tvRemoteTitle		= "Mando a dist.";
var tvRemoteDeveloper	= "La aplicación fue desarrollada por TCL";
var tvRemoteDeviceTitle	= "Nombre del dispositivo:";
var remoteOption		= ["Compartir multimedia","Mando a distancia","Ayuda","Acerca de","Conexión Inteligente"];
var remotebottom		= " Descargue \"TCL nScreen\" a su teléfono inteligente ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Compartir fotos, vídeos y música con el TV a través del teléfono.",
							"Pasos: \n   1. Haga clic en \"TCL nScreen\" en el teléfono. Conecte el teléfono al TV en la misma red WiFi;\n   2. Haga clic en \"Media Sharing\" para explorar los archivos de medios;\n   3. Envíe el medio al TV para reproducirlo (con una de las siguientes opciones)",
							"      a) Arrastre y suelte el archivo/carpeta sobre el icono de la TV en la parte superior de la pantalla;\n       b) Balancee el teléfono hacia la TV para ejecutar el primer archivo;\n      c) Reproduczca el archivo multimedia en el teléfono y haga 'clic' en el icono de Compartir TV;",
							"   4. Mientras reproduce en la TV, agite el teléfono para reproducir el archivo anterior o el siguiente."];
var controlReminds		= ["Use el teléfono como un mando a distancia para controlar la TV.",
							" ",
							"Pasos: \n   1. Haga clic en \"TCL nScreen\" en el teléfono. Conecte el teléfono al TV en la misma red WiFI;\n   2. Haga clic en \"Remote Control\" para operar el TV."];
var helpDeviceWords		= "Interacción multi-pantalla";
var helpBottom			= " En la era de la tecnología en la nube, los dispositivos inteligentes como el teléfono y la TV se conectan entre sí. ¡Comparta multimedia en pantallas múltiples con su familia y controle la TV a través de su teléfono! ";
var helpReminds			= ["Preparativos\n   1. Descargue e instale \"TCL nScreen\" desde Google Play o Apple Store.\n   2. Conecte el teléfono al TV en la misma red WiFi.",
							" ",
							"Teléfono recomendado\n   1. CPU: más de 800MHz\n   2. Almacenamiento: al menos 80MB de espadio libre",
							" ",
							"Descargo de responsabilidad\n   Si no está disponible \"Control TV\" en su teléfono, póngase en contacto con el fabricante del teléfono. "];
var helpButtons			= ["Anterior","Siguiente"];
var aboutReminds		= ["Mando a dist.","La aplicación fue desarrollada por TCL"];
var aboutExit			= "Salir";
var smartReminds		= ["Conexión rápida e inteligente entre el TV y el teléfono.",
							" ",
							"Pasos \n   1. Conecte el TV y el teléfono inteligente a la misma LAN. Haga clic en \"TCL nScreen\" en el teléfono inteligente.\n   2. Haga clic en \"Smart Connect\" para escanear el código QR.\n   3. Con el TV en el modo de visualización de emisión, presione la tecla INFO del mando a distancia del TV durante 4 segundos, se visualizará un código QR a pantalla completa.",];
var smartQRReminds		= ["Haga clic en Smart Connect en TCL nScreen de su teléfono y escanee el código QR para conectar el TV y el teléfono rápidamente.",
							"El código QR contiene la información de la cuenta LAN. Guárdela adecuadamente."];
							

var consoleTipArray = ["Anterior","Siguiente","Consola","Lista de reproducción"];							
var optionInfoArray = ["Modo de imagen","Modo de reproducción","Duración","Efecto","Info"];

var playModeArray = ["Normal","Cambiar","Repetir"];
var durationArray = ["Breve (5 s)", "Medio (10 s)", "Prolongado (15 s)"];
var effectArray = ["Ninguno", "Disolver", "Barr. dcha.", "Barr. izqda.", "Barr. arriba", "Barr. abajo", "Encajar dentro", "Encajar fuera", "Aleatorio"];
var infoArray = ["Nombre:","Tamaño:","Fecha:","Ubicación"];

var picturePresetBarTitleInfo = "Modo de imagen";
var picturePresetBarArray = ["Estándar","Dinámico","Estudio","Cine","Personal"];
var upTipsInfo = "Mover imagen"; //add yums 2014-10-10
var consoleTipsArray = ["Consola","Anterior","Siguiente","Lista de reproducción","Configuración"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Presione DERECHA nuevamente para reproducir la siguiente imagen","Presione IZQUIERDA nuevamente para reproducir la imagen anterior","Presione ABAJO nuevamente para mostrar la lista de reproducción"]; //add yums 2014-10-10

var optionPvrListArray = ["Modo de imagen","Sonido preajustado", "Modo de pantalla", "Modo 3D", "Subtítulo", "Pista de sonido", "Info"];							
	
var titleSpanFirstArray = ["Mando y Conexión","Operaciones básicas","APLICACIONES","TV","Configuración","Preguntas más frecuentes"];
var titleSpanSecondArray = [["Mando a distancia","Teclas de panel","Fácil navegación","Conexión de TV","Conexión de TV","Conexión de TV","Inalámbrico"],["Iniciador","Barra de estado","Fuente"],["Aplicaciones de reproducción","Medios","Mando a dist."],["Ajustar canal y volumen","Lista de canales","EPG","Instalar canales","Canales favoritos"],["Ajuste de imagen","Ajuste de sonido","Ajuste de canal","Actualizar software","Idioma","Bloqueo parental"],["Preguntas más frecuentes","Preguntas más frecuentes","Solución de problemas","Solución de problemas","Términos y condiciones"]];
var contentSpan1_1Array = [["LISTA:","INFO:","MENÚ:","ENCENDIDO:","FUENTE:","GUÍA:","SMART TV:"],["Muestra la lista de canales","Muestra la información del programa","Va a la página de inicio","Encendido o modo de espera","Seleccione la fuente de entrada","Muestra la información de la EPG (Guía electrónica de programas).","Va a la página de Smart TV"]];
var contentSpan1_2Array = ["Canal anterior","Siguiente canal","Subir el volumen","Bajar el volumen","Va a la página de inicio","Confirmar la opción","Modo de espera / Encendido"];
var contentSpan1_3Array = ["OK/Guía","Subir canal","Bajar canal","Bajar volumen","Subir volumen","Disponible en teclas de flecha en algunas funciones."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","Adaptador de SALIDA AV","LAN","Teléfono inteligente","PC/Codificador/DVD","Amplificador de audio","Amplificador de audio/Monitor","Es posible que su TV no incluya todos los enchufes."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Audífonos","Adaptador de ENTRADA AV","SPDIF","Adaptador de ENTRADA DE AUDIO CMP","Adaptador de ENTRADA CMP (YPbPr)","Dispositivos USB","Dispositivos USB","Audífonos","DVC/Consola de juegos/Codificador/DVD","Amplificador de audio","DVC/Consola de juegos/Codificador/DVD","Es posible que su TV no incluya todos los enchufes."];
var contentSpan1_6Array = ["Interfaz común","SD","VGA","SCART","Mini SCART","ENTRADA DE ANTENA","Tarjeta PCMCIA","Tarjeta SD","PC","Codificador/DVD","Antena/Cable/Satélite","Es posible que su TV no incluya todos los enchufes."];
var contentSpan1_7Array = ["Tablet","PC","Router","Teléfono","TV"];

var contentSpan2Array = [["Pulse las teclas de flecha para ver la Página de inicio.","Enseguida presione OK para ver uno de los programas presentados o ingresar a la aplicación."],["Muestre la fecha, la red y los dispositivos, etc. en la esquina superior derecha de la pantalla."],["Seleccione la fuente de entrada de los dispositivos conectados al TV a través de distintos puertos, tales como, TV, AV, HDMI, etc."]];

var contentSpan3Array = ["Disfrute y vea sus Apps favoritas a través de la página de Smart TV","Vea fotos, vídeos y reproduzca música desde un dispositivo de almacenamiento USB.","Conecte el TV y el teléfono inteligente o tableta a la misma LAN","Haga clic en TCL nScreen o en Control TV del teléfono inteligente o la tableta.","Comparta fotos, vídeos y música en múltiples pantallas con su familia y controle su TV a través de su teléfono inteligente"];

var contentSpan4Array = [["Presione ARRIBA/ABAJO para alternar canales","Presione IZQUIERDA/DERECHA para ajustar el volumen"],["Presione LIST en el mando a distancia para ver los canales","Presione ARRIBA/ABAJO para seleccionar canales"],["EPG es una guía electrónica que se muestra en la pantalla para mostrar los programas de TV programados. Puede navegar, seleccionar, ver y grabar programas."],["Busque y guarde canales"],["Agregue o edite sus canales favoritos en la Lista de canales"]];

var contentSpan5Array = ["Disfrute sus programas favoritos a través de las aplicaciones de vídeo"];

var contentSpan6Array = [["Presione MENU para mostrar las opciones de ajuste del sistema","Ingrese a los ajustes de Imagen para ajustar los valores"],["Presione MENU para mostrar las opciones de ajuste del sistema","Ingrese a los ajustes de Sonido para ajustar las opciones"],["Presione MENU para mostrar las opciones de ajuste del sistema","Ingrese a los ajustes de Canal para ajustar las opciones"],["Actualice su TV cuando esté disponible una nueva versión de software"],["Puede seleccionar el idioma del menú de su elección"],["Les permite a los padres bloquear canales o programas que no son adecuados para niños"]];

var contentSpan7_1Array = [["No hay imágenes ni sonido.","Compruebe si el fusible o el disyuntor están funcionando.","Conecte otro dispositivo eléctrico en la toma de corriente para asegurarse de que esté funcionando o que está activada.","La clavija de corriente está mal enchufada a la toma de corriente.","Compruebe la fuente de la señal."],["Imagen normal, sin sonido","Presione el botón ARRIBA para aumentar el volumen.","El ajuste de sonido es incorrecto.","Error de señal de la emisora."],["Sonido normal, sin imagen","Ajuste el brillo y el contraste","Error de señal de la emisora.","Compruebe si se encuentra solamente en el modo de audio."]];
var contentSpan7_2Array = [["Interferencia de la frecuencia de radio","Esta interferencia produce que ondas en movimiento o bandas diagonales, y en algunos casos, se pierde el contraste de la imagen. Localice y elimine la fuente de interferencia de la radio."],["No hay color","Ajuste el color.","Intente visualizar otro canal. Se pudo haber recibido un programa en blanco y negro."],["No funciona el mando a distancia","Cambie las pilas.","Las pilas no están instaladas correctamente. La alimentación principal del TV no está conectada."]];
var contentSpan7_3Array = [["No se visualiza el contenido del dispositivo USB","Compruebe que el dispositivo de almacenamiento USB sea compatible con el TV.","Compruebe que los formatos de audio y del archivo de la imagen sean compatibles con el TV."],["Reproducción sin sonido","El formato de audio del vídeo no es compatible con el reproductor del TV."],["Los archivos no se reproducen correctamente","El rendimiento de transferencia del dispositivo de almacenamiento USB podría limitar la velocidad de transferencia de datos hacia el TV."]];
var contentSpan7_4Array = [["¿En qué debo poner atención cuando actualizo el software?","No deben existir cortes de alimentación durante la actualización del software.","Evite operar el mando a distancia cuando actualice el software.","Tenga paciencia porque el proceso de actualización del software podría tardar."],["No hay cambios aparentes en la interfaz del TV después de actualizar el software.","Bajo ciertas condiciones, la actualización del software podría no solamente actualizar o agregar nuevas funciones, sino también, mejorar el rendimiento del TV sin cambios aparentes de la interfaz. Del mismo modo, la interfaz del TV podría permanecer algunas veces intacta."]];
var termsTitle = "Términos y condiciones";
var termsConditions = ["(Aviso legal) de TCL - Fabricante de este TV. ","Debido a las diversas capacidades de los productos que presentan los Servicios SmartTV, así como las limitaciones en los contenidos disponibles, ciertas características, aplicaciones y servicios pueden no estar disponibles en todos los dispositivos o en todos los territorios. Algunas características del SmartTV pueden necesitar también el uso de dispositivos periféricos adicionales o tasas de membresía que se venden por separado. Por favor, visite nuestra página Web para obtener más información específica sobre el dispositivo y sobre la disponibilidad de contenidos. Los servicios y la disponibilidad de contenidos a través de SmartTV están sujetos a cambios cada cierto tiempo y sin previo aviso. \n   Todos los contenidos y servicios accesibles a través de este dispositivo pertenecen a terceras personas y están protegidos por derechos de autor, patentes, marcas registradas y/u otras leyes de propiedad intelectual. Dichos contenidos y servicios se proporcionan únicamente para su uso personal no comercial. Es posible que no pueda emplear contenidos o servicios por no haber sido autorizado por el propietario de los contenidos o el proveedor de servicio. Sin limitación de lo anterior, salvo que se autorice expresamente por el propietario de contenido aplicable o el proveedor de servicios, no puede modificar, copiar, publicar de nuevo, cargar, publicar, transmitir, traducir, vender, crear trabajos derivados, explotar ni distribuir de ninguna forma ni por ningún medio ningún contenido o servicio que se muestre a través de este dispositivo. \n   USTED RECONOCE Y ADMITE EXPRESAMENTE QUE EL USO DEL DISPOSITIVO SE HARÁ POR SU CUENTA Y RIESGO Y QUE EL RIESGO TOTAL EN CUANTO A LA SATISFACCIÓN CON SU CALIDAD, SU RENDIMIENTO Y SU PRECISIÓN LO ASUME USTED. EL DISPOSITIVO Y LOS CONTENIDOS Y SERVICIOS DE TERCERAS PERSONAS SE PROPORCIONAN “TAL Y COMO ESTÁN” SIN GARANTÍA DE NINGÚN TIPO, NI EXPLÍCITA NI IMPLÍCITA. TCL RENUNCIA EXPRESAMENTE A TODAS LAS GARANTÍAS Y CONDICIONES RESPECTO AL DISPOSITIVO Y A CUALESQUIERA CONTENIDOS Y SERVICIOS, YA FUEREN EXPLÍCITOS O IMPLÍCITOS, INCLUYENDO PERO NO LIMITÁNDOSE A GARANTÍAS DE COMERCIABILIDAD, DE CALIDAD SATISFACTORIA, IDONEIDAD PARA UN FIN ESPECÍFICO, DE PRECISIÓN, DE DISFRUTE TRANQUILO, Y DE NO VULNERACIÓN DE LOS DERECHOS DE TERCERAS PERSONAS. TCL NO GARANTIZA LA PRECISIÓN, VALIDEZ, ACTUALIZACIÓN DE DATOS, LEGALIDAD O INTEGRIDAD DE NINGÚN CONTENIDO O SERVICIO DISPONIBLE A TRAVÉS DE ESTE DISPOSITIVO Y NO GARANTIZA QUE EL DISPOSITIVO, CONTENIDOS O SERVICIOS SATISFAGAN SUS NECESIDADES, NI QUE EL FUNCIONAMIENTO DEL DISPOSITIVO O SERVICIOS QUEDE INTERRUMPIDO O ESTÉ LIBRE DE ERRORES. TCL NO ASUMIRÁ NINGUNA RESPONSABILIDAD, BAJO NINGUNA CIRCUNSTANCIA, INCLUYENDO NEGLIGENCIA, POR CUALESQUIERA DAÑOS DIRECTOS, INDIRECTOS, IMPREVISTOS, ESPECIALES O CONSECUENTES, MINUTAS DE ABOGADOS O CUALESQUIERA OTROS DAÑOS QUE SE DERIVEN DE O EN CONEXIÓN CON, CUALQUIER INFORMACIÓN CONTENIDA EN, O COMO RESULTADO DEL USO DEL DISPOSITIVO O DE CUALQUIER CONTENIDO O SERVICIO AL QUE ACCEDA USTED O CUALESQUIERA TERCERAS PERSONAS, AÚN CUANDO SE LE ADVIERTA DE LA POSIBILIDAD DE TALES DAÑOS. \n   Los servicios de terceras personas se pueden modificar, suspender, eliminar, terminar o interrumpir o se puede anular el acceso en cualquier momento, sin previo aviso, y TCL (fabricante de las TV marca Thomson) no representa ni garantiza que ningún contenido o servicio permanezca disponible durante ningún período de tiempo. Los contenidos y servicios se transmiten por terceras personas a través de instalaciones y redes sobre las cuales TCL no tiene control alguno. Sin limitar la generalidad del presente descargo de responsabilidad, TCL rechaza expresamente cualquier responsabilidad por cualesquiera cambios, interrupciones, desactivaciones, retiradas o suspensión de cualesquiera contenidos o servicios disponibles a través de este dispositivo. TCL puede imponer límites al uso o acceso a ciertos contenidos o servicios, en cualquiera de los casos y sin aviso ni responsabilidad. TCL no es responsable ni asume ninguna responsabilidad por el servicio de atención al cliente en relación con los contenidos o servicios. Cualquier pregunta o solicitud de servicio en relación con el contenido o servicios debe realizarse directamente a los proveedores de los contenidos o servicios."];

var noChannelListRemind        = ["No se encontraron canales. La lista de canales está disponible después de explorar canales.","Barrido de canales"];
var closeSubtitleRemind   = "La función estará disponible cuando estén desactivados los subtítulos. ¿Desea ajustar ahora?";

var estickerTitles = ["Imágenes muy realistas","Color  realmente vívido","Grandioso movimiento realista","Calidad de imagen dinámica","Mejora de SR UHD","Experimente el mundo 3D","Rendimiento más rápido","Contenido 4K futurista","Disfrute del mundo en línea","Acceso a contenido extra","Sintonizadores digitales integrados","Conecte todos los dispositivos","Distintas fuentes 4K","Contenido USB","WiFi ultra rápido","Contenido móvil en TV","Contenido de dispositivo móvil","Contenido local","Aprobado por DivX","Imagen perfecta","Canal listo","TDT Premium"];
var estickerDescriptions = ["Sorprendente experiencia de visualización gracias a las imágenes con cuatro tiempos los detalles de una pantalla Full HD on UHD","Amplia gama de colores que brinda emoción a cada escena con rojos vívidos y verdes esmeralda","Interpolación de cuadro 4K y luz de fondo para reducir los problemas de desenfoque de por movimiento","La vivacidad de la imagen original se mejora para producir expresiones realmente dinámicas con contraste brillante","Disfrute de shows de TV más claros y de discos Blu-Ray gracias a la tecnología de excelente resolución","Experimente el formato TV 3D ready y vea distingo contenido 3D","Experiencia de entretenimiento más divertida con Quad Core para tener una interacción perfecta y rendimiento mejorado","El códec HEVC (H.265) es compatible con el siguiente estándar de distribución de vídeo 4K.","Amplia gama de aplicaciones en línea, servicios VOD, TV entretenida y navegación web por Internet","Vea más servicios adicionales y contenido de sus emisoras favoritas","Tenga acceso a canales de TV en alta definición sin codificadores adicionales","Facilidad de conectar muchas fuentes digitales disponibles en el hogar","TV lista para el futuro, con capacidad de reproducir 4K 50/60Hz a través de HDMI 2.0 con HDCP 2.2","Contenido de foto y vídeo directamente desde una unidad USB, disco duro o cámara en pantalla grande a una resolución de 4K","Última generación de 2x2 MIMO y el estándar AC brindan una velocidad inigualable de acceso a Internet","Disfrute de fotos, vídeos, aplicaciones de dispositivos móviles en pantallas grandes gracias a la tecnología de replicación de pantalla","Las fotos, el vídeo y las aplicaciones de teléfonos inteligentes o tabletas se pueden visualizar en una pantalla grande ","Vea en pantallas grandes contenido local como fotos y vídeos de los dispositivos conectados a la red local","Reproduzca vídeos alquilados o propios protegidos por DivX","Diseño súper delgado y panel ultra delgado","Probado y aprobado por Canal+","Probado y aprobado por TDT Premium"];							

var eManualTextArray = ["Manual electrónico","Todos los gráficos internos son solamente de representación."];
var frontPanelRemind = "Panel frontal bloq.";
var eRPRemind		 = "El modo tienda no puede satisfacer demanda solicitud ERP. ¿Está seguro?";	
var noRelatedChannel = "No están relacionados con el canal";
var option0624Name          = ["BOP","BFS","Evento a Evento","GetUserID","BGM","Reset all","Restablecer tienda","NRM","DVB-T2 y elección de país","Modo HbbTV"];
var DVBT2AndChoice = ["Act.","Por país","Des."];
var hbbtvServiceRemind = "El servicio  HbbTV llegará pronto.";
var insertWord = "Introducir";		
var viewDetail = "Ver detalles";							

var remindOAD  = "Actualización del software. Puede existir nueva actualización recomendada de software en otro canal. Si acepta descargarla, puede cambiar automáticamente de canal. ¿Le gustaría hacerlo ahora mismo?";

var LEDStatus = ["Parpadeando", "Normal"];
var netFlixRemind = "Esta función interrumpirá el acceso a los servicios de Netflix hasta que vuelva a iniciar sesión.";
var ESNExplanation = "Número de serie electrónico";
var resetShopRemind = "El sistema se está reiniciando, por favor no apague el TV";
var initialSelectOption = "Por favor, seleccione una opción:";
var databaseRemind   = "El sistema ha reconocido que la base de datos está dañada por alguna razón desconocida y la reconstruirá automáticamente. Pulse OK para continuar";
var Deactivation = "Cerrar sesión";
var oadFutureRemind = "Actualizar software. Un nuevo software recomendado estará disponible en %s. La actualización llevará un tiempo y la pantalla puede quedarse en negro. No apague el receptor durante el proceso. Si acepta la actualización, por favor, deje el receptor en modo en espera a la hora programada. ¿Desea recibir la actualización?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Salida sonido";
var bt_soundOutPutTV = "Altavoces TV";
var bt_soundOutPutBT = "Dispositivo Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth y  TV";
var bt_refreshBarName = "Dispositivos";
var bt_settingTips_On = "Activar función Bluetooth y dispositivos de escaneo";
var bt_settingTips_Finding = "Encontrar dispositivos disponibles";
var bt_settingTips_NoDevice = "Ningún dispositivo encontrado";
var bt_deviceList_State_NoConnect = "Sin conectar";
var bt_deviceList_State_Connecting = "Conectando";
var bt_deviceList_State_Connected = "Conectado";
var bt_deviceList_State_Paired = "Acoplado";
var bt_deviceList_Conncect_Failed_Tips1 = "Conexión fallida.";
var bt_deviceList_Conncect_Failed_Tips2 = "Por favor, confirme  función XXX Bluetooth está On";
var bt_deviceList_Conncect_Success = "Conectado a un dispositivo Bluetooth.";
var bt_deviceList_Disconncect_Success = "Desconectado de dispositivo Bluetooth";
var bt_deviceList_Disconnect = "¿Seguro que quieres desconectar de XXX?";
var bt_tipsTitle = "Consejo";
var bt_bluetooth_Pairing_Title = "Asociación por Bluetooth";
var bt_bluetooth_Input_Pin = "Por favor entrar PIN";
var bt_bluetooth_Output_Pin_Tip = "Entrar PIN xxxx con teclado";
var bt_bluetooth_Pin_Wrong_Tip = "PIN incorrecto";
var bt_bluetooth_Remove_Pair_Title = "Pregunta";
var bt_bluetooth_Remove_Pair_Ask = "¿Dispositivo olvidado?";
var bt_bluetooth_module_error = "Error Bluetooth módulo!";
							
var netflixDialogOptions = ["Aceptar","Más tarde","No volver a mostrar"];
var netflixDialogContent = "Hay miles de películas para ver en Netflix, ¿desea ir ahora?";
var netflixRemoteDialogContent = "Ya está a la venta el mando a distancia con tecla Netflix. Visite esta página web para más información.\nhttps://store.tcleu.com";
							
var applyPictureModeSwitchValue	 = ["Fuente actual","Todas las fuentes"];
var audioDescriptionName = ["Descripción por audio","Altavoz","Volumen del altavoz","Auriculares","Volumen de los auriculares","AD Volumen","Dispositivo BT","Volumen del dispositivo BT"];
var audioDescriptionOptions = ["Des.","Normal","Descripción por audio"];							
var volumeOffRemind = 'Por favor, seleccione XXX “activado” en el menú Ajustes.';
var switchSourceRemind   = " insertado. ¿Quiere cambiar ahora?";								

var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Modo deportes";
var resetStadium = "Estadio";						
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Salir","0","Zoom+",
                       	   "Salir",
                       	   "Lista","0","Texto","Guía","Intro","Salir","Menu","Subtítulo","Información",
                       	   "Parar",
                       	   "Información","Menu","Salir"
                       	   ];
var nscreenTips = "GuideOn ayuda al usuario a navegar por este volumen enorme de contenidos.";
var nscreenContent = 'Pasos: 1. En su teléfono haga clic en "TCL nScreen".  Conecte el teléfono con el TV usando la misma LAN; 2. Haga clic en "GuideOn" para entrar en la app; 3. GuideOn ofrece las mismas funciones que una guía de programación impresa, informando a los usuario de los contenidos de TV disponibles;';
var singalBrokenoffTips = "La señal se ha interrumpido. El sistema no puede terminar la descarga.";
var contentSpan1_1Array_AU =  [["ENCENDIDO:","FUENTE:","MENÚ:","BACK:","INFO:","HOME:","EXIT:","LISTA:"],
    ["Turns power on or standby mode","Select the input source",
        "Show TV settings menu","Go back to the Previous menu or exit a running APP",
        "Muestra la información del programa",
        "Va a la página de inicio",
        "Go back to the Previous menu or exit a running APP",
        "Muestra la lista de canales"]];
var guideDescriptionWords ="Skenirajte QR kod da preuzmete GuideOn aplikaciju na telefon";
var settingNoticeSourceName ="Fuente automática";
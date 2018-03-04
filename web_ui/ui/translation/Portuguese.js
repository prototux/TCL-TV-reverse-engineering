
var all_country 	= ["Austrália","Áustria","Bélgica","Bulgária","Croácia","República Checa","Dinamarca","Finlândia","França","Alemanha",
						"Grécia","Hungria","Itália","Luxemburgo","Países Baixos","Noruega","Polónia","Portugal","Roménia","Rússia",
						"Sérvia","Eslovénia","Espanha","Suécia","Suíça","Reino Unido","Nova Zelândia"," "/*Arab*/,"Estónia"," "/*Hebrew*/,
						"Letónia","Eslováquia","Turquia","Irlanda","*","Filipinas","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"China","*","*","*","*","*","*","Outros","Lituânia"/*新添加的，底层结构体中没有*/,"Ucrânia"/*新添加的，底层结构体中没有*/,
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Iceland","Belarus","*","Lituânia"];							
				
var all_language 	= ["Checo","*","Dinamarquês","*","*","Alemão","Inglês","Francês","Grego","Espanhol",
						"Croata","*","Italiano","Húngaro","Neerlandês","Norueguês","Polaco","Português","Russo","Romeno",
						"Esloveno","Sérvio","Finlandês","Sueco","Búlgaro","Eslovaco","*","*","Gaélico","*",
						"Galês","Árabe","Írsky","Latvian","*","Turco","Estonian","Neerlandês"/*Netherlands*/,"*","*",
						"*","*","*","*","*","*","Áudio original"/*Qaa*/,"Não definido"/*Undetermined*/,"*","Desconhecido",
						"Não definido","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Basco","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Bieloruský","*","*","Catalão","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galego","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandês","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lithuanian",
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
						"*","*","*","*","*","*","*","*","Ukrainian","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Inactivo","Activo"];
var okCancel		= ["Ok","Cancelar"];
var yesNo			= ["SIM","NÃO"];
var level			= ["Inactivo","Baixo","Alto","Médio"];
var manualAuto		= ["Manual","Automático"];
var homeShop		= ["Casa","Loja"];
var picPreset		= ["Standard","Dinâmico","Natural","Cinema","Cinema Digital","Utilizador"];
var picColorTemp	= ["Frio","Normal","Quente","Quente2","Utilizador"];
var pic3dNavig		= ["Manual","Automático","Semi-automático"];
var _3dOptions		= ["Modo 3D","3D-para-2D","Interruptor E-D","Profund. do campo"];
var pic3DMode       = ["Inactivo","2D-para-3D","Lado-a-Lado","Topo e Base","Intercalar linha"];
var picEcoOptions	= ["Poupança energia","Sensor de luz","Obscurecer local","Luminosidade combinada"];
var picGeoOptions	= ["Geometria","Posição H.","Posição V.","Relógio","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["Ganho R","Ganho G","Ganho B","Desfasamento R","Desfasamento G","Desfasamento B"];
var souOptions		= ["Predefinição de som","Balanço","Retardamento áudio","SRS TSHD","Controlo vol auto",
						"Tipo de SPDIF","Atraso SPDIF","Colocação da televisão","Idioma de áudio","Canal de áudio",
						"Descrição Áudio","Tipo de saída áudio digital","Definição profissional Dolby"];
var soundOutputoptions =["Saída DAP altifalante TV","Saída codificada AVR externo"];
var inteligenteqoptions 	=["Leitura Focada","Leitura Rica"];						
var souSpdifType	= ["Automático"/*Dolby*/,"PCM","Inactivo"];
var colorSpace      = ["Automático","Normal","Utilizador","DCIP3"];
var souPresetPara	= ["100Hz","300Hz","1KHz","3KHz","10KHz","Virtualizador Surround","Wzmacniacz dialogów","Melhorador de graves","Inteligentna głośność","Inteligencja nośników","Korektor graficzny","EQ Inteligente"];
var chOptions		= ["Pesquisa de canais","Lista de canais","EPG","Organizador","Diagnóstico do canal",
						"mudança de hora","Legendas","Teletexto","Tipo lista canais"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Intensidade do sinal","Qualidade do sinal","Frequência (KHz)","ID de serviço","ID de rede","Nome da rede"];
var chScanOptions	= ["País","Modo sintonizador","Pesquisa de canais","Actualização automática","Pesq analógica man",
						["Pesquisa manual de cabo","Pesquisa manual antena","Sintonização manual do satélite"],"Configurar antena por satélite","Seleccionar a rede favorita","Limpar lista de canais",];
var favNetDes		= "Selecione a sua rede preferida";
var tuner			= ["Cabo","Antena","Satélite"];//Satelite 无翻译
var passError		= "Palavra-passe incorrecta.\nPor favor introduza-a novamente! ";
var chType			= ["Canais analógicos: ","Canais digitais: "];
var chScanStatus	= ["Estado: Pesquisar","Estado: Pesquisa completa","Estado: Cancelar pesquisa","Estado: Erro de pesquisa"];
var chScanPara		= ["Frequência (KHz)","Modulação","Taxa símbolos (Ksym/s)","ID de rede","Sistema",
						"Afinar","Intensidade do sinal","Qualidade do sinal","Modo Pesquisa","ID do canal"];
var chScanParaMHZ      = ["Frequência (MHz)"];
var chAtvManSys		= ["EUR OESTE","EUR LESTE","Reino Unido","França"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Automático"];
var chCleanDes		= "Pretende limpar a lista de canais?";
var chDeletDes		= "Pretende eliminar o canal?";
var chOperator		= ["Ziggo","UPC","Outros"];
var chScanType		= ["Digital & Analógico","Digital","Analógico"];
var chScanMode		= ["Completo","Avançar","Rápido"];
var bookingModes	= ["Registo","Lembrete"];
var dayName			= ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
var monthName		= ["Jan", "Fev","Mar","Abr","Maio","Jun","Jul","Ago","Set","Out","Nov","Dez"];
var filter			= ["Filter","Tipo","Subtipo"];
var chEpgFirstGenre	= ["Cinema","News","Espectáculo","Desporto","Infantil","Música","Arte","Social","Educação","Lazer","ESPECIAL"];
var chEpgSecondGenre= [["Teatro","Detective","Aventura","Ficção científica","Comédia","Novela","Romance","Sério","Filme para adultos"," "," "," "],
						["Actualidades","Meteorologia","Magazine Notícias","Documentário","Debate"," "," "," "," "," "," "," "],
						["Espectáculo","Programa de jogos","Programa de variedades","Programa de entrevistas"," "," "," "," "," "," "," "," "],
						["Desporto","Eventos especiais","Programas desportivos","Futebol","Ténis",
							"Jogos de equipa","Atletismo","Desportos motorizados","Desportos aquáticos","Desportos de Inverno",
							"Equestres","Artes marciais"],
						["Infantil","Infantil (pré-primária)","Entretenimento dos 6 aos 14","Entretenimento dos 10 aos 16","Informativo","Desenhos animados"," "," "," "," "," "," "," "],
						["Música","Rock","Sério","Tradicional","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Arte","Artes performativas","Belas artes","Religião","Cultura popular",
							"Literatura","Cinema","Experimental","Emissão","Novos média",
							"Revistas de artes","Moda"],
						["Social","Programas","Economia","Personalidades notáveis"," "," "," "," "," "," "," "," "],
						["Educação","Natureza","Tecnologia","Medicina","Países estrangeiros","Ciências sociais","Mais educação","Idiomas"," "," "," "," "],
						["Passatempos de entretenimento","Turismo","Artesanato","Motorizados","Saúde e bem-estar","Cozinha","Publicidade","Jardinagem"," "," "," "," "],
						["Idioma original","Preto e branco","Não editado","Emissão em directo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Saltar canal","Disp canais","Editar canal","Apagar canal","troca de canal","canal de inserção"];
var chEditPara 		= ["Nome da rede","Número canal","Nome canal","Frequência","Sistema de cor","Sistema de som"];
var chSatTitles		= ["Tipo satélite","Configurar antena por satélite","Seleccionar Satélite"];
var chSatEidtOptions= ["Nome do satélite","Posição","LNB Poder","Frequência do LNB (MHz)","Entrada Diseqc",
						"Tom 22KHz","tone burst","Frequência (KHz)","Taxa símbolos (Ksym/s)","Polarização",
						"Intensidade do sinal","Qualidade do sinal","Estado satélite"];
var chSatAutoPromt	= [["Tudo","Rede"],
						["Tudo","Gratuitamente"]];
var chSatAutoScanOptions=["Seleccionar Satélite","Modo Pesquisa","Canais"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Desactivar","A","B","C","D"];
var chSatTone22KHz	= ["Automático","Activo","Inactivo"];
var chSatToneBurst	= ["Desactivar","tone burst A","tone burst B"];
var chSatPolarization= ["Horizontal","Vertical"];
var chSatSetupOptions=["Tipo antena","Sintonizador","Frequência de banda"];
var chSatAntennaType= ["CaboÚnico","Universal"];
var chSatUserBands	= ["Banda Utilizador1","Banda Utilizador2","Banda Utilizador3","Banda Utilizador4","Banda Utilizador5","Banda Utilizador6","Banda Utilizador7","Banda Utilizador8"];
var chSatOthers		= ["Transmissor-receptor"];
var chSatSetupOthers= ["Definido pelo utilizador"];
var pleaseSelectSat = "Selecione primeiro os satélites!";
var subOptions		= ["Legendas","Idioma leg digitais","Idioma leg digitais 2ª","Tipo de legenda"];
var ttxOptionsCon      = ["A descodificar pag idiomas","Idioma teletexto digital"];
var subType			= ["Normal","Def auditivos"];
var netIntf     	= ["Ethernet","Sem Fios"];
var netConnDes		= ["A TV está a testar a ligação de rede.\nPor favor aguarde",
						"O teste de ligação de rede teve sucesso!",
						"O teste de ligação de rede falhou."];
var netSsidError	= "O comprimento válido do SSID é 1~32 caracteres. Verifique o SSID";
var netOthers		= ["Código PIN"];
var netWlessAutoDes	= ["Assegurar que o código PIN seguinte está instalado no Ponto de acesso antes de clicar em OK.",
						"Premir o botão no Ponto de Acesso dentro de 120 segundos antes de clicar em OK."];
var netConnRemind	= ["Palavra-passe incorrecta!",
						"A ligar. Aguarde!",
						"Ligação com sucesso e foi obtido IP!",
						"Falha na Ligação",
						"A TV está a procurar Ap\nPor favor aguarde",
						"Não está ligado á TV qualquer dispositivo sem fios! "];
var netWireIpOptions= ["Definição IP","Tipo endereço","Endereço IP","Máscara subnet","Porta ligação por defeito","DNS principal","DNS secundário"];
var netWireConnRemind= ["Introduzir um valor entre 0 e 255.",
						"Ligado com êxito!",
						"Digite um endereço válido",
						"Ligado com êxito!",
						"Erro de ligação !",
						"A ligar. Aguarde!",
						"Introduza um valor entre 1 e 223."];
var netFlixOptions	= ["Desactivar","ESN"];
var netFlixDes	 	= ["Tem a certeza que deseja desactivar?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Actualiz. software";
var netUpdateDialogTitle = "A atualizar software";
var netBGDownloadTitle 	= "A fazer o download";
var netUpdateLoadingPrompt= ["A pesquisar atualização, aguarde!",
							"O software está a ser transferido... Aguarde!",
							"NÃO desligar a TV durante a actualização do software!",
                            "A atualização obrigatória do software é transferida automaticamente em segundo plano!"];
var netUpdatePrompt= ["Parabéns, a sua versão de software é a mais recente!",
						"Foi encontrada a nova versão de software XXXX. Pretende descarregar agora? Isto pode demorar algum tempo dependendo do estado da sua rede.",
						"Falha a entrar!",
						"Falhou receção de dados, tente novamente!",
						"Falha Actualização Análise XML!",
						"Falha na Ligação",
						"Software transferido com êxito. Pretende iniciar a actualização?",
						"Perda de dados! Falha a descarregar!",
						"Falha na verificação do pacote, por favor tente de novo!",
						"Rede anormal. Por favor verifique e ligue de novo…",
						"Falha na actualização.  Reiniciar a Tv por favor!",
						"O ficheiro de actaização foi eliminado inesperadamente. Deverá fazer a actualização pela rede novamente.",
						"O software foi descarregado com sucesso. Deseja fazer a actualização?"];
var netUpdateButtonText = ["Descarregar", "Actualizar", "Mais tarde", "Nunca", "Ok","Continuar"];
var autoDetectPrompt = ["Foi encontrada a nova versão de software XXXX. Pretende descarregar agora? Isto pode demorar algum tempo dependendo do estado da sua rede.",
						"A versão XXXX do novo software foi encontrada. Pretende actualizar agora?",
						"O processo de actualização pela rede foi cancelado da última vez. Deve actualizar novamente.",
                        "A transferência da versão XXXX do novo software não está terminada. Pretende continuar agora?",
                        "Software transferido, pretende atualizar agora?"];
var sysOptions		= ["E-Manual","Idioma OSD","Temporizador","Bloquear","Definições de entrada",
						"Actualiz. software","Localização","Modo HbbTV","Cookies","Interface comum",
						"Configurações avançadas","Reiniciar compra","Indicador LED"];
var sysResetDes		= "Tem a certeza?";
var sysMenuLangOptions=["Idioma","Idioma áudio preferido","Idioma de áudio preferido - 2.º"];
var sysTimerOptions	= ["Fuso horário","Nome da região","Relógio","Temporizador","Modo de espera auto", "Country region"];

var sysTimeZone		= ["Como transmissor","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Inactivo","10 min.","20 min.","30 min.","40 min.","50 min.","60 min.","90 min.","120 min."];
var sysStandby		= ["Inactivo","4 Horas","6 Horas","8 Horas"];
var sysRegionName	= ["Madrid","Canárias"];
var sysClockOptions	= ["Sincron automática","Data","Hora","Ligar temporizador","Temporizador",
						"Ligar satélite","Desligar temporizador","Temporizador"];
var sysTimer		= ["Inactivo","Diariamente","Uma vez"];

var sysInputSet		= ["Sem etiqueta","DVD","Blu-ray","HDD","DVDR",
						"Grav. HD","Jogo","Videogravador","Computador","STB digital",
						"STB digital HD","Câmara","Gravador","Outro"];
var sysAvVideoInput	= ["Automático","RGB_CVBS","RGB","CVBS","S-Vídeo"];
var sysUpdate		= ["Através de USB","Através de de rede","Por canal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Impossível encontrar novo software no ar!",
						"A versão XXXX do novo software foi encontrada. Pretende actualizar agora?",
						"Insira a pen USB.",
						"Falha na verificação do pacote, por favor tente de novo!",
						"NÃO retire o dispositivo USB nem desligue a TV durante a actualização do firmware!",
						"O software foi transferido com êxito.\nA televisão irá reiniciar-se automaticamente!",
						"Foi encontrada a nova versão de software XXXX. Pretende descarregar agora? Isto pode demorar algum tempo dependendo do estado da sua rede.",
						"A fazer o download",
						"Software transferido com êxito. Pretende iniciar a actualização?",
						"Actual. falhou!",
						"A procurar ficheiros actualização",
						"O software foi actualizado com sucesso.\nReinicializar a TV agora."];
var sysProductInfo	= ["Versão actual","Nome do produto","Nome do fabricante","Nome do chassis"];
var sysCiDes		= ["Nenhum cart CI apres."];
var sysAdOptions	= ["Registo DivX®","Anulação do registo DivX(R)","T-Link","Authorization Error","Confirmação da anulação de registo",
						"Confirmação de aluguer","Aluguer Expirado","ID da declaração Bluetooth"];
var sysRegistDes	= ["Deve registar o dispositivo para ler vídeos DivX protegidos",
						"Código de registo:",
						"Registar em http://vod.divx.com"];
var sysDregistDes	= ["Código anulação do registo:",
						"Anular registo em http://vod.divx.com ",
						"Continuar com o registo?"];
var mediaAuthorization = ["O seu dispositivo não está autorizado a reproduzir este vídeo protegido DivX(R)."];
var deregistrationConfrimation = ["O seu dispositivo já está registado.","Tem a certeza que deseja cancelar o registo?"];
var rentalConfirmation = "Este DivX(R) de aluguer foi usado XXXX para além de YYYY visualizações. Continuar?";
var rentalExpired 	= "O aluguer DivX(R) foi utilizado XXXX de YYYY visualizações. O aluguer DivX expirou.";
						
						
var sysLockOptions	= ["Bloqueio de canais","Bloquear intervalo de tempo","Clas parental","Bloq intro","Bloqueio do painel frontal","Instalação de bloqueio",
						"Alterar palavra-passe","Volume máx.","Limpar tudo"];
var sysTimeIntervals= ["Tipo bloqueio","Hora de ínicio","Hora de fim"];
var sysRatingOptions= ["Nenhum","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Classificação para adultos (Espanha)"];
var changePass		= ["Alterar palavra-passe","Nova palavra-passe","Confirmar palavra-passe"];
var changePassDes	= ["Palavra-passe incorrecta.\nPor favor introduza-a novamente! ",
						"A palavra-passe não corresponde.\nPor favor introduza-a novamente!",
						"Palavra-passe definida com sucesso!",
						"Este código é demasiado simples para ser definido como palavra-passe.\nIntroduza de novo!"];
var sysPowerOnChOptions= "Seleccionar modo";
var sysPowerOnCh	= ["Último estado","Selecc. utilizador"];
var netWlessSecu    = ["Abrir","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nenhum","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Não Suportado"];
var netWlessSecu3	= ["Nenhum","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Não Suportado"];
var netOptions		= ["Ligação internet","Interface","Definições sem fios","Definições IP","Informação",
						"Teste ligação","DLNA","TV remota","Definições Netflix","Link WiFi TV",
						"Tipo endereço","Endereço IP","Máscara subnet","Porta ligação por defeito","DNS principal",
						"DNS secundário","SSID","BSSID","Inserir SSID:","ID do utilizador"];
var chEditDes		= ["Número de canal duplicado!","Prima a tecla Vermelha para eliminar o caractere atual!","Número de canais inválidos."];
var chEpgNoProgram	= "Nenhuma info do programa agora, pesquise primeiro os canais!";
var chEpgWords		= ["Guia de Programação","Sem dados de programa.","Canal bloqueado!","Sem detalhes de programa.","Sem título de programa."];
var chEpgBooking	= ["informações cronograma", "Número canal","Iniciar data","Hora de ínicio","Hora de fim",
						"Repetir tipo","Programar tipo","Adiciona","Substituir","Alterar",
						"Adicionar/Modificar"];
var epgHotKey		= ["Dia anterior","Dia seguinte","Filter","Lista de programação","Adiciona programação"];
var chEpgBookRemind	= ["Hora de Início Incorrecta","Hora de Fim Incorrecta","Agendamento Duplicado","Gravado com Sucesso.","Eliminado com êxito."];
var chSchePara		= ["Lista de programação","Hora de ínicio","Iniciar data","Título do Programa","Nome canal",
						"Duração","Repetir","Agendamento","Editar","Apagar"];
var dateTimer		= ["Uma vez","Diariamente","Semanal"];
var scheduleDeleteReminds="Pretende eliminar esta agenda?";
var scheduleNoLists	= "Não existe lista de agenda. Prima a tecla Vermelha para adicionar uma lista.";
var chListWords		= ["Lista de canais","Seleccionar Lista","Modo sintonizador","Adicionar aos Favoritos","Remover",
						"Seleccionar lista de canais","Seleccionar modo de sintonizador","Trocar"];
var chListType		= ["Tudo","Digital","Analógico","Rádio","Gratuitamente","Favoritos"];
var chAutoScanOptions=["Seleccionar operador","Tipo de canal","Pesquisa de canais"];
var souSoundType	= ["Inválido","Mono","Mono","Estéreo","Estéreo",
						"Mono","Estéreo","Dual1","Dual2","Dual2",
						"Nican mono","Nicam estéreo","Nicam dual1","Nicam dual2","Nicam duplo",
						"Mono","LL","RR","LR"];
var souPreset		= ["Música","Cinema","Limpar voz","Standard","Utilizador"];
var picAdRgbMode	= ["Inactivo","Só de Leitura","Só Verde","Só Azul"];
var picAdOptions	= ["DNR","Red. ruído MPEG","RGB mode","Contraste Dinâmico","Clareza de movimento LED",
						"Tom da pele","Modo de filme","Modo de jogos","Temperatura da cor","Balanço De Branco",
						"Parar","Stretch","Aumentar imagem","Gama","Modo HDMI","Balanço de branco 10P","Ampliador de cor",
						"Redução de desfocagem","Redução de vibração","Espaço de cor","Clareza de movimento"];
var pic10Pwhite     = ["Intervalo","Vermelho","Verde","Azul","Reiniciar","Cor","Amarelo","Ciano","Magenta"];
var picMotionClarity = ["Modo movimento","Interpolação de movimento","Clareza de movimento LED","Redução de desfocagem","Redução de vibração","Reiniciar"];
var picMotionMode   = ["Automático","Cinema","Suavidade","Limpar","Desporto","Cliente"];
var picResetDes		= "Todas as definições pessoais serão repostas. Tem a certeza que pretende realizar a ação selecionada?";
var pic10PReset     = "Tem a certeza que pretende repor o balanço de brancos 10P?";
var picMotionReset  = "Pretende repor a Clareza de movimento?";
var picColorSpaceReset    = "Tem a certeza que pretende repor o espaço de cor?";
var picOptions		= ["Modo de imagem",
						"Retroiluminação","Brilho","Contraste","Saturação","Tonalidade","Nitidez","Temperatura da cor","Modo de ecrã","Formato automático",
						"Melhoria de desporto","3D","Navegação 3D","ECO Configurações","Geometria",
						"Configurações avançadas","Aplicar modo de imagem","Reinicializar imagem"];
var picSize			= ["16:09", "formato 4:3", "Formato 14:9", "Panorama",
						"Zoom 16:9", "Zoom inn 16:9","Zoom 14:9","Strekk Zoom","Vid Zoom",
						"Zoom 2","Vid Zoom","Combinação nativa do ecrã","Prikk etter prikk","Original","Panorama"];
var others			= ["Volume","Transmissão","Palavra-passe","Estado","Guardar","Substituir","Iniciar","Sair","Procurar","Apagar",
						"Nenhum","Automático","Pesquisar","Segurança","Ligar","Refrescar","Repetir","Parar ","Configurações","Canais",
						"Editar","Introduzir","Sinal!","Concluir","Estéreo","Áudio","Fonte","Sem áudio","Dicas","Reiniciar",
						"Cliente","Configuração","Memorizar","Utilizador","Fechar teclado","Modo segurança","Todos os dias","Lista PVR"];
var direction		= ["Esquerda","Direita ","Para cima","Para baixo"];
var audioType 		= ["MPEG","Dolby D"/*"AC3"*/,"MPEG4","AAC", "Dolby D+"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Desconhecido"];
var soundChannels   = ["Desconhecido","Mono","Sub","Dual Mono","Estéreo","Estéreo Sub","Estéreo Dolby Surround","Surround 2CN","Surround","3.0C.","4.0C.","5.0C.","Mono Lfe","Dual Mono Lfe","Estéreo Lfe","Surround 2C Lfe","Surround Lfe","3.1C","4.1C","5.1CN","7.1CN","Estéreo conjunto","Mono Fmrdo","Estéreo Fmrdo","Fm Mono Nicam Mono","Fm Mono Nicam Estéreo","Fm Mono Nicam Dual","Esquerda","Direita ","Outros"];
var prompts			= ["Ajuste a definição da imagem que melhor se adequa ao seu ambiente de visualização.",
						"Ajuste os níveis de luminosidade. Quanto mais próximo de 100, mais luminoso.",
						"Ajuste os níveis de contraste. Quanto mais próximo de 100, maiores as diferenças entre escuro-claro na imagem.",
						"Ajuste os níveis de saturação. Quanto mais próximo de 100, mais forte é a cor.",
						"Ajuste os níveis de nitidez. Quanto mais próximo de 100 mais nítidos são os detalhes.",
						"Ajuste os níveis da luz de fundo. Quanto mais próximo de 100, mais brilhante fica o ecrã.",
						"Ajuste os níveis de tonalidade. Esta definição modifica os tons da cor.",
						"Selecione o formato da imagem que melhor se adequa ao programa que está a visualizar.",
						"Configure as opções de poupança de energia.",
						"Ajuste as definições de geometria do ecrã quando liga a um computador.",
						"Seleccione mais definições avançadas de imagem.",
						"Restaure todas as predefinições de imagem.",
						"Seleccione um modo de som que melhor se adequa à sua preferência pessoal.",
						"Ajuste o equilíbrio do volume entre o canal esquerdo e o canal direito.",
						"Sistema de recuperação de som TruSurround HD apresenta um desempenho de som rico e clareza a frequências baixas e altas.",
						"Formato de interface digital ligado à saída de som digital da televisão e ao equipamento áudio do sistema de cinema em casa.",
						"Seleccione o idioma de áudio que melhor se adequa à sua preferência pessoal.",
						"Permite aos deficientes visuais desfrutarem dos programas televisivos.",
						"Teste a imagem, o som e sinal da sua televisão.",
						"Seleccione o tipo de lista de canais que melhor se adequa ao seu sinal de TV.",
						"Definir o idioma das legendas do programa exibidas no fundo do ecrã.",
						"Ver o texto e imagens do canal atual.",
						"Digital Living Network Alliance. Desfrute de música, fotos e vídeo através da rede doméstica a partir de outros aparelhos, como um computador.",
						"Exibe o conteúdo do seu smartphone na televisão e utiliza o smartphone como controlo remoto para a televisão.",
						"Exibe conteúdos a partir de um aparelho Android compatível com Miracast no ecrã da sua televisão.",
						"Bloqueie a sua TV.",
						"Seleccione um nome para o seu dispositivo.",
						"Seleccione o seu ambiente de visualização.",
						"Restaure todas as Predefinições do Sistema."];
var initialTitle	= ["Bem-vindo","Configuração inicial"];
var initialPrompt	= ["Realize a Configuração inicial agora e um Mundo de experiências excitantes aguarda por si!",
						"Por favor seleccione o seu idioma:",
						"Seleccione o seu país:",
						"Seleccione a localização:",
						"Seleccione o seu tipo de ligação à rede:",
						"Seleccione o modo de ligação à rede com fios:",
						"Falhou ligar a xxxxxxxxx! Ligue o dispositivo de acordo com o seguinte Diagrama ou selecione Esquerda para repor.",
						"Ligado a xxxxxxxxx! Selecione Direita para continuar.",
						"1) A sua TV poderá já ter um adaptador Sem Fios integrado\n 2)Ou, se for fornecido um Adaptador USB sem fios, ligue-o à sua TV.  De seguida, por favor escolha o modo de ligação de rede sem fios.",
						"A pesquisar. Aguarde...",
						"Não está ligado á TV qualquer dispositivo sem fios! ",
						"Certificar que o código PIN seguinte está instalado no AP antes de clicar o botão abaixo \"Seguinte\".",
						"Prima a tecla no AP em 120 segundos antes de premir Direita!",
						"WPS (Configuração Protegida por Wi-Fi)",
						"PIN (N.º de identificação pessoal)",
						"PBC (configuração da tecla de premir)",
						"Os conteúdos seguintes só podem ser acedidos com uma ligação à rede. Pretende saltar a Configuração de rede?",
						"Existem novas atualizações de software para transferir, isto pode demorar algum tempo, dependendo do estado da sua rede.",
						"A actualização do software da sua TV garante que pode desfrutar das últimas funcionalidades e serviços.",
						"Não irá desfrutar das últimas funcionalidades e serviços. Pretende ignorar a Atualização do software?",
						"Prima na tecla Vermelha para continuar.",
						"Não desligue durante a atualização, pois pode provocar avarias na televisão.",
						"Se não pretender atualizar, selecione NO.",
						"A atualizar, aguarde",
						"Também pode atualizar o software em SYSTEM/SOFTWARE UPDATE.",
						"O país seleccionado exige definição de palavra-passe.\nDeve definir o código para a sua TV e confirmá-lo.",
						"This code is too simple.\nPlease use different digits.",
						"Parabéns! A configuração inicial está completa. Pode modificar a sua configuração através do Menu principal e respetivos sub-menus.",
						"Seleccionar o modo de segurança:",
						"Selecione o modo de ligação de rede sem fios:",
						"Rede"];
var initNetCabAndDonRe = ["Nenhum cabo de rede ligado, ligue um cabo de rede!","Nenhum adaptador sem fios integrado ou nenhum adaptador USB sem fios fornecido."];
var initChPrompt = ["Instalação do canal televisivo","Selecione o tipo de pesquisa de antena.","A processar a sintonização automática...","Foram encontrados os seguintes canais por antena:","Seleccione o tipo de procura de Cabo.","Selecione um operador a partir da lista seguinte.","Configure as informações de procura","Foram encontrados os seguintes canais por Cabo:","Seleccione uma operadora a partir da seguinte lista","Seleccione os satélites a procurar ou edite o satélite seleccionado","Defina os parâmetros do satélite","Foram encontrados os seguintes canais, a pesquisa de canal também pode ser novamente executada em Canal/Pesquisa de canal"];
var initClockPrompt = ["Obter a hora fornecida pela rede!",
						"Defina a Data e Hora:"];
var initialOptions	= ["Ambiente","Configuração da Rede","Actualiz. software","Instalação do Canal","Relógio"];
var initialHotkeys	= ["Atrás","Seleccionar","Seguinte"];
var initLocations	= ["Casa","Loja","Loja com demo"];
var initNets		= ["Com fios","Sem Fios","Não tenho uma ligação à rede"];
var initWireManuals	= ["Endereço IP","Máscara subnet","Porta ligação por defeito","DNS principal","DNS secundário"];
var initSoftUpdates = ["Actualizar agora","Actualizar mais tarde"];
var initChannelIns	= ["Continuar","Não pretendo instalar canais"];
var initChScanTypes	= ["Digital & Analógico","Digital","Analógico","Não pretendo procurar"];
var initChDvbts		= ["Canais ATV de antena:","Canais DTV de antena:"];
var initChDvbcs		= ["Canais ATV por Cabo:","Canais DTV por Cabo:"];
var initChDvbss		= ["Canais de satélite:"];
var initChDvbSOther	= ["Não pretendo procurar canais de satélite"];
var initEndConnectedStatus= ["Desligado","WiFi ligado","Ligado por cabo"];
var initEndInstallations= "XXXX canais instalados";
var initEndUpdate	= ["Atualizado"];

var audioScenes 	= ["Colocação no armário","Montagem na parede"];			
var screenSavers	= ["Nenhuma info do programa agora, pesquise primeiro os canais!",
						"Sem sinal!",
						"Codificado",
						"Só Dados",
						"Programa de áudio",
						"Sem áudio nem vídeo ",
						"Não Disponível",
						"Sem Teletexto",
						"Sem dados de programa.",
						"Programa bloqueado!",
						"Programa bloqueado!\nCarregue em OK e introduza o código.",
						"Sem detalhes de programa.",
						"Programa prejudicial a menores.\nPrima OK e insira o seu código.",
						"Canal bloqueado!",
						"Canal bloqueado!\nCarregue em OK e introduza o código.",
						"Entrada bloqueada!\nCarregue em OK e introduza o código.",
						"Não suportado!",
						"Este serviço não está actualmente disponível",
						"Entr.Bloqueada!",
						"Sem título de programa.",
						"Sem função"
						];
var chBookingPromt	= ["O canal atual tem uma gravação agendada. A televisão vai iniciar a gravação.",
						"Foi encontrada uma gravação agendada.\n Mude para XXXX para gravar",
						"O canal actual possui um lembrete.",
						"Foi encontrado um lembrete agendado.\n Mude para XXXX"];
var timeUnit		= ["Seg.","min"];
var ciPromt			= ["Dados de rede alterados. Para atualizar, pode realizar uma pesquisa de atualização. ",];
var othersPromt		= ["Por favor aguarde…",];
var menuOptions		= ["Imagem","Som","Canal","Rede","Sistema"];
var optionOptions	= ["Modo de imagem","Predefinição de som","Parar","T-Link","mudança de hora","PVR","Lista de programação","Configurações"];
var optionTLinkPromt= [["Ligar automático","Modo de espera auto","Guide menu"],
						["Ligar","Em Espera","Volume do Amplificador"]];
var powerPromt		= ["A TV desligar-se-á em breve! Premir qualquer tecla para anular."];
var ttxLanguage		= ["EUR OESTE","EUR LESTE","Russo","Árabe/Hebraico","Farsi","Árabe","Bieloruský","Grego","Turco"];
var ttxOptions		= ["Revelar","Subpáginas","Idioma","Página de alarme","Flash informativo"];
var weekday         = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
var lcnConfflict	= "Este programa tem um problema de recepção. Existe outra versão disponível no canal %d.";
var inShopMode		= "A sua televisão está em modo Loja Para modo Casa, selecione 'Sistema' e altere 'Local' no menu.";
var nitRefresh		= "Os dados de rede mudaram. Deseja efectuar uma pesquisa de actualização?";
var picHDMIMode     = ["Automático","Gráfico","Vídeo"];

var glassRemind    	= ["Emparelhe os óculos 3D com a televisão\n(Mantenha premido POWER nos óculos 3D).","Os seus óculos 3D estão ligados à televisão. ",""];
var pvrRemind 		= ["Não desligue o dispositivo USB nem interrompa a alimentação"];
var pvrConName   	= ["PVR","Informação de programa:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Vídeo gravado  está guardado na pasta \"pvr\"."],"Parar ","Registo","hora","Minutos","Duração","Dicas","Utilize as setas para definir a duração da gravação."];
var pvrDisRemind 	= "Inserir ums unidade de meória USB para gravação.";
var pvrRemindWords  = ["Pretende sair?",
							"Pretende parar a gravação e pesquisar os ficheiros gravados?",
							"Disco removido.",
							"Não existe espaço livre suficiente.",
							"Nenhum ficheiro gravado. Iniciar gravação.",
							"PVR não pode iniciar em Canal Codificado.",
							"Função não disponível",
							"Gravado com Sucesso.",
							"Deseja parar processo gravação, e alterar fonte de entrada?",
							"A televisão irá terminar a gravação atual. Pretende sair?",
							"A gravação PVR precisa que o sinal da televisão funcione devidamente. Verifique o seu sinal."];
var pvrChangeCh 	= ["Pretende abrir o canal?",
							"Deseja parar processo gravação, e alterar canal?"];
var pvrChangeToPIN8	= ["Pretende alterar a origem para o dispositivo ligado à entrada SCART?",
				    		"Pretende parar o processo de gravação e alterar a origem para o dispositivo ligado à entrada SCART?"];
var pvrChangeToCEC  = ["Pretende alterar a origem para o dispositivo ligado a uma entrada HDMI?",
				  			 "Pretende parar o processo de gravação e alterar a origem para o dispositivo ligado a uma entrada HDMI?"];
var pvrGuideJump    = ["Pretende aceder a EPG?",
							"Deseja parar processo gravação, e introduzir EPG?"];
var pvrMediaJump    = ["Pretende aceder a Media?",
							"Deseja parar processo gravação, e introduzir Media?"];
var timeshiftExtra	= ["Pretende parar pré-gravação e mudar a TV mudar canal?",
						"Pretende parar a transmissão em indeferido e alterar a origem para o dispositivo ligado à entrada SCART?",
						"Pretende parar a transmissão em indeferido e alterar a origem para o dispositivo ligado a uma entrada HDMI?",
						"Mudança hora n/pode iniciar em Canal Codificado.",
						"Pretende parar a transmissão em indeferido e aceder a EPG?",
						"Pretende parar pré-gravação e mudar a TV para o modo USB?",
						"Pretende parar pré-gravação e mudar fonte entrada?",
						"Inserir ums unidade de meória USB para gravação.",
						"O tamanho do disco é insuficiente.",
						"A televisão irá parar transmissão em indeferido atual. Pretende sair?"];
var timeshiftStatus	= ["Retroceder rápido","Parar ","Reproduzir","Pausa","Avançar rápido"];
var pvrPowerOffRemind= ["Gravação em standby","Em Espera","A televisão está a gravar. Pretende continuar a gravar quando a televisão está no modo Standby?"];
var timeshiftInitTitle= "Configuração Disco";
var timeshiftInitReminds= ["Assistente usado para configurar disco USB para pré-gravação.Seleccionar pf. modo configuração.",
						 "Para melhor desempenho, recomendamos formatar disco USB.Apagará todos os dados.",
						 "Selec. p.f. tamanho ficheiro de pré-gravação.",
						 "A formatar",
						 "Não existe espaço livre suficiente.",
						 "A criar ficheiro pré-gravação",
						 "A testar velocidade",
						 "A velocidade do disco é demasiado lenta  (< %f MB/seg) para activar função pré-gravação! ",
						 "O disco está pronto para pré-gravação.Recomendamos mudar disco(de velocidade > %f MB/seg) para um melhor desempenho.",
						 "O disco está pronto para pré-gravação."];
var timeshiftInitButtons= ["Formatar","Saltar","Cancelar","Ok","Concluir","Sair"];
var timeshiftInitOther=["Vel. Disco:","MB/seg."];

var selectChoice	= "Tem a certeza?";
var chAtvStore		= "Guardar como XXXX";
var chEpgFirstGenreUK= ["Cinema","Notícias e Factos","ENTRETENIMENTO","Desporto","Infantil","Educação","Estilo de vida","Teatro"];
var homePageTitleList = ["APPS","TV","VÍDEOS","Página de início"];
var homePageFavAndAllName  = ["Apps favoritas","Todas as Apps"];
var homePageBackUp = ["E-Manual","GuideOn"];
var homePageRemind   = ["As funções completas estão disponíveis apena após a ligação à rede.","A sua televisão ainda não tem canais. Os programas estão disponíveis após pesquisar os canais.","Sem programa","Pesquisar canais agora?"];
var homePageHistory = ["Historial"];
var miracastTitle = ["Link WiFi TV","Dispositivo TCL"];
var miracastRemind=["Link WiFi TV permite-lhe partilhar o ecrã e o som do seu dispositivo, como por exemplo do smartphone ou do tablet para a TV, sem fios (i.e. sem cabos ligação). Isto torna possível visualizar na TV ao mesmo tempo que o smartphone ou o tablet estão a reproduzir. Por exemplo, pode apresentar um vídeo no smartphone e exibi-lo simultaneamente na TV ou usar o tablet como controlador de jogos com o conteúdo exibido no ecrã maior da TV.","Ligação WiFi TV na TV está pronta. Já pode começar a partilhar o ecrã do seu dispositivo com a TV.","A ligar. Aguarde!","Erro de ligação !","Falhou ligação.Verifique!"];
var homePageLittleWin = ["Configurações","Media","Canais favoritos","Smart TV","EPG"];

var hbbtvStopRemind  = ["Pretende parar a reprodução?"];
var colorSystem = ["Automático","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Prima OPTION (opção) para mais informação";
var emptyListInfo = "Nenhum dispositivo ligado à TV !";
var optionVideoListArray_1 = ["Modo de imagem", "Predefinição de som", "Modo leitura", "Modo de ecrã", "Modo 3D", 
							  "Interruptor E-D", "Profund. do campo", "Legendas", "Faixa de áudio", "Título", "Capítulo", "Info"];
var optionVideoListArray_2 = ["Modo de imagem", "Predefinição de som", "Modo leitura", "Modo de ecrã", 
							  "Legendas", "Faixa de áudio", "Título", "Capítulo", "Info"];
var bottomTipsText = ["Ler/Pausa", "Retroceder rápido", "Avançar rápido", "Lista de reprodução", "Configurações"];
var picturePresetArray = ["Standard", "Dinâmico", "Natural", "Cinema", "Utilizador"];
var videoPlayModeArray = ["Repetir Todos", "Repetir Um", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Panorama", "Vid Zoom", "Zoom 2", "Vid Zoom", "Strekk Zoom", "Automático"];
var screenModeSDArray = ["16:9", "4:3", "Panorama", "Zoom 14:9", "Zoom 16:9", "Zoom inn 16:9", "Automático"];
var Mode3DArray = ["Inactivo", "2D-para-3D", "Lado-a-Lado", "Topo e Base", "Intercalar linha"];
var videoOptionListArray = ["Inactivo", "Faixa", "Legendas", "Título", "Capítulo"];
var subMenuTitleText = "Legendas";
var langMenuTitleText = "Idioma de áudio";
var titleMenuTitleText = "Título";
var mode3DMenuTitleText = "Modo 3D";
var langInfoText = "Faixa";
var STOP_RESUME_INFO = "Parar-Retomar";
var playListName = "nome";
var eb_tips = "Dicas";
var ok_button = "Ok";
var eb_info = ["Erro de descodificação áudio.", "Erro de descodificação vídeo.", "Formato áudio não suportado.", 
			   "Formato de vídeo não suportado.", "Não consigo abrir este ficheiro!", "Falha de reprodução, tente de novo.",
			   "Formato de ficheiro não suportado.", "Oops! Leitor parou a reprodução.",
			   "Caminho de ficheiro não existe ou é inválido.\n Volte a inserir o dispositivo de armazenamento e tente novamente.",
			   "Continuar a reproduzir a partir do estado\n de reprodução anterior?"];
var frameTitleText = "Novo dispositivo";
var eb_quit_info = "Tem a certeza que pretende sair?";
var eb_yes = "SIM";
var eb_no = "NÃO";
var offinfo = "Inactivo";
var naInfo = "Nulo";
var consoleInfoArray = ["Retroceder rápido", "Avançar rápido", "Ler/Pausa", "Lista de reprodução"];
var cantOperateText = ["Função não suportada."];
var chapterChangeInfo = "Apenas os capítulos de 1 a XXXX estão disponíveis.";
var metaDataArray = ["Metadados de título/edição: ", "Metadados de capítulo: ", "Metadados de áudio: ", "Metadados de legendas: "];
var metaTitleInfo = "Título";
var metaChapterInfo = "Capítulo";
var videoLoadingInfo = "A analisar...";
var listLoadingInfo = "A carregar...";
var pgInfo = "Classificação da lei: ";
var fileNameText = "nome";
var fileDateText = "Data";
var fileSizeText = "Tamanho";
var fileDurationText = "Duração";
var fileDirectorText = "Realizador";
var fileCopyrightText = "Copyright";
var fileArtistText = "Intérprete";
var fileAlbumText = "Álbum";
var fileGenreText = "Género";
var fileYearText = "Ano";
var fileGenreText = "Género";
var mainListArray = ["Tudo", "Imagem", "Vídeo", "Música"];
var sortArray = ["nome", "Data"];
var parserArray = ["Normal", "Recursivo  "];
var emptyTipsInfo = "Oops. Ficheiro não suportado foi encontrado.";
var emptyFolderInfo = "Oops. Ficheiro não suportado foi encontrado.";
var sortName = "Ordenar por";
var parserName = "Reconhecedor";
var divx_str1 = "Registo DivX®";
var divx_str2 = "Anulação do registo DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Sem opções disponíveis.";

var musicSoundPresetArray = ["Standard", "Cinema", "Música", "Limpar voz", "Utilizador"];
var musicInformationArray = ["nome", "Intérprete", "Álbum", "Género:", "Ano:", "Duração:"];
var playListName = "nome";
var playTipsInfo = ["Está a reproduzir o primeiro ficheiro.", "Está a reproduzir o último ficheiro."]
var musicNameInfo = "Name";
var musicArtistInfo = "Intérprete";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Predefinição de som";
var optionBGMInfo = "Reproduzir em segundo plano";
var optionAudioOnlyInfo = "Só áudio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX foi ligado à televisão!";
var tvRemoteTitle		= "TV remota";
var tvRemoteDeveloper	= "A aplicação foi desenvolvida pela TCL";
var tvRemoteDeviceTitle	= "Nome do dispositivo:";
var remoteOption		= ["Partilha de multimédia","Controlo Remoto","Ajuda","Acerca de","Ligação Inteligente"];
var remotebottom		= " Transfira \"TCL nScreen\" para o seu smartphone ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Partilhar fotos, vídeos e música com a televisão através do telefone.",
							"Passos: \n 1. Clique \"TCL nScreen\" (tv remota) no telefone. Ligue o telefone com a televisão na mesma rede WiFi;\n 2. Clique \"Media sharing\" (partilha de ficheiros) para pesquisar os ficheiros multimédia;\n 3. Envie os ficheiros para a televisão para serem reproduzidos (com uma das seguintes opções)",
							"      a) Arrastar e Largar a pasta/ficheiro para o ícone TV na parte superior do ecrã;\n      b) Direccionar o telefone para a TV para exibir o primeiro ficheiro;\n      c) Reproduzir multimédia no telefone e clicar o ícone de partilha da TV;",
							" 4. Enquanto estiver a reproduzir na TV preparar o telefone para reproduzir o ficheiro anterior ou seguinte."];
var controlReminds		= ["Usar o telefone como controlo remoto para operar a TV.",
							" ",
							"Passos: \n   1. Clique \"TCL nScreen\" no telefone. Ligue o telefone com a televisão na mesma rede WiFi;\n 2. Clique \"Controlo remoto\" para operar a televisão."];
var helpDeviceWords		= "Interacção multi-ecrãs";
var helpBottom			= " Na era da tecnologia nuvem, os dispositivos inteligentes como o telefone e a TV são ligados entre si. Partilhar multimédia em ecrãs múltiplos com a sua família e controlar a TV através do telefone. ";
var helpReminds			= ["Preparações\n 1. Transfira e instale \"TCL nScreen\" a partir do Google Play ou Apple Store.\n 2. Ligue o telefone à televisão através da mesma rede WiFi.",
							" ",
							"Telefone recomendado\n   1. CPU: acima 800MHz\n   2. Armazenamento: pelo menos 80MB de espaço livre",
							" ",
							"Renúncia de responsabilidade\n Se \"TV Remota\" não estiver disponível no seu telemóvel, contacte o fabricante do telefone."];
var helpButtons			= ["Anterior","Seguinte"];
var aboutReminds		= ["TV remota","A aplicação foi desenvolvida pela TCL"];
var aboutExit			= "Sair";
var smartReminds		= ["Ligação rápida e inteligente entre a televisão e o telefone.",
							" ",
							"Passos\n 1. Ligue a televisão e o smartphone à mesma rede LAN: Clique \"TCL nScreen\" no smartphone.\n 2. Clique \"Smart Connect\" (ligar inteligente) para digitalizar o código QR.\n 3. Com a televisão no modo de visualização da transmissão, prima INFO no controlo TCL nScreen durante 4 segundos e irá surgir um código QR de ecrã inteiro.",];
var smartQRReminds		= ["Clique Smart Connect na aplicação TCL nScreen no seu telefone e digitalize o código QR para ligar a televisão e o telefone rapidamente.",
							"O código QR contém info de conta LAN. Guarde esta informação."];
							

var consoleTipArray = ["Anterior","Seguinte","Consola","Lista de reprodução"];							
var optionInfoArray = ["Modo de imagem","Modo leitura","Duração","Efeito","Info"];

var playModeArray = ["Normal","Misturar","Repetir"];
var durationArray = ["Curto(5s)", "Médio(10s)", "Longo(15s)"];
var effectArray = ["Nenhum", "Dissolver", "Varrer p/ dir.", "Varrer p/ esq.", "Varrer p/ cima", "Varrer p/baixo", "Dentro de caixa", "Fora de caixa", "Aleatório"];
var infoArray = ["Nome:","Tamanho:","Data:","Localização"];

var picturePresetBarTitleInfo = "Modo de imagem";
var picturePresetBarArray = ["Standard","Dinâmico","Estúdio","Cinema","Utilizador"];
var upTipsInfo = "Mover imagem"; //add yums 2014-10-10
var consoleTipsArray = ["Consola","Anterior","Seguinte","Lista de reprodução","Configurações"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Prima DIREITA novamente para reproduzir a imagem seguinte","Prima ESQUERDA novamente para reproduzir a imagem anterior","Prima BAIXO novamente para exibir a lista de reprodução"]; //add yums 2014-10-10

var optionPvrListArray = ["Modo de imagem","Predefinição de som", "Modo de ecrã", "Modo 3D", "Legendas", "Faixa de áudio", "Info"];							
	
var titleSpanFirstArray = ["Controlo e Ligação","Operações básicas","APPS","TV","Configurações","FAQ"];
var titleSpanSecondArray = [["Controlo Remoto","Teclas do painel","Navegação fácil","Ligação da televisão","Ligação da televisão","Ligação da televisão","Sem Fios"],["Lançador","Barra de estado","Fonte"],["Apps em reprodução","Media","TV remota"],["Ajustar canal e volume","Lista de canais","EPG","Instalar canais","Canais favoritos"],["Ajuste da imagem","Ajuste do som","Ajuste do canal","Actualiz. software","Idioma","Bloqueio parental"],["Perguntas frequentes, FAQ","Perguntas frequentes, FAQ","Resolução de problemas","Resolução de problemas","Termos e condições"]];
var contentSpan1_1Array = [["LIST (lista):","INFO:","MENU:","POWER (interruptor):","SOURCE (entrada):","GUIDE (guia):","SMART TV (tv inteligente):"],["Exibe a lista de canais","Exibe a informação do programa","Vai para a página de início","Desliga ou coloca em standby","Seleciona o modo da entrada","Mostra a informação EPG (guia de programa eletrónico)","Avança para a página Smart TV"]];
var contentSpan1_2Array = ["Canal anterior","Canal seguinte","Aumenta o volume","Reduz o volume","Vai para a página de início","Confirma a opção","Standby / Ligar"];
var contentSpan1_3Array = ["OK/Guia","Subir canal","Descer canal","Descer volume","Subir volume","Disponível como setas em algumas funções."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptador AV OUT","LAN","Smartphone","PC/Set-top box/DVD","Amplificador de áudio","Amplificador de áudio/monitor","A sua televisão pode não incluir todas as tomadas."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Auscultadores","Adaptador AV IN","SPDIF","Adaptador CMP AUDIO IN","Adaptador CMP IN (YPbPr)","Dispositivos USB","Dispositivos USB","Auscultadores","DVC/Consola de jogos/Set-top-box/DVD","Amplificador de áudio","DVC/Consola de jogos/Set-top-box/DVD","A sua televisão pode não incluir todas as tomadas."];
var contentSpan1_6Array = ["Interface comum","SD","VGA","SCART","Mini SCART","ANTENNA IN","Placa PCMCIA","Cartão SD","Computador","Set-top box/DVD","Antena/Cabo/Satélite","A sua televisão pode não incluir todas as tomadas."];
var contentSpan1_7Array = ["Tablet","Computador","Roteador","Telefone","TV"];

var contentSpan2Array = [["Prima as setas para ver a página de Início.","Prima OK para ver um dos programas incluídos ou aceder à app."],["Exibe a data, rede e dispositivos, etc. no canto superior direito do ecrã."],["Selecione a entrada dos dispositivos ligados à televisão através de diferentes portas, como TV, AV, HDMI, etc."]];

var contentSpan3Array = ["Desfrute e veja as suas Apps favoritas através da página Smart TV.","Veja fotos, vídeos e reproduza música a partir de um dispositivo de armazenamento USB.","Ligue a televisão e o smartphone ou tablet à mesma rede LAN","Clique em TCL nScreen ou TV Remota no smartphone ou tablet.","Partilhe fotos, vídeos e música em vários ecrãs com a sua família e controle a sua televisão através do seu smartphone."];

var contentSpan4Array = [["Prima CIMA/BAIXO para mudar de canal","Prima ESQUERDA/DIREITA para ajustar o volume"],["Pressione em LIST no controlo remoto para ver o alinhamento dos canais.","Prima CIMA/BAIXO para escolher o seu canal"],["EPG é um guia no ecrã que exibe programas televisivos agendados. Pode navegar, selecionar, ver e gravar programas."],["Pesquise e instale canais"],["Adicione ou edite os seus canais favoritos na Lista de canais"]];

var contentSpan5Array = ["Desfrute dos seus programas favoritos através das apps vídeo"];

var contentSpan6Array = [["Prima MENU para exibir as opções de definição do sistema","Aceda às definições da imagem para ajustar os valores"],["Prima MENU para exibir as opções de definição do sistema","Aceda às definições do som para definir as opções"],["Prima MENU para exibir as opções de definição do sistema","Aceda às definições de canal para definir as opções"],["Atualize a sua televisão quando houver uma nova versão de software disponível"],["Pode escolher o seu idioma de menu preferido"],["Permite aos pais bloquearem canais ou programas que não são adequados para crianças"]];

var contentSpan7_1Array = [["Sem imagem, sem som","Verifique se o fusível ou o disjuntor está a funcionar.","Ligue outro aparelho elétrico à tomada, para garantir que esta está funcionar ou foi ligado.","A ficha elétrica tem mau contacto com a tomada elétrica","Verifique a fonte de sinal."],["Imagem normal, sem som","Prima a tecla SUBIR volume para aumentar o volume.","A definição do som está errada.","Erro do sinal proveniente da transmissão."],["Som normal, sem imagem","Ajuste o brilho e o contraste","Erro do sinal proveniente da transmissão.","Verifique se está apenas no modo áudio."]];
var contentSpan7_2Array = [["Interferência de frequência de rádio","Esta interferência produz ondulações em movimento ou tiras diagonais e, em alguns casos, perda de contraste na imagem. Encontre e remova a origem da interferência de rádio."],["Sem cor","Ajuste as definições de cor.","Experimente outro canal. Pode estar a receber um programa a preto e branco."],["O controlo remoto não funciona","Substitua as pilhas.","As pilhas não estão instaladas corretamente. O cabo de alimentação da televisão não está ligado."]];
var contentSpan7_3Array = [["O conteúdo do dispositivo USB não é exibido","Verifique se o dispositivo de armazenamento USB é compatível com a televisão.","Verifique se os formatos dos ficheiros de áudio e imagem são suportados pela televisão."],["Reprodução sem som","O formato de áudio do vídeo não é suportado pelo leitor da televisão."],["Os ficheiros não são reproduzidos com suavidade","O desempenho de transferência do dispositivo de armazenamento USB pode limitar a taxa de transferência de dados para a televisão."]];
var contentSpan7_4Array = [["Ao que devo dar atenção quando estou a realizar atualização do software","Sem interferências de energia quando está a atualizar o software.","Evite quaisquer operações com o controlo remoto quando está a atualizar o software.","Seja paciente, pois o processo de atualização do software pode demorar."],["Não existem alterações distintas na interface da televisão após a atualização do software.","Sob determinadas condições, a atualização do software pode não apenas atualizar ou adicionar novas funções, mas também melhorar o desempenho da sua televisão, sem quaisquer alterações distintas na interface. Portanto, em alguns casos, a interface da televisão pode permanecer inalterada."]];
var termsTitle = "Termos e condições";
var termsConditions = ["(Declaração legal) da TCL - fabricante desta televisão.","Devido às várias capacidades características dos produtos Smart TV - Services bem como às limitações no conteúdo existente, algumas funções, aplicações e serviços podem não estar disponíveis em todos os dispositivos em todas as regiões. Algumas funções da Smart TV podem igualmente exigir dispositivos periféricos adicionais ou taxas de subscrição que são vendidos em separado. Agradecemos a visita ao nosso sítio web para mais informação sobre um dispositivo específico e sobre a disponibilidade do conteúdo. Os serviços e a disponibilidade do conteúdo através da Smart TV estão sujeitos a alteração com regularidade sem aviso prévio. \n   Todo o conteúdo e serviços acessíveis através deste dispositivo pertencem a terceiros e estão protegidos pela lei dos direitos de autor, patente, marca registada e/ou outras leis de propriedade intelectual. O referido conteúdo e serviços são unicamente fornecidos para uso pessoal não comercial. Não é permitido o uso de qualquer conteúdo ou serviços num modo diferente do que foi autorizado pelo proprietário do conteúdo ou pelo fornecedor do serviço. Sem limitar o anteriormente referido, a menos que expressamente autorizado pelo proprietário do conteúdo aplicável ou pelo fornecedor do serviço, não pode modificar, copiar, voltar a publicar, carregar, postar, transmitir, traduzir, vender, criar trabalhos derivados, explorar ou distribuir de alguma forma ou meio o conteúdo ou serviços exibidos através deste dispositivo. \n   TOMA EXPRESSAMENTE CONHECIMENTO E ACEITA QUE O USO DO DISPOSITIVO É POR SUA CONTA E RISCO E QUE OS REFERIDOS RISCOS NO QUE SE REFERE A QUALIDADE SATISFATÓRIA, DESEMPENHO E EXACTIDÃO SÃO DE SUA RESPONSABILIDADE. O DISPOSITIVO E TODO O CONTEÚDO E SERVIÇOS DE TERCEIROS SÃO FORNECIDOS “TAL COMO ESTÃO” SEM GARANTIA DE QUALQUER TIPO, SEJA EXPRESSA OU IMPLÍCITA. TCL RENUNCIA EXPRESSAMENTE A TODAS AS GARANTIAS E CONDIÇÕES NO QUE SE REFERE AO DISPOSITIVO E QUALQUER CONTEÚDO E SERVIÇOS, SEJAM EXPRESSAS OU IMPLÍCITAS, INCLUINDO MAS NÃO LIMITADO A, GARANTIAS DE MERCANTIBILIDADE, DE QUALIDADE SATISFATÓRIA, ADEQUAÇÃO PARA UMA FINALIDADE EM ESPECIAL, DE USUFRUTO E NÃO VIOLAÇÃO DOS DIREITOS DE TERCEIROS. TCL NÃO GARANTE A EXACTIDÃO, VALIDADE, ACTUALIDADE, LEGALIDADE OU INTEGRALIDADE DE QUALQUER CONTEÚDO OU SERVIÇO DISPONIBILIZADO ATRAVÉS DESTE DISPOSITIVO E NÃO GARANTE QUE O DISPOSITIVO, CONTEÚDO OU SERVIÇOS ESTEJAM CONFORME OS SEUS REQUISITOS, OU QUE O FUNCIONAMENTO DO DISPOSITIVO OU SERVIÇOS SEJA SEM INTERRUPÇÃO OU ISENTO DE ERROS. EM NENHUMAS CIRCUNSTÂNCIAS, INCLUINDO NEGLIGÊNCIA, PODE A TCL SER RESPONSÁVEL, SEJA POR CONTRATO OU EXTRA-CONTRATUALMENTE POR QUAISQUER DANOS DIRECTOS, INDIRECTOS, ACIDENTAIS, ESPECIAIS OU CONSEQUENCIAIS, CUSTAS DE ADVOGADOS, DESPESAS, OU QUAISQUER OUTROS DANOS QUE POSSAM SURGIR, OU EM LIGAÇÃO COM O MESMO, QUALQUER INFORMAÇÃO CONTIDA NO MESMO, OU COMO RESULTADO DO USO DESTE DISPOSITIVO, OU QUALQUER CONTEÚDO OU SERVIÇO ACEDIDO PELO UTILIZADOR OU POR TERCEIROS, MESMO QUE AVISADO DA POSSIBILIDADE DOS REFERIDOS DANOS. \n   Os serviços de terceiros podem ser alterados, suspensos, removidos, concluídos ou interrompidos, ou o acesso pode ser desactivado em qualquer momento, sem aviso, e a TCL (fabricante das TVs da marca Thomson) não representa nem garante que qualquer conteúdo ou serviço se mantenha disponível em qualquer período de tempo. O conteúdo e os serviços são transmitidos por terceiros através de redes e de serviços de transmissão sobre os quais a TCL não tem qualquer controlo. Sem limitar a generalidade desta renúncia, a TCL renuncia expressamente qualquer responsabilidade ou consequências relacionadas com qualquer alteração, interrupção, desactivação, remoção ou suspensão de qualquer conteúdo ou serviço disponibilizado através deste dispositivo. A TCL pode impor limites de utilização ou acesso a determinados serviços ou conteúdo, em qualquer caso e sem aviso ou responsabilidade. A TCL não é nem responsável nem legalmente obrigada pelo respectivo serviço ao cliente relacionado com o conteúdo ou serviços. Qualquer questão ou pedido de serviço relacionado com o conteúdo ou serviços deve ser feito directamente para o respectivo fornecedor de conteúdo ou serviços."];

var noChannelListRemind        = ["Nenhum canal encontrado. A lista de canais está disponível após a pesquisa de canais.","Pesquisa de canais"];
var closeSubtitleRemind   = "A função estará disponível quando as legendas estão desligadas. Pretende definir agora?";

var estickerTitles = ["Imagens extremamente realistas","Cor que parece viva","Extraordinário movimento realista","Qualidade dinâmica da imagem","SR UHD upscaling, melhoria da imagem","Experimente o mundo 3D","Desempenho mais rápido","Futuro conteúdo 4K","Desfrute do mundo online","Aceda a conteúdo extra","Sintonizadores digitais integrados","Ligue todos os dispositivos","Várias fontes 4K","Conteúdo USB","WiFi ultra rápido","Conteúdo móvel na televisão","Conteúdo no dispositivo móvel","Conteúdo local","Aprovado por DivX","Imagem sem perturbações","Pronta para canais","TDT Premium"];
var estickerDescriptions = ["Experiência de visualização espetacular, graças a imagens com quatro vezes mais detalhe Full HD em ecrã UHD.","Vasta gama de cores que oferece emoção em cada cena, com vermelhos vívidos e verdes esmeralda","Interpolação de imagem 4K e iluminação de fundo que combatem os problemas de esbatimento na imagem","O realismo da imagem original é melhorado para produzir uma verdadeira expressão dinâmica, com contraste extraordinário","Desfrute de programas televisivos e discos Blu-Ray mais nítidos do que nunca, graças à tecnologia Super Resolution (super resolução)","Experimente a 3D TV ready e veja vário conteúdo em 3D","Uma experiência de entretenimento mais prazerosa, com Quad Core para interação perfeita e desempenho melhorado.","Suporte de codec HEVC (H.265) para a futura distribuição de vídeo 4K","Vastidão de aplicações on-line, serviços VOD, acompanhe a transmissão televisiva e navegue pela Internet","Veja mais com serviços adicionais e conteúdo dos seus fornecedores de serviços favoritos","Aceda a canais televisivos com alta definição, sem uma set top box adicional","Fácil de ligar a várias fontes digitais disponíveis no seu lar","Televisão pronta para o futuro, capaz de reproduzir ficheiro 4K de 50/60Hz através de HDMI 2.0 com HDCP 2.2","Conteúdo de vídeo ou fotos diretamente a partir da unidade USB, HDD ou câmara no ecrã da televisão, em resolução 4K","Última geração 2x2 MIMO e norma AC oferece velocidade de acesso à Internet sem rivais","Desfrute de fotos, vídeos e aplicações a partir de dispositivos móveis no ecrã da televisão, graças à tecnologia de espelho do ecrã","Fotos, vídeos, aplicações do smartphone ou tablet podem ser exibidas no ecrã da televisão ","Exibição no ecrã da televisão de conteúdo local, como fotos e vídeos de dispositivos ligados à rede local","Reproduza filmes alugados ou próprios, protegidos por DivX","Design com moldura ultra estreita e super fina","Testado e aprovado pela Canal+","Testado e aprovado pela TDT Premium"];							

var eManualTextArray = ["E-Manual","Todos os gráficos no interior servem apenas para representação."];
var frontPanelRemind = "Painel frontal bloq.";
var eRPRemind		 = "O modo de loja não pode cumprir exigência do pedido ERP. Tem a certeza?";	
var noRelatedChannel = "Nenhum canal relacionado";
var option0624Name          = ["BOP","BFS","Evento a Evento","GetUserID","BGM","Reset all","Reiniciar compra","NRM","Selecção DVB-T2 e País","Modo HbbTV"];
var DVBT2AndChoice = ["Activo","Por País","Inactivo"];
var hbbtvServiceRemind = "O Serviço Hbb TV está aí, brevemente.";
var insertWord = "Introduzir";		
var viewDetail = "Detalhe de vista";							
							

var remindOAD  = "Actualizar software. Pode existir noutro canal uma nova actualização recomendada de software. Se aceitar descarregar o software, pode alterar automaticamente o canal. Pretende fazê-lo agora?";

var LEDStatus = ["A piscar", "Normal"];
var netFlixRemind = "Esta função interromperá o acesso aos serviços Netflix até iniciar sessão novamente.";
var ESNExplanation = "Número Eletrónico de Série";
var resetShopRemind = "O sistema está a reiniciar agora, não deve desligar a TV";
var initialSelectOption = "Selecionar uma opção:";
var databaseRemind   = "O sistema identificou a base de dados como estando danificada por alguma razão desconhecida e vai reconstruir a mesma automaticamente, premir OK para continuar";
var Deactivation = "Desativação";
var oadFutureRemind = "Actualização de software. Está disponível  em %s uma nova actualização recomendada de software. A actualização pode levar algum tempo e o ecrã pode ficar preto. Não desligar o receptor durante a actualização. Se aceitar esta actualização, deve deixar o receptor no modo de standby na hora programada. Pretende receber esta actualização?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Saída som";
var bt_soundOutPutTV = "Colunas TV";
var bt_soundOutPutBT = "Disp. Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth e TV";
var bt_refreshBarName = "Disp.";
var bt_settingTips_On = "Ligar função Bluetooth e pesq. Dispositivos.";
var bt_settingTips_Finding = "Ver disp. disponíveis...";
var bt_settingTips_NoDevice = "Sem disp. disponível.";
var bt_deviceList_State_NoConnect = "Não ligado";
var bt_deviceList_State_Connecting = "A ligar…";
var bt_deviceList_State_Connected = "Ligado";
var bt_deviceList_State_Paired = "Empar.";
var bt_deviceList_Conncect_Failed_Tips1 = "Ligação falhou.";
var bt_deviceList_Conncect_Failed_Tips2 = "Confirmar se Bluetooth XXX está ligado";
var bt_deviceList_Conncect_Success = "Ligado a disp. Bluetooth.";
var bt_deviceList_Disconncect_Success = "Desligado de disp. Bluetooth.";
var bt_deviceList_Disconnect = "Pretende desligar de XXX?";
var bt_tipsTitle = "Dica";
var bt_bluetooth_Pairing_Title = "Empar. Bluetooth";
var bt_bluetooth_Input_Pin = "Inserir PIN:";
var bt_bluetooth_Output_Pin_Tip = "Inserir PIN XXXX c/ teclas.";
var bt_bluetooth_Pin_Wrong_Tip = "PIN errado";
var bt_bluetooth_Remove_Pair_Title = "Perg.";
var bt_bluetooth_Remove_Pair_Ask = "Esquecer disp.?";
var bt_bluetooth_module_error = "Erro do módulo Bluetooth!";
							
var netflixDialogOptions = ["OK","Mais tarde","Não mostrar novamente"];
var netflixDialogContent = "A Netflix tem milhares de filmes à sua disposição, ver agora?";
var netflixRemoteDialogContent = "O controlo remoto com a tecla Netflix já está à venda. Visite o Web site seguinte para obter mais informações.\nhttps://store.tcleu.com";
														
var applyPictureModeSwitchValue	 = ["Fonte atual","Todas as fontes"];
var audioDescriptionName = ["Descrição Áudio","Altifalante","Volume do altifalante","Auscultador","Volume do auscultador","AD volume","Dispositivo Bluetooth","Volume do dispositivo Bluetooth"];
var audioDescriptionOptions = ["Inactivo","Normal","Descrição Áudio"];							
var volumeOffRemind = 'Defina XXX para “Lig.” no menu de Definições.';
var switchSourceRemind   = " inserido. Deseja mudar agora?";							
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];

var footballModeName = "Modo de Desporto";
var resetStadium = "Estádio";							
var netflix = "NETFLIX";
var golive = "GOLIVE";								
							
							
							
//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9","Sair","0","Zoom+",
                       	   "Sair",
                       	   "Lista","0","Texto","Guia","Aceder","Sair","Menu","Legendas","Informações",
                       	   "Parar",
                       	   "Informações","Menu","Sair"
                       	   ];
var nscreenTips = "GuideOn ajuda os utilizadores a navegar através da vasta quantidade de conteúdos.";
var nscreenContent = 'Passos: 1.Clicar em "TCL nScreen" no telefone.  Ligar o telefone à TV através da mesma LAN; 2.Clicar em "GuideOn" para entrar em GuideOn; 3.GuideOn oferece funcionalidade similar a um guia de programas impresso a informar os utilizadores sobre o conteúdo televisivo disponível;';
var singalBrokenoffTips = "O sinal foi interrompido. O sistema não consegue concluir a transf.";
var contentSpan1_1Array_AU =  [["POWER (interruptor):","SOURCE (entrada):","MENU:","BACK:","INFO:","HOME:","EXIT:","LIST(lista):"],
                              ["Turns power on or standby mode","Select the input source",
                                "Show TV settings menu","Go back to the Previous menu or exit a running APP","Exibe a informação do programa",
                                "Vai para a página de início","Go back to the Previous menu or exit a running APP","Exibe a lista de canais"]];
var guideDescriptionWords ="Deve procurar o código QR para descarregar a aplicação GuideOn para o telefone";
var settingNoticeSourceName ="Fonte automática";
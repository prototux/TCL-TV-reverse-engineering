
var titleImgArray = ["../images/emanual/Icon_Control&Connection_S.png",
					 "../images/emanual/Icon_Basic_S.png",
					 "../images/emanual/Icon_App_S.png",
					 "../images/emanual/Icon_TV_S.png",
					 "../images/emanual/Icon_Setting_S.png",
					 "../images/emanual/Icon_FAQ_S.png"];

var tvImageArrayImgName = ["screen-launcher.png",
						   "screen-source.png",
						   "screen-opera_dump.png",
						   "screen-usb.png",
						   "screen-remote.png",
						   "screen-Volume.png",
						   "screen-channelList.png",
						   "screen-EPG.png",
						   "screen-channelInstall.png",
						   "screen-favoriteChannel.png",
						   "screen-picture.png",
						   "screen-sound.png",
						   "screen-channel.png",
						   "screen-update.png",
						   "screen-language.png",
						   "screen-parentLock.png"];

var tvImageArray = new Array(tvImageArrayImgName.length);
var setting = top.g_setting;
/** **/
var titleSpanFirstArray = top.titleSpanFirstArray;
var titleSpanSecondArray = top.titleSpanSecondArray;
var contentSpan1_1Array = top.contentSpan1_1Array;
var contentSpan1_1Array_AU = top.contentSpan1_1Array_AU;
var contentSpan1_2Array = top.contentSpan1_2Array;
var contentSpan1_3Array = top.contentSpan1_3Array;
var contentSpan1_4Array = top.contentSpan1_4Array;
var contentSpan1_5Array = top.contentSpan1_5Array;
var contentSpan1_6Array = top.contentSpan1_6Array;
var contentSpan1_7Array = top.contentSpan1_7Array;

var contentSpan2Array = top.contentSpan2Array;

var contentSpan3Array = top.contentSpan3Array;

var contentSpan4Array = top.contentSpan4Array;

var contentSpan5Array = top.contentSpan5Array;

var contentSpan6Array = top.contentSpan6Array;

var contentSpan7_1Array = top.contentSpan7_1Array;
var contentSpan7_2Array = top.contentSpan7_2Array;
var contentSpan7_3Array = top.contentSpan7_3Array;
var contentSpan7_4Array = top.contentSpan7_4Array;
var termsTitle = top.termsTitle;
var termsConditions = top.termsConditions;

/***
var titleSpanFirstArray = ["Steuerung & Verbindung","Allgemeine Bedienungshinweise","APPS","TV","Einstellungen","FAQs"];
var titleSpanSecondArray = [["Fernbedienung","Panel Keys","Einfache Navigation","TV-Anschluss","TV-Anschluss","TV-Anschluss","Drahtlos"],["Launcher","Statusbalken","Quelle"],["Laufende Apps","Medien","Fernbedienung"],["Kanal und Lautstärke einstellen","Kanalliste","EPG","Senderinstallation","Favoritenkanäle"],["Bildeinstellung","Toneinstellung","Kanaleinstellung","Softwareupdate","Sprache","Jugendschutz"],["Häufig gestellte Fragen","Häufig gestellte Fragen","Störungsbehebung","Störungsbehebung","Geschäftsbedingungen"]];
var contentSpan1_1Array = [["LISTE:","INFO:","MENÜ:","EIN/AUS:","SIGNALQUELLE:","PROGRAMMFÜHRUNG:","SMART TV:"],["Zeigt die Kanalliste an","Zeigt Programminformationen an","Rückkehr zur Homepage","Schaltet das Gerät ein oder in den Stand-by-Modus","Auswahl der Eingangsquelle","EPG (Elektronische Fernsehzeitschrift) wird angezeigt","Navigieren Sie zur Seite Smart TV"]];
var contentSpan1_2Array = ["Vorheriger Sender","Nächster Sender","Lautstärke erhöhen up","Lautstärke verringern","Rückkehr zur Homepage","Option bestätigen","Stand-by-Modus / Ein"];
var contentSpan1_3Array = ["OK/Menüführung","Sender aufwärts","Sender abwärts","Lautstärke verringern","Lautstärke erhöhen","Verwendung als Navigantionstasten in einigen Funktionen."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","AV-Ausgang","LAN","Smartphone","PC/Digitalempfänger/DVD-Player","Audio-Verstärker","Audio-Verstärker/Monitor",""];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Kopfhörer","AV-Eingang","SPDIF","CMP AUDIO Eingang","CMP Eingang (YPbPr)","USB-Geräte","USB-Geräte","Kopfhörer","DVC/Spielkonsole/Digitalempfänger/DVD-Player","Audio-Verstärker","DVC/Spielkonsole/Digitalempfänger/DVD-Player",""];
var contentSpan1_6Array = ["CI-Modul","SD","VGA","SCART","Mini SCART","ANTENNE Eingang","PCMCIA-Karte","SD-Karte","PC","Digitalempfänger/DVD-Player","Antenne/Kabel/Satellit",""];
var contentSpan1_7Array = ["Tablette","PC","Router","Telefon","TV"];

var contentSpan2Array = [["Drücken Sie die Navigationstasten, um die Homepage anzuzeigen.","Dann drücken Sie OK, um eines der Programme anzuzeigen oder die App aufzurufen."],["Datum, Netzwerk und Geräte werden oben rechts im Bild angezeigt."],["Wählen Sie die Eingangsquelle unter den über die verschiedenen Anschlüsse mit dem Fernseher verbundenen Geräte, wie VGA, HDMI, USB usw."]];

var contentSpan3Array = ["Zeigen Sie Ihre Lieblings-Apps auf der Seite Smart TV an","Fotos, Videos und Musik von USB-Speichermedium wiedergeben.","Verbinden Sie Ihren Fernseher und Ihr Smartphone oder Tablet auf dem gleichen LAN","Klicken Sie auf TCL nScreen oder TV Remote auf Ihrem Smartphone oder Tablet","Geben Sie Fotos, Videos und Musik für Ihre Familie auf mehreren Bildschirmen frei und bedienen Sie Ihren Fernseher über Ihr Smartphone"];

var contentSpan4Array = [["Drücken Sie AUFWÄRTS/ABWÄRTS, um Kanäle umzuschalten","Drücken Sie LINKS/RECHTS, um die Lautstärke einzustellen"],["Drücken Sie LIST auf der Fernbedienung, um die Programme anzuzeigen","Drücken Sie AUFWÄRTS/ABWÄRTS, um Ihren Kanal zu wählen"],["EPG ist eine elektronische Fernsehzeitschrift. In der Funktion können Sie die Programme navigieren, wählen, anzeigen und aufnehmen."],["Kanäle suchen und installieren"],["Favoritenkanäle in der Kanalliste hinzufügen oder bearbeiten"]];

var contentSpan5Array = ["Genießen Sie Ihre Favoritenprogramme über die Video-Apps"];

var contentSpan6Array = [["Drücken Sie MENÜ, um die Systemeinstellungen anzuzeigen","Rufen Sie die Bildeinstellungen auf, um die Werte einzustellen"],["Drücken Sie MENÜ, um die Systemeinstellungen anzuzeigen","Rufen Sie die Toneinstellungen auf, um die Optionen einzustellen"],["Drücken Sie MENÜ, um die Systemeinstellungen anzuzeigen","Rufen Sie die Kanaleinstellungen auf, um die Optionen einzustellen"],["Aktualisieren Sie Ihren Fernseher, wenn eine neue Software-Version verfügbar ist"],["Wählen Sie Ihre bevorzugte Menüsprache"],["Aktiviert die Jugendschutzsperre für Kanäle oder Programme, die für Kinder ungeeignet sind"]];

var contentSpan7_1Array = [["Kein Bild, kein Ton","Vergewissern Sie sich, dass Ihre Sicherung oder der Trennschalter in Ordnung ist.","Schließen Sie ein anderes Gerät zur Überprüfung an der Steckdose an.","Der Netzstecker steckt nicht richtig in der Steckdose.","Überprüfen Sie die Signalquelle."],["Bild, aber kein Ton","Erhöhen Sie die Lautstärke.","Die Toneinstellungen sind falsch.","Signalfehler vom Sender."],["Ton, aber kein Bild","Stellen Sie die Helligkeit und den Kontrast ein","Signalfehler vom Sender.","Überprüfen Sie, ob nur der Audiomodus eingestellt ist."]];
var contentSpan7_2Array = [["Funkfrequenzstörungen","Diese Störungen führen zu Wellen oder diagonalen Streifen und in einigen Fällen zum Verlust des Kontrasts im Bild. Finden und entfernen Sie die Störquelle."],["Keine Farbe","Ändern Sie die Farbeinstellungen.","Versuchen Sie einen anderen Kanal. Möglicherweise handelt es sich um einen Schwarz-Weiß-Film."],["Die Fernbedienung funktioniert nicht","Tauschen Sie die Batterien aus.","Die Batterien sind nicht richtig eingesetzt. Der Fernseher ist nicht angeschlossen."]];
var contentSpan7_3Array = [["Inhalte des USB-Geräts werden nicht angezeigt","Vergewissern Sie sich, dass das USB-Speichermedium mit dem Fernseher kompatibel ist.","Vergewissern Sie sich, dass Audio- und Bilddateiformate vom Fernseher unterstützt werden."],["Wiedergabe ohne Ton","Das Audioformat des Videos wird nicht durch den Player des Fernsehers unterstützt."],["Dateien werden nicht gleichmäßig abgespielt","Die Übertragungsleistung des USB-Speichermediums beeinträchtigt möglicherweise die Datenübertragungsrate zum Fernseher."]];
var contentSpan7_4Array = [["Worauf muss ich achten, wenn ich Software aktualisiere?","Keinesfalls das Gerät während der Software-Aktualisierung ausschalten.","Jede Steuerung mit der Fernbedienung während der Software-Aktualisierung vermeiden.","Seien Sie während der Software-Aktualisierung geduldig, es kann etwas länger dauern."],["Auf dem Bildschirm sind während der Software-Aktualisierung keine Veränderungen zu sehen.","Unter bestimmten Umständen wird nicht nur Ihre Software aktualisiert oder neue Funktionen werden hinzugefügt, sondern es kann sich auch die Leistung des Fernsehers verbessern, ohne dass Sie Veränderungen auf dem Bildschirm sehen. Das Fernsehbild bleibt auch manchmal stehen."]];
var termsTitle = "Geschäftsbedingungen";
var termsConditions = ["(Rechtlicher Hinweis) von TCL – Hersteller dieses Fernsehers. ","Aufgrund der vielfältigen Funktionen von Produkten mit SmartTV-Diensten und begrenzt verfügbarer Inhalte sind bestimmte Funktionen, Anwendungen oder Dienste nicht mit allen Geräten oder in allen Regionen verfügbar. Einige SmartTV-Funktionen erfordern möglicherweise zusätzliche Peripheriegeräte oder separat zu zahlende Mitgliedsbeiträge. Bitte besuchen Sie unsere Webseite für mehr Informationen über bestimmte Geräte und die Verfügbarkeit von Inhalten. Die Dienste und Verfügbarkeit von SmartTV-Inhalten unterliegen gelegentlichen und nicht vorher angekündigten Änderungen. \n   Alle über dieses Gerät angebotenen Inhalte und Dienste sind Eigentum Dritter und durch Urheberrechte, Patente, Markenzeichen und/oder geistige Eigentumsrechte geschützt. Solche Inhalte und Dienste werden Ihnen nur für private, nicht gewerbliche Zwecke angeboten. Es ist untersagt, Inhalte oder Dienste für Zwecke zu verwenden, die nicht vom Eigentümer oder Anbieter der Inhalte oder Dienste autorisiert wurden. Unbeschadet der Gültigkeit des Vorangehenden ist es ohne ausdrückliche Zustimmung der Eigentümer oder Anbieter der Inhalte oder Dienste nicht erlaubt, über dieses Gerät angebotene Inhalte oder Dienste auf irgendeine Art und Weise oder über ein Medium zu modifizieren, zu kopieren, neu zu veröffentlichen, hochzuladen, ins Internet zu stellen, zu übertragen, zu übersetzen, zu verkaufen, zu verwerten, zu vertreiben oder davon abgeleitete Erzeugnisse zu erstellen. \n   SIE ERKENNEN AUSDRÜCKLICH AN UND STIMMEN ZU, DASS SIE DAS GERÄT AUF EIGENE GEFAHR VERWENDEN UND DASS DAS RISIKO IN BEZUG AUF ZUFRIEDENSTELLENDE QUALITÄT, LEISTUNG UND GENAUIGKEIT VOLLSTÄNDIG BEI IHNEN LIEGT. DAS GERÄT UND ALLE INHALTE UND DIENSTE DRITTER WERDEN „OHNE GARANTIE“ – AUSDRÜCKLICH ODER STILLSCHWEIGEND – ANGEBOTEN. TCL LEHNT AUSDRÜCKLICH ALLE GARANTIEN UND AUFLAGEN, AUSDRÜCKLICH ODER STILLSCHWEIGEND, IN BEZUG AUF DAS GERÄT UND ALLE INHALTE UND DIENSTE AB, EINSCHLIESSLICH, JEDOCH NICHT AUSSCHLIESSLICH DER ZUSICHERUNG ALLGEMEINER GEBRAUCHSTAUGLICHKEIT, ZUFRIEDENSTELLENDER QUALITÄT, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, VON GENAUIGKEIT, GUTER UNTERHALTUNG, UND DER ZUSICHERUNG, DASS KEINE RECHTE DRITTER VERLETZT WERDEN. TCL GARANTIERT NICHT DIE GENAUIGKEIT, GÜLTIGKEIT, PÜNKTLICHKEIT, RECHTMÄSSIGKEIT ODER VOLLSTÄNDIGKEIT VON INHALTEN ODER DIENSTEN, DIE ÜBER DIESES GERÄT ANGEBOTEN WERDEN, UND GARANTIERT NICHT, DASS DAS GERÄT, DIE INHALTE ODER DIENSTE IHREN ANFORDERUNGEN ENTSPRECHEN ODER DASS DER BETRIEB DES GERÄTS ODER DIE DIENSTE UNUNTERBROCHEN UND FEHLERFREI SIND. UNTER KEINEN UMSTÄNDEN, AUCH NICHT BEI FAHRLÄSSIGKEIT, HAFTET TCL WEDER VERTRAGLICH NOCH GESETZLICH FÜR DIREKTE, INDIREKTE, BESONDERE ODER FOLGESCHÄDEN, FÜR ANWALTSKOSTEN ODER AUSGABEN, ODER FÜR ANDERE SCHÄDEN AUFGRUND VON ODER IN VERBINDUNG MIT ENTHALTENEN INFORMATIONEN, DER ANWENDUNG DIESES GERÄTS, ODER DER VON IHNEN ODER DRITTEN IN ANSPRUCH GENOMMENEN INHALTE UND DIENSTE, AUCH WENN SIE AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDEN. \n   Dienste Dritter können jederzeit und ohne Vorankündigung geändert, aufgehoben, entfernt, beendet, unterbrochen oder deren Zugang kann deaktiviert werden. TCL (Hersteller von Fernsehgeräten der Marke Thomson) übernimmt keine Vertretung oder Garantie dafür, dass Inhalte oder Dienste für einen bestimmten Zeitraum zur Verfügung stehen. Inhalte und Dienste werden von Dritten über Netzwerke und Übertragungsstationen übertragen, die außerhalb des Kontrollbereichs von TCL liegen. Unbeschadet der Allgemeingültigkeit dieses Haftungsausschlusses lehnt TCL ausdrücklich jede Verantwortung oder Haftung für Änderungen, Störungen, Deaktivierung, Entfernung oder Aufhebung von Inhalten oder Diensten, die über dieses Gerät angeboten werden, ab. TCL kann jederzeit und ohne Ankündigung oder Haftung Einschränkungen für die Nutzung von oder für den Zugang zu bestimmten Diensten oder Inhalten auferlegen. TCL kann für Kundendienste in Bezug auf die Inhalte und Dienste weder verantwortlich noch haftbar gemacht werden. Fragen oder Anfragen in Bezug auf die Inhalte und Dienste müssen direkt an die jeweiligen Anbieter der Inhalte und Dienste gestellt werden."];
**/

var termsArray = new Array();
var pagePositions = [7,3,3,5,6,5];//¼ÇÂ¼Ã¿Ò»¸ö´óÏîÓÐ¼¸¸ö×ÓÒ³
var pageAvialable = 0;
var position = 0;//¼ÇÂ¼½¹µãÎ»ÖÃ
var page = 0;//¼ÇÂ¼´ÓµÚÒ»Ò³´«À´µÄÒ³Âë²ÎÊý
var backNum = 0;//¼ÇÂ¼´ÓµÚÒ»Ò³´«¹ýÀ´µÄ·µ»Ø²ÎÊý
var eventFlag = 0;

function init()
{
	var href = document.location.href;
	var tempArr1 = href.split("?");
	var tempArr2 = tempArr1[1].split("&");
	page = parseInt(tempArr2[0]);
	backNum = parseInt(tempArr2[1]);
	pageAvialable = pagePositions[page];

/****/
	var bodyList = top.document.getElementsByTagName("body");
	var scriptList = bodyList[0].getElementsByTagName("script");
	var srcvalue = scriptList[0].getAttribute("src");
	if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
	{
		tvImageArrayImgName[0] = "screen-launcher_au.png";
		tvImageArrayImgName[2] = "screen-opera_dump_au.png";
	}
	//  translation/English.js
	var temp1 = srcvalue.split("/");
	var temp2 = temp1[1].split(".");
	var language = temp2[0];
	switch(language)
	{
		case 'French':
		case 'English':
		case 'Danish':
		case 'Finnish':
		case 'German':
		case 'Italian':
		case 'Norwegian':
		case 'Polish':
		case 'Portugal':
		case 'Russian':
		case 'Spanish':
		case 'Swedish':
		for (var i = 0; i < tvImageArrayImgName.length; i++) 
		{
			tvImageArray[i] = "../images/emanual/tvImage/"+language+"/"+tvImageArrayImgName[i];
		};
		break;
		default:
		for (var i = 0; i < tvImageArrayImgName.length; i++)
		{
			tvImageArray[i] = "../images/emanual/tvImage/English/"+tvImageArrayImgName[i];
		};
		break;
	}

	if (termsConditions.length > 1) 
	{
		termsArray = termsConditions[1].split("\n");
	}
	else
	{
		termsArray = termsConditions[0].split("\n");
	}
	initData();
	addMouseListener();
}

function initData()
{
	initContentDiv();
	
	if (pageAvialable == 3) 
	{
		$("plateDiv4").style.display = "none";
	}
	
	$("titleSpan").innerHTML = titleSpanFirstArray[page];
	$("titleImg").src = titleImgArray[page];
	$("contentDiv"+(page+1)+"-"+(position+1)).style.visibility = "visible";

}

function initContentDiv()
{
	
	switch(page)
	{
		case 0:
		{
			/**
			 Connection Control
			**/
			for(var i=0;i<7;i++)
			{
				$("contentSpan1-"+(i+1)+"Title").innerHTML = titleSpanSecondArray[0][i];
			}

			if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
			{
				for(var i=0;i<8;i++)
				{
					$("contentSpan1-1-"+(i+1)).innerHTML = contentSpan1_1Array_AU[0][i]+ " "+contentSpan1_1Array_AU[1][i];
				}
			}
			else
			{
				for(var i=0;i<7;i++)
				{
					$("contentSpan1-1-"+(i+1)).innerHTML = contentSpan1_1Array[0][i]+ " "+contentSpan1_1Array[1][i];
				}
			}

			for(var i=0;i<7;i++)
			{
				$("contentSpan1-2-"+(i+1)).innerHTML = contentSpan1_2Array[i];
			}

			for(var i=0;i<5;i++)
			{
				$("contentSpan1-3-"+(i+1)).innerHTML = contentSpan1_3Array[i];
			}
			$("contentSpan1-3-6").innerHTML = "* "+ contentSpan1_3Array[5];

			for(var i=0;i<10;i++)
			{
				$("contentSpan1-4-"+(i+1)).innerHTML = contentSpan1_4Array[i];
			}
			$("contentSpan1-4-11").innerHTML = "* "+contentSpan1_4Array[10];

			for(var i=0;i<13;i++)
			{
				$("contentSpan1-5-"+(i+1)).innerHTML = contentSpan1_5Array[i];
			}
			$("contentSpan1-5-14").innerHTML = "* "+contentSpan1_5Array[13];

			for(var i=0;i<11;i++)
			{
				$("contentSpan1-6-"+(i+1)).innerHTML = contentSpan1_6Array[i];
			}
			$("contentSpan1-6-12").innerHTML = "* "+contentSpan1_6Array[11];
            
            
            for(var i=0;i<5;i++)
			{
				$("contentSpan1-7-"+(i+1)).innerHTML = contentSpan1_7Array[i];
			}

			$("contentDiv1-1Img").src = "../images/emanual/remoteControl.png";
			if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
			{
				$("contentDiv1-1Img").src = "../images/emanual/remoteControl_AU.png";
				$("contentSpan1-1-1").style.top = 143+"px";
				$("contentSpan1-1-2").style.top = 262+"px";
				$("contentSpan1-1-3").style.top = 384+"px";

				$("contentSpan1-1-4").style.top = 479+"px";
				$("contentSpan1-1-4").style.left = 15+"px";
				$("contentSpan1-1-4").style.width = 430+"px";

				$("contentSpan1-1-5").style.top = 306+"px";
				$("contentSpan1-1-5").style.left = 729+"px";

				$("contentSpan1-1-6").style.top = 382+"px";
				$("contentSpan1-1-6").style.left = 729+"px"
				;
				$("contentSpan1-1-7").style.top = 480+"px";
				$("contentSpan1-1-7").style.left = 729+"px";
			}
			$("contentDiv1-2Img").src = "../images/emanual/panel_keys.png";
			$("contentDiv1-3Img").src = "../images/emanual/TV_control.png";
			$("contentDiv1-4Img").src = "../images/emanual/TV_connections1.png";
			$("contentDiv1-5Img").src = "../images/emanual/TV_connections2.png";
			$("contentDiv1-6Img").src = "../images/emanual/TV_connections3.png";
            $("contentDiv1-7Img").src = "../images/emanual/wireless.png";
		}
		break;
		case 1:
		{
			/**
			Basic
			*/
			for(var i=0;i<3;i++)
			{
				$("contentSpan2-"+(i+1)+"Title").innerHTML = titleSpanSecondArray[1][i];
			}
			
			$("contentSpan2-1-1").innerHTML = contentSpan2Array[0][0];
			$("contentSpan2-1-2").innerHTML = contentSpan2Array[0][1];
			$("contentSpan2-2-1").innerHTML = contentSpan2Array[1][0];
			$("contentSpan2-3-1").innerHTML = contentSpan2Array[2][0];
			//$("contentSpan2-4-1").innerHTML = contentSpan2Array[3][0];

			$("contentDiv2-1-1Img").src = "../images/emanual/TV.png";
			$("contentDiv2-1-2Img").src = tvImageArray[0];
			$("contentDiv2-1-3Img").src = "../images/emanual/point.png";
			$("contentDiv2-1-4Img").src = "../images/emanual/point.png";

			$("contentDiv2-2-1Img").src = "../images/emanual/TV.png";
			$("contentDiv2-2-2Img").src = tvImageArray[0];
			$("contentDiv2-2-3Img").src = "../images/emanual/point.png";

			$("contentDiv2-3-1Img").src = "../images/emanual/TV.png";
			$("contentDiv2-3-2Img").src = tvImageArray[1];
			$("contentDiv2-3-3Img").src = "../images/emanual/point.png";

		}
		break;
		case 2:
		{
			/**
			APPS
			**/
			for(var i=0;i<3;i++)
			{
				$("contentSpan3-"+(i+1)+"Title").innerHTML = titleSpanSecondArray[2][i];
			}
			$("contentSpan3-1-1").innerHTML = contentSpan3Array[0];
			$("contentSpan3-2-1").innerHTML = contentSpan3Array[1];
			$("contentSpan3-3-1").innerHTML = contentSpan3Array[2];
			$("contentSpan3-3-2").innerHTML = contentSpan3Array[3];
			$("contentSpan3-3-3").innerHTML = contentSpan3Array[4];

			$("contentDiv3-1-1Img").src = "../images/emanual/TV.png";
			$("contentDiv3-1-2Img").src = tvImageArray[2];
			$("contentDiv3-1-3Img").src = "../images/emanual/point.png";

			$("contentDiv3-2-1Img").src = "../images/emanual/TV.png";
			$("contentDiv3-2-2Img").src = tvImageArray[3];
			$("contentDiv3-2-3Img").src = "../images/emanual/point.png";

			$("contentDiv3-3-1Img").src = "../images/emanual/TV.png";
			$("contentDiv3-3-2Img").src = tvImageArray[4];
			$("contentDiv3-3-3Img").src = "../images/emanual/point.png";
			$("contentDiv3-3-4Img").src = "../images/emanual/point.png";
			$("contentDiv3-3-5Img").src = "../images/emanual/point.png";
		}
		break;
		case 3:
		{
			/***
			 TV
			*/
			for(var i=0;i<5;i++)
			{
				$("contentSpan4-"+(i+1)+"Title").innerHTML = titleSpanSecondArray[3][i];
			}
			
			$("contentSpan4-1-1").innerHTML = contentSpan4Array[0][0];
			$("contentSpan4-1-2").innerHTML = contentSpan4Array[0][1];
			
			$("contentSpan4-2-1").innerHTML = contentSpan4Array[1][0];
			$("contentSpan4-2-2").innerHTML = contentSpan4Array[1][1];
			
			$("contentSpan4-3-1").innerHTML = contentSpan4Array[2][0];
			
			$("contentSpan4-4-1").innerHTML = contentSpan4Array[3][0];
			
			$("contentSpan4-5-1").innerHTML = contentSpan4Array[4][0];

			$("contentDiv4-1-1Img").src = "../images/emanual/TV.png";
			$("contentDiv4-1-2Img").src = tvImageArray[5];
			$("contentDiv4-1-3Img").src = "../images/emanual/point.png";
			$("contentDiv4-1-4Img").src = "../images/emanual/point.png";

			$("contentDiv4-2-1Img").src = "../images/emanual/TV.png";
			$("contentDiv4-2-2Img").src = tvImageArray[6];
			$("contentDiv4-2-3Img").src = "../images/emanual/point.png";
			$("contentDiv4-2-4Img").src = "../images/emanual/point.png";

			$("contentDiv4-3-1Img").src = "../images/emanual/TV.png";
			$("contentDiv4-3-2Img").src = tvImageArray[7];
			$("contentDiv4-3-3Img").src = "../images/emanual/point.png";

			$("contentDiv4-4-1Img").src = "../images/emanual/TV.png";
			$("contentDiv4-4-2Img").src = tvImageArray[8];
			$("contentDiv4-4-3Img").src = "../images/emanual/point.png";

			$("contentDiv4-5-1Img").src = "../images/emanual/TV.png";
			$("contentDiv4-5-2Img").src = tvImageArray[9];
			$("contentDiv4-5-3Img").src = "../images/emanual/point.png";
		}
		break;
		case 4:
		{
			/**
				setting
			*/
			for(var i=0;i<6;i++)
			{
				$("contentSpan5-"+(i+1)+"Title").innerHTML = titleSpanSecondArray[4][i];
			}
			
			/****/
			$("contentSpan5-1-1").innerHTML = contentSpan6Array[0][0];
			$("contentSpan5-1-2").innerHTML = contentSpan6Array[0][1];
			
			$("contentSpan5-2-1").innerHTML = contentSpan6Array[1][0];
			$("contentSpan5-2-2").innerHTML = contentSpan6Array[1][1];
			
			$("contentSpan5-3-1").innerHTML = contentSpan6Array[2][0];
			$("contentSpan5-3-2").innerHTML = contentSpan6Array[2][1];
			
			$("contentSpan5-4-1").innerHTML = contentSpan6Array[3][0];
			
			$("contentSpan5-5-1").innerHTML = contentSpan6Array[4][0];
			
			$("contentSpan5-6-1").innerHTML = contentSpan6Array[5][0];

			$("contentDiv5-1-1Img").src = "../images/emanual/TV.png";
			$("contentDiv5-1-2Img").src = tvImageArray[10];
			$("contentDiv5-1-3Img").src = "../images/emanual/point.png";
			$("contentDiv5-1-4Img").src = "../images/emanual/point.png";

			$("contentDiv5-2-1Img").src = "../images/emanual/TV.png";
			$("contentDiv5-2-2Img").src = tvImageArray[11];
			$("contentDiv5-2-3Img").src = "../images/emanual/point.png";
			$("contentDiv5-2-4Img").src = "../images/emanual/point.png";

			$("contentDiv5-3-1Img").src = "../images/emanual/TV.png";
			$("contentDiv5-3-2Img").src = tvImageArray[12];
			$("contentDiv5-3-3Img").src = "../images/emanual/point.png";
			$("contentDiv5-3-4Img").src = "../images/emanual/point.png";

			$("contentDiv5-4-1Img").src = "../images/emanual/TV.png";
			$("contentDiv5-4-2Img").src = tvImageArray[13];
			$("contentDiv5-4-3Img").src = "../images/emanual/point.png";

			$("contentDiv5-5-1Img").src = "../images/emanual/TV.png";
			$("contentDiv5-5-2Img").src = tvImageArray[14];
			$("contentDiv5-5-3Img").src = "../images/emanual/point.png";

			$("contentDiv5-6-1Img").src = "../images/emanual/TV.png";
			$("contentDiv5-6-2Img").src = tvImageArray[15];
			$("contentDiv5-6-3Img").src = "../images/emanual/point.png";
		}
		break;
		case 5:
		{
			/**
			FAQ
			*/
			
			$("contentSpan6-1Title").innerHTML = titleSpanSecondArray[5][0];
			$("contentSpan6-2Title").innerHTML = titleSpanSecondArray[5][0];
			$("contentSpan6-3Title").innerHTML = titleSpanSecondArray[5][0];
			$("contentSpan6-4Title").innerHTML = titleSpanSecondArray[5][2];
			$("contentSpan6-5Title").innerHTML = titleSpanSecondArray[5][2];
			$("contentSpan6-6Title").innerHTML = titleSpanSecondArray[5][2];
			$("contentSpan6-7Title").innerHTML = titleSpanSecondArray[5][4];
			
			$("contentSpan6-1-1").innerHTML = contentSpan7_1Array[0][0];
			for(var i=0;i<4;i++)
			{
				$("contentSpan6-1-1-"+(i+1)).innerHTML = contentSpan7_1Array[0][i+1];
			}
			
			$("contentSpan6-1-2").innerHTML = contentSpan7_1Array[1][0];
			for(var i=0;i<3;i++)
			{
				$("contentSpan6-1-2-"+(i+1)).innerHTML = contentSpan7_1Array[1][i+1];
			}
			
			$("contentSpan6-2-1").innerHTML = contentSpan7_1Array[2][0];
			for(var i=0;i<3;i++)
			{
				$("contentSpan6-2-1-"+(i+1)).innerHTML = contentSpan7_1Array[2][i+1];
			}
			$("contentSpan6-2-2").innerHTML = contentSpan7_2Array[0][0];
			$("contentSpan6-2-2-1").innerHTML = contentSpan7_2Array[0][1];
			
			$("contentSpan6-3-1").innerHTML = contentSpan7_2Array[1][0];
			$("contentSpan6-3-1-1").innerHTML = contentSpan7_2Array[1][1];
			$("contentSpan6-3-1-2").innerHTML = contentSpan7_2Array[1][2];
			
			$("contentSpan6-3-2").innerHTML = contentSpan7_2Array[2][0];
			$("contentSpan6-3-2-1").innerHTML = contentSpan7_2Array[2][1];
			$("contentSpan6-3-2-2").innerHTML = contentSpan7_2Array[2][2];
			
			$("contentSpan6-4-1").innerHTML = contentSpan7_3Array[0][0];
			$("contentSpan6-4-1-1").innerHTML = contentSpan7_3Array[0][1];
			$("contentSpan6-4-1-2").innerHTML = contentSpan7_3Array[0][2];
			
			$("contentSpan6-4-2").innerHTML = contentSpan7_3Array[1][0];
			$("contentSpan6-4-2-1").innerHTML = contentSpan7_3Array[1][1];
			
			$("contentSpan6-5-1").innerHTML = contentSpan7_3Array[2][0];
			$("contentSpan6-5-1-1").innerHTML = contentSpan7_3Array[2][1];
			
			$("contentSpan6-5-2").innerHTML = contentSpan7_4Array[0][0];
			for(var i=0;i<3;i++)
			{
				$("contentSpan6-5-2-"+(i+1)).innerHTML = contentSpan7_4Array[0][i+1];
			}
			
			$("contentSpan6-6-1").innerHTML = contentSpan7_4Array[1][0];
			$("contentSpan6-6-1-1").innerHTML = contentSpan7_4Array[1][1];

			$("contentDiv6-1-1Img").src = "../images/emanual/FAQ_1.png";
			$("contentDiv6-1-2Img").src = "../images/emanual/FAQ_2.png";
			
			for(var i=0;i<7;i++)
			{
				$("contentDiv6-1-"+(i+4)+"Img").src = "../images/emanual/point.png";
			}

			$("contentDiv6-2-1Img").src = "../images/emanual/FAQ_3.png";
			$("contentDiv6-2-2Img").src = "../images/emanual/FAQ_4.png";
			for(var i=0;i<4;i++)
			{
				$("contentDiv6-2-"+(i+3)+"Img").src = "../images/emanual/point.png";
			}

			$("contentDiv6-3-1Img").src = "../images/emanual/FAQ_5.png";
			$("contentDiv6-3-2Img").src = "../images/emanual/FAQ_6.png";
			for(var i=0;i<4;i++)
			{
				$("contentDiv6-3-"+(i+3)+"Img").src = "../images/emanual/point.png";
			}

			$("contentDiv6-4-1Img").src = "../images/emanual/FAQ_7.png";
			$("contentDiv6-4-2Img").src = "../images/emanual/FAQ_8.png";
			for(var i=0;i<3;i++)
			{
				$("contentDiv6-4-"+(i+3)+"Img").src = "../images/emanual/point.png";
			}

			$("contentDiv6-5-1Img").src = "../images/emanual/FAQ_9.png";
			$("contentDiv6-5-2Img").src = "../images/emanual/FAQ_10.png";
			for(var i=0;i<4;i++)
			{
				$("contentDiv6-5-"+(i+3)+"Img").src = "../images/emanual/point.png";
			}


			$("contentDiv6-6-1Img").src = "../images/emanual/FAQ_11.png";
			$("contentDiv6-6-2Img").src = "../images/emanual/point.png";
			
			initTerms();


		}
		break;
		default:
		break;
	}	
}

function initTerms()
{
	var termsSpan;
	if (termsConditions.length > 1) {
		termsSpan = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+termsConditions[0]+termsArray[0]
					+"<br>&nbsp;&nbsp;&nbsp;"+termsArray[1]
					+"<br>&nbsp;&nbsp;&nbsp;"+termsArray[2]
					+"<br>&nbsp;&nbsp;&nbsp;"+termsArray[3];
	}
	else
	{
		termsSpan = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+termsArray[0];
		for (var i = 1; i < termsArray.length; i++) {
			if(i==1 || i==4 || i==8 || i==12 || i==14 || i==16)
			{
				termsSpan = termsSpan+"<br><br>&nbsp;&nbsp;&nbsp;"+termsArray[i];
			}
			else
			{
				termsSpan = termsSpan+"<br>&nbsp;&nbsp;&nbsp;"+termsArray[i];
			}
			
		};
	}
	
	$("contentSpan6-7Title").innerHTML = termsTitle;
	$("contentSpan6-7").innerHTML = termsSpan;

	var termRow = Math.ceil(($("contentSpan6-7").scrollHeight)/30); //37
	var termPage = Math.ceil(termRow/17);

	pagePositions[5] = 6 + termPage;
	pageAvialable = pagePositions[page];

	if (termPage > 1) 
	{
		for (var i = 0; i < (termPage - 1); i++) {
			var divNew1 = document.createElement("div");
			divNew1.setAttribute("class", "contentDiv");
			divNew1.setAttribute("id", "contentDiv6-" + (8 + i));

			var divNew2 = document.createElement("div");
			divNew2.setAttribute("class", "termsDiv");
			
			var span1 = document.createElement("span");
			span1.setAttribute("class", "contentSpanTitle");
			span1.setAttribute("id", "contentSpan6-"+(8 + i)+"Title");

			var span2 = document.createElement("span");
			span2.setAttribute("class", "contentSpanTerms");
			span2.setAttribute("id", "contentSpan6-"+(8 + i));

			divNew2.appendChild(span2);
			divNew1.appendChild(span1);
			divNew1.appendChild(divNew2);

			$("contentsDiv").appendChild(divNew1);
		}

		for (var i = 0; i < (termPage - 1); i++) 
		{
			$("contentSpan6-"+(8 + i)+"Title").innerText = termsTitle;
			$("contentSpan6-"+(8 + i)).innerHTML = termsSpan;
			$("contentSpan6-"+(8 + i)).style.top = -510*(i+1)+"px";
		}
	}
}

document.onkeydown = keyprocTV;
function keyprocPC(evt)
{
	var keycode = evt.which;
	switch (keycode)
	{
		case 37://left
		toLeft();
		break;
		case 38://up
		break;
		case 39://right
		toRight();
		break;
		case 40://down
		toOK();
		break;
		case 27://Esc
		toBack();
		break;
	}
}

function keyprocTV(evt)
{
	var keycode = evt.which;
	top.g_channel.testLog("in eManualSecond");
	switch (keycode)
	{
		case top.VK_UP:
		
		break;
		case top.VK_DOWN:
		
		break;
		case top.VK_LEFT:
		toLeft();
		break;
		case top.VK_RIGHT:
		toRight();
		break;
		case top.VK_BACK:
		toBack();
		break;
		case top.VK_EXIT:
        case top.VK_MENU:
		toExit();
		break;
		case top.VK_POWER:
		top.keyDownProcess(evt);
		break;
	}
}

function toExit()
{
	setting.sendMsgToDBC(4);
	top.focusToIndexHtml(1);
	top.restartTimeout();
}

function toBack()
{
	document.location.href="eManualFirst.html?"+backNum+"&"+page;
}

function toRight()
{
	
	if(position < (pageAvialable-1))
	{
		$("plateDiv1").className = "plateDiv1FadeOutTemp";
   		position ++;

   		$("contentDiv"+(page+1)+"-"+(position+0)).style.visibility = "visible";
		$("contentDiv"+(page+1)+"-"+(position+1)).style.visibility = "hidden";
		for (var i = 1; i < position; i++) {
			$("contentDiv"+(page+1)+"-"+i).style.visibility = "hidden";
		};
		$("plateDivPagenum1").innerHTML = position+0;

		setTimeout(function (){
			plateDiv1FadeOutAnimation(position);
		},10);
		
	}
	else if(position == (pageAvialable-1))
	{
		$("plateDiv1").className = "plateDiv1ShakeRightTemp";
		setTimeout(function (){
			$("plateDiv1").className = "plateDiv1ShakeRight";
		},10);
		
	}
	
}


function plateDiv1FadeOutAnimation(position)
{
	//µÚÒ»Ò³×óÒÆÏûÊ§
	$("plateDiv1").className = "plateDiv1FadeOut";
	$("plateDiv1").addEventListener('webkitAnimationEnd', handleTransitionEndToRight,false);
	
}
/****/
var handleTransitionEndToRight = function (){
	$("plateDiv1").removeEventListener('webkitAnimationEnd',handleTransitionEndToRight,false);
	eventFlag = 0;
	$("contentDiv"+(page+1)+"-"+(position+0)).style.visibility = "hidden";
	$("contentDiv"+(page+1)+"-"+(position+1)).style.visibility = "visible";
	$("plateDivPagenum1").innerHTML = position+1;

	for (var i = 1; i < position; i++) {
		$("contentDiv"+(page+1)+"-"+i).style.visibility = "hidden";
	};
	
	if(position == (pageAvialable-3))
	{
		$("plateDivPagenum2").innerHTML = (position+2);
		$("plateDivPagenum3").innerHTML = (position+3);
		$("plateDiv4").style.visibility = "hidden";

	}
	else if(position == (pageAvialable-2))
	{

		$("plateDivPagenum2").innerHTML = (position+2);
		$("plateDiv3").style.visibility = "hidden";
		$("plateDiv4").style.visibility = "hidden";
	}
	else if(position == (pageAvialable-1))
	{
		$("plateDiv2").style.visibility = "hidden";
		$("plateDiv3").style.visibility = "hidden";
		$("plateDiv4").style.visibility = "hidden";
		$("rightArrowDiv").style.display = "none";
	}
	else if(position < (pageAvialable-3))
	{
		$("plateDivPagenum2").innerHTML = (position+2);
		$("plateDivPagenum3").innerHTML = (position+3);
		$("plateDivPagenum4").innerHTML = (position+4);	
	}

	$("plateDiv1").className = "plateDiv1FadeIn";
};


function toLeft()
{
	
	if(position > 0)
	{
		plateDiv1FadeInAnimation(position);
		
	}
	if(position == 1)
	{
		$("leftArrowDiv").style.display = "none";
	}
	if(position == 0)
	{
		$("plateDiv1").className = "plateDiv1ShakeLeftTemp";
		setTimeout(function(){
		$("plateDiv1").className = "plateDiv1ShakeLeft";
		},10);
	}
	else if(position == (pageAvialable-3))
	{
		setTimeout(function(){
			$("plateDivPagenum1").innerHTML = (position + 1);
				$("plateDivPagenum2").innerHTML = (position + 2);
				$("plateDivPagenum3").innerHTML = (position + 3);
				$("plateDivPagenum4").innerHTML = (position + 4);
				$("plateDiv4").style.visibility = "visible";
		},400);
		position--;
	}
	else if(position == (pageAvialable-2))
	{
		setTimeout(function(){
			$("plateDivPagenum2").innerHTML = (position + 2);
			$("plateDivPagenum3").innerHTML = (position + 3);
			$("plateDiv3").style.visibility = "visible";
		},400);
		position--;
	}
	else if(position == (pageAvialable-1))
	{
		setTimeout(function(){
				$("plateDivPagenum2").innerHTML = (position + 2);
				$("plateDiv2").style.visibility = "visible";
			},400);
		position--;
	}
	else if(position < (pageAvialable-3) & position > 0)
	{
		$("plateDivPagenum1").innerHTML = (position + 0);
		$("plateDivPagenum2").innerHTML = (position + 1);
		$("plateDivPagenum3").innerHTML = (position + 2);
		$("plateDivPagenum4").innerHTML = (position + 3);
		position--;
	}
	
}

function plateDiv1FadeInAnimation(position)
{
	$("plateDiv1").className = "plateDiv1TranslateTemp";
	//µÚÒ»Ò³´Ó×óÒÆµ½ÖÐ¼ätranslate
	/**
	$("plateDiv1").addEventListener('webkitAnimationEnd', function () {
           $("plateDiv1").className = "plateDiv1TranslateR";
			$("plateDivPagenum1").innerHTML = position;
			$("contentDiv"+(page+1)+"-"+(position+1)).style.visibility = "hidden";
			$("contentDiv"+(page+1)+"-"+position).style.visibility = "visible";
        },false);
	**/
	setTimeout(function(){
		$("plateDiv1").className = "plateDiv1TranslateR";
		$("plateDivPagenum1").innerHTML = position;
		$("contentDiv"+(page+1)+"-"+(position+1)).style.visibility = "hidden";
		$("contentDiv"+(page+1)+"-"+position).style.visibility = "visible";
	},10);
	
}

function $(id)
{
    return document.getElementById(id);
}

function addMouseListener()
{
	//document.body.onmousedown = function(evt){
	//	evt.preventDefault();
	//	if(evt.button == 2) toBack();//right key
	//}

	var bodyList = document.getElementsByTagName("body");
	bodyList[0].onmousedown = function(evt){
        evt.preventDefault();
        if(evt.button == 2)//right key
        {
            toBack();
        }

		if (position == 0) 
		{
			$("leftArrowDiv").style.display = "none";
		}
		else
		{
			$("leftArrowDiv").style.display = "block";
		}
		if (position == (pageAvialable -1)) 
		{
			$("rightArrowDiv").style.display = "none";
		}
		else
		{
			$("rightArrowDiv").style.display = "block";
		}
		
	}

	$("leftArrowDiv").onmousedown = function(evt){
			if(evt.button == 0){//left key
				$("leftArrow").src = "../images/emanual/arrow LF.png";
				toLeft();
				setTimeout(function(){
					$("leftArrow").src = "../images/emanual/arrow LN.png";
				},200);
			}
	}

	$("rightArrowDiv").onmousedown = function(evt){
			if(evt.button == 0){//left key
				$("rightArrow").src = "../images/emanual/arrow RF.png";
				toRight();
				setTimeout(function(){
					$("rightArrow").src = "../images/emanual/arrow RN.png";
				},200);
			}
	}
	
}
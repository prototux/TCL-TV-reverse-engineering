var appFavAndAllList =
[//UK
	{
		"name": "Photolicious",
		"browser":"opera.common",
		"url":"-u http://1067564395.a.fxmconnect.com/?app=photolicious",
		"icon": "images/home-page-APP/icon_photolicious.png"
	},
	{
		"name": "Toon Goggles",
		"browser":"opera.common",
		"url":"-u http://1067564395.a.fxmconnect.com/?app=toongoggles",
		"icon": "images/home-page-APP/icon_Toon_Goggles.png"
	}
];
var adlist = 
	{
		"name": "TCL APP Store",
		"browser":"opera.common",
		"url": "-u http://3673116133.fxm6263467844.com/",
		"icon": "images/App_AD_2.png"
	};
var applist = 
[//UK
	{
		"name": "NETFLIX",
		"browser":"vod.netflix",
		"url": "0xF042",
		"icon": "images/home-page-APP/icon_netflix_au.png"
	},
	{
		"name": "YouTube",
		"browser":"opera.youtube_au",
		"url": "-u https://www.youtube.com/tv?launch=menu&additionalDataUrl=http%3a%2f%2flocalhost%3a56789%2fapps%2fYouTube%2fdial_data ",
		"icon": "images/home-page-APP/icon_youtube.png"
	},
	{
		"name": "SBS on demand",
		"browser":"opera.sbs_au",
		"url": "-u http://118.194.161.101:5556/sbs/indexTcl.html",
		"icon": "images/home-page-APP/icon_sbs-on-demad.png"
	},
	{
		"name": "GOLIVE",
		"browser":"opera.golive_au",
		"url": "-u http://tv.gole.tv/?clientType=TCL-NT667",
		"icon": "images/home-page-APP/icon_golive2.0.png"
	},
	{
		"name": "Dailymotion",
		"browser":"opera.common",
		"url":"-u http://1067564395.a.fxmconnect.com?app=dailymotion",
		"icon": "images/home-page-APP/icon_dailymotion.png"
	},
	{
		"name": "Cinetrailer",
		"browser":"opera.common",
		"url":"-u http://1067564395.a.fxmconnect.com?app=cinetrailer",
		"icon": "images/home-page-APP/icon_cinetrailer.png"
	},
	{
		"name": "Deezer",
		"browser":"opera.common",
		"url":"-u http://1067564395.a.fxmconnect.com?app=deezer",
		"icon": "images/home-page-APP/icon_deezer.png"
	},
	{
		"name": "iConcerts",
		"browser":"opera.common",
		"url":"-u http://1067564395.a.fxmconnect.com?app=iconcerts",
		"icon": "images/home-page-APP/icon_iconcerts.png"
	},
	{
		"name": "Howdini",
		"browser":"opera.common",
		"url":"-u http://1067564395.a.fxmconnect.com?app=howdini",
		"icon": "images/home-page-APP/icon_Howdini.png"
	},
	{
		"name": "The Sailing Channel",
		"browser":"opera.common",
		"url": "-u http://1067564395.a.fxmconnect.com?app=sailingchannel",
		"icon": "images/home-page-APP/icon_sailing.png"
	},
	{
		"name": "Viewster",
		"browser":"opera.common",
		"url": "-u http://1067564395.a.fxmconnect.com?app=viewster",
		"icon": "images/home-page-APP/icon_viewster.png"
	},
	{
		"name": "Weather Nation",
		"browser":"opera.common",
		"url": "-u http://1067564395.a.fxmconnect.com?app=weather",
		"icon": "images/home-page-APP/icon_weathernation.png"
	}
];

var picImgFlag          = ["/applications/webkit-resource/ui/images/home-page-APP/dot-02.png",
							"/applications/webkit-resource/ui/images/home-page-APP/dot-01.png"];//[dot-02]long [dot-01]short 
var appLittleWindowNames = "";
var currentImgFag       = 0;
var picBigWindShowTimer = 0;
var URL_NAME			= "http://s3.tcllauncher.com/html5/foxxum/config.xml";
var URL_NAME_BASE		= "http://s3.tcllauncher.com/html5/foxxum/";
var MIDDLE_APP_MENU_TOP 		= 260;					//middle菜单焦点移动起始位置
var MIDDLE_APP_MENU_LEFT 		= 270;					//middle菜单焦点移动的step
var LITTLE_APP_MENU_TOP 		= 205;					//LITTLE菜单焦点移动起始位置
var LITTLE_APP_MENU_LEFT 		= 308;					//LITTLE菜单焦点移动的step

var middlePositionV             = 0;                    //节目列表焦点水平位移
var middlePositionH             = 0;                    //节目列表焦点垂直位移
var littlePositionV             = 0;                    //设置列表焦点水平位移
var littlePositionH             = 0;                    //设置列表焦点垂直位移
var PosInvalid 					= 0xffff;               //一个坐标的无效值
var xmlDoc						= null;                 //用来存放要解析的XML的内容
var setting                     = top.g_setting;
document.onnotify = notifyProcess;
document.onkeydown = keyProc;

var START_NETFLIX_BY_ICON       = 0xF042;
function $(id)
{
    return document.getElementById(id);
}

function testLog(str)
{
	console.log("    ===========> daheng: " + str);
}

function init()
{
	picBigWindShowTimer = 0;
	currentImgFag = 0;
	addMouseListener();
	if(top.checkNetStatus())
	{
		loadXMLDoc(URL_NAME);
	}
	showAppList();
}

function uninit()
{
	parent.uninit();
}

function notifyProcess(evt)
{
	parent.notifyProcess(evt);
}

function keyProc(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch(keycode)
	{
		case top.VK_LEFT:
			if(!parent.checkDirectionKey(evt))
			{
				toLeft();
			}
			break;
		case top.VK_RIGHT:
			if(!parent.checkDirectionKey(evt))
			{
				toRight();
			}
			break;
		case top.VK_UP:
			if(!parent.checkDirectionKey(evt))
			{
				toUp();
			}
			break;
		case top.VK_DOWN:
			if(!parent.checkDirectionKey(evt))
			{
				toDown();
			}
			break;
		case top.VK_ENTER:
			if(!parent.checkDirectionKey(evt))
			{
				toOk();
			}
			break;
		case top.VK_BACK:
			toBack();
			break;
		default:
			parent.keyProc(evt);
			break;
	}
}

function toLeft()
{
	if(parent.focusType == parent.FOCUS_APP_BIG_WINDOW)
	{
		parent.preFocusIframe = parent.currentFocusIframe;
		parent.currentFocusIframe = parent.FOCUS_IP_TV;
		parent.setIndexFocusPage(parent.currentFocusIframe);
	}
	else if(parent.focusType == parent.FOCUS_APP_MIDDLE_WINDOW)
	{
		if(middlePositionV == 0)
		{
			if(middlePositionH == 0)
			{
				$("appMiddleWindowFocus").style.display = 'none';
				$("appBigWindowFocus").style.display = 'block';
				parent.focusType = parent.FOCUS_APP_BIG_WINDOW;
			}
			else 
			{
				littlePositionV = 1;
				$("appMiddleWindowFocus").style.display = 'none';
				$("appLittleWindowFocus").style.left = littlePositionV * LITTLE_APP_MENU_LEFT + "px";
				$("appLittleWindowFocus").style.display = 'block';
				parent.focusType = parent.FOCUS_APP_LITTLE_WINDOW;
			}
		}
		else
		{
			middlePositionV--;
			$("appMiddleWindowFocus").style.left = middlePositionV * MIDDLE_APP_MENU_LEFT + "px";
		}
	}
	else if(parent.focusType == parent.FOCUS_APP_LITTLE_WINDOW)
	{
		if(littlePositionV == 0)
		{
			parent.preFocusIframe = parent.currentFocusIframe;
			parent.currentFocusIframe = parent.FOCUS_IP_TV;
			parent.setIndexFocusPage(parent.currentFocusIframe);
		}
		else
		{
			littlePositionV--;
			$("appLittleWindowFocus").style.left = littlePositionV * LITTLE_APP_MENU_LEFT + "px";
		}
	}
}

function toRight()
{
	if(parent.focusType == parent.FOCUS_APP_BIG_WINDOW)
	{
		middlePositionV = 0;
		middlePositionH = 0;
		$("appBigWindowFocus").style.display = 'none';
		$("appMiddleWindowFocus").style.top  = middlePositionH * MIDDLE_APP_MENU_TOP + "px";
		$("appMiddleWindowFocus").style.left = middlePositionV * MIDDLE_APP_MENU_LEFT + "px";
		$("appMiddleWindowFocus").style.display = 'block';
		parent.focusType = parent.FOCUS_APP_MIDDLE_WINDOW;
	}
	else if(parent.focusType == parent.FOCUS_APP_MIDDLE_WINDOW)
	{
		if(middlePositionV == 3)
		{
			parent.preFocusIframe = parent.currentFocusIframe;
			parent.currentFocusIframe = parent.FOCUS_IP_TV;
			parent.setIndexFocusPage(parent.currentFocusIframe);
		}
		else
		{
			middlePositionV++;
			$("appMiddleWindowFocus").style.left = middlePositionV * MIDDLE_APP_MENU_LEFT + "px";
		}
	}
	else if(parent.focusType == parent.FOCUS_APP_LITTLE_WINDOW)
	{
		if(littlePositionV == 1)
		{
			middlePositionV = 0;
			middlePositionH = 2;
			$("appLittleWindowFocus").style.display = 'none';
			$("appMiddleWindowFocus").style.top  = middlePositionH * MIDDLE_APP_MENU_TOP + "px";
			$("appMiddleWindowFocus").style.left = middlePositionV * MIDDLE_APP_MENU_LEFT + "px";
			$("appMiddleWindowFocus").style.display = 'block';
			parent.focusType = parent.FOCUS_APP_MIDDLE_WINDOW;
		}
		else
		{
			littlePositionV++;
			$("appLittleWindowFocus").style.left = littlePositionV * LITTLE_APP_MENU_LEFT + "px";
		}
	}
}

function toUp()
{
	if(parent.focusType == parent.FOCUS_APP_BIG_WINDOW)
	{
		parent.preFocusIframe = parent.currentFocusIframe;
		parent.currentFocusIframe = parent.FOCUS_IP_TITLE;
		parent.setIndexFocusPage(parent.currentFocusIframe);
	}
	else if(parent.focusType == parent.FOCUS_APP_MIDDLE_WINDOW)
	{
		if(middlePositionH == 0)
		{
			parent.preFocusIframe = parent.currentFocusIframe;
			parent.currentFocusIframe = parent.FOCUS_IP_TITLE;
			parent.setIndexFocusPage(parent.currentFocusIframe);
		}
		else
		{
			middlePositionH--;
			$("appMiddleWindowFocus").style.top = middlePositionH * MIDDLE_APP_MENU_TOP + "px";
		}
	}
	else if(parent.focusType == parent.FOCUS_APP_LITTLE_WINDOW)
	{
		$("appLittleWindowFocus").style.display = 'none';
		$("appBigWindowFocus").style.display = 'block';
		parent.focusType = parent.FOCUS_APP_BIG_WINDOW;
		
	}
}

function toDown()
{
	if(parent.focusType == parent.FOCUS_APP_BIG_WINDOW)
	{
		littlePositionV = 0;
		$("appBigWindowFocus").style.display = 'none';
		$("appLittleWindowFocus").style.left = littlePositionV * LITTLE_APP_MENU_LEFT + "px";
		$("appLittleWindowFocus").style.display = 'block';
		parent.focusType = parent.FOCUS_APP_LITTLE_WINDOW;
	}
	else if(parent.focusType == parent.FOCUS_APP_MIDDLE_WINDOW)
	{
		if(middlePositionH == 2)
		{
			return;
		}
		else
		{
			middlePositionH++;
			$("appMiddleWindowFocus").style.top = middlePositionH * MIDDLE_APP_MENU_TOP + "px";
		}
	}
	else if(parent.focusType == parent.FOCUS_APP_LITTLE_WINDOW)
	{
		return;
	}
}

function toOk()
{
	if(!top.checkNetStatus())
	{
		parent.showHomePageNetTips();
		return;
	}
	parent.$("homePageTv").contentWindow.setSmallScreenPos(0);
	top.lastInputSource = top.g_channel.inputSource;
	top.g_channel.inputSource=10;
	top.appOpenFlag = 1;
	top.g_ulits.setKeySet(0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x800, 2, 0);
	top.$("main").style.display = 'none';
	top.$("otherPage").style.display = 'none';
	top.$("operatePage").style.display = 'none';
	
	if(parent.focusType == parent.FOCUS_APP_BIG_WINDOW)
	{
		if (adlist.browser=="opera.golive_au")
		{
			top.g_ulits.openApplication(adlist.browser, adlist.url.replace("TCL-NT667",setting.getProperty("ro.sita.model.CLENT_TYPE_INFO.CLENT_TYPE", "THOM-EU-NT667-F1"))+"&client_mac="+tv.setting.networkMAC);
		}
		else
		{
			top.g_ulits.openApplication(adlist.browser, adlist.url);
		}
	}
	else if(parent.focusType == parent.FOCUS_APP_MIDDLE_WINDOW)
	{
		if(applist[middlePositionH * 4 + middlePositionV].browser == "vod.netflix")
		{
			top.g_ulits.sendMsgToApplication(applist[middlePositionH * 4 + middlePositionV].browser, applist[middlePositionH * 4 + middlePositionV].url);
		}
		else if (applist[middlePositionH * 4 + middlePositionV].browser == "opera.golive_au")
		{
			top.g_ulits.openApplication(applist[middlePositionH * 4 + middlePositionV].browser,	applist[middlePositionH * 4 + middlePositionV].url.replace("TCL-NT667",setting.getProperty("ro.sita.model.CLENT_TYPE_INFO.CLENT_TYPE", "THOM-EU-NT667-F1"))+"&client_mac="+tv.setting.networkMAC);
		}
		else
		{
			top.g_ulits.openApplication(applist[middlePositionH * 4 + middlePositionV].browser,	applist[middlePositionH * 4 + middlePositionV].url);
		}
	}
	else if(parent.focusType == parent.FOCUS_APP_LITTLE_WINDOW)
	{
		if (appFavAndAllList[littlePositionV].browser == "opera.golive_au")
		{
			top.g_ulits.openApplication(appFavAndAllList[littlePositionV].browser, appFavAndAllList[littlePositionV].url.replace("TCL-NT667",setting.getProperty("ro.sita.model.CLENT_TYPE_INFO.CLENT_TYPE", "THOM-EU-NT667-F1"))+"&client_mac="+tv.setting.networkMAC);
		}
		else
		{
			top.g_ulits.openApplication(appFavAndAllList[littlePositionV].browser, appFavAndAllList[littlePositionV].url);
		}
	}
}

function toBack()
{}

function reloadCurrentPage()
{
	window.location.reload();
}
function state_Change()
{
	testLog("xmlhttp.readyState"+xmlhttp.readyState);
	if (xmlhttp.readyState == 4) // 4 = "loaded"
	{
		if (xmlhttp.status == 200) // 200 = "OK"
		{
			xmlTxt = xmlhttp.responseText;
			if (window.DOMParser) {
				var parser = 0;
				parser = new DOMParser();
				xmlDoc = parser.parseFromString(xmlTxt, "text/xml");
			}
			else //IE
			{
				xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
				xmlDoc.async = "false";
				xmlDoc.loadXML(xmlTxt);
			}

			var elements = xmlDoc.getElementsByTagName("icon");

			var spans = $("AppLittleList").getElementsByTagName("span");
			var twoImg = $("AppLittleList").getElementsByTagName("img");
			for(var j = 0; j < elements[0].getElementsByTagName('img_little').length; j++)
			{
				appFavAndAllList[j].icon = URL_NAME_BASE+elements[0].getElementsByTagName('img_little')[j].firstChild.nodeValue; //前面四个应用不动
				appFavAndAllList[j].name = elements[0].getElementsByTagName('span')[j].firstChild.nodeValue;
				appFavAndAllList[j].url = elements[0].getElementsByTagName('url')[j].firstChild.nodeValue;
				appFavAndAllList[j].browser = elements[0].getElementsByTagName('browser')[j].firstChild.nodeValue;
			}
			
			var moreImg = $("AppMiddleList").getElementsByTagName("img");
			var moreNames = $("AppMiddleList").getElementsByTagName("span");
			for(var i = 0; i < elements[1].getElementsByTagName('img_middle').length; i++)
			{
				applist[i].icon = URL_NAME_BASE+elements[1].getElementsByTagName('img_middle')[i].firstChild.nodeValue; //前面四个应用不动
				applist[i].name = elements[1].getElementsByTagName('span')[i].firstChild.nodeValue;
				applist[i].url = elements[1].getElementsByTagName('url')[i].firstChild.nodeValue;
				applist[i].browser = elements[1].getElementsByTagName('browser')[i].firstChild.nodeValue;
			}

			var recomImg = $("AppBigWindow").getElementsByTagName("img");
			adlist.icon= URL_NAME_BASE+elements[2].getElementsByTagName('img_big')[0].firstChild.nodeValue;
			adlist.name = elements[2].getElementsByTagName('span')[0].firstChild.nodeValue;
			adlist.url = elements[2].getElementsByTagName('url')[0].firstChild.nodeValue;
			adlist.browser = elements[2].getElementsByTagName('browser')[0].firstChild.nodeValue;

			showAppList();
		}
		else
		{
			testLog("Problem retrieving XML data:" + xmlhttp.statusText);
		}
	}
}
function loadXMLDoc(url)
{
	xmlhttp=null;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest(); // code for IE7, Firefox, Opera, etc.
	}
	else if (window.ActiveXObject)
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); // code for IE6, IE5
	}
	if (xmlhttp!=null)
	{
		xmlhttp.timeout = 6000;
		xmlhttp.onreadystatechange=state_Change;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
	}
	else
	{
		testLog("Your browser does not support XMLHTTP.");
	}

}
function showAppList()
{
	try
	{
		var spans = $("AppLittleList").getElementsByTagName("span");
		spans[0].innerHTML= appFavAndAllList[0].name;
		spans[1].innerHTML= appFavAndAllList[1].name;
		var twoImg = $("AppLittleList").getElementsByTagName("img");
		twoImg[0].src= appFavAndAllList[0].icon;
		twoImg[1].src= appFavAndAllList[1].icon;
		var recomImg = $("AppBigWindow").getElementsByTagName("img");
		recomImg[0].src = adlist.icon;
		$("currentAppName").innerHTML = adlist.name;
		var moreImg = $("AppMiddleList").getElementsByTagName("img");
		var moreNames = $("AppMiddleList").getElementsByTagName("span");
		for(var i = 0; i < applist.length; i++)
		{
			moreImg[i].src = applist[i].icon;
			moreNames[i].innerHTML = applist[i].name;//do not display name
			moreNames[i].style.display = 'block';
		}
	}
	catch(er)
	{
		testLog("appList:" + er)
	}	
}

function showAppPicBigWindow()
{
	var imgFlag = $("appFlagBox").getElementsByTagName("img");
	for(var i = 0; i < 5; i++)
	{
		if(i == currentImgFag)
		{
			imgFlag[currentImgFag].src = picImgFlag[0];//long
			$("appBigWindowPicList").style.left = -624 * currentImgFag + "px";
		}
		else
		{
			imgFlag[i].src = picImgFlag[1];//short
		}
	}
	currentImgFag++;
	if(currentImgFag >= 5)
	{
		currentImgFag = 0;
	}
	picBigWindShowTimer = setTimeout("showAppPicBigWindow()", 10000);
}

function pageOnFocus()
{
	testLog("app page on focus!");
	if(1 == top.g_EnterVolumn ||1 == parent.mouseFlag || 1 == top.g_EnterUsb)
	{
		parent.mouseFlag = 0;
		return ;
	}
	switch(parent.preFocusIframe)
	{
		case parent.FOCUS_IP_TITLE://focus from title iframe down key event
			littlePositionV = 0;
			$("appBigWindowFocus").style.display = 'block';
			parent.focusType = parent.FOCUS_APP_BIG_WINDOW;
			break;
		/*case 1://focus from title iframe up key event
			littlePositionV = 0;
			$("appBigWindowFocus").style.display = 'none';
			$("appLittleWindowFocus").style.left = littlePositionV * LITTLE_APP_MENU_LEFT + "px";
			$("appLittleWindowFocus").style.display = 'block';
			parent.focusType = parent.FOCUS_APP_LITTLE_WINDOW;
			break;
		*/
		case parent.FOCUS_IP_TV://focus from tv iframe left key event
			parent.$("homePageTitle").contentWindow.iframePosModification(1);//app
			if(parent.focusType == parent.FOCUS_TV_MIDDLE_WINDOW)
			{
				if(parent.$("homePageTv").contentWindow.middlePositionH == 0)
				{
					littlePositionV = 0;
					$("appBigWindowFocus").style.display = 'block';
					parent.focusType = parent.FOCUS_APP_BIG_WINDOW;
				}
				else
				{
					littlePositionV = 0;
					$("appLittleWindowFocus").style.left = littlePositionV * LITTLE_APP_MENU_LEFT + "px";
					$("appLittleWindowFocus").style.display = 'block';
					parent.focusType = parent.FOCUS_APP_LITTLE_WINDOW;
				}
			}
			else
			{
				middlePositionV = 3;
				middlePositionH = (parent.focusType == parent.FOCUS_TV_BIG_WINDOW) ? 0 : 1;
				$("appMiddleWindowFocus").style.top = middlePositionH * MIDDLE_APP_MENU_TOP + "px";
				$("appMiddleWindowFocus").style.left = middlePositionV * MIDDLE_APP_MENU_LEFT + "px";
				$("appMiddleWindowFocus").style.display = 'block';
				parent.focusType = parent.FOCUS_APP_MIDDLE_WINDOW;
			}
			break;
		case parent.FOCUS_IP_VIDEO:
			parent.$("homePageTitle").contentWindow.iframePosModification(0);//app
			if(parent.$("homePageVideo").contentWindow.middlePositionH == 0)
			{
				$("appBigWindowFocus").style.display = 'block';
				parent.focusType = parent.FOCUS_APP_BIG_WINDOW;
			}
			else
			{
				$("appLittleWindowFocus").style.display = 'block';
				parent.focusType = parent.FOCUS_APP_LITTLE_WINDOW;
			}
			break;
		default:
			break;
	}
}

function pageLoseFocus()
{
	if(1 == top.g_EnterVolumn || 1 == top.g_EnterUsb )
	{
		return ;
	}
	$("appBigWindowFocus").style.display = 'none';
	$("appMiddleWindowFocus").style.display = 'none';
	$("appLittleWindowFocus").style.display = 'none';
}

function addMouseListener()
{
	$("AppBigWindow").onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			if(parent.currentFocusIframe == parent.FOCUS_IP_TITLE)
			{
				parent.preFocusIframe = parent.currentFocusIframe;
				parent.currentFocusIframe = parent.FOCUS_IP_APP;
				parent.mouseFlag = 1;
				parent.setIndexFocusPage(parent.currentFocusIframe);
			}
			parent.getTitleELementById("mainFocus").style.background = 'none';
			$("appBigWindowFocus").style.display = 'block';
			$("appMiddleWindowFocus").style.display = 'none';
			$("appLittleWindowFocus").style.display = 'none';
			parent.focusType = parent.FOCUS_APP_BIG_WINDOW;
			toOk();


		}
	}

	var appMiddleWinDivs = $("AppMiddleList").getElementsByTagName("div");
	for(var i = 0; i < 3; i++)
	{
		for(var j = 0; j < 4; j++)
		{
			appMiddleWinDivs[i * 4 + j].setAttribute("newAttrH",i);
			appMiddleWinDivs[i * 4 + j].setAttribute("newAttrV",j);
			appMiddleWinDivs[i * 4 + j].onmousedown = function(evt)
			{
				evt.preventDefault();
				if(evt.button == 0)
				{
				    try
					{
						if(parent.currentFocusIframe == parent.FOCUS_IP_TITLE)
						{
							parent.preFocusIframe = parent.currentFocusIframe;
							parent.currentFocusIframe = parent.FOCUS_IP_APP;
							parent.mouseFlag = 1;
							parent.setIndexFocusPage(parent.currentFocusIframe);
						}
				        middlePositionV = parseInt(this.getAttribute("newAttrV"));
						middlePositionH = parseInt(this.getAttribute("newAttrH"));
	   					parent.getTitleELementById("mainFocus").style.background = 'none';
						$("appLittleWindowFocus").style.display = 'none';
						$("appBigWindowFocus").style.display = 'none';
						$("appMiddleWindowFocus").style.top = middlePositionH * MIDDLE_APP_MENU_TOP + "px";
						$("appMiddleWindowFocus").style.left = middlePositionV * MIDDLE_APP_MENU_LEFT + "px";
						$("appMiddleWindowFocus").style.display = 'block';
						parent.focusType = parent.FOCUS_APP_MIDDLE_WINDOW;
						toOk();
					}
					catch(er)
					{
						testLog("er:" + er + "middlePositionV = " + middlePositionV + ", middlePositionH = " + middlePositionH);
					}
				}
			}
		}
	}

	var appLittleWinDivs = $("AppLittleList").getElementsByTagName("div");
	for(var i = 0; i < 2; i++)
	{
		appLittleWinDivs[i].setAttribute("newAttrV", i);
		appLittleWinDivs[i].onmousedown = function(evt)
		{
			evt.preventDefault();
			if(evt.button == 0)
			{
				if(parent.currentFocusIframe == parent.FOCUS_IP_TITLE)
				{
					parent.preFocusIframe = parent.currentFocusIframe;
					parent.currentFocusIframe = parent.FOCUS_IP_APP;
					parent.mouseFlag = 1;
					parent.setIndexFocusPage(parent.currentFocusIframe);
				}
				littlePositionV = parseInt(this.getAttribute("newAttrV"));
				parent.getTitleELementById("mainFocus").style.background = 'none';
				$("appLittleWindowFocus").style.left = littlePositionV * LITTLE_APP_MENU_LEFT + "px";
				$("appLittleWindowFocus").style.display = 'block';
				$("appBigWindowFocus").style.display = 'none';
				$("appMiddleWindowFocus").style.display = 'none';
				parent.focusType = parent.FOCUS_APP_MIDDLE_WINDOW;
				toOk();
			}
		}
	}
}

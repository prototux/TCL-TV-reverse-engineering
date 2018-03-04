var wireStatusImg	= ["images/homePageNetwork/wired-2.png", "images/homePageNetwork/wired-1.png"];
var titleList       = top.homePageTitleList;
var wirelessStatus  = 0;
var titleImgList 	= 0;

var g_factory 		= top.g_factory;
var multimedia 		= top.g_media;
var setting 		= top.g_setting;
var channel 		= top.g_channel;
var systemCountry 	= top.g_channel.systemCountry;
document.onnotify = notifyProcess;
document.onkeydown = keyProc;

function $(id)
{
    return document.getElementById(id);
}

function testLog(str)
{
	console.log("    ===========> Areos: " + str);
}

function init()
{
	titleImgList = $("title").getElementsByTagName("img");
	showTimeFormat();
	setInterval("showCurTime()", 60 * 1000);
	showNetworkStatus();
	showUsbStatus();
	iframePosModification(0);
	addMouseListener();
}

function uninit()
{
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
			toOK();
			break;
		case top.VK_BACK:
			break;
		default:
			parent.keyProc(evt);
			break;
	}
}

function toLeft()
{
	if(parent.focusType == parent.FOCUS_TITLE_TV)
	{
		parent.focusType = parent.FOCUS_TITLE_APP;
		iframePosModification(1);//app
	}
	else if(parent.focusType == parent.FOCUS_TITLE_APP)
	{
		parent.focusType = parent.FOCUS_TITLE_TV;
		iframePosModification(0);//tv
		parent.checkVideoAppPageUpdate();
	}
}

function toRight()
{
	if(parent.focusType == parent.FOCUS_TITLE_APP)
	{
		parent.focusType = parent.FOCUS_TITLE_TV;
		iframePosModification(0);//tv
		parent.checkVideoAppPageUpdate();
	}
	else if(parent.focusType == parent.FOCUS_TITLE_TV)
	{
		parent.focusType = parent.FOCUS_TITLE_APP;
		iframePosModification(1);//app
	}
}

function toUp()
{
}

function toDown()
{
	parent.preFocusIframe = parent.currentFocusIframe;
	switch(parent.focusType)
	{
		case parent.FOCUS_TITLE_TV:
			parent.currentFocusIframe = parent.FOCUS_IP_TV;
			break;
		case parent.FOCUS_TITLE_APP:
			parent.currentFocusIframe = parent.FOCUS_IP_APP;
			break;
		case parent.FOCUS_TITLE_VIDEO:
			parent.currentFocusIframe = parent.FOCUS_IP_VIDEO;
			break;
		default:
			break;
	}
	parent.setIndexFocusPage(parent.currentFocusIframe);
}

function toOK()
{
	if(parent.focusType == parent.FOCUS_TITLE_TV || parent.focusType == parent.FOCUS_TITLE_APP
		|| parent.focusType == parent.FOCUS_TITLE_VIDEO)
	{
		toDown();
	}
}

function iframePosModification(index)
{
	switch(index)
	{
		case 0://tv
			parent.setBGImage(0);
			var spans = $("mainFocus").getElementsByTagName("span");
			spans[0].style.color="#e12282";
			$("mainTitle").innerHTML = titleList[1];
			$("mainFocus").style.left = -32 + "px";
			titleImgList[0].style.display = 'none';
			titleImgList[1].style.display = 'block';
			titleImgList[2].style.display = 'block';
			titleImgList[3].style.display = 'none';
			titleImgList[4].style.display = 'block';
			titleImgList[5].style.display = 'none';
			parent.$("iframeDiv").style.left = 0 + "px";
			break;
		case 1://app
			parent.setBGImage(1);
			var spans = $("mainFocus").getElementsByTagName("span");
			spans[0].style.color="#ffc71d";
			$("mainTitle").innerHTML = titleList[0];
			$("mainFocus").style.left = 97 + "px";
			titleImgList[0].style.display = 'block';
			titleImgList[1].style.display = 'none';
			titleImgList[2].style.display = 'none';
			titleImgList[3].style.display = 'block';
			titleImgList[4].style.display = 'none';
			titleImgList[5].style.display = 'block';
			parent.$("iframeDiv").style.left = -1920 + "px";
			parent.$("homePageApp").contentWindow.document.getElementById("APPPage").style.display = "block";
			break;
		case 2://video
			parent.setBGImage(1);
			$("mainTitle").innerHTML = titleList[2];
			$("mainFocus").style.left = 362 + "px";
			titleImgList[0].style.display = 'block';
			titleImgList[1].style.display = 'block';
			titleImgList[2].style.display = 'none';
			parent.$("iframeDiv").style.left = -3840 + "px";
			break;
	}
}

function setIframeFocus(type)//[0]from tv [2]form app [3]from video
{
	switch(type)
	{
		case 0://focus from tv iframe
			parent.focusType = parent.FOCUS_TITLE_TV;
			break;
		case 1://focus from app iframe
			parent.focusType = parent.FOCUS_TITLE_APP;
			break;
		case 2://focus from video iframe
			parent.focusType = parent.FOCUS_TITLE_VIDEO;
			break;
		default:
			break;
	}
}

function showCurTime()
{
	showTimeFormat();
	if(top.checkNetStatus() && top.appOpenFlag == 0 
		&& parent.showLocationListFlag == 0 && parent.currentFocusIframe == parent.FOCUS_IP_TV)
	{
		parent.$("homePageTv").contentWindow.showUpdateEpg();
	}

	try
	{
		showTimeFormat();
		if(top.checkNetStatus() && top.appOpenFlag == 0 && parent.LocationListFlag != 1)
		{
			parent.$("homePageTv").contentWindow.showUpdateEpg();
		}
		else if(top.checkNetStatus() && top.appOpenFlag == 0 && parent.showLocationListFlag == 1)
		{
			parent.$("homePageTv").contentWindow.checkVersionUpdate();
		}
	}
	catch(er)
	{
		testLog("showCurTime:" + er);
	}
}

function showUsbStatus()
{
	$("usbImg").style.display = multimedia.deviceStatus() ? 'block' : 'none';
}

function showNetworkStatus()
{
	if(top.checkNetStatus())
	{
		if(setting.wirelessNetworkConnectStatus != 0)
		{
			showWifiSignal(setting.netSignalStrength);
		}
		else 
		{
			$("networkImg").src = wireStatusImg[1];
		}
		return true;
	}
	else
	{
        if(setting.networkConnectType == 0)
        {
            $("networkImg").src = wireStatusImg[0];
        }
        else
        {
            showWifiSignal(-100);
        }
		return false;
	}
}

function showTimeFormat()
{
	var CurrentDate = setting.currentDate;
	var currentTime = setting.currentTime;
	//var CurrentTimeFormat = CurrentDate.substring(0, 2) + "/" + CurrentDate.substring(3, 5)
	//					+ "/" + CurrentDate.substring(6, CurrentDate.length)
	//					+ "&nbsp;&nbsp;&nbsp;&nbsp;" + currentTime.substring(0, 5);
	$("Time").innerHTML =  currentTime.substring(0, 5);
	$("Date").innerHTML = CurrentDate.substring(0, 2) + "/" + CurrentDate.substring(3, 5)
		+ "/" + CurrentDate.substring(6, CurrentDate.length);
}

function showWifiSignal(signal)
{
	if(signal >= -52 && signal <= 45)
	{
		$("networkImg").src = parent.signalStrength[4];
	}
	else if(signal >= -59 && signal < -52)
	{
		$("networkImg").src =  parent.signalStrength[3];
	}
	else if(signal >= -66 && signal < -59)
	{
		$("networkImg").src =  parent.signalStrength[2];
	}
	else if(signal >= -73 && signal < -66)
	{
		$("networkImg").src =  parent.signalStrength[1];
	}
	else if(signal >= -80 && signal < -73)
	{
		$("networkImg").src =  parent.signalStrength[0];
	}
	else 
	{
		$("networkImg").src =  parent.signalStrength[5];
	}
}

function pageOnFocus()
{
	testLog("title page on focus!");
	if(1 == top.g_EnterVolumn || 1 == top.g_EnterUsb)
	{
		return;
	}
	$("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
	//[0]from tv [2]form app [3]from video
	switch(parent.preFocusIframe)
	{
		case parent.FOCUS_IP_TV://focus from tv iframe
			parent.focusType = parent.FOCUS_TITLE_TV;
			break;
		case parent.FOCUS_IP_APP://focus from app iframe
			parent.focusType = parent.FOCUS_TITLE_APP;
			break;
		default:
			break;
	}
}

function pageLoseFocus()
{
	if(1 == top.g_EnterVolumn || 1 == top.g_EnterUsb)
	{
		return ;
	}
    $("mainFocus").style.background = 'none';
}

function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 2)
		{
			
		}
	}
	titleImgList[0].onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			iframePosModification(0);//tv

			if(parent.currentFocusIframe == parent.FOCUS_IP_TITLE && parent.focusType != parent.FOCUS_TITLE_APP)
			{
				return;
			}
			parent.currentFocusIframe = parent.FOCUS_IP_TITLE;
			parent.$("homePageTitle").focus();
			parent.focusType = parent.FOCUS_TITLE_TV;
		}
	}

	titleImgList[1].onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			if(parent.currentFocusIframe == parent.FOCUS_IP_TITLE && parent.focusType != parent.FOCUS_TITLE_TV)
			{
				return;
			}
			parent.currentFocusIframe = parent.FOCUS_IP_TITLE;

			parent.$("homePageTitle").focus();
           	iframePosModification(1);//app
	        parent.focusType = parent.FOCUS_TITLE_APP;
    	}
	}
	var spans = $("mainFocus").getElementsByTagName("span");
	spans[0].onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			if(spans[0].innerHTML == titleList[0])  //app
			{
				parent.focusType = parent.FOCUS_TITLE_APP;
				iframePosModification(1);//app
			}
			else
			{
				parent.focusType = parent.FOCUS_TITLE_TV;
				iframePosModification(0);//TV
			}
			parent.currentFocusIframe = parent.FOCUS_IP_TITLE;

			parent.$("homePageTitle").focus();


		}
	}
}

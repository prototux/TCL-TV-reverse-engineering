var FOCUS_TITLE_TV 				= 0;
var FOCUS_TITLE_APP				= 1;
var FOCUS_TITLE_VIDEO 			= 2;
var FOCUS_TV_BIG_WINDOW			= 3;
var FOCUS_TV_MIDDLE_WINDOW		= 4;
var FOCUS_TV_LITTLE_WINDOW		= 5;
var FOCUS_APP_BIG_WINDOW		= 6;
var FOCUS_APP_MIDDLE_WINDOW		= 7;
var FOCUS_APP_LITTLE_WINDOW		= 8;
var FOCUS_VIDEO_LIST			= 9;
var FOCUS_POWER_OFF				= 10;
var FOCUS_HISTORY				= 11;
var FOCUS_SOURCE				= 12;
var FOCUS_SLEEP					= 13;
var FOCUS_NET_TIPS				= 14;
var FOCUS_SCAN_TIPS				= 15;
var FOCUS_SMARTTV_WINDOW 		= 16;

var FOCUS_IP_TITLE				= 0;
var FOCUS_IP_TV					= 1;
var FOCUS_IP_APP				= 2;
var FOCUS_IP_VIDEO				= 3;
var FOCUS_IP_OTHER				= 0xff;
var focusType                   = FOCUS_TITLE_TV;
var preFocusType                = FOCUS_TITLE_TV;

var middlePositionV             = 0;                    //节目列表焦点水平位移
var middlePositionH             = 0;                    //节目列表焦点垂直位移
var littlePositionV             = 0;                    //设置列表焦点水平位移
var littlePositionH             = 0;                    //设置列表焦点垂直位移

var homePageButton              = [top.chOptions[0],top.others[14],top.okCancel[1]];
var signalStrength              = ["images/homePageNetwork/wifi-0.png", "images/homePageNetwork/wifi-1.png", 
									"images/homePageNetwork/wifi-2.png", "images/homePageNetwork/wifi-3.png",
									"images/homePageNetwork/wifi-4.png", "images/homePageNetwork/wifi-5.png"]

var wireStatus                  = 0;
var wirelessStatus              = 0;
var networkEnable               = 0;
var initFinish                  = 0;
var lastInputSource             = 0;
var programStatus               = 0; 
var TipsButton                  = 1;
var HttpNum                     = -1;
var MacAdress                   = ""
var DateMonth                   = ["","Jan.","Feb.","Mar.","Apr.","May.","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];
var DateTime                    = ["AM","PM"];
var animation = "left 0ms linear";
var channelListType =0;
var channelList;
var currentIndex  = 0;

var enablePageAnimation = 0;
var oldKeyCode          = 0xffff;  
var showHistoryTimer    = 0;   
var repeatKeyPressTimer = 0;  
var UpdateLocationCount = 0;
var UpdateHttpCout      = 0;
var titleImgList;      
var currentFocusIframe = 0;
var preFocusIframe = 0;

var clearHttpLocationTimer = 0;
var httpLocationTimeout = true;
var clearHttpTimer      =0;
var httpTimeOut         = false;
var showHomePageTipsForNever 	= false;
var homePageTipsNeverShow 		= -1;  //add yums:2014-12-17

var factory                = top.g_factory;
var multimedia             = top.g_media;
var setting                = top.g_setting;
var channel                = top.g_channel;
var systemCountry          = top.g_channel.systemCountry;
var mouseFlag			   = 0;
function $(id)
{
    return document.getElementById(id);
}

function testLog(str)
{
	console.log("    ===========> Areos: " + str);
}
function initLoadPage()
{
	$("homePageTitle").src = "homePageTitle.html";
	var temp = document.location.search;
	temp = temp.substring(temp.indexOf("?") + 1);
	var tempValue = temp.split("&");
	console.log("tempValue[0]=" + tempValue[0]);
	if(tempValue[0] == "tv")
	{

		$("homePageTv").src = "homePageTv.html?tv";
		currentFocusIframe = FOCUS_IP_TV; //place the focus on TV
	}
	else
	{
		$("homePageTv").src = "homePageTv.html";
		currentFocusIframe = FOCUS_IP_TITLE;//default
	}
	//currentFocusIframe = FOCUS_IP_TITLE;

}
function init()
{
	initLoadPage();
	$("homePageApp").src = "homePageApp.html";//test
	setting.contextOf5in1 = top.CONTEXT_HOME_PAGE;
	top.keySetForUI(1);

	preFocusIframe = currentFocusIframe;
	setIndexFocusPage(currentFocusIframe);
	initFinish = 1;
	addMouseListener();
}

function uninit()
{
	/*if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1") != "0")
    {
        setting.setMEMC(1);
    }
    */
	try
	{
		if(typeof xmlhttpIp == 'object')
		{
			httpLocationTimeout = true;
			xmlhttpIp="";
		}
		clearTimeout($("homePageTv").showNotAvailableTimer);
		top.$("operatePage").src = "";
		top.setFrameFocusPage("main");
		setting.scaleVideoWindow(0, 0, 0, 0);
		top.g_temp = "";
		setting.sendMsgToDBC(4);
		top.timeoutFuc.timeoutEnable = 1;
		top.restartSubtitle();
	}
	catch(er)
	{
		testLog("main frame uninit:" + er);
	}
}

function setIndexFocusPage(IndexPage)
{
	top.setFrameFocusPage("main");//when page focus switch from operator Iframe, need to call this

	switch(IndexPage)
	{
		case FOCUS_IP_TITLE:
			$("homePageTitle").focus();
			if(1 == top.g_EnterVolumn || 1 == top.g_EnterUsb)
			{
				return;
			}
			$("homePageTitle").style.zIndex = 100;
			$("homePageApp").style.zIndex 	= 1;
			$("homePageTv").style.zIndex 	= 2;
			$("homePageVideo").style.zIndex = 3;
			break;
		case FOCUS_IP_TV:
			$("homePageTv").focus();
			if(1 == top.g_EnterVolumn || 1 == top.g_EnterUsb)
			{
				return;
			}
			setBGImage(0);
			$("homePageTv").focus();
			$("iframeDiv").style.left = 0 + "px";
			$("homePageTitle").style.zIndex = 1;
			$("homePageApp").style.zIndex 	= 2;
			$("homePageTv").style.zIndex 	= 100;
			$("homePageVideo").style.zIndex = 3;
			break;
		case FOCUS_IP_APP:
			$("homePageApp").focus();
			if(1 == top.g_EnterVolumn || 1 == top.g_EnterUsb)
			{
				return;
			}
			setBGImage(1);
			$("iframeDiv").style.left = -1920 + "px";
			$("homePageTitle").style.zIndex = 1;
			$("homePageApp").style.zIndex 	= 100;
			$("homePageTv").style.zIndex 	= 2;
			$("homePageVideo").style.zIndex = 3;
			break;
		case FOCUS_IP_VIDEO:
			setBGImage(1);
			$("homePageVideo").focus();
			$("iframeDiv").style.left = -3840 + "px";
			$("homePageTitle").style.zIndex = 1;
			$("homePageApp").style.zIndex 	= 2;
			$("homePageTv").style.zIndex 	= 3;
			$("homePageVideo").style.zIndex = 100;
			break;
		default:
			break;
	}
}

function initTest()//other page
{
	/*
	var appOnload = 0;
	var VideoOnload = 0;
	var countryIndex = [1,2,3,4,5,6,28,7,8,9,
						10,11,33,12,30,58,13,14,15,16,
						17,18,19,20,31,21,22,23,24,32,
						59,25];
	var countrysWords = new Array(32);
	for(var i = 0; i < 32; i++)
	{
		countrysWords[i] = top.all_country[countryIndex[i]];
	}

	function fixCountrName()
	{
		var index = top.g_channel.systemCountry;
		for (var i = 0; i < countryIndex.length; i++)
		{
			if (countryIndex[i] == index)
			{
				if("United Kingdom" == countrysWords[i])
				{
					return "English";
				}
				else
				{
					return countrysWords[i];
				}
			}
		}
	}

	function checkLocation()
	{
	 	var index = top.g_channel.systemCountry;
		for (var i=0; i<countryIndex.length; i++)
		{
			if (countryIndex[i] == index)
			{
				return top.g_setting.checkLocation(i);
			}
		}
	}

	$("homePageTv").src = "homePageTv.html";
	if(top.checkNetStatus())
	{
		$("homePageApp").onload = function(){
			 appOnload=1;
			 if(VideoOnload)
			 {
				addMouseListener();
			 }
		};
		$("homePageVideo").onload = function(){
			VideoOnload=1;
			if(appOnload)
			{
				addMouseListener();
			}
		};
		$("homePageApp").onerror = function(){
			$("homePageApp").src ="homePageApp.html";
		}
		$("homePageVideo").onerror = function(){
			$("homePageVideo").src = "homePageVideo.html";
		}
		 $("homePageApp").src="3ceea741a1bac6467cb48d59cec5653b.002d734450b3be6f5d0cb4939aa0a4bc.com/homePage/homePageApp.html?"+fixCountrName();
		 //"http://192.168.1.100/homePage/homePageApp.html?"+fixCountrName();
		 $("homePageVideo").src="3ceea741a1bac6467cb48d59cec5653b.002d734450b3be6f5d0cb4939aa0a4bc.com/homePage/homePageVideo.html?"+fixCountrName();
	}
	else
	{
		$("homePageApp").src="homePageApp.html";
		$("homePageVideo").src="homePageVideo.html";
	}
	*/
}

function setBGImage(type)//[0]tv [1]app/video
{
	$("mainFrameBG").style.left = !type ? 0 + "px" : -1920 + "px";
}

function showTimeFormat()
{
	var CurrentDate = setting.currentDate;
	currentTime = setting.currentTime;
	var CurrentTimeFormat = "";
	CurrentTimeFormat = CurrentDate.substring(0, 2) + "/" + CurrentDate.substring(3, 5) 
						+ "/" + CurrentDate.substring(6, CurrentDate.length);
	CurrentTimeFormat = CurrentTimeFormat+"&nbsp;&nbsp;&nbsp;"+currentTime.substring(0, 5);
	$("time").innerHTML = CurrentTimeFormat;
}

function keyProc(evt)
{
	var ret = true;
	var keycode = evt.which;
	if(focusType == FOCUS_POWER_OFF)
	{
		if(top.appOpenFlag == 0)
		{
			top.$('operatePage').src = "";
		}
		else
		{
			top.g_ulits.setKeySet(0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x800, 2, 0);
			top.$('operatePage').src = "";
			top.$("operatePage").style.display = 'none';
		}
		top.setFrameFocusPage("main");
		top.g_lastTime = -1;
		top.g_setting.cancelPowerOff();
		focusType = preFocusType;
	}
	switch(keycode)
	{
		case top.VK_LIST://list
		case top.VK_OPTION://option
		case top.VK_INFO://info
			return;
		case top.VK_TV:
		case top.VK_SMARTTV://smart tv
		case top.VK_YOUTUBE://youtube
		case top.VK_HOME://[36]home
			break;
		case top.VK_MUTE://key mute
			top.endT = new Date();
			top.showMute(1);
			break;
		case top.VK_VOLUME_DOWN://volume down,多媒体不能共用
		case top.VK_VOLUME_UP://volume up
			top.g_EnterVolumn  = 1;
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
			top.globleShow.focus();
			top.setFrameFocusPage("globleShow");
			//top.startVolumeTimer();
			break;
		case top.VK_POWER://power
			top.keyDownProcess(evt);
			break;
	}
	if(top.appOpenFlag == 1 || initFinish == 0)
	{
		return;
	}
	switch (keycode)
	{
		case top.VK_PRE_CH://pre-ch
			//if(oldKeyCode != top.VK_PRE_CH)
			//{
			//	oldKeyCode = top.VK_PRE_CH;
			//	repeatKeyPressTimer = setTimeout(function()
			//	{
			//		oldKeyCode = 0xffff;
			//		clearTimeout(showHistoryTimer);
			//		showHistoryTimer = 0;
			//	}, 300);
			//	showHistoryTimer = setTimeout(function()
			//	{
			//		if(oldKeyCode == top.VK_PRE_CH && focusType != FOCUS_HISTORY)
			//		{
			//			top.$('operatePage').src = "homePageHistory.html";
			//			if(focusType != FOCUS_SOURCE && focusType != FOCUS_SLEEP && focusType != FOCUS_POWER_OFF)
			//			{
			//				preFocusType = focusType;
			//			}
			//			focusType = FOCUS_HISTORY;
			//			top.setFrameFocusPage("operatePage");
			//		}
			//	}, 3000)
			//}
			//else
			//{
			//	clearTimeout(repeatKeyPressTimer);
			//	repeatKeyPressTimer = setTimeout(function()
			//	{
			//		oldKeyCode = 0xffff;
			//		clearTimeout(showHistoryTimer);
			//		showHistoryTimer = 0;
			//	}, 300);
			//}
			return;
		case top.VK_UP://up			
			toUp();
			ret = false;
			break;			
		case top.VK_DOWN://down
			toDown();
			ret = false;
			break;
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_ENTER:
			if(focusType == FOCUS_SOURCE)
			{
				top.$('operatePage').contentWindow.keyDownProcess(evt);
			}
			else if(focusType == FOCUS_SLEEP)
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			else if(focusType == FOCUS_HISTORY)
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			else
			{
				toOk();
			}
			ret = false;
			break;
		case top.VK_SOURCE:
			$("homePageTv").contentWindow.toJumpSource();
			break;
		case top.VK_SLEEP:
		    if(focusType != FOCUS_SLEEP)
			{
				top.$('operatePage').src = "sleepTimer.html";
				if(focusType != FOCUS_SOURCE && focusType != FOCUS_HISTORY && focusType != FOCUS_POWER_OFF)
				{
					preFocusType = focusType;
				}
				focusType = FOCUS_SLEEP;
				top.setFrameFocusPage("operatePage");
			}
			else
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			break;
		case top.VK_BACK: //back
		   	if(focusType == FOCUS_NET_TIPS)
			{
				TipsButton = 1;
				focusType = preFocusType;
				$("homePageTips").style.display = 'none';
				$("picResetFocus").style.left = "490px";
			}
			else if(focusType == FOCUS_SCAN_TIPS)
			{
				TipsButton = 1;
				focusType = preFocusType;
				$("homePageTips").style.display = 'none';
				$("picResetFocus").style.left = "490px";
			}
			break;
		case top.VK_MENU: //menu
			top.menu_visible_status = 1;
			top.keyDownProcess(evt);
			if(top.g_isDownloading == 0)
			{
				top.g_isDownloading = 1;
				setting.restartDownloadUpdateFile();
			}
			break;
		case top.VK_EXIT: //exit
			if(focusType == FOCUS_SOURCE)
			{
				top.$('operatePage').src = "";
				focusType = preFocusType;
				top.setFrameFocusPage("main");
			}
			else if(focusType == FOCUS_SLEEP)
			{
				top.$('operatePage').src = "";
				focusType = preFocusType;
				top.setFrameFocusPage("main");
			}
			else if(focusType == FOCUS_HISTORY)
			{
				top.$('operatePage').src = "";
				focusType = preFocusType;
				top.setFrameFocusPage("main");
			}
			else
			{
				if(typeof xmlhttp == 'object')
				{
					httpLocationTimeout = true;
		 			xmlhttp.abort();
					xmlhttp = "";
				}
				if(typeof xmlhttpIp == 'object')
				{
					httpTimeOut = true;
					xmlhttpIp.abort();
					xmlhttpIp = "";
				}
				top.jumpPage();
				if(top.g_isDownloading == 0)
				{
					top.g_isDownloading = 1;
					setting.restartDownloadUpdateFile();
				}
				testLog("exit  home page....");
			}
			break;
		case top.VK_VOLUME_DOWN://volume down,多媒体不能共用
		case top.VK_VOLUME_UP://volume up
			break;
		case top.VK_MUTE://key mute
			break;
		case top.VK_TV:
		case 36://home
			break;
		case top.VK_SMARTTV://smart tv
			toJumpApp();
			break
		case top.VK_POWER://power
			break;
		default:
			top.keyDownProcess(evt);
			break;
	}
	return ret;
}

function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
		case top.E_APP_CLOSE:
		    if(top.g_channel.inputSource == 10)
			{
		   		 top.g_channel.inputSource = top.lastInputSource;
			}
		    $("homePageTv").contentWindow.setSmallScreenPos(1);
			top.appOpenFlag = 0;
			top.g_ulits.setKeySet(0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x400 | 0x800, 0, 2);
			top.$("main").style.display = 'block';
			top.$("operatePage").style.display = 'block';
			top.$("otherPage").style.display = 'block';
			top.$("globleShow").style.display = 'block';
			break;
		case top.E_APP_CLOSE_REPLACE:
			if(typeof xmlhttp == 'object')
			{
				httpLocationTimeout = true;
				xmlhttp.abort();
				xmlhttp = "";
			}
			if(typeof xmlhttpIp == 'object')
			{
				httpTimeOut = true;
				xmlhttpIp.abort();
				xmlhttp = "";
			}
			if(top.g_channel.inputSource==10)
			{
				top.g_channel.inputSource=1;
			}
			top.appOpenFlag = 0;
			top.jumpPage();
			top.$("main").style.display = 'block';
			top.$("operatePage").style.display = 'block';
			top.$("otherPage").style.display = 'block';
			top.$("globleShow").style.display = 'block';
			if(top.g_isDownloading == 0)
			{
				top.g_isDownloading = 1;
				setting.restartDownloadUpdateFile();
			}
			break;
		case top.E_POWER_OFF_TIMER:
			top.g_ulits.setKeySet(0x1 | 0x2 | 0x4 | 0x8 | 0x10 |0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x400 | 0x800, 0, 2);
			top.g_lastTime = evt.modifiers;
			if(top.appOpenFlag == 0)
			{
				top.$('operatePage').src = "powerOffTimer.html";
			}
			else
			{
				top.$('operatePage').src = "powerOffTimer.html";
				top.$("operatePage").style.display = 'block';
			}
			if(focusType != FOCUS_SOURCE && focusType != FOCUS_SLEEP && focusType != FOCUS_POWER_OFF)
			{
				preFocusType = focusType;
			}
			top.setFrameFocusPage("main");
			focusType = FOCUS_POWER_OFF;
			break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
			top.netCheckStatus = 1;
			$("homePageTitle").contentWindow.showNetworkStatus();
			if(programStatus > 0)
			{
				$("homePageTv").contentWindow.showIPEPGList();
			}
			else
			{
				$("homePageTv").contentWindow.getNoSearchChannelList();
			}
			top.systemEventProc(evt);
			break;
		case top.E_NETWORK_CONNECT_TEST_FAIL:
			top.netCheckStatus = 0;
			$("homePageTitle").contentWindow.showNetworkStatus();
			top.systemEventProc(evt);
			break;
		case top.E_CI_CAM_NAME_READY:
		case top.E_CI_DATA_READY:
			break;
		case top.E_READY_TO_CHANGE_CEC:
		case top.E_READY_TO_CHANGE_SCART:
			if(focusType == FOCUS_POWER_OFF)
			{
				if(top.appOpenFlag == 0)
				{
					top.$('operatePage').src = "";
				}
				else
				{
					top.g_ulits.setKeySet(0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x800, 2, 0);
					top.$('operatePage').src = "";
					top.$("operatePage").style.display="none";
				}
				top.setFrameFocusPage("main");
				top.g_lastTime = -1;
				top.g_setting.cancelPowerOff();
				focusType = preFocusType;
			}
			if(top.appOpenFlag == 0)
			{
				top.systemEventProc(evt);
			}
			break;
		case top.E_PVR_DISK_UNPLUG:
		case top.E_MEDIA_USB_REMOVE:
		case top.E_MEDIA_USB_REMOVE_OTHER:
			$("homePageTitle").contentWindow.showUsbStatus();
			break;
		case top.E_MEDIA_USB_INSERTED:
			$("homePageTitle").contentWindow.showUsbStatus();
			if(top.appOpenFlag == 0)
			{
				if(focusType == FOCUS_SOURCE || focusType == FOCUS_SLEEP
					|| focusType == FOCUS_HISTORY)
				{
					top.$('operatePage').src = "";
					focusType = preFocusType;
				}
				else if(focusType == FOCUS_POWER_OFF)
				{
					top.$('operatePage').src = "";
					top.g_lastTime = -1;
					top.g_setting.cancelPowerOff();
					focusType = preFocusType;
				}
				top.g_EnterUsb  = 1;
				top.$("otherPage").src = "newDeviceList.html";
				top.otherPage.focus();
				top.setFrameFocusPage("otherPage");
			}
			break;
		case top.E_DTV_SERVICE_PLAY:
		case top.E_CHANNEL_PLAY_END:
		case top.E_TV_EXCHANGE_END:
		case top.E_DTV_EPG_PF_FINISH:
			$("homePageTv").contentWindow.showCurrentChannelInfo();
			if(top.appOpenFlag == 0)
			{
				top.systemEventProc(evt);
			}
			break;
		case top.E_BOOKING_PLAY_START:
		case top.E_BOOKING_RECORD_START:
		case top.E_BOOKING_AHEAD_PLAY_START:
		case top.E_BOOKING_AHEAD_RECORD_START:
			top.systemEventProc(evt);
			break;
		case top.E_SS_NO_CI_MODULE:
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_DTV_SS_RUNNING_STATUS_NOT_RUNNING:
		case top.E_SS_COMMON_VIDEO:
		case top.E_SS_CH_BLOCK:
		case top.E_SS_PARENTAL_BLOCK:
		case top.E_DTV_SS_INPUT_BLOCK:
			$("homePageTv").contentWindow.showCurrentChannelInfo();
			break;
		case top.E_HOMEPAGE_UPDATE_DONE://test for updating homepage
			top.needToUpdateHPFlag = true;
			checkVideoAppPageUpdate();
			break;
		case top.E_HOMEPAGE_JSON_DOWNLOAD_DONE:
			top.systemEventProc(evt);
			break;
		case top.E_SIGNAL_UNLOCK://unlock signal
		case top.E_PVR_NO_SIGNAL:
		{
			$("homePageTv").contentWindow.showCurrentChannelInfo();
			break;
		}
		case top.E_SIGNAL_LOCK://lock signal
		{
			$("homePageTv").contentWindow.showCurrentChannelInfo();
			break;
		}
		default:
			if(top.appOpenFlag == 0)
			{
				top.systemEventProc(evt);
			}
			break;
	}
}

function checkVideoAppPageUpdate()
{
	if(!top.needToUpdateHPFlag)//no need to update
	{
		return;
	}
	if((currentFocusIframe == FOCUS_IP_TITLE && (focusType == FOCUS_TITLE_VIDEO || focusType == FOCUS_TITLE_APP))
		|| currentFocusIframe == FOCUS_IP_VIDEO || currentFocusIframe == FOCUS_IP_APP)
	{
		return;//user is viewing the video or app page, can not update
	}
	else
	{
		top.needToUpdateHPFlag = false;
		$("homePageApp").contentWindow.reloadCurrentPage();
		$("homePageVideo").contentWindow.reloadCurrentPage();
	}
}

function getTitleELementById(id)
{
	return $("homePageTitle").contentWindow.document.getElementById(id);
}

function getAppElementById(id)
{
	return $("homePageApp").contentWindow.document.getElementById(id);
}

function getVideoElementById(id)
{
	return $("homePageVideo").contentWindow.document.getElementById(id);
}

function getTvElementById(id)
{
	return $("homePageTv").contentWindow.document.getElementById(id);
}

function findCountryId()
{
	for(var i = 0; i < 27; i++)
	{
		if(systemCountry == top.mlmCountryIndex[i])
		{
			return i;
		}
	}
}

function json2str(obj)
{
	var S = [];
	var k = 0;
	for(var i in obj)
	{
		obj[i] = typeof obj[i] == 'string' 
			? '"' + obj[i] + '"' 
			: (typeof obj[i] == 'object' ? json2str(obj[i]) : obj[i]);
		S.push('"' + i + '"' + ':' + obj[i]); 
	}
	return '{' + S.join(',') + '}';
}

function jsonTostr(str, tvchannel_id, postion)
{
	var replaceStr = "";
	switch(postion)
	{
		case 0:
		    replaceStr = "aaaaaaaaaaa";
			break;
		case 1:
			replaceStr = "bbbbbbbbbbb";
			break;
		case 2:
			replaceStr = "cccccccccc";
			break;
		case 3:
			replaceStr = "dddddddddd";
			break;
		case 4:
			replaceStr = "eeeeeeeeee";
			break;
		case 5:
			replaceStr = "ffffffffff";
			break;
		case 6:
			replaceStr = "gggggggggg";
			break;
		case 7:
			replaceStr = "hhhhhhhhhh";
			break;
		case 8:
			replaceStr = "iiiiiiiiii";
			break;
		default:
			break;
	}
	var replaceToStr = tvchannel_id;
	getTimeAreaProgramsJson = getTimeAreaProgramsJson.replace(replaceStr,replaceToStr);
	var zoneValue = 0;
	if(setting.currentOffsetTime < 0)
	{
		if(parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(3, 5), 10) > 0)
		{
			zoneValue = -(parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(0, 2), 10) + 0.5);
		}
		else
		{
			zoneValue = -parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(0, 2), 10);
		}
	}
	else
	{
		if(parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(3, 5), 10) > 0)
		{
			zoneValue = parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(0, 2), 10) + 0.5;
		}
		else
		{
			zoneValue = parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(0, 2), 10);
		}
	}
	getTimeAreaProgramsJson = getTimeAreaProgramsJson.replace("0000000000", zoneValue);
	//testLog(strT);
}

function checkDirectionKey(evt)
{
	var keycode = evt.which;
	switch(keycode)
	{
		case top.VK_UP:
		case top.VK_DOWN:
			if(focusType == FOCUS_SOURCE || focusType == FOCUS_SLEEP || focusType == FOCUS_HISTORY)
			{
				keyProc(evt);
				return 1;
			}
			return 0;
		case top.VK_LEFT:
		case top.VK_RIGHT:
			if(focusType == FOCUS_NET_TIPS || focusType == FOCUS_SCAN_TIPS)
			{
				keyProc(evt);
				return 1;
			}
			return 0;
		case top.VK_ENTER:
			if(focusType == FOCUS_NET_TIPS || focusType == FOCUS_SCAN_TIPS)
			{
				keyProc(evt);
				return 1;
			}
			return 0;
	}
}

function toUp()
{
	if(focusType == FOCUS_SOURCE)
	{
		top.$('operatePage').contentWindow.keyDownProcess(evt);
	}
	else if(focusType == FOCUS_SLEEP)
	{
		top.$('operatePage').contentWindow.keyproc(evt);
	}
	else if(focusType == FOCUS_HISTORY)
	{
		top.$('operatePage').contentWindow.keyproc(evt);
	}
}

function toDown()
{
	if(focusType == FOCUS_SOURCE)
	{
		top.$('operatePage').contentWindow.keyDownProcess(evt);
	}
	else if(focusType == FOCUS_SLEEP)
	{
		top.$('operatePage').contentWindow.keyproc(evt);
	}
	else if(focusType == FOCUS_HISTORY)
	{
		top.$('operatePage').contentWindow.keyproc(evt);
	}
}

function toLeft()
{
	if(focusType == FOCUS_NET_TIPS)
	{
		if(!showHomePageTipsForNever)
		{
			if(TipsButton)
			{
				TipsButton = 0;
				$("picResetFocus").style.left = 90 + "px";
			}
			else
			{
				TipsButton = 1;
				$("picResetFocus").style.left = 490 + "px";
			}
		}
		else
		{
			if(TipsButton == 1)
			{
				TipsButton = 0;
				$("picResetFocus").style.left = 10 + "px";
			}
			else if(TipsButton == 0)
			{
				TipsButton = 2;
				$("picResetFocus").style.left = 550 + "px";
			}
			else if(TipsButton == 2)
			{
				TipsButton = 1;
				$("picResetFocus").style.left = 280 + "px";
			}	
		}
	}
	else if(focusType == FOCUS_SCAN_TIPS)
	{
		if(TipsButton)
		{
			TipsButton = 0;
			$("picResetFocus").style.left = 90 + "px";
		}
		else
		{
			TipsButton = 1;
			$("picResetFocus").style.left = 490 + "px";
		}
	}
}

function toRight()
{
	if(focusType == FOCUS_NET_TIPS)
	{
		if(!showHomePageTipsForNever)
		{
			if(TipsButton)
			{
				TipsButton = 0;
				$("picResetFocus").style.left = 90 + "px";
			}
			else
			{
				TipsButton = 1;
				$("picResetFocus").style.left= 490 + "px";
			}
		}
		else
		{
			if(TipsButton == 0)
			{
				TipsButton = 1;
				$("picResetFocus").style.left = 280 + "px";
			}
			else if(TipsButton == 1)
			{
				TipsButton = 2;
				$("picResetFocus").style.left = 550 + "px";
			}
			else if(TipsButton == 2)
			{
				TipsButton = 0;
				$("picResetFocus").style.left = 10 + "px";
			}
		}
	}
	else if(focusType == FOCUS_SCAN_TIPS)
	{
		if(TipsButton)
		{
			TipsButton = 0;
			$("picResetFocus").style.left = 90 + "px";
		}
		else
		{
			TipsButton = 1;
			$("picResetFocus").style.left = 490 + "px";
		}
	}
}

function toOk()
{
	if(typeof xmlhttp == 'object')
	{
		httpLocationTimeout = true;
		xmlhttp.abort();
		xmlhttp = "";
	}
	if(focusType == FOCUS_NET_TIPS)
	{
		if(!showHomePageTipsForNever)
		{
			if(TipsButton)
			{
				focusType = preFocusType;
				$("homePageTips").style.display = 'none';
			}
			else
			{
				top.$("main").onload = function()
				{
					top.resetFramePacking3DMode();
					top.$("main").onload = function(){};
				}
				top.g_nextHtmlPage = "networkSetting.html";
				top.$("main").src = "index.html";
			}
		}
		else
		{
			if(TipsButton == 1)
			{
				focusType = preFocusType;
				$("homePageTips").style.display="none";
			}
			else if(TipsButton == 0)
			{
				top.$("main").onload = function()
				{
					top.resetFramePacking3DMode();
					top.$("main").onload = function(){};
				}
				top.g_nextHtmlPage = "networkSetting.html";
				top.$("main").src = "index.html";
			}
			else if(TipsButton == 2)
			{
				setting.setHomePageTipsNeverShow(1);
				focusType = preFocusType;
				$("homePageTips").style.display = 'none';
			}
		}
	}
	else if(focusType == FOCUS_SCAN_TIPS)
	{
		if(TipsButton)
		{
			focusType = preFocusType;
			$("homePageTips").style.display = 'none';
		}
		else
		{
			top.g_channel.inputSource = 1;
			top.$("main").onload = function()
			{
				top.resetFramePacking3DMode();
				top.$("main").onload = function(){};
			}
			var install_lock = top.g_setting.installLock;//off 0    on 1
			if(top.g_factory.hotelEnable == 1 && top.g_factory.hotelChLock == 1)
			{
				top.g_nextHtmlPage = "channelSet.html";
				top.$("main").src = "index.html";
			}
			else if(install_lock == 1)
			{//open
				top.g_nextHtmlPage = "channelSet.html";
				top.$("main").src = "index.html";
			}
			else 
			{
				top.g_nextHtmlPage = "channelScan.html";
				top.$("main").src = "index.html";
			}
		}
	}
}

function showHomePageNetTips()
{
	showHomePageTipsForNever = false;
	preFocusType = focusType;
	$("homePageTips").style.display = 'block';
	$("dialogName").innerHTML = top.others[28];
	$("dialogContent").innerHTML = $("homePageTv").contentWindow.homePageRemind[0];
	var divs = $("homePageTips").getElementsByTagName("div");
	divs[0].style.left = "100px";
	divs[1].style.left = "500px";
	divs[2].style.display = 'none';
	divs[0].innerHTML = homePageButton[1];
	divs[1].innerHTML = homePageButton[2];
	TipsButton = 1;
	$("picResetFocus").style.left = "490px";
	focusType = FOCUS_NET_TIPS;
}

function showHomePageNetTipsForNever()   //add yums 2014-12-17
{
	showHomePageTipsForNever = true;
	preFocusType = focusType;
	$("homePageTips").style.display = 'block';
	$("dialogName").innerHTML = top.others[28];
	$("dialogContent").innerHTML = $("homePageTv").contentWindow.homePageRemind[0];
	var divs = $("homePageTips").getElementsByTagName("div");
	divs[0].style.left = "20px";
	divs[1].style.left = "290px";
	divs[2].style.left = "560px";
	divs[2].style.display = 'block';
	divs[0].innerHTML = homePageButton[1];
	divs[1].innerHTML = homePageButton[2];
	divs[2].innerHTML = top.netUpdateButtonText[3];
	TipsButton = 1;
	$("picResetFocus").style.left = "280px";
	focusType = FOCUS_NET_TIPS;
}

function showHomePageScanTips(content)
{
	showHomePageTipsForNever = false;
	preFocusType = focusType;
	$("homePageTips").style.display = 'block';
	$("dialogName").innerHTML = top.others[28];
	$("dialogContent").innerHTML = content;
	var divs=$("homePageTips").getElementsByTagName("div");
	divs[0].style.left = "100px";
	divs[1].style.left = "500px";
	divs[2].style.display = 'none';
	divs[0].innerHTML = homePageButton[0];
	divs[1].innerHTML = homePageButton[2];
	TipsButton = 1;
	$("picResetFocus").style.left = "490px";
	focusType = FOCUS_SCAN_TIPS;
}

function toJumpApp()
{
	if(top.checkNetStatus() == false)
	{
		showHomePageNetTips();
		return;
	}
	setting.scaleVideoWindow(0,0,0,0);
	top.lastInputSource = top.g_channel.inputSource;
	top.appOpenFlag = 1;
	top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
	top.$("main").style.display="none";
	top.$("operatePage").style.display="none";
	top.$("otherPage").style.display="none";
	top.g_ulits.openApplication("opera.mmh",""/*"-u "+applist[12].url+" "*/);
}

function addMouseListener()
{
	try
	{
		$("homePageTips").onmousedown = function(evt)
		{
			evt.preventDefault();
			if(evt.button == 0)
			{
				if(focusType == FOCUS_NET_TIPS)
				{
					TipsButton = 1;
					focusType = preFocusType;
					$("homePageTips").style.display = 'none';
					$("picResetFocus").style.left = "490px";
				}
				else if(focusType == FOCUS_SCAN_TIPS)
				{
					TipsButton = 1;
					focusType = preFocusType;
					$("homePageTips").style.display = 'none';
					$("picResetFocus").style.left = "490px";
				}
			}
		}

		var TipsButton = $("homePageTips").getElementsByTagName("div");
		TipsButton[0].onmousedown = function(evt)
		{
			evt.preventDefault();
			if(evt.button == 0)
			{
				if(focusType == FOCUS_NET_TIPS)
				{
					top.g_nextHtmlPage = "networkSetting.html";
					top.$("main").src = "index.html";
				}
				else if(focusType == FOCUS_SCAN_TIPS)
				{
					top.g_channel.inputSource = 1;
					var install_lock = top.g_setting.installLock;//off 0    on 1
					if(top.g_factory.hotelEnable == 1 && top.g_factory.hotelChLock == 1)
					{
						top.g_nextHtmlPage = "channelSet.html";
						top.$("main").src = "index.html";
					}
					else if(install_lock == 1)//on
					{
						top.g_nextHtmlPage = "channelSet.html";
						top.$("main").src = "index.html";
					}
					else 
					{
						top.g_nextHtmlPage = "channelScan.html";
						top.$("main").src = "index.html";
					}
				}
			}
		}

		TipsButton[1].onmousedown = function(evt)
		{
			evt.preventDefault();
			if(evt.button == 0)
			{
				if(focusType == FOCUS_NET_TIPS)
				{
					TipsButton = 1;
					focusType = preFocusType;
					$("homePageTips").style.display = 'none';
					$("picResetFocus").style.left = "490px";
				}
				else if(focusType == FOCUS_SCAN_TIPS)
				{
					TipsButton = 1;
					focusType = preFocusType;
					$("homePageTips").style.display = 'none';
					$("picResetFocus").style.left = "490px";
				}
			}
		}

	}
	catch(er)
	{
		testLog("addMouseListener..............er:"+er);
	}
}

function resetFocus()
{
	var temppreFocusIframe = preFocusIframe;
	var temcurrentFocusIframe = currentFocusIframe; //temppreFocusIframe都是临时变量，用于表示当前框架在哪个div上

	top.main.focus();
	top.setFrameFocusPage("main");
	//当前代码的思想的，将原来的焦点框保留，先将焦点切到其它div上面，再将焦点切回到原来的div里面
	preFocusIframe = FOCUS_IP_OTHER;
	if(temcurrentFocusIframe == FOCUS_IP_APP)
	{
		temcurrentFocusIframe = FOCUS_IP_TV;
	}
	else if(temcurrentFocusIframe == FOCUS_IP_TITLE)
	{
		temcurrentFocusIframe = FOCUS_IP_TV;
	}
	else if(temcurrentFocusIframe == FOCUS_IP_TV)
	{
		temcurrentFocusIframe = FOCUS_IP_APP;
	}

	setIndexFocusPage(temcurrentFocusIframe);
	preFocusIframe = temppreFocusIframe;
	setIndexFocusPage(currentFocusIframe);
}
var factory                 = top.g_factory;
var multimedia              = top.g_media;
var setting                 = top.g_setting;
var channel                 = top.g_channel;
var systemCountry           = top.g_channel.systemCountry;
var parentalRating			= top.g_setting.parentalRating;
var currentChannelIndex 	= top.g_channel.currentIndex;

var tvLittleWinName 		= [top.others[26], top.homePageLittleWin[0], top.homePageLittleWin[1], 
								top.chOptions[2], top.homePageLittleWin[3]];
var channelNoProgramRemind	= top.homePageRemind[2];
var homePageRemind          = top.homePageRemind;
var channel_remind          = top.screenSavers;
var country =["GBR","ESP","FRA","DEU","ITA","CZE","HRV","DNK","HUN","NLD","NOR","POL","PRT","ROU","SVK","SVN","SRB","FIN","SWE","TUR","GRC","BGR","RUS","LVA","LTU","EST","UKR"];
var language =["ENG","SPA","FRE","GER","ITA","CZE","SCR","DAN","HUN","DUT","NOR","POL","POR","RUM","SLO","SLV","SCC","FIN","SWE","TUR","GRE","BUL","RUS","LAT","LIT","EST","UKR"];

var MacAdress = "";
var nonSacnChannelsJson = {
	"action": "GetRecommendWithNonSacnChannels",
	"developer": {"apikey": "1234","name":"tclrpc_1"},
	"device": {"deviceId": "40:8B:F6:F4:FB:E8"},
	"param": {"size": 9,"country": "FRA","language": "FRE","rating": parentalRating}};
var onGoingJson = {
	"action": "GetOnGoingPrograms",
	"developer": {"apikey": "1234","name": "tclrpc_1"},
	"device": {"deviceId": "40:8B:F6:F4:FB:E8"},
	"param": {"page": 1,"pagesize": 9,"ipgcategory_l1": "all","rating": parentalRating}};
var checkVersion = {
	"action": "CheckLocalVersion",
	"developer": {"apikey": "1234","name": "tclrpc_1"},
	"device": {"deviceId": "40:8B:F6:F4:FB:E8"},"param": {"version": ""}};
var jsonCCID = 
	{
		"ccid": ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
		"Tv_id": ["", "", "", "", "", "", "", "", ""],
		"startTime": ["", "", "", "", "", "", "", "", ""],
		"endTime": ["", "", "", "", "", "", "", "", ""]
	};
var getLocalChannelListJson = {
	"action": "GetLocalChannelList", 
	"developer":{"apikey": "1234","name": "tclrpc_1"}, 
	"device": {"deviceId": "40:8B:F6:F4:FB:E8"}, 
	"param": {"page": "1", "pagesize": "9"}};

var getTimeAreaProgramsJson = {
	"action": "GetTimeAreaPrograms",
	"developer": {"apikey": "1234", "name": "tclrpc_1"}, 
	"device": {"deviceId": "40:8B:F6:F4:FB:E8"}, 
	"param": {"tvchannel_id": ["aaaaaaaaaaa", "bbbbbbbbbbb", "cccccccccc", "dddddddddd", "eeeeeeeeee", "ffffffffff", "gggggggggg", "hhhhhhhhhh", "iiiiiiiiii"], "timearea": "", "timezone": 0000000000}};

var mlmCountryIndex 		= [25,22,8,9,12,5,4,6,11,14,
								15,16,17,18,31,21,20,7,23,32,
								10,3,19,30,58,28,59];
var mlmLangIndex 			= [6,7,9,5,12,0,10,2,13,14,
								15,16,17,19,25,20,21,22,23,35,
								8,24,18,33,279,36,468];

var jumpFunction = [
	{functionName:function(){ toJumpSource();}},
	{functionName:function(){ toJumpSetting();}},
	{functionName:function(){ toJumpMedia();}},
	{functionName:function(){ toJumpIPEPG();}},
];

var MIDDLE_TV_MENU_TOP 			= 260;					//middle菜单焦点移动起始位置
var MIDDLE_TV_MENU_LEFT 		= 350;					//middle菜单焦点移动的step
var LITTLE_TV_MENU_TOP 			= 200;					//LITTLE菜单焦点移动起始位置
var LITTLE_TV_MENU_LEFT 		= 322;					//LITTLE菜单焦点移动的step
var middlePositionV             = 0;                    //节目列表焦点水平位移
var middlePositionH             = 0;                    //节目列表焦点垂直位移
var littlePositionV             = 0;                    //设置列表焦点水平位移
var littlePositionH             = 0;                    //设置列表焦点垂直位移
var tvMiddelProgramInfoSpan;
var tvMiddelProgramInfoDiv;
var xmlhttpIp           		= "";
var clearHttpLocationTimer      = 0;
var httpLocationTimeout         = true;
var clearHttpTimer              = 0;
var ccidNum 					= 0;
var showLocationListFlag		= 0;
var showNotAvailableTimer		= 0;
var reportLocationHttpTimer     = 0;
var channelList;
var currentIndex  				= 0;
var usbLock                		= 0;
var hotelEnable            		= 0;
var currentProgramId            = -1;
var defaultPoster               = ["images/TV-Default-Posters.png","images/TV-Default-Posters-Lock.png"];
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
	//start of 
	top.stopTimeout();
	doElementScroll();
	top.closeSubtitle();
	//end of
	setTimeout(function()
	{
		var temp = document.location.search;
		temp = temp.substring(temp.indexOf("?") + 1);
		var tempValue = temp.split("&");
		testLog("tempValue[0]=" + tempValue[0]);
		if(tempValue[0] == "tv")
		{
				littlePositionH = 1;
				littlePositionV = 0;
				$("littleWindowFocus").style.top = littlePositionH * LITTLE_TV_MENU_TOP + "px";
				$("littleWindowFocus").style.left = littlePositionV * LITTLE_TV_MENU_LEFT + "px";
				$("littleWindowFocus").style.display = 'block';
				parent.$("homePageTitle").contentWindow.$("mainFocus").style.background = 'none';
				parent.focusType = parent.FOCUS_TV_LITTLE_WINDOW;
		}
		var spans = $("littleList").getElementsByTagName("span");
		for(var i = 0; i < 4; i++)
		{
			spans[i].innerHTML= tvLittleWinName[i];
		}
		setSmallScreenPos(1);
		if(top.currentPanel == 1 && top.g_setting.pic3DMode != 0)
		{
			top.g_setting.pic3DMode = 0;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
		}
		else if(top.currentPanel == 2 && top.g_setting.pic3DMode != 0)
		{
			top.g_setting.pic3DMode = 0;
		}

		//unclear
		MacAdress = top.g_setting.tvDeviceID;
		nonSacnChannelsJson.device.deviceId = MacAdress;
		onGoingJson.device.deviceId = MacAdress;
		checkVersion.device.deviceId = MacAdress;
		changeCountry();
		channgeLanguage();
		setTimeout(showTV(), 40);
		addMouseListener();
	}, 100);
	top.g_temp = "homePage";
	setting.sendMsgToDBC(1);
    /*if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(0);
    }*/
    initFinish = 1;
    testLog("end of home page init");
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
		case top.VK_CHANNEL_UP://channel +
			toChannelUp();
			break;
		case top.VK_CHANNEL_DOWN://channel -
			toChannelDown();
			break;
		default:
			parent.keyProc(evt);
			break;
	}
}

function toLeft()
{
	if(parent.focusType == parent.FOCUS_TV_BIG_WINDOW)
	{
		//focus on app iframe
		parent.preFocusIframe = parent.currentFocusIframe;
		parent.currentFocusIframe = parent.FOCUS_IP_APP;
		parent.setIndexFocusPage(parent.currentFocusIframe);
	}
	else if(parent.focusType == parent.FOCUS_TV_MIDDLE_WINDOW)
	{
		if(middlePositionV == 0)
		{
			if(middlePositionH == 0)
			{
				$("middleWindowFocus").style.display = 'none';
				$("bigWindowFocus").style.display = 'block';
				parent.focusType = parent.FOCUS_TV_BIG_WINDOW;
			}
			else if(middlePositionH == 1)
			{
				littlePositionH = 0;
				littlePositionV = 1;
				$("middleWindowFocus").style.display = 'none';
				$("littleWindowFocus").style.top = littlePositionH * LITTLE_TV_MENU_TOP + "px";
				$("littleWindowFocus").style.left = littlePositionV * LITTLE_TV_MENU_LEFT + "px";
				$("littleWindowFocus").style.display = 'block';
				parent.focusType = parent.FOCUS_TV_LITTLE_WINDOW;
			}
			else if(middlePositionH == 2)
			{
				littlePositionH = 1;
				littlePositionV = 1;
				$("middleWindowFocus").style.display = 'none';
				$("littleWindowFocus").style.top = littlePositionH * LITTLE_TV_MENU_TOP + "px";
				$("littleWindowFocus").style.left = littlePositionV * LITTLE_TV_MENU_LEFT + "px";
				$("littleWindowFocus").style.display = 'block';
				parent.focusType = parent.FOCUS_TV_LITTLE_WINDOW; 
			}
		}
		else
		{
			middlePositionV--;
			$("middleWindowFocus").style.left = middlePositionV * MIDDLE_TV_MENU_LEFT + "px";
		}
	}
	else if(parent.focusType == parent.FOCUS_TV_LITTLE_WINDOW)
	{
		if(littlePositionV == 0)
		{
			parent.preFocusIframe = parent.currentFocusIframe;
			parent.currentFocusIframe = parent.FOCUS_IP_APP;
			parent.setIndexFocusPage(parent.currentFocusIframe);
		}
		else
		{
			littlePositionV--;
			$("littleWindowFocus").style.left = littlePositionV * LITTLE_TV_MENU_LEFT + "px";
		}
	}
	doElementScroll();
}

function toRight()
{
	if(parent.focusType == parent.FOCUS_TV_BIG_WINDOW)
	{
		middlePositionH = 0;
		middlePositionV = 0;
		$("bigWindowFocus").style.display = 'none';
		$("middleWindowFocus").style.top = middlePositionH * MIDDLE_TV_MENU_TOP + "px";
		$("middleWindowFocus").style.left = middlePositionV * MIDDLE_TV_MENU_LEFT + "px";
		$("middleWindowFocus").style.display = 'block';
		parent.focusType = parent.FOCUS_TV_MIDDLE_WINDOW;
	}
	else if(parent.focusType == parent.FOCUS_TV_MIDDLE_WINDOW)
	{
		if(middlePositionV == 2)
		{
			parent.preFocusIframe = parent.currentFocusIframe;
			parent.currentFocusIframe = parent.FOCUS_IP_APP;
			parent.setIndexFocusPage(parent.currentFocusIframe);
		}
		else
		{
			middlePositionV++;
			$("middleWindowFocus").style.left = middlePositionV * MIDDLE_TV_MENU_LEFT + "px";
		}
	}
	else if(parent.focusType == parent.FOCUS_TV_LITTLE_WINDOW)
	{
		if(littlePositionV == 1)
		{
			middlePositionH = (littlePositionH == 1) ? 2 : 1;
			middlePositionV = 0;
			$("littleWindowFocus").style.display = 'none';
			$("middleWindowFocus").style.top = middlePositionH * MIDDLE_TV_MENU_TOP + "px";
			$("middleWindowFocus").style.left = middlePositionV * MIDDLE_TV_MENU_LEFT + "px";
			$("middleWindowFocus").style.display = 'block';
			parent.focusType = parent.FOCUS_TV_MIDDLE_WINDOW;
		}
		else
		{
			littlePositionV++;
			$("littleWindowFocus").style.left = littlePositionV * LITTLE_TV_MENU_LEFT + "px";
		}
	}
	doElementScroll();
}

function toUp()
{
	if(parent.focusType == parent.FOCUS_TV_BIG_WINDOW)//back to title iframe
	{
		parent.preFocusIframe = parent.currentFocusIframe;
		parent.currentFocusIframe = parent.FOCUS_IP_TITLE;
		parent.setIndexFocusPage(parent.currentFocusIframe);
	}
	else if(parent.focusType == parent.FOCUS_TV_MIDDLE_WINDOW)
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
			$("middleWindowFocus").style.top = middlePositionH * MIDDLE_TV_MENU_TOP + "px";
		}
	}
	else if(parent.focusType == parent.FOCUS_TV_LITTLE_WINDOW)
	{
		if(littlePositionH == 0)
		{
			$("littleWindowFocus").style.display = 'none';
			$("bigWindowFocus").style.display = 'block';
			parent.focusType = parent.FOCUS_TV_BIG_WINDOW;
		}
		else//littlePositionH == 1
		{
			littlePositionH = 0;
			$("littleWindowFocus").style.top = littlePositionH * LITTLE_TV_MENU_TOP + "px";
		}
	}
	doElementScroll();
}

function toDown()
{
	if(parent.focusType == parent.FOCUS_TV_BIG_WINDOW)
	{
		littlePositionH = 0;
		littlePositionV = 0;
		$("bigWindowFocus").style.display = 'none';
		$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
		$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
		$("littleWindowFocus").style.display = 'block';
		parent.focusType = parent.FOCUS_TV_LITTLE_WINDOW;
	}
	else if(parent.focusType == parent.FOCUS_TV_MIDDLE_WINDOW)
	{
		if(middlePositionH == 2)
		{
			return;
		}
		else
		{
			middlePositionH++;
			$("middleWindowFocus").style.top = middlePositionH * MIDDLE_TV_MENU_TOP + "px";
		}
	}
	else if(parent.focusType == parent.FOCUS_TV_LITTLE_WINDOW)
	{
		if(littlePositionH == 1)
		{
			return;
		}
		else//littlePositionH == 0
		{
			littlePositionH = 1;
			$("littleWindowFocus").style.top = littlePositionH * LITTLE_TV_MENU_TOP+"px";
		}
	}
	doElementScroll();
}

function toOk()
{
	if(typeof xmlhttpIp == 'object')
	{
		httpLocationTimeout = true;
		xmlhttpIp.abort();
		xmlhttpIp = "";
	}
	if(parent.focusType == parent.FOCUS_TV_LITTLE_WINDOW)
	{
		jumpFunction[littlePositionH*2+littlePositionV].functionName();
	}
	else if(parent.focusType == parent.FOCUS_TV_MIDDLE_WINDOW)
	{//step 1 不限制
		if(top.checkNetStatus() == false && setting.getHomePageTipsNeverShow() == 0)
		{
			testLog("middle ok test 1");
			setting.getHomePageTipsNeverShow();
			parent.showHomePageNetTipsForNever();
		}
		else
		{
			testLog("middle ok test 2");
			if(programStatus > 0)
			{
				if(showLocationListFlag == 0 && ccidNum > middlePositionV + middlePositionH * 3)
				{
				    top.channelLock = 0;
					top.parentalLock = 0;
					top.inputLock = 0;
					top.currentChannelIndex = jsonCCID.ccid[middlePositionV + middlePositionH * 3] - 1;
					top.g_channel.playByIndex(jsonCCID.ccid[middlePositionV + middlePositionH * 3] - 1);
					setSmallScreenPos(1);
					showCurrentChannelInfo();
				}
				else if(showLocationListFlag == 1 && channelList.length > middlePositionV + middlePositionH * 3)
				{
					top.channelLock = 0;
					top.parentalLock = 0;
					top.inputLock = 0;
					top.currentChannelIndex = channelList[middlePositionV + middlePositionH * 3].index;
					top.g_channel.playByIndex(channelList[middlePositionV + middlePositionH * 3].index);
					setSmallScreenPos(1);
					showCurrentChannelInfo();
				}
				else
				{
					parent.showHomePageScanTips(homePageRemind[3]);
				}
			}
			else
			{
				parent.showHomePageScanTips(homePageRemind[1]);
			}
		}
	}
	else if(parent.focusType == parent.FOCUS_TV_BIG_WINDOW)
	{
		top.jumpPage();
        if(top.g_isDownloading == 0)
        {
            top.g_isDownloading = 1;
            setting.restartDownloadUpdateFile();
        }
	}
	doElementScroll();
}

function toBack()
{
	;
}

function toChannelUp()//channel +
{
	var inputSource = top.g_channel.inputSource;
	var programStatus = top.g_channel.channelProgramStatus();
	if(inputSource <= 1 && programStatus == 1  && top.inputLock != 1)
	{
		if(systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23)
		{
			var currentIndex = top.g_channel.currentIndex;
			currentChannelIndex = top.g_channel.getNextIndexByIndex(currentIndex);
			channelChange();
		}
		else
		{
			var currentIndex = top.g_channel.currentIndex;
			var endIndex = top.g_channel.endIndex;
			if(currentIndex >= endIndex || currentChannelIndex >= endIndex)
			{
				top.g_channel.inputSource = 11;
			}
			else
			{
				currentChannelIndex = top.g_channel.getNextIndexByIndex(currentIndex);
				channelChange();
			}
		}
	}
	else if(inputSource <= 1 && (programStatus == 0  || top.inputLock == 1))
	{
		if(systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23)
		{
		}
		else
		{
			top.g_channel.inputSource = 11;
		}
	}
	else if(inputSource > 1)
	{
		if(systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23)
		{
		}
		else
		{
			switch(inputSource)
			{
				case 11:
					top.g_channel.inputSource = 4;
					break;
				case 4:
					top.g_channel.inputSource = 6;
					break;
				case 6:
					top.g_channel.inputSource = 7;
					break;
				case 7:
					top.g_channel.inputSource = 8;
					break;
				case 8:
					top.g_channel.inputSource = 12;
					break;
				case 12:
					top.channelLock = 0;
					top.parentalLock = 0;
					top.inputLock = 0;
					currentChannelIndex = top.g_channel.firstIndex;
					if(currentChannelIndex >= 65535)
					{
						currentChannelIndex = top.g_channel.currentIndex;
					}
					if(currentChannelIndex < 65535)
					{
						top.currentChannelIndex = currentChannelIndex;
						top.g_channel.playByIndex(currentChannelIndex);
					}
					else
					{
						top.g_channel.inputSource = 1;
					}
					break;
				default:
					break;
			}
		}
	}
	showCurrentChannelInfo();
}

function toChannelDown()//channel -
{
	var inputSource = top.g_channel.inputSource;
	var programStatus = top.g_channel.channelProgramStatus();
	if(inputSource <= 1 && programStatus == 1 && top.inputLock != 1)
	{
		if(systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23)
		{
			var currentIndex = top.g_channel.currentIndex;
			currentChannelIndex = top.g_channel.getPreviousIndexByIndex(currentIndex);
			channelChange();
		}
		else
		{
			var currentIndex = top.g_channel.currentIndex;
			var firstIndex = top.g_channel.firstIndex;
			if(currentIndex <= firstIndex ||currentChannelIndex <= firstIndex)
			{
				top.g_channel.inputSource = 12;
			}
			else
			{
				currentChannelIndex = top.g_channel.getPreviousIndexByIndex(currentIndex);
				channelChange();
			}
		}
	}
	else if(inputSource <= 1 && (programStatus == 0  || top.inputLock == 1))
	{
		if(systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23)
		{
		}
		else
		{
			top.g_channel.inputSource = 12;
		}
	}
	else
	{
		if(systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23)
		{
		}
		else
		{
			switch(inputSource)
			{
				case 11:
					top.channelLock = 0;
					top.parentalLock = 0;
					top.inputLock = 0;
					currentChannelIndex = top.g_channel.endIndex;
					if(currentChannelIndex >= 65535)
					{
						currentChannelIndex = top.g_channel.currentIndex;
					}
					if(currentChannelIndex < 65535)
					{
						top.currentChannelIndex = currentChannelIndex;
						top.g_channel.playByIndex(currentChannelIndex);
					}
					else
					{
						top.g_channel.inputSource = 1;
					}
					break;
				case 4:
					top.g_channel.inputSource = 11;
					break;
				case 6:
					top.g_channel.inputSource = 4;
					break;
				case 7:
					top.g_channel.inputSource = 6;
					break;
				case 8:
					top.g_channel.inputSource = 7;
					break;
				case 12:
					top.g_channel.inputSource = 8;
					break;
				default:
					break;
			}
		}
	}
	showCurrentChannelInfo();
}

function channelChange()
{
	if(currentChannelIndex !=top.g_channel.currentIndex && currentChannelIndex < 65535)
	{
		top.g_openMheg5State = 0;
		top.channelLock = 0;
		top.parentalLock = 0;
		top.inputLock = 0;
		top.currentChannelIndex = currentChannelIndex;
		top.g_channel.playByIndex(currentChannelIndex);
	}
}

function showPoster(jsonResultIp, position)//not used?
{
	if(parentalRating != 0 && channel.getProgramParentalRating(jsonCCID.ccid[position] - 1) >= parentalRating)
	{
		$("channelImg" + position).src = defaultPoster[1];
		return;
	}
	else
	{
		$("channelImg" + position).src = defaultPoster[0];
	}
	var MEDIUM = jsonResultIp.results[position].programimg.MEDIUM;
	var LARGE = jsonResultIp.results[position].programimg.LARGE;
	var XLARGE = jsonResultIp.results[position].programimg.XLARGE;
	var SMALL=jsonResultIp.results[position].programimg.SMALL;
	var THUMBNAIL = jsonResultIp.results[position].programimg.THUMBNAIL;
	
	testLog(MEDIUM);
	$("channelImgNet" + position).onerror = function()
	{
		$("channelImgNet" + position).style.display = 'none';
	}
	if(MEDIUM != undefined && MEDIUM.length > 0)
	{
		$("channelImgNet" + position).src = MEDIUM;
		$("channelImgNet" + position).style.display = 'block';
	}
	else if(LARGE != undefined && LARGE.length > 0)
	{
		$("channelImgNet" + position).src = LARGE;
		$("channelImgNet" + position).style.display = 'block';
	}
	else if(XLARGE != undefined && XLARGE.length > 0)
	{
		$("channelImgNet" + position).src = XLARGE;
		$("channelImgNet" + position).style.display = 'block';
	}
	else if(SMALL != undefined && SMALL.length > 0)
	{
		$("channelImgNet" + position).src = SMALL;
		$("channelImgNet" + position).style.display = 'block';
	}
	else if(THUMBNAIL != undefined && THUMBNAIL.length > 0)
	{
		$("channelImgNet" + position).src = THUMBNAIL;
		$("channelImgNet" + position).style.display = 'block';
	}
	else
	{
		$("channelImgNet" + position).style.display = 'none';
	}
}

function showCurrentChannelInfo()
{
	var signalStatus = channel.currentSignalStatus;	
	if(channel.inputSource == 1)
	{
		try
		{
			var screenMode = channel.currentScreenSaverMode;
			if(!signalStatus)
			{
				$("currentProgramRemind").innerHTML = channel_remind[1];
				$("currentProgramRemind").style.display = 'block';
			}
			else if (screenMode == 3 || screenMode == 1)
			{
				$("currentProgramRemind").innerHTML = channel_remind[2];
				$("currentProgramRemind").style.display = 'block';
			}
			else if (screenMode == 6)
			{
				$("currentProgramRemind").innerHTML = channel_remind[4];
				$("currentProgramRemind").style.display = 'block';
			}
			else
			{
				$("currentProgramRemind").style.display = 'none';
			}
			var currentChannel = channel.getCurrentChannelInfo();
			var programList  = currentChannel.getProgramPlayList();
			$("curChannelName").innerHTML = currentChannel.name;
			currentProgramId = programList[0].id;
			if(programList[0].id == -1)
			{
				$("curProgramName").innerHTML = "";
				$("curProgramStartTime").innerHTML = "";
				$("curProgramEndTime").innerHTML = "";
				$("currentPorTimeFinish").style.width = 0 + "px";
				$("currentPorTimeUnFinish").style.width = 0 + "px";
			}
			else
			{
				$("curProgramName").innerHTML = programList[0].name;
				var currentTimeV = changeTimeToSecond(setting.currentTime.substring(0, 5));
				var endTimeV  = changeTimeToSecond(programList[0].endTime);
				var startTimeV = changeTimeToSecond(programList[0].startTime);
				$("curProgramStartTime").innerHTML = programList[0].startTime;
				$("curProgramEndTime").innerHTML = programList[0].endTime;
				currentProgramEndTime = changeTimeToSecond(programList[0].endTime);
				currentProgramStartTime = changeTimeToSecond(programList[0].startTime);
				var duration = 0;
				var finishWidth = 0;
				var unFinishWidth = 0;
				if(currentProgramEndTime >= currentProgramStartTime)
				{
					if(currentTimeV >= startTimeV && currentTimeV <= endTimeV)
					{
						duration = endTimeV - startTimeV;
						finishWidth = parseInt((currentTimeV - startTimeV) * 180 / duration);
						unFinishWidth = parseInt((endTimeV - currentTimeV) * 180 / duration);
						$("currentPorTimeFinish").style.width = finishWidth + "px";
						$("currentPorTimeUnFinish").style.width = unFinishWidth + "px";
					}
					else
					{
						$("curProgramStartTime").innerHTML = "";
						$("curProgramEndTime").innerHTML = "";
						$("currentPorTimeFinish").style.width = 0 + "px";
						$("currentPorTimeUnFinish").style.width = 0 + "px";
					}
				}
				else
				{
					if(currentTimeV > endTimeV && currentTimeV < startTimeV)
					{
						$("curProgramStartTime").innerHTML = "";
						$("curProgramEndTime").innerHTML = "";
						$("currentPorTimeFinish").style.width = 0 + "px";
						$("currentPorTimeUnFinish").style.width = 0 + "px";
					}
					else 
					{
						duration = 24 * 60 * 60 + endTimeV - startTimeV;
						if(currentTimeV >= startTimeV)
						{
							finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
							unFinishWidth = parseInt((24 * 60 * 60 - currentTimeV + endTimeV) * 150 / duration);
						}
						else
						{
							finishWidth = parseInt((24 * 60 * 60 + currentTimeV - startTimeV) * 150 / duration);
							unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
						}
						$("currentPorTimeFinish").style.width = finishWidth + "px";
						$("currentPorTimeUnFinish").style.width = unFinishWidth + "px";
					}
				}
			}
		}
		catch(er)
		{
			channel.testLog(er);
		}
	}
	else
	{
		if(!signalStatus)
		{
			$("currentProgramRemind").innerHTML = channel_remind[1];
			$("currentProgramRemind").style.display = 'block';
		}
		else
		{
			$("currentProgramRemind").style.display = 'none';
		}
		$("curChannelName").innerHTML = "";
		$("curProgramName").innerHTML = "";
		$("curProgramStartTime").innerHTML = "";
		$("curProgramEndTime").innerHTML = "";
		$("currentPorTimeFinish").style.width = 0 + "px";
		$("currentPorTimeUnFinish").style.width = 0 + "px";
	}
	setTimeout(function()
	{
		$("curProgramName").setAttribute("contentText", $("curProgramName").innerHTML);
	},2);
}

function changeTimeToSecond(time)
{
	var timeV = time.split(":");
	return timeV[0] * 60 * 60 + timeV[1] * 60;
}

function getRequestObject()
{
    xmlhttpIp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
}

function reportLocationList(reportJson)
{
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var jsonResult = xmlhttp.responseText;
            testLog("reportLocationList success");
            reportNumber = 0;
            if(programStatus > 0)
			{
				getOnGoingList();
			}
			else
			{
				getNoSearchChannelList();
			}
            clearTimeout(reportLocationHttpTimer);
        }
        else if(xmlhttp.readyState == 4 && xmlhttp.status != 200)
        {
            testLog("reportLocationList fail");
            showLocationList();
        }
    }
    xmlhttp.open("POST", top.g_EpgUpdateUrl+"json", true);
    xmlhttp.send(reportJson);
    testLog("reportLocationList");
}

function repocrLocationInit()
{
	if(top.checkNetStatus())
	{
		reportLocationList(top.g_channel.reportChannelList());
	}
}

function checkVersionUpdate()
{
	testLog("top.g_channel.channelListVersion =" + top.g_channel.channelListVersion);
	checkVersion.param.version = parseInt(top.g_channel.channelListVersion);
	var xmlhttp;
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            testLog("checkVersionUpdate success");
            var jsonResult = xmlhttp.responseText;
			jsonResult = JSON.parse(jsonResult);
			if(jsonResult.error.code == "0")
			{
				// 表示服务器上的版本与本地相同 不用更新数据 可以直接获取数据
				testLog("checkVersionUpdate success no report");
				if(programStatus > 0)
				{
					getOnGoingList();
				}
				else
				{
					getNoSearchChannelList();
				}
			}
			else
			{
				repocrLocationInit();//local version needs updating
			}
        }
        else if(xmlhttp.readyState == 4 && xmlhttp.status != 200)
        {
            testLog("checkVersionUpdate fail");
            repocrLocationInit(); 
        }
    }
    xmlhttp.open("POST",  top.g_EpgUpdateUrl+"json", true);
    xmlhttp.send(JSON.stringify(checkVersion));
    testLog("check Version Update done");
}

function getOnGoingList()
{
    clearTimeout(clearHttpLocationTimer);
    if(xmlhttpIp != null)
    {
        xmlhttpIp.open("POST",  top.g_EpgUpdateUrl+"json", true);
        xmlhttpIp.setRequestHeader("Cache-Control", "no-cache");
        xmlhttpIp.setRequestHeader("Pragma", "no-cache");
        xmlhttpIp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttpIp.onreadystatechange = showOnGoingChannelList;
        xmlhttpIp.send(JSON.stringify(onGoingJson));
        testLog("getOnGoingList");
    }
    function showOnGoingChannelList()
    {
        if(xmlhttpIp.readyState == 4 && xmlhttpIp.status == 200)
        {
            testLog("getOnGoingList success");
            try
            {
                clearTimeout(clearHttpLocationTimer);
                var jsonResult=xmlhttpIp.responseText;
                //testLog("getOnGoingList success jsonResult="+jsonResult);
                jsonResult = JSON.parse(jsonResult);
                if(jsonResult.version != undefined && jsonResult.version != top.g_channel.channelListVersion)
                {
                	return;
                }
                showLocationListFlag = 0;
                ccidNum = jsonResult.num;
				testLog("getOnGoingList success ccidNum=" + ccidNum);
                for(var i = 0; i < jsonResult.num; i++)
                {
                    showProgramInfo(jsonResult, i);
					showPoster(jsonResult, i);
                }
                for(var j = jsonResult.num; j < 9; j++)
                {
                    $("channelName" + j).innerHTML = channelRemind[0];
                    $("programInfo" + j).style.display = 'none';
                }
            }
            catch(er)
            {
                testLog("er:" + er);
            }
        }
        else if(xmlhttpIp.readyState == 4 && xmlhttpIp.status != 200)
        {
            testLog("getOnGoingList fail");
            showLocationList();
        }
    }
}

function showTV()
{
	showCurrentChannelInfo();
	channelList = channel.getRemChannelList();
	programStatus = channelList.length;
    showLocationList();
    if(top.checkNetStatus())
	{
		getRequestObject();
		checkVersionUpdate();
	}
}

function setSmallScreenPos(type)//[0]full screen, [other] small screen
{
	if(type == 0)//full screen
	{
		setting.scaleVideoWindow(0, 0, 0, 0);
		return;
	}

	if(setting.isHDScreen == 1)
	{
		setting.scaleVideoWindow(130, 240, 610, 344);
	}
	else
	{
		setting.scaleVideoWindow(90, 170, 440, 240);
	}
}

function changeCountry()
{
	var currentCountry = channel.systemCountry;
	var i = mlmCountryIndex.indexOf(currentCountry);
	if(i == -1)
	{
		i = 0;
	}
	nonSacnChannelsJson.param.country = country[i];
}

function channgeLanguage()
{
	var currentLanguage = top.g_setting.menuLanguage;
	var i = mlmLangIndex.indexOf(currentLanguage);
	nonSacnChannelsJson.param.language = language[i];
}

function hiddenProgramInfo(position)
{
	 tvMiddelProgramInfoSpan = $("programInfo" + position).getElementsByTagName("span");
	 tvMiddelProgramInfoDiv = $("programInfo" + position).getElementsByTagName("div");
	 $("programInfo" + position).style.display = 'none';
	 tvMiddelProgramInfoDiv[0].style.display = 'none';
	 tvMiddelProgramInfoSpan[0].innerHTML = "";
	 tvMiddelProgramInfoSpan[1].innerHTML = "";
	 tvMiddelProgramInfoSpan[2].innerHTML = "";
}

function showProgramInfo(jsonResultIp, position)
{
	$("channelName" + position).innerHTML = jsonResultIp.results[position].channelname;
	tvMiddelProgramInfoSpan = $("programInfo" + position).getElementsByTagName("span");
	tvMiddelProgramInfoDiv = $("programInfo" + position).getElementsByTagName("div");
	$("programInfo"+position).style.display='block';
	tvMiddelProgramInfoSpan[0].innerHTML = jsonResultIp.results[position].title;
	tvMiddelProgramInfoSpan[1].innerHTML = setting.secondToTime(
		parseInt(jsonResultIp.results[position].start_time)
		+ parseInt(setting.currentOffsetTime)).substring(0, 5);
	tvMiddelProgramInfoSpan[2].innerHTML = setting.secondToTime(
		parseInt(jsonResultIp.results[position].end_time) 
		+ parseInt(setting.currentOffsetTime)).substring(0, 5);
	jsonCCID.ccid[position] = jsonResultIp.results[position].ccid;
	jsonCCID.startTime[position] = jsonResultIp.results[position].start_time;
	jsonCCID.endTime[position] = jsonResultIp.results[position].end_time;
	var currentTimeV = setting.getUtcTime;
	var endTimeV  = jsonCCID.endTime[position];
	var startTimeV = jsonCCID.startTime[position];
	var duration = endTimeV - startTimeV;
	testLog("currentTimeV==" + currentTimeV + ", startTimeV==" + startTimeV + ", endTimeV==" + endTimeV);
	if(currentTimeV >= startTimeV && currentTimeV <= endTimeV)
	{
		var finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
		var unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
		tvMiddelProgramInfoDiv[1].style.width = finishWidth + "px";
		tvMiddelProgramInfoDiv[2].style.width = unFinishWidth + "px";
		tvMiddelProgramInfoDiv[0].style.display = 'block';
	}
	else
	{
		tvMiddelProgramInfoDiv[1].style.width = 0 + "px";
		tvMiddelProgramInfoDiv[2].style.width = 0 + "px";
		tvMiddelProgramInfoDiv[0].style.display = 'none';
	}
}

function showUpdateEpg()
{
	var currentTime = setting.currentBaseTime;
	var currentUTCTime = setting.getUtcTime;
	var currentTimeV = changeTimeToSecond(setting.secondToTime(currentTime));
	if(currentProgramId != -1)
	{
		if(currentProgramEndTime >= currentProgramStartTime && currentProgramEndTime < currentTimeV)
		{
			showCurrentChannelInfo();
		}
		else if(currentProgramEndTime < currentProgramStartTime)
		{
			if(currentTimeV > currentProgramEndTime && currentTimeV < currentProgramStartTime)
			{
				showCurrentChannelInfo();
			}
		}
	}

	for(var i = 0; i < 9; i++)
	{
		if(showLocationListFlag == 0)
		{
			var ProgramInfoDiv = $("programInfo" + i).getElementsByTagName("div");
			if(jsonCCID.endTime[i] < currentUTCTime)
			{
				if(programStatus > 0)
				{
					getOnGoingList();
				}
				else
				{
					getNoSearchChannelList();
				}
				return;
			}
			else
			{
				var endTimeV  = jsonCCID.endTime[i];
				var startTimeV = jsonCCID.startTime[i];
				var duration = endTimeV - startTimeV;
				var finishWidth = parseInt((currentUTCTime - startTimeV) * 150 / duration);
				var unFinishWidth = parseInt((endTimeV - currentUTCTime) * 150 / duration);
				if(currentUTCTime >= startTimeV && currentUTCTime <= endTimeV)
				{
					ProgramInfoDiv[1].style.width = finishWidth + "px";
					ProgramInfoDiv[2].style.width = unFinishWidth + "px";
				}
			}
		}
		else
		{
			if(i < programStatus)
			{
				try
				{
					var ProgramInfoDiv = $("programInfo" + i).getElementsByTagName("div");
					var programList = channelList[i].getProgramPlayList();
					if(jsonCCID.Tv_id[i] == -1)
					{
						continue;
					}
					else
					{
						testLog("jsonCCID.endTime["+i+"]="+jsonCCID.endTime[i]+"currentTime="+currentTime);
						if((jsonCCID.endTime[i] > jsonCCID.startTime[i]) && jsonCCID.endTime[i] < currentTime)
						{
							channelList = channel.getRemChannelList();
							showLocationList();
							return;
						}
						else if((jsonCCID.endTime[i] < jsonCCID.startTime[i])
							&& (jsonCCID.endTime[i] < currentTime)
							&& (jsonCCID.startTime[i] > currentTime))
						{
							channelList = channel.getRemChannelList();
							showLocationList();
							return;
						}
						else
						{
							var endTimeV  = changeTimeToSecond(setting.secondToTime(jsonCCID.endTime[i]));
							var startTimeV = changeTimeToSecond(setting.secondToTime(jsonCCID.startTime[i]));
							var duration = 0;
							var finishWidth = 0;
							var unFinishWidth = 0;
							if(endTimeV >= startTimeV)
							{
								duration = endTimeV - startTimeV;
								if(currentTimeV > startTimeV && currentTimeV < endTimeV)
								{
									finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
									unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
									ProgramInfoDiv[1].style.width = finishWidth + "px";
									ProgramInfoDiv[2].style.width = unFinishWidth + "px";
								}
								else
								{
									ProgramInfoDiv[1].style.width = finishWidth + "px";
									ProgramInfoDiv[2].style.width = unFinishWidth + "px";
								}
							}
							else
							{
								if(currentTimeV > endTimeV && currentTimeV < startTimeV)
								{
									ProgramInfoDiv[1].style.width = 0 + "px";
									ProgramInfoDiv[2].style.width = 0 + "px";
								}
								else
								{
									duration = 24 * 60 * 60 - startTimeV + endTimeV;
									if(currentTimeV >= startTimeV)
									{
										finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
										unFinishWidth = parseInt((24 * 60 * 60 - currentTimeV + endTimeV) * 150 / duration);
									}
									else
									{
										finishWidth = parseInt((24 * 60 * 60 + currentTimeV - startTimeV) * 150 / duration);
										unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
									}
									ProgramInfoDiv[1].style.width = finishWidth + "px";
									ProgramInfoDiv[2].style.width = unFinishWidth + "px";
								}
							}
						}
					}
				}
				catch(er)
				{
					testLog("showUpdateEpg:" + er + ", showLocationListFlag = " + showLocationListFlag);
				}
			}
		}
		/*
		if(wireStatus == 1 || wirelessStatus == 1 && jsonCCID.Tv_id[i] != "")
		{
			var ProgramInfoDiv = $("programInfo" + i).getElementsByTagName("div");
			var currentTime = setting.currentBaseTime;
			if(jsonCCID.endTime[i] < currentTime)
			{
				showALlIpEpg();
				return;
			}
			else
			{
				var currentTimeV = changeTimeToSecond(setting.secondToTime(currentTime));
			    var endTimeV  = changeTimeToSecond(setting.secondToTime(jsonCCID.endTime[i]));
				var startTimeV = changeTimeToSecond(setting.secondToTime(jsonCCID.startTime[i]));
				var duration = endTimeV - startTimeV;
				var finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
				var unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
				if(currentTimeV >= startTimeV && currentTimeV <= endTimeV)
				{
					ProgramInfoDiv[1].style.width = finishWidth + "px";
					ProgramInfoDiv[2].style.width = unFinishWidth + "px";
				}
			}
		}*/
	}
}

/*
function showALlIpEpg()
{
	try
	{
		xmlhttpIp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		httpTimeOut = false;
		if(xmlhttpIp != null)
		{
			testLog("xmlhttpIP:not null can send http : " + getTimeAreaProgramsJson);
			xmlhttpIp.open("POST", "http://overseas.huantest.com/json", true);
			xmlhttpIp.setRequestHeader("Cache-Control", "no-cache");
			xmlhttpIp.onreadystatechange = showEPG;
			clearHttpTimer = setTimeout(function(){
				httpTimeOut = true;
				if(typeof xmlhttpIp == 'object')
					xmlhttpIp.abort();
				xmlhttpIp = "";
				testLog("xmlhttpIp:time out:");
				},5000);
			xmlhttpIp.send(getTimeAreaProgramsJson);
		 }
	}
	catch(er)
	{
		testLog("showAllIpEpg:" + er+ ":&nbsp;&nbsp; " + getTimeAreaProgramsJson);
	}

	function showEPG(){
		if(httpTimeOut == true)
		{
			testLog("xmlhttpIp:time out no Text return:");
			return;
		}
		if(xmlhttpIp.readyState == 4 && xmlhttpIp.status == 200)
		{
			testLog("xmlhttpIp:get Text:")
			clearTimeout(clearHttpTimer);
			var jsonResultIp = xmlhttpIp.responseText;
			jsonResultIp = eval("(" + jsonResultIp + ")");
			var currentTime = setting.currentBaseTime;
			if(jsonResultIp.error.code != "0")
			{
				return;
			}
			try
			{
				for(var position = 0;position < jsonResultIp.num; position++)
				{
					var i = 0;
					for(;i<jsonResultIp.results[position].programs.length;i++)
					{
						if(currentTime >= jsonResultIp.results[position].programs[i].start_time
							&& currentTime <= jsonResultIp.results[position].programs[i].end_time)
						{
								break;
						}
					}
					if(i < jsonResultIp.results[position].programs.length)
					{
						tvMiddelProgramInfoSpan = $("programInfo" + position).getElementsByTagName("span");
						tvMiddelProgramInfoDiv = $("programInfo" + position).getElementsByTagName("div");
						$("programInfo" + position).style.display = 'block';
						tvMiddelProgramInfoSpan[0].innerHTML = jsonResultIp.results[position].programs[i].title;
						tvMiddelProgramInfoSpan[1].innerHTML = setting.secondToTime(jsonResultIp.results[position].programs[i].start_time).substring(0, 5);
						tvMiddelProgramInfoSpan[2].innerHTML = setting.secondToTime(jsonResultIp.results[position].programs[i].end_time).substring(0, 5);
						jsonCCID.startTime[position] = jsonResultIp.results[position].programs[i].start_time;
						jsonCCID.endTime[position] = jsonResultIp.results[position].programs[i].end_time;
						var currentTimeV = changeTimeToSecond(setting.secondToTime(currentTime));
						var endTimeV  = changeTimeToSecond(setting.secondToTime(jsonResultIp.results[position].programs[i].end_time));
						var startTimeV = changeTimeToSecond(setting.secondToTime(jsonResultIp.results[position].programs[i].start_time));
						var duration = endTimeV - startTimeV;
						if(currentTimeV >= startTimeV && currentTimeV <= endTimeV)
						{
							var finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
							var unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
							tvMiddelProgramInfoDiv[1].style.width = finishWidth + "px";
							tvMiddelProgramInfoDiv[2].style.width = unFinishWidth + "px";
							tvMiddelProgramInfoDiv[0].style.display = 'block';
						}
						else
						{
							tvMiddelProgramInfoDiv[1].style.width = 0 + "px";
							tvMiddelProgramInfoDiv[2].style.width = 0 + "px";
							tvMiddelProgramInfoDiv[0].style.display = 'none';
						}
					}
					else
					{
						tvMiddelProgramInfoSpan = $("programInfo" + position).getElementsByTagName("span");
						tvMiddelProgramInfoDiv = $("programInfo" + position).getElementsByTagName("div");
						$("programInfo" + position).style.display = 'none';
						tvMiddelProgramInfoDiv[0].style.display = 'none';
						tvMiddelProgramInfoSpan[0].innerHTML = "";
						tvMiddelProgramInfoSpan[1].innerHTML = "";
						tvMiddelProgramInfoSpan[2].innerHTML = "";
					}
					if(i < jsonResultIp.results[position].programs.length)
					{
						if(jsonResultIp.results[position].programs[i].img.MEDIUM != undefined)
						{
							$("channelImgNet" + position).src = jsonResultIp.results[position].programs[i].img.MEDIUM;
							$("channelImgNet" + position).style.display = 'block';
						}
						else if(jsonResultIp.results[position].programs[i].img.LARGE != undefined)
						{
							$("channelImgNet" + position).src = jsonResultIp.results[position].programs[i].img.LARGE;
							$("channelImgNet" + position).style.display = 'block';
						}
						else if(jsonResultIp.results[position].programs[i].img.XLARGE != undefined)
						{
							$("channelImgNet" + position).src = jsonResultIp.results[position].programs[i].img.XLARGE;
							$("channelImgNet" + position).style.display = 'block';
						}
						else if(jsonResultIp.results[position].programs[i].img.SMALL != undefined)
						{
							$("channelImgNet" + position).src = jsonResultIp.results[position].programs[i].img.SMALL;
							$("channelImgNet" + position).style.display = 'block';
						}
						else if(jsonResultIp.results[position].programs[i].img.THUMBNAIL != undefined)
						{
							$("channelImgNet" + position).src = jsonResultIp.results[position].programs[i].img.THUMBNAIL;
							$("channelImgNet" + position).style.display = 'block';
						}
						else
						{
							$("channelImgNet" + position).style.display = 'none';
						}
							
					}
					else
					{
						$("channelImgNet" + position).style.display = 'none';
					}
				}
			}
			catch(er)
			{
				testLog("allIpEpg:" + er);
			}
			if(typeof xmlhttpIp == 'object')
			{
				xmlhttpIp.abort();
				xmlhttpIp = "";
				jsonResultIp = "";
			}
		}
		else if(xmlhttpIp.readyState == 4 && xmlhttpIp.status != 200)
		{
			if(typeof xmlhttpIp == 'object')
			{
				xmlhttpIp.abort();
				xmlhttpIp = "";
			}
		}
	}
}

function showIPEPGList()
{
	try
	{
		if(typeof xmlhttp == 'object')
			xmlhttp.abort();
		xmlhttp = "";
		httpLocationTimeout = false;
		xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		if(xmlhttp != null)
		{
			testLog("showIPEPGList: xmlhttp not null can send http");
			xmlhttp.open("POST", "http://overseas.huantest.com/json", true);
			xmlhttp.onreadystatechange = showList;
			clearHttpLocationTimer = setTimeout(function(){
				httpLocationTimeout = true;
				if(typeof xmlhttp == 'object')
					xmlhttp.abort();
				xmlhttp="";
				},5000);
			xmlhttp.send(getLocalChannelListJson);
		}
	}
	catch(er)
	{
		testLog("showIPEPGList:" + er);
	}

	function showList()
	{
		if(httpLocationTimeout)
		{
			return;
		}
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			try
			{
				clearTimeout(clearHttpLocationTimer);
				var jsonResult = xmlhttp.responseText;
				jsonResult = eval("(" + jsonResult + ")");
				if(jsonResult.error.code != "0")
				{
					showLocationList();
					return;
				}
				showLocationListFlag = 0;
				ccidNum = jsonResult.num;
				for(var i = 0; i < jsonResult.num; i++)
				{
					$("channelName" + i).innerHTML = jsonResult.results.tvchannels[i].name;
					jsonCCID.ccid[i] = jsonResult.results.tvchannels[i].ccid;
					jsonCCID.Tv_id[i] = jsonResult.results.tvchannels[i].tvchannel_id;
					jsonTostr("", jsonResult.results.tvchannels[i].tvchannel_id, i);
					if(jsonResult.results.tvchannels[i].id != "")
					{
					}
					else
					{
						$("programInfo" + i).style.display = 'none';
						jsonCCID.startTime[i] = "0";
						jsonCCID.endTime[i] = "0";
					}
				}
				for(var j = jsonResult.num; j < 9; j++)
				{
					jsonTostr("", "", j);
					$("channelName" + j).innerHTML = channelNoProgramRemind;
					$("programInfo" + j).style.display = 'none';
				}
				if(typeof xmlhttp == 'object')
					xmlhttp.abort();
				xmlhttp = "";
				showALlIpEpg();
			}
			catch(er)
			{
				testLog("er = " + er);
				if(typeof xmlhttp == 'object')
					xmlhttp.abort();
				xmlhttp = "";
				showLocationList();
			}
		}
		else if(xmlhttp.readyState == 4 && xmlhttp.status != 200)
		{
			try
			{
				if(typeof xmlhttp == 'object')
					xmlhttp.abort();
				xmlhttp = "";
				showLocationList();
			}
			catch(er)
			{
				testLog(er);
			}
		}
	}
}
*/

function toJumpIPEPG()
{
	clearTimeout(showNotAvailableTimer);
	if(!top.checkNetStatus() || !setting.guideOnSwitch)
	{
		top.g_previousHtmlPage = "channelPlay.html";
		if(top.g_channel.inputSource == 1 && top.inputLock != 1)
		{
			top.$("main").src = "programGuide.html";
		}
		else
		{
			top.setFrameFocusPage("operatePage");
			top.g_remindWord = "notAvailable";
			top.$("operatePage").src = "intermediate.html";
			showNotAvailableTimer = setTimeout(function()
			{
				top.$("operatePage").src = "";
				top.setFrameFocusPage("main");
			},3000);
		}
	}
	else
	{
		top.g_previousHtmlPage = "channelPlay.html";
		if(top.g_channel.inputSource == 1 && top.inputLock != 1)
		{
			setSmallScreenPos(0);
			top.lastInputSource = top.g_channel.inputSource;
			top.appOpenFlag = 1;
			top.g_ulits.setKeySet(0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x800, 2, 0);
			top.$("main").style.display = 'none';
			top.$("operatePage").style.display = 'none';
			top.$("otherPage").style.display = 'none';
			top.$("main").src = "channelPlay.html";
			top.menu_visible_status = 0;
			top.$("operatePage").src = "";
			top.$("otherPage").src = "";
			top.g_ulits.openApplication("opera.ipepg", "-u "+top.g_EpgUpdateUrl);
		}
		else
		{
			top.setFrameFocusPage("operatePage");
			top.g_remindWord = "notAvailable";
			top.$("operatePage").src = "intermediate.html";
			showNotAvailableTimer = setTimeout(function()
			{
				top.$("operatePage").src = "";
				top.setFrameFocusPage("main");
			}, 3000);
		}
	}
}

function toJumpApp()
{
	if(top.checkNetStatus() ==false)
	{
		parent.showHomePageNetTips();
		return;
	}
	setSmallScreenPos(0);
	top.lastInputSource = top.g_channel.inputSource;
	top.appOpenFlag = 1;
	top.g_ulits.setKeySet(0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x800, 2, 0);
	top.$("main").style.display = 'none';
	top.$("operatePage").style.display = 'none';
	top.$("otherPage").style.display = 'none';
	top.g_ulits.openApplication("opera.mmh","");
}

function toJumpMedia()
{
	usbLock = factory.usbLock;
	hotelEnable = factory.hotelEnable;
	top.$('main').src = usbLock && hotelEnable ? "password.html?usbLock" : "deviceList.html";
	top.main.focus();
}
function toJumpSource()
{
	top.$("main").onload = function()
	{
		top.resetFramePacking3DMode();
		top.$("main").onload = function(){};
	}
	top.$('main').src = "inputSource.html";
	top.main.focus();
}

function toJumpSetting()
{
	top.$("main").onload = function()
	{
		top.resetFramePacking3DMode();
		top.$("main").onload = function(){};
	}
	top.$('main').src ="index.html";
	top.main.focus();
}
function getNoSearchChannelList()
{
	if(xmlhttpIp!=null)
	{
		xmlhttpIp.open("POST",top.g_EpgUpdateUrl+"json",true);
		xmlhttpIp.setRequestHeader("Cache-Control", "no-cache");
		xmlhttpIp.setRequestHeader("Pragma", "no-cache");
		xmlhttpIp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttpIp.onreadystatechange = showNoSearchChannelList;
		xmlhttpIp.send(JSON.stringify(nonSacnChannelsJson));
		testLog("in get No Search Channel List");
	}
    function showNoSearchChannelList()
    {
        if(xmlhttpIp.readyState == 4 && xmlhttpIp.status == 200)
        {
            testLog("getNoSearchChannelList success");
            try
            {
                getLocalListNumber = 0;
                clearTimeout(clearHttpLocationTimer);
                var jsonResult = xmlhttpIp.responseText;
                jsonResult = eval("(" + jsonResult + ")");
                if(jsonResult.error.code != "0")
                {
					 testLog("getNoSearchChannelList fail");
                    return;
                }
                showLocationListFlag = 2;
                var length = jsonResult.results.length;
                for(var i = 0; i < length; i++)
                {
                    $("channelName" + i).innerHTML = jsonResult.results[i].channelname;
                    tvMiddelProgramInfoSpan = $("programInfo" + i).getElementsByTagName("span");
                    tvMiddelProgramInfoDiv = $("programInfo" + i).getElementsByTagName("div");
                    $("programInfo" + i).style.display = 'block';
                    tvMiddelProgramInfoSpan[0].innerHTML = jsonResult.results[i].title;
                    currentTime = setting.getUtcTime;
                    jsonCCID.startTime[i] = jsonResult.results[i].start_time;
                    jsonCCID.endTime[i] = jsonResult.results[i].end_time;
                    var currentTimeV = currentTime;
                    var endTimeV  = jsonCCID.endTime[i];
                    var startTimeV = jsonCCID.startTime[i];
                    var duration = endTimeV - startTimeV;
                    if(currentTimeV >= startTimeV && currentTimeV <= endTimeV)
                    {
                        var finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
                        var unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
                        tvMiddelProgramInfoDiv[1].style.width = finishWidth + "px";
                        tvMiddelProgramInfoDiv[2].style.width = unFinishWidth + "px";
                        tvMiddelProgramInfoDiv[0].style.display = 'block';
                        tvMiddelProgramInfoSpan[1].innerHTML = setting.secondToTime(parseInt(jsonResult.results[i].start_time)
                        	+ parseInt(setting.currentOffsetTime)).substring(0, 5);
                        tvMiddelProgramInfoSpan[2].innerHTML = setting.secondToTime(parseInt(jsonResult.results[i].end_time)
                        	+ parseInt(setting.currentOffsetTime)).substring(0, 5);
                    }
                    else
                    {
                        tvMiddelProgramInfoDiv[1].style.width = 0 + "px";
                        tvMiddelProgramInfoDiv[2].style.width = 0 + "px";
                        tvMiddelProgramInfoDiv[0].style.display = 'none';
                        tvMiddelProgramInfoSpan[1].innerHTML = "";
                        tvMiddelProgramInfoSpan[2].innerHTML = "";
                    }
                    if(jsonResult.results[i].programimg.MEDIUM != undefined
                    	&& jsonResult.results[i].programimg.MEDIUM.length > 0)
                    {
                        $("channelImgNet" + i).src = jsonResult.results[i].programimg.MEDIUM;
                        $("channelImgNet" + i).style.display = 'block';
                    }
                    else if(jsonResult.results[i].programimg.SMALL != undefined 
                    	&& jsonResult.results[i].programimg.SMALL.length > 0)
                    {
                        $("channelImgNet" + i).src = jsonResult.results[i].programimg.SMALL;
                        $("channelImgNet" + i).style.display = 'block';
                    }
                    else if(jsonResult.results[i].programimg.THUMBNAIL != undefined
                    	&& jsonResult.results[i].programimg.THUMBNAIL.length > 0)
                    {
                        $("channelImgNet" + i).src = jsonResult.results[i].programimg.THUMBNAIL;
                        $("channelImgNet" + i).style.display = 'block';
                    }
                    else
                    {
                        $("channelImgNet" + i).style.display = 'none';
                    }
                    
                }
                for(var j = length; j < 9; j++)
                {
                    $("channelName" + j).innerHTML = channelRemind[0];
                    $("programInfo" + j).style.display = 'none';
                    tvMiddelProgramInfoSpan = $("programInfo" + j).getElementsByTagName("span");
                    tvMiddelProgramInfoDiv = $("programInfo" + j).getElementsByTagName("div");
                    tvMiddelProgramInfoDiv[0].style.display = 'none';
                    tvMiddelProgramInfoSpan[0].innerHTML = "";
                    tvMiddelProgramInfoSpan[1].innerHTML = "";
                    tvMiddelProgramInfoSpan[2].innerHTML = "";
                    $("channelImgNet" + j).style.display = 'none';
                }
            }
            catch(er)
            {
                xmlhttpIp.abort();
                xmlhttpIp = "";
            }
        }
        else if(xmlhttpIp.readyState == 4 && xmlhttpIp.status != 200)
        {
            testLog("getNoSearchChannelList fail");
            getLocalListNumber = 0;
            xmlhttpIp.abort();
            xmlhttpIp = "";
            showLocationList();
        }
    }
}

function getNoSearchChannelList_bak()
{
	xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	httpLocationTimeout = false;
	xmlhttp.open("POST", "http://overseas.huantest.com/json", true);
	xmlhttp.onreadystatechange = showNoSearchChannelList;

	clearHttpLocationTimer = setTimeout(function()
	{
		httpLocationTimeout = true;
		if(typeof xmlhttp == 'object')
			xmlhttp.abort();
		xmlhttp = "";
	},5000);
	xmlhttp.send(nonSacnChannelsJson);

	function showNoSearchChannelList()
	{
		if(httpLocationTimeout)
		{
			return;
		}
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			try
			{
				clearTimeout(clearHttpLocationTimer);
				var jsonResult = xmlhttp.responseText;
				//testLog("jsonResultNo="+jsonResult);
				jsonResult = eval("(" + jsonResult + ")");
				if(jsonResult.error.code != "0")
				{
					return;
				}
				var length = jsonResult.results.length;
				for(var i = 0;i < length; i++)
				{
					$("channelName" + i).innerHTML = jsonResult.results[i].channelname;
					var tvMiddelProgramInfoSpan = $("programInfo" + i).getElementsByTagName("span");
					var tvMiddelProgramInfoDiv = $("programInfo" + i).getElementsByTagName("div");
					$("programInfo" + i).style.display = 'block';
					tvMiddelProgramInfoSpan[0].innerHTML = jsonResult.results[i].title;
					tvMiddelProgramInfoSpan[1].innerHTML = setting.secondToTime(jsonResult.results[i].start_time).substring(0, 5);
					tvMiddelProgramInfoSpan[2].innerHTML = setting.secondToTime(jsonResult.results[i].end_time).substring(0, 5);
					var currentTime = setting.currentBaseTime;
					jsonCCID.startTime[i] = jsonResult.results[i].start_time;
					jsonCCID.endTime[i] = jsonResult.results[i].end_time;
					jsonCCID.Tv_id[i] = jsonResult.results[i].tvchannel_id;
					var currentTimeV = changeTimeToSecond(setting.secondToTime(currentTime));
					var endTimeV  = changeTimeToSecond(setting.secondToTime(jsonResult.results[i].end_time));
					var startTimeV = changeTimeToSecond(setting.secondToTime(jsonResult.results[i].start_time));
					var duration = endTimeV - startTimeV;
					if(currentTimeV >= startTimeV && currentTimeV <= endTimeV)
					{
						var finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
						var unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
						tvMiddelProgramInfoDiv[1].style.width = finishWidth + "px";
						tvMiddelProgramInfoDiv[2].style.width = unFinishWidth + "px";
						tvMiddelProgramInfoDiv[0].style.display = 'block';
					}
					else
					{
						tvMiddelProgramInfoDiv[1].style.width = 0 + "px";
						tvMiddelProgramInfoDiv[2].style.width = 0 + "px";
						tvMiddelProgramInfoDiv[0].style.display = 'none';
					}
					if(jsonResult.results[i].programimg.MEDIUM != undefined)
					{
						$("channelImgNet" + i).src = jsonResult.results[i].programimg.MEDIUM;
						$("channelImgNet" + i).style.display = 'block';
					}
					else if(jsonResult.results[i].programimg.SMALL != undefined)
					{
						$("channelImgNet" + i).src = jsonResult.results[i].programimg.SMALL;
						$("channelImgNet" + i).style.display = 'block';
					}
					else if(jsonResult.results[i].programimg.THUMBNAIL != undefined)
					{
						$("channelImgNet" + i).src = jsonResult.results[i].programimg.THUMBNAIL;
						$("channelImgNet" + i).style.display = 'block';
					}
					else
					{
						$("channelImgNet" + i).style.display = 'none';
					}
				}
				for(var j = length;j < 9; j++)
				{
					$("channelName" + j).innerHTML = channelNoProgramRemind;
					$("programInfo" + j).style.display = 'none';
					tvMiddelProgramInfoSpan = $("programInfo" + j).getElementsByTagName("span");
					tvMiddelProgramInfoDiv = $("programInfo" + j).getElementsByTagName("div");
					tvMiddelProgramInfoDiv[0].style.display = 'none';
					tvMiddelProgramInfoSpan[0].innerHTML = "";
					tvMiddelProgramInfoSpan[1].innerHTML = "";
					tvMiddelProgramInfoSpan[2].innerHTML = "";
					$("channelImgNet" + j).style.display = 'none';
				}
				if(typeof xmlhttp == 'object')
					xmlhttp.abort();
				xmlhttp = "";
			}
			catch(er)
			{
				if(typeof xmlhttp == 'object')
					xmlhttp.abort();
				xmlhttp = "";
				testLog("er =" + er);
			}
		}
		else if(xmlhttp.readyState == 4 && xmlhttp.status != 200)
		{
			if(typeof xmlhttp == 'object')
				xmlhttp.abort();
			xmlhttp = "";
			showLocationList();
		}
	}
}

function showLocationList()
{
	try
	{
		showLocationListFlag = 1;
		for(var i = 0; i < 9; i++)
		{
			tvMiddelProgramInfoSpan = $("programInfo" + i).getElementsByTagName("span");
			tvMiddelProgramInfoDiv = $("programInfo" + i).getElementsByTagName("div");
			if(i < channelList.length)
			{
				$("channelName" + i).innerHTML = channelList[i].name;
				var programList = channelList[i].getProgramPlayList();
				if(programList[0].id == -1)
				{
					$("programInfo" + i).style.display = 'none';
				}
				else
				{
					$("programInfo" + i).style.display = 'block';
					tvMiddelProgramInfoSpan[0].innerHTML = programList[0].name;
					tvMiddelProgramInfoSpan[1].innerHTML = programList[0].startTime;
					tvMiddelProgramInfoSpan[2].innerHTML = programList[0].endTime;
					jsonCCID.endTime[i] = changeTimeToSecond(programList[0].endTime);
					jsonCCID.startTime[i] = changeTimeToSecond(programList[0].startTime);
					var currentTimeV = changeTimeToSecond(setting.currentTime.substring(0,5));
					var endTimeV  = changeTimeToSecond(programList[0].endTime);
					var startTimeV = changeTimeToSecond(programList[0].startTime);
					var duration = 0;
					var finishWidth = 0;
					var unFinishWidth = 0;
					if(endTimeV >= startTimeV)
					{
						duration = endTimeV-startTimeV;
						
						if(currentTimeV > startTimeV && currentTimeV < endTimeV)
						{
							finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
							unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
							tvMiddelProgramInfoDiv[1].style.width = finishWidth + "px";
							tvMiddelProgramInfoDiv[2].style.width = unFinishWidth + "px";
							tvMiddelProgramInfoDiv[0].style.display = 'block';
						}
						else
						{
							tvMiddelProgramInfoDiv[1].style.width = 0 + "px";
							tvMiddelProgramInfoDiv[2].style.width = 0 + "px";
							tvMiddelProgramInfoDiv[0].style.display = 'block';
						}
					}
					else
					{
						if(currentTimeV > endTimeV && currentTimeV < startTimeV)
						{
							tvMiddelProgramInfoDiv[1].style.width = 0 + "px";
							tvMiddelProgramInfoDiv[2].style.width = 0 + "px";
							tvMiddelProgramInfoDiv[0].style.display = 'block';
						}
						else
						{
							duration = 24 * 60 * 60 - startTimeV + endTimeV;
							if(currentTimeV >= startTimeV)
							{
								finishWidth = parseInt((currentTimeV - startTimeV) * 150 / duration);
								unFinishWidth = parseInt((24 * 60 * 60 - currentTimeV + endTimeV) * 150 / duration);
							}
							else
							{
								finishWidth = parseInt((24 * 60 * 60 + currentTimeV - startTimeV) * 150 / duration);
								unFinishWidth = parseInt((endTimeV - currentTimeV) * 150 / duration);
							}
							tvMiddelProgramInfoDiv[1].style.width = finishWidth + "px";
							tvMiddelProgramInfoDiv[2].style.width = unFinishWidth + "px";
							tvMiddelProgramInfoDiv[0].style.display = 'block';
						}
					}
					
					$("channelImg" + i).src = (top.g_setting.parentalRating != 0 
						&& programList[0].parentRate >= top.g_setting.parentalRating)
						? defaultPoster[1] : defaultPoster[0];
				}
			}
			else
			{
				$("channelName" + i).innerHTML = channelNoProgramRemind;
				tvMiddelProgramInfoDiv[0].style.display = 'none';
				tvMiddelProgramInfoSpan[0].innerHTML = "";
				tvMiddelProgramInfoSpan[1].innerHTML = "";
				tvMiddelProgramInfoSpan[2].innerHTML = "";
			}
		}
	}
	catch(er)
	{
		testLog("showLocationList:" + er);
	}
}

function doElementScroll()
{
	var spanLittleList = $("littleList").getElementsByTagName("span");
	var spanMiddleList = $("middleList").getElementsByClassName("programName");
	var spanBigList = $("currentProgram").getElementsByClassName("programName");
	var focusPosition = 0;// littlePositionV + littlePositionH * 2;
	//setScrollAttribute(spanList,focusPosition);

	if(parent.focusType == parent.FOCUS_TITLE_TV 
		|| parent.focusType == parent.FOCUS_TITLE_APP
		|| parent.focusType == parent.FOCUS_TITLE_VIDEO)
	{
		resetScrollAttribute(spanMiddleList);
		resetScrollAttribute(spanLittleList);
		resetScrollAttribute(spanBigList);
	}
	else if(parent.focusType == parent.FOCUS_TV_LITTLE_WINDOW)
	{
		resetScrollAttribute(spanBigList);
		resetScrollAttribute(spanMiddleList);
		focusPosition = littlePositionV + littlePositionH * 2;
		setScrollAttribute(spanLittleList, focusPosition);
		setTimeout(function(){resetScrollHtmlInner(spanLittleList);}, 1);
	}
	else if(parent.focusType == parent.FOCUS_TV_MIDDLE_WINDOW)
	{
		resetScrollAttribute(spanLittleList);
		resetScrollAttribute(spanBigList);
		focusPosition = middlePositionV + middlePositionH * 3;
		setScrollAttribute(spanMiddleList, focusPosition);
		setTimeout(function(){resetScrollHtmlInner(spanMiddleList);}, 1);
	}
	else if(parent.focusType == parent.FOCUS_TV_BIG_WINDOW)
	{
		resetScrollAttribute(spanLittleList);
		resetScrollAttribute(spanMiddleList);
		setScrollAttribute(spanBigList, 0);
		setTimeout(function(){resetScrollHtmlInner(spanBigList);}, 1);
	}
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

/*
把整个列表属性更改，如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
htmlTagList:内容标签列表；ListLength：当前有内容的列表标签的个数；focusPosition：当前焦点选项在内容标签上的位置
*/
function setScrollAttribute(htmlTagList, focusPosition)
{
	for(var i = 0; i < htmlTagList.length; i++)
	{
		/*var tempText = htmlTagList[i].innerHTML;*/
		htmlTagList[i].setAttribute("contentText", htmlTagList[i].innerHTML);
		if(focusPosition == i && isOverflowed(htmlTagList[i]))//如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
		{
			htmlTagList[i].style.overflowX = "-webkit-marquee";
			htmlTagList[i].style.textOverflow = "clip";
			/*htmlTagList[i].innerHTML = tempText;*/
		}
		else
		{
			htmlTagList[i].style.overflowX = "hidden";
			htmlTagList[i].style.textOverflow = "ellipsis";
			/*htmlTagList[i].innerHTML = tempText;*/
		}
	}
}

/*
重新为整个列表属性更改完成的列表赋值
htmlTagList:内容标签列表；ListLength：当前有内容的列表标签的个数
*/
function resetScrollHtmlInner(htmlTagList)
{
	for(var i = 0; i < htmlTagList.length; i++)
	{
		try
		{
			if(htmlTagList[i].getAttribute("contentText") != undefined)
			{
				htmlTagList[i].innerHTML = htmlTagList[i].getAttribute("contentText");
			}
		}
		catch(er)
		{
			testLog("resetScrollHtmlInner:"+er);
		}
	}
}

function resetScrollAttribute(htmlTagList)
{
	for(var i = 0; i < htmlTagList.length; i++)
	{
		htmlTagList[i].style.overflowX = "hidden";
		htmlTagList[i].style.textOverflow = "ellipsis";
	}
	resetScrollHtmlInner(htmlTagList);
}

function pageOnFocus()
{
	testLog("tv page on focus! parent.preFocusIframe = "+parent.preFocusIframe);
	if(1 == top.g_EnterVolumn ||1 == parent.mouseFlag || 1 == top.g_EnterUsb)
	{
		parent.mouseFlag = 0;
		return ;
	}
	switch(parent.preFocusIframe)
	{
		case parent.FOCUS_IP_TITLE://focus from title iframe down key event
			$("bigWindowFocus").style.display = 'block';
			parent.focusType = parent.FOCUS_TV_BIG_WINDOW;
			break;
		//case parent.FOCUS_IP_TV://focus from title iframe up key event
		//	littlePositionH = 1;
		//	littlePositionV = 0;
		//	$("littleWindowFocus").style.top = littlePositionH * LITTLE_TV_MENU_TOP + "px";
		//	$("littleWindowFocus").style.left = littlePositionV * LITTLE_TV_MENU_LEFT + "px";
		//	$("littleWindowFocus").style.display = 'block';
		//	parent.focusType = parent.FOCUS_TV_LITTLE_WINDOW;
		//	break;
		case parent.FOCUS_IP_APP://focus from app iframe right key event
			parent.$("homePageTitle").contentWindow.iframePosModification(0);//tv
			if(parent.focusType == parent.FOCUS_APP_MIDDLE_WINDOW)  //从右边来
			{
				if(parent.$("homePageApp").contentWindow.middlePositionH != 0)//focus on smart tv
				{
					littlePositionH = parent.$("homePageApp").contentWindow.middlePositionH -1;
					littlePositionV = 0;
					$("littleWindowFocus").style.top = littlePositionH * LITTLE_TV_MENU_TOP + "px";
					$("littleWindowFocus").style.left = littlePositionV * LITTLE_TV_MENU_LEFT + "px";
					$("littleWindowFocus").style.display = 'block';
					parent.focusType = parent.FOCUS_TV_LITTLE_WINDOW;
				}
				else//focus on big window
				{
					$("bigWindowFocus").style.display = 'block';
					parent.focusType = parent.FOCUS_TV_BIG_WINDOW;
				}
			}
			else if(parent.focusType == parent.FOCUS_APP_LITTLE_WINDOW) //从左边来
			{
				if(parent.focusType == parent.FOCUS_APP_LITTLE_WINDOW)
				{
					middlePositionH = 1;
					middlePositionV = 2;
					$("middleWindowFocus").style.top = middlePositionH * MIDDLE_TV_MENU_TOP + "px";
					$("middleWindowFocus").style.left = middlePositionV * MIDDLE_TV_MENU_LEFT + "px";
					$("middleWindowFocus").style.display = 'block';
					parent.focusType = parent.FOCUS_TV_MIDDLE_WINDOW;
				}

			}
			else if(parent.focusType == parent.FOCUS_APP_BIG_WINDOW)
			{
					middlePositionH = 0;
					middlePositionV = 2;
					$("middleWindowFocus").style.top = middlePositionH * MIDDLE_TV_MENU_TOP + "px";
					$("middleWindowFocus").style.left = middlePositionV * MIDDLE_TV_MENU_LEFT + "px";
					$("middleWindowFocus").style.display = 'block';
					parent.focusType = parent.FOCUS_TV_MIDDLE_WINDOW;
			}
			break;
		case parent.FOCUS_IP_VIDEO://focus from video iframe left key event
			parent.$("homePageTitle").contentWindow.iframePosModification(1);//tv
			middlePositionH = parent.$("homePageVideo").contentWindow.middlePositionH;
			middlePositionV = 2;
			$("middleWindowFocus").style.top = middlePositionH * MIDDLE_TV_MENU_TOP + "px";
			$("middleWindowFocus").style.left = middlePositionV * MIDDLE_TV_MENU_LEFT + "px";
			$("middleWindowFocus").style.display = 'block';
			parent.focusType = parent.FOCUS_TV_MIDDLE_WINDOW;
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
	$("bigWindowFocus").style.display = 'none';
	$("middleWindowFocus").style.display = 'none';
	$("littleWindowFocus").style.display = 'none';
}

function addMouseListener()
{
	$("bigWindow").onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			top.jumpPage();
		}
	}

	var littleWinDivs = $("littleList").getElementsByTagName("div");
	littleWinDivs[0].onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			toJumpSource();
		}
	}
	littleWinDivs[1].onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			toJumpSetting();
		}
	}
	littleWinDivs[2].onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			toJumpMedia();
		}
	}
	littleWinDivs[3].onmousedown = function(evt)
	{
		evt.preventDefault();
		if(evt.button == 0)
		{
			toJumpIPEPG();
		}
	}

	var middleWinDivs = $("middleList").getElementsByTagName("div");
	for(var i = 0; i < 3; i++)
	{
		for(var j = 0; j < 3; j++)
		{
			middleWinDivs[i * 3 + j].setAttribute("newAttrH", i);
			middleWinDivs[i * 3 + j].setAttribute("newAttrV", j);
			middleWinDivs[i * 3 + j].onmousedown = function(evt)
			{
				evt.preventDefault();
				if(evt.button == 0)
				{//left key
					if(parent.currentFocusIframe == parent.FOCUS_IP_TITLE)
					{
						parent.preFocusIframe = parent.currentFocusIframe;
						parent.currentFocusIframe = parent.FOCUS_IP_TV;
						parent.mouseFlag = 1;
						parent.setIndexFocusPage(parent.currentFocusIframe);
					}
				    middlePositionV = parseInt(this.getAttribute("newAttrV"));
					middlePositionH = parseInt(this.getAttribute("newAttrH"));
       				parent.getTitleELementById("mainFocus").style.background = 'none';
					$("littleWindowFocus").style.display = 'none';
					$("bigWindowFocus").style.display = 'none';
					$("middleWindowFocus").style.top = middlePositionH * MIDDLE_TV_MENU_TOP + "px";
					$("middleWindowFocus").style.left = middlePositionV * MIDDLE_TV_MENU_LEFT + "px";
					$("middleWindowFocus").style.display = 'block';
					parent.focusType = parent.FOCUS_TV_MIDDLE_WINDOW;
					if(top.checkNetStatus() == false)
					{
						parent.showHomePageNetTips();
					}
					else
					{
						if(programStatus > 0)
						{
							if(((wirelessStatus == 1 || wireStatus == 1)
								&& ccidNum > middlePositionV + middlePositionH * 3))
							{
								top.channelLock = 0;
								top.parentalLock = 0;
								top.inputLock = 0;
								if(showLocationListFlag == 0 && (wirelessStatus == 1 || wireStatus == 1)
									&& jsonCCID.ccid[middlePositionV + middlePositionH * 3])
								{
									top.currentChannelIndex =  jsonCCID.ccid[middlePositionV + middlePositionH * 3];
									top.g_channel.playByIndex(jsonCCID.ccid[middlePositionV + middlePositionH * 3]);
								}
								else
								{
									top.currentChannelIndex = channelList[middlePositionV + middlePositionH * 3].index;
									top.g_channel.playByIndex(channelList[middlePositionV + middlePositionH * 3].index);
								}
								top.g_previousHtmlPage = "channelPlay.html";
								top.g_isShowInfoBar = 1;
								top.jumpPage();
							}
							else
							{
								parent.showHomePageScanTips(homePageRemind[3]);
							}
						}
						else
						{
							parent.showHomePageScanTips(homePageRemind[1]);
						}
					}
				}
			}
		}
	}
}
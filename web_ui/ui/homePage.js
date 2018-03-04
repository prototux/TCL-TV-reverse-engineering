
document.onnotify = notifyProcess;
document.onkeydown = keyproc;
var focusType                   = "tvTitleList";
var preFocusType                = "tvTitleList";
var MIDDLE_TV_MENU_TOP 			= 260;					//middle菜单焦点移动起始位置
var MIDDLE_TV_MENU_LEFT 		= 350;					//middle菜单焦点移动的step
var LITTLE_TV_MENU_TOP 			= 186;					//LITTLE菜单焦点移动起始位置
var LITTLE_TV_MENU_LEFT 		= 320;					//LITTLE菜单焦点移动的step
var MIDDLE_APP_MENU_TOP 		= 260;					//middle菜单焦点移动起始位置
var MIDDLE_APP_MENU_LEFT 		= 270;					//middle菜单焦点移动的step
var LITTLE_APP_MENU_TOP 		= 205;					//LITTLE菜单焦点移动起始位置
var LITTLE_APP_MENU_LEFT 		= 304;					//LITTLE菜单焦点移动的step
var MIDDLE_VIDEO_MENU_TOP 		= 260;					//middle菜单焦点移动起始位置
var MIDDLE_VIDEO_MENU_LEFT 		= 338;					//middle菜单焦点移动的step
var START_NETFLIX               = 0xf001;
var middlePositionV             = 0;                    //节目列表焦点水平位移
var middlePositionH             = 0;                    //节目列表焦点垂直位移
var littlePositionV             = 0;                    //设置列表焦点水平位移
var littlePositionH             = 0;                    //设置列表焦点垂直位移
var titleList                   = top.homePageTitleList;
var channelRemind               = [top.homePageRemind[2]]
var homePageRemind              = top.homePageRemind;
var homePageButton              = [top.chOptions[0],top.others[14],top.okCancel[1]];
var tvLittleWinName             = [top.others[26],top.homePageLittleWin[0],top.homePageLittleWin[1],top.chOptions[2]]
var signalStrength              = ["images/homePageNetwork/wifi-0.png","images/homePageNetwork/wifi-1.png","images/homePageNetwork/wifi-2.png","images/homePageNetwork/wifi-3.png","images/homePageNetwork/wifi-4.png","images/homePageNetwork/wifi-5.png"]
var wireStatusImg               = ["images/homePageNetwork/wired-2.png","images/homePageNetwork/wired-1.png"];
var netStatus                   = 0;
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
var showLocationListFlag            = 0;
var currentTime                 = 0;
var setting                     = top.g_setting;
var channel                     = top.g_channel;
var adlist = [{"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""}];
             
var applist = [{"name":"insidegrandprix","url":"http://www.viewster.tv/viewster_v2/loewe.cehtml","icon":""},
             {"name":"insidegrandprix","url":"http://www.youtube.com/tv","icon":""},
             {"name":"insidegrandprix","url":"http://channel.netrange_podcastapp.nrmmh.tv/boy/?pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://browsn.app.nrmmh.tv/prebrowsn/?pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://crash.app.nrmmh.tv/live/?pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://netrange_app.nrmmh.tv/?pid=87&code=Sixc7%2BLfPSLJ%2BCP6pWTXiA%3D%3D&pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://www.euronews.com/_partners/mmh/?pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://tcl.fb.nrmmh.tv/fbtvapp/?language=en&pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://smartgames.tv/prod/Games/fallingBlocks/?dv=netrange&pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://fleetracing.app.nrmmh.tv/?pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://connected-tv.france24.com/v2/netrange/index.xhtml?pLang=eng&pUaCountry=gbr&pCountries=gbr","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://a147a8e1b507af7787e07b6ed7d1121e.002d734450b3be6f5d0cb4939aa0a4bc.com/","icon":""},
             {"name":"insidegrandprix","url":"http://a147a8e1b507af7787e07b6ed7d1121e.002d734450b3be6f5d0cb4939aa0a4bc.com/","icon":""}];

var videolist = [{"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""},
             {"name":"insidegrandprix","url":"http://insidegrandprix.app.nrmmh.tv","icon":""}];
             
var animation = "left 0ms linear";
var enablePageAnimation = 0;
var oldKeyCode          = 0xffff;  
var showHistoryTimer    = 0;   
var repeatKeyPressTimer = 0;  
var UpdateLocationCount = 0;
var UpdateHttpCout      = 0;
var titleImgList;      
var picBigWindShowTimer = 0;
var currentImgFag       = 0;
var xmlhttp ;
var clearHttpLocationTimer = 0;
var httpLocationTimeout = true;
var clearHttpTimer      =0;
var httpTimeOut         = false;
var xmlhttpIp           = "";
var picImgFlag          = ["images/home-page-APP/dot-02.png","images/home-page-APP/dot-01.png"];
var appName             = ["TV nscreen","DLNA","WIFI","VOD","OTHER"];
var currentChannelIndex = top.g_channel.currentIndex;
var factory                = top.g_factory;
var multimedia                  = top.g_media;
var usbLock               = 0;
var hotelEnable            = 0;
var reportLocationHttpTimer     = 0;
var reportNumber                = 0;
var getLocalListNumber          = 0;
var getPosterNumber             = 0;
var mlmCountryIndex 		= [25,22,8,9,12,
								5,4,6,11,14,
								15,16,17,18,31,
								21,20,7,23,32,
								10,3,19,30,58,
								28,59];
var mlmLangIndex 			= [6,7,9,5,12,
								0,10,2,13,14,
								15,16,17,19,25,
								20,21,22,23,35,
								8,24,18,33,279,
								36,468];
var country =["GBR","ESP","FRA","DEU","ITA","CZE","HRV","DNK","HUN","NLD","NOR","POL","PRT","ROU","SVK","SVN","SRB","FIN","SWE","TUR","GRC","BGR","RUS","LVA","LTU","EST","UKR"];
var language =["ENG","SPA","FRE","GER","ITA","CZE","SCR","DAN","HUN","DUT","NOR","POL","POR","RUM","SLO","SLV","SCC","FIN","SWE","TUR","GRE","BUL","RUS","LAT","LIT","EST","UKR"];
var homePageTipsNeverShow = -1;  //add yums:2014-12-17
var showHomePageTipsForNever = false;

function keyproc(evt)
{
	var ret = true;
	var keycode = evt.which;
	if(focusType=="powerOff")
	{
		if(top.appOpenFlag==0)
		{
			top.$('operatePage').src = "";
		}
		else
		{
			top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
			top.$('operatePage').src = "";
			top.$("operatePage").style.display="none";
		}
		top.setFrameFocusPage("main");
		top.g_lastTime = -1;
		top.g_setting.cancelPowerOff();
		focusType=preFocusType;
	}
	switch(keycode)
	{
		
		case top.VK_LIST://list
		case top.VK_OPTION://option
		case top.VK_INFO://info
		return;
		case top.VK_VOLUME_DOWN://volume down,多媒体不能共用
		case top.VK_VOLUME_UP://volume up
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.$("globleShow").contentWindow.$("volumeForm").style.display = "block";
			top.globleShow.focus();
			top.setFrameFocusPage("globleShow");
			top.startVolumeTimer();
			break ;
		case top.VK_MUTE://key mute
			top.keyDownProcess(evt);
			break ;
		case top.VK_TV:
		case top.VK_SMARTTV://smart tv
		case top.VK_YOUTUBE://youtube
		case 36://home
			break ;
		case top.VK_POWER://power
		case top.VK_NETFLIX:
			top.keyDownProcess(evt);
		 break ;
	}
	if(top.appOpenFlag ==1 || initFinish == 0)
	{
		return;
	}
	switch (keycode)
	{
		case top.VK_PRE_CH://pre-ch
		if(oldKeyCode!=top.VK_PRE_CH)
		{
			oldKeyCode=top.VK_PRE_CH;
			repeatKeyPressTimer=setTimeout(function(){oldKeyCode=0xffff;
			clearTimeout(showHistoryTimer);
			showHistoryTimer=0;
			},300);
			showHistoryTimer=setTimeout(function(){
				if(oldKeyCode==top.VK_PRE_CH)
				{
					if(focusType!="history")
					{
						top.$('operatePage').src = "homePageHistory.html";
						if(focusType!="source"&&focusType!="sleep"&&focusType!="powerOff")
						{
							preFocusType=focusType;
						}
						focusType="history";
						top.setFrameFocusPage("operatePage");
					}
				}
				},3000);
		}
		else
		{
			clearTimeout(repeatKeyPressTimer);
			repeatKeyPressTimer=setTimeout(function(){oldKeyCode=0xffff;
			clearTimeout(showHistoryTimer);
			showHistoryTimer=0;
			},300);
		}
		return;
		case top.VK_UP:
		{
			//up
			
			if(focusType=="source")
			{
				top.$('operatePage').contentWindow.keyDownProcess(evt);
			}
			else if(focusType=="sleep")
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			else if(focusType=="history")
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			else
			{
				toUp();
			}
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			if(focusType=="source")
			{
				top.$('operatePage').contentWindow.keyDownProcess(evt);
			}
			else if(focusType=="sleep")
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			else if(focusType=="history")
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			else
			{
				toDown();
			}
			ret = false;
			
		}
		break;
		case top.VK_RIGHT:
		{
			toRight();
		}
		break;
		case top.VK_ENTER:
		{
			//OK 键
			if(focusType=="source")
			{
				top.$('operatePage').contentWindow.keyDownProcess(evt);
			}
			else if(focusType=="sleep")
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			else if(focusType=="history")
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			else
			{
				toOk();
			}
			ret = false;
			
		}
		break;
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;
		case top.VK_SOURCE:
		    /*
			if(focusType!="source")
			{
				top.$('operatePage').src = "inputSource.html";
				if(focusType!="sleep"&&focusType!="history"&&focusType!="powerOff")
				{
					preFocusType=focusType;
				}
				focusType="source";
				top.setFrameFocusPage("operatePage");
			}
			else
			{
				top.$('operatePage').contentWindow.keyDownProcess(evt);
			}*/
			top.$("main").onload = function(){
				top.resetFramePacking3DMode();
				top.$("main").onload = function(){};
				}
			top.$('main').src = "inputSource.html";
			top.main.focus();
			if(top.g_isDownloading == 0){
				top.g_isDownloading = 1;
				setting.restartDownloadUpdateFile();
			}
			break;
		case top.VK_SLEEP:
		    if(focusType!="sleep")
			{
				top.$('operatePage').src = "sleepTimer.html";
				if(focusType!="source"&&focusType!="history"&&focusType!="powerOff")
				{
					preFocusType=focusType;
				}
				focusType="sleep";
				top.setFrameFocusPage("operatePage");
			}
			else
			{
				top.$('operatePage').contentWindow.keyproc(evt);
			}
			break;
		case top.VK_BACK: //back
		   	if(focusType == "netTips")
			{
				TipsButton=1;
				focusType=preFocusType;
				$("homePageTips").style.display="none";
				$("picResetFocus").style.left="490px";
				break;
			}
			else if(focusType == "scanTips")
			{
				TipsButton=1;
				focusType=preFocusType;
				$("homePageTips").style.display="none";
				$("picResetFocus").style.left="490px";
				break;
			}
			break;
		case top.VK_MENU: //menu
		{
			top.menu_visible_status = 1;
			top.keyDownProcess(evt);
            if(top.g_isDownloading == 0){
                top.g_isDownloading = 1;
                setting.restartDownloadUpdateFile();
            }
			break;
		}
		case top.VK_EXIT: //exit
			if(focusType=="source")
			{
				top.$('operatePage').src="";
				focusType=preFocusType;
				top.setFrameFocusPage("main");
			}
			else if(focusType=="sleep")
			{
				top.$('operatePage').src="";
				focusType=preFocusType;
				top.setFrameFocusPage("main");
			}
			else if(focusType=="history")
			{
				top.$('operatePage').src="";
				focusType=preFocusType;
				top.setFrameFocusPage("main");
			}
			else
			{
				 if(typeof xmlhttpIp == 'object')
				 {
					 httpLocationTimeout = true;
					 xmlhttpIp.abort();
					 xmlhttpIp="";
				 }
				 top.jumpPage();
				if(top.g_isDownloading == 0){
					top.g_isDownloading = 1;
					setting.restartDownloadUpdateFile();
				}
			}
			break;
		case top.VK_CHANNEL_UP://channel +
			var inputSource=top.g_channel.inputSource;
			var programS = top.g_channel.channelProgramStatus();
			var systemCountry = top.g_channel.systemCountry;
			if(inputSource <= 1 &&programS == 1  && top.inputLock != 1)
			{
				if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
				{
					var currentIndex = top.g_channel.currentIndex;
					currentChannelIndex = top.g_channel.getNextIndexByIndex(currentIndex);
					channelChange();
				}
				else
				{
					var currentIndex = top.g_channel.currentIndex;
					var endIndex = top.g_channel.endIndex;
					if(currentIndex>=endIndex || currentChannelIndex>=endIndex)
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
			else if(inputSource <= 1 &&(programS == 0  || top.inputLock == 1))
			{

				if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
				{
				}
				else
				{
					top.g_channel.inputSource=11;
				}
			}
			else if(inputSource > 1)
			{
				if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
				{
				}
				else
				{
					if(inputSource==11)
					{
						top.g_channel.inputSource=4;
					}
					else if(inputSource==4)
					{
						top.g_channel.inputSource=6;
					}
					else if(inputSource==6)
					{
						top.g_channel.inputSource=7;
					}
					else if(inputSource==7)
					{
						top.g_channel.inputSource=8;
					}
					else if(inputSource==8)
					{
						top.g_channel.inputSource=12;
					}
					else if(inputSource==12)
					{

                        top.channelLock = 0;
						top.parentalLock = 0;
						top.inputLock = 0;
						currentChannelIndex=top.g_channel.firstIndex;
						if(currentChannelIndex>=65535)
						{
							currentChannelIndex=top.g_channel.currentIndex;
						}
						if(currentChannelIndex<65535)
						{
							top.currentChannelIndex = currentChannelIndex;
							top.g_channel.playByIndex(currentChannelIndex);
						}
						else
						{
							top.g_channel.inputSource=1;
						}
					}
				}
			}
			showScaleVideoWindow();
			showCurrentChannelInfo();
			break;
			case top.VK_CHANNEL_DOWN://channel -
		    var inputSource=top.g_channel.inputSource;
			var systemCountry = top.g_channel.systemCountry;
			var programS = top.g_channel.channelProgramStatus();
			if(inputSource <= 1 &&programS == 1  && top.inputLock != 1)
			{
				if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
				{
					var currentIndex = top.g_channel.currentIndex;
					currentChannelIndex = top.g_channel.getPreviousIndexByIndex(currentIndex);
					channelChange();
				}
				else
				{
					var currentIndex = top.g_channel.currentIndex;
					var firstIndex = top.g_channel.firstIndex;
					if(currentIndex<=firstIndex ||currentChannelIndex<=firstIndex)
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
			else if(inputSource <= 1 &&(programS == 0  || top.inputLock == 1))
			{
				if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
				{
				}
				else
				{
					top.g_channel.inputSource=12;
				}
			}
			else
			{
				if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
				{
				}
				else
				{
					if(inputSource==11)
					{
					  	top.channelLock = 0;
						top.parentalLock = 0;
						top.inputLock = 0;
						currentChannelIndex=top.g_channel.endIndex;
						if(currentChannelIndex>=65535)
						{
							currentChannelIndex=top.g_channel.currentIndex;
						}
						if(currentChannelIndex<65535)
						{
							top.currentChannelIndex = currentChannelIndex;
							top.g_channel.playByIndex(currentChannelIndex);
						}
						else
						{
							top.g_channel.inputSource=1;
						}
					}
					else if(inputSource==4)
					{
						top.g_channel.inputSource=11;
					}
					else if(inputSource==6)
					{
						top.g_channel.inputSource=4;
					}
					else if(inputSource==7)
					{
						top.g_channel.inputSource=6;
					}
					else if(inputSource==8)
					{
						top.g_channel.inputSource=7;
					}
					else if(inputSource==12)
					{
						top.g_channel.inputSource=8;
					}
				}
			}
			showScaleVideoWindow();
			showCurrentChannelInfo();
			break;
		case top.VK_VOLUME_DOWN://volume down,多媒体不能共用
		case top.VK_VOLUME_UP://volume up
			break ;
		case top.VK_MUTE://key mute
			break ;
		case top.VK_TV:
		case 36://home
			break ;
		case top.VK_SMARTTV://smart tv
			toJumpApp();
			break
		case top.VK_POWER://power
		 break ;
		default:
			top.keyDownProcess(evt);
			break;
	}
	return ret;
}
function channelChange()
{
	if(currentChannelIndex !=top.g_channel.currentIndex && currentChannelIndex<65535)
	{
		top.g_openMheg5State=0;
		 top.channelLock = 0;
		top.parentalLock = 0;
		top.inputLock = 0;
		top.currentChannelIndex = currentChannelIndex;
		top.g_channel.playByIndex(currentChannelIndex);
	}
}
function $(id)
{
    return document.getElementById(id);
}

function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
		case top.E_APP_CLOSE:
			if(top.g_channel.inputSource==10)
			{
		   		 top.g_channel.inputSource=top.lastInputSource;
			}
		    if(setting.isHDScreen==1)
			{
				setting.scaleVideoWindow(130,240,610,344);
			}
			else
			{
				setting.scaleVideoWindow(90,170,440,240);
			}
			top.appOpenFlag = 0;
			top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x400|0x800,0,2);
			top.$("main").style.display="block";
			top.$("operatePage").style.display="block";
			top.$("otherPage").style.display="block";
			top.$("globleShow").style.display="block";
			break;
		case top.E_APP_CLOSE_REPLACE:
		{
			 if(typeof xmlhttpIp == 'object')
			 {
				 httpLocationTimeout = true;
				 xmlhttpIp.abort();
			 }
			 if(top.g_channel.inputSource==10)
			{
		   		 top.g_channel.inputSource=1;
			}
			top.appOpenFlag = 0;
			top.jumpPage();
			top.$("main").style.display="block";
			top.$("operatePage").style.display="block";
			top.$("otherPage").style.display="block";
			top.$("globleShow").style.display="block";
			if(top.g_isDownloading == 0){
				top.g_isDownloading = 1;
				setting.restartDownloadUpdateFile();
			}
		}
		break;
		case top.E_APP_OPEN:
		{
			if(top.appOpenFlag == 1)
			{
				return;
			}
			if(top.g_channel.inputSource != 10&&top.appOpenFlag == 0)
			{
				top.lastInputSource = top.g_channel.inputSource;
				top.g_channel.inputSource = 10;
			}
			top.appOpenFlag = 1;
			setting.scaleVideoWindow(0,0,0,0);
			top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
			top.$("operatePage").src = "";
			top.$("otherPage").src ="";
			top.$("main").style.display="none";
			top.$("operatePage").style.display="none";
			top.$("otherPage").style.display="none";
		}
		break;
		case top.E_POWER_OFF_TIMER:
		{
			top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x400|0x800,0,2);
			top.g_lastTime = evt.modifiers;
			if(top.appOpenFlag==0)
			{
				top.$('operatePage').src = "powerOffTimer.html";
			}
			else
			{
				top.$('operatePage').src = "powerOffTimer.html";
				top.$("operatePage").style.display="block";
			}
			if(focusType!="source"&&focusType!="sleep"&&focusType!="history")
			{
				preFocusType=focusType;
			}
			top.setFrameFocusPage("main");
			focusType="powerOff";
		}
		break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		{	
			top.systemEventProc(evt);
			showNetworkStatus();
			if(showLocationListFlag==1)
			{
				getRequestObject();
				if(programStatus>0)
				{
					checkVersionUpdate();
				}
				else
				{
					getNoSearchChannelList();
				}
			}
		}
		break;
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		{
			top.systemEventProc(evt);
		    showNetworkStatus();
		}
		break;
		case top.E_CI_CAM_NAME_READY:
		case top.E_CI_DATA_READY:
		break;
		case top.E_PVR_DISK_UNPLUG:
		case top.E_MEDIA_USB_REMOVE:
		case top.E_MEDIA_USB_REMOVE_OTHER:
		showUsbStatus();
		break;
		case top.E_READY_TO_CHANGE_CEC:
		case top.E_READY_TO_CHANGE_SCART:
		if(focusType=="powerOff")
		{
			if(top.appOpenFlag==0)
			{
				top.$('operatePage').src = "";
			}
			else
			{
				top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
				top.$('operatePage').src = "";
				top.$("operatePage").style.display="none";
			}
			top.setFrameFocusPage("main");
			top.g_lastTime = -1;
			top.g_setting.cancelPowerOff();
			focusType=preFocusType;
		}
		if(top.appOpenFlag==0)
		{
			top.systemEventProc(evt);
		}
		break;
		case top.E_MEDIA_USB_INSERTED:
		showUsbStatus();
		if(top.appOpenFlag==0)
		{
			if(focusType=="source")
			{
				top.$('operatePage').src="";
				focusType=preFocusType;
			}
			else if(focusType=="sleep")
			{
				top.$('operatePage').src="";
				focusType=preFocusType;
			}
			else if(focusType=="history")
			{
				top.$('operatePage').src="";
				focusType=preFocusType;
			}
			else if(focusType=="powerOff")
			{

				top.$('operatePage').src = "";
				top.g_lastTime = -1;
				top.g_setting.cancelPowerOff();
				focusType=preFocusType;
			}
			top.$("otherPage").src = "newDeviceList.html";
			top.otherPage.focus();
			top.setFrameFocusPage("otherPage");
		}
		break;
		case top.E_DTV_SERVICE_PLAY:
		case top.E_CHANNEL_PLAY_END:
		case top.E_TV_EXCHANGE_END:
		case top.E_DTV_EPG_PF_FINISH:
			showCurrentChannelInfo();
			if(top.appOpenFlag==0)
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
			//
			case top.E_SS_NO_CI_MODULE:
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_SIGNAL_UNLOCK://unlock signal
		case top.E_PVR_NO_SIGNAL:
		case top.E_SIGNAL_LOCK://lock signal
		case top.E_DTV_SS_RUNNING_STATUS_NOT_RUNNING:
		case top.E_SS_COMMON_VIDEO:
		case top.E_SS_CH_BLOCK:
		case top.E_SS_PARENTAL_BLOCK:
		case top.E_DTV_SS_INPUT_BLOCK:
			showCurrentChannelInfo();
		break;
		default:
		if(top.appOpenFlag==0)
		{
			top.systemEventProc(evt);
		}
		break;
	}
}
function displayFocusBox(flag){
	
}
function init()
{
	//面板按键处理场景设置=
	setTimeout(function(){
	if(setting.isHDScreen==1)
	{
		setting.scaleVideoWindow(130,240,610,344);
	}
	else
	{
		setting.scaleVideoWindow(90,170,440,240);
	}
	if(top.currentPanel==1)
	 {
		if(top.g_setting.pic3DMode!=0)
		{
			top.g_setting.pic3DMode=0;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
		}
	}
	else if(top.currentPanel==2)
	{
		if(top.g_setting.pic3DMode!=0)
		{
			top.g_setting.pic3DMode=0;
		}
	}
	MacAdress = top.g_setting.tvDeviceID;
	nonSacnChannelsJson=nonSacnChannelsJson.replace("40:8B:F6:F4:FB:E8",MacAdress);
	getTimeAreaProgramsJson=getTimeAreaProgramsJson.replace("40:8B:F6:F4:FB:E8",MacAdress);
	getLocalChannelListJson=getLocalChannelListJson.replace("40:8B:F6:F4:FB:E8",MacAdress);
	onGoingJson = onGoingJson.replace("40:8B:F6:F4:FB:E8",MacAdress);
	checkVersion = checkVersion.replace("40:8B:F6:F4:FB:E8",MacAdress);
	changeCountry();
	channgeLanguage();
	setTimeout("showTV()",40);
	addMouseListener();
	},100);
	top.g_temp              = "homePage";
	setting.contextOf5in1   = top.CONTEXT_HOME_PAGE;
	top.keySetForUI(1);
	showTimeFormat();
	setInterval("showCurTime()",60*1000);
	setting.sendMsgToDBC(1);
	showNetworkStatus();
	showUsbStatus();
	initFinish = 1;
}
function changeCountry()
{
	var currentCountry = channel.systemCountry;
	var i = mlmCountryIndex.indexOf(currentCountry);
	if(i==-1)
	{
		i=0;
	}
	nonSacnChannelsJson = nonSacnChannelsJson.replace("FRA",country[i]);
}
function channgeLanguage()
{
	var currentLanguage = top.g_setting.menuLanguage;
	var i = mlmLangIndex.indexOf(currentLanguage);
	nonSacnChannelsJson = nonSacnChannelsJson.replace("FRE",language[i]);
}
function showTimeFormat()
{
	var CurrentDate = setting.currentDate;
	currentTime = setting.currentTime;
	var CurrentTimeFormat="";
	 CurrentTimeFormat=CurrentDate.substring(0,2)+"/"+CurrentDate.substring(3,5)+"/"+CurrentDate.substring(6,CurrentDate.length);
	 CurrentTimeFormat=CurrentTimeFormat+"&nbsp;&nbsp;&nbsp;"+currentTime.substring(0,5);
	 $("time").innerHTML = CurrentTimeFormat;
}
function showWifiSignal(signal)
{
	if(signal>=-52&&signal<=45)
	{
		$("networkImg").src=signalStrength[4];
	}
	else if(signal>=-59&&signal<-52)
	{
		$("networkImg").src=signalStrength[3];
	}
	else if(signal>=-66&&signal<-59)
	{
		$("networkImg").src=signalStrength[2];
	}
	else if(signal>=-73&&signal<-66)
	{
		$("networkImg").src=signalStrength[1];
	}
	else if(signal>=-80&&signal<-73)
	{
		$("networkImg").src=signalStrength[0];
	}
	else 
	{
		$("networkImg").src=signalStrength[5];
	}
}
function showUsbStatus()
{
	if(multimedia.deviceStatus())
	{
		$("usbImg").style.display="block";
	}
	else
	{
		$("usbImg").style.display="none";
	}
}
var channelListType =0;
var channelList;
var currentIndex  = 0;
var tvMiddelProgramInfoSpan;
var tvMiddelProgramInfoDiv;

var getTimeAreaProgramsJson = "{\"action\": \"GetTimeAreaPrograms\",\"developer\": { \"apikey\":\"1234\",\"name\":\"tclrpc_1\"},\"device\": {\"deviceId\": \"40:8B:F6:F4:FB:E8\"},\"param\": {\"tvchannel_id\": [\"aaaaaaaaaaa\",\"bbbbbbbbbbb\",\"cccccccccc\",\"dddddddddd\",\"eeeeeeeeee\",\"ffffffffff\",\"gggggggggg\",\"hhhhhhhhhh\",\"iiiiiiiiii\"],\"timearea\": \"\",\"timezone\": 0000000000}}";
var getLocalChannelListJson =  "{\"action\": \"GetLocalChannelList\",\"developer\":{\"apikey\": \"1234\",\"name\": \"tclrpc_1\"}, \"device\": {\"deviceId\": \"40:8B:F6:F4:FB:E8\"}, \"param\": {\"page\": \"1\", \"pagesize\": \"9\"}}";
var checkVersionJson ="{\"action\":\"CheckVersion\",\"developer\":{\"apikey\":\"1234\",\"name\":\"tclrpc_1\"},\"device\":{\"deviceId\":\"40:8B:F6:F4:FB:E8\"}}";
var nonSacnChannelsJson = "{\"action\":\"GetRecommendWithNonSacnChannels\",\"developer\": {\"apikey\": \"1234\",\"name\":\"tclrpc_1\"},\"device\": {\"deviceId\": \"40:8B:F6:F4:FB:E8\"},\"param\": {\"size\": 9,\"country\":\"FRA\",\"language\": \"FRE\"}}";
var reportLocationListJson =
"{\"action\":\"ReportChannelList\",\"developer\": {\"apikey\":\"1234\",\"name\":\"tclrpc_1\"},\"device\": {\"deviceId\": \"40:8B:F6:F4:FB:E8\"},\"param\": {\"version\": \"1232131xxx23149\",\"channelList\":[\"channelList\"]}}"
var onGoingJson  =  "{\"action\": \"GetOnGoingPrograms\",\"developer\": {\"apikey\": \"1234\",\"name\": \"tclrpc_1\"},\"device\": {\"deviceId\": \"40:8B:F6:F4:FB:E8\"},\"param\": {\"page\": 1,\"pagesize\": 9,\"ipgcategory_l1\": \"all\"}}";
var checkVersion =  "{\"action\": \"CheckLocalVersion\",\"developer\": {\"apikey\": \"1234\",\"name\": \"tclrpc_1\"},\"device\": {\"deviceId\": \"40:8B:F6:F4:FB:E8\"},\"param\": {\"version\": \"xxxxxx\"}}";
var jsonCCID = 
{
	"ccid":["0","0","0","0","0","0","0","0","0"],
	"Tv_id":["","","","","","","","",""],
	"startTime":["","","","","","","","",""],
	"endTime":["","","","","","","","",""]
};
function checkVersionUpdate()
{
	checkVersion = checkVersion.replace("xxxxxx",parseInt(top.g_channel.channelListVersion));
	 var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
	else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
	xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
             var jsonResult = xmlhttp.responseText;
			 jsonResult = eval("(" + jsonResult + ")");
			if(jsonResult.error.code == "0")
			{
				// 表示服务器上的版本与本地相同 不用更新数据 可以直接获取数据
				
				if(programStatus>0)
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
				//本地版本有更新 需要更新数据 
				repocrLocationInit();
			}
        }
        else if(xmlhttp.readyState==4&&xmlhttp.status!=200)
        {
           repocrLocationInit(); 
        }
    }
    xmlhttp.open("POST","http://eurepg.huan.tv/json",true);
    xmlhttp.send(checkVersion);
}
function reportLocationList(reportJson)
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
	else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
	xmlhttp.onreadystatechange=function()
    {
        //console.log("xmlhttp.readyState==="+xmlhttp.readyState+"===xmlhttp.status="+xmlhttp.status);
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var jsonResult=xmlhttp.responseText;
            console.log("reportLocationList success");
            reportNumber = 0;
            if(programStatus>0)
			{
				getOnGoingList();
			}
			else
			{
				getNoSearchChannelList();
			}
            clearTimeout(reportLocationHttpTimer);
        }
        else if(xmlhttp.readyState==4&&xmlhttp.status!=200)
        {
            console.log("reportLocationList fail");
            if(1)//reportNumber==1)
            {
                reportNumber=0;
                showLocationList();
            }
            else
            {
                reportNumber++;
                reportLocationList(reportJson)
            }
        }
    }
    xmlhttp.open("POST","http://eurepg.huan.tv/json",true);
    xmlhttp.send(reportJson);
    console.log("reportLocationList");
    /*
    reportLocationHttpTimer=setTimeout(function(){
        if(typeof xmlhttp == 'object')
        xmlhttp.abort();
        xmlhttp="";
    },5000);
    */
}

function repocrLocationInit()
{
	if(top.checkNetStatus())
	{
		reportLocationList(top.g_channel.reportChannelList());
	}
}

function getOnGoingList()
{
    clearTimeout(clearHttpLocationTimer);
    httpLocationTimeout = false;
    if(xmlhttpIp!=null){
        xmlhttpIp.open("POST","http://eurepg.huan.tv/json",true);
        xmlhttpIp.setRequestHeader("Cache-Control","no-cache");
        xmlhttpIp.setRequestHeader("Pragma","no-cache");
        xmlhttpIp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttpIp.onreadystatechange=showOnGoingChannelList;
        /*
        clearHttpLocationTimer=setTimeout(function(){
            httpLocationTimeout = true;
            console.log("I will abort this http request");
            xmlhttpIp.abort();
            console.log("end this http request");
        },5000);
        */
        xmlhttpIp.send(onGoingJson);
        console.log("getOnGoingList");
    }
    function showOnGoingChannelList()
    {
        if(httpLocationTimeout==true)
        {
            if(1)//getLocalListNumber ==5)
            {
                getLocalListNumber = 0;
                showLocationList();
            }
            else
            {
                getLocalListNumber++;
                getOnGoingList()
            }
            return;
        }
        if(xmlhttpIp.readyState==4 && xmlhttpIp.status==200)
        {
            console.log("getOnGoingList success");
            try
            {
                clearTimeout(clearHttpLocationTimer);
                var jsonResult=xmlhttpIp.responseText;
                jsonResult =eval("(" + jsonResult + ")");
                showLocationListFlag=0;
                ccidNum = jsonResult.num;
                for(var i=0;i<jsonResult.num;i++)
                {
                    $("channelName"+i).innerHTML = jsonResult.results[i].channelname;
                    jsonCCID.ccid[i]=jsonResult.results[i].ccid;
                    jsonCCID.Tv_id[i]=jsonResult.results[i].tvchannel_id;
                    jsonTostr("",jsonResult.results[i].tvchannel_id,i);
                    if(jsonResult.results[i].tvchannel_id!="")
                    {
                        
                    }
                    else
                    {
                        $("programInfo"+i).style.display="none";
                        jsonCCID.startTime[i]="0";
                        jsonCCID.endTime[i]="0";
                    }
                    
                }
                for(var j=jsonResult.num;j<9;j++)
                {
                    jsonTostr("","",j);
                    $("channelName"+j).innerHTML = channelRemind[0];
                    $("programInfo"+j).style.display="none";
                }
                showALlIpEpg();
            }
            catch(er)
            {
                console.log("er:"+er);
            }
        }
        else if(xmlhttpIp.readyState==4 && xmlhttpIp.status!=200)
        {
            console.log("getOnGoingList fail");
            if(1)//getLocalListNumber == 5)
            {
                getLocalListNumber = 0;
                showLocationList();
            }
            else
            {
                getLocalListNumber++;
                getOnGoingList()
            }
        }
    }
}

function showUpdateEpg()
{
	currentTime=setting.currentBaseTime;
	var currentTimeV =changeTimeToSecond(setting.secondToTime(currentTime));
	if(currentProgramId!=-1&&currentProgramEndTime<currentTimeV)
	{
		showCurrentChannelInfo();
	}
	for(var i=0;i<9;i++)
	{
		if(showLocationListFlag==0)
		{
			if(jsonCCID.Tv_id[i]!="")
			{
				try
				{
					var ProgramInfoDiv=$("programInfo"+i).getElementsByTagName("div");
					 
					if(jsonCCID.endTime[i]<currentTime)
					{
						showALlIpEpg();
						return;
					}
					else
					{
						
					    var endTimeV  = changeTimeToSecond(setting.secondToTime(jsonCCID.endTime[i]));
						var startTimeV = changeTimeToSecond(setting.secondToTime(jsonCCID.startTime[i]));
						var duration = endTimeV-startTimeV;
						var finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
						var unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
						if(currentTimeV>=startTimeV&&currentTimeV<=endTimeV)
						{
							ProgramInfoDiv[1].style.width=finishWidth+"px";
							ProgramInfoDiv[2].style.width=unFinishWidth+"px";
						}
					}
				}catch(er)
				{
					channel.testLog("showUpdateEpg:"+er);
				}
			}
		}
		else
		{
			if(i<programStatus)
			{
				try
				{
					var ProgramInfoDiv=$("programInfo"+i).getElementsByTagName("div");
					var programList = channelList[i].getProgramPlayList();
					if(jsonCCID.Tv_id[i] == -1)
					{
						continue;
					}
					else
					{
						if(jsonCCID.endTime[i]<currentTimeV)
						{
							channelList=channel.getRemChannelList();
							showLocationList();
							return;
						}
						else
						{
							var endTimeV  = changeTimeToSecond(setting.secondToTime(jsonCCID.endTime[i]));
							var startTimeV = changeTimeToSecond(setting.secondToTime(jsonCCID.startTime[i]));
							var duration = endTimeV-startTimeV;
							var finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
							var unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
							if(currentTimeV>=startTimeV&&currentTimeV<=endTimeV)
							{
								ProgramInfoDiv[1].style.width=finishWidth+"px";
								ProgramInfoDiv[2].style.width=unFinishWidth+"px";
							}
						}
					}
					
				}catch(er)
				{
					channel.testLog("showUpdateEpg:"+er+"showLocationListFlag="+showLocationListFlag);
				}
			}
		}
	}
}
var ccidNum = 0;
function json2str(obj)
{
  var S = [];
  var k=0;
  for(var i in obj){
  obj[i] = typeof obj[i] == 'string'?'"'+obj[i]+'"':(typeof obj[i] == 'object'?json2str(obj[i]):obj[i]);
  S.push('"'+i+'"'+':'+obj[i]); 
  }
    return '{'+S.join(',')+'}';
}
function jsonTostr(str,tvchannel_id,postion)
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
	}
	var replaceToStr = tvchannel_id;
	getTimeAreaProgramsJson=getTimeAreaProgramsJson.replace(replaceStr,replaceToStr);
	var zoneValue=0;
	if(setting.currentOffsetTime<0)
	{
		if(parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(3,5),10)>0)
		{
			zoneValue=-(parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(0,2),10)+0.5);
		}
		else
		{
			zoneValue=-parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(0,2),10);
		}
	}
	else
	{
		if(parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(3,5),10)>0)
		{
			zoneValue=parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(0,2),10)+0.5;
		}
		else
		{
			zoneValue=parseInt(setting.secondToTime(Math.abs(setting.currentOffsetTime)).substring(0,2),10);
		}
	}
	getTimeAreaProgramsJson=getTimeAreaProgramsJson.replace("0000000000",zoneValue);
	//channel.testLog(strT);
}
function getNoSearchChannelList()
{
    httpLocationTimeout=false;
    xmlhttpIp.open("POST","http://eurepg.huan.tv/json",true);
    xmlhttpIp.setRequestHeader("Cache-Control","no-cache");
    xmlhttpIp.setRequestHeader("Pragma","no-cache");
    xmlhttpIp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttpIp.onreadystatechange=showNoSearchChannelList;
    /*
    clearHttpLocationTimer=setTimeout(function(){
        httpLocationTimeout = true;
        channel.testLog("no get no search json time out==========");
        xmlhttpIp.abort();
    },5000);
    */
	//  console.log("getNoSearchChannelList:"+nonSacnChannelsJson);
    xmlhttpIp.send(nonSacnChannelsJson);
    console.log("getNoSearchChannelList");
    function showNoSearchChannelList()
    {
        if(httpLocationTimeout==true)
        {
            if(1)//getLocalListNumber == 3)
            {
                getLocalListNumber = 0;
                showLocationList();
            }
            else
            {
                getLocalListNumber++;
                getNoSearchChannelList();
            }
            return;
        }
        if(xmlhttpIp.readyState==4 && xmlhttpIp.status==200)
        {
            console.log("getNoSearchChannelList success");
            try
            {
                getLocalListNumber = 0;
                clearTimeout(clearHttpLocationTimer);
                var jsonResult=xmlhttpIp.responseText;
                jsonResult =eval("(" + jsonResult + ")");
                if(jsonResult.error.code!="0")
                {
					 console.log("getNoSearchChannelList success");
                    return;
                }
                showLocationListFlag=2;
                var length = jsonResult.results.length;
                for(var i=0;i<length;i++)
                {
                    $("channelName"+i).innerHTML = jsonResult.results[i].channelname;
                    var tvMiddelProgramInfoSpan=$("programInfo"+i).getElementsByTagName("span");
                    var tvMiddelProgramInfoDiv=$("programInfo"+i).getElementsByTagName("div");
                    $("programInfo"+i).style.display="block";
                    tvMiddelProgramInfoSpan[0].innerHTML=jsonResult.results[i].title;

                    currentTime=setting.currentBaseTime;
                    jsonCCID.startTime[i]=jsonResult.results[i].start_time;
                    jsonCCID.endTime[i]=jsonResult.results[i].end_time;
                    jsonCCID.Tv_id[i]=jsonResult.results[i].tvchannel_id;
                    var currentTimeV =changeTimeToSecond(setting.secondToTime(currentTime));
                    var endTimeV  = changeTimeToSecond(setting.secondToTime(jsonResult.results[i].end_time));
                    var startTimeV = changeTimeToSecond(setting.secondToTime(jsonResult.results[i].start_time));
                    var duration = endTimeV-startTimeV;
                    if(currentTimeV>=startTimeV&&currentTimeV<=endTimeV)
                    {
                        var finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
                        var unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
                        tvMiddelProgramInfoDiv[1].style.width=finishWidth+"px";
                        tvMiddelProgramInfoDiv[2].style.width=unFinishWidth+"px";
                        tvMiddelProgramInfoDiv[0].style.display="block";
                        tvMiddelProgramInfoSpan[1].innerHTML=setting.secondToTime(jsonResult.results[i].start_time).substring(0,5);
                        tvMiddelProgramInfoSpan[2].innerHTML=setting.secondToTime(jsonResult.results[i].end_time).substring(0,5);
                    }
                    else
                    {
                        tvMiddelProgramInfoDiv[1].style.width=0+"px";
                        tvMiddelProgramInfoDiv[2].style.width=0+"px";
                        tvMiddelProgramInfoDiv[0].style.display="none";
                        tvMiddelProgramInfoSpan[1].innerHTML=""
                        tvMiddelProgramInfoSpan[2].innerHTML=""
                    }
                    if(jsonResult.results[i].programimg.MEDIUM!=undefined&&jsonResult.results[i].programimg.MEDIUM.length>0)
                    {
                        $("channelImgNet"+i).src=jsonResult.results[i].programimg.MEDIUM;
                        $("channelImgNet"+i).style.display="block";
                    }
                    else if(jsonResult.results[i].programimg.SMALL!=undefined&&jsonResult.results[i].programimg.SMALL.length>0)
                    {
                    
                        $("channelImgNet"+i).src=jsonResult.results[i].programimg.SMALL;
                        $("channelImgNet"+i).style.display="block";
                    }
                    else if(jsonResult.results[i].programimg.THUMBNAIL!=undefined&&jsonResult.results[i].programimg.THUMBNAIL.length>0)
                    {
                        $("channelImgNet"+i).src=jsonResult.results[i].programimg.THUMBNAIL;
                        $("channelImgNet"+i).style.display="block";
                    }
                    else
                    {
                        $("channelImgNet"+i).style.display="none";
                    }
                    
                }
                for(var j=length;j<9;j++)
                {
                    $("channelName"+j).innerHTML = channelRemind[0];
                    $("programInfo"+j).style.display="none";
                    tvMiddelProgramInfoSpan=$("programInfo"+j).getElementsByTagName("span");
                    tvMiddelProgramInfoDiv=$("programInfo"+j).getElementsByTagName("div");
                     tvMiddelProgramInfoDiv[0].style.display="none";
                     tvMiddelProgramInfoSpan[0].innerHTML="";
                     tvMiddelProgramInfoSpan[1].innerHTML="";
                     tvMiddelProgramInfoSpan[2].innerHTML="";
                     $("channelImgNet"+j).style.display="none";
                }
            }
            catch(er)
            {
                xmlhttpIp.abort();
            }
        }
        else if(xmlhttpIp.readyState==4 && xmlhttpIp.status!=200)
        {
            console.log("getNoSearchChannelList fail");
            if(1)//getLocalListNumber == 3)
            {
                getLocalListNumber = 0;
                xmlhttpIp.abort();
                showLocationList();
            }
            else
            {
                getLocalListNumber++;
                getNoSearchChannelList();
            }
        }
    }
}

function getLocationList()
{
    httpLocationTimeout = false;
    if(xmlhttpIp!=null){
        xmlhttpIp.open("POST","http://eurepg.huan.tv/json",true);
        xmlhttpIp.setRequestHeader("Cache-Control","no-cache");
        xmlhttpIp.setRequestHeader("Pragma","no-cache");
        xmlhttpIp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttpIp.onreadystatechange=showList;
        /*
        clearHttpLocationTimer=setTimeout(function(){
            httpLocationTimeout = true;
            console.log("I will abort this http request");
            xmlhttpIp.abort();
            console.log("end this http request");
        },5000);
        */
        xmlhttpIp.send(getLocalChannelListJson);
        console.log("getLocationList");
    }
    function showList(){
        if(httpLocationTimeout==true)
        {
            
            if(1)//getLocalListNumber ==5)
            {
                getLocalListNumber = 0;
                showLocationList();
            }
            else
            {
                getLocalListNumber++;
                getLocationList()
            }
            return;
        }
        if (xmlhttpIp.readyState==4 && xmlhttpIp.status==200)
        {
            console.log("getLocationList success");
            try
            {
                getLocalListNumber = 0;
                clearTimeout(clearHttpLocationTimer);
                var jsonResult=xmlhttpIp.responseText;
                jsonResult =eval("(" + jsonResult + ")");
                if(jsonResult.error.code!="0")
                {
                    showLocationList();
                    return;
                }
                showLocationListFlag=0;
                ccidNum = jsonResult.num;
                for(var i=0;i<jsonResult.num;i++)
                {
                    $("channelName"+i).innerHTML = jsonResult.results.tvchannels[i].name;
                    jsonCCID.ccid[i]=jsonResult.results.tvchannels[i].ccid;
                    jsonCCID.Tv_id[i]=jsonResult.results.tvchannels[i].tvchannel_id;
                    jsonTostr("",jsonResult.results.tvchannels[i].tvchannel_id,i);
                    if(jsonResult.results.tvchannels[i].id!="")
                    {
                        
                    }
                    else
                    {
                        $("programInfo"+i).style.display="none";
                        jsonCCID.startTime[i]="0";
                        jsonCCID.endTime[i]="0";
                    }
                    
                }
                for(var j=jsonResult.num;j<9;j++)
                {
                    jsonTostr("","",j);
                    $("channelName"+j).innerHTML = channelRemind[0];
                    $("programInfo"+j).style.display="none";
                }
                showALlIpEpg();
            }
            catch(er)
            {
                channel.testLog("er="+er);
                xmlhttpIp.abort();
                showLocationList();
            }
        }
        else if(xmlhttpIp.readyState==4 && xmlhttpIp.status!=200)
        {
            console.log("getLocationList fail");
            if(1)//getLocalListNumber == 5)
            {
                getLocalListNumber = 0;
                showLocationList();
            }
            else
            {
                getLocalListNumber++;
                getLocationList()
            }
        }
    }
}
function getRequestObject()
{
    if (window.XMLHttpRequest){
        xmlhttpIp=new XMLHttpRequest();
    }
    else{
        xmlhttpIp=new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function showALlIpEpg()
{
    clearTimeout(clearHttpLocationTimer);
    httpLocationTimeout = false;
    if(xmlhttpIp!=null){
        xmlhttpIp.open("POST","http://eurepg.huan.tv/json",true);
        xmlhttpIp.setRequestHeader("Cache-Control","no-cache");
        xmlhttpIp.setRequestHeader("Pragma","no-cache");
        xmlhttpIp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttpIp.onreadystatechange=showEPG;
        /*
        clearHttpLocationTimer=setTimeout(function(){
            httpLocationTimeout = true;
            console.log("I will abort showALlIpEpg http request");
            xmlhttpIp.abort();
            console.log("I will abort showALlIpEpg http request end");
        },5000);
        */
        xmlhttpIp.send(getTimeAreaProgramsJson);
        console.log("showALlIpEpg");
    }
}
function showEPG(){
    if(httpLocationTimeout ==true){
       
		if(1)//getPosterNumber == 5)
		{
			 getPosterNumber = 0;
			 channel.testLog("xmlhttpIp:time out no Text return:");
		}
		else
		{
			getPosterNumber++;
			showALlIpEpg();
		}
        return;
    }
    else if (this.readyState==4 && this.status==200){
		console.log("showALlIpEpg success");
		 getPosterNumber = 0;
		clearTimeout(clearHttpLocationTimer);
		var jsonResultIp=this.responseText;
		jsonResultIp = eval("(" + jsonResultIp + ")");
		currentTime=setting.currentBaseTime;
		if(jsonResultIp.error.code!="0"){
				return;
		}
		try{
		console.log("showALlIpEpg channel num:"+jsonResultIp.num);
		for(var position=0;position<jsonResultIp.num;position++){
			var i=0;
			var getProgramlength = jsonResultIp.results[position].programs.length;
			for(;i<getProgramlength;i++){
				if(currentTime>=jsonResultIp.results[position].programs[i].start_time&&currentTime<=jsonResultIp.results[position].programs[i].end_time){
						break;
					}
				}
				if(i<getProgramlength){
					showProgramInfo(jsonResultIp,position,i);
				}
				else{
					hiddenProgramInfo(position);
				}
				if(i<getProgramlength){
					showPoster(jsonResultIp,position,i);
				}
				else{
					$("channelImg"+position).src = defaultPoster[0];
					$("channelImgNet"+position).style.display="none";
				}
			}
		}
		catch(er){
			top.g_channel.testLog("allIpEpg:"+er);
		}
    }
    else if(this.readyState==4 && this.status!=200){
        console.log("showALlIpEpg fail");
			if(1)//getPosterNumber == 5)
			{
				 getPosterNumber = 0;
				 this.abort();
			}
			else
			{
				getPosterNumber++;
				showALlIpEpg();
			}
    }
}
function hiddenProgramInfo(position)
{
	 tvMiddelProgramInfoSpan=$("programInfo"+position).getElementsByTagName("span");
	 tvMiddelProgramInfoDiv=$("programInfo"+position).getElementsByTagName("div");
	 $("programInfo"+position).style.display="none";
	 tvMiddelProgramInfoDiv[0].style.display="none";
	 tvMiddelProgramInfoSpan[0].innerHTML="";
	 tvMiddelProgramInfoSpan[1].innerHTML="";
	 tvMiddelProgramInfoSpan[2].innerHTML="";
}
function showProgramInfo(jsonResultIp,position,programsNumber)
{
	tvMiddelProgramInfoSpan=$("programInfo"+position).getElementsByTagName("span");
	tvMiddelProgramInfoDiv=$("programInfo"+position).getElementsByTagName("div");
	$("programInfo"+position).style.display="block";
	tvMiddelProgramInfoSpan[0].innerHTML=jsonResultIp.results[position].programs[programsNumber].title;
	tvMiddelProgramInfoSpan[1].innerHTML=setting.secondToTime(jsonResultIp.results[position].programs[programsNumber].start_time).substring(0,5);
	tvMiddelProgramInfoSpan[2].innerHTML=setting.secondToTime(jsonResultIp.results[position].programs[programsNumber].end_time).substring(0,5);
	jsonCCID.startTime[position]=jsonResultIp.results[position].programs[programsNumber].start_time;
	jsonCCID.endTime[position]=jsonResultIp.results[position].programs[programsNumber].end_time;
	var currentTimeV =changeTimeToSecond(setting.secondToTime(currentTime));
	var endTimeV  = changeTimeToSecond(setting.secondToTime(jsonResultIp.results[position].programs[programsNumber].end_time));
	var startTimeV = changeTimeToSecond(setting.secondToTime(jsonResultIp.results[position].programs[programsNumber].start_time));
	var duration = endTimeV-startTimeV;
	if(currentTimeV>=startTimeV&&currentTimeV<=endTimeV){
		var finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
		var unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
		tvMiddelProgramInfoDiv[1].style.width=finishWidth+"px";
		tvMiddelProgramInfoDiv[2].style.width=unFinishWidth+"px";
		tvMiddelProgramInfoDiv[0].style.display="block";
	}
	else{
		tvMiddelProgramInfoDiv[1].style.width=0+"px";
		tvMiddelProgramInfoDiv[2].style.width=0+"px";
		tvMiddelProgramInfoDiv[0].style.display="none";
	}
}
function showPoster(jsonResultIp,position,programsNumber)
{
//	console.log("channel.getProgramParentalRating(jsonCCID.ccid[position])=="+channel.getProgramParentalRating(jsonCCID.ccid[position]));
//	console.log("top.g_setting.parentalRating=="+top.g_setting.parentalRating);
	var parentalRating = top.g_setting.parentalRating;
	if(parentalRating!=0&&channel.getProgramParentalRating(jsonCCID.ccid[position]-1)>=parentalRating)
	{
		$("channelImg"+position).src = defaultPoster[1];
		return;
	}
	else
	{
		$("channelImg"+position).src = defaultPoster[0];
	}
	var MEDIUM = jsonResultIp.results[position].programs[programsNumber].img.MEDIUM;
	var LARGE = jsonResultIp.results[position].programs[programsNumber].img.LARGE;
	var XLARGE = jsonResultIp.results[position].programs[programsNumber].img.XLARGE;
	var SMALL=jsonResultIp.results[position].programs[programsNumber].img.SMALL;
	var THUMBNAIL = jsonResultIp.results[position].programs[programsNumber].img.THUMBNAIL;
	$("channelImgNet"+position).onerror = function(){
				$("channelImgNet"+position).style.display="none";
			}
	if(MEDIUM!=undefined && MEDIUM.length>0){
		$("channelImgNet"+position).src=jsonResultIp.results[position].programs[programsNumber].img.MEDIUM;
		$("channelImgNet"+position).style.display="block";
	}
	else if(LARGE!=undefined && LARGE.length>0){
		$("channelImgNet"+position).src=jsonResultIp.results[position].programs[programsNumber].img.LARGE;
		$("channelImgNet"+position).style.display="block";
	}
	else if(XLARGE!=undefined && XLARGE.length>0){
		$("channelImgNet"+position).src=jsonResultIp.results[position].programs[programsNumber].img.XLARGE;
		$("channelImgNet"+position).style.display="block";
	}
	else if(SMALL!=undefined && SMALL.length>0){
		$("channelImgNet"+position).src=jsonResultIp.results[position].programs[programsNumber].img.SMALL;
		$("channelImgNet"+position).style.display="block";
	}
	else if(THUMBNAIL!=undefined && THUMBNAIL.length>0){
		$("channelImgNet"+position).src=jsonResultIp.results[position].programs[programsNumber].img.THUMBNAIL;
		$("channelImgNet"+position).style.display="block";
	}
	else{
		$("channelImgNet"+position).style.display="none";
	}
}
var currentProgramEndTime = 0;
var currentProgramId      = -1;
function showScaleVideoWindow()
{
	if(setting.isHDScreen==1)
	{
		setting.scaleVideoWindow(130,240,610,344);
	}
	else
	{
		setting.scaleVideoWindow(90,170,440,240);
	}
}
function showCurrentChannelInfo()
{
	if(channel.inputSource==1)
	{
		try
		{
		var currentChannel = channel.getCurrentChannelInfo();
		var programList  = currentChannel.getProgramPlayList();
		$("curChannelName").innerHTML=currentChannel.name;
		if(programList[0].id == -1)
		{
			$("curProgramName").innerHTML="";
			$("curProgramStartTime").innerHTML="";
			$("curProgramEndTime").innerHTML="";
			$("currentPorTimeFinish").style.width=0+"px";
			$("currentPorTimeUnFinish").style.width=0+"px";
		}
		else
		{
			$("curProgramName").innerHTML=programList[0].name;
	
			var currentTimeV = changeTimeToSecond(setting.currentTime.substring(0,5));
			var endTimeV  = changeTimeToSecond(programList[0].endTime);
			var startTimeV = changeTimeToSecond(programList[0].startTime);
			if(currentTimeV>=startTimeV&&currentTimeV<=endTimeV)
			{
				$("curProgramStartTime").innerHTML=programList[0].startTime;
				$("curProgramEndTime").innerHTML=programList[0].endTime;
				var duration = endTimeV-startTimeV;
				var finishWidth = parseInt((currentTimeV-startTimeV)*180/duration);
				var unFinishWidth = parseInt((endTimeV-currentTimeV)*180/duration);
				$("currentPorTimeFinish").style.width=finishWidth+"px";
				$("currentPorTimeUnFinish").style.width=unFinishWidth+"px";
			}
			else
			{
				$("curProgramStartTime").innerHTML="";
				$("curProgramEndTime").innerHTML="";
				$("currentPorTimeFinish").style.width=0+"px";
				$("currentPorTimeUnFinish").style.width=0+"px";
			}
		}
		}catch(er)
		{
			channel.testLog(er);
		}
	}
	else
	{
		$("curChannelName").innerHTML="";
		$("curProgramName").innerHTML="";
		$("curProgramStartTime").innerHTML="";
		$("curProgramEndTime").innerHTML="";
		$("currentPorTimeFinish").style.width=0+"px";
		$("currentPorTimeUnFinish").style.width=0+"px"
	}
}
function showTV()
{
	showCurrentChannelInfo();
	channelList=channel.getRemChannelList();
	programStatus=0;// channelList.length; //netflix 认证
    showLocationList();
    if(top.checkNetStatus())
	{
		//getRequestObject();
		//checkVersionUpdate();
	}
	else
	{
		//showLocationList();
	}
	
}
function showNetworkStatus()
{
	if(top.checkNetStatus())
	{
		if(setting.wirelessNetworkConnectStatus!=0)
		{
			showWifiSignal(setting.netSignalStrength);
		}
		else 
		{
			$("networkImg").src=wireStatusImg[1];
		}
		return true;
	}
	else
	{
		showWifiSignal(-100);
		return false;
	}
}
function showLocationList()
{
	try
	{
		showLocationListFlag=1;
		for(var i=0;i<9;i++)
		{
			tvMiddelProgramInfoSpan=$("programInfo"+i).getElementsByTagName("span");
			tvMiddelProgramInfoDiv=$("programInfo"+i).getElementsByTagName("div");
			if(i<0)//channelList.length)//netflix认证不搜台
			{
				$("channelName"+i).innerHTML = channelList[i].name;
				var programList = channelList[i].getProgramPlayList();
				if(programList[0].id == -1)
				{
					$("programInfo"+i).style.display="none";
				}
				else
				{
					$("programInfo"+i).style.display="block";
					tvMiddelProgramInfoSpan[0].innerHTML=programList[0].name;
					tvMiddelProgramInfoSpan[1].innerHTML=programList[0].startTime;
					tvMiddelProgramInfoSpan[2].innerHTML=programList[0].endTime;
					var currentTimeV = changeTimeToSecond(setting.currentTime.substring(0,5));
					var endTimeV  = changeTimeToSecond(programList[0].endTime);
					var startTimeV = changeTimeToSecond(programList[0].startTime);
					var duration = endTimeV-startTimeV;
					if(currentTimeV>startTimeV&&currentTimeV<endTimeV)
					{
						var finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
						var unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
						tvMiddelProgramInfoDiv[1].style.width=finishWidth+"px";
						tvMiddelProgramInfoDiv[2].style.width=unFinishWidth+"px";
						tvMiddelProgramInfoDiv[0].style.display="block";
					}
					else
					{
						tvMiddelProgramInfoDiv[1].style.width=0+"px";
						tvMiddelProgramInfoDiv[2].style.width=0+"px";
						tvMiddelProgramInfoDiv[0].style.display="block";
					}
				}
			}
			else
			{
				$("channelName"+i).innerHTML = channelRemind[0];
				 tvMiddelProgramInfoDiv[0].style.display="none";
				 tvMiddelProgramInfoSpan[0].innerHTML="";
				 tvMiddelProgramInfoSpan[1].innerHTML="";
				 tvMiddelProgramInfoSpan[2].innerHTML="";
			}
		}
	}catch(er)
	{
		channel.testLog("showLocationList:"+er);
	}
}
function toUp()
{
	if(focusType == "tvTitleList")
	{
		littlePositionH = 1;
		littlePositionV = 0;
		$("mainTitle").style.color = "#991818";
        $("mainFocus").style.background = "none";
		$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
		$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
		$("littleWindowFocus").style.display = "block";
		focusType = "tvLittleWindow";
	}
	else if(focusType=="tvLittleWindow")
	{
		if(littlePositionH == 0)
		{
			$("littleWindowFocus").style.display = "none";
			$("bigWindowFocus").style.display = "block";
			focusType = "tvBigWindow";
		}
		else
		{
			littlePositionH = 0;
			$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
		}
	}
	else if(focusType == "tvBigWindow")
	{
		$("mainTitle").style.color = "#FFF";
        $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
		$("bigWindowFocus").style.display="none";
		focusType = "tvTitleList";
	}
	else if(focusType == "tvMiddleWindow")
	{
		if(middlePositionH == 0)
		{
			$("mainTitle").style.color = "#FFF";
            $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
			$("middleWindowFocus").style.display = "none";
			focusType = "tvTitleList";
		}
		else
		{
			middlePositionH--;
			$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
		}
	}
	else if(focusType == "appTitleList")
	{
		littlePositionV = 0;
		$("mainTitle").style.color = "#F00";
        $("mainFocus").style.background = "none";
		$("appLittleWindowFocus").style.left = littlePositionV*LITTLE_APP_MENU_LEFT+"px";
		$("appLittleWindowFocus").style.display = "block";
		focusType = "appLittleWindow";
	}
	else if(focusType == "appLittleWindow")
	{
		$("appLittleWindowFocus").style.display = "none";
		$("appBigWindowFocus").style.display = "block";
		focusType = "appBigWindow";
	}
	else if(focusType == "appBigWindow")
	{
		$("mainTitle").style.color = "#FFF";
        $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
		$("appBigWindowFocus").style.display="none";
		focusType = "appTitleList";
	}
	else if(focusType == "appMiddleWindow")
	{
		if(middlePositionH == 0)
		{
			$("mainTitle").style.color = "#FFF";
            $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
			$("appMiddleWindowFocus").style.display = "none";
			focusType = "appTitleList";
		}
		else
		{
			middlePositionH--;
			$("appMiddleWindowFocus").style.top = middlePositionH*MIDDLE_APP_MENU_TOP+"px";
		}
	}
	else if(focusType == "VideoTitleList")
	{
		$("mainTitle").style.color = "#F00";
        $("mainFocus").style.background = "none";
		middlePositionH=2;
		middlePositionV=0;
		$("VideoMiddleWindowFocus").style.left = middlePositionV*MIDDLE_VIDEO_MENU_LEFT+"px";
		$("VideoMiddleWindowFocus").style.top = middlePositionH*MIDDLE_VIDEO_MENU_TOP+"px";
		$("VideoMiddleWindowFocus").style.display = "block";
		focusType = "VideoList";
	}
	else if(focusType == "VideoList")
	{
		if(middlePositionH==0)
		{
			$("mainTitle").style.color = "#FFF";
            $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
			$("VideoMiddleWindowFocus").style.display = "none";
			focusType = "VideoTitleList";
		}
		else
		{
			middlePositionH--;
			$("VideoMiddleWindowFocus").style.top = middlePositionH*MIDDLE_VIDEO_MENU_TOP+"px";
		}
	}
}
function toDown()
{
	if(focusType == "tvTitleList")
	{
		$("mainTitle").style.color = "#F00";
        $("mainFocus").style.background = "none";
		$("bigWindowFocus").style.display="block";
		focusType = "tvBigWindow";
	}
	else if(focusType=="tvLittleWindow")
	{
		if(littlePositionH == 1)
		{
			$("mainTitle").style.color = "#FFF";
            $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
			$("littleWindowFocus").style.display="none";
			focusType = "tvTitleList";		
		}
		else
		{
			littlePositionH = 1;
			$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
		}
	}
	else if(focusType == "tvBigWindow")
	{
		littlePositionH = 0;
		littlePositionV = 0;
		$("bigWindowFocus").style.display="none";
		$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
		$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
		$("littleWindowFocus").style.display = "block";
		focusType = "tvLittleWindow";
	}
	else if(focusType == "tvMiddleWindow")
	{
		if(middlePositionH == 2)
		{
			$("mainTitle").style.color = "#FFF";
            $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
			$("middleWindowFocus").style.display = "none";
			focusType = "tvTitleList";
		}
		else
		{
			middlePositionH++;
			$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
		}
	}
	else if(focusType == "appTitleList")
	{
		littlePositionV = 0;
		$("mainTitle").style.color = "#F00";
        $("mainFocus").style.background = "none";
		$("appBigWindowFocus").style.display = "block";
		focusType = "appBigWindow";
	}
	else if(focusType == "appLittleWindow")
	{
		$("mainTitle").style.color = "#FFF";
        $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
		$("appLittleWindowFocus").style.display = "none";
		focusType = "appTitleList";
	}
	else if(focusType == "appBigWindow")
	{
		littlePositionV = 0;
		$("appBigWindowFocus").style.display = "none";
		$("appLittleWindowFocus").style.left = littlePositionV*LITTLE_APP_MENU_LEFT+"px";
		$("appLittleWindowFocus").style.display = "block";
		focusType = "appLittleWindow";
	}
	else if(focusType == "appMiddleWindow")
	{
		if(middlePositionH == 2)
		{
			$("mainTitle").style.color = "#FFF";
            $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
			$("appMiddleWindowFocus").style.display = "none";
			focusType = "appTitleList";
		}
		else
		{
			middlePositionH++;
			$("appMiddleWindowFocus").style.top = middlePositionH*MIDDLE_APP_MENU_TOP+"px";
		}
	}
	else if(focusType == "VideoTitleList")
	{
		$("mainTitle").style.color = "#F00";
        $("mainFocus").style.background = "none";
		middlePositionH=0;
		middlePositionV=0;
		$("VideoMiddleWindowFocus").style.left = middlePositionV*MIDDLE_VIDEO_MENU_LEFT+"px";
		$("VideoMiddleWindowFocus").style.top = middlePositionH*MIDDLE_VIDEO_MENU_TOP+"px";
		$("VideoMiddleWindowFocus").style.display = "block";
		focusType = "VideoList";
	}
	else if(focusType == "VideoList")
	{
		if(middlePositionH==2)
		{
			$("mainTitle").style.color = "#FFF";
            $("mainFocus").style.background = "url('images/homePageNetwork/ICON_Focus.png')";
			$("VideoMiddleWindowFocus").style.display = "none";
			focusType = "VideoTitleList";
		}
		else
		{
			middlePositionH++;
			$("VideoMiddleWindowFocus").style.top = middlePositionH*MIDDLE_VIDEO_MENU_TOP+"px";
		}
	}
}


function prePageAnimate(showPage,AnimateDir)
{
    $(showPage).style.webkitTransition = "none";
    if (AnimateDir=="left")
        $(showPage).style.left="1920px";
    else
        $(showPage).style.left="-1920px";
}

function pageAnimate(showPage, hiddenPage, AnimateDir, AnimateCase)
{
    if (AnimateDir=="left")
    {
        if (showPage=="VideoPage")
        {
            if (AnimateCase==0)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[2]; //进入Video页面
                $("mainFocus").style.left="362px";
                $("TVPage").style.webkitTransition = animation;
                $("VideoPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left="-1920px";
                $("VideoPage").style.left="0px";
                titleImgList[4].style.left="492px";
                titleImgList[1].style.display="block";
                titleImgList[2].style.display="none";
                focusType = "VideoTitleList";
            }
            else if (AnimateCase==1)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[2]; //进入Video页面
                $("mainFocus").style.left="362px";
                $("TVPage").style.webkitTransition = animation;
                $("VideoPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left="-1920px";
                $("VideoPage").style.left="0px";
                titleImgList[4].style.left="492px";
                titleImgList[1].style.display="block";
                titleImgList[2].style.display="none";
                middlePositionV=0;
                $("middleWindowFocus").style.display="none";
                $("VideoMiddleWindowFocus").style.left = middlePositionV*MIDDLE_VIDEO_MENU_LEFT+"px";
                $("VideoMiddleWindowFocus").style.top = middlePositionH*MIDDLE_VIDEO_MENU_TOP+"px";
                $("VideoMiddleWindowFocus").style.display="block";
                focusType = "VideoList";
            }
        }
        else if (showPage=="TVPage")
        {
            if (AnimateCase==0)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg1.src+"')";
                $("mainTitle").innerHTML = titleList[1]; //进入tv页面
                $("mainFocus").style.left="142px";
                $("TVPage").style.webkitTransition = animation;
                $("APPPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left="0px";
                $("APPPage").style.left="-1920px";
                titleImgList[4].style.left="292px";
                titleImgList[0].style.display="block";
                titleImgList[1].style.display="none";
                clearTimeout(picBigWindShowTimer);
                focusType = "tvTitleList";
            }
            else if (AnimateCase==1)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg1.src+"')";
				$("mainTitle").innerHTML = titleList[1]; //进入tv页面
				$("mainFocus").style.left="142px";
				$("TVPage").style.webkitTransition = animation;
				$("APPPage").style.webkitTransition = animation;
				//titleImgList[4].style.webkitTransition = animation;
				$("TVPage").style.left="0px";
				$("APPPage").style.left="-1920px";
				titleImgList[4].style.left="292px";
				titleImgList[0].style.display="block";
				titleImgList[1].style.display="none";
				$("appMiddleWindowFocus").style.display="none";
				$("bigWindowFocus").style.display="block";
				clearTimeout(picBigWindShowTimer);
				focusType = "tvBigWindow";
            }
            else if (AnimateCase==2)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg1.src+"')";
				$("mainTitle").innerHTML = titleList[1]; //进入tv页面
				$("mainFocus").style.left="142px";
				$("TVPage").style.webkitTransition = animation;
				$("APPPage").style.webkitTransition = animation;
				//titleImgList[4].style.webkitTransition = animation;
				$("TVPage").style.left="0px";
				$("APPPage").style.left="-1920px";
				titleImgList[4].style.left="292px";
				titleImgList[0].style.display="block";
				titleImgList[1].style.display="none";
				littlePositionV=0;
				littlePositionH=0;
				$("appMiddleWindowFocus").style.display="none";
				$("littleWindowFocus").style.top  = littlePositionH*LITTLE_TV_MENU_TOP+"px";
				$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
				$("littleWindowFocus").style.display="block";
				clearTimeout(picBigWindShowTimer);
				focusType = "tvLittleWindow";
            }
            else if (AnimateCase==3)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg1.src+"')";
				$("mainTitle").innerHTML = titleList[1]; //进入tv页面
				$("mainFocus").style.left="142px";
				$("TVPage").style.webkitTransition = animation;
				$("APPPage").style.webkitTransition = animation;
				//titleImgList[4].style.webkitTransition = animation;
				$("TVPage").style.left = "0px";
				$("APPPage").style.left = "-1920px";
				titleImgList[4].style.left = "292px";
				titleImgList[0].style.display = "block";
				titleImgList[1].style.display = "none";
				littlePositionV = 0;
				littlePositionH = 1;
				$("appMiddleWindowFocus").style.display="none";
				$("littleWindowFocus").style.top  = littlePositionH*LITTLE_TV_MENU_TOP+"px";
				$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
				$("littleWindowFocus").style.display="block";
				clearTimeout(picBigWindShowTimer);
				focusType = "tvLittleWindow";
            }
        }
        else if (showPage=="APPPage")
        {
            if (AnimateCase==0)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[0]; //进入app页面
                $("mainFocus").style.left="-62px";
                $("VideoPage").style.webkitTransition = animation;
                $("APPPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("VideoPage").style.left="-1920px";
                $("APPPage").style.left="0px";
                titleImgList[4].style.left="92px";
                titleImgList[1].style.display="block";
                titleImgList[0].style.display="none";
                titleImgList[2].style.display="block";
                appPicBigWinShow();
                focusType = "appTitleList";
            }
            else if (AnimateCase==1)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[0]; //进入app页面
                $("mainFocus").style.left="-62px";
                $("VideoPage").style.webkitTransition = animation;
                $("APPPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("VideoPage").style.left="-1920px";
                $("APPPage").style.left="0px";
                titleImgList[4].style.left="92px";
                titleImgList[1].style.display="block";
                titleImgList[0].style.display="none";
                titleImgList[2].style.display="block";
                $("VideoMiddleWindowFocus").style.display = "none";
                $("appBigWindowFocus").style.display = "block";
                appPicBigWinShow();
                focusType = "appBigWindow";
            }
            else if (AnimateCase==2)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[0]; //进入app页面
                $("mainFocus").style.left="-62px";
                $("VideoPage").style.webkitTransition = animation;
                $("APPPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("VideoPage").style.left="-1920px";
                $("APPPage").style.left="0px";
                titleImgList[4].style.left="92px";
                titleImgList[1].style.display="block";
                titleImgList[0].style.display="none";
                titleImgList[2].style.display="block";
                littlePositionV = 0;
                $("VideoMiddleWindowFocus").style.display = "none";
                $("appLittleWindowFocus").style.left = littlePositionV*LITTLE_APP_MENU_LEFT+"px";
                $("appLittleWindowFocus").style.display = "block";
                appPicBigWinShow();
                focusType = "appLittleWindow";
            }
        }
    }
    else if (AnimateDir=="right")
    {
        if (showPage=="APPPage")
        {
            if (AnimateCase==0)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                appPicBigWinShow();
                $("mainTitle").innerHTML = titleList[0]; //进入app页面
                $("mainFocus").style.left="-62px";
                $("TVPage").style.webkitTransition = animation;
                $("APPPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left="1920px";
                $("APPPage").style.left="0px";
                titleImgList[4].style.left="92px";
                titleImgList[1].style.display="block";
                titleImgList[0].style.display="none";
                focusType = "appTitleList";
            }
            else if (AnimateCase==1)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                appPicBigWinShow();
                $("mainTitle").innerHTML = titleList[0]; //进入app页面
                $("mainFocus").style.left="-62px";
                $("TVPage").style.webkitTransition = animation;
                $("APPPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left="1920px";
                $("APPPage").style.left="0px";
                titleImgList[4].style.left="92px";
                titleImgList[1].style.display="block";
                titleImgList[0].style.display="none";
                middlePositionV=3;
                middlePositionH=0;
                $("bigWindowFocus").style.display = "none";
                $("appMiddleWindowFocus").style.left = middlePositionV*MIDDLE_APP_MENU_LEFT+"px";
                $("appMiddleWindowFocus").style.top = middlePositionH*MIDDLE_APP_MENU_TOP+"px";
                $("appMiddleWindowFocus").style.display = "block";
                focusType = "appMiddleWindow";
            }
            else if (AnimateCase==2)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                appPicBigWinShow();
                $("mainTitle").innerHTML = titleList[0]; //进入app页面
                $("mainFocus").style.left="-62px";
                $("TVPage").style.webkitTransition = animation;
                $("APPPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left="1920px";
                $("APPPage").style.left="0px";
                titleImgList[4].style.left="92px";
                titleImgList[1].style.display="block";
                titleImgList[0].style.display="none";
                middlePositionV=3;
                middlePositionH=2;
                $("littleWindowFocus").style.display = "none";
                $("appMiddleWindowFocus").style.left = middlePositionV*MIDDLE_APP_MENU_LEFT+"px";
                $("appMiddleWindowFocus").style.top = middlePositionH*MIDDLE_APP_MENU_TOP+"px";
                $("appMiddleWindowFocus").style.display = "block";
                focusType = "appMiddleWindow";
            }
            else if (AnimateCase==3)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                appPicBigWinShow();
                $("mainTitle").innerHTML = titleList[0]; //进入app页面
                $("mainFocus").style.left="-62px";
                $("TVPage").style.webkitTransition = animation;
                $("APPPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left="1920px";
                $("APPPage").style.left="0px";
                titleImgList[4].style.left="92px";
                titleImgList[1].style.display="block";
                titleImgList[0].style.display="none";
                middlePositionV=3;
                middlePositionH=1;
                $("littleWindowFocus").style.display = "none";
                $("appMiddleWindowFocus").style.left = middlePositionV*MIDDLE_APP_MENU_LEFT+"px";
                $("appMiddleWindowFocus").style.top = middlePositionH*MIDDLE_APP_MENU_TOP+"px";
                $("appMiddleWindowFocus").style.display = "block";
                focusType = "appMiddleWindow";
            }
        }
        else if (showPage=="TVPage")
        {
            if (AnimateCase==0)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg1.src+"')";
                $("mainTitle").innerHTML = titleList[1]; //进入tv页面
                $("mainFocus").style.left="142px";
                $("TVPage").style.webkitTransition = animation;
                $("VideoPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left = "0px";
                $("VideoPage").style.left = "1920px";
                titleImgList[4].style.left = "292px";
                titleImgList[2].style.display = "block";
                titleImgList[1].style.display = "none";
                focusType = "tvTitleList";
            }
            else if (AnimateCase==1)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg1.src+"')";
                $("mainTitle").innerHTML = titleList[1]; //进入tv页面
                $("mainFocus").style.left="142px";
                $("TVPage").style.webkitTransition = animation;
                $("VideoPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("TVPage").style.left = "0px";
                $("VideoPage").style.left = "1920px";
                titleImgList[4].style.left = "292px";
                titleImgList[2].style.display = "block";
                titleImgList[1].style.display = "none";
                middlePositionV = 2;
                $("VideoMiddleWindowFocus").style.display="none";
                $("middleWindowFocus").style.top  = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
                $("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
                $("middleWindowFocus").style.display="block";
                focusType = "tvMiddleWindow";
            }
        }
        else if (showPage=="VideoPage")
        {
            if (AnimateCase==0)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[2]; //进入Video页面
                $("mainFocus").style.left="362px";
                $("APPPage").style.webkitTransition = animation;
                $("VideoPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("APPPage").style.left="1920px";
                $("VideoPage").style.left="0px";
                titleImgList[4].style.left="492px";
                titleImgList[1].style.display="block";
                titleImgList[2].style.display="none";
                titleImgList[0].style.display="block";
                clearTimeout(picBigWindShowTimer);
                focusType = "VideoTitleList";
            }
            else if (AnimateCase==1)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[2]; //进入Video页面
                $("mainFocus").style.left="362px";
                $("APPPage").style.webkitTransition = animation;
                $("VideoPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("APPPage").style.left="1920px";
                $("VideoPage").style.left="0px";
                titleImgList[4].style.left="492px";
                titleImgList[1].style.display="block";
                titleImgList[2].style.display="none";
                titleImgList[0].style.display="block";
                middlePositionV=4;
                middlePositionH=0;
                $("appBigWindowFocus").style.display = "none";
                $("VideoMiddleWindowFocus").style.left = middlePositionV*MIDDLE_VIDEO_MENU_LEFT+"px";
                $("VideoMiddleWindowFocus").style.top = middlePositionH*MIDDLE_VIDEO_MENU_TOP+"px";
                $("VideoMiddleWindowFocus").style.display = "block";
                clearTimeout(picBigWindShowTimer);
                focusType = "VideoList";
            }
            else if (AnimateCase==2)
            {
                document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[2]; //进入Video页面
                $("mainFocus").style.left="362px";
                $("APPPage").style.webkitTransition = animation;
                $("VideoPage").style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                //titleImgList[4].style.webkitTransition = animation;
                $("APPPage").style.left="1920px";
                $("VideoPage").style.left="0px";
                titleImgList[4].style.left="492px";
                titleImgList[1].style.display="block";
                titleImgList[2].style.display="none";
                titleImgList[0].style.display="block";
                middlePositionV=4;
                middlePositionH=2;
                $("appLittleWindowFocus").style.display = "none";
                $("VideoMiddleWindowFocus").style.left = middlePositionV*MIDDLE_VIDEO_MENU_LEFT+"px";
                $("VideoMiddleWindowFocus").style.top = middlePositionH*MIDDLE_VIDEO_MENU_TOP+"px";
                $("VideoMiddleWindowFocus").style.display = "block";
                clearTimeout(picBigWindShowTimer);
                focusType = "VideoList";
            }
        }
    }
}
function toJumpApp()
{
	if(top.checkNetStatus()==false)
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
function toJumpMedia()
{
	usbLock = factory.usbLock;
	hotelEnable = factory.hotelEnable;
	if((usbLock) && (hotelEnable))
	{
		top.$('main').src = "password.html?usbLock";
		top.main.focus();
	}
	else
	{
		top.$('main').src = "deviceList.html";
		top.main.focus();
	}
}
var showNotAvailableTimer  = 0;
function toJumpIPEPG()
{
	clearTimeout(showNotAvailableTimer);
	if(top.checkNetStatus()==false || setting.guideOnSwitch==0)
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
			showNotAvailableTimer=setTimeout(function(){top.$("operatePage").src = "";top.setFrameFocusPage("main");},3000);
		}
	}
	else
	{
		top.g_previousHtmlPage = "channelPlay.html";
		if(top.g_channel.inputSource == 1 && top.inputLock != 1)
		{
			setting.scaleVideoWindow(0,0,0,0);
			top.lastInputSource = top.g_channel.inputSource;
			top.appOpenFlag = 1;
			top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
			top.$("main").style.display="none";
			top.$("operatePage").style.display="none";
			top.$("otherPage").style.display="none";
			top.$("main").src="channelPlay.html";
			top.menu_visible_status = 0;
			top.$("operatePage").src = "";
			top.$("otherPage").src ="";
			top.g_ulits.openApplication("opera.ipepg",""/*"-u "+applist[12].url+" "*/);
		}
		else
		{
			top.setFrameFocusPage("operatePage");
			top.g_remindWord = "notAvailable";
			top.$("operatePage").src = "intermediate.html";
			showNotAvailableTimer=setTimeout(function(){top.$("operatePage").src = "";top.setFrameFocusPage("main");},3000);
		}
	}
}
function toRight()
{
	if(focusType == "tvLittleWindow")
	{
		if(littlePositionV == 1)
		{
			if(littlePositionH == 1)
			{
				middlePositionH = 2;
			}
			else
			{
				middlePositionH = 1;
			}
			middlePositionV = 0;
			$("littleWindowFocus").style.display = "none";
			$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
			$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
			$("middleWindowFocus").style.display = "block";
			focusType = "tvMiddleWindow";
		}
		else
		{
			littlePositionV++;
			$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
		}
	}
	else if(focusType=="tvTitleList")
	{
		if (enablePageAnimation)
        {
            prePageAnimate("VideoPage","left");
            setTimeout("pageAnimate('VideoPage','TVPage','left',0)",1);
        }
        else
        {
            pageAnimate('VideoPage','TVPage','left',0);
        }
	}
	else if(focusType == "tvBigWindow")
	{
		middlePositionH = 0;
		middlePositionV = 0;
		$("bigWindowFocus").style.display = "none";
		$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
		$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
		$("middleWindowFocus").style.display = "block";
		focusType = "tvMiddleWindow";
	}
	else if(focusType == "tvMiddleWindow")
	{
		if(middlePositionV == 2)
		{
			if (enablePageAnimation)
            {
                prePageAnimate("VideoPage","left");
                setTimeout("pageAnimate('VideoPage','TVPage','left',1)",1);
            }
            else
            {
                pageAnimate('VideoPage','TVPage','left',1);
            }
		}
		else
		{
			middlePositionV++;
			$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
		}
	}
	else if(focusType == "appTitleList")
	{
        if (enablePageAnimation)
        {
            prePageAnimate("TVPage","left");
            setTimeout("pageAnimate('TVPage','APPPage','left',0)",1);
        }
        else
        {
            pageAnimate('TVPage','APPPage','left',0);
        }
	}
	else if(focusType == "appLittleWindow")
	{
		if(littlePositionV==1)
		{
			middlePositionV = 0;
			middlePositionH = 2;
			$("appLittleWindowFocus").style.display = "none";
			$("appMiddleWindowFocus").style.top  = middlePositionH*MIDDLE_APP_MENU_TOP+"px";
			$("appMiddleWindowFocus").style.left = middlePositionV*MIDDLE_APP_MENU_LEFT+"px";
			$("appMiddleWindowFocus").style.display = "block";
			focusType = "appMiddleWindow";
		}
		else
		{
			littlePositionV++;
			$("appLittleWindowFocus").style.left = littlePositionV*LITTLE_APP_MENU_LEFT+"px";
		}
	}
	else if(focusType == "appBigWindow")
	{
		middlePositionV = 0;
		middlePositionH = 0;
		$("appBigWindowFocus").style.display = "none";
		$("appMiddleWindowFocus").style.top  = middlePositionH*MIDDLE_APP_MENU_TOP+"px";
		$("appMiddleWindowFocus").style.left = middlePositionV*MIDDLE_APP_MENU_LEFT+"px";
		$("appMiddleWindowFocus").style.display = "block";
		focusType = "appMiddleWindow";
	}
	else if(focusType == "appMiddleWindow")
	{
		if(middlePositionV == 3)
		{
			if(middlePositionH == 0)
			{
                if (enablePageAnimation)
                {
                    prePageAnimate("TVPage","left");
                    setTimeout("pageAnimate('TVPage','APPPage','left',1)",1);
                }
                else
                {
                    pageAnimate('TVPage','APPPage','left',1);
                }
			}
			else if(middlePositionH == 1)
			{
                if (enablePageAnimation)
                {
                    prePageAnimate("TVPage","left");
                    setTimeout("pageAnimate('TVPage','APPPage','left',2)",1);
                }
                else
                {
                    pageAnimate('TVPage','APPPage','left',2);
                }
			}
			else if(middlePositionH == 2)
			{
                if (enablePageAnimation)
                {
                    prePageAnimate("TVPage","left");
                    setTimeout("pageAnimate('TVPage','APPPage','left',3)",1);
                }
                else
                {
                    pageAnimate('TVPage','APPPage','left',3);
                }
			}
		}
		else
		{
			middlePositionV++;
			$("appMiddleWindowFocus").style.left = middlePositionV*MIDDLE_APP_MENU_LEFT+"px";
		}
	}
	else if(focusType == "VideoList")
	{
		if(middlePositionV == 4)
		{
            if(middlePositionH == 0)
			{
                if (enablePageAnimation)
                {
                    prePageAnimate("APPPage","left");
                    setTimeout("pageAnimate('APPPage','VideoPage','left',1)",1);
                }
                else
                {
                    pageAnimate('APPPage','VideoPage','left',1);
                }
			}
            else
            {
                if (enablePageAnimation)
                {
                    prePageAnimate("APPPage","left");
                    setTimeout("pageAnimate('APPPage','VideoPage','left',2)",1);
                }
                else
                {
                    pageAnimate('APPPage','VideoPage','left',2);
                }
            }
		}
		else
		{
			middlePositionV++;
			$("VideoMiddleWindowFocus").style.left = middlePositionV*MIDDLE_VIDEO_MENU_LEFT+"px";
		}
	}
	else if(focusType == "netTips")
	{
		if(TipsButton)
		{
			TipsButton=0;
			$("picResetFocus").style.left="190px"
		}
		else
		{
			TipsButton=1;
			$("picResetFocus").style.left="490px"
		}
	}
	else if(focusType == "scanTips")
	{
		if(TipsButton)
		{
			TipsButton=0;
			$("picResetFocus").style.left="190px"
		}
		else
		{
			TipsButton=1;
			$("picResetFocus").style.left="490px"
		}
	}
    else if(focusType == "VideoTitleList")
	{
        if (enablePageAnimation)
        {
            prePageAnimate("APPPage","left");
            setTimeout("pageAnimate('APPPage','VideoPage','left',0)",1);
        }
        else
        {
            pageAnimate('APPPage','VideoPage','left',0);
        }
	}
}
function toLeft()
{
	if(focusType == "tvLittleWindow")
	{
		if(littlePositionV == 0)
		{
            if (littlePositionH==0)
            {
                if (enablePageAnimation)
                {
                    prePageAnimate("APPPage","right");
                    setTimeout("pageAnimate('APPPage','TVPage','right',3)",1);
                }
                else
                {
                    pageAnimate('APPPage','TVPage','right',3);
                }
            }
            else if (littlePositionH==1)
            {
                if (enablePageAnimation)
                {
                    prePageAnimate("APPPage","right");
                    setTimeout("pageAnimate('APPPage','TVPage','right',2)",1);
                }
                else
                {
                    pageAnimate('APPPage','TVPage','right',2);
                }
            }
		}
		else
		{
			littlePositionV--;
			$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
		}
	}

	else if(focusType=="tvTitleList")
	{
		if (enablePageAnimation)
        {
            prePageAnimate("APPPage","right");
            setTimeout("pageAnimate('APPPage','TVPage','right',0)",1);
        }
        else
        {
            pageAnimate('APPPage','TVPage','right',0);
        }
	}
	else if(focusType == "tvBigWindow")
	{
		if (enablePageAnimation)
        {
            prePageAnimate("APPPage","right");
            setTimeout("pageAnimate('APPPage','TVPage','right',1)",1);
        }
        else
        {
            pageAnimate('APPPage','TVPage','right',1);
        }
	}
	else if(focusType == "tvMiddleWindow")
	{
		if(middlePositionV == 0)
		{
			if(middlePositionH == 0)
			{
				$("middleWindowFocus").style.display = "none";
				$("bigWindowFocus").style.display = "block";
				focusType = "tvBigWindow";
			}
			else if(middlePositionH == 1)
			{
				littlePositionH = 0;
				littlePositionV = 1;
				$("middleWindowFocus").style.display = "none";
				$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
				$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
				$("littleWindowFocus").style.display = "block";
				focusType = "tvLittleWindow";
			}
			else if(middlePositionH == 2)
			{
				littlePositionH = 1;
				littlePositionV = 1;
				$("middleWindowFocus").style.display = "none";
				$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
				$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
				$("littleWindowFocus").style.display = "block";
				focusType = "tvLittleWindow";
			}
		}
		else
		{
			middlePositionV--;
			$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
		}
	}
	else if(focusType == "appLittleWindow")
	{
		if(littlePositionV == 0)
		{
			if (enablePageAnimation)
            {
                prePageAnimate("VideoPage","right");
                setTimeout("pageAnimate('VideoPage','APPPage','right',2)",1);
            }
            else
            {
                pageAnimate('VideoPage','APPPage','right',2);
            }
		}
		else
		{
			littlePositionV--;
			$("appLittleWindowFocus").style.left = littlePositionV*LITTLE_APP_MENU_LEFT+"px";
		}
	}
	else if(focusType == "appMiddleWindow")
	{
		if(middlePositionV == 0)
		{
			if(middlePositionH == 0)
			{
				$("appMiddleWindowFocus").style.display = "none";
				$("appBigWindowFocus").style.display = "block";
				focusType = "appBigWindow";
			}
			else 
			{
				littlePositionV = 1;
				$("appMiddleWindowFocus").style.display = "none";
				$("appLittleWindowFocus").style.left = littlePositionV*LITTLE_APP_MENU_LEFT+"px";
				$("appLittleWindowFocus").style.display = "block";
				focusType = "appLittleWindow";
			}
		}
		else
		{
			middlePositionV--;
			$("appMiddleWindowFocus").style.left = middlePositionV*MIDDLE_APP_MENU_LEFT+"px";
		}
	}
	else if(focusType == "appBigWindow")
	{
		if (enablePageAnimation)
        {
            prePageAnimate("VideoPage","right");
            setTimeout("pageAnimate('VideoPage','APPPage','right',1)",1);
        }
        else
        {
            pageAnimate('VideoPage','APPPage','right',1);
        }
	}
	else if(focusType == "appTitleList")
	{
		if (enablePageAnimation)
        {
            prePageAnimate("VideoPage","right");
            setTimeout("pageAnimate('VideoPage','APPPage','right',0)",1);
        }
        else
        {
            pageAnimate('VideoPage','APPPage','right',0);
        }
	}
	else if(focusType == "VideoTitleList")
	{
		if (enablePageAnimation)
        {
            prePageAnimate("TVPage","right");
            setTimeout("pageAnimate('TVPage','VideoPage','right',0)",1);
        }
        else
        {
            pageAnimate('TVPage','VideoPage','right',0);
        }
	}
	else if(focusType == "VideoList")
	{
		if(middlePositionV == 0)
		{
            if (enablePageAnimation)
            {
                prePageAnimate("TVPage","right");
                setTimeout("pageAnimate('TVPage','VideoPage','right',1)",1);
            }
            else
            {
                pageAnimate('TVPage','VideoPage','right',1);
            }
		}
		else
		{
			middlePositionV--;
			$("VideoMiddleWindowFocus").style.left = middlePositionV*MIDDLE_VIDEO_MENU_LEFT+"px";
		}
	}
	else if(focusType == "netTips")
	{
		if(TipsButton)
		{
			TipsButton=0;
			$("picResetFocus").style.left="190px"
		}
		else
		{
			TipsButton=1;
			$("picResetFocus").style.left="490px"
		}
	}
	else if(focusType == "scanTips")
	{
		if(TipsButton)
		{
			TipsButton=0;
			$("picResetFocus").style.left="190px"
		}
		else
		{
			TipsButton=1;
			$("picResetFocus").style.left="490px"
		}
	}
}
function toOk()
{
	 if(typeof xmlhttpIp == 'object')
	 {
		 httpLocationTimeout = true;
		 xmlhttpIp.abort();
	 }
	if(focusType == "tvLittleWindow")
	{
		if(littlePositionH == 0)
		{	
			if(littlePositionV  == 0)
			{
				try
				{
				top.$("main").onload = function(){
				top.resetFramePacking3DMode();
				top.$("main").onload = function(){};
				}
				top.$('main').src = "inputSource.html";
				top.main.focus();
                if(top.g_isDownloading == 0){
                    top.g_isDownloading = 1;
                    setting.restartDownloadUpdateFile();
                }
                //channel.testLog("exit home pageVP and Go to InputSource....");
				}catch(er)
				{
					top.g_channel.testLog("er:"+er);
				}
			}
			else
			{
				top.$("main").onload = function(){
				top.resetFramePacking3DMode();
				top.$("main").onload = function(){};
				}
				top.$('main').src = "index.html";
				top.main.focus();
                if(top.g_isDownloading == 0){
                    top.g_isDownloading = 1;
                    setting.restartDownloadUpdateFile();
                }
                //channel.testLog("exit home pageVP and Go to Index(menu setting)....");
			}
		}
		else
		{
			if(littlePositionV  == 0)
			{
					toJumpMedia();
			}
			else
			{
				toJumpIPEPG();
			}
		}
	}
	else if(focusType == "tvMiddleWindow")
	{
		if(top.checkNetStatus()==false)
		{
			showHomePageNetTips();
		}
		else
		{
			if(programStatus>0)
			{
				if(showLocationListFlag==0&&ccidNum>middlePositionV+middlePositionH*3)
				{
				    top.channelLock = 0;
					top.parentalLock = 0;
					top.inputLock = 0;
					top.currentChannelIndex = jsonCCID.ccid[middlePositionV+middlePositionH*3]-1;
					top.g_channel.playByIndex(jsonCCID.ccid[middlePositionV+middlePositionH*3]-1);
					showScaleVideoWindow();
					showCurrentChannelInfo();
				}
				else if(showLocationListFlag==1&&channelList.length>middlePositionV+middlePositionH*3)
				{
					top.channelLock = 0;
					top.parentalLock = 0;
					top.inputLock = 0;
					top.currentChannelIndex = channelList[middlePositionV+middlePositionH*3].index;
					top.g_channel.playByIndex(channelList[middlePositionV+middlePositionH*3].index);
					showScaleVideoWindow();
					showCurrentChannelInfo();
				}
				else
				{
					showHomePageScanTips(homePageRemind[3]);
				}
			}
			else
			{
				showHomePageScanTips(homePageRemind[1]);
			}
		}
	}
	else if(focusType == "tvBigWindow")
	{
		top.jumpPage();
        if(top.g_isDownloading == 0){
            top.g_isDownloading = 1;
            setting.restartDownloadUpdateFile();
        }
	}
	else if(focusType == "appLittleWindow")
	{
		if(top.checkNetStatus()==false)
		{
			showHomePageNetTips();
			return;
		}
        setting.scaleVideoWindow(0,0,0,0);
		top.lastInputSource = top.g_channel.inputSource;
		top.g_channel.inputSource=10;
		top.appOpenFlag = 1;
		top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
		top.$("main").style.display="none";
		top.$("operatePage").style.display="none";
		top.$("otherPage").style.display="none";
		if(littlePositionV  == 0)
		{
			top.g_ulits.openApplication("opera.mmh",""/*"-u "+applist[12].url+" "*/);
		}
		else
		{
			top.g_ulits.openApplication("opera.mmh",""/*"-u "+applist[13].url+" "*/);
		}
	}
	else if(focusType == "appMiddleWindow")
	{
		if(top.checkNetStatus()==false)
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
		if(middlePositionH==0 && middlePositionV==1)
		{
			top.g_channel.inputSource=10;
            top.g_ulits.openApplication("opera.youtube","");
		}
		else if(middlePositionH==0 && middlePositionV==2)
		{
			top.g_channel.inputSource=10;
            top.g_ulits.sendMsgToApplication("vod.netflix", START_NETFLIX);//启动netflix，可以自己加个宏定义该消息
		}
        else
        {
            top.g_ulits.openApplication("opera.opera","-u "+applist[middlePositionH*4+middlePositionV].url+" ");
        }
	}
	else if(focusType == "netTips")
	{
		if(TipsButton)
		{
			focusType=preFocusType;
			$("homePageTips").style.display="none";
		}
		else
		{
			top.g_nextHtmlPage = "networkSetting.html";
			top.$("main").src="index.html";
		}
	}
	else if(focusType == "scanTips")
	{
		if(TipsButton)
		{
			focusType=preFocusType;
			$("homePageTips").style.display="none";
		}
		else
		{
			top.g_channel.inputSource = 1;
			top.$("main").onload = function(){
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
			{//开
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
    else if (focusType == "appBigWindow")
    {
		if(top.checkNetStatus()==false)
		{
			showHomePageNetTips();
			return;
		}
        setting.scaleVideoWindow(0,0,0,0);
		top.lastInputSource = top.g_channel.inputSource;
		top.g_channel.inputSource=10;
		top.appOpenFlag = 1;
	    top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
		top.$("main").style.display="none";
		top.$("operatePage").style.display="none";
		top.$("otherPage").style.display="none";
        
        top.g_ulits.openApplication("opera.opera","-u "+adlist[currentImgFag].url+" ");
    }
    else if (focusType == "VideoList")
    {
		if(top.checkNetStatus()==false)
		{
			showHomePageNetTips();
			return;
		}
        setting.scaleVideoWindow(0,0,0,0);
		top.lastInputSource = top.g_channel.inputSource;
		top.g_channel.inputSource=10;
		top.appOpenFlag = 1;
		top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
		top.$("main").style.display="none";
		top.$("operatePage").style.display="none";
		top.$("otherPage").style.display="none";
        
        top.g_ulits.openApplication("opera.opera","-u "+videolist[middlePositionH*5+middlePositionV].url+" ");
    }
}

function showCurTime()
{
	try
	{
		//top.closeSubtitle();
		showTimeFormat();
		if(top.checkNetStatus()&&top.appOpenFlag==0&&showLocationListFlag!=1)
		{
			//showUpdateEpg(); //netflix
		}
		else if(top.checkNetStatus()&&top.appOpenFlag==0&&showLocationListFlag==1)
		{
			//checkVersionUpdate();//netflix
		}
	}catch(er)
	{
		top.g_channel.testLog("showCurTime:"+er);
	}
}
function changeTimeToSecond(time)
{
	var timeV = time.split(":");
	return timeV[0]*60*60+timeV[1]*60;
}

function appPicBigWinShow()
{
	try
	{
	var imgFlag = $("appFlagBox").getElementsByTagName("img");
	for(var i = 0;i<5;i++)
	{
		if(i==currentImgFag)
		{
			imgFlag[currentImgFag].src = picImgFlag[0];
			$("bigImg"+currentImgFag).style.display="block";
		}
		else
		{
			imgFlag[i].src = picImgFlag[1];
			$("bigImg"+i).style.display = "none";
		}
	}
	$("currentAppName").innerHTML = appName[currentImgFag];
	currentImgFag++;
	if(currentImgFag>=5)
	{
		currentImgFag=0;
	}
	picBigWindShowTimer = setTimeout("appPicBigWinShow()",5000);
	}catch(er)
	{
		top.g_channel.testLog("appPicBigWinShow:"+er);
	}
}
function showHomePageNetTips()
{
	preFocusType=focusType;
	$("homePageTips").style.display="block";
	$("dialogName").innerHTML=top.others[28];
	$("dialogContent").innerHTML=homePageRemind[0];
	var divs=$("homePageTips").getElementsByTagName("div");
	divs[0].innerHTML=homePageButton[1];
	divs[1].innerHTML=homePageButton[2];
	TipsButton=1;
	$("picResetFocus").style.left="490px";
	focusType = "netTips";
}
function showHomePageScanTips(content)
{
	preFocusType=focusType;
	$("homePageTips").style.display="block";
	$("dialogName").innerHTML=top.others[28];
	$("dialogContent").innerHTML=content;
	var divs=$("homePageTips").getElementsByTagName("div");
	divs[0].innerHTML=homePageButton[0];
	divs[1].innerHTML=homePageButton[2];
	TipsButton=1;
	$("picResetFocus").style.left="490px";
	focusType = "scanTips";
}
function uninit()
{
	try
	{
	 if(typeof xmlhttpIp == 'object')
	 {
		 httpLocationTimeout = true;
		 xmlhttpIp="";
	 }
	 clearTimeout(showNotAvailableTimer);
	 top.$("operatePage").src = "";
	 top.setFrameFocusPage("main");
	 setting.scaleVideoWindow(0,0,0,0);
	 top.g_temp = "";
	 setting.sendMsgToDBC(4);
	 top.timeoutFuc.timeoutEnable=1;
	  top.restartSubtitle();
	}catch(er)
	{
		top.g_channel.testLog("uninit:"+er);
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2)doExit();//right key
	}
	$("bigWindow").onmousedown = function(evt){
		if(evt.button == 0){//left key
				top.jumpPage();
		}
	}
	var littleWinDivs=$("littleList").getElementsByTagName("div");
	littleWinDivs[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
				top.$('main').src = "inputSource.html";
				top.main.focus();
		}
	}
	littleWinDivs[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
				top.$('main').src = "index.html";
				top.main.focus();
		}
	}
	littleWinDivs[2].onmousedown = function(evt){
		if(evt.button == 0){//left key
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?media"
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?media";
					top.main.focus();
					return;
				}
				top.$('main').src = "deviceList.html";
				top.main.focus();
		}
	}
	littleWinDivs[3].onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.g_previousHtmlPage = "channelPlay.html";
			littlePositionV  = 1;
			littlePositionH  = 1;
			focusType = "tvLittleWindow";
			if(top.g_channel.inputSource == 1 && top.inputLock != 1)
			{
				if(top.checkNetStatus()==false)
				{
					top.$("main").src = "programGuide.html";
				}
				else
				{
					setting.scaleVideoWindow(0,0,0,0);
					top.appOpenFlag = 1;
					top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
					top.$("main").style.display="none";
					top.$("operatePage").style.display="none";
					top.$("otherPage").style.display="none";
					top.g_ulits.openApplication("opera.ipepg",""/*"-u "+applist[12].url+" "*/);
				}
			}
			else
			{
				top.g_remindWord = "notAvailable";
				top.$("main").src = "intermediate.html";
			}
			top.main.focus();
		}
	}
	var middleWinDivs=$("middleList").getElementsByTagName("div");
	for(var i=0;i<3;i++)
	{
		for(var j=0;j<3;j++)
		{
			middleWinDivs[i*3+j].onmousedown = function(evt){
				if(evt.button == 0){//left key
				        middlePositionV=j;
						middlePositionH=i;
						$("mainTitle").style.color = "#F00";
       					$("mainFocus").style.background = "none";
						$("littleWindowFocus").style.display = "none";
						$("bigWindowFocus").style.display = "none";
						$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
						$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
						$("middleWindowFocus").style.display = "block";
						focusType = "tvMiddleWindow";
						if(top.checkNetStatus()==false)
						{
							showHomePageNetTips();
						}
						else
						{
							if(programStatus>0)
							{
								if(( (wirelessStatus==1 || wireStatus == 1)&&ccidNum>middlePositionV+middlePositionH*3))
								{
								     top.channelLock = 0;
									top.parentalLock = 0;
									top.inputLock = 0;
									if(showLocationListFlag==0&&(wirelessStatus==1 || wireStatus == 1)&&jsonCCID.ccid[middlePositionV+middlePositionH*3])
									{
										top.currentChannelIndex = jsonCCID.ccid[middlePositionV+middlePositionH*3];
										top.g_channel.playByIndex(jsonCCID.ccid[middlePositionV+middlePositionH*3]);
									}
									else
									{
										top.currentChannelIndex = channelList[middlePositionV+middlePositionH*3].index;
										top.g_channel.playByIndex(channelList[middlePositionV+middlePositionH*3].index);
									}
									top.g_previousHtmlPage = "channelPlay.html";
									top.g_isShowInfoBar = 1;
									top.jumpPage();
								}
								else
								{
									showHomePageScanTips(homePageRemind[3]);
								}
							}
							else
							{
								showHomePageScanTips(homePageRemind[1]);
							}
						}
				}
			}
		}
	}
	var tipsDiv = $("homePageTips").getElementsByTagName("div");
	tipsDiv[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "scanTips")
			{
				top.g_channel.inputSource = 1;
				top.g_nextHtmlPage = "channelScan.html"
				top.$("main").src="index.html";
			}
			else if(focusType == "netTips")
			{
				top.g_nextHtmlPage = "networkSetting.html";
				top.$("main").src="index.html";
			}
		}
	}
	tipsDiv[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "scanTips")
			{
				focusType=preFocusType;
				$("homePageTips").style.display="none";
			}
			else if(focusType == "netTips")
			{
				focusType=preFocusType;
				$("homePageTips").style.display="none";
			}
		}
	}
	for(var i=0;i<5;i++)
	{
		$("bigImg"+i).onmousedown = function(evt){
				if(evt.button == 0){//left key
				    $("appLittleWindowFocus").style.display = "none";
					$("mainTitle").style.color = "#F00";
        			$("mainFocus").style.background = "none";
					$("appMiddleWindowFocus").style.display = "none";
					$("appBigWindowFocus").style.display = "block";
					focusType = "appBigWindow";
					if(top.checkNetStatus()==false)
					{
						showHomePageNetTips();
						return;
					}
					setting.scaleVideoWindow(0,0,0,0);
					top.lastInputSource = top.g_channel.inputSource;
					top.g_channel.inputSource=10;
					top.appOpenFlag = 1;
					top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
					top.$("main").style.display="none";
					top.$("operatePage").style.display="none";
					top.$("otherPage").style.display="none";
					
					top.g_ulits.openApplication("opera.opera","-u "+adlist[currentImgFag].url+" ");
				}
			}
	}
	var appMiddleWinDivs=$("middleList").getElementsByTagName("div");
	for(var i=0;i<3;i++)
	{
		for(var j=0;j<4;j++)
		{
			appMiddleWinDivs[i*4+j].onmousedown = function(evt){
				if(evt.button == 0){//left key
				        middlePositionV=j;
						middlePositionH=i;
						$("mainTitle").style.color = "#F00";
       					$("mainFocus").style.background = "none";
						$("appLittleWindowFocus").style.display = "none";
						$("appBigWindowFocus").style.display = "none";
						$("appMiddleWindowFocus").style.top = middlePositionH*MIDDLE_APP_MENU_TOP+"px";
						$("appMiddleWindowFocus").style.left = middlePositionV*MIDDLE_APP_MENU_LEFT+"px";
						$("appMiddleWindowFocus").style.display = "block";
						focusType = "appMiddleWindow";
						if(top.checkNetStatus()==false)
						{
							showHomePageNetTips();
							return;
						}
						setting.scaleVideoWindow(0,0,0,0);
						top.lastInputSource = top.g_channel.inputSource;
						top.g_channel.inputSource=10;
						top.appOpenFlag = 1;
						top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
						top.$("main").style.display="none";
						top.$("operatePage").style.display="none";
						top.$("otherPage").style.display="none";
						if(middlePositionH==0 && middlePositionV==1)
						{
							top.g_ulits.openApplication("opera.youtube","");
						}
						else
						{
							top.g_ulits.openApplication("opera.opera","-u "+applist[middlePositionH*4+middlePositionV].url+" ");
						}
				}
			}
		}
	}
	
	var appLittleWinDivs=$("AppLittleList").getElementsByTagName("div");
	for(var i=0;i<2;i++)
	{
	appLittleWinDivs[i].onmousedown = function(evt){
				if(evt.button == 0){//left key
						littlePositionV = i;
						$("mainTitle").style.color = "#F00";
       					$("mainFocus").style.background = "none";
						$("appLittleWindowFocus").style.left = littlePositionV*LITTLE_APP_MENU_LEFT+"px";
						$("appLittleWindowFocus").style.display = "block";
						$("appBigWindowFocus").style.display = "none";
						$("appMiddleWindowFocus").style.display = "none";
						focusType = "appMiddleWindow";
						if(top.checkNetStatus()==false)
						{
							showHomePageNetTips();
							return;
						}
						setting.scaleVideoWindow(0,0,0,0);
						top.lastInputSource = top.g_channel.inputSource;
						top.g_channel.inputSource=10;
						top.appOpenFlag = 1;
						top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
						top.$("main").style.display="none";
						top.$("operatePage").style.display="none";
						top.$("otherPage").style.display="none";
						if(littlePositionV  == 0)
						{
							top.g_ulits.openApplication("opera.mmh",""/*"-u "+applist[12].url+" "*/);
						}
						else
						{
							top.g_ulits.openApplication("opera.mmh",""/*"-u "+applist[13].url+" "*/);
						}
				}
			}
	}
	var videoDivs = $("VideoMiddleList").getElementsByTagName("div");
	for(var i= 0 ;i<3;i++)
	{
		for(var j=0;j<5;j++)
		{
			videoDivs[i*5+j].onmousedown = function(evt){
				if(evt.button == 0){//left key
				        middlePositionV=j;
						middlePositionH=i;
						$("mainTitle").style.color = "#F00";
       					$("mainFocus").style.background = "none";
						$("VideoMiddleWindowFocus").style.top = middlePositionH*MIDDLE_VIDEO_MENU_TOP+"px";
						$("VideoMiddleWindowFocus").style.left = middlePositionV*MIDDLE_VIDEO_MENU_LEFT+"px";
						$("VideoMiddleWindowFocus").style.display = "block";
						focusType = "VideoList";
						if(top.checkNetStatus()==false)
						{
							showHomePageNetTips();
							return;
						}
						setting.scaleVideoWindow(0,0,0,0);
						top.lastInputSource = top.g_channel.inputSource;
						top.g_channel.inputSource=10;
						top.appOpenFlag = 1;
						top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
						top.$("main").style.display="none";
						top.$("operatePage").style.display="none";
						top.$("otherPage").style.display="none";
						
						top.g_ulits.openApplication("opera.opera","-u "+videolist[middlePositionH*5+middlePositionV].url+" ");
				}
			}
		}
	}
	var titleImg = $("title").getElementsByTagName("img");
	titleImg[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
				document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[0]; //进入app页面
                $("mainFocus").style.left="-62px";
                $("VideoPage").style.left="-1920px";
				$("TVPage").style.left="1920px";
                $("APPPage").style.left="0px";
                titleImgList[4].style.left="92px";
                titleImgList[1].style.display="block";
                titleImgList[0].style.display="none";
                titleImgList[2].style.display="block";
				 clearTimeout(picBigWindShowTimer);
                appPicBigWinShow();
			   $("VideoMiddleWindowFocus").style.display = "none";
				$("appLittleWindowFocus").style.display = "none";
				$("bigWindowFocus").style.display = "none";
				$("middleWindowFocus").style.display = "none";
				$("littleWindowFocus").style.display = "none";
				$("appBigWindowFocus").style.display = "none";
				$("appMiddleWindowFocus").style.display = "none";
                focusType = "appTitleList";
		}
	}
	titleImg[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
				document.body.style.backgroundImage="url('"+top.homePageBgImg1.src+"')";
                $("mainTitle").innerHTML = titleList[1]; //进入tv页面
                $("mainFocus").style.left="142px";
                $("TVPage").style.left="0px";
				$("VideoPage").style.left="1920px";
                $("APPPage").style.left="-1920px";
                titleImgList[4].style.left="292px";
				titleImgList[2].style.display="block";
                titleImgList[0].style.display="block";
                titleImgList[1].style.display="none";
                clearTimeout(picBigWindShowTimer);
				$("VideoMiddleWindowFocus").style.display = "none";
				$("appLittleWindowFocus").style.display = "none";
				$("bigWindowFocus").style.display = "none";
				$("middleWindowFocus").style.display = "none";
				$("littleWindowFocus").style.display = "none";
				$("appBigWindowFocus").style.display = "none";
				$("appMiddleWindowFocus").style.display = "none";
                focusType = "tvTitleList";
		}
	}
	titleImg[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
				 document.body.style.backgroundImage="url('"+top.homePageBgImg.src+"')";
                $("mainTitle").innerHTML = titleList[2]; //进入Video页面
                $("mainFocus").style.left="362px";
                $("TVPage").style.left="-1920px";
                $("VideoPage").style.left="0px";
				$("APPPage").style.left="1920px";
                titleImgList[4].style.left="492px";
				 titleImgList[0].style.display="block";
                titleImgList[1].style.display="block";
                titleImgList[2].style.display="none";
				clearTimeout(picBigWindShowTimer);
				$("VideoMiddleWindowFocus").style.display = "none";
				$("appLittleWindowFocus").style.display = "none";
				$("bigWindowFocus").style.display = "none";
				$("middleWindowFocus").style.display = "none";
				$("littleWindowFocus").style.display = "none";
				$("appBigWindowFocus").style.display = "none";
				$("appMiddleWindowFocus").style.display = "none";
                focusType = "VideoTitleList";
		}
	}
}
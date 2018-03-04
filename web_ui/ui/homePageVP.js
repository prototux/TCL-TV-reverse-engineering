
document.onnotify = notifyProcess;
document.onkeydown = keyproc;
var focusType                   = "tvBigWindow";
var preFocusType                = "tvBigWindow";
var MIDDLE_TV_MENU_TOP 			= 260;					//middle菜单焦点移动起始位置
var MIDDLE_TV_MENU_LEFT 		= 350;					//middle菜单焦点移动的step
var LITTLE_TV_MENU_TOP 			= 186;					//LITTLE菜单焦点移动起始位置
var LITTLE_TV_MENU_LEFT 		= 215;					//LITTLE菜单焦点移动的step
var START_NETFLIX_BY_ICON       = 0xF042;
var middlePositionV             = 0;                    //节目列表焦点水平位移
var middlePositionH             = 0;                    //节目列表焦点垂直位移
var littlePositionV             = 0;                    //设置列表焦点水平位移
var littlePositionH             = 0;                    //设置列表焦点垂直位移
var titleList                   = top.homePageTitleList;
var channelRemind               = [top.homePageRemind[2]];
var homePageRemind              = top.homePageRemind;
var channel_remind              = top.screenSavers;
var homePageButton              = [top.chOptions[0],top.others[14],top.okCancel[1]];
/*-------------------------------- smart tv                   media             		netflix          Media                         epg                   */
var tvLittleWinName             = [top.homePageLittleWin[3], top.homePageLittleWin[1],top.netflix, top.others[26],top.golive,top.homePageLittleWin[0]];
var signalStrength              = ["images/homePageNetwork/wifi-0.png","images/homePageNetwork/wifi-1.png","images/homePageNetwork/wifi-2.png","images/homePageNetwork/wifi-3.png","images/homePageNetwork/wifi-4.png","images/homePageNetwork/wifi-5.png"];
var wireStatusImg               = ["images/homePageNetwork/wired-2.png","images/homePageNetwork/wired-1.png"];
var defaultPoster               = ["images/TV-Default-Posters.png","images/TV-Default-Posters-Lock.png"]
var initFinish                  = 0;
var programStatus               = 0; 
var TipsButton                  = 1;
var MacAdress                   = "";
var showLocationListFlag        = 1;
var currentTime                 = 0;
var setting                     = top.g_setting;
var channel                     = top.g_channel;  
var multimedia                  = top.g_media;
var oldKeyCode                  = 0xffff;  
var showHistoryTimer            = 0;   
var repeatKeyPressTimer         = 0;       
var clearHttpLocationTimer      = 0;
var httpLocationTimeout         = true;
var clearHttpTimer              = 0;
var xmlhttpIp                   = "";
var currentChannelIndex         = top.g_channel.currentIndex;
var factory                     = top.g_factory;
var usbLock                     = 0;
var hotelEnable                 = 0;
var reportLocationHttpTimer     = 0;
var reportNumber                = 0;
var getLocalListNumber          = 0;
var getPosterNumber             = 0;
var ccidNum                     = 0;
var currentProgramEndTime       = 0;
var currentProgramStartTime     = 0;
var currentProgramId            = -1;
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
var channelList;
var currentIndex  = 0;
var tvMiddelProgramInfoSpan;
var tvMiddelProgramInfoDiv;
var parentalRating = top.g_setting.parentalRating;
var nonSacnChannelsJson = {"action":"GetRecommendWithNonSacnChannels","developer": {"apikey": "1234","name":"tclrpc_1"},"device": {"deviceId": "40:8B:F6:F4:FB:E8"},"param": {"size": 9,"country":"FRA","language": "FRE","rating":parentalRating}};
var onGoingJson  =  {"action": "GetOnGoingPrograms","developer": {"apikey": "1234","name": "tclrpc_1"},"device": {"deviceId": "40:8B:F6:F4:FB:E8"},"param": {"page": 1,"pagesize": 9,"ipgcategory_l1": "all","rating": parentalRating}};
var checkVersion =  {"action": "CheckLocalVersion","developer": {"apikey": "1234","name": "tclrpc_1"},"device": {"deviceId": "40:8B:F6:F4:FB:E8"},"param": {"version": ""}};
var jsonCCID = 
{
	"ccid":["0","0","0","0","0","0","0","0","0"],
	"Tv_id":["","","","","","","","",""],
	"startTime":["","","","","","","","",""],
	"endTime":["","","","","","","","",""]
};
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
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
			top.globleShow.focus();
			top.setFrameFocusPage("globleShow");
			//top.startVolumeTimer();
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
		//lqt- 当appOpenFlag == 1的时候，判断当虚拟遥控器调出时的键值  ：快捷键、方向键、确认键、返回键
		if(keycode == top.VK_VIRTUAL_REMOTE )
		{
			
			//显示或者不显示--lqt
			//如果是偶数的话，就显示
			if(top.virtualRemoteState == 0)
			{
				top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
				top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote(top.RemoteConntrolType);
			}
			//如果是奇数的话，就隐藏
			else
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
		}
		else if(keycode == top.VK_VIRTUAL_KEYBOARD_UP)//上
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForUp();
		}
		else if(keycode == top.VK_VIRTUAL_KEYBOARD_DOWN)//下
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForDown(); 
		}
		else if(keycode == top.VK_VIRTUAL_KEYBOARD_LEFT)//左
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForLeft();
		}
		else if(keycode == top.VK_VIRTUAL_KEYBOARD_RIGHT)//右
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForRight(); 
		}
		//lqt--鼠标的左键
		else if(keycode == top.VK_VIRTUAL_MOUSE_OK)//确认
		{
			var clientX = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientX", "0");
			var clientY = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientY", "0");
			console.log("lqt---HomePageVP.js---clientX: "+clientX);
			console.log("lqt---HomePageVP.js---clientY: "+clientY);
			top.document.getElementById("virtualRemote").contentWindow.keyDownMouseClick(clientX,clientY); 
		}
		//lqt--虚拟遥控器的ok键
		else if(keycode == top.VK_VIRTUAL_KEYBOARD_OK)//确认
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForOK();
		}
		//lqt--虚拟遥控器的返回键
		else if(keycode == top.VK_VIRTUAL_KEYBOARD_BACK)//返回
		{
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
		}
		return;
	}
	switch (keycode)
	{
		case top.VK_PRE_CH://pre-ch
		//if(oldKeyCode!=top.VK_PRE_CH)
		//{
		//	oldKeyCode=top.VK_PRE_CH;
		//	repeatKeyPressTimer=setTimeout(function(){oldKeyCode=0xffff;
		//	clearTimeout(showHistoryTimer);
		//	showHistoryTimer=0;
		//	},300);
		//	showHistoryTimer=setTimeout(function(){
		//		if(oldKeyCode==top.VK_PRE_CH)
		//		{
		//			if(focusType!="history")
		//			{
		//				top.$('operatePage').src = "homePageHistory.html";
		//				if(focusType!="source"&&focusType!="sleep"&&focusType!="powerOff")
		//				{
		//					preFocusType=focusType;
		//				}
		//				focusType="history";
		//				top.setFrameFocusPage("operatePage");
		//			}
		//		}
		//		},3000);
		//}
		//else
		//{
		//	clearTimeout(repeatKeyPressTimer);
		//	repeatKeyPressTimer=setTimeout(function(){oldKeyCode=0xffff;
		//	clearTimeout(showHistoryTimer);
		//	showHistoryTimer=0;
		//	},300);
		//}
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
			top.$("main").onload = function(){
				top.resetFramePacking3DMode();
				top.$("main").onload = function(){};
				};
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
			break;
		case top.VK_POWER://power
		 break ;
		case top.VK_VIRTUAL_REMOTE://lqt--主页不响应本身的虚拟遥控器
		{
			break;
		}
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
function isOpenSourceTip(param)
{
	switch(param)
	{
		case 1:
		case 11:
		case 4://cmp
		case 6://hdmi1
		case 7://hdmi2
		case 8://hdmi3
		case 12://hdmi4
			return 1;
		default:
			return 0;

	}
}
function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	switch(msg)
	{
		case top.E_SRC_CHANGE_SET_INPUT_SOURCE:
		{
			if ((value !=top.g_channel.inputSource)&&isOpenSourceTip(value)&&top.RemoteConntrolType != "Netflix")
			{
				if(parseInt(top.g_setting.getProperty("app.ui.noticeSource","1")) == 1)
				{
					if(top.appOpenFlag == 1)
						top.$("otherPage").style.display="block";
					top.$("operatePage").src = "";
					top.$("otherPage").src = "switchSourceRemind.html?" + value;
					top.otherPage.focus();
					top.setFrameFocusPage("otherPage");
					return;
				}
			}
			break;
		}

		case top.E_APP_CLOSE:
            if (top.scheduleNetflix)
            {
                top.scheduleNetflix = 0;
                top.g_channel.inputSource=10;
                top.g_ulits.sendMsgToApplication("vod.netflix", 0xF041);
                return;
            }
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
			if(1 == top.downLoadOpenApp)
			{
				top.uiResumeDownloadingUpFile();
				top.downLoadOpenApp = 0;
			}
            if(top.willJumpLocalEPG)
            {
                top.willJumpLocalEPG = 0;
                top.$("main").onload=function(){
                    top.appOpenFlag = 0;
                    top.$("main").style.display="block";
                    top.$("operatePage").style.display="block";
                    top.$("otherPage").style.display="block";
                    top.$("globleShow").style.display="block";
                    top.$("main").onload=function(){};
                };
                top.$("main").src = "programGuide.html";
            }
            else if (top.enterChannelPlay)
            {
				top.enterChannelPlay  = 0;
				top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x400|0x800,0,2);
				top.appOpenFlag = 0;
				top.g_channel.inputSource=top.enterInputSource;
				top.$("operatePage").style.display="block";
				top.$("otherPage").style.display="block";
				top.$("globleShow").style.display="block";
				top.jumpPage();

				//top.keySetForUI(1);
            }
            else
            {
                top.appOpenFlag = 0;
                top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x400|0x800,0,2);
                top.$("main").style.display="block";
                top.$("operatePage").style.display="block";
                top.$("otherPage").style.display="block";
                top.$("globleShow").style.display="block";
            }
            break;
        case top.E_APP_IPEPG_OPEN_LOCAL_EPG:
        {
            top.willJumpLocalEPG = 1;
        }
        break;
        case top.E_APP_OPEN_NETFLIX:
        {
            top.scheduleNetflix = 1;
        }
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
		else
		{
			if(top.E_READY_TO_CHANGE_SCART == msg)
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
	top.RemoteConntrolType = "default";//lqt--设置默认的虚拟遥控器场景，为不显示
	//面板按键处理场景设置=
	setTimeout(function(){
	if(setting.isHDScreen == 1)
	{
		setting.scaleVideoWindow(130,240,610,344);
	}
	else
	{
		setting.scaleVideoWindow(90,170,440,240);
	}
	if(top.currentPanel == 1)
	 {
		if(top.g_setting.pic3DMode != 0)
		{
			top.g_setting.pic3DMode = 0;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
		}
	}
	else if(top.currentPanel == 2)
	{
		if(top.g_setting.pic3DMode != 0)
		{
			top.g_setting.pic3DMode = 0;
		}
	}
	MacAdress               = top.g_setting.tvDeviceID;
	nonSacnChannelsJson.device.deviceId    = MacAdress;
	onGoingJson.device.deviceId = MacAdress;
	checkVersion.device.deviceId = MacAdress;
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
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(0);
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
	nonSacnChannelsJson.param.country =country[i];
}
function channgeLanguage()
{
	var currentLanguage = top.g_setting.menuLanguage;
	var i = mlmLangIndex.indexOf(currentLanguage);
	nonSacnChannelsJson.param.language = language[i];
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

function checkVersionUpdate()
{
	console.log("top.g_channel.channelListVersion==="+top.g_channel.channelListVersion);
	checkVersion.param.version = parseInt(top.g_channel.channelListVersion);
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
            console.log("checkVersionUpdate success");
            var jsonResult = xmlhttp.responseText;
			jsonResult = JSON.parse(jsonResult);
			if(jsonResult.error.code == "0")
			{
				// 表示服务器上的版本与本地相同 不用更新数据 可以直接获取数据
				console.log("checkVersionUpdate success no report");
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
            console.log("checkVersionUpdate fail");
            repocrLocationInit(); 
        }
    }
    xmlhttp.open("POST", top.UpdateUrl+"json",true);
    xmlhttp.send(JSON.stringify(checkVersion));
    console.log("checkVersionUpdate");
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
            showLocationList();
        }
    }
    xmlhttp.open("POST", top.g_EpgUpdateUrl+"json",true);
    xmlhttp.send(reportJson);
    console.log("reportLocationList");
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
    if(xmlhttpIp!=null){
        xmlhttpIp.open("POST", top.g_EpgUpdateUrl+"json",true);
        xmlhttpIp.setRequestHeader("Cache-Control","no-cache");
        xmlhttpIp.setRequestHeader("Pragma","no-cache");
        xmlhttpIp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttpIp.onreadystatechange=showOnGoingChannelList;
        xmlhttpIp.send(JSON.stringify(onGoingJson));
        console.log("getOnGoingList");
    }
    function showOnGoingChannelList()
    {
        if(xmlhttpIp.readyState==4 && xmlhttpIp.status==200)
        {
            console.log("getOnGoingList success");
            try
            {
                clearTimeout(clearHttpLocationTimer);
                var jsonResult=xmlhttpIp.responseText;
                //console.log("getOnGoingList success jsonResult="+jsonResult);
                jsonResult = JSON.parse(jsonResult);
                if (jsonResult.version!=undefined && jsonResult.version!=top.g_channel.channelListVersion) return;
                showLocationListFlag=0;
                ccidNum = jsonResult.num;
				console.log("getOnGoingList success ccidNum="+ccidNum);
                for(var i=0;i<jsonResult.num;i++)
                {
                    showProgramInfo(jsonResult,i);
					showPoster(jsonResult,i);
                }
                for(var j=jsonResult.num;j<9;j++)
                {
                    $("channelName"+j).innerHTML = channelRemind[0];
                    $("programInfo"+j).style.display="none";
                }
            }
            catch(er)
            {
                console.log("er:"+er);
            }
        }
        else if(xmlhttpIp.readyState==4 && xmlhttpIp.status!=200)
        {
            console.log("getOnGoingList fail");
            showLocationList();
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
function showProgramInfo(jsonResultIp,position)
{
	$("channelName"+position).innerHTML = jsonResultIp.results[position].channelname;
	tvMiddelProgramInfoSpan=$("programInfo"+position).getElementsByTagName("span");
	tvMiddelProgramInfoDiv=$("programInfo"+position).getElementsByTagName("div");
	$("programInfo"+position).style.display="block";
	tvMiddelProgramInfoSpan[0].innerHTML=jsonResultIp.results[position].title;
	tvMiddelProgramInfoSpan[1].innerHTML=setting.secondToTime(parseInt(jsonResultIp.results[position].start_time)+parseInt(setting.currentOffsetTime)).substring(0,5);
	tvMiddelProgramInfoSpan[2].innerHTML=setting.secondToTime(parseInt(jsonResultIp.results[position].end_time)+parseInt(setting.currentOffsetTime)).substring(0,5);
	jsonCCID.ccid[position]=jsonResultIp.results[position].ccid;
	jsonCCID.startTime[position]=jsonResultIp.results[position].start_time;
	jsonCCID.endTime[position]=jsonResultIp.results[position].end_time;
	var currentTimeV = setting.getUtcTime;
	var endTimeV  = jsonCCID.endTime[position];
	var startTimeV = jsonCCID.startTime[position];
	var duration = endTimeV-startTimeV;
	console.log("currentTimeV=="+currentTimeV+"startTimeV=="+startTimeV+"endTimeV=="+endTimeV);
	if(currentTimeV>=startTimeV&&currentTimeV<=endTimeV)
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
		tvMiddelProgramInfoDiv[0].style.display="none";
	}
}
function showPoster(jsonResultIp,position)
{
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
	var MEDIUM = jsonResultIp.results[position].programimg.MEDIUM;
	var LARGE = jsonResultIp.results[position].programimg.LARGE;
	var XLARGE = jsonResultIp.results[position].programimg.XLARGE;
	var SMALL=jsonResultIp.results[position].programimg.SMALL;
	var THUMBNAIL = jsonResultIp.results[position].programimg.THUMBNAIL;
	
	console.log(MEDIUM);
	$("channelImgNet"+position).onerror = function(){
				$("channelImgNet"+position).style.display="none";
			}
	if(MEDIUM!=undefined && MEDIUM.length>0)
	{
		$("channelImgNet"+position).src=MEDIUM;
		$("channelImgNet"+position).style.display="block";
	}
	else if(LARGE!=undefined && LARGE.length>0)
	{
		$("channelImgNet"+position).src=LARGE;
		$("channelImgNet"+position).style.display="block";
	}
	else if(XLARGE!=undefined && XLARGE.length>0)
	{
		$("channelImgNet"+position).src=XLARGE;
		$("channelImgNet"+position).style.display="block";
	}
	else if(SMALL!=undefined && SMALL.length>0)
	{
		$("channelImgNet"+position).src=SMALL;
		$("channelImgNet"+position).style.display="block";
	}
	else if(THUMBNAIL!=undefined && THUMBNAIL.length>0)
	{
		$("channelImgNet"+position).src=THUMBNAIL;
		$("channelImgNet"+position).style.display="block";
	}
	else
	{
		$("channelImgNet"+position).style.display="none";
	}
}
function showUpdateEpg()
{
	currentTime = setting.currentBaseTime;
	var currentUTCTime = setting.getUtcTime;
	var currentTimeV =changeTimeToSecond(setting.secondToTime(currentTime));
	if(currentProgramId!=-1)
	{
		if(currentProgramEndTime>=currentProgramStartTime&&currentProgramEndTime<currentTimeV)
		{
			showCurrentChannelInfo();
		}
		else if(currentProgramEndTime<currentProgramStartTime)
		{
			if(currentTimeV>currentProgramEndTime&&currentTimeV<currentProgramStartTime)
			{
				showCurrentChannelInfo();
			}
		}
	}
	for(var i=0;i<9;i++)
	{
		if(showLocationListFlag==0)
		{
			var ProgramInfoDiv=$("programInfo"+i).getElementsByTagName("div");
			if(jsonCCID.endTime[i]<currentUTCTime)
			{
				if(programStatus>0)
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
				var duration = endTimeV-startTimeV;
				var finishWidth = parseInt((currentUTCTime-startTimeV)*150/duration);
				var unFinishWidth = parseInt((endTimeV-currentUTCTime)*150/duration);
				if(currentUTCTime>=startTimeV&&currentUTCTime<=endTimeV)
				{
					ProgramInfoDiv[1].style.width=finishWidth+"px";
					ProgramInfoDiv[2].style.width=unFinishWidth+"px";
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
						console.log("jsonCCID.endTime["+i+"]="+jsonCCID.endTime[i]+"currentTime="+currentTime);
						if((jsonCCID.endTime[i]>jsonCCID.startTime[i])&&jsonCCID.endTime[i]<currentTime)
						{
							channelList=channel.getRemChannelList();
							showLocationList();
							return;
						}
						else if((jsonCCID.endTime[i]<jsonCCID.startTime[i])&&(jsonCCID.endTime[i]<currentTime)&&(jsonCCID.startTime[i]>currentTime))
						{
							channelList=channel.getRemChannelList();
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
							if(endTimeV>=startTimeV)
							{
								duration = endTimeV-startTimeV;
								
								if(currentTimeV>startTimeV&&currentTimeV<endTimeV)
								{
									finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
									unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
									ProgramInfoDiv[1].style.width=finishWidth+"px";
									ProgramInfoDiv[2].style.width=unFinishWidth+"px";
								}
								else
								{
									ProgramInfoDiv[1].style.width=finishWidth+"px";
									ProgramInfoDiv[2].style.width=unFinishWidth+"px";
								}
							}
							else
							{
								if(currentTimeV>endTimeV&&currentTimeV<startTimeV)
								{
									ProgramInfoDiv[1].style.width=0+"px";
									ProgramInfoDiv[2].style.width=0+"px";
								}
								else
								{
									duration = 24*60*60-startTimeV+endTimeV;
									if(currentTimeV>=startTimeV)
									{
										finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
										unFinishWidth = parseInt((24*60*60-currentTimeV+endTimeV)*150/duration);
									}
									else
									{
										finishWidth = parseInt((24*60*60+currentTimeV-startTimeV)*150/duration);
										unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
									}
									ProgramInfoDiv[1].style.width=finishWidth+"px";
									ProgramInfoDiv[2].style.width=unFinishWidth+"px";
								}
							}
						}
					}
					
				}catch(er)
				{
					console.log("showUpdateEpg:"+er+"showLocationListFlag="+showLocationListFlag);
				}
			}
		}
	}
}

function getNoSearchChannelList()
{
    xmlhttpIp.open("POST", top.g_EpgUpdateUrl+"json",true);
    xmlhttpIp.setRequestHeader("Cache-Control","no-cache");
    xmlhttpIp.setRequestHeader("Pragma","no-cache");
    xmlhttpIp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttpIp.onreadystatechange=showNoSearchChannelList;
    xmlhttpIp.send(JSON.stringify(nonSacnChannelsJson));
    console.log("getNoSearchChannelList");
    function showNoSearchChannelList()
    {
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
					 console.log("getNoSearchChannelList fail");
                    return;
                }
                showLocationListFlag=2;
                var length = jsonResult.results.length;
                for(var i=0;i<length;i++)
                {
                    $("channelName"+i).innerHTML = jsonResult.results[i].channelname;
                    tvMiddelProgramInfoSpan=$("programInfo"+i).getElementsByTagName("span");
                    tvMiddelProgramInfoDiv=$("programInfo"+i).getElementsByTagName("div");
                    $("programInfo"+i).style.display="block";
                    tvMiddelProgramInfoSpan[0].innerHTML=jsonResult.results[i].title;
                    currentTime=setting.getUtcTime;
                    jsonCCID.startTime[i]=jsonResult.results[i].start_time;
                    jsonCCID.endTime[i]=jsonResult.results[i].end_time;
                    var currentTimeV =currentTime;
                    var endTimeV  = jsonCCID.endTime[i];
                    var startTimeV = jsonCCID.startTime[i];
                    var duration = endTimeV-startTimeV;
                    if(currentTimeV>=startTimeV&&currentTimeV<=endTimeV)
                    {
                        var finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
                        var unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
                        tvMiddelProgramInfoDiv[1].style.width=finishWidth+"px";
                        tvMiddelProgramInfoDiv[2].style.width=unFinishWidth+"px";
                        tvMiddelProgramInfoDiv[0].style.display="block";
                        tvMiddelProgramInfoSpan[1].innerHTML=setting.secondToTime(parseInt(jsonResult.results[i].start_time) + parseInt(setting.currentOffsetTime)).substring(0,5);
                        tvMiddelProgramInfoSpan[2].innerHTML=setting.secondToTime(parseInt(jsonResult.results[i].end_time) + parseInt(setting.currentOffsetTime)).substring(0,5);
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
            getLocalListNumber = 0;
            xmlhttpIp.abort();
            showLocationList();
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

	var signalStatus = channel.currentSignalStatus;
	
	if(channel.inputSource==1)
	{
		try
		{
		var screenMode = channel.currentScreenSaverMode;
		if(!signalStatus)
		{
			$("currentProgramRemind").innerHTML = channel_remind[1];
			$("currentProgramRemind").style.display = "block";
		}
		else if (screenMode == 3 || screenMode==1)
		{
			$("currentProgramRemind").innerHTML = channel_remind[2];
			$("currentProgramRemind").style.display = "block";
		}
		else if (screenMode == 6)
		{
			$("currentProgramRemind").innerHTML = channel_remind[4];
			$("currentProgramRemind").style.display = "block";
		}
		else
		{
			$("currentProgramRemind").style.display = "none";
		}
		var currentChannel = channel.getCurrentChannelInfo();
		var programList  = currentChannel.getProgramPlayList();
		$("curChannelName").innerHTML=currentChannel.name;
		currentProgramId = programList[0].id;
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
			$("curProgramStartTime").innerHTML=programList[0].startTime;
			$("curProgramEndTime").innerHTML=programList[0].endTime;
			currentProgramEndTime = changeTimeToSecond(programList[0].endTime);
			currentProgramStartTime = changeTimeToSecond(programList[0].startTime);
			var duration = 0;
			var finishWidth = 0;
			var unFinishWidth = 0;
			if(currentProgramEndTime>=currentProgramStartTime)
			{
				if(currentTimeV>=startTimeV&&currentTimeV<=endTimeV)
				{
					duration = endTimeV-startTimeV;
					finishWidth = parseInt((currentTimeV-startTimeV)*180/duration);
					unFinishWidth = parseInt((endTimeV-currentTimeV)*180/duration);
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
			else
			{
				
				if(currentTimeV>endTimeV&&currentTimeV<startTimeV)
				{
					$("curProgramStartTime").innerHTML="";
					$("curProgramEndTime").innerHTML="";
					$("currentPorTimeFinish").style.width=0+"px";
					$("currentPorTimeUnFinish").style.width=0+"px";
				}
				else 
				{
					duration = 24*60*60+endTimeV-startTimeV;
					if(currentTimeV>=startTimeV)
					{
						finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
						unFinishWidth = parseInt((24*60*60-currentTimeV+endTimeV)*150/duration);
					}
					else
					{
						finishWidth = parseInt((24*60*60+currentTimeV-startTimeV)*150/duration);
						unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
					}
					$("currentPorTimeFinish").style.width=finishWidth+"px";
					$("currentPorTimeUnFinish").style.width=unFinishWidth+"px";
				}
			}
			
		}
		}catch(er)
		{
			channel.testLog(er);
		}
	}
	else
	{
		if(!signalStatus)
		{
			$("currentProgramRemind").innerHTML = channel_remind[1];
			$("currentProgramRemind").style.display = "block";
		}
		else
		{
			$("currentProgramRemind").style.display = "none";
		}
		$("curChannelName").innerHTML="";
		$("curProgramName").innerHTML="";
		$("curProgramStartTime").innerHTML="";
		$("curProgramEndTime").innerHTML="";
		$("currentPorTimeFinish").style.width=0+"px";
		$("currentPorTimeUnFinish").style.width=0+"px";
	}
	setTimeout(function(){
		$("curProgramName").setAttribute("contentText",$("curProgramName").innerHTML);
		},2);
}
function showTV()
{
	showCurrentChannelInfo();
	channelList=channel.getRemChannelList();
	programStatus= channelList.length;
    showLocationList();
    if(top.checkNetStatus())
	{
		getRequestObject();
		checkVersionUpdate();
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
        if (setting.networkConnectType==0)
            $("networkImg").src=wireStatusImg[0];
        else
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
			if(i<channelList.length)
			{
				$("channelName"+i).innerHTML = channelList[i].name;
				var programList = channelList[i].getProgramPlayList();
				jsonCCID.Tv_id[i] = programList[0].id;
				//console.log("channelList["+i+"].name="+channelList[i].name+"programList[0].id"+programList[0].id);
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
					//console.log("programList[0].startTime="+programList[0].startTime);
					jsonCCID.endTime[i] = changeTimeToSecond(programList[0].endTime);
					jsonCCID.startTime[i] = changeTimeToSecond(programList[0].startTime);
					var currentTimeV = changeTimeToSecond(setting.currentTime.substring(0,5));
					var endTimeV  = changeTimeToSecond(programList[0].endTime);
					var startTimeV = changeTimeToSecond(programList[0].startTime);
					var duration = 0;
					var finishWidth = 0;
					var unFinishWidth = 0;
					if(endTimeV>=startTimeV)
					{
						duration = endTimeV-startTimeV;
						
						if(currentTimeV>startTimeV&&currentTimeV<endTimeV)
						{
							finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
							unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
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
					else
					{
						if(currentTimeV>endTimeV&&currentTimeV<startTimeV)
						{
							tvMiddelProgramInfoDiv[1].style.width=0+"px";
							tvMiddelProgramInfoDiv[2].style.width=0+"px";
							tvMiddelProgramInfoDiv[0].style.display="block";
						}
						else
						{
							duration = 24*60*60-startTimeV+endTimeV;
							if(currentTimeV>=startTimeV)
							{
								finishWidth = parseInt((currentTimeV-startTimeV)*150/duration);
								unFinishWidth = parseInt((24*60*60-currentTimeV+endTimeV)*150/duration);
							}
							else
							{
								finishWidth = parseInt((24*60*60+currentTimeV-startTimeV)*150/duration);
								unFinishWidth = parseInt((endTimeV-currentTimeV)*150/duration);
							}
							tvMiddelProgramInfoDiv[1].style.width=finishWidth+"px";
							tvMiddelProgramInfoDiv[2].style.width=unFinishWidth+"px";
							tvMiddelProgramInfoDiv[0].style.display="block";
						}
					}
					
					if(top.g_setting.parentalRating != 0 && programList[0].parentRate >= top.g_setting.parentalRating)
					{
						$("channelImg"+i).src = defaultPoster[1];
					}
					else
					{
						$("channelImg"+i).src = defaultPoster[0];
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
		littlePositionH = 1;
		littlePositionV = 1;
		$("bigWindowFocus").style.display="none";
		$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
		$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
		$("littleWindowFocus").style.display = "block";
		focusType = "tvLittleWindow";
	}
	else if(focusType == "tvMiddleWindow")
	{
		if(middlePositionH == 0)
		{
			middlePositionH = 2;
			$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
		}
		else
		{
			middlePositionH--;
			$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
		}
	}

	doElementScroll();
}
function toDown()
{
	if(focusType == "tvTitleList")
	{
		$("mainTitle").style.color = "#991818";
        $("mainFocus").style.background = "none";
		$("bigWindowFocus").style.display="block";
		focusType = "tvBigWindow";
	}
	else if(focusType=="tvLittleWindow")
	{
		if(littlePositionH == 1)
		{
			$("littleWindowFocus").style.display="none";	
			$("bigWindowFocus").style.display="block";
			focusType = "tvBigWindow";
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
		littlePositionV = 1; //移动到中间的那个格子
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
			middlePositionH = 0;
			$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
		}
		else
		{
			middlePositionH++;
			$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
		}
	}

	doElementScroll();
}

function toJumpResoucre()
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
	}catch(er)
	{
		top.g_channel.testLog("er:"+er);
	}
}
function toJumpSetting()
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
	top.RemoteConntrolType = "HbbTV";//lqt- 设置虚拟遥控器的场景类型--进入Smart TV的时候。（MMH）
	top.appOpenFlag = 1;
	top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
	top.$("main").style.display="none";
	top.$("operatePage").style.display="none";
	top.$("otherPage").style.display="none";
	if(1 == top.g_isDownloading)
	{
		top.uiPauseDownloadingUpFile();
		top.downLoadOpenApp = 1;
	}
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
	top.RemoteConntrolType = "EPG";//lqt- 设置虚拟遥控器的场景类型---进入IP-EPG
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
			top.g_ulits.openApplication("opera.ipepg","-u "+top.g_EpgUpdateUrl);
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
function toJumpGoLive()
{
	if(top.checkNetStatus()==false)
	{
		showHomePageNetTips();
		return;
	}
	top.RemoteConntrolType = "HbbTV";//lqt- 设置虚拟遥控器的场景类型--主页中通过图标进入golive，场景同MMH
	setting.scaleVideoWindow(0,0,0,0);
	top.lastInputSource = top.g_channel.inputSource;
    top.g_channel.inputSource = 10;
	top.appOpenFlag = 1;
	top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
	top.$("main").style.display="none";
	top.$("operatePage").style.display="none";
	top.$("otherPage").style.display="none";
	if(1 == top.g_isDownloading)
	{
		top.uiPauseDownloadingUpFile();
		top.downLoadOpenApp = 1;
	}
	top.g_ulits.openApplication("opera.golive","-u http://tv.gole.tv/?clientType="+setting.getProperty("ro.sita.model.CLENT_TYPE_INFO.CLENT_TYPE", "THOM-EU-NT667-F1")+"&client_mac="+tv.setting.networkMAC);
	return ;
}
function toRight()
{
	if(focusType == "tvLittleWindow")
	{
		if(littlePositionV == 2)
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
			if(middlePositionH == 0)
			{
				$("middleWindowFocus").style.display = "none";
				$("bigWindowFocus").style.display = "block";
				focusType = "tvBigWindow";
			}
			else
			{
				littlePositionH = middlePositionH -1;
				littlePositionV = 0;
				$("middleWindowFocus").style.display = "none";
				$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
				$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
				$("littleWindowFocus").style.display = "block";
				focusType = "tvLittleWindow";
			}
		}
		else
		{
			middlePositionV++;
			$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
		}
	}

	else if(focusType == "netTips")
	{
		if(!showHomePageTipsForNever)
		{
			if(TipsButton)
			{
				TipsButton=0;
				$("picResetFocus").style.left="90px";
			}
			else
			{
				TipsButton=1;
				$("picResetFocus").style.left="490px";
			}
		}
		else
		{
			if(TipsButton == 0)
			{
				TipsButton=1;
				$("picResetFocus").style.left="280px";
			}
			else if(TipsButton == 1)
			{
				TipsButton= 2;
				$("picResetFocus").style.left="550px";
			}
			else if(TipsButton == 2)
			{
				TipsButton= 0;
				$("picResetFocus").style.left="10px";
			}	
		}
	}
	else if(focusType == "scanTips")
	{
		if(TipsButton)
		{
			TipsButton=0;
			$("picResetFocus").style.left="90px";
		}
		else
		{
			TipsButton=1;
			$("picResetFocus").style.left="490px";
		}
	}
	doElementScroll();
}
function toLeft()
{
	if(focusType == "tvLittleWindow")
	{
		if(littlePositionV == 0)
		{
			middlePositionH = littlePositionH +1;
			middlePositionV = 2;
			$("littleWindowFocus").style.display = "none";
			$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
			$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
			$("middleWindowFocus").style.display = "block";
			focusType = "tvMiddleWindow";
		}
		else
		{
			littlePositionV--;
			$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
		}
	}
	else if(focusType == "tvBigWindow")
	{
		middlePositionH = 0;
		middlePositionV = 2;
		$("bigWindowFocus").style.display = "none";
		$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
		$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
		$("middleWindowFocus").style.display = "block";
		focusType = "tvMiddleWindow";
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
				littlePositionV = 2;
				$("middleWindowFocus").style.display = "none";
				$("littleWindowFocus").style.top = littlePositionH*LITTLE_TV_MENU_TOP+"px";
				$("littleWindowFocus").style.left = littlePositionV*LITTLE_TV_MENU_LEFT+"px";
				$("littleWindowFocus").style.display = "block";
				focusType = "tvLittleWindow";
			}
			else if(middlePositionH == 2)
			{
				littlePositionH = 1;
				littlePositionV = 2;
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
	else if(focusType == "netTips")
	{
		console.log("YM " + $("homePageTips").getElementsByTagName("div")[2].display)
		if(!showHomePageTipsForNever)
		{
			if(TipsButton)
			{
				TipsButton=0;
				$("picResetFocus").style.left="90px";
			}
			else
			{
				TipsButton=1;
				$("picResetFocus").style.left="490px";
			}
		}
		else
		{
			if(TipsButton == 1)
			{
				TipsButton=0;
				$("picResetFocus").style.left="10px";
			}
			else if(TipsButton == 0)
			{
				TipsButton= 2;
				$("picResetFocus").style.left="550px";
			}
			else if(TipsButton == 2)
			{
				TipsButton= 1;
				$("picResetFocus").style.left="280px";
			}	
		}
	}
	else if(focusType == "scanTips")
	{
		if(TipsButton)
		{
			TipsButton=0;
			$("picResetFocus").style.left="90px";
		}
		else
		{
			TipsButton=1;
			$("picResetFocus").style.left="490px";
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
	 }
	if(focusType == "tvLittleWindow")
	{
		if(littlePositionH == 0)
		{
			if(littlePositionV  == 0)
			{
				toJumpApp();
			}
			else if(littlePositionV  == 1)
			{
				if(top.checkNetStatus()==false)
				{
					showHomePageNetTips();
					return;
				}
				top.toJumpNexFlix();
			}
			else
			{
				toJumpGoLive();
			}
		}
		else
		{
			if(littlePositionV  == 0)
			{

				toJumpMedia();
			}
			else if(littlePositionV  == 1)
			{
				toJumpResoucre();
			}
			else
			{
				toJumpSetting();
			}
		}
	}
	else if(focusType == "tvMiddleWindow")
	{//step 1 不限制
		if(top.checkNetStatus()==false && setting.getHomePageTipsNeverShow() == 0)
		{
			console.log("YM");
			setting.getHomePageTipsNeverShow();
			console.log("YM after");
			showHomePageNetTipsForNever();
		}
		else
		{
			if(programStatus>0)
			{
				if(showLocationListFlag==0&&ccidNum>middlePositionV+middlePositionH*3)
				{
				    //top.channelLock = 0;
					//top.parentalLock = 0;
					//top.inputLock = 0;
					top.currentChannelIndex = jsonCCID.ccid[middlePositionV+middlePositionH*3]-1;
					top.g_channel.playByIndex(jsonCCID.ccid[middlePositionV+middlePositionH*3]-1);
					//showScaleVideoWindow();
					//showCurrentChannelInfo();
                    top.jumpPage();
                    if(top.g_isDownloading == 0){
                        top.g_isDownloading = 1;
                        setting.restartDownloadUpdateFile();
                    }
				}
				else if(showLocationListFlag==1&&channelList.length>middlePositionV+middlePositionH*3)
				{
					//top.channelLock = 0;
					//top.parentalLock = 0;
					//top.inputLock = 0;
					top.currentChannelIndex = channelList[middlePositionV+middlePositionH*3].index;
					top.g_channel.playByIndex(channelList[middlePositionV+middlePositionH*3].index);
					//showScaleVideoWindow();
					//showCurrentChannelInfo();
                    top.jumpPage();
                    if(top.g_isDownloading == 0){
                        top.g_isDownloading = 1;
                        setting.restartDownloadUpdateFile();
                    }
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
	else if(focusType == "smartTVWindow")
	{
		toJumpApp();
	}
	else if(focusType == "netTips")
	{
		if(!showHomePageTipsForNever)
		{
			if(TipsButton)
			{
				focusType=preFocusType;
				$("homePageTips").style.display="none";
			}
			else
			{
				top.$("main").onload = function(){
					top.resetFramePacking3DMode();
					top.$("main").onload = function(){};
					}
				top.g_nextHtmlPage = "networkSetting.html";
				top.$("main").src="index.html";
			}
		}
		else
		{
			if(TipsButton == 1)
			{
				focusType=preFocusType;
				$("homePageTips").style.display="none";
			}
			else if(TipsButton == 0)
			{
				top.$("main").onload = function(){
					top.resetFramePacking3DMode();
					top.$("main").onload = function(){};
					}
				top.g_nextHtmlPage = "networkSetting.html";
				top.$("main").src="index.html";
			}
			else if(TipsButton == 2)
			{
				setting.setHomePageTipsNeverShow(1);
				focusType=preFocusType;
				$("homePageTips").style.display="none";
			}
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
}
function doElementScroll()
{
	try
	{
	var spanLittleList = $("littleList").getElementsByTagName("span");
	var spanMiddleList = $("middleList").getElementsByClassName("programName");
	var spanBigList    = $("currentProgram").getElementsByClassName("programName");
	var focusPosition = 0;// littlePositionV + littlePositionH*2;
	//setScrollAttribute(spanList,focusPosition);
	if(focusType == "tvTitleList")
	{
		resetScrollAttribute(spanMiddleList);
		resetScrollAttribute(spanLittleList);
		resetScrollAttribute(spanBigList);
	}
	else if(focusType == "tvLittleWindow")
	{
		resetScrollAttribute(spanBigList);
		resetScrollAttribute(spanMiddleList);
		focusPosition =  littlePositionV + littlePositionH*2;
		setScrollAttribute(spanLittleList,focusPosition);
		setTimeout(function(){resetScrollHtmlInner(spanLittleList);},1);
	}
	else if(focusType == "tvMiddleWindow")
	{
		resetScrollAttribute(spanLittleList);
		resetScrollAttribute(spanBigList);
		focusPosition =  middlePositionV + middlePositionH*3;
		setScrollAttribute(spanMiddleList,focusPosition);
		setTimeout(function(){resetScrollHtmlInner(spanMiddleList);},1);
	}
	else if(focusType == "tvBigWindow")
	{
		resetScrollAttribute(spanLittleList);
		resetScrollAttribute(spanMiddleList);
		setScrollAttribute(spanBigList,0);
		setTimeout(function(){resetScrollHtmlInner(spanBigList);},1);
	}
	}catch(er)
	{
		console.log("get er:"+er);
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
function setScrollAttribute(htmlTagList,focusPosition)
{
	for(var i = 0; i < htmlTagList.length; i++)
	{
		/*var tempText = htmlTagList[i].innerHTML;*/
		htmlTagList[i].setAttribute("contentText",htmlTagList[i].innerHTML);
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
		if(htmlTagList[i].getAttribute("contentText")!=undefined)
		{
			htmlTagList[i].innerHTML = htmlTagList[i].getAttribute("contentText");
		}
		}catch(er)
		{
			console.log("resetScrollHtmlInner:"+er);
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
function showCurTime()
{
	try
	{
		showTimeFormat();
		if(top.checkNetStatus()&&top.appOpenFlag==0&&showLocationListFlag!=1)
		{
			showUpdateEpg();
		}
		else if(top.checkNetStatus()&&top.appOpenFlag==0&&showLocationListFlag==1)
		{
			checkVersionUpdate();
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

function showHomePageNetTips()
{
	showHomePageTipsForNever = false;
	preFocusType=focusType;
	$("homePageTips").style.display="block";
	$("dialogName").innerHTML=top.others[28];
	$("dialogContent").innerHTML=homePageRemind[0];
	var divs=$("homePageTips").getElementsByTagName("div");
	divs[0].style.left = "100px";
	divs[1].style.left = "500px";
	divs[2].style.display = "none";
	divs[0].innerHTML=homePageButton[1];
	divs[1].innerHTML=homePageButton[2];
	TipsButton=1;
	$("picResetFocus").style.left="490px";
	focusType = "netTips";
}

function showHomePageNetTipsForNever()   //add yums 2014-12-17
{
	showHomePageTipsForNever = true;
	preFocusType=focusType;
	$("homePageTips").style.display="block";
	$("dialogName").innerHTML=top.others[28];
	$("dialogContent").innerHTML=homePageRemind[0];
	var divs=$("homePageTips").getElementsByTagName("div");
	divs[0].style.left = "20px";
	divs[1].style.left = "290px";
	divs[2].style.left = "560px";
	divs[2].style.display = "block";
	divs[0].innerHTML=homePageButton[1];
	divs[1].innerHTML=homePageButton[2];
	divs[2].innerHTML=top.netUpdateButtonText[3];
	TipsButton=1;
	$("picResetFocus").style.left="280px";
	focusType = "netTips";
}

function showHomePageScanTips(content)
{
	showHomePageTipsForNever = false;
	preFocusType=focusType;
	$("homePageTips").style.display="block";
	$("dialogName").innerHTML=top.others[28];
	$("dialogContent").innerHTML=content;
	var divs=$("homePageTips").getElementsByTagName("div");
	divs[0].style.left = "100px";
	divs[1].style.left = "500px";
	divs[2].style.display = "none";
	divs[0].innerHTML=homePageButton[0];
	divs[1].innerHTML=homePageButton[2];
	TipsButton=1;
	$("picResetFocus").style.left="490px";
	focusType = "scanTips";
}
function uninit()
{
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
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
		if(evt.button == 2)
		{
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
			else if(focusType == "netTips")
			{
				$("homePageTips").style.display="none";
				focusType=preFocusType;
			}
			else if(focusType == "scanTips")
			{
				$("homePageTips").style.display="none";
				focusType=preFocusType;
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
		}
	};
	$("bigWindow").onmousedown = function(evt){
		if(evt.button == 0){//left key
				top.jumpPage();
		}
	};
	var littleWinDivs=$("littleList").getElementsByTagName("div");
	littleWinDivs[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			toJumpApp();
		}
	};
	littleWinDivs[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			toJumpMedia();
		}
	};
	littleWinDivs[2].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(top.checkNetStatus()==false)
			{
				showHomePageNetTips();
				return;
			}
			top.toJumpNexFlix();
		}
	};
	littleWinDivs[3].onmousedown = function(evt){
		if(evt.button == 0){//left key
			toJumpResoucre();
		}
	};
	littleWinDivs[4].onmousedown = function(evt){
		if(evt.button == 0){//left key
			toJumpGoLive();
		}
	};
	littleWinDivs[5].onmousedown = function(evt){
		if(evt.button == 0){//left key
			toJumpSetting();
		}
	};

	var middleWinDivs=$("middleList").getElementsByClassName("middleWindow");
	for(var i=0;i<3;i++)
	{
		for(var j=0;j<3;j++)
		{
			middleWinDivs[parseInt(i*3+j)].setAttribute("newAttrH",i);
			middleWinDivs[parseInt(i*3+j)].setAttribute("newAttrV",j);
			middleWinDivs[parseInt(i*3+j)].onmousedown = function(evt){
				if(evt.button == 0){//left key
				        middlePositionV=parseInt(this.getAttribute("newAttrV"));
						middlePositionH=parseInt(this.getAttribute("newAttrH"));
						$("mainTitle").style.color = "#991818";
       					$("mainFocus").style.background = "none";
						$("littleWindowFocus").style.display = "none";
						$("bigWindowFocus").style.display = "none";
						$("middleWindowFocus").style.top = middlePositionH*MIDDLE_TV_MENU_TOP+"px";
						$("middleWindowFocus").style.left = middlePositionV*MIDDLE_TV_MENU_LEFT+"px";
						$("middleWindowFocus").style.display = "block";
						$("homePageTips").style.display="none";
						focusType = "tvMiddleWindow";
						if(top.checkNetStatus()==false && setting.getHomePageTipsNeverShow() == 0)
						{
							console.log("YM");
							setting.getHomePageTipsNeverShow();
							console.log("YM after");
							showHomePageNetTipsForNever();
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
			};
		}
	}

	var TipsButton=$("homePageTips").getElementsByTagName("div");
	TipsButton[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "netTips")
			{
				top.$("main").onload = function(){
				top.resetFramePacking3DMode();
				top.$("main").onload = function(){};
				}
				top.g_nextHtmlPage = "networkSetting.html";
				top.$("main").src="index.html";
			}
			else if(focusType == "scanTips")
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
	};
	TipsButton[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "netTips")
			{
				TipsButton=1;
				focusType=preFocusType;
				$("homePageTips").style.display="none";
			}
			else if(focusType == "scanTips")
			{
				TipsButton=1;
				focusType=preFocusType;
				$("homePageTips").style.display="none";
			}
		}
	};
	TipsButton[2].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "netTips" && showHomePageTipsForNever)
			{
				setting.setHomePageTipsNeverShow(1);
				focusType=preFocusType;
				$("homePageTips").style.display="none";
			}
		}
	};
	
}
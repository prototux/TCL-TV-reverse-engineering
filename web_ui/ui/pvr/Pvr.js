top.keySetForUI(1);
var pvrConName         = top.pvrConName;
var disRemindWords     = top.pvrDisRemind;
var remindWords        = [top.yesNo[0],top.yesNo[1],top.pvrRemindWords[0],top.pvrRemindWords[1],top.pvrRemindWords[2],
							top.pvrRemindWords[3],top.pvrRemindWords[4],top.pvrRemindWords[5],top.pvrRemindWords[6],top.pvrRemindWords[7],
							top.pvrRemindWords[8],top.pvrRemindWords[9],top.pvrRemindWords[10]];
var changeChannel     = top.pvrChangeCh;
var changeToPIN8      = top.pvrChangeToPIN8;
var changeToCEC       = top.pvrChangeToCEC;
var guideJump         = top.pvrGuideJump;
var mediaJump         = top.pvrMediaJump;
var other             = top.pvrOther;
var powerOffRemind    = top.pvrPowerOffRemind;

var focusOn = "menu";//menu焦点在pvr主菜单上;noDisk:又有移动存储设备，notAvailable:因信号不对而不可用，主要针对data only,no signal和invalid；notSurpport:screamble 状态下不支持录制；exit焦点在退出提示框，recordedList是否要进入录制节目列表的提示框;noRecordedFile没有录制好的文件，channelChange频道切换提示框;usbRemove:usb 移除;noSpace:没有多余的空间,power 按下power键提示框,pin8 切换信源到scart（AV1），cec 切换信源到HDMI
var recordStatus     = "noRecord";//录制状态：readyRecord第一次进入的时候，recording，pauseRecord
var recordingTimer   = 0;
var showMenuTimer    = 0;
var selectFlag       = 0;//优选择按钮时标记选择项
var powerBlackListFlag = 0;
var tempValue;      
var pvr              = top.g_pvr;
var channel          = top.g_channel;
var setting          = top.g_setting;
document.onnotify = notifyProcess;
function notifyProcess(e)
{
    var msg = e.which;
	var value = e.modifiers;//消息携带的参数
	//全局消息
	switch(msg)
	{
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		case top.E_DTV_NIT_VERSION_CHANGED://nit refresh notify
			top.systemEventProc(e);
			return;
		case top.E_SS_CH_BLOCK:// channel lock
		case top.E_SS_PARENTAL_BLOCK://parental lock
			//底层自动停掉录制和回到直播
			top.systemEventProc(e);
			if(!powerBlackListFlag)//待机录制中
			{
				setting.powerOff();
				return;
			}
			if(recordStatus != "noRecord")
			{
				pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
				document.location.href = "channelPlay.html";
			}
			return;
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
			///////////////////////////chenhua change start////////////////////////////////
			top.systemEventProc(e);
			///////////////////////////chenhua change start////////////////////////////////
			return;
		case top.E_BOOKING_RECORD_END://booking record end
			if(recordStatus != "noRecord")
			{
				top.recordStatusFlag = 0;
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			if(!powerBlackListFlag)//待机录制中
			{
				setting.powerOff();
				return;
			}
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			document.location.href = "channelPlay.html";
			return;
		case top.E_PVR_RECORD_END://record end，record异常退出,只需要退出pvr即可
		case top.E_PVR_NO_SIGNAL://pvr no signal
			if(!powerBlackListFlag)//待机录制中
			{
				setting.powerOff();
				return;
			}
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			document.location.href = "channelPlay.html";
			break;
		case top.E_CI_CARD_INSERTED://CI insert
		case top.E_CI_CARD_REMOVE://CI remove
		case top.E_CI_DATA_READY:// CI data ready
		case top.E_CI_CAM_NAME_READY://ci card name ready
		case top.E_CI_EXIT_CI://exit
		case top.E_CI_UPGR_INPROGRESS:
		case top.E_CI_UPGR_NOT_INPROGRESS://CI update end
		case top.E_CIPLUS_PROGRAM_CHANGE:
		case top.E_CI_OP_UPDATE_INFO:
		case top.E_CI_OP_UPDATE_CHANNEL:
		case top.E_CI_OP_UPDATE_NIT:
		case top.E_CI_MHEG_OPEN:
		case top.E_CI_MHEG_CLOSE:
			//所有ＣＩ消息不做处理
			break;
		case top.E_PVR_DISK_UNPLUG:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			showRemind("usbRemove");
			break;
		}
		case top.E_PVR_DISK_FULL:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			showRemind("noSpace");
			break;
		}
		case top.E_READY_TO_CHANGE_SCART:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("pin8");
				tempValue[0]="pin8";
				tempValue[1]=e.modifiers;
			}
			else
			{
				top.systemEventProc(e);
			}
			break;
		}
		case top.E_READY_TO_CHANGE_CEC:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("cec");
				tempValue[0]="cec";
				tempValue[1]=e.modifiers;
			}
			else
			{
				top.systemEventProc(e);
			}
			break;
		}
		case top.E_SS_INVALID_SERVICE:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notSurport");
			}
			break;
		}
		case top.E_SS_SCRAMBLED_PROGRAM:
		case top.E_SS_DATA_ONLY:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notAvailable");
			}
			break;
		}
		case top.E_SS_CH_BLOCK:
		{
			top.channelLock = 1;
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notAvailable");
			}
			break;
		}
		case top.E_SS_PARENTAL_BLOCK:
		{
			top.parentalLock = 1;
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notAvailable");
			}
			break;
		}
		case top.E_DTV_SS_INPUT_BLOCK:
		{
			top.inputLock = 1;
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notAvailable");
			}
			break;
		}
		case top.E_SIGNAL_UNLOCK:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("saveFile");
			}
			break;
		}
		default:
			top.systemEventProc(e);
			break;
    }
}
document.onkeydown = keyDownProcess;
function keyDownProcess(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			//up
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toDown();
			ret = false;
			break;
		}	
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toRight();
			ret = false;
			break;
		}
		case top.VK_MENU: //menu
		case top.VK_BACK: //back
		{
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
			}
			toBack();
			ret = false;
			break;
		}
		case  top.VK_BLUE:
		{
			top.$("main").src = "channelPlay.html";
			break;
		}
		case top.VK_LEFT:
		{
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toLeft();
			ret = false;
			break;
		}
		case top.VK_EXIT:
		{
			//exit
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toExitKey();
			return;
		}
		case top.VK_STOP:
		{
			toStopKey();
			break;
		}
		case top.VK_CHANNEL_UP://channel +
		if(top.recordStatusFlag == 1&&focusOn == "menu")
		{
			var inputSource=top.g_channel.inputSource;
			var programStatus = top.g_channel.channelProgramStatus();
			var currentChannelIndex = 0;
			if(inputSource <= 1 &&programStatus == 1  && top.inputLock != 1)
			{
				var systemCountry = top.g_channel.systemCountry;
				if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
				{
					currentChannelIndex = top.g_channel.currentIndex;
					currentChannelIndex = top.g_channel.getNextIndexByIndex(currentChannelIndex);
					showRemind("channelChange");
					tempValue[0]="channelChange";
					tempValue[1]=currentChannelIndex;
				}
				else
				{
					var currentIndex = top.g_channel.currentIndex;
					var endIndex = top.g_channel.endIndex;
					if(currentIndex>=endIndex)
					{
						showRemind("inputsource");
						tempValue[0]="inputsource";
						tempValue[1]=11;
					}
					else
					{
						currentChannelIndex = top.g_channel.getNextIndexByIndex(currentIndex);
						showRemind("channelChange");
						tempValue[0]="channelChange";
						tempValue[1]=currentChannelIndex;
					}
				}
			}
		}
		break;
		case top.VK_CHANNEL_DOWN:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				var inputSource=top.g_channel.inputSource;
				var programStatus = top.g_channel.channelProgramStatus();
				var currentChannelIndex = 0;
				if(inputSource <= 1 &&programStatus == 1  && top.inputLock != 1)
				{
					var systemCountry = top.g_channel.systemCountry;
					if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
					{
						currentChannelIndex = top.g_channel.currentIndex;
						currentChannelIndex = top.g_channel.getPreviousIndexByIndex(currentChannelIndex);
						showRemind("channelChange");
						tempValue[0]="channelChange";
						tempValue[1]=currentChannelIndex;
					}
					else
					{
						var currentIndex = top.g_channel.currentIndex;
						var firstIndex = top.g_channel.firstIndex;
						if(currentIndex<=firstIndex)
						{
							showRemind("inputsource");
							tempValue[0]="inputsource";
							tempValue[1]=12;
						}
						else
						{
							currentChannelIndex = top.g_channel.getPreviousIndexByIndex(currentIndex);
							showRemind("channelChange");
							tempValue[0]="channelChange";
							tempValue[1]=currentChannelIndex;
						}
					}
				}
			}
			break;
		}
		case top.VK_SMARTTV://smart tv
		case top.VK_YOUTUBE://youtube
		case 36://home
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("homePage");
			}
		}
		break;
		case top.VK_POWER:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("power");
			}
			else
			{
				top.keyDownProcess(evt);
			}
		}
		break;
		case top.VK_MUTE:
		case top.VK_VOLUME_UP://volume up
		case top.VK_VOLUME_DOWN://volume down,多媒体不能共用
		top.keyDownProcess(evt);
		break;
		default:
			//top.keyDownProcess(evt);
		break;
	}
	return ret;
}
//exit键的响应函数
function toExitKey()
{
	if(focusOn == "noDisk" || focusOn == "notAvailable" || focusOn == "notSurpport" || focusOn == "noRecordedFile" || focusOn == "usbRemove" || focusOn == "noSpace")
	{
		pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		document.location.href = "channelPlay.html";
	}
	else if(focusOn == "power")
	{
		hiddenRemind();
	}
	else
	{
		if(recordStatus == "noRecord")
		{
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			document.location.href = "channelPlay.html";
		}
		else if(recordStatus == "recording")
		{
			showRemind("exit");
		}
	}
}

function toOK()
{
	if(focusOn == "power")
	{
		if(selectFlag == 0)
		{
			$("picReset").style.display="none";
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",500);
			}
			setTimeout("setting.powerBacklightState = 0;", 300); //先让框消失，300ms后待机
			powerBlackListFlag = 0;
			return;
		}
		else
		{
			top.g_setting.powerOff();
		}
	}
	else if(focusOn == "exit")//退出录制提示框
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
		}
	}
	else if(focusOn == "pin8")//切换频道提示框焦点
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			top.recordStatusFlag=0;
			top.g_channel.inputSource=tempValue[1];
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
		}
	}
	else if(focusOn == "cec")//切换频道提示框焦点
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
				top.$("globleShow").contentWindow.hiddenRecord();
			}
			top.recordStatusFlag=0;
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			top.g_channel.inputSource=tempValue[1];
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
		}
	}
	else if(focusOn =="inputsource")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			top.g_channel.inputSource=tempValue[1];
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
		}
	}
	else if(focusOn == "channelChange")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			if(tempValue[1]!=channel.currentIndex)
			{
				top.g_openMheg5State=0;
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				  top.channelLock = 0;
				top.parentalLock = 0;
				top.inputLock = 0;
				top.currentChannelIndex = tempValue[1];
				top.g_channel.playByIndex(tempValue[1]);
			}
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
			top.g_isShowInfoBar = 1;
		}
	}
	else if(focusOn == "guide")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			if(top.checkNetStatus()&&top.g_setting.guideOnSwitch==1)
			{
				top.lastInputSource = top.g_channel.inputSource;
				top.appOpenFlag=1;
				top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
				top.$("main").style.display="none";
				top.$("operatePage").style.display="none";
				top.$("otherPage").style.display="none";
				top.jumpHotkeyPage("channelPlay.html");
				top.g_ulits.openApplication("opera.ipepg","-u "+top.g_EpgUpdateUrl);
			}
			else
			{
				top.appOpenFlag=0;
				top.jumpHotkeyPage("programGuide.html");
			}

		}
	}
	else if(focusOn == "media")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			top.$("main").src = "deviceList.html";
		}
	}
	else if(focusOn == "channelList")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_isUsedHotKeyToIntoPage = 1;
			top.operatePage.focus();
			top.$("main").src="channelPlay.html";
			top.$("operatePage").src = "channelList.html";
			top.setFrameFocusPage("operatePage");
		}
	}
	else if(focusOn == "Fav")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_isUsedHotKeyToIntoPage = 1;
			top.operatePage.focus();
			top.$("main").src="channelPlay.html";
			top.g_channel.channelListType = top.FAV_LIST_TYPE;
			top.$("operatePage").src = "channelList.html";
			top.setFrameFocusPage("operatePage");
		}
	}
	else if(focusOn == "homePage")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			if(top.g_isDownloading == 1){
				top.g_isDownloading = 0;
				if(!top.g_isForceUpgrade){
					top.hideDownloadRing();
				}
				top.g_setting.pauseDownloadUpdateFile();
			}
			top.g_previousHtmlPage = "channelPlay.html";
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
					setTimeout(function(){
						if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
						{
							top.$("main").src = "homePageIndex.html";
						}
						else
						{
							if(tempValue[1]=="tv")
							{
								top.$("main").src = "homePageVP.html?tv&title";
							}
							else
							{
								top.$("main").src = "homePageVP.html?app&title";
							}
						}

						top.main.focus();
						top.$("operatePage").src = "";
					},100);
					return;
				}
			}
			else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					setTimeout(function(){
						if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
						{
							top.$("main").src = "homePageIndex.html";
						}
						else
						{
							if(tempValue[1]=="tv")
							{
								top.$("main").src = "homePageVP.html?tv&title";
							}
							else
							{
								top.$("main").src = "homePageVP.html?app&title";
							}
						}
						top.main.focus();
						top.$("operatePage").src = "";
					},100);
					return;
				}
			}

			if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
			{
				top.$("main").src = "homePageIndex.html";
			}
			else
			{
				if(tempValue[1]=="tv")
				{
					top.$("main").src = "homePageVP.html?tv&title";
				}
				else
				{
					top.$("main").src = "homePageVP.html?app&title";
				}
			}
			top.main.focus();
			top.$("operatePage").src = "";
		}
	}
}
function toUp()
{
	if(focusOn == "menu")
	{
		if(top.pvrTotalTime+60*60<24*60*60)
		{
			top.pvrTotalTime=top.pvrTotalTime+60*60;
		}
		doTotalTime(top.pvrTotalTime);
	}
}
function toDown()
{
	if(focusOn == "menu")
	{
		if(top.pvrTotalTime-60*60>=0 && top.pvrTotalTime-60*60>top.pvrCurrentTime+2*60)
		{
			top.pvrTotalTime=top.pvrTotalTime-60*60
		}
		doTotalTime(top.pvrTotalTime);
	}
}
function toLeft()
{
	if(focusOn == "menu")
	{
		if(top.pvrTotalTime+60<24*60*60)
		{
			top.pvrTotalTime=top.pvrTotalTime+60;
		}
		doTotalTime(top.pvrTotalTime);
	}
	else if(focusOn == "exit" ||focusOn == "pin8"||focusOn == "cec" ||focusOn == "power"||focusOn =="inputsource" ||focusOn =="channelChange" || focusOn =="media" || focusOn =="guide" || focusOn == "homePage" || focusOn == "channelList" || focusOn == "Fav")
	{
		if(selectFlag==0)
		{
			selectFlag=1;
			$("picResetFocus").style.left="140px"
		}
		else 
		{
			selectFlag=0;
			$("picResetFocus").style.left="440px"
		}
	}
}
function toRight()
{
	if(focusOn == "menu")
	{
		if(top.pvrTotalTime-60>=0 && top.pvrTotalTime-60>top.pvrCurrentTime+2*60)
		{
			top.pvrTotalTime=top.pvrTotalTime-60
		}
		doTotalTime(top.pvrTotalTime);
	}
	else if(focusOn == "exit" ||focusOn == "pin8"||focusOn == "cec" ||focusOn == "power"||focusOn =="inputsource" ||focusOn =="channelChange" || focusOn =="media" || focusOn =="guide" || focusOn == "homePage" || focusOn == "channelList" || focusOn == "Fav")
	{
		if(selectFlag==0)
		{
			selectFlag=1;
			$("picResetFocus").style.left="140px"
		}
		else 
		{
			selectFlag=0;
			$("picResetFocus").style.left="440px"
		}
	}
}
function $(id)
{
    return document.getElementById(id);
}
function showCurTime()
{
	$("time").innerText =  setting.currentTime.substring(0,5);
}
function isOverflowed(element)
{
	//console.log("isOverflowed:element.scrollWidth="+element.scrollWidth +"element.clientWidth="+element.clientWidth);
    if(element.scrollWidth > element.clientWidth)
	{
		element.setAttribute("class","marquee");
	}
}
function init()
{
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	top.RemoteConntrolType = "PVR";//lqt- 设置虚拟遥控器的场景类型--pvr
	top.g_temp = "pvr";
	var tempString = window.location.search;//获取URL携带参数
	tempString = tempString.substring(tempString.indexOf("?")+1);
	tempValue = tempString.split("&");
	var span=$("pvrTitle").getElementsByTagName("span");
	span[0].innerText=pvrConName[0];
	$("programInfo").innerText=pvrConName[1];
	var channelInfo = channel.getCurrentChannelInfo();
	$('programInfoCon').innerText = other[0] + " " + channelInfo.number + " " + channelInfo.name;
	$("pvrNote").innerText=pvrConName[2][0]+pvrConName[2][1];
	$("pvrHourAdd").innerHTML=pvrConName[5]+"+";
	$("pvrHourDel").innerHTML=pvrConName[5]+"-";
	$("pvrSecondAdd").innerHTML=pvrConName[6]+"+";
	$("pvrSecondDel").innerHTML=pvrConName[6]+"-";
	$("totalRecName").innerHTML=pvrConName[7];
	$("dialogName").innerText=pvrConName[8];
	$("pvrRemind").innerText=pvrConName[9];
	$("time").innerText =  setting.currentTime.substring(0,5);
	setTimeout(function(){
	isOverflowed($("totalRecName"));
	isOverflowed($("pvrHourAdd"));
	isOverflowed($("pvrHourDel"));
	isOverflowed($("pvrSecondAdd"));
	isOverflowed($("pvrSecondDel"));},1);
	setInterval("showCurTime()",1000);
	if(tempValue[0]=="menu")
	{
		//add chenhua 2014.6.17 when timeshift is runing
		if(top.timeShiftStatusFlag == 1)
		{
			showRemind("notAvailable");
			return;
		}
		
		top.Log("********************top.recordStatusFlag="+top.recordStatusFlag);
		if(top.recordStatusFlag==0)
		{
			pvr.pvrMhegSuspend(1);//将mheg状态和显示挂起
			if(pvr.getUsbStatus() != 1)//没有插入usb
			{
				if(top.bookingMode == 1)//预约录制
				{
					top.bookingMode = 0;
					channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
					if(!setting.powerBacklightState)//待机录制中
					{
						setting.powerOff();
						return;
					}
				}
				showRemind("noDisk");
			}
			else
			{
				//$('pvrPopwin').style.display = "block";
				initDetail();
				if(top.recordStatusFlag==1)//开始录制后进行一下操作 否则会在提示后退出该页面
				{
					top.$("main").src = "channelPlay.html";
					top.main.focus();
					top.setFrameFocusPage("main");
					
					return;
				}
			}
			doTotalTime(top.pvrTotalTime);
			doCurrentTime(top.pvrCurrentTime);
		}
		else
		{
			$('pvrPopwin').style.display = "block"; 
			top.pvrCurrentTime = pvr.recordingTimeLength();
			if(top.pvrCurrentTime>top.pvrTotalTime)
			{
				pvr.recordStop();
				showRemind("saveFile");
			}
			doCurrentTime(top.pvrCurrentTime); 
			recordStatus = "recording";
			recordingTimer = setInterval("doRecording()",1000);
			doTotalTime(top.pvrTotalTime);//
		}
		 showMenuTimer=setTimeout("toBack()",5000);
	}
	else
	{
		showRemind(tempValue[0]);
		top.pvrCurrentTime = pvr.recordingTimeLength();
		if(top.pvrCurrentTime>top.pvrTotalTime)
		{
			pvr.recordStop();
			showRemind("saveFile");
		}
		doCurrentTime(top.pvrCurrentTime); 
		recordStatus = "recording";
		recordingTimer = setInterval("doRecording()",1000);
		doTotalTime(top.pvrTotalTime);
		showMenuTimer=setTimeout("toBack()",5000);
	}
	addMouseListener();
}
function toBack()
{
	if(focusOn != "menu")
	{
		hiddenRemind();
	}
	else if(focusOn == "menu")
	{
		if(recordStatus == "recording")
		{
			top.$("main").src = "channelPlay.html";
			return;
		}
		else if(recordStatus == "noRecord")
		{
			top.$("main").src = "channelPlay.html";
		}
	}

}
function initDetail()
{
	powerBlackListFlag = setting.powerBacklightState;
	if(top.bookingMode == 1)//预约录制
	{
		toRecordKey();
	}
	else
	{
		var channelInfo = channel.getChannelInfoByIndex(top.currentChannelIndex);
		$('programInfoCon').innerText = other[0] + " " + channelInfo.number + " " + channelInfo.name;
		toRecordKey();
	}
}

function showRemind(flagWord)
{	
	if(showMenuTimer!=0)
	{
		clearTimeout(showMenuTimer);
		showMenuTimer=setTimeout("toBack()",5000);
	}
	$("pvrPopwin").style.display="none";
	$("picReset").style.display="block";
	$("picResetFocus").style.display="none";
	var picReDivs=$("picReset").getElementsByTagName("div");
	top.Log("****************"+flagWord)
	if(flagWord == "noSignal")
	{
		picReDivs[0].style.display="none";
		picReDivs[1].style.display="none";
		$("dialogContent").innerText = remindWords[12];
		focusOn = "notAvailable";
		top.recordStatusFlag=0;
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "notAvailable")
	{
		picReDivs[0].style.display="none";
		picReDivs[1].style.display="none";
		$("dialogContent").innerText = remindWords[8];
		focusOn = "notAvailable";
		top.recordStatusFlag=0;
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "notSurport")
	{
		picReDivs[0].style.display="none";
		picReDivs[1].style.display="none";
		$("dialogContent").innerText = remindWords[7];
		focusOn = "notSurpport";
		if(top.recordStatusFlag==1)
		{
			top.recordStatusFlag=0;
			pvr.recordStop();
		}
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "noSpace")
	{
		picReDivs[0].style.display="none";
		picReDivs[1].style.display="none";
		$("dialogContent").innerText = remindWords[5];
		focusOn = "noSpace";
		if(top.recordStatusFlag==1)
		{
			top.recordStatusFlag=0;
			pvr.recordStop();
		}
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src= \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "usbRemove")
	{
		picReDivs[0].style.display="none";
		picReDivs[1].style.display="none";
		$("dialogContent").innerText = remindWords[4];
		focusOn = "usbRemove";
		if(top.recordStatusFlag==1)
		{
			top.recordStatusFlag=0;
			pvr.recordStop();
		}
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "noDisk")
	{
		picReDivs[0].style.display="none";
		picReDivs[1].style.display="none";
		$("dialogContent").innerText = disRemindWords;
		focusOn = "noDisk";
		if(top.recordStatusFlag==1)
		{
			top.recordStatusFlag=0;
			pvr.recordStop();
		}
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "saveFile")
	{
		picReDivs[0].style.display="none";
		picReDivs[1].style.display="none";
		$("dialogContent").innerText = remindWords[9];
		top.pvrCurrentTime=0;
		top.pvrTotalTime=2*60*60;
		top.recordStatusFlag=0;
		focusOn = "saveFile";
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
		setTimeout(str,3000);
	}
	else if(flagWord == "power")
	{
		$("picResetFocus").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
	    picReDivs[0].innerText=powerOffRemind[1];
	    picReDivs[1].innerText=powerOffRemind[0];
		$("dialogContent").innerText = powerOffRemind[2];
		selectFlag=0;
		focusOn = "power";
	}
	else if(flagWord == "exit")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block"
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[2];
		selectFlag=0;
		focusOn = "exit";
	}
	else if(flagWord == "pin8")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		if(recordStatus == "noRecord")
		{
			$("dialogContent").innerText = changeToPIN8[0];
		}
		else 
		{
			$("dialogContent").innerText = changeToPIN8[1];
		}
		selectFlag=0;
	   focusOn = "pin8";
	}
	else if(flagWord == "cec")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		if(recordStatus == "noRecord")
		{
			$("dialogContent").innerText = changeToCEC[0];
		}
		else 
		{
			$("dialogContent").innerText = changeToCEC[1];
		}
		selectFlag=0;
	   focusOn = "cec";
	}
	else if(flagWord == "inputsource")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[10];
		selectFlag=0;
	   focusOn = "inputsource";
	}
	else if(flagWord == "channelChange")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = changeChannel[1];
		selectFlag=0;
	   focusOn = "channelChange";
	}
	else if(flagWord == "guide")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = guideJump[1];
		selectFlag=0;
	   focusOn = "guide";
	}
	else if(flagWord == "media")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = mediaJump[1];
		selectFlag=0;
	    focusOn = "media";
	}
	else if(flagWord == "homePage")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[11];
		selectFlag=0;
	    focusOn = "homePage";
	}
	else if(flagWord == "channelList")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[11];
		selectFlag=0;
	    focusOn = "channelList";
	}
	else if(flagWord == "Fav")
	{
		$("picResetFocus").style.display="block";
		picReDivs[0].style.display="block";
		picReDivs[1].style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[11];
		selectFlag=0;
	    focusOn = "Fav";
	}
	
}
var screenMode = channel.currentScreenSaverMode;
function toRecordKey()
{
	if(!channel.currentSignalStatus)
	{
		if(top.bookingMode == 1)//预约录制
		{
			top.bookingMode = 0;
			channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
			if(!powerBlackListFlag)//待机录制中
			{
				setting.powerOff();
				return;
			}
		}
		showRemind("noSignal");
	}
	else if(screenMode == 0 || screenMode == 7  || top.parentalLock == 1 || top.channelLock == 1 || top.inputLock == 1)//featrue not available
	{
		if(top.bookingMode == 1)//预约录制
		{
			top.bookingMode = 0;
			channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
			if(!powerBlackListFlag)//待机录制中
			{
				setting.powerOff();
				return;
			}
		}
		showRemind("notAvailable");
	}
	else if(pvr.isVideoScramble() )//scramble:pvr timeshift not surpport 
	{
		channel.testLog("bookingMode===="+top.bookingMode+"powerBlackListFlag==="+powerBlackListFlag);
		if(top.bookingMode == 1)//预约录制
		{
			top.bookingMode = 0;
			channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
			if(!powerBlackListFlag)//待机录制中
			{
				setting.powerOff();
				return;
			}
		}
		showRemind("notSurport");
	}
	else
	{
		if(pvr.getFreeSpaceStatus())//查看是否有剩余空间
		{
			if(top.bookingMode == 1)//预约录制
			{
				top.bookingMode = 0;
				channel.bookingRecordStart(1);//提醒底层record开始状态，0表示无法录制，1表示开始录制
				pvr.recordStart();
			    top.recordStatusFlag=1;
			    recordStatus = "recording";
				console.log("I will record the channel");
			}
			else 
			{
				if(pvr.recordStartByIndex(top.currentChannelIndex)==0)
				{//start record
					top.recordStatusFlag=1;
					recordStatus = "recording";
				}
				else
				{
					top.recordStatusFlag=0;
					top.jumpPage();
				}
			}
			//pvrInfo = pvr.getRecordingFileInfo();
			//top.pvrTotalTime=pvrInfo.date;
			//doCurrentTime(top.pvrCurrentTime);
			//recordingTimer = setInterval("doRecording()",1000);
		}
		else
		{
			if(top.bookingMode == 1)//预约录制
			{
				var channelInfo = channel.getCurrentChannelInfo();
				$('programInfoCon').innerText = other[0] + " " + channelInfo.number + " " + channelInfo.name;
				top.bookingMode = 0;
				channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
				if(!powerBlackListFlag)//待机录制中
				{
					setting.powerOff();
					return;
				}
			}
			showRemind("noSpace");
		}
		
	}
}
/*
*切分时间，将以秒为单位的时间切分出时，分，秒的字符串
*/

function doTotalTime(time)
{
	var hour = parseInt(time/3600,10);
	var minute =  parseInt((time - hour*3600)/60,10);
	var second = time%60;
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	$("totalRecHour").innerText=hour;
	$("totalRecMinute").innerText=minute;
}
function doCurrentTime(time)
{
	var hour = parseInt(time/3600,10);
	var minute =  parseInt((time - hour*3600)/60,10);
	var second = time%60;
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	if(second < 10)
	{
		second = "0" + second;
	}
	$("currentRecHour").innerText=hour;
	$("currentRecMinute").innerText=minute;
	$("currentRecSecond").innerText=second;
}
/*
*用途：在显示器左上角显示节目录制时间
*用到全局变量：recordMinute//录制时间的分钟位 recordSecond：录制时间的秒位
*/
function doRecording()
{
	top.pvrCurrentTime = pvr.recordingTimeLength();
	if(top.pvrCurrentTime>top.pvrTotalTime)
	{
	    pvr.recordStop();
		showRemind("saveFile");
	}
	doCurrentTime(top.pvrCurrentTime); 
}

function hiddenRemind()
{
	if (focusOn == "power")
		setting.cleanPowerOff();
	top.$("main").src = "channelPlay.html";
}

function toStopKey()
{
	if(recordStatus == "recording" && focusOn == "menu")
	{
		pvr.recordStop();
		top.pvrCurrentTime=0;
		top.pvrTotalTime=2*60*60;
		pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		top.$("globleShow").contentWindow.hiddenRecord();
		showRemind("saveFile");
	}
}
function readyToChangePIN8()
{
	if(focusOn != "noDisk" && focusOn != "notAvailable" && focusOn != "notSurpport" 
		&& focusOn != "usbRemove" && focusOn != "noSpace" && focusOn != "power"&& focusOn != "pin8")
	{
		showRemind("pin8");
	}
}

function readyToChangeCEC()
{
	if(focusOn != "noDisk" && focusOn != "notAvailable" && focusOn != "notSurpport" 
		&& focusOn != "usbRemove" && focusOn != "noSpace" && focusOn != "power" &&focusOn!="cec")
	{
		showRemind("cec");
	}
}
/*
供booking调用，目的是防止在选择开始录制预定的节目时跳转页面和本页面的定时隐藏冲突，可能导致该弹出pvr录制页面被channelPlay页面覆盖
*/
function bookingPreOperate()
{
	toBack();
}

function uninit()
{
	top.g_temp = "";
	clearInterval(recordingTimer);
	clearTimeout(showMenuTimer);
	if(top.recordStatusFlag==1)
	{
		top.$("globleShow").contentWindow.showPvrCurrentTime();
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	    clearTimeout(showMenuTimer);
		if(evt.button == 2)toBack();//right key
		showMenuTimer=setTimeout("toBack()",5000);
	}
	$("pvrHourImgAdd").onmousedown = function(evt){
		if(evt.button == 0){//left key
				toUp();
		}
	}
	$("pvrHourImgDel").onmousedown = function(evt){
		if(evt.button == 0){//left key
				toDown();
		}
	}
	$("pvrSecondImgAdd").onmousedown = function(evt){
		if(evt.button == 0){//left key
				toLeft();
		}
	}
	$("pvrSecondImgDel").onmousedown = function(evt){
		if(evt.button == 0){//left key
				toRight();
		}
	}
}
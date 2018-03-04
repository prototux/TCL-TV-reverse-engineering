
top.keySetForUI(1);
document.onnotify 		= notifyProcess;
document.onkeydown 		= keyproc;

var hotkeyWords			= top.timeshiftStatus;
var yesNoWords			= top.yesNo;
var remindWords 		= [top.pvrRemindWords[0],top.pvrRemindWords[2],top.timeshiftExtra[0],top.timeshiftExtra[2],top.timeshiftExtra[2],
							top.pvrRemindWords[6],top.timeshiftExtra[3],top.timeshiftExtra[4],top.timeshiftExtra[5],top.timeshiftExtra[6],
							top.timeshiftExtra[9]];
var notEnoughSpace		= top.pvrRemindWords[3];
var tips				= top.others[28];
							
var playStatusImgs 		= ["../images/pvr/stop.png",
							"../images/Time_shift-Play.png",
							"../images/Time_shift-Pause.png",
							"../images/Time_shift-FB.png",
							"../images/Time_shift-FF.png"];
var pvr 				= top.g_pvr;
var channel				= top.g_channel;
var setting				= top.g_setting;
var playStatus			= "pause";				//play,pause,fastBackward,fastForward，没有stop状态
var startTimeshiftTime	= 0;					//当前录制的节目录制的开始时间，注意这个时间可能会不断改变（老的timeshift被删除时，这个时间改变）
var playBackOffsetTime	= 0;					//当前回放的时间
var recordedDuration	= 0;					//已经录制的时长
var baseTime			= 0;					//时间片显示的基准时间
var timeshiftTimer 		= 0; 					//timeshift 进行时实时更新状态的计时器
var focusOn				= "menu";				//menu:主菜单;channelChange：在频道切换上;usbRemove:usb 移除;noSpace:没有多余的空间来录制;pin8:cart信源接入;cec:HDMI信源接入;notAvailable:不可用，比如invalid service，no signal等;homePage:按smartTv键或home键
var list_position_h 	= 0;
/*time shift status enum*/
if(1)
{
	var pvr_pause 			= 0;
	var pvr_normal			= 1;//play
	var pvr_ff_2			= 2;
	var pvr_ff_4			= 3;
	var pvr_ff_8			= 4;
	var pvr_ff_16			= 5;
	var pvr_ff_32			= 6;
	var pvr_fb_2			= 7;
	var pvr_fb_4			= 8;
	var pvr_fb_8			= 9;
	var pvr_fb_16			= 10;
	var pvr_fb_32			= 11;
	var pvr_slow_2			= 12;
	var pvr_slow_4			= 13;
	var pvr_slow_8			= 14;
	var pvr_slow_16			= 15;
}

if(1)//需要下传到底层的按键枚举值
{
	var E_PVR_KEY_FASTBACKWARD = 0;
	var E_PVR_KEY_FASTFORWARD = 1;
	var E_PVR_KEY_PAUSE_PALY = 2;
	var E_PVR_KEY_PAUSE = 3;
	var E_PVR_KEY_PLAY = 4;
	var E_PVR_KEY_NUM = 5;
}


var remindAndMenuTimer	= 0;					//主菜单隐藏计时器
var fastStep 			= 1;//快进的速度，1,2,4,8,16,32
var slowStep 			= 1;//快退的速度，1,2,4,8,16,32
var FORM_START			= 190;
var FORM_STEP			= 300;

function notifyProcess(e)
{
	top.Log("in notifyProcess timeshift");
    var msg = e.which;
	var value = e.modifiers;
	/*有几个消息处理时底层自己把pvr和timeshift停止掉，我们上面只需要退出页面，将mheg恢复即可，这类消息有
	1.usb拔出：				E_PVR_DISK_UNPLUG
	2.usb盘满：				E_PVR_DISK_FULL			//该消息只在pvr下出现，timeshift没有磁盘满的说法
	3.录制结束：				E_PVR_RECORD_END		//该消息只在pvr下出现，timeshift无此消息
	4.信号断掉：				E_PVR_NO_SIGNAL			//该消息是pvr和timeshift特有的消息
	5.当前播放数据流更新：		E_DTV_SERVICE_PLAY		//该消息是新数据流播放的消息
	6.服务异常：				E_SS_INVALID_SERVICE	//该消息表示运营商服务异常
	7.流中只有数据：			E_SS_DATA_ONLY			
	8.流加密:					E_SS_SCRAMBLED_PROGRAM	//这里需要注意，在进入pvr和timeshift的时候加密流被解密了也是不能录制的，需要调用pvr.isVideoScramble函数来判断这种情况
	9.频道被锁:				E_SS_CH_BLOCK			
	10.有父母锁：				E_SS_PARENTAL_BLOCK
	11.信源锁：				E_DTV_SS_INPUT_BLOCK
	12.ci发起主动换台：		E_CIPLUS_PROGRAM_CHANGE
	13.底层切台完成:			E_CHANNEL_PLAY_END		//底层切台的情况主要是有nit 表刷新的时候可能会涉及到主动切台
	*/
	switch(msg)
	{
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒制提醒
			///////////////////////////chenhua change start////////////////////////////////
			top.systemEventProc(e);
			///////////////////////////chenhua change start////////////////////////////////
			return;
		case top.E_PVR_PLAYBACK_MOTION_CHANGE://播放状态更改,消息携带的参数为枚举PVR_MOTION
			if(value == 0)//pause
			{
				slowStep = 1;
				fastStep = 1;
				playStatus = "pause";
				showPlayStatus(playStatus,0);
			}
			else if(value == 1)//normal
			{
				fastStep = 1;
				slowStep = 1;
				playStatus = "play"
				showPlayStatus(playStatus,0);
			}
			else if(value >= 2 && value <= 6)//fast forward
			{
				slowStep = 1;
				playStatus = "fastForward";
				timeShiftSpanList[0].innerText = timeShiftWords[0];
				
				if(value == 2)
				{
					fastStep = 2;
				}
				else if(value == 3)
				{
					fastStep = 4;
				}
				else if(value == 4)
				{
					fastStep = 8;
				}
				else if(value == 5)
				{
					fastStep = 16;
				}
				else if(value == 6)
				{
					fastStep = 32;
				}
				showPlayStatus(playStatus,fastStep);
			}
			else if(value >= 7 && value <= 11)//back forward
			{
				fastStep = 1;
				playStatus = "fastBackward";
				
				if(value == 7)
				{
					slowStep = 2;
				}
				else if(value == 8)
				{
					slowStep = 4;
				}
				else if(value == 9)
				{
					slowStep = 8;
				}
				else if(value == 10)
				{
					slowStep = 16;
				}
				else if(value == 11)
				{
					slowStep = 32;
				}
				showPlayStatus(playStatus,slowStep);
			}
			break;
		case top.E_PVR_TIMESHIFT_AUTO_START://pvr录制满时，如果当前timeshift是暂停的会自动播放
			autoPlay();
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
		case top.E_SS_PARENTAL_BLOCK://有节目锁//对
		case top.E_SS_CH_BLOCK://channel lock//
			channel.playLockProgram();
			break;
		case top.E_PVR_NO_SIGNAL:
			hiddenRemindAndMenu();
			break;
		case top.E_PVR_SIGNAL_RESUME:
			initTimeshiftUi();
			break;
		case top.E_PVR_DISK_UNPLUG://usb remove//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = "usbRemove";
				showRemind();
			}
			break;
		case top.E_READY_TO_CHANGE_SCART://ready to change to cart source
			if(top.timeShiftStatusFlag == 1)
			{
				urlValues[0]="pin8";
				urlValues[1]=e.modifiers;
				focusOn = "pin8";
				showRemind();
			}
			else
			{
				top.systemEventProc(e);
			}
			break;
		case top.E_READY_TO_CHANGE_CEC://ready to change to cec source
			if(top.timeShiftStatusFlag == 1)
			{
				urlValues[0]="cec";
				urlValues[1]=e.modifiers;
				focusOn = "cec";
				showRemind();
			}
			else
			{
				top.systemEventProc(e);
			}
			break;
		case top.E_DTV_SERVICE_PLAY://播放流数据更新,//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
		case top.E_CIPLUS_PROGRAM_CHANGE://ci 主动换台发出换台刷新节目信息//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.g_isShowInfoBar = 1;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = "notAvailable";
				showRemind();
			}
			break;
		case top.E_SS_INVALID_SERVICE://invalid service//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
		case top.E_SS_DATA_ONLY://data only//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
		case top.E_CHANNEL_PLAY_END://add chenhua 2014.5.14 for pvr and timeshift
			top.channelLock = 0;
			top.parentalLock = 0;
			top.inputLock = 0;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = "notAvailable";
				showRemind();
			}
			break;
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.channelLock = 0;
			top.parentalLock = 0;
			top.inputLock = 0;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = "notSurpport";
				showRemind();
			}
			break;
		case top.E_SS_CH_BLOCK://channel lock//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.channelLock = 1;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = "notAvailable";
				showRemind();
			}
			break;
		case top.E_SS_PARENTAL_BLOCK://有节目锁//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.parentalLock = 1;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = "notAvailable";
				showRemind();
			}
			break;
		case top.E_DTV_SS_INPUT_BLOCK://信源锁//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.inputLock = 1;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = "notAvailable";
				showRemind();
			}
			break;
		default:
			top.systemEventProc(e);
			break;
	}
}
var evt;
function keyproc(e)
{
	//top.Log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>in timeshift notifyProcess");

	var keycode = e.which;
	//通用键
	switch(keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt
			if(top.virtualRemoteState == 0)
			{
				if($('remind').style.display != "block")
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote(top.RemoteConntrolType);
				}
			}
			else
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			break;
			//lqt--虚拟遥控器的上键
		case top.VK_VIRTUAL_KEYBOARD_UP:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForUp();
			
			break;
		}
		//lqt--虚拟遥控器的下键
		case top.VK_VIRTUAL_KEYBOARD_DOWN:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForDown();
			
			break;
		}
		//lqt--虚拟遥控器的左键
		case top.VK_VIRTUAL_KEYBOARD_LEFT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForLeft();
			
			break;
		}
		//lqt--虚拟遥控器的右键
		case top.VK_VIRTUAL_KEYBOARD_RIGHT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForRight(); 
			
			break;
		}
		//lqt--鼠标的左键
		case top.VK_VIRTUAL_MOUSE_OK:
		{
			var clientX = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientX", "0");
			var clientY = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientY", "0");
			console.log("lqt---timeshift.js---clientX: "+clientX);
			console.log("lqt---timeshift.js---clientY: "+clientY);
			top.document.getElementById("virtualRemote").contentWindow.keyDownMouseClick(clientX,clientY); 
			
			break;
		}
		//lqt--虚拟遥控器的ok键
		case top.VK_VIRTUAL_KEYBOARD_OK:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForOK(); 
			
			break;
		}
		//lqt--虚拟遥控器的返回键
		case top.VK_VIRTUAL_KEYBOARD_BACK:
		{
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			
			break;
		}

		case top.VK_CHANNEL_UP://channel +
			evt = e;
			focusOn = "channelChange";
			showRemind();
			break;
		case top.VK_CHANNEL_DOWN://channel -
			evt = e;
			focusOn = "channelChange";
			showRemind();
			break;
		case top.VK_EXIT://exit
		case top.VK_STOP:
			doExit();
			break;
		case top.VK_PLAY_PAUSE://pause/play
			toPlay();//toPauseOrPlayKey();
			break;
		case top.VK_PAUSE:
			toPause();
			break;
		case top.VK_PLAY:
			toPlay();
			break;
		case top.VK_REWIND://fastBackward
			toFastBackwardKey();
			break;
		case top.VK_FAST_FWD://fastForward
			toFastForwardKey();
			break;
		case top.VK_LEFT:
			toLeft();
			break;
		case top.VK_RIGHT:
			toRight();
			break;
		case top.VK_ENTER:
			doEnter();
			break;
		case top.VK_0:
		case top.VK_1:
		case top.VK_2:
		case top.VK_3:
		case top.VK_4:
		case top.VK_5:
		case top.VK_6:
		case top.VK_7:
		case top.VK_8:
		case top.VK_9:
			if(remindAndMenuTimer)
			{
				clearTimeout(remindAndMenuTimer);
			}
			remindAndMenuTimer = 0;
			top.$("main").src = "channelPlay.html?" + (keycode - 48);
			break;
		default:
			//hiddenRemindAndMenu();
			top.keyDownProcess(e);
			break;
	}
	
	
}

function $(id)
{
	return document.getElementById(id);
}

/*left键响应函数*/
function toLeft()
{
	if(focusOn != "menu")
	{
		if(list_position_h == 0)
		{
			list_position_h=1;
		}
		else 
		{
			list_position_h = 0;
		}
		$("remindFocus").style.left = FORM_START + list_position_h*FORM_STEP + "px";
	}
}

/*right键响应函数*/
function toRight()
{
	if(focusOn != "menu")
	{
		if(list_position_h == 0)
		{
			list_position_h=1;
		}
		else 
		{
			list_position_h = 0;
		}
		$("remindFocus").style.left = FORM_START + list_position_h*FORM_STEP + "px";
	}
}

function doEnter()
{
	if(focusOn != "menu")
	{
		if(list_position_h == 0)
		{
			top.timeShiftStatusFlag = 0;
			switch(focusOn)
			{
				case "stop":
					//lqt---恢复默认的类型
					top.RemoteConntrolType = "default";
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					setTimeout(function(){top.$("main").src = "channelPlay.html";top.setFrameFocusPage("main");},1000);
					break;
				case "channelChange":
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					if(urlValues[0] == "channelChange")//从其他页面跳转到该页面，需要跳到指定的台
					{
						if(urlValues[1] != channel.currentIndex)
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
							top.currentChannelIndex = urlValues[1];
							top.g_channel.playByIndex(urlValues[1]);
						}
						top.$("main").src = "channelPlay.html";
						top.setFrameFocusPage("main");
					}
					else//本页面通关过channel +/-键切台，调用通用处理
					{
						top.keyDownProcess(evt);
					}
					break;
				case "pin8":
				case "cec":
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
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
					channel.inputSource = urlValues[1];
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					top.$("main").src = "channelPlay.html";
					top.setFrameFocusPage("main");
					break;
				case "guide":
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					if(top.checkNetStatus()&&top.g_setting.guideOnSwitch==1)
					{
						top.appOpenFlag=1;
						top.lastInputSource = top.g_channel.inputSource;
						top.$("main").style.display="none";
						top.$("operatePage").style.display="none";
						top.$("otherPage").style.display="none";
						top.jumpHotkeyPage("channelPlay.html");
						top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
						top.g_ulits.openApplication("opera.ipepg","-u "+top.g_EpgUpdateUrl);
					}
					else
					{
						top.appOpenFlag=0;
						setTimeout(function(){top.jumpHotkeyPage("programGuide.html")},1000);
					}
					break;
				case "channelList":
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
					
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					top.g_previousHtmlPage = "channelPlay.html";
					top.g_isUsedHotKeyToIntoPage = 1;
					top.operatePage.focus();
					top.$("main").src="channelPlay.html";
					top.$("operatePage").src = "channelList.html";
					top.setFrameFocusPage("operatePage");
					break;
				case "Fav":
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
					
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					top.g_previousHtmlPage = "channelPlay.html";
					top.g_isUsedHotKeyToIntoPage = 1;
					top.operatePage.focus();
					top.$("main").src="channelPlay.html";
					top.g_channel.channelListType = top.FAV_LIST_TYPE;
					top.$("operatePage").src = "channelList.html";
					top.setFrameFocusPage("operatePage");
					break;
				case "gotoRecord":
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
					
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					top.$('main').src = "pvr/Pvr.html?menu";
					top.$("main").style.display = "block";
					top.$("operatePage").src = "";
					top.main.focus();
					top.setFrameFocusPage("main");
					break;
				case "gotoPvrList":
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
					top.isFromOptionIntoUsb = 1;
					top.$('main').src = "deviceList.html";
					top.main.focus();
					top.setFrameFocusPage("main");
					break;
				case  "homePage":
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
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
									if(urlValues[1]=="tv")
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
								top.setFrameFocusPage("main");
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
								if(urlValues[1]=="tv")
								{
									top.$("main").src = "homePageVP.html?tv&title";
								}
								else
								{
									top.$("main").src = "homePageVP.html?app&title";
								}
								top.main.focus();
								top.$("operatePage").src = "";
								top.setFrameFocusPage("main");
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
						if(urlValues[1]=="tv")
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
					top.setFrameFocusPage("main");
					break;
				case "media":
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
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					top.$("main").src = "deviceList.html";
					top.setFrameFocusPage("main");
					break;
				case "inputsource":
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
					pvr.timeshiftStop();
					pvr.returnToLive();//返回实时播放页面
					pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					channel.inputSource = urlValues[1];
					top.$("main").src = "channelPlay.html";
					top.setFrameFocusPage("main");
					break;
				default:
					break;
			}
		}
		else
		{
			hiddenRemindAndMenu();
		}
	}
}

//exit键的响应函数
function doExit()
{
	if(focusOn ==  "unuseble")
	{
		pvr.returnToLive();//返回实时播放页面
		pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		setTimeout(function(){top.$("main").src = "channelPlay.html";},1000);
	}
	else
	{
		focusOn = "stop";
		showRemind();
	}
}

function toPauseOrPlayKey()
{
	//top.Log("in toPauseOrPlayKey focusOn = " + focusOn + ", playStatus = " + playStatus);
	if(focusOn == "menu")
	{
		slowStep = 1;
		fastStep = 1;
		
		if(playStatus == "pause" || playStatus == "fastBackward" || playStatus == "fastForward")
		{
			playStatus = "play";
			pvr.recordedPlayKeyHandler(E_PVR_KEY_PAUSE_PALY);//播放time shift
			showPlayStatus(playStatus,0);
		}
		else if(playStatus == "play")
		{
			playStatus = "pause";
			pvr.recordedPlayKeyHandler(E_PVR_KEY_PAUSE_PALY);
			showPlayStatus(playStatus,0);
		}
		refreshHiddenRemindAndMenuTimer();
	}
}

function toPause()
{
	//top.Log("in toPause focusOn = " + focusOn + ", playStatus = " + playStatus);
	if(focusOn == "menu")
	{
		slowStep = 1;
		fastStep = 1;
		
		playStatus = "pause";
		pvr.recordedPlayKeyHandler(E_PVR_KEY_PAUSE);//播放time shift
		showPlayStatus(playStatus,0);
		refreshHiddenRemindAndMenuTimer();
	}
}

function toPlay()
{
	//top.Log("in toPause focusOn = " + focusOn + ", playStatus = " + playStatus);
	if(focusOn == "menu")
	{
		slowStep = 1;
		fastStep = 1;
		
		playStatus = "play";
		pvr.recordedPlayKeyHandler(E_PVR_KEY_PLAY);//播放time shift
		showPlayStatus(playStatus,0);
		refreshHiddenRemindAndMenuTimer();
	}
}

function toFastBackwardKey()
{
	//top.Log("in toFastBackwardKey focusOn = " + focusOn + ", playStatus = " + playStatus);
	if(focusOn == "menu")
	{
		fastStep = 1;
		if(playStatus == "pause")
		{
			playStatus = "play";
			slowStep = 1;
			pvr.recordedPlayKeyHandler(E_PVR_KEY_PAUSE_PALY);//播放time shift
			showPlayStatus(playStatus,0);
			return;
		}
		//快退和快进时，录制节目处于非播放状态，所以下面设置时必要的
		playStatus = "fastBackward";
		
		if(slowStep == 32)
		{
			slowStep = 1;
			pvr.recordedPlayKeyHandler(E_PVR_KEY_FASTBACKWARD);
			playStatus = "play";
			showPlayStatus(playStatus,0);
		}
		else
		{
			slowStep = slowStep*2;
			pvr.recordedPlayKeyHandler(E_PVR_KEY_FASTBACKWARD);
			showPlayStatus(playStatus,slowStep);
		}
		refreshHiddenRemindAndMenuTimer();
	}
}

function toFastForwardKey()
{
	//top.Log("in toFastForwardKey focusOn = " + focusOn + ", playStatus = " + playStatus);
	if(focusOn == "menu")
	{
		slowStep = 1;
		if(playStatus == "pause")
		{
			playStatus = "play";
			fastStep = 1;
			pvr.recordedPlayKeyHandler(E_PVR_KEY_PAUSE_PALY);//播放time shift
			showPlayStatus(playStatus,0);
			return;
		}
		
		//快退和快进时，录制节目处于非播放状态，所以下面设置时必要的
		playStatus = "fastForward";
		
		if(fastStep == 32)
		{
			fastStep = 1;
			pvr.recordedPlayKeyHandler(E_PVR_KEY_FASTFORWARD);
			playStatus = "play";
			showPlayStatus(playStatus,0);
		}
		else
		{
			fastStep = fastStep*2;
			pvr.recordedPlayKeyHandler(E_PVR_KEY_FASTFORWARD);
			showPlayStatus(playStatus,fastStep);
		}
		refreshHiddenRemindAndMenuTimer();
	}
}

/*
描述：接收到E_PVR_TIMESHIFT_AUTO_START消息自动播放timeshift，可能原因是录制允许的空间不够，需要播放掉一部分来删除空间
*/
function autoPlay()
{
	//top.Log("in autoPlay focusOn = " + focusOn + ", playStatus = " + playStatus);
	slowStep = 1;
	fastStep = 1;
	if(playStatus == "pause" || playStatus == "fastBackward" || playStatus == "fastForward")
	{
		playStatus = "play";
		//pvr.recordedPlayKeyHandler(E_PVR_KEY_PAUSE_PALY);//播放time shift
		showPlayStatus(playStatus,0);
	}
	$("autoDisapearedForm").innerText = notEnoughSpace;
	$("autoDisapearedForm").style.display = "block";
	setTimeout(function(){$("autoDisapearedForm").style.display = "none";},3000);
	refreshHiddenRemindAndMenuTimer();
}


/*
描述：根据播放状态显示播放状态
*/
function showPlayStatus(status,value)
{
	if(status == "play")
	{
		$("playStatusImg").src = playStatusImgs[1];
		$("playStatusExtra").innerText = "";
	}
	else if(status == "pause")
	{
		$("playStatusImg").src = playStatusImgs[2];
		$("playStatusExtra").innerText = "";
	}
	else if(status == "fastBackward")
	{
		$("playStatusImg").src = playStatusImgs[3];
		$("playStatusExtra").innerText = "X" + value;
	}
	else if(status == "fastForward")
	{
		$("playStatusImg").src = playStatusImgs[4];
		$("playStatusExtra").innerText = "X" + value;
	}
}

/*
描述：根据当前的focusOn显示提示
*/
function showRemind()
{
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	//lqt
	if(top.virtualRemoteState == 1)
	{
		//隐藏虚拟遥控器
		top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
	}
	
	if(remindAndMenuTimer)
	{
		clearTimeout(remindAndMenuTimer);
	}
	remindAndMenuTimer = 0;
	if(timeshiftTimer)
	{
		clearInterval(timeshiftTimer);
	}
	
	$('remindLeftWords').innerText = yesNoWords[0];
	$('remindRightWords').innerText = yesNoWords[1];
	$("remindName").innerText = tips;
	var remindDivs=$("remind").getElementsByTagName("div");
	switch(focusOn)
	{
		case "stop":
			$('remindWord').innerText = remindWords[0];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "channelChange":
			$('remindWord').innerText = remindWords[2];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "cec":
			$('remindWord').innerText = remindWords[4];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "pin8"://scart
			$('remindWord').innerText = remindWords[3];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "guide"://进入guide
			$('remindWord').innerText = remindWords[7];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "channelList":
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "Fav":
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "homePage"://进入homePage
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "gotoRecord":
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "gotoPvrList":
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "inputsource":
			$('remindWord').innerText = remindWords[9];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "media":
			$('remindWord').innerText = remindWords[8];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "usbRemove":
			top.timeShiftStatusFlag = 0;
			$('remindWord').innerText = remindWords[1];
			remindDivs[0].style.display = "none";
			remindDivs[1].style.display = "none";
			$("remindFocus").style.display = "none";
			var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
			setTimeout(str,3000);
			break;
		case "notAvailable"://invalid service,no signal,data only等
			top.timeShiftStatusFlag = 0;
			$('remindWord').innerText = remindWords[5];
			remindDivs[0].style.display = "none";
			remindDivs[1].style.display = "none";
			$("remindFocus").style.display = "none";
			var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
			setTimeout(str,3000);
			break;
		case "notSurpport":
			top.timeShiftStatusFlag = 0;
			$('remindWord').innerText = remindWords[6];
			remindDivs[0].style.display = "none";
			remindDivs[1].style.display = "none";
			$("remindFocus").style.display = "none";
			var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
			setTimeout(str,3000);
			break;
		default:
			break;
	}
	list_position_h = 1;
	$("remindFocus").style.left = FORM_START + list_position_h*FORM_STEP + "px";
	$('remind').style.display = "block";
	$("timeshiftForm").style.display = "none";
}
function hiddenRemindAndMenu()
{
	top.$("main").src = "channelPlay.html";
}


/*
*切分时间，将以秒为单位的时间切分出时，分，秒的字符串
*/
function doTime(time)
{
	//top.Log("in doTime time = " + time);
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
	return (hour + ":" + minute + ":" + second);
}

/*
description:refresh menu bar show status when menu bar show
参数：
*/
function refreshMenuShow()
{
	if(timeshiftTimer)
	{
		clearInterval(timeshiftTimer);
	}
	timeshiftTimer = setInterval("refreshMenuShow()",900);
	
	startTimeshiftTime = pvr.startTimeshiftTime();
	playBackOffsetTime = pvr.timeshiftCurrentShiftOffset();
	recordedDuration = pvr.recordingTimeLength();
	
	//确定时间片位置和显示开始两个时间和时间片
	$("timeshiftTimepieceContent").style.left = (timeshiftFormOffsetPosition -  parseInt((startTimeshiftTime + playBackOffsetTime - baseTime)/6,10)) + "px";
	var t = parseInt((startTimeshiftTime + playBackOffsetTime - baseTime)/(30*60),10);
	//top.Log("in refreshMenuShow startTimeshiftTime = " + startTimeshiftTime + ",playBackOffsetTime = " + playBackOffsetTime + ",recordedDuration = " + recordedDuration + ",t = " + t);
	for(var i = 0; i < 11; i++)
	{
		if(i >= t && i <= (t + 1))
		{
			timeshiftBarSpanList[i].style.display = "block";
			timeshiftBarDivList[i].style.display = "block";
		}
		else
		{
			timeshiftBarSpanList[i].style.display = "none";
			timeshiftBarDivList[i].style.display = "none";
		}
	}
	
	//录制进度更新
	$("timeshiftRecordBar").style.left = timeshiftBorderOffsetPosition - parseInt(playBackOffsetTime/6,10) + "px";
	$("timeshiftRecordBar").style.width = parseInt(recordedDuration/6,10) + "px";
	
	
	$("offsetTime").innerText = "-" + doTime(recordedDuration - playBackOffsetTime);
	//top.Log("inner" + $("offsetTime").innerText);
	$("timeshiftForm").style.display = "block";
	checkWordsScroll();
}
function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}
function checkWordsScroll()
{
	for(var i = 0; i < 5; i++)
	{
		if(isOverflowed(bottomFormSpanList[i]))//如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
		{
			bottomFormSpanList[i].style.overflowX = "-webkit-marquee";
			bottomFormSpanList[i].style.textOverflow = "clip";
		}
		else
		{
			bottomFormSpanList[i].style.overflowX = "hidden";
			bottomFormSpanList[i].style.textOverflow = "ellipsis";
		}
	}
}


/*
描述：填写从当前开始的后五个小时以内的时间片时间，每半个小时填写一次
参数：hour:起始时间的小时位；minuteFlag：0 当前时间分钟位没有过超过30，1 当前时间的分钟位超过30；spanList要填写的目标
*/
function insertAllTimePiece(hour,minuteFlag,spanList)
{
	//top.Log("in insertAllTimePiece hour = " + hour + ",minuteFlag = " + minuteFlag);
	for(var i = 0; i < 11; i++)
	{
		if(hour < 24)
		{
			if(minuteFlag == 0)
			{
				spanList[i].innerText = hour + ":00";
				minuteFlag = 1;
			}
			else
			{
				spanList[i].innerText = hour + ":30";
				hour++;
				minuteFlag = 0;
			}
		}
		else
		{
			hour = 0;
			if(minuteFlag == 0)
			{
				spanList[i].innerText = hour + ":00";
				minuteFlag = 1;
			}
			else
			{
				spanList[i].innerText = hour + ":30";
				hour++;
				minuteFlag = 0;
			}
		}
	}
}

var timeshiftBorderOffsetPosition = 450;//这个位置是当前shift的最开始的（最开始的位置就是当前时间的位置，应该处于最中间）位置相对于timeshiftBorder最左侧的位置的差值
var timeshiftFormOffsetPosition = 540;//这个位置是当前shift的最开始的（最开始的位置就是当前时间的位置，应该处于最中间）位置相对于timeshiftForm最左侧的位置的差值
var pxOfOneHour = 800;//1个小时对应的长度为600个像素
var timeshiftBarSpanList;
var timeshiftBarDivList;
function initTimeshiftUi()
{
	timeshiftBarSpanList = $("timeshiftTimepieceContent").getElementsByTagName("span");
	timeshiftBarDivList = $("timeshiftTimepieceContent").getElementsByTagName("div");

	var times = setting.currentTime.split(":");
	if(parseInt(times[1],10) < 30)
	{
		baseTime = parseInt(times[0],10)*3600;
		insertAllTimePiece(parseInt(times[0],10),0,timeshiftBarSpanList);
	}
	else
	{
		baseTime = parseInt(times[0],10)*3600 + 30*60;
		insertAllTimePiece(parseInt(times[0],10),1,timeshiftBarSpanList);
	}
	//top.Log("in initTimeshiftUi baseTime = " + baseTime);
	
	
	var tshiftStatus = pvr.timeshiftPlayBackStatus();
	var times = 0;
	switch(tshiftStatus)
	{
		case pvr_pause:
			playStatus = "pause";
			break;
		case pvr_normal:
			playStatus = "play";
			break;
		case pvr_ff_2:
			playStatus = "fastForward";
			fastStep = 2;
			slowStep = 1;
			times = fastStep;
			break;
		case pvr_ff_4:
			playStatus = "fastForward";
			fastStep = 4;
			slowStep = 1;
			times = fastStep;
			break;
		case pvr_ff_8:
			playStatus = "fastForward";
			fastStep = 8;
			slowStep = 1;
			times = fastStep;
			break;
		case pvr_ff_16:
			playStatus = "fastForward";
			fastStep = 16;
			slowStep = 1;
			times = fastStep;
			break;
		case pvr_ff_32:
			playStatus = "fastForward";
			fastStep = 32;
			slowStep = 1;
			times = fastStep;
			break;
		case pvr_fb_2:
			playStatus = "fastBackward";
			fastStep = 1;
			slowStep = 2;
			times = slowStep;
			break;
		case pvr_fb_4:
			playStatus = "fastBackward";
			fastStep = 1;
			slowStep = 4;
			times = slowStep;
			break;
		case pvr_fb_8:
			playStatus = "fastBackward";
			fastStep = 1;
			slowStep = 8;
			times = slowStep;
			break;
		case pvr_fb_16:
			playStatus = "fastBackward";
			fastStep = 1;
			slowStep = 16;
			times = slowStep;
			break;
		case pvr_fb_32:
			playStatus = "fastBackward";
			fastStep = 1;
			slowStep = 32;
			times = slowStep;
			break;
	}
	showPlayStatus(playStatus,times);
}

function refreshHiddenRemindAndMenuTimer()
{
	if(remindAndMenuTimer)
	{
		clearTimeout(remindAndMenuTimer);
	}
	remindAndMenuTimer = setTimeout("hiddenRemindAndMenu()",10000);
}

/*
供booking调用，目的是防止在选择开始录制预定的节目时跳转页面和本页面的定时隐藏冲突，可能导致该弹出pvr录制页面被channelPlay页面覆盖
*/
function bookingPreOperate()
{
	top.Log("in timeshfit bookingPreOperate");
	hiddenRemindAndMenu();
}

/*
我们设置timeshiftBar最长包含10个时间段（每半个小时位一个时段），也就是跨度为5个小时（这个时间应该是足够用了）
*/
var urlValues;
var bottomFormImgList;
var dialogButtonClassList;
var bottomFormSpanList;
function init()
{
	top.clearMyTimeout();
	top.g_temp = "pvr";
	top.RemoteConntrolType = "TimeShift";//lqt--设置虚拟遥控器的场景类型
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MUSIC_MOVIE_PLAYER;
	bottomFormImgList = $("bottomForm").getElementsByTagName("img");
	dialogButtonClassList = $("remind").getElementsByClassName("dialogButton");
	/*初始化时判断录制条件是否具备、featrue not available 和 pvr timeshift not surpport 
		在timeshiftInit中已经判断，此处就不用判断了*/
	var tempString = window.location.search;//获取URL携带参数
	tempString = tempString.substring(tempString.indexOf("?")+1);
	urlValues = tempString.split("&");
	
	//top.Log("in init timeShiftStatusFlag = " + top.timeShiftStatusFlag + ", tempString = " + tempString);
	
	if(urlValues[0] == "menu")
	{
		focusOn = urlValues[0];
		
		bottomFormSpanList = $("bottomForm").getElementsByTagName("span");
		for(var i = 0; i < 5; i++)
		{
			bottomFormSpanList[i].innerText = hotkeyWords[i];
		}
		initTimeshiftUi();
		if(top.timeShiftStatusFlag == 1)
		{
			refreshMenuShow();
			
			//top.Log("in init urlValues[1] = " + urlValues[1]);
			if(urlValues[1] == "playPause")
			{
				toPauseOrPlayKey();
			}
			else if(urlValues[1] == "fastBackward")
			{
				toFastBackwardKey();
			}
			else if(urlValues[1] == "fastForward")
			{
				toFastForwardKey();
			}
			else if(urlValues[1] == "autoPlay")
			{
				//top.Log("in init before autoPlay ");
				autoPlay();
			}
			else if(urlValues[1] == "play")
			{
				toPlay();
			}
			else if(urlValues[1] == "pause")
			{
				toPause();
			}
			else
			{
				refreshHiddenRemindAndMenuTimer();
			}
		}
		else
		{
			top.timeShiftStatusFlag = 1;
			pvr.pvrMhegSuspend(1);//将mheg状态和显示挂起
			pvr.timeshiftStart();
			playStatus = "pause";
			refreshMenuShow();
			refreshHiddenRemindAndMenuTimer();
		}
	}
	else//非播放状态控制按钮
	{
		focusOn = urlValues[0];
		showRemind();
	}
	addMouseListener()
	//top.Log("in init end");
}

function uninit()
{
	//top.Log("in uninit timeShiftStatusFlag = " + top.timeShiftStatusFlag);
	top.g_temp = "";
	if(top.timeShiftStatusFlag == 1)
	{
		top.$("globleShow").contentWindow.showTimeShiftOffsetTime();
	}
	else//如果在类似切换台等选择中如果选择退出timeshift去做响应操作时使用到此处
	{
		top.$("globleShow").contentWindow.hiddenTimeShift();
	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2) hiddenRemindAndMenu();//right key
	}
	
	for(var i = 0; i < 5; i++)
	{
		bottomFormImgList[i].setAttribute("newAttr",i);
		bottomFormImgList[i].onmousedown = function(evt){
			refreshHiddenRemindAndMenuTimer();
			if(evt.button == 0){//left key
				switch(parseInt(this.getAttribute("newAttr")))
				{
					case 0://fastBackward
						toFastBackwardKey();
						break;
					case 1:
						doExit();
						break;
					case 2:
						toPlay();
						break;
					case 3:
						toPause();
						break;
					case 4://fastForward
						toFastForwardKey();
						break;
				}
			}
		}
	}
	
	for(var i = 0; i < 2; i++)
	{
		dialogButtonClassList[i].setAttribute("newAttr",i);
		dialogButtonClassList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusOn != "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr"));
					$("remindFocus").style.left = FORM_START + list_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
		}
	}
}
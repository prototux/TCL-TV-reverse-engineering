//说明：目前Tlink的实现方式是，首先获取设备数量，然后循环获取设备信息，每一次循环获取一个设备信息，而这些在MW实现。
//获取的设备信息包含设备编号，这个编号由MW规定；设备类型，参考HDMI cec的设备类型相关资料；设备名。
//zenglm 2014.04.08
//
var listItemName = [top.optionOptions[3],top.others[31]];
var tLinkOption = top.offOn;

var setupListName = top.optionTLinkPromt[0];
var deviceOptionName = top.optionTLinkPromt[1];
var pvrListName	= [top.bookingModes[0],top.others[37]];

var devNumArr=[0,0,0,0,0];
var devTypeArr=[9,9,9,9,9];
var arcloga=0;
var arcphya=0;

var preObjectPop;
var preObjectPreset;
var spans_pop;
var spans_preset;
var divs_pop;
var popIsFistInit              = 1;

var positionV                  = 0;//主界面坐标
var presetPositionH            = 0;//preset 界面焦点坐标
var oldpositionV               = 0;//主界面坐标
var oldpresetPositionH         = 0;//preset 界面焦点坐标

var presetFocusWidth           = 200;
var MENU_START 			       = 70;//linxs
var MENU_STEP 			       = 84;//主菜单焦点移动的step
var lis;
var main_rank                  =0; //第几级菜单
var devicePV                   =0; //选择的设备的竖直方向的坐标,因为设备的坐标不是确定的所以要全局变量
var main_left                  =0; //主显示菜单左边值
var setting = top.g_setting;
var channel = top.g_channel;
var inputSource = channel.inputSource;//当前信源
//var getDVDName= ["TCL DVD","SANSUNG DVD","SONY DVD"];
//var getAmplifierName=["TCL AMP","SANSUNG AMP","SONY AMP"];
//var DVDNum   = 0;//setting.dvdNum;
//var AmplifierNum = 0;//setting.amplifierNum;
var devicenum= 0;//DVDNum+AmplifierNum;
var tLinkIndex = 0;
var autoPowerIndex = 0;
var autoStandbyIndex = 0;
var amplifierstatusIndex = 0;
//var dvdname  = {];//stetting
var focusType="tLinkList";
var pageLayerImg			= ["./images/page/grading-2.png","./images/page/grading-1.png"];

document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{	
		//做页面跳转的几个消息处理时要先把otherPage也给隐掉
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push player
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push player
		case top.E_DLNA_DMR_PUSH_PICTURE://dmr push player
		case top.E_CIPLUS_PROGRAM_CHANGE://ci 主动换台发出换台刷新节目信息
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
		case top.E_CI_DATA_READY://ci data ready
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_CHANNEL_PLAY_END://channel change success end
		case top.E_SCART_CHANGE_INPUT_SRC://scart change start:CMD_UI_NOTIFY_SCART_CHANGE_INPUT_SRC
		case top.E_CI_MHEG_OPEN://MMH打开，需要进入channel_play页面并
		case top.E_DTV_NIT_VERSION_CHANGED://nit refresh notify
			top.document.getElementById('otherPage').src = "";
			top.main.focus();
			top.systemEventProc(evt);
			break;
		case top.E_DTV_SERVICE_PLAY://播放流数据更新
			top.document.getElementById('otherPage').src = "";
			top.g_isShowInfoBar = 1;
			top.main.focus();
			top.document.getElementById('main').src = "channelPlay.html";
			break;
		case top.E_CEC_HDMI_DEVICE_INSERTED:
			if(focusType=="tLinkList")
			{	
				positionV=0;
				init();
			}
			break;
		default:
			top.systemEventProc(evt);
			break;
	}
}
/*function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}*/

timeoutInit();
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function keyDownProcess(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
	if(focusType=="guideMenu")
	{
		switch (keycode)
		{
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
			case top.VK_ENTER://OK
			case top.VK_PLAY_PAUSE:
			case top.VK_STOP:
			case top.VK_REWIND:
			case top.VK_FAST_FWD:
			case top.VK_PREV:
			case top.VK_NEXT:
			case top.VK_PAUSE:
			case top.VK_PLAY:
				//setting.sendCecKeyValue(keycode);
				//return;
			case top.VK_VOLUME_UP://volume up
			case top.VK_VOLUME_DOWN://volume down
			case top.VK_UP:
			case top.VK_DOWN:
			case top.VK_LEFT:
			case top.VK_RIGHT:
			case top.VK_BACK:
			case top.VK_RED:
			case top.VK_GREEN:
			case top.VK_YELLOW:
			case top.VK_BLUE:
			case top.VK_RECORD:
			if((inputSource == 6)&&(setting.isMhlReady()))
			//if(inputSource == 6)
			{
				setting.sendMhlKeyValue(keycode);
				return;
			}
		      setting.sendCecKeyValue(keycode);
		      return;
		}
	}
	switch (keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt---CEC会走此逻辑
			if(top.virtualRemoteState == 0)
			{
				if($("popGuideMenu").style.display=="block")
				{
					top.Log("lqt--optionTlink.js---HbbTV---VK_VIRTUAL_REMOTE");
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("HbbTV");
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
			console.log("lqt---channelPlay.html---clientX: "+clientX);
			console.log("lqt---channelPlay.html---clientY: "+clientY);
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
		case top.VK_UP:
		{
			//up
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
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
			toRight();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_EXIT:
		{
			if(focusType=="guideMenu")
			{
				top.restartTimeout();
				$("preSetBar").style.display="none";
				$("smallPopWin").style.display="block";
				$("popGuideMenu").style.display="none";
	 			showSetupPage(); 
				break;
			}
			else
			{
				top.jumpPage();
			}
		}
		case top.VK_MENU:
		break;		
		default:
			top.keyDownProcess(evt);
		break;
	}
	return ret;
}
function uninit()
{
}
function $(id)
{
    return document.getElementById(id);
}
function toUp()
{
	if(focusType=="tLinkList")
	{
		positionV--;
		if(positionV<0)
		{
			positionV=1+devicenum;
		}
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if (focusType == "setuppage")
     {
      	   positionV--;
		if(positionV<0)
		{
			if(((inputSource >=6 && inputSource<=8) || inputSource == 12) && tLinkIndex == 1 )// 12 is HDMI IV
			{
				positionV=2;
				if(setting.isMhlReady() == 1 && inputSource ==6)
				{
					positionV = 1;
				}
			}
			else
			{
				positionV=1;
			}
		}
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
    else if (focusType == "dvdname")
      	{
      	        positionV--;
		if(positionV<0)
		{
			positionV=1;
		}
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType == "amplifiername")
	{
		 positionV--;
		if(arcloga == 5 && arcphya == 64)
		{
			if(positionV<0)
			{
				positionV=2;
			}
		}
		else
		{
			if(positionV<0)
			{
				positionV=1;
			}
		}
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType == "pvr")
	{
		positionV = (positionV > 0)?0:1;
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	top.doEleScrForNoOption(firstProSpans, positionV, -1);
	top.doEleScrForNoOption(secondProSpans, positionV, -1);
				
}
function toDown()
{
	if(focusType=="tLinkList")
	{
		positionV++;
		if(positionV>1+devicenum)
		{
			positionV=0;
		}
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if (focusType == "setuppage")
      {
		positionV++;
		if(((inputSource >=6 && inputSource<=8) || inputSource == 12) && tLinkIndex == 1 )// 12 is HDMI IV
		{
			if(setting.isMhlReady() == 1 && inputSource ==6)
			{
				if(positionV>1)
				{
					positionV=0;
				}
			}
			else
			{
				if(positionV>2)
				{
					positionV=0;
				}
			}
		}
		else
		{
			if(positionV>1)
			{
				positionV=0;
			}
		}
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";        
      }
	else if ( focusType == "dvdname")
      {
		positionV++;
		if(positionV>1)
		{
			positionV=0;
		}
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";        
      }
	 else if(focusType =="amplifiername")
	 {
		positionV++;
		if(arcloga == 5 && arcphya == 64)
		{
			if(positionV>2)
			{
				positionV=0;
			}
		}
		else
		{
			if(positionV>1)
			{
				positionV=0;
			}
		}
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";        
	 }
	 else if(focusType == "pvr")
	{
		positionV = (positionV > 0)?0:1;
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	top.doEleScrForNoOption(firstProSpans, positionV, 1);
	top.doEleScrForNoOption(secondProSpans, positionV, 1);
	 
}
function toLeft()
{
      if(focusType=="TlinkSel")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		tLinkIndex = presetPositionH;
		top.doElementScroll(spans_preset, presetPositionH);
		//setting.tLink=tLinkIndex;  //fix me
	}
	else if(focusType=="autopoweron")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		autoPowerIndex = presetPositionH;
		top.doElementScroll(spans_preset, presetPositionH);
		//setting.autopoweron= autoPowerIndex;   //fix me
	}  
	else if(focusType=="autostandby")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		autoStandbyIndex = presetPositionH;
		top.doElementScroll(spans_preset, presetPositionH);
		//setting.autostandby = autoStandbyIndex;   //fix me
	} 
	else if(focusType=="amplifierstatus")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		amplifierstatusIndex = presetPositionH;
		top.doElementScroll(spans_preset, presetPositionH);
	}
	else if(focusType=="guideMenu")
	{
	}
	else
	{
		toBack();
	}
     	
	 	
}
function toRight()
{
     if(focusType=="tLinkList" || focusType == "setuppage" || focusType == "dvdname"||focusType=="amplifiername" || focusType == "pvr")
	{
		toOK();
	}
	else if(focusType=="TlinkSel")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		tLinkIndex = presetPositionH;
		top.doElementScroll(spans_preset, presetPositionH);
		//setting.tLink= tLinkIndex;   //fix me
	}
	else if(focusType=="autopoweron")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		autoPowerIndex = presetPositionH;
		top.doElementScroll(spans_preset, presetPositionH);
		//setting.autopoweron= autoPowerIndex;   //fix me
	}
	else if(focusType=="autostandby")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		autoStandbyIndex = presetPositionH;
		top.doElementScroll(spans_preset, presetPositionH);
		//setting.autostandby = autoStandbyIndex;   //fix me
	}
	/*else if(focusType=="autostandby")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=300+presetPositionH*presetFocusWidth+"px";
		autoStandbyIndex = presetPositionH;
		//setting.autostandby = autoStandbyIndex;   //fix me
	}*/
	else if(focusType=="amplifierstatus")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		amplifierstatusIndex = presetPositionH;
		top.doElementScroll(spans_preset, presetPositionH);
	}

	  

     	 
}
function toOK()
{
	if(focusType=="tLinkList")
	{
		devicePV=positionV;
		top.g_channel.testLog("zenglm000000000000000000000 toOK  positionV "+positionV);
		switch(positionV)
		{
			case 0:
			{
				showTlinkSelMenu();
				break;
			}
			case 1:
			{
				positionV = 0;
				showSetupPage();
				break;
			}
			case 2:
			case 3:
			case 4:
			case 5:
			{
				positionV=0;
				showDeviceName();
				break;
			}
		}
	}
	else if (focusType == "TlinkSel" || focusType == "autopoweron" || focusType == "autostandby" || focusType == "amplifierstatus")
	{	
	    toBack();
	}
	else if (focusType == "setuppage")
	{
        showSetupSelMenu(positionV);
	}
	else if(focusType == "dvdname" || focusType == "amplifiername")
	{
		devicefunction(positionV);
	}
	else if(focusType == "pvr")
	{
		if(positionV == 0)
		{
			if(top.timeShiftStatusFlag == 1)
			{
				top.operateWhenTimeshifting("gotoRecord");
				return;
			}
			doRecord();
		}
		else
		{
			if(top.timeShiftStatusFlag == 1)
			{
				top.operateWhenTimeshifting("gotoPvrList");
				return;
			}
			doPvrList();
		}
	}

}
function doPvrList()
{
	top.isFromOptionIntoUsb = 1;
	top.$('main').src = "deviceList.html";
	top.main.focus();
	top.setFrameFocusPage("main");
}
function doRecord()
{
	top.g_previousHtmlPage = "channelPlay.html";
	if(top.g_channel.inputSource == 1)
	{
		top.g_channel.testLog("g_factory.pvrOpenStatus="+top.g_factory.pvrOpenStatus);
		if(top.g_factory.pvrOpenStatus == 1)
		{
			if(top.recordStatusFlag==1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
			}
			top.$('main').src = "pvr/Pvr.html?menu";
			top.$("main").style.display = "block";
			top.$("operatePage").src = "";
		}
		else
		{
			top.g_remindWord = "notAvailable";
			top.$("main").src = "intermediate.html";
			top.$("main").style.display = "block";
			top.$("operatePage").src = "";
		}
	}
	else
	{
		top.g_remindWord = "notAvailable";
		top.$("main").src = "intermediate.html";
		top.$("main").style.display = "block";
		top.$("operatePage").src = "";
	}
	top.main.focus();
	top.setFrameFocusPage("main");
}
/*function returnMenuList()
{
	showrank(1);
	$("preSetBar").style.display="none";
	$("smallPopWin").style.display="block";
	focusType="tLinkList";
	 showTlinkItem();
}*/
function toBack()
{
     if (focusType == "tLinkList")
     {
      window.location.href = "option.html?optionTlink=" + transferValue;     
      }
	else if(focusType == "pvr")
	{
		window.location.href = "option.html?pvr=" + transferValue;
	}
     else  if (focusType == "TlinkSel")
     {
      setting.tlinkStatus=tLinkIndex;  //fix me
	//$("preSetBar").style.display="none";
	//$("smallPopWin").style.display="block";
	 //returnMenuList();
	  positionV=0;
      init();
     }
     else if (focusType == "setuppage")
     {
	   positionV=1;
	   
       init();// document.location.href="optionTlink.html";
     }
	 else if( focusType =="dvdname" || focusType =="amplifiername")
	 {
		positionV=devicePV;
		init(); //document.location.href="optionTlink.html";
	 }
      else if (focusType == "autopoweron")
      {
        setting.cecAutoPowerOn=autoPowerIndex;  //fix me
		$("preSetBar").style.display="none";
		$("smallPopWin").style.display="block";
	 	showSetupPage();      
      }
	else if (focusType == "autostandby")
	{
        setting.cecAutoStandby=autoStandbyIndex;  //fix me
		$("preSetBar").style.display="none";
		$("smallPopWin").style.display="block";
		  positionV = 1;
		 showSetupPage();      	
	}
	else if(focusType == "amplifierstatus")
	{
		$("preSetBar").style.display="none";
		$("smallPopWin").style.display="block";
		setting.setAmplifierFunction(devNumArr[devicePV-2],amplifierstatusIndex);
		positionV=2;
		showDeviceName();
	}
	else if(focusType=="guideMenu")
	{
		    top.restartTimeout();
			$("preSetBar").style.display="none";
			$("smallPopWin").style.display="block";
			$("popGuideMenu").style.display="none";
	 		showSetupPage(); 
	}
 }

function changeFoucusColor()
{
	var span=preObjectPop.getElementsByTagName("span");
	var divs=preObjectPop.getElementsByTagName("div");
	span[0].style.color="#aaa";
	span[0].style.fontSize="24px";
	divs[0].style.color="#aaa";
	divs[0].style.fontSize="24px";
	divs[1].style.color="#aaa";
	divs[1].style.fontSize="24px";
	if(focusType=="tLinkList" && oldpositionV==0)
	{
		divs[1].innerHTML="<img src='images/arrow/R-Focus.png' height='32px' width='32px'/>";
	}
	else if(focusType=="setuppage" && (oldpositionV==0 || oldpositionV==1))
	{
		divs[1].innerHTML="<img src='images/arrow/R-Focus.png' height='32px' width='32px'/>";
	}
	else if(focusType=="amplifiername" && oldpositionV== 2)
	{
		divs[1].innerHTML="<img src='images/arrow/R-Focus.png' height='32px' width='32px'/>";
	}
	preObjectPreset.style.color="#aaa";	
	preObjectPreset.style.fontSize="22px";	
	spans_pop[positionV].style.color="#fff";
	spans_pop[positionV].style.fontSize="26px";
	divs_pop[positionV*2].style.color="#fff";
	divs_pop[positionV*2].style.fontSize="26px";
	divs_pop[positionV*2+1].style.color="#fff";
	divs_pop[positionV*2+1].style.fontSize="26px";
	spans_preset[presetPositionH+1].style.color="#fff";
	spans_preset[presetPositionH+1].style.fontSize="24px";
	if(focusType=="tLinkList" && positionV==0)
	{
		divs_pop[positionV*2+1].innerHTML="<img src='images/arrow/focus_R-Focus.png' height='37px' width='37px'/>";
	}
	else if(focusType=="setuppage" && (positionV==0 || positionV==1))
	{
		divs_pop[positionV*2+1].innerHTML="<img src='images/arrow/focus_R-Focus.png' height='37px' width='37px'/>";
	}
	else if(focusType=="amplifiername" && positionV== 2)
	{
		divs_pop[positionV*2+1].innerHTML="<img src='images/arrow/focus_R-Focus.png' height='37px' width='37px'/>";
	}
	preObjectPop=lis[positionV];
	preObjectPreset=spans_preset[presetPositionH+1];
	oldpositionV=positionV;
	oldpresetPositionH=presetPositionH;
}
function initdata()
{
	spans_pop=$("smallPopWin").getElementsByTagName("span");
	divs_pop=$("smallPopWin").getElementsByTagName("div");
	preObjectPop=lis[positionV];
	preObjectPreset=spans_preset[presetPositionH+1];
	oldpositionV=positionV;
	oldpresetPositionH=presetPositionH;

}
function deviceInit()
{
	var deviceinfo;
	var tloga;
	var tphya;
	var tsdevnum;
	var tsdevtype;
	var tsdevname;
	var divs;
	var spans=$("smallPopWin").getElementsByTagName("span");
	//top.g_channel.testLog("zenglm-----deviceinit----begin---devicenum=["+devicenum+"]");
    for(var i=0;i<devicenum;i++)
	{
		top.g_channel.testLog("zenglm-----deviceinit----begin");
		deviceinfo = setting.getDeviceInfo();
		tloga=deviceinfo.substring(0,3);
		top.g_channel.testLog("zenglm-----deviceinit----tloga--s--["+tloga+"]");
		tphya=deviceinfo.substring(3,6);
		top.g_channel.testLog("zenglm-----deviceinit----tphya--s--["+tphya+"]");
		tsdevnum = deviceinfo.substring(6,9);
		top.g_channel.testLog("zenglm-----deviceinit----tsdevnum--s--["+tsdevnum+"]");
		devNumArr[i] = parseInt(tsdevnum);
		top.g_channel.testLog("zenglm-----deviceinit----tsdevnum--d--["+devNumArr[i]+"]");
		tsdevtype = deviceinfo.substring(9,12);
		top.g_channel.testLog("zenglm-----deviceinit----tsdevtype--s--["+tsdevtype+"]");
		devTypeArr[i] =  parseInt(tsdevtype);
		//devTypeArr[i] = 5;
		/**if(i==1)
		{
			devTypeArr[i] = devTypeArr[i]+1;
		}**/
		if(devTypeArr[i] == 5)
		{
		     amplifierstatusIndex = setting.amplifierFunction(devNumArr[i]);
			 arcloga=tloga;
			 arcphya=tphya;
		}
		top.g_channel.testLog("zenglm-----deviceinit----tsdevtype--d--["+devTypeArr[i]+"]");
		tsdevname = deviceinfo.substring(12,62);
		top.g_channel.testLog("zenglm-----deviceinit----tsdevname--s--["+tsdevname+"]");
		divs=lis[i+2].getElementsByTagName("div");
		divs[1].innerHTML='<img src="images/arrow/icon_Submenu.png" />';//"...";
		spans[i+2].innerHTML=tsdevname;
	}
}
function cleandata()
{
	var divs;
	var spans=$("smallPopWin").getElementsByTagName("span");
	for(var i = 0; i < lis.length; i++)
	{
		spans[i].innerHTML = "";
		divs = lis[i].getElementsByTagName("div");
		divs[0].innerHTML = "";
		divs[1].innerHTML = "";
	}
}

function initPvr()
{
	spans_pop[0].innerText = pvrListName[0];
	spans_pop[1].innerText = pvrListName[1];
	for(var i = 0; i < 4; i++)
	{
		divs_pop[i].innerText = "";
	}
	
	for(var i = 2; i < 6; i++)
	{
		lis[i].style.display = "none";
	}
	
	positionV = 0;
	$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px"; 
	
	focusType = "pvr";
}

var transferValue = 0;
var firstProSpans ;
var secondProSpans ;
function init()
{
	spans_preset=$("preSetBar").getElementsByTagName("span");
	lis=$("smallPopWin").getElementsByTagName("li");
	firstProSpans = $("smallPopWin").getElementsByClassName("popListFirPro");
	secondProSpans = $("smallPopWin").getElementsByClassName("popListSndPro");
	console.log("firstProSpans length"+firstProSpans.length);
	if(popIsFistInit)
	{
		initdata();
		popIsFistInit = 0;
	}
	
	var urlSearch = window.location.search;
	var strs = urlSearch.split("=");
	transferValue = parseInt(strs[1],10);
	
	if(strs[0] == "?pvr")
	{
		initPvr();
		showrank(1);
	}
	else if(strs[0] == "?optionTlink")
	{
		initVarValue();
		cleandata();
		//alert("here");
		var divs;
		var spans=$("smallPopWin").getElementsByTagName("span");
		for(var i=0;i<2;i++)
		{
			spans[i].innerHTML=listItemName[i];
		}
		deviceInit();
		showTlinkItem();
	
		showDeviceInfo();
		focusType="tLinkList";
		//$("smallPopWin").style.background="#aaa";
		$("preSetBar").style.display="none";
		$("smallPopWin").style.display="block"; 
		changeFoucusColor();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px"; 
		
		showrank(1);
	}
	top.doEleScrForNoOption(firstProSpans, positionV, 0);
	top.doEleScrForNoOption(secondProSpans, positionV, 0);
	addMouseListener();
}
function hideDeviceInfo(num)
{
	var div;
	for(var i=num;i<lis.length;i++)
	{
		lis[i].style.display="none";
	}
}
function showDeviceInfo()
{
	var div;
	for(var i=2;i<lis.length;i++)
	{
		lis[i].style.display="block";
	}
}
function initVarValue()
{
  //目前的做法是设备编号由MW传上来，只需获取
	//DVDNum   = setting.dvdNum;//DVD设备个数，
	//DVDNum   =1;
	//AmplifierNum = setting.amplifierNum;//Amplifier设备个数

	devicenum= setting.devTotalNum;
	autoPowerIndex = setting.cecAutoPowerOn;
	autoStandbyIndex = setting.cecAutoStandby;
	tLinkIndex=setting.tlinkStatus;
	if(tLinkIndex == 0)//in case the tlink is set off, but the middleware still remember the devices info
	{
			devicenum = 0;
	}
	/*if(AmplifierNum!=0)
	{
		amplifierstatusIndex = setting.amplifierFunction(DVDNum+1);//目前只有一个HDML有ARC功能，因此可以这么做，但是出现有多个HDMI接口有ARC功能时，应获取每个接口的ARC功能设置状态。
	}*/
}



function showPresetSelect(optionMax)//show item select bar
{
	for(var i=0;i<optionMax;i++)
	{
		spans_preset[i+1].style.display="block";
	}
	for(var i=optionMax;i<spans_preset.length-1;i++)
	{
		spans_preset[i+1].style.display="none";
	}
	$("preSetBar").style.width=310+optionMax*230+"px";
	$("preSetBar").style.left = parseInt((1920-310-optionMax*230)/2)+"px"
	$("preSetSelectFocus").style.width=230+"px";
	presetFocusWidth=230;
}

function showTlinkItem()
{
       var divs = lis[0].getElementsByTagName("div");
	divs[0].innerHTML = tLinkOption[tLinkIndex];
	divs[1].innerHTML = '<img src="images/arrow/R-Focus.png" />';
	divs=lis[1].getElementsByTagName("div");
	divs[0].innerHTML ="";
	divs[1].innerHTML='<img src="images/arrow/icon_Submenu.png" />';
}
function showTlinkSelMenu()
{
	showrank(0);
	showPresetSelect(tLinkOption.length);
	$("preSetOption").innerHTML=listItemName[0];
	for(var i=0;i<tLinkOption.length;i++)
	{
		spans_preset[i+1].innerHTML=tLinkOption[i];
	}
	presetPositionH=tLinkIndex;
	changeFoucusColor();
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	//parent.hiddenPage(1)
	$("smallPopWin").style.display="none";
	$("preSetBar").style.display="block"
	focusType="TlinkSel"
	top.doElementScroll(spans_preset, presetPositionH);
}


function showSetupPage()
{
	showrank(2);

      //autoPowerIndex = setting.autopoweron;      fix me
     // autoStandbyIndex = setting.autostandby;	 fix me
	//lis=$("smallPopWin").getElementsByTagName("li");
	var spans=$("smallPopWin").getElementsByTagName("span");
	var count;
	console.log("setting.isMhlReady()=="+setting.isMhlReady());
	if(setting.isMhlReady() == 1 && inputSource ==6)
	{
		count = 2;
	}
	else
	{
		//if(((inputSource >=6 && inputSource<=8) || inputSource == 12) && tLinkIndex == 1 )// 12 is HDMI IV
		{
			count = 3;
		}
		/*else
		{
			count = 2;
		}*/
	}
	hideDeviceInfo(count);
	for(var i=0;i<count;i++)
	{
		spans[i].innerHTML=setupListName[i];
	}
	if(((inputSource >=6 && inputSource<=8) || inputSource == 12) && tLinkIndex == 1 )// 12 is HDMI IV
	{
	}
	else
	{
		spans[2].style.color="#444";
	}
      var divs = lis[0].getElementsByTagName("div");
      divs[0].innerHTML = tLinkOption[autoPowerIndex]; 
	  divs[1].innerHTML = '<img src="images/arrow/R-Focus.png" />';
       
      divs = lis[1].getElementsByTagName("div");
      divs[0].innerHTML = tLinkOption[autoStandbyIndex];
      divs[1].innerHTML = '<img src="images/arrow/R-Focus.png" />';

	//lis[2].style.display = "none"; 
	 changeFoucusColor();
      $("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";

	focusType = "setuppage";
	top.doEleScrForNoOption(firstProSpans, positionV, 0);
	top.doEleScrForNoOption(secondProSpans, positionV, 0);
	
}
   
function showSetupSelMenu(itemIndex)
{
	showrank(0);
	showPresetSelect(tLinkOption.length);
	$("preSetOption").innerHTML=setupListName[itemIndex];
	for(var i=0;i<tLinkOption.length;i++)
	{
		spans_preset[i+1].innerHTML=tLinkOption[i];
	}
     if (itemIndex == 0) 	
     	{
	presetPositionH=autoPowerIndex;
	changeFoucusColor();
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	$("smallPopWin").style.display="none";
	$("preSetBar").style.display="block";
	focusType="autopoweron";
	top.doElementScroll(spans_preset, presetPositionH);
     	}
    else if (itemIndex == 1)
    	{
	presetPositionH=autoStandbyIndex;
	changeFoucusColor();
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	$("smallPopWin").style.display="none";
	$("preSetBar").style.display="block";
	focusType="autostandby";  
	top.doElementScroll(spans_preset, presetPositionH);  	 
    	}
	else if (itemIndex == 2)
	{
		top.stopTimeout();
		changeFoucusColor();
		$("smallPopWin").style.display="none";
		$("preSetBar").style.display="none";
		$("popGuideMenu").style.display="block";
		focusType="guideMenu";
	}
}

////enter device option
function showDeviceName()
{

	showrank(2);
	 //hideDeviceInfo();
      //autoPowerIndex = setting.autopoweron;      fix me
     // autoStandbyIndex = setting.autostandby;	 fix me
	lis=$("smallPopWin").getElementsByTagName("li");
	var divs;
	var spans=$("smallPopWin").getElementsByTagName("span");
	changeFoucusColor();
	if(devTypeArr[devicePV-2] != 5)
	{
		hideDeviceInfo(2);
		for(var i=0;i<2;i++)
		{
			spans[i].innerHTML=deviceOptionName[i];
		}	
		focusType="dvdname";
		
	}
	else if(devTypeArr[devicePV-2] == 5 )
	{
		if(arcloga == 5 && arcphya == 64)
		{
			hideDeviceInfo(3);
			for(var i=0;i<3;i++)
			{
				spans[i].innerHTML=deviceOptionName[i];
			}
			divs = lis[2].getElementsByTagName("div");
			divs[0].innerHTML = tLinkOption[amplifierstatusIndex];
      		divs[1].innerHTML = '<img src="images/arrow/R-Focus.png" />';
			focusType="amplifiername";
			lis[2].style.display = "block"; 
		}
		else
		{
			hideDeviceInfo(3);
			for(var i=0;i<3;i++)
			{
				spans[i].innerHTML=deviceOptionName[i];
			}
			spans[2].style.color = "#444";
			divs = lis[2].getElementsByTagName("div");
			divs[0].innerHTML = tLinkOption[amplifierstatusIndex];
			divs[0].style.color = "#444";
			
      		divs[1].innerHTML = '<img src="images/arrow/R-Focus.png" />';
			focusType="amplifiername";
			lis[2].style.display = "block"; 
			/*hideDeviceInfo(2);
			for(var i=0;i<2;i++)
			{
				spans[i].innerHTML=deviceOptionName[i];
			}	
			focusType="amplifiername";*/
		}
	}
	else
	{
		hideDeviceInfo(2);
		for(var i=0;i<2;i++)
		{
			spans[i].innerHTML=deviceOptionName[i];
		}	
		focusType="dvdname";
	}
      divs = lis[0].getElementsByTagName("div");
      divs[0].innerHTML = ""; 
      divs[1].innerHTML = '<img src="" />'; 
      divs = lis[1].getElementsByTagName("div");
      divs[0].innerHTML = "";
      divs[1].innerHTML = '<img src="" />';
	  
      $("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	  top.doEleScrForNoOption(firstProSpans, positionV, 0);
	  top.doEleScrForNoOption(secondProSpans, positionV, 0);
	
}
function devicefunction(index)
{
	
	showPresetSelect(tLinkOption.length)
	if(index == 0)
	{
		setting.setDevicePowerOnByNum(devNumArr[devicePV-2]);
	}
	else if(index == 1)
	{
		setting.setDeviceStandbyByNum(devNumArr[devicePV-2]);

	}
	else if(index ==2)
	{
		showrank(0);
		$("preSetOption").innerHTML=deviceOptionName[index];
		for(var i=0;i<tLinkOption.length;i++)
		{
			spans_preset[i+1].innerHTML=tLinkOption[i];
		}
		presetPositionH=amplifierstatusIndex;
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
		$("currentOption").style.display = "block";
		$("smallPopWin").style.display="none";
		
		$("preSetBar").style.display="block";
		focusType="amplifierstatus";
		top.doElementScroll(spans_preset, presetPositionH);
	}
}

function showrank(rank)
{
	if(rank==main_rank)
	return;
	if(rank>=3)
	{
		top.g_channel.testLog("!!!!!!!!!!!!!!wrong rank for option");
	}
    $("rankone").style.display="none";
	$("ranktwo").style.display="none";
	if(rank==1)
	{
		$("rankone").getElementsByTagName("img")[0].src = pageLayerImg[0];
		$("rankone").style.display="block";
	}
	else if(rank==2)
	{
		$("rankone").getElementsByTagName("img")[0].src = pageLayerImg[1];
		$("rankone").style.display="block";
		$("ranktwo").style.display="block";
	}
	$("smallPopWin").style.left=4+rank*44+"px";
	$("smallPopWin").style.display="block";
	main_rank=rank;
	/*if(rank==main_rank)
	return;
	$("smallPopWin").style.display="none";
	var div = ["","","",""]; 
	var top=100;//equal smallpopwin
	var height=500;//equal smallpopwin
	var width = 0;
	var left = 100;
	var i=0;
	var div_fram = document.body.getElementsByTagName("div");
	for(var j=0;j<main_rank;j++)
	{
		document.body.removeChild(div_fram[div_fram.length+j-main_rank]);
	}
	for(var i=rank;i>0;i--)
	{
		div[rank-1]=document.createElement("div");
		width = 40+(rank-i)*5;
		div[rank-1].style.position="absolute";
		div[rank-1].style.top=top+i*(15+i)+"px";
		div[rank-1].style.width=width+"px";
		div[rank-1].style.height=height-i*(20+4*i)+"px";
		div[rank-1].style.left=left+(rank-i)*4+"px";
		div[rank-1].style.border="4px solid #591616";
		left=left+40+(rank-i)*5;
		div[rank-1].style.opacity=0.92;
		div[rank-1].style.background="#000";
		div[rank-1].style.display="block";
		document.body.appendChild(div[rank-1]);	
		
	}
	$("smallPopWin").style.left=left+rank*4+"px";
	$("smallPopWin").style.display="block";
	main_rank=rank;*/
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 0; i < 6; i++)
	{
		lis[i].setAttribute("newAttr",i);
		lis[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="tLinkList")
				{
					if(parseInt(this.getAttribute("newAttr")) <= 1+devicenum)
					{
						positionV = parseInt(this.getAttribute("newAttr"));
						changeFoucusColor();
						$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
						toOK();
					}
				}
				else if(focusType == "setuppage")
				{
					 if(((inputSource >=6 && inputSource<=8) || inputSource == 12) && tLinkIndex == 1 )// 12 is HDMI IV
					{
						if(parseInt(this.getAttribute("newAttr")) <= 2)
						{
							positionV = parseInt(this.getAttribute("newAttr"));
						}
					}
					else
					{
						if(parseInt(this.getAttribute("newAttr")) <= 1)
						{
							positionV = parseInt(this.getAttribute("newAttr"));
						}
					}
					changeFoucusColor();
					$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
				else if (focusType == "dvdname")
				{
					if(parseInt(this.getAttribute("newAttr")) <= 1)
					{
						positionV = parseInt(this.getAttribute("newAttr"));
					}
					changeFoucusColor();
					$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
				else if(focusType == "amplifiername")
				{
					if(arcloga == 5 && arcphya == 64)
					{
						if(parseInt(this.getAttribute("newAttr")) <= 2)
						{
							positionV = parseInt(this.getAttribute("newAttr"));
						}
					}
					else
					{
						if(parseInt(this.getAttribute("newAttr")) <= 1)
						{
							positionV = parseInt(this.getAttribute("newAttr"));
						}
					}
					changeFoucusColor();
					$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
				else if(focusType == "pvr")  //add yums:2015-1-5
				{
					console.log("YM add pvr mouse listen");
					if(parseInt(this.getAttribute("newAttr")) <= 1+devicenum)
					{
						positionV = parseInt(this.getAttribute("newAttr"));
						$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
						toOK();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
			
	
	for(var i = 1; i < 6; i++)
	{
		spans_preset[i].setAttribute("newAttr",i);
		spans_preset[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="TlinkSel")
				{
					if( parseInt(this.getAttribute("newAttr")) < 3)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
						tLinkIndex = presetPositionH;
						toOK();
					}
					//setting.tLink=tLinkIndex;  //fix me
				}
				else if(focusType=="autopoweron")
				{
					if( parseInt(this.getAttribute("newAttr")) < 3)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
						autoPowerIndex = presetPositionH;
						toOK();
					}
				}  
				else if(focusType=="autostandby")
				{
					if( parseInt(this.getAttribute("newAttr")) < 3)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
						autoStandbyIndex = presetPositionH;
						toOK();
					}
				} 
				else if(focusType=="amplifierstatus")
				{
					if( parseInt(this.getAttribute("newAttr")) < 3)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
						amplifierstatusIndex = presetPositionH;
						toOK();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}






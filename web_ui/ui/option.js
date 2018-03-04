top.keySetForUI(1);
timeoutInit();
var listItemName = [top.optionOptions[0], top.optionOptions[1], top.optionOptions[2],
		    top.footballModeName, top.optionOptions[3], top.optionOptions[4],
				    top.optionOptions[5], top.optionOptions[6], top.netOptions[9],
				    top.bt_title, top.optionOptions[7]];
var picMode = [top.picPreset[0], top.picPreset[1], top.resetStadium,
			   top.picPreset[3], top.picPreset[4], top.picPreset[5]];
var soundMode = [top.souPreset[0], top.souPreset[1], top.resetStadium,
				 top.souPreset[3],top.souPreset[4],top.audioDescriptionOptions[1]];
var picFreeze = top.offOn;
var optionOnOff	= top.offOn;

var presetFocusBox = ["images/OP-01-1_Focus.png", "images/OP-01-1_Focus_.png"];
var focus_R_Focus           = ["images/arrow/focus_R-Focus.png","images/arrow/R-Focus.png"]

var setting = top.g_setting;
var channel = top.g_channel;
var pvr 	= top.g_pvr;

var preObjectPop;
var preObjectPreset;
var spans_preset;

var picModeIndex = 0;
var soundModeIndex = 0;
var picFreezeIndex = 0;
var footballModeIndex = 0;

var presetFocusWidth        = 200;
var itemSelectFocusWidth = 200;
var presetItemMaxNum = 5;      //小菜单下最能多显示的项目个数

var positionV                  = 0;//主界面坐标
var presetPositionH            = 0;//preset 界面焦点坐标

var presetFocusWidth           = 200;
var pic3DModeVal               = 0; //保存pic3DModeVal的值
var pic3DTo2DVal               = 0;//保存pic3DTo2DVal的值
var picLRSwithVal              = 0;//保存picLRSwithVal的值
var picDepthOfFieldVal         = 0;//保存picDepthOfFieldVal的值
var MENU_START 			       = 70;//linxs
var MENU_STEP 			       = 84;//主菜单焦点移动的step
var lis;
var screenMode;
var channelStatus              = 0;
var signalStatus               = 0;
var inputSource 			   = 0;//当前信源
var pvrOpenStatus			   = 0;
var focusType				   ="opitonList";
var pvrDeviceStatus			   = 0;//判断U盘中是否有pvr文件：0 没有，1 有。
var soundOutput = 0;
var setTimeoutPictureModeId = 0;
var setTimeoutPictureModePosition= 0;

var picPresetPosIndex 			= 0;
var soundPresetPosIndex 		= 0;
var picFreezePosIndex			= 0;
var footballModePosIndex		= 0;
var tLinkPosIndex				= 0;
var timeshiftPosIndex			= 0;
var pvrPosIndex					= 0;
var scheduleListPosIndex		= 0;
var miracastPosIndex			= 0;
var bluetoothPosIndex			= 0;
var settingsPosIndex			= 0;

var isXVYCCEnable           = setting.getProperty("ro.sita.model.TCL_PANEL_SETTING.PANEL_XVYCC_ENABLE", "0");

var menuList = [
{name:"picturePreset",param:function(){doPicturePreset();},showFlag:1},
{name:"soundPreset",param:function(){doSoundPreset();},showFlag:1},
{name:"pictureFreeze",param:function(){doPictureFreeze();},showFlag:1},
{name:"footballMode",param:function(){doFootballMode();},showFlag:1},
{name:"tLink",param:function(){doTLink();},showFlag:1},
{name:"timeshift",param:function(){doTimeshift();},showFlag:1},
{name:"pvr",param:function(){doPVR();},showFlag:1},
{name:"scheduleList",param:function(){doScheduleList();},showFlag:1},
{name:"miracast",param:function(){top.jumpToOperatePage("networkSetting/miracast.html");},showFlag:1},
{name:"bluetooth",param:function(){top.jumpToOperatePage("blueTooth.html");},showFlag:1},
{name:"settings",param:function(){doSettings();},showFlag:1}
];

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
			top.setFrameFocusPage("main");
			top.systemEventProc(evt);
			break;
		case top.E_HP_PLUGIN:
                top.jumpPage();
				break;
		case top.E_HP_PLUGOUT:
                top.jumpPage();
				break;			
		case top.E_DTV_SERVICE_PLAY://播放流数据更新
			top.document.getElementById('otherPage').src = "";
			top.g_isShowInfoBar = 1;
			top.main.focus();
			top.setFrameFocusPage("main");
			top.document.getElementById('main').src = "channelPlay.html";
			break;
		case top.E_SIGNAL_UNLOCK://unlock signal
		case top.E_PVR_NO_SIGNAL:
		{
			if(signalStatus==1&&inputSource == 1)
			{
				document.location.href = "option.html";
			}
		   	top.systemEventProc(evt);
		}
		break;
		case top.E_SIGNAL_LOCK://lock signal
		{
			if(signalStatus==0&&inputSource == 1)
			{
				document.location.href = "option.html";
			}
		   top.systemEventProc(evt);
		}
		break;
		case top.E_SS_COMMON_VIDEO:
			if(screenMode == 3)
			{
				document.location.href = "option.html";
			}
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
			document.location.href = "option.html";
		default:
			top.systemEventProc(evt);
			break;
	}
}
/*function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}*/

function initOptionListIndex()
{
	var t = 0;
	picPresetPosIndex 			= t++;
	soundPresetPosIndex 		= t++;
	picFreezePosIndex			= t++;
	footballModePosIndex		= t++;
	tLinkPosIndex				= t++;
	timeshiftPosIndex			= t++;
	pvrPosIndex					= t++;
	scheduleListPosIndex		= t++;
	miracastPosIndex			= t++;
	bluetoothPosIndex			= t++;
	settingsPosIndex			= t++;
}

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}

function keyproc(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
     
	switch (keycode)
	{
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
		case top.VK_OPTION://option
		{
			//top.gg_optionIndex=0;
			top.jumpPage();
			break;
		}
		case top.VK_MENU:
		break;	
		case top.VK_VIRTUAL_REMOTE://lqt--设置暂时不响应这个按键
		{
			break;
		}
		default:
			top.keyDownProcess(evt);
		break;
	}
	
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}

function toUp()
{
	if(focusType == "opitonList")
	{
		clearOldScroll();
		positionV = positionV <= 0 ? findMaxPosition() : positionV - 1;
		refreshFocusOfMenuList();
		resetScroll();
	}
}

function toDown()
{
	if(focusType=="opitonList")
	{
		clearOldScroll();
		positionV = positionV >= findMaxPosition() ? 0 : positionV + 1;
		refreshFocusOfMenuList();
		resetScroll();
	}
}
function toLeft()
{
	if(focusType == "opitonList")
	{
		//top.gg_optionIndex=0;
		top.jumpPage();	 
	}
    else if(focusType == "picPreset")
	{
		if(footballModeIndex)
		{
			return;
		}
		presetPositionH--;
		if(presetPositionH<0)
		{
            if(0 == isXVYCCEnable)
            {
                presetPositionH = 4
            }
            else
            {
                presetPositionH = picMode.length - 1;
            }
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		//picModeIndex = presetPositionH;
        previewPictureMode(presetPositionH);
	}
    else if(focusType == "soundPreset")
    {
    	if(footballModeIndex)
		{
			return;
		}
		presetPositionH--;
		if(presetPositionH<0)
		{
            presetPositionH = soundMode.length-1;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";

        soundModeIndex = presetPositionH;
		setting.soundPresetMS12=presetPositionH;  //fix me
	}
	else if (focusType == "picFreeze")
	{
		presetPositionH = presetPositionH == 0 ? 1 : 0;
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.freeze=presetPositionH;  //fix me
	}
	else if(focusType == "footballMode")
 	{
		presetPositionH = presetPositionH == 0 ? 1 : 0;
		changeFoucusColor();
		$("preSetSelectFocus").style.left = 305 + presetPositionH * presetFocusWidth + "px";
		setting.previewFootballMode(presetPositionH);
 	}
}

function toRight()
{
    if(focusType == "opitonList")
	{
		toOK();
	}
	else if(focusType == "picPreset")
	{
		if(footballModeIndex)
		{
			return;
		}
		presetPositionH++;
        if(0 == isXVYCCEnable)
        {
            if(presetPositionH > 4)
            {
                presetPositionH=0;
            }
        }
        else
        {
            if(presetPositionH > picMode.length - 1)
            {
                presetPositionH=0;
            }
        }
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		//picModeIndex = presetPositionH;
        previewPictureMode(presetPositionH);
	}
    else if(focusType == "soundPreset")
    {
     	if(footballModeIndex)
		{
			return;
		}
		presetPositionH++;	
		if(presetPositionH > soundMode.length-1)
		{
			presetPositionH = 0;
		}
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        soundModeIndex = presetPositionH;
		setting.soundPresetMS12=soundModeIndex;  //fix me
	}
    else if(focusType == "picFreeze")
 	{
		presetPositionH = presetPositionH == 1 ? 0 : 1;
		changeFoucusColor();
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.freeze=presetPositionH;   //fix me
	
 	} 
 	else if(focusType == "footballMode")
 	{
		presetPositionH = presetPositionH == 1 ? 0 : 1;
		changeFoucusColor();
		$("preSetSelectFocus").style.left = 305 + presetPositionH * presetFocusWidth + "px";
		setting.previewFootballMode(presetPositionH);
 	}
}
function toOK()
{
	if(focusType=="opitonList")
	{
		findFunction(positionV);
	}
	else if (focusType == "picPreset" )
	{
		if(footballModeIndex)
		{
			return;
		}
		picModeIndex = presetPositionH;
        if(0 == isXVYCCEnable)
        {
            setting.pictureMode=picModeIndex;
        }
        else
        {
            setting.pictureMode=pictureModeTransform(picModeIndex);
        }

	    $("preSetBar").style.display="none";
		$("smallPopWin").style.display="block";
		initVarValue();	
	
		//顺序不能颠倒
		refreshAllMenuListShow();
		returnMenuList();
	}
	else if(focusType =="soundPreset")
	{
		if(footballModeIndex)
		{
			return;
		}
		toBack();
	}
	else if(focusType =="picFreeze")
	{ 
		picFreezeIndex = presetPositionH;
		$("preSetBar").style.display="none";
		$("smallPopWin").style.display="block";
		returnMenuList();
	}
	else if(focusType == "footballMode")
	{
		footballModeIndex = presetPositionH;
		setting.footballMode = footballModeIndex;
		$("preSetBar").style.display = "none";
		$("smallPopWin").style.display = "block";
		initVarValue();
		returnMenuList();
	}
}

function doSettings()
{
	top.$("main").src = "index.html";
	top.$("main").style.display = "block";
	top.$("operatePage").src = "";
	top.main.focus();
}
function doTimeshift()
{
	//for Time shift;
	top.g_previousHtmlPage = "channelPlay.html";
	if(top.g_channel.inputSource == 1)
	{
		top.g_channel.testLog("g_factory.pvrOpenStatus="+pvrOpenStatus);
		if(pvrOpenStatus == 1)
		{
			if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?menu";
			}
			else
			{
				top.$('main').src = "pvr/timeshiftInit.html";
			}
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
function doPVR()
{						
	if(pvrDeviceStatus)
	{
		document.location.href = "optionTlink.html?pvr=" + positionV;
	}
	else
	{
		//inputSource 为1
		top.g_previousHtmlPage = "channelPlay.html";
		/*if(top.g_channel.inputSource == 1)
		{*/
			top.g_channel.testLog("g_factory.pvrOpenStatus="+pvrOpenStatus);
			if(pvrOpenStatus == 1)
			{
				if(top.timeShiftStatusFlag == 1)
				{
					top.operateWhenTimeshifting("gotoRecord");
					return;
				}
		
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
			}/*
		}
		else
		{
			top.g_remindWord = "notAvailable";
			top.$("main").src = "intermediate.html";
			top.$("main").style.display = "block";
			top.$("operatePage").src = "";
		}*/
		top.main.focus();
		top.setFrameFocusPage("main");
	}
	
}
function doScheduleList()
{
	//for shedule list
	top.$("main").style.display = "none";
	top.$("operatePage").src = "bookingInterrelated.html?schedule";
	top.operatePage.focus();
	top.setFrameFocusPage("operatePage");
}

function findFunction(postion)
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 1)
		{
			num++;
		}
		if(num == postion)
		{
			if(menuList[i].name == "miracast")
				top.g_temp = "miracast";
			if(menuList[i].name == "bluetooth")
				top.g_temp = "bluetooth";			
			menuList[i].param();
			break;
		}
	}
}

function findName(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			return menuList[i].name;
		}
	}
}

function findPosition(name)
{
	var position=0;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].name==name)
		{
			break;
		}
		if(menuList[i].showFlag==1)
		{
			position++;
		}
	}
	return position;
}
function findRealPosistion(position)
{
	var showNum=-1;
	var i=0;
	for(;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			showNum++;
		}
		if(showNum==position)
		{
			break;
		}
	}
	return i;
}
function findMaxPosition()
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 1)
		{
			num++;
		}
	}
	return num;
}

function findPositionOfTagIndex(index)
{
	var num = -1;
	for(var i = 0;(i <= index) && (i < menuList.length); i++)
	{
		if(menuList[i].showFlag == 1)
		{
			num++;
		}
	}
	return num;
}

function returnMenuList()
{
	$("preSetBar").style.display = "none";
	$("smallPopWin").style.display = "block";
	$("preSetSelectFocus").src = presetFocusBox[0];
	focusType = "opitonList";
	showFootballModeItem();
	showPicPresetItem();
	showSoundPresetItem();  
	showPictureFreezeItem();
	changeFoucusColor();
}

function toBack()
{
	if(focusType == "opitonList")
	{
		top.jumpPage();	 
		return;
	}
	if(focusType == "picPreset")
	{
		previewPictureMode(picModeIndex);
		$("preSetBar").style.display = "none";
		$("smallPopWin").style.display = "block";
		initVarValue();		
		//顺序不能颠倒
		refreshAllMenuListShow();
	}
	else if(focusType == "soundPreset")
	{
		setting.soundPresetMS12 = soundModeIndex;  //fix me		
		$("preSetBar").style.display = "none";
		$("smallPopWin").style.display = "block";
	}
	else if(focusType == "picFreeze")
	{
		setting.freeze = picFreezeIndex;  //fix me     
		$("preSetBar").style.display = "none";
		$("smallPopWin").style.display = "block";
	}
	else if(focusType == "footballMode")
	{
		setting.previewFootballMode(footballModeIndex);
		$("preSetBar").style.display = "none";
		$("smallPopWin").style.display = "block";
	}
	returnMenuList();
}

function refreshFocusOfMenuList()
{
	preObjectPop = lis[findRealPosistion(positionV)];
	$("popListFocus").style.top = MENU_START + positionV * MENU_STEP + "px";
}

function changeFoucusColor()
{
	var span = preObjectPop.getElementsByTagName("span");
	var divs = preObjectPop.getElementsByTagName("div");
	
	//preObjectPreset.style.color = "#bbb";	
	//preObjectPreset.style.fontSize = "22px";	

	preObjectPreset.style.color = "#fff";	
	preObjectPreset.style.fontSize = "24px";	

	spans_preset[presetPositionH + 1].style.color = "#fff";
	spans_preset[presetPositionH + 1].style.fontSize = "24px";
	
	preObjectPreset = spans_preset[presetPositionH + 1];
	top.doElementScroll(spans_preset, presetPositionH);
}



function showPersetSelect(optionMax)//show item select bar
{
	for(var i=0;i<optionMax;i++)
	{
		spans_preset[i+1].style.display="block";
	}
	for(var i=optionMax;i<spans_preset.length-1;i++)
	{
		spans_preset[i+1].style.display="none";
	}
	//top.g_channel.testLog("zenglm000000000000000000000  test5 "+optionMax);
	$("preSetBar").style.width=310+optionMax*230+"px";
	$("preSetBar").style.left = parseInt((1920-310-optionMax*230)/2)+"px"
	//$("preSetSelectFocus").style.display="none";
	$("preSetSelectFocus").style.width=230+"px";
	presetFocusWidth=230;
	
}

function showPicPresetItem()
{
	var divs = lis[picPresetPosIndex].getElementsByTagName("div");
	var tmpImg = lis[picPresetPosIndex].getElementsByTagName("img");
    if(0 == isXVYCCEnable)
    {
        divs[0].innerHTML=picMode[4 == picModeIndex ? 5 : picModeIndex];
    }
    else
    {
        divs[0].innerHTML = picMode[picModeIndex];
    }

	//[1]on [0]off
	divs[0].style.color = footballModeIndex ? "#666" : "#FFF";
	tmpImg[0].src = footballModeIndex ? focus_R_Focus[1] : focus_R_Focus[0];
}

function doPicturePreset()
{
	if((setting.location>0&&setting.checkPictureSelectEnable()==0) || footballModeIndex)
	{
		return;
	}

    if(0 == isXVYCCEnable)
    {
        showPersetSelect(5);
        $("preSetOption").innerHTML=listItemName[0];

        spans_preset[1].innerHTML = picMode[0];
        spans_preset[1].style.color = footballModeIndex ? "#666" : "#fff";
        spans_preset[2].innerHTML = picMode[1];
        spans_preset[2].style.color = footballModeIndex ? "#666" : "#fff";
        spans_preset[3].innerHTML = picMode[2];
        spans_preset[3].style.color = footballModeIndex ? "#666" : "#fff";
        spans_preset[4].innerHTML = picMode[3];
        spans_preset[4].style.color = footballModeIndex ? "#666" : "#fff";
        spans_preset[5].innerHTML = picMode[5];
        spans_preset[5].style.color = footballModeIndex ? "#666" : "#fff";

        presetPositionH=picModeIndex;
        if(footballModeIndex)
        {
            $("preSetSelectFocus").src = presetFocusBox[1];
        }
        else
        {
            changeFoucusColor();
            $("preSetSelectFocus").src = presetFocusBox[0];
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
        $("currentOption").style.display = "block";
        //parent.hiddenPage(1)
        $("smallPopWin").style.display="none";
        $("preSetBar").style.display="block";
        focusType="picPreset";
    }
    else
    {
        showPersetSelect(picMode.length);
        $("preSetOption").innerHTML=listItemName[0];

        for(var i = 0; i < picMode.length; i++)
        {
            spans_preset[i + 1].innerHTML = picMode[i];
            spans_preset[i + 1].style.color = footballModeIndex ? "#666" : "#fff";
        }
        presetPositionH=picModeIndex;
        if(footballModeIndex)
        {
            $("preSetSelectFocus").src = presetFocusBox[1];
        }
        else
        {
            changeFoucusColor();
            $("preSetSelectFocus").src = presetFocusBox[0];
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
        $("currentOption").style.display = "block";
        //parent.hiddenPage(1)
        $("smallPopWin").style.display="none";
        $("preSetBar").style.display="block";
        focusType="picPreset";
    }
}

function showSoundPresetItem()
{
	var divs = lis[soundPresetPosIndex].getElementsByTagName("div");
	var tmpImg = lis[soundPresetPosIndex].getElementsByTagName("img");
	divs[0].innerHTML = soundMode[soundModeIndex];
	divs[0].style.color = footballModeIndex ? "#666" : "#FFF";
	tmpImg[0].src = footballModeIndex ? focus_R_Focus[1] : focus_R_Focus[0];
}
function doSoundPreset()
{
	if(footballModeIndex)
	{
		return;
	}
    showPersetSelect(soundMode.length);
	$("preSetOption").innerHTML=listItemName[1];
	/*
	var tmpindex =  soundModeIndex;
	if (soundModeIndex < 3)
	{	   
	     tmpindex = 0;
		 presetPositionH = soundModeIndex;		 
	}
	else if (soundModeIndex > 2 && soundModeIndex < soundMode.length-3)
	{
	     tmpindex = soundModeIndex-2;
		 presetPositionH = 2;
	}
	else if(soundModeIndex > soundMode.length-4)
	{
		tmpindex = soundMode.length - 5;
		presetPositionH = 5 - (soundMode.length - soundModeIndex);
	}
	*/
	presetPositionH = soundModeIndex;
	for(var i = 0; i < soundMode.length; i++)
	{
		spans_preset[i + 1].innerHTML = soundMode[i];
		spans_preset[i + 1].style.color = footballModeIndex ? "#666" : "#fff";
	}
	if(footballModeIndex)
	{
		$("preSetSelectFocus").src = presetFocusBox[1];
	}
	else
	{
		changeFoucusColor();
		$("preSetSelectFocus").src = presetFocusBox[0];
	}
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	$("smallPopWin").style.display="none";
	$("preSetBar").style.display="block";
	focusType="soundPreset";
}

function doTLink()
{
	document.location.href = "optionTlink.html?optionTlink=" + positionV;
}

function showFootballModeItem()
{
    var divs = lis[footballModePosIndex].getElementsByTagName("div");
	divs[0].innerHTML = optionOnOff[footballModeIndex];
}

function doFootballMode()
{
	showPersetSelect(optionOnOff.length);
	$("preSetOption").innerHTML = listItemName[3];
	for(var i = 0; i < optionOnOff.length; i++)
	{
		spans_preset[i + 1].innerHTML = optionOnOff[i];
		spans_preset[i + 1].style.color = "#fff";
	}

	presetPositionH = footballModeIndex;
	changeFoucusColor();
	$("preSetSelectFocus").style.left = 305 + presetPositionH * presetFocusWidth + "px";
	$("currentOption").style.left = 320 + presetPositionH * presetFocusWidth + "px";
	$("currentOption").style.display = "block";
	//parent.hiddenPage(1)
	$("smallPopWin").style.display = "none";
	$("preSetBar").style.display = "block";
	focusType = "footballMode";
}

function showPictureFreezeItem()
{
	var divs = lis[picFreezePosIndex].getElementsByTagName("div");
	if(inputSource != 0 && inputSource !=1)
	{
		divs[1].innerHTML = "...";
	}
	else if(screenMode == 3)
	{
		divs[1].innerHTML = "...";
	}
	else
	{
		divs[0].innerHTML = picFreeze[picFreezeIndex];
	}
}

function doPictureFreeze()
{
	showPersetSelect(picFreeze.length);
	$("preSetOption").innerHTML=listItemName[2];
	for(var i=0;i<picFreeze.length;i++)
	{
		spans_preset[i+1].innerHTML=picFreeze[i];
	}

	presetPositionH=picFreezeIndex;
	changeFoucusColor();
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	//parent.hiddenPage(1)
	$("smallPopWin").style.display="none";
	$("preSetBar").style.display="block";
	focusType="picFreeze";

}
//for schedule list
function backFromBookingOrSchedule()
{
	top.Log("in option backFromBookingOrSchedule");
	return;

}


function clearOldScroll()
{
	setScrollAttribute(preObjectPop.getElementsByTagName("span")[0],0);
	setTimeout(function(){resetScrollHtmlInner(preObjectPop.getElementsByTagName("span")[0]);},1);
	setScrollAttribute(preObjectPop.getElementsByTagName("div")[0],0);
	setTimeout(function(){resetScrollHtmlInner(preObjectPop.getElementsByTagName("div")[0]);},1);
}

function resetScroll()
{
	setScrollAttribute(preObjectPop.getElementsByTagName("span")[0],1);
	setScrollAttribute(preObjectPop.getElementsByTagName("div")[0],1);
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

/*
把整个列表属性更改，如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
htmlTag:内容标签；scrollEnable：1 当前选项为焦点，可能需要做动画，0 当前项为非焦点，一定不会做滚动动画
*/
function setScrollAttribute(htmlTag,scrollEnable)
{
	htmlTag.setAttribute("contentText",htmlTag.innerHTML);
	if(scrollEnable && isOverflowed(htmlTag))//如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
	{
		htmlTag.style.overflowX = "-webkit-marquee";
		htmlTag.style.textOverflow = "clip";
	}
	else
	{
		htmlTag.style.overflowX = "hidden";
		htmlTag.style.textOverflow = "ellipsis";
	}
}
/*
重新为整个列表属性更改完成的列表赋值
htmlTagList:内容标签列表；ListLength：当前有内容的列表标签的个数
*/
function resetScrollHtmlInner(htmlTag)
{
	htmlTag.innerHTML = htmlTag.getAttribute("contentText");
}

function initdata()
{
	preObjectPop=lis[positionV];
	preObjectPreset=spans_preset[presetPositionH+1];
}
function initVarValue()
{
    if(0 == isXVYCCEnable)
    {
        picModeIndex = setting.pictureMode;
    }
    else
    {
        picModeIndex = pictureModeTransform(setting.pictureMode);// = 0;fix me
    }
	soundModeIndex = setting.soundPresetMS12; //= 0;fix me
	picFreezeIndex = setting.freeze;
	footballModeIndex = setting.footballMode;//[0]Off [1]On
	screenMode = channel.currentScreenSaverMode;
	channelStatus              = channel.channelProgramStatus();
    signalStatus               = channel.currentSignalStatus;
 	soundOutput=setting.soundOutput;
	//top.g_channel.testLog("zenglm0000000000000000000 picture index is "+picModeIndex+"sound index is "+	soundModeIndex);
}
//add xiaoxu 20140704

//option.html?tag=optionTlink
function backFromOptionTlink()
{
	var currentHref = document.location.search;
	var strs = currentHref.split("=");
	if(strs.length < 1)
	{
		return;
	}
	
	if(strs.length > 1)
	{
		if(strs[0] == "?optionTlink")
		{
			positionV = parseInt(strs[1], 10);
		}
		else if(strs[0] == "?pvr")
		{
			positionV = parseInt(strs[1], 10);
		}
	}
	
}
function refreshAllMenuListShow()
{
	$("pvrTagImg").style.visibility = pvrDeviceStatus ? "visible" : "hidden";
	
	var spans = $("smallPopWin").getElementsByTagName("span");
	for(var i = 0; i < listItemName.length; i++)
	{
		spans[i].innerHTML = listItemName[i];
		spans[i].style.color="#fff";
	}
	
	showFootballModeItem();
	showPicPresetItem();
	showSoundPresetItem();  
	showPictureFreezeItem();
	if(setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0") == "0")
	{
		menuList[bluetoothPosIndex].showFlag = 0;
	}
	if(inputSource != 0 && inputSource != 1)//无
	{
		menuList[picFreezePosIndex].showFlag = 0;//Picture freeze
		menuList[timeshiftPosIndex].showFlag = 0;//Timeshift
		menuList[pvrPosIndex].showFlag = 0;//PVR
		menuList[scheduleListPosIndex].showFlag = 0;//Schedule list
	}
	else if(inputSource == 0 || channelStatus == 0 || signalStatus == 0 || pvrOpenStatus <= 0)
	{
		menuList[timeshiftPosIndex].showFlag = 0;//Timeshift
		menuList[pvrPosIndex].showFlag = 0;//PVR
		menuList[scheduleListPosIndex].showFlag = 0;//Schedule list
	}
	else
	{
		var timeshiftEnableStatus = channel.timeshiftEnableStatus;
		if(timeshiftEnableStatus == 0)
		{
			menuList[timeshiftPosIndex].showFlag = 0;//Timeshift
		}
		if(screenMode == 3 || top.recordStatusFlag == 1 || top.timeShiftStatusFlag == 1)
		{
			menuList[picFreezePosIndex].showFlag = 0;//Picture freeze
		}
	}

	menuList[soundPresetPosIndex].showFlag = (soundOutput || "input" == setting.getProperty("app.ui.hpstatus","output"))
		? 0 : 1;		
	
	for(var i = 0; i < menuList.length; i++)
	{
		lis[i].style.display = menuList[i].showFlag ? "block" : "none";
	}
}

function init()
{
	initOptionListIndex();
    if(setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1") != "0")
    {
        setting.setMEMC(0);
    }
	try
	{
		//面板按键处理场景设置
		setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
		lis = $("smallPopWin").getElementsByTagName("li");
		spans_preset = $("preSetBar").getElementsByTagName("span");
		$("preSetSelectFocus").src = presetFocusBox[0];
		inputSource = channel.inputSource;//当前信源
		pvrOpenStatus = top.g_factory.pvrOpenStatus;
		pvrDeviceStatus = pvr.getPvrDeviceStatus();
		addMouseListener();
		initdata();
		//signalStatus=1;
		initVarValue();	
		
		//顺序不能颠倒
		refreshAllMenuListShow();
		backFromOptionTlink();
		if(top.g_temp == "miracast")
		{
			positionV = findPosition("miracast");
			top.g_temp = "";
		}
		else if(top.g_temp == "bluetooth")
		{
			positionV = findPosition("bluetooth");
			top.g_temp = "";			
		}	
		refreshFocusOfMenuList();
		resetScroll();
		if((setting.location>0&&setting.checkPictureSelectEnable()==0))
		{
			var spans = $("smallPopWin").getElementsByTagName("span");
			var divs = lis[0].getElementsByTagName("div");
			spans[0].style.color="#666";
			divs[0].style.color = "#666";
			lis[0].getElementsByTagName("img")[0].src = focus_R_Focus[1];
		}
	}catch(er)
	{
		console.log("option init"+er);
	}
}

//add chenhua 2014.5.14
function uninit()
{
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
	top.Log("in option uninit");
	if(focusType=="picPreset")
	{
		if(picModeIndex != presetPositionH)
		previewPictureMode(picModeIndex);
	}
	top.$("main").style.display = "block";
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 0; i < 11; i++)
	{
		lis[i].setAttribute("newAttr",i);
		lis[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="opitonList")
				{
					var number = findPositionOfTagIndex(parseInt(this.getAttribute("newAttr")));
					if(number >= 0)
					{
						clearOldScroll();
						positionV = number;
						refreshFocusOfMenuList();
						resetScroll();
						toOK();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}			
	
	for(var i = 1; i < 7; i++)
	{
		spans_preset[i].setAttribute("newAttr",i);
		spans_preset[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType == "picPreset")
				{
					if(parseInt(this.getAttribute("newAttr")) < 7)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
						picModeIndex = presetPositionH;
						//setting.pictureMode=pictureModeTransform(presetPositionH);  //fix me
						toOK();
					}
				}
				else if(focusType == "soundPreset")
				{
					if(parseInt(this.getAttribute("newAttr")) < 6)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
				
						soundModeIndex = presetPositionH;
						//setting.soundPresetMS12=presetPositionH;  //fix me
						toOK();
					}
				}
				else if (focusType == "picFreeze")
				{
					if(parseInt(this.getAttribute("newAttr")) < 3)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
						//setting.freeze=presetPositionH;  //fix me
						toOK();
					}
				}
				else if(focusType == "footballMode")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
					changeFoucusColor();
					$("preSetSelectFocus").style.left = 305 + presetPositionH * presetFocusWidth + "px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}

/*
 由于667EU项目新需求需要添加一组picture mode模式，但是中间件没有按UI显示位置添加枚举，而是从最后添加一个枚举，所以需要添加此函数进行转换
 */
function pictureModeTransform(preMode)
{
    var aftMode = 0;
    if(4 == preMode)
    {
        aftMode = preMode + 1;
    }
    else if(5 == preMode)
    {
        aftMode = preMode - 1;
    }
    else
    {
        aftMode = preMode;
    }
    return aftMode;
}

function previewPictureMode(position)
{
    if(0 != setTimeoutPictureModeId)
    {
        clearTimeout(setTimeoutPictureModeId);
    }
    setTimeoutPictureModePosition = position;
    if(0 == isXVYCCEnable)
    {
        setTimeoutPictureModeId = setTimeout("setting.previewPictureMode(setTimeoutPictureModePosition);",1000);
    }
    else
    {
        setTimeoutPictureModeId = setTimeout("setting.previewPictureMode(pictureModeTransform(setTimeoutPictureModePosition));",1000);
    }
}
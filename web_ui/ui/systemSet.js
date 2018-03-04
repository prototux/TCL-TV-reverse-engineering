/******************** created by chenhua ***********************/
var systemSetTitleWords 	= [top.sysOptions[0], top.sysOptions[1], top.sysOptions[2], top.sysOptions[3], 
							   top.sysOptions[4], top.sysOptions[5], top.sysOptions[6], top.sysOptions[7], 
							   top.sysOptions[8], top.sysOptions[9], top.sysOptions[10],top.settingNoticeSourceName,top.footballModeName,
                               top.sysOptions[12],top.sysOptions[11]];
var offOnWords				= top.offOn;
var homeShopWords 			= top.initLocations;
var okCancelWords			= top.okCancel;
var psswordWords			= top.others[2];
var passIncorrectWords		= top.passError;
var resetRemindWords		= top.sysResetDes;
var LEDWords                = [top.LEDStatus[0],top.LEDStatus[1],top.offinfo];
var resetShopRemind         = top.resetShopRemind;
var sysPromptCon            = [top.prompts[25],top.prompts[26],top.prompts[27],top.prompts[28]];
var sysPromptImg         	= ["images/info-1_2.png","images/info-1_3.png","images/info-1_4.png","images/info-1_5.png","images/info-1_6.png"]
var mainFocus               = ["images/Focus_Frame/Focus-1.png","images/Focus_Frame/Focus-2.png"];
var setting 				= top.g_setting;
var channel			 		= top.g_channel;
var multimedia 				= top.g_media;
var inputSource 			= 0;
var list_position_h 		= 0;					//主界面坐标
var form_position_h			= 0;					//弹出框焦点位置
var locationValue			= 0;					//0 home;1 shop,注意location是window的对象，不要有变量名和window对象同名
var hbbtvMode				= 0;					//0 off,1 on
var cookie					= 0;					//0 off,1 on
var footballMode 			= 0;					//[0]off, [1]on
var LEDMode                 = 0;                    //0 flashing; 1 normal; 2 off
var focusOn					= "menu";				//menu,location;hbbtvMode,password,resetShop
var password				= "";					//密码
var	passwordLength			= 0;					//密码字串的长度
var noticeSource           = 0;
var noticeSourceSettingPosIndex = 0;

var SUB_MENU_START 			= 90;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;					//二级级主菜单焦点移动的step
var FORM_STEP				= 80;					//弹出框焦点移动的step		
var DIALOG_BUTTON_START		= 190;					//对话框中按钮焦点起始位置
var DIALOG_BUTTON_STEP		= 250;					//对话框焦点移动的step		

var ONE_LINE_TOP            = 38;
var TWO_LINE_TOP            = 20;
var THREE_LINE_TOP          = 5;
var LIST_BOX_HEIGHT			= 70;
//
var ONE_LINE_TOP            = 35;
var TWO_LINE_TOP            = 12;
var THREE_LINE_TOP          = 18;
var FOUR_LINE_TOP           = 28;
var FIVE_LINE_TOP           = 35;
var SIX_LINE_TOP            = 40; 
var PROMPT_LINE_HEIGHT		= 40;

var factory                = top.g_factory;
var menuLock               = 0;
var hotelEnable            = 0;
var lockWords 			   = top.sysOptions[3];
var lockFlag               = 1;
var E_LOCATION_HOME        = 0;

var eManualPosIndex				= 0;
var menuLangPosIndex			= 0;
var timerPosIndex				= 0;
var lockPosIndex				= 0;
var inputSettingPosIndex		= 0;
var softwareUpdatePosIndex		= 0;
var locationPosIndex			= 0;
var hbbtvModePosIndex			= 0;
var cookiesPosIndex				= 0;
var commonInterfacePosIndex		= 0;
var advancedSettingPosIndex		= 0;
var footballModePosIndex		= 0;
var resetShopPosIndex			= 0;
var ledIndicatorPosIndex		= 0;

var displayListCount			= 0;
var MAX_COUNT_ONE_PAGE			= 12;
var focus_off_set				= 0;
var otherPreSetSpans			= 0;
var presetPositionH				= 0;
var PRESET_FOCUS_WIDTH 			= 230;
var SCREEN_WIDTH 				= 1920;
var PRE_BAR_OPTION_WIDTH 		= 390;
var PRE_BAR_STEP 				= 230;

var menuList =[
{name:"E_Manual",param:function(){doE_Manual();},showFlag:1},
{name:"Menu_language",param:function(){doMenu_language();},showFlag:1},
{name:"Timer",param:function(){doTimer();},showFlag:1},
{name:"Lock",param:function(){doLock();},showFlag:1},
{name:"Input_settings",param:function(){doInput_settings();},showFlag:1},
{name:"Software_update",param:function(){doSoftware_update();},showFlag:1},
{name:"Location",param:function(){doLocation();},showFlag:1},
{name:"HbbTV_mode",param:function(){doHbbTV_mode();},showFlag:1},
{name:"Cookies",param:function(){doCookies();},showFlag:1},
{name:"Common_interface",param:function(){doCommon_interface();},showFlag:1},
{name:"Advanced_setting",param:function(){doAdvanced_setting();},showFlag:1},
{name:"noticeSourceStatus",param:function(){doNoticeSource();},showFlag:1},
{name:"footballmode",param:function(){doFootballMode();},showFlag:1},
{name:"LED_Indicator",param:function(){doLED_Indicator();},showFlag:1},
{name:"Reset_shop",param:function(){doReset_shop();},showFlag:1}
];

document.onnotify = notifyProcess;

function testLog(str)
{
	console.log("       --------> Areos: " + str);
}


function notifyProcess(evt)
{
	if(focusOn == "showResetShopRemind")
	{
		return;
	}
    var msg = evt.which;
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}

function initOptionListIndex()
{
	var t = 0;
	eManualPosIndex				= t++;
	menuLangPosIndex			= t++;
	timerPosIndex				= t++;
	lockPosIndex				= t++;
	inputSettingPosIndex		= t++;
	softwareUpdatePosIndex		= t++;
	locationPosIndex			= t++;
	hbbtvModePosIndex			= t++;
	cookiesPosIndex				= t++;
	commonInterfacePosIndex		= t++;
	advancedSettingPosIndex		= t++;
	noticeSourceSettingPosIndex	= t++;
	footballModePosIndex		= t++;
    ledIndicatorPosIndex		= t++;
	resetShopPosIndex			= t++;
}

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function keyDownProcess(evt)
{
	if(focusOn == "showResetShopRemind")
	{
		return;
	}
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt---系统中输入密码时
			if(top.virtualRemoteState == 0)
			{
				if($("passForm").style.display == "block")
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
				}
				else
				{
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
			console.log("lqt---systemSet.js---clientX: "+clientX);
			console.log("lqt---systemSet.js---clientY: "+clientY);
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
			toUp();
			ret = false;
			break;
		case top.VK_DOWN:
			toDown();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
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
		case top.VK_BACK:
			toBack();
			break;
		case top.VK_MENU:
			top.jumpPage();
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
			if((focusOn == "password") || ((menuLock) && (hotelEnable)))
			{
				doCheck(evt.which - 48);
				ret = false;
			}
			break;
		default:
			top.keyDownProcess(evt);
			break;
	}
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		return ret;
	}
	else
	{
		showPromptCont();
		return ret;
	}
}

function $(id)
{
    return document.getElementById(id);
}

function toDown()
{
	if(focusOn == "menu")
	{
		if(list_position_h + focus_off_set == findMaxPosition())//the list bottom
		{
			focus_off_set = 0;
			list_position_h = 0;
		}
		else if(list_position_h + focus_off_set < findMaxPosition() && list_position_h + 1 < MAX_COUNT_ONE_PAGE)
		{
			list_position_h++;
		}
		else if(list_position_h + 1 == MAX_COUNT_ONE_PAGE)
		{
			focus_off_set = (MAX_COUNT_ONE_PAGE < list_position_h + focus_off_set + 2)
				? list_position_h + 2 + focus_off_set - MAX_COUNT_ONE_PAGE : 0;
		}
		refreshFocusOfMenuList();
	}
	else if(focusOn == "location" )
	{
		form_position_h = form_position_h == 2 ? 0 : form_position_h + 1;
		$("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "hbbtvMode" )
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "noticeSource")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "cookie")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
    else if(focusOn == "LEDMode" )
	{
        form_position_h = form_position_h == 2 ? 0 : form_position_h + 1;
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
}
function toUp()
{
	if(focusOn == "menu")
	{
		if(!list_position_h && !focus_off_set)//the list top
		{
			focus_off_set = (MAX_COUNT_ONE_PAGE < findMaxPosition() + 1)
				? findMaxPosition() + 1 - MAX_COUNT_ONE_PAGE : 0;
			list_position_h = MAX_COUNT_ONE_PAGE - 1;
		}
		else if(list_position_h + focus_off_set > 0 && list_position_h - 1 >= 0)
		{
			list_position_h--;
		}
		else if(!list_position_h && focus_off_set)
		{
			focus_off_set--;
		}
		refreshFocusOfMenuList();
	}
	else if(focusOn == "location")
	{
		if(form_position_h == 0)
		{
			form_position_h = 2;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "hbbtvMode")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "noticeSource")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "cookie")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
    else if(focusOn == "LEDMode")
	{
		if(form_position_h == 0)
		{
			form_position_h = 2;
		}
        else if(form_position_h == 1){
            form_position_h = 0;
        }
		else
		{
			form_position_h = 1;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		findFunction(list_position_h + focus_off_set);
	}
	else if(focusOn == "location")
	{
		try
		{
			
			$("listFocus").src=mainFocus[0];
			$("listForm").style.display = "none";
			locationValue = form_position_h;
			$("locationStatus").innerHTML = homeShopWords[locationValue];
			setting.location = locationValue;
            /*
            if (setting.getProperty("ui.eu.breathing", top.ledStatusDefault) == "on")
            {
                if (setting.location == E_LOCATION_HOME)
                {
                    setting.setProperty("sita.bootup.led.work", "off");
                    setting.setProperty("sita.bootup.led.standby", "on");
                }
                else
                {
                    setting.setProperty("sita.bootup.led.work", "on");
                    setting.setProperty("sita.bootup.led.standby", "breathing");
                }
            }
            */
			if(locationValue > 0)
			{
				setting.tvRunningMode = 2;
			}
			else
			{
				setting.tvRunningMode = 1;
			}
			parent.checkPictureSelEnable();
			focusOn = "menu";
			top.showEsticker();
		}catch(er)
		{
			top.g_channel.testLog(er);
		}
	}
	else if(focusOn == "hbbtvMode")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		//if(form_position_h==0)
		//{
			hbbtvMode = form_position_h;
			$("hbbtvModeStatus").innerHTML = offOnWords[hbbtvMode];
			menuList[cookiesPosIndex].showFlag = (hbbtvMode == 0) ? 0 : 1;
			refreshAllMenuListShow();
			setting.hbbTVMode = hbbtvMode;
			focusOn = "menu";
		//}
		//else
		//{
			//showHbbtvServiceRemind();
		//}
	}
	else if(focusOn == "noticeSource")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		noticeSource = form_position_h;
		$("noticeSourceStatus").innerHTML = offOnWords[noticeSource];
		refreshAllMenuListShow();
		setting.setProperty("app.ui.noticeSource",noticeSource);
		focusOn = "menu";
	}
	else if(focusOn == "cookie")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		cookie = form_position_h;
		$("cookieStatus").innerHTML = offOnWords[cookie];
		setting.hbbtvCookieMode = cookie;
		focusOn = "menu";
	}
	else if(focusOn == "footballMode")
	{
		footballMode = presetPositionH;
		setting.footballMode = footballMode;
		$("listFocus").src = mainFocus[0];
		$("footballModeStatus").innerHTML = offOnWords[footballMode];
		$("preSetBar").style.display = "none";
		parent.checkPictureSelEnable();
		parent.showPage(1);
		focusOn = "menu";
	}
	else if(focusOn == "resetShop")
	{
		if(form_position_h == 0)
		{
			top.showMute(0);
			top.initGlobalVariable();
			top.showFactoryHotkey();
			setting.restoreDefault();
			setting.setProperty("app.ui.noticeSource","1");
			top.g_ulits.sendMsgToApplication("vod.netflix", 0xf00c);
			showResetShopRemind();
			$("resetForm").style.display = "none";
            if(top.g_isDownloading == 1)
            {
                top.g_isDownloading = -1;
                if(!top.g_isForceUpgrade)
                {
                    top.g_setting.pauseDownloadUpdateFile();
                    top.hideDownloadRing();
                }

            }
			setTimeout(function(){top.jumpHotkeyPage("initSetup/initEnvironmentSet.html");},4000);
		}
		else
		{
			parent.showPage(1);
			top.restartTimeout();
			$("resetForm").style.display = "none";
			focusOn = "menu";
		}
	}
    else if(focusOn == "LEDMode")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
        LEDMode = form_position_h;
        $("LEDStatus").innerHTML = LEDWords[LEDMode];
        refreshAllMenuListShow();
        setting.setProperty("ui.eu.breathing", LEDMode + "");
        if(0 == LEDMode)    //Flashing
        {
            setting.setProperty("sita.bootup.led.work", "off");
            setting.setProperty("sita.bootup.led.standby", "breathing");

        }else if(1 == LEDMode)  //Normal
        {
            setting.setProperty("sita.bootup.led.work", "off");
            setting.setProperty("sita.bootup.led.standby", "on");
        }else    //Off
        {
            setting.setProperty("sita.bootup.led.work", "off");
            setting.setProperty("sita.bootup.led.standby", "off");
        }
        focusOn = "menu";
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(1);
	}
	else if(focusOn == "resetShop")
	{
		$("listFocus").src=mainFocus[0];
		top.restartTimeout();
		$("listForm").style.display = "none";
		$("resetForm").style.display = "none";
		$("passForm").style.display = "none";
		parent.showPage(1);
		focusOn = "menu";
	}
	else if(focusOn == "showHbbtvRemind")
	{
		clearTimeout(showHbbtvRemindTimer);
		$("remind").style.display = "none";
		parent.showPage(1);
		top.restartTimeout();
		focusOn = "menu";
	}
	else if(focusOn == "footballMode")
	{
		setting.previewFootballMode(footballMode);
		$("preSetBar").style.display = "none";
		parent.showPage(1);
		focusOn = "menu";
	}
	else
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		$("passForm").style.display = "none";
		$("resetForm").style.display = "none";
		parent.showPage(1);
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "password")
	{
		if(passwordLength < 1) return
		else
		{
			password = password.substring(0,(passwordLength-1));
			$('passContent').innerHTML = $('passContent').innerHTML.substring(0,(passwordLength-1))+"_";
			passwordLength--;
		}
	}
	else if(focusOn == "resetShop")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*form_position_h + "px";
	}
	else if(focusOn == "footballMode")
	{
		presetPositionH = presetPositionH ? 0 : 1;
		setting.previewFootballMode(presetPositionH);
		$("preSetSelectFocus").style.left = 345 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
		top.doElementScroll(otherPreSetSpans, presetPositionH);
	}
	else
	{
		toBack();
	}
}

function toRight()
{
	if(focusOn == "resetShop")
	{
		form_position_h = form_position_h ? 0 : 1;
		$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*form_position_h + "px";
	}
	else if(focusOn == "footballMode")
	{
		presetPositionH = presetPositionH ? 0 : 1;
		setting.previewFootballMode(presetPositionH);
		$("preSetSelectFocus").style.left = 345 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
		top.doElementScroll(otherPreSetSpans, presetPositionH);
	}
	else
	{
		doEnter();
	}
}

function doE_Manual()
{
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		initPassForm();
	}
	else
	{
		top.jumpToOperatePage("eManual/eManualFirst.html?0");
	}
}
function doMenu_language()
{
	parent.jumpPage(2,"systemSetting/menuLanguage.html");
}
function doTimer()
{
	parent.jumpPage(2,"systemSetting/timer.html");
}
function doLock()
{
	initPassForm();
	focusOn = "password";
}
function doInput_settings()
{
	parent.jumpPage(2,"systemSetting/inputSetting.html");
}
function doSoftware_update()
{
	parent.jumpPage(2,"systemSetting/softwareUpdate.html");
}
function doLocation()
{
	$("listFocus").src=mainFocus[1];//style.display = "none";
	form_position_h = locationValue;
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,homeShopWords,3,form_position_h,0);
	focusOn = "location";
}
function doHbbTV_mode()
{
	$("listFocus").src=mainFocus[1];
	form_position_h = hbbtvMode;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "hbbtvMode";
}
function doCookies()
{
	$("listFocus").src=mainFocus[1];
	form_position_h = cookie;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "cookie";
}
function doCommon_interface()
{
	parent.jumpPage(2,"systemSetting/ciList.html");
}
function doAdvanced_setting()
{
	parent.jumpPage(2,"systemSetting/advancedSetting.html");
}
function doNoticeSource()
{
	$("listFocus").src=mainFocus[1];
	form_position_h = parseInt(setting.getProperty("app.ui.noticeSource","1"));
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "noticeSource";
}
function doFootballMode()
{
	showPersetSelect(2);
	$("preSetOption").innerHTML = systemSetTitleWords[12];
	var spans = $("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i = 0; i < offOnWords.length; i++)
	{
		spans[i + 1].innerHTML = offOnWords[i];
	}
	presetPositionH = footballMode;
	top.doElementScroll(otherPreSetSpans, presetPositionH);
	$("preSetSelectFocus").style.left = 345 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
	$("currentOption").style.left = 360 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(1);
	$("preSetBar").style.display = "block"
	focusOn = "footballMode";
}

function doReset_shop()
{
	initPassForm();
	focusOn = "password";
}

function doLED_Indicator()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = LEDMode;
    //var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var topOffset;
    var _position = findPosition("LED_Indicator");
    if(_position == MAX_COUNT_ONE_PAGE -1){
        topOffset = SUB_MENU_START + SUB_MENU_STEP*(list_position_h-1) - 10;
    }else{
        topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    }
    var leftOffset = 774;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,LEDWords,3,form_position_h,0);
    focusOn = "LEDMode";
}


function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	otherPreSetSpans = $("preSetBar").getElementsByTagName("span");
	switch(optionMax)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
        case 6:
			$("preSetBar").style.left = parseInt((SCREEN_WIDTH - PRE_BAR_OPTION_WIDTH - optionMax * PRE_BAR_STEP) / 2) + "px";
			break;
		default:
			$("preSetBar").style.left = parseInt((SCREEN_WIDTH - PRE_BAR_OPTION_WIDTH - 6 * PRE_BAR_STEP) / 2) + "px";
			break;
	}
	for(var i = 0;i < 6 && i < optionMax; i++)
	{
		otherPreSetSpans[i + 1].style.display = "block";
	}
	if(optionMax < 6)
	{
		for(var i = optionMax; i < otherPreSetSpans.length - 1; i++)
		{
			otherPreSetSpans[i + 1].style.display = "none";
		}
		$("preSetBar").style.width = PRE_BAR_OPTION_WIDTH + optionMax * PRE_BAR_STEP + "px";
	}
	else
	{
		$("preSetBar").style.width = PRE_BAR_OPTION_WIDTH + 6 * PRE_BAR_STEP + "px";
	}
}

function findFunction(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
		if(num==postion)
		{
			menuList[i].param();
			break;
		}
	}
}
function findName(postion)
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
		if(num == postion)
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
function findMaxPosition()
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
	}
	return num;
}
function findPositionOfTagIndex(index)
{
	var num=-1;
	for(var i = 0;(i <= index) && (i < menuList.length);i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
	}
	return num;
}
function refreshFocusOfMenuList()
{
	//focus_off_set = parseInt(list_position_h / MAX_COUNT_ONE_PAGE, 10);
	testLog("the focus_off_set = " + focus_off_set);
	$("listFocus").style.top = SUB_MENU_START + LIST_BOX_HEIGHT * list_position_h + "px";
	$("menuUl").style.top = -focus_off_set * LIST_BOX_HEIGHT + "px";
}

/*
 描述：menu language切换获取新的显示数据
*/
function refreshUIWhenLanguageChange()
{
	//systemSetTitleWords 	= top.sysOptions;
	offOnWords				= top.offOn;
	homeShopWords 			= top.initLocations;
	okCancelWords			= top.okCancel;
	psswordWords			= top.others[2];
	passIncorrectWords		= top.passError;
	resetRemindWords		= top.sysResetDes;
	LEDWords                = [top.LEDStatus[0],top.LEDStatus[1],top.offinfo];
	resetShopRemind         = top.resetShopRemind;
	sysPromptCon            = [top.prompts[25],top.prompts[26],top.prompts[27],top.prompts[28]];
	 systemSetTitleWords 	= [top.sysOptions[0], top.sysOptions[1], top.sysOptions[2], top.sysOptions[3],
		top.sysOptions[4], top.sysOptions[5], top.sysOptions[6], top.sysOptions[7],
		top.sysOptions[8], top.sysOptions[9], top.sysOptions[10],top.settingNoticeSourceName, top.footballModeName,
		top.sysOptions[12], top.sysOptions[11]];
	for(var i = 0; i < menuList.length; i++)
	{
		sndMenuRightSpanList[i].innerHTML = systemSetTitleWords[i];
	}
	//var sndMenuRightImgList = $("sndMenuRight").getElementsByTagName("img");
	
	$("locationStatus").innerHTML = homeShopWords[locationValue];
	$("hbbtvModeStatus").innerHTML = offOnWords[hbbtvMode];
	$("cookieStatus").innerHTML = offOnWords[cookie];
	$("LEDStatus").innerHTML = LEDWords[LEDMode];
	$("noticeSourceStatus").innerHTML = offOnWords[noticeSource];
	$("footballModeStatus").innerHTML = offOnWords[footballMode];
}

/*
描述：password初始化
参数：
全局变量：
*/
function initPassForm()
{
	var passFormSpanList = $("passForm").getElementsByTagName("span");
	passFormSpanList[0].innerHTML = psswordWords;
	passFormSpanList[1].innerHTML = psswordWords;
	password = "";
	$("passContent").innerHTML = password + "_";
	$("passRemind").innerHTML = "";
	$("passForm").style.display = "block";
	
	parent.hiddenPage(1);
	top.showDialogPosition($("passForm"),800,300,1920,1080,0,0);
}

function checkFocusOffSet()
{
	if(list_position_h >= MAX_COUNT_ONE_PAGE)
	{
		focus_off_set = MAX_COUNT_ONE_PAGE - list_position_h;
		list_position_h = list_position_h - focus_off_set;
	}
}

/*
描述：password弹出框出现时输入数字
参数：
全局变量：passwordLength;password;focusOn
*/
function doCheck(which)
{
	/*需要说明的是String.fromCharCode(which)的值总是大写的，因为onkeyup和onkeydown事件不能主动判断键盘的大小写，
	onkeypress可以判断大小写。其中只有onkeyup事件能获取键盘按下去后的结果值，因为此处需用到要清除键盘按下去后的值，
	所以只能用onkeyup事件，考虑到遥控器只有数字键，没有大小写之分，所以够用了*/
	passwordLength = password.length;
	if(passwordLength == 4)//重新输入
	{
		password = "";
		$("passContent").innerHTML = password + "_";
	}
	password = password + which;
	$("passContent").innerHTML = $("passContent").innerHTML.substring(0,passwordLength) + "*" + "_";
	passwordLength++;
	if(passwordLength == 4)
	{
		$("passContent").innerHTML = $("passContent").innerHTML.substring(0,passwordLength);
		 if(password != setting.password &&  password != top.g_superPassword)
		{
			passwordLength = 0;
			$('passRemind').innerHTML = passIncorrectWords;
			password = "";
			$("passContent").innerHTML = password + "_";
		}
		else
		{
			$("passForm").style.display = "none";
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器--lqt
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			if(list_position_h + focus_off_set == findPosition("Lock"))//lock
			{
				focusOn = "menu";
				parent.showPage(1);
				parent.jumpPage(2,"systemSetting/lock.html");
			}
			else if(list_position_h + focus_off_set == findPosition("Reset_shop"))
			{
				initResetShop();
				focusOn = "resetShop";
			}
			else if((menuLock) && (hotelEnable) && (lockFlag))
			{
				menuLock = 0;
				hotelEnable = 0;
				lockFlag = 0;
				init();
				parent.showPage(1);
			}
		}
	}
}

/*
描述：初始化reset确认对话框
参数：
全局变量：form_position_h
*/
function initResetShop()
{
	//channel.testLog("in initResetShop");
	var resetFormSpanList = $("resetForm").getElementsByTagName("span");
	resetFormSpanList[0].innerHTML = systemSetTitleWords[14];
	resetFormSpanList[1].innerHTML = resetRemindWords;
	resetFormSpanList[2].innerHTML = okCancelWords[0];
	resetFormSpanList[3].innerHTML = okCancelWords[1];
	form_position_h = 1;
	$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*form_position_h + "px";
	$("resetForm").style.display = "block";
	
	top.showDialogPosition($("resetForm"),800,300,1920,1080,0,0);
	
	top.stopTimeout();
}

function showFocus()//显示主页面的焦点
{
	timeoutInit();
	$("listFocus").style.display = "block";
}
function hiddenFocus()//隐藏主页面的焦点
{
	$("listFocus").style.display = "none";
}
function hiddenPromptCont()//隐藏提示语
{
	$("promptWin").style.display="none";
}

function showPromptImg()
{
	$("promptWin").style.display = "block";
	var height 	= $("promptContent").offsetHeight;
	var img 	= $("promptWin").getElementsByTagName("img");
	var div 	= $("promptWin").getElementsByTagName("div");
	var lineCount = parseInt($("promptContent").offsetHeight / PROMPT_LINE_HEIGHT);
	switch(lineCount)
	{
		case 0:
			img[0].src = sysPromptImg[0];
			$("promptContent").style.top = TWO_LINE_TOP + "px";
			img[0].style.height = "110px";
			div[0].style.height = "102px";
			$("promptWin").style.top = 80 + list_position_h * LIST_BOX_HEIGHT + "px";
			break;
		case 1:
			img[0].src = sysPromptImg[0];
			$("promptContent").style.top = ONE_LINE_TOP + "px";
			img[0].style.height = "110px";
			div[0].style.height = "102px";
			$("promptWin").style.top = 80 + list_position_h * LIST_BOX_HEIGHT + "px";
			break;
		case 2:
			img[0].src = sysPromptImg[0];
			$("promptContent").style.top = TWO_LINE_TOP + "px";
			img[0].style.height = "110px";
			div[0].style.height = "102px";
			$("promptWin").style.top = 80 + list_position_h * LIST_BOX_HEIGHT + "px";
			break;
		case 3:
			img[0].src = sysPromptImg[1];
			$("promptContent").style.top = THREE_LINE_TOP + "px";
			img[0].style.height = "160px";
			div[0].style.height = "152px";
			$("promptWin").style.top = 50 + list_position_h * LIST_BOX_HEIGHT + "px";
			break;
		case 4:
			img[0].src = sysPromptImg[2];
			$("promptContent").style.top = FOUR_LINE_TOP + "px";
			img[0].style.height = "220px";
			div[0].style.height = "212px";
			$("promptWin").style.top = 20 + list_position_h * LIST_BOX_HEIGHT + "px";
			break;
		case 5:
			img[0].src = sysPromptImg[3];
			$("promptContent").style.top = FIVE_LINE_TOP + "px";
			img[0].style.height = "280px";
			div[0].style.height = "272px";
			$("promptWin").style.top = -10 + list_position_h * LIST_BOX_HEIGHT + "px";
			break;
		case 6:
			img[0].src = sysPromptImg[4];
			$("promptContent").style.top = SIX_LINE_TOP + "px";
			img[0].style.height = "340px";
			div[0].style.height = "332px";
			$("promptWin").style.top = -30 + list_position_h * LIST_BOX_HEIGHT + "px";
			break;
	}
}

var showPromptContTimer = 0;

function showPromptCont()//显示提示语内容函数
{
	if(focusOn == "menu" && parent.currentShowMenu == 1)
	{
		clearTimeout(showPromptContTimer);
		showPromptContTimer = setTimeout(function(){$("promptWin").style.display = "none"}, 5000);
		var name = findName(list_position_h + focus_off_set);
		if(name == "Lock")
		{
			$("promptContent").innerHTML = sysPromptCon[0];
			showPromptImg();
		}
		else if(name == "Input_settings")
		{
			$("promptContent").innerHTML = sysPromptCon[1];
			showPromptImg();
		}
		else if(name == "Location")
		{
			$("promptContent").innerHTML = sysPromptCon[2];
			showPromptImg();
		}
		else if(name == "Reset_shop")
		{
			$("promptContent").innerHTML = sysPromptCon[3];
			showPromptImg();
		}
		else
		{
			$("promptWin").style.display = "none";
		}
	}
	else
	{
		$("promptWin").style.display = "none";
	}
	
}
function initAllMenuList()
{
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		sndMenuRightSpanList[0].innerHTML = lockWords;
		sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "block";
		menuList[eManualPosIndex].showFlag = 1;
		for(var i = 1;i < menuList.length;i++)
		{
			menuList[i].showFlag = 0;
		}
	}
	else
	{
		inputSource = channel.inputSource;
		
		for(var i = 1; i < menuList.length;i++)
		{
			menuList[i].showFlag = 1;
		}
		
		for(var i = 0; i < menuList.length; i++)
		{
			sndMenuRightSpanList[i].innerHTML = systemSetTitleWords[i];
		}
		
		locationValue = setting.location;
		$("locationStatus").innerHTML = homeShopWords[locationValue];
		
		hbbtvMode = setting.hbbTVMode;//先去掉step 1
		$("hbbtvModeStatus").innerHTML = offOnWords[hbbtvMode];
		menuList[cookiesPosIndex].showFlag = hbbtvMode ? 1 : 0;
		cookie = setting.hbbtvCookieMode;
		$("cookieStatus").innerHTML = offOnWords[cookie];
		noticeSource = parseInt(setting.getProperty("app.ui.noticeSource","1"));//先去掉step 1
		$("noticeSourceStatus").innerHTML = offOnWords[noticeSource];
		//add for football mode
		footballMode = setting.footballMode;
		$("footballModeStatus").innerHTML = offOnWords[footballMode];

        LEDMode = parseInt(setting.getProperty("ui.eu.breathing", "1"));
        $("LEDStatus").innerHTML = LEDWords[LEDMode];
	
		//hide common interface for AU
		if("AU" == setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU"))
		{
			menuList[commonInterfacePosIndex].showFlag = 0;
		}
		//不可用状态显示
		if(inputSource != 1)
		{
			menuList[commonInterfacePosIndex].showFlag = 0;
		}
		var str = window.location.search.substring(1);
		if(str == "backFromCiList")
		{
			parent.showPageFlag(1);
			list_position_h = hbbtvMode ? cookiesPosIndex : hbbtvModePosIndex;
			checkFocusOffSet();
			$("sndMenuLeft").style.left = "0px";
			//$("sndMenuLeft").style.display = "none";
			//channel.testLog("in system set backFromCiList 1");
			parent.$("pageFlagShadow").style.left="306px";
			//channel.testLog("in system set backFromCiList 2");
			$("sndMenuRight").style.left = "40px";
			$("sndMenuRight").style.display = "block";
			//channel.testLog("in systemSet list_position_h = " + list_position_h);
			parent.showSubMenu1Focus();
		}
		else
		{
			list_position_h = 0;
			focus_off_set = 0;
		}
		//$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
	}

	refreshAllMenuListShow();
	refreshFocusOfMenuList();
}

function refreshAllMenuListShow()
{
	displayListCount = 0;
	for(var i = 0; i < menuList.length; i++)
	{
		displayListCount += menuList[i].showFlag ? 1 : 0;
		sndMenuRightLiList[i].style.display = menuList[i].showFlag ? "block" : "none";
	}
	if(displayListCount <= MAX_COUNT_ONE_PAGE)
	{
		$("listUpRemind").style.display = 'none';
		$("listDownRemind").style.display = 'none';
	}
	else
	{
		$("listUpRemind").style.display = 'block';
		$("listDownRemind").style.display = 'block';
	}
	testLog("the menuList[eManualPosIndex].showFlag = " + menuList[eManualPosIndex].showFlag);
	testLog("the displayListCount = " + displayListCount);
}

var listFormLiList;
var sndMenuRightLiList;
var sndMenuRightSpanList;
function init()
{
	initOptionListIndex();
	menuLock = factory.menuLock;
	hotelEnable = factory.hotelEnable;
	sndMenuRightSpanList = $("sndMenuRight").getElementsByTagName("span");
	sndMenuRightLiList = $("sndMenuRight").getElementsByTagName("li");
	listFormLiList = $("listForm").getElementsByTagName("li");
	
	initAllMenuList();
	
	/*
	//channel.testLog("in systemSet top.g_nextHtmlPage = " + top.g_nextHtmlPage);
	//选择menu language后刷新页面适配多语言
	if(top.g_nextHtmlPage == "menuLanguage.html")
	{
		$("listFocus").style.display="block";
		list_position_h = 0;
		$("listFocus").style.top=SUB_MENU_START+list_position_h*SUB_MENU_STEP+"px";
		hiddenPromptCont();
		$("sndMenuRight").style.display = "none";
		parent.$("pageFlagShadow").style.left="288px";
		
		//需要加上这一句话，这是对menuLanguage.html进入的特殊处理。因为从menuLanguage.html
		//中返回需要再次调用到该页面的init函数来刷新该页面，如果不加上则会出现页面部分不能显示
		top.g_nextHtmlPage = "";
	}
	else
	{
		$("sndMenuRight").style.display = "block";
	}*/
	addMouseListener();
}
var showHbbtvRemindTimer = 0;
function showHbbtvServiceRemind()
{
	clearTimeout(showHbbtvRemindTimer);
	$("remind").style.display = "block";
	var span = $("remind").getElementsByTagName("span");
	span[0].innerHTML = top.hbbtvServiceRemind;
	showHbbtvRemindTimer = setTimeout(function(){
		$("remind").style.display = "none";
		parent.showPage(1);
		top.restartTimeout();
		focusOn = "menu";
		},20*1000);
	top.showDialogPosition($("remind"),800,240,1920,1080,0,0);
	parent.hiddenPage(1);
	top.stopTimeout();
	focusOn = "showHbbtvRemind";
}

function showResetShopRemind()
{
	$("remind").style.display = "block";
	var span = $("remind").getElementsByTagName("span");
	span[0].innerHTML = resetShopRemind;
	top.stopTimeout();
	parent.hiddenPage(1);
	top.showDialogPosition($("remind"),800,240,1920,1080,0,0);
	focusOn = "showResetShopRemind";
}

function doOffsetMenuList(postion)
{
	if(postion >= MAX_COUNT_ONE_PAGE)
	{
		offsetPosition = postion - MAX_COUNT_ONE_PAGE - 1;
		$("menuUl").style.top= - (postion - MAX_COUNT_ONE_PAGE - 1) * 70+"px";
		$("listFocus").style.top = SUB_MENU_START + (MAX_COUNT_ONE_PAGE - 1) * SUB_MENU_STEP + "px";
	}
	else
	{
		offsetPosition=0;
		$("menuUl").style.top = 0 + "px";
		$("listFocus").style.top = SUB_MENU_START + postion * SUB_MENU_STEP + "px";
	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 0; i < menuList.length; i++)
	{
		sndMenuRightLiList[i].setAttribute("newAttr",i);
		sndMenuRightLiList[i].onmousedown = function(evt){
					evt.preventDefault();
					parent.onLoadPage=0;
					parent.$("homeMenu").contentWindow.document.getElementById("menuFocus").src=parent.mentFocusImg[1];
					parent.$("subMenu1").contentWindow.showFocus();
					parent.currentShowMenu=1;
					//parent.subMenu1.focus();
					//parent.setIndexFocusPage("subMenu1");
					if((parent.menuLock) && (parent.hotelEnable))
					{
						parent.menuLockFlag = 0;
						return;
					}
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu"){
						list_position_h = findPosition(menuList[parseInt(this.getAttribute("newAttr"))].name);
						checkFocusOffSet();
						$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
						doEnter();
						showPromptCont();
					}
				}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}

	var clickSpans = $("preSetBar").getElementsByClassName("preSetValue");//picPreset[pictureMode];
	for(var i = 0; i < clickSpans.length; i++)
	{
		clickSpans[i].setAttribute("newAttr", i);
		clickSpans[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)
			{//left key
				if(focusOn == "footballMode")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					$("preSetSelectFocus").style.left = 345 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
					top.doElementScroll(otherPreSetSpans, presetPositionH);
					footballMode = presetPositionH;
					setting.footballMode = footballMode;
					$("listFocus").src = mainFocus[0];
					$("footballModeStatus").innerHTML = offOnWords[footballMode];
					$("preSetBar").style.display = "none";
					parent.checkPictureSelEnable();
					parent.showPage(1);
					focusOn = "menu";
				}
			}
		}
	}
	
	for(var i = 0; i < 3; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn != "menu"){
					if((menuLock) && (hotelEnable) && (lockFlag))
					{
					}
					else
					{
						form_position_h = parseInt(this.getAttribute("newAttr"));
						$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
						doEnter();
						showPromptCont();
					}
				}
			}
		}
	}
	
	var resetButton = $("resetForm").getElementsByClassName("dialogButton");
	resetButton[0].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "resetShop"){
						form_position_h = 0;
						doEnter();
						showPromptCont();
				}
			}
		}
	resetButton[1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "resetShop"){
						form_position_h = 1;
						doEnter();
						showPromptCont();
				}
			}
		}
}
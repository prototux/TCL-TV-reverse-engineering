/******************** created by chenhua ***********************/
var soundSetTitleWords 		= [top.souOptions[0],top.souOptions[4],top.souOptions[11],top.souOptions[6],top.souOptions[2],top.souOptions[7],top.souOptions[12],top.picOptions[15]];
var offOnWords				= top.offOn;
var spdifTypeWords 			= [top.souSpdifType[1],top.souSpdifType[0]];
var soundPromptCon          = [top.prompts[12],top.prompts[13],top.prompts[14],top.prompts[15],top.prompts[16],top.prompts[17]];
var soundPromptImg          = ["images/info-1_2.png","images/info-1_3.png","images/info-1_4.png","images/info-1_5.png","images/info-1_6.png"]
var mainFocus               = ["images/Focus_Frame/Focus-1.png","images/Focus_Frame/Focus-2.png"];
var audioSceneWords			= top.audioScenes;
var soundPgreTitleWords 	= top.souOptions[6];
var soundOutputWords =[top.soundOutputoptions[0],top.soundOutputoptions[1]];
var setting 				= top.g_setting;
var channel			 		= top.g_channel;
var list_position_h 		= 0;					//主界面坐标
var list_position_count 	= 6;					//主界面行数
var form_position_h			= 0;					//弹出框焦点位置
var autoVolumeCtrl			= 0;
var sPDIFType				= 0;
var sPDIFDelay				= 0;
var audioScene				= 0;					//0 desk top; 1 wall mount
var audioDelay              = 0;
var focusOn					= "menu";				//menu,autoVolumeCtrl;sPDIFType ;audioMode;soundType;progressBar

var SUB_MENU_START 			= 90;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;					//二级级主菜单焦点移动的step
var FORM_STEP				= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH			= 300;
var EXTRA_PROGRESS_WIDTH	= 900;					// 弹出式进度条的宽度			

var factory                = top.g_factory;
var menuLock               = 0;
var hotelEnable            = 0;
var titleWords 			   = top.sysOptions[3];
var psswordWords		   = top.others[2];
var passwordLength         = 0;
var password               = "";                  
var passIncorrectWords      = top.passError;
var lockFlag               = 1;
var soundOutputIndex =0;
var soundpreset = 0;
document.onnotify = notifyProcess;


function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
		case top.E_HP_PLUGIN:
            top.jumpPage();
				break;
		case top.E_HP_PLUGOUT:
            top.jumpPage();
				break;							
		default:
			top.systemEventProc(evt);
			break;
	}
}
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt---IPEPG会走此逻辑
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
			console.log("lqt---soundSet.js---clientX: "+clientX);
			console.log("lqt---soundSet.js---clientY: "+clientY);
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
			if((menuLock) && (hotelEnable) && (lockFlag))
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
		if((menuLock) && (hotelEnable) && (lockFlag))
		{
			return ;
		}
		else
		{
            if("input" == setting.getProperty("app.ui.hpstatus","output") || 1 == soundOutputIndex)
            {
                if(list_position_h >= list_position_count)
                {
                    list_position_h = 1;
                }
                else
                {
                    list_position_h++;
                }
                if(list_position_h!=1)
                    top.doEleScrForNoOption(listFirstSpans,list_position_h+1, 1);
                else
                    top.doEleScrForNoOption(listFirstSpans,list_position_h+0, 1);
                $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h - 1) + "px";
            }
            else
            {
                if(list_position_h >= list_position_count)
                {
                    list_position_h = 0;
                }
                else
                {
                    list_position_h++;
                }
                if(list_position_h!=0)
                    top.doEleScrForNoOption(listFirstSpans,list_position_h+1, 1);
                else
                    top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
                $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
            }
		}
	}
	else if(focusOn == "autoVolumeCtrl" || focusOn == "audioScene"||focusOn=="soundOutput")
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
	else if(focusOn == "sPDIFType")
	{
		if(form_position_h >= 1)
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "progressBar")
	{
		var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
		if(currentProgressName == soundSetTitleWords[3])
		{
			initProgressBar( soundSetTitleWords[4])
			list_position_h ++;
			
		}
		else if(currentProgressName == soundSetTitleWords[4])
		{
			initProgressBar( soundSetTitleWords[3])
			list_position_h --;
		}
		$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
}
function toUp()
{
	if(focusOn == "menu")
	{
		if((menuLock) && (hotelEnable) && (lockFlag))
		{
			return ;
		}
		else
		{
            if("input" == setting.getProperty("app.ui.hpstatus","output") || 1 == soundOutputIndex)
            {
                if(list_position_h <= 1)
                {
                    list_position_h = list_position_count;
                }
                else
                {
                    list_position_h--;
                }
                if(list_position_h!=1)
                    top.doEleScrForNoOption(listFirstSpans,list_position_h+1, -1);
                else
                    top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
                $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h - 1) + "px";
            }
            else
            {
                if(list_position_h <= 0)
                {
                    list_position_h = list_position_count;
                }
                else
                {
                    list_position_h--;
                }
                if(list_position_h!=0)
                    top.doEleScrForNoOption(listFirstSpans,list_position_h+1, -1);
                else
                    top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
                $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
            }
		}
	}
	else if(focusOn == "autoVolumeCtrl" || focusOn == "audioScene"||focusOn=="soundOutput")
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
	else if(focusOn == "sPDIFType")
	{
		if(form_position_h <= 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "progressBar")
	{
		var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
		if(currentProgressName == soundSetTitleWords[3])
		{
			initProgressBar( soundSetTitleWords[4])
			list_position_h ++;
			
		}
		else if(currentProgressName == soundSetTitleWords[4])
		{
			initProgressBar( soundSetTitleWords[3])
			list_position_h --;
		}
		$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
}
function doEnter()
{
	if(focusOn == "menu")
    {
        if("input" == setting.getProperty("app.ui.hpstatus","output") || 1 == soundOutputIndex)
        {
            var list_position_h_temp = list_position_h - 1;
        }
        else
        {
            var list_position_h_temp = list_position_h;
        }
		switch(list_position_h)
		{
			case 0:
				if((menuLock) && (hotelEnable) && (lockFlag))
				{
					initPass();
				}
				else
				{
					parent.jumpPage(2,"soundSetting/soundPreset.html");
				}
				break;
			case 1:
				$("listFocus").src=mainFocus[1];
				form_position_h = sPDIFType;
				var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h_temp - 10;
				var leftOffset = 774;
				top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,spdifTypeWords,2,form_position_h,0);
				focusOn = "sPDIFType";
				break;
			case 2:	
				initProgressBar( soundSetTitleWords[3]);
				focusOn = "progressBar";
				break;
			case 3:
				initProgressBar( soundSetTitleWords[4]);
				focusOn = "progressBar";
				break;
			case 4:
				$("listFocus").src=mainFocus[1];
				form_position_h = audioScene;
				var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h_temp - 10;
				var leftOffset = 774;
				top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,audioSceneWords,2,form_position_h,0);
				focusOn = "audioScene";
				break;
			case 5:
				$("listFocus").src=mainFocus[1];
				form_position_h = soundOutputIndex;
				var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h_temp - 10;
				var leftOffset = 774;
				top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundOutputWords,2,form_position_h,0);
				focusOn = "soundOutput";
				break;				
			case 6:
				parent.jumpPage(2,"soundSetting/soundAdvanced.html");
				break;
			default:
				break;
		}
	}
	else if(focusOn == "autoVolumeCtrl")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		autoVolumeCtrl = form_position_h;
		$("autoVolumeCtrlStatus").innerHTML = offOnWords[autoVolumeCtrl];
		setting.autoVolumeCtrl = autoVolumeCtrl;
		focusOn = "menu";
	}
	else if(focusOn == "sPDIFType")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		sPDIFType = form_position_h;
		$("sPDIFTypeStatus").innerHTML = spdifTypeWords[sPDIFType];
		setting.digitalOutput = sPDIFType+1;
		focusOn = "menu";
	}
	else if(focusOn == "audioScene")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		audioScene = form_position_h;
		$("audioScene").innerHTML = audioSceneWords[audioScene];
		setting.audioScene = audioScene;
		focusOn = "menu";
		
	}
	else if(focusOn == "soundOutput")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		soundOutputIndex = form_position_h;
		$("soundOutput").innerHTML = soundOutputWords[soundOutputIndex];
		setting.soundOutput = soundOutputIndex;
		focusOn = "menu";	
		if(soundOutputIndex==0 && "output" == setting.getProperty("app.ui.hpstatus","output"))
			{
				sndMenuRightLiList[0].style.display = "block";
				setting.soundPresetMS12=soundpreset;
                $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
			}
		else	
			{
				sndMenuRightLiList[0].style.display = "none";
				setting.previewSoundEffectMS12(3);
                $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h - 1) + "px";
			}

	}	
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(1);
	}
	else if(focusOn == "progressBar")
	{
		top.timeoutFuc.timeoutTimes = 30;
		refreshMenuProgress(soundSetTitleWords[4]);
		refreshMenuProgress(soundSetTitleWords[3]);
		$("adjustProgressBox").style.display="none";
		parent.showPage(1);
		top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
		focusOn = "menu";
	}
	else
	{
		$("listFocus").src=mainFocus[0];;
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "progressBar")
	{
		var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
		if(currentProgressName==soundSetTitleWords[3])
		{
			if(sPDIFDelay > 0)
			{
				sPDIFDelay -= 10;
				if(sPDIFDelay < 0)
				{
					sPDIFDelay = 0;
				}
				progressDivList[0].style.width = parseInt(sPDIFDelay*EXTRA_PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
				progressDivList[2].style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay)*EXTRA_PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
				
				setting.sPDIFDelay = sPDIFDelay;
				$("adjustProgValue").innerHTML = sPDIFDelay;
			}
		}
		else if(currentProgressName==soundSetTitleWords[4])
		{
			if(audioDelay > 0)
			{
				audioDelay -=10;
				if(audioDelay < 0)
				{
					audioDelay = 0;
				}
				progressDivList[0].style.width = parseInt(audioDelay*EXTRA_PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
				progressDivList[2].style.width = parseInt((PROGRESS_AUDIO_MAX_VALUE - audioDelay)*EXTRA_PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
				
				setting.audioDelay = audioDelay;
				$("adjustProgValue").innerHTML = audioDelay;
			}
		}
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "progressBar")
	{
		var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
		if(currentProgressName==soundSetTitleWords[3])
		{
			if(sPDIFDelay < PROGRESS_SPDIF_MAX_VALUE)
			{
				sPDIFDelay += 10;
				if(sPDIFDelay > PROGRESS_SPDIF_MAX_VALUE)
				{
					sPDIFDelay = PROGRESS_SPDIF_MAX_VALUE;
				}
				progressDivList[0].style.width = parseInt(sPDIFDelay*EXTRA_PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
				progressDivList[2].style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay)*EXTRA_PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
				setting.sPDIFDelay = sPDIFDelay;
				$("adjustProgValue").innerHTML = sPDIFDelay;
			}
		}
		else if(currentProgressName==soundSetTitleWords[4])
		{
			if(audioDelay < PROGRESS_AUDIO_MAX_VALUE)
			{
				audioDelay +=10;
				if(audioDelay > PROGRESS_AUDIO_MAX_VALUE)
				{
					audioDelay = PROGRESS_AUDIO_MAX_VALUE;
				}
				progressDivList[0].style.width = parseInt(audioDelay*EXTRA_PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
				progressDivList[2].style.width = parseInt((PROGRESS_AUDIO_MAX_VALUE - audioDelay)*EXTRA_PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
				setting.audioDelay = audioDelay;
				$("adjustProgValue").innerHTML = audioDelay;
			}
		}
	}
	else
	{
		doEnter();
	}
}

/*
 描述：初始化需要通过进度显示的设置项
 参数：选择项的名称
*/
var progressDivList;
function initProgressBar(name)
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(1);
	if(name==soundSetTitleWords[3])
	{
		if(sPDIFDelay>PROGRESS_SPDIF_MAX_VALUE)
		{
			sPDIFDelay = PROGRESS_SPDIF_MAX_VALUE
		}
		if(sPDIFDelay<0)
		{
			sPDIFDelay = 0;
		}
		$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[3];
		progressDivList[0].style.width = parseInt(sPDIFDelay*EXTRA_PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
		progressDivList[2].style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay)*EXTRA_PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
		$("adjustProgValue").innerHTML = sPDIFDelay;
		$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[4];
		$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = "";
	}
	else if(name==soundSetTitleWords[4])
	{
		if(audioDelay>PROGRESS_AUDIO_MAX_VALUE)
		{
			audioDelay = PROGRESS_AUDIO_MAX_VALUE
		}
		if(audioDelay<0)
		{
			audioDelay = 0;
		}
		$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[4];
		progressDivList[0].style.width = parseInt(audioDelay*EXTRA_PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
		progressDivList[2].style.width = parseInt((PROGRESS_AUDIO_MAX_VALUE - audioDelay)*EXTRA_PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
		$("adjustProgValue").innerHTML = audioDelay;
		$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[3];
		$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = "";
	}
	$("adjustProgressBox").style.display="block";
	focusOn="progressBar";
}

/*
描述：刷新menu菜单中的进度条
*/
function refreshMenuProgress(name)
{
	if(name==soundSetTitleWords[3])
	{
		if(sPDIFDelay>PROGRESS_SPDIF_MAX_VALUE)
		{
			sPDIFDelay = PROGRESS_SPDIF_MAX_VALUE
		}
		if(sPDIFDelay<0)
		{
			sPDIFDelay = 0;
		}
		$("sPDIFDelayValue").innerHTML = sPDIFDelay;
		$("sPDIFDelayPgreLeft").style.width = parseInt(sPDIFDelay*PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
		$("sPDIFDelayPgreRight").style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay)*PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
	}
	else if(name==soundSetTitleWords[4])
	{
		if(audioDelay>PROGRESS_AUDIO_MAX_VALUE)
		{
			audioDelay = PROGRESS_AUDIO_MAX_VALUE
		}
		if(audioDelay<0)
		{
			audioDelay = 0;
		}
		$("audioDelayValue").innerHTML = audioDelay;
		$("audioDelayPgreLeft").style.width = parseInt(audioDelay*PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
		$("audioDelayPgreRight").style.width = parseInt((PROGRESS_AUDIO_MAX_VALUE - audioDelay)*PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
	}
}

function showFocus()//显示主页面的焦点
{
	timeoutInit();
	$("listFocus").style.display="block";
}
function hiddenFocus()//隐藏主页面的焦点
{
	$("listFocus").style.display="none";
}
function hiddenPromptCont()//隐藏提示语
{
	$("promptWin").style.display="none";
}
var ONE_LINE_TOP            = 35;
var TWO_LINE_TOP            = 12;
var THREE_LINE_TOP          = 18;
var FOUR_LINE_TOP           = 28;
var FIVE_LINE_TOP           = 35;
var SIX_LINE_TOP            = 40;                    
function showPromptImg()
{
	$("promptWin").style.display="block";
	var height = $("promptContent").offsetHeight;
	var img   = $("promptWin").getElementsByTagName("img");
	var div   = $("promptWin").getElementsByTagName("div");
	if(height==40)
	{
		img[0].src=soundPromptImg[0];
		$("promptContent").style.top = ONE_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+list_position_h*70+"px";
	}
	else if(height==80)
	{
		img[0].src=soundPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+list_position_h*70+"px";
	}
	else if(height==120)
	{
		img[0].src=soundPromptImg[1];
		$("promptContent").style.top = THREE_LINE_TOP+"px";
		img[0].style.height="160px";
		div[0].style.height="152px";
		$("promptWin").style.top=50+list_position_h*70+"px";
	}
	else if(height==160)
	{
		img[0].src=soundPromptImg[2];
		$("promptContent").style.top = FOUR_LINE_TOP+"px";
		img[0].style.height="220px";
		div[0].style.height="212px";
		$("promptWin").style.top=20+list_position_h*70+"px";
	}
	else if(height==200)
	{
		img[0].src=soundPromptImg[3];
		$("promptContent").style.top = FIVE_LINE_TOP+"px";
		img[0].style.height="280px";
		div[0].style.height="272px";
		$("promptWin").style.top=-10+list_position_h*70+"px";
	}
	else if(height==240)
	{
		img[0].src=soundPromptImg[4];
		$("promptContent").style.top = SIX_LINE_TOP+"px";
		img[0].style.height="340px";
		div[0].style.height="332px";
		$("promptWin").style.top=-30+list_position_h*70+"px";
	}
	else if(height==0)
	{
		img[0].src=soundPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+list_position_h*70+"px";
	}
}
var showPromptContTimer = 0;
function showPromptCont()//显示提示语内容函数
{
	if(focusOn=="menu"&&parent.currentShowMenu==1)
	{
		clearTimeout(showPromptContTimer);
		showPromptContTimer = setTimeout(function(){$("promptWin").style.display="none"},5000);
		$("promptWin").style.top=80+list_position_h*70+"px";
		switch(list_position_h)
		{
			case 0:
			    $("promptContent").innerHTML=soundPromptCon[0];
				showPromptImg();
				break;
			case 1:
			    $("promptContent").innerHTML=soundPromptCon[3];
				showPromptImg();
				break;
			case 2:	
				$("promptWin").style.display="none";
				break;
			case 3:
				$("promptWin").style.display="none";
				break;
			case 4:
			   	$("promptWin").style.display="none";
				break;
			case 5:	
				$("promptWin").style.display="none";
				break;
			case 6:	
				$("promptWin").style.display="none";
				break;
			default:
				break;
		}
	}
	else
	{
		$("promptWin").style.display="none";
	}
}


var sndMenuRightSpanList;
var sndMenuRightLiList;
var listFormLiList;
var listFirstSpans;
function init()
{
	menuLock = factory.menuLock;
	hotelEnable = factory.hotelEnable;
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		sndMenuRightLiList = $("sndMenuRight").getElementsByTagName("li");
		sndMenuRightSpanList = $("sndMenuRight").getElementsByTagName("span");
		sndMenuRightSpanList[0].innerHTML = titleWords;
		sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "block";
		for(var i=1;i<=7;i++)
		{
			
			sndMenuRightLiList[i].style.display = "none";
		}
	}
	else
	{
		//channel.testLog("inptu = " + inputSource + ",isfirstinsound = " + top.g_sound_settings.isFirstTimeIntoSound);
		sndMenuRightLiList = $("sndMenuRight").getElementsByTagName("li");
		sndMenuRightSpanList = $("sndMenuRight").getElementsByTagName("span");
		listFormLiList = $("listForm").getElementsByTagName("li");
		progressDivList = $("adjustProgBar").getElementsByTagName("div");
		
		//sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "block";
		sndMenuRightLiList[1].style.display = "none";
		for(var i=2;i<=7;i++)
		{
			
			sndMenuRightLiList[i].style.display = "block";
		}
		
		for(var i = 0; i < 8; i++)
		{
			sndMenuRightSpanList[i].innerHTML = soundSetTitleWords[i];
		}
		
		if(top.g_sound_settings.isFirstTimeIntoSound == 1)
		{
			autoVolumeCtrl = setting.autoVolumeCtrl;
			sPDIFDelay = setting.sPDIFDelay;
			audioScene = setting.audioScene;
			audioDelay = setting.audioDelay;
		}
		else
		{
			autoVolumeCtrl = top.g_sound_settings.autoVolumeCtrl;
			sPDIFDelay = top.g_sound_settings.sPDIFDelay;
			audioScene = top.g_sound_settings.audioScene;
			audioDelay = setting.audioDelay;
		}
		soundpreset=setting.soundPresetMS12;
		soundOutputIndex=setting.soundOutput;
		sPDIFType = setting.digitalOutput;		
		if(sPDIFType==0)
			sPDIFType=0;
		else
			sPDIFType--;
		if(soundOutputIndex==0 && "output" == setting.getProperty("app.ui.hpstatus","output"))
			sndMenuRightLiList[0].style.display = "block";
		else				
			sndMenuRightLiList[0].style.display = "none";
		
		$("autoVolumeCtrlStatus").innerHTML = offOnWords[autoVolumeCtrl];
		$("sPDIFTypeStatus").innerHTML = spdifTypeWords[sPDIFType];
		$("audioScene").innerHTML = audioSceneWords[audioScene];
		$("soundOutput").innerHTML = soundOutputWords[soundOutputIndex];
		refreshMenuProgress(soundSetTitleWords[4]);
		refreshMenuProgress(soundSetTitleWords[3]);

        if("input" == setting.getProperty("app.ui.hpstatus","output") || 1 == soundOutputIndex)
        {
            list_position_h = 1;
            $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h - 1) + "px";
        }
        else
        {
            list_position_h = 0;
            $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
        }
	}
	addMouseListener();
	listFirstSpans = $("sndMenuRight").getElementsByClassName("listFirstProperty");
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
}

function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
	top.g_sound_settings = 
	{
		isFirstTimeIntoSound		: 0,
		autoVolumeCtrl				:autoVolumeCtrl,
		sPDIFType					:sPDIFType,
		sPDIFDelay					:sPDIFDelay,
		audioScene					:audioScene,
	}
}

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = function(evt){keyDownProcess(evt)};
}

var IFRAME_LEFT_OFFSET = 0;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 170 + 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_SPDIF_MAX_VALUE = 600;//sPDIFDelay 的取值范围是0-PROGRESS_SPDIF_MAX_VALUE,最大值为PROGRESS_SPDIF_MAX_VALUE
var PROGRESS_AUDIO_MAX_VALUE = 1000;
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var i = 0; i <= 7; i++)
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
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr"));
					if(list_position_h != 0) //中间一个预留，为(menuLock) && (hotelEnable) && (lockFlag)条件所用
						list_position_h--;
					$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
					if((menuLock) && (hotelEnable) && (lockFlag))
					{
					}
					else
					{
						showPromptCont();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	for(var i = 0; i < 3; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "autoVolumeCtrl" || focusOn == "audioScene" || focusOn == "sPDIFType")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
					if((menuLock) && (hotelEnable) && (lockFlag))
					{
					}
					else
					{
						showPromptCont();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	$("adjustProgMain").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "progressBar")
			{
				var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
				if(currentProgressName==soundSetTitleWords[3])
				{
						sPDIFDelay = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_SPDIF_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
						if(sPDIFDelay < 0)
						{
							sPDIFDelay = 0;
						}
						else if(sPDIFDelay > PROGRESS_SPDIF_MAX_VALUE)
						{
							sPDIFDelay = PROGRESS_SPDIF_MAX_VALUE;
						}
						progressDivList[0].style.width = parseInt(sPDIFDelay*EXTRA_PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
						progressDivList[2].style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay)*EXTRA_PROGRESS_WIDTH/PROGRESS_SPDIF_MAX_VALUE,10) + "px";
						
						setting.sPDIFDelay = sPDIFDelay;
						$("adjustProgValue").innerHTML = sPDIFDelay;
				}
				else if(currentProgressName==soundSetTitleWords[4])
				{
						audioDelay = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_AUDIO_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
						if(audioDelay < 0)
						{
							audioDelay = 0;
						}
						else if(audioDelay > PROGRESS_AUDIO_MAX_VALUE)
						{
							audioDelay = PROGRESS_AUDIO_MAX_VALUE;
						}
						progressDivList[0].style.width = parseInt(audioDelay*EXTRA_PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
						progressDivList[2].style.width = parseInt((PROGRESS_AUDIO_MAX_VALUE - sPDIFDelay)*EXTRA_PROGRESS_WIDTH/PROGRESS_AUDIO_MAX_VALUE,10) + "px";
						
						setting.audioDelay = audioDelay;
						$("adjustProgValue").innerHTML = audioDelay;
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}
function initPass()
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
			menuLock = 0;
			hotelEnable = 0;
			lockFlag = 0;
			init();
			parent.showPage(1);
		}
	}
}

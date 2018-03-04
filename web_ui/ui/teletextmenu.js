/******************************************************************************
*Description: Teletext Menu
*Author:    sunjianping
*Date:  2013.4.25
*Others:
******************************************************************************/
top.keySetForUI(1);
var ttxLanguageList           = top.ttxLanguage;
var ttxNameList               = top.ttxOptions;
var ttxShowCon                = [top.offOn[1],top.offOn[0],top.okCancel[0]]
var position                  = 0;
//焦点在显示列表中的纵向序号
var setting                   = top.g_setting;
var positionV                 = 0;
var ttxCycleSubPageState      = 0;//CycleSubPage 的灰亮 1：亮 0：灰
var ttxNewsFlashState         = 0;//Newflash 的灰亮 1：亮 0：灰
var ttxReVeal                 = setting.ttsReVel;//0:off 1:on
var ttxCycleSubPage           = setting.ttsCycleSubPage//0:off 1:on
var ttxLanguage               = setting.ttsLanguage;
var ttxReVealName; 
var ttxCycleName;
var ttxLanguageName;
var ttxAlarmPageName;
var ttxNewsFlashName;
var Teletext_timer            = 0;
var menuDisplayFlag           = 0;
var ttxPressTimesFlag         = 0;
var multimedia                = top.g_media;
var volume                    = top.g_channel.volume;
var muteFlag                  = 0;
var autoNewFalg               = 0;
var time                      = "";
var timeEnterFlag             = 0;//Alarm page 输入时间标识 1 为正在输入 0 表示没有在输入
var MENU_START 		          = 110;//菜单焦点移动起始位置
var MENU_STEP 		          = 80;//主菜单焦点移动的step
/*
getElementShowState();//得到一个字符串需要过滤
*/
/******************************************
*初始化函数
*******************************************/
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_SIGNAL_UNLOCK://unlock
		case top.E_PVR_NO_SIGNAL:
		{
			document.location.href = "channelPlay.html";
		}
		break;
		case top.E_TELETEXT_OFF:
		{
			document.location.href = "channelPlay.html";
		}
		break
		case top.E_TELETEXT_NEWSFLASH:
		{
			showTTXMenu();
			positionV=4;
			position = MENU_START+ positionV*MENU_STEP;
		    $("focus").style.top = position+"px";
		}
		break;
		case top.E_SCART_CHANGE_INPUT_SRC:
		case top.E_CEC_COMMON:
		{
			document.location.href = "channelPlay.html";
			top.systemEventProc(evt);
			break;
		}
		case top.E_READY_TO_CHANGE_CEC:
		case top.E_READY_TO_CHANGE_SCART:
		{
			ttxPressTimesFlag=0;
			setting.closettx();
			top.systemEventProc(evt);
			break;
		}
		case top.E_BOOKING_PLAY_START:
		case top.E_BOOKING_RECORD_START:
		case top.E_BOOKING_AHEAD_PLAY_START:
		case top.E_BOOKING_AHEAD_RECORD_START:
		case top.E_CI_CAM_NAME_READY:
		case top.E_CI_DATA_READY:
		{
			setting.closettx();
			top.systemEventProc(evt);
		}
		break;
		case top.E_TELETEXT_NEWSFLASH_OFF:
		{
			top.g_channel.testLog("menuDisplayFlag======"+menuDisplayFlag);
			if(menuDisplayFlag)
			{
				showTTXMenu();
				positionV = 0;
				position = MENU_START+ positionV*MENU_STEP;
				$("focus").style.top = position+"px";
			}
			else
			{
				//alert("showTTXMenu");
				//showTTXMenu();
			}

		}
		break;
		case top.E_POWER_OFF_TIMER:
		{
			ttxPressTimesFlag=0;
			setting.closettx();
			top.systemEventProc(evt);
		}
		break;
		case top.E_MEDIA_USB_INSERTED:
			break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		{
			top.systemEventProc(evt);
		}
		break;
		case top.E_DLNA_DMR_PUSH_MOVIE:
		case top.E_DLNA_DMR_PUSH_MUSIC:
		case top.E_DLNA_DMR_PUSH_PICTURE:
		{
			ttxPressTimesFlag=0;
			setting.closettx();
			top.systemEventProc(evt);
		}
		break;
		default:
			//top.systemEventProc(evt);
			break;
	}
}
var listFirstSpans;
var listSecondSpans;
function init()
{
	top.RemoteConntrolType = "Teletext"; //lqt--设置虚拟遥控器类型
	top.stopTimeout();
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	
	if (top.mute_status == 1)
	{
		 top.$("mute").style.display = "none";
		muteFlag=top.mute_status;
	}
	setting.freeze = 0;
	ttxPressTimesFlag=setting.checkTeletextStatus()-1;
	listFirstSpans = $("file_list_table").getElementsByClassName("file_name");
	listSecondSpans = $("file_list_table").getElementsByClassName("file_type");
	addMouseListener();

}

document.onkeydown = keyproc;
function keyproc(evt)
{
	var keycode = evt.which;
	//快捷键
	switch(keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt
			if(top.virtualRemoteState == 0)
			{
				top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote(top.RemoteConntrolType);
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
			console.log("lqt---teletextmenu.js---clientX: "+clientX);
			console.log("lqt---teletextmenu.js---clientY: "+clientY);
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
		case top.VK_POWER://power

			top.keyDownProcess(evt);
			return;
		default:
			break;
	}
	var ret = true;
	//alert(evt.which);
	if(menuDisplayFlag)
	{
		switch(keycode)
		{
			case top.VK_UP:
			{
				//up
				onUp();
				ret = false;
				break;
			}
				
			case top.VK_DOWN:
			{
				//down
				onDown();
				ret = false;
				break;
			}
			case top.VK_LEFT:
			{
				onLeft();
				ret = false;
				break; 
			}
			//右键  
			case top.VK_RIGHT:
			{
				onRight();
				ret = false;
				break;
			}
			case top.VK_ENTER:
			{
				if(positionV==4)
				{
					ttxPressTimesFlag=0;
					setting.ttxtWaitNewflash(); //后续添加接口
					document.location.href = "channelPlay.html";
				}
				else if(positionV==3)
				{
					if(time.length<4)
					{
						return;
					}
					ttxPressTimesFlag=0;
					setting.ttxWaitAlarmpage(parseInt(time,10)); //后续添加接口
					document.location.href = "channelPlay.html";
				}
				break;
			}
			case top.VK_MENU:
			{
				if(menuDisplayFlag)
				{
					hiddeTTXMenu();
				}
				else
				{
					//alert("showTTXMenu");
					showTTXMenu();
				}
				break;	
			}
			case top.VK_EXIT:
			{
				//alert("hiddeTTXMenu");
				hiddeTTXMenu();
				ret=false;
				break;
			}
			case top.VK_CHANNEL_UP:
			case top.VK_CHANNEL_DOWN:
			{
				multimedia.keyEvent(evt.which);
				break;
			}
			case top.VK_VOLUME_DOWN://volume down
			{
				if(volume<=0)
				return;
				else
				{
					volume--;
				}
				top.g_channel.volume=volume;
				break;
			}
		    case top.VK_VOLUME_UP://volume up
			{
				if(volume>=100 || top.g_setting.maxVolume == volume)
				return;
				else
				{
					volume++;
				}
				top.g_channel.volume=volume;
				if(muteFlag==1)
				{
					muteFlag=0;
					top.mute_status=0;
					top.g_setting.mute = 0;
				}
				break;
			}
			case top.VK_MUTE://mute
			{
				if(muteFlag==0)
				{
					muteFlag=1;
					top.mute_status=1;
					top.g_setting.mute = 1;
				}
				else if(muteFlag==1)
				{
					muteFlag=0;
					top.mute_status=0;
					top.g_setting.mute = 0;
				}
				break;
			}
			case top.VK_0:
			{
				setValue(0);
				break;
			}
			case top.VK_1:
			{
				setValue(1);
				break;
			}
			case top.VK_2:
			{
				setValue(2);
				break;
			}
			case top.VK_3:
			{
				setValue(3);
				break;
			}
			case top.VK_4:
			{
				setValue(4);
				break;
			}
			case top.VK_5:
			{
				setValue(5);
				break;
			}
			case top.VK_6:
			{
				setValue(6);
				break;
			}
			case top.VK_7:
			{
				setValue(7);
				break;
			}
			case top.VK_8:
			{
				setValue(8);
				break;
			}
			case top.VK_9:
			{
				setValue(9);
				break;
			}
			default:
			{
				//top.keyDownProcess(evt);
				break;
			}
		}
	}
	else
	{
		switch(evt.which)
		{
			case top.VK_MENU:
			{
				//lqt
				if(top.virtualRemoteState == 1)
				{
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
						
				}
				showTTXMenu();
				break;
			}
			case top.VK_EXIT:
			{
				//lqt
				if(top.virtualRemoteState == 1)
				{
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
						
				}
				setting.closettx();
				document.location.href = "channelPlay.html";
			    break;
			}
		   case top.VK_VOLUME_DOWN://volume down
			{
				if(volume<=0)
				return;
				else
				{
					volume--;
				}
				top.g_channel.volume=volume;
				break;
			}
		    case top.VK_VOLUME_UP://volume up
			{
				if(volume>=100 || top.g_setting.maxVolume == volume)
				return;
				else
				{
					volume++;
				}
				top.g_channel.volume=volume;
				if(muteFlag==1)
				{
					muteFlag=0;
					top.mute_status=0;
					top.g_setting.mute = 0;
				}
				break;
			}
			case top.VK_MUTE://mute
			{
				if(muteFlag==0)
				{
					muteFlag=1;
					top.mute_status=1;
					top.g_setting.mute = 1;
				}
				else
				{
					muteFlag=0;
					top.mute_status=0;
					top.g_setting.mute = 0;
				}
				break;
			}
			case top.VK_TELETEXT:
			{
			    ttxPressTimesFlag=setting.checkTeletextStatus()-1;
				switch(ttxPressTimesFlag)
				{
					case 1:
					{
						setting.halfttx();
						break;
					}
					case 2:
					{
						ttxPressTimesFlag=0;
						setting.closettx();
						document.location.href = "channelPlay.html";
						break;
					}
					default:
					break;
				}
				break;
			}
			default:
			{	
				//top.keyDownProcess(evt);	
				multimedia.keyEvent(evt.which);
				break;
			}
		}
	}
	return ret;
}

//得到标签元素
function $(id)
{
	return document.getElementById(id);
}

//向上键处理函数
function onUp()
{
	
	
	//游标位置减1
	positionV--;
	//alert("positionV="+positionV);
	//alert("up"+positionV);
	if(positionV < 0)
	{
		//var length = file_list.length;
		positionV=4;
		getpositionV(1);
		position = MENU_START+ positionV*MENU_STEP;
		$("focus").style.top = position+"px";
		
	}
	else
	{
		getpositionV(1);
		position = MENU_START+ positionV*MENU_STEP;
		$("focus").style.top = position+"px";
		//Showlist(folder_list);
	}
	top.doEleScrForNoOption(listFirstSpans,positionV, -1);
	top.doEleScrForNoOption(listSecondSpans,positionV, -1);
}
//向下键处理函数
function onDown()
{
		//游标位置加1
	positionV++;
	//alert("position"+positionV);
	if(positionV==5)
	{
		positionV=0;
		position = MENU_START+ positionV*MENU_STEP;
		$("focus").style.top = position+"px";
	}
	else
	{
		getpositionV(0);
		position = MENU_START+ positionV*MENU_STEP;
		$("focus").style.top = position+"px";
	}
	top.doEleScrForNoOption(listFirstSpans,positionV, 1);
	top.doEleScrForNoOption(listSecondSpans,positionV, 1);
}


function onRight()
{
	switch(positionV)
	{
		case 0:
		{
			if(ttxReVeal==0)
			{
				ttxReVeal=1;
				ttxReVealName[2].innerHTML =ttxShowCon[0];
				setting.ttsReVel=1;
			}
			else
			{
				ttxReVeal=0;
				ttxReVealName[2].innerHTML =ttxShowCon[1];
				setting.ttsReVel=0;
			}
			break;
		}
		case 1:
		{
			if(ttxCycleSubPageState==1)
			{
				if(ttxCycleSubPage==0)
				{
					ttxCycleSubPage=1;
					ttxCycleName[2].innerHTML =ttxShowCon[0];
					setting.ttsCycleSubPage=1;
				}
				else
				{
					ttxCycleSubPage=0;
					ttxCycleName[2].innerHTML =ttxShowCon[1];
					setting.ttsCycleSubPage=0;
				}
			}
		
			break;
		}
		case 2:
		{
			ttxLanguage++;
			if(ttxLanguage>8)
			{
				ttxLanguage=0;
			}
			ttxLanguageName[2].innerHTML =ttxLanguageList[ttxLanguage];
			setting.ttsLanguage = ttxLanguage;
			break;
		}
		default:
			break;
		
	}
}

function onLeft()
{
	switch(positionV)
	{
		case 0:
		{
			if(ttxReVeal==0)
			{
				ttxReVeal=1;
				ttxReVealName[2].innerHTML =ttxShowCon[0];
				setting.ttsReVel=1;
			}
			else
			{
				ttxReVeal=0;
				ttxReVealName[2].innerHTML =ttxShowCon[1];
				setting.ttsReVel=0;
			}
			break;
		}
		case 1:
		{
			if(ttxCycleSubPageState==1)
			{
				if(ttxCycleSubPage==0)
				{
					ttxCycleSubPage=1;
					ttxCycleName[2].innerHTML =ttxShowCon[0];
					//set_Cycle_SubPage(ttxCycleSubPage);
					setting.ttsCycleSubPage=1;
				}
				else
				{
					ttxCycleSubPage=0;
					ttxCycleName[2].innerHTML =ttxShowCon[1];
					//set_Cycle_SubPage(ttxCycleSubPage);
					setting.ttsCycleSubPage=0;
				}
			}
		
			break;
		}
		case 2:
		{
			//alert("Value"+ttxLanguageIndexValue);
			ttxLanguage--;
			if(ttxLanguage<0)
			{
				ttxLanguage=8;
			}
			ttxLanguageName[2].innerHTML =ttxLanguageList[ttxLanguage];
			setting.ttsLanguage = ttxLanguage;
			break;
		}
		default:
			break;
		
	}
}
function closeWin() {

    window.opener=null;

    window.open('','_self');

    window.close();

}
function hiddeTTXMenu()
{
	$("menu").style.display = "none";
	$("focus").style.display = "none";
	time="";
	timeEnterFlag=0;
	ttxAlarmPageName[2].innerHTML = "----";
	positionV = 0;
	menuDisplayFlag=0;
}
function showTTXMenu()
{
	ttxReVeal=setting.ttsReVel;//0:off 1:on
	ttxCycleSubPage=setting.ttsCycleSubPage//0:off 1:on
	ttxLanguage=setting.ttsLanguage;
	var s=setting.getElementShowState();
	var state=s.split("#");
	ttxCycleSubPageState=state[1];
	ttxNewsFlashState=state[2];
	position=MENU_START+positionV*MENU_STEP;
	$("focus").style.top=position+"px";
	var folderBox = $("file_list_table").getElementsByTagName("ul")[0];
	var lis = folderBox.getElementsByTagName("li");
	ttxReVealName = lis[0].getElementsByTagName("div");
	ttxReVealName[1].innerHTML =ttxNameList[0];
	if(ttxReVeal==0)
	{
		ttxReVealName[2].innerHTML =ttxShowCon[1];
	}
	else
	{
		ttxReVealName[2].innerHTML =ttxShowCon[0];
	}
	ttxCycleName = lis[1].getElementsByTagName("div");
	ttxCycleName[1].innerHTML =ttxNameList[1];
	if(ttxCycleSubPageState==0)
	{
		lis[1].style.color ="#999";
	}
	else
	{
		lis[1].style.color ="#FFFFFF";
	}
	if(ttxCycleSubPage==0)
	{
		ttxCycleName[2].innerHTML =ttxShowCon[1];
	}
	else
	{
		ttxCycleName[2].innerHTML =ttxShowCon[0];
	}
	ttxLanguageName = lis[2].getElementsByTagName("div");
	ttxLanguageName[1].innerHTML=ttxNameList[2];
	ttxLanguageName[2].innerHTML =ttxLanguageList[ttxLanguage];
	ttxAlarmPageName = lis[3].getElementsByTagName("div");
	
	ttxAlarmPageName[1].innerHTML=ttxNameList[3];
	ttxAlarmPageName[2].innerHTML="----";
	ttxNewsFlashName = lis[4].getElementsByTagName("div");
	ttxNewsFlashName[1].innerHTML=ttxNameList[4];
	ttxNewsFlashName[2].innerHTML=ttxShowCon[2];
	if(ttxNewsFlashState==0)
	{
		lis[4].style.color ="#999";
	}
	else
	{
		lis[4].style.color ="#FFFFFF";
	}
	$("menu").style.display = "block";
	if(setting.checkTeletextStatus()-1==1)
	{
		$("menu").style.left="0px";
		$("focus").style.left="3px";
	}
	else if(setting.checkTeletextStatus()-1==2)
	{
		$("menu").style.left="960px";
		$("focus").style.left="963px";
	}
	$("focus").style.display = "block";
	menuDisplayFlag=1;
	top.doEleScrForNoOption(listFirstSpans,positionV, 0);
	top.doEleScrForNoOption(listSecondSpans,positionV, 0);
}
function getLanguageIndex(s)
{
	
	for(ttxLanguageIndexValue=0;ttxLanguageIndexValue<7;ttxLanguageIndexValue++)
	{
		if(ttxLanguageIndex[ttxLanguageIndexValue]==s)
		{
			break;
		}
	}
}
function getpositionV(s)
{
	switch(positionV)
	{
		case 4:
		{
			if(s==0)//向下走
			{
				if(ttxNewsFlashState==0)
				{
					positionV=0;
				}
			}
			else
			{
				if(ttxNewsFlashState==0)
				{
					positionV=3;
				}
			}
		}
		break;
		case 1:
		{
			if(s==0)//向下走
			{
				if(ttxCycleSubPageState==0)
				{
					positionV=2;
				}
			}
			else
			{
				if(ttxCycleSubPageState==0)
				{
					positionV=0;
				}
			}
			break;
		}
	}
}
function setValue(value)
{
	if(timeEnterFlag==0)
	{
		time="";
		ttxAlarmPageName[2].innerHTML="----";
	}
	if(positionV==3&&time.length==0)
	{
		if(value>2)
		{
			return;
		}
		else
		{
			timeEnterFlag=1;
			time=time+value;
			ttxAlarmPageName[2].innerHTML = time+"---";
		}
	}
	else if(positionV==3&&time.length==1)
	{
		switch(parseInt(time,10))
		{
			case 0:
			case 1:
			timeEnterFlag=1;
			time=time+value;
			ttxAlarmPageName[2].innerHTML = time+"--";
			break;
			case 2:
			if(value>4)
			{
				return;
			}
			else
			{
				timeEnterFlag=1;
				time=time+value;
				ttxAlarmPageName[2].innerHTML = time+"--";
			}
			break;
			default:
			break;
		}
	}
	else if(positionV==3&&time.length==2)
	{
		if(value>5)
		{
			return;
		}
		else
		{
			timeEnterFlag=1;
			time=time+value;
			ttxAlarmPageName[2].innerHTML = time+"-";
		}
	}
	else if(positionV==3&&time.length==3)
	{
			timeEnterFlag=1;
			time=time+value;
			ttxAlarmPageName[2].innerHTML =  time;
	}
	else if(positionV==3&&time.length>=4)
	{
		timeEnterFlag=0;
		setValue(value)
	}
}
function uninit()
{
	ttxPressTimesFlag=0;
	top.keySetForUI(0);
	if(muteFlag==1)
	{
		 top.$("mute").style.display = "block";
	}
	top.timeoutFuc.timeoutEnable=1;
    top.commonTeletextShow = 0;
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2){hiddeTTXMenu();};//right key
	}
	var lis=$("file_list_table").getElementsByTagName("li");
	lis[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
				positionV = 0;
				position = MENU_START+ positionV*MENU_STEP;
				$("focus").style.top = position+"px";
		}
	}
	var imgs=lis[0].getElementsByTagName("img");
	imgs[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(positionV==0)
			{
				onLeft();
			}
		}
	}
	imgs[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(positionV==0)
			{
				onRight();
			}
		}
	}
	lis[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(ttxCycleSubPageState==1)
			{
				positionV = 1;
				position = MENU_START+ positionV*MENU_STEP;
				$("focus").style.top = position+"px";
			}
		}
	}
	var imgs=lis[1].getElementsByTagName("img");
	imgs[0].onmousedown = function(evt){
		if(evt.button == 0){//left
			if(positionV==1)
			{
				onLeft();
			}
		}
	}
	imgs[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(positionV==1)
			{
				onRight();
			}
		}
	}
	lis[2].onmousedown = function(evt){
		if(evt.button == 0){//left key
				positionV = 2;
				position = MENU_START+ positionV*MENU_STEP;
				$("focus").style.top = position+"px";
		}
	}
		var imgs=lis[2].getElementsByTagName("img");
	imgs[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(positionV==2)
			{
				onLeft();
			}
		}
	}
	imgs[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(positionV==2)
			{
				onRight();
			}
		}
	}
	lis[3].onmousedown = function(evt){
		if(evt.button == 0){//left key

			positionV = 3;
			position = MENU_START+ positionV*MENU_STEP;
			$("focus").style.top = position+"px";
			if(time.length<4)
			{
				return;
			}
			ttxPressTimesFlag=0;
			setting.ttxWaitAlarmpage(parseInt(time,10)); //后续添加接口
			document.location.href = "channelPlay.html";
		}
	}
	lis[4].onmousedown = function(evt){
		if(evt.button == 0){//left key
				if(ttxNewsFlashState==1)
				{
					positionV = 4;
					position = MENU_START+ positionV*MENU_STEP;
					$("focus").style.top = position+"px";
					ttxPressTimesFlag=0;
					setting.ttxtWaitNewflash(); //后续添加接口
					document.location.href = "channelPlay.html";
				}
		}
	}
	$("focus").onmousedown = function(evt){
		if(evt.button == 0){//left key
				if(positionV==3)
				{
					if(time.length<4)
					{
						return;
					}
					ttxPressTimesFlag=0;
					setting.ttxWaitAlarmpage(parseInt(time,10)); //后续添加接口
					document.location.href = "channelPlay.html";
				}
				else if(positionV==4)
				{
					ttxPressTimesFlag=0;
					setting.ttxtWaitNewflash(); //后续添加接口
					document.location.href = "channelPlay.html";
				}
		}
	}
}
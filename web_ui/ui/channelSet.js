var chSetListName			= top.chOptions;
var offOnWords				= top.offOn;
var chListTypeWords			= [top.others[1],""];
var okCancelWords			= top.okCancel;
var diagnosticsWords 		= [top.chDiagOptions[0],top.chDiagOptions[1],top.chDiagOptions[2],top.chDiagOptions[3],top.chDiagOptions[4],top.chDiagOptions[5],top.chScanPara[9]];
var chPromptCon             = [top.prompts[18],top.prompts[19],top.prompts[20],top.prompts[21]];
var passIncorrectWords      = top.passError;

document.onnotify 			= notifyProcess;
var chPromptImg            	= ["images/info-1_2.png","images/info-1_3.png","images/info-1_4.png","images/info-1_5.png","images/info-1_6.png"];
var mainFocus               = ["images/Focus_Frame/Focus-1.png","images/Focus_Frame/Focus-2.png"];
var list_position_h				= 0;
var form_position_h			= 0;					//弹出框焦点位置
var channel					= top.g_channel;
var setting					= top.g_setting;
var channelListState		= 0;					//频道列表有无的状态：0 没有频道列表，1 有频道列表channel.channelProgramStatus();
var isCiOpExist 			= 0;					//有无ci选择控制项channel list type：0 不存在，1 存在
var channelListType			= 0;					//channelListType值,0 Broadcast,> 0 other
var timeshiftEnableStatus	= 0;					//time shift enable:0 unable ,1 enable
var focusOn 				= "menu";				//menu,channelListTypeForm,diagnostics,timeShift
var source					= 0;

var SUB_MENU_START 			= 90;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;					//二级级主菜单焦点移动的step
var FORM_STEP				= 80;					//弹出框焦点移动的step
	
var psswordWords			= top.others[2];
var password				= "";					//密码
var factory = top.g_factory;
var systemSetTitleWord 		= top.sysOptions[3];
var noRelatedChannel	    = top.noRelatedChannel;
var	passwordLength			= 0;					//密码字串的长度

var menuList =[
{name:"channelScan",param:function(){doChannelScan();},showFlag:1},
{name:"channelList",param:function(){doChannelList();},showFlag:1},
{name:"EPG",param:function(){doEPG();},showFlag:1},
{name:"organiser",param:function(){doOrganiser();},showFlag:1},
{name:"channelDiagnostics",param:function(){doChannelDiagnostics();},showFlag:1},
{name:"timeshift",param:function(){doTimeshift();},showFlag:1},
{name:"subtitle",param:function(){doSubtitle();},showFlag:1},
{name:"teletext",param:function(){doTeletext();},showFlag:1},
{name:"channelListType",param:function(){doChannelListType();},showFlag:1}
]

function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_CHANNEL_PLAY_END://yiling0609
		case top.E_DTV_SERVICE_PLAY:
		{
			if(focusOn == "diagnostics")
			{
				initDiagnostics();
			}
		}
		break;
		default:
			top.systemEventProc(evt);
			break;
	}
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function keyDownProcess(evt)
{
	//channel.testLog("in channelset keydown");
	var ret = true;
	var keycode = evt.which;
	if(keycode!=top.VK_CHANNEL_UP&&keycode!=top.VK_CHANNEL_DOWN)//yiling0609
	{
		oldKey=0xffff;
	}
	switch (keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt---密码输入框会走此逻辑
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
			console.log("lqt---channelSet.js---clientX: "+clientX);
			console.log("lqt---channelSet.js---clientY: "+clientY);
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
		case top.VK_RIGHT:	
		case top.VK_ENTER:
		{
			//OK 键
			doEnter();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		case top.VK_LEFT:
			toBack();
			ret = false;
			break;  
		case top.VK_MENU: //menu
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
			if(focusOn == "password" || focusOn == "installationLock")
			{
				doCheck(evt.which - 48);
				ret = false;
			}
	        break;
		case top.VK_CHANNEL_UP://认证新增 //yiling0609
			if(focusOn == "diagnostics")
			{
				pressChannelUP();
			}
			else
			{
				top.keyDownProcess(evt);
			}
			break;
		case top.VK_CHANNEL_DOWN://认证新增
			if(focusOn == "diagnostics")
			{
				pressChannelDown();
			}
			else
			{
				top.keyDownProcess(evt);
			}
			break;
		default:
			top.keyDownProcess(evt);
		break;
	}
	showPromptCont();
	return ret;
}
/*//认证新增 start*/ //yiling0609
var oldKey = 0xffff;
var channelOldKeyTimer = 0;
var channelIndex = 0;
function pressChannelUP()
{
	if(oldKey==top.VK_CHANNEL_UP)
	{
		return;
	}
	else
	{
		clearTimeout(channelOldKeyTimer);
		oldKey = top.VK_CHANNEL_UP;
	}
	if(top.g_channel.checkhbbtvStatus()==2)
	{
		 top.$("operatePage").src = "";
		 top.$("otherPage").src ="";
		 top.$("main").src = "hbbtvCancelRemind.html?"+top.VK_CHANNEL_UP;
		 top.$("main").style.display = "block";
		 top.main.focus();
		 top.setFrameFocusPage("main");
		 return;
	}
	channelUpKey();
	channelOldKeyTimer=setTimeout(function(){oldKey = 0xffff;},200);
}
function pressChannelDown()
{
	if(oldKey==top.VK_CHANNEL_DOWN)
	{
		return;
	}
	else
	{
		clearTimeout(channelOldKeyTimer);
		oldKey = top.VK_CHANNEL_DOWN;
	}
	if(top.g_channel.checkhbbtvStatus()==2)
	{
		 top.$("operatePage").src = "";
		 top.$("otherPage").src ="";
		 top.$("main").src = "hbbtvCancelRemind.html?"+top.VK_CHANNEL_DOWN;
		 top.$("main").style.display = "block";
		 top.main.focus();
		 top.setFrameFocusPage("main");
		 return;
	}
	channelDownKey();
	channelOldKeyTimer=setTimeout(function(){oldKey = 0xffff; },200);
}
function channelChange()//上下换台时播放节目接口
{

	if(top.recordStatusFlag == 1)
	{
		top.$("globleShow").contentWindow.hiddenRecord();
		top.$('main').src = "pvr/Pvr.html?channelChange&"+channelIndex;
		return;
	}
	else if(top.timeShiftStatusFlag == 1)
	{
		top.$("globleShow").contentWindow.hiddenTimeShift();
		top.$('main').src = "pvr/timeshift.html?channelChange&"+channelIndex;
		return;
	}
	top.g_openMheg5State=0;
	top.channelLock =0; 
	top.parentalLock=0;  
	top.inputLock = 0;
	top.currentChannelIndex = channelIndex;
	channel.playByIndex(channelIndex);
	var previousChannel = channel.getChannelInfoByIndex(channelIndex);
	if(previousChannel.serviceType==0)
	{
		top.jumpPage();
	}
}
function channelDownKey()
{
	var systemCountry = top.g_channel.systemCountry;
	if(top.inputLock != 1)
	{
		if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
		{
			var currentIndex = channel.currentIndex;
			channelIndex = top.g_channel.getPreviousIndexByIndex(channelIndex);
			if(channelIndex>=65535)
			{
				channelIndex=currentIndex;
			}
			if(currentIndex != channelIndex && channelIndex<65535)
			{
				channelChange();
			}
		}
		else
		{
			var currentIndex = channel.currentIndex;
			var firstIndex = channel.firstIndex;
			var TempIndex = top.g_channel.getPreviousIndexByIndex(channelIndex);
			
			if(currentIndex<=firstIndex||channelIndex<=firstIndex || TempIndex>=65535)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&12";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&12";
					return;
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
				top.g_channel.inputSource = 12;
				top.jumpPage();
			}
			else
			{
				channelIndex = TempIndex;
				if(currentIndex != channelIndex && channelIndex<65535)
				{
					channelChange();
				}
			}
		}
		
	}
	else if(top.inputLock == 1)
	{
		var systemCountry = top.g_channel.systemCountry;
		if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
		{
		}
		else
		{

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
			top.g_channel.inputSource = 12;
			top.jumpPage();
		}
	}
}
function channelUpKey()
{
	var systemCountry = top.g_channel.systemCountry;
	if(top.inputLock != 1)
	{
		if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
		{
			var currentIndex = channel.currentIndex;
			channelIndex = channel.getNextIndexByIndex(channelIndex);
			if(channelIndex>=65535)
			{
				channelIndex=currentIndex;
			}
			if(currentIndex != channelIndex && channelIndex<65535)
			{
				channelChange();
			}
		}
		else
		{
			var currentIndex = channel.currentIndex;
			var endIndex = channel.endIndex;
			var TempIndex = top.g_channel.getNextIndexByIndex(channelIndex);
			if(currentIndex>=endIndex||channelIndex>=endIndex || TempIndex>=65535)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&11";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&11";
					return;
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
				top.g_channel.inputSource = 11;
				top.jumpPage();
			}
			else
			{
				channelIndex = TempIndex;
				if(currentIndex != channelIndex && channelIndex<65535)
				{
					channelChange();
				}
			}
		}
	}
	else if( top.inputLock == 1)
	{
		var systemCountry = top.g_channel.systemCountry;
		if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 )
		{
		}
		else
		{
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
			top.g_channel.inputSource = 11;
			top.jumpPage();
		}
	}
	channelInfo_timer = setTimeout("hideInfoAndShowRemind()",10000);
}
/*认证新增 end*/


function $(id)
{
    return document.getElementById(id);
}
function toDown()//按下键
{
	if(focusOn == "menu")
	{
		if(list_position_h >= findMaxPosition())
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		refreshFocusOfMenuList();
	}
	else if(focusOn == "channelListTypeForm" || focusOn == "timeShift")
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
}
function toUp()//按上键
{
	if(focusOn == "menu")
	{
		if(list_position_h <= 0)
		{
			list_position_h = findMaxPosition();
		}
		else
		{
			list_position_h--;
		}
		refreshFocusOfMenuList();
	}
	else if(focusOn == "channelListTypeForm" || focusOn == "timeShift")
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
}

var install_lock = 0;//off 0    on 1
function doEnter()//按OK/右键
{
	if(focusOn == "menu")
	{
		findFunction(list_position_h);
	}
	else if(focusOn == "channelListTypeForm")
	{
		$("listFocus").src=mainFocus[0];
		$('listForm').style.display="none";
		channelListType = form_position_h;
		setting.ciChannelListType = channelListType;
		$("chListTypeStatus").innerHTML = chListTypeWords[channelListType];
		focusOn = "menu";
	}
	else if(focusOn == "timeShift")
	{
		$("listFocus").src=mainFocus[0];
		$('listForm').style.display="none";
		timeshiftEnableStatus = form_position_h;
		channel.timeshiftEnableStatus = timeshiftEnableStatus;
		$("timeshiftEnableStatus").innerHTML = offOnWords[timeshiftEnableStatus];
		focusOn = "menu";
	}
	else if(focusOn == "diagnostics")
	{
		toBack();
	}

}

function toBack()//按左键
{
	if(focusOn == "menu")
	{
		parent.returnPage(1);
	}
	else if(focusOn == "channelListTypeForm" || focusOn == "timeShift")
	{
		$("listFocus").src=mainFocus[0];;
		$('listForm').style.display="none";
		focusOn = "menu";
	}
	else if(focusOn == "diagnostics")
	{
		if(diagnosticsTimer)
		{
			clearTimeout(diagnosticsTimer);
		}
		parent.showPage(1);
		$("diagnosticsForm").style.display = "none";
		
		focusOn = "menu";
	}
	else if(focusOn == "password" || focusOn == "installationLock")
	{
		$("passForm").style.display = "none";
		parent.showPage(1);
		focusOn = "menu";
	}
}

function doChannelScan()
{
	if((hotelChLock)&&(hotelEnable))
	{
		initPassForm();
		focusOn = "password";
	}
	else
	{
		if(install_lock == 1)
		{
			initPassForm();
			focusOn = "installationLock";
		}
		else
		{
			parent.jumpPage(2,"channelSetting/channelScan.html");
		}
	}
}
function doChannelList()
{
	if(top.recordStatusFlag == 1)
	{
		top.$("globleShow").contentWindow.hiddenRecord();
		top.$('otherPage').src = "";
		top.$('operatePage').src = "";
		top.$('main').src = "pvr/Pvr.html?channelList";
		top.main.focus();
		top.setFrameFocusPage("main");
	}
	else if(top.timeShiftStatusFlag == 1)
	{
		top.operateWhenTimeshifting("channelList");
	}
	else
	{
		top.clearMyTimeout();
		top.$("main").src="channelPlay.html";
		top.$("operatePage").src="channelList.html"
		top.operatePage.focus();
		top.setFrameFocusPage("operatePage");
	}
}
function doEPG()
{
	if(source == 1 && top.inputLock != 1)
	{
		if(top.recordStatusFlag == 1)
		{
			top.clearMyTimeout();
			top.$("globleShow").contentWindow.hiddenRecord();
			top.$('otherPage').src = "";
			top.$('operatePage').src = "";
			top.$('main').src = "pvr/Pvr.html?guide"
			top.main.focus();
		}
		else if(top.timeShiftStatusFlag == 1)
		{
			top.$("globleShow").contentWindow.hiddenTimeShift();
			top.$('main').src = "pvr/timeshift.html?guide";
			top.main.focus();
		}
		else
		{
			top.jumpHotkeyPage("programGuide.html");
		}
	}
	else
	{
		top.clearMyTimeout();
		top.g_remindWord = "notAvailable";
		$("main").src = "intermediate.html";
		top.main.focus();
		$("operatePage").src = "";
	}
}
function doOrganiser()
{
	parent.jumpPage(2,"channelSetting/channelOrganizer.html");
}
function doChannelDiagnostics()
{
	initDiagnostics();
	focusOn = "diagnostics";
}
function doTimeshift()
{
	$("listFocus").src=mainFocus[1];
	initTimeShiftState();
	focusOn = "timeShift";
}
function doSubtitle()
{
	parent.jumpPage(2,"channelSetting/subtitle.html");
}
function doTeletext()
{
	parent.jumpPage(2,"channelSetting/teletext.html");
}
function doChannelListType()
{
	$("listFocus").src=mainFocus[1];
	initChListTypeForm();
	focusOn = "channelListTypeForm";
}

function findFunction(postion)
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
function findMaxPosition()
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
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
		if(menuList[i].showFlag==1)
		{
			num++;
		}
	}
	return num;
}
function refreshFocusOfMenuList()
{
	$("listFocus").style.top=SUB_MENU_START+list_position_h*SUB_MENU_STEP+"px";
}
/*
描述：初始化diagnostics弹出框
参数：
全局变量：
*/
var diagnosticsTimer = 0;
var tManuChIdSum = 0;
var frequency = 0;
var tManuChIdList;
function initDiagnostics()
{
	var stren = 0;
	var quali = 0;
	quali = setting.channelCurrentSignalQuality;
	
	if(quali==0)
	{
		stren = 0;
	}
	else
	{
    	stren = setting.channelCurrentSignalStrength;
	}
	
	$("diagnosticsTitle").innerHTML = chSetListName[4];
	
	var labelList = $("diagnosticsForm").getElementsByTagName('label');
	for(var i = 0; i < 7; i++)
	{
		labelList[i].innerHTML = diagnosticsWords[i];
	}
	labelList[2].innerHTML = top.chScanParaMHZ[0];
	labelList[7].innerHTML = okCancelWords[0];
	
	var spanList = $("diagnosticsForm").getElementsByTagName('span');
	spanList[0].innerHTML = stren;
	spanList[1].innerHTML = quali;
	var width = stren * 2;
	$('strength').style.width = width + "px";
	width = quali * 2;
	$('quality').style.width = width + "px";


       
	spanList[5].style.width = "300px" ;
    frequency = setting.channelCurrentSignalFreq;//KHz
	spanList[2].innerHTML = frequency/1000;
	spanList[3].innerHTML = "0x" +　setting.serviceId.toString(16);
	spanList[4].innerHTML = "0x" +　setting.networkId.toString(16);
	spanList[5].innerHTML = replaceT(setting.networkName);
	var tuner = channel.tunerMode;
	
	if(tuner==1)//DVBT 增加channel id sunjianping add 2015-1-13
	{
		var tStr = channel.dtvAntennaManualChId();
		if(tStr == "")
		{
			tManuChIdSum = 0;
		}
		else
		{
			tManuChIdList = tStr.split("#");
			tManuChIdSum = tManuChIdList.length;
		}
		if(tManuChIdSum > 0)
		{
			refreshChIdIndex(spanList[6],frequency);
			$("tManuChIdOption").style.display = "block";
		}
		else
		{
			$("tManuChIdOption").style.display = "none";
		}
	}
	else
	{
		$("tManuChIdOption").style.display = "none";
	}
	$("diagnosticsForm").style.display = "block";
	parent.hiddenPage(1);
	
	top.showDialogPosition($("diagnosticsForm"),800,520,1920,1080,0,0);
	clearTimeout(diagnosticsTimer); //yiling0609
	diagnosticsTimer = setTimeout("initDiagnostics()",1000);
}

function refreshChIdIndex(tag,freq)
{
	for(var i = 0; i < tManuChIdSum; i++)
	{
		if(freq == parseInt(tManuChIdList[i].split(":")[1]))
		{
			tManuChIdIndex = i;
			tag.innerText = tManuChIdList[i].split(":")[0];
			break;
		}
	}
	if(i == tManuChIdSum)
	{
		tManuChIdIndex = -1;
		tag.innerText = noRelatedChannel;
	}
}
/*
描述：用html语言替换掉< >符号
参数：
全局变量：
*/
function replaceT(s)
{
	s=s.replace(/</g,"&lt;");
	s=s.replace(/>/g,"&gt;");
	return s;
}

/*
描述：初始化time shift enable状态
参数：
全局变量：
*/
function initTimeShiftState()
{
	form_position_h = timeshiftEnableStatus;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}
/*
描述：初始化channel list type列表弹出框
参数：
全局变量：form_position_h；channelListType
*/
function initChListTypeForm()
{
	form_position_h = channelListType;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,chListTypeWords,2,form_position_h,0);
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
		img[0].src=chPromptImg[0];
		$("promptContent").style.top = ONE_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+list_position_h*70+"px";
	}
	else if(height==80)
	{
		img[0].src=chPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+list_position_h*70+"px";
	}
	else if(height==120)
	{
		img[0].src=chPromptImg[1];
		$("promptContent").style.top = THREE_LINE_TOP+"px";
		img[0].style.height="160px";
		div[0].style.height="152px";
		$("promptWin").style.top=50+list_position_h*70+"px";
	}
	else if(height==160)
	{
		img[0].src=chPromptImg[2];
		$("promptContent").style.top = FOUR_LINE_TOP+"px";
		img[0].style.height="220px";
		div[0].style.height="212px";
		$("promptWin").style.top=20+list_position_h*70+"px";
	}
	else if(height==200)
	{
		img[0].src=chPromptImg[3];
		$("promptContent").style.top = FIVE_LINE_TOP+"px";
		img[0].style.height="280px";
		div[0].style.height="272px";
		$("promptWin").style.top=-10+list_position_h*70+"px";
	}
	else if(height==240)
	{
		img[0].src=chPromptImg[4];
		$("promptContent").style.top = SIX_LINE_TOP+"px";
		img[0].style.height="340px";
		div[0].style.height="332px";
		$("promptWin").style.top=-30+list_position_h*70+"px";
	}
	else if(height==0)
	{
		img[0].src=chPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+list_position_h*70+"px";
	}
}
var showPromptContTimer = 0;
function showPromptCont()//显示提示语内容函数
{
	//channel.testLog("in channelset showPromptCont focusOn = " + focusOn + ",parent.currentShowMenu = " + parent.currentShowMenu + ",channelListState = " + channelListState + ",list_position_h = " + list_position_h);
	if(focusOn=="menu"&&parent.currentShowMenu==1)
	{
		clearTimeout(showPromptContTimer);
		showPromptContTimer = setTimeout(function(){$("promptWin").style.display="none"},5000);
		var name=findName(list_position_h);
		 if(name=="channelDiagnostics")
		{
			$("promptContent").innerHTML=chPromptCon[0];
			showPromptImg();
		}
		else if(name=="subtitle")
		{
			$("promptContent").innerHTML=chPromptCon[2];
			showPromptImg();
		}
		else if(name=="teletext")
		{
			$("promptContent").innerHTML=chPromptCon[3];
			showPromptImg();
		}
		else if(name=="channelListType")
		{
			$("promptContent").innerHTML=chPromptCon[1];
			showPromptImg();
		}
		else
		{
			$("promptWin").style.display="none";
		}
	}
	else
	{
		$("promptWin").style.display="none";
	}
}
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
			if(list_position_h == 0)//lock
			{
				if(focusOn == "password")
				{
					focusOn = "menu";
					hotelChLock = 0;
					install_lock = 0;
					refreshAllMenuListShow();
					parent.showPage(1);
				}
				else if(focusOn == "installationLock")
				{
					focusOn = "menu";
					install_lock = 0;
					parent.showPage(1);
					parent.jumpPage(2,"channelSetting/channelScan.html");
				}
			}
		}
	}
}

function refreshAllMenuListShow()
{
	if((hotelChLock)&&(hotelEnable))
	{
		sndMenuRightLiList[0].getElementsByTagName("span")[0].innerHTML=systemSetTitleWord;
		sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "block";
		menuList[0].showFlag = 1;
		
		for(var i=1;i<=8;i++)
		{
			menuList[i].showFlag = 0;
		}
		$("sndMenuRight").style.display = "block";
	}
	else	
	{
		for(var i=0;i <= 8;i++)
		{
			sndMenuRightLiList[i].getElementsByTagName("span")[0].innerHTML=chSetListName[i];
			menuList[i].showFlag = 1;
		}
		
		if(source > 1)//非tv信源
		{
			for(var i = 0;i<5;i++)//"Channel scan","Channel list","EPG","Organiser","Channel diagnostics"
			{
				menuList[i].showFlag = 0;
			}
		}
		else
		{
			channelListState = channel.channelProgramStatus();
			if(channelListState==0)
			{
				for(var i = 1;i<5;i++)//"Channel list","EPG","Organiser","Channel diagnostics"
				{
					menuList[i].showFlag = 0;
				}
			}
			else if(source == 0)//atv
			{
				menuList[4].showFlag = 0;//Channel diagnostics
			}
		}
		if(top.g_factory.pvrOpenStatus<=0)
		{
			menuList[5].showFlag = 0;
		}
		isCiOpExist = setting.isOpExist;
		if(isCiOpExist == 0)//没有channel list type选择项
		{
			menuList[8].showFlag = 0;//channelListType
		}
		else
		{
			channelListType = setting.ciChannelListType;
			chListTypeWords[1] = setting.ciChannelListTypeValue;
			if(channelListType == 0)
			{
				$("chListTypeStatus").innerHTML = chListTypeWords[0];
			}
			else
			{
				//channelListType = 1;
				$("chListTypeStatus").innerHTML = chListTypeWords[1];
			}
		}
		
		timeshiftEnableStatus = channel.timeshiftEnableStatus;
		sndMenuRightLiList[5].getElementsByTagName("div")[0].innerHTML=offOnWords[timeshiftEnableStatus];
		
		//从nitRefresh.html中快捷进入
		if(top.g_nextHtmlPage == "channelScan.html")
		{
			$("listFocus").src=mainFocus[0];
			list_position_h = 0;
			$("listFocus").style.top=SUB_MENU_START+list_position_h*SUB_MENU_STEP+"px";
			$("listFocus").style.display="block";
			hiddenPromptCont();
			$("sndMenuRight").style.display = "none";
			parent.$("pageFlagShadow").style.left="350px";
			
			/*需要加上这一句话，这是对nitRefresh。html进入的特殊处理。因为从channelScan.html
			中返回需要再次调用到该页面的init函数来刷新该页面，如果不加上则会出现页面部分不能显示*/
			top.g_nextHtmlPage = "";
		}
		else if(top.g_nextHtmlPage == "autoSearch.html" || top.g_nextHtmlPage == "autoUpdate.html")
		{
			$("listFocus").src=mainFocus[0];
			list_position_h = 0;
			$("listFocus").style.top=SUB_MENU_START+list_position_h*SUB_MENU_STEP+"px";
			$("listFocus").style.display="block";
			hiddenPromptCont();
			$("sndMenuRight").style.display = "none";
			parent.$("pageFlagShadow").style.left="350px";
		}
		else
		{
			$("sndMenuRight").style.display = "block";
		}
	}
	
	for(var i = 0; i< menuList.length; i++)
	{
		if(menuList[i].showFlag == 0)
		{
			sndMenuRightLiList[i].style.display = "none";
		}
		else
		{
			sndMenuRightLiList[i].style.display = "block";
		}
	}
}
var listFormLiList;
var hotelChLock = 0;// 1 locked ,0 un lock
var hotelEnable = 0;// 1 locked ,0 un lock
var sndMenuRightLiList;
function init()
{
	sndMenuRightLiList = $("sndMenuRight").getElementsByTagName("li");
	listFormLiList = $("listForm").getElementsByTagName("li");
	
	source = channel.inputSource
	channelIndex = channel.currentIndex; //认证新增 //yiling0609
	//top.g_channel.testLog("in channelSet init g_nextHtmlPage = " +　top.g_nextHtmlPage);
	hotelChLock = factory.hotelChLock;
	hotelEnable = factory.hotelEnable;
	install_lock = setting.installLock;//off 0    on 1
	
	refreshAllMenuListShow();
	
	addMouseListener();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		top.timeoutFuc.osdTimeoutStartFuc();
		if(evt.button == 2) toBack();//right key
	
	}
	if((hotelChLock)&&(hotelEnable))
	{
		sndMenuRightLiList[0].onmousedown = function(evt){
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
			if(evt.button == 0){//left key
				if(focusOn == "menu"){
					list_position_h = 0;
					$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					showPromptCont();
					doEnter();
				}
			}
		}
	}
	else	
	{
		if(source > 1)//非tv信源
		{
			for(var i = 5; i < 9; i++)
			{
				sndMenuRightLiList[i].setAttribute("newAttr",i);
				sndMenuRightLiList[i].onmousedown = function(evt){
					top.timeoutFuc.osdTimeoutEndFuc();
					if(evt.button == 0){//left key
						if(focusOn == "menu"){
							list_position_h = parseInt(this.getAttribute("newAttr")) - 5;
							$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
							showPromptCont();
							doEnter();
						}
					}
					top.timeoutFuc.osdTimeoutStartFuc();
				}
			}
		}
		else
		{
			if(channelListState==0)
			{
				sndMenuRightLiList[0].onmousedown = function(evt){
					top.timeoutFuc.osdTimeoutEndFuc();
					if(evt.button == 0){//left key
						if(focusOn == "menu"){
							list_position_h = 0;
							$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
							showPromptCont();
							doEnter();
						}
					}
					top.timeoutFuc.osdTimeoutStartFuc();
				}
				for(var i = 5; i < 9; i++)
				{
					sndMenuRightLiList[i].setAttribute("newAttr",i);
					sndMenuRightLiList[i].onmousedown = function(evt){
						top.timeoutFuc.osdTimeoutEndFuc();
						if(evt.button == 0){//left key
							if(focusOn == "menu"){
								list_position_h = parseInt(this.getAttribute("newAttr")) - 4;
								$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
								showPromptCont();
								doEnter();
							}
						}
						top.timeoutFuc.osdTimeoutStartFuc();
					}
				}
			}
			else
			{
				if(source == 0)//atv
				{
					for(var i = 0; i < 4; i++)
					{
						sndMenuRightLiList[i].setAttribute("newAttr",i);
						sndMenuRightLiList[i].onmousedown = function(evt){
							top.timeoutFuc.osdTimeoutEndFuc();
							if(evt.button == 0){//left key
								if(focusOn == "menu"){
									list_position_h = parseInt(this.getAttribute("newAttr"));
									$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
									showPromptCont();
									doEnter();
								}
							}
							top.timeoutFuc.osdTimeoutStartFuc();
						}
					}
					for(var i = 5; i < 9; i++)
					{
						sndMenuRightLiList[i].setAttribute("newAttr",i);
						sndMenuRightLiList[i].onmousedown = function(evt){
							top.timeoutFuc.osdTimeoutEndFuc();
							if(evt.button == 0){//left key
								if(focusOn == "menu"){
									list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
									$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
									showPromptCont();
									doEnter();
								}

							}
							top.timeoutFuc.osdTimeoutStartFuc();
						}
					}
				}
				else
				{
					for(var i = 0; i < 9; i++)
					{
						sndMenuRightLiList[i].setAttribute("newAttr",i);
						sndMenuRightLiList[i].onmousedown = function(evt){
							top.timeoutFuc.osdTimeoutEndFuc();
							if(evt.button == 0){//left key
								if(focusOn == "menu"){
									list_position_h = parseInt(this.getAttribute("newAttr"));
									$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
									showPromptCont();
									doEnter();
								}
							}
							top.timeoutFuc.osdTimeoutStartFuc();
						}
					}
				}
			}
		}
	}
	
	for(var i = 0; i < 2; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "channelListTypeForm" || focusOn == "timeShift"){
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}
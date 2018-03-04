/******************** created by chenhua ***********************/
var graphicEQTitleWords 		= [top.souPresetPara[10],"200Hz","750Hz","2KHz","5KHz","15KHz"];

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var soundPreset					= 0;
var soundPresetProgress			= new Array(5);
var focusOn 					= "menu"; 				//menu,preset
var list_position_h				= 0;

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var PROGRESS_WIDTH				= 500;	
var mainFocus                   = ["../../images/Focus_Frame/Focus-1.png","../../images/Focus_Frame/Focus-2.png"];

document.onnotify 				= notifyProcess;
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
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

function toDown()
{
	if(focusOn == "menu")
	{
		/*if(soundPreset!=4) return;*/
		if(list_position_h >= 4)
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
		
	}	
}
function toUp()
{
	if(focusOn == "menu")
	{
		/*if(soundPreset!=4) return;*/
		if(list_position_h <= 0)
		{
			list_position_h = 4;
		}
		else
		{
			list_position_h--;
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
}
function doEnter()
{
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(3);
		parent.$("subMenu2").contentWindow.updatePresetStatus(setting.soundPresetMS12);
	}
}
function toLeft()
{
	if (soundPresetProgress[list_position_h] <= 0) 
		return;
	soundPresetProgress[list_position_h]--;
	refreshPresetProgress(list_position_h,soundPresetProgress[list_position_h]);
}
function toRight()
{
	if (soundPresetProgress[list_position_h] >= 100) 
		return;
	soundPresetProgress[list_position_h]++;
	refreshPresetProgress(list_position_h,soundPresetProgress[list_position_h]);
}

/*
描述：刷新preset中某一项进度
参数：position：要刷新的进度条的位置；progress：进度数
全局变量：
*/
function refreshPresetProgress(position,progress)
{
	
	switch(position)
	{
		case 0:
			$("100PgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("100PgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("100Value").innerHTML = progress;
			setting.graphicEQ200HZMS12 = progress;
			break;
		case 1:
			$("300PgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("300PgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("300Value").innerHTML = progress;
			setting.graphicEQ750HZMS12 = progress;
			break;
		case 2:
			$("1KPgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("1KPgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("1KValue").innerHTML = progress;
			setting.graphicEQ2KHZMS12 = progress;
			break;
		case 3:
			$("3KPgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("3KPgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("3KValue").innerHTML = progress;
			setting.graphicEQ5KHZMS12 = progress;
			break;
		case 4:
			$("10KPgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("10KPgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("10KValue").innerHTML = progress;
			setting.graphicEQ15KHZMS12 = progress;
			break;
		default:
			break;
	}
}

/*
描述：由于soundPreset选线的改变而刷新所有相关的进度
参数：soundP：soundPreset
全局变量：soundPresetProgress;
*/
function initProgressByPreset(soundP)
{
	soundPresetProgress[0] = setting.graphicEQ200HZMS12;
	soundPresetProgress[1] = setting.graphicEQ750HZMS12;
	soundPresetProgress[2] = setting.graphicEQ2KHZMS12;
	soundPresetProgress[3] = setting.graphicEQ5KHZMS12;
	soundPresetProgress[4] = setting.graphicEQ15KHZMS12;
		
	$("100PgreLeft").style.width = parseInt(soundPresetProgress[0]*PROGRESS_WIDTH/100,10) + "px";
	$("100PgreRight").style.width = parseInt((100 - soundPresetProgress[0])*PROGRESS_WIDTH/100,10) + "px";
	$("100Value").innerHTML = soundPresetProgress[0];
	
	$("300PgreLeft").style.width = parseInt(soundPresetProgress[1]*PROGRESS_WIDTH/100,10) + "px";
	$("300PgreRight").style.width = parseInt((100 - soundPresetProgress[1])*PROGRESS_WIDTH/100,10) + "px";
	$("300Value").innerHTML = soundPresetProgress[1];
	
	$("1KPgreLeft").style.width = parseInt(soundPresetProgress[2]*PROGRESS_WIDTH/100,10) + "px";
	$("1KPgreRight").style.width = parseInt((100 - soundPresetProgress[2])*PROGRESS_WIDTH/100,10) + "px";
	$("1KValue").innerHTML = soundPresetProgress[2];
	
	$("3KPgreLeft").style.width = parseInt(soundPresetProgress[3]*PROGRESS_WIDTH/100,10) + "px";
	$("3KPgreRight").style.width = parseInt((100 - soundPresetProgress[3])*PROGRESS_WIDTH/100,10) + "px";
	$("3KValue").innerHTML = soundPresetProgress[3];
	
	$("10KPgreLeft").style.width = parseInt(soundPresetProgress[4]*PROGRESS_WIDTH/100,10) + "px";
	$("10KPgreRight").style.width = parseInt((100 - soundPresetProgress[4])*PROGRESS_WIDTH/100,10) + "px";
	$("10KValue").innerHTML = soundPresetProgress[4];
}

var fourthMenuRightSpanList;
var fourthMenuRightLiList;
var progressContainerClassList;
var listFirstSpans;
function init()
{
	timeoutInit();
	progressContainerClassList = $("fourthMenuRight").getElementsByClassName("progressContainer");
	soundPreset	= setting.soundPresetMS12;
	fourthMenuRightLiList = $("fourthMenuRight").getElementsByTagName("li");
	fourthMenuRightSpanList = $("fourthMenuRight").getElementsByTagName("span");
	for(var i = 0; i < 6; i++)
	{
		fourthMenuRightSpanList[i].innerHTML = graphicEQTitleWords[i];
	}
	
	initProgressByPreset(soundPreset);
	
	list_position_h = 0;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	listFirstSpans = $("fourthMenuRight").getElementsByClassName("listFirstProperty");
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
}

function uninit()
{
    //maybe be previewed,need to resume
}

var PROGRESS_START_LEFT_OFFSET = 0 + 44 + 120;//进度条容器开始位置相对于framework的左偏移
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 0; i < 6; i++)
	{
		fourthMenuRightLiList[i].setAttribute("newAttr",i);
		fourthMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)
			{//left key
				if(focusOn == "menu"){
					list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					var downX = evt.clientX;
						var prog = parseInt((downX - PROGRESS_START_LEFT_OFFSET)*100/PROGRESS_WIDTH,10);
						if(prog < 0)
						{
							prog = 0;
						}
						else if(prog > 100)
						{
							prog = 100;
						}
						soundPresetProgress[list_position_h] = prog;
						refreshPresetProgress(list_position_h,soundPresetProgress[list_position_h]);
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}




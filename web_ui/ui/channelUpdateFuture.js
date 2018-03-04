/******************** created by chenhua ***********************/
var yesNoWords					= top.yesNo;
var oadFutureRemind             = top.oadFutureRemind;

document.onnotify 				= notifyProcess;

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var form_position_h				= 0;					//副菜单或弹出框位置下标

var FORM_START					= 198;					//弹出框焦点移动的开始位置
var FORM_STEP					= 250;					//弹出框焦点移动的step

document.onkeydown = keyDownProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	switch(msg)
	{

		case top.E_UPDATE_CHANNEL_GET_UPDATED_INFORMATION:
			//channel.testLog("in notify get update infomation focusOn = " + focusOn);
			top.systemEventProc(evt);
			break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		top.systemEventProc(evt);
		break;
		default:
			//top.systemEventProc(evt);
			break;
	}
}
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	
		switch (keycode)
		{
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
			case top.VK_MENU:
			case top.VK_BACK:
				toBack();		// lizhongyong 20140714 disable back key
				break;
			case top.VK_POWER:
					top.keyDownProcess(evt);
				break;
			default:
				break;
		}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}


function doEnter()
{
  	if(form_position_h == 0)
	{
		setting.oadFutureUpdate(1);
	}
	else
	{
		setting.oadFutureUpdate(0);
	}
	top.jumpPage();
}
function toBack()
{
	top.jumpPage();
}
function toLeft()
{
    if(form_position_h == 0)
	{
		form_position_h = 1;
	}
	else
	{
		form_position_h = 0;
	}
	$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
}
function toRight()
{
	if(form_position_h == 0)
	{
		form_position_h = 1;
	}
	else
	{
		form_position_h = 0;
	}
	$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
}




var thdMenuRightSpanList;
var thdMenuRightLiList;
var buttonsDivList;
var showWarnTimer = 0;
function init()
{
	var datas = window.location.search;
	var second = datas.substring(1);
	var time = setting.secondToTime(second);
	var date = setting.secondToDate(second);
	oadFutureRemind = oadFutureRemind.replace("%s",date +' '+ time);
	buttonsDivList = $("buttons").getElementsByTagName("div");
	buttonsDivList[0].innerHTML = yesNoWords[0];
	buttonsDivList[1].innerHTML = yesNoWords[1];
	$("remindContent").innerHTML = oadFutureRemind;
}

function addMouseListener()

{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2)
		{
			toBack();//right key
		}
	}
	for(var i = 0; i < 2; i++)
	{
		buttonsDivList[i].setAttribute("newAttr",i);
		buttonsDivList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				form_position_h = parseInt(this.getAttribute("newAttr"));
				$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
				doEnter();
			}
		}
	}
	$("remindFocus").onmousedown = function(evt){
		if(evt.button == 0){//left key
				doEnter();
		}
	}
}
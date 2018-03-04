var deregistrationTitleWords 	= [top.sysOptions[10],top.sysAdOptions[4],top.sysAdOptions[1],top.sysAdOptions[2]];
var deregistWords 				= top.deregistrationConfrimation;
var okCancelWords				= top.okCancel;
var setting 					= top.g_setting;
var channel 					= top.g_channel;
var form_position_h				= 0;
var DIALOG_START				= 198;
var DIALOG_STEP					= 250;

var focusOn 					= "deregistrationConfirmation"; 	

var tString                     	= "";
var str                        	    = "";			

document.onnotify 				= notifyProcess;
document.onkeydown 				= keyDownProcess;

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
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
			ret = false;
			break;
		case top.VK_BACK:
			toBack();
			break;
		case top.VK_MENU:
			top.jumpPage();
			break;
		default:
			break;
	}
	return ret;
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
	$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
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
	$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
}

function doEnter()
{
	if(form_position_h == 1)
	{
		//document.location.href="deregistration.html"; //方法一，下面为方法二，两种方法都可实现
		top.jumpToOperatePage("systemSetting/deregistration.html");
	}
	else
	{
		toBack();
	}
}

function toBack()
{
	top.$("main").contentWindow.subMenu2.init();
	top.focusToIndexHtml(2);
	focusOn = "menu";
}

var dialogButtonClassList;
function init()
{
	dialogButtonClassList = $("registForm").getElementsByClassName("button");
	tString = document.location.search;
	str = tString.substring(tString.indexOf("?") + 1);
	initDeregistration();
	addMouseListener();
}

function $(id)
{
    return document.getElementById(id);
}


function initDeregistration()
{
	$("registTitle").innerHTML = deregistrationTitleWords[1];
	$("registContent1").innerHTML = deregistWords[0];
	$("registContent2").innerHTML = deregistWords[1];
	$("registOne").innerHTML = okCancelWords[0];
	$("registZero").innerHTML = okCancelWords[1];
	$("registZero").style.left = "200px";
	form_position_h = 1;
	$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	$("registZero").style.display = "block";
	$("registForm").style.display = "block";
	$("registOne").style.display = "block";
	$("registFocus").style.display = "block";
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//dialog
	for(var i = 0; i < 2; i++)
	{
		dialogButtonClassList[i].setAttribute("newAttr",i);
		dialogButtonClassList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){
				if(focusOn == "deregistrationConfirmation")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	top.Log("in deregistrationConfirmation addMouseListener end");
}

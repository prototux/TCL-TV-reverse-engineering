var deregistrationTitleWords 	= [top.sysOptions[10],top.sysAdOptions[0],top.sysAdOptions[1],top.sysAdOptions[2]];
var registWords					= top.sysRegistDes;
var deregistWords 				= top.sysDregistDes;
var okCancelWords				= top.okCancel;
var setting 					= top.g_setting;
var channel 					= top.g_channel;
var form_position_h				= 0;
var DIALOG_START				= 198;
var DIALOG_STEP					= 250;


var tString                     = "";
var str                         = "";

var focusOn 					= "deregistration"; 				//menu,tLink,registration,deregistration

document.onnotify 				= notifyProcess;


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
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
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
		//document.location.href="registration.html"; //方法一，下面为方法二，两种方法都可实现
		top.jumpToOperatePage("systemSetting/registration.html");
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
	timeoutInit();
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
	$("registTitle").innerHTML = deregistrationTitleWords[2];
	/*var registContentPList = $("registContent").getElementsByTagName("p");
	registContentPList[0].innerHTML = deregistWords[0] + setting.deregistDivX();
	registContentPList[1].innerHTML = deregistWords[1];
	registContentPList[2].innerHTML = deregistWords[2];*/
	$("registContent1").innerHTML = deregistWords[0] + setting.deregistDivX();
	$("registContent2").innerHTML = deregistWords[1];
	$("registContent3").innerHTML = deregistWords[2];
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
/*function initRegistration()
{
	$("registTitle").innerHTML = deregistrationTitleWords[1];
	var registContentPList = $("registContent").getElementsByTagName("p");
	registContentPList[0].innerHTML = registWords[0];
	registContentPList[1].innerHTML = registWords[1] + setting.registDivX();
	registContentPList[2].innerHTML = registWords[2];
	$("registOk").innerHTML = okCancelWords[0];
	$("registCancel").innerHTML = okCancelWords[1];
	$("registOk").style.left = "225px";
	$("registFocus").style.left = "225px";
	$("registCancel").style.display = "none";
	$("registForm").style.display = "block";
}*/


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
				if(focusOn == "deregistration")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	//top.Log("in deregistration addMouseListener end");
}

var registrationTitleWords 	    = [top.sysOptions[10],top.sysAdOptions[0],top.sysAdOptions[1],top.sysAdOptions[2]];
var registWords					= top.sysRegistDes;
var okCancelWords				= top.okCancel;
var setting 					= top.g_setting;

var tString                     = "";
var str                         = "";

var focusOn 					= "registration"; 				//menu,tLink,registration,deregistration

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
		case top.VK_ENTER:
		case top.VK_BACK:
		case top.VK_MENU:
		case top.VK_LEFT:
			toBack();
			break;
		default:
			break;
	}
	return ret;
}

function toBack()
{	
	//top.focusToIndexHtml(2);
	top.$("main").contentWindow.subMenu2.init();
	top.focusToIndexHtml(2);
	focusOn = "menu";
}

function init()
{
	timeoutInit();
	tString = document.location.search;
	str = tString.substring(tString.indexOf("?") + 1);
	initRegistration();
	addMouseListener();
}

function $(id)
{
    return document.getElementById(id);
}
function initRegistration()
{
	$("registTitle").innerHTML = registrationTitleWords[1];
	$("registContent1").innerHTML = registWords[0];
	$("registContent2").innerHTML = registWords[1] + setting.registDivX();
	$("registContent3").innerHTML = registWords[2];
	$("registOk").innerHTML = okCancelWords[0];
	$("registOk").style.left = "325px";
	$("registFocus").style.left = "323px";
	$("registForm").style.display = "block";
	$("registOk").style.display = "block";
	$("registFocus").style.display = "block";
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	$("registOk").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			toBack();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}
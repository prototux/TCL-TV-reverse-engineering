var wirelessAutoPINConName       = [top.initialPrompt[11],top.netOthers[0],top.others[15]];
var initHelp                     = top.initialHotkeys;
var setting = top.g_setting;
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_DATABASE_FILE_DAMAGE:
		{
			top.systemEventProc(evt);
		}
		break;
		default:
			break;
	}
}
document.onkeydown = keyproc;
function keyproc(e)
{
	var ret = true;
	var keycode = e.which;
	switch (keycode)
	{
		case top.VK_POWER://power
			top.keyDownProcess(e);
			break;
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			break;
		}
		case top.VK_RED:
			top.jumpPage();
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

function toLeft()
{
	document.location.href="initWirelessAuto.html";
}
function toRight()
{
	//setting.connectToPINCode();后续添加函数
	setting.connectPinCode('');
	document.location.href="initNetConnectPrompt.html?04.1"//设置成功
}
function toOK()
{
	$("PINcode").innerHTML=wirelessAutoPINConName[1]+setting.refreshPinCode();//setting.getPINcode();后续添加函数
}
function toBack()
{
	document.location.href="initWirelessAuto.html";
}
function init()
{
	$("initTitle").innerHTML = top.initialTitle[1];
	$("subTitleTag").innerHTML = top.initialOptions[1];
	$("PINContent").innerHTML=wirelessAutoPINConName[0];
	$("PINcode").innerHTML=wirelessAutoPINConName[1]+setting.getPinCode();//;后续添加函数
	var divs=$("PINbuttonList").getElementsByTagName("div");
	divs[0].innerHTML=wirelessAutoPINConName[2];
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
	addMouseListener();
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			toLeft();
		}
	}
	$("PINButtonFocus").onmousedown = function(evt){
		if(evt.button == 0){//left key
			toOK();
		}
	}
	$("back").onmousedown = function(evt){
		if(evt.button==0)
		{
			toLeft();
		}
	}
	$("next").onmousedown = function(evt){
		if(evt.button==0)
		{
			toRight();
		}
	}
}
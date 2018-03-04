var wirelessAutoPBCConName    = [top.initialPrompt[12]];
var initHelp                  = top.initialHotkeys;
var PBCTimeout                = 0; //PBC倒计时的Timeout
var showTime                  = 120;//PBC倒计时时间
var startPbc                  = 0;
var setting = top.g_setting;
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_WIRELESS_CONNECT_SUCCESS://表示无线网络连接成功
		{
			document.location.href="initNetConnectPrompt.html?05.1"//设置成功
			break;
		}
		case top.E_WIRELESS_CONNECT_FAILURE://表示无线连接失
		{
			document.location.href="initNetConnectPrompt.html?05.0"//设置成功
		}
		break;
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
			if(startPbc==1)
			{
				setting.cancelPBC();
			}
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
	if(startPbc==1)
	{
		setting.cancelPBC();
	}
	document.location.href="initWirelessAuto.html";
}
function toRight()
{
	document.location.href="initNetConnectPrompt.html?05.2."+showTime//设置成功
}
function init()
{
	$("initTitle").innerHTML = top.initialTitle[1];
	$("subTitleTag").innerHTML = top.initialOptions[1];
	$("PBCContent").innerHTML=wirelessAutoPBCConName[0];
	$("PBCTime").innerHTML=showTime+"S"
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
	startPbc=1;
	setting.startPBC();//后续添加函数
	showPBCTime();
	showPBCTime();
	addMouseListener();
}
function showPBCTime()
{
	$("PBCTime").innerHTML=showTime+"S"
	showTime--;
	if(showTime==0)
	{
		clearTimeout(PBCTimeout);
		PBCTimeout=0;
		showTime=120;
		setting.cancelPBC();
		document.location.href="initNetConnectPrompt.html?05.0"//设置成功
	}
	else
	{
		PBCTimeout=setTimeout("showPBCTime()",1000);
	}
}
function addMouseListener()
{
    document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			toLeft();
		}
		else if(evt.button==0)
		{
			toRight();
		}
	}
   $("back").onmousedown = function(evt){
		if(evt.button==0)
		{
			evt.preventDefault();
			evt.stopPropagation();
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

var netTipsCon       = [top.initialPrompt[16],top.yesNo[0],top.yesNo[1],top.initialTitle[1],top.initialOptions[1],top.others[28]];
var positionH        = 0;
var setting = top.g_setting;
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
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
	if(positionH==0)
	{
		positionH=1;
		$("TipsButtonFocus").style.left="105px";
	}
	else
	{
		positionH=0;
		$("TipsButtonFocus").style.left="520px";
	}
}
function toRight()
{
	if(positionH==0)
	{
		positionH=1;
		$("TipsButtonFocus").style.left="105px";
	}
	else
	{
		positionH=0;
		$("TipsButtonFocus").style.left="520px";
	}
}
function toOK()
{
	try
	{
		if(positionH==0)
		{
			top.$("operatePage").src="";
			top.$("main").contentWindow.focusType = "initMenuList";
			top.setFrameFocusPage("main");
		}
		else
		{
			document.cookie = "isSetNetwork=0";
			document.cookie = "isSetUpdate=0";
			top.$("operatePage").src="";
			top.$("main").src = "initSetup/initChannelInstallEntry.html";//5-1
			top.setFrameFocusPage("main");
		}
	}catch(er)
	{
		top.g_channel.testLog("toOK:"+er);
	}
}
function toBack()
{
	top.$("operatePage").src="";
}
function init()
{
	$("TipsContent").innerHTML=netTipsCon[0];
	var divs=$("TipsButtonList").getElementsByTagName("div");
	divs[0].innerHTML=netTipsCon[1];
	divs[1].innerHTML=netTipsCon[2];
	$("TipsTitle").innerHTML=netTipsCon[5];
	if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
	{
		$("CenterImage").src = "../images/opera_dump_au-1111.png";
	}
	addMouseListener();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			top.$("operatePage").src="";
			top.$("main").contentWindow.focusType = "initMenuList";
			top.setFrameFocusPage("main");
		}
		};
	$("leftButton").onmousedown = function(evt){
		if(evt.button == 0){//left key
			positionH=1;
			$("TipsButtonFocus").style.left="105px";
			toOK();
		}
	}
	$("rightButton").onmousedown = function(evt){
		if(evt.button == 0){//left key
			positionH=0;
			$("TipsButtonFocus").style.left="520px";
			toOK();
		}
	}
}
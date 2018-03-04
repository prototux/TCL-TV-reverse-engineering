var initNetConnectRemind      = [top.initialPrompt[6],top.initialPrompt[7],top.initialTitle[1],top.initialOptions[1]];
var initHelp                  = top.initialHotkeys;
var remindImg                 = ["../images/Network-Connection diagram-02.png","../images/Network-Connection diagram-04.png","../images/Network-Connection diagram-05.png"]
var tempValue;
var focusType                 = "initMenuList";
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
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_ENTER:
		{
			toOK();
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
function init()
{
	$("subTitleTag").innerHTML = initNetConnectRemind[3];
	$("initTitle").innerHTML = initNetConnectRemind[2];
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
	var tempString = window.location.search;//获取URL携带参数
	if(tempString!=null && tempString!="")
	{
		tempString = tempString.substring(tempString.indexOf("?")+1);
	    tempValue = tempString.split(".");
		switch(parseInt(tempValue[0]))
		{

			case 1:
			{
				if(parseInt(tempValue[1])==1)
				{
					$("remindWord").innerHTML=initNetConnectRemind[1].replace("xxxxxxxxx",top.initSSID);
					$("remindImg").src=remindImg[0];
					setTimeout("toRight()",5000);
				}
				else
				{
					$("remindWord").innerHTML=initNetConnectRemind[0].replace("xxxxxxxxx",top.initSSID);
					if(setting.checklocalConnect()==1)
					 {
						 $("remindImg").src=remindImg[1];
					 }
					 else
					 {
						 $("remindImg").src=remindImg[2];
					 }
				}
			}
			break;
			default:
			{
				if(parseInt(tempValue[1])==1)
				{
					$("remindWord").innerHTML=initNetConnectRemind[1].replace("xxxxxxxxx",top.initialPrompt[30]);
					$("remindImg").src=remindImg[0];
					setTimeout("toRight()",5000);
				}
				else
				{
					$("remindWord").innerHTML=initNetConnectRemind[0].replace("xxxxxxxxx",top.initialPrompt[30]);
                     if(setting.checklocalConnect()==1)
					 {
						 $("remindImg").src=remindImg[1];
					 }
					 else
					 {
						 $("remindImg").src=remindImg[2];
					 }
				}
			}
			break;
		}
	}
	addMouseListener();
}
function toLeft()
{
	if(focusType == "initMenuList")
	{
		switch(parseInt(tempValue[0]))
		{
			case 0:
			{
				document.location.href="initWireType.html";
			}
			break;
			case 1:
			case 2:
			{
				document.location.href="initWirelessType.html";
			}
			break;
		}
	}
	else if(focusType == "initTips")
	{
		top.$("operatePage").contentWindow.toLeft();
	}
}
function toRight()
{
	if(focusType == "initMenuList")
	{
		switch(parseInt(tempValue[0]))
		{
			case 0:
			{
				if(parseInt(tempValue[1])==1)
				{
					document.cookie = "isSetUpdate=1";
					document.location.href="initSoftwareUpdateSet.html";
				}
				else
				{
					top.$("operatePage").src="initSetup/initNetTips.html";
					focusType = "initTips";
					top.setFrameFocusPage("operatePage");
				}
			}
			break;
			case 1:
			case 2:
			{
				if(parseInt(tempValue[1])==1)
				{
					document.cookie = "isSetUpdate=1";
					document.location.href="initSoftwareUpdateSet.html";
				}
				else
				{
					top.$("operatePage").src="initSetup/initNetTips.html";
					focusType = "initTips";
					top.setFrameFocusPage("operatePage");
				}
			}
		}
	}
	else if(focusType == "initTips")
	{
		top.$("operatePage").contentWindow.toRight();
	}
}
function toOK()
{
	if(focusType == "initMenuList")
	{
		toRight();
	}
	else if(focusType == "initTips")
	{
		top.$("operatePage").contentWindow.toOK();
		top.setFrameFocusPage("main");
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 0){//left key
			toRight();
		}
		else if(evt.button == 2)
		{
			toLeft();
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
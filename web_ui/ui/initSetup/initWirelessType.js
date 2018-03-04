var initWirelessTypeCon     = [top.initialTitle[1],top.initialOptions[1],top.initialPrompt[29],top.others[12],top.manualAuto[0],top.manualAuto[1]]
var initHelp				= top.initialHotkeys;
//var netSelectImg            = ["../images/option/Radio_3.PNG","../images/option/Radio_2.PNG"];
var positionV               = 0;//主界面焦点的位置坐标
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
		case top.VK_BACK: //back
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;  
		}
		case top.VK_ENTER:
		case top.VK_RIGHT:
		{
			toRight();
			ret = false;
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
var containerLiList;
function init()
{			
	containerLiList = $("container").getElementsByTagName("li");	 
	var spans=document.body.getElementsByTagName("span");
	for(var i=0;i<6;i++)
	{
		spans[i].innerHTML=initWirelessTypeCon[i];
	}
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
	addMouseListener();
}
function toUp()
{
	switch(positionV)
	{
		case 0:
		{
			positionV=2;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 1:
		{
			positionV=0;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 2:
		{
			positionV=1;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		default:
		break;
	}
}

function toDown()
{
	switch(positionV)
	{
		case 0:
		{
			positionV=1;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 1:
		{
			positionV=2;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 2:
		{
			positionV=0;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		default:
		break;
	}
}
function toRight()
{
	switch(positionV)
	{
		case 0:
		{
			document.location.href="initWirelessScanPro.html";
		}
		break;
		case 1:
		{
			document.location.href="initWirelessManual.html";
		}
		break;
		case 2:
		{
			document.location.href="initWirelessAuto.html";
		}
		break;
		default:
		break;
	}
}
function toLeft()
{
	document.location.href="initNetCondition.html";
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			toLeft();
		}
	}
	for(var i = 0; i < 3; i++)
	{
		containerLiList[i].setAttribute("newAttr",i)
		containerLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				positionV = parseInt(this.getAttribute("newAttr"),10);
				$("initListFormFocus").style.top=70*positionV+"px";
				toRight();
			}
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
	$("select").onmousedown = function(evt){
		if(evt.button==0)
		{
			toDown();
		}
	}
}
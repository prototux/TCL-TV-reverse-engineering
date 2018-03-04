var initWireTypeCon           = [top.initialTitle[1],top.initialOptions[1],top.initialPrompt[5],top.manualAuto[1],top.manualAuto[0],top.initialHotkeys[0],top.initialHotkeys[1],top.initialHotkeys[2]]
//var netSelectImg              = ["../images/option/Radio_3.PNG","../images/option/Radio_2.PNG"];
var positionV                 = 0;//主界面焦点的位置坐标
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
	for(var i=0;i<8;i++)
	{
		spans[i].innerHTML=initWireTypeCon[i];
	}
	addMouseListener();
}
function toUp()
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
			positionV=0;
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
			document.location.href="initNetConnectPrompt.html?00.1";
		}
		break;
		case 1:
		{
			document.location.href="initWireManual.html";
		}
		break;
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
	for(var i = 0; i < 2; i++)
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
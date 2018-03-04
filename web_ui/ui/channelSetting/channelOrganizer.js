var mainTitle               = top.chOptions[3];
var organiserOptions		= top.chOrganizer;
var positionV               = 0;
var MENU_START 			    = 130;//菜单焦点移动起始位置
var MENU_STEP 			    = 70;//主菜单焦点移动的step
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
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
		case top.VK_UP:
			toUp();
			ret = false;
			break;
		case top.VK_DOWN:
			toDown();
			ret = false;
			break;
		case top.VK_ENTER:
			toOk();
			ret = false;
			break;
		case top.VK_BACK: //back
		case top.VK_LEFT:
			toBack();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toOk();
			ret = false;
			break;
		default:
			top.keyDownProcess(evt);
		break;
	}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}
function toDown()//按下键
{
	positionV++;
	if(positionV>3)
	{
		positionV=0;
	}
	$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}
function toUp()//按上键
{
	positionV--;
	if(positionV<0)
	{
		positionV=3;
	}
	$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}
function toOk()//按OK键
{
	switch(positionV)
	{
		case 0:
		{
			parent.jumpPage(3,"channelSetting/channelOrganizer/channelSkip.html");
			break;
		}
		case 1:
		{
			parent.jumpPage(3,"channelSetting/channelOrganizer/channelSort.html");
			break;
		}
		case 2:
		{
			parent.jumpPage(3,"channelSetting/channelOrganizer/channelEdit.html");
			break;
		}
		case 3:
		{
			parent.jumpPage(3,"channelSetting/channelOrganizer/channelDelete.html");
			break;
		}
	}

}

function toBack()//按左键或返回键
{
	parent.returnPage(2);
}
var channelSetLists;
function init()
{
	timeoutInit();
	channelSetLists = $("thdMenuRight").getElementsByTagName("li");
	channelSetLists[0].getElementsByTagName("span")[0].innerHTML= mainTitle;
	for(var i=0;i<4;i++)
	{
		channelSetLists[i + 1].getElementsByTagName("span")[0].innerHTML=organiserOptions[i];
	}
	addMouseListener();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2){
			toBack();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 1; i < 5; i++)
	{
		channelSetLists[i].setAttribute("newAttr",i);
		channelSetLists[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				positionV = parseInt(this.getAttribute("newAttr")) - 1;
				$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
}
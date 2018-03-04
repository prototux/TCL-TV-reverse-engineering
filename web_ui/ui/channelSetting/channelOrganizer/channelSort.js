var chSortTitle              = top.chOrganizer[1];//页面标题
var positionV               = 0;//焦点坐标
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
    top.timeoutFuc.keydownFuc = keyproc;
}
function keyproc(evt)/*接收按键*/
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
			toOK();
			ret = false;
			break;
		case top.VK_BACK: //back
		case top.VK_LEFT:
			toBack();
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

function init()
{
	timeoutInit();
	var spans=$("fourthMenuRight").getElementsByTagName("span");
	spans[0].innerHTML = chSortTitle;
	spans[1].innerHTML = top.chOrganizer[4];
	spans[2].innerHTML = top.chOrganizer[5];
	addMouseListener();
}
function toDown()//按下键
{
	positionV++;
	if(positionV>1)
	{
		positionV=0;
	}
	$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}
function toUp()//按上键
{
	positionV--;
	if(positionV<0)
	{
		positionV=1;
	}
	$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}

function toOK()//按OK键
{
	switch(positionV)
	{
		case 0:
		{
			parent.jumpPage(4,"channelSetting/channelOrganizer/channelSwap.html");
			break;
		}
		case 1:
		{
			parent.jumpPage(4,"channelSetting/channelOrganizer/channelInsert.html");
			break;
		}
		default:
		break;
	}
}
function toBack()//按左键或返回键
{
	parent.returnPage(3);
}
function uninit()
{
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
	top.timeoutFuc.osdTimeoutStartFuc();
	}
	var channel_li_list = $("fourthMenuRight").getElementsByTagName("li")
	for(var i = 0; i < 2; i++)
	{
		channel_li_list[i].setAttribute("newAttr",i);
		channel_li_list[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				positionV = parseInt(this.getAttribute("newAttr"),10);
				$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
				toOK();
			}
		}
	}
}
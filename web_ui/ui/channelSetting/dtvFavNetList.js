/******************** created by chenhua ***********************/
var titleWords				= [top.chScanOptions[7],top.favNetDes];

var list_position_h			= 0;
var focusOn 				= "menu"; 				//menu
var dtvFavNetList			= "";


var setting 					= top.g_setting;
var channel			 			= top.g_channel;

var SUB_MENU_START 				= 200;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step

document.onnotify 				= notifyProcess;

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
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
function keyproc(evt)
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
			doEnter();
			ret = false;
			break;
		case top.VK_LEFT:
			toBack();
			ret = false;
			break;  
		case top.VK_RIGHT:
			doEnter();
			ret = false;
			break;
		case top.VK_BACK:
			toBack();
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

function toDown()
{
	if(focusOn == "menu")
	{
		if(list_position_h >= (dtvFavNetList.length - 1))
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
}

function toUp()
{
	if(focusOn == "menu")
	{	
		if(list_position_h <= 0)
		{
			list_position_h = dtvFavNetList.length - 1;
		}
		else
		{
			list_position_h--;
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		channel.dtvSetFavNetId(parseInt(dtvFavNetList[list_position_h].split(":")[0]));
		toBack();
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(3);
	}
}


var favListContentLiList;
function init()
{
	timeoutInit();
	favListContentLiList = $("favListContent").getElementsByTagName("li");
	
	var favListTitleslabelList = $("favListTitles").getElementsByTagName("label");
	favListTitleslabelList[0].innerHTML = titleWords[0];
	favListTitleslabelList[1].innerHTML = titleWords[1];
	
	var favListContentLabelList = $("favListContent").getElementsByTagName("label");
	dtvFavNetList = channel.dtvFavNetList().split("#");
	for(var i = 0; i < favListContentLabelList.length; i++)
	{
		if(i < dtvFavNetList.length)
		{
			favListContentLabelList[i].innerHTML = dtvFavNetList[i].split(":")[1];
		}
		else
		{
			favListContentLiList[i].style.display = "none";
		}
	}
	
	var id = channel.dtvGetFavNetId();;
	for(var i = 0; i < dtvFavNetList.length; i++)
	{
		if(id == dtvFavNetList[i].split(":")[0])
		{
			list_position_h = i;
			break;
		}
	}
	if(i == dtvFavNetList.length)
	{
		list_position_h = 0;
	}
	top.Log("in init list_position_h = " +　list_position_h);
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	focusOn = "menu";
	
	addMouseListener();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var i = 0; i < dtvFavNetList.length; i++)
	{
		favListContentLiList[i].setAttribute("newAttr",i);
		favListContentLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr"));
					$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}

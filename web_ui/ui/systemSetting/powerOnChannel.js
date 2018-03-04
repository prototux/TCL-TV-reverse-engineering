/******************** created by chenhua ***********************/
var powerOnChTitleWords 		= [top.sysClockOptions[5],top.sysPowerOnChOptions];
var selectModeWords				= top.sysPowerOnCh;
var chType						= [top.chListType[2],top.chListType[1],top.chListType[3],""];

var powerOnChannelMode					= 0;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,powerOnChannelMode
var list_position_h				= 0;
var form_position_h				= 0;
var channelList;
var listSum						= 0;					//channel list sum
var nowPage						= 0;					//当前焦点在channel list中的第page页
var pageSum 					= 0;					//当前所有节目信息个数需要占多少页
var defaultPowerOnCh			= "";					//当前电视默认的开机默认播放的频道信息

var SUB_MENU_START 				= 130;					//五级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//五级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var ONE_PAGE_CHANNEL_SUM		= 9; 					//每一页最多含有的channel数量
var CHANNEL_POSITION_START 		= 200;					//power on chanenl list起始坐标

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
			toLeft();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toRight();
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
		if(list_position_h == 0)
		{
			if(listSum > 0)
			{
				list_position_h++;
			}
			$("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
		else
		{
			if((nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h) >= listSum)//最后一个了
			{
				nowPage = 0;
				list_position_h = 1;
				showList(nowPage,list_position_h - 1);
			}
			else if(list_position_h == ONE_PAGE_CHANNEL_SUM)//即将翻页
			{
				nowPage++;
				list_position_h = 1;
				showList(nowPage,list_position_h - 1);
			}
			else
			{
				list_position_h++;
			}
			$("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
	}
	else if(focusOn == "powerOnChannelMode")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
}

function toUp()
{
	if(focusOn == "menu")
	{			
		if(list_position_h == 0)
		{
			if(powerOnChannelMode == 0)
			{
				return;
			}
			else
			{
				if(listSum > 0)
				{
					if(nowPage == (pageSum - 1))//最后一页
					{
						list_position_h = (listSum - 1)%ONE_PAGE_CHANNEL_SUM + 1;
					}
					else
					{
						list_position_h = 9;
					}
				}
			}
		}
		else
		{
			list_position_h--;
		}
		$("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "powerOnChannelMode")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		if(list_position_h == 0)//have region name
		{
			$("fifthListFocus").style.display = "none";
			initSelectMode(powerOnChannelMode);
			focusOn = "powerOnChannelMode";
		}
		else
		{
			$("statusFocus").style.top = CHANNEL_POSITION_START + SUB_MENU_STEP*(list_position_h - 1) + "px";
			$("statusFocus").style.display = "block";
			 var nowChannel = channelList[nowPage*ONE_PAGE_CHANNEL_SUM + (list_position_h - 1)];
			 channel.setPowerOnChannel(nowChannel.index);
			 defaultPowerOnCh = channel.getPowerOnChannelInfo();//获取指定的开机默认播放的频道信息
		}
	}
	else if(focusOn == "powerOnChannelMode")
	{
		$("fifthListFocus").style.display = "block";
		powerOnChannelMode = form_position_h;
		channel.powerOnChannelMode = powerOnChannelMode;
		$("listForm").style.display = "none";
		focusOn = "menu";
		initList(powerOnChannelMode);
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(4);
	}
	else if(focusOn == "powerOnChannelMode")
	{
		$("fifthListFocus").style.display = "block";
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "menu")
	{
		if(list_position_h == 0)
		{
				toBack();	
		}
		else
		{
			if(listSum <= ONE_PAGE_CHANNEL_SUM)
			{
				toBack();
			}
			else
			{
				if(nowPage == 0)
				{
					nowPage = pageSum - 1;
					showList(nowPage,list_position_h - 1);
				}
				else
				{
					nowPage--;
					showList(nowPage,list_position_h - 1);
				}
			}
		}
	}
}
function toRight()
{
	if(focusOn == "menu")
	{
		if(list_position_h == 0)
		{
			doEnter();
		}
		else
		{
			if(listSum > ONE_PAGE_CHANNEL_SUM)
			{
				if(nowPage >= (pageSum - 1))
				{
					nowPage = 0;
					showList(nowPage,list_position_h - 1);
				}
				else
				{
					nowPage++;
					showList(nowPage,list_position_h - 1);
				}
			}
		}
	}
}

/*
描述：初始化
参数：mode:select mode
全局变量：form_position_h;list_position_h;
*/
function initSelectMode(mode)
{
	form_position_h = mode;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,selectModeWords,2,form_position_h,0);
}

/*
描述：初始化power on channel list
参数：mode:powerOnChanenlMode
全局变量：channelList；listSum；pageSum；pageSum;nowPage
*/
function initList(mode)
{
	$("selectModeStatus").innerHTML = selectModeWords[mode];
	$("statusFocus").style.display = "none";
	if(powerOnChannelMode == 0)
	{
		$("fifthContent").style.height = CHANNEL_POSITION_START + "px";
        listSum = 0 ;
	}
	else
	{
		defaultPowerOnCh = channel.getPowerOnChannelInfo();//获取指定的开机默认播放的频道信息
		nowPage = 0;
		channelList = channel.getChannelList(0/*all*/,0/*start*/,0/*list*/);
		listSum = channelList.length;
		channel.testLog("listSum = " + listSum);
		
		if(listSum <= ONE_PAGE_CHANNEL_SUM)
		{
			pageSum = 1;
			$("fifthContent").style.height = (CHANNEL_POSITION_START + listSum*SUB_MENU_STEP) + "px";
		}
		else
		{
			pageSum = parseInt(listSum/ONE_PAGE_CHANNEL_SUM) + 1;
			$("fifthContent").style.height = (CHANNEL_POSITION_START + ONE_PAGE_CHANNEL_SUM*SUB_MENU_STEP) + "px";
		}
		
		//判断当前频道是否够显示一页
		for (var i = 0; i < ONE_PAGE_CHANNEL_SUM; i++)
		{
			if (i < listSum)
			{
				channel.testLog("name =" + channelList[i].name);
				fifthMenuRightSpanList[i + 2].innerHTML = channelList[i].number;
				fifthMenuRightLabelList[i].innerHTML = chType[channelList[i].serviceType];
				fifthMenuRightDivList[i + 1].innerHTML = channelList[i].name;
				
				if(defaultPowerOnCh.number == channelList[i].number && defaultPowerOnCh.serviceType == channelList[i].serviceType)
				{
					$("statusFocus").style.top = CHANNEL_POSITION_START + SUB_MENU_STEP*i + "px";
					$("statusFocus").style.display = "block";
				}
			}
			else
			{
				break;
			}
		}
	}
}

/*
描述：根据page和cursor刷新power on channel list
参数：
全局变量：listSum;pageSum;channelList
*/

function showList(page,cursor)
{
	$("statusFocus").style.display = "none";
	if(page >= 0 && page < (pageSum - 1))
	{
		for(var i = 0; i < ONE_PAGE_CHANNEL_SUM; i++)
		{
			fifthMenuRightSpanList[i + 2].innerHTML = channelList[page*ONE_PAGE_CHANNEL_SUM + i].number;
			fifthMenuRightLabelList[i].innerHTML = chType[channelList[page*ONE_PAGE_CHANNEL_SUM + i].serviceType];
			fifthMenuRightDivList[i + 1].innerHTML = channelList[page*ONE_PAGE_CHANNEL_SUM + i].name;
			if(defaultPowerOnCh.number == channelList[page*ONE_PAGE_CHANNEL_SUM + i].number && defaultPowerOnCh.serviceType == channelList[page*ONE_PAGE_CHANNEL_SUM + i].serviceType)
			{
				$("statusFocus").style.top = CHANNEL_POSITION_START + SUB_MENU_STEP*i + "px";
				$("statusFocus").style.display = "block";
			}
		}
		$("fifthContent").style.height = (CHANNEL_POSITION_START + ONE_PAGE_CHANNEL_SUM*SUB_MENU_STEP) + "px";
	}
	else//page == (pageSum - 1)
	{
		var i = 0;
	   	for(i = 0;i < ONE_PAGE_CHANNEL_SUM ;i++)
	   	{
	   		//最后一页没有填充的数据项设置为不可见
		  	if((page*ONE_PAGE_CHANNEL_SUM + i) < listSum)
		  	{
				fifthMenuRightSpanList[i + 2].innerHTML = channelList[page*ONE_PAGE_CHANNEL_SUM + i].number;
				fifthMenuRightLabelList[i].innerHTML = chType[channelList[page*ONE_PAGE_CHANNEL_SUM + i].serviceType];
				fifthMenuRightDivList[i + 1].innerHTML = channelList[page*ONE_PAGE_CHANNEL_SUM + i].name;
				if(defaultPowerOnCh.number == channelList[page*ONE_PAGE_CHANNEL_SUM + i].number && defaultPowerOnCh.serviceType == channelList[page*ONE_PAGE_CHANNEL_SUM + i].serviceType)
				{
					$("statusFocus").style.top = CHANNEL_POSITION_START + SUB_MENU_STEP*i + "px";
					$("statusFocus").style.display = "block";
				}	  
		  	}
		  	//其他情况取channel链表的数据填充每一项列表项
		  	else
		  	{
				if(cursor > (i - 1))
				{
			  		cursor = i - 1;
				}
			  	break;
		  	}
		}
		$("fifthContent").style.height = (CHANNEL_POSITION_START + i*SUB_MENU_STEP) + "px";
	}
	list_position_h = cursor + 1;
	$("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
}

var fifthMenuRightSpanList;
var fifthMenuRightLabelList;
var fifthMenuRightDivList;
var fifthMenuRightLiList;
var listFormLiList;
function init()
{
	timeoutInit();
	listFormLiList = $("listForm").getElementsByTagName("li");
	fifthMenuRightLiList = $("fifthContent").getElementsByTagName("li");
	fifthMenuRightSpanList = $("fifthContent").getElementsByTagName("span");
	fifthMenuRightLabelList = $("fifthContent").getElementsByTagName("label");
	fifthMenuRightDivList = $("fifthContent").getElementsByTagName("div");
	
	for(var i = 0; i < 2; i++)
	{
		fifthMenuRightSpanList[i].innerHTML = powerOnChTitleWords[i];
	}
	
	powerOnChannelMode = channel.powerOnChannelMode;
	
	initList(powerOnChannelMode);
	list_position_h = 0;
	$("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	addMouseListener();
	
}


function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 1; i < 11; i++)
	{
		fifthMenuRightLiList[i].setAttribute("newAttr",i);
		fifthMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					$("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}	
	$("statusFocus").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "menu")
			{
				doEnter();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 0; i < 2; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "powerOnChannelMode")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
}


/******************** created by chenhua ***********************/
var chLockTitleWords 			= top.sysLockOptions[0];
var chType						= [top.chListType[2],top.chListType[1],top.chListType[3],""];
var noPrgram					= top.screenSavers[0];
document.onnotify 				= notifyProcess;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var list_position_h				= 0;
var channelList;
var listSum						= 0;					//channel list sum
var nowPage						= 0;					//当前焦点在channel list中的第page页
var pageSum 					= 0;					//当前所有节目信息个数需要占多少页

var SUB_MENU_START 				= 180;					//菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//菜单焦点移动的step
var ONE_PAGE_CHANNEL_SUM		= 10; 					//每一页最多含有的channel数量
var currentChannelListType      = 0;
var lockImg						= ["../images/option/check_1.png",
									"../images/option/check_3.png"];


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
	if(programStatus)
	{
		if((nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h) >= (listSum - 1))//最后一个了
		{
			nowPage = 0;
			list_position_h = 0;
			showList(nowPage,list_position_h);
		}
		else if(list_position_h == (ONE_PAGE_CHANNEL_SUM - 1))//即将翻页
		{
			nowPage++;
			list_position_h = 0;
			showList(nowPage,list_position_h);
		}
		else
		{
			list_position_h++;
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		showUpDownArray(nowPage,pageSum);
	}
}

function toUp()
{	
	if(programStatus)
	{
		if(list_position_h <= 0)
		{
			if(nowPage <= 0)
			{
				nowPage = pageSum - 1;
				list_position_h = (listSum - 1)%ONE_PAGE_CHANNEL_SUM;
			}
			else
			{
				nowPage--;
				list_position_h = ONE_PAGE_CHANNEL_SUM - 1;
			}
			showList(nowPage,list_position_h);
		}
		else
		{
			list_position_h--;
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		showUpDownArray(nowPage,pageSum);
	}
}

function doEnter()
{
	if(programStatus)
	{
		//channel.testLog("in channelLock doEnter list_position_h = " + list_position_h + ",position = " + (nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h) + ",nowPositionLockSattus = " + channelList[nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h].isLock);
		if(channelList[nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h].isLock == 0)
		{
			channelList[nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h].isLock = 1;
			fourthContentImgList[list_position_h].src = lockImg[1];
		}
		else
		{
			channelList[nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h].isLock = 0;
			fourthContentImgList[list_position_h].src = lockImg[0];
			if(channelList[nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h].index==channel.currentIndex)
			{
				top.channelLock = 0;
			}
		}
	}
}
function toBack()
{
	parent.returnPage(3);
}
function toLeft()
{
	if(programStatus)
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
				showList(nowPage,list_position_h);
			}
			else
			{
				nowPage--;
				showList(nowPage,list_position_h);
			}
		}
		showUpDownArray(nowPage,pageSum);
	}
}
function toRight()
{
	if(programStatus)
	{
		if(listSum > ONE_PAGE_CHANNEL_SUM)
		{
			if(nowPage >= (pageSum - 1))
			{
				nowPage = 0;
				showList(nowPage,list_position_h);
			}
			else
			{
				nowPage++;
				showList(nowPage,list_position_h);
			}
		}
		showUpDownArray(nowPage,pageSum);
	}
}

/*
描述：初始化power on channel list
参数：
全局变量：channelList；listSum；pageSum；pageSum;nowPage
*/
var programStatus = 0;
function initList()
{
	nowPage = 0;
	//add chenhua for no program 
	programStatus = channel.channelProgramStatus();
	if(programStatus)
	{
		//channelList = channel.getAllChannelList();
		channelList = channel.getChannelList(0/*all*/,0/*list*/,0/*start index*/);
		listSum = channelList.length;
			
		if(listSum <= ONE_PAGE_CHANNEL_SUM)
		{
			pageSum = 1;
			$("fourthContent").style.height = (listSum*SUB_MENU_STEP) + "px";
		}
		else
		{
			pageSum = parseInt((listSum - 1)/ONE_PAGE_CHANNEL_SUM,10) + 1;
			$("fourthContent").style.height = (ONE_PAGE_CHANNEL_SUM*SUB_MENU_STEP) + "px";
		}
		
		//判断当前频道是否够显示一页
		for (var i = 0; i < ONE_PAGE_CHANNEL_SUM; i++)
		{
			if (i < listSum)
			{
				channel.testLog("name =" + channelList[i].name);
				fourthContentSpanList[i].innerHTML = channelList[i].number;
				fourthContentLabelList[i].innerHTML = chType[channelList[i].serviceType];
				fourthContentDivList[i].innerHTML = channelList[i].name;
				if(channelList[i].isLock == 1)
				{
					fourthContentImgList[i].src = lockImg[1];
				}
				else
				{
					fourthContentImgList[i].src = lockImg[0];
				}
			}
			else
			{
				break;
			}
		}
	}
	else
	{
		pageSum = 1;
		listSum = 1;
		$("fourthContent").style.height = (listSum*SUB_MENU_STEP) + "px";
		fourthContentSpanList[0].innerHTML = noPrgram;
		fourthContentLabelList[0].innerHTML = "";
		fourthContentDivList[0].innerHTML = "";
		fourthContentImgList[0].style.display = "none";
	}
	showUpDownArray(nowPage,pageSum);
}

/*
描述：根据page和cursor刷新power on channel list
参数：
全局变量：listSum;pageSum;channelList
*/

function showList(page,cursor)
{
	if(page >= 0 && page < (pageSum - 1))
	{
		for(var i = 0; i < ONE_PAGE_CHANNEL_SUM; i++)
		{
			fourthContentSpanList[i].innerHTML = channelList[page*ONE_PAGE_CHANNEL_SUM + i].number;
			fourthContentLabelList[i].innerHTML = chType[channelList[page*ONE_PAGE_CHANNEL_SUM + i].serviceType];
			fourthContentDivList[i].innerHTML = channelList[page*ONE_PAGE_CHANNEL_SUM + i].name;
			if(channelList[page*ONE_PAGE_CHANNEL_SUM + i].isLock == 1)
			{
				fourthContentImgList[i].src = lockImg[1];
			}
			else
			{
				fourthContentImgList[i].src = lockImg[0];
			}
		}
		$("fourthContent").style.height = (ONE_PAGE_CHANNEL_SUM*SUB_MENU_STEP) + "px";
	}
	else//page == (pageSum - 1)
	{
		var i = 0;
	   	for(i = 0;i < ONE_PAGE_CHANNEL_SUM ;i++)
	   	{
	   		//最后一页没有填充的数据项设置为不可见
		  	if((page*ONE_PAGE_CHANNEL_SUM + i) < listSum)
		  	{
				fourthContentSpanList[i].innerHTML = channelList[page*ONE_PAGE_CHANNEL_SUM + i].number;
				fourthContentLabelList[i].innerHTML = chType[channelList[page*ONE_PAGE_CHANNEL_SUM + i].serviceType];
				fourthContentDivList[i].innerHTML = channelList[page*ONE_PAGE_CHANNEL_SUM + i].name;
				if(channelList[page*ONE_PAGE_CHANNEL_SUM + i].isLock == 1)
				{
					fourthContentImgList[i].src = lockImg[1];
				}  
				else
				{
					fourthContentImgList[i].src = lockImg[0];
				}
		  	}
		  	else
		  	{
				if(cursor > (i - 1))
				{
			  		cursor = i - 1;
				}
			  	break;
		  	}
		}
		$("fourthContent").style.height = (i*SUB_MENU_STEP) + "px";
	}
	list_position_h = cursor;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
}
/*
nowP:now page ,start from 0;sumP:sum page,start from 1
*/
function showUpDownArray(nowP,sumP)
{
	if(nowP > 0)
	{
		$("channelLockUpImg").style.display = "block";
	}
	else
	{
		$("channelLockUpImg").style.display = "none";
	}
	
	if(nowP >= (sumP - 1))
	{
		$("channelLockDownImg").style.display = "none";
	}
	else
	{
		$("channelLockDownImg").style.display = "block";
	}
}
var fourthContentSpanList;
var fourthContentDivList;
var fourthContentImgList;
var fourthContentLiList;
var fourthContentLabelList;
function init()
{
	timeoutInit();
	fourthContentLiList = $("fourthContent").getElementsByTagName("li");
	currentChannelListType = channel.channelListType ;
	$("chLockTitle").innerHTML = chLockTitleWords;
	fourthContentImgList = $("fourthContent").getElementsByTagName("img");
	fourthContentSpanList = $("fourthContent").getElementsByTagName("span");
	fourthContentDivList = $("fourthContent").getElementsByTagName("div");
	fourthContentLabelList = $("fourthContent").getElementsByTagName("label");
	initList();
	
	list_position_h = 0;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	addMouseListener();
}

function uninit()
{
	channel.channelListType = currentChannelListType;
	channel.testLog("currentChannelListType"+currentChannelListType);
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//menu
	for(var i = 0; i < 10; i++)
	{
		fourthContentLiList[i].setAttribute("newAttr",i);
		fourthContentLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				list_position_h = parseInt(this.getAttribute("newAttr"));
				$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
				doEnter();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("channelLockUpImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			toLeft();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	$("channelLockDownImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			toRight();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}


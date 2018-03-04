var ChDelContentName        = top.chOrganizer[3];//页面标
var chDeletDes				= top.chDeletDes;
var yesNo					= top.yesNo;
var digitalAndAnalog        = [top.chScanType[2],top.chScanType[1]];
var space                   = "&nbsp;&nbsp;&nbsp;&nbsp;";//用于节目号和节目类型之间的空格
var positionV               = 0;//焦点坐标
var channel_li_list;            //UI选项
var serviceType;                //节目类型
var channelList;                //节目列表
var PAGE_MAX                = 12;//设定每页显示个数

var currentChannelInfo;          //当前节目信息
var MENU_START 			    = 170;//菜单焦点移动起始位置
var MENU_STEP 			    = 70;//主菜单焦点移动的step
var currentChannelListType  = 0;
var channel=top.g_channel;//channel 类
var	focusType = "channelList";
var isDelete=0;
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
			toBack();
			break;
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;
		case top.VK_RIGHT:
			toRight();
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
	currentChannelListType = channel.channelListType;
	channel_li_list = $("fourthMenuRight").getElementsByTagName("li");
	$("deleteId").getElementsByTagName("span")[0].innerHTML=ChDelContentName;
	$("channelDeleteBoxTitle").innerHTML=ChDelContentName;
	$("channelDeleteRemind").innerHTML=chDeletDes;
	$("channelDeleteYes").innerHTML=yesNo[0];
	$("channelDeleteNo").innerHTML=yesNo[1];
	currentChannelInfo = channel.getCurrentChannelInfo();
	serviceType = currentChannelInfo.serviceType;
	channelList=channel.getNextChannelList(0,currentChannelInfo.index,1,PAGE_MAX);
	// channelList =channel.getChannelList(0,currentChannelInfo.index,1);
	var length = channelList.length;
	if (length > 0)
	{
		 if(length<=PAGE_MAX)
		 {
			var listIndex=0;
			for(;listIndex<PAGE_MAX && listIndex < length;listIndex++)
			{
				if(currentChannelInfo.index==channelList[listIndex].index)
				{
					break;
				}
			}
			if(listIndex == length)
			{
				listIndex = 0;
			}
			positionV=listIndex;
		 }
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		$("fourthListFocus").style.display="block";
		for (var i=0; i<PAGE_MAX; i++)
		{
			var span = channel_li_list[i].getElementsByTagName("span");
			var divs = channel_li_list[i].getElementsByTagName("div");
			
			if (i<length)
			{
				channel_li_list[i].style.display="block";
				//channel.testLog("channelList["+i+"].number="+channelList[i].number+"channelList[i].serviceType="+channelList[i].serviceType+"channelList[i].name="+channelList[i].name);
				span[0].innerHTML = channelList[i].number + space + digitalAndAnalog[channelList[i].serviceType?1:0];
				divs[0].innerHTML = channelList[i].name;
			}
			else
			{
				channel_li_list[i].style.display="none";
			}
		}
	}
	else
	{
		for (var i=0; i<PAGE_MAX; i++)
		{
				channel_li_list[i].style.display="none";
		}
		$("fourthListFocus").style.display="none";
	}
	addMouseListener();
}
function toUp()//按上键响应函数
{
	if(focusType == "channelList")
	{
		positionV--;
		if(positionV<0)
		{
			var index=channel.getPreviousIndexByIndex(channelList[0].index);
			channelList=channel.getPrevChannelList(0,index,1,PAGE_MAX);
			//判断当前频道是否够显示一页
			var length=channelList.length;
			for (var i=0; i<PAGE_MAX; i++)
			{
					var span = channel_li_list[i].getElementsByTagName("span");
					var divs = channel_li_list[i].getElementsByTagName("div");
					
					if (i<length)
					{
						channel_li_list[i].style.display="block";
						//channel.testLog("channelList["+i+"].number="+channelList[i].number+"channelList[i].serviceType="+channelList[i].serviceType+"channelList[i].name="+channelList[i].name);
						span[0].innerHTML = channelList[i].number + space + digitalAndAnalog[channelList[i].serviceType?1:0];
						divs[0].innerHTML = channelList[i].name;
					}
					else
					{
						channel_li_list[i].style.display="none";
					}
			}
			positionV=length-1;
			$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
		}
		else//不需要翻页
		{
			$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
		}
	}
	
}
function toDown()//按下键响应函数
{
	if(focusType == "channelList")
	{
		var length = channelList.length;
		positionV++;
		if(positionV>=length ||positionV>=PAGE_MAX)
		{
			var index=channel.getNextIndexByIndex(channelList[length-1].index);
			channelList=channel.getNextChannelList(0,index,1,PAGE_MAX);
			var length=channelList.length;
			for (var i=0; i<PAGE_MAX; i++)
			{
					var span = channel_li_list[i].getElementsByTagName("span");
					var divs = channel_li_list[i].getElementsByTagName("div");
					
					if (i<length)
					{
						channel_li_list[i].style.display="block";
						//channel.testLog("channelList["+i+"].number="+channelList[i].number+"channelList[i].serviceType="+channelList[i].serviceType+"channelList[i].name="+channelList[i].name);
						span[0].innerHTML = channelList[i].number + space + digitalAndAnalog[channelList[i].serviceType?1:0];
						divs[0].innerHTML = channelList[i].name;
					}
					else
					{
						channel_li_list[i].style.display="none";
					}
			}
			positionV=0;
			$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
		}
		else//不需要翻页
		{
			$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
		}
	}
}

function toRight()
{
	if(focusType == "channelList")
	{
		return;
	}
	else
	{
		if(isDelete==0)
		{
			isDelete=1;
			$("channelDeleteButtonFocus").style.left="90px";
		}
		else
		{
			isDelete=0;
			$("channelDeleteButtonFocus").style.left="340px";
		}
	}
}
function toOK()//按OK键
{
	if(focusType == "channelList")
	{
		focusType="deleteRemind";
		top.stopTimeout();
		parent.hiddenPage(3);
		$("channelDeleteBox").style.display="block";
	}
	else
	{
		if(isDelete==1)
		{
			if(channelList[positionV].index==channel.currentIndex)
			{
				if(top.recordStatusFlag==1)
				{
					top.g_pvr.recordStop();
					top.pvrCurrentTime=0;
					top.recordStatusFlag=0;
					top.pvrTotalTime=2*60*60;
					top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					top.$("globleShow").contentWindow.hiddenRecord();
				}
				if(top.timeShiftStatusFlag == 1)
				{
					top.g_pvr.timeshiftStop();
					top.g_pvr.returnToLive();//返回实时播放页面
					top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
					top.timeShiftStatusFlag = 0;
					top.$("globleShow").contentWindow.hiddenTimeShift();
				}
			}
			channelList[positionV].isDelete = 1;
			var length=channelList.length;
			if(positionV==0&&length>1)
			{
				updateChannelList(0);
			}
			else
			{
				updateChannelList(1);
			}
			deletePageDown();
		}
		isDelete=0;
		$("channelDeleteButtonFocus").style.left="340px";
		$("channelDeleteBox").style.display="none";
		focusType="channelList";
		parent.showPage(3);
		top.restartTimeout();
	}
}
function toBack()
{
	if(focusType == "channelList")
	{
		parent.returnPage(3);
	}
	else
	{
		isDelete=0;
		$("channelDeleteButtonFocus").style.left="340px";
		$("channelDeleteBox").style.display="none";
		focusType="channelList";
		parent.showPage(3);
		top.restartTimeout();
	}
}
function toLeft()//按左键或返回键
{
	
	if(focusType == "channelList")
	{
		parent.returnPage(3);
	}
	else
	{
		if(isDelete==0)
		{
			isDelete=1;
			$("channelDeleteButtonFocus").style.left="90px";
		}
		else
		{
			isDelete=0;
			$("channelDeleteButtonFocus").style.left="340px";
		}
	}
}
function deletePageDown()
{ 
 	var length=channelList.length;
	if(length>0)
	{
		if(positionV>=length)
		{
			positionV=length-1;
		}
		for (var i=0; i<PAGE_MAX; i++)
		{
			var span = channel_li_list[i].getElementsByTagName("span");
			var divs = channel_li_list[i].getElementsByTagName("div");
			
			if (i<length)
			{
				channel_li_list[i].style.display="block";
				span[0].innerHTML = channelList[i].number + space + digitalAndAnalog[channelList[i].serviceType?1:0];
				divs[0].innerHTML = channelList[i].name;
			}
			else
			{
				channel_li_list[i].style.display="none";
			}
		}
		$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
	}
	else
	{
		for (var i=0; i<PAGE_MAX; i++)
		{
			channel_li_list[i].style.display="none";
		}
		$("fourthListFocus").style.display="none";
	}
}
function updateChannelList(flag)//更新节目列表数组
{
	if(flag==1)
	{
		channelList=channel.getNextChannelList(0,channelList[0].index,1,PAGE_MAX);
	}
	else
	{
		channelList=channel.getNextChannelList(0,channelList[1].index,1,PAGE_MAX);
	}
}
function uninit()
{
	channel.resetChannelListType(currentChannelListType);
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
	top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var i = 0; i < PAGE_MAX; i++)
	{
		channel_li_list[i].setAttribute("newAttr",i);
		channel_li_list[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "channelList"){
					positionV = parseInt(this.getAttribute("newAttr"),10);
					$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
		}
	}
	
	//button
	$("channelDeleteYes").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "deleteRemind"){
				isDelete = 1;
				$("channelDeleteButtonFocus").style.left="90px";
				toOK();
			}
		}
	}
	$("channelDeleteNo").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "deleteRemind"){
				isDelete = 0;
				$("channelDeleteButtonFocus").style.left="340px";
				toOK();
			}
		}
	}
	$("listUpRemind").onmousedown=function(evt){
		if(evt.button==0){
			if(focusType == "channelList")
			{
				toUp();
			}
		}
	}
	$("listDownRemind").onmousedown=function(evt){
		if(evt.button==0){
			if(focusType == "channelList")
			{
				toDown();
			}
		}
	}
}
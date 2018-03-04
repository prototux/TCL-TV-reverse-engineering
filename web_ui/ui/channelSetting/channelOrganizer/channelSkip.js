var chSkipTitle         = top.chOrganizer[0];//页面标题
var skipPicture         = ["../../images/option/check_2.png","../../images/option/check_3.png"];//显示skip图标样式 0 ：不是skip channel 1：是skip channel
var digitalAndAnalog    = [top.chScanType[2],top.chScanType[1]];
var space               = "&nbsp;&nbsp;&nbsp;&nbsp;";//用于节目号和节目类型之间的空格
var positionV           = 0;//焦点坐标
var channel_li_list;        //UI选项
var serviceType;            //节目类型
var channelList;            //节目列表
var cursor              = 0;//当前焦点节目在节目列表中的位置
var pages;                  //节目列表共有几页
var PAGE_MAX            = 12;//设定每页显示个数
var currentChannelInfo;     //当前节目信息
var current_page        = 0;//当前页
var index_max = PAGE_MAX -1;//游标下表数最大值
var MENU_START 			= 170;//菜单焦点移动起始位置
var MENU_STEP 			= 70;//主菜单焦点移动的step
var currentChannelListType =0;
var channel=top.g_channel;//channel 类
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
	currentChannelListType = channel.channelListType ;
	channel_li_list = $("fourthMenuRight").getElementsByTagName("li");
	$("skipId").getElementsByTagName("span")[0].innerHTML=chSkipTitle;
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
				span[0].innerHTML = channelList[i].number + space + digitalAndAnalog[channelList[i].serviceType?1:0];
				divs[0].innerHTML = channelList[i].name;
				var skipNumber=i;
				if(channelList[i].isSkip==1)
				{
					$("skipList"+skipNumber).src=skipPicture[1];
				}
				else
				{
					$("skipList"+skipNumber).src=skipPicture[0];
				}	
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
		 $("fourthListFocus").style.display = "none";
	}
	addMouseListener();
}
function toUp()//按上键响应函数
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
					var skipNumber=i;
					if(channelList[i].isSkip==1)
					{
						$("skipList"+skipNumber).src=skipPicture[1];
					}
					else
					{
						$("skipList"+skipNumber).src=skipPicture[0];
					}
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
function toDown()//按下键响应函数
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
						var skipNumber=i;
						if(channelList[i].isSkip==1)
						{
							$("skipList"+skipNumber).src=skipPicture[1];
						}
						else
						{
							$("skipList"+skipNumber).src=skipPicture[0];
						}
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

function toOK()//按OK键
{
   if(channelList[positionV].isSkip == 1)
   {
	     channelList[positionV].isSkip = 0; 
	     $("skipList"+positionV).src=skipPicture[0];
   }
   else
   {
		 channelList[positionV].isSkip = 1;
		 if(channelList[positionV].isFavorite == 1)
		 {
			channelList[positionV].isFavorite = 0; 
		 }
		 $("skipList"+positionV).src=skipPicture[1];
   }
}
function toBack()//按左键或返回键
{
	parent.returnPage(3);
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
				positionV = parseInt(this.getAttribute("newAttr"),10);
				$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
				toOK();
			}
		}
	}
    $("listUpRemind").onmousedown=function(evt){
		if(evt.button==0){
				toUp();
		}
	}
	$("listDownRemind").onmousedown=function(evt){
		if(evt.button==0){
				toDown();
		}
	}
}
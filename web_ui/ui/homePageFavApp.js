var appFavConName          = ["Favorite Apps","Edit","pages"];
var appList;                      //保存app列表
var positionV              = 0;   //水平位移
var positionH              = 0;   //垂直位移
var appPageCount           = 0;
var length                 = 0;
var currentPage            = 0;
var APP_LIST_V_STEP        = 282;
var APP_LIST_H_STEP        = 282;
var APP_LIST_H_INIT        = 100;
var APP_LIST_V_INIT        = 50;
var focusType              = "appList";
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
document.onkeydown = keyDownProcess;
function keyDownProcess(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
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
		case top.VK_RIGHT:
		{
			toRight();
			break;
		}
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_MENU: //menu
		{
			top.jumpPage();
			break;
		}
		case top.VK_EXIT:
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
	//appList = setting.getAppFavList(sortBy,Category);
	length=20;
	coutPage();//计算一共有多少页
	for(var i=0;i<appPageCount;i++)
	{
		addAppPage(i);
	}
	for(var j=0;j<appPageCount;j++)
	{
		for(var i = 0;i<18 && i<(length-j*18);i++)
		{
			addAppList("TV nscreen",j);
		}
	}
	showPageFlag();
}
function showPageFlag()
{
	if(focusType == "appList")
	{
		$("pageFlag").style.backgroundColor="#00aadd";
	}
	else if(focusType == "appPageFlag")
	{
		$("pageFlag").style.backgroundColor="#6FF";
	}
	$("pageFlag").style.width = parseInt(600/appPageCount)+"px";
	$("pageFlag").style.left = 660+parseInt(600*currentPage/appPageCount)+"px";
	$("pageCout").innerHTML = (currentPage+1)+"/"+appPageCount+"&nbsp;&nbsp;&nbsp;"+appFavConName[2];
}
function coutPage()
{
	//length=20;//appList.length;
	if(length==0)
	{
		appPageCount = 0;
	}
	else if(length>0&&length<18)
	{
		appPageCount = 1;
	}
	else
	{
		if(length%18==0)
		{
			appPageCount = parseInt(length/18);
		}
		else
		{
			appPageCount = parseInt(length/18)+1;
		}
	}
}
function addAppList(appName,page)
{
    var div=$("page"+page);//创建input
    var li=document.createElement("li");//创建input
	li.innerHTML=appName;
    div.appendChild(li);//插入div内
}
function addAppPage(page)
{
	var div=$("page");
	if(page==0)
	{
		var divChild=document.createElement("div");//创建input
		divChild.setAttribute("class","appList");//设置type属性
		divChild.setAttribute("id","page"+0);
		div.appendChild(divChild);//插入div内
	}
	else
	{
		var divChild=document.createElement("div");//创建input
		divChild.setAttribute("class","appList");//设置type属性
		divChild.setAttribute("id","page"+page);
		divChild.setAttribute("left","1920px");
		div.appendChild(divChild);//插入div内
	}
	
}
function toUp()
{
	if(focusType == "appList")
	{
		if(positionH==0)
		{
			$("appListFocus").style.display="none";
			selectTypePositionV = 0;
			$("selectFocus").style.display = "block";
			focusType = "appSelect";
		}
		else 
		{
			positionH--;
			$("appListFocus").style.top =APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
		}
	}
	else if(focusType == "appPageFlag")
	{
		$("appListFocus").style.display="block";
		positionV = 5;
		positionH = 2;
		if((positionV+positionH*6)+currentPage*18<length-1)
		{
			$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
			$("appListFocus").style.top  =APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
		}
		else
		{
			positionH = parseInt((length-currentPage*18-1)/6);
			positionV = parseInt((length-currentPage*18-1)%6);
			$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
			$("appListFocus").style.top  =APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
		}
		focusType = "appList";
		showPageFlag();
	}
}
function toDown()
{
	if(focusType == "appList")
	{
		
		if(currentPage<appPageCount-1)
		{
			if(positionH==2)
			{
				$("appListFocus").style.display = "none";
				focusType = "appPageFlag";
				showPageFlag();
			}
			else
			{
				positionH++;
				$("appListFocus").style.top =APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
			}
		}
		else 
		{
			if(positionH == 2)
			{
				$("appListFocus").style.display = "none";
				focusType = "appPageFlag";
				showPageFlag();
			}
			else
			{
				positionH++;
				if((positionV+positionH*6)+currentPage*18<length-1) //当前焦点小于总长度
				{
					$("appListFocus").style.top  = APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
				}
				else //当前焦点大于了总长度
				{
					$("appListFocus").style.display = "none";
					focusType = "appPageFlag";
					showPageFlag();
				}
			}
		}
	}
	else if(focusType == "appSelect")
	{
		$("selectFocus").style.display = "none";
		$("appListFocus").style.display = "block";
		focusType = "appList";
	}
}
function toRight()
{
	if(focusType == "appList")
	{
		if(currentPage<appPageCount-1)
		{
			positionV++;
			if(positionV>5)
			{
				$("page"+currentPage).style.webkitTransition = "200ms ease-out";
				$("page"+(currentPage+1)).style.webkitTransition = "200ms ease-out";
				$("page"+currentPage).style.left = "-1920px";
				$("page"+(currentPage+1)).style.left = "50px";
				positionV = 0;
				positionH = 0;
				currentPage++;
				showPageFlag();
				$("appListFocus").style.left = APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
				$("appListFocus").style.top  = APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
			}
			else
			{
				$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
			}
		}
		else 
		{
			if((positionV+positionH*6)+currentPage*18<length-1) //当前焦点小于总长度
			{
				positionV++;
				if(positionV>5)
				{
					if(appPageCount>1)//总的Page不小于1
					{
						$("page"+0).style.left = "1920px";
						$("page"+currentPage).style.webkitTransition = "200ms ease-out";
						$("page"+0).style.webkitTransition = "200ms ease-out";
						$("page"+currentPage).style.left = "-1920px";
						$("page"+0).style.left = "50px";
						currentPage = 0;
						positionV = 0;
						positionH = 0;
						showPageFlag();
						$("appListFocus").style.left = APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
						$("appListFocus").style.top  = APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
					}
				}
				else
				{
					$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
				}
			}
			else //当前焦点大于了总长度
			{
				if(appPageCount>1)//总的Page不小于1
				{
					$("page"+0).style.left = "1920px";
					$("page"+currentPage).style.webkitTransition = "200ms ease-out";
					$("page"+0).style.webkitTransition = "200ms ease-out";
					$("page"+currentPage).style.left = "-1920px";
					$("page"+0).style.left = "50px";
					currentPage = 0;
					positionV = 0;
					positionH = 0;
					showPageFlag();
					$("appListFocus").style.left = APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
					$("appListFocus").style.top  = APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
				}
			}
		}
	
	}
	else if(focusType == "appPageFlag")
	{
		if(currentPage<appPageCount-1)
		{
			$("page"+currentPage).style.webkitTransition = "200ms ease-out";
			$("page"+(currentPage+1)).style.webkitTransition = "200ms ease-out";
			$("page"+currentPage).style.left = "-1920px";
			$("page"+(currentPage+1)).style.left = "50px";
			currentPage++;
			showPageFlag();
		}
		else
		{
			$("page"+0).style.left = "1920px";
			$("page"+currentPage).style.webkitTransition = "200ms ease-out";
			$("page"+0).style.webkitTransition = "200ms ease-out";
			$("page"+currentPage).style.left = "-1920px";
			$("page"+0).style.left = "50px";
			currentPage = 0;
			showPageFlag();
		}
	}
}
function toLeft()
{
	if(focusType == "appList")
	{
		positionV--;
		if(positionV<0)
		{
			if(currentPage>0)
			{
				$("page"+currentPage).style.webkitTransition = "200ms ease-out";
				$("page"+(currentPage-1)).style.webkitTransition = "200ms ease-out";
				$("page"+currentPage).style.left = "1920px";
				$("page"+(currentPage-1)).style.left = "50px";
				currentPage--;
				showPageFlag();
				positionV = 5;
				$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
			}
			else
			{
				if(appPageCount>1)
				{
					$("page"+(appPageCount-1)).style.left="-1920px";
					$("page"+currentPage).style.webkitTransition = "200ms ease-out";
					$("page"+(appPageCount-1)).style.webkitTransition = "200ms ease-out";
					$("page"+currentPage).style.left = "1920px";
					$("page"+(appPageCount-1)).style.left = "50px";
					currentPage = appPageCount-1;
					showPageFlag();
					positionV = 5;
					if((positionV+positionH*6)+currentPage*18<length-1)
					{
						$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
					}
					else
					{
						positionH = parseInt((length-currentPage*18-1)/6);
						positionV = parseInt((length-currentPage*18-1)%6);
						$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
						$("appListFocus").style.top  =APP_LIST_H_INIT + APP_LIST_H_STEP*positionH +"px";
					}
				}
				else
				{
					//目前不做行为
				}
			}
		}
		else
		{
			$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
		}
	}
	else if(focusType == "appPageFlag")
	{
		if(currentPage>0)
		{
			$("page"+currentPage).style.webkitTransition = "200ms ease-out";
			$("page"+(currentPage-1)).style.webkitTransition = "200ms ease-out";
			$("page"+currentPage).style.left = "1920px";
			$("page"+(currentPage-1)).style.left = "50px";
			currentPage--;
			showPageFlag();
		}
		else
		{
			if(appPageCount>1)
			{
				$("page"+(appPageCount-1)).style.left="-1920px";
				$("page"+currentPage).style.webkitTransition = "200ms ease-out";
				$("page"+(appPageCount-1)).style.webkitTransition = "200ms ease-out";
				$("page"+currentPage).style.left = "1920px";
				$("page"+(appPageCount-1)).style.left = "50px";
				currentPage = appPageCount-1;
				showPageFlag();
			}
			else
			{
				//目前不做行为
			}
		}
	}
}
function toOK()
{
	if(focusType == "appList")
	{
		//setting.startApp(index);
	}
	else if(focusType == "appSelect")
	{
		document.location.href="homePageEditApp.html";
	}
}
function toBack()
{
	
}
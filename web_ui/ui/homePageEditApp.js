var appFavConName          = ["Favorite Apps","Edit","pages"];
var appList;                      //保存app列表
var positionV              = 0;   //水平位移
var positionH              = 0;   //垂直位移
var appRowCout             = 0;
var length                 = 0;
var currentRowIndex        = 0;
var APP_LIST_V_STEP        = 282;
var APP_LIST_H_STEP        = 282;
var APP_LIST_H_INIT        = 60;
var APP_LIST_V_INIT        = 20;
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
	length=28;
	coutPage();//计算一共有多少页
	addAppPage(0);
	for(var i = 0;i<length;i++)
	{
		addAppList("TV nscreen"+i,0);
	}
	showPageFlag();
	countAllPage();
	showAllAppList();
	showAllPageFlag();
}
function showPageFlag()
{
	$("pageFlag").style.height = parseInt(500/appRowCout)+"px";
	$("pageFlag").style.top = 80+parseInt(500*currentRowIndex/appRowCout)+"px";
}
function coutPage()
{
	//length=20;//appList.length;
	if(length%5==0)
	{
		appRowCout = parseInt(length/5);
	}
	else
	{
		appRowCout = parseInt(length/5)+1;
	}
}
function addAppList(appName,page)
{
    var div=$("favPage"+page);//创建input
    var li=document.createElement("li");//创建input
	li.innerHTML=appName;
    div.appendChild(li);//插入div内
}
function addAppPage(page)
{
	var div=$("favPage");
	var divChild=document.createElement("div");//创建input
	divChild.setAttribute("class","appList");//设置type属性
	divChild.setAttribute("id","favPage"+0);
	div.appendChild(divChild);//插入div内
	
}
function toUp()
{
	if(focusType == "appList")
	{
		if(currentRowIndex == 0)
		{
			
		}
		else
		{
			if(parseInt(currentRowIndex%2)==0)
			{
				$("favPage0").style.top = 60-(currentRowIndex-2)*APP_LIST_H_STEP+"px";
			}
			currentRowIndex--;
			$("appListFocus").style.top  = APP_LIST_H_INIT + APP_LIST_H_STEP*(parseInt(currentRowIndex%2)) +"px";
		}
		showPageFlag();
	}
	else
	{
		allAppPositionH--;
		if(allAppPositionH<0)
		{
			if(allAppPageIndex>0)
			{
				allAppPageIndex--;
				showAllAppList();
				showAllPageFlag();
				allAppPositionH = 8;
				$("allAppFocus").style.top  = ALL_APP_START + ALL_APP_STEP*allAppPositionH +"px";
			}
			else
			{
				allAppPageIndex = allAppPageCount-1;
				allAppPositionH = allAppLength - allAppPageIndex*9 -1;
				showAllAppList();
				showAllPageFlag();
				$("allAppFocus").style.top  = ALL_APP_START + ALL_APP_STEP*allAppPositionH +"px";
			}
		}
		else
		{
			$("allAppFocus").style.top  = ALL_APP_START + ALL_APP_STEP*allAppPositionH +"px";
		}

	}
}
function toDown()
{
	if(focusType == "appList")
	{
		if(currentRowIndex == appRowCout-1)
		{
			
		}
		else
		{
			if(parseInt(currentRowIndex%2)==1)
			{
				$("favPage0").style.top = 60-(currentRowIndex+1)*APP_LIST_H_STEP+"px";
			}
			currentRowIndex++;
			if(currentRowIndex*5+positionV>length-1)
			{
				positionV = parseInt((length-1)%5);
				$("appListFocus").style.left = APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
			}
			$("appListFocus").style.top  = APP_LIST_H_INIT + APP_LIST_H_STEP*(parseInt(currentRowIndex%2)) +"px";
		}
		showPageFlag();
	}
	else
	{
		if(allAppPositionH<8 && (allAppPageIndex*9+allAppPositionH<allAppLength-1))
		{
			allAppPositionH++;
			$("allAppFocus").style.top  = ALL_APP_START + ALL_APP_STEP*allAppPositionH +"px";
		}
		else
		{
			if(allAppPageIndex*9+allAppPositionH == allAppLength-1)
			{
				allAppPositionH = 0;
				allAppPageIndex = 0;
				showAllAppList();
				showAllPageFlag();
				$("allAppFocus").style.top  = ALL_APP_START + ALL_APP_STEP*allAppPositionH +"px";
			}
			else
			{
				allAppPageIndex++;
				allAppPositionH = 0;
				showAllAppList();
				showAllPageFlag();
				$("allAppFocus").style.top  = ALL_APP_START + ALL_APP_STEP*allAppPositionH +"px";
			}
		}
	}
}
function toRight()
{
	if(focusType == "appList")
	{
		if(currentRowIndex*5+positionV>=length-1 || positionV==4)
		{
			focusType = "allAppList"
			$("appListFocus").style.display = "none";
			$("allAppFocus").style.display = "block";
		}
		else
		{
			positionV++;
			$("appListFocus").style.left = APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
		}
	}
	else
	{
		if(length>0)
		{
			focusType = "appList"
			positionV = 0;
			$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
			$("appListFocus").style.display = "block";
			$("allAppFocus").style.display = "none";
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
			focusType = "allAppList"
			$("appListFocus").style.display = "none";
			$("allAppFocus").style.display = "block";
		}
		else
		{
			$("appListFocus").style.left =APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
		}
	}
	else
	{
		if(length>0)
		{
			focusType = "appList";
			$("appListFocus").style.display = "block";
			$("allAppFocus").style.display = "none";
		}
	}
}
function removeApp()
{
	if(length>0)
	{
		var li=$("favPage"+0).getElementsByTagName("li");
		$("favPage"+0).removeChild(li[positionV+currentRowIndex*5]);
		if((positionV+currentRowIndex*5)<length-1)
		{
			
		}
		else
		{
			positionV--;
			if(positionV<0)
			{
				positionV = 4;
				if(currentRowIndex == 0)
				{
					positionV=0;
					focusType = "allAppList"
					$("appListFocus").style.display = "none";
					$("allAppFocus").style.display = "block";
				}
				else
				{
					if(parseInt(currentRowIndex%2)==0)
					{
						$("favPage0").style.top = 60-(currentRowIndex-2)*APP_LIST_H_STEP+"px";
					}
					currentRowIndex--;
					$("appListFocus").style.top  = APP_LIST_H_INIT + APP_LIST_H_STEP*(parseInt(currentRowIndex%2)) +"px";
					$("appListFocus").style.left = APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
				}
				showPageFlag();
			}
			else
			{
				$("appListFocus").style.top  = APP_LIST_H_INIT + APP_LIST_H_STEP*(parseInt(currentRowIndex%2)) +"px";
				$("appListFocus").style.left = APP_LIST_V_INIT + APP_LIST_V_STEP*positionV +"px";
			}
		}
		length--;
		coutPage();
		showPageFlag();
	}
}
function addApp()
{
	if(length<appRowCout*5)
	{
		//if(allAppList.fav == 0)
		{
			addAppList(length/*name*/,0); //后续有接口后添加
			length++;
		}
	}
	else
	{
		//if(allAppList.fav == 0)
		{
			addAppList(length/*name*/,0);
			length++;
		}
	}
	coutPage();
	showPageFlag();
}
function toOK()
{
	if(focusType == "appList")
	{
		removeApp();
	}
	else if(focusType == "allAppList")
	{
		addApp();
	}
}
function toBack()
{
	
}
var allAppPageCount                = 0;
var allAppPageIndex                = 0;
var allAppPositionH                = 0;
var allAppLength                   = 0;
var allAppList;
var ALL_APP_STEP                   = 100;
var ALL_APP_START                  = 80;
function showAllAppList()
{
	var allLi = $("allAppPage").getElementsByTagName("li");
	for(var i=0 ; i<9 ;i++)
	{
		if(allAppPageIndex*9+i<allAppLength)
		{
			var span = allLi[i].getElementsByTagName("span");
			var img  = allLi[i].getElementsByTagName("img");
			span[0].innerHTML = allAppPageIndex*9+i; //allAppList.index;
			span[1].innerHTML = "APP"+allAppPageIndex*9+i; //allAppList.name;
			img[0].src = "images/Help-0_9.png"; //allAppList.picPath;
		}
		else
		{
			allLi[i].style.display="none";
		}
	}
}
function countAllPage()
{
	allAppLength = 50;//allAppList.length;
	if(allAppLength == 0)
	{
		allAppPageCount = 1;
	}
	else if(allAppLength>0&&allAppLength<9)
	{
		allAppPageCount = 1;
	}
	else
	{
		if(allAppLength%9==0)
		{
			allAppPageCount = parseInt(allAppLength/9);
		}
		else
		{
			allAppPageCount = parseInt(allAppLength/9)+1;
		}
	}
}
function showAllPageFlag()
{
	$("allpPageFlag").style.height = parseInt(500/allAppPageCount)+"px";
	$("allpPageFlag").style.top = 200+parseInt(500*allAppPageIndex/allAppPageCount)+"px";
}
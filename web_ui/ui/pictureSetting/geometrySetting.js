var userPicGeoName             = [top.picOptions[13],top.picGeoOptions[0],top.picGeoOptions[1],top.picGeoOptions[2],top.picGeoOptions[3],top.picGeoOptions[4]];
var geometrySel                = top.manualAuto;
var geometryValue              = 0; //标记geometry选项类型
var geoHPosition               = 0; //H.Position 值
var geoVPosition               = 0; //V.Position 值
var geoClock                   = 0; //Clock 值
var geoPhase                   = 0; //Phase 值
var lis;
var positionV                  = 0;//主界面坐标
var presetPositionV            = 0;//preset 界面焦点坐标
var FORM_STEP                  = 80; //重置选项焦点每移动一下的像素
var MENU_START 			       = 130;//菜单焦点移动起始位置
var MENU_STEP 			       = 70;//主菜单焦点移动的step
var setting = top.g_setting;
var focusType="geoMenuList";
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
	geometryValue = setting.geometryAdjustType;
	lis=$("smallPopWin").getElementsByTagName("li");
	var spans=$("smallPopWin").getElementsByTagName("span");
	for(var i=0;i<6;i++)
	{
		spans[i].innerHTML=userPicGeoName[i];
	}
	initVarValue();
	showProgressBar();
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function initVarValue()
{
	 geoHPosition = setting.geometryHPosition;
	 geoVPosition = setting.geometryVPosition;
	 geoClock = setting.geometryClock;
	 geoPhase = setting.geometryPhase;
}
function showProgressBar()//主界面显示带进度条的选项
{
	var divs=lis[1].getElementsByTagName("div");
	divs[0].innerHTML=geometrySel[geometryValue];
	divs=lis[2].getElementsByTagName("div");
	divs[4].innerHTML=geoHPosition;
	divs=lis[3].getElementsByTagName("div");
	divs[4].innerHTML=geoVPosition;
	divs=lis[4].getElementsByTagName("div");
	divs[4].innerHTML=geoClock;
	divs=lis[5].getElementsByTagName("div");
	divs[4].innerHTML=geoPhase;
	var progDivs=$("Hposition").getElementsByTagName("div");
	progDivs[0].style.width=2*geoHPosition+"px";
	progDivs[2].style.width=200-2*geoHPosition+"px";
	var progDivs=$("Vposition").getElementsByTagName("div");
	progDivs[0].style.width=2*geoVPosition+"px";
	progDivs[2].style.width=200-2*geoVPosition+"px";
	var progDivs=$("clock").getElementsByTagName("div");
	progDivs[0].style.width=(200*geoClock)/255+"px";
	progDivs[2].style.width=200-(200*geoClock)/255+"px";
	var progDivs=$("phase").getElementsByTagName("div");
	progDivs[0].style.width=2*geoPhase+"px";
	progDivs[2].style.width=200-2*geoPhase+"px";
}
var listFormLiList = "";
function showGeometrySelMenu()//显示picture preset 列表
{
	listFormLiList = $("listForm").getElementsByTagName("li");
	presetPositionV=geometryValue;
	
	var topOffset = 410;
	var leftOffset = 1008;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,geometrySel,2,presetPositionV,0);
	
	focusType="geoPresetMenu"
}
function showAdjustBar()//显示待调整进度的选项的进度条
{
	$("smallPopWin").style.display="none";
	geometryValue=0;
	setting.geometryAdjustType = geometryValue;
	switch(positionV)
	{
		case 1:
		{

			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV+4];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV+2];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV+1];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=5*geoHPosition+"px";
			progDivs[2].style.width=500-5*geoHPosition+"px";
			$("adjustProgValue").innerHTML=geoHPosition;
			break;
		}
		case 2:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV+2];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV+1];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=5*geoVPosition+"px";
			progDivs[2].style.width=500-5*geoVPosition+"px";
			$("adjustProgValue").innerHTML=geoVPosition;
			break;
		}
		case 3:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV+2];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV+1];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=(500*geoClock)/255+"px";
			progDivs[2].style.width=500-(500*geoClock)/255+"px";
			$("adjustProgValue").innerHTML=geoClock;
			break;
		}
		case 4:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV-4];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicGeoName[positionV+1];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=5*geoPhase+"px";
			progDivs[2].style.width=500-5*geoPhase+"px";
			$("adjustProgValue").innerHTML=geoPhase;
			break;
		}
		default:
			break;
	}
	$("adjustProgressBox").style.display="block";
	focusType="adjustBar";
}
function adjustBarValue(value)//调整进度条的值
{
	switch(positionV)
	{
		case 1:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			geoHPosition=geoHPosition+value;
			if(geoHPosition<0)
			{
				geoHPosition=0;
				return;
			}
			else if(geoHPosition>100)
			{
				geoHPosition=100;
				return;
			}
			else
			{
				setting.geometryHPosition=geoHPosition;
			}
			progDivs[0].style.width=5*geoHPosition+"px";
			progDivs[2].style.width=500-5*geoHPosition+"px";
			$("adjustProgValue").innerHTML=geoHPosition;
			break;
		}
		case 2:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			geoVPosition=geoVPosition+value;
			if(geoVPosition<0)
			{
				geoVPosition=0;
				return;
			}
			else if(geoVPosition>100)
			{
				geoVPosition=100;
				return;
			}
			else
			{
				setting.geometryVPosition=geoVPosition;
			}
			progDivs[0].style.width=5*geoVPosition+"px";
			progDivs[2].style.width=500-5*geoVPosition+"px";
			$("adjustProgValue").innerHTML=geoVPosition;
			break;
		}
		case 3:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			geoClock=geoClock+value;
			if(geoClock<0)
			{
				geoClock=0;
				return;
			}
			else if(geoClock>255)
			{
				geoClock=255;
				return;
			}
			else
			{
				setting.geometryClock=geoClock;
			}
			progDivs[0].style.width=(500*geoClock)/255+"px";
			progDivs[2].style.width=500-(500*geoClock)/255+"px";
			$("adjustProgValue").innerHTML=geoClock;
			break;
		}
		case 4:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			geoPhase=geoPhase+value;
			if(geoPhase<0)
			{
				geoPhase=0;
				return;
			}
			else if(geoPhase>100)
			{
				geoPhase=100;
				return;
			}
			else
			{
				setting.geometryPhase=geoPhase;
			}
			progDivs[0].style.width=5*geoPhase+"px";
			progDivs[2].style.width=500-5*geoPhase+"px";
			$("adjustProgValue").innerHTML=geoPhase;
			break;
		}
	}
}
function toBack()
{
	if(focusType=="geoMenuList")
	{
		parent.returnPopWindow(2);
	}
	else if(focusType=="geoPresetMenu")
	{
		$("popListFocus").style.display = "block";
	    $("listForm").style.display = "none";
		focusType="geoMenuList";
	}
	else if(focusType=="adjustBar")
	{
		showProgressBar();
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		$("adjustProgressBox").style.display="none";
		$("smallPopWin").style.display="block";
		focusType="geoMenuList";
	}
}
function toOK()
{
	if(focusType=="geoMenuList")
	{
		switch(positionV)
		{
			case 0:
			{
				showGeometrySelMenu();
				break;	
			}
			case 1:
			case 2:
			case 3:
			case 4:
			{
				showAdjustBar();
				break;
			}
		}
	}
	else if(focusType=="geoPresetMenu")
	{
		geometryValue = presetPositionV;
		setting.geometryAdjustType = presetPositionV;
		if(geometryValue==1)
		{
			setting.geometryAutoAdjust();
		}
		initVarValue();
		showProgressBar();
	    $("popListFocus").style.display = "block";
	    $("listForm").style.display = "none";
		focusType="geoMenuList";
	}
}
function toUp()
{
	if(focusType=="geoMenuList")
	{
		positionV--;
		if(positionV<0)
		{
			positionV=4;
		}
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType=="adjustBar")
	{
		positionV--;
		if(positionV<1)
		{
			positionV=4;
		}
		showAdjustBar();
	}
	else if(focusType=="geoPresetMenu")
	{
		presetPositionV--;
		if(presetPositionV<0)
		{
			presetPositionV=1;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP+"px";
	}
}
function toDown()
{
	if(focusType=="geoMenuList")
	{
		positionV++;
		if(positionV>4)
		{
			positionV=0;
		}
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType=="adjustBar")
	{
		positionV++;
		if(positionV>4)
		{
			positionV=1;
		}
		showAdjustBar();
	}
	else if(focusType=="geoPresetMenu")
	{
		presetPositionV++;
		if(presetPositionV>1)
		{
			presetPositionV=0;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP+"px";
	}
}
function toLeft()
{
	if(focusType=="adjustBar")
	{
		adjustBarValue(-1);
	}
	else 
	{
		toBack();
	}
}
function toRight()
{
	if(focusType=="adjustBar")
	{
		adjustBarValue(1);
	}
	else
	{
		toOK();
	}
}

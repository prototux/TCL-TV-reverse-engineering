var picWhiteBalConName     = [top.picAdOptions[9],top.picAdWhiteBal[0],top.picAdWhiteBal[1],top.picAdWhiteBal[2],top.picAdWhiteBal[3],top.picAdWhiteBal[4],top.picAdWhiteBal[5]];
var positionV              = 0;//主界面坐标
var picRgainVal            = 0; //保存R GAINl的值
var picGgainVal            = 0;//保存G GAINl的值
var picBgainVal            = 0;//保存B GAIN的值
var picRoffsetVal          = 0;
var picGoffsetVal          = 0;
var picBoffsetVal          = 0;
var lis;
var MENU_START 			   = 130;//菜单焦点移动起始位置
var MENU_STEP 			   = 70;//主菜单焦点移动的ste
var setting = top.g_setting;
var focusType="picWhiteBalList";
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
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
			ret = false;
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
function toUp()
{
	if(focusType=="picWhiteBalList")
	{
		positionV--;
		if(positionV<0)
		{
			positionV=5;
		}
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType=="adjustBar")
	{
		positionV--;
		if(positionV<0)
		{
			positionV=5;
		}
		showAdjustMenu();
	}
}
function toDown()
{
	if(focusType=="picWhiteBalList")
	{
		positionV++;
		if(positionV>5)
		{
			positionV=0;
		}
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType=="adjustBar")
	{
		positionV++;
		if(positionV>5)
		{
			positionV=0;
		}
		showAdjustMenu();
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
function toOK()
{
	if(focusType=="picWhiteBalList")
	{
		showAdjustMenu();
	}
}
function toBack()
{
	if(focusType=="picWhiteBalList")
	{
		parent.returnPage(3);
	}
	else if(focusType=="adjustBar")
	{
		top.timeoutFuc.timeoutTimes = 30;
		showGainMenu();
		$("adjustProgressBox").style.display="none";
		parent.showPage(3);
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		focusType="picWhiteBalList";
	}
}
function init()
{
	timeoutInit();
	lis=$("fourthMenuRight").getElementsByTagName("li");
	var spans=$("fourthMenuRight").getElementsByTagName("span");
	for(var i=0;i<7;i++)
	{
		spans[i].innerHTML=picWhiteBalConName[i];
	}
	initVarValue();
	showGainMenu();
	addMouseListener();
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function initVarValue()
{
	picRgainVal = setting.whiteBalanceR; //保存R GAINl的值
	picGgainVal = setting.whiteBalanceG;//保存G GAINl的值
	picBgainVal = setting.whiteBalanceB;//保存B GAIN的值
	picRoffsetVal = setting.whiteBalanceRoffset; //保存ROffset的值
	picGoffsetVal = setting.whiteBalanceGoffset;//保存GOffset的值
	picBoffsetVal = setting.whiteBalanceBoffset;//保存BOffset的值
}
function showGainMenu()//主界面显示所有进度条
{
	var divs = lis[1].getElementsByTagName("div");
	var progDivs=$("RGain").getElementsByTagName("div");
	progDivs[0].style.width=150+5*picRgainVal+"px";
	progDivs[2].style.width=150-5*picRgainVal+"px";
	divs[4].innerHTML=picRgainVal;
	var divs = lis[2].getElementsByTagName("div");
	var progDivs=$("GGain").getElementsByTagName("div");
	progDivs[0].style.width=150+5*picGgainVal+"px";
	progDivs[2].style.width=150-5*picGgainVal+"px";
	divs[4].innerHTML=picGgainVal;
	var divs = lis[3].getElementsByTagName("div");
	var progDivs=$("BGain").getElementsByTagName("div");
	progDivs[0].style.width=150+5*picBgainVal+"px";
	progDivs[2].style.width=150-5*picBgainVal+"px";
	divs[4].innerHTML=picBgainVal;
		var divs = lis[4].getElementsByTagName("div");
	var progDivs=$("Roffset").getElementsByTagName("div");
	progDivs[0].style.width=150+5*picRoffsetVal+"px";
	progDivs[2].style.width=150-5*picRoffsetVal+"px";
	divs[4].innerHTML=picRoffsetVal;
		var divs = lis[5].getElementsByTagName("div");
	var progDivs=$("Goffset").getElementsByTagName("div");
	progDivs[0].style.width=150+5*picGoffsetVal+"px";
	progDivs[2].style.width=150-5*picGoffsetVal+"px";
	divs[4].innerHTML=picGoffsetVal;
		var divs = lis[6].getElementsByTagName("div");
	var progDivs=$("Boffset").getElementsByTagName("div");
	progDivs[0].style.width=150+5*picBoffsetVal+"px";
	progDivs[2].style.width=150-5*picBoffsetVal+"px";
	divs[4].innerHTML=picBoffsetVal;
}
var  EXTRA_PROGRESS_WIDTH_1_2 = 450;
function showAdjustMenu()//显示该选项的选择控制界面和准备选择选项
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(3);
	switch(positionV)
	{
		case 0:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[6];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[1];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picRgainVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picRgainVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 1:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[1];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picGgainVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picGgainVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 2:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picBgainVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picBgainVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picBgainVal;
			break;
		}
		case 3:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[5];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picRoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picRoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picRoffsetVal;
			break;
		}
		case 4:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[6];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[5];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picGoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picGoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picGoffsetVal;
			break;
		}
		case 5:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[5];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[1];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[6];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picBoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picBoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picBoffsetVal;
			break;
		}
	}
	$("adjustProgressBox").style.display="block";
	focusType="adjustBar";
}
function adjustBarValue(value)//调整进度条的值
{		
	switch(positionV)
	{
		case 0:
		{
			picRgainVal=picRgainVal+value;
			if(picRgainVal<-30)
			{
				picRgainVal=-30;
				return;
			}
			else if(picRgainVal>30)
			{
				picRgainVal=30;
				return;
			}
			else
			{
				setting.whiteBalanceR=picRgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picRgainVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picRgainVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 1:
		{
			picGgainVal=picGgainVal+value;
			if(picGgainVal<-30)
			{
				picGgainVal=-30;
				return;
			}
			else if(picGgainVal>30)
			{
				picGgainVal=30;
				return;
			}
			else
			{
				setting.whiteBalanceG=picGgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picGgainVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picGgainVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 2:
		{
			picBgainVal=picBgainVal+value;
			if(picBgainVal<-30)
			{
				picBgainVal=-30;
				return;
			}
			else if(picBgainVal>30)
			{
				picBgainVal=30;
				return;
			}
			else
			{
				setting.whiteBalanceB=picBgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picBgainVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picBgainVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picBgainVal;
			break;
		}
		case 3:
		{
			picRoffsetVal=picRoffsetVal+value;
			if(picRoffsetVal<-30)
			{
				picRoffsetVal=-30;
				return;
			}
			else if(picRoffsetVal>30)
			{
				picRoffsetVal=30;
				return;
			}
			else
			{
				setting.whiteBalanceRoffset=picRoffsetVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picRoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picRoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picRoffsetVal;
			break;
		}
		case 4:
		{
			picGoffsetVal=picGoffsetVal+value;
			if(picGoffsetVal<-30)
			{
				picGoffsetVal=-30;
				return;
			}
			else if(picGoffsetVal>30)
			{
				picGoffsetVal=30;
				return;
			}
			else
			{
				setting.whiteBalanceGoffset=picGoffsetVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picGoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picGoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picGoffsetVal;
			break;
		}
		case 5:
		{
			picBoffsetVal=picBoffsetVal+value;
			if(picBoffsetVal<-30)
			{
				picBoffsetVal=-30;
				return;
			}
			else if(picBoffsetVal>30)
			{
				picBoffsetVal=30;
				return;
			}
			else
			{
				setting.whiteBalanceBoffset=picBoffsetVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picBoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picBoffsetVal)/PROGRESS_MAX_VALUE)+"px";
			$("adjustProgValue").innerHTML=picBoffsetVal;
			break;
		}
	}
}
function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
	parent.$("subMenu2").contentWindow.updateAdvanced(top.picAdOptions[9]);
}
var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 60;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 900;
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2) 
		{
			toBack();//right key
		}
	}
	for(var i = 0; i < 6; i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="picWhiteBalList")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
		$("adjustProgMinorUp").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toUp();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("adjustProgMinorDown").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toDown();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("adjustProgBar").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="adjustBar")
			{
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10)-30;
				switch(positionV)
				{
					case 0:
					{
						picRgainVal=value;
						if(picRgainVal<-30)
						{
							picRgainVal=-30;
						}
						else if(picRgainVal>30)
						{
							picRgainVal=30;
						}
							setting.whiteBalanceR=picRgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picRgainVal)/PROGRESS_MAX_VALUE)+"px";
						progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picRgainVal)/PROGRESS_MAX_VALUE)+"px";
						$("adjustProgValue").innerHTML=picRgainVal;
						break;
					}
					case 1:
					{
						picGgainVal=value;
						if(picGgainVal<-30)
						{
							picGgainVal=-30;
						}
						else if(picGgainVal>30)
						{
							picGgainVal=30;
						}
						setting.whiteBalanceG=picGgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picGgainVal)/PROGRESS_MAX_VALUE)+"px";
						progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picGgainVal)/PROGRESS_MAX_VALUE)+"px";
						$("adjustProgValue").innerHTML=picGgainVal;
						break;
					}
					case 2:
					{
						picBgainVal=value;
						if(picBgainVal<-30)
						{
							picBgainVal=-30;
						}
						else if(picBgainVal>30)
						{
							picBgainVal=30;
						}
						setting.whiteBalanceB=picBgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picBgainVal)/PROGRESS_MAX_VALUE)+"px";
						progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picBgainVal)/PROGRESS_MAX_VALUE)+"px";
						$("adjustProgValue").innerHTML=picBgainVal;
						break;
					}
					case 3:
					{
						picRoffsetVal=value;
						if(picRoffsetVal<-30)
						{
							picRoffsetVal=-30;
						}
						else if(picRoffsetVal>30)
						{
							picRoffsetVal=30;
						}
						setting.whiteBalanceRoffset=picRoffsetVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picRoffsetVal)/PROGRESS_MAX_VALUE)+"px";
						progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picRoffsetVal)/PROGRESS_MAX_VALUE)+"px";
						$("adjustProgValue").innerHTML=picRoffsetVal;
						break;
					}
					case 4:
					{
						picGoffsetVal=value;
						if(picGoffsetVal<-30)
						{
							picGoffsetVal=-30;
						}
						else if(picGoffsetVal>30)
						{
							picGoffsetVal=30;
						}
						setting.whiteBalanceGoffset=picGoffsetVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picGoffsetVal)/PROGRESS_MAX_VALUE)+"px";
						progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picGoffsetVal)/PROGRESS_MAX_VALUE)+"px";
						$("adjustProgValue").innerHTML=picGoffsetVal;
						break;
					}
					case 5:
					{
						picBoffsetVal=value;
						if(picBoffsetVal<-30)
						{
							picBoffsetVal=-30;
						}
						else if(picBoffsetVal>30)
						{
							picBoffsetVal=30;
						}
						setting.whiteBalanceBoffset=picBoffsetVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=EXTRA_PROGRESS_WIDTH_1_2+parseInt((EXTRA_PROGRESS_WIDTH*picBoffsetVal)/PROGRESS_MAX_VALUE)+"px";
						progDivs[2].style.width=EXTRA_PROGRESS_WIDTH_1_2-parseInt((EXTRA_PROGRESS_WIDTH*picBoffsetVal)/PROGRESS_MAX_VALUE)+"px";
						$("adjustProgValue").innerHTML=picBoffsetVal;
						break;
					}
				}
			}
			
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}
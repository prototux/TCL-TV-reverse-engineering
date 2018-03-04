var picWhiteBalConName     = [top.picAdOptions[15],top.pic10Pwhite[0],top.pic10Pwhite[1],top.pic10Pwhite[2],top.pic10Pwhite[3],top.pic10Pwhite[4]];
var picReset               = [top.pic10PReset,top.okCancel[0],top.okCancel[1]];
var positionV              = 0;//主界面坐标
var picRgainVal            = 0; //保存R GAINl的值
var picGgainVal            = 0;//保存G GAINl的值
var picBgainVal            = 0;//保存B GAIN的值
var PwhiteBalanceVal       = 0;
var InterVal               = 0;
var presetFocusWidth       = 210;
var presetPositionH        = 0;
var isReset                = 0;
var offOn          		   = top.offOn;
var lis;
var MENU_START 			   = 130;//菜单焦点移动起始位置
var MENU_STEP 			   = 70;//主菜单焦点移动的ste
var presetSpans;
var setting = top.g_setting;
var listFirstSpans;
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
		if(PwhiteBalanceVal==1)
		{
			positionV--;
			if(positionV<0)
			{
				positionV=5;
			}
		}
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		top.doEleScrForNoOption(listFirstSpans, positionV, -1);
	}
	else if(focusType=="adjustBar")
	{
		positionV--;
		if(positionV<2)
		{
			positionV=4;
		}
		showAdjustMenu();
	}
}
function toDown()
{
	if(focusType=="picWhiteBalList")
	{
		if(PwhiteBalanceVal==1)
		{
			positionV++;
			if(positionV>5)
			{
				positionV=0;
			}
		}
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		top.doEleScrForNoOption(listFirstSpans, positionV, 1);
	}
	else if(focusType=="adjustBar")
	{
		positionV++;
		if(positionV>4)
		{
			positionV=2;
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
	else if(focusType=="IntervalSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>4)
		{
			if(currentInterValPageIndex==1)
			{
				currentInterValPageIndex=0;
				presetPositionH=0;
				showInterValSelMenu();
			}
			else
			{
				currentInterValPageIndex=1;
				presetPositionH=0;
				showInterValSelMenu();
			}
		}
		//setting.picInterval=currentInterValPageIndex*5+presetPositionH+1;
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="PwhBalSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		//setting.pic10PwhiteBalance = presetPositionH;
		setting.preview10PGamma(presetPositionH);
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="picReset")
	{
		isReset++;
		if(isReset>1)
		{
			isReset=0;
			$("picResetFocus").style.left="420px";
		}
		else
		{
			$("picResetFocus").style.left="190px";
		}
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
	else if(focusType=="IntervalSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			if(currentInterValPageIndex==1)
			{
				currentInterValPageIndex=0;
				presetPositionH=4;
				showInterValSelMenu();
			}
			else
			{
				currentInterValPageIndex=1;
				presetPositionH=4;
				showInterValSelMenu();
			}

		}
		//setting.picInterval=currentInterValPageIndex*5+presetPositionH+1;
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="PwhBalSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		//setting.pic10PwhiteBalance = presetPositionH;
		setting.preview10PGamma(presetPositionH);
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="picReset")
	{
		isReset--;
		if(isReset<0)
		{
			isReset=1;
			$("picResetFocus").style.left="190px";
		}
		else
		{
			$("picResetFocus").style.left="420px";
		}
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
		switch(positionV)
		{
			case 0:
			show10PwhBalSelMenu();
			break;
			case 1:
			currentInterValPageIndex=parseInt((InterVal-1)/5);
			presetPositionH=parseInt((InterVal-1)%5);
			showInterValSelMenu();
			break;
			case 2:
			case 3:
			case 4:
			showAdjustMenu();
			break;
			case 5:
			showPicReset();
			break;
			default:
			break
		}
	}
	else if(focusType=="IntervalSelMenu")
	{
		InterVal=presetPositionH+currentInterValPageIndex*5+1;
		setting.picInterval=InterVal;
		showInterValMenu();
		initVarValue();
	    showGainMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picWhiteBalList";
	}
	else if(focusType=="PwhBalSelMenu")
	{
		PwhiteBalanceVal=presetPositionH;
		setting.pic10PwhiteBalance = PwhiteBalanceVal;
		showUIList();
		show10PwhiteBalanceMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picWhiteBalList";
	}
	else if(focusType=="picReset")
	{
		if(isReset==1)
		{
			isReset=0;
			setting.pic10PwhiteReset();
			updatePictureData();
		}
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px";
		parent.showPage(3);
		top.restartTimeout();
		focusType="picWhiteBalList";
	}
}
function toBack()
{
	if(focusType=="picWhiteBalList")
	{
		parent.returnPage(3);
		parent.$("subMenu2").contentWindow.updateAdvanced(top.picAdOptions[15]);
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
	else if(focusType=="IntervalSelMenu")
	{
		//setting.picInterval=InterVal;
		showInterValMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picWhiteBalList";
	}
	else if(focusType=="PwhBalSelMenu")
	{
		//setting.pic10PwhiteBalance=PwhiteBalanceVal;
		setting.preview10PGamma(PwhiteBalanceVal);
		show10PwhiteBalanceMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picWhiteBalList";
	}
	else if(focusType=="picReset")
	{
		isReset=0;
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px"
		parent.showPage(3);
		top.restartTimeout();
		focusType="picWhiteBalList";
	}
}
function init()
{
	timeoutInit();
	lis=$("fourthMenuRight").getElementsByTagName("li");
	var spans=$("fourthMenuRight").getElementsByTagName("span");
	listFirstSpans = $("fourthMenuRight").getElementsByClassName("listFirstProperty");
	spans[0].innerHTML=picWhiteBalConName[0];
	for(var i=0;i<6;i++)
	{
		spans[i+1].innerHTML=picWhiteBalConName[i];
	}
	initVarValue();
	showGainMenu();
	show10PwhiteBalanceMenu();
	showInterValMenu();
	showUIList();
	top.doEleScrForNoOption(listFirstSpans, positionV, 0)
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
	PwhiteBalanceVal  = setting.pic10PwhiteBalance;
    InterVal    = setting.picInterval;
	picRgainVal = setting.pic10PRed; //保存R GAINl的值
	picGgainVal = setting.pic10PGreen;//保存G GAINl的值
	picBgainVal = setting.pic10PBlue;//保存B GAIN的值
}
function updatePictureData()
{
	initVarValue();
	showGainMenu();
	show10PwhiteBalanceMenu();
	showInterValMenu();
	showUIList();
	if(PwhiteBalanceVal==1)
	{
		
	}
	else
	{
		positionV=0;
	}
	$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}
function showUIList()
{
	if(PwhiteBalanceVal==1)
	{
		for(var i=0;i<6;i++)
		{
			lis[1+i].style.display="block";
		}
	}
	else
	{
		for(var i=1;i<6;i++)
		{
			lis[1+i].style.display="none";
		}
	}
}
function show10PwhiteBalanceMenu()
{
	var divs = lis[1].getElementsByTagName("div");
	divs[0].innerHTML=offOn[PwhiteBalanceVal];
}
function showInterValMenu()
{
	var divs = lis[2].getElementsByTagName("div");
	divs[0].innerHTML=InterVal;
}
function showGainMenu()//主界面显示所有进度条
{
	var divs = lis[3].getElementsByTagName("div");
	var progDivs=$("RGain").getElementsByTagName("div");
	progDivs[0].style.width=150+15*picRgainVal/3+"px";
	progDivs[2].style.width=150-15*picRgainVal/3+"px";
	divs[4].innerHTML=picRgainVal;
	var divs = lis[4].getElementsByTagName("div");
	var progDivs=$("GGain").getElementsByTagName("div");
	progDivs[0].style.width=150+15*picGgainVal/3+"px";
	progDivs[2].style.width=150-15*picGgainVal/3+"px";
	divs[4].innerHTML=picGgainVal;
	var divs = lis[5].getElementsByTagName("div");
	var progDivs=$("BGain").getElementsByTagName("div");
	progDivs[0].style.width=150+15*picBgainVal/3+"px";
	progDivs[2].style.width=150-15*picBgainVal/3+"px";
	divs[4].innerHTML=picBgainVal;
}

function showAdjustMenu()//显示该选项的选择控制界面和准备选择选项
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(3);
	switch(positionV)
	{
		case 2:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picRgainVal)/6+"px";
			progDivs[2].style.width=450-(90*picRgainVal)/6+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 3:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picGgainVal)/6+"px";
			progDivs[2].style.width=450-(90*picGgainVal)/6+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 4:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picBgainVal)/6+"px";
			progDivs[2].style.width=450-(90*picBgainVal)/6+"px";
			$("adjustProgValue").innerHTML=picBgainVal;
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
		case 2:
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
				setting.pic10PRed=picRgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picRgainVal)/6+"px";
			progDivs[2].style.width=450-(90*picRgainVal)/6+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 3:
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
				setting.pic10PGreen=picGgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picGgainVal)/6+"px";
			progDivs[2].style.width=450-(90*picGgainVal)/6+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 4:
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
				setting.pic10PBlue=picBgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picBgainVal)/6+"px";
			progDivs[2].style.width=450-(90*picBgainVal)/6+"px";
			$("adjustProgValue").innerHTML=picBgainVal;
			break;
		}
	}
}
function show10PwhBalSelMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picWhiteBalConName[0];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=PwhiteBalanceVal;
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(3)
	$("preSetLeft").style.display="none"
	$("preSetRight").style.display="none"
	$("preSetBar").style.display="block"
	focusType="PwhBalSelMenu";
	top.doElementScroll(presetSpans,presetPositionH);
}
var currentInterValPageIndex =0;
function showInterValSelMenu()
{
	showPersetSelect(5);
	var optionSelect = -1; 
	$("preSetOption").innerHTML=picWhiteBalConName[1];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<5;i++)
	{
		spans[i+1].innerHTML=currentInterValPageIndex*5+i+1;
		if(currentInterValPageIndex*5+i+1 == InterVal)
		{
			optionSelect = i;
		}
	}
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	if(optionSelect>=0)
	{
		$("currentOption").style.left = 360+optionSelect*presetFocusWidth+"px";
		$("currentOption").style.display = "block";
	}
	else
	{
		$("currentOption").style.display = "none";
	}
	parent.hiddenPage(3)
	$("preSetLeft").style.display="block"
	$("preSetRight").style.display="block"
	$("preSetBar").style.display="block"
	focusType="IntervalSelMenu";
}
function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	presetSpans=$("preSetBar").getElementsByTagName("span");
	switch(optionMax)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		$("preSetBar").style.left=parseInt((1920-390-optionMax*230)/2)+"px";
		$("preSetLeft").style.display="none";
		$("preSetRight").style.display="none";
		break;
		default:
		$("preSetBar").style.left=parseInt((1920-390-optionMax*230)/2)+"px";
		$("preSetLeft").style.display="block";
		$("preSetRight").style.display="block";
		break;
	}
	for(var i=0;(i<5&&i<optionMax);i++)
	{
		presetSpans[i+1].style.display="block";
	}
	if(optionMax<5)
	{
		for(var i=optionMax;i<presetSpans.length-1;i++)
		{
			presetSpans[i+1].style.display="none";
		}
		$("preSetBar").style.width=390+optionMax*230+"px";
	}
	else
	{
		$("preSetBar").style.width=390+5*230+"px";
	}
	presetFocusWidth=230;
}
function showPicReset()//弹出用户图像数据重置对话框
{
	parent.hiddenPage(3);
	var picReSpans=$("picReset").getElementsByTagName("span");
	var picReDivs=$("picReset").getElementsByTagName("div");
	picReSpans[0].innerHTML=picWhiteBalConName[5];
	picReSpans[1].innerHTML=picReset[0];
	picReDivs[0].innerHTML=picReset[1];
	picReDivs[1].innerHTML=picReset[2];
	$("picReset").style.display="block";
	top.stopTimeout();
	focusType="picReset";
}
function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
	if(focusType=="IntervalSelMenu")
	{
	}
	else if(focusType=="PwhBalSelMenu")
	{
		setting.preview10PGamma(PwhiteBalanceVal);
	}
}
var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 20;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
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
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var i = 0; i < 5; i++)
	{
		spans[i+1].setAttribute("newAttr",i);
		spans[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="IntervalSelMenu" )
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					setting.picInterval=currentInterValPageIndex*5+presetPositionH+1;
					$("preSetSelectFocus").style.left=300+presetPositionH*presetFocusWidth+"px";
					toOK();
				}
				else if(focusType=="PwhBalSelMenu")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					$("preSetSelectFocus").style.left=300+presetPositionH*presetFocusWidth+"px";
					setting.pic10PwhiteBalance = presetPositionH;
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("preSetLeft").onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toLeft();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("preSetRight").onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toRight();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
		
	var picReDivs=$("picReset").getElementsByTagName("div");
	picReDivs[0].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="picReset" )
				{
					isReset=1;
					$("picResetFocus").style.left="190px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	picReDivs[1].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="picReset" )
				{
					isReset=0;
					$("picResetFocus").style.left="420px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
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
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10)-10;
				switch(positionV)
				{
					case 2:
					{
						picRgainVal=value;
						if(picRgainVal<-10)
						{
							picRgainVal=-10;
						}
						else if(picRgainVal>10)
						{
							picRgainVal=10;
						}
						setting.pic10PRed=picRgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=450+(90*picRgainVal)/2+"px";
						progDivs[2].style.width=450-(90*picRgainVal)/2+"px";
						$("adjustProgValue").innerHTML=picRgainVal;
						break;
					}
					case 3:
					{
						picGgainVal=value;
						if(picGgainVal<-10)
						{
							picGgainVal=-10;
						}
						else if(picGgainVal>10)
						{
							picGgainVal=10;
						}
						setting.pic10PGreen=picGgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=450+(90*picGgainVal)/2+"px";
						progDivs[2].style.width=450-(90*picGgainVal)/2+"px";
						$("adjustProgValue").innerHTML=picGgainVal;
						break;
					}
					case 4:
					{
						picBgainVal=value;
						if(picBgainVal<-10)
						{
							picBgainVal=-10;
						}
						else if(picBgainVal>10)
						{
							picBgainVal=10;
					
						}
						setting.pic10PBlue=picBgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=450+(90*picBgainVal)/2+"px";
						progDivs[2].style.width=450-(90*picBgainVal)/2+"px";
						$("adjustProgValue").innerHTML=picBgainVal;
						break;
					}
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}
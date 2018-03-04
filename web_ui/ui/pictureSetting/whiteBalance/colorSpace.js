var picWhiteBalConName     = [top.picAdOptions[19],top.pic10Pwhite[5],top.pic10Pwhite[1],top.pic10Pwhite[2],top.pic10Pwhite[3],top.pic10Pwhite[4]];
var picReset               = [top.picColorSpaceReset,top.okCancel[0],top.okCancel[1]];
var colorSpace             = [top.colorSpace[0],top.colorSpace[1],top.colorSpace[3],top.colorSpace[2]];
var colorSpaceColor        = [top.pic10Pwhite[1],top.pic10Pwhite[2],top.pic10Pwhite[3],top.pic10Pwhite[6],top.pic10Pwhite[7],top.pic10Pwhite[8]]
var positionV              = 0;//主界面坐标
var picRgainVal            = 0; //保存R GAINl的值
var picGgainVal            = 0;//保存G GAINl的值
var picBgainVal            = 0;//保存B GAIN的值
var colorSpaceVal          = 0;
var colorVal               = 0;
var presetFocusWidth       = 180;
var presetPositionH        = 0;
var isReset                = 0;
var offOn          		   = top.offOn;
var lis;
var MENU_START 			   = 130;//菜单焦点移动起始位置
var MENU_STEP 			   = 70;//主菜单焦点移动的ste
var presetSpans;
var setting = top.g_setting;
var listFirstSpans;
var focusType="picColorSpaceList";
var isXVYCCEnable          = setting.getProperty("ro.sita.model.TCL_PANEL_SETTING.PANEL_XVYCC_ENABLE", "0");
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
	if(focusType=="picColorSpaceList")
	{
		if(colorSpaceVal==3)
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
	if(focusType=="picColorSpaceList")
	{
		if(colorSpaceVal==3)
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
	else if(focusType=="colorSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>5)
		{
			presetPositionH=0;
		}
		//setting.picColor=presetPositionH;
		setting.previewColorSpaceColor(presetPositionH);
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="colorSpaceSelMenu")
	{
		presetPositionH++;
        if(0 == isXVYCCEnable)
        {
            if(presetPositionH>2)
            {
                presetPositionH=0;
            }
            setting.previewColorSpace(presetPositionH);
        }
        else
        {
            if(presetPositionH>3)
            {
                presetPositionH=0;
            }
            setting.previewColorSpace(colorSpaceTransform(presetPositionH));
        }
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
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
	else if(focusType=="colorSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=5;
		}
		//setting.picColor=presetPositionH;
		setting.previewColorSpaceColor(presetPositionH);
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="colorSpaceSelMenu")
	{
		presetPositionH--;
        if(0 == isXVYCCEnable)
        {
            if(presetPositionH<0)
            {
                presetPositionH=2;
            }
            setting.previewColorSpace(presetPositionH);
        }
        else
        {
            if(presetPositionH<0)
            {
                presetPositionH=3;
            }
            setting.previewColorSpace(colorSpaceTransform(presetPositionH));
        }
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
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
	if(focusType=="picColorSpaceList")
	{
		switch(positionV)
		{
			case 0:
			showcolorSpaceSelMenu();
			break;
			case 1:
			showcolorSelMenu();
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
	else if(focusType=="colorSelMenu")
	{
		colorVal=presetPositionH;
		setting.picColor=colorVal;
		showColorValMenu();
		initVarValue();
	    showGainMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picColorSpaceList";
	}
	else if(focusType=="colorSpaceSelMenu")
	{
		colorSpaceVal=presetPositionH;
        if(0 == isXVYCCEnable)
        {
            setting.colorSpace=colorSpaceVal;
        }
        else
        {
            setting.colorSpace=colorSpaceTransform(colorSpaceVal);
        }
		showUIList();
		showColorSpaceMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picColorSpaceList";
	}
	else if(focusType=="picReset")
	{
		if(isReset==1)
		{
			isReset=0;
			setting.picColorSpaceReset();
			updatePictureData();
		}
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px";
		parent.showPage(3);
		top.restartTimeout();
		focusType="picColorSpaceList";
	}
}
function toBack()
{
	if(focusType=="picColorSpaceList")
	{
		parent.returnPage(3);
		parent.$("subMenu2").contentWindow.updateAdvanced(top.picAdOptions[19]);
	}
	else if(focusType=="adjustBar")
	{
		top.timeoutFuc.timeoutTimes = 30;
		showGainMenu();
		$("adjustProgressBox").style.display="none";
		parent.showPage(3);
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		focusType="picColorSpaceList";
	}
	else if(focusType=="colorSelMenu")
	{
		setting.previewColorSpaceColor(colorVal);
		showColorValMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picColorSpaceList";
	}
	else if(focusType=="colorSpaceSelMenu")
	{
        if(0 == isXVYCCEnable)
        {
            setting.previewColorSpace(colorSpaceVal);
        }
        else
        {
            setting.previewColorSpace(colorSpaceTransform(colorSpaceVal));
        }
		showColorSpaceMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picColorSpaceList";
	}
	else if(focusType=="picReset")
	{
		isReset=0;
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px"
		parent.showPage(3);
		top.restartTimeout();
		focusType="picColorSpaceList";
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
	showColorSpaceMenu();
	showColorValMenu();
	showUIList();
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans, positionV, 0);
}
function updatePictureData()
{
	initVarValue();
	showGainMenu();
	showColorSpaceMenu();
	showColorValMenu();
	showUIList();
	if(colorSpaceVal==3)
	{
		
	}
	else
	{
		positionV=0;
	}
	$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function initVarValue()
{
    if(0 == isXVYCCEnable)
    {
        colorSpaceVal  = setting.colorSpace;
    }
    else
    {
        colorSpaceVal  = colorSpaceTransform(setting.colorSpace);
    }
    colorVal    = setting.picColor;
	picRgainVal = setting.picSpaceRed; //保存R GAINl的值
	picGgainVal = setting.picSpaceGreen;//保存G GAINl的值
	picBgainVal = setting.picSpaceBlue;//保存B GAIN的值
}
function showUIList()
{
	if(colorSpaceVal==3)
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
function showColorSpaceMenu()
{
	var divs = lis[1].getElementsByTagName("div");
    if(0 == isXVYCCEnable)
    {
        divs[0].innerHTML=colorSpace[2 == colorSpaceVal ? 3 : colorSpaceVal];
    }
    else
    {
        divs[0].innerHTML=colorSpace[colorSpaceVal];
    }
}
function showColorValMenu()
{
	var divs = lis[2].getElementsByTagName("div");
	divs[0].innerHTML=colorSpaceColor[colorVal];
}
function showGainMenu()//主界面显示所有进度条
{
	var divs = lis[3].getElementsByTagName("div");
	var progDivs=$("RGain").getElementsByTagName("div");
	progDivs[0].style.width=3*picRgainVal+"px";
	progDivs[2].style.width=300-3*picRgainVal+"px";
	divs[4].innerHTML=picRgainVal;
	var divs = lis[4].getElementsByTagName("div");
	var progDivs=$("GGain").getElementsByTagName("div");
	progDivs[0].style.width=3*picGgainVal+"px";
	progDivs[2].style.width=300-3*picGgainVal+"px";
	divs[4].innerHTML=picGgainVal;
	var divs = lis[5].getElementsByTagName("div");
	var progDivs=$("BGain").getElementsByTagName("div");
	progDivs[0].style.width=3*picBgainVal+"px";
	progDivs[2].style.width=300-3*picBgainVal+"px";
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
			progDivs[0].style.width=9*picRgainVal+"px";
			progDivs[2].style.width=900-9*picRgainVal+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 3:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picGgainVal+"px";
			progDivs[2].style.width=900-9*picGgainVal+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 4:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picBgainVal+"px";
			progDivs[2].style.width=900-9*picBgainVal+"px";
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
			if(picRgainVal<0)
			{
				picRgainVal=0;
				return;
			}
			else if(picRgainVal>100)
			{
				picRgainVal=100;
				return;
			}
			else
			{
				setting.picSpaceRed=picRgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picRgainVal+"px";
			progDivs[2].style.width=900-9*picRgainVal+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 3:
		{
			picGgainVal=picGgainVal+value;
			if(picGgainVal<0)
			{
				picGgainVal=0;
				return;
			}
			else if(picGgainVal>100)
			{
				picGgainVal=100;
				return;
			}
			else
			{
				setting.picSpaceGreen=picGgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picGgainVal+"px";
			progDivs[2].style.width=900-9*picGgainVal+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 4:
		{
			picBgainVal=picBgainVal+value;
			if(picBgainVal<0)
			{
				picBgainVal=0;
				return;
			}
			else if(picBgainVal>100)
			{
				picBgainVal=100;
				return;
			}
			else
			{
				setting.picSpaceBlue=picBgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picBgainVal+"px";
			progDivs[2].style.width=900-9*picBgainVal+"px";
			$("adjustProgValue").innerHTML=picBgainVal;
			break;
		}
	}
}
function showcolorSpaceSelMenu()//显示该选项的选择控制界面和准备选择选项
{
	try
	{
        if(0 == isXVYCCEnable)
        {
            showPersetSelect(3);
            $("preSetOption").innerHTML=picWhiteBalConName[0];
            var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];

            spans[1].innerHTML=colorSpace[0];
            spans[2].innerHTML=colorSpace[1];
            spans[3].innerHTML=colorSpace[3];

            presetPositionH=colorSpaceVal;
            top.doElementScroll(presetSpans,presetPositionH);
            $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
            $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
            $("currentOption").style.display = "block";
            parent.hiddenPage(3)
            $("preSetBar").style.display="block";
            focusType="colorSpaceSelMenu";
        }
        else
        {
            showPersetSelect(4);
            $("preSetOption").innerHTML=picWhiteBalConName[0];
            var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
            for(var i=0;i<4;i++)
            {
                spans[i+1].innerHTML=colorSpace[i];
            }
            presetPositionH=colorSpaceVal;
            top.doElementScroll(presetSpans,presetPositionH);
            $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
            $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
            $("currentOption").style.display = "block";
            parent.hiddenPage(3)
            $("preSetBar").style.display="block";
            focusType="colorSpaceSelMenu";
        }
	}
    catch(er)
	{
		console.log("showcolorSpaceSelMenu"+er);
	}
}
var currentInterValPageIndex =0;
function showcolorSelMenu()
{
	showPersetSelect(6);
	$("preSetOption").innerHTML=picWhiteBalConName[1];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<6;i++)
	{
		spans[i+1].innerHTML=colorSpaceColor[i];
	}
	presetPositionH = colorVal;
	top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(3)
	$("preSetBar").style.display="block"
	focusType="colorSelMenu";
}
function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	presetSpans=$("preSetBar").getElementsByTagName("span");
	$("preSetBar").style.left=parseInt((1920-310-optionMax*230)/2)+"px";
	for(var i=0;(i<6&&i<optionMax);i++)
	{
		presetSpans[i+1].style.display="block";
	}
	for(var i=optionMax;i<presetSpans.length-1;i++)
	{
		presetSpans[i+1].style.display="none";
	}
	$("preSetBar").style.width=310+optionMax*230+"px";
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
	if(focusType=="colorSelMenu")
	{
		setting.previewColorSpaceColor(colorVal);
	}
	else if(focusType=="colorSpaceSelMenu")
	{
        if(0 == isXVYCCEnable)
        {
            setting.previewColorSpace(colorSpaceVal);
        }
        else
        {
            setting.previewColorSpace(colorSpaceTransform(colorSpaceVal));
        }
	}
}
var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET =310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 100;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 900;
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	top.timeoutFuc.osdTimeoutEndFuc();
	top.timeoutFuc.osdTimeoutStartFuc();
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
				if(focusType=="picColorSpaceList")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	var picReDivs=$("picReset").getElementsByTagName("div");
	picReDivs[0].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="picReset" )
				{
					isReset=parseInt(this.getAttribute("newAttr"));
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
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var ip = 0; ip < 6; ip++)
	{
		spans[ip+1].setAttribute("newAttr",ip);
		spans[ip+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="colorSelMenu" )
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
					toOK();
				}
				else if(focusType=="colorSpaceSelMenu")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
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
				console.log("====-====-=====adjustProgMinorDown=-==========");
				toDown();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("adjustProgBar").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="adjustBar")
			{
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
				switch(positionV)
				{
					case 2:
					{
						picRgainVal=value;
						if(picRgainVal<0)
						{
							picRgainVal=0;
						}
						else if(picRgainVal>100)
						{
							picRgainVal=100;
						}
						setting.picSpaceRed=picRgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=9*picRgainVal+"px";
						progDivs[2].style.width=900-9*picRgainVal+"px";
						$("adjustProgValue").innerHTML=picRgainVal;
						break;
					}
					case 3:
					{
						picGgainVal=value;
						if(picGgainVal<0)
						{
							picGgainVal=0;
						}
						else if(picGgainVal>100)
						{
							picGgainVal=100;
						}
						setting.picSpaceGreen=picGgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=9*picGgainVal+"px";
						progDivs[2].style.width=900-9*picGgainVal+"px";
						$("adjustProgValue").innerHTML=picGgainVal;
						break;
					}
					case 4:
					{
						picBgainVal=value;
						if(picBgainVal<0)
						{
							picBgainVal=0;
						}
						else if(picBgainVal>100)
						{
							picBgainVal=100;
						}
						setting.picSpaceBlue=picBgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=9*picBgainVal+"px";
						progDivs[2].style.width=900-9*picBgainVal+"px";
						$("adjustProgValue").innerHTML=picBgainVal;
						break;
					}
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}

function colorSpaceTransform(preMode)
{
    var aftMode = 0;
    if(3 == preMode)
    {
        aftMode = preMode - 1;
    }
    else if(2 == preMode)
    {
        aftMode = preMode + 1;
    }
    else
    {
        aftMode = preMode;
    }
    return aftMode;
}
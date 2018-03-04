var picMotionConName       = top.picMotionClarity;
var picReset               = [top.picMotionReset,top.okCancel[0],top.okCancel[1]];
var picMotionMode          = top.picMotionMode;
var picMotionIner          = [top.eb_no,top.eb_yes];
var picLEDMotion           = [top.level[1],top.level[3],top.level[2]]
var positionV              = 0;//主界面坐标
var picMotionModeVal       = 0; 
var picMotionInterVal      = 0;
var picLEDMotionVal        = 0;
var picBlurVal             = 0;
var picJudderVal           = 0;
var picBacklightVal        = 0;
var presetFocusWidth       = 230;
var presetPositionH        = 0;
var isReset                = 0;
var panelType              = 0;
var mixAdjustBacklight     = 0;
var videoMode              = "Video";
var lis;
var MENU_START 			   = 130;//菜单焦点移动起始位置
var MENU_STEP 			   = 70;//主菜单焦点移动的ste
var setting = top.g_setting;
var presetSpans;
var focusType="picMotionList";
var listFirstSpans;
var menuList = [
{name:picMotionConName[0],func:function(){showMotionMode()},showFlag:1},
{name:picMotionConName[1],func:function(){showMotionInterpolation()},showFlag:1},
{name:picMotionConName[2],func:function(){showLEDMotionClarity()},showFlag:1},
{name:picMotionConName[3],func:function(){showBlurReduction()},showFlag:1},
{name:picMotionConName[4],func:function(){showJudderReduction()},showFlag:1},
{name:picMotionConName[5],func:function(){showMotionReset()},showFlag:1},
]
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
	if(focusType=="picMotionList")
	{
		if(findName(positionV)==findFirstName())
		{
			positionV=findPosition(findLastName());
		}
		else
		{
			positionV--;
		}
		doOffsetMenuList(positionV);
		top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1);
	}
}
function toDown()
{
	if(focusType=="picMotionList")
	{
		if(findName(positionV)==findLastName())
		{
			positionV=findPosition(findFirstName());
		}
		else
		{
			positionV++;
		}
		doOffsetMenuList(positionV);
		top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 1);
	}
}
function toRight()
{
	if(focusType=="adjustJudderReduction")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		picJudderVal++;
		if(picJudderVal>10)
		{
			picJudderVal=10;
			return;
		}
		setting.judderReduction=picJudderVal;
		progDivs[0].style.width=90*picJudderVal+"px";
		progDivs[2].style.width=900-90*picJudderVal+"px";
		$("adjustProgValue").innerHTML=picJudderVal;
	}
	else if(focusType=="adjustBlurReduction")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		picBlurVal++;
		if(picBlurVal>10)
		{
			picBlurVal=10;
			return;
		}
		setting.blurReduction=picBlurVal;
		progDivs[0].style.width=90*picBlurVal+"px";
		progDivs[2].style.width=900-90*picBlurVal+"px";
		$("adjustProgValue").innerHTML=picBlurVal;
	}
	else if(focusType=="motionMode")
	{
		presetPositionH++;
        console.log("quanhw test mixAdjustBacklight = "+mixAdjustBacklight);
        console.log("quanhw test panelType = "+panelType);
		if(0 == panelType && 0 == mixAdjustBacklight)
		{
			if(presetPositionH>5)
			{
				presetPositionH = 0;
			}
		}
		else if(0 == panelType && 1 == mixAdjustBacklight)
		{
			if(presetPositionH>3)
			{
				presetPositionH = 0;
			}
		}
        else if(1 == panelType && 0 == mixAdjustBacklight)
        {
            if(presetPositionH>3)
            {
                presetPositionH = 0;
            }
        }
        else if(1 == panelType && 1 == mixAdjustBacklight)
        {
            if(presetPositionH>1)
            {
                presetPositionH = 0;
            }
        }
        setting.previewMemcConfig(motionModepTransform(presetPositionH,panelType,mixAdjustBacklight,"set"));
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="motionInterpolation")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		//setting.motionInterpolation = presetPositionH;
		setting.previewMemcInterpolation(presetPositionH);
		top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="LEDMotionClarity")
	{
        var progDivs=$("adjustProgBar").getElementsByTagName("div");
        picBacklightVal++;
        if(picBacklightVal>100)
        {
            picBacklightVal=100;
            return;
        }
        setting.backLight = picBacklightVal;
        progDivs[0].style.width=9*picBacklightVal+"px";
        progDivs[2].style.width=900-9*picBacklightVal+"px";
        $("adjustProgValue").innerHTML=picBacklightVal;
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
	if(focusType=="adjustJudderReduction")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		picJudderVal--;
		if(picJudderVal<0)
		{
			picJudderVal=0;
			return;
		}
		setting.judderReduction=picJudderVal;
		progDivs[0].style.width=90*picJudderVal+"px";
		progDivs[2].style.width=900-90*picJudderVal+"px";
		$("adjustProgValue").innerHTML=picJudderVal;
	}
	else if(focusType=="adjustBlurReduction")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		picBlurVal--;
		if(picBlurVal<0)
		{
			picBlurVal=0;
			return;
		}
		setting.blurReduction=picBlurVal;
		progDivs[0].style.width=90*picBlurVal+"px";
		progDivs[2].style.width=900-90*picBlurVal+"px";
		$("adjustProgValue").innerHTML=picBlurVal;
	}
	else if(focusType=="motionMode")
	{
		presetPositionH--;
		if(0 == panelType && 0 == mixAdjustBacklight)
		{
			if(presetPositionH<0)
			{
				presetPositionH = 5;
			}
		}
		else if(0 == panelType && 1 == mixAdjustBacklight)
        {
            if(presetPositionH<0)
            {
                presetPositionH = 3;
            }
        }
        else if(1 == panelType && 0 == mixAdjustBacklight)
        {
            if(presetPositionH<0)
            {
                presetPositionH = 3;
            }
        }
        else if(1 == panelType && 1 == mixAdjustBacklight)
        {
            if(presetPositionH<0)
            {
                presetPositionH = 1;
            }
        }
        setting.previewMemcConfig(motionModepTransform(presetPositionH,panelType,mixAdjustBacklight,"set"));
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="motionInterpolation")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewMemcInterpolation(presetPositionH);
		top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="LEDMotionClarity")
	{
        var progDivs=$("adjustProgBar").getElementsByTagName("div");
        picBacklightVal--;
        if(picBacklightVal<0)
        {
            picBacklightVal=0;
            return;
        }
        setting.backLight = picBacklightVal;
        progDivs[0].style.width=9*picBacklightVal+"px";
        progDivs[2].style.width=900-9*picBacklightVal+"px";
        $("adjustProgValue").innerHTML=picBacklightVal;
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
	if(focusType=="picMotionList")
	{
		findFunction(positionV);
	}
	else if(focusType=="motionMode")
	{
        picMotionModeVal = presetPositionH;
        setting.motionEnhancementSwitch = motionModepTransform(picMotionModeVal,panelType,mixAdjustBacklight,"set");
		updateMotionData(picMotionConName[0]);
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picMotionList";
	}
	else if(focusType=="motionInterpolation")
	{
		picMotionInterVal=presetPositionH;
		setting.motionInterpolation=picMotionInterVal;
		updateMotionData(picMotionConName[1]);
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picMotionList";
	}
	else if(focusType=="LEDMotionClarity")
	{
		picLEDMotionVal=presetPositionH;
		setting.lEDMotionClarity=picLEDMotionVal;
		updateMotionData(picMotionConName[2]);
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picMotionList";
	}
	else if(focusType=="picReset")
	{
		if(isReset==1)
		{
			isReset=0;
			setting.motionReset();
			updateMotionData(picMotionConName[5]);
			positionV  = 0;
		}
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px";
		doOffsetMenuList(positionV);
		top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1);
		parent.showPage(3);
		top.restartTimeout();
		focusType="picMotionList";
	}
}
function toBack()
{
	if(focusType=="picMotionList")
	{
		parent.returnPage(3);
		parent.$("subMenu2").contentWindow.updateAdvanced(top.picAdOptions[20]);
	}
	else if(focusType=="motionMode")
	{
        setting.previewMemcConfig(motionModepTransform(picMotionModeVal,panelType,mixAdjustBacklight,"set"));
		updateMotionData(picMotionConName[0]);
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picMotionList";
	}
	else if(focusType=="motionInterpolation")
	{
		setting.previewMemcInterpolation(picMotionInterVal);
		updateMotionData(picMotionConName[1]);
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picMotionList";
	}
	else if(focusType=="LEDMotionClarity")
	{
		updateMotionData(picMotionConName[2]);
		$("adjustProgressBox").style.display="none";
		parent.showPage(3);
		focusType="picMotionList";
	}
	else if(focusType=="adjustBlurReduction")
	{
		top.timeoutFuc.timeoutTimes = 30;
		updateMotionData(picMotionConName[3]);
		$("adjustProgressBox").style.display="none";
		parent.showPage(3);
		focusType="picMotionList";
	}
	else if(focusType=="adjustJudderReduction")
	{
		top.timeoutFuc.timeoutTimes = 30;
		updateMotionData(picMotionConName[4]);
		$("adjustProgressBox").style.display="none";
		parent.showPage(3);
		focusType="picMotionList";
	}
	else if(focusType=="picReset")
	{
		isReset=0;
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px"
		parent.showPage(3);
		top.restartTimeout();
		focusType="picMotionList";
	}
}
function init()
{
	timeoutInit();
	lis=$("fourthMenuRight").getElementsByTagName("li");
	var spans=$("fourthMenuRight").getElementsByTagName("span");
	listFirstSpans = $("fourthMenuRight").getElementsByClassName("listFirstProperty");
	spans[0].innerHTML=top.picAdOptions[20];
	for(var i=0;i<6;i++)
	{
		spans[i+1].innerHTML=picMotionConName[i];
	}
    initPanelType();
	initVarValue();
	showMotionModeMenu();
	showMotionInterpolationMenu();
	showLEDMotionClarityMenu();
	showBlurMenu();
	showJudderMenu();
	checkShowMenu();
	showMenuList();
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 0)
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function initVarValue()
{
	try
	{
        picMotionInterVal      = setting.motionInterpolation;
        picBlurVal             = setting.blurReduction;
        picJudderVal           = setting.judderReduction;
        picBacklightVal        = setting.backLight;
        picMotionModeVal = motionModepTransform(setting.motionEnhancementSwitch,panelType,mixAdjustBacklight,"get");
	}
	catch(er)
	{
		top.g_channel.testLog("initVarValue er:"+er);
	}
}
function updateMotionData(name)
{
	initVarValue();
	showMotionModeMenu();
	showMotionInterpolationMenu();
	showLEDMotionClarityMenu();
	showBlurMenu();
	showJudderMenu();
	checkShowMenu();
	showMenuList();
	positionV=findPosition(name);
	doOffsetMenuList(positionV);
}
function showMotionModeMenu()
{
	var div=lis[1].getElementsByTagName("div");
    if(0 == panelType && 0 == mixAdjustBacklight)
    {
        //if(picMotionModeVal != 5 && picMotionModeVal != 0 &&setting.checkMotionModeIsUser(motionModepTransform(picMotionModeVal,panelType,mixAdjustBacklight,"set"))==1)
        //{
        //    div[0].innerHTML=top.others[33]+picMotionMode[picMotionModeVal];
        //}
        //else
        //{
        //    div[0].innerHTML=picMotionMode[picMotionModeVal];
        //}
        div[0].innerHTML=picMotionMode[picMotionModeVal];
    }
    else if(0 == panelType && 1 == mixAdjustBacklight)
    {
        //if(picMotionModeVal != 3 &&setting.checkMotionModeIsUser(motionModepTransform(picMotionModeVal,panelType,mixAdjustBacklight,"set"))==1)
        //{
        //    div[0].innerHTML=top.others[33]+picMotionMode[(picMotionModeVal == 3) ? 5 : picMotionModeVal];
        //}
        //else
        //{
        //    div[0].innerHTML=picMotionMode[(picMotionModeVal == 3) ? 5 : picMotionModeVal];
        //}
        div[0].innerHTML=picMotionMode[(picMotionModeVal == 3) ? 5 : picMotionModeVal];
    }
    else if(1 == panelType && 0 == mixAdjustBacklight)
    {
        //if(picMotionModeVal != 3 &&setting.checkMotionModeIsUser(motionModepTransform(picMotionModeVal,panelType,mixAdjustBacklight,"set"))==1)
        //{
        //    div[0].innerHTML=top.others[33]+picMotionMode[picMotionModeVal + 2];
        //}
        //else
        //{
        //    div[0].innerHTML=picMotionMode[picMotionModeVal + 2];
        //}
        div[0].innerHTML=picMotionMode[picMotionModeVal + 2];
    }
    else if(1 == panelType && 1 == mixAdjustBacklight)
    {
        //if(picMotionModeVal != 2 && setting.checkMotionModeIsUser(motionModepTransform(picMotionModeVal,panelType,mixAdjustBacklight,"set"))==1)
        //{
        //    div[0].innerHTML=top.others[33]+picMotionMode[(picMotionModeVal == 1) ? 5 : picMotionModeVal + 2];
        //}
        //else
        //{
        //    div[0].innerHTML=picMotionMode[(picMotionModeVal == 1) ? 5 : picMotionModeVal + 2];
        //}
        div[0].innerHTML=picMotionMode[(picMotionModeVal == 1) ? 5 : picMotionModeVal + 2];
    }
}
function showMotionInterpolationMenu()
{
	var div=lis[2].getElementsByTagName("div");
	div[0].innerHTML=picMotionIner[picMotionInterVal];
}
function showLEDMotionClarityMenu()
{
    var divs = lis[3].getElementsByTagName("div");
    var progDivs=$("ledmotionclarity").getElementsByTagName("div");
    progDivs[0].style.width=3*picBacklightVal+"px";
    progDivs[2].style.width=300-3*picBacklightVal+"px";
    divs[4].innerHTML=picBacklightVal;
}
function showBlurMenu()//主界面显示所有进度条
{
	var divs = lis[4].getElementsByTagName("div");
	var progDivs=$("blur").getElementsByTagName("div");
	progDivs[0].style.width=30*picBlurVal+"px";
	progDivs[2].style.width=300-30*picBlurVal+"px";
	divs[4].innerHTML=picBlurVal;
}

function showJudderMenu()
{
    var divs = lis[5].getElementsByTagName("div");
    var progDivs=$("judder").getElementsByTagName("div");
    progDivs[0].style.width=30*picJudderVal+"px";
    progDivs[2].style.width=300-30*picJudderVal+"px";
    divs[4].innerHTML=picJudderVal;
}

function showBlurReduction()//显示该选项的选择控制界面和准备选择选项
{
	parent.hiddenPage(3);
	top.timeoutFuc.timeoutTimes = 10;
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picMotionConName[3];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=90*picBlurVal+"px";
	progDivs[2].style.width=900-90*picBlurVal+"px";
	$("adjustProgValue").innerHTML=picBlurVal;
	$("adjustProgressBox").style.display="block";
	focusType="adjustBlurReduction";
}
function showJudderReduction()//显示该选项的选择控制界面和准备选择选项
{
	parent.hiddenPage(3);
	top.timeoutFuc.timeoutTimes = 10;
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picMotionConName[4];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=90*picJudderVal+"px";
	progDivs[2].style.width=900-90*picJudderVal+"px";
	$("adjustProgValue").innerHTML=picJudderVal;
	$("adjustProgressBox").style.display="block";
	focusType="adjustJudderReduction";
}
function showMotionMode()//显示该选项的选择控制界面和准备选择选项
{
	if(0 == panelType && 0 == mixAdjustBacklight)
	{
		showPersetSelect(6);
		$("preSetOption").innerHTML=picMotionConName[0];
		var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
		for(var i=0;i<6;i++)
		{
			spans[i+1].innerHTML=picMotionMode[i];
		}
		presetPositionH = picMotionModeVal;
	}
	else if(1 == panelType && 0 == mixAdjustBacklight)
	{
		showPersetSelect(4);
		$("preSetOption").innerHTML=picMotionConName[0];
		var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
		for(var i=0;i<4;i++)
		{
			spans[i+1].innerHTML=picMotionMode[i+2];
		}
		presetPositionH = picMotionModeVal;
	}
    else if(0 == panelType && 1 == mixAdjustBacklight)
    {
        showPersetSelect(4);
        $("preSetOption").innerHTML=picMotionConName[0];
        var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
        spans[1].innerHTML=picMotionMode[0];
        spans[2].innerHTML=picMotionMode[1];
        spans[3].innerHTML=picMotionMode[2];
        spans[4].innerHTML=picMotionMode[5];
        presetPositionH = picMotionModeVal;
    }
    else if(1 == panelType && 1 == mixAdjustBacklight)
    {
        showPersetSelect(2);
        $("preSetOption").innerHTML=picMotionConName[0];
        var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
        spans[1].innerHTML=picMotionMode[2];
        spans[2].innerHTML=picMotionMode[5];
        presetPositionH = picMotionModeVal;
    }
    else
    {
        showPersetSelect(4);
        $("preSetOption").innerHTML=picMotionConName[0];
        var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
        for(var i=0;i<4;i++)
        {
            spans[i+1].innerHTML=picMotionMode[i+2];
        }
        presetPositionH = picMotionModeVal;
    }
	top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(3);
	$("preSetBar").style.display="block"
	focusType="motionMode";
}
function showMotionInterpolation()
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picMotionConName[1];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=picMotionIner[i];
	}
	presetPositionH=picMotionInterVal;
	top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(3)
	$("preSetBar").style.display="block"
	focusType="motionInterpolation";
}
function showLEDMotionClarity()
{
    parent.hiddenPage(3);
    top.timeoutFuc.timeoutTimes = 10;
    $("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picMotionConName[2];
    var progDivs=$("adjustProgBar").getElementsByTagName("div");
    progDivs[0].style.width=9*picBacklightVal+"px";
    progDivs[2].style.width=900-9*picBacklightVal+"px";
    $("adjustProgValue").innerHTML=picBacklightVal;
    $("adjustProgressBox").style.display="block";
    focusType="LEDMotionClarity";
}
function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	presetSpans=$("preSetBar").getElementsByTagName("span");
	for(var i=0;i<optionMax;i++)
	{
		presetSpans[i+1].style.display="block";
	}
	for(var i=optionMax;i<presetSpans.length-1;i++)
	{
		presetSpans[i+1].style.display="none";
	}
	$("preSetBar").style.left=parseInt((1920-310-optionMax*230)/2)+"px";
	$("preSetBar").style.width=310+optionMax*230+"px";
}
function showMotionReset()//弹出用户图像数据重置对话框
{
	parent.hiddenPage(3);
	var picReSpans=$("picReset").getElementsByTagName("span");
	var picReDivs=$("picReset").getElementsByTagName("div");
	picReSpans[0].innerHTML=picMotionConName[5];
	picReSpans[1].innerHTML=picReset[0];
	picReDivs[0].innerHTML=picReset[1];
	picReDivs[1].innerHTML=picReset[2];
	$("picReset").style.display="block";
	top.stopTimeout();
	focusType="picReset";
}

function checkShowMenu()
{
    try
	{
		switch(setting.motionEnhancementSwitch)
        {
            case 0://File
                if("File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=0;
                }
                menuList[5].showFlag=1;
                break;
            case 1://Smooth
                if(0 == panelType && "Video" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(0 == panelType && "File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else if(1 == panelType && "Video" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(1 == panelType  && "File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=0;
                }
                menuList[5].showFlag=1;
                break;
            case 2://Clear
                if(0 == panelType && 0 == mixAdjustBacklight && "Video" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(0 == panelType && 0 == mixAdjustBacklight && "File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else if(1 == panelType && 0 == mixAdjustBacklight && "Video" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(1 == panelType  && 0 == mixAdjustBacklight && "File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=0;
                }
                menuList[5].showFlag=1;
                break;
            case 3://Sport
                if(0 == panelType && 0 == mixAdjustBacklight && "Video" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(0 == panelType && 0 == mixAdjustBacklight && "File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else if(1 == panelType && 0 == mixAdjustBacklight && "Video" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(1 == panelType  && 0 == mixAdjustBacklight && "File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=0;
                }
                menuList[5].showFlag=1;
                break;
            case 4://Custom
                if(0 == panelType && 0 == mixAdjustBacklight && "Video" == videoMode)
                {
                    menuList[1].showFlag=1;
                    menuList[2].showFlag=1;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(0 == panelType && 0 == mixAdjustBacklight && "File" == videoMode)
                {
                    menuList[1].showFlag=1;
                    menuList[2].showFlag=1;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else if(0 == panelType && 1 == mixAdjustBacklight && "Video" == videoMode)
                {
                    menuList[1].showFlag=1;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(0 == panelType && 1 == mixAdjustBacklight && "File" == videoMode)
                {
                    menuList[1].showFlag=1;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else if(1 == panelType && 0 == mixAdjustBacklight && "Video" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=1;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(1 == panelType  && 0 == mixAdjustBacklight && "File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=1;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else if(1 == panelType && 1 == mixAdjustBacklight && "Video" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=1;
                    menuList[4].showFlag=0;
                }
                else if(1 == panelType  && 1 == mixAdjustBacklight && "File" == videoMode)
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=1;
                }
                else
                {
                    menuList[1].showFlag=0;
                    menuList[2].showFlag=0;
                    menuList[3].showFlag=0;
                    menuList[4].showFlag=0;
                }

                if(setting.energySaving!=0)
                {
                    menuList[2].showFlag=0;
                }


                menuList[5].showFlag=1;
                break;
            case 5://auto
                menuList[1].showFlag=0;
                menuList[2].showFlag=0;
                menuList[3].showFlag=0;
                menuList[4].showFlag=0;
                menuList[5].showFlag=0;
                break;
            default :
                break;
        }
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function showMenuList()
{
	try
	{
		for(var i=0;i<menuList.length;i++)
		{
			if(menuList[i].showFlag==1)
			{
				lis[i+1].style.display="block";
			}
			else
			{
				lis[i+1].style.display="none";
			}
		}
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function doOffsetMenuList(postion)
{
	try
	{
		$("fourthListFocus").style.top=MENU_START+postion*MENU_STEP+"px";
	}catch(er)
	{
		top.g_channel.testLog("doOffsetMenuList:"+er);
	}
}
function findPosition(name)
{
	var position=0;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].name==name)
		{
			break;
		}
		if(menuList[i].showFlag==1)
		{
			position++;
		}
	}
	return position;
}
function findFunction(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			menuList[i].func();
			break;
		}
	}
}
function findRealPosition(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			return i;
		}
	}
}
function findName(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			return menuList[i].name;
		}
	}
}
function findLastName()
{
	for(var i=menuList.length-1;i>=0;i--)
	{
		if(menuList[i].showFlag==1)
		{
			return menuList[i].name;
		}
	}
}
function findFirstName()
{
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			return menuList[i].name;
		}
	}
}
function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
	if(focusType=="motionMode")
	{
        setting.previewMemcConfig(motionModepTransform(picMotionModeVal,panelType,mixAdjustBacklight,"set"));
	}
	else if(focusType=="motionInterpolation")
	{
		setting.previewMemcInterpolation(picMotionInterVal);
	}
	else if(focusType=="LEDMotionClarity")
	{
		//setting.previewMemcLed(picLEDMotionVal);
	}
}
var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 10;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 900;
function addMouseListener()
{
	document.body.onmousedown = function(evt){
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
				if(focusType=="picMotionList")
				{
					positionV = findPosition(menuList[parseInt(this.getAttribute("newAttr"),10)].name);
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
				 if(focusType=="motionMode")
				{
					presetPositionH=parseInt(this.getAttribute("newAttr"),10);
					$("preSetSelectFocus").style.left=300+presetPositionH*presetFocusWidth+"px";
					setting.motionEnhancementSwitch = presetPositionH;
					toOK();
				}
				else if(focusType=="motionInterpolation")
				{
					presetPositionH=parseInt(this.getAttribute("newAttr"),10);
					$("preSetSelectFocus").style.left=300+presetPositionH*presetFocusWidth+"px";
					setting.motionInterpolation = presetPositionH;
					toOK();
				}
				else if(focusType=="LEDMotionClarity")
				{
					presetPositionH=parseInt(this.getAttribute("newAttr"),10);
					$("preSetSelectFocus").style.left=300+presetPositionH*presetFocusWidth+"px";
					setting.LEDMotionClarity = presetPositionH;
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
	$("adjustProgBar").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
				if(focusType=="adjustJudderReduction")
				{
					var progDivs=$("adjustProgBar").getElementsByTagName("div");
					picJudderVal=value;
					if(picJudderVal>10)
					{
						picJudderVal=10;
					}
					else if(picJudderVal<0)
					{
						picJudderVal=0;
					}
					setting.judderReduction=picJudderVal;
					progDivs[0].style.width=90*picJudderVal+"px";
					progDivs[2].style.width=900-90*picJudderVal+"px";
					$("adjustProgValue").innerHTML=picJudderVal;
				}
				else if(focusType=="adjustBlurReduction")
				{
					var progDivs=$("adjustProgBar").getElementsByTagName("div");
					picBlurVal=value;
					if(picBlurVal>10)
					{
						picBlurVal=10;
					}
					else if(picBlurVal<0)
					{
						picBlurVal=0;
					}
					setting.blurReduction=picBlurVal;
					progDivs[0].style.width=90*picBlurVal+"px";
					progDivs[2].style.width=900-90*picBlurVal+"px";
					$("adjustProgValue").innerHTML=picBlurVal;
				}
			}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}

function initPanelType()
{
    var is4K1kEnable = setting.getProperty("ro.sita.model.TCL_PANEL_SETTING.PANEL_4K1K_ENABLE", "0");
    var isMEMCEnable = setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_memc_enable", "0");
    var panelFrequency = setting.getPanelFrequency;
    if(1 == is4K1kEnable && 1 == isMEMCEnable)
    {
        panelType = 0;
    }
    else if(0 == is4K1kEnable && 1 == isMEMCEnable && 120 == panelFrequency)
    {
        panelType = 1;
    }
    else if(0 == is4K1kEnable && 1 == isMEMCEnable && 60 == panelFrequency)
    {
        panelType = 2;
    }
    else if(0 == is4K1kEnable && 0 == isMEMCEnable && 60 == panelFrequency)
    {
        panelType = 3;
    }

    if(0 == setting.isVideoSignal())
    {
        videoMode = "File";
    }
    else
    {
        videoMode = "Video";
    }

    if(0 == setting.getProperty("ro.sita.model.MIX_ADJUST_BACKLIGHT_CFG.MIX_ADJUST_BACKLIGHT_ENABLE", "0"))
    {
        mixAdjustBacklight = 0;
    }
    else
    {
        mixAdjustBacklight = setting.mixDimming;
    }
}

/*
 由于667EU项目新需求处理Motion Clarity一系列乱七八糟的需求，中间件与UI选项不对应问题
 */
function motionModepTransform(preMode, panelType, mixdiming, TransformType)
{
    var aftMode = 0;
    if(0 == panelType && 0 == mixdiming && "get" == TransformType)
    {
        aftMode = (preMode + 1) % 6;
    }
    else if(0 == panelType && 0 == mixdiming && "set" == TransformType)
    {
        aftMode = (preMode + 5) % 6;
    }
    else if(0 == panelType && 1 == mixdiming && "get" == TransformType)
    {
        switch(preMode)
        {
            case 0 :
                aftMode = 1;
                break;
            case 1:
                aftMode = 2;
                break;
            case 2:
                aftMode = -1;
                break;
            case 3:
                aftMode = -1;
                break;
            case 4:
                aftMode = 3;
                break;
            case 5:
                aftMode = 0;
                break;
            default :
                aftMode = -1;
                break;
        }
    }
    else if(0 == panelType && 1 == mixdiming && "set" == TransformType)
    {
        switch(preMode)
        {
            case 0 :
                aftMode = 5;
                break;
            case 1:
                aftMode = 0;
                break;
            case 2:
                aftMode = 1;
                break;
            case 3:
                aftMode = 4;
                break;
            default :
                aftMode = -1;
                break;
        }
    }
    else if(1 == panelType && 0 == mixdiming && "get" == TransformType)
    {
        aftMode = preMode - 1;
    }
    else if(1 == panelType && 0 == mixdiming && "set" == TransformType)
    {
        aftMode = preMode + 1;
    }
    else if(1 == panelType && 1 == mixdiming && "get" == TransformType)
    {
        switch(preMode)
        {
            case 1:
                aftMode = 0;
                break;
            case 2:
                aftMode = -1;
                break;
            case 3:
                aftMode = -1;
                break;
            case 4:
                aftMode = 1;
                break;
            default :
                aftMode = -1;
                break;
        }
    }
    else if(1 == panelType && 1 == mixdiming && "set" == TransformType)
    {
        switch(preMode)
        {
            case 0:
                aftMode = 1;
                break;
            case 1:
                aftMode = 4;
                break;
            default :
                aftMode = -1;
                break;
        }
    }
    else
    {
        aftMode = preMode;
    }
    return aftMode;
}
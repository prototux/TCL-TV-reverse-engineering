var pic3DcontName              = [top.picOptions[11],top._3dOptions[0],top._3dOptions[1],top._3dOptions[2],top._3dOptions[3]];
var pic3DOptionValue           = top.offOn;
var pic3DMode                  = top.pic3DMode;
var positionV                  = 0;//主界面坐标
var presetPositionH            = 0;//preset 界面焦点坐标
var presetFocusWidth           = 200;
var pic3DModeVal               = 0; //保存pic3DModeVal的值
var pic3DTo2DVal               = 0;//保存pic3DTo2DVal的值
var picLRSwithVal              = 0;//保存picLRSwithVal的值
var picDepthOfFieldVal         = 0;//保存picDepthOfFieldVal的值
var MENU_START 			       = 130;//菜单焦点移动起始位置
var MENU_STEP 			       = 70;//主菜单焦点移动的step
var modePage                   = 0;
var sourceInput                = top.g_channel.inputSource;
var panelType                  = top.currentPanel;
var presetSpans;
var lis;
var listFirstSpans ;
var setting = top.g_setting;
var focusType="pic3DmenuList";
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
	if(focusType=="pic3DmenuList")
	{
		positionV--;
		if(positionV<0)
		{
			if(pic3DModeVal==0)
			{
				positionV=1;
			}
			else if(pic3DModeVal==1)
			{
				positionV=2;
			}
			else
			{
				positionV=3;
			}
		}
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		top.doEleScrForNoOption(listFirstSpans, positionV, -1);
	}
}
function toDown()
{
	if(focusType=="pic3DmenuList")
	{
		positionV++;
		if(pic3DModeVal==0)
		{
			if(positionV>1)
			{
				positionV=0;
			}
		}
		else if(pic3DModeVal==1)
		{
			if(positionV>2)
			{
				positionV=0;
			}
		}
		else
		{
			if(positionV>3)
			{
				positionV=0;
			}
		}
		$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		top.doEleScrForNoOption(listFirstSpans, positionV, 1);
	}
}
function startBlueAndShowGlass()
{
	if(top.glassConnectFlag==0)
	{
		top.$("globleShow").contentWindow.showGlassRemind(0);
		if(top.bluetoothStart==0)
		{
			setTimeout("setting.bluetoothMaster()",800);
		}
		top.bluetoothStart=1;

	}
}
function toLeft()
{
	if(focusType=="picDepthAdjustMenu")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		picDepthOfFieldVal--;
		if(picDepthOfFieldVal<0)
		{
			picDepthOfFieldVal=0;
			return;
		}
		setting.picDepthOfFieldValue=picDepthOfFieldVal;
	    progDivs[0].style.width=(900*picDepthOfFieldVal)/10+"px";
	    progDivs[2].style.width=900-(900*picDepthOfFieldVal)/10+"px";
		$("adjustProgValue").innerHTML=picDepthOfFieldVal;
	}
	else if(focusType=="3DModeSelMenu")
	{
		if(sourceInput==11 || sourceInput==0)
		{
			presetPositionH--;
			if(presetPositionH<0)
			{
				presetPositionH=1;
			}
		}
		else
		{
			presetPositionH--;
		    if(presetPositionH<0)
			{
				presetPositionH=3;
			}
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		 top.doElementScroll(presetSpans,presetPositionH);
		setTimeout(function(){
		switch(presetPositionH)
		{
			case 0:
			if(panelType==1)
			{
				setting.pic3DMode = 0;
				top.$("globleShow").contentWindow.hiddenGlassRemind();
			}
			else if(panelType==2)
			{
				setting.pic3DMode = 0;
			}
			break;
			case 1:
			setting.pic3DMode = 1;
			if(panelType==1)
			{
				startBlueAndShowGlass()
			}
			break;
			case 2:
			setting.pic3DMode = 8;
			if(panelType==1)
			{
				startBlueAndShowGlass()
			}
			break;
			case 3:
			setting.pic3DMode = 9;
			if(panelType==1)
			{
				startBlueAndShowGlass()
			}
			break;
			default:
			break;
		}
		},1);
	}
	else if(focusType=="3DTo2DSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.pic3DTo2DSwitch = presetPositionH;
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="LRSwithSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.picLRSwitch = presetPositionH;
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusType=="picDepthAdjustMenu")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		picDepthOfFieldVal++;
		if(picDepthOfFieldVal>10)
		{
			picDepthOfFieldVal=10;
			return;
		}
		setting.picDepthOfFieldValue=picDepthOfFieldVal;
	    progDivs[0].style.width=(900*picDepthOfFieldVal)/10+"px";
	    progDivs[2].style.width=900-(900*picDepthOfFieldVal)/10+"px";
		$("adjustProgValue").innerHTML=picDepthOfFieldVal;
	}
	else if(focusType=="3DModeSelMenu")
	{

		if(sourceInput==11 || sourceInput==0)
		{
			presetPositionH++;
			if(presetPositionH>1)
			{
				presetPositionH=0;
			}
		}
		else
		{
			presetPositionH++;
			if(presetPositionH>3)
			{
				presetPositionH=0;
			}
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		 top.doElementScroll(presetSpans,presetPositionH);
		setTimeout(function(){
		switch(presetPositionH)
		{
			case 0:
			setting.pic3DMode = 0;
			if(panelType==1)
			{
				top.$("globleShow").contentWindow.hiddenGlassRemind();
			}
			break;
			case 1:
			setting.pic3DMode = 1;
			if(panelType==1)
			{
				startBlueAndShowGlass()
			}
			break;
			case 2:
			setting.pic3DMode = 8;
			if(panelType==1)
			{
				startBlueAndShowGlass()
			}
			break;
			case 3:
			setting.pic3DMode = 9;
			if(panelType==1)
			{
				startBlueAndShowGlass()
			}
			break;
			default:
			break;
		}
		},1);
	}
	else if(focusType=="3DTo2DSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.pic3DTo2DSwitch = presetPositionH;
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="LRSwithSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.picLRSwitch = presetPositionH;
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else
	{
		toOK();
	}
}
function toOK()
{
	if(focusType=="pic3DmenuList")
	{
		switch(positionV)
		{
			case 0:
			{
				presetPositionH=parseInt(pic3DModeVal%5);
				modePage = parseInt(pic3DModeVal/5);
				show3DModeSelMenu();
				break;
			}
			case 1:
			{
				if(pic3DModeVal==1)
				{
					showLRSwithSelMenu();
				}
				else
				{
					show3DTo2DSelMenu();
				}
				break;
			}
			case 2:
			{
				if(pic3DModeVal==1)
				{
					showDepthAdjustMenu();
				}
				else
				{
					showLRSwithSelMenu();
				}
				break;
			}
			case 3:
			{
				if(pic3DModeVal==1)
				{
				}
				else
				{
					showDepthAdjustMenu();
				}
				break;
			}
		}
	}
	else if(focusType=="3DModeSelMenu")
	{
		/*
		if(pic3DModeVal==0&&presetPositionH!=0)
		{
			top.$("globleShow").contentWindow.showGlassRemind(0);
		}
		else if(pic3DModeVal!=0&&presetPositionH==0)
		{
			top.glassConnectFlag=0;
		}
		*/
		pic3DModeVal=presetPositionH;
		show3DModeMenu();
		pic3DTo2DVal = setting.pic3DTo2DSwitch;
		showpicLRSwithMenu();
		showpic3DTo2DMenu();
		showpicDepthOfField();
		returnMenuList();
	}
	else if(focusType=="3DTo2DSelMenu")
	{
		pic3DTo2DVal=presetPositionH;
		if(presetPositionH==1)
		{
			top.$("globleShow").contentWindow.hiddenGlassRemind();
		}
		else
		{
			if(pic3DModeVal!=0)
			{
				startBlueAndShowGlass();
			}
		}
		showpic3DTo2DMenu();
		returnMenuList();
	}
	else if(focusType=="LRSwithSelMenu")
	{
		picLRSwithVal=presetPositionH;
		showpicLRSwithMenu();
		returnMenuList();
	}
}
function returnMenuList()
{
	$("preSetBar").style.display="none";
	$("smallPopWin").style.display="block";
	focusType="pic3DmenuList";
}
function toBack()
{
	if(focusType=="pic3DmenuList")
	{
		parent.returnPopWindow(2);
	}
	else if(focusType=="3DModeSelMenu")
	{
		//setting.pic3DMode = pic3DModeVal;
		switch(pic3DModeVal)
		{
			case 0:
			setting.pic3DMode = 0;
			if(panelType==1)
			{
				top.$("globleShow").contentWindow.hiddenGlassRemind();
			}
			break;
			case 1:
			setting.pic3DMode = 1;
			break;
			case 2:
			setting.pic3DMode = 8;
			break;
			case 3:
			setting.pic3DMode = 9;
			break;
			default:
			break;
		}
		show3DModeMenu();
		pic3DTo2DVal = setting.pic3DTo2DSwitch;
		showpic3DTo2DMenu();
		showpicLRSwithMenu();
		showpicDepthOfField();
		returnMenuList();
	}
	else if(focusType=="3DTo2DSelMenu")
	{
		setting.pic3DTo2DSwitch = pic3DTo2DVal;
		showpic3DTo2DMenu();
		returnMenuList();
	}
	else if(focusType=="LRSwithSelMenu")
	{
		setting.picLRSwitch = picLRSwithVal;
		showpicLRSwithMenu();
		returnMenuList();
	}
	else if(focusType=="picDepthAdjustMenu")
	{
		top.timeoutFuc.timeoutTimes = 30;
		showpicDepthOfField();
		$("adjustProgressBox").style.display="none";
		$("smallPopWin").style.display="block";
		focusType="pic3DmenuList";
	}
}
function init()
{
	timeoutInit();
	lis=$("smallPopWin").getElementsByTagName("li");
	var spans=$("smallPopWin").getElementsByTagName("span");
	listFirstSpans = $("smallPopWin").getElementsByClassName("popListFirPro");
	for(var i=0;i<5;i++)
	{
		spans[i].innerHTML=pic3DcontName[i];
	}
	if(setting.pic3DNavigtion==2)
	{
		setting.pic3DMode=5;
	}

	initVarValue();
	show3DModeMenu();
	showpic3DTo2DMenu();
	showpicLRSwithMenu();
	showpicDepthOfField();
	if(panelType==1)
	{
		if(top.glassConnectFlag==0&&pic3DModeVal!=0)
		{
			top.$("globleShow").contentWindow.showGlassRemind(0);
			if(top.bluetoothStart==0)
			{
				top.bluetoothStart=1;
				setTimeout("setting.bluetoothMaster()",800);
			}

		}
		else
		{
			top.$("globleShow").contentWindow.hiddenGlassRemind();
		}
	}
	top.doEleScrForNoOption(listFirstSpans, positionV, 0);
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
	//pic3DModeVal = setting.pic3DMode;
	switch(setting.pic3DMode)
	{
		case 0:
		pic3DModeVal = 0;
		break;
		case 1:
		pic3DModeVal = 1;
		break;
		case 8:
		pic3DModeVal = 2;
		break;
		case 9:
		pic3DModeVal = 3;
		break;
		default:
		break;
	}
	pic3DTo2DVal = setting.pic3DTo2DSwitch;
	picLRSwithVal = setting.picLRSwitch;
	picDepthOfFieldVal = setting.picDepthOfFieldValue;
}
function show3DModeMenu()//在主界面上显示值
{
	var divs = lis[1].getElementsByTagName("div");
	divs[0].innerHTML=pic3DMode[pic3DModeVal];
}
function showpic3DTo2DMenu()//在主界面上显示值
{
	if(pic3DModeVal==1)
	{
		lis[2].style.display="none";
	}
	else
	{
		lis[2].style.display="block";
	}
	var divs = lis[2].getElementsByTagName("div");
	divs[0].innerHTML=pic3DOptionValue[pic3DTo2DVal];
}
function showpicLRSwithMenu()//在主界面上显示值
{
    if(pic3DModeVal==0)
	{
		lis[3].style.display="none";
	}
	else
	{
		lis[3].style.display="block";
	}
	var divs = lis[3].getElementsByTagName("div");
	divs[0].innerHTML=pic3DOptionValue[picLRSwithVal];
}
function showpicDepthOfField()//在主界面上显示值
{
	if(pic3DModeVal==0)
	{
		lis[4].style.display="none";
	}
	else
	{
		lis[4].style.display="block";
	}
	var divs = lis[4].getElementsByTagName("div");
	var progDivs=$("Depth").getElementsByTagName("div");
	progDivs[0].style.width=(200*picDepthOfFieldVal)/10+"px";
	progDivs[2].style.width=200-(200*picDepthOfFieldVal)/10+"px";
	divs[4].innerHTML=picDepthOfFieldVal;
}

function show3DModeSelMenu()//显示该选项的选择控制界面和准备选择选项
{
	$("preSetOption").innerHTML=pic3DcontName[1];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
    if(sourceInput==11 || sourceInput==0)
	{
		showPersetSelect(2);
		for(var i=0;i<2;i++)
		{
			spans[i+1].innerHTML=pic3DMode[i];
		}
		for(var i=2;i<5;i++)
		{
			spans[i+1].innerHTML="";
		}
	}
	else
	{
		showPersetSelect(4);
		for(var i=0;i<4;i++)
		{
			spans[i+1].innerHTML=pic3DMode[i];
		}
	}
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	$("smallPopWin").style.display="none";
	$("preSetBar").style.display="block";
	focusType="3DModeSelMenu";
}
function show3DTo2DSelMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=pic3DcontName[2];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=pic3DOptionValue[i];
	}
	presetPositionH=pic3DTo2DVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	$("smallPopWin").style.display="none";
	$("preSetBar").style.display="block"
	focusType="3DTo2DSelMenu";
}

function showLRSwithSelMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=pic3DcontName[3];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=pic3DOptionValue[i];
	}
	presetPositionH=picLRSwithVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	$("smallPopWin").style.display="none";
	$("preSetBar").style.display="block"
	focusType="LRSwithSelMenu";
}
function showDepthAdjustMenu()//显示该选项的选择控制界面和准备选择选项
{
	$("smallPopWin").style.display="none";
	top.timeoutFuc.timeoutTimes = 10;
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=pic3DcontName[4];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=(900*picDepthOfFieldVal)/10+"px";
	progDivs[2].style.width=900-(900*picDepthOfFieldVal)/10+"px";
	$("adjustProgValue").innerHTML=picDepthOfFieldVal;
	$("adjustProgressBox").style.display="block";
	focusType="picDepthAdjustMenu";
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
	if(parseInt(1920-310-optionMax*230)/2>0)
	{
		$("preSetBar").style.left = parseInt(1920-310-optionMax*230)/2+"px"
	}
	else
	{
		$("preSetBar").style.left = 0+"px"
	}
	$("preSetBar").style.width=310+optionMax*230+"px";
	presetFocusWidth=230;
}
function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
	parent.$("subMenu1").contentWindow.change3DMode(setting.pic3DMode);
}
var IFRAME_LEFT_OFFSET = 0;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 270 + 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 10;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 900;
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2)
		{ 
			toBack();//right key
		}
	}
	for(var i = 0; i < 4; i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pic3DmenuList")
				{
					positionV = parseInt(this.getAttribute("newAttr"),10);
					if(pic3DModeVal==1)
					{
						if(positionV>1)
						{
							positionV--;
						}
					}
					$("popListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var i = 0; i <4; i++)
	{
		spans[i+1].setAttribute("newAttr",i);
		spans[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="3DTo2DSelMenu" )
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"),10);
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
					setting.pic3DTo2DSwitch = presetPositionH;
					toOK();
				}
				else if(focusType=="3DModeSelMenu")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"),10);
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
					switch(presetPositionH)
					{
						case 0:
						setting.pic3DMode = 0;
						if(panelType==1)
						{
							top.$("globleShow").contentWindow.hiddenGlassRemind();
						}
						break;
						case 1:
						setting.pic3DMode = 1;
						if(panelType==1)
						{
							startBlueAndShowGlass();
						}
						break;
						case 2:
						setting.pic3DMode = 8;
						if(panelType==1)
						{
							startBlueAndShowGlass();
						}
						break;
						case 3:
						setting.pic3DMode = 9;
						if(panelType==1)
						{
							startBlueAndShowGlass();
						}
						break;
						default:
						break;
					}
					toOK();
				}
				else if(focusType=="LRSwithSelMenu")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"),10);;
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
					setting.picLRSwitch = presetPositionH;
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	$("adjustProgBar").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="picDepthAdjustMenu")
			{
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
				var progDivs=$("adjustProgBar").getElementsByTagName("div");
				picDepthOfFieldVal=value;
				if(picDepthOfFieldVal>10)
				{
					picDepthOfFieldVal=10;
				}
				else if(picDepthOfFieldVal<0)
				{
					picDepthOfFieldVal=0;
				}
				setting.picDepthOfFieldValue=picDepthOfFieldVal;
				progDivs[0].style.width=(900*picDepthOfFieldVal)/10+"px";
				progDivs[2].style.width=900-(900*picDepthOfFieldVal)/10+"px";
				$("adjustProgValue").innerHTML=picDepthOfFieldVal;
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}



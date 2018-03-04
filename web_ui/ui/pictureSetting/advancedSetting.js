var picAdvConName           = [top.picOptions[15],top.picAdOptions[3],top.picAdOptions[11],top.picAdOptions[5],top.picAdOptions[16],top.picAdOptions[16],top.picAdOptions[13],top.picAdOptions[9],top.picAdOptions[15],top.picAdOptions[19],"xvYCC",top.picAdOptions[2],top.picAdOptions[7],top.picAdOptions[1],top.picAdOptions[0],top.picAdOptions[6],top.picAdOptions[20],top.picAdOptions[4],top.picAdOptions[17],top.picAdOptions[18],top.picAdOptions[14],top.picAdOptions[10]];

var offOn          			= top.offOn;
var motionEnhance           = [top.level[0],top.level[1],top.level[3],top.level[2],top.others[30]];
var picAdvRGBmode           = top.picAdRgbMode;
var picAdLevel            	= [top.level[0],top.level[1],top.level[3],top.level[2],top.manualAuto[1]];
var picxvYCCColorEnhance    = [top.level[0],top.level[1],top.level[2]];
var picAdvColorTemp         = top.picColorTemp;
var picHDMIMode             = top.picHDMIMode;
var noiseRedVal             = 0;//保存Noise Reduction的值
var MPEGVal                 = 0;//保存MPEG NR的值
var RGBVal                  = 0;//保存RGB Mode的值
var dynamicConVal           = 0;//保存Dynamic Contrast的值
var motionEnhVal            = 0;//保存Motion enhancement的值
var fleshToneVal            = 0;//保存Flesh tone的值
var filmModeVal             = 0;//保存Film Mode的值
var gameModeVal             = 0;//保存Game mode的值
var colorTempVal            = 0;//保存Color Temperature的值
var picFreezeVal            = 0;//保存Picture freeze的值
var blackStrVal             = 0;//保存Black Stretch的值
var overScanVal             = 0;//保存Overscan的值
var gammaVal                = 0;//保存Gamma的值
var hdmiModeVal             = 0;
var hdmiRealMode            = 0;
var hdmiModeDbAndRealType   = 0;//该值是两个值的组合，高16为表示UI显示的值：Auto、Grapihic、video，低16位表示type是AUTO的时候的实际值
var colorEnhanceVal         = 0;
var colorEnhanceXvYCCVal    = 0;
var xvYCCVal                = 0;
var blurReductionVal        = 0;
var judderReductionVal      = 0;
var LEDMotionClarityVal     = 0;
var advancedPage            = 0;//主界面共有两页 表示当前是第几页
var positionV               = 0;//主界面坐标
var presetPositionH         = 0;//preset 界面焦点坐标
var presetFocusWidth        = 200;
var lis;                       //保存主界面列表
var pic3DMode               = 0;//当前3D模式
var showColorTemp           = 1;//colorTemp是否显示
var showWhiteBal            = 1;//白平衡是否显示
var MENU_START 			    = 160;//菜单焦点移动起始位置
var MENU_STEP 			    = 70;//主菜单焦点移动的step
var FOCUS_START             = 305;
var source                  = top.g_channel.inputSource;
var setting = top.g_setting;
var presetSpans;

var offsetPosition =0;
var menuList = 
[
{name:picAdvConName[1],func:function(){showDynamicConMenu();},showFlag:1},
{name:picAdvConName[2],func:function(){showBlackStrMenu();},showFlag:1},
{name:picAdvConName[3],func:function(){showFleshToneMenu();},showFlag:1},
{name:picAdvConName[4],func:function(){showColorEnhanceMenu();},showFlag:1},
{name:picAdvConName[5],func:function(){showColorEnhanceXvYCCMenu();},showFlag:1},
{name:picAdvConName[6],func:function(){showGammaAdjustMenu();},showFlag:1},
{name:picAdvConName[7],func:function(){parent.jumpPage(3,"pictureSetting/whiteBalance/whiteBalance.html");},showFlag:1},
{name:picAdvConName[8],func:function(){showColorTempMenu();},showFlag:1},
{name:picAdvConName[9],func:function(){parent.jumpPage(3,"pictureSetting/whiteBalance/colorSpace.html");},showFlag:1},
{name:picAdvConName[10],func:function(){showXvYCCMenu();},showFlag:1},
{name:picAdvConName[11],func:function(){showRGBMenu();},showFlag:1},
{name:picAdvConName[12],func:function(){showGameModeMenu();},showFlag:1},
{name:picAdvConName[13],func:function(){showMPEGMenu();},showFlag:1},
{name:picAdvConName[14],func:function(){showNoiseReduMenu();},showFlag:1},
{name:picAdvConName[15],func:function(){showFilmModeMenu();},showFlag:1},
{name:picAdvConName[16],func:function(){showMotionClarityMenu();},showFlag:1},
{name:picAdvConName[17],func:function(){showLEDMotioncLarityMenu();},showFlag:1},
{name:picAdvConName[18],func:function(){showBlurReductionAdjustMenu();},showFlag:1},
{name:picAdvConName[19],func:function(){showJudderReductionAdjustMenu();},showFlag:1},
{name:picAdvConName[20],func:function(){showHDMIModeMenu();},showFlag:1},
{name:picAdvConName[21],func:function(){showPicFreezeMenu();},showFlag:1},
]
var focusType="advancedMenuList";
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	//全局消息
	switch(msg)
	{
		case top.E_COLOR_ENHANCE_XVYCC_CHANGE:
		if(value == 0)
		{
			//colorEnhanceXvYCCVal = setting.xvYCCColorEnhance;
			setting.previewColorEnhanceXvYCC(colorEnhanceXvYCCVal);	
		}
		else if(value == 1)
		{
			setting.previewXvYCC(1);
		}
		case top.E_SIGNAL_LOCK:
		case top.E_SIGNAL_UNLOCK:
		
		var currentName = findName(positionV);
		console.log("currentName==="+currentName);
		updateAdvanced(currentName);
		break;
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
var listFirstSpans ;
function init()
{
	timeoutInit();
	lis=$("thdMenuRight").getElementsByTagName("li");
	var spans=$("thdMenuRight").getElementsByTagName("span");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	for(var i=0;i<22;i++)
	{
		spans[i].innerHTML=picAdvConName[i];
	}
	initVarValue();
	showNoiseReduction();
	showMPEG();
	showRGBVal();
	showDynamicConVal();
    showLEDMotionClarityVal();
    showjudderReductionVal();
	showFleshToneVal();
	showFilmModeVal();
	showGameModeVal();
	showColorTempVal();
	showPicFreezeVal();
	showBlackStrVal();
	showOverScanVal();
	showGammaVal();
	showHDMIModeVal();
	showColorEnhanceVal();
	showXvYCCVal();
	showColorEnhanceXvYCCVal();
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
function toUp()
{
	if(focusType=="advancedMenuList")
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
	if(focusType=="advancedMenuList")
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
	if(focusType=="adjustGammaBar")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		gammaVal++;
		if(gammaVal>4)
		{
			gammaVal=4;
			return;
		}
		setting.gamma=gammaVal;
		progDivs[0].style.width=450+parseInt((900*gammaVal)/8)+"px";
		progDivs[2].style.width=450-parseInt((900*gammaVal)/8)+"px";
		$("adjustProgValue").innerHTML=gammaVal;
	}
	else if(focusType=="adjustBlurReduction")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		blurReductionVal++;
		if(blurReductionVal>10)
		{
			blurReductionVal=10;
			return;
		}
		setting.blurReduction=blurReductionVal;
		progDivs[0].style.width=90*blurReductionVal+"px";
		progDivs[2].style.width=900-90*blurReductionVal+"px";
		$("adjustProgValue").innerHTML=blurReductionVal;
	}
	else if(focusType=="adjustJudderReduction")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		judderReductionVal++;
		if(judderReductionVal>10)
		{
			judderReductionVal=10;
			return;
		}
		setting.judderReduction=judderReductionVal;
		progDivs[0].style.width=90*judderReductionVal+"px";
		progDivs[2].style.width=900-90*judderReductionVal+"px";
		$("adjustProgValue").innerHTML=judderReductionVal;
	}
	else if(focusType=="NoiseReduMenu")
	{
		presetPositionH++;
		if(presetPositionH>4)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.noiseReduction = presetPositionH;
		setting.previewNoiseReduction(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="MPEGMenu")
	{
		presetPositionH++;
		if(presetPositionH>3)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.mpegNr = presetPositionH;
		setting.previewMpegNr(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="RGBMenu")
	{
		presetPositionH++;
		if(presetPositionH>3)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	    //setting.rgbMode = presetPositionH;
		setting.previewRgbMode(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="DynamicConMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.dynamicContrast = presetPositionH;
		setting.previewDynamicContrast(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="LEDMotioncLarity")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
        setting.previewMemcLed(presetPositionH);
	    top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="FleshToneMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.fleshToneSwitch = presetPositionH;
		setting.previewFleshTone(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="FilmModeMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.filmMode = presetPositionH;
		setting.previewFilmMode(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="GameModeMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.gameModeSwitch = presetPositionH;
		setting.previewGameMode(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="ColorTempMenu")
	{
		presetPositionH++;
		if(presetPositionH>3)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.colorTemparature = presetPositionH;
		setting.previewColorTemp(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="PicFreezeMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.freeze = presetPositionH;
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="BlackStrMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.blackStretch = presetPositionH;
		setting.previewBlackStretch(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="OverScanMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.overscan = presetPositionH;
		setting.previewOverScan(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="ColorEnhanceMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.colorEnhance = presetPositionH;
		setting.previewColorEnhance(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="ColorEnhanceXvYCCMenu")
	{
		presetPositionH++;
		if(presetPositionH>2)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.colorEnhance = presetPositionH;
		setting.previewColorEnhanceXvYCC(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType == "xvYCCMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.colorEnhance = presetPositionH;
		setting.previewXvYCC(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="HDMIModeMenu")
	{
		presetPositionH++;
		if(presetPositionH>2)
		{
			presetPositionH = 0;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.hdmiMode = presetPositionH;
		setting.previewHdmiType(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else
	{
		toOK();
	}
}
function toLeft()
{
	if(focusType=="adjustGammaBar")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		gammaVal--;
		if(gammaVal<-4)
		{
			gammaVal=-4;
			return;
		}
		setting.gamma=gammaVal;
		progDivs[0].style.width=450+parseInt((900*gammaVal)/8)+"px";
		progDivs[2].style.width=450-parseInt((900*gammaVal)/8)+"px";
		$("adjustProgValue").innerHTML=gammaVal;
	}
	else if(focusType=="adjustJudderReduction")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		judderReductionVal--;
		if(judderReductionVal<0)
		{
			judderReductionVal=0;
			return;
		}
		setting.judderReduction=judderReductionVal;
		progDivs[0].style.width=90*judderReductionVal+"px";
		progDivs[2].style.width=900-90*judderReductionVal+"px";
		$("adjustProgValue").innerHTML=judderReductionVal;
	}
	else if(focusType=="adjustBlurReduction")
	{
		var progDivs=$("adjustProgBar").getElementsByTagName("div");
		blurReductionVal--;
		if(blurReductionVal<0)
		{
			blurReductionVal=0;
			return;
		}
		setting.blurReduction=blurReductionVal;
		progDivs[0].style.width=90*blurReductionVal+"px";
		progDivs[2].style.width=900-90*blurReductionVal+"px";
		$("adjustProgValue").innerHTML=blurReductionVal;
	}
	else if(focusType=="NoiseReduMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 4;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewNoiseReduction(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="MPEGMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 3;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewMpegNr(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="RGBMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 3;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	    setting.previewRgbMode(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="DynamicConMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewDynamicContrast(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="LEDMotioncLarity")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
        setting.previewMemcLed(presetPositionH);
	    top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="FleshToneMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewFleshTone(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="FilmModeMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewFilmMode(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="GameModeMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewGameMode(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="ColorTempMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 3;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewColorTemp(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="PicFreezeMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.freeze = presetPositionH;
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="BlackStrMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewBlackStretch(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="OverScanMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewOverScan(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="ColorEnhanceMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewColorEnhance(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="ColorEnhanceXvYCCMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 2;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.colorEnhance = presetPositionH;
		setting.previewColorEnhanceXvYCC(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType == "xvYCCMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 1;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		//setting.colorEnhance = presetPositionH;
		setting.previewXvYCC(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else if(focusType=="HDMIModeMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH = 2;
		}
		$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
		setting.previewHdmiType(presetPositionH);
		 top.doElementScroll(presetSpans,presetPositionH);
	}
	else
	{
		toBack();
	}
}
function toOK()
{
	if(focusType=="advancedMenuList")
	{
		findFunction(positionV);
	}
	else if(focusType=="NoiseReduMenu")
	{
		noiseRedVal=presetPositionH;
		setting.noiseReduction = noiseRedVal;
		updateAdvanced(picAdvConName[14]);
		returnMenuList();
	}
	else if(focusType=="MPEGMenu")
	{
		MPEGVal=presetPositionH;
		setting.mpegNr = MPEGVal;
		updateAdvanced(picAdvConName[13]);
		returnMenuList();
	}
	else if(focusType=="RGBMenu")
	{
		RGBVal=presetPositionH;
		setting.rgbMode = RGBVal;
		updateAdvanced(picAdvConName[11]);
		returnMenuList();
	}
	else if(focusType=="DynamicConMenu")
	{
		dynamicConVal=presetPositionH;
		setting.dynamicContrast = dynamicConVal;
		updateAdvanced(picAdvConName[1]);
		returnMenuList();
	}
	else if(focusType=="LEDMotioncLarity")
	{
        LEDMotionClarityVal=presetPositionH;
        setting.ledMotionClarityVal = LEDMotionClarityVal;
		updateAdvanced(picAdvConName[17]);
		returnMenuList();
	}
	else if(focusType=="FleshToneMenu")
	{
		fleshToneVal=presetPositionH;
		setting.fleshToneSwitch = fleshToneVal;
		updateAdvanced(picAdvConName[3]);
		returnMenuList();
	}
	else if(focusType=="FilmModeMenu")
	{
		filmModeVal=presetPositionH;
		setting.filmMode = filmModeVal;
		updateAdvanced(picAdvConName[15]);
		returnMenuList();
	}
	else if(focusType=="GameModeMenu")
	{
		gameModeVal=presetPositionH;
		setting.gameModeSwitch = gameModeVal;
		updateAdvanced(picAdvConName[12]);
		returnMenuList();
	}
	else if(focusType=="ColorTempMenu")
	{
		colorTempVal=presetPositionH;
		setting.colorTemparature = colorTempVal;
		updateAdvanced(picAdvConName[8]);
		returnMenuList();
	}
	else if(focusType=="PicFreezeMenu")
	{
		picFreezeVal=presetPositionH;
		updateAdvanced(picAdvConName[21]);
		returnMenuList();
	}
	else if(focusType=="BlackStrMenu")
	{
		blackStrVal=presetPositionH;
		setting.blackStretch = blackStrVal;
		updateAdvanced(picAdvConName[2]);
		returnMenuList();
	}
	else if(focusType=="OverScanMenu")
	{
		overScanVal=presetPositionH;
		setting.overscan = overScanVal;
		updateAdvanced(picAdvConName[14]);
		returnMenuList();
	}
	else if(focusType=="ColorEnhanceMenu")
	{
		colorEnhanceVal=presetPositionH;
		setting.colorEnhance=colorEnhanceVal;
		updateAdvanced(picAdvConName[4]);
		returnMenuList();
	}
	else if(focusType=="ColorEnhanceXvYCCMenu")
	{
		colorEnhanceXvYCCVal=presetPositionH;
		setting.xvYCCColorEnhance=colorEnhanceXvYCCVal;
		updateAdvanced(picAdvConName[5]);
		returnMenuList();
	}
	else if(focusType == "xvYCCMenu")
	{
		xvYCCVal=presetPositionH;
		setting.xvYCCValue=xvYCCVal;
		updateAdvanced(picAdvConName[10]);
		returnMenuList();
	}
	else if(focusType=="HDMIModeMenu")
	{
		hdmiModeVal=presetPositionH;
		setting.hdmiMode = hdmiModeVal;
		returnMenuList();
		updateAdvanced(picAdvConName[20]);
	}
}
function returnMenuList()
{
	$("preSetBar").style.display="none";
	parent.showPage(2);
	focusType="advancedMenuList";
}
function toBack()
{
	if(focusType=="advancedMenuList")
	{
		parent.returnPage(2);
		parent.$("subMenu1").contentWindow.updatePicture("advancedSetting");
	}
	else if(focusType=="NoiseReduMenu")
	{
		setting.previewNoiseReduction(noiseRedVal);
		updateAdvanced(picAdvConName[14]);
		returnMenuList();
	}
	else if(focusType=="MPEGMenu")
	{
		setting.previewMpegNr(MPEGVal);
		updateAdvanced(picAdvConName[13]);
		returnMenuList();
	}
	else if(focusType=="RGBMenu")
	{
		setting.previewRgbMode(RGBVal);
		updateAdvanced(picAdvConName[11]);
		returnMenuList();
	}
	else if(focusType=="DynamicConMenu")
	{
		setting.previewDynamicContrast(dynamicConVal);
		updateAdvanced(picAdvConName[1]);
		returnMenuList();
	}
	else if(focusType=="LEDMotioncLarity")
	{
        setting.previewMemcLed(LEDMotionClarityVal);
		updateAdvanced(picAdvConName[17]);
		returnMenuList();
	}
	else if(focusType=="FleshToneMenu")
	{
		setting.previewFleshTone(fleshToneVal);
		updateAdvanced(picAdvConName[3]);
		returnMenuList();
	}
	else if(focusType=="FilmModeMenu")
	{
		setting.previewFilmMode(filmModeVal);
		updateAdvanced(picAdvConName[15]);
		returnMenuList();
	}
	else if(focusType=="GameModeMenu")
	{
		setting.previewGameMode(gameModeVal);
		updateAdvanced(picAdvConName[12]);
		returnMenuList();
	}
	else if(focusType=="ColorTempMenu")
	{
		setting.previewColorTemp(colorTempVal);
		updateAdvanced(picAdvConName[8]);
		returnMenuList();
	}
	else if(focusType=="PicFreezeMenu")
	{
		setting.freeze = picFreezeVal;
		updateAdvanced(picAdvConName[21]);
		returnMenuList();
	}
	else if(focusType=="BlackStrMenu")
	{
		setting.previewBlackStretch(blackStrVal);
		updateAdvanced(picAdvConName[2]);
		returnMenuList();
	}
	else if(focusType=="OverScanMenu")
	{
		setting.previewOverScan(overScanVal);
		returnMenuList();
	}
	else if(focusType=="ColorEnhanceMenu")
	{
		setting.previewColorEnhance(colorEnhanceVal);
		updateAdvanced(picAdvConName[4]);
		returnMenuList();
	}
	else if(focusType=="ColorEnhanceXvYCCMenu")
	{
		setting.previewColorEnhanceXvYCC(colorEnhanceXvYCCVal);
		updateAdvanced(picAdvConName[5]);
		returnMenuList();
	}
	else if(focusType == "xvYCCMenu")
	{
		setting.previewXvYCC(xvYCCVal);
		updateAdvanced(picAdvConName[10]);
		returnMenuList();
	}
	else if(focusType=="HDMIModeMenu")
	{
		setting.previewHdmiType(hdmiModeVal);
		updateAdvanced(picAdvConName[20]);
		returnMenuList();
	}
	else if(focusType=="adjustGammaBar")
	{
		updateAdvanced(picAdvConName[6]);
		top.timeoutFuc.timeoutTimes = 30;
		$("adjustProgressBox").style.display="none";
		parent.showPage(2);
		focusType="advancedMenuList";
	}
	else if(focusType=="adjustBlurReduction")
	{
		updateAdvanced(picAdvConName[18]);
		top.timeoutFuc.timeoutTimes = 30;
		$("adjustProgressBox").style.display="none";
		parent.showPage(2);
		focusType="advancedMenuList";
	}
	else if(focusType=="adjustJudderReduction")
	{
		updateAdvanced(picAdvConName[19]);
		top.timeoutFuc.timeoutTimes = 30;
		$("adjustProgressBox").style.display="none";
		parent.showPage(2);
		focusType="advancedMenuList";
	}
}
function initVarValue()
{
	  pic3DMode = setting.pic3DMode;
	noiseRedVal = setting.noiseReduction;
		MPEGVal = setting.mpegNr;
		 RGBVal = setting.rgbMode;
  dynamicConVal = setting.dynamicContrast;
   motionEnhVal = setting.motionEnhancementSwitch;
   fleshToneVal = setting.fleshToneSwitch;
   	filmModeVal = setting.filmMode;
	gameModeVal = setting.gameModeSwitch;
   colorTempVal = setting.colorTemparature;
   picFreezeVal = setting.freeze;
   	blackStrVal = setting.blackStretch;
    overScanVal = setting.overscan;
	   gammaVal = setting.gamma;
    LEDMotionClarityVal = setting.ledMotionClarityVal;
    console.log("quanhw test setting.ledMotionClarityVal = " + setting.ledMotionClarityVal);
hdmiModeDbAndRealType = setting.hdmiMode;
//top.g_channel.testLog("hdmiModeDbAndRealType = " + hdmiModeDbAndRealType);
	hdmiModeVal = hdmiModeDbAndRealType>>16;
	hdmiRealMode = hdmiModeDbAndRealType&65535
//	console.log("hdmiRealMode="+hdmiRealMode);
colorEnhanceVal = setting.colorEnhance;
colorEnhanceXvYCCVal = setting.xvYCCColorEnhance;
	xvYCCVal    = setting.xvYCCValue;
}
function showNoiseReduction()//在主界面上显示值
{
	var divs = lis[14].getElementsByTagName("div");
	divs[0].innerHTML=picAdLevel[noiseRedVal];
}
function showMPEG()//在主界面上显示值
{
	var divs = lis[13].getElementsByTagName("div");
	divs[0].innerHTML=picAdLevel[MPEGVal];
}
function showXvYCCVal()
{
	var divs = lis[10].getElementsByTagName("div");
	divs[0].innerHTML=offOn[xvYCCVal];
}
function showRGBVal()//在主界面上显示值
{
	var divs = lis[11].getElementsByTagName("div");
	divs[0].innerHTML=picAdvRGBmode[RGBVal];
}
function showDynamicConVal()//在主界面上显示值
{
	var divs = lis[1].getElementsByTagName("div");
	divs[0].innerHTML=offOn[dynamicConVal];
}
function showLEDMotionClarityVal()//在主界面上显示值
{
	var divs = lis[17].getElementsByTagName("div");
	divs[0].innerHTML=offOn[LEDMotionClarityVal];
}
function showFleshToneVal()//在主界面上显示值
{
	var divs = lis[3].getElementsByTagName("div");
	divs[0].innerHTML=offOn[fleshToneVal];
}
function showFilmModeVal()//在主界面上显示值
{
	var divs = lis[15].getElementsByTagName("div");
	divs[0].innerHTML=offOn[filmModeVal];
}
function showGameModeVal()//在主界面上显示值
{
	var divs = lis[12].getElementsByTagName("div");
	divs[0].innerHTML=offOn[gameModeVal];
}
function showColorTempVal()//在主界面上显示值
{
	lis[8].style.display="block";
	showColorTemp = 1;
	if(colorTempVal==3)
	{
		showWhiteBal = 1;
		lis[6].style.display="block";
	}
	else
	{
		showWhiteBal = 0;
		lis[6].style.display="none";
	}
}
function showPicFreezeVal()//在主界面上显示值
{
	var divs = lis[21].getElementsByTagName("div");
	divs[0].innerHTML=offOn[picFreezeVal];
}
function showBlackStrVal()//在主界面上显示值
{
	var divs = lis[2].getElementsByTagName("div");
	divs[0].innerHTML=offOn[blackStrVal];
}
function showOverScanVal()//在主界面上显示值
{
	lis[15].style.display="none";
}
function showGammaVal()//在主界面上显示值
{
	var divs = lis[6].getElementsByTagName("div");
	var progDivs=$("gamma").getElementsByTagName("div");
	progDivs[0].style.width=150+parseInt((300*gammaVal)/8)+"px";
	progDivs[2].style.width=150-parseInt((300*gammaVal)/8)+"px";
	divs[4].innerHTML=gammaVal;
}
function showHDMIModeVal()
{
	var divs = lis[20].getElementsByTagName("div");
	divs[0].innerHTML=picHDMIMode[hdmiModeVal];
}
function showColorEnhanceVal()
{
	var divs = lis[4].getElementsByTagName("div");
	divs[0].innerHTML=offOn[colorEnhanceVal];
}

function showColorEnhanceXvYCCVal()
{
	var divs = lis[5].getElementsByTagName("div");
	divs[0].innerHTML=picxvYCCColorEnhance[colorEnhanceXvYCCVal];
}
function showblurReductionVal()//在主界面上显示值
{
	blurReductionVal        = setting.blurReduction;
	var divs = lis[18].getElementsByTagName("div");
	var progDivs=$("blurReduction").getElementsByTagName("div");
	progDivs[0].style.width=30*blurReductionVal+"px";
	progDivs[2].style.width=300-30*blurReductionVal+"px";
	divs[4].innerHTML=blurReductionVal;
}
function showjudderReductionVal()//在主界面上显示值
{
	judderReductionVal   = setting.judderReduction;
	var divs = lis[19].getElementsByTagName("div");
	var progDivs=$("judderReduction").getElementsByTagName("div");
	progDivs[0].style.width=30*judderReductionVal+"px";
	progDivs[2].style.width=300-30*judderReductionVal+"px";
	divs[4].innerHTML=judderReductionVal;
}
function showNoiseReduMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(5);
	$("preSetOption").innerHTML=picAdvConName[14];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<5;i++)
	{
		spans[i+1].innerHTML=picAdLevel[i];
	}
	presetPositionH=noiseRedVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="NoiseReduMenu";
}
function showMPEGMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(4);
	$("preSetOption").innerHTML=picAdvConName[13];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<4;i++)
	{
		spans[i+1].innerHTML=picAdLevel[i];
	}
	presetPositionH=MPEGVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="MPEGMenu";
}
function showRGBMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(4);
	$("preSetOption").innerHTML=picAdvConName[11];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<4;i++)
	{
		spans[i+1].innerHTML=picAdvRGBmode[i];
	}
	presetPositionH=RGBVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="RGBMenu";
}
function showXvYCCMenu()
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picAdvConName[10];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH = xvYCCVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="xvYCCMenu";
}
function showDynamicConMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picAdvConName[1];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=dynamicConVal;
	 
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="DynamicConMenu";
	top.doElementScroll(presetSpans,presetPositionH);
}

function showFleshToneMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picAdvConName[3];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=fleshToneVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="FleshToneMenu";
}
function showFilmModeMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picAdvConName[15];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=filmModeVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="FilmModeMenu";
}
function showGameModeMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picAdvConName[12];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=gameModeVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="GameModeMenu";
}
function showColorTempMenu()//显示该选项的选择控制界面和准备选择选项
{
	parent.jumpPage(3,"pictureSetting/whiteBalance/10PwhiteBalance.html");
}
function showPicFreezeMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picAdvConName[21];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=picFreezeVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="PicFreezeMenu";
}
function showBlackStrMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picAdvConName[2];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=blackStrVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="BlackStrMenu";
}
function showMotionClarityMenu()//显示该选项的选择控制界面和准备选择选项
{
	parent.jumpPage(3,"pictureSetting/whiteBalance/motionClarity.html");
}

function showColorEnhanceMenu()//显示该选项的选择控制界面和准备选择选项
{
    showPersetSelect(2);
    $("preSetOption").innerHTML=picAdvConName[4];
    var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
    for(var i=0;i<2;i++)
    {
        spans[i+1].innerHTML=offOn[i];
    }
    presetPositionH=colorEnhanceVal;
    top.doElementScroll(presetSpans,presetPositionH);
    $("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.display = "block";
    parent.hiddenPage(2)
    $("preSetBar").style.display="block"
    focusType="ColorEnhanceMenu";
}

function showLEDMotioncLarityMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picAdvConName[17];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=LEDMotionClarityVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="LEDMotioncLarity";
}
function showColorEnhanceXvYCCMenu()
{
	showPersetSelect(3);
	$("preSetOption").innerHTML=picAdvConName[5];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<3;i++)
	{
		spans[i+1].innerHTML=picxvYCCColorEnhance[i];
	}
	presetPositionH=colorEnhanceXvYCCVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="ColorEnhanceXvYCCMenu";
}
function showHDMIModeMenu()
{
	showPersetSelect(3);
	$("preSetOption").innerHTML=picAdvConName[20];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<3;i++)
	{
		spans[i+1].innerHTML=picHDMIMode[i];
	}
	presetPositionH=hdmiModeVal;
	 top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=FOCUS_START+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="HDMIModeMenu";
}
function showGammaAdjustMenu()//显示该选项的选择控制界面和准备选择选项
{
	parent.hiddenPage(2);
	top.timeoutFuc.timeoutTimes = 10;
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picAdvConName[6];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=450+(900*gammaVal)/8+"px";
	progDivs[2].style.width=450-(900*gammaVal)/8+"px";
	$("adjustProgValue").innerHTML=gammaVal;
	$("adjustProgressBox").style.display="block";
	focusType="adjustGammaBar";
}
function showBlurReductionAdjustMenu()//显示该选项的选择控制界面和准备选择选项
{
	parent.hiddenPage(2);
	top.timeoutFuc.timeoutTimes = 10;
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picAdvConName[18];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=90*blurReductionVal+"px";
	progDivs[2].style.width=900-90*blurReductionVal+"px";
	$("adjustProgValue").innerHTML=blurReductionVal;
	$("adjustProgressBox").style.display="block";
	focusType="adjustBlurReduction";
}
function showJudderReductionAdjustMenu()//显示该选项的选择控制界面和准备选择选项
{
	parent.hiddenPage(2);
	top.timeoutFuc.timeoutTimes = 10;
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picAdvConName[19];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=90*judderReductionVal+"px";
	progDivs[2].style.width=900-90*judderReductionVal+"px";
	$("adjustProgValue").innerHTML=judderReductionVal;
	$("adjustProgressBox").style.display="block";
	focusType="adjustJudderReduction";
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
function updateAdvanced(name)
{
	initVarValue();
	showNoiseReduction();
	showMPEG();
	showRGBVal();
	showDynamicConVal();
    showLEDMotionClarityVal();
    showjudderReductionVal();
	showFleshToneVal();
	showFilmModeVal();
	showGameModeVal();
	showColorTempVal();
	showPicFreezeVal();
	showBlackStrVal();
	showOverScanVal();
	showGammaVal();
	showHDMIModeVal();
	showColorEnhanceVal();
	showXvYCCVal();
    showColorEnhanceXvYCCVal();
	checkShowMenu();
	showMenuList();
	positionV=findPosition(name);
	doOffsetMenuList(positionV);
}
function checkShowMenu()
{
	try
	{
		for(var i=0;i<menuList.length;i++)
		{
			menuList[i].showFlag=1;
		}
		if((source == 6 || source == 7 || source == 8 || source == 12)&&hdmiRealMode==1)
		{
			for(var i=0;i<menuList.length;i++)
			{
				menuList[i].showFlag=0;
			}
			if(colorTempVal==3)
			{
				menuList[6].showFlag=1;
			}
			else
			{
				menuList[6].showFlag=0;
			}
			menuList[8].showFlag=1;
			menuList[7].showFlag=1;
			menuList[5].showFlag=1;
			menuList[10].showFlag=1;
            menuList[19].showFlag=1;
		}
		else
		{
            var is4K1kEnable = setting.getProperty("ro.sita.model.TCL_PANEL_SETTING.PANEL_4K1K_ENABLE", "0");
            var isMEMCEnable = setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_memc_enable", "0");
            var isMixDimming = (0 == setting.getProperty("ro.sita.model.MIX_ADJUST_BACKLIGHT_CFG.MIX_ADJUST_BACKLIGHT_ENABLE", "0")) ? 0 : setting.mixDimming;
            var isVideo = setting.isVideoSignal();
            var panelFrequency = setting.getPanelFrequency;
            if(1 == is4K1kEnable && 1 == isMEMCEnable && 60 == panelFrequency)
            {
                menuList[15].showFlag=1;
                menuList[16].showFlag=0;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }
            else if(0 == is4K1kEnable && 1 == isMEMCEnable && 120 == panelFrequency)
            {
                menuList[15].showFlag=1;
                menuList[16].showFlag=0;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }
            else if(0 == is4K1kEnable && 1 == isMEMCEnable && 60 == panelFrequency && 0 == isMixDimming && 0 == isVideo)
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=1;
                menuList[17].showFlag=0;
                menuList[18].showFlag=1;
            }
            else if(0 == is4K1kEnable && 1 == isMEMCEnable && 60 == panelFrequency && 0 == isMixDimming && 1 == isVideo)
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=1;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }
            else if(0 == is4K1kEnable && 1 == isMEMCEnable && 60 == panelFrequency && 1 == isMixDimming && 0 == isVideo)
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=0;
                menuList[17].showFlag=0;
                menuList[18].showFlag=1;
            }
            else if(0 == is4K1kEnable && 1 == isMEMCEnable && 60 == panelFrequency && 1 == isMixDimming && 1 == isVideo)
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=0;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }
            else if(0 == is4K1kEnable && 0 == isMEMCEnable && 60 == panelFrequency && 0 == isMixDimming && 0 == isVideo)
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=1;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }
            else if(0 == is4K1kEnable && 0 == isMEMCEnable && 60 == panelFrequency && 0 == isMixDimming && 1 == isVideo)
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=1;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }
            else if(0 == is4K1kEnable && 0 == isMEMCEnable && 60 == panelFrequency && 1 == isMixDimming && 0 == isVideo)
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=0;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }
            else if(0 == is4K1kEnable && 0 == isMEMCEnable && 60 == panelFrequency && 1 == isMixDimming && 1 == isVideo)
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=0;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }
            else
            {
                menuList[15].showFlag=0;
                menuList[16].showFlag=0;
                menuList[17].showFlag=0;
                menuList[18].showFlag=0;
            }

            if(setting.energySaving!=0)       //动态背光开时
            {
                menuList[16].showFlag=0;
            }

            if(setting.pic3DMode > 0)          //打开3D模式时
            {
                menuList[15].showFlag=0;
            }
			var signalStatus = top.g_channel.currentSignalStatus;
			var panelMode = setting.picPanelMode();

			if(panelMode>1)
			{
				if(setting.isXvYCCSignal==1&&signalStatus==1)
				{
					menuList[9].showFlag=1;
				}
				else
				{
					menuList[9].showFlag=0;
				}
				menuList[3].showFlag=0;
				if(xvYCCVal==1)
				{
					menuList[4].showFlag=0;
				}
				else
				{
					menuList[4].showFlag=1;
				}
				
			}
			else
			{
				menuList[4].showFlag=0;
				menuList[3].showFlag=1;
				menuList[9].showFlag=0;
			}
			if(colorTempVal==3)
			{
				menuList[6].showFlag=1;
			}
			else
			{
				menuList[6].showFlag=0;
			}

            if(source==6 || source==7 || source ==8 || source ==12)
            {
                menuList[19].showFlag=1;
            }
            else
            {
                menuList[19].showFlag=0;
            }
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
		var showNum = 0;
		for(var i=0;i<menuList.length;i++)
		{
			if(menuList[i].showFlag==1)
			{
				showNum++;
				lis[i+1].style.display="block";
			}
			else
			{
				lis[i+1].style.display="none";
			}
		}
		if(showNum>11)
		{
			$("listDownRemind").style.display="block";
			$("listUpRemind").style.display="block";
		}
		else
		{
			$("listDownRemind").style.display="none";
			$("listUpRemind").style.display="none";
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
	if(postion>=12)
	{
		offsetPosition=postion-11;
		$("menuUl").style.top=-(postion-11)*70+"px";
		$("thdListFocus").style.top=MENU_START+11*MENU_STEP+"px";
	}
	else
	{
		offsetPosition=0;
		$("menuUl").style.top=0+"px";
		$("thdListFocus").style.top=MENU_START+postion*MENU_STEP+"px";
	}
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
    if(focusType=="NoiseReduMenu")
	{
		setting.previewNoiseReduction(noiseRedVal);
	}
	else if(focusType=="MPEGMenu")
	{
		setting.previewMpegNr(MPEGVal);
	}
	else if(focusType=="RGBMenu")
	{
		setting.previewRgbMode(RGBVal);
	}
	else if(focusType=="DynamicConMenu")
	{
		setting.previewDynamicContrast(dynamicConVal);
	}
	else if(focusType=="LEDMotioncLarity")
	{
		setting.previewMemcLed(motionEnhVal);
	}
	else if(focusType=="FleshToneMenu")
	{
		setting.previewFleshTone(fleshToneVal);
	}
	else if(focusType=="FilmModeMenu")
	{
		setting.previewFilmMode(filmModeVal);
	}
	else if(focusType=="GameModeMenu")
	{
		setting.previewGameMode(gameModeVal);
	}
	else if(focusType=="ColorTempMenu")
	{
		setting.previewColorTemp(colorTempVal);
	}
	else if(focusType=="PicFreezeMenu")
	{
		setting.freeze = picFreezeVal;
	}
	else if(focusType=="BlackStrMenu")
	{
		setting.previewBlackStretch(blackStrVal);
	}
	else if(focusType=="OverScanMenu")
	{
		setting.previewOverScan(overScanVal);
	}
	else if(focusType=="ColorEnhanceMenu")
	{
		setting.previewColorEnhance(colorEnhanceVal);
	}
	else if(focusType=="ColorEnhanceXvYCCMenu")
	{
		setting.previewColorEnhanceXvYCC(colorEnhanceXvYCCVal);
	}
	else if(focusType=="HDMIModeMenu")
	{
		setting.previewHdmiType(hdmiModeVal);
	}
}
function addTagName(tag,id)
{
	tag.setAttribute("newAttr",id);
}
var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 100;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 900;
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2)
		{ 
			toBack();//right key
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var ii = 0; ii < 21; ii++)
	{
		addTagName(lis[ii+1],ii);
		lis[ii+1].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="advancedMenuList")
				{
					evt.preventDefault();
					positionV = findPosition(menuList[parseInt(this.getAttribute("newAttr"),10)].name);
					doOffsetMenuList(positionV);
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}

	}
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var i = 0; i < 5; i++)
	{
		addTagName(spans[i+1],i);
		spans[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
					presetPositionH=parseInt(this.getAttribute("newAttr"));
					if(focusType=="PicFreezeMenu")
					{
						setting.freeze = presetPositionH;
						toOK();
					}
					else
					{
						toOK();
					}
				
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
		
	}
	$("listUpRemind").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="advancedMenuList")
				{
					toUp();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("listDownRemind").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="advancedMenuList")
				{
					toDown();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("adjustProgressBox").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
				
				if(focusType=="adjustGammaBar")
				{
					PROGRESS_MAX_VALUE = 8;
					var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10)-4;
					var progDivs=$("adjustProgBar").getElementsByTagName("div");
					gammaVal=value;
					if(gammaVal>4)
					{
						gammaVal=4;
					}
					else if(gammaVal<-4)
					{
						gammaVal=-4;
					}
					setting.gamma=gammaVal;
					progDivs[0].style.width=450+parseInt((900*gammaVal)/8)+"px";
					progDivs[2].style.width=450-parseInt((900*gammaVal)/8)+"px";
					$("adjustProgValue").innerHTML=gammaVal;
				}
				else if(focusType=="adjustBlurReduction")
				{
					PROGRESS_MAX_VALUE = 10;
					var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
					var progDivs=$("adjustProgBar").getElementsByTagName("div");
					blurReductionVal=value;
					if(blurReductionVal>10)
					{
						blurReductionVal=10;
					}
					else if(blurReductionVal<0)
					{
						blurReductionVal=0;
					}
					setting.blurReduction=blurReductionVal;
					progDivs[0].style.width=90*blurReductionVal+"px";
					progDivs[2].style.width=900-90*blurReductionVal+"px";
					$("adjustProgValue").innerHTML=blurReductionVal;
				}
				else if(focusType=="adjustJudderReduction")
				{
					PROGRESS_MAX_VALUE = 10;
					var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
					var progDivs=$("adjustProgBar").getElementsByTagName("div");
					judderReductionVal=value;
					if(judderReductionVal>10)
					{
						judderReductionVal=10;
					}
					else if(judderReductionVal<0)
					{
						judderReductionVal=0;
					}
					setting.judderReduction=judderReductionVal;
					progDivs[0].style.width=90*judderReductionVal+"px";
					progDivs[2].style.width=900-90*judderReductionVal+"px";
					$("adjustProgValue").innerHTML=judderReductionVal;
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
	}
}
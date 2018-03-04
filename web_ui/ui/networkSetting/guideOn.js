/******************** created by chenhua ***********************/
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,preset

var SUB_MENU_START 				= 90;					//三级级菜单焦点移动起始位置
var FORM_STEP							=80;
	
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
var guideSelectOffOn				= top.offOn;
var guideTitleWords					="GuideOn";
var guideDescriptionWords = top.guideDescriptionWords;
var guideStageWords	= top.remoteStage;
var form_position_h	=0;
var SUB_MENU_GUDIE_ON_OFFSET = 734; //daheng add
document.onnotify 				= notifyProcess;
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}
function keyDownProcess(evt)
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
			doEnter();
			ret = false;
			break;
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_BACK:
			toBack();
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

function toDown()
{
	if(focusOn == "guideSelect")
	{
		if(form_position_h==0)
			form_position_h=1;
		else
			form_position_h=0;
		setting.guideOnSwitch=form_position_h;			
		$("listFormFocus").style.top = FORM_STEP*form_position_h + "px";
		top.doEleScrForNoOption(listFormLiList,form_position_h, 1);	
	}	
}
function toUp()
{
	if(focusOn == "guideSelect")
	{
		if(form_position_h==0)
			form_position_h=1;
		else
			form_position_h=0;
		setting.guideOnSwitch=form_position_h;
		$("listFormFocus").style.top = FORM_STEP*form_position_h + "px";
		top.doEleScrForNoOption(listFormLiList,form_position_h, -1);
		
	}
}
function doEnter()
{
	if(focusOn == "guideSelect")
	{
		$("thdListFocus").src=mainFocus[0];	
		$("guideOnStatus").innerHTML = guideSelectOffOn[form_position_h];
		$("listForm").style.display = "none";
		focusOn = "menu";				
	}
	else
		{
					$("thdListFocus").src=mainFocus[1];
					var topOffset = SUB_MENU_START - 10;
					var leftOffset = SUB_MENU_GUDIE_ON_OFFSET;
					top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,guideSelectOffOn,2,form_position_h,0);
					focusOn = "guideSelect";

		}
}
	
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";			
	}
}
function toLeft()
{
	toBack();
}
function toRight()
{
		doEnter();
}

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
var listFirstSpans;
function init()
{
	timeoutInit();
	form_position_h	= setting.guideOnSwitch;
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	thdMenuRightSpanList[0].innerHTML = guideTitleWords;	
	$("guideDescription").innerHTML = guideDescriptionWords;
	$("guideOnStatus").innerHTML = guideSelectOffOn[form_position_h];	
	$("thdListFocus").style.top = SUB_MENU_START +  "px";
	
	var guideSpanList = $("guideImgRemind").getElementsByTagName("span");
	guideSpanList[0].innerText = guideStageWords[0];
	guideSpanList[1].innerText = guideStageWords[1];	
	$("guideImgRemind").style.display = "block";
			
	listFormLiList = $("listForm").getElementsByTagName("li");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");	
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,0, 0);
}

function uninit()
{
    //maybe be previewed,need to resume
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	thdMenuRightLiList[0].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "menu"){
				$("thdListFocus").style.top = SUB_MENU_START + "px";
				doEnter();
			}
		}		
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
		listFormLiList[0].setAttribute("newAttr",0);
		listFormLiList[0].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "guideSelect"){
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}	
	
}




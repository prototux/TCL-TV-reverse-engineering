/******************** created by chenhua ***********************/
var teletextTitleWords 			= [top.chOptions[7],top.ttxOptionsCon[0],top.ttxOptionsCon[1]];
var ttxLanguageList             = top.ttxLanguage;
var sumTtxLang					= 35;
var ttxLangIndex 				= top.audioSttlTtxLang;
var languagesWords				= new Array(sumTtxLang);
for(var i = 0; i < sumTtxLang; i++)
{
	languagesWords[i] = top.all_language[ttxLangIndex[i]];
}

var sumPageLang					= 9;
var offset                		= 0;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,subtitle,subtitleLanguage1,subtitleLanguage2
var list_position_h				= 0;
var form_position_h				= 0;
var ttxPageLang1Pos				= 0;					//当decoding page language语言在ttxLangIndex中的下标
var ttxLangPos				    = 0;					//当前digital teletext language语言在	ttxLangIndex中的下标

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 500;	
		
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
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
	if(focusOn == "menu")
	{
		if(list_position_h >= 1)
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
	}
	else if(focusOn == "decodingPage" || focusOn == "digitalTtx")
	{
		toDownInLanguages();
	}
}
function toUp()
{
	if(focusOn == "menu")
	{			
		if(list_position_h <= 0)
		{
			list_position_h = 1;
		}
		else
		{
			list_position_h--;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "decodingPage" || focusOn == "digitalTtx")
	{
		toUpInLanguages();
	}	
}


function doEnter()
{
	if(focusOn == "menu")
	{
		$("thdListFocus").src=mainFocus[1];//style.display = "none";
		if(list_position_h == 0)
		{
			initDecPageLang();
			focusOn = "decodingPage";
		}
		else if(list_position_h == 1)
		{
			initDigTTXLang();
			focusOn = "digitalTtx";
		}
	}
	else if(focusOn == "decodingPage")
	{
		$("thdListFocus").src=mainFocus[0];
		setting.ttsLanguage = form_position_h + offset;
		$('decLang').innerHTML = ttxLanguageList[form_position_h + offset];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "digitalTtx")
	{
		$("thdListFocus").src=mainFocus[0];
		setting.teletextLanguage=ttxLangIndex[form_position_h + offset];
		channel.testLog(ttxLangIndex[form_position_h + offset]);
		$('digLang').innerHTML = languagesWords[form_position_h + offset];
		channel.testLog(languagesWords[form_position_h + offset]);
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "decodingPage" || focusOn == "digitalTtx")
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


function initDecPageLang()
{
	ttxPageLang1Pos = setting.ttsLanguage;
	if(ttxPageLang1Pos >= 5)
	{
		form_position_h = 4;
		offset = ttxPageLang1Pos - form_position_h;
	}
	else
	{
		form_position_h = ttxPageLang1Pos;
		offset = 0;
	}
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,ttxLanguageList,9,form_position_h,offset);
}


function initDigTTXLang()
{
	ttxLangPos = fixSubtLangFocus(setting.teletextLanguage);
	channel.testLog("ttxLangPos="+ttxLangPos);
	if(ttxLangPos >= 5)
	{
		form_position_h = 4;
		offset = ttxLangPos - form_position_h;
	}
	else
	{
		form_position_h = ttxLangPos;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,languagesWords,sumTtxLang,form_position_h,offset);
}

function toDownInLanguages()
{
	var optionWords = "";
	var sumLang	= 0;
	if(focusOn == "decodingPage")
	{
		optionWords = ttxLanguageList;
		sumLang = sumPageLang;
	}
	else if(focusOn == "digitalTtx")
	{
		optionWords = languagesWords;
		sumLang = sumTtxLang;
	}
	
	if(form_position_h == 4 && (form_position_h + offset) >= (sumLang - 1))
	{
		offset=0;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = optionWords[i+offset];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sumLang - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = optionWords[i+offset];
		}
	}
	else
	{
		form_position_h++;
	}
	
	$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	if(offset > 0)
	{
		$("listUpImg").style.display = "block";
	}
	else
	{
		$("listUpImg").style.display = "none";
	}
	
	if((offset + 4) >= (sumLang - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
}


function toUpInLanguages()
{
	var optionWords = "";
	var sumLang	= 0;
	if(focusOn == "decodingPage")
	{
		optionWords = ttxLanguageList;
		sumLang = sumPageLang;
	}
	else if(focusOn == "digitalTtx")
	{
		optionWords = languagesWords;
		sumLang = sumTtxLang;
	}
	
	if(form_position_h == 0 && offset == 0)
	{
		offset = sumLang - 5;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = optionWords[i + offset];
		}
		form_position_h = 4;
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = optionWords[i + offset];
		}
	}
	else if(form_position_h > 0)
	{
		form_position_h--;
	}
	
	$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	if(offset > 0)
	{
		$("listUpImg").style.display = "block";
	}
	else
	{
		$("listUpImg").style.display = "none";
	}
	
	if((offset + 4) >= (sumLang - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
}


/*
描述：获取当前选择的subtitle language 在subtLangIndex中的下标
参数：langIndex:subtitle language的枚举值（在所有语言中的索引值）
返回值：当前选择的subtitle language 在subtLangIndex中的下标
全局变量：
*/
function fixSubtLangFocus(langIndex)
{
    for (var i=0; i < sumTtxLang; i++)
    {
        if (ttxLangIndex[i] == langIndex)
        {
            return i;
        }
    }
	return 0;//默认为english
}
var thdMenuRightLiList;
var listFormLiList;
var listFirstSpans;
function init()
{
	timeoutInit();
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	var thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	for(var i = 0; i < 3; i++)
	{
		thdMenuRightSpanList[i].innerHTML = teletextTitleWords[i];
	}
	
	ttxPageLang1Pos = setting.ttsLanguage;
	ttxLangPos = fixSubtLangFocus(setting.teletextLanguage);
	channel.testLog("ttxPageLang1Pos"+ttxPageLang1Pos);
	channel.testLog("ttxLangPos"+ttxLangPos);
	$('decLang').innerHTML = ttxLanguageList[ttxPageLang1Pos];
	$('digLang').innerHTML = languagesWords[ttxLangPos];
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	listFormLiList = $("listForm").getElementsByTagName("li");
	
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var i = 1; i < 3; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu"){
					list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn != "menu"){
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("listUpImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn != "menu")
			{
				form_position_h = 0;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toUp();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	$("listDownImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn != "menu")
			{
				form_position_h = 4;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toDown();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}



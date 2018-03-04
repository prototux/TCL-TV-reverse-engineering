/******************** created by chenhua ***********************/
var subtitleTitleWords 			= [top.chOptions[6],top.subOptions[0],top.subOptions[1],top.subOptions[2],top.subOptions[3]];
var subOptions					= top.subOptions;
var offOnWords					= top.offOn;
var subtTypeWords				= top.subType;
var sumSubtLang					= 35;					//可允许的subtitle语言的个数
var subtLangIndex 				= top.audioSttlTtxLang;
var languagesWords				= new Array(sumSubtLang);
for(var i = 0; i < sumSubtLang; i++)
{
	languagesWords[i] = top.all_language[subtLangIndex[i]];
}

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,subtitle,subtitleLanguage1,subtitleLanguage2
var list_position_h				= 0;
var form_position_h				= 0;
var subtLang1Pos				= 0;					//当前first subtitle language语言在subtLangIndex中的下标
var subtLang2Pos				= 0;					//当前second subtitle language语言在	subtLangIndex中的下标
var offset					= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如subtitle language中offset = subtLang1Pos - form_position_h
var enableSubt					= 0;					//0 off,1 on
var subtType					= 0;					//0 Normal,1 Hearing impaired

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
		if(enableSubt == 0)
		{
			return;
		}
		else
		{
			if(list_position_h >= 3)
			{
				list_position_h = 0;
			}
			else
			{
				list_position_h++;
			}
			$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
		top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
	}
	else if(focusOn == "subtitle" || focusOn == "subtitleType")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "subtitleLanguage1")
	{
		toDownInLanguages(sumSubtLang);
	}
	else if(focusOn == "subtitleLanguage2")
	{
		toDownInLanguages(sumSubtLang);
	}
}
function toUp()
{
	if(focusOn == "menu")
	{
		if(enableSubt == 0)
		{
			return;
		}
		else
		{
			if(list_position_h <= 0)
			{
				list_position_h = 3;
			}
			else
			{
				list_position_h--;
			}
			$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "subtitle" || focusOn == "subtitleType")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "subtitleLanguage1")
	{
		toUpInLanguages(sumSubtLang);
	}
	else if(focusOn == "subtitleLanguage2")
	{
		toUpInLanguages(sumSubtLang);
	}
	
}


function doEnter()
{
	if(focusOn == "menu")
	{
		$("thdListFocus").src=mainFocus[1];
		if(list_position_h == 0)
		{
			initSubt();
			focusOn = "subtitle";
		}
		else if(list_position_h == 1)
		{
			initLanguages(subtLang1Pos);
			focusOn = "subtitleLanguage1";
		}
		else if(list_position_h == 2)
		{
			initLanguages(subtLang2Pos);
			focusOn = "subtitleLanguage2";
		}
		else if(list_position_h == 3)
		{
			initSubtType();
			focusOn = "subtitleType";
		}
	}
	else if(focusOn == "subtitle")
	{
		$("thdListFocus").src=mainFocus[0];
		enableSubt = form_position_h;
		setting.enableSubtitle = enableSubt;
		$('subtStatus').innerHTML = offOnWords[enableSubt];
		initMenuOfSubtitleStatus(enableSubt);
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "subtitleLanguage1")
	{
		$("thdListFocus").src=mainFocus[0];
		subtLang1Pos = form_position_h + offset;
		setting.firstSubtitleLanguage = subtLangIndex[subtLang1Pos];
		$('subtLang1Status').innerHTML = languagesWords[subtLang1Pos];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "subtitleLanguage2")
	{
		$("thdListFocus").src=mainFocus[0];
		subtLang2Pos = form_position_h + offset;
		setting.secondSubtitleLanguage = subtLangIndex[subtLang2Pos];
		//channel.testLog("subtLang2Pos = " + subtLang2Pos);
		$('subtLang2Status').innerHTML = languagesWords[subtLang2Pos];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "subtitleType")
	{
		$("thdListFocus").src=mainFocus[0];
		subtType = form_position_h;
		setting.subtitleType = subtType;
		$('subtTypeStatus').innerHTML = subtTypeWords[subtType];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "subtitleLanguage1" || focusOn == "subtitleLanguage2" || focusOn == "subtitle" || focusOn == "subtitleType")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
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

/*
描述：初始化subtitle enable 列表
参数：
返回值：
全局变量：
*/
function initSubt()
{
	form_position_h = enableSubt;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}


/*
描述： 初始化在语言列表
参数：position：语言在索引数组中的下标；
全局变量：form_position_h；offset;
*/
function initLanguages(position)
{
	if(position >= 5)
	{
		form_position_h = 4;
		offset = position - form_position_h;
	}
	else
	{
		form_position_h = position;
		offset = 0;
	}/*
	for(i = 0; i < 5; i++)
	{
		listFormLiList[i].innerHTML = languagesWords[i + offset];
	}*/
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,languagesWords,sumSubtLang,form_position_h,offset);
}

/*
描述：在语言列表出来的时候按Down键刷新焦点的效果
参数：sumLang：允许的语言总数量；
全局变量：form_position_h；offset;
*/
function toDownInLanguages(sumLang)
{
	if(form_position_h == 4 && (form_position_h + offset) >= (sumLang - 1))
	{
		offset=0;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = languagesWords[i+offset];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sumLang - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = languagesWords[i+offset];
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

/*
描述：在语言列表出来的时候按Up键刷新焦点的效果
参数：sumLang：允许的语言总数量；
全局变量：form_position_h；offset;
*/
function toUpInLanguages(sumLang)
{
	if(form_position_h == 0 && offset == 0)
	{
		offset = sumLang - 5;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = languagesWords[i + offset];
		}
		form_position_h = 4;
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = languagesWords[i + offset];
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
描述：初始化subtitle type 列表
参数：
返回值：
全局变量：
*/
function initSubtType()
{
	form_position_h = subtType;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,subtTypeWords,2,form_position_h,0);
}
/*
描述：获取当前选择的subtitle language 在subtLangIndex中的下标
参数：langIndex:subtitle language的枚举值（在所有语言中的索引值）
返回值：当前选择的subtitle language 在subtLangIndex中的下标
全局变量：
*/
function fixSubtLangFocus(langIndex)
{
    for (var i=0; i< sumSubtLang; i++)
    {
        if (subtLangIndex[i] == langIndex)
        {
            return i;
        }
    }
	return 6;//默认为english
}

/*
*描述：根据subtitle是否可用的状态刷新菜单
*/
function initMenuOfSubtitleStatus(subStatus)
{
	if(subStatus == 0)//subtitle unable
	{
		thdMenuRightLiList[2].style.display = "none";
		thdMenuRightLiList[3].style.display = "none";
		thdMenuRightLiList[4].style.display = "none";
	}
	else
	{
		//channel.testLog("subtitle lang 1 = " + setting.firstSubtitleLanguage);
		subtLang1Pos = fixSubtLangFocus(setting.firstSubtitleLanguage);
		subtLang2Pos = fixSubtLangFocus(setting.secondSubtitleLanguage);
		//channel.testLog("subtLang1Pos = " + subtLang1Pos + ",subtLang2Pos = " + subtLang2Pos);
		$('subtLang1Status').innerHTML = languagesWords[subtLang1Pos];
		$('subtLang2Status').innerHTML = languagesWords[subtLang2Pos];
		
		subtType = setting.subtitleType;
		$("subtTypeStatus").innerHTML = subtTypeWords[subtType];
		thdMenuRightLiList[2].style.display = "block";
		thdMenuRightLiList[3].style.display = "block";
		thdMenuRightLiList[4].style.display = "block";
	}
}

var listFormLiList;
var thdMenuRightLiList;
var listFirstSpans;
function init()
{
	timeoutInit();
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	var thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	for(var i = 0; i < 5; i++)
	{
		thdMenuRightSpanList[i].innerHTML = subtitleTitleWords[i];
	}
	
	enableSubt = setting.enableSubtitle;
	$("subtStatus").innerHTML = offOnWords[enableSubt];
	
	initMenuOfSubtitleStatus(enableSubt);
	
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
	for(var i = 1; i < 5; i++)
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



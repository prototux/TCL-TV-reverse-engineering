/******************** created by chenhua ***********************/
var menuLangTitleWords 			= [top.sysOptions[1],top.sysMenuLangOptions[0],top.sysMenuLangOptions[1],top.sysMenuLangOptions[2]];
var menuLangWords				= top.sysMenuLang;
var sumAudioLanguage			= 36;					//可允许的menu 语言的个数
var audioLangIndex 				= top.audioSttlTtxLang;
var audioLangWords				= new Array(sumAudioLanguage);
for(var i = 0; i < sumAudioLanguage; i++)
{
	audioLangWords[i] = top.all_language[audioLangIndex[i]];
}


var menuLangIndex 				= top.mlmLangIndex;
var sumMenuLanguage				= 27;					//可允许的menu 语言的个数

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,menuLanguage,audioLanguage1,audioLanguage2
var list_position_h				= 0;
var form_position_h				= 0;
var menuLangPos					= 0;					//当前语言在menuLangIndex中的下标
var audioLang1Pos				= 0;					//当前first aduio language语言在audioLangIndex中的下标
var audioLang2Pos				= 0;					//当前second audio language语言在	audioLangIndex中的下标
var offset					= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioLang1Pos - form_position_h

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
		if(list_position_h >= 2)
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "menuLanguage")
	{
		toDownInLanguages(sumMenuLanguage,menuLangIndex);
	}
	else if(focusOn == "audioLanguage1")
	{
		toDownInLanguages(sumAudioLanguage,audioLangIndex);
	}
	else if(focusOn == "audioLanguage2")
	{
		toDownInLanguages(sumAudioLanguage,audioLangIndex);
	}
}
function toUp()
{
	if(focusOn == "menu")
	{			
		if(list_position_h <= 0)
		{
			list_position_h = 2;
		}
		else
		{
			list_position_h--;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "menuLanguage")
	{
		toUpInLanguages(sumMenuLanguage,menuLangIndex);
	}
	else if(focusOn == "audioLanguage1")
	{
		toUpInLanguages(sumAudioLanguage,audioLangIndex);
	}
	else if(focusOn == "audioLanguage2")
	{
		toUpInLanguages(sumAudioLanguage,audioLangIndex);
	}
	
}

/*
 描述：menu language切换获取新的显示数据
*/
function refreshUIWhenLanguageChange()
{
	menuLangTitleWords 			= [top.sysOptions[1],top.sysMenuLangOptions[0],top.sysMenuLangOptions[1],top.sysMenuLangOptions[2]];
 	menuLangWords				= top.sysMenuLang;
	for(var i = 0; i < sumAudioLanguage; i++)
	{
		audioLangWords[i] = top.all_language[audioLangIndex[i]];
	}

	for(var i = 0; i < 4; i++)
	{
		thdMenuRightSpanList[i].innerHTML = menuLangTitleWords[i];
	}
	
	$('menuLangStatus').innerHTML = menuLangWords[menuLangPos];
	$('audioLang1Status').innerHTML = audioLangWords[audioLang1Pos];
	$('audioLang2Status').innerHTML = audioLangWords[audioLang2Pos];
}

/*
描述：在语言列表出来的时候按Down键刷新焦点的效果
参数：sumLang：允许的语言总数量；langIndexList：所有允许的语言的索引值保存在langIndexList数组中
全局变量：form_position_h；offset;
*/
function toDownInLanguages(sumLang,langIndexList)
{
	if(list_position_h == 0)//menu language
	{
		if(form_position_h == 4 && (form_position_h + offset) >= (sumLang - 1))
		{
			offset=0;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = menuLangWords[i+offset];
			}
			form_position_h = 0;
		}
		else if(form_position_h == 4 && (form_position_h + offset) < (sumLang - 1))
		{
			offset++;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = menuLangWords[i+offset];
			}
		}
		else
		{
			form_position_h++;
		}
	}
	else
	{
		if(form_position_h == 4 && (form_position_h + offset) >= (sumLang - 1))
		{
			offset=0;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = audioLangWords[i+offset];
			}
			form_position_h = 0;
		}
		else if(form_position_h == 4 && (form_position_h + offset) < (sumLang - 1))
		{
			offset++;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = audioLangWords[i+offset];
			}
		}
		else
		{
			form_position_h++;
		}
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
参数：sumLang：允许的语言总数量；langIndexList：所有允许的语言的索引值保存在langIndexList数组中
全局变量：form_position_h；offset;
*/
function toUpInLanguages(sumLang,langIndexList)
{
	if(list_position_h == 0)//menu language
	{
		if(form_position_h == 0 && offset == 0)
		{
			offset = sumLang - 5;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = menuLangWords[i + offset];
			}
			form_position_h = 4;
		}
		else if(form_position_h==0 && offset > 0)
		{
			offset--;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = menuLangWords[i + offset];
			}
		}
		else if(form_position_h > 0)
		{
			form_position_h--;
		}
	}
	else
	{
		if(form_position_h == 0 && offset == 0)
		{
			offset = sumLang - 5;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = audioLangWords[i + offset];
			}
			form_position_h = 4;
		}
		else if(form_position_h==0 && offset > 0)
		{
			offset--;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = audioLangWords[i + offset];
			}
		}
		else if(form_position_h > 0)
		{
			form_position_h--;
		}
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
描述： 初始化menu language语言列表
参数：position：语言在索引数组中的下标；
全局变量：form_position_h；offset;
*/
function initMenuLanguage(position)
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
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,menuLangWords,sumMenuLanguage,form_position_h,offset);
}

/*
描述： 初始化在语言列表
参数：position：语言在索引数组中的下标；languageIndexList：所有允许的语言的索引值保存在languageIndexList数组中
全局变量：form_position_h；offset;
*/
function initLanguages(position,languageIndexList)
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
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,audioLangWords,sumAudioLanguage,form_position_h,offset);
}

function doEnter()
{
	if(focusOn == "menu")
	{
		$("thdListFocus").src=mainFocus[1];
		if(list_position_h == 0)
		{
			initMenuLanguage(menuLangPos);
			focusOn = "menuLanguage";
		}
		else if(list_position_h == 1)
		{
			initLanguages(audioLang1Pos,audioLangIndex);
			focusOn = "audioLanguage1";
		}
		else if(list_position_h == 2)
		{
			initLanguages(audioLang2Pos,audioLangIndex);
			focusOn = "audioLanguage2";
		}
	}
	else if(focusOn == "menuLanguage")
	{
		
		
		
		menuLangPos = form_position_h + offset;
		top.g_language = menuLangIndex[menuLangPos];
		top.doChangeMultilanguage(top.g_language);		
		setTimeout(function(){
			refreshUIWhenLanguageChange();
			parent.$("homeMenu").contentWindow.refreshUIWhenLanguageChange();
			parent.$("subMenu1").contentWindow.refreshUIWhenLanguageChange();
			//channel.testLog("in enter top.g_language = " + top.g_language);
			setting.menuLanguage = top.g_language;
			//channel.testLog("in enter setting.menuLanguage = " + setting.menuLanguage);
			$("thdListFocus").src=mainFocus[0];
			$("listForm").style.display = "none";
			focusOn = "menu";
			offset = 0;
		},100);
		/*
		window.location.reload();
		top.g_nextHtmlPage = "menuLanguage.html";
		top.$("main").src = "index.html";
		//parent.jumpPage(2,"systemSetting/menuLanguage.html");
		/*$('menuLangStatus').innerHTML = menuLangWords[menuLangPos];
		$("listForm").style.display = "none";
		focusOn = "menu";
		*/
	}
	else if(focusOn == "audioLanguage1")
	{
		$("thdListFocus").src=mainFocus[0];
		audioLang1Pos = form_position_h + offset;
		setting.firstAudioLanguage = audioLangIndex[audioLang1Pos];
		$('audioLang1Status').innerHTML = audioLangWords[audioLang1Pos];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "audioLanguage2")
	{
		$("thdListFocus").src=mainFocus[0];
		audioLang2Pos = form_position_h + offset;
		setting.secondAudioLanguage = audioLangIndex[audioLang2Pos];
		$('audioLang2Status').innerHTML = audioLangWords[audioLang2Pos];
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
	else if(focusOn == "menuLanguage" || focusOn == "audioLanguage1" || focusOn == "audioLanguage2")
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
描述：获取当前选择的menu language 在menuLangIndex中的下标
参数：langIndex:menu language的枚举值（在所有语言中的索引值）
返回值：当前选择的menu language 在menuLangIndex中的下标
全局变量：
*/
function fixMenuLangFocus(langIndex)
{
    for (var i = 0; i < menuLangIndex.length; i++)
    {
        if (menuLangIndex[i] == langIndex)
        {
            return i;
        }
    }
	return 6;//默认为english
}

/*
描述：获取当前选择的audio language 在audioLangIndex中的下标
参数：langIndex:menu language的枚举值（在所有语言中的索引值）
返回值：当前选择的audio language 在audioLangIndex中的下标
全局变量：
*/
function fixOtherLangFocus(langIndex)
{
    for (var i=0; i<audioLangIndex.length; i++)
    {
        if (audioLangIndex[i] == langIndex)
        {
            return i;
        }
    }
	return 6;//默认为english
}

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
function init()
{
	timeoutInit();
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	for(var i = 0; i < 4; i++)
	{
		thdMenuRightSpanList[i].innerHTML = menuLangTitleWords[i];
	}
	var menu0 = setting.menuLanguage;
	//channel.testLog("in init menu0 = " + menu0);
	menuLangPos = fixMenuLangFocus(menu0);
	var audio1 = setting.firstAudioLanguage;
	audioLang1Pos = fixOtherLangFocus(audio1);
	
	var audio2 = setting.secondAudioLanguage;
	audioLang2Pos = fixOtherLangFocus(audio2);
	
	$('menuLangStatus').innerHTML = menuLangWords[menuLangPos];
	$('audioLang1Status').innerHTML = audioLangWords[audioLang1Pos];
	$('audioLang2Status').innerHTML = audioLangWords[audioLang2Pos];
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	listFormLiList = $("listForm").getElementsByTagName("li");
	addMouseListener();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 1; i < 4; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}

	//form
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn != "menu")
				{
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




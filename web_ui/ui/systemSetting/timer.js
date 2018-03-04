/******************** created by chenhua ***********************/
var timerTitleWords 			= [top.sysOptions[2], top.sysTimerOptions[0], top.sysTimerOptions[1],
								   top.sysTimerOptions[5], top.sysTimerOptions[2], top.sysTimerOptions[3],
								   top.sysTimerOptions[4]];
var timeZoneWords				= top.sysTimeZone;
var offOnWords					= top.offOn;
var sleepTimerWords				= top.sysSleepTimer;
var standbyWords	 			= top.sysStandby;
var regionNameWords 			= top.sysRegionName;

var timeZone					= 0;
var sumZone						= 35;					//time zone  个数
var offset					= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如time zone中offset = timeZone - form_position_h;在sleep timer 框中offset = sleepTimeValue - form_position_h
var regionName					= 0;
var sleepTimerValue				= 0;
var sleepTimer 					= 0;//睡眠倒计时使用
var sumSleep					= 9;
var standby						= 0;
var remainSleepTime 			= 0;					//离睡眠还有的时间
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,timeZone,regionName,sleepTimer,
var list_position_h				= 0;
var form_position_h				= 0;
var country						= 0;					//22 == spain
var regionFlag					= 0;					//0 no region name ;1 have a region name

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];		

var timerZoneIndex		= -1;
var regionNameIndex		= -1;
var countryRegionIndex	= -1;
var clockIndex			= -1;
var sleepTimerIndex		= -1;
var autoStandbyIndex	= -1;
var skipCRFlag			= false;//skip country region flag
var australiaCRValue = 0;
var CRArray	= ["NSW(ACT)", "VIC", "QLD", "SA", "WA", "TAS", "NT"];


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
		list_position_h = list_position_h < autoStandbyIndex ? list_position_h + 1 : timerZoneIndex;
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "timeZone")
	{
		toDownInListForm(sumZone,timeZoneWords);
	}
	else if(focusOn == "regionName")
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
	else if(focusOn == "countryRegion")
	{
		toDownInListForm(CRArray.length, CRArray);
	}
	else if(focusOn == "sleepTimer")
	{
		toDownInListForm(sumSleep,sleepTimerWords);
	}
	else if(focusOn == "standby")
	{
		if(form_position_h >= 3)
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
}

function toUp()
{
	if(focusOn == "menu")
	{
		list_position_h = list_position_h > timerZoneIndex ? list_position_h - 1 : autoStandbyIndex;
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "timeZone")
	{
		toUpInListForm(sumZone,timeZoneWords);
	}
	else if(focusOn == "regionName")
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
	else if(focusOn == "countryRegion")
	{
		toUpInListForm(CRArray.length, CRArray);
	}
	else if(focusOn == "sleepTimer")
	{
		toUpInListForm(sumSleep,sleepTimerWords);
	}
	else if(focusOn == "standby")
	{
		if(form_position_h <= 0)
		{
			form_position_h = 3;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		switch(list_position_h)
		{
			case timerZoneIndex:	
				$("thdListFocus").src = mainFocus[1];
				initTimeZone(timeZone);
				focusOn = "timeZone";
				break;
			case regionNameIndex:
				$("thdListFocus").src = mainFocus[1];
				initRegionName(regionName);
				focusOn = "regionName";
				break;
			case countryRegionIndex:
				$("thdListFocus").src = mainFocus[1];
				initCRlist(australiaCRValue);
				focusOn = "countryRegion";
				break;
			case clockIndex:
				parent.jumpPage(3,"systemSetting/clock.html");
				break;
			case sleepTimerIndex:
				$("thdListFocus").src = mainFocus[1];
				initSleepTimer(sleepTimerValue);
				focusOn = "sleepTimer";
				break;
			case autoStandbyIndex:
				$("thdListFocus").src = mainFocus[1];
				initStandby(standby);
				focusOn = "standby";
				break;
			default:	
				break;
		}
	}
	else if(focusOn == "timeZone")
	{
		$("thdListFocus").src=mainFocus[0];
		timeZone = form_position_h + offset;
		setting.timeZone = timeZone;
		$("timeZoneStatus").innerHTML = timeZoneWords[timeZone];
		$("listForm").style.display = "none";
		focusOn = "menu";
		showUiList();
	}
	else if(focusOn == "regionName")
	{
		$("thdListFocus").src=mainFocus[0];
		regionName = form_position_h;
		setting.regionName = regionName;
		$("regionStatus").innerHTML = regionNameWords[regionName];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "countryRegion")
	{
		$("thdListFocus").src = mainFocus[0];
		australiaCRValue = form_position_h + offset;
		setting.australiaCR = australiaCRValue;
		$("countryRegion").innerHTML = CRArray[australiaCRValue];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "sleepTimer")
	{
		$("thdListFocus").src=mainFocus[0];
		sleepTimerValue = form_position_h + offset;
		setting.sleepTimer = sleepTimerValue;
		if(sleepTimerValue == 0)
		{
			$("sleepTimerStatus").innerHTML = sleepTimerWords[0];
		}
		else
		{
			remainSleepTime = setting.getSleepTime();
			$("sleepTimerStatus").innerHTML = doTime(remainSleepTime);
			if(sleepTimer!=0)
			{
				clearInterval(sleepTimer);
			}
			sleepTimer = setInterval("refreshSleepTime()",1000);
		}
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "standby")
	{
		$("thdListFocus").src=mainFocus[0];
		standby = form_position_h;
		setting.autoStandby = standby;
		$("standbyStatus").innerHTML = standbyWords[standby];
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
	else if(focusOn == "timeZone" || focusOn == "regionName" || focusOn == "countryRegion" 
		|| focusOn == "sleepTimer" || focusOn == "standby")
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

/*
描述：初始化time zone
参数：zone：time zone 的枚举
全局变量：form_position_h;offset;list_position_h;timeZoneWords
*/
function initTimeZone(zone)
{
	if(zone >= 5)
	{
		form_position_h = 4;
		offset = zone - form_position_h;
	}
	else
	{
		offset = 0;
		form_position_h = zone;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,timeZoneWords,35,form_position_h,offset);
}

/*
描述：初始化
参数：region:regionName enum
全局变量：form_position_h;list_position_h;
*/
function initRegionName(region)
{
	form_position_h = region;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,regionNameWords,2,form_position_h,0);
}

function initCRlist(index)
{
	if(index >= 5)
	{
		form_position_h = 4;
		offset = index - form_position_h;
	}
	else
	{
		offset = 0;
		form_position_h = index;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, CRArray, CRArray.length, form_position_h, offset);
}

/*
描述：初始化
参数：sleepT:sleepTimerValue enum
全局变量：form_position_h;offset;list_position_h;sleepTimerWords
*/
function initSleepTimer(sleepT)
{
	if(sleepTimer > 0)
	{
		clearInterval(sleepTimer);
		sleepTimer = 0;
	}
	
	if(sleepT >= 5)
	{
		form_position_h = 4;
		offset = sleepT - form_position_h;
	}
	else
	{
		offset = 0;
		form_position_h = sleepT;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,sleepTimerWords,9,form_position_h,offset);
}

/*
描述：初始化
参数：stand:standby enum
全局变量：form_position_h;list_position_h;standbyWords
*/
function initStandby(stand)
{
	form_position_h = stand;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,standbyWords,4,form_position_h,0);
}

/*
描述：在弹出列表出来的时候按Down键刷新焦点的效果
参数：sum：允许enum总数量；wordsList：所有允许的enmu的文字描述保存在该数组中
全局变量：form_position_h；offset;
*/
function toDownInListForm(sum,wordsList)
{
	if(form_position_h == 4 && (form_position_h + offset) >= (sum - 1))
	{
		offset = 0;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i+offset];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sum - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i+offset];
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
	
	if((offset + 4) >= (sum - 1))
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
参数：sum：允许的enum总数量；wordsList：所有允许的enmu的文字描述保存在该数组中
全局变量：form_position_h；offset;
*/
function toUpInListForm(sum,wordsList)
{
	if(form_position_h == 0 && offset == 0)
	{
		offset = sum - 5;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i + offset];
		}
		form_position_h = 4;
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i + offset];
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
	
	if((offset + 4) >= (sum - 1))
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
描述：切分时间，将以秒为单位的时间切分出时，分，秒的字符串
参数：time：时间，以毫秒为单位
返回值：形如hh:mm:ss时间显示的字符串
*/
function doTime(time)
{
	var hour = parseInt(time/3600,10);
	var minute =  parseInt((time - hour*3600)/60,10);
	var second = time%60;
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	if(second < 10)
	{
		second = "0" + second;
	}
	return (hour + ":" + minute + ":" + second);
}

/*
描述：刷新sleep time的倒计时
参数：
返回值：
全局变量：remainSleepTime
*/
function refreshSleepTime()
{
	remainSleepTime--;
	$("sleepTimerStatus").innerHTML = doTime(remainSleepTime);
}

/*
描述：因为国家为spain的时候回比其他时候多处一个region name的选项，需要重新调整整个Ui list的布局,
	  add "country region" for AU products
参数：
全局变量：timeZone;country;regionFlag;thdMenuRightLiList;
*/
function showUiList()
{
	timerZoneIndex		= 0;
	regionNameIndex		= -1;
	countryRegionIndex	= -1;	
	
	if(timeZone == 0 && country == 22)//country:22为spain
	{
		regionNameIndex	= 1;
		regionFlag = 1;
		thdMenuRightLiList[2].style.display = "block";
		clockIndex = regionNameIndex + 1;
		sleepTimerIndex = clockIndex + 1;
		autoStandbyIndex = sleepTimerIndex + 1;
	}
	else if(timeZone == 0 && country == 0)//add for AU[0]
	{
		australiaCRValue = setting.australiaCR;
		console.log("the australiaCRValue = " + australiaCRValue);
		$("countryRegion").innerHTML = CRArray[australiaCRValue];

		countryRegionIndex = 1;
		regionFlag = 0;
		thdMenuRightLiList[2].style.display = "none";
		thdMenuRightLiList[3].style.display = "block";
		clockIndex = countryRegionIndex + 1;
		sleepTimerIndex = clockIndex + 1;
		autoStandbyIndex = sleepTimerIndex + 1;
	}
	else
	{
		regionFlag = 0;
		thdMenuRightLiList[2].style.display = "none";
		thdMenuRightLiList[3].style.display = "none";
		clockIndex = timerZoneIndex + 1;
		sleepTimerIndex = clockIndex + 1;
		autoStandbyIndex = sleepTimerIndex + 1;
	}
}

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
function init()
{
	timeoutInit();
	listFormLiList = $("listForm").getElementsByTagName("li");
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	country	= channel.systemCountry
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	for(var i = 0; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = timerTitleWords[i];
	}
	
	timeZone = setting.timeZone;
	$("timeZoneStatus").innerHTML = timeZoneWords[timeZone];
	
	regionName = setting.regionName;
	$("regionStatus").innerHTML = regionNameWords[regionName];
				
	sleepTimerValue = setting.sleepTimer;
	if(sleepTimerValue == 0)
	{
		$("sleepTimerStatus").innerHTML = sleepTimerWords[0];
	}
	else
	{
		remainSleepTime = setting.getSleepTime();
		$("sleepTimerStatus").innerHTML = doTime(remainSleepTime);
		if(sleepTimer!=0)
		{
			clearInterval(sleepTimer);
		}
		sleepTimer = setInterval("refreshSleepTime()",1000);
	}
	
	standby = setting.autoStandby;
	$("standbyStatus").innerHTML = standbyWords[standby];
	
	showUiList();
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	addMouseListener();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 1; i < 6; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					if(regionFlag == 1)
					{
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					else
					{
						if(parseInt(this.getAttribute("newAttr")) == 1)
						{
							list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
						}
						else
						{
							list_position_h = parseInt(this.getAttribute("newAttr")) - 2;
						}
					}
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



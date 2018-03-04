/******************** created by chenhua ***********************/
var inputSettingTitleWords 		= [top.sysOptions[4],top.sourceOptions[1],top.sourceOptions[2],top.sourceOptions[3],top.sourceOptions[4],
									top.sourceOptions[5],top.sourceOptions[6]];
var inputSettingEnumWords		= top.sysInputSet;

var avName						= 0;
var cmpName						= 0;
var hdmi4Name						= 0;
var hdmi1Name					= 0;
var hdmi2Name					= 0;
var hdmi3Name					= 0;
var offset						= 0;					//offset = ratingPosition - form_position_h;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,avName,cmpName,hdmi4Name,hdmi1Name,hdmi2Name,hdmi3Name
var list_position_h				= 0;
var form_position_h				= 0;

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 400;					//进度条的总宽度
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
		case top.VK_0:
		case top.VK_1:
		case top.VK_2:
		case top.VK_3:
		case top.VK_4:
		case top.VK_5:
		case top.VK_6:
		case top.VK_7:
		case top.VK_8:
		case top.VK_9:
			if(focusOn == "changePassword")
			{
				doCheck(evt.which - 48);
				ret = false;
			}
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
		if(list_position_h >= 5)
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else
	{
		toDownInListForm(inputSettingEnumWords.length,inputSettingEnumWords);
	}
}

function toUp()
{
	if(focusOn == "menu")
	{
		if(list_position_h <= 0)
		{
			list_position_h = 5;
		}
		else
		{
			list_position_h--;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else
	{
		toUpInListForm(inputSettingEnumWords.length,inputSettingEnumWords);
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		$("thdListFocus").src=mainFocus[1];
		switch(list_position_h)
		{
			case 0:
				initMoreThanFiveLists(avName,inputSettingEnumWords);
				focusOn = "avName";
				break;
			case 1:
				initMoreThanFiveLists(cmpName,inputSettingEnumWords);
				focusOn = "cmpName";
				break;
			case 2:
				initMoreThanFiveLists(hdmi1Name,inputSettingEnumWords);
				focusOn = "hdmi1Name";
				break;
			case 3:
				initMoreThanFiveLists(hdmi2Name,inputSettingEnumWords);
				focusOn = "hdmi2Name";
				break;
			case 4:
				initMoreThanFiveLists(hdmi3Name,inputSettingEnumWords);
				focusOn = "hdmi3Name";
				break;
			case 5:
				initMoreThanFiveLists(hdmi4Name,inputSettingEnumWords);
				focusOn = "hdmi4Name";
				break;
			default:	
				break;
		}
	}
	else if(focusOn == "avName")
	{
		$("thdListFocus").src=mainFocus[0];
		avName = form_position_h + offset;
		channel.setInputSourceDeviceName(11/*av*/,avName);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[avName];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "cmpName")
	{
		$("thdListFocus").src=mainFocus[0];
		cmpName = form_position_h + offset;
		channel.setInputSourceDeviceName(4/*ypbpr*/,cmpName);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[cmpName];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hdmi4Name")
	{
		$("thdListFocus").src=mainFocus[0];
		hdmi4Name = form_position_h + offset;
		channel.setInputSourceDeviceName(12/*pc*/,hdmi4Name);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[hdmi4Name];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hdmi1Name")
	{
		$("thdListFocus").src=mainFocus[0];
		hdmi1Name = form_position_h + offset;
		channel.setInputSourceDeviceName(6/*hdmi1*/,hdmi1Name);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[hdmi1Name];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hdmi2Name")
	{
		$("thdListFocus").src=mainFocus[0];
		hdmi2Name = form_position_h + offset;
		channel.setInputSourceDeviceName(7/*hdmi2*/,hdmi2Name);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[hdmi2Name];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hdmi3Name")
	{
		$("thdListFocus").src=mainFocus[0];
		hdmi3Name = form_position_h + offset;
		channel.setInputSourceDeviceName(8/*hdmi3*/,hdmi3Name);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[hdmi3Name];
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

/*
描述：初始化多于5个选项的列表
参数：value：enum,wordsList:枚举对应的文字显示数组
全局变量：form_position_h;offset;list_position_h;
*/
function initMoreThanFiveLists(value,wordsList)
{
	if(value >= 5)
	{
		form_position_h = 4;
		offset = value - form_position_h;
	}
	else
	{
		offset = 0;
		form_position_h = value;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,wordsList,14,form_position_h,offset);
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
描述：在列表出来的时候按Up键刷新焦点的效果
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

var thdMenuRightSpanList;
var thdMenuRightDivList;
var thdMenuRightLiList;
var listFormLiList;
function init()
{
	timeoutInit();
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	for(var i = 0; i < 7; i++)
	{
		thdMenuRightSpanList[i].innerHTML = inputSettingTitleWords[i];
	}
	
	
	
	avName = channel.inputSourceDeviceName(11/*av*/);
	cmpName = channel.inputSourceDeviceName(4/*ypbpr*/);
	hdmi1Name = channel.inputSourceDeviceName(6/*hdmi1*/);
	hdmi2Name = channel.inputSourceDeviceName(7/*hdmi2*/);
	hdmi3Name = channel.inputSourceDeviceName(8/*hdmi3*/);
	hdmi4Name = channel.inputSourceDeviceName(12/*pc*/);
	channel.testLog("after inputSourceDeviceName " + avName + " " + cmpName + " " + hdmi1Name + " " + hdmi2Name + " " + hdmi3Name + " " + hdmi4Name);
	
	thdMenuRightDivList = $("thdMenuRight").getElementsByTagName("div");
	thdMenuRightDivList[0].innerHTML = inputSettingEnumWords[avName];
	thdMenuRightDivList[1].innerHTML = inputSettingEnumWords[cmpName];
	thdMenuRightDivList[2].innerHTML = inputSettingEnumWords[hdmi1Name];
	thdMenuRightDivList[3].innerHTML = inputSettingEnumWords[hdmi2Name];
	thdMenuRightDivList[4].innerHTML = inputSettingEnumWords[hdmi3Name];
	thdMenuRightDivList[5].innerHTML = inputSettingEnumWords[hdmi4Name];
	
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
	
	//menu
	for(var i = 1; i < 7; i++)
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
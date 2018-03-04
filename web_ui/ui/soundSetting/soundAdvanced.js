/******************** created by chenhua ***********************/
// 0:Advance setting, balance, audio language, audio type, audiodescription, 5:speaker, speaker vol, hp , he vol, bt, 10:bt vol
var soundSetTitleWords 		= [top.picOptions[15], top.souOptions[1], top.souOptions[8], top.souOptions[9], top.souOptions[10], top.audioDescriptionName[1],
							   top.audioDescriptionName[2], top.audioDescriptionName[3],  top.audioDescriptionName[4], top.audioDescriptionName[6], top.audioDescriptionName[7]];
var soundTypeWords 			= top.souSoundType;
var none					= top.all_language[50]; //none
var offOnWords				= top.offOn;
//var soundPgreTitleWords 	= [top.souOptions[1],top.souOptions[2]];

var setting 				= top.g_setting;
var channel			 		= top.g_channel;
var bluetooth  		 		= top.bluetooth;//add yums
var inputSource 			= 0;//channel.inputSource;
var speakerVolume			= 20;
var headphoneVolume			= 20;
var btDeviceVolume			= 20;
var speakerStatus			= 1;
var headphoneStatus			= 1;
var btDeviceStatus			= 1;
var listMaxNum				= soundSetTitleWords.length - 1;
var list_position_h 		= 0;					//主界面坐标
var form_position_h			= 0;					//弹出框焦点位置
var soundBalance			= 0;
var audioDelay				= 0;
var audioModeIndex 			= 0;					//默认为audio language为None
var soundTypeInfo;									//保存sound type的信息
var soundTypeItems;									//保存sound type的soundTypeItems数组字符串
var soundTypeLength 		= 0;
var focusOn					= "menu";				//menu,audioMode;soundType;progressBar
var OUT_PUT_NAME_FOR_DB = top.OUT_PUT_NAME_FOR_DB; 


var offset				= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioModeIndex - form_position_h

var SUB_MENU_START 			= 130;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;					//二级级主菜单焦点移动的step
var FORM_STEP				= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH			= 300;
var EXTRA_PROGRESS_WIDTH	= 900;					// 弹出式进度条的宽度	
var mainFocus               = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];		
document.onnotify = notifyProcess;

var menuList = [
    {name:soundSetTitleWords[1],func:function(){showBalance();},showFlag:1},
    {name:soundSetTitleWords[2],func:function(){showAudioLang();},showFlag:1},
	{name:soundSetTitleWords[3],func:function(){showAudioType();},showFlag:1},
	{name:soundSetTitleWords[4],func:function(){showAudioDescription();},showFlag:1},
    {name:soundSetTitleWords[5],func:function(){showSpeakerStatus();},showFlag:1},
    {name:soundSetTitleWords[6],func:function(){showSpeakerVolume();},showFlag:1},
    {name:soundSetTitleWords[7],func:function(){showHeadphoneStatus();},showFlag:1},
	{name:soundSetTitleWords[8],func:function(){showHeadphoneVolume();},showFlag:1},
    {name:soundSetTitleWords[9],func:function(){showBTDeviceStatus();},showFlag:1},
	{name:soundSetTitleWords[10],func:function(){showBTDeviceVolume();},showFlag:1}
]
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
		case top.E_HP_PLUGIN:
		case top.E_HP_PLUGOUT:
			top.jumpPage();
			break;
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
		case top.VK_MENU:
			top.jumpPage();
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
		list_position_h = findNextPosition(list_position_h,0);
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "audioMode")
	{
		if(audioModeCount > 5)
		{
			if(form_position_h == 4 && (form_position_h + offset) >= (audioModeCount - 1))
			{
				offset=0;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = langShows[i+offset];
				}
				form_position_h = 0;
			}
			else if(form_position_h == 4 && (form_position_h + offset) < (audioModeCount - 1))
			{
				offset++;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = langShows[i+offset];
				}
			}
			else
			{
				form_position_h++;
			}
		}
		else
		{
			if(form_position_h >= (audioModeCount - 1))
			{
				form_position_h = 0;
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
		
		if((offset + 4) >= (audioModeCount - 1))
		{
			$("listDownImg").style.display = "none";
		}
		else
		{
			$("listDownImg").style.display = "block";
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "soundType")
	{
		if(form_position_h == (soundTypeLength - 1)) 
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
	else if(focusOn == "speakerStatus" || focusOn == "headphoneStatus" || focusOn == "btDeviceStatus")
	{

		if(form_position_h == offOnWords.length - 1)
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	/*
	else if(focusOn == "progressBar")
	{
		if(progressNumber >= (SAME_FUNCTION_OPTION_SUM - 1))
		{
			progressNumber = 0;
		}
		else
		{
			progressNumber++;
		}
		refreshProgressBar(progressNumber);
	}
	*/
}
function toUp()
{
	if(focusOn == "menu")
	{
		list_position_h = findNextPosition(list_position_h,1);
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "audioMode")
	{
		if(audioModeCount > 5)
		{
			if(form_position_h == 0 && offset == 0)
			{
				offset = audioModeCount - 5;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = langShows[i + offset];
				}
				form_position_h = 4;
			}
			else if(form_position_h==0 && offset > 0)
			{
				offset--;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = langShows[i + offset];
				}
			}
			else if(form_position_h > 0)
			{
				form_position_h--;
			}
		}
		else
		{
			if(form_position_h == 0)
			{
				form_position_h = audioModeCount - 1;
			}
			else
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
		
		if((offset + 4) >= (audioModeCount - 1))
		{
			$("listDownImg").style.display = "none";
		}
		else
		{
			$("listDownImg").style.display = "block";
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "soundType")
	{
		if(form_position_h == 0) 
		{
			form_position_h = soundTypeLength - 1;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "speakerStatus" || focusOn == "headphoneStatus" || focusOn == "btDeviceStatus")
	{
		if(form_position_h == 0) 
		{
			form_position_h = offOnWords.length - 1;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	/*else if(focusOn == "progressBar")
	{
		if(progressNumber <= 0)
		{
			progressNumber = SAME_FUNCTION_OPTION_SUM - 1;
		}
		else
		{
			progressNumber--;
		}
		refreshProgressBar(progressNumber);
	}*/
}
function doEnter()
{
	if(focusOn == "menu")
	{
		findFunction(list_position_h);
	}
	else if(focusOn == "audioMode")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		audioModeIndex = form_position_h + offset;
		$("audioLanguage").innerHTML = langShows[audioModeIndex];
		currentChannel.setProgramAudioMode(audioModeIndex);
		offset = 0;
		focusOn = "menu";
	}
	else if(focusOn == "soundType")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		setting.setSoundType(soundTypeInfo.mode,form_position_h);
		$("soundTypeStatus").innerHTML = soundTypeWords[parseInt(soundTypeItems[form_position_h],10)];
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "speakerStatus")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		speakerStatus = form_position_h;
		setting.speakerStatus = speakerStatus;
		prepareMenuShow();
		refreshMenuShow();
		$("speakerStatus").innerHTML = offOnWords[form_position_h];
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "headphoneStatus")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		headphoneStatus = form_position_h;
		setting.headphoneStatus = headphoneStatus;
		prepareMenuShow();
		refreshMenuShow();
		$("headphoneStatus").innerHTML = offOnWords[form_position_h];
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "btDeviceStatus")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		btDeviceStatus = form_position_h;
		var btDeviceStatusStr = btDeviceStatus.toString();
		setting.setProperty(OUT_PUT_NAME_FOR_DB,btDeviceStatusStr);	
		if(btDeviceStatus == 0)
		{
			bluetooth.setBluetoothMute(1);
			top.bt_soundOutPutValue = 0;
		}
		else
		{
			bluetooth.setBluetoothMute(0);
			top.bt_soundOutPutValue = 1;
		}
		prepareMenuShow();
		refreshMenuShow();
		$("btDeviceStatus").innerHTML = offOnWords[form_position_h];
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
	else if(focusOn == "soundBalance" || focusOn == "speakerVolume" || focusOn == "headphoneVolume"  || focusOn == "btDeviceVolume" )
	{
		top.timeoutFuc.timeoutTimes = 30;
		refreshMenuShow();
		$("adjustProgressBox").style.display="none";
		parent.showPage(2);
		focusOn = "menu";
	}
	else
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
}
function toLeft()
{
	if(focusOn == "soundBalance")
	{
		if(soundBalance + 50 > 0)
			soundBalance -= 1;
		$("adjustProgValue").innerHTML = soundBalance;
		setting.soundBalance = soundBalance;
		progressDivList[0].style.width = parseInt((soundBalance + 50)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - (soundBalance + 50))*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else if(focusOn == "speakerVolume")
	{
		if(speakerVolume > 0)
		{
			speakerVolume -= 1;
		}
		$("adjustProgValue").innerHTML = speakerVolume;
		top.g_channel.volume = speakerVolume;
		progressDivList[0].style.width = parseInt(speakerVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - speakerVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
			
	}
	else if(focusOn == "headphoneVolume")
	{
		if(headphoneVolume > 0)
		{
			headphoneVolume -= 1;
		}
		$("adjustProgValue").innerHTML = headphoneVolume;
		setting.headphoneVolume = headphoneVolume;
		progressDivList[0].style.width = parseInt(headphoneVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - headphoneVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else if(focusOn == "btDeviceVolume")
	{
		if(btDeviceVolume > 0)
		{
			btDeviceVolume -= 1;
		}
		$("adjustProgValue").innerHTML = btDeviceVolume;
		bluetooth.setBluetoothVolume(btDeviceVolume);
		progressDivList[0].style.width = parseInt(btDeviceVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - btDeviceVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "soundBalance")
	{
		if(soundBalance + 50 < 100)
			soundBalance += 1;
		$("adjustProgValue").innerHTML = soundBalance;
		setting.soundBalance = soundBalance;
		progressDivList[0].style.width = parseInt((soundBalance + 50)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - (soundBalance + 50))*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else if(focusOn == "speakerVolume")
	{
		if(speakerVolume < 100)
		{
			speakerVolume += 1;
		}
		$("adjustProgValue").innerHTML = speakerVolume;
		top.g_channel.volume = speakerVolume;
		progressDivList[0].style.width = parseInt(speakerVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - speakerVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
			
	}
	else if(focusOn == "headphoneVolume")
	{
		if(headphoneVolume < 100)
		{
			headphoneVolume += 1;
		}
		$("adjustProgValue").innerHTML = headphoneVolume;
		setting.headphoneVolume = headphoneVolume;
		progressDivList[0].style.width = parseInt(headphoneVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - headphoneVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else if(focusOn == "btDeviceVolume")
	{
		if(btDeviceVolume < 100)
		{
			btDeviceVolume += 1;
		}
		$("adjustProgValue").innerHTML = btDeviceVolume;
		bluetooth.setBluetoothVolume(btDeviceVolume);
		progressDivList[0].style.width = parseInt(btDeviceVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - btDeviceVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else
	{
		doEnter();
	}
}
function findNextPosition(curPosition,dir) //dir: 0:next, 1:previous
{
	var nextPosition = 0;
	if(dir == 0)
	{
		if(curPosition >= listMaxNum - 1)
		{
			nextPosition = 0;
		}
		else
		{
			nextPosition = curPosition + 1;
		}
	}
	else
	{
		if(curPosition <= 0)
		{
			nextPosition = listMaxNum - 1;
		}
		else
		{
			nextPosition = curPosition - 1;
		}
	}
	return nextPosition;
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
function initProgressBar(name)
{
	top.timeoutFuc.timeoutTimes = 10;
    parent.hiddenPage(2);
	var tmpvolume = 0;
	switch(name)
	{
		case "soundBalance":
			tmpvolume = soundBalance + 50;
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[1];
			break;
		case "speakerVolume":
			tmpvolume = speakerVolume;
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[5];
			break;
		case "headphoneVolume":
			tmpvolume = headphoneVolume;
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[7];
			break;
		case "btDeviceVolume":
			tmpvolume = btDeviceVolume;
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[9];
			break;
		default:
	}
    progressDivList[0].style.width = parseInt(tmpvolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
    progressDivList[2].style.width = parseInt((100 - tmpvolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	if(name == "soundBalance")
	{
		$("adjustProgValue").innerHTML = soundBalance;
		progressDivList[0].style.background = "#383838";
	}
	else
	{
   		$("adjustProgValue").innerHTML = tmpvolume;
		progressDivList[0].style.background = "#00aadd";
	}
    $("adjustProgressBox").style.display="block";
}
function showBalance()
{
	initProgressBar("soundBalance");
	focusOn = "soundBalance";	
}
function showAudioLang()
{
	initAudioMode();
}
function showAudioType()
{
	if(soundTypeLength <= 0)
	{
		return;
	}
	else
	{
		$("thdListFocus").src=mainFocus[1];
		initSoundType();
		form_position_h = soundTypeInfo.index; 
		
		var soundNameList = new Array(soundTypeLength);
		for(var i = 0; i < soundTypeLength; i++)
		{
			soundNameList[i] = soundTypeWords[parseInt(soundTypeItems[i],10)];
		}
		var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
		var leftOffset = 778;
		top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundNameList,soundTypeLength,form_position_h,0);
		focusOn = "soundType";
	}
}
function showAudioDescription()
{
	 parent.jumpPage(3,"soundSetting/audioDescription.html");
}
function showSpeakerStatus()
{	
	$("thdListFocus").src=mainFocus[1];
	form_position_h = speakerStatus; 

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
	focusOn = "speakerStatus";
}
function showSpeakerVolume()
{
	initProgressBar("speakerVolume");
	focusOn = "speakerVolume";
}
function showHeadphoneStatus()
{
	$("thdListFocus").src=mainFocus[1];
	form_position_h = headphoneStatus; 

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
	focusOn = "headphoneStatus";
}
function showHeadphoneVolume()
{
	initProgressBar("headphoneVolume");
	focusOn = "headphoneVolume";
}
function showBTDeviceStatus()
{
	$("thdListFocus").src=mainFocus[1];
	form_position_h = btDeviceStatus; 

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
	focusOn = "btDeviceStatus";
}
function showBTDeviceVolume()
{
	initProgressBar("btDeviceVolume");
	focusOn = "btDeviceVolume";
}



/*
描述：刷新显示列表
参数：position:焦点在所有可选属性列表中的位置
全局变量：progressSpanList；progressDivList；SAME_FUNCTION_OPTION_SUM
*/
/*function refreshProgressBar(position)
{
	for(var i = 0; i < 1; i++)
	{
		if((position + i) <= (SAME_FUNCTION_OPTION_SUM - 1))
		{
			progressSpanList[i].innerHTML = soundPgreTitleWords[position + i];
		}
		else
		{
			progressSpanList[i].innerHTML =  soundPgreTitleWords[(position + i) - SAME_FUNCTION_OPTION_SUM];
		}
	}
	progressDivList[0].style.width = parseInt(progressList[position]*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	progressDivList[2].style.width = parseInt((100 - progressList[position])*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	if(position == 0)
	{
		$("adjustProgValue").innerHTML = soundBalance;
		progressDivList[0].style.background = "#383838";
	}
	else if(position == 1)
	{
		$("adjustProgValue").innerHTML = audioDelay;
		progressDivList[0].style.background = "#FFFFFF";
	}
}
*/
/*
描述：获取sound type的信息,并初始化相关的变量
参数：
全局变量：soundTypeInfo；soundTypeItems；
*/
function initSoundType()
{
	soundTypeInfo = setting.getSoundType();
	soundTypeItems = soundTypeInfo.items.split("/");
	soundTypeLength = soundTypeInfo.length;
}


var audioModeCount = 0;
function getAudioInfo()
{
	//channel.testLog("in getAudioInfo");
	var audioInfo = currentChannel.programAudioMode();
	audioModeCount = audioInfo.audioSelCount;
	audioModeIndex	= audioInfo.curAudioIdx;
	//channel.testLog("in getAudioInfo language list = " + audioInfo.langCodeList);
	var langs = audioInfo.langCodeList.split("/");
	/**********处理audio mode中的语言问题start************/
	var count = 1;
	var nowIndex = 0;
	var afterIndex = 0;
	var beforeIndex = 0;
	var isExist = 0;
	if(audioModeCount == 0)
	{
		setShowFlagByName("audioLanguage", 0);
		return ;
	}
	for(nowIndex = 0; nowIndex < audioModeCount; nowIndex++)
	{
		for(beforeIndex = 0; beforeIndex < nowIndex; beforeIndex++)//判断先前是否已经对这个数据做过判断
		{
			if(langs[nowIndex] == langs[beforeIndex])
			{
				isExist = 1;
			}
		}
	
		if(isExist)//先前已经做过判断，直接处理下一个数据
		{
			isExist = 0;
			continue;
		}
		else
		{
			for(afterIndex = ( nowIndex + 1); afterIndex < audioModeCount; afterIndex++)//判断后面是否有相同的语言，如果有需要做特殊处理
			{
				if(langs[nowIndex] == langs[afterIndex])
				{
					count++;
					if(count == 2)//对第一次的语言做处理
					{
						langShows[nowIndex] = top.all_language[langs[nowIndex]] + 1;
					}
					langShows[afterIndex] = top.all_language[langs[afterIndex]] + count;
				}
			}
			if(count == 1)
			{
				langShows[nowIndex] = top.all_language[langs[nowIndex]];
			}
			count = 1;
		}
	}
}

function initAudioMode() //初始化info 信息中的audio
{
	if(audioModeIndex >= audioModeCount || audioModeCount <= 0)
	{
		return;
	}
	
	$("thdListFocus").src=mainFocus[1];
	if(audioModeCount > 5)
	{
		if(audioModeIndex >= 5)
		{
			form_position_h = 4;
			offset = audioModeIndex - form_position_h;
		}
		else
		{
			form_position_h = audioModeIndex;
			offset = 0;
		}
	}
	else
	{
		form_position_h = audioModeIndex;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,langShows,audioModeCount,form_position_h,offset);
	focusOn = "audioMode";
}

/*
描述：刷新menu菜单中的进度条
*/
function refreshMenuProgress()
{
	$("soundBalanceValue").innerHTML = soundBalance;
	$("audioDelayValue").innerHTML = audioDelay;
	
	$("soundBalancePgreLeft").style.width = parseInt(progressList[0]*PROGRESS_WIDTH/100,10) + "px";
	$("soundBalancePgreRight").style.width = parseInt((100 - progressList[0])*PROGRESS_WIDTH/100,10) + "px";
	
	$("audioDelayPgreLeft").style.width = parseInt(progressList[1]*PROGRESS_WIDTH/100,10) + "px";
	$("audioDelayPgreRight").style.width = parseInt((100 - progressList[1])*PROGRESS_WIDTH/100,10) + "px";
}
function setShowFlagByName(name, flag)
{
	switch(name)
	{
		case "soundBalance":
			menuList[0].showFlag = flag;
			break;
		case "audioLanguage":
			menuList[1].showFlag = flag;
			break;
		case "audioType":
			menuList[2].showFlag = flag;
			break;
		case "audioDescription":
			menuList[3].showFlag = flag;
			break;
		case "speakerStatus":
			menuList[4].showFlag = flag;
			break;
		case "speakerVolume":
			menuList[5].showFlag = flag;
			break;
		case "headphoneStatus":
			menuList[6].showFlag = flag;
			break;
		case "headphoneVolume":
			menuList[7].showFlag = flag;
			break;
		case "btDeviceStatus":
			menuList[8].showFlag = flag;
			break;
		case "btDeviceVolume":
			menuList[9].showFlag = flag;
			break;
		default:
			channel.testLog("soundAdvanced setting: setShowFlagByName, wrong show flag name, it should not happen!! name = "+ name);
			break;
	}
}
function getShowFlagByName(name)
{
	var flag = 1;
	switch(name)
	{
		case "soundBalance":
			flag = menuList[0].showFlag;
			break;
		case "audioLanguage":
			flag = menuList[1].showFlag;
			break;
		case "audioType":
			flag = menuList[2].showFlag;
			break;
		case "audioDescription":
			flag = menuList[3].showFlag;
			break;
		case "speakerStatus":
			flag = menuList[4].showFlag;
			break;
		case "speakerVolume":
			flag = menuList[5].showFlag;
			break;
		case "headphoneStatus":
			flag = menuList[6].showFlag;
			break;
		case "headphoneVolume":
			flag = menuList[7].showFlag;
			break;
		case "btDeviceStatus":
			flag = menuList[8].showFlag;
			break;
		case "btDeviceVolume":
			flag = menuList[9].showFlag;
			break;
		default:
			channel.testLog("soundAdvanced setting: getShowFlagByName, wrong show flag name, it should not happen!! name = "+name);
			break;
	}
	return flag;
}
function prepareMenuShow()//隐藏处理函数，后续添加配置项设置，可在这个函数里面设置showFlag值
{
	for(var i = 0; i < menuList.length; i++)
	{
		menuList[i].showFlag = 1;
	}
	if(inputSource == 1)   //DTV close audio type
	{
		setShowFlagByName("audioType", 0);
	}
	else if(inputSource == 0 || inputSource == 3 || inputSource == 4)//ATV  close aduio langugae and audio audioDescription
	{
		setShowFlagByName("audioLanguage", 0);
		setShowFlagByName("audioDescription", 0);
	}
	else
	{
		setShowFlagByName("audioLanguage", 0);
		setShowFlagByName("audioType", 0);
		setShowFlagByName("audioDescription", 0);
		//thdMenuRightLiList[5].style.display = "none";//audio description none
	}
	if(0 == speakerStatus)
	{
		setShowFlagByName("speakerVolume", 0);
	}
	if(0 == headphoneStatus)
	{
		setShowFlagByName("headphoneVolume", 0);
	}	
	if(top.bt_soundOutputShowFlag == true)
	{
		if(0 == btDeviceStatus)
		{
			setShowFlagByName("btDeviceVolume", 0);
		}	
	}
	else
	{
		setShowFlagByName("btDeviceStatus", 0);
		setShowFlagByName("btDeviceVolume", 0);
	}
}
function prepareAudioInfo()
{
	if(getShowFlagByName("audioLanguage") == 1)
	{
		getAudioInfo();
	}
	if(getShowFlagByName("audioType") == 1)
	{
		initSoundType();
	}
}
function refreshMenuShow()
{
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 0)
		{
			thdMenuRightLiList[i+1].style.display = "none";
		}
		else
		{
			thdMenuRightLiList[i+1].style.display = "block";
		}
	}
	if(getShowFlagByName("soundBalance") == 1)
	{
		$("soundBalanceValue").innerHTML = soundBalance;	
		$("soundBalanceLeft").style.width = parseInt((soundBalance+50)*PROGRESS_WIDTH/100,10) + "px";
		$("soundBalanceRight").style.width = parseInt((100 - (soundBalance+50))*PROGRESS_WIDTH/100,10) + "px";
	}
	if(getShowFlagByName("audioLanguage") == 1)
	{
		if(audioModeCount > 0)
		{
			$("audioLanguage").innerHTML = langShows[audioModeIndex];
		}
		else
		{
			$("audioLanguage").innerHTML = none;
		}
	}
	if(getShowFlagByName("audioType") == 1)
	{
		$("soundTypeStatus").innerHTML = soundTypeWords[parseInt(soundTypeItems[soundTypeInfo.index],10)];
	}
	//if(getShowFlagByName("audioDescription") == 1)
	//{
		// do nothing		
	//}
	if(getShowFlagByName("speakerStatus") == 1)
	{
		$("speakerStatus").innerHTML = offOnWords[speakerStatus];
	}
	if(getShowFlagByName("speakerVolume") == 1)
	{
		$("speakerVolumeValue").innerHTML = speakerVolume;	
		$("speakerVolumeLeft").style.width = parseInt(speakerVolume*PROGRESS_WIDTH/100,10) + "px";
		$("speakerVolumeRight").style.width = parseInt((100 - speakerVolume)*PROGRESS_WIDTH/100,10) + "px";
	}
	if(getShowFlagByName("headphoneStatus") == 1)
	{
		$("headphoneStatus").innerHTML = offOnWords[headphoneStatus];
	}
	if(getShowFlagByName("headphoneVolume") == 1)
	{
		$("headphoneVolumeValue").innerHTML = headphoneVolume;	
		$("headphoneVolumeLeft").style.width = parseInt((headphoneVolume)*PROGRESS_WIDTH/100,10) + "px";
		$("headphoneVolumeRight").style.width = parseInt((100 - headphoneVolume)*PROGRESS_WIDTH/100,10) + "px";
	}
	if(getShowFlagByName("btDeviceStatus") == 1)
	{
		$("btDeviceStatus").innerHTML = offOnWords[btDeviceStatus];
	}
	if(getShowFlagByName("btDeviceVolume") == 1)
	{
		$("btDeviceVolumeValue").innerHTML = btDeviceVolume;	
		$("btDeviceVolumeLeft").style.width = parseInt(btDeviceVolume*PROGRESS_WIDTH/100,10) + "px";
		$("btDeviceVolumeRight").style.width = parseInt((100 - btDeviceVolume)*PROGRESS_WIDTH/100,10) + "px";
	}
	var listnum = 0;
	for(var i = 0; i < menuList.length; i++) //从第一个开始，去掉AdvanceSetting
	{
		if(menuList[i].showFlag == 1)
		{
			listnum++;
		}

	}
	listMaxNum = listnum;
}
var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
var currentChannel;
var listFirstSpans;
var langShows = new Array(20); //国家显示文字数组
function init()
{
	timeoutInit();
	progressDivList = $("adjustProgBar").getElementsByTagName("div");
	inputSource = channel.inputSource;
	//channel.testLog("inptu = " + inputSource + ",isfirstinsound = " + top.g_sound_settings.isFirstTimeIntoSound);
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	for(var i = 0; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = soundSetTitleWords[i];
	}
	currentChannel = channel.getCurrentChannelInfo();
	soundBalance = setting.soundBalance;
	audioDelay = setting.audioDelay;
	speakerVolume = top.g_channel.volume;
	headphoneVolume = setting.headphoneVolume;
	btDeviceVolume = bluetooth.getBluetoothVolume();
	speakerStatus = setting.speakerStatus;
	headphoneStatus = setting.headphoneStatus;
	if(top.bt_soundOutputShowFlag == true)
	{
		btDeviceStatus =  parseInt(setting.getProperty(OUT_PUT_NAME_FOR_DB,"0"));//获取上一次保存的蓝牙设置界面设置的通导
		if(btDeviceStatus > 1)
			btDeviceStatus = 1;
		if(btDeviceStatus < 0)
			btDeviceStatus = 0;
	}
	prepareMenuShow();
	prepareAudioInfo();
	/*if(inputSource == 1)
	{
		//channel.testLog("in init before getAudioInfo");
		getAudioInfo();
		//channel.testLog("in init after getAudioInfo audioModeIndex = " + audioModeIndex);
		if(audioModeCount > 0)
		{
			$("audioLanguage").innerHTML = langShows[audioModeIndex];
		}
		else
		{
			$("audioLanguage").innerHTML = none;
		}
		thdMenuRightLiList[4].style.display = "none";//sound type none
	}
	else if(inputSource == 0 || inputSource == 3 || inputSource == 4)//sound type able,Visually impaired unable
	{
		initSoundType();
		$("soundTypeStatus").innerHTML = soundTypeWords[parseInt(soundTypeItems[soundTypeInfo.index],10)];
		thdMenuRightLiList[3].style.display = "none";// audio language none
		//thdMenuRightLiList[5].style.display = "none";//audio description none
	}
	else
	{
		thdMenuRightLiList[3].style.display = "none";// audio language none
		thdMenuRightLiList[4].style.display = "none";//sound type none
		//thdMenuRightLiList[5].style.display = "none";//audio description none
	}	
	*/
	refreshMenuShow();
	//把三个有进度条的值转换成0-100的进度保存到progressList中
	/*progressList[0] = soundBalance + 50;
	progressList[1] = parseInt(audioDelay/10,10);
	refreshMenuProgress();

	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	$("thdListFocus").src=mainFocus[0];
	thdMenuRightLiList[2].style.display = "none";//audio description none
	*/
	listFormLiList = $("listForm").getElementsByTagName("li");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
}

function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
}

var PROGRESS_START_LEFT_OFFSET = 270 + 310;//进度条容器开始位置相对于framework的左偏移，480是进度条的父容器的相对framwork的左偏移，310是进度条容器相对于进度条父容器的左偏移
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var i = 1; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu"){
					list_position_h = parseInt(this.getAttribute("newAttr"))-1;
					if(inputSource == 1) //dtv
					{
						if(list_position_h > 2)
							list_position_h--;
					}
					else if(inputSource == 0 || inputSource == 3 || inputSource == 4) //atv
					{
						if(list_position_h == 2 )   //audio type
						{
							list_position_h--;
						}
						if(list_position_h >3) //speaker status之后的
						{
							list_position_h -= 2;
						}
					}
					else  //other
					{
						list_position_h -= 3;
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
				if(focusOn == "audioMode" || focusOn == "soundType"){
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
			if(focusOn == "audioMode")
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
			if(focusOn == "audioMode")
			{
				form_position_h = 4;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toDown();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}

	
	$("adjustProgMain").onmousedown = function(evt){
		top.Log("in onmousedown list adjustProgMain = " + focusOn + ",evt.clientX = " + evt.clientX);
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "progressBar")
			{
				var prog = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*100/EXTRA_PROGRESS_WIDTH,10);
				if(prog < 0)
				{
					prog = 0;
				}
				else if(prog > 100)
				{
					prog = 100;
				}
				progressList[progressNumber] = prog;
				progressDivList[0].style.width = parseInt(progressList[progressNumber]*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				progressDivList[2].style.width = parseInt((100 - progressList[progressNumber])*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				
				if(progressNumber == 0)
				{
					soundBalance = progressList[progressNumber] - 50;
					setting.soundBalance = soundBalance
					$("adjustProgValue").innerHTML = soundBalance;
				}
				else if(progressNumber == 1)
				{
					audioDelay = progressList[progressNumber]*10;
					setting.audioDelay = audioDelay
					$("adjustProgValue").innerHTML = audioDelay;
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}

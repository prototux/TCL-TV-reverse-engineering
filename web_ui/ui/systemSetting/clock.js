/******************** created by chenhua ***********************/
var clockTitleWords 			= [top.sysTimerOptions[2],top.sysClockOptions[0],top.sysClockOptions[1],top.sysClockOptions[2],top.sysClockOptions[3],
									top.sysClockOptions[4],top.sysClockOptions[5],top.sysClockOptions[6],top.sysClockOptions[7]];
var offOnWords					= top.offOn;
var powerTimerWords				= top.sysTimer;

var autoSync					= 0;
var date;
var time;
var date_only					= [0,0,0,0,0,0,0,0];		//保存日期，每一位保存一个个位数字
var time_only					= [0,0,0,0,0,0];			//保存时间，每一位保存一个个位数
var power_on_time_only			= [0,0,0,0,0,0];			//保存时间，每一位保存一个个位数
var power_off_time_only			= [0,0,0,0,0,0];			//保存时间，每一位保存一个个位数

var powerOnStatus				= 0;
var powerOffStatus				= 0;
//var powerOffTime;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,autoSync,powerOn,powerOff
var list_position_h				= 0;
var form_position_h				= 0;
var programStatus 				= 0;					//0 无节目，1 有节目,无频道列表
var num_position				= 0;					//当前焦点在时间存储数组(如date_only/time_only)中的下标位置

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var DATE_LENGTH					= 8;
var TIME_LENGTH					= 6;
var timeLinkChar				= ":";
var dateLinkChar				= "-";
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];

document.onnotify 				= notifyProcess;

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
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt---IPEPG会走此逻辑
			if(top.virtualRemoteState == 0)
			{
				top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
			}
			else
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			break;
		//lqt--虚拟遥控器的上键
		case top.VK_VIRTUAL_KEYBOARD_UP:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForUp();
			
			break;
		}
		//lqt--虚拟遥控器的下键
		case top.VK_VIRTUAL_KEYBOARD_DOWN:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForDown();
			
			break;
		}
		//lqt--虚拟遥控器的左键
		case top.VK_VIRTUAL_KEYBOARD_LEFT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForLeft();
			
			break;
		}
		//lqt--鼠标的左键
		case top.VK_VIRTUAL_MOUSE_OK:
		{
			var clientX = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientX", "0");
			var clientY = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientY", "0");
			console.log("lqt---clock.js---clientX: "+clientX);
			console.log("lqt---clock.js---clientY: "+clientY);
			top.document.getElementById("virtualRemote").contentWindow.keyDownMouseClick(clientX,clientY); 
			
			break;
		}
		//lqt--虚拟遥控器的右键
		case top.VK_VIRTUAL_KEYBOARD_RIGHT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForRight(); 
			
			break;
		}
		//lqt--虚拟遥控器的ok键
		case top.VK_VIRTUAL_KEYBOARD_OK:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForOK(); 
			
			break;
		}
		//lqt--虚拟遥控器的返回键
		case top.VK_VIRTUAL_KEYBOARD_BACK:
		{
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			
			break;
		}
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
		case top.VK_0://0
		case top.VK_1:
		case top.VK_2:
		case top.VK_3:
		case top.VK_4:
		case top.VK_5:
		case top.VK_6:
		case top.VK_7:
		case top.VK_8:
		case top.VK_9://9
				if(list_position_h == 1)
				{
					date_only[num_position] = checkRightDate(num_position,keycode - 48);
					doRightInTimes(dateContentSpanList,date_only,DATE_LENGTH,dateLinkChar);
				}
				else if(list_position_h == 2)
				{
					time_only[num_position] = checkRightTime(num_position,keycode - 48);
					doRightInTimes(timeContentSpanList,time_only,TIME_LENGTH,timeLinkChar);
				}
				else if(list_position_h == 4)
				{
					power_on_time_only[num_position] = checkRightTime(num_position,keycode - 48);
					doRightInTimes(powerOnContentSpanList,power_on_time_only,TIME_LENGTH,timeLinkChar);
				}
				else if(((programStatus == 1 && powerOnStatus > 0) && list_position_h == 7) || ((programStatus == 0 || powerOnStatus == 0) && list_position_h == 6))
				{
					power_off_time_only[num_position] = checkRightTime(num_position,keycode - 48);
					doRightInTimes(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
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
		if(list_position_h == 0)
		{
			if(autoSync == 1)
			{
				list_position_h = list_position_h + 3;
			}
			else
			{
				stopRefreshTime();
				setDateArray();
				timesInitFocusShow(dateContentSpanList,date_only,DATE_LENGTH,dateLinkChar);
				list_position_h++;
			}
		}
		else if(list_position_h == 1)
		{
			stopRefreshTime();
			timesOutOfFocusShow(dateContentSpanList);
			/*---------------最后更正不合法时间 add by chenhua 2014-1-26----------------------*/
			doDateEnter();//做确认日期修改的操作
			dateContentSpanList[0].innerHTML = date;
			dateContentSpanList[1].innerHTML = "";
			dateContentSpanList[2].innerHTML = "";
			/*---------------最后更正不合法时间----------------------*/
			setTimeArray();
			timesInitFocusShow(timeContentSpanList,time_only,TIME_LENGTH,timeLinkChar);
			list_position_h++;
		}
		else if(list_position_h == 2)
		{
			timesOutOfFocusShow(timeContentSpanList);
			time = ""+time_only[0]+time_only[1]+":"+time_only[2]+time_only[3]+":"+time_only[4]+time_only[5];
			setting.currentTime = time;
			list_position_h++;
			refreshTime();
		}
		else if(list_position_h == 3)
		{	
			if(powerOnStatus == 0)
			{
				list_position_h = list_position_h + 2;
			}
			else
			{
				timesInitFocusShow(powerOnContentSpanList,power_on_time_only,TIME_LENGTH,timeLinkChar);
				list_position_h++;
			}
		}
		else if(list_position_h == 4)
		{
			timesOutOfFocusShow(powerOnContentSpanList);
			var powerOnTime = ""+power_on_time_only[0]+power_on_time_only[1]+":"
					+power_on_time_only[2]+power_on_time_only[3]+":"
					+power_on_time_only[4]+power_on_time_only[5];
			setting.powerOnTime = powerOnTime;
			list_position_h++;
		}
		else
		{
			if(programStatus == 0 || powerOnStatus == 0)//没有节目列表或没有打开power on timer
			{
				if(list_position_h >= 6)
				{
					timesOutOfFocusShow(powerOffContentSpanList);
					var powerOffTime = ""+power_off_time_only[0]+power_off_time_only[1]+":"
										+power_off_time_only[2]+power_off_time_only[3]+":"
										+power_off_time_only[4]+power_off_time_only[5];
					setting.powerOffTime = powerOffTime;
					list_position_h = 0;
				}
				else if(list_position_h == 5)
				{	
					if(powerOffStatus == 0)
					{
						list_position_h = 0;
					}
					else
					{
						timesInitFocusShow(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
						list_position_h++;
					}
				}
			}
			else
			{
				if(list_position_h >= 7)
				{
					timesOutOfFocusShow(powerOffContentSpanList);
					var powerOffTime = ""+power_off_time_only[0]+power_off_time_only[1]+":"
										+power_off_time_only[2]+power_off_time_only[3]+":"
										+power_off_time_only[4]+power_off_time_only[5];
					setting.powerOffTime = powerOffTime;
					list_position_h = 0;
				}
				else if(list_position_h == 6)
				{	
					if(powerOffStatus == 0)
					{
						list_position_h = 0;
					}
					else
					{
						timesInitFocusShow(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
						list_position_h++;
					}
				}
				else
				{
					list_position_h++;
				}
			}
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "autoSync")
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
	}
	else if(focusOn == "powerOn" || focusOn == "powerOff")
	{
		if(form_position_h >= 2)
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
}

function toUp()
{
	if(focusOn == "menu")
	{	
		if(list_position_h == 1)
		{
			timesOutOfFocusShow(dateContentSpanList);
			/*---------------最后更正不合法时间 add by chenhua 2014-1-26----------------------*/
			doDateEnter();//做确认日期修改的操作
			dateContentSpanList[0].innerHTML = date;
			dateContentSpanList[1].innerHTML = "";
			dateContentSpanList[2].innerHTML = "";
			/*---------------最后更正不合法时间----------------------*/
			list_position_h--;
			refreshTime();
		}
		else if(list_position_h == 2)
		{
			stopRefreshTime();
			timesOutOfFocusShow(timeContentSpanList);
			time = ""+time_only[0]+time_only[1]+":"+time_only[2]+time_only[3]+":"+time_only[4]+time_only[5];
			setting.currentTime = time;
			setDateArray();
			timesInitFocusShow(dateContentSpanList,date_only,DATE_LENGTH,dateLinkChar);
			list_position_h--;
		}
		else if(list_position_h == 3)
		{
			if(autoSync == 1)
			{
				list_position_h = list_position_h - 3;
			}
			else
			{
				stopRefreshTime();
				setTimeArray();
				timesInitFocusShow(timeContentSpanList,time_only,TIME_LENGTH,timeLinkChar);
				list_position_h--;
			}
		}
		else if(list_position_h == 4)
		{
			timesOutOfFocusShow(powerOnContentSpanList);
			var powerOnTime = ""+power_on_time_only[0]+power_on_time_only[1]+":"
								+power_on_time_only[2]+power_on_time_only[3]+":"
								+power_on_time_only[4]+power_on_time_only[5];
			setting.powerOnTime = powerOnTime;
			list_position_h--;
		}
		else if(list_position_h == 5)
		{
			if(powerOnStatus == 0)
			{
				list_position_h = list_position_h - 2;
			}
			else
			{
				timesInitFocusShow(powerOnContentSpanList,power_on_time_only,TIME_LENGTH,timeLinkChar);
				list_position_h--;
			}
		}
		else
		{
			if(programStatus == 0 || powerOnStatus == 0)//没有节目列表或没有打开power on timer
			{
				if(list_position_h <= 0)
				{
					if(powerOffStatus == 0)
					{
						list_position_h = 5;
					}
					else
					{
						timesInitFocusShow(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
						list_position_h = 6;
					}
				}
				else if(list_position_h == 6)
				{
					timesOutOfFocusShow(powerOffContentSpanList);
					var powerOffTime = ""+power_off_time_only[0]+power_off_time_only[1]+":"
										+power_off_time_only[2]+power_off_time_only[3]+":"
										+power_off_time_only[4]+power_off_time_only[5];
					setting.powerOffTime = powerOffTime;
					list_position_h--;
				}
				else
				{
					list_position_h--;
				}
			}
			else
			{
				if(list_position_h <= 0)
				{
					if(powerOffStatus == 0)
					{
						list_position_h = 6;
					}
					else
					{
						timesInitFocusShow(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
						list_position_h = 7;
					}
				}
				else if(list_position_h == 7)
				{
					timesOutOfFocusShow(powerOffContentSpanList);
					var powerOffTime = ""+power_off_time_only[0]+power_off_time_only[1]+":"
										+power_off_time_only[2]+power_off_time_only[3]+":"
										+power_off_time_only[4]+power_off_time_only[5];
					setting.powerOffTime = powerOffTime;
					list_position_h--;
				}
				else
				{
					list_position_h--;
				}
			}
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "autoSync")
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
	}
	else if(focusOn == "powerOn" || focusOn == "powerOff")
	{
		if(form_position_h <= 0)
		{
			form_position_h = 2;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		if(programStatus == 0 || powerOnStatus == 0)
		{
			switch(list_position_h)
			{
				case 0:
					$("fourthListFocus").src = mainFocus[1];
					stopRefreshTime();
					initAutoSync(autoSync);
					focusOn = "autoSync";
					break;
				case 1:
					toDown();
					break;
				case 2:
					toDown();
					break;
				case 3:
					$("fourthListFocus").src = mainFocus[1];
					initPowerTimer(powerOnStatus);
					focusOn = "powerOn";
					break;
				case 4:
					toDown();
					break;
				case 5:
					$("fourthListFocus").src = mainFocus[1];
					initPowerTimer(powerOffStatus);
					focusOn = "powerOff";
					break;
				case 6:
					toDown();
					break;
				default:	
					break;
			}
		}
		else//有节目且有power on timer
		{
			switch(list_position_h)
			{
				case 0:
					$("fourthListFocus").src = mainFocus[1];
					stopRefreshTime();
					initAutoSync(autoSync);
					focusOn = "autoSync";
					break;
				case 1:
					toDown();
					break;
				case 2:
					toDown();
					break;
				case 3:
					$("fourthListFocus").src = mainFocus[1];
					initPowerTimer(powerOnStatus);
					focusOn = "powerOn";
					break;
				case 4:
					toDown();
					break;
				case 5:
					parent.jumpPage(4,"systemSetting/powerOnChannel.html");
					break;
				case 6:
					$("fourthListFocus").src = mainFocus[1];
					initPowerTimer(powerOffStatus);
					focusOn = "powerOff";
					break;
				case 7:
					toDown();
					break;
				default:	
					break;
			}
		}
	}
	else if(focusOn == "autoSync")
	{
		$("fourthListFocus").src = mainFocus[0];
		autoSync = form_position_h;
		setting.timeSync = autoSync;
		$("autoSyncStatus").innerHTML = offOnWords[autoSync];
		$("listForm").style.display = "none";
		focusOn = "menu";
		showUiList();
		refreshTime();
	}
	else if(focusOn == "powerOn")
	{
		$("fourthListFocus").src = mainFocus[0];
		powerOnStatus = form_position_h;
		setting.powerOnTimer = powerOnStatus;
		$("powerOnStatus").innerHTML = powerTimerWords[powerOnStatus];
		$("listForm").style.display = "none";
		focusOn = "menu";
		showUiList();
	}
	else if(focusOn == "powerOff")
	{
		$("fourthListFocus").src = mainFocus[0];
		powerOffStatus = form_position_h;
		setting.powerOffTimer = powerOffStatus;
		$("powerOffStatus").innerHTML = powerTimerWords[powerOffStatus];
		$("listForm").style.display = "none";
		focusOn = "menu";
		showUiList();
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(3);
	}
	else if(focusOn == "autoSync" || focusOn == "powerOn" || focusOn == "powerOff")
	{
		$("fourthListFocus").src = mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn != "menu")
	{
		toBack();
	}
	else
	{
		if(list_position_h == 1)
		{
			doLeftInTimes(dateContentSpanList,date_only,DATE_LENGTH,dateLinkChar);
		}
		else if(list_position_h == 2)
		{
			doLeftInTimes(timeContentSpanList,time_only,TIME_LENGTH,timeLinkChar);
		}
		else if(list_position_h == 4)
		{
			doLeftInTimes(powerOnContentSpanList,power_on_time_only,TIME_LENGTH,timeLinkChar);
		}
		else if(((programStatus == 1 && powerOnStatus > 0) && list_position_h == 7) || ((programStatus == 0 || powerOnStatus == 0) && list_position_h == 6))
		{
			doLeftInTimes(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
		}
		else
		{
			toBack();
		}
	}
}
function toRight()
{
	if(focusOn != "menu")
	{
		doEnter();
	}
	else
	{
		if(list_position_h == 1)
		{
			doRightInTimes(dateContentSpanList,date_only,DATE_LENGTH,dateLinkChar);
		}
		else if(list_position_h == 2)
		{
			doRightInTimes(timeContentSpanList,time_only,TIME_LENGTH,timeLinkChar);
		}
		else if(list_position_h == 4)
		{
			doRightInTimes(powerOnContentSpanList,power_on_time_only,TIME_LENGTH,timeLinkChar);
		}
		else if(((programStatus == 1 && powerOnStatus > 0) && list_position_h == 7) || ((programStatus == 0 || powerOnStatus == 0) && list_position_h == 6))
		{
			doRightInTimes(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
		}
		else
		{
			doEnter();
		}
	}
}

/*
描述：初始化
参数：enumValue:off 或 on的枚举值
全局变量：form_position_h;list_position_h;offOnWords
*/
function initAutoSync(enumValue)
{
	form_position_h = enumValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}

/*
描述：初始化定时开关机类型列表
参数：enumValue:定时开关机类型
全局变量：form_position_h;list_position_h;powerTimerWords
*/
function initPowerTimer(enumValue)
{
	form_position_h = enumValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,powerTimerWords,3,form_position_h,0);
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
save time to array 
*/
function saveTimeToArray(timeStr,timeArray)
{
	var tts = timeStr.replace(/:/g,"");
	var das = tts.split("");
	for(var i = 0; i < 6; i++)
	{
		timeArray[i] = parseInt(das[i],10);
	}
}

var timer = 0;
/*
描述：刷新时间,但是不更改date_only和time_only数组
参数：
全局变量：timer
*/
function refreshTime()
{
	if(timer)
	{
		clearTimeout(timer);
	}
	date = setting.currentDate;
	dateContentSpanList[0].innerHTML = date;
	dateContentSpanList[1].innerHTML = "";
	dateContentSpanList[2].innerHTML = "";
	
	time = setting.currentTime;
	timeContentSpanList[0].innerHTML = time;
	timeContentSpanList[1].innerHTML = "";
	timeContentSpanList[2].innerHTML = ""; 
	
	timer = setTimeout("refreshTime()",1000);
}

/*
描述：停止时间刷新
参数：
全局变量：timer
*/
function stopRefreshTime()
{
	if(timer)
	{
		clearTimeout(timer);
	}
}

/*
描述：重新设置date_only数组，因为在日期不断刷新的过程中并没有不断更新date_only数组，当焦点落到日期更改的地方的时候数组里面的数据还是老数据，与当前时间不一致
参数：
全局变量：date；date_only
*/
function setDateArray()
{
	var tts = date.replace(/-/g,"");
	var das = tts.split("");
	for(var i = 0; i < 8; i++)
	{
		date_only[i] = parseInt(das[i],10);
	}
}

/*
描述：重新设置time_only数组，因为在日期不断刷新的过程中并没有不断更新time_only数组，当焦点落到时间更改的地方的时候数组里面的数据还是老数据，与当前时间不一致
参数：
全局变量：time；time_only
*/
function setTimeArray()
{
	var tts = time.replace(/:/g,"");
	var das = tts.split("");
	for(var i = 0; i < 6; i++)
	{
		time_only[i] = parseInt(das[i],10);
	}
}

/*
描述：因为国家为spain的时候回比其他时候多处一个region name的选项，需要重新调整整个Ui list的布局
参数：
全局变量：timeZone;country;powerOnChannelFlag;fourthMenuRightLiList;
*/
function showUiList()
{
	//date and time
	fourthMenuRightLiList[2].style.background = (autoSync == 0)?"none":"#222";
	fourthMenuRightLiList[3].style.background = (autoSync == 0)?"none":"#222";
	
	//power on timer
	fourthMenuRightLiList[5].style.background = (powerOnStatus == 0)?"#222":"none";
	
	//power on channel
	fourthMenuRightLiList[6].style.display = (programStatus == 0 || powerOnStatus == 0)?"none":"block";
	
	//power off timer
	fourthMenuRightLiList[8].style.background = (powerOffStatus == 0)?"#222":"none";
}

/*
描述：焦点第一次落在时间上时的初始化（焦点数字以红色表示，其他文字颜色为白色）
参数：spanList:用来显示时间的span列表;dataList: 保存日期数字的数组dataSum:保存日期的数组的总长度;linkChar：用于连接的字符,比如11:23的连接字符时“：”
全局变量：num_position;
*/
function timesInitFocusShow(spanList,dataList,dataSum,linkChar)
{
	num_position = 0;
	spanList[0].innerText = dataList[num_position];
	spanList[1].innerText = getNextTimeShowString(num_position + 1,dataList,dataSum,linkChar);
	spanList[2].innerText = "";
	spanList[0].style.color = "#f00";
}

/*
描述：焦点离开时间输入框时的变化
参数：spanList:用来显示时间的span列表;
全局变量：;
*/
function timesOutOfFocusShow(spanList)
{
	spanList[0].style.color = "#fff";
	spanList[1].style.color = "#fff";
	spanList[2].style.color = "#fff";
}


/*
描述：获取时间或日期的前缀（前半部分）的string结果
参数：endP：结束位置的num_postion位置;dataList: 保存日期数字的数组;dataSum:保存日期的数组的总长度;linkChar：用于连接的字符,比如11:23的连接字符时“：”
全局变量：date_only
返回：返回前缀字串
*/
function getPreTimeShowString(endP,dataList,dataSum,linkChar)
{
	var str = "";
	for(var i = 0; i <= endP; i++)
	{
		if(i == 1)
		{
			str += dataList[i];
			str += linkChar; 
		}
		else if(i == 3)
		{
			if((dataSum - 1) <= 3)//是time字串;形如11:12
			{
				str += dataList[i];
			}
			else//是date字串；形如01-01-2012
			{
				str += dataList[i];
				str += linkChar; 
			}
		}
		else
		{
			str += dataList[i];
		}
	}
	return str;
}

/*
描述：获取时间或日期 的 后缀（后半部分）的string结果
参数：startP：开始位置的num_postion位置;dataList: 保存日期数字的数组;dataSum:保存日期的数组的总长度;linkChar：用于连接的字符,比如11:23的连接字符时“：”
全局变量：date_only
返回：返回后缀字串
*/
function getNextTimeShowString(startP,dataList,dataSum,linkChar)
{
	var str = "";
	for(var i = startP; i < dataSum; i++)
	{
		//特殊情况处理,如11:22在startP为2的时候最开始需要带上“：”
		if(i == 2 && startP == 2)
		{
			str += linkChar;
			str += dataList[i];
			continue;
		}
		else if(i == 4 && startP == 4)
		{
			str += linkChar;
			str += dataList[i];
			continue;
		}
		
		if(i == 1)
		{
			str += dataList[i];
			str += linkChar; 
		}
		else if(i == 3)
		{
			if((dataSum - 1) <= 3)//是time字串;形如11:12
			{
				str += dataList[i];
			}
			else//是date字串；形如01-01-2012
			{
				str += dataList[i];
				str += linkChar; 
			}
		}
		else
		{
			str += dataList[i];
		}
	}
	return str;
}

/*

描述：在焦点在日期输入框上的时候按左键的操作过程,需要说明在这里处理的日期的默认格式是：两个数 + 间隔字符 +　两个数　＋　间隔字符　＋　其他。如01-01-2013
参数：spanList:日期内容的span；dataList:保存日期的数组;dataSum:保存日期的数组的总长度;linkChar:连接字符
全局变量：num_position
*/
function doLeftInTimes(spanList,dataList,dataSum,linkChar)
{
	if(num_position <= 0)
	{
		num_position = dataSum - 1;
		spanList[0].innerText = "";
		spanList[1].innerText = getPreTimeShowString(num_position - 1,dataList,dataSum,linkChar);
		spanList[2].innerText = dataList[num_position];
		spanList[0].style.color = "#fff";
		spanList[2].style.color = "#f00";
	}
	else if(num_position == 1)
	{
		num_position--;
		spanList[0].innerText = dataList[0];
		spanList[1].innerText = getNextTimeShowString(num_position + 1,dataList,dataSum,linkChar);
		spanList[2].innerText = "";
		spanList[1].style.color = "#fff";
		spanList[0].style.color = "#f00";
		
	}
	else if(num_position >= (dataSum - 1))
	{
		num_position--;
		spanList[0].innerText = getPreTimeShowString(num_position - 1,dataList,dataSum,linkChar);
		spanList[1].innerText = dataList[num_position];
		spanList[2].innerText = dataList[dataSum - 1];
		spanList[2].style.color = "#fff";
		spanList[1].style.color = "#f00";
	}
	else//num_position 1-6
	{
		num_position--;
		spanList[0].innerText = getPreTimeShowString(num_position - 1,dataList,dataSum,linkChar);
		spanList[1].innerText = dataList[num_position];
		spanList[2].innerText = getNextTimeShowString(num_position + 1,dataList,dataSum,linkChar);
	}
}

/*
描述：在焦点在日期输入框上的时候按右键的操作过程,需要说明在这里处理的日期的默认格式是：两个数 + 间隔字符 +　两个数　＋　间隔字符　＋　其他。如01-01-2013
参数：spanList:日期内容的span；dataList:保存日期的数组;dataSum:保存日期的数组的总长度;linkChar:连接字符
全局变量：num_position
*/
function doRightInTimes(spanList,dataList,dataSum,linkChar)
{
	if(num_position <= 0)
	{
		num_position++;
		spanList[0].innerText = dataList[0];
		spanList[1].innerText = dataList[num_position];
		spanList[2].innerText = getNextTimeShowString(num_position + 1,dataList,dataSum,linkChar);
		spanList[0].style.color = "#fff";
		spanList[1].style.color = "#f00";
	}
	else if(num_position == (dataSum - 2))
	{
		num_position++;
		spanList[0].innerText = "";
		spanList[1].innerText = getPreTimeShowString(num_position - 1,dataList,dataSum,linkChar);
		spanList[2].innerText = dataList[num_position];
		spanList[1].style.color = "#fff";
		spanList[2].style.color = "#f00";
		
	}
	else if(num_position >= (dataSum - 1))
	{
		num_position = 0;
		spanList[0].innerText = dataList[num_position];
		spanList[1].innerText = getNextTimeShowString(num_position + 1,dataList,dataSum,linkChar);
		spanList[2].innerText = "";
		spanList[2].style.color = "#fff";
		spanList[0].style.color = "#f00";
	}
	else//num_position 1-6
	{
		num_position++;
		spanList[0].innerText = getPreTimeShowString(num_position - 1,dataList,dataSum,linkChar);
		spanList[1].innerText = dataList[num_position];
		spanList[2].innerText = getNextTimeShowString(num_position + 1,dataList,dataSum,linkChar);
	}
}


/*
*描述：根据当前输入的数字判断日期是否符合规则从而纠正日期。合法年是在1900-2099之间
*参数：position当前输入的数字要放在数组date_only的位置；number：输入的数字
*返回值：number:返回纠正后的输入数字
全局变量:date_only
*/
function checkRightDate(position,number)
{
	if(position == 0)//日期在01-31之间
	{
		if((number*10+date_only[1])>31)
		{
			number=3; 
			date_only[1]=1;
		}
		else if((number*10+date_only[1])<=0)
		{
			number=0; 
			date_only[1]=1;
		}
	}
	else if(position == 1)//日期在01-31之间
	{
		if(((date_only[0]*10)+number)>31) 
		{
			date_only[0]=3;
			number=1;
		}
		else if(((date_only[0]*10)+number)<=0) 
		{
			date_only[0]=0;
			number=1;
		}
	}
	else if(position == 2)//月份在01-12之间，但是二月份的日期不能超过29天
	{
		if((number*10+date_only[3])>12)
		{
			number=1; 
			date_only[3]=2;
		}
		else if((number*10+date_only[3])<=0)
		{
			number=0; 
			date_only[3]=1;
		}
	}
	else if(position == 3)//月份在01-12之间，但是二月份的日期不能超过29天
	{
		if((number+date_only[2]*10)>12)
		{
			date_only[2]=1;
			number=2; 
		}
		else if((number+date_only[2]*10)<=0)
		{
			date_only[2]=0;
			number=1; 
		}
		else if((number+date_only[2]*10) == 2)//二月份的日期不能超过29天
		{
			if((date_only[0]*10 + date_only[1]) > 29)//如果日期超过29，则将月份改为3月份
			{
				number = 3;
			}
		}
	}
	else if(position == 4)//年份在1970-2037之间，但是2月份的天数需要特别的注意
	{
		if((number*10+date_only[5])>20)
		{
			
			number=2; 
			date_only[5]=0;
		}
		else if((number*10+date_only[5])<19)
		{
			number=1; 
			date_only[5]=9;
		}
	}
	else if(position == 5)//年份在1970-2037之间，但是2月份的天数需要特别的注意
	{
		if((number+date_only[4]*10)>20)
		{
			date_only[4]=2;
			number=0; 
		}
		else if((number+date_only[4]*10)<19)
		{
			
			date_only[4]=1;
			number=9; 
		}
	}
	else if(position == 6)
	{
		if(date_only[4]*10 + date_only[5] == 19)//年份在1970-2037之间
		{
			if(number < 7)
			{
				number = 7;
			}
		}
		else if(date_only[4]*10 + date_only[5] == 20)//年份在1970-2037之间
		{
			if(number > 3)
			{
				number = 3;
			}
		}
		
	}
	else if(position == 7)//年份在1970-2037之间，但是2月份的天数需要特别的注意
	{
		var nowYear = date_only[4]*1000 + date_only[5]*100 + date_only[6]*10 +  number;
		if(nowYear < 1970)//年份在1970-2037之间
		{
			date_only[4] = 1;
			date_only[5] = 9;
			date_only[6] = 7;
		}
		else if( nowYear > 2037)//年份在1970-2037之间
		{
			date_only[4] = 2;
			date_only[5] = 0;
			date_only[6] = 3;
			if(number > 7)
			{
				number = 7;
			}
		}
		
		if((date_only[2]*10 + date_only[3]) == 2)//调整闰年闰月时间
		{
			//var nowYear = date_only[4]*1000+date_only[5]*100+date_only[6]*10+date_only[7];
			var flag = 0;//0 平年，1 闰年
			if((nowYear%100) == 0)
			{
				if((nowYear%400) == 0) flag=1;
			}
			else
			{
				if((nowYear%4) == 0) flag=1;
			}
			
			if(flag == 0)//平年时，可能这个你那份是不能输入的。
			{ 
				var nowDate = date_only[0]*10 + date_only[1];
				if(nowDate > 28)
				{
					nowYear = date_only[4]*1000+date_only[5]*100+date_only[6]*10;
					while(1)
					{
						if((nowYear%100) == 0)
						{
							if((nowYear%400) == 0) break;
						}
						else
						{
							if((nowYear%4) == 0) break;
						}
						nowYear += 1;
					}
					number = nowYear%10;
				}
			}
		}
	}
	return parseInt(number,10);
}

/*
*描述：根据当前输入的数字判断时间是否符合规则从而纠正时间。时间格式是hh:mm
*参数：position当前输入的数字要放在保存时间数组的位置；number：输入的数字；timeList:保存时间的数组
*返回值：number:返回纠正后的输入数字
全局变量：time_only;power_on_time_only;power_off_time_only
*/
function checkRightTime(position,number)
{
	//检查输入的时间是否符合格式和日期限制
	if(list_position_h == 2)//time
	{
		if(position == 0)
		{
			if((number*10+time_only[1])>23)
			{
				number=2; 
				time_only[1]=3;
			}
		}
		else if(position == 1)
		{
			if(((time_only[0]*10)+number)>23) 
			{
				time_only[0]=2;
				number=3;
			}
		}
		else if(position == 2)
		{
			if((number*10+time_only[3])>59)
			{
				number=5; 
				time_only[3]=9;
			}
		}
		else if(position == 3)
		{
			if((number+time_only[2]*10)>59)
			{
				time_only[2]=5;
				number=9; 
			}
		}
		else if(position == 4)
		{
			if((number*10+time_only[5])>59)
			{
				number=5; 
				time_only[5]=9;
			}
		}
		else if(position == 5)
		{
			if((number+time_only[4]*10)>59)
			{
				time_only[4]=5;
				number=9; 
			}
		}
	}
	else if(list_position_h == 4)
	{
		if(position == 0)
		{
			if((number*10+power_on_time_only[1])>23)
			{
				number=2; 
				power_on_time_only[1]=3;
			}
		}
		else if(position == 1)
		{
			if(((power_on_time_only[0]*10)+number)>23) 
			{
				power_on_time_only[0]=2;
				number=3;
			}
		}
		else if(position == 2)
		{
			if((number*10+power_on_time_only[3])>59)
			{
				number=5; 
				power_on_time_only[3]=9;
			}
		}
		else if(position == 3)
		{
			if((number+power_on_time_only[2]*10)>59)
			{
				power_on_time_only[2]=5;
				number=9; 
			}
		}
		else if(position == 4)
		{
			if((number*10+power_on_time_only[5])>59)
			{
				number=5; 
				time_only[5]=9;
			}
		}
		else if(position == 5)
		{
			if((number+power_on_time_only[4]*10)>59)
			{
				time_only[4]=5;
				number=9; 
			}
		}
	}
	else if(((programStatus == 1 && powerOnStatus > 0) && list_position_h == 7) || ((programStatus == 0 || powerOnStatus == 0) && list_position_h == 6))
	{
		if(position == 0)
		{
			if((number*10+power_off_time_only[1])>23)
			{
				number=2; 
				power_off_time_only[1]=3;
			}
		}
		else if(position == 1)
		{
			if(((power_off_time_only[0]*10)+number)>23) 
			{
				power_off_time_only[0]=2;
				number=3;
			}
		}
		else if(position == 2)
		{
			if((number*10+power_off_time_only[3])>59)
			{
				number=5; 
				power_off_time_only[3]=9;
			}
		}
		else if(position == 3)
		{
			if((number+power_off_time_only[2]*10)>59)
			{
				power_off_time_only[2]=5;
				number=9; 
			}
		}
		else if(position == 4)
		{
			if((number*10+power_off_time_only[5])>59)
			{
				number=5; 
				time_only[5]=9;
			}
		}
		else if(position == 5)
		{
			if((number+power_off_time_only[4]*10)>59)
			{
				time_only[4]=5;
				number=9; 
			}
		}
	}
	return parseInt(number,10);
}
		
/*
描述：输入日期后做类似确认当前修改的时间的操作,更正不合法时间
参数：
全局变量：date_only；date
*/
function doDateEnter()
{
	var dt = new Date(date_only[4]*1000+date_only[5]*100+date_only[6]*10+date_only[7],date_only[2]*10+date_only[3] - 1,date_only[0]*10+date_only[1]);
				
	var y = dt.getFullYear();
	var m = dt.getMonth() + 1;
	var d = dt.getDate();
	if(m < 10)
	{
		m = "0" + m;
	}
	if(d < 10)
	{
		d = "0" + d;
	}
	var dateString = "" + d + m + y;
	var dates = dateString.split("");
	for(var i = 0; i < 8; i++)
	{
		date_only[i] = parseInt(dates[i],10);
	}
	date = ""+ d + "-" + m + "-" + y;
	setting.currentDate = date;
}

var fourthMenuRightLiList;
var listFormLiList;
var dateContentSpanList;
var timeContentSpanList;
var powerOnContentSpanList;
var powerOffContentSpanList;
function init()
{
	timeoutInit();
	programStatus = channel.channelProgramStatus();
	
	var fourthMenuRightLableList = $("fourthMenuRight").getElementsByTagName("lable");
	for(var i = 0; i < 9; i++)
	{
		fourthMenuRightLableList[i].innerHTML = clockTitleWords[i];
	}
	
	autoSync = setting.timeSync;
	$("autoSyncStatus").innerHTML = offOnWords[autoSync];
	
	dateContentSpanList = $("dateContent").getElementsByTagName("span");
	timeContentSpanList = $("timeContent").getElementsByTagName("span");
	powerOnContentSpanList = $("powerOnContent").getElementsByTagName("span");
	powerOffContentSpanList = $("powerOffContent").getElementsByTagName("span");
	fourthMenuRightLiList = $("fourthMenuRight").getElementsByTagName("li");
	listFormLiList = $("listForm").getElementsByTagName("li");
	
	powerOnStatus = setting.powerOnTimer;
	$("powerOnStatus").innerHTML = powerTimerWords[powerOnStatus];
	var onTime = setting.powerOnTime;
	saveTimeToArray(onTime,power_on_time_only);
	powerOnContentSpanList[0].innerHTML = onTime; 

	powerOffStatus = setting.powerOffTimer;
	$("powerOffStatus").innerHTML = powerTimerWords[powerOffStatus];
	var offTime = setting.powerOffTime;
	saveTimeToArray(offTime,power_off_time_only);
	powerOffContentSpanList[0].innerHTML = offTime; 
	
	showUiList();
	
	list_position_h = 0;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	//时间更新
	refreshTime();
	addMouseListener();
}

/*
描述：退出前把没有设置完成的时间设置到数据库，避免当焦点还在要设置的时间上就退出而导致设置的时间没有保存
*/
function uninit()
{
	channel.testLog("in clock uninit focusOn = " + focusOn + ",programStatus = " + programStatus + ",list_position_h= " + list_position_h);
	if(focusOn == "menu")
	{
		if(programStatus == 0 || powerOnStatus == 0)
		{
			switch(list_position_h)
			{
				case 1:
					doDateEnter();
					break;
				case 2:
					time = ""+time_only[0]+time_only[1]+":"+time_only[2]+time_only[3]+":"+time_only[4]+time_only[5];
					setting.currentTime = time;
					break;
				case 4:
					var powerOnTime = ""+power_on_time_only[0]+power_on_time_only[1]+":"
							+power_on_time_only[2]+power_on_time_only[3]+":"
							+power_on_time_only[4]+power_on_time_only[5];
					setting.powerOnTime = powerOnTime;
					break;
				case 6:
					var powerOffTime = ""+power_off_time_only[0]+power_off_time_only[1]+":"
										+power_off_time_only[2]+power_off_time_only[3]+":"
										+power_off_time_only[4]+power_off_time_only[5];
					setting.powerOffTime = powerOffTime;
					break;
				default:
					break;
			}
		}
		else//有节目有time on
		{
			switch(list_position_h)
			{
				case 1:
					doDateEnter();
					break;
				case 2:
					time = ""+time_only[0]+time_only[1]+":"+time_only[2]+time_only[3]+":"+time_only[4]+time_only[5];
					setting.currentTime = time;
					break;
				case 4:
					var powerOnTime = ""+power_on_time_only[0]+power_on_time_only[1]+":"
							+power_on_time_only[2]+power_on_time_only[3]+":"
							+power_on_time_only[4]+power_on_time_only[5];
					setting.powerOnTime = powerOnTime;
					break;
				case 7:
					var powerOffTime = ""+power_off_time_only[0]+power_off_time_only[1]+":"
										+power_off_time_only[2]+power_off_time_only[3]+":"
										+power_off_time_only[4]+power_off_time_only[5];
					setting.powerOffTime = powerOffTime;
					break;
				default:	
					break;
			}
		}
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//menu
	for(var i = 1; i < 9; i++)
	{
		fourthMenuRightLiList[i].setAttribute("newAttr",i);
		fourthMenuRightLiList[i].onmousedown = function(evt){
			//top.Log("in onmousedown autoSync = " + autoSync + ",powerOnStatus = " + powerOnStatus + ",powerOffStatus = " + powerOffStatus + ",i= " + parseInt(this.getAttribute("newAttr")) + ",list_position_h = " + list_position_h);
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{	
					//先与判断该点击是否有用
					if(autoSync == 1 && (parseInt(this.getAttribute("newAttr")) == 2 || parseInt(this.getAttribute("newAttr")) == 3))//date and time in auto sync
					{
						top.timeoutFuc.osdTimeoutStartFuc();
						return;
					}
					else if(powerOnStatus == 0 && parseInt(this.getAttribute("newAttr")) == 5)//power on timer is off,so time set unable
					{
						top.timeoutFuc.osdTimeoutStartFuc();
						return;
					}
					else if(powerOffStatus == 0 && parseInt(this.getAttribute("newAttr")) == 8)//power off timer is off,so time set unable
					{
						top.timeoutFuc.osdTimeoutStartFuc();
						return;
					}
					
					//取消先前焦点
					if(list_position_h == 1)
					{
						timesOutOfFocusShow(dateContentSpanList);
						/*---------------最后更正不合法时间 add by chenhua 2014-1-26----------------------*/
						doDateEnter();//做确认日期修改的操作
						dateContentSpanList[0].innerHTML = date;
						dateContentSpanList[1].innerHTML = "";
						dateContentSpanList[2].innerHTML = "";
					}
					else if(list_position_h == 2)
					{
						timesOutOfFocusShow(timeContentSpanList);
						time = ""+time_only[0]+time_only[1]+":"+time_only[2]+time_only[3]+":"+time_only[4]+time_only[5];
						setting.currentTime = time;
					}
					else if(list_position_h == 4)
					{
						timesOutOfFocusShow(powerOnContentSpanList);
						var powerOnTime = ""+power_on_time_only[0]+power_on_time_only[1]+":"
											+power_on_time_only[2]+power_on_time_only[3]+":"
											+power_on_time_only[4]+power_on_time_only[5];
						setting.powerOnTime = powerOnTime;
					}
					else
					{
						if(programStatus == 0 || powerOnStatus == 0)
						{
							if(list_position_h == 6)
							{
								timesOutOfFocusShow(powerOffContentSpanList);
								var powerOffTime = ""+power_off_time_only[0]+power_off_time_only[1]+":"
													+power_off_time_only[2]+power_off_time_only[3]+":"
													+power_off_time_only[4]+power_off_time_only[5];
								setting.powerOffTime = powerOffTime;
							}
						}
						else//有节目且power on timer打开
						{
							if(list_position_h == 7)
							{
								timesOutOfFocusShow(powerOffContentSpanList);
								var powerOffTime = ""+power_off_time_only[0]+power_off_time_only[1]+":"
													+power_off_time_only[2]+power_off_time_only[3]+":"
													+power_off_time_only[4]+power_off_time_only[5];
								setting.powerOffTime = powerOffTime;
							}
						}
					}
					
					//设置新焦点
					refreshTime();
					if(parseInt(this.getAttribute("newAttr")) == 1)//auto
					{
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					else if(parseInt(this.getAttribute("newAttr")) == 2)//date
					{
						stopRefreshTime();
						setDateArray();
						timesInitFocusShow(dateContentSpanList,date_only,DATE_LENGTH,dateLinkChar);
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					else if(parseInt(this.getAttribute("newAttr")) == 3)//time
					{
						stopRefreshTime();
						setTimeArray();
						timesInitFocusShow(timeContentSpanList,time_only,TIME_LENGTH,timeLinkChar);
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					else if(parseInt(this.getAttribute("newAttr")) == 4)
					{
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					else if(parseInt(this.getAttribute("newAttr")) == 5)//power on timer set time
					{
						timesInitFocusShow(powerOnContentSpanList,power_on_time_only,TIME_LENGTH,timeLinkChar);
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1
					}
					else
					{
						if(programStatus == 0 || powerOnStatus == 0)
						{
							if(parseInt(this.getAttribute("newAttr")) == 8)//power off timer set time 
							{
								timesInitFocusShow(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
							}
							list_position_h = parseInt(this.getAttribute("newAttr")) - 2;
						}
						else//有节目且power on timer打开
						{
							if(parseInt(this.getAttribute("newAttr")) == 8)//power off timer set time
							{
								timesInitFocusShow(powerOffContentSpanList,power_off_time_only,TIME_LENGTH,timeLinkChar);
							}
							list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
						}
					}
					$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					var tAttr = parseInt(this.getAttribute("newAttr"));
					if(tAttr != 2 && tAttr != 3 && tAttr != 5 && tAttr != 8)
					{
						doEnter();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	//form
	for(var i = 0; i < 3; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "autoSync" || focusOn == "powerOn" || focusOn == "powerOff")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}

/******************** created by chenhua ***********************/
var timeIntervalTitleWord 		= top.sysLockOptions[1];
var timeIntervalOptionWords		= [top.sysTimeIntervals[0],top.sysTimeIntervals[1],top.sysTimeIntervals[2]];
var timeIntervalLockTypeValues	= [top.offOn[0],top.others[36],top.weekday[0],top.weekday[1],top.weekday[2],
									top.weekday[3],top.weekday[4],top.weekday[5],top.weekday[6]];

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,lockType
var list_position_h				= 0;
var form_position_h				= 0;
var lockTypeSum					= timeIntervalLockTypeValues.length;
var offset						= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，
var lockObject					= "";					//time interval lock 类,lockObject.lockObject.lockType(0 Off,1 Everyday,2 Sunday ... ,8 Saturday);lockObject.startTimeHH(0X/XX);lockObject.startTimeMM(0X/XX);lockObject.startTimeSS(0X/XX);lockObject.endTimeHH(0X/XX);lockObject.endTimeMM(0X/XX);lockObject.endTimeSS(0X/XX)

var start_time_only				= [0,0,0,0,0,0,0,0];		//保存时间，每一位保存一个个位数字
var end_time_only				= [0,0,0,0,0,0];			//保存时间，每一位保存一个个位数
var lockTypePos					= 0;					//lock type 的position
var num_position				= 0;					//当前焦点在时间存储数组(如start_time_only/end_time_only)中的下标位置

var sumLockTypeValues			= 9;
var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
var TIME_LENGTH					= 6;
var timeLinkChar				= ":";
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
			if(focusOn == "menu")
			{
				if(list_position_h == 1)
				{
					start_time_only[num_position] = checkRightTime(num_position,keycode - 48);
					doRightInTimes(startTimeValueSpanList,start_time_only,TIME_LENGTH,timeLinkChar);
				}
				else if(list_position_h == 2)
				{
					end_time_only[num_position] = checkRightTime(num_position,keycode - 48);
					doRightInTimes(endTimeValueSpanList,end_time_only,TIME_LENGTH,timeLinkChar);
				}
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
		if(lockObject.lockType == 0)
		{
			return;
		}
		else
		{
			if(list_position_h >= 2)
			{
				timesOutOfFocusShow(endTimeValueSpanList);
				setIntervalLock("endTime");
				list_position_h = 0;
			}
			else if(list_position_h == 1)
			{
				timesOutOfFocusShow(startTimeValueSpanList);
				setIntervalLock("startTime");
				timesInitFocusShow(endTimeValueSpanList,end_time_only,TIME_LENGTH,timeLinkChar);
				list_position_h++;
			}
			else if(list_position_h == 0)
			{
				timesInitFocusShow(startTimeValueSpanList,start_time_only,TIME_LENGTH,timeLinkChar);
				list_position_h++;
			}
			$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
	}
	else if(focusOn == "lockType")
	{
		toDownInLockTypes(sumLockTypeValues);
	}
}
function toUp()
{
	if(focusOn == "menu")
	{
		if(lockObject.lockType == 0)
		{
			return;
		}
		else
		{
			if(list_position_h <= 0)
			{
				timesInitFocusShow(endTimeValueSpanList,end_time_only,TIME_LENGTH,timeLinkChar);
				list_position_h = 2;
			}
			else if(list_position_h == 1)
			{
				timesOutOfFocusShow(startTimeValueSpanList);
				setIntervalLock("startTime");
				list_position_h--;
			}
			else if(list_position_h == 2)
			{
				timesOutOfFocusShow(endTimeValueSpanList);
				setIntervalLock("endTime");
				timesInitFocusShow(startTimeValueSpanList,start_time_only,TIME_LENGTH,timeLinkChar);
				list_position_h--;
			}
			$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
	}
	else if(focusOn == "lockType")
	{
		toUpInLockTypes(sumLockTypeValues);
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
			doLeftInTimes(startTimeValueSpanList,start_time_only,TIME_LENGTH,timeLinkChar);
		}
		else if(list_position_h == 2)
		{
			doLeftInTimes(endTimeValueSpanList,end_time_only,TIME_LENGTH,timeLinkChar);
		}
		else
		{
			toBack();
		}
	}
}
function toRight()
{
	top.Log(" in  toRight focusOn = " + focusOn + " list_position_h = " + list_position_h );
	if(focusOn != "menu")
	{
		doEnter();
	}
	else
	{
		if(list_position_h == 1)
		{
			doRightInTimes(startTimeValueSpanList,start_time_only,TIME_LENGTH,timeLinkChar);
		}
		else if(list_position_h == 2)
		{
			doRightInTimes(endTimeValueSpanList,end_time_only,TIME_LENGTH,timeLinkChar);
		}
		else
		{
			doEnter();
		}
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		$("fourthListFocus").src=mainFocus[1];
		if(list_position_h == 0)
		{
			initLockType(lockObject.lockType);
			focusOn = "lockType";
		}
	}
	else if(focusOn == "lockType")
	{
		$("fourthListFocus").src=mainFocus[0];
		if(lockObject.lockType != (form_position_h + offset))
		{
			lockObject.lockType = form_position_h + offset;
			setIntervalLock("type");
			$('lockTypeValue').innerText = timeIntervalLockTypeValues[lockObject.lockType];
			initMenuOfLockTypeStatus(lockObject.lockType);
		}
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(3);
	}
	else if(focusOn == "lockType")
	{
		$("fourthListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
}

/*
描述： 初始化在语言列表
参数：position：语言在索引数组中的下标；
全局变量：form_position_h；offset;
*/
function initLockType(position)
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
		listFormLiList[i].innerText = timeIntervalLockTypeValues[i + offset];
	}*/
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,timeIntervalLockTypeValues,sumLockTypeValues,form_position_h,offset);
}

/*
描述：在form列表出来的时候按Down键刷新焦点的效果
参数：sumType：允许的lock type总数量；
全局变量：form_position_h；offset;
*/
function toDownInLockTypes(sumType)
{
	if(form_position_h == 4 && (form_position_h + offset) >= (sumType - 1))
	{
		offset=0;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerText = timeIntervalLockTypeValues[i+offset];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sumType - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerText = timeIntervalLockTypeValues[i+offset];
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
	
	if((offset + 4) >= (sumType - 1))
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
描述：在form列表出来的时候按Up键刷新焦点的效果
参数：sumType：允许的lock type总数量；
全局变量：form_position_h；offset;
*/
function toUpInLockTypes(sumType)
{
	if(form_position_h == 0 && offset == 0)
	{
		offset = sumType - 5;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerText = timeIntervalLockTypeValues[i + offset];
		}
		form_position_h = 4;
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerText = timeIntervalLockTypeValues[i + offset];
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
	
	if((offset + 4) >= (sumType - 1))
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
设置IntervalLock
参数：flag:type/startTime/endTime
*/
function setIntervalLock(flag)
{
	top.Log("" + start_time_only[0] + start_time_only[1] + start_time_only[2] + start_time_only[3] + start_time_only[4] + start_time_only[5]);
	if(flag == "type")
	{
		//do nothing
	}
	else if(flag == "startTime")
	{
		lockObject.startTimeHH = start_time_only[0]*10 + start_time_only[1];
		lockObject.startTimeMM = start_time_only[2]*10 + start_time_only[3];
		lockObject.startTimeSS = start_time_only[4]*10 + start_time_only[5];
	}
	else if(flag == "endTime")
	{
		lockObject.endTimeHH = end_time_only[0]*10 + end_time_only[1];
		lockObject.endTimeMM = end_time_only[2]*10 + end_time_only[3];
		lockObject.endTimeSS = end_time_only[4]*10 + end_time_only[5];
	}
	top.Log(lockObject.lockType + " " + lockObject.startTimeHH + ":" +　lockObject.startTimeMM + ":" +　lockObject.startTimeSS + ":" +　lockObject.endTimeHH + ":" +　lockObject.endTimeMM + ":" +　lockObject.endTimeSS);
	setting.setTimeIntervalLock(lockObject.lockType, lockObject.startTimeHH,
		lockObject.startTimeMM, lockObject.startTimeSS,
		lockObject.endTimeHH, lockObject.endTimeMM,
		lockObject.endTimeSS);
}


/*
描述：重新设置start_time_only数组，因为在日期不断刷新的过程中并没有不断更新start_time_only数组，当焦点落到时间更改的地方的时候数组里面的数据还是老数据，与当前时间不一致
参数：
全局变量：time；start_time_only
*/
function setStartTimeArray()
{
	start_time_only[0] = parseInt(lockObject.startTimeHH/10,10);
	start_time_only[1] = parseInt(lockObject.startTimeHH%10,10);
	start_time_only[2] = parseInt(lockObject.startTimeMM/10,10);
	start_time_only[3] = parseInt(lockObject.startTimeMM%10,10);
	start_time_only[4] = parseInt(lockObject.startTimeSS/10,10);
	start_time_only[5] = parseInt(lockObject.startTimeSS%10,10);
}

/*
描述：重新设置end_time_only数组，因为在日期不断刷新的过程中并没有不断更新end_time_only数组，当焦点落到时间更改的地方的时候数组里面的数据还是老数据，与当前时间不一致
参数：
全局变量：time；end_time_only
*/
function setEndTimeArray()
{
	end_time_only[0] = parseInt(lockObject.endTimeHH/10,10);
	end_time_only[1] = parseInt(lockObject.endTimeHH%10,10);
	end_time_only[2] = parseInt(lockObject.endTimeMM/10,10);
	end_time_only[3] = parseInt(lockObject.endTimeMM%10,10);
	end_time_only[4] = parseInt(lockObject.endTimeSS/10,10);
	end_time_only[5] = parseInt(lockObject.endTimeSS%10,10);
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
描述：获取时间或日期的前缀（前半部分）的string结果
参数：endP：结束位置的num_postion位置;dataList: 保存日期数字的数组;dataSum:保存日期的数组的总长度;linkChar：用于连接的字符,比如11:23的连接字符时“：”
全局变量：start_time_only
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
全局变量：start_time_only
返回：返回后缀字串
*/
function getNextTimeShowString(startP,dataList,dataSum,linkChar)
{
	top.Log(" in  getNextTimeShowString startP = " + startP + " dataSum = " + dataSum + " linkChar = " + linkChar);
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
	top.Log(" in  doRightInTimes num_position = " + num_position + " dataSum = " + dataSum + " linkChar = " + linkChar);
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
*描述：根据当前输入的数字判断时间是否符合规则从而纠正时间。时间格式是hh:mm
*参数：position当前输入的数字要放在保存时间数组的位置；number：输入的数字；timeList:保存时间的数组
*返回值：number:返回纠正后的输入数字
全局变量：end_time_only;start_time_only;
*/
function checkRightTime(position,number)
{
	//检查输入的时间是否符合格式和日期限制
	if(list_position_h == 1)
	{
		if(position == 0)
		{
			if((number*10+start_time_only[1])>23)
			{
				number=2; 
				start_time_only[1]=3;
			}
		}
		else if(position == 1)
		{
			if(((start_time_only[0]*10)+number)>23) 
			{
				start_time_only[0]=2;
				number=3;
			}
		}
		else if(position == 2)
		{
			if((number*10+start_time_only[3])>59)
			{
				number=5; 
				start_time_only[3]=9;
			}
		}
		else if(position == 3)
		{
			if((number+start_time_only[2]*10)>59)
			{
				start_time_only[2]=5;
				number=9; 
			}
		}
		else if(position == 4)
		{
			if((number*10+start_time_only[5])>59)
			{
				number=5; 
				end_time_only[5]=9;
			}
		}
		else if(position == 5)
		{
			if((number+start_time_only[4]*10)>59)
			{
				end_time_only[4]=5;
				number=9; 
			}
		}
	}
	else if(list_position_h == 2)//end time
	{
		if(position == 0)
		{
			if((number*10+end_time_only[1])>23)
			{
				number=2; 
				end_time_only[1]=3;
			}
		}
		else if(position == 1)
		{
			if(((end_time_only[0]*10)+number)>23) 
			{
				end_time_only[0]=2;
				number=3;
			}
		}
		else if(position == 2)
		{
			if((number*10+end_time_only[3])>59)
			{
				number=5; 
				end_time_only[3]=9;
			}
		}
		else if(position == 3)
		{
			if((number+end_time_only[2]*10)>59)
			{
				end_time_only[2]=5;
				number=9; 
			}
		}
		else if(position == 4)
		{
			if((number*10+end_time_only[5])>59)
			{
				number=5; 
				end_time_only[5]=9;
			}
		}
		else if(position == 5)
		{
			if((number+end_time_only[4]*10)>59)
			{
				end_time_only[4]=5;
				number=9; 
			}
		}
	}
	return parseInt(number,10);
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
根据输入返回两位的时间字符串，如果小于10，返回0X
*/
function returnShowTimePiece(timePiece)
{
	if(timePiece < 10)
	{
		return "0" + timePiece;
	}
	else 
	{
		return timePiece;
	}
}
/*
*描述：根据lock type的状态刷新菜单
*/
function initMenuOfLockTypeStatus(status)
{
	top.Log(lockObject.lockType + " " + lockObject.startTimeHH + ":" +　lockObject.startTimeMM + ":" +　lockObject.startTimeSS + ":" +　lockObject.endTimeHH + ":" +　lockObject.endTimeMM + ":" +　lockObject.endTimeSS);
	if(status == 0)//lock type is off
	{
		optionContentLiList[1].style.display = "none";
		optionContentLiList[2].style.display = "none";
	}
	else
	{
		setStartTimeArray();
		setEndTimeArray();
		
		startTimeValueSpanList[0].innerText = returnShowTimePiece(lockObject.startTimeHH) + ":" + returnShowTimePiece(lockObject.startTimeMM) + ":" + returnShowTimePiece(lockObject.startTimeSS);
		startTimeValueSpanList[1].innerText = "";
		startTimeValueSpanList[2].innerText = "";
		
		endTimeValueSpanList[0].innerText = returnShowTimePiece(lockObject.endTimeHH) + ":" + returnShowTimePiece(lockObject.endTimeMM) + ":" + returnShowTimePiece(lockObject.endTimeSS);
		endTimeValueSpanList[1].innerText = "";
		endTimeValueSpanList[2].innerText = "";
		
		optionContentLiList[1].style.display = "block";
		optionContentLiList[2].style.display = "block";
	}
}

var listFormLiList;
var optionContentLiList;
var startTimeValueSpanList;
var endTimeValueSpanList;
function init()
{
	timeoutInit();
	
	optionContentLiList = $("optionContent").getElementsByTagName("li");
	startTimeValueSpanList = $("startTimeValue").getElementsByTagName("span");
	endTimeValueSpanList = $("endTimeValue").getElementsByTagName("span");
	listFormLiList = $("listForm").getElementsByTagName("li");
	
	
	$("titleContent").getElementsByTagName("span")[0].innerText = timeIntervalTitleWord;
	var optionContentLabelList = $("optionContent").getElementsByTagName("label");
	for(var i = 0; i < 3; i++)
	{
		optionContentLabelList[i].innerText = timeIntervalOptionWords[i];
	}
	
	
	lockObject = setting.getTimeIntervalLock();
	$("lockTypeValue").innerText = timeIntervalLockTypeValues[lockObject.lockType];
	
	initMenuOfLockTypeStatus(lockObject.lockType);
	
	list_position_h = 0;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	addMouseListener();
}

function uninit()
{
	if(list_position_h == 0)
	{
		setIntervalLock("type");
	}
	else if(list_position_h == 1)
	{
		setIntervalLock("startTime");
	}
	else if(list_position_h == 2)
	{
		setIntervalLock("endTime");
	}
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
		optionContentLiList[i].setAttribute("newAttr",i);
		optionContentLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu"){
					list_position_h = parseInt(this.getAttribute("newAttr"));
					$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
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



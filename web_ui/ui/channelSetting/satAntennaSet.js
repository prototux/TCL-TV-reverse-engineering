/******************** created by chenhua ***********************/
var titleWords				= top.chScanOptions[6];
var satTSetOptions 			= top.chSatSetupOptions;
var antennaTypeEnum			= top.chSatAntennaType;
var tunerName				= top.chSatUserBands;
var bandFreqEnum			= top.chSatSetupOthers[0];

var satAntennaType			= 0;
var satTuner				= 0;
var satBandFreqIndex				= 0;
var list_position_h			= 0;
var form_position_h			= 0;
var focusOn 				= "menu"; 				//menu,type,tuner,bandFreq,bandFreqInput
var BAND_FREQUENCY_MAX_LENGTH= 4;





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

var programStatus 				= 0;					//0 无节目，1 有节目,无频道列表
var num_position				= 0;					//当前焦点在时间存储数组(如date_only/time_only)中的下标位置

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var DATE_LENGTH					= 8;
var TIME_LENGTH					= 6;
var timeLinkChar				= ":";
var dateLinkChar				= "-";
var mainFocus               	= ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];

document.onnotify 				= notifyProcess;

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}


function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
        case top.E_SS_NO_CI_MODULE:
        case top.E_SS_CI_PLUS_AUTHENTICATION:
        case top.E_CI_CARD_INSERTED:
        case top.E_CI_CARD_REMOVE:
        case top.E_CI_DATA_READY:
        case top.E_CI_EXIT_CI:
        case top.E_CI_UPGR_INPROGRESS:
        case top.E_CI_UPGR_NOT_INPROGRESS:
        case top.E_CI_OP_UPDATE_INFO:
        case top.E_CI_OP_UPDATE_CHANNEL:
        case top.E_CI_OP_UPDATE_NIT:
        case top.E_CI_END:
        case top.E_CI_MHEG_OPEN:
        case top.E_CI_MHEG_CLOSE:
        case top.E_CI_CAM_NAME_READY:
            break;
		default:
			top.systemEventProc(evt);
			break;
	}
}
function keyproc(evt)
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
			if(focusOn == "bandFreqInput")
			{
				checkNumInput(keycode);
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
		if(satAntennaType == 0)//single cable
		{
			if(list_position_h >= 2)
			{
				list_position_h = 0;
			}
			else
			{
				list_position_h++;
			}
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "type")
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
	else if(focusOn == "tuner")
	{
		if(tunerCount <= 5)
		{
			if(form_position_h >= (tunerCount - 1))
			{
				form_position_h = 0;
			}
			else
			{
				form_position_h++;
			}
		}
		else
		{
			if((form_position_h + offset) >= (tunerCount - 1))
			{
				form_position_h = 0;
				offset = 0;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = tunerName[i + offset];
				}
			}
			else if(form_position_h >= 4)//form_position_h < (tunerCount - 1)
			{
				offset++;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = tunerName[i + offset];
				}
			}
			else
			{
				form_position_h++;
			}
		
			if(offset > 0)
			{
				$("listUpImg").style.display = "block";
			}
			else
			{
				$("listUpImg").style.display = "none";
			}
			
			if((offset + 4) >= (tunerCount - 1))
			{
				$("listDownImg").style.display = "none";
			}
			else
			{
				$("listDownImg").style.display = "block";
			}
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP+ "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "bandFreq")
	{
		if(bandFreqList.length <= 5)
		{
			if(form_position_h >= (bandFreqList.length - 1))
			{
				form_position_h = 0;
			}
			else
			{
				form_position_h++;
			}
		}
		else
		{
			if((form_position_h + offset)  >= (bandFreqList.length - 1))
			{
				form_position_h = 0;
				offset = 0;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = bandFreqList[i + offset + 1];
				}
			}
			else if(form_position_h >= 4)//form_position_h < (tunerCount - 1)
			{
				offset++;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = bandFreqList[i + offset + 1];
				}
			}
			else
			{
				form_position_h++;
			}
			if(offset > 0)
			{
				$("listUpImg").style.display = "block";
			}
			else
			{
				$("listUpImg").style.display = "none";
			}
			
			if((offset + 4) >= (bandFreqList.length - 1))
			{
				$("listDownImg").style.display = "none";
			}
			else
			{
				$("listDownImg").style.display = "block";
			}
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
}

function toUp()
{
	if(focusOn == "menu")
	{	
		if(satAntennaType == 0)//single cable
		{
			if(list_position_h <= 0)
			{
				list_position_h = 2;
			}
			else
			{
				list_position_h--;
			}
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "type")
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
	else if(focusOn == "tuner")
	{
		if(form_position_h > 0)
		{
			form_position_h--;
		}
		else
		{
			if(tunerCount > 5)
			{
				if(offset > 0)
				{
					offset--;
				}
				else
				{
					form_position_h = 4;
					offset = (tunerCount - 1) - form_position_h;
				}
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = tunerName[i + offset];
				}
				if(offset > 0)
				{
					$("listUpImg").style.display = "block";
				}
				else
				{
					$("listUpImg").style.display = "none";
				}
				
				if((offset + 4) >= (tunerCount - 1))
				{
					$("listDownImg").style.display = "none";
				}
				else
				{
					$("listDownImg").style.display = "block";
				}
			}
			else
			{
				form_position_h = tunerCount - 1;
			}
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "bandFreq")
	{
		if(form_position_h > 0)
		{
			form_position_h--;
		}
		else
		{
			if(bandFreqList.length > 5)
			{
				if(offset > 0)
				{
					offset--;
				}
				else
				{
					form_position_h = 4;
					offset = (bandFreqList.length - 1) - form_position_h;
				}
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = bandFreqList[i + offset + 1];
				}
				
				if(offset > 0)
				{
					$("listUpImg").style.display = "block";
				}
				else
				{
					$("listUpImg").style.display = "none";
				}
				
				if((offset + 4) >= (bandFreqList.length - 1))
				{
					$("listDownImg").style.display = "none";
				}
				else
				{
					$("listDownImg").style.display = "block";
				}
			}
			else
			{
				form_position_h = bandFreqList.length - 1;
			}
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	
}

function doEnter()
{
	if(focusOn == "menu")
	{
		$("fourthListFocus").src = mainFocus[1];
		switch(list_position_h)
		{
			case 0:
				initAntennaType(satAntennaType);
				break;
			case 1:
				initTuner(satTuner);
				break;
			case 2:
				initBandFreq(satBandFreqIndex);
				break;
			default:	
				break;
		}
	}
	else if(focusOn == "type")
	{
		$("fourthListFocus").src = mainFocus[0];
		satAntennaType = form_position_h;
		antennaInfo.type = satAntennaType;
		initMenu();
	}
	else if(focusOn == "tuner")
	{
		$("fourthListFocus").src = mainFocus[0];
		satTuner = form_position_h + offset;
		antennaInfo.cur_band_index = satTuner;
		//重新获取数据
		initMenu();
		
		$("tunerContent").innerHTML = tunerName[satTuner];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "bandFreq")
	{
		$("fourthListFocus").src = mainFocus[0];
		satBandFreqIndex = form_position_h + offset;//bandFreqList
		antennaInfo.cur_band_freq_index = satBandFreqIndex;
		if(satBandFreqIndex == (bandFreqList.length - 1))//user defined 
		{
			initBandFreqInput();
		}
		else
		{
			//channel.setSatelliteBandFreq(satBandFreqIndex,bandFreqList[satBandFreqIndex]/*当前此参数不起作用*/);
			bandFreqContentSpanList[0].innerHTML = bandFreqList[satBandFreqIndex];
			bandFreqContentSpanList[1].innerHTML = "";
			bandFreqContentSpanList[2].innerHTML = "";
			focusOn = "menu";
		}
		
		$("listForm").style.display = "none";
	}
	else if(focusOn == "bandFreqInput")
	{
		channel.testLog("in doEnter satBandFreqIndex = " + satBandFreqIndex + ",bandFreqList[satBandFreqIndex] = " + bandFreqList[satBandFreqIndex]);
		channel.setSatelliteBandFreq(satBandFreqIndex,bandFreqList[satBandFreqIndex]/*当前此参数起作用*/);
		
		$("bandFreqContent").style.background = "none";
		bandFreqContentSpanList[0].innerHTML = bandFreqList[satBandFreqIndex];
		bandFreqContentSpanList[1].innerHTML = "";
		bandFreqContentSpanList[2].innerHTML = "";
		focusOn = "menu";
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(3);
	}
	else if(focusOn == "type" || focusOn == "tuner" || focusOn == "bandFreq")
	{
		$("fourthListFocus").src = mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
}
function toLeft()
{
	if(focusOn == "bandFreqInput")
	{
		if(strPosition <= 0)
		{
			if(bandFreqList[satBandFreqIndex].length == BAND_FREQUENCY_MAX_LENGTH)
			{
				strPosition = BAND_FREQUENCY_MAX_LENGTH - 1;
				strFocusFlag = 0;
			}
			else
			{
				strPosition = bandFreqList[satBandFreqIndex].length;
				strFocusFlag = 1;
			}
		}
		else
		{
			//无论strFocusFlag为0还是1操作相同
				strPosition--;
				strFocusFlag = 0;
		}
		sliceStringToTags(bandFreqContentSpanList,bandFreqList[satBandFreqIndex],strPosition,strFocusFlag,BAND_FREQUENCY_MAX_LENGTH);
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "bandFreqInput")
	{
		if(strPosition >= (BAND_FREQUENCY_MAX_LENGTH - 1) || strPosition == bandFreqList[satBandFreqIndex].length)
		{
			strPosition = 0;
			strFocusFlag = 0;
		}
		else if(strPosition == (satBandFreqIndex.length - 1))
		{
			strPosition++;
			strFocusFlag = 1;
		}
		else
		{
			if(strFocusFlag == 1)
			{
				//strPosition不变
				strFocusFlag = 0;
			}
			else
			{
				strPosition++;
				strFocusFlag = 0;
			}
		}
		
		sliceStringToTags(bandFreqContentSpanList,bandFreqList[satBandFreqIndex],strPosition,strFocusFlag,BAND_FREQUENCY_MAX_LENGTH);
	}
	else
	{
		doEnter();
	}
}

/*
描述：初始化BandFreqInput
参数：
返回值：
全局变量：form_position_h,offset
*/
var strPosition = 0;//字串焦点字符的下标
var strFocusFlag = 0;//0 字符，1 “_”
function initBandFreqInput()
{
	strPosition = 0;
	strFocusFlag = 0;
	bandFreqList[satBandFreqIndex] = bandFreqList[0];//初始化设置为第一个bandFreq
	sliceStringToTags(bandFreqContentSpanList,bandFreqList[satBandFreqIndex],strPosition,strFocusFlag,BAND_FREQUENCY_MAX_LENGTH);
	$("bandFreqContent").style.background = "#333";
	focusOn = "bandFreqInput";
}

/*
frequency and symbol rate时使用
*/
var inputChar;
function checkNumInput(keycode)
{
	inputChar = keycode - 48;
	bandFreqList[satBandFreqIndex] = "" + inputNumToNumber(bandFreqList[satBandFreqIndex],strPosition,strFocusFlag,inputChar,BAND_FREQUENCY_MAX_LENGTH);
	sliceStringToTags(bandFreqContentSpanList,bandFreqList[satBandFreqIndex],strPosition,strFocusFlag,BAND_FREQUENCY_MAX_LENGTH);
}

/*
描述：根据输入的数字填写数值值并将当前字符焦点下移一位
参数：numString：原来有的数值串；index：焦点所在索引值；cursorFlag：焦点类型（0表示当前文字是焦点，1表示焦点是“_”）；maxLength:允许的字串最大长度
全局变量：strPosition，strFocusFlag
返回值：更改后的字符串
*/
function inputNumToNumber(numString,index,cursorFlag,num,maxLength)
{
	channel.testLog(" in inputNumToNumber numString = " + numString + ",index = " + index + ",cursorFlag = " + cursorFlag + ",num = " + num + ",maxLength = " + maxLength);
	var str = "" + numString;
	if(str.length > maxLength)
	{
		return;//str = str.substring(0,maxLength);
	}
	if(index < 0 || index >= maxLength)
	{
		return;
	}
	
	if(index == 0)
	{
		if(num == 0 || num == "0")
		{
			if(cursorFlag == 0)//字符
			{
				var value = "" + num + str.substring(1);
			}
			else
			{
				var value = "" + num + str;
			}
			str = "" + parseInt(value,10);
			strPosition = 0;
			strFocusFlag = 0;
			return str;
		}
		else
		{
			if(str.length == 0)
			{
				str = num;
				strPosition++;
				strFocusFlag = 1;
			}
			else if(str.length == 1)
			{
				if(cursorFlag == 0)//字符
				{
					str = num;
					strPosition++;
					strFocusFlag = 1;
				}
				else
				{
					str = num + str;
					strPosition++;
					strFocusFlag = 0;
				}
			}
			else
			{
				if(cursorFlag == 0)//字符
				{
					str = num + str.substring(index + 1);
					strPosition++;
					strFocusFlag = 0;
				}
				else
				{
					str = num + str;
					strPosition++;
					strFocusFlag = 0;
				}
			}
		}
	}
	else if(index == (maxLength - 1))
	{
		str = str.substring(0,maxLength - 1) + num;
		strPosition = 0;
		strFocusFlag = 0;
	}
	else
	{
		if(index == str.length)//如类似XXXXX_输入一个字母的时候
		{
			str = str + num;
			strPosition++;
			strFocusFlag = 1;
		}
		else
		{
			if(cursorFlag == 0)
			{
				str = str.substring(0,index) + num + str.substring(index + 1);
			}
			else//如类似XXXX_X输入一个字母的时候
			{
				str = str.substring(0,index) + num + str.substring(index);
			}
			strPosition++;
			strFocusFlag = 0;
		}
	}
	return str;
}
/*
描述：根据焦点的index和焦点是“_”还是落在字母上把输入的字串分到3个相同的标签中，并让当前的焦点显示为红色；
参数：tagList：存放切分后的字串的容器；string：要切分的字符串；index：焦点所在索引值；cursorFlag：焦点类型（0表示当前文字是焦点，1表示焦点是“_”）；maxLength:允许的字串最大长度
全局变量：strPosition，strFocusFlag
返回值：//更改后的字符串
*/
var strPosition = 0;//字串焦点字符的下标
var strFocusFlag = 0;//0 字符，1 “_”
function sliceStringToTags(tagList,string,index,cursorFlag,maxLength)
{
	channel.testLog("in sliceStringToTags string=" + string + ",index=" + index + ",cursorFlag=" + cursorFlag + ",maxLength=" + maxLength);
	channel.testLog("in sliceStringToTags strPosition=" + strPosition + ",strFocusFlag=" + strFocusFlag);
	tagList[0].style.color="#FFF";
	tagList[1].style.color="#F00";
	tagList[2].style.color="#FFF";
	var str = "" + string;
	if(str.length > maxLength)
	{
		str = str.substring(0,maxLength);
	}
	channel.testLog("in sliceStringToTags str=" + str + ",str.length=" + str.length);
	if(index < 0)
	{
		if(str.length == 0)
		{
			tagList[0].innerHTML = "";
			tagList[1].innerHTML = "_";
			tagList[2].innerHTML = "";
			strPosition = 0;
			strFocusFlag = 1;
		}
		else if(str.length >= maxLength)
		{
			tagList[0].innerHTML = str.substring(0,maxLength - 1);
			tagList[1].innerHTML = str.substring(maxLength - 1);
			tagList[2].innerHTML = "";
			strPosition = maxLength - 1;
			strFocusFlag = 0;
		}
		else
		{
			tagList[0].innerHTML = str;
			tagList[1].innerHTML = "_";
			tagList[2].innerHTML = "";
			strPosition = str.length;
			strFocusFlag = 1;//"_"
		}
	}
	else if(index == 0)
	{
		channel.testLog("in sliceStringToTags index == 0");
		if(str.length == 0)
		{
			tagList[0].innerHTML = "";
			tagList[1].innerHTML = "_";
			tagList[2].innerHTML = "";
			strPosition = 0;
			strFocusFlag = 1;
		}
		else
		{
			channel.testLog("in sliceStringToTags str.length > 0");
			if(cursorFlag == 0)//字符
			{
				tagList[0].innerHTML = "";
				tagList[1].innerHTML = str.substring(0,1);
				tagList[2].innerHTML = str.substring(1);
				strPosition = 0;
				strFocusFlag = 0;
				channel.testLog("in sliceStringToTags end  cursorFlag == 0");
			}
			else
			{
				tagList[0].innerHTML = "";
				tagList[1].innerHTML = "_";
				tagList[2].innerHTML = str;
				strPosition = 0;
				strFocusFlag = 1;
			}
		}
	}
	else if(index > str.length)//XXX_再往右移动，需要变成XXX
	{
		tagList[0].innerHTML = "";
		tagList[1].innerHTML = str.substring(0,1);
		tagList[2].innerHTML = str.substring(1);
		strPosition = 0;
		strFocusFlag = 0;
	}
	else if(index == str.length)//显示XXX_
	{
		tagList[0].innerHTML = str;
		tagList[1].innerHTML = "_";
		tagList[2].innerHTML = "";
		strPosition = index;
		strFocusFlag = 1;
	}
	else//index > 0 && index < str.length
	{
		if(cursorFlag == 0)//字符
		{
			tagList[0].innerHTML = str.substring(0,index);
			tagList[1].innerHTML = str.substring(index,index + 1);
			tagList[2].innerHTML = str.substring(index + 1);
			strPosition = index;
			strFocusFlag = 0;
		}
		else
		{
			tagList[0].innerHTML = str.substring(0,index);
			tagList[1].innerHTML = "_";
			tagList[2].innerHTML = str.substring(index);
			strPosition = index;
			strFocusFlag = 1;
		}
	}
	channel.testLog("in sliceStringToTags strPosition=" + strPosition);
	//return str;
}

/*
描述：初始化BandFreq列表
参数：index:satBandFreqIndex
返回值：
全局变量：form_position_h,offset,bandFreqList
*/
function initBandFreq(index)
{
	var sum = bandFreqList.length;
	var wordsList = new Array(sum);
	for(var i = 0; i < sum; i++)
	{
		if(i == (sum - 1))
		{
			wordsList[i] = bandFreqEnum;
		}
		else
		{
			wordsList[i] = bandFreqList[i];
		}
	}
	
	if(sum <= 5)
	{
		form_position_h = index;
		offset = 0;/*
		for(var i = 0; i < 5; i++)
		{
			if(i < sum)
			{
				if(i == (sum - 1))
				{
					listFormLiList[i].innerHTML = bandFreqEnum;
				}
				else
				{
					listFormLiList[i].innerHTML = bandFreqList[i];
				}
			}
			else
			{
				listFormLiList[i].innerHTML = "";
			}
		}*/
	}
	else
	{
		if(index <= 4)
		{
			form_position_h = index;
			offset = 0;
		}
		else
		{
			form_position_h = 4;
			offset = index - form_position_h;
		}/*
		for(var i = 0; i < 5; i++)
		{
			if((i + offset + 1) == (sum - 1))
			{
				listFormLiList[i].innerHTML = bandFreqEnum;
			}
			else
			{
				listFormLiList[i].innerHTML = bandFreqList[i + offset + 1];
			}
		}*/
	}
	
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,wordsList,sum,form_position_h,offset);
	focusOn = "bandFreq";
}

/*
描述：初始化tuner列表
参数：value:satTuner
返回值：
全局变量：form_position_h,offset,tunerCount
*/
var tunerCount = 0;
var offset = 0;
function initTuner(value)
{
	tunerCount = antennaInfo.band_count;//tunerCount;
	//channel.testLog("in initTuner value = " + value + ",tunerCount = " + tunerCount);
	if(value >= tunerCount)
	{
		return;
	}
	if(tunerCount <= 5)
	{
		form_position_h = value;
		offset = 0;/*
		for(var i = 0; i < 5; i++)
		{
			if(i < tunerCount)
			{
				listFormLiList[i].innerHTML = tunerName[i];
			}
			else
			{
				listFormLiList[i].innerHTML = "";
			}
		}*/
	}
	else
	{
		if(value <= 4)
		{
			form_position_h = value;
			offset = 0;
		}
		else
		{
			form_position_h = 4;
			offset = value - form_position_h;
		}/*
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = tunerName[i + offset];
		}*/
	}
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,tunerName,tunerCount,form_position_h,offset);
	focusOn = "tuner";
}


/*
描述：根据satellite antenna type值初始化sat antenna type选择项
参数：value：satAntennaType
全局变量：form_position_h
*/
function initAntennaType(value)
{
	form_position_h = value;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,antennaTypeEnum,2,form_position_h,0);
	focusOn = "type";
}

/*
描述：根据satellite antenna type初始化menu菜单
参数：
全局变量：satTuner，satBandFreqIndex，bandFreqList
*/
var bandFreqList;
function initMenu()
{
	antennaInfo = channel.getSatelliteAntennaInfo();
	satAntennaType = antennaInfo.type;
	
	if(satAntennaType == 0)//signal cable
	{
		satTuner = antennaInfo.cur_band_index;//satelliteTuner;
		satBandFreqIndex = antennaInfo.cur_band_freq_index;//satelliteBandFreq;
		channel.testLog("in satAntennaSet initMenu satAntennaType = " + satAntennaType + ", satTuner = " + satTuner + ",satBandFreqIndex = " + satBandFreqIndex);
		var dataList = channel.satelliteBandFreqList().split("#");
		channel.testLog("in initBandFreq length =" + dataList.length + ",dataList = " + dataList);
		bandFreqList = new Array(dataList.length);
		var i = 0;
		for(i = 0; i < dataList.length; i++)
		{
			bandFreqList[i] = dataList[i];
		}
	
		$("antennaTypeContent").innerHTML = antennaTypeEnum[satAntennaType];
		$("tunerContent").innerHTML = tunerName[satTuner];
		bandFreqContentSpanList[0].innerHTML = bandFreqList[satBandFreqIndex];
		bandFreqContentSpanList[1].innerHTML = "";
		bandFreqContentSpanList[2].innerHTML = "";
		fourthMenuRightLiList[2].style.display = "block";
		fourthMenuRightLiList[3].style.display = "block";
	}
	else
	{
		$("antennaTypeContent").innerHTML = antennaTypeEnum[satAntennaType];
		fourthMenuRightLiList[2].style.display = "none";
		fourthMenuRightLiList[3].style.display = "none";
	}
	$("listForm").style.display = "none";
	focusOn = "menu";
}

var fourthMenuRightLiList;
var listFormLiList;
var bandFreqContentSpanList;
var antennaInfo;
function init()
{
	timeoutInit();
	bandFreqContentSpanList = $("bandFreqContent").getElementsByTagName("span");
	fourthMenuRightLiList = $("fourthMenuRight").getElementsByTagName("li");
	listFormLiList = $("listForm").getElementsByTagName("li");

	
	var fourthMenuRightlabelList = $("fourthMenuRight").getElementsByTagName("label");
	fourthMenuRightlabelList[0].innerHTML = titleWords;
	for(var i = 1; i < 4; i++)
	{
		fourthMenuRightlabelList[i].innerHTML = satTSetOptions[i - 1];
	}
	
	initMenu();
	
	list_position_h = 0;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	$("listForm").style.display = "none";
	
	$("bandFreqContent").style.background = "none";
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
		fourthMenuRightLiList[i].setAttribute("newAttr",i);
		fourthMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "bandFreqInput")
				{
					doEnter();
				}

				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
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

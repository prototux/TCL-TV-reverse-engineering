/*************** created by chenhua ***************************/
var initialTitleWords 		= top.initialTitle[1];
var initStepWords			= top.initialOptions[3];
var remindWords				= top.initChPrompt[6];
var hotkeyWords				= ["0-9",top.initialHotkeys[1],top.others[8]];
var modulationWords			= top.modulation;
var scanOptionWords 		= [top.chScanPara[0],top.chScanPara[1],top.chScanPara[2],top.chScanPara[3],top.chScanPara[8]];
var scanModeWords			= top.chScanMode;
var auto					= top.manualAuto[1];
var searchW					= top.others[8];

var scanMode				= 0;			//0 others full,1 others advanced ;2 others Quick,3 UPC,4 Ziggo
var operator				= "";			//Ziggo,UPC,Others
var list_position_h 		= 0;
var channelType				= "";			//analogue+digital,digital,analogue
var numPosition 			= 0;			//数字输入焦点位置:0-5
var numStartPosition		= 0;			//当前焦点下数的最高位在页面上所有用于显示数的span框的下标位置（0-5），如113有三位，起始位置是第3位
var numStartPosition2		= 0;			//当搜台框第二个需要输入数字的输入框使用
var numStartPosition3		= 0;			//当搜台框第三个需要输入数字的输入框使用
var country 				= 0;
var buttonImgs				= ["../images/Input_box-1-Bg.png","../images/Focus-02.png"];
var channel 				= top.g_channel;
var setting 				= top.g_setting;
document.onnotify 			= notifyProcess;
document.onkeydown 			= keyproc;

var SCAN_FORM_HEIGHT_START	=0;				//搜台框允许的最小高度值
var SCAN_FOCUS_START		= 0;			//搜台框输入框焦点起始位置
var SCAN_FORM_STEP			= 80;			//当搜台框中每增加一个参数控制项需要增加的高度


function notifyProcess(evt)
{
    var msg = evt.which;
    //全局消息
    switch(msg)
    {
	    case top.E_READY_TO_CHANGE_SCART://ready to cart
	        top.isChangeToScartAfterInit = 1;
	    	break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_DATABASE_FILE_DAMAGE:
		{
			top.systemEventProc(evt);
		}
		break;
	    default:
	        break;
    }
}

function keyproc(e)
{
	var ret = true;
	var keycode = e.which;
	//快捷键处理
	switch (keycode)
	{
		case top.VK_POWER://power
			top.keyDownProcess(e);
			break;
		case top.VK_LEFT:
			// left
			toLeft();
			ret = false;
			break;
		case top.VK_UP:
			// up
			toUp();
			ret = false;
			//alert("上");
			break;
		case top.VK_DOWN:
			//down
			toDown();
			ret = false;
			//alert("下")
			break;
		case top.VK_RIGHT:
			toRight();
			break;
		case top.VK_ENTER:
			doEnter();
			ret = false;
			break;
		case top.VK_RED:
			top.jumpPage();
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
			channel.testLog("channelType = " +　channelType);
			if(country == 7)//finland only have quick search
			{
				return;
			}
			
			if(scanMode == 4 || scanMode == 3)//ziggo 或 UPC
			{
				if(list_position_h == 0)
				{
					doFreNumber(e.which - 48,autoFreqContentSpanList);
				}
				else if(list_position_h == 2)
				{
					doSybNumber(e.which - 48,autoSybContentSpanList);
				}
				else if(list_position_h == 3)
				{
					doNetNumber(e.which - 48,autoNetContentSpanList);
				}
			}
			else if(scanMode == 1)//advanced
			{
				if(list_position_h == 1)
				{
					doFreNumber(e.which - 48,autoFreqContentSpanList);
				}
				else if(list_position_h == 3)
				{
					doSybNumber(e.which - 48,autoSybContentSpanList);
				}
				else if(list_position_h == 4)
				{
					doNetNumber(e.which - 48,autoNetContentSpanList);
				}
			}
			break;
		default:
			ret = true;
			break;
	}
	return ret;

}
function $(id)
{
	return document.getElementById(id);
}
function toLeft()
{
	if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
	{
		if(list_position_h == 0)
		{
			doLeftFreqInNumberInput(autoFreqContentSpanList);
		}
		else if(list_position_h == 1)
		{
			if(modulation <= 0)
			{
				modulation = 5;
			}
			else
			{
				modulation--;
			}
			$("autoMoContent").innerHTML = modulationWords[modulation];
		}
		else if(list_position_h == 2)
		{
			doLeftSybInNumberInput(autoSybContentSpanList);
		}
		else if(list_position_h == 3)
		{
			doLeftNetInNumberInput(autoNetContentSpanList);
		}
	}
	else if(scanMode == 1)//advanced
	{
		if(list_position_h == 0)
		{
			if(channel.getResetQuickStatus(country))//判断是否有快速搜台选项,有快速搜台,当前只有德国)
			{
				if(scanMode <= 0)
				{
					scanMode = 2;//quick
				}
				else
				{
					scanMode--;
				}
			}
			else
			{
				if(scanMode <= 0)
				{
					scanMode = 1;//advanced
				}
				else
				{
					scanMode--;
				}
			}
			initAutoScan(scanMode,country);
		}
		else if(list_position_h == 1)
		{
			doLeftFreqInNumberInput(autoFreqContentSpanList);
		}
		else if(list_position_h == 2)
		{
			if(modulation <= 0)
			{
				modulation = 5;
			}
			else
			{
				modulation--;
			}
			$("autoMoContent").innerHTML = modulationWords[modulation];
		}
		else if(list_position_h == 3)
		{
			doLeftSybInNumberInput(autoSybContentSpanList);
		}
		else if(list_position_h == 4)
		{
			doLeftNetInNumberInput(autoNetContentSpanList);
		}
	}
	else if(scanMode == 0  || scanMode == 2)
	{
		if(list_position_h == 0)
		{
			if(channel.getResetQuickStatus(country))//判断是否有快速搜台选项,有快速搜台,当前只有德国)
			{
				if(scanMode <= 0)
				{
					scanMode = 2;//quick
				}
				else
				{
					scanMode--;
				}
			}
			else
			{
				if(scanMode <= 0)
				{
					scanMode = 1;//advanced
				}
				else
				{
					scanMode--;
				}
			}
			initAutoScan(scanMode,country);
		}
	}
}

function toRight()
{
	if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
	{
		if(list_position_h == 0)
		{
			doRightFreqInNumberInput(autoFreqContentSpanList);
		}
		else if(list_position_h == 1)
		{
			if(modulation >= 5)
			{
				modulation = 0;
			}
			else
			{
				modulation++;
			}
			$("autoMoContent").innerHTML = modulationWords[modulation];
		}
		else if(list_position_h == 2)
		{
			doRightSybInNumberInput(autoSybContentSpanList);
		}
		else if(list_position_h == 3)
		{
			doRightNetInNumberInput(autoNetContentSpanList);
		}
	}
	else if(scanMode == 1)//advanced
	{
		if(list_position_h == 0)
		{
			if(channel.getResetQuickStatus(country))//判断是否有快速搜台选项,有快速搜台,当前只有德国)
			{
				if(scanMode >= 2)
				{
					scanMode = 0;//full
				}
				else
				{
					scanMode++;
				}
			}
			else
			{
				if(scanMode >= 1)
				{
					scanMode = 0;//advanced
				}
				else
				{
					scanMode++;
				}
			}
			initAutoScan(scanMode,country);
		}
		else if(list_position_h == 1)
		{
			doRightFreqInNumberInput(autoFreqContentSpanList);
		}
		else if(list_position_h == 2)
		{
			if(modulation <= 0)
			{
				modulation = 5;
			}
			else
			{
				modulation--;
			}
			$("autoMoContent").innerHTML = modulationWords[modulation];
		}
		else if(list_position_h == 3)
		{
			doRightSybInNumberInput(autoSybContentSpanList);
		}
		else if(list_position_h == 4)
		{
			doRightNetInNumberInput(autoNetContentSpanList);
		}
	}
	else if(scanMode == 0  || scanMode == 2)
	{
		if(list_position_h == 0)
		{
			if(channel.getResetQuickStatus(country))//判断是否有快速搜台选项,有快速搜台,当前只有德国)
			{
				if(scanMode >= 2)
				{
					scanMode = 0;//full
				}
				else
				{
					scanMode++;
				}
			}
			else
			{
				if(scanMode >= 1)
				{
					scanMode = 0;//advanced
				}
				else
				{
					scanMode++;
				}
			}
			initAutoScan(scanMode,country);
		}
	}
}


function toUp()
{
	$("number").style.display = "none";
	if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
	{
		if(list_position_h <= 0)
		{
			correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
			autoFreqContentSpanList[numPosition].style.color = "#fff";
			list_position_h = 4;
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[1] + ")";
			$("scanInputFocus").style.display = "none";
			$("search").style.display = "block";
		}
		else if(list_position_h == 1)
		{
			list_position_h--;
			numPosition = numStartPosition;
			autoFreqContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 2)
		{
			correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
			autoSybContentSpanList[numPosition].style.color = "#fff";
			list_position_h --;
		}
		else if(list_position_h == 3)
		{
			correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
			autoNetContentSpanList[numPosition].style.color = "#fff";
			numPosition = numStartPosition2;
			list_position_h--;
			autoSybContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 4)
		{
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[0] + ")";
			$("scanInputFocus").style.display = "block";
			$("search").style.display = "none";
			
			list_position_h--;
			numPosition = numStartPosition3;
			autoNetContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_STEP + "px";
	}
	else if(scanMode == 1)//advanced
	{
		if(list_position_h <= 0)
		{
			list_position_h = 5;
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[1] + ")";
			$("scanInputFocus").style.display = "none";
			$("search").style.display = "block";
		}
		else if(list_position_h == 1)
		{
			correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
			autoFreqContentSpanList[numPosition].style.color = "#fff";
			list_position_h--;
		}
		else if(list_position_h == 2)
		{
			list_position_h--;
			numPosition = numStartPosition;
			autoFreqContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 3)
		{
			correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
			autoSybContentSpanList[numPosition].style.color = "#fff";
			list_position_h --;
		}
		else if(list_position_h == 4)
		{
			correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
			autoNetContentSpanList[numPosition].style.color = "#fff";
			numPosition = numStartPosition2;
			list_position_h--;
			autoSybContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 5)
		{
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[0] + ")";
			$("scanInputFocus").style.display = "block";
			$("search").style.display = "none";
			list_position_h--;
			numPosition = numStartPosition3;
			autoNetContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_STEP + "px";
	}
	else if(scanMode == 2 || scanMode == 0)//full or quick
	{
		if(list_position_h <= 0)
		{
			list_position_h = 1;
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[1] + ")";
			$("scanInputFocus").style.display = "none";
			$("search").style.display = "block";
		}
		else
		{
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[0] + ")";
			$("scanInputFocus").style.display = "block";
			$("search").style.display = "none";
			list_position_h--;
		}
		$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_STEP + "px";
	}
}
function toDown()
{
	$("number").style.display = "none";
	if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
	{
		if(list_position_h == 4)
		{
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[0] + ")";
			$("scanInputFocus").style.display = "block";
			$("search").style.display = "none";
			list_position_h = 0;
			numPosition = numStartPosition;
			autoFreqContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 3)
		{
			correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
			autoNetContentSpanList[numPosition].style.color = "#fff";
			list_position_h = 4;
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[1] + ")";
			$("scanInputFocus").style.display = "none";
			$("search").style.display = "block";
		}
		else if(list_position_h == 2)
		{
			correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
			autoSybContentSpanList[numPosition].style.color = "#fff";
			list_position_h++;
			numPosition = numStartPosition3;
			autoNetContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 1)
		{
			list_position_h++;
			numPosition = numStartPosition2;
			autoSybContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 0)
		{
			correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
			autoFreqContentSpanList[numPosition].style.color = "#fff";
			list_position_h++;
		}
		$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_STEP + "px";
	}
	else if(scanMode == 1)//advanced
	{
		if(list_position_h == 5)
		{
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[0] + ")";
			$("scanInputFocus").style.display = "block";
			$("search").style.display = "none";
			list_position_h = 0;
		}
		else if(list_position_h == 4)
		{
			correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
			autoNetContentSpanList[numPosition].style.color = "#fff";
			list_position_h = 5;
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[1] + ")";
			$("scanInputFocus").style.display = "none";
			$("search").style.display = "block";
		}
		else if(list_position_h == 3)
		{
			correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
			autoSybContentSpanList[numPosition].style.color = "#fff";
			list_position_h++;
			numPosition = numStartPosition3;
			autoNetContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 2)
		{
			list_position_h++;
			numPosition = numStartPosition2;
			autoSybContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		else if(list_position_h == 1)
		{
			correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
			autoFreqContentSpanList[numPosition].style.color = "#fff";
			list_position_h++;
		}
		else if(list_position_h == 0)
		{
			list_position_h++;
			numPosition = numStartPosition;
			autoFreqContentSpanList[numPosition].style.color = "#f00";
			$("number").style.display = "block";
		}
		$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_STEP + "px";
	}
	else if(scanMode == 2 || scanMode == 0)//full or quick
	{
		if(list_position_h <= 0)
		{
			list_position_h = 1;
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[1] + ")";
			$("scanInputFocus").style.display = "none";
			$("search").style.display = "block";
		}
		else
		{
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[0] + ")";
			$("scanInputFocus").style.display = "block";
			$("search").style.display = "none";
			list_position_h--;
		}
		$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_STEP + "px";
	}

}

function doEnter()
{
	if(((scanMode == 4/*Ziggo*/ || scanMode == 3/*UPC*/) && list_position_h == 4) || (scanMode == 1/*Advanced*/ && list_position_h == 5))
	{
		var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
		var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
		var n = netWords[5] + netWords[4]*10 + netWords[3]*100 + netWords[2]*1000 + netWords[1]*10000 + netWords[0]*100000;
		if((f == 0 && frequency < 0) || (s == 0 && symbolRate < 0) || (n == 0 && (networkId < 0 && networkId > -10))/*非Auto状态*/)//缺少参数
		{
			document.location.href = "initChDvbcInstScanType.html";
			return;
		}
		else
		{
			frequency = f;
			symbolRate = s;
			networkId = n;
			document.location.href = "initChDvbcScan.html?" + channelType + "&" + scanMode +  "&" + frequency + "&" + freqTo + "&" + modulation + "&" + symbolRate + "&" + networkId;
		}
	}
	else if((scanMode == 0 || scanMode == 2)/*full and quick*/ && list_position_h == 1)
	{
		frequency = -1;
		symbolRate = -1;
		networkId = -1;
		modulation = -1;
		document.location.href = "initChDvbcScan.html?" + channelType + "&" + scanMode +  "&" + frequency + "&" + freqTo + "&" + modulation + "&" + symbolRate + "&" + networkId;
	}
}


/*
功能描述： 搜台过程中的参数输入频点数字,设置当前正在输入的spanList有数字的开始位置numStartPosition
参数：number:0-9;spanList:数字输入框的span list
全局变量：numPosition;freqWords;numStartPosition;
*/
function doFreNumber(number,spanList)
{
	//channel.testLog("numPosition = " + numPosition + ",numStartPosition = " + numStartPosition);
	
	/*if(numPosition == 5)//在最后一位上  //change yums
	{*/
		/*-----此处假设上一次数据为X或XX，焦点在最后一位数字上，输入一个数字变成了X_或是XX_，但是numStartPosition并没有改变-------------*/
		/*-----现在要再次输入数字，结果变成XX_或是XXX_，在spanList中数字开始的位置向前移动了一位，所以numStartPosition要减1-----------*/
		/*-----至于为何上一次输入结果变成X_或是XX_后没有把numStartPosition减一是因为“_”还不是数字,虽然他在显示上占了一位--------------*/
		/*  change yums
		if(spanList[5].innerHTML == "_")
		{
			var t = 0;
			for(var i = 0; i < 5; i++)
			{
				freqWords[i] = freqWords[i + 1];
			}
			freqWords[numPosition] = parseInt(number,10);
			numStartPosition = numStartPosition - 1;
		}
		*/
		/*数字输入后的显示*/
		/*change yums
		if(numStartPosition > 0)//输入的数字位数不满6位，有空余 
		{
			if(number == 0 && numStartPosition == 5)//当前只有一位
			{
				//do nothing
				return;
			}
			else
			{
				freqWords[numPosition] = parseInt(number,10);
				spanList[5].innerHTML = "_";
				spanList[5].style.color = "#f00";
				for(var i = 4; i >= (numStartPosition - 1); i--)
				{
					spanList[i].innerHTML = freqWords[i + 1];
				}
			}
		}
		else
		{
			freqWords[numPosition] = parseInt(number,10);
			spanList[numPosition].innerHTML = number;
			spanList[numPosition].style.color = "#fff";
			numPosition = numStartPosition;
			spanList[numPosition].style.color = "#f00";
		}
	}
	else if(numPosition == numStartPosition)
	{
		freqWords[numPosition] = parseInt(number,10);
		spanList[numPosition].style.color = "#fff";
		if(number == 0)
		{
			spanList[numPosition].innerHTML = "";
			numPosition++;
			numStartPosition++;
		}
		else
		{
			spanList[numPosition].innerHTML = number;
			numPosition++;
			
		}
		spanList[numPosition].style.color = "#f00";
	}
	else
	{
		freqWords[numPosition] = parseInt(number,10);			
		spanList[numPosition].innerHTML = number;
		spanList[numPosition].style.color = "#fff";
		numPosition++;
		spanList[numPosition].style.color = "#f00";
	}
	*/
	/*
	**add  yums:更改initchDvbcScanInfoSelect.js中输入频率数字时的输入算法，让其跟autoSearch中一样，最小为45000
	**/
	spanList[numPosition].style.color = "#fff";
	if(numPosition == 5)//在最后一位上
	{
		/*-----此处假设上一次数据为X或XX，焦点在最后一位数字上，输入一个数字变成了X_或是XX_，但是numStartPosition并没有改变-------------*/
		/*-----现在要再次输入数字，结果变成XX_或是XXX_，在spanList中数字开始的位置向前移动了一位，所以numStartPosition要减1-----------*/
		/*-----至于为何上一次输入结果变成X_或是XX_后没有把numStartPosition减一是因为“_”还不是数字,虽然他在显示上占了一位--------------*/
		if(spanList[numPosition].innerText == "_")
		{
			var t = 0;
			for(var i = 0; i < 5; i++)
			{
				freqWords[i] = freqWords[i + 1];
			}
			freqWords[numPosition] = parseInt(number,10);
			numStartPosition = numStartPosition - 1;
		}
		
		if(numStartPosition > 0)//输入的数字位数不满6位，有空余 
		{
			if(number == 0 && numStartPosition == 5)//当前只有一位
			{
				//do nothing
				return;
			}
			else
			{
				freqWords[numPosition] = parseInt(number,10);
				spanList[numPosition].innerText = "_";
				for(var i = 4; i >= (numStartPosition - 1); i--)
				{
					spanList[i].innerText = freqWords[i + 1];
				}
			}
		}
		else
		{
			freqWords[numPosition] = parseInt(number,10);
			spanList[numPosition].innerText = number;
			numPosition = numStartPosition;
		}
	}
	else if(numPosition == numStartPosition)
	{
		freqWords[numPosition] = parseInt(number,10);
		if(number == 0)
		{
			freqWords[numPosition] = 0;
			while(freqWords[numPosition] == 0)
			{
				spanList[numPosition].innerText = "";
				numPosition++;
				numStartPosition++;
				if(numStartPosition == 5)
				{
					break;
				}
			}
		}
		else
		{
			spanList[numPosition].innerText = number;
			numPosition++;
			
		}
	}
	else
	{
		freqWords[numPosition] = parseInt(number,10);			
		spanList[numPosition].innerText = number;
		numPosition++;
	}
	
	
	//如果输入的数值越界，自动填入边界值
	var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
	if(f < 45000)
	{
		if(numPosition == (numStartPosition + 1) && number < 4)//刚刚输入的是第一个数字
		{
			f = f*10;
			showFreqWhenChanged(f,spanList);
			numPosition = 1;
		}
		else if(numPosition == (numStartPosition + 2) && number < 5)//刚刚输入的是第二个数字
		{
			f = f*10;
			showFreqWhenChanged(f,spanList);
			numPosition = 2;
		}
		else//这个情况在该种输入方法处理中是不会发生的，留给以后其他方式的输入拓展用
		{
			showFreqWhenChanged(45000,spanList);
		}
	}
	else if(f > 862000)
	{
		if(numPosition == (numStartPosition + 1) && number == 8)//刚刚输入的是第一个数字
		{
			showFreqWhenChanged(862000,spanList);
			numPosition = 1;
		}
		else if(numPosition == (numStartPosition + 2) && number == 6)//刚刚输入的是第一个数字
		{
			showFreqWhenChanged(862000,spanList);
			numPosition = 2;
		}
		else if(numPosition == (numStartPosition + 3) && number == 2)//刚刚输入的是第一个数字
		{
			showFreqWhenChanged(862000,spanList);
			numPosition = 3;
		}
		else//其他非临界输入的处理
		{
			showFreqWhenChanged(862000,spanList);
		}
	}
	spanList[numPosition].style.color = "#f00";
	
}

/*
功能描述： 搜台过程中的参数输入network id数字
参数：number:0-9;spanList:数字输入框的span list
全局变量：numPosition;netWords;numStartPosition3;
*/
function doNetNumber(number,spanList)
{
	if(numPosition == 5)//在最后一位上
	{
		/*-----此处假设上一次数据为X或XX，焦点在最后一位数字上，输入一个数字变成了X_或是XX_，但是numStartPosition3并没有改变-------------*/
		/*-----现在要再次输入数字，结果变成XX_或是XXX_，在spanList中数字开始的位置向前移动了一位，所以numStartPosition3要减1-----------*/
		/*-----至于为何上一次输入结果变成X_或是XX_后没有把numStartPosition3减一是因为“_”还不是数字,虽然他在显示上占了一位--------------*/
		if(spanList[5].innerHTML == "_")
		{
			var t = 0;
			for(var i = 0; i < 5; i++)
			{
				netWords[i] = netWords[i + 1];
			}
			netWords[numPosition] = parseInt(number,10);
			numStartPosition3 = numStartPosition3 - 1;
		}
		/*数字输入后的显示*/
		if(numStartPosition3 > 0)//输入的数字位数不满6位，有空余 
		{
			if(number == 0 && numStartPosition3 == 5)//当前只有一位
			{
				//do nothing
				return;
			}
			else
			{
				netWords[numPosition] = parseInt(number,10);
				spanList[5].innerHTML = "_";
				spanList[5].style.color = "#f00";
				for(var i = 4; i >= (numStartPosition3 - 1); i--)
				{
					spanList[i].innerHTML = netWords[i + 1];
				}
			}
		}
		else
		{
			netWords[numPosition] = parseInt(number,10);
			spanList[numPosition].innerHTML = number;
			spanList[numPosition].style.color = "#fff";
			numPosition = numStartPosition3;
			spanList[numPosition].style.color = "#f00";
		}
	}
	else if(numPosition == numStartPosition3)
	{
		netWords[numPosition] = parseInt(number,10);
		spanList[numPosition].style.color = "#fff";
		if(number == 0)
		{
			spanList[numPosition].innerHTML = "";
			numPosition++;
			numStartPosition3++;
		}
		else
		{
			spanList[numPosition].innerHTML = number;
			numPosition++;
			
		}
		spanList[numPosition].style.color = "#f00";
	}
	else
	{
		netWords[numPosition] = parseInt(number,10);			
		spanList[numPosition].innerHTML = number;
		spanList[numPosition].style.color = "#fff";
		numPosition++;
		spanList[numPosition].style.color = "#f00";
	}
}

/*
功能描述： 搜台过程中的参数输入symbol rate数字
参数：number:0-9;spanList:数字输入框的span list
全局变量：numPosition;sybWords;numStartPosition2;
*/
function doSybNumber(number,spanList)
{
	if(numPosition == 3)//在最后一位上
	{
		/*-----此处假设上一次数据为X或XX，焦点在最后一位数字上，输入一个数字变成了X_或是XX_，但是numStartPosition2并没有改变-------------*/
		/*-----现在要再次输入数字，结果变成XX_或是XXX_，在spanList中数字开始的位置向前移动了一位，所以numStartPosition2要减1-----------*/
		/*-----至于为何上一次输入结果变成X_或是XX_后没有把numStartPosition2减一是因为“_”还不是数字,虽然他在显示上占了一位--------------*/
		if(spanList[3].innerHTML == "_")
		{
			var t = 0;
			for(var i = 0; i < 3; i++)
			{
				sybWords[i] = sybWords[i + 1];
			}
			sybWords[numPosition] = parseInt(number,10);
			numStartPosition2 = numStartPosition2 - 1;
		}
		
		/*数字输入后的显示*/
		if(numStartPosition2 > 0)//输入的数字位数不满4位，有空余 
		{
			if(number == 0 && numStartPosition2 == 3)//当前只有一位
			{
				//do nothing
				return;
			}
			else
			{
				sybWords[numPosition] = parseInt(number,10);
				spanList[3].innerHTML = "_";
				spanList[3].style.color = "#f00";
				for(var i = 2; i >= (numStartPosition2 - 1); i--)
				{
					spanList[i].innerHTML = sybWords[i + 1];
				}
			}
		}
		else
		{
			sybWords[numPosition] = parseInt(number,10);
			spanList[numPosition].innerHTML = number;
			spanList[numPosition].style.color = "#fff";
			numPosition = numStartPosition2;
			spanList[numPosition].style.color = "#f00";
		}
	}
	else if(numPosition == numStartPosition2)
	{
		sybWords[numPosition] = parseInt(number,10);
		spanList[numPosition].style.color = "#fff";
		if(number == 0)
		{
			spanList[numPosition].innerHTML = "";
			numPosition++;
			numStartPosition2++;
		}
		else
		{
			spanList[numPosition].innerHTML = number;
			numPosition++;
			
		}
		spanList[numPosition].style.color = "#f00";
	}
	else
	{
		sybWords[numPosition] = parseInt(number,10);			
		spanList[numPosition].innerHTML = number;
		spanList[numPosition].style.color = "#fff";
		numPosition++;
		spanList[numPosition].style.color = "#f00";
	}
}

/*
功能描述：当焦点冲数字输入框移开的时候纠正spanList中数字开始的位置，特别是用于输入的数字显示类似111_中有一个“_”不是数字但占位了的情况
参数：startPositionForSpan:spanList中数字开始的位置，spanList:数字输入框的span list，wordsList：保存数字的数组
全局变量：
*/
function correctStartPositionOfSpanList(startPositionForSpan,spanList,wordsList)
{
	var length = spanList.length;
	//channel.testLog("length = " + length + ",startPositionForSpan = " + startPositionForSpan);
	if(spanList[length - 1].innerHTML == "_")
	{
		for(var i = (length - 1); i >= 0; i--)
		{
			if(i >= startPositionForSpan)
			{
				spanList[i].innerHTML = wordsList[i];
			}
			else
			{
				spanList[i].innerHTML = "";
			}
		}
	}
}



/*
功能描述：将scanningInfo切分并保存到响应的变量中
参数：id:0（atv或dtv进度更新的消息），1代表atv搜台结束，2代表dtv搜台结束
全局变量：anologScanCount;digitalScanCount;progress;
*/
function cutScanningInfo(info)
{
	var str = info;
	var data = str.split("/");
	anologScanCount = parseInt(data[0],10);
	var digital = parseInt(data[1],10);
	var radio = parseInt(data[2],10);
	digitalScanCount = digital + radio;
	//上传的freq是以kHz结尾的，这里装换城MHz
	//freq = (parseInt(data[3],10)/1000);
	progress = parseInt(data[4],10);
}


var sybWords 					= new Array(4);
var freqWords 					= new Array(6);
var netWords					= new Array(6);
/*
功能描述：将频点分解频点(KHz)的每一位上的数保存在数组freqWords中
参数：freq(KHz):000000-999999
全局变量：freqWords
*/
function separateFreq(freq)
{
	var t;
	freqWords[5] = parseInt(freq%10,10);
	t = parseInt(freq/10,10);
	freqWords[4] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	freqWords[3] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	freqWords[2] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	freqWords[1] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	freqWords[0] = parseInt(t,10);
}

/*
功能描述： 搜台过程中频点更新要显示在页面的时候的处理
参数：freq:频点；spanList:数字输入框的span list
全局变量：numPosition;freqWords;numStartPosition;
*/
function showFreqWhenChanged(freq,spanList)
{
	//channel.testLog("in showFreqWhenChanged freq = " + freq);
	if(freq < 0)
	{
		freq = 0;
	}
	
	separateFreq(freq);
	
	if(frequency < 0)
	{
		for(var j = 0; j < 5; j++)
		{
			spanList[j].innerHTML = "";
		}
		numPosition = 5;
		numStartPosition = 5;
		spanList[5].innerHTML = "-";
		return;
	}
	
	var flag = 0;
	for(var i = 0; i < 6; i++)
	{
		spanList[i].style.color = "#fff";
		if(flag == 0 && freqWords[i] == 0)
		{
			if(i == 5)
			{
				numPosition = i;
				numStartPosition = i;
				spanList[i].innerHTML = freqWords[i];
			}
			else
			{
				spanList[i].innerHTML = "";
			}
		}/*
		else if(freqWords[i] < 0 && i == 5)//当不显示frequency的时候 add chenhua 2014/2/18
		{
			numPosition = i;
			numStartPosition = i;
			spanList[i].innerHTML = "-";
		}*/
		else
		{
			///////////////////////当前为第一个最高位不为0的时候///////////////////////
			/*-----------------XX1983----------------*/ /*------------277778-------------------*/
			/*如上中高位第一个不为0的位是第2位（从0开始计算）*/ /*如上中高位第一个不为0的位是第0位（从0开始计算）*/
			if(flag == 0)
			{
				numPosition = i;
				numStartPosition = i;
			}
			///////////////////////当前为第一个最高位不为0的时候///////////////////////
			flag = 1;
			spanList[i].innerHTML = freqWords[i];
		}
	}
	//channel.testLog("in showFreqWhenChanged end");
}

/*
功能描述： 搜台过程中的参数输入频点数字的时候按left键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;freqWords;numStartPosition;
*/
function doLeftFreqInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(spanList[5].innerHTML == "_")
	{
		numPosition = 5;
		var isMidZero = 0;//判断当前的0是否是数中的0
		for(var i = 0; i < 6; i++)
		{
			if(isMidZero == 0 && freqWords[i] == 0)
			{
				spanList[i].innerHTML = "";
			}
			else
			{
				isMidZero = 1;
				spanList[i].innerHTML = freqWords[i];
			}
		}
	}
	else
	{
		if(numPosition <= numStartPosition)
		{
			numPosition = 5;
		}
		else
		{
			numPosition--;
		}
	}
	spanList[numPosition].style.color = "#f00";
}

/*
功能描述： 搜台过程中的参数输入频点数字的时候按Right键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;freqWords;numStartPosition;
*/
function doRightFreqInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(spanList[5].innerHTML == "_")
	{
		numPosition = numStartPosition;
		var isMidZero = 0;//判断当前的0是否是数中的0
		for(var i = 0; i < 6; i++)
		{
			if(isMidZero == 0 && freqWords[i] == 0)
			{
				spanList[i].innerHTML = "";
			}
			else
			{
				isMidZero = 1;
				spanList[i].innerHTML = freqWords[i];
			}
		}
	}
	else
	{
		if(numPosition >= 5)
		{
			numPosition = numStartPosition;
		}
		else
		{
			numPosition++;
		}
	}
	spanList[numPosition].style.color = "#f00";
}


/*
功能描述：将symbolRate rate分解每一位上的数保存在数组sybWords中
参数：syb(Ksym/s):0000-9999
全局变量：sybWords
*/
function separateSyb(syb)
{
	var t;
	sybWords[3] = parseInt(syb%10,10);
	t = parseInt(syb/10,10);
	sybWords[2] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	sybWords[1] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	sybWords[0] = parseInt(t,10);
}

/*
功能描述： symbolRate更改刷新显示的处理
参数：syb:symbolRate rate；spanList:数字输入框的span list
全局变量：numPosition;sybWords;numStartPosition2;
*/
function showInitSymbol(syb,spanList)
{
	//channel.testLog("in showInitSymbol syb = " + syb);
	if(syb < 0)
	{
		syb = 0;
	}
	
	separateSyb(syb);
	
	if(symbolRate < 0)
	{
		for(var j = 0; j < 3; j++)
		{
			spanList[j].innerHTML = "";
		}
		numPosition = 3;
		numStartPosition2 = 3;
		spanList[3].innerHTML = "-";
		return;
	}
	
	var flag = 0;
	for(var i = 0; i < 4; i++)
	{
		spanList[i].style.color = "#fff";
		if(flag == 0 && sybWords[i] == 0)
		{
			if(i == 3)
			{
				numPosition = i;
				numStartPosition2 = i;
				spanList[i].innerHTML = sybWords[i];
			}
			else
			{
				spanList[i].innerHTML = "";
			}
		}/*
		else if(sybWords[i] < 0 && i == 3)//当不显示symbolRate rate的时候 add chenhua 2014/2/18
		{
			numPosition = i;
			numStartPosition2 = i;
			spanList[i].innerHTML = "-";
		}*/
		else
		{
			///////////////////////当前为第一个最高位不为0的时候///////////////////////
			/*-----------------0083----------------*/ /*------------7778-------------------*/
			/*如上中高位第一个不为0的位是第2位（从0开始计算）*/ /*如上中高位第一个不为0的位是第0位（从0开始计算）*/
			if(flag == 0)
			{
				numPosition = i;
				numStartPosition2 = i;
			}
			///////////////////////当前为第一个最高位不为0的时候///////////////////////
			flag = 1;
			spanList[i].innerHTML = sybWords[i];
		}
	}
	//channel.testLog("in showInitSymbol end");
}

/*
功能描述： 搜台过程中的参数输入symbolRate rate的时候按left键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;sybWords;numStartPosition2;
*/
function doLeftSybInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(spanList[3].innerHTML == "_")
	{
		numPosition = 3;
		var isMidZero = 0;//判断当前的0是否是数中的0
		for(var i = 0; i < 4; i++)
		{
			if(isMidZero == 0 && sybWords[i] == 0)
			{
				spanList[i].innerHTML = "";
			}
			else
			{
				isMidZero = 1;
				spanList[i].innerHTML = sybWords[i];
			}
		}
	}
	else
	{
		if(numPosition <= numStartPosition2)
		{
			numPosition = 3;
		}
		else
		{
			numPosition--;
		}
	}
	spanList[numPosition].style.color = "#f00";
}

/*
功能描述： 搜台过程中的参数输入symbolRate rate数字的时候按Right键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;sybWords;numStartPosition2;
*/
function doRightSybInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(spanList[3].innerHTML == "_")
	{
		numPosition = numStartPosition2;
		var isMidZero = 0;//判断当前的0是否是数中的0
		for(var i = 0; i < 4; i++)
		{
			if(isMidZero == 0 && sybWords[i] == 0)
			{
				spanList[i].innerHTML = "";
			}
			else
			{
				isMidZero = 1;
				spanList[i].innerHTML = sybWords[i];
			}
		}
	}
	else
	{
		if(numPosition >= 3)
		{
			numPosition = numStartPosition2;
		}
		else
		{
			numPosition++;
		}
	}
	spanList[numPosition].style.color = "#f00";
}

/*
功能描述：将networkId id分解的每一位上的数保存在数组netWords中
参数：networkId:000000-999999
全局变量：netWords
*/
function separateNetId(netId)
{
	var t;
	netWords[5] = parseInt(netId%10,10);
	t = parseInt(netId/10,10);
	netWords[4] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	netWords[3] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	netWords[2] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	netWords[1] = parseInt(t%10,10);
	t = parseInt(t/10,10);
	netWords[0] = parseInt(t,10);
}

/*
功能描述： 搜台过程中初始化networkId id
参数：netId:networkId；spanList:数字输入框的span list
全局变量：numPosition;netWords;numStartPosition3;
*/
function showInitNetworkId(netId,spanList)
{
	//channel.testLog("in showInitNetworkId netId = " + netId);
	if(netId < 0)
	{
		netId = 0;
	}
	
	separateNetId(netId);
	
	if(networkId <= -10)
	{
		for(var j = 0; j < 5; j++)
		{
			spanList[j].innerHTML = "";
		}
		numPosition = 5;
		numStartPosition3 = 5;
		spanList[5].innerHTML = auto;
		return;
	}
	else if(networkId < 0)
	{
		for(var j = 0; j < 5; j++)
		{
			spanList[j].innerHTML = "";
		}
		numPosition = 5;
		numStartPosition3 = 5;
		spanList[5].innerHTML = "-";
		return;
	}
	
	var flag = 0;
	for(var i = 0; i < 6; i++)
	{
		spanList[i].style.color = "#fff";
		if(flag == 0 && netWords[i] == 0)
		{
			if(i == 5)
			{
				numPosition = i;
				numStartPosition3 = i;
				spanList[i].innerHTML = netWords[i];
			}
			else
			{
				spanList[i].innerHTML = "";
			}
		}/*
		else if(netWords[i] < 0 && i == 5)//当不显示networkId id的时候 
		{
			numPosition = i;
			numStartPosition3 = i;
			spanList[i].innerHTML = "-";
		}*/
		else
		{
			///////////////////////当前为第一个最高位不为0的时候///////////////////////
			/*-----------------XX1983----------------*/ /*------------277778-------------------*/
			/*如上中高位第一个不为0的位是第2位（从0开始计算）*/ /*如上中高位第一个不为0的位是第0位（从0开始计算）*/
			if(flag == 0)
			{
				numPosition = i;
				numStartPosition3 = i;
			}
			///////////////////////当前为第一个最高位不为0的时候///////////////////////
			flag = 1;
			spanList[i].innerHTML = netWords[i];
		}
	}
	//channel.testLog("in showInitNetworkId end");
}

/*
功能描述： 搜台过程中的参数输入networkId id的时候按left键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;netWords;numStartPosition3;
*/
function doLeftNetInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(spanList[5].innerHTML == "_")
	{
		numPosition = 5;
		var isMidZero = 0;//判断当前的0是否是数中的0
		for(var i = 0; i < 6; i++)
		{
			if(isMidZero == 0 && netWords[i] == 0)
			{
				spanList[i].innerHTML = "";
			}
			else
			{
				isMidZero = 1;
				spanList[i].innerHTML = netWords[i];
			}
		}
	}
	else
	{
		if(numPosition <= numStartPosition3)
		{
			numPosition = 5;
		}
		else
		{
			numPosition--;
		}
	}
	spanList[numPosition].style.color = "#f00";
}

/*
功能描述： 搜台过程中的参数输入networkd id数字的时候按Right键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;netWords;numStartPosition3;
*/
function doRightNetInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(spanList[5].innerHTML == "_")
	{
		numPosition = numStartPosition3;
		var isMidZero = 0;//判断当前的0是否是数中的0
		for(var i = 0; i < 6; i++)
		{
			if(isMidZero == 0 && netWords[i] == 0)
			{
				spanList[i].innerHTML = "";
			}
			else
			{
				isMidZero = 1;
				spanList[i].innerHTML = netWords[i];
			}
		}
	}
	else
	{
		if(numPosition >= 5)
		{
			numPosition = numStartPosition3;
		}
		else
		{
			numPosition++;
		}
	}
	spanList[numPosition].style.color = "#f00";
}

/*
描述：在DVBC automanic搜台中根据国家需要初始化一个搜台变量
参数：scanModeValue,countryValue:国家枚举值
需求：需要知道所有支持的国家的枚举值：
var countryIndex		= [1,2,3,4,5,6,28,7,8,9,
							10,11,33,12,30,58,13,14,15,16,
							17,18,19,20,31,21,22,23,24,32,
							59,25];//其中>=58的是国家枚举中没有的东西
*/
function initScanParameter(scanModeValue,countryValue)
{
	//channel.testLog("in initScanParameter country = " + countryValue + ",scanModeValue = " + scanModeValue);
	if(countryValue == 1 || countryValue == 11 || countryValue == 33 || countryValue == 16 || countryValue == 18)//有UPC和Others两种搜台
	{
		if(scanModeValue == 3)//UPC
		{
			frequency			= -1;
			modulation			= 5;
			symbolRate			= -1;
			networkId			= -1;
		}
		else
		{
			frequency			= 306000;
			modulation			= 5;
			symbolRate			= 6875;
			networkId			= 999;
		}
	}
	else if(countryValue == 6)//Denmark
	{
		frequency = 143000;
		modulation = 5;
		symbolRate = 6875;
		networkId = 999;
	}
	else if(countryValue == 7)//finland only have quick search
	{
		frequency			= -1;
		modulation			= -1;
		symbolRate			= -1;
		networkId			= -1;
	}
	else if(countryValue == 8 || countryValue == 9)//Freance,Germany
	{
		frequency			= 306000;
		modulation			= 5;
		symbolRate			= 6875;
		networkId			= 999;
	}
	else if(countryValue == 14)//Netherlands
	{
		if(scanModeValue == 4)//ziggo
		{
			frequency			= 372000;
			modulation			= 5;
			symbolRate			= 6875;
			networkId			= 5555;
		}
		else if(scanModeValue == 3)//UPC
		{
			frequency			= -1;
			modulation			= 5;
			symbolRate			= -1;
			networkId			= -1;
		}
		else//Others 
		{
			frequency			= 372000;
			modulation			= 5;
			symbolRate			= 6875;
			networkId			= 5555;
		}
	}
	else if(countryValue == 15)//Norway
	{
		frequency			= 386000;
		modulation			= 5;
		symbolRate			= 6900;
		networkId			= -10;//表示Auto
	}
	else if(countryValue == 23)//Sweden
	{
		frequency			= 362000;
		modulation			= 5;
		symbolRate			= 6875;
		networkId			= 41001;
	}
	else if(countryValue == 24)//Switzerland,有UPC和Others两种搜台
	{
		if(scanModeValue == 3)//UPC
		{
			frequency			= 306000;
			modulation			= 5;
			symbolRate			= -1;
			networkId			= 999;
		}
		else
		{
			frequency			= 306000;
			modulation			= 5;
			symbolRate			= 6875;
			networkId			= 999;
		}
	}
	else
	{
		frequency			= 306000;
		modulation			= 5;
		symbolRate			= 6875;
		networkId			= -10;//表示Auto
	}
}

/*
功能描述： 搜台界面初始化
参数：scanModeValue:scanMode;//0 others full,1 others advanced ;2 others Quick,3 UPC,4 Ziggo
	countryValue:国家
全局变量：
*/
var autoFreqContentSpanList;
var autoSybContentSpanList;
var autoNetContentSpanList;
var scanOptionsLiList;
function initAutoScan(scanModeValue,countryValue)
{
	$("search").style.display = "none";
	//channel.testLog("in initAutoScan scanModeValue = " + scanModeValue + ",countryValue = " + countryValue);
	$("number").style.display = "none";
	list_position_h = 0;

	$("autoModeTitle").innerHTML = scanOptionWords[4];
	$("autoFreqTitle").innerHTML = top.chScanParaMHZ[0];//change yums:2014-12-19 scanOptionWords[0] + "(KHz)";
	$("autoMoTitle").innerHTML = scanOptionWords[1];
	$("autoSybTitle").innerHTML = scanOptionWords[2]/* + "(Ksym/s)"*/;
	$("autoNetTitle").innerHTML = scanOptionWords[3];
	
	initScanParameter(scanModeValue,countryValue);
	if(scanModeValue == 4)//ziggo
	{
		scanOptionsLiList[0].style.display = "none";
		scanOptionsLiList[1].style.display = "block";
		scanOptionsLiList[2].style.display = "block";
		scanOptionsLiList[3].style.display = "block";
		scanOptionsLiList[4].style.display = "block";
		
		autoFreqContentSpanList = $("autoFreqContent").getElementsByTagName("span");
		showFreqWhenChanged(frequency,autoFreqContentSpanList);
		$("autoMoContent").innerHTML = modulationWords[modulation];
		autoSybContentSpanList = $("autoSybContent").getElementsByTagName("span");
		showInitSymbol(symbolRate,autoSybContentSpanList);
		autoNetContentSpanList = $("autoNetContent").getElementsByTagName("span");
		showInitNetworkId(networkId,autoNetContentSpanList);
		autoFreqContentSpanList[numPosition].style.color = "#f00";
		$("number").style.display = "block";
	}
	else if(scanModeValue == 3)//UPC
	{
		scanOptionsLiList[0].style.display = "none";
		scanOptionsLiList[1].style.display = "block";
		scanOptionsLiList[2].style.display = "block";
		scanOptionsLiList[3].style.display = "block";
		scanOptionsLiList[4].style.display = "block";
		
		autoFreqContentSpanList = $("autoFreqContent").getElementsByTagName("span");
		showFreqWhenChanged(frequency,autoFreqContentSpanList);
		$("autoMoContent").innerHTML = modulationWords[modulation];
		autoSybContentSpanList = $("autoSybContent").getElementsByTagName("span");
		showInitSymbol(symbolRate,autoSybContentSpanList);
		autoNetContentSpanList = $("autoNetContent").getElementsByTagName("span");
		showInitNetworkId(networkId,autoNetContentSpanList);
		autoFreqContentSpanList[numPosition].style.color = "#f00";
		$("number").style.display = "block";
	}
	else if(scanModeValue == 1)//advanced
	{
		scanOptionsLiList[0].style.display = "block";
		$("autoModeContent").innerHTML = scanModeWords[scanModeValue];
		scanOptionsLiList[1].style.display = "block";
		scanOptionsLiList[2].style.display = "block";
		scanOptionsLiList[3].style.display = "block";
		scanOptionsLiList[4].style.display = "block";
		
		autoFreqContentSpanList = $("autoFreqContent").getElementsByTagName("span");
		showFreqWhenChanged(frequency,autoFreqContentSpanList);
		$("autoMoContent").innerHTML = modulationWords[modulation];
		autoSybContentSpanList = $("autoSybContent").getElementsByTagName("span");
		showInitSymbol(symbolRate,autoSybContentSpanList);
		autoNetContentSpanList = $("autoNetContent").getElementsByTagName("span");
		showInitNetworkId(networkId,autoNetContentSpanList);
	}
	else if(scanModeValue == 2 || scanModeValue == 0)//quick
	{
		scanOptionsLiList[0].style.display = "block";
		$("autoModeContent").innerHTML = scanModeWords[scanModeValue];
		scanOptionsLiList[1].style.display = "none";
		scanOptionsLiList[2].style.display = "none";
		scanOptionsLiList[3].style.display = "none";
		scanOptionsLiList[4].style.display = "none";
	}
	list_position_h = 0;
	$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_STEP + "px";
	$("scanForm").style.display = "block";
}
var scanMode = 2;//0 others full,1 others advanced ;2 others Quick,3 UPC,4 Ziggo
var frequency = -1;
var freqTo	= -1;
var modulation = -1;
var symbolRate	= -1;
var networkId = -1;
			
function init()
{
	scanOptionsLiList = $("scanOptions").getElementsByTagName("li");
	country = channel.systemCountry;
	var str = window.location.search;
	var s = str.substring(str.indexOf("?") + 1);
	//channel.testLog("s = " + s);
	if(s != "")
	{
		var datas = s.split("&");
		channelType = datas[0];
		operator = datas[1];
	}
	//channel.testLog("channelType = " + channelType + ",operator = " + operator + ",country = " + country);
	if(operator == "Ziggo")
	{
		scanMode = 4;				//0 others full,1 others advanced ;2 others Quick,3 UPC,4 Ziggo
	}
	else if(operator == "UPC")
	{
		scanMode = 3;
	}
	else
	{
		scanMode = 1;
	}
	initAutoScan(scanMode,country);
	//channel.testLog("in init initAutoScan end");
	$("initTitle").innerHTML = initialTitleWords;
	$("subTitleTag").innerHTML = initStepWords;
	$("selectTitleTag").innerHTML = remindWords;
	
	$("firstButton").innerHTML = searchW;
	
	$("number").getElementsByTagName("span")[0].innerHTML = hotkeyWords[0];
	$("select").getElementsByTagName("span")[0].innerHTML = hotkeyWords[1];
	$("search").getElementsByTagName("span")[0].innerHTML = hotkeyWords[2];
	
	$("scanForm").style.height = SCAN_FORM_HEIGHT_START + 6*SCAN_FORM_STEP + "px";
	addMouseListener();
}

function addMouseListener()
{
	for(var i = 0; i < 5; i++)
	{
		scanOptionsLiList[i].setAttribute("newAttr",i);
		scanOptionsLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				//clean focus and input focus
				$("number").style.display = "none";
				$("firstButton").style.backgroundImage = "url(" + buttonImgs[0] + ")";
				if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
				{
					if(list_position_h <= 0)
					{
						correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
						autoFreqContentSpanList[numPosition].style.color = "#fff";
					}
					else if(list_position_h == 2)
					{
						correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
						autoSybContentSpanList[numPosition].style.color = "#fff";
					}
					else if(list_position_h == 3)
					{
						correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
						autoNetContentSpanList[numPosition].style.color = "#fff";
					}
				}
				else if(scanMode == 1)//advanced
				{
					if(list_position_h == 1)
					{
						correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
						autoFreqContentSpanList[numPosition].style.color = "#fff";
					}
					else if(list_position_h == 3)
					{
						correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
						autoSybContentSpanList[numPosition].style.color = "#fff";
					}
					else if(list_position_h == 4)
					{
						correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
						autoNetContentSpanList[numPosition].style.color = "#fff";
					}
				}
				else if(scanMode == 2 || scanMode == 0)//full or quick
				{
				}
				
				//show focus and new input container
				if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
				{
					if(parseInt(this.getAttribute("newAttr")) > 0)
					{
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					else
					{
						return;
					}
					
					if(list_position_h == 0)
					{
						numPosition = numStartPosition;
						autoFreqContentSpanList[numPosition].style.color = "#f00";
						$("number").style.display = "block";
					}
					else if(list_position_h == 2)
					{
						numPosition = numStartPosition2;
						autoSybContentSpanList[numPosition].style.color = "#f00";
						$("number").style.display = "block";
					}
					else if(list_position_h == 3)
					{
						numPosition = numStartPosition3;
						autoNetContentSpanList[numPosition].style.color = "#f00";
						$("number").style.display = "block";
					}
				}
				else if(scanMode == 1)//advanced
				{
					list_position_h = parseInt(this.getAttribute("newAttr"));
					if(list_position_h == 1)
					{
						numPosition = numStartPosition;
						autoFreqContentSpanList[numPosition].style.color = "#f00";
						$("number").style.display = "block";
					}
					else if(list_position_h == 3)
					{
						numPosition = numStartPosition2;
						autoSybContentSpanList[numPosition].style.color = "#f00";
						$("number").style.display = "block";
					}
					else if(list_position_h == 4)
					{
						numPosition = numStartPosition3;
						autoNetContentSpanList[numPosition].style.color = "#f00";
						$("number").style.display = "block";
					}
				}
				else if(scanMode == 2 || scanMode == 0)//full or quick
				{
					if(parseInt(this.getAttribute("newAttr")) < 1)
					{
						list_position_h = parseInt(this.getAttribute("newAttr"));
					}
					else
					{
						return;
					}
				}
				
				$("scanInputFocus").style.display = "block";
				$("search").style.display = "none";
				$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_STEP + "px";
				doEnter();
			}
		}
	}
	
	$("firstButton").onmousedown = function(evt){
		if(evt.button == 0){//left key
			//clean focus and input focus
			$("number").style.display = "none";
			$("scanInputFocus").style.display = "none";
			$("search").style.display = "block";
			if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
			{
				if(list_position_h <= 0)
				{
					correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
					autoFreqContentSpanList[numPosition].style.color = "#fff";
				}
				else if(list_position_h == 2)
				{
					correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
					autoSybContentSpanList[numPosition].style.color = "#fff";
				}
				else if(list_position_h == 3)
				{
					correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
					autoNetContentSpanList[numPosition].style.color = "#fff";
				}
			}
			else if(scanMode == 1)//advanced
			{
				if(list_position_h == 1)
				{
					correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
					autoFreqContentSpanList[numPosition].style.color = "#fff";
				}
				else if(list_position_h == 3)
				{
					correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
					autoSybContentSpanList[numPosition].style.color = "#fff";
				}
				else if(list_position_h == 4)
				{
					correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
					autoNetContentSpanList[numPosition].style.color = "#fff";
				}
			}
			else if(scanMode == 2 || scanMode == 0)//full or quick
			{
			}
			
			//show new focus
			if(scanMode == 4/*Ziggo*/ || scanMode == 3/*UPC*/)
			{
				list_position_h = 4
			}
			else if(scanMode == 1/*Advanced*/)
			{
				list_position_h = 5;
			}
			else if(scanMode == 0 || scanMode == 2)/*full and quick*/ 
			{
				list_position_h = 1;
			}
			$("firstButton").style.backgroundImage = "url(" + buttonImgs[1] + ")";
			doEnter();
		}
	}
				
}
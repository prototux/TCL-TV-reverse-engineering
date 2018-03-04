/******************** created by chenhua ***********************/
/*搜台开始停止OSD timeout ,搜台中返回重新开启OSD timeout，如果是等待退出到channelPlay页面则不用重启OSD timeout*/
var autoScanTitleWords 	= [top.chScanOptions[2] + ">" + top.chAutoScanOptions[0],top.chScanOptions[2] + ">" + top.chAutoScanOptions[1],top.chAutoScanOptions[2]];
var operatorWords		= top.chOperator;
var chTypeWords			= top.chScanType;
var okCancelWords		= top.okCancel;
var scanModeWords		= top.chScanMode;
var chGenreWords		= top.chType;
var scanStatusWords		= top.chScanStatus;
var scanOptionWords 	= top.chScanPara;
var modulationWords		= top.modulation;
var yesNoWords 			= top.yesNo;
var searchStop			= [top.others[8],top.others[17]];
var auto				= top.manualAuto[1];


document.onnotify 		= notifyProcess;
var channel 			= top.g_channel;
var setting				= top.g_setting;
var list_position_h 	= 0;				//主界面焦点位置
var form_position_h 	= 0;				//弹出页面焦点位置,在atv manual scan中0-2:焦点落在输入选择框系列上，3-4：焦点落在按钮上
var tunerMode 			= 0;			    //0 cable, 1 air			
var focusOn 			= "channelType";	//operator,channelType,autoScan
var scanMode			= 0;				//0 others full,1 others advanced ;2 others Quick,3 UPC,4 Ziggo
var channelType			= 0;				//0 digital + analogue,1 digital,2 analogue
var progressFlag 		= -1;				//在analog+digital时使用，这时的进度条分为两段来处理，0 表示前半段dtv搜台，1表示后半段atv 搜台,初始化为-1 if(channelType == 0) progressFlag = 0;
var inputSource			= 0;
var operatorSum 		= 0;
var country				= 0;
var upcAndZiggoCountryIndex=14;			//同时拥有ziggo、UPC和others的国家Netherlands，编号为14
var upcScanCountryIndex = [1,11,33,16,18,24];//含有UPC和others的国家
var anologScanCount 	= 0;
var digitalScanCount 	= 0;
var progress 			= 0;
var PROGRESS_WIDTH		= (600 - 10);		//总长为400个像素，但是要去掉表示当前进度的原点：10个像素
var isSearch 			= 0;				//手动停止都会设置isSearch为0，判断是否是手动停止搜台只需要判断isSearch即可，防止在digital + analogue搜台过程中停止后会继续搜atv
var frequency			= -1;				//-1 auto,其他表示frequency MHz
var modulation			= -1;				//0 16QAM,1 32QAM,2 64QAm,3 128qam,4 256qam,5 auto 
var symbolRate			= -1;				//4000-7200
var networkId			= -1;				//000000-999999,-1 表示没有只，-10表示为auto
var numPosition 		= 0;				//数字输入焦点位置:0-5
var numStartPosition	= 0;				//当前焦点下数的最高位在页面上所有用于显示数的span框的下标位置（0-5），如113有三位，起始位置是第3位
var numStartPosition2	= 0;				//当搜台框第二个需要输入数字的输入框使用
var numStartPosition3	= 0;				//当搜台框第三个需要输入数字的输入框使用

var OPERATOR_AND_CH_TYPE_START= 110;		//operator中焦点移动起始位置
var OPTION_STEP 		= 60;				//选项菜单单焦点移动的step
var SCAN_FORM_HEIGHT_START=340;				//搜台框允许的最小高度值
var SCAN_FOCUS_START	= 10;				//搜台框输入框焦点起始位置
var SCAN_FORM_AND_FOCUS_STEP=60;				//当搜台框中每增加一个参数控制项需要增加的高度

function notifyProcess(evt)
{
    var msg = evt.which;
	
//所有ＣＩ消息在搜台过程中不发相关的ci消息，这部分有底层去判断，代码此处直接默认处理即可，因为在搜台过程中这是不可能发生的事情
//powerOff消息不会在搜台的时候发送，这是由底层去判断，代码此处直接默认处理即可
//booking消息不会在搜台的时候发送，这是由底层去判断的，代码此处直接默认处理即可

    switch(msg)
    {
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		case top.E_SCART_CHANGE_INPUT_SRC://scart change start:CMD_UI_NOTIFY_SCART_CHANGE_INPUT_SRC
			if(isSearch == 1)
			{
				//return;
			}
			else
			{
				top.systemEventProc(evt);
				//return;
			}
			break;
		case top.E_ATV_TUNE_PREQUENCY_CHANGE://atv
	  	case top.E_DTV_TUNE_FREQUENCY_CHANGE://dtv
			if(progress <= 100)
			{
				updateInfo(0);
			}
			break;
	  	case top.E_ATV_SCAN_FINISHED://atv
			updateInfo(1);
		  	break;
	  	case top.E_DTV_SCAN_FINISHED://dtv
		  	updateInfo(2);
		  	break;
		case top.E_MEDIA_USB_INSERTED:
			break;
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
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}
function keyproc(evt)
{//channel.testLog("in auto Search keyproc");
	var ret = true;
	var keycode = evt.which;
	if(isSearch == 1)
	{
		switch(keycode)
		{
			case top.VK_POWER:
				isSearch = 0;//为了防止在digital + analogue搜台过程中停止后会继续搜
				channel.stopScan();
				top.keyDownProcess(evt);
				break;
			case top.VK_EXIT: //exit
			case top.VK_MENU: //menu
			case top.VK_ENTER:
				toExit();
				break;
			case top.VK_BACK: //back
				toSearchBack();
				break;
			default:
				break;
		}
		return;
	}
	else if(focusOn == "exit")//退出页面等待跳转过程中
	{
		if(keycode == top.VK_POWER)
		{
			top.keyDownProcess(evt);
		}
		return;
	}
	switch(keycode)
	{
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;
		case top.VK_UP:
			toUp();
			ret = false;
			break;
		case top.VK_RIGHT:
			toRight();
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
		case top.VK_BACK: //back
			toNormalBack();
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
			channel.testLog("in number  isSearch = " + isSearch + ",focusOn = " + focusOn + ",channelType = " +　channelType);
			if(isSearch == 1)
			{
				return;
			}
			if(focusOn == "autoScan" && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/)
			{
				if(country == 7)//finland only have quick search
				{
					return;
				}
				
				if(scanMode == 4 || scanMode == 3)//ziggo 或 UPC
				{
					if(list_position_h == 0)
					{
						doFreNumber(evt.which - 48,autoFreqContentSpanList);
					}
					else if(list_position_h == 2)
					{
						doSybNumber(evt.which - 48,autoSybContentSpanList);
					}
					else if(list_position_h == 3)
					{
						doNetNumber(evt.which - 48,autoNetContentSpanList);
					}
				}
				else if(scanMode == 1)//advanced
				{
					if(list_position_h == 1)
					{
						doFreNumber(evt.which - 48,autoFreqContentSpanList);
					}
					else if(list_position_h == 3)
					{
						doSybNumber(evt.which - 48,autoSybContentSpanList);
					}
					else if(list_position_h == 4)
					{
						doNetNumber(evt.which - 48,autoNetContentSpanList);
					}
				}
			}
			break;
		case top.VK_POWER:
		case top.VK_MUTE://key mute
				top.keyDownProcess(evt);
				break;
		default:
			//top.keyDownProcess(evt);
			ret = true;
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
	if(focusOn == "operator")
	{
		if(operatorSum == 2)
		{
			if(list_position_h >= 1)
			{
				list_position_h = 0;
			}
			else
			{
				list_position_h++;
			}
		}
		else if(operatorSum == 3)
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
		$("operatorFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	}
	else if(focusOn == "channelType")
	{
		if(list_position_h >= 2)
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("chTypeFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	}
	else if(focusOn == "autoScan")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/)
		{
			if(country == 7)//finland only have quick search
			{
				return;
			}
			
			if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
			{
				if(list_position_h >= 4)
				{
					list_position_h = 0;
					numPosition = numStartPosition;
					autoFreqContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 3)
				{
					correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
					autoNetContentSpanList[numPosition].style.color = "#fff";
					list_position_h++;
				}
				else if(list_position_h == 2)
				{
					correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
					autoSybContentSpanList[numPosition].style.color = "#fff";
					var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
					//如果输入的数值越界，自动填入边界值
					if(s < 4000)
					{
						showInitSymbol(4000,autoSybContentSpanList);
					}
					else if (s > 7200)
					{
						showInitSymbol(7200,autoSybContentSpanList);
					}
					list_position_h++;
					numPosition = numStartPosition3;
					autoNetContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 1)
				{
					list_position_h++;
					numPosition = numStartPosition2;
					autoSybContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 0)
				{
					correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
					autoFreqContentSpanList[numPosition].style.color = "#fff";
					var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
					//如果输入的数值越界，自动填入边界值
					if(f < 45000)
					{
						showFreqWhenChanged(45000,autoFreqContentSpanList);
					}else if(f > 862000)
					{
						showFreqWhenChanged(862000,autoFreqContentSpanList);
					}
					list_position_h++;
				}
				if(list_position_h <= 3)
				{
					$("search").style.border = "none";
					$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					$("scanInputFocus").style.display = "block";
				}
				else
				{
					$("scanInputFocus").style.display = "none";
					$("search").style.border = "medium solid #00aadd";
				}
			}
			else if(scanMode == 1)//advanced
			{
				if(list_position_h >= 5)
				{
					list_position_h = 0;
				}
				else if(list_position_h == 4)
				{
					correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
					autoNetContentSpanList[numPosition].style.color = "#fff";
					list_position_h++;
				}
				else if(list_position_h == 3)
				{
					correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
					autoSybContentSpanList[numPosition].style.color = "#fff";
					var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
					//如果输入的数值越界，自动填入边界值
					if(s < 4000)
					{
						showInitSymbol(4000,autoSybContentSpanList);
					}
					else if (s > 7200)
					{
						showInitSymbol(7200,autoSybContentSpanList);
					}
					list_position_h++;
					numPosition = numStartPosition3;
					autoNetContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 2)
				{
					list_position_h++;
					numPosition = numStartPosition2;
					autoSybContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 1)
				{
					correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
					autoFreqContentSpanList[numPosition].style.color = "#fff";
					list_position_h++;
					var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
					//如果输入的数值越界，自动填入边界值
					if(f < 45000)
					{
						showFreqWhenChanged(45000,autoFreqContentSpanList);
					}else if(f > 862000)
					{
						showFreqWhenChanged(862000,autoFreqContentSpanList);
					}
				}
				else if(list_position_h == 0)
				{
					list_position_h++;
					numPosition = numStartPosition;
					autoFreqContentSpanList[numPosition].style.color = "#f00";
				}
				if(list_position_h <= 4)
				{
					$("search").style.border = "none";
					$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					$("scanInputFocus").style.display = "block";
				}
				else
				{
					$("scanInputFocus").style.display = "none";
					$("search").style.border = "medium solid #00aadd";
				}
			}
			else if(scanMode == 2 || scanMode == 0)//full or quick
			{
				if(list_position_h <= 0)
				{
					list_position_h = 1;
				}
				else
				{
					list_position_h--;
				}
				if(list_position_h <= 0)
				{
					$("search").style.border = "none";
					$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					$("scanInputFocus").style.display = "block";
				}
				else
				{
					$("scanInputFocus").style.display = "none";
					$("search").style.border = "medium solid #00aadd";
				}
			}
		}
	}
}

function toUp()
{
	if(focusOn == "operator")
	{
		if(operatorSum == 2)
		{
			if(list_position_h <= 0)
			{
				list_position_h = 1;
			}
			else
			{
				list_position_h--;
			}
		}
		else if(operatorSum == 3)
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
		$("operatorFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	}
	else if(focusOn == "channelType")
	{
		if(list_position_h <= 0)
		{
			list_position_h = 2;
		}
		else
		{
			list_position_h--;
		}
		$("chTypeFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	}
	else if(focusOn == "autoScan")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/)
		{
			if(country == 7)//finland only have quick search
			{
				return;
			}
			
			if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
			{
				if(list_position_h <= 0)
				{
					correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
					autoFreqContentSpanList[numPosition].style.color = "#fff";
					var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
					//如果输入的数值越界，自动填入边界值
					if(f < 45000)
					{
						showFreqWhenChanged(45000,autoFreqContentSpanList);
					}else if(f > 862000)
					{
						showFreqWhenChanged(862000,autoFreqContentSpanList);
					}
					list_position_h = 4;
				}
				else if(list_position_h == 1)
				{
					list_position_h--;
					numPosition = numStartPosition;
					autoFreqContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 2)
				{
					correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
					autoSybContentSpanList[numPosition].style.color = "#fff";
					var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
					//如果输入的数值越界，自动填入边界值
					if(s < 4000)
					{
						showInitSymbol(4000,autoSybContentSpanList);
					}
					else if (s > 7200)
					{
						showInitSymbol(7200,autoSybContentSpanList);
					}
					list_position_h --;
				}
				else if(list_position_h == 3)
				{
					correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
					autoNetContentSpanList[numPosition].style.color = "#fff";
					numPosition = numStartPosition2;
					list_position_h--;
					autoSybContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 4)
				{
					numPosition = numStartPosition3;
					list_position_h--;
					autoNetContentSpanList[numPosition].style.color = "#f00";
				}
				
				if(list_position_h <= 3)
				{
					$("search").style.border = "none";
					$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					$("scanInputFocus").style.display = "block";
				}
				else
				{
					$("scanInputFocus").style.display = "none";
					$("search").style.border = "medium solid #00aadd";
				}
			}
			else if(scanMode == 1)//advanced
			{
				if(list_position_h <= 0)
				{
					list_position_h = 5;
				}
				else if(list_position_h == 1)
				{
					correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
					autoFreqContentSpanList[numPosition].style.color = "#fff";
					list_position_h--;
					var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
					//如果输入的数值越界，自动填入边界值
					if(f < 45000)
					{
						showFreqWhenChanged(45000,autoFreqContentSpanList);
					}else if(f > 862000)
					{
						showFreqWhenChanged(862000,autoFreqContentSpanList);
					}
				}
				else if(list_position_h == 2)
				{
					list_position_h--;
					numPosition = numStartPosition;
					autoFreqContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 3)
				{
					correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
					autoSybContentSpanList[numPosition].style.color = "#fff";
					list_position_h --;
					var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
					//如果输入的数值越界，自动填入边界值
					if(s < 4000)
					{
						showInitSymbol(4000,autoSybContentSpanList);
					}
					else if (s > 7200)
					{
						showInitSymbol(7200,autoSybContentSpanList);
					}
				}
				else if(list_position_h == 4)
				{
					correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
					autoNetContentSpanList[numPosition].style.color = "#fff";
					numPosition = numStartPosition2;
					list_position_h--;
					autoSybContentSpanList[numPosition].style.color = "#f00";
				}
				else if(list_position_h == 5)
				{
					numPosition = numStartPosition3;
					list_position_h--;
					autoNetContentSpanList[numPosition].style.color = "#f00";
				}
				
				if(list_position_h <= 4)
				{
					$("search").style.border = "none";
					$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					$("scanInputFocus").style.display = "block";
				}
				else
				{
					$("scanInputFocus").style.display = "none";
					$("search").style.border = "medium solid #00aadd";
				}
			}
			else if(scanMode == 2 || scanMode == 0)//full or quick
			{
				if(list_position_h <= 0)
				{
					list_position_h = 1;
				}
				else
				{
					list_position_h--;
				}
				
				if(list_position_h <= 0)
				{
					$("search").style.border = "none";
					$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					$("scanInputFocus").style.display = "block";
				}
				else
				{
					$("scanInputFocus").style.display = "none";
					$("search").style.border = "medium solid #00aadd";
				}
			}
		}
	}
}

function toLeft()
{
	if(focusOn == "autoScan")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/)
		{
			if(country == 7)//finland only have quick search
			{
				return;
			}
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
					$("autoMoContent").innerText = modulationWords[modulation];
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
					initAutoScan(scanMode,tunerMode,channelType);
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
					$("autoMoContent").innerText = modulationWords[modulation];
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
				initAutoScan(scanMode,tunerMode,channelType);
			}
		}
	}
	else
	{
		toNormalBack();
	}
}

function toRight()
{
	if(focusOn == "autoScan")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/)
		{
			if(country == 7)//finland only have quick search
			{
				return;
			}
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
					$("autoMoContent").innerText = modulationWords[modulation];
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
					initAutoScan(scanMode,tunerMode,channelType);
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
					$("autoMoContent").innerText = modulationWords[modulation];
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
				initAutoScan(scanMode,tunerMode,channelType);
			}
		}
	}
}

function doEnter()
{
	channel.testLog("in doEnter focusOn = " + focusOn + ",isSearch = " + isSearch + ",country = " + country + ",scanMode = " + scanMode + ",list_position_h = " + list_position_h);
	if(focusOn == "operator")
	{
		if(operatorSum == 2)
		{
			if(list_position_h == 0)
			{
				scanMode = 3;//upc
			}
			else
			{
				scanMode = 1;//advanced
			}
		}
		else if(operatorSum == 3)
		{
			if(list_position_h == 0)//ziggo
			{
				scanMode = 4;//ziggo
			}
			else if(list_position_h == 1)//upc
			{
				scanMode = 3;//upc
			}
			else
			{
				scanMode = 0;//full,只有国家为Netherland时才拥有ziggo运营商，这个时候others运营商只有full搜台
			}
		}
		$("operatorForm").style.display = "none";
		initChType();
		focusOn = "channelType";
	}
	else if(focusOn == "channelType")
	{
		channelType = list_position_h;
		$("chTypeForm").style.display = "none";
		initAutoScan(scanMode,tunerMode,channelType);
		focusOn = "autoScan";
	}
	else if(focusOn == "autoScan")
	{
		if(isSearch == 1)
		{
			toExit();
			return;
		}
		
		if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/)
		{
			if(country == 7)//finland only have quick search，when get into auto search , it's run at once ,so isSearch == 1
			{
				return;
			}
			
			if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
			{
				if(list_position_h == 4)
				{
					var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
					var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
					var n = netWords[5] + netWords[4]*10 + netWords[3]*100 + netWords[2]*1000 + netWords[1]*10000 + netWords[0]*100000;
					if((f == 0 && frequency < 0) || (s == 0 && symbolRate < 0) || (n == 0 && (networkId < 0 && networkId > -10))/*非Auto状态*/)//缺少参数
					{
						$("scanStatus").innerText = scanStatusWords[3];
						return;
					}
					else
					{
						frequency = f;
						symbolRate = s;
						networkId = n;
						channel.stopTv();
						isSearch = 1;
						top.stopTimeout();
						$("scanStatus").innerText = scanStatusWords[0];
						$("search").innerText = searchStop[1];
						channel.startScanDtvAuto(scanMode,frequency,-1,modulation,symbolRate,networkId);
					}
				}
			}
			else if(scanMode == 1)//advanced
			{
				if(list_position_h == 5)
				{
					var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
					var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
					var n = netWords[5] + netWords[4]*10 + netWords[3]*100 + netWords[2]*1000 + netWords[1]*10000 + netWords[0]*100000;
					if((f == 0 && frequency < 0) || (s == 0 && symbolRate < 0) || (n == 0 && (networkId < 0 && networkId > -10))/*非Auto状态*/)//缺少参数
					{
						$("scanStatus").innerText = scanStatusWords[3];
						return;
					}
					else
					{
						frequency = f;
						symbolRate = s;
						networkId = n;
						channel.stopTv();
						isSearch = 1;
						top.stopTimeout();
						$("scanStatus").innerText = scanStatusWords[0];
						$("search").innerText = searchStop[1];
						channel.startScanDtvAuto(scanMode,frequency,-1,modulation,symbolRate,networkId);
					}
				}
			}
			else if(scanMode == 2 || scanMode == 0)//full or quick
			{
				if(list_position_h == 1)
				{
					channel.stopTv();
					isSearch = 1;
					top.stopTimeout();
					$("scanStatus").innerText = scanStatusWords[0];
					$("search").innerText = searchStop[1];
					channel.startScanDtvAuto(scanMode, -1/*frequency from*/,-1/*frequency to*/,-1/*modulation*/, -1/*symbol*/,-1/*network*/);
				}
			}
		}
	}
}

/*
描述：手动动停止搜台并推出
*/
function toExit()
{
	channel.testLog("in toExit");
	if(isSearch == 1)
	{
		isSearch = 0;//为了防止在digital + analogue搜台过程中停止后会继续搜
		channel.stopScan();
		checkDtvAndAtvCountToChangeServiceTypeAndSource();
		$("scanStatus").innerText = scanStatusWords[2];
		focusOn = "exit";
		setTimeout(function(){toExit();},2000);
	}
	else//real exit
	{
		var favNetListSum = 0;
		var favNetList = "";
		var tStr = channel.dtvFavNetList();
		top.Log("channel.dtvFavNetList() = " + tStr);
		if(tStr == "")
		{
			favNetListSum = 0;
		}
		else
		{
			favNetList = tStr.split("#");
			favNetListSum = favNetList.length;
		}
		top.Log("favNetListSum = " + favNetListSum);
		if(favNetListSum <= 1)
		{
			top.jumpPage();
		}
		else
		{
			top.$("main").contentWindow.subMenu2.directToDtvFavNetListHtml();
		}
	}
}


function exitScanPage()
{
	top.$("main").contentWindow.subMenu2.initOptionShowStatus(tunerMode);
	top.focusToIndexHtml(2);
}
/*
描述：在没有搜台的情况下按返回键处理
*/
function toNormalBack()
{
	if(focusOn == "operator")
	{
		exitScanPage();
	}
	else if(focusOn == "channelType")
	{
		if(tunerMode == 0)//cable
		{
			if(upcAndZiggoCountryIndex == country)
			{
				initOperator(country);
				$("chTypeForm").style.display = "none";
				$("scanForm").style.display = "none";
				focusOn = "operator";
				return;
			}
			
			for(var i = 0; i < upcScanCountryIndex.length; i++)
			{
				if(upcScanCountryIndex[i] == country)
				{
					break;
				}
			}
			if(i < upcScanCountryIndex.length)
			{
				initOperator(country);
				$("chTypeForm").style.display = "none";
				$("scanForm").style.display = "none";
				focusOn = "operator";
			}
			else
			{
				exitScanPage();
			}
		}
		else//antenna
		{
			exitScanPage();
		}
	
	}
	else if(focusOn == "autoScan")
	{
		initChType();
		$("operatorForm").style.display = "none";
		$("scanForm").style.display = "none";
		focusOn = "channelType";
	}
}

/*
描述：在搜台的情况下按返回键处理,isSearch==1
*/
function toSearchBack()
{
	channel.testLog("in toSearchBack isSearch = " + isSearch);
	isSearch = 0;//为了防止在digital + analogue搜台过程中停止后会继续搜
	channel.stopScan();	
	checkDtvAndAtvCountToChangeServiceTypeAndSource();
	top.restartTimeout();
	$("scanStatus").innerText = scanStatusWords[2];
	
	setTimeout(function(){
					initChType();
					$("operatorForm").style.display = "none";
					$("scanForm").style.display = "none";
					focusOn = "channelType";},2000);
}

/*
功能描述： 搜台过程中的参数输入频点数字
参数：number:0-9;spanList:数字输入框的span list
全局变量：numPosition;freqWords;numStartPosition;
*/
function doFreNumber(number,spanList)
{
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
	
	if(scanMode == 3 && numStartPosition > 0)
	{
		spanList[numPosition].style.color = "#f00";
		return;
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
		if(spanList[5].innerText == "_")
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
				spanList[5].innerText = "_";
				spanList[5].style.color = "#f00";
				for(var i = 4; i >= (numStartPosition3 - 1); i--)
				{
					spanList[i].innerText = netWords[i + 1];
				}
			}
		}
		else
		{
			netWords[numPosition] = parseInt(number,10);
			spanList[numPosition].innerText = number;
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
			netWords[numPosition] = 0;
			while(netWords[numPosition] == 0)
			{
				spanList[numPosition].innerText = "";
				numPosition++;
				numStartPosition3++;
				if(numStartPosition3 == 5)
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
		spanList[numPosition].style.color = "#f00";
	}
	else
	{
		netWords[numPosition] = parseInt(number,10);			
		spanList[numPosition].innerText = number;
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
	//console.log("numPosition====="+numPosition+"sybWords=="+sybWords);
	if(numPosition == 3)//在最后一位上
	{
		/*-----此处假设上一次数据为X或XX，焦点在最后一位数字上，输入一个数字变成了X_或是XX_，但是numStartPosition2并没有改变-------------*/
		/*-----现在要再次输入数字，结果变成XX_或是XXX_，在spanList中数字开始的位置向前移动了一位，所以numStartPosition2要减1-----------*/
		/*-----至于为何上一次输入结果变成X_或是XX_后没有把numStartPosition2减一是因为“_”还不是数字,虽然他在显示上占了一位--------------*/
		//console.log("numPosition == 3 sybWords="+sybWords);
		//console.log("spanList[3].innerText="+spanList[3].innerText)
		var spanListValue = spanList[3].innerText;
		//console.log("spanListValue="+spanListValue);
		if(spanListValue == "_" || spanListValue == "-")
		{
			var t = 0;
			for(var i = 0; i < 3; i++)
			{
				sybWords[i] = sybWords[i + 1];
			}
			//console.log("spanList[3].innerTex =='_' sybWords="+sybWords);
		}
		//console.log("sybWords="+sybWords+"numStartPosition2="+numStartPosition2);
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
				numStartPosition2 = numStartPosition2 - 1;
				spanList[3].innerHTML = "_";
				spanList[3].style.color = "#f00";
				for(var i = 2; i >= numStartPosition2; i--)
				{
					spanList[i].innerHTML = sybWords[i + 1];
				}
				//console.log("spanList  sybWords="+sybWords);
				return;
			}
		}
		else
		{
			sybWords[numPosition] = parseInt(number,10);
			spanList[numPosition].innerText = number;
			spanList[numPosition].style.color = "#fff";
			numPosition = numStartPosition2;
			spanList[numPosition].style.color = "#f00";
			for(var i = 2; i >= numStartPosition2; i--)
			{
				spanList[i].innerHTML = sybWords[i];
			}
			console.log("spanList else  sybWords="+sybWords);
		}
	}
	else if(numPosition == numStartPosition2)
	{
		//console.log("numPosition == numStartPosition2 sybWords="+sybWords);
		sybWords[numPosition] = parseInt(number,10);
		spanList[numPosition].style.color = "#fff";
		if(number == 0)
		{
			sybWords[numPosition] = 0;
			while(sybWords[numPosition] == 0)
			{
				spanList[numPosition].innerText = "";
				numPosition++;
				numStartPosition2++;
				if(numStartPosition2 == 3)
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
		spanList[numPosition].style.color = "#f00";
	}
	else
	{
		//console.log("else sybWords="+sybWords);
		sybWords[numPosition] = parseInt(number,10);			
		spanList[numPosition].innerText = number;
		spanList[numPosition].style.color = "#fff";
		numPosition++;
		//numStartPosition2--;
		spanList[numPosition].style.color = "#f00";
	}
	
	//如果输入的数值越界，自动填入边界值
	if(scanMode == 3)
	{
		spanList[numPosition].style.color = "#f00";
		return;
	}
	var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
	//console.log("s==="+s);
	if(s < 4000)
	{
		showInitSymbol(4000,spanList);
	}
	else if (s > 7200)
	{
		showInitSymbol(7200,spanList);
	}
	spanList[numPosition].style.color = "#f00";
}


/*
功能描述：搜台过程中的消息处理
参数：id:0（atv或dtv进度更新的消息），1代表atv搜台结束，2代表dtv搜台结束
全局变量：scanningInfo;focusOn;progress;digitalScanCount；
*/
var scanningInfo;
function updateInfo(id)
{
	if(isSearch == 0)//如果已经停止搜台则不处理
	{
		return;
	}
	
    switch (id)
    {
		case 0:
		{
			scanningInfo = channel.getScanningInfo();
			channel.testLog("get scanningInfo = " + scanningInfo);
			cutScanningInfo(scanningInfo);//将scanningInfo切分并保存到响应的变量中
			
			if(progress > 100)
			{
				channel.testLog("error in updateInfo  ------- progress = " + progress);
				return;
			}
			
			if(channelType == 0)//atv + dtv搜台
			{
				if(progressFlag == 0)//搜台前半部分：dtv 搜台
				{
					if(progress > 0)
					{
						$("scanResult2").innerText = chGenreWords[1] + digitalScanCount;
						$("scanResult1").innerText = chGenreWords[0] + anologScanCount;
						var mid = PROGRESS_WIDTH/2;
						$("progressLeft").style.width = parseInt(progress*mid/100,10) + "px";
						$("progressRight").style.width = parseInt(mid + (100 - progress)*mid/100,10) + "px";
						$("progressValue").innerText = parseInt(progress/2,10) + "%";
					}
					if(progress == 100)
					{
						channel.stopScan();
					}
				}
				else//progressFlag == 1，搜台后半部分：atv搜台
				{
					if (progress > 0 ) 
					{
						$("scanResult1").innerText = chGenreWords[0] + anologScanCount;
						var mid = PROGRESS_WIDTH/2;
						$("progressLeft").style.width = parseInt(mid + progress*mid/100,10) + "px";
						$("progressRight").style.width = parseInt((100 - progress)*mid/100,10) + "px";
						$("progressValue").innerText = parseInt(50 + progress/2,10) + "%";
					}
					
					if(progress == 100)
					{
						$("scanStatus").innerText = scanStatusWords[1];
					}
				}
			}
			else if(channelType == 1)//dtv搜台
			{
				if(progress > 0)
				{
					$("scanResult2").innerText = chGenreWords[1] + digitalScanCount;
					$("progressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
					$("progressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
					$("progressValue").innerText = progress + "%";
				}
				
				if(progress == 100)
				{
					$("scanStatus").innerText = scanStatusWords[1];
					channel.stopScan();
				}
			}
			else if(channelType == 2)//atv 搜台
			{
				if(progress > 0)
				{
					$("scanResult1").innerText = chGenreWords[0] + anologScanCount;
					$("progressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
					$("progressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
					$("progressValue").innerText = progress + "%";
				}
				
				if(progress == 100)
				{
					$("scanStatus").innerText = scanStatusWords[1];
				}
			}
			break;
		}
		case 1://atv finish,atv搜台停止不需要我们自己调用停止函数，底层自己调用
		{
			//说明是正常搜台结束，而非手动停止搜台(因为手动停止的时候isSearch已经为0
			isSearch = 0;
			checkDtvAndAtvCountToChangeServiceTypeAndSource();
			setTimeout(function(){toExit();},3000);
			focusOn = "exit";
			break;
		}
		case 2://dtv scan finish
		{
			if(channelType == 0)//atv + dtv 搜台
			{
				//说明是正常搜台结束，而非手动停止搜台(因为手动停止的时候isSearch已经为0
				if(progressFlag == 0)//在analog+digital时使用，这时的进度条分为两段来处理，0 表示前半段，1表示后半断
				{
					isSearch = 1;
					progressFlag = 1;
					top.stopTimeout();
					$("search").style.border = "medium solid #00aadd";
					channel.startScanAtvAuto();
				}
			}
			else//dtv 搜台
			{
				//说明是正常搜台结束，而非手动停止搜台(因为手动停止的时候isSearch已经为0
				isSearch = 0;
				checkDtvAndAtvCountToChangeServiceTypeAndSource();
				setTimeout(function(){toExit();},3000);
				focusOn = "exit";
			}
			break;
		}
		default:
		{
			break;
		}
    }
}

function checkDtvAndAtvCountToChangeServiceTypeAndSource()
{
	if(channelType == 2)//atv
	{
		if(anologScanCount > 0)
		{
			channel.setServiceType(0);//atv
			channel.inputSource = 0;//atv
		}
		else
		{
			channel.setServiceType(1);//dtv
			channel.inputSource = 1;//dtv
		}
	}
	else if(channelType == 1)//dtv
	{
		channel.setServiceType(1);//dtv
		channel.inputSource = 1;//dtv
	}
	else//dtv+atv搜台
	{
		if(digitalScanCount > 0 || (digitalScanCount <= 0 && anologScanCount <= 0))
		{
			channel.setServiceType(1);//dtv
			channel.inputSource = 1;//dtv
		}
		else
		{
			channel.setServiceType(0);//atv
			channel.inputSource = 0;//atv
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
	channel.testLog("in cutScanningInfo progress = " + progress);
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
全局变量：numPosition;freqWords;numStartPosition;frequency
*/
function showFreqWhenChanged(freq,spanList)
{
	if(freq < 0)
	{
		freq = 0;
	}
	separateFreq(freq);
	//channel.testLog("in showFreqWhenChanged freq = " + freq);
	if(frequency < 0)
	{
		for(var j = 0; j < 5; j++)
		{
			spanList[j].innerText = "";
			freqWords[j] = 0;
		}
		freqWords[5] = 0;
		numPosition = 5;
		numStartPosition = 5;
		spanList[5].innerText = "-";
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
				spanList[i].innerText = freqWords[i];
			}
			else
			{
				spanList[i].innerText = "";
			}
		}/*
		else if(sybWords[i] < 0)//频点为负值，说明symbol rate没有初始值
		{
			for(var j = i; j < 5; j++)
			{
				spanList[j].innerText = "";
			}
			numPosition = 5;
			numStartPosition = 5;
			spanList[5].innerText = "-";
			return;
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
			spanList[i].innerText = freqWords[i];
		}
	}
}

/*
功能描述： 搜台过程中的参数输入频点数字的时候按left键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;freqWords;numStartPosition;
*/
function doLeftFreqInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(numStartPosition > 0)//输入的数字位数不满6位，有空余 
	{
		if(spanList[5].innerText == "_")//焦点已经在数字的最后一位上,numPosition == 5
		{
			numPosition = 5;
			var isMidZero = 0;//判断当前的0是否是数中的0
			for(var i = 0; i < 6; i++)
			{
				if(isMidZero == 0 && freqWords[i] == 0)
				{
					spanList[i].innerText = "";
				}
				else
				{
					isMidZero = 1;
					spanList[i].innerText = freqWords[i];
				}
			}
		}
		else if(numPosition <= numStartPosition)
		{
			numPosition = 5;
			if(freqWords[5] == 0 &&  numStartPosition == 5)//当前只有一位且数字为0
			{
				return;
			}
			else
			{
				spanList[5].innerText = "_";
				spanList[5].style.color = "#f00";
				for(var i = 4; i >= (numStartPosition - 1); i--)
				{
					spanList[i].innerText = freqWords[i + 1];
				}
			}
		}
		else
		{
			numPosition--;
		}
	}
	else//numStartPosition == 0;
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
	if(numStartPosition > 0)//输入的数字位数不满6位，有空余 
	{
		if(spanList[5].innerText == "_")//焦点已经在数字的最后一位上,且显示“——”,numPosition == 5
		{
			numPosition = numStartPosition;
			var isMidZero = 0;//判断当前的0是否是数中的0
			for(var i = 0; i < 6; i++)
			{
				if(isMidZero == 0 && freqWords[i] == 0)
				{
					spanList[i].innerText = "";
				}
				else
				{
					isMidZero = 1;
					spanList[i].innerText = freqWords[i];
				}
			}
		}
		else if(numPosition == 5)//焦点已经在数字的最后一位上,且显示最后一个为字母为数字,numPosition == 5
		{
			if(freqWords[5] == 0 &&  numStartPosition == 5)//当前只有一位且数字为0
			{
				return;
			}
			else
			{
				spanList[5].innerText = "_";
				spanList[5].style.color = "#f00";
				for(var i = 4; i >= (numStartPosition - 1); i--)
				{
					spanList[i].innerText = freqWords[i + 1];
				}
			}
		}
		else
		{
			numPosition++;			
		}
	}
	else//numStartPosition == 0
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
功能描述：将symbol rate分解每一位上的数保存在数组sybWords中
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
功能描述： symbol更改刷新显示的处理
参数：syb:symbol rate；spanList:数字输入框的span list
全局变量：numPosition;sybWords;numStartPosition2;symbolRate
*/
function showInitSymbol(syb,spanList)
{
	if(syb < 0)
	{
		syb = 0;
	}
	separateSyb(syb);
	//console.log("symbolRate----------"+symbolRate);
	if(symbolRate < 0)
	{
		for(var j = 0; j < 4; j++)
		{
			spanList[j].style.color = "#fff";
			if(j < 3)
			{
				spanList[j].innerText = "";
			}
			else
			{
				spanList[j].innerText = "-";
			}
		}
		numPosition = 3;
		numStartPosition2 = 3;
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
				spanList[i].innerText = sybWords[i];
			}
			else
			{
				spanList[i].innerText = "";
			}
		}/*
		else if(sybWords[i] < 0)//频点为负值，说明symbol rate没有初始值
		{
			for(var j = i; j < 3; j++)
			{
				spanList[j].innerText = "";
			}
			numPosition = 3;
			numStartPosition2 = 3;
			spanList[3].innerText = "-";
			return;
		}*/
		else
		{
			///////////////////////当前为第一个最高位不为0的时候///////////////////////
			/*-----------------XX83----------------*/ /*------------7778-------------------*/
			/*如上中高位第一个不为0的位是第2位（从0开始计算）*/ /*如上中高位第一个不为0的位是第0位（从0开始计算）*/
			if(flag == 0)
			{
				numPosition = i;
				numStartPosition2 = i;
			}
			///////////////////////当前为第一个最高位不为0的时候///////////////////////
			flag = 1;
			spanList[i].innerText = sybWords[i];
		}
	}
}

/*
功能描述： 搜台过程中的参数输入symbol rate的时候按left键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;sybWords;numStartPosition2;
*/
function doLeftSybInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(numStartPosition2 > 0)//输入的数字位数不满4位，有空余
	{
		if(spanList[3].innerText == "_")//焦点已经在数字的最后一位上,numPosition == 3
		{
			numPosition = 3;
			var isMidZero = 0;//判断当前的0是否是数中的0
			for(var i = 0; i < 4; i++)
			{
				if(isMidZero == 0 && sybWords[i] == 0)
				{
					spanList[i].innerText = "";
				}
				else
				{
					isMidZero = 1;
					spanList[i].innerText = sybWords[i];
				}
			}
		}
		else if(numPosition <= numStartPosition2)
		{
			numPosition = 3;
			if(sybWords[3] == 0 &&  numStartPosition2 == 3)//当前只有一位且数字为0
			{
				return;
			}
			else
			{
				spanList[3].innerText = "_";
				spanList[3].style.color = "#f00";
				for(var i = 2; i >= (numStartPosition2 - 1); i--)
				{
					spanList[i].innerText = sybWords[i + 1];
				}
			}
		}
		else
		{
			numPosition--;
		}
	}
	else//numStartPosition2 == 0
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
功能描述： 搜台过程中的参数输入symbol rate数字的时候按Right键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;sybWords;numStartPosition2;
*/
function doRightSybInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(numStartPosition2 > 0)//输入数字不满4位
	{
		if(spanList[3].innerText == "_")//numPosition == 3，且当前焦点显示为“_”
		{
			numPosition = numStartPosition2;
			var isMidZero = 0;//判断当前的0是否是数中的0
			for(var i = 0; i < 4; i++)
			{
				if(isMidZero == 0 && sybWords[i] == 0)
				{
					spanList[i].innerText = "";
				}
				else
				{
					isMidZero = 1;
					spanList[i].innerText = sybWords[i];
				}
			}
		}
		else if(numPosition == 3)//当前焦点为最后一位数字上
		{
			if(sybWords[3] == 0 &&  numStartPosition2 == 3)//当前只有一位且数字为0
			{
				return;
			}
			else
			{
				spanList[3].innerText = "_";
				spanList[3].style.color = "#f00";
				for(var i = 2; i >= (numStartPosition2 - 1); i--)
				{
					spanList[i].innerText = sybWords[i + 1];
				}
			}
		}
		else
		{
			numPosition++;
		}
	}
	else//numStartPosition2 == 0
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
功能描述：将network id分解的每一位上的数保存在数组netWords中
参数：network:000000-999999
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
功能描述： 搜台过程中初始化network id
参数：netId:networkId；spanList:数字输入框的span list
全局变量：numPosition;netWords;numStartPosition3;
*/
function showInitNetworkId(netId,spanList)
{
	if(netId < 0)
	{
		netId = 0;
	}
	separateNetId(netId);
	
	if(networkId <= -10)
	{
		for(var j = 0; j < 6; j++)
		{
			spanList[j].style.color = "#fff";
			if(j < 5)
			{
				spanList[j].innerText = "";
			}
			else
			{
				spanList[j].innerText = auto;
			}
		}
		numPosition = 5;
		numStartPosition3 = 5;
		return;
	}
	else if(networkId < 0)
	{
		for(var j = 0; j < 6; j++)
		{
			spanList[j].style.color = "#fff";
			if(j < 5)
			{
				spanList[j].innerText = "";
			}
			else
			{
				spanList[j].innerText = "-";
			}
		}
		numPosition = 5;
		numStartPosition3 = 5;
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
				spanList[i].innerText = netWords[i];
			}
			else
			{
				spanList[i].innerText = "";
			}
		}/*
		else if(netWords[i] < 0)//频点为负值，说明symbol rate没有初始值
		{
			for(var j = i; j < 5; j++)
			{
				spanList[j].innerText = "";
			}
			numPosition = 5;
			numStartPosition3 = 5;
			if(i < 5)//说明netId值小于等于-10
			{
				spanList[5].innerText = auto;
			}
			else
			{
				spanList[5].innerText = "-";
			}
			return;
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
			spanList[i].innerText = netWords[i];
		}
	}
}

/*
功能描述：初始化搜台界面中的初始化搜台进度条和搜到的节目数量显示
参数：chType:channelType		//0 digital + analogue,1 digital,2 analogue
全局变量：
*/
function initScanInfo(chType)
{
	$("progressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
	$("progressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
	$("progressValue").innerText = progress + "%";/*
	if(chType == 0)
	{
		$("scanResult1").innerText = chGenreWords[0] + anologScanCount;
		$("scanResult2").innerText = chGenreWords[1] + digitalScanCount;
	}
	else if(chType == 1)
	{
		$("scanResult1").innerText = "";
		$("scanResult2").innerText = chGenreWords[1] + digitalScanCount;
	}
	else
	{
		$("scanResult1").innerText = chGenreWords[0] + anologScanCount;
		$("scanResult2").innerText = "";
	}*/
}

/*
功能描述： 搜台过程中的参数输入network id的时候按left键的处理
参数：spanList:数字输入框的span list
全局变量：numPosition;netWords;numStartPosition3;
*/
function doLeftNetInNumberInput(spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(numStartPosition3 > 0)//输入数字不满6个数字
	{
		if(spanList[5].innerText == "_")//numPosition == 5,且当前焦点显示的是"_"
		{
			numPosition = 5;
			var isMidZero = 0;//判断当前的0是否是数中的0
			for(var i = 0; i < 6; i++)
			{
				if(isMidZero == 0 && netWords[i] == 0)
				{
					spanList[i].innerText = "";
				}
				else
				{
					isMidZero = 1;
					spanList[i].innerText = netWords[i];
				}
			}
		}
		else if(numPosition <= numStartPosition3)
		{
			numPosition = 5;
			if(netWords[5] == 0 &&  numStartPosition3 == 5)//当前只有一位且数字为0
			{
				return;
			}
			else
			{
				spanList[5].innerText = "_";
				spanList[5].style.color = "#f00";
				for(var i = 4; i >= (numStartPosition3 - 1); i--)
				{
					spanList[i].innerText = netWords[i + 1];
				}
			}
		}
		else
		{
			numPosition--;
		}
	}
	else//numStartPosition3 == 0
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
	if(numStartPosition3 > 0)//输入的数字位数不满6位，有空余 
	{
		if(spanList[5].innerText == "_")
		{
			numPosition = numStartPosition3;
			var isMidZero = 0;//判断当前的0是否是数中的0
			for(var i = 0; i < 6; i++)
			{
				if(isMidZero == 0 && netWords[i] == 0)
				{
					spanList[i].innerText = "";
				}
				else
				{
					isMidZero = 1;
					spanList[i].innerText = netWords[i];
				}
			}
		}
		else if(numPosition == 5)//焦点已经在数字的最后一位上,且显示最后一个为字母为数字,numPosition == 5
		{
			if(netWords[5] == 0 &&  numStartPosition3 == 5)//当前只有一位且数字为0
			{
				return;
			}
			else
			{
				spanList[5].innerText = "_";
				spanList[5].style.color = "#f00";
				for(var i = 4; i >= (numStartPosition3 - 1); i--)
				{
					spanList[i].innerText = netWords[i + 1];
				}
			}
		}
		else
		{
			numPosition++;			
		}
	}
	else//numStartPosition3 == 0
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
参数：scanModeValue
全局变量：country
需求：需要知道所有支持的国家的枚举值：
var countryIndex		= [1,2,3,4,5,6,28,7,8,9,
							10,11,33,12,30,58,13,14,15,16,
							17,18,19,20,31,21,22,23,24,32,
							59,25];//其中>=58的是国家枚举中没有的东西
*/
function initScanParameter(scanModeValue)
{
	channel.testLog("in initScanParameter country = " + country + ",scanModeValue = " + scanModeValue);
	if(country == 1 || country == 11 || country == 33 || country == 16 || country == 18)//有UPC和Others两种搜台
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
	else if(country == 6)//Denmark
	{
		frequency = 143000;
		modulation = 5;
		symbolRate = 6875;
		networkId = 999;
	}
	else if(country == 7)//finland only have quick search
	{
		frequency			= -1;
		modulation			= -1;
		symbolRate			= -1;
		networkId			= -1;
	}
	else if(country == 8 || country == 9)//Freance,Germany
	{
		frequency			= 306000;
		modulation			= 5;
		symbolRate			= 6875;
		networkId			= 999;
	}
	else if(country == 14)//Netherlands
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
	else if(country == 15)//Norway
	{
		frequency			= 386000;
		modulation			= 5;
		symbolRate			= 6900;
		networkId			= -10;//表示Auto
	}
	else if(country == 23)//Sweden
	{
		frequency			= 362000;
		modulation			= 5;
		symbolRate			= 6875;
		networkId			= 41001;
	}
	else if(country == 24)//Switzerland,有UPC和Others两种搜台
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
	tuner:tunerMode;		//0 cable, 1 air	
	chType:channelType		//0 digital + analogue,1 digital,2 analogue
全局变量：
*/
var autoFreqContentSpanList;
var autoSybContentSpanList;
var autoNetContentSpanList;
var scanOptionsLiList;
function initAutoScan(scanModeValue,tuner,chType)
{
	channel.testLog("in initAutoScan scanModeValue = " + scanModeValue + ",tuner = " + tuner + ",chType =" + chType);
	$("scanStatus").innerText = "";
	$("scanResult1").innerText = "";
	$("scanResult2").innerText = "";
	var scanHeight = 0;
	digitalScanCount = 0;
	anologScanCount = 0;
	progress = 0;
	progressFlag = 0;
	list_position_h = 0;
	$("scanTitle").innerText = autoScanTitleWords[2];
	initScanInfo(chType);
	$("search").style.border = "none";
	$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
	$("scanInputFocus").style.display = "block";
	
	if(tuner == 1)//antenna,只有直接搜台
	{
		channel.stopTv();
		isSearch = 1;
		top.stopTimeout();
		$("scanStatus").innerText = scanStatusWords[0];
		$("scanOptions").style.display = "none";
		scanHeight = SCAN_FORM_HEIGHT_START - 60;
		if(chType == 0)//digital + analogue
		{
			$("search").innerText = searchStop[1];
			$("search").style.border = "medium solid #00aadd";
			channel.startScanDtvAuto( 0/*full/advanced*/,-1/*frequency*/,-1/*frequency to*/, -1/*modulation*/, -1/*symbol*/, -1/*network*/);
		}
		else if(chType == 1)//only digital search
		{
			$("search").innerText = searchStop[1];
			$("search").style.border = "medium solid #00aadd";
			channel.startScanDtvAuto( 0/*full/advanced*/,-1/*frequency*/,-1/*frequency to*/, -1/*modulation*/, -1/*symbol*/, -1/*network*/);
		}
		else//only analogue search
		{
			$("search").innerText = searchStop[1];
			$("search").style.border = "medium solid #00aadd";
			channel.startScanAtvAuto();
		}
	}
	else//cable
	{
		if(chType == 0 || chType == 1)//digital + analogue或digital
		{
			//设置默认参数
			initScanParameter(scanModeValue);
			channel.testLog("frequency	= "  + frequency + ";modulation	= " + modulation + ";symbolRate	= " + symbolRate + ";networkId = = " + networkId + ";");
			isSearch = 0;
			$("scanStatus").innerText = "";//scanStatusWords[2];
			$("autoModeTitle").innerText = scanOptionWords[8];
			$("autoFreqTitle").innerText = top.chScanParaMHZ[0];//change yums:2014-12-19 //scanOptionWords[0];
			$("autoMoTitle").innerText = scanOptionWords[1];
			$("autoSybTitle").innerText = scanOptionWords[2];
			$("autoNetTitle").innerText = scanOptionWords[3];
			$("search").innerText = searchStop[0];
			if(country == 7)//finland only have quick search
			{
				scanHeight = SCAN_FORM_HEIGHT_START + 0*SCAN_FORM_AND_FOCUS_STEP;
				$("search").style.border = "medium solid #00aadd";
				$("scanOptions").style.display = "none";
				channel.stopTv();
				if(channelType == 0) progressFlag = 0;
				isSearch = 1;
				top.stopTimeout();
				$("scanStatus").innerText = scanStatusWords[0];
				$("search").innerText = searchStop[1];
				channel.startScanDtvAuto(scanMode, -1/*frequency from*/,-1/*frequency to*/,-1/*modulation*/, -1/*symbol*/,-1/*network*/);
			}
			else
			{
				if(scanModeValue == 4)//ziggo
				{
					scanHeight = SCAN_FORM_HEIGHT_START + 4*SCAN_FORM_AND_FOCUS_STEP;
					
					scanOptionsLiList[0].style.display = "none";
					scanOptionsLiList[1].style.display = "block";
					scanOptionsLiList[2].style.display = "block";
					scanOptionsLiList[3].style.display = "block";
					scanOptionsLiList[4].style.display = "block";
					scanOptionsLiList[5].style.display = "block";
					
					autoFreqContentSpanList = $("autoFreqContent").getElementsByTagName("span");
					showFreqWhenChanged(frequency,autoFreqContentSpanList);
					$("autoMoContent").innerText = modulationWords[modulation];
					autoSybContentSpanList = $("autoSybContent").getElementsByTagName("span");
					showInitSymbol(symbolRate,autoSybContentSpanList);
					autoNetContentSpanList = $("autoNetContent").getElementsByTagName("span");
					showInitNetworkId(networkId,autoNetContentSpanList);
					$("scanOptions").style.display = "block";
					numPosition = numStartPosition;
					autoFreqContentSpanList[numPosition].style.color = "#f00";
				}
				else if(scanModeValue == 3)//UPC
				{
					scanHeight = SCAN_FORM_HEIGHT_START + 4*SCAN_FORM_AND_FOCUS_STEP;
					
					scanOptionsLiList[0].style.display = "none";
					scanOptionsLiList[1].style.display = "block";
					scanOptionsLiList[2].style.display = "block";
					scanOptionsLiList[3].style.display = "block";
					scanOptionsLiList[4].style.display = "block";
					scanOptionsLiList[5].style.display = "block";
					
					autoFreqContentSpanList = $("autoFreqContent").getElementsByTagName("span");
					showFreqWhenChanged(frequency,autoFreqContentSpanList);
					$("autoMoContent").innerText = modulationWords[modulation];
					autoSybContentSpanList = $("autoSybContent").getElementsByTagName("span");
					showInitSymbol(symbolRate,autoSybContentSpanList);
					autoNetContentSpanList = $("autoNetContent").getElementsByTagName("span");
					showInitNetworkId(networkId,autoNetContentSpanList);
					$("scanOptions").style.display = "block";
					numPosition = numStartPosition;
					autoFreqContentSpanList[numPosition].style.color = "#f00";
				}
				else if(scanModeValue == 1)//advanced
				{
					scanHeight = SCAN_FORM_HEIGHT_START + 5*SCAN_FORM_AND_FOCUS_STEP;
					
					scanOptionsLiList[0].style.display = "block";
					$("autoModeContent").innerText = scanModeWords[scanModeValue];
					scanOptionsLiList[1].style.display = "block";
					scanOptionsLiList[2].style.display = "block";
					scanOptionsLiList[3].style.display = "block";
					scanOptionsLiList[4].style.display = "block";
					scanOptionsLiList[5].style.display = "block";
					
					autoFreqContentSpanList = $("autoFreqContent").getElementsByTagName("span");
					showFreqWhenChanged(frequency,autoFreqContentSpanList);
					$("autoMoContent").innerText = modulationWords[modulation];
					autoSybContentSpanList = $("autoSybContent").getElementsByTagName("span");
					showInitSymbol(symbolRate,autoSybContentSpanList);
					autoNetContentSpanList = $("autoNetContent").getElementsByTagName("span");
					showInitNetworkId(networkId,autoNetContentSpanList);
					$("scanOptions").style.display = "block";
				}
				else if(scanModeValue == 2 || scanModeValue == 0)//quick
				{
					scanHeight = SCAN_FORM_HEIGHT_START + 1*SCAN_FORM_AND_FOCUS_STEP;
					
					scanOptionsLiList[0].style.display = "block";
					$("autoModeContent").innerText = scanModeWords[scanModeValue];
					scanOptionsLiList[1].style.display = "none";
					scanOptionsLiList[2].style.display = "none";
					scanOptionsLiList[3].style.display = "none";
					scanOptionsLiList[4].style.display = "none";
					scanOptionsLiList[5].style.display = "block";
					$("scanOptions").style.display = "block";
				}
				list_position_h = 0;
				$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
			}
		}
		else//analogue
		{
			scanHeight = SCAN_FORM_HEIGHT_START - 60;
			channel.stopTv();
			isSearch = 1;
			top.stopTimeout();
			$("scanStatus").innerText = scanStatusWords[0];
			$("scanResult2").innerText = "";
			$("scanOptions").style.display = "none";
			$("scanForm").style.height = scanHeight + "px";
			$("search").innerText = searchStop[1];
			$("search").style.border = "medium solid #00aadd";
			channel.startScanAtvAuto();
		}
	}
	$("scanForm").style.height = scanHeight + "px";
	$("scanForm").style.display = "block";
	top.showDialogPosition($("scanForm"),800,scanHeight,1920,1080,0,0);
	channel.testLog("in initAutoScan end");
}

/*
功能描述：初始化operator框，根据国家的不同显示不同的运营商。前提条件：是cable auto search;
参数：countryValue：国家
返回值：flag:0:no operators,1 have more than two operator
全局变量：;
*/
function initOperator(countryValue)
{
	var flag = 0;//0 no operator choice, 1 have operator
	if(countryValue == 7)//finland only have quich search
	{
		scanMode = 2;//others quick
		flag = 0;
	}
	else if(upcAndZiggoCountryIndex == countryValue)//当前国家拥有UPC、Ziggo搜台
	{
		operatorSum = 3;
		$("operatorTitle").innerText = autoScanTitleWords[0];
		operatorLiList[0].innerText = operatorWords[0];
		operatorLiList[1].innerText = operatorWords[1];
		operatorLiList[2].innerText = operatorWords[2];
		list_position_h = 0;
		$("operatorFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
		$("operatorForm").style.display = "block";
		flag = 1;
		top.showDialogPosition($("operatorForm"),800,300,1920,1080,0,0);
	}
	else
	{
		for(var i = 0; i < 6; i++)
		{
			if(upcScanCountryIndex[i] == countryValue)//当前国家拥有UPC搜台
			{
				operatorSum = 2;
				$("operatorTitle").innerText = autoScanTitleWords[0];
				operatorLiList[0].innerText = operatorWords[1];
				operatorLiList[1].innerText = operatorWords[2];
				operatorLiList[2].style.display = "none";
				list_position_h = 0;
				$("operatorFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
				$("operatorForm").style.display = "block";
				flag = 1;
				top.showDialogPosition($("operatorForm"),800,300,1920,1080,0,0);
				break;
			}
		}
		
		if(i >= 6)//普通情况
		{
			scanMode = 1;//初始化scanmode
			flag = 0;
		}
	}
	return flag;
}

/*
功能描述：初始化channel type框，
参数：
全局变量：;
*/
function initChType()
{
	channel.testLog("in initChType");
	$("chTypeTitle").innerText = autoScanTitleWords[1];
	chTypeLiList[0].innerText = chTypeWords[0];
	chTypeLiList[1].innerText = chTypeWords[1];
	chTypeLiList[2].innerText = chTypeWords[2];
	list_position_h = 0;
	$("chTypeForm").style.display = "block";
	top.showDialogPosition($("chTypeForm"),800,300,1920,1080,0,0);
	if(top.g_nextHtmlPage == "autoSearch.html")
	{
		top.g_nextHtmlPage = "";
		list_position_h = 1;
		doEnter();
	}
	$("chTypeFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
}


/*
功能描述：当焦点冲数字输入框移开的时候纠正spanList中数字开始的位置，特别是用于输入的数字显示类似111_中有一个“_”不是数字但占位了的情况
参数：startPositionForSpan:spanList中数字开始的位置，spanList:数字输入框的span list，wordsList：保存数字的数组
全局变量：
*/
function correctStartPositionOfSpanList(startPositionForSpan,spanList,wordsList)
{
	var length = spanList.length;
	channel.testLog("length = " + length + ",startPositionForSpan = " + startPositionForSpan);
	if(spanList[length - 1].innerText == "_")
	{
		for(var i = (length - 1); i >= 0; i--)
		{
			if(i >= startPositionForSpan)
			{
				spanList[i].innerText = wordsList[i];
			}
			else
			{
				spanList[i].innerText = "";
			}
		}
	}
}

var tunerLiList;
var countryLiList;
var thdMenuRightSpanList;
var operatorLiList;
var chTypeLiList;
function init()
{
    channel.testLog("***** AutoSearch init **** ");
    top.uiPauseDownloadingUpFile();

	timeoutInit();
	operatorLiList = $("operatorForm").getElementsByTagName("li");
	chTypeLiList = $("chTypeForm").getElementsByTagName("li");
	scanOptionsLiList = $("scanOptions").getElementsByTagName("li");
	tunerMode = channel.tunerMode;
	inputSource = channel.inputSource;
	country = channel.systemCountry;
	channel.testLog("in init tunerMode = " + tunerMode + ", country = " + country);
	if(tunerMode == 0)//cable
	{
		var flag = initOperator(country);
		if(flag == 0)//no operator
		{
			$("operatorForm").style.display = "none";
			$("scanForm").style.display = "none";
			focusOn = "channelType";
			initChType();
			
		}
		else//have operator
		{
			top.g_nextHtmlPage = "";
			$("chTypeForm").style.display = "none";
			$("scanForm").style.display = "none";
			focusOn = "operator";
		}
	}
	else//antenna
	{
		$("operatorForm").style.display = "none";
		$("scanForm").style.display = "none";
		focusOn = "channelType";
		initChType();

	}
	addMouseListener();
}

function uninit()
{
    channel.testLog("***** AutoSearch uninit **** ");
    top.uiResumeDownloadingUpFile();
	//top.$("main").style.display = "block";
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2){
			if(isSearch == 1) toSearchBack();
			else toNormalBack();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 0; i < 3; i++)
	{
		operatorLiList[i].setAttribute("newAttr",i);
		operatorLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "operator"){
					list_position_h = parseInt(this.getAttribute("newAttr"));
					$("operatorFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	for(var i = 0; i < 3; i++)
	{
		chTypeLiList[i].setAttribute("newAttr",i);
		chTypeLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "channelType"){
					list_position_h = parseInt(this.getAttribute("newAttr"));
					$("chTypeFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	//scan
	for(var i = 0; i < 5; i++)
	{
		scanOptionsLiList[i].setAttribute("newAttr",i);
		scanOptionsLiList[i].onmousedown = function(evt){
			//top.Log("in scan focusOn = " + focusOn + ",isSearch = " + isSearch + ",tunerMode = " + tunerMode + ",channelType = " + channelType + ",list_position_h = " + list_position_h + ", i = " + parseInt(this.getAttribute("newAttr")))
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)
			{//left key
				if(focusOn == "autoScan" && isSearch != 1)
				{
					//取消先前焦点
					if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/ && country != 7/*finland only have quick search*/)
					{
						if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
						{
							if(list_position_h <= 0)//freq
							{
								correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
								autoFreqContentSpanList[numPosition].style.color = "#fff";
								var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
								//如果输入的数值越界，自动填入边界值
								if(f < 45000)
								{
									showFreqWhenChanged(45000,autoFreqContentSpanList);
								}else if(f > 862000)
								{
									showFreqWhenChanged(862000,autoFreqContentSpanList);
								}
							}
							else if(list_position_h == 2)//symbol
							{
								correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
								autoSybContentSpanList[numPosition].style.color = "#fff";
								var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
								//如果输入的数值越界，自动填入边界值
								if(s < 4000)
								{
									showInitSymbol(4000,autoSybContentSpanList);
								}
								else if (s > 7200)
								{
									showInitSymbol(7200,autoSybContentSpanList);
								}
							}
							else if(list_position_h == 3)//net
							{
								correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
								autoNetContentSpanList[numPosition].style.color = "#fff";
							}
							
							$("search").style.border = "none";
							$("scanInputFocus").style.display = "none";
						}
						else if(scanMode == 1)//advanced
						{
							if(list_position_h == 1)//freq
							{
								correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
								autoFreqContentSpanList[numPosition].style.color = "#fff";
								var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
								//如果输入的数值越界，自动填入边界值
								if(f < 45000)
								{
									showFreqWhenChanged(45000,autoFreqContentSpanList);
								}else if(f > 862000)
								{
									showFreqWhenChanged(862000,autoFreqContentSpanList);
								}
							}
							else if(list_position_h == 3)//symbol
							{
								correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
								autoSybContentSpanList[numPosition].style.color = "#fff";
								var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
								//如果输入的数值越界，自动填入边界值
								if(s < 4000)
								{
									showInitSymbol(4000,autoSybContentSpanList);
								}
								else if (s > 7200)
								{
									showInitSymbol(7200,autoSybContentSpanList);
								}
							}
							else if(list_position_h == 4)//net
							{
								correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
								autoNetContentSpanList[numPosition].style.color = "#fff";
							}
							$("search").style.border = "none";
							$("scanInputFocus").style.display = "none";
						}
						else if(scanMode == 2 || scanMode == 0)//full or quick
						{
							$("scanInputFocus").style.display = "none";
						}
					}
					//设置新焦点
					if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/ && country != 7/*finland only have quick search*/)
					{
						if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
						{
							if(parseInt(this.getAttribute("newAttr")) == 1)//freq input
							{
								numPosition = numStartPosition;
								autoFreqContentSpanList[numPosition].style.color = "#f00";
							}
							else if(parseInt(this.getAttribute("newAttr")) == 3)//symbol input
							{
								numPosition = numStartPosition2;
								autoSybContentSpanList[numPosition].style.color = "#f00";
							}
							else if(parseInt(this.getAttribute("newAttr")) == 4)//network id input
							{
								numPosition = numStartPosition3;
								autoNetContentSpanList[numPosition].style.color = "#f00";
							}
							list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
							$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
							$("scanInputFocus").style.display = "block";
						}
						else if(scanMode == 1)//advanced
						{
							if(parseInt(this.getAttribute("newAttr")) == 1)//freq input
							{
								numPosition = numStartPosition;
								autoFreqContentSpanList[numPosition].style.color = "#f00";
							}
							else if(parseInt(this.getAttribute("newAttr")) == 3)//symbol input
							{
								numPosition = numStartPosition2;
								autoSybContentSpanList[numPosition].style.color = "#f00";
							}
							else if(parseInt(this.getAttribute("newAttr")) == 4)//network id input
							{
								numPosition = numStartPosition3;
								autoNetContentSpanList[numPosition].style.color = "#f00";
							}
							list_position_h = parseInt(this.getAttribute("newAttr"));
							$("scanInputFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
							$("scanInputFocus").style.display = "block";
						}
						else if(scanMode == 2 || scanMode == 0)//full or quick
						{
							$("scanInputFocus").style.display = "none";
						}
					}
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
				
	}
	
	$("search").onmousedown = function(evt){
		//top.timeoutFuc.osdTimeoutEndFuc();
		//top.Log("in scan focusOn = " + focusOn + ",isSearch = " + isSearch + ",tunerMode = " + tunerMode + ",channelType = " + channelType + ",list_position_h = " + list_position_h + ",country = " + country);
		if(evt.button == 0)
		{//left key
			if(focusOn == "autoScan"  && isSearch != 1)
			{
				//取消先前焦点
				if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/ && country != 7/*finland only have quick search*/)
				{
					if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
					{
						if(list_position_h <= 0)//freq
						{
							correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
							autoFreqContentSpanList[numPosition].style.color = "#fff";
							var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
							//如果输入的数值越界，自动填入边界值
							if(f < 45000)
							{
								showFreqWhenChanged(45000,autoFreqContentSpanList);
							}else if(f > 862000)
							{
								showFreqWhenChanged(862000,autoFreqContentSpanList);
							}
						}
						else if(list_position_h == 2)//symbol
						{
							correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
							autoSybContentSpanList[numPosition].style.color = "#fff";
							var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
							//如果输入的数值越界，自动填入边界值
							if(s < 4000)
							{
								showInitSymbol(4000,autoSybContentSpanList);
							}
							else if (s > 7200)
							{
								showInitSymbol(7200,autoSybContentSpanList);
							}
						}
						else if(list_position_h == 3)//net
						{
							correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
							autoNetContentSpanList[numPosition].style.color = "#fff";
						}
						
						$("search").style.border = "none";
						$("scanInputFocus").style.display = "none";
					}
					else if(scanMode == 1)//advanced
					{
						if(list_position_h == 1)//freq
						{
							correctStartPositionOfSpanList(numStartPosition,autoFreqContentSpanList,freqWords);
							autoFreqContentSpanList[numPosition].style.color = "#fff";
							var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
							//如果输入的数值越界，自动填入边界值
							if(f < 45000)
							{
								showFreqWhenChanged(45000,autoFreqContentSpanList);
							}else if(f > 862000)
							{
								showFreqWhenChanged(862000,autoFreqContentSpanList);
							}
						}
						else if(list_position_h == 3)//symbol
						{
							correctStartPositionOfSpanList(numStartPosition2,autoSybContentSpanList,sybWords);
							autoSybContentSpanList[numPosition].style.color = "#fff";
							var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
							//如果输入的数值越界，自动填入边界值
							if(s < 4000)
							{
								showInitSymbol(4000,autoSybContentSpanList);
							}
							else if (s > 7200)
							{
								showInitSymbol(7200,autoSybContentSpanList);
							}
						}
						else if(list_position_h == 4)//net
						{
							correctStartPositionOfSpanList(numStartPosition3,autoNetContentSpanList,netWords);
							autoNetContentSpanList[numPosition].style.color = "#fff";
						}
						$("search").style.border = "none";
						$("scanInputFocus").style.display = "none";
					}
					else if(scanMode == 2 || scanMode == 0)//full or quick
					{
						$("scanInputFocus").style.display = "none";
					}
				}
				//设置新焦点
				if(tunerMode == 0/*cable*/ && (channelType == 0 || channelType == 1)/*digital + analogue或digital*/ && country != 7/*finland only have quick search*/)
				{
					if(scanMode == 4/*ziggo*/ || scanMode == 3/*UPC*/)
					{
						list_position_h = 4;
					}
					else if(scanMode == 1)//advanced
					{
						list_position_h = 5;
					}
					else if(scanMode == 2 || scanMode == 0)//full or quick
					{
						list_position_h = 1;
					}
					$("search").style.border = "medium solid #00aadd";
				}
			}
			doEnter();
		}
	}
	
}
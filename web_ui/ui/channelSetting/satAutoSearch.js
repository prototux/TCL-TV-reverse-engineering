/******************** created by chenhua ***********************/
/*搜台开始停止OSD timeout ,搜台中返回重新开启OSD timeout，如果是等待退出到channelPlay页面则不用重启OSD timeout*/
//var chDvbsOperators 	= top.g_operators_name;
//var chDvbsSatellites	= top.g_satellites_name;
var satAutoTitles 		= [top.chScanOptions[2] + ">" + top.chAutoScanOptions[0],top.chScanOptions[2],top.chSatTitles[0],top.chSatTitles[1]];
var scanOptions			= top.chSatAutoScanOptions;
var satEditOptions		= top.chSatEidtOptions;
var satScanModeWords	= top.chSatAutoPromt[0];
var satChannelsWords	= top.chSatAutoPromt[1];
var position			= top.chSatPosition;
var offOn				= top.offOn;
var lNBFreq				= [top.chSatLNBFreq[0],"9750-10750","9750-10700","5150","5750","9750","10600","10750","11250","11300","11475"];
var diSEqCInput			= top.chSatDiSEqCInput;
var tone22KHz			= top.chSatTone22KHz;
var toneBurst			= top.chSatToneBurst;
var polarization		= top.chSatPolarization;
var others				= [top.others[19],top.others[8],top.others[20],top.others[9],top.others[21],top.others[17]];
var scaningWords		= [top.others[3]];
var scanStatusWords		= top.chScanStatus;
var pleaseSelectSatellite=top.pleaseSelectSat;

document.onnotify 		= notifyProcess;
var channel 			= top.g_channel;
var setting				= top.g_setting;

var operatorNameList	= "";
var satelliteInfoList	= "";
var operatorIndex		= 0;
var satIndex			= 0;
var scanMode 			= 0;
var channels			= 0;
var focusOn 			= "operator";		//operator,autoScan,satellite,satEdit
var languagePosition	= 0;
var menuLangIndex 		= [6,9,5,7,12,0,
							10,2,13,14,15,16,
							17,19,25,20,21,22,
							23,35,8,24,18,33,
							279,36,468];


var progress 			= 0;
var PROGRESS_WIDTH		= (600 - 10);		//总长为400个像素，但是要去掉表示当前进度的原点：10个像素
var SAT_PROGRESS_WIDTH 	= 340;
var isSearch 			= 0;
var list_position_h 	= 0;				//主界面焦点位置
var form_position_h 	= 0;
var anologScanCount 	= 0;
var digitalScanCount 	= 0;

var OPERATOR_AND_CH_TYPE_START= 110;		//operator中焦点移动起始位置
var OPTION_STEP 		= 60;				//选项菜单单焦点移动的step
var SCAN_FORM_HEIGHT_START=340;		//240:搜台进度条及其相关信息的高度，80：搜台框标题以及hr的高度
var SCAN_FOCUS_START	= 10;				//搜台框输入框焦点起始位置
var SCAN_FORM_AND_FOCUS_STEP= 60;			//当搜台框中每增加一个参数控制项需要增加的高度
var ONE_PAGE_SUM		= 10;				//每一页最多显示的个数
var selectFlagImg		= ["../images/option/check_5.png","../images/option/check_7.png"]
var satAntennaType		= 0;


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
    top.timeoutFuc.keydownFuc = keyproc;
	//top.stopTimeout();
}
function keyproc(evt)
{//channel.testLog("in auto Search keyproc");
	var ret = true;
	var keycode = evt.which;
	
	if(isSearch == 1 || focusOn == "remind")
	{
		switch(keycode)
		{
			case top.VK_POWER:
				channel.stopScan();
				top.keyDownProcess(evt);
				break;
			case top.VK_EXIT: //exit
			case top.VK_MENU: //menu
				isSearch = 0;
				$("scanStatus").innerHTML = scanStatusWords[2];
				channel.stopScan();
				channel.setServiceType(1);//dtv
				channel.inputSource = 1;//dtv
				//channel.playCurrentTv();
				setTimeout(function(){top.jumpPage();},3000);
				focusOn = "exit";
				break;
			case top.VK_BACK: //back
				toBack();
				break;
			case top.VK_ENTER:
				doEnter();
				ret = false;
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
			toBack();
			break;
		case top.VK_RED:
			if(focusOn == "satellite")
			{
				initSatelliteEdit(list_position_h + page*ONE_PAGE_SUM);
			}
			else if(focusOn == "satEdit")
			{
				if(satAntennaType == 0)
				{
					if(form_position_h == 0)
					{
						nowSatelliteInfo.name = "" +　deleteCharFromString(nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
						sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					}
					else if(form_position_h == 2)
					{
						nowSatelliteInfo.frequency = "" +　deleteCharFromString(nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
						sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					}
					else if(form_position_h == 3)
					{
						nowSatelliteInfo.symbolRate = "" +　deleteCharFromString(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
						sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					}
				}
				else
				{
					if(form_position_h == 0)
					{
						nowSatelliteInfo.name = "" +　deleteCharFromString(nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
						sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					}
					else if(form_position_h == 6)
					{
						nowSatelliteInfo.frequency = "" +　deleteCharFromString(nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
						sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					}
					else if(form_position_h == 7)
					{
						nowSatelliteInfo.symbolRate = "" +　deleteCharFromString(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
						sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					}
				}
			}
			break;
		case top.VK_GREEN:
			if(focusOn == "satEdit")
			{
				if(satAntennaType == 0)
				{
					if(form_position_h == 0)
					{
						insertCharPreToString(nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
						sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					}
					else if(form_position_h == 2)
					{
						insertCharPreToString(nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
						sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					}
					else if(form_position_h == 3)
					{
						insertCharPreToString(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
						sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					}
				}
				else
				{
					if(form_position_h == 0)
					{
						insertCharPreToString(nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
						sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					}
					else if(form_position_h == 6)
					{
						insertCharPreToString(nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
						sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					}
					else if(form_position_h == 7)
					{
						insertCharPreToString(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
						sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					}
				}
			}
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
			if(focusOn == "satEdit")
			{
				if(satAntennaType == 0)
				{
					if(form_position_h == 0)
					{
						checkInput(keycode);
					}
					else if(form_position_h == 2 || form_position_h == 3)
					{
						checkNumInput(keycode);
					}
				}
				else
				{
					if(form_position_h == 0)
					{
						checkInput(keycode);
					}
					else if(form_position_h == 6 || form_position_h == 7)
					{
						checkNumInput(keycode);
					}
				}
			}
			break;
		default:
			top.keyDownProcess(evt);
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
		if(list_position_h >= (operatorNameList.length - 1))
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("operatorFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	}
	else if(focusOn == "autoScan")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		
		if(list_position_h >= 3)
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		showAutoScanFocus(list_position_h);
	}
	else if(focusOn == "satellite")
	{
		if((list_position_h + page*ONE_PAGE_SUM) >= (satelliteInfoList.length - 1))//最后一个，包括list_positon_h == 9的情况
		{
			if(page <= 0)
			{
				list_position_h = 0;
			}
			else
			{
				page = 0;
				list_position_h = 0;
				refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM);
			}
		}
		else if(list_position_h >= (ONE_PAGE_SUM - 1))//这种情况下已经不包含当前卫星是最后一颗卫星的情况，上面一个判断已经判断了
		{
			page++;
			list_position_h = 0;
			refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM);
		}
		else
		{
			list_position_h++;
		}
		$("satFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
	}
	else if(focusOn == "satEdit")
	{
		$("delete").style.display = "none";
		$("insert").style.display = "none";
		if(satAntennaType == 0)
		{
			switch(form_position_h)
			{
				case 0:
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					nameContentSpanList[0].innerHTML = nowSatelliteInfo.name;
					nameContentSpanList[1].innerHTML = "";
					nameContentSpanList[2].innerHTML = "";
					form_position_h++;
					break;
				case 1:
					form_position_h++;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 2:
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);/*
					freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
					freqContentSpanList[1].innerHTML = "";
					freqContentSpanList[2].innerHTML = "";*/
					form_position_h++;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 3:
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
					sybContentSpanList[1].innerHTML = "";
					sybContentSpanList[2].innerHTML = "";
					form_position_h++;
					break;
				case 4:
					form_position_h = 0;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				default:
					form_position_h++;
					break;
			}
		}
		else
		{
			switch(form_position_h)
			{
				case 0:
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					nameContentSpanList[0].innerHTML = nowSatelliteInfo.name;
					nameContentSpanList[1].innerHTML = "";
					nameContentSpanList[2].innerHTML = "";
					form_position_h++;
					break;
				case 5:
					form_position_h++;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 6:
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);/*
					freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
					freqContentSpanList[1].innerHTML = "";
					freqContentSpanList[2].innerHTML = "";*/
					form_position_h++;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 7:
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
					sybContentSpanList[1].innerHTML = "";
					sybContentSpanList[2].innerHTML = "";
					form_position_h++;
					break;
				case 8:
					form_position_h = 0;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 3://add chenhua 2014.6.16
					if(nowSatelliteInfo.lNBFreq == 0)
					{
						form_position_h += 2;
					}
					else
					{
						form_position_h++;
					}
					break;
				default:
					form_position_h++;
					break;
			}
		}
		$("satInfoFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
	}
}

function toUp()
{
	if(focusOn == "operator")
	{
		if(list_position_h <= 0)
		{
			list_position_h = operatorNameList.length - 1;
		}
		else
		{
			list_position_h--;
		}
		$("operatorFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	}
	else if(focusOn == "autoScan")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(list_position_h <= 0)
		{
			list_position_h = 3;
		}
		else
		{
			list_position_h--;
		}
		showAutoScanFocus(list_position_h);
	}
	else if(focusOn == "satellite")
	{
		if(list_position_h <= 0)
		{
			if(page > 0)
			{
				page--;
				list_position_h = ONE_PAGE_SUM - 1;
				refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM);
			}
			else
			{
				if(satelliteInfoList.length <= ONE_PAGE_SUM)
				{
					list_position_h = satelliteInfoList.length - 1;
				}
				else
				{
					page = parseInt((satelliteInfoList.length - 1)/ONE_PAGE_SUM,10);
					list_position_h = parseInt((satelliteInfoList.length - 1)%ONE_PAGE_SUM);
					refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM);
				}
			}
		}
		else
		{
			list_position_h--;
		}
		$("satFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
		
	}
	else if(focusOn == "satEdit")
	{
		$("delete").style.display = "none";
		$("insert").style.display = "none";
		if(satAntennaType == 0)//signal cable
		{
			switch(form_position_h)
			{
				case 0:
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					nameContentSpanList[0].innerHTML = nowSatelliteInfo.name;
					nameContentSpanList[1].innerHTML = "";
					nameContentSpanList[2].innerHTML = "";
					
					form_position_h = 4;
					break;
				case 1:
					form_position_h--;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 2:
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);/*
					freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
					freqContentSpanList[1].innerHTML = "";
					freqContentSpanList[2].innerHTML = "";*/
					form_position_h--;
					break;
				case 3:
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
					sybContentSpanList[1].innerHTML = "";
					sybContentSpanList[2].innerHTML = "";
					form_position_h--;
					
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 4:
					form_position_h--;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				default:
					form_position_h--;
					break;
			}
		}
		else
		{
			switch(form_position_h)
			{
				case 0:
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					nameContentSpanList[0].innerHTML = nowSatelliteInfo.name;
					nameContentSpanList[1].innerHTML = "";
					nameContentSpanList[2].innerHTML = "";
					
					form_position_h = 8;
					break;
				case 1:
					form_position_h--;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 6:
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);/*
					freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
					freqContentSpanList[1].innerHTML = "";
					freqContentSpanList[2].innerHTML = "";*/
					form_position_h--;
					break;
				case 7:
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
					sybContentSpanList[1].innerHTML = "";
					sybContentSpanList[2].innerHTML = "";
					form_position_h--;
					
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 8:
					form_position_h--;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 5://add chenhua 2014.6.16
					if(nowSatelliteInfo.lNBFreq == 0)
					{
						form_position_h -= 2;
					}
					else
					{
						form_position_h--;
					}
					break;
				default:
					form_position_h--;
					break;
			}
		}
		$("satInfoFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
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
		
		if(list_position_h == 1)
		{
			if(scanMode == 0)
			{
				scanMode = 1;
			}
			else
			{
				scanMode = 0;
			}
			$("satScanMode").innerHTML = satScanModeWords[scanMode];
		}
		else if(list_position_h == 2)
		{
			if(channels == 0)
			{
				channels = 1;
			}
			else
			{
				channels = 0;
			}
			$("satChannels").innerHTML = satChannelsWords[channels];
		}
	}
	else if(focusOn == "satEdit")
	{
		if(satAntennaType == 0)
		{
			switch(form_position_h)
			{
				case 0:
					if(strPosition <= 0)
					{
						if(nowSatelliteInfo.name.length == SAT_NAME_MAX_LENGTH)
						{
							strPosition = SAT_NAME_MAX_LENGTH - 1;
							strFocusFlag = 0;
						}
						else
						{
							strPosition = nowSatelliteInfo.name.length;
							strFocusFlag = 1;
						}
					}
					else
					{
						//无论strFocusFlag为0还是1操作相同
							strPosition--;
							strFocusFlag = 0;
					}
					sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					break;
				case 1:
					if(nowSatelliteInfo.position == 0)
					{
						nowSatelliteInfo.position = 1;
					}
					else
					{
						nowSatelliteInfo.position--;
					}
					$("positionSpan").innerHTML = position[nowSatelliteInfo.position];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 2:
					if(strPosition <= 0)
					{
						if(nowSatelliteInfo.frequency.length == FREQUENCY_MAX_LENGTH)
						{
							strPosition = FREQUENCY_MAX_LENGTH - 1;
							strFocusFlag = 0;
						}
						else
						{
							strPosition = nowSatelliteInfo.frequency.length;
							strFocusFlag = 1;
						}
					}
					else
					{
						//无论strFocusFlag为0还是1操作相同
							strPosition--;
							strFocusFlag = 0;
					}
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					break;
				case 3:
					channel.testLog("in left strPosition 0 = " + strPosition);
					if(strPosition <= 0)
					{
						if(nowSatelliteInfo.symbolRate.length == SYMBOL_RATE_MAX_LENGTH)
						{
							channel.testLog("in left symbol max strPosition = " + strPosition);
							strPosition = SYMBOL_RATE_MAX_LENGTH - 1;
							channel.testLog("in left symbol max strPosition = " + strPosition);
							strFocusFlag = 0;
							channel.testLog("in left symbol max strPosition = " + strPosition);
						}
						else
						{
							strPosition = nowSatelliteInfo.symbolRate.length;
							strFocusFlag = 1;
						}
					}
					else
					{
						//无论strFocusFlag为0还是1操作相同
							strPosition--;
							strFocusFlag = 0;
					}
					channel.testLog("in left strPosition = " + strPosition);
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					break;
				case 4:
					if(nowSatelliteInfo.polarization == 0)
					{
						nowSatelliteInfo.polarization = 1;
					}
					else
					{
						nowSatelliteInfo.polarization--;
					}
					$("polarizationSpan").innerHTML = polarization[nowSatelliteInfo.polarization];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				default:	
					break;
			}
		}
		else
		{
			switch(form_position_h)
			{
				case 0:
					if(strPosition <= 0)
					{
						if(nowSatelliteInfo.name.length == SAT_NAME_MAX_LENGTH)
						{
							strPosition = SAT_NAME_MAX_LENGTH - 1;
							strFocusFlag = 0;
						}
						else
						{
							strPosition = nowSatelliteInfo.name.length;
							strFocusFlag = 1;
						}
					}
					else
					{
						//无论strFocusFlag为0还是1操作相同
							strPosition--;
							strFocusFlag = 0;
					}
					sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					break;
				case 1:
					if(nowSatelliteInfo.lNBPower == 0)
					{
						nowSatelliteInfo.lNBPower = 1;
					}
					else
					{
						nowSatelliteInfo.lNBPower--;
					}
					$("lNBPowerSpan").innerHTML = offOn[nowSatelliteInfo.lNBPower];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 2:
					if(nowSatelliteInfo.lNBFreq <= 0)
					{
						nowSatelliteInfo.lNBFreq = 10;
					}
					else
					{
						nowSatelliteInfo.lNBFreq--;
					}
					$("lNBFreqSpan").innerHTML = lNBFreq[nowSatelliteInfo.lNBFreq];
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					//add chenhua 2014.6.16
					showAboutLNBFreq();
					break;
				case 3:
					if(nowSatelliteInfo.diSEqCInput <= 0)
					{
						nowSatelliteInfo.diSEqCInput = 4;
					}
					else
					{
						nowSatelliteInfo.diSEqCInput--;
					}
					$("diSEqCInputSpan").innerHTML = diSEqCInput[nowSatelliteInfo.diSEqCInput];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 4:
					if(nowSatelliteInfo.tone22KHz <= 0)
					{
						nowSatelliteInfo.tone22KHz = 2;
					}
					else
					{
						nowSatelliteInfo.tone22KHz--;
					}
					$("tone22KHzSpan").innerHTML = tone22KHz[nowSatelliteInfo.tone22KHz];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 5:
					if(nowSatelliteInfo.toneBurst <= 0)
					{
						nowSatelliteInfo.toneBurst = 2;
					}
					else
					{
						nowSatelliteInfo.toneBurst--;
					}
					$("tonBurstSpan").innerHTML = toneBurst[nowSatelliteInfo.toneBurst];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 6:
					channel.testLog("in left freq strPosition = " + strPosition  + "  nowSatelliteInfo.frequency.length = " + nowSatelliteInfo.frequency.length);
					if(strPosition <= 0)
					{
						if(nowSatelliteInfo.frequency.length == FREQUENCY_MAX_LENGTH)
						{
							strPosition = FREQUENCY_MAX_LENGTH - 1;
							strFocusFlag = 0;
						}
						else
						{
							strPosition = nowSatelliteInfo.frequency.length;
							strFocusFlag = 1;
						}
					}
					else
					{
						//无论strFocusFlag为0还是1操作相同
							strPosition--;
							strFocusFlag = 0;
					}
					channel.testLog("in left freq strPosition2 = " + strPosition);
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					break;
				case 7:
					channel.testLog("in left strPosition 0 = " + strPosition);
					if(strPosition <= 0)
					{
						if(nowSatelliteInfo.symbolRate.length == SYMBOL_RATE_MAX_LENGTH)
						{
							channel.testLog("in left symbol max strPosition = " + strPosition);
							strPosition = SYMBOL_RATE_MAX_LENGTH - 1;
							channel.testLog("in left symbol max strPosition = " + strPosition);
							strFocusFlag = 0;
							channel.testLog("in left symbol max strPosition = " + strPosition);
						}
						else
						{
							strPosition = nowSatelliteInfo.symbolRate.length;
							strFocusFlag = 1;
						}
					}
					else
					{
						//无论strFocusFlag为0还是1操作相同
							strPosition--;
							strFocusFlag = 0;
					}
					channel.testLog("in left strPosition = " + strPosition);
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					break;
				case 8:
					if(nowSatelliteInfo.polarization == 0)
					{
						nowSatelliteInfo.polarization = 1;
					}
					else
					{
						nowSatelliteInfo.polarization--;
					}
					$("polarizationSpan").innerHTML = polarization[nowSatelliteInfo.polarization];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				default:	
					break;
			}
		}
	}
	else
	{
		toBack();
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
		
		if(list_position_h == 1)
		{
			if(scanMode == 0)
			{
				scanMode = 1;
			}
			else
			{
				scanMode = 0;
			}
			$("satScanMode").innerHTML = satScanModeWords[scanMode];
		}
		else if(list_position_h == 2)
		{
			if(channels == 0)
			{
				channels = 1;
			}
			else
			{
				channels = 0;
			}
			$("satChannels").innerHTML = satChannelsWords[channels];
		}
	}
	else if(focusOn == "satEdit")
	{
		if(satAntennaType == 0)
		{
			switch(form_position_h)
			{
				case 0:
					if(strPosition >= (SAT_NAME_MAX_LENGTH - 1) || strPosition == nowSatelliteInfo.name.length)
					{
						strPosition = 0;
						strFocusFlag = 0;
					}
					else if(strPosition == (nowSatelliteInfo.name.length - 1))
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
					sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					break;
				case 1:
					if(nowSatelliteInfo.position == 1)
					{
						nowSatelliteInfo.position = 0;
					}
					else
					{
						nowSatelliteInfo.position++;
					}
					$("positionSpan").innerHTML = position[nowSatelliteInfo.position];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 2:
					if(strPosition >= (FREQUENCY_MAX_LENGTH - 1) || strPosition == nowSatelliteInfo.frequency.length)
					{
						strPosition = 0;
						strFocusFlag = 0;
					}
					else if(strPosition == (nowSatelliteInfo.frequency.length - 1))
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
					
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					break;
				case 3:
					if(strPosition >= (SYMBOL_RATE_MAX_LENGTH - 1) || strPosition == nowSatelliteInfo.symbolRate.length)
					{
						strPosition = 0;
						strFocusFlag = 0;
					}
					else if(strPosition == (nowSatelliteInfo.symbolRate.length - 1))
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
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					break;
				case 4:
					if(nowSatelliteInfo.polarization == 0)
					{
						nowSatelliteInfo.polarization = 1;
					}
					else
					{
						nowSatelliteInfo.polarization--;
					}
					$("polarizationSpan").innerHTML = polarization[nowSatelliteInfo.polarization];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				default:	
					break;
			}
		}
		else
		{
			switch(form_position_h)
			{
				case 0:
					if(strPosition >= (SAT_NAME_MAX_LENGTH - 1) || strPosition == nowSatelliteInfo.name.length)
					{
						strPosition = 0;
						strFocusFlag = 0;
					}
					else if(strPosition == (nowSatelliteInfo.name.length - 1))
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
					sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
					break;
				case 1:
					if(nowSatelliteInfo.lNBPower == 1)
					{
						nowSatelliteInfo.lNBPower = 0;
					}
					else
					{
						nowSatelliteInfo.lNBPower++;
					}
					$("lNBPowerSpan").innerHTML = offOn[nowSatelliteInfo.lNBPower];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 2:
					if(nowSatelliteInfo.lNBFreq >= 10)
					{
						nowSatelliteInfo.lNBFreq = 0;
					}
					else
					{
						nowSatelliteInfo.lNBFreq++;
					}
					$("lNBFreqSpan").innerHTML = lNBFreq[nowSatelliteInfo.lNBFreq];
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					//add chenhua 2014.6.16
					showAboutLNBFreq();
					break;
				case 3:
					if(nowSatelliteInfo.diSEqCInput >= 4)
					{
						nowSatelliteInfo.diSEqCInput = 0;
					}
					else
					{
						nowSatelliteInfo.diSEqCInput++;
					}
					$("diSEqCInputSpan").innerHTML = diSEqCInput[nowSatelliteInfo.diSEqCInput];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 4:
					if(nowSatelliteInfo.tone22KHz >= 2)
					{
						nowSatelliteInfo.tone22KHz = 0;
					}
					else
					{
						nowSatelliteInfo.tone22KHz++;
					}
					$("tone22KHzSpan").innerHTML = tone22KHz[nowSatelliteInfo.tone22KHz];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 5:
					if(nowSatelliteInfo.toneBurst >= 2)
					{
						nowSatelliteInfo.toneBurst = 0;
					}
					else
					{
						nowSatelliteInfo.toneBurst++;
					}
					$("tonBurstSpan").innerHTML = toneBurst[nowSatelliteInfo.toneBurst];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				case 6:
					if(strPosition >= (FREQUENCY_MAX_LENGTH - 1) || strPosition == nowSatelliteInfo.frequency.length)
					{
						strPosition = 0;
						strFocusFlag = 0;
					}
					else if(strPosition == (nowSatelliteInfo.frequency.length - 1))
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
					
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					break;
				case 7:
					if(strPosition >= (SYMBOL_RATE_MAX_LENGTH - 1) || strPosition == nowSatelliteInfo.symbolRate.length)
					{
						strPosition = 0;
						strFocusFlag = 0;
					}
					else if(strPosition == (nowSatelliteInfo.symbolRate.length - 1))
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
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					break;
				case 8:
					if(nowSatelliteInfo.polarization == 0)
					{
						nowSatelliteInfo.polarization = 1;
					}
					else
					{
						nowSatelliteInfo.polarization--;
					}
					$("polarizationSpan").innerHTML = polarization[nowSatelliteInfo.polarization];
					setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
					break;
				default:	
					break;
			}
		}
		setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
	}
}

function doEnter()
{channel.testLog("in doEnter focusOn = " + focusOn );
	if(focusOn == "operator")
	{
		operatorIndex = list_position_h;
		$("operatorForm").style.display = "none";
		initAutoScan();
	}
	else if(focusOn == "autoScan")
	{
		if(isSearch == 1)
		{
			$("scanStatus").innerHTML = scanStatusWords[2];
			channel.stopScan();
			return;
		}
		
		switch(list_position_h)
		{
			case 0:
				initSatellite();
				break;
			case 3:
				var selectFlag = 0;//0 no satellite selected,1 more than one satellite selected
				for(var i = 0; i < satelliteInfoList.length; i++)
				{
					if(satelliteInfoList[i].isSelect == 1)
					{
						selectFlag = 1;
					}
				}
				
				if(selectFlag == 0)//没有选择卫星
				{
					$("pleaseSelectSat").innerText = pleaseSelectSatellite;
					$("pleaseSelectSat").style.display = "block";
					focusOn = "remind";
					setTimeout(function(){
						$("pleaseSelectSat").style.display = "none";
						focusOn = "autoScan";},2000);
				}
				else
				{
					$("search").innerHTML = others[5];
					channel.stopTv();
					isSearch = 1;
					top.stopTimeout();
					$("scanStatus").innerHTML = scanStatusWords[0];
					channel.startScanDvbsAuto(operatorList[operatorIndex].operator_id,scanMode,channels);
				}
				break;
			default:
				break;
		}
	}
	else if(focusOn == "satellite")
	{
		if(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM].isSelect == 0)
		{
			satelliteInfoList[list_position_h + page*ONE_PAGE_SUM].isSelect = 1;
			satelliteContentImgList[list_position_h].src = selectFlagImg[1];
		}
		else
		{
			satelliteInfoList[list_position_h + page*ONE_PAGE_SUM].isSelect = 0;
			satelliteContentImgList[list_position_h].src = selectFlagImg[0];
		}
	}
	else if(focusOn == "satEdit")
	{channel.testLog("in doEnter satEdit satAntennaType = " + satAntennaType + ",form_position_h = " + form_position_h);
		if(satAntennaType == 0)
		{
			switch(form_position_h)
			{
				case 0://edit name
				case 2://edit freq
				case 3://edit symbol
					toDown();
					break;
				default:
					break;
			}
		}
		else
		{
			switch(form_position_h)
			{
				case 0://edit name
				case 6://edit freq
				case 7://edit syb
					toDown();
					break;
				default:
					break;
			}
		}
	}
}

function toBack()
{
	if(focusOn == "operator")
	{
		top.focusToIndexHtml(2);
	}
	else if(focusOn == "autoScan")
	{
		channel.testLog("toback isSearch = " + isSearch);
		if(isSearch == 1)
		{
			channel.stopScan();
			channel.setServiceType(1);//dtv
			channel.inputSource = 1;//dtv
			//channel.playCurrentTv();
			top.restartTimeout();
		}
		top.focusToIndexHtml(2);
	}
	else if(focusOn == "satellite")
	{
		list_position_h = 0;
		showAutoScanFocus(list_position_h);
		$("operatorForm").style.display = "none";
		$("scanForm").style.display = "block";
		$("satelliteForm").style.display = "none";
		$("satInfoForm").style.display = "none";
		focusOn = "autoScan";
	}
	else if(focusOn == "satEdit")
	{	
		top.Log("in toBack focusOn = satEdit list_position_h = " + list_position_h + ", nowSatelliteInfo.name = " + nowSatelliteInfo.name);
		//刷新卫星列表中修改的哪一项
		satelliteContentLabelList[list_position_h].innerHTML = nowSatelliteInfo.name;
		
		setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
		channel.setServiceType(1);//dtv
		channel.inputSource = 1;//dtv
		//channel.playCurrentTv();
		//list_position_h 保持原样
		$("operatorForm").style.display = "none";
		$("scanForm").style.display = "none";
		$("satelliteForm").style.display = "block";
		$("satInfoForm").style.display = "none";
		focusOn = "satellite";
	}
}

function showAboutLNBFreq()
{
	if(nowSatelliteInfo.lNBFreq == 0)//universal
	{
		satInfoContentLiList[5].getElementsByTagName("label")[0].style.color = "#333";
		satInfoContentLiList[5].getElementsByTagName("span")[0].style.color = "#333";
	}
	else
	{
		satInfoContentLiList[5].getElementsByTagName("label")[0].style.color = "#fff";
		satInfoContentLiList[5].getElementsByTagName("span")[0].style.color = "#fff";
	}
}
/*
功能描述：搜台过程中的消息处理
参数：id:0（atv或dtv进度更新的消息），1代表atv搜台结束，2代表dtv搜台结束
全局变量：scanningInfo;focusOn;progress;digitalScanCount；
*/
var scanningInfo;
function updateInfo(id)
{
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
			
			
			if(progress > 0)
			{
				$("scanResult1").innerHTML = others[0] + ":" + digitalScanCount;
				$("progressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
				$("progressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
				$("progressValue").innerHTML = progress + "%";
			}
			if(progress == 100)
			{
				channel.stopScan();
				$("scanStatus").innerHTML = scanStatusWords[1];
			}
			break;
		}
		case 1://atv finish,atv搜台停止不需要我们自己调用停止函数，底层自己调用
		{
			//isSearch = 0;
			//progressFlag = -1;
			break;
		}
		case 2://dtv scan finish
		{
			if(isSearch == 1)//说明是正常搜台结束，而非手动停止搜台
			{
				channel.setServiceType(1);//dtv
				channel.inputSource = 1;//dtv
				//channel.playCurrentTv();
				isSearch = 0;
				setTimeout(function(){top.jumpPage();},3000);
				focusOn = "exit";
			}
			//top.$("main").contentWindow.subMenu2.initOptionShowStatus(tunerMode);
			//top.focusToIndexHtml(2);
			break;
		}
		default:
		{
			break;
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

/*
描述：保存卫星信息
参数：satellite:正编辑的卫星对象
*/
function setSatInfo(satellite)
{
	if(satAntennaType == 0)
	{
		switch(form_position_h)
		{
			case 0:
				satellite.name = nowSatelliteInfo.name;
				break;
			case 1:
				satellite.position = nowSatelliteInfo.position;
				break;
			case 2:
				//freqThresholdCheck(nowSatelliteInfo.frequency);
				satellite.frequency = parseInt(nowSatelliteInfo.frequency,10);
				break;
			case 3:
				//symbThresholdCheck(nowSatelliteInfo.symbolRate);
				satellite.symbolRate = parseInt(nowSatelliteInfo.symbolRate,10);
				break;
			case 4:
				satellite.polarization = nowSatelliteInfo.polarization;
				break;
			default:	
				break;
		}
	}
	else
	{
		switch(form_position_h)
		{
			case 0:
				satellite.name = nowSatelliteInfo.name;
				break;
			case 1:
				satellite.lNBPower = nowSatelliteInfo.lNBPower;
				break;
			case 2:
				satellite.lNBFreq = nowSatelliteInfo.lNBFreq;
				break;
			case 3:
				satellite.diSEqCInput = nowSatelliteInfo.diSEqCInput;
				break;
			case 4:
				satellite.tone22KHz = nowSatelliteInfo.tone22KHz;
				break;
			case 5:
				satellite.toneBurst = nowSatelliteInfo.toneBurst;
				break;
			case 6:
				//freqThresholdCheck(nowSatelliteInfo.frequency);
				satellite.frequency = parseInt(nowSatelliteInfo.frequency,10);
				break;
			case 7:
				//symbThresholdCheck(nowSatelliteInfo.symbolRate);
				satellite.symbolRate = parseInt(nowSatelliteInfo.symbolRate,10);
				break;
			case 8:
				satellite.polarization = nowSatelliteInfo.polarization;
				break;
			default:	
				break;
		}
	}
	channel.lockSatelliteFreq(satellite.id);//卫星锁频
}

/*
频点阈值判断和更正
参数：freq：频点值
*/
function freqThresholdCheck(freq)
{
	if(freq < 10700000)
	{
		nowSatelliteInfo.frequency = "10700000";
	}
	else if(freq > 12750000)
	{
		nowSatelliteInfo.frequency = "12750000";
	}
	else
	{
		nowSatelliteInfo.frequency = freq;
	}
}
/*
sysbol阈值判断和更正
参数：symb：频点值
*/
function symbThresholdCheck(symb)
{
	if(symb > 45000)
	{
		nowSatelliteInfo.symbolRate = "45000";
	}
	else if(symb < 2000)
	{
		nowSatelliteInfo.symbolRate = "2000";
	}
	else
	{
		nowSatelliteInfo.symbolRate = symb;
	}
}

//以下是输入字符或数字的输入框用到的函数
var input_chars = "_" ;
//按键连续按下的次数
var keyCount = 0;
var keyTimer = 0;//按键按下计时
// 数字键对应的数组
var char_table = [['0'," ",".",'-','*','&','+','@','#'],
				  ['1'],
				  ['2','a','b','c','A','B','C'],
				  ['3','d','e','f','D','E','F'],
				  ['4','g','h','i','G','H','I'],
				  ['5','j','k','l','J','K','L'],
				  ['6','m','n','o','M','N','O'],
				  ['7','p','q','r','s','P','Q','R','S'],
				  ['8','t','u','v','T','U','V'],
				  ['9','w','x','y','z','W','X','Y','Z'],				
				  ];
//上一次的keycode
var oldKeyCode = 0;
//当前按键的值对应的字符
var inputChar = "";
/*
全局变量：strPosition,strFocusFlag，nowSatelliteInfo,
*/
function checkInput(keycode)
{
    //第一次的时候
	if (keyTimer==0)
	{
		var keyTableLine = keycode - 48;
		if (keyCount>=char_table[keyTableLine].length)
			keyCount = 0;
		inputChar = char_table[keyTableLine][keyCount];
		
		nameContentSpanList[1].innerHTML = inputChar;
		
		keyTimer =  setTimeout(function () {setChar(keycode);},500);
	}
	else//其他时候
	{
		if (oldKeyCode == keycode)
		{
			keyCount++;
			var keyTableLine = keycode - 48;
			if (keyCount>=char_table[keyTableLine].length)
				keyCount = 0;
			inputChar = char_table[keyTableLine][keyCount];
			
			nameContentSpanList[1].innerHTML = inputChar;
			 
			clearTimeout(keyTimer); 
			keyTimer =  setTimeout(function () {setChar(keycode);},500);
		}
		else
		{
			setChar(oldKeyCode);
			clearTimeout(keyTimer);
			keyTimer = 0;
		}
      }
	  
	oldKeyCode = keycode;
}
/*
frequency and symbol rate时使用
*/
function checkNumInput(keycode)
{channel.testLog("in checkNumInput");
	inputChar = keycode - 48;
		
	if(satAntennaType == 0)
	{
		if(form_position_h == 2)
		{
			nowSatelliteInfo.frequency = "" + inputNumToNumber(nowSatelliteInfo.frequency,strPosition,strFocusFlag,inputChar,FREQUENCY_MAX_LENGTH);
			//freqThresholdCheck(tNumber);
			sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
		}
		else if(form_position_h == 3)
		{
			nowSatelliteInfo.symbolRate = "" + inputNumToNumber(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,inputChar,SYMBOL_RATE_MAX_LENGTH);
			//symbThresholdCheck(tNumber);
			sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
		}
	}
	else
	{
		if(form_position_h == 6)
		{
			nowSatelliteInfo.frequency = "" + inputNumToNumber(nowSatelliteInfo.frequency,strPosition,strFocusFlag,inputChar,FREQUENCY_MAX_LENGTH);
			//freqThresholdCheck(tNumber);
			sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
		}
		else if(form_position_h == 7)
		{
			nowSatelliteInfo.symbolRate = "" + inputNumToNumber(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,inputChar,SYMBOL_RATE_MAX_LENGTH);
			//symbThresholdCheck(tNumber);
			sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
		}
	}
	
}
function setChar(keycode)
{
	keyCount = 0;
	clearTimeout(keyTimer); 
	keyTimer = 0;
	nowSatelliteInfo.name = inputCharToString(nowSatelliteInfo.name,strPosition,strFocusFlag,inputChar,SAT_NAME_MAX_LENGTH);
	sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
}
/*
描述：根据输入的字符填写字符串值并将当前字符焦点下移一位,根据情况标识下移一位以后焦点是“_”还是落在字母上，返回加入字母后新的字串（注意字串开头不能使数字）
参数：string：要填入的字符串；index：焦点所在索引值；cursorFlag：焦点类型（0表示当前文字是焦点，1表示焦点是“_”）；maxLength:允许的字串最大长度
全局变量：strPosition，strFocusFlag
返回值：更改后的字符串
*/
function inputCharToString(string,index,cursorFlag,char,maxLength)
{
	channel.testLog(" in inputCharToString string = " + string + ",index = " + index + ",cursorFlag = " + cursorFlag + ",char = " + char + ",maxLength = " + maxLength + maxLength );
	var str = "" + string;
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
		if((char >= '0' && char <= '9') || (char >= 0 && char <= 9))//首字母为数字
		{
			if(cursorFlag == 0)//字母
			{
				str = str.substring(1);
				for(var i = 0; i < str.length; i++)//除去开始的字母为数字的项
				{
					var temp = str.substring(0,1);
					if((temp >= '0' && temp <= '9') || (temp >= 0 && temp <= 9))
					{
						str = str.substring(1);
						continue;
					}
					else
					{
						break;
					}
				}
			}
			else
			{
				for(var i = 0; i < str.length; i++)//除去开始的字母为数字的项
				{
					var temp = str.substring(0,1);
					if((temp >= '0' && temp <= '9') || (temp >= 0 && temp <= 9))
					{
						str = str.substring(1);
						continue;
					}
					else
					{
						break;
					}
				}
			}
				
			if(str.length <= 0)
			{
				str = "";
				strPosition = 0;
				strFocusFlag = 1;
			}
			else
			{
				strPosition = 0;
				strFocusFlag = 0;
			}
			return str;
		}
		else
		{
			if(str.length == 0)
			{
				str = char;
				strPosition++;
				strFocusFlag = 1;
			}
			else if(str.length == 1)
			{
				if(cursorFlag == 0)//字符
				{
					str = char;
					strPosition++;
					strFocusFlag = 1;
				}
				else
				{
					str = char + str;
					strPosition++;
					strFocusFlag = 0;
				}
			}
			else
			{
				if(cursorFlag == 0)//字符
				{
					str = char + str.substring(index + 1);
					strPosition++;
					strFocusFlag = 0;
				}
				else
				{
					str = char + str;
					strPosition++;
					strFocusFlag = 0;
				}
			}
		}
	}
	else if(index == (maxLength - 1))
	{
		str = str.substring(0,maxLength - 1) + char;
		strPosition = 0;
		strFocusFlag = 0;
	}
	else
	{
		if(index == str.length)
		{
			str = str + char;
			strPosition++;
			strFocusFlag = 1;
		}/*
		else if(index == (str.length - 1))//类似XXXX_X
		{
			str = str.substring(0,index) + char + str.substring(index);
			strPosition++;
			strFocusFlag = 1;
		}*/
		else
		{
			if(cursorFlag == 0)
			{
				str = str.substring(0,index) + char + str.substring(index + 1);
			}
			else//如类似XXXX_X输入一个字母的时候
			{
				str = str.substring(0,index) + char + str.substring(index);
			}
			strPosition++;
			strFocusFlag = 0;
		}
	}
	return str;
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
参数：tagList：存放切分后的字串的容器；string：要切分的字符串；index：焦点所在索引值；cursorFlag：当前焦点类型（0表示当前文字是焦点，1表示焦点是“_”）；maxLength:允许的字串最大长度
全局变量：strPosition，strFocusFlag
返回值：//更改后的字符串
*/
var strPosition = 0;//字串焦点字符的下标
var strFocusFlag = 0;//0 字符，1 “_”
function sliceStringToTags(tagList,string,index,cursorFlag,maxLength)
{
	channel.testLog("in sliceStringToTags string=" + string + ",index=" + index + ",cursorFlag=" + cursorFlag + ",maxLength=" + maxLength);
	//channel.testLog("in sliceStringToTags strPosition=" + strPosition + ",strFocusFlag=" + strFocusFlag);
	tagList[0].style.color="#FFF";
	tagList[1].style.color="#F00";
	tagList[2].style.color="#FFF";
	var str = "" + string;
	if(str.length > maxLength)
	{
		str = str.substring(0,maxLength);
	}
	//channel.testLog("in sliceStringToTags str=" + str + ",str.length=" + str.length);
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
		//channel.testLog("in sliceStringToTags index == 0");
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
			//channel.testLog("in sliceStringToTags str.length > 0");
			if(cursorFlag == 0)//字符
			{
				tagList[0].innerHTML = "";
				tagList[1].innerHTML = str.substring(0,1);
				tagList[2].innerHTML = str.substring(1);
				strPosition = 0;
				strFocusFlag = 0;
				//channel.testLog("in sliceStringToTags end  cursorFlag == 0");
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
	//channel.testLog("in sliceStringToTags strPosition=" + strPosition);
	//return str;
}
/*
描述：根据焦点的index和焦点是“_”还是落在字母上删除焦点文字，焦点下移一位，并让当前的焦点显示为红色；
参数：tagList：存放切分后的字串的容器；string：要切分的字符串；index：焦点所在索引值；cursorFlag：焦点类型（0表示当前文字是焦点，1表示焦点是“_”）；maxLength:允许的字串最大长度
全局变量：strPosition，strFocusFlag
返回值：更改后的字符串
*/
function deleteCharFromString(string,index,cursorFlag,maxLength)
{
	channel.testLog(" in inputCharToString string = " + string + ",index = " + index + ",cursorFlag = " + cursorFlag + ",maxLength = " + maxLength );
	var str = "" + string;
	if(str.length > maxLength)
	{
		return;//str = str.substring(0,maxLength);
	}
	
	if(index < 0 || index >= maxLength)
	{
		return;
	}
	
	if(index >= (str.length - 1))//当前焦点在最后
	{
		if(cursorFlag == 0)//焦点在字母上
		{
			str = str.substring(0,str.length - 1);
		}
		else
		{
			//不变
		}
		strPosition--;
		strFocusFlag = 0;
		
		if(strPosition < 0)//把最后一个文字删除完了,需要显示“_"
		{
			strPosition = 0;
			strFocusFlag = 1;
		}
	}
	else if(index == 0)//当前焦点在开头
	{
		if(cursorFlag == 0)
		{
			do
			{
				if(str.length > 1)
				{
					str = str.substring(1);
				}
				else
				{
					break;
				}
			}while(str.indexOf("0") == 0);
			
		}
		else
		{
			//不变
		}
		//strPosition不变;
		strFocusFlag = 0;
	}
	else
	{
		if(cursorFlag == 0)
		{
			str = str.substring(0,index) + str.substring(index + 1);
		}
		else
		{
			//不变
		}
		//strPosition不变;
		strFocusFlag = 0;
	}
	return str;
}
/*
描述：在焦点字符前插入一个“_”后，改变焦点类型和焦点位置
参数：string：要填入的字符串；index：焦点所在索引值；cursorFlag：焦点类型（0表示当前文字是焦点，1表示焦点是“_”）；maxLength:允许的字串最大长度
全局变量：strPosition，strFocusFlag
返回值
*/
function insertCharPreToString(string,index,cursorFlag,maxLength)
{
	channel.testLog(" in inputCharToString string = " + string + ",index = " + index + ",cursorFlag = " + cursorFlag + ",maxLength = " + maxLength);
	var str = "" + string;
	if(str.length >= maxLength)
	{
		return;//str = str.substring(0,maxLength);
	}
	
	if(index < 0 || index >= (maxLength - 1))
	{
		return;
	}
	
	if(cursorFlag == 0)//焦点是字母，则在前面插入“_”,等价于将strFocusFlag置为1；
	{
		//strPosition不变;
		strFocusFlag = 1;
		return;
	}
	else
	{
		return;
	}
}


/*
描述：初始化选中的卫星的详细信息
参数:infoIndex:选中的卫星的信息的编号
*/
var satInfoContentLiList;
var nowSatelliteInfo;
var nameContentSpanList;
var freqContentSpanList;
var sybContentSpanList;
var sigStrengthDivList;
var sigQualityDivList;
var SAT_NAME_MAX_LENGTH = 32;
var FREQUENCY_MAX_LENGTH = 8;
var SYMBOL_RATE_MAX_LENGTH = 5;
function initSatelliteEdit(infoIndex)
{
	if(satAntennaType == 0)//signal cable
	{
		satInfoContentLiList[0].style.display = "block";
		satInfoContentLiList[1].style.display = "block";
		satInfoContentLiList[2].style.display = "none";
		satInfoContentLiList[3].style.display = "none";
		satInfoContentLiList[4].style.display = "none";
		satInfoContentLiList[5].style.display = "none";
		satInfoContentLiList[6].style.display = "none";
	}
	else if(satAntennaType == 1)
	{
		satInfoContentLiList[0].style.display = "block";
		satInfoContentLiList[1].style.display = "none";
		satInfoContentLiList[2].style.display = "block";
		satInfoContentLiList[3].style.display = "block";
		satInfoContentLiList[4].style.display = "block";
		satInfoContentLiList[5].style.display = "block";
		satInfoContentLiList[6].style.display = "block";
	}
	channel.testLog("in satellite edit 0 infoindex = " + infoIndex);
	strPosition = 0;
	strFocusFlag = 0;
	form_position_h = 0;
	nameContentSpanList = $("nameContent").getElementsByTagName("span");
	freqContentSpanList = $("freqContent").getElementsByTagName("span");
	sybContentSpanList = $("sybContent").getElementsByTagName("span");
	$("satInfoTitle").innerHTML = satAutoTitles[3];
	var lableList = $("satInfoContent").getElementsByTagName("label");
	for(var i = 0; i < 12; i++)
	{
		lableList[i].innerHTML = satEditOptions[i];
	}
	var info = satelliteInfoList[infoIndex];
	channel.stopTv();
	channel.lockSatelliteFreq(info.id);//卫星锁频
	nowSatelliteInfo = {
		id				: info.id,
		name 			: info.name,
		position		: info.position,
		lNBPower		: info.lNBPower,
		lNBFreq			: info.lNBFreq,
		diSEqCInput		: info.diSEqCInput,
		tone22KHz		: info.tone22KHz,
		toneBurst		: info.toneBurst,
		frequency		: "" + info.frequency,//转化成字符串
		symbolRate		: "" + info.symbolRate,//转化成字符串
		polarization	: info.polarization
	}
	correctFrequencyForLNBFreq();
	
	nameContentSpanList[0].innerHTML = nowSatelliteInfo.name;
	nameContentSpanList[1].innerHTML = "";
	nameContentSpanList[2].innerHTML = "";
	$("positionSpan").innerHTML = position[nowSatelliteInfo.position];
	$("lNBPowerSpan").innerHTML = offOn[nowSatelliteInfo.lNBPower];
	$("lNBFreqSpan").innerHTML = lNBFreq[nowSatelliteInfo.lNBFreq];
	$("diSEqCInputSpan").innerHTML = diSEqCInput[nowSatelliteInfo.diSEqCInput];
	$("tone22KHzSpan").innerHTML = tone22KHz[nowSatelliteInfo.tone22KHz];
	$("tonBurstSpan").innerHTML = toneBurst[nowSatelliteInfo.toneBurst];
	freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
	freqContentSpanList[1].innerHTML = "";
	freqContentSpanList[2].innerHTML = "";
	sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
	sybContentSpanList[1].innerHTML = "";
	sybContentSpanList[2].innerHTML = "";
	$("polarizationSpan").innerHTML = polarization[nowSatelliteInfo.polarization];
	
	sigStrengthDivList = $("sigStrength").getElementsByTagName("div");
	sigQualityDivList = $("sigQuality").getElementsByTagName("div");
	
	
	sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
	
	$("delete").getElementsByTagName("span")[0].innerHTML = others[3];
	$("insert").getElementsByTagName("span")[0].innerHTML = others[4];
	$("delete").style.display = "block";
	$("insert").style.display = "block";
	
	$("satInfoFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
	$("operatorForm").style.display = "none";
	$("scanForm").style.display = "none";
	$("satelliteForm").style.display = "none";
	$("satInfoForm").style.display = "block";
	focusOn = "satEdit";
	top.showDialogPosition($("satInfoForm"),800,860,1920,1080,0,0);
	
	setInterval("refreshSignalQualityAndStrength()",1000);
	//add chenhua 2014.6.16
	showAboutLNBFreq();
}

/*
描述：通过LNBFreq的枚举更正frequency的位数
*/
function correctFrequencyForLNBFreq()
{
	FREQUENCY_MAX_LENGTH = (nowSatelliteInfo.lNBFreq == 3 || nowSatelliteInfo.lNBFreq == 4)?7:8;
	channel.testLog("in correctFrequencyForLNBFreq = " +　FREQUENCY_MAX_LENGTH);
	if(FREQUENCY_MAX_LENGTH == 7)
	{
		if(nowSatelliteInfo.frequency.length >= 7)
		{
			nowSatelliteInfo.frequency = nowSatelliteInfo.frequency.substring(0,7);
		}
		else
		{
			var leng = nowSatelliteInfo.frequency.length;
			if(leng == 1 && nowSatelliteInfo.frequency == "0")
			{
				nowSatelliteInfo.frequency = "1";
			}
			
			for(var i = 7; i > leng; i--)
			{
				nowSatelliteInfo.frequency += "0";
			}
		}
	}
	else if(FREQUENCY_MAX_LENGTH == 8)
	{
		if(nowSatelliteInfo.frequency.length >= 8)
		{
			nowSatelliteInfo.frequency = nowSatelliteInfo.frequency.substring(0,8);
		}
		else
		{
			var leng = nowSatelliteInfo.frequency.length;
			if(leng == 1 && nowSatelliteInfo.frequency == "0")
			{
				nowSatelliteInfo.frequency = "1";
			}
			for(var i = 8; i > leng; i--)
			{
				nowSatelliteInfo.frequency += "0";
			}
		}
	}
	freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
	freqContentSpanList[1].innerHTML = "";
	freqContentSpanList[2].innerHTML = "";
}

/*
描述:不断获取信号质量和强度
*/
function refreshSignalQualityAndStrength()
{
	if(focusOn == "satEdit")
	{
		refreshProgressBarMore(sigStrengthDivList,setting.channelCurrentSignalStrength,$("sigStrengthValue"),SAT_PROGRESS_WIDTH);
		refreshProgressBarMore(sigQualityDivList,setting.channelCurrentSignalQuality,$("sigQualityValue"),SAT_PROGRESS_WIDTH);
	}
}


/*
描述：刷新卫星列表
参数：sum：卫星数量;onePageMax:一页能显示的卫星数量
全局变量：page,list_position_h
*/
function refreshSatellite(sum,onePageMax)
{channel.testLog("in  refreshSatellite ");
	for(var i = 0; i < onePageMax; i++)
	{
		if((i + page*onePageMax) < sum)
		{
			channel.testLog("index = " + (i + page*onePageMax) );
			channel.testLog("select = " + satelliteInfoList[i + page*onePageMax].isSelect);
			satelliteContentLabelList[i].innerHTML = satelliteInfoList[i + page*onePageMax].name;
			satelliteContentImgList[i].src = selectFlagImg[satelliteInfoList[i + page*onePageMax].isSelect];
			satelliteContentLiList[i].style.display = "block";
		}
		else
		{
			satelliteContentLiList[i].style.display = "none";
		}
	}
	
	if(sum > (page + 1)*onePageMax)
	{
		$("downFlag").style.display = "block";
	}
	else
	{
		$("downFlag").style.display = "none";
	}
	
	if(page > 0)
	{
		$("upFlag").style.display = "block";
	}
	else
	{
		$("upFlag").style.display = "none";
	}
}

var satelliteContentLabelList;
var satelliteContentLiList;
var satelliteContentImgList;
var page = 0;//satellite page
function initSatellite()
{channel.testLog("in  initSatellite ");
	$("satTitle").innerHTML = scanOptions[0];
	satelliteContentLabelList = $("satelliteContent").getElementsByTagName("label");
	satelliteContentImgList = $("satelliteContent").getElementsByTagName("img");
	page = 0;
	list_position_h = 0;
	
	refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM);
	
	$("satFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
	$("edit").getElementsByTagName("span")[0].innerHTML = others[2];
	$("operatorForm").style.display = "none";
	$("scanForm").style.display = "none";
	top.showDialogPosition($("satelliteForm"),800,750,1920,1080,0,0);
	$("satelliteForm").style.display = "block";
	$("satInfoForm").style.display = "none";
	focusOn = "satellite";
}

function refreshProgressBar(value)
{
	$("progressLeft").style.width = parseInt(value*PROGRESS_WIDTH/100,10) + "px";
	$("progressRight").style.width = parseInt((100 - value)*PROGRESS_WIDTH/100,10) + "px";
	$("progressValue").innerHTML = value + "%";
}

/*
描述：根据进度和进度条图标列表刷新进度
参数：value：progress,tagList:进度条图片列表,valueTag:显示进度值的标签;progressMax:进度条最大宽度
*/
function refreshProgressBarMore(tagList,value,valueTag,progressMax)
{
	tagList[0].style.width = parseInt(value*progressMax/100,10) + "px";
	tagList[2].style.width = parseInt((100 - value)*progressMax/100,10) + "px";
	valueTag.innerHTML = value + "%";
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
var satSelectValue = 0;

function initAutoScan()
{
	satSelectValue = 0;
	scanMode = 0;
	channels = 0;
	digitalScanCount = 0;
	anologScanCount = 0;
	progress = 0;
	isSearch = 0;
	$("scanTitle").innerHTML = satAutoTitles[1];
	
	var scanFormLableList = $("scanForm").getElementsByTagName("label");
	scanFormLableList[0].innerHTML = scanOptions[0];
	scanFormLableList[1].innerHTML = scanOptions[1];
	scanFormLableList[2].innerHTML = scanOptions[2];
	
	//$("satSelect").innerHTML = satelliteInfoList[satIndex];
	$("satScanMode").innerHTML = satScanModeWords[scanMode];
	$("satChannels").innerHTML = satChannelsWords[channels];
	
	refreshProgressBar(progress);
	$("scanStatus").innerHTML = "";//scanStatusWords[2];
	$("scanResult1").innerHTML = "";//others[0] + ":" + (anologScanCount + digitalScanCount);
	$("scanResult2").innerHTML = "";
	$("search").innerHTML = others[1];
	
	list_position_h = 3;
	showAutoScanFocus(list_position_h);
	$("operatorForm").style.display = "none";
	
	var height = SCAN_FORM_HEIGHT_START + 3*SCAN_FORM_AND_FOCUS_STEP;
	$("scanForm").style.height = height + "px";
	top.showDialogPosition($("scanForm"),800,height,1920,1080,0,0);
	$("scanForm").style.display = "block";
	$("satelliteForm").style.display = "none";
	$("satInfoForm").style.display = "none";
	//该函数提前到此处，因为搜台的时候需要判断卫星是否有备选的。
	channel.testLog("in initAutoScan operatorIndex = " + operatorIndex);
	channel.testLog("in initAutoScan operatorList[operatorIndex].operator_id = " + operatorList[operatorIndex].operator_id);
	satelliteInfoList = channel.getSatelliteList(operatorList[operatorIndex].operator_id);
	
	focusOn = "autoScan";
}

/*
描述：当focusOn为autoScan时，根据焦点位置显示焦点
参数：value:list_position_h
*/
function showAutoScanFocus(value)
{
	if(value < 0 && value > 4)
	{
		return;
	}
	
	if(value <= 2)
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

/*
描述：根据运营商索引获取卫星列表，并把卫星名称转换成当前语言后压到卫星名称列表中
参数：value:operator_Index
全局变量：chDvbsSatellites,languagePosition
*/
/*
var satelliteNameList = "";
function addSatelliteToArray(value)
{channel.testLog("in addSatelliteToArray ");
	//将该函数提前satelliteInfoList = channel.getSatelliteList(value);
	satelliteNameList = new Array(satelliteInfoList.length);
	for(var i = 0; i < satelliteInfoList.length; i++)
	{
		
		satelliteNameList[i] = satelliteInfoList[i].name;
	}
}
*/

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
	return 0;//默认为english
}
/*
描述：根据tunermode获取运营商列表，并把运营商名称转换成当前语言后压到运营商名称列表中
参数：value:tunerMode
全局变量：chDvbsOperators,languagePosition
*/
var operatorList = "";
function addOperatorToArray(value)
{
	operatorList = channel.getOperatorList(value);
	channel.testLog("in addOperatorToArray operatorList[operatorIndex].operator_id = " + operatorList[0].operator_id);
	operatorNameList = new Array(operatorList.length);
	for(var i = 0; i < operatorList.length; i++)
	{
		/*
		var index = 0;
		while(operatorList[i].operator_name != chDvbsOperators[0][index])
		{
			index++;
		}
		operatorNameList[i] = chDvbsOperators[languagePosition][index];
		*/
		operatorNameList[i] = operatorList[i].operator_name;
		channel.testLog("in addOperatorToArray operatorNameList[i] = " + operatorNameList[i]);
	}
}
/*
功能描述：初始化operator框，
参数：
全局变量：languagePosition:当前语言在menuLanguageIndex中的下标;operatorNameList
*/
function initOperator()
{
	var leng = operatorNameList.length;
	if(leng <= 1)
	{
		initAutoScan();
		return;
	}
	
	for(var i = 0; i < leng; i++)
	{
		operatorFormLiList[i].innerHTML = operatorNameList[i];
	}
	
	$("operatorTitle").innerHTML = satAutoTitles[0];
	list_position_h = 0;
	$("operatorFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	var height = OPERATOR_AND_CH_TYPE_START + leng*OPTION_STEP;
	$("operatorForm").style.height = height + "px";
	$("operatorForm").style.display = "block";
	$("scanForm").style.display = "none";
	$("satelliteForm").style.display = "none";
	$("satInfoForm").style.display = "none";
	focusOn = "operator";
	top.showDialogPosition($("operatorForm"),800,height,1920,1080,0,0);
}

var operatorFormLiList;
var scanFormLiList;

function init()
{
    channel.testLog("***** satAutoSearch init **** ");
    top.uiPauseDownloadingUpFile();
	timeoutInit();
	satelliteContentLiList = $("satelliteContent").getElementsByTagName("li");
	satInfoContentLiList = $("satInfoContent").getElementsByTagName("li");
	scanFormLiList = $("scanForm").getElementsByTagName("li");
	satAntennaType = channel.getSatelliteAntennaInfo().type;
	var tunerMode = channel.tunerMode;
	var language = setting.menuLanguage;
	languagePosition = fixMenuLangFocus(language);
	channel.testLog("languagePosition = " + languagePosition);
	addOperatorToArray(tunerMode);
	operatorFormLiList = $("operatorForm").getElementsByTagName("li");
	initOperator();
	addMouseListener();
}

function uninit()
{
    channel.testLog("***** satAutoSearch uninit **** ");
    top.uiResumeDownloadingUpFile();
	if(focusOn == "satEdit")
	{	
		setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	//operator
	for(var i = 0; i < 8; i++)
	{
		operatorFormLiList[i].setAttribute("newAttr",i);
		operatorFormLiList[i].onmousedown = function(evt){
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
	//auto scan form
	for(var i = 0; i < 3; i++)
	{
		scanFormLiList[i].setAttribute("newAttr",i);
		scanFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "autoScan"){
					if(isSearch != 1){
						list_position_h = parseInt(this.getAttribute("newAttr"));
						showAutoScanFocus(list_position_h);
						doEnter();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("search").onmousedown = function(evt){
		//top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "autoScan"){
				if(isSearch != 1){
					list_position_h = 3;
					showAutoScanFocus(list_position_h);
				}
				doEnter();
			}
		}
		//top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//satellite list
	for(var i = 0; i < 10; i++)
	{
		satelliteContentLiList[i].setAttribute("newAttr",i);
		satelliteContentLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "satellite"){
					list_position_h = parseInt(this.getAttribute("newAttr"));
					$("satFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("upFlag").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "satellite"){
				if(page > 0)
				{
					page--;
					list_position_h = ONE_PAGE_SUM - 1;
					refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM);
					$("satFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	$("downFlag").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "satellite"){
				if((page + 1)*ONE_PAGE_SUM < satelliteInfoList.length)//最后一个，包括list_positon_h == 9的情况
				{
					page++;
					list_position_h = 0;
					refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM);
					$("satFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//satellite edit
	for(var i = 0; i < 10; i++)
	{
		satInfoContentLiList[i].setAttribute("newAttr",i);
		satInfoContentLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "satEdit")
				{
					if(nowSatelliteInfo.lNBFreq == 0 && parseInt(this.getAttribute("newAttr")) == 5)
					{
						//当前tone 22KHz不可用，不做处理
					}
					else
					{
						//消除焦点
						$("delete").style.display = "none";
						$("insert").style.display = "none";
						if(satAntennaType == 0)//signal cable
						{
							switch(form_position_h)
							{
								case 0:
									setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
									nameContentSpanList[0].innerHTML = nowSatelliteInfo.name;
									nameContentSpanList[1].innerHTML = "";
									nameContentSpanList[2].innerHTML = "";
									break;
								case 2:
									setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
									freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
									freqContentSpanList[1].innerHTML = "";
									freqContentSpanList[2].innerHTML = "";
									break;
								case 3:
									setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
									sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
									sybContentSpanList[1].innerHTML = "";
									sybContentSpanList[2].innerHTML = "";
									break;
								default:
									break;
							}
						}
						else
						{
							switch(form_position_h)
							{
								case 0:
									setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
									nameContentSpanList[0].innerHTML = nowSatelliteInfo.name;
									nameContentSpanList[1].innerHTML = "";
									nameContentSpanList[2].innerHTML = "";
									break;
								case 6:
									setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
									freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
									freqContentSpanList[1].innerHTML = "";
									freqContentSpanList[2].innerHTML = "";
									break;
								case 7:
									setSatInfo(satelliteInfoList[list_position_h + page*ONE_PAGE_SUM]);
									sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
									sybContentSpanList[1].innerHTML = "";
									sybContentSpanList[2].innerHTML = "";
									break;
								default:
									break;
							}
						}
						
						//重置焦点
						if(satAntennaType == 0)//signal cable
						{
							if(parseInt(this.getAttribute("newAttr")) < 2)
							{
								form_position_h = parseInt(this.getAttribute("newAttr"));
							}
							else if(parseInt(this.getAttribute("newAttr")) > 6)
							{
								form_position_h = parseInt(this.getAttribute("newAttr")) - 5;
							}
							
							switch(form_position_h)
							{
								case 0:
									strPosition = 0;
									strFocusFlag = 0;
									sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
									$("delete").style.display = "block";
									$("insert").style.display = "block";
									break;
								case 2:
									strPosition = 0;
									strFocusFlag = 0;
									sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
									$("delete").style.display = "block";
									$("insert").style.display = "block";
									break;
								case 3:
									strPosition = 0;
									strFocusFlag = 0;
									sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
									$("delete").style.display = "block";
									$("insert").style.display = "block";
									break;
								default:
									break;
							}
						}
						else
						{
							if(parseInt(this.getAttribute("newAttr")) < 1)
							{
								form_position_h = parseInt(this.getAttribute("newAttr"));
							}
							else if(parseInt(this.getAttribute("newAttr")) > 1)
							{
								form_position_h = parseInt(this.getAttribute("newAttr")) - 1;
							}
							
							switch(form_position_h)
							{
								case 0:
									strPosition = 0;
									strFocusFlag = 0;
									sliceStringToTags(nameContentSpanList,nowSatelliteInfo.name,strPosition,strFocusFlag,SAT_NAME_MAX_LENGTH);
									$("delete").style.display = "block";
									$("insert").style.display = "block";
									break;
								case 6:
									strPosition = 0;
									strFocusFlag = 0;
									sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
									$("delete").style.display = "block";
									$("insert").style.display = "block";
									break;
								case 7:
									strPosition = 0;
									strFocusFlag = 0;
									sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
									$("delete").style.display = "block";
									$("insert").style.display = "block";
									break;
								default:
									break;
							}
						}
						$("satInfoFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
						//doEnter();这里不能这么做，请仔细查看doEnter内容
					}
					}
					
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}
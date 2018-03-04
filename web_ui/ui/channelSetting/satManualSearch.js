/******************** created by chenhua ***********************/
/******进入DVBS手动搜台页面停止播放，退出页面playCurrent;********/
/*搜台开始停止OSD timeout ,搜台中返回重新开启OSD timeout，如果是等待退出到channelPlay页面则不用重启OSD timeout*/
var chDvbsSatellites	= top.g_satellites_name;
var satAutoTitles 		= [top.chScanOptions[5][2],top.chSatTitles[2]];
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
var chGenreWords		= top.chType;

document.onnotify 		= notifyProcess;
var channel 			= top.g_channel;
var setting				= top.g_setting;
var operatorNameList	= "";
var satelliteNameList	= "";
var satelliteInfoList	= "";
var operatorIndex		= 0;
var satIndex			= 0;
var scanMode 			= 0;
var channels			= 0;
var focusOn 			= "satEdit";		//scan,satellite,satEdit
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
var anologScanCount 	= 0;
var digitalScanCount 	= 0;

var OPERATOR_AND_CH_TYPE_START= 110;		//operator中焦点移动起始位置
var OPTION_STEP 		= 60;				//选项菜单单焦点移动的step
var SCAN_FORM_HEIGHT_START=340;		//240:搜台进度条及其相关信息的高度，80：搜台框标题以及hr的高度
var SCAN_FOCUS_START	= 10;				//搜台框输入框焦点起始位置
var SCAN_FORM_AND_FOCUS_STEP= 60;			//当搜台框中每增加一个参数控制项需要增加的高度
var ONE_PAGE_SUM		= 10;				//每一页最多显示的个数
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
				if(isSearch == 1)
				{
					isSearch = 0;
					channel.stopScan();
				}
				top.keyDownProcess(evt);
				break;
			case top.VK_EXIT: //exit
			case top.VK_MENU: //menu
				isSearch = 0;
				$("scanStatus").innerHTML = scanStatusWords[2];
				channel.stopScan();
				setTimeout(function(){top.jumpPage();},2000);
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
			if(focusOn == "satEdit")
			{
				if(satAntennaType == 0)
				{
					if(list_position_h == 2)
					{
						nowSatelliteInfo.frequency = "" +　deleteCharFromString(nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
						sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					}
					else if(list_position_h == 3)
					{
						nowSatelliteInfo.symbolRate = "" +　deleteCharFromString(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
						sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					}
				}
				else
				{
					if(list_position_h == 6)
					{
						nowSatelliteInfo.frequency = "" +　deleteCharFromString(nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
						sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					}
					else if(list_position_h == 7)
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
					if(list_position_h == 2)
					{
						insertCharPreToString(nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
						sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					}
					else if(list_position_h == 3)
					{
						insertCharPreToString(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
						sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					}
				}
				else
				{
					if(list_position_h == 6)
					{
						insertCharPreToString(nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
						sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					}
					else if(list_position_h == 7)
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
					if(list_position_h == 2 || list_position_h == 3)
					{
						checkNumInput(keycode);
					}
				}
				else
				{
					if(list_position_h == 6 || list_position_h == 7)
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
	channel.testLog("in toDown focusOn = " + focusOn + ",satAntennaType = " + satAntennaType + ",list_position_h = " + list_position_h);
	if(focusOn == "satellite")
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
				refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM,page);
			}
		}
		else if(list_position_h >= (ONE_PAGE_SUM - 1))//这种情况下已经不包含当前卫星是最后一颗卫星的情况，上面一个判断已经判断了
		{
			page++;
			list_position_h = 0;
			refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM,page);
		}
		else
		{
			list_position_h++;
		}
		$("satListFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	}
	else if(focusOn == "satEdit")
	{
		$("delete").style.display = "none";
		$("insert").style.display = "none";
		if(satAntennaType == 0)
		{
			switch(list_position_h)
			{
				case 0:
					list_position_h++;
					break;
				case 1:
					list_position_h++;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 2://frequency
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[satIndex]);/*
					freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
					freqContentSpanList[1].innerHTML = "";
					freqContentSpanList[2].innerHTML = "";*/
					list_position_h++;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 3://symbol rate
					setSatInfo(satelliteInfoList[satIndex]);
					sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
					sybContentSpanList[1].innerHTML = "";
					sybContentSpanList[2].innerHTML = "";
					list_position_h++;
					break;
				case 5:
					list_position_h = 0;
					break;
				default:
					list_position_h++;
					break;
			}
		}
		else
		{
			switch(list_position_h)
			{
				case 0:
					list_position_h++;
					break;
				case 5:
					list_position_h++;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 6://frequency
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[satIndex]);/*
					freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
					freqContentSpanList[1].innerHTML = "";
					freqContentSpanList[2].innerHTML = "";*/
					list_position_h++;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 7://symbol rate
					setSatInfo(satelliteInfoList[satIndex]);
					sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
					sybContentSpanList[1].innerHTML = "";
					sybContentSpanList[2].innerHTML = "";
					list_position_h++;
					break;
				case 9:
					list_position_h = 0;
					break;
				case 3://add chenhua 2014.6.16
					if(nowSatelliteInfo.lNBFreq == 0)
					{
						list_position_h += 2;
					}
					else
					{
						list_position_h++;
					}
					break;
				default:
					list_position_h++;
					break;
			}
		}
		showSatEditFocus(list_position_h);
	}
}

function toUp()
{
	if(focusOn == "satellite")
	{
		if(list_position_h <= 0)
		{
			if(page > 0)
			{
				page--;
				list_position_h = ONE_PAGE_SUM - 1;
				refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM,page);
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
					refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM,page);
				}
			}
		}
		else
		{
			list_position_h--;
		}
		$("satListFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
		
	}
	else if(focusOn == "satEdit")
	{
		$("delete").style.display = "none";
		$("insert").style.display = "none";
		if(satAntennaType == 0)//signal cable
		{
			switch(list_position_h)
			{
				case 0:
					list_position_h = 5;
					break;
				case 1:
					list_position_h--;
					break;
				case 2:
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[satIndex]);/*
					freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
					freqContentSpanList[1].innerHTML = "";
					freqContentSpanList[2].innerHTML = "";*/
					list_position_h--;
					break;
				case 3:
					setSatInfo(satelliteInfoList[satIndex]);
					sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
					sybContentSpanList[1].innerHTML = "";
					sybContentSpanList[2].innerHTML = "";
					list_position_h--;
					
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 4:
					list_position_h--;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				default:
					list_position_h--;
					break;
			}
		}
		else
		{
			switch(list_position_h)
			{
				case 0:
					list_position_h = 9;
					break;
				case 1:
					list_position_h--;
					break;
				case 6:
					correctFrequencyForLNBFreq();
					setSatInfo(satelliteInfoList[satIndex]);/*
					freqContentSpanList[0].innerHTML = nowSatelliteInfo.frequency;
					freqContentSpanList[1].innerHTML = "";
					freqContentSpanList[2].innerHTML = "";*/
					list_position_h--;
					break;
				case 7:
					setSatInfo(satelliteInfoList[satIndex]);
					sybContentSpanList[0].innerHTML = nowSatelliteInfo.symbolRate;
					sybContentSpanList[1].innerHTML = "";
					sybContentSpanList[2].innerHTML = "";
					list_position_h--;
					
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 8:
					list_position_h--;
					strPosition = 0;
					strFocusFlag = 0;
					sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
					$("delete").style.display = "block";
					$("insert").style.display = "block";
					break;
				case 5://add chenhua 2014.6.16
					if(nowSatelliteInfo.lNBFreq == 0)
					{
						list_position_h -= 2;
					}
					else
					{
						list_position_h--;
					}
					break;
				default:
					list_position_h--;
					break;
			}
		}
		showSatEditFocus(list_position_h);
	}
}

function toLeft()
{
	if(focusOn == "satEdit")
	{
		if(satAntennaType == 0)
		{
			switch(list_position_h)
			{
				case 0:
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
					break;
				default:	
					break;
			}
		}
		else
		{
			switch(list_position_h)
			{
				case 0:
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
					break;
				case 6:
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
					setSatInfo(satelliteInfoList[satIndex]);
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
	if(focusOn == "satEdit")
	{
		if(satAntennaType == 0)
		{
			switch(list_position_h)
			{
				case 0:
					doEnter();
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
					break;
				default:	
					break;
			}
		}
		else
		{
			switch(list_position_h)
			{
				case 0:
					doEnter();
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
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
					setSatInfo(satelliteInfoList[satIndex]);
					break;
				default:	
					break;
			}
		}
	}
}

function doEnter()
{channel.testLog("in doEnter focusOn = " + focusOn + ",isSearch = " + isSearch);
	if(focusOn == "satEdit")
	{
		if(satAntennaType == 0)
		{
			if(list_position_h == 0)
			{
				initSatellite(satIndex);
			}
			else if(list_position_h == 2)
			{
				strPosition = 0;
				strFocusFlag = 0;
				sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
			}
			else if(list_position_h == 3)
			{
				strPosition = 0;
				strFocusFlag = 0;
				sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
			}
			else if(list_position_h == 5)
			{
				initScanForm();
			}
		}
		else
		{
			if(list_position_h == 0)
			{
				initSatellite(satIndex);
			}
			else if(list_position_h == 6)
			{
				strPosition = 0;
				strFocusFlag = 0;
				sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
			}
			else if(list_position_h == 7)
			{
				strPosition = 0;
				strFocusFlag = 0;
				sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
			}
			else if(list_position_h == 9)
			{
				initScanForm();
			}
		}
	}
	else if(focusOn == "satellite")
	{
		satIndex = list_position_h + page*ONE_PAGE_SUM;
		initSatelliteEdit(satIndex);
	}
	else if(focusOn == "scan")
	{
		if(isSearch == 1)
		{
			toBack();
		}
	}
}

function toBack()
{
	if(focusOn == "scan")
	{
		if(isSearch == 1)
		{
			isSearch = 0;
			channel.stopScan();
			top.restartTimeout();
			$("scanStatus").innerHTML = scanStatusWords[2];
			
			setTimeout(function(){	
				top.$("main").contentWindow.subMenu2.initOptionShowStatus(tunerMode);
				top.focusToIndexHtml(2);},2000);
		}
	}
	else if(focusOn == "satEdit")
	{
		top.$("main").contentWindow.subMenu2.initOptionShowStatus(tunerMode);
		top.focusToIndexHtml(2);
	}
	else if(focusOn == "satellite")
	{
		list_position_h = 0;
		$("satListForm").style.display = "none";
		$("scanForm").style.display = "none";
		$("satInfoForm").style.display = "block";
		focusOn = "satEdit";
	}
}

/*
描述：根据焦点位置显示焦点
参数：value:list_position_h
*/
function showSatEditFocus(value)
{
	channel.testLog("in showSatEditFocus");
	if(satAntennaType == 0)
	{
		if(value <= 4)
		{
			$("search").style.border = "none";
			$("satInfoFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
			$("satInfoFocus").style.display = "block";
		}
		else
		{
			$("satInfoFocus").style.display = "none";
			$("search").style.border = "medium solid #00aadd";
		}
	}
	else
	{
		if(value <= 8)
		{
			$("search").style.border = "none";
			$("satInfoFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
			$("satInfoFocus").style.display = "block";
		}
		else
		{
			$("satInfoFocus").style.display = "none";
			$("search").style.border = "medium solid #00aadd";
		}
	}
	channel.testLog("in showSatEditFocus end");
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
				isSearch = 0;
				top.restartTimeout();
				$("scanStatus").innerHTML = scanStatusWords[1];
				setTimeout(function(){	
					top.$("main").contentWindow.subMenu2.initOptionShowStatus(tunerMode);
					top.focusToIndexHtml(2);},3000);
			}
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
}


function initScanForm()
{
	channel.testLog("in initScanForm  " );
	top.showDialogPosition($("scanForm"),800,280,1920,1080,0,0)
	anologScanCount = 0;
	digitalScanCount = 0;
	progress = 0;
	$("scanTitle").innerHTML = satAutoTitles[0];
	
	$("scanStatus").innerHTML = scanStatusWords[0];
	$("scanResult1").innerHTML = others[0] + (anologScanCount + digitalScanCount);
	$("scanResult2").innerHTML = "";
	
	$("progressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
	$("progressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
	$("progressValue").innerHTML = progress + "%";
	$("stop").innerHTML = others[5];
	
	isSearch = 1;
	top.stopTimeout();
	channel.startScanDvbsManual(nowSatelliteInfo.id,parseInt(nowSatelliteInfo.frequency,10),parseInt(nowSatelliteInfo.symbolRate,10),nowSatelliteInfo.polarization);
	$("scanForm").style.display = "block";
	$("satListForm").style.display = "none";
	$("satInfoForm").style.display = "none";
	focusOn = "scan";
	
	channel.testLog("in initScanForm  end" );
}

/*
描述：保存卫星信息
参数：satellite:正编辑的卫星对象
*/
function setSatInfo(satellite)
{
	channel.testLog("in setSatInfo list_position_h = " + list_position_h);
	if(satAntennaType == 0)
	{
		switch(list_position_h)
		{
			case 0:
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
		switch(list_position_h)
		{
			case 0:
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
	channel.testLog("in setSatInfo end");
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
frequency and symbol rate时使用
*/
function checkNumInput(keycode)
{
	inputChar = keycode - 48;
		
	if(satAntennaType == 0)
	{
		if(list_position_h == 2)
		{
			nowSatelliteInfo.frequency = "" + inputNumToNumber(nowSatelliteInfo.frequency,strPosition,strFocusFlag,inputChar,FREQUENCY_MAX_LENGTH);
			//freqThresholdCheck(nowSatelliteInfo.frequency);
			sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
		}
		else if(list_position_h == 3)
		{
			nowSatelliteInfo.symbolRate = "" + inputNumToNumber(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,inputChar,SYMBOL_RATE_MAX_LENGTH);
			//symbThresholdCheck(nowSatelliteInfo.symbolRate);
			sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
		}
	}
	else
	{
		if(list_position_h == 6)
		{
			nowSatelliteInfo.frequency = "" + inputNumToNumber(nowSatelliteInfo.frequency,strPosition,strFocusFlag,inputChar,FREQUENCY_MAX_LENGTH);
			//freqThresholdCheck(nowSatelliteInfo.frequency);
			sliceStringToTags(freqContentSpanList,nowSatelliteInfo.frequency,strPosition,strFocusFlag,FREQUENCY_MAX_LENGTH);
		}
		else if(list_position_h == 7)
		{
			nowSatelliteInfo.symbolRate = "" + inputNumToNumber(nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,inputChar,SYMBOL_RATE_MAX_LENGTH);
			//symbThresholdCheck(nowSatelliteInfo.symbolRate);
			sliceStringToTags(sybContentSpanList,nowSatelliteInfo.symbolRate,strPosition,strFocusFlag,SYMBOL_RATE_MAX_LENGTH);
		}
	}
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
描述：根据焦点的index和焦点是“_”还是落在字母上删除焦点文字，焦点下移一位，并让当前的焦点显示为红色；
参数：tagList：存放切分后的字串的容器；string：要切分的字符串；index：焦点所在索引值；cursorFlag：焦点类型（0表示当前文字是焦点，1表示焦点是“_”）；maxLength:允许的字串最大长度
全局变量：strPosition，strFocusFlag
返回值：更改后的字符串
*/
function deleteCharFromString(string,index,cursorFlag,maxLength)
{
	channel.testLog(" in deleteCharFromString string = " + string + ",index = " + index + ",cursorFlag = " + cursorFlag + ",maxLength = " + maxLength );
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
	channel.testLog(" in insertCharPreToString string = " + string + ",index = " + index + ",cursorFlag = " + cursorFlag + ",maxLength = " + maxLength);
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
描述：初始化选中的卫星的详细信息
参数:infoIndex:选中的卫星的信息的编号
*/
var satInfoContentLiList;
var nowSatelliteInfo;

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
	list_position_h = 0;
	
	freqContentSpanList = $("freqContent").getElementsByTagName("span");
	sybContentSpanList = $("sybContent").getElementsByTagName("span");
	$("satInfoTitle").innerHTML = satAutoTitles[0];
	var lableList = $("satInfoContent").getElementsByTagName("label");
	lableList[0].innerHTML = satAutoTitles[1];
	for(var i = 1; i < 12; i++)
	{
		lableList[i].innerHTML = satEditOptions[i];
	}
	channel.testLog("in satellite edit 1");
	var info = satelliteInfoList[infoIndex];
	channel.stopTv();
	channel.lockSatelliteFreq(info.id);//卫星锁频
	nowSatelliteInfo = {
		id				: info.id,
		name 			: satelliteNameList[infoIndex],
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
	
	$("nameSpan").innerHTML = nowSatelliteInfo.name;
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
	channel.testLog("in satellite edit 2");
	sigStrengthDivList = $("sigStrength").getElementsByTagName("div");
	sigQualityDivList = $("sigQuality").getElementsByTagName("div");
	
	setInterval("refreshSignalQualityAndStrength()",1000);
	
	$("search").innerHTML = others[1];
	$("delete").getElementsByTagName("span")[0].innerHTML = others[3];
	$("insert").getElementsByTagName("span")[0].innerHTML = others[4];
	$("delete").style.display = "none";
	$("insert").style.display = "none";
	
	$("satInfoFocus").style.top = SCAN_FOCUS_START + list_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
	$("scanForm").style.display = "none";
	$("satListForm").style.display = "none";
	$("satInfoForm").style.display = "block";
	focusOn = "satEdit";
	top.showDialogPosition($("satInfoForm"),800,860,1920,1080,0,0);
	
	//add chenhua 2014.6.16 
	showAboutLNBFreq();
	
}

/*
描述：通过LNBFreq的枚举更正frequency的位数
*/
function correctFrequencyForLNBFreq()
{
	FREQUENCY_MAX_LENGTH = (nowSatelliteInfo.lNBFreq == 3 || nowSatelliteInfo.lNBFreq == 4)?7:8;
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
描述：刷新卫星列表
参数：sum：卫星数量;onePageMax:一页能显示的卫星数量;pageIndex:当前是第几页
全局变量：page,list_position_h,
*/
function refreshSatellite(sum,onePageMax,pageIndex)
{
	for(var i = 0; i < onePageMax; i++)
	{
		if((i + pageIndex*onePageMax) < sum)
		{
			satelliteContentLiList[i].innerHTML = satelliteNameList[i + pageIndex*onePageMax];
		}
		else
		{
			satelliteContentLiList[i].innerHTML = "";
		}
	}
	
	if(sum > (pageIndex + 1)*onePageMax)
	{
		$("downFlag").style.display = "block";
	}
	else
	{
		$("downFlag").style.display = "none";
	}
	
	if(pageIndex > 0)
	{
		$("upFlag").style.display = "block";
	}
	else
	{
		$("upFlag").style.display = "none";
	}
}


var satelliteContentLiList;
var page = 0;//satellite page
function initSatellite(index)
{
	page = parseInt(index/ONE_PAGE_SUM,10);
	list_position_h = index%ONE_PAGE_SUM;
	refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM,page);
	
	$("satListTitle").innerHTML = satAutoTitles[1];
	$("satListFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
	$("scanForm").style.display = "none";
	$("satListForm").style.display = "block";
	$("satInfoForm").style.display = "none";
	focusOn = "satellite";
	top.showDialogPosition($("satListForm"),800,750,1920,1080,0,0);
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
描述：根据运营商索引获取卫星列表，并把卫星名称转换成当前语言后压到卫星名称列表中
参数：
全局变量：chDvbsSatellites,languagePosition
*/
function addSatelliteToArray()
{
	satelliteInfoList = channel.getSatelliteList(0);//0表示手动搜卫星搜台
	satelliteNameList = new Array(satelliteInfoList.length);
	for(var i = 0; i < satelliteInfoList.length; i++)
	{
		/*
		var index = 0;
		while(satelliteInfoList[i].name != chDvbsSatellites[0][index])
		{
			index++;
		}
		satelliteNameList[i] = chDvbsSatellites[languagePosition][index];
		*/
		satelliteNameList[i] = satelliteInfoList[i].name;
	}
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

var tunerMode = 0;
function init()
{
    channel.testLog("***** satManualSearch init **** ");
    top.uiPauseDownloadingUpFile();
	timeoutInit();
	satelliteContentLiList = $("satListForm").getElementsByTagName("li");
	satInfoContentLiList = $("satInfoContent").getElementsByTagName("li");
	satAntennaType = channel.getSatelliteAntennaInfo().type;
	tunerMode =  channel.tunerMode;
	var language = setting.menuLanguage;
	languagePosition = fixMenuLangFocus(language);
	addSatelliteToArray();
	initSatelliteEdit(satIndex);
	addMouseListener();
}

function uninit()
{
    channel.testLog("***** satManualSearch uninit **** ");
    top.uiResumeDownloadingUpFile();

	channel.setServiceType(1);//dtv
	channel.inputSource = 1;//dtv
	//channel.playCurrentTv();
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//auto scan form
	$("stop").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "scan")
			{
				doEnter();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
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
					$("satListFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
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
					refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM,page);
					$("satListFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
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
					refreshSatellite(satelliteInfoList.length,ONE_PAGE_SUM,page);
					$("satListFocus").style.top = OPERATOR_AND_CH_TYPE_START + list_position_h*OPTION_STEP + "px";
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//satellite edit
	for(var i = 0; i < 13; i++)
	{
		satInfoContentLiList[i].setAttribute("newAttr",i);
		satInfoContentLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "satEdit")
				{
					if(parseInt(this.getAttribute("newAttr")) == 10 || parseInt(this.getAttribute("newAttr")) == 11)
					{
						//信号强度和质量，不用管
					}
					else if(nowSatelliteInfo.lNBFreq == 0 && parseInt(this.getAttribute("newAttr")) == 5)
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
							switch(list_position_h)
							{
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
							switch(list_position_h)
							{
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
								list_position_h = parseInt(this.getAttribute("newAttr"));
							}
							else if(parseInt(this.getAttribute("newAttr")) > 6)
							{
								list_position_h = parseInt(this.getAttribute("newAttr")) - 5;
							}
							
							switch(list_position_h)
							{
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
								list_position_h = parseInt(this.getAttribute("newAttr"));
							}
							else if(parseInt(this.getAttribute("newAttr")) == 12)
							{
								list_position_h = 9;
							}
							else if(parseInt(this.getAttribute("newAttr")) > 1)
							{
								list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
							}
							
							switch(list_position_h)
							{
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
						showSatEditFocus(list_position_h);
						doEnter();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
}
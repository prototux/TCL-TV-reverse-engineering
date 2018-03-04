/******************** created by chenhua ***********************/
/*搜台开始停止OSD timeout ,搜台中返回重新开启OSD timeout，如果是等待退出到channelPlay页面则不用重启OSD timeout*/
var chScanTitleWords 	= [top.chScanOptions[4],[top.chScanOptions[5][0],top.chScanOptions[5][1],top.chScanOptions[5][2]]];
var chGenreWords		= top.chType;
var scanStatusWords		= top.chScanStatus;
var scanOptionWords 	= top.chScanPara;
var atvManualSysWords	= top.chAtvManSys;
var modulationWords		= top.modulation;
var cleanChWords		= top.chCleanDes;
var yesNoWords 			= top.yesNo;
var searchStop			= [top.others[8],top.others[17]];
var storeAndReplace 	= [top.others[32],top.others[5]];
var storeRemind			= top.chAtvStore;
var noRelatedChannel	= top.noRelatedChannel;

document.onkeyup 		= keyUpProc;
document.onnotify 		= notifyProcess;
var channel 			= top.g_channel;
var setting				= top.g_setting;
//var list_position_h 	= 0;				//主界面焦点位置
var form_position_h 	= 0;				//弹出页面焦点位置,在atv manual scan中0-2:焦点落在输入选择框系列上，3-4：焦点落在按钮上

var focusOn 			= "analogManual";			//analogManual,antennaManual,cableManual;
var freqWords 			= new Array(6);
var sybWords 			= new Array(4);

var SUB_MENU_START 		= 130;				//三四级菜单焦点移动起始位置
var SUB_MENU_STEP 		= 70;				//三四级主菜单焦点移动的step
var FORM_STEP			= 80;				//弹出框焦点移动的step
var DLOG_BUTTON_START	= 200;				//对话框中的按钮焦点开始的位置
var DLOG_BUTTON_STEP	= 250;				//对话框中按钮焦点移动的step

var SCAN_FOCUS_START	= 10;				//搜台框输入框焦点起始位置




/////////搜台时使用
var scanningInfo;
var anologScanCount 	= 0;
var digitalScanCount 	= 0;
var progress 			= 0;
var PROGRESS_WIDTH		= (600 - 10);		//总长为600个像素，但是要去掉表示当前进度的原点：10个像素
var frequency			= -1;				//-1 auto,其他表示frequency MHz
var modulation			= -1;				//0 16 QAM,1 32 QAM,2 64 QAm...
var symbolRate			= -1;				//4000-7200
var networkID			= -1;				//000000-999999
var isSearch			= 0;				//判断是否在搜台：1搜台，0 不搜台
var numPosition 		= 0;				//数字输入焦点位置:0-5
var numStartPosition	= 0;				//当前焦点下数的最高位在页面上所有用于显示数的span框的下标位置（0-5），如113有三位，起始位置是第3位
var numStartPosition2	= 0;				//当搜台框有两个需要输入数字的输入框时，第二个输入框使用

//atv manual scan
var systemEnum			= 0;				//0-3;atv manual scan 下的system属性枚举值，默认为0，这个值系统是不保存的
var INPUT_PROGRESS_WIDTH= 340;	
var tune				= 0;				//fine tune value : -30到30

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
		case top.E_TV_EXCHANGE_END://change source
			//
			break;
		case top.E_SS_COMMON_VIDEO:
			//
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
{channel.testLog("in manualSearch keyproc isSearch = " + isSearch);
	var ret = true;
	var keycode = evt.which;
	
	if(isSearch == 1)
	{
		switch(keycode)
		{
			case top.VK_POWER:
				channel.stopScan();
				top.keyDownProcess(evt);
				break;
			case top.VK_EXIT: //exit
			case top.VK_MENU: //menu
				toExit();
				break;
			case top.VK_BACK: //back
				toSearchBack();
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
	else if(focusOn == "remind")//add for save atv channel remind
	{
		if(keycode != top.VK_POWER)
		{
			top.keyDownProcess(evt);
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
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt--输入搜索频率的输入框界面
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
		//lqt--虚拟遥控器的右键
		case top.VK_VIRTUAL_KEYBOARD_RIGHT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForRight(); 
			
			break;
		}
		//lqt--鼠标的左键
		case top.VK_VIRTUAL_MOUSE_OK:
		{
			var clientX = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientX", "0");
			var clientY = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientY", "0");
			console.log("lqt---manualSearch.js---clientX: "+clientX);
			console.log("lqt---manualSearch.js---clientY: "+clientY);
			top.document.getElementById("virtualRemote").contentWindow.keyDownMouseClick(clientX,clientY); 
			
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
		default:
			top.keyDownProcess(evt);
			ret = true;
			break;
	}
	return ret;
}

/*
功能描述：专门用来处理数字键值的函数
参数：
全局变量：
*/
function keyUpProc(evt)
{
	var keycode = evt.which;
	switch(keycode)
	{
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
			if(focusOn == "antennaManual")
			{
				if(tManuChIdSum > 0)
				{
					if(form_position_h == 1)
					{
						if(isSearch == 1)
						{
							return;
						}
						doFreNumber(evt.which - 48,tManuFreqContentSpanList);
					}
				}
				else
				{
					if(form_position_h == 0)
					{
						if(isSearch == 1)
						{
							return;
						}
						doFreNumber(evt.which - 48,tManuFreqContentSpanList);
					}
				}
			}
			else if(focusOn == "analogManual")
			{
				if(form_position_h == 1)
				{
					if(isSearch == 1)
					{
						return;
					}
					isAtvFreqChanged = 1;
					doFreNumber(evt.which - 48,atvSearchContentSpanList);
				}
			}
			else if(focusOn == "cableManual")
			{
				if(isSearch == 1)
				{
					return;
				}
				if(form_position_h == 0)
				{
					doFreNumber(evt.which - 48,cManuFreqContentSpanList);
				}
				else if(form_position_h == 2) 
				{
					doSybNumber(evt.which - 48,cManuSybContentSpanList);
				}
			}
			break;
		default:
			break;
	}
}

function $(id)
{
	return document.getElementById(id);
}


/*
描述：手动动停止搜台
*/
function manualStopScanning()
{
	channel.testLog("in manualStopScanning");
	isSearch = 0;
	channel.stopScan();
	channel.setServiceType(1);//dtv
	channel.inputSource = 1;//dtv
	//channel.playCurrentTv();
	top.restartTimeout();
	if(focusOn == "cableManual")
	{
		$("cManuStatus").innerText = scanStatusWords[2];
		$("cManuSearch").innerText = searchStop[0];
		/*progress = 100;
		$("cManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
		$("cManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
		$("cManuProgressValue").innerText = progress + "%";*/
	}
	else if(focusOn == "antennaManual")
	{
		$("tManuStatus").innerText = scanStatusWords[2];
		$("tManuSearch").innerText = searchStop[0];
		/*progress = 100;
		$("tManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
		$("tManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
		$("tManuProgressValue").innerText = progress + "%";*/
	}
}

function toExit()
{
	if(isSearch == 1)
	{
		isSearch = 0;
		channel.stopScan();
		if(focusOn == "cableManual")
		{
			channel.setServiceType(1);//dtv
			channel.inputSource = 1;//dtv
			$("cManuStatus").innerText = scanStatusWords[2];
			$("cManuSearch").innerText = searchStop[0];
			/*progress = 100;
			$("cManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("cManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("cManuProgressValue").innerText = progress + "%";*/
		}
		else if(focusOn == "antennaManual")
		{
			channel.setServiceType(1);//dtv
			channel.inputSource = 1;//dtv
			$("tManuStatus").innerText = scanStatusWords[2];
			$("tManuSearch").innerText = searchStop[0];
			/*progress = 100;
			$("tManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("tManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("tManuProgressValue").innerText = progress + "%";*/
		}
		else//alanogue
		{
			if(atvChannelCount > 0)
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
		//channel.playCurrentTv();
		setTimeout(function(){top.jumpPage();},3000);
		focusOn = "exit";
	}
	else
	{
		top.jumpPage();
	}
}

/*
描述：在没有搜台的情况下按返回键处理
*/
function toNormalBack()
{
	top.$("main").contentWindow.subMenu2.initOptionShowStatus(channel.tunerMode);
	top.focusToIndexHtml(2);
}
/*
描述：在搜台的情况下按返回键处理,isSearch==1
*/
function toSearchBack()
{
	channel.testLog("in toSearchBack isSearch = " + isSearch + ",focusOn = " + focusOn);
	isSearch = 0;
	channel.stopScan();
	//channel.playCurrentTv();
	top.restartTimeout();
	if(focusOn == "cableManual")
	{
		channel.setServiceType(1);//dtv
		channel.inputSource = 1;//dtv
		$("cManuStatus").innerText = scanStatusWords[2];
		$("cManuSearch").innerText = searchStop[0];
		/*progress = 100;
		$("cManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
		$("cManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
		$("cManuProgressValue").innerText = progress + "%";*/
		setTimeout(function(){
					top.$("main").contentWindow.subMenu2.initOptionShowStatus(channel.tunerMode);
					top.focusToIndexHtml(2);
					},3000);
	}
	else if(focusOn == "antennaManual")
	{
		channel.setServiceType(1);//dtv
		channel.inputSource = 1;//dtv
		$("tManuStatus").innerText = scanStatusWords[2];
		$("tManuSearch").innerText = searchStop[0];
		/*progress = 100;
		$("tManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
		$("tManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
		$("tManuProgressValue").innerText = progress + "%";*/
		setTimeout(function(){
					top.$("main").contentWindow.subMenu2.initOptionShowStatus(channel.tunerMode);
					top.focusToIndexHtml(2);
					},3000);
	}
	else//atv manual
	{
		if(atvChannelCount > 0)
		{
			channel.setServiceType(0);//atv
			channel.inputSource = 0;//atv
		}
		else
		{
			channel.setServiceType(1);//atv
			channel.inputSource = 1;//dtv
		}
		top.$("main").contentWindow.subMenu2.initOptionShowStatus(channel.tunerMode);
		top.focusToIndexHtml(2);
	}	
}

function toDown()
{
	if(focusOn == "analogManual")
	{
		channel.testLog(" in toDown anologScanCount = " + anologScanCount);
		if(isSearch == 1)
		{
			return;
		}
		if(form_position_h == atvTitleIndex)//[0]
		{
			numPosition = numStartPosition;
			atvSearchContentSpanList[numPosition].style.color = "#f00";
			form_position_h++;
			$("atvManualInputFocus").style.top = 80 + form_position_h*50 + "px";
		}
		else if(form_position_h == atvSearchIndex)
		{
			correctStartPositionOfSpanList(numStartPosition,atvSearchContentSpanList,freqWords);
			atvSearchContentSpanList[numPosition].style.color = "#fff";
			var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
			//如果输入的数值越界，自动填入边界值
			if(f < 45000)
			{
				showFreqWhenChanged(45000,atvSearchContentSpanList,0);
			}
			else if(f > 862000)
			{
				showFreqWhenChanged(862000,atvSearchContentSpanList,0);
			}
			if(atvChannelCount > 0 || anologScanCount > 0)
			{
				form_position_h++;
			}
			else
			{
				form_position_h = 0;
			}
			$("atvManualInputFocus").style.top = 80 + form_position_h*50 + "px";
		}
		else if(form_position_h == atvFTIndex)
		{
			if(anologScanCount <= 0)
			{
				form_position_h = 0;
				$("atvManualInputFocus").style.top = 80 + form_position_h*50 + "px";
			}
			else
			{
				$("atvManualInputFocus").style.display = "none";
				form_position_h = atvSaveIndex;//
				$("atvManualButtonFocus").style.left = DLOG_BUTTON_START + (form_position_h - atvSaveIndex)*DLOG_BUTTON_STEP + "px";
				$("atvManualButtonFocus").style.display = "block";
			}
			
		}
		else if(form_position_h >= atvSaveIndex)
		{
			$("atvManualButtonFocus").style.display = "none";
			form_position_h = 0;
			$("atvManualInputFocus").style.top = 80 + form_position_h*50 + "px";
			$("atvManualInputFocus").style.display = "block";
		}
	}
	else if(focusOn == "cableManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(form_position_h == 0)
		{
			correctStartPositionOfSpanList(numStartPosition,cManuFreqContentSpanList,freqWords);
			cManuFreqContentSpanList[numPosition].style.color = "#fff";
			form_position_h++;
			$("cManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
			var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
			//如果输入的数值越界，自动填入边界值
			if(f < 45000)
			{
				showFreqWhenChanged(45000,cManuFreqContentSpanList,0);
			}else if(f > 862000)
			{
				showFreqWhenChanged(862000,cManuFreqContentSpanList,0);
			}
		}
		else if(form_position_h == 1)
		{
			form_position_h++;
			numPosition = numStartPosition2;
			cManuSybContentSpanList[numPosition].style.color = "#f00";
			$("cManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
		}
		else if(form_position_h == 2)
		{
			correctStartPositionOfSpanList(numStartPosition2,cManuSybContentSpanList,sybWords);
			cManuSybContentSpanList[numPosition].style.color = "#fff";
			$("cManuInputFocus").style.display = "none";
			form_position_h = 3;
			$("cManuSearch").style.border = "medium solid #00aadd";
			var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
			//如果输入的数值越界，自动填入边界值
			if(s < 4000)
			{
				showInitSymbol(4000,cManuSybContentSpanList);
			}
			else if (s > 7200)
			{
				showInitSymbol(7200,cManuSybContentSpanList);
			}
		}
		else if(form_position_h == 3)
		{
			$("cManuSearch").style.border = "none";
			
			form_position_h = 0;
			numPosition = numStartPosition;
			cManuFreqContentSpanList[numPosition].style.color = "#f00";
			$("cManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
			$("cManuInputFocus").style.display = "block";
		}
	}
	else if(focusOn == "antennaManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		if(tManuChIdSum > 0)
		{
			if(form_position_h <= 0)
			{
				form_position_h = 1;
				$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
				numPosition = numStartPosition;
				tManuFreqContentSpanList[numPosition].style.color = "#f00";
			}
			else if(form_position_h == 1)
			{
				correctStartPositionOfSpanList(numStartPosition,tManuFreqContentSpanList,freqWords);
				tManuFreqContentSpanList[numPosition].style.color = "#fff";
				$("tManuInputFocus").style.display = "none";
				
				form_position_h = 2;
				$("tManuSearch").style.border = "medium solid #00aadd";
				var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
				//如果输入的数值越界，自动填入边界值
				if(f < 45000)
				{
					f = 45000;
					showFreqWhenChanged(f,tManuFreqContentSpanList,0);
				}
				else if(f > 862000)
				{
					f = 862000;
					showFreqWhenChanged(f,tManuFreqContentSpanList,0);
				}
				refreshChIdIndex($("tManuChIdContent"),f);
			}
			else
			{
				$("tManuSearch").style.border = "none";
				
				form_position_h = 0;
				$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
				$("tManuInputFocus").style.display = "block";
			}
		}
		else
		{
			if(form_position_h <= 0)
			{
				correctStartPositionOfSpanList(numStartPosition,tManuFreqContentSpanList,freqWords);
				tManuFreqContentSpanList[numPosition].style.color = "#fff";
				$("tManuInputFocus").style.display = "none";
				form_position_h = 1;
				$("tManuSearch").style.border = "medium solid #00aadd";
				var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
				//如果输入的数值越界，自动填入边界值
				if(f < 45000)
				{
					showFreqWhenChanged(45000,tManuFreqContentSpanList,0);
				}
				else if(f > 862000)
				{
					showFreqWhenChanged(862000,tManuFreqContentSpanList,0);
				}
			}
			else
			{
				$("tManuSearch").style.border = "none";
				
				form_position_h = 0;
				numPosition = numStartPosition;
				tManuFreqContentSpanList[numPosition].style.color = "#f00";
				$("tManuInputFocus").style.display = "block";
			}
		}
	}
}

function toUp()
{
	if(focusOn == "analogManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(form_position_h <= atvTitleIndex)
		{
			if(anologScanCount <= 0)
			{
				if(atvChannelCount > 0)
				{
					form_position_h = atvFTIndex;//2
				}
				else
				{
					form_position_h = atvSearch;//1
					numPosition = numStartPosition;
					atvSearchContentSpanList[numPosition].style.color = "#f00";
				}
			}
			else
			{
				$("atvManualInputFocus").style.display = "none";
				form_position_h = atvSaveIndex;//3
				$("atvManualButtonFocus").style.left = DLOG_BUTTON_START + (form_position_h - atvSaveIndex)*DLOG_BUTTON_STEP + "px";
				$("atvManualButtonFocus").style.display = "block";
			}
		}
		else if(form_position_h == atvSearchIndex)
		{
			correctStartPositionOfSpanList(numStartPosition,atvSearchContentSpanList,freqWords);
			atvSearchContentSpanList[numPosition].style.color = "#fff";
			if(form_position_h - 1 < 0)
			{
				$("atvManualInputFocus").style.display = "none";
				form_position_h = atvSaveIndex;//
				$("atvManualButtonFocus").style.left = DLOG_BUTTON_START + (form_position_h - atvSaveIndex)*DLOG_BUTTON_STEP + "px";
				$("atvManualButtonFocus").style.display = "block";
			}
			else
			{
				form_position_h--;
			}
			var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
			//如果输入的数值越界，自动填入边界值
			if(f < 45000)
			{
				showFreqWhenChanged(45000,atvSearchContentSpanList,0);
			}else if(f > 862000)
			{
				showFreqWhenChanged(862000,atvSearchContentSpanList,0);
			}	
		}
		else if(form_position_h == atvFTIndex)
		{
			numPosition = numStartPosition;
			atvSearchContentSpanList[numPosition].style.color = "#f00";
			form_position_h--;
		}
		else if(form_position_h >= atvSaveIndex)
		{
			$("atvManualButtonFocus").style.display = "none";
			form_position_h = atvFTIndex;//2
			$("atvManualInputFocus").style.display = "block";
		}
		$("atvManualInputFocus").style.top = 80 + form_position_h*50 + "px";
	}
	else if(focusOn == "cableManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(form_position_h <= 0)
		{
			correctStartPositionOfSpanList(numStartPosition,cManuFreqContentSpanList,freqWords);
			cManuFreqContentSpanList[numPosition].style.color = "#fff";
			$("cManuInputFocus").style.display = "none";
			form_position_h = 3;
			$("cManuSearch").style.border = "medium solid #00aadd";
			var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
			//如果输入的数值越界，自动填入边界值
			if(f < 45000)
			{
				showFreqWhenChanged(45000,cManuFreqContentSpanList,0);
			}else if(f > 862000)
			{
				showFreqWhenChanged(862000,cManuFreqContentSpanList,0);
			}	
		}
		else if(form_position_h == 1)
		{
			numPosition = numStartPosition;
			cManuFreqContentSpanList[numPosition].style.color = "#f00";
			
			form_position_h--;
			$("cManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
		}
		else if(form_position_h == 2)
		{
			correctStartPositionOfSpanList(numStartPosition2,cManuSybContentSpanList,sybWords);
			cManuSybContentSpanList[numPosition].style.color = "#fff";
			
			form_position_h--;
			$("cManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
			var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
			//如果输入的数值越界，自动填入边界值
			if(s < 4000)
			{
				showInitSymbol(4000,cManuSybContentSpanList);
			}
			else if (s > 7200)
			{
				showInitSymbol(7200,cManuSybContentSpanList);
			}
		}
		else if(form_position_h == 3)
		{
			$("cManuSearch").style.border = "none";
			
			form_position_h = 2;
			numPosition = numStartPosition2;
			cManuSybContentSpanList[numPosition].style.color = "#f00";
			$("cManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
			$("cManuInputFocus").style.display = "block";
		}
		
	}
	else if(focusOn == "antennaManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(tManuChIdSum > 0)
		{
			if(form_position_h <= 0)
			{
				$("tManuInputFocus").style.display = "none";
				
				form_position_h = 2;
				$("tManuSearch").style.border = "medium solid #00aadd";
			}
			else if(form_position_h == 1)
			{
				correctStartPositionOfSpanList(numStartPosition,tManuFreqContentSpanList,freqWords);
				tManuFreqContentSpanList[numPosition].style.color = "#fff";
				
				form_position_h = 0;
				$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
				var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
				//如果输入的数值越界，自动填入边界值
				if(f < 45000)
				{
					f = 45000;
					showFreqWhenChanged(f,tManuFreqContentSpanList,0);
				}else if(f > 862000)
				{
					f = 862000;
					showFreqWhenChanged(f,tManuFreqContentSpanList,0);
				}
				refreshChIdIndex($("tManuChIdContent"),f);
			}
			else if(form_position_h == 2)
			{
				$("tManuSearch").style.border = "none";
				
				form_position_h = 1;
				$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
				numPosition = numStartPosition;
				tManuFreqContentSpanList[numPosition].style.color = "#f00";
				$("tManuInputFocus").style.display = "block";
				
			}
		}
		else
		{
			if(form_position_h <= 0)
			{
				correctStartPositionOfSpanList(numStartPosition,tManuFreqContentSpanList,freqWords);
				tManuFreqContentSpanList[numPosition].style.color = "#fff";
				$("tManuInputFocus").style.display = "none";
				
				form_position_h = 1;
				$("tManuSearch").style.border = "medium solid #00aadd";
				var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
				//如果输入的数值越界，自动填入边界值
				if(f < 45000)
				{
					showFreqWhenChanged(45000,tManuFreqContentSpanList,0);
				}else if(f > 862000)
				{
					showFreqWhenChanged(862000,tManuFreqContentSpanList,0);
				}
			}
			else
			{
				$("tManuSearch").style.border = "none";
				
				form_position_h = 0;
				numPosition = numStartPosition;
				tManuFreqContentSpanList[numPosition].style.color = "#f00";
				$("tManuInputFocus").style.display = "block";
			}
		}
	}
}

function toLeft()
{
	if(focusOn == "antennaManual")
	{
		if(isSearch == 1)
		{
			toSearchBack();
		}
		else//移动频点输入位置
		{
			if(tManuChIdSum > 0)
			{
				if(form_position_h == 0)
				{
					tManuChIdIndex--;
					if(tManuChIdIndex < 0 )
					{
						tManuChIdIndex = tManuChIdSum - 1;
					}
					$("tManuChIdContent").innerText = tManuChIdList[tManuChIdIndex].split(":")[0];
					frequency = parseInt(tManuChIdList[tManuChIdIndex].split(":")[1]);
					showFreqWhenChanged(frequency,tManuFreqContentSpanList,0);
				}
				else if(form_position_h == 1)
				{
					doLeftFreqInNumberInput(tManuFreqContentSpanList);
				}
			}
			else
			{
				doLeftFreqInNumberInput(tManuFreqContentSpanList);
			}
		}
	}
	else if(focusOn == "analogManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		switch(form_position_h)
		{
			case atvTitleIndex:
				if(systemEnum <= 0)
				{
					systemEnum = 3;
				}
				else
				{
					systemEnum--;
				}
				$("atvSysContent").innerText = atvManualSysWords[systemEnum];
				break;
			case atvSearchIndex://search start freq//移动频点输入位置
				doLeftFreqInNumberInput(atvSearchContentSpanList);
				break;
			case atvFTIndex:
				if(tune > -30)
				{
					tune--;
					showTuneUI(tune);
					setTune(tune,-1/*left*/);
					//setFineTuneUI(0/*left/down*/);
				}
				break;
			case atvSaveIndex:
				if(atvChannelCount > 0)
				{
					form_position_h = atvReplaceIndex;
					$("atvManualButtonFocus").style.left = DLOG_BUTTON_START + (form_position_h - atvSaveIndex)*DLOG_BUTTON_STEP + "px";
				}
				break;
			case atvReplaceIndex:
				form_position_h = atvSaveIndex;
				$("atvManualButtonFocus").style.left = DLOG_BUTTON_START + (form_position_h - atvSaveIndex)*DLOG_BUTTON_STEP + "px";
				break;
			default:
				break;
		}
	}
	else if(focusOn == "cableManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		switch(form_position_h)
		{
			case 0:
				doLeftFreqInNumberInput(cManuFreqContentSpanList);
				break;
			case 1:
				if(modulation <= 0)
				{
					modulation = 5;
				}
				else
				{
					modulation--;
				}
				$("cManuMoContent").innerText = modulationWords[modulation];
				break;
			case 2:
				doLeftSybInNumberInput(cManuSybContentSpanList);
				break;
			default:
				break;
		}
	}
	else
	{
		parent.returnPage(2);
	}
}

function toRight()
{
	if(focusOn == "antennaManual")
	{
		if(isSearch == 0)
		{
			if(tManuChIdSum > 0)
			{
				if(form_position_h == 0)
				{
					tManuChIdIndex++;
					if(tManuChIdIndex > (tManuChIdSum - 1))
					{
						tManuChIdIndex = 0;
					}
					$("tManuChIdContent").innerText = tManuChIdList[tManuChIdIndex].split(":")[0];
					frequency = parseInt(tManuChIdList[tManuChIdIndex].split(":")[1]);
					showFreqWhenChanged(frequency,tManuFreqContentSpanList,0);
				}
				else if(form_position_h == 1)
				{
					doRightFreqInNumberInput(tManuFreqContentSpanList);
				}
			}
			else
			{
				doRightFreqInNumberInput(tManuFreqContentSpanList);
			}
		}
	}
	else if(focusOn == "analogManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		switch(form_position_h)
		{
			case atvTitleIndex://system
				if(systemEnum >= 3)
				{
					systemEnum = 0;
				}
				else
				{
					systemEnum++;
				}
				$("atvSysContent").innerText = atvManualSysWords[systemEnum];
				break;
			case atvSearchIndex://search freq
				doRightFreqInNumberInput(atvSearchContentSpanList);
				break;
			case atvFTIndex:
				if(tune < 30)
				{
					tune++;
					showTuneUI(tune);
					setTune(tune,1/*right*/);
					//setFineTuneUI(1/*right/up*/);
				}
				break;
			case atvSaveIndex://save button
				if(atvChannelCount > 0)
				{
					form_position_h = atvReplaceIndex;
					$("atvManualButtonFocus").style.left = DLOG_BUTTON_START + (form_position_h - atvSaveIndex)*DLOG_BUTTON_STEP + "px";
				}
				break;
			case atvReplaceIndex://replace button
				form_position_h = atvSaveIndex;
				$("atvManualButtonFocus").style.left = DLOG_BUTTON_START + (form_position_h - atvSaveIndex)*DLOG_BUTTON_STEP + "px";
				break;
			default:
				break;
		}
	}
	else if(focusOn == "cableManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		switch(form_position_h)
		{
			case 0:
				doRightFreqInNumberInput(cManuFreqContentSpanList);
				break;
			case 1:
				if(modulation >= 5)
				{
					modulation = 0;
				}
				else
				{
					modulation++;
				}
				$("cManuMoContent").innerText = modulationWords[modulation];
				break;
			case 2:
				doRightSybInNumberInput(cManuSybContentSpanList);
				break;
			default:
				break;
		}
	}
}

function doEnter()
{
	if(focusOn == "antennaManual")
	{
		if(isSearch == 1)
		{
			manualStopScanning();
			return;
		}
		if(tManuChIdSum > 0)
		{
			if(form_position_h == 2)
			{
				top.stopTimeout();
				channel.stopTv();
				isSearch = 1;
				var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
				$("tManuSearch").innerText = searchStop[1];
				channel.startScanDtvManual(f/*frequency*/,0/*modulation*/, 0/*symbol*/);
				$("tManuStatus").innerText = scanStatusWords[0];
			}
		}
		else
		{
			if(form_position_h == 1)
			{
				top.stopTimeout();
				channel.stopTv();
				isSearch = 1;
				var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
				$("tManuSearch").innerText = searchStop[1];
				channel.startScanDtvManual(f/*frequency*/,0/*modulation*/, 0/*symbol*/);
				$("tManuStatus").innerText = scanStatusWords[0];
			}
		}
	}
	else if(focusOn == "analogManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(form_position_h == atvSaveIndex)
		{
			channel.saveAtvChannel();
			$("remind").innerText = storeRemind.replace(/XXXX/,channel.scanAtvManualFinishNum());
			if(atvChannelCount > 0)
			{
				atvChannelCount++;
			}
			else
			{
				atvChannelCount = 1;
			}
			$("remind").style.display = "block";
			
			anologScanCount = 0;
			focusOn = "remind";
			setTimeout(function(){
				$("remind").style.display = "none";
				focusOn = "analogManual";
				$("atvSave").style.color = "#666";
				$("atvReplace").style.color = "#666";
				toUp();},3000);
		}
		else if(form_position_h == atvReplaceIndex)
		{
			channel.replaceAtvChannel();
			$("remind").innerText = storeRemind.replace(/XXXX/,channel.scanAtvManualFinishNum());
			$("remind").style.display = "block";
			
			anologScanCount = 0;
			focusOn = "remind";
			setTimeout(function(){
				$("remind").style.display = "none";
				focusOn = "analogManual";
				$("atvSave").style.color = "#666";
				$("atvReplace").style.color = "#666";
				toUp();},3000);
		}
		else if(form_position_h == atvSearchIndex)
		//else if(/*form_position_h == 0 || */form_position_h == 1)
		{		
			top.stopTimeout();
			anologScanCount = 0;
			tune = 0;
			showTuneUI(tune);
			channel.stopTv();
			var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
			f = (isAtvFreqChanged)?f:(f + 2000);
			channel.startScanAtvManual(f/*startFreq*/,0/*endFreq没有用到*/);
			isSearch = 1;
		}
	}
	else if(focusOn == "cableManual")
	{
		if(isSearch == 1)
		{
			manualStopScanning();
			return;
		}
		
		if(form_position_h == 3)
		{
			top.stopTimeout();
			channel.stopTv();
			var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
			var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
			channel.testLog("freq f = " + f + ",modulation = " + modulation + ",s = " + s);
			$("cManuSearch").innerText = searchStop[1];
			channel.startScanDtvManual( f/*frequency*/, modulation/*modulation*/, s/*symbol*/);
			isSearch = 1;
			$("cManuStatus").innerText = scanStatusWords[0];
		}
			
	}
}



/*
功能描述：搜台过程中的消息处理
参数：id:0（atv或dtv进度更新的消息），1代表atv搜台结束，2代表dtv搜台结束
全局变量：scanningInfo;focusOn;progress;digitalScanCount；
*/
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
			
			if(focusOn == "antennaManual")
			{
				if(progress > 0)
				{
					$("tManuResult1").innerText = chGenreWords[1] + digitalScanCount;
					$("tManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
					$("tManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
					$("tManuProgressValue").innerText = progress + "%";
				}
				if(progress == 100)
				{
					channel.stopScan();
				}
			}
			else if(focusOn == "analogManual")
			{
				if(form_position_h == 1)
				{
					showFreqWhenChanged(frequency,atvSearchContentSpanList,1);
				}
				else
				{
					showFreqWhenChanged(frequency,atvSearchContentSpanList,0);
				}
			}
			else if(focusOn == "cableManual")
			{
				if(progress > 0)
				{
					$("cManuResult1").innerText = chGenreWords[1] + digitalScanCount;
					$("cManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
					$("cManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
					$("cManuProgressValue").innerText = progress + "%";
				}
				if(progress == 100)
				{
					channel.stopScan();
				}
			}
			break;
		}
		case 1://atv finish,atv搜台停止不需要我们自己调用停止函数，底层自己调用
		{channel.testLog("in updateInfo = " + anologScanCount);
			if(isSearch == 1)//说明是正常搜台结束，而非手动停止搜台
			{
				isAtvFreqChanged = 0;
				//atv 手动搜台完成进度不一定到100%而直接发送停止消息，所这里需要重新取一遍数据
				scanningInfo = channel.getScanningInfo();
				channel.testLog("in updateInfo get scanningInfo = " + scanningInfo);
				cutScanningInfo(scanningInfo);//将scanningInfo切分并保存到响应的变量中
				realFreq = frequency;
				isSearch = 0;
				if(anologScanCount > 0)
				{
					if(atvChannelCount > 0)
					{
						$("atvReplace").style.color = "#fff";
					}
					else
					{
						$("atvReplace").style.color = "#666";
					}
					$("atvSave").style.color = "#fff";
				}
				else
				{
					$("atvSave").style.color = "#666";
					$("atvReplace").style.color = "#666";
				}
				
				//搜ATV等到退出菜单的时候才调用
				//channel.setServiceType(0);//atv
				//channel.inputSource = 0;//atv
				//channel.playCurrentTv();
				top.restartTimeout();
			}
			//window.location.href = "reset_location.html";
			break;
		}
		case 2://dtv scan finish
		{
			if(isSearch == 1)//说明是正常搜台结束，而非手动停止搜台
			{
				isSearch = 0;
				if(focusOn == "antennaManual")
				{
					$("tManuStatus").innerText = scanStatusWords[1];
					$("tManuSearch").innerText = searchStop[0];
					
				}
				else if(focusOn == "cableManual")
				{
					$("cManuStatus").innerText = scanStatusWords[1];
					$("cManuSearch").innerText = searchStop[0];
				}
				channel.setServiceType(1);//dtv
				channel.inputSource = 1;//dtv
				//channel.playCurrentTv();
				top.restartTimeout();
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
	//上传的freq是以kHz结尾的
	frequency = parseInt(data[3],10);
	progress = parseInt(data[4],10);
	channel.testLog("in cutScanningInfo progress = " + progress);
}

/*
功能描述：将framework中我们页面定义的scanMode转换成底层接口对应的scanMode
参数：mode(webkit ui scan mode)
全局变量：anologScanCount;digitalScanCount；progress
*/
function scanModeConvert(mode)
{
	var sm = 0;
	if(mode == 3)//full
	{
		sm = 0;
	}
	else if(mode == 2)//advance
	{
		sm = 1;
	}
	else if(mode == 4)//quick
	{
		sm = 2;
	}
	else if(mode == 1)//upc
	{
		sm = 3;
	}
	return sm;
}

/*
功能描述：cable manual scan初始化
参数：
全局变量：：digitalScanCount；progress
*/
var cManuFreqContentSpanList;
var cManuSybContentSpanList;
var strength 					= 0;				//0-100
var quality  					= 0;				//0-100
function initCableManual()
{
	digitalScanCount = 0;
	progress = 0;
	isSearch = 0;
	$("cManuTitle").innerText = chScanTitleWords[1][0];
	$("cManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
	$("cManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
	$("cManuProgressValue").innerText = progress + "%";
	$("cManuStatus").innerText = "";//scanStatusWords[2];
	$("cManuResult1").innerText = "";//chGenreWords[1] + digitalScanCount;
	
	$("cManuFreqTitle").innerText = top.chScanParaMHZ[0];//change yums:2014-12-19;//scanOptionWords[0];
	var currentChannel = channel.getCurrentChannelInfo();
	//top.Log(", currentChannel.freq = " + currentChannel.frequency);
	frequency = currentChannel.frequency;//KHz
	modulation = currentChannel.modulation;
	symbolRate = currentChannel.symbolRate;
	
	if(typeof(modulation) == "undefined"){top.Log("modulation undefined");	modulation = 5;}
	if(typeof(symbolRate) == "undefined"){top.Log("symbolRate undefined");	symbolRate = 6875;}
	//默认值 frequency = 474000;
	if(!(frequency > 0))
	{
		frequency = 474000;
		modulation = 5;
		symbolRate = 6875;
	}
	else
	{
		if(frequency < 45000)
		{
			frequency = 45000;
		}
		else if(frequency > 862000)
		{
			frequency = 862000;
		}
		if(modulation > 5)
		{
			modulation = 5;
		}
		else if(modulation < 0)
		{
			modulation = 0;
		}
	}
	
	cManuFreqContentSpanList = $("cManuFreqContent").getElementsByTagName("span");
	showFreqWhenChanged(frequency,cManuFreqContentSpanList,1);
	
	$("cManuMoTitle").innerText = scanOptionWords[1];
	$("cManuMoContent").innerText = modulationWords[modulation];
	
	$("cManuSybTitle").innerText = scanOptionWords[2]/* + "(Ksym/s)"*/;
	cManuSybContentSpanList = $("cManuSybContent").getElementsByTagName("span");
	showInitSymbol(symbolRate,cManuSybContentSpanList);
	
	$("cManuStrenTitle").innerText = scanOptionWords[6];
	$("cManuQuaTitle").innerText = scanOptionWords[7];
	setInterval(function(){
		strength = setting.channelCurrentSignalStrength;
		showInputProgress(strength,"cManuStren");
		
		quality = setting.channelCurrentSignalQuality;
		showInputProgress(quality,"cManuQua");},1000);
	
	
	$("cManuSearch").innerText = searchStop[0];
	
	form_position_h = 0;
	$("cManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
	$("cManuSearch").style.border = "none";
	
	showScanForm($("cManuForm"),5,$("cManuOptions"));
	focusOn = "cableManual";
}

/*
功能描述：antenna manual scan初始化
参数：
全局变量：digitalScanCount；progress
*/
var tManuOptionsLiList;
var tManuFreqContentSpanList;
var tManuChIdList;
var tManuChIdSum = 0;
var tManuChIdIndex = 0;
function initAntennaManual()
{	
	channel.testLog("in initAntennaManual");
	tManuOptionsLiList = $("tManuOptions").getElementsByTagName("li");
	digitalScanCount = 0;
	form_position_h = 0;
	progress = 0;
	isSearch = 0;
	$("tManuTitle").innerText = chScanTitleWords[1][1];	
	
	
	$("tManuInputTitle").innerText = top.chScanParaMHZ[0];//change yums:2014-12-19 scanOptionWords[0];
	tManuFreqContentSpanList = $("tManuFreqContent").getElementsByTagName("span");
	frequency = setting.channelCurrentSignalFreq;//KHz
	top.Log("after get frequency = " + frequency);
	if(frequency > 0)
	{
		if(frequency < 45000)
		{
			frequency = 45000;
		}
		else if(frequency > 862000)
		{
			frequency = 862000;
		}
	}
	else
	{
		frequency = 474000;
	}
	showFreqWhenChanged(frequency,tManuFreqContentSpanList,0);
	
	var tStr = channel.dtvAntennaManualChId();
	if(tStr == "")
	{
		tManuChIdSum = 0;
	}
	else
	{
		tManuChIdList = tStr.split("#");
		tManuChIdSum = tManuChIdList.length;
	}
	if(tManuChIdSum > 0)
	{
		$("tManuChIdTitle").innerText = scanOptionWords[9];
		//初始化
		refreshChIdIndex($("tManuChIdContent"),frequency);
		$("tManuChIdOption").style.display = "block";
		showScanForm($("tManuForm"),4,$("tManuOptions"));
	}
	else
	{
		//焦点落在频点上面
		tManuFreqContentSpanList[numPosition].style.color = "#f00";
		$("tManuChIdOption").style.display = "none";
        numPosition = 0;
		showScanForm($("tManuForm"),3,$("tManuOptions"));
	}
	
	
	$("tManuStrenTitle").innerText = scanOptionWords[6];
	$("tManuQuaTitle").innerText = scanOptionWords[7];
	setInterval(function(){
		strength = setting.channelCurrentSignalStrength;
		showInputProgress(strength,"tManuStren");
		
		quality = setting.channelCurrentSignalQuality;
		showInputProgress(quality,"tManuQua");},1000);
		
	$("tManuSearch").innerText = searchStop[0];
	
	
	$("tManuProgressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
	$("tManuProgressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
	$("tManuProgressValue").innerText = progress + "%";
	$("tManuStatus").innerText = "";//scanStatusWords[2];
	channel.testLog("in initAntennaManual scanStatusWords[2]=" +  scanStatusWords[2]);
	$("tManuResult1").innerText = "";//chGenreWords[1] + digitalScanCount;
	$("tManuResult2").innerText = "";
	
	
	$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
	$("tManuInputFocus").style.display = "block";
	$("tManuSearch").style.border = "none";
	focusOn = "antennaManual";
}

/*
在有channel id的时候检查输入的频点是否有对应的channel id和他匹配，如果不匹配则给出提示。如果匹配，重新设置id响应的index
参数：tag:要显示内容的标签，freq:输入的判断的频率
*/
function refreshChIdIndex(tag,freq)
{
	for(var i = 0; i < tManuChIdSum; i++)
	{
		if(freq == parseInt(tManuChIdList[i].split(":")[1]))
		{
			tManuChIdIndex = i;
			tag.innerText = tManuChIdList[i].split(":")[0];
			break;
		}
	}
	if(i == tManuChIdSum)
	{
		tManuChIdIndex = -1;
		tag.innerText = noRelatedChannel;
	}
}

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
功能描述： 搜台过程中的参数输入频点数字
参数：number:0-9;spanList:数字输入框的span list
全局变量：numPosition;freqWords;numStartPosition;
*/
function doFreNumber(number,spanList)
{
	spanList[numPosition].style.color = "#fff";
	if(numPosition == 5)//在最后一位上
	{
		/*-----此处假设上一次数据位XX或XX_，输入一个数字变成了XX_或是XXX_，但是numStartPosition并没有改变-------------*/
		/*-----现在要再次输入数字，就相当于要确认上次输入结果XX_或是XXX_中的“_”号已经变成了数字，numStartPosition要减1---*/
		/*-----至于为何上一次输入结果变成XX_或是XXX_后没有把numStartPosition减一是因为“_”还不是数字,虽然他在显示上占了一位*/
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
			showFreqWhenChanged(f,spanList,0);
			numPosition = 1;
		}
		else if(numPosition == (numStartPosition + 2) && number < 5)//刚刚输入的是第二个数字
		{
			f = f*10;
			showFreqWhenChanged(f,spanList,0);
			numPosition = 2;
		}
		else//这个情况在该种输入方法处理中是不会发生的，留给以后其他方式的输入拓展用
		{
			showFreqWhenChanged(45000,spanList,0);
		}
	}
	else if(f > 862000)
	{
		if(numPosition == (numStartPosition + 1) && number == 8)//刚刚输入的是第一个数字
		{
			showFreqWhenChanged(862000,spanList,0);
			numPosition = 1;
		}
		else if(numPosition == (numStartPosition + 2) && number == 6)//刚刚输入的是第一个数字
		{
			showFreqWhenChanged(862000,spanList,0);
			numPosition = 2;
		}
		else if(numPosition == (numStartPosition + 3) && number == 2)//刚刚输入的是第一个数字
		{
			showFreqWhenChanged(862000,spanList,0);
			numPosition = 3;
		}
		else//其他非临界输入的处理
		{
			showFreqWhenChanged(862000,spanList,0);
		}
	}
	spanList[numPosition].style.color = "#f00";
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
		/*-----此处假设上一次数据位XX或XX_，输入一个数字变成了XX_或是XXX_，但是numStartPosition2并没有改变-------------*/
		/*-----现在要再次输入数字，就相当于要确认上次输入结果XX_或是XXX_中的“_”号已经变成了数字，numStartPosition2要减1---*/
		/*-----至于为何上一次输入结果变成XX_或是XXX_后没有把numStartPosition2减一是因为“_”还不是数字,虽然他在显示上占了一位*/
		if(spanList[3].innerText == "_")
		{
			var t = 0;
			for(var i = 0; i < 3; i++)
			{
				sybWords[i] = sybWords[i + 1];
			}
			sybWords[numPosition] = parseInt(number,10);
			numStartPosition2 = numStartPosition2 - 1;
		}
		
		if(numStartPosition2 > 0)//输入的数字位数不满6位，有空余 
		{
			if(number == 0 && numStartPosition2 == 3)//当前只有一位
			{
				//do nothing
				return;
			}
			else
			{
				sybWords[numPosition] = parseInt(number,10);
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
			sybWords[numPosition] = parseInt(number,10);
			spanList[numPosition].innerText = number;
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
		sybWords[numPosition] = parseInt(number,10);			
		spanList[numPosition].innerText = number;
		spanList[numPosition].style.color = "#fff";
		numPosition++;
		spanList[numPosition].style.color = "#f00";
	}
	
	//如果输入的数值越界，自动填入边界值
	var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
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
功能描述： 搜台过程中频点更新要显示在页面的时候的处理
参数：freq:频点；spanList:数字输入框的span list;isFocus焦点是否在输入的频点上面
全局变量：numPosition;freqWords;numStartPosition;
*/
function showFreqWhenChanged(freq,spanList,isFocus)
{
	separateFreq(freq);
	channel.testLog("in showFreqWhenChanged freq = " + freq);
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
		}
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
	
	if(isFocus == 1)
	{
		spanList[numStartPosition].style.color = "#f00";
	}
}

/*
功能描述： symbol更改刷新显示的处理
参数：syb:symbol rate；spanList:数字输入框的span list
全局变量：numPosition;sybWords;numStartPosition2;
*/
function showInitSymbol(syb,spanList)
{
	separateSyb(syb);
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
		}
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
功能描述： 初始化atv手动搜台
参数：
全局变量：
*/
var isAtvFreqChanged	= 0;//0 no change,1 changed
var atvSearchContentSpanList;
var atvChannelCount  = 0;//0 无节目,无频道列表，> 0 有节目

//auto display atv searching list
var skipAtvTitle 	= false;
var skipAtvSearch 	= false;
var skipAtvFT		= false;
var atvTitleIndex	= -1;
var atvSearchIndex	= -1;
var atvFTIndex		= -1;
var atvSaveIndex	= -1;
var atvReplaceIndex	= -1;
var atvListHArray	= ["80px", "130px", "180px"];

function testLog(str)
{
	console.log("    ===> Areos: " + str);
}

function areaCheck()//add for auto displaying atv manual scan list
{
	var areaID = setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU");
	skipAtvTitle = areaID == "AU" ? true : false;
	skipAtvFT = false;
	skipAtvSearch = false;
	atvTitleIndex = areaID == "AU" ? 0 : -1;
	atvSearchIndex = atvTitleIndex + 1;//0 or 1
	atvFTIndex = atvSearchIndex + 1;//1 or 2
	atvSaveIndex = atvFTIndex + 1;//2 or 3
	atvReplaceIndex = atvSaveIndex + 1;//3 or 4
	if(atvTitleIndex >= 0)
	{
		$("atvTitle").style.display = 'block';
		$("atvTitle").style.top = atvListHArray[atvTitleIndex];
	}
	else
	{
		$("atvTitle").style.display = 'none';
	}
	if(atvSearchIndex >= 0)
	{
		$("atvSearch").style.display = 'block';
		$("atvSearch").style.top = atvListHArray[atvSearchIndex];
	}
	else
	{
		$("atvSearch").style.display = 'none';
	}
	if(atvFTIndex >= 0)
	{
		$("fineTune").style.display = 'block';
		$("fineTune").style.top = atvListHArray[atvFTIndex];
	}
	else
	{
		$("fineTune").style.display = 'none';
	}
}

function initAtvManual()
{
	areaCheck();
	
	isAtvFreqChanged = 0;
	$("atvManualTitle").innerText = chScanTitleWords[0];
	$("atvSysTitle").innerText =  scanOptionWords[4];
	$("avtSearchTitle").innerText = top.chScanParaMHZ[0];//change yums:2014-12-19 scanOptionWords[0];
	$("atvTuneTitle").innerText =  scanOptionWords[5];
	systemEnum = 2;
	$("atvSysContent").innerText = atvManualSysWords[systemEnum];
	tune = 0;
	showTuneUI(tune);
	$("atvSave").innerText = storeAndReplace[0];
	$("atvReplace").innerText = storeAndReplace[1];
	
	atvChannelCount = channel.getChListCountByServiceType(0);//atv
	top.Log("in initAtvManual atvChannelCount = " + atvChannelCount);
	
	if(atvChannelCount > 0)
	{
		frequency = setting.channelCurrentSignalFreq;//KHz
		realFreq = frequency;
	}
	else
	{
		frequency = 45000;
	}
	
	anologScanCount = 0;
	$("atvSave").style.color = "#666";
	$("atvReplace").style.color = "#666";
		
	atvSearchContentSpanList = $("atvSearchContent").getElementsByTagName("span");
	showFreqWhenChanged(frequency,atvSearchContentSpanList,0);
	atvSearchContentSpanList[numStartPosition].style.color = "#fff";
	
	form_position_h = 0;
	$("atvManualInputFocus").style.top = 80 + form_position_h*50 + "px";
	var height = 320;
	$("atvManualForm").style.height = height + "px";
	$("atvManualForm").style.display = "block";
	focusOn = "analogManual";
	top.showDialogPosition($("atvManualForm"),800,height,1920,1080,0,0);
}

/*
功能描述：通过tune值画出tune进度条
参数：tuneValue:-30到30
全局变量：INPUT_PROGRESS_WIDTH;
*/
function showTuneUI(tuneValue)
{
	var tuneProgress = (tuneValue + 30)/60;
	$("atvTuneLeft").style.width = parseInt(tuneProgress*INPUT_PROGRESS_WIDTH,10) + "px";
	$("atvTuneRight").style.width = parseInt((1 - tuneProgress)*INPUT_PROGRESS_WIDTH,10) + "px";
	$("atvTuneValue").innerText = tuneValue;
}

/*
参数：direction:1 right,-1 left
*/
var continuousKeyTimer = 0;
function setTune(tuneValue,direction)
{
	channel.testLog("in setTune frequency = " + frequency + " tuneValue = " + tuneValue + " atvChannelCount = " + atvChannelCount + " anologScanCount = " + anologScanCount);
	if(atvChannelCount > 0 || anologScanCount > 0)
	{
		if(direction == 1)//right
		{
			if(parseInt(tuneValue%2,10) == 0)
			{
				frequency += 280;
			}
			else
			{
				frequency += 240;
			}
		}
		else if(direction == -1)//left
		{
			if(parseInt(tuneValue%2,10) == 0)
			{
				frequency -= 240;
			}
			else
			{
				frequency -= 280;
			}
		}
		channel.testLog("in setTune frequency = " + frequency);
		showFreqWhenChanged(frequency,atvSearchContentSpanList,0);
		
		if(continuousKeyTimer)
		{
			clearTimeout(continuousKeyTimer);
		}
		continuousKeyTimer = setTimeout(function(){channel.setFineTune(channel.currentIndex,frequency);},400);
	}
}

/*
描述：设置fine tune
参数：downOrUp:left key 0,right key 1
*/
function setFineTuneUI(downOrUp)
{
	var channelNum = -1;
	if(atvChannelCount > 0 || anologScanCount > 0)
	{
		channelNum = channel.getCurrentChannelInfo().number;
	}
	channel.setFineTune(channelNum,downOrUp);
	frequency = setting.channelCurrentSignalFreq;//KHz
	showFreqWhenChanged(frequency,atvSearchContentSpanList,0);
}

/*
功能描述：对话框的输入框中的进度条通过progress值画出进度
参数：pro：0-100,preWords:用来确定是哪一个进度条的id前缀文字
全局变量：INPUT_PROGRESS_WIDTH;
*/
function showInputProgress(pro,preWords)
{
	$(preWords + "Left").style.width = parseInt(INPUT_PROGRESS_WIDTH*pro/100,10) + "px";
	$(preWords + "Right").style.width = parseInt(INPUT_PROGRESS_WIDTH*(100 - pro)/100,10) + "px";
	$(preWords + "Value").innerText = pro + "%";
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

/*
描述：根据当前scan可选择的项的数量自动搜台框的大小和位置
参数：optionSum：搜台属性数量,formTag:搜台对话框标签,optionForm：搜台中属性选项总标签
*/
var WINDOW_HEIGHT 			= 1080;
var SCAN_FORM_HEIGHT_START	= 340;//280;				//240:搜台进度条及其相关信息的高度，80：搜台框标题以及hr的高度
var SCAN_FORM_AND_FOCUS_STEP= 60;				//当搜台框中每增加一个参数控制项需要增加的高度
function showScanForm(formTag,optionSum,optionForm)
{
	channel.testLog("in showScanForm");
	var height = 0;
	if(optionSum > 0)
	{
		height = SCAN_FORM_HEIGHT_START + optionSum*SCAN_FORM_AND_FOCUS_STEP;
		optionForm.style.display = "block";
	}
	else
	{
		height = SCAN_FORM_HEIGHT_START - 40;
		optionForm.style.display = "none";
	}
	formTag.style.height = height + "px";
	//formTag.style.top = parseInt((WINDOW_HEIGHT - height)/2,10) + "px";
	formTag.style.display = "block";
	top.showDialogPosition(formTag,800,height,1920,1080,0,0);
}



var thdMenuRightLiList;
var listFormLiList;
var thdMenuRightSpanList;
var atvManualFormDialogInputList;
var atvManualFormDialogButtonList;
var cManuFormLiList;
var scanFlag = 0;//0 analogue manual search,1 cable manual search,2 antenna manual search
function init()
{
    channel.testLog("***** manualSearch init **** ");
    top.uiPauseDownloadingUpFile();

	timeoutInit();
	atvManualFormDialogInputList = $("atvManualForm").getElementsByClassName("dialogInput");
	atvManualFormDialogButtonList = $("atvManualForm").getElementsByClassName("dialogButton");
	cManuFormLiList = $("cManuForm").getElementsByTagName("li");
	var str = window.location.search;
	scanFlag = parseInt(str.substring(str.indexOf("?") + 1),10);
	if(scanFlag >= 0)
	{
		if(scanFlag == 0)
		{
			initAtvManual();
		}
		else if(scanFlag == 1)
		{
			initCableManual();
		}
		else
		{
			initAntennaManual();
		}
	}
	else
	{
		toNormalBack();
	}
	addMouseListener();
}

function uninit()
{
    channel.testLog("***** manualSearch uninit **** ");
    top.uiResumeDownloadingUpFile();

	if(focusOn == "analogManual")
	{
		if(isSearch == 1)
		{
			return;
		}
		
		if(anologScanCount > 0)//有搜到台才处理
		{
			channel.cancelAtvChannel();
		}
		
		if(atvChannelCount > 0)
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
}

var PROGRESS_START_LEFT_OFFSET = 0 + 50 + 560 + 200;//进度条容器开始位置相对于framework的左偏移
var realFreq = 0;//atv搜完台后或刚开始的时候的频点值
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
	
	//antenna manual
	tManuOptionsLiList[1].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)
		{//left key
			if(isSearch != 1)
			{
				if(tManuChIdSum > 0)
				{
					if(form_position_h == 2)//search
					{
						//取消先前焦点
						$("tManuSearch").style.border = "none";
						
						form_position_h = 1;
						$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
						numPosition = numStartPosition;
						tManuFreqContentSpanList[numPosition].style.color = "#f00";
						$("tManuInputFocus").style.display = "block";
					}
					else if(form_position_h == 0)
					{
						form_position_h = 1;
						$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
						numPosition = numStartPosition;
						tManuFreqContentSpanList[numPosition].style.color = "#f00";
					}
				}
				else
				{
					if(form_position_h == 1)//search
					{
						//取消先前焦点
						$("tManuSearch").style.border = "none";
						
						form_position_h = 0;
						numPosition = numStartPosition;
						tManuFreqContentSpanList[numPosition].style.color = "#f00";
						$("tManuInputFocus").style.display = "block";
					}
				}
				doEnter();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	tManuOptionsLiList[0].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)
		{//left key
			if(isSearch != 1)
			{
				if(tManuChIdSum > 0)
				{
					if(form_position_h == 2)//search
					{
						//取消先前焦点
						$("tManuSearch").style.border = "none";
				
						form_position_h = 0;
						$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
						$("tManuInputFocus").style.display = "block";
					}
					else if(form_position_h == 1)
					{
						form_position_h = 0;
						$("tManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					}
					doEnter();
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	$("tManuSearch").onmousedown = function(evt){
		//top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)
		{//left key
			if(isSearch != 1)
			{
				if(tManuChIdSum > 0)
				{
					if(form_position_h == 0)
					{
						$("tManuInputFocus").style.display = "none";
						
						//显示新焦点
						form_position_h = 2;
						$("tManuSearch").style.border = "medium solid #00aadd";
					}
					else if(form_position_h == 1)
					{
						//取消先前焦点
						correctStartPositionOfSpanList(numStartPosition,tManuFreqContentSpanList,freqWords);
						tManuFreqContentSpanList[numPosition].style.color = "#fff";
						$("tManuInputFocus").style.display = "none";
						var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
						//如果输入的数值越界，自动填入边界值
						if(f < 45000)
						{
							showFreqWhenChanged(45000,tManuFreqContentSpanList,0);
						}else if(f > 862000)
						{
							showFreqWhenChanged(862000,tManuFreqContentSpanList,0);
						}
						
						//显示新焦点
						form_position_h = 2;
						$("tManuSearch").style.border = "medium solid #00aadd";
					}
				}
				else
				{
					if(form_position_h == 0)
					{
						//取消先前焦点
						correctStartPositionOfSpanList(numStartPosition,tManuFreqContentSpanList,freqWords);
						tManuFreqContentSpanList[numPosition].style.color = "#fff";
						$("tManuInputFocus").style.display = "none";
						var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
						//如果输入的数值越界，自动填入边界值
						if(f < 45000)
						{
							showFreqWhenChanged(45000,tManuFreqContentSpanList,0);
						}else if(f > 862000)
						{
							showFreqWhenChanged(862000,tManuFreqContentSpanList,0);
						}
						
						//显示新焦点
						form_position_h = 1;
						$("tManuSearch").style.border = "medium solid #00aadd";
					}
				}
			}
			doEnter();
		}
		//top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//atv manual
	for(var i = 0; i < 2; i++)
	{
		atvManualFormDialogInputList[i].setAttribute("newAttr",i);
		atvManualFormDialogInputList[i].onmousedown = function(evt){
			//top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)
			{//left key
				if(isSearch != 1)
				{
					//取消先前焦点
					if(form_position_h == 1)
					{
						correctStartPositionOfSpanList(numStartPosition,atvSearchContentSpanList,freqWords);
						atvSearchContentSpanList[numPosition].style.color = "#fff";
						var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
						//如果输入的数值越界，自动填入边界值
						if(f < 45000)
						{
							showFreqWhenChanged(45000,atvSearchContentSpanList,0);
						}else if(f > 862000)
						{
							showFreqWhenChanged(862000,atvSearchContentSpanList,0);
						}	
					}
					$("atvManualInputFocus").style.display = "none";
					$("atvManualButtonFocus").style.display = "none";
					
					//显示新焦点
					if(parseInt(this.getAttribute("newAttr")) == 1)//freq input
					{
						numPosition = numStartPosition;
						atvSearchContentSpanList[numPosition].style.color = "#f00";
					}
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("atvManualInputFocus").style.display = "block";
					$("atvManualInputFocus").style.top = 80 + form_position_h*50 + "px";
					doEnter();
				}
			}
			//top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	for(var i = 0; i < 2; i++)
	{
		atvManualFormDialogButtonList[i].setAttribute("newAttr",i);
		atvManualFormDialogButtonList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)
			{//left key
				if(isSearch != 1)
				{
					if(anologScanCount > 0)
					{
						if(parseInt(this.getAttribute("newAttr")) == 1 /*replace*/ && atvChannelCount <= 0)
						{
							return;
						}
						
						//取消先前焦点
						if(form_position_h == 1)
						{
							correctStartPositionOfSpanList(numStartPosition,atvSearchContentSpanList,freqWords);
							atvSearchContentSpanList[numPosition].style.color = "#fff";
							var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
							//如果输入的数值越界，自动填入边界值
							if(f < 45000)
							{
								showFreqWhenChanged(45000,atvSearchContentSpanList,0);
							}else if(f > 862000)
							{
								showFreqWhenChanged(862000,atvSearchContentSpanList,0);
							}	
						}
						$("atvManualInputFocus").style.display = "none";
						$("atvManualButtonFocus").style.display = "none";
						
						//显示新焦点
						form_position_h = parseInt(this.getAttribute("newAttr")) + 3;
						$("atvManualButtonFocus").style.left = DLOG_BUTTON_START + (form_position_h - atvSaveIndex)*DLOG_BUTTON_STEP + "px";
						doEnter();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("fineTune").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)
		{//left key
			if(isSearch != 1)
			{
				if(anologScanCount <= 0 && atvChannelCount <= 0)
				{
					return;
				}
				else
				{
					//取消先前焦点
					if(form_position_h == 1)
					{
						correctStartPositionOfSpanList(numStartPosition,atvSearchContentSpanList,freqWords);
						atvSearchContentSpanList[numPosition].style.color = "#fff";
						var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
						//如果输入的数值越界，自动填入边界值
						if(f < 45000)
						{
							showFreqWhenChanged(45000,atvSearchContentSpanList,0);
						}else if(f > 862000)
						{
							showFreqWhenChanged(862000,atvSearchContentSpanList,0);
						}	
					}
					$("atvManualInputFocus").style.display = "none";
					$("atvManualButtonFocus").style.display = "none";
					
					//显示新焦点
					form_position_h = 2;
					$("atvManualInputFocus").style.top = 80 + form_position_h*50 + "px";
					$("atvManualInputFocus").style.display = "block";
					
					var downX = evt.clientX;
					if(downX < PROGRESS_START_LEFT_OFFSET)
					{
						downX = PROGRESS_START_LEFT_OFFSET;
					}
					else if(downX > (PROGRESS_START_LEFT_OFFSET + INPUT_PROGRESS_WIDTH))
					{
						downX = (PROGRESS_START_LEFT_OFFSET + INPUT_PROGRESS_WIDTH);
					}
					
					tuneValue = parseInt((downX - PROGRESS_START_LEFT_OFFSET)/INPUT_PROGRESS_WIDTH*60 - 30,10);
					prog = (tuneValue + 30)/60;
					top.Log("in setTune prog = " + prog);
					top.Log("in setTune tuneValue = " + tuneValue);
					$("atvTuneLeft").style.width = parseInt(prog*INPUT_PROGRESS_WIDTH,10) + "px";
					$("atvTuneRight").style.width = parseInt((1 - prog)*INPUT_PROGRESS_WIDTH,10) + "px";
					$("atvTuneValue").innerText = tuneValue;
					if(tuneValue < 0)
					{
						var t = parseInt(Math.abs(tuneValue)/2,10);
						if(parseInt(tuneValue%2,10) == 0)
						{
							frequency = realFreq - (280 + 240)*t;
						}
						else
						{
							frequency = realFreq - ((280 + 240)*t + 240);
						}
					}
					else
					{
						var t = parseInt(tuneValue/2,10);
						if(parseInt(tuneValue%2,10) == 0)
						{
							frequency = realFreq + (280 + 240)*t;
						}
						else
						{
							frequency = realFreq + ((280 + 240)*t + 280);
						}
					}
					top.Log("in setTune frequency = " + frequency);
					showFreqWhenChanged(frequency,atvSearchContentSpanList,0);
					
					if(continuousKeyTimer)
					{
						clearTimeout(continuousKeyTimer);
					}
					continuousKeyTimer = setTimeout(function(){channel.setFineTune(channel.currentIndex,frequency);},400);
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	
	//cable maunal
	for(var i = 0; i < 3; i++)
	{
		cManuFormLiList[i].setAttribute("newAttr",i);
		cManuFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)
			{//left key
				if(isSearch != 1 && parseInt(this.getAttribute("newAttr")) < 3)
				{
					//取消先前焦点
					if(form_position_h <= 0)
					{
						correctStartPositionOfSpanList(numStartPosition,cManuFreqContentSpanList,freqWords);
						cManuFreqContentSpanList[numPosition].style.color = "#fff";
						$("cManuInputFocus").style.display = "none";
						
						var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
						//如果输入的数值越界，自动填入边界值
						if(f < 45000)
						{
							showFreqWhenChanged(45000,cManuFreqContentSpanList,0);
						}else if(f > 862000)
						{
							showFreqWhenChanged(862000,cManuFreqContentSpanList,0);
						}	
					}
					else if(form_position_h == 2)
					{
						correctStartPositionOfSpanList(numStartPosition2,cManuSybContentSpanList,sybWords);
						cManuSybContentSpanList[numPosition].style.color = "#fff";
						
						var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
						//如果输入的数值越界，自动填入边界值
						if(s < 4000)
						{
							showInitSymbol(4000,cManuSybContentSpanList);
						}
						else if (s > 7200)
						{
							showInitSymbol(7200,cManuSybContentSpanList);
						}
					}
					$("cManuSearch").style.border = "none";
					$("cManuInputFocus").style.display = "none";
					
					//设置新焦点
					if(parseInt(this.getAttribute("newAttr")) == 0)//freq input
					{
						numPosition = numStartPosition;
						cManuFreqContentSpanList[numPosition].style.color = "#f00";
					}
					else if(parseInt(this.getAttribute("newAttr")) == 2)//symbol input
					{
						numPosition = numStartPosition2;
						cManuSybContentSpanList[numPosition].style.color = "#f00";
					}
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("cManuInputFocus").style.top = SCAN_FOCUS_START + form_position_h*SCAN_FORM_AND_FOCUS_STEP + "px";
					$("cManuInputFocus").style.display = "block";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
				
	}
	$("cManuSearch").onmousedown = function(evt){
		//top.timeoutFuc.osdTimeoutEndFuc();
		//top.Log("in cManuSearch isSearch = " + isSearch + ",form_position_h = " + form_position_h);
		if(evt.button == 0)
		{//left key
			if(isSearch != 1)
			{
				//取消先前焦点
				if(form_position_h <= 0)
				{
					correctStartPositionOfSpanList(numStartPosition,cManuFreqContentSpanList,freqWords);
					cManuFreqContentSpanList[numPosition].style.color = "#fff";
					$("cManuInputFocus").style.display = "none";
					
					var f = freqWords[5] + freqWords[4]*10 + freqWords[3]*100 + freqWords[2]*1000 + freqWords[1]*10000 + freqWords[0]*100000;
					//如果输入的数值越界，自动填入边界值
					if(f < 45000)
					{
						showFreqWhenChanged(45000,cManuFreqContentSpanList,0);
					}else if(f > 862000)
					{
						showFreqWhenChanged(862000,cManuFreqContentSpanList,0);
					}	
				}
				else if(form_position_h == 2)
				{
					correctStartPositionOfSpanList(numStartPosition2,cManuSybContentSpanList,sybWords);
					cManuSybContentSpanList[numPosition].style.color = "#fff";
					
					var s = sybWords[3] + sybWords[2]*10 + sybWords[1]*100 + sybWords[0]*1000;
					//如果输入的数值越界，自动填入边界值
					if(s < 4000)
					{
						showInitSymbol(4000,cManuSybContentSpanList);
					}
					else if (s > 7200)
					{
						showInitSymbol(7200,cManuSybContentSpanList);
					}
				}
				$("cManuSearch").style.border = "none";
				$("cManuInputFocus").style.display = "none";
					
				//显示新焦点
				form_position_h = 3;
				$("cManuSearch").style.border = "medium solid #00aadd";
			}
			doEnter();
		}
		//top.timeoutFuc.osdTimeoutStartFuc();
	}
	
}
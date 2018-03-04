

window.onload = init;
window.onunload = unInit;

document.onkeydown = keyDownProcess;
document.onnotify = notifyProcess;

var bluetooth  = top.bluetooth;
var setting    = top.g_setting;

var VK_LEFT = 37;
var VK_UP   = 38;
var VK_RIGHT = 39;
var VK_DOWN = 40;
var VK_OK   = 13;

var HEADSET_TYPE = 0;//蓝牙耳机类型
var SPEAKER_TYPE = 1;//蓝牙音箱类型
var OTHER_TYPE   = 3;//其他类型

var SETTING_AREA = 0; //blue setting area
var DEVICE_LIST_AREA = 1;
var TIPS_AREA = 2;    //blue tips area
var PAIRED_AREA = 3;  //blue pair area
var TIPS_FAILED_AREA = 4;
var TIPS_DISCONNECT_AREA = 5;
var TIPS_PAIR_AREA = 6;
var TIPS_PAIR_REMOVE_AREA = 7;

var settingFocusV = 0;
var settingFocusH = 0;
var tipsFocusV = 0;
var tipsFocusH = 0;
var blueToothDeviceLength = 0;
var startDeviceNum = 0;
var MAX_DEVICE_NUM = 5;
var autoConnectSuccessPosition = 0;
var currentDeviceStatus = 0;
var deviceConnectMode  = -1; //设备连接模式。0:在连接前没有其他设备连接。  1:连接前有其他设备连接，必须先断开已连接的设备，才能连接当前设备  //-1其他情况
var connectDevicePosition = top.bt_connectDevicePosition;//-1无设备连接;  //记录这个已连接设备在列表中的位置
var soundOutPutValue = 0;//top.bt_soundOutPutValue;//0：TV Speaker,1:BT Device，2：BT And TV  default:1
var bluetoothSwitchState = "";//蓝牙的开关状态
var tipsType = 0;

var clickIndexAttri = "indexAttri";

var focusTab;
var preFocusTab;
var blueListEmpty = true;
var isBlueOpen = false;
var isDiscovering = true;
var isAutoConnect = true;  //true为自动连接 false为手动连接
var isAnyDeviceConnect = false;
var soundOutputShowFlag = top.bt_soundOutputShowFlag;


/**专门用来接收api函数的返回值**/
var isSupportFlag = 0;  //judge device support bluetooth
var enableBlueToothFlag = 0;
var disableBlueToothFlag = 0;
var cancelDiscoverFlag = 0;
var connectFlag = 0;
var speakerStatus = 0;
var btDeviceStatus = 0;


var settingFocusImg;  //蓝牙功能设置页面的focus,不包括提示界面
var blueToothDeviceList; //蓝牙列表对象
var deviceListContentLi; //html文件中显示蓝牙设备信息的li标签
var currentBluetoothDevice;//表示当前设备，包括断开，连接的当前设备等。

var switchButtonArray = [top.offOn[0],top.offOn[1]];//["Off","On"];
var settingTipsArray = [top.bt_settingTips_On,top.bt_settingTips_Finding,top.bt_settingTips_NoDevice];//["Turn on bluetooth function and scan devices. ","Finding available devices.","No available devices."];
var deviceListTipsArray = ["",top.bt_deviceList_State_Connecting,top.bt_deviceList_State_Connected,top.bt_deviceList_State_NoConnect];//["","Connecting...","Connected","Not connected"];
var deviceConncectFailedTips = [top.bt_deviceList_Conncect_Failed_Tips2,top.bt_deviceList_Conncect_Failed_Tips1];//["Please comfirm","bluetooth function is On","Connect failed."];
var deviceDisconnectTips = [top.bt_deviceList_Disconnect,""];//["Are you sure you want to disconnect with",""]
var soundOutPutName = top.bt_soundOutPutName;//"Sound output";
var soundOutPutArray  = [top.bt_soundOutPutTV,top.bt_soundOutPutBT,top.bt_soundOutPutBT_TV,top.offOn[0]]//["TV Speaker","BT Device","BT And TV"];
var deviceListID = [-1,-1,-1,-1,-1];   //
var settingTitle = top.bt_title; //Bluetooth;
var switchBarName = settingTitle;
var refreshBarName = top.bt_refreshBarName;//"Devices";
var refreshBarValue = top.others[15];
var yesButton = top.okCancel[0];
var noButton = top.okCancel[1];
var okButton = top.okCancel[0];;
var tipsTitle = top.bt_tipsTitle;//"Tip"
var outputPinTip = top.bt_bluetooth_Output_Pin_Tip;//"Input PIN XXXX by keyboard.";
var pinWrongTip = top.bt_bluetooth_Pin_Wrong_Tip;//"Wrong PIN";
var removePairTitle = top.bt_bluetooth_Remove_Pair_Title;//"Query";
var removePairAsk = top.bt_bluetooth_Remove_Pair_Ask;

var MUTE = 1;
var UNMUTE = 0;
var SCROLL_MAX_HEIGHT = 0;//它是可变的，随着soundOutPut是否显示而变

var UNKOWN_DEVICE_TYPE = 0;//其他
var AUDIO_DEVICE_TYPE = 1;//音箱
var EARPHONE_DEVICE_TYPE = 2;//耳机

var HID_UNKOWN_DEVICE_TYPE = 100;
var KEYBOARD_DEVICE_TYPE = 101;//键盘
var MOUSE_DEVICE_TYPE = 102;//鼠标

var bt_ON = "ON";
var bt_OFF = "OFF";
var OUT_PUT_NAME_FOR_DB = top.OUT_PUT_NAME_FOR_DB; //"bluetoothSoundOutPutValue";//存入数据库中的字段名
var BT_SWITCH_STATE_FOR_DB = top.BT_SWITCH_STATE_FOR_DB;// "bluetoothSwitchState";//存入数据库中蓝牙开关状态

var deviceNameSpan = ""; //蓝牙设备的名称

function $(id)
{
	return document.getElementById(id);
}

function getOutPutValue()
{
	var outPutValue = 0;
	if(btDeviceStatus == 0 && speakerStatus == 0)
	{
		outPutValue = 3;
	}
	else if(btDeviceStatus == 0 && speakerStatus == 1)
	{
		outPutValue = 0;
	}
	else if(btDeviceStatus == 1 && speakerStatus == 0)
	{
		outPutValue = 1;
	}
	else if(btDeviceStatus == 1 && speakerStatus == 1)
	{
		outPutValue = 2;
	}
	return outPutValue;
}
function setOutPutByValue(value)
{
	switch(value)
	{
		case 0:
			speakerStatus = 1;
			btDeviceStatus = 0;
			setting.speakerStatus = speakerStatus;
			setting.setProperty(OUT_PUT_NAME_FOR_DB,"0");
			setBluetoothMute(MUTE);
			top.bt_soundOutPutValue = 0;
			break;
		case 1:
			speakerStatus = 0;
			btDeviceStatus = 1;
			setting.speakerStatus = speakerStatus;
			setting.setProperty(OUT_PUT_NAME_FOR_DB,"1");
			if(top.mute_status == 0)
			{
				setBluetoothMute(UNMUTE);
			}
			top.bt_soundOutPutValue = 1;
			break;
		case 2:
			speakerStatus = 1;
			btDeviceStatus = 1;
			setting.speakerStatus = speakerStatus;
			setting.setProperty(OUT_PUT_NAME_FOR_DB,"1");
			if(top.mute_status == 0)
			{
				setBluetoothMute(UNMUTE);
			}
			top.bt_soundOutPutValue = 1;
			break;
		case 3:
			speakerStatus = 0;
			btDeviceStatus = 0;
			setting.speakerStatus = speakerStatus;
			setting.setProperty(OUT_PUT_NAME_FOR_DB,"0");
			setBluetoothMute(MUTE);
			top.bt_soundOutPutValue = 0;
			break;
		default:
			break;
	}
}
function init()
{
	timeoutInit();
	focusTab = SETTING_AREA;
	settingFocusH = 0;
	settingFocusImg = $("settingFocus");
	deviceListContentLi = $("deviceList").getElementsByTagName("li");
	
	addMouseListener();
	speakerStatus = setting.speakerStatus;
	btDeviceStatus = parseInt(setting.getProperty(OUT_PUT_NAME_FOR_DB,"0"));
	soundOutPutValue = getOutPutValue();
	$("soundOutPutValue").innerHTML = soundOutPutArray[soundOutPutValue];//初始化soundoutput的值
	if(soundOutputShowFlag)
	{
		$("soundOutPut").style.display = "block";
		MAX_DEVICE_NUM = 4;
	}
	else
	{
		$("soundOutPut").style.display = "none";
		MAX_DEVICE_NUM = 5;
	}
	
	$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "paused";
	isSupportFlag = isSupport();
	testLog("YM isSupportFlag:" + isSupportFlag)
	if(isSupportFlag == 1)
	{
		
		bluetoothSwitchState = setting.getProperty(BT_SWITCH_STATE_FOR_DB,bt_ON);
		
		//bluetoothStatusFlag = getStatus();//getStatus无法获取重新开关机后蓝牙的开关状态
		//testLog("getStatus:" + getStatus());
		testLog("bluetoothSwitchState:" + bluetoothSwitchState);
		//enableBlueToothFlag = bluetoothStatusFlag;
		if(bluetoothSwitchState == bt_OFF)
		{
			settingFocusV = 0;
			isBlueOpen = false;
			$("switchButton").innerHTML = switchButtonArray[0];
			$("refreshBar").getElementsByTagName("img")[0].style.display = "none";
			showDeviceList(0,0);
			/*//如果蓝牙是关闭状态，则把焦点定位在开关上，让用户自己开启
			enableBlueToothFlag = enableBlueTooth();
			if(enableBlueToothFlag == 1)  //enable success
			{
				testLog("YM enable bluetooth success!");
				isBlueOpen = true;
				setting.setProperty(BT_SWITCH_STATE_FOR_DB,bt_ON);//将蓝牙开关状态保存在数据库中
				$("switchButton").innerHTML = switchButtonArray[1];
				startDiscover();
			
				isDiscovering = true;
				
				showDeviceList(0,1);//
				$("refreshBar").getElementsByTagName("img")[0].style.display = "block";
				$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "running";
			}

			else
			{
				testLog("YM enable bluetooth fail!");
			}	
			*/
		}
		else
		{
			if(getStatus() == 0)
				enableBlueToothFlag = enableBlueTooth();
			testLog("init enableBlueToothFlag:" + enableBlueToothFlag);
			setting.setProperty(BT_SWITCH_STATE_FOR_DB,bt_ON);//将蓝牙开关状态保存在数据库中
			isBlueOpen = true;
			$("switchButton").innerHTML = switchButtonArray[1]; 
			startDiscover();
			isDiscovering = true;
			showDeviceList(0,1);//
			$("refreshBar").getElementsByTagName("img")[0].style.display = "block";
			$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "running";
		}
		refreshFocus(focusTab,settingFocusV,settingFocusH);
	}
	else
	{
		testLog("YM device cant support bluetooth!");
	}
	
	initText();
	
}

function unInit()
{
	//top.$("main").style.display="block";
	//return 0;
}

function timeoutInit()
{
	//document.onkeydown = top.timeoutMyFuc;
	//top.timeoutFuc.osdTimeoutStartFuc();
    //top.timeoutFuc.keydownFuc = keyDownProcess;
	top.timeoutFuc.osdTimeoutEndFuc();
}


function initText()
{
	$("settingTitle").getElementsByTagName("span")[0].innerHTML = settingTitle;
	$("switchBar").getElementsByTagName("span")[0].innerHTML = switchBarName;
	//$("switchButton").innerHTML = switchButtonArray[1];//Off or On;
	
	$("soundOutPut").getElementsByTagName("span")[0].innerHTML = soundOutPutName;
	
	$("refreshBar").getElementsByTagName("span")[0].innerHTML = refreshBarName;
	$("refreshButton").innerHTML = refreshBarValue;
	
	$("tipsTitle").getElementsByTagName("span")[0].innerHTML = tipsTitle;
	
	$("yesButton").innerHTML = yesButton;
	$("noButton").innerHTML = noButton;
	$("okButton").innerHTML = okButton;
	
	deviceNameSpan = $("deviceList").getElementsByClassName("linkState");
}

function notifyProcess(evt)  //蓝牙消息处理函数
{
	/**
	***消息种类
	var UI_BLUETOOTH_EVENT_UNKNOWN                   =  0x8500;   34048
	var UI_BLUETOOTH_EVENT_CONNECT_SUCCESS           =  0x8501;
	var UI_BLUETOOTH_EVENT_CONNECT_FAIL              =  0x8502;
	var UI_BLUETOOTH_EVENT_DISCOVER_START            =  0x8503;
	var UI_BLUETOOTH_EVENT_DISCOVER_END              =  0x8504;  
	var UI_BLUETOOTH_EVENT_DEV_LIST_STATE_CHANGE     =  0x8505;
	var UI_BLUETOOTH_EVENT_ERROR                     =  0x8506;
	var UI_BLUETOOTH_EVENT_DEVICES_CHANGE            =  0x8507;
	var UI_BLUETOOTH_EVENT_PIN_CODE_PAIR             =  0x8508;
	var UI_BLUETOOTH_EVENT_HH_BACK_CONNECT           =  0x8509;
	var UI_BLUETOOTH_EVENT_HH_REMOVE_SUCCESS         =  0x850a;
	var UI_BLUETOOTH_EVENT_HH_REMOVE_FAIL            =  0x850b;
	**/
	var msg = evt.which;
	var data = evt.modifiers;
	testLog("YM msg:" + msg);
	testLog("YM data:" + data);
	switch(msg)
	{
		case top.UI_BLUETOOTH_EVENT_UNKNOWN:
			break;
			
		case top.UI_BLUETOOTH_EVENT_CONNECT_SUCCESS:
			//setAudioMute(MUTE);  //声音mute
			//判断连接设备的deviceType
			var vol = bluetooth.getBluetoothVolume();
			bluetooth.setBluetoothVolume(vol);
			var currentID = data;
			currentBluetoothDevice = bluetooth.getBluetoothDeviceById(currentID);
			testLog("currentBluetoothDevice.deviceTyps:" + currentBluetoothDevice.deviceType);
			
			if(currentBluetoothDevice.deviceType == KEYBOARD_DEVICE_TYPE)
			{
				if(focusTab == TIPS_PAIR_AREA)
				{
					showTipsWindow(0,-1);
					focusTab = DEVICE_LIST_AREA;
					$("settingWindow").style.display = "block";
					startElementScroll(deviceNameSpan[settingFocusV]);
				}
			}
			
			//if(!isAutoConnect)//手动连接成功
			//{
				$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.WebkitAnimationPlayState  = "paused";
				$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.display = "none";
				//deviceListContentLi[settingFocusV].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[2];
				//deviceListContentLi[settingFocusV].getElementsByTagName("img")[1].src = "bluetooth-images/check_6.png";

				if(currentBluetoothDevice.deviceType == AUDIO_DEVICE_TYPE || 
					currentBluetoothDevice.deviceType == EARPHONE_DEVICE_TYPE ||
					currentBluetoothDevice.deviceType == UNKOWN_DEVICE_TYPE)
				{
					setting.setProperty("app.ui.bluetoothStatus","1");
					top.bt_soundOutputShowFlag = true;
					soundOutputShowFlag = top.bt_soundOutputShowFlag;
					MAX_DEVICE_NUM = 4;
					refreshFocus(focusTab,settingFocusV,settingFocusH);
					//第一次连接音频设备时，将通道置为BT，以后连接则从数据库中获取通道值
					top.bt_soundOutPutValue = parseInt(setting.getProperty(OUT_PUT_NAME_FOR_DB,"0")); //top.bt_soundOutPutValue = btDeviceStauts
					testLog("top.bt_soundOutPutValue:" + top.bt_soundOutPutValue);
					if(top.bt_soundOutPutValue == -1)
					{
						setting.setProperty(OUT_PUT_NAME_FOR_DB,"1");
						top.bt_soundOutPutValue = 1;
					}
					setOutPutByValue(1);
					soundOutPutValue = 1;
					//soundOutPutValue = top.bt_soundOutPutValue;
					$("soundOutPutValue").innerHTML = soundOutPutArray[soundOutPutValue];//初始化soundoutput的值
					$("soundOutPut").style.display = "block";
					if(top.mute_status == 0)//判断当前是否为静音状态
					{
						if(top.bt_soundOutPutValue == 1)
						{
							bluetooth.setBluetoothMute(0);//unmute
						}
						else
						{
							bluetooth.setBluetoothMute(1);//mute
						}
						/*//setBluetoothVolume(50);
						switch(soundOutPutValue)
						{
							case 0:
								setAudioMute(UNMUTE);
								setBluetoothMute(MUTE);
								break;
							case 1:
								setAudioMute(MUTE);
								setBluetoothMute(UNMUTE);
								break;
							case 2:
								setAudioMute(UNMUTE);
								setBluetoothMute(UNMUTE);	
								break;
							default:
								setAudioMute(UNMUTE);
								setBluetoothMute(MUTE);
								break;
						}*/
					}
					else
					{
						//setAudioMute(MUTE);
						setBluetoothMute(MUTE);
					}
					
				}
			
			//}
			
			refreshDeviceList();
			showFScrollBar(blueToothDeviceLength,startDeviceNum,soundOutputShowFlag);
			/*
			for(var i=0;i<blueToothDeviceList.length;i++)//获取当前连接上的设备的位置
			{
				if(getDeviceStatus(blueToothDeviceList[i].id) == 1)  //不算自身外，已经有别的设备连接
				{
					top.bt_connectDevicePosition = i;
					connectDevicePosition = top.bt_connectDevicePosition;                       //记录这个已连接设备在列表中的位置
					isAnyDeviceConnect = true;
					break;
				}
			}
			*/
			if(focusTab == DEVICE_LIST_AREA)
			{
				startElementScroll(deviceNameSpan[settingFocusV]);
			}
			top.bt_connectDevicePosition = getCurrentConnectDevicePosition();
			connectDevicePosition = top.bt_connectDevicePosition;
			if(connectDevicePosition != -1)
				isAnyDeviceConnect = true;
			testLog("YM success connectDevicePosition:" + connectDevicePosition); 
			break;
		case top.UI_BLUETOOTH_EVENT_ERROR://配对失败
			
			break;
		case top.UI_BLUETOOTH_EVENT_CONNECT_FAIL:
			//if(!isAutoConnect)  //自动连接不作提示
			//{
				var currentID = data; //add yums 6-25
				$("settingWindow").style.display = "none";
				//$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].src = "bluetooth-images/Tip_40.png";
				//$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.display = "block";
				$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.WebkitAnimationPlayState  = "paused";
				refreshDeviceList();
				//deviceListContentLi[settingFocusV].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[0];
				if(focusTab != TIPS_FAILED_AREA)//防止在显示连接失败的提示框的情况下，又接受到连接失败的通知，这样preFocusTab = TIPS_FAILED_AREA，这样点击ok后，提示框消失，focusTab 却恢复成TIPS_FAILED_AREA
				{
					preFocusTab = focusTab;
				}
				
				showTipsWindow(1,currentID);
			//}
			break;
			
		case top.UI_BLUETOOTH_EVENT_DISCOVER_START:  //start discover
			isDiscovering = true;
			showDeviceList(0,1);//
			$("refreshBar").getElementsByTagName("img")[0].style.display = "block";
			$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "running";
			break;
			
		case top.UI_BLUETOOTH_EVENT_DISCOVER_END:  //扫描完成
			if(!isBlueOpen)//防止扫描的过程中突然关闭bluetooth，导致扫描完成的消息发上来引发错误
			{
				return;
			}
			isDiscovering = false;
			refreshDeviceList();
			$("refreshBar").getElementsByTagName("img")[0].style.display = "none";
			$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "paused";
			
			/*
			//isAutoConnect = true;
			for(var i=0;i<((blueToothDeviceLength > 5)?5:blueToothDeviceLength);i++)
			{	//getDeviceStatus
				//if(getDeviceStatus(deviceListID[i]) == 1)
					//return;
				for(var j=0;j<blueToothDeviceLength;j++) //在自动连接某个设备之前，先查看设备列表中是否有设备已经连上了。
				{
					if(getDeviceStatus(blueToothDeviceList[j].id) == 1)
						return;
				}
				connect(deviceListID[i]);
			}
			*/
			break;
			
		case top.UI_BLUETOOTH_EVENT_DEV_LIST_STATE_CHANGE:
			if(!isBlueOpen)//防止扫描的过程中突然关闭bluetooth，导致扫描完成的消息发上来引发错误
			{
				return;
			}
			blueToothDeviceList = getDevicesList();
			blueToothDeviceLength = blueToothDeviceList.length;
			if(blueToothDeviceLength == 0)
			{
				startDeviceNum = 0;
				settingFocusH = 0;
				settingFocusV = 2;
				focusTab = SETTING_AREA;
				refreshFocus(focusTab,settingFocusV,settingFocusH);
				refreshDeviceList();
				return;
			}
			
			if(focusTab == DEVICE_LIST_AREA)
			{
				while((startDeviceNum + settingFocusV) >= blueToothDeviceLength)
				{
					if(startDeviceNum > 0)
						startDeviceNum--
					else
						settingFocusV--;
				}
			}
			refreshDeviceList();
			refreshFocus(focusTab,settingFocusV,settingFocusH);
			break;
			
		//case top.UI_BLUETOOTH_EVENT_ERROR:
			//break;
			
		case top.UI_BLUETOOTH_EVENT_DEVICES_CHANGE: //断开连接才会有此消息
			//setAudioMute(UNMUTE);//unmute操作
	
			//testLog("UI_BLUETOOTH_EVENT_DEVICES_CHANGE deviceType:" + blueToothDeviceList[connectDevicePosition].deviceType);
			
			//testLog("connectDevicePosition:" + connectDevicePosition);
			//if(blueToothDeviceList[startDeviceNum + settingFocusV].deviceType == AUDIO_DEVICE_TYPE)
				//{
					//soundOutputShowFlag = true;
					//$("soundOutPut").style.display = "block";
					//refreshFocus(focusTab,settingFocusV,settingFocusH);
				//	if(soundOutPutValue == 1)
				//	{
					//	soundOutPutValue(MUTE);
					//}
				//}
			//testLog("connectDevicePosition:" + connectDevicePosition);
			
			var currentID = data;
			currentBluetoothDevice = bluetooth.getBluetoothDeviceById(currentID);
			testLog("UI_BLUETOOTH_EVENT_DEVICES_CHANGE currentID:" + currentID);
			if(currentBluetoothDevice.deviceType == AUDIO_DEVICE_TYPE
				||currentBluetoothDevice.deviceType == EARPHONE_DEVICE_TYPE
				||currentBluetoothDevice.deviceType == UNKOWN_DEVICE_TYPE)
			{
				setting.setProperty("app.ui.bluetoothStatus","0");
				soundOutputShowFlag = top.bt_soundOutputShowFlag;	
				if(soundOutputShowFlag)//add yums 2015-3-12
				{
					top.bt_soundOutputShowFlag = false;
					soundOutputShowFlag = top.bt_soundOutputShowFlag;
					$("soundOutPut").style.display = "none";
					if((settingFocusV == (MAX_DEVICE_NUM - 1)) && (startDeviceNum >0))
					{
						startDeviceNum -= 1;
						settingFocusV = 4;
					}
					MAX_DEVICE_NUM = 5;
					if(speakerStatus == 0)
					{
						speakerStatus = 1
						setting.speakerStatus = speakerStatus;
					}
					//setAudioMute(UNMUTE);//unmute操作
				}
				//top.bt_soundOutPutValue = 0;
				//soundOutPutValue = top.bt_soundOutPutValue;
				//setAudioMute(UNMUTE);
				//if(top.mute_status == 0)//判断当前是否为静音状态
				//{
				//	setAudioMute(UNMUTE);	
				//}
			}
			/*
			if(soundOutputShowFlag)//add yums 2015-3-12
			{
				$("soundOutPut").style.display = "none";
				soundOutputShowFlag = false;
				MAX_DEVICE_NUM = 5;
			}
			*/
			
			
			
			//if(deviceConnectMode == 0)
			//{
				//showTipsWindow(0,-1);
				//$("settingWindow").style.display = "block";
				//focusTab = DEVICE_LIST_AREA;
				//deviceListContentLi[connectDevicePosition - startDeviceNum].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[0];
				//deviceListContentLi[connectDevicePosition - startDeviceNum].getElementsByTagName("img")[1].style.display = "block";
				//deviceListContentLi[connectDevicePosition - startDeviceNum].getElementsByTagName("img")[1].src = "bluetooth-images/Tip_40.png";
			//}
			/*
			if(deviceConnectMode == 1)
			{
				if((connectDevicePosition - startDeviceNum) >= 0 && (connectDevicePosition - startDeviceNum) < 5)
				{
					deviceListContentLi[connectDevicePosition - startDeviceNum].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[0];
					deviceListContentLi[connectDevicePosition - startDeviceNum].getElementsByTagName("img")[1].src = "bluetooth-images/Tip_40.png";
				}
				connectFlag = connect(blueToothDeviceList[startDeviceNum + settingFocusV].id);
				testLog("YM conncetFlag:" + connectFlag);
				deviceListContentLi[settingFocusV].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[1];//连接中...
				$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.WebkitAnimationPlayState  = "running";
			}
			*/
			refreshDeviceList();
			showFScrollBar(blueToothDeviceLength,startDeviceNum,soundOutputShowFlag);
			refreshFocus(focusTab,settingFocusV,settingFocusH);
			
			//testLog("UI_BLUETOOTH_EVENT_DEVICES_CHANGE status:" + blueToothDeviceList[connectDevicePosition].status);
			//testLog("UI_BLUETOOTH_EVENT_DEVICES_CHANGE isConnected:" + blueToothDeviceList[connectDevicePosition].isConnected);
			top.bt_connectDevicePosition = -1;
			connectDevicePosition = top.bt_connectDevicePosition;
			
			if(focusTab == DEVICE_LIST_AREA)
			{
				startElementScroll(deviceNameSpan[settingFocusV]);
			}
			break;
		
		case top.UI_BLUETOOTH_EVENT_PIN_CODE_PAIR:  //配对提示
		
			$("settingWindow").style.display = "none";
			$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].src = "bluetooth-images/Tip_40.png";
			$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.display = "block";
			$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.WebkitAnimationPlayState  = "paused";
			deviceListContentLi[settingFocusV].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[0];
			showTipsWindow(3,-1);
			break;
		case top.UI_BLUETOOTH_EVENT_HH_BACK_CONNECT:
			break;
		case top.UI_BLUETOOTH_EVENT_HH_REMOVE_SUCCESS:
			/*
			testLog("YM UI_BLUETOOTH_EVENT_PAIR_SUCCESS");
			//blueToothDeviceList = getDevicesList();
			//blueToothDeviceLength = blueToothDeviceList.length;
			focusTab = DEVICE_LIST_AREA;
			showTipsWindow(0,-1);
			$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.WebkitAnimationPlayState  = "paused";
			deviceListContentLi[settingFocusV].getElementsByTagName("img")[1].src = "bluetooth-images/Tip_40.png.png";
			//deviceListContentLi[settingFocusV].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[3];
			*/
			refreshDeviceList();
			connectDevicePosition = getCurrentConnectDevicePosition();
			if(connectDevicePosition == -1)
			{
				soundOutputShowFlag = top.bt_soundOutputShowFlag;	
				if(soundOutputShowFlag)//add yums 2015-3-12
				{
					top.bt_soundOutputShowFlag = false;
					soundOutputShowFlag = top.bt_soundOutputShowFlag;
					$("soundOutPut").style.display = "none";
					MAX_DEVICE_NUM = 5;
					//setAudioMute(UNMUTE);//unmute操作
				}
				//top.bt_soundOutPutValue = 0;
				//soundOutPutValue = top.bt_soundOutPutValue;
				//setAudioMute(UNMUTE);
				//if(top.mute_status == 0)//判断当前是否为静音状态
				//{
				//	setAudioMute(UNMUTE);	
				//}
			}
			/*
			while(settingFocusV + startDeviceNum >= blueToothDeviceLength)
			{
				if(startDeviceNum > 0)
					startDeviceNum -= 1;
				else
					settingFocusV--;
			}
			if(settingFocusV < 0)
			{
				settingFocusV = 2;
				focusTab = SETTING_AREA;
			}
			*/
			refreshFocus(focusTab,settingFocusV,settingFocusH);
			
			if(focusTab == DEVICE_LIST_AREA)
			{
				startElementScroll(deviceNameSpan[settingFocusV]);
			}
			break;
		case top.UI_BLUETOOTH_EVENT_HH_REMOVE_FAIL:
			/*
			testLog("YM UI_BLUETOOTH_EVENT_HH_REMOVE_FAIL");
			showTipsWindow(0,-1);
			*/
			break;
		
		default:
			break;
	
	}
}

function keyDownProcess(evt)
{
	var value = evt.keyCode;
	testLog("keyCode:" + value);
	switch(value)
	{
		/*
		case top.VK_VOLUME_DOWN://volume down,多媒体不能共用
		case top.VK_VOLUME_UP://volume up
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.setFrameFocusPage("globleShow");
			top.$("globleShow").contentWindow.$("volumeForm").style.display = "block";
			top.globleShow.focus();
			top.startVolumeTimer();
			break ;
		*/
		
		case top.VK_MUTE:
			top.keyDownProcess(evt);
			break;
		case VK_LEFT:
			toLeft();
			break;
		case VK_UP:
		{
			toUp();
			break;
		}	
		case VK_RIGHT:
			toRight();
			break;
			
		case VK_DOWN:
			toDown();
			break;
		case VK_OK:
			toOk();
			break;
		case top.VK_MENU:
        case top.VK_EXIT:
        case top.VK_POWER:
             top.keyDownProcess(evt);
             break;             
        case top.VK_BACK:
			//top.restartTimeout();
			//top.focusToIndexHtml(1);
		if(top.g_temp == "bluetooth")
			{
				top.$("main").style.display="block";			
				top.$("operatePage").src = "";
				top.main.focus();
				top.setFrameFocusPage("main");				
			}
		else
			{			
				toBack();
			}
            break;      
		default:
			top.keyDownProcess(evt);
			break;
	}
}

function toBack()
{
	testLog("toBack focusTab:" + focusTab);
	if(focusTab == SETTING_AREA || focusTab == DEVICE_LIST_AREA)
		parent.returnPopWindow(2);
}

function toDown()
{
	testLog("toDown() focusTab:" + focusTab);
	testLog("toDown() settingFocusV:" + settingFocusV);
	testLog("toDown() blueToothDeviceLength:" + blueToothDeviceLength);
	
	if(!isBlueOpen)
		return;
	if(focusTab == SETTING_AREA)
	{
		if(!isBlueOpen)
			return;
		if(settingFocusV == 0 && !soundOutputShowFlag)
			settingFocusV += 2;
		else 
			settingFocusV++;
		if(settingFocusV > 2) //focus on refresh
		{
			if(isDiscovering)  //正在扫描
			{
				settingFocusV = 0;
				refreshFocus(focusTab,settingFocusV,settingFocusH);
			}
			else
			{
				if(blueListEmpty) //yums：No blueDevice
				{
					settingFocusV = 0;
					refreshFocus(focusTab,settingFocusV,settingFocusH);
				}
				else
				{
					focusTab = DEVICE_LIST_AREA;
					settingFocusV = 0;
					refreshFocus(focusTab,settingFocusV,settingFocusH);
					startElementScroll(deviceNameSpan[settingFocusV]);
				}
			}
			
		}
		else   //focus on open
			refreshFocus(focusTab,settingFocusV,settingFocusH);
	}
	else if(focusTab == DEVICE_LIST_AREA)
	{
		stopElementScroll(deviceNameSpan[settingFocusV]);
		settingFocusV ++;
		if(blueToothDeviceLength > 0 && blueToothDeviceLength < MAX_DEVICE_NUM + 1)
		{
			if(settingFocusV > blueToothDeviceLength - 1)
			{
				focusTab = SETTING_AREA;
				settingFocusV = 0;
				refreshFocus(focusTab,settingFocusV,settingFocusH);
			}
			else
			{
				startElementScroll(deviceNameSpan[settingFocusV]);
				refreshFocus(focusTab,settingFocusV,settingFocusH);
			}
			
		}
		else if(blueToothDeviceLength >= MAX_DEVICE_NUM + 1)
		{
			if(settingFocusV < MAX_DEVICE_NUM)
			{
				refreshFocus(focusTab,settingFocusV,settingFocusH);
			}
			else
			{
				if((settingFocusV + startDeviceNum) < blueToothDeviceLength)
				{
					settingFocusV = MAX_DEVICE_NUM - 1;
				//	startDeviceNum = settingFocusV - (MAX_DEVICE_NUM - 1);
					startDeviceNum++;
					refreshDeviceList();
				}
				else 
				{
					settingFocusV = MAX_DEVICE_NUM - 1;
					testLog("THIS IS LAST ONE!");
				}
			}
			
			startElementScroll(deviceNameSpan[settingFocusV]);
		}
		
	}
}

function toUp()
{
	if(!isBlueOpen)
		return;
	if(focusTab == SETTING_AREA)
	{
		if(settingFocusV == 2 && !soundOutputShowFlag)
			settingFocusV -= 2;
		else
			settingFocusV--;
		if(settingFocusV < 0)
		{
			if(blueListEmpty)
			{
				settingFocusV = 1;
			}
			else
			{
				settingFocusV = 0;
			}
			//else
			//{
			//	focusTab = DEVICE_LIST_AREA;
			//	settingFocusV = blueToothDeviceLength - 1;
			//}
		}
		refreshFocus(focusTab,settingFocusV,settingFocusH);	
	}
	else if(focusTab == DEVICE_LIST_AREA)
	{
		stopElementScroll(deviceNameSpan[settingFocusV]);
		settingFocusV--;
		if(blueToothDeviceLength > 0 && blueToothDeviceLength < MAX_DEVICE_NUM + 1)
		{
			if(settingFocusV < 0)
			{
				focusTab = SETTING_AREA;
				settingFocusV = 2;
				refreshFocus(focusTab,settingFocusV,settingFocusH);
			}
			else
			{
				startElementScroll(deviceNameSpan[settingFocusV]);
				refreshFocus(focusTab,settingFocusV,settingFocusH);
			}
			
		}
		else
		{
			if(settingFocusV >= 0)
			{
				refreshFocus(focusTab,settingFocusV,settingFocusH);
				startElementScroll(deviceNameSpan[settingFocusV]);
			}
			else if(settingFocusV < 0)
			{
				if(startDeviceNum > 0)
				{
					startDeviceNum--;
					settingFocusV = 0;
					refreshDeviceList();
					startElementScroll(deviceNameSpan[settingFocusV]);
				}
				else if(startDeviceNum == 0)
				{
					focusTab = SETTING_AREA
					settingFocusV = 2;
					refreshFocus(focusTab,settingFocusV,settingFocusH);
				}
			}
		}
	}
}

function toRight()
{
	if(focusTab == SETTING_AREA && settingFocusV == 0)
	{
		//Judge Device's state
		//isBlueOpen = api_bluetooth_getStatus();	
		if(isBlueOpen)
		{
			if(isDiscovering)
			{
				cancelDiscover();
				$("refreshBar").getElementsByTagName("img")[0].style.display = "none";
				$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "paused";
				isDiscovering = false;
				refreshDeviceList();
			}

			disableBlueToothFlag = disableBlueTooth(); //disble bluetooth
			if(disableBlueToothFlag == 1)  //success 0  failed 1;
			{
				testLog("YM disableBlueTooth success!");
				isBlueOpen = false;
				setting.setProperty(BT_SWITCH_STATE_FOR_DB,bt_OFF);//将蓝牙开关状态保存在数据库中
				showDeviceList(0,0);
				$("switchButton").innerHTML = switchButtonArray[0];  //close
				focusTab = SETTING_AREA;
				settingFocusV = 0;
				refreshFocus(focusTab,settingFocusV,settingFocusH);
			}
			else
			{
				testLog("YM disableBlueTooth failed!");
			}
			if(soundOutputShowFlag)
			{
				$("soundOutPut").style.display = "none";
				if("1" == setting.getProperty("app.ui.bluetoothStatus","1") &&　setting.speakerStatus == 0)
				{
					setting.setProperty("app.ui.bluetoothStatus","0");
					setting.speakerStatus = 1;
				}
				top.bt_soundOutputShowFlag = false;
				soundOutputShowFlag = top.bt_soundOutputShowFlag;
				MAX_DEVICE_NUM = 5;
			}
			//if(top.mute_status == 0)//判断当前是否为静音状态
			//{
			//	setAudioMute(UNMUTE);
			//}
		}
		else
		{
			bluetoothSwitchState = setting.getProperty(BT_SWITCH_STATE_FOR_DB,bt_OFF);
			
			$("switchButton").innerHTML = switchButtonArray[1];
			showDeviceList(0,1);//
			$("refreshBar").getElementsByTagName("img")[0].style.display = "block";
			$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "running";
			
			setTimeout(function(){
				enableBlueToothFlag = enableBlueTooth();
				if(enableBlueToothFlag == 1)  //enable success
				{
					testLog("YM enable bluetooth success!");
					isBlueOpen = true;
					setting.setProperty(BT_SWITCH_STATE_FOR_DB,bt_ON);//将蓝牙开关状态保存在数据库中
					//$("switchButton").innerHTML = switchButtonArray[1];  
					//setTimeout(function()
					//{
						startDiscover();
						isDiscovering = true;
						//showDeviceList(0,1);//
						//$("refreshBar").getElementsByTagName("img")[0].style.display = "block";
						//$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "running";
					//},100);
				}
				else
				{
					testLog("YM enable bluetooth fail!");
				}	
			},100);
		}
	}
	else if(focusTab == SETTING_AREA && settingFocusV == 1)
	{
		soundOutPutValue++;
		if(soundOutPutValue > 3)
			soundOutPutValue = 0;
		/*
		switch(soundOutPutValue)
		{
			case 0:
				setting.setProperty(OUT_PUT_NAME_FOR_DB,"0");
				break;
			case 1:
				setting.setProperty(OUT_PUT_NAME_FOR_DB,"1");
				break;
			case 2:
				setting.setProperty(OUT_PUT_NAME_FOR_DB,"2");
				break;
			default:
				setting.setProperty(OUT_PUT_NAME_FOR_DB,"-1");
				break;
		}
		*/
		$("soundOutPutValue").innerHTML = soundOutPutArray[soundOutPutValue];
		//top.bt_soundOutPutValue = soundOutPutValue;
		setOutPutByValue(soundOutPutValue);
		/*switch(soundOutPutValue)
		{
			case 0:
				switch(top.mute_status)
				{
					case 0:
						setAudioMute(UNMUTE);
						setBluetoothMute(MUTE);
						break;
					case 1:
						break;
					default:
						break;
				}
				
				//关闭蓝牙音箱声音
				//setBluetoothVolume(0);
				setting.setProperty(OUT_PUT_NAME_FOR_DB,"0");
				break;
			case 1:
				switch(top.mute_status)
				{
					case 0:
						setAudioMute(MUTE);
						setBluetoothMute(UNMUTE);
						break;
					case 1:
						break;
					default:
						break;
				}
				
				//打开蓝牙声音
				//setBluetoothVolume(30);
				setting.setProperty(OUT_PUT_NAME_FOR_DB,"1");
				break;
			case 2:
				switch(top.mute_status)
				{
					case 0:
						setAudioMute(UNMUTE);
						setBluetoothMute(UNMUTE);
						break;
					case 1:
						break;
					default:
						break;
				}
				//打开蓝牙声音
				//setBluetoothVolume(30);
				setting.setProperty(OUT_PUT_NAME_FOR_DB,"2");
				break;
			default:
				testLog("soundOutPutValue default:" + soundOutPutValue);
				setting.setProperty(OUT_PUT_NAME_FOR_DB,"-1");
				break;
		}
		*/
	}
	else if(focusTab == TIPS_DISCONNECT_AREA)
	{
	
		if(tipsFocusH == 1)
		{
			return;
		}
		else if(tipsFocusH == 0)
		{
			tipsFocusH++;
			$("focusButton").style.top = 272 + "px";
			$("focusButton").style.left = 480 + "px";
		}
	}
	else if(focusTab == TIPS_PAIR_REMOVE_AREA)//焦点在移除配对提示框
	{
		if(tipsFocusH == 1)
		{
			return;
		}
		else if(tipsFocusH == 0)
		{
			tipsFocusH++;
			$("focusButton").style.top = 272 + "px";
			$("focusButton").style.left = 480 + "px";
		}
	}
	else if(focusTab == DEVICE_LIST_AREA)//焦点在列表中
	{
		blueName = deviceListContentLi[settingFocusV].getElementsByTagName("span")[0].innerHTML;
		deviceId = deviceListID[settingFocusV];
		
		currentBluetoothDevice = bluetooth.getBluetoothDeviceById(deviceId);
		testLog("currentBluetoothDevice.status:" + currentBluetoothDevice.status );
		if(currentBluetoothDevice.status == 1)
		{
			$("settingWindow").style.display = "none";
			showTipsWindow(5,-1);
		}
		else
		{
			return;
		}
	}
	return;
}

function toLeft()
{
	if(focusTab == SETTING_AREA && settingFocusV == 0)
	{
		//Judge Device's state
		//isBlueOpen = api_bluetooth_getStatus();
		/*
		if(isBlueOpen)
		{
			disableBlueTooth(); //disble bluetooth
			isBlueOpen = false;
			setting.setProperty(BT_SWITCH_STATE_FOR_DB,bt_OFF);//将蓝牙开关状态保存在数据库中
			showDeviceList(0,0);
			$("switchButton").innerHTML = switchButtonArray[0];  //close
			$("refreshBar").getElementsByTagName("img")[0].style.display = "none";
			$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "paused";
			focusTab = SETTING_AREA;
			settingFocusV = 0;
			refreshFocus(focusTab,settingFocusV,settingFocusH);
		}
		else
		{
			
			enableBlueToothFlag = enableBlueTooth();
			if(enableBlueToothFlag == 1)  //enable success
			{
				testLog("YM enable bluetooth success!");
				isBlueOpen = true;
				setting.setProperty(BT_SWITCH_STATE_FOR_DB,bt_ON);//将蓝牙开关状态保存在数据库中
				$("switchButton").innerHTML = switchButtonArray[1];  //close
				startDiscover();
				isDiscovering = true;
				showDeviceList(0,1);//
				$("refreshBar").getElementsByTagName("img")[0].style.display = "block";
				$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "running";
			}
			else
			{
				testLog("YM enable bluetooth fail!");
			}	
		}
		*/
		toRight();
	}
	else if(focusTab == TIPS_DISCONNECT_AREA)//焦点在断开连接提示框
	{
		if(tipsFocusH == 0)
		{
			return;
		}
		else if(tipsFocusH == 1)
		{
			tipsFocusH--;
			$("focusButton").style.top = 272 + "px";
			$("focusButton").style.left = 193 + "px";
		}
	}
	else if(focusTab == TIPS_PAIR_REMOVE_AREA)//焦点在移除配对提示框
	{
		if(tipsFocusH == 0)
		{
			return;
		}
		else if(tipsFocusH == 1)
		{
			tipsFocusH--;
			$("focusButton").style.top = 272 + "px";
			$("focusButton").style.left = 193 + "px";
		}
	}
}

function toOk()
{
	var blueName;
	var deviceId;
	isAnyDeviceConnect = false;
	if(focusTab == SETTING_AREA)
	{
		if(settingFocusV == 0 || settingFocusV == 1)
		{
			toRight();
		}
		else if(settingFocusV == 2)
		{
			if(!isBlueOpen)
				return;
			if(isDiscovering)
			{
				cancelDiscover();
				$("refreshBar").getElementsByTagName("img")[0].style.display = "none";
				
				//if(cancelDiscoverFlag)
				//{
					////testLog("YM cancel discover success!");
				$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "paused";
				isDiscovering = false;
				refreshDeviceList();
				top.bt_connectDevicePosition = getCurrentConnectDevicePosition();
				connectDevicePosition = top.bt_connectDevicePosition;
				if(connectDevicePosition != -1)
					sAnyDeviceConnect = true;		
				//}
			}
			else
			{
				startDiscover();
				isDiscovering = true;
				showDeviceList(0,1);//
				$("refreshBar").getElementsByTagName("img")[0].style.display = "block";
				$("refreshBar").getElementsByTagName("img")[0].style.WebkitAnimationPlayState  = "running";
			}
		}
	}
	else if(focusTab == DEVICE_LIST_AREA)
	{
		//判断当前选择项的链接状态，若链接，则无响应，若未链接，则重新发起链接。
		//查询当前除去自己外是否有其他的连接的设备

		blueName = deviceListContentLi[settingFocusV].getElementsByTagName("span")[0].innerHTML;
		deviceId = deviceListID[settingFocusV];
		/*
		for(var i=0;i< blueToothDeviceList.length;i++)
		{
			if(blueName == blueToothDeviceList[i].name)
			{
				deviceId = blueToothDeviceList[i].id;
				break;
			}
		}
		*/
		//isAutoConnect = false;
		currentDeviceStatus = getDeviceStatus(deviceId);  //获取当前选中设备的连接状态
		testLog("YM currentDeviceStatus:" + currentDeviceStatus);
		if(currentDeviceStatus == 0)
		{
			/*
			for(var i=0;i<blueToothDeviceList.length;i++)
			{
				if(blueToothDeviceList[i].id == blueToothDeviceList[startDeviceNum + settingFocusV].id)
					continue;
				if(getDeviceStatus(blueToothDeviceList[i].id) == 1)  //不算自身外，已经有别的设备连接
				{
					top.bt_connectDevicePosition = i;
					connectDevicePosition = top.bt_connectDevicePosition;                       //记录这个已连接设备在列表中的位置
					isAnyDeviceConnect = true;
					break;
				}
			}
			*/
			top.bt_connectDevicePosition = getCurrentConnectDevicePosition();
			connectDevicePosition = top.bt_connectDevicePosition;
			if(connectDevicePosition != -1)
				isAnyDeviceConnect = true;
			//if(isAnyDeviceConnect)//连接该设备之前有其他的设备连接，则先断开连接的设备再连接
			//{
				//deviceConnectMode = 1;
				//disconnect(blueToothDeviceList[connectDevicePosition].id);
			//}
			//else
			//{
				//deviceConnectMode = 0;
				connectFlag = connect(deviceId);
				testLog("YM conncetFlag:" + connectFlag);
				deviceListContentLi[settingFocusV].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[1];//连接中...
				$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].src = "bluetooth-images/Loading08.png"
				$("deviceList").getElementsByTagName("li")[settingFocusV].getElementsByTagName("img")[1].style.WebkitAnimationPlayState  = "running";
			//}
		}
		else if(currentDeviceStatus == 1)
		{
			$("settingWindow").style.display = "none";
			showTipsWindow(2,-1);
		}
		/*
		if(connectFlag == 1)
		{
			testLog("YM connect success!");
			deviceListContentLi[settingFocusV].getElementsByTagName[0].innerHTML = deviceListTipsArray[2];//已连接...
		}
		else
		{
			testLog("YM connect failed");
		}
		*/
	}
	else if(focusTab == TIPS_FAILED_AREA)//连接失败提示框
	{
		$("settingWindow").style.display = "block";
		
		showTipsWindow(0,-1);
		focusTab = preFocusTab;
		if(focusTab == DEVICE_LIST_AREA)
		{
			startElementScroll(deviceNameSpan[settingFocusV]);
		}
	}
	else if(focusTab == TIPS_DISCONNECT_AREA)//断开连接提示框
	{
		deviceId = deviceListID[settingFocusV];
		if(tipsFocusH == 1)
		{
			$("settingWindow").style.display = "block";
			showTipsWindow(0,-1);
			focusTab = DEVICE_LIST_AREA;
			if(focusTab == DEVICE_LIST_AREA)
			{
				startElementScroll(deviceNameSpan[settingFocusV]);
			}
		}
		else if(tipsFocusH == 0)
		{
			deviceConnectMode = 0;
			disconnect(deviceId);
			showTipsWindow(0,-1);//add yums 2015-3-12
			$("settingWindow").style.display = "block";//add yums 2015-3-12
			focusTab = DEVICE_LIST_AREA;//add yums 2015-3-12
		}
	}
	else if(focusTab == TIPS_PAIR_AREA)//配对提示框
	{
		if(tipsFocusH == 1)
		{
			$("settingWindow").style.display = "block";
			showTipsWindow(0,-1);
			focusTab = DEVICE_LIST_AREA;
		}
		
		if(focusTab == DEVICE_LIST_AREA)
		{
			startElementScroll(deviceNameSpan[settingFocusV]);
		}
	}
	else if(focusTab == TIPS_PAIR_REMOVE_AREA)//移除配对提示框
	{
		deviceId = deviceListID[settingFocusV];
		if(tipsFocusH == 1)
		{
			$("settingWindow").style.display = "block";
			showTipsWindow(0,-1);
			focusTab = DEVICE_LIST_AREA;
		}
		else if(tipsFocusH == 0)
		{
			//移除配对
			removeBluetoothFromPairList(deviceId);
			showTipsWindow(0,-1);//add yums 2015-3-12
			$("settingWindow").style.display = "block";//add yums 2015-3-12
			focusTab = DEVICE_LIST_AREA;//add yums 2015-3-12
		}
		
		if(focusTab == DEVICE_LIST_AREA)
		{
			startElementScroll(deviceNameSpan[settingFocusV]);
		}
	}
	
}

function refreshFocus(area,focusV,focusH)
{
	
	if(area == SETTING_AREA)
	{
		//settingFocusImg.src = "bluetooth-images/Focus2.png";
		/*
		if(!soundOutputShowFlag)
		{
			
			if(focusV == 0) //focus on open
			{
				settingFocusImg.src = "bluetooth-images/Focus_750.png";
				settingFocusImg.style.width = 755 + "px";
				settingFocusImg.style.height = 80 + "px";
				settingFocusImg.style.left = 15 + "px";
				settingFocusImg.style.top = 95 + "px";
			}
			else if(focusV == 2)  //focus on refresh
			{
				settingFocusImg.src = "bluetooth-images/Focus2.png";
				settingFocusImg.style.width = 200 + "px";
				settingFocusImg.style.height = 70 + "px";
				settingFocusImg.style.left = 546 + "px";
				settingFocusImg.style.top = 180 + "px";
			}
		}
		else
		{
		*/
			if(focusV == 0) //focus on open
			{
				settingFocusImg.src = "bluetooth-images/Focus_750.png";
				settingFocusImg.style.width = 755 + "px";
				settingFocusImg.style.height = 80 + "px";
				settingFocusImg.style.left = 15 + "px";
				settingFocusImg.style.top = 95 + "px";
			}
			else if(focusV == 1)
			{
				settingFocusImg.src = "bluetooth-images/Focus_750.png";
				settingFocusImg.style.width = 755 + "px";
				settingFocusImg.style.height = 80 + "px";
				settingFocusImg.style.left = 15 + "px";
				settingFocusImg.style.top = 175 + "px";
			}
			else if(focusV == 2)  //focus on refresh
			{
				settingFocusImg.src = "bluetooth-images/Focus2.png";
				settingFocusImg.style.width = 200 + "px";
				settingFocusImg.style.height = 70 + "px";
				settingFocusImg.style.left = 546 + "px";
				
				if(soundOutputShowFlag == false)
				{
					settingFocusImg.style.top = 180 + "px";
				}
				else
				{
					settingFocusImg.style.top = 260 + "px";
				}
			}
			
		//}
		
	}
	else if(area == DEVICE_LIST_AREA)
	{
		settingFocusImg.src = "bluetooth-images/Focus_750.png";
		settingFocusImg.style.width = 755 + "px";
		settingFocusImg.style.height = 80 + "px";
		settingFocusImg.style.left = 15 + "px";
		if(settingFocusV >= MAX_DEVICE_NUM)
		{
			settingFocusV = MAX_DEVICE_NUM - 1;
			startDeviceNum += 1; 
		}
		
		if(soundOutputShowFlag)
			settingFocusImg.style.top = 195 + settingFocusV * 80 + 160 + "px";
		else
			settingFocusImg.style.top = 195 + settingFocusV * 80 + 80 + "px";
	}
	else if(area == TIPS_AREA)
	{
	
	}
	else if(area == PAIRED_AREA)
	{
	
	}
}

function refreshDeviceList()
{
	blueToothDeviceList = getDevicesList();
	blueToothDeviceLength = blueToothDeviceList.length;
	//testLog("blueDevice length:" + blueToothDeviceLength);
	//testLog("startDeviceNum:" + startDeviceNum);
	testLog("blueToothDeviceLength:" + blueToothDeviceLength);
	testLog("startDeviceNum:" + startDeviceNum);
	testLog("settingFocusV:" + settingFocusV);

	if(focusTab == DEVICE_LIST_AREA)
	{
		while(((settingFocusV + startDeviceNum) >= blueToothDeviceLength) 
				   || ((startDeviceNum > 0) && (startDeviceNum > (blueToothDeviceLength - MAX_DEVICE_NUM))))
		{
			if(startDeviceNum > 0)
				startDeviceNum -= 1;
			else
				settingFocusV--;
		}
		if(settingFocusV < 0)
		{
			settingFocusV = 2;
			focusTab = SETTING_AREA;
		}
	}
	
	
	if(blueToothDeviceLength == 0)
	{
		blueToothDeviceLength = 0;
		blueListEmpty = true;
		showDeviceList(0,2);
		for(var i =0;i<5;i++)
		{
			deviceListID[i] = -1;
		}
		
		return;
	}
	else
	{
		var length = 0;
		
		for(var i = 0;i < 5;i++)
		{
			deviceListContentLi[i].getElementsByTagName("span")[0].innerHTML = "";
			deviceListContentLi[i].getElementsByTagName("span")[1].innerHTML = "";
			deviceListContentLi[i].getElementsByTagName("img")[0].src = "";
			deviceListContentLi[i].getElementsByTagName("img")[1].src = "";
			deviceListContentLi[i].getElementsByTagName("img")[0].style.display = "none";
			deviceListContentLi[i].getElementsByTagName("img")[1].style.display = "none";
			deviceListContentLi[i].getElementsByTagName("img")[2].style.display = "none";
		}
		
		if(soundOutputShowFlag)
		{
			length = (blueToothDeviceLength > 4)? 4 : blueToothDeviceLength;
		}
		else 
		{
			length = (blueToothDeviceLength > 5)? 5 : blueToothDeviceLength;
		}
		blueListEmpty = false;
		for(var i = 0;i < length;i++)
		{
			deviceListContentLi[i].getElementsByTagName("span")[0].innerHTML = blueToothDeviceList[startDeviceNum + i].name;
			
			//testLog("YM blueToothDeviceList[" + i + "].id:" + getDeviceStatus(blueToothDeviceList[startDeviceNum + i].id));
			if(blueToothDeviceList[startDeviceNum + i].isConnected == 1)
			{
				
				deviceListContentLi[i].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[2];
				deviceListContentLi[i].getElementsByTagName("img")[1].src = "";
				deviceListContentLi[i].getElementsByTagName("img")[1].style.display = "none";
				deviceListContentLi[i].getElementsByTagName("img")[2].style.display = "block";
			}
			else 
			{
				if(blueToothDeviceList[startDeviceNum + i].status == 1)
				{
					deviceListContentLi[i].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[3];
					deviceListContentLi[i].getElementsByTagName("img")[1].style.display = "block";
					deviceListContentLi[i].getElementsByTagName("img")[1].src = "bluetooth-images/Tip_40.png";
					deviceListContentLi[i].getElementsByTagName("img")[2].style.display = "block";
				}
				else
				{
					deviceListContentLi[i].getElementsByTagName("span")[1].innerHTML = deviceListTipsArray[0];
					deviceListContentLi[i].getElementsByTagName("img")[1].style.display = "none";
					deviceListContentLi[i].getElementsByTagName("img")[1].src = "bluetooth-images/Tip_40.png";
					deviceListContentLi[i].getElementsByTagName("img")[2].style.display = "none";
				}
			}
			
			
			if(blueToothDeviceList[startDeviceNum + i].deviceType == UNKOWN_DEVICE_TYPE)
			{
				$("deviceImg" + i).src = "bluetooth-images/Device_Unknown.png";
			}
			else if(blueToothDeviceList[startDeviceNum + i].deviceType == EARPHONE_DEVICE_TYPE)//耳机类型
			{
				$("deviceImg" + i).src = "bluetooth-images/Device_04.png";
			}
			else if(blueToothDeviceList[startDeviceNum + i].deviceType == AUDIO_DEVICE_TYPE)//音箱类型
			{
				$("deviceImg" + i).src = "bluetooth-images/Device_06.png";
			}
			else if(blueToothDeviceList[startDeviceNum + i].deviceType == HID_UNKOWN_DEVICE_TYPE)
			{
				$("deviceImg" + i).src = "bluetooth-images/Device_Unknown.png";
			}
			else if(blueToothDeviceList[startDeviceNum + i].deviceType == KEYBOARD_DEVICE_TYPE)//键盘
			{
				$("deviceImg" + i).src = "bluetooth-images/Device_03.png";
			}
			else if(blueToothDeviceList[startDeviceNum + i].deviceType == MOUSE_DEVICE_TYPE)//鼠标
			{
				$("deviceImg" + i).src = "bluetooth-images/Device_05.png";
			}
			else //其他类型
			{
				$("deviceImg" + i).src = "bluetooth-images/Device_Unknown.png";
			}
			
			
			deviceListID [i] = blueToothDeviceList[startDeviceNum + i].id;
			deviceListContentLi[i].style.display = "block";
			$("deviceImg" + i).style.display = "block";
		}
		
		if(soundOutputShowFlag)
		{
			if(length < 4)
			{
				for(var i = length;i<4;i++)
				{
					deviceListID [i] = -1;
					deviceListContentLi[i].style.display = "none";
				}
			}
		}
		else
		{
			if(length < 5)
			{
				for(var i = length;i<5;i++)
				{
					deviceListID [i] = -1;
					deviceListContentLi[i].style.display = "none";
				}
			}
		}
		
		showFScrollBar(blueToothDeviceLength,startDeviceNum,soundOutputShowFlag);
		showDeviceList(1,-1);	
	}
}

function showDeviceList(flag,settingContentNum)
{
	if(!flag)
	{
		//$("switchButton").innerHTML = switchButtonArray[0];  //close
		$("deviceList").getElementsByTagName("ul")[0].style.display = "none";
		$("settingTips").getElementsByTagName("span")[0].innerHTML = settingTipsArray[settingContentNum];
		$("settingTips").style.display = "block";
		//isBlueOpen = false;
	}
	else
	{
		//$("switchButton").innerHTML = switchButtonArray[1];  //open
		$("deviceList").getElementsByTagName("ul")[0].style.display = "block";
		$("settingTips").style.display = "none";
		//isBlueOpen = true;
	}
}

function showTipsWindow(type,num)
{
	var blueName;
	
	if(focusTab == DEVICE_LIST_AREA && type != 0)
	{
		stopElementScroll(deviceNameSpan[settingFocusV]);
	}
	
	if(type == 0)
	{
		$("tipsWindow").style.display = "none";
	}
	else if(type == 1)//显示连接失败
	{
		$("tipsWindow").style.display = "block";
		$("okButton").style.display = "block";
		$("yesButton").style.display = "none";
		$("noButton").style.display = "none";
		blueName = bluetooth.getBluetoothDeviceById(num).name;
		$("tipsContent1").innerHTML = deviceConncectFailedTips[1];
		var text = deviceConncectFailedTips[0].split("XXX");
		$("tipsContent2").innerHTML = text[0] + '"' +  blueName + '"' +  text[1];
		$("focusButton").style.display ="block";
		$("focusButton").style.top = 312 + "px";
		$("focusButton").style.left = 338 + "px";
		//please make sure has been opened and within the range of communication
		focusTab = TIPS_FAILED_AREA;
		
	}
	else if(type == 2)  //显示断开提示
	{
		//focusTab = TIPS_DISCONNECT_AREA;
		blueName = deviceListContentLi[settingFocusV].getElementsByTagName("span")[0].innerHTML;
		$("tipsContent1").innerHTML = "";
		var text = deviceDisconnectTips[0].split("XXX");
		$("tipsContent2").innerHTML =  text[0] + '"' +  blueName + '"' + text[1] ;
		
		$("tipsWindow").style.display = "block";
		$("okButton").style.display = "none";
		$("yesButton").style.display = "block";
		$("noButton").style.display = "block";
		$("focusButton").style.display ="block";
		$("focusButton").style.top = 272 + "px";
		$("focusButton").style.left = 480 + "px";
		focusTab = TIPS_DISCONNECT_AREA;
		tipsFocusH = 1;
	}
	else if(type == 3)//显示配对提示
	{
		$("tipsContent1").innerHTML = "";
		var text = outputPinTip.split("XXXX")
		$("tipsContent2").innerHTML = text[0] + "0000" + text[1];
		$("tipsWindow").style.display = "block";
		$("okButton").style.display = "block";
		$("yesButton").style.display = "none";
		$("noButton").style.display = "none";
		$("focusButton").style.display ="block";
		$("focusButton").style.top = 312 + "px";
		$("focusButton").style.left = 338 + "px";
		focusTab = TIPS_PAIR_AREA;
		tipsFocusH = 1;
	}
	else if(type == 4)//配对失败
	{
		$("tipsContent1").innerHTML = "";
		$("tipsContent2").innerHTML = "pairing failed";
		$("tipsWindow").style.display = "block";
		$("okButton").style.display = "block";
		$("yesButton").style.display = "none";
		$("noButton").style.display = "none";
		$("focusButton").style.display ="block";
		$("focusButton").style.top = 272 + "px";
		$("focusButton").style.left = 480 + "px";
		focusTab = TIPS_PAIR_AREA;
		tipsFocusH = 1;
	}
	else if(type == 5)
	{
		blueName = deviceListContentLi[settingFocusV].getElementsByTagName("span")[0].innerHTML;
		$("tipsContent1").innerHTML = "";
		$("tipsContent2").innerHTML = removePairAsk;//"Forget this device?";
		
		$("tipsWindow").style.display = "block";
		$("okButton").style.display = "none";
		$("yesButton").style.display = "block";
		$("noButton").style.display = "block";
		$("focusButton").style.display ="block";
		$("focusButton").style.top = 272 + "px";
		$("focusButton").style.left = 480 + "px";
		focusTab = TIPS_PAIR_REMOVE_AREA;
		tipsFocusH = 1;
	}
	
}

/**
封装接口
**/
function isSupport()
{
	//testLog("YM isSupport");
	return bluetooth.isSupport();
}

function enableBlueTooth()  //open bluetooth
{
	//testLog("YM enableBlueTooth");
	return bluetooth.enable();
}

function disableBlueTooth()
{
	//testLog("YM disableBlueTooth");
	return bluetooth.disable();
}

function getStatus()
{
	return bluetooth.getStatus();
}

function startDiscover()
{
	//testLog("YM startDiscover");
	bluetooth.startDiscover();
}

function cancelDiscover()
{
	bluetooth.cancelDiscover();

}

function getDevicesList()
{
	//testLog("YM getDevicesList");
	return bluetooth.getDeviceList();
}

function connect(id)
{
	//testLog("YM connect");
	return bluetooth.connect(id);
}

function disconnect(id)
{
	//testLog("YM disconnect");
	return bluetooth.disconnect(id);
}

function getDeviceStatus(id)
{
	return bluetooth.getDeviceStatus(id);
}

function setAudioMute(mute)
{
	//testLog("YM setAudioMute mute:" + mute);
	//bluetooth.setAudioMute(mute);
	if(1 == parseInt(mute))
	{
		setting.speakerStatus = 0;
	}
	else
	{
		setting.speakerStatus = 1;
	}
}

//sFlag:soundOutPut是否显示？true or false
function showFScrollBar(length,indexStart,sFlag)
{
	testLog("showFScrollBar");
	if(sFlag)
	{
		SCROLL_MAX_HEIGHT = 300;
		$("scrollAreaF0").getElementsByClassName("scrollBG")[0].style.height = SCROLL_MAX_HEIGHT + "px";
		if(length > 4)//当soundOutput显示的时候，最多能容纳四个
		{
			$("scrollAreaF0").style.display = "block";
			$("scrollBarF0").style.height = parseInt(SCROLL_MAX_HEIGHT * 4 / length) + "px";
			$("scrollBarF0").style.top = parseInt(SCROLL_MAX_HEIGHT * indexStart / length) + "px";
		}
		else
		{
			$("scrollAreaF0").style.display = "none";
		}
	}
	else
	{
		SCROLL_MAX_HEIGHT = 380;
		$("scrollAreaF0").getElementsByClassName("scrollBG")[0].style.height = SCROLL_MAX_HEIGHT + "px";
		if(length > 5)//当soundOutPut不显示的时候，最多能容纳五个
		{
			$("scrollAreaF0").style.display = "block";
			$("scrollBarF0").style.height = parseInt(SCROLL_MAX_HEIGHT * 5 / length) + "px";
			$("scrollBarF0").style.top = parseInt(SCROLL_MAX_HEIGHT * indexStart / length) + "px";
		}
		else
		{
			$("scrollAreaF0").style.display = "none";
		}
	}
}




function getBluetoothVolume()
{
	return bluetooth.getBluetoothVolume();
}

function setBluetoothVolume(vol)
{
	testLog("setBluetoothVolume vol:" + vol);
	bluetooth.setBluetoothVolume(vol);
}

function testLog(text)
{
	console.log("YM ==> " + text);
}

function setBluetoothMute(mute)
{
	return bluetooth.setBluetoothMute(mute);
}

function getCurrentConnectDevicePosition()
{
	for(var i=0;i<blueToothDeviceList.length;i++)
	{
		//testLog("YM blueToothDeviceList[" + i + "].isConected:" + blueToothDeviceList.isConnected);
		if(blueToothDeviceList[i].isConnected == 1)
			return i;
	}
	return -1;
}

function removeBluetoothFromPairList(id)
{
	testLog("removeBluetoothFromPairList id:" + id);
	bluetooth.removeBluetoothFromPairList(id);
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2) 
		{
			toBack();//right key
		}
	}
	
	$("switchBar").getElementsByTagName("div")[0].onmousedown = function(evt)
	{
		if(evt.button == 0)
				clickSwitchBarFunction();
	}
	
	$("soundOutPut").getElementsByTagName("div")[0].onmousedown = function(evt)
	{
		if(evt.button == 0)
				clickSoundOutPutFunction();
	}
	
	$("refreshBar").getElementsByTagName("div")[0].onmousedown = function(evt)
	{
		if(evt.button == 0)
				clickRefreshBarFunction();
	}
	
	
	for(var i = 0;i < deviceListContentLi.length;i++)
	{
		deviceListContentLi[i].setAttribute(clickIndexAttri, i);
		deviceListContentLi[i].onmousedown = function(evt){
			//console.log("YM clickOptionMenu2.onmousedown");
			if(evt.button == 0)
				clickDeviceListContentLiFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	$("yesButton").onmousedown = function(evt)
	{
		if(evt.button == 0)
				clickYesButtonFunction();
	}
	
	$("noButton").onmousedown = function(evt)
	{
		if(evt.button == 0)
				clickNoButtonFunction();
	}
	
	$("okButton").onmousedown = function(evt)
	{
		if(evt.button == 0)
				clickOkButtonFunction();
	}
}

function clickSwitchBarFunction()
{
	testLog("clickSwitchBarFunction");
	focusTab = SETTING_AREA;
	settingFocusV = 0;
    settingFocusH = 0;
	startDeviceNum = 0;
	refreshFocus(focusTab,settingFocusV,settingFocusH);
	toOk();
}

function clickSoundOutPutFunction()
{
	testLog("clickSoundOutPutFunction");
	focusTab = SETTING_AREA;
	settingFocusV = 1;
    settingFocusH = 0;
	startDeviceNum = 0;
	refreshFocus(focusTab,settingFocusV,settingFocusH);
	toRight();
}

function clickRefreshBarFunction()
{
	testLog("clickRefreshBarFunction");
	if(!isBlueOpen)
	{
		testLog("isBlueOpen isBlueOpen:" + isBlueOpen);
		return
	}
	focusTab = SETTING_AREA;
	settingFocusV = 2;
    settingFocusH = 0;
	startDeviceNum = 0;
	refreshFocus(focusTab,settingFocusV,settingFocusH);
	toOk();
}

function clickDeviceListContentLiFunction(index)
{
	testLog("clickDeviceListContentLiFunction");
	focusTab = DEVICE_LIST_AREA;
	settingFocusV = index;
	refreshFocus(focusTab,settingFocusV,settingFocusH);
	toOk();
}

function clickYesButtonFunction()
{
	testLog("clickOkButtonFunction");
	tipsFocusH = 0;
	
	$("focusButton").style.top = 272 + "px";
	$("focusButton").style.left = 193 + "px";
	
	toOk();
}

function clickNoButtonFunction()
{
	testLog("clickNoButtonFunction");
	tipsFocusH = 1;
	$("focusButton").style.top = 272 + "px";
	$("focusButton").style.left = 480 + "px";
	toOk();
}

function clickOkButtonFunction()
{
	testLog("clickOkButtonFunction");
	toOk();
}


//滚动效果实现 marquee版
function startElementScroll(htmlTag)
{
	testLog("YM startElementScroll");
	setScrollAttribute(htmlTag,1);
}

function stopElementScroll(htmlTag)
{
	testLog("YM stopElementScroll");
	setScrollAttribute(htmlTag,0);
	setTimeout(function(){
		resetScrollHtmlInner(htmlTag);
	},100);
	
}

function setScrollAttribute(htmlTag,flag)
{
	htmlTag.setAttribute("contentText",htmlTag.innerHTML);
	if(flag && isOverflowed(htmlTag))
	{
		htmlTag.style.overflowX = "-webkit-marquee";
		htmlTag.style.textOverflow = "clip";
		htmlTag.style.whiteSpace = "nowrap";
		htmlTag.style.webkitMarqueeSpeed = "fast";
		htmlTag.style.webkitMarqueeIncrement = "small";
	}
	else
	{
		htmlTag.style.overflowX = "hidden";
		htmlTag.style.textOverflow = "ellipsis";
		htmlTag.style.whiteSpace = "nowrap";
	}
	
}

function isOverflowed(element)
{
	console.log("YM element.scrollWidth:" +element.scrollWidth);
	console.log("YM element.clientWidth:" +element.clientWidth);
	return element.scrollWidth > element.clientWidth;
}


function resetScrollHtmlInner(htmlTag)
{
	testLog("resetScrollHtmlInner");
	htmlTag.innerHTML = htmlTag.getAttribute("contentText");
	//htmlTag.innerHTML = "adfdfadfgdsagfrgfdsgfhgdjdghkjthdfght" ;//htmlTag.getAttribute("contentText");
	//htmlTag.style.textAlign = "left";
}






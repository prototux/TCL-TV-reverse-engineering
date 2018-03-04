
var setting = top.g_setting;

var divDistance = 70;
var divWidth = 380 + divDistance;
var leftDistance = 25;
var focusShadow = "0px 0px 10px 5px rgb(255, 0, 0)";
var MAX_ONE_PAGE = 4;

var deviceUSBText = "USB";
var deviceDLNAText = "DLNA";
var pvrList = "PVR";
var emptyListInfo = top.emptyListInfo;
var eb_tips = top.eb_tips;
var eb_info = top.eb_quit_info;;
var eb_yes = top.eb_yes;
var eb_no = top.eb_no;

var focusDisplayFlag = true;

var deviceListContainer = "";
var listIndex = 0;
var deviceList = "";
var window_name = "win";
var enterFlag = 0;//[0] 1st time; [1] not 1st time
var MAX_IN_ONE_PAGE = 4;
var listStart = 0;
var listLength = 0;
var divCount = 0;

var usbList = "";
var dlnaList = "";
var pvrListLength = 0;	//xiehua 2014-06-09
var usbListLength = 0;
var dlnaListLength = 0;
var USB_TYPE = 0;
var DLNA_TYPE = 1;
var multimediaIndex = 0;
var focusIndex = 0;

var exitFlag = 0;//[0] = yes; [1] = no
var focusTab = 0;
var EXIT_BOX_AREA 	= 0;
var LIST_AREA		= 1;

var ENTER_DEFAULT   = -1;
var ENTER_USB_TYPE	= 0;
var ENTER_DLNA_TYPE = 1;
var ENTER_PVR_TYPE  = 2;

var multimedia = top.g_media;
var pvr = top.g_pvr;		//xiehua 2014-06-09

window.onunload = unInit;
document.onkeydown = keyProcess;
document.onnotify = notifyProcess;

function $(id)
{
    return document.getElementById(id);
}

function testLog(tmp)
{
	var str = "             => Areos: " + tmp;
	console.log(str);
}

function init()
{	
	top.g_temp = "media";
	top.g_isMediaCenter = top.NDM_Device_List;
	top.stopTimeout();
	initTextInfo();
	top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
	addMouseListener();
	for(var i = 0; i < MAX_IN_ONE_PAGE; i++)
	{
		top.g_listIndex[i] = "";
	}
	focusTab = LIST_AREA;
	listIndex = 0;
	listStart = 0;
	focusIndex = 0;

	var str = window.location.search;
	if(str != null && str != "")//return from mediaList.page
	{
		getDeviceList();
		testLog("not the 1st time enter device list page");
		if(str == "?media")
		{
			enterFlag = 0;
			//var tmp = str.substr(1);
			//getDeviceList();
			searchDeviceFocusIndex();
			focusIndex = listIndex - listStart;
		}
		else if(str == "?remove")
		{
			top.g_lastEnterType = ENTER_DEFAULT;
			//getDeviceList();
			testLog("not 1st time enter device page, but usb removed ");
		}
	}
	else//1st time enters the mediaList page
	{
		top.g_lastEnterType = ENTER_DEFAULT;
        if(top.bt_soundOutputShowFlag)
        {
            top.bluetooth.setBluetoothMute(1);
        }
		multimedia.changeSourceToMedia();
		getDeviceList();
		testLog("1st time enter device list page");
	}
	top.g_filePathDepth = 0;
	//xiehua 2014-06-09 add process code for pvr device
	if(listLength != 0)
	{
		$("focus").style.display = "block";
		for(var i = 0; i < listLength; i++)
		{
			createDiv(i);
		}
		$("noDeviceTip").style.display = "none";
		if(pvrListLength > 0)
		{
			fillPvrInfo(pvrList, 0, 0);
		}
		if(usbListLength > 0)
		{
			for(var i = pvrListLength; i < pvrListLength + usbListLength; i++)
			{
				fillInfo(usbList, i, i - pvrListLength);
			}
		}
		if(dlnaListLength > 0)
		{
			for(var i = pvrListLength + usbListLength; i < pvrListLength + usbListLength + dlnaListLength; i++)
			{
				fillInfo(dlnaList, i, i - pvrListLength - usbListLength);
			}
		}
	}
	else//no device connected
	{
		$("focus").style.display = "none";
		$("noDeviceTip").style.display = "block";
		arrowDisplay(-1);
		return;
	}
	refreshDeviceList(listStart);
	changeFocusPosition();
	changeDivStyle(listIndex, -1);
	
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(0);
    }
	
	testLog("device list page init done");
}

function unInit()
{
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
    if(top.bt_soundOutputShowFlag)
    {
        if(top.bt_soundOutPutValue == 1)
        {
            top.bluetooth.setBluetoothMute(0);
        }
    }
}

function initTextInfo()
{
	top.g_path = "";
	$("focus").style.display = "none";
	$("eb_tips").innerText = eb_tips;
	$("eb_info").innerText = eb_info;
	$("yesButton").innerText = eb_yes;
	$("noButton").innerText = eb_no;
	$("noDeviceTipInfo").innerText = emptyListInfo;
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2) toBack();//right key
	}
	$("arrowLeft").onmousedown = function(evt){
		if(evt.button == 0)//left key
			clickLeftArrow();
	}
	$("arrowRight").onmousedown = function(evt){
		if(evt.button == 0)//left key
			clickRightArrow();
	}
}

function keyProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_NETFLIX:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.g_temp = "";
			top.keyDownProcess(evt);
			return;
		case top.VK_PANEL_LONG_OK://add for 5in1 virtual key
		case top.VK_PANEL_OK:
		case top.VK_PANEL_UP:
		case top.VK_PANEL_DOWN:
		case top.VK_PANEL_LEFT:
		case top.VK_PANEL_RIGHT:
		case top.VK_POWER://power
		case top.VK_MUTE://mute
			top.keyDownProcess(evt);
			return;
		case top.VK_VOLUME_UP://volume up
		case top.VK_VOLUME_DOWN://volume down
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = 'block';
			top.globleShow.focus();
			//top.startVolumeTimer();
			break;
		case top.VK_UP:
			toUp();
			break;
		case top.VK_DOWN:
			toDown();
			break;
		case top.VK_RIGHT:	
			toRight();
			break;
		case top.VK_LEFT:
			toLeft();
			break;
		case top.VK_ENTER:
			toOK();
			break;
		case top.VK_TV:
			switch(top.g_lastEnterType)
			{
				case ENTER_USB_TYPE:
				case ENTER_DLNA_TYPE:
					//usb or dlna uninit
					multimedia.deviceExitUninit();
					break;
				case ENTER_PVR_TYPE:
					//pvr uninit
					pvr.pvrExitUninit();
					break;
				case ENTER_DEFAULT:
					break;
			}
			top.g_lastEnterType = ENTER_DEFAULT;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.toRestoreSource(1, 0);
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_remindWord = "TvHotKey";
			top.$("main").src = "intermediate.html";
			top.main.focus();
			top.$("operatePage").src = "";
			break;
		case top.VK_BACK:
			toBack();
			break;
		case top.VK_MENU:
		case top.VK_EXIT:
			toHomePage();
			break;
			
		default:
			break;
	}
	return ret;
}

function notifyProcess(evt)
{
	var msg = evt.which;
	var value = evt.modifiers;
	testLog("----------- GET MSG[" + msg + "] --------------");
	switch(msg)
	{
		case top.E_MEDIA_USB_INSERTED:
			testLog("----------- device recv PLUG IN!!!! --------------");	
			devicePlugIn();
			displayFocusBox(0);
			top.systemEventProc(evt);
			//testLog("----------- THE USB DEVICE PLUG IN!!!! --------------");	
			break;
		case top.E_PVR_DISK_UNPLUG:
			testLog("----------- THE plug out E_PVR_DISK_UNPLUG!!!! --------------");
		case top.E_DLNA_DEVICE_REMOVE:
			testLog("----------- THE plug out E_DLNA_DEVICE_REMOVE!!!! --------------");
		case top.E_DLNA_CURRENT_DEVICE_REMOVE:
			testLog("----------- THE plug out E_DLNA_CURRENT_DEVICE_REMOVE!!!! --------------");
		case top.E_MEDIA_USB_REMOVE:
			testLog("----------- THE plug out E_MEDIA_USB_REMOVE!!!! --------------");
		case top.E_MEDIA_USB_REMOVE_OTHER:
			testLog("----------- THE plug out E_MEDIA_USB_REMOVE_OTHER!!!! --------------");
			devicePlugOut();
			break;
		case top.E_DLNA_DEVICE_INSERT:
			testLog("------------- THE DLNA DEVICE PLUG IN!!!! --------------");
			devicePlugIn();
			break;
		case top.E_READY_TO_CHANGE_SCART:
		case top.E_READY_TO_CHANGE_CEC:
			switch(top.g_lastEnterType)
			{
				case ENTER_USB_TYPE:
				case ENTER_DLNA_TYPE:
					//usb or dlna uninit
					multimedia.deviceExitUninit();
					break;
				case ENTER_PVR_TYPE:
					//pvr uninit
					pvr.pvrExitUninit();
					break;
				case ENTER_DEFAULT:
					break;
			}
			top.g_lastEnterType = ENTER_DEFAULT;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.toRestoreSource(2, value);
			top.$("main").src = "channelPlay.html";
			//top.systemEventProc(evt);
			return;
		case top.E_APP_PROCESS_INITIALIZATION:
			switch(top.g_lastEnterType)
			{
				case ENTER_USB_TYPE:
				case ENTER_DLNA_TYPE:
					//usb or dlna uninit
					multimedia.deviceExitUninit();
					break;
				case ENTER_PVR_TYPE:
					//pvr uninit
					pvr.pvrExitUninit();
					break;
				case ENTER_DEFAULT:
					break;
			}
			top.g_lastEnterType = ENTER_DEFAULT;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.toRestoreSource(0, 0);//remove para
			top.g_temp = "";
			top.systemEventProc(evt);
			break;
		default:
			top.systemEventProc(evt);
			break;
	}
}

function createDiv(count)
{
	var div1 = document.createElement("div");
	var div2 = document.createElement("div");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var image = document.createElement("img");
	div1.id = window_name + count;
	div2.id = "infoBar";
	span1.id = "span1";
	span2.id = "span2";
	image.id = "deviceImg";
	span1.className = "spanInfo_1_static";
	span2.className = "spanInfo_2";
	div1.className = "device";
	div2.className = "deviceInfo";
	image.className = "imgInfo";
	div1.appendChild(div2);
	div1.appendChild(image);
	div2.appendChild(span1);
	div2.appendChild(span2);
	div1.style.left = (leftDistance + divWidth * count) + "px";
	div1.setAttribute("deviceIndex", divCount);
	document.getElementById("mainDiv").appendChild(div1);
	div1.onclick = function(evt){
		if(evt.button == 0)//left key
		{
			clickDeviceList(parseInt(this.getAttribute("deviceIndex")));
			evt.stopPropagation();
		}
	};
	divCount++;
}
 
function removeDiv(count)
{
	var TmpDiv = document.getElementById(window_name + count);  
	document.getElementById("mainDiv").removeChild(TmpDiv);
	divCount--;
} 

function arrowDisplay(startIndex)
{
	if(startIndex == -1)
	{
		$("arrowLeft").style.display = "none";
		$("arrowRight").style.display = "none";
		return;
	}
	$("arrowLeft").style.display = (startIndex == 0) ? "none" : "block";
	$("arrowRight").style.display = (startIndex + MAX_ONE_PAGE < listLength) ? "block" : "none";
}

function fillInfo(list, count, listIndex)
{
	var name = window_name + count;
	var contentSpanList = $(name).getElementsByTagName("span");
	var contentImg = $(name).getElementsByTagName("img");
	//use api to abtain the device infolist
	contentSpanList[0].innerText = list[listIndex].name;
	testLog("device list fill device name[" + list[listIndex].name + "]");
	if(list[listIndex].type == USB_TYPE)
	{
		contentImg[0].src = "images/USB_2.png";
		contentSpanList[1].innerText = deviceUSBText;
	}
	else
	{
		contentImg[0].src = "images/DLNA_2.png";
		contentSpanList[1].innerText = deviceDLNAText;
	}
}

function fillPvrInfo(pvrname, count, listIndex)
{
	var name = window_name + count;
	var contentSpanList = $(name).getElementsByTagName("span");
	var contentImg = $(name).getElementsByTagName("img");
	//use api to abtain the device infolist
	contentSpanList[0].innerText = pvrname;
	contentImg[0].src = "images/USB_2.png";
	contentSpanList[1].innerText = deviceUSBText;
}

function getDeviceList()
{
	pvrListLength = pvr.getPvrDeviceStatus() ? 1 : 0;
	if(multimedia.getDlnaDeviceStatus())
	{
		dlnaList = multimedia.getDlnaListInfo();
		dlnaListLength = dlnaList.length;
	}
	else
	{
		dlnaList = "";
		dlnaListLength = 0;
	}
	if(multimedia.deviceStatus())
	{
		usbList = multimedia.getDiskListInfo();
		usbListLength = usbList.length;
	}
	else
	{
		usbList = "";
		usbListLength = 0;
	}
	listLength = pvrListLength + usbListLength + dlnaListLength;
	return;
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

function getKeyFramse(index)
{
	var styleSheet = document.styleSheets[index];
	var keyframesRule = [];
	[].slice.call(styleSheet.cssRules).forEach(function(item){
	    if(item.type === CSSRule.WEBKIT_KEYFRAMES_RULE) 
	    {
	    	keyframesRule.push(item);
	    }
	});
  	return keyframesRule;
}

function modifyScrollDistance(animate, distance1, distance2)
{
	var animateIndex = 0;
	var tmp = 0;
	var flag = false;
	for(var i = 0; i < document.styleSheets.length; i++)
	{
		tmp = getKeyFramse(i);
		for(var j = 0; j < tmp.length; j++)
		{
			if(tmp[j].name == animate)
			{

				animateIndex = j;
				flag = true;
				break;
			}
		}
		if(flag) break;
	}
	tmp[animateIndex].deleteRule('0%');
	tmp[animateIndex].deleteRule('100%');
	var rule1 = "0% {left:" + distance1 + "px;}";
	var rule2 = "100% {left:-" + distance2 + "px;}";
	tmp[animateIndex].insertRule(rule1, 0);
	tmp[animateIndex].insertRule(rule2, 1);
}

function changeDivStyle(index_1, index_2)
{
	if(index_1 != -1)
	{
		$(window_name + index_1).style.zIndex = 11;
		if($(window_name + index_1).getElementsByTagName("img")[0].src 
			== "file:///applications/webkit-resource/ui/images/USB_2.png")
		{
			$(window_name + index_1).getElementsByTagName("img")[0].src = "images/USB.png";
		}
		else if($(window_name + index_1).getElementsByTagName("img")[0].src 
			== "file:///applications/webkit-resource/ui/images/DLNA_2.png")
		{
			$(window_name + index_1).getElementsByTagName("img")[0].src = "images/DLNA.png";
		}
		if(isOverflowed($(window_name + index_1).getElementsByTagName("span")[0]))
		{
			modifyScrollDistance("scroll_name", 
				$(window_name + index_1).getElementsByTagName("span")[0].clientWidth, 
				$(window_name + index_1).getElementsByTagName("span")[0].scrollWidth);
			$(window_name + index_1).getElementsByTagName("span")[0].className = "spanInfo_1_animate";
		}
		else
		{
			$(window_name + index_1).getElementsByTagName("span")[0].className = "spanInfo_1_static";
		}
		$(window_name + index_1).getElementsByTagName("span")[0].style.color = "#e5e5e5";
		$(window_name + index_1).getElementsByTagName("span")[1].style.color = "#a5a5a5";
	}
	if(index_2 != -1)
	{
		$(window_name + index_2).style.zIndex = 10;
		if($(window_name + index_2).getElementsByTagName("img")[0].src 
			== "file:///applications/webkit-resource/ui/images/USB.png")
		{
			$(window_name + index_2).getElementsByTagName("img")[0].src = "images/USB_2.png";
		}
		else if($(window_name + index_2).getElementsByTagName("img")[0].src 
			== "file:///applications/webkit-resource/ui/images/DLNA.png")
		{
			$(window_name + index_2).getElementsByTagName("img")[0].src = "images/DLNA_2.png";
		}
		$(window_name + index_2).getElementsByTagName("span")[0].className = "spanInfo_1_static";
		$(window_name + index_2).getElementsByTagName("span")[1].style.color = "#777777";
	}
}

function changeFocusPosition()
{
	$("focus").style.left = leftDistance - 12 + (focusIndex * divWidth) + "px";
}

function refreshDeviceList(startIndex)
{
	for(var i = startIndex; i < listLength; i++)
	{
		$(window_name + i).style.left = (leftDistance + divWidth * (i - startIndex)) + "px";
	}
	if(startIndex - 1 >= 0)
	{
		for(var i = startIndex - 1; i >= 0; i--)
		{
			$(window_name + i).style.left = (leftDistance - (divWidth * 1)) + "px";
		}
	}
	arrowDisplay(startIndex);
}

function setDeviceInit(currentType)
{
	if(top.g_lastEnterType == currentType)//do not uninit
	{
		return;
	}
	switch(top.g_lastEnterType)
	{
		case ENTER_USB_TYPE:
		case ENTER_DLNA_TYPE://usb or dlna uninit
			multimedia.deviceExitUninit();
			break;
		case ENTER_PVR_TYPE://pvr uninit
			pvr.pvrExitUninit();
			break;
		case ENTER_DEFAULT:
			break;
	}
	switch(currentType)
	{
		case ENTER_USB_TYPE:
		case ENTER_DLNA_TYPE:
			top.g_lastEnterType = currentType;
			multimedia.setEnterDeviceType(currentType);
			break;
		case ENTER_PVR_TYPE:
			top.g_lastEnterType = ENTER_PVR_TYPE;
			//pvr init
			pvr.pvrEntryInit();
			break;
	}
}

function searchDeviceFocusIndex()
{
	listIndex = 0;
	listStart = 0;
	if(top.g_lastEnterType == ENTER_PVR_TYPE)
	{
		return;
	}
	if(top.g_deviceInfo.path != null && top.g_deviceInfo.path != "")
	{
		if(top.g_deviceInfo.type == USB_TYPE)
		{
			for(var i = 0; i < usbListLength; i++)
			{
				if(usbList[i].path == top.g_deviceInfo.path)
				{
					listIndex = i + pvrListLength;
					break;
				}
			}
		}
		else
		{
			for(var i = 0; i < dlnaListLength; i++)
			{
				if(dlnaList[i].path == top.g_deviceInfo.path)
				{
					listIndex = i + usbListLength + pvrListLength;
					break;
				}
			}
		}
		listStart = calculateStartIndex(listIndex);
		return;
	}
}

function calculateStartIndex(index)
{
	if(index + MAX_ONE_PAGE < listLength)
	{
		return index;
	}
	else
	{
		return (listLength - MAX_ONE_PAGE) > 0 ? listLength - MAX_ONE_PAGE : 0;
	}
}

function devicePlugIn()
{	
	testLog("device plug in!");
	listStart = 0;
	listIndex = 0;
	getDeviceList();
	testLog("device list length: " + listLength);
	if(listLength != 0)
	{
		if(focusDisplayFlag)
		{
			$("focus").style.display = "block";
		}
		$("noDeviceTip").style.display = "none";
		if(divCount <= listLength)
		{
			for(var i = divCount; i < listLength; i++)
			{
				createDiv(i);
			}
		}
		else 
		{
			for(var i = divCount; i > listLength; i--)
			{
				removeDiv(i - 1);
			}
		}
		if(pvrListLength > 0)
		{
			fillPvrInfo(pvrList, 0, 0);
		}
		for(var i = pvrListLength; i < pvrListLength + usbListLength; i++)
		{
			fillInfo(usbList, i, i - pvrListLength);
		}
		for(var i = pvrListLength + usbListLength; i < pvrListLength + usbListLength + dlnaListLength; i++)
		{
			fillInfo(dlnaList, i, i - pvrListLength - usbListLength);
		}
		focusIndex = 0;
		changeFocusPosition();
		refreshDeviceList(0);
		changeDivStyle(0, -1);
	}
	else//no device connected
	{
		for(var i = divCount; i > 0; i--)
		{
			removeDiv(i - 1);
		}
		$("focus").style.display = "none";
		$("noDeviceTip").style.display = "block";		
		arrowDisplay(-1);
	}
}

function devicePlugOut()
{
	testLog("device plug out!");
	listStart = 0;
	listIndex = 0;
	getDeviceList();
	testLog("device list length: " + listLength);
	if(listLength != 0)
	{
		if(focusDisplayFlag)
		{
			$("focus").style.display = "block";
		}
		$("noDeviceTip").style.display = "none";
		if(divCount <= listLength)
		{
			for(var i = divCount; i < listLength; i++)
			{
				createDiv(i);
			}
		}
		else 
		{
			for(var i = divCount; i > listLength; i--)
			{
				removeDiv(i - 1);
			}
		}
		if(pvrListLength > 0)
		{
			fillPvrInfo(pvrList, 0, 0);
		}
		for(var i = pvrListLength; i < pvrListLength + usbListLength; i++)
		{
			fillInfo(usbList, i, i - pvrListLength);
		}
		for(var i = pvrListLength + usbListLength; i < pvrListLength + usbListLength + dlnaListLength; i++)
		{
			fillInfo(dlnaList, i, i - pvrListLength - usbListLength);
		}
		focusIndex = 0;
		changeFocusPosition();
		refreshDeviceList(0);
		changeDivStyle(0, -1);
	}
	else//no device connected
	{
		for(var i = divCount; i > 0; i--)
		{
			removeDiv(i - 1);
		}
		$("focus").style.display = "none";
		$("noDeviceTip").style.display = "block";		
		arrowDisplay(-1);
	}
}

function clickLeftArrow()
{
	if(listStart - MAX_ONE_PAGE >= 0)//can turn to next page
	{
		listStart -= MAX_ONE_PAGE;
		listIndex -= MAX_IN_ONE_PAGE;
		changeDivStyle(listIndex, listIndex + MAX_IN_ONE_PAGE);
	}
	else
	{
		listStart = 0;
		changeDivStyle(-1, listIndex);
		listIndex = 0;
		changeDivStyle(listIndex, -1);
	}
	changeFocusPosition();
	refreshDeviceList(listStart);
}

function clickRightArrow()
{
	if(listStart + MAX_ONE_PAGE < listLength)//can turn to next page
	{
		listStart += MAX_ONE_PAGE;
		listIndex += MAX_IN_ONE_PAGE;
		changeDivStyle(listIndex, listIndex - MAX_IN_ONE_PAGE);
	}
	else
	{
		listStart = listLength - MAX_ONE_PAGE;
		changeDivStyle(-1, listIndex);
		listIndex = listLength - 1;
		changeDivStyle(listIndex, -1);
	}
	changeFocusPosition();
	refreshDeviceList(listStart);
}

function clickDeviceList(index)
{
	if((index > 0 && pvrListLength == 1)
		|| (index >= 0 && pvrListLength == 0))
	{
		multimediaIndex = pvrListLength ? index - 1 : index;
		if(multimediaIndex < usbListLength)
		{
			top.g_deviceInfo = usbList[multimediaIndex];
		}
		else if(multimediaIndex >= usbListLength && multimediaIndex < usbListLength + dlnaListLength)
		{
			top.g_deviceInfo = dlnaList[multimediaIndex - usbListLength];
		}
	}
	if(index == 0 && pvrListLength == 1)
	{
		setDeviceInit(ENTER_PVR_TYPE);
		top.$("main").src = "pvrMediaList.html";
	}
	else
	{
		setDeviceInit(top.g_deviceInfo.type);
		top.g_BGMmdiaFolderPath = ""//add yums
		top.$("main").src = "mediaList.html";
	}
}

function toBack()
{
	testLog(" in to back function");
	top.g_isMediaCenter = top.NDM_Others;
	switch(top.g_lastEnterType)
	{
		case ENTER_USB_TYPE:
		case ENTER_DLNA_TYPE:
			//usb or dlna uninit
			multimedia.deviceExitUninit();
			break;
		case ENTER_PVR_TYPE:
			//pvr uninit
			pvr.pvrExitUninit();
			break;
		case ENTER_DEFAULT:
			break;
	}
	top.g_lastEnterType = ENTER_DEFAULT;
	multimedia.toRestoreSource(0, 0);//remove para
	top.g_temp = "";
	if(!top.isFromOptionIntoUsb)
	{
		if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
		{
			top.$("main").src = "homePageIndex.html?tv&media";
		}
		else
		{
			top.$("main").src = "homePageVP.html?tv&media";
		}
		if(top.hotkeysIntoUSB == true)
		{
			top.$("main").src = "channelPlay.html";
			top.hotkeysIntoUSB = false;
		}
	}
	else
	{
		top.$("main").src = "channelPlay.html";
	}
	top.main.focus();
}

function toHomePage()
{
	switch(top.g_lastEnterType)
	{
		case ENTER_USB_TYPE:
		case ENTER_DLNA_TYPE:
			//usb or dlna uninit
			multimedia.deviceExitUninit();
			break;
		case ENTER_PVR_TYPE:
			//pvr uninit
			pvr.pvrExitUninit();
			break;
		case ENTER_DEFAULT:
			break;
	}
	top.g_lastEnterType = ENTER_DEFAULT;
	top.g_isMediaCenter = top.NDM_Others;
	multimedia.toRestoreSource(0, 0);//remove para
	top.g_temp = "";
	if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
	{
		top.$("main").src = "homePageIndex.html?tv&media";
	}
	else
	{
		top.$("main").src = "homePageVP.html?tv&media";
	}
	top.main.focus();
}

function toOK()
{
	if(focusTab == LIST_AREA)
	{
		if($("noDeviceTip").style.display == "none")
		{
			if((listIndex > 0 && pvrListLength == 1)
				|| (listIndex >= 0 && pvrListLength == 0))
			{
				multimediaIndex = pvrListLength ? listIndex - 1 : listIndex;
				if(multimediaIndex < usbListLength)
				{
					top.g_deviceInfo = usbList[multimediaIndex];
				}
				else if(multimediaIndex >= usbListLength && multimediaIndex < usbListLength + dlnaListLength)
				{
					top.g_deviceInfo = dlnaList[multimediaIndex - usbListLength];
				}
			}

			if(listIndex == 0 && pvrListLength == 1)
			{
				setDeviceInit(ENTER_PVR_TYPE);
				top.$("main").src = "pvrMediaList.html";
			}
			else
			{
				setDeviceInit(top.g_deviceInfo.type);
				top.g_BGMmdiaFolderPath = ""//add yums
				top.$("main").src = "mediaList.html";
			}
		}
	}
	else
	{
		switch(exitFlag)
		{
			case 0://yes
				switch(top.g_lastEnterType)
				{
					case ENTER_USB_TYPE:
					case ENTER_DLNA_TYPE://usb or dlna uninit
						multimedia.deviceExitUninit();
						break;
					case ENTER_PVR_TYPE://pvr uninit
						pvr.pvrExitUninit();
						break;
					case ENTER_DEFAULT:
						break;
				}
				multimedia.toRestoreSource(0, 0);
				top.g_temp = "";
				if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
				{
					top.$("main").src = "homePageIndex.html?tv&media";
				}
				else
				{
					top.$("main").src = "homePageVP.html?tv&media";
				}

				top.main.focus();
				break;
			case 1://no
				focusTab = LIST_AREA;
				$("exitBox").style.display = "none";
				$("yesButton").style.borderColor = "#aaa";
				$("noButton").style.borderColor = "#aaa";
				break;
		}
	}
}

function toLeft()
{
	if(focusTab == LIST_AREA)
	{
		if(listStart == listIndex && listStart - 1 >= 0)
		{
			listStart--;
			refreshDeviceList(listStart);
			if(listIndex - 1 >= 0)
			{
				listIndex--;
				changeDivStyle(listIndex, listIndex + 1);
			}
			return;
		}
		if(listIndex - 1 >= 0)
		{
			listIndex--;
			focusIndex--;
			changeFocusPosition();
			changeDivStyle(listIndex, listIndex + 1);
		}
		return;
	}
	else
	{
		exitFlag = parseInt((exitFlag + 1) % 2, 10);
		switch(exitFlag)
		{
			case 0://yes
				$("focusButton").style.left = 174 + "px";
				break;
			case 1://no
				$("focusButton").style.left = 452 + "px";
				break;
		}
	}
}

function toRight()
{
	if(focusTab == LIST_AREA)
	{
		if(listIndex + 1 < listStart + MAX_ONE_PAGE && listIndex + 1 < listLength)
		{
			listIndex++;
			focusIndex++;
			changeFocusPosition();
			changeDivStyle(listIndex, listIndex - 1);
			return;
		}
		if(listStart + MAX_ONE_PAGE < listLength)
		{
			listStart++;
			refreshDeviceList(listStart);
			listIndex++;
			changeDivStyle(listIndex, listIndex - 1);
			return;
		}
		return;
	}
	else
	{
		exitFlag = parseInt((exitFlag + 1) % 2, 10);
		switch(exitFlag)
		{
			case 0://yes
				$("focusButton").style.left = 174 + "px";
				break;
			case 1://no
				$("focusButton").style.left = 452 + "px";
				break;
		}
	}
}

function toDown()
{
}

function leaveMediaPage()
{
	if(focusTab == LIST_AREA)
	{
		focusTab = EXIT_BOX_AREA;
		$("exitBox").style.display = "block";
		exitFlag = 0;//yes
		$("focusButton").style.left = 174 + "px";
	}
	else
	{
		focusTab = LIST_AREA;
		$("exitBox").style.display = "none";
		$("focusButton").style.left = 174 + "px";
	}
}

function displayFocusBox(flag)
{
	if(flag)//show
	{
		focusDisplayFlag = true;
		if(listLength > 0)
		{
			$("focus").style.display = 'block';
			$(window_name + listIndex).getElementsByTagName("span")[0].className = 
				isOverflowed($(window_name + listIndex).getElementsByTagName("span")[0])
				? "spanInfo_1_animate" : "spanInfo_1_static";
		}
		else
		{
			$("focus").style.display = 'none';
		}
	}
	else//hide
	{
		focusDisplayFlag = false;
		$("focus").style.display = 'none';
		if(listLength > 0)
		{
			$(window_name + listIndex).getElementsByTagName("span")[0].className = "spanInfo_1_static";
		}
	}
}

function bookingPreOperate()
{
	top.g_lastEnterType = ENTER_DEFAULT;
	top.g_isMediaCenter = top.NDM_Others;
	switch(top.g_lastEnterType)
	{
		case ENTER_USB_TYPE:
		case ENTER_DLNA_TYPE://usb or dlna uninit
			multimedia.deviceExitUninit();
			break;
		case ENTER_PVR_TYPE://pvr uninit
			pvr.pvrExitUninit();
			break;
		case ENTER_DEFAULT:
			break;
	}
	multimedia.toRestoreSource(0, 0);//remove para
	top.g_temp = "";
	return;
}

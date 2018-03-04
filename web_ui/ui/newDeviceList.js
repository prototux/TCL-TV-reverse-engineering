var frameTitleText = top.frameTitleText;//New Device
var listLength = 0;
var usbListLength = 0;
var pvrListLength = 0;
var MAX_LIST_COUNT = 7;
var MAX_LENGTH_ONE_PAGE = 0;
var SCROLL_MAX_HEIGHT = 840;
var FOCUS_TOP_DISTANCE = 153;
var FOCUS_HEIGHT_DISTANCE = 120;
var FADE_TIME_15 = 15000;
var clickIndexAttri = "indexAttri";
var fadeTimer = 0;
var usbList = "";
var deviceListSpan = "";
var deviceListLi = "";
var DELAY_TIME = 200;

var ENTER_DEFAULT   = -1;
var ENTER_USB_TYPE	= 0;
var ENTER_DLNA_TYPE = 1;
var ENTER_PVR_TYPE  = 2;

var listStartIndex = 0;
var listFocusIndex = 0;//max[0~6]

var multimedia = top.g_media;
var pvr = top.g_pvr;
var setting = top.g_setting;

//top.g_isMediaCenter = 0;
//top.g_newDeviceCount = 1;
window.onload = init;
window.onunload = unInit;
document.onkeydown = keyProcess;
document.onnotify = notifyProcess;
var keyOKFlag = 0;
function $(id)
{
    return document.getElementById(id);
}

function testLog(tmp)
{
	var str = "             => Areos: NDM " + tmp;
	console.log(str);
}

function init()
{
	initTextInfo();
	listStartIndex = 0;
	listFocusIndex = 0;
	top.g_newDeviceCount = multimedia.getNewDiskListCount();
	getDeviceList();
	refreshListInfo();
	addMouseListener();
	$("frameFocus").style.display = 'block';
	$("mainFrame").style.left = 1380 + "px";
	displayTimer();
	top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
	
	testLog("ndm init done");
}

function unInit()
{
	top.g_newDeviceCount = 0;
	top.bisUpgrade = 0; //yiling0609
	multimedia.getNewDiskListInfo(0);
	if(1 == top.g_EnterUsb)
	{
		top.g_EnterUsb = 0;
	}
}

function initTextInfo()
{
	$("frameTitle").innerText = frameTitleText;
	deviceListSpan = $("frameContainInfo").getElementsByTagName('span');
	deviceListLi = $("frameContainInfo").getElementsByTagName('li');
	return;
}

function notifyProcess(evt)
{
	var msg = evt.which;
	var value = evt.modifiers;
	testLog("ndm recv msg: " + msg);
	switch(msg)
	{
		case top.E_MEDIA_USB_INSERTED:
			testLog("----------- ndm recv PLUG IN!!!! --------------");	
			listStartIndex = 0;
			listFocusIndex = 0;
			top.g_newDeviceCount = multimedia.getNewDiskListCount();
			testLog("the ndm test 0");
			getDeviceList();
			testLog("the ndm test 1");
			refreshListInfo();
			testLog("the ndm test 2, top.g_isMediaCenter = " + top.g_isMediaCenter);
			testLog("the ndm test 2, top.NDM_Device_List = " + top.NDM_Device_List);
			if(top.g_isMediaCenter == top.NDM_Device_List)
			{
				testLog("the ndm test 3");
				top.$("main").contentWindow.devicePlugIn();
				testLog("the ndm test 4");
			}
			$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_TOP_DISTANCE * listFocusIndex + "px";
			displayTimer();
			testLog("the ndm test done");
			break;
		case top.E_MEDIA_USB_REMOVE:
			testLog("ndm recv usb removed, top.g_isMediaCenter = " + top.g_isMediaCenter);
			switch(top.g_isMediaCenter)
			{
				case top.NDM_Media_List:
				case top.NDM_VIDEO_Play:
				case top.NDM_Music_Play:
				case top.NDM_Pic_Play:
					top.$("main").contentWindow.notifyProcess(evt);
					toBack();
					break;
				case top.NDM_Device_List:
					top.$("main").contentWindow.notifyProcess(evt);
					break;
			}
			break;
		case top.E_MEDIA_USB_REMOVE_OTHER:
			testLog("ndm recv usb removed other value = " + value);
			if(value)//new device removed
			{
				listStartIndex = 0;
				listFocusIndex = 0;
				top.g_newDeviceCount = multimedia.getNewDiskListCount();
				getDeviceList();
				if(listLength == 0)
				{
					changeMainFocus();
					toBack();
					top.$("main").contentWindow.notifyProcess(evt);
					return;
				}
				refreshListInfo();
				if(!top.g_newDeviceCount)
				{
					for(var i = 0; i < MAX_LIST_COUNT; i++)
					{
						$('frameFocus').style.display = 'none';
						deviceListLi[i].style.display = 'none';
						deviceListSpan[i].style.display = 'none';
					}
				}
				$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_TOP_DISTANCE * listFocusIndex + "px";
				displayTimer();
			}
			top.$("main").contentWindow.notifyProcess(evt);
			break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_BOOKING_RECORD_START:
		case top.E_READY_TO_CHANGE_CEC:
			top.systemEventProc(evt);
			break;
		default:
		if (top.$("main").contentWindow.notifyProcess !=undefined)
        	top.$("main").contentWindow.notifyProcess(evt);
			//top.$("main").contentWindow.notifyProcess(evt);
			//changeMainFocus();
			//toBack();
			break;
	}
	return;
}

function keyProcess(evt)
{
	var keycode = evt.which;
	var value = evt.modifiers;
	switch (keycode)
	{
		case top.VK_PANEL_LONG_OK://add for 5in1 virtual key
		case top.VK_PANEL_OK:
		case top.VK_PANEL_UP:
		case top.VK_PANEL_DOWN:
		case top.VK_PANEL_LEFT:
		case top.VK_PANEL_RIGHT:
		case top.VK_POWER://power
			top.keyDownProcess(evt);
			return;
		case top.VK_UP:
			toUp();
			break;
		case top.VK_DOWN:
			toDown();
			break;
		case top.VK_RIGHT:
			//toRight();
			break;
		case top.VK_LEFT:
			//toLeft();
			break;
		case top.VK_ENTER:
			toOK();
			break;
		case top.VK_BACK:
		case top.VK_TV:
		case top.VK_SMARTTV:
		case top.VK_YOUTUBE://youtube
		case top.VK_EXIT:
        case top.VK_MENU:
			changeMainFocus();
			toBack();
			break;
	}
	return;
}

function getDeviceList()
{
	if(multimedia.deviceStatus())
	{
		usbList = multimedia.getNewDiskListInfo(top.g_newDeviceCount);
		usbListLength = usbList.length;
	}
	else
	{
		usbList = "";
		usbListLength = 0;
	}
	pvrListLength = (pvr.getPvrDeviceStatus() && usbListLength > 0) ? 1 : 0;
	listLength = pvrListLength + usbListLength;
	setListMaxLength();
	return;
}

function fillDiskListInfo()
{
	if(pvrListLength)
	{
		deviceListSpan[0].innerText = "PVR";
		deviceListLi[0].style.display = 'block';
		deviceListSpan[0].style.display = 'block';
	}
	for(var i = pvrListLength; i < listLength; i++)
	{
		deviceListLi[i].style.display = 'block';
		deviceListSpan[i].style.display = 'block';
		deviceListSpan[i].innerText = usbList[listStartIndex + i - pvrListLength].name;
	}
	for(var i = listLength; i < MAX_LIST_COUNT; i++)
	{
		deviceListLi[i].style.display = 'none';
		deviceListSpan[i].style.display = 'none';
		deviceListSpan[i].innerText = "";
	}
	return;
}

function initSource()
{
	if(top.recordStatusFlag == 1)
	{
		top.g_pvr.recordStop();
		top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		top.$("globleShow").contentWindow.hiddenRecord();
		top.pvrCurrentTime = 0;
		top.recordStatusFlag = 0;
		top.pvrTotalTime = 2 * 60 * 60;
	}
	else if(top.timeShiftStatusFlag == 1)
	{
		top.timeShiftStatusFlag = 0;
		top.g_pvr.timeshiftStop();
		top.g_pvr.returnToLive();//返回实时播放页面
		top.$("globleShow").contentWindow.hiddenTimeShift();
	}
	
	switch(top.g_isMediaCenter)
	{
		case top.NDM_Others:
			multimedia.changeSourceToMedia();
			break;
		case top.NDM_Device_List://device list
			if(top.g_lastEnterType == ENTER_PVR_TYPE)
			{
				pvr.pvrExitUninit();
			}
			else if(top.g_lastEnterType == ENTER_DLNA_TYPE || top.g_lastEnterType == ENTER_USB_TYPE)
			{
				multimedia.deviceExitUninit();
			}
			break;
		case top.NDM_Media_List://media list
			multimedia.deviceExitUninit();
			break;
		case top.NDM_DMR_Video://DMR video play
		case top.NDM_VIDEO_Play://video play
			top.$("globleShow").contentWindow.hiddenGlassRemind();
		case top.NDM_DMR_Music://DMR music play
		case top.NDM_Music_Play://music play
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			break;
		case top.NDM_DMR_Pic://DMR picture play
		case top.NDM_Pic_Play://picture play
			multimedia.pictureStop(1);
			multimedia.deviceExitUninit();
			break;
		case top.NDM_PVR_Play://pvr play
			pvr.mediaStop(0);
		case top.NDM_PVR_List://pvr list
			pvr.pvrExitUninit();
			break;
	}
	if(pvrListLength && !listStartIndex && !listFocusIndex)//enter pvr
	{
		top.g_lastEnterType = ENTER_PVR_TYPE;
		pvr.pvrEntryInit();
	}
	else
	{
		top.g_lastEnterType = ENTER_USB_TYPE;
		top.g_deviceInfo = usbList[listStartIndex + listFocusIndex - pvrListLength];
		multimedia.setEnterDeviceType(ENTER_USB_TYPE);//[0]usb  type
	}
	return;
}

function refreshListInfo()
{
	fillDiskListInfo();
	showScrollBar(listLength, listStartIndex);
	return;
}

function changeMainFocus()
{
    if (top.$("main").contentWindow.displayFocusBox !=undefined)
        top.$("main").contentWindow.displayFocusBox(1);
}

function displayTimer()
{
	clearTimeout(fadeTimer);
	fadeTimer = setTimeout(function(){
		if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")
		{
			toBack();
			return;
		}
		changeMainFocus();
		toBack();
		}, FADE_TIME_15);
}

function showScrollBar(length, start)
{
	if(length > MAX_LIST_COUNT)
	{
		$("frameScroll").style.display = "block";
		$("frameScrollBar").style.height = parseInt(SCROLL_MAX_HEIGHT * MAX_LIST_COUNT / length) + "px";
		$("frameScrollBar").style.top = parseInt(SCROLL_MAX_HEIGHT * start / length) + "px";
	}
	else
	{
		$("frameScroll").style.display = "none";
		$("frameScrollBar").style.height = 0 + "px";
		$("frameScrollBar").style.top =  0 + "px";
	}
}

function toOK()
{
	initSource();
	if(pvrListLength && !listStartIndex && !listFocusIndex)//enter pvr
	{
		top.$("main").src = "pvrMediaList.html";
	}
	else
	{
		top.g_deviceInfo = usbList[listStartIndex + listFocusIndex - pvrListLength];
		top.$("main").src = "mediaList.html";
	}
	clearTimeout(fadeTimer);
	keyOKFlag = 1;
	toBack();
	return;
}

function toBack()
{
	clearTimeout(fadeTimer);
	$("mainFrame").style.left = 1930 + "px";
	setTimeout(function(){//hide new device list page
		top.$("otherPage").src = "";
		if(1 == top.g_EnterUsb)
		{
			if(keyOKFlag == 0)
			{
				top.$("main").contentWindow.resetFocus();
				top.g_EnterUsb = 0;
			}
			else
			{
				keyOKFlag = 0;
				top.main.focus();
				top.setFrameFocusPage("main");
			}
		}
		else
		{
			top.main.focus();
			top.setFrameFocusPage("main");
		}
		}, 300);
	return;
}

function toUp()
{
	if(listFocusIndex - 1 >= 0 && listFocusIndex < MAX_LENGTH_ONE_PAGE)
	{
		listFocusIndex--;
		setListFocus(listFocusIndex, listFocusIndex + 1);
		$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_HEIGHT_DISTANCE * listFocusIndex + "px";
	}
	else if(listStartIndex > 0)
	{
		listStartIndex--;
		refreshListInfo();
	}
	displayTimer();
	return;
}

function toDown()
{
	if(listFocusIndex >= 0 && listFocusIndex + 1 < MAX_LENGTH_ONE_PAGE)
	{
		listFocusIndex++;
		setListFocus(listFocusIndex, listFocusIndex - 1);
		$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_HEIGHT_DISTANCE * listFocusIndex + "px";
	}
	else if(listStartIndex + MAX_LIST_COUNT < listLength)
	{
		listStartIndex++;
		refreshListInfo();
	}
	displayTimer();
	return;
}

function setListMaxLength()
{
	MAX_LENGTH_ONE_PAGE = (listLength > MAX_LIST_COUNT) ? MAX_LIST_COUNT : listLength;
}

function getStringLength(str) 
{
	var realLength = 0;
	var len = str.length;
	var charCode = -1;
	for(var i = 0; i < len; i++) 
	{
		charCode = str.charCodeAt(i);
		realLength += (charCode >= 0 && charCode <= 128) ? 1 : 2;
	}
	return realLength;
}

function setListFocus(currentIndex, lastIndex)
{
	if(currentIndex > -1)
	{
		var length = getStringLength(deviceListSpan[currentIndex].innerText);
		deviceListSpan[currentIndex].className = (length > 20) ? "listInfoStyle_animate" : "listInfoStyle_static";
	}
	if(lastIndex > -1)
	{
		deviceListSpan[lastIndex].className = "listInfoStyle_static";
	}
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < 10; i++)
		{
			deviceListSpan[i].className = "listInfoStyle_static";
		}
	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2) toBack();//right key
	}

	for(var i = 0; i < deviceListLi.length; i++)
	{
		deviceListLi[i].setAttribute(clickIndexAttri, i);
		deviceListLi[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickListFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	$("frameUpList").onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickUpArrowFunction();
			evt.stopPropagation();
		}
	}

	$("frameDownList").onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickDownArrowFunction();
			evt.stopPropagation();
		}
	}
}

function clickListFunction(index)
{
	listFocusIndex = index;
	$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_HEIGHT_DISTANCE * listFocusIndex + "px";
	setTimeout(function(){toOK();}, DELAY_TIME);
	return;
}

function clickUpArrowFunction()
{
	if(listStartIndex - MAX_LIST_COUNT >= 0)//can turn next page
	{
		listStartIndex -= MAX_LIST_COUNT;
	}
	else
	{
		listStartIndex = 0;
	}
	fillDiskListInfo();
}

function clickDownArrowFunction()
{
	if(listStartIndex + MAX_LIST_COUNT < listLength)//can turn next page
	{
		listStartIndex += MAX_LIST_COUNT;
	}
	else
	{
		listStartIndex = listLength - MAX_LIST_COUNT;
	}
	fillDiskListInfo();
}
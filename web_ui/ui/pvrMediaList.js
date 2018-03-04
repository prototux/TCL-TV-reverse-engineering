var focusHeight = 0;
var focusWidth  = 0;
var focusIndex  = 0;

var focusOptionIndex = 0;	//[0][1]
var focusOptionListIndex = 0;
var focusTopPosition = 138;
var focusLeftPosition = 31;
var focusOptionHeight = 100;
var focusOptionWidth = 492;
var focusOptionTopDistance = 103;
var focusOptionLeftDistance = 500;

var sortArray = top.sortArray;;
var emptyTipsInfo = top.emptyTipsInfo;
var emptyFolderInfo = top.emptyFolderInfo;
var sortName = top.sortName;
var infor_str = top.infor_str;
var pvr_str = top.pvrConName[0];

var VIDEO_TYPE = 2;

var iName = "iconColumn";	//	video column name: iconColumn0 iconColumn1 iconColumn2 iconColumn3 iconColumn4
var iUpArrowName = "arrowUpIcon";
var iDownArrowName = "arrowDownIcon";
var iUpArrowPvrList = "arrowUpPvrList";
var iDownArrowPvrList = "arrowDownPvrList";
var curListI = 0;					//	[0~2] current focus icon column index
var cLeftDis = 288;
var cRightDis = 1921;
var cMiddleDis = 1105;
var siName = "scrollBarI";
var siArea = "scrollAreaI";
var SCROLL_F_TOP	= 30;
var SCROLL_MAX_HEIGHT	= 912;

var LIST_AREA 						= 0;
var OPTION_AREA 					= 1;
var OPTION_DETAIL_AREA 		= 2;

var HC_I = 5;		//Horizontal Count Icon: number of icon on one row
var VC_I = 4;		//Vertical Count Icon: [4]picture/video: the number of one page on Vertical direction
var lCount = 0;	//List Count: Icon list: [0]~[20]

var listStart = 0;
var maxLength = 0;
var pageVCount = 0;				//[4]picture/video; the number of one page on Vertical direction
var listLength = 0;
var fileListDepth = 0;
var currentMediaType = 0;	//[0]all file [1]picture [2]video [3]music
var freshInfoTimer = 0;
var emptyDeviceFlag = 0;

var focusTab = LIST_AREA; //on LIST_AREA(0) OPTION_AREA(1) OPTION_DETAIL_AREA(2)
var currentList = "";

//option
var sortOrder = 0;//[0]name [1] date
//var parser = 0;//[0]normal [1]recursive

var listDivName = "iconColumnUL0";
var pvrListSpan = "";

var pvr 				= top.g_pvr;		//xiehua 2014-06-11
var multimedia 	= top.g_media;

var pageListCount = HC_I*VC_I;
var mediaOrPvr = 1;	//0:media 1:pvr

var clickOptionMenuLi_1 = "";
var clickOptionMenuLi_2 = "";
var clickIconListColn_0 = "";
var clickIndexAttri = "indexAttri";

var DELAY_TIME = 100;

document.onkeydown = 	keyProcess;
document.onnotify  = 	notifyProcess;

function $(id)
{
	return document.getElementById(id);
}

function init()
{	
	top.g_temp = "media";
	top.g_isMediaCenter = top.NDM_PVR_List;
	initTextInfo();
	addMouseListener();
	$('titleContent').innerText = top.g_deviceInfo.name;
	$('titleContent').innerText = pvr_str;
	pvrListSpan = $(listDivName).getElementsByTagName('span');
	//pvr.testLog("init(), title = "+top.g_deviceInfo.name);
	
	var str = window.location.search;
	if(str != null && str != "")	//get "?" after url
	{
		//pvr.testLog("init(), return to this page, str = "+str);
		if(str.substr(0, 1) != null && str.substr(0, 1) != "")
		{
			//currentMediaType = top.g_currentMediaType;
			currentMediaType = VIDEO_TYPE;	//video type only
			setMediaListPage();
		}
	}
	else	//go here!!!
	{
		focusTab = LIST_AREA;
		//pvr.testLog("init(), first to this page, str = "+str);
		initMediaListPage();
		if(currentList.length == 0)
		{
			$('focus').style.display = 'none';
			emptyDeviceFlag = 1;
			return;
		}
		resetFocusShape();
		//$(iUpArrowName).src = "images/Icon-T-Disable.png";
		$(iUpArrowPvrList).style.display = "none";
		pvrListSpan[0].style.color = "#ffffff";
		setIconListFocus(0, -1);
	}
	
	//initFocus();
}

function initTextInfo()
{
	$('sortName').innerText = sortName;
	$('emptyTipsInfo').innerText = emptyTipsInfo;
	$('sortTypeName').innerText = sortArray[0];
	$('sortTypeDate').innerText = sortArray[1];
	
	clickOptionMenuLi_1 = $('optionInfo').getElementsByTagName('li');
	clickOptionMenuLi_2 = $('sort').getElementsByTagName('span');
	clickIconListColn_0 = $('iconColumnUL0').getElementsByTagName('div');
}

function initFocus()
{
	$('focus').style.display = 'block';
	
	focusHeight = 228;
	focusWidth = 370;
	$('focus').style.top = 138 + "px";
	$('focus').style.left = focusLeftPosition + "px";
	$('focus').style.width = 316 + "px";
	$('focus').style.height = 228+ "px";
}

//1st enter the medialist page
function initMediaListPage()
{
	top.g_listArray = new Array(3);
	for(var i = 0; i < 3; i++)
	{
		top.g_listArray[i] = new Array(pageListCount);	//video list;
	}

	listStart  = 0;
	focusIndex = 0;
	currentMediaType = VIDEO_TYPE;	//video type only
	
	//pvr.testLog("initMediaListPage(), currentMediaType = "+currentMediaType);
	top.g_mediaFolderPath = top.g_deviceInfo.path;
	//pvr.testLog("initMediaListPage(), g_mediaFolderPath = "+top.g_mediaFolderPath);
	top.g_listArray[currentMediaType][fileListDepth] = getFileList(top.g_mediaFolderPath, listStart, -1);
	currentList = top.g_listArray[currentMediaType][fileListDepth];
	setPageListVCount();
	refreshFileList(currentList, "");
}

//return from playing page
function setMediaListPage()
{
	top.g_mediaFolderPath = top.g_deviceInfo.path;
	//removeLastIndex();
	//var s = top.g_listIndex[currentMediaType];
	curListF = 0;
	focusIndex = 0;
	focusTab = top.g_focusTab;

	//if(focusTab == LIST_AREA && (currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE))
	if(focusTab == LIST_AREA)
	{
		//pvr.testLog("setMediaListPage(), curFileName = "+top.g_currentMedia.name);
		listStart = getFileIndex(top.g_currentMedia, top.g_mediaList);
		//pvr.testLog("setMediaListPage(), listStart = "+listStart);
		//pvr.testLog("setMediaListPage(), length = "+top.g_mediaList.length);
		if(top.g_mediaList.length <= HC_I * VC_I)
		{
			//pvr.testLog("setMediaListPage(), 000, top.g_mediaList.length <= HC_I * VC_I");
			focusIndex = listStart;
			listStart = 0;
		}
		else if(parseInt(top.g_mediaList.length % HC_I) == 0)
		{
			//pvr.testLog("setMediaListPage(), 111, parseInt(top.g_mediaList.length % HC_I) == 0");
			if(listStart >= top.g_mediaList.length - HC_I * VC_I)
			{
				focusIndex = listStart - top.g_mediaList.length + HC_I * VC_I;
				listStart = top.g_mediaList.length - HC_I * VC_I;
			}
			else
			{
				focusIndex = parseInt(listStart % HC_I);
				listStart = listStart - parseInt(listStart % HC_I);
			}
		}
		else if(parseInt(top.g_mediaList.length % HC_I) != 0)
		{
			//pvr.testLog("setMediaListPage(), 222, parseInt(top.g_mediaList.length % HC_I) != 0");
			if(listStart >= top.g_mediaList.length - (VC_I - 1) * HC_I 
				- parseInt(top.g_mediaList.length % HC_I))
			{
				focusIndex = listStart - (top.g_mediaList.length - (VC_I - 1) * HC_I 
					- parseInt(top.g_mediaList.length % HC_I));
				listStart = top.g_mediaList.length - (VC_I - 1) * HC_I 
					- parseInt(top.g_mediaList.length % HC_I);
			}
			else
			{
				focusIndex = parseInt(listStart % HC_I);
				listStart = listStart - parseInt(listStart % HC_I);
			}
		}
		else
		{
			focusIndex = 0;
		}
		currentList = top.g_listArray[currentMediaType][fileListDepth];
		setPageListVCount();
		resetFocusShape();
		//pvr.testLog("initMediaPage(), focusIndex = "+focusIndex);
		//pvr.testLog("initMediaPage(), listStart = "+listStart);
		//pvr.testLog("initMediaPage(), listLength = "+listLength); 
		if(fileListDepth == 0)	//root path
		{
			refreshFileList(currentList, "");
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / HC_I, 10);
			//pvr.testLog("setMediaListPage(), hCount = "+hCount);
			//pvr.testLog("setMediaListPage(), vCount = "+vCount);
			showIScrollBar(getI(curListI), listLength, listStart);
			//pvr.testLog("setMediaListPage(), focusTopPosition = "+focusTopPosition);
			//pvr.testLog("setMediaListPage(), focusHeight = "+focusHeight);
			$('focus').style.top = (focusTopPosition + vCount * focusHeight) + "px";	
			$('focus').style.left = (focusLeftPosition + focusWidth * hCount) + "px";
			if(listStart == 0)
			{
				//$(iUpArrowName).src = "images/Icon-T-Disable.png";
				$(iUpArrowPvrList).style.display = "none";
			}
			if(listStart + HC_I*VC_I >= listLength)
			{
				//$(iDownArrowName).src = "images/Icon-B-Disable.png";
				$(iDownArrowPvrList).style.display = "none";
			}
			//pvr.testLog("setMediaListPage(), focus top = "+$('focus').style.top);
			//pvr.testLog("setMediaListPage(), focus left = "+$('focus').style.left);
			pvrListSpan[focusIndex].style.color = "#ffffff";
		}
	}
}

function getFileIndex(file, list)
{
	var tempname = file.name;
	var filename = tempname + ".pvr";
	//pvr.testLog("getFileIndex(), filename = "+file.name);
	for(var i = 0; i < list.length; i++)
	{
		if(file.name == list[i].name)
		{
			return i;
		}
	}
	return 0;
}

function keyProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	//pvr.testLog("keyProcess(), keycode = "+keycode);
	switch (keycode)
	{
		case top.VK_POWER://power
		case top.VK_MUTE://mute
			top.keyDownProcess(evt);
			return;
		case top.VK_VOLUME_UP://volume up
		case top.VK_VOLUME_DOWN://volume down
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
			top.globleShow.focus();
			//top.startVolumeTimer();
			break;
		case top.VK_ENTER:
			if(!emptyDeviceFlag)
			{
				toOK();
			}
			break;
		case top.VK_UP:
		case 38:
			if(!emptyDeviceFlag)
			{
				toUp();
			}
			break;
		case top.VK_DOWN:
		case 40:
			if(!emptyDeviceFlag)
			{
				toDown();
			}
			break;
		case top.VK_RIGHT:
		case 39:	
			
			if(!emptyDeviceFlag)
			{
				toRight();
				pvr.testLog("toRight()--------");
			}
			break;
		case top.VK_BACK: //back
			toBack();
			break;
		case top.VK_LEFT:
		case 37:
			if(!emptyDeviceFlag)
			{
				toLeft();
			}
			break;
		case top.VK_OPTION: //menu
			if(!emptyDeviceFlag)
			{
				toOption();
			}
			break;
		case top.VK_TV:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			pvr.pvrExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_remindWord = "TvHotKey";
			top.$("main").src = "intermediate.html";
			top.main.focus();
			top.$("operatePage").src = "";
			break;	
		case top.VK_EXIT:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			pvr.pvrExitUninit();
			multimedia.toRestoreSource(0, 0);
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
		case top.VK_SMARTTV:
		case top.VK_YOUTUBE://youtube
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			pvr.pvrExitUninit();
			multimedia.toRestoreSource(0, 0);
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
		case top.VK_MENU:
			toHomePage();
			break;
		default:
			break;
	}
	return ret;
}

function toHomePage()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	//switch3DFlag = false;
	top.$("globleShow").contentWindow.hiddenGlassRemind();
	top.$("main").onload = function()
	{
		pvr.mediaStop(0);
		pvr.pvrExitUninit();
		multimedia.toRestoreSource(0, 0);
		top.$("main").onload=function(){};
	}
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

//xiehua 2014-06-10 此方法需要修改
function notifyProcess(evt)
{
		var msg = evt.which;
		//pvr.testLog("pvrMediaList, notifyProcess(), msg = "+msg);
		switch(msg)
		{
			case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
			case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT		
			case top.E_POWER_OFF_TIMER://power off timer
				top.systemEventProc(evt);
				return;
			case top.E_BOOKING_PLAY_START://booking play start
			case top.E_BOOKING_RECORD_START://booking record start
			case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,
			case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start
				top.g_temp = "media";
				top.systemEventProc(evt);
				return;
				
			case top.E_MEDIA_EXIT_FOR_CEC_HDMI_PLAY: //Areos: add for cec
				top.g_searchFlag = 0;
				top.g_mediaList = "";
				top.g_mediaPosition = 0;
				top.g_currentMedia = "";
				top.g_path = "";
				top.g_folderPath = "";
				top.document.getElementById("mute").style.bottom = "90px"; //Areos
				//multimedia.toRestoreSource();//restore source to dtv or atv or ...
				window.location.href = "channelPlay.html";//返回媒体列表，传出当前播放的媒体的序卿
				break;
	
			case top.E_multimedia_DEVICE_INSERT:
				break;
			case top.E_multimedia_DEVICE_REMOVE:
				top.g_mediaPosition = 1;
				window.location.href = "deviceList.html";
				break;
			
			case top.E_MEDIA_USB_INSERTED://usb insert
				top.systemEventProc(evt);
				return;
				
			case top.E_MEDIA_USB_REMOVE://usb remove
				top.g_mediaPosition = 1;
				window.location.href = "deviceList.html";
				return;
			
			case top.E_PVR_DISK_UNPLUG:
				//pvr.testLog("THE USB DEVICE PLUG OUT!!!!");
				top.g_mediaPosition = 1;
				window.location.href = "deviceList.html";
				break;	
				
			case top.E_MEDIA_FIND_FILE_END: //file search end
				break;
				
			case top.E_MEDIA_DATA_READY://media list data ready
				return;
			case top.E_APP_PROCESS_INITIALIZATION:
				top.g_lastEnterType = -1;
				top.g_isMediaCenter = top.NDM_Others;
				multimedia.toRestoreSource(0, 0);
				top.g_temp = "";
				top.systemEventProc(evt);
				break;
			default:
				break;
		}
}

function toLeft()
{
	if(focusTab == LIST_AREA)
	{
		//if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
		{
			if(parseInt(focusIndex % HC_I, 10) != 0)
			{
				pvrListSpan[focusIndex].style.color = "#aaaaaa";
				setIconListFocus(-1, focusIndex);
				focusIndex--;
				setIconListFocus(focusIndex, -1);
				pvrListSpan[focusIndex].style.color = "#ffffff";
				var hCount = parseInt(focusIndex % HC_I, 10);
				$('focus').style.left = (focusLeftPosition + focusWidth * hCount) + "px";
				return;
			}
			else
			{
				//leaveCurList();
				return;
			}
		}
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		$('optionInfoList').style.display = "none";
		if($('sort').style.display == "block")
		{
			$('sort').style.display = "none";
		}
		focusOptionIndex = parseInt(focusOptionIndex % 2, 10);
		$('optionInfoFocus').style.top = focusOptionTopDistance	+ (focusOptionIndex * focusOptionHeight) + "px";
	}
}

function toRight()
{
	if(focusTab == LIST_AREA)
	{
		//if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)//pciture | video
		{
			if(listStart + focusIndex + 1 >= listLength)
			{
				return;
			}
			if(parseInt(focusIndex % HC_I, 10) != (HC_I - 1))
			{
				pvrListSpan[focusIndex].style.color = "#aaaaaa";
				setIconListFocus(-1, focusIndex);
				focusIndex++;
				setIconListFocus(focusIndex, -1);
				pvrListSpan[focusIndex].style.color = "#ffffff";
				var hCount = parseInt(focusIndex % HC_I, 10);
				$('focus').style.left = (focusLeftPosition + focusWidth * hCount) + "px";
				
			}
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		if((focusOptionIndex == 0)||(focusOptionIndex == 1))
		{
			focusTab = OPTION_DETAIL_AREA;
			resetFocusShape();
			$('optionInfoList').style.display = "block";
			if(parseInt((focusOptionIndex % 2), 10) == 0)
			{
				$('sort').style.display = "block";
				focusOptionListIndex = sortOrder;
			}
			$('optionInfoListFocus').style.top = focusOptionTopDistance + (focusOptionListIndex * focusOptionHeight) + "px";
		}
	}
}


function toUp()
{
	if(focusTab == LIST_AREA)
	{
		//if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)//pic & video
		{
			if(parseInt(focusIndex / HC_I, 10) == 0)	//the top 
			{
				if(listStart - HC_I >= 0)
				{
					//$(iDownArrowName).src = "images/Icon-B.png";
					$(iDownArrowPvrList).style.display = "block";
					listStart -= HC_I;
					//pvr.testLog("Up KEY, listStart = "+listStart);
					if(listStart == 0)
					{
						//$(iUpArrowName).src = "images/Icon-T-Disable.png";
						$(iUpArrowPvrList).style.display = "none";
					}
					lCount = pageListCount;
					maxLength = pageListCount-1;
					refreshFileList(currentList, (iName + "UL" + curListI));
					var row = parseInt(listLength / VC_I);
					var startRow = parseInt(listStart / VC_I);
					row = (parseInt(listLength % VC_I) == 0) ? row : row + 1;
					startRow = (parseInt(listStart % VC_I) == 0) ? startRow : startRow + 1;
					$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
						parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
				}
			}
			else
			{
				pvrListSpan[focusIndex].style.color = "#aaaaaa";
				setIconListFocus(-1, focusIndex);
				focusIndex = (focusIndex - HC_I) >= 0 ? focusIndex - HC_I : 0;
				setIconListFocus(focusIndex, -1);
				pvrListSpan[focusIndex].style.color = "#ffffff";
			}
			
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / HC_I, 10);
			$('focus').style.top = (focusTopPosition + vCount * focusHeight) + "px";
			$('focus').style.left = (focusLeftPosition + focusWidth * hCount) + "px";
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		//focusOptionIndex = parseInt((focusOptionIndex + 2) % 3, 10);
		//$('optionInfoFocus').style.top = focusOptionTopDistance + (focusOptionIndex * focusOptionHeight) + "px";
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		focusOptionListIndex = parseInt((focusOptionListIndex + 1) % 2, 10);
		$('optionInfoListFocus').style.top = focusOptionTopDistance + (focusOptionListIndex * focusOptionHeight) + "px";
	}
}

function toDown()
{
	if(focusTab == LIST_AREA)
	{
		//if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)//pic & video
		{
			if(parseInt(focusIndex / HC_I, 10) == VC_I - 1)	//	the bottom of the page
			{
				//pvr.testLog("Down KEY, the bottom of the page, focusIndex = "+focusIndex);
				//pvr.testLog("Down KEY, the bottom of the page, listLength = "+listLength);
				//pvr.testLog("Down KEY, the bottom of the page, listStart = "+listStart);
				//pvr.testLog("Down KEY, the bottom of the page, lCount = "+lCount);
				if(listStart + lCount + VC_I < listLength)
				{
					//pvr.testLog("Down KEY, 000, listStart + lCount + VC_I < listLength");
					//$(iUpArrowName).src = "images/Icon-T.png";
					$(iUpArrowPvrList).style.display = "block";
					listStart += HC_I;
					lCount = (listStart + lCount) > listLength ? lCount - HC_I + parseInt(listLength % HC_I, 10) : pageListCount;
					refreshFileList(currentList, (iName + "UL" + curListI));
					var row = parseInt(listLength / HC_I);
					var startRow = parseInt(listStart / HC_I);
					row = (parseInt(listLength % HC_I) == 0) ? row : row + 1;
					startRow = (parseInt(listStart % HC_I) == 0) ? startRow : startRow + 1;
					$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
						parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
						setIconListFocus(focusIndex, -1);
					//pvr.testLog("Down KEY, top = "+$(siName + getI(curListI)).style.top);
				}
				else if(parseInt((listStart + focusIndex) / HC_I, 10) == parseInt(listLength / HC_I, 10))
				{
					//pvr.testLog("Down KEY, 111, the end of the list...");
					return;
				}
				else if(listLength == (listStart + HC_I*VC_I))
				{
					//pvr.testLog("Down KEY, 222, the last line of the list...");
					return;
				}
				else
				{
					//pvr.testLog("Down KEY, 333, else...");
					//$(iDownArrowName).src = "images/Icon-B-Disable.png";
					$(iDownArrowPvrList).style.display = "none";
					listStart += HC_I;
					pvrListSpan[focusIndex].style.color = "#aaaaaa";
					setIconListFocus(-1, focusIndex);
					focusIndex = listLength - listStart - 1;
					setIconListFocus(focusIndex, -1);
					pvrListSpan[focusIndex].style.color = "#ffffff";
					refreshFileList(currentList, (iName + "UL" + curListI));
					var row = parseInt(listLength / HC_I);
					var startRow = parseInt(listStart / HC_I);
					row = (parseInt(listLength % HC_I) == 0) ? row : row + 1;
					startRow = (parseInt(listStart % HC_I) == 0) ? startRow : startRow + 1;
					$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
						parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
				}
			}
			else if(parseInt((listLength - 1 - listStart - focusIndex) / HC_I, 10) > 0)	//not the bottom of the list
			{
				//pvr.testLog("Down KEY, not the bottom of the page, focusIndex + HC_I = "+(focusIndex + HC_I));
				//pvr.testLog("Down KEY, not the bottom of the page, listLength - listStart  - 1 = "+(listLength - listStart  - 1));
				pvrListSpan[focusIndex].style.color = "#aaaaaa";
				setIconListFocus(-1, focusIndex);
				focusIndex = (focusIndex + HC_I) > listLength - listStart  - 1 ? 
											listLength - listStart  - 1 : focusIndex + HC_I;
				pvrListSpan[focusIndex].style.color = "#ffffff";
				setIconListFocus(focusIndex, -1);
				//pvr.testLog("not the bottom of the list, focusIndex = "+focusIndex);
			}
			else	//the bottom of the list
			{
				//pvr.testLog("Down KEY, do nothing and return...");
				return;
			}
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / HC_I, 10);
			$('focus').style.top = (focusTopPosition + vCount * focusHeight) + "px";
			$('focus').style.left = (focusLeftPosition + focusWidth * hCount) + "px";
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		focusOptionListIndex = parseInt((focusOptionListIndex + 1) % 2, 10);
		$('optionInfoListFocus').style.top = focusOptionTopDistance + focusOptionHeight * focusOptionListIndex + "px";
	}
}

function toOK()
{
	if(focusTab == LIST_AREA)
	{
		//if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
		{
			//if(currentList[listStart + focusIndex].type == VIDEO_TYPE)
			{
				clearTimeout(freshInfoTimer);
				top.g_currentMedia = currentList[listStart + focusIndex];
				top.g_mediaList = currentList;
				top.g_focusTab = focusTab;
				top.g_currentMediaType = currentMediaType;
				
				//pvr.testLog("OK KEY, curFileName = "+top.g_currentMedia.name);
				//var myListStart = getFileIndex(top.g_currentMedia, top.g_mediaList);
				//pvr.testLog("OK KEY, myListStart = "+myListStart);
				//document.location.href = "videoPlay.html";
				document.location.href = "pvrVideoPlay.html";
			}
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		toRight();
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		setSPOption();
	}
}

function toBack()
{
	//if((currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
	//	&& focusTab == LIST_AREA)
	if(focusTab == LIST_AREA)
	{
		//leaveCurList();
		document.location.href = "deviceList.html?media";
		//document.location.href = "deviceList.html";
	}
	else if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
	{
		if($('option').style.display == "block")//hide option menu
		{
			focusTab = lastFocusTab;
			$('sort').style.display = "none";
			//$('parser').style.display = "none";
			$('option').style.display = "none";
			$('optionInfoList').style.display = "none";
			$('optionInfoFocus').style.display = "none";	
		}
	}
	else
	{
		document.location.href = "deviceList.html?media";
	}
}

function setSPOption()
{
	if(focusOptionIndex == 0)//sort
	{
		pvr.setMediaFileSortOrder(focusOptionListIndex);
		$('optionInfoList').style.display = "none";
		$('sort').style.display = "none";
		$('sortType').innerText = sortArray[focusOptionListIndex];
		sortOrder = focusOptionListIndex;
	}
	else//parse
	{
		//multimedia.setMediaFileParser(focusOptionListIndex);
		//$('parser').style.display = "none";
		//$('parserType').innerText = parserArray[focusOptionListIndex];
		//parser = focusOptionListIndex;
	}
	focusTab = OPTION_AREA;
	resetFocusShape();
	focusOptionIndex = parseInt(focusOptionIndex % 2, 10);
	$('optionInfoFocus').style.top = focusOptionTopDistance + (focusOptionIndex * focusOptionHeight) + "px";
	initMediaListPage();
	lastFocusTab = MAIN_AREA;
}

function toOption()
{
	if($('option').style.display == "block")//hide option menu
	{
		focusTab = lastFocusTab;
		$('sort').style.display = "none";
		//$('parser').style.display = "none";
		$('option').style.display = "none";
		$('optionInfoList').style.display = "none";
		$('optionInfoFocus').style.display = "none";
	}
	else//show option menu
	{
		focusOptionIndex = 0;
		lastFocusTab = focusTab;
		focusTab = OPTION_AREA;
		resetFocusShape();
		sortOrder = pvr.getMediaFileSortOrder();//[0]name [1]date
		$('sortType').innerText = sortArray[sortOrder];
		$('option').style.display = "block";
		$('optionInfoFocus').style.display = "block";
	}
}

function showIScrollBar(num, length, start)
{
	var row = parseInt(length / HC_I);
	var startRow = parseInt(start / HC_I);
	row = (parseInt(length % HC_I) == 0) ? row : row + 1;
	startRow = (parseInt(start % HC_I) == 0) ? startRow : startRow + 1;
	if(row > VC_I)
	{
		//$(iDownArrowName).src = "images/Icon-B.png";
		$(iDownArrowPvrList).style.display = "block";
		$(siArea + num).style.display = 'block';
		$(siName + num).style.height = parseInt(SCROLL_MAX_HEIGHT * VC_I / row) + "px";
		$(siName + num).style.top =  SCROLL_F_TOP + parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
	}
	else
	{
		//$(iDownArrowName).src = "images/Icon-B-Disable.png";
		$(iDownArrowPvrList).style.display = "none";
		$(siArea + num).style.display = 'none';
		$(siName + num).style.height = 0 + "px";
		$(siName + num).style.top = SCROLL_F_TOP + "px";
	}
}
function hideIScrollBar(num)
{
	$(siArea + num).style.display = 'none';
	$(siName + num).style.height = 0 + "px";
	$(siName + num).style.top = 0 + "px";
}


function fillFileDiv(divName, type, list, start)
{
}

function fillIconDiv(divName, type, list, start)
{
	var listSpan = $(divName).getElementsByTagName('span');
	var listImg = $(divName).getElementsByTagName('img');
	var length = list.length;
	length = length - listStart;
	for(var i = 0; i < pageListCount; i++)
	{
		if(i > length - 1)
		{
			listSpan[i].style.display = "none";
			listImg[i].style.display = "none";
			continue;
		}
		listSpan[i].style.display = "block";
		listImg[i].style.display = "block";
		listSpan[i].innerText = list[start + i].name;
		listImg[i].src = "images/PVR_icon_2.PNG";
	}
}

//need remodify the para
function refreshFileList(list, divName)	//type: [2]video
{
	listLength = list.length;
	if(divName == "")
	{
		//if(currentMediaType == PIC_TYPE	|| currentMediaType == VIDEO_TYPE)//picture
		{
			//$('fileInfo').style.left = cRightDis + "px";
			//$(iName + getI(curListI)).style.left = cLeftDis + "px";
			showIScrollBar(getI(curListI), list.length, listStart);
			fillIconDiv((iName + "UL" + getI(curListI)), currentMediaType, list, listStart);
		}
	}
	else
	{
		fillIconDiv(divName, currentMediaType, list, listStart);
	}
	arrowIDisplay(list.length);
}

function refreshProgressBar()
{
	if(fileDuration > 0)
	{
		//do nothing
	}
	else
	{
		//$('duration').innerText = getMediaFileDuration(currentPlayingMusic.path);
	}
	
	if(fileDuration > 0)
	{
		$('progressBarUse').style.display = "block";
		
		elapsed = pvr.getNowPlayTime();
		if(elapsed > 0)
		{
			if(elapsed > fileDuration)
			{
				elapsed = fileDuration;
			}
			
			var progressBarPercent = parseInt(elapsed * 100 / fileDuration, 10);
			if(progressBarPercent <= 14)
			{
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
			}
			else
			{
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01.png";
			}
			$("startBar").style.width = progressBarPercent * BAR_LENGTH / 100 + "px";
			$("endBar").style.left = progressBarPercent * BAR_LENGTH / 100 - 15 + "px";
			$('progressBarUse').style.display = "block";
		}
		else
		{
			elapsed = 0;
			//$('progressBarUse').style.display = "none";
		}
		
		//$("elspased").innerText = doTime(elapsed);
	}
	else
	{
		fileDuration = 0;
		$('progressBarUse').style.display = "none";
	}
	
}

function resetFocusShape()
{
	if(focusTab == LIST_AREA) 
	{
		$('focus').style.display = 'block';
		
		//if((currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)) //on list: picture/video folder
		{
			focusHeight = 228;
			focusWidth = 370;
			$('focus').style.top = 138 + "px";
			$('focus').style.left = focusLeftPosition + "px";
			$('focus').style.width = 316 + "px";
			$('focus').style.height = 228 + "px";
			$('focus').style.backgroundImage = "url(images/Focus-picture.png)";
		}
	}
	else if(focusTab == OPTION_AREA) //on option
	{
		focusOptionHeight = 80;
		focusOptionTopDistance = 90;
		$('optionInfoFocus').style.top = focusOptionTopDistance + "px";
		$('optionInfoFocus').style.left = 0 + "px";
		$('optionInfoFocus').style.width = 540 + "px";
		$('optionInfoFocus').style.height = focusOptionHeight + "px";
		$('optionInfoFocus').src = "images/Focus_USB_1.png";
	}
	else if(focusTab == OPTION_DETAIL_AREA) //on option list
	{
		focusOptionHeight = 100;
		focusOptionTopDistance = 80;
		$('optionInfoFocus').src = "images/Focus_USB_1_.png";
		$('optionInfoListFocus').style.top = focusOptionTopDistance + "px";
		$('optionInfoListFocus').style.left = 0 + "px";
		$('optionInfoListFocus').style.width = 300 + "px";
		$('optionInfoListFocus').style.height = focusOptionHeight + "px";
	}
}

function setPageListVCount()
{
	if(currentList != null && currentList != "" && currentList[0] != null && currentList[0] != "")
	{
		listLength = top.g_listArray[currentMediaType][fileListDepth].length;	//xiehua need to modity
	}
	else
	{
		listLength = 0;
	}
	
	//if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)	//video & pic
	{
		if(parseInt(listLength / VC_I, 10) < VC_I)	//less than one page
		{
			maxLength = listLength - 1;
			lCount = listLength;
			pageVCount = parseInt(listLength / VC_I, 10);
		}
		else
		{
			maxLength = HC_I * VC_I - 1;
			lCount = HC_I * VC_I;
			pageVCount = VC_I;
		}
	}
}

function getI(tmp)
{
	return parseInt(tmp % 3, 10);
}

function getFileList(path, start, count)
{
	//count == [-1]: get all file 
	//count != [-1]: get the num of count files
	//pvr.testLog("getFileList(), type = "+top.g_deviceInfo.type);
	return pvr.getMediaFileList(top.g_deviceInfo.type, currentMediaType, path, start, count);
}

function getFileInfo(file)
{
	var info = pvr.getMediaVideoFileInfo(file.path);
	return info;
}

function arrowIDisplay(length)
{
	$(iUpArrowPvrList).style.display = (listStart == 0) ? 'none' : 'block';
	$(iDownArrowPvrList).style.display = (listStart + lCount < length) ? 'block' : 'none';
}


//添加焦点选中过长字符滚动
function setIconListFocus(currentIndex, lastIndex)
{
	if(currentIndex > -1)
	{
		if(isOverflowed(pvrListSpan[currentIndex]))
		{
			//modifyScrollDistance("move_i", pvrListSpan[currentIndex].clientWidth, pvrListSpan[currentIndex].scrollWidth);
			//pvrListSpan[currentIndex].className = "iconColumnInfoStyle_animate";
			resetScrollHtmlInner(pvrListSpan[currentIndex], "-webkit-marquee", "clip");
		}
		else
		{
			//pvrListSpan[currentIndex].className = "iconColumnInfoStyle_static";
			resetScrollHtmlInner(pvrListSpan[currentIndex], "hidden", "ellipsis");
		}	
	}
	if(lastIndex > -1)
	{
		//pvrListSpan[lastIndex].className = "iconColumnInfoStyle_static";
		resetScrollHtmlInner(pvrListSpan[lastIndex], "hidden", "ellipsis");
	}
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < 10; i++)
		{
			//pvrListSpan[i].className = "iconColumnInfoStyle_static";
			resetScrollHtmlInner(pvrListSpan[i], "hidden", "ellipsis");
		}
	}
}

//添加焦点选中过长字符滚动
function resetScrollHtmlInner(htmlTagList, displayStyle, overFlowStyle)
{
	htmlTagList.setAttribute("contentText", htmlTagList.innerHTML);
	htmlTagList.style.overflowX = displayStyle;
	htmlTagList.style.textOverflow = overFlowStyle;
	setTimeout(function(){htmlTagList.innerHTML = htmlTagList.getAttribute("contentText");}, 1);
}

//添加焦点选中过长字符滚动
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
//添加焦点选中过长字符滚动
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

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

//support mouse
function addMouseListener()
{
	//current page
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2) toBack();	//mouse right key
	}

	//pvr icon list
	for(var i = 0; i < clickIconListColn_0.length; i++)
	{
		clickIconListColn_0[i].setAttribute(clickIndexAttri, i);
		clickIconListColn_0[i].onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
			{
				clickIconListPvrFile(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	//pvr icon list up arrow
	$(iUpArrowPvrList).setAttribute(clickIndexAttri, i);
	$(iUpArrowPvrList).onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
			{
				clickIconListUpArrow(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
	}

	//pvr icon list down arrow
	$(iDownArrowPvrList).setAttribute(clickIndexAttri, i);
	$(iDownArrowPvrList).onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
			{
				clickIconListDownArrow(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
	}

	//first option menu
	for(var i = 0; i < clickOptionMenuLi_1.length; i++)
	{
		clickOptionMenuLi_1[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_1[i].onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
			{
				clickFirstOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	//second option menu
	for(var i = 0; i < clickOptionMenuLi_2.length; i++)
	{
		clickOptionMenuLi_2[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_2[i].onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
			{
				clickSecondOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}
}

function clickFirstOptionMenuFunction(index)
{
	if(focusTab != OPTION_AREA)
		return;
	//setOptionMenuFocus(-1, optionFocusIndex_1);
	//optionFocusIndex_1 = index;
	//$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
	//setOptionMenuFocus(optionFocusIndex_1, -1);
	setTimeout(function(){toRight();}, DELAY_TIME);
}

function clickSecondOptionMenuFunction(index)
{
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	//optionFocusIndex_2 = index;
	//$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
	console.log("index:"+index);
	focusOptionListIndex = index;
	setTimeout(function(){setSPOption();}, DELAY_TIME);
}

function clickIconListUpArrow(index)
{
	var row = 0;
	var startRow = 0;
	if(focusTab != LIST_AREA)
		return;
	if(listStart - VC_I * HC_I >= 0)
	{
		listStart -= VC_I * HC_I;
	}
	else
	{
		listStart = 0;
	}
	row = parseInt(listLength / HC_I);
	startRow = parseInt(listStart / HC_I);
	row = (parseInt(listLength % HC_I) == 0) ? row : row + 1;
	startRow = (parseInt(listStart % HC_I) == 0) ? startRow : startRow + 1;
	refreshFileList(currentList, (iName + "UL" + curListI));
	$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
		parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
}

function clickIconListDownArrow(index)
{
	var row = 0;
	var startRow = 0;
	if(focusTab != LIST_AREA)
		return;
	if(listStart + VC_I * HC_I < currentList.length)
	{
		listStart += VC_I * HC_I;
		row = parseInt(currentList.length / HC_I);
		startRow = parseInt(listStart / HC_I);
		row = (parseInt(currentList.length % HC_I) == 0) ? row : row + 1;
	}
	else
	{
		listStart = currentList.length - (currentList.length % (VC_I * HC_I));
		if(listStart + focusIndex >= currentList.length)
		{
			focusIndex = parseInt(currentList.length % (VC_I * HC_I));
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / HC_I, 10);
			$('focus').style.top = (focusTopPosition + vCount * focusHeight) + "px";
			$('focus').style.left = (focusLeftPosition + focusWidth * hCount) + "px";
		}
		row = parseInt(currentList.length / HC_I);
		startRow = parseInt(listStart / HC_I);
		row = (parseInt(currentList.length % HC_I) == 0) ? row : row + 1;
		startRow = (parseInt(listStart % HC_I) == 0) ? startRow : startRow + 1;

	}
	refreshFileList(currentList, (iName + "UL" + curListI));
	$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
		parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
}


function clickIconListPvrFile(index)
{
	//alert("clickIconListPvrFile(), index = "+index);
	if(focusTab != LIST_AREA)
		return;
	focusIndex = index;
	var hCount = parseInt(focusIndex % HC_I, 10);
	var vCount = parseInt(focusIndex / HC_I, 10);
	$('focus').style.top = (focusTopPosition + vCount * focusHeight) + "px";
	$('focus').style.left = (focusLeftPosition + focusWidth * hCount) + "px";

	setTimeout(function(){toOK();}, DELAY_TIME);
	return;
}
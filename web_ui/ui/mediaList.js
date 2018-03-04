var musicCtlWidth = 100;
var focusHeight = 0;
var focusWidth = 0;
var focusIndex = 0; //
var optionFocusIndex_1 = 0;//[0][1]
var optionFocusIndex_2 = 0;
var focusTopDistance = 108;
var focusLeftDistance = 288;
var focusMenuHeight = 150;
var focusMenuTopDistance = 120;
var focusOptionHeight = 100;
var focusOptionWidth = 492;
var focusOptionTopDistance = 103;
var focusOptionLeftDistance = 500;
var tipsBoxMiddleDistance = 313;
var tipsBoxDistance = 140;
var tipsBoxButtonWidth = 204;
var optionListName = "optionInfo";
var optionListContentName = "optionInfoContent";

var eb_tips = top.eb_tips;
var eb_yes = top.eb_yes;
var eb_no = top.eb_no;
var ok_button = top.ok_button;
var eb_info = top.eb_info;
var listLoadingInfo = top.listLoadingInfo;
var deviceTitleTipsText = top.deviceTitleTipsText;
var mainListArray = top.mainListArray;
var sortArray = top.sortArray;
var parserArray = top.parserArray;
var emptyTipsInfo = top.emptyTipsInfo;
var emptyFolderInfo = top.emptyFolderInfo;
var sortName = top.sortName;
var parserName = top.parserName;
var divx_str1 = top.divx_str1;
var divx_str2 = top.divx_str2;
var infor_str = top.infor_str;
var fileNameText = top.fileNameText;
var fileDateText = top.fileDateText;
var fileSizeText = top.fileSizeText;
var fileDirectorText = top.fileDirectorText;
var fileCopyrightText = top.fileCopyrightText;
var fileArtistText = top.fileArtistText;
var fileAlbumText = top.fileAlbumText;
var fileYearText = top.fileYearText;
var listSpanF = "";
var listSpanI = "";
var optionMenuImg = "";
var clickIndexAttri = "indexAttri";

var clickMenuLi = "";
var clickOptionLi_1 = "";
var clickOptionLi_2 = "";
var clickOptionMenuLi_1 = "";
var clickOptionMenuLi_2 = "";
var clickFileListFLi_0 = "";
var clickFileListFLi_1 = "";
var clickFileListFLi_2 = "";
var clickFileListFLi_3 = "";
var clickFileListCDiv_0 = "";
var clickFileListCDiv_1 = "";
var clickFileListCDiv_2 = "";

var ICON_TYPE = -1;
var ALL_TYPE = 0;
var PIC_TYPE = 1;
var VIDEO_TYPE = 2;
var MUSIC_TYPE = 3;
var PIC_INFO_TYPE = 4;
var VIDEO_INFO_TYPE = 5;
var MUSIC_INFO_TYPE = 6;

var fName = "fileColumn";// file column name: fileColumn0 fileColumn1 fileColumn2 fileColumn3
var iName = "iconColumn";
var fUpArrowName = "fileColumnUp";
var fDownArrowName = "fileColumnDown";
var iUpArrowName = "iconColumnUp";
var iDownArrowName = "iconColumnDown";
var curListF = 0;//[0~3] current focus file column index
var curListI = 0;//[0~2] current focus icon column index
var cSmallDis = 40;
var cLeftDis = 288;
var cRightDis = 1921;
var cMiddleDis = 1105;
var sfName = "scrollBarF";
var siName = "scrollBarI";
var sfArea = "scrollAreaF";
var siArea = "scrollAreaI";
var SCROLL_F_TOP	= 30;
var SCROLL_MAX_HEIGHT	= 912;
var ENTER_DLNA_TYPE = 1;

var MAIN_AREA 				= 0;
var LIST_AREA 				= 1;
var OPTION_AREA 			= 2;
var OPTION_DETAIL_AREA 		= 3;
var MUSIC_AREA 				= 4;
var OPTION_LIST_MAX			= 4;
var DIVX_REG_AREA           = 5;
var DIVX_DEREG_ARER         = 6;
var DIVX_DEREG_CONFIRM_AREA  = 7;
var TIPS_AREA				= 8;

var HC_I = 4;//Horizontal Count Icon: number of icon on one row
var VC_I = 4;//Vertical Count Icon: [4]picture/video: the number of one page on Vertical direction
var VC_F = 8;//Vertical Count Filelist: [8]all file/music: the number of one page on Vertical direction
var lCount = 0;//List Count: File list: [0]~[8]; Icon list: [0]~[16]
var listStart = 0;
var optionFirstListLength = 0;
var maxLength = 0;
var pageVCount = 0;//[4]picture/video [7]all file/music: the number of one page on Vertical direction
var listLength = 0;
var musicBGPlay = 0; //[0] not bg play [1] bg playing
var BGMStatus = 0;
var operateFlag = true;
var focusDisplayFlag = true;
var fileListDepth = 0;
var nowPlayingTime = 0;
var currentMediaType = 0;//[0]all file [1]picture [2]video [3]music
var previousMediaType = 0;
var musicCtlImgTag = 0;
var musicCtlSpanTag = 0;
var menuListDiv = 0;
var bgmPlayStatus = -1;
var iconFileEmptyTipsTimer = 0;
var progressBarTimer = 0;
var updateImgTimer = 0;
var freshInfoTimer = 0;
var emptyDeviceFlag = 0;
var menuTimer = 0;
var CLICK_DELAY_TIME = 200;
var DELAY_TIME_2 = 200;
var DELAY_TIME_3 = 3000;
var DELAY_TIME_15 = 15000;
var DELAY_TIME = 100;
var S_END		= 0;
var S_PLAY 		= 1;
var S_PAUSE 	= 2;

//playing
var currentPlayingMusic = 0;
var fileDuration = 0;
var elapsed = 0;

var focusTab = 0; //on MAIN_AREA LIST_AREA MUSIC_AREA OPTION_AREA OPTION_DETAIL_AREA
var lastFocusTab = 0;
var currentList = "";


//option
var sortOrder = 0;//[0]name [1] date
var parser = 0;//[0]normal [1]recursive
var SORT_TYPE = 0;
var PARSER_TYPE = 1;
var currentIsDLNAFlag = false;

//divx
var focusDivxIndex = 0;
var divxRegistFocus = 0;
var divxDeregistFocus = 0;
var divxDeregistConfirm = 0;
var playMusicIcon = [{name:'Play All Music', type:ICON_TYPE}];

//add for divx

var registrationTitleWords 	    = [top.sysOptions[10],top.sysAdOptions[0],top.sysAdOptions[1],top.sysAdOptions[2]];  //reg
var registWords					= top.sysRegistDes;
var okCancelWords				= top.okCancel;
var deregistrationTitleWords 	= [top.sysOptions[10],top.sysAdOptions[0],top.sysAdOptions[1],top.sysAdOptions[2]];  //dereg
var deregistWords 				= top.sysDregistDes;
var form_position_h				= 0;
var DIALOG_START				= 198;
var DIALOG_STEP					= 250;

var deregistConfirmTitleWords 	= [top.sysOptions[10],top.sysAdOptions[4],top.sysAdOptions[1],top.sysAdOptions[2]];
var deregistConfirmWords 		= top.deregistrationConfrimation;

//end divx

var multimedia 	= top.g_media;
var setting 	= top.g_setting;
window.onunload = unInit;
document.onnotify = notifyProcess;
//var divxActiveStatus = setting.divxActiveStatus();

//lqt---增加ChannelList页对媒体中心键的支持--3
var usbLock                     = 0;
var factory                     = top.g_factory;
var hotelEnable                 = 0;

function $(id)
{
    return document.getElementById(id);
}

function testLog(tmp)
{
	var str = "                   => Areos: " + tmp;
	console.log(str);
}

function init()
{	
	operateFlag = false;
	if(top.g_lastEnterType == ENTER_DLNA_TYPE)
	{
		currentIsDLNAFlag = true;
	}
	parser = multimedia.getMediaFileParser();//[0]normal [1]recursive
	top.g_temp = "media";
	top.g_isMediaCenter = top.NDM_Media_List;
	initTextInfo();
	top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
	addMouseListener();
	multimedia.stopThumbnailTask();

	/*
	musicBGPlay = multimedia.getBGMPlayStatus();// show music ctl panel
	if(musicBGPlay)
	{
		musicCtlImgTag = $('playCtl').getElementsByTagName('img');
		musicCtlSpanTag = $('playInfo').getElementsByTagName('span');//[0]music name; [1]music artist
		
		$('musicCtl').style.display = 'block';
		refreshMiniMusicCtl();
	}
	*/
	
	var str = window.location.search;
	if(str != null && str != "")//get "?" after url
	{
		if(str.substr(0, 1) != null && str.substr(0, 1) != "")
		{
			currentMediaType = top.g_currentMediaType;
			setMediaListPage();
			if(currentMediaType == PIC_TYPE)
			{
				multimedia.createThumbnailTask(top.g_mediaFolderPath, currentMediaType, 0);
			}
		}
		document.onkeydown = keyProcess;
	}
	else//
	{
		initMediaListPage();	
		if(parser == 1)
		{
			displayLoadingBox(1);
			operateFlag = false;
			multimedia.initUSBFileTree(top.g_deviceInfo.path);
			return;
		}

		currentList = getFileList(top.g_mediaFolderPath, listStart, -1);
		setPageListVCount();
		refreshFileList(currentList, "");
		
		if(currentList.length == 0)
		{
			$('focus').style.display = 'none';
			$('emptyTips').style.display = 'block';
			emptyDeviceFlag = 1;
			operateFlag = true;
			return;
		}
		resetFocusShape();
		$('fileInfo').style.display = 'none';
		//$('focus').style.top = (focusTopDistance + focusIndex * focusHeight) + "px";
	}
	operateFlag = true;
	
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
        {
            setting.setMEMC(0);
        }
}

function initTextInfo()
{
	optionFirstListLength = 3;
	$('laodingInfo').innerText = listLoadingInfo;
	$('titleContent').innerText = top.g_deviceInfo.name;
	$(optionListName + '0').innerText = sortName;
	$(optionListName + '1').innerText = parserName;
	$('emptyTipsInfo').innerText = emptyTipsInfo;
	$('emptyListInfo').innerText = emptyTipsInfo;
	$('emptyFolderInfo').innerText = emptyFolderInfo;
	$('iconListEmptyTipsInfo').innerText = emptyTipsInfo;
	$(optionListName + '2').innerText = divx_str1;
	$(optionListName + '3').innerText = divx_str2;
	$('titleTips').innerText = currentIsDLNAFlag ? "" : deviceTitleTipsText;
	$('info_str').innerText = infor_str;
	$('menu_all_file').innerText = mainListArray[0];
	$('menu_picture').innerText = mainListArray[1];
	$('menu_video').innerText = mainListArray[2];
	$('menu_music').innerText = mainListArray[3];
	menuListDiv = $('menu').getElementsByTagName('div');
	optionMenuImg = $("optionFirstUl").getElementsByTagName("img");
	clickMenuLi = $('menu').getElementsByTagName('li');
	clickFileListFLi_0 = $('fileColumnUl0').getElementsByTagName('li');
	clickFileListFLi_1 = $('fileColumnUl1').getElementsByTagName('li');
	clickFileListFLi_2 = $('fileColumnUl2').getElementsByTagName('li');
	clickFileListFLi_3 = $('fileColumnUl3').getElementsByTagName('li');
	clickFileListCDiv_0 = $('iconColumnUl0').getElementsByTagName('div');
	clickFileListCDiv_1 = $('iconColumnUl1').getElementsByTagName('div');
	clickFileListCDiv_2 = $('iconColumnUl2').getElementsByTagName('div');
	clickOptionMenuLi_1 = $('optionFirstList').getElementsByTagName('li');
	clickOptionMenuLi_2 = $('optionSecondUl_1').getElementsByTagName('li');

	$('eb_tips').innerText = eb_tips;
	$('okButton').innerText = ok_button;
	$('noButton').innerText = eb_no;
	$('yesButton').innerText = eb_yes;
}

function unInit()
{
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
	{
		setting.setMEMC(1);
	}
}

//1st enter the medialist page
function initMediaListPage()
{
	curListF = 0;
	listStart = 0;
	focusIndex = 0;
	focusTab = MAIN_AREA;
	fileListDepth = 0;
	currentMediaType = ALL_TYPE;//all files
	previousMediaType = ALL_TYPE;
	top.g_path = "";
	focusTab = MAIN_AREA;
	top.g_mediaFolderPath = top.g_deviceInfo.path;
	document.onkeydown = keyProcess;
}

//return from playing page
function setMediaListPage()
{
	//top.g_mediaFolderPath = top.g_deviceInfo.path;
	//removeLastIndex();
	var s = top.g_listIndex[currentMediaType];
	if(s != null)
	{
		fileListDepth = (s.split('/')).length - 1;
	}
	else
	{
		fileListDepth = 0;
	}
	if(multimedia.getMediaFileParser() == 1)
	{
		fileListDepth = 0;
	}
	curListF = 0;
	focusIndex = 0;
	focusTab = top.g_focusTab;
	if(focusTab == LIST_AREA 
		&& (currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE))
	{
		listStart = getFileIndex(top.g_currentMedia, top.g_mediaList);
		if(top.g_mediaList.length < VC_F)
		{
			focusIndex = listStart;
			listStart = 0;
		}
		else if(listStart > top.g_mediaList.length - VC_F)
		{
			focusIndex = listStart - top.g_mediaList.length + VC_F;
			listStart = top.g_mediaList.length - VC_F;
		}
		currentList = getFileList(top.g_mediaFolderPath, 0, -1);
		setPageListVCount();
		resetFocusShape();
		if(fileListDepth == 0)//root path
		{
			refreshFileList(currentList, "");
			refreshFileInfo(currentList[listStart + focusIndex]);
		}
		else
		{
			$('gobackBox').style.display = 'block';
			$(fName + getF(curListF)).style.zIndex = 21;
			$(fName + getF(curListF)).style.left = cLeftDis + "px";//current list become bg
			$(fName + getF(curListF + 1)).style.zIndex = 22;
			$(fName + getF(curListF + 1)).style.left = cLeftDis + cSmallDis + "px";//info list become current list
			curListF = getF(curListF + 1);
			$(fName + getF(curListF + 1)).style.display = 'block';
			$(fName + getF(curListF + 2)).style.zIndex = 1;
			$(fName + getF(curListF + 1)).style.left = (fileListDepth == 0) ?
				cMiddleDis + "px" : cMiddleDis + cSmallDis + "px";
			$(fName + getF(curListF + 2)).style.left = cRightDis + "px";
			refreshFileList(currentList, (fName + "Ul" + getF(curListF)));
			refreshFileInfo(currentList[listStart + focusIndex]);
			arrowFDisplay(currentList.length);
		}
		setFileListSpan();
		setFileListFocus(focusIndex, -1);
		menuListDiv[currentMediaType].style.color = "#ffffff";
		$('menuFocus').style.top = focusMenuTopDistance + (currentMediaType * focusMenuHeight) + "px";
		$('menuFocus').style.left = 0 + "px";
	}
	else if(focusTab == LIST_AREA 
		&& (currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE))
	{
		listStart = getFileIndex(top.g_currentMedia, top.g_mediaList);
		if(top.g_mediaList.length <= HC_I * VC_I)
		{
			focusIndex = listStart;
			listStart = 0;
		}
		else if(parseInt(top.g_mediaList.length % HC_I) == 0)
		{
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
		currentList = getFileList(top.g_mediaFolderPath, 0, -1);
		setPageListVCount();
		resetFocusShape();
		if(fileListDepth == 0)//root path
		{
			refreshFileList(currentList, "");
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / VC_I, 10);
			$('focus').style.top = (focusTopDistance + vCount * focusHeight) + "px";
			$('focus').style.left = (focusLeftDistance + focusWidth * hCount) + "px";
		}
		else
		{
			$('gobackBox').style.display = 'block';
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / VC_I, 10);
			refreshFileList(currentList, (iName + "Ul" + getI(curListI + 2)));
			$(iName + getI(curListI)).style.zIndex = 1;
			$(iName + getI(curListI)).style.left = cRightDis + "px";	
			$(iName + getI(curListI + 2)).style.zIndex = 27;
			$(iName + getI(curListI + 2)).style.left = cLeftDis + cSmallDis + "px";
			$(iName + getI(curListI + 1)).style.zIndex = 26;
			$(iName + getI(curListI + 1)).style.left = cLeftDis + "px";
			curListI = getI(curListI + 2);
			$('focus').style.top = (focusTopDistance + vCount * focusHeight) + "px";
			$('focus').style.left = (focusLeftDistance + cSmallDis + focusWidth * hCount) + "px";
			setPageListVCount();
		}
		setIconListSpan();
		setIconListFocus(focusIndex, -1);
		arrowIDisplay(currentList.length);
		menuListDiv[currentMediaType].style.color = "#ffffff";
		$('menuFocus').style.top = focusMenuTopDistance + (currentMediaType * focusMenuHeight) + "px";
		$('menuFocus').style.left = 0 + "px";
	}
	else if(focusTab == MUSIC_AREA)
	{
		if(musicBGPlay)//bgm still playing
		{
		}
		else//no bgm playing
		{
			focusTab = MAIN_AREA;
		}
	}
	refreshTitleInfo(getLastFolder());
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2) toBack();//right key
	}

	for(var i = 0, len = clickMenuLi.length; i < len; i++)//all files; picture; video; music
	{
		clickMenuLi[i].setAttribute(clickIndexAttri, i);
		clickMenuLi[i].onmousedown = function(evt){
			if(evt.button == 0 && operateFlag)//left key
			{
				clickMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < 4; i++)
	{
		var tmp = "";
		switch(i)
		{
			case 0:
				tmp = clickFileListFLi_0;
				break;
			case 1:
				tmp = clickFileListFLi_1;
				break;
			case 2:
				tmp = clickFileListFLi_2;
				break;
			case 3:
				tmp = clickFileListFLi_3;
				break;
		}
		for(var j = 0, len = tmp.length; j < len; j++)
		{
			tmp[j].setAttribute(clickIndexAttri, j);
			tmp[j].onmousedown = function(evt){
				if(evt.button == 0 && operateFlag)//left key
				{
					clickFileListFFunction(parseInt(this.getAttribute(clickIndexAttri)));
					evt.stopPropagation();
				}
			}
		}
	}

	for(var i = 0; i < 3; i++)
	{
		var tmp = "";
		switch(i)
		{
			case 0:
				tmp = clickFileListCDiv_0;
				break;
			case 1:
				tmp = clickFileListCDiv_1;
				break;
			case 2:
				tmp = clickFileListCDiv_2;
				break;
		}
		for(var j = 0, len = tmp.length; j < len; j++)
		{
			tmp[j].setAttribute(clickIndexAttri, j);
			tmp[j].onmousedown = function(evt){
				if(evt.button == 0 && operateFlag)//left key
				{
					clickFileListCFunction(parseInt(this.getAttribute(clickIndexAttri)));
					evt.stopPropagation();
				}
			}
		}
	}

	for(var i = 0; i < 4; i++)//file list up arrow
	{
		var tmp = fUpArrowName + i; 
		$(tmp).setAttribute(clickIndexAttri, i);
		$(tmp).onmousedown = function(evt){
			if(evt.button == 0 && operateFlag)//left key
			{
				clickFileListUpArrow(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < 4; i++)//file list down arrow
	{
		var tmp = fDownArrowName + i; 
		$(tmp).setAttribute(clickIndexAttri, i);
		$(tmp).onmousedown = function(evt){
			if(evt.button == 0 && operateFlag)//left key
			{
				clickFileListDownArrow(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < 3; i++)//icon list up arrow
	{
		var tmp = iUpArrowName + i; 
		$(tmp).setAttribute(clickIndexAttri, i);
		$(tmp).onmousedown = function(evt){
			if(evt.button == 0 && operateFlag)//left key
			{
				clickIconListUpArrow(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < 3; i++)//icon list up arrow
	{
		var tmp = iDownArrowName + i;
		$(tmp).setAttribute(clickIndexAttri, i);
		$(tmp).onmousedown = function(evt){
			if(evt.button == 0 && operateFlag)//left key
			{
				clickIconListDownArrow(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0, len = clickOptionMenuLi_1.length; i < len; i++)
	{
		clickOptionMenuLi_1[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_1[i].onmousedown = function(evt){
			if(evt.button == 0 && operateFlag)//left key
			{
				clickFirstOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
				hideMenu(DELAY_TIME_15);
			}
		}
	}

	for(var i = 0, len = clickOptionMenuLi_2.length; i < len; i++)
	{
		clickOptionMenuLi_2[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_2[i].onmousedown = function(evt){
			if(evt.button == 0 && operateFlag)//left key
			{
				clickSecondOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	$('gobackBox').onmousedown = function(evt){
		if(evt.button == 0 && operateFlag)//left key
		{
			toBack();
			evt.stopPropagation();
		}
	}

	$('titleTips').onmousedown = function(evt){
		if(evt.button == 0 && operateFlag)//left key
		{
			toOption();
			evt.stopPropagation();
		}
	}

	$('okButton').onmousedown = function(evt){
		if(evt.button == 0 && operateFlag)//left key
		{
			toOK();
			evt.stopPropagation();
		}
	}
}

function keyProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
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
		case top.VK_NETFLIX:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.g_temp = "";
			top.keyDownProcess(evt);
			return;
	}
	if(!operateFlag && (keycode != top.VK_TV && keycode != top.VK_MENU && keycode != top.VK_EXIT && keycode != top.VK_BACK)
		&& (focusTab == TIPS_AREA && keycode != top.VK_ENTER))
	{
		return;
	}
	switch (keycode)
	{
		case top.VK_ENTER:
			if(!emptyDeviceFlag)
			{
				if($('iconListEmptyTips').style.display == 'block')
				{
					showIconEmptyTips(-1);
					break;
				}
				toOK();
			}
			break;
		case top.VK_UP:
			if(!emptyDeviceFlag)
			{
				if($('iconListEmptyTips').style.display == 'block')
				{
					showIconEmptyTips(-1);
					break;
				}	
				toUp();
			}
			break;
		case top.VK_DOWN:
			if(!emptyDeviceFlag)
			{
				if($('iconListEmptyTips').style.display == 'block')
				{
					showIconEmptyTips(-1);
					break;
				}
				toDown();
			}
			break;
		case top.VK_RIGHT:	
			if(!emptyDeviceFlag)
			{
				if($('iconListEmptyTips').style.display == 'block')
				{
					showIconEmptyTips(-1);
					break;
				}
				toRight();
			}
			break;
		case top.VK_BACK: //back
			if($('iconListEmptyTips').style.display == 'block')
			{
				showIconEmptyTips(-1);
				break;
			}
			toBack();
			break;
		case top.VK_LEFT:
			if(!emptyDeviceFlag)
			{
				if($('iconListEmptyTips').style.display == 'block')
				{
					showIconEmptyTips(-1);
					break;
				}
				toLeft();
			}
			break;
		case top.VK_OPTION: //menu
			if(!emptyDeviceFlag)
			{
				if($('iconListEmptyTips').style.display == 'block')
				{
					showIconEmptyTips(-1);
					break;
				}	
				toOption();
			}
			break;	
		case top.VK_TV:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			top.g_temp = "";
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(1, 0);
			//top.keyDownProcess(evt);
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_remindWord = "TvHotKey";
			top.$("main").src = "intermediate.html";
			top.main.focus();
			top.$("operatePage").src = "";
			break;
		case top.VK_MEDIA://RC72遥控器的媒体中心键---lqt
			console.log("-------lqt----mediaList.js----VK_MEDIA----");
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			top.$("operatePage").src = "";
			usbLock = factory.usbLock;
			hotelEnable = factory.hotelEnable;
			top.hotkeysIntoUSB = true;
			if((usbLock) && (hotelEnable))
			{
				top.$('main').src = "password.html?usbLock";
				top.main.focus();
				top.setFrameFocusPage("main");
			}
			else
			{
				console.log("-------lqt----mediaList.js--else--VK_MEDIA----");
				top.$('main').src = "deviceList.html";
				top.main.focus();
				top.setFrameFocusPage("main");
			}
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
	switch(msg)
	{
		/*
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_CH_BLOCK://channel lock
		case top.E_SS_PARENTAL_BLOCK://parental lock
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_SS_COMMON_VIDEO:// service ready
		case top.E_SIGNAL_UNLOCK://unlock
		case top.E_SIGNAL_LOCK://lock
		*/
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT		
		case top.E_POWER_OFF_TIMER://power off timer
			top.systemEventProc(evt);
			return;
		case top.E_BOOKING_PLAY_START://booking play start
		case top.E_BOOKING_RECORD_START://booking record start
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start
			/////////////////chenhua changed start///////////////////////////////// 
			/*
			top.g_mediaList = "";
			top.g_mediaPosition = 0;
			top.g_currentMedia = "";
			top.g_path = "";
			top.g_folderPath = "";
			multimedia.toRestoreSource(0, 0);//restore source to dtv or atv or ...
			*/
			top.g_temp = "media";
			/////////////////chenhua changed end///////////////////////////////// 
			top.systemEventProc(evt);
			return;
		case top.E_READY_TO_CHANGE_SCART:
		case top.E_READY_TO_CHANGE_CEC:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			top.g_temp = "";
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(2, value);
			top.$("main").src = "channelPlay.html";
			//top.systemEventProc(evt);
			break;
		case top.E_DLNA_DEVICE_INSERT:
			break;
		case top.E_DLNA_DEVICE_INSERT:
			break;
		case top.E_MEDIA_USB_INSERTED://usb insert
			if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
			{
				hideMenu(0);
			}
			displayFocusBox(0);
			top.systemEventProc(evt);
			break;
		case top.E_DLNA_CURRENT_DEVICE_REMOVE:
		case top.E_WIRELESS_DEVICE_NO_FOUND:
		case top.E_WIRELESS_CONNECT_FAILURE://net connect failed
			testLog("----- THIS IS NET DISCONNECTED -----");
			if(currentIsDLNAFlag)
			{
				focusTab = TIPS_AREA;
				$('eb_info').innerText = top.netConnRemind[3];
				displayTipsBox(1);
				//exitMediaListPage();
			}
			break;
		case top.E_MEDIA_USB_REMOVE://usb remove
			top.g_BGMmdiaFolderPath =""
			top.g_mediaPosition = 1;
			multimedia.deviceExitUninit();
			multimedia.stopThumbnailTask();
			top.$("main").src = "deviceList.html?remove";
			break;
		case top.E_MEDIA_FIND_FILE_END: //file search end
			cleanupFolderDepthInfo();
			refreshParserFileList();
			displayLoadingBox(0);
			operateFlag = true;
			if(listLength == 0)
			{
				$('focus').style.display = 'none';
				$('emptyTips').style.display = 'block';
				emptyDeviceFlag = 1;
				operateFlag = true;
			}
			refreshTitleInfo(-1);
			//hideMenu(0);
			$('gobackBox').style.display = 'none';
			refreshMainMenuList();
			break;			
		case top.E_MEDIA_DATA_READY://media list data ready
			break;			
		case top.E_THUMBNAIL_GENERATE: //media list data ready
			var idx = evt.modifiers;
			var listImg = $(iName + "Ul"+ getI(curListI)).getElementsByTagName('img');
			var picPath = multimedia.getThumbNail(currentList[idx].path);
			if(idx >= listStart && idx < (listStart + VC_I * HC_I) && (picPath != null && picPath != ""))
			{
				listImg[idx - listStart].src = picPath;
			}
			break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
			top.systemEventProc(evt);
			break;
		case top.E_APP_PROCESS_INITIALIZATION:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.deviceExitUninit();
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
		if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
		{
			if(parseInt(focusIndex % HC_I, 10) != 0)
			{
				focusIndex--;
				var hCount = parseInt(focusIndex % HC_I, 10);
				$('focus').style.left = (fileListDepth == 0) ?
					(focusLeftDistance + focusWidth * hCount) + "px" :
					(focusLeftDistance + cSmallDis + focusWidth * hCount) + "px";
				setIconListFocus(focusIndex, focusIndex + 1);
				return;
			}
			else
			{
				multimedia.stopThumbnailTask();
				displayLoadingBox(1);
				freshInfoTimer = setTimeout(function(){
					leaveCurList();
					if(currentMediaType == PIC_TYPE && fileListDepth != 0)
					{
						multimedia.createThumbnailTask(top.g_mediaFolderPath, currentMediaType, 0);
					}
					displayLoadingBox(0);
				}, 100);
			}
		}
		else if(currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE)//allfile & music
		{// not go back to the root folder
			if(fileListDepth > 0)
			{
				fileListDepth--;
				if(fileListDepth == 0)
				{
					$('gobackBox').style.display = 'none';
					$('focus').style.left = 314 + "px";
				}
				displayLoadingBox(1);
				freshInfoTimer = setTimeout(function(){
					removeFolderPath();
					refreshTitleInfo(getLastFolder());
					setFileListSpan();
					setFileListFocus(-1, focusIndex);
					lCount = VC_F;
					listStart = getLastListStart();
					focusIndex = getLastFocusIndex();
					removeLastIndex();
					top.g_mediaFolderPath = getLastPath(top.g_mediaFolderPath);
					currentList = getFileList(top.g_mediaFolderPath, 0, -1);
					if(currentList.length == 0)//&& currentIsDLNAFlag
					{
						focusTab = TIPS_AREA;
						$('eb_info').innerText = top.netConnRemind[3];
						displayTipsBox(1);
						//exitMediaListPage();
						return;
					}
					refreshFileList(currentList, (fName + "Ul" + getF(curListF + 3)));
					//top.g_mediaFolderPath = getLastPath(top.g_mediaFolderPath);
					leaveRefreshFileColumn();
					$('focus').style.top = (focusTopDistance + focusIndex * focusHeight) + "px";
					refreshFileInfo(currentList[listStart + focusIndex]);
					setFileListSpan();
					setFileListFocus(focusIndex, -1);
					showFScrollBar(getF(curListF), listLength, listStart);
					setPageListVCount();
					arrowFDisplay(currentList.length);
					displayLoadingBox(0);
					}, 100);
				return;
			}
			else
			{
				setFileListFocus(-1, focusIndex);
				clearTimeout(freshInfoTimer);
				listStart = 0;
				focusTab = MAIN_AREA;
				fileListDepth = 0;
				focusIndex = currentMediaType;
				top.g_mediaFolderPath = top.g_deviceInfo.path;
				currentList = getFileList(top.g_mediaFolderPath, 0 , -1);
				setPageListVCount();
				refreshTitleInfo(-1);
				resetFocusShape();
				$('fileInfo').style.left = cRightDis + "px";
				$('emptyFolderTips').style.left = cRightDis + "px";
				$('fileInfo').style.display = 'none';
				$('emptyFolderTips').style.display = 'none';
				$('focus').style.top = (focusTopDistance + focusIndex * focusHeight) + "px";
				setTimeout(function(){refreshFileList(currentList, "");}, 1);
			}
		}
	}
	else if(focusTab == MUSIC_AREA && focusIndex != 0)
	{
		changeMusicCtlFocus(-1);
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		$('optionSecondList').style.display = 'none';
		optionFocusIndex_1 = parseInt(optionFocusIndex_1 % optionFirstListLength, 10);
		$('optionFocus_1').style.top = focusOptionTopDistance + (optionFocusIndex_1 * focusOptionHeight) + "px";
		hideMenu(DELAY_TIME_15);
	}
	else if(focusTab==DIVX_DEREG_ARER)
	{
		form_position_h = !form_position_h;
		$("deregistFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	}
	else if(focusTab==DIVX_DEREG_CONFIRM_AREA)
	{
		form_position_h = !form_position_h;
		$("deregistConfirmFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	}
}

function toRight()
{
	if(focusTab == MAIN_AREA)
	{
		listStart = 0;
		fileListDepth = 0;
		currentMediaType = focusIndex;
		previousMediaType = currentMediaType;
		focusIndex = 0;
		multimedia.stopThumbnailTask();
		currentList = getFileList(top.g_deviceInfo.path, listStart, -1);
		if(currentList.length == 0)
		{
			focusIndex = currentMediaType;
			$('emptyListTips').style.display = 'block';
			return;
		}
		else
		{
			$('emptyListTips').style.display = 'none';
		}
		refreshFileList(currentList, "");
		if(currentMediaType == PIC_TYPE)
		{
			multimedia.createThumbnailTask(top.g_mediaFolderPath, currentMediaType, 0);
		}
		focusTab = LIST_AREA;
		listLength = currentList.length;
		setPageListVCount();
		resetFocusShape();
		if(currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE)//all files or music
		{
			refreshFileList(currentList, (fName + "Ul" + getF(curListF)));
			refreshFileInfo(currentList[listStart + focusIndex]);
			setFileListSpan();
			setFileListFocus(focusIndex, -1);
		}
		else//picture or video
		{
			refreshFileList(currentList, (iName + "Ul" + getI(curListI)));
			setIconListSpan();
			setIconListFocus(focusIndex, -1);
		}
	}
	else if(focusTab == LIST_AREA)
	{
		if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)//pciture or video
		{
			if(listStart + focusIndex + 1 >= currentList.length)
			{
				return;
			}
			if(parseInt(focusIndex % HC_I, 10) != 3)
			{
				focusIndex++;
				var hCount = parseInt(focusIndex % HC_I, 10);
				$('focus').style.left = (fileListDepth == 0) ?
					(focusLeftDistance + focusWidth * hCount) + "px" :
					(focusLeftDistance + cSmallDis + focusWidth * hCount) + "px";
				setIconListFocus(focusIndex, focusIndex - 1);
			}
		}
		else//all file & music
		{
			top.g_fileInfo = currentList[listStart + focusIndex];
			top.g_focusTab = focusTab;
			if(top.g_fileInfo.type == ALL_TYPE)
			{
				displayLoadingBox(1);
				freshInfoTimer = setTimeout(function(){
					var list = getFileList(currentList[listStart + focusIndex].path, 0, -1);
					if(list.length == 0)
					{
						displayLoadingBox(0);
						return;
					}
					setFileListFocus(-1, focusIndex);
					++fileListDepth;
					if(fileListDepth > 0)
					{
						$('gobackBox').style.display = 'block';
					}
					displayLoadingTips(1);
					addLastIndex();
					addFolderName(currentList[listStart + focusIndex].name);
					refreshTitleInfo(getLastFolder());
					clearTimeout(freshInfoTimer);
					//refreshFileInfo(currentList[listStart + focusIndex]);
					top.g_mediaFolderPath = top.g_fileInfo.path;
					currentList = getFileList(top.g_mediaFolderPath, 0, -1);
					listLength = currentList.length;
					lCount = VC_F;
					listStart = 0;
					focusIndex = 0;
					resetFocusShape();

					enterRefreshFileColumn(0);
					setPageListVCount();
					//showFScrollBar(getF(curListF), listLength, listStart);
					setFileListSpan();
					refreshFileList(currentList, (fName + "Ul" + getF(curListF)));
					setFileListFocus(focusIndex, -1);
					//refreshFileInfo(currentList[listStart + focusIndex]);
					//
					displayLoadingBox(0);
					freshInfoTimer = setTimeout(function(){
						setTimeout(function(){
							refreshFileInfo(currentList[listStart + focusIndex]);
							setTimeout(function(){displayLoadingTips(0);}, 200);
							}, 100);
						}, 1000);
					}, 200);
			}
			else if(currentList[listStart + focusIndex].type == PIC_TYPE)
			{
				clearTimeout(freshInfoTimer);
				top.g_currentMedia = currentList[listStart + focusIndex];
				top.g_mediaList = currentList;
				top.g_currentMediaType = currentMediaType;
				multimedia.stopThumbnailTask();
				top.$("main").src = "picturePlay.html";
			}
			else if(currentList[listStart + focusIndex].type == VIDEO_TYPE)
			{
				clearTimeout(freshInfoTimer);
				top.g_currentMedia = currentList[listStart + focusIndex];
				top.g_mediaList = currentList;
				top.g_currentMediaType = currentMediaType;
				top.$("main").src = "videoPlay.html";
			}
			else if(currentList[listStart + focusIndex].type == MUSIC_TYPE)
			{
				clearTimeout(freshInfoTimer);
				top.g_currentMedia = currentList[listStart + focusIndex];
				top.g_mediaList = currentList;
				top.g_currentMediaType = currentMediaType;
				top.$("main").src = "musicPlay.html";
			}
		}
	}
	else if(focusTab == MUSIC_AREA && focusIndex != 0)
	{
		changeMusicCtlFocus(1);
	}
	else if(focusTab == OPTION_AREA)
	{
		if((optionFocusIndex_1 == 0)||(optionFocusIndex_1 == 1))
		{
			focusTab = OPTION_DETAIL_AREA;
			$('optionSecondList').style.display = 'block';
			optionFocusIndex_2 = (parseInt((optionFocusIndex_1 % optionFirstListLength), 10) == 0) ? sortOrder : parser;
			fillOptionSecList();
			resetOptionSecBg();
			resetFocusShape();
			hideMenu(DELAY_TIME_15);
		}
		else
		{
			clearTimeout(menuTimer);
			if(optionFocusIndex_1 == 2)
			{
				if(setting.divxActiveStatus() == 1)
				{
					focusTab = DIVX_DEREG_CONFIRM_AREA;
					initDeregistConfirm();
					focusDivxIndex=divxDeregistConfirm;
					$('focus').style.display = 'none';
					$('option').style.display = 'none';
					$('optionSecondList').style.display = 'none';
				}
				else if((setting.divxActiveStatus() == 0)||(setting.divxActiveStatus() ==2))
				{
					focusTab = DIVX_REG_AREA;
					initRegistration();
					$('optionFocus_1').style.display = 'none';
					focusDivxIndex=divxRegistFocus;
					$('focus').style.display = 'none';
					$('option').style.display = 'none';
					$('optionSecondList').style.display = 'none';
				}
			}
			else	
			{
				if(setting.divxActiveStatus() == 1)
				{
					focusTab = DIVX_DEREG_CONFIRM_AREA;
					initDeregistConfirm();
					focusDivxIndex=divxDeregistConfirm;
					$('focus').style.display = 'none';
					$('option').style.display = 'none';
					$('optionSecondList').style.display = 'none';
				}
				else if((setting.divxActiveStatus() == 0)||(setting.divxActiveStatus() ==2))   //yiling0811
				{
					focusTab = DIVX_DEREG_ARER;
					initDeregistration();
					$('optionFocus_1').style.display = 'none';
					$('focus').style.display = 'none';
					$('option').style.display = 'none';
					$('optionSecondList').style.display = 'none';
				}
			}
			$('menuFocus').src = "images/focus_Activation.png";  //此处处理：当弹出divx相关弹出框时，不要求menuFocus消失，但需要使其看起来略微暗淡一点
		}
	}
	/*else if(focusTab == DIVX_REG_AREA)
	{
		focusTab = OPTION_AREA;
		$('optionFocus_1').style.display = 'block';
		$('registForm').style.display = 'none';
		$("registFocus").style.display = 'none';
		//$('focus').style.display = 'block';
		$('option').style.display = 'block';
		$('menuFocus').src = "images/focus.png";  //此处处理：当divx弹出框消失后，menuFocus显示恢复为高亮
	}*/
	else if(focusTab==DIVX_DEREG_ARER)
	{
		form_position_h = !form_position_h;
		$("deregistFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	}
	else if(focusTab==DIVX_DEREG_CONFIRM_AREA)
	{
		form_position_h = !form_position_h;
		$("deregistConfirmFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	}
}

function toUp()
{
	if(focusTab == MAIN_AREA && (focusIndex - 1) >= 0)
	{
		focusIndex--;
		menuListDiv[focusIndex + 1].style.color = "#aaaaaa";
		menuListDiv[focusIndex].style.color = "#ffffff";
		setHTMLNotScroll(menuListDiv[focusIndex + 1]);
		setHTMLScroll(menuListDiv[focusIndex]);
		$('menuFocus').style.top = focusMenuTopDistance + (focusIndex * focusMenuHeight) + "px";
	}
	else if(focusTab == LIST_AREA)
	{
		if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)//pic & video
		{
			if(parseInt(focusIndex / VC_I, 10) == 0)//the top 
			{
				if(listStart - HC_I >= 0)
				{
					listStart -= VC_I;
					lCount = VC_I * HC_I;
					maxLength = VC_I * HC_I - 1;
					refreshFileList(currentList, iName + "Ul" + curListI);
					var row = parseInt(listLength / VC_I);
					var startRow = parseInt(listStart / VC_I);
					row = (parseInt(listLength % VC_I) == 0) ? row : row + 1;
					startRow = (parseInt(listStart % VC_I) == 0) ? startRow : startRow + 1;
					$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
						parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
					setIconListFocus(focusIndex, -1);
				}
			}
			else
			{
				setIconListFocus(-1, focusIndex);
				focusIndex = (focusIndex - VC_I) >= 0 ? focusIndex - VC_I : 0;
				setIconListFocus(focusIndex, -1);
			}
			
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / VC_I, 10);
			$('focus').style.top = (focusTopDistance + vCount * focusHeight) + "px";
			$('focus').style.left = (fileListDepth == 0) ?
				(focusLeftDistance + focusWidth * hCount) + "px" :
				(focusLeftDistance + cSmallDis + focusWidth * hCount) + "px";
		}
		else//all file & music
		{
			if((focusIndex - 1) >= 0)
			{
				focusIndex--;
				$('focus').style.top = (focusTopDistance + focusIndex * focusHeight) + "px";
			}
			else if(focusIndex == 0	&& listStart - 1 >= 0)
			{	
				listStart--;
				refreshFileList(currentList, (fName + "Ul" + curListF));
				$(sfName + getF(curListF)).style.top = SCROLL_F_TOP + 
					parseInt(SCROLL_MAX_HEIGHT * listStart / listLength) + "px";
			}
			setFileListFocus(focusIndex, focusIndex + 1);
			clearTimeout(freshInfoTimer);
			freshInfoTimer = setTimeout(function(){
				refreshFileInfo(currentList[listStart + focusIndex]);
				displayLoadingTips(0);
				}, 1000);
		}
	}
	else if(focusTab == MUSIC_AREA)
	{
		if(focusIndex == 0)
		{
			focusTab = MAIN_AREA;
			focusIndex = 3;
			resetFocusShape();
			$('focus').style.top = (focusTopDistance + focusIndex * focusHeight) + "px";
		}
		else
		{
			focusIndex = 0;
			resetFocusShape();
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		top.g_channel.testLog("@@@@@@@@@@@@@focusTab = option_area optionFocusIndex_1="+optionFocusIndex_1);
		setOptionMenuFocus(-1, optionFocusIndex_1);
		//optionFirstListLength = ((setting.divxActiveStatus() == 2) || (setting.divxActiveStatus() == 0)) ? 3 : 4; //yiling0811
		optionFirstListLength = 4;		
		changeOptionFocus(-1);
		$('optionFocus_1').style.top = focusOptionTopDistance + focusOptionHeight * optionFocusIndex_1 + "px";
		setTimeout(function(){setOptionMenuFocus(optionFocusIndex_1, -1);}, DELAY_TIME_2);
		hideMenu(DELAY_TIME_15);
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		optionFocusIndex_2 = parseInt((optionFocusIndex_2 + 1) % 2, 10);
		$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
		hideMenu(DELAY_TIME_15);
	}
}

function toDown()
{
	if(focusTab == MAIN_AREA)
	{
		if((focusIndex + 1) <= 3)
		{
			focusIndex++;
			menuListDiv[focusIndex - 1].style.color = "#aaaaaa";
			menuListDiv[focusIndex].style.color = "#ffffff";
			setHTMLNotScroll(menuListDiv[focusIndex - 1]);
			setHTMLScroll(menuListDiv[focusIndex]);
			$('menuFocus').style.top = focusMenuTopDistance + (focusIndex * focusMenuHeight) + "px";
			/*
			listStart = 0;
			fileListDepth = 0;
			currentMediaType = focusIndex;
			if(top.g_listArray[currentMediaType][0] == null 
				|| top.g_listArray[currentMediaType][0] == "")
			{
				top.g_listArray[currentMediaType][0] = getFileList(top.g_deviceInfo.path, listStart, -1);
			}
			currentList = top.g_listArray[currentMediaType][0];
			setPageListVCount();
			refreshFileList(currentList, "");
			*/
		}
		/*
		else if(musicBGPlay && ((focusIndex + 1) > 3))
		{
			focusTab = MUSIC_AREA;
			currentMediaType = 3;
			focusIndex = 0;
			resetFocusShape();
			$('focus').style.top = 780 + "px";
		}
		*/
	}
	else if(focusTab == LIST_AREA)
	{
		if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)//pic & video
		{
			if(parseInt(focusIndex / VC_I, 10) == VC_I - 1)//the bottom of the page
			{
				if(listStart + focusIndex + VC_I < currentList.length)
				{
					listStart += VC_I;
					lCount = (listStart + lCount) > currentList.length ? 
						lCount - HC_I + parseInt(currentList.length % HC_I, 10) : (VC_I * HC_I);
					refreshFileList(currentList, (iName + "Ul" + curListI));
					var row = parseInt(currentList.length / VC_I);
					var startRow = parseInt(listStart / VC_I);
					row = (parseInt(currentList.length % VC_I) == 0) ? row : row + 1;
					startRow = (parseInt(listStart % VC_I) == 0) ? startRow : startRow + 1;
					$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
						parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
					setIconListFocus(focusIndex, -1);
				}
				else if(parseInt((listStart + focusIndex) / HC_I, 10) 
					== parseInt(currentList.length / HC_I, 10) 
					&& listStart + focusIndex == currentList.length - 1 )
				{
					return;
				}
				else if(listStart + lCount == currentList.length)
				{
					setIconListFocus(-1, focusIndex);
					focusIndex = lCount - 1;
					setIconListFocus(focusIndex, -1);
					var row = parseInt(currentList.length / VC_I);
					var startRow = parseInt(listStart / VC_I);
					row = (parseInt(currentList.length % VC_I) == 0) ? row : row + 1;
					startRow = (parseInt(listStart % VC_I) == 0) ? startRow : startRow + 1;
					$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
						parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
				}
				else//
				{
					listStart += VC_I;
					setIconListFocus(-1, focusIndex);
					focusIndex = currentList.length - listStart - 1;
					refreshFileList(currentList, (iName + "Ul" + curListI));
					var row = parseInt(currentList.length / VC_I);
					var startRow = parseInt(listStart / VC_I);
					row = (parseInt(currentList.length % VC_I) == 0) ? row : row + 1;
					startRow = (parseInt(listStart % VC_I) == 0) ? startRow : startRow + 1;
					$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
						parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
					setIconListFocus(focusIndex, -1);
				}
			}
			else if(parseInt(focusIndex / VC_I, 10) < VC_I - 1)//not the bottom of the current page
			{
				if(listStart + focusIndex + VC_I < currentList.length)
				{
					setIconListFocus(-1, focusIndex);
					focusIndex += VC_I;
					setIconListFocus(focusIndex, -1);
				}
				else
				{
					setIconListFocus(-1, focusIndex);
					focusIndex = currentList.length - listStart - 1;
					setIconListFocus(focusIndex, -1);
				}
			}
			else//the bottom of the list
			{
				return;
			}
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / VC_I, 10);
			$('focus').style.top = (focusTopDistance + vCount * focusHeight) + "px";
			$('focus').style.left = (fileListDepth == 0) ?
				(focusLeftDistance + focusWidth * hCount) + "px" :
				(focusLeftDistance + cSmallDis + focusWidth * hCount) + "px";
		}
		else //all file & music
		{
			if((focusIndex + 1) < pageVCount)//not the bottom of current page
			{
				focusIndex++;
				$('focus').style.top = (focusTopDistance + focusIndex * focusHeight) + "px";
			}
			else if((focusIndex + 1) == pageVCount
				&& (listStart + lCount < listLength))//the bottom of current page
			{	
				listStart++;
				refreshFileList(currentList, (fName + "Ul" + curListF));
				$(sfName + getF(curListF)).style.top = SCROLL_F_TOP + 
					parseInt(SCROLL_MAX_HEIGHT * listStart / listLength) + "px";
			}
			setFileListFocus(focusIndex, focusIndex - 1);
			clearTimeout(freshInfoTimer);
			freshInfoTimer = setTimeout(function(){
				refreshFileInfo(currentList[listStart + focusIndex]);
				displayLoadingTips(0);
				}, 1000);
		}
	}
	else if(focusTab == MUSIC_AREA)
	{
		if(focusIndex == 0)//on music info
		{
			focusIndex = 2;
			resetFocusShape();
			$('focus').style.top =  880 + "px";
			$('focus').style.left = (focusTopDistance * (focusIndex - 1)) + "px";
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		changeOptionFocus(1);
		$('optionFocus_1').style.top = focusOptionTopDistance + focusOptionHeight * optionFocusIndex_1 + "px";
		hideMenu(DELAY_TIME_15);
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		optionFocusIndex_2 = parseInt((optionFocusIndex_2 + 1) % 2, 10);
		$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
		hideMenu(DELAY_TIME_15);
	}
}

function toOK()
{
	if(focusTab == MAIN_AREA)
	{
		toRight();
	}
	else if(focusTab == TIPS_AREA)
	{
		top.g_mediaPosition = 1;
		multimedia.deviceExitUninit();
		toBack();
	}
	else if(focusTab == LIST_AREA)
	{
		if(currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE)//all files & music
		{
			toRight();
		}
		else if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
		{
			var num = (currentList[listStart + focusIndex].path).lastIndexOf("/");
			top.g_mediaFolderPath = (currentList[listStart + focusIndex].path).substring(0, num);
			if(currentList[listStart + focusIndex].type == PIC_TYPE)
			{
				clearTimeout(freshInfoTimer);
				top.g_currentMedia = currentList[listStart + focusIndex];
				top.g_mediaList = currentList;
				top.g_focusTab = focusTab;
				top.g_currentMediaType = currentMediaType;
				multimedia.stopThumbnailTask();
				top.$("main").src = "picturePlay.html";
			}
			else if(currentList[listStart + focusIndex].type == VIDEO_TYPE)
			{
				clearTimeout(freshInfoTimer);
				top.g_currentMedia = currentList[listStart + focusIndex];
				top.g_mediaList = currentList;
				top.g_focusTab = focusTab;
				top.g_currentMediaType = currentMediaType;
				top.$("main").src = "videoPlay.html";
			}
			else
			{
				multimedia.stopThumbnailTask();
				displayLoadingBox(1);
				freshInfoTimer = setTimeout(function(){
					top.g_fileInfo = currentList[listStart + focusIndex];
					enterNextList(top.g_fileInfo);
					if(currentMediaType == PIC_TYPE)
					{
						multimedia.createThumbnailTask(top.g_mediaFolderPath, currentMediaType, 0);
					}
					displayLoadingBox(0);
				}, 200);
			}
		}
	}
	else if(focusTab == MUSIC_AREA)
	{
		if(focusIndex == 0)//in music play page
		{}
		else if(focusIndex == 1)//pre
		{
			multimedia.playPreMediaFile();
		}
		else if(focusIndex == 2)//play & pause
		{
			if(BGMStatus == S_PLAY)
			{
				multimedia.mediaPause();
				BGMStatus = "pause";
				//$("playStatus").src = playStatusImg[1];
			}
			else
			{
				multimedia.mediaResume();
				BGMStatus = "play";
				//$("playStatus").src = playStatusImg[0];
			}
		}
		else if(focusIndex == 3)//next
		{
			multimedia.playNextMediaFile();
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
	else if(focusTab == DIVX_REG_AREA)
	{
		//toRight();
		focusTab = OPTION_AREA;
		$('optionFocus_1').style.display = 'block';
		$('registForm').style.display = 'none';
		$("registFocus").style.display = 'none';
		//$('focus').style.display = 'block';
		$('option').style.display = 'block';
		$('menuFocus').src = "images/focus.png";  //此处处理：当divx弹出框消失后，menuFocus显示恢复为高亮
	}
	else if(focusTab==DIVX_DEREG_ARER)
	{
		if(form_position_h == 1)
		{
			$('deregistForm').style.display = 'none';
			$('deregistFocus').style.display = 'none';
			focusTab = DIVX_REG_AREA;
			$("registTitle").innerText = registrationTitleWords[1];
			/*var registContentPList = $("registContent").getElementsByTagName("p");
			registContentPList[0].innerText = registWords[0];
			registContentPList[1].innerText = registWords[1] + setting.registDivX();
			registContentPList[2].innerText = registWords[2];*/
			$("registContent1").innerHTML = registWords[0];
			$("registContent2").innerHTML = registWords[1] + setting.registDivX();
			$("registContent3").innerHTML = registWords[2];
			$("registOk").innerText = okCancelWords[0];
			$("registOk").style.left = "325px";
			$("registFocus").style.left = "325px";
			$("registFocus").style.display = 'block';
			$("registForm").style.display = 'block';
			focusDivxIndex=divxRegistFocus;
		}
		else
		{
			focusTab = OPTION_AREA;
			$('optionFocus_1').style.display = 'block';
			$('deregistForm').style.display = 'none';
			$('deregistFocus').style.display = 'none';
			$('option').style.display = 'block';
			$('menuFocus').src = "images/focus.png";  //此处处理：当divx弹出框消失后，menuFocus显示恢复为高亮
		}
	}
	else if(focusTab == DIVX_DEREG_CONFIRM_AREA)
	{
		if(form_position_h == 1)
		{
			$('deregistConfirmForm').style.display = 'none';
			$('deregistConfirmFocus').style.display = 'none';
			$('deregistConfirmOne').style.display = 'none';
			focusTab = DIVX_DEREG_ARER;
			initDeregistration();
			/*focusTab = DIVX_REG_AREA;
			$("registTitle").innerText = registrationTitleWords[1];
			var registContentPList = $("registContent").getElementsByTagName("p");
			registContentPList[0].innerText = registWords[0];
			registContentPList[1].innerText = registWords[1] + setting.registDivX();
			registContentPList[2].innerText = registWords[2];
			$("registOk").innerText = okCancelWords[0];
			$("registOk").style.left = "325px";
			$("registFocus").style.left = "325px";
			$("registFocus").style.display = 'block';
			$("registForm").style.display = 'block';
			focusDivxIndex=divxRegistFocus;*/
		}
		else
		{
			focusTab = OPTION_AREA;
			$('optionFocus_1').style.display = 'block';
			$('deregistConfirmForm').style.display = 'none';
			$('deregistConfirmFocus').style.display = 'none';
			$('deregistConfirmOne').style.display = 'none';
			$('option').style.display = 'block';
			$('menuFocus').src = "images/focus.png";  //此处处理：当divx弹出框消失后，menuFocus显示恢复为高亮
		}
	}
}

function toBack()
{
	if(focusTab == MAIN_AREA || focusTab == TIPS_AREA)
	{
		multimedia.stopThumbnailTask();
		top.$("main").src = "deviceList.html?media";
	}
	else if((currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
		&& focusTab == LIST_AREA)
	{
		multimedia.stopThumbnailTask();
		leaveCurList();
		if(currentMediaType == PIC_TYPE && fileListDepth != 0)
		{
			multimedia.createThumbnailTask(top.g_mediaFolderPath, currentMediaType, 0);
		}
	}
	else if((currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE)
		&& focusTab == LIST_AREA)
	{
		toLeft();
	}
	else if(focusTab == OPTION_AREA)
	{
		if($('option').style.display == 'block')//hide option menu
		{
			hideMenu(0);
			if(lastFocusTab != 0 ) //此处处理：考虑如果是从mainMenu直接按option键然后按返回键此时焦点不能变暗淡
			{
				$('menuFocus').src = "images/focus_Activation.png"; //此处处理：option area按back键，使menuFocus焦点变为亮度微弱的图片。
			}
		}
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		toLeft();
	}
	else if((focusTab == DIVX_REG_AREA) || (focusTab == DIVX_DEREG_ARER) || (focusTab == DIVX_DEREG_CONFIRM_AREA))
	{
		if(focusTab == DIVX_DEREG_ARER)
		{
			$('deregistForm').style.display = 'none';
			$('deregistFocus').style.display = 'none';
		}
		else if(focusTab == DIVX_DEREG_CONFIRM_AREA)
		{
			$('deregistConfirmForm').style.display = 'none';
			$('deregistConfirmFocus').style.display = 'none';
			$('deregistConfirmOne').style.display = 'none';
		}
		else
		{
			$('registForm').style.display = 'none';
			$('registFocus').style.display = 'none';
		}
		focusTab = OPTION_AREA;
		$('optionFocus_1').style.display = 'block';
		$('option').style.display = 'block';
		$('menuFocus').src = "images/focus.png";  //此处处理：当divx弹出框消失后，menuFocus显示恢复为
	}
	else 
	{
		top.$("main").src = "deviceList.html?media";
	}
}

function toHomePage()
{
	if(focusTab == TIPS_AREA)
	{
		top.g_mediaPosition = 1;
	}
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	multimedia.stopThumbnailTask();
	multimedia.deviceExitUninit();
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
}

function changeOptionFocus(flag)
{
	setOptionMenuFocus(-1, optionFocusIndex_1);
	if(flag == 1)//down
	{
		/*optionFocusIndex_1 = ((setting.divxActiveStatus() == 2) || (setting.divxActiveStatus() == 0))
			? parseInt((optionFocusIndex_1 + 1) % 3, 10)
			: parseInt((optionFocusIndex_1 + 1) % HC_I, 10);*/ //yiling0811
			optionFocusIndex_1 = parseInt((optionFocusIndex_1 + 1) % 4, 10);			
	}
	else if(flag == -1)//up
	{
		optionFocusIndex_1 = parseInt((optionFocusIndex_1 - 1 + optionFirstListLength) % optionFirstListLength, 10);
	}
	setOptionMenuFocus(optionFocusIndex_1, -1);
}

function changeMusicCtlFocus(offset)
{
	switch(focusIndex)
	{
		case 0:
			musicCtlImgTag[0].src = "images/USB-Music-Control-icon-Previous-S.png";
			break;
		case 1:
			if(bgmPlayStatus == S_PLAY)
			{
				musicCtlImgTag[1].src = "images/USB-Music-Control-icon-Pause-S.png";
			}
			else if(bgmPlayStatus == S_PAUSE)
			{
				musicCtlImgTag[1].src = "images/USB-Music-Control-icon-Play-S.png";
			}
			break;
		case 2:
			musicCtlImgTag[2].src = "images/USB-Music-Control-icon-Next-S.png";
			break;
	}
	focusIndex = parseInt(((focusIndex + offset + 3) % 3), 10);
	switch(focusIndex)
	{
		case 0:
			musicCtlImgTag[0].src = "images/USB-Music-Control-icon-PreviousFocus-S.png";
			break;
		case 1:
			if(bgmPlayStatus == S_PLAY)
			{
				musicCtlImgTag[1].src = "images/USB-Music-Control-icon-PauseFocus-S.png";
			}
			else if(bgmPlayStatus == S_PAUSE)
			{
				musicCtlImgTag[1].src = "images/USB-Music-Control-icon-PlayFocus-S.png";
			}
			break;
		case 2:
			musicCtlImgTag[2].src = "images/USB-Music-Control-icon-Next-Focus-S.png";
			break;
	}
}

function setFileListSpan()
{
	listSpanF = $(fName + getF(curListF)).getElementsByTagName('span');
}

function setIconListSpan()
{
	listSpanI = $(iName + getI(curListI)).getElementsByTagName('span');
}

function setOptionMenuFocus(currentIndex, lastIndex)
{
	if(currentIndex > -1)
	{
		optionMenuImg[currentIndex].src = "images/Icon-R-Focus.png";
	}
	if(lastIndex > -1)
	{
		optionMenuImg[lastIndex].src = "images/Icon-R-Disable.png";
	}
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < optionFirstListLength; i++)
		{
			optionMenuImg[i].src = "images/Icon-R-Disable.png";
		}
	}
	setOptionFocusScroll(currentIndex, lastIndex);
}

function setOptionFocusScroll(currentNum, lastNum)
{
	testLog("set option scroll 1");
	if(currentNum > -1)
	{
		setHTMLScroll($(optionListName + currentNum));
		setHTMLScroll($(optionListContentName + currentNum));
	}
	if(lastNum > -1)
	{
		resetScrollHtmlInner($(optionListName + lastNum), "hidden", "ellipsis");
		resetScrollHtmlInner($(optionListContentName + lastNum), "hidden", "ellipsis");
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < optionFirstListLength; i++)
		{
			resetScrollHtmlInner($(optionListName + i), "hidden", "ellipsis");
			resetScrollHtmlInner($(optionListContentName + i), "hidden", "ellipsis");
		}
	}
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
	for(var i = 0, len = document.styleSheets.length; i < len; i++)
	{
		tmp = getKeyFramse(i);
		for(var j = 0, len = tmp.length; j < len; j++)
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

function setHTMLScroll(tmp)
{
	if(isOverflowed(tmp))
	{
		resetScrollHtmlInner(tmp, "-webkit-marquee", "clip");
	}
	else
	{
		resetScrollHtmlInner(tmp, "hidden", "ellipsis");
	}
}

function setHTMLNotScroll(tmp)
{
	resetScrollHtmlInner(tmp, "hidden", "ellipsis");
}

function resetScrollHtmlInner(htmlTagList, displayStyle, overFlowStyle)
{
	htmlTagList.setAttribute("contentText", htmlTagList.innerHTML);
	htmlTagList.style.overflowX = displayStyle;
	htmlTagList.style.textOverflow = overFlowStyle;
	setTimeout(function(){htmlTagList.innerHTML = htmlTagList.getAttribute("contentText");}, 1);
}

function setFileListFocus(currentIndex, lastIndex)
{
	if(currentIndex > -1)
	{
		setHTMLScroll(listSpanF[currentIndex]);
	}
	if(lastIndex > -1)
	{
		//listSpanF[lastIndex].className = "fileColumnInfoStyle_static";
		resetScrollHtmlInner(listSpanF[lastIndex], "hidden", "ellipsis");
	}
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < 10; i++)
		{
			//listSpanF[i].className = "fileColumnInfoStyle_static";
			resetScrollHtmlInner(listSpanF[i], "hidden", "ellipsis");
		}
	}
}

function setIconListFocus(currentIndex, lastIndex)
{
	if(currentIndex > -1)
	{
		setHTMLScroll(listSpanI[currentIndex]);
	}
	if(lastIndex > -1)
	{
		//listSpanI[lastIndex].className = "iconColumnInfoStyle_static";
		resetScrollHtmlInner(listSpanI[lastIndex], "hidden", "ellipsis");
	}
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < 10; i++)
		{
			//listSpanI[i].className = "iconColumnInfoStyle_static";
			resetScrollHtmlInner(listSpanI[i], "hidden", "ellipsis");
		}
	}
}

function setSPOption()
{
	if(optionFocusIndex_1 == 0)//sort
	{
		operateFlag = false;
		displayLoadingBox(1);
		multimedia.setMediaFileSortOrder(optionFocusIndex_2);
		$('optionSecondList').style.display = 'none';
		$(optionListContentName + '0').innerText = sortArray[optionFocusIndex_2];
		sortOrder = optionFocusIndex_2;
		focusTab = OPTION_AREA;
		resetFocusShape();
		optionFocusIndex_1 = parseInt(optionFocusIndex_1 % 2, 10);
		$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusHeight + "px";
		cleanupFolderDepthInfo();
		refreshSortFileList();
		hideMenu(0);
		refreshMainMenuList();
		operateFlag = true;
		displayLoadingBox(0);
	}
	else//parse
	{
		multimedia.setMediaFileParser(optionFocusIndex_2);
		top.g_BGMmdiaFolderPath ="";
		multimedia.initUSBFileTree(top.g_deviceInfo.path);
		if(optionFocusIndex_2 == 1)//recursive
		{
			displayLoadingBox(1);
			operateFlag = false;
		}
		$('optionSecondList').style.display = 'none';
		$(optionListContentName + '1').innerText = parserArray[optionFocusIndex_2];
		parser = optionFocusIndex_2;
		focusTab = OPTION_AREA;
		resetFocusShape();
		optionFocusIndex_1 = parseInt(optionFocusIndex_1 % optionFirstListLength, 10);
		$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusHeight + "px";
		if(optionFocusIndex_2 == 0)//normal
		{
			hideMenu(0);
			cleanupFolderDepthInfo();
			refreshParserFileList();
			refreshMainMenuList();
		}
		else//recursive
		{
			hideMenu(0);
			return;
		}
	}
	if(focusTab == LIST_AREA)
	{
		if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
			setIconListFocus(focusIndex, -1);
		else
			setFileListFocus(focusIndex, -1);
		hideMenu(0);
		refreshMainMenuList();
	}
}

function toOption()
{
	if(currentIsDLNAFlag) return;
	if($('option').style.display == 'block')//hide option menu
	{
		hideMenu(0);
		top.g_channel.testLog("@@@@@@@@@@@@@@focusTab="+focusTab);
		top.g_channel.testLog("@@@@@@@@@@@@@@lastFocusTab="+lastFocusTab);
		if(focusTab == LIST_AREA)
		{
			if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
				setIconListFocus(focusIndex, -1);
			else
				setFileListFocus(focusIndex, -1);
			$('menuFocus').src = "images/focus_Activation.png";  //此处处理：针对当焦点在list area时，按option键出现divx弹出框，操作后回到option页面，再按option键使option页面消失，此时焦点回到list area,menuFocus不消失，但需要使其看起来略微暗淡一点
		}
		return;
	}
	else//show option menu
	{
		optionFirstListLength = 4;
		if(focusTab == LIST_AREA)
		{
			if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
				setIconListFocus(-1, focusIndex);
			else
				setFileListFocus(-1, focusIndex);
		}
		showIconEmptyTips(-1);
		optionFocusIndex_1 = 0;
		lastFocusTab = focusTab;
		focusTab = OPTION_AREA;
		resetFocusShape();
		sortOrder = multimedia.getMediaFileSortOrder();//[0]name [1]date
		parser = multimedia.getMediaFileParser();//[0]normal [1]recursive
		$(optionListContentName + '0').innerText = sortArray[sortOrder];
		$(optionListContentName + '1').innerText = parserArray[parser];
		testLog("option 6");
		$('option').style.display = 'block';
		$('optionFocus_1').style.display = 'block';
		setOptionMenuFocus(optionFocusIndex_1, -1);
		top.g_channel.testLog("@@@@@@@@@@@setting.divxActiveStatus()="+setting.divxActiveStatus());
		/*if((setting.divxActiveStatus() == 2) || (setting.divxActiveStatus() == 0))
		{
			optionFirstListLength = 3;
			var tmpLi = $('optionFirstList').getElementsByTagName('li');
			tmpLi[3].style.display = 'none';
			//$('deregisterType').style.display = 'none';
		}*/ //yiling0811
		hideMenu(DELAY_TIME_15);
	}
}

function enterRefreshFileColumn(type)//type[0]: folder list; type[1]: other info list
{
	$(fName + getF(curListF)).style.zIndex = 21;
	$(fName + getF(curListF)).style.left = cLeftDis + "px";//current list become bg
	$(fName + getF(curListF + 1)).style.zIndex = 22;
	$(fName + getF(curListF + 1)).style.left = cLeftDis + cSmallDis + "px";//info list become current list
	curListF = getF(curListF + 1);
	if(type == 0)
	{
		hideFScrollBar(getF(curListF + 1));
		$(fName + getF(curListF + 1)).style.display = 'block';
		$(fName + getF(curListF + 2)).style.zIndex = 1;
		$(fName + getF(curListF + 1)).style.left = (fileListDepth == 0) ?
			cMiddleDis + "px" : cMiddleDis + cSmallDis + "px";
		$(fName + getF(curListF + 2)).style.left = cRightDis + "px";
	}
}

function leaveRefreshFileColumn()
{
	if(fileListDepth == 0)
	{
		$(fName + getF(curListF)).style.left = cRightDis + "px";
		$(fName + getF(curListF + 1)).style.left = cRightDis + "px";
		$(fName + getF(curListF + 2)).style.left = cRightDis + "px";
		$(fName + getF(curListF + 3)).style.zIndex = 22;
		$(fName + getF(curListF + 3)).style.left = cLeftDis + "px";
		hideFScrollBar(getF(curListF));
		hideFScrollBar(getF(curListF + 1));
		hideFScrollBar(getF(curListF + 2));
	}
	else
	{
		$(fName + getF(curListF)).style.zIndex = 22;
		$(fName + getF(curListF)).style.left = cMiddleDis + cSmallDis + "px";
		$(fName + getF(curListF + 1)).style.left = cRightDis + "px";
		$(fName + getF(curListF + 2)).style.zIndex = 1;
		$(fName + getF(curListF + 2)).style.left = cLeftDis + "px";
		$(fName + getF(curListF + 3)).style.zIndex = 21;
		$(fName + getF(curListF + 3)).style.left = cLeftDis + cSmallDis + "px";
		hideFScrollBar(getF(curListF + 1));
	}
	curListF = getF(curListF + 3);
}

function showIconEmptyTips(time)
{
	if(time == -1)
	{
		$('iconListEmptyTips').style.display = 'none';
		return;
	}
	$('iconListEmptyTips').style.display = 'block';
	clearTimeout(iconFileEmptyTipsTimer);
	iconFileEmptyTipsTimer = setTimeout(function(){
		$('iconListEmptyTips').style.display = 'none';
	}, time);
}

function showFScrollBar(num, length, start)
{
	if(length > VC_F)
	{
		$(fUpArrowName + num).style.display = 'block';
		$(fDownArrowName + num).style.display = 'block';
		$(sfArea + num).style.display = 'block';
		$(sfName + num).style.height = parseInt(SCROLL_MAX_HEIGHT * VC_F / length) + "px";
		$(sfName + num).style.top =  SCROLL_F_TOP + parseInt(SCROLL_MAX_HEIGHT * start / length) + "px";
	}
	else
	{
		$(fUpArrowName + num).style.display = 'none';
		$(fDownArrowName + num).style.display = 'none';
		$(sfArea + num).style.display = 'none';
		$(sfName + num).style.height = 0 + "px";
		$(sfName + num).style.top = SCROLL_F_TOP + "px";
	}
}

function showIScrollBar(num, length, start)
{
	var row = parseInt(length / VC_I);
	var startRow = parseInt(start / VC_I);
	row = (parseInt(length % VC_I) == 0) ? row : row + 1;
	startRow = (parseInt(start % VC_I) == 0) ? startRow : startRow + 1;
	if(row > VC_I)
	{
		$(iUpArrowName + num).style.display = 'block';
		$(iDownArrowName + num).style.display = 'block';
		$(siArea + num).style.display = 'block';
		$(siName + num).style.height = parseInt(SCROLL_MAX_HEIGHT * VC_I / row) + "px";
		$(siName + num).style.top =  SCROLL_F_TOP + parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
	}
	else
	{
		$(iUpArrowName + num).style.display = 'none';
		$(iDownArrowName + num).style.display = 'none';
		$(siArea + num).style.display = 'none';
		$(siName + num).style.height = 0 + "px";
		$(siName + num).style.top = SCROLL_F_TOP + "px";
	}
}

function hideFScrollBar(num)
{
	$(sfArea + num).style.display = 'none';
	$(sfName + num).style.height = 0 + "px";
	$(sfName + num).style.top = 0 + "px";
}

function hideIScrollBar(num)
{
	$(siArea + num).style.display = 'none';
	$(siName + num).style.height = 0 + "px";
	$(siName + num).style.top = 0 + "px";
}

function hideMenu(time)
{
	clearTimeout(menuTimer);
	if(time == 0)
	{
		setOptionMenuFocus(-1, -1);
		focusTab = lastFocusTab;
		if(focusTab != MAIN_AREA)
			$('focus').style.display = 'block';
		$('option').style.display = 'none';
		$('optionSecondList').style.display = 'none';
	}
	else
	{
		menuTimer = setTimeout(function(){
			setOptionMenuFocus(-1, -1);
			focusTab = lastFocusTab;
			if(focusTab != MAIN_AREA)
				$('focus').style.display = 'block';
			$('option').style.display = 'none';
			$('optionSecondList').style.display = 'none';
			}, time);
	}
}

function updateFileIconImg(divName, list, start)
{
	var tmpPicPath;
	var listImg = $(divName).getElementsByTagName('img');
	var length = list.length;
	length = length - listStart;
	for(var i = 0, countTmp = HC_I * VC_I; i < countTmp; i++)
	{
		if(listImg[i].style.display == 'none')
		{
			//listImg[i].style.display = 'none';
			continue;
		}
		if(list[start + i].type == ALL_TYPE)
		{
			continue;
		}
		else if(list[start + i].type == PIC_TYPE)
		{
			tmpPicPath = multimedia.getPicThumbNail(list[start + i].path, listImg[i].width, listImg[i].height);
			if(tmpPicPath != null && tmpPicPath != "")
			{
				listImg[i].src = tmpPicPath;
			}
		}
		else if(list[start + i].type == VIDEO_TYPE)
		{
			tmpPicPath = multimedia.getVideoScreenShot(list[start + i].path, listImg[i].width, listImg[i].height);
			if(tmpPicPath != null && tmpPicPath != "")
			{
				listImg[i].src = tmpPicPath;
			}
		}
	}
}

function fillFileIconImg(divName, list, start)
{
	clearTimeout(updateImgTimer);
	updateImgTimer = setTimeout(function(){
		updateFileIconImg(divName, list, start);
		}, DELAY_TIME);
	return;
}

function fillFileDiv(divName, type, list, start)
{
	var listSpan = $(divName).getElementsByTagName('span');
	var listImg = $(divName).getElementsByTagName('img');
	var listTmp = $(divName).getElementsByTagName('li');
	var length = list.length;
	if(type == ALL_TYPE)//all file
	{
		for(var i = 0; i < VC_F; i++)
		{
			if(i > length - 1 - start)
			{
				listTmp[i].style.display = 'none';
				listSpan[i].style.display = 'none';
				listImg[i].style.display = 'none';
				continue;
			}
			else
			{
				listTmp[i].style.display = 'block';
				listSpan[i].style.display = 'block';
				listImg[i].style.display = 'block';
			}
			
			listSpan[i].innerText = list[start + i].name;
			if(list[start + i].type == ALL_TYPE)
			{
				listImg[i].src = "images/folder.png";
			}
			else if(list[start + i].type == PIC_TYPE)
			{
				listImg[i].src = "images/picture_icon.png";
			}
			else if(list[start + i].type == VIDEO_TYPE)
			{
				listImg[i].src = "images/video_icon.png";
			}
			else if(list[start + i].type == MUSIC_TYPE)
			{
				listImg[i].src = "images/music_icon.png";
			}
		}
	}
	else if(type == PIC_TYPE)//picture
	{
		for(var i = 0; i < 16; i++)
		{
			if(i > length - 1 - start)
			{
				listTmp[i].style.display = 'none';
				listSpan[i].style.display = 'none';
				listImg[i].style.display = 'none';
				continue;
			}
			else
			{
				listTmp[i].style.display = 'block';
				listSpan[i].style.display = 'block';
				listImg[i].style.display = 'block';
			}
			listSpan[i].style.display = 'block';
			listImg[i].style.display = 'block';
			listSpan[i].innerText = list[start + i].name;
			if(list[start + i].type == ALL_TYPE)
			{
				listImg[i].src = "images/folder_2.png";
			}
			else
			{
				listImg[i].src = "images/picture_icon_2.png";
			}
		}
	}
	else if(type == VIDEO_TYPE)//video
	{
		for(var i = 0; i < 16; i++)
		{
			if(i > length - 1 - start)
			{
				listTmp[i].style.display = 'none';
				listSpan[i].style.display = 'none';
				listImg[i].style.display = 'none';
				continue;
			}
			else
			{
				listTmp[i].style.display = 'block';
				listSpan[i].style.display = 'block';
				listImg[i].style.display = 'block';
			}
			listSpan[i].style.display = 'block';
			listImg[i].style.display = 'block';
			listSpan[i].innerText = list[start + i].name;
			if(list[start + i].type == ALL_TYPE)
			{
				listImg[i].src = "images/folder_2.png";
			}
			else
			{
				listImg[i].src = "images/video_icon_2.png";
			}
		}
	}
	else if(type == MUSIC_TYPE)//music
	{
		for(var i = 0; i < VC_F; i++)
		{
			if(i > length - 1 - start)
			{
				listTmp[i].style.display = 'none';
				listSpan[i].style.display = 'none';
				listImg[i].style.display = 'none';
				continue;
			}
			else
			{
				listTmp[i].style.display = 'block';
				listSpan[i].style.display = 'block';
				listImg[i].style.display = 'block';
			}
			
			listSpan[i].style.display = 'block';
			listImg[i].style.display = 'block';
			listSpan[i].innerText = list[start + i].name;
			if(list[start + i].type == ALL_TYPE)
			{
				listImg[i].src = "images/folder.png";
			}
			else if(list[start + i].type == MUSIC_TYPE)
			{
				listImg[i].src = "images/music_icon.png";
			}
			else
			{
				listImg[i].src = "images/play_all_music.png";
			}
		}
	}
}

function fillIconDiv(divName, list, start)
{
	var listSpan = $(divName).getElementsByTagName('span');
	var listImg = $(divName).getElementsByTagName('img');
	var listTmp = $(divName).getElementsByTagName('div');
	var length = list.length;
	var tmpPicPath = "";
	length = length - listStart;
	for(var i = 0, countTmp = HC_I * VC_I; i < countTmp; i++)
	{
		if(i > length - 1)
		{
			listTmp[i].style.display = 'none';
			listSpan[i].style.display = 'none';
			listImg[i].style.display = 'none';
			continue;
		}
		else
		{
			listTmp[i].style.display = 'block';
			listSpan[i].style.display = 'block';
			listImg[i].style.display = 'block';
		}
		listSpan[i].innerText = list[start + i].name;
		if(list[start + i].type == ALL_TYPE)
		{
			listImg[i].src = "images/folder_2.png";
		}
		else if(list[start + i].type == PIC_TYPE)
		{
			tmpPicPath = multimedia.getThumbNail(list[start + i].path);
			listImg[i].src = (tmpPicPath != null && tmpPicPath != "")
				? tmpPicPath : "images/picture_icon_2.png";
		}
		else if(list[start + i].type == VIDEO_TYPE)
		{
			//tmpPicPath = multimedia.getVideoScreenShot(list[start + i].path, listImg[i].width, listImg[i].height);
			tmpPicPath == "";
			listImg[i].src = (tmpPicPath != null && tmpPicPath != "")
				? tmpPicPath : listImg[i].src = "images/video_icon_2.png";
		}
	}
	//fillFileIconImg(divName, list, start);
}

function fillOptionSecList()
{
	var li = $("optionSecondUl_1").getElementsByTagName("li");
	if(optionFocusIndex_1 == SORT_TYPE)//sort
	{
		li[0].innerText = sortArray[0];
		li[1].innerText = sortArray[1];
	}
	else if(optionFocusIndex_1 == PARSER_TYPE)//parse
	{
		li[0].innerText = parserArray[0];
		li[1].innerText = parserArray[1];
	}
	return;
}

function refreshMiniMusicCtl()
{
	$('musicCtl').style.display = 'block';
	currentPlayingMusic = multimedia.getCurrentPlayingMediaInfo();
	musicCtlSpanTag[0] = currentPlayingMusic.name;
	musicCtlSpanTag[1] = currentPlayingMusic.artist;
	if(progressBarTimer) 
	{
		clearInterval(progressBarTimer);
	}
	progressBarTimer = setInterval("refreshProgressBar()", 900);
}

function arrowFDisplay(length)
{
	$(fUpArrowName + getF(curListF)).style.display = (listStart == 0) ? 'none' : 'block';
	$(fDownArrowName + getF(curListF)).style.display = (listStart + pageVCount < length) ? 'block' : 'none';
}

function arrowIDisplay(length)
{
	$(iUpArrowName + getI(curListI)).style.display = (listStart == 0) ? 'none' : 'block';
	$(iDownArrowName + getI(curListI)).style.display = (listStart + lCount < length) ? 'block' : 'none';
}

function displayFocusBox(flag)
{
	if(flag)//show
	{
		focusDisplayFlag = true;
		if(focusTab == LIST_AREA)
		{
			$("focus").style.display = 'block';
		}
		$("menuFocus").style.display = 'block';
	}
	else//hide
	{
		focusDisplayFlag = false;
		$("focus").style.display = 'none';
		$("menuFocus").style.display = 'none';
	}
}

function displayTipsBox(flag)
{
	tipsBoxFlag = flag;
	switch(tipsBoxFlag)
	{
		case 0://hide box
			$('tipsBoxArea').style.display = 'none';
			break;
		case 1://ok button
			$('focusButton').style.left = tipsBoxMiddleDistance + "px";
			$('tipsBoxArea').style.display = 'block';
			$('okButton').style.display = 'block';
			$('noButton').style.display = 'none';
			$('yesButton').style.display = 'none';
			break;
		case 2://no & yes buttons
			tipsBoxIndex = 1;
			$('focusButton').style.left = tipsBoxDistance * (tipsBoxIndex  + 1) + tipsBoxButtonWidth * tipsBoxIndex + "px";
			$('tipsBoxArea').style.display = 'block';
			$('okButton').style.display = 'none';
			$('noButton').style.display = 'block';
			$('yesButton').style.display = 'block';
			break;
		default:
			break;
	}
}

function displayLoadingBox(flag)
{
	switch(flag)
	{
		case 0://hide loading box
			operateFlag = true;
			$('loadingBox').style.display = 'none';
			break;
		case 1://display loading box
			operateFlag = false;
			$('loadingBox').style.display = 'block';
			break;
	}
}

function displayLoadingTips(flag)
{
	switch(flag)
	{
		case 0://hide loading box
			$('loadingTips').style.left = cRightDis + "px";
			$('loadingTips').style.display = 'none';
			break;
		case 1://display loading box
			$('loadingTips').style.display = 'block';
			$('loadingTips').style.left = (fileListDepth > 0) 
				? cMiddleDis + cSmallDis + "px" 
				: cMiddleDis + "px";
			break;
	}
}

//need remodify the para
function refreshFileList(list, divName)//type: [0]all files [1]pics [2]video [3]music
{
	listLength = list.length;
	if(divName == "")
	{
		$('fileInfo').style.left = cRightDis + "px";
		$('emptyFolderTips').style.left = cRightDis + "px";
		if(currentMediaType == ALL_TYPE	|| currentMediaType == MUSIC_TYPE)//all file
		{
			$(fName + curListF).style.left = cLeftDis + "px";
			for(var i = 1; i < 4; i++)//init all file & music list div position
			{
				$(fName + getF(curListF + i)).style.left = cRightDis + "px";
			}
			for(var i = 0; i < 3; i++)//init pic & video list div position
			{
				$(iName + getI(curListI + i)).style.left = cRightDis + "px";
			}
			showFScrollBar(getF(curListF), list.length, listStart);
			fillFileDiv((fName + "Ul" + getF(curListF)), currentMediaType, list, listStart);
			arrowFDisplay(list.length);
		}
		else if(currentMediaType == PIC_TYPE
			|| currentMediaType == VIDEO_TYPE)//picture
		{
			$(iName + getI(curListI)).style.left = cLeftDis + "px";
			for(var i = 1; i < 3; i++)
			{
				$(iName + getI(curListI + i)).style.left = cRightDis + "px";
			}
			for(var i = 0; i < 4; i++)
			{
				$(fName + getF(curListF + i)).style.left = cRightDis + "px";
			}
			showIScrollBar(getI(curListI), list.length, listStart);
			fillIconDiv((iName + "Ul" + getI(curListI)), list, listStart);
			arrowIDisplay(list.length);
		}
	}
	else
	{
		if(currentMediaType == ALL_TYPE	|| currentMediaType == MUSIC_TYPE)
		{
			fillFileDiv(divName, currentMediaType, list, listStart);
			showFScrollBar(getF(curListF), list.length, listStart);
			arrowFDisplay(list.length);
		}
		else
		{
			fillIconDiv(divName, list, listStart);
			showIScrollBar(getI(curListI), list.length, listStart);
			arrowIDisplay(list.length);
		}
	}
}

function refreshMainMenuList()
{
	if(focusTab == MAIN_AREA)
	{
		focusIndex = currentMediaType;
	}
	for(var i = 0, len = menuListDiv.length; i < len; i++)
	{
		menuListDiv[i].style.color = "#aaaaaa";
	}
	menuListDiv[currentMediaType].style.color = "#ffffff";
	$('menuFocus').style.top = focusMenuTopDistance + (currentMediaType * focusMenuHeight) + "px";
}

function refreshParserFileList()
{
	currentList = getFileList(top.g_deviceInfo.path, 0, -1);
	listLength = currentList.length;
	if(listLength <= 0)
	{
		focusTab = MAIN_AREA;
		focusIndex = currentMediaType;
		resetFocusShape();
		$('emptyListTips').style.display = 'block';
		return;
	}
	setPageListVCount();
	fileListDepth = 0;
	if(currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE)
	{
		listStart = 0;
		refreshFileList(currentList, "");
		focusIndex = 0;
		setFileListSpan();
		focusTab = lastFocusTab;
		resetFocusShape();
		if(focusTab == LIST_AREA)
		{
			refreshFileInfo(currentList[listStart + focusIndex]);
		}
	}
	else if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
	{
		listStart = 0;
		refreshFileList(currentList, "");
		focusIndex = 0;
		setIconListSpan();
		focusTab = lastFocusTab;
		resetFocusShape();
	}
}

function refreshSortFileList()
{
	currentList = getFileList(top.g_mediaFolderPath, 0 , -1);
	listLength = currentList.length;
	setPageListVCount();
	if(currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE)
	{
		listStart = 0;
		refreshFileList(currentList, fName + "Ul" + curListF);
		focusIndex = 0;
		setFileListSpan();
		focusTab = lastFocusTab;
		resetFocusShape();
		if(focusTab == LIST_AREA)
		{
			refreshFileInfo(currentList[listStart + focusIndex]);
		}
	}
	else if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)
	{
		listStart = 0;
		refreshFileList(currentList, iName + "Ul" + curListI);
		//fillIconDiv(iName + "Ul" + getI(curListI), currentList, 0);
		focusIndex = 0;
		setIconListSpan();
		focusTab = lastFocusTab;
		resetFocusShape();
	}
}

function refreshTitleInfo(tmp)
{
	if(tmp == -1)
	{
		$('titleContent').innerText = top.g_deviceInfo.name;
	}
	else if(tmp != null && tmp != "" && fileListDepth > 0)
	{
		$('titleContent').innerText = top.g_deviceInfo.name + " > " + tmp;
	}
	else
	{
		$('titleContent').innerText = top.g_deviceInfo.name;
	}
}

function refreshFileInfo(filetmp)
{
	if(filetmp.type == ALL_TYPE)
	{
		$(fUpArrowName + getF(curListF + 1)).style.display = 'none';
		$(fDownArrowName + getF(curListF + 1)).style.display = 'none';
		var list = getFileList(filetmp.path, 0, VC_F);
		if(list.length == 0)
		{
			$('fileInfo').style.left = cRightDis + "px";
			$('emptyFolderTips').style.display = 'block';
			$('emptyFolderTips').style.left = (fileListDepth == 0) ?
				cMiddleDis + "px" : cMiddleDis + cSmallDis + "px";
			return;
		}
		else
		{
			$('emptyFolderTips').style.display = 'none';
			$('emptyFolderTips').style.left = 1920 + "px";
		}
		$('fileInfo').style.left = cRightDis + "px";
		$(fName + getF(curListF + 1)).style.display = 'block';
		if(fileListDepth == 0)
		{
			$(fName + getF(curListF + 1)).style.left = cMiddleDis + "px";
		}
		else
		{
			$(fName + getF(curListF + 1)).style.left = cMiddleDis + cSmallDis + "px";
		}
		$(fName + getF(curListF + 1)).style.zIndex = 22;
		
		fillFileDiv(fName + "Ul" + getF(curListF + 1), ALL_TYPE, list, 0);
	}
	else
	{
		$('emptyFolderTips').style.display = 'none';
		$('emptyFolderTips').style.left = cRightDis + "px";
		//$('playMusicAll').style.display = 'none';
		$('fileInfo').style.display = 'block';
		$('fileInfo').style.zIndex = 26;
		if(fileListDepth == 0)
		{
			$('fileInfo').style.left = cMiddleDis + "px";
		}
		else
		{
			$('fileInfo').style.left = cMiddleDis + cSmallDis + "px";
		}
		var img = $('fileInfo').getElementsByTagName('img');
		var listSpan = $('fileInfo').getElementsByTagName('span');
		if(filetmp.type == PIC_TYPE)
		{
			var info = getFileInfo(filetmp);
			if(info.thumbnail != null && info.thumbnail != "")
			{
				img[0].src = info.thumbnail;
			}
			else
			{
				img[0].src = "images/USB-picture-Default.png";
			}
			listSpan[1].innerText = fileNameText + ": " + info.name;
			listSpan[2].innerText = fileSizeText + ": " + info.width + "X" + info.height;
			listSpan[3].innerText = fileDateText + ": " + info.year;
			listSpan[4].innerText = "";
			listSpan[5].innerText = "";
			listSpan[6].innerText = "";
			return;
		}
		else if(filetmp.type == VIDEO_TYPE)
		{	
			var tmp = multimedia.getVideoScreenShot(filetmp.path, img[0].width, img[0].height);
			var info = getFileInfo(filetmp);
			if(tmp != null && tmp != "")
			{
				img[0].src = tmp;
			}
			else
			{
				img[0].src = "images/USB-video-Default.png";
			}
			listSpan[1].innerText = fileNameText + ": " + info.name;
			listSpan[2].innerText = fileDirectorText + ": " + info.director;
			listSpan[3].innerText = fileCopyrightText + ": " + info.copyright;
			listSpan[4].innerText = fileDateText + ": " + info.year;
			listSpan[5].innerText = "";
			listSpan[6].innerText = "";
			return;
		}
		else if(filetmp.type == MUSIC_TYPE)
		{	
			var info = getFileInfo(filetmp);
			if(info.cover != null && info.cover != "")
			{
				img[0].src = info.cover;
			}
			else
			{
				img[0].src = "images/USB-Music-Default.png";
			}
			listSpan[1].innerText = fileNameText + ":  " + info.name;
			listSpan[2].innerText = fileArtistText + ":  " + info.artist;
			listSpan[3].innerText = fileAlbumText + ":  " + info.album;
			listSpan[4].innerText = fileYearText + ":  " + info.year;
			listSpan[5].innerText = "";
			listSpan[6].innerText = "";
			return;
		}
		else if(filetmp.type == ICON_TYPE)
		{	
			//img[0].src = multimedia.getMovieThumbnail(filetmp.path, img[0].width, img[0].height);
			//$('playMusicAll').style.display = 'block';
			$('fileInfo').style.display = 'none';
			//$('playMusicAll').style.zIndex = 26;
		}
		var listLi = $('fileInfo').getElementsByTagName('li');
		listLi[0].innerText = filetmp.name;
		listLi[1].innerText = filetmp.type;
	}
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
		$('progressBarUse').style.display = 'block';
		elapsed = multimedia.getNowPlayTime();
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
			$('progressBarUse').style.display = 'block';
		}
		else
		{
			elapsed = 0;
			//$('progressBarUse').style.display = 'none';
		}
		//$("elspased").innerText = doTime(elapsed);
	}
	else
	{
		fileDuration = 0;
		$('progressBarUse').style.display = 'none';
	}	
}

function resetFocusShape()
{
	if(focusTab == MAIN_AREA)
	{
		$('focus').style.display = 'none';
		focusMenuHeight = 150;
		focusWidth = 0;
		focusMenuTopDistance = 120;
		menuListDiv[currentMediaType].style.color = "#ffffff";
		$('menuFocus').src = "images/focus.png";
		$('menuFocus').style.top = focusMenuTopDistance + (currentMediaType * focusMenuHeight) + "px";
		$('menuFocus').style.left = 0 + "px";
		setHTMLScroll(menuListDiv[currentMediaType]);
	}
	else if(focusTab == MUSIC_AREA) //on music ctl 1, not used
	{
		if(focusIndex == 0)
		{
			$('focus').style.top = "780px";
			$('focus').style.left = "0px";
			$('focus').style.width = "298px";
			$('focus').style.height = "97px";
		}
		else//on music ctl 2
		{
			$('focus').style.width = "98px";
			$('focus').style.height = "97px";
		}
	}
	else if(focusTab == LIST_AREA) 
	{
		setHTMLNotScroll(menuListDiv[currentMediaType]);
		$('menuFocus').src = "images/focus_Activation.png";
		$('focus').style.display = 'block';
		focusTopDistance = 143;
		if(currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE)
		{
			focusHeight = 114;
			focusWidth = 0;
			focusLeftDistance = 314;
			$('focus').style.top = focusTopDistance + focusIndex * focusHeight + "px";
			$('focus').style.left = (fileListDepth == 0) ? 
				focusLeftDistance + "px" : (focusLeftDistance + cSmallDis) + "px";
			$('focus').style.width = 744 + "px";
			$('focus').style.height = 114 + "px";
			$('focus').style.backgroundImage = "url(images/Focus-list.png)";
		}
		else if((currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)) //on list: picture/video folder
		{
			focusHeight = 228;
			focusWidth = 370;
			focusLeftDistance = 355;
			$('focus').style.top = focusTopDistance + "px";
			$('focus').style.left = (fileListDepth == 0) ? 
				focusLeftDistance + "px" : (focusLeftDistance + cSmallDis) + "px";
			$('focus').style.width = 316 + "px";
			$('focus').style.height = focusHeight + "px";
			$('focus').style.backgroundImage = "url(images/Focus-picture.png)";
		}
	}
	else if(focusTab == OPTION_AREA) //on option
	{
		setHTMLNotScroll(menuListDiv[currentMediaType]);
		$('focus').style.display = 'none';
		focusOptionHeight = 80;
		focusOptionTopDistance = 60;
		$('optionFocus_1').style.top = focusOptionTopDistance + "px";
		$('optionFocus_1').style.left = 0 + "px";
		$('optionFocus_1').style.width = 540 + "px";
		$('optionFocus_1').style.height = focusOptionHeight + "px";
		$('optionFocus_1').src = "images/Focus_USB_1.png";//
		$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
	}
	else if(focusTab == OPTION_DETAIL_AREA) //on option list
	{
		focusOptionHeight = 80;
		focusOptionTopDistance = 30;
		$('optionFocus_1').src = "images/Focus_USB_1_.png";
		$('optionFocus_2').style.top = focusOptionTopDistance + "px";
		$('optionFocus_2').style.left = 0 + "px";
		$('optionFocus_2').style.width = 300 + "px";
		$('optionFocus_2').style.height = focusOptionHeight + "px";
		$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
	}
}

function resetOptionSecBg()
{
	$('optionSecondList').style.top = 30 + optionFocusIndex_1 * 80 + "px";
	//$('optionSec_1').style.height = 60 + 6 + 80 * 2 + "px";
	return;
}

function setPageListVCount()
{
	listLength = (currentList != null && currentList != "" && currentList[0] != null && currentList[0] != "")
		? currentList.length : 0;
	
	if(currentMediaType == ALL_TYPE || currentMediaType == MUSIC_TYPE)//all file & music
	{
		pageVCount = (listLength < VC_F) ? listLength : VC_F;
		lCount = pageVCount;
	}
	else if(currentMediaType == PIC_TYPE || currentMediaType == VIDEO_TYPE)//video & pic
	{
		if(parseInt(listLength / VC_I, 10) < VC_I)//less than one page
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

function exitMediaListPage()
{
	top.g_mediaPosition = 1;
	multimedia.deviceExitUninit();
	multimedia.stopThumbnailTask();
	top.$("main").src = "deviceList.html?remove";
}

function enterNextList(file)//for pic & video
{
	var list = getFileList(file.path, 0, -1);
	if(list.length == 0)
	{
		displayLoadingBox(0);
		showIconEmptyTips(DELAY_TIME_3);
		return;
	}
	setIconListFocus(-1, focusIndex);
	fileListDepth++;
	if(fileListDepth > 0)
	{
		$('gobackBox').style.display = 'block';
	}
	addLastIndex();
	addFolderName(file.name);
	refreshTitleInfo(getLastFolder());
	resetFocusShape();
	top.g_mediaFolderPath = file.path;
	currentList = getFileList(file.path, 0, -1);
	setPageListVCount();
	listStart = 0;
	focusIndex = 0;	
	fillIconDiv(iName + "Ul" + getI(curListI + 1), currentList, 0);
	$(iName + getI(curListI)).style.zIndex = 26;	
	$(iName + getI(curListI)).style.left = cLeftDis + "px";	
	$(iName + getI(curListI + 1)).style.zIndex = 27;
	$(iName + getI(curListI + 1)).style.left = cLeftDis + cSmallDis + "px";
	$(iName + getI(curListI + 2)).style.zIndex = 1;
	$(iName + getI(curListI + 2)).style.left = cRightDis + "px";
	curListI = getI(curListI + 1);
	setIconListSpan();
	showIScrollBar(getI(curListI), currentList.length, listStart);
	setIconListFocus(focusIndex, -1);
	arrowIDisplay(currentList.length);
}

function leaveCurList()
{
	if(focusTab != LIST_AREA)
	{
		return;
	}
	if(fileListDepth == 0)
	{
		refreshTitleInfo(-1);
		setIconListFocus(-1, focusIndex);
		listStart = 0;
		focusTab = MAIN_AREA;
		fileListDepth = 0;
		focusIndex = currentMediaType;
		top.g_mediaFolderPath = top.g_deviceInfo.path;
		currentList = getFileList(top.g_mediaFolderPath, 0, -1);
		if(currentList.length == 0)//&& currentIsDLNAFlag
		{
			focusTab = TIPS_AREA;
			$('eb_info').innerText = top.netConnRemind[3];
			displayTipsBox(1);
			//exitMediaListPage();
			return;
		}
		setPageListVCount();
		resetFocusShape();
		$('focus').style.top = (focusTopDistance + focusIndex * focusHeight) + "px";
		setTimeout(function(){refreshFileList(currentList, "");}, 1);
		return;
	}
	else
	{
		--fileListDepth;
		if(fileListDepth < 1)
		{
			$('gobackBox').style.display = 'none';
		}
		removeFolderPath();
		refreshTitleInfo(getLastFolder());
		setIconListFocus(-1, focusIndex);
		listStart = getLastListStart();
		focusIndex = getLastFocusIndex();
		removeLastIndex();
		top.g_mediaFolderPath = getLastPath(top.g_mediaFolderPath);
		currentList = getFileList(top.g_mediaFolderPath, 0, -1);
		if(currentList.length == 0)//&& currentIsDLNAFlag
		{
			exitMediaListPage();
			return;
		}
		listLength = currentList.length;
		var hCount = parseInt(focusIndex % HC_I, 10);
		var vCount = parseInt(focusIndex / VC_I, 10);
		$('focus').style.top = (focusTopDistance + vCount * focusHeight) + "px";
		$('focus').style.left = (fileListDepth == 0) ?
			(focusLeftDistance + focusWidth * hCount) + "px" :
			(focusLeftDistance + cSmallDis + focusWidth * hCount) + "px";
		refreshFileList(currentList, (iName + "Ul" + getI(curListI + 2)));
		//top.g_mediaFolderPath = getLastPath(top.g_mediaFolderPath);
		$(iName + getI(curListI)).style.zIndex = 1;
		$(iName + getI(curListI)).style.left = cRightDis + "px";	
		if(fileListDepth == 0)
		{
			$(iName + getI(curListI + 2)).style.zIndex = 27;
			$(iName + getI(curListI + 2)).style.left = cLeftDis + "px";
			$(iName + getI(curListI + 1)).style.zIndex = 1;
			$(iName + getI(curListI + 1)).style.left = cRightDis + "px";
		}
		else
		{
			$(iName + getI(curListI + 2)).style.zIndex = 27;
			$(iName + getI(curListI + 2)).style.left = cLeftDis + cSmallDis + "px";
			$(iName + getI(curListI + 1)).style.zIndex = 26;
			$(iName + getI(curListI + 1)).style.left = cLeftDis + "px";
		}
		curListI = getI(curListI + 2);
		setIconListSpan();
		setIconListFocus(focusIndex, -1);
		showIScrollBar(getI(curListI), listLength, listStart);
		setPageListVCount();
		arrowIDisplay(listLength);
	}
}

function getFolderDepth(str)
{
	if(str == "" || str == null)
	{
		return 0;
	}
	var count = str.split("/");
	return count.length - 1;
}

function cleanupFolderDepthInfo()
{
	var count = getFolderDepth(top.g_listIndex[currentMediaType]);
	top.g_listIndex[currentMediaType] = "";
	for(var i = 0; i < count; i++)
	{
		top.g_listIndex[currentMediaType] += "/0-0";
	}
}

function addLastIndex()
{
	top.g_listIndex[currentMediaType] += "/" + listStart + "-" + focusIndex;
}

function removeLastIndex()
{
	top.g_listIndex[currentMediaType] = getLastPath(top.g_listIndex[currentMediaType]);
}

function addFolderName(tmp)
{
	top.g_path += "/" + tmp;
	return;
}

function removeFolderPath()
{
	top.g_path = getLastPath(top.g_path);
	return;
}

function getLastFolder()
{
	var count = top.g_path.lastIndexOf("/");
	if(count == -1)
	{
		return -1;
	}
	var tmp = top.g_path.substring(count + 1, top.g_path.length);
	return tmp;
}

function getLastListStart()
{
	var count = top.g_listIndex[currentMediaType].lastIndexOf("/");
	var tmp = top.g_listIndex[currentMediaType].substring(count + 1, top.g_listIndex[currentMediaType].length);
	count = tmp.lastIndexOf("-");
	return parseInt(tmp.substring(0, count) / 1, 10);
}

function getLastFocusIndex()
{
	var count = top.g_listIndex[currentMediaType].lastIndexOf("/");
	var tmp = top.g_listIndex[currentMediaType].substring(count + 1, top.g_listIndex[currentMediaType].length);
	count = tmp.lastIndexOf("-");
	return parseInt(tmp.substring(count + 1, tmp.length) / 1, 10);
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

function getF(tmp)
{
	return parseInt(tmp % 4, 10);
}

function getI(tmp)
{
	return parseInt(tmp % 3, 10);
}

function getLastPath(tmpPath)
{
	if(tmpPath == null || tmpPath == "")
	{
		return "";
	}
	var count = tmpPath.lastIndexOf("/");
	var path = tmpPath.substring(0 , count);
	return path;
}

function getFileList(path, start, count)
{
	//count == [-1]: get all file 
	//count != [-1]: get the num of count files
	return multimedia.getMediaFileList(top.g_deviceInfo.type, 
		currentMediaType, path, start, count);
}

function getFileInfo(file)
{
	var info;
	if(file.type == PIC_TYPE)
	{
		info = multimedia.getMediaPictureFileInfo(file.path);
	}
	else if(file.type == VIDEO_TYPE)
	{
		info = multimedia.getMediaVideoFileInfo(file.path);
	}
	else if(file.type == MUSIC_TYPE)
	{
		info = multimedia.getMediaMusicFileInfo(file.path);
	}
	return info;
}

function getFileIndex(file, list)
{
	for(var i = 0, len = list.length; i < len; i++)
	{
		if(file.name == list[i].name)
		{
			return i;
		}
	}
	return 0;
}

function getMediaFileDuration(path)
{
	fileDuration = multimedia.getMediaFileDuration(path);
	if(fileDuration < 0)
	{
		fileDuration = 0;
	}
	multimedia.testLog("The duration: "  + fileDuration);
	return doTime(fileDuration);
}

//add for divx

function initRegistration()
{
	$("registTitle").innerText = registrationTitleWords[1];
	$("registContent1").innerHTML = registWords[0];
	$("registContent2").innerHTML = registWords[1] + setting.registDivX();
	$("registContent3").innerHTML = registWords[2];
	$("registOk").innerText = okCancelWords[0];
	$("registOk").style.left = "325px";
	$("registFocus").style.left = "323px";
	$("registFocus").style.display = 'block';
	$("registForm").style.display = 'block';
	$("registOk").style.display = 'block';
}
function initDeregistration()
{
	$("deregistTitle").innerText = deregistrationTitleWords[2];
	$("deregistContent1").innerHTML = deregistWords[0]+setting.deregistDivX();
	$("deregistContent2").innerHTML = deregistWords[1];
	$("deregistContent3").innerHTML = deregistWords[2];
	$("deregistOne").innerText = okCancelWords[0];
	$("deregistZero").innerText = okCancelWords[1];
	$("deregistZero").style.left = "200px";
	$("deregistOne").style.left = "450px";
	form_position_h = 1;
	$("deregistFocus").style.display = 'block';
	$("deregistFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	$("deregistOne").style.display = 'block';
	$("deregistForm").style.display = 'block';
	$("deregistZero").style.display = 'block';
}
function initDeregistConfirm()
{
	$("deregistConfirmTitle").innerText = deregistConfirmTitleWords[1];
	$("deregistConContent1").innerHTML = deregistConfirmWords[0];
	$("deregistConContent2").innerHTML = deregistConfirmWords[1];
	$("deregistConfirmOne").innerText = okCancelWords[0];
	$("deregistConfirmZero").innerText = okCancelWords[1];
	$("deregistConfirmZero").style.left = "200px";
	form_position_h = 1;
	$("deregistConfirmFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	$("deregistConfirmZero").style.display = 'block';
	$('deregistConfirmFocus').style.display = 'block';
	$("deregistConfirmForm").style.display = 'block';
	$("deregistConfirmOne").style.display = 'block';
}
// end divx 
function clickMenuFunction(index)
{
	if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
		return;
	if(focusTab == MAIN_AREA)
	{
		if(currentMediaType != index)
		{
			menuListDiv[focusIndex].style.color = "#aaaaaa";
			focusIndex = index;
			listStart = 0;
			fileListDepth = 0;
			currentMediaType = focusIndex;
			currentList = getFileList(top.g_deviceInfo.path, listStart, -1);
			setPageListVCount();
			menuListDiv[focusIndex].style.color = "#ffffff";
			$('menuFocus').style.top = focusMenuTopDistance + (focusIndex * focusMenuHeight) + "px";
			refreshFileList(currentList, "");
			toRight();
		}
		else
		{
			toRight();
		}
	}
	else if(focusTab == LIST_AREA)
	{
		if(currentMediaType == index)
		{
			$('gobackBox').style.display = 'none';
			focusIndex = index;
			focusTab = MAIN_AREA;
			toRight();
		}
		else
		{
			$('focus').style.display = 'none';
			$('gobackBox').style.display = 'none';
			menuListDiv[currentMediaType].style.color = "#aaaaaa";
			setHTMLNotScroll(menuListDiv[currentMediaType]);
			focusTab = MAIN_AREA;
			focusIndex = index;
			menuListDiv[focusIndex].style.color = "#ffffff";
			setHTMLScroll(menuListDiv[focusIndex]);
			$('menuFocus').style.top = focusMenuTopDistance + (focusIndex * focusMenuHeight) + "px";
			toRight();
		}
	}
}

function clickFileListFFunction(index)
{
	if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
		return;
	if(focusTab == MAIN_AREA)
	{
		menuListDiv[focusIndex].style.color = "#aaaaaa";
		setHTMLNotScroll(menuListDiv[focusIndex]);
		menuListDiv[previousMediaType].style.color = "#ffffff";
		setHTMLScroll(menuListDiv[previousMediaType]);
		focusIndex = previousMediaType;
		$('menuFocus').style.top = focusMenuTopDistance + (focusIndex * focusMenuHeight) + "px";
		toRight();
	}
	setFileListFocus(-1, focusIndex);
	focusIndex = index;
	$('focus').style.top = (focusTopDistance + focusIndex * focusHeight) + "px";
	setFileListFocus(focusIndex, -1);
	setTimeout(function(){
		toRight();
		refreshFileInfo(currentList[listStart + focusIndex]);
		}, CLICK_DELAY_TIME);
}

function clickFileListCFunction(index)
{
	if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
		return;
	if(focusTab == MAIN_AREA)
	{
		menuListDiv[focusIndex].style.color = "#aaaaaa";
		setHTMLNotScroll(menuListDiv[focusIndex]);
		menuListDiv[previousMediaType].style.color = "#ffffff";
		setHTMLScroll(menuListDiv[previousMediaType]);
		focusIndex = previousMediaType;
		$('menuFocus').style.top = focusMenuTopDistance + (focusIndex * focusMenuHeight) + "px";
		toRight();
	}
	setIconListFocus(-1, focusIndex);
	focusIndex = index;
	var hCount = parseInt(focusIndex % HC_I, 10);
	var vCount = parseInt(focusIndex / VC_I, 10);
	$('focus').style.top = (focusTopDistance + vCount * focusHeight) + "px";
	$('focus').style.left = (fileListDepth == 0) ?
		(focusLeftDistance + focusWidth * hCount) + "px" :
		(focusLeftDistance + cSmallDis + focusWidth * hCount) + "px";
	setIconListFocus(focusIndex, -1);
	setTimeout(function(){toOK();}, CLICK_DELAY_TIME);
	return;
}

function clickFirstOptionMenuFunction(index)
{
	if(focusTab == OPTION_DETAIL_AREA)
	{
		toBack();
	}
	setOptionMenuFocus(-1, optionFocusIndex_1);
	optionFocusIndex_1 = index;
	$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
	setOptionMenuFocus(optionFocusIndex_1, -1);
	setTimeout(function(){toRight();}, DELAY_TIME);
}

function clickSecondOptionMenuFunction(index)
{
	optionFocusIndex_2 = index;
	$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
	setTimeout(function(){setSPOption();}, DELAY_TIME);
}

function clickFileListUpArrow(index)
{
	if(focusTab != LIST_AREA)
		return;
	if(listStart - VC_F >= 0)
	{
		listStart -= VC_F;
	}
	else
	{
		listStart = 0;
	}
	//curListF == index
	refreshFileList(currentList, (fName + "Ul" + curListF));
	$(sfName + getF(curListF)).style.top = SCROLL_F_TOP + 
		parseInt(SCROLL_MAX_HEIGHT * listStart / listLength) + "px";
	clearTimeout(freshInfoTimer);
	freshInfoTimer = setTimeout(function(){
		refreshFileInfo(currentList[listStart + focusIndex]);
		}, 1000);
}

function clickFileListDownArrow(index)
{
	if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
		return;
	if(focusTab == MAIN_AREA)
	{
		menuListDiv[focusIndex].style.color = "#aaaaaa";
		setHTMLNotScroll(menuListDiv[focusIndex]);
		menuListDiv[previousMediaType].style.color = "#ffffff";
		setHTMLScroll(menuListDiv[previousMediaType]);
		focusIndex = previousMediaType;
		$('menuFocus').style.top = focusMenuTopDistance + (focusIndex * focusMenuHeight) + "px";
		toRight();
	}
	testLog("the test1 VC_F["+VC_F+"], listStart["+listStart+"], currentList.length["+currentList.length+"]");
	if(listStart + VC_F * 2 < currentList.length)
	{
		listStart += VC_F;
	}
	else
	{
		listStart = currentList.length - VC_F;
	}
	testLog("the test2 VC_F["+VC_F+"], listStart["+listStart+"], currentList.length["+currentList.length+"]");
	//curListF == index
	setTimeout(function(){
		refreshFileList(currentList, (fName + "Ul" + curListF));
		$(sfName + getF(curListF)).style.top = SCROLL_F_TOP + 
			parseInt(SCROLL_MAX_HEIGHT * listStart / listLength) + "px";
		clearTimeout(freshInfoTimer);
		freshInfoTimer = setTimeout(function(){
			refreshFileInfo(currentList[listStart + focusIndex]);
			}, 1000);
		}, 50);
}

function clickIconListUpArrow(index)
{
	var row = 0;
	var startRow = 0
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
	row = parseInt(listLength / VC_I);
	startRow = parseInt(listStart / VC_I);
	row = (parseInt(listLength % VC_I) == 0) ? row : row + 1;
	startRow = (parseInt(listStart % VC_I) == 0) ? startRow : startRow + 1;
	refreshFileList(currentList, (iName + "Ul" + curListI));
	$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
		parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
}

function clickIconListDownArrow(index)
{
	var row = 0;
	var startRow = 0
	if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
		return;
	if(focusTab == MAIN_AREA)
	{
		menuListDiv[focusIndex].style.color = "#aaaaaa";
		setHTMLNotScroll(menuListDiv[focusIndex]);
		menuListDiv[previousMediaType].style.color = "#ffffff";
		setHTMLScroll(menuListDiv[previousMediaType]);
		focusIndex = previousMediaType;
		$('menuFocus').style.top = focusMenuTopDistance + (focusIndex * focusMenuHeight) + "px";
		toRight();
	}
	if(listStart + VC_I * HC_I * 2 < currentList.length)
	{
		listStart += VC_I * HC_I;
		row = parseInt(currentList.length / VC_I);
		startRow = parseInt(listStart / VC_I);
		row = (parseInt(currentList.length % VC_I) == 0) ? row : row + 1;
	}
	else
	{
		var tmp = (currentList.length % HC_I) == 0
			? HC_I : (currentList.length % HC_I);
		listStart = currentList.length - (VC_I -1) * HC_I - tmp;
		//listStart = currentList.length - VC_I * HC_I;
		if(listStart + focusIndex >= currentList.length)
		{
			focusIndex = parseInt((VC_I -1) * HC_I + (currentList.length % HC_I)) - 1;
			var hCount = parseInt(focusIndex % HC_I, 10);
			var vCount = parseInt(focusIndex / VC_I, 10);
			$('focus').style.top = (focusTopDistance + vCount * focusHeight) + "px";
			$('focus').style.left = (fileListDepth == 0) ?
				(focusLeftDistance + focusWidth * hCount) + "px" :
				(focusLeftDistance + cSmallDis + focusWidth * hCount) + "px";
		}
		row = parseInt(currentList.length / VC_I);
		startRow = parseInt(listStart / VC_I);
		row = (parseInt(currentList.length % VC_I) == 0) ? row : row + 1;
		startRow = (parseInt(listStart % VC_I) == 0) ? startRow : startRow + 1;

	}
	setTimeout(function(){	
		refreshFileList(currentList, (iName + "Ul" + curListI));
		$(siName + getI(curListI)).style.top = SCROLL_F_TOP + 
			parseInt(SCROLL_MAX_HEIGHT * startRow / row) + "px";
		}, 50);
}

function bookingPreOperate()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	multimedia.deviceExitUninit();
	multimedia.toRestoreSource(0, 0);
	top.g_temp = "";
	return;
}

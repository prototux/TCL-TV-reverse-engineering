var playListStart = 0;
var playListIndex = 0;
var optionFocusIndex_1 = 0;
var optionFocusIndex_2 = 0;
var optionFocusIndex_3 = 0;
var focusTab = 0;//[0]displayArea, [1]option, [2]optionList, [3]playList, [4]progressBar
var focusTabIndex = 0;
var playStatus = -1;//playing/pause/error
var fileDuration = 0;//the current time of playing media file
var currentFileInfo = "";
var elapsed = 0;
var switch3DFlag = 0;
var firstEnterFlag = true;
var tipsBoxFlag = 0;//[0]hide [1]ok button [2]no & yes buttons
var tipsBoxIndex = 0;
var tipsBoxMiddleDistance = 313;
var tipsBoxDistance = 140;
var tipsBoxButtonWidth = 204;
var optionHeightDistance = 80;
var optionSecondListTopDistance = 30;
var optionBarHeight = 60;
var currentTitle = 0;   //yiling0811

var ICON_UP = 0;
var ICON_DOWN = 1;
var SEC_INDEX = 1;
var MODE_3D_FIELD_DEPTH_VALUE = 10;
var SHORT_BAR_MAX_VALUE = 100;
var PIC_ZOOM_LIST_LENGTH = 5;

var RC_TYPE = "ro.sita.model.MODEL_RCU_NAME_CFG.RCU_NAME";
var mode3DFDBack = 0;
var videoFileInfo = "";
var optionMenuImg = "";
var clickOptionBarList = "";
var clickPicPresetDiv = "";
var clickPlayListLi = "";
var optionMenuList_1 = "";
var optionMenuList_2 = "";
var optionMenuList_3 = "";
var displayAttri = "displayIndex";//[-1]hidden; [>=0]display
var clickIndexAttri = "indexAttri";
var optionSecContentName = "optionSecLi_";
var optionListName = "optionInfo";
var optionListContentName = "optionInfoContent";
var quickEmptyTipsBoxDiv = "quickEmptyTipsBox";
var quickEmtpyTipsInfo = "quickEmtpyTipsInfo";
var quickContainInfoDiv = "quickContainInfo";
var optionUpArrowName = "optionUpArrow_";
var optionDownArrowName = "optionDownArrow_";
var scrollBarName = "scrollBar";
var playListScrollName = "playlistScrollBar";
var playListName = "name";
var metaSpanList = "";
var currentPlayList = "";
var optionSecListSpan = 0;
var informationSpan = 0;
var informationBoxLi = 0;
var currentFileIndex = 0;
var quickMenuListDiv = 0;
var quickMenuListSpan = 0;
var MAX_LENGTH_ONE_PAGE = 0;
var OPTION_MAX_SEC_LIST = 5;
var seekCount = 0;
var seekPoint = 0;//
var seekStartTime = 0;
var quickCount = 0;
var quickInfoText = "";
var quickOffSet = 0;
var quickIndex = 0;
var quickMenuStartIndex = 0;
var quickMenuIndex = 0;
var quickMenuType = -1;
var Q_MENU_SUBTITLE = -1;
var Q_MENU_TITLE = -1;
var Q_MENU_LANG	= -1;
var Q_MENU_3D = -1;

var progressBarPercent = 0;
var tmpStartIndex = 0;
var previousKeyCount = 0;
var ff_fb_flag = false;
var sf_sb_flag = false;
var lawRatingFlag = false;//[0]no rating info; [1]has rating info
var exitFlag 				= false;
var seekableFlag 			= true;
var sfsbableFlag 			= true;
var pauseableFlag 			= true;
var operatableFlag 			= true;

var skipFlagSubtitle 		= false;
var skipFlagSoundtrack 		= false;
var skipFlagChapter 		= false;
var skipFlagTitle 			= false;
var skipFlag3dMode 			= false;
var skipFlag3DLR 			= true;
var skipFlag3DFieldDepth 	= true;
var errorFlag 				= false;
var metadataTipsFlag 		= false;
var dmrFlag 				= false;
var is2DTo3DFlag			= false;

var dmrExitTimer = 0;
var picZoomStartIndex = 0;
var screenModeStartIndex = 0;
var mode3dStartIndex = 0;
var screenModeCount = 0;
var subtitleInfoList = 0;
var subtitleCount = 0;
var subtitleStartIndex = 0;
var exSubtitleStartIndex = 0;
var exSubtitleCount = 0;
var soundTrackCount = 0;
var soundTrackStartIndex = 0;
var soundTrackInfo = "";
var titleCount = 0;
var titleStartIndex = 0;
var chapterCount = 0;
var chapterStartIndex = 0;
var chapterSetCount = 0;
var chapterSetIndex = 0;
var chapterSetIndexStr = "";
var chapterInfoContainer = "";
var massInfo = "";

var optionListLi 			= "";
var optionListNameSpan		= "";
var picPresetListName 	= "";
var playListFocusIndex 		= 0;
var optionSecListImg_1		= "";
var optionInfoDetailSpan	= "";
var bottomTipsLi			= "";
var picZoomDiv				= "";
var picZoomImg				= "";
var picZoomSpan				= "";
var picZoomCheckbox			= "";
var picPresetCheckbox 		= "";

//subtitle menu
var PROGRESS_START_LEFT_OFFSET = 45 + 165;
var OPTION_BAR_START_LEFT_OFFSET = 340 + 270;
var scrollTopDistance = 60;
var SCROLL_MAX_HEIGHT = 960;
var cpTopDistance = 60;
var cpFlagHeight = 80;
var SHORT_BAR_LENGTH = 100;
var focusOptionHeight = 0;
var focusOptionTopDistance = 0;
var subtitleBarIndex = 0;
var subtitleBarStartIndex = 0;
var tipsTimer = 0;
var menuTimer = 0;
var chapterTimer = 0;
var infoBoxTimer = 0;
var metaInfoTimer = 0;
var operationTimer = 0;
var seekSettingTimer = 0;
var progressBarTimer = 0;
var tmpInfoTimer = 0;
var ENTER_USB_TYPE	= 0;
var ENTER_DLNA_TYPE = 1;

var playListAnimateTime = 250;//
var SEEK_TIME = 30;
var SEEK_TIME_DELAY = 2000;
var DELAY_TIME = 50;
var FADE_TIME_3 = 3000;
var FADE_TIME_4 = 4000;
var FADE_TIME_5 = 5000;
var FADE_TIME_15 = 15000;
var BAR_LENGTH = 1500;
var OPTION_BAR_LENGTH = 900;
var TIPS_WIDTH_1 = 400;
var TIPS_WIDTH_2 = 1300;
var playListLeftDistance = 1220;
var screenWidth = 1940;
var REFRESH_TIME = 1000;

var S_PLAY 			= 1;
var S_PAUSE 		= 2;
var S_EOS 			= 3;
var S_PRE 			= 4;
var S_NEXT 			= 5;
var S_STOP_RESUME	= 6;
var S_FF_FB			= 7;
var S_SF_SB			= 8;
var S_ERROR 		= -1;

var FILE_TYPE_DEFAULT 	= 0;
var FILE_TYPE_AVI		= 1;
var FILE_TYPE_MKV		= 2;
var FILE_TYPE_MP4 		= 3;
var FILE_TYPE_MV		= 4;
var FILE_TYPE_RMVB		= 5;
var playingFileType		= 0;	

var ERROR_NONE						= 0;//not error
var ERROR_VIDEO_ERROR 				= 1;
var ERROR_AUDIO_ERROR 				= 2;
var ERROR_VIDEO_NOT_SUPPORTED 		= 3;
var ERROR_AUDIO_NOT_SUPPORTED 		= 4;
var ERROR_AUDIO_CANT_RECONGNIZE		= 5;
var ERROR_VIDEO_CANT_RECONGNIZE		= 6;
var ERROR_CANT_OPEN 				= 7;
var ERROR_OTHER 					= 10;
var ERROR_NET_DISCONNECTED			= 11;

var OPTION_PANNEL_TYPE 		= 0;//[0]HD [1]SD

var OPTION_PIC_PRESET 		= -1;
var OPTION_BACK_LIGHT		= -1;
var OPTION_BRIGHTNESS		= -1;
var OPTION_CONTRAST			= -1;
var OPTION_SATURATION		= -1;
var OPTION_TINT				= -1;
var OPTION_SHARPNESS		= -1;
var OPTION_SOUND_PRESET		= -1;
var OPTION_FOOTBALL_MODE	= -1;
var OPTION_PLAY_MODE		= -1;
var OPTION_SCREEN_MODE 		= -1;
var OPTION_3D_MODE 			= -1;
var OPTION_3D_L_R			= -1;
var OPTION_3D_FILED_DEPTH	= -1;
var OPTION_SUBTITLE 		= -1;
var OPTION_SOUND_TRACK 		= -1;
var OPTION_TITLE			= -1;
var OPTION_CHAPTER			= -1;
var OPTION_INFORMATION		= -1;

var optionFirstListLength = 0;

var optionIndexPicPreset 		= 0;
var optionIndexBacklight 		= 1;
var optionIndexBrightness 		= 2;
var optionIndexContrast 		= 3;
var optionIndexSaturation 		= 4;
var optionIndexTint 			= 5;
var optionIndexSharpness 		= 6;
var optionIndexSoundPreset 		= 7;
var optionIndexFootballMode		= 8;
var optionIndexPlayMode 		= 9;
var optionIndexScreenMode 		= 10;
var optionIndex3DMode 			= 11;
var optionIndexLRSwitch 		= 12;
var optionIndexFieldDepth 		= 13;
var optionIndexSubtitle 		= 14;
var optionIndexSoundTrack 		= 15;
var optionIndexTitle 			= 16;
var optionIndexChapter 			= 17;
var optionIndexInfo 			= 18;

var DISPLAY_AREA 			= 0;
var OPTION_AREA 			= 1;
var OPTION_DETAIL_AREA		= 2;
var PLAY_LIST_AREA 			= 3;
var PROGRESS_AREA 			= 4;
var PICTURE_PRESET_AREA		= 5;
var QUICK_MENU_AREA			= 10;
var TIPS_AREA				= 11;
var OPTION_3D_FILED_AREA	= 12;
var PIC_ZOOM_AREA			= 13;
var OPTION_BAR_AREA			= 14;
var SOUND_PRESET_AREA		= 15;

var DIVX_AUTHOR_AREA        = 6;
var DIVX_REG_AREA           = 7;
var DIVX_RENTAL_CONFIRM     = 8;
var DIVX_RENTAL_EXPIRED     = 9;

var optionFirstStartIndex = 0;
var OPTION_FIRST_MAX_COUNT = 12;//in one page
var OPTION_MAX_COUNT = 18;
var OPTION_INFO_COUNT = 0;
var OPTION_INFO_MAX	= 5;
var PLAYLIST_MAX_LENGTH = 12;
var MAX_QUICK_MENU_COUNT = 12;

var optionInfoArray = new Array(OPTION_MAX_COUNT);
var currentOptionFirstListArray = new Array(OPTION_MAX_COUNT);//
var optionBarNameArray = new Array(7);
//add football mode option next to sound preset option
var optionListNameArray = [top.optionVideoListArray_1[0],
						   top.picOptions[1], top.picOptions[2], top.picOptions[3], 
						   top.picOptions[4], top.picOptions[5], top.picOptions[6],  
						   top.optionVideoListArray_1[1], top.footballModeName, top.optionVideoListArray_1[2],
						   top.optionVideoListArray_1[3], top.optionVideoListArray_1[4], top.optionVideoListArray_1[5], 
						   top.optionVideoListArray_1[6], top.optionVideoListArray_1[7], top.optionVideoListArray_1[8], 
						   top.optionVideoListArray_1[9], top.optionVideoListArray_1[10], top.optionVideoListArray_1[11]];
var optionListArray_1 = top.optionVideoListArray_1;
var optionListArray_2 = top.optionVideoListArray_2;
var bottomTipsText = top.bottomTipsText;
//modify sound & picture preset option list for football mode
var soundPresetArray = [top.souPreset[0], top.souPreset[1], top.resetStadium,
						top.souPreset[3],top.souPreset[4],top.audioDescriptionOptions[1]];
var picturePresetArray = [top.picPreset[0], top.picPreset[1], top.resetStadium,
						  top.picPreset[3], top.picPreset[4], top.picPreset[5]];
var playModeArray = top.videoPlayModeArray;
var screenModeArray = "";
var screenModeHDArray = top.screenModeHDArray;
var screenModeSDArray = top.screenModeSDArray;
var modeOptionOnOff	= top.offOn;
var Mode3DArray = top.Mode3DArray;
var Mode3DLRArray = top.offOn;
var Mode3DLR = top._3dOptions[2];
var ModeFiledDepth = top._3dOptions[3];
var soundTrackText = top.videoOptionListArray[1];
var offInfo = top.videoOptionListArray[0];
var chapterInfo = top.videoOptionListArray[4]
var picturePresetBarInfo = top.optionVideoListArray_1[0]//"Picture preset";
var subMenuTitleText = top.videoOptionListArray[2];
var langMenuTitleText = top.langMenuTitleText;
var titleMenuTitleText = top.videoOptionListArray[3];
var langInfoText = top.videoOptionListArray[1];
var STOP_RESUME_INFO = top.STOP_RESUME_INFO;
var naInfo = top.naInfo;
var noAudioTipsInfo = top.others[27];
var noneInfo = "";
var eb_tips = top.eb_tips;
var eb_yes = top.eb_yes;
var eb_no = top.eb_no;
var ok_button = top.ok_button;
var eb_info = top.eb_info;
var consoleInfoArray = top.consoleInfoArray;
var cantOperateText = top.cantOperateText;
var chapterChangeInfo = top.chapterChangeInfo;
var metaDataArray = top.metaDataArray;
var metaTitleInfo = top.metaTitleInfo;
var metaChapterInfo = top.metaChapterInfo;
var fileNameText = top.fileNameText;
var fileDateText = top.fileDateText;
var fileDurationText = top.fileDurationText;
var fileDirectorText = top.fileDirectorText;
var fileCopyrightText = top.fileCopyrightText;
var quickMenuEmptyText = top.quickMenuEmptyText;
var mode3DMenuTitleText = top.mode3DMenuTitleText;
var netConnectFailText = top.netConnRemind[3];

var loadingInfo = top.videoLoadingInfo;
var pgInfo = top.pgInfo;

var FOCUS_DISTANCE = 0;
var FOCUS_LEFT_DISTANCE = 0;
var FOCUS_TOP_DISTANCE = 0;

//add for divx
var authorizationTitleWords 	    = [top.sysOptions[10],top.sysAdOptions[3],top.sysAdOptions[1],top.sysAdOptions[2]]; //author
var authorizaitonWords				= top.mediaAuthorization;
var okCancelWords					= top.okCancel;

var registrationTitleWords 	    = [top.sysOptions[10],top.sysAdOptions[0],top.sysAdOptions[1],top.sysAdOptions[2]];  //reg
var registWords					= top.sysRegistDes;

var rentalTitleWords 			= [top.sysOptions[10],top.sysAdOptions[5],top.sysAdOptions[6],top.sysAdOptions[2]];   //rental
var rentalConfirmWords			= top.rentalConfirmation;
var rentalExpiredWords 			= top.rentalExpired;
var form_position_h				= 0;
var DIALOG_START				= 198;
var DIALOG_STEP					= 250;

var multimedia 	= top.g_media;
var setting 	= top.g_setting;

window.onload = init;
window.onunload = unInit;
document.onkeydown = keyProc;
document.onnotify = notifyProcess;

var protectInfo=0;
var drmFlag   =0;
var drmType  =0;
var drmStatus =0;
var rentalNum =0;
var rentalCount =0;
var divxActiveStatus = 0;

var setTimeoutPictureModeId = 0;
var setTimeoutPictureModePosition= 0;

//add for football mode focus style
var picPresetFocus = ["images/Focus2.png", "images/Focus2_.png"];
var soundPresetFocus = ["images/Focus_USB_2.png", "images/Focus_USB_2_.png"];

var isXVYCCEnable = setting.getProperty("ro.sita.model.TCL_PANEL_SETTING.PANEL_XVYCC_ENABLE", "0");

function $(id)
{
    return document.getElementById(id);
}

function testLog(tmp)
{
	var str = "       => Areos: " + tmp;
	console.log(str);
}

function init()
{
	top.g_temp = "media";
	top.RemoteConntrolType = "Media";//lqt-设置播放时的type
	top.g_isMediaCenter = top.NDM_VIDEO_Play;
	if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
	{
		var bottomTipsImg = $("bottomTips").getElementsByTagName("img");
		bottomTipsImg[4].src ="images/icon-Option_au.png";
	}
	skipFlag3dMode = (top.g_setting.is3DPanel > 0) ? false : true;
	OPTION_PANNEL_TYPE = multimedia.getPannelMode();
	screenModeArray = (OPTION_PANNEL_TYPE == 0)	? screenModeHDArray : screenModeSDArray;//[0]hd [1]sd

	initTextInfo();
	top.setContext5In1Type(top.CONTEXT_MUSIC_MOVIE_PLAYER);
	addMouseListener();
	exitFlag = false;
	playStatus = S_EOS;
	playListStart = 0;
	playListIndex = 0;
	seekCount = 0;
	seekPoint = 0;
	focusTab = DISPLAY_AREA;
	top.showBackground(0);
	var str = window.location.search;
	if(str != null && str != "")//get "?" after url
	{
		if(str == "?dmr")//与re_dmr有区别，re_dmr是在dmr模式下再执行dmr推送，所以不需要切信源
		{
			multimedia.changeSourceToMedia();
			multimedia.setEnterDeviceType(2);
		}
		dmrFlag = true;
		top.g_isMediaCenter = top.NDM_DMR_Video;
		mediaPlay("0");
		return;
	}
	checkOptionListInfo();
	if(!skipFlag3dMode)//[true]:not support 3d
	{
		optionInfoArray[OPTION_3D_MODE] = multimedia.getVideo3DMode();
		if(optionInfoArray[OPTION_3D_MODE] != 0 && top.glassConnectFlag == 0)
		{
			switch3DFlag = true;
			top.$("globleShow").contentWindow.showGlassRemind(0);
			if(top.bluetoothStart==0)
			{
				setTimeout("setting.bluetoothMaster()",800);
			}
			top.bluetoothStart=1;
		}
		else
		{
			switch3DFlag = false;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
		}
	}
	else
	{
		switch3DFlag = false;
		top.$("globleShow").contentWindow.hiddenGlassRemind();
	}
	clearTimeout(operationTimer);
	operationTimer = setTimeout(function(){
		top.g_availableStatus = mediaPlay(top.g_currentMedia.path);
		currentPlayList = multimedia.getCurrentVideoPlayingList(0, -1);
		setPlayListMaxLength();}, DELAY_TIME);
	top.g_MediaVideoPlayCount++;
	testLog("init done");
}

function unInit()
{
	if(dmrFlag)
	{
		top.g_temp = "";
	}
	setMEMC(0);
}

function initTextInfo()
{
	optionListLi = $("optionFirstUl").getElementsByTagName('li');
	for(var i = 0; i < optionListLi.length; i++)
	{
		optionListLi[i].setAttribute(displayAttri, -1);
	}

	var tmp = 0;
	Q_MENU_SUBTITLE = tmp++;
	Q_MENU_TITLE = tmp++;
	Q_MENU_LANG	= tmp++;
	if(!skipFlag3dMode)//[ture]: not support 3d
	{
		Q_MENU_3D = tmp++;
	}

	optionListNameSpan = $('optionFirstUl').getElementsByClassName('optionFirstListSpan_1_marquee');
	for(var i = 0; i < optionListNameSpan.length; i++)
	{
		optionListNameSpan[i].innerText = optionListNameArray[i];
	}

	for(var i = 0; i < consoleInfoArray.length; i++)
	{
		$("consoleTips" + i).innerText = consoleInfoArray[i];
	}
	picPresetListName = $('picturePresetSelectBar').getElementsByTagName('span');

    if(0 == isXVYCCEnable)
    {
        picPresetListName[0].innerText = picturePresetArray[0];
        picPresetListName[1].innerText = picturePresetArray[1];
        picPresetListName[2].innerText = picturePresetArray[2];
        picPresetListName[3].innerText = picturePresetArray[3];
        picPresetListName[4].innerText = picturePresetArray[5];
    }
    else
    {
        for(var i = 0; i < picPresetListName.length; i++)
        {
            picPresetListName[i].innerText = picturePresetArray[i];
        }
    }
	bottomTipsLi = $("bottomTips").getElementsByTagName('li');
	for(var i = 0; i < bottomTipsLi.length; i++)
	{
		bottomTipsLi[i].innerText = bottomTipsText[i];
	}

	$('eb_tips').innerText = eb_tips;
	$('okButton').innerText = ok_button;
	$('noButton').innerText = eb_no;
	$('yesButton').innerText = eb_yes;
	$('picturePresetTitle').innerText = picturePresetBarInfo;
	$("pictureZoomTitle").innerText = top.optionVideoListArray_1[3];
	picZoomDiv = $("pictureZoomSelectBar").getElementsByTagName('div');
	picZoomImg = $("pictureZoomSelectBar").getElementsByClassName('picZoomType');
	picZoomSpan = $("pictureZoomSelectBar").getElementsByTagName('span');
	picZoomCheckbox = $("pictureZoomSelectBar").getElementsByClassName("picZoomCheckbox");
	picPresetCheckbox = $("picturePresetSelectBar").getElementsByClassName("picPresetCheckbox");
	for(var i = 0; i < picZoomDiv.length; i++)
	{
		if(i < screenModeArray.length)
		{
			picZoomDiv[i].style.display = 'block';
			picZoomSpan[i].innerText = screenModeArray[i];
			fillPicZoomList(i);
		}
		else
		{
			picZoomDiv[i].style.display = 'none';
		}
	}
	clickOptionBarList = $('optionBarBlock').getElementsByClassName('optionBarBG');
	$("quickEmtpyTipsInfo").innerText = quickMenuEmptyText;
	optionInfoDetailSpan = $("optionInfoDetails").getElementsByTagName('span');
	optionMenuImg = $("optionFirstUl").getElementsByClassName('optionFirstUlImg');
	clickPicPresetDiv = $('picturePresetSelectBar').getElementsByTagName('div');
	clickPlayListLi = $('playList').getElementsByTagName('li');
	optionMenuList_1 = $("optionFirstList").getElementsByTagName('li');
	optionMenuList_2 = $("optionSecondUl").getElementsByTagName('li');
	optionSecListSpan = $("optionSecondUl").getElementsByTagName('span');
	optionSecListImg_1 = $("optionSecondUl").getElementsByTagName('img');
	informationBoxLi = $("fileInfoBox").getElementsByTagName('li');
	quickMenuListDiv = $('quickContainInfo').getElementsByTagName('div');
	quickMenuListSpan = $('quickContainInfo').getElementsByTagName('span');

	MAX_QUICK_MENU_COUNT = quickMenuListDiv.length;

	optionBarNameArray[0] = $('backLightBar');
	optionBarNameArray[1] = $('brightnessBar');
	optionBarNameArray[2] = $('contrastBar');
	optionBarNameArray[3] = $('saturationBar');
	optionBarNameArray[4] = $('tintBar');
	optionBarNameArray[5] = $('sharpnessBar');
	optionBarNameArray[6] = $('fieldDepthBar');

	optionBarNameArray[0].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[1];
	optionBarNameArray[1].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[2];
	optionBarNameArray[2].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[3];
	optionBarNameArray[3].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[4];
	optionBarNameArray[4].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[5];
	optionBarNameArray[5].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[6];
	optionBarNameArray[6].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[12];
}

function keyProc(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		//lqt
		case top.VK_VIRTUAL_REMOTE:
		{
			if($('option').style.display == 'block')
			{
			}
			else
			{
				//显示或者不显示--lqt
				top.virtualRemoteControl();
			}
			break;
		}
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
			console.log("lqt---videoPlay.js---clientX: "+clientX);
			console.log("lqt---videoPlay.js---clientY: "+clientY);
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
				top.g_setting.setProperty("memory.app.ui.virtualRemote.state","off");
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			
			break;
		}
		case top.VK_POWER://power
			multimedia.mediaStop(1);
		case top.VK_PANEL_LONG_OK://add for 5in1 virtual key
		case top.VK_PANEL_OK:
		case top.VK_PANEL_UP:
		case top.VK_PANEL_DOWN:
		case top.VK_PANEL_LEFT:
		case top.VK_PANEL_RIGHT:
		case top.VK_MUTE://mute
			top.keyDownProcess(evt);
			return;
		case top.VK_VOLUME_UP://volume up
		case top.VK_VOLUME_DOWN://volume down
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.setFrameFocusPage("globleShow");
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
	if((exitFlag || !operatableFlag) && 
		(keycode != top.VK_BACK && keycode != top.VK_MENU && keycode != top.VK_EXIT && keycode != top.VK_TV)) 
	{
		return;
	}
	if((focusTab==DIVX_AUTHOR_AREA) || (focusTab==DIVX_REG_AREA) || (focusTab==DIVX_RENTAL_CONFIRM) || (focusTab==DIVX_RENTAL_EXPIRED))
	{
		top.g_channel.testLog("come in divx framework key effect@@focusTab="+focusTab);
		switch(keycode)
		{
			case top.VK_LEFT:
					toLeft();
					break;
			case top.VK_RIGHT:
					toRight();	
					break;
			case top.VK_BACK:
					toBack();
					break;
			case top.VK_ENTER:
					toOK();
					break;
			case top.VK_POWER://power
					top.keyDownProcess(evt);
					break;
			default:
					break;
		}
	}
	else
	{
		if(playStatus == S_EOS && focusTab != TIPS_AREA)
			return;
		switch (keycode)
		{
			case top.VK_UP:
				if(focusTab != TIPS_AREA)
					toUp();
				break;
			case top.VK_DOWN:
				if(dmrFlag) break;
				if(focusTab != TIPS_AREA)
					toDown();
				break;
			case top.VK_LEFT:
				if(focusTab != TIPS_AREA || (focusTab == TIPS_AREA && tipsBoxFlag == 2))
					toLeft();
				break;
			case top.VK_RIGHT:
				if(focusTab != TIPS_AREA || (focusTab == TIPS_AREA && tipsBoxFlag == 2))
					toRight();
				break;
			case top.VK_BACK:
				toBack();
				break;
			case top.VK_OPTION:
				//lqt--当点击设置快捷键的时候，如果虚拟遥控器在显示的话，就隐藏掉；
				if(top.virtualRemoteState == 1)
				{
					//更改键值
					top.g_setting.setProperty("memory.app.ui.virtualRemote.state","off");
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
						
				}
				if(dmrFlag) break;
				toOption(0);
				break;
			case top.VK_1:
			case top.VK_2:
			case top.VK_3:
			case top.VK_4:
			case top.VK_5:
			case top.VK_6:
			case top.VK_7:
			case top.VK_8:
			case top.VK_9:
			case top.VK_0:
				if(dmrFlag)	break;
				if(seekableFlag && focusTab != TIPS_AREA && !skipFlagChapter)
				{
					hideMenu(0);
					hideInfoBox(0);
					clearTimeout(tipsTimer);
					clearTimeout(chapterTimer);
					chapterSetCount++;
					chapterSetIndex = chapterSetIndex * 10 + (keycode - top.VK_0);
					chapterSetIndexStr += (keycode - top.VK_0);
					$('tipsInfoContent').innerText = chapterInfo + ": " + chapterSetIndexStr;
					setTipsBox(1);
					$('tipsInfo').style.display = 'block';
					if(chapterSetIndex > chapterCount) //yiling0811
					{
						setChapterIndex(0);
						break;
					}
					else if(chapterSetCount == 3)
					{
						setChapterIndex(0);
						break;
					}
					setChapterIndex(FADE_TIME_3);
				}
				break;
			case top.VK_STOP:
				if(dmrFlag)	break;
				testLog("press the stop key");
				hideMenu(0);
				hideInfoBox(0);
				clearTimeout(metaInfoTimer);
				if(playStatus == S_PLAY || playStatus == S_PAUSE 
					|| playStatus == S_FF_FB || playStatus == S_SF_SB)
				{
					ff_fb_flag = 0;
					//setFastPlay(0);					
					displayTipsBox(0);
					playStatus = S_STOP_RESUME;
					multimedia.mediaPause();
					$('tipsInfoContent').innerText = STOP_RESUME_INFO;
					setTipsBox(1);
					$('tipsInfo').style.display = 'block';
					$('statusIcon').style.display = 'none';
					$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
					$('topTitle').style.display = 'block';				
					$('progressArea').style.display = 'block';
					refreshProgressBar();
					hideMenu(FADE_TIME_15);
					clearTimeout(metaInfoTimer);
					//showMetaInfoBox(FADE_TIME_4);
				}
				else if(playStatus == S_STOP_RESUME)
				{
					hideMetaInfoBox(-1);
					clearAllTimer();
					multimedia.mediaStop(0);
					top.$("main").src = "mediaList.html?media";
				}
				break;
			case top.VK_PLAY:
			case top.VK_PLAY_PAUSE:
				var inputKeyType = setting.getProperty(RC_TYPE, "");
				if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
				{
					ff_fb_flag = 0;
					playStatus = S_PLAY;
					multimedia.mediaResume();
					$('tipsInfo').style.display = 'none';
					$('statusIcon').style.display = 'none';
					hideMenu(0);
					clearInterval(progressBarTimer);
				}
				else if(playStatus == S_FF_FB)
				{
					$('statusIcon').style.display = 'none';
					$('statusIcon').src = "images/USB-Icon-Play.png";
					setFastPlay(0);	
					hideMenu(0);
					showMetaInfoBox(FADE_TIME_4);
					clearInterval(progressBarTimer);
				}
				else if(playStatus == S_SF_SB)
				{
					$('statusIcon').style.display = 'none';
					$('statusIcon').src = "images/USB-Icon-Play.png";
					setSlowPlay(0);	
					hideMenu(0);
					showMetaInfoBox(FADE_TIME_4);
					clearInterval(progressBarTimer);
				}
				else if(playStatus == S_PLAY || playStatus == S_FF_FB || playStatus == S_SF_SB)
				{
					if(keycode == top.VK_PLAY) return;
					clearTimeout(metaInfoTimer);
					clearTimeout(seekSettingTimer);
					hideMenu(0);
					displayTipsBox(0);
					if(pauseableFlag)
					{
						ff_fb_flag = 0;
						playStatus = S_PAUSE;
						$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
						$('topTitle').style.display = 'block';
						$('statusIcon').style.display = 'block';
						$('progressArea').style.display = 'block';
						clearInterval(progressBarTimer);
						refreshProgressBar();
						multimedia.mediaPause();
						hideMenu(FADE_TIME_5);
					}
					else
					{
						$('tipsInfo').style.display = 'block';
						clearTimeout(tipsTimer);
						$('tipsInfoContent').innerText = cantOperateText;
						setTipsBox(2);
						$('tipsInfo').style.display = 'block';
						hideTipsBox(FADE_TIME_5);
					}
				}
				break;
			case top.VK_PAUSE:
				testLog("press the pause key, playStatus = " + playStatus);
				if(playStatus == S_PLAY || playStatus == S_FF_FB || playStatus == S_SF_SB)
				{
					clearTimeout(metaInfoTimer);
					clearTimeout(seekSettingTimer);
					hideMenu(0);
					displayTipsBox(0);
					if(pauseableFlag)
					{
						ff_fb_flag = 0;
						playStatus = S_PAUSE;
						$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
						$('topTitle').style.display = 'block';
						$('statusIcon').style.display = 'block';
						$('progressArea').style.display = 'block';
						clearInterval(progressBarTimer);
						refreshProgressBar();
						multimedia.mediaPause();
						hideMenu(FADE_TIME_5);
					}
					else
					{
						$('tipsInfo').style.display = 'block';
						clearTimeout(tipsTimer);
						$('tipsInfoContent').innerText = cantOperateText;
						setTipsBox(2);
						$('tipsInfo').style.display = 'block';
						hideTipsBox(FADE_TIME_5);
					}
				}
				break;
			case top.VK_ENTER:
				toOK();
				break;
			case top.VK_REWIND:
				hideMenu(0);
				hideInfoBox(0);
				hideTmpInfoBox(0);
				if(playStatus != S_STOP_RESUME && playStatus != S_ERROR && seekableFlag && errorFlag != ERROR_VIDEO_NOT_SUPPORTED)
				{
					$('progressArea').style.display = 'block';
					refreshProgressBar();
					clearInterval(progressBarTimer);
					progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
					setFastPlay(-1);
				}
				else if(!seekableFlag || errorFlag == ERROR_VIDEO_NOT_SUPPORTED)
				{
					clearTimeout(tipsTimer);
					displayTipsBox(0);
					$('tipsInfoContent').innerText = cantOperateText;
					setTipsBox(2);
					$('tipsInfo').style.display = 'block';
					tipsTimer = setTimeout(function(){$('tipsInfo').style.display = 'none';}, FADE_TIME_5);
				}
				break;
			case top.VK_FAST_FWD:
				hideMenu(0);
				hideInfoBox(0);
				hideTmpInfoBox(0);
				if(playStatus != S_STOP_RESUME && playStatus != S_ERROR && seekableFlag && errorFlag != ERROR_VIDEO_NOT_SUPPORTED)
				{
					$('progressArea').style.display = 'block';
					refreshProgressBar();
					clearInterval(progressBarTimer);
					progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
					setFastPlay(1);
				}
				else if(!seekableFlag || errorFlag == ERROR_VIDEO_NOT_SUPPORTED)
				{
					clearTimeout(tipsTimer);
					displayTipsBox(0);
					$('tipsInfoContent').innerText = cantOperateText;
					setTipsBox(2);
					$('tipsInfo').style.display = 'block';
					hideTipsBox(FADE_TIME_5);
				}
				break;
			case top.VK_CHANNEL_DOWN:
			case top.VK_PREV: //previous
				if(dmrFlag)	break;
				hideMenu(0);
				hideInfoBox(0);
				if(seekableFlag && !skipFlagChapter)
				{
					clearTimeout(metaInfoTimer);
					previousKeyCount++;
					displayTipsBox(0);
					$('statusIcon').style.display = 'none';
					optionInfoArray[OPTION_CHAPTER] = setting.getCurrentChapter().chapterid;
					if(($("metaDataInfoBox").style.display == 'none' && metadataTipsFlag == 1)
						|| ($("tmpInfoBox").style.display == 'none' && metadataTipsFlag != 1))
					{
						setting.changeChapter(optionInfoArray[OPTION_CHAPTER]);
						$("metaDataInfoChapter").innerText = metaDataArray[1] + fillMetaChapterInfo();
						showMetaInfoBox(-1);
						metaInfoTimer = setTimeout(function(){hideMetaInfoBox(0); previousKeyCount = 0}, FADE_TIME_4);
						chapterInfoContainer = setting.getCurrentChapter();
						var str = chapterInfoContainer.chapterName;
						showTmpInfoBox(FADE_TIME_4, str);
						break;
					}
					else if(($("metaDataInfoBox").style.display == 'block' && metadataTipsFlag == 1)
						|| ($("tmpInfoBox").style.display == 'block' && metadataTipsFlag != 1))
					{
						if(optionInfoArray[OPTION_CHAPTER] - 1 >= 0)//not the 1st chapter, play previous one
						{
							setting.changeChapter(--optionInfoArray[OPTION_CHAPTER]);
						}
						$("metaDataInfoChapter").innerText = metaDataArray[1] + fillMetaChapterInfo();
						showMetaInfoBox(-1);
						metaInfoTimer = setTimeout(function(){hideMetaInfoBox(0); previousKeyCount = 0}, FADE_TIME_4);
						var str = chapterInfoContainer.chapterName;
						showTmpInfoBox(FADE_TIME_4, str);
					}
					/*
					else if(optionInfoArray[OPTION_CHAPTER] - 1 >= 0)//not the 1st chapter, play previous one
					{
						previousKeyCount = 0;
						
						setting.changeChapter(--optionInfoArray[OPTION_CHAPTER]);
						$("metaDataInfoChapter").innerText = metaDataArray[1] + fillMetaChapterInfo();
						showMetaInfoBox(-1);
						metaInfoTimer = setTimeout(function(){hideMetaInfoBox(0); previousKeyCount = 0}, FADE_TIME_4);
						var str = chapterInfoContainer.chapterName;
						showTmpInfoBox(FADE_TIME_4, str);
					}
					else if(optionInfoArray[OPTION_CHAPTER] == 0 && previousKeyCount < 2)//the 1st chapter, but pre key press less than twice
					{	
						setting.changeChapter(optionInfoArray[OPTION_CHAPTER]);
						$("metaDataInfoChapter").innerText = metaDataArray[1] + fillMetaChapterInfo();
						showMetaInfoBox(-1);
						metaInfoTimer = setTimeout(function(){hideMetaInfoBox(0); previousKeyCount = 0}, FADE_TIME_4);
						var str = chapterInfoContainer.chapterName;
						showTmpInfoBox(FADE_TIME_4, str);
					}
					else if(optionInfoArray[OPTION_CHAPTER] == 0 && previousKeyCount == 2)//the 1st chapter, pressed pre key twice
					{
						showTmpInfoBox(FADE_TIME_4, str);
						hideTmpInfoBox(0);
						previousKeyCount = 0;
						displayTipsBox(0);
						$('statusIcon').style.display = 'none';
						hideMetaInfoBox(0);
						$('loadingBox').style.display = 'block';
						clearTimeout(operationTimer);
						operationTimer = setTimeout(function(){
							multimedia.mediaStop(0);
							multimedia.playPreMediaFile(1);}, DELAY_TIME);
					}
					*/
				}
				else
				{
					hideTmpInfoBox(0);
					previousKeyCount = 0;
					displayTipsBox(0);
					$('statusIcon').style.display = 'none';
					hideMetaInfoBox(0);
					$('loadingBox').style.display = 'block';
					clearTimeout(operationTimer);
					operationTimer = setTimeout(function(){
							multimedia.mediaStop(0);
							multimedia.playPreMediaFile(1);}, DELAY_TIME);
				}
				break;
			case top.VK_CHANNEL_UP:
			case top.VK_NEXT: //next
				if(dmrFlag)	break;
				hideMenu(0);
				hideInfoBox(0);
				if(seekableFlag && !skipFlagChapter)
				{
					clearTimeout(metaInfoTimer);
					displayTipsBox(0);
					$('statusIcon').style.display = 'none';
					optionInfoArray[OPTION_CHAPTER] = setting.getCurrentChapter().chapterid;
					testLog("NEXT current chapter = " + optionInfoArray[OPTION_CHAPTER]);
					if(optionInfoArray[OPTION_CHAPTER] + 1 < chapterCount)
					{
						setting.changeChapter(++optionInfoArray[OPTION_CHAPTER]);
						$("metaDataInfoChapter").innerText = metaDataArray[1] + fillMetaChapterInfo();
						showMetaInfoBox(FADE_TIME_4);
						var str = chapterInfoContainer.chapterName;
						showTmpInfoBox(FADE_TIME_4, str);
					}
					else
					{
						showMetaInfoBox(FADE_TIME_4);
						chapterInfoContainer = setting.getCurrentChapter();
						var str = chapterInfoContainer.chapterName;
						showTmpInfoBox(FADE_TIME_4, str);
						/*
						hideTmpInfoBox(0);
						displayTipsBox(0);
						$('statusIcon').style.display = 'none';
						hideMetaInfoBox(0);
						$('loadingBox').style.display = 'block';
						clearTimeout(operationTimer);
						operationTimer = setTimeout(function(){
							multimedia.mediaStop(0);
							multimedia.playNextMediaFile(1);}, DELAY_TIME);
						*/
					}
				}
				else
				{	
					displayTipsBox(0);
					$('statusIcon').style.display = 'none';
					hideMetaInfoBox(0);
					$('loadingBox').style.display = 'block';
					clearTimeout(operationTimer);
					operationTimer = setTimeout(function(){
							multimedia.mediaStop(0);
							multimedia.playNextMediaFile(1);}, DELAY_TIME);
				}
				return;
			case top.VK_3D://3D mode
				if(dmrFlag)	break;
				to3D();
				break;
			case top.VK_YELLOW://change title
				if(dmrFlag)	break;
				toYellow();
				break;	
			case top.VK_RED:
				if(dmrFlag) break;
				toRed();
				break;
			case top.VK_GREEN:
				if(dmrFlag) break;
				toGreen();
				break;
			case top.VK_LANG://change sound track
				if(dmrFlag)	break;
				toLang();
				break;
			case top.VK_SUBTITLE:
				if(dmrFlag)	break;
				toSubtitle();
				break;
			case top.VK_INFO:
				if(dmrFlag)	break;
				if($("fileInfoBox").style.display == 'block')
				{
					hideInfoBox(0);
				}
				else if($("metaDataInfoBox").style.display == 'none')
				{
					hideMenu(0);
					$("fileInfoBox").style.display = 'block';
					for(var i = 0; i < informationBoxLi.length; i++)
					{
						setHTMLScroll(informationBoxLi[i]);
					}
					hideInfoBox(FADE_TIME_5);
				}
				break;
			case top.VK_TV:
				top.g_lastEnterType = -1;
				top.g_isMediaCenter = top.NDM_Others;
				hideMenu(0);
				switch3DFlag = false;
				top.$("globleShow").contentWindow.hiddenGlassRemind();
				multimedia.mediaStop(0);
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(1, 0);
				//top.keyDownProcess(evt);
				top.g_previousHtmlPage = "channelPlay.html";
				top.g_remindWord = "TvHotKey";
				top.$("main").src = "intermediate.html";
				top.main.focus();
				top.$("operatePage").src = "";
				break;
			case top.VK_MENU:
				testLog("video play get menu key event");
				//lqt---点击主页键的话，如果虚拟遥控器在显示的话，就隐藏掉；没有显示的话，不做隐藏处理。
				if(top.virtualRemoteState == 1)
				{
					//更改键值
					top.g_setting.setProperty("memory.app.ui.virtualRemote.state","off");
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
						
				}
				toHomePage();
				break;
			case top.VK_EXIT:
				toExit();
				break;
			default:
				break;
		}
	}
	return ret;
}

function notifyProcess(evt)
{
    var msg = evt.which;
    var value = evt.modifiers;
    testLog("---- THIS IS NOTIFY MSG: [" + msg + "] ----");
	//全局消息
	switch(msg)
	{/*media下不允许出现这些个消息
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_CH_BLOCK://channel lock
		case top.E_SS_PARENTAL_BLOCK://parental lock
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_SS_COMMON_VIDEO:// service ready
		case top.E_SIGNAL_UNLOCK://unlock
		case top.E_SIGNAL_LOCK://lock*/
		//case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		//case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		//case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_3D_GLASSES_SUIT_OK:
		case top.E_3D_GLASSES_SUIT_FAIL:
			top.systemEventProc(evt);
			return;
		case top.E_READY_TO_CHANGE_SCART:
		case top.E_READY_TO_CHANGE_CEC:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			switch3DFlag = false;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(2, value);
			top.$("main").src = "channelPlay.html";
			//top.systemEventProc(evt);
			return;
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
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
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
			top.systemEventProc(evt);
			break;
        case top.E_HP_PLUGIN:
            focusTab = DISPLAY_AREA;
            hideMenu(0);
            break;
        case top.E_HP_PLUGOUT:
            focusTab = DISPLAY_AREA;
            hideMenu(0);
            break;
        default:
			break;
	}
	
    switch(msg)
	{
		case top.E_MEDIA_STREAM_BUFFERING:
			testLog("-------------- THIS IS BUFFING MSG --------------");
			$('laodingInfo').innerText = multimedia.getBuffingMsgInfo();
			break;
		case top.E_MEDIA_STREAM_BUFFERING_COMPLETE:
			testLog("-------------- THIS IS BUFF END MSG --------------");
			$('laodingInfo').innerText = multimedia.getBuffingMsgInfo();
			$('loadingBox').style.display = 'none';
			$('laodingInfo').innerText = "";
			break;
		case top.E_DLNA_DMR_PUSH_MOVIE:
			operatableFlag = true;
			//multimedia.mediaStop(0);
			clearTimeout(dmrExitTimer);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.systemEventProc(evt);
			break;
		case top.E_DLNA_DMR_PUSH_MUSIC:
			operatableFlag = true;
			//multimedia.mediaStop(0);
			if(!dmrFlag)
			{
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.systemEventProc(evt);
			}
			else
			{
				top.$("main").src = "musicPlay.html?re_dmr";
			}
			break;
		case top.E_DLNA_DMR_PUSH_PICTURE:
			operatableFlag = true;
			//multimedia.mediaStop(0);
			if(!dmrFlag)
			{
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.systemEventProc(evt);
			}
			else
			{
				top.$("main").src = "picturePlay.html?re_dmr";
			}
			break;
		case top.E_DMR_PLAY:
			//mediaPlay("0");
			break;
		case top.E_DMR_STOP:
			testLog("--------- THIS IS DMR STOP MSG ------------");
			clearTimeout(dmrExitTimer);
			dmrExitTimer = setTimeout(function(){
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.$("main").src = "channelPlay.html";
				top.main.focus();
				}, 2000);
			break;
		case top.E_MEDIA_FIND_FILE_END: //file search end
			top.g_searchFlag = 1;
			break;
		case top.E_MEDIA_PLAYER_STATUS_STOP: //stop
			testLog("--------- THIS IS STOP MSG ------------");
			operatableFlag = true;
			hideInfoBox(0);
			hideMetaInfoBox(0);
			errorFlag = ERROR_NONE;
			playStatus = S_EOS;
			break;
		case top.E_MEDIA_PLAY_OPEN:
			$('loadingBox').style.display = 'block';
			break;
		case top.E_MEDIA_BACKWORD_EOS: //yiling0811
			testLog("---- THIS IS BACKWORD EOS ----");
			if(exitFlag)
				return;
			operatableFlag = true;
			hideMenu(0);
			$('statusIcon').style.display = 'none';
			$('statusIcon').src ="images/USB-Icon-Play.png";	
			ff_fb_flag=0;
			playStatus = S_PLAY;
			multimedia.mediaFastForward(1);
			break;
		//case top.E_MEDIA_FORWORD_EOS: //yiling0811
		//	testLog("---- THIS IS FORWORD EOS ----");
		//	if(exitFlag)
		//		return;
		//	operatableFlag = true;
		//	hideMenu(0);
		//	$('statusIcon').style.display = 'none';
		//	$('statusIcon').src ="images/USB-Icon-Play.png";
		//	hideInfoBox(0);
		//	hideMetaInfoBox(0);
		//	ff_fb_flag=0;
		//	playStatus = S_PLAY;
		//	multimedia.setSeekPoint(0);
		//	break;
		case top.E_MEDIA_FORWORD_EOS:
		case top.E_MEDIA_EOS://media eos
			testLog("---- THIS IS EOS MSG ----");
			if(dmrFlag)
			{
				return;
				/*
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.$("main").src = "channelPlay.html";
				top.main.focus();
				return;
				*/
			}
			if(exitFlag)
				return;
			operatableFlag = true;
			hideMenu(0);
			hideInfoBox(0);
			hideMetaInfoBox(0);
			playStatus = S_EOS;
			focusTab = DISPLAY_AREA;
			if(titleCount > 1)
			{
				clearTimeout(tipsTimer);
				displayTipsBox(0);
				$('statusIcon').style.display = 'none';
				$('loadingBox').style.display = 'block';
				testLog("titleCount = " + titleCount + ", playStatus = " + playStatus);
				if(playStatus == S_FF_FB || playStatus == S_SF_SB)//ff to eos
				{
					setTipsBox(1);
					clearTimeout(operationTimer);
					operationTimer = setTimeout("setting.changeTitle(currentTitle);", DELAY_TIME);//yiling0811
					break;
				}
				else if(currentTitle + 1 < titleCount)//yiling0811
				{
					setTipsBox(1);
					clearTimeout(operationTimer);
					operationTimer = setTimeout("setting.changeTitle(++currentTitle);", DELAY_TIME);//yiling0811
			                optionInfoArray[OPTION_TITLE]++;
					break;
				}
				else if(currentTitle + 1 == titleCount)//yiling0811
				{
					clearTimeout(operationTimer);
					operationTimer = setTimeout("multimedia.playNextMediaFile(0);", DELAY_TIME);
					break;
				}	    		
			}
			displayTipsBox(0);
			$('statusIcon').style.display = 'none';
			$('loadingBox').style.display = 'block';
			$('topTitleContent').innerText = "";
			errorFlag = ERROR_NONE;
			titleCount = 0;
			titleStartIndex = 0;
			chapterCount = 0;
			chapterStartIndex = 0;
			subtitleCount = 0;
			subtitleStartIndex = 0;
			soundTrackCount = 0;
			soundTrackStartIndex = 0;
			$('elspased').innerText = "00:00:00";
			$('duration').innerText = "00:00:00";
			fileDuration = 0;
			clearInterval(progressBarTimer);
			if(playStatus == S_FF_FB || playStatus == S_SF_SB)
			{
				testLog("---- THIS IS FASTFORWORD EOS ----");
				clearTimeout(operationTimer);
				operationTimer = setTimeout(function(){
			    	multimedia.mediaStop(0);
			    	mediaPlay(top.g_currentMedia.path);}, DELAY_TIME);
			}
			else
			{
				testLog("---- THIS IS NORMAL EOS ----");
				clearTimeout(operationTimer);
				operationTimer = setTimeout(function(){multimedia.playNextMediaFile(0);}, DELAY_TIME);
			}
			break;
		case top.E_MEDIA_USB_INSERTED://usb insert
			if(focusTab == OPTION_DETAIL_AREA || focusTab == OPTION_AREA || focusTab == PLAY_LIST_AREA)
			{
				hideMenu(0);
			}
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_USB_REMOVE: //usb remove
			testLog("---- THIS IS E_MEDIA_USB_REMOVE ----");
			hideMenu(0);
			hideInfoBox(0);
			hideMetaInfoBox(0);
			displayTipsBox(0);
			$('statusIcon').style.display = 'none';
			clearAllTimer();
			operationTimer = setTimeout(function(){
				multimedia.mediaStop(0);
				multimedia.deviceExitUninit();
				top.g_mediaPosition = 1;
				top.$("main").src = "deviceList.html?remove";}, DELAY_TIME);
			break;
		case top.E_MEDIA_PLAY_ERROR_FILE_NOT_EXIST:
			testLog("----- THIS IS E_MEDIA_PLAY_ERROR_FILE_NOT_EXIST -----");
			operatableFlag = true;
			hideInfoBox(0);
			hideMetaInfoBox(0);
			top.g_currentMedia = multimedia.getCurrentPlayingMediaInfo();
			top.g_mediaPosition = multimedia.getCurrentPlayingMediaPosition();
			playStatus = S_ERROR;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_CANT_OPEN;
			$('eb_info').innerText = eb_info[8];
			displayTipsBox(1);
			break;
		case top.E_MEDIA_VIDEO_AUDIO_NO_SUPPORTED:
			testLog("----- THIS IS E_MEDIA_VIDEO_AUDIO_NO_SUPPORTED -----");
			operatableFlag = true;
			hideInfoBox(0);
			hideMetaInfoBox(0);
			top.g_currentMedia = multimedia.getCurrentPlayingMediaInfo();
			top.g_mediaPosition = multimedia.getCurrentPlayingMediaPosition();
			playStatus = S_ERROR;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_OTHER;
			$('eb_info').innerText = eb_info[6];//File format not supported
			displayTipsBox(1);
			break;
		case top.E_MEDIA_PLAY_ERROR_CANT_OPEN:
			testLog("----- THIS IS CNAT OPEN ERROR -----");
			operatableFlag = true;
			hideInfoBox(0);
			hideMetaInfoBox(0);
			top.g_currentMedia = multimedia.getCurrentPlayingMediaInfo();
			top.g_mediaPosition = multimedia.getCurrentPlayingMediaPosition();
			playStatus = S_ERROR;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_CANT_OPEN;
			$('eb_info').innerText = eb_info[4];//Can't open this file.
			displayTipsBox(1);
			break;
		case top.E_MEDIA_VIDEO_ERROR:
			testLog("----- THIS IS VIDEO ERROR -----");
			operatableFlag = true;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_VIDEO_ERROR;
			$('eb_info').innerText = eb_info[1];//Video decoded error.
			displayTipsBox(1);
			break;
		case top.E_MEDIA_AUDIO_ERROR:
			testLog("----- THIS IS AUDIO ERROR -----");
			operatableFlag = true;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_AUDIO_ERROR;
			$('eb_info').innerText = eb_info[0];//Audio decoded error.
			displayTipsBox(1);
			break;
		case top.E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT:
			testLog("----- THIS IS E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT -----");
			operatableFlag = true;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_VIDEO_NOT_SUPPORTED;
			$('eb_info').innerText = eb_info[3];//Video format not supported.
			displayTipsBox(1);
			break;
		case top.E_MEDIA_CUSTOM_AUDIO_NO_SUPPORT:
			testLog("----- THIS IS E_MEDIA_CUSTOM_AUDIO_NO_SUPPORT -----");
			operatableFlag = true;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_AUDIO_NOT_SUPPORTED;
			$('eb_info').innerText = eb_info[2];//Audio format not supported.
			displayTipsBox(1);
			break;
		case top.E_MEDIA_VIDEO_CANT_RECONGNIZE:
			testLog("----- THIS IS VIDEO CANT RECONGNIZE ERROR -----");
			operatableFlag = true;
			playStatus = S_ERROR;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_VIDEO_ERROR;
			$('eb_info').innerText = eb_info[3];//Video format not supported.
			displayTipsBox(1);
			break;
		case top.E_MEDIA_AUDIO_CANT_RECONGNIZE:
			testLog("----- THIS IS AUDIO CANT RECONGNIZE ERROR -----");
			operatableFlag = true;
			playStatus = S_ERROR;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_AUDIO_ERROR;
			$('eb_info').innerText = eb_info[2];//Audio format not supported.
			displayTipsBox(1);
			break;
		case top.E_MEDIA_OTHER_ERROR:
			testLog("----- THIS IS OTHER ERROR -----");
			operatableFlag = true;
			playStatus = S_ERROR;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_OTHER;
			$('eb_info').innerText = eb_info[5];//Play error, please try again.
			displayTipsBox(1);
			break;
		case top.E_WIRELESS_DEVICE_NO_FOUND:
		case top.E_WIRELESS_CONNECT_FAILURE://net connect failed
			testLog("----- THIS IS NET DISCONNECTED -----");
			if(top.g_lastEnterType == ENTER_DLNA_TYPE)
			{
				multimedia.mediaStop(0);
				operatableFlag = true;
				playStatus = S_ERROR;
				focusTab = TIPS_AREA;
				errorFlag = ERROR_NET_DISCONNECTED;
				$('eb_info').innerText = netConnectFailText;
				displayTipsBox(1);
			}
			break;
		case top.E_MEDIA_PLAYER_STATUS_SEEK_PLAYING:
			testLog("---- THIS IS SEEK DONE ----");
			playStatus = S_PLAY;
			ff_fb_flag = 0;
			//$('tipsInfo').style.display = 'none';
			$('statusIcon').style.display = 'none';
			break;
		case top.E_MEDIA_PLAYER_CUSTOM_BOOKMARK://resume playing msg
			operatableFlag = true;
			focusTab = TIPS_AREA;
			var tmpContinueTime = doTime(value);
			$('eb_info').innerText = eb_info[9] + "(" + tmpContinueTime + ")";
			displayTipsBox(2);
			break;
		case top.E_MEDIA_PLAYER_STATUS_PLAYING: //playing
			testLog("---- THIS IS PLAYING MSG ----");
			playStatus = S_EOS;
			operatableFlag = false;
			$('loadingBox').style.display = 'none';
			$('consoleTip').style.display = 'none';
			if(top.g_MediaVideoPlayCount <= 5 && !dmrFlag && firstEnterFlag)
			{
				firstEnterFlag = false;
				$('consoleTip').style.display = 'block';
				setTimeout("$('consoleTip').style.display = 'none';", FADE_TIME_3);
			}
			setTimeout(function(){
				//hideMenu(0);
				hideInfoBox(0);
				hideMetaInfoBox(0);
				seekableFlag = true;
				sfsbableFlag = true;
				pauseableFlag = true;
				skipFlagTitle = 0;
				skipFlagChapter = 0;
				skipFlagSubtitle = 0;
				skipFlagSoundtrack = 0;
				$('statusIcon').style.display = 'none';
				ff_fb_flag = 0;
				titleStartIndex = 0;
				chapterStartIndex = 0;
				subtitleStartIndex = 0;
				soundTrackStartIndex = 0;
				currentFileInfo = multimedia.getCurrentPlayingMediaInfo();
				top.g_currentMedia = currentFileInfo;
				if(!dmrFlag)
				{
					currentFileIndex = multimedia.getCurrentPlayingMediaPosition();
					top.g_mediaPosition = currentFileIndex;
					playListIndex = currentFileIndex;
				}
				setPlayingFileType(currentFileInfo.name);
				$('duration').innerText = getMediaFileDuration(currentFileInfo.path);
				$('topTitleContent').innerText = currentFileInfo.name;
				clearInterval(progressBarTimer);
				refreshCPFlag();
				if(!dmrFlag)
				{
					massInfo = multimedia.getMetadataInfo();
					seekableFlag = massInfo.isCanSeek;//
					sfsbableFlag = massInfo.isCanSFSB;
					pauseableFlag = massInfo.isCanPause;
					metadataTipsFlag = massInfo.needDisplayMeta;
					titleCount = setting.titleCount;
					chapterCount = setting.chapterCount;
					chapterInfoContainer = setting.getCurrentChapter();
					fillPGInfo(massInfo.titleLawRating);
					subtitleCount = multimedia.getVideoSubtitleCount(currentFileInfo.path);
					soundTrackCount = multimedia.getVideoSoundTrackCount(currentFileInfo.path);
					if(titleCount == 0 || titleCount == 1)//title
					{
						skipFlagTitle = true;
					}
					if(chapterCount == 0 || !seekableFlag)//chapter
					{
						skipFlagChapter = true;
					}
					if(subtitleCount <= 1)//subtitle
					{
						skipFlagSubtitle = true;
					}
					if(soundTrackCount == 0)//sound track
					{
						skipFlagSoundtrack = true;
						clearTimeout(tipsTimer);
						displayTipsBox(0);
						$('tipsInfoContent').innerText = noAudioTipsInfo;
						setTipsBox(1);
						$('tipsInfo').style.display = 'block';
						hideTipsBox(FADE_TIME_5);
					}
					subtitleInfoList = multimedia.getVideoSubtitleList(currentFileInfo.path, subtitleCount);
					optionInfoArray[OPTION_SUBTITLE] = multimedia.getVideoSubtitleIndex();
					optionInfoArray[OPTION_SOUND_TRACK] = multimedia.getVideoSoundTrackIndex();
					optionInfoArray[OPTION_TITLE] = setting.getCurrentTitle();
                    			currentTitle = setting.getCurrentTitle();//yiling0811
					optionInfoArray[OPTION_CHAPTER] = chapterInfoContainer.chapterid;
					videoFileInfo = multimedia.getMediaVideoFileInfo(currentFileInfo.path);
					fillFileInformation(videoFileInfo);
					//metadata box
					soundTrackInfo = multimedia.getVideoSoundTrackInfo(currentFileInfo.path);
					fillMetadataInfo();
					showMetaInfoBox(FADE_TIME_4);
				}
				playStatus = S_PLAY;
				operatableFlag = true;
				testLog("---- THIS IS PLAYING END ----");
			}, 100);
			break;
		case top.E_MEDIA_PLAYER_STATUS_RESUME_PLAYING:
			testLog("---- THIS IS RESUME MSG ----");
			if(dmrFlag)
			{
				hideMenu(0);
				playStatus = S_PLAY;
				$('tipsInfo').style.display = 'none';
				$('statusIcon').style.display = 'none';
			}
			break;
		case top.E_MEDIA_PLAYER_STATUS_PAUSE: //pause
			testLog("---- THIS IS PAUSE MSG ----");
			if(dmrFlag)
			{
				playStatus = S_PAUSE;
				$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
				$('topTitle').style.display = 'block';
				$('statusIcon').style.display = 'block';
				$('progressArea').style.display = 'block';
				refreshProgressBar();
			}
			break;
		case top.E_IS_CURRENT_3D_MODE:
			testLog("---- THIS IS E_IS_CURRENT_3D_MODE ----");
			if(evt.modifiers == 0)//hide 3d tips
			{
				switch3DFlag = false;
			    top.$("globleShow").contentWindow.hiddenGlassRemind();
			}
			break;
		case top.E_MEDIA_PLAYER_STATUS_FORWORD: //ff
		case top.E_MEDIA_PLAYER_STATUS_BACKWORD: //fb
			testLog("---- THIS IS START FF/FB MSG ----");
			//hideInfoBox(0);
			//hideMetaInfoBox(0);
			//playStatus = S_FF_FB;
			break;
		case top.E_MEDIA_PLAYER_STATUS_QUIT_FORWORD: //quit ff
		case top.E_MEDIA_PLAYER_STATUS_QUIT_BACKWORD: //quit fb
			testLog("---- THIS IS QUIT FF/FB MSG ----");
			//playStatus = S_PLAY;
			break;
		/*
		case top.E_MEDIA_PLAYER_STATUS_AB_MODE: //ab mode
			break;
		case 0x8072: //quit ab mode
			break;
		case top.E_MEDIA_PLAYER_STATUS_SLOWDOWN: //slow down
			break;
		case 0x8074: //quit slow down
			break;
		*/
		case top.E_DLNA_DEVICE_INSERT:
			testLog("---- THIS IS E_DLNA_DEVICE_INSERT ----");
			break;
		case top.E_DLNA_CURRENT_DEVICE_REMOVE:
			testLog("---- THIS IS E_DLNA_CURRENT_DEVICE_REMOVE ----");
			if(errorFlag == ERROR_NET_DISCONNECTED)	break;
			multimedia.mediaStop(0);
			hideMenu(0);
			hideInfoBox(0);
			hideMetaInfoBox(0);
			displayTipsBox(0);
			$('statusIcon').style.display = 'none';
			top.g_mediaPosition = 1;
			top.$("main").src = "deviceList.html?remove";
			break;
		case top.E_MEDIA_STREAM_BUFFERING: //buffering
			break;
		case top.E_MEDIA_STREAM_BUFFERING_COMPLETE: //buffering complete
			break;
		case top.E_MEDIA_STREAM_VIDEO_ONLY: //video only
			break;
		case top.E_MEDIA_FIRST_PREVIOUS: //repeat-mode-normal: loop end
			clearAllTimer();
			hideMenu(0);
			hideInfoBox(0);
			hideMetaInfoBox(0);
			multimedia.mediaStop(0);
			top.$("main").src = "mediaList.html?media";
			break;
		case top.E_MEDIA_VIDEO_AUDIO_LOOP_EXIT: //repeat-mode-normal: loop end
			clearAllTimer();
			hideMenu(0);
			hideInfoBox(0);
			hideMetaInfoBox(0);
			multimedia.mediaStop(0);
			top.$("main").src = "mediaList.html?media";
			break;
		case top.E_MEDIA_DIVX_NOT_AUTH:
			operatableFlag = true;
			$('loadingBox').style.display = 'none';
			top.g_channel.testLog("@@@@@@@@E_MEDIA_DIVX_NOT_AUTH@@@@@@@@@@");
			drmStatus = 2;
			initAuthorization();
			focusTab = DIVX_AUTHOR_AREA;
			break;
		case top.E_MEDIA_DIVX_NOT_RENTAL:  //APP_NOTIFY_MEDIA_DIVX_RENTAL
			operatableFlag = true;
			$('loadingBox').style.display = 'none';
			top.g_channel.testLog("@@@@@@@@E_MEDIA_DIVX_NOT_RENTAL@@@@@@@@@@");
			getProtectInfo();
			initRentalConfirmation();
			focusTab = DIVX_RENTAL_CONFIRM;
			break;
		case top.E_MEDIA_DIVX_NOT_EXPIRED:   //APP_NOTIFY_MEDIA_DIVX_EXPIRED
			operatableFlag = true;
			$('loadingBox').style.display = 'none';
			top.g_channel.testLog("@@@@@@@@E_MEDIA_DIVX_NOT_EXPIRED@@@@@@@@@@");
			getProtectInfo();
			initRentalExpired();
			focusTab = DIVX_RENTAL_EXPIRED;
			break;
		case top.E_MEDIA_DIVX_ENCRYPTED://test for divx: is locked file	
			operatableFlag = true;
			top.g_channel.testLog("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
			top.g_channel.testLog("---------- get msg E_MEDIA_DIVX_ENCRYPTED------------");
			top.g_channel.testLog("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
			getProtectInfo();
			top.g_channel.testLog("@@drmstatus="+drmStatus);
			top.g_channel.testLog("@@drmType="+drmType);
			top.g_channel.testLog("@@divxActiveStatus="+divxActiveStatus);
			if(drmStatus==1)  //none error
			{
				if((drmType==1)||(drmType==4)||(drmType==2))
				{
					divxPlay();
					$('loadingBox').style.display = 'none';
					focusTab = DISPLAY_AREA;
				}
				else if((drmType==3)||(drmType==5))
				{
					$('loadingBox').style.display = 'none';
					if(rentalNum<rentalCount)
					{
						initRentalConfirmation();
						focusTab = DIVX_RENTAL_CONFIRM;
					}
					else
					{
						$('loadingBox').style.display = 'none';
						initRentalExpired();
						focusTab = DIVX_RENTAL_EXPIRED;
					}	
				}
			}
			else if (drmStatus==2)   // not auth user
			{
				$('loadingBox').style.display = 'none';
				initAuthorization();
				focusTab = DIVX_AUTHOR_AREA;
			}
			else if(drmStatus==3)   // rental expired
			{
				$('loadingBox').style.display = 'none';
				initRentalExpired();
				focusTab = DIVX_RENTAL_EXPIRED;
			}
			break;
		case top.E_APP_PROCESS_INITIALIZATION:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			hideMenu(0);
			hideMetaInfoBox(0);
			operatableFlag = false;
			switch3DFlag = false;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
			multimedia.mediaStop(1);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.systemEventProc(evt);
			break;
        case top.UI_BLUETOOTH_EVENT_MEDIA_PAUSE:
            console.log("CROSS UI test UI_BLUETOOTH_EVENT_MEDIA_PAUSE");
            if(playStatus == S_PLAY)
            {
                hideTmpInfoBox(0);
                hideInfoBox(0);
                clearTimeout(metaInfoTimer);
                if(pauseableFlag)
                {
                    playStatus = S_PAUSE;
                    $('statusIcon').src = "images/USB-Icon-Pause.png";//pause
                    $('topTitle').style.display = 'block';
                    $('statusIcon').style.display = 'block';
                    $('progressArea').style.display = 'block';
                    clearInterval(progressBarTimer);
                    refreshProgressBar();
                    multimedia.mediaPause();
                }
                else
                {
                    clearTimeout(tipsTimer);
                    displayTipsBox(0);
                    $('tipsInfoContent').innerText = cantOperateText;
                    setTipsBox(2);
                    $('tipsInfo').style.display = 'block';
                    hideTipsBox(FADE_TIME_5);
                }
            }
            break;
        case top.UI_BLUETOOTH_EVENT_MEDIA_PLAY:
            console.log("CROSS UI test UI_BLUETOOTH_EVENT_MEDIA_PLAY");
            if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
            {
                hideMenu(0);
                playStatus = S_PLAY;
                if(!dmrFlag)
                {
                    showMetaInfoBox(FADE_TIME_4);
                }
                multimedia.mediaResume();
                clearInterval(progressBarTimer);
                $('tipsInfo').style.display = 'none';
                $('statusIcon').style.display = 'none';
                return;
            }
            break;
	    default:
	        //top.systemEventProc(evt);
	        break;
	}
}

function cutProtectInfo(info)
{
	var str = info;
	var data = str.split("/");
	drmFlag = parseInt(data[0],10);
	drmType = parseInt(data[1],10);
	drmStatus = parseInt(data[2],10);
	rentalNum = parseInt(data[3],10);
	rentalCount = parseInt(data[4],10);
	//top.g_channel.testLog("@@drmFlag="+drmFlag);
	top.g_channel.testLog("@@drmType="+drmType);
	top.g_channel.testLog("@@drmStatus="+drmStatus);
	top.g_channel.testLog("@@rentalNum="+rentalNum);
	top.g_channel.testLog("@@rentalCount="+rentalCount);
}

function getProtectInfo()
{
	divxActiveStatus = setting.divxActiveStatus();
	protectInfo = setting.getProtectInfo;
	top.g_channel.testLog("@@protectInfo="+protectInfo);
	cutProtectInfo(protectInfo);
}

function toLeft()
{
	if(focusTab == DISPLAY_AREA && playStatus != S_STOP_RESUME)
	{
		hideInfoBox(0);
		hideMetaInfoBox(0);
		if(seekableFlag)
		{
			refreshProgressBar();
			clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			focusTab = PROGRESS_AREA;
			$('seekInfo').style.display = 'block';
			$('topTitle').style.display = 'block';
			$('progressArea').style.display = 'block';
			$('playList').style.left = screenWidth + "px";
			setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);},playListAnimateTime);
			$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
			seekStartTime = elapsed;
			refreshSeekingTime(0);
		}
		else
		{
			clearTimeout(tipsTimer);
			hideMenu(0);
			displayTipsBox(0);
			$('tipsInfoContent').innerText = cantOperateText;
			setTipsBox(2);
			$('tipsInfo').style.display = 'block';
			tipsTimer = setTimeout(function(){$('tipsInfo').style.display = 'none';}, FADE_TIME_5);
		}
	}
	else if(focusTab == PROGRESS_AREA && seekableFlag && playStatus != S_STOP_RESUME)//focus on playing
	{
		clearTimeout(seekSettingTimer);
		if(playStatus==S_PAUSE)
		  {
			$('statusIcon').style.display = 'none';
			playStatus=S_PLAY;
		  }
		refreshSeekingTime(-1);
		seekSettingTimer = setTimeout(function(){
			multimedia.setSeekPoint(seekPoint * 1000);
			hideMenu(0);
			refreshProgressBar();
			clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			showMetaInfoBox(FADE_TIME_4);}, SEEK_TIME_DELAY);
	}
	/*
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListIndex - 1 >= 0)
		{
			playListIndex--;
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE - 3 + "px";
		}
		else if(playListIndex == 0
			&& playListStart > 0)
		{
			playListStart--;
			refreshPlayList();
		}
	}
	*/
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		setOptionSecFocusScroll(-1, -1);
		focusTab = OPTION_AREA;
		resetFocusShape();
		$('optionInfoDetails').style.display = 'none';
		$('optionSecondList').style.display = 'none';
		setOptionFocusScroll(optionFocusIndex_1, -1);
		hideMenu(FADE_TIME_15);
		if(OPTION_FOOTBALL_MODE == optionFocusIndex_1)//add for football mode preview
		{
			setting.previewFootballMode(optionInfoArray[OPTION_FOOTBALL_MODE]);
		}
		return;
	}
	else if(focusTab == SOUND_PRESET_AREA)
	{
		toBack();
		return;
	}
	else if(focusTab == PICTURE_PRESET_AREA)
	{
		if(optionInfoArray[OPTION_FOOTBALL_MODE])//add for football mode
		{
			hideMenu(FADE_TIME_15);
			return;
		}
		setHTMLNotScroll(picPresetListName[optionFocusIndex_2]);
		optionFocusIndex_2 = parseInt((optionFocusIndex_2 - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
        previewPictureMode(optionFocusIndex_2);
		setHTMLScroll(picPresetListName[optionFocusIndex_2]);
		$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionFocusIndex_2 + "px";
	}
	else if(focusTab == PIC_ZOOM_AREA)
	{
		if(optionFocusIndex_2 - 1 >= tmpStartIndex)
		{
			setHTMLNotScroll(picZoomSpan[optionFocusIndex_2]);
			optionFocusIndex_2--;
			setHTMLScroll(picZoomSpan[optionFocusIndex_2]);
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, optionFocusIndex_2);
			resetFocusShape();
		}
		else if(optionFocusIndex_2 == tmpStartIndex	&& tmpStartIndex > 0)
		{
			setHTMLNotScroll(picZoomSpan[optionFocusIndex_2]);
			if(tmpStartIndex == screenModeArray.length - PIC_ZOOM_LIST_LENGTH)
			{
				$('picZoomRightArrow').style.display = 'block';
			}
			tmpStartIndex--;
			optionFocusIndex_2--;
			setHTMLScroll(picZoomSpan[optionFocusIndex_2]);
			if(tmpStartIndex == 0)
			{
				$('picZoomLeftArrow').style.display = 'none';
			}
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, optionFocusIndex_2);
			resetFocusShape();
		}
		hideMenu(FADE_TIME_15);
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(-1);//left
	}
	else if(focusTab == TIPS_AREA && tipsBoxFlag == 2)
	{
		tipsBoxIndex = parseInt((tipsBoxIndex + 1) % 2);
		$('focusButton').style.left = tipsBoxDistance * (tipsBoxIndex  + 1) + tipsBoxButtonWidth * tipsBoxIndex + "px";
	}
	else if(focusTab == DIVX_RENTAL_CONFIRM)
	{
		//form_position_h = (form_position_h == 0) ? 1 : 0;
		form_position_h = !form_position_h;
		$("rentalRegistFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
		return ;
	}
	else if((focusTab==DIVX_AUTHOR_AREA) || (focusTab==DIVX_REG_AREA) || (focusTab==DIVX_RENTAL_EXPIRED))
	{
		return ;
	}
	hideMenu(FADE_TIME_15);
}

function toRight()
{
	if(focusTab == DISPLAY_AREA && playStatus != S_STOP_RESUME)
	{
		hideInfoBox(0);
		hideMetaInfoBox(0);
		if(seekableFlag)
		{
			refreshProgressBar();
			clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			focusTab = PROGRESS_AREA;
			$('seekInfo').style.display = 'block';
			$('topTitle').style.display = 'block';
			$('progressArea').style.display = 'block';
			$('playList').style.left = screenWidth + "px";
			setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);},playListAnimateTime);
			$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
			seekStartTime = elapsed;
			refreshSeekingTime(0);
		}
		else
		{
			clearTimeout(tipsTimer);
			hideMenu(0);
			displayTipsBox(0);
			$('tipsInfoContent').innerText = cantOperateText;
			setTipsBox(2);
			$('tipsInfo').style.display = 'block';
			tipsTimer = setTimeout(function(){$('tipsInfo').style.display = 'none';}, FADE_TIME_5);
		}
	}
	else if(focusTab == PROGRESS_AREA && seekableFlag && playStatus != S_STOP_RESUME)//focus on playing
	{
		clearTimeout(seekSettingTimer);
		if(playStatus==S_PAUSE)
		{
			$('statusIcon').style.display = 'none';
			playStatus=S_PLAY;
		}
		refreshSeekingTime(1);
		seekSettingTimer = setTimeout(function(){
			multimedia.setSeekPoint(seekPoint * 1000);
			hideMenu(0);
			refreshProgressBar();
			clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			showMetaInfoBox(FADE_TIME_4);}, SEEK_TIME_DELAY);
	}
	else if(focusTab == OPTION_AREA)
	{
		if(optionFocusIndex_1 == OPTION_PIC_PRESET)//picture preset
		{

            if(0 == isXVYCCEnable)
            {
                if(optionInfoArray[OPTION_FOOTBALL_MODE])
                {
                    hideMenu(FADE_TIME_15);
                    return;
                }
                changePicturePresetColor();
                for(var i = 0; i < picPresetCheckbox.length; i++)
                {
                    picPresetCheckbox[i].style.display = 'none';
                }
                focusTab = PICTURE_PRESET_AREA;
                OPTION_INFO_COUNT = picPresetListName.length - 1;
                optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
                resetFocusShape();
                $('option').style.display = 'none';
                setMEMC(1);
                $('picturePresetBar').style.display = 'block';
                $('picturePresetBar').style.left = '175px';
                $('picturePresetBar').style.width = '1570px';
                $('picturePresetBarDiv').style.width = '1170px';
                picPresetCheckbox[optionFocusIndex_2].style.display = 'block';
                setHTMLScroll($('picturePresetTitle'));
                setHTMLScroll(picPresetListName[optionFocusIndex_2]);
                hideMenu(FADE_TIME_15);
                return;
            }
            else
            {
                if(optionInfoArray[OPTION_FOOTBALL_MODE])
                {
                    hideMenu(FADE_TIME_15);
                    return;
                }
                changePicturePresetColor();
                for(var i = 0; i < picPresetCheckbox.length; i++)
                {
                    picPresetCheckbox[i].style.display = 'none';
                }
                focusTab = PICTURE_PRESET_AREA;
                OPTION_INFO_COUNT = picPresetListName.length;
                optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
                resetFocusShape();
                $('option').style.display = 'none';
                setMEMC(1);
                $('picturePresetBar').style.display = 'block';
                picPresetCheckbox[optionFocusIndex_2].style.display = 'block';
                setHTMLScroll($('picturePresetTitle'));
                setHTMLScroll(picPresetListName[optionFocusIndex_2]);
                hideMenu(FADE_TIME_15);
                return;
            }
		}
		else if(optionFocusIndex_1 == OPTION_SCREEN_MODE)
		{
			focusTab = PIC_ZOOM_AREA;
			OPTION_INFO_COUNT = screenModeArray.length;
			optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
			if(optionInfoArray[optionFocusIndex_1] >= screenModeArray.length - PIC_ZOOM_LIST_LENGTH)
			{
				picZoomStartIndex = screenModeArray.length - PIC_ZOOM_LIST_LENGTH;
			}
			else
			{
				picZoomStartIndex = optionInfoArray[optionFocusIndex_1];
			}
			picZoomCheckbox[optionInfoArray[optionFocusIndex_1]].style.display = 'block';
			tmpStartIndex = picZoomStartIndex;
			resetFocusShape();
			$('picZoomLeftArrow').style.display = (picZoomStartIndex > 0) ? 'block' : 'none';
			$('picZoomRightArrow').style.display = 
				(picZoomStartIndex < screenModeArray.length - PIC_ZOOM_LIST_LENGTH)
				? 'block' : 'none';
			//$('pictureZoomSelectBar').style.left = - tmpStartIndex * FOCUS_DISTANCE + "px";
			$('option').style.display = 'none';
			setMEMC(1);
			$('pictureZoomSetBar').style.display = 'block';
			setHTMLScroll($('pictureZoomTitle'));
			setHTMLScroll(picZoomSpan[optionFocusIndex_2]);
			hideMenu(FADE_TIME_15);
			return;
		}
		else
		{
			tmpStartIndex = 0;
			switch(optionFocusIndex_1)
			{
				case OPTION_BACK_LIGHT:
				case OPTION_BRIGHTNESS:
				case OPTION_CONTRAST:
				case OPTION_SATURATION:
				case OPTION_TINT:
				case OPTION_SHARPNESS:
				case OPTION_3D_FILED_DEPTH:
					if(optionInfoArray[OPTION_FOOTBALL_MODE])//add for football mode
					{
						hideMenu(FADE_TIME_15);
						return;
					}
					hideMenu(0);
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
					displayOptionBarArea(getBarIndex(optionFocusIndex_1));
					focusTab = OPTION_BAR_AREA;
					hideMenu(FADE_TIME_15);
					return;
				case OPTION_SOUND_PRESET:
					if(optionInfoArray[OPTION_FOOTBALL_MODE])
					{
						hideMenu(FADE_TIME_15);
						return;
					}
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
					OPTION_INFO_COUNT = soundPresetArray.length;
					break;
				case OPTION_FOOTBALL_MODE:
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
					OPTION_INFO_COUNT = modeOptionOnOff.length;
					break;
				case OPTION_PLAY_MODE:
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
					OPTION_INFO_COUNT = playModeArray.length;
					break;
				case OPTION_3D_MODE:
					OPTION_INFO_COUNT = Mode3DArray.length - 1;
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
					tmpStartIndex = mode3dStartIndex;
					break;
				case OPTION_3D_L_R:
					OPTION_INFO_COUNT = Mode3DLRArray.length;
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
					break;
				case OPTION_SUBTITLE:
					OPTION_INFO_COUNT = subtitleCount;
					if(subtitleCount > OPTION_INFO_MAX)//old-10, new-5
					{
						if(optionInfoArray[optionFocusIndex_1] >= subtitleCount - OPTION_INFO_MAX)
						{
							subtitleStartIndex = subtitleCount - OPTION_INFO_MAX;
						}
						else
						{
							subtitleStartIndex = optionInfoArray[optionFocusIndex_1];
							optionFocusIndex_2 = 0;
							tmpStartIndex = subtitleStartIndex;
							break;
						}
					}
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1] - subtitleStartIndex;
					tmpStartIndex = subtitleStartIndex;
					break;
				case OPTION_SOUND_TRACK:
					OPTION_INFO_COUNT = soundTrackCount;
					if(soundTrackCount > OPTION_INFO_MAX)//10
					{
						if(optionInfoArray[optionFocusIndex_1] >= soundTrackCount - OPTION_INFO_MAX)
						{
							soundTrackStartIndex = soundTrackCount - OPTION_INFO_MAX;
						}
						else
						{
							soundTrackStartIndex = optionInfoArray[optionFocusIndex_1];
							optionFocusIndex_2 = 0;
							tmpStartIndex = soundTrackStartIndex;
							break;
						}
					}
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1] - soundTrackStartIndex;
					tmpStartIndex = soundTrackStartIndex;
					break;
				case OPTION_TITLE:
					OPTION_INFO_COUNT = titleCount;
					if(titleCount > OPTION_INFO_MAX)//10
					{
						if(optionInfoArray[optionFocusIndex_1] >= titleCount - OPTION_INFO_MAX)
						{
							titleStartIndex = titleCount - OPTION_INFO_MAX;
						}
						else
						{
							titleStartIndex = optionInfoArray[optionFocusIndex_1];
							optionFocusIndex_2 = 0;
							tmpStartIndex = titleStartIndex;
							break;
						}
					}
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1] - titleStartIndex;
					tmpStartIndex = titleStartIndex;
					break;
				case OPTION_CHAPTER:
					OPTION_INFO_COUNT = chapterCount;
					if(chapterCount > OPTION_INFO_MAX)//10
					{
						if(optionInfoArray[optionFocusIndex_1] >= chapterCount - OPTION_INFO_MAX)
						{
							chapterStartIndex = chapterCount - OPTION_INFO_MAX;
						}
						else
						{
							chapterStartIndex = optionInfoArray[optionFocusIndex_1];
							optionFocusIndex_2 = 0;
							tmpStartIndex = chapterStartIndex;
							break;
						}
					}
					optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1] - chapterStartIndex;
					tmpStartIndex = chapterStartIndex;
					break;
				case OPTION_INFORMATION:
					focusTab = OPTION_DETAIL_AREA;
					$('optionInfoDetails').style.display = 'block';
					fillOptionSecList(optionFocusIndex_1);
					resetFocusShape();
					hideMenu(FADE_TIME_15);
					return;
			}
			setOptionFocusScroll(-1, optionFocusIndex_1);
			focusTab = (optionFocusIndex_1 == OPTION_SOUND_PRESET) ? SOUND_PRESET_AREA : OPTION_DETAIL_AREA;
			resetFocusShape();
			fillOptionSecList(optionFocusIndex_1);
			$("optionSecondList").style.display = 'block';
			setOptionSecFocusScroll(optionFocusIndex_2, -1);
		}
		hideMenu(FADE_TIME_15);
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		if(optionInfoArray[OPTION_FOOTBALL_MODE])//add for football mode
		{
			hideMenu(FADE_TIME_15);
			return;
		}
		setOptionBarValue(1);//t
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		setSPOption();
	}
	else if(focusTab == PICTURE_PRESET_AREA)
	{
		if(optionInfoArray[OPTION_FOOTBALL_MODE])//add for football mode
		{
			hideMenu(FADE_TIME_15);
			return;
		}
		setHTMLNotScroll(picPresetListName[optionFocusIndex_2]);
		optionFocusIndex_2 = parseInt((optionFocusIndex_2 + 1) % OPTION_INFO_COUNT, 10);
        previewPictureMode(optionFocusIndex_2);
		setHTMLScroll(picPresetListName[optionFocusIndex_2]);
		$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionFocusIndex_2 + "px";
	}
	else if(focusTab == PIC_ZOOM_AREA)
	{
		if(optionFocusIndex_2 + 1 < tmpStartIndex + PIC_ZOOM_LIST_LENGTH)
		{
			setHTMLNotScroll(picZoomSpan[optionFocusIndex_2]);
			optionFocusIndex_2++;
			setHTMLScroll(picZoomSpan[optionFocusIndex_2]);
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, optionFocusIndex_2);
			resetFocusShape();
		}
		else if(optionFocusIndex_2 == tmpStartIndex + PIC_ZOOM_LIST_LENGTH - 1 
			&& optionFocusIndex_2 + 1 < screenModeArray.length)
		{
			setHTMLNotScroll(picZoomSpan[optionFocusIndex_2]);
			if(tmpStartIndex == 0)
			{
				$('picZoomLeftArrow').style.display = 'block';
			}
			optionFocusIndex_2++;
			tmpStartIndex++;
			setHTMLScroll(picZoomSpan[optionFocusIndex_2]);
			if(tmpStartIndex == screenModeArray.length - PIC_ZOOM_LIST_LENGTH)
			{
				$('picZoomRightArrow').style.display = 'none';
			}
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, optionFocusIndex_2);
			resetFocusShape();
		}
		hideMenu(FADE_TIME_15);
		return;
	}
	else if(focusTab == OPTION_3D_FILED_AREA)
	{
		optionFocusIndex_2 += (optionFocusIndex_2 >= 10) ? 0 : 1;
		setting.picDepthOfFieldValue = optionFocusIndex_2;
		$('mode3DFieldDepthValue').innerText = optionFocusIndex_2;
		$('mode3DFDEndBar').style.left = optionFocusIndex_2 * OPTION_BAR_LENGTH / MODE_3D_FIELD_DEPTH_VALUE + "px";
		$("mode3DFDStartBar").style.width = optionFocusIndex_2 * OPTION_BAR_LENGTH / MODE_3D_FIELD_DEPTH_VALUE + "px";
	}
	else if(focusTab == TIPS_AREA && tipsBoxFlag == 2)
	{
		tipsBoxIndex = parseInt((tipsBoxIndex + 1) % 2);
		$('focusButton').style.left = tipsBoxDistance * (tipsBoxIndex  + 1) + tipsBoxButtonWidth * tipsBoxIndex + "px";
	}
	else if(focusTab == DIVX_RENTAL_CONFIRM)
	{
		//form_position_h = (form_position_h == 0) ? 1 : 0;
		form_position_h = !form_position_h;
		$("rentalRegistFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
		return ;
	}
	else if((focusTab==DIVX_AUTHOR_AREA) || (focusTab==DIVX_REG_AREA) || (focusTab==DIVX_RENTAL_EXPIRED))
	{
		return ;
	}
	hideMenu(FADE_TIME_15);
}

function toUp()
{
	if(focusTab == QUICK_MENU_AREA)
	{
		if(subtitleCount <= MAX_QUICK_MENU_COUNT)
		{
			quickMenuIndex = parseInt((quickMenuIndex - 1 + quickCount) % quickCount, 10);
		}
		else if(quickMenuIndex == 0 && quickMenuStartIndex - 1 >= 0)
		{
			quickMenuStartIndex--;
			for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
			{
				quickMenuListDiv[i].style.display = 'block';
				quickMenuListSpan[i].innerText = quickInfoText + " " + (i + quickMenuStartIndex + quickOffSet);
			}
			if(quickMenuStartIndex == 0 && quickMenuType == Q_MENU_SUBTITLE)
			{
				quickMenuListDiv[0].style.display = 'block';
				quickMenuListSpan[0].innerText = offInfo;
			}
			refreshQuickCheckFlag();
		}
		else if(quickMenuIndex - 1 >= 0)
		{
			quickMenuIndex--;
		}
		$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
	}
	else if(focusTab == SOUND_PRESET_AREA)
	{
		if(optionInfoArray[OPTION_FOOTBALL_MODE])//add for football mode
		{
			hideMenu(FADE_TIME_15);
			return;
		}
		setOptionSecFocusScroll(-1, optionFocusIndex_2);
		optionFocusIndex_2 = parseInt((optionFocusIndex_2 - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		setting.previewSoundEffectMS12(optionFocusIndex_2);
		setOptionSecFocusScroll(optionFocusIndex_2, -1);
		$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
	}
	if(focusTab == OPTION_AREA)
	{
		setOptionFocusPosition(-1);
		arrowOptionDisplay();
		$('optionFocus_1').style.top = optionFocusIndex_1 * focusOptionHeight + "px";
		$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(-1);//up
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionFocusIndex_1 == OPTION_INFORMATION)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		$('optionInfoDetails').style.display = 'none';
		$('optionSecondList').style.display = 'none';
		setOptionFocusPosition(-1);
		$('optionFocus_1').style.top = optionFocusIndex_1 * focusOptionHeight + "px";
		$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionFocusIndex_1 != OPTION_INFORMATION)
	{
		if(OPTION_INFO_COUNT <= OPTION_INFO_MAX)
		{
			setOptionSecFocusScroll(-1, optionFocusIndex_2);
			optionFocusIndex_2 = parseInt((optionFocusIndex_2 - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
			setOptionSecFocusScroll(optionFocusIndex_2, -1);
			$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
			if(OPTION_FOOTBALL_MODE == optionFocusIndex_1)//add for football mode preview
			{
				setting.previewFootballMode(optionFocusIndex_2);
			}
		}
		else
		{
			if(optionFocusIndex_2 - 1 >= 0)
			{
				setOptionSecFocusScroll(-1, optionFocusIndex_2);
				optionFocusIndex_2--;
				setOptionSecFocusScroll(optionFocusIndex_2, -1);
				$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
			}
			else if(optionFocusIndex_1 == OPTION_SCREEN_MODE)
			{
				moveUpRefreshSecList(screenModeArray, "", screenModeArray.length, 0);
			}
			else if(optionFocusIndex_1 == OPTION_3D_MODE)
			{
				moveUpRefreshSecList(Mode3DArray, "", Mode3DArray.length - 1, 0);
			}
			else if(optionFocusIndex_1 == OPTION_SUBTITLE)
			{
				moveUpRefreshSecList("", subMenuTitleText, subtitleCount, 0);
				if(tmpStartIndex == 0)
				{
					optionSecListSpan[0].innerText = offInfo;
				}
			}
			else if(optionFocusIndex_1 == OPTION_SOUND_TRACK)
			{
				moveUpRefreshSecList("", soundTrackText, soundTrackCount, 1);
			}
			else if(optionFocusIndex_1 == OPTION_TITLE)
			{
				moveUpRefreshSecList("", titleMenuTitleText, titleCount, 1);
			}
			else if(optionFocusIndex_1 == OPTION_CHAPTER)
			{
				moveUpRefreshSecList("", chapterInfo, chapterCount, 1);
			}
		}
		hideMenu(FADE_TIME_15);
		return;
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListFocusIndex - 1 >= 0 && playListFocusIndex < MAX_LENGTH_ONE_PAGE)
		{
			playListFocusIndex--;
			setPlayListFocus(playListFocusIndex, playListFocusIndex + 1);
			$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";
		}
		else if(playListStart > 0)
		{
			playListStart--;
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			setPlayListFocus(playListFocusIndex, -1);
		}
	}
	hideMenu(FADE_TIME_15);
}

function toDown()
{
	if(focusTab == DISPLAY_AREA || focusTab == PROGRESS_AREA)//focus on playing
	{
		if(playStatus == S_EOS || playStatus == S_ERROR)
		{
			return;
		}
		hideInfoBox(0);
		focusTab = PLAY_LIST_AREA;
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
		if(currentPlayList.length <= PLAYLIST_MAX_LENGTH)
		{
			playListStart = 0;
			playListFocusIndex = playListIndex;
		}
		else if(playListIndex + PLAYLIST_MAX_LENGTH > currentPlayList.length)
		{
			playListStart = currentPlayList.length - PLAYLIST_MAX_LENGTH;
			playListFocusIndex = playListIndex - playListStart;
		}
		else
		{
			playListStart = playListIndex;
			playListFocusIndex = 0;
		}
		refreshPlayList();
		refreshCPFlag();
		showPlayListScrollBar(currentPlayList.length, playListStart);
		resetFocusShape();
		$('playList').style.display = 'block';
		setMEMC(0);
		$('playList').style.left = playListLeftDistance + "px";
		setPlayListFocus(playListFocusIndex, -1);
	}
	else if(focusTab == QUICK_MENU_AREA)
	{
		if(quickCount <= MAX_QUICK_MENU_COUNT)
		{
			quickMenuIndex = parseInt((quickMenuIndex + 1) % quickCount, 10);
		}
		else if(quickMenuIndex + 1 == MAX_QUICK_MENU_COUNT
			&& quickMenuStartIndex + MAX_QUICK_MENU_COUNT < quickCount)
		{
			quickMenuStartIndex++;
			for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
			{
				quickMenuListDiv[i].style.display = 'block';
				quickMenuListSpan[i].innerText = quickInfoText + " " + (i + quickMenuStartIndex + quickOffSet);
			}
			refreshQuickCheckFlag();
		}
		else if(quickMenuIndex + 1 < MAX_QUICK_MENU_COUNT)
		{
			quickMenuIndex++;
		}
		$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListFocusIndex >= 0 && playListFocusIndex + 1 < MAX_LENGTH_ONE_PAGE)
		{
			playListFocusIndex++;
			setPlayListFocus(playListFocusIndex, playListFocusIndex - 1);
			$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";
		}
		else if((playListStart + PLAYLIST_MAX_LENGTH) < currentPlayList.length)
		{
			playListStart++;
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			setPlayListFocus(playListFocusIndex, -1);
		}
	}
	else if(focusTab == SOUND_PRESET_AREA)
	{
		if(optionInfoArray[OPTION_FOOTBALL_MODE])//add for football mode
		{
			hideMenu(FADE_TIME_15);
			return;
		}
		setOptionSecFocusScroll(-1, optionFocusIndex_2);
		optionFocusIndex_2 = parseInt((optionFocusIndex_2 + 1) % OPTION_INFO_COUNT, 10);
		setting.previewSoundEffectMS12(optionFocusIndex_2);
		setOptionSecFocusScroll(optionFocusIndex_2, -1);
		$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
	}
	else if(focusTab == OPTION_AREA)
	{
		setOptionFocusPosition(1);
		arrowOptionDisplay();
		$('optionFocus_1').style.top = optionFocusIndex_1 * focusOptionHeight + "px";
		$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(1);//down
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionFocusIndex_1 == OPTION_INFORMATION)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		$('optionInfoDetails').style.display = 'none';
		$('optionSecondList').style.display = 'none';
		setOptionFocusPosition(1);
		$('optionFocus_1').style.top = optionFocusIndex_1 * focusOptionHeight + "px";
		$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionFocusIndex_1 != OPTION_INFORMATION)
	{
		if(OPTION_INFO_COUNT <= OPTION_INFO_MAX)
		{
			setOptionSecFocusScroll(-1, optionFocusIndex_2);
			optionFocusIndex_2 = parseInt((optionFocusIndex_2 + 1) % OPTION_INFO_COUNT, 10);
			setOptionSecFocusScroll(optionFocusIndex_2, -1);
			$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
			if(OPTION_FOOTBALL_MODE == optionFocusIndex_1)//add for football mode preview
			{
				setting.previewFootballMode(optionFocusIndex_2);
			}
		}
		else
		{
			if(optionFocusIndex_2 + 1 < OPTION_INFO_MAX)
			{
				setOptionSecFocusScroll(-1, optionFocusIndex_2);
				optionFocusIndex_2++;
				setOptionSecFocusScroll(optionFocusIndex_2, -1);
				$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
			}
			else if(optionFocusIndex_1 == OPTION_SCREEN_MODE)
			{
				moveDownRefreshSecList(screenModeArray, "", screenModeArray.length, 0);
			}
			else if(optionFocusIndex_1 == OPTION_3D_MODE)
			{
				moveDownRefreshSecList(Mode3DArray, "", Mode3DArray.length - 1, 0);
			}
			else if(optionFocusIndex_1 == OPTION_SUBTITLE)
			{
				moveDownRefreshSecList("", subMenuTitleText, subtitleCount, 0);
			}
			else if(optionFocusIndex_1 == OPTION_SOUND_TRACK)
			{
				moveDownRefreshSecList("", soundTrackText, soundTrackCount, 1);
			}
			else if(optionFocusIndex_1 == OPTION_TITLE)
			{
				moveDownRefreshSecList("", titleMenuTitleText, titleCount, 1);
			}
			else if(optionFocusIndex_1 == OPTION_CHAPTER)
			{
				moveDownRefreshSecList("", chapterInfo, chapterCount, 1);
			}
		}
	}
	hideMenu(FADE_TIME_15);
}

function toOK()//DISPLAY_AREA, OPTION_AREA, OPTION_DETAIL_AREA, PLAY_LIST_AREA, PROGRESS_AREA
{
	if(focusTab == DISPLAY_AREA)//focus on playing
	{
		if(playStatus == S_PLAY)
		{
			hideTmpInfoBox(0);
			hideInfoBox(0);
			clearTimeout(metaInfoTimer);
			if(pauseableFlag)
			{
				playStatus = S_PAUSE;
				$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
				$('topTitle').style.display = 'block';
				$('statusIcon').style.display = 'block';
				$('progressArea').style.display = 'block';
				clearInterval(progressBarTimer);
				refreshProgressBar();
				multimedia.mediaPause();
			}
			else
			{
				clearTimeout(tipsTimer);
				displayTipsBox(0);
				$('tipsInfoContent').innerText = cantOperateText;
				setTipsBox(2);
				$('tipsInfo').style.display = 'block';
				hideTipsBox(FADE_TIME_5);
			}
		}
		else if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
		{
			hideMenu(0);
			playStatus = S_PLAY;
			if(!dmrFlag)
			{
				showMetaInfoBox(FADE_TIME_4);
			}
			multimedia.mediaResume();
			clearInterval(progressBarTimer);
			$('tipsInfo').style.display = 'none';
			$('statusIcon').style.display = 'none';
			return;
		}
		else if(ff_fb_flag != 0)
		{
			hideMenu(0);
			setFastPlay(0);
			$('statusIcon').style.display = 'none';
			showMetaInfoBox(FADE_TIME_4);
			return;
		}
		else if(sf_sb_flag != 0)
		{
			hideMenu(0);
			setSlowPlay(0);
			$('statusIcon').style.display = 'none';
			showMetaInfoBox(FADE_TIME_4);
		}
	}
	else if(focusTab == QUICK_MENU_AREA)
	{
		if(quickMenuType == Q_MENU_SUBTITLE)
		{
			multimedia.setVideoSubtitleIndex(quickMenuStartIndex + quickMenuIndex);	
			$('metaDataInfoSubtitle').innerText = metaDataArray[3] + fillMetaSubtitleInfo(quickMenuStartIndex + quickMenuIndex);
			showMetaInfoBox(FADE_TIME_4);
		}
		else if(quickMenuType == Q_MENU_LANG)
		{
			multimedia.setVideoSoundTrackIndex(quickMenuStartIndex + quickMenuIndex);
			$("metaDataInfoSoundTrack").innerText = metaDataArray[2] + fillMetaSoundTrackInfo(quickMenuStartIndex + quickMenuIndex);
			showMetaInfoBox(FADE_TIME_4);
		}
		else if(quickMenuType == Q_MENU_TITLE)
		{
			hideMenu(0);
			hideMetaInfoBox(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){setting.changeTitle(quickMenuStartIndex + quickMenuIndex);}, DELAY_TIME);
		}
		else if(quickMenuType == Q_MENU_3D)
		{
			multimedia.setVideo3DMode(quickMenuIndex);
			if(quickMenuIndex == 0)//off
			{
				switch3DFlag = false;
				top.$("globleShow").contentWindow.hiddenGlassRemind();
			}
			else if(quickMenuIndex != 0 && switch3DFlag == false)//on
			{
				switch3DFlag = true;
				if(top.glassConnectFlag == 0)
				{
					top.$("globleShow").contentWindow.showGlassRemind(0);
					if(top.bluetoothStart==0)
					{
						setTimeout("setting.bluetoothMaster()",800);
					}
					top.bluetoothStart=1;
				}
			}
			is2DTo3DFlag = (quickMenuIndex == 1) ? true : false;
			optionInfoArray[OPTION_3D_MODE] = quickMenuIndex;
			refresh3DModeList();
		}
		hideMenu(0);
		return;
	}
	else if(focusTab == TIPS_AREA)
	{
		if(tipsBoxFlag == 2)
		{
			displayTipsBox(0);
			focusTab = DISPLAY_AREA;
			operationTimer = setTimeout(function(){multimedia.setVideoPlayingBookmark(tipsBoxIndex)}, DELAY_TIME);
			return;
		}
		switch(errorFlag)
		{ 
			case ERROR_CANT_OPEN://do not play, exit multimedia center
				hideMenu(0);
				displayTipsBox(0);
				multimedia.mediaStop(0);
				$('statusIcon').style.display = 'none';
				playStatus = S_EOS;
				if(dmrFlag)
				{
					clearAllTimer();
					multimedia.deviceExitUninit();
					multimedia.toRestoreSource(0, 0);
					top.$("main").src = "channelPlay.html";
					top.main.focus();
				}
				else if(currentPlayList.length == 1)
				{
					top.$("main").src = "mediaList.html?media";
				}
				else
				{
					multimedia.playNextMediaFile(1);
					focusTab = DISPLAY_AREA;
				}
				break;
			case ERROR_AUDIO_NOT_SUPPORTED:
			case ERROR_VIDEO_NOT_SUPPORTED://continue play
				hideMenu(0);
				displayTipsBox(0);
				focusTab = DISPLAY_AREA;
				break;
			case ERROR_AUDIO_ERROR://do not play, exit multimedia center
			case ERROR_VIDEO_ERROR:
			case ERROR_OTHER:
				clearAllTimer();
				top.g_currentMedia = multimedia.getCurrentPlayingMediaInfo();
				top.g_mediaPosition = multimedia.getCurrentPlayingMediaPosition();
				hideMenu(0);
				displayTipsBox(0);
				$('statusIcon').style.display = 'none';
				multimedia.mediaStop(0);
				playStatus = S_EOS;
				if(dmrFlag)
				{
					multimedia.mediaStop(0);
					multimedia.deviceExitUninit();
					multimedia.toRestoreSource(0, 0);
					top.$("main").src = "channelPlay.html";
					top.main.focus();
				}
				else
				{
					top.$("main").src = "mediaList.html?media";
				}
				break;
			case ERROR_VIDEO_CANT_RECONGNIZE:
			case ERROR_AUDIO_CANT_RECONGNIZE:
				break;
			case ERROR_NET_DISCONNECTED:
				clearAllTimer();
				hideMenu(0);
				hideInfoBox(0);
				hideMetaInfoBox(0);
				displayTipsBox(0);
				$('statusIcon').style.display = 'none';
				clearAllTimer();
				operationTimer = setTimeout(function(){
					multimedia.mediaStop(0);
					multimedia.deviceExitUninit();
					top.g_mediaPosition = 1;
					top.$("main").src = "deviceList.html?remove";}, DELAY_TIME);
				break;
			default:
				break;
		}
	}
	else if(focusTab == PROGRESS_AREA)
	{
		clearTimeout(seekSettingTimer);
		multimedia.setSeekPoint(seekPoint * 1000);
		$('statusIcon').style.display = 'none';
		hideMenu(0);
		refreshProgressBar();
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
		showMetaInfoBox(FADE_TIME_4);
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		/*
		playStatus = S_EOS;
		multimedia.mediaStop();
		top.g_availableStatus = mediaPlay(currentPlayList[playListStart + playListIndex].path);
		*/
		hideMenu(0);
		hideTipsBox(0);
		hideInfoBox(0);
		displayTipsBox(0);
		$('statusIcon').style.display = 'none';
		hideMetaInfoBox(0);
		playStatus = S_EOS;
		$('loadingBox').style.display = 'block';
		clearTimeout(operationTimer);
		operationTimer = setTimeout(function(){
			multimedia.mediaStop(1);
			mediaPlay(currentPlayList[playListStart + playListFocusIndex].path);
			}, playListAnimateTime);
	}
	else if(focusTab == OPTION_AREA)
	{
		toRight();
	}
	else if(focusTab == OPTION_DETAIL_AREA || focusTab == PICTURE_PRESET_AREA 
		|| focusTab == PIC_ZOOM_AREA || focusTab == SOUND_PRESET_AREA)
	{
		setSPOption();
	}
	else if(focusTab == DIVX_AUTHOR_AREA)
	{
		if(drmStatus==2)
		{
			clearAllTimer();
			$("authorRegistFocus").style.display = 'none';
			$("authorRegistForm").style.display = 'none';
			multimedia.mediaStop(0);
			top.$("main").src = "mediaList.html?media";
			return ;
		}
		else
		{
			$("authorRegistFocus").style.display = 'none';
			$("authorRegistForm").style.display = 'none';
			focusTab = DIVX_REG_AREA;
			initRegistration();
			//setTimeout("initRegistration();",300);
			return ;
		}
	}
	else if(focusTab == DIVX_REG_AREA)
	{
		clearAllTimer();
		$("registFocus").style.display = 'none';
		$("registForm").style.display = 'none';
		multimedia.mediaStop(0);
		top.$("main").src = "mediaList.html?media";
		return ;
	}
	else if(focusTab == DIVX_RENTAL_CONFIRM)
	{
		if(form_position_h == 1)
		{
			$("rentalRegistFocus").style.display = 'none';
			$("rentalRegistForm").style.display = 'none';
			divxPlay();
			//setTimeout("divxPlay();",300);
			focusTab = DISPLAY_AREA;
			return ;
		}
		else
		{
			clearAllTimer();
			multimedia.mediaStop(0);
			top.$("main").src = "mediaList.html?media";
			return;
		}
	}
	else if(focusTab == DIVX_RENTAL_EXPIRED)
	{
		clearAllTimer();
		$("rentalRegistFocus").style.display = 'none';
		$("rentalRegistForm").style.display = 'none';
		//initRegistration();
		//focusTab = DIVX_REG_AREA;
		multimedia.mediaStop(0);
		top.$("main").src = "mediaList.html?media";
		return ;
	}
	hideMenu(FADE_TIME_15);
}

function toHomePage()
{
	hideMenu(0);
	hideInfoBox(0);
	hideTipsBox(0);
	operatableFlag = false;
	operationTimer = setTimeout(function(){	
		top.g_lastEnterType = -1;
		top.g_isMediaCenter = top.NDM_Others;
		switch3DFlag = false;
		top.$("globleShow").contentWindow.hiddenGlassRemind();
		top.$("main").onload = function()
		{
			testLog("to home page: before stop");
			multimedia.mediaStop(1);
			testLog("to home page: before device exit uninit");
			multimedia.deviceExitUninit();
			testLog("to home page: before to restore source");
			multimedia.toRestoreSource(0, 0);
			testLog("to home page: uninit done");
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
		}, DELAY_TIME);
}

function toExit()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	hideMenu(0);
	hideMetaInfoBox(0);
	operatableFlag = false;
	operationTimer = setTimeout(function(){
		switch3DFlag = false;
		top.$("globleShow").contentWindow.hiddenGlassRemind();
		if(dmrFlag)
		{
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.$("main").src = "channelPlay.html";
			return;
		}
		top.$("main").onload = function()
		{
			multimedia.mediaStop(1);
			multimedia.deviceExitUninit();
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
		//switch3DFlag = true;
		}, DELAY_TIME);
}

function toBack()
{
	if($('consoleTip').style.display == 'block')
	{
		$('consoleTip').style.display = 'none';
		return;
	}
	if(dmrFlag)
	{
		top.g_lastEnterType = -1;
		top.g_isMediaCenter = top.NDM_Others;
		switch3DFlag = false;
		top.$("globleShow").contentWindow.hiddenGlassRemind();
		multimedia.mediaStop(0);
		multimedia.deviceExitUninit();
		multimedia.toRestoreSource(0, 0);
		top.$("main").src = "channelPlay.html";
		top.main.focus();
		return;
	}
	switch(focusTab)
	{
		case DISPLAY_AREA:
			clearAllTimer();
			switch3DFlag = false;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
			multimedia.mediaStop(1);
			top.$("main").src = "mediaList.html?media";
			break;
		case SOUND_PRESET_AREA:
			changeSoundPresetColor(false);
			setting.previewSoundEffectMS12(optionInfoArray[OPTION_SOUND_PRESET]);
			setOptionSecFocusScroll(-1, -1);
			focusTab = OPTION_AREA;
			resetFocusShape();
			$('optionInfoDetails').style.display = 'none';
			$('optionSecondList').style.display = 'none';
			setOptionFocusScroll(optionFocusIndex_1, -1);
			hideMenu(FADE_TIME_15);
			break;
		case OPTION_BAR_AREA:
			//hideMenu(0);
			toOption(optionFocusIndex_1);
			break;
		case OPTION_DETAIL_AREA:
			toLeft();
			break;
		case PICTURE_PRESET_AREA:
			//hideMenu(0);
			setHTMLNotScroll(picPresetListName[optionFocusIndex_2]);
            previewPictureMode(optionInfoArray[OPTION_PIC_PRESET]);
			toOption(0);
			break;
		case PIC_ZOOM_AREA:
			//hideMenu(0);
			setHTMLNotScroll(picZoomSpan[optionFocusIndex_2]);
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, optionInfoArray[OPTION_SCREEN_MODE]);
			toOption(OPTION_SCREEN_MODE);
			break;
		case TIPS_AREA:
			if(tipsBoxFlag == 2)
			{
				displayTipsBox(0);
				clearAllTimer();
				switch3DFlag = false;
				top.$("globleShow").contentWindow.hiddenGlassRemind();
				multimedia.mediaStop(1);
				top.$("main").src = "mediaList.html?media";
				return;
			}
			toOK();
			break;
		case PROGRESS_AREA:
			clearTimeout(seekSettingTimer);
			hideMenu(0);
			break;
		case DIVX_AUTHOR_AREA:
		case DIVX_REG_AREA:
		case DIVX_RENTAL_CONFIRM:
		case DIVX_RENTAL_EXPIRED:
			clearAllTimer();
			switch3DFlag = false;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
			multimedia.mediaStop(0);
			top.$("main").src = "mediaList.html?media";
			break;
		default:
			hideMenu(0);
			break;
	}
}

function toSubtitle()
{
	if(focusTab == TIPS_AREA) return;
	if($('quickMenu').style.display == 'none')
	{
		$('focus').style.display = 'none'; 
		$('option').style.display = 'none';
		setMEMC(1);
		$('topTitle').style.display = 'none';
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);},playListAnimateTime);
		$('seekInfo').style.display = 'none';
		$('progressArea').style.display = 'none';
		$('optionSecondList').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		quickMenuType = Q_MENU_SUBTITLE;
		focusTab = QUICK_MENU_AREA;
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
		$('quickMenuTitle').innerText = subMenuTitleText;
		if(!skipFlagSubtitle)
		{
			$("quickEmptyTipsBox").style.display = 'none';
			$("quickContainInfo").style.display = 'block';
			quickCount = subtitleCount;
			quickInfoText = subMenuTitleText;
			quickIndex = multimedia.getVideoSubtitleIndex();
			fillQuickMenuInfo();
			refreshQuickCheckFlag();
			$('quickMenu').style.display = 'block';
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickFocus').style.display = 'none';
			$('quickMenu').style.display = 'block';
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = 'block';
			$("quickContainInfo").style.display = 'none';
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == 'block')
	{
		if(quickMenuType == Q_MENU_SUBTITLE)
		{
			hideMenu(0);
		}
		if(quickMenuType != Q_MENU_SUBTITLE)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("toSubtitle();", playListAnimateTime)
		}
	}
}

function toGreen()
{
	if(focusTab == TIPS_AREA) return;
	hideMenu(0);
	hideInfoBox(0);
	hideTmpInfoBox(0);
	if(top.g_lastEnterType == ENTER_USB_TYPE)
	{
		return;
		/*
		clearTimeout(tipsTimer);
		displayTipsBox(0);
		$('tipsInfoContent').innerText = cantOperateText;
		setTipsBox(2);
		$('tipsInfo').style.display = 'block';
		hideTipsBox(FADE_TIME_5);
		return;
		*/
	}
	if(playStatus != S_STOP_RESUME && playStatus != S_ERROR 
		&& sfsbableFlag && errorFlag != ERROR_VIDEO_NOT_SUPPORTED)
	{
		$('progressArea').style.display = 'block';
		setSlowPlay(1);
		refreshProgressBar();
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
	}
	else if(!sfsbableFlag || errorFlag == ERROR_VIDEO_NOT_SUPPORTED)
	{
		clearTimeout(tipsTimer);
		displayTipsBox(0);
		$('tipsInfoContent').innerText = cantOperateText;
		setTipsBox(2);
		$('tipsInfo').style.display = 'block';
		hideTipsBox(FADE_TIME_5);
	}
}

function toRed()
{
	if(focusTab == TIPS_AREA) return;
	hideMenu(0);
	hideInfoBox(0);
	hideTmpInfoBox(0);
	if(top.g_lastEnterType == ENTER_USB_TYPE)
	{
		return;
		/*
		clearTimeout(tipsTimer);
		displayTipsBox(0);
		$('tipsInfoContent').innerText = cantOperateText;
		setTipsBox(2);
		$('tipsInfo').style.display = 'block';
		hideTipsBox(FADE_TIME_5);
		return;
		*/
	}
	if(playStatus != S_STOP_RESUME && playStatus != S_ERROR 
		&& sfsbableFlag && errorFlag != ERROR_VIDEO_NOT_SUPPORTED)
	{
		$('progressArea').style.display = 'block';
		setSlowPlay(-1);
		refreshProgressBar();
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
	}
	else if(!sfsbableFlag || errorFlag == ERROR_VIDEO_NOT_SUPPORTED)
	{
		clearTimeout(tipsTimer);
		displayTipsBox(0);
		$('tipsInfoContent').innerText = cantOperateText;
		setTipsBox(2);
		$('tipsInfo').style.display = 'block';
		hideTipsBox(FADE_TIME_5);
	}
}

function to3D()
{
	if(skipFlag3dMode || focusTab == TIPS_AREA)//[0]not support 3d
	{
		return;
	}
	if($('quickMenu').style.display == 'none')
	{
		optionInfoArray[OPTION_3D_MODE] = multimedia.getVideo3DMode();
		$('focus').style.display = 'none'; 
		$('option').style.display = 'none';
		setMEMC(1);
		$('topTitle').style.display = 'none';
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);}, playListAnimateTime);
		$('seekInfo').style.display = 'none';
		$('progressArea').style.display = 'none';
		$('optionSecondList').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		quickMenuType = Q_MENU_3D;
		focusTab = QUICK_MENU_AREA;
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
		$('quickMenuTitle').innerText = mode3DMenuTitleText;
		$("quickEmptyTipsBox").style.display = 'none';
		$("quickContainInfo").style.display = 'block';
		quickCount = Mode3DArray.length - 1;
		quickInfoText = mode3DMenuTitleText;
		quickIndex = optionInfoArray[OPTION_3D_MODE];
		quickMenuIndex = quickIndex;
		quickMenuStartIndex = 0;
		refreshQuickCheckFlag();
		for(var i = 0; i < quickCount; i++)
		{
			quickMenuListDiv[i].style.display = 'block';
			quickMenuListSpan[i].innerText = Mode3DArray[i];
		}
		for(var i = quickCount; i < MAX_QUICK_MENU_COUNT; i++)
		{
			quickMenuListDiv[i].style.display = 'none';
			quickMenuListSpan[i].innerText = "";
		}
		$('quickMenu').style.display = 'block';
		clearTimeout(operationTimer);
		operationTimer = setTimeout(function(){
			$('quickMenu').style.left = 0 + "px";
			resetFocusShape();}, playListAnimateTime);
		hideMenu(FADE_TIME_15);
	}
	else if($('quickMenu').style.display == 'block')
	{
		if(quickMenuType == Q_MENU_3D)
		{
			hideMenu(0);
		}
		if(quickMenuType != Q_MENU_3D)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("to3D();", playListAnimateTime)
		}
	}
}

function toYellow()
{
	if(focusTab == TIPS_AREA) return;
	if($('quickMenu').style.display == 'none')
	{
		$('focus').style.display = 'none'; 
		$('option').style.display = 'none';
		setMEMC(1);
		$('topTitle').style.display = 'none';
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);},playListAnimateTime);
		$('seekInfo').style.display = 'none';
		$('progressArea').style.display = 'none';
		$('optionSecondList').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		quickMenuType = Q_MENU_TITLE;
		focusTab = QUICK_MENU_AREA;
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
		$('quickMenuTitle').innerText = titleMenuTitleText;
		if(!skipFlagTitle)
		{
			$("quickEmptyTipsBox").style.display = 'none';
			$("quickContainInfo").style.display = 'block';
			quickCount = titleCount;
			quickInfoText = titleMenuTitleText;
			quickIndex = setting.getCurrentTitle();
			fillQuickMenuInfo();
			refreshQuickCheckFlag();
			$('quickMenu').style.display = 'block';
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickFocus').style.display = 'none';
			$('quickMenu').style.display = 'block';
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = 'block';
			$("quickContainInfo").style.display = 'none';
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == 'block')
	{
		if(quickMenuType == Q_MENU_TITLE)
		{
			hideMenu(0);
		}
		if(quickMenuType != Q_MENU_TITLE)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("toYellow();", playListAnimateTime)
		}
	}
}

function toLang()
{
	if(focusTab == TIPS_AREA) return;
	if($('quickMenu').style.display == 'none')
	{
		$('focus').style.display = 'none'; 
		$('option').style.display = 'none';
		setMEMC(1);
		$('topTitle').style.display = 'none';
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);},playListAnimateTime);
		$('seekInfo').style.display = 'none';
		$('progressArea').style.display = 'none';
		$('optionSecondList').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		quickMenuType = Q_MENU_LANG;
		focusTab = QUICK_MENU_AREA;
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
		$('quickMenuTitle').innerText = langMenuTitleText;
		if(!skipFlagSoundtrack)
		{
			$("quickEmptyTipsBox").style.display = 'none';
			$("quickContainInfo").style.display = 'block';
			quickCount = soundTrackCount;
			quickInfoText = langInfoText;
			quickIndex = multimedia.getVideoSoundTrackIndex();
			fillQuickMenuInfo();
			refreshQuickCheckFlag();
			$('quickMenu').style.display = 'block';
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickFocus').style.display = 'none';
			$('quickMenu').style.display = 'block';
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = 'block';
			$("quickContainInfo").style.display = 'none';
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == 'block')
	{
		if(quickMenuType == Q_MENU_LANG)
		{
			hideMenu(0);
		}
		if(quickMenuType != Q_MENU_LANG)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("toLang();", playListAnimateTime)
		}
	}
}

function toOption(index)
{
	if(focusTab == TIPS_AREA) return;
	if($('option').style.display == 'block')
	{
		focusTab = DISPLAY_AREA;
		hideMenu(0);
	}
	else
	{
		if(OPTION_FIRST_MAX_COUNT <= index)
		{
			optionFirstStartIndex = (index + OPTION_FIRST_MAX_COUNT < optionFirstListLength)
				? index : optionFirstListLength - OPTION_FIRST_MAX_COUNT;
		}
		else
		{
			optionFirstStartIndex = 0;
		}
		optionFocusIndex_1 = index;
		optionFocusIndex_2 = 0;
		focusTab = OPTION_AREA;
		hideInfoBox(0);
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
		$('option').style.display = 'block';
		setMEMC(0);
		$('focus').style.display = 'none'; 
		$('topTitle').style.display = 'none'; 
		$('seekInfo').style.display = 'none';
		$('progressArea').style.display = 'none';
		$('optionBarArea').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		$('pictureZoomSetBar').style.display = 'none';
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);}, playListAnimateTime);
		$('quickMenu').style.left = -550 + "px";
		setTimeout(function(){$('quickMenu').style.display = 'none';}, playListAnimateTime);
		
		displayOptionList();
		changeOptionListColor();//add for football mode
		resetFocusShape();
		setOptionMenuFocus(optionFocusIndex_1, -1);
		arrowOptionDisplay();
		hideMenu(FADE_TIME_15);
	}
}

function clearAllTimer()
{
	exitFlag = 1;
	clearTimeout(tipsTimer);
	clearTimeout(menuTimer);
	clearTimeout(chapterTimer);
	clearTimeout(infoBoxTimer);
	clearTimeout(metaInfoTimer);
	clearTimeout(operationTimer);
	clearTimeout(seekSettingTimer);
	clearInterval(progressBarTimer);
}

function fillQuickMenuInfo()
{ 
	quickOffSet = !(quickMenuType == Q_MENU_SUBTITLE);
	if(quickCount <= MAX_QUICK_MENU_COUNT)
	{
		quickMenuIndex = quickIndex;
		quickMenuStartIndex = 0;
	}
	else if(quickIndex < quickCount - MAX_QUICK_MENU_COUNT)
	{
		quickMenuStartIndex = quickIndex;
		quickMenuIndex = 0;
	}
	else if(quickIndex >= quickCount - MAX_QUICK_MENU_COUNT)
	{
		quickMenuStartIndex = quickCount - MAX_QUICK_MENU_COUNT;
		quickMenuIndex = quickIndex - quickMenuStartIndex;
	}
	if(quickCount <= MAX_QUICK_MENU_COUNT)
	{
		for(var i = 0; i < quickCount; i++)
		{
			quickMenuListDiv[i].style.display = 'block';
			quickMenuListSpan[i].innerText = quickInfoText + " " + (i + quickOffSet);
		}
		for(var i = quickCount; i < MAX_QUICK_MENU_COUNT; i++)
		{
			quickMenuListDiv[i].style.display = 'none';
			quickMenuListSpan[i].innerText = "";
		}
		if(quickMenuType == Q_MENU_SUBTITLE)
		{
			quickMenuListDiv[0].style.display = 'block';
			quickMenuListSpan[0].innerText = offInfo;
		}
	}
	else
	{
		for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
		{
			quickMenuListDiv[i].style.display = 'block';
			quickMenuListSpan[i].innerText = quickInfoText + " " + (i + quickMenuStartIndex + quickOffSet);
		}
		if(quickMenuStartIndex == 0 && quickMenuType == Q_MENU_SUBTITLE)
		{
			quickMenuListDiv[0].style.display = 'block';
			quickMenuListSpan[0].innerText = offInfo;
		}
	}
}

function fillFileInformation(file)
{
	var tmp = (file.name != null && file.name != "") ? file.name : naInfo;
	informationBoxLi[0].innerText = "  " + fileNameText + ": " + tmp + "  ";
	var tmp1 = (file.year != null && file.year != "") ? file.year : naInfo;
	var tmp2 = (file.month != null && file.month != "") ? file.month : naInfo;
	var tmp3 = (file.day != null && file.day != "") ? file.day : naInfo;
	if(tmp2 < 10) tmp2 = "0" + tmp2;
	if(tmp3 < 10) tmp3 = "0" + tmp3;
	informationBoxLi[1].innerText = "  " + fileDateText + ": " + tmp3 + "/" + tmp2 + "/"+ tmp1 + "  ";
	informationBoxLi[2].innerText = "  " + fileDurationText + ": " + $('duration').innerText + "  ";

	var tmp = (videoFileInfo.name != null && videoFileInfo.name != "") ? videoFileInfo.name : naInfo;
	optionInfoDetailSpan[0].innerText = fileNameText + ": " + tmp;
	tmp = (videoFileInfo.artist != null && videoFileInfo.artist != "") ? videoFileInfo.artist : naInfo;
	var tmp1 = (videoFileInfo.year != null && videoFileInfo.year != "") ? videoFileInfo.year : naInfo;
	var tmp2 = (videoFileInfo.month != null && videoFileInfo.month != "") ? videoFileInfo.month : naInfo;
	var tmp3 = (videoFileInfo.day != null && videoFileInfo.day != "") ? videoFileInfo.day : naInfo;
	if(tmp2 < 10) tmp2 = "0" + tmp2;
	if(tmp3 < 10) tmp3 = "0" + tmp3;
	optionInfoDetailSpan[1].innerText = fileDateText + ": " + tmp3 + "/" + tmp2 + "/"+ tmp1;
	optionInfoDetailSpan[2].innerText = fileDurationText + ": " + $('duration').innerText;
	tmp = (videoFileInfo.director != null && videoFileInfo.director != "") ? videoFileInfo.director : naInfo;
	optionInfoDetailSpan[3].innerText = fileDirectorText + ": " + tmp;
	tmp = (videoFileInfo.copyright != null && videoFileInfo.copyright != "") ? videoFileInfo.copyright : naInfo;
	optionInfoDetailSpan[4].innerText = fileCopyrightText + ": " + tmp;
}

function fillPicZoomList(index)
{
	if(OPTION_PANNEL_TYPE == 0)//HD
	{
		switch(index)
		{
			case 0://16:9
				picZoomImg[index].src = "images/Screen_mode_169_format.png";
				break;
			case 1://4:3
				picZoomImg[index].src = "images/Screen_mode_43_format.png";
				break;
			case 2://Cinerama
				picZoomImg[index].src = "images/Screen_mode_Cinerama.png";
				break;
			case 3://Wide Zoom
				picZoomImg[index].src = "images/Screen_mode_Wide_Zoom.png";
				break;
			case 4://Zoom 2
				picZoomImg[index].src = "images/Screen_mode_Zoom2.png";
				break;
			case 5://Wide Zoom 2
				picZoomImg[index].src = "images/Screen_mode_Wide_Zoom2.png";
				break;
			case 6://Stretch Zoom
				picZoomImg[index].src = "images/Screen_mode_Stretch_Zoom.png";
				break;
			case 7://Automatic
				picZoomImg[index].src = "images/Screen_mode_auto_format.png";
				break;
			default:
				break;
		}
	}
	else//SD
	{
		switch(index)
		{
			case 0://16:9
				picZoomImg[index].src = "images/Screen_mode_169_format.png";
				break;
			case 1://4:3
				picZoomImg[index].src = "images/Screen_mode_43_format.png";
				break;
			case 2://Cinerama
				picZoomImg[index].src = "images/Screen_mode_Cinerama.png";
				break;
			case 3://14:9 Zoom
				picZoomImg[index].src = "images/Screen_mode_149_Zoom.png";
				break;
			case 4://16:9 Zoom
				picZoomImg[index].src = "images/Screen_mode_169_Zoom.png";
				break;
			case 5://16:9 Zoom up
				picZoomImg[index].src = "images/Screen_mode_169_Zoomup.png";
				break;
			case 6://Automatic
				picZoomImg[index].src = "images/Screen_mode_auto_format.png";
				break;
			default:
				break;
		}
	}
}

function fillPGInfo(string)
{
	if(string != null && string != "")
	{
		lawRatingFlag = 1;
		$('pgInfoContent').innerText = pgInfo + string;
		$('pgInfoContent').style.display = 'block'; //yiling0811
	}
	else
	{
		lawRatingFlag = 0;
		$('pgInfoContent').style.display = 'none';
	}
}

function fillMetaChapterInfo()
{
	chapterInfoContainer = setting.getCurrentChapter();
	var string = (chapterInfoContainer.chapterName == null || chapterInfoContainer.chapterName == "")
		? (metaChapterInfo + ": " + (optionInfoArray[OPTION_CHAPTER] + 1))
		: chapterInfoContainer.chapterName;
	return string;
}

function fillMetaSoundTrackInfo(index)
{	
	var string = "";
	string += (soundTrackInfo[index].language == "" || soundTrackInfo[index].language == null) 
		? "" : (soundTrackInfo[index].language + "; ");
	string += (soundTrackInfo[index].streamName == "" || soundTrackInfo[index].streamName == null)
		? "" : (soundTrackInfo[index].streamName + "; ");
	string += (soundTrackInfo[index].codecName == "" || soundTrackInfo[index].codecName == null)
		? "" : (soundTrackInfo[index].codecName + "; ");
	string += soundTrackInfo[index].channels > 0 ? (soundTrackInfo[index].channels + " Channels") : "";
	return string;
}

function fillMetaSubtitleInfo(index)
{
	if(subtitleCount <=1) //yiling0811
	{
		return noneInfo;
	}
	var string = (subtitleInfoList[index].language == "" || subtitleInfoList[index].language == null )
		? subtitleInfoList[index].subtitleName : subtitleInfoList[index].language + "; " + subtitleInfoList[index].subtitleName;
	return string;
}

function fillMetaTitleInfo()
{
	var string = (massInfo.titleName == "" || massInfo.titleName == null) 
		? metaTitleInfo + ": " + (optionInfoArray[OPTION_TITLE] + 1) : massInfo.titleName;
	return string;
}

function fillMetadataInfo()
{
	if(metadataTipsFlag != 1)
	{
		return;
	}
	$("metaDataInfoTitle").innerText = metaDataArray[0];
	$("metaDataInfoChapter").innerText = metaDataArray[1];
	$("metaDataInfoSoundTrack").innerText = metaDataArray[2];
	$("metaDataInfoSubtitle").innerText = metaDataArray[3];
	$("metaDataInfoTitle").innerText += (titleCount > 0) ? fillMetaTitleInfo() : noneInfo;
	$("metaDataInfoChapter").innerText += (chapterCount > 0) ? fillMetaChapterInfo() : noneInfo;
	$("metaDataInfoSoundTrack").innerText += (soundTrackCount > 0)
		? fillMetaSoundTrackInfo(multimedia.getVideoSoundTrackIndex()) : noneInfo;
	$('metaDataInfoSubtitle').innerText += (subtitleCount > 0)
		? fillMetaSubtitleInfo(optionInfoArray[OPTION_SUBTITLE]) : noneInfo;
}

function initOptionSecLi()
{
	for(var i = 0; i < optionMenuList_2.length; i++)
	{
		optionSecListImg_1[i].style.display = 'none';
		optionMenuList_2[i].style.display = 'block';
		optionSecListSpan[i].innerText = "";
	}
}

function fillOptionSecinfo(totalCount, name, startIndex, offset)
{
	var num = 5;
	var count = OPTION_INFO_MAX;
	if(totalCount < OPTION_INFO_MAX)
	{
		num = totalCount;
		count = totalCount;
	}
	for(var i = 0; i < count; i++)
	{
		optionSecListSpan[i].innerText = name + (i + startIndex + offset);
	}
	for(var i = count; i < OPTION_INFO_MAX; i++)
	{
		optionMenuList_2[i].style.display = 'none';
		optionSecListSpan[i].innerText = "";
	}
	return num;
}

function displayOptionList()
{
	checkOptionListInfo();
	refreshOptionInfo();
	fillOptionFirstList();

	for(var i = 0; i < optionListLi.length; i++)
	{
		var tmpIndex = parseInt(optionListLi[i].getAttribute(displayAttri));
		if(tmpIndex == -1)
		{
			optionListLi[i].style.display = 'none';
		}
		else
		{
			optionListLi[i].style.display = 'block';
			optionListLi[i].style.top = optionHeightDistance * tmpIndex + "px";
		}
	}
}

function changeObjColor(obj, color)
{
	var tmpSpan = obj.getElementsByTagName('span');
	var tmpDiv = obj.getElementsByTagName('div');
	for(var i = 0; i < tmpSpan.length; i++)
	{
		tmpSpan[i].style.color = color;
	}
	tmpDiv[2].style.background = color;
	tmpDiv[3].style.background = color;
}

function changeOptionListColor()
{
	if(optionInfoArray[OPTION_FOOTBALL_MODE])//football mode on
	{
		$('optionPicturePreset').getElementsByClassName('optionFirstListSpan_marquee')[0].style.color = "#666";
		$('optionSoundPreset').getElementsByClassName('optionFirstListSpan_marquee')[0].style.color = "#666";
		changeObjColor($('optionBackLight'), "#666");
		changeObjColor($('optionBrightness'), "#666");
		changeObjColor($('optionContrast'), "#666");
		changeObjColor($('optionSaturation'), "#666");
		changeObjColor($('optionTint'), "#666");
		changeObjColor($('optionSharpness'), "#666");
	}
	else
	{
		$('optionPicturePreset').getElementsByClassName('optionFirstListSpan_marquee')[0].style.color = "#aaa";
		$('optionSoundPreset').getElementsByClassName('optionFirstListSpan_marquee')[0].style.color = "#aaa";
		changeObjColor($('optionBackLight'), "#aaa");
		changeObjColor($('optionBrightness'), "#aaa");
		changeObjColor($('optionContrast'), "#aaa");
		changeObjColor($('optionSaturation'), "#aaa");
		changeObjColor($('optionTint'), "#aaa");
		changeObjColor($('optionSharpness'), "#aaa");
	}
}

function changePicturePresetColor()
{
	if(optionInfoArray[OPTION_FOOTBALL_MODE])
	{
		$("picturePresetFocus").src = picPresetFocus[1];
		for(var i = 0; i < picPresetListName.length; i++)
		{
			picPresetListName[i].style.color = "#666";
		}
	}
	else
	{
		$("picturePresetFocus").src = picPresetFocus[0];
		for(var i = 0; i < picPresetListName.length; i++)
		{
			picPresetListName[i].style.color = "#aaa" ;
		}
	}
}

function changeSoundPresetColor(flag)//flag[true]: change into dark color; [false]: change back to normal
{
	if(flag && optionInfoArray[OPTION_FOOTBALL_MODE])
	{
		$("optionFocus_2").src = soundPresetFocus[1];
		for(var i = 0; i < optionSecListSpan.length; i++)
		{
			optionSecListSpan[i].style.color = "#666";
		}
	}
	else
	{
		$("optionFocus_2").src = soundPresetFocus[0];
		for(var i = 0; i < optionSecListSpan.length; i++)
		{
			optionSecListSpan[i].style.color = "#aaa";
		}
	}
}

function getBarType(index)
{
	switch(index)
	{
		case 0:
			return OPTION_BACK_LIGHT;
		case 1:
			return OPTION_BRIGHTNESS;
		case 2:
			return OPTION_CONTRAST;
		case 3:
			return OPTION_SATURATION;
		case 4:
			return OPTION_TINT;
		case 5:
			return OPTION_SHARPNESS;
		case 6:
			return OPTION_3D_FILED_DEPTH;
		default:
			return OPTION_BACK_LIGHT;
	}
}

function getBarIndex(index)
{
	switch(index)
	{
		case OPTION_BACK_LIGHT:
			return 0;
		case OPTION_BRIGHTNESS:
			return 1;
		case OPTION_CONTRAST:
			return 2;
		case OPTION_SATURATION:
			return 3;
		case OPTION_TINT:
			return 4;
		case OPTION_SHARPNESS:
			return 5;
		case OPTION_3D_FILED_DEPTH:
			return 6;
		default:
			return 0;
	}
}

function displayOptionBarArrows(index)
{
	var tmpBarCount = skipFlag3DFieldDepth ? 6 : 7;
	$('optionBarUpArrow').style.display = (index > 1 && index < tmpBarCount) ? 'block' : 'none';
	$('optionBarDownArrow').style.display = (index < tmpBarCount - 2 && index >= 0) ? 'block' : 'none';
}

function displayOptionBarArea(index)
{
	fillOptionBarArea();
	$('optionBarBlock').style.top = - index * optionBarHeight + "px";
	
	for(var i = 0; i < optionBarNameArray.length; i++)
	{
		optionBarNameArray[i].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[i].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[i].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[i].getElementsByClassName('optionBarValue')[0].style.display = 'none';
		optionBarNameArray[i].getElementsByClassName('optionBarStyle_2')[0].style.display = 'none';
	}

	$('fieldDepthBar').style.display = skipFlag3DFieldDepth ? 'none' : 'block';

	optionBarNameArray[index].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarValue')[0].style.display = 'block';
	optionBarNameArray[index].getElementsByClassName('optionBarStyle_2')[0].style.display = 'block';

	displayOptionBarArrows(index);

	$('optionBarArea').style.display = 'block';
}

function refreshOptionInfo()
{
    if(0 == isXVYCCEnable)
    {
        optionInfoArray[OPTION_PIC_PRESET] = setting.pictureMode;
    }
    else
    {
        optionInfoArray[OPTION_PIC_PRESET] = pictureModeTransform(setting.pictureMode);
    }
	optionInfoArray[OPTION_BACK_LIGHT] = setting.backLight;
	optionInfoArray[OPTION_BRIGHTNESS] = setting.brightness;
	optionInfoArray[OPTION_CONTRAST] = setting.contrast;
	optionInfoArray[OPTION_SATURATION] = setting.saturation;
	optionInfoArray[OPTION_TINT] = setting.hue;
	optionInfoArray[OPTION_SHARPNESS] = setting.sharpness;
	optionInfoArray[OPTION_SOUND_PRESET] = setting.soundPresetMS12;
	optionInfoArray[OPTION_FOOTBALL_MODE] = setting.footballMode;//add for football mode
	optionInfoArray[OPTION_PLAY_MODE] = multimedia.videoRepeatMode;
	optionInfoArray[OPTION_SCREEN_MODE] = multimedia.getVideoScreenMode(OPTION_PANNEL_TYPE);
	if(!skipFlag3dMode)//[0]:not support 3d
	{
		optionInfoArray[OPTION_3D_MODE] = multimedia.getVideo3DMode();
		if(optionInfoArray[OPTION_3D_MODE] > 0)//3d function running
		{
			skipFlag3DLR = false;
			skipFlag3DFieldDepth = is2DTo3DFlag ? false : true;
			optionInfoArray[OPTION_3D_L_R] = setting.picLRSwitch;//[0]off [1]on
			optionInfoArray[OPTION_3D_FILED_DEPTH] = is2DTo3DFlag ? setting.picDepthOfFieldValue : 0;
		}
	}
	if(!skipFlagSubtitle)
	{
		optionInfoArray[OPTION_SUBTITLE] = multimedia.getVideoSubtitleIndex();
	}
	if(!skipFlagSoundtrack)
	{
		optionInfoArray[OPTION_SOUND_TRACK] = multimedia.getVideoSoundTrackIndex();
	}
	if(!skipFlagTitle)
	{
		optionInfoArray[OPTION_TITLE] = setting.getCurrentTitle();
	}
	if(!skipFlagChapter)
	{
		chapterInfoContainer = setting.getCurrentChapter();
		optionInfoArray[OPTION_CHAPTER] = chapterInfoContainer.chapterid;
	}
}

function refreshBarArea(tmpBar, value, maxValue, length)
{
	tmpBar[1].style.width = value * length / maxValue + "px";
	tmpBar[2].style.left = value * length / maxValue + "px";
}

function displayTipsBox(flag)
{
	tipsBoxFlag = flag;
	switch(tipsBoxFlag)
	{
		case 0://hide box
			$('tipsBox').style.display = 'none';
			break;
		case 1://ok button
			$('focusButton').style.left = tipsBoxMiddleDistance + "px";
			$('tipsBox').style.display = 'block';
			$('okButton').style.display = 'block';
			$('noButton').style.display = 'none';
			$('yesButton').style.display = 'none';
			break;
		case 2://no & yes buttons
			tipsBoxIndex = 1;
			$('focusButton').style.left = tipsBoxDistance * (tipsBoxIndex  + 1) + tipsBoxButtonWidth * tipsBoxIndex + "px";
			$('tipsBox').style.display = 'block';
			$('okButton').style.display = 'none';
			$('noButton').style.display = 'block';
			$('yesButton').style.display = 'block';
			break;
		default:
			break;
	}
}

function optionArrowDisplay(index, startIndex, count)
{
	$(optionUpArrowName + index).style.display = (startIndex == 0) ? 'none' : 'block';
	$(optionDownArrowName + index).style.display = (startIndex + OPTION_INFO_MAX < count) ? 'block' : 'none';
}

function fillOptionFirstList()
{
    if(0 == isXVYCCEnable)
    {
        $('optionPicturePreset').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
            = picturePresetArray[4 == optionInfoArray[OPTION_PIC_PRESET] ? 5 : optionInfoArray[OPTION_PIC_PRESET]];
    }
    else
    {
        $('optionPicturePreset').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
            = picturePresetArray[optionInfoArray[OPTION_PIC_PRESET]];
    }

	$('optionBackLight').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= optionInfoArray[OPTION_BACK_LIGHT];
	refreshBarArea($('optionBackLightBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_BACK_LIGHT], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionBrightness').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= optionInfoArray[OPTION_BRIGHTNESS];
	refreshBarArea($('optionBrightnessBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_BRIGHTNESS], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionContrast').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= optionInfoArray[OPTION_CONTRAST];
	refreshBarArea($('optionContrastBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_CONTRAST], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSaturation').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= optionInfoArray[OPTION_SATURATION];
	refreshBarArea($('optionSaturationBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_SATURATION], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionTint').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= optionInfoArray[OPTION_TINT];
	refreshBarArea($('optionTintBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_TINT], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSharpness').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= optionInfoArray[OPTION_SHARPNESS];
	refreshBarArea($('optionSharpnessBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_SHARPNESS], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSoundPreset').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= soundPresetArray[optionInfoArray[OPTION_SOUND_PRESET]];

	$('optionFootballMode').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= modeOptionOnOff[optionInfoArray[OPTION_FOOTBALL_MODE]];

	$('optionPlayMode').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= playModeArray[optionInfoArray[OPTION_PLAY_MODE]];

	$('optionScreenMode').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
		= screenModeArray[optionInfoArray[OPTION_SCREEN_MODE]];

	if(!skipFlag3dMode)
	{
		$('option3DMode').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
			= Mode3DArray[optionInfoArray[OPTION_3D_MODE]];
	}

	if(!skipFlag3DLR)
	{
		$('optionLRSwitch').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
			= Mode3DLRArray[optionInfoArray[OPTION_3D_L_R]];
	}

	if(!skipFlag3DFieldDepth)
	{
		$('optionFieldDepth').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
			= optionInfoArray[OPTION_3D_FILED_DEPTH];
		refreshBarArea($('optionFieldDepthBar').getElementsByTagName('div'), 
			optionInfoArray[OPTION_3D_FILED_DEPTH], MODE_3D_FIELD_DEPTH_VALUE, SHORT_BAR_LENGTH);
	}

	if(!skipFlagSubtitle)
	{
		$('optionSubtitle').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
			= subtitleInfoList[optionInfoArray[OPTION_SUBTITLE]].displayName;
	}

	if(!skipFlagSoundtrack)
	{
		$('optionSoundTrack').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
			= soundTrackText + " " + (optionInfoArray[OPTION_SOUND_TRACK] + 1);
	}
	if(!skipFlagTitle)
	{
		$('optionTitle').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
			= titleMenuTitleText + " " + (optionInfoArray[OPTION_TITLE] + 1);
	}
	if(!skipFlagChapter)
	{
		$('optionChapter').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText
			= chapterInfo + " " + (optionInfoArray[OPTION_CHAPTER] + 1);
	}	
}

function fillOptionBarArea()
{
	$('backLightBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_BACK_LIGHT];
	$('brightnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_BRIGHTNESS];
	$('contrastBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_CONTRAST];
	$('saturationBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_SATURATION];
	$('tintBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_TINT];
	$('sharpnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_SHARPNESS];
	$('fieldDepthBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_3D_FILED_DEPTH];

	refreshBarArea($('backLightBar').getElementsByTagName('img'), optionInfoArray[OPTION_BACK_LIGHT], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('brightnessBar').getElementsByTagName('img'), optionInfoArray[OPTION_BRIGHTNESS], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('contrastBar').getElementsByTagName('img'), optionInfoArray[OPTION_CONTRAST], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('saturationBar').getElementsByTagName('img'), optionInfoArray[OPTION_SATURATION], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('tintBar').getElementsByTagName('img'), optionInfoArray[OPTION_TINT], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('sharpnessBar').getElementsByTagName('img'), optionInfoArray[OPTION_SHARPNESS], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('fieldDepthBar').getElementsByTagName('img'), optionInfoArray[OPTION_3D_FILED_DEPTH], 10, OPTION_BAR_LENGTH);
}

function fillOptionSecList(index)
{
	var num = 5;
	initOptionSecLi();
	switch(index)
	{
		case OPTION_SOUND_PRESET:
			num = soundPresetArray.length;
			for(var i = 0; i < OPTION_INFO_COUNT; i++)
			{
				optionMenuList_2[i].style.display = 'block';
				optionSecListSpan[i].innerText = soundPresetArray[i];
			}
			changeSoundPresetColor(true);
			break;
		case OPTION_FOOTBALL_MODE:
			num = modeOptionOnOff.length;
			for(var i = 0; i < OPTION_INFO_COUNT; i++)
			{
				optionMenuList_2[i].style.display = 'block';
				optionSecListSpan[i].innerText = modeOptionOnOff[i];
			}
			optionArrowDisplay(SEC_INDEX, 0, num);
			break;
		case OPTION_PLAY_MODE:
			num = 3;
			for(var i = 0; i < OPTION_INFO_COUNT; i++)
			{
				optionMenuList_2[i].style.display = 'block';
				optionSecListSpan[i].innerText = playModeArray[i];
			}
			for(var i = OPTION_INFO_COUNT; i < OPTION_MAX_SEC_LIST; i++)
			{
				optionMenuList_2[i].style.display = 'none';
				optionSecListSpan[i].innerText = "";
			}
			optionArrowDisplay(SEC_INDEX, 0, 3);
			break;
		case OPTION_SCREEN_MODE:
			if(screenModeStartIndex > OPTION_INFO_COUNT - OPTION_INFO_MAX)
			{
				screenModeStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
			}
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				optionSecListSpan[i].innerText = screenModeArray[i + screenModeStartIndex];
			}
			optionArrowDisplay(SEC_INDEX, screenModeStartIndex, screenModeArray.length);
			break;
		case OPTION_3D_MODE:
			num = Mode3DArray.length - 1;
			for(var i = 0; i < OPTION_INFO_COUNT; i++)
			{
				optionMenuList_2[i].style.display = 'block';
				optionSecListSpan[i].innerText = Mode3DArray[i + mode3dStartIndex];
			}
			for(var i = OPTION_INFO_COUNT; i < OPTION_MAX_SEC_LIST; i++)
			{
				optionMenuList_2[i].style.display = 'none';
				optionSecListSpan[i].innerText = "";
			}
			optionArrowDisplay(SEC_INDEX, 0, num);
			break;
		case OPTION_3D_L_R:
			num = Mode3DLRArray.length;
			for(var i = 0; i < OPTION_INFO_COUNT; i++)
			{
				optionMenuList_2[i].style.display = 'block';
				optionSecListSpan[i].innerText = Mode3DLRArray[i];
			}
			for(var i = OPTION_INFO_COUNT; i < OPTION_MAX_SEC_LIST; i++)
			{
				optionMenuList_2[i].style.display = 'none';
				optionSecListSpan[i].innerText = "";
			}
			optionArrowDisplay(SEC_INDEX, 0, num);
			break;
		case OPTION_SUBTITLE:
			num = fillOptionSecinfo(subtitleCount, subMenuTitleText, subtitleStartIndex, 0);
			if(subtitleStartIndex == 0)
			{
				optionSecListSpan[0].innerText = offInfo;
			}
			optionArrowDisplay(SEC_INDEX, subtitleStartIndex, subtitleCount);
			break;
		case OPTION_SOUND_TRACK:
			num = fillOptionSecinfo(soundTrackCount, soundTrackText, soundTrackStartIndex, 1);
			optionArrowDisplay(SEC_INDEX, soundTrackStartIndex, soundTrackCount);
			break;
		case OPTION_TITLE:
			num = fillOptionSecinfo(titleCount, titleMenuTitleText, titleStartIndex, 1);
			optionArrowDisplay(SEC_INDEX, titleStartIndex, titleCount);
			break;
		case OPTION_CHAPTER:
			num = fillOptionSecinfo(chapterCount, chapterInfo, chapterStartIndex, 1);
			optionArrowDisplay(SEC_INDEX, chapterStartIndex, chapterCount)
			break;
		case OPTION_INFORMATION://info
			num = 5;
			for(var i = 0; i < optionInfoDetailSpan.length; i++)
			{
				setHTMLScroll(optionInfoDetailSpan[i]);
			}
			break;
		default:
			break;
	}
	resetOptionSecBg(index, num);
	return;
}

function resetOptionSecBg(index, num)
{
	var tmpTop = optionSecondListTopDistance + optionFocusIndex_1 * 80 - optionFirstStartIndex * 80;
	var tmpTopLimit = 1080 - num * 80 - 60 - 8;
	switch(index)
	{
		case OPTION_SOUND_PRESET:
		case OPTION_FOOTBALL_MODE:
		case OPTION_PLAY_MODE:
		case OPTION_SCREEN_MODE:
		case OPTION_3D_MODE:
		case OPTION_3D_L_R:
		case OPTION_SUBTITLE:
		case OPTION_SOUND_TRACK:
		case OPTION_TITLE:
		case OPTION_CHAPTER:
			$('optionSecondList').style.top = (tmpTop > tmpTopLimit)
				? tmpTopLimit + "px" : tmpTop + "px";
			$('optionSecDiv').style.height = 60 + 80 * num + "px";
			break;
		case OPTION_INFORMATION:
			$('optionInfoDetails').style.top = (tmpTop > tmpTopLimit)
				? tmpTopLimit + "px" : tmpTop + "px";
			break;
		default:
			$('optionSecondList').style.top = optionSecondListTopDistance + "px";
			$('optionSecDiv').style.height = 460 + "px";//5 * 80 + 30 * 2
			break;
	}
	return;
}

function resetFocusShape()
{
	switch(focusTab)
	{
		case DISPLAY_AREA:
			break;
			
		case OPTION_AREA:
			$('focus').style.display = 'none';
			focusOptionHeight = 80;
			focusOptionTopDistance = 0;
			//$('optionFocus_1').style.top = focusOptionTopDistance + "px";
			$('optionFocus_1').style.left = 0 + "px";
			$('optionFocus_1').style.width = 540 + "px";
			$('optionFocus_1').style.height = focusOptionHeight + "px";
			$('optionFocus_1').src = "images/Focus_USB_1.png";
			$('optionFocus_1').style.top = optionFocusIndex_1 * focusOptionHeight + "px";
			$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
			break;
			
		case SOUND_PRESET_AREA:
		case OPTION_DETAIL_AREA:
			$('optionFocus_2').style.display = (optionFocusIndex_1 == OPTION_INFORMATION) ? 'none' : 'block';
			focusOptionHeight = 80;
			focusOptionTopDistance = 30;
			if(optionFocusIndex_1 == OPTION_INFORMATION)
			{
				$('optionFocus_1').src = "images/Focus_USB_1.png";
			}
			else 
			{
				$('optionFocus_1').src = "images/Focus_USB_1_.png";
			}
			$('optionFocus_2').style.top = focusOptionTopDistance + "px";
			$('optionFocus_2').style.left = 0 + "px";
			$('optionFocus_2').style.width = 300 + "px";
			$('optionFocus_2').style.height = focusOptionHeight + "px";
			$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
			break;
			
		case PLAY_LIST_AREA:
			$('focus').style.display = 'none';
			FOCUS_DISTANCE = 80;
			FOCUS_LEFT_DISTANCE = 5;
			$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";
			break;
			
		case PROGRESS_AREA:
			break;

		case PICTURE_PRESET_AREA:
			$('focus').style.display = 'none';
			FOCUS_DISTANCE = 230;
			FOCUS_LEFT_DISTANCE = 318;//325;
			$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionFocusIndex_2 + "px";
			break;

		case PIC_ZOOM_AREA:
			$('focus').style.display = 'none';
			FOCUS_DISTANCE = 234;//231;
			FOCUS_LEFT_DISTANCE = 345;//325;
			$('pictureZoomFocus').style.left = FOCUS_DISTANCE * optionFocusIndex_2 + "px";
			$('pictureZoomSelectBar').style.left = - tmpStartIndex * FOCUS_DISTANCE + "px";
			break;

		case QUICK_MENU_AREA:
			$('focus').style.display = 'none';
			$('quickFocus').style.display = 'block';
			FOCUS_DISTANCE = 80;
			$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
			break;
			
		default:
			$('focus').style.display = 'none';
			break;
	}
}

function setChapterIndex(time)
{
	chapterTimer = setTimeout(function(){
		clearTimeout(tipsTimer);
		clearTimeout(metaInfoTimer);
		if(chapterSetIndex > chapterCount || chapterSetIndex == 0)
		{
			$('tipsInfoContent').innerText = chapterChangeInfo.replace(/XXXX/, chapterCount);
			setTipsBox(2)
			$('tipsInfo').style.display = 'block';
			chapterSetCount = 0;
			chapterSetIndex = 0;
			chapterSetIndexStr = "";
			hideTipsBox(FADE_TIME_5);
			return;
		}
		hideTipsBox(0);
		setting.changeChapter(chapterSetIndex - 1);
		$("metaDataInfoChapter").innerText = metaDataArray[1] + fillMetaChapterInfo();
		chapterSetCount = 0;
		chapterSetIndex = 0;
		chapterSetIndexStr = "";
		showMetaInfoBox(FADE_TIME_4);
		chapterInfoContainer = setting.getCurrentChapter();
		var str = chapterInfoContainer.chapterName;
		showTmpInfoBox(FADE_TIME_4, str);
		}, time);
}

function setPlayListMaxLength()
{
	var length = currentPlayList.length;
	MAX_LENGTH_ONE_PAGE = (length > PLAYLIST_MAX_LENGTH) ? PLAYLIST_MAX_LENGTH : length;
}

function setOptionMenuFocus(currentIndex, lastIndex)
{
	for(var i = 0; i < optionMenuImg.length; i++)
	{
		optionMenuImg[i].src = "images/Icon-R-Focus.png";
	}
	if(optionInfoArray[OPTION_FOOTBALL_MODE])//football mode is on
	{
		currentOptionFirstListArray[OPTION_PIC_PRESET].getElementsByClassName('optionFirstUlImg')[0].src = "images/Icon-R-Disable.png";
		currentOptionFirstListArray[OPTION_SOUND_PRESET].getElementsByClassName('optionFirstUlImg')[0].src = "images/Icon-R-Disable.png";
	}
	setOptionFocusScroll(currentIndex, lastIndex);
	return;

	switch(currentIndex)
	{
		case OPTION_PIC_PRESET:
		case OPTION_SOUND_PRESET:
			if(optionInfoArray[OPTION_FOOTBALL_MODE]) break;
		case OPTION_FOOTBALL_MODE:
		case OPTION_PLAY_MODE:
		case OPTION_SCREEN_MODE:
		case OPTION_3D_MODE:
		case OPTION_3D_L_R:
		case OPTION_SUBTITLE:
		case OPTION_TITLE:
		case OPTION_SOUND_TRACK:
		case OPTION_CHAPTER:
		case OPTION_INFORMATION:
			if(currentIndex < 0) break;
			currentOptionFirstListArray[currentIndex].getElementsByClassName('optionFirstUlImg')[0].src = "images/Icon-R-Focus.png";
			break;
		default:
			break;
	}
	switch(lastIndex)
	{
		case OPTION_FOOTBALL_MODE:
		case OPTION_PIC_PRESET:
		case OPTION_SOUND_PRESET:
		case OPTION_PLAY_MODE:
		case OPTION_SCREEN_MODE:
		case OPTION_3D_MODE:
		case OPTION_3D_L_R:
		case OPTION_SUBTITLE:
		case OPTION_TITLE:
		case OPTION_SOUND_TRACK:
		case OPTION_CHAPTER:
		case OPTION_INFORMATION:
			if(lastIndex < 0) break;
			currentOptionFirstListArray[lastIndex].getElementsByClassName('optionFirstUlImg')[0].src = "images/Icon-R-Disable.png";
			break;
		default:
			break;
	}
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < optionMenuImg.length; i++)
		{
			optionMenuImg[i].src = "images/Icon-R-Disable.png";
		}
	}
	setOptionFocusScroll(currentIndex, lastIndex);
}

function resetScrollHtmlInner(htmlTagList, displayStyle, overFlowStyle)
{
	htmlTagList.setAttribute("contentText", htmlTagList.innerHTML);
	htmlTagList.style.overflowX = displayStyle;
	htmlTagList.style.textOverflow = overFlowStyle;
	setTimeout(function(){htmlTagList.innerHTML = htmlTagList.getAttribute("contentText");}, 1);
}

function setHTMLScroll(tmp)
{
	if(isOverflowed(tmp))
	{
		/*modifyScrollDistance("move_second", 
				$(optionSecContentName + currentNum).clientWidth, 
				$(optionSecContentName + currentNum).scrollWidth);
			$(optionSecContentName + currentNum).className = "optionSecondListSpan_animate";*/
		resetScrollHtmlInner(tmp, "-webkit-marquee", "clip");
	}
	else
	{
		//$(optionSecContentName + currentNum).className = "optionSecondListSpan_static";
		resetScrollHtmlInner(tmp, "hidden", "ellipsis");
	}
}

function setHTMLNotScroll(tmp)
{
	resetScrollHtmlInner(tmp, "hidden", "ellipsis");
}

function setOptionFocusScroll(currentNum, lastNum)
{
	if(currentNum > -1)
	{
		setHTMLScroll(currentOptionFirstListArray[currentNum].getElementsByClassName('optionFirstListSpan_1_marquee')[0]);
		setHTMLScroll(currentOptionFirstListArray[currentNum].getElementsByClassName('optionFirstListSpan_marquee')[0]);
	}
	if(lastNum > -1)
	{
		setHTMLNotScroll(currentOptionFirstListArray[lastNum].getElementsByClassName('optionFirstListSpan_1_marquee')[0]);
		setHTMLNotScroll(currentOptionFirstListArray[lastNum].getElementsByClassName('optionFirstListSpan_marquee')[0]);
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < optionFirstListLength; i++)
		{
			setHTMLNotScroll(currentOptionFirstListArray[i].getElementsByClassName('optionFirstListSpan_1_marquee')[0]);
			setHTMLNotScroll(currentOptionFirstListArray[i].getElementsByClassName('optionFirstListSpan_marquee')[0]);
		}
	}
}

function setOptionSecFocusScroll(currentNum, lastNum)
{
	if(currentNum > -1)
	{
		setHTMLScroll($(optionSecContentName + currentNum));
	}
	if(lastNum > -1)
	{
		//$(optionSecContentName + lastNum).className = "optionSecondListSpan_static";
		resetScrollHtmlInner($(optionSecContentName + lastNum), "hidden", "ellipsis");
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < OPTION_MAX_SEC_LIST; i++)
		{
			//$(optionSecContentName + i).className = "optionSecondListSpan_static";
			resetScrollHtmlInner($(optionSecContentName + i), "hidden", "ellipsis");
		}
	}
}

function setPlayListFocus(currentNum, lastNum)
{
	if(currentNum > -1)
	{
		setHTMLScroll($(playListName + currentNum));
	}
	if(lastNum > -1)
	{
		//$(playListName + lastNum).className = "playListStyle_static";
		resetScrollHtmlInner($(playListName + lastNum), "hidden", "ellipsis");
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < 10; i++)
		{
			//$(playListName + i).className = "playListStyle_static";
			resetScrollHtmlInner($(playListName + i), "hidden", "ellipsis");
		}
	}
}

function setPlayingFileType(name)
{
	var tmp = name.toLowerCase();
	tmp = tmp.substr(-3, 3);
	switch(tmp)
	{
		case "avi":
			playingFileType = FILE_TYPE_AVI;
			break;
		case "mkv":
			playingFileType = FILE_TYPE_MKV;
			break;
		case "mp4":
			playingFileType = FILE_TYPE_MP4;
			break;
		case "mv":
			playingFileType = FILE_TYPE_MV;
			break;
		case "rmvb":
		case "rm":
			playingFileType = FILE_TYPE_RMVB;
			break;
		default:
			playingFileType = FILE_TYPE_DEFAULT;
			break;
	}
}

function setSPOption()
{
	switch(optionFocusIndex_1)
	{
		case OPTION_PIC_PRESET://picture preset
			focusTab = DISPLAY_AREA;
			//multimedia.setVideoPicturePreset(optionFocusIndex_2);
            if(0 == isXVYCCEnable)
            {
                setting.pictureMode = optionFocusIndex_2;
                $('optionPicturePreset').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText =
                    picturePresetArray[4 == optionFocusIndex_2 ? 5 : optionFocusIndex_2];
            }
            else
            {
                setting.pictureMode = pictureModeTransform(optionFocusIndex_2);
                $('optionPicturePreset').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText =
                    picturePresetArray[optionFocusIndex_2];
            }
			optionInfoArray[OPTION_PIC_PRESET] = optionFocusIndex_2;
			//hideMenu(0);
			toOption(OPTION_PIC_PRESET);
			return;
		case OPTION_SOUND_PRESET:
			setting.soundPresetMS12 = optionFocusIndex_2;
			$('optionSoundPreset').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText =
				soundPresetArray[optionFocusIndex_2];
			optionInfoArray[OPTION_SOUND_PRESET] = optionFocusIndex_2;
			break;
		case OPTION_FOOTBALL_MODE:
			setting.footballMode = optionFocusIndex_2;
			$('optionFootballMode').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText =
				modeOptionOnOff[optionFocusIndex_2];
			optionInfoArray[OPTION_FOOTBALL_MODE] = optionFocusIndex_2;
			displayOptionList();
			changeOptionListColor();
			break;
		case OPTION_PLAY_MODE:
			multimedia.videoRepeatMode = optionFocusIndex_2;
			$('optionPlayMode').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText =
				playModeArray[optionFocusIndex_2];
			optionInfoArray[OPTION_PLAY_MODE] = optionFocusIndex_2;
			break;
		case OPTION_SCREEN_MODE://screen mode
			picZoomCheckbox[optionInfoArray[OPTION_SCREEN_MODE]].style.display = 'none';
			$('optionScreenMode').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText =
				screenModeArray[optionFocusIndex_2];
			multimedia.setVideoScreenMode(OPTION_PANNEL_TYPE, optionFocusIndex_2);
			optionInfoArray[OPTION_SCREEN_MODE] = optionFocusIndex_2;
			focusTab = DISPLAY_AREA;
			hideMenu(0);
			toOption(OPTION_SCREEN_MODE);
			break;
		case OPTION_3D_MODE://3d mode
			multimedia.setVideo3DMode(optionFocusIndex_2);
			if(optionFocusIndex_2 == 0)//off
			{
				switch3DFlag = false;
				top.$("globleShow").contentWindow.hiddenGlassRemind();
			}
			else if(optionFocusIndex_2 != 0 && switch3DFlag == false)//on
			{
				switch3DFlag = true;
				if(top.glassConnectFlag == 0)
				{
					top.$("globleShow").contentWindow.showGlassRemind(0);
					if(top.bluetoothStart == 0)
					{
						setTimeout("setting.bluetoothMaster()",800);
					}
					top.bluetoothStart = 1;
				}
			}
			is2DTo3DFlag = (optionFocusIndex_2 == 1) ? true : false;
			$('option3DMode').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText =
				Mode3DArray[optionFocusIndex_2];
			optionInfoArray[OPTION_3D_MODE] = optionFocusIndex_2;
			refresh3DModeList();
			displayOptionList();
			if(optionFirstStartIndex + OPTION_FIRST_MAX_COUNT > optionFirstListLength)
			{
				optionFirstStartIndex = optionFirstListLength - OPTION_FIRST_MAX_COUNT;
			}
			$('optionFocus_1').style.top = OPTION_3D_MODE * focusOptionHeight + "px";
			$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
			break;
		case OPTION_3D_L_R:
			setting.picLRSwitch = optionFocusIndex_2;
			$('optionLRSwitch').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText = 
				Mode3DLRArray[optionFocusIndex_2];
			optionInfoArray[OPTION_3D_L_R] = optionFocusIndex_2;
			break;
		case OPTION_SUBTITLE://subtitle
			multimedia.setVideoSubtitleIndex(tmpStartIndex + optionFocusIndex_2);	
			$('metaDataInfoSubtitle').innerText = metaDataArray[3] + fillMetaSubtitleInfo(tmpStartIndex + optionFocusIndex_2);
			showMetaInfoBox(FADE_TIME_4);
			$('optionSubtitle').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText = 
				subtitleInfoList[tmpStartIndex + optionFocusIndex_2].displayName;
			optionInfoArray[optionFocusIndex_1] = tmpStartIndex + optionFocusIndex_2;
			if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
			{
				subtitleStartIndex = (optionInfoArray[OPTION_SUBTITLE] > subtitleCount - OPTION_INFO_MAX) 
					? subtitleCount - OPTION_INFO_MAX : optionInfoArray[OPTION_SUBTITLE];
			}
			else
			{
				subtitleStartIndex = 0;
			}
			break;
		case OPTION_SOUND_TRACK://sound track
			if(soundTrackCount == 1) break;
			multimedia.setVideoSoundTrackIndex(tmpStartIndex + optionFocusIndex_2);
			$("metaDataInfoSoundTrack").innerText = metaDataArray[2] + fillMetaSoundTrackInfo(tmpStartIndex + optionFocusIndex_2);
			showMetaInfoBox(FADE_TIME_4);
			$('optionSoundTrack').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText = 
				soundTrackText + " " + (tmpStartIndex + optionFocusIndex_2 + 1);
			optionInfoArray[OPTION_SOUND_TRACK] = tmpStartIndex + optionFocusIndex_2;
			if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
			{
				soundTrackStartIndex = (optionInfoArray[OPTION_SOUND_TRACK] > soundTrackCount - OPTION_INFO_MAX)
					? soundTrackCount - OPTION_INFO_MAX : optionInfoArray[OPTION_SOUND_TRACK];
			}
			else
			{
				soundTrackStartIndex = 0;
			}
			break;
		case OPTION_TITLE://title
			$('statusIcon').style.display = 'none';
			$('optionSecondList').style.display = 'none';
			optionInfoArray[0] = optionFocusIndex_2;
			focusTab = OPTION_AREA;
			resetFocusShape();
			$('optionFocus_1').style.top = optionFocusIndex_1 * focusOptionHeight + "px";
			$('optionSoundTrack').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText = 
				titleMenuTitleText + " " + (tmpStartIndex + optionFocusIndex_2 + 1);
			optionInfoArray[OPTION_TITLE] = tmpStartIndex + optionFocusIndex_2;
			if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
			{
				titleStartIndex = (optionInfoArray[OPTION_TITLE] > titleCount - OPTION_INFO_MAX)
					? titleCount - OPTION_INFO_MAX : optionInfoArray[OPTION_TITLE];
			}
			else
			{
				titleStartIndex = 0;
			}
			hideMenu(0);
			hideMetaInfoBox(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){setting.changeTitle(tmpStartIndex + optionFocusIndex_2);}, DELAY_TIME);
			return;
		case OPTION_CHAPTER://chapter
			setting.changeChapter(tmpStartIndex + optionFocusIndex_2);
			$('optionChapter').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText = 
				chapterInfo + " " + (tmpStartIndex + optionFocusIndex_2 + 1);
			optionInfoArray[OPTION_CHAPTER] = tmpStartIndex + optionFocusIndex_2;
			$("metaDataInfoChapter").innerText = metaDataArray[1] + fillMetaChapterInfo();
			showMetaInfoBox(FADE_TIME_4);
			if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
			{
				chapterStartIndex = (optionInfoArray[OPTION_CHAPTER] > chapterCount - OPTION_INFO_MAX)
					? chapterCount - OPTION_INFO_MAX : optionInfoArray[OPTION_CHAPTER];
			}
			else
			{
				chapterStartIndex = 0;
			}
			break;
		case OPTION_INFORMATION://info
			break;
	}
	$('optionSecondList').style.display = 'none';
	focusTab = OPTION_AREA;
	resetFocusShape();
	setOptionMenuFocus(optionFocusIndex_1, -1);
}

function setFastPlay(type)//type[1]ff; type[-1]fb; type[0]ori
{
	if(type < 0 && ff_fb_flag >= 0)
	{
		ff_fb_flag = -1;
	}
	else if(type > 0 && ff_fb_flag <= 0)
	{
		ff_fb_flag = 1;
	}
	else if(type != 0)
	{
		ff_fb_flag += type;
		ff_fb_flag = (ff_fb_flag > 5 || ff_fb_flag < -5) ? 0 : ff_fb_flag;
	}
	else if(type == 0 
		&& (playStatus == S_PAUSE || playStatus == S_STOP_RESUME 
		|| playStatus == S_FF_FB || playStatus == S_SF_SB))
	{
		ff_fb_flag = 0;
	}
	sf_sb_flag = 0;
	clearTimeout(menuTimer);
	menuTimer = 0;
	switch(ff_fb_flag)
	{
		case 0:
			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			playStatus = S_PLAY;
			multimedia.mediaFastForward(1);
			hideMenu(FADE_TIME_5);
			break;
		case 1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_2x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastForward(2);
			break;
		case 2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_4x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastForward(4);
			break;
		case 3:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_8x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastForward(8);
			break;
		case 4:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_16x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastForward(16);
			break;
		case 5:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_32x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastForward(32);
			break;
		case -1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_2x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastBackward(2);
			break;
		case -2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_4x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastBackward(4);
			break;
		case -3:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_8x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastBackward(8);
			break;
		case -4:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_16x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastBackward(16);
			break;
		case -5:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_32x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastBackward(32);
			break;
	}
}

function setSlowPlay(type)//type[1]sf; type[-1]sb; type[0]ori
{
	if(type < 0 && sf_sb_flag >= 0)
	{
		sf_sb_flag = -1;
	}
	else if(type > 0 && sf_sb_flag <= 0)
	{
		sf_sb_flag = 1;
	}
	else if(type != 0)
	{
		sf_sb_flag += type;
		sf_sb_flag = (sf_sb_flag > 1 || sf_sb_flag < -1) ? 0 : sf_sb_flag;
	}
	else if(type == 0 && (playStatus == S_PAUSE || playStatus == S_STOP_RESUME || playStatus == S_SF_SB))
	{
		sf_sb_flag = 0;
	}
	ff_fb_flag = 0;
	clearTimeout(menuTimer);
	menuTimer = 0;
	switch(sf_sb_flag)
	{
		case 0:
			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			playStatus = S_PLAY;
			multimedia.mediaSlowForward(1);
			hideMenu(FADE_TIME_5);
			break;
		case 1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SF_2x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowForward(2);
			break;
		case 2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SF_4x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowForward(4);
			break;
		case 3:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SF_8x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowForward(8);
			break;
		case 4:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SF_16x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowForward(16);
			break;
		case 5:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SF_32x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowForward(32);
			break;
		case -1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SB_2x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowBackward(2);
			break;
		case -2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SB_4x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowBackward(4);
			break;
		case -3:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SB_8x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowBackward(8);
			break;
		case -4:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SB_16x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowBackward(16);
			break;
		case -5:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-SB_32x.png";
			playStatus = S_SF_SB;
			multimedia.mediaSlowBackward(32);
			break;
	}
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

function getMediaFileDuration(path)
{
	fileDuration = multimedia.getMediaFileDuration(path);
	if(fileDuration < 0)
	{
		fileDuration = 0;
	}
	return doTime(fileDuration);
}

function hideMenu(time)
{
	clearTimeout(menuTimer);
	if(time != 0)
	{
		menuTimer = setTimeout("hideMenuDetail();", time);
	}
	else
	{
		hideMenuDetail();
	}
}

function hideMenuDetail()
{
	setOptionMenuFocus(-1, -1);
	clearInterval(progressBarTimer);
	hideInfoBox(0);
	seekCount = 0;
	if(focusTab == PICTURE_PRESET_AREA)
	{
		setHTMLNotScroll(picPresetListName[optionFocusIndex_2]);
        previewPictureMode(optionInfoArray[OPTION_PIC_PRESET]);
	}
	else if(focusTab == SOUND_PRESET_AREA)
	{
		changeSoundPresetColor(false);
		setting.previewSoundEffectMS12(optionInfoArray[OPTION_SOUND_PRESET]);
	}
	else if(focusTab == PIC_ZOOM_AREA)
	{
		setHTMLNotScroll(picZoomSpan[optionFocusIndex_2]);
		setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, optionInfoArray[OPTION_SCREEN_MODE]);
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		setPlayListFocus(-1, playListFocusIndex);
	}
	if((focusTab != TIPS_AREA) && (focusTab!=DIVX_AUTHOR_AREA) 
		&& (focusTab!=DIVX_REG_AREA) && (focusTab!=DIVX_RENTAL_CONFIRM) && (focusTab!=DIVX_RENTAL_EXPIRED))
	{
		focusTab = DISPLAY_AREA;
	}
	$("endBar").src = (progressBarPercent <= 14) 
		? "images/USB-Video-Progress-bar-Slider-01_.png"
		: "images/USB-Video-Progress-bar-Slider-01.png";
	$('focus').style.display = 'none'; 
	$('option').style.display = 'none';
	setMEMC(1);
	$('topTitle').style.display = 'none';
	$('playList').style.left = screenWidth + "px";
	setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);},playListAnimateTime);
	$('quickMenu').style.left = -550 + "px";
	setTimeout(function(){$('quickMenu').style.display = 'none';},playListAnimateTime);
	$('seekInfo').style.display = 'none';
	$('progressArea').style.display = 'none';
	$('optionBarArea').style.display = 'none';
	$('optionInfoDetails').style.display = 'none';
	$('optionSecondList').style.display = 'none';
	$('picturePresetBar').style.display = 'none';
	$('pictureZoomSetBar').style.display = 'none';
	top.setContext5In1Type(top.CONTEXT_MUSIC_MOVIE_PLAYER);
}

function setTipsBox(type)
{
	if(type == 1)
	{
		$('tipsInfo').style.width = TIPS_WIDTH_1 + "px";
		$('tipsInfo').style.marginLeft = (0 - TIPS_WIDTH_1 / 2) + "px";
		$('tipsInfoImg').src = "images/bg-ME-9-13.png";
	}
	else if(type == 2)
	{
		$('tipsInfo').style.width = TIPS_WIDTH_2 + "px";
		$('tipsInfo').style.marginLeft = (0 - TIPS_WIDTH_2 / 2) + "px";
		$('tipsInfoImg').src = "images/bg-ME-7-7_1.png";
	}
	setHTMLScroll($('tipsInfoContent'));
}

function hideInfoBox(time)
{
	clearTimeout(infoBoxTimer);
	if(time == 0)
	{
		$("fileInfoBox").style.display = 'none';
		return;
	}
	infoBoxTimer = setTimeout(function(){
		setTipsBox(1);
		$("fileInfoBox").style.display = 'none';
		}, time);
}

function showMetaInfoBox(time)
{
	if(metadataTipsFlag == 1)
	{
		clearTimeout(metaInfoTimer);
		$('PGBox').style.display = lawRatingFlag ? 'block' : 'none';
		$("metaDataInfoChapter").innerText = metaDataArray[1] + fillMetaChapterInfo();
		$("metaDataInfoBox").style.display = 'block';
		var metadataTmpLi = $('metaDataInfoBox').getElementsByTagName('li');
		for(var i = 0; i < metadataTmpLi.length; i++)
		{
			setHTMLScroll(metadataTmpLi[i]);
		}
		if(time >= 0)
		{
			hideMetaInfoBox(time);
		}
	}
}

function hideMetaInfoBox(time)
{
	clearTimeout(metaInfoTimer);
	if(time == 0)
	{
		$('PGBox').style.display = 'none';
		$("metaDataInfoBox").style.display = 'none';
		return;
	}
	metaInfoTimer = setTimeout(function(){
		$('PGBox').style.display = 'none';
		$("metaDataInfoBox").style.display = 'none';
		}, time);
}

function hideTipsBox(time)
{
	clearTimeout(tipsTimer);
	if(time == 0)
	{
		$('tipsInfoContent').innerText = "";
		setTipsBox(1);
		$('tipsInfo').style.display = 'none';
		return;
	}
	tipsTimer = setTimeout(function(){
		$('tipsInfoContent').innerText = "";
		setTipsBox(1);
		$('tipsInfo').style.display = 'none';
		}, time);
}

function showTmpInfoBox(time, str)
{
	if(metadataTipsFlag != 1)
	{
		clearTimeout(tmpInfoTimer);
		$('tmpInfoContent').innerText = str;
		$('tmpInfoBox').style.display = 'block';
		if(time >= 0)
		{
			hideTmpInfoBox(time);
		}
	}
}

function hideTmpInfoBox(time)
{
	clearTimeout(tmpInfoTimer);
	if(time == 0)
	{
		$('tmpInfoBox').style.display = 'none';
		return;
	}
	tmpInfoTimer = setTimeout(function(){$('tmpInfoBox').style.display = 'none';}, time);
}

function showPlayListScrollBar(length, start)
{
	if(length > PLAYLIST_MAX_LENGTH)
	{
		$(playListScrollName).style.display = 'block';
		$(scrollBarName).style.height = parseInt(SCROLL_MAX_HEIGHT * PLAYLIST_MAX_LENGTH / length) + "px";
		$(scrollBarName).style.top = parseInt(SCROLL_MAX_HEIGHT * start / length) + "px";
	}
	else
	{
		$(playListScrollName).style.display = 'none';
		$(scrollBarName).style.height = 0 + "px";
		$(scrollBarName).style.top =  0 + "px";
	}
}

function refreshQuickCheckFlag()
{
	var tmp = quickIndex - quickMenuStartIndex;
	if(tmp >= 0 && tmp < MAX_QUICK_MENU_COUNT)
	{
		$('quickCheckBox').style.top = 20 + 80 * tmp + "px";
		$('quickCheckBox').style.display = 'block';
	}
	else
	{
		$('quickCheckBox').style.display = 'none';
	}
}

function refresh3DModeList()
{
	if(!skipFlag3dMode)//[0]:not support 3d
	{
		if(optionInfoArray[OPTION_3D_MODE] > 0)//3d function running
		{
			skipFlag3DLR = false;
			skipFlag3DFieldDepth = is2DTo3DFlag ? false : true;
			optionInfoArray[OPTION_3D_L_R] = setting.picLRSwitch;//[0]off [1]on
			optionInfoArray[OPTION_3D_FILED_DEPTH] = is2DTo3DFlag ? setting.picDepthOfFieldValue : 0;
			$('optionLRSwitch').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText 
				= Mode3DLRArray[optionInfoArray[OPTION_3D_L_R]];
			$('optionFieldDepth').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText 
				= optionInfoArray[OPTION_3D_FILED_DEPTH];
		}
		else
		{
			skipFlag3DLR = true;
			skipFlag3DFieldDepth = true;
			$('optionLRSwitch').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText = "";
			$('optionFieldDepth').getElementsByClassName('optionFirstListSpan_marquee')[0].innerText = "";
		}
	}
}

function refreshCPFlag()
{
	if(playListIndex >= playListStart 
		&& playListIndex < playListStart + MAX_LENGTH_ONE_PAGE)
	{
		$('currentPlay').style.display = 'block';
		$('currentPlay').style.top = cpTopDistance + cpFlagHeight * (playListIndex - playListStart) + "px";
	}
	else
	{
		$('currentPlay').style.display = 'none';
	}
}

function arrowPlayListDisplay(startIndex)
{
	$('arrowUpPlayList').style.display = (startIndex == 0) ? 'none' : 'block';
	$('arrowDownPlayList').style.display = (startIndex + PLAYLIST_MAX_LENGTH < currentPlayList.length) ? 'block' : 'none';
}

function arrowOptionDisplay()
{
	$('arrowUpOption').style.display = (optionFirstStartIndex == 0) ? 'none' : 'block';
	$('arrowDownOption').style.display = (optionFirstStartIndex + OPTION_FIRST_MAX_COUNT < optionFirstListLength) ? 'block' : 'none';
}

function moveUpRefreshSecList(array, string, count, offset)
{
	if(optionFocusIndex_2 == 0 && tmpStartIndex -1 >= 0)
	{
		tmpStartIndex--;
		if(array != "")
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				optionSecListSpan[i].innerText = array[i + tmpStartIndex];
			}
		}
		else
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				optionSecListSpan[i].innerText = string + " " + (i + tmpStartIndex + offset);
			}
			if(tmpStartIndex == 0&&string==subMenuTitleText)
			{
				optionSecListSpan[0].innerText = offInfo;
			}						
		}
		optionArrowDisplay(SEC_INDEX, tmpStartIndex, count);
		setOptionSecFocusScroll(optionFocusIndex_2, -1);
	}
}

function moveDownRefreshSecList(array, string, count, offset)
{
	if(optionFocusIndex_2 + 1 == OPTION_INFO_MAX
		&& tmpStartIndex + OPTION_INFO_MAX < OPTION_INFO_COUNT)
	{
		tmpStartIndex++;
		if(array != "")
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				optionSecListSpan[i].innerText = array[i + tmpStartIndex];
			}
		}
		else
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				optionSecListSpan[i].innerText = string + " " + (i + tmpStartIndex + offset);
			}
		}
		optionArrowDisplay(SEC_INDEX, tmpStartIndex, count);
		setOptionSecFocusScroll(optionFocusIndex_2, -1);
	}
}

function clickIconRefreshSecList(dirction, array, string, count, offset)
{
	if(dirction == ICON_UP)
	{
		tmpStartIndex = (tmpStartIndex - OPTION_INFO_MAX > 0)
			? tmpStartIndex - OPTION_INFO_MAX : 0;
	}
	else if(dirction = ICON_DOWN)
	{
		tmpStartIndex = (tmpStartIndex + OPTION_INFO_MAX * 2 < count)
			? tmpStartIndex + OPTION_INFO_MAX : count - OPTION_INFO_MAX;
	}
	if(array != "")
	{
		for(var i = 0; i < OPTION_INFO_MAX; i++)
		{
			optionSecListSpan[i].innerText = array[i + tmpStartIndex];
		}
	}
	else
	{
		for(var i = 0; i < OPTION_INFO_MAX; i++)
		{
			optionSecListSpan[i].innerText = string + " " + (i + tmpStartIndex + offset);
		}
	}
	optionArrowDisplay(SEC_INDEX, tmpStartIndex, count);
	setOptionSecFocusScroll(optionFocusIndex_2, -1);
}

function refreshPlayList()
{
	for(var i = 0; i < MAX_LENGTH_ONE_PAGE; i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			clickPlayListLi[i].style.display = 'none';
			continue;
		}
		$(playListName + i).style.display = 'block';
		$(playListName + i).innerText = currentPlayList[playListStart + i].name;
	}
	arrowPlayListDisplay(playListStart);
}

/*
function refreshPlayList()
{
	var start = playListStart;
	var length = currentPlayList.length;
	var listSpan = $('playList').getElementsByTagName('span');
	var listImg = $('playList').getElementsByTagName('img');
	for(var i = 0; i < 6; i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			listSpan[i].style.display = 'none';
			listImg[i].style.display = 'none';
			continue;
		}
		listSpan[i].style.display = 'block';
		listImg[i].style.display = 'block';
		listSpan[i].innerText = currentPlayList[start + i].name;
		listImg[i].src = "images/test_shot.jpg";
	}
}
*/

function refreshProgressBar()
{
	if(fileDuration > 0)
	{
		//do nothing
	}
	else
	{
		//$('duration').innerText = getMediaFileDuration(currentFileInfo.path);
		$('duration').innerText = getMediaFileDuration(top.g_currentMedia.path);
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
			
			progressBarPercent = parseInt(elapsed * 100 / fileDuration, 10);
			if(focusTab != PROGRESS_AREA)
			{
				$("endBar").src = (progressBarPercent <= 14)
					? "images/USB-Video-Progress-bar-Slider-01_.png"
					: "images/USB-Video-Progress-bar-Slider-01.png";
				$("endBar").style.left = parseInt(elapsed * BAR_LENGTH / fileDuration, 10) - 15 + "px";
			}
			$("startBar").style.width = parseInt(elapsed * BAR_LENGTH / fileDuration, 10) + "px";
			$('progressBarUse').style.display = 'block';
		}
		else
		{
			elapsed = 0;
		}
		$("elspased").innerText = doTime(elapsed);
	}
	else
	{
		fileDuration = 0;
		$('progressBarUse').style.display = 'none';
	}
	
}

function refreshSeekingTime(tmp)
{
	if((tmp == 1 && seekPoint == fileDuration)
		|| (tmp == -1 && seekPoint == 0))
	{
		return;
	}
		
	seekCount += tmp;
	seekPoint = seekStartTime + (SEEK_TIME * seekCount);
	if(seekPoint < 0)
	{
		seekCount = 0
		seekPoint = 0;
		seekStartTime = 0;
	}
	if(seekPoint > fileDuration)
	{
		seekCount = 0;
		seekPoint = fileDuration;
		seekStartTime = fileDuration;
	}
	var progressBarPercent = parseInt(seekPoint * 100 / fileDuration, 10);
	
	var tmpSeekTime = doTime(seekPoint);
	$('screenShotTime').innerText = doTime(seekPoint);
	$('seekInfo').style.left = 60 + progressBarPercent * BAR_LENGTH / 100 + "px";
	$("endBar").style.left = progressBarPercent * BAR_LENGTH / 100 - 15 + "px";
}

function setOptionFocusPosition(type)//[-1]up [1]down
{
	setOptionMenuFocus(-1, optionFocusIndex_1);
	if(type == 1)//down
	{
		if(optionFirstListLength <= OPTION_FIRST_MAX_COUNT)
		{
			optionFirstStartIndex = 0;
			optionFocusIndex_1 = (optionFocusIndex_1 + 1 < OPTION_FIRST_MAX_COUNT)
				? optionFocusIndex_1 + 1 : 0;
		}
		else
		{
			if(optionFocusIndex_1 + 1 < optionFirstStartIndex + OPTION_FIRST_MAX_COUNT)
			{
				optionFocusIndex_1++;
			}
			else if(optionFirstStartIndex < optionFirstListLength - OPTION_FIRST_MAX_COUNT)
			{
				optionFirstStartIndex++;
				optionFocusIndex_1++;
			}
			else
			{
				optionFirstStartIndex = 0;
				optionFocusIndex_1 = 0;
			}
		}
	}
	else if(type == -1)//up
	{
		if(optionFirstListLength <= OPTION_FIRST_MAX_COUNT)
		{
			optionFirstStartIndex = 0;
			optionFocusIndex_1 = optionFocusIndex_1 - 1 >= 0
				? optionFocusIndex_1 - 1 : optionFirstListLength - 1;
		}
		else
		{
			if(optionFocusIndex_1 > optionFirstStartIndex)
			{
				optionFocusIndex_1--;
			}
			else if(optionFirstStartIndex > 0)
			{
				optionFirstStartIndex--;
				optionFocusIndex_1--;
			}
			else
			{
				optionFirstStartIndex = optionFirstListLength - OPTION_FIRST_MAX_COUNT;
				optionFocusIndex_1 = optionFirstListLength - 1;
			}
		}
	}
	setOptionMenuFocus(optionFocusIndex_1, -1);
}

function setOptionBarPosition(type)//[1]down [-1]up
{
	var tmpIndex = getBarIndex(optionFocusIndex_1);
	var tmpLength = skipFlag3DFieldDepth ? optionBarNameArray.length - 1 : optionBarNameArray.length;
	setOptionBarFocus(-1, tmpIndex);
	if(type == 1)//down
	{
		tmpIndex = (tmpIndex + 1 < tmpLength) ? tmpIndex + 1 : tmpIndex;
	}
	else//up
	{
		tmpIndex = (tmpIndex - 1 > 0) ? tmpIndex - 1 : 0;
	}
	displayOptionBarArrows(tmpIndex);
	setOptionBarFocus(tmpIndex, -1);
	optionFocusIndex_1 = getBarType(tmpIndex);
	optionFocusIndex_2 = optionInfoArray[optionFocusIndex_1];
	$('optionBarBlock').style.top = - optionBarHeight * tmpIndex + "px";
}

function setOptionBarValue(type)//[1]right [-1]left
{
	//setting.picDepthOfFieldValue = optionFocusIndex_2;
	var tmpMax = (optionFocusIndex_1 == OPTION_3D_FILED_DEPTH) ? MODE_3D_FIELD_DEPTH_VALUE : SHORT_BAR_MAX_VALUE;
	if(type == 1)//right
	{
		optionFocusIndex_2 = (optionFocusIndex_2 + 1 > tmpMax) ? tmpMax : optionFocusIndex_2 + 1;
	}
	else//left
	{
		optionFocusIndex_2 = (optionFocusIndex_2 - 1 < 0) ? 0 : optionFocusIndex_2 - 1;
	}
	setBarValue(tmpMax);
}

function setBarValue(tmpValue)
{
	optionInfoArray[optionFocusIndex_1] = optionFocusIndex_2;
	switch(optionFocusIndex_1)
	{
		case OPTION_BACK_LIGHT:
			setting.backLight = optionFocusIndex_2;
			break;
		case OPTION_BRIGHTNESS:
			setting.brightness = optionFocusIndex_2;
			break;
		case OPTION_CONTRAST:
			setting.contrast = optionFocusIndex_2;
			break;
		case OPTION_SATURATION:
			setting.saturation = optionFocusIndex_2;
			break;
		case OPTION_TINT:
			setting.hue = optionFocusIndex_2;
			break;
		case OPTION_SHARPNESS:
			setting.sharpness = optionFocusIndex_2;
			break;
		case OPTION_3D_FILED_DEPTH:
			setting.picDepthOfFieldValue = optionFocusIndex_2;
			break;
		default:
			break;
	}
	refreshBarArea(optionBarNameArray[getBarIndex(optionFocusIndex_1)].getElementsByTagName('img'), 
		optionFocusIndex_2, tmpValue, OPTION_BAR_LENGTH);
	optionBarNameArray[getBarIndex(optionFocusIndex_1)].getElementsByClassName('optionBarValue')[0].innerText = optionFocusIndex_2;
}

function setOptionBarFocus(currentNum, lastNum)
{
	if(currentNum > -1)
	{
		optionBarNameArray[currentNum].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(1)";
		optionBarNameArray[currentNum].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(1)";
		optionBarNameArray[currentNum].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(1)";
		optionBarNameArray[currentNum].getElementsByClassName('optionBarValue')[0].style.display = 'block';
		optionBarNameArray[currentNum].getElementsByClassName('optionBarStyle_2')[0].style.display = 'block';
	}
	if(lastNum > -1)
	{
		optionBarNameArray[lastNum].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[lastNum].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[lastNum].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[lastNum].getElementsByClassName('optionBarValue')[0].style.display = 'none';
		optionBarNameArray[lastNum].getElementsByClassName('optionBarStyle_2')[0].style.display = 'none';
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < optionBarNameArray.length; i++)
		{
			optionBarNameArray[i].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(0.85)";
			optionBarNameArray[i].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(0.85)";
			optionBarNameArray[i].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(0.85)";
			optionBarNameArray[i].getElementsByClassName('optionBarValue')[0].style.display = 'none';
			optionBarNameArray[i].getElementsByClassName('optionBarStyle_2')[0].style.display = 'none';
		}
	}
}

function doTime(time)
{
	var hour = parseInt(time / 3600, 10);
	var minute =  parseInt((time - hour * 3600) / 60, 10);
	var second = time % 60;
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	if(second < 10)
	{
		second = "0" + second;
	}
	return (hour + ":" + minute + ":" + second);
}

function mediaPlay(path)
{
	//current play success
	//$("loading").style.display = 'none';
	//$("unavailable").style.display = 'none';
	return multimedia.mediaPlay(path, 0);
}

function playPre()
{
	multimedia.playPreMediaFile(1);
}


function playNext()
{
	multimedia.playNextMediaFile(1);
}

//add for divx
function initAuthorization()
{
	$("authorizationTitle").innerText = authorizationTitleWords[1];
	$("authorizationContent1").innerHTML = authorizaitonWords[0];
	$("authorRegistOk").innerText = okCancelWords[0];
	$("authorRegistOk").style.left = "325px";
	$("authorRegistFocus").style.left = "323px";
	$("authorRegistForm").style.display = 'block';
	$("authorRegistFocus").style.display = 'block';
	$("authorRegistOk").style.display = 'block';
}

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

function initRentalConfirmation()
{
	$("rentalRegistTitle").innerText = rentalTitleWords[1];
	var str = rentalConfirmWords.replace(/XXXX/,rentalNum);
	str = str.replace(/YYYY/,rentalCount);
	$("rentalRegistContent1").innerText = str;
	$("rentalRegistOne").innerText = okCancelWords[0];
	$("rentalRegistZero").innerText = okCancelWords[1];
	$("rentalRegistZero").style.left = "200px";
	form_position_h = 1;
	$("rentalRegistFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	$("rentalRegistZero").style.display = 'block';
	$("rentalRegistForm").style.display = 'block';
	$("rentalRegistFocus").style.display = 'block';
	$("rentalRegistOne").style.display = 'block';
}

function initRentalExpired()
{
	$("rentalRegistTitle").innerText = rentalTitleWords[2];
	var str = rentalExpiredWords.replace(/XXXX/,rentalNum);
	str = str.replace(/YYYY/,rentalCount);
	$("rentalRegistContent1").innerText = str;
	$("rentalRegistOne").innerText = okCancelWords[0];
	$("rentalRegistOne").style.left = "325px";
	$("rentalRegistFocus").style.left = "323px";
	$("rentalRegistZero").style.display = 'none';
	$("rentalRegistForm").style.display = 'block';
	$("rentalRegistFocus").style.display = 'block';
	$("rentalRegistOne").style.display = 'block';
}

function divxPlay()
{
	//testLog("---------- PLAYING MSG ----------");
	$('statusIcon').style.display = 'none';
	/*if(playStatus == S_PAUSE)
	{
		playStatus = S_PLAY;
		return;
	}*/
	//hideMenu(0);
	currentFileInfo = multimedia.getCurrentPlayingMediaInfo();
	top.g_currentMedia = currentFileInfo;
	top.g_availableStatus = mediaPlay(currentFileInfo.path);
	//testLog("play msg test end");
}
//end divx

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2 && !exitFlag && operatableFlag) toBack();//right key
		else if(evt.button == 0 && focusTab == DISPLAY_AREA && operatableFlag) toOK();//right key
	}

	$('noButton').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickNoButtonFunction();
			evt.stopPropagation();
		}
	}

	$('yesButton').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickYesButtonFunction();
			evt.stopPropagation();
		}
	}

	$('okButton').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickOkButtonFunction();
			evt.stopPropagation();
		}
	}
	
	$('progressArea').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickProgressAreaFunction();
			evt.stopPropagation();
		}
	}

	$('progressBG').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickProgressSeekFunction(evt.clientX);
			evt.stopPropagation();
		}
	}

	$('optionBarUpArea').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			toUp();
			evt.stopPropagation();
		}
	}

	$('optionBarDownArea').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			toDown();
			evt.stopPropagation();
		}
	}

	$('picZoomLeftArrow').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickPicZoomArrowFunction(-1);//left
			hideMenu(FADE_TIME_15);
			evt.stopPropagation();
		}
	}

	$('picZoomRightArrow').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickPicZoomArrowFunction(1);//right
			hideMenu(FADE_TIME_15);
			evt.stopPropagation();
		}
	}

	$('arrowUpOption').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickOptionArrowFunction(-1);
			evt.stopPropagation();
		}
	}

	$('arrowDownOption').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickOptionArrowFunction(1);
			evt.stopPropagation();
		}
	}

	for(var i = 0; i < clickOptionBarList.length; i++)
	{
		clickOptionBarList[i].setAttribute(clickIndexAttri, i);
		clickOptionBarList[i].onmousedown = function(evt)
		{
			if(evt.button == 0)//left key
			{
				clickOptionBarListFunction(parseInt(this.getAttribute(clickIndexAttri)), evt.clientX);
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < clickPicPresetDiv.length; i++)
	{
		clickPicPresetDiv[i].setAttribute(clickIndexAttri, i);
		clickPicPresetDiv[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickPicturePresetFunction(parseInt(this.getAttribute(clickIndexAttri)));
				hideMenu(FADE_TIME_15);
				evt.stopPropagation();
			}
		}
	}
	//
	for(var i = 0; i < picZoomDiv.length; i++)
	{
		picZoomDiv[i].setAttribute(clickIndexAttri, i);
		picZoomDiv[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickPicZoomFunction(parseInt(this.getAttribute(clickIndexAttri)));
				hideMenu(FADE_TIME_15);
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < clickPlayListLi.length; i++)
	{
		clickPlayListLi[i].setAttribute(clickIndexAttri, i);
		clickPlayListLi[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickPlayListFunction(parseInt(this.getAttribute(clickIndexAttri)));
				hideMenu(FADE_TIME_15);
				evt.stopPropagation();
			}
		}
	}

	$('arrowUpPlayList').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickPlayListUpArrow();
			hideMenu(FADE_TIME_15);
			evt.stopPropagation();
		}
	}

	$('arrowDownPlayList').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickPlayListDownArrow();
			hideMenu(FADE_TIME_15);
			evt.stopPropagation();
		}
	}

	for(var i = 0; i < optionMenuList_1.length; i++)//option level 1st
	{
		optionMenuList_1[i].setAttribute(clickIndexAttri, i);
		optionMenuList_1[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickFirstOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				hideMenu(FADE_TIME_15);
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < optionMenuList_2.length; i++)//option level 2nd
	{
		optionMenuList_2[i].setAttribute(clickIndexAttri, i);
		optionMenuList_2[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickSecondOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				hideMenu(FADE_TIME_15);
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < quickMenuListDiv.length; i++)//option level 2nd
	{
		quickMenuListDiv[i].setAttribute(clickIndexAttri, i);
		quickMenuListDiv[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				evt.stopPropagation();
				hideMenu(FADE_TIME_15);
				clickQuickMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
			}
		}
	}

	$('optionUpArrow_1').onmousedown = function(evt){
		if(evt.button == 0)//up icon
		{
			evt.stopPropagation();
			hideMenu(FADE_TIME_15);
			clickSecondOptionUpIconFunction();
		}
	}

	$('optionDownArrow_1').onmousedown = function(evt){
		if(evt.button == 0)//down icon
		{
			evt.stopPropagation();
			hideMenu(FADE_TIME_15);
			clickSecondOptionDownIconFunction();
		}
	}	

	$('quickUpList').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickQuickListUpArrow();
			evt.stopPropagation();
			hideMenu(FADE_TIME_15);
		}
	}

	$('quickDownList').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickQuickListDownArrow();
			evt.stopPropagation();
			hideMenu(FADE_TIME_15);
		}
	}

	$('okButton').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickTipsBoxButton();
			evt.stopPropagation();
		}
	}
}

function checkOptionListInfo()
{
	var displayIndex = 0;
	for(var i = 0; i < optionListLi.length; i++)
	{
		switch(i)
		{
			case optionIndexPicPreset:
				currentOptionFirstListArray[displayIndex] = $('optionPicturePreset');
				OPTION_PIC_PRESET = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_PIC_PRESET);
				break;
			case optionIndexBacklight:
				currentOptionFirstListArray[displayIndex] = $('optionBackLight');
				OPTION_BACK_LIGHT = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_BACK_LIGHT);
				break;
			case optionIndexBrightness:
				currentOptionFirstListArray[displayIndex] = $('optionBrightness');
				OPTION_BRIGHTNESS = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_BRIGHTNESS);
				break;
			case optionIndexContrast:
				currentOptionFirstListArray[displayIndex] = $('optionContrast');
				OPTION_CONTRAST = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_CONTRAST);
				break;
			case optionIndexSaturation:
				currentOptionFirstListArray[displayIndex] = $('optionSaturation');
				OPTION_SATURATION = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SATURATION);
				break;
			case optionIndexTint:
				currentOptionFirstListArray[displayIndex] = $('optionTint');
				OPTION_TINT = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_TINT);
				break;
			case optionIndexSharpness:
				currentOptionFirstListArray[displayIndex] = $('optionSharpness');
				OPTION_SHARPNESS = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SHARPNESS);
				break;
			case optionIndexSoundPreset:
                if("input" == setting.getProperty("app.ui.hpstatus","output") || 1 == setting.soundOutput)
                {
                    OPTION_SOUND_PRESET = -1;
                }
                else
                {
                    currentOptionFirstListArray[displayIndex] = $('optionSoundPreset');
                    OPTION_SOUND_PRESET = displayIndex++;
                }
                optionListLi[i].setAttribute(displayAttri, OPTION_SOUND_PRESET);
                break;
            case optionIndexFootballMode://add for football mode
            	currentOptionFirstListArray[displayIndex] = $('optionFootballMode');
            	OPTION_FOOTBALL_MODE = displayIndex++;
            	optionListLi[i].setAttribute(displayAttri, OPTION_FOOTBALL_MODE);
            	break;
			case optionIndexPlayMode:
				currentOptionFirstListArray[displayIndex] = $('optionPlayMode');
				OPTION_PLAY_MODE = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_PLAY_MODE);
				break;
			case optionIndexScreenMode:
				currentOptionFirstListArray[displayIndex] = $('optionScreenMode');
				OPTION_SCREEN_MODE = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SCREEN_MODE);
				break;
			case optionIndex3DMode:
				if(skipFlag3dMode)
				{
					OPTION_3D_MODE = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('option3DMode');
					OPTION_3D_MODE = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_3D_MODE);
				break;
			case optionIndexLRSwitch:
				if(switch3DFlag == false)
				{
					skipFlag3DLR = 1;
				}
				if(skipFlag3DLR)
				{
					OPTION_3D_L_R = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('optionLRSwitch');
					OPTION_3D_L_R = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_3D_L_R);
				break;
			case optionIndexFieldDepth:
				if(switch3DFlag == false)
				{
					skipFlag3DFieldDepth = 1;
				}
				if(skipFlag3DFieldDepth)
				{
					OPTION_3D_FILED_DEPTH = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('optionFieldDepth');
					OPTION_3D_FILED_DEPTH = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_3D_FILED_DEPTH);
				break;
			case optionIndexSubtitle:
				if(skipFlagSubtitle)
				{
					OPTION_SUBTITLE = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('optionSubtitle');
					OPTION_SUBTITLE = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_SUBTITLE);
				break;
			case optionIndexSoundTrack:
				if(skipFlagSoundtrack)
				{
					OPTION_SOUND_TRACK = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('optionSoundTrack');
					OPTION_SOUND_TRACK = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_SOUND_TRACK);
				break;
			case optionIndexTitle:
				if(skipFlagTitle)
				{
					OPTION_TITLE = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('optionTitle');
					OPTION_TITLE = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_TITLE);
				break;
			case optionIndexChapter:
				if(skipFlagChapter)
				{
					OPTION_CHAPTER = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('optionChapter');
					OPTION_CHAPTER = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_CHAPTER);
				break;
			case optionIndexInfo:
				currentOptionFirstListArray[displayIndex] = $('optionInfor');
				OPTION_INFORMATION = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_INFORMATION);
				break;
			default:
				//optionListLi[i].setAttribute(displayAttri, -1);
				break;
		}
	}
	optionFirstListLength = displayIndex;
}

function switchClickIndexToFocusIndex(index)
{
	switch(index)
	{
		case optionIndexPicPreset:
			return OPTION_PIC_PRESET;
		case optionIndexBacklight:
			return OPTION_BACK_LIGHT;
		case optionIndexBrightness:
			return OPTION_BRIGHTNESS;
		case optionIndexContrast:
			return OPTION_CONTRAST;
		case optionIndexSaturation:
			return OPTION_SATURATION;
		case optionIndexTint:
			return OPTION_TINT;
		case optionIndexSharpness:
			return OPTION_SHARPNESS;
		case optionIndexSoundPreset:
			return OPTION_SOUND_PRESET;
		case optionIndexFootballMode:
			return OPTION_FOOTBALL_MODE;
		case optionIndexPlayMode:
			return OPTION_PLAY_MODE;
		case optionIndexScreenMode:
			return OPTION_SCREEN_MODE;
		case optionIndex3DMode:
			return OPTION_3D_MODE;
		case optionIndexLRSwitch:
			return OPTION_3D_L_R;
		case optionIndexFieldDepth:
			return OPTION_3D_FILED_DEPTH;
		case optionIndexSubtitle:
			return OPTION_SUBTITLE;
		case optionIndexSoundTrack:
			return OPTION_SOUND_TRACK;
		case optionIndexTitle:
			return OPTION_TITLE;
		case optionIndexChapter:
			return OPTION_CHAPTER;
		case optionIndexInfo:
			return OPTION_INFORMATION;
		default:
			return -1;
	}
}

function clickOkButtonFunction()
{
	toOK();
	return;
}

function clickNoButtonFunction()
{
	multimedia.setVideoPlayingBookmark(0);
	displayTipsBox(0);
	focusTab = DISPLAY_AREA;
	return;
}

function clickYesButtonFunction()
{
	multimedia.setVideoPlayingBookmark(1);
	displayTipsBox(0);
	focusTab = DISPLAY_AREA;
	return;
}

function clickPicturePresetFunction(index)
{
	if(index == optionFocusIndex_2)
	{
		toOK();
	}
	else
	{
		setHTMLNotScroll(picPresetListName[optionFocusIndex_2]);
		optionFocusIndex_2 = index;
        previewPictureMode(optionFocusIndex_2);
		setHTMLScroll(picPresetListName[optionFocusIndex_2]);
		$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionFocusIndex_2 + "px";
	}
	return;
}

function clickPicZoomFunction(index)
{
	if(index == optionFocusIndex_2)
	{
		toOK();
	}
	else
	{
		setHTMLNotScroll(picZoomSpan[optionFocusIndex_2]);
		optionFocusIndex_2 = index;
		setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, index);
		setHTMLScroll(picZoomSpan[index]);
		$('pictureZoomFocus').style.left = FOCUS_DISTANCE * optionFocusIndex_2 + "px";
	}
	return;
}

function clickPlayListFunction(index)
{
	if(focusTab != PLAY_LIST_AREA)
		return;
	setPlayListFocus(-1, playListFocusIndex);
	playListFocusIndex = index;
	setPlayListFocus(playListFocusIndex, -1);
	$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";
	setTimeout(function(){toOK();}, DELAY_TIME);
}

function clickPlayListUpArrow()
{
	if((playListStart - PLAYLIST_MAX_LENGTH) >= 0)
	{
		playListStart -= PLAYLIST_MAX_LENGTH;
	}
	else
	{
		playListStart = 0;
	}
	refreshPlayList();
	refreshCPFlag();
	showPlayListScrollBar(currentPlayList.length, playListStart);
}

function clickPlayListDownArrow()
{
	if(playListStart + PLAYLIST_MAX_LENGTH * 2 < currentPlayList.length)
	{
		playListStart += PLAYLIST_MAX_LENGTH;
	}
	else
	{
		playListStart = currentPlayList.length - PLAYLIST_MAX_LENGTH;
	}
	refreshPlayList();
	refreshCPFlag();
	showPlayListScrollBar(currentPlayList.length, playListStart);
}

function clickProgressAreaFunction()
{
	if(seekableFlag)
	{
		focusTab = PROGRESS_AREA;
		$('seekInfo').style.display = 'block';
		$('topTitle').style.display = 'block';
		$('progressArea').style.display = 'block';
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = 'none';setMEMC(1);},playListAnimateTime);
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
		refreshProgressBar();
		seekStartTime = elapsed;
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
		refreshSeekingTime(0);
	}
	else
	{
		clearTimeout(tipsTimer);
		hideMenu(0);
		displayTipsBox(0);
		$('tipsInfoContent').innerText = cantOperateText;
		setTipsBox(2);
		$('tipsInfo').style.display = 'block';
		tipsTimer = setTimeout(function(){$('tipsInfo').style.display = 'none';}, FADE_TIME_5);
	}
	hideMenu(FADE_TIME_15);
}

function clickProgressSeekFunction(x)
{
	focusTab = PROGRESS_AREA;
	var clickDistance = x - PROGRESS_START_LEFT_OFFSET;
	var tmpSeekTime = parseInt(clickDistance / BAR_LENGTH * fileDuration, 10);
	$("endBar").style.left = clickDistance - 15 + "px";
	$("startBar").style.width = clickDistance + "px";
	$('screenShotTime').innerText = doTime(tmpSeekTime);
	$('seekInfo').style.left = 60 + clickDistance + "px";
	clearTimeout(seekSettingTimer);
	seekSettingTimer = setTimeout(function(){
			multimedia.setSeekPoint(tmpSeekTime * 1000);
			hideMenu(0);
			showMetaInfoBox(FADE_TIME_4);}, 200);
}

function clickFirstOptionMenuFunction(index)
{
	if(focusTab == OPTION_DETAIL_AREA)
	{
		toBack();
	}
	setOptionMenuFocus(-1, optionFocusIndex_1);
	optionFocusIndex_1 = switchClickIndexToFocusIndex(index);
	setOptionMenuFocus(optionFocusIndex_1, -1);
	$('optionFocus_1').style.top = optionFocusIndex_1 * focusOptionHeight + "px";
	setTimeout(function(){
		toRight();
		}, DELAY_TIME);
}

function clickSecondOptionMenuFunction(index)
{
	optionFocusIndex_2 = index;
	setSPOption();
}

function clickSecondOptionDownIconFunction()
{
	switch(optionFocusIndex_1)
	{
		case OPTION_SCREEN_MODE:
			clickIconRefreshSecList(ICON_DOWN, screenModeArray, "", screenModeArray.length, 0);
			break;
		case OPTION_3D_MODE:
			clickIconRefreshSecList(ICON_DOWN, Mode3DArray, "", Mode3DArray.length - 1, 0);
			break;
		case OPTION_SUBTITLE://subtitle
			clickIconRefreshSecList(ICON_DOWN, "", subMenuTitleText, subtitleCount, 0);
			break;
		case OPTION_SOUND_TRACK://sound track
			clickIconRefreshSecList(ICON_DOWN, "", soundTrackText, soundTrackCount, 1);
			break;
		case OPTION_TITLE:
			clickIconRefreshSecList(ICON_DOWN, "", titleMenuTitleText, titleCount, 1);
			break;
		case OPTION_CHAPTER:
			clickIconRefreshSecList(ICON_DOWN, "", chapterInfo, chapterCount, 1);
			break;
		default:
			break;
	}
}

function clickSecondOptionUpIconFunction()
{
	switch(optionFocusIndex_1)
	{
		case OPTION_SCREEN_MODE:
			clickIconRefreshSecList(ICON_UP, screenModeArray, "", screenModeArray.length, 0);
			break;
		case OPTION_3D_MODE:
			clickIconRefreshSecList(ICON_UP, Mode3DArray, "", Mode3DArray.length - 1, 0);
			break;
		case OPTION_SUBTITLE://subtitle
			clickIconRefreshSecList(ICON_UP, "", subMenuTitleText, subtitleCount, 0);
			break;
		case OPTION_SOUND_TRACK://sound track
			clickIconRefreshSecList(ICON_UP, "", soundTrackText, soundTrackCount, 1);
			break;
		case OPTION_TITLE:
			clickIconRefreshSecList(ICON_UP, "", titleMenuTitleText, titleCount, 1);
			break;
		case OPTION_CHAPTER:
			clickIconRefreshSecList(ICON_UP, "", chapterInfo, chapterCount, 1);
			break;
		default:
			break;
	}
}

function clickQuickMenuFunction(index)
{
	if(focusTab != QUICK_MENU_AREA)
		return;
	quickMenuIndex = index;
	switch(quickMenuType)
	{
		case Q_MENU_LANG:
		case Q_MENU_SUBTITLE:
		case Q_MENU_TITLE:
			toOK();
			break;
		default:
			break;
	}
}

function clickQuickListUpArrow()
{
	if(focusTab != QUICK_MENU_AREA)
		return;
	if(quickMenuStartIndex - MAX_QUICK_MENU_COUNT >= 0)//can turn next page
	{
		quickMenuStartIndex -= MAX_QUICK_MENU_COUNT;
	}
	else
	{
		quickMenuStartIndex = 0;
	}
	for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
	{
		quickMenuListDiv[i].style.display = 'block';
		quickMenuListSpan[i].innerText = quickInfoText + " " + (i + quickMenuStartIndex + quickOffSet);
	}
	refreshQuickCheckFlag();
}

function clickQuickListDownArrow()
{
	if(focusTab != QUICK_MENU_AREA)
		return;
	if(quickMenuStartIndex + MAX_QUICK_MENU_COUNT < quickCount)//can turn next page
	{
		quickMenuStartIndex += MAX_QUICK_MENU_COUNT;
	}
	else
	{
		quickMenuStartIndex = quickCount - MAX_QUICK_MENU_COUNT;
	}
	for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
	{
		quickMenuListDiv[i].style.display = 'block';
		quickMenuListSpan[i].innerText = quickInfoText + " " + (i + quickMenuStartIndex + quickOffSet);
	}
	refreshQuickCheckFlag();
}

function clickTipsBoxButton()
{
	if(focusTab != TIPS_AREA) 
		return;
	toOK();
}

function bookingPreOperate()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	switch3DFlag = false;
	top.$("globleShow").contentWindow.hiddenGlassRemind();
	multimedia.mediaStop(0);
	multimedia.deviceExitUninit();
	multimedia.toRestoreSource(0, 0);
	return;
}

function clickPicZoomArrowFunction(type)//[1]right [-1]left
{
	if(type == 1)//right
	{
		tmpStartIndex = (tmpStartIndex + PIC_ZOOM_LIST_LENGTH * 2 < screenModeArray.length)
			? tmpStartIndex + PIC_ZOOM_LIST_LENGTH : screenModeArray.length - PIC_ZOOM_LIST_LENGTH;
		if(optionFocusIndex_2 < tmpStartIndex)
		{
			optionFocusIndex_2 = tmpStartIndex;
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, optionFocusIndex_2);
		}
	}
	else//left
	{
		tmpStartIndex = (tmpStartIndex - PIC_ZOOM_LIST_LENGTH > 0)
			? tmpStartIndex - PIC_ZOOM_LIST_LENGTH : 0;
		if(optionFocusIndex_2 > tmpStartIndex + PIC_ZOOM_LIST_LENGTH - 1)
		{
			optionFocusIndex_2 = tmpStartIndex + PIC_ZOOM_LIST_LENGTH - 1;
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, optionFocusIndex_2);
		}
	}

	$('picZoomLeftArrow').style.display = (tmpStartIndex == 0) ? 'none' : 'block';
	$('picZoomRightArrow').style.display = (tmpStartIndex + PIC_ZOOM_LIST_LENGTH < screenModeArray.length) ? 'block' : 'none';

	$('pictureZoomFocus').style.left = FOCUS_DISTANCE * optionFocusIndex_2 + "px";
	$('pictureZoomSelectBar').style.left = - tmpStartIndex * FOCUS_DISTANCE + "px";
}

function clickOptionArrowFunction(type)//[1]down [-1]up
{
	if(type == 1)//todown
	{
		optionFirstStartIndex = (optionFirstStartIndex + OPTION_FIRST_MAX_COUNT * 2 < optionFirstListLength)
			? optionFirstStartIndex + OPTION_FIRST_MAX_COUNT : optionFirstListLength - OPTION_FIRST_MAX_COUNT;
		if(optionFocusIndex_1 < optionFirstStartIndex)
		{
			optionFocusIndex_1 = optionFirstStartIndex;
		}
	}
	else//toup
	{
		optionFirstStartIndex = (optionFirstStartIndex - OPTION_FIRST_MAX_COUNT >= 0)
			? optionFirstStartIndex - OPTION_FIRST_MAX_COUNT : 0;
		if(optionFocusIndex_1 >= optionFirstStartIndex + OPTION_FIRST_MAX_COUNT)
		{
			optionFocusIndex_1 = optionFirstStartIndex + OPTION_FIRST_MAX_COUNT - 1;
		}
	}
	arrowOptionDisplay();
	$('optionFocus_1').style.top = optionFocusIndex_1 * focusOptionHeight + "px";
	$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
}

function clickOptionBarListFunction(index, x)
{
	var tmpLength = (index == 6) ? MODE_3D_FIELD_DEPTH_VALUE : SHORT_BAR_MAX_VALUE;
	var clickDistance = x - OPTION_BAR_START_LEFT_OFFSET;

	var tmpSetting = parseInt(clickDistance / OPTION_BAR_LENGTH * tmpLength, 10);
	optionFocusIndex_2 = tmpSetting;
	optionFocusIndex_1 = getBarType(index);
	setBarValue(tmpLength);
	hideMenu(FADE_TIME_5);
}

function setMEMC(type)//0 close  1 open
{	
	if(type == 0)
	{
    		if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
		{
			setting.setMEMC(0);
		}
	}
	else if(type == 1)
	{
    		if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
		{
			setting.setMEMC(1);
		}
	}
	else
	{
		testLog("setMEMC type error");
	}
}

function pictureModeTransform(preMode)
{
    var aftMode = 0;
    if(4 == preMode)
    {
        aftMode = preMode + 1;
    }
    else if(5 == preMode)
    {
        aftMode = preMode - 1;
    }
    else
    {
        aftMode = preMode;
    }
    return aftMode;
}

function previewPictureMode(position)
{
    if(0 != setTimeoutPictureModeId)
    {
        clearTimeout(setTimeoutPictureModeId);
    }
    setTimeoutPictureModePosition = position;
    if(0 == isXVYCCEnable)
    {
        setTimeoutPictureModeId = setTimeout("setting.previewPictureMode(setTimeoutPictureModePosition);",1000);
    }
    else
    {
        setTimeoutPictureModeId = setTimeout("setting.previewPictureMode(pictureModeTransform(setTimeoutPictureModePosition));",1000);
    }
}
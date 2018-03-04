/********
var E_MEDIA_PICTURE_PLAY							= 0x80b7;
var E_MEDIA_PICTURE_UP_EDGE                         = 0x80F8;   //33016
var E_MEDIA_PICTURE_DOWN_EDGE                       = 0x80F9;   //33017
var E_MEDIA_PICTURE_LEFT_EDGE                       = 0x80FA;   //33018
var E_MEDIA_PICTURE_RIGHT_EDGE                      = 0x80FB;   //33019

*********/


var playListStart = 0;
var playListIndex = 0;
var optionIndexStart = 0; //option菜单中，用于表示option中显示的第一个菜单在optionList中的位置
var optionIndex = 0;
var optionListIndex = 0;

var playStatus = -1;//playing/pause/error
var bgmPlayStatus = -1;
var fileDuration = 0;//the current time of playing media file
var currentFileInfo = "";
var currentPlayingTime = 0;
var video_audio_error_flag = 0;
var currentPlayList = "";
var musicBGPlay = 1; //[0] not bg play [1] bg playing
var MAX_LENGTH_ONE_PAGE = 0;
var menuImgTag = 0;
var focusOptionHeight = 80;
var menuBar;
var optionMenuImg;
var inforListSpan = 0;
var informationSpan = 0;
var inforSpan = 0;
var zoomFlag = 0;//表示应该缩放的倍数。1 缩放为原始的 2倍(或者1/2倍);2 缩放为原始的3倍(或者1/3被);4表示缩放原始的5被(或者1/5);
var zoomNum = 0; //表示点击方法和缩小的次数，点击放大+1  点击缩小-1
//var repeatMode = 0;
var picPlayingTimeOut = false;

var OPTION_picture_preset = 0;
var OPTION_play_mode = 0;
var OPTION_duration = 0;
var OPTION_effect = 0;

var OPTION_COUNT 		= 12;
var OPTION_INFO_COUNT	= 0;
var MENU_COUNT 			= 6;//5 or 6
var MENU_PLAY 			= 0;
var MENU_R_ROTATE 		= 1;
var MENU_L_ROTATE 		= 2;
var MENU_ZOOM_IN		= 3;
var MENU_ZOOM_OUT		= 4;
var MENU_BGM			= 5;

var MOVE_RIGHT		= 4;
var MOVE_LEFT		= 3;
var MOVE_DOWN		= 2;
var MOVE_UP			= 1;

var OPTION_PIC_PRESET 		= 0;
var OPTION_PLAY_MODE 		= 1;
var OPTION_DURATION			= 2;
var OPTION_EFFECT			= 3;
var OPTION_INFO		 		= 4;

var FADE_TIME = 5000;

var S_PLAY 		= 1;
var S_PAUSE 	= 2;
var S_END 		= 3;
var S_PRE 		= 4;
var S_NEXT 		= 5;
var S_ERROR 	= -1;

var focusTab = 0;//
var focusTabIndex = 0;
var menuFocusIndex = 0;
var bgmFocusIndex = 1;

var DISPLAY_AREA 			= 0;
var OPTION_AREA 			= 1;
var OPTION_DETAIL_AREA 		= 2;
var PLAY_LIST_AREA 			= 3;
var MENU_AREA 				= 4;
var BGM_AREA 				= 5;
var ZOOM_AREA 				= 6;
var PRESET_AREA				= 7;
var INFO_AREA               = 8;  //add yums
var TIPS_AREA				= 9;
var OPTION_BAR_AREA         = 10;
var LIST_AREA               = 11;//背景音乐中文件索引菜单

var optionInfoArray = new Array(OPTION_COUNT);//[0]picture preset, [1]play mode, [2]duration mode, [3]effect
var optionBarNameArray = new Array(6);
var optionListNameArray = [top.optionVideoListArray_1[0],
						   top.picOptions[1], top.picOptions[2], top.picOptions[3], 
						   top.picOptions[4], top.picOptions[5], top.picOptions[6],  
						   top.optionVideoListArray_1[1], top.optionVideoListArray_1[2],
						   top.optionVideoListArray_1[3], top.optionVideoListArray_1[4], top.optionVideoListArray_1[5], 
						   top.optionVideoListArray_1[6], top.optionVideoListArray_1[7], top.optionVideoListArray_1[8], 
						   top.optionVideoListArray_1[9], top.optionVideoListArray_1[10], top.optionVideoListArray_1[11]];

var PIC_PRESET_INDEX = 0;
var PIC_BACKLIGHT_INDEX = 1;
var PIC_BRIGHTNESS_INDEX = 2;
var PIC_CONTRAST_INDEX = 3;
var PIC_SATURATION_INDEX = 4;
var PIC_TINT_INDEX = 5;
var PIC_SHARPNESS_INDEX = 6;
var PIC_PLAYMODE_INDEX = 7;
var PIC_DURATION_INDEX = 8;
var PIC_EFFECT_INDEX = 9;
var PIC_INFO_INDEX = 10;

var SHORT_BAR_MAX_VALUE = 100;
var SHORT_BAR_LENGTH = 100;
var OPTION_BAR_LENGTH = 900;
var optionBarHeight = 60;
var optionFocusIndex_1 = 0;
var optionFocusIndex_2 = 0;
var optionFocusIndex_3 = 0;

var optionListArray = ["picturePresetList", "playModeList", "durationList", "effectList", "information"];
//var picturePresetArray = ["Standard", "Dynamic", "Studio", "Movie", "Personal"];
//var playModeArray = ["Normal", "Shuffle","Repeat"];
//var durationArray = ["Short(5s)", "Medium(10s)", "Long(15s)"];
//var effectArray = ["None", "Dissolve", "Wipe right", "Wipe left", "Wipe up", "Wipe down", "Box in", "Box out", "Random"];

/**********************************************************
**picturePlay.js
**
var consoleTipArray = ["Previous","Next","Console","PlayList"];
var BGMusicNameInfo = "";
var BGMusicArtistInfo = "";

var optionInfoArray = ["Picture preset","Play mode","Duration","Effect","Info"];
var optionInfoArray = ["Picture preset","Backligth","Brightness","Contrast","Saturation","Tint","Sharpness","Play mode","Duration","Effect","Info"];
var picturePresetArray = ["Standard", "Dynamic", "Studio", "Movie", "Personal"];
var playModeArray = ["Normal", "Repeat", "Shuffle"];
var durationArray = ["Short(5s)", "Medium(10s)", "Long(15s)"];
var effectArray = ["None", "Dissolve", "Wipe right", "Wipe left", "Wipe up", "Wipe down", "Box in", "Box out", "Random"];
var infoArray = ["Name:","Size:","Date:","Location:"];

var picturePresetBarTitleInfo = "Picture preset";
var picturePresetBarArray = ["Standard","Dynamic","Studio","Movie","Personal"];

var playListArray = ["","","","","",""];
var bottomTipsArray = ["","","","",""]

var upTipsInfo = "Move Picture"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Previous","Next","Playlist","Settings"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Press RIGHT again to play next picture","Press LEFT again to play previous picture","Press DOWN again to show playlist"]; //add yums 2014-10-10
***********************************************************/


var consoleTipArray = top.consoleTipArray;

var BGMusicNameInfo = top.BGMusicNameInfo;
var BGMusicArtistInfo = top.BGMusicArtistInfo;

var optionInfoArray = ["Picture preset","Backligth","Brightness","Contrast","Saturation","Tint","Sharpness","Play modesdfeadfead","Durationadfefadfe","Effect","Info"];

var optionInfoArrayText = [top.optionInfoArray[0],
						   top.picOptions[1], top.picOptions[2], top.picOptions[3], 
						   top.picOptions[4], top.picOptions[5], top.picOptions[6],  
						   top.optionInfoArray[1], top.optionInfoArray[2],
						   top.optionInfoArray[3], top.optionInfoArray[4]
						   ];

//add for football mode
var picturePresetArray = [top.picPreset[0], top.picPreset[1], top.resetStadium,
						  top.picPreset[3], top.picPreset[4], top.picPreset[5]];
var playModeArray = top.playModeArray;
var durationArray = top.durationArray;
var effectArray = top.effectArray;


var infoArray = top.infoArray;
var picturePresetBarTitleInfo = top.picturePresetBarTitleInfo;

var upTipsInfo = top.upTipsInfo;//Move Picture  add yums 2014-10-10
var consoleTipsArray = top.consoleTipsArray; //var consoleTipsArray = ["Console","Previous","Next","Playlist","Settings"];  //add yums 2014-10-10
	
var pictureMoveTipsArray = top.pictureMoveTipsArray; //var pictureMoveTipsArray = ["Press RIGHT again to play next picture","Press LEFT again to play previous picture","Press DOWN again to show playlist"]; //add yums 2014-10-10

var eb_info = top.eb_info;  //getinfo from chencheng's page;
var eb_tips = top.eb_tips;
var eb_yes = top.eb_yes;
var eb_no = top.eb_no;
var ok_button = top.ok_button;
var netConnectFailText = top.netConnRemind[3];
var emptyTipsInfo = top.emptyTipsInfo;
//var picturePresetBarArray = top.picturePresetBarArray;

//var playListArray = top.playListArray;
//var bottomTipsArray = top.bottomTipsArray; //add yums


var FOCUS_DISTANCE = 0;
var FOCUS_LEFT_DISTANCE = 0;
var FOCUS_TOP_DISTANCE = 0;
var PIC_CHECK_BOX_LEFT_DISTANCE = 330;

//var progressBarTimer = 0;
var menuTimer = 0;
var zoomTimer = 0;
var iconFileEmptyTipsTimer = 0;

var multimedia = top.g_media;
var setting			= top.g_setting;

window.onload = init;
window.onunload = unInit;

document.onkeydown = keyProc;
document.onnotify = notifyProcess;


var currentListPosition;  //add yums:当前播放图片的位置
var pictureThumb = new Array(); //add yums
var clickFlageOnPlayList = 0; //add yums
var dmrFlag= false;  //add yums:
var dmrExitTimer = 0;
var showLeftArrowFlage = 0;
var showRightArrowFlage = 0;
var initSetTimeOut = 0;
var pptState = 0;//幻灯片播放模式。 0 turn off ； 1 turn on
var pptStateBeforeToOption = 0;
var isStop = 0;
var effectFocus = 0; //add yums effect use
var effectStart = 0;
var pictureFileInfo;

//add yums:鸟瞰图
var pPicX = 0;  //放大后图片的坐标
var pPicY = 0;
var pPicW = 400;
var pPicH = 200;

var pViewedX = 0; //原始图片的坐标
var pViewedY = 0;
var pViewedW = 200;
var pViewedH = 100;

var tPicX = 0;  //鸟瞰图全图坐标
var tPicY = 0;
var tPicW = 0;
var tPicH = 0;

var tViewedX = 0; //鸟瞰图表示可见部分的坐标
var tViewedY = 0;
var tViewedW = 0;
var tViewedH = 0;

var rawX = 0;
var rawY = 0;
var rawW = 0;
var rawH = 0;
						
var viewX = 0;
var viewY = 0;
var viewW = 0;
var viewH = 0;

var thumbNailX = 0;
var thumbNailY = 0;
var thumbNailW = 0;
var thumbNailH = 0;



//mouse use
var clickMenuImg = "";
var clickOptionMenu1 = "";
var clickOptionMenu2 = "";
var clickPicturePresetSpan = "";
var clickPlayListLi = "";
var clickPlayListLeftArrow = ""
var clickPlayListRightArrow = ""
var clickLR_TipsArrow = "";
var bodyMouseDown = 1;
var clickIndexAttri = "indexAttri";
var bottomAreaDiv = "";
var clickOptionBarBlockDiv = "";
var clickGoBackBoxDiv = ""; //背景音乐文件索引中返回箭头
var clickFileColumnUp0Div = ""; //背景音乐文件索引的上箭头
var clickFileColumnDown0Div = "";//背景音乐文件索引的下箭头
var clickFileColumnUl0Li = "";//背景音乐文件索引文件列表
var clickFileColumn0Div = "";//整个文件索引菜单
var clickIconListEmptyTips = "";//文件索引时文件夹为空时弹出的提示框
var clickBGMMusicImg = "";//背景音乐播放菜单上的播控按钮

var bodyMouseFlag = true;//用于背景音乐文件索引时，单击右键时是一级级返回前一个文件夹。

var pictureRegion;
var rawRegion;
var viewRegion;

//consoleTips show num
var firstEnterFlag = true;

//picture move use
var rightMost = false;  //add yums 2014-10-10
var leftMost  = false;
var downMost  = false;
var upMost    = false;
var pictureMoveTipsHasShowFlag = false;


//margue滚动使用
var optionFirstMenuLi = 0;
var picturePresetBarSpan = 0;

var currentDeviceType = -1;
var currentMediaType = 3;//top.g_currentMediaType;//[0]all file [1]picture [2]video [3]music

//图片播放的error消息.
var errorFlag;
var ERROR_NONE = 0;
var ERROR_CANT_OPEN = 1;
var ERROR_PIC_NOT_AVAILABLE = 2;
var ERROR_FILE_NOT_EXIST = 3;
var ERROR_VIDEO_ERROR = 4;
var ERROR_VIDEO_CANT_RECONGNIZE = 5;
var ERROR_VIDEO_NOT_SUPPORT = 6;
var ERROR_OTHER = 7;
var ERROR_NET_DISCONNECTED = 11;
var ERROR_AUDIO = 12; //背景音乐播放使用变量



var tipsBoxMiddleDistance = 313;

//背景音乐所使用的变量
//var currentMediaType = 3;
var currentList = "";//文件索引中，记录搜索到的文件列表
var fileListDepth = 0;
var listStart = 0;  //背景音乐文件索引中关于定位使用的变量
var listIndex = 0;//背景音乐文件索引中关于定位使用的变量
var previousMediaType;
var listLength = 0;//背景音乐文件索引中文件列表的长度
var VC_F = 7;
var MUSIC_TYPE = 3;//背景音乐文件索引中所使用到的索引类型
var ALL_TYPE   = 0;
var fName = "fileColumnUl0";
var pageVCount = 0;
var g_listIndex = "";//用来存储当前文件所在的目录各个层对应的index和start，如/0-1/0-1
var g_path      ="";//用来存储当前文件所在目录
var g_mediaFolderPath = "";//用来存储当前文件所在挂载的目录，包括挂载符 如/usb/sda1/com/...
var topDistance = 363 - 80;//背景音乐文件索引中焦点在第一个位置时的top值
var SCROLL_MAX_HEIGHT = 540;

//背景音乐播放使用的变量
var currentMusicPlayingList = "";//背景音乐播放时获取的music列表
var musicMenuBarList = "";//背景音乐的菜单条
var musicPlayStatus = -1;
var musicMenuFocusIndex = 2;
var musicMenuBarLevel = 1;//表示背景音乐播放菜单上焦点所在的层,0:焦点在进度条上;1：焦点在播放按钮上
var progressBarTimer = 0;
var currentMusicFileInfo = "";//当前播放音乐
var elapsed = 0;
var BAR_LENGTH = 800;
var REFRESH_TIME = 1000;
var musicPlayFlag = 0;
var repeatMode = 0;//背景音乐播放循环模式

var S_PLAY = 1;//背景音乐播放的状态
var S_PAUSE = 2;
var S_END = 3;
var S_PRE = 4;
var S_NEXT = 5;
var S_FF_FB = 6;
var S_ERROR = -1;

//add for football mode
var footballModeFlag = false;
var picPresetListName 	= "";
var picPresetCheckbox 	= "";
var setTimeoutPictureModeId = 0;
var setTimeoutPictureModePosition= 0;
var picPresetFocus = ["images/Focus2.png", "images/Focus2_.png"];
var consoleTimer=0;
var isXVYCCEnable = setting.getProperty("ro.sita.model.TCL_PANEL_SETTING.PANEL_XVYCC_ENABLE", "0");

function $(id)
{
    return document.getElementById(id);
}

function init()
{
	console.log("YM init() top.g_deviceInfo.type:" + top.g_deviceInfo.type);
	console.log("YM init() currentMediaType:" + currentMediaType);
	footballModeFlag = setting.footballMode;
	currentDeviceType = top.g_deviceInfo.type;
	top.g_temp = "media";
	top.g_isMediaCenter = top.NDM_Pic_Play;
	//面板按键处理场景设置
	top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
	//top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
	top.showBackground(0);
	initTextInfo();
	addMouseListener();  //add yums
	if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
	{
		var bottomTipsImg = $("bottomTips").getElementsByTagName("img");
		bottomTipsImg[4].src ="images/icon-Option_au.png";
	}

	if(currentDeviceType != 0)//dlna 使用单例模式 只能有一个DMP
	{
		MENU_COUNT = 5;
		menuBar = $('menuList_1');
	}
	else
	{
		if(musicBGPlay)
		{
			MENU_COUNT = 6;
			menuBar = $('menuList_2');
		}
		else
		{
			MENU_COUNT = 5;
			menuBar = $('menuList_1');
		}
	}
	menuImgTag = menuBar.getElementsByTagName('img');
	menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
	
	var str = window.location.search;  //add yums: dmr
	if(str != null && str != "") //get "?" after url  //add yums: dmr
	{
		if(str == "?dmr")//与re_dmr有区别，re_dmr是在dmr模式下再执行dmr推送，所以不需要切信源
		{
			multimedia.changeSourceToMedia();
			multimedia.setEnterDeviceType(2);
		}
		
		dmrFlag = true;
		top.g_isMediaCenter = top.NDM_DMR_Pic;
		mediaPlay("0");
		return;
	}
	
	setTimeout(function(){
		multimedia.stopThumbnailTask();
		mediaPlay(top.g_currentMedia.path);
		picPlayingTimeOut = false;
	},50);

    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(0);
    }
	
	top.g_MediaVideoPlayCount++;
}

function unInit()
{
	if(dmrFlag)
	{
		top.g_temp = "";
	}
	
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
}

function initTextInfo()
{
	playListIndex =	0;  // add yums
	menuFocusIndex = 0;
	focusTab = DISPLAY_AREA;
	playStatus = S_PLAY;
	inforListSpan = $('listInfo').getElementsByTagName('span');
	inforSpan = $("info").getElementsByTagName("span");
	informationSpan = $('information').getElementsByTagName('span');
	optionFirstMenuLi = $("optionInfo").getElementsByTagName("li");
	optionMenuImg = $("optionInfoUl").getElementsByClassName('optionFirstUlImg');
	musicMenuBarList = $("BGMArea").getElementsByClassName("musicImgInfo");
	fileColumnUl0Li = $("fileColumnUl0").getElementsByTagName("li");
	
	if(musicBGPlay)
		clickMenuImg = $('menuList_2').getElementsByTagName('img');
	else
		clickMenuImg = $('menuList_1').getElementsByTagName('img');
	
	var consoleTips = $("consoleTip").getElementsByTagName("div");  //初始化consoleTips中的文本       
    for(var i = 0;i<consoleTips.length - 1;i++)                   
    {                                                                             
        consoleTips[i+1].innerHTML = consoleTipArray[i];             
    }
	
	var optionInfoLi = $("optionInfo").getElementsByTagName("li");
	for(var i =0 ;i<optionInfoLi.length;i++)
	{
		optionInfoLi[i].getElementsByTagName("span")[0].innerText = optionInfoArrayText[i];
	}
	
	informationSpan = $("information").getElementsByTagName("span");
	for(var i =0 ;i<informationSpan.length;i++)
	{
		informationSpan[i].innerText = infoArray[i];
	}
	
	/*
	picturePresetBarSpan = $("picturePresetBar").getElementsByTagName("span");
	for(var i=0;i<picturePresetBarSpan.length;i++)
	{
		if(i == 0)
			picturePresetBarSpan[i].innerText = picturePresetBarTitleInfo;
		else
			picturePresetBarSpan[i].innerText = picturePresetArray[i - 1];
	}*/
	$('picturePresetTitle').innerText = picturePresetBarTitleInfo;
	picPresetCheckbox = $("picturePresetSelectBar").getElementsByClassName("picPresetCheckbox");
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
	var bottomTipsLi = $("bottomTips").getElementsByTagName("li");
	for(var i=0;i<bottomTipsLi.length;i++)
	{
		//console.log("YM bottomTipsLi:" + i);
		bottomTipsLi[i].innerText = consoleTipsArray[i];
	}
	
	var upTipsDiv = $("upTips").getElementsByTagName("div");
	upTipsDiv[0].innerHTML = upTipsInfo;
	
	clickOptionMenu1 = $('optionInfo').getElementsByTagName('li');
	clickOptionMenu2 = $('listInfo').getElementsByTagName('span');
	clickPicturePresetSpan = $('picturePresetBar').getElementsByTagName('span'); //picturepreset
	clickPlayListLi = $('playList').getElementsByTagName("img");
	clickPlayListLeftArrow = $('playListLeftArrow');
	clickLR_TipsArrow = $("LR_Tips").getElementsByTagName("img");
	bottomAreaDiv = $("bottomAreaDiv");
	clickOptionBarBlockDiv = $("optionBarBlock").getElementsByClassName("optionBarStyle_2");
	clickGoBackBoxDiv = $("gobackBox");
	clickFileColumnUp0Div = $("fileColumnUp0");
	clickFileColumnDown0Div = $("fileColumnDown0");
	clickFileColumnUl0Li = $("fileColumnUl0").getElementsByTagName("li");
	clickFileColumn0Div = $("fileColumn0");
	clickIconListEmptyTips = $("iconListEmptyTips");
	clickBGMMusicImg = $("BGMArea").getElementsByClassName("musicImgInfo");
	
	$('eb_tips').innerText = eb_tips;
	$('okButton').innerText = ok_button;
	$('iconListEmptyTipsInfo').innerText = emptyTipsInfo;
	
	optionBarNameArray[0] = $('backLightBar');
	optionBarNameArray[1] = $('brightnessBar');
	optionBarNameArray[2] = $('contrastBar');
	optionBarNameArray[3] = $('saturationBar');
	optionBarNameArray[4] = $('tintBar');
	optionBarNameArray[5] = $('sharpnessBar');
	//optionBarNameArray[6] = $('switchLR3DBar');

	optionBarNameArray[0].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[1];
	optionBarNameArray[1].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[2];
	optionBarNameArray[2].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[3];
	optionBarNameArray[3].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[4];
	optionBarNameArray[4].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[5];
	optionBarNameArray[5].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[6];
	//optionBarNameArray[6].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[12];
}

function keyProc(evt)
{
	console.log("YM keyProc() dmrFlag:" + dmrFlag);
	
	if($("consoleTip").style.display == "block")
	{
		console.log("YM consoleTips == block")
		clearTimeout(initSetTimeOut);
		console.log("showLeftArrowFlage:" + showLeftArrowFlage);
		console.log("showRightArrowFlage:" + showRightArrowFlage);
		$('consoleTip').style.display = "none";
		//bottomAreaDiv.style.display = "block";
		return;
	}
	else
	{
		console.log("noennoen");
	}
	
	var ret = true;
	var keycode = evt.which;
    if (keycode == top.VK_PLAY_PAUSE && pptState)
    {
        keycode = top.VK_PAUSE;
    }
	console.log("YM keycode:"+keycode);
	switch (keycode)
	{
		case top.VK_PANEL_LONG_OK://add for 5in1 virtual key
		case top.VK_PANEL_OK:
		case top.VK_PANEL_UP:
		case top.VK_PANEL_DOWN:
		case top.VK_PANEL_LEFT:
		case top.VK_PANEL_RIGHT:
			top.keyDownProcess(evt);
			return;
		case top.VK_POWER://power
		case top.VK_MUTE://mute
			//if(dmrFlag)  //change yums: 2014-11-19 same with videoPlay
				//return;
			multimedia.stopThumbnailTask();
			top.keyDownProcess(evt);
			return;
		case top.VK_VOLUME_UP://volume up
			if(dmrFlag)  //add yums:dmr picture
				break;
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.setFrameFocusPage("globleShow");
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
			top.globleShow.focus();
			//top.startVolumeTimer();
			break;
		case top.VK_VOLUME_DOWN://volume down
			if(dmrFlag)  //add yums:dmr picture
				break;
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.setFrameFocusPage("globleShow");
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
			top.globleShow.focus();
			//top.startVolumeTimer();
			break;
			
		case top.VK_UP:
			if(dmrFlag)  //add yums:dmr picture
				break;
			toUp();
			break;

		case top.VK_DOWN:
			if(dmrFlag)  //add yums:dmr picture
				break;
			toDown();
			break;

		case top.VK_RIGHT:	
			if(dmrFlag)  //add yums:dmr picture
				break;
			//setTimeout(function(){
				toRight();
			//},50)
			break;

		case top.VK_LEFT:
			if(dmrFlag)  //add yums:dmr picture
				break;
			toLeft();
			break;
		
		case top.VK_OPTION: //menu
			if(dmrFlag)  //add yums:dmr picture
				break;
			toOption(-1);
			break;

		case top.VK_ENTER:
			if(dmrFlag)  //add yums:dmr picture
			{
				if(focusTab != TIPS_AREA)
					break;
			}
			toOK();
			break;

		case top.VK_BACK: //back
			toBack();
			break;
		case top.VK_TV:
			hideMenu(0);//add yums
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = "none";
			top.g_lastEnterType = -1;  //add yums 用于新接入设备盘符判断逻辑
			top.g_isMediaCenter = top.NDM_Others;
			setTimeout(function(){
				multimedia.pictureStop(1);
				multimedia.deviceExitUninit();
				//multimedia.toRestoreSource();
				multimedia.toRestoreSource(1, 0);
				top.g_previousHtmlPage = "channelPlay.html";
				top.g_remindWord = "TvHotKey";
				top.$("main").src = "intermediate.html";
				top.main.focus();
				top.$("operatePage").src = "";
			},100)
			break;
		case top.VK_MENU:
		case top.VK_HOME:
			toHomePage();
			break;
		case top.VK_EXIT:
			isStop = 0;
			hideMenu(0); //add yums：退出时立即隐藏因为菜单选项。
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			top.g_lastEnterType = -1;  //add yums 用于新接入设备盘符判断逻辑
			top.g_isMediaCenter = top.NDM_Others;
			setTimeout(function(){

				if(dmrFlag)   //add yums:dmr picture
				{
					multimedia.pictureStop(1);
					multimedia.deviceExitUninit();
					//multimedia.toRestoreSource();
					multimedia.toRestoreSource(0, 0);
					top.$("main").src = "channelPlay.html";
					return;
				
				}
				
				top.$("main").onload = function()
				{
					multimedia.pictureStop(1);
					multimedia.deviceExitUninit();
					//multimedia.toRestoreSource();
					multimedia.toRestoreSource(0, 0);
					top.$("main").onload=function(){};
				}
				multimedia.stopThumbnailTask();
				if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
				{
					top.$("main").src = "homePageIndex.html?tv&media";
				}
				else
				{
					top.$("main").src = "homePageVP.html?tv&media";
				}
				top.main.focus();
				
			},50);
			
			break;
			
		case top.VK_INFO:
			if(dmrFlag)	
				break;
			if(focusTab == DISPLAY_AREA)
			{
				if($("info").style.display == "none")
				{
					$("info").style.display = "block";
					for(var i=0;i<inforSpan.length;i++)
					{
						startElementScroll(inforSpan[i]);
					}
					
					focusTab = INFO_AREA;
					hideMenu(5000,DISPLAY_AREA);
				}
				else
					return;		
			}
			else if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
			{
				$('option').style.display = "none";
				$("info").style.display = "block";
				focusTab = INFO_AREA;
				hideMenu(5000,DISPLAY_AREA);
				return;		
			}
			else if(focusTab == PRESET_AREA)
			{
				$("picturePresetBar").style.display = "none";
				$("focus").style.display = "none";
				$("info").style.display = "block";
				focusTab = INFO_AREA;
				hideMenu(5000,DISPLAY_AREA);
				return;		
			}
			else if(focusTab == INFO_AREA && $("info").style.display == "block")
			{
				//console.log("YM fffff 2:" + focusTab);
				focusTab = DISPLAY_AREA;
				$("info").style.display = "none";
				return;
			}
			break;
		case top.VK_STOP:   //add yums 2014-10-21
		case top.VK_PAUSE:    //add yums 2014-10-21
			console.log("YM top.VK_PAUSE");
			if(dmrFlag)
				break;
			
		    if((focusTab == DISPLAY_AREA || focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA || focusTab == PRESET_AREA || INFO_AREA) && zoomFlag == 0)
			{
				if(pptState == 1)
				{
					if($("option").style.display == "block")
					{
						$("option").style.display = "none";
					}
					
					if($("picturePresetBar").style.display == "block")
						$("picturePresetBar").style.display = "none";
					if($("info").style.display == "block")
						$("info").style.display = "none";
					
					multimedia.setPicturePPTState(0);
					pptState = 0;  //multimedia.getPicturePPTState();					
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
					focusTab = MENU_AREA;
					menuBar.style.display = "block";
					$("bottomTips").style.display = "block";
					hideMenu(FADE_TIME, DISPLAY_AREA);
				}
				else
				{
					if($("option").style.display == "block")
					{
						$("option").style.display = "none";
					}
					
					if($("picturePresetBar").style.display == "block")
						$("picturePresetBar").style.display = "none";
					if($("info").style.display == "block")
						$("info").style.display = "none";
						
					focusTab = MENU_AREA;
					menuBar.style.display = "block";
					$("bottomTips").style.display = "block";
					hideMenu(FADE_TIME, DISPLAY_AREA);
				}
			}
			else if(focusTab == MENU_AREA && zoomFlag == 0)
			{
				if(pptState == 1)
				{
					multimedia.setPicturePPTState(0);
					pptState = 0;  //multimedia.getPicturePPTState();					
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
				}
				
				hideMenu(FADE_TIME, DISPLAY_AREA);
			}
			break;
		case top.VK_PLAY:
		case top.VK_PLAY_PAUSE: //play key press  add yums 2014-10-21
			console.log("YM top.VK_PLAY_PAUSE");
			if(dmrFlag)
				break;
			if((focusTab == DISPLAY_AREA || focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA || focusTab == PRESET_AREA || INFO_AREA) && zoomFlag == 0)
			{
				top.setContext5In1Type(top.CONTEXT_MENU_SELECT); //add yums 2014-11-19
				if(pptState == 0)
				{
					if($("option").style.display == "block")
					{
						$("option").style.display = "none";
					}
					
					if($("picturePresetBar").style.display == "block")
						$("picturePresetBar").style.display = "none";
					if($("info").style.display == "block")
						$("info").style.display = "none";
					
					multimedia.setPicturePPTState(1);
					pptState = 1;  //multimedia.getPicturePPTState();
					menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+-Disable.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom--Disable.png";
					menuFocusIndex = 0;
				
					focusTab = MENU_AREA;
					menuBar.style.display = "block";
					$("bottomTips").style.display = "block";
					hideMenu(FADE_TIME, DISPLAY_AREA);
				}
				else
				{
					
					if($("option").style.display == "block")
					{
						$("option").style.display = "none";
					}
					
					if($("picturePresetBar").style.display == "block")
						$("picturePresetBar").style.display = "none";
					if($("info").style.display == "block")
						$("info").style.display = "none";
						
					focusTab = MENU_AREA;
					menuBar.style.display = "block";
					$("bottomTips").style.display = "block";
					hideMenu(FADE_TIME, DISPLAY_AREA);
				}
			}
			else if(focusTab == MENU_AREA && zoomFlag == 0)
			{
				top.setContext5In1Type(top.CONTEXT_MENU_SELECT); //add yums 2014-11-19
				if(pptState == 0)
				{
					multimedia.setPicturePPTState(1);
					pptState = 1;  //multimedia.getPicturePPTState();
					menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+-Disable.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom--Disable.png";
					menuFocusIndex = 0;
				}
				
				hideMenu(FADE_TIME, DISPLAY_AREA);
			}
			break;
		case top.VK_PREV: //previous
			if(dmrFlag)
				break;
			if(focusTab == DISPLAY_AREA)
			{
				multimedia.playPreviousPicture();
				picPlayingTimeOut = false;
				
			}
			else if(focusTab == INFO_AREA)
			{
				multimedia.playPreviousPicture();
				picPlayingTimeOut = false;
			}
			else if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
			{
				multimedia.playPreviousPicture();
				picPlayingTimeOut = false;
			}
			else if(focusTab == MENU_AREA)
			{
				if(zoomFlag == 0)
				{
					multimedia.playPreviousPicture();
					picPlayingTimeOut = false;					
				}
				else
				{
					$("thumbNail").style.display = "none";
					$("upTips").style.display = "none";
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					setTimeout(function(){
						multimedia.playPreviousPicture();
						picPlayingTimeOut = false;
					},10);
					
				}
			}
			else if(focusTab == PRESET_AREA)
			{
				multimedia.playPreviousPicture();
				picPlayingTimeOut = false;
			}
			else if(focusTab == ZOOM_AREA)
			{
				$("thumbNail").style.display = "none";
				console.log("YM fffff 3:" + focusTab);
				focusTab = DISPLAY_AREA;
				setTimeout(function(){
						multimedia.playPreviousPicture();
						picPlayingTimeOut = false;
					},10);
			}
			break;
		case top.VK_NEXT: //next

			if(dmrFlag)
				break;
			if(focusTab == DISPLAY_AREA)
			{
				multimedia.playNextPicture();
				picPlayingTimeOut = false;
			}
			else if(focusTab == INFO_AREA)
			{
				multimedia.playNextPicture();
				picPlayingTimeOut = false;
			}
			else if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
			{
				multimedia.playNextPicture();
				picPlayingTimeOut = false;
			}
			else if(focusTab == MENU_AREA)
			{
				if(zoomFlag == 0)
				{
					multimedia.playNextPicture();
					picPlayingTimeOut = false;					
				}
				else
				{
					$("thumbNail").style.display = "none";
					$("upTips").style.display = "none";
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					setTimeout(function(){
						multimedia.playNextPicture();
						picPlayingTimeOut = false;
					},10);
					
				}
			}
			else if(focusTab == PRESET_AREA)
			{
				multimedia.playNextPicture();
				picPlayingTimeOut = false;
				
			}
			else if(focusTab == ZOOM_AREA)
			{
				$("thumbNail").style.display = "none";
				console.log("YM fffff 4:" + focusTab);
				focusTab = DISPLAY_AREA;
				setTimeout(function(){
						multimedia.playNextPicture();
						picPlayingTimeOut = false;
					},10);
			}
			break;
		default:
			break;
	}
			currentListPosition = multimedia.getNowPicturePosition(); 
			if(currentListPosition == 0)
			{
				showConsoleTipsArrow(0,1);
			}
			else if( currentListPosition == (currentPlayList.length - 1))
			{
				showConsoleTipsArrow(1,0);
			}
			else
			{
				showConsoleTipsArrow(1,1);
			}
	return ret;
}

function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	console.log("YM notofyProcess() dmrFlag:"+dmrFlag);
	console.log("YM notifyProcess() msg:" + msg);
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
		//case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie   //注释掉by yums  2014-10-20
		//case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		//case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_POWER_OFF_TIMER://power off timer
			top.systemEventProc(evt);
			return;
		case top.E_READY_TO_CHANGE_SCART: //add chencheng
		case top.E_READY_TO_CHANGE_CEC:   //add chencheng  svn 14533
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.pictureStop(1);
			multimedia.deviceExitUninit();
			//multimedia.toRestoreSource();
			multimedia.toRestoreSource(2, value);
			top.systemEventProc(evt);
			break;
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
			multimedia.toRestoreSource(0,0);//restore source to dtv or atv or ...
			*/
			top.g_temp = "media";
			/////////////////chenhua changed end///////////////////////////////// 
			top.systemEventProc(evt);
			return;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
			top.systemEventProc(evt);
			break;
		default:
			break;
	}
	
    switch(msg)
	{
		case top.E_MEDIA_FIND_FILE_END: //file search end
			video_audio_error_flag = 0;
			top.g_searchFlag = 1;
			break;
		case top.E_MEDIA_PLAYER_STATUS_STOP: //stop  32876
			if(musicPlayStatus != S_END)
			{
				if(progressBarTimer) 
					clearInterval(progressBarTimer);
				
			}
			musicPlayStatus = S_END;
			/*
			video_audio_error_flag = 0;
			$("unavailable").style.display = "none";
			if(playStatus != "eos")
			{	
				$('movieName').innerText = "";
				$("midBar").style.width = "0px";
				$("rightBar").style.left = "7px";
				if(progressBarTimer) clearInterval(progressBarTimer);
				$("startTime").innerText = doTime(0);
				$('endTime').innerText = doTime(0);

				fileDuration = 0;

		        //this one play end ,playing next media

		        repeatMode = multimedia.videoRepeatMode;
				switch(repeatMode)
				{
					case 0: //normal
					case 1: //random
					case 2: //repeat all
					case 3: //repeat one
						playStatus = "stop";
						$("playStatus").style.backgroundImage = "url('" + playStatusImg[0] + "')";
						$('playStatusText').style.display = "none";
						break;
					default:
						top.$("main").src = top.g_previousHtmlPage;
						break;
				}
		    }
			playStatus = "stop";
			*/
			break;
	    case top.E_MEDIA_PLAYING_NEXT_PIC:  // add yums:32807
		{
			currentListPosition = multimedia.getNowPicturePosition(); 
			if(currentListPosition == 0)
			{
				//showConsoleTipsArrow(0,1);
			}
			else if( currentListPosition == (currentPlayList.length - 1))
			{
				//showConsoleTipsArrow(1,0);
			}
			else
			{
				//showConsoleTipsArrow(1,1);
			}
			
			if(zoomFlag != 0 && zoomNum != 0)
			{	
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
				menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
				menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
				
				zoomFlag = 0;//播放下一张 恢复初始值
				zoomNum  = 0;
			}
			
			$("thumbNail").getElementsByTagName("img")[0].style.marginTop   = 0 + "px";
			$("thumbNail").getElementsByTagName("img")[0].style.marginLeft  = 0 + "px";
			break;
		}	    

	    case top.E_MEDIA_EOS: //media eos//单首背景音乐播放完。32798
	    {	
			if(dmrFlag || currentDeviceType == 1)//DLNA是单例模式，只能产生一个DMP
			{
				break;
			}
			$('endBar').src = "images/USB-Video-Progress-bar-Slider-01_.png";
			$('endBar').style.left = -15 + "px";
			$("startBar").style.width = 0 + "px";
			$("musicCover").src = "images/USB-Music-Default-icon.png";
			musicPlayStatus = S_END;
			if(progressBarTimer)
			{
				clearInterval(progressBarTimer);
			}
			multimedia.playNextMediaFile(0);
			break;
	    }
		
		case top.E_MEDIA_PICTURE_PLAY_EXIT:   //picture play exit //32808
		{
			if(dmrFlag) //add yums:dmr
			{
				console.log("YM YM top.E_MEDIA_PICTURE_PLAY_EXIT str");
				return;
			}	
		
			$("LR_Tips").style.display = "none";
			hideMenu(0);
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			top.$("main").src = "mediaList.html?media";
			//multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);  //付工商量，退出到mediaList中任务在mediaList中开启
			break;
		}
		case top.E_MEDIA_USB_INSERTED://usb insert
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_USB_REMOVE: //usb remove
		{
			hideMenu(0); //add yums
			setTimeout(function()
			{
				multimedia.pictureStop(1);
				multimedia.deviceExitUninit();
				top.g_mediaPosition = 1;
				top.$("main").src = "deviceList.html?remove";
			},30)
			break;
		}
		/*for chencheng's audio video 
		case top.E_MEDIA_VIDEO_ERROR: //error 自动停掉，不需要上面用户做停止操作
		case top.E_MEDIA_AUDIO_ERROR:
		case top.E_MEDIA_OTHER_ERROR:
			video_audio_error_flag = 0;
			if(progressBarTimer) clearInterval(progressBarTimer);
			$("unableRemindWords").innerText = unavailable[1];
			$("unavailable").style.display = "block";
			playStatus = "stop";
			$("playStatus").style.backgroundImage = "url('" + playStatusImg[6] + "')";
			doNextTimer = setTimeout(function(){$("unavailable").style.display = "none";doPlayNext();}, 5000);
			//setTimeout(function(){top.$("main").src = top.g_previousHtmlPage;}, 5000);
			break;
		case top.E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT: //video not support
			$("unableRemindWords").innerText = unavailable[2];
			$("unavailable").style.display = "block";
			setTimeout(function(){$("unavailable").style.display = "none";}, 5000);
			if(video_audio_error_flag)//audio not support
			{
				video_audio_error_flag = 0;
				$("unableRemindWords").innerText = unavailable[4];
				doNextTimer = setTimeout(function(){doPlayNext();}, 5000);
			}
			else
			{
				video_audio_error_flag = 1;
			}
			break;
		case top.E_MEDIA_CUSTOM_AUDIO_NO_SUPPORT: //audio not support
			$("unableRemindWords").innerText = unavailable[3];
			$("unavailable").style.display = "block";
			setTimeout(function(){$("unavailable").style.display = "none";}, 5000);
			if(video_audio_error_flag)//video not support
			{
				video_audio_error_flag = 0;
				$("unableRemindWords").innerText = unavailable[4];
				doNextTimer = setTimeout(function(){doPlayNext();}, 5000);
			}
			else
			{
				video_audio_error_flag = 1;
			}
			break;
		*/
		/**
		***add yums:2014-11-24  
		***图片播放出错消息处理：
		***shena沟通，图片出错消息有:MEIDA_PLAY_CANT_OPAN,PIC_NOT_AVALIBLE,FILE_NOT_EXIT
		***VIDEO_ERROR,VIDEO_CANT_RECONGNIZE,VIDEO_NOT_SUPPORT,OTHER_ERROR;
		**/
		
		case top.E_MEDIA_OTHER_ERROR:  //same with audio
			if(isStop == 1)
				break;
			errorFlag = ERROR_OTHER;
			$('eb_info').innerText = eb_info[7];//Oops! Player has stopped running.
			setErrorTips(1);
			break;
		
		case top.E_MEDIA_PLAY_ERROR_CANT_OPEN:  //无法打开文件/////////32961
			if(isStop == 1)
				break;
			errorFlag = ERROR_CANT_OPEN;
			$('eb_info').innerText = eb_info[4];//Can't open this file.
			setErrorTips(1);
			break;
		case top.E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT:  //format error,
			if(isStop == 1)
				break;
			errorFlag = ERROR_VIDEO_NOT_SUPPORT;
			$('eb_info').innerText = eb_info[6];//File format not supported.
			setErrorTips(1);
			break;
		case top.E_MEDIA_VIDEO_CANT_RECONGNIZE: //解码时，decoder判断不支持，一般是格式
			if(isStop == 1)
				break;
			errorFlag = ERROR_VIDEO_CANT_RECONGNIZE;
			$('eb_info').innerText = eb_info[6];//File format not supported.
			setErrorTips(1);
			break;
		case top.E_MEDIA_VIDEO_ERROR:  //Play error, please try again.数据存在问题，文件解码出错。对于图片没有对应的翻译，暂时不处理
			if(isStop == 1)
				break;
			errorFlag = ERROR_VIDEO_ERROR;
			$('eb_info').innerText = eb_info[5];//Play error, please try again.
			setErrorTips(1);
			break;
			
		case top.E_MEDIA_PLAY_ERROR_FILE_NOT_EXIST:  //文件路径不存在
			if(isStop == 1)
				break;
			errorFlag = ERROR_FILE_NOT_EXIST;
			$('eb_info').innerText = eb_info[8];//File path does not exist
			setErrorTips(1);
			break;
		case top.E_PIC_NOT_AVAILABLE:  //播放不成功  Play error, please try again.
			if(isStop == 1)
				break;
			errorFlag = ERROR_PIC_NOT_AVAILABLE;
			$('eb_info').innerText = eb_info[5];//Play error, please try again.
			setErrorTips(1);
			break
			
		//一下是背景音乐播放的error信息
		case top.E_MEDIA_AUDIO_ERROR:
		case top.E_MEDIA_CUSTOM_AUDIO_NO_SUPPORT:
		case top.E_MEDIA_AUDIO_CANT_RECONGNIZE:
			//setErrorTips(ERROR_DEFAULT);
			errorFlag = ERROR_AUDIO;
			$('eb_info').innerText = eb_info[2];//Audio format not supported.
			displayTipsBox(1);
			focusTab = TIPS_AREA;
			multimedia.mediaStop(0);
			musicPlayStatus = S_END;
			break;
			
		case top.E_WIRELESS_DEVICE_NO_FOUND: //32815
		case top.E_WIRELESS_CONNECT_FAILURE:  //net connect failed
			console.log("YM net disconnected")
			console.log("YM g_lastEnterType:" + top.g_lastEnterType);
			console.log("YM dmrFlag:" + dmrFlag);
			console.log("YM currentDeviceType:" + currentDeviceType);
			if(top.g_lastEnterType == 1) //dlna type
			{
				errorFlag = ERROR_NET_DISCONNECTED;
				$('eb_info').innerText = netConnectFailText;
				setErrorTips(1);
			}
			else if(dmrFlag)  //dmr
			{
				errorFlag = ERROR_NET_DISCONNECTED;
				$('eb_info').innerText = netConnectFailText;
				setErrorTips(1);
			}
			break;
		
		case top.E_MEDIA_PICTURE_PLAY:  //32951
			//break;
			
		//case top.E_MEDIA_PLAYER_STATUS_PLAYING: //playing   //32874

			/*
			multimedia.testLog("Playing PIC msg !");
			video_audio_error_flag = 0;
			currentFileInfo = multimedia.getCurrentPlayingMediaInfo();
			multimedia.testLog("Playing msg: play pic = " + currentFileInfo.name);
			var pictureFileInfo = multimedia.getMediaPictureFileInfo(currentFileInfo.path);
			fillFileInformation(pictureFileInfo);
			*/
			/*
			$("unableRemindWords").innerText = "";
			$("unavailable").style.display = "none";
			$('playStatusText').style.display = "none";
			//去除对音视频开始播放消息中的playStatus判断条件，解决了从错误视频自动播放到下一个视频时无法退出的问题
			currentFileInfo = multimedia.getCurrentPlayingMediaInfo();
			positionOnAllMedia = multimedia.getCurrentPlayingMediaPosition();
			top.g_mediaPosition = positionOnAllMedia;
			$('topTitle').innerText = currentFileInfo.name;
			$("loading").style.display = "none";
			
			hideMenu(FADE_TIME, DISPLAY_AREA);
			*/
			picPlayingTimeOut = true;
			console.log("YM firstEnterFlag:" + firstEnterFlag);
			console.log("YM dmrFlag:" + dmrFlag);
			if(firstEnterFlag && !dmrFlag)
			{
				console.log("YM before currentPlayList:" + currentPlayList);
				currentPlayList = multimedia.getCurrentPicPlayingList(0, -1);
				console.log("YM after currentPlayList:" + currentPlayList);
			}
			currentListPosition = multimedia.getNowPicturePosition();
			console.log("YM currentListPosition:" + currentListPosition);
			console.log("YM currentPlayList.length:" + currentPlayList.length);
			
			if(currentPlayList.length > 1)
			{
				if(currentListPosition == 0)
				{
					showLeftArrowFlage = 0;
					showRightArrowFlage = 1;
				}
				else if(currentListPosition == currentPlayList.length - 1)
				{
					showLeftArrowFlage = 1;
					showRightArrowFlage = 0;

				}
				else
				{
					showLeftArrowFlage = 1;
					showRightArrowFlage = 1;
				}
			}
			else
			{
				showLeftArrowFlage = 0;
				showRightArrowFlage = 0;
			}			


			if(dmrFlag)
			{
				showLeftArrowFlage = 0;
				showRightArrowFlage = 0;
			}

			if(firstEnterFlag && !dmrFlag)
			{
				firstEnterFlag = false;
				$("loadingBox").style.display ="none";
		
				optionInfoArray[1] = multimedia.pictureRepeatMode;
				
				
				setPlayListMaxLength();
				
				if(top.g_MediaVideoPlayCount<=5)
				{
					$('consoleTip').style.display = "block";
					initSetTimeOut = setTimeout(function ()
					{
						$('consoleTip').style.display = "none";
						//bottomAreaDiv.style.display = "block";
						//showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
					}, 3000);
				}
				else
				{
					//showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
				}
				
				pptState = multimedia.getPicturePPTState(); //获取播放模式 0 表示非PPT播放， 1表示PPT播放模式
				if(pptState == 1)// add yums防止上次退出时是ppt模式。
				{
					multimedia.setPicturePPTState(0);
					pptState = 0;
				}
			}
			else
			{
				//showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
			}
			$("loadingBox").style.display ="none";
			
			//currentListPosition = multimedia.getNowPicturePosition();//add yums
			var begin = new Date().getTime();
			pictureFileInfo = multimedia.getMediaPictureFileInfo(currentPlayList[currentListPosition].path);  //add yums:
			console.log("multimedia.getMediaPictureFileInfo:" + (new Date().getTime() - begin));
			console.log("YM before");
			fillFileInformation(pictureFileInfo);
			
			top.g_currentMedia = pictureFileInfo;//add yums;  返回是需要用的信息。按back键退出到mediaList界面，焦点定位在当前播放的位置。
			top.g_mediaPosition = currentListPosition; //add yums;
			
			//var img = $("thumbNail").getElementsByTagName("img");
			//console.log("YM top.g_currentMedia.path:" + top.g_currentMedia.path);
			//img[0].src = "images/USB-picture-Default.png";
						
			//loadImage(img[0],currentPlayList[multimedia.getNowPicturePosition()].path,300,169);
			break;
		case top.E_MEDIA_PLAYER_STATUS_PAUSE: //pause//32875
			musicPlayStatus = S_PAUSE;
			$("musicP&P").src = "images/USB-Music-Control-icon-PlayFocus-S.png";	
			//playStatus = "pause";
			break;
		case top.E_MEDIA_PLAYER_STATUS_FORWORD: //ff
			//playStatus = "ff";
			break;
		case top.E_MEDIA_PLAYER_STATUS_BACKWORD: //fb
			//playStatus = "fb";
			break;
		/*
		case 0x806e: //quit ff
		case 0x8070: //quit fb
			break;
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
			break;
		case top.E_DLNA_DEVICE_INSERT:
			break;
		case top.E_DLNA_CURRENT_DEVICE_REMOVE:
			multimedia.pictureStop(1);
			top.g_mediaPosition = 1;
			multimedia.stopThumbnailTask();
			top.$("main").src = "deviceList.html";
			break;
		case top.E_DMR_STOP:  //add yums 2014-10-20  //32996
			var begin = new Date().getTime();
			console.log("YM beginTime1:" + begin);
			console.log("YM top.E_DMR_STOP");
			clearTimeout(dmrExitTimer);
			dmrExitTimer = setTimeout(function(){
				multimedia.pictureStop(1);
				multimedia.deviceExitUninit();
				//multimedia.toRestoreSource();
				multimedia.toRestoreSource(0, 0);
				top.$("main").src = "channelPlay.html";
				top.main.focus();
				}, 2000);
			
			break;
		case top.E_DLNA_DMR_PUSH_MUSIC:  //add yums 2014-10-20
			multimedia.pictureStop(1);
			if(!dmrFlag)
			{
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.systemEventProc(evt);
			}
			else  //dmr推送播放下，又执行dmr推送(PC端可以这样)
			{
				top.$("main").src = "musicPlay.html?re_dmr";
			}
			break;
		case top.E_DLNA_DMR_PUSH_MOVIE:	  //add yums 2014-10-20	
			multimedia.pictureStop(1);
			if(!dmrFlag)
			{
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.systemEventProc(evt);
			}
			else  //dmr推送播放下，又执行dmr推送(PC端可以这样)
			{
				top.$("main").src = "videoPlay.html?re_dmr";
			}
			
			break;
		case top.E_DLNA_DMR_PUSH_PICTURE:
			clearTimeout(dmrExitTimer);
			multimedia.pictureStop(1);
			if(!dmrFlag)
			{
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.systemEventProc(evt);
			}
			else
			{
				mediaPlay("0");
			}
			break;
		case top.E_MEDIA_STREAM_BUFFERING: //buffering
			break;
		case top.E_MEDIA_STREAM_BUFFERING_COMPLETE: //buffering complete
			break;
		case top.E_MEDIA_STREAM_VIDEO_ONLY: //video only
			break;
		/*
		case top.E_MEDIA_VIDEO_AUDIO_LOOP_EXIT: //repeat-mode-normal: loop end
			top.$("main").src = top.g_previousHtmlPage;
			break;
		*/
		case top.E_MEDIA_DIVX_NOT_AUTH:
		{
			//doDivXPrompt(1);
			break;
		}
		case top.E_MEDIA_DIVX_NOT_RENTAL:
		{
			//doDivXPrompt(3);
			break;
		}
		case top.E_MEDIA_DIVX_NOT_EXPIRED:
		{
			//doDivXPrompt(2);
			break;
		}
		/*
		case top.E_DLNA_DMR_PUSH_PICTURE: //add yums:dmr push picture
		{
			multimedia.mediaStop(0);
			if(!dmrFlag)
			{
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.systemEventProc(evt);
			}
			break;
		}
		*/			
		case top.E_THUMBNAIL_GENERATE: //media list data ready
		{
			refreshPlayList();
			/*
			var idx = evt.modifiers;
			var listImg = $("playList").getElementsByTagName('img');
			console.log("YM currentPlayList[dix]:" + currentPlayList[idx].path);
			var picPath = multimedia.getThumbNail(currentPlayList[idx].path);
			


	
			console.log("YM currentPlayList[dix]:" + currentPlayList[idx].path);
			console.log("YM idx:" + idx);
			console.log("YM playStart:" + playListStart);
			console.log("YM picPath:" + picPath);
			if(idx >= playListStart && idx < (playListStart + 6) && (picPath != null && picPath != ""))
			{
				listImg[idx - playListStart].src = picPath;
			}
			*/
			break;
		}
		case top.E_MEDIA_PICTURE_RIGHT_EDGE:  //33109 //add yums:2014-10-30;
		{
			rightMost = true;
			$("zoomInImg").getElementsByTagName("img")[2].src = "images/USB-Icon-Arrow-zoomIn-right_Disable.png";
			break;
		}
		case top.E_MEDIA_PICTURE_LEFT_EDGE:  //33108
		{
			leftMost = true;
			$("zoomInImg").getElementsByTagName("img")[0].src = "images/USB-Icon-Arrow-zoomIn-left_Disable.png";
			break;
		}
		case top.E_MEDIA_PICTURE_DOWN_EDGE:
		{
			downMost = true;
			$("zoomInImg").getElementsByTagName("img")[3].src = "images/USB-Icon-Arrow-zoomIn-down_Disable.png";
			break;
		}
		case top.E_MEDIA_PICTURE_UP_EDGE:
		{
				upMost = true;
				$("zoomInImg").getElementsByTagName("img")[1].src = "images/USB-Icon-Arrow-zoomIn-up_Disable.png";
				break;
	    }
		case top.E_MEDIA_PICTURE_PPTMODE_TIMEOUT:
		{
			multimedia.playNextPicture();
			picPlayingTimeOut = false;
			break
		}
		case top.E_APP_PROCESS_INITIALIZATION:
			hideMenu(0,DISPLAY_AREA); //add yums：退出时立即隐藏因为菜单选项。
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			top.g_lastEnterType = -1;  //add yums 用于新接入设备盘符判断逻辑
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.pictureStop(1);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_PLAYER_STATUS_PLAYING: //背景音乐播放消息
		if(musicPlayFlag == 1)
		{
			console.log("E_MEDIA_PLAYER_STATUS_PLAYING");
			musicPlayStatus = S_PLAY;
			//musicMenuBarList[2].src = "images/USB-Music-Control-icon-PauseFocus-S.png";
			currentMusicFileInfo = multimedia.getCurrentPlayingMediaInfo();
			fillCurrentPlayingMusicInfo(multimedia.getMediaMusicFileInfo(currentMusicFileInfo.path));
			getMediaFileDuration(currentMusicFileInfo.path);
			if(progressBarTimer)
			{
				clearInterval(progressBarTimer);
			}
			progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			
		}
			break;
		case top.E_MEDIA_VIDEO_AUDIO_LOOP_EXIT: //repeat-mode-normal
			multimedia.mediaStop(0);
			$("BGMArea").style.display = "none";
			if(focusTab == BGM_AREA)
			{
				focusTab = DISPLAY_AREA;
			}
			break;
		case top.E_MEDIA_PLAYER_STATUS_RESUME_PLAYING:
			musicPlayStatus = S_PLAY;		
			$("musicP&P").src = "images/USB-Music-Control-icon-PauseFocus-S.png";
			break;
		default:
	    {
	        //top.systemEventProc(evt);
	        break;
	    }
	}
}

function toLeft()
{                                
	console.log("YM toLeft focusTab:" + focusTab);
	if(focusTab == DISPLAY_AREA)
	{
		/*
		//$("loadingBox").style.display ="block";
		setTimeout(function(){
			multimedia.playPreviousPicture();
		},0);
		*/
		console.log("YM toLeft picPlayingTimeOut:" + picPlayingTimeOut);
		if(!picPlayingTimeOut)
		{	
			return;
		}
		
		pptState = multimedia.getPicturePPTState();
		console.log("YM toRight pptState:" + pptState);
		if(pptState == 1)
		{
			multimedia.setPicturePPTState(0);
			pptState = 0;
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
		}
		
		console.log("YM optionInfoArray[1]:" + optionInfoArray[1]);
		if(zoomNum < 0)
		{
			zoomNum = 0;
			zoomFlag = 0;
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
		}
		
		/*
		if(currentDeviceType == 0)
		{
			if(optionInfoArray[1] == 0) //normal
			{
				if(picturePlayTimer)
				{
					clearTimeout(picturePlayTimer);
				}
				picturePlayTimer = 0;
				if(currentListPosition > 0)
				{
					currentListPosition--;
				}
				else
				{
					toBack();
					return;
				}
				console.log("YM leftCurrentListPosition:" + currentListPosition);
				picturePlayTimer = setTimeout("mediaPlay(currentPlayList[currentListPosition].path);picPlayingTimeOut = false;", PICTURE_PLAY_DELAY_TIME);
			}
			else if(optionInfoArray[1] == 1) //shuffle
			{
				if(picturePlayTimer)
				{
					clearTimeout(picturePlayTimer);
				}
				picturePlayTimer = 0;
				picturePlayTimer = setTimeout(function(){
					multimedia.playPreviousPicture();
					picPlayingTimeOut = false;
				}, PICTURE_PLAY_DELAY_TIME);
			}
			else if(optionInfoArray[1] == 2)  //repeat
			{
				if(picturePlayTimer)
				{
					clearTimeout(picturePlayTimer);
				}
				picturePlayTimer = 0;
				if(currentListPosition > 0)
				{
					currentListPosition--;
				}
				else
				{
					currentListPosition = currentPlayList.length - 1;
				}
				picturePlayTimer = setTimeout("mediaPlay(currentPlayList[currentListPosition].path);picPlayingTimeOut = false;", PICTURE_PLAY_DELAY_TIME);
			}
		}
		else if(currentDeviceType == 1) // deviceType == DLNA
		{
		*/
			multimedia.playPreviousPicture();
			picPlayingTimeOut = false;
		//}
		
		return;
	}
	else if(focusTab == MENU_AREA)//focus on playing
	{
		changeMenuFocus(-1);
		if(zoomFlag != 0)
		{
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					console.log("YM fffff 5:" + focusTab);
					focusTab = DISPLAY_AREA;
				}
				
			},5000)
			return;
		}
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		console.log("YM toLeft() playListIndex:"+ playListIndex);
		console.log("YM toLeft() playListStart:"+ playListStart);
		
		if(playListIndex - 1 >= 0)
		{
			playListIndex--;
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
			setPlayListFocus(playListIndex,playListIndex + 1);
		}
		else if(playListIndex == 0
			&& playListStart > 0)
		{
			playListStart--;
			//playListIndex = 5;//add yums
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px"; //add yums
			refreshPlayList();
			setPlayListFocus(playListIndex,-1);
		}
		arrowPlayListDisplay(playListStart);  //add yums
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		$('listInfo').style.display = 'none';
		$('information').style.display = 'none';
		$("optionInfoList").style.display = 'none';
		$('listInfoBottomArrow').style.display = "none";
		$('listInfoUpArrow').style.display = "none";
		
		//$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + 3 + FOCUS_DISTANCE * optionIndex + "px";
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		$('optionInfoFocus').src = "images/Focus_USB_1.png"  //option中焦点变为可用
		startElementScroll(optionFirstMenuLi[optionIndex]);
		//setTimeout(function(){
			for(var i=0;i<inforListSpan.length;i++)
			{
				stopElementScroll(inforListSpan[i]);
			}
	//	},1)		
	
		hideMenu(15000, DISPLAY_AREA);
		return;

	}
	/*
	else if(focusTab == BGM_AREA)
	{
		changeBGMFocus(-1);
	}
	*/
	else if(focusTab == ZOOM_AREA)
	{
		if(leftMost)
		{	
			return;
		}
		else
		{
			console.log("YM move left");
			leftMost = false;
			if(rightMost)
			{
				rightMost = false;
				$("zoomInImg").getElementsByTagName("img")[2].src = "images/USB-Icon-Arrow-zoomIn-right.png";
			}
			//pictureMoveTipsHasShowFlag = false;
			multimedia.pictureMove(MOVE_LEFT);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		
		/*按UI设计要求，移动到边缘时，提示箭头变为灰色，不做却换图片操作  2014-11-21
		console.log("YM leftMost:" + leftMost);
		console.log("YM pictureMoveTipsHasShowFlag:" + pictureMoveTipsHasShowFlag);
		if(leftMost && pictureMoveTipsHasShowFlag)
		{
			$("thumbNail").style.display = "none";
			//$("pictureMoveTips").style.display = "none";
			leftMost = false;
			pictureMoveTipsHasShowFlag = false;
			console.log("YM fffff 6:" + focusTab);
			focusTab = DISPLAY_AREA;
			zoomFlag = 0;
			zoomNum  = 0;
			top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
			setTimeout(function()
			{
				multimedia.playPreviousPicture();
			},50);
			return;
		}
		else if(leftMost)
		{	
			$("pictureMoveTips").getElementsByTagName("span")[0].innerHTML = pictureMoveTipsArray[1];
			$("pictureMoveTips").style.display = "block";
			pictureMoveTipsHasShowFlag = true;
			setTimeout(function(){
				$("pictureMoveTips").style.display = "none";
			},3000);
			return;
		}
		else
		{
			console.log("YM move left");
			leftMost = false;
			if(rightMost)
				rightMost = false;
			pictureMoveTipsHasShowFlag = false;
			multimedia.pictureMove(MOVE_LEFT);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		*/
	}
	else if(focusTab == PRESET_AREA)
	{
		if(footballModeFlag)//add for football mode
		{
			hideMenu(FADE_TIME, DISPLAY_AREA);
			return;
		}
		//hideMenu(15000, DISPLAY_AREA);
		//
		stopElementScroll(picPresetListName[optionListIndex]);
		optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		previewPictureMode(optionListIndex);
		startElementScroll(picPresetListName[optionListIndex]);
		$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		/*
		stopElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		//multimedia.setPicPicturePreset(optionListIndex); //add yums:移动焦点立即响应  change 2014-12-1
		setting.previewPictureMode(optionListIndex);  //add yums:2014-12-1
		$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		//$('picturePresetContent').innerText = picturePresetArray[optionListIndex];
		startElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		*/
	}
	else if(focusTab ==  TIPS_AREA)
	{
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(-1);//t
	}
	else if(focusTab == LIST_AREA)
	{
		if($('iconListEmptyTips').style.display == 'block')
		{
			showIconEmptyTips(-1);
			return;
		}
		doSearchFileSelect(-1);
		
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		changeMusicMenuBarSelect(0);
		return;
	}
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

var picturePlayTimer = 0;
var PICTURE_PLAY_DELAY_TIME = 600; //ms

function toRight()
{
	console.log("YM toRight focusTab:" +focusTab);
	if(focusTab == DISPLAY_AREA)
	{
		/*
		//$("loadingBox").style.display ="block";
		setTimeout(function(){
			multimedia.playNextPicture();
		},5);
		*/
		console.log("YM toRight picPlayingTimeOut:" + picPlayingTimeOut);
		if(!picPlayingTimeOut)//播完当前图片才能播放下一张
		{
			return;
		}
		
		pptState = multimedia.getPicturePPTState();
		console.log("YM toRight pptState:" + pptState);
		if(pptState == 1)
		{
			multimedia.setPicturePPTState(0);
			pptState = 0;
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
		}

		console.log("YM optionInfoArray[1]:" + optionInfoArray[1]);
		if(zoomNum < 0)
		{
			zoomNum = 0;
			zoomFlag = 0;
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
		}
		/*
		if(currentDeviceType == 0)
		{
			if(optionInfoArray[1] == 0) //normal
			{
				if(picturePlayTimer)
				{
					clearTimeout(picturePlayTimer);
				}
				picturePlayTimer = 0;
				if(currentListPosition < currentPlayList.length -1)
				{
					currentListPosition++;
					console.log("YM currentListPosition:" + currentListPosition);
				}
				else
				{
					toBack();
					return;
				}
				picturePlayTimer = setTimeout("mediaPlay(currentPlayList[currentListPosition].path);picPlayingTimeOut = false;", PICTURE_PLAY_DELAY_TIME);
			}
			else if(optionInfoArray[1] == 1) //shuffle
			{
				if(picturePlayTimer)
				{
					clearTimeout(picturePlayTimer);
				}
				picturePlayTimer = 0;
				picturePlayTimer = setTimeout(function(){
					multimedia.playNextPicture();
					picPlayingTimeOut = false;
				}, PICTURE_PLAY_DELAY_TIME);
			}
			else if(optionInfoArray[1] == 2)  //repeat
			{
				if(picturePlayTimer)
				{
					clearTimeout(picturePlayTimer);
				}
				picturePlayTimer = 0;
				if(currentListPosition < currentPlayList.length -1)
				{
					currentListPosition++;
				}
				else
				{
					currentListPosition = currentPlayList.length - 1 - currentListPosition;
				}
				picturePlayTimer = setTimeout("mediaPlay(currentPlayList[currentListPosition].path);picPlayingTimeOut = false;", PICTURE_PLAY_DELAY_TIME);
			}
		}
		else if(currentDeviceType == 1)  //deviceType == DLNA
		{
		*/
			multimedia.playNextPicture();
			picPlayingTimeOut = false;
		//}
		return;
	}
	else if(focusTab == MENU_AREA)//focus on playing
	{
		changeMenuFocus(1);
		if(zoomFlag != 0)
		{
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					console.log("YM fffff 7:" + focusTab);
					focusTab = DISPLAY_AREA;
				}
				
			},5000)
			return;
		}
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		console.log("YM toRight() playListIndex:" + playListIndex);
		console.log("YM toRight() MAX_LENGTH_ONE_PAGE:" + MAX_LENGTH_ONE_PAGE);
		if(playListIndex + 1 < MAX_LENGTH_ONE_PAGE && (playListIndex + 1 + playListStart) < currentPlayList.length)
		{
			playListIndex++;
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
			setPlayListFocus(playListIndex,playListIndex - 1);
		}
		/*
		else if(playListIndex == 5
			&& (playListStart + playListIndex + 1 < currentPlayList.length))
		*/
		else if(playListIndex == 5 && (playListStart + playListIndex + 1 < currentPlayList.length))
		{
			playListStart++;
			//playListIndex =0;
			refreshPlayList();
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px"; //add yums
			setPlayListFocus(playListIndex,-1);
		}
		arrowPlayListDisplay(playListStart);
		
		
	}
	else if(focusTab == OPTION_AREA)
	{
		stopElementScroll(optionFirstMenuLi[optionIndex]);//add yums 2014-10-18
		if(optionIndex == PIC_PRESET_INDEX)//picture preset
		{
            if(0 == isXVYCCEnable)
            {
                if(footballModeFlag)
                {
                    hideMenu(15000,DISPLAY_AREA);
                    return;
                }
                changePicturePresetColor();
                for(var i = 0; i < picPresetCheckbox.length; i++)
                {
                    picPresetCheckbox[i].style.display = 'none';
                }
                focusTab = PRESET_AREA;
                OPTION_INFO_COUNT = picPresetListName.length-1;
                optionListIndex = optionInfoArray[optionIndex];
                resetFocusShape();
                $('option').style.display = 'none';
                $('picturePresetBar').style.display = 'block';
                $('picturePresetBar').style.left = '175px';
                $('picturePresetBar').style.width = '1570px';
                $('picturePresetBarDiv').style.width = '1170px';
                picPresetCheckbox[optionListIndex].style.display = 'block';
                startElementScroll($('picturePresetTitle'));
                startElementScroll(picPresetListName[optionListIndex]);
            }
            else
            {
                if(footballModeFlag)
                {
                    hideMenu(15000,DISPLAY_AREA);
                    return;
                }
                changePicturePresetColor();
                for(var i = 0; i < picPresetCheckbox.length; i++)
                {
                    picPresetCheckbox[i].style.display = 'none';
                }
                focusTab = PRESET_AREA;
                OPTION_INFO_COUNT = picPresetListName.length;
                optionListIndex = optionInfoArray[optionIndex];
                resetFocusShape();
                $('option').style.display = 'none';
                $('picturePresetBar').style.display = 'block';
                picPresetCheckbox[optionListIndex].style.display = 'block';
                startElementScroll($('picturePresetTitle'));
                startElementScroll(picPresetListName[optionListIndex]);
            }
		}
		else if(optionIndex == PIC_INFO_INDEX)//info
		{
			focusTab = OPTION_DETAIL_AREA;
			$('listInfo').style.display = 'none';
			$('listInfoBottomArrow').style.display = "none";
			$('listInfoUpArrow').style.display = "none";
			
			$('information').style.display = 'block';
			$('optionInfoList').style.display = 'block';
			$('optionInfoList').style.top = 60 + optionIndex * focusOptionHeight - 30 + "px";
			$('optionInfoList').style.height = 4 * focusOptionHeight + 30 * 2 + "px";    //
			$('information').style.top = 30 + "px";  //add yums option中二级菜单与一级对齐
			$('optionInfoFocus').src = "images/Focus_USB_1_.png"  //option中焦点变为不可用
			//var info = multimedia.getMediaPictureFileInfo(currentPlayList[2].path);  //add yums:
			//fillFileInformation(info);
			
			for(var i=0;i<informationSpan.length;i++)
			{
				startElementScroll(informationSpan[i]);
			}
			
			hideMenu(15000,DISPLAY_AREA);
			return;
		}
		else
		{
			switch(optionIndex)
			{
				case PIC_BACKLIGHT_INDEX:
				case PIC_BRIGHTNESS_INDEX:
				case PIC_CONTRAST_INDEX:
				case PIC_SATURATION_INDEX:
				case PIC_TINT_INDEX:
				case PIC_SHARPNESS_INDEX:
					if(footballModeFlag)//add for football mode
					{
						hideMenu(FADE_TIME, DISPLAY_AREA);
						return;
					}
					$('option').style.display = "none";
					optionFocusIndex_2 = optionInfoArray[optionIndex];
					displayOptionBarArea(getBarIndex(optionIndex));
					focusTab = OPTION_BAR_AREA;
					break;
				default:
					focusTab = OPTION_DETAIL_AREA;
					resetFocusShape();
					$("listInfo").style.top = 30 + "px";  //ad yums:option中二级菜单与一级对齐
					$('listInfo').style.display = 'block';
					$('information').style.display = 'none';
					$("optionInfoList").style.display = 'block';
					$('listInfoBottomArrow').style.display = "none";
					$('listInfoUpArrow').style.display = "none";
				
					if(optionIndex == PIC_EFFECT_INDEX || optionIndex == PIC_INFO_INDEX)
						$('optionInfoList').style.top = 60 + PIC_PLAYMODE_INDEX * focusOptionHeight - 32 + "px";
					else
						$('optionInfoList').style.top = 60 + optionIndex * focusOptionHeight - 32 + "px";
						
					fillOptionList(optionIndex);
					optionListIndex = optionInfoArray[optionIndex];
					
					console.log("YM toright() optionListIndex:" + optionInfoArray[optionIndex]);
					if(optionIndex == PIC_EFFECT_INDEX)
					{
						$('optionInfoListFocus').style.top = 30 - 5 + effectFocus * focusOptionHeight + "px";
						if(effectStart == 0)
						{
							$('listInfoBottomArrow').style.display = "block";
							$('listInfoUpArrow').style.display = "none";
						}
						else if(effectStart == effectArray.length - 5)
						{
							$('listInfoBottomArrow').style.display = "none";
							$('listInfoUpArrow').style.display = "block";
						}
						else
						{
							$('listInfoBottomArrow').style.display = "block";
							$('listInfoUpArrow').style.display = "block";
						}
						//startElementScroll(inforListSpan[effectFocus]);
					}
					else
					{	
						$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
						//startElementScroll(inforListSpan[optionListIndex]);
					}
					switch(optionIndex)
					{
						case PIC_PRESET_INDEX:
                            if(0 == isXVYCCEnable)
                            {
                                OPTION_INFO_COUNT = picturePresetArray.length - 1;
                            }
                            else
                            {
                                OPTION_INFO_COUNT = picturePresetArray.length;
                            }
							break;
						case PIC_PLAYMODE_INDEX:
							OPTION_INFO_COUNT = playModeArray.length;
							break;
						case PIC_DURATION_INDEX:
							OPTION_INFO_COUNT = durationArray.length;
							break;
						case PIC_EFFECT_INDEX:
							OPTION_INFO_COUNT = effectArray.length;
							break;
						case PIC_INFO_INDEX:
							break;
					}
					if(OPTION_INFO_COUNT > 5)
					{
						$('optionInfoList').style.height =  5 * focusOptionHeight + 30 * 2 + "px";    //
					}
					else
					{
						$('optionInfoList').style.height =  OPTION_INFO_COUNT * focusOptionHeight + 30 * 2 + "px";    //
					}
					console.log("YM height:" + $('optionInfoList').style.height);

					//hideMenu(15000,DISPLAY_AREA);
					return;
					//startElementScroll(inforListSpan[optionListIndex]);
					break;
			}
		}
	}
	//else if(focusTab == OPTION_DETAIL_AREA)
	//{
		//setSPOption();
	//}
	/*
	else if(focusTab == BGM_AREA)
	{
		changeBGMFocus(1);
	}
	*/
	else if(focusTab == ZOOM_AREA)
	{
		if(rightMost)
		{	
			return;
		}
		else
		{
			console.log("YM move right");
			if(leftMost)
			{
				leftMost = false;
				$("zoomInImg").getElementsByTagName("img")[0].src = "images/USB-Icon-Arrow-zoomIn-left.png";
			}
			multimedia.pictureMove(MOVE_RIGHT);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}

		/*按UI设计要求，移动到边缘时，提示箭头变为灰色，不做却换图片操作  2014-11-21
		console.log("YM rightMost:" + rightMost);
		console.log("YM pictureMoveTipsHasShowFlag:" + pictureMoveTipsHasShowFlag);
		if(rightMost && pictureMoveTipsHasShowFlag)
		{
			$("thumbNail").style.display = "none";
			//$("pictureMoveTips").style.display = "none";
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			rightMost = false;
			pictureMoveTipsHasShowFlag = false;
			console.log("YM fffff 8:" + focusTab);
			focusTab = DISPLAY_AREA;
			zoomFlag = 0;
			zoomNum  = 0;
			top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
			setTimeout(function()
			{
				multimedia.playNextPicture();
			},50);
			return;
		}
		else if(rightMost)
		{	
			$("pictureMoveTips").getElementsByTagName("span")[0].innerHTML = pictureMoveTipsArray[0];
			$("pictureMoveTips").style.display = "block";
			pictureMoveTipsHasShowFlag = true;
			setTimeout(function(){
				$("pictureMoveTips").style.display = "none";
			},3000);
			return;
		}
		else
		{
			console.log("YM move right");
			if(leftMost)
				leftMost = false;
			multimedia.pictureMove(MOVE_RIGHT);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		*/
	}
	else if(focusTab == PRESET_AREA)
	{
		if(footballModeFlag)//add for football mode
		{
			hideMenu(FADE_TIME, DISPLAY_AREA);
			return;
		}
		stopElementScroll(picPresetListName[optionListIndex]);
		optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
        	previewPictureMode(optionListIndex);
		startElementScroll(picPresetListName[optionListIndex]);
		$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		//
		/*
		stopElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
		//multimedia.setPicPicturePreset(optionListIndex); //add yums:移动焦点实现响应
		setting.previewPictureMode(optionListIndex);  //add yums:2014-12-1
		$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		//$('picturePresetContent').innerText = picturePresetArray[optionListIndex];
		startElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		*/
	}
	else if(focusTab ==  TIPS_AREA)
	{
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(1);//t
	}
	else if(focusTab == LIST_AREA)
	{
		if($('iconListEmptyTips').style.display == 'block')
		{
			showIconEmptyTips(-1);
			return;
		}
		doSearchFileSelect(1);
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		changeMusicMenuBarSelect(1);
		return;
	}
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function toUp()
{
	console.log("YM focusTab:" +focusTab);
	if(focusTab == OPTION_AREA)
	{
		//stopElementScroll(optionFirstMenuLi[optionIndex]);
		//$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Disable.png";
		//optionIndex = parseInt((optionIndex + OPTION_COUNT - 1) % OPTION_COUNT, 10);
		setOptionFocusPosition(-1);
		$("optionInfoUl").style.top = - optionIndexStart * 80 + "px";
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		/*
		$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Disable.png";
		optionIndex = parseInt((optionIndex + OPTION_COUNT - 1) % OPTION_COUNT, 10);
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Focus.png";
		startElementScroll(optionFirstMenuLi[optionIndex]);
		*/
		hideMenu(15000, DISPLAY_AREA);
		
		return;
	}
	else if(focusTab == ZOOM_AREA)
	{
		console.log("YM move up");
		if(!upMost)
		{
			multimedia.pictureMove(MOVE_UP);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
		}
		if(downMost)
		{
			downMost = false;
			$("zoomInImg").getElementsByTagName("img")[3].src = "images/USB-Icon-Arrow-zoomIn-down.png";
		}
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		console.log("YM optionListIndex:"+optionListIndex);
		console.log("YM OPTION_INFO_COUNT:"+OPTION_INFO_COUNT);
		if(optionIndex == PIC_INFO_INDEX) //add yums:解决在info上按上键焦点乱动问题
			return;
		/*
		if(optionIndex == PIC_EFFECT_INDEX)//effect
		{
			
			
			optionListIndex = optionListIndex - 1;
			if(optionListIndex < 0)
				optionListIndex = 0;
			console.log("YM optionListIndex:" + optionListIndex);
			if(optionListIndex >= 5)
			{
				$('optionInfoListFocus').style.top = 30 - 5 + 4 * focusOptionHeight + "px";
				for(var i=0; i<5 ;i++)
				{
					inforListSpan[i].innerText = effectArray[optionListIndex + 1 - 5 + i];
				}
			}
			else
			{
				$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
			}
			return;
		}
		*/
		if(optionIndex == PIC_EFFECT_INDEX)//effect
		{
			stopElementScroll(inforListSpan[effectFocus]);
			if(effectFocus + effectStart > 0)
			{
				effectFocus--;
				if(effectFocus < 0)
				{
					effectFocus = 0;
					if(effectStart > 0)
						effectStart--;
				}
			}
			
			console.log("YM effectFocus--：" + effectFocus);
			console.log("YM effectStart--: " + effectStart);
			optionListIndex = effectFocus + effectStart;
			$('optionInfoListFocus').style.top = 30 - 5 +  effectFocus * focusOptionHeight + "px";
			if(effectStart == 0)
			{
				$('listInfoBottomArrow').style.display = "block";
				$('listInfoUpArrow').style.display = "none";
			}
			else if(effectStart == effectArray.length - 5)
			{
				$('listInfoBottomArrow').style.display = "none";
				$('listInfoUpArrow').style.display = "block";
			}
			else
			{
				$('listInfoBottomArrow').style.display = "block";
				$('listInfoUpArrow').style.display = "block";
			}
			
			for(var i = 0 ; i< 5 ; i++)
			{
				inforListSpan[i].innerText = effectArray[effectStart + i];
			}
			startElementScroll(inforListSpan[effectFocus]);
			hideMenu(15000, DISPLAY_AREA);
			return;
		}
		stopElementScroll(inforListSpan[optionListIndex]);
		optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
		startElementScroll(inforListSpan[optionListIndex]);
		hideMenu(15000, DISPLAY_AREA);
		return;
	}
	else if(focusTab == MENU_AREA)
	{
		if(zoomNum > 0)
		{
			clearTimeout(zoomTimer);
			$("upTips").style.display = "none";
			menuBar.style.display = "none";
			$('bottomTips').style.display = "none";
			$("zoomInImg").style.display = "block";
			focusTab = ZOOM_AREA;
			return;
		}
		else  if(zoomNum < 0)
		{
			return;
		}
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(-1);
	}
	else if(focusTab == LIST_AREA)
	{
		if($('iconListEmptyTips').style.display == 'block')
		{
			showIconEmptyTips(-1);
			return;
		}
		changeSearchFileFocus(-1);
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		changeMusicMenuBarSelect(2);
		return;
	}

	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function toDown()
{
	console.log("YM toDown() focusTab:" + focusTab);
	if(focusTab == DISPLAY_AREA || focusTab == MENU_AREA || focusTab == INFO_AREA)//focus on playing
	{
		if(focusTab == MENU_AREA)//add yums
			return;
		if(focusTab == DISPLAY_AREA || focusTab == INFO_AREA) //add yusm:处理playlist中获取不到缩略图
		{
			//add yums
			//currentListPosition = multimedia.getNowPicturePosition();//add yums
			if(focusTab == INFO_AREA)
				$("info").style.display = "none";
			console.log("YM todown() currentListPosition:" + currentListPosition);
			top.setContext5In1Type(top.CONTEXT_MENU_SELECT);  //add yums2014-11-15 面板按键
			if(currentPlayList.length - 6 < 0)
			{
				playListStart = 0;
				playListIndex = currentListPosition - playListStart;
			}
			else
			{
				if(currentListPosition >=currentPlayList.length - 6)
				{
					playListStart = currentPlayList.length - 6;
					playListIndex = currentListPosition - playListStart;
				}
				else
				{
					playListStart = currentListPosition;
					playListIndex = 0
				}
			}
			multimedia.pictureStop(0);    //add yums:
			isStop = 1;  //add yums
			console.log("YM pictureStop(0)");
		}
		
		focusTab = PLAY_LIST_AREA;
		menuBar.style.display = 'none';
		$('playList').style.display = 'block';
		arrowPlayListDisplay(playListStart);
		refreshPlayList();
		resetFocusShape();
		setPlayListFocus(playListIndex,-1); //add yums 2014-10-13;
		setTimeout(function(){
			multimedia.stopThumbnailTask();
			multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);
		},300)
	}
	
	else if(focusTab == PLAY_LIST_AREA)
	{
		/*
		$('playListRightArrow').style.display = "none";
		$('playListLeftArrow').style.display = "none";
		$('playList').style.display = 'none';
		$('focus').style.display = 'none';
		setTimeout(function(){
			hideMenu(0, DISPLAY_AREA);
		},50);
		
		//add yums:自动从当前位置开始播放
		*/
		return;
	}
	
	else if(focusTab == OPTION_AREA)
	{
		
		setOptionFocusPosition(1);//down
		/*
		if(optionIndex + 1 >= OPTION_COUNT)
		{
			optionIndexStart = 1;
		}
		else
		{
			optionIndexStart = 0;
			optionIndex = parseInt((optionIndex + 1) % OPTION_COUNT, 10);
		}
		*/
		$("optionInfoUl").style.top = - optionIndexStart * 80 + "px";
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		//optionIndex = parseInt((optionIndex + 1) % OPTION_COUNT, 10);
		//$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		//$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Focus.png";
		//startElementScroll(optionFirstMenuLi[optionIndex]);
		hideMenu(15000, DISPLAY_AREA);
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		if(optionIndex == PIC_INFO_INDEX)  //info add yums:解决在info上按上键焦点乱动问题
		{	
			return;
		}
		
		/*
		if(optionIndex == PIC_EFFECT_INDEX)//effect
		{
			
			optionListIndex = optionListIndex + 1;
			if(optionListIndex >= effectArray.length)
				optionListIndex = effectArray.length - 1;
			console.log("YM optionListIndex:" + optionListIndex);
			if(optionListIndex >= 5)
			{
				$('optionInfoListFocus').style.top = 30 - 5 + 4 * focusOptionHeight + "px";
				for(var i=0; i<5 ;i++)
				{
					inforListSpan[i].innerText = effectArray[optionListIndex + 1 - 5 + i];
				}
			}
			else
			{
				$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
			}
			return;
		}
		*/
		
		if(optionIndex == PIC_EFFECT_INDEX)//effect
		{
			stopElementScroll(inforListSpan[effectFocus]);
			if(effectFocus + effectStart < effectArray.length - 1)
			{
				effectFocus++;
				if(effectFocus >= 5)
				{
					effectFocus = 4;
					effectStart++;
				}
			}
			console.log("YM effectFocus：" + effectFocus);
			console.log("YM effectStart: " + effectStart);
			optionListIndex = effectFocus + effectStart;
			$('optionInfoListFocus').style.top = 30 - 5 +  effectFocus * focusOptionHeight + "px";
			if(effectStart == 0)
			{
				$('listInfoBottomArrow').style.display = "block";
				$('listInfoUpArrow').style.display = "none";
			}
			else if(effectStart == effectArray.length - 5)
			{
				$('listInfoBottomArrow').style.display = "none";
				$('listInfoUpArrow').style.display = "block";
			}
			else
			{
				$('listInfoBottomArrow').style.display = "block";
				$('listInfoUpArrow').style.display = "block";
			}
			
			for(var i = 0 ; i< 5 ; i++)
			{
				inforListSpan[i].innerText = effectArray[effectStart + i];
			}
			startElementScroll(inforListSpan[effectFocus]);
			hideMenu(15000, DISPLAY_AREA);
			return;
		}
		
		stopElementScroll(inforListSpan[optionListIndex]);
		optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
		$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
		startElementScroll(inforListSpan[optionListIndex]);
		hideMenu(15000, DISPLAY_AREA);
		return;
	}
	else if(focusTab == ZOOM_AREA)
	{
		if(downMost)
		{	
			return;
		}
		else
		{
			console.log("YM move down");
			if(upMost)
			{
				upMost = false;
				$("zoomInImg").getElementsByTagName("img")[1].src = "images/USB-Icon-Arrow-zoomIn-up.png";
			}
			multimedia.pictureMove(MOVE_DOWN);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		
		/*
		console.log("YM downMost:" + downMost);
		console.log("YM pictureMoveTipsHasShowFlag:" + pictureMoveTipsHasShowFlag);
		if(downMost && pictureMoveTipsHasShowFlag)
		{
			$("thumbNail").style.display = "none";
			//$("pictureMoveTips").style.display = "none";
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			downMost = false;
			pictureMoveTipsHasShowFlag = false;
			zoomFlag = 0;
			zoomNum  = 0;
			
			//currentListPosition = multimedia.getNowPicturePosition();//add yums
			console.log("YM todown() currentListPosition:" + currentListPosition);
			if(currentPlayList.length - 6 < 0)
			{
				playListStart = 0;
				playListIndex = currentListPosition - playListStart;
			}
			else
			{
				if(currentListPosition >=currentPlayList.length - 6)
				{
					playListStart = currentPlayList.length - 6;
					playListIndex = currentListPosition - playListStart;
				}
				else
				{
					playListStart = currentListPosition;
					playListIndex = 0
				}
			}
			//multimedia.pictureStop(0);    //add yums:
			isStop = 1;  //add yums
			console.log("YM pictureStop(0)");
		
			focusTab = PLAY_LIST_AREA;
			menuBar.style.display = 'none';
			$('playList').style.display = 'block';
			arrowPlayListDisplay(playListStart);
			refreshPlayList();
			resetFocusShape();
			setPlayListFocus(playListIndex,-1); //add yums 2014-10-13;
			hideMenu(FADE_TIME, DISPLAY_AREA);
			multimedia.pictureStop(0);    //add yums:
			multimedia.stopThumbnailTask();
			multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);
			
			return;
		}
		else if(downMost)
		{	
			$("pictureMoveTips").getElementsByTagName("span")[0].innerHTML = pictureMoveTipsArray[2];
			$("pictureMoveTips").style.display = "block";
			pictureMoveTipsHasShowFlag = true;
			setTimeout(function(){
				$("pictureMoveTips").style.display = "none";
			},3000);
			return;
		}
		else
		{
			console.log("YM move down");
			if(upMost)
				upMost = false;
			multimedia.pictureMove(MOVE_DOWN);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		
		*/
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(1);
	}
	else if(focusTab == LIST_AREA)//add yums 2015-3-4
	{
		
		if($('iconListEmptyTips').style.display == 'block')
		{
			showIconEmptyTips(-1);
			return;
		}
		changeSearchFileFocus(1);//
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		changeMusicMenuBarSelect(3);
		return;
	}
	
	
	hideMenu(FADE_TIME, DISPLAY_AREA);
	/*
	if(focusTab == DISPLAY_AREA)
	{
		setTimeout(function()  //3秒种自动恢复播放。
		{
			console.log("YM settimeout()");
			mediaPlay(currentPlayList[5].path);//从当前位置开始播放position= getNowPicturePosition()
		},3000);
	}
	*/
}

function setOptionFocusPosition(type)
{
	setOptionMenuFocus(-1,optionIndex);
	stopElementScroll(optionFirstMenuLi[optionIndex]);
	if(type == 1)//down
	{
		console.log("YM optionFirstMenuLi.length:" + optionFirstMenuLi.length);
		optionIndex++;
		if(optionFirstMenuLi.length <= OPTION_COUNT)
		{
			if(optionIndex >= optionFirstMenuLi.length)
			{
				optionIndex = 0;
			}
			
		}
		else
		{
			if(optionIndex >= OPTION_COUNT && (optionIndex + optionIndexStart) < optionFirstMenuLi.length)
			{
				optionIndex = OPTION_COUNT - 1;
				optionIndexStart++;
			}
			else if((optionIndex + optionIndexStart) == optionFirstMenuLi.length)
			{
				optionIndex = 0;
				optionIndexStart = 0;
			}
		}
	}
	else if(type == -1)//up
	{
		optionIndex--;
		if(optionFirstMenuLi.length <= OPTION_COUNT)
		{
			if(optionIndex < 0)
			{
				optionIndex = optionFirstMenuLi.length - 1;
			}
		}
		else
		{
			if(optionIndex < 0)
			{
				if(optionIndexStart == 0)
				{
					optionIndex = OPTION_COUNT - 1;
					optionIndexStart = optionFirstMenuLi.length - OPTION_COUNT;
				}
				else
				{
					optionIndex = 0;
					optionIndexStart --;
				}
			}
		}
	}
	
	setOptionMenuFocus(optionIndex,-1);
	startElementScroll(optionFirstMenuLi[optionIndex]);
}

function toOK()//DISPLAY_AREA, OPTION_AREA, OPTION_DETAIL_AREA, PLAY_LIST_AREA, MENU_AREA
{
	
	if(focusTab == DISPLAY_AREA || focusTab == ZOOM_AREA)
	{
		focusTab = MENU_AREA;
		resetFocusShape();
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);  //add yums2014-11-15 面板按键
		$('focus').style.display = 'none';
		menuBar.style.display = 'block';
		$('bottomTips').style.display = "block";
		if(zoomFlag != 0) //add yums,
		{//从ZOOM_AREA状态点击OK 进入MENU_AREA，如果是放大情况 测显示upTips
			if(zoomNum > 0 && $("upTips").style.display == "none")
			{
				$("upTips").style.display = "block";
			}
			$("zoomInImg").style.display = "none";
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					$("zoomInImg").style.display = "block";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					console.log("YM fffff 9:" + focusTab);
					focusTab = DISPLAY_AREA;
				}
				
			},5000)
			return;
		}
	}
	else if(focusTab == MENU_AREA)
	{
		doMenuSelect();
		if(zoomFlag != 0) //add yums,
		{
			return;
		}
		
		if(menuFocusIndex == 5)
		{
			clearTimeout(menuTimer);
			menuBar.style.display = "none";
			return;
		}
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		console.log("YM toOK() focusTab=PLAY_LIST_AREA");
		//add yums :1、获取当前位置的图片的path，播放当前图片
		//clickFlageOnPlayList = 1;
		//hideMenu(0,DISPLAY_AREA);
		clearTimeout(menuTimer);  //add yums,解决DLNA中点击playList中播放图片被hidemenu抢去的情况
		top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);  //add yums2014-11-15 面板按键
		$('playList').style.display = 'none';
		$('focus').style.display = 'none';
		$('playListRightArrow').style.display = 'none';
		$('playListLeftArrow').style.display = 'none';
		console.log("YM fffff 11:" + focusTab);
		focusTab = DISPLAY_AREA;
		console.log("YM before mediaPlay")
		downMost = false;  //add yums 2014-11-14  为了解决狂按下键调出playlist选择一张播放，再放大后一向下移动弹出提示
		setTimeout(function(){
			multimedia.stopThumbnailTask();
			mediaPlay(currentPlayList[playListStart + playListIndex].path);
			picPlayingTimeOut = false;
			isStop = 0;		
		},30);  //add yums
		setPlayListFocus(-1,-1); //add yums 2014-10-13;
		//mediaPlay(currentPlayList[playListStart + playListIndex].path);
		//clickFlageOnPlayList = 0;  //此处不能付0 hideMenu会在其后执行；
		return;
	}
	else if(focusTab == OPTION_AREA)
	{
		toRight();
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA || focusTab == PRESET_AREA)
	{
		if(focusTab == PRESET_AREA)
		{
			setSPOption();
			return;
		}
		else
		{
			setSPOption();
		
			startElementScroll(optionFirstMenuLi[optionIndex]);
			hideMenu(15000, DISPLAY_AREA);
			return;
		}
	}
	/*
	else if(focusTab == BGM_AREA)//chencheng
	{
		switch(bgmFocusIndex)
		{
			case 0:
				multimedia.playPreMediaFile();
				break;
			case 1:
				if(bgmPlayStatus == S_PLAY)
				{
					bgmPlayStatus = S_PAUSE;
					multimedia.mediaPause();
					$('musicP&P').src = "images/USB-Music-Control-icon-PlayFocus-S.png";
				}
				else if(bgmPlayStatus == S_PAUSE)
				{
					bgmPlayStatus = S_PLAY;
					multimedia.mediaResume();
					$('musicP&P').src = "images/USB-Music-Control-icon-PauseFocus-S.png";
				}
				break;
			case 2:
				multimedia.playNextMediaFile();
				break;
		}
	}
	*/
	else if(focusTab == TIPS_AREA)//do not play, exit multimedia center
	{
		switch(errorFlag)
		{
			
			case ERROR_CANT_OPEN:    //无法打开文件
			case ERROR_PIC_NOT_AVAILABLE:  //播放不成功
			case ERROR_VIDEO_NOT_SUPPORT:  //播放的文件视频 或者 音频不支持。 建议处理方式：给出相应的提示信息，但是继续播放支持的
				/*考虑到can open跟背景音乐播放can open相同，暂停屏蔽
				//hideMenu(0);
				displayTipsBox(0);
				//multimedia.pictureStop(1);
				if(dmrFlag)
				{
					multimedia.pictureStop(1);
					multimedia.deviceExitUninit();
					multimedia.toRestoreSource(0, 0);
					top.$("main").src = "channelPlay.html";
					top.main.focus();	
				}
				else
				{
					if(currentPlayList.length == 1)
					{
						multimedia.pictureStop(1);
						multimedia.stopThumbnailTask();
						top.$("main").src = "mediaList.html?media";
					}
					else
					{
						focusTab = DISPLAY_AREA;
						picPlayingTimeOut = false;						
						multimedia.playNextPicture();
					}
				}
				break;
				*/
				top.g_BGMmdiaFolderPath = "";
			case ERROR_OTHER:   //其他错误，建议处理:退出本次播放
			case ERROR_FILE_NOT_EXIST:  //文件路径不存在，这个消息起保护作用，建议处理:退出本次播放
			case ERROR_VIDEO_ERROR ://播放过程中流数据存在问题，解码出错。 建议处理方式：退出本次播放
			case ERROR_VIDEO_CANT_RECONGNIZE:  //解码时，decoder判断出不支持，通常是格式支持，但是profile级别不支持。建议处理方式：退出本次播放
				hideMenu(0);
				displayTipsBox(0);
				multimedia.pictureStop(1);
				if(dmrFlag)
				{
					multimedia.deviceExitUninit();
					multimedia.toRestoreSource(0, 0);
					top.$("main").src = "channelPlay.html";
					top.main.focus();	
				}
				else
				{
					multimedia.stopThumbnailTask();
					top.$("main").src = "mediaList.html?media";
				}
				break;
			case ERROR_NET_DISCONNECTED:
				multimedia.pictureStop(1);
				multimedia.deviceExitUninit();
				top.g_mediaPosition = 1;
				window.location.href = "deviceList.html?remove";
				break;
			case ERROR_AUDIO:
				//multimedia.mediaStop(0);
				//musicPlayStatus = S_END;
				console.log("error_audio");
				hideMenu(0, DISPLAY_AREA);
				displayTipsBox(0);
				$("BGMArea").style.display = "none";
				top.g_BGMmdiaFolderPath = "";
				break;
			default:
				break;
		
		}
		return;
	}
	else if(focusTab == LIST_AREA)//焦点在背景音乐文件索引菜单中时
	{
		toRight();
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		doMusicMenuSelect();
		return;
	}

	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function toHomePage()
{
	isStop = 0;
	hideMenu(0); //add yums：退出时立即隐藏因为菜单选项。
	showConsoleTipsArrow(0,0); 
	displayTipsBox(0);
	$('consoleTip').style.display = 'none';
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	setTimeout(function()
	{
		top.$("main").onload = function()
		{
			multimedia.pictureStop(1);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.$("main").onload="";
		}
		multimedia.stopThumbnailTask();
		if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
		{
			top.$("main").src = "homePageIndex.html?tv&media";
		}
		else
		{
			top.$("main").src = "homePageVP.html?tv&media";
		}
		top.main.focus();
	
	},100)
	
}

function toBack()
{
	console.log("YM toBack()");
	
	if(dmrFlag)  //add yums:dmr picture
	{
		top.g_lastEnterType = -1;
		top.g_isMediaCenter = top.NDM_Others;
		multimedia.pictureStop(1);
		multimedia.deviceExitUninit();
				  
		//multimedia.toRestoreSource();
		multimedia.toRestoreSource(0, 0);
		top.$("main").src = "channelPlay.html";
		top.main.focus();
		return;
	}
	if(focusTab == DISPLAY_AREA)
	{
		//$("LR_Tips").style.display = "none";
		//multimedia.pictureStop(1);
		
		 
		//top.$("main").src = "mediaList.html?media";
		//setTimeout(function(){
		//	console.log("YM toback stop_task");
			//multimedia.stopThumbnailTask();
			//multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);
		//},30);
		//top.$("main").src = "mediaList.html?media";
		$("LR_Tips").style.display = "none";
		multimedia.mediaStop(0);
		setTimeout(function()
		{
			multimedia.pictureStop(1);
			//if(currentMediaType == 1)
			//{
				multimedia.stopThumbnailTask();
				//multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);
			//}
			top.$("main").src = "mediaList.html?media";
		},50)


	}
	else if(focusTab == ZOOM_AREA)
	{
		console.log("YM fffff 12:" + focusTab);
		
		focusTab = DISPLAY_AREA;
		multimedia.pictureZoomIn(0);
		rightMost = false; 
		leftMost  = false;
		downMost  = false;
		upMost    = false;
		pictureMoveTipsHasShowFlag = false;
		
		zoomFlag = 0;
		zoomNum  = 0;
		
		//隐藏鸟瞰图
		menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
		menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
		menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
		$("upTips").style.display = "none";
		$("thumbNail").style.display = "none";
		//$("LR_Tips").style.display = "block";
		$("zoomInImg").style.display = "none";
		$("zoomInImg").getElementsByTagName("img")[0].src = "images/USB-Icon-Arrow-zoomIn-left.png";
		$("zoomInImg").getElementsByTagName("img")[1].src = "images/USB-Icon-Arrow-zoomIn-up.png";
		$("zoomInImg").getElementsByTagName("img")[2].src = "images/USB-Icon-Arrow-zoomIn-right.png";
		$("zoomInImg").getElementsByTagName("img")[3].src = "images/USB-Icon-Arrow-zoomIn-down.png";
		//$("thumbNail").getElementsByTagName("img")[0].style.marginTop   = 0 + "px";
		//$("thumbNail").getElementsByTagName("img")[0].style.marginLeft  = 0 + "px";
		//hideMenu(0, DISPLAY_AREA);
	}
	else if(focusTab == PRESET_AREA)
	{
		$('picturePresetBar').style.display = 'none';
		console.log("YM optionInfoArray[0]" + optionInfoArray[0]);
		//multimedia.setPicPicturePreset(optionInfoArray[0]); //add yums 用户不按ok键，这回复原值
		setting.previewPictureMode(optionInfoArray[0]);  //add yums:2014-12-1
		focusTab = OPTION_AREA;
		//$('option').style.display = 'block';
		//resetFocusShape();
		//stopElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		startElementScroll(optionFirstMenuLi[optionIndex]);
		//hideMenu(15000, DISPLAY_AREA);
		//
		stopElementScroll(picPresetListName[optionListIndex]);
		previewPictureMode(optionInfoArray[0]);
		toOption(0);
		return;
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		$('playList').style.display = 'none';
		$('focus').style.display = 'none';
		$('playListRightArrow').style.display = 'none';
		$('playListLeftArrow').style.display = 'none';
		console.log("YM fffff 13:" + focusTab);
		focusTab = DISPLAY_AREA;
		downMost = false;
		setPlayListFocus(-1,-1);
		console.log("YM toback() focus == PLAY_LIST_AREA");
		top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
		setTimeout(function(){
			multimedia.stopThumbnailTask();
			mediaPlay(currentPlayList[currentListPosition].path);
			picPlayingTimeOut = false;
			isStop = 0;
		}, 30);
		
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		toLeft();
	}
	else if(focusTab == MENU_AREA && zoomNum > 0)
	{
		clearTimeout(zoomTimer);
		$("upTips").style.display = "none";
		menuBar.style.display = "none";
		$('bottomTips').style.display = "none";
		$("zoomInImg").style.display = "block";
		focusTab = ZOOM_AREA;
		return;
	}
	else if(focusTab == OPTION_AREA)
	{
		console.log("YM fffff 14:" + focusTab);
		focusTab = DISPLAY_AREA;
		hideMenu(0, DISPLAY_AREA);
		if(pptStateBeforeToOption == 1)
		{
			multimedia.setPicturePPTState(1);
			pptState = 1;
			pptStateBeforeToOption = 0;
		}
		stopElementScroll(optionFirstMenuLi[optionIndex]);
	}
	else if(focusTab == TIPS_AREA)
	{
		toOK();
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		toOption(optionIndex);
	}
	else
	{
		console.log("YM fffff 15:" + focusTab);
		
		focusTab = DISPLAY_AREA;
		hideMenu(0, DISPLAY_AREA);
	}
}

function toOption(index)
{
	optionIndex = index == -1 ? 0 : index;
	
	if(dmrFlag == true)   //add yums:dmr
	{
		return;
	}
	if($('option').style.display == "block")
	{
		console.log("YM fffff 16:" + focusTab);
		focusTab = DISPLAY_AREA;
		hideMenu(0, DISPLAY_AREA);
		if(pptStateBeforeToOption == 1)
		{
			multimedia.setPicturePPTState(1);
			pptState = 1;
			pptStateBeforeToOption = 0;
		}
		stopElementScroll(optionFirstMenuLi[optionIndex]);
	}
	else
	{
		if(zoomFlag != 0)  //如果是放大状态不调出option
			return;
		if(focusTab == PLAY_LIST_AREA)
			return;
		if(focusTab == INFO_AREA)
		{
			$("info").style.display = "none";
		}
		console.log("YM $('option').style.display != 'block'");
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);  //add yums2014-11-15 面板按键
		//optionIndex = 0;
		optionListIndex = 0;
		focusTab = OPTION_AREA;
		$('option').style.display = 'block';
		menuBar.style.display = 'none';
		$('bottomTips').style.display = "none";
		$('playList').style.display = 'none';
		$('optionBarArea').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		$('BGMArea').style.display = 'none';
		pptState = multimedia.getPicturePPTState();
		if(pptState == 1)
		{
			pptStateBeforeToOption = 1;
			multimedia.setPicturePPTState(0);
			pptState = 0;
		}
		
		resetFocusShape();
	//	optionInfoArray[0] = multimedia.getPicPicturePreset();//picture preset
		//optionInfoArray[1] = multimedia.pictureRepeatMode;//play mode
		//optionInfoArray[2] = multimedia.getPictureDuration();//duration
		//optionInfoArray[3] = multimedia.getPictureEffect();//effect
		
		//console.log("YM optionInfoArray[3]:" + optionInfoArray[3]);
		
		//console.log("YM toOption()optionInfoArray[0]:"+optionInfoArray[0]);
		//$('picturePresetContent').innerText = picturePresetArray[optionInfoArray[0]];
		//$('playModeContent').innerText = playModeArray[optionInfoArray[1]];
		//$('durationContent').innerText = durationArray[optionInfoArray[2]];
		//$('effectContent').innerText = effectArray[optionInfoArray[3]];
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		refreshOptionInfo();//获取option菜单中各选项的值
		fillOptionFirstList();
		changeOptionListColor();
		$('optionInfoFocus').src = "images/Focus_USB_1.png";
		//$("optionInfo").getElementsByTagName("img")[optionIndex].src = (optionIndex == OPTION_PIC_PRESET && footballModeFlag)
		//	? "images/Icon-R-Disable.png" : "images/Icon-R-Focus.png";

		setOptionMenuFocus(-1, -1);
		startElementScroll(optionFirstMenuLi[optionIndex]);
		
		hideMenu(15000, DISPLAY_AREA);  //15秒后，option自动隐藏
	}
}

// setOptionMenuFocus(optionFocusIndex_1, -1)
//{
	//return 0;
//}

function refreshOptionInfo()//获取option菜单中各选项的值
{
    if(0 == isXVYCCEnable)
    {
        optionInfoArray[PIC_PRESET_INDEX] = setting.pictureMode;//picture preset
    }
    else
    {
        optionInfoArray[PIC_PRESET_INDEX] = pictureModeTransform(setting.pictureMode);//picture preset
    }
	optionInfoArray[PIC_BACKLIGHT_INDEX] = setting.backLight;
	optionInfoArray[PIC_BRIGHTNESS_INDEX] = setting.brightness;
	optionInfoArray[PIC_CONTRAST_INDEX] = setting.contrast;
	optionInfoArray[PIC_SATURATION_INDEX] = setting.saturation;
	optionInfoArray[PIC_TINT_INDEX] = setting.hue;
	optionInfoArray[PIC_SHARPNESS_INDEX] = setting.sharpness;
	
	//console.log("YM PIC_PLAYMODE_INDEX:" + multimedia.pictureRepeatMode);
	optionInfoArray[PIC_PLAYMODE_INDEX] = multimedia.pictureRepeatMode;//play mode
	console.log("YM PIC_PLAYMODE_INDEX:" + optionInfoArray[PIC_PLAYMODE_INDEX]);
	optionInfoArray[PIC_DURATION_INDEX] = multimedia.getPictureDuration();//duration
	optionInfoArray[PIC_EFFECT_INDEX] = multimedia.getPictureEffect();//effect
	
//	$('picturePresetContent').innerText = picturePresetArray[optionInfoArray[PIC_PRESET_INDEX]];
//	$('playModeContent').innerText = playModeArray[optionInfoArray[PIC_PLAYMODE_INDEX]];
//	$('durationContent').innerText = durationArray[optionInfoArray[PIC_DURATION_INDEX]];
//	$('effectContent').innerText = effectArray[optionInfoArray[PIC_EFFECT_INDEX]];
}

function fillOptionFirstList()//add yums:2015-1-26  //填充option 一级菜单中各选项的值
{
    if(0 == isXVYCCEnable)
    {
        $('picturePresetContent').innerText = picturePresetArray[4 == optionInfoArray[PIC_PRESET_INDEX] ? 5 : optionInfoArray[PIC_PRESET_INDEX]];
    }
    else
    {
        $('picturePresetContent').innerText = picturePresetArray[optionInfoArray[PIC_PRESET_INDEX]];
    }
	
	$("optionBackLight").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
		= optionInfoArray[PIC_BACKLIGHT_INDEX];
	refreshBarArea($('optionBackLightBar').getElementsByTagName('div'), 
		optionInfoArray[PIC_BACKLIGHT_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$("optionBrightness").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
		= optionInfoArray[PIC_BRIGHTNESS_INDEX];
	refreshBarArea($('optionBrightnessBar').getElementsByTagName('div'), 
		optionInfoArray[PIC_BRIGHTNESS_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
		
	$("optionContrast").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
		= optionInfoArray[PIC_CONTRAST_INDEX];
	refreshBarArea($('optionContrastBar').getElementsByTagName('div'), 
		optionInfoArray[PIC_CONTRAST_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
		
	$("optionSaturation").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
		= optionInfoArray[PIC_SATURATION_INDEX];
	refreshBarArea($('optionSaturationBar').getElementsByTagName('div'), 
		optionInfoArray[PIC_SATURATION_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
		
	$("optionTint").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
		= optionInfoArray[PIC_TINT_INDEX];
	refreshBarArea($('optionTintBar').getElementsByTagName('div'), 
		optionInfoArray[PIC_TINT_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
		
	$("optionSharpness").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
		= optionInfoArray[PIC_SHARPNESS_INDEX];
	refreshBarArea($('optionSharpnessBar').getElementsByTagName('div'), 
		optionInfoArray[PIC_SHARPNESS_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
		
	$('playModeContent').innerText = playModeArray[optionInfoArray[PIC_PLAYMODE_INDEX]];
	$('durationContent').innerText = durationArray[optionInfoArray[PIC_DURATION_INDEX]];
	$('effectContent').innerText = effectArray[optionInfoArray[PIC_EFFECT_INDEX]]

}

function fillOptionBarArea()
{
	$('backLightBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_BACKLIGHT_INDEX];
	$('brightnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_BRIGHTNESS_INDEX];
	$('contrastBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_CONTRAST_INDEX];
	$('saturationBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_SATURATION_INDEX];
	$('tintBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_TINT_INDEX];
	$('sharpnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_SHARPNESS_INDEX];
	

	refreshBarArea($('backLightBar').getElementsByTagName('img'), optionInfoArray[PIC_BACKLIGHT_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('brightnessBar').getElementsByTagName('img'), optionInfoArray[PIC_BRIGHTNESS_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('contrastBar').getElementsByTagName('img'), optionInfoArray[PIC_CONTRAST_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('saturationBar').getElementsByTagName('img'), optionInfoArray[PIC_SATURATION_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('tintBar').getElementsByTagName('img'), optionInfoArray[PIC_TINT_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('sharpnessBar').getElementsByTagName('img'), optionInfoArray[PIC_SHARPNESS_INDEX], 100, OPTION_BAR_LENGTH);
	
}

function refreshBarArea(tmpBar, value, maxValue, length)
{
	console.log("YM refreshBarArea");
	tmpBar[1].style.width = value * length / maxValue + "px";
	tmpBar[2].style.left = value * length / maxValue + "px";
}

function displayOptionBarArrows(index)
{
	var tmpBarCount = 6;
	$('optionBarUpArrow').style.display = (index > 1 && index < tmpBarCount) ? 'block' : 'none';
	$('optionBarDownArrow').style.display = (index < tmpBarCount - 2 && index > 0) ? 'block' : 'none';
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
	
	optionBarNameArray[index].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarValue')[0].style.display = 'block';
	optionBarNameArray[index].getElementsByClassName('optionBarStyle_2')[0].style.display = 'block';
	
	displayOptionBarArrows(index);

	$('optionBarArea').style.display = 'block';
}

function getBarIndex(index)
{
	switch(index)
	{
		case PIC_BACKLIGHT_INDEX:
			return 0;
		case PIC_BRIGHTNESS_INDEX:
			return 1;
		case PIC_CONTRAST_INDEX:
			return 2;
		case PIC_SATURATION_INDEX:
			return 3;
		case PIC_TINT_INDEX:
			return 4;
		case PIC_SHARPNESS_INDEX:
			return 5;
		default:
			return 0;
	}
}

function setOptionBarPosition(type)
{
	var tmpIndex = getBarIndex(optionIndex);
	var tmpLength = optionBarNameArray.length;
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
	optionIndex = getBarType(tmpIndex);
	optionFocusIndex_2 = optionInfoArray[optionIndex];
	$('optionBarBlock').style.top = - optionBarHeight * tmpIndex + "px";

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

function getBarType(index)
{
	switch(index)
	{
		case 0:
			return PIC_BACKLIGHT_INDEX;
		case 1:
			return PIC_BRIGHTNESS_INDEX;
		case 2:
			return PIC_CONTRAST_INDEX;
		case 3:
			return PIC_SATURATION_INDEX;
		case 4:
			return PIC_TINT_INDEX;
		case 5:
			return PIC_SHARPNESS_INDEX;
		default:
			return PIC_BACKLIGHT_INDEX;
	}
}

function setOptionMenuFocus(currentIndex, lastIndex)//用于在option菜单中焦点移动前后失去、获取焦点的选项的属性设置
{
	for(var i = 0; i < optionMenuImg.length; i++)
	{
		optionMenuImg[i].src = "images/Icon-R-Focus.png";
	}
	optionFirstMenuLi[PIC_PRESET_INDEX].getElementsByClassName('optionFirstUlImg')[0].src = footballModeFlag 
		? "images/Icon-R-Disable.png" : "images/Icon-R-Focus.png";
	return;

	switch(currentIndex)
	{
		case PIC_PRESET_INDEX:
			if(footballModeFlag) break;
		case PIC_PLAYMODE_INDEX:
		case PIC_DURATION_INDEX:
		case PIC_EFFECT_INDEX:
		case PIC_INFO_INDEX:
			if(currentIndex < 0) break;
			optionFirstMenuLi[currentIndex].getElementsByClassName('optionFirstUlImg')[0].src = "images/Icon-R-Focus.png";
			break;
		default:
			break;
	}
	
	switch(lastIndex)
	{
		case PIC_PRESET_INDEX:
		case PIC_PLAYMODE_INDEX:
		case PIC_DURATION_INDEX:
		case PIC_EFFECT_INDEX:
		case PIC_INFO_INDEX:
			if(lastIndex < 0) break;
			optionFirstMenuLi[lastIndex].getElementsByClassName('optionFirstUlImg')[0].src = "images/Icon-R-Disable.png";
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
	//setOptionFocusScroll(currentIndex, lastIndex);
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
	if(footballModeFlag)
	{
		$('picturePresetContent').style.color = "#666";
		changeObjColor($('optionBackLight'), "#666");
		changeObjColor($('optionBrightness'), "#666");
		changeObjColor($('optionContrast'), "#666");
		changeObjColor($('optionSaturation'), "#666");
		changeObjColor($('optionTint'), "#666");
		changeObjColor($('optionSharpness'), "#666");
	}
	else
	{
		$('picturePresetContent').style.color = "#aaa";
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
	if(footballModeFlag)
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


function changeBGMFocus(offset)
{
	switch(bgmFocusIndex)
	{
		case 0:
			$('musicPre').src = "images/USB-Music-Control-icon-Previous-S.png";
			break;
		case 1:
			if(bgmPlayStatus == S_PLAY)
			{
				$('musicP&P').src = "images/USB-Music-Control-icon-Pause-S.png";
			}
			else if(bgmPlayStatus == S_PAUSE)
			{
				$('musicP&P').src = "images/USB-Music-Control-icon-Play-S.png";
			}
			break;
		case 2:
			$('musicNext').src = "images/USB-Music-Control-icon-Next-S.png";
			break;
	}
	bgmFocusIndex = parseInt(((bgmFocusIndex + offset + 3) % 3), 10);
	switch(bgmFocusIndex)
	{
		case 0:
			$('musicPre').src = "images/USB-Music-Control-icon-PreviousFocus-S.png";
			break;
		case 1:
			if(bgmPlayStatus == S_PLAY)
			{
				$('musicP&P').src = "images/USB-Music-Control-icon-PauseFocus-S.png";
			}
			else if(bgmPlayStatus == S_PAUSE)
			{
				$('musicP&P').src = "images/USB-Music-Control-icon-PlayFocus-S.png";
			}
			
			break;
		case 2:
			$('musicNext').src = "images/USB-Music-Control-icon-Next-Focus-S.png";
			break;
	}
}

function setOptionBarValue(type)//[1]right [-1]left
{
	var tmpMax = SHORT_BAR_MAX_VALUE;
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
	optionInfoArray[optionIndex] = optionFocusIndex_2;
	switch(optionIndex)
	{
		case PIC_BACKLIGHT_INDEX:
			setting.backLight = optionFocusIndex_2;
			break;
		case PIC_BRIGHTNESS_INDEX:
			setting.brightness = optionFocusIndex_2;
			break;
		case PIC_CONTRAST_INDEX:
			setting.contrast = optionFocusIndex_2;
			break;
		case PIC_SATURATION_INDEX:
			setting.saturation = optionFocusIndex_2;
			break;
		case PIC_TINT_INDEX:
			setting.hue = optionFocusIndex_2;
			break;
		case PIC_SHARPNESS_INDEX:
			setting.sharpness = optionFocusIndex_2;
			break;
		default:
			break;
	}
	refreshBarArea(optionBarNameArray[getBarIndex(optionIndex)].getElementsByTagName('img'), 
		optionFocusIndex_2, tmpValue, OPTION_BAR_LENGTH);
	optionBarNameArray[getBarIndex(optionIndex)].getElementsByClassName('optionBarValue')[0].innerText = optionFocusIndex_2;
}


function changeMenuFocus(offset)
{
	console.log("Ym changeMenuFocus : " + offset);
	
	if(pptState == 1)  //add yums 幻灯片播放，焦点不能移动
	{
		return;
	}
	
	switch(menuFocusIndex)
	{
		case MENU_PLAY:
			/*
			if(playStatus == S_PLAY)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			}
			else if(playStatus == S_PAUSE)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause.png";
			}
			*/
			if(pptState == 0)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			}
			else if(pptState == 1)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause.png";
			}
			break;
		case MENU_R_ROTATE:
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			break;
		case MENU_L_ROTATE:
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			break;
		case MENU_ZOOM_IN:
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
			break;
		case MENU_ZOOM_OUT:
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
			break;
		case MENU_BGM:
			menuImgTag[5].src = "images/USB-Picture-Control-icon-Music.png";
			break;
	}
	
	if(zoomFlag != 0) //add yums 如果为放大或者缩小状态，焦点只能在放大和缩小按钮上移动
	{
		console.log("YM menuFocusIdnex:" +menuFocusIndex);
		if(offset != 0)
		{
			if(menuFocusIndex == 3)
			{
				menuFocusIndex = 4;
			}
			else if(menuFocusIndex == 4)
			{
				menuFocusIndex = 3;
			}
		}
	}
	else
	{
		menuFocusIndex = parseInt(((menuFocusIndex + offset + MENU_COUNT) % MENU_COUNT), 10);
	}
	
	switch(menuFocusIndex)
	{
		case MENU_PLAY:
		/*
			if(playStatus == S_PLAY)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
			}
			else if(playStatus == S_PAUSE)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
			}
		*/
			if(pptState == 0)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
			}
			else if(pptState == 1)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
			}
			
			break;
		case MENU_R_ROTATE:
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateRFocus.png";
			break;
		case MENU_L_ROTATE:
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateLFocus.png";
			break;
		case MENU_ZOOM_IN:
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+Focus.png";
			break;
		case MENU_ZOOM_OUT:
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-Focus.png";
			break;
		case MENU_BGM:
			menuImgTag[5].src = "images/USB-Picture-Control-icon-MusicFocus.png";
			break;
	}
}

function fillFileInformation(file)
{
	console.log("YM file.name:" + file.name);
	console.log("YM file.width:" + file.width);
	console.log("YM file.height:" + file.height);
	var tmp = (file.name != null && file.name != "") ? file.name : "Na";
	informationSpan[0].innerText = infoArray[0] + tmp;
	$("info").getElementsByTagName('span')[0].innerText = infoArray[0] + tmp;
	
	console.log("YM before width");
	var tmpW = (file.width != null && file.width != "") ? file.width : "Na";
	var tmpH = (file.height != null && file.height != "") ? file.height : "Na";
	informationSpan[1].innerText = infoArray[1] + tmpW + " X " + tmpH;
	$("info").getElementsByTagName('span')[1].innerText = infoArray[1] + tmpW + " X " + tmpH;
	
	var tmp1 = (file.year != null && file.year != "") ? file.year : "Na";
	var tmp2 = (file.month != null && file.month != "") ? file.month : "Na";
	var tmp3 = (file.day != null && file.day != "") ? file.day : "Na";
	if(tmp2<10) tmp2 = "0" + tmp2;
	if(tmp3<10) tmp3 = "0" + tmp3;
	informationSpan[2].innerText = infoArray[2] + tmp3 + "/" + tmp2 + "/"+ tmp1;
	$("info").getElementsByTagName('span')[2].innerText = infoArray[2] + tmp3 + "/" + tmp2 + "/"+ tmp1;
	
	tmp = (file.path != null && file.path != "") ? file.path : "Na";
	informationSpan[3].innerText = infoArray[3] + tmp;
	$("info").getElementsByTagName('span')[3].innerText = infoArray[3] + tmp;
	
	if($("info").style.display == "block")
	{	
		for(var i=0;i<inforSpan.length;i++)
		{
			stopElementScroll(inforSpan[i]);
			
		}
		for(var i=0;i<inforSpan.length;i++)
		{
			startElementScroll(inforSpan[i]);
		}
	}
	
}

function fillOptionList(index)
{
	console.log("YM fillOptionList index:" + index);
	switch(index)
	{
		case PIC_PRESET_INDEX: //picture preset
            if(0 == isXVYCCEnable)
            {
                for(var i = 0; i < picturePresetArray.length - 1; i++)
                {
                    inforListSpan[i].style.display = 'block';
                    inforListSpan[i].innerText = picturePresetArray[i];
                }
                for(var i = picturePresetArray.length -1; i < inforListSpan.length; i++)
                {
                    inforListSpan[i].style.display = 'none';
                    inforListSpan[i].innerText = "";
                }
            }
            else
            {
                for(var i = 0; i < picturePresetArray.length; i++)
                {
                    inforListSpan[i].style.display = 'block';
                    inforListSpan[i].innerText = picturePresetArray[i];
                }
                for(var i = picturePresetArray.length; i < inforListSpan.length; i++)
                {
                    inforListSpan[i].style.display = 'none';
                    inforListSpan[i].innerText = "";
                }
            }

			break;
		case PIC_PLAYMODE_INDEX://play mode
			for(var i = 0; i < playModeArray.length; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = playModeArray[i];
			}
			for(var i = playModeArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case PIC_DURATION_INDEX://duration
			console.log("YM fillOptionList durationArray.length:" + durationArray.length);
			for(var i = 0; i < durationArray.length; i++)
			{
				console.log("YM fillOptionList durationArray:" + durationArray[i]);
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = durationArray[i];
			}
			for(var i = durationArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case PIC_EFFECT_INDEX://effect
			optionListIndex = optionInfoArray[optionIndex];
			console.log("YM fillOptionList() optionListIndex:" + optionListIndex);
			if(optionListIndex >= 0 && optionListIndex <= 4)
			{
				effectFocus = optionListIndex;
				effectStart = 0;
			}
			if(optionListIndex > 4)
			{
				effectFocus = 4;
				effectStart = optionListIndex - effectFocus;
			}
			
			for(var i = 0; i < (effectArray.length>5?5:effectArray.length); i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = effectArray[effectStart + i];
			}
			for(var i = effectArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case PIC_INFO_INDEX://info
			break;
	}
}

function setSPOption()
{
	switch(optionIndex)
	{
		case PIC_PRESET_INDEX://picture preset
			//multimedia.setPicPicturePreset(optionListIndex);
            if(0 == isXVYCCEnable)
            {
                setting.pictureMode = optionListIndex;
                $('picturePresetContent').innerText = picturePresetArray[4 == optionListIndex ? 5 : optionListIndex];
            }
            else
            {
                setting.pictureMode = pictureModeTransform(optionListIndex);
                $('picturePresetContent').innerText = picturePresetArray[optionListIndex];
            }
			optionInfoArray[0] = optionListIndex;
			toOption(0);
			/*
			$('picturePresetBar').style.display = 'none';  //add yums:点击ok实现隐藏。
			$('focus').style.display = 'none';
			focusTab = DISPLAY_AREA;			
			if(pptStateBeforeToOption == 1)
			{
				multimedia.setPicturePPTState(1);
				pptState = 1;
				pptStateBeforeToOption = 0;
			}
			*/
			//hideMenu(0, DISPLAY_AREA);
			return;
		case PIC_PLAYMODE_INDEX://repeat mode
			console.log("YM setSPOtion repeat mode :" + optionListIndex);
			multimedia.pictureRepeatMode = optionListIndex;   //chen cheng
			//multimedia.setPictureRepeatMode(optionListIndex);
			$('playModeContent').innerText = playModeArray[optionListIndex];
			optionInfoArray[optionIndex] = optionListIndex;
			stopElementScroll(inforListSpan[optionListIndex]);
			break;
		case PIC_DURATION_INDEX://duration
			multimedia.setPictureDuration(optionListIndex);
			$('durationContent').innerText = durationArray[optionListIndex];
			optionInfoArray[optionIndex] = optionListIndex;
			stopElementScroll(inforListSpan[optionListIndex]);
			break;
		case PIC_EFFECT_INDEX://effect
			multimedia.setPictureEffect(optionListIndex);
			$('effectContent').innerText = effectArray[optionListIndex];
			optionInfoArray[optionIndex] = optionListIndex;
			stopElementScroll(inforListSpan[effectFocus]);
			break;
		case PIC_INFO_INDEX://info
			//$('information').style.display = 'none';
			toLeft();
			return;
			break;
	}
	$('optionInfoList').style.display = "none";
	optionInfoArray[0] = optionListIndex;

	focusTab = OPTION_AREA;
	resetFocusShape();
	$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + (optionIndex * focusOptionHeight) + "px";
	$('optionInfoFocus').src = "images/Focus_USB_1.png"  //option中焦点变为可用
}

function doMenuSelect()
{
	console.log("YM deMenuSelect() menuFocusIndex:"+menuFocusIndex);
	switch(menuFocusIndex)
	{
		case 0://play & pause
			/*
			if(playStatus == S_PLAY)
			{
				playStatus = S_PAUSE;
				multimedia.picturePause();
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
			}
			else if(playStatus == S_PAUSE)
			{
				playStatus = S_PLAY;
				multimedia.pictureResume();
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
				multimedia.testLog("after playing");
			}
			*/
			
			if(pptState == 0)  //add yums
			{
				if(playStatus == S_PAUSE)
				{
					multimedia.pictureResume();
					playStatus = S_PLAY;
				}
				
				multimedia.setPicturePPTState(1);
				pptState = 1;  //multimedia.getPicturePPTState();
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
				menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
				menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
				menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+-Disable.png";
				menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom--Disable.png";
				
			}
			else if(pptState == 1)
			{
				if(playStatus == S_PAUSE)
				{
					multimedia.pictureResume();
					playStatus = S_PLAY;
				}
				multimedia.setPicturePPTState(0);
				pptState = 0; //multimedia.getPicturePPTState();
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
				menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
				menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
				menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
				menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
			}
			
			break;
		case 1://left rotate
			multimedia.testLog("before left rotate");
			multimedia.picturePause();
			playStatus = S_PAUSE;
			multimedia.pictureRotate(1);
			multimedia.testLog("after left rotate!");
			break;
		case 2://right rotate
			multimedia.testLog("before right rotate");
			multimedia.picturePause();
			playStatus = S_PAUSE;
			multimedia.pictureRotate(0);
			multimedia.testLog("after right rotate!");
			break;
		case 3://zoom +
		{
			if(zoomNum < 3)
			{
				/*chen cheng
				zoomFlag = zoomFlag * 2;
				console.log("zoom in = " + zoomFlag);
				multimedia.pictureZoomIn(zoomFlag); //add yums
				focusTab = MENU_AREA;
				clearTimeout(menuTimer);
				hideMenu(FADE_TIME, ZOOM_AREA);
				return;
				*/
				zoomNum++;
				if(zoomNum>0)//判断当前点击zoom+ zoom-的总次数
				{
					//$('thumbNail').getElementsByTagName("img")[0].src = multimedia.getPicThumbNail(currentPlayList[3].path,300,169);
					
					//setTimeout(function()
					//{
						//multimedia.picturePlay(currentPlayList[multimedia.getNowPicturePosition()].path);
						//slidshow rocateL  rocateR 变为不可用
						menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Disable.png";
						menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
						menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
						
						/**********鸟瞰图背景图片的显示。2014-11-10 龙辉要求第一期不做鸟瞰图(所以屏蔽掉)
						var thumbnail = pictureFileInfo.thumbnail;
						console.log("YM pictureFileInfo.thumbnail:" + thumbnail);
						if(thumbnail == null || thumbnail == "")
							thumbnail = "images/USB-picture-Default.png";
						var img = $("thumbNail").getElementsByTagName("img");
						img[0].src = "images/USB-picture-Default.png";
						loadImage(img[0],thumbnail,300,169);
						*/
						
						$("LR_Tips").style.display = "none";
						$("upTips").style.display = "block";
						//$("thumbNail").style.display = "block";
						//$("LR_Tips").style.display = "none";			
			
						zoomFlag = Math.pow(2,zoomNum - 1);
						console.log("zoom in = " + zoomFlag);
						multimedia.pictureZoomIn(zoomFlag); //add yums	
						
						//var img = $("thumbNail").getElementsByTagName("img");
						//console.log("YM top.g_currentMedia.path:" + top.g_currentMedia.path);
						//img[0].src = "images/USB-picture-Default.png";
									
						//loadImage(img[0],currentPlayList[multimedia.getNowPicturePosition()].path,300,169);
						
						console.log("YM thumbNailX" + thumbNailX);
						console.log("YM thumbNailY" + thumbNailY);
						console.log("YM thumbNailW" + thumbNailW);
						console.log("YM thumbNailH" + thumbNailH);
						
						
						//$("thumbNail").getElementsByTagName("img")[0].style.marginLeft = thumbNailX;
						//$("thumbNail").getElementsByTagName("img")[0].style.marginTop = thumbNailY;
						//$("thumbNail").getElementsByTagName("img")[0].style.width = thumbNailW;
						//$("thumbNail").getElementsByTagName("img")[0].style.height = thumbNailH;
						
						
						//autoResizeImage(img[0],300,169);
						
						//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
						//autoRePositionVisibleWindow();
						//autoRePositionThumbshade();
						clearTimeout(menuTimer);
						
					//},0)
					
				}
				else if(zoomNum < 0)
				{
					zoomFlag = Math.pow(2,zoomNum*(-1) - 1);
					console.log("zoom out = " + zoomFlag);
					multimedia.pictureZoomOut(zoomFlag); //add yums	
					$("upTips").style.display = "none";
					$("thumbNail").style.display = "none";
					//console.log("YM zoomIn menuTimer:" + menuTimer);
					clearTimeout(menuTimer);
				}
				else
				{
					zoomFlag = 0;
					console.log("zoom In = " + zoomFlag);
					multimedia.pictureZoomIn(zoomFlag); //add yums
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					$("upTips").style.display = "none";
					$("thumbNail").style.display = "none";
					//hideMenu(FADE_TIME, DISPLAY_AREA);
				}	
			}
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					$("zoomInImg").style.display = "block";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					console.log("YM fffff 17:" + focusTab);
					focusTab = DISPLAY_AREA;
				}
				
			},5000)
			return;
			break;
		}
		case 4://zoom -
		{
			if(zoomNum > -3)
			{
				/*chen cheng
				var tmp = parseInt(zoomFlag / 2);
				zoomFlag = (tmp == 0) ? 1: tmp;
				console.log("zoom out = " + zoomFlag);
				multimedia.pictureZoomOut(zoomFlag);
				console.log("YMYMYMYMYM")
				focusTab = MENU_AREA;
				hideMenu(FADE_TIME, ZOOM_AREA);
				return;
				*/
				zoomNum--;
				if(zoomNum>0)//判断当前点击zoom+ zoom-的总次数
				{
					
					zoomFlag = Math.pow(2,zoomNum - 1);
					console.log("zoom in = " + zoomFlag);
					multimedia.pictureZoomIn(zoomFlag); //add yums
					
					//getCurrentPicZoomRegion();//获取当前图片原图和缩放后图片在电视窗口可视区域的坐标。
					//autoRePositionVisibleWindow();
					//autoRePositionThumbshade();
				}
				else if(zoomNum < 0)
				{
					zoomFlag = Math.pow(2,zoomNum*(-1) - 1);
					console.log("zoom out = " + zoomFlag);
					multimedia.pictureZoomOut(zoomFlag); //add yums	
				}
				else
				{
					zoomFlag = 0;
					console.log("zoom out = " + zoomFlag);
					multimedia.pictureZoomOut(zoomFlag); //add yums	
				}
				
				if(zoomFlag != 0)
				{
					//slidshow rocateL  rocateR 变为不可用
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Disable.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";

					
					console.log("YM zoomOut menuTimer:" + menuTimer);
					clearTimeout(menuTimer);
				}
				else
				{
					////slidshow rocateL  rocateR 变为可用
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					
					$("upTips").style.display = "none";
					$("thumbNail").style.display = "none";
					//$("LR_Tips").style.display = "block";
					//hideMenu(FADE_TIME, DISPLAY_AREA);
				}
				
				//hideMenu(FADE_TIME, DISPLAY_AREA);
			}
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					console.log("YM fffff 18:" + focusTab);
					focusTab = DISPLAY_AREA;
				}
			},5000)
			return;	
			break;
		}
		case 5://bmg
			if(top.g_BGMmdiaFolderPath == null || top.g_BGMmdiaFolderPath == "")
			{
				doOpenSearchFile();
			}
			else 
			{
				g_mediaFolderPath = top.g_BGMmdiaFolderPath;
				currentList = getFileList(g_mediaFolderPath, 0, -1);
				setPageListVCount();
				listIndex = top.g_BGMmediaListIndex;
				listStart = top.g_BGMmediaListStart;
				g_path = top.g_BGMmediaPath;
				g_listIndex = top.g_BGMmediaPathIndex;
				fileListDepth = top.g_fileListDepth;
				
				if(musicPlayStatus != -1)
				{
					menuBar.style.display = "none";
					$("BGMArea").style.display = "block";
					focusTab = BGM_AREA;
				}
				else 
				{
					doMusicPlay(currentList[listIndex + listStart].path);
				}
				
				if(multimedia.getMediaFileParser() == 1)
				{
					g_mediaFolderPath = "";
					listIndex = 0;
					listStart = 0;
					g_path = "";
					g_listIndex = "";
				}
			}
			return;
			break;
		default:
			break;
	}
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function resetFocusShape()
{
	switch(focusTab)
	{
		case DISPLAY_AREA:
			break;
			
		case OPTION_AREA:
			$('focus').style.display = "none";
			$('optionInfoListFocus').style.display="none";
			$('optionInfoFocus').style.display = "block";
			FOCUS_DISTANCE = 80;
			FOCUS_TOP_DISTANCE = 55;
			$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + "px";
			$('optionInfoFocus').style.left = 5 + "px";
			$('optionInfoFocus').style.width = 530 + "px";
			$('optionInfoFocus').style.height = 70 + "px";
			break;
			
		case OPTION_DETAIL_AREA:
			$('focus').style.display = "none";
			$('optionInfoFocus').src = "images/Focus_USB_1_.png"  //option中焦点变为不可用
			$('optionInfoListFocus').style.display = "block"
			FOCUS_DISTANCE = 80;
			FOCUS_TOP_DISTANCE = 55;
			$('optionInfoListFocus').style.top = 103 + 3 + "px";
			$('optionInfoListFocus').style.left = 0 + "px";
			$('optionInfoListFocus').style.width = 300 + "px";
			$('optionInfoListFocus').style.height = 70 + "px";
			break;
			
		case PLAY_LIST_AREA:
			console.log("YM resetFocusShape() PLAY_LIST_AREA");
			
			//$('focus').src = "images/Focus-picture.png";
			$('focus').src = "images/USB-Picture-Thumbnail-Focus.png";
			$('focus').style.display = "block";
			FOCUS_DISTANCE = 300;
			FOCUS_LEFT_DISTANCE = 72;
			$('focus').style.top = 780 + "px";
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
			$('focus').style.width = 276 + "px";
			$('focus').style.height = 290 + "px";
			break;
			
		case BGM_AREA:
			bgmFocusIndex = 1;
			FOCUS_DISTANCE = 157;
			FOCUS_LEFT_DISTANCE = 760;
			$('focus').style.top = 579 + "px";
			$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE + "px";
			$('focus').style.width = 86 + "px";
			$('focus').style.height = 86 + "px";
			break;
			
		case PRESET_AREA:
			//
			$('focus').style.display = 'none';
			FOCUS_DISTANCE = 230;
			FOCUS_LEFT_DISTANCE = 318;//325;
			$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
			break;
			/*
			$('focus').style.position = 'absolute';
			$('focus').style.display = "block";
			$('focus').src = "images/Focus_USB_2.png";
			FOCUS_DISTANCE = 231;
			FOCUS_LEFT_DISTANCE = 225 + 312 + 15 + 3 - 10;
			$('focus').style.top = 1080 - 70 - 90 + 16 + 3 + "px";
			$('focus').style.left = FOCUS_LEFT_DISTANCE + "px";
			$('focus').style.width = 225 + "px";
			$('focus').style.height = 90 - 32 + "px";
			break;*/
			
		case MENU_AREA:  //add yums
			console.log("YM Menu_Area");
			changeMenuFocus(0);
			break;
		case LIST_AREA:
			$('focus').src = "images/BGM_Focus.png";
			$('focus').style.display = "block";
			FOCUS_DISTANCE = 630;//GUI中给出的背景音乐中文件索引菜单中焦点的坐标
			FOCUS_LEFT_DISTANCE = 72;
			$('focus').style.top = topDistance + "px";//GUI中给出的背景音乐中文件索引菜单中焦点的坐标
			//$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
			$('focus').style.left = 630 + "px";
			$('focus').style.width = 700 + "px";
			$('focus').style.height = 94 + "px";
			break;
		
		default:
			$('focus').style.display = "none";
			break;
	}
}

function setPlayListMaxLength()
{
	var length = currentPlayList.length;
	if(length > 6)
	{
		MAX_LENGTH_ONE_PAGE = 6;
	}
	else
	{
		MAX_LENGTH_ONE_PAGE = length;
	}
}

function getMediaFileDuration(path)
{
	console.log("getMediaFileDuration");
	fileDuration = multimedia.getMediaFileDuration(path);
	if(fileDuration < 0)
	{
		fileDuration = 0;
	}
	return doTime(fileDuration);
}

function hideOptionMenu()
{
	stopElementScroll(optionFirstMenuLi[optionIndex]);
	//$("optionInfo").getElementsByTagName("img")[optionIndex].src="images/Icon-R-Disable.png";
	setOptionMenuFocus(-1,-1);
	$('option').style.display = 'none';
	for(var i=0;i<informationSpan.length;i++)
	{
		stopElementScroll(informationSpan[i]);
	}
	for(var j=0;j<inforListSpan.length;j++)
	{
		stopElementScroll(inforListSpan[j]);
	}
}

function hideMenu(time, area)
{
	console.log("hideMenu clear menuTimer:" + menuTimer);
	clearTimeout(menuTimer);
	//console.log("hidehide");
	menuTimer = setTimeout(function(){
		top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
		menuBar.style.display = 'none';
		$('bottomTips').style.display = "none";
		$('playListRightArrow').style.display = "none";
		$('playListLeftArrow').style.display = "none";
		$('focus').style.display = 'none';
		//$('option').style.display = 'none';
		hideOptionMenu();  //隐藏option菜单，并停止其中的滚动效果
		$("optionBarArea").style.display = "none";
		$('BGMArea').style.display = 'none';
		$('playList').style.display = 'none';
		$('optionInfoList').style.display = 'none';
		$('optionInfoFocus').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		$('info').style.display = 'none';
		$('upTips').style.display = 'none';
		//$("LR_Tips").style.display = "none";
		$('thumbNail').style.display = 'none';
		$("zoomInImg").style.display = "none";
		$("searchFile").style.display = "none";
		
		showIconEmptyTips(-1);
		//$("tipsBox").style.display = "none";
		//console.log("YM hideMenu() focusTab:"+focusTab);
		if(pptStateBeforeToOption == 1)
		{
			multimedia.setPicturePPTState(1);
			pptState = 1;
			pptStateBeforeToOption = 0;
		}
		
		if(focusTab == PRESET_AREA)
		{
			//multimedia.setPicPicturePreset(optionInfoArray[0]); 
			setting.previewPictureMode(optionInfoArray[0]);  //add yums:2014-12-1
		}
		
		if (focusTab == PLAY_LIST_AREA)
		{
			//console.log("YM clickFlageOnPlayList:"+clickFlageOnPlayList);
			multimedia.stopThumbnailTask();
			if(isStop == 1)
			{
				console.log("YM settimeout()");
				downMost = false;
				setPlayListFocus(-1,-1);
				mediaPlay(currentPlayList[currentListPosition].path);//从当前位置开始播放position= getNowPicturePosition()
				picPlayingTimeOut = false;
				isStop = 0;
			}
		}
		
		
		//clickFlageOnPlayList = 0;
		console.log("YM fffff 20:" + focusTab);
		focusTab = area;
	}, time);
	//console.log("hideMenu  menuTimer:" + menuTimer);
}

function refreshPlayList()
{
	var startPosition = playListStart;//add yums:startPage 去缩略图的起始位置页
	var length = currentPlayList.length;
	
	//console.log("YM refreshPlayList() playListStart:"+playListStart);
	//console.log("YM currentPlayList.length:"+ length);
	
	var listSpan = $('playList').getElementsByTagName('span');
	var listImg = $('playList').getElementsByTagName('img');
	
	/*
	for(var i = 0; i < (length-start > 5?6:(length-start)); i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			listSpan[i].style.display = "none";
			listImg[i].style.display = "none";
			continue;
		}
		listSpan[i].style.display = "block";
		listImg[i].style.display = "block";
		
		var num = start + i;  //add yums
		
		console.log("YM refreshPlayList() currentPlayList" + num +currentPlayList[start + i].path);
		var tmp = multimedia.getPicThumbNail(currentPlayList[start+i].path,6,250,250);//add yums  取缩略图
		
		listImg[i].src = tmp;  //add yums;
		
		listSpan[i].innerText = currentPlayList[start + i].name;
		//listImg[i].src = currentPlayList[start + i].img;
	}
	*/
	
	for(var i = 0; i<6 ; i++) //add yums:重新更新playlist中的内容，防止翻到最后一页时出现问题。
	{
		listImg[i].src = "";  //add yums;
		listSpan[i].innerText = "";
		listSpan[i].style.display = "none";
		listImg[i].style.display = "none";
	}

	//var num = ((length - startPage*6 ) <6) ? (length - startPage*6):6;//add yums:非最后一页，playlist大小为6，最后一页playlist大小为length - 页数*6
	var num = ((length - startPosition) < 6) ? (length - startPosition):6;
	
	for (var i = 0; i< num; i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			listSpan[i].style.display = "none";
			listImg[i].style.display = "none";
			continue;
		}
		listSpan[i].style.display = "block";
		listImg[i].style.display = "block";
		
		//console.log("YM refreshPlayList() currentPlayList[" + num + "]:"+currentPlayList[startPosition + i].path);
		
		var tmpPicPath = multimedia.getThumbNail(currentPlayList[startPosition + i].path);
		//var begin = new Date().getTime();
		//var tmpPicPath = (multimedia.getMediaPictureFileInfo(currentPlayList[startPosition + i].path)).thumbnail;
		//console.log("multimedia.getMediaPictureFileInfo:" + (new Date().getTime() - begin));
		listImg[i].src = (tmpPicPath != null && tmpPicPath != "")
				? tmpPicPath : "images/picture_icon_2.png";
		listSpan[i].innerText = currentPlayList[startPosition + i].name;
	}
}

function mediaPlay(path)
{
	//$("unavailable").style.display = 'none';
	if(!dmrFlag)
		multimedia.stopThumbnailTask();
	return multimedia.picturePlay(path);
}

function playPre()
{
	//multimedia.playPreMediaFile();
}


function playNext()
{
	//multimedia.playNextMediaFile();
}

function showConsoleTipsArrow(left,right)  //0 do not show , 1 show
{
	console.log("YM showConsoleTipsArrow:" + left + right+pptState+pptStateBeforeToOption);
	if(pptState||pptStateBeforeToOption)
		return;
	clearTimeout(consoleTimer);
	$("LR_Tips").style.display = "block";
	if(left == 0)
	{
		$('LR_Tips').getElementsByTagName("img")[0].style.display = "none";	
	}
	else if(left == 1)
	{
		$('LR_Tips').getElementsByTagName("img")[0].style.display = "block"; 
	}
	
	if(right == 0)
	{
		$('LR_Tips').getElementsByTagName("img")[1].style.display = "none";
	}
	else if(right == 1)
	{
		$('LR_Tips').getElementsByTagName("img")[1].style.display = "block" 
	
	}
	consoleTimer=setTimeout(function(){
		$("LR_Tips").style.display = "none";
	},3000);
}


function loadImage(objImg,imgSrc,maxWidth,maxHeight)
{
	console.log("YM objImg:" + objImg.src);
	console.log("YM imgSrc:" + imgSrc);
	objImg.src = imgSrc;
	console.log("YM objImg.complete:" + objImg.complete);
	if (objImg.complete) { 
		console.log("loadImage:already in the cache!");
		autoResizeImage(objImg,maxWidth,maxHeight);
        return; 
     }
	 objImg.onload = function () {
		console.log("loadImage:load completed!");
		autoResizeImage(objImg,maxWidth,maxHeight);
     };
}

function autoResizeImage(objImg,maxWidth,maxHeight){ //add yums
	console.log("YM autoResizeImage1");
	var img = new Image();
	img.src = objImg.src;
	var hRatio;
	var wRatio;
	var Ratio = 1;
	var w = img.width;
	var h = img.height;
	wRatio = maxWidth / w;  //0.29
	hRatio = maxHeight / h; //0.22
	
	console.log("YM wRatio:" + wRatio);
	console.log("YM hRatio:" + hRatio);
	if (maxWidth ==0 && maxHeight==0){
		Ratio = 1;
	}else if (maxWidth==0){
		if (hRatio<1) Ratio = hRatio;
	}else if (maxHeight==0){
		if (wRatio<1) Ratio = wRatio;
	}else{
		Ratio = (wRatio<=hRatio?wRatio:hRatio);
	}
	
	console.log("YM Ratio:" + Ratio);
	
	
	w = w * Ratio;
	h = h * Ratio;

	objImg.style.height =h + "px";
	objImg.style.width = w + "px";
	
	
	console.log("YM autoResizeImage1 h:" + h);
	console.log("YM autoResizeImage1 w:" + w);
	
	
	//$("thumbNail").getElementsByTagName("img")[0].style.height= h + "px";
	//$("thumbNail").getElementsByTagName("img")[0].style.width= w + "px";
	
	
	
	/*
	if(h < (maxHeight)) {
        objImg.style.marginTop = ((maxHeight - h) / 2) + "px";
		console.log("YM objImg.style.marginTop: " + objImg.style.marginTop);
    }
	if(w < maxWidth) {
		objImg.style.marginLeft = ((maxWidth - w) / 2) + "px";
		console.log("YM objImg.style.marginLeft: " + objImg.style.marginLeft);
	}
	*/
	if(h < (maxHeight)) {
        objImg.style.marginTop = ((maxHeight - h) / 2) + "px";
		thumbNailY = (maxHeight - h) /2;
		console.log("YM objImg.style.marginTop: " + objImg.style.marginTop);
    }
	if(w < maxWidth) {
		objImg.style.marginLeft = ((maxWidth - w) / 2) + "px";
		thumbNailX = (maxWidth - w) / 2;
		console.log("YM objImg.style.marginLeft: " + objImg.style.marginLeft);
	}
	
	thumbNailW = w;
	thumbNailH = h;
	//autoRePositionVisibleWindow();
	
}

function getCurrentPicZoomRegion()
{		
	console.log("YM  getCurrentPicZoomRegion()");
	pictureRegion = multimedia.getCurrenPicZoomRegion();
	
	if(pictureRegion == null || pictureRegion == undefined )
	{
		console.log("YM pictureRegion is null");
	}
	rawRegion = pictureRegion.rawPicture();
	viewRegion = pictureRegion.viewPicture();
						
	if(rawRegion == null || rawRegion == undefined)
		console.log("YM rawRegion is null");
	
	if(viewRegion == null || viewRegion == undefined)
		console.log("YM viewRegion is null");	
		
	rawX = rawRegion.x;
	rawY = rawRegion.y;
	rawW = rawRegion.width;
	rawH = rawRegion.height;
						
	viewX = viewRegion.x;
	viewY = viewRegion.y;
	viewW = viewRegion.width;
	viewH = viewRegion.height;
						
	console.log("YM rawX: " + rawX);
	console.log("YM rawY: " + rawY);
	console.log("YM rawW: " + rawW);
	console.log("YM rawH: " + rawH);
											
	console.log("YM viewX: " + viewX);
	console.log("YM viewY: " + viewY);
	console.log("YM viewW: " + viewW);
	console.log("YM viewH: " + viewH);
}


function autoRePositionVisibleWindow()
{
	console.log("YM autoRePositionVisibleWindow()");
	var visibleWindow = $("thumbNail2");
	var FscreenWindown = $("thumbNail");//.getElementsByTagName("img")[0]; //鸟瞰图全图
	tPicW = 300;//parseFloat(FscreenWindown.style.width);  //鸟瞰图全图坐标
	tPicH = 169;//parseFloat(FscreenWindown.style.height);
	tPicX = 0;// parseFloat(FscreenWindown.style.marginLeft);
	tPicY = 0;//parseFloat(FscreenWindown.style.marginTop);
	
	console.log("YM tPicX: " + tPicX);
	console.log("YM tPicY: " + tPicY);
	console.log("YM tPicW: " + tPicW);
	console.log("YM tPicH: " + tPicH);
	
	
	pViewedX = viewX;
	pViewedY = viewY;
	pViewedW = viewW;
	pViewedH = viewH;
	
	pPicX    = rawX;
	pPicY    = rawY;
	pPicW    = rawW;
	pPicH    = rawH;
	
	
	tViewedX = tPicW*(pViewedX - pPicX)/pPicW;  //鸟瞰图可见视图坐标
	tViewedY = tPicH*(pViewedY - pPicY)/pPicH;
	tViewedW = pViewedW*tPicW/pPicW;
	tViewedH = pViewedH*tPicH/pPicH;
	
	console.log("YM tViewedX: " + tViewedX);
	console.log("YM tViewedY: " + tViewedY);
	console.log("YM tViewedW: " + tViewedW);
	console.log("YM tViewedH: " + tViewedH);
	
	//var ceilY = Math.ceil(tViewedY);
	//var floorH = Math.floor(tViewedH);
	//console.log("YM ceilY:" + ceilY);
	//console.log("YM floorH:" + floorH);

	
	visibleWindow.style.marginLeft = tPicX + tViewedX + "px";
	visibleWindow.style.marginTop  = tPicY + tViewedY + "px";
	visibleWindow.style.width      = tViewedW - 4 + "px";
	visibleWindow.style.height     = tViewedH - 4  + "px";
}

function autoRePositionThumbshade()
{
	console.log("YM autoRePositionThumbshade()");
	var windown1 = $('div1');
	var windown2 = $('div2');
	var windown3 = $('div3');
	var windown4 = $('div4');
	
	windown1.style.left = 0 + "px";
	windown1.style.top  = 0 + "px";
	windown1.style.width  = tViewedX + "px";
	windown1.style.height  = tViewedY + tViewedH + "px";

	windown2.style.left = tViewedX + "px";
	windown2.style.top  =  0 + "px";
	windown2.style.width  = (300 - tViewedX) + "px";
	windown2.style.height  = tViewedY + "px";

	windown3.style.left = tViewedX + tViewedW  + "px";
	windown3.style.top  =  tViewedY + "px";
	windown3.style.width  = (300 - tViewedX - tViewedW) + "px";
	windown3.style.height  = (169 - tViewedY) + "px";
	
	windown4.style.left = 0  + "px";
	windown4.style.top  =  tViewedY + tViewedH + "px";
	windown4.style.width  = (tViewedX + tViewedW) + "px";
	windown4.style.height  = (169 - tViewedY - tViewedH) + "px";
}




function addMouseListener()
{
	console.log("YM addMouseListener()");
	document.body.onmousedown = function(evt){evt.preventDefault();
		//console.log("YM document.body onmousedown()");
		if($("consoleTip").style.display == "block")
		{
			console.log("YM consoleTips == block")
			clearTimeout(initSetTimeOut);
			console.log("showLeftArrowFlage:" + showLeftArrowFlage);
			console.log("showRightArrowFlage:" + showRightArrowFlage);
			$('consoleTip').style.display = "none";
			//bottomAreaDiv.style.display = "block";
			//showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
			return;
		}

		if(evt.button == 2)
		{
			if(bodyMouseFlag)
			{
				toBack();
			}
			else
			{
				bodyMouseFlag = true;
			}
			
		}
		if(focusTab == DISPLAY_AREA)
		{
			if(evt.button == 0)
			{
				if(bodyMouseDown)
					clickBodyElementFunction();
				bodyMouseDown = 1;
			}
		}
	}
	
	
	bottomAreaDiv.onmouseover = function(evt)
	{
		console.log("bottomAreaDiv.onmouseover");
		//console.log("YM clickMenuImg.onmousedown");
		bodyMouseDown = 0;
		console.log("YM buttom.style:" + bottomAreaDiv.style.display);
		if(focusTab == DISPLAY_AREA && bottomAreaDiv.style.display == "block")
		{
			toDown();
		}
		bodyMouseDown = 1;
	}


	//console.log("YM clickMenuImg");
	for(var i = 0;i<clickMenuImg.length;i++)
	{
		clickMenuImg[i].setAttribute(clickIndexAttri, i);
		clickMenuImg[i].onmousedown = function(evt){
			//console.log("YM clickMenuImg.onmousedown");
			if(evt.button == 0)
				clickMenuImgFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("YM clickOptionMenu1");
	for(var i = 0;i<clickOptionMenu1.length;i++) //option
	{
		clickOptionMenu1[i].setAttribute(clickIndexAttri, i);
		clickOptionMenu1[i].onmousedown = function(evt){
			//console.log("YM clickOptionMenu1.onmousedown");
			if(evt.button == 0)
				clickOptionMenu1Function(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("YM clickOptionMenu2");
	for(var i = 0;i < clickOptionMenu2.length;i++) //option 中的二级菜单
	{
		clickOptionMenu2[i].setAttribute(clickIndexAttri, i);
		clickOptionMenu2[i].onmousedown = function(evt){
			//console.log("YM clickOptionMenu2.onmousedown");
			if(evt.button == 0)
				clickOptionMenu2Function(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("YM clickPicturePresetSpan");
	for(var i = 1; i < clickPicturePresetSpan.length; i++) //picturepreset
	{
		clickPicturePresetSpan[i].setAttribute(clickIndexAttri, i - 1);
		clickPicturePresetSpan[i].onmousedown = function(evt){
			//console.log("YM clickPicturePresetSpan.onmousedown");
			if(evt.button == 0)//left key
				clickPicturePresetFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("YM listInfoUpArrow");
	$('listInfoUpArrow').onmousedown = function(evt){
		//console.log("YM listInfoUpArrow.onmousedown");
		if(evt.button == 0)//up key
			clickListInfoUpArrow();
	}

	//console.log("YM listInfoBottomArrow");
	$('listInfoBottomArrow').onmousedown = function(evt){
		//console.log("YM listInfoBottomArrow.onmousedown");
		if(evt.button == 0)//bottom key
			clickListInfoBottomArrow();
	}
	
	
	//console.log("YM clickPlayListLi");
	for(var i = 0; i < clickPlayListLi.length; i++)
	{
		clickPlayListLi[i].setAttribute(clickIndexAttri, i);
		//console.log("YM clickPlayListLi:" + i);
		clickPlayListLi[i].onmousedown = function(evt){
			//console.log("YM clickPlayListLi.onmousedown");
			if(evt.button == 0)//left key
				clickPlayListFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("YM clickPlayListLeftArrow");
	$('playListLeftArrow').onmousedown = function(evt){
		//console.log("YM playListLeftArrow.onmousedown");
		if(evt.button == 0) //left key
			clickPlayListLeftArrowFunction();
	}
	
	//console.log("YM clickPlayListRightArrow");
	$('playListRightArrow').onmousedown = function(evt){
		//console.log("YM playListRightArrow.onmousedown");
		if(evt.button == 0) //right key
			clickPlayListRightArrowFunction();
	}
	
	
	/*
	console.log("YM　bodyElement");
	document.body.onmousedown = function(evt){
		//console.log("YM　bodyMouseDown1:" + bodyMouseDown);
		if(focusTab == DISPLAY_AREA)
		{
			if(evt.button == 0)
			{
				if(bodyMouseDown)
					clickBodyElementFunction();
				bodyMouseDown = 1;
			}
		}
		//console.log("YM　bodyMouseDown2:" + bodyMouseDown);
	}
	*/
	
	//console.log("YM LR_TipsArrow");
	for(var i = 0;i< clickLR_TipsArrow.length;i++)
	{
		clickLR_TipsArrow[i].setAttribute(clickIndexAttri, i);
		clickLR_TipsArrow[i].onmousedown = function(evt){
			bodyMouseDown = 0;
			if(focusTab == DISPLAY_AREA)
			{
				if(evt.button == 0)
				{
					clickLR_TipsArrowFunction(parseInt(this.getAttribute(clickIndexAttri)));
					
					
				}
			}
		}
	}
	
	$("optionBarUpArea").onmousedown = function(evt){
		if(evt.button == 0) //left key
			testLog("clickOptionBarUpArrow.onmousedown");
			clickOptionBarUpArea();
	}
	
	$("optionBarDownArea").onmousedown = function(evt){
		if(evt.button == 0) //left key
			clickOptionBarDownArea();
	}
	
	for(var i = 0;i<clickOptionBarBlockDiv.length;i++)
	{
		clickOptionBarBlockDiv[i].setAttribute(clickIndexAttri, i);
		clickOptionBarBlockDiv[i].onmousedown = function(evt){
			if(evt.button == 0)
			{
				clickOptionBarBlockDivFuntion(evt);
			}
		}
	}
	
	//背景音乐文件索引中的元素标签的鼠标事件注册
	clickGoBackBoxDiv.onmousedown = function(evt){
		if(evt.button == 0) //left key
			clickGoBackBoxDivFunction();
	}
	
	clickFileColumnUp0Div.onmousedown = function(evt){
		if(evt.button == 0) //left key
			clickFileColumnUp0DivFunction();
	}
	
	clickFileColumnDown0Div.onmousedown = function(evt){
		if(evt.button == 0) //left key
			clickFileColumnDown0DivFunction();
	}
	
	for(var i = 0;i<clickFileColumnUl0Li.length;i++)
	{
		clickFileColumnUl0Li[i].setAttribute(clickIndexAttri, i);
		clickFileColumnUl0Li[i].onmousedown = function(evt){
			if(evt.button == 0)
			{
				clickFileColumnUl0LiFuntion(parseInt(this.getAttribute(clickIndexAttri)));
			}
			//else if(evt.button == 2)
		//	{
				//testLog("evt.button == 2");
				//bodyMouseFlag = false;
				//doSearchFileSelect(-1);
			//}
		}
	}
	
	clickFileColumn0Div.onmousedown = function(evt){//整个文件索引菜单
		if(focusTab != LIST_AREA)
		{
			return;
		}
		
		
		if($('iconListEmptyTips').style.display == 'block')
		{
			if(evt.button == 2)
				bodyMouseFlag = false;
			$('iconListEmptyTips').style.display == 'none';
			//showIconEmptyTips(-1);
			return;
		}
		
		if(evt.button == 2)
		{
			testLog("evt.button == 2");
			bodyMouseFlag = false;
			doSearchFileSelect(-1);
		}	
	}
	
	clickIconListEmptyTips.onmousedown = function(evt){
		if($('iconListEmptyTips').style.display == 'block')
		{
			if(evt.button == 2)                               
                bodyMouseFlag = false;
			showIconEmptyTips(-1);
		}
	}
	
	for(var i=0;i<clickBGMMusicImg.length;i++)
	{
		clickBGMMusicImg[i].setAttribute(clickIndexAttri, i);
		clickBGMMusicImg[i].onmousedown = function(evt){
			if(evt.button == 0)
			{
				clickBGMMusicImgFuntion(parseInt(this.getAttribute(clickIndexAttri)));
			}
		}
	}
	
}

function clickMenuImgFunction(index)
{
	if(focusTab != MENU_AREA)
		return;
	if(zoomFlag != 0)//缩放状态
	{
		if(index>=0 && index < 3)//缩放状态，播放 左旋 右旋三个按钮不能响应mouse 事件
			return;
		changeMenuFocus(index - menuFocusIndex);
		doMenuSelect();
	}
	else
	{
		changeMenuFocus(index - menuFocusIndex);
		if(pptState == 1)
		{
			if(index !=0)
				return;
		}
		
		doMenuSelect();
		if(menuFocusIndex == 5)
		{
			clearTimeout(menuTimer);
			menuBar.style.display = "none";
			return;
		}
	}
	
}

function clickOptionMenu1Function(index)  //option中的一级菜单
{
	console.log("YM clickOptionMenu1Function index:" + index);
	//if(focusTab != OPTION_AREA)
		//return;
	if(focusTab == OPTION_DETAIL_AREA)
	{
		toBack();
	}	
	stopElementScroll(optionFirstMenuLi[optionIndex]);
	optionIndex = index;
	$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
	
	setTimeout(function(){
		
		toRight();
	},50);
}

function clickOptionMenu2Function(index)
{
	console.log("YM clickOptionMenu2 Function index:" + index);
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	if(optionIndex == 3)
		optionListIndex = effectStart + index;
	else
		optionListIndex = index;
	//setSPOption();
	toOK();
}

function clickListInfoUpArrow()
{
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	toUp();
}

function clickListInfoBottomArrow()
{
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	toDown();
} 

function clickPicturePresetFunction(index)
{
	if(focusTab != PRESET_AREA)
		return;
	optionListIndex = index;
	$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
	setTimeout(function(){
		toOK();
	},50)
	
}

function clickPlayListFunction(index)
{
	if(focusTab != PLAY_LIST_AREA)
		return;
	playListIndex = index;
	$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px"; //add yums
	console.log("YM after focus");
	setTimeout(function(){
		console.log("YM before toOK()");
		toOK();
	},200)
	
}

function clickPlayListLeftArrowFunction()
{
	console.log("YM clickPlayListLeftArrowFunction");
	if(focusTab != PLAY_LIST_AREA)
		return;
	if(playListStart - 6 >= 0)
	{
		playListStart -= 6;
	}
	else
	{
		playListStart = 0;
	}
	refreshPlayList();
	arrowPlayListDisplay(playListStart);
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function clickPlayListRightArrowFunction()
{
	console.log("YM clickPlayListRightArrowFunction");
	if(focusTab != PLAY_LIST_AREA)
		return;
	if(playListStart + 6 < currentPlayList.length)
	{
		playListStart += 6;
		
		if(playListStart + playListIndex >= currentPlayList.length - 1)
		{
            playListIndex = currentPlayList.length - 1 - playListStart;
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
		}
	}
	refreshPlayList();
	
	arrowPlayListDisplay(playListStart);
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function clickOptionBarUpArea()
{
	testLog("click optionBarUpArrow");
	if(focusTab != OPTION_BAR_AREA)
	{
		return;
	}
	toUp();
}

function clickOptionBarDownArea()
{
	testLog("click optionBarDownArrow");
	if(focusTab != OPTION_BAR_AREA)
	{
		return;
	}
	toDown();
}

function clickOptionBarBlockDivFuntion(evt)
{
	if(focusTab != OPTION_BAR_AREA)
	{
		return;
	}
	testLog("evt.clientX:" + evt.clientX + "optionBarStyle2_left_offset:610");
	optionFocusIndex_2 = parseInt((evt.clientX - 610)*SHORT_BAR_MAX_VALUE/OPTION_BAR_LENGTH,10);
	var tmpMax = SHORT_BAR_MAX_VALUE;
	setBarValue(tmpMax);
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function clickGoBackBoxDivFunction()
{
	if(focusTab != LIST_AREA )
	{
		return;
	}
	doSearchFileSelect(-1);
}

function clickFileColumnUp0DivFunction()
{
	stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	if(focusTab != LIST_AREA )
	{
		return;
	}
	
	if(listStart - pageVCount >= 0)
	{
		listStart -= pageVCount;
	}
	else
	{
		listStart = 0;
	}
	
	testLog("clickFileColumnUp0DivFunction listStart:" + listStart);
	refreshFileList(currentList,fName);
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
}

function clickFileColumnDown0DivFunction()
{
	stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	if(focusTab != LIST_AREA )
	{
		return;
	}
	
	if(listStart + (pageVCount - 1) + pageVCount < listLength)
	{
		listStart += pageVCount;
	}
	else
	{
		listStart = listLength - pageVCount;
	}
	
	testLog("clickFileColumnDown0DivFunction listStart:" + listStart);
	refreshFileList(currentList,fName);
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	}

function clickFileColumnUl0LiFuntion(index)
{
	testLog("clickFileColumnUl0LiFuntion index:" + index);
	if(focusTab != LIST_AREA)
	{
		return;
	}
	
	stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	listIndex = index;
	$("focus").style.top = topDistance + listIndex * 80 + "px";
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	toRight();
}

function clickBGMMusicImgFuntion(index)
{
	testLog("clickBGMMusicImgFuntion index:" + index);
	if(focusTab != BGM_AREA )
	{
		return;
	}
	
	if(musicMenuBarLevel != 1)
	{
		musicMenuBarLevel = 1;
	}
	musicMenuFocusIndex = index;
	switch(musicMenuFocusIndex)
	{	
			case 0:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 1:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-PreviousFocus-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 2:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 3:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-Focus-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 4:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-PlaylistFocus-S.png";
				break;
	}
	
	doMusicMenuSelect();
}

function arrowPlayListDisplay(startIndex)
{
	$('playListLeftArrow').style.display = (startIndex == 0) ? "none" : "block";
	$('playListRightArrow').style.display = (startIndex + 6 < currentPlayList.length) ? "block" : "none";
}

function bookingPreOperate()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	hideMenu(0);
	multimedia.pictureStop(1);
	multimedia.deviceExitUninit();
	//multimedia.toRestoreSource();
	multimedia.toRestoreSource(0, 0);
	return;
}

//add yums 2014-10-13
function isOverflowed(element)
{
	console.log("YM element.scrollWidth:" +element.scrollWidth);
	console.log("YM element.clientWidth:" +element.clientWidth);
	return element.scrollWidth > element.clientWidth;
}

function setPlayListFocus(currentNum,lastNum)
{
	console.log("YM setPlayListFocus currentNum:" + currentNum);
	if(currentNum > -1)
	{
		if(isOverflowed($("name" + currentNum)))
		{
			modifyScrollDistance("move",$("name"+currentNum).clientWidth,$("name"+currentNum).scrollWidth);
			$("name"+currentNum).className ="playListStyle_animate";
		}
		else
		{
			console.log("YM isOverflowed is false");
			$("name"+currentNum).className ="playListStyle_static";
		}
	}
	
	if(lastNum > -1)
	{
		$("name"+lastNum).className ="playListStyle_static";
	}
	
	if(lastNum = -1 && currentNum == -1)
	{
		for(var i =0 ;i<6;i++)
		{
			$("name"+i).className ="playListStyle_static";
		}
	}
	
}

function setPlayListScroll(currentNum,lastNum)
{
	if(currentNum > -1)
	{
		var element = $("optionInfo").getElementsByTagName("li");
		var span1 = element[currentNum].getElementsByTagName("span")[0];
		var span2 = element[currentNum].getElementsByTagName("span")[1];
		if(isOverflowed(span1))
		{
			console.log("YM span1.className:" + span1.className);
			modifyScrollDistance("move_option",span1.clientWidth,span1.scrollWidth);
			span1.className ="optionInfoSpan_animate";
		}
	}
}

//根据传入的animate 修改css中animate的属性值
function modifyScrollDistance(animate,distance1,distance2)
{
	var tmp = 0;
	var animateIndex = 0;
	var flag = false;
	for(var i=0;i<document.styleSheets.length;i++)
	{
		tmp = getKeyFrames(i);
		for(var j=0;j<tmp.length;j++)
		{
			if(tmp[j].name == animate)
			{
				animateIndex = j;
				flag = true;
				break;
			}
		}
		if(flag)
			break;
	}
	
	tmp[animateIndex].deleteRule('0%');
	tmp[animateIndex].deleteRule('100%');
	var rule1 = "0% {left:" + distance1 + "px;}";
	var rule2 = "100% {left:-" + distance2 + "px;}";
	tmp[animateIndex].insertRule(rule1, 0);
	tmp[animateIndex].insertRule(rule2, 1);
}

function getKeyFrames(index)
{
	console.log("YM getKeyFrames:" + index);
	var styleSheet = document.styleSheets[index];
	var keyframesRule = [];
	[].slice.call(styleSheet.cssRules).forEach(
		function(item)
		{
			if(item.type === CSSRule.WEBKIT_KEYFRAMES_RULE) 
			{
				keyframesRule.push(item);
			}
		}
	);
	return keyframesRule;
}

function resetScrollHtmlInner1(htmlTagList, displayStyle, overFlowStyle)
{
	htmlTagList.setAttribute("contentText", htmlTagList.innerHTML);
	htmlTagList.style.overflowX = displayStyle;
	htmlTagList.style.textOverflow = overFlowStyle;
	setTimeout(function(){htmlTagList.innerHTML = htmlTagList.getAttribute("contentText");}, 1);
}

//滚动效果实现 marquee版
function startElementScroll(htmlTag)
{
	console.log("YM startElementScroll");
	setScrollAttribute(htmlTag,1);
}

function stopElementScroll(htmlTag)
{
	//console.log("YM stopElementScroll");
	setScrollAttribute(htmlTag,0);
	//setTimeout(function(){
		//resetScrollHtmlInner(htmlTag);
	//},10);
	
}

function setScrollAttribute(htmlTag,flag)
{
	var containSpanNode = false;
	var childNodes = htmlTag.childNodes;
	var spanNodes = 0;
	
	//判断传入的元素是否还有其他的子元素,这里主要是判断是否含有SPAN子元素
	for(var i=0;i<childNodes.length;i++)
	{
		if(childNodes[i].nodeName =="SPAN")
		{
			containSpanNode = true;
			break;
		}
		
	}
	//console.log("YM containSpanNode:" + containSpanNode);
	
	if(containSpanNode)
	{
		spanNodes = htmlTag.getElementsByTagName("span");
		for(var i=0;i<spanNodes.length;i++)
		{
			spanNodes[i].setAttribute("contentText",spanNodes[i].innerHTML);
			if(flag && isOverflowed(spanNodes[i]))
			{
				spanNodes[i].style.overflowX = "-webkit-marquee";
				spanNodes[i].style.textOverflow = "clip";
			}
			else
			{
				spanNodes[i].style.overflowX = "hidden";
				spanNodes[i].style.textOverflow = "ellipsis";
			}
		}
	}
	else
	{
		htmlTag.setAttribute("contentText",htmlTag.innerHTML);
		if(flag && isOverflowed(htmlTag))
		{
			htmlTag.style.overflowX = "-webkit-marquee";
			htmlTag.style.textOverflow = "clip";
		}
		else
		{
			htmlTag.style.overflowX = "hidden";
			htmlTag.style.textOverflow = "ellipsis";
		}
	}
}

/*
function setScrollAttribute(htmlTagList,ListLength,focusPosition)
{
	var containSpanNode = false;
	var childNodes = htmlTagList[0].childNodes;
		
	for(var i=0;i<childNodes.length;i++)
	{
		if(childNodes[i].nodeName =="SPAN")
		{
			containSpanNode = true;
			break;
		}
		
	}
	
	console.log("YM containSpanNode:" + containSpanNode);
	if(!containSpanNode)
	{
		for(var i = 0; i < ListLength; i++)
		{
			
			htmlTagList[i].setAttribute("contentText",htmlTagList[i].innerHTML);
			if(focusPosition == i && isOverflowed(htmlTagList[i]))
			{
				console.log("YM focusPosition:" + i);
				htmlTagList[i].style.overflowX = "-webkit-marquee";
				htmlTagList[i].style.textOverflow = "clip";
				
			}
			else
			{
				htmlTagList[i].style.overflowX = "hidden";
				htmlTagList[i].style.textOverflow = "ellipsis";
				
			}
			htmlTagList[i].innerHTML = "";
		}
		
		setTimeout(function(){
			resetScrollHtmlInner(htmlTagList,htmlTagList.length);
		},10);
		
	}
	else
	{
		for(var i =0;i<ListLength;i++)
		{
			if(focusPosition == i)
			{
				var spanList = htmlTagList[i].getElementsByTagName("span");
				for(var j=0;j<spanList.length;j++)
				{	
					spanList[j].setAttribute("contentText",spanList[j].innerHTML);
					if(isOverflowed(spanList[j]))
					{
						spanList[j].style.overflowX = "-webkit-marquee";
						spanList[j].style.textOverflow = "clip";
					}
					else
					{
						spanList[j].style.overflowX = "hidden";
						spanList[j].style.textOverflow = "ellipsis";
					}
					spanList[j].innerHTML = "";
				}
				setTimeout(function(){
					resetScrollHtmlInner(spanList,spanList.length);
					},10);
			}
			
		}
	}

}
*/


function resetScrollHtmlInner(htmlTag)
{
	var containSpanNode = false;
	var childNodes = htmlTag.childNodes;
	var spanNodes = 0;
	
	//判断传入的元素是否还有其他的子元素,这里主要是判断是否含有SPAN子元素
	for(var i=0;i<childNodes.length;i++)
	{
		if(childNodes[i].nodeName =="SPAN")
		{
			containSpanNode = true;
			break;
		}
		
	}
	//console.log("YM resetScrollHtmlInner:" + containSpanNode);
	
	if(containSpanNode)
	{
		spanNodes = htmlTag.getElementsByTagName("span");
		for(var i=0;i<spanNodes.length;i++)
		{
			spanNodes[i].innerHTML = spanNodes[i].getAttribute("contentText");
		}
	}
	else
	{
		htmlTag.innerHTML = htmlTag.getAttribute("contentText");
	}
}

/*
function resetScrollHtmlInner(htmlTagList,ListLength)
{
	console.log("YM resetScrollHtmlInner");
	for(var i = 0; i < ListLength; i++)
	{
		//top.Log("in resetScrollHtmlInner htmlTagList[i].contentText = " + htmlTagList[i].getAttribute("contentText"));
		htmlTagList[i].innerHTML = htmlTagList[i].getAttribute("contentText");
	}
}
*/


function clickBodyElementFunction()
{
	console.log("YM clickBodyElementFuntion");
	toOK();
}

function clickLR_TipsArrowFunction(index)
{
	console.log("YM clickLR_TipsArrowFunction");
	if(index == 0) //leftArrow
		toLeft();
	else if(index == 1)
		toRight();
}

function displayTipsBox(flag)
{
	console.log("YM displayTipsBox :" + flag);
	switch(flag)
	{
		case 0://hide box
			$('tipsBox').style.display = 'none';
			break;
		case 1://ok button
			$('focusButton').style.left = tipsBoxMiddleDistance + "px";
			$('tipsBox').style.display = 'block';
			$('okButton').style.display = 'block';
			//$('noButton').style.display = 'none';
			//$('yesButton').style.display = 'none';
			break;
		/*
		case 2://no & yes buttons
			tipsBoxIndex = 1;
			$('focusButton').style.left = tipsBoxDistance * (tipsBoxIndex  + 1) + tipsBoxButtonWidth * tipsBoxIndex + "px";
			$('tipsBox').style.display = 'block';
			$('okButton').style.display = 'none';
			$('noButton').style.display = 'block';
			$('yesButton').style.display = 'block';
			break;
		*/
		default:
			break;
	}
}

function setErrorTips(flag)
{
	if(!firstEnterFlag)
	{
		if(!dmrFlag)
		{
			top.g_currentMedia = multimedia.getMediaPictureFileInfo(currentPlayList[currentListPosition].path);
			top.g_mediaPosition = multimedia.getNowPicturePosition();
		}
	}	
	focusTab = TIPS_AREA;
	showConsoleTipsArrow(0,0);
	multimedia.pictureStop(1);
	displayTipsBox(flag);
}

function getFileList(path, start, count)
{
	//count == [-1]: get all file 
	//count != [-1]: get the num of count files
	return multimedia.getMediaFileList(top.g_deviceInfo.type, //top.g_deviceInfo.type指当前盘的类型，如USB DLNA DMR等
		currentMediaType, path, start, count);
}

function setPageListVCount()
{
	listLength = (currentList != null && currentList != "" && currentList[0] != null && currentList[0] != "")
		? currentList.length : 0;
	
	if(currentMediaType == MUSIC_TYPE)
	{
		pageVCount = (listLength < VC_F) ? listLength : VC_F;
	}
}

function refreshFileList(list,divName)//刷新背景音乐文件索引菜单中的列表内容
{
	fillFileDiv(divName, currentMediaType, list, listStart);
	showFScrollBar(list.length, listStart);
	arrowFDisplay(list.length);
}

function fillFileDiv(divName, type, list, start)
{
	console.log("fillFileDiv");
	var listSpan = $(divName).getElementsByTagName("span");
	var listImg = $(divName).getElementsByTagName("img");
	var listTmp = $(divName).getElementsByTagName("li");
	var length = list.length;
	if(type == MUSIC_TYPE)
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
				listImg[i].src = "images/BGM_folder.png";
			}
			else if(list[start + i].type == MUSIC_TYPE)
			{
				listImg[i].src = "images/BGM_music.png";
			}
			else
			{
				listImg[i].src = "images/play_all_music.png";
			}
		}
	}
}

function changeSearchFileFocus(offset)//背景音乐文件索引中点上,下移动焦点的处理
{
	console.log("changeSearchFileFocus listIndex:" + listIndex);
	console.log("changeSearchFileFocus listStart:" + listStart);
	console.log("changeSearchFileFocus pageVCount:" + pageVCount);
	stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	if(offset == 1)//down
	{
		if((listIndex + 1) < pageVCount)
		{
			listIndex++;
			$("focus").style.top = topDistance + listIndex * 80 + "px";
		}
		else if((listIndex + 1) == pageVCount && (listStart + pageVCount) < listLength)
		{
			listStart++;
			refreshFileList(currentList,fName);
		}
		
	}
	else if(offset == -1)//up
	{
		if((listIndex - 1) >= 0)
		{
			listIndex--;
			$("focus").style.top = topDistance + listIndex * 80 + "px";
		}
		else if(listIndex == 0 && (listStart - 1) >= 0)
		{
			listStart--;
			refreshFileList(currentList,fName);
		}
	}
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
}

function showFScrollBar(length,start)//处理右边滚动条
{
	if(length > VC_F)
	{
		$("scrollAreaF0").style.display = "block";
		$("scrollBarF0").style.height = parseInt(SCROLL_MAX_HEIGHT * VC_F / length) + "px";
		$("scrollBarF0").style.top = parseInt(SCROLL_MAX_HEIGHT * start / length) + "px";
	}
	else
	{
		$("scrollAreaF0").style.display = "none";
	}
}

function doSearchFileSelect(type)
{
	if(type == 1)//enter or ok
	{
		console.log("currentList.length:" + currentList.length);
		console.log("listIndex:" + listIndex);
		console.log("listStart:" + listStart);
		console.log("currentList[listIndex + listStart].type:" + currentList[listIndex + listStart].type);
		var fileInfo = currentList[listIndex + listStart];
		console.log("fileInfo.type:" + fileInfo.type);
		
		stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
		if(fileInfo.type == ALL_TYPE)
		{
			//displayLoadingBox(1);
			
			
			var list = getFileList(fileInfo.path, 0, -1);
			if(list.length == 0)
			{
				showIconEmptyTips(3000);
				return;
			}
			fileListDepth++;
			if(fileListDepth > 0)
			{
				$('gobackBox').style.display = 'block';
			}
			addLastIndex();
			addFolderName(fileInfo.name);
			refreshTitleInfo(getLastFolder());
			g_mediaFolderPath = fileInfo.path;
			currentList = getFileList(g_mediaFolderPath, 0, -1);
			listLength = currentList.length;
			setPageListVCount();
			listIndex = 0;
			listStart = 0;
			resetFocusShape();
			refreshFileList(currentList, fName);
			startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
		}
		else if(fileInfo.type == MUSIC_TYPE)
		{
			console.log("g_mediaFolderPath:" + g_mediaFolderPath);
			top.g_BGMmdiaFolderPath = g_mediaFolderPath;
			top.g_BGMmediaListIndex = listIndex;
			top.g_BGMmediaListStart = listStart;
			top.g_BGMmediaPath = g_path;
			top.g_BGMmediaPathIndex = g_listIndex;
			 top.g_fileListDepth = fileListDepth;
			//console.log("currentList[" + (listStart + listIndex) + "].path:" + currentList[listIndex + listStart].path);
			$("searchFile").style.display = "none";
			//var res = "";
			//res = musicMediaPlay(currentList[listIndex + listStart].path);
			//console.log("res:" + res);
			//menuBar.style.display = "block";
			doMusicPlay(currentList[listIndex + listStart].path);
			
		}	
	}
	else if(type == -1)//back
	{
		if(fileListDepth > 0)
		{
			stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
			fileListDepth--;
			if(fileListDepth == 0)
			{
				$('gobackBox').style.display = 'none';
			}
			removeFolderPath();
			//refreshTitleInfo(getLastFolder());
			listStart = getLastListStart();
			listIndex = getLastFocusIndex();
			console.log("doSearchFileSelect listStart:" + listStart);
			console.log("doSearchFileSelect listIndex:" + listIndex);
			removeLastIndex();
			
			g_mediaFolderPath = getLastPath(g_mediaFolderPath);
			refreshTitleInfo(getLastFolder());
			currentList = getFileList(g_mediaFolderPath, 0, -1);
			listLength = currentList.length;
			console.log("listLength:" + listLength);
			if(currentList.length == 0)//&& currentIsDLNAFlag
			{
				return;
			}
			setPageListVCount();
			refreshFileList(currentList, fName);
			$('focus').style.top = (topDistance + listIndex * 80) + "px";
			//showFScrollBar(list.length, listStart);
			
			startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
		}
		else if(fileListDepth == 0)
		{
			stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
			toBack();
		}
	}
	
	
}

function addLastIndex()
{
	g_listIndex += "/" + listStart + "-" + listIndex;
}

function addFolderName(tmp)
{
	g_path += "/" + tmp;
	return;
}

function removeFolderPath()
{
	g_path = getLastPath(g_path);
	return;
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

function getLastListStart()
{
	var count = g_listIndex.lastIndexOf("/");
	var tmp = g_listIndex.substring(count + 1, g_listIndex.length);
	count = tmp.lastIndexOf("-");
	return parseInt(tmp.substring(0, count) / 1, 10);
}

function getLastFocusIndex()
{
	var count = g_listIndex.lastIndexOf("/");
	var tmp = g_listIndex.substring(count + 1, g_listIndex.length);
	count = tmp.lastIndexOf("-");
	return parseInt(tmp.substring(count + 1, tmp.length) / 1, 10);
}

function removeLastIndex()
{
	g_listIndex = getLastPath(g_listIndex);
}

function arrowFDisplay(length)
{
	$("fileColumnUp0").style.display = (listStart == 0) ? "none" : "block";
	$("fileColumnDown0").style.display = (listStart + pageVCount < length) ? "block" : "none";
}

function refreshTitleInfo(tmp)
{
	if(tmp == -1)
	{
		$("pathContent").innerText = top.g_deviceInfo.name;
	}
	else if(tmp != null && tmp != "" && fileListDepth > 0)
	{
		$("pathContent").innerText = top.g_deviceInfo.name + " > " + tmp;
	}
	else
	{
		$("pathContent").innerText = top.g_deviceInfo.name;
	}
}

function getLastFolder()
{
	var count = g_path.lastIndexOf("/");
	if(count == -1)
	{
		return -1;
	}
	var tmp = g_path.substring(count + 1,g_path.length);
	return tmp;
}

//以下是背景音乐播放有关接口
function musicMediaPlay(path)
{
	return multimedia.mediaPlay(path, 1);
}

function doMusicPlay(path)
{
	var res = "";
	res = musicMediaPlay(path);
	console.log("res:" + res);
	musicPlayFlag = 1;
	initBGMBar();
	
}

function initBGMBar()
{
	console.log("initBGMBar");
	focusTab = BGM_AREA;
	musicPlayRepeatModeInit();
	$("musicP&P").src = "images/USB-Music-Control-icon-PauseFocus-S.png";
	$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
							
	$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
	$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
	$("BGMArea").style.display = "block";
	$("focus").style.display = "none";
	musicPlayStatus = S_END;
	musicMenuFocusIndex = 2;
	musicMenuBarLevel = 1;
	currentMusicPlayingList = getCurrentMusicPlayingList(0,-1)
	console.log("currentMusicPlayingList.length:" + currentMusicPlayingList.length);
}

function getCurrentMusicPlayingList(startIndex,num)
{
	return multimedia.getCurrentMusicPlayingList(startIndex, num);
}

function changeMusicMenuBarSelect(type)
{
	console.log("changeMusicMenuBarSelect");
	if(musicMenuBarLevel == 1)
	{
		if(type == 0) //left
		{
			musicMenuFocusIndex = (musicMenuFocusIndex - 1) < 0 ? 4 : (musicMenuFocusIndex - 1);
		}
		else if(type == 1)//right
		{
			musicMenuFocusIndex = (musicMenuFocusIndex + 1) >= 5 ? 0 : (musicMenuFocusIndex + 1);
		}
		
		else if(type == 2)//up
		{
			musicMenuBarLevel--;
			musicMenuFocusIndex = -1;
		}
		else if(type == 3)//down
		{
			return;
		}
		
		switch(musicMenuFocusIndex)
		{
			case -1://焦点在进度条上
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-02.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				
				break;
				
			case 0:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 1:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-PreviousFocus-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 2:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 3:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-Focus-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 4:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-PlaylistFocus-S.png";
				break;
		}
	}
	
	else if(musicMenuBarLevel == 0)
	{
		//快进 快退功能
		if(type == 3)//down
		{
			musicMenuBarLevel = 1;
			musicMenuFocusIndex = 2;
			$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
			changeMusicP_PIcon(musicMenuFocusIndex);
		}
		else
		{
			return;
		}
	}
	
}

function changeMusicPlayModeIcon(index)
{
	//if(index == 0)//焦点整在PlayMode上
	//{
	//	$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1Focus-S.png"
//	}
//	else 
//	{
	//	$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1-S.png"
	//}
	musicPlayRepeatModeInit();
	
}

function changeMusicP_PIcon(index)
{
	if(musicPlayStatus == S_PLAY)
	{
		if(index == 2)
		{
			$("musicP&P").src = "images/USB-Music-Control-icon-PauseFocus-S.png";
		}
		else
		{
			$("musicP&P").src = "images/USB-Music-Control-icon-Pause-S.png";
		}
	}
	else
	{
		if(index == 2)
		{
			$("musicP&P").src = "images/USB-Music-Control-icon-PlayFocus-S.png";
		}
		else
		{
			$("musicP&P").src = "images/USB-Music-Control-icon-Play-S.png";
		}
	}
}

function refreshProgressBar()
{
	console.log("refreshProgressBar");
	if(fileDuration > 0)
	{
		elapsed = multimedia.getNowPlayTime();
		if(elapsed > 0)
		{
			if(elapsed > fileDuration)
			{
				elapsed = fileDuration;
			}
			
			//progressBarPercent = parseInt(elapsed * 100 / fileDuration, 10);
			//if(!seekStatusFlag)
			//{
				//if(focusTab == PROGRESS_AREA || (focusTab == OPTION_AREA && lastFocusTab == PROGRESS_AREA))
			//	{
					//$('endBar').src = "images/USB-Video-Progress-bar-Slider-02_.png";
				//seekPoint = elapsed;
			//	}
				//else if(focusTab != PROGRESS_AREA)
				//{
					//$('endBar').src = (progressBarPercent <= 14)
					//	? "images/USB-Video-Progress-bar-Slider-01_.png"
					//	: "images/USB-Video-Progress-bar-Slider-01.png";
				//}
			$('endBar').style.left = parseInt(elapsed * BAR_LENGTH / fileDuration, 10) - 15 + "px";
			//}
			$("startBar").style.width = parseInt(elapsed * BAR_LENGTH / fileDuration, 10) + "px";
		}
		else
		{
			elapsed = 0;
		}
		//$("elspased").innerText = doTime(elapsed);
	}
	else
	{
		fileDuration = 0;
	}
	
}


function doTime(time)
{
	var hour = parseInt(time / 3600, 10);
	var minute = parseInt((time - hour * 3600) / 60, 10);
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

function doMusicMenuSelect()
{
	if(musicMenuBarLevel == 0)
	{
		return;
	}
	else if(musicMenuBarLevel == 1)
	{
		switch(musicMenuFocusIndex)
		{
			case -1:
				return;
				break;
			case 0:
				repeatMode = dmrFlag ? ((!repeatMode) ? 3 : 0) : (parseInt((repeatMode + 1) % 4, 10));
				switch(repeatMode)
				{
					case 0:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
						break;
					case 1:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat2Focus-S.png";
						break;
					case 2:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1Focus-S.png";
						break;
					case 3:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat4Focus-S.png";
						break;
					default:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
						break;
				}
				multimedia.setAudioRepeatMode(repeatMode);
				break;
			case 1:
				multimedia.playPreMediaFile(1);
				break;
			case 2:
				if(musicPlayStatus == S_PLAY)
				{
					//musicPlayStatus = S_PAUSE;
					multimedia.mediaPause();
					clearInterval(progressBarTimer);
					//$("musicP&P").src = "images/USB-Music-Control-icon-PlayFocus-S.png";				        
					return;
				}
				else if(musicPlayStatus == S_PAUSE)
				{
					//musicPlayStatus = S_PLAY;
					multimedia.mediaResume();
					if(progressBarTimer)
						clearInterval(progressBarTimer);
					progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
					//$("musicP&P").src = "images/USB-Music-Control-icon-PauseFocus-S.png";
					return;
				}
				break;
			case 3:
				multimedia.playNextMediaFile(1);
				break;
			case 4:
				$("BGMArea").style.display = "none";
				$("searchFile").style.display = "block";
				focusTab = LIST_AREA;
				listStart = 0;
				listIndex = 0;
				refreshTitleInfo(getLastFolder());
				refreshFileList(currentList, fName);
				
				resetFocusShape();
				$('focus').style.top = (topDistance + listIndex * 80) + "px";
				$('focus').style.display = "block";
				
				break;
			default:
				break;
		}
	}
	else 
	{
		return;
	}
}

function musicPlayRepeatModeInit()
{
	repeatMode = multimedia.getAudioRepeatMode();
	repeatMode = (repeatMode < 0 || repeatMode > 4) ? 0 : repeatMode;
	if(musicMenuFocusIndex != 0)
	{
		if(repeatMode == 0)//normal
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3-S.png";
		}
		else if(repeatMode == 1)//random
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat2-S.png";
		}
		else if(repeatMode == 2)//repeat all
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1-S.png";
		}
		else if(repeatMode == 3)//repeat one
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat4-S.png";
		}
		else
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3-S.png";
		}
	}
	else 
	{
		if(repeatMode == 0)//normal
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
		}
		else if(repeatMode == 1)//random
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat2Focus-S.png";
		}
		else if(repeatMode == 2)//repeat all
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1Focus-S.png";
		}
		else if(repeatMode == 3)//repeat one
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat4Focus-S.png";
		}
		else
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
		}
	}
}

function fillCurrentPlayingMusicInfo(file)
{
	if(file.cover != null && file.cover != "")
	{
		$("musicCover").src = file.cover;
	}
	else
	{
		$("musicCover").src = "images/USB-Music-Default-icon.png";
	}
	
	if(file.name != null)
	{
		console.log("musicName:" + file.name);
		$("musicName").innerText = file.name;
	}
	
}

function doOpenSearchFile()
{
	listStart = 0;
	fileListDepth = 0;
	listIndex = 0;
	g_mediaFolderPath = top.g_deviceInfo.path;
	refreshTitleInfo(getLastFolder());
	currentList = getFileList(top.g_deviceInfo.path,listStart,-1);
	$("searchFile").style.display = 'block';
	if(currentList.length == 0)
	{
		//$('emptyListTips').style.display = "block";
		return
	}
	else
	{
		//$('emptyListTips').style.display = "none";
	}
	focusTab = LIST_AREA;
	listLength = currentList.length;
	setPageListVCount();
	resetFocusShape();
	$('focus').style.top = topDistance + "px"//363px是GUI中定义的第二个位置的y坐标，80px是各个位置的高
	refreshFileList(currentList,fName);
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
}

function showIconEmptyTips(time)//文件索引(背景音乐)时，文件夹下无相应文件时的提示信息
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

function testLog(text)
{
	console.log("YM ===> " + text);
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
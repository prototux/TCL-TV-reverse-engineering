var playListStart = 0;
var playListIndex = 0;
var optionIndex = 0;
var optionListIndex = 0;
var focusTab = 0;//[0]displayArea, [1]option, [2]optionList, [3]playList, [4]progressBar
var focusTabIndex = 0;
var playStatus = -1;//playing/pause/error
var fileDuration = 0;//the current time of playing media file
var currentFileInfo = "";
var elapsed = 0;
var currentPlayList = "";
var inforListSpan = 0;
var informationSpan = 0;
var currentFileIndex = 0;
var MAX_LENGTH_ONE_PAGE = 0;
var seekCount = 0;
var seekPoint = 0;
var seekStartTime = 0;
var ff_fb_flag = 0;
var progressBarPercent = 0;
var tmpStartIndex = 0;
var screenModeStartIndex = 0;
var subtitleInfoList = 0;
var subtitleCount = 0;
var subtitleStartIndex = 0;
var soundTrackCount = 0;
var soundTrackStartIndex = 0;
var soundTrackInfoList = "";

var picPresetBack = 0;
var soundEffectBack = 0;

var playListFocusIndex = 0;
var seekableFlag = true;

var bottomTipsLi  = "";
var bottomTipsText = top.bottomTipsText;

var focusOptionHeight = 100;
var switch3DFlag = false;
//var tipsTimer = 0;
var progressBarTimer = 0;
var seekSettingTimer = 0;

var skipFlagSubtitle = 0;
var skipFlagSoundtrack = 0;
var skipFlag3D = 0;

var SEEK_TIME = 30;
var SEEK_TIME_DELAY = 2000;
var DELAY_TIME = 50;
var FADE_TIME = 60000;	//5000
var BAR_LENGTH = 1500;

var playListAnimateTime = 250;
var screenWidth = 1940;
var TIPS_WIDTH_1 = 400;
var TIPS_WIDTH_2 = 1300;
var PROGRESS_START_LEFT_OFFSET = 45 + 165;
var FADE_TIME_15 = 15000;

var clickPlayListLi = "";
var clickOptionMenuLi_1 = "";
var clickOptionMenuLi_2 = "";

var S_PLAY 			= 1;
var S_PAUSE 		= 2;
var S_EOS 			= 3;
var S_PRE 			= 4;
var S_NEXT 			= 5;
var S_FF_FB         = 6;
var S_SF_SB         = 7; 
var S_STOP_RESUME	= 8;
var S_ERROR 		= -1;

var OPTION_PANNEL_TYPE 		= 0;//[0]HD [1]SD

var OPTION_PIC_PRESET 		= -1;
var OPTION_BACK_LIGHT		= -1;
var OPTION_BRIGHTNESS		= -1;
var OPTION_CONTRAST			= -1;
var OPTION_SATURATION		= -1;
var OPTION_TINT				= -1;
var OPTION_SHARPNESS		= -1;
var OPTION_SOUND_PRESET     = -1;
var OPTION_SCREEN_MODE 		= -1;
var OPTION_3D_MODE 			= -1;
var OPTION_SUBTITLE 		= -1;
var OPTION_SOUND_TRACK 		= -1;
var OPTION_INFORMATION		= -1;

var DISPLAY_AREA 			= 0;
var OPTION_AREA 			= 1;
var OPTION_DETAIL_AREA		= 2;
var PLAY_LIST_AREA 			= 3;
var PROGRESS_AREA 			= 4;
var PRESET_AREA				= 5;
var TIPS_AREA        		= 6;
var QUICK_MENU_AREA         = 7;
var SCREEN_MODE_AREA        = 8;
var OPTION_BAR_AREA			= 9;

var optionIndexPicPreset 		= 0;
var optionIndexBacklight 		= 1;
var optionIndexBrightness 		= 2;
var optionIndexContrast 		= 3;
var optionIndexSaturation 		= 4;
var optionIndexTint 			= 5;
var optionIndexSharpness 		= 6;
var optionIndexSoundPreset 		= 7;
var optionIndexScreenMode 		= 8;
var optionIndex3DMode 			= 9;
var optionIndexSubtitle 		= 10;
var optionIndexSoundTrack 		= 11;
var optionIndexInfo 			= 12;



var OPTION_MAX_COUNT = 13;
var OPTION_INFO_COUNT = 0;
var OPTION_INFO_MAX	= 5; //old 10
var PLAYLIST_MAX_LENGTH = 12;
var MAX_QUICK_MENU_COUNT = 10;

var currentOptionFirstListArray = new Array(OPTION_MAX_COUNT);

var optionInfoArray = new Array(OPTION_MAX_COUNT);//[0]picture preset,[1]sound preset, [2]screen mode, [3]3d mode, [4]subtitle, [5]sound track, [6]infomation
var optionListArray = top.optionPvrListArray;
var picturePresetArray = top.picturePresetArray;
var picturePresetBarInfo = top.picturePresetBarTitleInfo;//"Picture preset"
var picturePresetCheckImg = "";
var soundPresetArray = top.musicSoundPresetArray;
var screenModeArray = "";
var screenModeHDArray = top.screenModeHDArray;
var screenModeSDArray = top.screenModeSDArray;
var Mode3DArray = top.Mode3DArray;
var subMenuTitleText = top.videoOptionListArray[2];
var titleMenuTitleText = top.videoOptionListArray[3];
var soundTrackText = top.videoOptionListArray[1];
var langInfoText = top.videoOptionListArray[1];
var langMenuTitleText = top.langMenuTitleText;
var mode3DMenuTitleText = top.mode3DMenuTitleText;
var fileNameText = top.fileNameText;
var fileDateText = top.fileDateText;
var fileDurationText = top.fileDurationText;
//var offInfo = top.videoOptionListArray[0];
var offinfo = top.offinfo;
var loadingInfo = top.loadingInfo;
var naInfo = top.sysRatingOptions[0];
var eb_info = top.eb_info;
var eb_tips = top.eb_tips;
var ok_button = top.ok_button;

var FOCUS_DISTANCE = 0;
var FOCUS_LEFT_DISTANCE = 0;
var FOCUS_TOP_DISTANCE = 0;

var SCROLL_TOP_DISTANCE = 60;
var SCROLL_MAX_HEIGHT = 960;

var menuTimer = 0;

var form_position_h				= 0;
var DIALOG_START				= 200;
var DIALOG_STEP					= 250;

var playlistFocusTopDistance = 53;
var iUpArrowName = "arrowUpIcon";
var iDownArrowName = "arrowDownIcon";
var playListScrollName = "playlistScrollArea";
var scrollBarName = "playlistScrollBar";
var exitFlag  = false;
var errorFlag = false;
var ERROR_NONE			= 0;//not error
var ERROR_VIDEO_ERROR 		= 1;
var ERROR_AUDIO_ERROR 		= 2;
var ERROR_VIDEO_NOT_SUPPORTED 	= 3;

var pvr 				= top.g_pvr;	//xiehua 2014-06-14 
var multimedia 	= top.g_media;
var setting 		= top.g_setting;


var clickIndexAttri = "indexAttri";
var clickPicturePresetSpan = "";

var quickCount = 0;
var quickInfoText = "";
var quickOffSet = 0;
var quickIndex = 0;
var quickMenuStartIndex = 0;
var quickMenuIndex = 0;
var quickMenuType = -1;
var quickMenuListDiv = 0;
var quickMenuEmptyText = top.quickMenuEmptyText;
var operationTimer = 0;
var QUICK_MENU_SUBTITLE = 0;
var QUICK_MENU_LANG = 1;
var QUICK_MENU_3D = 2;

var resolution = 0;

//screen mode
var zoomPreviewImg;
var zoomPreviewImgHD = ["images/Screen_mode_169_format.png",
					"images/Screen_mode_43_format.png",
					"images/Screen_mode_Cinerama.png",
					"images/Screen_mode_Wide_Zoom.png",
					"images/Screen_mode_Zoom2.png",
					"images/Screen_mode_Wide_Zoom2.png",
					"images/Screen_mode_Stretch_Zoom.png",
					"images/Screen_mode_auto_format.png"];

var zoomPreviewImgSD = ["images/Screen_mode_169_format.png",
					"images/Screen_mode_43_format.png",
					"images/Screen_mode_Cinerama.png",
					"images/Screen_mode_149_Zoom.png",
					"images/Screen_mode_169_Zoom.png",
					"images/Screen_mode_169_Zoomup.png",
					"images/Screen_mode_auto_format.png"];
var PIC_ZOOM_LIST_LENGTH = 5;
var zoomSpans;
var previewImg;

var optionListLi 			= "";
var optionListNameSpan		= "";
var displayAttri = "displayIndex";
var optionHeightDistance = 80;
var optionBarHeight = 60;
var SHORT_BAR_MAX_VALUE = 100;
var SHORT_BAR_LENGTH = 100;
var OPTION_BAR_LENGTH = 900;
var optionBarNameArray = new Array(6);

var OPTION_FIRST_MAX_COUNT = 12;//in one page
var optionFirstStartIndex = 0;
var optionFirstListLength = 0;
var optionSecondListTopDistance = 75;

var optionListNameArray = [top.optionVideoListArray_1[0],
						   top.picOptions[1], top.picOptions[2], top.picOptions[3], 
						   top.picOptions[4], top.picOptions[5], top.picOptions[6],  
						   top.optionVideoListArray_1[1], 
						   top.optionVideoListArray_1[3], 
						   top.optionVideoListArray_1[4],
						   top.optionVideoListArray_1[7],
						   top.optionVideoListArray_1[8], 
						   top.optionVideoListArray_1[11]];
document.onkeydown = keyProc;
document.onnotify = notifyProcess;

function $(id)
{
    return document.getElementById(id);
}

function testLog(s)
{
	var str = " ------------------> xx : " + s;
	top.g_channel.testLog(str);
}

function init()
{
	top.g_temp = "media";
	top.RemoteConntrolType = "Media";
	top.g_isMediaCenter = top.NDM_PVR_Play;
	if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
	{
		var bottomTipsImg = $("bottomTips").getElementsByTagName("img");
		bottomTipsImg[4].src ="images/icon-Option_au.png";
	}
	initTextInfo();
	exitFlag = 0;
	playStatus = S_EOS;
	playListStart = 0;
	playListIndex = 0;
	seekCount = 0;
	seekPoint = 0;
	focusTab = DISPLAY_AREA;
	inforListSpan = $('listInfo').getElementsByTagName('span');
	informationSpan = $('information').getElementsByTagName('span');
	OPTION_PANNEL_TYPE = pvr.getPannelMode();		//xiehua: api added!!!
	top.showBackground(0);
	
	/***
	if(OPTION_PANNEL_TYPE == 0)//HD
	{
		screenModeArray = screenModeHDArray;
	}
	else//SD
	{
		screenModeArray = screenModeSDArray;
	}
	**/
	//pvr.testLog("init(), filepath = "+top.g_currentMedia.path);
	setTimeout(function(){
		top.g_availableStatus = mediaPlay(top.g_currentMedia.path);
		//currentPlayList = pvr.getCurrentVideoPlayingList(0, -1);
		currentPlayList = pvr.getMediaFileList(top.g_deviceInfo.type, 2, top.g_deviceInfo.path, 0, -1);
		setPlayListMaxLength();}, DELAY_TIME);
	//pvr.testLog("init done");
	//添加鼠标支持
	clickPicturePresetSpan = $('picturePresetBar').getElementsByTagName('span');
	addMouseListener();
}

function initTextInfo()
{
	$('laodingInfo').innerText = loadingInfo;
	$('eb_tips').innerText = eb_tips;
	$('okButton').innerText = ok_button;

	optionListNameSpan = $('optionInfo').getElementsByClassName('optionNameClass');
	for(var i = 0; i < optionListNameSpan.length; i++)
	{
		optionListNameSpan[i].innerText = optionListNameArray[i];
	}

	optionListLi = $("optionInfo").getElementsByTagName('li');
	for(var i = 0; i < optionListLi.length; i++)
	{
		optionListLi[i].setAttribute(displayAttri, -1);
	}

	
	clickPlayListLi = $('playList').getElementsByTagName("li");
	clickOptionMenuLi_1 = $("optionInfo").getElementsByTagName("li");
	clickOptionMenuLi_2 = $("listInfo").getElementsByTagName("span");

	quickMenuListDiv = $('quickContainInfo').getElementsByTagName('div');
	$("quickEmtpyTipsInfo").innerText = quickMenuEmptyText;

	$('picturePresetBarInfo').innerText = picturePresetBarInfo;
	picturePresetCheckImg = $('picturePresetBar').getElementsByTagName('img');

	bottomTipsLi = $("bottomTips").getElementsByTagName('li');
	for(var i = 0; i < bottomTipsLi.length; i++)
	{
		bottomTipsLi[i].innerText = bottomTipsText[i];
	}

	optionBarNameArray[0] = $('backLightBar');
	optionBarNameArray[1] = $('brightnessBar');
	optionBarNameArray[2] = $('contrastBar');
	optionBarNameArray[3] = $('saturationBar');
	optionBarNameArray[4] = $('tintBar');
	optionBarNameArray[5] = $('sharpnessBar');


	optionBarNameArray[0].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[1];
	optionBarNameArray[1].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[2];
	optionBarNameArray[2].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[3];
	optionBarNameArray[3].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[4];
	optionBarNameArray[4].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[5];
	optionBarNameArray[5].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[6];
	
}

function keyProc(evt)
{
	var ret = true;
	var keycode = evt.which;
	pvr.testLog("keyProc(), keycode = "+keycode);
	//if(playStatus == S_EOS)
		//return;
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
			console.log("lqt---pvrVideoPlay.js---clientX: "+clientX);
			console.log("lqt---pvrVideoPlay.js---clientY: "+clientY);
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
		case top.VK_UP:
			toUp();
			break;
		case top.VK_DOWN:
			toDown();
			break;
		case top.VK_LEFT:
			toLeft();
			break;
		case top.VK_RIGHT:
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
			//pvr.testLog("top.VK_OPTION = "+top.VK_OPTION)
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
			//pvr.testLog("press number key, seekableFlag = "+seekableFlag);
			break;
		case top.VK_STOP:
			pvr.testLog("press the stop key");
			//
			if(playStatus == S_PLAY  || playStatus == S_PAUSE || playStatus == S_FF_FB)
			{
				hideMenu(0);
				playStatus = S_STOP_RESUME;
				ff_fb_flag = 0;
				pvr.mediaPause();	//xiehua: api added!!!
				$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
				$('topTitle').style.display = "block";
				$('statusIcon').style.display = "block";
				$('progressArea').style.display = "block";
				refreshProgressBar();
				hideMenu(FADE_TIME);
			}
			else if(playStatus == S_STOP_RESUME)
			{
				hideMenu(0);
				pvr.mediaStop(0);	//xiehua: api added!!!
				if (!skipFlag3D)
				{
					pvr.setVideo3DMode(0);
				}
				document.location.href = "pvrMediaList.html?media";
			}

			break;
		case top.VK_PLAY:
			pvr.testLog("press the play key playStatus:"+playStatus);
			if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
			{
				ff_fb_flag = 0;
				playStatus = S_PLAY;
				pvr.mediaResume();	//xiehua: api added!!!
				$('statusIcon').style.display = 'none';
				hideMenu(0);
			}
			else if(playStatus == S_FF_FB)
			{
				$('statusIcon').style.display = 'none';
				$('statusIcon').src = "images/USB-Icon-Play.png";
				setFastPlay(0);	
				hideMenu(0);
			}
			break;
		case top.VK_PAUSE:
			pvr.testLog("press the pause key ff_fb_flag:"+ff_fb_flag);
			//|| playStatus == S_FF_FB
			if(playStatus == S_PLAY )
			{
				hideMenu(0);
				playStatus = S_PAUSE;
				$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
				$('topTitle').style.display = "block";
				$('statusIcon').style.display = "block";
				$('progressArea').style.display = "block";
				refreshProgressBar();
				pvr.mediaPause();	//xiehua: api added!!!
			}
			else if(playStatus == S_FF_FB)
			{
				pvr.mediaFastForward(1);//paly
				setTimeout(function (){
					hideMenu(0);
					playStatus = S_PAUSE;
					$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
					$('topTitle').style.display = "block";
					$('statusIcon').style.display = "block";
					$('progressArea').style.display = "block";
					refreshProgressBar();
					pvr.mediaPause();	//xiehua: api added!!!
				},100);
			}
			break;
		case top.VK_PLAY_PAUSE://play key press
			pvr.testLog("press the play key ff_fb_flag:"+ff_fb_flag);
			if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
			{
				playStatus = S_PLAY;
				/***
				if (ff_fb_flag != 0) 
				{
					pvr.mediaFastForward(1);		//xiehua: api added!!!
				}
				else
				{
					pvr.mediaResume();	//xiehua: api added!!!
				}
				***/
				pvr.mediaResume();	//xiehua: api added!!!
				ff_fb_flag = 0;
				$('statusIcon').style.display = 'none';
				hideMenu(0);
			}
			else if(playStatus == S_FF_FB)
			{
				hideMenu(0);
				$('statusIcon').style.display = 'none';
				$('statusIcon').src = "images/USB-Icon-Play.png";
				setFastPlay(0);	
			}
			break;
		case top.VK_ENTER:
			toOK();
			break;
		case top.VK_REWIND:
			pvr.testLog("REWIND press");
			hideMenu(0);
			$('progressArea').style.display = "block";
			$("topTitle").style.display = "block";
			refreshProgressBar();
			clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", 900);
			setFastPlay(-1);
			break;
		case top.VK_FAST_FWD:
			pvr.testLog("FAST_FWD press");
			hideMenu(0);
			$('progressArea').style.display = "block";
			$("topTitle").style.display = "block";
			refreshProgressBar();
			clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", 900);
			setFastPlay(1);
			break;
		case top.VK_CHANNEL_UP:
		case top.VK_PREV: //previous
			//pvr.testLog("case top.VK_PREV, seekableFlag = "+seekableFlag);
			if(seekableFlag == false)
			{
				//clearTimeout(metaInfoTimer);
				//previousKeyCount++;
				hideMenu(0);
				$('tipsBox').style.display = 'none';
				$('statusIcon').style.display = 'none';
				//optionInfoArray[OPTION_CHAPTER] = setting.getCurrentChapter();
			}
			else
			{
				previousKeyCount = 0;
				hideMenu(0);
				$('tipsBox').style.display = 'none';
				$('statusIcon').style.display = 'none';
				$('metaDataInfoBox').style.display = 'none';
					$('loadingBox').style.display = 'block';
					setTimeout(function(){
							pvr.mediaStop(0);
							if (!skipFlag3D)
							{
								pvr.setVideo3DMode(0);
							}
							pvr.playPreMediaFile();}, DELAY_TIME);
			}
			break;
		case top.VK_CHANNEL_DOWN:
		case top.VK_NEXT: //next
			//pvr.testLog("case top.VK_NEXT, seekableFlag = "+seekableFlag);
			if(seekableFlag == false)
			{
				//clearTimeout(metaInfoTimer);
				hideMenu(0);
				$('tipsBox').style.display = 'none';
				$('statusIcon').style.display = 'none';
				//optionInfoArray[OPTION_CHAPTER] = setting.getCurrentChapter();
			}
			else
			{	
				hideMenu(0);
				$('tipsBox').style.display = 'none';
				$('statusIcon').style.display = 'none';
				$('metaDataInfoBox').style.display = 'none';
				$('loadingBox').style.display = 'block';
				setTimeout(function(){
					pvr.mediaStop(0);
					if (!skipFlag3D)
					{
						pvr.setVideo3DMode(0);
					}
					pvr.playNextMediaFile();}, DELAY_TIME);
			}
			return;
		case top.VK_LANG:
			pvr.testLog("---------case top.VK_LANG---------");
			toLang();
			break;
		case top.VK_SUBTITLE:
			pvr.testLog("---------case top.VK_SUBTITLE---------");
			toSubtitle();
			break;
		case top.VK_3D://3D mode
			to3D();
			break;
		case top.VK_TV:
			//pvr.testLog("pvrVideoPlay.js, ---top.VK_TV---"+top.VK_TV);
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			switch3DFlag = false;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
			pvr.mediaStop(0);
			if (!skipFlag3D)
			{
				pvr.setVideo3DMode(0);
			}
			pvr.pvrExitUninit();
			multimedia.toRestoreSource();
		    top.g_previousHtmlPage = "channelPlay.html";
			top.g_remindWord = "TvHotKey";
			top.$("main").src = "intermediate.html";
			top.main.focus();
			top.$("operatePage").src = "";
			break;
		case top.VK_EXIT:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			switch3DFlag = false;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
			pvr.mediaStop(0);
			if (!skipFlag3D)
			{
				pvr.setVideo3DMode(0);
			}
			pvr.pvrExitUninit();
			multimedia.toRestoreSource();
			hideMenu(0);
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
			pvr.mediaStop(0);
			if (!skipFlag3D)
			{
				pvr.setVideo3DMode(0);
			}
			pvr.pvrExitUninit();
			multimedia.toRestoreSource();
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
		default:
			break;
	}
	return ret;
}

function toHomePage()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	switch3DFlag = false;
	top.$("globleShow").contentWindow.hiddenGlassRemind();
	top.$("main").onload = function()
	{
		pvr.mediaStop(0);
		if (!skipFlag3D)
		{
			pvr.setVideo3DMode(0);
		}
		pvr.pvrExitUninit();
		multimedia.toRestoreSource();
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

function notifyProcess(evt)
{
  var msg = evt.which;
  //alert("pvrVideoPlay, notifyProcess(), msg = "+msg);
	//È«¾ÖÏûÏ¢
	switch(msg)
	{	
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_POWER_OFF_TIMER://power off timer
			top.systemEventProc(evt);
			return;
		case top.E_MEDIA_EXIT_FOR_CEC_HDMI_PLAY://Areos: add for cec
			//if(dirFlag)
			{
				for(var i = 0; i < 50; i++)
				{
					if(top.g_page[i] != -1)
					{
						top.g_page[i] = -1;
						top.g_pfposition[i] = -1;
					}
					else
					{
						break;
					}
				}
			}
			top.g_searchFlag = 0;
			window.location.href = "channelPlay.html";
			break;
		case top.E_BOOKING_PLAY_START://booking play start¿ª»úÊ±½ÚÄ¿Ô¤¶¨µÄÊ±¼äÒÑ¹ý£¬µ«ÊÇÒÀÈ»ÒªÌáÐÑÓÃ»§×öÒ»Ð©ÇÐÌ¨µÈ²Ù×÷
		case top.E_BOOKING_RECORD_START://booking record start¿ª»úÊ±Â¼ÖÆÔ¤¶¨ÒÑ¾­¹ýÆÚ£¬µ«ÊÇÒÀÈ»ÒªÌáÐÑÓÃ»§ÇÐÌ¨Â¼ÖÆ
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,Õý³£Çé¿öÏÂÇÐÌ¨ÌáÐÑ£¬Ò»·ÖÖÓÇ°ÌáÐÑ
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record startÕý³£Çé¿öÏÂÂ¼ÖÆÌáÐÑ,£¬Ò»·ÖÖÓÇ°ÌáÐÑ
			top.g_temp = "media"; 
			top.systemEventProc(evt);
			return;
		default:
			break;
	}
	
  switch(msg)
	{
		case top.E_MEDIA_FIND_FILE_END: //file search end
			top.g_searchFlag = 1;
			break;
		case top.E_MEDIA_PLAYER_STATUS_STOP: //stop
			pvr.testLog("--------- THIS IS PVR_PLAYBACK_STOP MSG ------------");
			if(playStatus != S_EOS)
			{	
				$('topTitleContent').innerText = "";
				$("startBar").style.width = "0px";
				$("endBar").style.left = "-15px";
				if(progressBarTimer) 
					clearInterval(progressBarTimer);
				$('elspased').innerText = doTime(0);
				$('duration').innerText = doTime(0);

				fileDuration = 0;
				
		    //this one play end ,playing next media

				var repeatMode;
				repeatMode = pvr.videoRepeatMode;
				switch(repeatMode)
				{
					case 0: //normal
					case 1: //random
					case 2: //repeat all
					case 3: //repeat one
						playStatus = S_EOS;
						//$("playStatus").style.backgroundImage = "url('" + playStatusImg[0] + "')";
						//$('playStatusText').style.display = "none";
						break;
					default:
						//window.location.href = top.g_previousHtmlPage;
						break;
				}
			}
			errorFlag = ERROR_NONE;
			playStatus = S_EOS;
			break;
	  case top.E_PVR_PLAYBACK_END://media eos
	  {
			pvr.testLog("--------- THIS IS PVR_PLAYBACK_END MSG ------------");
			$('statusIcon').style.display = 'none';
			$('topTitleContent').innerText = "";
			$('loadingBox').style.display = 'block';
			subtitleCount = 0;
			subtitleStartIndex = 0;
			soundTrackCount = 0;
			soundTrackStartIndex = 0;
			playStatus = S_EOS;
			$('elspased').innerText = "00:00:00";
			$('duration').innerText = "00:00:00";
			fileDuration = 0;
			if(progressBarTimer) 
				clearInterval(progressBarTimer);
			pvr.playNextMediaFile();	//xiehua: api added!!!
			errorFlag = ERROR_NONE;
			playStatus = S_EOS;
			break;
	  }
	  	case top.E_MEDIA_USB_INSERTED://usb insert
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_USB_REMOVE: //usb remove
		{
			pvr.testLog("--------- THIS IS USB_REMOVE MSG ------------");
			pvr.mediaStop(0);	//xiehua: api added!!!
			if (!skipFlag3D)
			{
				pvr.setVideo3DMode(0);
			}
			top.g_mediaPosition = 1;
			window.location.href = "deviceList.html";
			break;
		}
		case top.E_PVR_PLAYBACK_ERR: //play error
		{
			pvr.testLog("--------- THIS IS PVR_PLAYBACK_ERR MSG ------------");
			//operatableFlag = true;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_VIDEO_ERROR;
			$('eb_info').innerText = eb_info[1]; //Video decoding error
			$('tipsBox').style.display = "block";
			break;
		}
		case top.E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT: //video not support
		{
			pvr.testLog("----- THIS IS E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT -----");
			//operatableFlag = true;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_VIDEO_NOT_SUPPORTED;
			$('eb_info').innerText = eb_info[3];
			$('tipsBox').style.display = "block";
			break;
		}
		case top.E_PVR_PLAYBACK_START: 	//playing
		{
			pvr.testLog("--------- THIS IS PVR_PLAYBACK_START MSG ------------");
			if(playStatus == S_PAUSE)
			{
				playStatus = S_PLAY;
				return;
			}
			//pvr.testLog("case top.E_PVR_PLAYBACK_START......");
			hideMenu(0);
			seekableFlag = true;	//pvr.getSeekableStatus();
			skipFlagSubtitle = 0;
			skipFlagSoundtrack = 0;
			skipFlag3D = 0;
			$('optionInfo-4').style.color = "#aaaaaa";
			$('optionInfo-5').style.color = "#aaaaaa";
			$('statusIcon').style.display = 'none';
			playStatus = S_PLAY;
			//pvr.testLog("case top.E_PVR_PLAYBACK_START, playStatus = "+playStatus);
			ff_fb_flag = 0;
			subtitleStartIndex = 0;
			soundTrackStartIndex = 0;
			
			currentFileInfo = pvr.getCurrentPlayingMediaInfo();				//xiehua: api added!!!
			currentFileIndex = pvr.getCurrentPlayingMediaPosition();	//xiehua: api added!!!
			playListIndex = currentFileIndex;
			subtitleCount = pvr.getVideoSubtitleCount(currentFileInfo.path);
			//xiehua: api added!!!
			soundTrackCount = pvr.getVideoSoundTrackCount(currentFileInfo.path);	//xiehua: api added!!!
			resolution = currentFileInfo.resolution;
			pvr.testLog("resolution:"+resolution);
			if (resolution == 1) 
			{
				screenModeArray = screenModeHDArray;
				zoomPreviewImg = zoomPreviewImgHD;
			}
			else//SD
			{
				screenModeArray = screenModeSDArray;
				zoomPreviewImg = zoomPreviewImgSD;
			}
			top.g_mediaPosition = currentFileIndex;
			if(subtitleCount == 0)
			{
				skipFlagSubtitle = 1;
				$('optionInfo-4').style.color = "#787878"; //subtitleinfo
			}
			if(soundTrackCount == 0)
			{
				skipFlagSoundtrack = 1;
				$('optionInfo-5').style.color = "#787878";
			}
			if (setting.is3DPanel == 0) 
			{
				skipFlag3D = 1;
			}
			subtitleInfoList = pvr.getVideoSubtitleList(currentFileInfo.path, subtitleCount);
			soundTrackInfoList = pvr.getVideoSoundTrackInfo();
			optionInfoArray[OPTION_SUBTITLE] = pvr.getVideoSubtitleIndex();
			optionInfoArray[OPTION_SOUND_TRACK] = pvr.getVideoSoundTrackIndex();
			
			$('duration').innerText = getMediaFileDuration(currentFileInfo.path);
			//pvr.testLog("playing event, filename = "+currentFileInfo.name);
			$('topTitleContent').innerText = currentFileInfo.name;
			refreshCPFlag();
			//pvr.testLog("playing event, path = "+currentFileInfo.path);
			var info = pvr.getMediaVideoFileInfo(currentFileInfo.path);
			//pvr.testLog("playing event, call fillFileInformation()...");
			fillFileInformation(info);
			
			if(progressBarTimer)
				clearInterval(progressBarTimer);
			/*
			progressBarTimer = setInterval("refreshProgressBar()", 900);
			*/
			$('loadingBox').style.display = 'none';
			
			break;
		}
		case top.E_MEDIA_PLAYER_STATUS_PAUSE: //pause
			//playStatus = "pause";
			break;
		case top.E_MEDIA_PLAYER_STATUS_FORWORD: //ff
			//playStatus = "ff";
			break;
		case top.E_MEDIA_PLAYER_STATUS_BACKWORD: //fb
			//playStatus = "fb";
			break;
		case top.E_MEDIA_STREAM_BUFFERING: //buffering
			break;
		case top.E_MEDIA_STREAM_BUFFERING_COMPLETE: //buffering complete
			break;
		case top.E_MEDIA_STREAM_VIDEO_ONLY: //video only
			break;
		case top.E_PVR_PLAYBACK_LOOP_EXIT: //repeat-mode-normal: loop end
		{
			pvr.testLog("------ THIS IS PVR_PLAYBACK_LOOP_EXIT MSG ------");
			pvr.mediaStop(0);	//xiehua: api added!!!
			if (!skipFlag3D)
			{
				pvr.setVideo3DMode(0);
			}
			document.location.href = "pvrMediaList.html?media";
			break;
		}
		default:
		{
			//top.systemEventProc(evt);
			break;
		}
	}
}

function toLeft()
{
	if(focusTab == DISPLAY_AREA && playStatus != S_STOP_RESUME)
	{
		focusTab = PROGRESS_AREA;
		$('seekInfo').style.display = 'block';
		$('topTitle').style.display = "block";
		$('progressArea').style.display = "block";
		$('playList').style.display == "none";
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
		refreshProgressBar();
		seekStartTime = elapsed;
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 900);
		seekTime(0);
	}
	else if(focusTab == PROGRESS_AREA)//focus on playing
	{
		clearTimeout(seekSettingTimer);
		refreshProgressBar();
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 1000);
		// seekTime(-1);
		// seekSettingTimer = setTimeout(function(){
		// 		pvr.setSeekPoint(seekPoint);}, SEEK_TIME_DELAY);	//xiehua: api added!!!
		refreshSeekingTime(-1);
		seekSettingTimer = setTimeout(function(){
			pvr.setSeekPoint(seekPoint);
			$('topTitle').style.display = "none";
			$('statusIcon').style.display = "none";
			$('progressArea').style.display = "none";
			hideMenu(0);}, SEEK_TIME_DELAY);
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		
		$('listInfo').style.display = 'none';
		$('information').style.display = 'none';
		$('optionInfoList').style.display = 'none';
		$("optionUpArrow_1").style.display = 'none';
		$("optionDownArrow_1").style.display = 'none';
		$('optionInfoList').style.width = 300 +"px";
		hideMenu(15000);
		return;
	}
	else if(focusTab == PRESET_AREA)
	{
		optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		//pvr.setVideoPicturePreset(optionListIndex);
		setting.previewPictureMode(optionListIndex);
		$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		hideMenu(15000);
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(-1);
	}
	else if (focusTab == SCREEN_MODE_AREA) 
	{
		/**
		
		if (optionListIndex == 0) 
		{
			optionListIndex = 7;
			$("pictureZoomFocus").style.left=335+(optionListIndex - 3)*230+"px";
			$("zoomCheckBox").style.left=360+(optionListIndex - 3)*230+"px";
			$("pictureZoomSelectBar").style.left = 0-234*(optionListIndex - 4) +"px";
		}
		else 
		{
			if ($("pictureZoomFocus").style.left == "335px") 
			{
				optionListIndex = optionListIndex - 1;
				$("pictureZoomSelectBar").style.left = 0-234*(optionListIndex - 4) +"px";
			}
		}
		**/
		if(optionListIndex - 1 >= 0)
		{
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],0); 
			optionListIndex--;
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],1); 
			$('pictureZoomFocus').style.left = 335+ 230 * optionListIndex + "px";
			$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, tmpStartIndex + optionListIndex);
		}
		else if(optionListIndex == 0 && tmpStartIndex > 0)
		{
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],0); 
			tmpStartIndex--;
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],1); 
			$('pictureZoomSelectBar').style.left = - tmpStartIndex * 234 + "px";
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, tmpStartIndex + optionListIndex);
		}
	}
	hideMenu(FADE_TIME);
}

function toRight()
{
	pvr.testLog("toRight(), focusTab = "+focusTab);
	if(focusTab == DISPLAY_AREA && playStatus != S_STOP_RESUME)
	{
		focusTab = PROGRESS_AREA;
		$('seekInfo').style.display = 'block';
		$('topTitle').style.display = 'block';
		$('progressArea').style.display = 'block';
		$('playList').style.display == 'none';
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
		refreshProgressBar();
		seekStartTime = elapsed;
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 900);
		seekTime(0);
	}
	else if(focusTab == PROGRESS_AREA)//focus on playing
	{
		clearTimeout(seekSettingTimer);
		refreshProgressBar();
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 1000);
		// seekTime(1);
		// seekSettingTimer = setTimeout(function(){
		// 	pvr.setSeekPoint(seekPoint);}, SEEK_TIME_DELAY);	//xiehua: api added!!!
		refreshSeekingTime(1);
		seekSettingTimer = setTimeout(function(){
			pvr.setSeekPoint(seekPoint);
			hideMenu(0);
			$('topTitle').style.display = "none";
			$('statusIcon').style.display = "none";
			$('progressArea').style.display = "none";
		}, SEEK_TIME_DELAY);
	}
	else if(focusTab == OPTION_AREA)
	{
		pvr.testLog("toRight(), optionIndex = "+optionIndex);
		if(optionIndex == OPTION_PIC_PRESET)//picture preset
		{
			focusTab = PRESET_AREA;
			OPTION_INFO_COUNT = 5;
			optionListIndex = optionInfoArray[optionIndex];
			picPresetBack = optionListIndex;
			resetFocusShape();
			$('option').style.display = 'none';
			$('picturePresetBar').style.display = 'block';
			
			for (var i = 0; i < picturePresetCheckImg.length; i++) {
				if(i == optionListIndex)
				{
					picturePresetCheckImg[i].style.display = 'block';
				}
				else
				{
					picturePresetCheckImg[i].style.display = 'none';
				}
			};
			for(var i = 0; i < picturePresetCheckImg.length; i++)
			{
				$("pictureBar" + i).innerText = picturePresetArray[i];
			}
			
		}
		else if (optionIndex == OPTION_SCREEN_MODE) 
		{
			focusTab = SCREEN_MODE_AREA;
			OPTION_INFO_COUNT = screenModeArray.length;
			if(optionInfoArray[OPTION_SCREEN_MODE] >= screenModeArray.length - PIC_ZOOM_LIST_LENGTH)
			{
				screenModeStartIndex = screenModeArray.length - PIC_ZOOM_LIST_LENGTH;
				optionListIndex = optionInfoArray[OPTION_SCREEN_MODE] - screenModeStartIndex;
			}
			else
			{
				screenModeStartIndex = optionInfoArray[OPTION_SCREEN_MODE];
				optionListIndex = 0;
			}
			tmpStartIndex = screenModeStartIndex;
			$('option').style.display = "none";

			
			//fillOptionList(optionIndex);
			$("pictureZoomSetOption").innerHTML = "ScreenMode";
			$("pictureZoomSetBar").style.display="block";
				
			zoomSpans = $("pictureZoomSelectBar").getElementsByTagName("span");//picPreset[pictureMode];
			previewImg = $("pictureZoomSelectBar").getElementsByTagName("img");
			zoomDivs = $("pictureZoomSelectBar").getElementsByTagName("div");

			for(var i = 0; i < screenModeArray.length; i++)
			{
				zoomDivs[i].style.display = "block";
				zoomSpans[i].innerHTML=screenModeArray[i];
				previewImg[i].src = zoomPreviewImg[i];
			}

			$('pictureZoomFocus').style.left = 335 + 230 * optionListIndex + "px";
			$('pictureZoomSelectBar').style.left = - tmpStartIndex * 234 + "px";
				/**
				optionListIndex = optionInfoArray[OPTION_SCREEN_MODE];
				if (optionListIndex < 4) 
				{
					$("pictureZoomFocus").style.left=335+optionListIndex*230+"px";
					$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
					$("pictureZoomSelectBar").style.left = 0 +"px";
				}
				else if(optionListIndex >= 4 )
				{
					$("pictureZoomFocus").style.left=335+4*230+"px";
					$("zoomCheckBox").style.left=360+4*230+"px";
					
					$("pictureZoomSelectBar").style.left = 0-234*(optionListIndex - 4) +"px";
				}
				**/
				hideMenu(FADE_TIME);
			return;
		}
		else if(optionIndex == OPTION_INFORMATION)//info
		{
			//pvr.testLog("toRight(), info...");
			focusTab = OPTION_DETAIL_AREA;
			resetFocusShape();
			$('listInfo').style.display = 'none';
			$('optionInfoList').style.height = 5+80*3+"px";
			
			var tmpTop = optionSecondListTopDistance + optionIndex * 80 - optionFirstStartIndex * 80;
			var tmpTopLimit = 1080 - 3 * 80 - 45;

			$('optionInfoList').style.top = (tmpTop > tmpTopLimit)? tmpTopLimit + "px" : tmpTop + "px";

			setScroll(informationSpan[0],1);
			$('information').style.display = 'block';
			$('optionInfoList').style.display = 'block';
			hideMenu(15000);
			return;
		}
		else
		{
			var num = 5;
			switch(optionIndex)
			{
				case OPTION_PIC_PRESET:
					optionListIndex = optionInfoArray[optionIndex];
					OPTION_INFO_COUNT = 5;
					break;
				case OPTION_BACK_LIGHT:
				case OPTION_BRIGHTNESS:
				case OPTION_CONTRAST:
				case OPTION_SATURATION:
				case OPTION_TINT:
				case OPTION_SHARPNESS:
					hideMenu(0);
					optionListIndex = optionInfoArray[optionIndex];
					displayOptionBarArea(getBarIndex(optionIndex));
					focusTab = OPTION_BAR_AREA;
					hideMenu(FADE_TIME_15);
					return;
				case OPTION_SOUND_PRESET:
					OPTION_INFO_COUNT = soundPresetArray.length;
					optionListIndex = optionInfoArray[optionIndex];
					soundEffectBack = optionListIndex;
					num = soundPresetArray.length;
					break;
				case OPTION_3D_MODE:
					OPTION_INFO_COUNT = Mode3DArray.length - 1;
					optionListIndex = optionInfoArray[optionIndex];
					num = Mode3DArray.length - 1;
					break;
				case OPTION_SUBTITLE:
					OPTION_INFO_COUNT = subtitleCount + 1;
					if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
					{
						if(optionInfoArray[OPTION_SUBTITLE] >= OPTION_INFO_COUNT - OPTION_INFO_MAX)
						{
							subtitleStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
						}
						else
						{
							subtitleStartIndex = optionInfoArray[OPTION_SUBTITLE];
							optionListIndex = 0;
							tmpStartIndex = subtitleStartIndex;
						}
					}				
					optionListIndex = optionInfoArray[OPTION_SUBTITLE] - subtitleStartIndex;
					tmpStartIndex = subtitleStartIndex;
					num = OPTION_INFO_COUNT;
					break;
				case OPTION_SOUND_TRACK:
					OPTION_INFO_COUNT = soundTrackCount;
					if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
					{
						if(optionInfoArray[OPTION_SOUND_TRACK] >= OPTION_INFO_COUNT - OPTION_INFO_MAX)
						{
							soundTrackStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
						}
						else
						{
							soundTrackStartIndex = optionInfoArray[OPTION_SOUND_TRACK];
							optionListIndex = 0;
							tmpStartIndex = soundTrackStartIndex;
						}
					}
					optionListIndex = optionInfoArray[OPTION_SOUND_TRACK] - soundTrackStartIndex;
					tmpStartIndex = soundTrackStartIndex;
					num = OPTION_INFO_COUNT;
					break;
			}
			focusTab = OPTION_DETAIL_AREA;
			resetFocusShape();
			$('listInfo').style.display = 'block';
			$('information').style.display = 'none';
			$("optionInfoList").style.display = 'block';
			//optionListIndex = optionInfoArray[optionIndex];
			setListInfoTop(optionIndex,num);
			fillOptionList(optionIndex);
			
		}
		hideMenu(15000);
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		setSPOption();
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(1);
	}
	else if(focusTab == PRESET_AREA)
	{
		optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
		//pvr.setVideoPicturePreset(optionListIndex);
		setting.previewPictureMode(optionListIndex);
		$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		hideMenu(15000);
		return;
	}
	else if(focusTab == SCREEN_MODE_AREA)
	{
		/**
		if (optionListIndex >= 4 && optionListIndex < 7) 
		{
			optionListIndex = optionListIndex + 1;
			$("pictureZoomSelectBar").style.left = 0-234*(optionListIndex - 4) +"px";
		}
		else if(optionListIndex < 4)
		{
			optionListIndex = parseInt((optionListIndex + 1) % 5, 10);
			$("pictureZoomFocus").style.left=335+optionListIndex*230+"px";
			$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
			$("pictureZoomSelectBar").style.left = 0 +"px";
		}
		else if (optionListIndex == 7) 
		{
			optionListIndex = 0;
			screenModeStartIndex = 0;
			$("pictureZoomFocus").style.left=335+optionListIndex*230+"px";
			$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
			$("pictureZoomSelectBar").style.left = 0 +"px";
		}
		**/
		
		FOCUS_DISTANCE = 230;
		if(optionListIndex + 1 < PIC_ZOOM_LIST_LENGTH)
		{
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],0); 
			optionListIndex++;
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],1); 
			$('pictureZoomFocus').style.left = 335 + FOCUS_DISTANCE * optionListIndex + "px";
			$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, tmpStartIndex + optionListIndex);
		}
		else if(optionListIndex == PIC_ZOOM_LIST_LENGTH - 1 
			&& optionListIndex + tmpStartIndex + 1 < screenModeArray.length)
		{
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],0); 
			tmpStartIndex++;
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],1); 
			$('pictureZoomSelectBar').style.left = - tmpStartIndex * 234 + "px";
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, tmpStartIndex + optionListIndex);
		}
		
	}

	hideMenu(FADE_TIME);
}

function setOptionBarValue(type)//[1]right [-1]left
{
	
	var tmpMax = SHORT_BAR_MAX_VALUE;
	if(type == 1)//right
	{
		optionListIndex = (optionListIndex + 1 > tmpMax) ? tmpMax : optionListIndex + 1;
	}
	else//left
	{
		optionListIndex = (optionListIndex - 1 < 0) ? 0 : optionListIndex - 1;
	}
	setBarValue(tmpMax);
}

function setBarValue(tmpValue)
{
	optionInfoArray[optionIndex] = optionListIndex;
	switch(optionIndex)
	{
		case OPTION_BACK_LIGHT:
			setting.backLight = optionListIndex;
			break;
		case OPTION_BRIGHTNESS:
			setting.brightness = optionListIndex;
			break;
		case OPTION_CONTRAST:
			setting.contrast = optionListIndex;
			break;
		case OPTION_SATURATION:
			setting.saturation = optionListIndex;
			break;
		case OPTION_TINT:
			setting.hue = optionListIndex;
			break;
		case OPTION_SHARPNESS:
			setting.sharpness = optionListIndex;
			break;
		default:
			break;
	}
	refreshBarArea(optionBarNameArray[getBarIndex(optionIndex)].getElementsByTagName('img'), 
		optionListIndex, tmpValue, OPTION_BAR_LENGTH);
	optionBarNameArray[getBarIndex(optionIndex)].getElementsByClassName('optionBarValue')[0].innerText = optionListIndex;
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
		default:
			return 0;
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
		default:
			return OPTION_BACK_LIGHT;
	}
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

	//displayOptionBarArrows(index);
	$('optionBarArea').style.display = 'block';
}

function displayOptionBarArrows(index)
{
	$('optionBarUpArrow').style.display = (index > 1 && index < 6) ? 'block' : 'none';
	$('optionBarDownArrow').style.display = (index < 6 - 2 && index > 0) ? 'block' : 'none';
}

function fillOptionBarArea()
{
	$('backLightBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_BACK_LIGHT];
	$('brightnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_BRIGHTNESS];
	$('contrastBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_CONTRAST];
	$('saturationBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_SATURATION];
	$('tintBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_TINT];
	$('sharpnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_SHARPNESS];

	refreshBarArea($('backLightBar').getElementsByTagName('img'), optionInfoArray[OPTION_BACK_LIGHT], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('brightnessBar').getElementsByTagName('img'), optionInfoArray[OPTION_BRIGHTNESS], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('contrastBar').getElementsByTagName('img'), optionInfoArray[OPTION_CONTRAST], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('saturationBar').getElementsByTagName('img'), optionInfoArray[OPTION_SATURATION], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('tintBar').getElementsByTagName('img'), optionInfoArray[OPTION_TINT], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('sharpnessBar').getElementsByTagName('img'), optionInfoArray[OPTION_SHARPNESS], 100, OPTION_BAR_LENGTH);
	
}

function toUp()
{
	if(focusTab == OPTION_AREA)
	{
		//optionIndex = parseInt((optionIndex + OPTION_MAX_COUNT - 1) % OPTION_MAX_COUNT, 10);
		/**
		skipOptionCheck(-1);


		if(optionIndex == OPTION_SOUND_TRACK)	//focus:info->picture.
		{
			$('listInfo').style.display = 'none';
			$('information').style.display = 'none';
			$('optionInfoList').style.display = 'none';
		}
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE 
			+ FOCUS_DISTANCE * optionIndex + "px";
		**/
		setScroll(optionListNameSpan[optionIndex],0);
		setOptionFocusPosition(-1);
		arrowOptionDisplay();
		$('optionInfoFocus').style.top = optionIndex * FOCUS_DISTANCE + "px";
		$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
		setScroll(optionListNameSpan[optionIndex],1);
		hideMenu(15000);
		return;
	}
	else if(focusTab == QUICK_MENU_AREA)
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
				quickMenuListDiv[i].style.display = "block";
				switch(quickMenuType)
				{
					case QUICK_MENU_SUBTITLE:
					if (i == 0) 
					{
						quickMenuListDiv[i].innerText = offinfo;
					}
					else
					{
						quickMenuListDiv[i].innerText = subtitleInfoList[i - 1].name;
					}
					break;
					case QUICK_MENU_LANG:
					quickMenuListDiv[i].innerText = soundTrackInfoList[i].language;
					break;
					case QUICK_MENU_3D:
					quickMenuListDiv[i].innerText = Mode3DArray[i];
					break;
				}
			}
			if(quickMenuStartIndex == 0 && quickMenuType == QUICK_MENU_SUBTITLE)
			{
				quickMenuListDiv[0].style.display = "block";
				quickMenuListDiv[0].innerText = offinfo;
			}
		}
		else if(quickMenuIndex - 1 >= 0)
		{
			quickMenuIndex--;
		}
		$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionIndex != OPTION_INFORMATION)
	{
		//optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		//$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		if(OPTION_INFO_COUNT <= OPTION_INFO_MAX)
		{
			optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
			$('optionFocus_2').style.top =  FOCUS_DISTANCE * (0+optionListIndex) + FOCUS_TOP_DISTANCE + "px";
			pvr.testLog("1 up optionFocus_2 top:"+$('optionFocus_2').style.top);
			if (optionIndex == OPTION_SOUND_PRESET) 
			{
				setting.previewSoundEffect(optionListIndex);
			}
		}
		else
		{
			if(optionListIndex - 1 >= 0)
			{
				optionListIndex--;
				$('optionFocus_2').style.top =  FOCUS_DISTANCE * (0+optionListIndex) + FOCUS_TOP_DISTANCE + "px";
				pvr.testLog("2 up optionFocus_2 optionListIndex:"+optionListIndex);
			}
			else if(optionIndex == OPTION_SCREEN_MODE)
			{
				moveUpRefreshSecList(screenModeArray, "", screenModeArray.length, 0);
			}
			else if(optionIndex == OPTION_SUBTITLE)
			{
				moveUpRefreshSecList(subtitleInfoList, "", subtitleInfoList.length, 0);
			}
			else if(optionIndex == OPTION_SOUND_TRACK)
			{
				moveUpRefreshSecList(soundTrackInfoList, "", soundTrackInfoList.length, 0);
			}
		}
		hideMenu(15000);
		return;
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListFocusIndex - 1 >= 0 && playListFocusIndex < MAX_LENGTH_ONE_PAGE)
		{
			$("name"+playListFocusIndex).style.color = "#aaaaaa";
			//resetScrollHtmlInner($("name"+playListFocusIndex),  "hidden", "ellipsis");
			setScroll($("name"+playListFocusIndex),0);
			playListFocusIndex--;
			//resetScrollHtmlInner($("name"+playListFocusIndex), "-webkit-marquee", "clip");
			setScroll($("name"+playListFocusIndex),1);
			$('focus').style.top = playlistFocusTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			$("name"+playListFocusIndex).style.color = "#ffffff";
		}
		else if(playListFocusIndex == 0 && playListStart == 0)
		{
			pvr.testLog("toUp(), up to the first pvr video of the play list.");
			$(iUpArrowName).src = "images/Icon-T-Disable.png";
		}
		else
		{
			playListStart--;
			$(iDownArrowName).src = "images/Icon-B.png";
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
		}
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(-1);//up
	}
	hideMenu(FADE_TIME);
}

function toDown()
{
	if(focusTab == DISPLAY_AREA || focusTab == PROGRESS_AREA)//focus on playing
	{
		focusTab = PLAY_LIST_AREA;
		if(currentPlayList.length <= PLAYLIST_MAX_LENGTH)
		{
			playListStart = 0;
			playListFocusIndex = playListIndex;
			$(iUpArrowName).src = "images/Icon-T-Disable.png";
			$(iDownArrowName).src = "images/Icon-B-Disable.png";
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
		//pvr.testLog("toDown(), DISPLAY_AREA, length = "+currentPlayList.length);
		//pvr.testLog("toDown(), DISPLAY_AREA, playListStart = "+playListStart);
		showPlayListScrollBar(currentPlayList.length, playListStart);
		resetFocusShape();
		$('playList').style.display = 'block';
		resetScrollHtmlInner($("name"+playListFocusIndex), "-webkit-marquee", "clip");
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
				quickMenuListDiv[i].style.display = "block";
				switch(quickMenuType)
				{
					case QUICK_MENU_SUBTITLE:
					quickMenuListDiv[i].innerText = subtitleInfoList[i + quickMenuStartIndex - 1].name;
					break;
					case QUICK_MENU_LANG:
					quickMenuListDiv[i].innerText = soundTrackInfoList[i].language;
					break;
					case QUICK_MENU_3D:
					quickMenuListDiv[i].innerText = Mode3DArray[i];
					break;
				}
			}
		}
		else if(quickMenuIndex + 1 < MAX_QUICK_MENU_COUNT)
		{
			quickMenuIndex++;
		}
		$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
		pvr.testLog("quickMenuIndex:"+quickMenuIndex);
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListFocusIndex >= 0 && playListFocusIndex + 1 < MAX_LENGTH_ONE_PAGE)
		{
			$("name"+playListFocusIndex).style.color = "#aaaaaa";
			//resetScrollHtmlInner($("name"+playListFocusIndex), "hidden", "ellipsis");
			setScroll($("name"+playListFocusIndex),0);
			playListFocusIndex++;
			//resetScrollHtmlInner($("name"+playListFocusIndex), "-webkit-marquee", "clip");
			setScroll($("name"+playListFocusIndex),1);
			$('focus').style.top = playlistFocusTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			$("name"+playListFocusIndex).style.color = "#ffffff";
		}
		else if((playListStart + PLAYLIST_MAX_LENGTH) < currentPlayList.length)
		{
			$(iUpArrowName).src = "images/Icon-T.png";
			playListStart++;
			refreshPlayList();
			refreshCPFlag();
			//pvr.testLog("toDown(), PLAY_LIST_AREA, length = "+currentPlayList.length);
			//pvr.testLog("toDown(), PLAY_LIST_AREA, playListStart = "+playListStart);
			showPlayListScrollBar(currentPlayList.length, playListStart);
		}
		else
		{
			pvr.testLog("toUp(), down to the last pvr video of the play list.");
			$(iDownArrowName).src = "images/Icon-B-Disable.png";
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		//optionIndex = parseInt((optionIndex + 1) % OPTION_MAX_COUNT, 10);
		// skipOptionCheck(1);
		// if(optionIndex == OPTION_PIC_PRESET)	//focus:info->picture.
		// {
		// 	$('listInfo').style.display = 'none';
		// 	$('information').style.display = 'none';
		// 	$('optionInfoList').style.display = 'none';
		// }
		// $('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		setScroll(optionListNameSpan[optionIndex],0);
		setOptionFocusPosition(1);
		arrowOptionDisplay();
		$('optionInfoFocus').style.top = optionIndex * FOCUS_DISTANCE + "px";
		$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
		setScroll(optionListNameSpan[optionIndex],1);
		hideMenu(15000);
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(1);//down
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionIndex != OPTION_INFORMATION)
	{
		if(OPTION_INFO_COUNT <= OPTION_INFO_MAX)
		{
			pvr.testLog("000000000000");
			optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
			$('optionFocus_2').style.top =  FOCUS_DISTANCE * (0+optionListIndex) + FOCUS_TOP_DISTANCE + "px";
			if (optionIndex == OPTION_SOUND_PRESET) 
			{
				setting.previewSoundEffect(optionListIndex);
			}
		}
		else
		{
			if(optionListIndex + 1 < OPTION_INFO_MAX)
			{
				optionListIndex++;
				pvr.testLog("1111111111");
				$('optionFocus_2').style.top =  FOCUS_DISTANCE * (0+optionListIndex) + FOCUS_TOP_DISTANCE + "px";
			}
			else if(optionIndex == OPTION_SCREEN_MODE)
			{
				moveDownRefreshSecList(screenModeArray, "", screenModeArray.length, 0);
			}
			else if(optionIndex == OPTION_SUBTITLE)
			{
				moveDownRefreshSecList(subtitleInfoList, "", subtitleInfoList.length, 0);
			}
			else if(optionIndex == OPTION_SOUND_TRACK)
			{
				moveDownRefreshSecList(soundTrackInfoList, "", soundTrackInfoList.length, 0);
			}
		}
		hideMenu(15000);
		return;
	}
	hideMenu(FADE_TIME);
}

function arrowOptionDisplay()
{
	$('arrowUpOption').style.display = (optionFirstStartIndex == 0) ? 'none' : 'block';
	$('arrowDownOption').style.display = (optionFirstStartIndex + OPTION_FIRST_MAX_COUNT < optionFirstListLength) ? 'block' : 'none';
}

function setOptionFocusPosition(type)//[-1]up [1]down
{
	//setOptionMenuFocus(-1, optionFocusIndex_1);
	if(type == 1)//down
	{
		if(optionFirstListLength <= OPTION_FIRST_MAX_COUNT)
		{
			optionFirstStartIndex = 0;
			optionIndex = (optionIndex + 1 < optionFirstListLength)
				? optionIndex + 1 : 0;
		}
		else
		{
			if(optionIndex + 1 < optionFirstStartIndex + OPTION_FIRST_MAX_COUNT)
			{
				optionIndex++;
			}
			else if(optionFirstStartIndex < optionFirstListLength - OPTION_FIRST_MAX_COUNT)
			{
				optionFirstStartIndex++;
				optionIndex++;
			}
			else
			{
				optionFirstStartIndex = 0;
				optionIndex = 0;
			}
		}
	}
	else if(type == -1)//up
	{
		if(optionFirstListLength <= OPTION_FIRST_MAX_COUNT)
		{
			optionFirstStartIndex = 0;
			optionIndex = optionIndex - 1 >= 0
				? optionIndex - 1 : optionFirstListLength - 1;
		}
		else
		{
			if(optionIndex > optionFirstStartIndex)
			{
				optionIndex--;
			}
			else if(optionFirstStartIndex > 0)
			{
				optionFirstStartIndex--;
				optionIndex--;
			}
			else
			{
				optionFirstStartIndex = optionFirstListLength - OPTION_FIRST_MAX_COUNT;
				optionIndex = optionFirstListLength - 1;
			}
		}
	}
	//setOptionMenuFocus(optionIndex, -1);
}

function setOptionBarPosition(type)//[1]down [-1]up
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
	optionListIndex = optionInfoArray[optionIndex];
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

function toOK()//DISPLAY_AREA, OPTION_AREA, OPTION_DETAIL_AREA, PLAY_LIST_AREA, PROGRESS_AREA
{
	if(focusTab == DISPLAY_AREA)//focus on playing
	{
		//pvr.testLog("toOK(), playStatus = "+playStatus);
		//pvr.testLog("toOK(), ff_fb_flag = "+ff_fb_flag);
		if(playStatus == S_PLAY && ff_fb_flag == 0)
		{
			playStatus = S_PAUSE;
			$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
			$('topTitle').style.display = "block";
			$('statusIcon').style.display = "block";
			$('progressArea').style.display = "block";
			refreshProgressBar();
			pvr.mediaPause();	//xiehua: api added!!!
		}
		else if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
		{
			playStatus = S_PLAY;
			pvr.mediaResume();	//xiehua: api added!!!
			$('statusIcon').style.display = 'none';
			hideMenu(0);
			return;
		}
		else if(ff_fb_flag != 0)
		{
			//$('statusIcon').src = "images/USB-Icon-Play.png";
			ff_fb_flag = 0;
			pvr.mediaFastForward(1);		//xiehua: api added!!!
			playStatus = S_PLAY;
			$('statusIcon').style.display = 'none';
			hideMenu(0);
			return;
		}
	}
	else if(focusTab == PROGRESS_AREA)
	{
		//pvr.setSeekPoint(seekPoint);	//xiehua: api added!!!
		clearTimeout(seekSettingTimer);
		pvr.setSeekPoint(seekPoint);
		$('topTitle').style.display = "none";
		$('statusIcon').style.display = "none";
		$('progressArea').style.display = "none";
		$("seekInfo").style.display = "none";
		focusTab = DISPLAY_AREA;
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		playStatus = S_EOS;
		pvr.mediaStop(0);	//xiehua: api added!!!
		if (!skipFlag3D)
		{
			pvr.setVideo3DMode(0);
		}
		mediaPlay(currentPlayList[playListStart + playListFocusIndex].path);
	}
	else if(focusTab == QUICK_MENU_AREA)
	{
		if(quickMenuType == QUICK_MENU_SUBTITLE)
		{
			pvr.setVideoSubtitleIndex(quickMenuStartIndex + quickMenuIndex);
		}
		else if(quickMenuType == QUICK_MENU_LANG)
		{
			pvr.setVideoSoundTrackIndex(quickMenuStartIndex + quickMenuIndex);
		}
		else if (quickMenuType == QUICK_MENU_3D) 
		{
			pvr.setVideo3DMode(quickMenuStartIndex + quickMenuIndex);
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
				}
			}
			pvr.testLog("setVideo3DMode:"+quickMenuStartIndex + quickMenuIndex+" getVideo3DMode:"+pvr.getVideo3DMode());
		}
		hideMenu(0);
	}
	else if(focusTab == OPTION_AREA)
	{
		toRight();
	}
	else if(focusTab == OPTION_DETAIL_AREA || focusTab == PRESET_AREA || focusTab == SCREEN_MODE_AREA)
	{
		setSPOption();
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		toBack();
	}
	else if(focusTab == TIPS_AREA)
	{
		switch(errorFlag)
		{ 
			case ERROR_VIDEO_ERROR:
			case ERROR_AUDIO_ERROR:
			case ERROR_VIDEO_NOT_SUPPORTED:
				pvr.testLog("case ERROR_VIDEO_ERROR 000......");
				clearAllTimer();
				top.g_currentMedia = pvr.getCurrentPlayingMediaInfo();
				top.g_mediaPosition = pvr.getCurrentPlayingMediaPosition();
				hideMenu(0);
				$('tipsBox').style.display = "none";
				$('statusIcon').style.display = "none";
				pvr.mediaStop(0);
				if (!skipFlag3D)
				{
					pvr.setVideo3DMode(0);
				}
				playStatus = S_EOS;
				pvr.testLog("case ERROR_VIDEO_ERROR 111......");
				document.location.href = "pvrMediaList.html?media";
				break;
			default:
				pvr.testLog("case default 000......");
				break;
		}
	}
	hideMenu(FADE_TIME);
}

function toBack()
{
	pvr.testLog("toBack(), focusTab = "+focusTab);
	switch(focusTab)
	{
		case DISPLAY_AREA:
			switch3DFlag = false;
			top.$("globleShow").contentWindow.hiddenGlassRemind();
			pvr.mediaStop(1);	//xiehua: api added!!!
			if (!skipFlag3D)
			{
				pvr.setVideo3DMode(0);
			}
			hideMenu(0);
			document.location.href = "pvrMediaList.html?media";
		break;
		case SCREEN_MODE_AREA:
			focusTab = OPTION_AREA;
			$('option').style.display = "block";
			$("pictureZoomSetBar").style.display = "none";
		break;
		case OPTION_DETAIL_AREA:
			toLeft();
		break;
		case OPTION_BAR_AREA:
			toOption(optionIndex);
		break;
		default:
			hideMenu(0);
			if(focusTab == PRESET_AREA)
			{
				toOption(0);
				return;
			}
			$("name"+playListFocusIndex).style.color = "#aaaaaa";
			focusTab = DISPLAY_AREA;
		break;
	}
	
}


function toOption(index)
{
	if (focusTab == TIPS_AREA) 
	{
		return;
	}
	else if($('option').style.display == "block")
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

		optionIndex = index;
		optionListIndex = 0;
		focusTab = OPTION_AREA;
		$('option').style.display = 'block';
		$('focus').style.display = 'none'; 
		$('topTitle').style.display = 'none'; 
		$('playList').style.display = 'none';
		$('seekInfo').style.display = 'none';
		$('optionBarArea').style.display = 'none';
		$('progressArea').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		
		displayOptionList();
		resetFocusShape();
		setScroll(optionListNameSpan[index],1);
		//setOptionMenuFocus(); //to be continued , 变换右箭头颜色
		arrowOptionDisplay(); //to be continued , 上下箭头是否显示
		hideMenu(FADE_TIME);
		

		// optionInfoArray[OPTION_PIC_PRESET] = pvr.getVideoPicturePreset();
		// optionInfoArray[OPTION_SOUND_PRESET] = pvr.videoSoundEffect;
		// if (resolution == 1) 
		// {
		// 	optionInfoArray[OPTION_SCREEN_MODE] = pvr.getVideoScreenMode(0);
		// }else
		// {
		// 	optionInfoArray[OPTION_SCREEN_MODE] = pvr.getVideoScreenMode(1);
		// }
		
		
		// if(!skipFlag3D)
		// {
		// 	optionInfoArray[OPTION_3D_MODE] = pvr.getVideo3DMode();
		// }
		// if(!skipFlagSubtitle)
		// {
		// 	optionInfoArray[OPTION_SUBTITLE] = pvr.getVideoSubtitleIndex();
		// }
		// if(!skipFlagSoundtrack)
		// {
		// 	optionInfoArray[OPTION_SOUND_TRACK] = pvr.getVideoSoundTrackIndex();
		// }
		
		// $('picturePresetContent').innerText = picturePresetArray[optionInfoArray[OPTION_PIC_PRESET]];
		// $('soundpresetContent').innerText = soundPresetArray[optionInfoArray[OPTION_SOUND_PRESET]];
		// $('screenModeContent').innerText = screenModeArray[optionInfoArray[OPTION_SCREEN_MODE]];

		// if(!skipFlag3D)
		// {
		// 	$('3DContent').innerText = Mode3DArray[optionInfoArray[OPTION_3D_MODE]];
		// }
		// if(!skipFlagSubtitle)
		// {
		// 	if(optionInfoArray[OPTION_SUBTITLE] == 0)
		// 	{
		// 		$('subtitleContent').innerText = offinfo;
		// 	}
		// 	else
		// 	{
		// 		$('subtitleContent').innerText = subtitleInfoList[optionInfoArray[OPTION_SUBTITLE] - 1 ].name;
		// 	}
		// }
		// if(!skipFlagSoundtrack)
		// {
		// 	$('soundTrackContent').innerText = soundTrackInfoList[optionInfoArray[OPTION_SOUND_TRACK]].language;
		// }
		//scroll
		// setScroll($("picturePresetContent"),1);
		// setScroll($("soundpresetContent"),1);
		// setScroll($("screenModeContent"),1);
		// setScroll($("subtitleContent"),1);
		// setScroll($("soundTrackContent"),1);
	}
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
				currentOptionFirstListArray[displayIndex] = $('optionSoundPreset');
				OPTION_SOUND_PRESET = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SOUND_PRESET);
				break;
			case optionIndexScreenMode:
				currentOptionFirstListArray[displayIndex] = $('optionScreenMode');
				OPTION_SCREEN_MODE = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SCREEN_MODE);
				break;
			case optionIndex3DMode:
				if(skipFlag3D)
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
			case optionIndexInfo:
				currentOptionFirstListArray[displayIndex] = $('optionInfo');
				OPTION_INFORMATION = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_INFORMATION);
				break;
			default:
				console.log("console.log-checkOptionListInfo-optionListLi-"+i);
				break;

		}
	}
	optionFirstListLength = displayIndex;
}

function refreshOptionInfo()
{
	optionInfoArray[OPTION_PIC_PRESET] = pvr.getVideoPicturePreset();
	optionInfoArray[OPTION_BACK_LIGHT] = setting.backLight;
	optionInfoArray[OPTION_BRIGHTNESS] = setting.brightness;
	optionInfoArray[OPTION_CONTRAST]   = setting.contrast;
	optionInfoArray[OPTION_SATURATION] = setting.saturation;
	optionInfoArray[OPTION_TINT]       = setting.hue;
	optionInfoArray[OPTION_SHARPNESS]  = setting.sharpness;
	optionInfoArray[OPTION_SOUND_PRESET] = pvr.videoSoundEffect;
	if (resolution == 1) 
	{
		optionInfoArray[OPTION_SCREEN_MODE] = pvr.getVideoScreenMode(0);
	}
	else
	{
		optionInfoArray[OPTION_SCREEN_MODE] = pvr.getVideoScreenMode(1);
	}
	if(!skipFlag3D)
	{
		optionInfoArray[OPTION_3D_MODE] = pvr.getVideo3DMode();
	}
	if(!skipFlagSubtitle)
	{
		optionInfoArray[OPTION_SUBTITLE] = pvr.getVideoSubtitleIndex();
	}
	if(!skipFlagSoundtrack)
	{
		optionInfoArray[OPTION_SOUND_TRACK] = pvr.getVideoSoundTrackIndex();
	}
	
}

function fillOptionFirstList()
{
	$('optionPicturePreset').getElementsByClassName('optionContentClass')[0].innerText
		= picturePresetArray[optionInfoArray[OPTION_PIC_PRESET]];

	$('optionBackLight').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_BACK_LIGHT];
	refreshBarArea($('optionBackLightBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_BACK_LIGHT], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionBrightness').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_BRIGHTNESS];
	refreshBarArea($('optionBrightnessBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_BRIGHTNESS], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionContrast').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_CONTRAST];
	refreshBarArea($('optionContrastBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_CONTRAST], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSaturation').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_SATURATION];
	refreshBarArea($('optionSaturationBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_SATURATION], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionTint').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_TINT];
	refreshBarArea($('optionTintBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_TINT], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSharpness').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_SHARPNESS];
	refreshBarArea($('optionSharpnessBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_SHARPNESS], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSoundPreset').getElementsByClassName('optionContentClass')[0].innerText
		= soundPresetArray[optionInfoArray[OPTION_SOUND_PRESET]];

	$('optionScreenMode').getElementsByClassName('optionContentClass')[0].innerText
		= screenModeArray[optionInfoArray[OPTION_SCREEN_MODE]];

	if(!skipFlag3D)
	{
		$('option3DMode').getElementsByClassName('optionContentClass')[0].innerText
			= Mode3DArray[optionInfoArray[OPTION_3D_MODE]];
	}

	if(!skipFlagSubtitle)
	{
		if(optionInfoArray[OPTION_SUBTITLE] == 0)
		{
			$('optionSubtitle').getElementsByClassName('optionContentClass')[0].innerText
			 = offinfo;
		}
		else
		{
			$('optionSubtitle').getElementsByClassName('optionContentClass')[0].innerText
			 = subtitleInfoList[optionInfoArray[OPTION_SUBTITLE] - 1 ].name;
		}
	}

	if(!skipFlagSoundtrack)
	{
		$('optionSoundTrack').getElementsByClassName('optionContentClass')[0].innerText
			= soundTrackInfoList[optionInfoArray[OPTION_SOUND_TRACK]].language;
	}

}

function refreshBarArea(tmpBar, value, maxValue, length)
{
	tmpBar[1].style.width = value * length / maxValue + "px";
	tmpBar[2].style.left = value * length / maxValue + "px";
}

function fillFileInformation(file)
{
	var tmp = (file.name != null && file.name != "") ? file.name : naInfo;
	informationSpan[0].innerText = fileNameText + ": " + tmp;
	var tmp1 = (file.year != null && file.year != "") ? file.year : naInfo;
	var tmp2 = (file.month != null && file.month != "") ? file.month : naInfo;
	var tmp3 = (file.day != null && file.day != "") ? file.day : naInfo;
	if(tmp2 < 10) tmp2 = "0" + tmp2;
	if(tmp3 < 10) tmp3 = "0" + tmp3;
	informationSpan[1].innerText = fileDateText + ": " + tmp3 + "/" + tmp2 + "/"+ tmp1;
	informationSpan[2].innerText = fileDurationText + ": " + $('duration').innerText;
	
	
}

function fillOptionList(index)
{
	switch(index)
	{
		case OPTION_PIC_PRESET://picture preset
			for(var i = 0; i < 5; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = picturePresetArray[i];
			}
			for(var i = 5; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case OPTION_SOUND_PRESET:
			for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].style.display = 'block';
					inforListSpan[i].innerText = soundPresetArray[i];
				}
				
				for(var i = soundPresetArray.length; i < inforListSpan.length; i++)
				{
					inforListSpan[i].style.display = 'none';
					inforListSpan[i].innerText = "";
				}
			break;
		case OPTION_SCREEN_MODE://screen mode
				/**
				if(screenModeStartIndex > OPTION_INFO_COUNT - OPTION_INFO_MAX)
				{
					screenModeStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				} 
				**/
				/**
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].style.display = 'block';
					inforListSpan[i].innerText = screenModeArray[i + screenModeStartIndex];
					$('optionDownArrow_1').style.display = 'block';
				}
				**/
				
			break;
		case OPTION_3D_MODE://3d mode
			for(var i = 0; i < Mode3DArray.length - 1; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = Mode3DArray[i];
			}

			for(var i = Mode3DArray.length - 1; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case OPTION_SUBTITLE:	//subtitle
			if (OPTION_INFO_COUNT > OPTION_INFO_MAX) 
			{
				if(subtitleStartIndex > OPTION_INFO_COUNT - OPTION_INFO_MAX)
				{
					subtitleStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				} 
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					if (i + subtitleStartIndex == 0) 
					{
						inforListSpan[i].innerText = offinfo;
					}
					else
					{
						inforListSpan[i].innerText = subtitleInfoList[i + subtitleStartIndex - 1].name;
					}
					inforListSpan[i].style.display = 'block';
				}
				
			}
			else
			{
				var tempvalue = subtitleCount + 1;
				pvr.testLog("tempvalue:"+tempvalue+" subtitleStartIndex:"+subtitleStartIndex);
				for(var i = 0; i < tempvalue ; i++)
				{
					if ( i == 0) 
					{
						inforListSpan[i].style.display = 'block';
						inforListSpan[i].innerText = offinfo;
					}
					else
					{
						inforListSpan[i].style.display = 'block';
						inforListSpan[i].innerText = subtitleInfoList[i + subtitleStartIndex - 1].name;
					}
				}
				
				for(var i = tempvalue; i < inforListSpan.length; i++)
				{
					inforListSpan[i].style.display = 'none';
					inforListSpan[i].innerText = "";
				}
			}

			break;
		case OPTION_SOUND_TRACK:	//sound track
			//fillOptionDetail(soundTrackStartIndex, soundTrackText, 1);
			if (OPTION_INFO_COUNT > OPTION_INFO_MAX) 
			{
				if(soundTrackStartIndex > OPTION_INFO_COUNT - OPTION_INFO_MAX)
				{
					soundTrackStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				} 
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].innerText = soundTrackInfoList[i + soundTrackStartIndex].language;
					inforListSpan[i].style.display = 'block';
				}
			}
			else
			{
				for(var i = 0; i < OPTION_INFO_COUNT; i++)
				{
					inforListSpan[i].style.display = 'block';
					inforListSpan[i].innerText = soundTrackInfoList[i].language;
				}
				
				for(var i = soundTrackInfoList.length; i < inforListSpan.length; i++)
				{
					inforListSpan[i].style.display = 'none';
					inforListSpan[i].innerText = "";
				}
			}
			
			break;
		case OPTION_INFORMATION://info
			break;
	}
}



function fillOptionDetail(index, name, offset)
{
	//pvr.testLog("fillOptionDetail(), OPTION_INFO_COUNT = "+OPTION_INFO_COUNT);
	//pvr.testLog("fillOptionDetail(), infoListLength = "+inforListSpan.length);
	if(OPTION_INFO_COUNT <= OPTION_INFO_MAX)
	{
		for(var i = 0; i < OPTION_INFO_COUNT; i++)
		{
			inforListSpan[i].style.display = 'block';
			inforListSpan[i].innerText = name + " " + (i + offset);
		}
		for(var i = OPTION_INFO_COUNT; i < inforListSpan.length; i++)
		{
			inforListSpan[i].style.display = 'none';
			inforListSpan[i].innerText = "";
		}
		if(optionIndex == OPTION_SUBTITLE)	//subtitle
		{
			inforListSpan[0].innerText = offinfo;
		}
	}
	else//more than 10
	{
		if(index > OPTION_INFO_COUNT - OPTION_INFO_MAX)
		{
			optionListIndex = index - OPTION_INFO_COUNT + OPTION_INFO_MAX;
			if(optionIndex == OPTION_SUBTITLE)//subtitle
			{
				subtitleStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				index = subtitleStartIndex;
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].style.display = 'block';
					inforListSpan[i].innerText = subtitleInfoList[index + i].name;
				}
				return;
			}
			else if(optionIndex == OPTION_SOUND_TRACK)//soundtrack
			{
				soundTrackStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				index = soundTrackStartIndex;
			}
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = name + " " + (index + i + offset);
			}
		}
		else
		{
			optionListIndex = 0;
			if(optionIndex == OPTION_SUBTITLE)
			{
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].style.display = 'block';
					inforListSpan[i].innerText = subtitleInfoList[index + i].name;
				}
				if(index == 0)
				{
					inforListSpan[0].innerText = offinfo;
				}
				return;
			}
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = name + " " + (index + i + offset);
			}
		}
	}
}

function resetFocusShape()
{
	switch(focusTab)
	{
		case DISPLAY_AREA:
			break;
			
		case OPTION_AREA:
			$('focus').style.display = "none";
			$('optionInfoFocus').style.display = "block";
			FOCUS_DISTANCE = 80;
			FOCUS_TOP_DISTANCE = 0;
			$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + "px";
			$('optionInfoFocus').style.left = 0 + "px";
			$('optionInfoFocus').style.width = 540 + "px";
			$('optionInfoFocus').style.height = FOCUS_DISTANCE + "px";
			$('optionInfoFocus').src = "images/Focus_USB_1.png";
			$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + optionIndex * FOCUS_DISTANCE + "px";
			$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
			break;
			
		case OPTION_DETAIL_AREA:
			$('optionFocus_2').style.display = (optionIndex == OPTION_INFORMATION) ? 'none' : 'block';
			FOCUS_DISTANCE = 80;
			FOCUS_TOP_DISTANCE = 0;
			$('optionInfoFocus').src = "images/Focus_USB_1_.png";
			if (optionListIndex > (OPTION_INFO_MAX - 1 ) )
			{

				$('optionFocus_2').style.top = FOCUS_TOP_DISTANCE + (OPTION_INFO_MAX - 1)*FOCUS_DISTANCE + "px";
			}
			else
			{
				$('optionFocus_2').style.top = FOCUS_TOP_DISTANCE + optionListIndex*FOCUS_DISTANCE + "px";
				pvr.testLog("resetFocusShape optionListIndex:"+optionListIndex);
			}
			$('optionFocus_2').style.left = 0 - 10 + "px";
			$('optionFocus_2').style.width = 300 + "px";
			$('optionFocus_2').style.height = FOCUS_DISTANCE + "px";
			break;
			
		case PLAY_LIST_AREA:
			$('focus').style.display = "block";
			FOCUS_DISTANCE = 80;
			FOCUS_LEFT_DISTANCE = 75;
			$('focus').style.top = playlistFocusTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			$('focus').style.left = 1240 + "px";
			$('focus').style.width = 660 + "px";
			$('focus').style.height = 94 + "px";
			$('focus').style.backgroundImage = "url(images/USB-Music_Playlist_Focus.png)";
			$("name"+playListFocusIndex).style.color = "#ffffff";
			break;
			
		case PROGRESS_AREA:
			break;

		case PRESET_AREA:
			$('focus').style.position = 'absolute';
			$('focus').style.display = "block";
			FOCUS_DISTANCE = 231;
			FOCUS_LEFT_DISTANCE = 550;
			$('focus').style.top = 935 + "px";
			$('focus').style.left = FOCUS_LEFT_DISTANCE + (optionListIndex * 231 )+ "px";
			$('focus').style.width = 219 + "px";
			$('focus').style.height = 69 + "px";
			$('focus').style.backgroundImage = "url(images/Focus2.png)";
			break;
		case QUICK_MENU_AREA:
			$('focus').style.display = "none";
			$('quickFocus').style.display = "block";
			FOCUS_DISTANCE = 80;
			$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
			break;	
		default:
			$('focus').style.display = "none";
			break;
	}
}

function moveUpRefreshSecList(array, string, count, offset)
{
	if(tmpStartIndex -1 >= 0)
	{
		tmpStartIndex--;
		if(array != "")
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				if (optionIndex == OPTION_SUBTITLE) 
				{
					if(i + tmpStartIndex == 0)
					{
						inforListSpan[i].innerText = offinfo;
					}
					else
					{
						inforListSpan[i].innerText = array[i + tmpStartIndex - 1].name;
					}
				}
				else if(optionIndex == OPTION_SOUND_TRACK)
				{
					inforListSpan[i].innerText = array[i + tmpStartIndex].language;
				}
				else
				{
					inforListSpan[i].innerText = array[i + tmpStartIndex];
				}
				
				pvr.testLog("inforListSpan["+i+"].innerText = array["+i+"+"+tmpStartIndex+"] = "+array[i + tmpStartIndex]);
			}
		}
		else
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				inforListSpan[i].innerText = string + " " + (i + tmpStartIndex + offset);
			}
		}
		optionArrowDisplay(tmpStartIndex, count);
	}
}

function moveDownRefreshSecList(array, string, count, offset)
{

	if (tmpStartIndex + OPTION_INFO_MAX < OPTION_INFO_COUNT) 
	{
		tmpStartIndex++;

		if(array != "")
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				if (optionIndex == OPTION_SUBTITLE) 
				{
					inforListSpan[i].innerText = array[i + tmpStartIndex - 1].name;
				}
				else if(optionIndex == OPTION_SOUND_TRACK)
				{
					inforListSpan[i].innerText = array[i + tmpStartIndex].language;
				}
				else
				{
					inforListSpan[i].innerText = array[i + tmpStartIndex];
				}
				
				pvr.testLog("inforListSpan["+i+"].innerText = array["+i+"+"+tmpStartIndex+"] = "+array[i + tmpStartIndex]);
			}
		}
		else
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				inforListSpan[i].innerText = string + " " + (i + tmpStartIndex + offset);
			}
		}
		optionArrowDisplay(tmpStartIndex, count);
	};
	
}

function optionArrowDisplay(startIndex, count)
{
	$("optionUpArrow_1").style.display = (startIndex == 0) ? "none" : "block";
	$("optionDownArrow_1").style.display = (startIndex + OPTION_INFO_MAX < count) ? "block" : "none";
}



function setPlayListMaxLength()
{
	var length = currentPlayList.length;
	if(length > PLAYLIST_MAX_LENGTH)//[10] or [6]
	{
		MAX_LENGTH_ONE_PAGE = PLAYLIST_MAX_LENGTH;
	}
	else
	{
		MAX_LENGTH_ONE_PAGE = length;
	}
}

function setSPOption()
{
	//pvr.testLog("setSPOption(), optionIndex = "+optionIndex);
	//pvr.testLog("setSPOption(), optionListIndex = "+optionListIndex);
	switch(optionIndex)
	{
		case OPTION_PIC_PRESET://picture preset
			focusTab = DISPLAY_AREA;
			for(var i = 0; i < picturePresetCheckImg.length; i++)
			{
				picturePresetCheckImg[i].style.display = 'none';	
			}
			picPresetBack = optionListIndex;	
			pvr.setVideoPicturePreset(optionListIndex);	//xiehua: api added!!!
			pvr.testLog("pvr.setVideoPicturePreset end:"+optionListIndex);
			$('picturePresetContent').innerText = picturePresetArray[optionListIndex];
			setScroll($('picturePresetContent'),1);
			hideMenu(0);
			toOption(0);
			return;
		case OPTION_SOUND_PRESET:
			$('soundpresetContent').innerText = soundPresetArray[optionListIndex];
			setScroll($('soundpresetContent'),1);
			pvr.videoSoundEffect = optionListIndex;
			soundEffectBack = optionListIndex;
			pvr.testLog("pvr.videoSoundEffect end :"+pvr.videoSoundEffect +" optionListIndex:"+optionListIndex);
			optionInfoArray[optionIndex] = optionListIndex;
			break;
		case OPTION_SCREEN_MODE://screen mode
			/**
			if(OPTION_PANNEL_TYPE == 0)
			{
				$('screenModeContent').innerText = screenModeHDArray[tmpStartIndex + optionListIndex];
				setScroll($('screenModeContent'),1);
			}
			else
			{
				$('screenModeContent').innerText = screenModeSDArray[tmpStartIndex + optionListIndex];
				setScroll($('screenModeContent'),1);
			}
			**/
			if (resolution == 1) 
			{
				pvr.setVideoScreenMode(0, tmpStartIndex + optionListIndex);
			}else
			{
				pvr.setVideoScreenMode(1, tmpStartIndex + optionListIndex);
			}
			$('screenModeContent').innerText = screenModeArray[tmpStartIndex + optionListIndex];

			//pvr.testLog("pvr.setVideoScreenMode end :"+ (tmpStartIndex + optionListIndex)+" getVideoScreenMode:"+pvr.getVideoScreenMode(1));
			optionInfoArray[optionIndex] = tmpStartIndex + optionListIndex;
			hideMenu(0);
			toOption(OPTION_SCREEN_MODE);
			break;
		case OPTION_3D_MODE://3d mode
			pvr.setVideo3DMode(optionListIndex);	//xiehua: api added!!!
			if(optionListIndex == 0)//off
			{
				switch3DFlag = false;
				top.$("globleShow").contentWindow.hiddenGlassRemind();
			}
			else if(optionListIndex != 0 )//on
			{
				switch3DFlag = true;
				if(top.glassConnectFlag == 0)
				{
					top.$("globleShow").contentWindow.showGlassRemind(0);
				}
			}
			$('3DContent').innerText = Mode3DArray[optionListIndex];
			optionInfoArray[optionIndex] = optionListIndex;
			pvr.testLog("setVideo3DMode:"+optionListIndex+" getVideo3DMode:"+pvr.getVideo3DMode());
			break;
		case OPTION_SUBTITLE://subtitle
			pvr.testLog("subtitleStartIndex:"+subtitleStartIndex+" tmpStartIndex:"+tmpStartIndex+" optionListIndex:"+optionListIndex);
			pvr.setVideoSubtitleIndex(tmpStartIndex + optionListIndex);	//xiehua: api added!!!	
			pvr.testLog("pvr.setVideoSubtitleIndex end get :"+pvr.getVideoSubtitleIndex() + " set:"+tmpStartIndex+optionListIndex);
			optionInfoArray[optionIndex] = tmpStartIndex + optionListIndex;		
			if(tmpStartIndex + optionListIndex == 0)
			{
				$('subtitleContent').innerText = offinfo;
			}
			else
			{
				$('subtitleContent').innerText = subtitleInfoList[tmpStartIndex + optionListIndex - 1].name;
				setScroll($('subtitleContent'),1);
			}
			
			if(OPTION_INFO_COUNT > 10)
			{
				subtitleStartIndex = optionInfoArray[optionIndex];
			}
			else
			{
				subtitleStartIndex = 0;
			}
			break;
		case OPTION_SOUND_TRACK://sound track
			
			pvr.setVideoSoundTrackIndex(tmpStartIndex + optionListIndex);	//xiehua: api added!!!
			pvr.testLog("setVideosoundTrack:"+tmpStartIndex + optionListIndex+" getVideosoundTrack:"+pvr.getVideoSoundTrackIndex());
			$('soundTrackContent').innerText = soundTrackInfoList[tmpStartIndex + optionListIndex].language;
			setScroll($('soundTrackContent'),1);
				 //(tmpStartIndex + optionListIndex + 1);
			optionInfoArray[optionIndex] = tmpStartIndex + optionListIndex;
			
			if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
			{
				soundTrackStartIndex = (optionInfoArray[optionIndex] > soundTrackCount - OPTION_INFO_MAX)
					? soundTrackCount - OPTION_INFO_MAX : optionInfoArray[optionIndex];
				pvr.testLog("setspoption  soundTrackStartIndex:"+soundTrackStartIndex);
			}
			else
			{
				soundTrackStartIndex = 0;
			}
			break;
		case OPTION_INFORMATION://info
			$('information').style.display = "none";
			break;
	}
	$('optionInfoList').style.display = "none";
	optionInfoArray[0] = optionListIndex;
	$("optionUpArrow_1").style.display = "none";
	$("optionDownArrow_1").style.display = "none";

	focusTab = OPTION_AREA;
	resetFocusShape();
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
		pvr.testLog("1 ff_fb_flag:"+ff_fb_flag);
	}
	else if(type != 0)
	{
		ff_fb_flag += type;
		ff_fb_flag = (ff_fb_flag > 5 || ff_fb_flag < -5) ? 0 : ff_fb_flag;
	}
	else if(type == 0 
		&& (playStatus == S_PAUSE || playStatus == S_STOP_RESUME 
		|| playStatus == S_FF_FB))
	{
		ff_fb_flag = 0;
		pvr.testLog("2 ff_fb_flag:"+ff_fb_flag);
	}
	clearTimeout(menuTimer);
	menuTimer = 0;
	switch(ff_fb_flag)
	{
		case 0:
			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			playStatus = S_PLAY;
			pvr.testLog("playStatus = S_PLAY playStatus:"+playStatus);
			pvr.mediaFastForward(1);	//xiehua: api added!!!
			break;
		case 1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_2x.png";
			playStatus = S_FF_FB;
			pvr.testLog("playStatus = S_FF_FB playStatus:"+playStatus);
			pvr.mediaFastForward(2);	//xiehua: api added!!!
			break;
		case 2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_4x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(4);	//xiehua: api added!!!
			break;
		case 3:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_8x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(8);	//xiehua: api added!!!
			break;
		case 4:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_16x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(16);	//xiehua: api added!!!
			break;
		case 5:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_32x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(32);	//xiehua: api added!!!
			break;
		case -1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_2x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(2);	//xiehua: api added!!!
			break;
		case -2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_4x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(4);	//xiehua: api added!!!
			break;
		case -3:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_8x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(8);	//xiehua: api added!!!
			break;
		case -4:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_16x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(16);	//xiehua: api added!!!
			break;
		case -5:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_32x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(32);	//xiehua: api added!!!
			break;
	}
}

function getMediaFileDuration(path)
{
	fileDuration = pvr.getMediaFileDuration(path);	//xiehua: api added!!!
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
		pvr.testLog("menuTimer : 15000");
	}
	else
	{
		hideMenuDetail();
	}
	/**
	menuTimer = setTimeout(function(){
		clearInterval(progressBarTimer);
		seekCount = 0;
		focusTab = DISPLAY_AREA;

		if(progressBarPercent <= 14)
		{
			$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
		}
		else
		{
			$("endBar").src = "images/USB-Video-Progress-bar-Slider-01.png";
		}
		
	}	
	**/
		
}

function hideMenuDetail()
{
	clearInterval(progressBarTimer);
	seekCount = 0;
	
	pvr.testLog("focusTab:"+focusTab);
	if(focusTab == PRESET_AREA)
	{
		for(var i = 0; i < picturePresetCheckImg.length; i++)
		{
			picturePresetCheckImg[i].style.display = 'none';
		}
		setting.previewPictureMode(picPresetBack);	
		pvr.testLog("picPresetBack:"+picPresetBack);
	}
	else if (focusTab == OPTION_DETAIL_AREA && optionIndex == OPTION_SOUND_PRESET) 
	{
		setting.previewSoundEffect(soundEffectBack);
	}
	else if(focusTab != TIPS_AREA)
	{
		focusTab = DISPLAY_AREA;
	}
	if(progressBarPercent <= 14)
	{
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
	}
	else
	{
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-01.png";
	}
	$('focus').style.display = 'none'; 
	$('option').style.display = 'none';
	$('topTitle').style.display = 'none';
	$('playList').style.display = 'none';
	$('seekInfo').style.display = 'none';
	$('progressArea').style.display = 'none';
	$('optionBarArea').style.display = 'none';
	$('optionInfoList').style.display = 'none';
	$('optionInfoFocus').style.display = 'none';
	$('picturePresetBar').style.display = 'none';
	$('quickMenu').style.left = -550 + "px";
	$('pictureZoomSetBar').style.display = 'none';
	setTimeout(function(){$('quickMenu').style.display = "none";},playListAnimateTime);
}

function refreshCPFlag()
{
	if(playListIndex >= playListStart 
		&& playListIndex < playListStart + MAX_LENGTH_ONE_PAGE)
	{
		$('currentPlay').style.display = 'block';
		$('currentPlay').style.top = playlistFocusTopDistance + 5 + 80 * (playListIndex - playListStart) + "px";
	}
	else
	{
		$('currentPlay').style.display = 'none';
	}
}

function refreshPlayList()
{
	var listLi = $('playList').getElementsByTagName('li');
	for(var i = 0; i < MAX_LENGTH_ONE_PAGE; i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			listLi[i].style.display = "none";
			continue;
		}
		$("name" + i).style.display = "block";
		$("name" + i).innerText = currentPlayList[playListStart + i].name;
	
	}
}

function setScroll(spanTag, lastnum)
{
	if (lastnum == 1) 
	{
		if(isOverflowed(spanTag))
		{
			resetScrollHtmlInner(spanTag, "-webkit-marquee", "clip");
		}
		else
		{
			resetScrollHtmlInner(spanTag, "hidden", "ellipsis");
		}
	}
	else if (lastnum == 0) 
	{
		resetScrollHtmlInner(spanTag, "hidden", "ellipsis");
	}
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}
//添加焦点选中过长字符滚动
function resetScrollHtmlInner(htmlTagList, displayStyle, overFlowStyle)
{
	htmlTagList.setAttribute("contentText", htmlTagList.innerHTML);
	htmlTagList.style.overflowX = displayStyle;
	htmlTagList.style.textOverflow = overFlowStyle;
	setTimeout(function(){htmlTagList.innerHTML = htmlTagList.getAttribute("contentText");}, 1);
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

function refreshProgressBar()
{
	if(fileDuration > 0)
	{
		//do nothing
	}
	else
	{
		$('duration').innerText = getMediaFileDuration(top.g_currentMedia.path);
	}
	
	if(fileDuration > 0)
	{
		$('progressBarUse').style.display = "block";
		elapsed = pvr.getNowPlayTime();	//xiehua: api added!!!
		if(elapsed > 0)
		{
			if(elapsed > fileDuration)
			{
				elapsed = fileDuration;
			}
			
			progressBarPercent = parseInt(elapsed * 100 / fileDuration, 10);
			if(focusTab != PROGRESS_AREA)
			{
				if(progressBarPercent <= 14)
				{
					$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				}
				else
				{
					$("endBar").src = "images/USB-Video-Progress-bar-Slider-01.png";
				}
				$("endBar").style.left = progressBarPercent * BAR_LENGTH / 100 - 15 + "px";
			}
			$("startBar").style.width = progressBarPercent * BAR_LENGTH / 100 + "px";
			$('progressBarUse').style.display = "block";
		}
		else
		{
			elapsed = 0;
			//$('progressBarUse').style.display = "none";
		}
		
		$("elspased").innerText = doTime(elapsed);
	}
	else
	{
		fileDuration = 0;
		$('progressBarUse').style.display = "none";
	}
	
}

function seekTime(tmp)
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

function skipOptionCheck(type)
{
	optionIndex = parseInt((optionIndex + OPTION_MAX_COUNT + type) % OPTION_MAX_COUNT, 10);
	if((optionIndex == OPTION_SUBTITLE && skipFlagSubtitle)	|| (optionIndex == OPTION_SOUND_TRACK && skipFlagSoundtrack))
	{
		skipOptionCheck(type);
	}
	return;
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
	//$("loading").style.display = "none";
	$("unavailable").style.display = "none";
	return pvr.mediaPlay(path);	//xiehua: api added!!!
}

function playPre()
{
	pvr.playPreMediaFile();	//xiehua: api added!!!
}


function playNext()
{
	pvr.playNextMediaFile();	//xiehua: api added!!!
}


function setListInfoTop(index, num)
{
	var tmpTop = optionSecondListTopDistance + optionIndex * 80 - optionFirstStartIndex * 80;
	var tmpTopLimit = 1080 - num * 80 - 45;
	switch(index)
	{
		case OPTION_PIC_PRESET://picture preset
			break;
		case OPTION_SOUND_PRESET:
		case OPTION_SCREEN_MODE://screen mode
		case OPTION_3D_MODE://3d mode
		case OPTION_SUBTITLE://subtitle
		case OPTION_SOUND_TRACK://sound track
		/**
			$('optionInfoList').style.top = index*FOCUS_DISTANCE+"px";
			if (OPTION_INFO_COUNT > 5) {
				$("optionInfoList").style.height = 5*FOCUS_DISTANCE + 10 +"px";
			}else
			{
				$("optionInfoList").style.height = OPTION_INFO_COUNT*FOCUS_DISTANCE + 10 +"px";
			}
		**/
			$('optionInfoList').style.top = (tmpTop > tmpTopLimit)
				? tmpTopLimit + "px" : tmpTop + "px";
			$('optionInfoList').style.height = 5 + 80 * num + "px";
			$('optionInfoList').style.width = 300 + "px";
			break;
		case OPTION_INFORMATION://info
			break;
		default:
		break;
	}
	
}

//support mouse
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		//if(evt.button == 2 && !exitFlag && operatableFlag) doExit();	//mouse right key
		if(evt.button == 2) doExit();	//mouse right key
	}

	$('progressArea').onmousedown = function(evt){
		if(evt.button == 0)	//mouse left key
			clickProgressAreaFunction();
	}

	$('progressBarUse').onmousedown = function(evt){
		if(evt.button == 0)	//mouse left key
			clickProgressSeekFunction(evt);
	}

	for(var i = 0; i < clickPlayListLi.length; i++)
	{
		clickPlayListLi[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
				clickPlayListFunction(i);
		}
	}

	$('arrowUpPlayList').onmousedown = function(evt){
		if(evt.button == 0)	//mouse left key
			clickPlayListUpArrow();
	}

	$('arrowDownPlayList').onmousedown = function(evt){
		if(evt.button == 0)	//mouse left key
			clickPlayListDownArrow();
	}

	//option level 1st
	for(var i = 0; i < clickOptionMenuLi_1.length; i++)//option level 1st
	{
		clickOptionMenuLi_1[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_1[i].onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
				clickFirstOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}

	//option level 2nd
	for(var i = 0; i < clickOptionMenuLi_2.length; i++)
	{
		clickOptionMenuLi_2[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_2[i].onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
				clickSecondOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}

	//click picture preset
	for(var i = 1; i < clickPicturePresetSpan.length; i++)
	{
		clickPicturePresetSpan[i].setAttribute(clickIndexAttri, i - 1);
		clickPicturePresetSpan[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
				clickPicturePresetFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
}

function clickPicturePresetFunction(index)
{
	if(focusTab != PRESET_AREA)
		return;
	optionListIndex = index;
	$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
	setTimeout(function(){toOK();}, DELAY_TIME);
	return;
}

function clickProgressAreaFunction()
{
	if(focusTab != DISPLAY_AREA)
		return;
	//hideInfoBox(0);
	//hideMetaInfoBox(0);
	if(seekableFlag)
	{
		focusTab = PROGRESS_AREA;
		$('seekInfo').style.display = "block";
		$('topTitle').style.display = "block";
		$('progressArea').style.display = "block";
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = "none";},playListAnimateTime);
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
		refreshProgressBar();
		seekStartTime = elapsed;
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 900);
		refreshSeekingTime(0);
	}
	else
	{
		//clearTimeout(tipsTimer);
		hideMenu(0);
		//$('tipsBox').style.display = "none";
		//setTipsBox(2);
		//$('tipsInfoContent').innerText = cantSeekArray[2];
		//$('tipsInfo').style.display = "block";
		//tipsTimer = setTimeout(function(){$('tipsInfo').style.display = "none";}, FADE_TIME_5);
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
}

function clickProgressSeekFunction(evt)
{
	if(focusTab != PROGRESS_AREA)
		return;
	var clickDistance = evt.clientX - PROGRESS_START_LEFT_OFFSET;
	var tmp = clickDistance / BAR_LENGTH;
	var tmpSeekTime = parseInt(tmp * fileDuration, 10);
	$("endBar").style.left = clickDistance - 15 + "px";
	$("startBar").style.width = clickDistance + "px";
	$('seekTime').innerText = doTime(tmpSeekTime);
	$('seekTime').style.left = 80 + clickDistance + "px";
	clearTimeout(seekSettingTimer);
	seekSettingTimer = setTimeout(function(){pvr.setSeekPoint(tmpSeekTime * 1000);}, 100);
}

function clickPlayListFunction(index)
{
	if(focusTab != PLAY_LIST_AREA)
		return;
	var playIndex = playListStart + index;
	pvr.mediaStop(0);
	if (!skipFlag3D)
	{
		pvr.setVideo3DMode(0);
	}
	clearInterval(progressBarTimer);
	mediaPlay(currentPlayList[playIndex].path);
	setPlayListFocus(playIndex, playListFocusIndex);
	playListFocusIndex = playIndex;
	$('focus').style.top = cpTopDistance + FOCUS_DISTANCE * playIndex + "px";
}

function clickPlayListUpArrow()
{
	if(focusTab != PLAY_LIST_AREA)
		return;
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
	if(focusTab != PLAY_LIST_AREA)
		return;
	if((playListStart + PLAYLIST_MAX_LENGTH) < currentPlayList.length)
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

function clickFirstOptionMenuFunction(index)
{
	
	if(focusTab != OPTION_AREA)
		return;
	optionIndex = index;
	$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
	switch(index)
	{
		case OPTION_PIC_PRESET:
		case OPTION_SOUND_PRESET:
		case OPTION_SCREEN_MODE:
		case OPTION_3D_MODE:
		case OPTION_INFORMATION:
			toRight();
			break;
		case OPTION_SUBTITLE:
			if(skipFlagSubtitle) return;
			toRight();
			break;
		case OPTION_SOUND_TRACK:
			if(skipFlagSoundtrack) return;
			toRight();
			break;
		default:
			break;
	}
	hideMenu(15000);
}

function clickSecondOptionMenuFunction(index)
{
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	optionListIndex = index;
	pvr.testLog("clickSecondOptionMenuFunction(), optionListIndex = "+optionListIndex);
	setSPOption();
}

function clearAllTimer()
{
	exitFlag = 1;
	//clearTimeout(tipsTimer);
	clearTimeout(menuTimer);
	clearTimeout(seekSettingTimer);
	clearInterval(progressBarTimer);
}
function toSubtitle()
{
	//operatableFlag = true;
	/**
	focusTab = TIPS_AREA;
	errorFlag = ERROR_VIDEO_ERROR;
	$('eb_info').innerText = eb_info[1];
	$('tipsBox').style.display = "block";
	**/
    /****/
	if($('quickMenu').style.display == "none")
	{
		$('focus').style.display = "none"; 
		$('option').style.display = "none";
		$('topTitle').style.display = "none";
		$('playList').style.display = "none";
		$('seekInfo').style.display = "none";
		$('progressArea').style.display = "none";
		$('picturePresetBar').style.display = "none";
		quickMenuType = QUICK_MENU_SUBTITLE;
		focusTab = QUICK_MENU_AREA;
		$('quickMenuTitle').innerText = subMenuTitleText;
		if (!skipFlagSubtitle) 
		{
			$("quickEmptyTipsBox").style.display = "none";
			$("quickContainInfo").style.display = "block";
			quickCount = subtitleCount + 1;
			quickInfoText = subMenuTitleText;
			quickIndex = pvr.getVideoSubtitleIndex();
			$('quickMenu').style.display = "block";
			fillQuickMenuInfo();
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();
			}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickMenu').style.display = "block";
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = "block";
			$("quickContainInfo").style.display = "none";
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == "block")
	{

		if(quickMenuType == QUICK_MENU_SUBTITLE)
		{
			hideMenu(0);
		}
		if(quickMenuType != QUICK_MENU_SUBTITLE)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("toSubtitle();", playListAnimateTime)
		}
	}
	
}

function toLang()
{
	
	if($('quickMenu').style.display == "none")
	{
		$('focus').style.display = "none"; 
		$('option').style.display = "none";
		$('topTitle').style.display = "none";
		$('playList').style.display = "none";
		$('seekInfo').style.display = "none";
		$('progressArea').style.display = "none";
		$('picturePresetBar').style.display = "none";
		quickMenuType = QUICK_MENU_LANG;
		focusTab = QUICK_MENU_AREA;
		$('quickMenuTitle').innerText = langMenuTitleText;
		if(!skipFlagSoundtrack)
		{
			$("quickEmptyTipsBox").style.display = "none";
			$("quickContainInfo").style.display = "block";
			quickCount = soundTrackCount;
			quickInfoText = langInfoText;
			quickIndex = pvr.getVideoSoundTrackIndex();
			fillQuickMenuInfo();
			$('quickMenu').style.display = "block";
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();
			}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickMenu').style.display = "block";
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = "block";
			$("quickContainInfo").style.display = "none";
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == "block")
	{
		if(quickMenuType == QUICK_MENU_LANG)
		{
			hideMenu(0);
		}
		if(quickMenuType != QUICK_MENU_LANG)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("toLang();", playListAnimateTime)
		}
	}
}

function to3D()
{
	if($('quickMenu').style.display == 'none')
	{
		optionInfoArray[OPTION_3D_MODE] = pvr.getVideo3DMode();
		$('focus').style.display = "none"; 
		$('option').style.display = "none";
		$('topTitle').style.display = "none";
		$('playList').style.display = "none";
		$('seekInfo').style.display = "none";
		$('progressArea').style.display = "none";
		$('picturePresetBar').style.display = "none";
		quickMenuType = QUICK_MENU_3D;
		focusTab = QUICK_MENU_AREA;
		$('quickMenuTitle').innerText = mode3DMenuTitleText;
		if(!skipFlag3D)
		{
			$("quickEmptyTipsBox").style.display = "none";
			$("quickContainInfo").style.display = "block";
			quickCount = Mode3DArray.length - 1;
			//quickInfoText = langInfoText;
			quickIndex = pvr.getVideo3DMode();
			fillQuickMenuInfo();
			$('quickMenu').style.display = "block";
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();
			}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickMenu').style.display = "block";
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = "block";
			$("quickContainInfo").style.display = "none";
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == 'block')
	{
		if(quickMenuType == QUICK_MENU_3D)
		{
			hideMenu(0);
		}
		if(quickMenuType != QUICK_MENU_3D)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("to3D();", playListAnimateTime)
		}
	}
}

function fillQuickMenuInfo()
{ 
	
	//quickOffSet = !(quickMenuType == QUICK_MENU_SUBTITLE);
	quickOffSet = 1;
	pvr.testLog("quickOffSet:"+quickOffSet);
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
			quickMenuListDiv[i].style.display = "block";
			switch(quickMenuType)
			{
				case QUICK_MENU_SUBTITLE:
				if (i == 0) 
				{
					quickMenuListDiv[i].innerText = offinfo;
				}
				else
				{
					quickMenuListDiv[i].innerText = subtitleInfoList[i - 1].name;
				}
				
				break;
				case QUICK_MENU_LANG:
				quickMenuListDiv[i].innerText = soundTrackInfoList[i].language;
				break;
				case QUICK_MENU_3D:
				quickMenuListDiv[i].innerText = Mode3DArray[i];
				break;
			}
		}
		for(var i = quickCount; i < MAX_QUICK_MENU_COUNT; i++)
		{
			quickMenuListDiv[i].style.display = "none";
			quickMenuListDiv[i].innerText = "";
		}
	}
	else
	{
		for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
		{
			quickMenuListDiv[i].style.display = "block";
			switch(quickMenuType)
			{
				case QUICK_MENU_SUBTITLE:
				if (i == 0) 
				{
					quickMenuListDiv[i].innerText = offinfo;
				}
				else
				{
					quickMenuListDiv[i].innerText = subtitleInfoList[i - 1].name;
				}
				break;
				case QUICK_MENU_LANG:
				quickMenuListDiv[i].innerText = soundTrackInfoList[i].language;
				break;
				case QUICK_MENU_3D:
				quickMenuListDiv[i].innerText = Mode3DArray[i];
				break;
			}
		}
		
	}
}

function bookingPreOperate()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	switch3DFlag = false;
	top.$("globleShow").contentWindow.hiddenGlassRemind();
	pvr.mediaStop(0);
	if (!skipFlag3D)
	{
		pvr.setVideo3DMode(0);
	}
	pvr.pvrExitUninit();
	multimedia.toRestoreSource();
	return;
}
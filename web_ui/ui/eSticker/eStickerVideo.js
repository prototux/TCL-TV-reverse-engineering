
// USB video play
var multimedia = top.g_media;
var usbList = "";
var usbListLength = 0;
var currentMediaType = 0;//[0]all file [1]picture [2]video [3]music
var playUsb = "";
var playList = "";
var currentIndex = 0;
var sourceFlag = 0;
var isPlayingFlag = 0;
var isBlockingFlag = 0;

document.onnotify = notifyProcess;
document.onkeydown = keyprocTV;
function keyprocTV(evt)
{
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_POWER:
		top.keyDownProcess(evt);
		break;
		case top.VK_VOLUME_UP:
		case top.VK_VOLUME_DOWN:
		top.$('globleShow').contentWindow.initVolume();
		top.g_volume_visible = 1;
		top.$("operatePage").src = "";
		top.setFrameFocusPage("globleShow");
		top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = 'block';
		top.globleShow.focus();
		//top.startVolumeTimer();
		break;

		case top.VK_MUTE://mute
			top.keyDownProcess(evt);
		break;

		default:
		//任意键退出 
		
		multimedia.mediaStop(0);
		multimedia.deviceExitUninit();
		multimedia.toRestoreSource(0,0);
		top.jumpPage();
		break;
	}
}



function init()
{
	playUsbVideo();
}

function playUsbVideo()
{
	if (isBlockingFlag) 
	{
		setTimeout(function (){
			playUsbVideo();
		},50);
		return;
	}
	isBlockingFlag = 1;

	//获取usb设备列表
	if (multimedia.deviceStatus()) {
		usbList = multimedia.getDiskListInfo();
	}
	else
	{
		isBlockingFlag = 0;
		return;
	}

	//var list;
	for (var i = 0; i < usbList.length; i++) {
		playList = multimedia.getMediaFileList(0, 0, usbList[i].path + "/TCL DEMO", 0, -1);
		top.g_channel.testLog("========> xiaoxu 0");
		if (playList.length != 0) {
			isPlayingFlag = 1;
			break;
		};
	}
	//[0]all file [1]picture [2]video [3]music
	if (playList.length > 0) {
		top.g_channel.testLog("========> xiaoxu 1");
		if (sourceFlag == 0) 
		{
			//切信源
			multimedia.changeSourceToMedia();
			multimedia.setEnterDeviceType(0);
			sourceFlag = 1;
			top.g_channel.testLog("========> xiaoxu 2");
		}

		//list = multimedia.getMediaFileList(0, 0, playUsb, 0, -1);
		/**
		playList = new Array(list.length);
		for (var i = 0; i < list.length; i++) {
			//playList[i] = playUsb + "/" + list[i].name;
			playList[i] = list[i].path;
		};
		**/
		  
		//开始播放
		top.g_channel.testLog("========> xiaoxu : start play :" + playList[0].path);
		top.g_availableStatus = multimedia.mediaPlay(playList[0].path, 0);
		currentIndex = 0;
	}
	isBlockingFlag = 0;
}

function notifyProcess(evt) {
	var msg = evt.which;
	top.g_channel.testLog("========> xiaoxu  msg:"+msg);
	switch (msg) {
		case top.E_MEDIA_EOS:
		case top.E_MEDIA_OTHER_ERROR:
		case top.E_MEDIA_PLAY_ERROR_CANT_OPEN:
		case top.E_MEDIA_VIDEO_ERROR:
		case top.E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT:
		case top.E_MEDIA_VIDEO_CANT_RECONGNIZE:
			if (currentIndex == (playList.length - 1) )
			{
				currentIndex = 0;
			}
			else
			{
				currentIndex ++;
			}
			multimedia.mediaStop(0);
			top.g_channel.testLog("========> xiaoxu : stop");
			top.g_channel.testLog("========> xiaoxu : start play :" + playList[currentIndex].path);
			top.g_availableStatus = multimedia.mediaPlay(playList[currentIndex].path, 0);

			break;
		case top.E_MEDIA_PLAYER_STATUS_PLAYING:
			top.g_channel.testLog("---- xiaoxu  Playing MSG ----" + playList[currentIndex].path);
			break;
		case top.E_MEDIA_USB_REMOVE:
			top.jumpPage();
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0,0);
			sourceFlag = 0;
			isPlayingFlag = 0;
			break;
		case top.E_MEDIA_USB_INSERTED://usb insert
			if (isPlayingFlag) 
			{
				break;
			}
			top.g_channel.testLog("---- xiaoxu USB_INSERTED MSG ----");
			playUsbVideo();
			break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_PLAYER_CUSTOM_BOOKMARK:
			multimedia.setVideoPlayingBookmark(0);
			break;
	}
}

function $(id)
{
    return document.getElementById(id);
}

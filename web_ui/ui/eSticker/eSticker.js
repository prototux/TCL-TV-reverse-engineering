var contentTitleArray = new Array();

var contentDetailArray = new Array();


var iconImgArrayS = new Array();

var iconImgArrayL = new Array();

var iconTop = ["580", "450", "320", "190", "60", "-70", "-200"];
var iconMovetoArray = ["iconMoveto1", "iconMoveto2", "iconMoveto3", "iconMoveto4", "iconMoveto5", "iconMoveto6", "iconMoveto7"];
var icon_position = 0;
var ICON_STATIC_NUM = 7;
var icon_num = 0;
var language = "";


// USB video play
var multimedia = top.g_media;
var factory = top.g_factory;
var usbList = "";
var usbListLength = 0;
var currentMediaType = 0; //[0]all file [1]picture [2]video [3]music
var playUsb = "";
var playList = "";
var currentIndex = 0;
var sourceFlag = 0;
var isPlayingFlag = 0;
var isBlockingFlag = 0;


/********
 **add: yums
 **data:2014-10-28
 *********/
var xmlDoc;
var xmlhttp;
var xmlTxt;
var xmlIconLength = 0;
var xmlIconId = new Array(); //ID数组，存储xml文件中所用icon标签的Id属性值
var xmlImg_L = new Array(); //img数组，存储xml文件中所用img_L标签的值
var xmlImg_S = new Array(); //img数组，存储xml文件中所用img_S标签的值
var xmlTitle = new Array(); //title数组，存储xml文件中依据当前语言获取到的所有的title值
var xmlDescription = new Array();
var xmlURL = "/data/Esticker/Esticker.xml";
var xmlURLBak = "Esticker.xml";
var xmlURLDefault = "Esticker.xml"

document.onnotify = notifyProcess;

document.onkeydown = keyprocTV;

function keyprocTV(evt) {
	
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

function initData() {

	var bodyList = top.document.getElementsByTagName("body");
	var scriptList = bodyList[0].getElementsByTagName("script");
	var srcvalue = scriptList[0].getAttribute("src");
	//  translation/English.js
	var temp1 = srcvalue.split("/");
	var temp2 = temp1[1].split(".");
	language = temp2[0];
    
    xmlURL = "/data/Esticker/Esticker_"+factory.projectId+".xml";
    xmlURLBak = "Esticker_"+factory.projectId+".xml";

	initDataFromXML();
	if (icon_num > ICON_STATIC_NUM) {
		initIconDiv();
	}
	if (icon_num == iconImgArrayS.length) {
		for (var i = 0; i < icon_num; i++) {
			$("iconimg" + (i + 1)).src = iconImgArrayS[i];
		};
	}

	$("contentTitleSpan").innerHTML = contentTitleArray[0];
	$("contentDetailSpan").innerHTML = contentDetailArray[0];
	$("contentImgId").src = iconImgArrayL[0];
}


function initIconDiv() {
	for (var i = ICON_STATIC_NUM; i < icon_num; i++) {
		var divNew = document.createElement("div");
		divNew.setAttribute("class", "iconDiv" + ICON_STATIC_NUM);
		divNew.setAttribute("id", "icon" + (i + 1));

		var imgNew = document.createElement("img");
		imgNew.setAttribute("id", "iconimg" + (i + 1));
		divNew.appendChild(imgNew);

		$("leftmove").appendChild(divNew);
	};

}


function init() {

	initData();

	setTimeout(function() {
		tt();
	}, 1750);

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
			if (currentIndex == (playList.length - 1)) {
				currentIndex = 0;
			} else {
				currentIndex++;
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

var t;

function tt() {
	/****/
	test();
	t = setTimeout("tt()", 7000);
}

function test() {

	setTimeout(function() {

		if (icon_position > 0) {
			$("icon" + icon_position).className = "iconFade";
			$("mainDiv").className = "mainDivDisappear";
			$("contentDiv").className = "contentDivHidden";
		}
		$("icon" + (icon_position + 1)).className = "iconFocus";
	}, 10);
	setTimeout(function() {
		$("mainDiv").className = "mainDivDisplay";
		$("mainDivImg").className = "mainDivImgDisplay";
		$("contentTitleSpan").innerHTML = contentTitleArray[icon_position];
		$("contentDetailSpan").innerHTML = contentDetailArray[icon_position];
		$("contentImgId").src = iconImgArrayL[icon_position];
		$("contentDiv").className = "contentDivShow";
	}, 300);

	/****/
	setTimeout(function() {
		/****/

		for (var m = icon_position; m < (icon_num - 1); m++) {

			if ((m - icon_position) < iconMovetoArray.length) {
				//alert("1:icon"+(m + 2)+".className :"+iconMovetoArray[m - icon_position]);
				$("icon" + (m + 2)).className = iconMovetoArray[m - icon_position];

			} else {
				//alert("1--:icon"+(m + 2)+".className :"+iconMovetoArray[iconMovetoArray.length-1]);
				$("icon" + (m + 2)).className = iconMovetoArray[iconMovetoArray.length - 1];
			}


		}

		if (icon_num > ICON_STATIC_NUM) {
			for (var n = (icon_num - ICON_STATIC_NUM - 1); n < icon_position; n++) {
				//alert("2:icon"+(n - 1)+".className : "+iconMovetoArray[ICON_STATIC_NUM - icon_position + n ]);
				$("icon" + (n - 1)).className = iconMovetoArray[ICON_STATIC_NUM - icon_position + n];

			}
		} else {
			for (var n = 0; n < icon_position; n++) {
				//alert("2:"+iconMovetoArray[ICON_STATIC_NUM - icon_position + n - 1]);
				$("icon" + (n + 1)).className = iconMovetoArray[ICON_STATIC_NUM - icon_position + n - 1];

			}
		}



		icon_position++;
		if (icon_position == icon_num) {
			clearTimeout(t);
			setTimeout(function() {
				allDisappear();
			}, 7000); //7000
			//display again,80s
			setTimeout(function() {
				$("leftDivId").className = "leftDiv";
			}, 7000 + 80000);
			setTimeout(function() {
				tt();
			}, 7000 + 80000 + 1750);

		}
	}, 300 + 50);

	setTimeout(function() {
		$("mainDivImg").className = "mainDivImgDisplayTemp";
	}, 300 + 100);

}

function allDisappear() {
	$("leftDivId").className = "leftDivDisappear";
	$("mainDiv").className = "mainDivDisappear";
	if (icon_num > ICON_STATIC_NUM) {
		for (var i = ICON_STATIC_NUM; i < icon_num; i++) {
			$("icon" + (i + 1)).className = "iconDiv7";
		}
	} else {
		$("icon" + ICON_STATIC_NUM).className = "iconDiv7";
	}

	icon_position = 0;
	$("contentDiv").className = "contentDivHidden";
}


function initDataFromXML() {
	parseDOMXml(xmlURL);

	icon_num = getIconLength();
	//getIconId();
	iconImgArrayS =  getImg_S();
	iconImgArrayL =  getImg_L();
	contentTitleArray = getTitle(language);
	contentDetailArray =  getDescription(language);

}

function getXMLDoc() {
	try {
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		return xmlDoc;
	} catch (e) {
		try {
			//Firefox, Mozilla, Opera, etc.                     
			xmlDoc = document.implementation.createDocument("", "", null);
			return xmlDoc;
		} catch (e) {
			//alert(e.message);
		}
	}
}

function parseDOMXml(xmlFile) //add yums 2014-10-27
{
	if (window.XMLHttpRequest) //用http请求读取本地xml文件 
	{
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	if (xmlhttp != null) {
		xmlhttp.open("GET", xmlFile, false);
		xmlhttp.send(null);
		if (xmlhttp.responseText != "") 
		{
			xmlTxt = xmlhttp.responseText;
		}
		else
		{
			xmlhttp.open("GET", xmlURLBak, false);
			xmlhttp.send(null);
            if (xmlhttp.responseText != "") 
            {
                xmlTxt = xmlhttp.responseText;
            }
            else
            {
                xmlhttp.open("GET", xmlURLDefault, false);
                xmlhttp.send(null);
                xmlTxt = xmlhttp.responseText;
            }
		}
		
	}

	if (window.DOMParser) {
		var parser = 0;
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(xmlTxt, "text/xml");
	} else //IE                                                                                                     
	{
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = "false";
		xmlDoc.loadXML(xmlTxt);
	}
	return xmlDoc;
}


function getIconLength() //add yums:2014-10-28  获取xml文件中Icon标签的个数
{
	return xmlDoc.getElementsByTagName("icon").length;
}

function getIconId() {
	var idValue;
	var icons;
	icons = xmlDoc.getElementsByTagName("icon");
	for (var i = 0; i < icons.length; i++) {
		idValue = icons[i].getAttribute("id");
		if (idValue != null)
			xmlIconId.push(idValue);
		else
			xmlIconId.push("***");
	}
	return xmlIconId;
}

function getImg_L() //add yums
{
	var img_L;
	var icons;
	icons = xmlDoc.getElementsByTagName("icon");
	for (var i = 0; i < icons.length; i++) {
		img_L = icons[i].getElementsByTagName("img_L");
		if (img_L[0] != undefined)
			xmlImg_L.push(img_L[0].childNodes[0].nodeValue);
		else
			xmlImg_L.push("***");
		//top.g_channel.testLog(xmlImg_L[i]);
	}
	return xmlImg_L;
}

function getImg_S() //add yums
{
	var img_S;
	var icons;
	icons = xmlDoc.getElementsByTagName("icon");
	for (var i = 0; i < icons.length; i++) {
		img_S = icons[i].getElementsByTagName("img_S");

		if (img_S[0] != undefined) {
			xmlImg_S.push(img_S[0].childNodes[0].nodeValue);
		} else
			xmlImg_S.push("***");
		//top.g_channel.testLog(xmlImg_S[i])
	}
	return xmlImg_S;
}

function getTitle(lanuage) //add yums:2014-10-28
{
	var titleValue;
	var icons;
	icons = xmlDoc.getElementsByTagName("icon");

	for (var i = 0; i < icons.length; i++) {
		//top.g_channel.testLog("getTitle:"+icons[i].getElementsByTagName("title")[0].getElementsByTagName(lanuage)[0]);
		if (icons[i].getElementsByTagName("title")[0].getElementsByTagName(lanuage)[0] != undefined && icons[i].getElementsByTagName("title")[0] != undefined) {
			titleValue = icons[i].getElementsByTagName("title")[0].getElementsByTagName(lanuage)[0].childNodes[0].nodeValue;
			xmlTitle.push(titleValue);
		} else {
			xmlTitle.push("***");
		}
		//top.g_channel.testLog(xmlTitle[i]);
	}
	return xmlTitle;
}

function getDescription(lanuage) //add yums:2014-10-28
{
	var desValue;
	var icons;
	icons = xmlDoc.getElementsByTagName("icon");
	for (var i = 0; i < icons.length; i++) {


		if (icons[i].getElementsByTagName("description")[0].getElementsByTagName(lanuage)[0] != undefined && icons[i].getElementsByTagName("description")[0] != undefined) {
			desValue = icons[i].getElementsByTagName("description")[0].getElementsByTagName(lanuage)[0].childNodes[0].nodeValue;
			xmlDescription.push(desValue);
		} else {
			xmlDescription.push("***");
		}
		//top.g_channel.testLog(xmlDescription[i]);
	}
	return xmlDescription;
}


function loadXML(file) {
	try //Internet Explorer  
	{
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = false;
		xmlDoc.load(file);
	} catch (e) {
		try //Firefox, Mozilla, Opera, etc.  
		{
			xmlDoc = document.implementation.createDocument("", "", null);
			xmlDoc.async = false;
			xmlDoc.load(file);
		} catch (e) {
			try //Google Chrome  
			{
				var xmlhttp = new window.XMLHttpRequest();
				xmlhttp.open("GET", file, false);
				xmlhttp.send(null);
				xmlDoc = xmlhttp.responseXML.documentElement;
			} catch (e) {
				alert("您的浏览器不能正常加载文件。请切换到兼容模式，或者更换浏览器");
			}
		}
	}
	alert(xmlDoc)
	return xmlDoc;
}


function $(id) {
	return document.getElementById(id);
}
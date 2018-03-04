/******************** created by chenhua ***********************/
var softUpdateTitleWords 		= [top.sysOptions[5],top.sysUpdate[0],top.sysUpdate[1],top.sysUpdate[2]];
var offOnWords					= top.offOn;
var okCancelWords				= top.okCancel;
/*
描述：根据remind flag显示不同的提示
参数：remindFlag：
0  表示后台检测到有OAD升级文件 询问用户是否跳至有OAD升级的频道
1  表示正在搜索升级文件
2  表示有升级文件询问用户是否下载
3  表示正在下载 并显示下载进度
4  表示下载完成 询问用户是否升级软件
5  提示用户正在升级
6  提示用户升级成功
7  提示用户升级失败
8  提示用户没有升级文件
*/
var updateRemindWords			= [top.remindOAD,top.sysUpdateDes[13],top.sysUpdateDes[9],top.sysUpdateDes[10],top.sysUpdateDes[11],top.sysUpdateDes[7],top.sysUpdateDes[8],top.sysUpdateDes[12],top.sysUpdateDes[3]];
var productInfoWords			= top.sysProductInfo;
var softUpdating				= top.netUpdateTitle;
var buttonWords					= [top.netUpdateButtonText[0],top.netUpdateButtonText[2],top.netUpdateButtonText[1]];

document.onnotify 				= notifyProcess;

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//当前焦点窗口：menu,form
var list_position_h				= 0;					//主菜单位置下标
var form_position_h				= 0;					//副菜单或弹出框位置下标
var channelUpdateEnable			= 0;					//是否有by channel升级

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_START					= 198;					//弹出框焦点移动的开始位置
var FORM_STEP					= 250;					//弹出框焦点移动的step
var CHANGE_PASS_START			= 100;
var PROGRESS_WIDTH				= 600;					//进度条的总宽度

var networkUpdateFlag			= 0;					//0 not in network update,1 in network update
var remindOption				= 0;					//对应在updateRemindWords中的提示
var loadingImgs					= ["images/Loading-01.png",
									"images/Loading-02.png",
									"images/Loading-03.png",
									"images/Loading-04.png",
									"images/Loading-05.png",
									"images/Loading-06.png",
									"images/Loading-07.png",
									"images/Loading-08.png"];

document.onkeydown = keyDownProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	switch(msg)
	{
		case top.E_UPDATE_NOT_GET_TO_UPDATE_INFORMATION:
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption=8;
				showWarn(remindOption,value);
			}
	        break;
		case top.E_UPDATE_CHANNEL_GET_UPDATED_INFORMATION:
			//channel.testLog("in notify get update infomation focusOn = " + focusOn);
			top.systemEventProc(evt);
			/*
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption = 2;
				showWarn(remindOption,value);
			}
			
			*/
			break;
			/*
		case top.E_PVR_DISK_UNPLUG://by usb 
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption=5;
				showWarn(remindOption,value);
			}
	        break;
			*/
		case top.E_UPDATE_DOWNLOAD_PROGRESS:
	   		if(focusOn == "form" || focusOn == "loading")
			{
				if (value >=0 && value <= 100) 
				{
					var left = parseInt((value*PROGRESS_WIDTH)/100,10);
					$("progressLeft").style.width = left + "px";
					$("progressRight").style.width = (PROGRESS_WIDTH - left) +　"px";
					$("progressValue").innerHTML = value+"%";
				}
			}
	        break;
		case top.E_UPDATE_DOWNLOAD_COMPLETE:
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption = 4;
				showWarn(remindOption,value);
			}
			break;
		case top.E_UPDATE_VERIFIED_FAILED:
		{
			remindOption = 7;
			showWarn(remindOption,value);
			break;
		}
		case top.E_UPDATE_RESULT:
		{
			if(value == 1)
			{
				remindOption = 6;
				showWarn(remindOption,value);
			}
			else if(value == 0)
			{
				remindOption = 7;
				showWarn(remindOption,value);
			}
			break;
		}
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		top.systemEventProc(evt);
		break;
		default:
			//top.systemEventProc(evt);
			break;
	}
}
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	
		switch (keycode)
		{
			case top.VK_ENTER:
				doEnter();
				ret = false;
				break;
			case top.VK_LEFT:
				toLeft();
				ret = false;
				break;  
			case top.VK_RIGHT:
				toRight();
				ret = false;
				break;
			case top.VK_BACK:
				toBack();		// lizhongyong 20140714 disable back key
				break;
			case top.VK_MENU:
				hideForm();
				break;
			case top.VK_POWER:
			//case top.VK_EXIT:	// lizhongyong 20140714 disable exit key
				if(remindOption != 5)
				{
					top.keyDownProcess(evt);
				}
				break;
			default:
				break;
		}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}


function doEnter()
{
    if(focusOn == "loading")
	{	
		setting.setEnableOADScan(0);		// lizhongyong 20140712 
		hideForm();
	}
	else if(focusOn == "form")
	{
		console.log("remindOption = " + remindOption);
		switch(remindOption)
		{
			case 0:
				if(form_position_h == 0)
				{
					initLoading();
					remindOption = 1;
					clearTimeout(showWarnTimer);
					setTimeout(function(){top.g_channel.switchChannelToOADCH()},1);
				}
				else
				{ 
					setting.setEnableOADScan(0);	// lizhongyong 20140712 
					hideForm();
				}
				break;
			case 2://by channel or network find infomation,download it or not 
				if(form_position_h == 0)
				{
					remindOption = 3;//downloading
					showWarn(remindOption,0);
					setTimeout(function(){setting.startDownloadUpdateFile(2)},1000);
				}
				else
				{ 
					setting.cancelOadUpdate();		// lizhongyong 20140712 
					hideForm();
				}
				break;
			case 3://downloading
				//setting.stopDownloadUpdateFile(list_position_h);
				setting.cancelOadUpdate();		// lizhongyong 20140712 
				toBack();
				break;
			case 4://downloaded
				if(form_position_h == 0)
				{
					remindOption = 5;//updating start
					showWarn(remindOption,0);
					setTimeout(function(){setting.startUpdating(list_position_h)},1000);
				}
				else
				{
					hideForm();
				}
				break;
			case 7:
			case 8:
				hideForm();
				break;
			default:
				break;
		}
	}
}
function toBack()
{
    if(focusOn == "form" || focusOn == "loading")
	{
		hideForm();
	}
}
function toLeft()
{
   if(focusOn == "form")
	{
		if(remindOption == 0)
		{
			clearTimeout(showWarnTimer);
			showWarnTimer = setTimeout("hideForm()",60*1000);
		}
		if(remindOption == 0 || remindOption == 2 || remindOption == 4)
		{
			if(form_position_h == 0)
			{
				form_position_h = 1;
			}
			else
			{
				form_position_h = 0;
			}
			$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		}
	}
}
function toRight()
{
	if(focusOn == "form")
	{
		if(remindOption == 0)
		{
			clearTimeout(showWarnTimer);
			showWarnTimer = setTimeout("hideForm()",60*1000);
		}
		if(remindOption == 0 || remindOption == 2 || remindOption == 4)
		{
			if(form_position_h == 0)
			{
				form_position_h = 1;
			}
			else
			{
				form_position_h = 0;
			}
			$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		}
	}
}


/*
描述：根据remind flag显示不同的提示
参数：remindFlag：
0  表示后台检测到有OAD升级文件 询问用户是否跳至有OAD升级的频道
1  表示正在搜索升级文件
2  表示有升级文件询问用户是否下载
3  表示正在下载 并显示下载进度
4  表示下载完成 询问用户是否升级软件
5  提示用户正在升级
6  提示用户升级成功
7  提示用户升级失败
8  提示用户没有升级文件
*/
function showWarn(remindFlag,softVersion)
{
	console.log("remindFlag = " + remindFlag);
	clearTimeout(showWarnTimer);
	if(remindFlag == 0)
	{
		buttonsDivList[0].innerHTML = okCancelWords[0];
		buttonsDivList[1].innerHTML = okCancelWords[1];
		buttonsDivList[0].style.left = "200px";
		buttonsDivList[1].style.left = "450px";
		buttonsDivList[1].style.display = "block";
		form_position_h = 0;
		$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		$("remindContent").innerHTML = updateRemindWords[remindFlag]
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
		showWarnTimer = setTimeout("hideForm()",60*1000);
	}
	else if(remindFlag == 2)
	{
		buttonsDivList[0].innerHTML = buttonWords[0];
		buttonsDivList[1].innerHTML = buttonWords[1];
		buttonsDivList[0].style.left = "200px";
		buttonsDivList[1].style.left = "450px";
		buttonsDivList[1].style.display = "block";
		form_position_h = 0;
		$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag].replace(/XXXX/,softVersion);
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
	}
	else if(remindFlag == 4)
	{
		buttonsDivList[0].innerHTML = buttonWords[2];
		buttonsDivList[1].innerHTML = buttonWords[1];
		buttonsDivList[0].style.left = "200px";
		buttonsDivList[1].style.left = "450px";
		buttonsDivList[1].style.display = "block";
		form_position_h = 0;
		$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
	}
	else if(remindFlag == 3)
	{
		buttonsDivList[0].innerHTML = okCancelWords[1];		// ivan.li 20140714 
		buttonsDivList[0].style.left = "324px";
		buttonsDivList[1].style.display = "none";
		form_position_h = 0;
		$("remindFocus").style.left = "324px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("progressLeft").style.width = "0px";
		$("progressRight").style.width = PROGRESS_WIDTH + "px";
		$("progressValue").innerHTML = "0%";
		
		$("buttons").style.display = "block";
		$("progress").style.display  = "block";
	}
	else if(remindFlag == 5 || remindFlag == 6)
	{
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("buttons").style.display = "none";
		/*$("progressLeft").style.width = "0px";
		$("progressRight").style.width = PROGRESS_WIDTH + "px";
		$("progressValue").innerHTML = "0%";
		$("progress").style.display  = "block";*/
	}
	else if(remindFlag == 7)
	{
		buttonsDivList[0].innerHTML = okCancelWords[0];
		buttonsDivList[0].style.left = "324px";
		buttonsDivList[1].style.display = "none";
		form_position_h = 0;
		$("remindFocus").style.left = "324px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
	}
	else if(remindFlag == 8)
	{
		buttonsDivList[0].innerHTML = okCancelWords[0];
		buttonsDivList[0].style.left = "324px";
		buttonsDivList[1].style.display = "none";
		form_position_h = 0;
		$("remindFocus").style.left = "324px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
	}
	$("remindTitle").innerHTML = softUpdateTitleWords[0] + " " + softUpdateTitleWords[3];
	top.showDialogPosition($("remindForm"),800,400,1920,1080,0,0);
	$("remindForm").style.display="block";
	$("loadingForm").style.display = "none";
	focusOn = "form";
}

function hideForm()
{
	if(loadingTimer)
	{
		clearTimeout(loadingTimer);
	}
	remindOption = -1;
	$("remindForm").style.display="none";
	$("loadingForm").style.display = "none";
	top.jumpPage();
}

function initLoading()
{
	$("loadingTitle").innerHTML = softUpdating;
	$("loadingContent").innerHTML = updateRemindWords[1];
	$("loadingCancel").innerHTML = okCancelWords[1];
	top.showDialogPosition($("loadingForm"),800,360,1920,1080,0,0);
	$("remindForm").style.display = "none";
	$("loadingForm").style.display = "block";
	focusOn = "loading";
	startloading();
}
/*
描述：开始加载等待
*/
var loadingTimer = 0;
var loadingCount = 0;
function startloading()
{
	$('loadingImg').src = loadingImgs[loadingCount%8];
	loadingCount++;
	loadingTimer=setTimeout("startloading()",300);
}


var thdMenuRightSpanList;
var thdMenuRightLiList;
var buttonsDivList;
var showWarnTimer = 0;
function init()
{
	buttonsDivList = $("buttons").getElementsByTagName("div");
	showWarn(remindOption,0);
}

function addMouseListener()

{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2)
		{
			toBack();//right key
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var i = 0; i < 2; i++)
	{
		buttonsDivList[i].setAttribute("newAttr",i);
		buttonsDivList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "form")
				{
					if(remindOption == 4 || remindOption == 9 || remindOption == 11)
					{
						form_position_h = parseInt(this.getAttribute("newAttr"));
						$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
					}
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("remindFocus").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "form")
			{
				doEnter();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	$("loadingCancel").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "loading")
			{
				doEnter();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}

}
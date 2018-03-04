top.keySetForUI(1);
var timeshiftInitTitle	= top.timeshiftInitTitle;
var timeshiftInitReminds= top.timeshiftInitReminds;
var timeshiftInitButtons= top.timeshiftInitButtons;
var hotkeyWords			= top.initialHotkeys;
var others  		  	= top.timeshiftInitOther;
var autoManual			= [top.manualAuto[1],top.manualAuto[0]];
var initRemindWords   	= [top.timeshiftExtra[7],top.pvrRemindWords[6],top.timeshiftExtra[3],top.timeshiftExtra[8]];
var tips				= top.others[28];

var pageOn 				= "unuseble";//当前页：unuseble:表示当前在提示timeshift不可用的页面；setupMode:setupMode页面；formatDo:是否确认要格式化的页；spaceSelect：timeshift空间大小选择页；creatFile:创建选择大小的空闲空间文件夹进度页面；speedTest:写速度测试的进度页面；end:结束页面;noSpace:剩余空间不够

var list_position_h 	= 0;
var offset		 		= 0;			//offset = nowPosition - list_position_h
var pvr 				= top.g_pvr;
var channel 			= top.g_channel;
var operateMode			= 0;			//0 auto,1 manual

var progressTimer 		= 0;
var progress 			= 0;
var SELECT_STEP			= 50;			//单选列表框相邻两个选项之间的距离
var PROGRESS_WIDTH		= 700;
var MIN_SPACE			= 512;


document.onnotify 		= notifyProcess;
document.onkeydown 		= keyproc;

function notifyProcess(e)
{
    var msg = e.which;
	var value = e.modifiers;
	//全局消息
	switch(msg)
	{
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		case top.E_DTV_NIT_VERSION_CHANGED://nit refresh notify
			//top.systemEventProc(e);
			return;
		case top.E_SS_CH_BLOCK:// channel lock
		case top.E_SS_PARENTAL_BLOCK://parental lock
		case top.E_PVR_NO_SIGNAL://pvr no signal
			showRemind(1);
			return;
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒制提醒
			///////////////////////////chenhua change start////////////////////////////////
			top.systemEventProc(e);
			///////////////////////////chenhua change start////////////////////////////////
			return;
		case top.E_PVR_DISK_UNPLUG://usb remove//对于所有pvr的消息，我们只需要处理页面显示就可，所有函数调用都在底层处理
		case top.E_PVR_TIMESHIFT_INIT_ERR:
		case top.E_PVR_SPEED_TEST_ERR:
			showRemind(0);
			break;
		case top.E_PVR_DISK_FULL://no free space
			showRemind(3);
			break;
		case top.E_CI_CARD_INSERTED://CI insert
		case top.E_CI_CARD_REMOVE://CI remove
		case top.E_CI_DATA_READY:// CI data ready
		case top.E_CI_CAM_NAME_READY://ci card name ready
		case top.E_CI_EXIT_CI://exit
		case top.E_CI_UPGR_INPROGRESS:
		case top.E_CI_UPGR_NOT_INPROGRESS://CI update end
		case top.E_CIPLUS_PROGRAM_CHANGE:
		case top.E_CI_OP_UPDATE_INFO:
		case top.E_CI_OP_UPDATE_CHANNEL:
		case top.E_CI_OP_UPDATE_NIT:
		case top.E_CI_MHEG_OPEN:
		case top.E_CI_MHEG_CLOSE:
			//所有ＣＩ消息不做处理
			break;
		default:
			top.systemEventProc(e);
			break;
    }
}

function keyproc(e)
{
	if(pageOn == "unuseble")
		return;
		
	var keycode = e.which;
	//别的键值都不处理
	switch(keycode)
	{
		case top.VK_LEFT:// left
			toLeft();
			break;
		case top.VK_RIGHT:
			// right
			toRight();
			break;
		case top.VK_UP:
			toUp();
			break;
		case top.VK_DOWN:
			toDown();
			break;
		case top.VK_ENTER:
			doEnter();
			break;
		case top.VK_EXIT:
			//exit
			doExit();
			break;
		case top.VK_MUTE:
		case top.VK_POWER:
			top.keyDownProcess(e);
			break;
		default:
			break;
	}
}

function $(id)
{
	return document.getElementById(id);
}

function toUp()
{
	switch(pageOn)
	{
		case "setupMode":
		case "noSpace":
			if(list_position_h <= 0)
			{
				list_position_h = 1;
			}
			else
			{
				list_position_h--;
			}
			$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
			break;
		case "spaceSelect":
			toUpSpaceSelect();
			break;
		default:
			break;
	}
}

function toDown()
{
	switch(pageOn)
	{
		case "setupMode":
		case "noSpace":
			if(list_position_h >= 1)
			{
				list_position_h = 0;
			}
			else
			{
				list_position_h++;
			}
			$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
			break;
		case "spaceSelect":
			toDownSpaceSelect();
			break;
		default:
			break;
	}
}


/*left键响应函数*/
function toLeft()
{
	switch(pageOn)
	{
		case "spaceSelect":
			initSetupMode();
			break;
		case "end":
			var freeSpace = pvr.freeSpaceOfDefaultUsb();
			if(freeSpace < MIN_SPACE)//no enough space
			{
				initNoSpace();
			}
			else
			{
				initSpaceSelect(freeSpace);
			}
			break;
		default:
			break;
	}
}

/*right键响应函数*/
function toRight()
{
	doEnter();
}


function doEnter()
{channel.testLog("in  doEnter pageOn = " +　pageOn + ",list_position_h = " + list_position_h);
	switch(pageOn)
	{
		case "setupMode":
			if(list_position_h == 0)
			{
				operateMode = 0;
				channel.testLog("before freeSpaceOfDefaultUsb");
				var freeSpace = pvr.freeSpaceOfDefaultUsb();
				channel.testLog("after freeSpaceOfDefaultUsb freeSpace = " +　freeSpace);
				if(freeSpace < MIN_SPACE)//no enough space
				{
					initNoSpace();
				}
				else
				{
					initCreateTimeshiftFile(freeSpace);
				}
			}
			else
			{
				operateMode = 1;
				var freeSpace = pvr.freeSpaceOfDefaultUsb();
				if(freeSpace < MIN_SPACE)//no enough space
				{
					initNoSpace();
				}
				else
				{
					initSpaceSelect(freeSpace);
				}
			}
			break;
		case "noSpace":
			if(list_position_h == 0)
			{
				initFormating();
			}
			else
			{
				doExit();
			}
			break;
		case "spaceSelect":
			initCreateTimeshiftFile((list_position_h + offset + 1)*512);
			break;
		case "end":
			if(speed >2000)
			{
				top.$('main').src = "pvr/timeshift.html?menu";
			}
			else
			{
				doExit();
			}
			break;
		default:
			break;
	}
}


function doExit()
{
	if(pageOn != "creatFile" && pageOn != "speedTest" && pageOn != "formating")
	{
		document.location.href = "../channelPlay.html";
	}
}


/*
描述：因为各种原因而无法进入timeshif
参数：flag：事故原因的flag
全局变量：pageOn
*/
function showRemind(flag)
{
	pageOn = "unuseble";
	$('remindWord').innerText = initRemindWords[flag];
	$("remindName").innerText = tips;
	$('remind').style.display = "block";
	$("initDialog").style.display = "none";
	setTimeout(function(){document.location.href = "../channelPlay.html";},3000);
}

/*
描述：选择USB的初始化界面
参数：
全局变量:
*/

var spaceChoiceSum = 0;
function initSetupMode()
{channel.testLog("in initSetupMode start");
	operateMode = 0;
	$("remind1").innerHTML = timeshiftInitReminds[0];
	$("remind2").innerHTML = "";
	
	for(var i = 0; i < 5; i++)
	{
		if(i < 2)
		{
			selectContainerSpanList[i].innerHTML = autoManual[i];
			selectContainerLiList[i].style.display = "block";
		}
		else
		{
			selectContainerLiList[i].style.display = "none";
		}
	}
	
	list_position_h = 0;
	$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
	
	$('back').style.display = "none";
	$('select').style.display = "block";
	$('next').style.display = "block";
	
	$("selectContainer").style.display = "block";
	$("progressForm").style.display = "none";
	$("ok").style.display = "none";
	
	$('remind').style.display = "none";
	$("initDialog").style.display = "block";
	pageOn = "setupMode";
	showUpDownFlagImg(2,0);
	channel.testLog("in initSetupMode end");
}


/*
description:initialize formating page and do format
parameter:
return:
globle variable:
*/
function initFormating()
{
	$("remind1").innerHTML = "";
	$("remind2").innerHTML = timeshiftInitReminds[3];
	
	$('back').style.display = "none";
	$('select').style.display = "none";
	$('next').style.display = "none";
	
	progress = 0;
	refreshProgress(progress);
	
	$("selectContainer").style.display = "none";
	$("progressForm").style.display = "block";
	$("ok").style.display = "none";
	$('remind').style.display = "none";
	$("initDialog").style.display = "block";
	pageOn = "formating";
	
	pvr.format();//start formating
	progressTimer = setInterval("showFormatingProgress()",900);
}

/*
description:get formating progress and show progress bar
parameter:
return:
globle variable:
*/
function showFormatingProgress()
{
	progress = pvr.progressOfFormating();
	if(progress >= 100)
	{
		refreshProgress(progress);
		if(progressTimer)
		{
			clearInterval(progressTimer);
		}
		setTimeout(function(){
			var freeSpace = pvr.freeSpaceOfDefaultUsb();
			if(freeSpace < MIN_SPACE)//no enough space
			{
				initNoSpace();
			}
			else
			{
				if(operateMode == 1)//manual
				{
					initSpaceSelect(freeSpace);
				}
				else//auto
				{
					initCreateTimeshiftFile(freeSpace);
				}
			}
		},1000);
		return;
	}
	
	refreshProgress(progress);
}

/*
description:refresh prgress bar
parameter:progressValue:progress(0-100)
return:
globle variable:PROGRESS_WIDTH
*/
function refreshProgress(progressValue)
{
	if(progressValue <= 100)
	{
		progressBarImgList[0].style.width = parseInt(progressValue*PROGRESS_WIDTH/100,10) + "px";
		progressBarImgList[1].style.width = parseInt((100 - progressValue)*PROGRESS_WIDTH/100,10) + "px";
		$("progressValue").innerHTML = parseInt(progressValue,10) + "%";
	}
}

/*
decription:initialize page when no space to timeshift,tell user to format usb
parameter:
return:
globle variable:
*/
function initNoSpace()
{
	$("remind1").innerHTML = timeshiftInitReminds[4] + " " + timeshiftInitReminds[1];
	$("remind2").innerHTML = "";
	
	selectContainerSpanList[0].innerHTML = timeshiftInitButtons[0];
	selectContainerSpanList[1].innerHTML = timeshiftInitButtons[5];
	for(var i = 0; i < 5; i++)
	{
		if(i <= 1)
		{
			selectContainerLiList[i].style.display = "block";
		}
		else
		{
			selectContainerLiList[i].style.display = "none";
		}
	}
	
	$('back').style.display = "none";
	$('select').style.display = "block";
	$('next').style.display = "block";
	
	list_position_h = 0;
	$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
	
	$("selectContainer").style.display = "block";
	$("progressForm").style.display = "none";
	$("ok").style.display = "none";
	$('remind').style.display = "none";
	$("initDialog").style.display = "block";
	pageOn = "noSpace";
	showUpDownFlagImg(2,0);
}


/*
decription:initialize space size you can select when usb free space > 512MB
parameter:freeSpace
return:
globle variable:
*/
var spaceChoiceSum 	= 0;
function initSpaceSelect(freeSpace)
{
	spaceChoiceSum = parseInt(freeSpace/512,10);
	
	channel.testLog("in initSpaceSelect spaceChoiceSum = " +　spaceChoiceSum);
	$("remind1").innerHTML = timeshiftInitReminds[2];
	$("remind2").innerHTML = "";
	
	for(var i = 0; i < 5; i++)
	{
		if(i < spaceChoiceSum)
		{
			if(i == 0)
			{
				selectContainerSpanList[i].innerHTML = "512M";
			}
			else
			{
				selectContainerSpanList[i].innerHTML = (i + 1)*0.5 + "G"; 
			}
			selectContainerLiList[i].style.display = "block";
		}
		else
		{
			selectContainerLiList[i].style.display = "none";
		}
	}
	offset = 0;
	list_position_h = 0;
	$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
	
	$('back').style.display = "block";
	$('select').style.display = "block";
	$('next').style.display = "block";
	
	$("selectContainer").style.display = "block";
	$("progressForm").style.display = "none";
	$("ok").style.display = "none";
	$('remind').style.display = "none";
	$("initDialog").style.display = "block";
	
	pageOn = "spaceSelect";
	showUpDownFlagImg(spaceChoiceSum,offset);
}


/*
描述：do key down in space select page
参数：
全局变量:spaceChoiceSum,list_position_h,offset
*/
function toDownSpaceSelect()
{
	if(spaceChoiceSum <= 5)
	{
		if(list_position_h < (spaceChoiceSum - 1))
		{
			list_position_h++;
		}
		else
		{
			list_position_h = 0;
		}
	}
	else
	{
		if(list_position_h < (5 - 1))
		{
			list_position_h++;
		}
		else if((list_position_h + offset) >= (spaceChoiceSum - 1))//list_position_h == 4，到达最后一个数据
		{
			offset = 0;
			list_position_h = 0;
			for(var i = 0; i < 5; i++)
			{
				if(i == 0)
				{
					selectContainerSpanList[i].innerHTML = "512M";
				}
				else
				{
					selectContainerSpanList[i].innerHTML = (i + offset + 1)*0.5 + "G"; 
				}
			}
		}
		else//list_position_h == 4
		{
			offset++;
			//list_position_h not change
			for(var i = 0; i < 5; i++)
			{
				selectContainerSpanList[i].innerHTML = (i + offset + 1)*0.5 + "G"; 
			}
		}
	}
	$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
	showUpDownFlagImg(spaceChoiceSum,offset);
}

/*
描述：do key up in space select page
参数：
全局变量:spaceChoiceSum,list_position_h,offset
*/
function toUpSpaceSelect()
{
	if(spaceChoiceSum <= 5)
	{
		if(list_position_h > 0)
		{
			list_position_h--;
		}
		else
		{
			list_position_h = spaceChoiceSum - 1;
		}
	}
	else
	{
		if(list_position_h > 0)
		{
			list_position_h--;
		}
		else if(offset == 0)//list_position_h == 0，到达第一个数据
		{
			list_position_h = 4;
			offset = (spaceChoiceSum - 1) - list_position_h;
			for(var i = 0; i < 5; i++)
			{
				selectContainerSpanList[i].innerHTML = (i + offset + 1)*0.5 + "G"; 
			}
		}
		else//list_position_h == 0
		{
			offset--;
			//list_position_h not change
			for(var i = 0; i < 5; i++)
			{
				if(i == 0 && offset == 0)//first space choice
				{
					selectContainerSpanList[i].innerHTML = "512M";
				}
				else
				{
					selectContainerSpanList[i].innerHTML = (i + offset + 1)*0.5 + "G"; 
				}
			}
		}
	}
	$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
	showUpDownFlagImg(spaceChoiceSum,offset);
}

/*
decription:
parameter:creatSize:size which will be create,unit is MB
retrun:
globle variable:
*/
function initCreateTimeshiftFile(creatSize)
{
	
	$("remind1").innerHTML = "";
	$("remind2").innerHTML = timeshiftInitReminds[5];
	
	$('back').style.display = "none";
	$('select').style.display = "none";
	$('next').style.display = "none";
	
	progress = 0;
	refreshProgress(progress);
	
	$("selectContainer").style.display = "none";
	$("progressForm").style.display = "block";
	$("ok").style.display = "none";
	$('remind').style.display = "none";
	$("initDialog").style.display = "block";
	pageOn = "creatFile";
	
	pvr.createFreeFileSpace(creatSize);
	progressTimer = setInterval("showCreateFileProgress()",900);
}

/*
decription:
parameter:
retrun:
globle variable:
*/
function showCreateFileProgress()
{
	progress = pvr.progressOfCreateFreeFile();
	if(progress >= 100)
	{
		refreshProgress(progress);
		if(progressTimer)
		{
			clearInterval(progressTimer);
		}
		setTimeout("initWriteSpeedTest()",1000);
		return;
	}
	
	refreshProgress(progress);
}

/*
decription:
parameter:
retrun:
globle variable:
*/
function initWriteSpeedTest()
{
	
	$("remind1").innerHTML = "";
	$("remind2").innerHTML = timeshiftInitReminds[6];
	
	$('back').style.display = "none";
	$('select').style.display = "none";
	$('next').style.display = "none";
	
	progress = 0;
	refreshProgress(progress);
	
	$("selectContainer").style.display = "none";
	$("progressForm").style.display = "block";
	$("ok").style.display = "none";
	$('remind').style.display = "none";
	$("initDialog").style.display = "block";
	pageOn = "speedTest";
	
	pvr.writeFreeFileSpace();
	progressTimer = setInterval("showWriteSpeedTestProgress()",900);
}

/*
decription:
parameter:
retrun:
globle variable:
*/
function showWriteSpeedTestProgress()
{
	progress = pvr.progressOfWriteFreeFile();
	if(progress >= 100)
	{
		refreshProgress(progress);
		if(progressTimer)
		{
			clearInterval(progressTimer);
		}
		setTimeout("initSpeedTestEnd()",1000);
		return;
	}
	
	refreshProgress(progress);
}

/*
decription:
parameter:
retrun:
globle variable:
*/
var speed = 0;
function initSpeedTestEnd()
{
	speed = pvr.speedOfWriteFreeFile();
	
	
	$("remind1").innerHTML = others[0] + speed/1000 + others[1];
	if(speed <= 2000)
	{
		$("remind2").innerHTML = timeshiftInitReminds[7].replace(/%f/,2.0);
	}
	else if(speed > 2000 && speed < 5000)
	{
		$("remind2").innerHTML = timeshiftInitReminds[8].replace(/%f/,5.0);
	}
	else
	{
		$("remind2").innerHTML = timeshiftInitReminds[9];
	}
	
	
	$('back').getElementsByTagName('span')[0].innerHTML = hotkeyWords[0];
	$('back').style.display = "block";
	$('select').style.display = "none";
	$('next').style.display = "none";
	
	$("ok").innerHTML = timeshiftInitButtons[3];
	$("ok").style.display = "block";
	
	$("selectContainer").style.display = "none";
	$("progressForm").style.display = "none";
	$('remind').style.display = "none";
	$("initDialog").style.display = "block";
	pageOn = "end";
}

function showUpDownFlagImg(optionSum,positionOffset)
{
	if(optionSum <= 5)
	{
		$("initListUpImg").style.opacity = 0;
		$("initListDownImg").style.opacity = 0;
		return;
	}
	
	if(positionOffset > 0)
	{
		$("initListUpImg").style.opacity = 1;
	}
	else
	{
		$("initListUpImg").style.opacity = 0;
	}
	
	if((positionOffset + 4) >= (optionSum - 1))
	{
		$("initListDownImg").style.opacity = 0;
	}
	else
	{
		$("initListDownImg").style.opacity = 1;
	}
}

var selectContainerSpanList;
var selectContainerLiList;
var progressBarImgList;
function init()
{
	top.stopTimeout();
	top.g_temp = "pvr";
	selectContainerLiList = $("selectContainer").getElementsByTagName("li");
	//初始化时判断录制条件是否具备
	if(pvr.getUsbStatus() != 1)//没有插入usb
	{
		showRemind(0);//no usb
	}
	else
	{
		if(top.recordStatusFlag == 1 || channel.timeshiftEnableStatus == 0)
		{
			showRemind(1);//featrue not available
			return;
		}
		
		var screenMode = channel.currentScreenSaverMode;
		if(screenMode == 0 || screenMode == 7 || screenMode == 6  || top.channelLock == 1 || top.parentalLock == 1 ||  top.inputLock == 1 || !channel.currentSignalStatus)//featrue not available
		{
			showRemind(1);//featrue not available
		}
		else if(pvr.isVideoScramble())//scramble:pvr timeshift not surpport 
		{
			showRemind(2);//not surpport
		}
		else
		{
			if(pvr.usbInitStateOfTimeshift())//已经初始化过
			{
				if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
				}
				top.$('main').src = "pvr/timeshift.html?menu";
				return;
			}
			$("initTitle").innerHTML = timeshiftInitTitle;
			selectContainerSpanList = $("selectContainer").getElementsByTagName("span");
			progressBarImgList = $("progressBar").getElementsByTagName("img");
			
			$('back').getElementsByTagName('span')[0].innerHTML = hotkeyWords[0];
			$('select').getElementsByTagName('span')[0].innerHTML = hotkeyWords[1];
			$('next').getElementsByTagName('span')[0].innerHTML = hotkeyWords[2];
			initSetupMode();
		}
	}
	addMouseListener();
}

function uninit()
{
	top.g_temp = "";
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2)
		{
		}
	}
	for(var i = 0; i < 5; i++)
	{
		selectContainerLiList[i].setAttribute("newAttr",i);
		selectContainerLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(pageOn == "setupMode" || pageOn == "noSpace")
				{
					if(parseInt(this.getAttribute("newAttr")) < 2)
					{
						list_position_h = parseInt(this.getAttribute("newAttr"));
						$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
					}
				}
				else if(pageOn == "spaceSelect")
				{
					list_position_h = parseInt(this.getAttribute("newAttr"));
					$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
				}
				doEnter();
			}
		}
	}
	$("initListUpImg").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(pageOn == "spaceSelect" && $("initListUpImg").style.opacity == 1)
			{
				list_position_h = 0;
				$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
				toUpSpaceSelect();
			}
		}
	}
	$("initListDownImg").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(pageOn == "spaceSelect" && $("initListDownImg").style.opacity == 1)
			{
				list_position_h = 4;
				$('listFormFocus').style.top = list_position_h*SELECT_STEP + "px";
				toDownSpaceSelect();
			}
		}
	}
	
	$("ok").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(pageOn == "end")
			{
				doEnter();
			}
		}
	}
}
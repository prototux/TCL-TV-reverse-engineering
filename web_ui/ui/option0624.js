var mainFocus               = ["images/Focus_Frame/Focus-1.png","images/Focus_Frame/Focus-2.png"]
var SUB_MENU_START 			= 70;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 84;					//二级级主菜单焦点移动的step
var RESET_START             = 190;
var RESET_STEP              = 250;
var FORM_STEP				= 80;					//弹出框焦点移动的step	
var list_position_h         = 0;	
var form_position_h         = 0;
var reset_position_h        = 0;
var BOPValue                = 0;
var BFSValue                = 0;
var EvByEvValue             = 0;
var GetUserIDValue          = 0;
var BGMValue                = 0;
var NRMValue                = 0;
var DVBT2Value              = 0;
var hbbtvModeValue          = 0;
var serialValue             = 0;
var dvixDPSValue            = 0;
var runningTimeValue        = 0;
var leftOffset              = 508;
var listFormLiList;
var mainMenuLiList;
var focusOn                 = "optionList";
var option0624Name          = [top.option0624Name[0],top.option0624Name[1],top.option0624Name[2],top.option0624Name[3],top.option0624Name[4],top.option0624Name[5],top.option0624Name[6],top.option0624Name[7],top.option0624Name[8],top.option0624Name[9],"Serial IO Ctrl","Running time","DCAPP"];
var offOnWords              = top.offOn;
var DVBT2AndChoice          = [top.DVBT2AndChoice[2],top.DVBT2AndChoice[0],top.DVBT2AndChoice[1]]
var menuList =[
{name:option0624Name[0],param:function(){doBOP();},showFlag:0},
{name:option0624Name[1],param:function(){doBFS();},showFlag:0},
{name:option0624Name[2],param:function(){doEventByEvent();},showFlag:0},
{name:option0624Name[3],param:function(){doGetUserID();},showFlag:1},
{name:option0624Name[4],param:function(){doBGM();},showFlag:1},
{name:option0624Name[5],param:function(){doResetAll();},showFlag:1},
{name:option0624Name[6],param:function(){doResetShop();},showFlag:1},
{name:option0624Name[7],param:function(){doNRM();},showFlag:1},
{name:option0624Name[8],param:function(){doDVBT2Choice();},showFlag:1},
{name:option0624Name[9],param:function(){doHbbtvModeChoice();},showFlag:1},
{name:option0624Name[10],param:function(){doSerialChoice();},showFlag:1},
{name:option0624Name[11],param:function(){},showFlag:1},
{name:option0624Name[12],param:function(){doDvixDPS();},showFlag:0},
]
var resetShopFlag         = 0;
var setting = top.g_setting;
function initValue()
{
	BOPValue                = 0;
	BFSValue                = 0;
	EvByEvValue             = 0;
	GetUserIDValue          = top.g_factory.otherGotUserID;
	console.log("top.g_setting.networkDownloadButton==="+top.g_setting.networkDownloadButton);
	if(top.g_setting.networkDownloadButton == 2)
	{
		NRMValue = 0;
	}
	else
	{
		NRMValue = 1;
	}
	console.log("NRMValue==="+NRMValue);
	BGMValue                = top.g_factory.otherBGM;
	console.log("otherBGM==="+BGMValue);
	DVBT2Value              = top.g_factory.dvbt2Choice;
	hbbtvModeValue          = top.g_setting.hbbTVMode;
	serialValue             = top.g_factory.getSerialPortStatus();
	dvixDPSValue            = top.g_media.dvixDPS;
}
function doBOP()
{
	try
	{
	$("popListFocus").src=mainFocus[1];
	form_position_h = BOPValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "BOPValue";
	}catch(er)
	{
		console.log("-----"+er);
	}
}
function doBFS()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = BFSValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "BFSValue";
}
function doEventByEvent()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = EvByEvValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "EvByEvValue";
}
function doGetUserID()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = GetUserIDValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "GetUserIDValue";
}
function doBGM()
{
	
	$("popListFocus").src=mainFocus[1];
	form_position_h = BGMValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "BGMValue";
}
function doResetAll()
{
	var span = $("resetForm").getElementsByTagName("span");
	span[0].innerHTML = option0624Name[5];
	span[1].innerHTML = top.selectChoice;
	span[2].innerHTML = top.okCancel[1];
	span[3].innerHTML = top.okCancel[0];
	reset_position_h = 0;
	$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	$("resetForm").style.display = "block";
	$("smallPopWin").style.display = "none";
	focusOn = "resetAll";
}
function doResetShop()
{
	var span = $("resetForm").getElementsByTagName("span");
	span[0].innerHTML = option0624Name[6];
	span[1].innerHTML = top.selectChoice;
	span[2].innerHTML = top.okCancel[1];
	span[3].innerHTML = top.okCancel[0];
	reset_position_h = 0;
	$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	$("resetForm").style.display = "block";
	$("smallPopWin").style.display = "none";
	focusOn = "resetShop";
}
function doNRM()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = NRMValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "NRMValue";
}
function doDVBT2Choice()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = DVBT2Value;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,DVBT2AndChoice,3,form_position_h,0);
	focusOn = "DVBT2Value";
}
function doHbbtvModeChoice()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = hbbtvModeValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "hbbtvModeValue";
}
function doSerialChoice()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = serialValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "serialValue";
}
function doDvixDPS()
{
    $("popListFocus").src=mainFocus[1];
    form_position_h = dvixDPSValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
    focusOn = "dvixDPSValue";
}
function init()
{
	timeoutInit();
	initValue();
	listFormLiList = $("listForm").getElementsByTagName("li");
	mainMenuLiList = $("smallPopWin").getElementsByTagName("li");
	showBOPValueMenu();
	showBFSValueMenu();
	showEvByEvValueMenu();
	showGetUserIDValueMenu();
	showBGMValueMenu();
	showResetAllMenu();
	showResetShopMenu();
	showNRMValueMenu();
	showDVBT2ValueMenu();
	showhbbtvModeValueMenu();
	showserialValueMenu();
    showDvixDPSValueMenu();
	showMenuList();
    showRunningTime();
	refreshFocusOfMenuList();
}
function uninit()
{
	//top.timeoutFuc.timeoutEnable=1;
}
function showBOPValueMenu()
{
	var span = mainMenuLiList[0].getElementsByTagName("span");
	var div = mainMenuLiList[0].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[0];
	div[0].innerHTML = offOnWords[BOPValue];
}
function showBFSValueMenu()
{
	var span = mainMenuLiList[1].getElementsByTagName("span");
	var div = mainMenuLiList[1].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[1];
	div[0].innerHTML = offOnWords[BFSValue];
}
function showEvByEvValueMenu()
{
	var span = mainMenuLiList[2].getElementsByTagName("span");
	var div = mainMenuLiList[2].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[2];
	div[0].innerHTML = offOnWords[EvByEvValue];
}
function showGetUserIDValueMenu()
{
	var span = mainMenuLiList[3].getElementsByTagName("span");
	var div = mainMenuLiList[3].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[3];
	div[0].innerHTML = offOnWords[GetUserIDValue];
}
function showBGMValueMenu()
{
	var span = mainMenuLiList[4].getElementsByTagName("span");
	var div = mainMenuLiList[4].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[4];
	console.log("BGMValue"+BGMValue);
	div[0].innerHTML = offOnWords[BGMValue];
}
function showResetAllMenu()
{
	var span = mainMenuLiList[5].getElementsByTagName("span");
	span[0].innerHTML = option0624Name[5];
}
function showResetShopMenu()
{
	var span = mainMenuLiList[6].getElementsByTagName("span");
	span[0].innerHTML = option0624Name[6];
}
function showNRMValueMenu()
{
	var span = mainMenuLiList[7].getElementsByTagName("span");
	var div = mainMenuLiList[7].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[7];
	div[0].innerHTML = offOnWords[NRMValue];
}
function showDVBT2ValueMenu()
{
	var span = mainMenuLiList[8].getElementsByTagName("span");
	var div = mainMenuLiList[8].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[8];
	div[0].innerHTML = DVBT2AndChoice[DVBT2Value];
}
function showhbbtvModeValueMenu()
{
	var span = mainMenuLiList[9].getElementsByTagName("span");
	var div = mainMenuLiList[9].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[9];
	div[0].innerHTML = offOnWords[hbbtvModeValue];
}
function showserialValueMenu()
{
	var span = mainMenuLiList[10].getElementsByTagName("span");
	var div = mainMenuLiList[10].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[10];
	div[0].innerHTML = offOnWords[serialValue];
}

function showDvixDPSValueMenu()
{
    var span = mainMenuLiList[12].getElementsByTagName("span");
    var div = mainMenuLiList[12].getElementsByTagName("div");
    span[0].innerHTML = option0624Name[12];
    div[0].innerHTML = offOnWords[dvixDPSValue];
}

function showRunningTime()
{
    var span = mainMenuLiList[11].getElementsByTagName("span");
    var div = mainMenuLiList[11].getElementsByTagName("div");
    span[0].innerHTML = option0624Name[11];
    //div[0].innerHTML = offOnWords[runningTimeValue];
    var runningTime = parseInt(setting.getProperty("persist.app.runntingTime", "0"))*20;
    var year = runningTime/(365*24*60);
    var year1 = runningTime%(365*24*60);
    var month = year1/(30*60*24);
    var month1 = year1%(30*60*24);
    var day = month1/(60*24);
    var day1 = month1%(60*24);
    var hour = day1/60;
    var minute = day1%60;
    div[0].innerHTML = Math.floor(year)+"Y:"+Math.floor(month)+"M:"+Math.floor(day)+"D:"+Math.floor(hour)+"h:"+minute+"m";
    div[0].style.left = "200px";
    div[0].style.width = "280px";
}

function $(id)
{
    return document.getElementById(id);
}
document.onnotify = notifyProcess;

function notifyProcess(evt)
{
	if(resetShopFlag==1)
	{
		return;
	}
    var msg = evt.which;
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function keyDownProcess(evt)
{
	if(resetShopFlag==1)
	{
		return;
	}
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
			toUp();
			ret = false;
			break;
		case top.VK_DOWN:
			toDown();
			ret = false;
			break;
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
			toBack();
			break;
		case top.VK_MENU:
			top.jumpPage();
			break;
		default:
			top.keyDownProcess(evt);
			break;
	}
}

function toUp()
{
	if(focusOn == "optionList")
	{
		if(list_position_h <= 0)
		{
			list_position_h = findMaxPosition();
		}
		else
		{
			list_position_h--;
		}
		refreshFocusOfMenuList();
	}
	else if(focusOn == "DVBT2Value")
	{
		form_position_h--;
		if(form_position_h < 0)
		{
			form_position_h = 2;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
	else
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0 ;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
}

function toDown()
{
	if(focusOn == "optionList")
	{
		if(list_position_h >= findMaxPosition())
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		refreshFocusOfMenuList();
	}
	else if(focusOn == "DVBT2Value")
	{
		form_position_h++;
		if(form_position_h > 2)
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
	else
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0 ;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
}

function toRight()
{
	if(focusOn == "resetShop" || focusOn == "resetAll")
	{
		if(reset_position_h==0)
		{
			reset_position_h = 1;
		}
		else
		{
			reset_position_h = 0;
		}
		$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	}
	else 
	{
		doEnter();
	}
}
function toLeft()
{
	if(focusOn == "resetShop" || focusOn == "resetAll")
	{
		if(reset_position_h==0)
		{
			reset_position_h = 1;
		}
		else
		{
			reset_position_h = 0;
		}
		$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	}
	else
	{
		toBack();
	}
}

function toBack()
{
	if(focusOn == "resetShop" || focusOn == "resetAll")
	{
		$("smallPopWin").style.display = "block";
		$("resetForm").style.display = "none";
		focusOn = "optionList";
	}
	else
	{
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
}

function doEnter()
{
	if(focusOn == "resetShop")
	{
		if(reset_position_h == 0)
		{
			resetShopFlag=0;
			$("smallPopWin").style.display = "block";
			$("resetForm").style.display = "none";
			focusOn = "optionList";
		}
		else
		{
			resetShopFlag=1;
			top.showMute(0);
			top.initGlobalVariable();
			top.showFactoryHotkey();
			top.g_setting.restoreDefault();
			
            if(top.g_isDownloading == 1)
            {
                top.g_isDownloading = -1;
                if(!top.g_isForceUpgrade)
                {
                    top.g_setting.pauseDownloadUpdateFile();
                    top.hideDownloadRing();
                }

            }
			setTimeout(function(){top.jumpHotkeyPage("initSetup/initEnvironmentSet.html");},3000);
		}
	}
	else if(focusOn == "resetAll")
	{
		if(reset_position_h == 0)
		{
			$("smallPopWin").style.display = "block";
			$("resetForm").style.display = "none";
			focusOn = "optionList";
		}
		else
		{
            console.log("****************** do NVM reset Start *********************");
            if(0 == top.g_factory.nvmResetAll(1))
            {
                console.log("****************** do NVM reset Success *********************");
            }
            else
            {
                console.log("****************** do NVM reset Fail *********************");
            }
            top.g_factory.factoryHotkey = 0;
            $("smallPopWin").style.display = "block";
            $("resetForm").style.display = "none";
            focusOn = "optionList";
            console.log("****************** do NVM reset End *********************");
		}
	}
	else if(focusOn == "BOPValue")
	{
		BOPValue = form_position_h;
		showBOPValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "BFSValue")
	{
		BFSValue = form_position_h;
		showBFSValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "EvByEvValue")
	{
		EvByEvValue = form_position_h;
		showEvByEvValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "GetUserIDValue")
	{
		GetUserIDValue = form_position_h;
		top.g_factory.otherGotUserID = GetUserIDValue;
		showGetUserIDValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "NRMValue")
	{
		if(form_position_h==0)
		{
			top.g_setting.networkDownloadButton = 2;
            var opupdateInfo = top.g_setting.getUpdateInfo();
            if(opupdateInfo){
                //console.log("opupdateInfo.version.length==="+opupdateInfo.version.length);
                if(opupdateInfo.version.length > 15)
                {
                    //console.log("opupdateInfo.version==="+parseInt(opupdateInfo.version.slice(15), 10));
                    top.g_setting.networkUpdateSoftwareVersionInDB = parseInt(opupdateInfo.version.slice(15), 10);
                }
            }
		}
		else
		{
			top.g_setting.networkDownloadButton = 0;
            top.g_setting.networkUpdateSoftwareVersionInDB = 0;
		}
		NRMValue = form_position_h;
		showNRMValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "BGMValue")
	{
		top.g_factory.otherBGM = form_position_h;
		BGMValue = form_position_h;
		showBGMValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "DVBT2Value")
	{
		top.g_factory.dvbt2Choice = form_position_h;
		DVBT2Value = form_position_h;
		showDVBT2ValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "hbbtvModeValue")
	{
		top.g_setting.hbbTVMode = form_position_h;
		hbbtvModeValue = form_position_h;
		showhbbtvModeValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "serialValue")
	{
		top.g_factory.setSerialPortStatus(form_position_h); 
		serialValue = form_position_h;
		showserialValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "dvixDPSValue")
	{
		if(form_position_h==0) //yiling0811
			top.g_media.switchSourceFromMedia();
		if(form_position_h==1)
			top.g_media.switchSourceDirectToMedia();
		top.g_media.dvixDPS = form_position_h; 
		dvixDPSValue = form_position_h;
		showDvixDPSValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "optionList")
	{
		findFunction(list_position_h);
	}
    else if(focusOn == "runningTimeValue")
    {

    }
}
function checkShowMenu()
{

}
function showMenuList()
{
	
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			mainMenuLiList[i].style.display="block";
		}
		else
		{
			mainMenuLiList[i].style.display="none";
		}
	}
}
function findFunction(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			menuList[i].param();
			break;
		}
	}
}
function findName(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			return menuList[i].name;
		}
	}
}
function findPosition(name)
{
	var position=0;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].name==name)
		{
			break;
		}
		if(menuList[i].showFlag==1)
		{
			position++;
		}
	}
	return position;
}
function findMaxPosition()
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
	}
	return num;
}
function findPositionOfTagIndex(index)
{
	var num=-1;
	for(var i = 0;(i <= index) && (i < menuList.length);i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
	}
	return num;
}
function refreshFocusOfMenuList()
{
	$("popListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
}


var wirelessAutoConName       = [top.manualAuto[1],top.netWlessAuto[0],top.netWlessAuto[1],top.netOthers[0] + " :"]
var pinHotkey				  = [top.others[15],top.okCancel[0],top.okCancel[1]];
var titles					  = [top.netOptions[2] + ">" + top.manualAuto[1] + ">" + top.netWlessAuto[0],
									top.netOptions[2] + ">" + top.manualAuto[1] + ">" + top.netWlessAuto[1]];
var netWlessAutoDes			  = top.netWlessAutoDes;
var remindWord                = [top.netWireConnRemind[3],top.netWireConnRemind[4],top.netWireConnRemind[5]]
var positionV                 = 0;//主界面焦点位置
var positionPINH              = 0;//PIN操作框button焦点位置
var positionPBCH              = 0;//PBC操作框button焦点位置
var PBCTimeout                = 0; //PBC倒计时的Timeout
var showTime                  = 120;//PBC倒计时时间
var MENU_START 			      = 130;//菜单焦点移动起始位置
var MENU_STEP 			      = 70;//主菜单焦点移动的step
var focusType                 = "wirelessAutoMenu";
var setting = top.g_setting;
var bIsPressedOK = 0;
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_WIRELESS_CONNECT_SUCCESS://表示无线网络连接成功
		{
			if(focusType == "PBCMenu")
			{
				focusType = "showRemind";
				clearTimeout(PBCTimeout);
				PBCTimeout=0;
				showTime=120;
				$("wirelessAutoPBC").style.display="none";
				$("remindNetStatue").style.display="block";
				$("remindNetStatue").innerHTML=remindWord[0];
				setTimeout(function(){
					top.restartTimeout();
					$("remindNetStatue").style.display="none";
						parent.showPage(3);
					focusType = "wirelessAutoMenu";
					},2000)
			}
			else if(focusType == "PINMenu")
			{
				$("PINcode").innerHTML=remindWord[0];
				setTimeout(function(){
					top.restartTimeout();
					$("wirelessAutoPIN").style.display="none";
					parent.showPage(3);
					focusType = "wirelessAutoMenu";
				},2000);
			}
			bIsPressedOK = 0;
			break;
		}
		case top.E_WIRELESS_CONNECT_FAILURE://表示无线连接失败
		{
			if(bIsPressedOK == 0)
			{
				return;
			}
			if(focusType == "PBCMenu")
			{
				focusType = "showRemind";
				clearTimeout(PBCTimeout);
				PBCTimeout=0;
				showTime=120;
				$("wirelessAutoPBC").style.display="none";
				$("remindNetStatue").style.display="block";
				$("remindNetStatue").innerHTML=remindWord[1];
				setTimeout(function(){
					top.restartTimeout();
					$("remindNetStatue").style.display="none";
						parent.showPage(3);
					focusType = "wirelessAutoMenu";
					},2000)
			}
			else if(focusType == "PINMenu")
			{
				if(bIsPressedOK == 0)
				{
					return;
				}
				$("PINcode").innerHTML=remindWord[1];
				setTimeout(function(){
					top.restartTimeout();
					$("wirelessAutoPIN").style.display="none";
					parent.showPage(3);
					focusType = "wirelessAutoMenu";
				},2000);
			}
			bIsPressedOK = 0;
			break;
		}
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
function keyDownProcess(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			//up
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			toDown();
			ret = false;
			break;
		}
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			break;
		}
		default:
			top.keyDownProcess(evt);
		break;
	}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}
function toUp()
{
	if(focusType == "wirelessAutoMenu")
	{
		positionV--;
		if(positionV<0)
		{
			positionV=1;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
}
function toDown()
{
	if(focusType == "wirelessAutoMenu")
	{
		positionV++;
		if(positionV>1)
		{
			positionV=0;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
}
function toLeft()
{
	if(focusType == "PINMenu")
	{
		positionPINH--;/*由于positionPINH 0 表示取消 1 表示 OK 2 表示Refresh 所以向左是加一*/
		if(positionPINH<0)
		{
			positionPINH=2;
		}
		$("PINButtonFocus").style.left=60+positionPINH*200+"px";
		top.doEleScrForNoOption(pinButtonList, positionPINH, -1);
	}
	else if(focusType == "PBCMenu")
	{
		if(positionPBCH==0)
		{
			positionPBCH=1;
			$("PBCButtonFocus").style.left=440+"px";
		}
		else
		{
			positionPBCH=0;
			$("PBCButtonFocus").style.left=90+"px";
		}
		top.doEleScrForNoOption(pbcButtonList, positionPBCH, -1);
	}
	else if(focusType == "wirelessAutoMenu") 
	{
		toBack();
	}
}
function toRight()
{
	if(focusType == "PINMenu")
	{
		positionPINH++;
		if(positionPINH>2)
		{
			positionPINH=0;
		}
		$("PINButtonFocus").style.left=60+positionPINH*200+"px";
		top.doEleScrForNoOption(pinButtonList, positionPINH, 1);
	}
	else if(focusType == "PBCMenu")
	{
		if(positionPBCH==0)
		{
			positionPBCH=1;
			$("PBCButtonFocus").style.left=440+"px";
		}
		else
		{
			positionPBCH=0;
			$("PBCButtonFocus").style.left=90+"px";
		}
		top.doEleScrForNoOption(pbcButtonList, positionPBCH, 1);
	}
	else if(focusType == "wirelessAutoMenu") 
	{
		toOK();
	}
}
function toOK()
{
	if(focusType == "wirelessAutoMenu")
	{
		switch(positionV)
		{
			case 0:
			{
				top.stopTimeout();
				showPINMenu();
			}
			break;
			case 1:
			{
				showPBCMenu();
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "PINMenu")
	{
		switch(positionPINH)
		{
			case 2:
			{
				bIsPressedOK = 0;
				top.restartTimeout();
				parent.showPage(3);
				$("wirelessAutoPIN").style.display="none";
				focusType = "wirelessAutoMenu";
			}
			break;
			case 1:
			{
				bIsPressedOK = 1;
				setting.connectPinCode('');
				$("PINcode").innerHTML=remindWord[2];//后续添加函数
			}
			break;
			case 0:
			{
				bIsPressedOK = 1;
				showPINCode();
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "PBCMenu")
	{
		switch(positionPBCH)
		{
			case 1:
			{
				bIsPressedOK = 0;
				clearTimeout(PBCTimeout);
				PBCTimeout=0;
				showTime=120;
				top.restartTimeout();
				setting.cancelPBC();
				$("wirelessAutoPBC").style.display="none";
				parent.showPage(3);
				focusType = "wirelessAutoMenu";
			}
			break;
			case 0:
			{
				bIsPressedOK = 1;
				top.stopTimeout();
				showPBCTime();
				setting.startPBC();
			}
			break;
			default:
			break;
		}
	}
}
function toBack()
{
	if(focusType == "wirelessAutoMenu")
	{
		parent.returnPage(3);
	}
	else if(focusType == "PINMenu")
	{
		parent.showPage(3);
		$("wirelessAutoPIN").style.display="none";
		focusType = "wirelessAutoMenu";
	}
	else if(focusType == "PBCMenu")
	{
		clearTimeout(PBCTimeout);
		PBCTimeout=0;
		showTime=120;
		top.restartTimeout();
		setting.cancelPBC();
		$("wirelessAutoPBC").style.display="none";
		parent.showPage(3);
		focusType = "wirelessAutoMenu";
	}
}
function init()
{
	timeoutInit();
	var spans=$("fourthMenuRight").getElementsByTagName("span");
	for(var i=0;i<=2;i++)
	{
		spans[i].innerHTML=wirelessAutoConName[i];
	}
	initPINMenu();
	initPBCMenu();
	addMouseListener();
}
var pinButtonList;
var pbcButtonList;
function initPINMenu()//初始化PIN操作框
{
	$("PINTitle").innerHTML=titles[0];
	$("PINContent").innerHTML=netWlessAutoDes[0];
	var divs=$("PINbuttonList").getElementsByTagName("div");
	pinButtonList = divs;
	divs[0].innerHTML=pinHotkey[0];
	divs[1].innerHTML=pinHotkey[1];
	divs[2].innerHTML=pinHotkey[2];
}
function initPBCMenu()//初始化PBC操作框
{
	$("PBCTitle").innerHTML=titles[1];
	$("PBCContent").innerHTML=netWlessAutoDes[1];
	var divs=$("PBCbuttonList").getElementsByTagName("div");
	pbcButtonList = divs;
	divs[0].innerHTML=pinHotkey[1];
	divs[1].innerHTML=pinHotkey[2];
}
function showPINMenu()//显示PIN操作框页面
{
	
	parent.hiddenPage(3);
	$("wirelessAutoPIN").style.display="block";
	positionPINH=2;
	//showPINCode();
	setTimeout(function(){
		if(top.isOverflowed($("PINTitle")))
		{
			$("PINTitle").style.overflowX = "-webkit-marquee";
			$("PINTitle").style.textOverflow = "clip";
			$("PINTitle").style.webkitMarqueeDirection = "backwards";
			$("PINTitle").style.webkitMarqueeStyle = "scroll";
			$("PINTitle").style.webkitMarqueeSpeed = "fast";
			$("PINTitle").style.webkitMarqueeIncrement = "small";
			$("PINTitle").style.webkitMarqueeRepetition = "infinite";
		}
		else
		{
			$("PINTitle").style.overflowX = "hidden";
			$("PINTitle").style.textOverflow = "ellipsis";
		}
	},1)
	$("PINcode").innerHTML=wirelessAutoConName[3]+setting.getPinCode();
	$("PINButtonFocus").style.left="460px";
	focusType = "PINMenu"
	top.doEleScrForNoOption(pinButtonList, positionPINH, 0);
}
function showPINCode()//用于初始化或刷新重新书写 PIN code
{
	try
	{
	$("PINcode").innerHTML=wirelessAutoConName[3]+setting.refreshPinCode();//后续添加函数
	//top.g_channel.testLog(setting.refreshPinCode());
	}
	catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function showPBCMenu()//显示PBC操作框页面
{
	parent.hiddenPage(3);
	$("wirelessAutoPBC").style.display="block";
	positionPBCH = 1;
	showTime = 120;
	$("PBCTime").innerHTML=showTime+"S"
	$("PBCButtonFocus").style.left="440px";
	focusType = "PBCMenu"
		setTimeout(function(){
		if(top.isOverflowed($("PBCTitle")))
		{
			$("PBCTitle").style.overflowX = "-webkit-marquee";
			$("PBCTitle").style.textOverflow = "clip";
			$("PBCTitle").style.webkitMarqueeDirection = "backwards";
			$("PBCTitle").style.webkitMarqueeStyle = "scroll";
			$("PBCTitle").style.webkitMarqueeSpeed = "fast";
			$("PBCTitle").style.webkitMarqueeIncrement = "small";
			$("PBCTitle").style.webkitMarqueeRepetition = "infinite";
		}
		else
		{
			$("PBCTitle").style.overflowX = "hidden";
			$("PBCTitle").style.textOverflow = "ellipsis";
		}
	},1)
	top.doEleScrForNoOption(pbcButtonList, positionPBCH, 0);
}
function showPBCTime()
{
	$("PBCTime").innerHTML=showTime+"S"
	showTime--;
	if(showTime==0)
	{
		focusType = "showRemind";
		clearTimeout(PBCTimeout);
		PBCTimeout=0;
		showTime=120;
		$("wirelessAutoPBC").style.display="none";
		$("remindNetStatue").style.display="block";
		$("remindNetStatue").innerHTML=remindWord[1];
		setTimeout(function(){
			top.restartTimeout();
			$("remindNetStatue").style.display="none";
				parent.showPage(3);
			focusType = "wirelessAutoMenu";
			},2000)
	}
	else
	{
		PBCTimeout=setTimeout("showPBCTime()",1000);
	}
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
	var lis=$("fourthMenuRight").getElementsByTagName("li");
	for(var i=0;i<2;i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt){
			if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="wirelessAutoMenu")
				{
					positionV= parseInt(this.getAttribute("newAttr"));
					$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	}
	var divs=$("PINbuttonList").getElementsByTagName("div");
	for(var i=0;i<3;i++)
	{
		divs[i].setAttribute("newAttr",i);
		divs[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="PINMenu")
				{
					positionPINH=2-parseInt(this.getAttribute("newAttr"));
					$("PINButtonFocus").style.left=460-positionPINH*200+"px";
					toOK();
				}
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	}
	var divs=$("wirelessAutoPBC").getElementsByTagName("div");
	for(var i=0;i<2;i++)
	{
		divs[i].setAttribute("newAttr",i);
		divs[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="PBCMenu")
				{
					positionPBCH=1-parseInt(this.getAttribute("newAttr"));
					if(positionPBCH==0)
					{
						$("PBCButtonFocus").style.left=440+"px";
					}
					else
					{
						$("PBCButtonFocus").style.left=90+"px";
					}
					toOK();
				}
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	}
}
var netConName          = [top.netOptions[0],top.netOptions[1],top.netOptions[2],top.netOptions[3],top.netOptions[4],top.netOptions[5],top.netOptions[6],top.homePageBackUp[1],top.netOptions[7],top.netOptions[8],top.netOptions[9],top.netOptions[10],top.netOptions[11],top.netOptions[12],top.netOptions[13],top.netOptions[14],top.netOptions[15],top.netOptions[16],top.netOptions[17],top.netOptions[19],top.bt_title];
var auto				= top.others[11];
var netInterConSel      = top.offOn;
var netInterfaceSel     = top.netIntf;
var netAddressType      = [top.manualAuto[1],top.manualAuto[0]];
var netDLNASel          = top.offOn;
var netConTest          = top.netConnDes;
var netPromptCon        = [top.prompts[22],top.prompts[23],top.prompts[24]];
var netPromptImg        = ["images/info-1_2.png","images/info-1_3.png","images/info-1_4.png","images/info-1_5.png","images/info-1_6.png"]
var mainFocus           = ["images/Focus_Frame/Focus-1.png","images/Focus_Frame/Focus-2.png"];
var positionV           = 0;                 //主界面坐标
var presetPositionV     = 0;                 //preset 界面焦点坐标
var FORM_STEP			= 80;				 //弹出框焦点移动的step
var netIntConnection    = 0;                 //保存Internet connection值
var netInterface        = 0;                 //保存Interface值
var netDLNA             = 0;                 //保存DLNA值
var netGuideOn          = 0;
var netAddressTypeVal   = 0;                 //保存获得IP地址类型
var SUB_MENU_START 		= 90;				 //二级级菜单焦点移动起始位置
var SUB_MENU_STEP 		= 70;				 //二级级主菜单焦点移动的step
var netFlixShow         = 1;
var listFormLiList;
var lis;
var setting = top.g_setting;
var focusType="networkList";

var bluetooth              = top.bluetooth;
var factory                = top.g_factory;
var menuLock               = 0;
var hotelEnable            = 0;
var titleWords 			   = top.sysOptions[3];
var psswordWords		   = top.others[2];
var passwordLength         = 0;
var offsetPosition         = 0;
var password               = "";                  
var passIncorrectWords      = top.passError;

var lockFlag               = 1;
var menuList =[
{name:netConName[0],func:function(){showInterConSelMenu()},showFlag:1},
{name:netConName[1],func:function(){showInterfaceSelMenu()},showFlag:1},
{name:netConName[2],func:function(){parent.jumpPage(2,"networkSetting/wirelessSetting.html");},showFlag:1},
{name:netConName[3],func:function(){parent.popWindow(2,"networkSetting/ipSetting.html");},showFlag:1},
{name:netConName[4],func:function(){showNetInfo();},showFlag:1},
{name:netConName[5],func:function(){showConnectTest();},showFlag:1},
{name:netConName[6],func:function(){showDlnaSelMenu();},showFlag:1},
{name:netConName[7],func:function(){parent.jumpPage(2,"networkSetting/guideOn.html");},showFlag:1},
{name:netConName[8],func:function(){top.jumpToOperatePage("nScreenStart.html");},showFlag:1},
{name:netConName[9],func:function(){parent.jumpPage(2,"networkSetting/netflixSetting.html")},showFlag:1},
{name:netConName[10],func:function(){top.jumpToOperatePage("networkSetting/miracast.html");},showFlag:1},
{name:"netConName[20]",func:function(){parent.popWindow(2,"blueTooth.html");},showFlag:0},

]



document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		{
			if(focusType=="connectTest")
			{
				$("conTestContent").innerHTML=netConTest[1];
				setTimeout(function(){
					$("connectTest").style.display="none";
					parent.showPage(1);
					top.restartTimeout();
					focusType="networkList"
					},1000);
			}
			top.systemEventProc(evt);
		}
		break;
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		{
			if(focusType=="connectTest")
			{
			$("conTestContent").innerHTML=netConTest[2];
			setTimeout(function(){
				$("connectTest").style.display="none";
				parent.showPage(1);
				top.restartTimeout();
				focusType="networkList"
				},1000);
			}
			top.systemEventProc(evt);
		}
		break;
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
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt---输入密码会走此逻辑
			if(top.virtualRemoteState == 0)
			{
				if($("passForm").style.display == "block")
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
				}
				else
				{
				}
				
			}
			else
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			break;
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
			console.log("lqt---networkSetting.js---clientX: "+clientX);
			console.log("lqt---networkSetting.js---clientY: "+clientY);
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
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			
			break;
		}
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
		case top.VK_RIGHT:	
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		case top.VK_BACK: //back
		{
			toBack();
			break;
		}
		case top.VK_MENU: //menu
		{
			top.jumpPage();
			break;
		}
		case top.VK_0:
		case top.VK_1:
		case top.VK_2:
		case top.VK_3:
		case top.VK_4:
		case top.VK_5:
		case top.VK_6:
		case top.VK_7:
		case top.VK_8:
		case top.VK_9:
			if((menuLock) && (hotelEnable) && (lockFlag))
			{
				doCheck(evt.which - 48);
				ret = false;
			}
			break;
	    default:
			top.keyDownProcess(evt);
		break;
	}
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		return ret;
	}
	else
	{
		showPromptCont();
		return ret;
	}
}

function $(id)
{
    return document.getElementById(id);
}
function toUp()
{
	if(focusType=="networkList")
	{
		if((menuLock) && (hotelEnable) && (lockFlag))
		{
			return ;
		}
		else
		{
			if(findName(positionV)==findFirstName())
			{
				positionV=findPosition(findLastName());
			}
			else
			{
				positionV--;
			}
			doOffsetMenuList(positionV);
		}
		top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1);
	}
	else if(focusType=="InterConSel")
	{
		presetPositionV--;
		if(presetPositionV<0)
		{
			presetPositionV=1;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP +"px";
		top.doEleScrForNoOption(listFormLiList, presetPositionV, -1);
	}
	else if(focusType=="InterfaceSel")
	{
		presetPositionV--;
		if(presetPositionV<0)
		{
			presetPositionV=1;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP +"px";
		top.doEleScrForNoOption(listFormLiList, presetPositionV, -1);
	}
	else if(focusType=="DLNASel")
	{
		presetPositionV--;
		if(presetPositionV<0)
		{
			presetPositionV=1;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP +"px";
		top.doEleScrForNoOption(listFormLiList, presetPositionV, -1);
	}
	else if(focusType=="GuideOnSel")
	{
		presetPositionV--;
		if(presetPositionV<0)
		{
			presetPositionV=1;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP +"px";
		top.doEleScrForNoOption(listFormLiList, presetPositionV, -1);
	}
}
function toDown()
{
	if(focusType=="networkList")
	{
		if((menuLock) && (hotelEnable) && (lockFlag))
		{
			return ;
		}
		else
		{
			if(findName(positionV)==findLastName())
			{
				positionV=findPosition(findFirstName());
			}
			else
			{
				positionV++;
			}
			doOffsetMenuList(positionV);
		}
		top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 1);
	}
	else if(focusType=="InterConSel")
	{
		presetPositionV++;
		if(presetPositionV>1)
		{
			presetPositionV=0;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP +"px";
		top.doEleScrForNoOption(listFormLiList, presetPositionV, 1);
	}
	else if(focusType=="InterfaceSel")
	{
		presetPositionV++;
		if(presetPositionV>1)
		{
			presetPositionV=0;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP +"px";
		top.doEleScrForNoOption(listFormLiList, presetPositionV, 1);
	}
	else if(focusType=="DLNASel")
	{
		presetPositionV++;
		if(presetPositionV>1)
		{
			presetPositionV=0;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP +"px";
		top.doEleScrForNoOption(listFormLiList, presetPositionV, 1);
	}
	else if(focusType=="GuideOnSel")
	{
		presetPositionV++;
		if(presetPositionV>1)
		{
			presetPositionV=0;
		}
		$("listFormFocus").style.top = presetPositionV*FORM_STEP +"px";
		top.doEleScrForNoOption(listFormLiList, presetPositionV, 1);
	}
}
function toOK()
{
	if(focusType=="networkList")
	{
		if((menuLock) && (hotelEnable) && (lockFlag))
		{
			initPass();
			return;
		}
		findFunction(positionV);
	}
	else if(focusType=="InterConSel")
	{

		netIntConnection=presetPositionV;
		setting.networkEnable=presetPositionV;
		showInterConMenu();
		checkShowMenu();
		showMenuList();
		$("listForm").style.display = "none";
	    $("listFocus").src=mainFocus[0];
		focusType="networkList"
	}
	else if(focusType=="InterfaceSel")
	{
		setting.setInterfaceType(presetPositionV);
	    if(netInterface!=presetPositionV)
		{
			setting.switchNetwork();
			
			if(presetPositionV==1)
			{
				var lastAp=setting.getLastWirelessAp();
				setting.wirelessNetworkConnect(lastAp.ssid,lastAp.cipher,lastAp.encrypt,lastAp.networkname);
			}
			else if(presetPositionV==0)
			{
				setting.wireNetworkDHCP();
			}
		}
		netInterface=presetPositionV;
		showInterfaceMenu();
		checkShowMenu();
		showMenuList();
		$("listForm").style.display = "none";
	    $("listFocus").src=mainFocus[0];
		focusType="networkList"
	}
	else if(focusType=="DLNASel")
	{
		netDLNA=presetPositionV;
		setting.dlnaEnable=netDLNA;
		showDlnaMenu();
		$("listForm").style.display = "none";
	    $("listFocus").src=mainFocus[0];
		focusType="networkList"
	}
	else if(focusType=="GuideOnSel")
	{
		netGuideOn=presetPositionV;
		setting.guideOnSwitch=netGuideOn;
		showGuideOnMenu();
		$("listForm").style.display = "none";
	    $("listFocus").src=mainFocus[0];
		focusType="networkList"
	}
}
function toBack()
{
	if(focusType=="networkList")
	{
		parent.returnPage(1);
	}
	else if(focusType=="InterConSel")
	{
		$("listForm").style.display = "none";
	    $("listFocus").src=mainFocus[0];
		focusType="networkList"
	}
	else if(focusType=="InterfaceSel")
	{
		$("listForm").style.display = "none";
	    $("listFocus").src=mainFocus[0];
		focusType="networkList"
	}
	else if(focusType=="DLNASel")
	{
		$("listForm").style.display = "none";
	    $("listFocus").src=mainFocus[0];
		focusType="networkList"
	}
	else if(focusType=="GuideOnSel")
	{
		$("listForm").style.display = "none";
	    $("listFocus").src=mainFocus[0];
		focusType="networkList"
	}
	else if(focusType=="information")
	{
		$("smallPopWin").style.display="none";
		parent.showPage(1);
		focusType="networkList"
	}
}
var listFirstSpans;
function init()
{
	console.log("cfg_BluetoothSoundbox_support:" + setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0"));
	if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0")=="1")
    {
		if(bluetooth.isSupport() == 1)
		{
			menuList[11].showFlag = 1;
		}
		else
		{
			menuList[11].showFlag = 0;
		}
    }
	
	menuLock = factory.menuLock;
	hotelEnable = factory.hotelEnable;
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		lis=$("sndMenuRight").getElementsByTagName("li");
		var spans=$("sndMenuRight").getElementsByTagName("span");
		spans[0].innerHTML=titleWords;
		lis[0].getElementsByTagName("img")[0].style.display = "block";
		for(var i=1;i<11;i++)
		{
			
			lis[i].style.display = "none";
		}
	}
	else
	{
		lis=$("sndMenuRight").getElementsByTagName("li");
		var spans=$("sndMenuRight").getElementsByTagName("span");
		listFormLiList=$("listForm").getElementsByTagName("li");
		
		//lis[0].getElementsByTagName("img")[0].style.display = "block";
		for(var i=1;i<11;i++)
		{
			
			lis[i].style.display = "block";
		}
		
		for(var i=0;i<11;i++)
		{
			spans[i].innerHTML=netConName[i];
		}
		initVarValue();
		showInterConMenu();
		showInterfaceMenu();
		showDlnaMenu();
		//showGuideOnMenu();
		checkShowMenu();
		showMenuList();
	}
	addMouseListener();
	listFirstSpans = $("sndMenuRight").getElementsByClassName("listFirstProperty");
	top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 0);
}
function initVarValue()
{
	 netIntConnection = setting.networkEnable;//后续添加
 	 netInterface = setting.networkConnectType; //后续添加
	 netDLNA = setting.dlnaEnable;//后续添加
	 netGuideOn = setting.guideOnSwitch;
}
function showInterConMenu()//主页面显示
{
	var divs=lis[0].getElementsByTagName("div");
	divs[0].innerHTML=netInterConSel[netIntConnection];
}
function showInterConSelMenu()//弹出选择列表
{
	var lisp=$("listForm").getElementsByTagName("li");
	presetPositionV=netIntConnection;
	$("listFocus").src=mainFocus[1];
	var topOffset = 80;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,lisp,netInterConSel,2,presetPositionV,0);
	focusType="InterConSel"
}
function showInterfaceMenu()//主页面显示
{
	var divs=lis[1].getElementsByTagName("div");
	divs[0].innerHTML=netInterfaceSel[netInterface];
}
function showInterfaceSelMenu()//弹出选择列表
{
	var lisp=$("listForm").getElementsByTagName("li");
	presetPositionV=netInterface;
	$("listFocus").src=mainFocus[1];
	var topOffset = 150;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,lisp,netInterfaceSel,2,presetPositionV,0);
	focusType="InterfaceSel"
}
function showNetInfo()//显示网络的主要信息
{
	parent.hiddenPage(1);
	$("smallPopWin").style.display="block";
	var spans=$("smallPopWin").getElementsByTagName("span");
	spans[0].innerHTML=netConName[4];
	spans[1].innerHTML=netConName[1];
	spans[2].innerHTML=netConName[11];
	spans[3].innerHTML=netConName[12];
	spans[4].innerHTML=netConName[13];
	spans[5].innerHTML=netConName[14];
	spans[6].innerHTML=netConName[15];
	spans[7].innerHTML=netConName[16];
	spans[8].innerHTML=netConName[17];
	spans[9].innerHTML=netConName[18];
	spans[10].innerHTML=netConName[19];
	netAddressTypeVal = setting.wireNetworkAccess;
	var divs=$("smallPopWin").getElementsByTagName("div");
	divs[0].innerHTML=netInterfaceSel[netInterface];
	divs[1].innerHTML=netAddressType[netAddressTypeVal];
	if(netAddressTypeVal==1)
	{
		divs[2].innerHTML= setting.networkIP;
		divs[3].innerHTML= setting.networkSubnetMask;
		divs[4].innerHTML= setting.networkGateway;
		divs[5].innerHTML= setting.networkPrimaryDNS;
		divs[6].innerHTML= setting.networkPrimaryDNS;
	}
	else
	{
		divs[2].innerHTML= setting.networkIP;
		divs[3].innerHTML= setting.networkSubnetMask;
		divs[4].innerHTML= setting.networkGateway;
		divs[5].innerHTML= setting.networkPrimaryDNS;
		divs[6].innerHTML= setting.networkPrimaryDNS;
	}
	if(netInterface==1)
	{
		$("ssid").style.display="block";
		divs[7].innerHTML = setting.netSSID;
        top.doEleScrForNoOption(divs,7, 0);
	}
	else
	{
		$("ssid").style.display="none";
	}
	divs[8].innerHTML= setting.networkMAC;
	divs[9].innerHTML= setting.getUserId;
	focusType="information";
}
function showConnectTest()//显示测试提示菜单
{
	parent.hiddenPage(1);
	$("connectTest").style.display="block";
	$("conTestContent").innerText=netConTest[0];
	top.stopTimeout();
	setTimeout("setting.connectTest()",500);
	focusType="connectTest";
}
function showDlnaMenu()//在主页面显示DLNA选项
{
	var divs=lis[6].getElementsByTagName("div");
	divs[0].innerHTML=netDLNASel[netDLNA];
}
function showGuideOnMenu()
{
	var divs=lis[7].getElementsByTagName("div");
	divs[0].innerHTML=netDLNASel[netGuideOn];
}
function showDlnaSelMenu()//弹出DLNA选择列表
{
	var lisp=$("listForm").getElementsByTagName("li");
	presetPositionV=netDLNA;
	$("listFocus").src=mainFocus[1];
	var topOffset = 430;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,lisp,netDLNASel,2,presetPositionV,0);
	focusType="DLNASel"
}
function showGuideOnSelMenu()//弹出DLNA选择列表
{
	var lisp=$("listForm").getElementsByTagName("li");
	presetPositionV=netGuideOn;
	$("listFocus").src=mainFocus[1];
	var topOffset = 500;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,lisp,netDLNASel,2,presetPositionV,0);
	focusType="GuideOnSel"
}
function hiddenPromptCont()//隐藏提示语
{
	$("promptWin").style.display="none";
}
var ONE_LINE_TOP            = 35;
var TWO_LINE_TOP            = 12;
var THREE_LINE_TOP          = 18;
var FOUR_LINE_TOP           = 28;
var FIVE_LINE_TOP           = 35;
var SIX_LINE_TOP            = 40;                     
function showPromptImg()
{
	$("promptWin").style.display="block";
	var height = $("promptContent").offsetHeight;
	var img   = $("promptWin").getElementsByTagName("img");
	var div   = $("promptWin").getElementsByTagName("div");
	if(height==40)
	{
		img[0].src=netPromptImg[0];
		$("promptContent").style.top = ONE_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+positionV*70+"px";
	}
	else if(height==80)
	{
		img[0].src=netPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+positionV*70+"px";
	}
	else if(height==120)
	{
		img[0].src=netPromptImg[1];
		$("promptContent").style.top = THREE_LINE_TOP+"px";
		img[0].style.height="160px";
		div[0].style.height="152px";
		$("promptWin").style.top=50+positionV*70+"px";
	}
	else if(height==160)
	{
		img[0].src=netPromptImg[2];
		$("promptContent").style.top = FOUR_LINE_TOP+"px";
		img[0].style.height="220px";
		div[0].style.height="212px";
		$("promptWin").style.top=20+positionV*70+"px";
	}
	else if(height==200)
	{
		img[0].src=netPromptImg[3];
		$("promptContent").style.top = FIVE_LINE_TOP+"px";
		img[0].style.height="280px";
		div[0].style.height="272px";
		$("promptWin").style.top=-10+positionV*70+"px";
	}
	else if(height==240)
	{
		img[0].src=netPromptImg[4];
		$("promptContent").style.top = SIX_LINE_TOP+"px";
		img[0].style.height="340px";
		div[0].style.height="332px";
		$("promptWin").style.top=-30+positionV*70+"px";
	}
	else if(height==0)
	{
		img[0].src=netPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=80+positionV*70+"px";
	}
}
var showPromptContTimer = 0;
function showPromptCont()//显示提示语内容函数
{
	if(focusType=="networkList"&&parent.currentShowMenu==1)
	{
		clearTimeout(showPromptContTimer);
		showPromptContTimer = setTimeout(function(){$("promptWin").style.display="none"},5000);
		var name=findName(positionV);
		if(name==netConName[6])
		{
			$("promptContent").innerHTML=netPromptCon[0];
			showPromptImg();
		}
		else if(name==netConName[8])
		{
			$("promptContent").innerHTML=netPromptCon[1];
			showPromptImg();
		}
		else if(name==netConName[10])
		{
			$("promptContent").innerHTML=netPromptCon[2];
			showPromptImg();
		}
		else
		{
			$("promptWin").style.display="none";
		}
	}
	else
	{
		$("promptWin").style.display="none";
	}
}
function showFocus()//显示主页面的焦点
{
	timeoutInit();
	$("listFocus").style.display="block";
}
function hiddenFocus()//隐藏主页面的焦点
{
	$("listFocus").style.display="none";
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
	for(var i = 0; i < 12; i++)
	{
		lis[i].setAttribute("newAttr",i);
		lis[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(1)//focusType=="networkList")
				{
					if(1)//parent.currentShowMenu==0)
					{
						evt.preventDefault();
						parent.onLoadPage=0;
						parent.$("homeMenu").contentWindow.document.getElementById("menuFocus").src=parent.mentFocusImg[1];
						parent.$("subMenu1").contentWindow.showFocus();
						parent.currentShowMenu=1;
						if((parent.menuLock) && (parent.hotelEnable))
						{
							parent.menuLockFlag = 0;
							return;
						}
					}
					positionV = findPosition(menuList[parseInt(this.getAttribute("newAttr"))].name);
					$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*positionV + "px";
					toOK();
				}
			}
			showPromptCont();
		}
	}
	
	for(var i = 0; i < 3; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType=="InterConSel" || focusType=="InterfaceSel" || focusType=="DLNASel" || focusType=="GuideOnSel")
				{
					presetPositionV = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = presetPositionV*FORM_STEP + "px";
					toOK();
				}
			}
			showPromptCont();
		}
	}
}
function checkShowMenu()
{
	try
	{
		if(netIntConnection==0)
		{
			for(var i=1;i<=7;i++)
			{
				menuList[i].showFlag=0;
			}
		}
		else
		{
			for(var i=1;i<=7;i++)
			{
				menuList[i].showFlag=1;
			}
			if(netInterface==0)
			{
				menuList[2].showFlag=0;
				menuList[3].showFlag=1;
			}
			else
			{
				menuList[2].showFlag=1;
				menuList[3].showFlag=0;
			}
		}
		if(netFlixShow==0)
		{
			menuList[9].showFlag=0;
		}
		else
		{
			menuList[9].showFlag=1;
		}
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function showMenuList()
{
	try
	{
		var showNum = 0;
		for(var i=0;i<menuList.length;i++)
		{
			if(menuList[i].showFlag==1)
			{
				showNum++;
				lis[i].style.display="block";
			}
			else
			{
				lis[i].style.display="none";
			}
		}
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function doOffsetMenuList(postion)
{
	try
	{
	if(postion>=12)
	{
		offsetPosition=postion-11;
		$("menuUl").style.top=-(postion-11)*70+80+"px";
		$("listFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px";
	}
	else
	{
		offsetPosition=0;
		$("menuUl").style.top=80+"px";
		$("listFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px";
	}
	}catch(er)
	{
		top.g_channel.testLog("doOffsetMenuList:"+er);
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
			menuList[i].func();
			break;
		}
	}
}
function findRealPosition(postion)
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
			return i;
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
function findLastName()
{
	for(var i=menuList.length-1;i>=0;i--)
	{
		if(menuList[i].showFlag==1)
		{
			return menuList[i].name;
		}
	}
}
function findFirstName()
{
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			return menuList[i].name;
		}
	}
}
function initPass()
{
	var passFormSpanList = $("passForm").getElementsByTagName("span");
	passFormSpanList[0].innerHTML = psswordWords;
	passFormSpanList[1].innerHTML = psswordWords;
	password = "";
	$("passContent").innerHTML = password + "_";
	$("passRemind").innerHTML = "";
	$("passForm").style.display = "block";
	
	parent.hiddenPage(1);
	top.showDialogPosition($("passForm"),800,300,1920,1080,0,0);
}

function doCheck(which)
{
	/*需要说明的是String.fromCharCode(which)的值总是大写的，因为onkeyup和onkeydown事件不能主动判断键盘的大小写，
	onkeypress可以判断大小写。其中只有onkeyup事件能获取键盘按下去后的结果值，因为此处需用到要清除键盘按下去后的值，
	所以只能用onkeyup事件，考虑到遥控器只有数字键，没有大小写之分，所以够用了*/
	passwordLength = password.length;
	if(passwordLength == 4)//重新输入
	{
		password = "";
		$("passContent").innerHTML = password + "_";
	}
	password = password + which;
	$("passContent").innerHTML = $("passContent").innerHTML.substring(0,passwordLength) + "*" + "_";
	passwordLength++;
	if(passwordLength == 4)
	{
		$("passContent").innerHTML = $("passContent").innerHTML.substring(0,passwordLength);
		 if(password != setting.password &&  password != top.g_superPassword)
		{
			passwordLength = 0;
			$('passRemind').innerHTML = passIncorrectWords;
			password = "";
			$("passContent").innerHTML = password + "_";
		}
		else
		{
			$("passForm").style.display = "none";
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器--lqt
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			menuLock = 0;
			hotelEnable = 0;
			lockFlag = 0;
			init();
			parent.showPage(1);
		}
	}
}

var ipSettingConName      = top.netWireIpOptions;
var ipSetAddressType      = [top.manualAuto[1],top.manualAuto[0]];
var ipSetButton 		  = top.okCancel;
var ipSetRemindWord       = top.netWireConnRemind;
var addressTypeVal        = 0;        //用来保存address type 值
var ipAdress              = [0,0,0,0];//用来保存可显示的ipAdress值
var subnetMask            = [0,0,0,0];//用来保存可显示的subnetMask值
var defaultGateway        = [0,0,0,0];//用来保存可显示的defaultGateway值
var primaryDNS            = [0,0,0,0];//用来保存可显示的primaryDNS值
var secondDNS             = [0,0,0,0];//用来保存可显示的secondDNS值
var inputFlag             = 0;        //用来标记当前是否在输入状态 当移动光标时 inputFlag 置为0 当有数字输入时 置为1
var showMenuFocus         = 0;        //用来记录当前按键应该响应什么操作 0表示在修改地址类型上 1 表示在修改IP地址等上 2 表示在确定或取消
var positionV             = 0;        //用来记录修改焦点的垂直位移
var positionH             = 0;        //用来记录修改焦点的水平位移
var positionAddressV      = 0;
var finishFlag            = 0;        //用来记录按下button时所代表的操作 0 表示取消 1 表示确定
var connecttingFlag       = 0;        //用来标记是否正在连接 1表示正在连接时不响应按键 0表示不再连接状态
var INPUT_V_START           = 222;    //输入框垂直坐标起始位置
var INPUT_V_STEP            = 70;     //输入框垂直坐标位移
var INPUT_H_START           = 280;    //输入框水平坐标起始位置
var INPUT_H_STEP            = 100;    //输入框水平坐标位移
var lis;
var mainFocus              = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
var focusType             = "ipList";
var setting               = top.g_setting;
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_WIRE_CONNECT_SUCCESS://表示网络连接成功
		{
		    $("remindWord").style.display="block";
			$("remindWord").innerHTML=ipSetRemindWord[3];
			showUIList();
			connecttingFlag=0;
			top.restartTimeout();
			break;
		}
		case top.E_NETWORK_CONNECT_TEST_FAIL:
			top.systemEventProc(evt);//测试失败的消息要在本页处理同时要传递到framework中做同步处理
		case top.E_WIRE_CONNECT_FAILURE://表示网络连接失败
		{
			$("remindWord").style.display="block";
			$("remindWord").innerHTML=ipSetRemindWord[4];
			showUIList();
			connecttingFlag=0;
			top.restartTimeout();
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
function keyDownProcess(evt)
{
	
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
	
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt
			if(top.virtualRemoteState == 0)
			{
				if(addressTypeVal==1)
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
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
			console.log("lqt---ipSetting.js---clientX: "+clientX);
			console.log("lqt---ipSetting.js---clientY: "+clientY);
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
			if(connecttingFlag==1)
			{
				return;
			}
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			if(connecttingFlag==1)
			{
				return;
			}
			toDown();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			break;
		}	
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
			break;
		}
		case top.VK_0:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(0);
			break;
		}
		case top.VK_1:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(1);
			break;
		}
		case top.VK_2:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(2);
			break;
		}
		case top.VK_3:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(3);
			break;
		}
		case top.VK_4:
		{
		if(connecttingFlag==1)
			{
				return;
			}
			setValue(4);
			break;
		}
		case top.VK_5:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(5);
			break;
		}
		case top.VK_6:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(6);
			break;
		}
		case top.VK_7:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(7);
			break;
		}
		case top.VK_8:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(8);
			break;
		}
		case top.VK_9:
		{
			if(connecttingFlag==1)
			{
				return;
			}
			setValue(9);
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
	if(focusType=="ipList")
	{
		switch(showMenuFocus)
		{
			case 0:
			{
					showMenuFocus = 2;
					$("buttonFocus").style.display="block";
					$("menuListFocus").style.display="none";
					$("inputFocus").style.display="none";
			}
			break;
			case 1:
			{
				if(positionV==0)
				{
					showMenuFocus = 0;
					$("buttonFocus").style.display="none";
					$("menuListFocus").style.display="block";
					$("inputFocus").style.display="none";
				}
				else
				{
					positionV--;
				}
				top.doEleScrForNoOption(listFirstSpans,showMenuFocus?showMenuFocus+positionV:showMenuFocus, -1);
				$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
				$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
			}
			break;
			case 2:
			{
				if(addressTypeVal==1)//只有当手动输入时才可以上下移动
				{
					showMenuFocus = 1;
					$("buttonFocus").style.display="none";
					$("menuListFocus").style.display="none";
					$("inputFocus").style.display="block";
				}
				else
				{
					showMenuFocus = 0;
					$("buttonFocus").style.display="none";
					$("menuListFocus").style.display="block";
					$("inputFocus").style.display="none";
				}
				top.doEleScrForNoOption(listFirstSpans,showMenuFocus?showMenuFocus+positionV:showMenuFocus, -1);
			}
			break;
			default:
			break;
		}
	}
	else if(focusType=="addressTypeList")
	{
		positionAddressV--;
		if(positionAddressV<0)
		{
			positionAddressV=1;
		}
		$("listFormFocus").style.top = positionAddressV*80 + "px";
		top.doEleScrForNoOption(listFormLiList, positionAddressV, -1);
	}
}
function toDown()
{
	if(focusType=="ipList")
	{
		switch(showMenuFocus)
		{
			case 0:
			{
				if(addressTypeVal==1)	//只有当手动输入时才可以上下移动
				{
					showMenuFocus = 1;
					$("buttonFocus").style.display="none";
					$("menuListFocus").style.display="none";
					$("inputFocus").style.display="block";
					top.doEleScrForNoOption(listFirstSpans,showMenuFocus?showMenuFocus+positionV:showMenuFocus, 1);
				}
				else
				{
					showMenuFocus = 2;
					$("buttonFocus").style.display="block";
					$("menuListFocus").style.display="none";
					$("inputFocus").style.display="none";
				}
			}
			break;
			case 1:
			{
				if(positionV==4)
				{
					showMenuFocus = 2;
					$("buttonFocus").style.display="block";
					$("menuListFocus").style.display="none";
					$("inputFocus").style.display="none";
				}
				else
				{
					positionV++;
					top.doEleScrForNoOption(listFirstSpans,showMenuFocus?showMenuFocus+positionV:showMenuFocus, 1);
				}
				$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
				$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
			}
			break;
			case 2:
			{
				showMenuFocus = 0;
				$("buttonFocus").style.display="none";
				$("menuListFocus").style.display="block";
				$("inputFocus").style.display="none";
			}
			break;
			default:
			break;
		}
	}
	else if(focusType=="addressTypeList")
	{
		positionAddressV++;
		if(positionAddressV>1)
		{
			positionAddressV=0;
		}
		$("listFormFocus").style.top = positionAddressV*80 + "px";
		top.doEleScrForNoOption(listFormLiList, positionAddressV, 1);
	}
}
function toRight()
{
	if(focusType=="ipList")
	{
		switch(showMenuFocus)
		{
			case 0:
			{
				toOK();
			}
			break;
			case 1:
			{
				positionH++;
				inputFlag=0;
				if(positionH>3)
				{
					if(positionV==4)
					{
						positionH=3;
						showMenuFocus = 2;
						$("buttonFocus").style.display="block";
						$("menuListFocus").style.display="none";
						$("inputFocus").style.display="none";
					}
					else
					{
						positionH=0;
						positionV++;
						top.doEleScrForNoOption(listFirstSpans,showMenuFocus?showMenuFocus+positionV:showMenuFocus, 1);
					}
				}
				$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
				$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
			}
			break;
			case 2:
			{
				if(finishFlag==0)
				{
					finishFlag=1;
					$("buttonFocus").style.left="110px";
				}
				else
				{
					finishFlag=0;
					$("buttonFocus").style.left="390px";
				}
			}
			break;
			default:
			break;
		}
	}
	else
	{
		toOK();
	}
}
function toLeft()
{
	if(focusType=="ipList")
	{
		switch(showMenuFocus)
		{
			case 0:
			{
				toBack();
			}
			break;
			case 1:
			{
				positionH--;
				inputFlag=0;
				if(positionH<0)
				{
					if(positionV==0)
					{
						positionH=0;
						showMenuFocus = 0;
						$("buttonFocus").style.display="none";
						$("menuListFocus").style.display="block";
						$("inputFocus").style.display="none";
						top.doEleScrForNoOption(listFirstSpans,showMenuFocus?showMenuFocus+positionV:showMenuFocus, -1);
					}
					else
					{
						positionH=3;
						positionV--;
						top.doEleScrForNoOption(listFirstSpans,showMenuFocus?showMenuFocus+positionV:showMenuFocus, -1);
					}
				}
				$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
				$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
			}
			break;
			case 2:
			{
				if(finishFlag==0)
				{
					finishFlag=1;
					$("buttonFocus").style.left="110px";
				}
				else
				{
					finishFlag=0;
					$("buttonFocus").style.left="390px";
				}
			}
			break;
			default:
			break;
		}
	}
	else
	{
		toBack();
	}
}
function toOK()
{
	if(focusType=="ipList")
	{
		switch(showMenuFocus)
		{
			case 0:
			{
				showAddressTypeSel();
			}
			break;
			case 1:
			{
				toRight();
			}
			break;
			case 2:
			{
				if(finishFlag==1)
				{
					if(connecttingFlag==0)
					{
						if(addressTypeVal==1)
						{
							
							var ip=ipAdress[0]+"."+ipAdress[1]+"."+ipAdress[2]+"."+ipAdress[3];
							var subMask=subnetMask[0]+"."+subnetMask[1]+"."+subnetMask[2]+"."+subnetMask[3];
							var gateway=defaultGateway[0]+"."+defaultGateway[1]+"."+defaultGateway[2]+"."+defaultGateway[3];
							var priDNS=primaryDNS[0]+"."+primaryDNS[1]+"."+primaryDNS[2]+"."+primaryDNS[3];
							var secDNS=secondDNS[0]+"."+secondDNS[1]+"."+secondDNS[2]+"."+secondDNS[3];
							connecttingFlag=1;
							top.clearMyTimeout();
							$("remindWord").style.display="block";
							$("remindWord").innerHTML=ipSetRemindWord[5];
							setting.wireNetworkManualSet(ip,subMask,gateway,priDNS);
						}
						else
						{
							$("remindWord").style.display="block";
							$("remindWord").innerHTML=ipSetRemindWord[5];
							connecttingFlag=1;
							top.clearMyTimeout();
							setTimeout("setting.wireNetworkDHCP()",1);//后续接口需要更改
						}
					}
				}
				else
				{
					toBack();//返回到上一层页面
				}
			}
			break;
			default:
			break;
		}
	}
	else if(focusType=="addressTypeList")
	{
		addressTypeVal=positionAddressV;
		showAddressMenu();
		$("listForm").style.display="none";
		$("menuListFocus").src=mainFocus[0];
		focusType="ipList";
	}
}
function toBack()
{
	if(focusType=="ipList")
	{
		if(showMenuFocus==1)
		{
			switch(positionV)
			{
				case 0://第零行表示IP地址输入行
				{
					var divs=$("ipAddress").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示IP地址的第一个输入点
						{
							ipAdress[0]="";
							divs[0].innerHTML="";
							ipAdress[0]=0;
							divs[0].innerHTML=ipAdress[0];
						}
						break;
						case 1:
						{
							ipAdress[1]="";
							divs[1].innerHTML="";
							ipAdress[1]=0;
							divs[1].innerHTML=ipAdress[1];
						}
						break;
						case 2:
						{
							ipAdress[2]="";
							divs[2].innerHTML="";
							ipAdress[2]=0;
							divs[2].innerHTML=ipAdress[2];
						}
						break;
						case 3:
						{
							ipAdress[3]="";
							divs[3].innerHTML="";
							ipAdress[3]=0;
							divs[3].innerHTML=ipAdress[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				case 1:
				{
					var divs=$("subnetMask").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表subnetMask地址的第一个输入点
						{
							subnetMask[0]="";
							divs[0].innerHTML="";
							subnetMask[0]=0;
							divs[0].innerHTML=subnetMask[0];
						}
						break;
						case 1:
						{
							subnetMask[1]="";
							divs[1].innerHTML="";
							subnetMask[1]=0;
							divs[1].innerHTML=subnetMask[1];
						}
						break;
						case 2:
						{
							subnetMask[2]="";
							divs[2].innerHTML="";
							subnetMask[2]=0;
							divs[2].innerHTML=subnetMask[2];
						}
						break;
						case 3:
						{
							subnetMask[3]="";
							divs[3].innerHTML="";
							subnetMask[3]=0;
							divs[3].innerHTML=subnetMask[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				case 2:
				{	
					var divs=$("defaultGateway").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示defaultGateway地址的第一个输入点
						{
							defaultGateway[0]="";
							divs[0].innerHTML="";
							defaultGateway[0]=0;
							divs[0].innerHTML=defaultGateway[0];
						}
						break;
						case 1:
						{
							defaultGateway[1]="";
							divs[1].innerHTML="";
							defaultGateway[1]=0;
							divs[1].innerHTML=defaultGateway[1];
						}
						break;
						case 2:
						{
							defaultGateway[2]="";
							divs[2].innerHTML="";
							defaultGateway[2]=0;
							divs[2].innerHTML=defaultGateway[2];
						}
						break;
						case 3:
						{
							defaultGateway[3]="";
							divs[3].innerHTML="";
							defaultGateway[3]=0;
							divs[3].innerHTML=defaultGateway[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				case 3:
				{
					var divs=$("primaryDNS").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示primaryDNS地址的第一个输入点
						{
							primaryDNS[0]="";
							divs[0].innerHTML="";
							primaryDNS[0]=0;
							divs[0].innerHTML=primaryDNS[0];
						}
						break;
						case 1:
						{
							primaryDNS[1]="";
							divs[1].innerHTML="";
							primaryDNS[1]=0;
							divs[1].innerHTML=primaryDNS[1];
						}
						break;
						case 2:
						{
							primaryDNS[2]="";
							divs[2].innerHTML="";
							primaryDNS[2]=0;
							divs[2].innerHTML=primaryDNS[2];
						}
						break;
						case 3:
						{
							primaryDNS[3]="";
							divs[3].innerHTML="";
							primaryDNS[3]=0;
							divs[3].innerHTML=primaryDNS[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				case 4:
				{
					var divs=$("secondDNS").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示secondDNS地址的第一个输入点
						{
							secondDNS[0]="";
							divs[0].innerHTML="";
							secondDNS[0]=0;
							divs[0].innerHTML=secondDNS[0];
						}
						break;
						case 1:
						{
							secondDNS[1]="";
							divs[1].innerHTML="";
							secondDNS[1]=0;
							divs[1].innerHTML=secondDNS[1];
						}
						break;
						case 2:
						{
							secondDNS[2]="";
							divs[2].innerHTML="";
							secondDNS[2]=0;
							divs[2].innerHTML=secondDNS[2];
						}
						break;
						case 3:
						{
							secondDNS[3]="";
							divs[3].innerHTML="";
							secondDNS[3]=0;
							divs[3].innerHTML=secondDNS[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				default:
				break;
			}
		}
		else
		{
			parent.returnPopWindow(2);
		}
	}
	else if(focusType=="addressTypeList")
	{
		$("listForm").style.display="none";
		$("menuListFocus").src=mainFocus[0];
		focusType="ipList";
	}
}
var listFormLiList = "";
var menuSpans ;
var listFirstSpans;
function initUI()
{
	lis = $("menuBox").getElementsByTagName("li");
	menuSpans=$("menuBox").getElementsByTagName("span");
	listFirstSpans = $("menuBox").getElementsByClassName("listFirstProperty");
	for(var i=0;i<=6;i++)
	{
		$("span"+i).innerHTML=ipSettingConName[i];
	}
	listFormLiList = $("listForm").getElementsByTagName("li");
	listFormLiList[0].innerHTML=ipSetAddressType[0];
	listFormLiList[1].innerHTML=ipSetAddressType[1];
	var divs=$("buttonList").getElementsByTagName("div");
	divs[0].innerHTML=ipSetButton[0];
	divs[1].innerHTML=ipSetButton[1];
}
function showAutoBg(flag)
{
	if(flag)
	{
		for(var i=2;i<7;i++)
		{
			lis[i].style.color="#ffffff";
		}
	}
	else
	{
		for(var i=2;i<7;i++)
		{
			lis[i].style.color="#aaaaaa";
		}
	}
}
function showUIList()
{
	ipAdress=setting.networkIP.split(".");
	subnetMask=setting.networkSubnetMask.split(".");
	defaultGateway=setting.networkGateway.split(".");
	primaryDNS=setting.networkPrimaryDNS.split(".");
	secondDNS=setting.networkPrimaryDNS.split(".");
	var divs=$("ipAddress").getElementsByTagName("span");
	divs[0].innerHTML=ipAdress[0];
	divs[1].innerHTML=ipAdress[1];
	divs[2].innerHTML=ipAdress[2];
	divs[3].innerHTML=ipAdress[3];
	var divs=$("subnetMask").getElementsByTagName("span");
	divs[0].innerHTML=subnetMask[0];
	divs[1].innerHTML=subnetMask[1];
	divs[2].innerHTML=subnetMask[2];
	divs[3].innerHTML=subnetMask[3];
	var divs=$("defaultGateway").getElementsByTagName("span");
	divs[0].innerHTML=defaultGateway[0];
	divs[1].innerHTML=defaultGateway[1];
	divs[2].innerHTML=defaultGateway[2];
	divs[3].innerHTML=defaultGateway[3];
	var divs=$("primaryDNS").getElementsByTagName("span");
	divs[0].innerHTML=primaryDNS[0];
	divs[1].innerHTML=primaryDNS[1];
	divs[2].innerHTML=primaryDNS[2];
	divs[3].innerHTML=primaryDNS[3];
	var divs=$("secondDNS").getElementsByTagName("span");
	divs[0].innerHTML=secondDNS[0];
	divs[1].innerHTML=secondDNS[1];
	divs[2].innerHTML=secondDNS[2];
	divs[3].innerHTML=secondDNS[3];//预留后续更改
	for(var i=2;i<=6;i++)
	{
		lis[i].style.display="block";
	}
}
function init()
{
	timeoutInit();
	initUI();
	addressTypeVal = setting.wireNetworkAccess;
	showAddressMenu();
	showUIList();
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,showMenuFocus?showMenuFocus:showMenuFocus+positionV, 0);
}
function   jsTrim(str) 
{
	str   =   str.replace(/\s+/g,"");
	return str; 
}
function checkValue(value)//检测IP地址等是否小于255
{
	/*
    if(positionH==0&&(positionV==0||positionV==2||positionV==3||positionV==2))
	{
		if(value>223 || value<=0)
		{
			$("remindWord").style.display="block";
			$("remindWord").innerHTML=ipSetRemindWord[2];
			inputFlag=0;
			return false;
		}
	}
	else
	{*/
		if(value>255)
		{
			$("remindWord").style.display="block";
			$("remindWord").innerHTML=ipSetRemindWord[2];
			inputFlag=0;
			return false;
		}
		else
		{
			$("remindWord").style.display="none";
			return true;
		}
	/*}*/
}
function setValue(value)//将值写入地址框
{
	if(showMenuFocus==1&&focusType=="ipList")//有效的输入地址栏
	{
		if(inputFlag==0)//不在输入状态下进行输入操作
		{
			inputFlag=1;
			switch(positionV)
			{
				case 0://第零行表示IP地址输入行
				{
					var divs=$("ipAddress").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示IP地址的第一个输入点
						{
							ipAdress[0]="";
							divs[0].innerHTML="";
							ipAdress[0]=value;
							if(checkValue(parseInt(ipAdress[0]))==false)
							{
								ipAdress[0]=0;
								inputFlag=0;
							}
							divs[0].innerHTML=ipAdress[0];
						}
						break;
						case 1:
						{
							ipAdress[1]="";
							divs[1].innerHTML="";
							ipAdress[1]=value;
							if(checkValue(parseInt(ipAdress[1]))==false)
							{
								ipAdress[1]=0;
								inputFlag=0;
							}
							divs[1].innerHTML=ipAdress[1];
						}
						break;
						case 2:
						{
							ipAdress[2]="";
							divs[2].innerHTML="";
							ipAdress[2]=value;
							if(checkValue(parseInt(ipAdress[2]))==false)
							{
								ipAdress[2]=0;
								inputFlag=0;
							}
							divs[2].innerHTML=ipAdress[2];
						}
						break;
						case 3:
						{
							ipAdress[3]="";
							divs[3].innerHTML="";
							ipAdress[3]=value;
							if(checkValue(parseInt(ipAdress[3]))==false)
							{
								ipAdress[3]=0;
								inputFlag=0;
							}
							divs[3].innerHTML=ipAdress[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				case 1:
				{
					var divs=$("subnetMask").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表subnetMask地址的第一个输入点
						{
							subnetMask[0]="";
							divs[0].innerHTML="";
							subnetMask[0]=value;
							if(checkValue(parseInt(subnetMask[0]))==false)
							{
								subnetMask[0]=0;
								inputFlag=0;
							}
							divs[0].innerHTML=subnetMask[0];
						}
						break;
						case 1:
						{
							subnetMask[1]="";
							divs[1].innerHTML="";
							subnetMask[1]=value;
							if(checkValue(parseInt(subnetMask[1]))==false)
							{
								subnetMask[1]=0;
								inputFlag=0;
							}
							divs[1].innerHTML=subnetMask[1];
						}
						break;
						case 2:
						{
							subnetMask[2]="";
							divs[2].innerHTML="";
							subnetMask[2]=value;
							if(checkValue(parseInt(subnetMask[2]))==false)
							{
								subnetMask[2]=0;
								inputFlag=0;
							}
							divs[2].innerHTML=subnetMask[2];
						}
						break;
						case 3:
						{
							subnetMask[3]="";
							divs[3].innerHTML="";
							subnetMask[3]=value;
							if(checkValue(parseInt(subnetMask[3]))==false)
							{
								subnetMask[3]=0;
								inputFlag=0;
							}
							divs[3].innerHTML=subnetMask[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				case 2:
				{	
					var divs=$("defaultGateway").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示defaultGateway地址的第一个输入点
						{
							defaultGateway[0]="";
							divs[0].innerHTML="";
							defaultGateway[0]=value;
							if(checkValue(parseInt(defaultGateway[0]))==false)
							{
								defaultGateway[0]=0;
								inputFlag=0;
							}
							divs[0].innerHTML=defaultGateway[0];
						}
						break;
						case 1:
						{
							defaultGateway[1]="";
							divs[1].innerHTML="";
							defaultGateway[1]=value;
							if(checkValue(parseInt(defaultGateway[1]))==false)
							{
								defaultGateway[1]=0;
								inputFlag=0;
							}
							divs[1].innerHTML=defaultGateway[1];
						}
						break;
						case 2:
						{
							defaultGateway[2]="";
							divs[2].innerHTML="";
							defaultGateway[2]=value;
							if(checkValue(parseInt(defaultGateway[2]))==false)
							{
								defaultGateway[2]=0;
								inputFlag=0;
							}
							divs[2].innerHTML=defaultGateway[2];
						}
						break;
						case 3:
						{
							defaultGateway[3]="";
							divs[3].innerHTML="";
							defaultGateway[3]=value;
							if(checkValue(parseInt(defaultGateway[3]))==false)
							{
								defaultGateway[3]=0;
								inputFlag=0;
							}
							divs[3].innerHTML=defaultGateway[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				case 3:
				{
					var divs=$("primaryDNS").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示primaryDNS地址的第一个输入点
						{
							primaryDNS[0]="";
							divs[0].innerHTML="";
							primaryDNS[0]=value;
							if(checkValue(parseInt(primaryDNS[0]))==false)
							{
								primaryDNS[0]=0;
								inputFlag=0;
							}
							divs[0].innerHTML=primaryDNS[0];
						}
						break;
						case 1:
						{
							primaryDNS[1]="";
							divs[1].innerHTML="";
							primaryDNS[1]=value;
							if(checkValue(parseInt(primaryDNS[1]))==false)
							{
								primaryDNS[1]=0;
								inputFlag=0;
							}
							divs[1].innerHTML=primaryDNS[1];
						}
						break;
						case 2:
						{
							primaryDNS[2]="";
							divs[2].innerHTML="";
							primaryDNS[2]=value;
							if(checkValue(parseInt(primaryDNS[2]))==false)
							{
								primaryDNS[2]=0;
								inputFlag=0;
							}
							divs[2].innerHTML=primaryDNS[2];
						}
						break;
						case 3:
						{
							primaryDNS[3]="";
							divs[3].innerHTML="";
							primaryDNS[3]=value;
							if(checkValue(parseInt(primaryDNS[3]))==false)
							{
								primaryDNS[3]=0;
								inputFlag=0;
							}
							divs[3].innerHTML=primaryDNS[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				case 4:
				{
					var divs=$("secondDNS").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示secondDNS地址的第一个输入点
						{
							secondDNS[0]="";
							divs[0].innerHTML="";
							secondDNS[0]=value;
							if(checkValue(parseInt(secondDNS[0]))==false)
							{
								secondDNS[0]=0;
								inputFlag=0;
							}
							divs[0].innerHTML=secondDNS[0];
						}
						break;
						case 1:
						{
							secondDNS[1]="";
							divs[1].innerHTML="";
							secondDNS[1]=value;
							if(checkValue(parseInt(secondDNS[1]))==false)
							{
								secondDNS[1]=0;
								inputFlag=0;
							}
							divs[1].innerHTML=secondDNS[1];
						}
						break;
						case 2:
						{
							secondDNS[2]="";
							divs[2].innerHTML="";
							secondDNS[2]=value;
							if(checkValue(parseInt(secondDNS[2]))==false)
							{
								secondDNS[2]=0;
								inputFlag=0;
							}
							divs[2].innerHTML=secondDNS[2];
						}
						break;
						case 3:
						{
							secondDNS[3]="";
							divs[3].innerHTML="";
							secondDNS[3]=value;
							if(checkValue(parseInt(secondDNS[3]))==false)
							{
								secondDNS[3]=0;
								inputFlag=0;
							}
							divs[3].innerHTML=secondDNS[3];
						}
						break;
						default:
						break;
					}
				}
				break;
				default:
				break;
			}
		}
		else if(inputFlag==1)//在输入状态
		{
		    switch(positionV)
			{
				case 0://第零行表示IP地址输入行
				{
					var divs=$("ipAddress").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示IP地址的第一个输入点
						{
							if(checkValue(parseInt(parseInt(ipAdress[0])*10+value))==false)
							{
								return;
							}
							ipAdress[0]=parseInt(ipAdress[0])*10+value;
							divs[0].innerHTML=ipAdress[0];
							if(parseInt(ipAdress[0])>100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 1:
						{
							if(checkValue(parseInt(parseInt(ipAdress[1])*10+value))==false)
							{
								return;
							}
							ipAdress[1]=parseInt(ipAdress[1])*10+value;
							divs[1].innerHTML=ipAdress[1];
							if(parseInt(ipAdress[1])>100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 2:
						{
							if(checkValue(parseInt(parseInt(ipAdress[2])*10+value))==false)
							{
								return;
							}
							ipAdress[2]=parseInt(ipAdress[2])*10+value;
							divs[2].innerHTML=ipAdress[2];
							if(parseInt(ipAdress[2])>100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 3:
						{
							if(checkValue(parseInt(parseInt(ipAdress[3])*10+value))==false)
							{
								return;
							}
							ipAdress[3]=parseInt(ipAdress[3])*10+value;
							divs[3].innerHTML=ipAdress[3];
							if(parseInt(ipAdress[3])>100)
							{
								positionH=0;
								positionV++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						default:
						break;
					}
				}
				break;
				case 1:
				{
					var divs=$("subnetMask").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示IP地址的第一个输入点
						{
							if(checkValue(parseInt(parseInt(subnetMask[0])*10+value))==false)
							{
								return;
							}
							subnetMask[0]=parseInt(subnetMask[0])*10+value;
							divs[0].innerHTML=subnetMask[0];
							if(parseInt(subnetMask[0])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 1:
						{
							if(checkValue(parseInt(parseInt(subnetMask[1])*10+value))==false)
							{
								return;
							}
							subnetMask[1]=parseInt(subnetMask[1])*10+value;
							divs[1].innerHTML=subnetMask[1];
							if(parseInt(subnetMask[1])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 2:
						{
							if(checkValue(parseInt(parseInt(subnetMask[2])*10+value))==false)
							{
								return;
							}
							subnetMask[2]=parseInt(subnetMask[2])*10+value;
							divs[2].innerHTML=subnetMask[2];
							if(parseInt(subnetMask[2])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 3:
						{
							if(checkValue(parseInt(parseInt(subnetMask[3])*10+value))==false)
							{
								return;
							}
							subnetMask[3]=parseInt(subnetMask[3])*10+value;
							divs[3].innerHTML=subnetMask[3];
							if(parseInt(subnetMask[3])>=100)
							{
								positionH=0;
								positionV++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						default:
						break;
					}
				}
				break;
				case 2:
				{
					var divs=$("defaultGateway").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示IP地址的第一个输入点
						{
							if(checkValue(parseInt(parseInt(defaultGateway[0])*10+value))==false)
							{
								return;
							}
							defaultGateway[0]=parseInt(defaultGateway[0])*10+value;
							divs[0].innerHTML=defaultGateway[0];
							if(parseInt(defaultGateway[0])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 1:
						{
							if(checkValue(parseInt(parseInt(defaultGateway[1])*10+value))==false)
							{
								return;
							}
							defaultGateway[1]=parseInt(defaultGateway[1])*10+value;
							divs[1].innerHTML=defaultGateway[1];
							if(parseInt(defaultGateway[1])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 2:
						{
							if(checkValue(parseInt(parseInt(defaultGateway[2])*10+value))==false)
							{
								return;
							}
							defaultGateway[2]=parseInt(defaultGateway[2])*10+value;
							divs[2].innerHTML=defaultGateway[2];
							if(parseInt(defaultGateway[2])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 3:
						{
							if(checkValue(parseInt(parseInt(defaultGateway[3])*10+value))==false)
							{
								return;
							}
							defaultGateway[3]=parseInt(defaultGateway[3])*10+value;
							divs[3].innerHTML=defaultGateway[3];
							if(parseInt(defaultGateway[3])>=100)
							{
								positionH=0;
								positionV++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						default:
						break;
					}	
				}
				break;
				case 3:
				{
					var divs=$("primaryDNS").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示IP地址的第一个输入点
						{
							if(checkValue(parseInt(parseInt(primaryDNS[0])*10+value))==false)
							{
								return;
							}
							primaryDNS[0]=parseInt(primaryDNS[0])*10+value;
							divs[0].innerHTML=primaryDNS[0];
							if(parseInt(primaryDNS[0])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 1:
						{
							if(checkValue(parseInt(parseInt(primaryDNS[1])*10+value))==false)
							{
								return;
							}
							primaryDNS[1]=parseInt(primaryDNS[1])*10+value;
							divs[1].innerHTML=primaryDNS[1];
							if(parseInt(primaryDNS[1])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 2:
						{
							if(checkValue(parseInt(parseInt(primaryDNS[2])*10+value))==false)
							{
								return;
							}
							primaryDNS[2]=parseInt(primaryDNS[2])*10+value;
							divs[2].innerHTML=primaryDNS[2];
							if(parseInt(primaryDNS[2])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 3:
						{
							if(checkValue(parseInt(parseInt(primaryDNS[3])*10+value))==false)
							{
								return;
							}
							primaryDNS[3]=parseInt(primaryDNS[3])*10+value;
							divs[3].innerHTML=primaryDNS[3];
							if(parseInt(primaryDNS[3])>=100)
							{
								positionH=0;
								positionV++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						default:
						break;
					}
				}
				break;
				case 4:
				{
					var divs=$("secondDNS").getElementsByTagName("span");
					switch(positionH)
					{
						case 0://第零列表示secondDNS地址的第一个输入点
						{
							if(checkValue(parseInt(parseInt(secondDNS[0])*10+value))==false)
							{
								return;
							}
							secondDNS[0]=parseInt(secondDNS[0])*10+value;
							divs[0].innerHTML=secondDNS[0];
							if(parseInt(secondDNS[0])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 1:
						{
							if(checkValue(parseInt(parseInt(secondDNS[1])*10+value))==false)
							{
								return;
							}
							secondDNS[1]=parseInt(secondDNS[1])*10+value;
							divs[1].innerHTML=secondDNS[1];
							if(parseInt(secondDNS[1])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 2:
						{
							if(checkValue(parseInt(parseInt(secondDNS[2])*10+value))==false)
							{
								return;
							}
							secondDNS[2]=parseInt(secondDNS[2])*10+value;
							divs[2].innerHTML=secondDNS[2];
							if(parseInt(secondDNS[2])>=100)
							{
								positionH++;
								$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
								$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
								inputFlag=0;
							}
						}
						break;
						case 3:
						{
							if(checkValue(parseInt(parseInt(secondDNS[3])*10+value))==false)
							{
								return;
							}
							secondDNS[3]=parseInt(secondDNS[3])*10+value;
							divs[3].innerHTML=secondDNS[3];
							if(parseInt(secondDNS[3])>=100)
							{
								showMenuFocus = 2;
								$("buttonFocus").style.display="block";
								$("menuListFocus").style.display="none";
								$("inputFocus").style.display="none";
								inputFlag=0;
							}
						}
						break;
						default:
						break;
					}
				}
				break;
				default:
				break;
			}
		}
	}
}
function showAddressMenu()//主界面显示地址类型
{
	var divs=lis[1].getElementsByTagName("div");
	divs[0].innerHTML=ipSetAddressType[addressTypeVal];
	showAutoBg(addressTypeVal);
}
function showAddressTypeSel()//显示地址类型选择列表
{
	positionAddressV=addressTypeVal;
	$("menuListFocus").src=mainFocus[1];
	
	var topOffset = 284;
	var leftOffset = 1333;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,ipSetAddressType,2,positionAddressV,0);
	focusType="addressTypeList";
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
	};
	lis[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="ipList")
			{
				showMenuFocus = 0;
				$("buttonFocus").style.display="none";
				$("menuListFocus").style.display="block";
				$("inputFocus").style.display="none";
				toOK();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	};
	var divs=$("buttonList").getElementsByTagName("div");
	divs[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="ipList")
			{
				showMenuFocus = 2;
				$("buttonFocus").style.display="block";
				$("menuListFocus").style.display="none";
				$("inputFocus").style.display="none";
				finishFlag=1;
				$("buttonFocus").style.left="110px";
				toOK();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	};
	divs[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="ipList")
			{
				showMenuFocus = 2;
				$("buttonFocus").style.display="block";
				$("menuListFocus").style.display="none";
				$("inputFocus").style.display="none";
				finishFlag=0;
				$("buttonFocus").style.left="390px";
				toOK();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	};
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="addressTypeList")
				{
					positionAddressV = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = positionAddressV*80 + "px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	var ipAddressSpans = $("ipAddress").getElementsByTagName("div");
	var subnetMaskSpans = $("subnetMask").getElementsByTagName("div");
	var defaultGatewaySpans = $("defaultGateway").getElementsByTagName("div");
	var primaryDNSSpans = $("primaryDNS").getElementsByTagName("div");
	var secondDNSSpans = $("secondDNS").getElementsByTagName("div");

	for(var j= 0;j<4;j++)
	{
		ipAddressSpans[j].setAttribute("newAttr",j);
		ipAddressSpans[j].onmousedown = function(evt){
				if(evt.button == 0){//left key
				top.timeoutFuc.osdTimeoutEndFuc();
					if(focusType=="ipList")
					{
						if(addressTypeVal==1)
						{
							inputFlag=0;
							showMenuFocus = 1;
							positionH = parseInt(this.getAttribute("newAttr"));
							positionV = 0;
							$("buttonFocus").style.display="none";
							$("menuListFocus").style.display="none";
							$("inputFocus").style.display="block";
							$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
							$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
						}
			
					}
					top.timeoutFuc.osdTimeoutStartFuc();
				}
		};
	}
	for(var j= 0;j<4;j++)
	{
		subnetMaskSpans[j].setAttribute("newAttr",j);
		subnetMaskSpans[j].onmousedown = function(evt){
				if(evt.button == 0){//left key
				top.timeoutFuc.osdTimeoutEndFuc();
					if(focusType=="ipList")
					{
						if(addressTypeVal==1)
						{
							inputFlag=0;
							showMenuFocus = 1;
							positionH = parseInt(this.getAttribute("newAttr"));
							positionV = 1;
							$("buttonFocus").style.display="none";
							$("menuListFocus").style.display="none";
							$("inputFocus").style.display="block";
							$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
							$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
						}
			
					}
					top.timeoutFuc.osdTimeoutStartFuc();
				}
		};
	}
	for(var j= 0;j<4;j++)
	{
		defaultGatewaySpans[j].setAttribute("newAttr",j);
		defaultGatewaySpans[j].onmousedown = function(evt){
				if(evt.button == 0){//left key
				top.timeoutFuc.osdTimeoutEndFuc();
					if(focusType=="ipList")
					{
						if(addressTypeVal==1)
						{
							inputFlag=0;
							showMenuFocus = 1;
							positionH = parseInt(this.getAttribute("newAttr"));
							positionV = 2;
							$("buttonFocus").style.display="none";
							$("menuListFocus").style.display="none";
							$("inputFocus").style.display="block";
							$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
							$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
						}
			
					}
					top.timeoutFuc.osdTimeoutStartFuc();
				}
		};
	}
	for(var j= 0;j<4;j++)
	{
		primaryDNSSpans[j].setAttribute("newAttr",j);
		primaryDNSSpans[j].onmousedown = function(evt){
				if(evt.button == 0){//left key
				top.timeoutFuc.osdTimeoutEndFuc();
					if(focusType=="ipList")
					{
						if(addressTypeVal==1)
						{
							inputFlag=0;
							showMenuFocus = 1;
							positionH = parseInt(this.getAttribute("newAttr"));
							positionV = 3;
							$("buttonFocus").style.display="none";
							$("menuListFocus").style.display="none";
							$("inputFocus").style.display="block";
							$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
							$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
						}
			
					}
					top.timeoutFuc.osdTimeoutStartFuc();
				}
		};
	}
	for(var j= 0;j<4;j++)
	{
		secondDNSSpans[j].setAttribute("newAttr",j);
		secondDNSSpans[j].onmousedown = function(evt){
				if(evt.button == 0){//left key
				top.timeoutFuc.osdTimeoutEndFuc();
					if(focusType=="ipList")
					{
						if(addressTypeVal==1)
						{
							inputFlag=0;
							showMenuFocus = 1;
							positionH = parseInt(this.getAttribute("newAttr"));
							positionV = 4;
							$("buttonFocus").style.display="none";
							$("menuListFocus").style.display="none";
							$("inputFocus").style.display="block";
							$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
							$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
						}
			
					}
					top.timeoutFuc.osdTimeoutStartFuc();
				}
		};
	}
	
}
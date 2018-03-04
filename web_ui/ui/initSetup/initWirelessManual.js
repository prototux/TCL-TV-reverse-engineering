var wirelessListName          = [top.netOptions[16],top.others[13],top.okCancel[0],top.okCancel[1],top.others[2],top.initialTitle[1],top.initialOptions[1],top.others[35]];
var initHelp                  = top.initialHotkeys;
var wirelessListRemind        = [top.netSsidError,top.netConnRemind[0]];
var wirelessListSecurity      = top.netWlessSecu3;
var selectImg                 = ["../images/icon-Select_1.png","../images/icon-Return.png"];
var positionSsidV             = 0;//SSID输入界面焦点的坐标
var positionSsidH             = 1;//表示button的焦点位置
var securityType              = 0;//保存加密类型
var ssid                      = "";//保存SSID
var password                  = "";//保存密码
var passwordShow              = "";//用来显示*
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号
var lis;
var MENU_START 			      = 51;//菜单焦点移动起始位置
var MENU_STEP 			      = 100;//主菜单焦点移动的step
var securityType              = 0;
var focusType                 = "wirelessMaunalList"
var setting = top.g_setting;
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_DATABASE_FILE_DAMAGE:
		{
			top.systemEventProc(evt);
		}
		break;
		default:
			break;
	}
}
document.onkeydown = keyproc;
function keyproc(e)
{
	var ret = true;
	var keycode = e.which;
	switch (keycode)
	{
		case top.VK_POWER://power
			top.keyDownProcess(e);
			break;
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
			toOk();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
		}
		break;
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;  
		}
		case top.VK_RIGHT:
		{
			toRight();
			ret = false;
			break;
		}
		case top.VK_RED:
			top.jumpPage();
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
function toDown()//按下键
{
	
	if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveDown();
	}
	else if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				positionSsidV=1;
				$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			}
			break;
			case 1:
			{
				positionSsidV=2;
				$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			}
			break;
			case 2:
			{
				positionSsidV=3;
				$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
			}
			break;
			case 3:
			{
				positionSsidV=0;
				$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
				$("dialogButtonFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
			}
			break;
			default:
			break;
		}
		showFontColor();
	}
}
function toUp()//按上键
{
	if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveUp();
	}
	else if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				positionSsidV=3;
				$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
			}
			break;
			case 1:
			{
				positionSsidV=0;
				$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			}
			break;
			case 2:
			{
				positionSsidV=1;
				$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			}
			break;
			case 3:
			{
				positionSsidV=2;
				$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
				$("dialogButtonFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
			}
			break;
			default:
			break;
		}
		showFontColor();
	}
}
function showFontColor()
{
	switch(positionSsidV)
		{
			case 0:
			{
				$("SSIDInput").style.color="#FFFFFF";
				$("SecurityMode").style.color="#b0b0b0";
				$("Password").style.color="#b0b0b0";
				$("SSIDButtonList").style.color="#b0b0b0";
				
			}
			break;
			case 1:
			{
               $("SSIDInput").style.color="#b0b0b0";
				$("SecurityMode").style.color="#FFFFFF";
				$("Password").style.color="#b0b0b0";
				$("SSIDButtonList").style.color="#b0b0b0";
			}
			break;
			case 2:
			{
				$("SSIDInput").style.color="#b0b0b0";
				$("SecurityMode").style.color="#b0b0b0";
				$("Password").style.color="#FFFFFF";
				$("SSIDButtonList").style.color="#b0b0b0";
			}
			break;
			case 3:
			{
				$("SSIDInput").style.color="#b0b0b0";
				$("SecurityMode").style.color="#b0b0b0";
				$("Password").style.color="#b0b0b0";
				$("SSIDButtonList").style.color="#FFFFFF";
			}
			break;
			default:
			break;
		}
}
function toOk()//按OK键
{
	
	if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				try
				{
					top.mouseCallBack.funcOk=toOk;
					top.mouseCallBack.funcBack=toBack;
				}catch(er)
				{
					top.g_channel.testLog("manual:"+er)
				}
				top.showKeyBoard();
				$("selctImg").src=selectImg[1];
						$("select").getElementsByTagName("span")[0].innerHTML=top.others[34];
				focusType = "SSIDEdit"
			}
			break;
			case 1:
			break;
			case 2:
			{
				try
				{
					top.mouseCallBack.funcOk=toOk;
					top.mouseCallBack.funcBack=toBack;
				}catch(er)
				{
					top.g_channel.testLog("manual:"+er)
				}
				top.showKeyBoard();
				$("selctImg").src=selectImg[1];
				$("select").getElementsByTagName("span")[0].innerHTML=top.others[34];
				focusType = "passwordEdit"
			}
			break;
			case 3:
			{
				if(positionSsidH==0)
				{
					document.location.href="initWirelessType.html"//设置成功
				}
				else
				{
					if(ssid.length>0)//以后用检测函数替代
					{
						top.initSSID = ssid;
						if(checkPassword()==1)//密码位数大于等于最小数时连接网络否则提示密码错误
						{
							if(securityType==0)
							{
								top.g_setting.wirelessNetworkConnect(top.initSSID,"NONE",securityType,"");
							}
							else if(securityType==1)
							{
								setting.wirelessNetworkConnect(top.initSSID,"WEP",securityType,password);
							}
							else if(securityType==2 || securityType == 3)
							{
								setting.wirelessNetworkConnect(top.initSSID,"TKIP",2,password);
							}
							else if(securityType==4 || securityType == 5)
							{
								setting.wirelessNetworkConnect(top.initSSID,"CCMP",3,password);
							}
							else
							{
								setting.wirelessNetworkConnect(top.initSSID,"TKIP AES",4,password);
							}
							document.location.href="initNetConnectPrompt.html?03.1"//设置成功
							top.g_channel.testLog("top.initSSID="+top.initSSID+"&nbsp;&nbsp;securityType="+securityType+"&nbsp;&nbsp;password="+password);
						}
					}
					else
					{
						$("SSIDRemind").style.display="block";
						$("SSIDRemind").innerHTML=wirelessListRemind[0];
					}
					
				}
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "SSIDEdit" )
	{
		var key=top.toOkGetChar();
		if(key=="back")
		{
			if(ssid.length>0)
			{
				ssid=ssid.substring(0,ssid.length-1);
				$("SSIDInputContent").innerHTML=top.replaceT(ssid);
			}
		}
		else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
		{
			return;
		}
		else
		{
			if(ssid.length<32)
			{
				ssid=ssid+key;
				$("SSIDInputContent").innerHTML=top.replaceT(ssid);
			}
		}
	}
	else if(focusType == "passwordEdit")
	{
		var key=top.toOkGetChar();
		if(key=="back")
		{
			if(passwordTimeout!=0)
			{
				clearTimeout(passwordTimeout);
				if(passwordShow.length<32&&passwordShow.length>=0)
				{
					passwordShow=passwordShow+"*";
				}
			}
			if(password.length>0)
			{
				if(password.length<32)
				{
					passwordShow=passwordShow.substring(0,passwordShow.length-1)
				}
				password=password.substring(0,password.length-1);
				$("passwordInputContent").innerHTML=passwordShow;
			}
		}
		else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
		{
			return;
		}
		else
		{
			if(passwordTimeout!=0)
			{
				clearTimeout(passwordTimeout);
				if(passwordShow.length<32&&passwordShow.length>=0)
				{
					passwordShow=passwordShow+"*";
				}
			}
			password=password+key;
			$("passwordInputContent").innerHTML=passwordShow+top.replaceT(key);
			showPasswordTimeout();
		}
	}
}
function toLeft()
{
	if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				toBack();
			}
			break;
			case 1:
			{
				securityType--;
				if(securityType<0)
				{
					securityType=6;
				}
				else if(securityType==4)
				{
					securityType=1;
				}
				$("SecurityModeContent").innerHTML=wirelessListSecurity[securityType];
			}
			break;
			case 2:
			{
				toBack();
			}
			break;
			case 3:
			{
				if(positionSsidH==0)
				{
					positionSsidH=1;
					$("dialogButtonFocus").style.left=650+"px";
				}
				else
				{
					positionSsidH=0;
					$("dialogButtonFocus").style.left=350+"px";
				}
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "SSIDEdit"|| focusType == "passwordEdit")
	{
		top.moveLeft();
	}
}
function toRight()
{
	if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				toOk();
			}
			break;
			case 1:
			{
				securityType++;
				if(securityType>6)
				{
					securityType=0;
				}
				else if(securityType==2)
				{
					securityType=5;
				}
				$("SecurityModeContent").innerHTML=wirelessListSecurity[securityType];
			}
			break;
			case 2:
			{
				toOk();
			}
			break;
			case 3:
			{
				if(positionSsidH==0)
				{
					positionSsidH=1;
					$("dialogButtonFocus").style.left=650+"px";
				}
				else
				{
					positionSsidH=0;
					$("dialogButtonFocus").style.left=350+"px";
				}
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveRight();
	}
}
function toBack()//返回键
{
    if(focusType == "wirelessMaunalList")
	{
		document.location.href="initWirelessType.html"//设置成功
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "wirelessMaunalList";
			$("selctImg").src=selectImg[0];
			$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
		}
	}
}
var SSIDButtonListDivList;
function init()
{
	try
	{
		SSIDButtonListDivList = $("SSIDButtonList").getElementsByTagName("div");
		$("SSIDInputTitle").innerHTML=wirelessListName[0];
		$("initTitle").innerHTML=wirelessListName[5];
		$("subTitleTag").innerHTML=wirelessListName[6]; 
		$("SecurityModeTitle").innerHTML=wirelessListName[7]; 
		$("passwordInputTitle").innerHTML=wirelessListName[4];
		SSIDButtonListDivList[0].innerHTML=wirelessListName[3];
		SSIDButtonListDivList[1].innerHTML=wirelessListName[2];
		$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
		$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
		$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
		$("SecurityModeContent").innerHTML=wirelessListSecurity[securityType];
		addMouseListener();
	}catch(er)
	{
		top.g_channel.testLog("manual："+er)
	}
}
function uninit()
{
	top.hiddenKeyBoard();
}
function showPasswordTimeout()
{
	passwordTimeout=setTimeout("showPassword()",500);
	passwordTimeout=0;
}
function showPassword()
{
	if(passwordShow.length<32&&passwordShow.length>=0)
	{
		passwordShow=passwordShow+"*";
	}
	$("passwordInputContent").innerHTML=passwordShow; 
}
function checkPassword()//检测密码
{
	if(securityType==0)
	{
		return 1;
	}
	else if(securityType==1)
	{
		if(password.length<5)
		{
			$("SSIDRemind").style.display="block";
			$("SSIDRemind").innerHTML=wirelessListRemind[1];
			return 0;
		}
	}
	else
	{
		if(password.length<8)
		{
			$("SSIDRemind").style.display="block";
			$("SSIDRemind").innerHTML=wirelessListRemind[1];
			return 0;
		}
	}
	return 1;
}

function addMouseListener()
{
   document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			toBack();
		}
	}
	$("SSIDInputContent").onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=0;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
			toOk();
		}
	}
	$("SecurityModeContent").onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=1;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
		}
	}
	var securityImgList = $("SecurityMode").getElementsByTagName("img");
	securityImgList[0].onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=1;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
			toLeft();
		}
	}
	securityImgList[1].onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=1;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
			toRight();
		}
	}
	$("passwordInputContent").onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=2;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
			toOk();
		}
	}
	var buttonList = $("SSIDButtonList").getElementsByTagName("div");
	buttonList[0].onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=3;
			positionSsidH=0;
			$("dialogButtonFocus").style.left=350+"px";
			$("dialogButtonFocus").style.display = "block";
			$("SSIDInputFocus").style.display = "none";
			showFontColor();
			toOk();
		}
	}
	buttonList[1].onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=3;
			positionSsidH=1;
			$("dialogButtonFocus").style.left=650+"px";
			$("dialogButtonFocus").style.display = "block";
			$("SSIDInputFocus").style.display = "none";
			showFontColor();
			toOk();
		}
	}
	$("back").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessMaunalList")
			{
				toLeft();
			}
		}
	}
	$("next").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessMaunalList")
			{
				toRight();
			}
		}
	}
	$("select").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessMaunalList")
			{
				toDown();
			}
		}
	}
	
}

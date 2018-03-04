var wirelessListName          = [top.netOptions[18],top.others[13],top.others[14],top.okCancel[1],top.others[2],top.initialTitle[1],top.initialOptions[1]];
var initHelp                  = top.initialHotkeys;
var wirelessListRemind        = [top.netSsidError,top.netConnRemind[0]];
var wirelessListSecurity      = top.netWlessSecu;
var passwordCharacter         = [[["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"],[".","0","1","2","3","4","5","6","7","8","9"," "]],[["~","`","!","@","#","$","%","^","&amp;","*","(",")","?"],["-","+","=","{","}","[","]","\\","|",";",":","\"","'"],[".",",","_","&lt;",">","\/","www.",".com",".cn",".net",".org"," "]]];//密码字符集
var capitalLetter             = [["A","B","C","D","E","F","G","H","I","J","K","L","M"],["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]];//大写字母集
var minuscules                = [["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"]];//小写字母集
var positionSsidV             = 0;//SSID输入界面焦点的坐标
var positionSsidH             = 0;//表示button的焦点位置
var passwordMenuV             = 0;//密码编辑主界面垂直坐标
var passwordMenuH             = 0;//密码编辑主界面水平坐标表示是否去连接网络
var passwordListV             = 0;//表示密码键盘焦点停留在第几行
var passwordListH             = 0;//表示第几列
var lettersFlag               = 0;//标记是字母还是特殊字符 0：表示字母 1：表示特殊字符
var securityType              = top.initSecurityMode;//保存加密类型
var ssid                      = "";//保存SSID
var password                  = "";//保存密码
var passwordShow              = "";//用来显示*
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号表示
var capitalFlag               = 0;//用来标记字符是大写还是小写 0 表示小写 1表示大写
var lis;
var MENU_START 			      = 130;//菜单焦点移动起始位置
var MENU_STEP 			      = 70;//主菜单焦点移动的step
var focusType                 = "passwordMenu"
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
 	if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("passwordInputFocus").style.display="none";
			$("passwordButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("passwordButtonFocus").style.display="none";
			$("passwordInputFocus").style.display="block";
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveDown();
	}
}
function toUp()//按上键
{
   if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("passwordInputFocus").style.display="none";
			$("passwordButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("passwordButtonFocus").style.display="none";
			$("passwordInputFocus").style.display="block";
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveUp();
	}
}
function toOk()//按OK键
{
	if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
		top.mouseCallBack.funcOk=toOk;
		   top.mouseCallBack.funcBack=toBack;
			top.showKeyBoard();
			focusType = "passwordEdit"
		}
		else
		{ 
			if(passwordMenuH==1)
			{
				if(checkPassword()==1)//密码位数大于等于最小数时连接网络否则提示密码错误
				{
					if(securityType==1)
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
					top.g_channel.testLog("top.initSSID="+top.initSSID+"&nbsp;&nbsp;securityType="+securityType+"&nbsp;&nbsp;password="+password);
					document.location.href="initNetConnectPrompt.html?03.1"//设置成功
					$("wirelessInputPassword").style.display="none";
					passwordShow="";
					password="";
					$("passwordInputContent").innerHTML=passwordShow;
					$("passwordRemind").style.display="none";
				}
			}
			else
			{
				document.location.href="initWirelessSecurity.html"//设置成功
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

function showPasswordMenu()//密码框初始化页面
{
	$("wirelessInputPassword").style.display="block";
	passwordMenuV = 0;//密码编辑主界面垂直坐标
	passwordMenuH = 0;//密码编辑主界面水平坐标表示是否去连
	$("passwordButtonFocus").style.display="none";
	$("passwordButtonFocus").style.left=650+"px";
	$("passwordInputFocus").style.display="block";
	$("passwordTitle").innerHTML=top.initSSID;
	focusType = "passwordMenu";
}
function toLeft()
{

	if(focusType == "passwordEdit")
	{
		top.moveLeft();
	}
    else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("passwordButtonFocus").style.left=650+"px";
			}
			else
			{
				passwordMenuH=1;
				$("passwordButtonFocus").style.left=350+"px";
			}
		}
		else
		{
			document.location.href="initWirelessSecurity.html"//设置成功
		}
	}
}
function toRight()
{
	if(focusType == "passwordEdit")
	{
		top.moveRight();
	}
    else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("passwordButtonFocus").style.left=650+"px";
			}
			else
			{
				passwordMenuH=1;
				$("passwordButtonFocus").style.left=350+"px";
			}
		}
		else
		{
			if(checkPassword()==1)//密码位数大于等于最小数时连接网络否则提示密码错误
			{
				if(securityType==1)
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
				$("wirelessInputPassword").style.display="none";
				passwordShow="";
				password="";
				$("passwordInputContent").innerHTML=passwordShow;
				$("passwordRemind").style.display="none";
			}
		}
	}
}
function toBack()//返回键
{
    if(focusType == "passwordMenu")
	{
		document.location.href="initWirelessSecurity.html"//设置成功
	}
	else if(focusType == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "passwordMenu";
		}
	}
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
	if(securityType==1)
	{
		if(password.length<5)
		{
			$("passwordRemind").style.display="block";
			$("passwordRemind").innerHTML=wirelessListRemind[1];
			return 0;
		}
	}
	else
	{
		if(password.length<8)
		{
			$("passwordRemind").style.display="block";
			$("passwordRemind").innerHTML=wirelessListRemind[1];
			return 0;
		}
	}
	return 1;
}
var passwordButtonListDivList;
function init()
{
	passwordButtonListDivList=$("passwordButtonList").getElementsByTagName("div");
	$("initTitle").innerHTML=wirelessListName[5];
	$("subTitleTag").innerHTML=wirelessListName[6];  
	$("passwordInputTitle").innerHTML=wirelessListName[4];
	passwordButtonListDivList[0].innerHTML=wirelessListName[2];
	passwordButtonListDivList[1].innerHTML=wirelessListName[3];
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
	showPasswordMenu();
	addMouseListener();
}
function uninit()
{
	top.hiddenKeyBoard();
}

function addMouseListener()
{
	$("passwordInputContent").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "passwordMenu")
			{
				passwordMenuV = 0;
				$("passwordButtonFocus").style.display="none";
				$("passwordInputFocus").style.display="block";
				toOK();
			}
		}
	}
	
	for(var i = 0; i < 2; i++)
	{
		passwordButtonListDivList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "passwordMenu")
				{
					passwordMenuV = 1;
					passwordMenuH = i;
					if(passwordMenuH == 0)
					{
						$("passwordButtonFocus").style.left=650+"px";
					}
					else
					{
						$("passwordButtonFocus").style.left=350+"px";
					}
					$("passwordInputFocus").style.display="none";
					$("passwordButtonFocus").style.display="block";
					toOK();
				}
			}
		}
	}
	$("passwordButtonFocus").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "passwordMenu"){
				toOK();
			}
		}
	}
}
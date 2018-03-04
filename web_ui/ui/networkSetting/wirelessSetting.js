var wirelessListName          = [top.netOptions[2],top.others[12],top.manualAuto[0],top.manualAuto[1],top.netOptions[2] + ">" +  top.manualAuto[0],
								top.netOptions[18],top.others[13],top.others[14],top.okCancel[1],top.others[2]];
var wirelessListRemind        = [top.netSsidError,top.passError];
var wirelessListSecurity      = top.netWlessSecu3;
var passwordCharacter         = [[["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"],[".","0","1","2","3","4","5","6","7","8","9"," "]],[["~","`","!","@","#","$","%","^","&amp;","*","(",")","?"],["-","+","=","{","}","[","]","\\","|",";",":","\"","'"],[".",",","_","&lt;",">","\/","www.",".com",".cn",".net",".org"," "]]];//密码字符集
var capitalLetter             = [["A","B","C","D","E","F","G","H","I","J","K","L","M"],["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]];//大写字母集
var minuscules                = [["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"]];//小写字母集
var loadingImg                = ["../images/Loading-01.png","../images/Loading-02.png","../images/Loading-03.png","../images/Loading-04.png","../images/Loading-05.png","../images/Loading-06.png","../images/Loading-07.png","../images/Loading-08.png"];
var positionV                 = 0;//主界面焦点的位置坐标
var positionSsidV             = 0;//SSID输入界面焦点的坐标
var positionSsidH             = 0;//表示button的焦点位置
var passwordMenuV             = 0;//密码编辑主界面垂直坐标
var passwordMenuH             = 0;//密码编辑主界面水平坐标表示是否去连接网络
var passwordListV             = 0;//表示密码键盘焦点停留在第几行
var passwordListH             = 0;//表示第几列
var lettersFlag               = 0;//标记是字母还是特殊字符 0：表示字母 1：表示特殊字符
var securityType              = 0;//保存加密类型
var ssid                      = "";//保存SSID
var password                  = "";//保存密码
var passwordShow              = "";//用来显示*
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号表示
var capitalFlag               = 0;//用来标记字符是大写还是小写 0 表示小写 1表示大写
var lis;
var MENU_START 			      = 130;//菜单焦点移动起始位置
var MENU_STEP 			      = 70;//主菜单焦点移动的step
var loadingImgNum             = 0;
var connectFlag               = 0; 
var loadingTimer              = 0;
var passwordRemind            = top.netConnRemind;//提示语
var focusType                 = "wirelessListMenu"
var setting = top.g_setting;


var pressKeyFlag              =0; //0: key has not been pressed, 1: key has been pressed
var char_table           = [['0'," ",".",'-','*','&','+','@','#'],
	['1'],
	['2','a','b','c','A','B','C'],
	['3','d','e','f','D','E','F'],
	['4','g','h','i','G','H','I'],
	['5','j','k','l','J','K','L'],
	['6','m','n','o','M','N','O'],
	['7','p','q','r','s','P','Q','R','S'],
	['8','t','u','v','T','U','V'],
	['9','w','x','y','z','W','X','Y','Z'],
];//用来编辑频道名时的字符库

var alphabet = [' ','!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',
	':',';','<','=','>','?','@',
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	'[','\\',']','^','_','`',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	'{','|','}','~'];
var keyCount           = 0;//按键连续按下的次数
var timerID            = 0;//time out 在500ms没有再次按下相同键时被清零
var SSIDTimeout           = 0;//用来表示输入SSID超时500ms变为*号表示
var oldKeyCode         = 0;//上一次的keycode 与本次进行对比用

document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_WIRELESS_CONNECT_SUCCESS://表示无线网络连接成功
		{
			if(focusType == "loading" && connectFlag ==1)
			{
				clearInterval(loadingTimer);
				loadingTimer = 0;
				top.restartTimeout();
				$("remindWord").innerHTML = passwordRemind[2];
				$("loadingImg").style.display="none";
				setTimeout(function(){
						$("loading").style.display = "none";
						$("remindWord").innerHTML = "";
				        $("loadingImg").style.display="block";
						$("menuList").style.display = "block";
						$("thdListFocus").style.display="block";
						connectFlag=0;
						focusType = "wirelessListMenu";
					},2000);
			}
			break;
		}
		case top.E_WIRELESS_CONNECT_FAILURE://表示无线连接失败
		{
			if(focusType == "loading" && connectFlag ==1)
			{
				clearInterval(loadingTimer);
				loadingTimer = 0;
				top.restartTimeout();
				$("remindWord").innerHTML = passwordRemind[3];
				$("loadingImg").style.display="none";
				setTimeout(function(){
						$("loading").style.display = "none";
						$("remindWord").innerHTML = "";
				        $("loadingImg").style.display="block";
						$("menuList").style.display = "block";
						$("thdListFocus").style.display="block";
						connectFlag=0;
						focusType = "wirelessListMenu";
					},2000);

			}
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
function showSSIDTimeout()
{
	SSIDTimeout=setTimeout("showSSID()",500);
	SSIDTimeout=0;
}
function showSSID()
{
	if(ssid.length<32&&ssid.length>=0)
	{
		$("SSIDInputContent").innerHTML=top.replaceT(ssid);
	}
	$("passwordInputContent").innerHTML=ssid;
}
function checkInput(keycode)//修改频道名的函数
{
	//第一次的时候
	clearTimeout(timerID);
	timerID=0;
	if (pressKeyFlag==0)
	{
		pressKeyFlag++;
		var inputChar = ' ';
		if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=126))
		{
			keyCount = 0;
			inputChar = alphabet[keycode-32];
		}
		else
		{
			var keyTableLine = keycode - 48;
			if (keyCount>=char_table[keyTableLine].length)
			{
				keyCount = 0;
			}
			inputChar = char_table[keyTableLine][keyCount];
		}
		if(SSIDTimeout!=0)
		{
			clearTimeout(SSIDTimeout);
		}
		ssid=ssid+inputChar;
		$("SSIDInputContent").innerHTML=top.replaceT(ssid);
		showSSIDTimeout();
		timerID =  setTimeout("setChar()",400);
	}
	else//其他时候
	{
		if (oldKeyCode == keycode)
		{
			var inputChar = ' ';
			if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=122))
			{
				keyCount = 0;
				inputChar = alphabet[keycode-32];
			}
			else
			{
				keyCount++;
				var keyTableLine = keycode - 48;
				if (keyCount>=char_table[keyTableLine].length)
				{
					keyCount = 0;
				}
				inputChar = char_table[keyTableLine][keyCount];
			}
			if(SSIDTimeout!=0)
			{
				clearTimeout(SSIDTimeout);
			}
			password = password.substring(0,password.length-1);
			password=password+inputChar;
			$("SSIDInputContent").innerHTML=top.replaceT(password);
			showSSIDTimeout();
			timerID =  setTimeout("setChar()",400);

		}
		else
		{
			keyCount = 0;
			var inputChar = ' ';
			if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=122))
			{
				inputChar = alphabet[keycode-32];
			}
			else
			{
				var keyTableLine = keycode - 48;
				inputChar = char_table[keyTableLine][keyCount];
			}
			if(SSIDTimeout!=0)
			{
				clearTimeout(SSIDTimeout);
			}
			password=password+inputChar;
			$("SSIDInputContent").innerHTML=top.replaceT(password);
			showSSIDTimeout();
			timerID =  setTimeout("setChar()",400);
		}
	}

	oldKeyCode = keycode;
}

function setChar()
{
	keyCount = 0;
	timerID = 0;
	pressKeyFlag = 0;
}

function keyDownProcess(evt)
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
		case 32:
		case 33:
		case 34:
		case 35:
		case 36:
		//case 37:
		//case 38:
		//case 39:
		//case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:
		case 58:
		case 59:
		case 60:
		case 61:
		case 62:
		case 63:
		case 64:
		case 65:
		case 66:
		case 67:
		case 68:
		case 69:
		case 70:
		case 71:
		case 72:
		case 73:
		case 74:
		case 75:
		case 76:
		case 77:
		case 78:
		case 79:
		case 80:
		case 81:
		case 82:
		case 83:
		case 84:
		case 85:
		case 86:
		case 87:
		case 88:
		case 89:
		case 90:
		case 91:
		case 92:
		case 93:
		case 94:
		case 95:
		case 96:
		case 97:
		case 98:
		case 99:
		case 100:
		case 101:
		case 102:
		case 103:
		case 104:
		case 105:
		case 106:
		case 107:
		case 108:
		case 109:
		case 110:
		case 111:
		case 112:
		case 113:
		case 114:
		case 115:
		case 116:
		case 117:
		case 118:
		case 119:
		case 121:
		case 122:
		case 123:
		case 124:
		case 125:
		case 126:
		if(focusType == "inputSSID"&&passwordMenuV==0)
		{
			checkInput(keycode);
		}
		break;
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
function toDown()//按下键
{
	if(focusType == "wirelessListMenu")
	{
		positionV++;
		if(positionV>2)
		{
			positionV=0;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				positionSsidV++;
				$("SSIDInputFocus").style.display="none";
				$("popListFocus").style.display="block";
			}
			break;
			case 1:
			{
				positionSsidV++;
				$("popListFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
			}
			break;
			case 2:
			{
				positionSsidV=0;
				$("dialogButtonFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "passwordMenu")
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
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveDown();
	}
}
function toUp()//按上键
{
	if(focusType == "wirelessListMenu")
	{
		positionV--;
		if(positionV<0)
		{
			positionV=2;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				positionSsidV=2;
				$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
			}
			break;
			case 1:
			{
				positionSsidV=0;
				$("popListFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
			}
			break;
			case 2:
			{
				positionSsidV=1;
				$("dialogButtonFocus").style.display="none";
				$("popListFocus").style.display="block";
			}
			break;
			default:
			break;
		}
	}
    else if(focusType == "passwordMenu")
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
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveUp();
	}
}
function toOk()//按OK键
{
	if(focusType == "wirelessListMenu")
	{
		switch(positionV)
		{
			case 0:
			{
				parent.jumpPage(3,"networkSetting/wirelessSetting/wirelessScan.html");
				break;
			}
			case 1:
			{
				showInputSSID();
				break;
			}
			case 2:
			{
				parent.jumpPage(3,"networkSetting/wirelessSetting/wirelessAuto.html");
				break;
			}
		}
	}
	else if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				top.mouseCallBack.funcOk=toOk;
		        top.mouseCallBack.funcBack=toBack;
				top.showKeyBoard();
				focusType = "SSIDEdit"
			}
			break;
			case 2:
			{
				if(positionSsidH==0)
				{
					parent.showPage(2);
					$("wirelessInputSSID").style.display="none";
					$("SSIDRemind").style.display="none";
					focusType = "wirelessListMenu";
				}
				else
				{
					if(securityType==0)
					{
						if(ssid.length>0)//以后用检测函数替代
						{
							parent.showPage(2);
							$("wirelessInputSSID").style.display="none";
							setting.wirelessNetworkConnect(ssid,"NONE",securityType,password);
							$("loading").style.display="block";
							$("menuList").style.display ="none";
							$("thdListFocus").style.display="none";
							loadingTimer=setInterval('loading(passwordRemind[1])',300);
							connectFlag=1;
						}
						else
						{
							$("SSIDRemind").style.display="block";
							$("SSIDRemind").innerHTML=wirelessListRemind[0];
						}
					}
					else
					{
						if(ssid.length>0)//以后用检测函数替代
						{
							showPasswordMenu();//弹出密码框
						}
						else
						{
							$("SSIDRemind").style.display="block";
							$("SSIDRemind").innerHTML=wirelessListRemind[0];
						}
					}
				}
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "SSIDEdit")
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
		else if(typeof(key)=="undefined" || key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
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
	else if(focusType == "passwordMenu")
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
						setting.wirelessNetworkConnect(ssid,"WEP",securityType,password);
					}
					else if(securityType==2 || securityType == 3)
					{
						setting.wirelessNetworkConnect(ssid,"TKIP",2,password);
					}
					else if(securityType==4 || securityType == 5)
					{
						setting.wirelessNetworkConnect(ssid,"CCMP",3,password);
					}
					else
					{
						setting.wirelessNetworkConnect(ssid,"TKIP AES",4,password);
					}
					$("loading").style.display="block";
					$("menuList").style.display ="none";
					$("thdListFocus").style.display="none";
					loadingTimer=setInterval('loading(passwordRemind[1])',300);
					connectFlag=1;
					$("wirelessInputPassword").style.display="none";
					passwordShow="";
					password="";
					$("passwordInputContent").innerHTML=passwordShow;
					$("passwordRemind").style.display="none";
					parent.showPage(2);
					focusType = "wirelessListMenu"
				}
			}
			else
			{
				$("wirelessInputSSID").style.display="block";
				$("wirelessInputPassword").style.display="none";
				$("passwordRemind").style.display="none";
				passwordShow="";
				password="";
				$("passwordInputContent").innerHTML=passwordShow;
				focusType = "inputSSID"
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
		else if(typeof(key)=="undefined" || key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
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
function showInputSSID()//初始化SSID主页面
{
	parent.hiddenPage(2);
	$("wirelessInputSSID").style.display="block";
	$("SSIDInputContent").innerHTML="";
	ssid="";
	positionSsidV = 0;//SSID输入界面焦点的坐标
    positionSsidH = 0;//表示button的焦点位置
	securityType = 0;
	$("popListSndPro").innerHTML=wirelessListSecurity[securityType];
	$("popListFocus").style.display="none";
	$("dialogButtonFocus").style.left=440+"px";
	$("dialogButtonFocus").style.display="none";
	$("SSIDInputFocus").style.display="block";
	focusType = "inputSSID";
}
function showPasswordMenu()//密码框初始化页面
{
	$("wirelessInputSSID").style.display="none";
	$("wirelessInputPassword").style.display="block";
	passwordMenuV = 0;//密码编辑主界面垂直坐标
	passwordMenuH = 0;//密码编辑主界面水平坐标表示是否去连
	$("passwordButtonFocus").style.display="none";
	$("passwordButtonFocus").style.left=440+"px";
	$("passwordInputFocus").style.display="block";
	$("passwordTitle").innerHTML=ssid;
	focusType = "passwordMenu";
}
function toLeft()
{
	if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
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
				$("popListSndPro").innerHTML=wirelessListSecurity[securityType];
			}
			break;
			case 2:
			{
				if(positionSsidH==0)
				{
					positionSsidH=1;
					$("dialogButtonFocus").style.left=170+"px";
				}
				else
				{
					positionSsidH=0;
					$("dialogButtonFocus").style.left=440+"px";
				}
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
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
				$("passwordButtonFocus").style.left=440+"px";
			}
			else
			{
				passwordMenuH=1;
				$("passwordButtonFocus").style.left=170+"px";
			}
		}
	}
	else
	{
		toBack();
	}
	
}
function toRight()
{
	if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
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
				$("popListSndPro").innerHTML=wirelessListSecurity[securityType];
			}
			break;
			case 2:
			{
				if(positionSsidH==0)
				{
					positionSsidH=1;
					$("dialogButtonFocus").style.left=170+"px";
				}
				else
				{
					positionSsidH=0;
					$("dialogButtonFocus").style.left=440+"px";
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
    else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("passwordButtonFocus").style.left=440+"px";
			}
			else
			{
				passwordMenuH=1;
				$("passwordButtonFocus").style.left=170+"px";
			}
		}
	}
	else
	{
		toOk();
	}
}
function toBack()//返回键
{
	if(focusType == "wirelessListMenu")
	{
		parent.returnPage(2);
	}
	else if(focusType == "inputSSID")
	{
		$("wirelessInputSSID").style.display="none";
		$("SSIDRemind").style.display="none";
		ssid="";
		passwordShow="";
		password="";
		$("SSIDInputContent").innerHTML="";
		parent.showPage(2);
		focusType = "wirelessListMenu"
	}
	else if(focusType == "SSIDEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "inputSSID"
		}
	}
	else if(focusType == "passwordMenu")
	{
		$("wirelessInputSSID").style.display="block";
		$("wirelessInputPassword").style.display="none";
		$("passwordRemind").style.display="none";
		passwordShow="";
		password="";
		$("passwordInputContent").innerHTML=passwordShow;
		focusType = "inputSSID"
	}
	else if(focusType == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "passwordMenu"
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
function init()
{
	if(top.g_nextHtmlPage == "wirelessScan.html")
	{
		positionV = 0;
		$("thdListFocus").style.display="block";
		$("thdMenuRight").style.display = "none";
		top.g_nextHtmlPage = "";
	}
	else
	{
		timeoutInit();
	}
	lis = $("thdMenuRight").getElementsByTagName("li");
	var spans=$("thdMenuRight").getElementsByTagName("span");
	for(var i=0;i<=3;i++)
	{
		spans[i].innerHTML=wirelessListName[i];
	}
	$("SSIDTitle").innerHTML=wirelessListName[4];
	$("SSIDInputTitle").innerHTML=wirelessListName[5];
	$("popListFirPro").innerHTML=wirelessListName[6];
	var divs=$("SSIDButtonList").getElementsByTagName("div");
	divs[0].innerHTML=wirelessListName[7];
	divs[1].innerHTML=wirelessListName[8];
	$("passwordInputTitle").innerHTML=wirelessListName[9];
	var divs=$("passwordButtonList").getElementsByTagName("div");
	divs[0].innerHTML=wirelessListName[7];
	divs[1].innerHTML=wirelessListName[8];
	addMouseListener();
}
function uninit()
{
	top.hiddenKeyBoard();
}
function loading(remind)
{
	focusType = "loading";
	top.stopTimeout();
	$("remindWord").innerHTML = remind;
	top.g_channel.testLog("remind="+remind);
	$("loadingImg").src=loadingImg[loadingImgNum];
	loadingImgNum++;
	if(loadingImgNum>=8)
	{
		loadingImgNum=0;
	}
	top.g_channel.testLog("loadingImgNum="+loadingImgNum);
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
	for(var i = 0; i < 3; i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt){
			if(evt.button == 0){//left key
				evt.preventDefault();
			    top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="wirelessListMenu")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOk();
				}
				top.g_channel.testLog("............addMouseListener  onmousedown................");
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	}
	$("SSIDInputContent").onmousedown = function(evt){
			if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="inputSSID" )
				{
					positionSsidV=0;
					$("popListFocus").style.display="none";
					$("dialogButtonFocus").style.display="none";
					$("SSIDInputFocus").style.display="block";
					toOk();
				}
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	$("popList").onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				if(positionSsidV!=1)
				{
					positionSsidV=1;
					$("popListFocus").style.display="block";
					$("dialogButtonFocus").style.display="none";
					$("SSIDInputFocus").style.display="none";
					toOk();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("popListFocus").onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				if(positionSsidV==1)
				{
					toRight();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	var buttonDiv=$("SSIDButtonList").getElementsByTagName("div");
	buttonDiv[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				positionSsidH=1;
				positionSsidV=2;
				$("popListFocus").style.display="none";
					$("dialogButtonFocus").style.display="block";
					$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.left=170+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	buttonDiv[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				positionSsidH=0;
				positionSsidV=2;
				$("popListFocus").style.display="none";
					$("dialogButtonFocus").style.display="block";
					$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.left=440+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	$("passwordInputContent").onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="passwordMenu" )
			{
				passwordMenuV=0;
				$("passwordInputFocus").style.display="block";
				$("passwordButtonFocus").style.display="none";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	var buttonDiv=$("passwordButtonList").getElementsByTagName("div");
	buttonDiv[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="passwordMenu" )
			{
				passwordMenuH=1;
				passwordMenuV=1;
				$("passwordInputFocus").style.display="none";
				$("passwordButtonFocus").style.display="block";
				$("passwordButtonFocus").style.left=170+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	buttonDiv[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
		top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="passwordMenu" )
			{
				passwordMenuH=0;
				passwordMenuV=1;
				$("passwordInputFocus").style.display="none";
				$("passwordButtonFocus").style.display="block";
				$("passwordButtonFocus").style.left=440+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}
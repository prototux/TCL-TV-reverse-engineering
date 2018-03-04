var wirelessConName           = [top.netOptions[16],top.others[13],top.others[22],top.others[2],top.okCancel[0],top.okCancel[1],top.initialTitle[1],top.initialOptions[1]];
var initHelp                  = top.initialHotkeys;
var newtworkWirelessEncrypt   = top.netWlessSecu2;
var passwordCharacter         = [[["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"],[".","0","1","2","3","4","5","6","7","8","9"," "]],[["~","`","!","@","#","$","%","^","&amp;","*","(",")","?"],["-","+","=","{","}","[","]","\\","|",";",":","\"","'"],[".",",","_","&lt;",">","\/","www.",".com",".cn",".net",".org"," "]]];//密码字符集

var capitalLetter             = [["A","B","C","D","E","F","G","H","I","J","K","L","M"],["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]];//大写字母集
var minuscules                = [["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"]];//小写字母集
var passwordRemind            = [top.netConnRemind[0],top.netConnRemind[1],top.netConnRemind[2],top.netConnRemind[3]]//提示语
var signalStrength            = ["../images/Icon-WiFi-0.png","../images/Icon-WiFi-1.png","../images/Icon-WiFi-2.png","../images/Icon-WiFi-3.png","../images/Icon-WiFi-4.png"];//保存信号强度图片
var selectImg                 = ["../images/icon-Select_1.png","../images/icon-Return.png"];
var passwordMenuV             = 0;//密码编辑主界面垂直坐标
var passwordMenuH             = 0;//密码编辑主界面水平坐标表示是否去连接网络
var passwordListV             = 0;//表示密码键盘焦点停留在第几行
var passwordListH             = 0;//表示第几列
var lettersFlag               = 0;//标记是字母还是特殊字符 0：表示字母 1：表示特殊字符
var positionV                 = 0;//焦点坐标
var lis;
var wirelessListSize          = 5;//一页中能显示的最大无线网络个数
var wirelessListPageIndex     = 1;//无线网络列表的页序号
var wirelessList;                 //保存无线网路列表
var nowWifiInfo;                  //当前wifi信息
var wirelessListPageCount     = 0;//保存wifi列表一共有多少页
var password                  = ""; //存储密码
var passwordShow              = ""; //用来显示*
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号表示
var connectTimeout            = 0;//用来表示连接超时，当不为0时不进行任何操作
var capitalFlag               = 0;//用来标记字符是大写还是小写 0 表示小写 1表示大写
var sumWifi                   = 0;//保存当前网络链表长度
var MENU_START 			      = 80;//菜单焦点移动起始位置
var MENU_STEP 			      = 100;//主菜单焦点移动的step
var SCROLL_START              = 100;
var focusType = "wirelessList"
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
	if(focusType == "wirelessList" && sumWifi>0)
	{
		positionV++;
		top.g_channel.testLog("sumWifi="+sumWifi+"positionV"+positionV);
		if(positionV>4 || positionV>=sumWifi)
		{
			positionV=0;
			if(wirelessListPageIndex<wirelessListPageCount)
			{
				wirelessListPageIndex++;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((400*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			else
			{
				wirelessListPageIndex=1;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((400*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
		}
		top.g_channel.testLog("sumWifi="+sumWifi+"positionV"+positionV+"MENU_START+positionV*MENU_STEP"+(MENU_START+positionV*MENU_STEP));
		$("thdListFocusList").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("scanInputFocus").style.display="none";
			$("dialogButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("dialogButtonFocus").style.display="none";
			$("scanInputFocus").style.display="block";
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveDown();
	}
}
function toUp()//按上键
{
	if(focusType == "wirelessList" && sumWifi>0)
	{
		positionV--;
		if(positionV<0)
		{
			if(wirelessListPageIndex>1)
			{
				wirelessListPageIndex--;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((400*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			else
			{
				wirelessListPageIndex=wirelessListPageCount;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((400*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			positionV=sumWifi-1;
		}
		$("thdListFocusList").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("scanInputFocus").style.display="none";
			$("dialogButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("dialogButtonFocus").style.display="none";
			$("scanInputFocus").style.display="block";
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveUp();
	}
}
function toLeft()
{
	if(focusType == "wirelessList")
	{
		toBack();
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("dialogButtonFocus").style.left=650+"px";
			}
			else
			{
				passwordMenuH=1;
				$("dialogButtonFocus").style.left=350+"px";
			}
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveLeft();
	}
}
function toRight()
{
	if(focusType == "wirelessList")
	{
		toOK();
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("dialogButtonFocus").style.left=650+"px";
			}
			else
			{
				passwordMenuH=1;
				$("dialogButtonFocus").style.left=350+"px";
			}
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveRight();
	}
}
function toBack()
{
	if(focusType == "wirelessList")
	{
		document.location.href="initWirelessType.html";
	}
	else if(focusType == "passwordMenu")
	{
		$("wirelessInputPassword").style.display="none";
		$("menuBox").style.display="block";
		passwordShow="";
		password="";
		$("scanInputContent").innerHTML=passwordShow;
		$("selctImg").src=selectImg[0];
		$("next").style.display = "block";
		$("back").style.display = "block";
		$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
		focusType = "wirelessList"
	}
	else if(focusType == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "passwordMenu"
		}
	}
}
function toOK()
{
	if(focusType == "wirelessList")
	{
		if(sumWifi==0)
		{
			document.location.href="initChannelInstallEntry.html";
		}
		else
		{
			if(wirelessList[positionV].encrypt==0)
			{
				setting.wirelessNetworkConnect(wirelessList[positionV].ssid,wirelessList[positionV].cipher,wirelessList[positionV].encrypt,0);
				top.initSSID= wirelessList[positionV].ssid;
				document.location.href="initNetConnectPrompt.html?02.0"//设置成功
			}
			else
			{
				$("wirelessInputPassword").style.display="block";
				$("menuBox").style.display = "none";
				$("next").style.display = "none";
				$("scanTitle").innerHTML=wirelessList[positionV].ssid;
				$("selctImg").src=selectImg[1];
				$("back").style.display = "none";
				$("select").getElementsByTagName("span")[0].innerHTML=top.others[34];
				focusType = "passwordMenu";
			}
		}
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
		top.mouseCallBack.funcOk=toOK;
		   top.mouseCallBack.funcBack=toBack;
			top.showKeyBoard();
			focusType = "passwordEdit";
		}
		else
		{ 
			if(passwordMenuH==1)
			{
				if(checkPassword()==1)//密码位数大于等于最小数时连接网络否则提示密码错误
				{
					setting.wirelessNetworkConnect(wirelessList[positionV].ssid,wirelessList[positionV].cipher,wirelessList[positionV].encrypt,password);
					top.initSSID= wirelessList[positionV].ssid;
					document.location.href="initNetConnectPrompt.html?02.1"//设置成功
				}
			}
			else
			{
				$("wirelessInputPassword").style.display="none";
				$("menuBox").style.display="block";
				passwordShow="";
				password="";
				$("scanInputContent").innerHTML=passwordShow;
				$("scanPassRemind").style.display="none";
				$("selctImg").src=selectImg[0];
				$("next").style.display = "block";
				$("back").style.display = "block";
				$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
				focusType = "wirelessList"
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
				$("scanInputContent").innerHTML=passwordShow;
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
			$("scanInputContent").innerHTML=passwordShow+top.replaceT(key);
			showPasswordTimeout();
		}
	}
}
function showUI()
{
	lis=$("menuBox").getElementsByTagName("li");
	var spans = $("menuBox").getElementsByTagName("span");
	spans[0].innerHTML=wirelessConName[0];
	spans[1].innerHTML=wirelessConName[1];
	spans[2].innerHTML=wirelessConName[2];
	$("scanInputTitle").innerHTML=wirelessConName[3];
	scanButtonListDivList[0].innerHTML=wirelessConName[4];
	scanButtonListDivList[1].innerHTML=wirelessConName[5];
	$("initTitle").innerHTML=wirelessConName[6];
	$("subTitleTag").innerHTML=wirelessConName[7];
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];

}
var menuBoxLiList;
var scanButtonListDivList;
function init()
{
	menuBoxLiList = $("menuBox").getElementsByTagName("li");
	scanButtonListDivList = $("scanButtonList").getElementsByTagName("div");
	showUI();
	getWifiCount();
	showWifiList();
	addMouseListener();
}
function showWifiSignal(signal,position)
{
	if(signal>=-52&&signal<=-45)
	{
		$("netList"+position).src=signalStrength[4];
	}
	else if(signal>=-59&&signal<-52)
	{
		$("netList"+position).src=signalStrength[3];
	}
	else if(signal>=-66&&signal<-59)
	{
		$("netList"+position).src=signalStrength[2];
	}
	else if(signal>=-73&&signal<-66)
	{
		$("netList"+position).src=signalStrength[1];
	}
	else if(signal>=-80&&signal<-73)
	{
		$("netList"+position).src=signalStrength[0];
	}
	else
	{
		$("netList"+position).src=signalStrength[0];
	}
}
function showWifiList()//显示wifi列表
{
	var spans = $("menuBox").getElementsByTagName("span");
	wirelessList=setting.getWirelessAvailableNetwork(wirelessListSize,wirelessListPageIndex-1);
	sumWifi=wirelessList.length;
	var i=0;
	for(i=0;i<wirelessListSize;i++)
	{
		if(sumWifi==0)
		{
			lis[i+1].style.display = "none";
			$("thdListFocusList").style.display = "none";
		}
		else
		{
			if(i<sumWifi)
			{
				lis[i+1].style.display = "block";
				nowWifiInfo=wirelessList[i];
				spans[i+3].innerHTML=nowWifiInfo.networkname;
				if(nowWifiInfo.encrypt>0)
				{
					$("netLock"+i).style.display = "block";	
				}
				else
				{
					$("netLock"+i).style.display = "none";
				}
				$("encrypt"+i).innerHTML=newtworkWirelessEncrypt[nowWifiInfo.encrypt];
				showWifiSignal(nowWifiInfo.strength,i);
			}
			else
			{
				lis[i+1].style.display = "none";
			}
		}
	}
}
function getWifiCount()//计算wifi列表一共有多少页
{
	var sum=setting.wirelessNetworkCount;
	if(sum==0)
	{
		wirelessListPageCount=1;
	}
	else
	{
		if(sum%wirelessListSize==0)
		{
			wirelessListPageCount=parseInt(sum/wirelessListSize);
		}
		else
		{
			wirelessListPageCount=parseInt(sum/wirelessListSize)+1;
		}
	}
	$("ScrollBar").style.height = parseInt(400/wirelessListPageCount)+"px";
}
function showPasswordTimeout()//超时显示
{
	passwordTimeout=setTimeout("showPassword()",500);
}
function showPassword()//超时显示*
{
	if(passwordShow.length<32&&passwordShow.length>=0)
	{
		passwordShow=passwordShow+"*";
	}
	passwordTimeout=0;
	$("scanInputContent").innerHTML=passwordShow; 
}
function checkPassword()//检测密码是否合法
{
	if(wirelessList[positionV].encrypt==1)
	{
		if(password.length<5)
		{
			$("scanPassRemind").style.display="block";
			$("scanPassRemind").innerHTML=passwordRemind[0];
			return 0;
		}
	}
	else
	{
		if(password.length<8)
		{
			$("scanPassRemind").style.display="block";
			$("scanPassRemind").innerHTML=passwordRemind[0];
			return 0;
		}
	}
	return 1;
}
function uninit()
{
	top.hiddenKeyBoard();
}

function addMouseListener()
{
   document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			toBack();
		}
	}
	for(var i = 1; i < 6; i++)
	{
		menuBoxLiList[i].setAttribute("newAttr",i)
		menuBoxLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "wirelessList" && sumWifi>0){
					positionV = parseInt(this.getAttribute("newAttr"),10)-1;
					$("thdListFocusList").style.top = MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
		}
	}
	
	$("scanInputContent").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "passwordMenu"){
				passwordMenuV=0;
				$("dialogButtonFocus").style.display="none";
				$("scanInputFocus").style.display="block";
				toOK();
			}
		}
	}
	
	for(var i = 0; i < 2; i++)
	{
		scanButtonListDivList[i].setAttribute("newAttr",i);
		scanButtonListDivList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "passwordMenu")
				{
					passwordMenuV = 1;
					passwordMenuH = (~parseInt(this.getAttribute("newAttr"),10))&1;
					top.g_channel.testLog("passwordMenuH======"+passwordMenuH);
					if(passwordMenuH == 0)
					{
						$("dialogButtonFocus").style.left=650+"px";
					}
					else
					{
						$("dialogButtonFocus").style.left=350+"px";
					}
					$("dialogButtonFocus").style.display="block";
					$("scanInputFocus").style.display="none";
					toOK();
				}
			}
		}
	}
	$("back").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessList")
			{
				toLeft();
			}
		}
	}
	$("next").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessList")
			{
				toRight();
			}
		}
	}
	$("select").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessList")
			{
				toDown();
			}
		}
	}
}
var initWireManConName      = [top.initialTitle[1],top.initialOptions[1],top.initWireManuals[0],top.initWireManuals[1],top.initWireManuals[2],top.initWireManuals[3],top.initWireManuals[4]];
var initHelp              = ["0~9",top.others[9],top.okCancel[0]]
var ipSetButton           = top.okCancel;
var ipSetRemindWord       = [top.netWireConnRemind[0],top.netWireConnRemind[1],top.netWireConnRemind[2]];
var inputValue            = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
var showMenuFocus         = 0;        //用来记录当前按键应该响应什么操作  0 表示在修改IP地址等上 1 表示在确定或取消
var positionV             = 0;        //用来记录修改焦点的垂直位移
var positionH             = 0;        //用来记录修改焦点的水平位移
var finishFlag            = 1;        //用来记录按下button时所代表的操作 0 表示取消 1 表示确定
var connecttingFlag       = 0;        //用来标记是否正在连接 1表示正在连接时不响应按键 0表示不再连接状态
var INPUT_V_START           = 44;    //输入框垂直坐标起始位置
var INPUT_V_STEP            = 80;     //输入框垂直坐标位移
var INPUT_H_START           = 279;    //输入框水平坐标起始位置
var INPUT_H_STEP            = 220;    //输入框水平坐标位移
var lis;
var focusType             = "ipList";
var setting               = top.g_setting;
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
	if(connecttingFlag==1)
	{
		return;
	}
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
		case top.VK_RED:
		case top.VK_BACK: //back
		{
			toBack();
			break;
		}
		case top.VK_0:
		{
			setValue(0);
			break;
		}
		case top.VK_1:
		{
			setValue(1);
			break;
		}
		case top.VK_2:
		{
			setValue(2);
			break;
		}
		case top.VK_3:
		{
			setValue(3);
			break;
		}
		case top.VK_4:
		{
			setValue(4);
			break;
		}
		case top.VK_5:
		{
			setValue(5);
			break;
		}
		case top.VK_6:
		{
			setValue(6);
			break;
		}
		case top.VK_7:
		{
			setValue(7);
			break;
		}
		case top.VK_8:
		{
			setValue(8);
			break;
		}
		case top.VK_9:
		{
			setValue(9);
			break;
		}
	    default:
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
				if(positionV==0)
				{
					showMenuFocus = 1;
					$("buttonFocus").style.display="block";
					$("inputFocus").style.display="none";
					showInputBoxFormat(showBoxList[positionV][positionH],inputValue[positionV][positionH],"","");
				}
				else
				{
					positionV--;
					showInputBoxFormat(showBoxList[positionV+1][positionH],inputValue[positionV+1][positionH],showBoxList[positionV][positionH],inputValue[positionV][positionH]);
				}
				$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
				$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
			}
			break;
			case 1:
			{
				showMenuFocus = 0;
				$("buttonFocus").style.display="none";
				$("inputFocus").style.display="block";
				showInputBoxFormat("","",showBoxList[positionV][positionH],inputValue[positionV][positionH]);
			}
			break;
			default:
			break;
		}
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
				if(positionV==4)
				{
					showMenuFocus = 1;
					$("buttonFocus").style.display="block";
					$("inputFocus").style.display="none";
					showInputBoxFormat(showBoxList[positionV][positionH],inputValue[positionV][positionH],"","");
				}
				else
				{
					positionV++;
					showInputBoxFormat(showBoxList[positionV-1][positionH],inputValue[positionV-1][positionH],showBoxList[positionV][positionH],inputValue[positionV][positionH]);
				}
				$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
				$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
			}
			break;
			case 1:
			{
				showMenuFocus = 0;
				$("buttonFocus").style.display="none";
				$("inputFocus").style.display="block";
				showInputBoxFormat("","",showBoxList[positionV][positionH],inputValue[positionV][positionH]);
			}
			break;
			default:
			break;
		}
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
				positionH++;
				if(positionH>3)
				{
					if(positionV==4)
					{
						positionH=3;
						showMenuFocus = 1;
						$("buttonFocus").style.display="block";
						$("inputFocus").style.display="none";
						showInputBoxFormat(showBoxList[positionV][positionH],inputValue[positionV][positionH],"","");
					}
					else
					{
						positionH=0;
						positionV++;
						showInputBoxFormat(showBoxList[positionV-1][3],inputValue[positionV-1][3],showBoxList[positionV][positionH],inputValue[positionV][positionH]);
					}
				}
				else
				{
					showInputBoxFormat(showBoxList[positionV][positionH-1],inputValue[positionV][positionH-1],showBoxList[positionV][positionH],inputValue[positionV][positionH]);
				}
				$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
				$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
			}
			break;
			case 1:
			{
				if(finishFlag==1)
				{
					finishFlag=0;
					$("buttonFocus").style.left="300px";
				}
				else
				{
					finishFlag=1;
					$("buttonFocus").style.left="600px";
				}
			}
			break;
			default:
			break;
		}
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
				positionH--;
				if(positionH<0)
				{
					if(positionV==0)
					{
						positionH=0;
						showMenuFocus = 0;
					}
					else
					{
						positionH=3;
						positionV--;
						showInputBoxFormat(showBoxList[positionV+1][0],inputValue[positionV+1][0],showBoxList[positionV][positionH],inputValue[positionV][positionH]);
					}
				}
				else
				{
					showInputBoxFormat(showBoxList[positionV][positionH+1],inputValue[positionV][positionH+1],showBoxList[positionV][positionH],inputValue[positionV][positionH]);
				}
				$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
				$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
			}
			break;
			case 1:
			{
				if(finishFlag==1)
				{
					finishFlag=0;
					$("buttonFocus").style.left="300px";
				}
				else
				{
					finishFlag=1;
					$("buttonFocus").style.left="600px";
				}
			}
			break;
			default:
			break;
		}
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
				toRight();
			}
			break;
			case 1:
			{
				if(finishFlag==1)
				{
					top.initWireManual.ip=inputValue[0][0]+"."+inputValue[0][1]+"."+inputValue[0][2]+"."+inputValue[0][3];
					top.initWireManual.subMask=inputValue[1][0]+"."+inputValue[1][1]+"."+inputValue[1][2]+"."+inputValue[1][3];
					top.initWireManual.gateway=inputValue[2][0]+"."+inputValue[2][1]+"."+inputValue[2][2]+"."+inputValue[2][3];
					top.initWireManual.priDNS=inputValue[3][0]+"."+inputValue[3][1]+"."+inputValue[3][2]+"."+inputValue[3][3];
					top.initWireManual.secDNS=inputValue[4][0]+"."+inputValue[4][1]+"."+inputValue[4][2]+"."+inputValue[4][3];
					connecttingFlag=1;
					top.g_channel.testLog("ip==="+top.initWireManual.ip+"subMask===="+top.initWireManual.subMask+"gateway==="+top.initWireManual.gateway+"priDNS===="+top.initWireManual.priDNS);
					document.location.href="initNetConnectPrompt.html?01.0";
				}
				else
				{
					document.location.href="initWireType.html";
				}
			}
			break;
			default:
			break;
		}
	}
}
function toBack()
{
	if(focusType=="ipList")
	{
		if(showMenuFocus==0)
		{
			inputValue[positionV][positionH]=parseInt(inputValue[positionV][positionH]/10);
			showInputBoxFormat("","",showBoxList[positionV][positionH],inputValue[positionV][positionH]);
		}
	}
}
function initUI()
{
	$("initTitle").innerHTML=initWireManConName[0];
	$("subTitleTag").innerHTML=initWireManConName[1];
	lis = $("menuBox").getElementsByTagName("li");
	var spans=$("menuBox").getElementsByTagName("span");
	for(var i=0;i<=4;i++)
	{
		spans[i].innerHTML=initWireManConName[i+2];
	}
	buttonListDivList[0].innerHTML=ipSetButton[1];
	buttonListDivList[1].innerHTML=ipSetButton[0];
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
}
function showUIList()
{
	try
	{
	inputValue[0]=setting.networkIP.split(".");
	inputValue[1]=setting.networkSubnetMask.split(".");
	inputValue[2]=setting.networkGateway.split(".");
	inputValue[3]=setting.networkPrimaryDNS.split(".");
	inputValue[4]=setting.networkPrimaryDNS.split(".");
	for(var i=0;i<5;i++)
	{
		for(var j=0;j<4;j++)
		{
			showBoxList[i][j].innerHTML=inputValue[i][j];
		}
	}
	}catch(er)
	{
		channel.testLog("showUIList:"+er);
	}
}
var ipAddressDivList;
var subnetMaskDivList;
var defaultGatewayDivList;
var primaryDNSDivList;
var secondDNSDivList;
var buttonListDivList;
var showBoxList = [];
function init()
{
	try
	{
    showBoxList[0] = $("ipAddress").getElementsByTagName("div");
	showBoxList[1] = $("subnetMask").getElementsByTagName("div");
	showBoxList[2] = $("defaultGateway").getElementsByTagName("div");
	showBoxList[3] = $("primaryDNS").getElementsByTagName("div");
	showBoxList[4] = $("secondDNS").getElementsByTagName("div");
	buttonListDivList = $("buttonList").getElementsByTagName("div");
	initUI();
	showUIList();
	showInputBoxFormat("","",showBoxList[0][0],inputValue[0][0]);
	addMouseListener();
	}catch(er)
	{
		top.g_channel.testLog("init:"+er);
	}
}

function   jsTrim(str) 
{
	str   =   str.replace(/\s+/g,"");
	return str; 
}
function checkValue(value)//检测IP地址等是否小于255
{
	if(value>255)
	{
		$("remindWord").style.display="block";
		$("remindWord").innerHTML=ipSetRemindWord[0];
		return false;
	}
	else
	{
		$("remindWord").style.display="none";
		return true;
	}
}
function showInputBoxFormat(showOldLabel,oldValue,showNewLabel,newValue)
{
	if(showOldLabel!="")
	{
		showOldLabel.innerHTML=oldValue;
	}
	if(showNewLabel!="")
	{
		top.g_channel.testLog("parseInt(newValue,10)===="+parseInt(newValue,10));
		if(parseInt(newValue,10)==0)
		{
			showNewLabel.innerHTML="_";
		}
		else if(parseInt(newValue,10)>0&&parseInt(newValue,10)<100)
		{
			showNewLabel.innerHTML=newValue+"_";
		}
		else
		{
			showNewLabel.innerHTML=newValue;
		}
	}
}
function setValue(value)//将值写入地址框
{
	if(showMenuFocus==0&&focusType=="ipList")//有效的输入地址栏
	{
		if(parseInt(inputValue[positionV][positionH])*10>1000)
		{
			inputValue[positionV][positionH]=value;
		}
		else
		{
			inputValue[positionV][positionH]=parseInt(inputValue[positionV][positionH])*10+value;
		}
		if(checkValue(parseInt(inputValue[positionV][positionH]))==false)
		{
			inputValue[positionV][positionH]=parseInt(parseInt(inputValue[positionV][positionH])/10);
		}
		if(parseInt(inputValue[positionV][positionH])>100)
		{
			toRight();
			return;
		}
		showInputBoxFormat("","",showBoxList[positionV][positionH],inputValue[positionV][positionH]);
	}
}

function addMouseListener()
{
    document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			document.location.href="initWireType.html";
		}
	}
	for(var i = 0; i < 4; i++)
	{
		showBoxList[0][i].setAttribute("newAttr",i);
		showBoxList[0][i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "ipList"){
					showMenuFocus = 0;
					$("buttonFocus").style.display="none";
					$("inputFocus").style.display="block";
					showInputBoxFormat(showBoxList[positionV][positionH],inputValue[positionV][positionH],showBoxList[0][parseInt(this.getAttribute("newAttr"),10)],inputValue[0][parseInt(this.getAttribute("newAttr"),10)]);
					positionV = 0;
					positionH = parseInt(this.getAttribute("newAttr"),10);
					
					$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
					$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
				}
			}
		}
	}
	for(var i = 0; i < 4; i++)
	{
		showBoxList[1][i].setAttribute("newAttr",i);
		showBoxList[1][i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "ipList"){
					showMenuFocus = 0;
					$("buttonFocus").style.display="none";
					$("inputFocus").style.display="block";
					showInputBoxFormat(showBoxList[positionV][positionH],inputValue[positionV][positionH],showBoxList[1][parseInt(this.getAttribute("newAttr"),10)],inputValue[1][parseInt(this.getAttribute("newAttr"),10)]);
					positionV = 1;
					positionH = parseInt(this.getAttribute("newAttr"),10);
					$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
					$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
				}
			}
		}
	}
	for(var i = 0; i < 4; i++)
	{
		showBoxList[2][i].setAttribute("newAttr",i);
		showBoxList[2][i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "ipList"){
					showMenuFocus = 0;
					$("buttonFocus").style.display="none";
					$("inputFocus").style.display="block";
					showInputBoxFormat(showBoxList[positionV][positionH],inputValue[positionV][positionH],showBoxList[2][parseInt(this.getAttribute("newAttr"),10)],inputValue[2][parseInt(this.getAttribute("newAttr"),10)]);
					positionV = 2;
					positionH = parseInt(this.getAttribute("newAttr"),10);
					$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
					$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
				}
			}
		}
	}
	for(var i = 0; i < 4; i++)
	{
		showBoxList[3][i].setAttribute("newAttr",i);
		showBoxList[3][i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "ipList"){
					showMenuFocus = 0;
					$("buttonFocus").style.display="none";
					$("inputFocus").style.display="block";
					showInputBoxFormat(showBoxList[positionV][positionH],inputValue[positionV][positionH],showBoxList[3][parseInt(this.getAttribute("newAttr"),10)],inputValue[3][parseInt(this.getAttribute("newAttr"),10)]);
					positionV = 3;
					positionH = parseInt(this.getAttribute("newAttr"),10);
					$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
					$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
				}
			}
		}
	}
	for(var i = 0; i < 4; i++)
	{
		showBoxList[4][i].setAttribute("newAttr",i);
		showBoxList[4][i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "ipList"){
					showMenuFocus = 0;
					$("buttonFocus").style.display="none";
					$("inputFocus").style.display="block";
					showInputBoxFormat(showBoxList[positionV][positionH],inputValue[positionV][positionH],showBoxList[4][parseInt(this.getAttribute("newAttr"),10)],inputValue[4][parseInt(this.getAttribute("newAttr"),10)]);
					positionV = 4;
					positionH = parseInt(this.getAttribute("newAttr"),10);
					$("inputFocus").style.top=INPUT_V_START+positionV*INPUT_V_STEP+"px";
					$("inputFocus").style.left=INPUT_H_START+positionH*INPUT_H_STEP+"px";
				}
			}
		}
	}
	
	for(var i = 0; i < 2; i++)
	{
		buttonListDivList[i].setAttribute("newAttr",i);
		buttonListDivList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "ipList")
				{
					showMenuFocus = 1;
					finishFlag = parseInt(this.getAttribute("newAttr"),10);
					if(finishFlag == 0)
					{
						$("buttonFocus").style.left="300px";
					}
					else
					{
						$("buttonFocus").style.left="600px";
					}
					toOK();
				}
			}
		}
	}
	$("next").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "ipList"){
				var ip=inputValue[0][0]+"."+inputValue[0][1]+"."+inputValue[0][2]+"."+inputValue[0][3];
				var subMask=inputValue[1][0]+"."+inputValue[1][1]+"."+inputValue[1][2]+"."+inputValue[1][3];
				var gateway=inputValue[2][0]+"."+inputValue[2][1]+"."+inputValue[2][2]+"."+inputValue[2][3];
				var priDNS=inputValue[3][0]+"."+inputValue[3][1]+"."+inputValue[3][2]+"."+inputValue[3][3];
				var secDNS=inputValue[4][0]+"."+inputValue[4][1]+"."+inputValue[4][2]+"."+inputValue[4][3];
				connecttingFlag=1;
				if(setting.wireNetworkManualSet(ip,subMask,gateway,priDNS)==0)//后续接口需要更改
				{
					connecttingFlag=0;
					document.location.href="initNetConnectPrompt.html?01.1";//设置成功
				}
				else
				{
					connecttingFlag=0;
					document.location.href="initNetConnectPrompt.html?01.0";//设置失败
				}
			}
		}
	}
}
var netflixConName         = [top.netOptions[8],top.netFlixOptions[0],top.netFlixOptions[1]];
var netFlixTiles		   = [top.netOptions[8] + ">" + top.netFlixOptions[0],top.netOptions[8] + ">" + top.netFlixOptions[1]];
var netFlixDes			   = top.netFlixDes;
var netDSNRemind           = top.screenSavers[6];
var okCancel			   = top.okCancel;
var positionV              = 0;//主界面焦点位置
var positionPopH           = 0; //弹出框标记焦点位置 0 ：cancel 1：OK
var MENU_START 			   = 130;//菜单焦点移动起始位置
var MENU_STEP 			   = 70;//主菜单焦点移动的step
var focusType              = "netflixMenu";
var setting = top.g_setting;
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
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
	showPromptCont();
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}
function toUp()
{
	if(focusType == "netflixMenu")
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
	if(focusType == "netflixMenu")
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
	if(focusType == "deactivatePop")
	{
		if(positionPopH==0)
		{
			positionPopH=1;
			$("buttonFocus").style.left=190+"px";
		}
		else
		{
			positionPopH=0;
			$("buttonFocus").style.left=440+"px";
		}
	}
	else if(focusType == "netflixMenu") 
	{
		toBack();
	}
}
function toRight()
{
	if(focusType == "deactivatePop")
	{
		if(positionPopH==0)
		{
			positionPopH=1;
			$("buttonFocus").style.left=190+"px";
		}
		else
		{
			positionPopH=0;
			$("buttonFocus").style.left=440+"px";
		}
	}
	else if(focusType == "netflixMenu") 
	{
		toOK();
	}
}
function toOK()
{
	if(focusType == "netflixMenu")
	{
		switch(positionV)
		{
			case 0:
			{
				showDeactivatePop();
			}
			break;
			case 1:
			{
				showESNPop();
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "deactivatePop")
	{
		switch(positionPopH)
		{
			case 0:
			{
				$("netflixPopWin").style.display="none";
				focusType = "netflixMenu";
				parent.showPage(2);
			}
			break;
			case 1:
			{
				//setting.netflixDeactivate();后续添加函数
				top.g_ulits.sendMsgToApplication("vod.netflix", 0xf00c);
				$("netflixPopWin").style.display="none";
				focusType = "netflixMenu";
				parent.showPage(2);
			}
			break;
			default:
			break;
		}
	}
}
function toBack()
{
	if(focusType == "netflixMenu")
	{
		parent.returnPage(2);
	}
	else if(focusType == "deactivatePop")
	{
		$("netflixPopWin").style.display="none";
		focusType = "netflixMenu";
		parent.showPage(2);
	}
	else if(focusType == "ESNPop")
	{
		$("netflixPopWin").style.display="none";
		focusType = "netflixMenu";
		parent.showPage(2);
	}
}
function init()
{
	timeoutInit();
	showPromptCont();
	var spans=$("thdMenuRight").getElementsByTagName("span");
	for(var i=0;i<=2;i++)
	{
		spans[i].innerHTML=netflixConName[i];
	}
	
}
function showDeactivatePop()//显示deactivate弹出框
{
	parent.hiddenPage(2);
	$("popTitle").style.display = "block";
	$("buttonList").style.display = "block";
	$("buttonFocus").style.display = "block";
	$("netflixPopWin").style.display="block";
	$("popTitle").innerHTML=netFlixTiles[0];
	$("popContent").innerHTML=netFlixDes[0];
	positionPopH = 0;
	$("buttonFocus").style.left="440px";//初始化弹出框button焦点位置始终放在cancel上
	var divs=$("buttonList").getElementsByTagName("div");
	divs[0].innerHTML=okCancel[0];
	divs[1].innerHTML=okCancel[1];
	focusType = "deactivatePop";
}
function showESNPop()//显示ESN弹出框
{
	parent.hiddenPage(2);
	$("netflixPopWin").style.display="block";
	//var ESNkey = setting.netflixESN();
	if(1)//!ESNkey)
	{
		$("popContent").innerHTML=top.g_factory.getEsnKey(0,200);//"TMS-TVM51E-E5300F2C06YAY72=H0FXYULEQJIH2CO";//ESNkey;
	}
	else
	{
		$("popContent").innerHTML=netDSNRemind;
	}
	$("popTitle").style.display = "none";
	$("buttonList").style.display = "none";
	$("buttonFocus").style.display = "none";
	focusType = "ESNPop";
}
var netPromptImg        = ["../images/info-1_2.png","../images/info-1_3.png","../images/info-1_4.png","../images/info-1_5.png","../images/info-1_6.png"]
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
		$("promptWin").style.top=120+positionV*70+"px";
	}
	else if(height==80)
	{
		img[0].src=netPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=120+positionV*70+"px";
	}
	else if(height==120)
	{
		img[0].src=netPromptImg[1];
		$("promptContent").style.top = THREE_LINE_TOP+"px";
		img[0].style.height="160px";
		div[0].style.height="152px";
		$("promptWin").style.top=90+positionV*70+"px";
	}
	else if(height==160)
	{
		img[0].src=netPromptImg[2];
		$("promptContent").style.top = FOUR_LINE_TOP+"px";
		img[0].style.height="220px";
		div[0].style.height="212px";
		$("promptWin").style.top=60+positionV*70+"px";
	}
	else if(height==200)
	{
		img[0].src=netPromptImg[3];
		$("promptContent").style.top = FIVE_LINE_TOP+"px";
		img[0].style.height="280px";
		div[0].style.height="272px";
		$("promptWin").style.top=30+positionV*70+"px";
	}
	else if(height==240)
	{
		img[0].src=netPromptImg[4];
		$("promptContent").style.top = SIX_LINE_TOP+"px";
		img[0].style.height="340px";
		div[0].style.height="332px";
		$("promptWin").style.top=10+positionV*70+"px";
	}
	else if(height==0)
	{
		img[0].src=netPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		$("promptWin").style.top=120+positionV*70+"px";
	}
}
var showPromptContTimer = 0;
function showPromptCont()//显示提示语内容函数
{
	if(focusType=="netflixMenu")
	{
		clearTimeout(showPromptContTimer);
		showPromptContTimer = setTimeout(function(){$("promptWin").style.display="none"},5000);
		if(positionV==0)
		{
			$("promptContent").innerHTML=top.netFlixRemind;
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
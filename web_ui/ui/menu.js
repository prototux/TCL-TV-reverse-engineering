var positionV=0;
var menuListName = top.menuOptions;
var menuListPicture=[["images/SS_icon/Cross_UI_SS_icon-1-1.png","images/SS_icon/Cross_UI_SS_icon-2-1.png","images/SS_icon/Cross_UI_SS_icon-3-1.png","images/SS_icon/Cross_UI_SS_icon-4-1.png","images/SS_icon/Cross_UI_SS_icon-5-1.png"],["images/SS_icon/Cross_UI_SS_icon-1-2.png","images/SS_icon/Cross_UI_SS_icon-2-2.png","images/SS_icon/Cross_UI_SS_icon-3-2.png","images/SS_icon/Cross_UI_SS_icon-4-2.png","images/SS_icon/Cross_UI_SS_icon-5-2.png"]];
var SUB_MENU_START 			= 140;					//menu菜单焦点移动起始位置
var SUB_MENU_STEP 			= 120;					//menu主菜单焦点移动的step
var imgs;                                           //获取menu图片列表
var menuLists;                                      //获取menu li列表
var urls = ["userPictureSet.html","soundSet.html","channelSet.html","networkSetting.html","systemSet.html"];       
document.onnotify = notifyProcess;

function keyproc(evt)
{
		//top.timeoutFuc.osdTimeoutEndFuc();
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			//up
			oldPosition = positionV;
			toUp();
			newPosition = positionV;
			doElementScroll();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			oldPosition = positionV;
			toDown();
			newPosition = positionV;
			doElementScroll();
			ret = false;
			break;
		}
		case top.VK_RIGHT:	
		case top.VK_ENTER:
		{
			//OK 键
			toOk();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		case top.VK_LEFT:
			toBack();
			ret = false;
			break;
		default:
			top.keyDownProcess(evt);
		break;
	}
	//top.timeoutFuc.osdTimeoutStartFuc();
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}

function notifyProcess(evt)
{
    top.g_channel.testLog("in menu notifyProcess");
    var msg = evt.which;
    switch(msg)
    {
        case top.E_REFRESH_PICTURE_SIZE:
        {
            if(positionV==0)
            {
                parent.$("subMenu1").contentWindow.updatePicture();
            }
            break;
        }
        case top.E_HP_PLUGIN:
            top.jumpPage();
            break;
        case top.E_HP_PLUGOUT:
            top.jumpPage();
            break;							
        
        default:
            top.systemEventProc(evt);
            break;
    }
}

function toDown()
{
		if(parent.onLoadPage==0)
	{
		top.g_channel.testLog("menu  down onLoadPage  0.....");
		return;
	}
	switch(positionV)
	{
		case 0:
		{
			positionV=1;
		    $("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[1]);
		}
		break;
		case 1:
		{
			positionV=2;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[2]);
		}
		break;
		case 2:
		{
			positionV=3;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[3]);
		}
		break;
		case 3:
		{
			positionV=4;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[4]);
		}
		break;
		case 4:
		{
			positionV=0;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[0]);
		}
		break;
	}
}
function toUp()
{
		if(parent.onLoadPage==0)
	{
		top.g_channel.testLog("menu  up onLoadPage  0.....");
		return;
	}
	switch(positionV)
	{
		case 0:
		{
			positionV=4;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[4]);
		}
		break;
		case 1:
		{
			positionV=0;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[0]);
		}
		break;
		case 2:
		{
			positionV=1;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[1]);
		}
		break;
		case 3:
		{
			positionV=2;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[2]);
		}
		break;
		case 4:
		{
			positionV=3;
			$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
			parent.jumpPage(1,urls[3]);
		}
		break;
	}
}
function toOk()
{
	if(parent.onLoadPage==0)
	{
		top.g_channel.testLog("menu  onLoadPage  0.....");
		return;
	}	
	parent.showSubMenu1Focus();
	/*
	switch(positionV)
	{
		case 0:
		{
			parent.showSubMenu1Focus()
			break;
		}
		case 1:
		{
			
			break;
		}
		case 2:
		{
			
			break;
		}
		case 3:
		{
			
			break;
		}
		case 4:
		{
			
			break;
		}
		break;
	}
	*/
}
function toBack()
{
	parent.returnPage(0);
}

/*
 描述：menu language切换获取新的显示数据
*/
function refreshUIWhenLanguageChange()
{
	menuListName = top.menuOptions;
	for(var i = 0; i < menuLists.length; i++)
	{
		var divs=menuLists[i].getElementsByTagName("div");
		divs[1].innerHTML=menuListName[i];
		divs[1].setAttribute("contentText",divs[1].innerHTML);
	}
}

var oldPosition = 0;
var newPosition = 0;
function doElementScroll()
{
	setScrollAttribute(menunameClassList,oldPosition,newPosition);
	/*setTimeout(function(){*/resetScrollHtmlInner(menunameClassList,oldPosition,newPosition);//},1);
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

/*
把整个列表属性更改，如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
htmlTagList:内容标签列表；oldFocusPositon：原来的焦点位置；newfocusPosition：当前焦点选项在内容标签上的位置
*/
function setScrollAttribute(htmlTagList,oldFocusPositon,newfocusPosition)
{
	if(oldFocusPositon != newfocusPosition )
	{
		//恢复老焦点
		htmlTagList[oldFocusPositon].style.overflowX = "hidden";
		htmlTagList[oldFocusPositon].style.textOverflow = "ellipsis";
		htmlTagList[oldFocusPositon].innerHTML = "";
	}
	
	//根据情况刷新新焦点
	htmlTagList[newfocusPosition].setAttribute("contentText",htmlTagList[newfocusPosition].innerHTML);
	if(isOverflowed(htmlTagList[newfocusPosition]))//如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
	{
		htmlTagList[newfocusPosition].style.overflowX = "-webkit-marquee";
		htmlTagList[newfocusPosition].style.textOverflow = "clip";
		/*htmlTagList[i].innerHTML = tempText;*/
	}
	else
	{
		htmlTagList[newfocusPosition].style.overflowX = "hidden";
		htmlTagList[newfocusPosition].style.textOverflow = "ellipsis";
		/*htmlTagList[i].innerHTML = tempText;*/
	}
	htmlTagList[newfocusPosition].innerHTML = "";
}
/*
重新为整个列表属性更改完成的列表赋值
htmlTagList:内容标签列表；ListLength：当前有内容的列表标签的个数
*/
function resetScrollHtmlInner(htmlTagList,oldFocusPositon,newfocusPosition)
{
	htmlTagList[oldFocusPositon].innerHTML = htmlTagList[oldFocusPositon].getAttribute("contentText");
	htmlTagList[newfocusPosition].innerHTML = htmlTagList[newfocusPosition].getAttribute("contentText");
}

var menunameClassList;
function init()
{
//	top.g_channel.testLog("in menu init g_nextHtmlPage = " +　top.g_nextHtmlPage);
	
	//top.timeoutFuc.osdTimeoutStartFuc();
	menuLists = $("menu").getElementsByTagName("li");
	menunameClassList = $("menu").getElementsByClassName("menuname");
	for(var i=0;i<5;i++)
	{
		var divs=menuLists[i].getElementsByTagName("div");
		divs[1].innerHTML=menuListName[i];
	}
	imgs=$("menu").getElementsByTagName("img");
	if(top.g_nextHtmlPage == "common_interface.html" || top.g_nextHtmlPage == "ciList.html" )
	{
		positionV=4;
		$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
		//parent.jumpPage(1,"networkSetting.html");
	}/*
	else if(top.g_nextHtmlPage == "menuLanguage.html")
	{
		positionV = 4;
		initFocus(positionV);
	}*/
	else if(top.g_nextHtmlPage == "channelScan.html")
	{
		positionV = 2;
		initFocus(positionV);
	}
	else if(top.g_nextHtmlPage == "channelSet.html")
	{
		positionV = 2;
		initFocus(positionV);
	}
	else if( top.g_nextHtmlPage == "autoSearch.html" || top.g_nextHtmlPage == "autoUpdate.html")
	{
		positionV = 2;
		initFocus(positionV);
	}
	else if(top.g_nextHtmlPage == "networkSetting.html" || top.g_nextHtmlPage == "wirelessScan.html")
	{
		positionV = 3;
		initFocus(positionV);
	}
	else 
	{
		timeoutInit();
		positionV = 0;
		initFocus(positionV);
	}
	addMouseListener();
	oldPosition = positionV;
	newPosition = positionV;
	doElementScroll();
    if (top.g_setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        top.g_setting.setMEMC(0);
    }
}
function uninit()
{
    if (top.g_setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        top.g_setting.setMEMC(1);
    }
	top.timeoutFuc.timeoutEnable=1;
	top.clearMyTimeout();
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}
/*
描述：根据焦点位置显示焦点
*/
function initFocus(focusP)
{
	$("menuFocus").style.top=SUB_MENU_START+focusP*SUB_MENU_STEP+"px";
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2) toBack();//right key
	}
	
	for(var i = 0; i < 5; i++)
	{
		menuLists[i].setAttribute("newAttr",i);
		menuLists[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				top.timeoutFuc.osdTimeoutEndFuc();
				oldPosition = positionV;
				positionV = parseInt(this.getAttribute("newAttr"));
				$("menuFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px"
				parent.$("subMenu1").src="";
				parent.$("subMenu2").src="";
				parent.$("subMenu3").src="";
				parent.$("subMenu4").src="";
				$("menuFocus").src=parent.mentFocusImg[0];
				document.body.focus();
				if(document.hasFocus())
				{
					console.log("Menu get focus!!!");
				}
				else
				{
					console.log("Menu do not get focus!!!");
				}
				newPosition = positionV;
				doElementScroll();
				setTimeout(function(){
				parent.jumpPage(1,urls[positionV]);
				//setTimeout("toOk()",300);
				if(document.hasFocus())
				{
		console.log("Menu has get focus!!!");
				}
				else
				{
					console.log("Menu do not has get focus!!!");
				}
				
				parent.currentShowMenu = 0;
				parent.focusToMenu();
				timeoutInit();
				//parent.hiddenSubMenu1Focus();
				parent.setIndexFocusPage("homeMenu");
				},200);
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	
	}
}

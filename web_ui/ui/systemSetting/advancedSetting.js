/******************** created by chenhua ***********************/
var advancedTitleWords 			= [top.sysOptions[10],top.sysAdOptions[0],top.sysAdOptions[1],top.sysAdOptions[2],top.sysAdOptions[7]];
var offOnWords					= top.offOn;
var registWords					= top.sysRegistDes;
var dregistWords 				= top.sysDregistDes;
var okCancelWords				= top.okCancel;


var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var tLink						= 0;
var focusOn 					= "menu"; 				//menu,tLink
var list_position_h				= 0;
var form_position_h				= 0;

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var DIALOG_START				= 100;
var DIALOG_STEP					= 250;
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
//var divxActiveStatus           = setting.divxActiveStatus();
var hideDivxMenuFlag			= false;
document.onnotify 				= notifyProcess;

function notifyProcess(evt)
{
    var msg = evt.which;
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
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
			toUp();
			ret = false;
			break;
		case top.VK_DOWN:
			toDown();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
			ret = false;
			break;
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_BACK:
			toBack();
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

function toDown()
{
	if(focusOn == "menu")
	{
		/*if((setting.divxActiveStatus() == 0) || (setting.divxActiveStatus() == 2))
		{
			if(list_position_h >= 1)
			{
				list_position_h = 0;
			}
			else
			{
				list_position_h++;
			}
		}
		else */ //yiling0811
		if(!hideDivxMenuFlag)//add for au
		{
            if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0")=="1")
            {
                if(list_position_h >= 3)
                {
                    list_position_h = 0;
                }
                else
                {
                    list_position_h++;
                }
            }
            else
            {
                if(list_position_h >= 2)
                {
                    list_position_h = 0;
                }
                else
                {
                    list_position_h++;
                }
            }
		}
        else if(setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0")=="1")
        {
            if(list_position_h >= 1)
            {
                list_position_h = 0;
            }
            else
            {
                list_position_h++;
            }
        }
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "tLink")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
}

function toUp()
{
	if(focusOn == "menu")
	{		
		/*if((setting.divxActiveStatus() == 0) || (setting.divxActiveStatus() == 2))
		{
			if(list_position_h <= 0)
			{
				list_position_h = 1;
			}
			else
				list_position_h--;
		}
		else*/ //yiling0811
		if(!hideDivxMenuFlag)//add for au
		{
            if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0") == "1")
            {
                if (list_position_h <= 0)
                {
                    list_position_h = 3;
                }
                else
                {
                    list_position_h--;
                }
            }
            else
            {
                if (list_position_h <= 0)
                {
                    list_position_h = 2;
                }
                else
                {
                    list_position_h--;
                }
            }
		}
        else if(setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0") == "1")
        {
            if (list_position_h <= 0)
            {
                list_position_h = 1;
            }
            else
            {
                list_position_h--;
            }
        }
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "tLink")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		if(setting.divxActiveStatus() == 1)
		{
			switch(list_position_h)
			{
				case 0:
					if(!hideDivxMenuFlag)
					{
						top.jumpToOperatePage("systemSetting/deregistrationConfirmation.html");
					}
					else
					{
						initTLink();
						focusOn = "tLink";
					}
					break;
				case 1:
					if(!hideDivxMenuFlag)
					top.jumpToOperatePage("systemSetting/deregistrationConfirmation.html");
					break;
				case 2:
					initTLink();
					focusOn = "tLink";
					break;
				default:	
					break;
			}
		}
		else if((setting.divxActiveStatus() == 0) || (setting.divxActiveStatus() == 2))
		{
			switch(list_position_h)
			{
				case 0:
					if(!hideDivxMenuFlag)
					{
						top.jumpToOperatePage("systemSetting/registration.html");
					}
					else
					{
						initTLink();
						focusOn = "tLink";
					}
					break;
				case 1: //yiling0811
					if(!hideDivxMenuFlag)
					top.jumpToOperatePage("systemSetting/deregistration.html");
					break;				
				case 2:
					initTLink();
					focusOn = "tLink";
					break;
				default:	
					break;
			}
		}
	}
	else if(focusOn == "tLink")
	{
		$("listForm").style.display = "none";
		$("thdListFocus").src=mainFocus[0];
		tLink = form_position_h;
		$("tLinkStatus").innerHTML = offOnWords[tLink];
		setting.enableTLink = tLink;
		focusOn = "menu";
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "tLink")
	{
		$("listForm").style.display = "none";
		$("thdListFocus").src=mainFocus[0];
		focusOn = "menu";
	}
	else if(focusOn == "registration")
	{
		$("registForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "deregistration")
	{
		$("registForm").style.display = "none";
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "deregistration")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "deregistration")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	}
	else
	{
		doEnter();
	}
}
/*
描述：初始化T-Link
参数：
全局变量：form_position_h;tLink
*/
function initTLink()
{
	$("thdListFocus").src=mainFocus[1];
	form_position_h = tLink;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}

var listFormLiList;
var thdMenuRightLiList;
function init()
{
	timeoutInit();
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	var thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	
	//top.Log("init start divxActiveStatus = " + setting.divxActiveStatus());
	/*if((setting.divxActiveStatus() == 0) || (setting.divxActiveStatus() == 2))
	{
		thdMenuRightSpanList[0].innerHTML = advancedTitleWords[0];
		thdMenuRightSpanList[1].innerHTML = advancedTitleWords[1];
		thdMenuRightSpanList[3].innerHTML = advancedTitleWords[3];
		$("deregisteration").style.display = "none";
		//$("tLinktype").style.display = "none";
	}
	else*/ //yiling0811
	{
        if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0") == "1")
        {
            for (var i = 0; i < 5; i++)
            {
                thdMenuRightSpanList[i].innerHTML = advancedTitleWords[i];
            }
            $("bluetoothDeclarationIDStatus").innerHTML = "D029607";
        }
        else
        {
            for (var i = 0; i < 4; i++)
            {
                thdMenuRightSpanList[i].innerHTML = advancedTitleWords[i];
            }
        }
		$("deregisteration").style.display = "block";
		//$("tLinktype").style.display = "block";
		//add for au 
		if("AU" == setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU"))
		{
			hideDivxMenuFlag = true;
			thdMenuRightLiList[1].style.display = 'none';
			thdMenuRightLiList[2].style.display = 'none';
		}
	}
	tLink = setting.enableTLink;
	$("tLinkStatus").innerHTML = offOnWords[tLink];
	
	//list_position_h = 0; //yiling0811
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";

	listFormLiList = $("listForm").getElementsByTagName("li");
	addMouseListener();
}

var PROGRESS_START_LEFT_OFFSET = 480 + 310;//进度条容器开始位置相对于framework的左偏移，480是进度条的父容器的相对framwork的左偏移，310是进度条容器相对于进度条父容器的左偏移
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//menu
	for(var i = 1; i < 4; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					/*if(divxActiveStatus != 1)
					{
						if(parseInt(this.getAttribute("newAttr")) < 2)
						{
							list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
						}
						else if(parseInt(this.getAttribute("newAttr")) > 2)
						{
							list_position_h = parseInt(this.getAttribute("newAttr")) - 2;
						}
						else
						{
							top.timeoutFuc.osdTimeoutStartFuc();
							return;
						}
					}
					else*/ //yiling0811
					{
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	//form
	for(var i = 0; i < 2; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "tLink")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}
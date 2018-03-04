/******************** created by chenhua ***********************/
var lockTitleWords 				= [top.sysOptions[3],top.sysLockOptions[0],top.sysLockOptions[1],top.sysLockOptions[2],top.sysLockOptions[3],
									top.sysLockOptions[4],top.sysLockOptions[5],top.sysLockOptions[6],top.sysLockOptions[7],top.sysLockOptions[8]];
var offOnWords					= top.offOn;
var parentRatingWords			= top.sysRatingOptions;
var changePassTitleWords		= top.changePass;
var changePassRemindWords		= top.changePassDes;
var cleanWords					= top.selectChoice;
var yesNoWords 					= top.yesNo;

var panelLock					= 0;
var instLock					= 0;
var parentRatingValue			= 0;

/*ratingPosition：parentRatingValue在响应的枚举数组中对应的的显示的下标;rateOffsetForFrance:当前国家对应的parentRating所拥有的枚举相对于parentRatingWords中的偏移量;以parentRatingValue = 10为例
1.当国家是法国时，没有none和X等级，其枚举数组是["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],ratingPosition为6;rateOffsetForFrance为1
2.当国家是西班牙时，其枚举数组是["None","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","X-rated(spain)"]，ratingPosition为7，rateOffsetForFrance为0
3其他国家时，其枚举数组是["None","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],ratingPosition为7，rateOffsetForFrance为0
*/
var ratingPosition				= 0;
var rateOffsetForFrance 		= 0;
					
var offset						= 0;					//offset = ratingPosition - form_position_h;
var maxVolume					= 0;
var volume 						= 0;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,panelLock,instLock,parentRating,changePassword
var list_position_h				= 0;
var form_position_h				= 0;
var hotelEnable					= 0;
var newPassword					= "";
var confirmPassword				= "";
var passwordLength				= 0;					//密码长度
var currentCountry				= 0;

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var CHANGE_PASS_START			= 100;
var PROGRESS_WIDTH				= 300;					//进度条的总宽度
var DLOG_BUTTON_START			= 200;				//对话框中的按钮焦点开始的位置
var DLOG_BUTTON_STEP			= 250;				//对话框中按钮焦点移动的step
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
var prAUList					= top.parentRatingAUOptions;
var prAUValue					= [0x10 + 3, 0x6 + 3, 0x8 + 3, 0xa + 3, 0xc + 3, 0xe + 3, 0xf + 3, 0x0 + 3];
var prAUIndex					= 0;
var isAUFlag					= false;
document.onnotify 				= notifyProcess;
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}

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

function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
	
		case top.VK_VIRTUAL_REMOTE:
			
			//显示或者不显示--lqt---系统中重置密码时
			if(top.virtualRemoteState == 0)
			{
				console.log("lqt---lock.js---VK_VIRTUAL_REMOTE");
				//显示的条件是：当重置密码框显示的时候
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
			console.log("lqt---lock.js---clientX: "+clientX);
			console.log("lqt---lock.js---clientY: "+clientY);
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
			if(focusOn == "changePassword")
			{
				doCheck(evt.which - 48);
				ret = false;
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

function toDown()
{
	if(focusOn == "menu")
	{
		if(currentCountry == 15)//Norway
		{
			if(hotelEnable == 1)
			{
				if(list_position_h >= 5)
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
				if(list_position_h >= 8)
				{
					list_position_h = 0;
				}
				else
				{
					list_position_h++;
				}
			}
		}
		else
		{
			if(hotelEnable == 1)
			{
				if(list_position_h >= 4)
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
				if(list_position_h >= 7)
				{
					list_position_h = 0;
				}
				else
				{
					list_position_h++;
				}
			}
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,findRealPosition(list_position_h), 1);
	}
	else if(focusOn == "panelLock" || focusOn == "instLock")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP+ "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "parentRating")
	{
		if(isAUFlag && 0 == channel.systemCountry)
		{
			toDownInListForm(prAUList.length, prAUList);
		}
		else
		{
			switch(currentCountry)
			{
				case 8://france no none rate and no X rate
					toDownInListForm(parentRatingWords.length - 2,parentRatingWords);
					break;
				case 22://spain have none rate adn X rate
					toDownInListForm(parentRatingWords.length,parentRatingWords);
					break;
				default://other contry have none rate but no X rate
					toDownInListForm(parentRatingWords.length - 1,parentRatingWords);
					break;
			}
		}
	}
	else if(focusOn == "changePassword")
	{
		if(form_position_h == 0)
		{
			if(newPassword.length < 4)
			{
				return;
			}
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("changePassFocus").style.top = CHANGE_PASS_START + form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
}

function toUp()
{
	if(focusOn == "menu")
	{			
		if(currentCountry == 15)//Norway
		{
			if(hotelEnable == 1)
			{
				if(list_position_h <= 0)
				{
					list_position_h = 5;
				}
				else
				{
					list_position_h--;
				}
			}
			else
			{
				if(list_position_h <= 0)
				{
					list_position_h = 8;
				}
				else
				{
					list_position_h--;
				}
			}
		}
		else
		{
			if(hotelEnable == 1)
			{
				if(list_position_h <= 0)
				{
					list_position_h = 4;
				}
				else
				{
					list_position_h--;
				}
			}
			else
			{
				if(list_position_h <= 0)
				{
					list_position_h = 7;
				}
				else
				{
					list_position_h--;
				}
			}
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,findRealPosition(list_position_h), -1);
	}
	else if(focusOn == "panelLock" || focusOn == "instLock")
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
	else if(focusOn == "parentRating")
	{
		if(isAUFlag && 0 == channel.systemCountry)
		{
			toUpInListForm(prAUList.length, prAUList);
		}
		else
		{
			switch(currentCountry)
			{
				case 8://france no none rate and no X rate
					toUpInListForm(parentRatingWords.length - 2,parentRatingWords);
					break;
				case 22://spain have none rate adn X rate
					toUpInListForm(parentRatingWords.length,parentRatingWords);
					break;
				default://other contry have none rate but no X rate
					toUpInListForm(parentRatingWords.length - 1,parentRatingWords);
				break;
			}
		}
	}
	else if(focusOn == "changePassword")
	{
		if(form_position_h == 0)
		{
			if(newPassword.length < 4)
			{
				return;
			}
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("changePassFocus").style.top = CHANGE_PASS_START + form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		if(currentCountry == 15)//Norway
		{
			if(hotelEnable == 1)
			{
				switch(list_position_h)
				{
					case 0:
						parent.jumpPage(3,"systemSetting/channelLock.html");
						break;
					case 1:
						parent.jumpPage(3,"systemSetting/timeIntervalLock.html");
						break;
					case 2:
						$("thdListFocus").src=mainFocus[1];
						initParentRating(ratingPosition);
						focusOn = "parentRating";
						break;
					case 3:
						parent.jumpPage(3,"systemSetting/inputLock.html");
						break;
					case 4:
						initChangePass();
						focusOn = "changePassword";
						break;
					case 5:
						initProgressBar();
						focusOn = "progressBar";
						break;
					case 6:
						initCleanDialog();
						focusOn = "clean";
						break;
					default:	
						break;
				}
			}
			else
			{
				switch(list_position_h)
				{
					case 0:
						parent.jumpPage(3,"systemSetting/channelLock.html");
						break;
					case 1:
						parent.jumpPage(3,"systemSetting/timeIntervalLock.html");
						break;
					case 2:
						$("thdListFocus").src=mainFocus[1];
						initParentRating(ratingPosition);
						focusOn = "parentRating";
						break;
					case 3:
						parent.jumpPage(3,"systemSetting/inputLock.html");
						break;
					case 4:
						$("thdListFocus").src=mainFocus[1];
						initPanelLock(panelLock);
						focusOn = "panelLock";
						break;
					case 5:
						$("thdListFocus").src=mainFocus[1];
						initInstLock(instLock);
						focusOn = "instLock";
						break;
					case 6:
						initChangePass();
						focusOn = "changePassword";
						break;
					case 7:
						initProgressBar();
						focusOn = "progressBar";
						break;
					case 8:
						initCleanDialog();
						focusOn = "clean";
						break;
					default:	
						break;
				}
			}
		}
		else
		{
			if(hotelEnable == 1)
			{
				switch(list_position_h)
				{
					case 0:
						parent.jumpPage(3,"systemSetting/channelLock.html");
						break;
					case 1:
						$("thdListFocus").src=mainFocus[1];
						initParentRating(ratingPosition);
						focusOn = "parentRating";
						break;
					case 2:
						parent.jumpPage(3,"systemSetting/inputLock.html");
						break;
					case 3:
						initChangePass();
						focusOn = "changePassword";
						break;
					case 4:
						initCleanDialog();
						focusOn = "clean";
						break;
					default:	
						break;
				}
			}
			else
			{
				switch(list_position_h)
				{
					case 0:
						parent.jumpPage(3,"systemSetting/channelLock.html");
						break;
					case 1:
						$("thdListFocus").src=mainFocus[1];
						initParentRating(ratingPosition);
						focusOn = "parentRating";
						break;
					case 2:
						parent.jumpPage(3,"systemSetting/inputLock.html");
						break;
					case 3:
						$("thdListFocus").src=mainFocus[1];
						initPanelLock(panelLock);
						focusOn = "panelLock";
						break;
					case 4:
						$("thdListFocus").src=mainFocus[1];
						initInstLock(instLock);
						focusOn = "instLock";
						break;
					case 5:
						initChangePass();
						focusOn = "changePassword";
						break;
					case 6:
						initProgressBar();
						focusOn = "progressBar";
						break;
					case 7:
						initCleanDialog();
						focusOn = "clean";
						break;
					default:	
						break;
				}
			}
		}
	}
	else if(focusOn == "parentRating")
	{
		$("thdListFocus").src=mainFocus[0];
		ratingPosition = form_position_h + offset;
		var realRatingPosition = ratingPosition + rateOffsetForFrance;//在数组parentRatingWords中对应的下标
		if(realRatingPosition == 0)
		{
			parentRatingValue = realRatingPosition;
		}
		else
		{
			parentRatingValue = realRatingPosition + 3;
		}
		
		if(isAUFlag && 0 == channel.systemCountry)
		{
			prAUIndex = ratingPosition;
			setting.parentalRating = prAUValue[ratingPosition];
			$("parentRatingStatus").innerHTML = prAUList[ratingPosition];
		}
		else
		{
			setting.parentalRating = parentRatingValue;
			$("parentRatingStatus").innerHTML = parentRatingWords[ratingPosition + rateOffsetForFrance];
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, 0);
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "panelLock")
	{
		$("thdListFocus").src=mainFocus[0];
		panelLock = form_position_h;
		setting.frontPanelLock = panelLock;
		$("panelLockStatus").innerHTML = offOnWords[panelLock];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "instLock")
	{
		$("thdListFocus").src=mainFocus[0];
		instLock = form_position_h;
		channel.testLog("in doEnter instLock = " + instLock);
		setting.installLock = instLock;
		$("instLockStatus").innerHTML = offOnWords[instLock];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "clean")
	{
		if(form_position_h == 0)
		{
			setting.cleanAllLock();//清除所有锁
			initUI();
			focusOn = "menu";
		}
		else
		{
			focusOn = "menu";
		}
		parent.showPage(2);
		$("cleanForm").style.display = "none";
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "panelLock" || focusOn == "instLock" || focusOn == "parentRating")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 0);
	}
	else if(focusOn == "changePassword")
	{
		$("thdListFocus").style.display = "block";
		parent.showPage(2);
		$("passForm").style.display = "none";
		//lqt--如果是显示的话，就隐藏---在密码框消失的时候隐藏
		if(top.virtualRemoteState == 1)
		{
			//隐藏虚拟遥控器
			top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
		}
		focusOn = "menu";
	}
	else if(focusOn == "progressBar")
	{
		top.timeoutFuc.timeoutTimes = 30;
		$("maxVolumePgreLeft").style.width = parseInt(maxVolume*PROGRESS_WIDTH/100,10) + "px";
		$("maxVolumePgreRight").style.width = parseInt((100 - maxVolume)*PROGRESS_WIDTH/100,10) + "px";
		$("maxVolumeValue").innerHTML = maxVolume;
		$("adjustProgressBox").style.display="none";
		parent.showPage(2);
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "progressBar")//maxvolume
	{
		if(maxVolume > 0)
		{
			maxVolume--;
			refreshMaxVolumeProgress(maxVolume);
		}
	}
	else if(focusOn == "changePassword")
	{
		if(form_position_h == 0)
		{
			if(passwordLength < 1) return
			else
			{
				newPassword = newPassword.substring(0,(passwordLength-1));
				$('newPassContent').innerHTML = $('newPassContent').innerHTML.substring(0,(passwordLength-1))+"_";
				passwordLength--;
			}
		}
		else
		{
			if(passwordLength < 1) return
			else
			{
				confirmPassword = confirmPassword.substring(0,(passwordLength-1));
				$('confirmPassContent').innerHTML = $('confirmPassContent').innerHTML.substring(0,(passwordLength-1))+"_";
				passwordLength--;
			}
		}
	}
	else if(focusOn == "clean")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h*DLOG_BUTTON_STEP + "px";
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "progressBar")//maxvolume
	{
		if(maxVolume < PROGRESS_MAX_VALUE)
		{
			maxVolume++;
			refreshMaxVolumeProgress(maxVolume);
		}
	}
	else if(focusOn == "clean")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h*DLOG_BUTTON_STEP + "px";
	}
	else
	{
		doEnter();
	}
}


/*
功能描述：初始化clean all lock dialog
参数：
全局变量：countryPosition;
*/
function initCleanDialog()
{
	channel.testLog("in initCleanDialog");
	$("cleanTitle").innerHTML = lockTitleWords[9];
	$("cleanContent").innerHTML = cleanWords;
	var cleanDivList = $("cleanForm").getElementsByTagName("div");
	cleanDivList[0].innerHTML = yesNoWords[0];
	cleanDivList[1].innerHTML = yesNoWords[1];
	form_position_h = 1;
	$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h*DLOG_BUTTON_STEP + "px";
	$("cleanForm").style.display = "block";
	parent.hiddenPage(2);
	top.showDialogPosition($("cleanForm"),800,250,1920,1080,0,0);
	channel.testLog("in initCleanDialog end");
}


/*
描述：刷新maxVolume进度
参数：progress：进度数
全局变量：
*/
function refreshMaxVolumeProgress(progress)
{
	if(maxvolTimer)
	{
		clearTimeout(maxvolTimer);
	}
	maxvolTimer = setTimeout("toSetMaxVolume()",50);
	if(volume > progress)
	{
		volume = progress;
		channel.volume = volume;
	}
	progressDivList[0].style.width = parseInt(progress*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
	progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - progress)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
	$("adjustProgValue").innerHTML = progress;
}

var maxvolTimer	= 0;//连续按左右键时为了解决迟滞的问题而引入计时，50毫秒内连续按了按键只处理最后一次的设置
function toSetMaxVolume()
{
	setting.maxVolume = maxVolume;
}

/*
描述：初始化
参数：rating：parent rating在parentRatingWords的枚举
全局变量：form_position_h;offset;list_position_h;
*/
function initParentRating(rating)
{
	if(isAUFlag && 0 == channel.systemCountry) 
	{
		rating = prAUIndex;
	}
	if(rating >= 5)
	{
		form_position_h = 4;
		offset = rating - form_position_h;/*
		for(i=0;i<5;i++)
		{
			listFormLiList[i].innerHTML = parentRatingWords[i + offset + rateOffsetForFrance];
		}*/
	}
	else
	{
		offset = 0;
		form_position_h = rating - offset;/*
		for(i=0;i<5;i++)
		{
			listFormLiList[i].innerHTML = parentRatingWords[i + offset + rateOffsetForFrance];
		}*/
	}
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	
	if(isAUFlag && 0 == channel.systemCountry)
	{
		initForRateListForm($("listForm"), topOffset, leftOffset, listFormLiList, prAUList, prAUList.length,
			form_position_h, offset, 0);
		top.doEleScrForNoOption(listFormLiList, form_position_h, 0);
	}
	else
	{
		switch(currentCountry)
		{
			case 8://france no none rate and no X rate
				optionSum = 15;
				break;
			case 22://spain have none rate adn X rate
				optionSum = 17;
				break;
			default://other contry have none rate but no X rate
				optionSum = 16;
				break;
		}
		initForRateListForm($("listForm"), topOffset, leftOffset, listFormLiList, parentRatingWords, optionSum,
			form_position_h, offset, rateOffsetForFrance);
	}
	
}

function initForRateListForm(formTag,topOffset,leftOffset,listFormLis,optionContents,optionSum,focusIndex,positionOffset,offsetForCountry)
{
	//g_channel.testLog("in framework" + "," + formTag + "," + topOffset + "," + leftOffset + "," + listFormLis + "," + optionContents[0] + "," + optionSum + "," +  focusIndex + "," + positionOffset);
	var LIST_FORM_START = 10;
	var LIST_FORM_STEP = 80;
	var UP_DOWN_IMG_HEIGHT = 40;
	var MAX_OPTION_IN_ONE_PAGE = 5;
	formTag.style.top = topOffset + "px";
	formTag.style.left = leftOffset + "px";
	var listImgList = formTag.getElementsByTagName("img");
	
	formTag.style.height = UP_DOWN_IMG_HEIGHT*2 + LIST_FORM_START + LIST_FORM_STEP*MAX_OPTION_IN_ONE_PAGE + "px";
	if(positionOffset > 0)
	{
		listImgList[0].style.display = "block";
	}
	else
	{
		listImgList[0].style.display = "none";
	}
	
	if((positionOffset + 4) >= (optionSum - 1))
	{
		listImgList[2].style.display = "none";
	}
	else
	{
		listImgList[2].style.display = "block";
	}
	
	for(i = 0; i < 5; i++)
	{
		listFormLis[i].innerHTML = optionContents[i + positionOffset + offsetForCountry];
		listFormLis[i].style.display = "block";
	}
	formTag.style.display = "block";
	listImgList[1].style.top = focusIndex*LIST_FORM_STEP + "px";//list focus img
}

/*
描述：初始化
参数：panel:panel lock enum
全局变量：form_position_h;list_position_h;
*/
function initPanelLock(panel)
{
	form_position_h = panel;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}

/*
描述：初始化
参数：install:install enum
全局变量：form_position_h;list_position_h;
*/
function initInstLock(install)
{
	form_position_h = install;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}

/*
描述：在弹出列表出来的时候按Down键刷新焦点的效果
参数：sum：允许enum总数量；wordsList：所有允许的enmu的文字描述保存在该数组中
全局变量：form_position_h；offset;
*/
function toDownInListForm(sum,wordsList)
{
	if(form_position_h == 4 && (form_position_h + offset) >= (sum - 1))
	{
		offset = 0;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i + offset + rateOffsetForFrance];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sum - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i + offset + rateOffsetForFrance];
		}
	}
	else
	{
		form_position_h++;
	}
	$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	if(offset > 0)
	{
		$("listUpImg").style.display = "block";
	}
	else
	{
		$("listUpImg").style.display = "none";
	}
	
	if((offset + 4) >= (sum - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
}

/*
描述：在列表出来的时候按Up键刷新焦点的效果
参数：sum：允许的enum总数量；wordsList：所有允许的enmu的文字描述保存在该数组中
全局变量：form_position_h；offset;
*/
function toUpInListForm(sum,wordsList)
{
	if(form_position_h == 0 && offset == 0)
	{
		offset = sum - 5;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i + offset + rateOffsetForFrance];
		}
		form_position_h = 4;
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i + offset + rateOffsetForFrance];
		}
	}
	else if(form_position_h > 0)
	{
		form_position_h--;
	}
	$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	if(offset > 0)
	{
		$("listUpImg").style.display = "block";
	}
	else
	{
		$("listUpImg").style.display = "none";
	}
	
	if((offset + 4) >= (sum - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
}

/*
描述：初始化 change password 弹出框
参数：
全局变量：form_position_h;
*/
function initChangePass()
{
	newPassword = "";
	confirmPassword="";
	passwordLength = 0;
	var changePassSpanList = $("passForm").getElementsByTagName("span");
	changePassSpanList[0].innerHTML = changePassTitleWords[0];
	changePassSpanList[1].innerHTML = changePassTitleWords[1];
	changePassSpanList[2].innerHTML = changePassTitleWords[2];
	
	$("newPassContent").innerHTML = "_";
	$("confirmPassContent").innerHTML = "";
	$("passRemind").innerHTML = "";
	
	form_position_h = 0;
	$("changePassFocus").style.top = CHANGE_PASS_START + form_position_h*FORM_STEP + "px";
	$("passForm").style.display = "block";
	parent.hiddenPage(2);
	top.showDialogPosition($("passForm"),800,300,1920,1080,0,0);
}

function doCheck(which)
{
	/*需要说明的是String.fromCharCode(which)的值总是大写的，因为onkeyup和onkeydown事件不能主动判断键盘的大小写，
	onkeypress可以判断大小写。其中只有onkeyup事件能获取键盘按下去后的结果值，因为此处需用到要清除键盘按下去后的值，
	所以只能用onkeyup事件，考虑到遥控器只有数字键，没有大小写之分，所以够用了*/
	if(form_position_h == 0) 
	{
		passwordLength = newPassword.length;
		if(passwordLength == 4)//重新输入
		{
			newPassword = "";
			$("newPassContent").innerHTML = "_";
			passwordLength = 0;
		}
		newPassword = newPassword + which;
		$("newPassContent").innerHTML = $("newPassContent").innerHTML.substring(0,passwordLength) + "*" + "_";
		passwordLength++;
		if(passwordLength == 4)
		{
			$("newPassContent").innerHTML = $("newPassContent").innerHTML.substring(0,passwordLength);
			toDown();
			$("confirmPassContent").innerHTML = "_";
		}
	}
	else if(form_position_h == 1)
	{
		passwordLength = confirmPassword.length;
		confirmPassword = confirmPassword + which;
		$("confirmPassContent").innerHTML = $("confirmPassContent").innerHTML.substring(0,passwordLength) + "*" + "_";
		passwordLength++;
		if(passwordLength == 4)
		{
			$("confirmPassContent").innerHTML = $("confirmPassContent").innerHTML.substring(0,passwordLength);
			 if(confirmPassword != newPassword)
			{
				passwordLength = 0;
				$('passRemind').innerHTML = changePassRemindWords[1];
				newPassword = "";
				$("newPassContent").innerHTML = "_";
				confirmPassword="";
				$("confirmPassContent").innerHTML = "";
				toDown();
			}
			else
			{
				if(newPassword == "0000")
				{
					passwordLength = 0;
					$('passRemind').innerHTML = changePassRemindWords[3];
					newPassword = "";
					$("newPassContent").innerHTML = "_";
					confirmPassword="";
					$("confirmPassContent").innerHTML = "";
					toDown();
				}
				else
				{
					$('passRemind').innerHTML = changePassRemindWords[2];
					setting.password = newPassword;
					setTimeout("toBack()",2000);
				}
			}
		}
	}
}

/*
 描述：初始化需要通过进度显示的设置项
 参数：选择项的名称
*/
var PROGRESS_MAX_VALUE = 100;
var EXTRA_PROGRESS_WIDTH = 900;					// 弹出式进度条的宽度
function initProgressBar()
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(2);
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = lockTitleWords[8];
	progressDivList[0].style.width = parseInt(maxVolume*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
	progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - maxVolume)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
	$("adjustProgValue").innerHTML = maxVolume;
	$("adjustProgressBox").style.display="block";
	focusOn = "progressBar";
}

function initUI()
{
	parentRatingValue = setting.parentalRating;
	
	switch(currentCountry)
	{
		case 8://france no none rate and no X rate
			rateOffsetForFrance = 1;
			if(parentRatingValue < 4 || parentRatingValue >= 19)
			{
				ratingPosition = 0;
			}
			else
			{
				ratingPosition = parentRatingValue - rateOffsetForFrance - 3;
			}	
			break;
		case 22://spain have none rate adn X rate
			rateOffsetForFrance = 0;
			if(parentRatingValue < 4 || parentRatingValue > 19)
			{
				ratingPosition = 0;
			}
			else
			{
				ratingPosition = parentRatingValue - 3;
			}	
			break;
		default://other contry have none rate but no X rate
			rateOffsetForFrance = 0;
			if(parentRatingValue < 4 || parentRatingValue >= 19)
			{
				ratingPosition = 0;
			}
			else
			{
				ratingPosition = parentRatingValue - 3;
			}	
			break;
	}
	if(isAUFlag && 0 == channel.systemCountry)
	{
		for(var i = 0; i < prAUValue.length; i++)
		{
			if(prAUValue[i] == parentRatingValue)
			{
				prAUIndex = i;
				break;
			}
			else if(0 == parentRatingValue)
			{
				prAUIndex = 0;
				break;
			}
		}
		$("parentRatingStatus").innerHTML = prAUList[prAUIndex];
	}
	else
	{
		$("parentRatingStatus").innerHTML = parentRatingWords[ratingPosition + rateOffsetForFrance];
	}
	if(currentCountry == 15)//norway
	{
		thdMenuRightLiList[2].style.display = "block";//Time interval lock
	}
	else
	{
		thdMenuRightLiList[2].style.display = "none";//Time interval lock
	}
	
	hotelEnable = top.g_factory.hotelEnable;
	if(hotelEnable == 1)
	{
		thdMenuRightLiList[5].style.display = "none";//panelLock
		thdMenuRightLiList[6].style.display = "none";//instLock
		thdMenuRightLiList[8].style.display = "none";//maxVolume
	}
	else
	{
		panelLock = setting.frontPanelLock;
		$("panelLockStatus").innerHTML = offOnWords[panelLock];
		
		instLock = setting.installLock;
		$("instLockStatus").innerHTML = offOnWords[instLock];
					
		maxVolume = setting.maxVolume;
		volume = channel.volume;
		$("maxVolumePgreLeft").style.width = parseInt(maxVolume*PROGRESS_WIDTH/100,10) + "px";
		$("maxVolumePgreRight").style.width = parseInt((100 - maxVolume)*PROGRESS_WIDTH/100,10) + "px";
		$("maxVolumeValue").innerHTML = maxVolume;
	}
}

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
var progressDivList;
var dialogButtonClassList;
var listFirstSpans;
function init()
{
	timeoutInit();
	dialogButtonClassList = $("cleanForm").getElementsByClassName("dialogButton");
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	progressDivList = $("adjustProgBar").getElementsByTagName("div");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	currentCountry = channel.systemCountry;
	for(var i = 0; i < 10; i++)
	{
		thdMenuRightSpanList[i].innerHTML = lockTitleWords[i];
	}
	
	//add for au
	isAUFlag = "AU" == setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") 
		? true : false;

	initUI();

	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	listFormLiList = $("listForm").getElementsByTagName("li");
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,findRealPosition(list_position_h), 0);
}
function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
}
function findRealPosition(position)
{
	var num = -1;
	for(var i=1;i<thdMenuRightLiList.length;i++)
	{
		//console.log("thdMenuRightLiList[i].style.display=="+thdMenuRightLiList[i].style.display);
		if(thdMenuRightLiList[i].style.display != "none")
		{
			num ++;
		}
		if(num == position)
		{
			return i-1;
		}
	}
}
var PROGRESS_START_LEFT_OFFSET = 270 + 310;//进度条容器开始位置相对于framework的左偏移，480是进度条的父容器的相对framwork的左偏移，310是进度条容器相对于进度条父容器的左偏移
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//menu
	for(var i = 1; i < 10; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					list_position_h = findRealPosition(parseInt(this.getAttribute("newAttr")));
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	//form
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "panelLock" || focusOn == "instLock" || focusOn == "parentRating")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("listUpImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "parentRating")
			{
				form_position_h = 0;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toUp();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	$("listDownImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "parentRating")
			{
				form_position_h = 4;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toDown();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	
	//clean
	for(var i = 0; i < 2; i++)
	{
		dialogButtonClassList[i].setAttribute("newAttr",i);
		dialogButtonClassList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){
				if(focusOn == "clean")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h*DLOG_BUTTON_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	//progress
	$("adjustProgMain").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "progressBar")
			{
				maxVolume = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
				if(maxVolume < 0)
				{
					maxVolume = 0;
				}
				else if(maxVolume > 100)
				{
					maxVolume = 100;
				}
				progressDivList[0].style.width = parseInt(maxVolume*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
				progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - maxVolume)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
				
				setting.maxVolume = maxVolume;
				$("adjustProgValue").innerHTML = maxVolume;
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
}

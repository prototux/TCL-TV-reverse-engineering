/******************** created by chenhua ***********************/
var chScanTitleWords 	= top.chOptions[0];
var chScanOptions 		= top.chScanOptions;
var tunerWords 			= top.tuner;
var countryIndex		= [1,83,2,3,4,5,6,28,7,8,9,//同初始化initEnvironmentSet中的 country_localCountry_index
							10,11,82,33,12,30,85,13,14,15,16,
							17,18,19,20,31,21,22,23,24,32,
							59,25];//其中>=58的是国家枚举中没有的东西
var STTLEnableCtryPstionInCtryIndex= [8/*Finland*/,20/*Norway*/,6/*Denmark*/,29/*Sweden*/,14/*Ireland*/,
										33/*United Kingdom*/,7/*Estonia*/];//STTL enable的国家在countryIndex数组中的位置。
var languageIndex 		= [5,18,9,24,10,0,2,36,22,9,5,
							8,13,6,6,12,33,279,5,14,15,16,
							17,19,18,21,25,20,7,23,5,35,
							468,6,];
var passwordWords 		= [top.others[2],top.passError];
var scaningWords		= [top.others[3]];
var chGenreWords		= top.chType;
var scanStatusWords		= top.chScanStatus;
var cleanChWords		= top.chCleanDes;
var yesNoWords 			= top.yesNo;
var countrysWords		= new Array(36);
for(var i = 0; i < 34; i++)
{
	countrysWords[i] = top.all_country[countryIndex[i]];
}

var favNetList;								//在favorite network select中使用
var favNetListSum		= 0;

document.onkeyup 		= keyUpProc;
document.onnotify 		= notifyProcess;
var channel 			= top.g_channel;
var setting				= top.g_setting;
var factory             = top.g_factory;


var hotelEnable         = 0;
var tunerLock           = 0;
var list_position_h 	= 0;				//主界面焦点位置
var form_position_h 	= 0;				//弹出页面焦点位置,在atv manual scan中0-2:焦点落在输入选择框系列上，3-4：焦点落在按钮上
var tuner 				= 0;				//0 cable,1 antena
var countryPosition 	= countryIndex.length-1;;				//country对应在countryIndex中的下标；默认为United Kingdom
var countrySum 			= countryIndex.length;
var offset      = 0;
var focusOn 			= "menu";			//menu,password,country,tuner,clean
var freqWords 			= new Array(6);
var sybWords 			= new Array(4);

var SUB_MENU_START 		= 130;				//三四级菜单焦点移动起始位置
var SUB_MENU_STEP 		= 70;				//三四级主菜单焦点移动的step
var FORM_STEP			= 80;				//弹出框焦点移动的step
var DLOG_BUTTON_START	= 200;				//对话框中的按钮焦点开始的位置
var DLOG_BUTTON_STEP	= 250;				//对话框中按钮焦点移动的step

var SCAN_FOCUS_START	= 10;				//搜台框输入框焦点起始位置

var channelListState	= 0;

/////////密码框使用
var passStringLength 	= 0;
var passString			= "";
var passFlag            = 0;

/////////搜台时使用
var scanningInfo;
var anologScanCount 	= 0;
var digitalScanCount 	= 0;
var progress 			= 0;
var PROGRESS_WIDTH		= (600 - 10);		//总长为400个像素，但是要去掉表示当前进度的原点：10个像素
var progressFlag 		= 0;				//在analog+digital时使用，这时的进度条分为两段来处理，0 表示前半段，1表示后半段
var mainFocus           = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];

var tunerShowWords = new Array();//要显示的搜台模式，因澳洲(AU)平台搜台方式没有EU那么多，所以在ini文件中配置了要显示的搜台方式
var tunerFlagWords = ["DVB-C","DVB-T","DVB-S"];//此数值跟tuner数据要对应，配置在ini文件中的搜台方式

var menuList =[
{name:"Country",param:function(){doCountry();},showFlag:1},
{name:"Tuner_mode",param:function(){doTuner_mode();},showFlag:1},
{name:"Automatic_search",param:function(){doAutomatic_search();},showFlag:1},
{name:"Automatic_update",param:function(){doAutomatic_update();},showFlag:1},
{name:"Analogue_manual_scan",param:function(){doAnalogue_manual_scan();},showFlag:1},
{name:"Dvb_manual_installation",param:function(){doDvb_manual_installation();},showFlag:1},
{name:"Satellite_antenna_setup",param:function(){doSatellite_antenna_setup();},showFlag:1},
{name:"Favorite_network_select",param:function(){doFavorite_network_select();},showFlag:1},
{name:"Clean_channel_list",param:function(){doClean_channel_list();},showFlag:1}
]

function notifyProcess(evt)
{
    var msg = evt.which;
	
//所有ＣＩ消息在搜台过程中不发相关的ci消息，这部分有底层去判断，代码此处直接默认处理即可，因为在搜台过程中这是不可能发生的事情
//powerOff消息不会在搜台的时候发送，这是由底层去判断，代码此处直接默认处理即可
//booking消息不会在搜台的时候发送，这是由底层去判断的，代码此处直接默认处理即可

    switch(msg)
    {
        case top.E_SS_NO_CI_MODULE:
        case top.E_SS_CI_PLUS_AUTHENTICATION:
        case top.E_CI_CARD_INSERTED:
        case top.E_CI_CARD_REMOVE:
        case top.E_CI_DATA_READY:
        case top.E_CI_EXIT_CI:
        case top.E_CI_UPGR_INPROGRESS:
        case top.E_CI_UPGR_NOT_INPROGRESS:
        case top.E_CI_OP_UPDATE_INFO:
        case top.E_CI_OP_UPDATE_CHANNEL:
        case top.E_CI_OP_UPDATE_NIT:
        case top.E_CI_END:
        case top.E_CI_MHEG_OPEN:
        case top.E_CI_MHEG_CLOSE:
        case top.E_CI_CAM_NAME_READY:
            break;
		default:
			top.systemEventProc(evt);
			break;
    }
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}
function keyproc(evt)
{channel.testLog("in channelScan keyproc");
	var ret = true;
	var keycode = evt.which;
	
	switch(keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt--更改county时的密码框
			if(top.virtualRemoteState == 0)
			{
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
			console.log("lqt---channelScan.js---clientX: "+clientX);
			console.log("lqt---channelScan.js---clientY: "+clientY);
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
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;
		case top.VK_UP:
			toUp();
			ret = false;
			break;
		case top.VK_RIGHT:
			toRight();
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
		case top.VK_BACK: //back
			toBack();
			break;
		default:
			top.keyDownProcess(evt);
			ret = true;
			break;
	}
	return ret;
}

/*
功能描述：专门用来处理数字键值的函数
参数：
全局变量：
*/
function keyUpProc(evt)
{
	var keycode = evt.which;
	switch(keycode)
	{
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
			if(focusOn == "password")
			{
				doCheckPassword(evt.which);
			}
			break;
		default:
			break;
	}
}

function $(id)
{
	return document.getElementById(id);
}


function toDown()
{
	if(focusOn == "menu")
	{
		if(list_position_h >= findMaxPosition())
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		refreshFocusOfMenuList();
	}
	else if(focusOn == "country")
    {
		if(form_position_h == 4 && (offset + form_position_h) == (countrySum-1))
		{
			offset=0;
			//更新焦点
			var i=0;
			for(i=0;i<5;i++)
			{
				listFormLiList[i].innerHTML = countrysWords[offset + i];
			}
			form_position_h=0;
			$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		}
		else if(form_position_h == 4 && (offset + form_position_h) < (countrySum-1))
		{
			offset++;
			var i=0;
			for(i=0;i<5;i++)
			{
				listFormLiList[i].innerHTML = countrysWords[offset + i];
			}
		}
		else
		{
			form_position_h++;
			$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		}
		
		if(offset > 0)
		{
			$("listUpImg").style.display = "block";
		}
		else
		{
			$("listUpImg").style.display = "none";
		}
		
		if((offset + 4) >= (countrySum - 1))
		{
			$("listDownImg").style.display = "none";
		}
		else
		{
			$("listDownImg").style.display = "block";
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
	else if(focusOn == "tuner")
    {
		if(form_position_h >= (tunerShowWords.length - 1))
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
}

function toUp()
{
	if(focusOn == "menu")
	{
		if(list_position_h <= 0)
		{
			list_position_h = findMaxPosition();
		}
		else
		{
			list_position_h--;
		}
		refreshFocusOfMenuList();
	}
	else if(focusOn == "country")
    {
		if(form_position_h == 0 && (offset + form_position_h) == 0)
		{
			offset = countrySum - 5;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = countrysWords[offset + i];
			}
			form_position_h = 4;
			$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		}
		else if(form_position_h == 0 && (offset + form_position_h) > 0)
		{
			offset--;
			var i=0;
			for(i=0;i<5;i++)
			{
				listFormLiList[i].innerHTML = countrysWords[offset + i];
			}
		}
		else if(form_position_h>0)
		{
			form_position_h--;			
			$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		}
		
		if(offset > 0)
		{
			$("listUpImg").style.display = "block";
		}
		else
		{
			$("listUpImg").style.display = "none";
		}
		
		if((offset + 4) >= (countrySum - 1))
		{
			$("listDownImg").style.display = "none";
		}
		else
		{
			$("listDownImg").style.display = "block";
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
	else if(focusOn == "tuner")
    {
		if(form_position_h <= 0)
		{
			form_position_h = (tunerShowWords.length - 1);
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
	
}

function toLeft()
{
	if(focusOn == "password")
	{
		if(passStringLength<1) return;
		else
		{
			passString = passString.substring(0,(passStringLength-1));
			$('passInputContent').innerHTML = $('passInputContent').innerHTML.substring(0,(passStringLength-1))+"_";
			passStringLength--;
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
	if(focusOn == "menu" || focusOn == "country" || focusOn == "tuner")
	{
		doEnter();
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
}

function doEnter()
{
	if(focusOn == "menu")
	{
		findFunction(list_position_h);
	}
	else if(focusOn == "country")
	{
		$("thdListFocus").src=mainFocus[0];
		$("countryDisplay").innerHTML=countrysWords[(offset + form_position_h)];
        $("listForm").style.display = "none";
        focusOn = "menu";
		setCountry();//setTimeout("setCountry()",15);
		offset = 0;
	}
	else if(focusOn == "tuner")
	{
		$("thdListFocus").src=mainFocus[0];
		$("tunerDisplay").innerHTML=tunerShowWords[form_position_h];
		$("listForm").style.display = "none";
        focusOn = "menu";
		setTuner();
	}
	else if(focusOn == "clean")
	{
		if(form_position_h == 0)
		{
			top.parentalLock=0;
	 		top.channelLock=0;
			if(top.recordStatusFlag==1)
			{
				top.g_pvr.recordStop();
				top.pvrCurrentTime=0;
				top.recordStatusFlag=0;
				top.pvrTotalTime=2*60*60;
				top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
				top.$("globleShow").contentWindow.hiddenRecord();
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.g_pvr.timeshiftStop();
				top.g_pvr.returnToLive();//返回实时播放页面
				top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
				top.timeShiftStatusFlag = 0;
				top.$("globleShow").contentWindow.hiddenTimeShift();
			}
			channel.cleanChannelList(0);//清除当前tuner下面的所有频道
	        channelListState = 0;
			menuList[8].showFlag = 0;//clean channel list
			refreshAllMenuListShow();
			//顺序不能改变，因为需要用到变量focusOn
			focusOn = "menu";
			toUp();//需要focus作为判断条件
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
		parent.$("subMenu1").contentWindow.init();
	}
	else if(focusOn == "password")
	{
		$("thdListFocus").src=mainFocus[0];
		$("passForm").style.display = "none";
		parent.showPage(2);
		focusOn = "menu";
	}
	else if(focusOn == "country")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		offset = 0;
        focusOn = "menu";
	}
	else if(focusOn == "tuner")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
        focusOn = "menu";
	}
}

function doCountry()
{
	$("thdListFocus").src=mainFocus[1];
	passFlag = 0;
	initPass();
	focusOn = "password";
}
function doTuner_mode()
{
	tunerLock = factory.tunerLock;
	hotelEnable = factory.hotelEnable;
	if((tunerLock) && (hotelEnable))
	{
		passFlag  = 1;
		initPass();
		focusOn = "password";
	}
	else
	{
		$("thdListFocus").src=mainFocus[1];
		initTuner();
		focusOn = "tuner";
	}
}
function doAutomatic_search()
{
	if(tuner == 0 || tuner == 1)
	{
		top.jumpToOperatePage("channelSetting/autoSearch.html");
	}
	else
	{
		top.jumpToOperatePage("channelSetting/satAutoSearch.html");
	}
}
function doAutomatic_update()
{
	top.jumpToOperatePage("channelSetting/autoUpdate.html");
}
function doAnalogue_manual_scan()
{
	top.jumpToOperatePage("channelSetting/manualSearch.html?0");
}
function doDvb_manual_installation()
{
	if(tuner == 0)
	{
		top.jumpToOperatePage("channelSetting/manualSearch.html?1");//cable
	}
	else if(tuner == 1)
	{
		top.jumpToOperatePage("channelSetting/manualSearch.html?2");//antenna
	}
	else
	{
		top.jumpToOperatePage("channelSetting/satManualSearch.html");
	}
}
function doSatellite_antenna_setup()
{
	parent.jumpPage(3,"channelSetting/satAntennaSet.html");
}
function doFavorite_network_select()
{
	if(favNetListSum <= 1)
	{
		//clean channel list
		initCleanDialog();
		focusOn = "clean";
	}
	else
	{
		parent.jumpPage(3,"channelSetting/dtvFavNetList.html");
	}
}
function doClean_channel_list()
{
	initCleanDialog();
	focusOn = "clean";
}

function findFunction(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			menuList[i].param();
			break;
		}
	}
}
function findName(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			return menuList[i].name;
		}
	}
}
function findPosition(name)
{
	var position=0;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].name==name)
		{
			break;
		}
		if(menuList[i].showFlag==1)
		{
			position++;
		}
	}
	return position;
}
function findMaxPosition()
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
	}
	return num;
}
function findPositionOfTagIndex(index)
{
	var num=-1;
	for(var i = 0;(i <= index) && (i < menuList.length);i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
	}
	return num;
}
function refreshFocusOfMenuList()
{
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
}


/*
功能描述：初始化密码框
参数：
全局变量：passString；passStringLength；
*/
function initPass()
{	
	$('passTitle').innerHTML = passwordWords[0];
	$("passInputTitle").innerHTML = passwordWords[0];
	passString="";
	passStringLength = 0;
	$('passInputContent').innerHTML="_";
	$("passRemind").innerHTML = "";
	$("passForm").style.display = "block";
	parent.hiddenPage(2);
	top.showDialogPosition($("passForm"),800,350,1920,1080,0,0);
}

/*
功能描述：根据密码框中输入的数字来做相应的判断和处理
参数：which，按键值
全局变量：passString;passStringLength;top.g_superPassword
*/
function doCheckPassword(which)
{
	/*
	需要说明的是String.fromCharCode(which)的值总是大写的，因为onkeyup和onkeydown事件不能主动判断键盘的大小写，onkeypress可以判断大小写。其中只有onkeyup事件能获取键盘按下去后的结果值，因为此处需用到要清除键盘按下去后的值，所以只能用onkeyup事件，考虑到遥控器只有数字键，没有大小写之分，所以够用了
	*/
	if(which>=48 && which<=57)
	{
			passString = passString+String.fromCharCode(which);
			$('passInputContent').innerHTML = $('passInputContent').innerHTML.substring(0,passStringLength)+"*"+"_";
			passStringLength++;
			var length = passString.length;
			if(length==4)
			{
				if(passString != setting.password &&  passString != top.g_superPassword/*setting.checkPassword(passString)!= 1*/)
				{
					$('passRemind').innerHTML = passwordWords[1];
					passString="";
					$('passInputContent').innerHTML="_";
					passStringLength=0;
				}
				else
				{
					$("passForm").style.display = "none";
					if(top.virtualRemoteState == 1)
					{
						//隐藏虚拟遥控器--lqt
						top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
					}
					if(passFlag  == 0)
					{
						focusOn = "country";
						initCountry();
					}
					else
					{
						focusOn = "tuner";
						initTuner();
					}
					parent.showPage(2);
				}
			}
	}
}

/*
功能描述：初始化国家选择选项列表框
参数：
全局变量：form_position_h;countryPosition
*/
function initCountry()
{
	form_position_h = 0;
	var i=0;
	if(countryPosition > 4)
	{
		form_position_h = 4;
		offset = countryPosition - form_position_h;/*
		for(i=0;i<5;i++)
		{
			listFormLiList[i].innerHTML = countrysWords[offset + i];
		}*/
	}
	else
	{
		offset=0;
		form_position_h = countryPosition;/*
		for(i=0;i<5;i++)
		{
			listFormLiList[i].innerHTML = countrysWords[offset + i];
		}*/
	}
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,countrysWords,countryIndex.length,form_position_h,offset);
				
}

/*
功能描述：设置一些国家属性更改后需要变更的系统属性
参数：
全局变量：countryPosition;
*/
function setCountry()
{
	countryPosition = offset + form_position_h;
	channel.systemCountry = countryIndex[countryPosition];
	setting.firstAudioLanguage = languageIndex[countryPosition];
	setting.firstSubtitleLanguage = languageIndex[countryPosition];
	setting.teletextLanguage = languageIndex[countryPosition];
	if(countryPosition == 9)//france
	{
		if(setting.parentalRating == 0)
		{
			setting.parentalRating = 18;
		}
	}
	var i = 0;
	for(i = 0; i < STTLEnableCtryPstionInCtryIndex.length; i++)
	{
		if(countryPosition == STTLEnableCtryPstionInCtryIndex[i])
		{
			setting.enableSubtitle=1;
			break;
		}
	}
	if(i == STTLEnableCtryPstionInCtryIndex.length)
	{
		setting.enableSubtitle=0;
		if(28== countryPosition)/*spain*/
		{
			setting.hbbTVMode = 1;
		}
	}
}

/*
功能描述：初始tuner选项列表框
参数：
全局变量：form_position_h;tuner
*/
function initTuner()
{
	form_position_h = tunerPositionTosTuner(tuner);
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,tunerShowWords,tunerShowWords.length,form_position_h,0);
				
}

/*
功能描述：设置一些tuner mode 更改后需要变更的系统属性和UI状态
参数：
全局变量：tuner;form_position_h；channelListState
*/
function setTuner()
{
	console.log("YM setTuner form_position_h:" + form_position_h);
	tuner = sTunerPositionToTuner(form_position_h);
	console.log("YM setTuner tuner:" + tuner);
	channel.tunerMode = tuner;
	optionContentSpanList[5].innerText = chScanOptions[5][tuner];
	initOptionShowStatus(tuner);
}

/*
功能描述：初始化clean channel list dialog
参数：
全局变量：countryPosition;
*/
function initCleanDialog()
{
	$("cleanTitle").innerHTML = chScanOptions[8];
	$("cleanContent").innerHTML = cleanChWords;
	var cleanDivList = $("cleanForm").getElementsByTagName("div");
	cleanDivList[0].innerHTML = yesNoWords[0];
	cleanDivList[1].innerHTML = yesNoWords[1];
	form_position_h = 1;
	$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h*DLOG_BUTTON_STEP + "px";
	$("cleanForm").style.display = "block";
	parent.hiddenPage(2);
	top.showDialogPosition($("cleanForm"),800,250,1920,1080,0,0);
}

/*
功能描述：获取系统当前国家在页面显示的国家列表中的下标位置
参数：
全局变量：countryPosition;
*/
function fixCountryFocus()
{
    var index = channel.systemCountry;
    for (var i=0; i<countryIndex.length; i++)
    {
        if (countryIndex[i] == index)
        {
            countryPosition = i;
            break;
        }
    }
}

/*
功能描述：显示选项中某些项显示状态
参数：value:tuner
全局变量：channelListState;tuner
*/
function initOptionShowStatus(value)
{
	for(var i = 0; i < menuList.length; i++)
	{
		menuList[i].showFlag = 1;
	}
	if(top.recordStatusFlag == 1 || top.timeShiftStatusFlag == 1 || channel.inputUnlockState(channel.inputSource) == 1)
	{
		menuList[1].showFlag = 0;//tuner
		menuList[2].showFlag = 0;//auto search
		menuList[3].showFlag = 0;//auto update
		menuList[4].showFlag = 0;//analog manual
		menuList[5].showFlag = 0;//dtv manual
		menuList[6].showFlag = 0;//satellite setup
		menuList[7].showFlag = 0;//favorite network id
		menuList[8].showFlag = 0;//clean channel list
	}
	else
	{
		if(tuner == 0)//cable
		{
			menuList[3].showFlag = 0;//auto update
			menuList[4].showFlag = 0;//analog manual
			menuList[6].showFlag = 0;//satellite setup
			menuList[7].showFlag = 0;//favorite network id
		}
		else if(tuner == 1)
		{
			menuList[6].showFlag = 0;//satellite setup
			
			var tStr = channel.dtvFavNetList();
			top.Log("channel.dtvFavNetList() = " + tStr);
			if(tStr == "")
			{
				favNetListSum = 0;
			}
			else
			{
				favNetList = tStr.split("#");
				favNetListSum = favNetList.length;
			}
			top.Log("favNetListSum = " + favNetListSum);
			if(favNetListSum <= 1)
			{
				menuList[7].showFlag = 0;//favorite network id
			}
		}
		else if(tuner == 2)//satellite
		{
			menuList[3].showFlag = 0;//auto update
			menuList[4].showFlag = 0;//analog manual
			menuList[7].showFlag = 0;//favorite network id
		}
		
		channelListState = channel.channelProgramStatus();
		if(channelListState == 0)
		{
			menuList[8].showFlag = 0;//clean channel list
		}
	}
	refreshAllMenuListShow();
}

/*
提供给autoSearch在antenna搜台完成后判断dtvFavNetListSum > 1时要跳转到选择favorite network时调用
*/
function directToDtvFavNetListHtml()
{
	initOptionShowStatus(tuner);
	top.$("main").style.display = "block";
	top.$("main").contentWindow.subMenu2.focus();
	top.$("main").contentWindow.setIndexFocusPage("subMenu2");
	top.$("main").contentWindow.$("subMenu2").contentWindow.timeoutInit()
	top.$("operatePage").src = "";
	
	list_position_h = 6;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	doEnter();
}

function uninit()
{
		parent.$("subMenu1").contentWindow.init();
		channel.testLog("--------------->uninit------------------>")
}

function initAllMenuList()
{
	optionContentSpanList[0].innerHTML = chScanOptions[0];
	optionContentSpanList[1].innerHTML = chScanOptions[1];
	optionContentSpanList[2].innerHTML = chScanOptions[2];
	optionContentSpanList[3].innerHTML = chScanOptions[3];
	optionContentSpanList[4].innerHTML = chScanOptions[4];
	optionContentSpanList[5].innerHTML = chScanOptions[5][tuner];
	optionContentSpanList[6].innerHTML = chScanOptions[6];
	optionContentSpanList[7].innerHTML = chScanOptions[7];
	optionContentSpanList[8].innerHTML = chScanOptions[8];
	
	
	fixCountryFocus();
	$("countryDisplay").innerHTML = countrysWords[countryPosition];
	$("tunerDisplay").innerHTML = tunerWords[tuner];
	
	initOptionShowStatus(tuner);
}

function refreshAllMenuListShow()
{
	for(var i = 0; i< menuList.length; i++)
	{
		if(menuList[i].showFlag == 0)
		{
			optionContentLiList[i].style.display = "none";
		}
		else
		{
			optionContentLiList[i].style.display = "block";
		}
	}
}

var optionContentLiList;
var listFormLiList;
var optionContentSpanList;
var channelCleanButtonClassList

//初始化AU配置，主要是语言和国家
function initAuData()
{
	countryIndex	=[0,1,83,2,3,4,5,6,28,7,8,9,//au增加两个国家--澳大利亚,新西兰(0,26)
					10,11,82,33,12,30,85,13,14,26,15,16,
					17,18,19,20,31,21,22,23,24,32,
					59,25,];				
	languageIndex 	=[6,5,18,9,24,10,0,2,36,22,9,5,
					8,13,6,6,12,33,279,5,14,6,15,16,
					17,19,18,21,25,20,7,23,5,35,
					468,6];		//同语言对应(选择国家后audiolang，Subtitle，teletext对应的语言在语言数组中的位置);
	countrySum = countryIndex.length;		
	for(var i = 0; i < countryIndex.length; i++)
	{
		countrysWords[i] = top.all_country[countryIndex[i]];
	}
}

function init()
{
	//top.g_channel.testLog("in channelScan init g_nextHtmlPage = " + top.g_nextHtmlPage);
	if(setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//澳洲平台 重新初始化变量
	{
		initAuData();
	}

	channelCleanButtonClassList = $("cleanForm").getElementsByClassName("dialogButton");
	optionContentLiList = $("optionContent").getElementsByTagName("li");
	listFormLiList = $("listForm").getElementsByTagName("li");
	tuner = channel.tunerMode;
	$("titleContent").getElementsByTagName("span")[0].innerText = chScanTitleWords;
	optionContentSpanList = $("optionContent").getElementsByTagName("span");
	
	initAllMenuList();
	addMouseListener();
	if(top.g_nextHtmlPage == "autoSearch.html")
	{
		list_position_h = findPosition("Automatic_search");
		console.log("LINE=976 -----list_position_h==="+list_position_h);
		refreshFocusOfMenuList();
		doEnter();
	}
	else if(top.g_nextHtmlPage == "autoUpdate.html")
	{
		list_position_h = findPosition("Automatic_update");
		console.log("LINE=982 -----list_position_h==="+list_position_h);
		refreshFocusOfMenuList();
		top.g_nextHtmlPage = "";
		doEnter();
	}
	else
	{
		timeoutInit();
	}
	refreshFocusOfMenuList();
	
	initTunerShow();

}

function initTunerShow()
{
	var num = 0;
	for(var i = 0;i<tunerWords.length;i++)
	{
		if(setting.getProperty("ro.sita.model.LiveTV." + tunerFlagWords[i],"TRUE") == "TRUE")
		{
			tunerShowWords[num] = tunerWords[i];
			num++;
		}
	}
}

/*
功能描述:把tuner在tuner数组中的元素的位置对应到showTuner数组中去
tuner:表示tuner数组中的位置
return:参数tuner数组中tuner位置元素对应在showTuner中的位置
*/
function tunerPositionTosTuner(tuner)
{
	var position = 0;
	for(var i=0;i<tunerShowWords.length;i++)
	{
		if(tunerShowWords[i] == tunerWords[tuner])
		{
			position = i;
			return position;
		}		
	}
	
	return position;
}

/*
功能描述:把form_position_h在showTuner数组中的元素的位置对应到showTuner数组中去
form_position_h:表示showTuner数组中的位置
return:参数showTuner数组中form_position_h位置元素对应在tuner中的位置
*/
function sTunerPositionToTuner(form_position_h)
{
	var position = 0;
	for(var i=0;i<tunerWords.length;i++)
	{
		if(tunerShowWords[form_position_h] == tunerWords[i])
		{
			position = i;
			return position;
		}
	}
	
	return position;
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		top.timeoutFuc.osdTimeoutStartFuc();
		if(evt.button == 2){
			toBack();
		}

	}
	
	for(var i = 0; i < 9; i++)
	{
		optionContentLiList[i].setAttribute("newAttr",i);
		optionContentLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					var number = findPositionOfTagIndex(parseInt(this.getAttribute("newAttr")));
					if(number >= 0)
					{
						list_position_h = number;
						$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
						doEnter();
					}
				}
			}
		}
	}
	
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusOn == "country" || focusOn == "tuner")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
		}
	}
	$("listUpImg").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusOn == "country")
			{
				form_position_h = 0;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toUp();
			}
		}
	}
	$("listDownImg").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusOn == "country")
			{
				form_position_h = 4;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toDown();
			}
		}
	}
	
	
	for(var i = 0; i < 2; i++)
	{
		channelCleanButtonClassList[i].setAttribute("newAttr",i);
		channelCleanButtonClassList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusOn == "clean")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h*DLOG_BUTTON_STEP + "px";
					doEnter();
				}
			}
		}
	}
}

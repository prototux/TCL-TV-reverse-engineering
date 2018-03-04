/******************************************************************************
*Description: 频道列表, 显示频道列表
*Author:    liuweifang
*Date:  2012.10.16
*Others:
******************************************************************************/
top.keySetForUI(1);           
var channel_type_icon          = ["images/icon_A_focus.png",// 模拟
                         "images/icon_D_focus.png",// 数字
                         "images/icon_R_focus.png",//radio
                         "images/icon_T_focus.png",// T
						 "images/icon_T_focus.png",// T
						 "images/icon_T_focus.png",// T
						 "images/icon_S_focus.png"// T
			];
var chaListConName             = top.chListWords;
var tuner				       = top.tuner;
var chListType				   = top.chListType;
//当前第几个频道
//定义当前页显示元素
var PAGE_MAX                   = 9;
var FOCUS_INIT_VALUE           = 148;
var FOCUS_STEP                 = 80;
var focusTop                   = FOCUS_INIT_VALUE ;//用来该表焦点的像素值
var positionV                  = 0;//焦点游标位置，焦点显示位置
var focusType                  = "Channellist";
var channelListType            = 0;//后续需要保存在数据库中记录
var pressBlueNumber            = 0
var channel                    = top.g_channel;
var setting					   = top.g_setting;
var channelList                = 0;
var tunerMode                  = channel.tunerMode; //0 cable 1 ant
var service_type               = 0; //1 tv 2 radio
var channelUpOrdown            = 0;
var playTimer                  = 0;
var index                      = 0;
var currentChannelListType     = 0;
var satelliteList;
var satelliteId                = 0;
var satellitePageCount         = 0;
var satelliteCurrentPage       = 0;

var factory                    = top.g_factory;
var favoriteListDisable        = 0;
var hotelEnable                = 0;
var disableFlag                = 1;
var tunerLock                  = 0;
var noChannelListRemind        = top.noChannelListRemind;
var favImg                     = ["images/icon_fav_focus.png","images/option/check_2.png","images/option/check_3.png"];
var swapChannel                = "";
var selectSortNumber           = 0;

var tunerShowWords = new Array();//要显示的搜台模式，因澳洲(AU)平台搜台方式没有EU那么多，所以在ini文件中配置了要显示的搜台方式
var tunerFlagWords = ["DVB-C","DVB-T","DVB-S"];//此数值跟tuner数据要对应，配置在ini文件中的搜台方式


//lqt---增加ChannelList页对媒体中心键的支持--3
var usbLock                     = 0;
var factory                     = top.g_factory;
var hotelEnable                 = 0;


/******************************************
*初始化函数
*******************************************/
function initUI()
{

	showOpList();
	var spans=$("channelTunerMode").getElementsByTagName("span");
	//spans[0].innerHTML=tuner[0];
	//spans[1].innerHTML=tuner[1];
	//spans[2].innerHTML=tuner[2];
	
	

	for(var i=0;i<tunerShowWords.length;i++)
	{
		spans[i].innerHTML = tunerShowWords[i];
	}
	
	if(tunerShowWords.length < tuner.length)//隐藏不显示的li  add yums
	{
		var tunerModeLi = $("channelTunerMode").getElementsByTagName("li");
		for(var i=tunerShowWords.length;i<tuner.length;i++)
		{
			tunerModeLi[i].style.display = "none";
		}
	}
}

function initTunerShow()
{
	var num = 0;
	for(var i = 0;i<tuner.length;i++)
	{
		if(setting.getProperty("ro.sita.model.LiveTV." + tunerFlagWords[i],"TRUE") == "TRUE")
		{
			tunerShowWords[num] = tuner[i];
			num++;
		}
	}
}

function init()
{
	
	//虚拟遥控器的场景设置--lqt
	top.RemoteConntrolType = "CH";
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	timeoutInit();
	initTunerShow();
	
	favoriteListDisable = factory.favoriteListDisable;
	hotelEnable = factory.hotelEnable;
	tunerLock = factory.tunerLock;
	disableFlag = 1;
	if((favoriteListDisable) && (hotelEnable) && (disableFlag))
	{
		channelListType = channel.channelListType;
		currentChannelListType = channelListType;
		toSelectListType();
	}
	else
	{
		var tChannel = channel.getCurrentChannelInfo();
		if(tChannel.isSkip)
		{
			index = channel.nextIndex;
		}
		else
		{
			index = tChannel.index;
		}
		channelListType = channel.channelListType;
		currentChannelListType = channelListType;
		if(tunerMode==2)
		{
			
			if(channelListType==6)
			{
				satelliteList = channel.getSatelliteSelectList();
				satelliteId = channel.currentSatelliteId; 
				var i=0;
				for(;i<satelliteList.length;i++)
				{
					if(satelliteList[i].id==satelliteId)
					{
						break;
					}
				}
				if(i<satelliteList.length)
				{
					$("channelListName").innerHTML=chaListConName[0]+" - "+satelliteList[i].name;
				}
				else
				{
					channelListType=0;
					currentChannelListType=0;
					channel.channelListType=channelListType;
					$("channelListName").innerHTML=chaListConName[0]+" - " + chListType[channelListType];
				}
			}
			else
			{
				$("channelListName").innerHTML=chaListConName[0]+" - " + chListType[channelListType];
			}
	
		}
		else
		{
			$("channelListName").innerHTML=chaListConName[0]+" - " + chListType[channelListType];
		}
		channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
		var length = channelList.length;
		if (length > 0)
		{
			 if(length<=PAGE_MAX)
			 {
				var listIndex=0;
				for(;listIndex<PAGE_MAX && listIndex < length;listIndex++)
				{
					if(index==channelList[listIndex].index)
					{
						break;
					}
				}
				if(listIndex == length)
				{
					listIndex = 0;
				}
				positionV=listIndex;
				focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
				$("focus").style.top = focusTop+"px";
				$("focus").style.display = "block";
				$("listDownRemind").style.display = "block";
		        $("listUpRemind").style.display = "block";
                $("listLeftRemind").style.display = "block";
                $("listRightRemind").style.display = "block";
				var channelBox = $("channelList").getElementsByTagName("ul")[0];
				var lis = channelBox.getElementsByTagName("li");
				//判断当前频道是否够显示一页
				for (var i=0; i<PAGE_MAX; i++)
				{
					var divs = lis[i].getElementsByTagName("div");
					var imgs = lis[i].getElementsByTagName("img");
					
					if (i<length)
					{
						lis[i].style.display="block";
						divs[0].innerText = channelList[i].number;
						divs[1].innerText = channelList[i].name;
						imgs[1].src = channel_type_icon[channelList[i].serviceType];
						if(channelList[i].isFavorite==1)
						{
							$("channelFav"+i).style.display="block";
							$("channelFav"+i).src=favImg[0];
						}
						else
						{
							$("channelFav"+i).style.display="none";
						}
					}
					else
					{
						lis[i].style.display="none";
					}
				}
			 }
			 showChannelPF();
		}
		else
		{
            var channelBox = $("channelList").getElementsByTagName("ul")[0];
            var lis = channelBox.getElementsByTagName("li");
            for(var i=0 ; i<PAGE_MAX ; i++)
            {
                lis[i].style.display="none";
            }
            $("focus").style.display = "none";
            $("listDownRemind").style.display = "none";
            $("listUpRemind").style.display = "none";
            $("listLeftRemind").style.display = "none";
            $("listRightRemind").style.display = "none";
		}
		initUI();
		showNoChannelRemind();
	}
	addMouseListener();
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(0);
    }
}
function updateCIChannelList()
{
	channelListType = channel.channelListType;
	currentChannelListType = channelListType;
	index = channel.currentIndex;
	channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
    var length = channelList.length;
    if (length > 0)
    {
		 if(length<=PAGE_MAX)
		 {
			var listIndex=0;
			for(;listIndex<PAGE_MAX && listIndex < length;listIndex++)
			{
				if(index==channelList[listIndex].index)
				{
					break;
				}
			}
			if(listIndex == length)
			{
				listIndex = 0;
			}
			positionV=listIndex;
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
			$("focus").style.display = "block";
			$("listDownRemind").style.display = "block";
			$("listUpRemind").style.display = "block";
            $("listLeftRemind").style.display = "block";
            $("listRightRemind").style.display = "block";
			var channelBox = $("channelList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
			//判断当前频道是否够显示一页
			for (var i=0; i<PAGE_MAX; i++)
			{
				var divs = lis[i].getElementsByTagName("div");
				var imgs = lis[i].getElementsByTagName("img");
				
				if (i<length)
				{
					lis[i].style.display="block";
					divs[0].innerText = channelList[i].number;
					divs[1].innerText = channelList[i].name;
					imgs[1].src = channel_type_icon[channelList[i].serviceType];
					if(channelList[i].isFavorite==1)
					{
						$("channelFav"+i).style.display="block";
						$("channelFav"+i).src=favImg[0];
					}
					else
					{
						$("channelFav"+i).style.display="none";
					}
				}
				else
				{
					lis[i].style.display="none";
				}
			}
		 }

    }
    else
    {
        var channelBox = $("channelList").getElementsByTagName("ul")[0];
        var lis = channelBox.getElementsByTagName("li");
        for(var i=0 ; i<PAGE_MAX ; i++)
        {
            lis[i].style.display="none";
        }
        $("focus").style.display = "none";
        $("listDownRemind").style.display = "none";
        $("listUpRemind").style.display = "none";
        $("listLeftRemind").style.display = "none";
        $("listRightRemind").style.display = "none";
    }
	$("channelListName").innerHTML=chaListConName[0]+" - " + chListType[channelListType];
	showOpList();
	showChannelPF();
	showNoChannelRemind();
}

document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;//alert("msg = " + msg)
	//全局消息
	switch(msg)
	{
		
		case top.E_CI_OP_UPDATE_INFO://CMD_UI_NOTIFY_CI_OP_UPDATE_INFO,根据情况跟心列表
			if(setting.ciChannelListType == 1)
			{
				window.location.href = "channelList.html";
			}
			break;
		case top.E_CHANNEL_PLAY_END://channel change success end
		    top.frames["main"].window.notifyProcess(evt);
			index = channel.currentIndex;
			break;
		case top.E_CHANNEL_LIST_UPDATE:
		   channel.testLog("sun >>>>>>msg="+msg);
			updateCIChannelList();
			top.systemEventProc(evt);
			break;
		case top.E_SS_NO_CI_MODULE:
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_SIGNAL_UNLOCK://unlock signal
		case top.E_SIGNAL_LOCK://lock signal
		case top.E_PVR_NO_SIGNAL:
		case top.E_DTV_SS_RUNNING_STATUS_NOT_RUNNING:
		case top.E_SS_COMMON_VIDEO:// service ready
		case top.E_SIGNAL_FORMAT_CHANGED:
		case top.E_OBTAIN_DIGITAL_AUDIO_INFO:
		case top.E_SS_UNSUPPORTED_FORMAT:
			top.frames["main"].window.notifyProcess(evt);
			break;
		case top.E_SS_CH_BLOCK://channel lock
			top.channelLock = 1;
			top.frames["main"].window.notifyProcess(evt);
			top.clearMyTimeout();
			top.main.focus();
			top.menu_visible_status = 0;
			top.$("operatePage").src = "";
			break;
		case top.E_SS_PARENTAL_BLOCK://有节目锁
			top.parentalLock = 1;
			top.frames["main"].window.notifyProcess(evt);
			top.clearMyTimeout();
			top.main.focus();
			top.menu_visible_status = 0;
			top.$("operatePage").src = "";
			break;
		case top.E_DTV_SS_INPUT_BLOCK://input lock
			top.inputLock = 1;
			top.frames["main"].window.notifyProcess(evt);
			top.clearMyTimeout();
			top.main.focus();
			top.menu_visible_status = 0;
			top.$("operatePage").src = "";
			break;
		case top.E_CI_CAM_NAME_READY:
		case top.E_CI_DATA_READY:
		    top.clearMyTimeout();
			top.main.focus();
			top.menu_visible_status = 0;
			top.$("operatePage").src = "";
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_USB_INSERTED:
		top.$("operatePage").src = "";
		top.systemEventProc(evt);
		break;
		default:
			top.systemEventProc(evt);
			break;
	}
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyOpFuc;
	top.timeoutFuc.osdTimeoutStartOpFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}
function keyproc(evt)
{
		var ret = true;
		var keycode = evt.which;
		switch (keycode)
		{
		
			case top.VK_VIRTUAL_REMOTE:
				//显示或者不显示--lqt--EPG
				top.Log("lqt--channelList.js--VK_VIRTUAL_REMOTE");
				if(top.virtualRemoteState == 0)
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("CH");
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
				console.log("lqt---channelList.js---clientX: "+clientX);
				console.log("lqt---channelList.js---clientY: "+clientY);
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
			{
				//up
				onUp();
				ret = false;
				break;
			}	
			case top.VK_DOWN:
			{
				//down
				onDown();
				ret = false;
				break;
			}	
			case top.VK_ENTER:
			{
				//OK 键
				onOK();
				ret = false;
				break;
			}
			case top.VK_LEFT:
			{
				onLeft();
				ret = false;
				break; 
			}//右键  
			case top.VK_RIGHT:
			{
				onRight();
				ret = false;
				break;
			}
			case top.VK_RED://67
			{
				if(focusType=="Channellist" || focusType == "NoChannellist")
				{
					toSelectListType();
				}
			   ret = false;
			   break;
			}
			case top.VK_GREEN://69
			{
				if(focusType=="Channellist"&&channelList.length>0)
				{
					if(favoriteListDisable == 0)
					{
						toGreen();
					}
				}
				ret = false;
				break;
			}
			case top.VK_YELLOW:
			{
				//channel.testLog("====focusType:"+focusType+"=====tunerLock:"+tunerLock);
				
				if(focusType=="Channellist" || focusType == "NoChannellist")
				{
					if(tunerLock == 0)
					{
						toSelectTuner();
					}
				}
				else if(focusType=="EditChannellist")
				{
					toYellow();
				}
				break;
			}
			case top.VK_BLUE:
			{
				toBlue();
			}
			break;
			case top.VK_MENU: //menu
				//lqt
				if(top.virtualRemoteState == 1)
				{
					//更改键值
					top.g_setting.setProperty("app.ui.virtualRemote.state","off");
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
				}
			case top.VK_BACK: //back
			case top.VK_LIST: //list
				if(top.g_isUsedHotKeyToIntoPage == 1)
				{
					top.$("main").src="channelPlay.html"
					top.main.focus();
					top.$("operatePage").src="";
				}
				else
				{
					top.$("main").src="index.html"
					top.main.focus();
					top.$("operatePage").src="";
				}
				ret = false;
				break;
			case top.VK_0:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?0"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_1:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?1"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_2:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?2"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_3:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?3"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_4:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?4"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_5:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?5"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_6:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?6"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_7:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?7"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_8:
			{
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?8"
				top.main.focus();
				top.$("operatePage").src="";
				break;
			}
			case top.VK_9:
			{
			    top.$("operatePage").src="";
				top.playNumFromHref="channelList.html";
				top.$("main").src="channelPlay.html?9"
				top.main.focus();
				break;
			}
			case top.VK_MEDIA://RC72遥控器的媒体中心键---lqt
				console.log("-------lqt----channelList.js----VK_MEDIA----");
				if(top.virtualRemoteState == 1)
				{
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
				}
				top.$("operatePage").src = "";
				usbLock = factory.usbLock;
				hotelEnable = factory.hotelEnable;
				top.hotkeysIntoUSB = true;
				if((usbLock) && (hotelEnable))
				{
					top.$('main').src = "password.html?usbLock";
					top.main.focus();
					top.setFrameFocusPage("main");
				}
				else
				{
					console.log("-------lqt----channelList.js--else--VK_MEDIA----");
					top.$('main').src = "deviceList.html";
					top.main.focus();
					top.setFrameFocusPage("main");
				}
				break; 	
			case top.VK_CHANNEL_DOWN://channel -
			case top.VK_CHANNEL_UP://channel +
			{
				//lqt
				if(top.virtualRemoteState == 1)
				{
					//更改键值
					top.g_setting.setProperty("app.ui.virtualRemote.state","off");
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
				}
				channel.resetChannelListType(currentChannelListType);
			}
			default:
			{
				top.keyDownProcess(evt);
				break;
			}
		}
		return ret;
}

//得到标签元素
function $(id)
{
		return document.getElementById(id);
}
function showOpList()
{
	if((focusType=="EditChannellist" || focusType=="Channellist")&&channelList.length>=PAGE_MAX)
	{
		$("listUpRemind").style.display = "block";
		$("listDownRemind").style.display = "block";
        $("listLeftRemind").style.display = "block";
        $("listRightRemind").style.display = "block";
	}
	else if(focusType=="listType"&&tunerMode==2&&satelliteList.length>PAGE_MAX-4)
	{
		$("listUpRemind").style.display = "block";
		$("listDownRemind").style.display = "block";
        $("listLeftRemind").style.display = "block";
        $("listRightRemind").style.display = "block";
	}
	else
	{
		$("listUpRemind").style.display = "none";
		$("listDownRemind").style.display = "none";
        $("listLeftRemind").style.display = "none";
        $("listRightRemind").style.display = "none";
	}
	var spans=$("channelListOp").getElementsByTagName("span");
	var imgs=$("channelListOp").getElementsByTagName("img");
	if(focusType=="EditChannellist")
	{
		spans[0].innerHTML="";
		spans[1].innerHTML="";
		imgs[0].style.display = "none";
		imgs[1].style.display = "none";
		spans[2].innerHTML=top.timeshiftInitButtons[2];
		spans[3].innerHTML=top.timeshiftInitButtons[4];
		imgs[2].style.display = "block";
		imgs[3].style.display = "block";
		return;
	}
	imgs[0].style.display = "block";
	spans[0].innerHTML=chaListConName[1];
	if(((favoriteListDisable) && (hotelEnable)) || (channelList.length<=0))
	{
		spans[1].innerHTML="";
		imgs[1].style.display = "none";
	}
	else
	{
		imgs[1].style.display = "block";
		if(positionV>=channelList.length)
		{
			spans[1].innerHTML=chaListConName[3];
		}
		else
		{
			if(channelList[positionV].isFavorite==1)
			{
				spans[1].innerHTML=chaListConName[4];
			}
			else
			{
				spans[1].innerHTML=chaListConName[3];
			}
		}
	}
	if((tunerLock) && (hotelEnable))
	{
		spans[2].innerHTML="";
		imgs[2].style.display = "none";
	}
	else
	{
		imgs[2].style.display = "block";
		spans[2].innerHTML=chaListConName[2];
	}
	if(focusType=="Channellist"&&channelListType==5&&channelList.length>1)
	{
		imgs[3].style.display = "block";
		spans[3].innerHTML=chaListConName[7];
	}
	else
	{
		imgs[3].style.display = "none";
		spans[3].innerHTML="";
	}
}
function onOK()
{
	if(focusType=="Channellist")
	{
		if(channel.currentIndex!=channelList[positionV].index)
		{
			if(top.recordStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
				top.$('main').src = "pvr/Pvr.html?channelChange&"+channelList[positionV].index;
				top.main.focus();
				top.$("operatePage").src="";
				return;
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?channelChange&"+channelList[positionV].index;
				top.main.focus();
				top.$("operatePage").src="";
				return;
			}
			top.$("main").contentWindow.showChannelNumber(channelList[positionV].number,channelList[positionV].name);
			top.$("main").contentWindow.$("program_audio").innerText = "";
			top.$("main").contentWindow.$("sound_channel_text").innerText = "";
			top.g_openMheg5State=0;
			setTimeout(function(){
				top.frames["main"].window.channelChangeStatus = 1;
				var panel = top.currentPanel;
					if(panel==1)
					{
						if(top.g_setting.pic3DMode!=0)
						{
							top.g_setting.pic3DMode=0;
							top.$("globleShow").contentWindow.hiddenGlassRemind();
						}
					}else if(panel==2)
					{
						if(top.g_setting.pic3DMode!=0)
						{
							top.g_setting.pic3DMode=0;
						}
					}
				top.currentChannelIndex = channelList[positionV].index;
				channel.playByIndex(channelList[positionV].index);
			    top.channelLock = 0;
				top.parentalLock = 0;
				top.inputLock = 0;
				if(channelList[positionV].serviceType==0)
				{
					top.$("main").contentWindow.inputSource=0;
				}
				else
				{
					top.$("main").contentWindow.inputSource=1;
				}
				top.$("main").contentWindow.refreshInfoTimer=0;
				top.$("main").contentWindow.channelIndex = channelList[positionV].index;
				top.$("main").contentWindow.channelInfo_visible = 1;
				top.keySetForUI(1);
			},20)
			
			//channel.playByIndex(channelList[cursor].index);
		}
		currentChannelListType = channelListType;
		top.channelType=channelList[positionV].serviceType;
		index = channelList[positionV].index;
	}
	else if(focusType=="listType")
	{
		if(tunerMode==2)
		{
			if((satelliteCurrentPage*PAGE_MAX+positionV)>satelliteList.length)
			{
				channelListType=satelliteCurrentPage*PAGE_MAX+positionV-satelliteList.length+2;
				channel.channelListType = channelListType;
				currentChannelListType=channelListType;
				$("channelListName").innerHTML=chaListConName[0]+" - "+chListType[channelListType];
				update();
				satelliteId=0;
			}
			else if((satelliteCurrentPage*PAGE_MAX+positionV)==0)
			{
				channelListType=0;
				channel.channelListType = channelListType;
				currentChannelListType=channelListType;
				$("channelListName").innerHTML=chaListConName[0]+" - "+chListType[channelListType];
				update();
				satelliteId=0;
			}
			else 
			{
				$("channelListName").innerHTML=chaListConName[0]+" - "+satelliteList[satelliteCurrentPage*PAGE_MAX+positionV-1].name;
				channelListType=6;
				channel.channelListType = 6;
				currentChannelListType=6;
				updateSatellite();
			}
			$("channelSelectList").style.display="none";
			$("channelList").style.display="block";
			$("channelTunerMode").style.display="none";
			$("channelListOp").style.display="block";
			focusType = "Channellist";
			showOpList();
			showChannelPF();
			showNoChannelRemind();
		}
		else
		{
			if((favoriteListDisable) && (hotelEnable))
			{
				disableFlag = 1
			}
			else
			{
				disableFlag = 0;
			}
			channelListType=positionV;
			channel.channelListType = channelListType;
			currentChannelListType=channelListType;
			$("channelListName").innerHTML=chaListConName[0]+" - "+chListType[channelListType];
			update();
			$("channelSelectList").style.display="none";
			$("channelList").style.display="block";
			$("channelTunerMode").style.display="none";
			$("channelListOp").style.display="block";
			focusType = "Channellist";
			showOpList();
			showChannelPF();
			showNoChannelRemind();
		}
	}
	else if(focusType=="tunnerMode")
	{
		if(tunerMode!=sTunerPositionToTuner(positionV))
		{
			channel.tunerMode = sTunerPositionToTuner(positionV);
			tunerMode = channel.tunerMode;
			var tChannel = channel.getCurrentChannelInfo();
			if(tChannel.isSkip)
			{
				index = channel.nextIndex;
			}
			else
			{
				index = tChannel.index;
			}
			if(positionV!=2)
			{
				if(channelListType==6)
				{
					channelListType=0;
					channel.channelListType = channelListType;
					currentChannelListType = 0;
					channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
				}
				else
				{
					channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
				}
			}
			else
			{
				channelListType=0;
				channel.channelListType = channelListType;
				currentChannelListType = 0;
				channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
			}
			if(channelList.length<=0)
			{
				currentChannelListType = 0;
			}
			updateTuner();
		}
		$("channelListName").innerHTML=chaListConName[0]+" - "+chListType[channelListType];
		$("channelSelectList").style.display="none";
		$("channelList").style.display="block";
	    $("channelTunerMode").style.display="none";
		$("channelListOp").style.display="block";
		top.$("main").onload=function(){
			if(top.$("operatePage").src=="channelList.html")
			{
				setTimeout("top.keySetForUI(1)",10);
				top.timeoutFuc.osdTimeoutStartOpFuc();
				top.$("main").onload=function(){};
			}
			};
		top.$("main").src="channelPlay.html";
		if(channelList.length<=0)
		{
			$("focus").style.display = "none";
		}
	    focusType = "Channellist";
		showOpList();
		showChannelPF();
		showNoChannelRemind();
	}
	else if(focusType == "NoChannellist")
	{
		var install_lock = setting.installLock;//off 0    on 1
		if(top.g_factory.hotelEnable == 1 && top.g_factory.hotelChLock == 1)
		{
			top.g_nextHtmlPage = "channelSet.html";
			top.$("main").src = "index.html";
			top.main.focus();
			top.$("operatePage").src="";
		}
		else if(install_lock == 1)
		{//开
			top.g_nextHtmlPage = "channelSet.html";
			top.$("main").src = "index.html";
			top.main.focus();
			top.$("operatePage").src="";
		}
		else 
		{
			top.g_nextHtmlPage = "channelScan.html";
			top.$("main").src = "index.html";
			top.main.focus();
			top.$("operatePage").src="";
		}
	}
	else if(focusType=="EditChannellist")
	{
		if(selectSortNumber==0)
		{
			selectSortNumber=1;
			swapChannel=channelList[positionV];
			$("channelFav"+positionV).src=favImg[2];
		}
		else if(selectSortNumber==1)
		{
			if(channelList[positionV].index==swapChannel.index)
			{
				$("channelFav"+positionV).src=favImg[1];
				selectSortNumber=0;
			}
			else
			{
				channel.sortChannel(swapChannel.index,channelList[positionV].index);
		        updateFavEdit();
				selectSortNumber=0;
			}
		}
	}
}
function updateFavEdit()
{
	channelList=channel.getNextChannelList(channelListType,channelList[0].index,1,PAGE_MAX);
	var length=channelList.length;
	var channelBox = $("channelList").getElementsByTagName("ul")[0];
	var lis = channelBox.getElementsByTagName("li");
	//判断当前频道是否够显示一页
	for (var i=0; i<PAGE_MAX; i++)
	{
		var divs = lis[i].getElementsByTagName("div");
		var imgs = lis[i].getElementsByTagName("img");
		
		if (i<length)
		{
			lis[i].style.display="block";
			divs[0].innerText = channelList[i].number;
			divs[1].innerText = channelList[i].name;
			imgs[1].src = channel_type_icon[channelList[i].serviceType];
			$("channelFav"+i).style.display="block";
			$("channelFav"+i).src=favImg[1];
		}
		else
		{
			lis[i].style.display="none";
		}
	}
}
//向上键处理函数
function onUp()
{
	if(focusType=="Channellist")
	{
		positionV--;
		if(positionV < 0)//需要翻页
		{
			index=channel.getPreviousIndexByIndex(channelList[0].index);
			channelList=channel.getPrevChannelList(channelListType,index,0,PAGE_MAX);
			var channelBox = $("channelList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
			//判断当前频道是否够显示一页
			var length=channelList.length;
			for (var i=0; i<PAGE_MAX; i++)
			{
				var divs = lis[i].getElementsByTagName("div");
				var imgs = lis[i].getElementsByTagName("img");
				
				if (i<length)
				{
					lis[i].style.display="block";
					divs[0].innerText = channelList[i].number;
					divs[1].innerText = channelList[i].name;
					imgs[1].src = channel_type_icon[channelList[i].serviceType];
					if(channelList[i].isFavorite==1)
					{
						$("channelFav"+i).style.display="block";
						$("channelFav"+i).src=favImg[0];
					}
					else
					{
						$("channelFav"+i).style.display="none";
					}
				}
				else
				{
					lis[i].style.display="none";
				}
			}
			positionV=length-1;
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
		}
		else//不需要翻页
		{
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
		}
		showOpList();
		showChannelPF();
	}
	else if(focusType=="tunnerMode")
	{
		positionV--;
		if(positionV<0)
		{
			positionV = (tunerShowWords.length - 1);
		}
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
	}
	else if(focusType=="listType")
	{
		if(tunerMode==2)
		{
			positionV--;
			if(positionV<0)
			{
				satelliteCurrentPage--;
				if(satelliteCurrentPage<0)
				{
					satelliteCurrentPage=satellitePageCount-1;
					if((favoriteListDisable) && (hotelEnable) &&(disableFlag))
					{
						positionV=parseInt((satelliteList.length+2)%PAGE_MAX);
					}
					else
						positionV=parseInt((satelliteList.length+3)%PAGE_MAX);
				}
				else
				{
					positionV=PAGE_MAX-1;
				}
				showSatelliteList();
				
			}
		}
		else
		{
			positionV--;
			if((favoriteListDisable) && (hotelEnable) && (disableFlag))
			{
				if(positionV<0)
				{
					positionV = 4;
				}
			}
			else
			{
				if(positionV<0)
				{
					positionV = 5;
				}
			}
		}
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
	}
	else if(focusType=="EditChannellist")
	{
		positionV--;
		if(positionV < 0)//需要翻页
		{
			index=channel.getPreviousIndexByIndex(channelList[0].index);
			channelList=channel.getPrevChannelList(channelListType,index,0,PAGE_MAX);
			var channelBox = $("channelList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
			//判断当前频道是否够显示一页
			var length=channelList.length;
			for (var i=0; i<PAGE_MAX; i++)
			{
				var divs = lis[i].getElementsByTagName("div");
				var imgs = lis[i].getElementsByTagName("img");
				
				if(i<length)
				{
					lis[i].style.display="block";
					divs[0].innerText = channelList[i].number;
					divs[1].innerText = channelList[i].name;
					imgs[1].src = channel_type_icon[channelList[i].serviceType];
					$("channelFav"+i).style.display="block";
					if((selectSortNumber==1)&&(channelList[i].index==swapChannel.index))
					{
						$("channelFav"+i).src=favImg[2];
					}
					else
					{
						$("channelFav"+i).src=favImg[1];
					}
				}
				else
				{
					lis[i].style.display="none";
				}
			}
			positionV=length-1;
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
		}
		else//不需要翻页
		{
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
		}
	}
}
//向下键处理函数
function onDown()
{
	if(focusType=="Channellist")
	{
		var length = channelList.length;
		positionV++;
		if(positionV>=length ||positionV>=PAGE_MAX)
		{
			index=channel.getNextIndexByIndex(channelList[length-1].index);
			channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
			var channelBox = $("channelList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
			//判断当前频道是否够显示一页
			var length=channelList.length;
			for (var i=0; i<PAGE_MAX; i++)
			{
				var divs = lis[i].getElementsByTagName("div");
				var imgs = lis[i].getElementsByTagName("img");
				
				if (i<length)
				{
					lis[i].style.display="block";
					divs[0].innerText = channelList[i].number;
					divs[1].innerText = channelList[i].name;
					imgs[1].src = channel_type_icon[channelList[i].serviceType];
					if(channelList[i].isFavorite==1)
					{
						$("channelFav"+i).style.display="block";
						$("channelFav"+i).src=favImg[0];
					}
					else
					{
						$("channelFav"+i).style.display="none";
					}
				}
				else
				{
					lis[i].style.display="none";
				}
			}
			positionV=0;
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
		}
		else//不需要翻页
		{
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
		}
		showOpList();
		showChannelPF();
	}
	else if(focusType=="tunnerMode")
	{
		positionV++;
		if(positionV>(tunerShowWords.length - 1))
		{
			positionV = 0;
		}
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
	}
	else if(focusType=="listType")
	{
		if(tunerMode==2)
		{
			try
			{
				positionV++;
				if((favoriteListDisable) && (hotelEnable) &&(disableFlag))
				{
					if(positionV>PAGE_MAX-1 || positionV+satelliteCurrentPage*PAGE_MAX>satelliteList.length+2)
					{
						satelliteCurrentPage++;
						if(satelliteCurrentPage==satellitePageCount)
						{
							satelliteCurrentPage=0;
						}
						showSatelliteList();
						positionV=0;
					}
				}
				else
				{
					if(positionV>PAGE_MAX-1 || positionV+satelliteCurrentPage*PAGE_MAX>satelliteList.length+3)
					{
						satelliteCurrentPage++;
						if(satelliteCurrentPage==satellitePageCount)
						{
							satelliteCurrentPage=0;
						}
						showSatelliteList();
						positionV=0;
					}
				}
				channel.testLog("positionV="+positionV+"satelliteCurrentPage="+satelliteCurrentPage);
				}
				catch(er)
				{
					channel.testLog(er);
				}
		}
		else
		{
			positionV++;
			if((favoriteListDisable) && (hotelEnable) && (disableFlag))
			{
				if(positionV>4)
				{
					positionV = 0;
				}
			}
			else
			{
				if(positionV>5)
				{
					positionV = 0;
				}
			}

		}
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
	}
	else if(focusType=="EditChannellist")
	{
		var length = channelList.length;
		positionV++;
		if(positionV>=length ||positionV>=PAGE_MAX)
		{
			index=channel.getNextIndexByIndex(channelList[length-1].index);
			channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
			var channelBox = $("channelList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
			//判断当前频道是否够显示一页
			var length=channelList.length;
			for (var i=0; i<PAGE_MAX; i++)
			{
				var divs = lis[i].getElementsByTagName("div");
				var imgs = lis[i].getElementsByTagName("img");
				
				if (i<length)
				{
					lis[i].style.display="block";
					divs[0].innerText = channelList[i].number;
					divs[1].innerText = channelList[i].name;
					imgs[1].src = channel_type_icon[channelList[i].serviceType];
					$("channelFav"+i).style.display="block";
					if((selectSortNumber==1)&&(channelList[i].index==swapChannel.index))
					{
						$("channelFav"+i).src=favImg[2];
					}
					else
					{
						$("channelFav"+i).src=favImg[1];
					}
				}
				else
				{
					lis[i].style.display="none";
				}
			}
			positionV=0;
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
		}
		else//不需要翻页
		{
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
		}
	}
}

function onRight()
{
	if(focusType=="Channellist")
	{
		var length = channelList.length;
		index=channel.getNextIndexByIndex(channelList[length-1].index);
		channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
		var channelBox = $("channelList").getElementsByTagName("ul")[0];
		var lis = channelBox.getElementsByTagName("li");
		//判断当前频道是否够显示一页
		var length=channelList.length;
		for (var i=0; i<PAGE_MAX; i++)
		{
			var divs = lis[i].getElementsByTagName("div");
			var imgs = lis[i].getElementsByTagName("img");
			
			if (i<length)
			{
				lis[i].style.display="block";
				divs[0].innerText = channelList[i].number;
				divs[1].innerText = channelList[i].name;
				imgs[1].src = channel_type_icon[channelList[i].serviceType];
				if(channelList[i].isFavorite==1)
				{
					$("channelFav"+i).style.display="block";
					$("channelFav"+i).src=favImg[0];
				}
				else
				{
					$("channelFav"+i).style.display="none";
				}
			}
			else
			{
				lis[i].style.display="none";
			}
		}
		positionV=0;
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
		showOpList();
		showChannelPF();
	}
	else if(focusType=="EditChannellist")
	{
		var length = channelList.length;
		index=channel.getNextIndexByIndex(channelList[length-1].index);
		channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
		var channelBox = $("channelList").getElementsByTagName("ul")[0];
		var lis = channelBox.getElementsByTagName("li");
		//判断当前频道是否够显示一页
		var length=channelList.length;
		for (var i=0; i<PAGE_MAX; i++)
		{
			var divs = lis[i].getElementsByTagName("div");
			var imgs = lis[i].getElementsByTagName("img");
			
			if (i<length)
			{
				lis[i].style.display="block";
				divs[0].innerText = channelList[i].number;
				divs[1].innerText = channelList[i].name;
				imgs[1].src = channel_type_icon[channelList[i].serviceType];
				$("channelFav"+i).style.display="block";
				if((selectSortNumber==1)&&(channelList[i].index==swapChannel.index))
				{
					$("channelFav"+i).src=favImg[2];
				}
				else
				{
					$("channelFav"+i).src=favImg[1];
				}
			}
			else
			{
				lis[i].style.display="none";
			}
		}
		positionV=0;
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
	}
    
}

function onLeft()
{
	if(focusType=="Channellist")
	{
	    index=channel.getPreviousIndexByIndex(channelList[0].index);
    	channelList=channel.getPrevChannelList(channelListType,index,0,PAGE_MAX);
		var channelBox = $("channelList").getElementsByTagName("ul")[0];
		var lis = channelBox.getElementsByTagName("li");
		//判断当前频道是否够显示一页
		var length=channelList.length;
		for (var i=0; i<PAGE_MAX; i++)
		{
			var divs = lis[i].getElementsByTagName("div");
			var imgs = lis[i].getElementsByTagName("img");
			
			if (i<length)
			{
				lis[i].style.display="block";
				divs[0].innerText = channelList[i].number;
				divs[1].innerText = channelList[i].name;
				imgs[1].src = channel_type_icon[channelList[i].serviceType];
				if(channelList[i].isFavorite==1)
				{
					$("channelFav"+i).style.display="block";
					$("channelFav"+i).src=favImg[0];
				}
				else
				{
					$("channelFav"+i).style.display="none";
				}
			}
			else
			{
				lis[i].style.display="none";
			}
		}
		positionV=length-1;
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
	  	showOpList();
		showChannelPF();
	}
	else if(focusType=="EditChannellist")
	{
		index=channel.getPreviousIndexByIndex(channelList[0].index);
    	channelList=channel.getPrevChannelList(channelListType,index,0,PAGE_MAX);
		var channelBox = $("channelList").getElementsByTagName("ul")[0];
		var lis = channelBox.getElementsByTagName("li");
		//判断当前频道是否够显示一页
		var length=channelList.length;
		for (var i=0; i<PAGE_MAX; i++)
		{
			var divs = lis[i].getElementsByTagName("div");
			var imgs = lis[i].getElementsByTagName("img");
			
			if (i<length)
			{
				lis[i].style.display="block";
				divs[0].innerText = channelList[i].number;
				divs[1].innerText = channelList[i].name;
				imgs[1].src = channel_type_icon[channelList[i].serviceType];
				$("channelFav"+i).style.display="block";
				if((selectSortNumber==1)&&(channelList[i].index==swapChannel.index))
				{
					$("channelFav"+i).src=favImg[2];
				}
				else
				{
					$("channelFav"+i).src=favImg[1];
				}
			}
			else
			{
				lis[i].style.display="none";
			}
		}
		positionV=length-1;
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
	}
}
function updateTuner()
{
	var length = channelList.length;
    if (length > 0)
    {
		 if(length<=PAGE_MAX)
		 {
			var listIndex=0;
			for(;listIndex<PAGE_MAX && listIndex < length;listIndex++)
			{
				//channel.testLog("index="+index);
				//channel.testLog("channelList["+listIndex+"].index="+channelList[listIndex].index);
				if(index==channelList[listIndex].index)
				{
					break;
				}
			}
			if(listIndex == length)
			{
				listIndex = 0;
			}
			positionV=listIndex;
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
			$("focus").style.display = "block";
			$("listDownRemind").style.display = "block";
            $("listUpRemind").style.display = "block";
            $("listLeftRemind").style.display = "block";
            $("listRightRemind").style.display = "block";
			var channelBox = $("channelList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
			//判断当前频道是否够显示一页
			for (var i=0; i<PAGE_MAX; i++)
			{
				var divs = lis[i].getElementsByTagName("div");
				var imgs = lis[i].getElementsByTagName("img");
				
				if (i<length)
				{
					lis[i].style.display="block";
					divs[0].innerText = channelList[i].number;
					divs[1].innerText = channelList[i].name;
					imgs[1].src = channel_type_icon[channelList[i].serviceType];
					if(channelList[i].isFavorite==1)
					{
						$("channelFav"+i).style.display="block";
						$("channelFav"+i).src=favImg[0];
					}
					else
					{
						$("channelFav"+i).style.display="none";
					}
				}
				else
				{
					lis[i].style.display="none";
				}
			}
		 }
    }
    else
    {
        var channelBox = $("channelList").getElementsByTagName("ul")[0];
        var lis = channelBox.getElementsByTagName("li");
        for(var i=0 ; i<PAGE_MAX ; i++)
        {
            lis[i].style.display="none";
        }
        $("focus").style.display = "none";
        $("listDownRemind").style.display = "none";
        $("listUpRemind").style.display = "none";
        $("listLeftRemind").style.display = "none";
        $("listRightRemind").style.display = "none";
    }
}
function updateSatellite()
{
	try
	{
		var tChannel = channel.getCurrentChannelInfo();
		if(tChannel.isSkip)
		{
			index = channel.nextIndex;
		}
		else
		{
			index = tChannel.index;
		}
		channel.testLog("index===="+index);
		//channelList=channel.getSatelliteNextChannelList(satelliteList[satelliteCurrentPage*12+positionV-1].id,index,0,PAGE_MAX);
		channel.currentSatelliteId=satelliteList[satelliteCurrentPage*PAGE_MAX+positionV-1].id;
		channelList=channel.getNextChannelList(6,index,0,PAGE_MAX);
		satelliteId=satelliteList[satelliteCurrentPage*PAGE_MAX+positionV-1].id;
		var length = channelList.length;
		if (length > 0)
		{
			 if(length<=PAGE_MAX)
			 {
				var listIndex=0;
				for(;listIndex<PAGE_MAX && listIndex < length;listIndex++)
				{
					//channel.testLog("index="+index);
					//channel.testLog("channelList["+listIndex+"].index="+channelList[listIndex].index);
					if(index==channelList[listIndex].index)
					{
						break;
					}
				}
				if(listIndex == length)
				{
					listIndex = 0;
				}
				positionV=listIndex;
				focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
				$("focus").style.top = focusTop+"px";
				$("focus").style.display = "block";
                $("listDownRemind").style.display = "block";
                $("listUpRemind").style.display = "block";
                $("listLeftRemind").style.display = "block";
                $("listRightRemind").style.display = "block";
				var channelBox = $("channelList").getElementsByTagName("ul")[0];
				var lis = channelBox.getElementsByTagName("li");
				//判断当前频道是否够显示一页
				for (var i=0; i<PAGE_MAX; i++)
				{
					var divs = lis[i].getElementsByTagName("div");
					var imgs = lis[i].getElementsByTagName("img");
					
					if (i<length)
					{
						lis[i].style.display="block";
						divs[0].innerText = channelList[i].number;
						divs[1].innerText = channelList[i].name;
						imgs[1].src = channel_type_icon[channelList[i].serviceType];
						if(channelList[i].isFavorite==1)
						{
							$("channelFav"+i).style.display="block";
							$("channelFav"+i).src=favImg[0];
						}
						else
						{
							$("channelFav"+i).style.display="none";
						}
					}
					else
					{
						lis[i].style.display="none";
					}
				}
			 }
		}
		else
		{
			 var channelBox = $("channelList").getElementsByTagName("ul")[0];
			 var lis = channelBox.getElementsByTagName("li");
			 for(var i=0 ; i<PAGE_MAX ; i++)
			 {
				lis[i].style.display="none";
			 }
            $("focus").style.display = "none";
            $("listDownRemind").style.display = "none";
            $("listUpRemind").style.display = "none";
            $("listLeftRemind").style.display = "none";
            $("listRightRemind").style.display = "none";
		}
		showOpList();
	}
	catch(er)
	{
		channel.testLog(er);
	}
}
function update()
{
	var tChannel = channel.getCurrentChannelInfo();
	if(tChannel.isSkip)
	{
		index = channel.nextIndex;
	}
	else
	{
		index = tChannel.index;
	}
	channelList=channel.getNextChannelList(channelListType,index,0,PAGE_MAX);
    var length = channelList.length;
    if (length > 0)
    {
		 if(length<=PAGE_MAX)
		 {
			var listIndex=0;
			for(;listIndex<PAGE_MAX && listIndex < length;listIndex++)
			{
				if(index==channelList[listIndex].index)
				{
					break;
				}
			}
			if(listIndex == length)
			{
				listIndex = 0;
			}
			positionV=listIndex;
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
			$("focus").style.display = "block";
            $("listDownRemind").style.display = "block";
            $("listUpRemind").style.display = "block";
            $("listLeftRemind").style.display = "block";
            $("listRightRemind").style.display = "block";
			var channelBox = $("channelList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
			//判断当前频道是否够显示一页
			for (var i=0; i<PAGE_MAX; i++)
			{
				var divs = lis[i].getElementsByTagName("div");
				var imgs = lis[i].getElementsByTagName("img");
				
				if (i<length)
				{
					lis[i].style.display="block";
					divs[0].innerText = channelList[i].number;
					divs[1].innerText = channelList[i].name;
					imgs[1].src = channel_type_icon[channelList[i].serviceType];
					if(channelList[i].isFavorite==1)
					{
						$("channelFav"+i).style.display="block";
						$("channelFav"+i).src=favImg[0];
					}
					else
					{
						$("channelFav"+i).style.display="none";
					}
				}
				else
				{
					lis[i].style.display="none";
				}
			}
		 }
    }
    else
    {
		 var channelBox = $("channelList").getElementsByTagName("ul")[0];
         var lis = channelBox.getElementsByTagName("li");
		 for(var i=0 ; i<PAGE_MAX ; i++)
		 {
			lis[i].style.display="none";
		 }
		 $("focus").style.display = "none";
		 $("listDownRemind").style.display = "none";
	    $("listUpRemind").style.display = "none";
        $("listLeftRemind").style.display = "none";
        $("listRightRemind").style.display = "none";
    }
	showOpList();
}
function  toSelectTuner()//显示选择tuner界面
{	
	$("channelListName").innerHTML=chaListConName[6]; 
	$("channelList").style.display = "none";
	$("channelSelectList").style.display = "none";
	$("channelTunerMode").style.display = "block";

	focusType = "tunnerMode";
	console.log("YM channel.tunerMode:" + channel.tunerMode);
    positionV = tunerPositionTosTuner(channel.tunerMode);
	console.log("YM positionV:" + positionV);
	focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
	$("focus").style.top = focusTop+"px";
	$("focus").style.display = "block";
    $("listDownRemind").style.display = "block";
    $("listUpRemind").style.display = "block";
    $("listLeftRemind").style.display = "block";
    $("listRightRemind").style.display = "block";
	$("channelListOp").style.display="none";
	showChannelPF();
	showNoChannelRemind();
}

/*
功能描述:把tuner在tuner数组中的元素的位置对应到showTuner数组中去
tunerPosition:表示tuner数组中的位置
return:参数tuner数组中tuner位置元素对应在showTuner中的位置
*/
function tunerPositionTosTuner(tunerPosition)
{
	var position = 0;
	for(var i=0;i<tunerShowWords.length;i++)
	{
		if(tunerShowWords[i] == tuner[tunerPosition])
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
	for(var i=0;i<tuner.length;i++)
	{
		if(tunerShowWords[form_position_h] == tuner[i])
		{
			position = i;
			return position;
		}
	}
	
	return position;
}


function showSatelliteList()
{
	try
	{
		var spans=$("channelSelectList").getElementsByTagName("span");
		if(satelliteCurrentPage==0)
		{
			
			spans[0].innerHTML=chListType[0];
			if(satelliteList.length!=0)
			{
				for(var i=1;i<satelliteList.length+1;i++)
				{
					spans[i].innerHTML=satelliteList[i-1].name;
				}
			}
			for(var i=satelliteList.length+1;(i<satelliteList.length+4&&i<PAGE_MAX);i++)
			{
				if((favoriteListDisable) && (hotelEnable) && (disableFlag))
				{
					if(i == satelliteList.length+3)
					{
						continue;
					}
				}
				spans[i].innerHTML=chListType[i-satelliteList.length+2];
			}
			if((favoriteListDisable) && (hotelEnable) && (disableFlag))
			{
				for(var i=satelliteList.length+3;i<PAGE_MAX;i++)
				{
					spans[i].innerHTML=""
				}
			}
			else
			{
				for(var i=satelliteList.length+4;i<PAGE_MAX;i++)
				{
					spans[i].innerHTML=""
				}
			}
		}
		else if(satelliteCurrentPage==satellitePageCount-1)
		{
			if(satelliteCurrentPage*PAGE_MAX>=satelliteList.length+1)
			{
				var j=0;
				for(var i=satelliteCurrentPage*PAGE_MAX;i<satelliteList.length+4;i++)
				{
					if((favoriteListDisable) && (hotelEnable) && (disableFlag))
					{
						if(i == satelliteList.length+3)
						{
							continue;
						}
					}
					spans[parseInt(i%PAGE_MAX)].innerHTML=chListType[i-satelliteList.length+2];
					j++;
				}
				if((favoriteListDisable) && (hotelEnable) && (disableFlag))
				{
					for(var i=satelliteList.length+3;j<PAGE_MAX;i++)
					{
						spans[parseInt(i%PAGE_MAX)].innerHTML=""
						j++;
					}
				}
				else
				{
					for(var i=satelliteList.length+4;j<PAGE_MAX;i++)
					{
						spans[parseInt(i%PAGE_MAX)].innerHTML=""
						j++;
					}
				}
			}
			else
			{
				channel.testLog("satelliteCurrentPage="+satelliteCurrentPage+"satelliteList.length="+satelliteList.length);
				var j=0;
				for(var i=satelliteCurrentPage*PAGE_MAX;i<satelliteList.length+1;i++)
				{
					channel.testLog("parseInt(i%12)="+parseInt(i%PAGE_MAX)+"i-1="+(i-1));
					spans[parseInt(i%PAGE_MAX)].innerHTML=satelliteList[i-1].name;
					j++;
				}
				for(var i=satelliteList.length+1;(i<satelliteList.length+4&&j<PAGE_MAX);i++)
				{
					if((favoriteListDisable) && (hotelEnable) && (disableFlag))
					{
						if(i == satelliteList.length+3)
						{
							continue;
						}
					}
					spans[parseInt(i%PAGE_MAX)].innerHTML=chListType[i-satelliteList.length+2];
					j++;
				}
				if((favoriteListDisable) && (hotelEnable) && (disableFlag))
				{
					for(var i=satelliteList.length+3;j<PAGE_MAX;i++)
					{
						spans[parseInt(i%PAGE_MAX)].innerHTML=""
						j++;
					}
				}
				else
				{
					for(var i=satelliteList.length+4;j<PAGE_MAX;i++)
					{
						spans[parseInt(i%PAGE_MAX)].innerHTML=""
						j++;
					}
				}
			}
		}
		else 
		{
			var j=0;
			for(var i=satelliteCurrentPage*PAGE_MAX;(i<satelliteList.length+1&&j<PAGE_MAX);i++)
			{
				spans[parseInt(i%PAGE_MAX)].innerHTML=satelliteList[i-1].name;
				j++;
			}
			for(var i=satelliteList.length+1;(i<satelliteList.length+4&&j<PAGE_MAX);i++)
			{
				if((favoriteListDisable) && (hotelEnable) && (disableFlag))
				{
					if(i == satelliteList.length+3)
					{
						continue;
					}
				}
				spans[parseInt(i%PAGE_MAX)].innerHTML=chListType[i-satelliteList.length+2];
				j++;
			}
			if((favoriteListDisable) && (hotelEnable) && (disableFlag))
			{
				for(var i=satelliteList.length+3;j<PAGE_MAX;i++)
				{
					spans[parseInt(i%PAGE_MAX)].innerHTML=""
					j++
				}
			}
			else
			{
				for(var i=satelliteList.length+4;j<PAGE_MAX;i++)
				{
					spans[parseInt(i%PAGE_MAX)].innerHTML=""
					j++
				}
			}
		}
	}
	catch(er)
	{
		channel.testLog(er);
	}
}
function toSelectListType()//显示选择list type界面
{
	if(tunerMode==2)
	{
		try
		{
			satelliteList = channel.getSatelliteSelectList();
			satelliteCurrentPage=0;
			if(satelliteList.length==0)
			{
				satellitePageCount=1;
			}
			else
			{
				if(parseInt((satelliteList.length+4)%PAGE_MAX)==0)
				{
					satellitePageCount=parseInt((satelliteList.length+4)/PAGE_MAX);
				}
				else
				{
					satellitePageCount=parseInt((satelliteList.length+4)/PAGE_MAX)+1;
				}
			}
			var spans=$("channelSelectList").getElementsByTagName("span");
			spans[0].innerHTML=chListType[0];
			if(satelliteList.length!=0)
			{
				for(var i=1;(i<satelliteList.length+1&&i<PAGE_MAX);i++)
				{
					spans[i].innerHTML=satelliteList[i-1].name;
				}
			}
			for(var i=satelliteList.length+1;(i<satelliteList.length+4&&i<PAGE_MAX);i++)
			{
				if(i == satelliteList.length+3)
				{
					if((favoriteListDisable) && (hotelEnable) && (disableFlag))
					{
						continue;
					}
				}
				spans[i].innerHTML=chListType[i-satelliteList.length+2];
			}
			if((favoriteListDisable) && (hotelEnable) && (disableFlag))
			{
				for(var i=satelliteList.length+3;i<PAGE_MAX;i++)
				{
					spans[i].innerHTML=""
				}
			}
			else
			{
				for(var i=satelliteList.length+4;i<PAGE_MAX;i++)
				{
					spans[i].innerHTML=""
				}
			}
			$("channelListName").innerHTML=chaListConName[5];
			$("channelList").style.display="none";
			$("channelTunerMode").style.display="none";
			$("channelSelectList").style.display="block";
			focusType = "listType";
			positionV = 0;
			page_first_item_num=0;
			focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
			$("focus").style.top = focusTop+"px";
			$("focus").style.display = "block";
            $("listDownRemind").style.display = "block";
            $("listUpRemind").style.display = "block";
            $("listLeftRemind").style.display = "block";
            $("listRightRemind").style.display = "block";
			$("channelListOp").style.display="none";
		}
		catch(er)
		{
			channel.testLog(er);
		}
	}
	else
	{
		var spans=$("channelSelectList").getElementsByTagName("span");
		if((favoriteListDisable) && (hotelEnable) && (disableFlag))
		{
			for(var i=0;i<5;i++)
			{
				spans[i].innerHTML=chListType[i];
			}
			for(var i=5;i<PAGE_MAX;i++)
			{
				spans[i].innerHTML=""
			}
		}
		else
		{
			for(var i=0;i<6;i++)
			{
				spans[i].innerHTML=chListType[i];
			}
			for(var i=6;i<PAGE_MAX;i++)
			{
				spans[i].innerHTML=""
			}
		}
		$("channelListName").innerHTML=chaListConName[5];
		$("channelList").style.display="none";
		$("channelTunerMode").style.display="none";
		$("channelSelectList").style.display="block";
		focusType = "listType";
		positionV = channelListType;
		page_first_item_num=0;
		focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
		$("focus").style.top = focusTop+"px";
		$("focus").style.display = "block";
        $("listDownRemind").style.display = "block";
        $("listUpRemind").style.display = "block";
        $("listLeftRemind").style.display = "block";
        $("listRightRemind").style.display = "block";
		$("channelListOp").style.display="none";
	}
	showChannelPF();
	showNoChannelRemind();
}

function toGreen()//删除或添加喜爱节目
{
	if(focusType =="Channellist"&&channelListType!=5)
	{
		if(channelList.length>0)
		{
			if(channelList[positionV].isFavorite==1)
			{
				channelList[positionV].isFavorite=0;
				$("channelFav"+positionV).style.display="none";
			}
			else
			{
				channelList[positionV].isFavorite=1;
				$("channelFav"+positionV).style.display="block";
				$("channelFav"+positionV).src=favImg[0];
			}	
			showOpList();
		}
	}
	else if(focusType =="Channellist"&&channelListType==5)
	{
		if(channelList.length>0)
		{
			channelList[positionV].isFavorite=0;
			if(positionV==0)
			{
				channelList=channel.getNextChannelList(channelListType,channel.getPreviousIndexByIndex(channelList[0].index),0,PAGE_MAX);
			}
			else
			{
				channelList=channel.getNextChannelList(channelListType,channelList[0].index,0,PAGE_MAX);
			}
			updateFavList();
			showChannelPF();
			showOpList();
		}
		else
		{
			channelListType=0;
			channel.channelListType = channelListType;
			currentChannelListType = channelListType;
			$("channelListName").innerHTML=chaListConName[0]+" - "+chListType[channelListType];
			update();
			showChannelPF();
		}
	}
}
function toBlue()
{
	if(focusType =="Channellist"&&channelListType==5)
	{
		channelList=channel.getNextChannelList(channelListType,channelList[0].index,1,PAGE_MAX);
		for(var i=0;i<PAGE_MAX;i++)
		{
			if(i<channelList.length)
			{
				$("channelFav"+i).style.display="block";
				$("channelFav"+i).src=favImg[1];
			}
			else
			{
				$("channelFav"+i).style.display="none";
			}
		}
		focusType="EditChannellist";
		showOpList();
		showChannelPF();
	}
	else if(focusType=="EditChannellist")
	{
		if(selectSortNumber==0)
		{
			for(var i=0;i<PAGE_MAX;i++)
			{
				if(i<channelList.length)
				{
					$("channelFav"+i).style.display="block";
					$("channelFav"+i).src=favImg[0];
				}
				else
				{
					$("channelFav"+i).style.display="none";
				}
			}
			focusType="Channellist";
		}
		else if(selectSortNumber==1)
		{
			
			if(channelList[positionV].index!=swapChannel.index)
			{
				channel.sortChannel(swapChannel.index,channelList[positionV].index);
				channelList[positionV]=swapChannel;
		        updateFavEdit();
				selectSortNumber=0;
			}
			for(var i=0;i<PAGE_MAX;i++)
			{
				if(i<channelList.length)
				{
					$("channelFav"+i).style.display="block";
					$("channelFav"+i).src=favImg[0];
				}
				else
				{
					$("channelFav"+i).style.display="none";
				}
			}
			focusType="Channellist";
		}
		channelList=channel.getNextChannelList(channelListType,channelList[0].index,0,PAGE_MAX);
		showOpList();
		showChannelPF();
	}
}
function toYellow()
{
	for(var i=0;i<PAGE_MAX;i++)
	{
		if(i<channelList.length)
		{
			$("channelFav"+i).style.display="block";
			$("channelFav"+i).src=favImg[0];
		}
		else
		{
			$("channelFav"+i).style.display="none";
		}
	}
	channelList=channel.getNextChannelList(channelListType,channelList[0].index,0,PAGE_MAX);
	selectSortNumber=0;
	focusType="Channellist";
	showOpList();
	showChannelPF();
}
function hiddenFavImg()
{
	for(var i=0;i<PAGE_MAX;i++)
	{
		$("channelFav"+i).style.display="none";
	}
}
function showChannelPF()
{
	if(0)//focusType =="Channellist"&&channelList.length>0)
	{
		var programList  = channelList[positionV].getProgramPlayList();
		var programListLength = programList.length;
		
		if(channelList[positionV].serviceType == 0)
		{
			$("promptWin").style.display="none";
		}
		else
		{
			var isNoProgramData = 1;
			if(programList[0].id == -1)//没有当前事件
			{
				$("program_time_1").innerText =  "";
				$("program_name_1").innerText = "";
				$("program_parentRate_1").innerText = "";
			}
			else
			{
				$("program_time_1").innerText =  programList[0].startTime + "-" +  programList[0].endTime;
				$("program_name_1").innerText = programList[0].name;
				var rate = programList[0].parentRate;
				if(rate >= 4 && rate < 19)
				{
					$("program_parentRate_2").innerText = rate + "+";
				}
				else if(top.g_channel.systemCountry==22&&rate == 19)
				{
					$("program_parentRate_1").innerText = "X";
				}
				else
				{
					$("program_parentRate_2").innerText = "";
				}
				isNoProgramData = 0;
			}
			if(programList[1].id == -1)//没有next事件
			{
				$("program_time_2").innerText = "";
				$("program_name_2").innerText = "";
				$("program_parentRate_2").innerText = "";
			}
			else
			{
				$("program_time_2").innerHTML =  programList[1].startTime + "-" +  programList[1].endTime;
				$("program_name_2").innerHTML = programList[1].name;
				var rate = programList[1].parentRate ;
				if(rate >= 4 && rate < 19)
				{
					$("program_parentRate_2").innerText = rate + "+";
				}
				else if(top.g_channel.systemCountry==22&&rate == 19)
				{
					$("program_parentRate_1").innerText = "X";
				}
				else
				{
					$("program_parentRate_2").innerText = "";
				}
				isNoProgramData = 0;
			}
			
			if(isNoProgramData == 1)//no program data
			{
				$("promptWin").style.display="none";
			}
			else//其他情况
			{
				$("promptWin").style.display="block";
			}
		}
		$("promptWin").style.top=145+positionV*FOCUS_STEP+"px";
	}
	else
	{
		$("promptWin").style.display="none";
	}
}
function showNoChannelRemind()
{
	try
	{
	if(focusType == "Channellist"&&(channelListType==0 || channelListType==5 )&&channelList.length<=0)
	{
		var opDiv=$("channelListOp").getElementsByTagName("div");
		opDiv[1].style.display="none";
		opDiv[3].style.display="none";
		$("noChannelRemind").style.display="block";
		if(channelListType==0)
		{
			$("noChannelRemind").getElementsByTagName("span")[0].innerHTML=noChannelListRemind[0];
			$("noChannelRemind").getElementsByTagName("div")[0].innerHTML=noChannelListRemind[1];
			focusType = "NoChannellist";
		}
		else
		{
			$("noChannelRemind").getElementsByTagName("span")[0].innerHTML="No favorite channels. Please go to other lists and Use “Green Key” to add favorite channels.";
			$("noChannelRemind").getElementsByTagName("div")[0].style.display = "none";
			console.log("daheng channellist g_channel.channelListType:"+top.g_CurrentchannelListType);
			channel.channelListType = top.g_CurrentchannelListType;
			currentChannelListType = channel.channelListType;
		}

		showOpList();
	}
	else
	{
		var opDiv=$("channelListOp").getElementsByTagName("div");
		opDiv[1].style.display="block";
		opDiv[3].style.display="block";
		$("noChannelRemind").style.display="none";
		showOpList();
	}
	}catch(er)
	{
		channel.testLog("showNoChannelRemind:"+er);
	}
}
function updateFavList()//更新喜爱节目列表
{
	var length = channelList.length;
	if(length<=0)
	{
		var channelBox = $("channelList").getElementsByTagName("ul")[0];
		var lis = channelBox.getElementsByTagName('li');
		for(var i=0 ; i<PAGE_MAX ; i++)
		{
			lis[i].style.display="none";
		}
		$("focus").style.display = "none";
        $("listDownRemind").style.display = "none";
        $("listUpRemind").style.display = "none";
        $("listLeftRemind").style.display = "none";
        $("listRightRemind").style.display = "none";
		return;
	}
	if(positionV>=length)
	{
		positionV=length-1;
	}
	focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
	$("focus").style.top = focusTop+"px";
	var channelBox = $("channelList").getElementsByTagName("ul")[0];
	var lis = channelBox.getElementsByTagName("li");
	//判断当前频道是否够显示一页
	for (var i=0; i<PAGE_MAX; i++)
	{
		var divs = lis[i].getElementsByTagName("div");
		var imgs = lis[i].getElementsByTagName("img");
		
		if (i<length)
		{
			lis[i].style.display="block";
			divs[0].innerText = channelList[i].number;
			divs[1].innerText = channelList[i].name;
			imgs[1].src = channel_type_icon[channelList[i].serviceType];
			if(channelList[i].isFavorite==1)
			{
				$("channelFav"+i).style.display="block";
				$("channelFav"+i).src=favImg[0];
			}
			else
			{
				$("channelFav"+i).style.display="none";
			}
		}
		else
		{
			lis[i].style.display="none";
		}
	}
}

function uninit()
{
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
	channel.resetChannelListType(currentChannelListType);
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	    top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2)
		{
			if(top.g_isUsedHotKeyToIntoPage == 1)
			{
				top.$("main").src="channelPlay.html"
				top.main.focus();
				top.$("operatePage").src="";
			}
			else
			{
				top.$("main").src="index.html"
				top.main.focus();
				top.$("operatePage").src="";
			}
		}//right key
		top.timeoutFuc.osdTimeoutStartOpFuc();
	}
	var channelBox = $("channelList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
	for(var i = 0; i < PAGE_MAX; i++)
	{
		lis[i].setAttribute("newAttr",i);
		lis[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType=="Channellist" || focusType=="EditChannellist")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
					$("focus").style.top = focusTop+"px";
					onOK();
					showChannelPF();
				}
			}
		}
	}
	var channelBox = $("channelSelectList").getElementsByTagName("ul")[0];
			var lis = channelBox.getElementsByTagName("li");
	for(var i = 0; i < PAGE_MAX; i++)
	{
		lis[i].setAttribute("newAttr",i);
		lis[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType=="listType")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
					$("focus").style.top = focusTop+"px";
					onOK();
				}
			}
		}
	}
	var channelBox = $("channelTunerMode").getElementsByTagName("ul")[0];
    var lis = channelBox.getElementsByTagName("li");
	for(var i = 0; i < 3; i++)
	{
		lis[i].setAttribute("newAttr",i);
		lis[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType=="tunnerMode")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					focusTop = FOCUS_INIT_VALUE+ positionV*FOCUS_STEP;
					$("focus").style.top = focusTop+"px";
					onOK();
				}
			}
		}
	}
	$("listUpRemind").onmousedown = function(evt){
			if(evt.button == 0){//left key
			    onUp();
			}
		}
	$("listDownRemind").onmousedown = function(evt){
			if(evt.button == 0){//left key
			   onDown();
			}
		}
    $("listLeftRemind").onmousedown = function(evt){
        if(evt.button == 0){//left key
           onLeft();
        }
    }
    $("listRightRemind").onmousedown = function(evt){
        if(evt.button == 0){//left key
           onRight();
        }
    }
	var channelBox = $("channelListOp").getElementsByTagName("div");
	channelBox[0].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType=="Channellist" || focusType == "NoChannellist")
				{
					toSelectListType();
				}
			}
		}
	channelBox[1].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType=="Channellist")
				{
					toGreen();
				}
			}
		}
		channelBox[2].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType=="Channellist" || focusType == "NoChannellist")
				{
					toSelectTuner();
				}
			}
		}
		channelBox[3].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType =="Channellist"&&channelListType==5)
				{
					toBlue();
				}
				else if(focusType=="EditChannellist")
				{
					toBlue();
				}
			}
		}
}
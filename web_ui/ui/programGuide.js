/***************************** created by chenhua *********************************************/
top.keySetForUI(1); 
var program_guide				= top.chEpgWords;
var weekday 					= top.dayName;
var month_name 					= top.monthName;
var no_channel 					= top.chEpgNoProgram;
var genre_first_level 			= top.chEpgFirstGenre;
var genre_second_level 			= top.chEpgSecondGenre;
var genre_first_level_UK		= top.chEpgFirstGenreUK;
var password_remind 			= [top.others[2],top.others[9],top.okCancel[1],top.passError];			   
var parentRateWord 				= top.others[10];
var epgHotKey					= top.epgHotKey;
var scan						= top.chOptions[0];


document.onkeydown = keyproc;
var setting = top.g_setting;
var channel = top.g_channel;
var language= top.g_language;

//all used
var list_position_h 			= 0;
var channelInfos_list 			= new Array(6);						//当前页面所显示的channel列表
var programInfos_list 			= new Array(6);						//获取当前页要显示的五个频道的节目信息串
var startTimePiece 				= 0;								//时间片开始时间，也就是id=time_piece1的时间，单位为小时
var firstProgramNumOnPiece_list = new Array(6);					//当前时间片上要显示的第一个节目在 整个节目列表中的序号
var isHaveProgramOnPiece_list 	= new Array(6);						//当前时间片上是否有节目，如果有则是1，无节目则是0
for(var i = 0;i < 6;i++)
{
	firstProgramNumOnPiece_list[i] = 0;
	isHaveProgramOnPiece_list[i] = 0;
}
var positionOfPiece 			= 0;								//当前频道当前节目在时间片上的位置0--N
var MAX_programCountOnPiece 	= new Array(6);						//记录六个频道在当前时间片上分别有多少个event
var nowTime 					= "";
var nowDate						= "";
var nowDay 						= 0;								//当前节目的星期
var programListDivList;												//网页中program 显示行的句柄
/*-----------form_flag 是否有弹出菜单框的标志，为0时没有弹出菜单框，为1时弹出密码弹出框，为2时弹出filter/schedule/booking等菜单--------*/
var form_flag 					= 0;
var programSartTime 			= 0;								//current节目的开始时间。单位为小时
var distanceDate 				= 0;								//当前时间片上的节目日期与当前日期的距离。
var form_position_h				= 0;								//弹出菜单框中当前焦点按钮位置
var channelLength 				= 100;								//只在频道数量小于6时使用，默认是很到的值：100
var country 					= 0;								//channel.systemCountry;
var franceCountryNum 			= 8;
var channelStatus 				= 0;								//0 没有频道，1 有频道和节目
var volume 						= 0;
var minWidthAlowShowName 		= 25;								//允许事件列表中显示事件名称的时间片最小宽度

var SHOW_WIDTH = 1200;//显示program list的元素的宽度


var flagImg						= ["images/blank.png",
									"images/icon_D_focus.png",
									"images/icon_R_focus.png",
									"images/icon_T_focus.png",
									"images/icon_A_focus.png",
									"images/icon_S_focus.png"];//channel类型图片



/*isInit:1是，0 否用来判断是否是第一次进入EPG;
*本来是用来处理第一次进入时必须按从小到大的顺序排列EPG的，龙辉要求从一开就要循环显示，所以，默认值改成0.
*/
var isInit 						= 0;//1;								



var difference					= 0;								//保存差值
var detailPageSum 				= 0;								//内容简介可使用页数,当没有数据的时候是0也，有数据则大于等于1页
var detailPagePosition 			= 0;
var pageDirection 				= 1;								//翻页方向1为向下翻，-1为向上翻

var exitFlag                    = 0;
var currentChannelListType      = 0;
var callChangeChannelTimer 				= 0;
var ToHomeTimer=setTimeout("top.jumpPage()",15*60*1000);
function setAndClearTimer()
{
	if(ToHomeTimer!=0)
	{
		clearTimeout(ToHomeTimer);
		ToHomeTimer=0;
	}
	ToHomeTimer = setTimeout("top.jumpPage()",15*60*1000);
}
function keyproc(e)
{
	if(exitFlag == 1)
	{
		return;
	}
	setAndClearTimer();
	top.Log("key in EPG");
	var ret = true;
	var keycode = e.which;
	//快捷键
	switch(keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt
			if(top.virtualRemoteState == 0)
			{
				top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote(top.RemoteConntrolType);
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
			console.log("lqt---programGuide.js---clientX: "+clientX);
			console.log("lqt---programGuide.js---clientY: "+clientY);
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
		case top.VK_POWER://power
		case top.VK_MUTE://mute
		//case top.VK_PRE_CH://pre-ch
			top.keyDownProcess(e);
			return;
        case top.VK_NETFLIX:
            top.keyDownProcess(evt);
            return;
		case top.VK_MENU:
		case top.VK_EXIT:
			exitFlag = 1;
			top.keyDownProcess(e);
			return;
		case top.VK_GUIDE://guide
			exitFlag = 1;
			top.jumpPage();
			break;
		case top.VK_VOLUME_UP://volume up
			if(volume == 0)
			{
				volume = channel.volume;
			}
			volume++;
			if(volume > 100)
			{
				volume = 100;
			}
			else
			{
				channel.volume = volume;
			}
			if(top.mute_status>0)
			{
				top.showMute(0);
			}
			return;
		case top.VK_VOLUME_DOWN://volume down
			if(volume == 0)
			{
				volume = channel.volume;
			}
			volume--;
			if(volume < 0)
			{
				volume = 0;
			}
			else
			{
				channel.volume = volume;
			}
			return;
		default:
			break;
	}
	
	if(channelStatus)//有频道
	{
		switch(keycode)
		{
			case top.VK_REWIND: //previous
				if(form_flag == 0)
				{
					doPreviousDay();
				}
				break;
			case top.VK_PLAY_PAUSE://pause/play
				return;//此功能暂时去掉
				break;
			case top.VK_FAST_FWD: //next
				if(form_flag == 0 )
				{
					doNextDay();
				}
				break;
			case top.VK_BLUE://case top.VK_RED://page down
				return;//此功能暂时去掉
				break;
			case top.VK_GREEN://page up
				return;//此功能暂时去掉
				break;
			case top.VK_RED://case top.VK_BLUE:
				top.g_booking_interrelated = 
				{
					bookingChannel			: channelInfos_list[list_position_h],
					isHaveProgramMoreInfo	: isHaveProgramOnPiece_list[list_position_h],
					bookingEvent			: programInfos_list[list_position_h][firstProgramNumOnPiece_list[list_position_h] + positionOfPiece],
					
				}
				form_flag = 2;
				showFilterOrBooking("bookingInterrelated.html?booking");
				break;
			case top.VK_YELLOW://schedule list
				top.g_booking_interrelated = 
				{
					bookingChannel			: channelInfos_list[list_position_h],
					isHaveProgramMoreInfo	: isHaveProgramOnPiece_list[list_position_h],
					bookingEvent			: programInfos_list[list_position_h][firstProgramNumOnPiece_list[list_position_h] + positionOfPiece],
					
				}
				form_flag = 2;
				showFilterOrBooking("bookingInterrelated.html?schedule");
				break;
			case top.VK_OPTION://option
				//lqt---按设置键时，虚拟遥控器隐藏
				if(top.virtualRemoteState == 1)
				{
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
				}
				form_flag = 2;
				showFilterOrBooking("filter.html");
				break;
			case top.VK_LEFT:
				// left
				toLeft();
				ret = false;
				break;
			case top.VK_UP:
				// up
				toUp();
				ret = false;
				break;
			case top.VK_RIGHT:
				// right
				toRight();
				ret = false;
				break;
			case top.VK_DOWN:
				//down
				toDown();
				ret = false;
				break;
			case top.VK_ENTER:
				doEnter();
				ret = false;
				break;
			case top.VK_BACK:
				//menu
				toBack();
				ret = false;
				break;
			case top.VK_CHANNEL_UP://channel +
				if(form_flag == 0)
				{
					curIndex =  channel.getNextIndexByIndex(curIndex);
					doChannelUpDownRefresh(curIndex);
					if(curIndex != channel.currentIndex)
					{
					    top.g_openMheg5State=0;
						 if(top.currentPanel==1)
						{
							if(top.g_setting.pic3DMode!=0)
							{
								top.g_setting.pic3DMode=0;
								top.$("globleShow").contentWindow.hiddenGlassRemind();
							}
						}else if(top.currentPanel==2)
						{
							if(top.g_setting.pic3DMode!=0)
							{
								top.g_setting.pic3DMode=0;
							}
						}
						 top.channelLock = 0;
						top.parentalLock = 0;
						top.inputLock = 0;
						top.currentChannelIndex = curIndex;
						channel.playByIndex(curIndex);
					}
					
				}
				break;
			case top.VK_CHANNEL_DOWN://channel -
				if(form_flag == 0)
				{
					curIndex =  channel.getPreviousIndexByIndex(curIndex);
					doChannelUpDownRefresh(curIndex);
					if(curIndex != channel.currentIndex)
					{
					    top.g_openMheg5State=0;
						 if(top.currentPanel==1)
						{
							if(top.g_setting.pic3DMode!=0)
							{
								top.g_setting.pic3DMode=0;
								top.$("globleShow").contentWindow.hiddenGlassRemind();

							}
						}else if(top.currentPanel==2)
						{
							if(top.g_setting.pic3DMode!=0)
							{
								top.g_setting.pic3DMode=0;
							}
						}
						top.channelLock = 0;
						top.parentalLock = 0;
						top.inputLock = 0;
						top.currentChannelIndex =  curIndex;
						channel.playByIndex(curIndex);
					}
				}
				break;
			case top.VK_0://0
			case top.VK_1://1
			case top.VK_2://2
			case top.VK_3:
			case top.VK_4:
			case top.VK_5:
			case top.VK_6:
			case top.VK_7:
			case top.VK_8:
			case top.VK_9://9
				if(form_flag == 1)
				{
					doPassNumber(keycode - 48);
				}
				break;
			default:
				ret = true;
				break;
		}
	}
	else
	{
		switch(keycode)
		{
			case top.VK_BACK:
				//menu
				toBack();
				ret = false;
				break;
			case top.VK_ENTER:
				var install_lock = setting.installLock;//off 0    on 1
				if(top.g_factory.hotelEnable == 1 && top.g_factory.hotelChLock == 1)
				{
					top.g_nextHtmlPage = "channelSet.html";
					top.$("main").src = "index.html";
				}
				else if(install_lock == 1)
				{//开
					top.g_nextHtmlPage = "channelSet.html";
					top.$("main").src = "index.html";
				}
				else 
				{
					top.g_nextHtmlPage = "channelScan.html";
					top.$("main").src = "index.html";
				}
				break;
			default:
				ret = true;
				break;
		}
	}
	return ret;
}
function $(id)
{
	return document.getElementById(id);
}

var passwordValue = "";
var passwordInput = "";

document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	//全局消息
	switch(msg)
	{
		
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_SS_CH_BLOCK://channel lock
		case top.E_SS_PARENTAL_BLOCK://有节目锁
		case top.E_DTV_SS_INPUT_BLOCK://有信源锁
		case top.E_SS_COMMON_VIDEO:// service ready
		case top.E_DTV_SS_RUNNING_STATUS_NOT_RUNNING:
			top.systemEventProc(evt);
			showContent(list_position_h,positionOfPiece);//针对那些如果频道有锁的情况
			break;
		//case top.E_DTV_SERVICE_PLAY://channel service play:channel list changed
		case top.E_DTV_EPG_UPDATE_ALL_PAGE:
			refreshEpg();
			break;
		case top.E_CHANNEL_PLAY_END://channel change end
			var tchannel = channel.getCurrentChannelInfo();
			curIndex = tchannel.index;
			//showContent(list_position_h,positionOfPiece);//此处换到收到屏保相关消息来处理
			break;
		case top.E_DTV_EPG_PF_FINISH://eit refresh
		case top.E_DTV_EPG_SCH_FINISH://epg refresh
			channel.forbidSwitchOfDBWrite = 1;
			for(var i = 0; i < 6 && i < channelLength; i++)
			{
				if(value == channelInfos_list[i].number)
				{
					//programInfos_list[i] = channelInfos_list[i].getProgramMoreList(channelInfos_list[i].index,distanceDate);
					programInfos_list[i] = channelInfos_list[i].getProgramMoreListByPage(channelInfos_list[i].index,distanceDate,startTimePiece);
					firstProgramNumOnPiece_list[i] = 0;
					
					//刷新时间片之前要把以前分的片给清空
					programListDivList[i].innerText = "";
					programListDivList[i].style.display = "block";
					
					//时间分片
					sliceTimeLeftToRight(i,distanceDate);
					
					if(list_position_h == i)//如果刷新的是当前焦点所在的节目则要注意焦点的刷新
					{
						var fucous_program = programListDivList[i].getElementsByTagName('span');
						fucous_program[positionOfPiece].style.backgroundColor = "#000";
						fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
						fucous_program[positionOfPiece].style.zIndex = 100;
						showContent(i,positionOfPiece);
					}
					
					showBoldFav();
				}
			}
			channel.forbidSwitchOfDBWrite = 0;
			break;
		case top.E_DTV_TOT_UPDATE://tot refresh

			nowDate = setting.currentDate;
			nowTime = setting.currentTime;
			//distanceDate = 0;
			//startTimePiece = parseInt(nowTime.substring(0,2),10);
			refreshPieceTime(nowDate,distanceDate,startTimePiece);
			getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);
			showProgramToRight();
			break;
		case top.E_CHANNEL_LIST_UPDATE:
			//清除上一次的焦点
			channelListDivList[list_position_h].style.backgroundColor = "transparent";
			init();
			break;
		case top.E_CI_DATA_READY://ci data ready
		case top.E_CI_CAM_NAME_READY://CI_CAM_NAME_READY
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_CI_UPGR_INPROGRESS:
		case top.E_CI_UPGR_NOT_INPROGRESS://CI update end
		case top.E_CI_MHEG_OPEN://ci MHEG打开，需要进入channel_play页面并
		case top.E_CI_MHEG_CLOSE://ci MHEG closed
		case top.E_CI_EXIT_CI:
			break;
		default:
			top.systemEventProc(evt);
			break;
	}
}
/*
*函数描述： 主要是因为更换码流等原因引起epg列表更新的处理
*参数：
*返回值：
*用到的外部变量描述：
*/
function refreshEpg()
{
	hotkeyImgList[0].style.display = "none";
	hotkeySpanList[0].style.display = "none";
	distanceDate = 0;
	/*
	var tChannel = channel.getCurrentChannelInfo();
	
	if(tChannel.isSkip)
	{
		curIndex = channel.nextIndex;
	}
	else
	{
		curIndex = tChannel.index;
	}
		
	refreshChannelShow(curIndex,1);
	*/
	startTimePiece = parseInt(nowTime.substring(0,2),10);
	refreshPieceTime(nowDate, distanceDate, startTimePiece);
	getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);
	showProgramToRight();
}

/*
*函数描述：处理channel up 和channel down按键切换电台完成后的界面刷新显示
*参数：channelIndex;当前频道index值
*返回值：
*用到的外部变量描述：list_position_h（当前频道焦点的位置0-5），positionOfPiece（当前event焦点在时间片的位置序号>0）,channelInfos_list(保存频道信息的数组),
*/
function doChannelUpDownRefresh(channelIndex)
{
	var i = 0;
	for( i = 0; i < 6 && i < channelLength; i++)
	{
		if(channelIndex == channelInfos_list[i].index)
		{
			break;
		}
	}
	
	if(i < 6 && i < channelLength)//切换的目标节目在当前显示的节目列表中
	{
		channelListDivList[list_position_h].style.backgroundColor = "transparent";
		var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
		fucous_program[positionOfPiece].style.backgroundColor = "transparent";
		fucous_program[positionOfPiece].style.border = "none";
		fucous_program[positionOfPiece].style.zIndex = 0;
		
		positionOfPiece = 0;
		
		list_position_h = i;
		
		channelListDivList[list_position_h].style.backgroundColor = "#500000";
		fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
		fucous_program[positionOfPiece].style.backgroundColor = "#000";
		fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
		fucous_program[positionOfPiece].style.zIndex = 100;
		showContent(list_position_h,positionOfPiece);
	}
	else//切换的目标节目不在当前显示的节目列表中，需要重新获取数据，重置焦点.
	{
		//初始化频道信息列表,清除当前list_position_h上的焦点，并重置list_position_h和焦点
		refreshChannelShow(channelIndex,1);
		//programListDivList = $('program_list').getElementsByTagName('div');
		var i=0;
		for(i=0;i<6;i++)
		{
			programListDivList[i].innerText = "";
			var piece = document.createElement('span');
			piece.setAttribute("class","program");//firefox
			piece.innerText = program_guide[1];
			piece.style.left = 0 + "px";
			piece.style.width =  SHOW_WIDTH + "px";
			programListDivList[i].appendChild(piece);	
		}
		refreshPieceTime(nowDate,distanceDate,startTimePiece);//更新时间片时间
		setTimeout(function (){getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);showProgramToRight()},1);
	}
}
/*
*按钮事件，按“1”发生
*/
function doPreviousDay()
{
	if(form_flag == 0)
	{
		if(distanceDate > 0)
		{
			distanceDate -= 1;
			
			if(distanceDate < 8)
			{
				hotkeyImgList[1].style.display = "block";
				hotkeySpanList[1].style.display = "block";
			}
			
			if(distanceDate == 0)
			{
				startTimePiece = programSartTime;
				hotkeyImgList[0].style.display = "none";
				hotkeySpanList[0].style.display = "none";
			}
			else
			{
				startTimePiece = 0;
				hotkeyImgList[0].style.display = "block";
				hotkeySpanList[0].style.display = "block";
			}
			refreshPieceTime(nowDate,distanceDate,startTimePiece);
			//获取新的时间片上的第一个节目的序号
			for(var i = 0; i < 6; i++)
			{
				firstProgramNumOnPiece_list[i] = 0;
			}
			setTimeout(function (){getMoreProgramList(distanceDate,1/*direction,左移获取event列表*/,startTimePiece);showProgramToRight()},1);
		}
	}
}
/*
*按钮事件：按“2”时发生
*/
function doNextDay()
{
	if(form_flag == 0)
	{
		if(distanceDate < 8)
		{
			distanceDate += 1;
			
			if(distanceDate > 0)
			{
				hotkeyImgList[0].style.display = "block";
				hotkeySpanList[0].style.display = "block";
			}
			
			if(distanceDate == 8)
			{
				hotkeyImgList[1].style.display = "none";
				hotkeySpanList[1].style.display = "none";
			}
			else
			{
				hotkeyImgList[1].style.display = "block";
				hotkeySpanList[1].style.display = "block";
			}
			startTimePiece = 0;
			refreshPieceTime(nowDate,distanceDate,startTimePiece);
			//获取新的时间片上的第一个节目的序号
			for(var i = 0; i < 6; i++)
			{
				firstProgramNumOnPiece_list[i] = 0;
			}
			setTimeout(function (){getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);showProgramToRight()},1);
		}
	}
	else {}
}
function toLeft()
{
	if(form_flag == 1)
	{
		var len = passwordInput.length;
		if(len < 1) return

		passwordValue = passwordValue.substring(0,(len-1));
		passwordInput = passwordInput.substring(0,(len-1));
		$('password').innerText = passwordInput + "_";
	}
	else if(form_flag == 0)//在主页面上
	{
		if(positionOfPiece > 0)//当前节目焦点不在时间片的最左端
		{
			var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
			fucous_program[positionOfPiece].style.backgroundColor = "transparent";
			fucous_program[positionOfPiece].style.border = "none";
			fucous_program[positionOfPiece].style.zIndex = 0;
			fucous_program[positionOfPiece - 1].style.backgroundColor = "#000";
			fucous_program[positionOfPiece - 1].style.border = "thin #00aadd solid";
			fucous_program[positionOfPiece - 1].style.zIndex = 100;
			positionOfPiece--;
			showContent(list_position_h,positionOfPiece);
		}
		else if(positionOfPiece == 0 /* && firstProgramNumOnPiece_list[list_position_h] > 0*/)
		{
			if(distanceDate >= 0)
			{
				//重新设置时间片开始时间
				startTimePiece -= 2;
				if(distanceDate == 0 )
				{
					if(programSartTime >= (startTimePiece + 2))
					{
						startTimePiece += 2;
						return;
					}
					else {}
				}
				else//distanceDate > 0
				{
					if(startTimePiece < 0)
					{
						if(startTimePiece == -1)
						{
							startTimePiece = 0;
						}
						else
						{
							distanceDate -= 1;
							startTimePiece = 24 + startTimePiece;
							if(distanceDate == 0)
							{
								if(programSartTime%2 == 1)//时间片第一天开始时间是基数
								{
									startTimePiece = 23;
								}
								hotkeyImgList[0].style.display = "none";
								hotkeySpanList[0].style.display = "none";
							}
							else
							{
								hotkeyImgList[0].style.display = "block";
								hotkeySpanList[0].style.display = "block";
							}
						}
					}
				}
				refreshPieceTime(nowDate,distanceDate,startTimePiece)//填写时间片上时间
				getMoreProgramList(distanceDate,-1/*direction,左移获取event列表*/,startTimePiece);
				showProgramToLeft();
			}
		}
		showLeftRightPageImg();
	}
}

var channelChange = 0;//预约录制的时候用来判断频道number是否编辑过
function toRight()
{
	if(form_flag == 0)
	{
		if(positionOfPiece < (MAX_programCountOnPiece[list_position_h] - 1))
		{
			var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
			fucous_program[positionOfPiece].style.backgroundColor = "transparent";
			fucous_program[positionOfPiece].style.border = "none";
			fucous_program[positionOfPiece].style.zIndex = 0;
			fucous_program[positionOfPiece + 1].style.backgroundColor = "#000";
			fucous_program[positionOfPiece + 1].style.border = "thin #00aadd solid";
			fucous_program[positionOfPiece + 1].style.zIndex = 100;
			positionOfPiece++;
			showContent(list_position_h,positionOfPiece);
		}
		else
		{
			if(distanceDate < 9)
			{
				//重新设置时间片开始时间
				startTimePiece += 2;
				if(distanceDate == 8)
				{
					if(startTimePiece >= 24)
					{
						startTimePiece -= 2;
						return;
					}
				}
				else
				{
					if(startTimePiece >= 24)
					{
						distanceDate += 1;
						startTimePiece = 0;
						if(distanceDate == 8)
						{
							hotkeyImgList[0].style.display = "none";
							hotkeySpanList[0].style.display = "none";
						}
						else
						{
							hotkeyImgList[0].style.display = "block";
							hotkeySpanList[0].style.display = "block";
						}
					}
				}
				refreshPieceTime(nowDate,distanceDate,startTimePiece);
				getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);
				showProgramToRight();
			}
		}
		showLeftRightPageImg();
	}
}

function toUp()
{
	if(form_flag == 0)
	{
		if(list_position_h > 0)
		{
			channelListDivList[list_position_h].style.backgroundColor = "transparent";
			var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
			fucous_program[positionOfPiece].style.backgroundColor = "transparent";
			fucous_program[positionOfPiece].style.border = "none";
			fucous_program[positionOfPiece].style.zIndex = 0;
			
			list_position_h -= 1;
			positionOfPiece = 0;
			
			channelListDivList[list_position_h].style.backgroundColor = "#500000";
			fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
			fucous_program[positionOfPiece].style.backgroundColor = "#000";
			fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
			fucous_program[positionOfPiece].style.zIndex = 100;
			showContent(list_position_h,positionOfPiece);
		}
		else 
		{
			//初始化页面
			if(channelLength <= 6)
			{
				var tIndex = channel.getPreviousIndexByIndex(channelInfos_list[0].index);
				var i = 0;
				for( i = 0; i < 6 && i < channelLength; i++)
				{
					if(channelInfos_list[i].index == tIndex)
					{
						break;
					}
				}
				
				if(i < 6 && i < channelLength)//当前频道的下一个频道包含在当前显示的频道中
				{
					channelListDivList[list_position_h].style.backgroundColor = "transparent";
					var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
					fucous_program[positionOfPiece].style.backgroundColor = "transparent";
					fucous_program[positionOfPiece].style.border = "none";
					fucous_program[positionOfPiece].style.zIndex = 0;
					
					list_position_h = channelLength - 1;
					positionOfPiece = 0;
					
					channelListDivList[list_position_h].style.backgroundColor = "#500000";
					fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
					fucous_program[positionOfPiece].style.backgroundColor = "#000";
					fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
					fucous_program[positionOfPiece].style.zIndex = 100;
					showContent(list_position_h,positionOfPiece);
				}
				else
				{
					var tIndex = channel.getPreviousIndexByIndex(channelInfos_list[0].index);
					//初始化频道信息列表,清除当前list_position_h上的焦点，并重置list_position_h和焦点
					refreshChannelShow(tIndex,-1);
					//programListDivList = $('program_list').getElementsByTagName('div');
					//初始化
					var i=0;
					for(i=0;i<6;i++)
					{
						programListDivList[i].innerText = "";
						var piece = document.createElement('span');
						piece.setAttribute("class","program");//firefox
						piece.innerText = program_guide[1];
						piece.style.left = 0 + "px";
						piece.style.width =  SHOW_WIDTH + "px";
						programListDivList[i].appendChild(piece);	
					}
					
					refreshPieceTime(nowDate,distanceDate,startTimePiece);//更新时间片时间
					//setTimeout(function (){getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);showProgramToRight()},1);
					getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);
					showProgramToRight();
				}
			}
			else
			{
				var tIndex = channel.getPreviousIndexByIndex(channelInfos_list[0].index);
				//初始化频道信息列表,清除当前list_position_h上的焦点，并重置list_position_h和焦点
				refreshChannelShow(tIndex,-1);
				//programListDivList = $('program_list').getElementsByTagName('div');
				//初始化
				/*var i=0;
				for(i=0;i<6;i++)
				{
					programListDivList[i].innerText = "";
					var piece = document.createElement('span');
					piece.setAttribute("class","program");//firefox
					piece.innerText = program_guide[1];
					piece.style.left = 0 + "px";
					piece.style.width =  SHOW_WIDTH + "px";
					programListDivList[i].appendChild(piece);	
				}
				*/
				refreshPieceTime(nowDate,distanceDate,startTimePiece);//更新时间片时间
				//setTimeout(function (){getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);showProgramToRight()},1);
				getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);
				showProgramToRight();
			}
		}
		doChangeChanneltimeout();
		showUpDownPageImg();
	}
}
function doChangeChanneltimeout()
{
	clearTimeout(callChangeChannelTimer);
	callChangeChannelTimer = setTimeout("doEnter();", 1500);
}
function toDown()
{
	if(form_flag == 0)
	{
		if(channelLength > 6)
		{
			if(list_position_h < 5)
			{
				channelListDivList[list_position_h].style.backgroundColor = "transparent";
				var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
				fucous_program[positionOfPiece].style.backgroundColor = "transparent";
				fucous_program[positionOfPiece].style.border = "none";
				fucous_program[positionOfPiece].style.zIndex = 0;
				
				list_position_h += 1;
				positionOfPiece = 0;
				
				channelListDivList[list_position_h].style.backgroundColor = "#500000";
				fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
				fucous_program[positionOfPiece].style.backgroundColor = "#000";
				fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
				fucous_program[positionOfPiece].style.zIndex = 100;
				showContent(list_position_h,positionOfPiece);
			}
			else
			{
				//初始化频道信息列表
				var tIndex = channel.getNextIndexByIndex(channelInfos_list[5].index);
				//初始化频道信息列表,清除当前list_position_h上的焦点，并重置list_position_h和焦点
				refreshChannelShow(tIndex,1);
				//programListDivList = $('program_list').getElementsByTagName('div');
				/*var i=0;
				for(i=0;i<6;i++)
				{
					programListDivList[i].innerText = "";
					var piece = document.createElement('span');
					piece.setAttribute("class","program");//firefox
					piece.innerText = program_guide[1];
					piece.style.left = 0 + "px";
					piece.style.width =  SHOW_WIDTH + "px";
					programListDivList[i].appendChild(piece);	
				}*/
				refreshPieceTime(nowDate,distanceDate,startTimePiece);//更新时间片时间
				//setTimeout(function (){getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);showProgramToRight()},1);
				getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);
				showProgramToRight();
			}
		}
		else
		{
			if(list_position_h < (channelLength - 1))
			{
				channelListDivList[list_position_h].style.backgroundColor = "transparent";
				var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
				fucous_program[positionOfPiece].style.backgroundColor = "transparent";
				fucous_program[positionOfPiece].style.border = "none";
				fucous_program[positionOfPiece].style.zIndex = 0;
				list_position_h += 1;
				positionOfPiece = 0;
				
				channelListDivList[list_position_h].style.backgroundColor = "#500000";
				fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
				fucous_program[positionOfPiece].style.backgroundColor = "#000";
				fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
				fucous_program[positionOfPiece].style.zIndex = 100;
				showContent(list_position_h,positionOfPiece);
			}
			else
			{
				var tIndex = channel.getNextIndexByIndex(channelInfos_list[channelLength - 1].index);
				var i = 0;
				for( i = 0; i < 6 && i < channelLength; i++)
				{
					if(channelInfos_list[i].index == tIndex)
					{
						break;
					}
				}
				
				if(i < 6 && i < channelLength)//当前频道的下一个频道包含在当前显示的频道中
				{
					channelListDivList[list_position_h].style.backgroundColor = "transparent";
					var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
					fucous_program[positionOfPiece].style.backgroundColor = "transparent";
					fucous_program[positionOfPiece].style.border = "none";
					fucous_program[positionOfPiece].style.zIndex = 0;
					
					list_position_h = 0;
					positionOfPiece = 0;
					
					channelListDivList[list_position_h].style.backgroundColor = "#500000";
					fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
					fucous_program[positionOfPiece].style.backgroundColor = "#000";
					fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
					fucous_program[positionOfPiece].style.zIndex = 100;
					showContent(list_position_h,positionOfPiece);
				}
				else
				{
					//初始化频道信息列表
					var tIndex = channel.getNextIndexByIndex(channelInfos_list[channelLength - 1].index);
					//初始化频道信息列表,清除当前list_position_h上的焦点，并重置list_position_h和焦点
					refreshChannelShow(tIndex,1);
					//programListDivList = $('program_list').getElementsByTagName('div');
					var i=0;
					for(i=0;i<6;i++)
					{
						programListDivList[i].innerText = "";
						var piece = document.createElement('span');
						piece.setAttribute("class","program");//firefox
						piece.innerText = program_guide[1];
						piece.style.left = 0 + "px";
						piece.style.width =  SHOW_WIDTH + "px";
						programListDivList[i].appendChild(piece);	
					}
					refreshPieceTime(nowDate,distanceDate,startTimePiece);//更新时间片时间
					//setTimeout(function (){getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);showProgramToRight()},1);
					getMoreProgramList(distanceDate,1/*direction,右移获取event列表*/,startTimePiece);
					showProgramToRight();
				}
			}
			
		}
		doChangeChanneltimeout();
		showUpDownPageImg();
	}
}


function doPassNumber(number)
{
	passwordValue = "" + passwordValue + number;
	passwordInput += "*";
	$('password').innerText = passwordInput + "_";
	if (passwordValue.length < 4) {
		return;
	}
	if(passwordValue != setting.password &&  passwordValue != top.g_superPassword/*setting.checkPassword(password_input_value) != 1*/)
	{
		var str = password_remind[3].replace(/\n/," ");
		$('password_notice').innerText = str;
	}
	else
	{
		$('user_password').style.display = "none";
		form_flag = 0;
		channel.playLockProgram();
		top.parentalLock = 0;
		top.channelLock = 0;
		top.inputLock = 0;
		//等待播放的消息，然后做下面的操作
	}
	passwordValue = "";
	passwordInput = "";
	$('password').innerText = "_";
}


function doEnter()
{
	clearTimeout(callChangeChannelTimer);
	if(form_flag == 0)
	{
		if(channelInfos_list[list_position_h].index == curIndex)//当前频道
		{
			if(top.parentalLock == 1 || top.channelLock == 1 || top.inputLock == 1)
			{
				form_flag = 1;
				$("password_notice").innerText = password_remind[0];
				var li = $("user_password").getElementsByTagName("span");
				li[0].innerText = password_remind[1];
				li[1].innerText = password_remind[2];
				passwordValue = "";
				passwordInput = "";
				$("password").innerText = "_";
				$("user_password").style.display = "block";
			}
			else
			{
				return;
			}
		}
		else//对于非当前频道如果属性有锁，也是先跳转然后通过消息判断要不要显示解锁界面
		{
			if(channel.currentIndex!=channelInfos_list[list_position_h].index)
			{
				top.g_openMheg5State=0;
				 if(top.currentPanel==1)
					{
						if(top.g_setting.pic3DMode!=0)
						{
							top.g_setting.pic3DMode=0;
							top.$("globleShow").contentWindow.hiddenGlassRemind();
						}
					}else if(top.currentPanel==2)
					{
						if(top.g_setting.pic3DMode!=0)
						{
							top.g_setting.pic3DMode=0;
						}
					}
				  top.channelLock = 0;
				top.parentalLock = 0;
				top.inputLock = 0;
				top.currentChannelIndex = channelInfos_list[list_position_h].index;
				channel.playByIndex(channelInfos_list[list_position_h].index);
			}
			
		}
	}
}


		
/*
*切分时间，将以秒为单位的时间切分出时，分，秒的字符串
*/
function doTime(time)
{
	var hour = parseInt(time/3600,10);
	var minute =  parseInt((time - hour*3600)/60,10);
	var second = time%60;
	
	
	if(hour > 23)
	{
		hour -= 24;
	}
	
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	if(second < 10)
	{
		second = "0" + second;
	}
	return (hour + ":" + minute + ":" + second);
}


function toBack()
{
	if(form_flag == 1)
	{
		form_flag = 0;
		$("user_password").style.display = "none";
	}/*
	else if(form_flag == 0)
	{
		document.location.href= "index.html";
	}*/
}


//对喜爱节目着重显示
function showBoldFav()
{
	//top.Log("in  showBoldFav channelLength = " + channelLength);
	genreStatus = channel.favGenre.split("/");
	for(var i = 0; i < 6 && i < channelLength; i++)
	{
		//top.Log("in  showBoldFav MAX_programCountOnPiece[" + i + "] = " + MAX_programCountOnPiece[i]);
		var tempSpanList = programListDivList[i].getElementsByTagName('span');
		for(var j = 0; j < MAX_programCountOnPiece[i] && (isHaveProgramOnPiece_list[i] == 1)/*have program*/; j++)
		{
			var pgenre = programInfos_list[i][firstProgramNumOnPiece_list[i] + j].genre;
			//top.Log("in  showBoldFav pgenre = " + pgenre);
			var firstGenre = pgenre>>4;
			//top.Log("in  showBoldFav firstGenre = " + firstGenre);
			
			if(firstGenre < 1)
			{
				tempSpanList[j].style.color = "#FFF";
				continue;
			}
			
			if(country == 25)//UK
			{
				switch(firstGenre)
				{
					case 1://movie
						if("1" == genreStatus[0].substring(0,genreStatus[0].indexOf(":")))//被选中
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else
						{
							tempSpanList[j].style.color = "#FFF";
						}
						break;
					case 2://News and Factual
					case 7:
					case 8:
						if("1" == genreStatus[1].substring(0,genreStatus[1].indexOf(":")))//被选中
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else
						{
							tempSpanList[j].style.color = "#FFF";
						}
						break;
					case 3://Entertainment
					case 6:
						if("1" == genreStatus[2].substring(0,genreStatus[2].indexOf(":")))//被选中
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else
						{
							tempSpanList[j].style.color = "#FFF";
						}
						break;
					case 4://sport
						if("1" == genreStatus[3].substring(0,genreStatus[3].indexOf(":")))//被选中
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else
						{
							tempSpanList[j].style.color = "#FFF";
						}
						break;
					case 5://Children's
						if("1" == genreStatus[4].substring(0,genreStatus[4].indexOf(":")))//被选中
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else
						{
							tempSpanList[j].style.color = "#FFF";
						}
						break;
					case 9://Education
						if("1" == genreStatus[5].substring(0,genreStatus[5].indexOf(":")))//被选中
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else
						{
							tempSpanList[j].style.color = "#FFF";
						}
						break;
					case 10://Lifestyle
						if("1" == genreStatus[6].substring(0,genreStatus[6].indexOf(":")))//被选中
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else
						{
							tempSpanList[j].style.color = "#FFF";
						}
						break;
					case 15://Drama
						if("1" == genreStatus[7].substring(0,genreStatus[7].indexOf(":")))//被选中
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else
						{
							tempSpanList[j].style.color = "#FFF";
						}
						break;
					default:
						tempSpanList[j].style.color = "#FFF";
						break;
				}
			}
			else
			{
				if(firstGenre <= 0 || firstGenre >= 12)//DVB标准没有定义
				{
					tempSpanList[j].style.color = "#FFF";
				}
				else
				{
					var systemGenreInfo = genreStatus[firstGenre - 1];
					var systemFirstGenre = systemGenreInfo.substring(0,systemGenreInfo.indexOf(":"));
					var systemSecondGenre = systemGenreInfo.substring(systemGenreInfo.indexOf(":") + 1);
					//top.Log("in  showBoldFav systemGenreInfo = " + systemGenreInfo + " systemFirstGenre = " + systemFirstGenre + " systemSecondGenre = " + systemSecondGenre);
					if(systemFirstGenre == "1")
					{
						if(systemSecondGenre == "0000000000000000")//如果只是选择了大的分类则所有该类的大分类都要着重显示
						{
							tempSpanList[j].style.color = "#FF0";
						}
						else//如果选择了大的分类下的子分类，则只有该子分类才着重显示
						{
							var secondLevel = pgenre&15;//取低四位
							if(systemSecondGenre.substring(secondLevel,secondLevel + 1) == "1")//该子分类是爱好的子分类，要着重显示
							{
								tempSpanList[j].style.color = "#FF0";
							}
							else
							{
								tempSpanList[j].style.color = "#FFF";
							}
						}
						
					}
					else
					{
						tempSpanList[j].style.color = "#FFF";
					}
				}
			}
		}
	}
	
	//top.Log("in  showBoldFav end");
}


/*
*获取六个频道的所有节目的信息，参数：distance，距离系统时间的日期的天数,direction:1焦点因右移而获取新数据，-1：焦点因左移而获取新数据,startTime:要获取的两小时内的EPG的开始时间（0-24）
*/
function getMoreProgramList(distance,direction,startTime)
{
	var start = new Date();
	channel.forbidSwitchOfDBWrite = 1;
	var i = 0;
	for( i = 0; i < 6; i++)
	{
		if(channelLength < 6 && i >= channelLength)//频道《 6时的特殊情况
		{
			break;
		}
		programInfos_list[i] = channelInfos_list[i].getProgramMoreListByPage(channelInfos_list[i].index,distance,startTime);
		/*
		top.Log("programInfos_list[" + i + "].length = " + programInfos_list[i].length );
		for(var j = 0; j < programInfos_list[i].length; j++)
		{
			top.Log("j = " + j + ",event name = " + programInfos_list[i][j].name);
		}*/
		//获取每一天起始的第一个节目在list中的序号，保存在firstProgramNumOfDay_list中
		if(direction > 0)
		{
			firstProgramNumOnPiece_list[i] = 0;
		}
		else
		{
			firstProgramNumOnPiece_list[i] = programInfos_list[i].length;
		}
	}
	channel.forbidSwitchOfDBWrite = 0;
}
/*
*更新channel list列，清除当前list_position_h上的焦点，并重置list_position_h和焦点
*参数：firstChannelIndex:用来获取频道列表的第一个频道的channelIndex;flag:-1表示向上获取列表，1表示向下获取列表
*1.保存 当前要显示的频道的所有节目信息到programList中
*2.更新整个channel List的信息。
*/
function refreshChannelShow(firstChannelIndex,flag)
{
	//清除先前的焦点
	channelListDivList[list_position_h].style.backgroundColor = "transparent";
	
	var len = 0;
	if(flag == 1)
	{
		
		var tLists = channel.getEpgNextChannelList(1,firstChannelIndex,0/*0 list*/,6);
		len = tLists.length;
		for(var i = 0; i < 6 && i < len; i++)
		{			
			channelInfos_list[i] = tLists[i];
		}
	}
	else
	{
		var tLists = channel.getEpgPrevChannelList(listType,firstChannelIndex,0/*0 list*/,6);//获取的六个频道中不包含firstChannelIndex这个频道的内容
		len = tLists.length;
		for(var i = 0; i < 6 && i < len; i++)
		{			
			channelInfos_list[i] = tLists[i];
		}
	}
	
	var currentIndex = firstChannelIndex;
	
	//programListDivList = $('program_list').getElementsByTagName('div');
	var channelTypeImgs = $('channel_list').getElementsByTagName('img');
	for(var i = 0; i < 6; i++)
	{
		channelTypeImgs[i].style.display = "block";
		if(i < len)
		{
			if(currentIndex == channelInfos_list[i].index)
			{
				list_position_h = i;
				channelListDivList[list_position_h].style.backgroundColor = "#500000";
			}
		
			//页面初始化的时候，如果当前节目是节目列表中的倒数前六个节目，则不能循环显示节目，而是要去掉后边节目号晓得几个
			if(isInit && i < 5 && i < (len - 1))
			{
				if(channelInfos_list[i].index >= channelInfos_list[i + 1].index)
				{
					len = i + 1;//这里保证了下次进入循环的时候不进入该个if,因为下次循环i == len.
				}
			}
	
			if(i == 5)//获取的频道列表长度为6
			{
				var firstIndex = channelInfos_list[0].index;
				var nextIndex = channel.getNextIndexByIndex(channelInfos_list[5].index);
				if(firstIndex == nextIndex)//整个频道列表只有6个频道
				{
					channelLength = 6;
				}
				else
				{
					channelLength = 100;
				}
			}
			channelListDivList[i].style.display = "block";
			channelTypeImgs[i].src = flagImg[channelInfos_list[i].serviceType];
			var infoTag = channelListDivList[i].getElementsByTagName('span');
			infoTag[0].innerText = channelInfos_list[i].number;
			infoTag[1].innerText = channelInfos_list[i].name;	
		}
		else
		{
			channelLength = len;
			channelListDivList[i].style.display = "none";
			programListDivList[i].style.display = "none";
		}
	}
}
/*
*切分时间片并显示时间片上各个节目占用的时间，已知时间片上的起始节目，从左到右依次显示节目占用时间片情况
*/
function showProgramToRight()
{
	//programListDivList = $('program_list').getElementsByTagName('div');
	var i=0;
	for(i=0;i < 6;i++)
	{
		if(channelLength < 6 && i >= channelLength)
		{
			for(var j = i;j < 6; j++)
			{
				programListDivList[j].style.display = "none";
			}
			break;
		}
		else
		{
			programListDivList[i].style.display = "block";
			//刷新时间片之前要把以前分的片给清空
			programListDivList[i].innerText = "";
			//时间分片
			sliceTimeLeftToRight(i,distanceDate);
		}
	}
	var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
	positionOfPiece = 0;//初始化节目在时间片上的位置
	
	fucous_program[positionOfPiece].style.backgroundColor = "#000";
	fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
	fucous_program[positionOfPiece].style.zIndex = 100;
	showContent(list_position_h,positionOfPiece);
	showBoldFav();
	var end = new Date();
	
}

//用到的参数：当前频道的位置channelPosition，当前event在时间片上的位置eventPosition
function showContent(channelPosition,eventPosition)
{
	//top.Log("in showContent isHaveProgram = " + isHaveProgramOnPiece_list[channelPosition] + ",channelPosition = " + channelPosition + ",eventPosition = " + eventPosition);
	
	if(detailAnimationTimer) 
	{
		clearTimeout(detailAnimationTimer);
		detailAnimationTimer = 0;
	}
	$("program_content").style.webkitTransition = "none";
	$("program_content").style.top = "0px";
	
	
	var imglist=$('program_content_subtitle').getElementsByTagName("img");
	//无论有event信息都要做的通用处理，频道锁、TTX、STTL图标等
	var isLocked = -1;//-1 未确定情况，如果到最后也没有确定情况则表示无锁；0 有锁但已经解锁，1有锁且没有解锁
	//top.Log("unlockFlag = " + channelInfos_list[channelPosition].unlockFlag);
	if(channelInfos_list[channelPosition].unlockFlag == 1 && country != franceCountryNum/*france 当为法国的时候unlockFlag标志不适用*/)//已经手动解锁
	{
		isLocked = 0;
	}
	else
	{
		//top.Log("isLock = " + channelInfos_list[channelPosition].isLock);
		if(channelInfos_list[channelPosition].isLock)//优先级最高
		{
			isLocked = 1;			
		}
		
		//当前频道锁已解锁
		if(channelInfos_list[channelPosition].index == curIndex && (top.parentalLock == 0 && top.channelLock == 0 && top.inputLock == 0))
		{
			isLocked = 0;
		}
	}
	
	if(isHaveProgramOnPiece_list[channelPosition] == 0)//没有节目
	{
		imglist[0].style.display = "none"
		imglist[1].style.display = "none"
		imglist[2].style.display = "none"
		detailPageSum = 0;
		
		$("program_content_name").innerText = program_guide[1];
		$("parentRating").innerText = "";
		$('program_content_timeInfo').innerText = "";
		$('program_content_genre').innerText = "";
		$('program_content').innerText = "";
		
		if(isLocked == 1)//频道锁被锁住且没有解锁
		{
			$('program_content_lock').style.display = "block";
		}
		else//isLocked == -1 或 isLocked == 0,没有锁或者有锁但已经解锁
		{
			$('program_content_lock').style.display = "none";
		}
	}
	else
	{
		//top.Log("firstProgramNumOnPiece_list[channelPosition] = " + firstProgramNumOnPiece_list[channelPosition] + ",eventPosition = " + eventPosition);
		var nowEvent = programInfos_list[channelPosition][firstProgramNumOnPiece_list[channelPosition] + eventPosition];
		var str = nowEvent.date;
		if(nowEvent.name.length > 0)
		{
			$("program_content_name").innerText = nowEvent.name;
		}
		else
		{
			$("program_content_name").innerText = program_guide[4];
		}
		$('program_content_timeInfo').innerText = nowEvent.startTime + "-" + nowEvent.endTime + "  " + weekday[nowEvent.day] + "  " +  str.substring(0,2) + "-" + month_name[parseInt(str.substring(3,5),10) - 1];
		showGenre(nowEvent.genre);
		
		if(nowEvent.hardHearingState)
		{
			imglist[2].style.display = "block"
		}
		else
		{
			imglist[2].style.display = "none"
		}
		
		var rate = nowEvent.parentRate;
		if("AU" == setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU"))
		{
			setAUParentRating(rate, $("parentRating"));
		}
		else
		{
			if(rate >= 4 && rate <= 19)
			{
				if(rate == 19)
				{
					$("parentRating").innerText = "X";
				}
				else
				{
					$("parentRating").innerText = rate + "+";
				}
			}
			else
			{
				$("parentRating").innerText = "";
			}
		}
		
		//showSubtitle	
		//第一个事件的subtitle状态和channelPlay相同
		if(channelInfos_list[channelPosition].index == curIndex && (firstProgramNumOnPiece_list[channelPosition] + eventPosition) == 0)//当前频道的第一个事件
		{
			if(setting.isTtxAvailable)
			{
				imglist[0].style.display = "block";
			}
			else
			{
				imglist[0].style.display = "none";
			}
			
			var str = channel.getCurrentChannelInfo().programSubtitleMode;
			str = str.substring(str.indexOf("#") + 1);
			str = str.substring(str.indexOf("#") + 1);
			subtitleModeCount = parseInt(str.substring(0,str.indexOf("#")),10);
			
			var screenMode =channel.currentScreenSaverMode;
			if(subtitleModeCount > 0 && screenMode != 3 && screenMode!=1)
			{
				imglist[1].style.display = "block";
			}
			else
			{
				imglist[1].style.display = "none";
			}
		}
		else
		{
			/*
			if(channelInfos_list[channelPosition].isTeletextExist)
			{
				imglist[0].style.display = "block";
			}
			else */if(nowEvent.isTtxExist)
			{
				imglist[0].style.display = "block";
			}
			else
			{
				imglist[0].style.display = "none";
			}
			/*
			if(channelInfos_list[channelPosition].isSubtitleExist)
			{
				imglist[1].style.display = "block"
			}
			//暂时以频道中的subtitle信息为准，以后要过认证的时候再把这个部分给打开
			else */if(nowEvent.isSttlExist)
			{
				imglist[1].style.display = "block";
			}
			else
			{
				imglist[1].style.display = "none";
			}
		}
		
		if(isLocked == 1)//频道锁被锁住且没有解锁
		{
			isLocked = 1;
			$('program_content_lock').style.display = "block";
			$('program_content').innerText = "";
		}
		else
		{
			var rating = setting.parentalRating;
			if(isLocked == -1 && (rating > 0 && nowEvent.parentRate >= rating))//父母锁锁住
			{
				isLocked = 1;
				$('program_content_lock').style.display = "block";
				$('program_content').innerText = "";
			}
			else//没有锁或有锁但是已经解锁
			{
				$('program_content_lock').style.display = "none";
				var detail = channel.eventDetail(channelInfos_list[channelPosition].index,nowEvent.id);
				var leng = detail.length;
				if(leng > 0)
				{
					$('program_content').innerText = detail;
				}
				else
				{
					$('program_content').innerText = program_guide[3];
				}
				doDetialAnimation();
			}
		}
	}	
}

function setAUParentRating(rate, obj)
{
	switch(rate)
	{
		case 0x0 + 3:
		case 0x1 + 3:
			obj.innerText = "";
			break;
		case 0x2 + 3:
		case 0x3 + 3:
			obj.innerText = "P";
			break;
		case 0x4 + 3:
		case 0x5 + 3:
			obj.innerText = "C";
			break;
		case 0x6 + 3:
		case 0x7 + 3:
			obj.innerText = "G";
			break;
		case 0x8 + 3:
		case 0x9 + 3:
			obj.innerText = "PG";
			break;
		case 0xA + 3:
		case 0xB + 3:
			obj.innerText = "M";
			break;
		case 0xC + 3:
		case 0xD + 3:
		case 0xE + 3:
			obj.innerText = "MA 15+";
			break;
		case 0xF + 3:
			obj.innerText = "R";
			break;
		default:
			obj.innerText = "";
			break;
	}
}

/*
描述：对EPG详细信息做动画
*/
var detailAnimationTimer = 0;
var detailTimeDuration = 0;
var detailHeight = 0;
function doDetialAnimation()
{
	detailHeight = $('program_content').offsetHeight;
	//top.Log("in doDetialAnimation detailHeight = " + detailHeight);
	if(detailHeight <= 210)
	{
		return;
	}
	else
	{
		detailTimeDuration = (detailHeight - 210)*100;
		refreshAnimation();
		
	}
}
function refreshAnimation()
{
	//top.Log("in refreshAnimation ");
	$("program_content").style.webkitTransition = "none";
	$("program_content").style.top = "0px";
	setTimeout("animationNow()",10);
	detailAnimationTimer = setTimeout("refreshAnimation()",(detailTimeDuration + 1000));
}
function animationNow()
{
	$("program_content").style.webkitTransition = "linear " + detailTimeDuration + "ms";
	$("program_content").style.top = -(detailHeight - 210) + "px";
}

function showGenre(genre)
{
	var firstLevel = genre>>4;
	if(country == 25)//Uk
	{
		if(firstLevel <= 0 || firstLevel >=16)//无分类过滤
		{
			$('program_content_genre').innerText = parentRateWord;
		}
		else
		{
			switch(firstLevel)
			{
				case 1://movie
					$('program_content_genre').innerText = genre_first_level_UK[0];
					break;
				case 2://News and Factual
				case 7:
				case 8:
					$('program_content_genre').innerText = genre_first_level_UK[1];
					break;
				case 3://Entertainment
				case 6:
					$('program_content_genre').innerText = genre_first_level_UK[2];
					break;
				case 4://sport
					$('program_content_genre').innerText = genre_first_level_UK[3];
					break;
				case 5://Children's
					$('program_content_genre').innerText = genre_first_level_UK[4];
					break;
				case 9://Education
					$('program_content_genre').innerText = genre_first_level_UK[5];
					break;
				case 10://Lifestyle
					$('program_content_genre').innerText = genre_first_level_UK[6];
					break;
				case 15://Drama
					$('program_content_genre').innerText = genre_first_level_UK[7];
					break;
				default:
					break;
			}
		}
	}
	else
	{	
		if(firstLevel <= 0 || firstLevel >=12)//无分类过滤
		{
			$('program_content_genre').innerText = parentRateWord;
		}
		else
		{
			$('program_content_genre').innerText = genre_first_level[firstLevel - 1];
			/*此处用来显示大分类和子分类，参考51只显示大的分类。我们也就这样做了
			var secondLevel = genre&15;//取低四位
			$('program_content_genre').innerText = genre_first_level[firstLevel - 1] + "/" + genre_second_level[firstLevel - 1][secondLevel];
			*/
		}
	}
}


/*
*从左到右依次切分时间片，已知上一个时间片的开始节目的序号：firstProgramNumOnPiece_list[position]
*/
var eventTriangleWidth = 30;//用来表示当前时间片没有将事件显示完整的三角图标所占用的宽度
function sliceTimeLeftToRight(position,distance)
{
	var pieceBarWidth = 0;//事件显示宽度
	var leftPosition = 0;//要进行时间切片的节目在时间片上的左位置
	var rightPosition = 0;//
	var reallyStartTimePiece = (startTimePiece + distance*24)*60;//单位为分钟。
	var i = 0;//用于定位节目的累加变量
	var maxCount = 0;//计数，记录时间片上有多少节目
	var length = programInfos_list[position].length;
	var firstProgramNum = 0;//当前时间片上的第一个节目序号
	var widthPerMinute = 10;//算法：SHOW_WIDTH/(2*60);//每分钟所占的像素宽度
	isHaveProgramOnPiece_list[position] = 0;//时间上是否有节目 1 是，0 否
	while(rightPosition < SHOW_WIDTH)
	{//top.Log("length = " + length + " firstProgramNumOnPiece_list[position] + i = " + (firstProgramNumOnPiece_list[position] + i))
		if( (firstProgramNumOnPiece_list[position] + i) >=  length)//后边没有节目了
		{
			if(isHaveProgramOnPiece_list[position] == 0)
			{
				firstProgramNum = length;
				//新添加一个时间片
				var piece = document.createElement('span');
				piece.setAttribute("class","program");//firefox
				piece.innerText = program_guide[1];
				piece.style.left = 0 + "px";
				piece.style.width =  SHOW_WIDTH + "px";
				programListDivList[position].appendChild(piece);	
				maxCount += 1;
			}
			break;
		}
		else
		{
			//time like this(hh:mm:ss)
			var start = programInfos_list[position][firstProgramNumOnPiece_list[position] + i].startTime;
			var startHour = parseInt(start.substring(0,2),10)*60 + parseInt(start.substring(3),10);//单位为分钟
			var end = programInfos_list[position][firstProgramNumOnPiece_list[position] + i].endTime;
			var endHour = parseInt(end.substring(0,2),10)*60 + parseInt(end.substring(3),10); 
			var date = programInfos_list[position][firstProgramNumOnPiece_list[position] + i].date;
			if(endHour < startHour)
			{/*
				var day = programInfos_list[position][firstProgramNumOnPiece_list[position] + i].day;
				var dateF = parseInt(nowDate.substring(0,2),10);
				var monthF = parseInt(nowDate.substring(3,5),10) - 1;
				var yearF = parseInt(nowDate.substring(6),10);
				var strDate = new Date(yearF,monthF,(dateF + distance));
				if(strDate.getDay() == day)//节目在同一天*/
				if(pieceDate == date)//节目在同一天
				{
					startHour += 24*distance*60; 
					endHour += 24*(distance + 1)*60;
				}
				else//是上一天的节目
				{
					startHour += 24*(distance - 1)*60; 
					endHour += 24*distance*60;
				}
			}
			else
			{
				if(pieceDate == date)
				{
					startHour += 24*distance*60;
					endHour += 24*distance*60;
				}
				else//当此时时获取23:00到下一天1:00的时候存在0:00-1:00的台
				{
					startHour += 24*(distance + 1)*60;
					endHour += 24*(distance + 1)*60;
				}
			}
			//alert("startHour = " + startHour + " endHour = " + endHour + " reallyStartTimePiece = " + reallyStartTimePiece);
			if(endHour <= reallyStartTimePiece)//节目结束绝对时间比时间片绝对时间要小，说明还没有到找到落在时间片上的节目，继续往下找
			{
				i++;
			}
			else //endHour > reallyStartTimePiece
			{
				if(startHour < reallyStartTimePiece)
				{
					if(isHaveProgramOnPiece_list[position] == 0)
					{
						firstProgramNum = firstProgramNumOnPiece_list[position] + i;
					}
					isHaveProgramOnPiece_list[position] = 1;
					//新添加一个时间片
					var piece = document.createElement('span');
					piece.setAttribute("class","program");//firefox
					var titleName =  programInfos_list[position][firstProgramNumOnPiece_list[position] + i].name;
					if(titleName.length > 0)
					{
						piece.innerText = titleName;
					}
					else
					{
						piece.innerText = program_guide[4];
					}
					leftPosition = 0;
					
					//清空先前的绘图
					programListDivList[position].innerText = "";
					maxCount = 0;
						
					if(endHour < (reallyStartTimePiece + 2*60))//节目没有占据整个时间片
					{
						piece.style.left = leftPosition + "px";
						rightPosition = parseInt(widthPerMinute*(endHour - reallyStartTimePiece),10);
						if(rightPosition <= (leftPosition + 5))
						{
							pieceBarWidth =   2;
							piece.style.width =  pieceBarWidth + "px";
						}
						else
						{
							pieceBarWidth =  rightPosition -  leftPosition - 5;
							if(pieceBarWidth <= eventTriangleWidth)
							{
								piece.style.width =  pieceBarWidth + "px";
							}
							else
							{
								piece.style.paddingLeft = eventTriangleWidth + "px";
								piece.style.width =  (pieceBarWidth - eventTriangleWidth) + "px";
							}
						}
						if(pieceBarWidth <= (minWidthAlowShowName + eventTriangleWidth))//事件显示的宽度不做够显示一个文字或省略号
						{
							piece.innerText = "";
						}
						programListDivList[position].appendChild(piece);	
						maxCount += 1;
						i++;
					
						
						//add chenhua 2014.7.28 当前的事件开始时间有部分超出时间片，而结束时间没有超出
						if(pieceBarWidth > eventTriangleWidth)
						{
							var eImg = document.createElement("img");
							eImg.setAttribute("class","leftEventImg");//firefox
							eImg.setAttribute("src","images/EPG_Event_Activa-LR_L-.png");
							programListDivList[position].appendChild(eImg);
						}
						
					}
					else //节目占据整个时间片
					{						
						piece.style.left = leftPosition + "px";
						//rightPosition = SHOW_WIDTH;
						piece.style.width =  SHOW_WIDTH + "px";
						programListDivList[position].appendChild(piece);	
						maxCount += 1;
						
						//add chenhua 2014.7.28 当前的事件开始时间有部分超出时间片，结束时间有部分超出时间片
						var eImg = document.createElement("img");
						eImg.setAttribute("class","leftEventImg");//firefox
						eImg.setAttribute("src","images/EPG_Event_Activa-LR_L-.png");
						programListDivList[position].appendChild(eImg);
						eImg = document.createElement("img");
						eImg.setAttribute("class","rightEventImg");//firefox
						eImg.setAttribute("src","images/EPG_Event_Activa-LR_R-.png");
						programListDivList[position].appendChild(eImg);
						break;
					}
					
				}
				else
				{
					if(startHour < (reallyStartTimePiece + 2*60))//节目开始时间落在时间片上
					{
						if(isHaveProgramOnPiece_list[position] == 0)
						{
							firstProgramNum = firstProgramNumOnPiece_list[position] + i;
						}
						isHaveProgramOnPiece_list[position] = 1;
						//新添加一个时间片
						var piece = document.createElement('span');
						piece.setAttribute("class","program");//firefox
						var titleName = programInfos_list[position][firstProgramNumOnPiece_list[position] + i].name;
						if(titleName.length > 0)
						{
							piece.innerText = titleName;
						}
						else
						{
							piece.innerText = program_guide[4];
						}
						leftPosition =  parseInt(widthPerMinute*(startHour - reallyStartTimePiece),10);
						
						var programSpanListInThisLine = programListDivList[position].getElementsByTagName("span");
						if(programSpanListInThisLine.length > 0)
						{
							var le = parseInt(programSpanListInThisLine[programSpanListInThisLine.length - 1].style.left.split("px")[0],10);
							var wi = parseInt(programSpanListInThisLine[programSpanListInThisLine.length - 1].style.width.split("px")[0],10);
							var val =  le + wi ;
							if(val >= leftPosition && leftPosition > (le + 5))
							{
								var tBarWidth = leftPosition - le - 5;
								programSpanListInThisLine[programSpanListInThisLine.length - 1].style.width =  tBarWidth + "px";
								if(tBarWidth < minWidthAlowShowName)//事件显示的宽度不做够显示一个文字或省略号
								{
									programSpanListInThisLine[programSpanListInThisLine.length - 1].innerText = "";
								}
							}
							
						}
						
						if(endHour < (reallyStartTimePiece + 2*60))//节目完整的落在时间片上
						{
							piece.style.left = leftPosition + "px";
							rightPosition = parseInt(widthPerMinute*(endHour - reallyStartTimePiece),10);
							if(rightPosition <= (leftPosition + 5))
							{
								pieceBarWidth =   2 ;
							}
							else
							{
								pieceBarWidth =  rightPosition -  leftPosition - 5;
							}
							piece.style.width =  pieceBarWidth + "px";
							programListDivList[position].appendChild(piece);	
							maxCount += 1;
							i++;
						}
						else//节目有部分落在时间片外
						{
							piece.style.left = leftPosition + "px";
							rightPosition = SHOW_WIDTH;
							pieceBarWidth = rightPosition -  leftPosition;
							if(pieceBarWidth <= eventTriangleWidth)
							{
								piece.style.width =  pieceBarWidth + "px";
							}
							else
							{
								piece.style.paddingRight = eventTriangleWidth + "px";
								piece.style.width =  (pieceBarWidth - eventTriangleWidth) + "px";
							}
							if(pieceBarWidth <= (minWidthAlowShowName + eventTriangleWidth))//事件显示的宽度不做够显示一个文字或省略号
							{
								piece.innerText = "";
							}
							programListDivList[position].appendChild(piece);	
							maxCount += 1;
							
							//add chenhua 2014.7.28 当前的事件结束时间有部分超出时间片
							if(pieceBarWidth > eventTriangleWidth)
							{
								var eImg = document.createElement("img");
								eImg.setAttribute("class","rightEventImg");//firefox
								eImg.setAttribute("src","images/EPG_Event_Activa-LR_R-.png");
								programListDivList[position].appendChild(eImg);
							}
							break;
						}
						if(pieceBarWidth < minWidthAlowShowName)//事件显示的宽度不做够显示一个文字或省略号
						{
							piece.innerText = "";
						}
					}
					else//节目开始时间已经比时间片大
					{
						if(isHaveProgramOnPiece_list[position] == 0)
						{
							//新添加一个时间片
							var piece = document.createElement('span');
							piece.setAttribute("class","program");//firefox
							piece.innerText = program_guide[1];
							leftPosition =  0;
							piece.style.left = leftPosition + "px";
							//rightPosition = SHOW_WIDTH;
							piece.style.width =  SHOW_WIDTH + "px";
							programListDivList[position].appendChild(piece);	
							maxCount += 1;
							firstProgramNum = firstProgramNumOnPiece_list[position] + i;
						}
						break;
					}
				}
			}
		}
	}
	firstProgramNumOnPiece_list[position] = firstProgramNum;
	MAX_programCountOnPiece[position] = maxCount;
	
	//*添加鼠标支持事件
	addMouseListenerToPiece(position,programListDivList[position].getElementsByTagName("span"),MAX_programCountOnPiece[position])
	//添加鼠标支持事件*/
}
/*
*切分时间片并显示时间片上各个节目占用的时间，已知下一个时间片上的起始节目，从右到左依次显示节目占用时间片情况
*/
function showProgramToLeft()
{
	//programListDivList = $('program_list').getElementsByTagName('div');
	var i = 0;
	for(i = 0; i < 6; i++)
	{
		if(channelLength < 6 && i >= channelLength)
		{
			for(var j = i;j < 6; j++)
			{
				programListDivList[j].style.display = "none";
			}
			break;
		}
		else
		{
			programListDivList[i].style.display = "block";
			//刷新时间片之前要把以前分的片给清空
			programListDivList[i].innerText = "";
			//时间分片
			sliceTimeLeftToLeft(i,distanceDate);
		}
	}
	var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
	positionOfPiece = fucous_program.length-1;//初始化节目在时间片上的位置
	fucous_program[positionOfPiece].style.backgroundColor = "#000";
	fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
	fucous_program[positionOfPiece].style.zIndex = 100;
	showContent(list_position_h,positionOfPiece);
	showBoldFav();
}

/*
*从右到左依次切分时间片，已知下一个一个时间片的开始节目的序号：firstProgramNumOnPiece_list[position]，在此过程中要更新当前时间片的开始节目序号
*/
function sliceTimeLeftToLeft(position,distance)
{
	var leftPosition = SHOW_WIDTH;//要进行时间切片的节目在时间片上的左位置
	var rightPosition = SHOW_WIDTH;//
	var reallyStartTimePiece = (startTimePiece + distance*24)*60;//单位为分钟
	var i = 0;//用于定位节目的累加变量
	var maxCount = 0;//计数，记录时间片上有多少节目
	var length = programInfos_list[position].length;
	var widthPerMinute = 10;//算法：SHOW_WIDTH/(2*60);//每分钟所占的像素宽度
	isHaveProgramOnPiece_list[position] = 0;//时间上是否有节目 1 是，0 否
	while(leftPosition > 0)
	{//top.Log("in sliceTimeLeftToLeft  length = " + length + " firstProgramNumOnPiece_list[position] = " + firstProgramNumOnPiece_list[position] + " i = " + i)
		if( (firstProgramNumOnPiece_list[position] - i) <  0)//前边没有节目了
		{
			firstProgramNumOnPiece_list[position] = 0;
			if(isHaveProgramOnPiece_list[position] == 0)
			{
				//新添加一个时间片
				var piece = document.createElement('span');
				piece.setAttribute("class","program");//firefox
				piece.innerText = program_guide[1];
				leftPosition = 0;
				piece.style.left = leftPosition + "px";
				//rightPosition = SHOW_WIDTH;
				piece.style.width =  SHOW_WIDTH + "px";
				programListDivList[position].appendChild(piece);	
				maxCount += 1;
			}
			break;
		}
		else if((firstProgramNumOnPiece_list[position] - i) >= length)//当前时间片上没有节目，且节目列表最后一个节目序号比当前序号小
		{
			//top.Log("in sliceTimeLeftToLeft 0 firstProgramNumOnPiece_list[position] = " + firstProgramNumOnPiece_list[position]);
			firstProgramNumOnPiece_list[position] = length;
			i++;
		}
		else
		{
			//time like this(hh:mm:ss)
			var start = programInfos_list[position][firstProgramNumOnPiece_list[position] - i].startTime;
			var startHour = parseInt(start.substring(0,2),10)*60 + parseInt(start.substring(3),10);//单位为分钟
			var end = programInfos_list[position][firstProgramNumOnPiece_list[position] - i].endTime;
			var endHour = parseInt(end.substring(0,2),10)*60 + parseInt(end.substring(3),10);
			var date = programInfos_list[position][firstProgramNumOnPiece_list[position] - i].date;
			if(endHour < startHour)
			{/*
				var day = programInfos_list[position][firstProgramNumOnPiece_list[position] - i].day;
				var dateF = parseInt(nowDate.substring(0,2),10);
				var monthF = parseInt(nowDate.substring(3,5),10) - 1;
				var yearF = parseInt(nowDate.substring(6),10);
				var strDate = new Date(yearF,monthF,(dateF + distance));
				if(strDate.getDay() == day)//节目在同一天*/
				if(pieceDate == date)//节目在同一天
				{
					startHour += 24*distance*60; 
					endHour += 24*(distance + 1)*60;
				}
				else//是上一天的节目
				{
					startHour += 24*(distance - 1)*60; 
					endHour += 24*distance*60;
				}
			}
			else
			{
				if(pieceDate == date)
				{
					startHour += 24*distance*60;
					endHour += 24*distance*60;
				}
				else//当从下一天回到上一天的时候有时获取23:00到下一天1:00的时候存在0:00-1：00的台
				{
					startHour += 24*(distance + 1)*60;
					endHour += 24*(distance + 1)*60;
				}
			}
			//top.Log("startHour = " + startHour + " endHour = " + endHour + " reallyStartTimePiece = " + reallyStartTimePiece);
			if(startHour >= (reallyStartTimePiece + 2*60))//当前节目没有落在时间片上，继续往前找
			{
				i++;
			}
			else //startHour < (reallyStartTimePiece + 2*60)
			{
				if(endHour > (reallyStartTimePiece + 2*60))//当前节目是该时间片上最后一个节目
				{
					isHaveProgramOnPiece_list[position] = 1;
					//新添加一个时间片
					var piece = document.createElement('span');
					piece.setAttribute("class","program");//firefox
					var titleName = programInfos_list[position][firstProgramNumOnPiece_list[position] - i].name;
					if(titleName.length > 0)
					{
						piece.innerText = titleName;
					}
					else
					{
						piece.innerText = program_guide[4];
					}
					rightPosition = SHOW_WIDTH;
							
					//清空先前的绘图，为了从左往右和从右往左保持显示一致
					programListDivList[position].innerText = "";
					maxCount = 0;
					
					if(startHour >= reallyStartTimePiece)//节目没有占据整个时间片,是该时间片上的最后一个节目
					{
						leftPosition = parseInt(widthPerMinute*(startHour - reallyStartTimePiece),10);
						piece.style.left = leftPosition + "px";
						pieceBarWidth = rightPosition - leftPosition;
						if(pieceBarWidth <= eventTriangleWidth)
						{
							piece.style.width =  pieceBarWidth + "px";
						}
						else
						{
							piece.style.paddingRight = eventTriangleWidth + "px";
							piece.style.width =  (pieceBarWidth - eventTriangleWidth) + "px";
						}
						if(pieceBarWidth <= (minWidthAlowShowName + eventTriangleWidth))//事件显示的宽度不做够显示一个文字或省略号
						{
							piece.innerText = "";
						}
						programListDivList[position].appendChild(piece);	
						maxCount += 1;
						i++;
						if(pieceBarWidth < minWidthAlowShowName)//事件显示的宽度不做够显示一个文字或省略号
						{
							piece.innerText = "";
						}
					
						
						//add chenhua 2014.7.28 当前的事件结束时间超出时间片,开始时间没有超出
						if(pieceBarWidth > eventTriangleWidth)
						{
							var eImg = document.createElement("img");
							eImg.setAttribute("class","rightEventImg");//firefox
							eImg.setAttribute("src","images/EPG_Event_Activa-LR_R-.png");
							programListDivList[position].appendChild(eImg);
						}
					}
					else //节目占据整个时间片，是时间片上的最后一个也是第一个节目
					{
						leftPosition = 0;
						piece.style.left = leftPosition + "px";
						piece.style.width =  SHOW_WIDTH + "px";
						programListDivList[position].appendChild(piece);	
						maxCount += 1;
						firstProgramNumOnPiece_list[position] = firstProgramNumOnPiece_list[position] - i;
						//top.Log("in sliceTimeLeftToLeft 1 firstProgramNumOnPiece_list[position] = " + firstProgramNumOnPiece_list[position]);
						//add chenhua 2014.7.28 当前的事件结束时间超出时间片,开始时间也超出
						var eImg = document.createElement("img");
						eImg.setAttribute("class","leftEventImg");//firefox
						eImg.setAttribute("src","images/EPG_Event_Activa-LR_L-.png");
						programListDivList[position].appendChild(eImg);
						eImg = document.createElement("img");
						eImg.setAttribute("class","rightEventImg");//firefox
						eImg.setAttribute("src","images/EPG_Event_Activa-LR_R-.png");
						programListDivList[position].appendChild(eImg);
						break;
					}
				}
				else
				{
					if(startHour >= reallyStartTimePiece)//节目开始时间落在时间片上
					{//top.Log("in sliceTimeLeftToLeft a");
						//新添加一个时间片
						var piece = document.createElement('span');
						piece.setAttribute("class","program");//firefox
						var titleName = programInfos_list[position][firstProgramNumOnPiece_list[position] - i].name;
						if(titleName.length > 0)
						{
							piece.innerText = titleName;
						}
						else
						{
							piece.innerText = program_guide[4];
						}
						leftPosition =  parseInt(widthPerMinute*(startHour - reallyStartTimePiece),10)
						piece.style.left = leftPosition + "px";
						
//add chenhua 2014.11.4 修正当此时leftPosition == 0时，循环停止但是firstProgramNumOnPiece_list[position]却没有赋予正确的值。
						if(leftPosition <= 0)
						{
							firstProgramNumOnPiece_list[position] = firstProgramNumOnPiece_list[position] - i;
						}
//add chenhua 2014.11.4 修正当此时leftPosition == 0时，循环停止但是firstProgramNumOnPiece_list[position]却没有赋予正确的值。
						
						rightPosition = parseInt(widthPerMinute*(endHour - reallyStartTimePiece),10);
						if(isHaveProgramOnPiece_list[position] == 0)
						{//top.Log("in sliceTimeLeftToLeft a.a");
							if(rightPosition <= (leftPosition + 5))
							{
								pieceBarWidth =   2;
							}
							else
							{
								pieceBarWidth =  rightPosition -  leftPosition - 5;
							}
							piece.style.width =  pieceBarWidth + "px";
							isHaveProgramOnPiece_list[position] = 1;
							programListDivList[position].appendChild(piece);	
							if(pieceBarWidth < minWidthAlowShowName)//事件显示的宽度不做够显示一个文字或省略号
							{
								piece.innerText = "";
							}
						}
						else
						{//top.Log("in sliceTimeLeftToLeft a.b");
							pieceBarWidth = rightPosition -  leftPosition - 5;
				
							var proSpanListInThisLine = programListDivList[position].getElementsByTagName('span');
							if(proSpanListInThisLine.length > 0)
							{
								var val = proSpanListInThisLine[0].style.left.split("px")[0];
								if(val <= rightPosition && val > (leftPosition + 5))
								{
									pieceBarWidth = val - leftPosition - 5;
								}
							}
							piece.style.width =  pieceBarWidth + "px";
							if(pieceBarWidth < minWidthAlowShowName)//事件显示的宽度不做够显示一个文字或省略号
							{
								piece.innerText = "";
							}
							programListDivList[position].insertBefore(piece,proSpanListInThisLine[0]);
						}
						maxCount += 1;
						i++;
						//top.Log("in sliceTimeLeftToLeft a.b end leftPosition = " + leftPosition);
					}
					else//节目开始时间比时间片开始时间小
					{//top.Log("in sliceTimeLeftToLeft b");
						if(endHour > reallyStartTimePiece)//节目部分落在时间片上,该节目时是时间片上的第一个节目
						{//top.Log("in sliceTimeLeftToLeft b.a");
							//新添加一个时间片
							var piece = document.createElement('span');
							piece.setAttribute("class","program");//firefox
							var titleName = programInfos_list[position][firstProgramNumOnPiece_list[position] - i].name;
							if(titleName.length > 0)
							{
								piece.innerText = titleName;
							}
							else
							{
								piece.innerText = program_guide[4];
							}
							leftPosition =  0;
							piece.style.left = leftPosition + "px";
							rightPosition = parseInt(widthPerMinute*(endHour - reallyStartTimePiece),10);
							pieceBarWidth = rightPosition -  leftPosition - 5;
							piece.style.width =  pieceBarWidth + "px";
							var proSpanListInThisLine = programListDivList[position].getElementsByTagName('span');
							if(proSpanListInThisLine.length > 0)
							{
								var val = proSpanListInThisLine[0].style.left.split("px")[0];
								if(val <= rightPosition && val > (leftPosition + 5))
								{
									pieceBarWidth = val - leftPosition - 5;
								}
							}
							if(pieceBarWidth <= eventTriangleWidth)
							{
								piece.style.width =  pieceBarWidth + "px";
							}
							else
							{
								piece.style.paddingLeft = eventTriangleWidth + "px";
								piece.style.width =  (pieceBarWidth - eventTriangleWidth) + "px";
							}
							if(pieceBarWidth <= (minWidthAlowShowName + eventTriangleWidth))//事件显示的宽度不做够显示一个文字或省略号
							{
								piece.innerText = "";
							}
							if(isHaveProgramOnPiece_list[position] == 0)
							{
								isHaveProgramOnPiece_list[position] = 1;
								programListDivList[position].appendChild(piece);	
							}
							else
							{
								var note = programListDivList[position].getElementsByTagName('span')[0];
								programListDivList[position].insertBefore(piece,note);
							}
							maxCount += 1;
							firstProgramNumOnPiece_list[position] = firstProgramNumOnPiece_list[position] - i;
							//top.Log("in sliceTimeLeftToLeft 2 firstProgramNumOnPiece_list[position] = " + firstProgramNumOnPiece_list[position]);
							//add chenhua 2014.7.28 当前的事件结束时间没有超出时间片,开始时间超出
							if(pieceBarWidth > eventTriangleWidth)
							{
								var eImg = document.createElement("img");
								eImg.setAttribute("class","leftEventImg");//firefox
								eImg.setAttribute("src","images/EPG_Event_Activa-LR_L-.png");
								programListDivList[position].appendChild(eImg);
							}
							break;
						}
						else//当前节目结束在时间片开始之前，下一个节目才是时间片开始节目
						{//top.Log("in sliceTimeLeftToLeft b.b");
							firstProgramNumOnPiece_list[position] = firstProgramNumOnPiece_list[position] - i + 1;
							//top.Log("in sliceTimeLeftToLeft 3 firstProgramNumOnPiece_list[position] = " + firstProgramNumOnPiece_list[position]);
							if(isHaveProgramOnPiece_list[position] == 0)
							{
								//新添加一个时间片
								var piece = document.createElement('span');
								piece.setAttribute("class","program");//firefox
								piece.innerText = program_guide[1];
								leftPosition =  0;
								piece.style.left = leftPosition + "px";
								//rightPosition = SHOW_WIDTH;
								piece.style.width =  SHOW_WIDTH + "px";
								programListDivList[position].appendChild(piece);	
								maxCount += 1;
							}
							break;
						}
					}
				}
			}
		}
	}
	MAX_programCountOnPiece[position] = maxCount;
	//*添加鼠标支持事件
	addMouseListenerToPiece(position,programListDivList[position].getElementsByTagName("span"),MAX_programCountOnPiece[position])
	//添加鼠标支持事件*/
}


//for booking schedule list
function timeoutInit()
{
	top.clearMyTimeout();
}
//更新时间片时间和时间片日期,参数系统日期systemDate,当前日期距离系统日期的天数：distance起始时间片时间pieceStartTime（0-24之间）
var pieceDate = "";//当前显示的时间片的日期，eg:dd-mm-yyyy
function refreshPieceTime(systemDate,distance,pieceStartTime)
{
		var dateF = parseInt(systemDate.substring(0,2),10);
		var monthF = parseInt(systemDate.substring(3,5),10) - 1;
		var yearF = parseInt(systemDate.substring(6),10);
		var strDate = new Date(yearF,monthF,(dateF + distance));
		
		var str = "";
		pieceDate = "";
		dateF = strDate.getDate();
		if(dateF < 10)
		{
			str += "0" + dateF;
			pieceDate += "0" + dateF;
		}
		else
		{
			str += dateF;
			pieceDate += dateF;
		}
		str += "-";
		pieceDate += "/";
		monthF = strDate.getMonth() + 1;
		if(monthF < 10)
		{
			str += "0" + monthF;
			pieceDate += "0" + monthF;
		}
		else 
		{
			str +=  monthF;
			pieceDate +=  monthF;
		}
		str += "-";
		pieceDate += "/";
		yearF = strDate.getFullYear();
		str += yearF;
		pieceDate += yearF;
		
		$('program_date').innerText = weekday[strDate.getDay()] + ", " +  str;
		//writePieceTime(startTimePiece);//填写时间片上时间
		//填写时间片
		if(pieceStartTime > 9)
		{
			$('time_piece1').innerText = pieceStartTime  + ":00";
			if((pieceStartTime + 1) >= 24)
			{
				$('time_piece2').innerText = (pieceStartTime + 1 - 24) + ":00";
			}
			else
			{
				$('time_piece2').innerText = (pieceStartTime + 1) + ":00";
			}
		}
		else if(pieceStartTime == 9)
		{
			$('time_piece1').innerText = "0" + pieceStartTime + ":00";
			if((pieceStartTime + 1) >= 24)
			{
				$('time_piece2').innerText = (pieceStartTime + 1 - 24)  + ":00";
			}
			else
			{
				$('time_piece2').innerText = (pieceStartTime + 1) + ":00";
			}
		}
		else
		{
			$('time_piece1').innerText = "0" + pieceStartTime + ":00";
			$('time_piece2').innerText = "0" + (pieceStartTime + 1) + ":00";
		}
}

var timer = 0;
function refreshTime()
{
	if(timer)
	{
		clearTimeout(timer);
	}
	var tdate = nowDate;
	var ttime = nowTime;
	nowDate = setting.currentDate;
	nowTime = setting.currentTime;
	programSartTime = parseInt(nowTime.substring(0,2),10);//更新整个EPG列表的开始时间,
	
	//如果时间误差超过10分钟，就刷新整个ui
	if(tdate != nowDate)//可能是刚好跨天，这中情况很少出现，所以这样处理也没有设么问题
	{
		
		//清除上一次的焦点
		//channelListDivList[list_position_h].style.backgroundColor = "transparent";
		refreshEpg();
	}
	else
	{
		var tt = parseInt(ttime.substring(0,2)*60,10) + parseInt(ttime.substring(3,5),10);
		var nt = parseInt(nowTime.substring(0,2)*60,10) + parseInt(nowTime.substring(3,5),10);
		if(Math.abs(tt - nt) > 10)//差值超过10分钟
		{
			
			//清除上一次的焦点
			//channelListDivList[list_position_h].style.backgroundColor = "transparent";
			refreshEpg();
		}
	}
	var ts = nowDate.split("-");
	var tDate = new Date(ts[2],parseInt(ts[1],10) - 1,ts[0]);
	$("dateTime").innerText = weekday[tDate.getDay()] + ", " + nowDate + " " + nowTime;
	timer = setTimeout("refreshTime()",1000);
}

function backFromBookingOrSchedule()
{
	form_flag = 0;
}

function showFilterOrBooking(page)
{
	top.$("operatePage").src = page;
	top.operatePage.focus();
	top.setFrameFocusPage("operatePage");
}
				
function showUpDownPageImg()
{
	if(channelLength > 6)
	{
		$("upPageImg").style.display = "block"; 
		$("downPageImg").style.display = "block";
	}
	else
	{
		$("upPageImg").style.display = "none"; 
		$("downPageImg").style.display = "none";
	}
}

function showLeftRightPageImg()
{
	$("leftPageImg").style.display = (distanceDate <= 0 && (programSartTime >= startTimePiece))?"none":"block";
	$("rightPageImg").style.display = (distanceDate >= 8 && startTimePiece >= 22)?"none":"block";
}

var genreStatus = new Array(11);//其中每一个元素都形如：“0:1111010101000000”,“0”表示没有选中，“1”表示选中，其中“：”前表示第一级分类选中情况，“：”后面的数据表示第二级分类选中情况
//个人爱好选择

var listType = 0;
var curIndex = 0;
var hotkeySpanList;
var hotkeyImgList;
var channelListDivList;
var initFlag = 1;//用来判断是否是第一次进入EPG的新标志。
function init()
{
	top.closeSubtitle();
	if(initFlag == 1)
	{
		initFlag = 0;
		nowDate = setting.currentDate;
		nowTime = setting.currentTime;
	}
	if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
	{
		var key_listImg = $("key_list").getElementsByTagName("img");
		key_listImg[2].src ="images/icon-Option_au.png";
	}
	channelListDivList= $('channel_list').getElementsByTagName('div');
	programListDivList = $('program_list').getElementsByTagName('div');
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	top.RemoteConntrolType = "EPG";//lqt- 设置虚拟遥控器的场景类型---进入IP-EPG
	setting.sendMsgToDBC(2);
	top.Log("in EPG init");
	top.g_temp = "EPG";
	list_position_h = 0;
	form_flag = 0;
	top.stopTimeout();
	listType = channel.channelListType;
	currentChannelListType = listType;
	//channel.channelListType = 1;//set list type as digital list

	country = channel.systemCountry;
	var tChannel = channel.getCurrentChannelInfo();
	$('title').innerText = program_guide[0];
	refreshTime();
	channelStatus = channel.channelProgramStatus();
	if(channelStatus)//有频道
	{
		hotkeySpanList = $('key_list').getElementsByTagName('span');
		hotkeyImgList = $('key_list').getElementsByTagName('img');
		
		hotkeyImgList[0].style.display = "none";
		hotkeySpanList[0].style.display = "none";
		
		for(var i = 0; i < 5; i++)
		{
			hotkeySpanList[i].innerText = epgHotKey[i];
		}	
		$("key_list").style.display = "block";
		
		var tList = $("program_list").getElementsByTagName("span");
		tList[0].innerText = program_guide[1];
		tList[1].innerText = program_guide[1];
		tList[2].innerText = program_guide[1];
		tList[3].innerText = program_guide[1];
		tList[4].innerText = program_guide[1];
		tList[5].innerText = program_guide[1];
	
		
		if(tChannel.isSkip)
		{
			curIndex = channel.nextIndex;
		}
		else
		{
			curIndex = tChannel.index;
		}
		//初始化频道信息列表,清除当前list_position_h上的焦点，并重置list_position_h和焦点
		refreshChannelShow(curIndex,1);
		
		
	
		startTimePiece = parseInt(nowTime.substring(0,2),10);
		//setTimeout("refreshPieceTime(nowDate, distanceDate, startTimePiece)", 1);//Areos
		refreshPieceTime(nowDate, distanceDate, startTimePiece);
		//setTimeout(function(){
			distanceDate = 0;
			getMoreProgramList(distanceDate,1,startTimePiece);
			showProgramToRight();
			//刷新焦点
			var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
			fucous_program[positionOfPiece].style.backgroundColor = "transparent";
			fucous_program[positionOfPiece].style.border = "none";
			fucous_program[positionOfPiece].style.zIndex = 0;
			var currentT = parseInt(nowTime.substring(0,2),10)*60 + parseInt(nowTime.substring(3,5),10);
			for(positionOfPiece = 0; positionOfPiece < (MAX_programCountOnPiece[list_position_h] - 1); positionOfPiece++)
			{
				var end = programInfos_list[list_position_h][positionOfPiece].endTime;
				var endHour = parseInt(end.substring(0,2),10)*60 + parseInt(end.substring(3),10); 
				if(endHour > currentT)
				{
					var start = programInfos_list[list_position_h][positionOfPiece].startTime;
					var startHour = parseInt(start.substring(0,2),10)*60 + parseInt(start.substring(3),10);
					if(startHour <= endHour)
					{
						break;
					}
				}
			}
			if(positionOfPiece == (MAX_programCountOnPiece[list_position_h] - 1))
			{
				positionOfPiece = 0;
			}
			fucous_program[positionOfPiece].style.backgroundColor = "#000";
			fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
			fucous_program[positionOfPiece].style.zIndex = 100;
			showContent(list_position_h,positionOfPiece);
			//}, 100);
			channel.setenterEPGflag(1);
		
	}
	else//没有频道
	{
		$("no_channel").innerText = no_channel;
		$("no_channel").style.display = "block";
		$("firstButton").innerText = scan;
		$("firstButton").style.display = "block";
		$("programContent").style.display = "none";
	}
	isInit = 0;//初始化结束，标志位改变
	
	$("user_password").style.display = "none";
	showLeftRightPageImg();
	showUpDownPageImg();
	addMouseListener();
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(0);
    }
	top.requestFocus(self, 1);
	top.Log("in EPG init end");
}

function uninit()
{
	//将快捷键进入该页面的状态清除
	top.g_temp = "";
	channel.setenterEPGflag(0);
	top.g_isUsedHotKeyToIntoPage = 0;
	setting.sendMsgToDBC(3);
	channel.channelListType = currentChannelListType;
	channel.resetChannelListType(currentChannelListType);
	top.Log("currentChannelListType"+currentChannelListType);
	top.restartSubtitle();
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
}


function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		setAndClearTimer();
		if(evt.button == 2) toBack();//right key
	}
	
	//翻页箭头鼠标支持
	$("upPageImg").onmousedown = function(evt){
		setAndClearTimer();
		if(evt.button == 0){//left key
			if(form_flag == 0)
			{
				channelListDivList[list_position_h].style.backgroundColor = "transparent";
				var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
				fucous_program[positionOfPiece].style.backgroundColor = "transparent";
				fucous_program[positionOfPiece].style.border = "none";
				fucous_program[positionOfPiece].style.zIndex = 0;
				
				list_position_h = 0;
				toUp();
			}
		}
	}
	$("downPageImg").onmousedown = function(evt){
		setAndClearTimer();
		if(evt.button == 0){//left key
			if(form_flag == 0)
			{
				channelListDivList[list_position_h].style.backgroundColor = "transparent";
				var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
				fucous_program[positionOfPiece].style.backgroundColor = "transparent";
				fucous_program[positionOfPiece].style.border = "none";
				fucous_program[positionOfPiece].style.zIndex = 0;
				
				list_position_h = 5;
				toDown();
			}
		}
	}
	$("leftPageImg").onmousedown = function(evt){
		setAndClearTimer();
		if(evt.button == 0){//left key
			if(form_flag == 0)//在主页面上
			{	
				var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
				fucous_program[positionOfPiece].style.backgroundColor = "transparent";
				fucous_program[positionOfPiece].style.border = "none";
				fucous_program[positionOfPiece].style.zIndex = 0;
				
				positionOfPiece = 0;
				toLeft();
			}
		}
	}
	$("rightPageImg").onmousedown = function(evt){
		setAndClearTimer();
		if(evt.button == 0){//left key
			if(form_flag == 0)//在主页面上
			{	
				var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
				fucous_program[positionOfPiece].style.backgroundColor = "transparent";
				fucous_program[positionOfPiece].style.border = "none";
				fucous_program[positionOfPiece].style.zIndex = 0;
				
				positionOfPiece = (MAX_programCountOnPiece[list_position_h] - 1);
				toRight();		
			}
		}
	}
	
	//channel list
	for(var i = 0; i < 6; i++)
	{
		channelListDivList[i].setAttribute("newAttr",i);
		channelListDivList[i].onmousedown = function(evt){
			setAndClearTimer();
			if(evt.button == 0){//left key
				if(form_flag == 0)//在主页面上
				{	
					channelListDivList[list_position_h].style.backgroundColor = "transparent";
					var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
					fucous_program[positionOfPiece].style.backgroundColor = "transparent";
					fucous_program[positionOfPiece].style.border = "none";
					fucous_program[positionOfPiece].style.zIndex = 0;
					
					list_position_h = parseInt(this.getAttribute("newAttr"));
					positionOfPiece = 0;
					
					channelListDivList[list_position_h].style.backgroundColor = "#500000";
					fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
					fucous_program[positionOfPiece].style.backgroundColor = "#000";
					fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
					fucous_program[positionOfPiece].style.zIndex = 100;
					showContent(list_position_h,positionOfPiece);
					doEnter();
				}
			}
		}
	}
}
/*
描述：添加event的鼠标支持，在每次重新在时间片上切片完成后调用
参数：channelPosition:要添加的鼠标支持对应的频道在所有显示列表中的位置
eventList:当前两个小时内包含的event标签列表
eventCountOfPiece：当前两个小时内包含的event数量
*/
function addMouseListenerToPiece(channelPosition,eventList,eventCountOfPiece)
{
	//event list
	for(var i = 0; i < eventCountOfPiece; i++)
	{
		eventList[i].setAttribute("newAttr",i);
		eventList[i].setAttribute("newAttrChPosition",channelPosition);
		eventList[i].onmousedown = function(evt){
			setAndClearTimer();
			if(evt.button == 0){//left key
				if(form_flag == 0)
				{
					channelListDivList[list_position_h].style.backgroundColor = "transparent";
					var fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
					fucous_program[positionOfPiece].style.backgroundColor = "transparent";
					fucous_program[positionOfPiece].style.border = "none";
					fucous_program[positionOfPiece].style.zIndex = 0;
						
					list_position_h = parseInt(this.getAttribute("newAttrChPosition"));
					positionOfPiece = parseInt(this.getAttribute("newAttr"));
					
					channelListDivList[list_position_h].style.backgroundColor = "#500000";
					fucous_program = programListDivList[list_position_h].getElementsByTagName('span');
					fucous_program[positionOfPiece].style.backgroundColor = "#000";
					fucous_program[positionOfPiece].style.border = "thin #00aadd solid";
					fucous_program[positionOfPiece].style.zIndex = 100;
					showContent(list_position_h,positionOfPiece);
					doEnter();
				}
			}
		}
	}
}

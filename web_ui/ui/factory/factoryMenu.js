top.keySetForUI(1);
var init_title = ["Main\\Factory","1--Factory hotkey","2--WARM UP","3--Reset Shop","4--White balance","5--Other","6--Reset ALL","7--Preset Factory Channel","8--Power on mode","9--USB Clone && Update","0--DeviceID test","SW NO:","Project Name:","SIACP Version:","Date:"];
var off_on = ["Off","On"];
var moth_string = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var other = ["Do","WAIT","OK","Fail"];
var preset_factory_channel = ["HZ","Poland","WX","NM","Preset"];
var power_on_mode = ["On","STB","LAST"];
//var white_balance = ["Factory\\White balance","Source","Color temp","R gain","G gain","B gain","R offset","G offset","B offset","White Balance init","Scaling Brightness","Scaling Contrast","Scaling Saturation","Picture related"];
var white_balance = ["Factory\\White balance","Source","Color temp","R gain","G gain","B gain","R offset","G offset","B offset","White Balance init","Picture related"];

var balance_source = ["ATV","DTV","AV","YPbPr","PC","HDMI"];
var balance_color_temp = ["Cold","Stantard","Warm","Warm2"];
//var usb_update = ["Factory\\USB Update","Main Upgrade","MEMC Upgrade","HDCP Upgrade","Mboot Upgrade","CI+ KEY Upgrade","All Clone:USB TO TV","All Clone:TV TO USB","CH Clone:USB TO TV"," CH Clone:TV TO USB","FRC Upgrade","FRC Backup",
//				"User Data Clone:USB TO TV"," User Data Clone:TV TO USB"];
var usb_update_warn=["Please insert USB Device","Are you sure","No upgrade file","More upgrade files","Software Upgrading","Upgrade Success","Upgrade Failed"];
var usb_update_warn_yes_or_no=["yes","no"];
var other_menu = ["Factory\\Other Menu","WatchDog","Project ID","Grey Ctrl","Update CI+ Credential","IPTV","Motion clarity","ESN","CI+Key"];
var project_id = ["Factory\\Other\\Project ID","Project ID","Name","Panel","RCU","Region","PSU","Running Time:"];
var key_menu = ["Other Menu\\CI+","Update CI+ Credential","Update From USB","Erase CI+ Credential"];
var cikey_status = ["No","Yes"];
var picture_related_menu = ["White balance\\Pic.Related Menu","Dynamic Contrast","Light Sensor","Back light","Dyna backlight control","Energy Save","APL1","APL1_BL","APL2","BP","K","Print_Enable","DBC_Enable"];
var energySaving = ["Off","Low","High"];
var lightsensor = ["Pic.Related\\LightSensor","ADC_Min","ADC_Max","Ratio_Min"];
var preset_channel = ["Factory\\Preset Channel","Pre-Frequency HZ","Pre-Frequency Poland","Pre-Frequency WX","Pre-Frequency NM","Pre-Frequency ODM"];
var iptv_menu = ["Factory\\Other\\IPTV","Update MAC address"];
var mac_menu = ["Factory\\Other\\IPTV\\MAC","Update From USB","ESN Key status","MAC Address","PC Link Check"];
var usb_update = ["Factory\\USB Update","Main Upgrade","FRC Upgrade","FRC Backup","USB TO TV"," TV TO USB","ESN Key Upgrade"];
var clone = ["ALL >","CH List >","UserData >"];

var setting = top.g_setting;
var ciAndKey = top.factoryOpenPromt[1];

var FACTORY_MENU_ITEM_LENGHT = 14;
var WHITE_BALANCE_ITEM_LENGHT = 10;//13;
var USB_UPDATE_ITEM_LENGHT = 6;
var OTHER_MENU_ITEM_LENGHT = 8;
var PROJECT_ID_ITEM_LENGHT = 7;
var KEY_MENU_ITEM_LENGHT = 3;
var PICTURE_MENU_ITEM_LENGHT = 12;
var Light_Sensor_LENGTH= 3;
var PRESET_MENU_ITEM_LENGHT = 5;
var IPTV_MENU_ITEM_LENGHT = 1;
var MAC_ADDR_MENU_ITEM_LENGHT = 4;

var form_flag = 0;//确定弹出框的标志变量。0 主菜单，1 选项1菜单...,1.4 选项1中第4项的菜单...
var div_contain_list;//保存html中div容器数组的变量
var span_contain_list;//保存html中span容器数组的变量
var position_h = 0;//焦点位置
var form_position_h = 0;//form_flag 不为零时的焦点位置
var factoryHotkey = 0;
var presetFactoryChannel = 0;
var powerOnMode = 0;
var whiteBalance;
var form_sec_position_h = 0;//form_flag 不为零时的焦点位置
var keyupdate_position_h = 0;
var pic_related_position_h = 0;
var lightsensor_position_h = 0;
var pre_channel_position_h = 0;
var iptv_position_h = 0;
var mac_position_h = 0;

//form_flag==1
var balanceSourceIndex = 0;
var balanceSource = 0;
var colorTemp = 0;
var tempValue = 0;
var rGian = 0;
var gGian = 0;
var bGian = 0;
var rOffset = 0;
var gOffset = 0;
var bOffset = 0;
var scalingB = 0;
var scalingC = 0;
var scalingS = 0;
var warn_flag=-1;//对应warn 0：no usb 1:no file 2:sure 3:more file
var factory = top.g_factory;
var factoryInfo = factory.getProductInfo();
var language=0;//top.language;
var warn_yes=0;
var watchdog = 0;
var projectId = 0;
var projectId_max = 0;
var Grey_Ctrl = 0;
var usb_upgrade_flag = 0;
var usb_upgrading_flag = 0;
var MAX_LENGTH_VERSION = 30;
var upgrade_status = 0;
var energy_save = 0;
var clone_select_u2t = 0;
var clone_select_t2u = 0;	
var fac_dbc_enable = 0;
document.onkeydown = keyproc;
function keyproc(e)
{
	var key = e.which;
	if(usb_upgrading_flag)
		return;
	//快捷键
	switch(key)
	{
		case top.VK_POWER://power
			top.keyDownProcess(e);
			return;
		default:
			break;
	}
	switch(key)
	{
		case top.VK_MENU:
		case top.VK_BACK:	
		case 27:
		{
			//menu
			if(warn_flag==-1)
			{
				doMenu();
			}
			break;
		}
		case top.VK_LEFT:
		{
			// left
			if(warn_flag==-1)
			{
				toLeft();
			}
			else
			{
				switch(warn_flag)
				{
					case 0:
					case 1:
					{
						if(warn_yes==0)
						{
							warn_yes=1;
							$("yes").style.backgroundColor="#69F";
							$("no").style.backgroundColor="#F9C";
						}
						else
						{
							warn_yes=0;
							$("yes").style.backgroundColor="#F9C";
							$("no").style.backgroundColor="#69F";
						}
						break;
					}
					case 2:
					case 3:
					{
						break;
					}
					default:
					break;
				}
			}
			break;
		}
		case top.VK_UP:
		{
			// up
			if(warn_flag==-1)
			{
				toUp();
			}
			else
			{
				switch(warn_flag)
				{
					case 0:
					case 1:
					{
						if(warn_yes==0)
						{
							warn_yes=1;
							$("yes").style.backgroundColor="#69F";
							$("no").style.backgroundColor="#F9C";
						}
						else
						{
							warn_yes=0;
							$("yes").style.backgroundColor="#F9C";
							$("no").style.backgroundColor="#69F";
						}
						break;
					}
					case 2:
					case 3:
					{
						break;
					}
					default:
					break;
				}
			}
			
			break;
		}
		case top.VK_RIGHT:
		{
			// right
			if(warn_flag==-1)
			{
				toRight();
			}
			else
			{
				switch(warn_flag)
				{
					case 0:
					case 1:
					{
						if(warn_yes==0)
						{
							warn_yes=1;
							$("yes").style.backgroundColor="#69F";
							$("no").style.backgroundColor="#F9C";
						}
						else
						{
							warn_yes=0;
							$("yes").style.backgroundColor="#F9C";
							$("no").style.backgroundColor="#69F";
						}
						break;
					}
					case 2:
					case 3:
					{
						break;
					}
					default:
					break;
				}
			}
			
			break;
		}
		case top.VK_DOWN:
		{
			//down
			if(warn_flag==-1)
			{
				toDown();
			}
			else
			{
				switch(warn_flag)
				{
					case 0:
					case 1:
					{
						if(warn_yes==0)
						{
							warn_yes=1;
							$("yes").style.backgroundColor="#69F";
							$("no").style.backgroundColor="#F9C";
						}
						else
						{
							warn_yes=0;
							$("yes").style.backgroundColor="#F9C";
							$("no").style.backgroundColor="#69F";
						}
						break;
					}
					case 2:
					case 3:
					{
						break;
					}
					default:
					break;
				}
			}
			
			break;
		}
		case top.VK_ENTER:
		{
			//ok
			if(warn_flag==-1)
			{
				doOk();
			}
			else
			{
				switch(warn_flag)
				{
					case 0:
					{
						if(warn_yes==1)
						{
							doOk();
						}
						else
						{
							warn_flag=-1;
						    $("warn").style.display="none";
						}
						break;
					}
					case 1:
					{
						if(warn_yes==1)
						{
							//warn_yes=0;
							/*
							if(usb_upgrade_flag == 1)
							{
								usb_upgrading_flag = 1;
								showUpgradeWarn(0);
								setTimeout(function(){setting.startUpdating(0)},100);
								warn_yes=0;
								warn_flag=-1;
								break;
							}
							if(factory.usbUpdate(form_position_h)==0)
							{
								if(form_position_h==2)
								{
									span_contain_list[2].innerHTML = other[2];
								}
								else if(form_position_h==4)
								{
									span_contain_list[4].innerHTML = other[2];
								}
							}*/
							switch(form_position_h)
							{
								case 0:
									if(usb_upgrade_flag == 1)
									{
										usb_upgrading_flag = 1;
										showUpgradeWarn(0);
										setTimeout(function(){setting.startUpdating(0)},100);
										warn_yes=0;
										warn_flag=-1;
										break;
									}
								case 1:
									factory.usbUpdate(9);
									break;
								case 2:
									factory.usbUpdate(10);
									break;
								case 3:
									if(clone_select_u2t == 0)
									{
										factory.usbUpdate(5);	
									}
									else if(clone_select_u2t == 1)
									{
										factory.usbUpdate(7);
									}
									else if(clone_select_u2t == 2)
									{
										factory.usbUpdate(12);
									}
									break;
								case 4:
									if(clone_select_t2u== 0)
									{
										factory.usbUpdate(6);	
									}
									else if(clone_select_t2u == 1)
									{
										factory.usbUpdate(8);
									}
									else if(clone_select_t2u == 2)
									{
										factory.usbUpdate(13);
									}
									break;
								case 5:
									if(factory.usbUpdate(14) == 0)
									    span_contain_list[5].innerHTML = "OK";
									else
									    span_contain_list[5].innerHTML = "failed";
									break;
								default:
									break;
							}
							warn_yes=0;
							warn_flag=-1;
						    $("warn").style.display="none";
						}
						else
						{
							usb_upgrade_flag = 0;
							warn_flag=-1;
						    $("warn").style.display="none";
						}
						break;
					}
					case 2:
					case 3:
					{
						warn_flag=-1;
						$("warn").style.display="none";
					}
					default:
					break;
				}
			}
		
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
			//0-9
			doNum(key - 48);
			break;
		case top.VK_EXIT:
			//exit
			doExit();
			break;
		default:
			ret = true;
			break; 
	}
}
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
    var value = evt.modifiers;
	//È«¾ÖÏûÏ¢
	switch(msg)
	{
		case top.E_UPDATE_UPDATING_PROGRESS:
			showUpgradeWarn(value);
			break;
		case top.E_UPDATE_USB_GET_UPDATE_INFO:
			usb_upgrade_flag = 1;
			showWarn(1);
			break;
		case top.E_UPDATE_FILE_NOT_FOUND:
			showWarn(2);
			break;
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_CH_BLOCK:// channel lock
		case top.E_SS_PARENTAL_BLOCK://parental lock
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_SS_COMMON_VIDEO:// service ready
		case top.E_SIGNAL_UNLOCK://unlock
		case top.E_PVR_NO_SIGNAL:
		case top.E_SIGNAL_LOCK://lock
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_BOOKING_PLAY_START://booking play start¿ª»úÊ±½ÚÄ¿Ô¤¶¨µÄÊ±¼äÒÑ¹ý£¬µ«ÊÇÒÀÈ»ÒªÌáÐÑÓÃ»§×öÒ»Ð©ÇÐÌ¨µÈ²Ù×÷
		case top.E_BOOKING_PLAY_END://booking play end
		case top.E_BOOKING_RECORD_START://booking record start¿ª»úÊ±Â¼ÖÆÔ¤¶¨ÒÑ¾­¹ýÆÚ£¬µ«ÊÇÒÀÈ»ÒªÌáÐÑÓÃ»§ÇÐÌ¨Â¼ÖÆ
		case top.E_BOOKING_RECORD_END://booking record end
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,Õý³£Çé¿öÏÂÇÐÌ¨ÌáÐÑ£¬Ò»·ÖÖÓÇ°ÌáÐÑ
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record startÕý³£Çé¿öÏÂÂ¼ÖÆÌáÐÑ,£¬Ò»·ÖÖÓÇ°ÌáÐÑ
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_CI_DATA_READY://ci data ready
		case top.E_FACTORY_OSD_HIDE://for factory menu hide
		case top.E_FACTORY_INFORMATION_HIDE://for factory information menu hide
		case top.E_FACTORY_WARMUP_OFF://for warmup 
		case top.E_SHOW_PANEL_TEST_PICTURE:
			top.systemEventProc(evt);
			return;
		default:
			break;
	}
}
function $(id)
{
	return document.getElementById(id);
}
function doMenu()
{
	if(form_flag == 0)
	{
		if(top.g_factory_mode == 1)
		{
			top.g_factory_hotkey = factoryHotkey;
			document.location.href = "../channelPlay.html";
		}
		else
		{
			document.location.href = "designMenu.html?1&" + factoryHotkey;//factory hotkey上传到design menu，等design menu退出后才设置factory.g_factory_hotkey的值
		}
	}
	else if(form_flag == 1)
	{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		div_contain_list[1].style.background = "#FFF";
		form_position_h = 0;
		for(var i = WHITE_BALANCE_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showFactory();
		form_flag = 0;
	}
	else if(form_flag == 2)
	{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		form_position_h = 0;
		for(var i = USB_UPDATE_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showFactory();
		form_flag = 0;
	}
	else if(form_flag == 3)
		{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		form_position_h = 0;
		for(var i = OTHER_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showFactory();
		form_flag = 0;
	}
	else if(form_flag == 4)
	{
		//清除痕迹
		for(var i = 1; i <= PROJECT_ID_ITEM_LENGHT; i++)
		{
			div_contain_list[i].style.background = "#FFF";
		}
		//form_position_h = 0;
		for(var i = PROJECT_ID_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showOtherMenu();
		form_flag = 3;
	}
	else if(form_flag == 5)
	{
		//清除痕迹
		for(var i = 1; i <= KEY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i].style.background = "#FFF";
		}
		//form_position_h = 0;
		for(var i = KEY_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showOtherMenu();
		form_flag = 3;
	}	
	else if(form_flag == 6)
	{
		//清除痕迹
		for(var i = 1; i <= PICTURE_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i].style.background = "#FFF";
		}
		//form_position_h = 0;
		for(var i = PICTURE_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showWhiteBalance();
		form_flag = 1;
	}
	else if(form_flag == 7)
	{
		//清除痕迹
		for(var i = 1; i <= Light_Sensor_LENGTH; i++)
		{
			div_contain_list[i].style.background = "#FFF";
		}
		//form_position_h = 0;
		for(var i = Light_Sensor_LENGTH; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showPictureRelatedMenu();
		form_flag = 6;
	}
	else if(form_flag == 8)
	{
		//清除痕迹
		div_contain_list[pre_channel_position_h + 1].style.background = "#FFF";
		for(var i = PRESET_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showFactory();
		form_flag = 0;
	}
	else if(form_flag == 9)
	{
		//清除痕迹
		for(var i = 1; i <= IPTV_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i].style.background = "#FFF";
		}
		for(var i = IPTV_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showOtherMenu();
		form_flag = 3;
	}
	else if(form_flag == 10)
	{
		//清除痕迹
		for(var i = 1; i <= MAC_ADDR_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i].style.background = "#FFF";
		}
		for(var i = MAC_ADDR_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
		{
			div_contain_list[i + 1].style.display = "block";
			span_contain_list[i].style.display = "block";
		}
		//初始化
		showIPTVMenu();
		form_flag = 9;
	}



}
function toLeft()
{
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 0:
				if(factoryHotkey == 0)
				{
					factoryHotkey = 1;
					//factory.setSerialPortStatus(1);
					div_contain_list[2].style.background = "#FFF";
				}
				else
				{
					factoryHotkey = 0;
					div_contain_list[2].style.background = "#CCC";
				}
				factory.factoryHotkey = factoryHotkey;
				top.g_factory_hotkey = factoryHotkey;
				//top.showFactoryHotkey();
				top.frames["globleShow"].window.showHotkey();
				span_contain_list[0].innerHTML = off_on[factoryHotkey];
				break;
			case 1:
				span_contain_list[1].innerHTML = off_on[1];
				factory.warmUP(1);
				document.location.href="factoryWarmUp.html";
										
				//top.showFactoryHotkey();
				top.frames["globleShow"].window.showHotkey();
				break;
			case 2:
				doOk();
				break;
			case 3:
				div_contain_list[4].style.background = "#FFF";
				div_contain_list[3].style.background = "#FF0";
				position_h--;
				break;
			case 4:
				doOk();
				break;
			case 5:
				span_contain_list[5].innerHTML = other[1];
				setTimeout(function(){
					if(factory.nvmResetAll(0)==0)
					{
						span_contain_list[5].innerHTML = other[2];
						factoryHotkey=1;
						top.g_factory_designModeHotkey = 0;//工厂菜单设计规范的说明
					    top.g_factory_hotkey = factoryHotkey;
				        top.showFactoryHotkey();
				        span_contain_list[0].innerHTML = off_on[factoryHotkey];
						if(factoryHotkey == 0)
						{
							div_contain_list[2].style.background = "#CCC";
						}
						else
						{
							div_contain_list[2].style.background = "#FFF";
						}
					}
					else
					{
						span_contain_list[5].innerHTML = other[3];
					}
				},500)
				break;
				/*
			case 6:
				presetFactoryChannel--;
				if(presetFactoryChannel < 0)
				{
					presetFactoryChannel = 4;
				}
				factory.presetFactoryChannel = presetFactoryChannel;
				span_contain_list[6].innerHTML = preset_factory_channel[presetFactoryChannel];
				break;*/
			case 7:
				powerOnMode--;
				if(powerOnMode < 0)
				{
					powerOnMode = 2;
				}
				factory.powerOnMode = powerOnMode;
				span_contain_list[7].innerHTML = power_on_mode[powerOnMode];
				break;
			case 8:
				div_contain_list[9].style.background = "#FFF";
				div_contain_list[8].style.background = "#FF0";
				position_h--;
				break;
			case 9:
				span_contain_list[9].innerHTML = other[1];
				setTimeout(function(){
					if(factory.deviceIDTest()==0)
					{
						span_contain_list[9].innerHTML = other[2];
					}
					else
					{
						span_contain_list[9].innerHTML = other[3];
					}
				},500);
				break;
			default:
				break;
		}
	}
	else if(form_flag == 1)
	{
		switch(form_position_h)
		{
		/*
			case 0:
				balanceSourceIndex--;
				if(balanceSourceIndex < 0)
				{
					balanceSourceIndex = 5;
				}
				switch(balanceSourceIndex)
				{
					case 0:
						balanceSource = 0;
						break;
					case 1:			
						balanceSource = 1;
						break;
					case 2:
						balanceSource = 2;
						break;
					case 3:
						balanceSource = 4;
						break;
					case 4:
						balanceSource = 5;
						break;
					case 5:
						balanceSource = 6;
						break;
					default:
						break;
				}				

				factory.curveSource = balanceSource;
				span_contain_list[0].innerHTML = balance_source[balanceSourceIndex];
				
				whiteBalance = factory.getWhiteBalance(colorTemp);
				setColoTemp();
				setScaling(whiteBalance);
				break;*/
			case 1:
				colorTemp--;
				if(colorTemp < 0)
				{
					colorTemp = 3;
				}
		                if(3 == colorTemp)
		                {
		                    top.g_setting.colorTemparature=colorTemp + 1;
		                }
		                else
		                {
		                    top.g_setting.colorTemparature=colorTemp;
		                }
				span_contain_list[1].innerHTML = balance_color_temp[colorTemp];
				
				whiteBalance = factory.getWhiteBalance(colorTemp);
				setColoTemp();
				setScaling(whiteBalance);
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				tempValue = parseInt(span_contain_list[form_position_h].innerHTML,10) - 1;
				getTempValue();
				factory.setWhiteBalance(colorTemp,(form_position_h - 2),tempValue);
				span_contain_list[form_position_h].innerHTML = tempValue;
				break;
			case 8:
				//需要一个返回的消息
				span_contain_list[8].innerHTML = other[1];
				factory.whiteBalanceInit();
				break;
				/*
			case 9:
			case 10:
			case 11:
				tempValue = parseInt(span_contain_list[form_position_h].innerHTML,10) - 1;
				getTempValue();
				factory.setWhiteBalance(colorTemp,(form_position_h - 3),tempValue);
				span_contain_list[form_position_h].innerHTML = tempValue;
				break;*/
			default:
				break;
		}
	}
	else if(form_flag == 2)
	{
		//toUp();
		switch(form_position_h)
		{
			case 3:
				clone_select_u2t --;
				if(clone_select_u2t < 0)
					clone_select_u2t = 2;
				span_contain_list[3].innerHTML = clone[clone_select_u2t];
				break;
			case 4:		
				clone_select_t2u --;
				if(clone_select_t2u < 0)
					clone_select_t2u = 2;
				span_contain_list[4].innerHTML = clone[clone_select_t2u];
				break;
			default:
				break;
		}

	}
	else if(form_flag == 3)
	{
		switch(form_position_h)
		{
			case 0:
				if(watchdog== 0)
				{
					watchdog = 1;
				}
				else
				{
					watchdog = 0;
				}
				factory.setWatchDog(watchdog);
				span_contain_list[0].innerHTML = off_on[watchdog];
				break;
			case 2:
				if(Grey_Ctrl== 0)
				{
					Grey_Ctrl = 1;
				}
				else
				{
					Grey_Ctrl = 0;
				}
				factory.setGreyEnable(Grey_Ctrl);
				span_contain_list[2].innerHTML = off_on[Grey_Ctrl];
			case 5:
				{
					if(top.g_motionClarity == "Off")
					{
						top.g_motionClarity = "On";
						span_contain_list[5].innerHTML = top.g_motionClarity;
					}
					else
					{
						top.g_motionClarity = "Off";
						span_contain_list[5].innerHTML = top.g_motionClarity;

					}
				}
				break
			default:
				break;
		}	
	}
	else if(form_flag == 4)
	{
		switch(form_sec_position_h)
		{
			case 0:
				projectId--;
				if(projectId < 0)
				{
					projectId = projectId_max;
				}
				factory.projectId =  projectId;
				factoryInfo = factory.getProductInfo();
				span_contain_list[0].innerHTML = projectId;
				span_contain_list[1].innerHTML = factoryInfo.projectName;
				span_contain_list[2].innerHTML = factoryInfo.pannelName;
				span_contain_list[3].innerHTML = factoryInfo.rcuName;
				span_contain_list[4].innerHTML = factoryInfo.region;
				span_contain_list[5].innerHTML = factoryInfo.psuName;
				break;
			default:
				break;
		}	
	}
	else if(form_flag == 6)
	{
		switch(pic_related_position_h)
		{
			case 0:
				changeDBCToLeft(pic_related_position_h,1);
				break;
			case 2:
				changeDBCToLeft(pic_related_position_h,100);
				break;
			case 3:
				changeDBCToLeft(pic_related_position_h,2);
				break;
			case 4:
				changeDBCToLeft(pic_related_position_h,2);
				break;
			case 5:
			case 7:
				changeDBCToLeft(pic_related_position_h,255);
				break;
			case 6:
			case 8:
			case 9:
				changeDBCToLeft(pic_related_position_h,100);
				break;
			case 10:
				changeDBCToLeft(pic_related_position_h,1);
				break;
			case 11:
				changeDBCToLeft(pic_related_position_h,1);
				break;
			default:
				return;
		}
	}
	else if(form_flag == 7)
	{
		changeLightSensorToLeft(lightsensor_position_h,100);
	}

}
//白平衡中根据source、color temp条件限定rgb gain、rgb offset和scaling相关的取值范围
function getTempValue()
{	/*

	//ATV,AV1,YPbPr,SCART,PC
	if(balanceSource == 0 || balanceSource == 2 || balanceSource == 3 || balanceSource == 4 || balanceSource == 5)
	{
		if(tempValue < -128)
		{
			tempValue = 127;
		}
		else if(tempValue > 127)
		{
			tempValue = -128;
		}
		if(tempValue < 0)
		{
			tempValue = 255;
		}
		else if(tempValue > 255)
		{
			tempValue = 0;
		}
	}
	else if(balanceSource == 1 || balanceSource == 6 || balanceSource == 7 || balanceSource == 8)//DTV*/
	{
		if(colorTemp == 1)//stantard
		{
			if(tempValue < 0)
			{
				tempValue = 255;
			}
			else if(tempValue > 255)
			{
				tempValue = 0;
			}
		}
		else //Cold,Warm
		{
			if(form_position_h >= 2 && form_position_h <= 7)//rgb gain,rgb offset
			{
				if(tempValue < -128)
				{
					tempValue = 127;
				}
				else if(tempValue > 127)
				{
					tempValue = -128;
				}
			}
			else if(form_position_h >= 9 && form_position_h <= 11)//scaling brightness、contrast、saturation
			{
				if(tempValue < 0)
				{
					tempValue = 255;
				}
				else if(tempValue > 255)
				{
					tempValue = 0;
				}
			}
		}
	}
}
function toRight()
{
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 0:
				if(factoryHotkey == 0)
				{
					//factory.setSerialPortStatus(1);
					factoryHotkey = 1;
					div_contain_list[2].style.background = "#FFF";
				}
				else
				{
					factoryHotkey = 0;
					div_contain_list[2].style.background = "#CCC";
				}
				factory.factoryHotkey = factoryHotkey;
				top.g_factory_hotkey = factoryHotkey;
				span_contain_list[0].innerHTML = off_on[factoryHotkey];
				top.frames["globleShow"].window.showHotkey();
				//top.showFactoryHotkey();
				break;
			case 1:
				span_contain_list[1].innerHTML = off_on[1];
				factory.warmUP(1);
				document.location.href="factoryWarmUp.html";
				//top.showFactoryHotkey();
				top.frames["globleShow"].window.showHotkey();
				break;
			case 2:
				doOk();
				break;
			case 3:
				div_contain_list[4].style.background = "#FFF";
				div_contain_list[5].style.background = "#FF0";
				position_h++;
				break;
			case 4:
				doOk();
				break;
			case 5:
				span_contain_list[5].innerHTML = other[1];
            	setTimeout(function(){
					if(factory.nvmResetAll(1)==0)
					{
						span_contain_list[5].innerHTML = other[2];
						factoryHotkey=1;
						top.g_factory_designModeHotkey = 0;//工厂菜单设计规范的说明
					    top.g_factory_hotkey = factoryHotkey;
				        top.showFactoryHotkey();
				        span_contain_list[0].innerHTML = off_on[factoryHotkey];
						if(factoryHotkey == 0)
						{
							div_contain_list[2].style.background = "#CCC";
						}
						else
						{
							div_contain_list[2].style.background = "#FFF";
						}
					}
					else
					{
						span_contain_list[5].innerHTML = other[3];
					}
				},500)
				break;
				/*
			case 6:
				presetFactoryChannel++;
				if(presetFactoryChannel >= 5)
				{
					presetFactoryChannel = 0;
				}
				factory.presetFactoryChannel = presetFactoryChannel;
				span_contain_list[6].innerHTML = preset_factory_channel[presetFactoryChannel];
				break;*/
			case 7:
				powerOnMode++;
				if(powerOnMode > 2)
				{
					powerOnMode = 0;
				}
				factory.powerOnMode = powerOnMode;
				span_contain_list[7].innerHTML = power_on_mode[powerOnMode];
				break;
			case 8:
				div_contain_list[9].style.background = "#FFF";
				div_contain_list[10].style.background = "#FF0";
				position_h++;
				break;
			case 9:
				span_contain_list[9].innerHTML = other[1];
				setTimeout(function(){
					if(factory.deviceIDTest()==0)
					{
						span_contain_list[9].innerHTML = other[2];
					}
					else
					{
						span_contain_list[9].innerHTML = other[3];
					}
				},500);
				break;
			default:
				break;
		}
	}
	else if(form_flag == 1)
	{
		switch(form_position_h)
		{
		/*
			case 0:
				balanceSourceIndex++;
				if(balanceSourceIndex > 5)
				{
					balanceSourceIndex = 0;
				}
				switch(balanceSourceIndex)
				{
					case 0:
						balanceSource = 0;
						break;
					case 1:			
						balanceSource = 1;
						break;
					case 2:
						balanceSource = 2;
						break;
					case 3:
						balanceSource = 4;
						break;
					case 4:
						balanceSource = 5;
						break;
					case 5:
						balanceSource = 6;
						break;
					default:
						break;
				}				
				factory.curveSource = balanceSource;
				span_contain_list[0].innerHTML = balance_source[balanceSourceIndex];
				
				whiteBalance = factory.getWhiteBalance(colorTemp);
				setColoTemp();
				setScaling(whiteBalance);
				break;*/
			case 1:
				colorTemp++;
				if(colorTemp > 3)
				{
					colorTemp = 0;
				}
		                if(3 == colorTemp){
		                    top.g_setting.colorTemparature=colorTemp + 1;
		                }
		                else
		                {
		                    top.g_setting.colorTemparature=colorTemp;
		                }
				span_contain_list[1].innerHTML = balance_color_temp[colorTemp];
				whiteBalance = factory.getWhiteBalance(colorTemp);
				setColoTemp();
				setScaling(whiteBalance);
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				tempValue = parseInt(span_contain_list[form_position_h].innerHTML,10) + 1;
				getTempValue();
				factory.setWhiteBalance(colorTemp,(form_position_h - 2),tempValue);
				span_contain_list[form_position_h].innerHTML = tempValue;
				break;
			case 8:
				//需要一个返回的消息
				span_contain_list[8].innerHTML = other[1];
				setTimeout(function(){
				factory.whiteBalanceInit();
				span_contain_list[8].innerHTML = other[2];
					},500);
				break;
				/*
			case 9:
			case 10:
			case 11:
				tempValue = parseInt(span_contain_list[form_position_h].innerHTML,10) + 1;
				getTempValue();
				factory.setWhiteBalance(colorTemp,(form_position_h - 3),tempValue);
				span_contain_list[form_position_h].innerHTML = tempValue;
				break;*/
			default:
				break;
		}
	}
	else if(form_flag == 2)
	{
		//toDown();
		switch(form_position_h)
		{
			case 3:
				clone_select_u2t ++;
				if(clone_select_u2t > 2)
					clone_select_u2t = 0;
				span_contain_list[3].innerHTML = clone[clone_select_u2t];
				break;
			case 4:		
				clone_select_t2u ++;
				if(clone_select_t2u > 2)
					clone_select_t2u = 0;
				span_contain_list[4].innerHTML = clone[clone_select_t2u];
				break;
			default:
				break;
		}
	}
	else if(form_flag == 3)
	{
		switch(form_position_h)
		{
			case 0:
				if(watchdog== 0)
				{
					watchdog = 1;
				}
				else
				{
					watchdog = 0;
				}
				factory.setWatchDog(watchdog);
				span_contain_list[0].innerHTML = off_on[watchdog];
				break;
			case 2:
				if(Grey_Ctrl== 0)
				{
					Grey_Ctrl = 1;
				}
				else
				{
					Grey_Ctrl = 0;
				}
				factory.setGreyEnable(Grey_Ctrl);
				span_contain_list[2].innerHTML = off_on[Grey_Ctrl];
				break;
			case 5:
				{
					if(top.g_motionClarity == "Off")
					{
						top.g_motionClarity = "On";
						span_contain_list[5].innerHTML = top.g_motionClarity;
					}
					else
					{
						top.g_motionClarity = "Off";
						span_contain_list[5].innerHTML = top.g_motionClarity;

					}
				}
				break
			default:
				break;
		}	
	}
	else if(form_flag == 4)
	{
		switch(form_sec_position_h)
		{
			case 0:
				projectId++;
				if(projectId > projectId_max)
				{
					projectId = 0;
				}
				factory.projectId =  projectId;
				factoryInfo = factory.getProductInfo();
				span_contain_list[0].innerHTML = projectId;
				span_contain_list[1].innerHTML = factoryInfo.projectName;
				span_contain_list[2].innerHTML = factoryInfo.pannelName;
				span_contain_list[3].innerHTML = factoryInfo.rcuName;
				span_contain_list[4].innerHTML = factoryInfo.region;
				span_contain_list[5].innerHTML = factoryInfo.psuName;
				break;
			default:
				break;
		}	
	}
	else if(form_flag == 6)
	{
		switch(pic_related_position_h)
		{
			case 0:
				changeDBCToRight(pic_related_position_h,1);
				break;
			case 2:
				changeDBCToRight(pic_related_position_h,100);
				break;
			case 3:
				changeDBCToRight(pic_related_position_h,2);
				break;
			case 4:
				changeDBCToRight(pic_related_position_h,2);
				break;
			case 5:
			case 7:
				changeDBCToRight(pic_related_position_h,255);
				break;
			case 6:
			case 8:
			case 9:
				changeDBCToRight(pic_related_position_h,100);
				break;
			case 10:
				changeDBCToRight(pic_related_position_h,1);
				break;
			case 11:
				changeDBCToRight(pic_related_position_h,1);
				break;
			default:
				return;
		}	
	}
	else if(form_flag == 7)
	{
		changeLightSensorToRight(lightsensor_position_h,100);
	}	
	else if(form_flag == 8)
	{
		switch(pre_channel_position_h)
		{
			case 0:
				span_contain_list[0].innerHTML = other[1];
				setTimeout(function(){
				factory.presetFactoryChannel = 0x00;
				span_contain_list[0].innerHTML = ">";
				},500);
				break;
			case 1:
				span_contain_list[1].innerHTML = other[1];
				setTimeout(function(){
				factory.presetFactoryChannel = 0x01;
				span_contain_list[1].innerHTML = ">";
				},500);
				break;
			case 2:
				span_contain_list[2].innerHTML = other[1];
				setTimeout(function(){
				factory.presetFactoryChannel = 0x02;
				span_contain_list[2].innerHTML = ">";
				},500);
				break;
			case 3:
				span_contain_list[3].innerHTML = other[1];
				setTimeout(function(){
				factory.presetFactoryChannel = 0x03;
				span_contain_list[3].innerHTML = ">";
				},500);
				break;
			case 4:
				span_contain_list[4].innerHTML = other[1];
				setTimeout(function(){
				factory.presetFactoryChannel = 0x04;
				span_contain_list[4].innerHTML = ">";
				},500);
				break;
			default:
				return;
		}	
	}
	else if(form_flag == 10)
	{
		switch(mac_position_h)
		{
			case 0:
				span_contain_list[0].innerHTML = other[1];
				setTimeout(function(){
						if(factory.usbUpdate(11) == 0)
						{
							span_contain_list[0].innerHTML = "OK";
						}
						else
						{
							span_contain_list[0].innerHTML = "Failed";
						}
						//top.showFactoryHotkey();
						top.frames["globleShow"].window.showHotkey();
					},500);
				break;
			case 3:
				break;
			default:
				return;
		}	
	}
}
function toUp()
{
	if(form_flag == 0)
	{
		if(position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[10].style.background = "#FF0";
			position_h = 9;
		}
		else if(position_h == 2)
		{
			if(factoryHotkey == 0)
			{
				div_contain_list[3].style.background = "#FFF";
				div_contain_list[1].style.background = "#FF0";
				position_h = 0;
			}
			else
			{
				div_contain_list[position_h + 1].style.background = "#FFF";
				div_contain_list[position_h].style.background = "#FF0";
				position_h--;
			}
		}
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h].style.background = "#FF0";
			position_h--;
		}
	}
	else if(form_flag == 1)
	{
		if(form_position_h == 1)
		{
			div_contain_list[2].style.background = "#FFF";
			div_contain_list[WHITE_BALANCE_ITEM_LENGHT].style.background = "#FF0";
			form_position_h = WHITE_BALANCE_ITEM_LENGHT-1;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h].style.background = "#FF0";
			form_position_h--;
		}
	}
	else if(form_flag == 2)
	{
		if(form_position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[USB_UPDATE_ITEM_LENGHT].style.background = "#FF0";
			form_position_h = USB_UPDATE_ITEM_LENGHT -1;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h].style.background = "#FF0";
			form_position_h--;
		}
	}
	else if(form_flag == 3)
	{
		if(form_position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[OTHER_MENU_ITEM_LENGHT].style.background = "#FF0";
			form_position_h = OTHER_MENU_ITEM_LENGHT - 1;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h].style.background = "#FF0";
			form_position_h--;
		}
	}
	else if(form_flag == 5)
	{
		if(keyupdate_position_h== 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[KEY_MENU_ITEM_LENGHT].style.background = "#FF0";
			keyupdate_position_h = KEY_MENU_ITEM_LENGHT - 1;
		}
		else
		{
			div_contain_list[keyupdate_position_h + 1].style.background = "#FFF";
			div_contain_list[keyupdate_position_h].style.background = "#FF0";
			keyupdate_position_h--;
		}
	}
	else if(form_flag == 6)
	{
		if(pic_related_position_h== 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[PICTURE_MENU_ITEM_LENGHT].style.background = "#FF0";
			pic_related_position_h = PICTURE_MENU_ITEM_LENGHT - 1;
		}
		else if(pic_related_position_h == 3)
		{
			if(energy_save != 0)
			{
				div_contain_list[4].style.background = "#FFF";
				div_contain_list[2].style.background = "#FF0";
				pic_related_position_h = 1;
			}
			else
			{
				div_contain_list[pic_related_position_h + 1].style.background = "#FFF";
				div_contain_list[pic_related_position_h].style.background = "#FF0";
				pic_related_position_h--;
			}
		}
		else
		{
			div_contain_list[pic_related_position_h + 1].style.background = "#FFF";
			div_contain_list[pic_related_position_h].style.background = "#FF0";
			pic_related_position_h--;
		}
	}
	else if(form_flag == 7)
	{
		if(lightsensor_position_h== 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[Light_Sensor_LENGTH].style.background = "#FF0";
			lightsensor_position_h = Light_Sensor_LENGTH - 1;
		}
		else
		{
			div_contain_list[lightsensor_position_h + 1].style.background = "#FFF";
			div_contain_list[lightsensor_position_h].style.background = "#FF0";
			lightsensor_position_h--;
		}
	}
	else if(form_flag == 8)
	{
		if(pre_channel_position_h== 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[PRESET_MENU_ITEM_LENGHT].style.background = "#FF0";
			pre_channel_position_h = PRESET_MENU_ITEM_LENGHT - 1;
		}
		else
		{
			div_contain_list[pre_channel_position_h + 1].style.background = "#FFF";
			div_contain_list[pre_channel_position_h].style.background = "#FF0";
			pre_channel_position_h--;
		}
	}
	else if(form_flag == 9)
	{
		if(iptv_position_h== 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[IPTV_MENU_ITEM_LENGHT].style.background = "#FF0";
			iptv_position_h = IPTV_MENU_ITEM_LENGHT - 1;
		}
		else
		{
			div_contain_list[iptv_position_h + 1].style.background = "#FFF";
			div_contain_list[iptv_position_h].style.background = "#FF0";
			iptv_position_h--;
		}
	}
	else if(form_flag == 10)
	{
		if(mac_position_h== 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[MAC_ADDR_MENU_ITEM_LENGHT].style.background = "#FF0";
			mac_position_h = MAC_ADDR_MENU_ITEM_LENGHT - 1;
		}
		else
		{
			div_contain_list[mac_position_h + 1].style.background = "#FFF";
			div_contain_list[mac_position_h].style.background = "#FF0";
			mac_position_h--;
		}
	}


}
function toDown()
{
	if(form_flag == 0)
	{
		if(position_h == 9)
		{
			div_contain_list[10].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			position_h = 0;
		}
		else if(position_h == 0)
		{
			if(factoryHotkey == 0)
			{
				div_contain_list[1].style.background = "#FFF";
				div_contain_list[3].style.background = "#FF0";
				position_h = 2;
			}
			else
			{
				div_contain_list[position_h + 1].style.background = "#FFF";
				div_contain_list[position_h + 2].style.background = "#FF0";
				position_h++;
			}
		}
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h + 2].style.background = "#FF0";
			position_h++;
		}
	}
	else if(form_flag == 1)
	{
		if(form_position_h == (WHITE_BALANCE_ITEM_LENGHT-1))
		{
			div_contain_list[WHITE_BALANCE_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[2].style.background = "#FF0";
			form_position_h = 1;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h + 2].style.background = "#FF0";
			form_position_h++;
		}
	}
	else if(form_flag == 2)
	{
		if(form_position_h == (USB_UPDATE_ITEM_LENGHT-1))
		{
			div_contain_list[USB_UPDATE_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			form_position_h = 0;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h + 2].style.background = "#FF0";
			form_position_h++;
		}
	}
	else if(form_flag == 3)
	{
		if(form_position_h ==( OTHER_MENU_ITEM_LENGHT -1))
		{
			div_contain_list[OTHER_MENU_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			form_position_h = 0;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h + 2].style.background = "#FF0";
			form_position_h++;
		}
	}
	else if(form_flag == 5)
	{
		if(keyupdate_position_h ==( KEY_MENU_ITEM_LENGHT -1))
		{
			div_contain_list[KEY_MENU_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			keyupdate_position_h = 0;
		}
		else
		{
			div_contain_list[keyupdate_position_h + 1].style.background = "#FFF";
			div_contain_list[keyupdate_position_h + 2].style.background = "#FF0";
			keyupdate_position_h++;
		}
	}
	else if(form_flag == 6)
	{
		if(pic_related_position_h ==( PICTURE_MENU_ITEM_LENGHT -1))
		{
			div_contain_list[PICTURE_MENU_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			pic_related_position_h = 0;
		}
		else if(pic_related_position_h == 1)
		{
			if(energy_save != 0)
			{
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[4].style.background = "#FF0";
				pic_related_position_h = 3;
			}
			else
			{
				div_contain_list[pic_related_position_h + 1].style.background = "#FFF";
				div_contain_list[pic_related_position_h + 2].style.background = "#FF0";
				pic_related_position_h++;
			}

		}
		else
		{
			div_contain_list[pic_related_position_h + 1].style.background = "#FFF";
			div_contain_list[pic_related_position_h + 2].style.background = "#FF0";
			pic_related_position_h++;
		}
	}
	else if(form_flag == 7)
	{
		if(lightsensor_position_h ==( Light_Sensor_LENGTH -1))
		{
			div_contain_list[Light_Sensor_LENGTH].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			lightsensor_position_h = 0;
		}
		else
		{
			div_contain_list[lightsensor_position_h + 1].style.background = "#FFF";
			div_contain_list[lightsensor_position_h + 2].style.background = "#FF0";
			lightsensor_position_h++;
		}
	}
	else if(form_flag == 8)
	{
		if(pre_channel_position_h ==( PRESET_MENU_ITEM_LENGHT -1))
		{
			div_contain_list[PRESET_MENU_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			pre_channel_position_h = 0;
		}
		else
		{
			div_contain_list[pre_channel_position_h + 1].style.background = "#FFF";
			div_contain_list[pre_channel_position_h + 2].style.background = "#FF0";
			pre_channel_position_h++;
		}
	}
	else if(form_flag == 9)
	{
		if(iptv_position_h ==( IPTV_MENU_ITEM_LENGHT -1))
		{
			div_contain_list[IPTV_MENU_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			iptv_position_h = 0;
		}
		else
		{
			div_contain_list[iptv_position_h + 1].style.background = "#FFF";
			div_contain_list[iptv_position_h + 2].style.background = "#FF0";
			iptv_position_h++;
		}
	}
	else if(form_flag == 10)
	{
		if(mac_position_h ==( MAC_ADDR_MENU_ITEM_LENGHT -1))
		{
			div_contain_list[MAC_ADDR_MENU_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			mac_position_h = 0;
		}
		else
		{
			div_contain_list[mac_position_h + 1].style.background = "#FFF";
			div_contain_list[mac_position_h + 2].style.background = "#FF0";
			mac_position_h++;
		}
	}


}
function doOk()
{
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 2:
				span_contain_list[2].innerHTML = other[1];
				top.showMute(0);
				top.initGlobalVariable();
				top.showFactoryHotkey();
				factory.resetShop();
				setTimeout(function(){
					span_contain_list[2].innerHTML = other[2];
					document.location.href = "../initSetup/initEnvironmentSet.html";
					},3000);
				break;
			case 3:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[11].style.background = "#FFF";
				div_contain_list[12].style.background = "#FFF";
				div_contain_list[13].style.background = "#FFF";
				div_contain_list[14].style.background = "#FFF";
				//初始化
				form_position_h = 0;
				form_flag = 1;
				factory.curveSource = 6;
				showWhiteBalance();
				break;
			case 4:
				//span_contain_list[4].innerHTML = other[1];
				//top.g_factory_designModeHotkey = 0;//工厂菜单设计规范的说明
				//top.showFactoryHotkey();
				//factory.shopInit();
				div_contain_list[position_h + 1].style.background = "#FFF";
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[11].style.background = "#FFF";
				div_contain_list[12].style.background = "#FFF";
				div_contain_list[13].style.background = "#FFF";
				div_contain_list[14].style.background = "#FFF";
				//初始化
				form_position_h = 0;
				showOtherMenu();
				form_flag = 3;
				break;
			case 5:
				span_contain_list[5].innerHTML = other[1];
				setTimeout(function(){
					if(factory.nvmResetAll(1)==0)
					{
						span_contain_list[5].innerHTML = other[2];
						factoryHotkey=1;
						top.g_factory_designModeHotkey = 0;//工厂菜单设计规范的
					    top.g_factory_hotkey = factoryHotkey;
				        top.showFactoryHotkey();
				        span_contain_list[0].innerHTML = off_on[factoryHotkey];
						if(factoryHotkey == 0)
						{
							div_contain_list[2].style.background = "#CCC";
						}
						else
						{
							div_contain_list[2].style.background = "#FFF";
						}
					}
					else
					{
						span_contain_list[5].innerHTML = other[3];
					}
				},500)
				break;
			case 6:
				div_contain_list[pre_channel_position_h + 1].style.background = "#FFF";
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[11].style.background = "#FFF";
				div_contain_list[12].style.background = "#FFF";
				div_contain_list[13].style.background = "#FFF";
				div_contain_list[14].style.background = "#FFF";
				//初始化
				showPresetChannelMenu();
				form_flag = 8;
				break;
			case 8:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[11].style.background = "#FFF";
				div_contain_list[12].style.background = "#FFF";
				div_contain_list[13].style.background = "#FFF";
				div_contain_list[14].style.background = "#FFF";
				//初始化
				showUsbUpdate();
				form_flag = 2;
				break;
			default:
				break;
		}
	}
	else if(form_flag == 1)
	{
		switch(form_position_h)
			{
				case WHITE_BALANCE_ITEM_LENGHT -1:
					pic_related_position_h = 0;
					div_contain_list[form_position_h+1].style.background = "#FFF";
					showPictureRelatedMenu();
					form_flag = 6;
					break;
				default:
					break;
			}
	}
	else if(form_flag == 2)
	{
		if(factory.getUsbDeviceStatus())
		{
			$("warn").style.display="none";
			switch(form_position_h)
			{
				case 0:
					setting.softwareUpdate(0);
					//setting.startUpdating(0);
					break;
				case 1:
					showWarn(1);
				break;
				case 2:
				{
					var fileNum=factory.getUpgradeFileNum(form_position_h);
					switch(fileNum)
					{
						case 0:
						{
							showWarn(2);
							break;
						}
						case 1:
						{
							showWarn(1);
							break;
						}
						default:
						{
							showWarn(3);
							break;
						}
					}
					break;
				}
				case 3:
				{
					showWarn(1);
				}
				break;
				case 4:
				{
					showWarn(1);
					break;
				}
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:	
				case 10:	
				case 11:	
				case 12:	
				{
					showWarn(1);
					break;
				}
				default:
					return;
			}
		}
		else
		{
			showWarn(0);
		}
	}
	else if(form_flag == 3)
	{
		switch(form_position_h)
		{
			case 1:
				//清除痕迹
				div_contain_list[form_position_h+ 1].style.background = "#FFF";
				//初始化
				showProjectID();
				form_flag = 4;
				break;
			case 3:
				div_contain_list[form_position_h+ 1].style.background = "#FFF";
				//初始化
				showKeyUpdateMenu();
				form_flag = 5;
				break;
			case 4:
				div_contain_list[form_position_h+ 1].style.background = "#FFF";
				//初始化
				showIPTVMenu();
				form_flag = 9;
				break;
			default:
				break;
		}	
	}
	else if(form_flag == 5)
	{
		switch(keyupdate_position_h)
		{
			case 1:
				//清除痕迹
				//div_contain_list[keyupdate_position_h+ 1].style.background = "#FFF";
				//初始化
				span_contain_list[1].innerHTML = other[1];
				setTimeout(function(){
						if(factory.usbUpdate(4)==0)
						{
							span_contain_list[11].innerHTML = cikey_status[1];
							span_contain_list[1].innerHTML = other[2];					
						}
						else
						{
							span_contain_list[1].innerHTML = other[3];
							span_contain_list[11].innerHTML = cikey_status[0];
						}
						span_contain_list[12].innerHTML = setting.getCICustomCode();
						span_contain_list[13].innerHTML = factory.getCIKeyName();
						if(factory.designModeHotkey == 1 || factory.factoryHotkey == 1)
							top.frames["globleShow"].window.showHotkey();
					},500);
				break;
			case 2:
				//div_contain_list[keyupdate_position_h+ 1].style.background = "#FFF";
				//初始化
				span_contain_list[2].innerHTML = other[1];
				setTimeout(function(){
					//if(setting.eraseCICertificate()==0)
					if(factory.eraseCIKey() == 0)
					{
						span_contain_list[2].innerHTML = other[2];	
						span_contain_list[11].innerHTML = cikey_status[0];
						//factory.eraseCIKey();
						span_contain_list[12].innerHTML = setting.getCICustomCode();
						span_contain_list[13].innerHTML = factory.getCIKeyName();
					}
					else
					{
						span_contain_list[2].innerHTML = other[3];
					}
					if(factory.designModeHotkey == 1 || factory.factoryHotkey == 1)
						top.frames["globleShow"].window.showHotkey();
				},500);
				break;
			default:
				break;
		}	
	}
	else if(form_flag == 6)
	{
		switch(pic_related_position_h)
			{
				case 1:
					div_contain_list[pic_related_position_h + 1].style.background = "#FFF";
					div_contain_list[3].style.background = "#FFF";
					lightsensor_position_h = 0;
					showLightSensor();
					form_flag = 7;
					break;
				default:
					break;
			}
	}
	else if(form_flag == 9)
	{
		switch(iptv_position_h)
			{
				case 0:
					div_contain_list[iptv_position_h+ 1].style.background = "#FFF";
					//初始化
					showMacAddrMenu();
					form_flag = 10;
					break;
				default:
					break;
			}
	}

}
function doNum(num)
{
	if(form_flag == 0)
	{
		if(num == 0)
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[10].style.background = "#FF0";
			position_h = 9;
		}
		else 
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[num].style.background = "#FF0";
			position_h = num - 1;
		}
	}
	else if(form_flag == 1)
	{
		return;
	}
	else if(form_flag == 2)
	{
		return;
	}
	else if(form_flag == 3)
	{
		return;
	}

}
function doExit()
{
	top.g_factory_hotkey = factoryHotkey;
	document.location.href = "../channelPlay.html";
}
function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
		top.stopTimeout();
	top.showBackground(0);
	factoryHotkey = factory.factoryHotkey;//factory.g_factory_hotkey;
	presetFactoryChannel = factory.presetFactoryChannel;
	powerOnMode = factory.powerOnMode;
	div_contain_list = $('menu').getElementsByTagName('div');
	span_contain_list = $('menu').getElementsByTagName('span');
	showFactory();
}
function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
function showFactory()
{
	//初始化菜单项
	for(var i = 0; i <= FACTORY_MENU_ITEM_LENGHT; i++ )
	{
		div_contain_list[i].innerHTML = init_title[i];
	}
	factoryInfo = factory.getProductInfo();
	span_contain_list[0].innerHTML = off_on[factoryHotkey];
	span_contain_list[1].innerHTML = off_on[0];
	span_contain_list[2].innerHTML = other[0];
	span_contain_list[3].innerHTML = "";
	span_contain_list[4].innerHTML = "";
	span_contain_list[5].innerHTML = other[0];
	span_contain_list[6].innerHTML = "";//preset_factory_channel[presetFactoryChannel];
	span_contain_list[7].innerHTML = power_on_mode[powerOnMode];
	span_contain_list[8].innerHTML = "";
	span_contain_list[9].innerHTML = other[0];
	
	span_contain_list[10].innerHTML = factoryInfo.swName;
	span_contain_list[11].innerHTML = factoryInfo.projectName;
	span_contain_list[12].innerHTML = factoryInfo.siacpVer;
	span_contain_list[13].innerHTML = factoryInfo.compileDate;
	
	if(factoryHotkey == 0)
	{
		div_contain_list[2].style.background = "#CCC";
	}
	else
	{
		div_contain_list[2].style.background = "#FFF";
	}
	
	div_contain_list[11].style.background = "#CCC";
	div_contain_list[12].style.background = "#CCC";
	div_contain_list[13].style.background = "#CCC";
	div_contain_list[14].style.background = "#CCC";
	div_contain_list[position_h + 1].style.background = "#FF0";
}

function showWhiteBalance()
{
	if(form_flag ==1)
		form_position_h = 1;
	for(var i = WHITE_BALANCE_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	for(var i = 0; i <= WHITE_BALANCE_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = white_balance[i];
	}
	div_contain_list[1].style.background = "#CCC";
	balanceSource = factory.curveSource;
	switch(balanceSource)
	{
		case 0:
			balanceSourceIndex = 0;
			break;
		case 1:			
			balanceSourceIndex = 1;
			break;
		case 2:
			balanceSourceIndex = 2;
			break;
		case 4:
			balanceSourceIndex = 3;
			break;
		case 5:
			balanceSourceIndex = 4;
			break;
		case 6:
		case 7:
		case 8:
			balanceSourceIndex = 5;
			break;
		default:
			break;
	}
	colorTemp = top.g_setting.colorTemparature;
	if(colorTemp == 3)
	{
		top.g_setting.colorTemparature = 0;
		colorTemp = 0;
	}
        if(colorTemp == 4)
        {
            colorTemp = 3;
        }
	//top.g_setting.colorTemparature;
	span_contain_list[0].innerHTML = balance_source[balanceSourceIndex];
	span_contain_list[1].innerHTML = balance_color_temp[colorTemp];
	
	
	whiteBalance = factory.getWhiteBalance(colorTemp);
	setColoTemp();
	span_contain_list[8].innerHTML = other[0];
	setScaling(whiteBalance);
	span_contain_list[9].innerHTML = "";
	div_contain_list[form_position_h+1].style.background = "#FF0";
}

/*
*描述：用来设置色温的gain和offset属性
*/
function setColoTemp()
{
	for(var i = 2; i <= 7; i++)
	{
		span_contain_list[i].innerHTML = whiteBalance.substring(0,whiteBalance.indexOf('/'));
		whiteBalance = whiteBalance.substring(whiteBalance.indexOf('/') + 1);
	}
}

/*
*描述：用来设置scaling属性
*scalingString表示只包含scaling属性的字串
*/
function setScaling(scalingString)
{
	var str = scalingString;
	span_contain_list[9].innerHTML = str.substring(0,str.indexOf('/'));
	str = str.substring(str.indexOf('/') + 1);
	span_contain_list[10].innerHTML = str.substring(0,str.indexOf('/'));
	str = str.substring(str.indexOf('/') + 1);
	span_contain_list[11].innerHTML = str.substring(0);
}

function showUsbUpdate()
{
	form_position_h = 0;
	//初始化菜单项
	for(var i = 0; i <= USB_UPDATE_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = usb_update[i];
	}
	for(var i = USB_UPDATE_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	span_contain_list[0].innerHTML = "";
	span_contain_list[1].innerHTML = "";
	span_contain_list[2].innerHTML = "";
	span_contain_list[3].innerHTML = clone[clone_select_u2t];
	span_contain_list[4].innerHTML = clone[clone_select_t2u];
	span_contain_list[5].innerHTML = "";

	
	div_contain_list[1].style.background = "#FF0";
}
function showUpgradeWarn(value)
{
	$("warn").style.display="block";
	if(value == 100)
		$("warn_type").innerHTML=usb_update_warn[5] +":TV will reboot";	
	else		
		$("warn_type").innerHTML=usb_update_warn[4];
	$("yes").style.backgroundColor="#69F";
	$("yes").style.display="block";
	$("no").style.display="none";
	$("yes").innerHTML= value + "%";
}
function showWarn(warn_level)
{
	$("warn").style.display="block";
	warn_flag=warn_level;
	$("warn_type").innerHTML=usb_update_warn[warn_flag];
	switch(warn_flag)
	{
		case 0:
		{
			if(warn_yes==1)
			{
				$("yes").style.backgroundColor="#69F";
				$("no").style.backgroundColor="#F9C";
			}
			else
			{
				$("yes").style.backgroundColor="#F9C";
				$("no").style.backgroundColor="#69F";
			}
			$("yes").style.display="block";
			$("no").style.display="block";
			$("yes").innerHTML=usb_update_warn_yes_or_no[0];
			$("no").innerHTML=usb_update_warn_yes_or_no[1];
		}
		case 1:
		{
		    if(warn_yes==1)
			{
				$("yes").style.backgroundColor="#69F";
				$("no").style.backgroundColor="#F9C";
			}
			else
			{
				$("yes").style.backgroundColor="#F9C";
				$("no").style.backgroundColor="#69F";
			}
			$("yes").style.display="block";
			$("no").style.display="block";
			$("yes").innerHTML=usb_update_warn_yes_or_no[0];
			$("no").innerHTML=usb_update_warn_yes_or_no[1];
			break;
		}
		case 2:
		case 3:
		{
				$("yes").style.display="none";
				$("no").style.backgroundColor="#69F";
				$("no").innerHTML=usb_update_warn_yes_or_no[0];
				break;
		}
		case 4:
		{
			$("yes").style.display="none";
			$("no").style.display="none";
		}
		case 5:
		case 6:
		{
			
		}
		default:
		break;
	}
}
function showOtherMenu()
{
	watchdog = factory.getWatchDog();
	Grey_Ctrl = factory.getGreyEnable();
	//form_position_h = 0;
	for(var i = OTHER_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	for(var i = 0; i <= OTHER_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = other_menu[i];
	}
	
	span_contain_list[0].innerHTML = off_on[watchdog];
	span_contain_list[1].innerHTML = "";
	span_contain_list[2].innerHTML = off_on[Grey_Ctrl];
	span_contain_list[3].innerHTML = "";
	span_contain_list[4].innerHTML = "";
	span_contain_list[5].innerHTML = top.g_motionClarity;
    span_contain_list[6].innerHTML = span_contain_list[10].innerHTML = factory.getEsnKey(1,200);
    span_contain_list[7].innerHTML = ciAndKey[factory.getCIUpgradeStatus()];
	
	for(var i = 11; i < 14; i++)
	{
		span_contain_list[i].style.display = "block";
		div_contain_list[i + 1].style.display = "block";
		div_contain_list[i + 1].style.background = "#CCC";

	}

	span_contain_list[11].innerHTML =factory.getFrcVersion(MAX_LENGTH_VERSION);
	span_contain_list[12].innerHTML = factory.getStbcVersion(MAX_LENGTH_VERSION);
	span_contain_list[13].innerHTML = factory.getUbootVersion(MAX_LENGTH_VERSION);	
	
	div_contain_list[12].innerHTML = "FRC Version:";
	div_contain_list[13].innerHTML = "STBC Version:";
	div_contain_list[14].innerHTML = "UBOOT Version:";
	
	div_contain_list[form_position_h+1].style.background = "#FF0";
}
function showProjectID()
{
	//form_position_h = 0;
	form_sec_position_h = 0
	factoryInfo = factory.getProductInfo();
	projectId_max = factory.getProjectIdMax();
	projectId = factory.projectId;
	for(var i = 7; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	for(var i = 0; i <= PROJECT_ID_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = project_id[i];

	}
	for(var i = 0; i < PROJECT_ID_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "block";
		div_contain_list[i + 1].style.display = "block";

	}
	for(var i = 2; i <= PROJECT_ID_ITEM_LENGHT; i++)
	{
		div_contain_list[i].style.background = "#CCC";
	}
	
	span_contain_list[0].innerHTML = factory.projectId;
	span_contain_list[1].innerHTML = factoryInfo.projectName;
	span_contain_list[2].innerHTML = factoryInfo.pannelName;
	span_contain_list[3].innerHTML = factoryInfo.rcuName;
	span_contain_list[4].innerHTML = factoryInfo.region;
	span_contain_list[5].innerHTML = factoryInfo.psuName;

    var runningTime = parseInt(setting.getProperty("persist.app.runntingTime", "0"))*20;
    var year = runningTime/(365*24*60);
    var year1 = runningTime%(365*24*60);
    var month = year1/(30*60*24);
    var month1 = year1%(30*60*24);
    var day = month1/(60*24);
    var day1 = month1%(60*24);
    var hour = day1/60;
    var minute = day1%60;
    span_contain_list[6].innerHTML = Math.floor(year)+"Y:"+Math.floor(month)+"M:"+Math.floor(day)+"D:"+Math.floor(hour)+"h:"+minute+"m";
	
	div_contain_list[1].style.background = "#FF0";
}
function showKeyUpdateMenu()
{
	keyupdate_position_h = 0;
	upgrade_status = factory.getCIUpgradeStatus();
	for(var i = KEY_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	for(var i = 0; i <= KEY_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = key_menu[i];
	}
	
	span_contain_list[0].innerHTML = "Do";
	span_contain_list[1].innerHTML = "Do";
	span_contain_list[2].innerHTML = "Do";
//	span_contain_list[3].innerHTML = "NO";
//	span_contain_list[4].innerHTML = "NO";
//	span_contain_list[5].innerHTML = "NO";

		for(var i = 11; i < 14; i++)
	{
		span_contain_list[i].style.display = "block";
		div_contain_list[i + 1].style.display = "block";
		div_contain_list[i + 1].style.background = "#CCC";

	}

	span_contain_list[11].innerHTML = cikey_status[upgrade_status];
	span_contain_list[12].innerHTML = setting.getCICustomCode();
	span_contain_list[13].innerHTML = factory.getCIKeyName();	
	
	div_contain_list[12].innerHTML = "Valid:";
	div_contain_list[13].innerHTML = "Custom Code::";
	div_contain_list[14].innerHTML = "Serial Num:";
	
	div_contain_list[1].style.background = "#FF0";
}
function showPictureRelatedMenu()
{
	energy_save = setting.energySaving;
	fac_dbc_enable = factory.getSettingMenuDBC(7);
	for(var i = PICTURE_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	for(var i = 0; i < PICTURE_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "block";
		div_contain_list[i + 1].style.display = "block";
	}
	//初始化菜单项
	for(var i = 0; i <= PICTURE_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = picture_related_menu[i];
	}
	span_contain_list[0].innerHTML = off_on[setting.dynamicContrast];
	span_contain_list[1].innerHTML = "";
	span_contain_list[2].innerHTML =setting.backLight;
	span_contain_list[3].innerHTML = factory.getSettingMenuDBC(0);
	span_contain_list[4].innerHTML = energySaving[energy_save];
	
	span_contain_list[5].innerHTML = factory.getSettingMenuDBC(1);
	span_contain_list[6].innerHTML = factory.getSettingMenuDBC(2);
	span_contain_list[7].innerHTML = factory.getSettingMenuDBC(3);
	span_contain_list[8].innerHTML = factory.getSettingMenuDBC(4);
	span_contain_list[9].innerHTML = factory.getSettingMenuDBC(5);
	span_contain_list[10].innerHTML = off_on[factory.getSettingMenuDBC(6)];
	span_contain_list[11].innerHTML = off_on[fac_dbc_enable];

	if(energy_save != 0)
	{
		div_contain_list[3].style.background = "#CCC";
	}
	else
	{
		div_contain_list[3].style.background = "#FFF";
	}

	div_contain_list[pic_related_position_h+1].style.background = "#FF0";
} 
function changeDBCToRight(position,maxValue)
{
	switch(position)
	{
		case 0:
			tempValue = setting.dynamicContrast;
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = off_on[tempValue];
			setting.dynamicContrast = tempValue;
			break;
		case 2:
			tempValue = setting.backLight;
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML =tempValue;
			setting.backLight = tempValue;
			break;
		case 3:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(0,tempValue);
			break;
		case 4:
			tempValue = setting.energySaving;
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			
			span_contain_list[position].innerHTML = energySaving[tempValue];
			setting.energySaving = tempValue;
			
			energy_save = tempValue;
			if(energy_save != 0)
			{
				div_contain_list[3].style.background = "#CCC";
			}
			else
			{
				div_contain_list[3].style.background = "#FFF";
			}
			
			span_contain_list[5].innerHTML = factory.getSettingMenuDBC(1);
			span_contain_list[6].innerHTML = factory.getSettingMenuDBC(2);
			span_contain_list[7].innerHTML = factory.getSettingMenuDBC(3);
			span_contain_list[8].innerHTML = factory.getSettingMenuDBC(4);
			span_contain_list[9].innerHTML = factory.getSettingMenuDBC(5);
			break;
		case 5:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(1,tempValue);
			break;
		case 6:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(2,tempValue);
			break;
		case 7:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(3,tempValue);
			break;
		case 8:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(4,tempValue);
			break;
		case 9:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(5,tempValue);
			break;
		case 10:
			tempValue =  factory.getSettingMenuDBC(6);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = off_on[tempValue];
			factory.setSettingMenuDBC(6,tempValue);
			break;
		case 7:
			break;
		case 11:
			fac_dbc_enable++;
			if(fac_dbc_enable > maxValue)
			{
				fac_dbc_enable = 0;
			}
			span_contain_list[position].innerHTML = off_on[fac_dbc_enable];
			factory.setSettingMenuDBC(7,fac_dbc_enable);			
			break;
		default:
			break;
	}
}
function changeDBCToLeft(position,maxValue)
{
	switch(position)
	{
		case 0:
			tempValue = setting.dynamicContrast;
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = off_on[tempValue];
			setting.dynamicContrast = tempValue;
			break;
		case 2:
			tempValue = setting.backLight;
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML =tempValue;
			setting.backLight = tempValue;
			break;
		case 3:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(0,tempValue);
			break;
		case 4:
			tempValue = setting.energySaving;
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = energySaving[tempValue];
			setting.energySaving = tempValue;
			
			energy_save = tempValue;
			if(energy_save != 0)
			{
				div_contain_list[3].style.background = "#CCC";
			}
			else
			{
				div_contain_list[3].style.background = "#FFF";
			}
			
			span_contain_list[5].innerHTML = factory.getSettingMenuDBC(1);
			span_contain_list[6].innerHTML = factory.getSettingMenuDBC(2);
			span_contain_list[7].innerHTML = factory.getSettingMenuDBC(3);
			span_contain_list[8].innerHTML = factory.getSettingMenuDBC(4);
			span_contain_list[9].innerHTML = factory.getSettingMenuDBC(5);
			break;
		case 5:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue--;
			if(tempValue <  0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(1,tempValue);
			break;
		case 6:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue--;
			if(tempValue <  0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(2,tempValue);
			break;
		case 7:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(3,tempValue);
			break;
		case 8:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(4,tempValue);
			break;
		case 9:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(5,tempValue);
			break;
		case 10:
			tempValue =  factory.getSettingMenuDBC(6);
			tempValue--;
			if(tempValue <  0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = off_on[tempValue];
			factory.setSettingMenuDBC(6,tempValue);
			break;
		case 7:
			break;
		case 11:
			fac_dbc_enable--;
			if(fac_dbc_enable < 0)
			{
				fac_dbc_enable = maxValue;
			}
			span_contain_list[position].innerHTML = off_on[fac_dbc_enable];
			factory.setSettingMenuDBC(7,fac_dbc_enable);
			break;
		default:
			break;
	}
}
function showLightSensor()
{
	//初始化菜单项
	for(var i = 0; i <= Light_Sensor_LENGTH; i++)
	{
		div_contain_list[i].innerHTML = lightsensor[i];
	}
	
	span_contain_list[0].innerHTML = factory.getADCMin();
	span_contain_list[1].innerHTML = factory.getADCMax();
	span_contain_list[2].innerHTML = factory.getRatioMin();
	
	for(var i = Light_Sensor_LENGTH; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	
	div_contain_list[lightsensor_position_h + 1].style.background = "#FF0";
}
function changeLightSensorToRight(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue++;
	if(tempValue > maxValue)
	{
		tempValue = 0;
	}
	span_contain_list[position].innerHTML = tempValue;
	switch(position)
	{
		case 0:
			factory.setADCMin(tempValue);
			break;
		case 1:
			factory.setADCMax(tempValue);
			break;
		case 2:
			factory.setRatioMin(tempValue);
			break;
		default:
			break;
	}
}
function changeLightSensorToLeft(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue--;
	if(tempValue < 0)
	{
		tempValue = maxValue;
	}
	span_contain_list[position].innerHTML = tempValue;
	switch(position)
	{
		case 0:
			factory.setADCMin(tempValue);
			break;
		case 1:
			factory.setADCMax(tempValue);
			break;
		case 2:
			factory.setRatioMin(tempValue);
			break;
		default:
			break;
	}
}
function showPresetChannelMenu()
{
	pre_channel_position_h = 0;
	for(var i = PRESET_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	for(var i = 0; i <= PRESET_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = preset_channel[i];
	}
	
	span_contain_list[0].innerHTML = ">";
	span_contain_list[1].innerHTML = ">";
	span_contain_list[2].innerHTML = ">";
	span_contain_list[3].innerHTML = ">";
	span_contain_list[4].innerHTML = ">";

	
	div_contain_list[pre_channel_position_h+1].style.background = "#FF0";
}
function showIPTVMenu()
{
	iptv_position_h = 0;
	for(var i = IPTV_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	for(var i = 0; i <= IPTV_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = iptv_menu[i];
	}
	
	span_contain_list[0].innerHTML = "";
	
	div_contain_list[1].style.background = "#FF0";
}
function showMacAddrMenu()
{
	mac_position_h = 0;
	for(var i = MAC_ADDR_MENU_ITEM_LENGHT; i < FACTORY_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	for(var i = 0; i <MAC_ADDR_MENU_ITEM_LENGHT; i++)
	{
		span_contain_list[i].style.display = "block";
		div_contain_list[i + 1].style.display = "block";
	}

	//初始化菜单项
	for(var i = 0; i <= MAC_ADDR_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = mac_menu[i];
	}
	
	span_contain_list[0].innerHTML = ">";
	span_contain_list[1].innerHTML = "";
	span_contain_list[2].innerHTML = factory.getMacAddr();
	span_contain_list[3].innerHTML = "DO";

	div_contain_list[1].style.background = "#FF0";
}


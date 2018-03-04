//var init_title = ["Product info","SW NO:","SIACP Version:","Date","Project Name:","Panel","Project ID","Mboot NO","MEMC NO","S/N","Chassis","Error Code","USB UPDATE","NonStandard"];
//var init_title = ["Main\\Service Menu","SW NO:","SIACP Version:","Date","Project Name:","Panel","Project ID","MEMC NO","S/N","Chassis","USB UPDATE"];
var init_title = ["Main\\Service Menu","SW NO:","SIACP Version:","Date","Project Name:","Panel","Project ID","Chassis","USB UPDATE","S/N:","ESN:","NETFIX ESN:","Running Time:"];

var off_on = ["Off","On"];
var project_id = ["ServiceMenu\\Project ID","Project ID","Name","Panel","RCU","Region","PSU"];
var project_id_remind = ["Please press MENU for cancel","Please press OK for save"];
var usb_update = ["ServiceMenu\\USB Update","Main Upgrade","MEMC Upgrade","HDCP Upgrade","Mboot Upgrade","CI+ KEY Upgrade","Nvm Upgrade","Nvm Backup","CH List Upgrade","CH List Backup"];
var usb_remind = ["Please inset USB Device","Yes","No"];
var non_standard = ["NonStandard","VIF1","VIF2"];
var vif_1 = ["VIF1","AFEC_D4","AFEC_A0","AFEC_A1","AFEC_D5[2]","D7_LOW_BOUND","D7_HIGH_BOUND","AFEC_D8","AFEC_D9","AFEC_66_Bit76","AFEC_6E_Bit7654","AFEC_6E_Bit3210","AFEC_43","AFEC_44","AFEC_CB"];
var vif_2 = ["VIF2","VIF_CR_KP1","VIF_CR_KI1","VIF_CR_KP2","VIF_CR_KI2","VIF_CR_KP","VIF_CR_KI","VIF_CR_LOCK_THR","VIF_CR_THR","VIF_CR_KP_KI_A..","VIF_DELAY_REDUC..","VIF_OVER_MODUL","VifTop","VIF_VGA_MAXIMUM","GAIN_DISTRIBUTTION_THR"];
var other = ["Do","WAIT","OK","Fail"];

var MAX = 14;
var SERVICE_MENU_ITEM_LENGHT = 11;
var PROJECT_ID_ITEM_LENGHT = 6;
var USB_UPDATE_ITEM_LENGHT = 9;
var NON_STANDARD_ITEM_LENGHT = 2;
var VIF_1_ITEM_LENGHT = 14;
var VIF_2_ITEM_LENGHT = 14;
var form_flag = 0;//确定弹出框的标志变量。0 主菜单，1 选项1菜单...,1.4 选项1中第4项的菜单...
var div_contain_list;//保存html中div容器数组的变量
var span_contain_list;//保存html中span容器数组的变量
var position_h = 0;//焦点位置
var form_position_h = 0;//form_flag 不为零时的焦点位置
var factoryHotKey = 0;
var projectId = 0;
var tempValue = 0;

var factory = top.g_factory;
var setting = top.g_setting;
var factoryInfo = factory.getProductInfo();

document.onkeydown = keyproc;
function keyproc(e)
{
	var key = e.which;
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
		case top.VK_EXIT:
			//menu
			doMenu();
			break;
		case top.VK_LEFT:
			// left
			toLeft();
			break;
		case top.VK_UP:
			// up
			toUp();
			break;
		case top.VK_RIGHT:
			// right
			toRight();
			break;
		case top.VK_DOWN:
			//down
			toDown();
			break;
		case top.VK_ENTER:
			//ok
			doOk();
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
function $(id)
{
	return document.getElementById(id);
}


function doMenu()
{
	if(form_flag == 0)
	{
		if(top.g_factory_mode == 2)
		{
			document.location.href = "../channelPlay.html";
		}
		else
		{
			//document.location.href = "designMenu.html?4";
			document.location.href = "designMenu.html?3";
		}
	}
	else if(form_flag == 1)
	{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		div_contain_list[2].style.background = "#FFF";
		div_contain_list[3].style.background = "#FFF";
		div_contain_list[4].style.background = "#FFF";
		div_contain_list[5].style.background = "#FFF";
		div_contain_list[6].style.background = "#FFF";
		for(var i = PROJECT_ID_ITEM_LENGHT; i < SERVICE_MENU_ITEM_LENGHT; i++)
		{
			span_contain_list[i].style.display = "block";
			div_contain_list[i + 1].style.display = "block";
		}
		
		$('projectIdRemind').style.display = "none";
		//初始化
		showFactory();
		form_flag = 0;
	}
	else if(form_flag == 2)
	{
		$('menu').style.display = "block";
		$('errorCode').style.display = "none";
		form_flag = 0;
	}
	else if(form_flag == 3)
	{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		for(var i = USB_UPDATE_ITEM_LENGHT; i < SERVICE_MENU_ITEM_LENGHT; i++)
		{
			span_contain_list[i].style.display = "block";
			div_contain_list[i + 1].style.display = "block";
		}
		//初始化
		showFactory();
		form_flag = 0;
	}
	else if(form_flag == 4)
	{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		for(var i = NON_STANDARD_ITEM_LENGHT; i < SERVICE_MENU_ITEM_LENGHT; i++)
		{
			span_contain_list[i].style.display = "block";
			div_contain_list[i + 1].style.display = "block";
		}
		//初始化
		showFactory();
		form_flag = 0;
	}
	else if(form_flag == 6)
	{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		form_position_h = 0;
		nonStandard();
		form_flag = 4;
	}
	else if(form_flag == 7)
	{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		form_position_h = 1;
		nonStandard();
		form_flag = 4;
	}
	
}

function vifToLeft(value,maxValue)
{
	var t = value;
	t--;
	if(t < 0)
	{
		t = maxValue;
	}
	return t;
}

function vifToRight(value,maxValue)
{
	var t = value;
	t++;
	if(t > maxValue)
	{
		t = 0;
	}
	return t;
}

function toLeft()
{
	if(form_flag == 0)
	{
		//if(position_h == 12 || position_h == 11 || position_h == 5)
		if( position_h == 11 || position_h == 5)
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h].style.background = "#FF0";
			position_h--;
		}
		/*
		else if(position_h == 10)
		{
			if(factory.errorCode == 0)
			{
				factory.errorCode = 1;
				span_contain_list[10].innerHTML = off_on[1];
			}
			else
			{
				factory.errorCode = 0;
				span_contain_list[10].innerHTML = off_on[0];
			}
		}*/
	}
	else if(form_flag == 1)
	{
		if(form_position_h == 0)
		{
			$('projectIdRemind').style.display = "block";
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
		}
	}
	else if(form_flag == 3)
	{
		toUp();
	}
	else if(form_flag == 4)
	{
		toUp();
	}
	else if(form_flag == 5)
	{
		toUp();
	}
	else if(form_flag == 6)
	{
		switch(form_position_h)
		{
			case 0:
			case 1:
			case 2:
			case 4:
			case 5:
			case 12:
			case top.VK_ENTER:
				tempValue = factory.getServiceMenuVIF1(form_position_h);
				tempValue = vifToLeft(tempValue,255);
				factory.setServiceMenuVIF1(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 3:
			case 7:
				tempValue = factory.getServiceMenuVIF1(form_position_h);
				tempValue = vifToLeft(tempValue,1);
				factory.setServiceMenuVIF1(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 6:
			case 9:
			case 10:
				tempValue = factory.getServiceMenuVIF1(form_position_h);
				tempValue = vifToLeft(tempValue,15);
				factory.setServiceMenuVIF1(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 8:
				tempValue = factory.getServiceMenuVIF1(form_position_h);
				tempValue = vifToLeft(tempValue,3);
				factory.setServiceMenuVIF1(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 11:
				if(factory.getServiceMenuVIF1(form_position_h) == 20)
				{
					tempValue = parseInt(0x74,10);
					factory.setServiceMenuVIF1(form_position_h,tempValue);
					span_contain_list[form_position_h].innerHTML = "0x74";
				}
				else
				{
					tempValue = parseInt(0x14,10);
					factory.setServiceMenuVIF1(form_position_h,tempValue);
					span_contain_list[form_position_h].innerHTML = "0x14";
				}
			default:
				return;
		}
	}
	else if(form_flag == 7)
	{
		switch(form_position_h)
		{
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 9:
			case 11:
				tempValue = factory.getServiceMenuVIF2(form_position_h);
				tempValue = vifToLeft(tempValue,255);
				factory.setServiceMenuVIF2(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 6:
			case 7:
			case 12:
			case top.VK_ENTER:
				tempValue = factory.getServiceMenuVIF2(form_position_h);
				tempValue = vifToLeft(tempValue,65535);
				factory.setServiceMenuVIF2(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
			case 8:
			case 10:
				tempValue = factory.getServiceMenuVIF2(form_position_h);
				tempValue = vifToLeft(tempValue,1);
				factory.setServiceMenuVIF2(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			default:
				return;
		}
	}
}
function toRight()
{
	if(form_flag == 0)
	{
		if(position_h == 11 || position_h == 5)
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h + 2].style.background = "#FF0";
			position_h++;
		}
		/*
		else if(position_h == 12)
		{
			div_contain_list[13].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			position_h = 0;
		}
		else if(position_h == 10)
		{
			if(factory.errorCode == 0)
			{
				factory.errorCode = 1;
				span_contain_list[10].innerHTML = off_on[1];
			}
			else
			{
				factory.errorCode = 0;
				span_contain_list[10].innerHTML = off_on[0];
			}
		}*/
	}
	else if(form_flag == 1)
	{
		if(form_position_h == 0)
		{
			$('projectIdRemind').style.display = "block";
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
		}
	}
	else if(form_flag == 3)
	{
		toDown();
	}
	else if(form_flag == 4)
	{
		toDown();
	}
	else if(form_flag == 5)
	{
		toDown();
	}
	else if(form_flag == 6)
	{
		switch(form_position_h)
		{
			case 0:
			case 1:
			case 2:
			case 4:
			case 5:
			case 12:
			case top.VK_ENTER:
				tempValue = factory.getServiceMenuVIF1(form_position_h);
				tempValue = vifToRight(tempValue,255);
				factory.setServiceMenuVIF1(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 3:
			case 7:
				tempValue = factory.getServiceMenuVIF1(form_position_h);
				tempValue = vifToRight(tempValue,1);
				factory.setServiceMenuVIF1(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 6:
			case 9:
			case 10:
				tempValue = factory.getServiceMenuVIF1(form_position_h);
				tempValue = vifToRight(tempValue,15);
				factory.setServiceMenuVIF1(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 8:
				tempValue = factory.getServiceMenuVIF1(form_position_h);
				tempValue = vifToRight(tempValue,3);
				factory.setServiceMenuVIF1(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 11:
				if(factory.getServiceMenuVIF1(form_position_h) == 20)
				{
					tempValue = parseInt(0x74,10);
					factory.setServiceMenuVIF1(form_position_h,tempValue);
					span_contain_list[form_position_h].innerHTML = "0x74";
				}
				else
				{
					tempValue = parseInt(0x14,10);
					factory.setServiceMenuVIF1(form_position_h,tempValue);
					span_contain_list[form_position_h].innerHTML = "0x14";
				}
			default:
				return;
		}
	}
	else if(form_flag == 7)
	{
		switch(form_position_h)
		{
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 9:
			case 11:
				tempValue = factory.getServiceMenuVIF2(form_position_h);
				tempValue = vifToRight(tempValue,255);
				factory.setServiceMenuVIF2(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
				break;
			case 6:
			case 7:
			case 12:
			case top.VK_ENTER:
				tempValue = factory.getServiceMenuVIF2(form_position_h);
				tempValue = vifToRight(tempValue,65535);
				factory.setServiceMenuVIF2(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
			case 8:
			case 10:
				tempValue = factory.getServiceMenuVIF2(form_position_h);
				tempValue = vifToRight(tempValue,1);
				factory.setServiceMenuVIF2(form_position_h,tempValue);
				span_contain_list[form_position_h].innerHTML = "0x" + tempValue.toString(16);
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
			div_contain_list[SERVICE_MENU_ITEM_LENGHT].style.background = "#FF0";
			position_h = SERVICE_MENU_ITEM_LENGHT-1;
		}
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h].style.background = "#FF0";
			position_h--;
		}
	}
	else if(form_flag == 3)
	{
		if(form_position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[9].style.background = "#FF0";
			form_position_h = 8;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h].style.background = "#FF0";
			form_position_h--;
		}
	}
	else if(form_flag == 4)
	{
		if(form_position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[2].style.background = "#FF0";
			form_position_h = 1;
		}
		else
		{
			div_contain_list[2].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			form_position_h = 0;
		}
	}
	else if(form_flag == 5)
	{
		if(form_position_h == 0)
		{
			$('yes').style.background = "#FFF";
			$('no').style.background = "#09C";
			form_position_h = 1;
		}
		else
		{
			$('yes').style.background = "#09C";
			$('no').style.background = "#FFF";
			form_position_h = 0;
		}
	}
	else if(form_flag == 6 || form_flag == 7)
	{
		if(form_position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[14].style.background = "#FF0";
			form_position_h = 13;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h].style.background = "#FF0";
			form_position_h--;
		}
	}
}
function toDown()
{
	if(form_flag == 0)
	{
		if(position_h == SERVICE_MENU_ITEM_LENGHT-1)
		{
			div_contain_list[SERVICE_MENU_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			position_h = 0;
		}
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h + 2].style.background = "#FF0";
			position_h++;
		}
	}
	else if(form_flag == 3)
	{
		if(form_position_h == 8)
		{
			div_contain_list[9].style.background = "#FFF";
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
	else if(form_flag == 4)
	{
		if(form_position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[2].style.background = "#FF0";
			form_position_h = 1;
		}
		else
		{
			div_contain_list[2].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			form_position_h = 0;
		}
	}
	else if(form_flag == 5)
	{
		if(form_position_h == 0)
		{
			$('yes').style.background = "#FFF";
			$('no').style.background = "#09C";
			form_position_h = 1;
		}
		else
		{
			$('yes').style.background = "#09C";
			$('no').style.background = "#FFF";
			form_position_h = 0;
		}
	}
	else if(form_flag == 6 || form_flag == 7)
	{
		if(form_position_h == 13)
		{
			div_contain_list[14].style.background = "#FFF";
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
}
function doOk()
{
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 5:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				showProjectID();
				form_flag = 1;
				break;
			/*	
			case 10:
				//操作
				if(factory.errorCode == 1)
				{
					$('menu').style.display = "none";
					$('errorCode').style.display = "block";
					form_flag = 2;
				}
				break;*/
			case 7:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				showUsbUpdate();
				form_flag = 3;
				break;
				/*
			case 12:
				///清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				form_position_h = 0;
				nonStandard();
				form_flag = 4;
				break;
				*/
			default:
				break;
		}
	}
	else if(form_flag == 1)
	{
		if(form_position_h == 0)
		{
			$('projectIdRemind').style.display = "none";
			factory.projectId = projectId;
			//更新内容
			span_contain_list[1].innerHTML = factoryInfo.projectName;
			span_contain_list[2].innerHTML = factoryInfo.pannelName;
			span_contain_list[3].innerHTML = factoryInfo.rcuName;
			span_contain_list[4].innerHTML = factoryInfo.region;
			span_contain_list[5].innerHTML = factoryInfo.psuName;
		}
	}
	else if(form_flag == 3)
	{
		switch(form_position_h)
		{
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				factory.usbUpdate(form_position_h)
				break;
			default:
				return;
		}
	}
	else if(form_flag == 4)
	{
		if(form_position_h == 0)
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			for(var i = NON_STANDARD_ITEM_LENGHT; i < VIF_1_ITEM_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			showvif1();
			form_flag = 6;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			for(var i = NON_STANDARD_ITEM_LENGHT; i < VIF_2_ITEM_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			showvif2();
			form_flag = 7;
		}
	}
	else if(form_flag == 5)
	{
		if(form_position_h == 0)
		{
			$('yes').style.background = "#FFF";
		}
		else
		{
			$('no').style.background = "#FFF";
		}
		$('usbRemind').style.display = "none";
		form_position_h = 0;
		span_contain_list[1].style.background = "#FFF";
		form_flag = 3;
	}
}
function doExit()
{
			top.document.getElementById("factoryMenu").style.visibility = "hidden";
			top.main.focus();
			top.document.getElementById("main").src = "../channelPlay.html";
}
function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
		top.stopTimeout();
	div_contain_list = $('menu').getElementsByTagName('div');
	span_contain_list = $('menu').getElementsByTagName('span');
	$('projectIdRemind').innerHTML = "<br>" + project_id_remind[0] + "<br><br>" + project_id_remind[1] + "<br>";
	$('usbRemind').innerHTML = usb_remind[0];
	$('yes').innerHTML = usb_remind[1];
	$('no').innerHTML = usb_remind[2];
	showFactory();
}
function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
function showFactory()
{
	//初始化菜单项
	for(var i = 0; i <= SERVICE_MENU_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = init_title[i];
	}
	//div_contain_list[14].style.display = "none";
	//span_contain_list[13].style.display = "none";
	for(var i = SERVICE_MENU_ITEM_LENGHT; i < MAX; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	factoryInfo = factory.getProductInfo();
	span_contain_list[0].innerHTML = factoryInfo.swName;
	span_contain_list[1].innerHTML = factoryInfo.siacpVer;
	span_contain_list[2].innerHTML = factoryInfo.compileDate
	span_contain_list[3].innerHTML = factoryInfo.projectName;
	span_contain_list[4].innerHTML = factoryInfo.pannelName;
	span_contain_list[5].innerHTML = "";
	//span_contain_list[6].innerHTML = factoryInfo.mbootNo;
	//span_contain_list[6].innerHTML = factoryInfo.memcNo;
	//span_contain_list[7].innerHTML = factoryInfo.sn;
	span_contain_list[6].innerHTML = factoryInfo.chassis;
	//span_contain_list[10].innerHTML = off_on[factory.errorCode];
	span_contain_list[7].innerHTML = "";
	span_contain_list[8].innerHTML = factory.getSnNum();
	span_contain_list[9].innerHTML = factory.getRegisterCode();//factory.getEsnKey(22);
	span_contain_list[10].innerHTML = factory.getEsnKey(1,200);
//    var runningTime = parseInt(setting.getProperty("persist.app.runntingTime", "0"))*20;
//    var year = runningTime/(365*24*60);
//    var year1 = runningTime%(365*24*60);
//    var month = year1/(30*60*24);
//    var month1 = year1%(30*60*24);
//    var day = month1/(60*24);
//    var day1 = month1%(60*24);
//    var hour = day1/60;
//    var minute = day1%60;
//    span_contain_list[11].innerHTML = Math.floor(year)+"Y:"+Math.floor(month)+"M:"+Math.floor(day)+"D:"+Math.floor(hour)+"h:"+minute+"m";
	
	div_contain_list[position_h + 1].style.background = "#FF0";
}
function showProjectID()
{
	form_position_h = 0;
	projectId = factory.projectId;
    projectId_max = factory.getProjectIdMax();
	for(var i = 6; i < MAX; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	for(var i = 0; i <= PROJECT_ID_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = project_id[i];
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
	
	div_contain_list[1].style.background = "#FF0";
}
function showUsbUpdate()
{
	form_position_h = 0;
	for(var i = USB_UPDATE_ITEM_LENGHT; i < MAX; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	for(var i = 0; i <= USB_UPDATE_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = usb_update[i];
	}
	
	span_contain_list[0].innerHTML = "";
	span_contain_list[1].innerHTML = "";
	span_contain_list[2].innerHTML = other[3];
	span_contain_list[3].innerHTML = "";
	span_contain_list[4].innerHTML = other[3];
	span_contain_list[5].innerHTML = "";
	span_contain_list[6].innerHTML = "";
	span_contain_list[7].innerHTML = "";
	span_contain_list[8].innerHTML = "";
	div_contain_list[1].style.background = "#FF0";
}
function nonStandard()
{
	for(var i = NON_STANDARD_ITEM_LENGHT; i < MAX; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	//初始化菜单项
	div_contain_list[0].innerHTML = non_standard[0];
	div_contain_list[1].innerHTML = non_standard[1];
	div_contain_list[2].innerHTML = non_standard[2];
	
	span_contain_list[0].innerHTML = "";
	span_contain_list[1].innerHTML = "";
	div_contain_list[form_position_h + 1].style.background = "#FF0";
}
function showvif1()
{
	form_position_h = 0;
	div_contain_list[0].innerHTML = vif_1[0];
	for(var i = 0; i < VIF_1_ITEM_LENGHT; i++)
	{
		tempValue = factory.getServiceMenuVIF1(i);
		span_contain_list[i].innerHTML = "0x" + tempValue.toString(16);
		div_contain_list[i + 1].innerHTML = vif_1[i + 1];
	}
	div_contain_list[1].style.background = "#FF0";
}
function showvif2()
{
	form_position_h = 0;
	div_contain_list[0].innerHTML = vif_2[0];
	for(var i = 0; i < VIF_2_ITEM_LENGHT; i++)
	{
		tempValue = factory.getServiceMenuVIF2(i);
		span_contain_list[i].innerHTML = "0x" + tempValue.toString(16);
		div_contain_list[i + 1].innerHTML = vif_2[i + 1];
	}
	div_contain_list[1].style.background = "#FF0";
}

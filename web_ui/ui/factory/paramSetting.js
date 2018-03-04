//var init_title = ["Main\\Setting","Picture Curve","Sound Curve","SSC adjust","Overscan Adjust","DBC","Back Light","Adudio amp Setting","DTV Para Setting","LightSensor"];
top.keySetForUI(1);
var init_title = ["Main\\Param Setting","Picture Curve","Sound Curve","SSC adjust","Overscan Adjust","DBC","Back Light Curve","DTV Para Setting","LightSensor","TAP"];

var off_on = ["Off","On"];
var picture_curve = ["Param Setting\\Picture Curve","Source","Curve Setting","Curve0","Curve25","Curve50","Curve75","Curve100"];
var sound_curve = ["Param Setting\\Sound Curve","Source","Curve0","Curve25","Curve50","Curve75","Curve100"];
var ssc_adjust = ["Param Setting\\SSC","DDR Enable","DDR Modulation","DDR Percentage","FRC Enable","FRC Modulation","FRC Percentage","LVDS Enable","LVDS Modulation","LVDS Percentage","OSD Enable","OSD Modulation","OSD Percentage"];
//var overscan_adjust = ["Param Setting\\Overscan Adjust","Horizontal Pos.","Vertical Pos.","MODE","Up Crop","Down Crop","Left Crop","Right Crop"];
var overscan_adjust = ["Param Setting\\Overscan Adjust","source","H Position","H.size","V Position","V.size"];
var para_dbc = ["Param Setting\\DBC","DBC_Mode","APL1","APL1_BL","APL2","BP","K","Print_Enable","Energy saving","DBC Enable"];
var back_light = ["Param Setting\\Back Light Curve","Curve0","Curve25","Curve50","Curve75","Curve100"];
var dtv_para_setting = ["Param Setting\\DTV Para Setting","TCL Network ID","TCL Network Name","Main Frequency(MHz)","TCL Network Name"];
var channel_source = ["ATV","DTV","AV","CMP","HDMI1","HDMI2","HDMI3","HDMI4"];
var picture_curve_setting = ["Brightness","Contrast","Color","Sharpness","Tint"];
var lightsensor = ["Param Setting\\LightSensor","ADC_Min","ADC_Max","Ratio_Min"];
var energySaving = ["Off","Low","High"];
var setting = top.g_setting;

var MAX = 12;
var PARAM_SETTING_LENGHT = 9;
var PICTURE_CURVE_LENGHT = 7;
var SOUND_CURVE_LENGHT = 6;
var SSC_ADJUST_LENGHT = 12;
var OVERSCAN_ADJUST_LENGHT = 5;
var DBC_LENGHT = 9;
var BACK_LIGHT_LENGHT = 5;
var DTV_PARA_SETTING_LENGHT = 4;
var Light_Sensor_LENGTH= 3;

var form_flag = 0;//确定弹出框的标志变量。0 主菜单，1 选项1菜单...,6 选项6菜单，7 选项8菜单
var div_contain_list;//保存html中div容器数组的变量
var span_contain_list;//保存html中span容器数组的变量
var position_h = 0;//焦点位置
var form_position_h = 0;//form_flag 不为零时的焦点位置
var tempValue = 0;
var curveSetting = 0;

var factory = top.g_factory;
var tap_status = 0;
var source_input = 0;
var source_input_mw= 0;

var dbc_enable = 0;

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
	switch(form_flag)
	{
		case 0:
			//document.location.href = "designMenu.html?5";
			document.location.href = "designMenu.html?4";
			break;
		case 1:
			//清除痕迹
			for(var i = PICTURE_CURVE_LENGHT; i < PARAM_SETTING_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			//初始化
			showMain();
			form_flag = 0;
			break;
		case 2:
			//清除痕迹
			for(var i = SOUND_CURVE_LENGHT; i < PARAM_SETTING_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			//初始化
			showMain();
			form_flag = 0;
			break;
		case 3:
			//清除痕迹
			for(var i = SSC_ADJUST_LENGHT; i < PARAM_SETTING_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			//初始化
			showMain();
			form_flag = 0;
			break;
		case 4:
			//清除痕迹
			for(var i = OVERSCAN_ADJUST_LENGHT; i < PARAM_SETTING_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			//初始化
			showMain();
			form_flag = 0;
			break;
		case 5:
			//清除痕迹
			for(var i = DBC_LENGHT; i < PARAM_SETTING_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			//初始化
			showMain();
			form_flag = 0;
			break;
		case 6:
			//清除痕迹
			for(var i = BACK_LIGHT_LENGHT; i < PARAM_SETTING_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			//初始化
			showMain();
			form_flag = 0;
			break;
		case 7:
			//清除痕迹
			for(var i = DTV_PARA_SETTING_LENGHT; i < PARAM_SETTING_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			//初始化
			showMain();
			form_flag = 0;
			break;
		case 8:
			//清除痕迹
			for(var i = Light_Sensor_LENGTH; i < PARAM_SETTING_LENGHT; i++)
			{
				span_contain_list[i].style.display = "block";
				div_contain_list[i + 1].style.display = "block";
			}
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			//初始化
			showMain();
			form_flag = 0;
			break;

		default:
			break;
	}
}

/*
*position指焦点位置，maxValue指属性可取的最大
*/
function changePictureCurveToLeftButton(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);
	tempValue--;
	if(tempValue < 0)
	{
		tempValue = maxValue;
	}
	span_contain_list[position].innerHTML = tempValue;
	factory.setPictureCurve(curveSetting,position - 2,tempValue);
}


/*
*position指焦点位置，maxValue指属性可取的最大
*/
function changeSoundCurveToLeftButton(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue--;
	if(tempValue < 0)
	{
		tempValue = maxValue;
	}
	span_contain_list[position].innerHTML = tempValue;
	factory.setSoundCurve(position - 1,tempValue);
}

/*
*position指焦点位置，maxValue指属性可取的最大值
*/
function changeDBCToLeftButton(position,maxValue)
{
	switch(position)
	{
		case 6:
			tempValue =  factory.getSettingMenuDBC(6);
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = off_on[tempValue];
			factory.setSettingMenuDBC(position,tempValue);
			break;
		case 7:
			tempValue = setting.energySaving;
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = energySaving[tempValue];
			setting.energySaving = tempValue;
			break;
		case 8:
			dbc_enable--;
			if(dbc_enable < 0)
			{
				dbc_enable = maxValue;
			}
			span_contain_list[position].innerHTML = off_on[dbc_enable];
			factory.setSettingMenuDBC(7,dbc_enable);
			break;
		default:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue--;
			if(tempValue < 0)
			{
				tempValue = maxValue;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(position,tempValue);
			break;
	}
}

/*
*position指焦点位置，maxValue指属性可取的最大值
*/
function changeCropToLeftButton(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue--;
	if(tempValue < 0)
	{
		tempValue = maxValue;
	}
	span_contain_list[position].innerHTML = tempValue;
	factory.setOSACrop(position - 1,tempValue);
}

/*
*描述：属性值为数值的元素按左键的操作事件
*position指焦点位置，maxValue指属性可取的最大值,tempValue指属性取值，应当是在函数之前就获取了
*/
function valueToLeftButton(position,maxValue)
{
	tempValue--;
	if(tempValue < 0)
	{
		tempValue = maxValue;
	}
	span_contain_list[position].innerHTML = tempValue;
}

/*
*position指焦点位置，maxValue指属性可取的最大
*/
function changeBackLightCurveToLeftButton(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue--;
	if(tempValue < 0)
	{
		tempValue = maxValue;
	}
	span_contain_list[position].innerHTML = tempValue;
	factory.setBackLightCurve(position,tempValue);
}

function toLeft()
{
	if(form_flag == 0)
	{
		//toUp();
		if(position_h = 9)
		{
			if(tap_status == 0)
				tap_status = 1;
			else
				tap_status = 0;
			//div_contain_list[9].innerHTML = init_title[9];
			factory.pvrOpenStatus = tap_status;
			span_contain_list[8].innerHTML = off_on[tap_status];
			top.showFactoryHotkey();
		}

	}
	else if(form_flag == 1)
	{
		switch(form_position_h)
		{
			case 0:
				//tempValue = factory.curveSource;
				source_input--;
				if(source_input < 0)
				{
					source_input = 7;
				}
				span_contain_list[form_position_h].innerHTML = channel_source[source_input];
				setInputSourceUiRemapMw();
				factory.curveSource = source_input_mw;
				var str = factory.getPictureCurve(curveSetting);
				var num = 0;
				for(var i = 2; i <= 6; i++)
				{
					num = str.indexOf('/');
					if(num > 0)
					{
						span_contain_list[i].innerHTML = parseInt(str.substring(0,num));
						str = str.substring(num + 1);
					}
					else
					{
						span_contain_list[i].innerHTML = parseInt(str);
					}
				}

				break;
			case 1:
				curveSetting--;
				if(curveSetting < 0)
				{
					curveSetting = 4;
				}
				span_contain_list[1].innerHTML = picture_curve_setting[curveSetting];
				factory.picture_curve_setting = curveSetting;
				var str = factory.getPictureCurve(curveSetting);
				var num = 0;
				for(var i = 2; i <= 6; i++)
				{
					num = str.indexOf('/');
					if(num > 0)
					{
						span_contain_list[i].innerHTML = parseInt(str.substring(0,num));
						str = str.substring(num + 1);
					}
					else
					{
						span_contain_list[i].innerHTML = parseInt(str);
					}
				}
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				changePictureCurveToLeftButton(form_position_h,255);
				break;
			default:
				break;
		}
	}
	else if(form_flag == 2)
	{
		switch(form_position_h)
		{
			case 0:
				//tempValue = factory.curveSource;
				source_input--;
				if(source_input < 0)
				{
					source_input = 7;
				}
				span_contain_list[form_position_h].innerHTML = channel_source[source_input];
				setInputSourceUiRemapMw();
				factory.curveSource = source_input_mw;
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				changeSoundCurveToLeftButton(form_position_h,255);
				break;
			default:
				break;
		}
	}
	else if(form_flag == 3)
	{
		switch(form_position_h)
		{
		//ddr
			case 0:
				tempValue = factory.miu0Enable;
				changeSSCToLeftButton(form_position_h,1);
				factory.miu0Enable = tempValue;
				break;
			case 1:
				tempValue = factory.miu0Span;
				changeSSCToLeftButton(form_position_h,40);
				factory.miu0Span = tempValue;
				break;
			case 2:
				tempValue = factory.miu0Step;
				changeSSCToLeftButton(form_position_h,30);
				factory.miu0Step = tempValue;
				break;
		//frc		
			case 3:
				tempValue = factory.frcEnable;
				changeSSCToLeftButton(form_position_h,1);
				factory.frcEnable = tempValue;
				break;
			case 4:
				tempValue = factory.frcSpan;
				changeSSCToLeftButton(form_position_h,40);
				factory.frcSpan = tempValue;
				break;
			case 5:
				tempValue = factory.frcStep;
				changeSSCToLeftButton(form_position_h,30);
				factory.frcStep = tempValue;
				break;
		//lvds		
			case 6:
				tempValue = factory.lvdsEnable;
				changeSSCToLeftButton(form_position_h,1);
				factory.lvdsEnable = tempValue;
				break;
			case 7:
				tempValue = factory.lvdsSpan;
				changeSSCToLeftButton(form_position_h,40);
				factory.lvdsSpan = tempValue;
				break;
			case 8:
				tempValue = factory.lvdsStep;
				changeSSCToLeftButton(form_position_h,30);
				factory.lvdsStep = tempValue;
				break;
		//osd
			case 9:
				tempValue = factory.osdEnable;
				changeSSCToLeftButton(form_position_h,1);
				factory.osdEnable = tempValue;
				break;
			case 10:
				tempValue = factory.osdSpan;
				changeSSCToLeftButton(form_position_h,40);
				factory.osdSpan = tempValue;
				break;
			case 11:
				tempValue = factory.osdStep;
				changeSSCToLeftButton(form_position_h,30);
				factory.osdStep = tempValue;
				break;
			default:
				break;
		}
	}
	else if(form_flag == 4)
	{
		switch(form_position_h)
		{
			case 0:
				//tempValue = factory.overScanAdjustMode;
				source_input--;
				if(source_input < 0)
				{
					source_input = 7;
				}
				setInputSourceUiRemapMw();
				factory.overScanAdjustMode = source_input_mw;
				span_contain_list[form_position_h].innerHTML = channel_source[source_input];
				span_contain_list[1].innerHTML = factory.getOSACrop(0)
				span_contain_list[2].innerHTML = factory.getOSACrop(1);
				span_contain_list[3].innerHTML = factory.getOSACrop(2);
				span_contain_list[4].innerHTML = factory.getOSACrop(3);
				break;
			case 1:
			case 2:
			case 3:
			case 4:
				changeCropToLeftButton(form_position_h,255);
				break;
			default:
				break;
		}
	}
	else if(form_flag == 5)
	{
		switch(form_position_h)
		{
			case 0:
				changeDBCToLeftButton(form_position_h,2);
				break;
			case 1:
			case 3:
				changeDBCToLeftButton(form_position_h,255);
			case 2:
			case 4:
			case 5:
				changeDBCToLeftButton(form_position_h,100);
				break;
			case 6:
				changeDBCToLeftButton(form_position_h,1);
				break;
			case 7:
				changeDBCToLeftButton(form_position_h,2);
				for(var i = 0; i < DBC_LENGHT-3; i++)
				{
					span_contain_list[i].innerHTML = factory.getSettingMenuDBC(i);
				}
				break;	
			case 8:
				changeDBCToLeftButton(form_position_h,1);
				break;
			default:
				return;
		}
	}
	else if(form_flag == 6)
	{
		switch(form_position_h)
		{
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
				changeBackLightCurveToLeftButton(form_position_h,255);
				break;
			default:
				return;
		}
	}
	else if(form_flag == 7)
	{
		switch(form_position_h)
		{
			case 0:
				tempValue = factory.networkId;
				valueToLeftButton(form_position_h,255);
				factory.networkId = tempValue;
				break;
			case 1:
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[1].style.background = "#FF0";
				form_position_h--;
				break;
			case 2:
				tempValue = factory.mainFrequency;
				valueToLeftButton(form_position_h,999);
				factory.mainFrequency = tempValue;
				break;
			case 3:
				if(factory.isTclNetworkName == 0)
				{
					span_contain_list[3].innerHTML = off_on[1];
					factory.isTclNetworkName = 1;
				}
				else
				{
					span_contain_list[3].innerHTML = off_on[0];
					factory.isTclNetworkName = 0;
				}
				break;
		}
	}
	else if(form_flag == 8)
	{
		changeLightSensorToLeftButton(form_position_h,100);
	}
	
}
/*
*position指焦点位置，maxValue指属性可取的最大
*/
function changePictureCurveToRightButton(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue++;
	if(tempValue > maxValue)
	{
		tempValue = 0;
	}
	span_contain_list[position].innerHTML = tempValue;
	factory.setPictureCurve(curveSetting,position - 2,tempValue);
}

/*
*position指焦点位置，maxValue指属性可取的最大
*/
function changeSoundCurveToRightButton(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue++;
	if(tempValue > maxValue)
	{
		tempValue = 0;
	}
	span_contain_list[position].innerHTML = tempValue;
	factory.setSoundCurve(position - 1,tempValue);
}

/*
*描述：属性值为数值的元素按右键的操作事件
*position指焦点位置，maxValue指属性可取的最大值,tempValue指属性取值，应当是在函数之前就获取了
*/
function valueToRightButton(position,maxValue)
{
	tempValue++;
	if(tempValue > maxValue)
	{
		tempValue = 0;
	}
	span_contain_list[position].innerHTML = tempValue;
}

/*
*position指焦点位置，maxValue指属性可取的最大值
*/
function changeCropToRightButton(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue++;
	if(tempValue > maxValue)
	{
		tempValue = 0;
	}
	span_contain_list[position].innerHTML = tempValue;
	factory.setOSACrop(position - 1,tempValue);
}

/*
*position指焦点位置，maxValue指属性可取的最大值
*/
function changeDBCToRightButton(position,maxValue)
{
	switch(position)
	{
		case 6:
			tempValue =  factory.getSettingMenuDBC(6);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = off_on[tempValue];
			factory.setSettingMenuDBC(position,tempValue);
			break;
		case 7:
			tempValue = setting.energySaving;
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = energySaving[tempValue];
			setting.energySaving = tempValue;
			break;
		case 8:
			dbc_enable++;
			if(dbc_enable > maxValue)
			{
				dbc_enable = 0;
			}
			span_contain_list[position].innerHTML = off_on[dbc_enable];
			factory.setSettingMenuDBC(7,dbc_enable);			
			break;
		default:
			tempValue = parseInt(span_contain_list[position].innerHTML);
			tempValue++;
			if(tempValue > maxValue)
			{
				tempValue = 0;
			}
			span_contain_list[position].innerHTML = tempValue;
			factory.setSettingMenuDBC(position,tempValue);
			break;
	}
}

/*
*position指焦点位置，maxValue指属性可取的最大
*/
function changeBackLightCurveToRightButton(position,maxValue)
{
	tempValue = parseInt(span_contain_list[position].innerHTML);;
	tempValue++;
	if(tempValue > maxValue)
	{
		tempValue = 0;
	}
	span_contain_list[position].innerHTML = tempValue;
	factory.setBackLightCurve(position,tempValue);
}

function toRight()
{
	if(form_flag == 0)
	{
		//toDown();
		if(position_h = 9)
		{
			if(tap_status == 0)
				tap_status = 1;
			else
				tap_status = 0;
			//div_contain_list[9].innerHTML = init_title[9];
			factory.pvrOpenStatus = tap_status;
			span_contain_list[8].innerHTML = off_on[tap_status];
			top.showFactoryHotkey();
		}

	}
	else if(form_flag == 1)
	{
		switch(form_position_h)
		{
			case 0:
				//tempValue = factory.curveSource;
				source_input++;
				if(source_input > 7)
				{
					source_input = 0;
				}
				span_contain_list[0].innerHTML = channel_source[source_input];
				setInputSourceUiRemapMw();
				factory.curveSource = source_input_mw;
				var str = factory.getPictureCurve(curveSetting);
				var num = 0;
				for(var i = 2; i <= 6; i++)
				{
					num = str.indexOf('/');
					if(num > 0)
					{
						span_contain_list[i].innerHTML = parseInt(str.substring(0,num));
						str = str.substring(num + 1);
					}
					else
					{
						span_contain_list[i].innerHTML = parseInt(str);
					}
				}
				break;
			case 1:
				//curveSetting = factory.curveSetting;
				curveSetting++;
				if(curveSetting > 4)
				{
					curveSetting = 0;
				}
				span_contain_list[1].innerHTML = picture_curve_setting[curveSetting];
				factory.curveSetting = curveSetting;
				var str = factory.getPictureCurve(curveSetting);
				var num = 0;
				for(var i = 2; i <= 6; i++)
				{
					num = str.indexOf('/');
					if(num > 0)
					{
						span_contain_list[i].innerHTML = parseInt(str.substring(0,num));
						str = str.substring(num + 1);
					}
					else
					{
						span_contain_list[i].innerHTML = parseInt(str);
					}
				}
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				changePictureCurveToRightButton(form_position_h,255);
				break;
			default:
				break;
		}
	}
	else if(form_flag == 2)
	{
		switch(form_position_h)
		{
			case 0:
				//tempValue = factory.curveSource;
				source_input++;
				if(source_input > 7)
				{
					source_input = 0;
				}
				span_contain_list[form_position_h].innerHTML = channel_source[source_input];
				setInputSourceUiRemapMw();
				factory.curveSource = source_input_mw;
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				changeSoundCurveToRightButton(form_position_h,255);
				break;
			default:
				break;
		}
	}
	else if(form_flag == 3)
	{
		switch(form_position_h)
		{
		//ddr
			case 0:
				tempValue = factory.miu0Enable;
				changeSSCToRightButton(form_position_h,1);
				factory.miu0Enable = tempValue;
				break;
			case 1:
				tempValue = factory.miu0Span;
				changeSSCToRightButton(form_position_h,40);
				factory.miu0Span = tempValue;
				break;
			case 2:
				tempValue = factory.miu0Step;
				changeSSCToRightButton(form_position_h,30);
				factory.miu0Step = tempValue;
				break;
		//frc		
			case 3:
				tempValue = factory.frcEnable;
				changeSSCToRightButton(form_position_h,1);
				factory.frcEnable = tempValue;
				break;
			case 4:
				tempValue = factory.frcSpan;
				changeSSCToRightButton(form_position_h,40);
				factory.frcSpan = tempValue;
				break;
			case 5:
				tempValue = factory.frcStep;
				changeSSCToRightButton(form_position_h,30);
				factory.frcStep = tempValue;
				break;
		//lvds
			case 6:
				tempValue = factory.lvdsEnable;
				changeSSCToRightButton(form_position_h,1);
				factory.lvdsEnable = tempValue;
				break;
			case 7:
				tempValue = factory.lvdsSpan;
				changeSSCToRightButton(form_position_h,40);
				factory.lvdsSpan = tempValue;
				break;
			case 8:
				tempValue = factory.lvdsStep;
				changeSSCToRightButton(form_position_h,30);
				factory.lvdsStep = tempValue;
				break;
		//osd
			case 9:
				tempValue = factory.osdEnable;
				changeSSCToRightButton(form_position_h,1);
				factory.osdEnable = tempValue;
				break;
			case 10:
				tempValue = factory.osdSpan;
				changeSSCToRightButton(form_position_h,40);
				factory.osdSpan = tempValue;
				break;
			case 11:
				tempValue = factory.osdStep;
				changeSSCToRightButton(form_position_h,30);
				factory.osdStep = tempValue;
				break;
			default:
				break;
		}
	}
	else if(form_flag == 4)
	{
		switch(form_position_h)
		{
			case 0:
				//tempValue = factory.overScanAdjustMode;
				source_input++;
				if(source_input > 7)
				{
					source_input = 0;
				}
				setInputSourceUiRemapMw();
				factory.overScanAdjustMode = source_input_mw;
				span_contain_list[form_position_h].innerHTML = channel_source[source_input];
				span_contain_list[1].innerHTML = factory.getOSACrop(0)
				span_contain_list[2].innerHTML = factory.getOSACrop(1);
				span_contain_list[3].innerHTML = factory.getOSACrop(2);
				span_contain_list[4].innerHTML = factory.getOSACrop(3);
				break;
			case 1:
			case 2:
			case 3:
			case 4:
				changeCropToRightButton(form_position_h,255);
				break;
			default:
				break;
		}
	}
	else if(form_flag == 5)
	{
		switch(form_position_h)
		{
			case 0:
				changeDBCToRightButton(form_position_h,2);
				break;
			case 1:
			case 3:
				changeDBCToRightButton(form_position_h,255);
				break;
			case 2:
			case 4:
			case 5:
				changeDBCToRightButton(form_position_h,100);
				break;
			case 6:
				changeDBCToRightButton(form_position_h,1);
				break;
			case 7:
				changeDBCToRightButton(form_position_h,2);
				for(var i = 0; i < DBC_LENGHT-3; i++)
				{
					span_contain_list[i].innerHTML = factory.getSettingMenuDBC(i);
				}
				break;
			case 8:
				changeDBCToRightButton(form_position_h,1);
				break;
			default:
				return;
		}
	}
	else if(form_flag == 6)
	{
		switch(form_position_h)
		{
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
				changeBackLightCurveToRightButton(form_position_h,255);
				break;
			default:
				return;
		}
	}
	else if(form_flag == 7)
	{
		switch(form_position_h)
		{
			case 0:
				tempValue = factory.networkId;
				valueToRightButton(form_position_h,255);
				factory.networkId = tempValue;
				break;
			case 1:
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[3].style.background = "#FF0";
				form_position_h++;
				break;
			case 2:
				tempValue = factory.mainFrequency;
				valueToRightButton(form_position_h,999);
				factory.mainFrequency = tempValue;
				break;
			case 3:
				if(factory.isTclNetworkName == 0)
				{
					span_contain_list[3].innerHTML = off_on[1];
					factory.isTclNetworkName = 1;
				}
				else
				{
					span_contain_list[3].innerHTML = off_on[0];
					factory.isTclNetworkName = 0;
				}
				break;
			default:
				return;
		}
	}
	else if(form_flag == 8)
	{
		changeLightSensorToRightButton(form_position_h,100);
	}

}

/*
*position当前焦点位置，maxPostion表示最大
*/
function changeToUpButton(position, maxPostion)
{
	var p = position;
	if(p <= 0)
	{
		div_contain_list[p + 1].style.background = "#FFF";
		div_contain_list[maxPostion + 1].style.background = "#FF0";
		p = maxPostion;
	}
	else
	{
		div_contain_list[p + 1].style.background = "#FFF";
		div_contain_list[p].style.background = "#FF0";
		p--;
	}
	return p;
	
}
function toUp()
{
	switch(form_flag)
	{
		case 0:
			position_h = changeToUpButton(position_h, PARAM_SETTING_LENGHT - 1);
			break;
		case 1:
			form_position_h = changeToUpButton(form_position_h, PICTURE_CURVE_LENGHT - 1);
			break;
		case 2:
			form_position_h = changeToUpButton(form_position_h, SOUND_CURVE_LENGHT - 1);
			break;
		case 3:
			form_position_h = changeToUpButton(form_position_h, SSC_ADJUST_LENGHT - 1);
			break;
		case 4:
			form_position_h = changeToUpButton(form_position_h, OVERSCAN_ADJUST_LENGHT - 1);
			break;
		case 5:
			form_position_h = changeToUpButton(form_position_h, DBC_LENGHT - 1);
			break;
		case 6:
			form_position_h = changeToUpButton(form_position_h, BACK_LIGHT_LENGHT - 1);
			break;
		case 7:
			form_position_h = changeToUpButton(form_position_h, DTV_PARA_SETTING_LENGHT - 1);
			break;
		case 8:
			form_position_h = changeToUpButton(form_position_h, Light_Sensor_LENGTH - 1);
			break;
		default:
			return;
	}
}

/*
*position当前焦点位置，maxPostion表示最大
*/
function changeToDownButton(position, maxPostion)
{
	var p = position;
	if(p >= maxPostion)
	{
		div_contain_list[maxPostion + 1].style.background = "#FFF";
		div_contain_list[1].style.background = "#FF0";
		p = 0;
	}
	else
	{
		div_contain_list[p + 1].style.background = "#FFF";
		div_contain_list[p + 2].style.background = "#FF0";
		p++;
	}
	return p;
	
}

function toDown()
{
	switch(form_flag)
	{
		case 0:
			position_h = changeToDownButton(position_h, PARAM_SETTING_LENGHT - 1);
			break;
		case 1:
			form_position_h = changeToDownButton(form_position_h, PICTURE_CURVE_LENGHT - 1);
			break;
		case 2:
			form_position_h = changeToDownButton(form_position_h, SOUND_CURVE_LENGHT - 1);
			break;
		case 3:
			form_position_h = changeToDownButton(form_position_h, SSC_ADJUST_LENGHT - 1);
			break;
		case 4:
			form_position_h = changeToDownButton(form_position_h, OVERSCAN_ADJUST_LENGHT - 1);
			break;
		case 5:
			form_position_h = changeToDownButton(form_position_h, DBC_LENGHT - 1);
			break;
		case 6:
			form_position_h = changeToDownButton(form_position_h, BACK_LIGHT_LENGHT - 1);
			break;
		case 7:
			form_position_h = changeToDownButton(form_position_h, DTV_PARA_SETTING_LENGHT - 1);
			break;
		case 8:
			form_position_h = changeToDownButton(form_position_h, Light_Sensor_LENGTH - 1);
			break;			
		default:
			return;
	}
}

function doOk()
{
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 0:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				showPictureCurve();
				form_flag = 1;
				break;
			case 1:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				showSoundCurve();
				form_flag = 2;
				break;
			case 2:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				div_contain_list[9].style.display = "block";
				span_contain_list[8].style.display = "block";
				//初始化
				showSSCAdjust();
				form_flag = 3;
				break;
			case 3:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				showOverscanAdjust();
				form_flag = 4;
				break;
			case 4:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				for(var i = PARAM_SETTING_LENGHT; i < DBC_LENGHT; i++)
				{
					div_contain_list[i + 1].style.display = "block";
					span_contain_list[i].style.display = "block";
				}
				//初始化
				showDBC();
				form_flag = 5;
				break;
			case 5:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				showBackLight();
				form_flag = 6;
				break;
			case 6:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				showDTVParaSetting();
				form_flag = 7;
				break;
			case 7:
				//清除痕迹
				div_contain_list[position_h + 1].style.background = "#FFF";
				//初始化
				showLightSensor();
				form_flag = 8;
				break;
			default:
				return;
		}
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
	showMain();
}
function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
function showMain()
{
	//初始化菜单项
	tap_status = factory.pvrOpenStatus;
	div_contain_list[0].innerHTML = init_title[0];
	for(var i = 0; i < PARAM_SETTING_LENGHT; i++)
	{
		div_contain_list[i + 1].innerHTML = init_title[i + 1];
		span_contain_list[i].innerHTML = "";
	}
	div_contain_list[9].innerHTML = init_title[9];
	span_contain_list[8].innerHTML = off_on[tap_status];
	for(var i = PARAM_SETTING_LENGHT; i < MAX; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	
	div_contain_list[position_h + 1].style.background = "#FF0";
}

function showPictureCurve()
{
	form_position_h = 0;
	//初始化菜单项
	for(var i = 0; i <= PICTURE_CURVE_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = picture_curve[i];
	}
	//curveSetting = factory.curveSetting;
	sourceMwRemapToUi(factory.curveSource);
	span_contain_list[0].innerHTML = channel_source[source_input];
	span_contain_list[1].innerHTML = picture_curve_setting[curveSetting];	
	var str = factory.getPictureCurve(curveSetting);
	var num = 0;
	for(var i = 2; i <= 6; i++)
	{
		num = str.indexOf('/');
		if(num > 0)
		{
			span_contain_list[i].innerHTML = parseInt(str.substring(0,num));
			str = str.substring(num + 1);
		}
		else
		{
			span_contain_list[i].innerHTML = parseInt(str);
		}
	}
	
	for(var i = PICTURE_CURVE_LENGHT; i < PARAM_SETTING_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	div_contain_list[form_position_h + 1].style.background = "#FF0";
}

function showSoundCurve()
{
	form_position_h = 0;
	//初始化菜单项
	for(var i = 0; i <= SOUND_CURVE_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = sound_curve[i];
	}
	sourceMwRemapToUi(factory.curveSource);
	span_contain_list[0].innerHTML = channel_source[source_input];
	
	var str = factory.getSoundCurve();
	var num = 0;
	for(var i = 1; i <= SOUND_CURVE_LENGHT; i++)
	{
		num = str.indexOf('/');
		if(num > 0)
		{
			span_contain_list[i].innerHTML = parseInt(str.substring(0,num));
			str = str.substring(num + 1);
		}
		else
		{
			span_contain_list[i].innerHTML = parseInt(str);
		}
	}

	for(var i = SOUND_CURVE_LENGHT; i < PARAM_SETTING_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}

	div_contain_list[form_position_h + 1].style.background = "#FF0";
}

function showSSCAdjust()
{
	form_position_h = 0;
	//初始化菜单项
	for(var i = 0; i <= SSC_ADJUST_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = ssc_adjust[i];
	}
	//div_contain_list[9].style.display = "block";
	//span_contain_list[8].style.display = "block";
	for(var i = 0; i < SSC_ADJUST_LENGHT; i++)
	{
		div_contain_list[i+1].style.display = "block";
		span_contain_list[i].style.display = "block";
	}
//ddr
	span_contain_list[0].innerHTML = off_on[factory.miu0Enable];
	span_contain_list[1].innerHTML = factory.miu0Span+"KHz";
	span_contain_list[2].innerHTML = factory.miu0Step+"%";
//frc	
	span_contain_list[3].innerHTML = off_on[factory.frcEnable];
	span_contain_list[4].innerHTML = factory.frcSpan+"KHz";
	span_contain_list[5].innerHTML = factory.frcStep+"%";
//lvds	
	span_contain_list[6].innerHTML = off_on[factory.lvdsEnable];
	span_contain_list[7].innerHTML = factory.lvdsSpan+"KHz";
	span_contain_list[8].innerHTML = factory.lvdsStep+"%";
//osd
	span_contain_list[9].innerHTML = off_on[factory.osdEnable];
	span_contain_list[10].innerHTML = factory.osdSpan+"KHz";
	span_contain_list[11].innerHTML = factory.osdStep+"%";
	
	div_contain_list[form_position_h + 1].style.background = "#FF0";
}
function changeSSCToRightButton(position,maxValue)
{
	valueToRightButton(position,maxValue);
	if((position == 1)||(position == 4)||(position == 7)||(position == 10))
		span_contain_list[position].innerHTML = tempValue + "KHz";
	else if((position == 2)||(position == 5)||(position == 8)||(position == 11))
		span_contain_list[position].innerHTML = tempValue + "%";
	else if((position == 0)||(position == 3)||(position == 6)||(position == 9))
		span_contain_list[position].innerHTML = off_on[tempValue];
}
function changeSSCToLeftButton(position,maxValue)
{
		valueToLeftButton(position,maxValue);
	if((position == 1)||(position == 4)||(position == 7)||(position == 10))
		span_contain_list[position].innerHTML = tempValue + "KHz";
	else if((position == 2)||(position == 5)||(position == 8)||(position == 11))
		span_contain_list[position].innerHTML = tempValue + "%";
	else if((position == 0)||(position == 3)||(position == 6)||(position == 9))
		span_contain_list[position].innerHTML = off_on[tempValue];

}

function showOverscanAdjust()
{
	form_position_h = 0;
	//初始化菜单项
	for(var i = 0; i <= OVERSCAN_ADJUST_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = overscan_adjust[i];
	}
	sourceMwRemapToUi(factory.overScanAdjustMode);
	span_contain_list[0].innerHTML = channel_source[source_input];
	span_contain_list[1].innerHTML = factory.getOSACrop(0)
	span_contain_list[2].innerHTML = factory.getOSACrop(1);
	span_contain_list[3].innerHTML = factory.getOSACrop(2);
	span_contain_list[4].innerHTML = factory.getOSACrop(3);
	
	
	for(var i = OVERSCAN_ADJUST_LENGHT; i < PARAM_SETTING_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}

	div_contain_list[form_position_h + 1].style.background = "#FF0";
}

function showDBC()
{
	form_position_h = 0;
	dbc_enable = factory.getSettingMenuDBC(7);
	//初始化菜单项
	for(var i = 0; i <= DBC_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = para_dbc[i];
	}
	for(var i = 0; i < DBC_LENGHT-2; i++)
	{
			span_contain_list[i].innerHTML = factory.getSettingMenuDBC(i);
	}
	span_contain_list[6].innerHTML = off_on[ factory.getSettingMenuDBC(6)];
	span_contain_list[7].innerHTML = energySaving[setting.energySaving];
	span_contain_list[8].innerHTML = off_on[dbc_enable];

	for(var i = DBC_LENGHT; i < PARAM_SETTING_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	
	div_contain_list[form_position_h + 1].style.background = "#FF0";
}

function showBackLight()
{
	form_position_h = 0;
	//初始化菜单项
	for(var i = 0; i <= BACK_LIGHT_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = back_light[i];
	}
	var str = factory.getBackLightCurve();
	var num = 0;
	for(var i = 0; i < BACK_LIGHT_LENGHT; i++)
	{
		num = str.indexOf('/');
		if(num > 0)
		{
			span_contain_list[i].innerHTML = parseInt(str.substring(0,num));
			str = str.substring(num + 1);
		}
		else
		{
			span_contain_list[i].innerHTML = parseInt(str);
		}
	}
	//多余菜单项隐藏
	for(var i = BACK_LIGHT_LENGHT; i < PARAM_SETTING_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	
	div_contain_list[form_position_h + 1].style.background = "#FF0";
}

function showDTVParaSetting()
{
	form_position_h = 0;
	//初始化菜单项
	for(var i = 0; i <= DTV_PARA_SETTING_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = dtv_para_setting[i];
	}
	
	for(var i = DTV_PARA_SETTING_LENGHT; i < PARAM_SETTING_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	
	span_contain_list[0].innerHTML = factory.networkId;
	span_contain_list[1].innerHTML = factory.tclNetworkName;
	span_contain_list[2].innerHTML = factory.mainFrequency;
	span_contain_list[3].innerHTML = off_on[factory.isTclNetworkName];
	div_contain_list[form_position_h + 1].style.background = "#FF0";
}
function showLightSensor()
{
	form_position_h = 0;
	//初始化菜单项
	for(var i = 0; i <= Light_Sensor_LENGTH; i++)
	{
		div_contain_list[i].innerHTML = lightsensor[i];
	}
	
	span_contain_list[0].innerHTML = factory.getADCMin();
	span_contain_list[1].innerHTML = factory.getADCMax();
	span_contain_list[2].innerHTML = factory.getRatioMin();
	
	for(var i = Light_Sensor_LENGTH; i < PARAM_SETTING_LENGHT; i++)
	{
		div_contain_list[i + 1].style.display = "none";
		span_contain_list[i].style.display = "none";
	}
	
	div_contain_list[form_position_h + 1].style.background = "#FF0";
}
/*
*positionÖ¸½¹µãÎ»ÖÃ£¬maxValueÖ¸ÊôÐÔ¿ÉÈ¡µÄ×î´óÖµ
*/
function changeLightSensorToRightButton(position,maxValue)
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
/*
*positionÖ¸½¹µãÎ»ÖÃ£¬maxValueÖ¸ÊôÐÔ¿ÉÈ¡µÄ×î´óÖµ
*/
function changeLightSensorToLeftButton(position,maxValue)
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
function sourceMwRemapToUi(source)
{
	switch(source)
	{
		case 0:
			source_input = 0;
			break;
		case 1:
			source_input = 1;
			break;
		case 2:
			source_input = 2;
			break;
		case 4:
			source_input = 3;
			break;
		/*case 5:
			powerSignalIndex = 3;
			break;*/
		case 6:
			source_input = 4;
			break;
		case 7:
			source_input = 5;
			break;
		case 8:
			source_input = 6;
			break;
		case 9:
			source_input = 7;
			break;
		default:
			break;
	
	}
}
function setInputSourceUiRemapMw()
{
	//top.g_channel.testLog("@@@presss right powerSignalIndex="+powerSignalIndex);
	switch(source_input)
	{
		case 0:
			source_input_mw = 0;
			break;
		case 1:
			source_input_mw = 1;
			break;
		case 2:
			source_input_mw = 2;
			break;
		case 3:
			source_input_mw = 4;
			break;
		/*case 3:
			factory.hotelPowerSignal = 5;
			break;*/
		case 4:
			source_input_mw = 6;
			break;
		case 5:
			source_input_mw = 7;
			break;
		case 6:
			source_input_mw = 8;
			break;
		case 7:
			source_input_mw = 9;
			break;
		default:
			break;
	}
}

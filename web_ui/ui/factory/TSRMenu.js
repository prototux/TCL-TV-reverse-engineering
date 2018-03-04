//var init_title = ["Main\\Other","QMAP QDJUST","WHITE PATTERN","NVM Reset All","Got UserID","UseTestHost","Hidev","SSCOM Debug","DTV","Reset Shop","BGM","WSS & ATF"];
top.keySetForUI(1);
var init_title = ["Main\\OtherMenu","TSR"];

var white_pattern = ["Off","White","Red","Green","Blue","Black","Yellow","Gray","Pink"];
var other = ["Do","WAIT","OK","Fail"];
var off_on = ["Off","On"];
var other_hidev = ["Off","1","2","3"];
var qmap_adjust = ["QMAP ADJUST"];
var start_stop_flag = 0;
var start_stop = ["Start","Stop"];

var OTHER_SETTING_ITEM_LENGHT = 1;
var QMAP_ADJUST_ITEM_LENGHT = 14;
var form_flag = 0;//确定弹出框的标志变量。0 主菜单，1 选项1菜单...,1.4 选项1中第4项的菜单...
var div_contain_list;//保存html中div容器数组的变量
var span_contain_list;//保存html中span容器数组的变量
var position_h = 0;//焦点位置
var form_position_h = 0;//form_flag 不为零时的焦点位置
var whitePattern = 0;
var hidev = 0;
var UserID = 0;
var BGM_status = 0;
var WSS_ATF_status = 0;
var factory = top.g_factory;
var multimedia = top.g_media;
var usbPath = "";
var usbList = "";
var uartStatus = 0;

document.onkeydown = keyproc;
function keyproc(e)
{
	var key = e.which;
	//快捷键
	switch(key)
	{
		case top.VK_POWER://power
			factory.stopPvr();//此处只是停止TS录制，未处理UI显示状态
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
			factory.stopPvr();//此处只是停止TS录制，未处理UI显示状态
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
            factory.stopPvr();//此处只是停止TS录制，未处理UI显示状态
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
    window.location.href = "../channelPlay.html";
}
function toLeft()
{

}
function toRight()
{

}
function toUp()
{

}
function toDown()
{

}
function doOk()
{
	if(form_flag == 0)
	{
        if(position_h == 0)
		{
			if(factory.getUsbDeviceStatus())
			{
				if(start_stop_flag == 0)
				{
					top.g_channel.testLog("@@@@@@@coming in start pvr");
					factory.startPvr();
					top.g_channel.testLog("@@@@@@@coming out start pvr");
					start_stop_flag = 1;
					span_contain_list[position_h].innerHTML = start_stop[start_stop_flag];
				}
				else
				{
					top.g_channel.testLog("@@@@@@@coming in stop pvr");
					factory.stopPvr();
					top.g_channel.testLog("@@@@@@@coming out stop pvr");
					start_stop_flag = 0;
					span_contain_list[position_h].innerHTML = start_stop[start_stop_flag];
				}
			}
			else
			{
					span_contain_list[position_h].innerHTML = "Please Insert USB";
					setTimeout(
					function(){
					span_contain_list[position_h].innerHTML = start_stop[0];
					},
					1000);
			}
		}
	}
	else
	{
		return;
	}
}
function doExit()
{
    window.location.href = "../channelPlay.html";
}
function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
		top.stopTimeout();
	div_contain_list = $('menu').getElementsByTagName('div');
	span_contain_list = $('menu').getElementsByTagName('span');
	showOther();

	//以下获取usb路径，拿到esticker.xml路径
	if (multimedia.deviceStatus()) {
		usbList = multimedia.getDiskListInfo();
	}
	if (usbList == "" || usbList == null)
	{
		return;
	}

}
function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
function showOther()
{
	position_h = 0;
	form_flag = 0;
	//初始化菜单项
	for(var i = 0; i <= OTHER_SETTING_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = init_title[i];
	}

	for(var i = OTHER_SETTING_ITEM_LENGHT; i < QMAP_ADJUST_ITEM_LENGHT; i++)
	{

		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	span_contain_list[0].innerHTML = start_stop[start_stop_flag];

	div_contain_list[position_h + 1].style.background = "#FF0";
}

function showAmapAdjust()
{
	//初始化菜单项
	div_contain_list[0].innerHTML = qmap_adjust[0];
	for(var i = 0; i < QMAP_ADJUST_ITEM_LENGHT; i++)
	{
		span_contain_list[i].innerHTML = "";
		div_contain_list[i + 1].innerHTML = "";
	}

	div_contain_list[1].style.background = "#FF0";
}


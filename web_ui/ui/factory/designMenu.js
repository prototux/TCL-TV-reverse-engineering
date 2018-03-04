//var init_title = ["Main\\Design","Design mode hotkey","1--Factory Menu","2--SHOP Setting","3--Other Setting","4--Service Menu","5--Param Setting","6--Hotel Menu","SV NO:","Project Name:","SIACP Version:","Date:"];
top.keySetForUI(1);
var init_title = ["Main Menu\\","Design mode hotkey","1--Factory Menu","2--Other Setting","3--Service Menu","4--Param Setting","5--Hotel Menu","SW NO:","Project Name:","SIACP Version:","Date:"];

var off_on = ["Off","On"];
var moth_string = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var DESIGN_ITEM_LENGHT = 10;
var form_flag = 0;//确定弹出框的标志变量。0 主菜单，1 选项1菜单...,1.4 选项1中第4项的菜单...
var div_contain_list;//保存html中div容器数组的变量
var span_contain_list;//保存html中span容器数组的变量
var position_h = 0;//焦点位置
var designHotKey = top.g_factory_designModeHotkey;
var factoryHotKey = top.g_factory_hotkey;
var factoryInfo;

var factory = top.g_factory;
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
		case 27:
			//menu
			top.g_factory_designModeHotkey = designHotKey;
			top.g_factory_hotkey = factoryHotKey;
			top.showFactoryHotkey();//显示factory hotkey弹出框
			window.location.href  = "../channelPlay.html";
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
			top.g_factory_designModeHotkey = designHotKey;
			top.g_factory_hotkey = factoryHotKey;
			top.showFactoryHotkey();//显示factory hotkey弹出框
			window.location.href = "../channelPlay.html";
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
function toLeft()
{
	if(position_h == 0)
	{
		if(designHotKey == 0)
		{
			designHotKey = 1;
		}
		else
		{
			designHotKey = 0;
		}
		top.g_factory_designModeHotkey = designHotKey;
		top.g_factory_hotkey = factoryHotKey;
		top.showFactoryHotkey();
		span_contain_list[0].innerHTML = off_on[designHotKey];
	}
	else
	{
		div_contain_list[position_h + 1].style.background = "#FFF";
		div_contain_list[position_h].style.background = "#FF0";
		position_h--;
	}
}
function toRight()
{
	if(position_h == 0)
	{
		if(designHotKey == 0)
		{
			designHotKey = 1;
		}
		else
		{
			designHotKey = 0;
		}
		top.g_factory_designModeHotkey = designHotKey;
		top.g_factory_hotkey = factoryHotKey;
		top.showFactoryHotkey();
		span_contain_list[0].innerHTML = off_on[designHotKey];
	}
	else if(position_h == 5)
	{
		div_contain_list[position_h + 1].style.background = "#FFF";
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
function toUp()
{
	if(position_h == 0)
	{
		div_contain_list[1].style.background = "#FFF";
		div_contain_list[6].style.background = "#FF0";
		position_h = 5;
	}
	else
	{
		div_contain_list[position_h + 1].style.background = "#FFF";
		div_contain_list[position_h].style.background = "#FF0";
		position_h--;
	}
}
function toDown()
{
	if(position_h == 5)
	{
		div_contain_list[6].style.background = "#FFF";
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
function doOk()
{
	switch(position_h)
	{
		case 1:
			window.location.href = "factoryMenu.html";
			break;
		//case 2:
		//	window.location.href = "shopSetting.html";
		//	break;
		case 2:
			window.location.href = "otherSetting.html";
			break;
		case 3:
			window.location.href = "serviceMenu.html";
			break;
		case 4:
			window.location.href = "paramSetting.html";
			break;
		case 5:
			window.location.href = "hotelMenu.html";
			break;
		default:
			break;
	}
}
function doNum(num)
{
	if(num >= 1 && num <= 5)
	{
		div_contain_list[position_h + 1].style.background = "#FFF";
		div_contain_list[num + 1].style.background = "#FF0";
		position_h = num;
	}
	else 
	{
		return;
	}
}
function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
		top.stopTimeout();
	top.showBackground(0);
	factoryInfo = factory.getProductInfo();
	var str = window.location.search;
	if(str != null && str != "" && str != undefined)
	{
		position_h = parseInt(str.substring(str.indexOf("?") + 1,str.indexOf("?") + 2));
	}
	
	if(str.indexOf("&") > 0)
	{
		factoryHotKey = parseInt(str.substring(str.indexOf("&") + 1));
	}
	div_contain_list = $('menu').getElementsByTagName('div');
	span_contain_list = $('menu').getElementsByTagName('span');
	//初始化菜单项
	for(var i = 0; i <= DESIGN_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = init_title[i];
	}
	for(var i = DESIGN_ITEM_LENGHT; i < 11; i++)
	{
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	span_contain_list[0].innerHTML = off_on[designHotKey];
	span_contain_list[6].innerHTML = factoryInfo.swName;
	span_contain_list[7].innerHTML = factoryInfo.projectName;
	span_contain_list[8].innerHTML = factoryInfo.siacpVer;
	span_contain_list[9].innerHTML = factoryInfo.compileDate;
	div_contain_list[7].style.background = "#CCC";
	div_contain_list[8].style.background = "#CCC";
	div_contain_list[9].style.background = "#CCC";
	div_contain_list[10].style.background = "#CCC";
	div_contain_list[position_h + 1].style.background = "#FF0";
}

function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
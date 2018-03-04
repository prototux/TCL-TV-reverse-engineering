top.keySetForUI(1);
var init_title = ["Main\Shop","Volume","Picture Mode","Sound Mode","OSD Language","Preset CH","Color Temp","Audio Scene","Sale Mode","Color SYS","Sound SYS"];
var picture_mode = ["Stantard","Studio","Movie","Personal","Dynamic"];
var sound_mode = ["Music","Movie","News","Standard","User"];
var osd_language = ["English","French","German","Spanish"];
var color_temp = ["Cold","Stantard","Warm"];
var audio_scene = ["Desk Top Mode","Hangup Mode"];
var sale_mode = ["Shop Mode","Home Mode"];
var color_sys = ["Auto","PAL","NTSC","SECAM"];
var sound_sys = ["DK","BG","I","M"];

var SHOP_ITEM_LENGHT = 10;
var div_contain_list;//保存html中div容器数组的变量
var span_contain_list;//保存html中span容器数组的变量
var position_h = 0;//焦点位置
var pictureMode = 0;
var soundMode = 0;
var osdLanguage = 0;
var colorTemp = 0;
var audioScene = 0;
var saleMode = 0;
var colorSys = 0;
var soundSys = 0;
var tempValue = 0;

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
	document.location.href = "designMenu.html?2";
}
function toLeft()
{
	switch(position_h)
	{
		case 0:
			tempValue = factory.shopVolume - 1;
			if(tempValue < 0)
			{
				tempValue = 100;
			}
			factory.shopVolume = tempValue;
			span_contain_list[0].innerHTML = tempValue;
			break;
		case 1:
			pictureMode--;
			if(pictureMode < 0)
			{
				pictureMode = 4;
			}
			factory.shopPicMode = pictureMode;
			span_contain_list[1].innerHTML = picture_mode[pictureMode];
			break;
		case 2:
			soundMode--;
			if(soundMode < 0)
			{
				soundMode = 4;
			}
			factory.shopSoundMode = soundMode;
			span_contain_list[2].innerHTML = sound_mode[soundMode];
			break;
		case 3:
			osdLanguage--;
			if(osdLanguage < 0)
			{
				osdLanguage = 3;
			}
			factory.shopOsdLanguage = osdLanguage;
			span_contain_list[3].innerHTML = osd_language[osdLanguage];
			break;
		case 4:
			tempValue = factory.shopPresetCH - 1;
			if(tempValue < 0)
			{
				tempValue = 100;
			}
			factory.shopPresetCH = tempValue;
			span_contain_list[4].innerHTML = tempValue;
			break;
		case 5:
			colorTemp--;
			if(colorTemp < 0)
			{
				colorTemp = 2;
			}
			factory.shopColorTemp = colorTemp;
			span_contain_list[5].innerHTML = color_temp[colorTemp];
			break;
		case 6:
			audioScene--;
			if(audioScene < 0)
			{
				audioScene = 1;
			}
			factory.shopAudioScen = audioScene;
			span_contain_list[6].innerHTML = audio_scene[audioScene];
			break;
		case 7:
			saleMode--;
			if(saleMode < 0)
			{
				saleMode = 1;
			}
			factory.shopSaleMode = saleMode;
			span_contain_list[7].innerHTML = sale_mode[saleMode];
			break;
		case 8:
			colorSys--;
			if(colorSys < 0)
			{
				colorSys = 3;
			}
			factory.shopColorSys = colorSys;
			span_contain_list[8].innerHTML = color_sys[colorSys];
			break;
		case 9:
			soundSys--;
			if(soundSys < 0)
			{
				soundSys = 3;
			}
			factory.shopSoundSys = soundSys;
			span_contain_list[9].innerHTML = sound_sys[soundSys];
			break;
		default:
			break;
	}
}
function toRight()
{
	switch(position_h)
	{
		case 0:
			tempValue = factory.shopVolume + 1;
			if(tempValue > 100)
			{
				tempValue = 0;
			}
			factory.shopVolume = tempValue;
			span_contain_list[0].innerHTML = tempValue;
			break;
		case 1:
			pictureMode++;
			if(pictureMode > 4)
			{
				pictureMode = 0;
			}
			factory.shopPicMode = pictureMode;
			span_contain_list[1].innerHTML = picture_mode[pictureMode];
			break;
		case 2:
			soundMode++;
			if(soundMode > 4)
			{
				soundMode = 0;
			}
			factory.shopSoundMode = soundMode;
			span_contain_list[2].innerHTML = sound_mode[soundMode];
			break;
		case 3:
			osdLanguage++;
			if(osdLanguage > 3)
			{
				osdLanguage = 0;
			}
			factory.shopOsdLanguage = osdLanguage;
			span_contain_list[3].innerHTML = osd_language[osdLanguage];
			break;
		case 4:
			tempValue = factory.shopPresetCH + 1;
			if(tempValue > 100)
			{
				tempValue = 0;
			}
			factory.shopPresetCH = tempValue;
			span_contain_list[4].innerHTML = tempValue;
			break;
		case 5:
			colorTemp++;
			if(colorTemp > 2)
			{
				colorTemp = 0;
			}
			factory.shopColorTemp = colorTemp;
			span_contain_list[5].innerHTML = color_temp[colorTemp];
			break;
		case 6:
			audioScene++;
			if(audioScene > 1)
			{
				audioScene = 0;
			}
			factory.shopAudioScen = audioScene;
			span_contain_list[6].innerHTML = audio_scene[audioScene];
			break;
		case 7:
			saleMode++;
			if(saleMode > 1)
			{
				saleMode = 0;
			}
			factory.shopSaleMode = saleMode;
			span_contain_list[7].innerHTML = sale_mode[saleMode];
			break;
		case 8:
			colorSys++;
			if(colorSys > 3)
			{
				colorSys = 0;
			}
			factory.shopColorSys = colorSys;
			span_contain_list[8].innerHTML = color_sys[colorSys];
			break;
		case 9:
			soundSys++;
			if(soundSys > 3)
			{
				soundSys = 0;
			}
			factory.shopSoundSys = soundSys;
			span_contain_list[9].innerHTML = sound_sys[soundSys];
			break;
		default:
			break;
	}	
}
function toUp()
{
	if(position_h == 0)
	{
		div_contain_list[1].style.background = "#FFF";
		div_contain_list[10].style.background = "#FF0";
		position_h = 9;
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
	if(position_h == 9)
	{
		div_contain_list[10].style.background = "#FFF";
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
	
	//初始化菜单项
	for(var i = 0; i <= SHOP_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = init_title[i];
	}
	
	
	pictureMode = factory.shopPicMode;
	soundMode = factory.shopSoundMode;
	osdLanguage = factory.shopOsdLanguage;
	colorTemp = factory.shopColorTemp;
	audioScene = factory.shopAudioScen;
	saleMode = factory.shopSaleMode;
	colorSys = factory.shopColorSys;
	soundSys = factory.shopSoundSys;
	
	span_contain_list[0].innerHTML = factory.shopVolume;
	span_contain_list[1].innerHTML = picture_mode[pictureMode];
	span_contain_list[2].innerHTML = sound_mode[soundMode];
	span_contain_list[3].innerHTML = osd_language[osdLanguage];
	span_contain_list[4].innerHTML = factory.shopPresetCH;
	span_contain_list[5].innerHTML = color_temp[colorTemp];
	span_contain_list[6].innerHTML = audio_scene[audioScene];
	span_contain_list[7].innerHTML = sale_mode[saleMode];
	span_contain_list[8].innerHTML = color_sys[colorSys];
	span_contain_list[9].innerHTML = sound_sys[soundSys];
	
	div_contain_list[position_h + 1].style.background = "#FF0";
}
function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
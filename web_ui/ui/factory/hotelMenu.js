top.keySetForUI(1);
var init_title = ["Main\\Hotel Menu","Hotel Enable","Display Message","CH Lock","Max VOL","Auto Set","PIC Preset","SND Preset","Power VOL","Power Signal","Power CH","Key Lock","Power On Mode"];
var off_on = ["Off","On"];
var picture_mode = ["Standard","Dynamic","Natural","Movie","Personal"];
var sound_mode = ["Music","Movie","Voice","Standard","Personal"];
var power_signal = ["TV","AV","CMP",/*"VGA",*/"HDMI1","HDMI2","HDMI3","HDMI4"];
var power_on_mode = ["Boot","Standby","Last Sta"];

var bottom_words = ["Clear","Delete"];
//var HOTEL_ITEM_LENGHT = 13;
var HOTEL_ITEM_LENGHT = 14;

//var HOTEL_PAGE_TWO_ITEM_LENGTH = 8;

var div_contain_list;//保存html中div容器数组的变量
var span_contain_list;//保存html中span容器数组的变量
var position_h = 0;//焦点位置
var hotelEnable = 0;
var maxVol = 0;
var autoSet = 0;
var pictureMode = 0;
var soundMode = 0;
var powerVol = 0;
var tempValue = 0;
var channelList;

var powerLogo = 0;
var powerOnMode = 0;

var powerChannelIndex=0;
var factory = top.g_factory;
var setting = top.g_setting;
var powerSignal=factory.hotelPowerSignal;
var powerSignalIndex = 0;
var i=0;

//var prePowerOnMode=0;
//var back;
var focusFlag;
//var hotelMenuPage = 0;
var char_table  = [['0'," "],
				  ['1','+','-',',','.'],
				  ['2','a','b','c','A','B','C'],
				  ['3','d','e','f','D','E','F'],
				  ['4','g','h','i','G','H','I'],
				  ['5','j','k','l','J','K','L'],
				  ['6','m','n','o','M','N','O'],
				  ['7','p','q','r','s','P','Q','R','S'],
				  ['8','t','u','v','T','U','V'],
				  ['9','w','x','y','z','W','X','Y','Z'],				
				  ];
var firstLineKeyCount           = 0;//按键连续按下的次数
var firstLineOldKeyCode         = 0;//上一次的keycode 与本次进行对
var firstLinePressKeyFlag = 0;
var firstLineTextString = "";
var firstPositionEditH = 0;
var firstLineInputFlag = 0;
var firstCurPos = 0;
var firstSpaceCount = 0;
var firstEditLine=[];
var firstLineDelFlag = 1;
var firstInputChar;

var secondLineKeyCount = 0;
var secondLineOldKeyCode = 0;
var secondLinePressKeyFlag = 0;
var secondLineTextString = "";
var secondPositionEditH = 0;
var secondLineInputFlag = 0;
var secondCurPos = 0;
var secondEditLine=[];
var secondLineDelFlag = 1;
var secondInputChar;

var inputValue;
var factoryPowerOnMode;

document.onkeydown = keyproc;
function keyproc(e)
{
	var keycode = e.which;
	switch(keycode)
	{
		case top.VK_POWER:
			top.keyDownProcess(e);
			if(position_h == 2)
			{
				firstSaveLastInput();
			}
			else if(position_h == 3)
			{
				secondSaveLastInput();
			}
			return;
		case top.VK_MENU:
		case 27:
			doMenu();
			break;
		case top.VK_LEFT:
			toLeft();
			break;
		case top.VK_UP:
			toUp();
			break;
		case top.VK_RIGHT:
			toRight();
			break;
		case top.VK_DOWN:
			toDown();
			break;
		case top.VK_EXIT:
			doExit();
			break;
		case top.VK_1:
		case top.VK_2:
		case top.VK_3:
		case top.VK_4:
		case top.VK_5:
		case top.VK_6:
		case top.VK_7:
		case top.VK_8:
		case top.VK_9:
		case top.VK_0:
			if(position_h == 2)
			{
				firstLineInputFlag=0;
				checkFirstLineInput(keycode);
			}
			else if(position_h == 3)
			{
				secondLineInputFlag=0;
				checkSecondLineInput(keycode);
			}
			break;
		case top.VK_RED:
			if(position_h == 2)
			{
				firstLineTextString = "";
				firstPositionEditH = 0;
				for(var i = 0; i < 32; i++)
				{
					firstEditLine[i] = '';
					$("firstSpan"+i).innerHTML = firstEditLine[i];
				}
				firstCurPos = 0;
				$("firstSpan"+firstCurPos).innerHTML = '_';
				$("firstSpan"+firstCurPos).style.color = "#00F";
				factory.displayMessage = firstLineTextString;
			}
			else if(position_h == 3)
			{
				secondLineTextString = "";
				secondPositionEditH = 0;
				for(var i = 0; i < 32; i++)
				{
					secondEditLine[i] = '';
					$("secondSpan"+i).innerHTML = secondEditLine[i];	
				}
				secondCurPos = 0;
				$("secondSpan"+secondCurPos).innerHTML = '_';
				$("secondSpan"+secondCurPos).style.color = "#00F";
				factory.displaySecondMessage = secondLineTextString;
			}
			break;
		case top.VK_BLUE:
			if(position_h == 2)
			{
				top.g_channel.testLog("@@@@@@@@@firstCurPos="+firstCurPos);
				top.g_channel.testLog("@@@@@@@firstCurPos="+$("firstSpan"+firstCurPos).innerHTML);
				if(($("firstSpan"+firstCurPos).innerHTML == '_') || ($("firstSpan"+firstCurPos).innerHTML == ' '))//此处处理当前位没有任何输入时按blue key删除的情况
				{
					top.g_channel.testLog("@@@@@@@@@firstCurPos is empty");
					return;
				}
				var tmp = 0;
				if(firstLineDelFlag == 0)//此处理当没有按右键将当前输入存入string时，按blue key删除时出现异常的情况。手动将当前输入字符加入string中使下面位置处理逻辑正常。
				{
					firstLineTextString += firstInputChar;
					firstLineDelFlag = 1;
					top.g_channel.testLog("@@@@@@@@@firstInputChar="+firstInputChar);
					top.g_channel.testLog("@@@@@@@@@firstLineTextString="+firstLineTextString);			
				}
				else
				{
					firstLineTextString = factory.displayMessage;
				}
				top.g_channel.testLog("@@@@@@@@@firstLineTextString="+firstLineTextString);
				tmp = firstLineTextString.length;
				top.g_channel.testLog("@@@@@@@@@tmp="+tmp);
				for(var i = 0; i < tmp; i++)
				{
					firstEditLine[i] = firstLineTextString[i];
				}
				if(tmp != 0)
				{
					if(tmp == 1)
					{
						firstCurPos = 0;
						$("firstSpan0").innerHTML = '_';
						$("firstSpan0").style.color = "#00F";
						firstLineTextString="";
						for(var i = 0; i < tmp; i++)
						{
							firstEditLine[i] = firstLineTextString[i];
						}
					}
					else 
					{
						var oldFistCurPos = firstCurPos;
						for(var i=firstCurPos;i<tmp;i++)
						{
							if(!checkInput(firstEditLine[i+1]))
							{
								firstEditLine[i+1] = ' ';
							}
							firstEditLine[i]=firstEditLine[i+1];
							$("firstSpan"+(i+1)).innerHTML = firstEditLine[i+1];
							$("firstSpan"+i).innerHTML = $("firstSpan"+(i+1)).innerHTML;
						}
						firstLineTextString="";
						for(var j=0;j<tmp-1;j++)
						{
							firstLineTextString+=firstEditLine[j];
							if(checkInput(firstEditLine[j]))
							{
								if(firstEditLine[j] == ' ')
								{
									$("firstSpan"+j).style.color ="#FFF";
								}
								else
								{
									$("firstSpan"+j).style.color ="#000";
								}
							}
							else
							{
								$("firstSpan"+j).style.color ="#0FF";
							}
						}
						firstPositionEditH = firstLineTextString.length;
						for(var i = 0; i < firstPositionEditH; i++)
						{
							firstEditLine[i] = firstLineTextString[i];
						}
						firstCurPos = oldFistCurPos;
						$("firstSpan"+firstCurPos).style.color ="#00F";
					}
					factory.displayMessage = firstLineTextString;
				}
				else
				{
					firstCurPos = 0;
					$("firstSpan0").innerHTML = '_';
					$("firstSpan0").style.color = "#00F";
				}
			}
			else if(position_h == 3)
			{
				if(($("secondSpan"+secondCurPos).innerHTML == '_') || ($("secondSpan"+secondCurPos).innerHTML == ' '))
				{
					top.g_channel.testLog("@@@@@@@@@secondCurPos is empty");
					return;
				}
				var tmp = 0;
				if(secondLineDelFlag == 0)
				{
					secondLineTextString += secondInputChar;
					secondLineDelFlag = 1;
					top.g_channel.testLog("@@@@@@@@@secondInputChar="+secondInputChar);
					top.g_channel.testLog("@@@@@@@@@secondLineTextString="+secondLineTextString);			
				}
				else
				{
					secondLineTextString = factory.displaySecondMessage;
				}
				tmp = secondLineTextString.length;
				for(var i = 0; i < tmp; i++)
				{
					secondEditLine[i] = secondLineTextString[i];
				}
				if(tmp != 0)
				{
					if(tmp == 1)
					{
						secondCurPos = 0;
						$("secondSpan0").innerHTML = '_';
						$("secondSpan0").style.color = "#00F";
						secondLineTextString="";
						for(var i = 0; i < tmp; i++)
						{
							secondEditLine[i] = secondLineTextString[i];
						}
					}
					else 
					{
						var oldsecondCurPos = secondCurPos;
						for(var i=secondCurPos;i<tmp;i++)
						{
							if(!checkInput(secondEditLine[i+1]))
							{
								secondEditLine[i+1] = ' ';
							}
							secondEditLine[i]=secondEditLine[i+1];
							$("secondSpan"+(i+1)).innerHTML = secondEditLine[i+1];
							$("secondSpan"+i).innerHTML = $("secondSpan"+(i+1)).innerHTML;
						}
						secondLineTextString="";
						for(var j=0;j<tmp-1;j++)
						{
							secondLineTextString+=secondEditLine[j];
							if(checkInput(secondEditLine[j]))
							{
								if(secondEditLine[j] == ' ')
								{
									$("secondSpan"+j).style.color = "#FFF";
								}
								else
								{
									$("secondSpan"+j).style.color = "#000";
								}
							}
							else
							{
								$("secondSpan"+j).style.color = "#0FF";
							}
						}
						secondPositionEditH = secondLineTextString.length;
						for(var i = 0; i < secondPositionEditH; i++)
						{
							secondEditLine[i] = secondLineTextString[i];
						}
						secondCurPos = oldsecondCurPos;
						$("secondSpan"+secondCurPos).style.color = "#00F";
					}
					factory.displaySecondMessage = secondLineTextString;
				}
				else
				{
					secondCurPos = 0;
					$("secondSpan0").innerHTML = '_';
					$("secondSpan0").style.color = "#00F";
				}
			}
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
	if(top.g_factory_mode == 3)
	{
		document.location.href = "../channelPlay.html";
	}
	else
	{
		document.location.href = "designMenu.html?5"
	}
	if(position_h == 2)
	{
		firstSaveLastInput();
	}
	else if(position_h == 3)
	{
		secondSaveLastInput();
	}
}
function toLeft()
{
	switch(position_h)
	{
		case 0:
			if(hotelEnable == 0)
			{
				hotelEnable = 1;
				span_contain_list[position_h].innerHTML = off_on[hotelEnable];
				for(var i = 2;i <=HOTEL_ITEM_LENGHT ;i++)
				{
					if(i == 12)
					{
						powerSignal=factory.hotelPowerSignal;
						if(powerSignal>1 || (powerSignal>1 && channelList.length<=0))
						{
							div_contain_list[12].style.background = "#CCC";
						}
						else if (powerSignal == 1)
						{
							div_contain_list[12].style.background = "#FFF";
						}
					}
					else if((i == 3) || (i == 4))
					{
						if(powerLogo == 1)
						{
							div_contain_list[i].style.background = "#FFF";
							div_contain_list[15].style.display = "block";
							div_contain_list[16].style.display = "block";
							span_contain_list[100].style.display = "block";
							span_contain_list[101].style.display = "block";
						}
						else
						{
							div_contain_list[i].style.background = "#CCC";
							div_contain_list[15].style.display = "none";
							div_contain_list[16].style.display = "none";
							span_contain_list[100].style.display = "none";
							span_contain_list[101].style.display = "none";
						}
					}
					else if(i == 8 || i == 9 || i == 10)
					{
						if(autoSet == 1)
						{
							div_contain_list[i].style.background = "#FFF";
						}
						else
						{
							div_contain_list[i].style.background = "#CCC";
						}
					}
					else
					{
						div_contain_list[i].style.background = "#FFF";
					}
				}
				factory.hotelEnable = hotelEnable;
				setting.frontPanelLock = factory.hotelKeyLock;
				factory.hotelPowerOnMode = powerOnMode;//当打开hotelenable时需要将hotelpoweronmode写入boot替换掉hotelenable为off时起作用的factorypower
			}
			else
			{
				hotelEnable = 0;
				span_contain_list[position_h].innerHTML = off_on[hotelEnable];
				for(var i = 2;i <=HOTEL_ITEM_LENGHT ;i++)
				{
					div_contain_list[i].style.background = "#CCC";
				}
				div_contain_list[15].style.display = "none";
				div_contain_list[16].style.display = "none";
				span_contain_list[100].style.display = "none";
				span_contain_list[101].style.display = "none";
				factory.hotelEnable = hotelEnable;
				setting.frontPanelLock = 0;
				factoryPowerOnMode = factory.powerOnMode;//这里如此处理的原因：是当hotel poweronmode改变后却将hotelenable设置为off,而此时boot中的开机模式即为
				factory.powerOnMode = factoryPowerOnMode;//hotelpoweronmode,所以需要读一次factory中的poweronmode然后再将该mode写入boot中。
			}
			break;
		case 1:
			if(factory.hotelPowerLogo == 0)
			{
				span_contain_list[position_h].innerHTML = off_on[1];
				div_contain_list[3].style.background = "#FFF";
				div_contain_list[4].style.background = "#FFF";
				factory.hotelPowerLogo = 1;
				div_contain_list[15].style.display = "block";
				div_contain_list[16].style.display = "block";
				span_contain_list[100].style.display = "block";
				span_contain_list[101].style.display = "block";
			}
			else
			{
				span_contain_list[position_h].innerHTML = off_on[0];
				div_contain_list[3].style.background = "#CCC";
				div_contain_list[4].style.background = "#CCC";
				factory.hotelPowerLogo = 0;
				div_contain_list[15].style.display = "none";
				div_contain_list[16].style.display = "none";
				span_contain_list[100].style.display = "none";
				span_contain_list[101].style.display = "none";
			}
			break;
		case 2:
			{
				if(firstPositionEditH == 0)
				{
					$("firstSpan"+firstCurPos).innerHTML = '_';
					$("firstSpan"+firstCurPos).style.color = "#00F";
					firstCurPos = 0;
				}
				else if(firstPositionEditH != 0)
				{
					firstCurPos--;
					//firstLineDelFlag = 1;
					if(firstCurPos < 0)
					{
						firstCurPos = 0 ;
					}
					else
					{
						if(!checkInput(firstEditLine[firstCurPos+1]))
						{
							if(checkInput(firstEditLine[firstCurPos]))
							{
									if(firstEditLine[firstCurPos] == ' ')
									{
										$("firstSpan"+firstCurPos).style.color = "#00F";
										$("firstSpan"+firstCurPos).innerHTML = '_';
									}
									else
									{
										$("firstSpan"+firstCurPos).style.color = "#00F";
									}
							}
							$("firstSpan"+(firstCurPos+1)).style.color = "#FFF";
						}
						else if(checkInput(firstEditLine[firstCurPos+1]))
						{
							if(firstEditLine[firstCurPos+1] == ' ')
							{
								$("firstSpan"+(firstCurPos+1)).style.color = "#FFF";
								$("firstSpan"+(firstCurPos+1)).innerHTML = "&nbsp;";
								firstEditLine[firstCurPos+1] = ' ';
								firstLineTextString = "";
								for(var i = 0;i<firstPositionEditH;i++)
								{
									firstLineTextString += firstEditLine[i];
								}
								firstPositionEditH = firstLineTextString.length;
								factory.displayMessage = firstLineTextString;
							}
							else
							{
								$("firstSpan"+(firstCurPos+1)).style.color = "#000";
								firstLineTextString = "";
								for(var i = 0;i<firstPositionEditH;i++)
								{
									firstLineTextString += firstEditLine[i];
								}
								firstPositionEditH = firstLineTextString.length;
								factory.displayMessage = firstLineTextString;
							}
							if(checkInput(firstEditLine[firstCurPos]))
							{
								if(firstEditLine[firstCurPos] == ' ')
								{
									$("firstSpan"+firstCurPos).style.color = "#00F";
									$("firstSpan"+firstCurPos).innerHTML = '_';
								}
								else
								{
									$("firstSpan"+firstCurPos).style.color = "#00F";
								}
							}
						}
					}
				}
				break;
			}
		case 3:
			{
				if(secondPositionEditH == 0)
				{
					$("secondSpan"+secondCurPos).innerHTML = '_';
					$("secondSpan"+secondCurPos).style.color = "#00F";
					secondCurPos = 0;
				}
				else if(secondPositionEditH != 0)
				{
					secondCurPos--;
					//secondLineDelFlag = 1;
					if(secondCurPos < 0)
					{
						secondCurPos = 0 ;
					}
					else
					{
						if(!checkInput(secondEditLine[secondCurPos+1]))
						{
							if(checkInput(secondEditLine[secondCurPos]))
							{
								if(secondEditLine[secondCurPos] == ' ')
								{
									$("secondSpan"+secondCurPos).style.color = "#00F";
									$("secondSpan"+secondCurPos).innerHTML = '_';
								}
								else
								{
									$("secondSpan"+secondCurPos).style.color = "#00F";
								}
							}
							$("secondSpan"+(secondCurPos+1)).style.color = "#FFF";
						}
						else if(checkInput(secondEditLine[secondCurPos+1]))
						{
							if(secondEditLine[secondCurPos+1] == ' ')
							{
								$("secondSpan"+(secondCurPos+1)).style.color = "#FFF";
								$("secondSpan"+(secondCurPos+1)).innerHTML = "&nbsp;";
								secondEditLine[secondCurPos+1] = ' ';
								secondLineTextString = "";
								for(var i = 0;i < secondPositionEditH;i++)
								{
									secondLineTextString += secondEditLine[i];
								}
								secondPositionEditH = secondLineTextString.length;
								factory.displaySecondMessage = secondLineTextString;
							}
							else
							{
								$("secondSpan"+(secondCurPos+1)).style.color = "#000";
								secondLineTextString = "";
								for(var i = 0;i < secondPositionEditH;i++)
								{
									secondLineTextString += secondEditLine[i];
								}
								secondPositionEditH = secondLineTextString.length;
								factory.displaySecondMessage = secondLineTextString;
							}
							if(checkInput(secondEditLine[secondCurPos]))
							{
								if(secondEditLine[secondCurPos] == ' ')
								{
									$("secondSpan"+secondCurPos).style.color = "#00F";
									$("secondSpan"+secondCurPos).innerHTML = '_';
								}
								else
								{
									$("secondSpan"+secondCurPos).style.color = "#00F";
								}
							}
						}
					}
				}
				break;
			}
		case 4:
			if(factory.hotelChLock == 0)
			{
				span_contain_list[position_h-2+88].innerHTML = off_on[1];
				factory.hotelChLock = 1;
			}
			else
			{
				span_contain_list[position_h-2+88].innerHTML = off_on[0];
				factory.hotelChLock = 0;
			}
			break;
		case 5:
			maxVol--;
			if(maxVol < 0)
			{
				maxVol = 0;
			}
			span_contain_list[position_h-2+88].innerHTML = maxVol;
			factory.hotelMaxVolume = maxVol;
			
			if(maxVol < powerVol)
			{
				powerVol = maxVol;
				span_contain_list[95].innerHTML = powerVol;
				factory.hotelPowerVol = powerVol;
			}
			break;
		case 6:
			if(factory.hotelAutoSet == 0)
			{
				autoSet = 1;
				span_contain_list[position_h-2].innerHTML = off_on[autoSet];
				div_contain_list[8].style.background = "#FFF";
				div_contain_list[9].style.background = "#FFF";
				div_contain_list[10].style.background = "#FFF";
				factory.hotelAutoSet = autoSet;
			}
			else
			{
				autoSet = 0;
				span_contain_list[position_h-2+88].innerHTML = off_on[autoSet];
				div_contain_list[8].style.background = "#CCC";
				div_contain_list[9].style.background = "#CCC";
				div_contain_list[10].style.background = "#CCC";
				factory.hotelAutoSet = autoSet;
			}
			break;
		case 7:
			pictureMode--;
			if(pictureMode < 0)
			{
				pictureMode = 4;
			}
			factory.hotelPic = pictureMode;
			span_contain_list[position_h-2+88].innerHTML = picture_mode[pictureMode];
			break;
		case 8:
			soundMode--;
			if(soundMode < 0)
			{
				soundMode = 4;
			}
			factory.hotelSound = soundMode;
			span_contain_list[position_h-2+88].innerHTML = sound_mode[soundMode];
			break;
		case 9:
			powerVol--;
			if(powerVol < 0)
			{
				powerVol = 0;
			}
			span_contain_list[position_h-2+88].innerHTML = powerVol;
			factory.hotelPowerVol = powerVol;
			break;
		case 10:
			powerSignalIndex--;
			if(powerSignalIndex < 0)
			{
				powerSignalIndex = 6;
			}
			span_contain_list[position_h-2+88].innerHTML = power_signal[powerSignalIndex];
			getPowerChannelList();
			if(powerSignalIndex != 0 || (powerSignalIndex !=0 && channelList.length<=0))
			{
				div_contain_list[11].style.background = "#FF0";
				div_contain_list[12].style.background = "#CCC";
				span_contain_list[position_h-1+88].innerHTML =1;
			}
			else if(powerSignalIndex == 0)
			{
				if(channelList.length<=0)
				{
					span_contain_list[position_h-1+88].innerHTML =1;
				}
				else
					span_contain_list[position_h-1+88].innerHTML = channelList[powerChannelIndex].number;
				div_contain_list[12].style.background = "#FFF";
				div_contain_list[11].style.background = "#FF0";
			}
			setPowerSignal();
			break;
		case 11:
			powerChannelIndex--;
			if(powerChannelIndex < 0)
			{
				powerChannelIndex = channelList.length-1;
			}
			span_contain_list[position_h-2+88].innerHTML = channelList[powerChannelIndex].number;
			factory.hotelPowerCh =channelList[powerChannelIndex].number;
			break;
		case 12:
			if(factory.hotelKeyLock == 0)
			{
				span_contain_list[position_h-2+88].innerHTML = off_on[1];
				factory.hotelKeyLock = 1;
				setting.frontPanelLock = 1;
			}
			else
			{
				span_contain_list[position_h-2+88].innerHTML = off_on[0];
				factory.hotelKeyLock = 0;
				setting.frontPanelLock = 0;
			}
			break;
		case 13:
			powerOnMode--;
			if(powerOnMode < 0)
			{
				powerOnMode = 2;
			}
			span_contain_list[position_h-2+88].innerHTML = power_on_mode[powerOnMode];
			factory.hotelPowerOnMode = powerOnMode;
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
			if(hotelEnable == 0)
			{
				hotelEnable = 1;
				span_contain_list[position_h].innerHTML = off_on[hotelEnable];
				//div_contain_list[12].style.background = "#FFF";
				for(var i = 2;i <=HOTEL_ITEM_LENGHT ;i++)
				{
					if(i == 12)
					{
						powerSignal=factory.hotelPowerSignal;
						//top.g_channel.testLog("@@@@@@@@@@powerSignal="+powerSignal);
						if(powerSignal>1 || (powerSignal>1 && channelList.length<=0))
						{
							div_contain_list[12].style.background = "#CCC";
						}
						else if (powerSignal == 1)
						{
							div_contain_list[12].style.background = "#FFF";
						}
					}
					else if((i == 3) || (i == 4))
					{
						if(powerLogo == 1)
						{
							div_contain_list[i].style.background = "#FFF";
							div_contain_list[15].style.display = "block";
							div_contain_list[16].style.display = "block";
							span_contain_list[100].style.display = "block";
							span_contain_list[101].style.display = "block";
						}
						else
						{
							div_contain_list[i].style.background = "#CCC";
							div_contain_list[15].style.display = "none";
							div_contain_list[16].style.display = "none";
							span_contain_list[100].style.display = "none";
							span_contain_list[101].style.display = "none";
						}
					}
					else if(i == 8 || i == 9 || i == 10)
					{
						if(autoSet == 1)
						{
							div_contain_list[i].style.background = "#FFF";
						}
						else
						{
							div_contain_list[i].style.background = "#CCC";
						}
					}
					else
					{
						div_contain_list[i].style.background = "#FFF";
					}
				}
				factory.hotelEnable = hotelEnable;
				setting.frontPanelLock = factory.hotelKeyLock;
				factory.hotelPowerOnMode = powerOnMode;//当打开hotelenable时需要将hotelpoweronmode写入boot替换掉hotelenable为off时起作用的factorypoweronmode
			}
			else
			{
				hotelEnable = 0;
				span_contain_list[position_h].innerHTML = off_on[hotelEnable];
				for(var i = 2;i <=HOTEL_ITEM_LENGHT ;i++)
				{
					div_contain_list[i].style.background = "#CCC";
				}
				div_contain_list[15].style.display = "none";
				div_contain_list[16].style.display = "none";
				span_contain_list[100].style.display = "none";
				span_contain_list[101].style.display = "none";
				factory.hotelEnable = hotelEnable;
				setting.frontPanelLock = 0;
				//factory.hotelPowerOnMode = factory.powerOnMode;
				factoryPowerOnMode = factory.powerOnMode;//这里如此处理的原因：是当hotel poweronmode改变后却将hotelenable设置为off,而此时boot中的开机模式即为
				factory.powerOnMode = factoryPowerOnMode;//hotelpoweronmode,所以需要读一次factory中的poweronmode然后再将该mode写入boot中。
			}
			break;
		case 1:
			if(factory.hotelPowerLogo == 0)
			{
				span_contain_list[position_h].innerHTML = off_on[1];
				div_contain_list[3].style.background = "#FFF";
				div_contain_list[4].style.background = "#FFF";
				factory.hotelPowerLogo = 1;
				div_contain_list[15].style.display = "block";
				div_contain_list[16].style.display = "block";
				span_contain_list[100].style.display = "block";
				span_contain_list[101].style.display = "block";
			}
			else
			{
				span_contain_list[position_h].innerHTML = off_on[0];
				div_contain_list[3].style.background = "#CCC";
				div_contain_list[4].style.background = "#CCC";
				factory.hotelPowerLogo = 0;
				div_contain_list[15].style.display = "none";
				div_contain_list[16].style.display = "none";
				span_contain_list[100].style.display = "none";
				span_contain_list[101].style.display = "none";
			}
			break;
		case 2:
			{	
				if(firstCurPos <= 30)
				{
					if(firstPositionEditH == 0)
					{
						if(firstLineInputFlag == 1)
						{
							$("firstSpan"+firstCurPos).innerHTML = firstEditLine[firstCurPos];
							$("firstSpan"+(firstCurPos+1)).style.color = "#00F";
							$("firstSpan"+(firstCurPos+1)).innerHTML = '_';
							$("firstSpan"+firstCurPos).style.color = "#000";	
							firstLineTextString += firstEditLine[firstCurPos];
							firstPositionEditH = firstLineTextString.length;
							factory.displayMessage = firstLineTextString;
						}
						else
						{
							$("firstSpan"+firstCurPos).innerHTML = "&nbsp;";
							$("firstSpan"+firstCurPos).style.color = "#FFF";
							$("firstSpan"+(firstCurPos+1)).style.color = "#00F";
							$("firstSpan"+(firstCurPos+1)).innerHTML = '_';
							firstEditLine[firstCurPos] = ' ';
							firstLineTextString += firstEditLine[firstCurPos];
							firstPositionEditH = firstLineTextString.length;
							factory.displayMessage = firstLineTextString;
						}
					}
					else if(firstPositionEditH != 0)
					{
						if(!checkInput(firstEditLine[firstCurPos+1]))
						{
							if(checkInput(firstEditLine[firstCurPos]))
							{
								if(firstEditLine[firstCurPos] == ' ')
								{
									$("firstSpan"+firstCurPos).style.color = "#FFF";
									$("firstSpan"+(firstCurPos+1)).innerHTML = '_';
									$("firstSpan"+(firstCurPos+1)).style.color = "#00F";
									$("firstSpan"+firstCurPos).innerHTML = "&nbsp;";
									firstEditLine[firstCurPos] = ' ';
									firstLineTextString = "";
									for(var i = 0;i <=firstCurPos;i++)
									{
										firstLineTextString += firstEditLine[i];
									}
									firstPositionEditH = firstLineTextString.length;
									factory.displayMessage = firstLineTextString;
								}
								else
								{
									$("firstSpan"+firstCurPos).style.color = "#000";
									$("firstSpan"+(firstCurPos+1)).innerHTML = '_';
									$("firstSpan"+(firstCurPos+1)).style.color = "#00F";
									firstLineTextString = "";
									for(var i = 0;i <=firstCurPos;i++)
									{
										firstLineTextString += firstEditLine[i];
									}
									firstPositionEditH = firstLineTextString.length;
									factory.displayMessage = firstLineTextString;
								}
							}
							else if(!checkInput(firstEditLine[firstCurPos]))
							{
								$("firstSpan"+firstCurPos).innerHTML = "&nbsp;";
								$("firstSpan"+firstCurPos).style.color = "#FFF";
								$("firstSpan"+(firstCurPos+1)).style.color = "#00F";
								$("firstSpan"+(firstCurPos+1)).innerHTML = '_';
								firstEditLine[firstCurPos] = ' ';
								firstLineTextString += firstEditLine[firstCurPos];
								firstPositionEditH = firstLineTextString.length;
								factory.displayMessage = firstLineTextString;
							}
						}
						else if(checkInput(firstEditLine[firstCurPos+1]))
						{
							if(firstEditLine[firstCurPos+1] == ' ')
							{
								$("firstSpan"+(firstCurPos+1)).style.color = "#00F";
								$("firstSpan"+(firstCurPos+1)).innerHTML = '_';
							}
							else
							{
								$("firstSpan"+(firstCurPos+1)).style.color = "#00F";
							}
							if(checkInput(firstEditLine[firstCurPos]))
							{
								if(firstEditLine[firstCurPos] == ' ')
								{
									$("firstSpan"+(firstCurPos)).style.color = "#FFF";
									$("firstSpan"+(firstCurPos)).innerHTML = "&nbsp;";
									firstEditLine[firstCurPos] = ' ';
									firstLineTextString = "";
									for(var i = 0;i<firstPositionEditH;i++)
									{
										firstLineTextString += firstEditLine[i];
									}
									firstPositionEditH = firstLineTextString.length;
									factory.displayMessage = firstLineTextString;
								}
								else
								{
									$("firstSpan"+(firstCurPos)).style.color = "#000";
									firstLineTextString = "";
									for(var i = 0;i<firstPositionEditH;i++)
									{
										firstLineTextString += firstEditLine[i];
									}
									firstPositionEditH = firstLineTextString.length;
									factory.displayMessage = firstLineTextString;
								}
							}
						}
					}
					firstCurPos++;
					firstLineDelFlag = 1;
				}
				else 
				{
					firstCurPos = 31;
					firstLineTextString += firstEditLine[31];
					return;
				}
				break;
			}
		case 3:
			{				
				if(secondCurPos <= 30)
				{
					if(secondPositionEditH == 0)
					{
						if(secondLineInputFlag == 1)
						{
							$("secondSpan"+secondCurPos).innerHTML = secondEditLine[secondCurPos];
							$("secondSpan"+(secondCurPos+1)).style.color = "#00F";
							$("secondSpan"+(secondCurPos+1)).innerHTML = '_';
							$("secondSpan"+secondCurPos).style.color = "#000";	
							secondLineTextString += secondEditLine[secondCurPos];
							secondPositionEditH = secondLineTextString.length;
							factory.displaySecondMessage = secondLineTextString;
						}
						else
						{
							$("secondSpan"+secondCurPos).innerHTML = "&nbsp;";
							$("secondSpan"+secondCurPos).style.color = "#FFF";
							$("secondSpan"+(secondCurPos+1)).style.color = "#00F";
							$("secondSpan"+(secondCurPos+1)).innerHTML = '_';
							secondEditLine[firstCurPos] = ' ';
							secondLineTextString += secondEditLine[secondCurPos];
							secondPositionEditH = secondLineTextString.length;
							factory.displaySecondMessage = secondLineTextString;
						}
					}
					else if(secondPositionEditH != 0)
					{
						if(!checkInput(secondEditLine[secondCurPos+1]))
						{
							if(checkInput(secondEditLine[secondCurPos]))
							{
								if(secondEditLine[secondCurPos] == ' ')
								{
									$("secondSpan"+secondCurPos).style.color = "#FFF";
									$("secondSpan"+(secondCurPos+1)).innerHTML = '_';
									$("secondSpan"+(secondCurPos+1)).style.color = "#00F";
									$("secondSpan"+secondCurPos).innerHTML = "&nbsp;";
									secondEditLine[secondCurPos] = ' ';
									secondLineTextString = "";
									for(var i = 0;i <= secondCurPos;i++)
									{
										secondLineTextString += secondEditLine[i];
									}
									secondPositionEditH = secondLineTextString.length;
									factory.displaySecondMessage = secondLineTextString;
								}
								else
								{
									$("secondSpan"+secondCurPos).style.color = "#000";
									$("secondSpan"+(secondCurPos+1)).innerHTML = '_';
									$("secondSpan"+(secondCurPos+1)).style.color = "#00F";
									secondLineTextString = "";
									for(var i = 0;i <= secondCurPos;i++)
									{
										secondLineTextString += secondEditLine[i];
									}
									secondPositionEditH = secondLineTextString.length;
									factory.displaySecondMessage = secondLineTextString;
								}
							}
							else if(!checkInput(secondEditLine[secondCurPos]))
							{
								$("secondSpan"+secondCurPos).innerHTML = "&nbsp;";
								$("secondSpan"+secondCurPos).style.color = "#FFF";
								$("secondSpan"+(secondCurPos+1)).style.color = "#00F";
								$("secondSpan"+(secondCurPos+1)).innerHTML = '_';
								secondEditLine[secondCurPos] = ' ';
								secondLineTextString += secondEditLine[secondCurPos];
								secondPositionEditH = secondLineTextString.length;
								factory.displaySecondMessage = secondLineTextString;
							}
						}
						else if(checkInput(secondEditLine[secondCurPos+1]))
						{
							if(secondEditLine[secondCurPos+1] == ' ')
							{
								$("secondSpan"+(secondCurPos+1)).style.color = "#00F";
								$("secondSpan"+(secondCurPos+1)).innerHTML ='_';
							}
							else
							{
								$("secondSpan"+(secondCurPos+1)).style.color = "#00F";
							}
							if(checkInput(secondEditLine[secondCurPos]))
							{
								if(secondEditLine[secondCurPos] == ' ')
								{
									$("secondSpan"+(secondCurPos)).style.color = "#FFF";
									$("secondSpan"+(secondCurPos)).innerHTML = "&nbsp;";
									secondEditLine[secondCurPos] = ' ';
									secondLineTextString = "";
									for(var i = 0;i<secondPositionEditH;i++)
									{
										secondLineTextString += secondEditLine[i];
									}
									secondPositionEditH = secondLineTextString.length;
									factory.displaySecondMessage = secondLineTextString;
								}
								else
								{
									$("secondSpan"+(secondCurPos)).style.color = "#000";
									secondLineTextString = "";
									for(var i = 0;i<secondPositionEditH;i++)
									{
										secondLineTextString += secondEditLine[i];
									}
									secondPositionEditH = secondLineTextString.length;
									factory.displaySecondMessage = secondLineTextString;
								}
							}
						}
					}
					secondLineDelFlag = 1;
					secondCurPos++;
				}
				else 
				{
					secondCurPos = 31;
					secondLineTextString += secondEditLine[31];
					return;
				}
				
				break;
			}
		case 4:
			if(factory.hotelChLock == 0)
			{
				span_contain_list[position_h-2+88].innerHTML = off_on[1];
				factory.hotelChLock = 1;
			}
			else
			{
				span_contain_list[position_h-2+88].innerHTML = off_on[0];
				factory.hotelChLock = 0;
			}
			break;
		case 5:
			maxVol++;
			if(maxVol > 100)
			{
				maxVol = 0;
			}
			span_contain_list[position_h-2+88].innerHTML = maxVol;
			factory.hotelMaxVolume = maxVol;
			
			if(maxVol < powerVol)
			{
				powerVol = maxVol;
				span_contain_list[position_h-2+88].innerHTML = powerVol;
				factory.hotelPowerVol = powerVol;
			}
			break;
		case 6:
			if(factory.hotelAutoSet == 0)
			{
				autoSet = 1;
				span_contain_list[position_h-2+88].innerHTML = off_on[autoSet];
				div_contain_list[8].style.background = "#FFF";
				div_contain_list[9].style.background = "#FFF";
				div_contain_list[10].style.background = "#FFF";
				factory.hotelAutoSet = autoSet;
			}
			else
			{
				autoSet = 0;
				span_contain_list[position_h-2+88].innerHTML = off_on[autoSet];
				div_contain_list[8].style.background = "#CCC";
				div_contain_list[9].style.background = "#CCC";
				div_contain_list[10].style.background = "#CCC";
				factory.hotelAutoSet = autoSet;
			}
			break;
		case 7:
			pictureMode++;
			if(pictureMode > 4)
			{
				pictureMode = 0;
			}
			factory.hotelPic = pictureMode;
			span_contain_list[position_h-2+88].innerHTML = picture_mode[pictureMode];
			break;
		case 8:
			soundMode++;
			if(soundMode > 4)
			{
				soundMode = 0;
			}
			factory.hotelSound = soundMode;
			span_contain_list[position_h-2+88].innerHTML = sound_mode[soundMode];
			break;
		case 9:
			powerVol++;
			if(powerVol > 100)
			{
				powerVol = 0;
			}
			if(powerVol > maxVol)
			{
				powerVol = maxVol;
			}
			span_contain_list[position_h-2+88].innerHTML = powerVol;
			factory.hotelPowerVol = powerVol;
			break;
		case 10:
			powerSignalIndex++;
			if(powerSignalIndex > 6)
			{
				powerSignalIndex = 0;
			}
			span_contain_list[position_h-2+88].innerHTML = power_signal[powerSignalIndex];
			getPowerChannelList();
			if(powerSignalIndex != 0 || (powerSignalIndex !=0 && channelList.length<=0))
			{
				div_contain_list[11].style.background = "#FFO";
				div_contain_list[12].style.background = "#CCC";
				span_contain_list[position_h-1+88].innerHTML =1;
			}
			else if(powerSignalIndex == 0)
			{
				if(channelList.length<=0)
				{
					span_contain_list[position_h-1+88].innerHTML =1;
				}
				else
					span_contain_list[position_h-1+88].innerHTML = channelList[powerChannelIndex].number;
				div_contain_list[11].style.background = "#FF0";
				div_contain_list[12].style.background = "#FFF";
			}
			setPowerSignal();
			//factory.hotelPowerSignal = powerSignal;
			break;
		case 11:
			powerChannelIndex++;
			if(powerChannelIndex >=channelList.length)
			{
				powerChannelIndex = 0;
			}
			span_contain_list[position_h-2+88].innerHTML = channelList[powerChannelIndex].number;
			factory.hotelPowerCh =channelList[powerChannelIndex].number;
			break;
		case 12:
			if(factory.hotelKeyLock == 0)
			{
				span_contain_list[position_h-2+88].innerHTML = off_on[1];
				factory.hotelKeyLock = 1;
				setting.frontPanelLock = 1;
			}
			else
			{
				span_contain_list[position_h-2+88].innerHTML = off_on[0];
				factory.hotelKeyLock = 0;
				setting.frontPanelLock = 0;
			}
			break;
		case 13:
			powerOnMode++;
			if(powerOnMode > 2)
			{
				powerOnMode = 0;
			}
			factory.hotelPowerOnMode = powerOnMode;
			span_contain_list[position_h-2+88].innerHTML = power_on_mode[powerOnMode];
			break;
		default:
			break;
	}
}
function toUp()
{
	if(hotelEnable == 0)
	{
		return;
	}
	else if(hotelEnable != 0 && autoSet == 0)
	{
		if(position_h <= 0)
		{
			div_contain_list[1].style.background = "#FFF";
			document.location.href = "hotelMenu1.html?up";
		}
		else if(position_h == 4)
		{
			if(factory.hotelPowerLogo == 0)
			{
				div_contain_list[5].style.background = "#FFF";
				div_contain_list[2].style.background = "#FF0";
				position_h = 1;
			}
			else
			{
				div_contain_list[5].style.background = "#FFF";
				div_contain_list[4].style.background = "#FF0";
				position_h = 3;
			}
		}
		else if(position_h == 10)
		{
			div_contain_list[11].style.background = "#FFF";
			div_contain_list[7].style.background = "#FF0";
			position_h = 6;
		}
		else if(position_h==12)
		{
			if(powerSignalIndex != 0 || (powerSignalIndex !=0 && channelList.length<=0))
			{
				div_contain_list[13].style.background = "#FFF";
				div_contain_list[11].style.background = "#FF0";
				position_h = 10;
			}
			else
			{
				div_contain_list[13].style.background = "#FFF";
				div_contain_list[12].style.background = "#FF0";
				position_h = 11;
			}
		}
		else if(position_h == 3)
		{
			div_contain_list[4].style.background = "#FFF";
			div_contain_list[3].style.background = "#FF0";
			position_h = 2;
			secondSaveLastInput();
		}
		else if(position_h == 2)
		{
			div_contain_list[3].style.background = "#FFF";
			div_contain_list[2].style.background = "#FF0";
			position_h = 1;
			firstSaveLastInput();
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
		if(position_h <= 0)
		{
			div_contain_list[1].style.background = "#FFF";
			document.location.href = "hotelMenu1.html?up";
		}
		else if(position_h == 4)
		{
			if(factory.hotelPowerLogo == 0)
			{
				div_contain_list[5].style.background = "#FFF";
				div_contain_list[2].style.background = "#FF0";
				position_h = 1;
			}
			else
			{
				div_contain_list[5].style.background = "#FFF";
				div_contain_list[4].style.background = "#FF0";
				position_h = 3;
			}
		}
		else if(position_h==12)
		{
			if(powerSignalIndex != 0 || (powerSignalIndex !=0 && channelList.length<=0))
			{
				div_contain_list[13].style.background = "#FFF";
				div_contain_list[11].style.background = "#FF0";
				position_h = 10;
			}
			else
			{
				div_contain_list[13].style.background = "#FFF";
				div_contain_list[12].style.background = "#FF0";
				position_h = 11;
			}
		}
		else if(position_h == 3)
		{
			div_contain_list[4].style.background = "#FFF";
			div_contain_list[3].style.background = "#FF0";
			position_h = 2;
			secondSaveLastInput();
		}
		else if(position_h == 2)
		{
			div_contain_list[3].style.background = "#FFF";
			div_contain_list[2].style.background = "#FF0";
			position_h = 1;
			firstSaveLastInput();
		}
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h].style.background = "#FF0";
			position_h--;
		}
	}
}
function toDown()
{
	if(hotelEnable == 0)
	{
		return;
	}
	else if(hotelEnable != 0 && autoSet == 0)
	{
		if(position_h == 6)
		{
			div_contain_list[7].style.background = "#FFF";
			div_contain_list[11].style.background = "#FF0";
			position_h = 10;
		}
		else if(position_h==1)
		{
			if(factory.hotelPowerLogo == 0)
			{
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[5].style.background = "#FF0";
				position_h = 4;
			}
			else
			{
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[3].style.background = "#FF0";
				position_h = 2;
			}
		}
		else if(position_h==10)
		{
			if(powerSignalIndex != 0 || (powerSignalIndex !=0 && channelList.length<=0))
			{
				div_contain_list[11].style.background = "#FFF";
				div_contain_list[13].style.background = "#FF0";
				position_h = 12;
			}
			else
			{
				div_contain_list[11].style.background = "#FFF";
				div_contain_list[12].style.background = "#FF0";
				position_h = 11;
			}
		}
		else if(position_h >= 13)
		{
			div_contain_list[14].style.background = "#FFF";
			document.location.href = "hotelMenu1.html?down";
		}
		else if(position_h == 2)
		{
			div_contain_list[3].style.background = "#FFF";
			div_contain_list[4].style.background = "#FF0";
			position_h = 3;
			firstSaveLastInput();
		}
		else if(position_h == 3)
		{
			div_contain_list[4].style.background = "#FFF";
			div_contain_list[5].style.background = "#FF0";
			position_h = 4;
			secondSaveLastInput();
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
		if(position_h >= 13)
		{
			div_contain_list[14].style.background = "#FFF";
			document.location.href = "hotelMenu1.html?down";
		}
		else if(position_h==1)
		{
			if(factory.hotelPowerLogo == 0)
			{
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[5].style.background = "#FF0";
				position_h = 4;
			}
			else
			{
				div_contain_list[2].style.background = "#FFF";
				div_contain_list[3].style.background = "#FF0";
				position_h = 2;
			}
		}
		else if(position_h==10)
		{
			if(powerSignalIndex != 0 || (powerSignalIndex !=0 && channelList.length<=0))
			{
				div_contain_list[11].style.background = "#FFF";
				div_contain_list[13].style.background = "#FF0";
				position_h = 12;
			}
			else
			{
				div_contain_list[11].style.background = "#FFF";
				div_contain_list[12].style.background = "#FF0";
				position_h = 11;
			}
		}
		else if(position_h == 2)
		{
			div_contain_list[3].style.background = "#FFF";
			div_contain_list[4].style.background = "#FF0";
			position_h = 3;
			firstSaveLastInput();
		}
		else if(position_h == 3)
		{
			div_contain_list[4].style.background = "#FFF";
			div_contain_list[5].style.background = "#FF0";
			position_h = 4;
			secondSaveLastInput();
		}
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h + 2].style.background = "#FF0";
			position_h++;
		}
	}
}
function doExit()
{
	document.location.href = "../channelPlay.html";
	if(position_h == 2)
	{
		firstSaveLastInput();
	}
	else if(position_h == 3)
	{
		secondSaveLastInput();
	}
}
function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
	{
		top.stopTimeout();
	}
	hotelEnable = factory.hotelEnable;
	powerLogo = factory.hotelPowerLogo;
	maxVol = factory.hotelMaxVolume;
	autoSet = factory.hotelAutoSet;
	pictureMode = factory.hotelPic;
	soundMode = factory.hotelSound;
	powerVol = factory.hotelPowerVol;
	powerSignal=factory.hotelPowerSignal;
	powerOnMode = factory.hotelPowerOnMode;
	div_contain_list = $('menu').getElementsByTagName('div');
	span_contain_list = $('menu').getElementsByTagName('span');
	powerSignalApiToUi();
	showOther();
}
function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
function showOther()
{
	//初始化菜单项
	var url = window.location.search;//获取URL携带参数
	if(url!=null && url!="")
	{
		focusFlag = url.substring(url.indexOf("?")+1);
	}
	for(var i = 0; i <= 2; i++)
	{
		div_contain_list[i].innerHTML = init_title[i];
		if((i >= 2) && (hotelEnable == 0))
		{
			div_contain_list[i].style.background = "#CCC";
		}
		else if((i >= 2) && (hotelEnable == 1))
		{
			div_contain_list[i].style.background = "#FFF";
		}
	}
	for(var i = 5; i <= HOTEL_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = init_title[i-2];
		if((i >= 2) && (hotelEnable == 0))
		{
			div_contain_list[i].style.background = "#CCC";
		}
		else if((i >= 2) && (hotelEnable == 1))
		{
			div_contain_list[i].style.background = "#FFF";
		}
	}
	if((hotelEnable == 1) && (autoSet == 0))
	{
		div_contain_list[8].style.background = "#CCC";
		div_contain_list[9].style.background = "#CCC";
		div_contain_list[10].style.background = "#CCC";
	}
	span_contain_list[0].innerHTML = off_on[hotelEnable];
	span_contain_list[1].innerHTML = off_on[factory.hotelPowerLogo];
	span_contain_list[90].innerHTML = off_on[factory.hotelChLock];
	span_contain_list[91].innerHTML = maxVol;
	span_contain_list[92].innerHTML = off_on[autoSet];
	span_contain_list[93].innerHTML = picture_mode[pictureMode];
	span_contain_list[94].innerHTML = sound_mode[soundMode];
	span_contain_list[95].innerHTML = powerVol;
	span_contain_list[96].innerHTML = power_signal[powerSignalIndex];
	
	getPowerChannelList();
	if(hotelEnable == 1)
	{
		if(powerSignal>1 || (powerSignal>1 && channelList.length<=0))
		{
			div_contain_list[12].style.background = "#CCC";
			span_contain_list[97].innerHTML =1;
		}
		else if(powerSignal == 1)
		{
			if(channelList.length<=0)
			{
				span_contain_list[97].innerHTML =1;
			}
			else
				span_contain_list[97].innerHTML = channelList[powerChannelIndex].number;
			div_contain_list[12].style.background = "#FFF";
		}
		else
		{
			div_contain_list[12].style.background = "#CCC";
			span_contain_list[97].innerHTML =1;
		}
	}
	else
	{
		if(powerSignal>1 || (powerSignal>1 && channelList.length<=0))
		{
			span_contain_list[97].innerHTML =1;
		}
		else if(powerSignal == 1)
		{
			if(channelList.length<=0)
			{
				span_contain_list[97].innerHTML =1;
			}
			else
				span_contain_list[97].innerHTML = channelList[powerChannelIndex].number;
		}
		else
		{
			span_contain_list[97].innerHTML =1;
		}
		div_contain_list[12].style.background = "#CCC";
	}
	span_contain_list[98].innerHTML = off_on[factory.hotelKeyLock];
	span_contain_list[99].innerHTML = power_on_mode[powerOnMode];
	span_contain_list[100].innerHTML = bottom_words[0];
	span_contain_list[101].innerHTML = bottom_words[1];
	
	if(hotelEnable == 0)
	{
		div_contain_list[15].style.display = "none";
		div_contain_list[16].style.display = "none";
		div_contain_list[3].style.background = "#CCC";
		div_contain_list[4].style.background = "#CCC";
		span_contain_list[100].style.display = "none";
		span_contain_list[101].style.display = "none";
	}
	else
	{
		if(factory.hotelPowerLogo == 1)
		{
			div_contain_list[15].style.display = "block";
			div_contain_list[16].style.display = "block";
			div_contain_list[3].style.background = "#FFF";
			div_contain_list[4].style.background = "#FFF";
			span_contain_list[100].style.display = "block";
			span_contain_list[101].style.display = "block";
		}
		else
		{
			div_contain_list[15].style.display = "none";
			div_contain_list[16].style.display = "none";
			div_contain_list[3].style.background = "#CCC";
			div_contain_list[4].style.background = "#CCC";
			span_contain_list[100].style.display = "none";
			span_contain_list[101].style.display = "none";
		}
	}
	if(focusFlag == "down")
	{
		div_contain_list[1].style.background = "#FF0";
		position_h = 0;
	}
	else if(focusFlag == "up")
	{
		div_contain_list[14].style.background = "#FF0";
		position_h = 13;
	}
	else
	{
		div_contain_list[1].style.background = "#FF0";
		position_h = 0;
	}
	firstLineTextString = factory.displayMessage;
	secondLineTextString = factory.displaySecondMessage;
	firstPositionEditH = firstLineTextString.length;
	secondPositionEditH = secondLineTextString.length;
	if(firstPositionEditH == 0)
	{
		/*if((hotelEnable == 0) || (powerLogo == 0))
		{
			firstCurPos = 0;
		}
		else
		{*/
			firstCurPos = 0;
			$("firstSpan0").innerHTML = '_';
			$("firstSpan0").style.color="#00F";
		//}
	}
	else
	{
		for(var i = 0; i < firstPositionEditH; i++)
		{
			firstEditLine[i] = firstLineTextString[i];
			if(firstEditLine[i] == ' ')
			{
				$("firstSpan"+i).innerHTML = "&nbsp;";
			}
			else
			{
				$("firstSpan"+i).innerHTML = firstLineTextString[i];
			}
		}
		firstCurPos = 0;
		/*if((hotelEnable == 0) || (powerLogo == 0))
		{
			if(firstEditLine[0] == ' ')
			{
				$("firstSpan0").style.color="#FFF";
			}
			else
			{
				$("firstSpan0").style.color="#000";
			}
		}
		else
		{*/
			if(firstEditLine[0] == ' ')
			{
				$("firstSpan0").style.color="#FFF";
			}
			else
			{
				$("firstSpan0").style.color="#00F";
			}
		//}
	}
	if(secondPositionEditH == 0)
	{
		/*if((hotelEnable == 0) || (powerLogo == 0))
		{
			secondCurPos = 0;
		}
		else
		{*/
			secondCurPos = 0;
			$("secondSpan0").innerHTML = '_';
			$("secondSpan0").style.color="#00F";
		//}
	}
	else
	{
		for(var i = 0; i < secondPositionEditH; i++)
		{
			secondEditLine[i] = secondLineTextString[i];
			if(secondEditLine[i] == ' ')
			{
				$("secondSpan"+i).innerHTML = "&nbsp;";
			}
			else
			{
				$("secondSpan"+i).innerHTML = secondLineTextString[i];
			}
		}
		secondCurPos = 0;
		/*if((hotelEnable == 0) || (powerLogo == 0))
		{
			if(secondEditLine[0] == ' ')
			{
				$("secondSpan0").style.color="#FFF";
			}
			else
			{
				$("secondSpan0").style.color="#000";
			}
		}
		else
		{*/
			if(secondEditLine[0] == ' ')
			{
				$("secondSpan0").style.color="#FFF";
			}
			else
			{
				$("secondSpan0").style.color="#00F";
			}
		//}
	}
}

function getPowerChannelList()
{
	channelList="";
	powerChannelIndex=0;
	if((powerSignal == 1)||(powerSignalIndex == 0))
	{
		channelList = top.g_channel.getChannelList(0,0,0);
		var factoryCH=factory.hotelPowerCh;
		for(var i=0;i<channelList.length;i++)
		{
			if(factoryCH==channelList[i].number)
			{
				powerChannelIndex=i;
				break;
			}
		}
	}
}
function setPowerSignal()
{
	switch(powerSignalIndex)
	{
		case 0:
			factory.hotelPowerSignal = 1;
			break;
		case 1:
			factory.hotelPowerSignal = 2;
			break;
		case 2:
			factory.hotelPowerSignal = 4;
			break;
		/*case 3:
			factory.hotelPowerSignal = 5;
			break;*/
		case 3:
			factory.hotelPowerSignal = 6;
			break;
		case 4:
			factory.hotelPowerSignal = 7;
			break;
		case 5:
			factory.hotelPowerSignal = 8;
			break;
		case 6:
			factory.hotelPowerSignal = 9;
			break;
		default:
			break;
	}
}
function powerSignalApiToUi()
{
	switch(powerSignal)
	{
		case 1:
			powerSignalIndex = 0;
			break;
		case 2:
			powerSignalIndex = 1;
			break;
		case 4:
			powerSignalIndex = 2;
			break;
		/*case 5:
			powerSignalIndex = 3;
			break;*/
		case 6:
			powerSignalIndex = 3;
			break;
		case 7:
			powerSignalIndex = 4;
			break;
		case 8:
			powerSignalIndex = 5;
			break;
		case 9:
			powerSignalIndex = 6;
			break;
		default:
			break;
	
	}
}
function checkFirstLineInput(keycode)
{
	//第一次的时候
	if (firstLinePressKeyFlag==0)
	{

		firstLinePressKeyFlag++;
		var keyTableLine = keycode - 48;
		if (firstLineKeyCount>=char_table[keyTableLine].length)
		{
			firstLineKeyCount = 0;
		}
		firstInputChar = char_table[keyTableLine][firstLineKeyCount];
		$("firstSpan"+firstCurPos).innerHTML=firstInputChar;
		firstEditLine[firstCurPos]=firstInputChar;
		if(checkInput(firstEditLine[firstCurPos]))
		{
			$("firstSpan"+firstCurPos).style.color = "#00F";
		}
	}
	else//其他时候
	{
		if (firstLineOldKeyCode == keycode)
		{
			firstLineKeyCount++;
			var keyTableLine = keycode - 48;
			if (firstLineKeyCount>=char_table[keyTableLine].length)
			{
				firstLineKeyCount = 0;
			}
			firstInputChar = char_table[keyTableLine][firstLineKeyCount];
			$("firstSpan"+firstCurPos).innerHTML=firstInputChar;
			firstEditLine[firstCurPos]=firstInputChar;
			if(checkInput(firstEditLine[firstCurPos]))
			{
				$("firstSpan"+firstCurPos).style.color = "#00F";
			}
		}
		else
		{
			firstLineKeyCount = 0;
			var keyTableLine = keycode - 48;
			if (firstLineKeyCount>=char_table[keyTableLine].length)
			{
				firstLineKeyCount = 0;
			}
			firstInputChar = char_table[keyTableLine][firstLineKeyCount];
			$("firstSpan"+firstCurPos).innerHTML=firstInputChar;
			firstEditLine[firstCurPos]=firstInputChar;
			if(checkInput(firstEditLine[firstCurPos]))
			{
				$("firstSpan"+firstCurPos).style.color = "#00F";
			}
		 }
      }
	firstLineDelFlag = 0;
	firstLineInputFlag = 1;
	firstLineOldKeyCode = keycode;
}
function checkSecondLineInput(keycode)
{
	//第一次的时候
	if (secondLinePressKeyFlag==0)
	{

		secondLinePressKeyFlag++;
		var keyTableLine = keycode - 48;
		if (secondLineKeyCount>=char_table[keyTableLine].length)
		{
			secondLineKeyCount = 0;
		}
		secondInputChar = char_table[keyTableLine][secondLineKeyCount];	
		$("secondSpan"+secondCurPos).innerHTML=secondInputChar;
		secondEditLine[secondCurPos]=secondInputChar;
		if(checkInput(secondEditLine[secondCurPos]))
		{
			$("secondSpan"+secondCurPos).style.color = "#00F";
		}
	}
	else//其他时候
	{
		if (secondLineOldKeyCode == keycode)
		{
			secondLineKeyCount++;
			var keyTableLine = keycode - 48;
			if (secondLineKeyCount>=char_table[keyTableLine].length)
			{
				secondLineKeyCount = 0;
			}
			secondInputChar = char_table[keyTableLine][secondLineKeyCount];
			$("secondSpan"+secondCurPos).innerHTML=secondInputChar;
			secondEditLine[secondCurPos]=secondInputChar;
			if(checkInput(secondEditLine[secondCurPos]))
			{
				$("secondSpan"+secondCurPos).style.color = "#00F";
			}
		}
		else
		{
			secondLineKeyCount = 0;
			var keyTableLine = keycode - 48;
			if (secondLineKeyCount>=char_table[keyTableLine].length)
			{
				secondLineKeyCount = 0;
			}
			secondInputChar = char_table[keyTableLine][secondLineKeyCount];
			$("secondSpan"+secondCurPos).innerHTML=secondInputChar;
			secondEditLine[secondCurPos]=secondInputChar;
			if(checkInput(secondEditLine[secondCurPos]))
			{
				$("secondSpan"+secondCurPos).style.color = "#00F";
			}
		 }
      }
	secondLineDelFlag = 0;
	secondLineInputFlag=1;
	secondLineOldKeyCode = keycode;
}
function checkInput(inputValue)
{
	if(((inputValue >= '0') && (inputValue <= '9')) || ((inputValue >= 'a') && (inputValue <= 'z')) 
	|| ((inputValue >= 'A') && (inputValue <= 'Z')) || (inputValue == '+') || (inputValue == '-') 
	|| (inputValue == ',') || (inputValue == '.') || (inputValue == ' '))
	{
		return true;
	}
	else
	{
		return false;
	}
}
//因为字符输入处理逻辑是输入后按右键保存，如果输入没有按右键当前输入的字符不会保存，所有再退出hotel 页面时强制将当前字符存入数据库中。
function firstSaveLastInput()
{
	firstLineTextString = "";
	for(var i = 0;i <=firstPositionEditH;i++)
	{
		if(!checkInput(firstEditLine[i]))
		{
			continue;
		}
		firstLineTextString +=firstEditLine[i];
	}
	factory.displayMessage = firstLineTextString;
	
}
function secondSaveLastInput()
{
	secondLineTextString = "";
	for(var i = 0;i <=secondPositionEditH;i++)
	{
		if(!checkInput(secondEditLine[i]))
		{
			continue;
		}
		secondLineTextString +=secondEditLine[i];
	}
	factory.displaySecondMessage = secondLineTextString;
	
}
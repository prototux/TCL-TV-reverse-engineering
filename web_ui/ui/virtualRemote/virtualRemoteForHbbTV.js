

var temp;
function keyDownForRight()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index+1; //标记移动到的按键的下标
	
	//如果是在最后一个按键上按右键的话，则返回第一个按键。
	if(index>19)
	{
		index = 0;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
	
}




function keyDownForLeft()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index-1; //标记移动到的按键的下标
	
	//如果是在第一个按键  按左键的话， 
	if(index<0)
	{
		index = 19;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
}

function keyDownForDown()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	
	
	//如果是在最后一行 按下键的时候，会超出边界，则做恢复处理
	if(index>=16)
	{
	}
	else if(index == 8)
	{
		index = index + 1;
	}
	else if(index == 7||index == 9)
	{
		index = index +2;
	}
	else
	{
		index = index+3; //标记移动到的按键的下标
	}
	
	
	
	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
}

function keyDownForUp()
{
	
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	
	//如果是在第一行 按上键的时候，不作处理
	if(index<=2)
	{
		
	}
	else if(index == 9||index == 11)
	{
		index = index -2;
	}
	else if(index == 10)
	{
		index = index -1;
	}
	else if(index == 19)
	{
		index = index -4;
	}
	else
	{
		index = index-3; //标记移动到的按键的下标
	}
	
	
	
	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
}

function transformCoord(x,y)
{
	var tempIndex = -1;
	
	//第一步：得到此整体 DIV 的左上角的 X 、 Y 坐标。
	var divX = document.getElementById("virtualremoteId").offsetLeft;
	var divY = document.getElementById("virtualremoteId").offsetTop;
	
	//判断当前所点击的区域  的坐标的  范围，如果是如下范围，则所点击的标签的宽高已确定--  宽：140  高：90
	if(1440<x&&x<1860&&380<y&&y<920)
	{
		tempIndex = (parseInt(x-(divX+10)))/140 + (parseInt((y-(divY+20))/90))*3;
	}
	//判断当前所点击的区域  的坐标的  范围，如果是如下范围，则所点击的标签的宽高已确定--  宽：110  高：90
	else if(1440<x&&x<1860&&920<y&&y<1010)
	{
		tempIndex = (parseInt(x-(divX+10)))/110 + (parseInt((y-(divY+20))/90))*3;
	}
	
	return parseInt(tempIndex);

}






function keyDownMouseClick(x,y)
{
	top.g_channel.testLog("*******>************virtualRemoteForHbbTV.js*****keyDownMouseClick*****************"+index);
	
	
	refreshTime();//刷新当前的时间
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	console.log("lqt---virtualRemoteForHbbTV.js-----x: "+x);
	console.log("lqt---virtualRemoteForHbbTV.js-----y: "+y);
	
	if(x != undefined && y != undefined)
	{
		var CurrentIndex = transformCoord(parseInt(x),parseInt(y));
		
		if(CurrentIndex != -1)//此时鼠标的确是点击了，某一个按钮。此时：1、得到当前所点击的位置index 2、响应事件  3、更改焦点的类型   4、移动焦点到当前所点击的按钮上
		{
			
			console.log("lqt---virtualRemoteForHbbTV.js---mouse---CurrentIndex: "+CurrentIndex);
			if(CurrentIndex >= 0 && CurrentIndex<=8 )
			{
				index = CurrentIndex;
				
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else if(CurrentIndex == 10)
			{
				index = 9;
				
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else if(CurrentIndex >= 12 && CurrentIndex <= 21)
			{
				index = CurrentIndex-2;
				
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else
			{
				return;
			}
			
			console.log("lqt---virtualRemoteForHbbTV.js---mouse---index: "+index);
			
			switch(index)
			{
				
				
				case 0:
				{
					console.log("lqt---HbbTV---1");
					top.g_setting.dispatchKey("0x0031");//1
					break;
				}
				case 1:
				{
					console.log("lqt---HbbTV---2");
					top.g_setting.dispatchKey("0x0032");//2
					break;
				}
				case 2:
				{
					console.log("lqt---HbbTV---3");
					top.g_setting.dispatchKey("0x0033");//3
					break;
				}
				case 3:
				{
					console.log("lqt---HbbTV---4");
					top.g_setting.dispatchKey("0x0034");//4
					break;
				}
				case 4:
				{
					console.log("lqt---HbbTV---5");
					top.g_setting.dispatchKey("0x0035");//5
					break;
				}
				case 5:
				{
					console.log("lqt---HbbTV---6");
					top.g_setting.dispatchKey("0x0036");//6
					break;
				}
				case 6:
				{
					console.log("lqt---HbbTV---7");
					top.g_setting.dispatchKey("0x0037");//7
					break;
				}
				case 7:
				{
					console.log("lqt---HbbTV---8");
					top.g_setting.dispatchKey("0x0038");//8
					break;
				}
				case 8:
				{
					console.log("lqt---HbbTV---9");
					top.g_setting.dispatchKey("0x0039");//9
					break;
				}
				case 9:
				{
					console.log("lqt---HbbTV---0");
					top.g_setting.dispatchKey("0x0030");//0
					
					break;
				}
				case 10:
				{
					console.log("lqt---HbbTV---play");
					top.g_setting.dispatchKey("0xf051");//play
					break;
				}
				case 11:
				{
					console.log("lqt---HbbTV---stop");
					top.g_setting.dispatchKey("0xf052");//stop
					break;
				}
				case 12:
				{
					console.log("lqt---HbbTV---pause");
					top.g_setting.dispatchKey("0xf00a");//pause
					break;
				}
				case 13:
				{
					console.log("lqt---HbbTV---kuaitui");
					top.g_setting.dispatchKey("0xf059");//快退巜
					break;
				}
				case 14:
				{
					console.log("lqt---HbbTV---Exit");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf062");//退出
					break;
				}
				case 15:
				{
					console.log("lqt---HbbTV---kuajin");
					top.g_setting.dispatchKey("0xf05a");//快进
					break;
				}
				case 16:
				{
					console.log("lqt---HbbTV---red");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf042");//红
					break;
				}
				case 17:
				{
					console.log("lqt---HbbTV---green");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf043");//绿
					break;
				}
				case 18:
				{
					console.log("lqt---HbbTV---yellow");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf044");//黄
					break;
				}
				case 19:
				{
					console.log("lqt---HbbTV---blue");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf045");//蓝
					break;
				}
				
				default:
				{
					
				}
			}
		}
	}
	
	
	
	
	
	
	
}


function keyDownForOK()
{
	
	refreshTime();//刷新当前的时间
	
	top.g_channel.testLog("*******>************virtualRemoteForHbbTV.js**********************"+index);
	switch(index)
	{
		
		
		case 0:
		{
			console.log("lqt---HbbTV---1");
			top.g_setting.dispatchKey("0x0031");//1
			break;
		}
		case 1:
		{
			console.log("lqt---HbbTV---2");
			top.g_setting.dispatchKey("0x0032");//2
			break;
		}
		case 2:
		{
			console.log("lqt---HbbTV---3");
			top.g_setting.dispatchKey("0x0033");//3
			break;
		}
		case 3:
		{
			console.log("lqt---HbbTV---4");
			top.g_setting.dispatchKey("0x0034");//4
			break;
		}
		case 4:
		{
			console.log("lqt---HbbTV---5");
			top.g_setting.dispatchKey("0x0035");//5
			break;
		}
		case 5:
		{
			console.log("lqt---HbbTV---6");
			top.g_setting.dispatchKey("0x0036");//6
			break;
		}
		case 6:
		{
			console.log("lqt---HbbTV---7");
			top.g_setting.dispatchKey("0x0037");//7
			break;
		}
		case 7:
		{
			console.log("lqt---HbbTV---8");
			top.g_setting.dispatchKey("0x0038");//8
			break;
		}
		case 8:
		{
			console.log("lqt---HbbTV---9");
			top.g_setting.dispatchKey("0x0039");//9
			break;
		}
		case 9:
		{
			console.log("lqt---HbbTV---0");
			top.g_setting.dispatchKey("0x0030");//0
			
			break;
		}
		case 10:
		{
			console.log("lqt---HbbTV---play");
			top.g_setting.dispatchKey("0xf051");//play
			break;
		}
		case 11:
		{
			console.log("lqt---HbbTV---stop");
			top.g_setting.dispatchKey("0xf052");//stop
			break;
		}
		case 12:
		{
			console.log("lqt---HbbTV---pause");
			top.g_setting.dispatchKey("0xf00a");//pause
			break;
		}
		case 13:
		{
			console.log("lqt---HbbTV---kuaitui");
			top.g_setting.dispatchKey("0xf059");//快退巜
			break;
		}
		case 14:
		{
			console.log("lqt---HbbTV---Exit");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf062");//退出
			break;
		}
		case 15:
		{
			console.log("lqt---HbbTV---kuajin");
			top.g_setting.dispatchKey("0xf05a");//快进
			break;
		}
		case 16:
		{
			console.log("lqt---HbbTV---red");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf042");//红
			break;
		}
		case 17:
		{
			console.log("lqt---HbbTV---green");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf043");//绿
			break;
		}
		case 18:
		{
			console.log("lqt---HbbTV---yellow");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf044");//黄
			break;
		}
		case 19:
		{
			console.log("lqt---HbbTV---blue");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf045");//蓝
			break;
		}
		
		default:
		{
			
		}
	}
	
	
	
	
}
var temp ;
function keyDownForRight()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index+1; //标记移动到的按键的下标
	
	//如果是在最后一个按键上按右键的话，则返回第一个按键。
	if(index>12)
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
		index = 12;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
}



function keyDownForDown()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	
	
	//如果是在最后一行 按下键的时候，会超出边界，则不做处理
	if(index >9)
	{
		
	}
	else if(index == 8||index == 9)
	{
		index = index + 1;
	}
	else if(index == 7)
	{
		index = index + 2;
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
	else if(index == 10)
	{
		index = index -1;
	}
	else if(index == 9||index == 11)
	{
		index = index -2;
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
	
	//判断当前所点击的区域  的坐标的  范围，如果是如下范围，则所点击的标签的宽高已确定--  宽：110  高：90
	if(1440<x&&x<1860&&650<y&&y<1010)
	{
		tempIndex = (parseInt(x-(divX+10)))/140 + (parseInt((y-(divY+20))/90))*3;
	}
	
	return parseInt(tempIndex);

}


function keyDownMouseClick(x,y)
{
	refreshTime();//刷新当前的时间
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	console.log("lqt---virtualRemoteForHDMI.js-----x: "+x);
	console.log("lqt---virtualRemoteForHDMI.js-----y: "+y);
	
	if(x != undefined && y != undefined)
	{
		var CurrentIndex = transformCoord(parseInt(x),parseInt(y));
		
		if(CurrentIndex != -1)//此时鼠标的确是点击了，某一个按钮。此时：1、得到当前所点击的位置index 2、响应事件  3、更改焦点的类型   4、移动焦点到当前所点击的按钮上
		{
			console.log("lqt---virtualRemoteForHDMI.js---mouse---CurrentIndex: "+CurrentIndex);
			if(CurrentIndex == 10)
			{
				index = 9;
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			if(CurrentIndex == 12||CurrentIndex == 13||CurrentIndex == 14)
			{
				index = CurrentIndex-2;
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else if(CurrentIndex>=0 && CurrentIndex<=8)
			{
				index = CurrentIndex;
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else
			{
				return;
			}
			
			switch(index)
			{
				
				case 0:
				{
					console.log("lqt---HDMI---1");
					top.g_setting.dispatchKey("0x0031");//1
					break;
				}
				case 1:
				{
					console.log("lqt---HDMI---2");
					top.g_setting.dispatchKey("0x0032");//2
					break;
				}
				case 2:
				{
					console.log("lqt---HDMI---3");
					top.g_setting.dispatchKey("0x0033");//3
					break;
				}
				case 3:
				{
					console.log("lqt---HDMI---4");
					top.g_setting.dispatchKey("0x0034");//4
					break;
				}
				case 4:
				{
					console.log("lqt---HDMI---5");
					top.g_setting.dispatchKey("0x0035");//5
					break;
				}
				case 5:
				{
					console.log("lqt---HDMI---6");
					top.g_setting.dispatchKey("0x0036");//6
					break;
				}
				case 6:
				{
					console.log("lqt---HDMI---7");
					top.g_setting.dispatchKey("0x0037");//7
					break;
				}
				case 7:
				{
					console.log("lqt---HDMI---8");
					top.g_setting.dispatchKey("0x0038");//8
					break;
				}
				case 8:
				{
					console.log("lqt---HDMI---9");
					top.g_setting.dispatchKey("0x0039");//9
					break;
				}
				case 9:
				{
					console.log("lqt---HDMI---0");
					top.g_setting.dispatchKey("0x0030");//0
					
					break;
				}
				case 10:
				{
					console.log("lqt---HDMI---Info");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xF014");//Info
					break;
					
				}
				case 11:
				{
					console.log("lqt---HDMI---Menu");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf012");//Menu
					break;
				}
				case 12:
				{
					console.log("lqt---HDMI---Exit");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf062");//Exit
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
	top.g_channel.testLog("*******>************virtualRemoteForHDMI.js**********************"+index);
	refreshTime();//刷新当前的时间
	switch(index)
	{
		
		
		case 0:
		{
			console.log("lqt---HDMI---1");
			top.g_setting.dispatchKey("0x0031");//1
			break;
		}
		case 1:
		{
			console.log("lqt---HDMI---2");
			top.g_setting.dispatchKey("0x0032");//2
			break;
		}
		case 2:
		{
			console.log("lqt---HDMI---3");
			top.g_setting.dispatchKey("0x0033");//3
			break;
		}
		case 3:
		{
			console.log("lqt---HDMI---4");
			top.g_setting.dispatchKey("0x0034");//4
			break;
		}
		case 4:
		{
			console.log("lqt---HDMI---5");
			top.g_setting.dispatchKey("0x0035");//5
			break;
		}
		case 5:
		{
			console.log("lqt---HDMI---6");
			top.g_setting.dispatchKey("0x0036");//6
			break;
		}
		case 6:
		{
			console.log("lqt---HDMI---7");
			top.g_setting.dispatchKey("0x0037");//7
			break;
		}
		case 7:
		{
			console.log("lqt---HDMI---8");
			top.g_setting.dispatchKey("0x0038");//8
			break;
		}
		case 8:
		{
			console.log("lqt---HDMI---9");
			top.g_setting.dispatchKey("0x0039");//9
			break;
		}
		case 9:
		{
			console.log("lqt---HDMI---0");
			top.g_setting.dispatchKey("0x0030");//0
			
			break;
		}
		case 10:
		{
			console.log("lqt---HDMI---Info");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xF014");//Info
			break;
			
		}
		case 11:
		{
			console.log("lqt---HDMI---Menu");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf012");//Menu
			break;
		}
		case 12:
		{
			console.log("lqt---HDMI---Exit");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf062");//Exit
			break;
		}
		
		default:
		{
			
		}
	}
	
	
	
	
}













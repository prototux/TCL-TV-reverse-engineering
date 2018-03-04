

var temp;

function keyDownForRight()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index+1; //标记移动到的按键的下标
	
	//如果是在最后一个按键上按右键的话，则返回第一个按键。
	if(index>18)
	{
		index = 15;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
	
}




function keyDownForLeft()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index-1; //标记移动到的按键的下标
	
	//如果是在第一个按键  按左键的话， 
	if(index<15)
	{
		index = 18;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
}

function keyDownForDown()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	
	
	//如果是在最后一行 按下键的时候，会超出边界，则做恢复处理
	if(index>=15)
	{
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
	if(index<=18)
	{
		
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
	if(1440<x&&x<1860&&920<y&&y<1010)
	{
		tempIndex = (parseInt(x-(divX+10)))/110 + (parseInt((y-(divY+20))/90))*3;
	}
	
	return parseInt(tempIndex);

}

function keyDownMouseClick(x,y)
{
	refreshTime();//刷新当前的时间
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	console.log("lqt---virtualRemoteForCH.js-----x: "+x);
	console.log("lqt---virtualRemoteForCH.js-----y: "+y);
	
	if(x != undefined && y != undefined)
	{
		var CurrentIndex = transformCoord(parseInt(x),parseInt(y));
		
		if(CurrentIndex != -1)//此时鼠标的确是点击了，某一个按钮。此时：1、得到当前所点击的位置index 2、响应事件  3、更改焦点的类型   4、移动焦点到当前所点击的按钮上
		{
			console.log("lqt---virtualRemoteForCH.js---mouse---CurrentIndex: "+CurrentIndex);
			index = CurrentIndex+15;
				
			changeFocusCSS(index,temp);
			moveFocusXY(index);
			
			console.log("lqt---virtualRemoteForCH.js---mouse---index: "+index);
			
			switch(index)
			{
				
				case 15:
				{
					console.log("lqt---CH---red");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf042");//红
					break;
				}
				case 16:
				{
					console.log("lqt---CH---green");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf043");//绿
					break;
				}
				case 17:
				{
					console.log("lqt---CH---yellow");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf044");//黄
					break;
				}
				case 18:
				{
					console.log("lqt---CH---blue");
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

function keyDownForOK(x,y)
{
	top.g_channel.testLog("*******>************virtualRemoteForCH.js**********************"+index);
	refreshTime();//刷新当前的时间
	
	switch(index)
	{
		
		case 15:
		{
			console.log("lqt---CH---red");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf042");//红
			break;
		}
		case 16:
		{
			console.log("lqt---CH---green");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf043");//绿
			break;
		}
		case 17:
		{
			console.log("lqt---CH---yellow");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf044");//黄
			break;
		}
		case 18:
		{
			console.log("lqt---CH---blue");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf045");//蓝
			break;
		}
		
		default:
		{
			
		}
	}
	
	
	
	
}
































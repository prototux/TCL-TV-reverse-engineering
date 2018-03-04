var temp ;
function keyDownForRight()
{
	temp = index;
	index = index+1; 
	
	if(index>2)
	{
		index = 0;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
	
}




function keyDownForLeft()
{
	temp = index;
	index = index-1;
	
	if(index<0)
	{
		index = 2;
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
		tempIndex = (parseInt(x-(divX+10)))/140 + (parseInt((y-(divY+20))/90))*3;
	}
	
	return parseInt(tempIndex);

}

function keyDownMouseClick(x,y)
{
	top.g_channel.testLog("*******>************virtualRemoteForPVR.js*****keyDownMouseClick*****************"+index);
	
	refreshTime();//刷新当前的时间
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	console.log("lqt---virtualRemoteForPVR.js-----x: "+x);
	console.log("lqt---virtualRemoteForPVR.js-----y: "+y);
	
	if(x != undefined && y != undefined)
	{
		var CurrentIndex = transformCoord(parseInt(x),parseInt(y));
		
		if(CurrentIndex != -1)//此时鼠标的确是点击了，某一个按钮。此时：1、得到当前所点击的位置index 2、响应事件  3、更改焦点的类型   4、移动焦点到当前所点击的按钮上
		{
			index = CurrentIndex;
			console.log("lqt---virtualRemoteForPVR.js---mouse---index: "+index);
			changeFocusCSS(index,temp);
			moveFocusXY(index);
			
			switch(index)
			{
				
				
				case 0:
				{
					console.log("lqt---PVR---stop");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf052");//stop
					break;
				}
				case 1:
				{
					console.log("lqt---PVR---rec");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf056");//rec
					break;
				}
				case 2:
				{
					console.log("lqt---PVR---blue");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf045");//蓝色
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
	top.g_channel.testLog("*******>************virtualRemoteForPVR.js**********************"+index);
	refreshTime();//刷新当前的时间
	switch(index)
	{
		
		
		case 0:
		{
			console.log("lqt---PVR---stop");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf052");//stop
			break;
		}
		case 1:
		{
			console.log("lqt---PVR---rec");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf056");//rec
			break;
		}
		case 2:
		{
			console.log("lqt---PVR---blue");
			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf045");//蓝色
			break;
		}
		
		
		default:
		{
			
		}
	}
	
	
	
	
}
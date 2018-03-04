var temp;
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

function keyDownForDown()
{
	
}

function keyDownForUp()
{
	
}

function transformCoord(x,y)
{
	var tempIndex = -1;
	
	//第一步：得到此整体 DIV 的左上角的 X 、 Y 坐标。
	var divX = document.getElementById("virtualremoteId").offsetLeft;
	var divY = document.getElementById("virtualremoteId").offsetTop;
	
	//判断当前所点击的区域  的坐标的  范围，如果是如下范围，则所点击的标签的宽高已确定--  宽：140  高：90
	if(1440<x&&x<1860&&920<y&&y<1010)
	{
		tempIndex = (parseInt(x-(divX+10)))/140 + (parseInt((y-(divY+20))/90))*3;
	}
	
	return parseInt(tempIndex);

}


function keyDownMouseClick(x,y)
{
	refreshTime();//刷新当前的时间
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	console.log("lqt---virtualRemoteForMedia.js-----x: "+x);
	console.log("lqt---virtualRemoteForMedia.js-----y: "+y);
	
	if(x != undefined && y != undefined)
	{
		var CurrentIndex = transformCoord(parseInt(x),parseInt(y));
		
		if(CurrentIndex != -1)//此时鼠标的确是点击了，某一个按钮。此时：1、得到当前所点击的位置index 2、响应事件  3、更改焦点的类型   4、移动焦点到当前所点击的按钮上
		{
			index = CurrentIndex;
			console.log("lqt---virtualRemoteForMedia.js---mouse---index: "+index);
			changeFocusCSS(index,temp);
			moveFocusXY(index);
			
			
			switch(index)
			{
				
				case 0:
				{
					console.log("lqt---Media---kuaitui");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf059");//快退
					break;
				}
				case 1:
				{
					console.log("lqt---Media---stop");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf052");//停止
					break;
				}
				case 2:
				{
					console.log("lqt---Media---kuaijin");
					hideVirtualRemote();
					top.g_setting.dispatchKey("0xf05a");//快进
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
	switch(index)
	{
		
		case 0:
		{
			console.log("lqt---Media---kuaitui");
//			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf059");//快退
			break;
		}
		case 1:
		{
			console.log("lqt---Media---stop");
//			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf052");//停止
			break;
		}
		case 2:
		{
			console.log("lqt---Media---kuaijin");
//			hideVirtualRemote();
			top.g_setting.dispatchKey("0xf05a");//快进
			break;
		}
		
		default:
		{
			
		}
	}
	
	
	
	
}



























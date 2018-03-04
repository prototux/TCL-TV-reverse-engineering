

var temp;

function keyDownForRight()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index+1; //标记移动到的按键的下标
	
	//如果是在最后一个按键上按右键的话，则返回第一个按键。
	if(index>3)
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
		index = 3;
	}

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
}

function keyDownForDown()
{
	temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index +2;
	
	
	//如果是在最后一行 按下键的时候，会超出边界，不做处理
	if(index>3)
	{
		
	}
	else
	{
		changeFocusCSS(index,temp);
		moveFocusXY(index);
	}
	
	
	
	
	
	
}

function keyDownForUp()
{
	
	temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index -2;
	
	//如果是在第一行 按上键的时候，不作处理
	if(index<0)
	{
		
	}
	else
	{
		changeFocusCSS(index,temp);
		
		moveFocusXY(index);
	}
	
	
	
	
	
	
}


function transformCoord(x,y)
{
	var tempIndex = -1;
	
	//第一步：得到此整体 DIV 的左上角的 X 、 Y 坐标。
	var divX = document.getElementById("virtualremoteId").offsetLeft;
	var divY = document.getElementById("virtualremoteId").offsetTop;
	
	//判断当前所点击的区域  的坐标的  范围，如果是如下范围，则所点击的标签的宽高已确定--  宽：140  高：90
	if(1440<x&&x<1860&&830<y&&y<1010)
	{
		tempIndex = (parseInt(x-(divX+10)))/140 + (parseInt((y-(divY+20))/90))*3;
	}
	
	return parseInt(tempIndex);

}


function keyDownMouseClick(x,y)
{
	top.g_channel.testLog("*******>************virtualRemoteForNetflix.js******keyDownMouseClick****************"+index);
	
	
	refreshTime();//刷新当前的时间
	temp = index;//储存上一个按键的下标值，以做恢复处理
	
	console.log("lqt---virtualRemoteForNetflix.js-----x: "+x);
	console.log("lqt---virtualRemoteForNetflix.js-----y: "+y);
	
	if(x != undefined && y != undefined)
	{
		var CurrentIndex = transformCoord(parseInt(x),parseInt(y));
		
		if(CurrentIndex != -1)//此时鼠标的确是点击了，某一个按钮。此时：1、得到当前所点击的位置index 2、响应事件  3、更改焦点的类型   4、移动焦点到当前所点击的按钮上
		{
			
			console.log("lqt---virtualRemoteForNetflix.js---mouse---CurrentIndex: "+CurrentIndex);
			if(CurrentIndex == 0)
			{
				index = 0;
				
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else if(CurrentIndex == 2)
			{
				index = 1;
				
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else if(CurrentIndex == 3)
			{
				index = 2;
				
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else if(CurrentIndex == 5)
			{
				index = 3;
				
				changeFocusCSS(index,temp);
				moveFocusXY(index);
			}
			else
			{
				return;
			}
			
			console.log("lqt---virtualRemoteForNetflix.js---mouse---index: "+index);
			
			switch(index)
			{
				
				case 0:
				{
					console.log("lqt---NetFlix---play");
					top.g_setting.dispatchKey("0xf051");//play
					break;
				}
				case 1:
				{
					console.log("lqt---NetFlix---pause");
					top.g_setting.dispatchKey("0xf00a");//pause
					break;
				}
				case 2:
				{
					console.log("lqt---NetFlix---kuaitui");
					top.g_setting.dispatchKey("0xf059");//快退
					break;
				}
				case 3:
				{
					console.log("lqt---NetFlix---kuaijin");
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
	top.g_channel.testLog("*******>************virtualRemoteForNetflix.js**********************"+index);
	refreshTime();//刷新当前的时间
	switch(index)
	{
		
		case 0:
		{
			console.log("lqt---NetFlix---play");
			top.g_setting.dispatchKey("0xf051");//play
			break;
		}
		case 1:
		{
			console.log("lqt---NetFlix---pause");
			top.g_setting.dispatchKey("0xf00a");//pause
			break;
		}
		case 2:
		{
			console.log("lqt---NetFlix---kuaitui");
			top.g_setting.dispatchKey("0xf059");//快退
			break;
		}
		case 3:
		{
			console.log("lqt---NetFlix---kuaijin");
			top.g_setting.dispatchKey("0xf05a");//快进
			break;
		}
		
		
		default:
		{
			
		}
	}
	
	
	
	
}






































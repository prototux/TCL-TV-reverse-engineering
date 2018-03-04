
function keyDownForRight()
{
	var temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index+1; //标记移动到的按键的下标
	
	//如果是在最后一个按键上按右键的话，则返回第一个按键。
	if(index>18)
	{
		index = 0;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
	
}




function keyDownForLeft()
{
	var temp = index;//储存上一个按键的下标值，以做恢复处理
	index = index-1; //标记移动到的按键的下标
	
	//如果是在第一个按键  按左键的话， 
	if(index<0)
	{
		index = 18;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
}

function keyDownForDown()
{
	var temp = index;//储存上一个按键的下标值，以做恢复处理
	
	
	
	//如果是在最后一行 按下键的时候，会超出边界，则做恢复处理
	if(index>=15)
	{
	}
	else if(index == 8)
	{
		index = index + 1;
	}
	else if(index == 7||index == 9||index ==11||index == 12||index == 13)
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
	
	var temp = index;//储存上一个按键的下标值，以做恢复处理
	
	
	//如果是在第一行 按上键的时候，不作处理
	if(index<=2)
	{
		
	}
	else if(index == 9||index == 11||index == 14||index == 15)
	{
		index = index -2;
	}
	else if(index == 10)
	{
		index = index -1;
	}
	else if(index == 18)
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

//改变焦点的样式
function changeFocusCSS(index,temp)
{
	
	//移动出的按键  进行恢复处理-----下层焦点-不选
	document.getElementById(sign_id[temp]).setAttribute("class", sign_css_lower[temp]);
	
	//移动到的按键   进行焦点处理-----下层焦点-选中
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_focus_lower[index]);
	
		
	
	//当index<15的时候  更换焦点---上层焦点-选中
	document.getElementById("focusForRemote").setAttribute("class", sign_css_focus_up[index]);
	
}

//移动上层焦点的位置，---改变上层焦点的坐标
function moveFocusXY(index)
{
	//移动焦点---如果是第一个按键，index = 0   不适用通用的公式，做特殊处理
	if(index == 0)
	{
		document.getElementById("focusForRemote").style.left =sign_xy[0] +"px";
		document.getElementById("focusForRemote").style.top =sign_xy[0+1] +"px";
	}
	else
	{
		document.getElementById("focusForRemote").style.left =sign_xy[index*2] +"px";
		document.getElementById("focusForRemote").style.top =sign_xy[index*2+1] +"px";
	}
	
	refreshTime();
}

//删除css的样式
function removeCssTemp()
{
	var lists = document.getElementById("virtualRemote").contentWindow.document.getElementsByTagName("link");
	for ( var i = 0; i < lists.length; i++) 
	{
		if (lists[i].getAttribute("href").indexOf("\.css") != -1) 
		{
			lists[i].parentNode.removeChild(lists[i]);
		}
	}
}

//得到没有操作的时间
function getInoperationTime()
{
	var now = new Date().getTime();
	return now-time_Last;
}

//刷新时间
function refreshTime()
{
	time_Last = new Date().getTime();
}


//恢复默认的状态
function recoverDefaultState()
{
	//移动出的按键  进行恢复处理-----下层焦点-不选
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_lower[index]);
	
	index = 7;
	//初始化 -- 设置 焦点的css
  	changeFocusCSS(index,index);
	
  	//初始化 -- 设置焦点的坐标
	moveFocusXY(index);
	
	
}
//---------------------------鼠标支持----------------------------

function WhenClick(id)
{
	//移动出的按键  进行恢复处理-----下层焦点-不选
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_lower[index]);
     
	 for(var i=0 ; i<sign_id.length;i++)
	 {  
		 if(sign_id[i] == id)
		 {    
			index = i;
		 }
	 }
	 
	 //初始化 -- 设置 焦点的css
	 changeFocusCSS(index,index);
		
	 //初始化 -- 设置焦点的坐标
	 moveFocusXY(index);
     
}










































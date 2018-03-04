function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
		top.stopTimeout();
	top.frames["globleShow"].window.hiddenFactoryHotkey();
	var value = top.panelTestPicture;
	showPanelPicture(value);
}
function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
function $(id)
{
    return document.getElementById(id);
}
/*
document.onkeydown = keyproc;
function keyproc(e)
{
	var key = e.which;
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
		case top.VK_LEFT:
			showPanelPicture(1);
			break;
		case top.VK_UP:
			break;
		case top.VK_RIGHT:
			break;
		case top.VK_DOWN:
			break;
		case top.VK_ENTER:
			break;
		case top.VK_EXIT:
			//exit
			doExit();
			break;
		default:
			break; 
	}
}*/
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
		var msg = evt.which;
		var value = evt.modifiers;
		//全局消息
	switch(msg )
	{
		case top.E_SHOW_PANEL_TEST_PICTURE:
			showPanelPicture(value);
			break;
		case top.E_SHOW_PANEL_TEST_OFF:
			doExit();
			break;
		default:
			break;
		}
}
function showPanelPicture(value)
{
	switch(value)
	{
		case 0:
			$("panel_picture").src = "./image/HD_5CIRCLE_9_1920_1080.jpg";
			break;
		case 1:
			$("panel_picture").src = "./image/80percentwhite.png";
			break;
		case 2:
			$("panel_picture").src = "./image/20percentwhite.png";
			break;
		case 3:
			$("panel_picture").src = "./image/black.png";
			break;
		case 4:
			$("panel_picture").src = "./image/red.png";
			break;
		case 5:
			$("panel_picture").src = "./image/green.png";
			break;
		case 6:
			//$("panel_picture").style.display = "none";
			//document.body.style.background ="rgba(0,0,255,1)";
			//$("panel_picture").style.display = "block";
			$("panel_picture").src = "./image/blue.png";
			break;
		case 7:
			$("panel_picture").src = "./image/TRIANGLEGREY1.jpg";
			break;
		case 8:
			$("panel_picture").src = "./image/WRGB_H256GRAY.jpg";
			break;
		default:
			break;
			
	}
}
function doExit()
{
	document.location.href = "../channelPlay.html";
	top.frames["globleShow"].window.showHotkey();
}


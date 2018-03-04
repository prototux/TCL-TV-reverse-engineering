


var title = top.miracastTitle;
var remind=top.miracastRemind;
function $(id)
{
    return document.getElementById(id);
}
var setting = top.g_setting;

document.onnotify = notifyProcess;
function notifyProcess(evt)
{ 
	 var msg = evt.which;
	 var param = evt.modifiers;
	//全局消息
	switch(msg)
	{
		case top.E_WFD_STATUS:
		{
			switch(param)
			{
				case 0:
				case 1:
				break;
				case 2:
				case 3:
				$("miraRemind").innerHTML=remind[2];
				break;
				case 4:
				top.$("main").style.display="none";
				top.$("operatePage").style.display="none";
				top.$("otherPage").style.display="none";
				break;
				case 5:
				setting.stopMiracast();
  		                $("miraRemind").innerHTML=remind[1];
				top.$("main").style.display="block";
				top.$("operatePage").style.display="block";
				top.$("otherPage").style.display="block";
				if(top.g_temp == "homePage")
				{
					top.$("operatePage").src = "";
					top.main.focus();
					 top.setFrameFocusPage("main");
				}
				else
				{
					//top.focusToIndexHtml(1);
				  	top.$("main").style.display="none";
					setting.startMiracast();          
				}
				break;
				case 11:
				break;
				default:
				break;
			}
		}
	default:
			top.systemEventProc(evt);
			break;
	}
}

document.onkeydown = keyproc
function keyproc(evt)
{
		var ret = true;
		var keycode = evt.which;
		switch (keycode)
		{
			case top.VK_ENTER:
			{
				ret = false;
				break;
			}
			case top.VK_BACK: //back
			case top.VK_MENU: //menu
			case top.VK_EXIT:
			top.$("main").style.display="block";
		    top.$("operatePage").style.display="block";
		    top.$("otherPage").style.display="block";
			if(top.g_temp == "homePage")
			{
				top.$("operatePage").src = "";
				top.main.focus();
				 top.setFrameFocusPage("main");
			}
			else if(top.g_temp == "miracast")
			{
				top.$("operatePage").src = "";
				top.main.focus();
				top.setFrameFocusPage("main");				
			}
			else
			{
				top.focusToIndexHtml(1);
			}
			break;
			case top.VK_VOLUME_DOWN:
			if(top.g_volume_visible == 0)
			{
				top.$('globleShow').contentWindow.initVolume();
				top.clearVolumeTimer();
			}
			top.g_volume_visible = 1;
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
			showVolume(-1);
			top.$("globleShow").contentWindow.setVolumeByType(top.$("globleShow").contentWindow.curVolumeType,top.$("globleShow").contentWindow.volume);
			break;
			case top.VK_VOLUME_UP:
			if(top.g_volume_visible == 0)
			{
				top.$('globleShow').contentWindow.initVolume();
				top.clearVolumeTimer();
			}
			top.g_volume_visible = 1;
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
			showVolume(1);
			top.$("globleShow").contentWindow.setVolumeByType(top.$("globleShow").contentWindow.curVolumeType,top.$("globleShow").contentWindow.volume);
			break;
			case top.VK_POWER:
			case top.VK_MUTE:
			top.keyDownProcess(evt);
			break;
			default:
			{
				break;
			}
		}
		return ret;
}
function hideVolume()
{
	top.keySetForUI(0);
	top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "none";    
	top.g_volume_visible = 0;
}
function clearVolumeTimer()
{
	 clearTimeout(top.g_volume_timer);
}
function startVolumeTimer()
{
	top.g_volume_timer = setTimeout("hideVolume()",3000);
}
function showVolume(distance)
{
	clearVolumeTimer();
	if(distance>0&&top.mute_status>0)
	{
		top.showMute(0);
	}
	if (top.g_volume_visible)
	{
		top.$("globleShow").contentWindow.volume += distance;
		if(top.$("globleShow").contentWindow.volume < 0)
		{
			top.$("globleShow").contentWindow.volume = 0;
		}
		else if(top.$("globleShow").contentWindow.volume > top.$("globleShow").contentWindow.maxVolume)
		{
			top.$("globleShow").contentWindow.volume = top.$("globleShow").contentWindow.maxVolume;
		}
		
		top.$("globleShow").contentWindow.$("adjustProgBar").getElementsByTagName("div")[0].style.width = parseInt(top.$("globleShow").contentWindow.volume*9) + "px";
		top.$("globleShow").contentWindow.$("adjustProgBar").getElementsByTagName("div")[2].style.width = parseInt((100-top.$("globleShow").contentWindow.volume)*9) + "px";
	}
	else
	{
		top.$("globleShow").contentWindow.$("adjustProgBar").getElementsByTagName("div")[0].style.width = parseInt(top.$("globleShow").contentWindow.volume*9) + "px";
		top.$("globleShow").contentWindow.$("adjustProgBar").getElementsByTagName("div")[2].style.width = parseInt((100-top.$("globleShow").contentWindow.volume)*9) + "px";
		top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
		top.g_volume_visible = 1;
	}
	
	top.$("globleShow").contentWindow.$("adjustProgValue").innerHTML = top.$("globleShow").contentWindow.volume;
	startVolumeTimer();
}
function init()
{
	top.clearMyTimeout();
	$("miraTitle").getElementsByTagName("span")[0].innerHTML=title[0];
	$("miraContent").innerHTML=remind[0];
	$("miraBottom").innerHTML=setting.miracastInfo;//title[1];
	if(setting.startMiracast())
	{
		$("miraRemind").innerHTML=remind[1];
	}
	else
	{
		if(top.g_temp == "homePage")
		{
			top.$("main").style.display = "block";
			top.$("operatePage").src = "";
			top.main.focus();
			 top.setFrameFocusPage("main");
		}
		else
		{
			top.focusToIndexHtml(1);
		}
	}
	addMouseListener();
}
function uninit()
{
	top.$("main").style.display="block";
	top.$("operatePage").style.display="block";
	top.$("otherPage").style.display="block";
	setting.stopMiracast();
	hideVolume();
	if(top.g_temp != "homePage")
	{
		top.clearMyTimeout();
	}
	else
	{
		if(setting.isHDScreen==1)
		{
			setting.scaleVideoWindow(130,240,610,344);
		}
		else
		{
			setting.scaleVideoWindow(90,170,440,240);
		}
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2) 
		{
			top.$("main").style.display="block";
		    top.$("operatePage").style.display="block";
		    top.$("otherPage").style.display="block";
			if(top.g_temp == "homePage")
			{
				top.$("operatePage").src = "";
				top.main.focus();
				 top.setFrameFocusPage("main");
			}
			else
			{
				top.focusToIndexHtml(1);
			}
		}
	}
}

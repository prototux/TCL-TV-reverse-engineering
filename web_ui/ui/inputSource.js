top.keySetForUI(1); 
var sourceTitle 		= top.sourceOptions;
var sourceList;
var borderColor 		= ["thin solid #000","thin solid #F00"];
var channel 			= top.g_channel;
var setting				= top.g_setting;

var source 				= channel.inputSource;//当前信源
var sourceChange_timer 	= setTimeout(function() {
		doExit();
	}, 5000);
var positionH			=0;
var prePositionH              =0;
var pressSourceTimer 	= 0;
document.onnotify 		= notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	
    switch(msg)
    {
		case top.E_TV_EXCHANGE_END://source change finish
		{
			timeReturn();
            break;
		}
		default:
		{
			top.systemEventProc(evt);
			break;
		}
    }
}
document.onkeydown = keyDownProcess;
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			if(pressSourceTimer!=0)
			{
				clearTimeout(pressSourceTimer);
				pressSourceTimer=0;
				toOk();
			}
			toUp();
			ret = false;
			break;
		}
		case top.VK_DOWN:
		{
			if(pressSourceTimer!=0)
			{
				clearTimeout(pressSourceTimer);
				pressSourceTimer=0;
				toOk();
			}
			toDown();
			ret = false;
			break;
		}
		case top.VK_ENTER:
		{
			if(pressSourceTimer!=0)
			{
				clearTimeout(pressSourceTimer);
				pressSourceTimer=0;
			}
			toOk();
			ret = false;
			break;
		}
		case top.VK_SOURCE:
		{
			toDown();
			if(pressSourceTimer!=0)
			{
				clearTimeout(pressSourceTimer);
				pressSourceTimer=0;
			}
			pressSourceTimer=setTimeout(function()
			{
			toOk();
			pressSourceTimer=0;
			},800);
			break;
		}
		case top.VK_MENU:
		case top.VK_BACK: //back
			doExit();
			ret = false;
			break;
		case top.VK_VIRTUAL_REMOTE:
		{
			break;
		}
		default:
			top.keyDownProcess(evt);
		break;
	}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}
function showSourcePageDown()
{
	for(var i=0 ; i<5 ; i++)
	{
		sourceList[i].style.display="none";
	}
	for(var i=5 ; i<7 ; i++)
	{
		sourceList[i].style.display="block";
	}
}
function showSourcePageUp()
{
	for(var i=0 ; i<5 ; i++)
	{
		sourceList[i].style.display="block";
	}
	for(var i=5 ; i<7 ; i++)
	{
		sourceList[i].style.display="none";
	}
}
function toDown()
{
    timeReturn();
	positionH++;
	if(positionH>=7)
	{
		positionH = 0;
	}
	$("inputSourceFocus").style.top=1+positionH*132+"px";
	top.doEleScrForNoOption(inputNameSpans,positionH, 1);
}
function toUp()
{
	timeReturn();
	positionH--;
	if(positionH<0)
	{
		positionH = 6;
	}
	$("inputSourceFocus").style.top=1+positionH*132+"px";
	top.doEleScrForNoOption(inputNameSpans,positionH, -1);
}
function switchSource()
{
	switch(positionH)
	{
		case 0:
		if(source!=1&&source!=0)
		{
			if(top.recordStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
				top.$('main').src = "pvr/Pvr.html?inputsource&1";
				return;
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?inputsource&1";
				return;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			source=1;
			channel.inputSource=1;
		}
		break;
		case 1:
		if(source!=11&&source!=2&&source!=3)
		{
			if(top.recordStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
				top.$('main').src = "pvr/Pvr.html?inputsource&11";
				return;
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?inputsource&11";
				return;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			source=11;
			channel.testLog("source"+source);
			channel.inputSource=11;
		}
		break;
		case 2:
		if(source!=4)
		{
			if(top.recordStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
				top.$('main').src = "pvr/Pvr.html?inputsource&4";
				return;
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?inputsource&4";
				return;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			source=4;
			channel.inputSource=4;
		}
		break;
		case 3:
		if(source!=6)
		{
			if(top.recordStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
				top.$('main').src = "pvr/Pvr.html?inputsource&6";
				return;
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?inputsource&6";
				return;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			source=6;
			channel.inputSource=6;
		}
		break;
		case 4:
		if(source!=7)
		{
			if(top.recordStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
				top.$('main').src = "pvr/Pvr.html?inputsource&7";
				return;
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?inputsource&7";
				return;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			source=7;
			channel.inputSource=7;
		}
		break;
		case 5:
		if(source!=8)
		{
			if(top.recordStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
				top.$('main').src = "pvr/Pvr.html?inputsource&8";
				return;
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?inputsource&8";
				return;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			source=8;
			channel.inputSource=8;
		}
		break;
		case 6:
		if(source!=12)
		{
			if(top.recordStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenRecord();
				top.$('main').src = "pvr/Pvr.html?inputsource&12";
				return;
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.$("globleShow").contentWindow.hiddenTimeShift();
				top.$('main').src = "pvr/timeshift.html?inputsource&12";
				return;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			source=12;
			channel.inputSource=12;
		}
		break;
		default:
			break;
	}
	top.g_isShowInfoBar = 1;
	doExit();
}	

function toOk()
{
	try
	{
	console.log("positionH=="+positionH);
	if(sourceChange_timer)
	{
		clearTimeout(sourceChange_timer);
	}
	console.log("g_temp=="+top.g_temp);
	$("inputSourceBgBar").style.display = "none";
	
	if(positionH != prePositionH)
	{
	 	top.$("globleShow").contentWindow.hiddenGlassRemind();
	}
	setTimeout("switchSource()",1);
	}catch(er)
	{
		console.log("er:"+er);
	}
}
function doExit()
{
	if(top.g_temp == "homePage")
	{
		top.$("main").contentWindow.focusType= top.$("main").contentWindow.preFocusType;
		top.$('operatePage').src="";
		top.$("main").contentWindow.showCurrentChannelInfo();
	}
	else
	{
		top.jumpPage();
	}
}
var inputNameSpans;
function init()
{
	//面板按键处理场景设置
	top.clearMyTimeout();
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	
	$("Title").innerHTML=top.others[26];
	sourceList=$("inputSourceBgBar").getElementsByTagName("div");
	var spans=$("inputSourceBgBar").getElementsByTagName("span");
	inputNameSpans = $("inputSourceBgBar").getElementsByClassName("inputSouceName");
	if(top.g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "EU") == "AU")//Austrulia platform
	{
		sourceList[2].style.background = "url(images/Icon-Sourse_AV.png)";
	}
	for(var i=0;i<7;i++)
	{
		switch(i)
		{
			case 0:
			spans[i+1].innerHTML=sourceTitle[i];
			break;
			case 1:
			var inputName = channel.inputSourceDeviceName(11);
			if(inputName!=0)
			{
				spans[i+1].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[i+1].innerHTML=sourceTitle[i];
			}
			break;
			case 2:
			var inputName = channel.inputSourceDeviceName(4);
			if(inputName!=0)
			{
				spans[i+1].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[i+1].innerHTML=sourceTitle[i];
			}
			break;
			case 3:
				var inputName = channel.inputSourceDeviceName(6);
			if(inputName!=0)
			{
				spans[i+1].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[i+1].innerHTML=sourceTitle[i];
			}
			break;
			case 4:
				var inputName = channel.inputSourceDeviceName(7);
			if(inputName!=0)
			{
				spans[i+1].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[i+1].innerHTML=sourceTitle[i];
			}
			break;
			case 5:
				var inputName = channel.inputSourceDeviceName(8);
			if(inputName!=0)
			{
				spans[i+1].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[i+1].innerHTML=sourceTitle[i];
			}
			break;
			case 6:
				var inputName = channel.inputSourceDeviceName(12);
			if(inputName!=0)
			{
				spans[i+1].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[i+1].innerHTML=sourceTitle[i];
			}
			break;
		}
	}

	switch(source)
	{
		case 0:
		case 1:
		positionH=0;
		break;
		case 2:
		case 3:
		case 11:
		positionH=1;
		break;
		case 4:
		positionH=2;
		break;
		case 6:
		positionH=3;
		break;
		case 7:
		positionH=4;
		break;
		case 8:
		positionH=5;
		break;
		case 12:
		positionH=6;
		break;
	}
	prePositionH = positionH;
	$("inputSourceFocus").style.top=1+positionH*132+"px";
	addMouseListener();
	top.doEleScrForNoOption(inputNameSpans,positionH, 0);
}
function timeReturn()
{
	if(sourceChange_timer)
	{
		clearTimeout(sourceChange_timer);
	}
	sourceChange_timer = setTimeout(function() {
		doExit();
	}, 5000);
}
function uninit()
{
	if(top.g_temp == "homePage")
	{
		top.$("operatePage").style.display = "block";
	}
	else
	{
		top.$("main").style.display = "block";
	}
	//将快捷键进入该页面的状态清除
	top.g_isUsedHotKeyToIntoPage = 0;
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2)doExit();//right key
	};
	var divs=$("inputSourceBgBar").getElementsByTagName("div");
	for(var i = 0; i < 7; i++)
	{
		divs[i+1].setAttribute("newAttr",i);
		divs[i+1].onmousedown = function(evt){
			if(evt.button == 0){//left key
					positionH = parseInt(this.getAttribute("newAttr"));
					$("inputSourceFocus").style.top=1+positionH*132+"px";
					toOk();
			}
		};
	}
}

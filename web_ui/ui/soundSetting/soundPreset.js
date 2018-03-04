/******************** created by chenhua ***********************/
var soundPresetTitleWords 		= [top.souOptions[0], top.souOptions[0], top.souPresetPara[0],
								   top.souPresetPara[1], top.souPresetPara[2], top.souPresetPara[3],
								   top.souPresetPara[4], top.souPresetPara[5], top.souPresetPara[6],
								   top.souPresetPara[7], top.souOptions[4], top.souPresetPara[9],
								   top.souPresetPara[11], top.souPresetPara[10]];
var soundPresetModeWords 		= [top.souPreset[0], top.souPreset[1], top.resetStadium,
								   top.souPreset[3], top.souPreset[4], top.audioDescriptionOptions[1]];
var soundOffToHigh					= [top.level[0],top.level[1],top.level[3],top.level[2]];
var mediaIntelligenceWords				= top.offOn;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var inteligenteqwords			=[top.offOn[0],top.netWlessSecu[0],top.inteligenteqoptions[0],top.inteligenteqoptions[1]];
var soundPreset					= 0;
var soundPresetProgress			= new Array(11);
var focusOn 					= "menu"; 				//menu,preset
var list_position_h				= 0;
var form_position_h				= 0;

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 500;	
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
var focus_R_Focus           = ["../images/arrow/focus_R-Focus.png", "../images/arrow/R-Focus.png"];
var menuList =[
{name:"titlename",showFlag:0},
{name:"Sound preset",showFlag:1},
{name:"100Hz",showFlag:0},
{name:"300Hz",showFlag:0},
{name:"1KHz",showFlag:0},
{name:"3KHz",showFlag:0},
{name:"10KHz",showFlag:0},
{name:"surround virtualizer",showFlag:1},
{name:"dialog enhancer",showFlag:1},
{name:"bass enhancer",showFlag:1},
{name:"Auto volume control",showFlag:1},
{name:"Media intelligence",showFlag:1},
{name:"Inteligent EQ",showFlag:1},
{name:"Graphic EQ",showFlag:1},
];

var footballMode = 0;//[0]off [1]on


document.onnotify 				= notifyProcess;
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
        case top.E_HP_PLUGIN:
            top.jumpPage();
            break;
        case top.E_HP_PLUGOUT:
            top.jumpPage();
            break;
        default:
			top.systemEventProc(evt);
			break;
	}
}
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
			if(footballMode) return;
			toUp();
			ret = false;
			break;
		case top.VK_DOWN:
			if(footballMode) return;
			toDown();
			ret = false;
			break;
		case top.VK_ENTER:
			if(footballMode) return;
			doEnter();
			ret = false;
			break;
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;  
		case top.VK_RIGHT:
			if(footballMode) return;
			toRight();
			ret = false;
			break;
		case top.VK_BACK:
			toBack();
			break;
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

function toDown()
{
	if(focusOn == "menu")
	{
		/*if(soundPreset!=4) return;*/
		switch(soundPreset)
			{
				case 5:
					if(list_position_h >= 3)
					{
						list_position_h = 0;
					}
					else
					{
						list_position_h++;
					}
					break;
				case 3:
					break;
				default:
					if(list_position_h >= 7)
					{
						list_position_h = 0;
					}
					else
					{
						list_position_h++;
					}
					break;
			}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
		
	}
	else if(focusOn == "preset")
	{
		if(form_position_h >= 5) 
		{	
            form_position_h = 0;
		} 
		else 
		{
			form_position_h++;
		}

        setting.previewSoundEffectMS12(form_position_h);
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "surround"||focusOn=="dialog"||focusOn=="intelligent"||focusOn=="bass"||focusOn=="inteligentEQ")
	{
		if(form_position_h >= 3) 
		{	
            		form_position_h = 0;
		} 
		else 
		{
			form_position_h++;
		}
        switch(focusOn)
        {
            case "surround":
            setting.previewSurroundVirtualizerMS12(form_position_h);
            break;
            case "dialog":
            setting.previewDialogEnhancerMS12(form_position_h);
            break;
            case "intelligent":
            setting.previewIntelligentLoudnessMS12(form_position_h);
            break;
            case "bass":
            setting.previewBassEnhancerMS12(form_position_h);
            break;
            case "inteligentEQ":
            setting.previewIntelligentEQMS12(form_position_h);
            break;
			
        }		
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "media")
	{
		if(form_position_h) 
		{	
            		form_position_h = 0;
		} 
		else 
		{
			form_position_h++;
		}
    setting.previewMediaIntelligenceMS12(form_position_h);		
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
}
function toUp()
{
	if(focusOn == "menu")
	{
		/*if(soundPreset!=4) return;*/
		switch(soundPreset)
			{
				case 5:
					if(list_position_h <= 0)
					{
						list_position_h = 3;
					}
					else
					{
						list_position_h--;
					}
					break;
				case 3:
					break;
				default:
					if(list_position_h <= 0)
					{
						list_position_h = 7;
					}
					else
					{
						list_position_h--;
					}
					break;
			}
		
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "preset")
	{
		if(form_position_h <= 0) 
		{	
            form_position_h = 5;
		} 
		else 
		{
			form_position_h--;
		}

        setting.previewSoundEffectMS12(form_position_h);
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "surround"||focusOn=="dialog"||focusOn=="intelligent"||focusOn=="bass"||focusOn=="inteligentEQ")
	{
		if(form_position_h <= 0) 
		{	
            		form_position_h = 3;
		} 
		else 
		{
			form_position_h--;
		}
	        switch(focusOn)
	        {
	            case "surround":
	            setting.previewSurroundVirtualizerMS12(form_position_h);
	            break;
	            case "dialog":
	            setting.previewDialogEnhancerMS12(form_position_h);
	            break;
	            case "intelligent":
	            setting.previewIntelligentLoudnessMS12(form_position_h);
	            break;
	            case "bass":
	            setting.previewBassEnhancerMS12(form_position_h);
	            break;
	            case "inteligentEQ":
	            setting.previewIntelligentEQMS12(form_position_h);
	            break;
				
	        }		
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "media")
	{
		if(form_position_h) 
		{	
            		form_position_h = 0;
		} 
		else 
		{
			form_position_h++;
		}
    setting.previewMediaIntelligenceMS12(form_position_h);			
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
}
function doEnter()
{
	if(focusOn == "menu")
	{
		switch(findRealPosition(list_position_h))
			{
				case 1:
					$("thdListFocus").src=mainFocus[1];
					initPresetForm();
					form_position_h = soundPreset;
					var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
					var leftOffset = 778;
					top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundPresetModeWords,6,form_position_h,0);
					focusOn = "preset";
					break;
				case 7:
					$("thdListFocus").src=mainFocus[1];
					form_position_h = soundPresetProgress[5];
					var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
					var leftOffset = 778;
					top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundOffToHigh,4,form_position_h,0);
					focusOn = "surround";
					break;
				case 8:
					$("thdListFocus").src=mainFocus[1];
					form_position_h = soundPresetProgress[6];
					var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
					var leftOffset = 778;
					top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundOffToHigh,4,form_position_h,0);
					focusOn = "dialog";
					break;
				case 9:
					$("thdListFocus").src=mainFocus[1];
					form_position_h = soundPresetProgress[7];
					var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
					var leftOffset = 778;
					top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundOffToHigh,4,form_position_h,0);
					focusOn = "bass";
					break;
				case 10:
					$("thdListFocus").src=mainFocus[1];
					form_position_h = soundPresetProgress[8];
					var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
					var leftOffset = 778;
					top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundOffToHigh,4,form_position_h,0);
					focusOn = "intelligent";
					break;
				case 11:
					$("thdListFocus").src=mainFocus[1];
					form_position_h = soundPresetProgress[9];
					var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
					var leftOffset = 778;
					top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,mediaIntelligenceWords,2,form_position_h,0);
					focusOn = "media";
					break;
				case 12:
					$("thdListFocus").src=mainFocus[1];
					form_position_h = soundPresetProgress[10];
					var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
					var leftOffset = 778;
					top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,inteligenteqwords,4,form_position_h,0);
					focusOn = "inteligentEQ";
					break;					
				case 13:
					parent.jumpPage(3,"soundSetting/graphicEQ/graphicEQ.html");
					break;					

			}

		
	}
	else if(focusOn == "preset")
	{
		$("thdListFocus").src=mainFocus[0];
		soundPreset = form_position_h;
		//channel.testLog("before set sound preset soundPreset = " + soundPreset);
		setting.soundPresetMS12 = soundPreset;
		//channel.testLog("after set sound preset setting.soundPreset = " + setting.soundPreset);
		$("soundPresetStatus").innerHTML = soundPresetModeWords[soundPreset];
		initProgressByPreset(soundPreset);
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "surround")
	{
		$("thdListFocus").src=mainFocus[0];
		soundPresetProgress[5]= form_position_h;
		refreshPresetProgress(1,soundPresetProgress[5]);
		$("surroundVirStatus").innerHTML = soundOffToHigh[soundPresetProgress[5]];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "dialog")
	{
		$("thdListFocus").src=mainFocus[0];
		soundPresetProgress[6]= form_position_h;
		refreshPresetProgress(2,soundPresetProgress[6]);
		$("dialogEnhanceStatus").innerHTML = soundOffToHigh[soundPresetProgress[6]];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "bass")
	{
		$("thdListFocus").src=mainFocus[0];
		soundPresetProgress[7]= form_position_h;
		refreshPresetProgress(3,soundPresetProgress[7]);
		$("bassEnhanceStatus").innerHTML = soundOffToHigh[soundPresetProgress[7]];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "intelligent")
	{
		$("thdListFocus").src=mainFocus[0];
		soundPresetProgress[8]= form_position_h;		
		refreshPresetProgress(4,soundPresetProgress[8]);
		$("intelligentStatus").innerHTML = soundOffToHigh[soundPresetProgress[8]];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "media")
	{
		$("thdListFocus").src=mainFocus[0];
		soundPresetProgress[9]= form_position_h;		
		refreshPresetProgress(5,soundPresetProgress[9]);
		$("mediaStatus").innerHTML = mediaIntelligenceWords[soundPresetProgress[9]];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn=="inteligentEQ")
	{
		$("thdListFocus").src=mainFocus[0];
		soundPresetProgress[10]= form_position_h;		
		refreshPresetProgress(6,soundPresetProgress[10]);
		$("inteligentEQ").innerHTML = inteligenteqwords[soundPresetProgress[10]];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "preset")
	{

    setting.previewSoundEffectMS12(soundPreset);
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "surround"||focusOn=="media"||focusOn=="dialog"||focusOn=="intelligent"||focusOn=="bass"||focusOn=="inteligentEQ")
	{
        switch(focusOn)
        {
            case "surround":
            setting.previewSurroundVirtualizerMS12(soundPresetProgress[5]);
            break;
            case "dialog":
            setting.previewDialogEnhancerMS12(soundPresetProgress[6]);
            break;
            case "intelligent":
            setting.previewBassEnhancerMS12(soundPresetProgress[7]);
            break;
            case "bass":
            setting.previewIntelligentLoudnessMS12(soundPresetProgress[8]);
            break;
            case "media":
            setting.previewMediaIntelligenceMS12(soundPresetProgress[9]);
            break;    
            case "inteligentEQ":
            setting.previewIntelligentEQMS12(soundPresetProgress[9]);
            break;            
			
        }		
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}	
}
function toLeft()
{
	toBack();
}
function toRight()
{
	doEnter();
}
function updatePresetStatus(soundPresetmode)
{
	soundPreset=soundPresetmode;
	$("soundPresetStatus").innerHTML = soundPresetModeWords[soundPresetmode];
}

/*
描述：初始化preset列表框
参数：
全局变量：listFormLiList；soundPreset；form_position_h
*/
function initPresetForm()
{
	form_position_h = soundPreset;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundPresetModeWords,6,form_position_h,0);
}
function findRealPosition(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{	
			return i;
		}
	}
}
function findRelativePosition(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(i==postion)
		{	
			return num;
		}
	}
}

/*
描述：刷新preset中某一项进度
参数：position：要刷新的进度条的位置；progress：进度数
全局变量：
*/
function refreshPresetProgress(position,progress)
{
	var eq1,eq2,eq3,eq4,eq5=0;	
	if(soundPreset != 4)
	{
		eq1= setting.graphicEQ200HZMS12;
		eq2 = setting.graphicEQ750HZMS12;
		eq3 = setting.graphicEQ2KHZMS12;
		eq4 = setting.graphicEQ5KHZMS12;
		eq5 = setting.graphicEQ15KHZMS12;
	}
	
	switch(position)
	{
		case 1:
			setting.surroundVirtualizerMS12 = progress;
			break;
		case 2:
			setting.dialogEnhancerMS12 = progress;
			break;
		case 3:
			setting.bassEnhancerMS12 = progress;
			break;
		case 4:
			setting.intelligentLoudnessMS12 = progress;
			break;
		case 5:
			setting.mediaIntelligenceMS12 = progress;
			break;
		case 6:
			setting.intelligentEQMS12 = progress;
			break;
			
		default:
			break;
	}
	if(soundPreset != 4)
	{
		setting.graphicEQ200HZMS12=eq1;
		setting.graphicEQ750HZMS12=eq2;
		setting.graphicEQ2KHZMS12=eq3;
		setting.graphicEQ5KHZMS12=eq4;
		setting.graphicEQ15KHZMS12=eq5;	
		soundPreset = 4;
		$("soundPresetStatus").innerHTML = soundPresetModeWords[soundPreset];		
	}
	
	initProgressByPreset(soundPreset);
}

/*
描述：由于soundPreset选线的改变而刷新所有相关的进度
参数：soundP：soundPreset
全局变量：soundPresetProgress;
*/
function initProgressByPreset(soundP)
{
	soundPresetProgress[0] = setting.graphicEQ200HZMS12;
	soundPresetProgress[1] = setting.graphicEQ750HZMS12;
	soundPresetProgress[2] = setting.graphicEQ2KHZMS12;
	soundPresetProgress[3] = setting.graphicEQ5KHZMS12;
	soundPresetProgress[4] = setting.graphicEQ15KHZMS12;
	soundPresetProgress[5]=setting.surroundVirtualizerMS12;
	soundPresetProgress[6]=setting.dialogEnhancerMS12;
	soundPresetProgress[7]=setting.bassEnhancerMS12;
	soundPresetProgress[8]=setting.intelligentLoudnessMS12;
	soundPresetProgress[9]=setting.mediaIntelligenceMS12;
	soundPresetProgress[10]=setting.intelligentEQMS12;

	if(soundP==5)
	{
		for(var i = 7; i < 14; i++)
		{
	    	thdMenuRightLiList[i].style.display = "block";
			menuList[i].showFlag=1;		
		}
		thdMenuRightLiList[7].style.display = "none";
		thdMenuRightLiList[8].style.display = "none";
		thdMenuRightLiList[10].style.display = "none";
		thdMenuRightLiList[12].style.display = "none";
		menuList[7].showFlag=0;			
		menuList[8].showFlag=0;			
		menuList[10].showFlag=0;			
		menuList[12].showFlag=0;			

	}
	else if(soundP==3)
	{
		for(var i = 7; i < 14; i++)
		{
	    	thdMenuRightLiList[i].style.display = "none";
			menuList[i].showFlag=0;		
		}
	}
	else
	{
		for(var i = 7; i < 14; i++)
		{
	   		thdMenuRightLiList[i].style.display = "block";
			menuList[i].showFlag=1;							 
		}
	}
	$("100PgreLeft").style.width = parseInt(soundPresetProgress[0]*PROGRESS_WIDTH/100,10) + "px";
	$("100PgreRight").style.width = parseInt((100 - soundPresetProgress[0])*PROGRESS_WIDTH/100,10) + "px";
	$("100Value").innerHTML = soundPresetProgress[0];
	
	$("300PgreLeft").style.width = parseInt(soundPresetProgress[1]*PROGRESS_WIDTH/100,10) + "px";
	$("300PgreRight").style.width = parseInt((100 - soundPresetProgress[1])*PROGRESS_WIDTH/100,10) + "px";
	$("300Value").innerHTML = soundPresetProgress[1];
	
	$("1KPgreLeft").style.width = parseInt(soundPresetProgress[2]*PROGRESS_WIDTH/100,10) + "px";
	$("1KPgreRight").style.width = parseInt((100 - soundPresetProgress[2])*PROGRESS_WIDTH/100,10) + "px";
	$("1KValue").innerHTML = soundPresetProgress[2];
	
	$("3KPgreLeft").style.width = parseInt(soundPresetProgress[3]*PROGRESS_WIDTH/100,10) + "px";
	$("3KPgreRight").style.width = parseInt((100 - soundPresetProgress[3])*PROGRESS_WIDTH/100,10) + "px";
	$("3KValue").innerHTML = soundPresetProgress[3];
	
	$("10KPgreLeft").style.width = parseInt(soundPresetProgress[4]*PROGRESS_WIDTH/100,10) + "px";
	$("10KPgreRight").style.width = parseInt((100 - soundPresetProgress[4])*PROGRESS_WIDTH/100,10) + "px";
	$("10KValue").innerHTML = soundPresetProgress[4];
	
	$("surroundVirStatus").innerHTML		= soundOffToHigh[soundPresetProgress[5]];
	$("dialogEnhanceStatus").innerHTML		= soundOffToHigh[soundPresetProgress[6]];
	$("bassEnhanceStatus").innerHTML		= soundOffToHigh[soundPresetProgress[7]];
	$("intelligentStatus").innerHTML		= soundOffToHigh[soundPresetProgress[8]];
	$("mediaStatus").innerHTML		= mediaIntelligenceWords[soundPresetProgress[9]];
	$("inteligentEQ").innerHTML		= inteligenteqwords[soundPresetProgress[10]];
}

var thdMenuRightSpanList;
var thdMenuRightLiList;
var thdMenuRightArrowList;
var listFormLiList;
var progressContainerClassList;
var listFirstSpans;
function init()
{
	footballMode = setting.footballMode;

	timeoutInit();
	progressContainerClassList = $("thdMenuRight").getElementsByClassName("progressContainer");
	soundPreset	= setting.soundPresetMS12;
	
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	thdMenuRightArrowList = $("thdMenuRight").getElementsByClassName("listThirdPropertyImg");

	for(var i=2;i<7;i++)
		thdMenuRightLiList[i].style.display = "none";
	for(var i = 0; i < 14; i++)
	{
		thdMenuRightSpanList[i].innerHTML = soundPresetTitleWords[i];
	}
	$("thdListFocus").src = footballMode ? mainFocus[1] : mainFocus[0];
	for(var i = 0; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightLiList[i].style.color = footballMode ? "#666" : "#FFF";
	}
	for(var i = 0; i < thdMenuRightArrowList.length; i++)
	{
		thdMenuRightArrowList[i].src = footballMode ? focus_R_Focus[1] : focus_R_Focus[0];
	}
	
	$("soundPresetStatus").innerHTML = soundPresetModeWords[soundPreset];
	//$("soundPresetStatus").style.color = footballMode ? "#666" : "#FFF";
	initProgressByPreset(soundPreset);
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	listFormLiList = $("listForm").getElementsByTagName("li");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
}

function uninit()
{
    //maybe be previewed,need to resume

    setting.previewSoundEffectMS12(soundPreset);
}

var PROGRESS_START_LEFT_OFFSET = 0 + 44 + 120;//进度条容器开始位置相对于framework的左偏移
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}

	for(var i = 0; i <= 13; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu" && !footballMode)
				{
					list_position_h=findRelativePosition(parseInt(this.getAttribute("newAttr")));
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}	

	for(var i = 0; i < 6; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "preset" || focusOn == "surround" || focusOn == "dialog"
					||focusOn == "bass" || focusOn == "intelligent" || focusOn == "media"|| focusOn == "inteligentEQ")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
}




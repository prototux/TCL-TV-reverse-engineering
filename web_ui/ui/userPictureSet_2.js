function change3DMode(curPic3DMode)
{
	pic3DMode = curPic3DMode;
	updatePicture("pic3D");	
}
function changeEnergySaving(curEnerSave)
{
	energySaveStatus = curEnerSave;
	updatePicture("ecoSetting");
}
var showPromptContTimer =0;
function showPromptCont()//显示提示语内容函数
{
	if(focusType=="pictureList"&&parent.currentShowMenu==1)
	{
		clearTimeout(showPromptContTimer);
		showPromptContTimer = setTimeout(function(){$("promptWin").style.display="none"},5000);
		var name=findName(positionV);
		if(name=="picturePreset")
		{
			$("promptContent").innerHTML=picPromptCon[0];
			showPromptImg();
		}
		else if(name=="brightness")
		{
			$("promptContent").innerHTML=picPromptCon[1];
			showPromptImg();
		}
		else if(name=="contrast")
		{
			$("promptContent").innerHTML=picPromptCon[2];
			showPromptImg();
		}
		else if(name=="saturation")
		{
			$("promptContent").innerHTML=picPromptCon[3];
			showPromptImg();
		}
		else if(name=="sharpness")
		{
			$("promptContent").innerHTML=picPromptCon[4];
			showPromptImg();
		}
		else if(name=="backlight")
		{
			$("promptContent").innerHTML=picPromptCon[5];
			showPromptImg();
		}
		else if(name=="tint")
		{
			$("promptContent").innerHTML=picPromptCon[6];
			showPromptImg();
		}
		else if(name=="screenMode")
		{
			$("promptContent").innerHTML=picPromptCon[7];
			showPromptImg();
		}
		else if(name=="ecoSetting")
		{
			$("promptContent").innerHTML=picPromptCon[8];
			showPromptImg();
		}
		else if(name=="geoSetting")
		{
			$("promptContent").innerHTML=picPromptCon[9];
			showPromptImg();
		}
		else if(name=="advancedSetting")
		{
			$("promptContent").innerHTML=picPromptCon[10];
			showPromptImg();
		}
		else if(name=="pictureReset")
		{
			$("promptContent").innerHTML=picPromptCon[11];
			showPromptImg();
		}
		else
		{
			$("promptWin").style.display="none";
		}
	}
	else
	{
		$("promptWin").style.display="none";
	}
	
}

function showMouseDown()
{
	top.g_channel.testLog("you press right key");
}
function addTagName(tag,id)
{
	tag.setAttribute("newAttr",id);
}
var IFRAME_LEFT_OFFSET = 0;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 175 + 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 100;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 500;
function addMouseListener()
{
	try
    {
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
    
	for(var kk = 0; kk < 17; kk++)
	{
		addTagName(lis[kk],kk);
		lis[kk].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pictureList")
				{
					evt.preventDefault();
					positionV = findPosition(menuList[parseInt(this.getAttribute("newAttr"))].name);
					$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(positionV-offsetPosition) + "px";
					toOK();
				}
			}
			showPromptCont();
		   top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("listFocus").onmousedown= function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pictureList")
				{
					toOK();
				}
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var i = 0; i < 5; i++)
	{
		addTagName(spans[i+1],i);
		spans[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
			    presetPositionH = parseInt(this.getAttribute("newAttr"));
				if(focusType=="picPreset")
				{
					setting.pictureMode=presetPositionH;
				}
				else if(focusType=="papMenu" )
				{
					setting.sportEnhanceSwitch=presetPositionH;
				}
				else if(focusType=="pic3DNavigaMenu" )
				{
					setting.pic3DNavigtion=presetPositionH;;
				}
				else if(focusType=="ColorTempMenu" )
				{
					setting.colorTemparature=presetPositionH;
				}
				else if(focusType=="autoFormat" )
				{
					setting.autoFormat = presetPositionH;
				}
				else if(focusType=="picShowScreen")
				{
					currentSizeNum = presetPositionH+(sizeCurrentPage-1)*5;
					top.g_channel.testLog("=====currentSizeNum======"+currentSizeNum)
					setting.pictureSize = picShowSize[currentSizeNum];
				}
				$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
				toOK();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("listUpRemind").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pictureList")
				{
					toUp();
				}
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("listDownRemind").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pictureList")
				{
					toDown();
				}
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
		
	$("preSetLeft").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toLeft();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("preSetRight").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toRight();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("adjustProgressBox").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 1){//left key
			toBack();	
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("adjustProgMinorUp").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toUp();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("adjustProgMinorDown").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toDown();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("adjustProgBar").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="adjustBar")
			{
				top.g_channel.testLog("evt.clientX ==="+evt.clientX+"=====PROGRESS_START_LEFT_OFFSET==="+PROGRESS_START_LEFT_OFFSET);
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
				switch(adjustOption)
				{
					case 2:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						brightness=value;
						if(brightness<0)
						{
							brightness=0;
						}
						else if(brightness>100)
						{
							brightness=100;
						}
						setting.brightness=brightness;
						progDivs[0].style.width=5*brightness+"px";
						progDivs[2].style.width=500-5*brightness+"px";
						$("adjustProgValue").innerHTML=brightness;
						break;
					}
					case 3:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						contrast=value;
						if(contrast<0)
						{
							contrast=0;
						}
						else if(contrast>100)
						{
							contrast=100;
						}
						setting.contrast=contrast;
						progDivs[0].style.width=5*contrast+"px";
						progDivs[2].style.width=500-5*contrast+"px";
						$("adjustProgValue").innerHTML=contrast;
						break;
					}
					case 4:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						saturation=value;
						if(saturation<0)
						{
							saturation=0;
						}
						else if(saturation>100)
						{
							saturation=100;
						}
						setting.saturation=saturation;
						progDivs[0].style.width=5*saturation+"px";
						progDivs[2].style.width=500-5*saturation+"px";
						$("adjustProgValue").innerHTML=saturation;
						break;
					}
					case 6:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						sharpness=value;
						if(sharpness<0)
						{
							sharpness=0;
						}
						else if(sharpness>100)
						{
							sharpness=100;
						}
						setting.sharpness=sharpness;
						progDivs[0].style.width=5*sharpness+"px";
						progDivs[2].style.width=500-5*sharpness+"px";
						$("adjustProgValue").innerHTML=sharpness;
						break;
					}
					case 1:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						backLight=value;
						if(backLight<0)
						{
							backLight=0;
						}
						else if(backLight>100)
						{
							backLight=100;
						}
						setting.backLight=backLight;
						progDivs[0].style.width=5*backLight+"px";
						progDivs[2].style.width=500-5*backLight+"px";
						$("adjustProgValue").innerHTML=backLight;
						break;
					}
					case 5:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						tint=value;
						if(tint<0)
						{
							tint=0;
						}
						else if(tint>100)
						{
							tint=100;
						}
						setting.hue=tint;
						progDivs[0].style.width=5*tint+"px";
						progDivs[2].style.width=500-5*tint+"px";
						$("adjustProgValue").innerHTML=tint;
						break;
					}
				}
			}
		}
		showPromptCont();
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	var divs=$("picReset").getElementsByTagName("div");
	divs[0].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="picReset")
			{
				isReset=1;
				$("picResetFocus").style.left="190px";
				toOK();
			}
		}
		showPromptCont();
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	divs[1].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="picReset")
			{
				isReset=0;
				$("picResetFocus").style.left="420px";
				toOK()
			}
		}
		showPromptCont();
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	}catch(er)
	{
		top.g_channel.testLog("userPicMouse:"+er);
	}
}
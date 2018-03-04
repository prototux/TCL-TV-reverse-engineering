
/****/
var textArray = top.eManualTextArray;
var titleString = top.homePageBackUp[0];
var iconTextArray = top.titleSpanFirstArray;
var setting = top.g_setting;
/**
var textArray =  ["E-Manual","All graphics inside are for representation only."];
var titleString = "E-Manual";
var iconTextArray =["Steuerung","Allgemeine Bedienungshinweise","APPS","TV","Einstellungen","FAQs"];
**/
var iconImgArray = ["../images/emanual/Bg_Plate_Control&Connection.png",
					"../images/emanual/Bg_plate_Basic.png",
					"../images/emanual/Bg_Plate_App.png",
					"../images/emanual/Bg_Plate_TV.png",
					"../images/emanual/Bg_Plate_Setting.png",
					"../images/emanual/Bg_Plate_FAQ.png"];	

var focusLeftArray = [-57,317,691,1065,1439,1813,2187];
var iconLeftArray = [0,374,748,1122,1496,1870,2244];
var windowScrollLeftArray = [240,40,-160,-360,-560,-760,-960];					
var position = 0;//记录焦点位置
var movePosition = 0; //记录左右移动的位置
var backNum = 0;
var iconNum = 0;
var isMouse = 0;
var status = "animate";

function init()
{
	var href = document.location.href;
	var tempArr = href.split("?");
	if (tempArr.length > 1) 
	{
		var temp1 = tempArr[1].split("&");
		if (temp1.length > 1) 
		{
			position = parseInt(temp1[1]);
			status = "static";
		}else
		{
			position = 0;
		}
		backNum = parseInt(tempArr[1]);
	}
	else
	{
		backNum = 0;
	}
	initData();

	initIcon();

	/*****

	拷贝进电视前需解开注释

	****/
	top.stopTimeout();
	//背光
	setting.sendMsgToDBC(1);
	addMouseListener();
	
}

function initIcon()
{
	
	if (status == "static") 
	{
		for (var i = 0; i < iconNum; i++) {
			if(i == position)
			{
				//$("iconDiv"+(i+1)).className = "iconDivFocus";
			}
			else
			{
				$("iconDiv"+(i+1)).className = "iconDivStatic";
			}
		}
		initFocus();
	}
	else{
		$("iconDiv1").className = "iconDiv1Animation";
		$("iconDiv2").className = "iconDiv2Animation";
		$("iconDiv3").className = "iconDiv3Animation";
		$("iconDiv4").className = "iconDiv4Animation";
		$("iconDiv5").className = "iconDiv5Animation";
		$("iconDiv6").className = "iconDiv6";
		//焦点框
		setTimeout(function(){
			initFocus();
		},2000);
	}
	
}

function initData()
{
	iconNum = iconTextArray.length;
	for(i=0;i<iconNum;i++)
	{
		var temp = i+1;
		$("iconSpan"+temp).innerHTML = iconTextArray[i];
	}
	for(i=0;i<iconNum;i++)
	{
		$("iconImg"+(i+1)).src = iconImgArray[i];
	}
	$("title").innerHTML = titleString;
	$("footer").innerHTML = "* "+textArray[1];

	/*****

	拷贝进电视前需解开注释

	****/
/****/
	var bodyList = top.document.getElementsByTagName("body");
	var scriptList = bodyList[0].getElementsByTagName("script");
	var srcvalue = scriptList[0].getAttribute("src");
	//  translation/English.js
	var temp1 = srcvalue.split("/");
	var temp2 = temp1[1].split(".");
	var language = temp2[0];
	if (language == "French") 
	{
		resizeIconSpan(44);
	}

	//sigle line height: 58
	//double lines height: 117
	//alert($("iconSpan2").scrollHeight);

	if ($("iconSpan1").scrollHeight == 62) 
	{
		$("iconSpan1").style.top = 350+"px";

	}
	if ($("iconSpan2").scrollHeight == 62) 
	{
		$("iconSpan2").style.top = 350+"px";
	}
	if ($("iconSpan2").scrollHeight >= 185) 
	{
		resizeIconSpan(38);
	}
	else if ($("iconSpan1").scrollHeight > 124 || $("iconSpan2").scrollHeight > 124 || $("iconSpan3").scrollHeight > 62)
	{
		resizeIconSpan(44);
	}
	
}

function resizeIconSpan(fontNum)
{
	for (var i = 0; i < iconNum; i++) 
	{
		var temp = i+1;
		$("iconSpan"+temp).style.fontSize = fontNum + "px";
	}
}

function initFocus()
{
	
	$("iconDiv"+(position+1)).className = "iconDivFocus";
	$("moveBlock").style.left = windowScrollLeftArray[position]+"px";
	setTimeout(function(){
		$("focusDiv").style.visibility = "visible";
		$("focusDiv").style.left = focusLeftArray[position]+"px";
		$("lineImg"+(position+1)).style.visibility = "visible";
	},150);
}

document.onkeydown = keyprocTV;
function keyprocPC(evt)
{
	var keycode = evt.which;
	
	switch (keycode)
	{
		case 37://left
		toLeft();
		break;
		case 38://up
		break;
		case 39://right
		toRight();
		break;
		case 40://down
		break;
		case 13://OK
		toOK();
		break;
		case 27://Esc
        case top.VK_BACK:  //back
		toBack();
		break;
	}
}

function keyprocTV(evt)
{
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		break;
		case top.VK_DOWN:
		break;
		case top.VK_LEFT:
		toLeft();
		break;
		case top.VK_RIGHT:
		toRight();
		break;
		case top.VK_BACK:
		case top.VK_EXIT:
        case top.VK_MENU:
		toBack();
		break;
		case top.VK_ENTER://OK
		toOK();
		break;
		case top.VK_POWER:
		top.keyDownProcess(evt);
		break;
	}
}

function toBack()
{

	setting.sendMsgToDBC(4);
	if (backNum == 0) {
		//退出
		top.focusToIndexHtml(1);
		top.restartTimeout();
	}
	else
	{
		top.$("main").style.display = "block";
		top.$("operatePage").src = "";
		top.main.focus();
        top.setFrameFocusPage("main");
	}
	
}

function toOK()
{
	document.location.href="eManualSecond.html?"+position+"&"+backNum;
}

function toRight()
{
	
	if(position == (iconNum -1))
	{
		//position = 0;
		//$("iconDiv"+iconNum).className = "iconDiv";
		//$("lineImg"+iconNum).style.visibility = "hidden";
		//window.scrollBy(-1500,0);
	}else
	{
		$("focusDiv").style.visibility = "hidden";

		position++;
		$("iconDiv"+position).className = "iconDiv";
		$("lineImg"+position).style.visibility = "hidden";

		$("iconDiv"+(position+1)).className = "iconDivFocus";
		$("lineImg"+(position+1)).style.visibility = "visible";
		setTimeout(function(){
			$("focusDiv").style.left = focusLeftArray[position]+"px";
			$("focusDiv").style.visibility = "visible";
		},200);
		$("moveBlock").style.left = windowScrollLeftArray[position]+"px";
	}
	
	
}

function toLeft()
{
	
	if(position == 0)
	{
		//position = iconNum -1;
		//$("iconDiv1").className = "iconDiv";
		//$("lineImg1").style.visibility = "hidden";
	}else
	{
		$("focusDiv").style.visibility = "hidden";

		position--;
		$("iconDiv"+(position+2)).className = "iconDiv";
		$("lineImg"+(position+2)).style.visibility = "hidden";

		$("iconDiv"+(position+1)).className = "iconDivFocus";
		$("lineImg"+(position+1)).style.visibility = "visible";
		setTimeout(function(){
			$("focusDiv").style.left = focusLeftArray[position]+"px";
			$("focusDiv").style.visibility = "visible";
		},200);
		$("moveBlock").style.left = windowScrollLeftArray[position]+"px";
	}
	
}

function arrowToLeft()
{
	movePosition = movePosition-2;
	if (movePosition < 0) 
	{
		movePosition = 0;
	}
	$("moveBlock").style.left = windowScrollLeftArray[movePosition]+"px";
}

function arrowToRight()
{
	movePosition = movePosition+2;
	if (movePosition > 2) 
	{
		movePosition = 3;
	}
	$("moveBlock").style.left = windowScrollLeftArray[movePosition]+"px";
}

function $(id)
{
    return document.getElementById(id);
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
        $("leftArrowDiv").style.display = "block";
        $("rightArrowDiv").style.display = "block";
		if(evt.button == 2) toBack();//right key
	}
	
	for(var i = 0; i < 6; i++)
	{
		$("iconDiv"+(i+1)).setAttribute("newAttr",i);
		$("iconDiv"+(i+1)).onmousedown = function(evt){
			if(evt.button == 0){//left key
	
				$("iconDiv"+(position+1)).className = "iconDiv";
				$("lineImg"+(position+1)).style.visibility = "hidden";
				position = parseInt(this.getAttribute("newAttr"));
				$("iconDiv"+(position+1)).className = "iconDivFocus";
				$("lineImg"+(position+1)).style.visibility = "visible";
				setTimeout(function(){
			      $("focusDiv").style.left = focusLeftArray[position]+"px";
		          $("focusDiv").style.visibility = "visible";
	            },100);
				setTimeout("toOK()",200);
			}
		}
	
	}

	//var bodyList = document.getElementsByTagName("body");
	//bodyList[0].onmousedown = function(evt){
	//	$("leftArrowDiv").style.display = "block";
	//	$("rightArrowDiv").style.display = "block";
	//}

	$("leftArrowDiv").onmousedown = function(evt){
			if(evt.button == 0){//left key
				$("leftArrow").src = "../images/emanual/arrow LF.png";
				arrowToLeft();
				setTimeout(function(){
					$("leftArrow").src = "../images/emanual/arrow LN.png";
				},200);
			}
	}

	$("rightArrowDiv").onmousedown = function(evt){
			if(evt.button == 0){//left key
				$("rightArrow").src = "../images/emanual/arrow RF.png";
				arrowToRight();
				setTimeout(function(){
					$("rightArrow").src = "../images/emanual/arrow RN.png";
				},200);
			}
	}
}

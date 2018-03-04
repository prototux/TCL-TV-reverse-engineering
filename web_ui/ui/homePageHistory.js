document.onnotify  = notifyProcess;
document.onkeydown = keyproc;
var setting                     = top.g_setting;
var channel                     = top.g_channel;
var titleName                   = ["History"]//top.homePageHistory;
var historyList;
var historyDivList;
var length                      = 21;
var historyListType             = 1;
var pageCout                    = 0;
var currentPage                 = 0;
var positionV                   = 0;
var rowIndex                    = 0;
var LIST_TOP_START              = 120;
var LIST_TOP_STEP               = 215;
var historyJson    = "{\"action\": \"Search\",\"developer\": {\"apikey\": \"1234\",\"name\": \"tclrpc_1\"},\"device\": {\"deviceId\": \"40:8B:F6:F4:FB:E8\"},\"param\": {\"page\": \"1\",\"pagesize\": \"1\",\"searchString\": \"MTVXXXXHD\"}}";

function getHistoryChannelInfo(name,id)
{
	 var xmlhttpNo="";
	var clearHttpTimer;
	if(window.XMLHttpRequest)
	  {
	  xmlhttpNo=new XMLHttpRequest();
	  }
	else
	  {
	  xmlhttpNo=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	
	xmlhttpNo.open("POST","http://overseas.huantest.com/json",true);
	xmlhttpNo.onreadystatechange=showHistoryChannelList;
    //channel.testLog("historyJson="+historyJson.replace("MTVXXXXHD",name));
	xmlhttpNo.send(historyJson.replace("MTVXXXXHD",name));
	clearHttpTimer=setTimeout(function(){
		 if(typeof xmlhttpNo == 'object')
		xmlhttpNo.abort();
		xmlhttpNo="";
		if(id<length-1)
		{
			id++;
			getHistoryChannelInfo(historyList[id].name,id);
		}
		 },5000);
	function showHistoryChannelList()
	{
		if (xmlhttpNo.readyState==4 && xmlhttpNo.status==200)
		{
			try
			{
				clearTimeout(clearHttpTimer);
				var jsonResult=xmlhttpNo.responseText;
				// channel.testLog("jsonResult="+jsonResult);
				jsonResult =eval("(" + jsonResult + ")");
				if(jsonResult.error.code!="0")
				{
					if(id<length-1)
					{
						id++;
						getHistoryChannelInfo(historyList[id].name,id);
					}
					return;
				}
				if(jsonResult.results[0].programimg.MEDIUM!=undefined)
				{
					$("history"+id).src=jsonResult.results[0].programimg.MEDIUM;
					$("history"+id).style.display="block";
				}
				else if(jsonResult.results[0].programimg.SMALL!=undefined)
				{
				
					$("history"+id).src=jsonResult.results[0].programimg.SMALL;
					$("history"+id).style.display="block";
				}
				else if(jsonResult.results[0].programimg.THUMBNAIL!=undefined)
				{
					$("history"+id).src=jsonResult.results[0].programimg.THUMBNAIL;
					$("history"+id).style.display="block";
				}
				else
				{
					$("history"+id).style.display="none";
				}
				xmlhttpNo.abort();
				xmlhttpNo="";
				if(id<length-1)
				{
					id++;
					getHistoryChannelInfo(historyList[id].name,id);
				}
			}
			catch(er)
			{
				xmlhttpNo.abort();
				xmlhttpNo="";
				if(id<length-1)
				{
					id++;
					getHistoryChannelInfo(historyList[id].name,id);
				}
				channel.testLog("er="+er);
			}
		}
		else if(xmlhttpNo.readyState==4 && xmlhttpNo.status!=200)
		{
			xmlhttpNo.abort();
			xmlhttpNo="";
			if(id<length-1)
			{
				id++;
				getHistoryChannelInfo(historyList[id].name,id);
			}
		}
	}
}
function uninit()
{
	if(typeof xmlhttpNo == 'object')
	xmlhttpNo.abort();
	xmlhttpNo="";
}
function keyproc(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			//up
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			toDown();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			//toRight();
		}
		break;
		case top.VK_ENTER:
		{
			//OK 键
			toOk();
			ret = false;
			break;
		}
		case top.VK_LEFT:
			//toLeft();
			ret = false;
			break;
		case top.VK_BACK: //back
		case top.VK_MENU: //menu
			doExit();
			break
		default:
			top.keyDownProcess(evt);
		break;
	}
	return ret;
}
function doExit()
{
	top.$("main").contentWindow.focusType= top.$("main").contentWindow.preFocusType;
	top.$('operatePage').src="";
}
function $(id)
{
    return document.getElementById(id);
}

function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
		default:
			//top.systemEventProc(evt);
			break;
	}
}

function init()
{
	var MacAdress               = top.g_setting.tvDeviceID;
	console.log("MacAdress="+MacAdress);
	historyJson     = historyJson.replace("40:8B:F6:F4:FB:E8",MacAdress);
	showList();
	addMouseListener();
}

function showList()
{
	try
	{
	var spans=$("main").getElementsByTagName("span");
	spans[0].innerHTML=titleName[0];
	historyList = channel.getHistoryChannelList();
	length = historyList.length;
	for(var i=0;i<length;i++)
	{
		addChannelHistoryList(historyList[i].number+"&nbsp;|&nbsp;"+historyList[i].name,"images/History_Default_Picture.png","history"+i);
		
	}
	if(length==0)
	{
		$("listFocus").style.display="none";
	}
	else
	{
		if(top.checkNetStatus())
		{
			getHistoryChannelInfo(historyList[0].name,0);
		}

	}
	historyDivList=$("historyList").getElementsByTagName("div");
	coutPage();
	}catch(er)
	{
		channel.testLog(er);
	}
}
function addChannelHistoryList(name ,imgPath,id)
{
	var div=$("historyList");//创建input
    var divChild=document.createElement("div");//创建input
	divChild.setAttribute("class","list");
	var imgBg = document.createElement("img");
	imgBg.setAttribute("class","bgPic");
	imgBg.src=imgPath;
	var showNumBg = document.createElement("img");
	showNumBg.setAttribute("class","showNumBg");
	showNumBg.src="images/History_bg_Txt.png";
	var historyImg = document.createElement("img");
	historyImg.setAttribute("class","historyPic");
	historyImg.id=id;
	var nameLi = document.createElement("span");
	nameLi.setAttribute("class","name");
	nameLi.innerHTML=name;
	divChild.appendChild(imgBg);
	divChild.appendChild(nameLi);
	divChild.appendChild(historyImg);
	divChild.appendChild(showNumBg);
    div.appendChild(divChild);//插入div内
	/*
	divChild.onmousedown = function(evt){
			if(evt.button == 0){//left key
					positionH = i;
					$("inputSourceFocus").style.top=1+positionH*132+"px";
					toOK();
			}
		}*/
}
function addAppHistoryList(name ,imgPath)
{
	var div=$("historyList");//创建input
    var divChild=document.createElement("div");//创建input
	divChild.setAttribute("class","list");
	var imgBg = document.createElement("img");
	imgBg.setAttribute("class","bgPic");
	imgBg.src=imgPath;
	var nameLi = document.createElement("span");
	nameLi.setAttribute("class","name");
	nameLi.innerHTML=name;
	divChild.appendChild(imgBg);
	divChild.appendChild(nameLi);
    div.appendChild(divChild);//插入div内
}
function addVideoHistoryList(name ,imgPath)
{
	var div=$("historyList");//创建input
    var divChild=document.createElement("div");//创建input
	divChild.setAttribute("class","list");
	var imgBg = document.createElement("img");
	imgBg.setAttribute("class","bgPic");
	imgBg.src=imgPath;
	var nameLi = document.createElement("span");
	nameLi.setAttribute("class","name");
	nameLi.innerHTML=name;
	divChild.appendChild(imgBg);
	divChild.appendChild(nameLi);
    div.appendChild(divChild);//插入div内
}
function coutPage()
{
	if(length%4==0)
	{
		pageCout = parseInt(length/4);
	}
	else
	{
		pageCout = parseInt(length/4)+1;
	}
}
function showPageFlag()
{
	$("pageFlag").style.height = parseInt(800/pageCout)+"px";
	$("pageFlag").style.top = 210+parseInt(800*currentPage/pageCout)+"px";
}
function toUp()
{
	if(positionV>0)
	{
		positionV--;
		$("listFocus").style.top=LIST_TOP_START+positionV*LIST_TOP_STEP+"px"
		rowIndex--;
	}
	else
	{
		if(rowIndex>0)
		{
			positionV=3;
			$("listFocus").style.top=LIST_TOP_START+positionV*LIST_TOP_STEP+"px"
			for(var i=0;i<4;i++)
			{
				historyDivList[rowIndex-i-1].style.display="block";
			}
			rowIndex--;
			currentPage--;
		}
	}
	//showPageFlag();
}
function toDown()
{
	if(positionV<3 && rowIndex<length-1)
	{
		positionV++;
		rowIndex++;
		$("listFocus").style.top=LIST_TOP_START+positionV*LIST_TOP_STEP+"px"
	}
	else if(positionV==3 && rowIndex<length-1)
	{
		for(var i=0;i<4;i++)
		{
			historyDivList[rowIndex-i].style.display="none";
		}
		positionV=0;
		rowIndex++;
		currentPage++;
		$("listFocus").style.top=LIST_TOP_START+positionV*LIST_TOP_STEP+"px"
	}
	//showPageFlag();
}
function toOk()
{
	if(channel.currentIndex!=historyList[rowIndex].index)
	{
	      top.channelLock = 0;
				top.parentalLock = 0;
				top.inputLock = 0;
		top.currentChannelIndex = historyList[rowIndex].index;
		channel.playByIndex(historyList[rowIndex].index);
	}
}
function toRight()
{
	var div=$("historyList").getElementsByTagName("div");
	for(var i=0;i<length;i++)
	{
		$("historyList").removeChild(div[i]);
		$("historyList").removeChild(div[length-1]);
		length--;
	}
	length = 0;
 	pageCout = 0;
	currentPage = 0;
 	positionV = 0;
	rowIndex = 0;
	if(historyListType  == 0)
	{
		historyListType = 1;
	}
	else if(historyListType == 1)
	{
		historyListType = 2;
	}
	else if(historyListType == 2)
	{
		historyListType = 0;
	}
	showList();
	$("listFocus").style.top=LIST_TOP_START+positionV*LIST_TOP_STEP+"px"
}
function toLeft()
{
	
	var div=$("historyList").getElementsByTagName("div");
	for(var i=0;length>0;i++)
	{
		$("historyList").removeChild(div[length-1]);
		length--;
	}
	length = 0;
 	pageCout = 0;
	currentPage = 0;
 	positionV = 0;
	rowIndex = 0;
	if(historyListType  == 0)
	{
		historyListType = 2;
	}
	else if(historyListType == 1)
	{
		historyListType = 0;
	}
	else if(historyListType == 2)
	{
		historyListType = 1;
	}
	showList();
	$("listFocus").style.top=LIST_TOP_START+positionV*LIST_TOP_STEP+"px"
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2)doExit();//right key
	}
}
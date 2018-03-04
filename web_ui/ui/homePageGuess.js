document.onnotify  = notifyProcess;
document.onkeydown = keyproc;
var setting                     = top.g_setting;
var channel                     = top.g_channel;
var titleName                   = ["Guess You Like"];
var historyList;
var historyDivList;
var length                      = 21;
var likeListType                = 1;
var pageCout                    = 0;
var currentPage                 = 0;
var positionV                   = 0;
var rowIndex                    = 0;
var LIST_TOP_START              = 123;
var LIST_TOP_STEP               = 212;
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
		case top.VK_ENTER:
		{
			//OK 键
			toOk();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		case top.VK_MENU: //menu
			top.jumpPage();
			break
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

function notifyProcess(evt)
{
    var msg = evt.which;
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}

function init()
{
	showList();
}

function showList()
{
	var spans=$("main").getElementsByTagName("span");
	spans[0].innerHTML=titleName[0];
	if(likeListType==1)
	{
		//historyList=channel.getHistoryChannelList();
		length=20;
		//length = historyList.length;
		for(var i=0;i<length;i++)
		{
			addChannelLikeList("like"+i ,"images/history/channelsHistory.jpg");
		}
	}
	else if(likeListType==0)
	{
		//historyList=channel.getHistoryAppList();
		length=2;
		//length = historyList.length;
		for(var i=0;i<length;i++)
		{
			addAppLikeList("like"+i ,"images/history/channelsHistory.jpg");
		}
	}
	else if(likeListType==2)
	{
		//historyList=channel.getHistoryVideoList();
		//length = historyList.length;
		length=26;
		for(var i=0;i<length;i++)
		{
			addVideoLikeList("like"+i ,"images/history/channelsHistory.jpg");
		}

	}
	
	historyDivList=$("historyList").getElementsByTagName("div");
	coutPage();
	showPageFlag();
}
function addChannelLikeList(name ,imgPath)
{
	var div=$("historyList");//创建input
    var divChild=document.createElement("div");//创建input
	divChild.setAttribute("class","list");
	var imgBg = document.createElement("img");
	imgBg.setAttribute("class","bgPic");
	imgBg.src=imgPath;
	var imgPlay = document.createElement("img");
	imgPlay.setAttribute("class","playPic");
	imgPlay.src="images/history/player_ICO.png";
	var nameLi = document.createElement("span");
	nameLi.setAttribute("class","name");
	nameLi.innerHTML=name;
	divChild.appendChild(imgBg);
	divChild.appendChild(imgPlay);
	divChild.appendChild(nameLi);
    div.appendChild(divChild);//插入div内
}
function addAppLikeList(name ,imgPath)
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
function addVideoLikeList(name ,imgPath)
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
				historyDivList[rowIndex-i].style.display="block";
			}
			rowIndex--;
			currentPage--;
		}
	}
	showPageFlag();
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
	showPageFlag();
}

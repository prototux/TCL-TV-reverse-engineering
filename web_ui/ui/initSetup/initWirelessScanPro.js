
var initNetRemind                  = [top.initialPrompt[9],top.initialPrompt[10]];
var loadingImg                     = ["../images/Loading-01.png","../images/Loading-02.png","../images/Loading-03.png","../images/Loading-04.png","../images/Loading-05.png","../images/Loading-06.png","../images/Loading-07.png","../images/Loading-08.png"];
var loadingImgNum                  = 0;
var setting = top.g_setting;
document.onnotify = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_WIRELESS_DEVICE_NO_FOUND://表示没有无线网
		{
			$("remindWord").innerHTML=initNetRemind[1];
			$("loading").style.display = "none";
			loadingImgNum = 0;
			setTimeout("document.location.href='initWirelessType.html';",1000);
			break;	
		}
		case top.E_WIRELESS_SCAN_FINISH://表示搜索无线网络结
		{
			document.location.href="initWirelessList.html";
			break;
		}
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_DATABASE_FILE_DAMAGE:
		{
			top.systemEventProc(evt);
		}
		break;
		default:
			break;
	}
}
document.onkeydown = keyproc;
function keyproc(e)
{
	var ret = true;
	var keycode = e.which;
	switch (keycode)
	{
		case top.VK_POWER://power
			top.keyDownProcess(e);
			break;
		case top.VK_RED:
			top.jumpPage();
			break;
	    default:
			break;
	}
	return ret;
}
function $(id)
{
    return document.getElementById(id);
}
function loading()
{
	$("loading").src=loadingImg[loadingImgNum];
	loadingImgNum++;
	if(loadingImgNum>=8)
	{
		loadingImgNum=0;
	}
}
function init()
{
	 $("remindWord").innerHTML=initNetRemind[0];
	 
	 setting.startScanNetwork();
	 setInterval("loading()",300);
	 addMouseListener();
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	}
}

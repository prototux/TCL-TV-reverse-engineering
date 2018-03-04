top.keySetForUI(1);
var promptText = top.autoDetectPrompt;
var buttonText = top.netUpdateButtonText;
var titleText = top.netUpdateDialogTitle;
var updatePromptText = top.sysUpdateDes;

var updateInfo;
/*
var downloadFileSize = 0;
*/
var PROGRESS_WIDTH = (600 - 10);
var buttonPositionLeft = "98px";
var buttonPositionCenter = "323px";
var buttonPositionRight = "548px";

/* 0:Whether to download
 * 1:Whether to update after finishing downloading
 * 2:Update again
 * 3:Abnormal dialog. For example, network error.*/
var networkUpdateDialogType = 0;
var whereIsTheButton = "right";  // left center right
var isButtonShow = false;
var setting = top.g_setting;

document.onkeydown = keyproc;
document.onnotify = notifyProcess;


/******************************************************************************
 * $() will not work without prototype.js framework. Let's define $() here.
 * Please comment this function if prototype.js framework is used.
 *****************************************************************************/
function $(obj){
	return document.getElementById(obj);
}

function toLeft(){
	if(isButtonShow){
		if((networkUpdateDialogType == 0 ) || (networkUpdateDialogType == 1) ){
			if(whereIsTheButton == "center"){
				whereIsTheButton = "left";
				$("networkUpdateDialogButtonFocus").style.left = buttonPositionLeft;
			}
			else if(whereIsTheButton == "right"){
				whereIsTheButton = "center";
				$("networkUpdateDialogButtonFocus").style.left = buttonPositionCenter;
			}
            else if(whereIsTheButton == "left"){
                whereIsTheButton = "right";
                $("networkUpdateDialogButtonFocus").style.left = buttonPositionRight;
            }
		}
	}
}

function toRight(){
	if(isButtonShow){
		if((networkUpdateDialogType == 0) || (networkUpdateDialogType == 1) ) {
			if(whereIsTheButton == "left"){
				whereIsTheButton = "center";
				$("networkUpdateDialogButtonFocus").style.left = buttonPositionCenter;
			}
			else if(whereIsTheButton == "center"){
				whereIsTheButton = "right";
				$("networkUpdateDialogButtonFocus").style.left = buttonPositionRight;
			}
            else if(whereIsTheButton == "right"){
                whereIsTheButton = "left";
                $("networkUpdateDialogButtonFocus").style.left = buttonPositionLeft;
            }
		}
	}
}

function doEnter(){
	if(isButtonShow){
		if(networkUpdateDialogType == 0){
			if(whereIsTheButton == "right"){
				// Download the software by network.
				//setting.networkDownloadButton = 0;
				top.jumpPage();
				setting.startDownloadUpdateFile(1);
			}
			else if(whereIsTheButton == "center"){
				// Download the software later.
				//setting.networkDownloadButton = 1;
				top.jumpPage();
			}
			else if(whereIsTheButton == "left"){
				// Never download the software.
				top.jumpPage();
				setting.networkDownloadButton = 2;
				if(updateInfo){
                    if(updateInfo.version.length > 15)
                    {
					setting.networkUpdateSoftwareVersionInDB = parseInt(updateInfo.version.slice(15), 10);
				}
				}
				setting.deleteDownloadUpdateFile();
			}
		}
		else if(networkUpdateDialogType == 1){
			if(whereIsTheButton == "right"){
				// Start updating.
                setting.networkUpdateButton = 0;
				setting.startUpdating(1);
				isButtonShow = false;
				$("networkUpdateDialogButton").style.display = "none";
				$("networkUpdateDialogContent").innerHTML = updatePromptText[7];
				/*if(updateInfo){
					$("networkUpdateDialogProgressSoftwareVer").innerHTML = updateInfo.version;
				}
				$("networkUpdateDialogProgressSoftwareVer").style.display = "block";
				$("networkUpdateDialogProgressValue").innerHTML = 0 + "%";
				$("networkUpdateDialogProgressValue").style.display = "block";
				$("networkUpdateDialogProgressBarLeft").style.width = 0 + "px";
				$("networkUpdateDialogProgressBarRight").style.width = PROGRESS_WIDTH + "px";
				$("networkUpdateDialogProgressBarContainer").style.display = "block";*/
			}
			else if(whereIsTheButton == "center"){
				// Update the software later.
                setting.networkUpdateButton = 0;
				top.jumpPage();

			}
			else if(whereIsTheButton == "left"){
				// Never update the software.
				top.jumpPage();
				setting.networkUpdateButton = 2;
				setting.deleteDownloadUpdateFile();
			}
		}
		else if(networkUpdateDialogType == 2){
			if(whereIsTheButton == "center"){
				// Update again
				setting.startUpdating(3);
				isButtonShow = false;
				$("networkUpdateDialogButton").style.display = "none";
				$("networkUpdateDialogContent").innerHTML = updatePromptText[7];
				$("networkUpdateDialogProgressValue").innerHTML = 0 + "%";
				$("networkUpdateDialogProgressValue").style.display = "none"; //block
				$("networkUpdateDialogProgressBarLeft").style.width = 0 + "px";
				$("networkUpdateDialogProgressBarRight").style.width = PROGRESS_WIDTH + "px";
				$("networkUpdateDialogProgressBarContainer").style.display = "none"; //block
			}
		}
	}
}

function keyproc(e){
	var ret = true;
	var keycode = e.which;

	switch (keycode){
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
			ret = false;
			break;
        case top.VK_BACK:
            top.jumpPage();
            ret = false;
            break;
        case top.VK_POWER:
            top.keyDownProcess(e);
            ret = false;
            break;
		default:
			ret = true;
			break;
	}

	return ret;
}

function notifyProcess(evt){
	var msg = evt.which;

	switch (msg){
		case top.E_UPDATE_UPDATING_PROGRESS:
			var updatePercentage = evt.modifiers;
			if (updatePercentage >= 0 && updatePercentage <= 100)
			{
				var left = parseInt((updatePercentage*PROGRESS_WIDTH)/100,10);
				$("networkUpdateDialogProgressBarLeft").style.width = left + "px";
				$("networkUpdateDialogProgressBarRight").style.width = (PROGRESS_WIDTH - left)+"px";
				$("networkUpdateDialogProgressValue").innerHTML = updatePercentage + "%";
			}
			break;
		case top.E_UPDATE_RESULT:
			var updateResult = evt.modifiers;

			$("networkUpdateDialogProgressBarContainer").style.display = "none";
			$("networkUpdateDialogProgressValue").style.display = "none";
			$("networkUpdateDialogProgressSoftwareVer").style.display = "none";

			if(updateResult == 1){
				$("networkUpdateDialogContent").innerHTML = updatePromptText[8];
			}
			else if(updateResult == 0){
				$("networkUpdateDialogContent").innerHTML = updatePromptText[12];
			}

			setTimeout("top.jumpPage()", 3000);
			break;
        case top.E_UPDATE_DOWNLOAD_PROGRESS:
            top.systemEventProc(evt);
            break;
		default:
			break;
	}
}

function showAutoDetectDialog(){
	updateInfo = setting.getUpdateInfo();
	networkUpdateDialogType = 0;
    var downloadFileSize = 0;
    downloadFileSize = setting.getnetworkDownloadFileSize();
    top.g_channel.testLog(" ~~~AutoDetectDialog downloadFileSize="+downloadFileSize);
	isButtonShow = true;
	whereIsTheButton = "right";
	$("networkUpdateDialogTitle").innerHTML = titleText;
	$("networkUpdateDialogButtonLeft").innerHTML = buttonText[3];
	$("networkUpdateDialogButtonCenter").innerHTML = buttonText[2];
	$("networkUpdateDialogButtonRight").innerHTML = buttonText[0];
    console.log("check"+updateInfo+downloadFileSize);
	if(updateInfo)
    {
        if(downloadFileSize > 0)
        {
            $("networkUpdateDialogButtonRight").innerHTML = buttonText[5];
            $("networkUpdateDialogContent").innerHTML = promptText[3].replace(/XXXX/,updateInfo.version);
        }
        else
        {
            $("networkUpdateDialogContent").innerHTML = promptText[0].replace(/XXXX/,updateInfo.version);
        }
		$("networkUpdateDialogReleaseNote").innerHTML = updateInfo.note;
		if($("networkUpdateDialogReleaseNote").clientHeight != 0)
        {
			$("networkUpdateDialogReleaseNote").style.paddingTop = "10";
			$("networkUpdateDialogReleaseNote").style.paddingBottom = "20";
            var releaseNoteHeight = $("networkUpdateDialogReleaseNote").offsetHeight;
            var backgroundTop = $("networkUpdateDialogBackground").offsetTop;
            var backgroundHeight = $("networkUpdateDialogBackground").clientHeight;
			$("networkUpdateDialogReleaseNote").style.top = ($("networkUpdateDialogContent").offsetTop + $("networkUpdateDialogContent").offsetHeight) + "px";
            $("networkUpdateDialogBackground").style.top = (backgroundTop - releaseNoteHeight/2) + "px";
            $("networkUpdateDialogBackground").style.height = (backgroundHeight + releaseNoteHeight) + "px";
        }
		else{
			top.g_channel.testLog("note is empty.");
		}
	}
    console.log("check out");
}

function showUpdateDialogAfterDownload(){
	updateInfo = setting.getUpdateInfo();
	networkUpdateDialogType = 1;
	isButtonShow = true;
	whereIsTheButton = "right";
	$("networkUpdateDialogTitle").innerHTML = titleText;
	$("networkUpdateDialogButtonLeft").innerHTML = buttonText[3];
	$("networkUpdateDialogButtonCenter").innerHTML = buttonText[2];
	$("networkUpdateDialogButtonRight").innerHTML = buttonText[1];
	if(updateInfo){
		$("networkUpdateDialogContent").innerHTML = promptText[4].replace(/XXXX/,updateInfo.version); /* IR3465 1->4 */
	}
}

function showUpdateAgainDialog(){
	networkUpdateDialogType = 2;
	isButtonShow = true;
	whereIsTheButton = "center";
	$("networkUpdateDialogButtonFocus").style.left = buttonPositionCenter;
	$("networkUpdateDialogTitle").innerHTML = titleText;
	$("networkUpdateDialogContent").innerHTML = promptText[2];
	$("networkUpdateDialogButtonLeft").style.display = "none";
	$("networkUpdateDialogButtonRight").style.display = "none";
	$("networkUpdateDialogButtonCenter").innerHTML = buttonText[4];
}

function showAbnormalDialog(){
	var tempString = window.location.search;  //get URL parameter
	tempString = tempString.substring(tempString.indexOf("?")+1);

	networkUpdateDialogType = 3;
	isButtonShow = false;
	$("networkUpdateDialogButton").style.display = "none";
	$("networkUpdateDialogTitle").innerHTML = titleText;
	if(tempString == "networkAbnormal"){
		$("networkUpdateDialogContent").innerHTML = top.netUpdatePrompt[9];
	}
	else if(tempString == "MD5CheckFailed"){
		$("networkUpdateDialogContent").innerHTML = top.netUpdatePrompt[8];
	}
	setTimeout(function(){top.jumpPage();},3000);
}

var dialogButtonClassList;
function init(){
    top.stopTimeout();
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	dialogButtonClassList = $("networkUpdateDialogButton").getElementsByClassName("dialogButton");
	switch(top.g_whichUpdateDialogWillBeUsed){
		case 0:
			showAutoDetectDialog();
			break;
		case 1:
			showUpdateDialogAfterDownload();
			break;
		case 2:
			showUpdateAgainDialog();
			break;
		case 3:
			showAbnormalDialog();
			break;
		default:
			break;
	}
	addMouseListener();
}
function uninit()
{
    //top.g_channel.testLog(" ~~~AutoDetectDialog uninit= ~~~~");
	top.timeoutFuc.timeoutEnable=1;
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2) top.jumpPage();
	}
	
	for(var i = 0; i < 3; i++) //3
	{
		dialogButtonClassList[i].setAttribute("newAttr",i);
		dialogButtonClassList[i].onmousedown = function(evt){
			if(evt.button == 0){
				if(isButtonShow){
					if((networkUpdateDialogType == 0) || (networkUpdateDialogType == 1)){
						if(parseInt(this.getAttribute("newAttr")) == 0){
							whereIsTheButton = "left";
							$("networkUpdateDialogButtonFocus").style.left = buttonPositionLeft;
						}
						else if(parseInt(this.getAttribute("newAttr")) == 1){
							whereIsTheButton = "center";
							$("networkUpdateDialogButtonFocus").style.left = buttonPositionCenter;
						}
						else if(parseInt(this.getAttribute("newAttr")) == 2){
							whereIsTheButton = "right";
							$("networkUpdateDialogButtonFocus").style.left = buttonPositionRight;
						}
					}
					doEnter();
				}
			}
		}
	}
	
}
top.keySetForUI(1);
var init_page_title = ["Main\\Hotel Menu","USB Clone Mode","USB to TV","TV to USB","Favorite List Disable","Tuner Lock","Menu Lock","USB Lock","Source Lock","DVB network update"];
var other = ["Do","Wait","OK","Fail","Success"];
var off_on = ["Off","On"];
var usb_clone_mode = ["User Data","Ch List"];
var HOTEL_PAGE_ITEM_LENGTH = 9;

var div_contain_list;
var span_contain_list;
var position_h = 0;

var usbCloneMode = 0;
var tunerLock = 0;
var menuLock = 0;
var sourceLock = 0;
var favoriteListDisable = 0;
var dvbNetworkUpdateFlag = 0;

var focusFlag ;

var factory = top.g_factory;
var setting = top.g_setting;

document.onkeydown = keyproc;

function keyproc(e)
{
	var key = e.which;
	switch(key)
	{
		case top.VK_POWER:
			top.keyDownProcess(e);
			break ;
		case top.VK_MENU:
		case 27:
			doMenu();
		    break;
		case top.VK_LEFT:
			toLeft();
			break;
		case top.VK_RIGHT:
			toRight();
			break;
		case top.VK_UP:
			toUp();
			break;
		case top.VK_DOWN:
			toDown();
			break;
		case top.VK_EXIT:
			doExit();
			break;
		case top.VK_ENTER:
			doEnter();
			break;
		default:
			ret = true;
			break;
	}
}
function $(id)
{
	return document.getElementById(id);
}
function doMenu()
{
	document.location.href = "hotelMenu.html?hotelMenu1";
}
function toLeft()
{
	switch(position_h)
	{
		case 0:
			usbCloneMode--;
			if(usbCloneMode < 0)
			{
				usbCloneMode = 1;
			}
			span_contain_list[position_h].innerHTML = usb_clone_mode[usbCloneMode];
			break;
		case 3:
			favoriteListDisable--;
			if(favoriteListDisable < 0)
			{
				favoriteListDisable = 1;
			}
			span_contain_list[position_h].innerHTML = off_on[favoriteListDisable];
			factory.favoriteListDisable = favoriteListDisable;
			break;
		case 4:
			tunerLock--;
			if(tunerLock < 0)
			{
				tunerLock = 1;
			}
			span_contain_list[position_h].innerHTML = off_on[tunerLock];
			factory.tunerLock = tunerLock;
			break;
		case 5:
			menuLock--;
			if(menuLock < 0)
			{	
				menuLock = 1;
			}
			span_contain_list[position_h].innerHTML = off_on[menuLock];
			factory.menuLock =menuLock;
			break;
		case 6:
			usbLock--;
			if(usbLock < 0)
			{
				usbLock = 1;
			}
			span_contain_list[position_h].innerHTML = off_on[usbLock];
			factory.usbLock = usbLock;
			break;
		case 7:
			sourceLock--;
			if(sourceLock < 0)
			{
				sourceLock = 1
			}
			span_contain_list[position_h].innerHTML = off_on[sourceLock];
			factory.sourceLock = sourceLock;
			break;
		default:
			break;
		}
}
function toRight()
{
	switch(position_h)
		{
			case 0:
				usbCloneMode++;
				if(usbCloneMode > 1)
				{
					usbCloneMode = 0;
				}
				span_contain_list[position_h].innerHTML = usb_clone_mode[usbCloneMode];
				break;
			case 3:
				favoriteListDisable++;
				if(favoriteListDisable > 1)
				{
					favoriteListDisable = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[favoriteListDisable];
				factory.favoriteListDisable = favoriteListDisable;
				break;
			case 4:
				tunerLock++;
				if(tunerLock > 1)
				{
					tunerLock = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[tunerLock];
				factory.tunerLock = tunerLock;
				break;
			case 5:
				menuLock++;
				if(menuLock > 1)
				{	
					menuLock = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[menuLock];
				factory.menuLock =menuLock;
				break;
			case 6:
				usbLock++;
				if(usbLock > 1)
				{
					usbLock = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[usbLock];
				factory.usbLock = usbLock;
				break;
			case 7:
				sourceLock++;
				if(sourceLock > 1)
				{
					sourceLock = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[sourceLock];
				factory.sourceLock = sourceLock;
				break;
            case 8:
                dvbNetworkUpdateFlag = (dvbNetworkUpdateFlag + 1) % 2;
                factory.dvbNetworkUpdate = dvbNetworkUpdateFlag;
                span_contain_list[8].innerHTML = off_on[dvbNetworkUpdateFlag];
                break;
			default:
				break;
		}
}
function toUp()
{
	if(position_h <= 0)
	{
		document.location.href = "hotelMenu.html?up";
	}
	else
	{
		div_contain_list[position_h + 1].style.background = "#FFF";
		div_contain_list[position_h].style.background = "#FF0";
		position_h--;
	}
}
function toDown()
{
	if(position_h >= HOTEL_PAGE_ITEM_LENGTH - 1)
	{
		document.location.href = "hotelMenu.html?down";
	}
	else
	{
		div_contain_list[position_h + 1].style.background = "#FFF";
		div_contain_list[position_h + 2].style.background = "#FF0";
		position_h++;
	}
}
function doExit()
{
	document.location.href = "../channelPlay.html";
}
function doEnter()
{
	switch(position_h)
	{
		case 1:
				if(factory.getUsbDeviceStatus())
				{
					if(usbCloneMode == 0)
					{
						span_contain_list[position_h].innerHTML = other[1];
						setTimeout(
							function(){
							factory.hotelClone();
							span_contain_list[position_h].innerHTML = other[2];				
							},
							500);
							//span_contain_list[position_h].innerHTML = other[0];				
					}
					else
					{
						span_contain_list[position_h].innerHTML = other[1];
						setTimeout(
							function(){
							factory.hotelChlClone();
							span_contain_list[position_h].innerHTML = other[2];				
							},
							500);
							//span_contain_list[position_h].innerHTML = other[0];				
					}
						setTimeout(
							function(){
							span_contain_list[position_h].innerHTML = other[0];		
							factory.systemReboot(0);
							},
							2000);
				}
				else
				{
						span_contain_list[position_h].innerHTML = "Please Insert USB";
						setTimeout(
						function(){
						span_contain_list[position_h].innerHTML = other[0];				
						},
						1000);
				}	
				break;
			case 2:
				if(factory.getUsbDeviceStatus())
				{
					if(usbCloneMode == 0)
					{
						span_contain_list[position_h].innerHTML = other[1];
						setTimeout(
							function(){
							factory.hotelCopy();
							span_contain_list[position_h].innerHTML = other[2];				
							},
							500);						
					}
					else
					{
						span_contain_list[position_h].innerHTML = other[1];
						setTimeout(
							function(){
							factory.hotelChlCopy();
							span_contain_list[position_h].innerHTML = other[2];				
							},
							500);					
					}
						setTimeout(
							function(){
							span_contain_list[position_h].innerHTML = other[0];				
							},
							2000);
				}
				else
				{
						span_contain_list[position_h].innerHTML = "Please Insert USB";
						setTimeout(
						function(){
						span_contain_list[position_h].innerHTML = other[0];				
						},
						1000);
	
				}
				break;
			default:
				break;
	}
}
function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
		top.stopTimeout();
	var url = window.location.search;//获取URL携带参数
	if(url!=null && url!="")
	{
		focusFlag = url.substring(url.indexOf("?")+1);
	}
	usbCloneMode = 0;
	tunerLock = factory.tunerLock;
	usbLock = factory.usbLock;
	sourceLock = factory.sourceLock;
	favoriteListDisable = factory.favoriteListDisable;
	menuLock = factory.menuLock;
    dvbNetworkUpdateFlag = factory.dvbNetworkUpdate;
    console.log("quanhw test factory.dvbNetworkUpdate = "+factory.dvbNetworkUpdate);
	div_contain_list = $('menu').getElementsByTagName('div');
	span_contain_list = $('menu').getElementsByTagName('span');
	for(var i = 0;i <= HOTEL_PAGE_ITEM_LENGTH;i++)
	{
		div_contain_list[i].innerHTML = init_page_title[i];
		if(i >= 2)
		{
			div_contain_list[i].style.background = "#FFF";
		}
	}
	if(focusFlag == "down")
	{
		div_contain_list[1].style.background = "#FF0";
		position_h = 0;
	}
	else if(focusFlag == "up")
	{
		div_contain_list[HOTEL_PAGE_ITEM_LENGTH].style.background = "#FF0";
		position_h = HOTEL_PAGE_ITEM_LENGTH - 1;
	}
	else
	{
		div_contain_list[1].style.background = "#FF0";
		position_h = 0;
	}
	span_contain_list[0].innerHTML = usb_clone_mode[usbCloneMode];
	span_contain_list[1].innerHTML = other[0];
	span_contain_list[2].innerHTML = other[0];
	span_contain_list[3].innerHTML = off_on[favoriteListDisable];
	span_contain_list[4].innerHTML = off_on[tunerLock];
	span_contain_list[5].innerHTML = off_on[menuLock];
	span_contain_list[6].innerHTML = off_on[usbLock];
	span_contain_list[7].innerHTML = off_on[sourceLock];
    span_contain_list[8].innerHTML = off_on[dvbNetworkUpdateFlag];
}

function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
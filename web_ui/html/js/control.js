//keyboard
function keyboard_init()
{
  window.document.getElementById("kbAddrInput").value = "http://";
}


function kbKeydown(keyValue)
{
  switch(keyValue)
  {
	case "delete":
	  var size = window.document.getElementById("kbAddrInput").value.length;
	var str = window.document.getElementById("kbAddrInput").value.substr(0, size-1);
	window.document.getElementById("kbAddrInput").value = str;
	break;
	case "enter":
	  var url = window.document.getElementById("kbAddrInput").value;
	window.location.href = url;
	break;
	case "gotoFav":
	  window.location.href = "favorite.html";
	break;
	case "return":
	  window.history.go(-1);
	break;
	default:
	window.document.getElementById("kbAddrInput").value += keyValue;
	break;
  }

}

//setting
var favCurrentNumber = 0;

function getPage(value)
{
  switch(value)
  {
	case "favTidy":
	  window.document.getElementById("favlistcontent").style.display = "block";
	  window.document.getElementById("homecontent").style.display = "none";
	  window.document.getElementById("favRefer").style.display = "none";
	  window.document.getElementById("helplistcontent").style.display = "none";
	  break;
	case "homeSet":
	  window.document.getElementById("homeinput").value = "http://";
	  window.document.getElementById("homecontent").style.display = "block";
	  window.document.getElementById("favlistcontent").style.display = "none";
	  window.document.getElementById("favRefer").style.display = "none";
	  window.document.getElementById("helplistcontent").style.display = "none";
	break;
	case "help":
	  window.document.getElementById("helplistcontent").style.display = "block";
	  window.document.getElementById("favlistcontent").style.display = "none";
	  window.document.getElementById("homecontent").style.display = "none";
	  window.document.getElementById("favRefer").style.display = "none";	  
	default:
	break;
  }
}

function noticeUseImage(param)
{
  switch(param)
  {
	case "ok":
      window.document.getElementById("noticeArea").innerHTML = "<img src='images/operateok.png'>";
      window.document.getElementById("noticeArea").style.display = "block";
      setTimeout(function(){window.document.getElementById("noticeArea").style.display = "none";},2500);
	break;
	case "err":
	break;
	default:
	break;
  }
}

function notice(noticeType,noticeString)
{
  window.document.getElementById("noticeArea").innerHTML = noticeString;
  window.document.getElementById("noticeArea").style.display = "block";
  setTimeout(function(){window.document.getElementById("noticeArea").style.display = "none";},2500);

  switch(noticeType)
  {
	case "setfavlist":
	  setTimeout("getPage('favTidy')",2500);
	break;
	default:
	break;
  }
}

function setHomeInput()
{
  var url = window.document.getElementById("homeinput").value;
  if (!url) {
	notice("","输入为空,请重新输入!");
	return;
  }
  window.document.getElementById("homepage_url").innerHTML = url;
  chWebkit.write("homepage", 0, url, 0);
  //notice("","设置主页成功!");
  noticeUseImage("ok");
}

function getRadioValue(RadioName){
  var obj;   
  obj=document.getElementsByName(RadioName);
  if(obj!=null){
	var i;
	for(i=0;i<obj.length;i++){
	  if(obj[i].checked){
		return obj[i].value;           
	  }
	}
  }
  return null;
}

function setHomeFromFav(num)
{
  var url = window.document.getElementById("favUrls"+num).innerHTML;
  window.document.getElementById("homepage_url").innerHTML = url;
  chWebkit.write("homepage", 0, url, "add");

  //notice("","设置主页成功!");
  noticeUseImage("ok");

}

function goHome()
{
  var homepage=chWebkit.read('homepage','0');
  window.location.href=homepage;
}

function favAdd()
{
  window.document.getElementById("favReferInput1").disabled = false;
  window.document.getElementById("favReferInput2").disabled = false;
  window.document.getElementById("favReferInput2").value = "http://";
  window.document.getElementById("favReferInput1").value = "";
  window.document.getElementById("favlistcontent").style.display = "none";
  window.document.getElementById("favReferTitle").innerHTML = "添加收藏";
  window.document.getElementById("favRefer").style.display = "block";
  window.document.getElementById("favReferInput1").focus();
}

function favEdit(num)
{
  window.document.getElementById("favReferInput1").disabled = false;
  window.document.getElementById("favReferInput2").disabled = false;
  window.document.getElementById("favReferInput1").value = window.document.getElementById("favName"+num).innerHTML;
  window.document.getElementById("favReferInput2").value = window.document.getElementById("favUrl"+num).innerHTML;
  window.document.getElementById("favlistcontent").style.display = "none";
  window.document.getElementById("favReferTitle").innerHTML = "编辑收藏";
  window.document.getElementById("favRefer").style.display = "block";
  window.document.getElementById("favReferInput1").focus();
  favCurrentNumber = num;
}

function favDelete(num)
{
  window.document.getElementById("favlistcontent").style.display = "none";
  window.document.getElementById("favReferTitle").innerHTML = "删除收藏";
  window.document.getElementById("favReferInput1").value = window.document.getElementById("favName"+num).innerHTML;
  window.document.getElementById("favReferInput2").value = window.document.getElementById("favUrl"+num).innerHTML;
  window.document.getElementById("favReferInput1").disabled = true;
  window.document.getElementById("favReferInput2").disabled = true;
  window.document.getElementById("favRefer").style.display = "block";
  window.document.getElementById("favReferEnter").focus();
  favCurrentNumber = num;
}

function favReferEnter(num)
{
  var favname;
  var favurl;

  favname = window.document.getElementById("favReferInput1").value;
  favurl = window.document.getElementById("favReferInput2").value;
  if (window.document.getElementById("favReferTitle").innerHTML == "添加收藏") {
	if (!favname) {
	  notice("","输入名称为空,请重新输入!");
	  return;
	}
	if (!favurl) {
	  notice("","输入地址为空,请重新输入!");
	  return;
	}   
	chWebkit.write("favorite",favname, favurl, "add");
	//notice("setfavlist","添加收藏成功!");
    noticeUseImage("ok");
	setTimeout(function(){window.location.reload();},2500);
  } else if (window.document.getElementById("favReferTitle").innerHTML == "编辑收藏") {
	chWebkit.write("favorite",favname, favurl, favCurrentNumber);
	//notice("setfavlist","编辑收藏成功!");
    noticeUseImage("ok");
	setTimeout(function(){window.location.reload();},2500);
  } else if (window.document.getElementById("favReferTitle").innerHTML == "删除收藏") {
	chWebkit.write("favorite", "null", "null", favCurrentNumber);
	//notice("setfavlist","删除收藏成功!");
    noticeUseImage("ok");
	setTimeout(function(){window.location.reload();},2500);
  }
}

function favReferCancel()
{
  getPage("favTidy");
}


















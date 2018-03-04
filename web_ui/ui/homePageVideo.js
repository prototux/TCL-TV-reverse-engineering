<!--netRange implement:According to the following json data format fill the complete data.Data is applied to recommend the video application list.The last entry for more video applications------------------------------------->
var videoList = 
[//UK
{"name":"TV Tagesschau","url":"http://www.tagesschau.de/tv","icon":"images/home-page-APP/icon_twitter.png"},
{"name":"Arte+7","url":"http://cehtml.arte.tv/fr/2764896.cehtml","icon":"images/home-page-APP/icon_goodwood-revival.png"},
{"name":"myspass","url":"http://sharp.hybridtv.myspass.de/sharp","icon":"images/home-page-APP/icon_goosegame.png"},
{"name":"Viewster","url":"http://www.viewster.tv/viewster_v2/loewe.cehtml","icon":"images/home-page-APP/icon_gtasia.png"},
{"name":"Cinetrailer","url":"http://nettv.cinetrailer.tv/loewe/region/de","icon":"images/home-page-APP/icon_hawaiianextremesport.png"},
{"name":"Inside GP","url":"http://insidegrandprix.app.nrmmh.tv/?language=German","icon":"images/home-page-APP/icon_metoo_pferderennen.png" },
{"name":"metoo","url":"http://tv.mytvscout.de/hbl/","icon":"images/home-page-APP/icon_minefield.png"},
{"name":"minefield","url":"http://hbbtv.weltderwunder.de/wdw3/","icon":"images/home-page-APP/icon_nimbus.png"},
{"name":"nimbus","url":"http://hbbtv.zdf.de/zdfmediathek/index.php?select=X&noclose=1","icon":"images/home-page-APP/icon_picasa.png"},
{"name":"picasa","url":"http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal","icon":"images/home-page-APP/icon_puzzle.png"},
{"name":"puzzle","url":"http://www.i-concerts.com/?q=en/netTV","icon":"images/home-page-APP/icon_radiomax.png"},
{"name":"radiomax","url":"http://netrange_app.nrmmh.tv/?pid=81&paynapp=true&nacamar=true&geoblocking=true","icon":"images/home-page-APP/icon_snakesandladders.png"},
{"name":"snowboarddiaries","url":"ttp://channel.netrange_podcastapp.nrmmh.tv/boy/","icon":"images/home-page-APP/icon_snowboarddiaries.png"},
{"name":"wm2014","url":"http://insidegrandprix.app.nrmmh.tv","icon":"images/home-page-APP/icon_sportschau_fifa_wm2014.png"},
{"name":"more","url":"http://insidegrandprix.app.nrmmh.tv","icon":"images/home-page-APP/icon_sudoku.png"}
];
   
function $(id)
{
    return document.getElementById(id);
}

function showAppList()
{
	var videoImgList=$("VideoMiddleList").getElementsByTagName("img");
	var spans=$("VideoMiddleList").getElementsByTagName("span");
	for(var i=0;i<videoList.length;i++)
	{
		videoImgList[i].src=videoList[i].icon;
		spans[i].innerHTML=videoList[i].name;
	}
}

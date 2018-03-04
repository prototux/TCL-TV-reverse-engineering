//1、位置变量--index 
var index = 0;

//2、每个按键的id
var sign_id;

//3、每个按键选中时焦点的坐标 
var sign_xy;

// 4、下层焦点选中时的样式 
var sign_css_focus_lower;
	    
// 5、下层焦点非选中时的样式 
var sign_css_lower;

//6、上层焦点选中时的样式
var sign_css_focus_up ;

//上次操作的时间
var time_Last;

//计时器，5秒内没有操作即使虚拟遥控器消失
var virtualRemote_timer;

//此变量为了协助，防止界面花屏抖动的问题
var setting = top.g_setting;

var remoteConntrolTypeTemp = "";


//初始化   1、位置变量--index   2、每个按键的id   3、每个按键选中时焦点的坐标      4、下层焦点选中时的样式     5、下层焦点非选中时的样式      6、上层焦点选中时的样式   
function init(remoteControlType,indexTemp)
{
	var tempIndex = index;
	switch(remoteControlType)
	{
		case "TimeBox":
		{
			//1、位置变量--index
			index = indexTemp;
			
			//2、每个按键的id
			sign_id   = ["table_basicKey_span_1",   "table_basicKey_span_2",   "table_basicKey_span_3",
			             "table_basicKey_span_4",   "table_basicKey_span_5",   "table_basicKey_span_6",
			             "table_basicKey_span_7",   "table_basicKey_span_8",   "table_basicKey_span_9", 
			             							"table_basicKey_span_0",

			             "table_playKey_td_play",   "table_playKey_td_stop",    "table_playKey_td_pause",
			             "table_playKey_td_fb",								    "table_playKey_td_ff",

			  "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b" ];
					
			
			//3、每个按键选中时焦点的坐标 ，按真实位置排版
			sign_xy   = [ 1420,650,1560,650,1700,650,
			              1420,740,1560,740,1700,740,
			              1420,830,1560,830,1700,830,
			              			1560,920,
			              1420,740,1560,740,1700,740,
			              1420,830,			1700,830,
			              1420,920,1530,920,1640,920,1750,920 ];
					
			// 4、下层焦点选中时的样式 
			sign_css_focus_lower = [ "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
			                         "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
			                         "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
			                         "table_basicKey_span_focus", "table_playKey_td_play_focus",  "table_playKey_td_stop_focus",  
			                         "table_playKey_td_pause_focus","table_playKey_td_fb_focus", "table_playKey_td_ff_focus", 
			                         "table_shortcutKey_td_r_focus",  "table_shortcutKey_td_g_focus", "table_shortcutKey_td_y_focus",   
			                         "table_shortcutKey_td_b_focus" ];
				  
				    
			// 5、下层焦点非选中时的样式 
			sign_css_lower = [ "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
			                   "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
			                   "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
			                   "table_basicKey_span","table_playKey_td_play", "table_playKey_td_stop",   
			                   "table_playKey_td_pause", "table_playKey_td_fb",	"table_playKey_td_ff",  
			                   "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",  
			                   "table_shortcutKey_td_b"  ];
				  
			//6、上层焦点选中时的样式
			sign_css_focus_up =  [ "focusForRemote",    "focusForRemote",    "focusForRemote",
			                       "focusForRemote",    "focusForRemote",    "focusForRemote",
			                       "focusForRemote",    "focusForRemote",    "focusForRemote",
			                       "focusForRemote","focusForRemote",     "focusForRemote",    
			                       "focusForRemote","focusForRemote",	"focusForRemote",
			                       "focusForRemote_Focus2",  "focusForRemote_Focus2", "focusForRemote_Focus2",  
			                       "focusForRemote_Focus2"  ];

			break;
		}
		
		case "HbbTV":
		{
			//1、位置变量--index
			index = indexTemp;
			
			//2、每个按键的id
			sign_id   = ["table_basicKey_span_1",   "table_basicKey_span_2",   "table_basicKey_span_3",
						 "table_basicKey_span_4",   "table_basicKey_span_5",   "table_basicKey_span_6",
				 	     "table_basicKey_span_7",   "table_basicKey_span_8",   "table_basicKey_span_9",
						 							"table_basicKey_span_0",

						 "table_playKey_td_play",   "table_playKey_td_stop",    "table_playKey_td_pause",
						 "table_playKey_td_fb",	    "table_playKey_span_exit",	"table_playKey_td_ff",

				"table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"  ];
			
			
			//3、每个按键选中时焦点的坐标 
			sign_xy   = [  1420,380,  1560,380,   1700,380,
			               1420,470,  1560,470,   1700,470,
			               1420,560,  1560,560,   1700,560,
			               			  1560,650,  
			               1420,740,  1560,740,   1700,740,
			               1420,830,  1560,830,   1700,830,
			               
			          1420,920,   1530,920,   1640,920,    1750,920 ];
			
			
			// 4、下层焦点选中时的样式 
		    sign_css_focus_lower = [ "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
		                             "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
		                             "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
		                             								 "table_basicKey_span_focus",
		                             								 
		                             "table_playKey_td_play_focus",  "table_playKey_td_stop_focus",  "table_playKey_td_pause_focus",
		                             "table_playKey_td_fb_focus",	"table_basicKey_span_text_focus","table_playKey_td_ff_focus", 
		                             
		               "table_shortcutKey_td_r_focus",  "table_shortcutKey_td_g_focus", "table_shortcutKey_td_y_focus",   "table_shortcutKey_td_b_focus" ];
		  
		    
			// 5、下层焦点非选中时的样式 
		    sign_css_lower = [ 		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
		                       		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
		                       		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
		                       		 						   "table_basicKey_span",
		                       		 						   
		                       		 "table_playKey_td_play",  "table_playKey_td_stop",   "table_playKey_td_pause",
		                       		 "table_playKey_td_fb",    "table_basicKey_span_text","table_playKey_td_ff",  
		                       		 
		              "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"  ];
		  
		  
			
		   //6、上层焦点选中时的样式
		   sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote",
		                            "focusForRemote",    "focusForRemote",    "focusForRemote", 
		                            "focusForRemote",    "focusForRemote",    "focusForRemote", 
		                            					 "focusForRemote", 
		                            					 
		                            "focusForRemote",    "focusForRemote",    "focusForRemote", 
		                            "focusForRemote",	 "focusForRemote",	  "focusForRemote", 
		                            
		                 "focusForRemote_Focus2",  "focusForRemote_Focus2", "focusForRemote_Focus2",   "focusForRemote_Focus2" ];
		   
		   break;
		}
		
		case "EPG":
		{
			//1、位置变量--index
			index = indexTemp;
			
			//2、每个按键的id
			sign_id   = ["table_basicKey_span_1",   "table_basicKey_span_2",   "table_basicKey_span_3","table_basicKey_span_4",   "table_basicKey_span_5",   "table_basicKey_span_6", "table_basicKey_span_7",   "table_basicKey_span_8",   "table_basicKey_span_9","table_basicKey_span_0", "table_playKey_td_play",  "table_playKey_td_stop",    "table_playKey_td_pause", "table_playKey_td_fb",	"table_playKey_td_ff", "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b" ];
			
			
			//3、每个按键选中时焦点的坐标 
			sign_xy   = [  1420,380,  1560,380,   1700,380, 1420,470,  1560,470,   1700,470,1420,560,  1560,560, 1700,560, 1560,650, 1420,740,1560,740,1700,740,1420,830,1700,830,1420,920,   1530,920,   1640,920,    1750,920 ];
			
			
			// 4、下层焦点选中时的样式 
		    sign_css_focus_lower = [ "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus","table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus","table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus","table_basicKey_span_focus", "table_playKey_td_play_focus",  "table_playKey_td_stop_focus",  "table_playKey_td_pause_focus","table_playKey_td_fb_focus","table_playKey_td_ff_focus",  "table_shortcutKey_td_r_focus",  "table_shortcutKey_td_g_focus", "table_shortcutKey_td_y_focus",   "table_shortcutKey_td_b_focus" ];
		  
		    
			// 5、下层焦点非选中时的样式 
		    sign_css_lower = [ 		 "table_basicKey_span", "table_basicKey_span", "table_basicKey_span", "table_basicKey_span", "table_basicKey_span",    "table_basicKey_span", "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", "table_basicKey_span", "table_playKey_td_play", "table_playKey_td_stop",   "table_playKey_td_pause",  "table_playKey_td_fb", "table_playKey_td_ff",  "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b" ];
		  
		  
			
		    //6、上层焦点选中时的样式
		    sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote", "focusForRemote",    "focusForRemote",    "focusForRemote","focusForRemote",    "focusForRemote",    "focusForRemote",  "focusForRemote","focusForRemote",     "focusForRemote",    "focusForRemote", "focusForRemote",	  "focusForRemote",  "focusForRemote_Focus2",  "focusForRemote_Focus2", "focusForRemote_Focus2",   "focusForRemote_Focus2"  ];
		   
		    
		    break;
		}
		
		case "Netflix":
		{
			//1、位置变量--index
			index = indexTemp;
			
			//2、每个按键的id
			sign_id   = ["table_playKey_td_play", "table_playKey_td_pause","table_playKey_td_fb","table_playKey_td_ff"];
			
			
			//3、每个按键选中时焦点的坐标 
			sign_xy   = [ 1420,830, 1700,830, 1420,920, 1700,920];
			
			
			// 4、下层焦点选中时的样式 
		    sign_css_focus_lower = ["table_playKey_td_play_focus",     "table_playKey_td_pause_focus",  "table_playKey_td_fb_focus",	 "table_playKey_td_ff_focus"];
		  
		    
			// 5、下层焦点非选中时的样式 
		    sign_css_lower = [ 	"table_playKey_td_play",  "table_playKey_td_pause",  "table_playKey_td_fb",	 "table_playKey_td_ff" ];
		  
		  
			
		    //6、上层焦点选中时的样式
		    sign_css_focus_up =    [  "focusForRemote",     "focusForRemote", "focusForRemote",	"focusForRemote"  ];
		   
		    
		    break;
		}
		
		case "Teletext":
		{
			//1、位置变量--index
			index = indexTemp;
			
			//2、每个按键的id
			sign_id   = ["table_basicKey_span_1",   "table_basicKey_span_2",   "table_basicKey_span_3", 
			             "table_basicKey_span_4",   "table_basicKey_span_5",   "table_basicKey_span_6", 
			             "table_basicKey_span_7",   "table_basicKey_span_8",   "table_basicKey_span_9", 
			             
			       "table_basicKey_span_zoomLeft",  "table_basicKey_span_0",   
			      
			    "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"  ];
			
			
			//3、每个按键选中时焦点的坐标 
			sign_xy   = [  1420,560,  1560,560,   1700,560, 
			               1420,650,  1560,650,   1700,650, 
			               1420,740,  1560,740,   1700,740,
			               
			               1420,830,  1560,830,   
			               
			         1420,920,   1530,920,   1640,920,    1750,920 ];
			
			// 4、下层焦点选中时的样式 
		    sign_css_focus_lower = [ "table_basicKey_span_focus",  "table_basicKey_span_focus",  "table_basicKey_span_focus", 
		                             "table_basicKey_span_focus",  "table_basicKey_span_focus",  "table_basicKey_span_focus", 
		                             "table_basicKey_span_focus",  "table_basicKey_span_focus",  "table_basicKey_span_focus", 
		                             
		                    "table_basicKey_span_zoomLeft_focus",  "table_basicKey_span_focus",  
		                        
		          "table_shortcutKey_td_r_focus","table_shortcutKey_td_g_focus","table_shortcutKey_td_y_focus","table_shortcutKey_td_b_focus"  ];
		  
			// 5、下层焦点非选中时的样式 
		    sign_css_lower = [ "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", 
		                       "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", 
		                       "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", 
		                       
		              "table_basicKey_span_zoomLeft",	 "table_basicKey_span",    
		                  
		         "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"   ];
		  
		    
		    //6、上层焦点选中时的样式
		    sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote",  
		                             "focusForRemote",    "focusForRemote",    "focusForRemote", 
		                             "focusForRemote",    "focusForRemote",    "focusForRemote", 
		                             
		                             "focusForRemote",	  "focusForRemote",    
		                             
		            "focusForRemote_Focus2",  "focusForRemote_Focus2", "focusForRemote_Focus2",   "focusForRemote_Focus2"   ];
		 
		    break;
		}
		
		
		 case "TimeShift":
		 {
			//1、位置变量--index
			index = indexTemp;
			
			//2、每个按键的id
			sign_id   = ["table_basicKey_span_1",   "table_basicKey_span_2",   "table_basicKey_span_3", "table_basicKey_span_4",   "table_basicKey_span_5",   "table_basicKey_span_6","table_basicKey_span_7",   "table_basicKey_span_8",   "table_basicKey_span_9","table_basicKey_span_0","table_playKey_td_play",  "table_playKey_td_stop",    "table_playKey_td_pause", "table_playKey_td_fb",	"table_playKey_td_ff",  "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"  ];
			
			
			//3、每个按键选中时焦点的坐标 
			sign_xy   = [  1420,380,  1560,380,   1700,380,  1420,470,  1560,470,   1700,470, 1420,560,  1560,560,   1700,560,1560,650,1420,830,  1560,830,   1700,830, 1420,920, 1700,920,1420,920,   1530,920,   1640,920,    1750,920 ];
			
			
			// 4、下层焦点选中时的样式 
		    sign_css_focus_lower = [ "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus", "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus", "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus","table_basicKey_span_focus","table_playKey_td_play_focus",  "table_playKey_td_stop_focus",  "table_playKey_td_pause_focus", "table_playKey_td_fb_focus",	"table_playKey_td_ff_focus", "table_shortcutKey_td_r_focus",  "table_shortcutKey_td_g_focus", "table_shortcutKey_td_y_focus",   "table_shortcutKey_td_b_focus"  ];
		  
		    
			// 5、下层焦点非选中时的样式 
		    sign_css_lower = [ 		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",  "table_basicKey_span", "table_playKey_td_play", "table_playKey_td_stop",   "table_playKey_td_pause", "table_playKey_td_fb",	 "table_playKey_td_ff", "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"   ];
		  
		  
			
		 	//6、上层焦点选中时的样式
		    sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote",  "focusForRemote",    "focusForRemote",    "focusForRemote", "focusForRemote",    "focusForRemote",    "focusForRemote",  "focusForRemote", "focusForRemote",     "focusForRemote",    "focusForRemote",  "focusForRemote",	 "focusForRemote",  "focusForRemote_Focus2",  "focusForRemote_Focus2", "focusForRemote_Focus2",   "focusForRemote_Focus2"  ];
		  
		    break;
		 }	
		
		
		  case "CH":
		  {
			  
			//1、位置变量--index
			index = indexTemp;
			
			//2、每个按键的id
			sign_id   = ["table_basicKey_span_1",   "table_basicKey_span_2",   "table_basicKey_span_3","table_basicKey_span_4",   "table_basicKey_span_5",   "table_basicKey_span_6",  "table_basicKey_span_7",   "table_basicKey_span_8",   "table_basicKey_span_9", "table_basicKey_span_0", "table_playKey_td_play",  "table_playKey_td_stop",    "table_playKey_td_pause", "table_playKey_td_fb",							       "table_playKey_td_ff",  "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"  ];
			
			
			//3、每个按键选中时焦点的坐标 
			sign_xy   = [  1420,380,  1560,380,   1700,380, 1420,470,  1560,470,   1700,470, 1420,560,  1560,560,   1700,560, 1560,650,1420,740,  1560,740,   1700,740,1420,830,  1700,830,1420,920,   1530,920,   1640,920,    1750,920 ];
			
			
			// 4、下层焦点选中时的样式 
		    sign_css_focus_lower = [ "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus", "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus", "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus", "table_basicKey_span_focus", "table_playKey_td_play_focus",  "table_playKey_td_stop_focus",  "table_playKey_td_pause_focus", "table_playKey_td_fb_focus",							       	 "table_playKey_td_ff_focus", "table_shortcutKey_td_r_focus",  "table_shortcutKey_td_g_focus", "table_shortcutKey_td_y_focus",   "table_shortcutKey_td_b_focus" ];
		  
		    
			// 5、下层焦点非选中时的样式 
		    sign_css_lower = [ 		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span","table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",  "table_basicKey_span",  "table_playKey_td_play", "table_playKey_td_stop",   "table_playKey_td_pause", "table_playKey_td_fb",							     "table_playKey_td_ff",  "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"   ];
		  
		  
			
		    //6、上层焦点选中时的样式
		    sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote", "focusForRemote",    "focusForRemote",    "focusForRemote", "focusForRemote",    "focusForRemote",    "focusForRemote", "focusForRemote",  "focusForRemote",     "focusForRemote",    "focusForRemote", "focusForRemote",	  "focusForRemote",   "focusForRemote_Focus2",  "focusForRemote_Focus2", "focusForRemote_Focus2",   "focusForRemote_Focus2"     ];
		  
		  
		    break;
		  }	
		
		  
		  case "TV":
		  {
			  
			//1、位置变量--index
			index = indexTemp;
			
			//2、每个按键的id
			sign_id   = ["table_basicKey_span_1",     "table_basicKey_span_2",   	  "table_basicKey_span_3",
			             "table_basicKey_span_4",     "table_basicKey_span_5",   	  "table_basicKey_span_6", 
			             "table_basicKey_span_7",     "table_basicKey_span_8",   	  "table_basicKey_span_9", 
			             "table_basicKey_span_list",  "table_basicKey_span_0_0",   	  "table_basicKey_span_text", 
			             "table_basicKey_span_guide", "table_basicKey_span_enter",	  "table_basicKey_span_exit", 
			             "table_basicKey_span_menu",  "table_basicKey_span_subtitle", "table_basicKey_span_info",  
			             
			             
			   "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"  ];
			
			//3、每个按键选中时焦点的坐标 
			sign_xy   = [  1420,380,  1560,380,   1700,380, 
			               1420,470,  1560,470,   1700,470, 
			               1420,560,  1560,560,   1700,560, 
			               1420,650,  1560,650,   1700,650,
			               1420,740,  1560,740,   1700,740,  
			               1420,830,  1560,830,   1700,830,
			               
			            1420,920, 1530,920,   1640,920,    1750,920  ];
			
			// 4、下层焦点选中时的样式 
		    sign_css_focus_lower = [ "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
		                             "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus", 
		                             "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus", 
		                           "table_basicKey_span_text_focus",    "table_basicKey_span_focus",    "table_basicKey_span_text_focus",
		                           "table_basicKey_span_text_focus",    "table_basicKey_span_text_focus","table_basicKey_span_text_focus", 
		                           "table_basicKey_span_text_focus",     "table_basicKey_span_text_focus",    "table_basicKey_span_text_focus", 
		                    "table_shortcutKey_td_r_focus",  "table_shortcutKey_td_g_focus", "table_shortcutKey_td_y_focus",   "table_shortcutKey_td_b_focus" 
		                    ];
		    
			// 5、下层焦点非选中时的样式 
		    sign_css_lower = [ 		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
		                       		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", 
		                       		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span", 
		                       		 "table_basicKey_span_text",    "table_basicKey_span",    "table_basicKey_span_text",
		                       		 "table_basicKey_span_text", "table_basicKey_span_text",   "table_basicKey_span_text", 
		                       		"table_basicKey_span_text", 	"table_basicKey_span_text", "table_basicKey_span_text", 
		                       		 "table_shortcutKey_td_r",  "table_shortcutKey_td_g", "table_shortcutKey_td_y",   "table_shortcutKey_td_b"   ];
		  
		    //6、上层焦点选中时的样式
		    sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote",  
		                             "focusForRemote",    "focusForRemote",    "focusForRemote",  
		                             "focusForRemote",    "focusForRemote",    "focusForRemote", 
		                             "focusForRemote",     "focusForRemote",    "focusForRemote", 
		                             "focusForRemote",     "focusForRemote",    "focusForRemote",  
		                             "focusForRemote",     	"focusForRemote",    "focusForRemote",
		                  "focusForRemote_Focus2",  "focusForRemote_Focus2", "focusForRemote_Focus2",   "focusForRemote_Focus2"  ];
		  
		    break;
		  }	
		  
		  
		  case "Media":
		  {
				//1、位置变量--index
				index = indexTemp;
				
				//2、每个按键的id
				sign_id   = ["table_Media_td_fb",   "table_Media_td_stop",    "table_Media_td_ff"];
				
				
				//3、每个按键选中时焦点的坐标 
				sign_xy   = [   1420,920,  1560,920,   1700,920   ];
				
				
				// 4、下层焦点选中时的样式 
			    sign_css_focus_lower = [ "table_Media_td_fb_focus",    "table_Media_td_stop_focus",    "table_Media_td_ff_focus"  ];
			  
			    
				// 5、下层焦点非选中时的样式 
			    sign_css_lower = [ "table_Media_td_fb",    "table_Media_td_stop",    "table_Media_td_ff" ];
			  
			  
				
			 	//6、上层焦点选中时的样式
			    sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote"];
			  
			    break;
		   }	
		  
		  
		   case "PVR":
		   {
				//1、位置变量--index
				index = indexTemp;
				
				//2、每个按键的id
				sign_id   = ["table_basicKey_span_stop",   "table_pvr_td_pvr",   "table_pvr_td_blue"];
				
				
				//3、每个按键选中时焦点的坐标 
				sign_xy   = [ 1420,920,  1560,920,   1700,920];
				
				
				// 4、下层焦点选中时的样式 
				 sign_css_focus_lower = [ "table_pvr_span_focus", "table_playKey_td_pvr_focus",  "table_shortcutKey_td_blue_focus"  ];
			    
				// 5、下层焦点非选中时的样式 
				 sign_css_lower =  [ "table_pvr_span", "table_playKey_td_pvr",  "table_shortcutKey_td_blue"  ];
			  
				
			 	//6、上层焦点选中时的样式
				 sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote"];
				  
			    break;
		    }
		   
		   case "HDMI":
			{
				//1、位置变量--index
				index = indexTemp;
				
				//2、每个按键的id
				sign_id   = ["table_basicKey_span_1",   "table_basicKey_span_2",   "table_basicKey_span_3",
				             "table_basicKey_span_4",   "table_basicKey_span_5",   "table_basicKey_span_6",
				             "table_basicKey_span_7",   "table_basicKey_span_8",   "table_basicKey_span_9", 
				             							"table_basicKey_span_0",
				             "table_hdmi_span_info",    "table_hdmi_span_menu",    "table_hdmi_span_exit"
				            ];
						
				
				//3、每个按键选中时焦点的坐标 
				sign_xy   = [  1420,560,  1560,560,   1700,560, 
				               1420,650,  1560,650,   1700,650, 
				               1420,740,  1560,740,   1700,740,
				               
				                          1560,830,   
				               
				               1420,920,  1560,920,   1700,920
				            ];
				
				
				// 4、下层焦点选中时的样式 
			    sign_css_focus_lower = [ "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
			                             "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
			                             "table_basicKey_span_focus",    "table_basicKey_span_focus",    "table_basicKey_span_focus",
			                             								 "table_basicKey_span_focus",
			                             								 
			                        "table_basicKey_span_text_focus",  "table_basicKey_span_text_focus", "table_basicKey_span_text_focus"
			                            ];
			  
			    
				// 5、下层焦点非选中时的样式 
			    sign_css_lower = [ 		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
			                       		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
			                       		 "table_basicKey_span",    "table_basicKey_span",    "table_basicKey_span",
			                       		 						   "table_basicKey_span",
			                       		 						   
			                        "table_basicKey_span_text",  "table_basicKey_span_text", "table_basicKey_span_text"
			                       		 
			                       		];
			  
			  
				
			   //6、上层焦点选中时的样式
			   sign_css_focus_up =    [ "focusForRemote",    "focusForRemote",    "focusForRemote",
			                            "focusForRemote",    "focusForRemote",    "focusForRemote", 
			                            "focusForRemote",    "focusForRemote",    "focusForRemote",
			                            					 "focusForRemote",
			                            "focusForRemote",    "focusForRemote",    "focusForRemote"
			                          ];
			   
			   break;
			}
		
		
	}
	
	//初始化 -- 设置 焦点的css
  	changeFocusCSS(index,tempIndex);
	
  	//初始化 -- 设置焦点的坐标
	moveFocusXY(index);
	
	
	
	
}



var virtualRemoteSpanList;


function initContent()
{
	//得到所有的span标签
	virtualRemoteSpanList = document.getElementById("virtualremoteId").getElementsByTagName("span");
	
	for(var i=0;i<virtualRemoteSpanList.length;i++)
	{
		virtualRemoteSpanList[i].innerHTML=top.virtualRemoteValues[i];
	}
	
}
	      
	      
//刷新时间
function refreshTime()
{
	time_Last = new Date().getTime();
}
	      
//恢复默认的状态
function recoverDefaultState(index1)
{
	//移动出的按键  进行恢复处理-----下层焦点-不选
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_lower[index]);
	
	index = index1;
	//初始化 -- 设置 焦点的css
  	changeFocusCSS(index,index);
	
  	//初始化 -- 设置焦点的坐标
	moveFocusXY(index);
	
	
}      
	      
//改变焦点的样式
function changeFocusCSS(index,temp)
{
	
	//移动出的按键  进行恢复处理-----下层焦点-不选
	document.getElementById(sign_id[temp]).setAttribute("class", sign_css_lower[temp]);
	
	//移动到的按键   进行焦点处理-----下层焦点-选中
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_focus_lower[index]);
	
		
	
	//当index<15的时候  更换焦点---上层焦点-选中
	document.getElementById("focusForRemote").setAttribute("class", sign_css_focus_up[index]);
	
}

//得到没有操作的时间
function getInoperationTime()
{
	var now = new Date().getTime();
	return now-time_Last;
}
//移动上层焦点的位置，---改变上层焦点的坐标
function moveFocusXY(index)
{
  
	//移动焦点---如果是第一个按键，index = 0   不适用通用的公式，做特殊处理
	if(index == 0)
	{
		document.getElementById("focusForRemote").style.left =sign_xy[0] +"px";
		document.getElementById("focusForRemote").style.top =sign_xy[1] +"px";
	}
	else
	{
		document.getElementById("focusForRemote").style.left =sign_xy[index*2] +"px";
		document.getElementById("focusForRemote").style.top =sign_xy[index*2+1] +"px";
	}
	getAbsolutePosition(index);
	
	refreshTime();
}   
	      
	      
	      



//---------------------------鼠标支持----------------------------

//鼠标点击
function WhenClick(id)
{
	//移动出的按键  进行恢复处理-----下层焦点-不选
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_lower[index]);
     
	 for(var i=0 ; i<sign_id.length;i++)
	 {  
		 if(sign_id[i] == id)
		 {    
			index = i;
		 }
	 }
	 
	 //初始化 -- 设置 焦点的css
	 changeFocusCSS(index,index);
		
	 //初始化 -- 设置焦点的坐标
	 moveFocusXY(index);
     
}


/*function keyproc(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			top.keyDownProcess(evt);
			break;
		}
			
		case top.VK_DOWN:
		{
			top.keyDownProcess(evt);
			break;
			
		}
		
		case top.VK_RIGHT:
		{
			top.keyDownProcess(evt);
			break;
		}
		
		case top.VK_ENTER:
		{
			top.keyDownProcess(evt);
			break;
		}
		case top.VK_LEFT:
		{
			top.keyDownProcess(evt);
			break;
		}
			
		default:
			top.keyDownProcess(evt);
			break;
	}
	return ret;
}*/




//动态的更换js和css
function loadExtentFile(filePath, fileType)
{
	if(fileType == "js")
	{
	    var oJs = document.createElement("script");
	 	oJs.setAttribute("type","text/javascript");
	 	oJs.setAttribute("src", filePath);//文件的地址 ,可为绝对及相对路径
	 	document.getElementsByTagName("head")[0].appendChild(oJs);//绑定
		 
	}
	else if(fileType == "css")
	{
		var oCss = document.createElement("link");
		oCss.setAttribute("rel", "stylesheet");
	 	oCss.setAttribute("type", "text/css");
	 	oCss.setAttribute("href", filePath);
	 	document.getElementsByTagName("head")[0].appendChild(oCss);//绑定
	}
}




//移除css效果,除了第一个默认的css，其他都删除
function removeCssTemp()
{
	var lists = document.getElementsByTagName("link");
	for ( var i = 0; i < lists.length; i++) 
	{
		if (lists[i].getAttribute("href").indexOf("\.css") != -1) 
		{
			if(i == 0)
			{
				//不作删除，第0个，是默认的css，不作删除
			}
			else
			{
				lists[i].parentNode.removeChild(lists[i]);
			}
			
		}
	}
}




//显示虚拟遥控器
function showVirtualRemote(remoteControlType)
{
	remoteConntrolTypeTemp = remoteControlType;
	top.g_channel.testLog("*******sun>>>>************virtualRemoteForALL.js**********************"+remoteControlType);
	
	
	initContent();
	
	
	if(remoteControlType == "TV")
	{
		loadExtentFile("virtualRemote/virtualRemoteForTV.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForTV.css", "css");
		
		//初始化开始的位置
		init("TV",7);
	}
	else if(remoteControlType == "HbbTV")
	{
		loadExtentFile("virtualRemote/virtualRemoteForHbbTV.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForHbbTV.css", "css");
		
		//初始化开始的位置
		init("HbbTV",7);
	}
	else if(remoteControlType == "EPG")
	{
		loadExtentFile("virtualRemote/virtualRemoteForEPG.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForEPG.css", "css");
		
		//初始化开始的位置
		init("EPG",10);
	}
	else if(remoteControlType == "TimeShift")
	{
		loadExtentFile("virtualRemote/virtualRemoteForTimeShift.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForTimeShift.css", "css");
		
		//初始化开始的位置
		init("TimeShift",10);
	}
	else if(remoteControlType == "CH")
	{
		loadExtentFile("virtualRemote/virtualRemoteForCH.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForCH.css", "css");
		
		//初始化开始的位置
		init("CH",15);
	}
	else if(remoteControlType == "Netflix")
	{
		loadExtentFile("virtualRemote/virtualRemoteForNetflix.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForNetflix.css", "css");
		
		//初始化开始的位置
		init("Netflix",0);
	}
	else if(remoteControlType == "Teletext")
	{
		loadExtentFile("virtualRemote/virtualRemoteForTeletext.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForTeletext.css", "css");
		
		//初始化开始的位置
		init("Teletext",7);
	}
	else if(remoteControlType == "TimeBox")
	{
		loadExtentFile("virtualRemote/virtualRemoteForTimeBox.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForTimeBox.css", "css");
		
		//初始化开始的位置
		init("TimeBox",7);
	}
	else if(remoteControlType == "Media")//Media的界面后面会再修改，暂时用这个界面
	{
		loadExtentFile("virtualRemote/virtualRemoteForMedia.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForMedia.css", "css");
		
		//初始化开始的位置
		init("Media",0);
	}
	else if(remoteControlType == "PVR")//PVR的界面
	{
		loadExtentFile("virtualRemote/virtualRemoteForPVR.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForPVR.css", "css");
		
		//初始化开始的位置
		init("PVR",0);
	}
	else if(remoteControlType == "HDMI")//HDMI的界面
	{
		loadExtentFile("virtualRemote/virtualRemoteForHDMI.js", "js");
		loadExtentFile("virtualRemote/virtualRemoteForHDMI.css", "css");
		
		//初始化开始的位置
		init("HDMI",7);
	}
	else
	{
		
	}
	
	
	
	
	
	
	
	
	
	
	if(remoteControlType != "default")
	{
		if( top.appOpenFlag ==1 &&top.RemoteConntrolType == "HbbTV")
		{
			top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x20|0x40|0x80|0x100|0x200|0x800,2,0);//得到部分按键的优先级
		}
		if( top.appOpenFlag ==1 &&top.RemoteConntrolType == "EPG")
		{
			top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x20|0x40|0x80|0x100|0x200|0x800,2,0);//得到部分按键的优先级
		}
		if( top.appOpenFlag ==1 &&top.RemoteConntrolType == "Netflix")
		{
			top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x20|0x40|0x80|0x100|0x200|0x800,2,0);//得到部分按键的优先级
		}
		
		if(top.RemoteConntrolType == "TV")
		{
			if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
		    {
		        setting.setMEMC(0);
		    }
		}
		
		
		top.g_setting.setProperty("memory.app.ui.virtualRemote.state","on");//更改键值 for 方向键、确认键、返回键
		
		
		//显示
		window.parent.document.getElementById("virtualRemote").style.zIndex = "999";
		window.parent.document.getElementById("virtualRemote").style.display = "block";
		
		
		
		refreshTime();//刷新当前的时间
		
		virtualRemote_timer = window.setInterval("virtualTime();", 1000);//初始化定时器

		//设置标志位
		top.virtualRemoteState = 1;
		
		//计数器+1
		top.virtualRemoteCount++;
	}
	

}


//虚拟遥控器---的计时器
function virtualTime()
{
	var inoperationTime =  getInoperationTime();
	if(inoperationTime>5000)
	{
		//1、恢复按键值
		
		//2、关闭计时器
		clearInterval(virtualRemote_timer);
		
		//3、隐藏虚拟遥控器
		hideVirtualRemote();
		
	}
}


//隐藏虚拟遥控器
function hideVirtualRemote()
{
	window.clearInterval(virtualRemote_timer);
	
	window.parent.document.getElementById("virtualRemote").style.zIndex = "-1";
	window.parent.document.getElementById("virtualRemote").style.display = "none";
	
	//如果是HbbTV、EPG、Netflix 这种应用，在虚拟遥控器隐藏的时候，要把按键的优先级还回去
	if( top.appOpenFlag ==1 &&top.RemoteConntrolType == "HbbTV")
	{
		top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
	}
	if( top.appOpenFlag ==1 &&top.RemoteConntrolType == "EPG")
	{
		top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
	}
	if( top.appOpenFlag ==1 &&top.RemoteConntrolType == "Netflix")
	{
		top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
	}
	if(remoteConntrolTypeTemp != "CH"&&top.g_channel.checkhbbtvStatus() >= 1)
	{
		top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
	}
	if(top.RemoteConntrolType == "TV")
	{
		 if(setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
		 {
		     setting.setMEMC(1);
		 }
	}
	
	
	//改回原来的键值
	top.g_setting.setProperty("memory.app.ui.virtualRemote.state","off");
	
	//去掉选中状态时的效果
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_lower[index]);
	
	//移除Css
	removeCssTemp();
	
	//设置标志位
	top.virtualRemoteState = 0;
	
	//计数器+1
	top.virtualRemoteCount++;
}


//根据当前的位置，找到此焦点所在的span，在span数组的绝对真实位置
function getAbsolutePosition(relativePosition)
{
	console.log("relativePosition: "+relativePosition);
	//1、判断焦点所在位置的标签是否是span
	var correntTag = document.getElementById(sign_id[relativePosition]);
	var currentTagName = correntTag.tagName;
	console.log("currentTagName: "+currentTagName);
	if(currentTagName == "SPAN")
	{
		//2、得到这个span的内容
		var spanContent = correntTag.innerHTML;
		console.log("spanContent: "+spanContent);
		//3、根据内容，得到绝对真实的位置
		for(var i = 0;i<top.virtualRemoteValues.length;i++)
		{
			if(spanContent == top.virtualRemoteValues[i])
			{
				//第一个参数是 装有所有span的List数组，第二个是当前焦点在List中的位置
				top.doEleScrForNoOption(virtualRemoteSpanList, i, 0);/*moveFlag(最后一个参数) :0 初始 1 down -1 up*/
				break;
			}
		}
	}
	else
	{
		//如果当前定位的位置，不是span的话，那么就把之前焦点的滚动效果取消。
		top.doEleScrForNoOption(virtualRemoteSpanList, 0, 0);//设置所有spanList中的第0个span（1），设置初始化效果。
	}
}



















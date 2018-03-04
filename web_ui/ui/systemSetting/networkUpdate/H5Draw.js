/* http://cloud.github.com/downloads/scottkiss/H5Draw/H5Draw.js */
(function(){
	if(!window.H5D){ window.H5D = {}}
	/*colors*/
	window.H5D.color = {
		red:"rgb(255,0,0)",
		green:"rgb(0,255,0)",
		blue:"rgb(0,0,255)",
		black:"rgb(0,0,0)"
	},
	
	/*H5D Context Object*/
	window.H5D.context = {
		width:{},
		height:{},
		/*canvas */
		cvs:{},
		/*canvas context*/
		ctx:{},
		type:{},
		rect:{
			x:{},
			y:{},
			width:{},
			height:{}
		},
		line:{
			x1:{},
			y1:{},
			x2:{},
			y2:{}
		},
		bz2:{
			startX:{},stratY:{},cpX:{},
			cpY:{},endX:{},endY:{}
		},
		bz3:{
			startX:{},stratY:{},cpX:{},cpY:{},
			cp2X:{},cp2Y:{},endX:{},endY:{}
		},
		/*store the sharps*/
		sharps:{
			
		},
		/*fill the sharp*/
		fill:function(effect){
			
			this.ctx.save();
			
			if(effect!=null){
				if(effect.color!=null){
					this.ctx.fillStyle = effect.color;
				}
				if(effect.shadow!=null){
				this.ctx.shadowBlur = effect.shadow.blur;
				this.ctx.shadowColor = effect.shadow.color;
				this.ctx.shadowOffsetX = effect.shadow.offsetX;
				this.ctx.shadowOffsetY = effect.shadow.offsetY;
				}
			}
			if(this.type==="rect"){
				
				this.ctx.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height);
				this.ctx.restore();
			}

			if((this.type==="circle")||(this.type==="sector")){
				
				this.ctx.fill();
				this.ctx.restore();
			}
			return this;
		}, 
		/*stroke the sharp*/
		stroke:function(effect){
			this.ctx.lineWidth = 1;
			if(effect!=null){
				if(effect.color!=null){
					this.ctx.strokeStyle = effect.color;
				}
				if(effect.lineWidth!=null){
					this.ctx.lineWidth = effect.lineWidth;
				}
				if(effect.shadow!=null){
					this.ctx.shadowBlur = effect.shadow.blur;
					this.ctx.shadowColor = effect.shadow.color;
					this.ctx.shadowOffsetX = effect.shadow.offsetX;
					this.ctx.shadowOffsetY = effect.shadow.offsetY;
			
				}
			}
			if(this.type==="rect"){

				this.ctx.strokeRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height);
				this.ctx.restore();
			}
			if((this.type==="circle")||(this.type==="sector")){
				this.ctx.stroke();
				this.ctx.restore();
			}
			
			if(this.type==="line"){
				this.ctx.beginPath();
				this.ctx.moveTo(this.line.x1,this.line.y1);
				this.ctx.lineTo(this.line.x2,this.line.y2);
				this.ctx.closePath();
				this.ctx.stroke();
				this.ctx.restore();
				
			}
			if(this.type==="bz2"){
			    
				this.ctx.beginPath();
				this.ctx.moveTo(this.bz2.startX,this.bz2.startY);
				this.ctx.quadraticCurveTo(this.bz2.cpX,this.bz2.cpY,
				this.bz2.endX,this.bz2.endY);
				this.ctx.stroke();
				this.ctx.restore();
			}
			if(this.type==="bz3"){
				this.ctx.beginPath();
				this.ctx.moveTo(this.bz3.startX,this.bz3.startY);
				this.ctx.bezierCurveTo(this.bz3.cpX,this.bz3.cpY,
				this.bz3.cp2X,this.bz3.cp2Y,
				this.bz3.endX,this.bz3.endY);
				this.ctx.stroke();
				this.ctx.restore();	
			}
			return this;
		},
		
	    /*draw a rect*/
		drawRect:function (x,y,width,height){
		    
			this.rect.x = x;
			this.rect.y= y ;
			this.rect.width = width;
			this.rect.height = height;
			this.type = "rect";
			return this;
		},
		/*draw a line*/
		drawLine:function(x1,y1,x2,y2){
		
			this.line.x1 = x1;
			this.line.y1 = y1;
			this.line.x2 = x2;
			this.line.y2 = y2;
			this.type = "line";
			return this;
		},
		/*draw a circle*/
		drawCircle:function(x,y,radius){
			
			this.ctx.beginPath();
			this.ctx.lineWidth = 1;
			this.ctx.arc(arguments[0],arguments[1],arguments[2],0,Math.PI*2,false);
			this.ctx.closePath();
			this.type="circle";
			return this;
		},
		/*draw a Sector*/	
		drawSector:function(x,y,radius,startAngle,endAngle,anticlockwise){
			
			this.ctx.beginPath();
			this.ctx.moveTo(arguments[0],arguments[1]);
			this.ctx.arc(arguments[0],arguments[1],arguments[2],
			arguments[3],arguments[4],arguments[5]);
			this.ctx.closePath();
			this.type="sector";
			return this;
		
		},
		/*draw a bezier for 2*/
		drawBz2:function(startX,startY,cpX,cpY,endX,endY){
			
			this.bz2.startX = startX;
			this.bz2.startY = startY;
			this.bz2.cpX = cpX;
			this.bz2.cpY = cpY;
			this.bz2.endX = endX;
			this.bz2.endY = endY;
			this.type = "bz2";
			return this;
			
		},
		/*draw a bezier for 3*/
		drawBz3:function(startX,startY,cpX,cpY,cp2X,cp2Y,endX,endY){
			
			this.bz3.startX = startX;
			this.bz3.startY = startY;
			this.bz3.cpX = cpX;
			this.bz3.cpY = cpY;
			this.bz3.cp2X = cp2X;
			this.bz3.cp2Y = cp2Y;
			this.bz3.endX = endX;
			this.bz3.endY = endY;
			this.type = "bz3";
			return this;
			
		},
		/*draw Text*/
		drawText:function(drawArgs){
			
			if(drawArgs.textBaseLine!=null){
				this.ctx.textBaseline = drawArgs.textBaseLine;
			}
			if(drawArgs.textAlign!=null){
				this.ctx.textAlign = drawArgs.textAlign;
			}
			if(drawArgs.font!=null){
				var f = "";
				if(drawArgs.font.fontWeight!=null){
					f = drawArgs.font.fontWeight+" ";
				}
				if(drawArgs.font.fontStyle!=null){
					f += drawArgs.font.fontStyle+" ";
				}
				if(drawArgs.font.fontSize!=null){
					f += drawArgs.font.fontSize+"px ";
					
				}
				if(drawArgs.font.fontFace==null){
					drawArgs.font.fontFace = "serif";
				}
				if(drawArgs.font.fontFace!=null){
					f += drawArgs.font.fontFace;
				}
				this.ctx.font = f;
			}
			if(drawArgs.type!=null){
				if(drawArgs.type==="fill"){
						this.ctx.fillStyle = drawArgs.color!=null?drawArgs.color:"rgb(0,0,0)";
						this.ctx.fillText(drawArgs.message,drawArgs.xPos,drawArgs.yPos);
				}
				if(drawArgs.type==="stroke"){
					this.ctx.strokeStyle = drawArgs.color!=null?drawArgs.color:"rgb(0,0,0)";
					this.ctx.strokeText(drawArgs.message,drawArgs.xPos,drawArgs.yPos);
				}
				if(drawArgs.type==="both"){
						this.ctx.fillStyle(drawArgs.color!=null?drawArgs.color:"rgb(0,0,0)");
						this.ctx.fillText(drawArgs.message,drawArgs.xPos,drawArgs.yPos);
						this.ctx.strokeStyle(drawArgs.color!=null?drawArgs.color:"rgb(0,0,0)");
						this.ctx.strokeText(drawArgs.message,drawArgs.xPos,drawArgs.yPos);
				}
			}
		},
		/*clear the canvas*/
		clear:function (x,y,width,height){
			
			if(arguments.length==0){
				
				this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
			}else if(arguments.length==4){
			
			  this.ctx.clearRect(arguments[0],arguments[1],arguments[2],arguments[3]);
			}
		},
		
		
	};
	/*get 2d canvas context by id*/
	function D2(canvasId){
		var canvas = document.getElementById(canvasId);
		var context = canvas.getContext("2d");
		window.H5D.context.ctx = context;
		window.H5D.context.cvs = canvas;
		window.H5D.context.width = canvas.width;
		window.H5D.context.height = canvas.height;
		return window.H5D.context;
	}
	window.H5D.D2 = D2;
	
	/*degrees to radians */
	function d2r(degrees){
		return degrees*(Math.PI / 180);
	}
	window.H5D.d2r= d2r;
	
}());
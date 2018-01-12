/*
	var map = new pMap("map");
	map.setTileSize(32,16);
	map.setWorldSize(6,6);
	map.setAsset("control","control.gif",7,7);
	map.initWorld();
*/

function pMap(el) {
	
	this.element = document.getElementById(el);
	this.element.map = this;
	this.assets = {};
	this.windowWidth = this.element.clientWidth;
	this.windowHeight = this.element.clientHeight;
	this.mouse = {};
	
	this.element.onmousemove = function(e) {
		
		if (window.event) e = window.event;
		
		this.map.mousex = e.clientX;
		this.map.mousey = e.clientY-80;
		this.map.updateCursor(e.clientX,e.clientY-80);
	}
	
	this.div = document.createElement("div");
	this.div.style.position = "absolute";
	this.div.style.border = "1px solid red";
	this.div.style.width = "64px";
	this.div.style.height = "32px";
	this.div.style.left = "64px";
	this.div.style.top = "32px";
	window.document.body.appendChild(this.div);
	
	this.po = [];
	
	for(var i=0;i<4;i++) {
		var e = document.createElement("div");
		e.style.position = "absolute";
		e.style.left = "0px";
		e.style.top = "0px";
		e.style.width = "3px";
		e.style.height = "3px";
		e.style.marginLeft = "-1px";
		e.style.marginTop = "-1px";
		e.style.backgroundColor = "pink";
		this.div.appendChild(e);
		this.po[i] = e.style;
	}
	
	this.dot = document.createElement("div");
	this.dot.style.position = "relative";
	this.dot.style.backgroundColor = "black";
	this.dot.style.width = "1px";
	this.dot.style.height = "1px";
	this.div.appendChild(this.dot);
	
	this.overtile = false;
	
	//*********************************************************************************************************************************************
	this.setTileSize = function(w,h) {
		this.tileWidth = w;
		this.tileHeight = h;
		this.tileHalfWidth = w/2;
		this.tileHalfHeight = h/2;
	}
	//*********************************************************************************************************************************************
	this.setWorldSize = function(w,h) {
		this.worldWidth = w;
		this.worldHeight = h;
		this.tiles = [];
		this.points = [];
		this.heightmap = [];
	}
	//*********************************************************************************************************************************************
	this.setAsset = function(type,url,w,h,hx,hy) {
		this.assets[type] = new pAsset(url,w,h,hx,hy);
	}
	//*********************************************************************************************************************************************
	this.initWorld = function() {
		
		var x,y,w,h,tx,ty,t;
		var map = this;
		
		this.offsetX = this.windowWidth / 2;
		this.offsetY = 64;
		
		// create tiles
		for(x=0;x<this.worldWidth;x++) {
			
			this.tiles[x] = [];
			
			for(y=0;y<this.worldHeight;y++) {
				
				t = this.assets.tile.use(this.element);
				
				tx = this.offsetX + y * this.tileHalfWidth - x * this.tileHalfWidth;
				ty = this.offsetY + y * this.tileHalfHeight + x * this.tileHalfHeight;
				
				t.style.left = tx+"px";
				t.style.top = ty+"px";
				t.floor = 0;
				
				this.tiles[x][y] = t;
				
				var g = document.createElement("div");
				g.innerHTML = x+":"+y;
	//			document.body.appendChild(g);
				g.style.position = "absolute";
				g.style.width = 20;
				g.style.height = 10;
				g.style.overflow = "hidden";
				g.style.border = "1px solid red";
				g.style.textAlign = "center";
				g.style.fontSize = "9px";
				g.style.left = (tx+20)+"px";
				g.style.top = (ty+6)+"px";
				
			}
		}
		
		// create points
		for(x=0;x<=this.worldWidth;x++) {
			
			this.points[x] = [];
			this.heightmap[x] = [];
			
			for(y=0;y<=this.worldHeight;y++) {
				
				t = this.assets.control.use(this.element);
				t.style.display = "none";
				t.onclick = function(e) {
					
					e.stopPropagation();
					e.preventDefault();
					
					map.setPointHeight(this.space.x,this.space.y,this.space.z+1);
					map.updateWorld();
					
				}
				
				/*
				t.style.cursor = "n-resize";
				t.onmousedown = function() {
					map.activecontrol = this;
					map.activecontroltimer = setInterval(map.updateControl,1000);
				}
				t.onmouseup = function(e) {
					map.activecontrol = undefined;
					map.activecontroltimer = clearInterval(map.activecontroltimer);
				}
				*/
				
				tx = this.offsetX + y * this.tileHalfWidth - x * this.tileHalfWidth;
				ty = this.offsetY + y * this.tileHalfHeight + x * this.tileHalfHeight;
				
				t.title = x+":"+y;
				t.style.left = tx+"px";
				t.style.top = ty+"px";
				t.space = {"x":x,"y":y,"z":0};
				
				// add refs to tiles
				t.north = undefined;
				t.south = undefined;
				t.east = undefined;
				t.west = undefined;
				if (x>0 && y>0) t.north = this.tiles[x-1][y-1];
				if (x>0 && y<this.worldHeight) t.east = this.tiles[x-1][y];
				if (x<this.worldWidth && y>0) t.west = this.tiles[x][y-1];
				if (x<this.worldWidth && y<this.worldHeight) t.south = this.tiles[x][y];
				
				this.points[x][y] = t;
				
				if (x>0 && y>0) {
					t = this.tiles[x-1][y-1];
					t.north = this.points[x-1][y-1];
					t.south = this.points[x][y];
					t.east = this.points[x-1][y];
					t.west = this.points[x][y-1];
				}
				
			}
		}
	}
	//*********************************************************************************************************************************************
	this.updateControl = function() {
		var control = this.activecontrol;
		window.status = Math.random();
		if (control == undefined) {
			map.activecontroltimer = clearInterval(this.activecontroltimer);
			return;
		}
		
	}
	//*********************************************************************************************************************************************
	this.setPointHeight = function(x,y,h) {
		this.points[x][y].space.z = h;
		this.updatePointHeight(x,y);
	}
	//*********************************************************************************************************************************************
	this.updatePointHeight = function(x,y) {
		// recursive update
		var p = [[1,0,-1,0],[0,1,0,-1]]; // lookup
		var tx,ty,i
		var t = this.points[x][y].space.z;
		var u;
		window.calls++;
		
		for(i=0;i<4;i++) {
			
			tx = x + p[0][i];
			ty = y + p[1][i];
			
			if ((tx >= 0) && (ty >= 0) && (tx < this.worldWidth+1) && (ty < this.worldHeight+1)) {
				u = this.points[tx][ty].space.z;
				
				if (u < t) {
					// target point is lower
					
					if (u+1 < t) {
						
						this.points[tx][ty].space.z = t-1;
						this.updatePointHeight(tx,ty);
						
					}
					
				} else {
					// higher!
					
				//	if (u+1 > t) {
				//		
				//		this.points[tx][ty].space.z = t+1;
				//		this.updatePointHeight(tx,ty);
				//		
				//	}
					
				}
				
			//	this.points[tx][ty].space.z = t;
			}
			
		}
	}
	//*********************************************************************************************************************************************
	this.updateWorld = function() {
		
		var x,y,w,h,tx,ty,t,c;
		var map = this;
		
		w = this.offsetx;
		h = this.offsety;
		
		// update points
		for(x=0;x<=this.worldWidth;x++) {
			for(y=0;y<=this.worldHeight;y++) {
				t = this.points[x][y];
				c = this._3Dto2D(t.space);
				t.style.left = c.x+"px";
				t.style.top = c.y+"px";
			//	t.src = "control"+t.space.z+".gif";
				this.heightmap[y][x] = t.space.z;
			}
		}
		
		for(x=0;x<this.worldWidth;x++) {
			for(y=0;y<this.worldHeight;y++) {
				t = this.tiles[x][y];
				c = t.north.space.z + t.south.space.z + t.east.space.z + t.west.space.z;
				c = c/4;
				this.tiles[x][y].floor = Math.floor(c);
				t.style.top = this._3Dto2D({"x":x,"y":y,"z":Math.floor(c)}).y;
				
				h=0;
				
				if (t.north && t.north.space.z > c) h+=1;
				if (t.east && t.east.space.z > c) h+=2;
				if (t.south && t.south.space.z > c) h+=4;
				if (t.west && t.west.space.z > c) h+=8;
				
				if (h && c.toString().indexOf(".")==-1) {
					h+=15;
				}
				
				t.src = "tiles/"+h+".gif";
				
			}
		}
		
	}
	//*********************************************************************************************************************************************
	this._3Dto2D = function(d) {
		var tx,ty;
		tx = this.offsetX + d.y * this.tileHalfWidth - d.x * this.tileHalfWidth;
		ty = this.offsetY + d.y * this.tileHalfHeight + d.x * this.tileHalfHeight - (d.z * (this.tileHalfHeight/2));
		return {"x":tx,"y":ty};
	}
	//*********************************************************************************************************************************************
	this.updateCursor = function(x,y) {
		
		// convert to iso offset origin
		var mx = x - this.offsetX;
		var my = y - this.offsetY;
		var tx = Math.floor(mx / this.tileWidth);
		var ty = Math.floor(my / this.tileHeight);
		
		// get inner tile mouse pos
		mx = mx % this.tileWidth;
		my = my % this.tileHeight;
		if (mx < 0) mx = this.tileWidth+mx;
		
		
		// get tile mouse is on in 2D grid
		var py = ty + tx;
		var px = py - tx*2;
		
		// make tile polygon
		var p = [
			this.tileHalfWidth,0,
			this.tileWidth,this.tileHalfHeight,
			this.tileHalfWidth,this.tileHeight,
			0,this.tileHalfHeight
		];
		
		//--------------------------------------
		
		var sx = px;
		var sy = py;
		var pp;
		var t,c;
		var x=0;
		
		do {
			
			pp = [
				this.tileHalfWidth,0,
				this.tileWidth,this.tileHalfHeight,
				this.tileHalfWidth,this.tileHeight,
				0,this.tileHalfHeight
			];
			
			window.status = px+":"+py;
			
			if (px>=0 && px < this.worldWidth && py>=0 && py<this.worldHeight) {
				
				t = this.tiles[px][py];
				
			} else {
				
				t = {
					floor : 0,
					north : { space : { z : 0 } },
					south : { space : { z : 0 } },
					east : { space : { z : 0 } },
					west : { space : { z : 0 } }
				}
				
			}
			
				
				pp[1] += (t.floor - t.north.space.z) * 8;
				pp[3] += (t.floor - t.east.space.z) * 8;
				pp[5] += (t.floor - t.south.space.z) * 8;
				pp[7] += (t.floor - t.west.space.z) * 8;
				
				this.po[0].left = pp[0];
				this.po[0].top = pp[1];
				this.po[1].left = pp[2];
				this.po[1].top = pp[3];
				this.po[2].left = pp[4];
				this.po[2].top = pp[5];
				this.po[3].left = pp[6];
				this.po[3].top = pp[7];
				
				var y = (((pp[5] - pp[1]))-32);
				//my -= 
				
				this.dot.style.left = mx+"px";
				this.dot.style.top = my+(t.floor * 8)+"px";
				
				//my += t.floor * 16;
				
				c = this.pointInMap(mx,my+t.floor * 8,pp);
				//window.status = t.floor * 8+" : "+y;
				
				
				
				switch(c) {
					case 1: // top left
						py--;
						mx+= 32;
						my+= 16;
					break;
					case 2: // top right
						px--;
						mx-=32;
						my+=16;
					break;
					case 3: // bottom left
						px++;
						mx+=32;
						my-=16;
					break;
					case 4: // bottom right;
						py++;
						mx-=32;
						my-=16;
					break;
				}
			
			//	this.dot.style.left = mx+"px";
			//	this.dot.style.top = my+"px";
			
				
				if (px>=0 && px < this.worldWidth && py>=0 && py<this.worldHeight) {
				
					var overtile = this.tiles[px][py];
					
					if (this.overtile) {
						if (this.overtile != overtile) {
							this.overtile.north.style.display = this.overtile.south.style.display = this.overtile.east.style.display = this.overtile.west.style.display = "none";
							this.overtile = overtile;
							this.overtile.north.style.display = this.overtile.south.style.display = this.overtile.east.style.display = this.overtile.west.style.display = "block";
						}
					} else {
						this.overtile = overtile;
					}
					
				} 
				
			
			
			x++;
			if (x > 10) {
				c=0;
				//alert("lost");
			}
			
		} while (c > 0);
		
		
		
		
		//--------------------------------------
		
		
			
			
		// display cursor on tile
//		var d = this._3Dto2D({"x":px,"y":py,"z":0});
//		this.cursor.style.left = d.x+"px";
//		this.cursor.style.top = d.y+"px";
		//console.log("x:"+px+"  y:"+py);
		
//		} else {
//			this.cursor.style.left = "-100px";
//		}
		
	}
	//*********************************************************************************************************************************************
	this.setCursor = function(cursor) {
//		this.cursor = this.assets[cursor].use(this.element);
//		this.cursor.style.zIndex = "1";
	}
	//*********************************************************************************************************************************************
	this.pointInMap = function(x,y,points) {
		var inpoly = 0;
		var i,j = 3;
		
		// temp lookup array, OPTIMIZE THIS!
		var px = [points[0],points[2],points[4],points[6]];
		var py = [points[1],points[3],points[5],points[7]];
		
		for (i=0;i<4;i++) {
			if (py[i] < y && py[j] >= y  || py[j] < y && py[i] >= y) {
				if (px[i] + (y-py[i]) / (py[j] - py[i]) * (px[j] - px[i]) < x) {
					inpoly = 1 - inpoly;
				}
			}
			j=i;
		}
		
		if (inpoly == 0) {
			i=0;
			if (x < this.tileHalfWidth) i+=1; else i+=2;
			if (x < this.tileHalfWidth) {
				if (y > py[3]) i+=2;
			} else {
				if (y > py[1]) i+=2;
			}
			return i; // return pos id
		} else {
			return 0; // if on the dimond
		}
		
	}
		this.draw = function(unit,x,y) {
		var u = this.assets[unit].use(this.element);
		var s = this.tiles[x][y];
		u.style.left = s.style.left;
		u.style.top = s.style.top;
	}
	//*********************************************************************************************************************************************
}

//*********************************************************************************************************************************************
//*********************************************************************************************************************************************
//*********************************************************************************************************************************************

function pAsset(url,w,h,hx,hy) {

	this.url = url;
	this.width = w;
	this.height = h;
	this.handlex = hx;
	this.handley = hy;
	
	//*********************************************************************************************************************************************
	this.use = function(e) {
		var t = document.createElement("img");
		t.src = url;
		t.width = this.width;
		t.height = this.height;
		t.style.marginLeft = -this.handlex+"px";
		t.style.marginTop = -this.handley+"px";
		t.style.position = "absolute";
		
		e.appendChild(t);
		return t;
	}
	//*********************************************************************************************************************************************

}

//*********************************************************************************************************************************************
//*********************************************************************************************************************************************


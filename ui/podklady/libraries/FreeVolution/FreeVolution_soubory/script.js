// var quality='high';

// dom nodes for easy access.
var backgroundpath = 'tilegen/';
var objectpath ='images/objects/';
var map=document.getElementById('map');
var cursor=document.getElementById('cursor');
var watercursor=document.getElementById('watercursor');
var cursorimage=document.getElementById('cursorimage');
var watercursorimage=document.getElementById('watercursorimage');
var viewportgui =document.getElementById('viewportgui');
var Objviewport =document.getElementById('viewport');


// viewport vars
var overlap=new Array(32,32,32,32); // margin like tiles/css (north-east-south-west)
var clientsize=new Array(700,500);
var viewport=new Array(); // startX,endX,startY,endY

Objviewport.style.width=clientsize[0]+'px';
Objviewport.style.height=clientsize[1]+'px';

//scroll options
var scrollDirection=null;
var scrollby=3;
var scrolltime=100;

//mouse handler vars
var cursorover=null;
var clickedtile=null;

// mouse handling, can we move the cursor, or is a move pending?
var check_cursor=true;

// menu vars.
var menutimers=new Array();

if (document.addEventListener) { //w3c
	// set focus bluring:
	map.addEventListener('focus',blur,false);
	cursor.addEventListener('focus',blur,false);
	cursor.addEventListener('mousemove',checkcursor,false);
	cursorimage.addEventListener('focus',blur,false);

	// add events to buttons in the gui.
	document.getElementById('gui_button_bottom').addEventListener('mouseover',setScrollDirection,false);
	document.getElementById('gui_button_top').addEventListener('mouseover',setScrollDirection,false);
	document.getElementById('gui_button_left').addEventListener('mouseover',setScrollDirection,false);
	document.getElementById('gui_button_right').addEventListener('mouseover',setScrollDirection,false);

	document.getElementById('gui_button_bottom').addEventListener('mouseout',unsetScrollDirection,false);
	document.getElementById('gui_button_top').addEventListener('mouseout',unsetScrollDirection,false);
	document.getElementById('gui_button_left').addEventListener('mouseout',unsetScrollDirection,false);
	document.getElementById('gui_button_right').addEventListener('mouseout',unsetScrollDirection,false);
	cursor.addEventListener('click',clickcursor,false);
} else { // IE crap
	// set focus bluring:
	map.attachEvent('onfocus',blur);
	cursor.attachEvent('onfocus',blur);
	cursor.attachEvent('onmousemove',checkcursor);
	cursorimage.attachEvent('onfocus',blur);

	// add events to buttons in the gui.
	document.getElementById('gui_button_bottom').attachEvent('onmouseover',setScrollDirection);
	document.getElementById('gui_button_top').attachEvent('onmouseover',setScrollDirection);
	document.getElementById('gui_button_left').attachEvent('onmouseover',setScrollDirection);
	document.getElementById('gui_button_right').attachEvent('onmouseover',setScrollDirection);

	document.getElementById('gui_button_bottom').attachEvent('onmouseout',unsetScrollDirection);
	document.getElementById('gui_button_top').attachEvent('onmouseout',unsetScrollDirection);
	document.getElementById('gui_button_left').attachEvent('onmouseout',unsetScrollDirection);
	document.getElementById('gui_button_right').attachEvent('onmouseout',unsetScrollDirection);

	cursor.attachEvent('onclick',clickcursor);
}


function loadmap(startX,endX,startY,endY){
	viewport[0]=startX-64;
	viewport[1]=endX+64;
	viewport[2]=startY-64;
	viewport[3]=endY+64;
	
	var left=startX-400;
	map.style.left=parseInt(map.style.left)-left+'px';
	var top=startY-400;	
	map.style.top=parseInt(map.style.top)-top+'px';
	
	fetch(parseInt(startX)-64,parseInt(endX)+64,startY-64,parseInt(endY)+64);
}
function setlocation(){
	var userx=prompt('x?'); 
	var usery=prompt('y?'); 
	loadmap(userx,(userx+clientsize[0]),usery,(usery+clientsize[1]));
}


//gets settings from the selected quality setting
function getsetting(quality,setting){
	if(settings[quality][setting]!=null){
		return settings[quality][setting];
	} else {
		return settings['default'][setting];
	}
}


function createRequestObject(){
	var request_o; //declare the variable to hold the object.
	var browser = navigator.appName; //find the browser name
	if(browser == "Microsoft Internet Explorer"){
		/* Create the object using MSIEs method */
		request_o = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		/* Create the object using other browsers method */
		request_o = new XMLHttpRequest();
	}
	return request_o; //return the object
}


function fetch(startX,endX,startY,endY){
		var xmlhttp = false;
		xmlhttp=createRequestObject();
		// cook up which range we need to get.
		var url = "xml/tiles.php?startX="+startX+"&endX="+endX+"&startY="+startY+"&endY="+endY+"&waterlevels="+getsetting(quality,'water_levels')+'&watertransparancy='+getsetting(quality,'water_transparancy');
		//window.open(url);
		xmlhttp.open("GET", url, true);
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var response=xmlhttp.responseXML;
				// first add the tiles.
				var tiles=response.getElementsByTagName("tile");
				var tilescount=tiles.length;
				for(var i=0;i<tilescount;i++){
					addtile(tiles[i].attributes[0].nodeValue,
							tiles[i].attributes[1].nodeValue,
							tiles[i].attributes[2].nodeValue,
							tiles[i].attributes[3].nodeValue,
							tiles[i].attributes[4].nodeValue,
							tiles[i].attributes[5].nodeValue,
							tiles[i].attributes[6].nodeValue
							);
				}
				var water=response.getElementsByTagName("water");
				var watercount=water.length;
				for(var i=0;i<watercount;i++){
					addwater(water[i].attributes[0].nodeValue,
							water[i].attributes[1].nodeValue,
							water[i].attributes[2].nodeValue,
							water[i].attributes[3].nodeValue,
							water[i].attributes[4].nodeValue,
							water[i].attributes[5].nodeValue);
				}

			}
		}
		xmlhttp.send(null);
		return true;
}

function destroy(startX,endX,startY,endY){
		var xmlhttp = false;
		xmlhttp=createRequestObject();
		// cook up which range we need to get.
		var url = "xml/tiles.php?startX="+startX+"&endX="+endX+"&startY="+startY+"&endY="+endY+"&waterlevels="+getsetting(quality,'water_levels')+'&watertransparancy='+getsetting(quality,'water_transparancy');
		xmlhttp.open("GET", url, true);
		
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var response=xmlhttp.responseXML;
				// first remove the tiles.
				var tiles=response.getElementsByTagName("tile");
				var tilescount=tiles.length;
				for(var i=0;i<tilescount;i++){
					if(document.getElementById(tiles[i].attributes[0].nodeValue)){
						map.removeChild(document.getElementById(tiles[i].attributes[0].nodeValue));
					}
				}
				var water=response.getElementsByTagName("water");
				var watercount=water.length;
				for(var i=0;i<watercount;i++){
					if(document.getElementById(water[i].attributes[0].nodeValue)){
						map.removeChild(document.getElementById(water[i].attributes[0].nodeValue));
					}
				}

			}
		}
		xmlhttp.send(null);
		return true;
}

function addtile(id,x,y,zindex,picture,type,mouseevent){
	if(!document.getElementById(id)){
		//var obj=document.createElement("div");
		
		var img=document.createElement("img");
		img.id=id;
		img.style.position="absolute";
		img.style.left=x+"px";
		img.style.top=y+"px";
		img.style.zIndex=zindex;		
		img.src=backgroundpath+type+picture+".png";
		img.className="tile";
		
		map.appendChild(img);
		if(mouseevent=='true'){			
			if (img.addEventListener) { //w3c
				img.addEventListener('mouseover',checktile,false);
				img.addEventListener('mousemove',checktile,false);
				img.addEventListener('focus',blur,false);
			} else { // IE
				img.attachEvent('onmouseover',checktile);
				img.attachEvent('onmousemove',checktile);
				img.attachEvent('onfocus',blur);
			}
		}
	}
}
function addwater(id,x,y,zindex,picture,mouseevent){
	var watertransparancy=getsetting(quality,'water_transparancy');
	if(!document.getElementById(id)){			
		var img=document.createElement("img");
		img.id=id;
		img.style.position="absolute";
		img.style.left=x+"px";
		img.style.top=y+"px";
		img.style.zIndex=zindex;
		if(watertransparancy){
			setopacity(img,40);
		}
		img.src=backgroundpath+'water/'+picture+'.png';
		img.className='tile';
		//obj.appendChild(img);
		map.appendChild(img);
		if(mouseevent=='true'){ // true is a string here!
			if (img.addEventListener) { //w3c
				img.addEventListener('mouseover',checktile,false);
				img.addEventListener('focus',blur,false);
			} else { // IE
				img.attachEvent('onmouseover',checktile);
				img.attachEvent('onfocus',blur);
			}
		}
	}
}

function tilelocation(id){
	var obj=document.getElementById(id);
	if(obj){
		var top=obj.style.top;
		var left=obj.style.left;		
		var tmp = new Array();
		tmp[0]=left;
		tmp[1]=top;
		return tmp;
	} else {
		return false;
	}	
} 

function createmessage(message,tileid,livespan){	
	var tile=tilelocation(tileid);
	if(tile!=false){
		var obj=document.createElement("div");	
		obj.id='message'+tileid;
		obj.style.position="absolute";		
		obj.style.left=tile[0];
		obj.style.top=tile[1];
		obj.style.zIndex=300;
		obj.className='message';
		obj.innerHTML=message;
		map.appendChild(obj);
		if(livespan>0){			
			setTimeout('map.removeChild(document.getElementById("'+obj.id+'"));',livespan);
		}
		return obj.id;
	}	
}

function clickcursor(event){
	if (!event) var event = window.event; // make sure we actually get the event in IE
	if (event.target){ //w3c
		targ = event.target;
	} else if (event.srcElement) { // IE specific
		targ = event.srcElement;
	}
	if (targ.nodeType == 3){ // Safari bug correction, it selects the textrange instead of the object.
		targ = targ.parentNode;
	}
	undisplay_action();
	//alert(parseInt(cursorover.style.left)+parseInt(map.style.left));
	fetchactions(cursorover);	
}


function fetchactions(tileobj){
		var xmlhttp = false;
		xmlhttp=createRequestObject();
		// cook up which range we need to get.
		var clickedtile=tileobj;
		var tileid=tileobj.id;		
		var url = "xml/actions.php?id="+tileid;
		
		xmlhttp.open("GET", url, true);
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				
				var usespiral=getsetting(quality,'menu_spiral');
				var usegrow=getsetting(quality,'menu_grow');
				var response=xmlhttp.responseXML;
				// first add the tiles.
				var actions=response.getElementsByTagName("action");
				var actionscount=actions.length;
				if(actionscount==1){
					display_action(clickedtile.id,actions[0].attributes[0].nodeValue,
						actions[0].attributes[1].nodeValue,
						-50,
						25
					);
				} else {
					var menubottomspace=(parseInt(Objviewport.style.height)-(parseInt(cursorover.style.top)+parseInt(map.style.top)));
					var menutopspace=(parseInt(cursorover.style.top)+parseInt(map.style.top));
					var menurightspace=(parseInt(Objviewport.style.width)-(parseInt(cursorover.style.left)+parseInt(map.style.left)))-40; // added button width:40
					var menuleftspace=(parseInt(cursorover.style.left)+parseInt(map.style.left)); // added button width:40
					
					var distanceperitem=15;
					var totaldistance=distanceperitem*actionscount;
					// check corners first!
					if(totaldistance>menurightspace && totaldistance>menutopspace){
						var gooddegreesright=Math.asin(menurightspace / totaldistance)/(Math.PI/180);
						var gooddegreestop=Math.asin(menutopspace / totaldistance)/(Math.PI/180);
						var degreestart=25-(90+gooddegreesright); // 0 / 90 / 270
						var circle=90+gooddegreesright+gooddegreestop;					
						var degrees=circle/actionscount;
					
					} else if(totaldistance>menuleftspace && totaldistance>menutopspace){
						var gooddegreesleft=Math.asin(menuleftspace / totaldistance)/(Math.PI/180);
						var gooddegreestop=Math.asin(menutopspace / totaldistance)/(Math.PI/180);
						var degreestart=25-(0+gooddegreestop); // 270 / 180 
						var circle=90+gooddegreesleft+gooddegreestop;					
						var degrees=circle/actionscount;
					
					} else if(totaldistance>menurightspace && totaldistance>menubottomspace){
						var gooddegreesright=Math.asin(menurightspace / totaldistance)/(Math.PI/180);
						var gooddegreesbottom=Math.asin(menubottomspace / totaldistance)/(Math.PI/180);
						var degreestart=25-(180+gooddegreesright); 
						var circle=90+gooddegreesright+gooddegreesbottom-10;					
						var degrees=circle/actionscount;
					
					} else if(totaldistance>menuleftspace && totaldistance>menubottomspace){
						var gooddegreesleft=Math.asin(menuleftspace / totaldistance)/(Math.PI/180);
						var gooddegreesbottom=Math.asin(menubottomspace / totaldistance)/(Math.PI/180);
						var degreestart=25-(270+gooddegreesbottom); 
						var circle=90+gooddegreesleft+gooddegreesbottom-10;					
						var degrees=circle/actionscount;
					
					} else if(totaldistance>menubottomspace){ // check to see if theres enough space below
						// ac=viewport['bottom']-idx;						
						var gooddegrees=Math.asin(menubottomspace / totaldistance)/(Math.PI/180);
						
						var degreestart=25-(270+gooddegrees); // why do we need the 115?
						var circle=360-2*(90-gooddegrees);
						var degrees=circle/actionscount;
					} else if(totaldistance>menutopspace){
						// ac=viewport['bottom']-idx;						
						var gooddegrees=Math.asin(menutopspace / totaldistance)/(Math.PI/180);
						var degreestart=25-(90+gooddegrees); 
						var circle=360-2*(90-gooddegrees);
						var degrees=circle/actionscount;						
					} else if(totaldistance>menurightspace){
						var gooddegrees=Math.asin(menurightspace / totaldistance)/(Math.PI/180);
						
						var degreestart=25-(180+gooddegrees); 
						var circle=360-2*(90-gooddegrees);
						var degrees=circle/actionscount;						
					} else if(totaldistance>menuleftspace){						
						var gooddegrees=Math.asin(menuleftspace / totaldistance)/(Math.PI/180);
						
						var degreestart=25-(0+gooddegrees); 
						var circle=360-2*(90-gooddegrees);
						var degrees=circle/actionscount;
						
					} else {
						var degreestart=0;
						var degrees=360/actionscount; // amount of degrees each button should be taking up
					}					
					if(usegrow){
						var distance=actionscount*1; // R distance from the cursor should be 20 pixels for each added button						
					} else {						
						var distance=totaldistance; // R distance from the cursor should be 20 pixels for each added button
					}
					if(usespiral){
						degreestart=degreestart-30; // offset for the spiraling sideways motion.
					}
					var buttons=new Array;
					for(var i=0;i<actionscount;i++){
						degree=degrees*i;
						
						// radian=degree*Math.PI/180 // cos javascript uses radians

						dx = distance*Math.cos((degreestart+degree)*Math.PI/180);
						dy = distance*Math.sin((degreestart+degree)*Math.PI/180);
						j=i+1;
						buttons[i]=display_action(clickedtile.id,actions[i].attributes[0].nodeValue,
								actions[i].attributes[1].nodeValue,
								dx,
								dy,
								j);
					}
					if(usegrow){
						var menutimers=new Array();
						for(var i=0;i<actionscount;i++){
							for(var j=2;j<distanceperitem;j++){
								if(usespiral){
									degree=degrees*i+(360/j);
								} else {
									degree=degrees*i;
								}
								var distance=actionscount*j;
								dx = distance*Math.cos((degreestart+degree)*Math.PI/180);
								dy = distance*Math.sin((degreestart+degree)*Math.PI/180);
								menutimers[menutimers.length]=setTimeout("movebutton('"+clickedtile.id+"','"+buttons[i]+"',"+dx+","+dy+");",j*50);
							}
						}
					}
				}

				var button=document.createElement("input");
				button.style.position="absolute";
				button.style.top=parseInt(clickedtile.style.top)+5+"px";
				button.style.left=clickedtile.style.left; // no parseInt, its a string, and should stay a string.
				button.style.zIndex=301;
				button.type="button";
				button.id='circlemenu_action_'+(actionscount+1);
				button.className="circlemenubutton";
				button.name="circlemenubutton";
				button.value="Close";
				if (button.addEventListener) { //w3c				
					button.addEventListener('click',undisplay_action,false);
				} else { // IE
					button.attachEvent('onclick',undisplay_action);
				}
				viewportgui.appendChild(button);
			}
		}
		xmlhttp.send(null);
		return true;
}

function movebutton(parent,id,dx,dy){
	var obj=document.getElementById(id);
	var parent=document.getElementById(parent);	
	obj.style.top=parseInt(parent.style.top)+dx+"px";
	obj.style.left=parseInt(parent.style.left)+dy+"px";
}

function display_action(parent,value,action,x,y,i){	
	parent = document.getElementById(parent);	
	action ='buttonaction_'+action;	
	
	// create objects relative to the parents position;
	var button=document.createElement("input");
	button.id='circlemenu_action_'+i;
	button.style.position="absolute";
	button.style.top=parseInt(parent.style.top)+x+"px";
	button.style.left=parseInt(parent.style.left)+y+"px";
	button.style.zIndex=600;	
	button.type="button"
	button.className="circlemenubutton";
	button.name="circlemenubutton";
	button.value=value;
	if(usetransparancy){
		setopacity(button,40);
	}
	
	if (button.addEventListener) { //w3c
		button.addEventListener('click',window[action],false);
	} else { // IE
		button.attachEvent('onclick',window[action]);
	}
	viewportgui.appendChild(button);
	return button.id;	
}

function undisplay_action(){	
	timerscount=menutimers.length; // these are the timeouts which were spawned for the zooming/spiraling of the menu
	for(var i=0;i<timerscount;i++){
		clearTimeout(menutimers[i]);
	}
	actions=viewportgui.childNodes; 
	count=actions.length;
	for(var i=0;i<count;i++){ // why! this is needed because removing the items is slower than hiding them, giving a better visual experience.
		 actions[i].style.display='none';
	}
	while(actions.length>0){
		viewportgui.removeChild(actions[0]);
	}
}

var fetchchangestimer=null; // setting this to null later on we stop the updates because it will kill the timers.
function fetchchanges(){
	var xmlhttp = false;
	xmlhttp=createRequestObject();
	// cook up which range we need to get.
	var url = "xml/changes.php";

	xmlhttp.open("GET", url, true);
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response=xmlhttp.responseXML;
			var add=response.getElementsByTagName("add");
			var addcount=add.length;
			for(var i=0;i<addcount;i++){
				var sublength=add[i].childNodes.length;
				for(var j=0;j<sublength;j++){
					if(add[i].childNodes[j].nodeType==1){
						if(add[i].childNodes[j].nodeName=="message"){
							var message=add[i].childNodes[j].getAttribute('value');
							var livespan=add[i].childNodes[j].getAttribute('livespan');
							var tileid=add[i].childNodes[j].getAttribute('id');
							createmessage(message,tileid,livespan);
						}
					}
				}
			}
		}
	}
	xmlhttp.send(null);
	return setTimeout('fetchchanges();',4500);	
}

function timedmoveobject(objectid,newparentID,milisecconds){
	return setTimeout('moveobject(newparentID)',milisecconds);
}
function moveobject(objectid,targ){
	//targ=document.getElementId(newparenttileID);
	obj=document.getElementById('obj_'+objectid);
	obj.style.top=targ.style.top;
	obj.style.left=targ.style.left;
}
function movecursortotile(tile){
	// tile should be the image object	
	
	cursorover=tile;
	 // better But the cursor tile now blocks the two tiles above from receiving onmouseover events, to the cursor tile also need out of bounds checks.
	if(document.getElementById('water-'+tile.id+'-0')){ // check to see if we need to add the upper cursor	
		cursor.attach
		cursorimage.src="tilegen/cursor/0-0-0-0.png";
		cursor.style.top=document.getElementById('water-'+tile.id+'-0').style.top;
		cursor.style.left=document.getElementById('water-'+tile.id+'-0').style.left;
		if(quality!='low'){
			watercursorimage.zIndex==cursorover.zIndex;	
			watercursor.style.display='block';
			watercursor.style.top=tile.style.top;
			watercursor.style.left=tile.style.left;
			watercursorimage.src="tilegen/cursor/"+tile.src.match(/\d\-\d\-\d\-\d/)+'.png';
		}
	} else {
		watercursor.style.display='none';
		cursor.style.top=tile.style.top;
		cursor.style.left=tile.style.left;
		cursorimage.src="tilegen/cursor/"+tile.src.match(/\d\-\d\-\d\-\d/)+'.png';
	}
	check_cursor=true;	
}
function checkcursor(event) {
	if (!event) var event = window.event; // make sure we actually get the event in IE
	if (event.target){ //w3c
		targ = event.target;
	} else if (event.srcElement) { // IE specific
		targ = event.srcElement;
	}
	if (targ.nodeType == 3){ // Safari bug correction, it selects the textrange instead of the object.
		targ = targ.parentNode;
	}	
	// If we call this function, the user is waving the mouse over the cursor
	// If out of bounds, move the cursor to the next tile
	aMove = checkbounds(targ,event);	
	if(aMove != false && check_cursor==true) {
 		check_cursor=false; // disable any moves the following milliseconds, (untill this move is actually completed)
 		movecursor(aMove[0],aMove[1]);
	}
}
function checktile(event) {
	if (!event) var event = window.event; // make sure we actually get the event in IE
	if (event.target){ //w3c
		targ = event.target;
	} else if (event.srcElement) { // IE specific
		targ = event.srcElement;
	}
	if (targ.nodeType == 3){ // Safari bug correction, it selects the textrange instead of the object.
		targ = targ.parentNode;
	}	
	if(targ.id.substr(0,5)=='water'){		
		var aMove = checkbounds(targ,event);
		// if(aMove!=false){ alert('triggered a water onmouseover, but its aparantyl out of bounds'); }
		var temp=new Array();
		temp=targ.id.split('-');
		targ=document.getElementById(temp[1]+'-'+temp[2]); // reset the element to the lowest object
	} else {	
		var aMove = checkbounds(targ,event);
	}	
	
	// The only time we call checktile is if the
	// cursor is positioned over a different tile
	// If *not* out of bounds, move the cursor to this tile	
	if(aMove == false){
		movecursortotile(targ);	
		if(cursor.addEventListener){
			cursor.addEventListener('mousemove',checkcursor,false);
		} else {
			cursor.attachEvent('onmousemove',checkcursor);
		}
	} else {
		if(cursorover.id!=targ.id){
			cursorover=targ;
			movecursor(aMove);
		}
	}
}


// returns true if the cursor is in bounds for the current cursor image
function checkbounds(img,event) {
	// We are going to return an array(dX,dY)
	dX = 0; dY = 0;
	// Figure out where the cursor is in relation to the image
	x = event.layerX; // - parseInt(img.style.left);
	y = event.layerY; // - parseInt(img.style.top);	
	// Looks like theres something in IE thats causing our x to shift
	// to the right, countered here by decreasing the perceived value of x
	//x--;	
	// Find the relative height positions from our image name
	// We are expecting something of the form 0-0-0-0 in it
	arrId = img.src.match(/\d\-\d\-\d\-\d/);
	arrH = arrId[0].match(/\d/g);
	for(i=0;i<arrH.length;i++) arrH[i] = parseInt(arrH[i]);	
		
	// array index: 0=top, 1=right, 2=bottom, 3=left
	// Make them all ints, rather than strings
	
	// See if we are out of bounds
	if(x<=32) {
		// Left hand side of the tile
		dyt = 8 * (2 + arrH[0] - arrH[3]);
		dyb = 8 * (2 + arrH[3] - arrH[2]);
		tstt = dyt-(x*dyt/32);
		tstb = dyt+(x*dyb/32);
		if(y<tstt) {
			// Top Left
			dX = -1;
		}
		if(y>tstb) {
			// Bottom Left
			dY = 1;
		}
	} else {
		// Right hand side of the tile
		dyt = 8 * (2 + arrH[0] - arrH[1]);
		dyb = 8 * (2 + arrH[1] - arrH[2]);
		tstt = (x*dyt/32)-dyt;
		tstb = (2*dyb)+dyt-(x*dyb/32);
		if(y<tstt) {
			// Top Right
			dY = -1;
		}
		if(y>tstb) {
			// Bottom Right
			dX = 1;
		}
	}
	if(dX==0 && dY == 0) return false; // Not out of bounds
	else return new Array(dX,dY); // Out of bounds - return direction to move
}

function movecursor(deltaX,deltaY) {
	// Figure out where the cursor is, and move it by aMove
	// Bah..  someone labelled the tiles as "y-x", oops sorry, (got messed up because of all the axis involved in the isometric stuff i guess.)
	var aCurr=new Array();
	aCurr = cursorover.id.split('-');	
	aCurr[0] = parseInt(aCurr[0]) + parseInt(deltaY);
	aCurr[1] = parseInt(aCurr[1]) + parseInt(deltaX);
	if(document.getElementById(aCurr[0]+"-"+aCurr[1])){
		movecursortotile(document.getElementById(aCurr[0]+"-"+aCurr[1]));
	}
}

function setopacity(obj,amount){
	// either insert integer amounts (eg 100 to 1, or 0),
	// or insert decimal amounts, >1 && <0, which will be multipled by 100 to become integer
	var amount=parseFloat(amount);
	if(!obj){
 		return false;
	}
	if(amount<1 && amount!=0){ // is this save? (
		amount=amount*100;
	}
	if (obj.addEventListener) { //w3c
		obj.style.MozOpacity=amount/100;
		obj.style.opacity=amount/100;
	} else {
		obj.style.filter='alpha(opacity='+amount+')';
	}
	return true;
}

// debug handler
function debugmessage(message){
	if(document.getElementById('debugmessages')){
		document.getElementById('debugmessages').value=message;
	}
	return true;
}
function unsetScrollDirection(event){
	scrollDirection=null; // this will cause the scrollers to grind to a halt
}
function setScrollDirection(event){
	if (!event) var event = window.event; // make sure we actually get the event in IE
	if (event.target){ //w3c
		targ = event.target;
	} else if (event.srcElement) { // IE specific
		targ = event.srcElement;
	}
	if (targ.nodeType == 3){ // Safari bug correction, it selects the textrange instead of the object.
		targ = targ.parentNode
	}
	if(targ.id=='gui_button_top'){
		scrollDirection='bottom';
	} else if(targ.id=='gui_button_bottom'){
		scrollDirection='top';
	} else if(targ.id=='gui_button_right'){
		scrollDirection='left';
	} else if(targ.id=='gui_button_left'){
		scrollDirection='right';
	}
	// fire up the scrollers!
	setTimeout('scroll()',scrolltime);
}
function scroll(){
	if(scrollDirection=='top'){
		scrollUp();
	} else  if(scrollDirection=='bottom'){
		scrollDown();
	} else if(scrollDirection=='left'){
		scrollLeft();
	} else if(scrollDirection=='right'){
		scrollRight();
	}
	if(scrollDirection!=null){
		setTimeout('scroll()',scrolltime);
	}
}

// functions handling the scrolling of the map, and fetch the new tiles if needed
function scrollUp(){
	
	overlap[2]=overlap[2]-scrollby;
	overlap[0]=overlap[0]+scrollby;

	viewport[2]=viewport[2]+scrollby
	viewport[3]=viewport[3]+scrollby;

	map.style.top=parseInt(map.style.top)-scrollby+'px';
	if(overlap[2]<33){
		destroy(viewport[0]-64,viewport[1]+64,viewport[2]-64,viewport[2]);
		overlap[0]=overlap[0]-64;
		fetch(viewport[0]-64,viewport[1]+64,viewport[3],viewport[3]+64);
		overlap[2]=overlap[2]+64;
	}
	//debugmessage("viewport="+viewport[0]+"-"+viewport[1]+"-"+viewport[2]+"-"+viewport[3]);

	return true;
}

function scrollDown(){
	overlap[2]=overlap[2]+scrollby;
	overlap[0]=overlap[0]-scrollby;

	viewport[2]=viewport[2]-scrollby
	viewport[3]=viewport[3]-scrollby;

	map.style.top=parseInt(map.style.top)+scrollby+'px';

	if(overlap[0]<33){
		destroy(viewport[0]-64,viewport[1]+64,viewport[3],viewport[3]+64);
		overlap[2]=overlap[2]-64;
		fetch(viewport[0]-64,viewport[1]+64,viewport[2]-64,viewport[2]);
		overlap[0]=overlap[0]+64;
	}
	//debugmessage("viewport="+viewport[0]+"-"+viewport[1]+"-"+viewport[2]+"-"+viewport[3]);
	return true;
}

function scrollRight(){
	overlap[1]=overlap[1]+scrollby;
	overlap[3]=overlap[3]-scrollby;

	viewport[0]=viewport[0]-scrollby
	viewport[1]=viewport[1]-scrollby;

	map.style.left=parseInt(map.style.left)+scrollby+'px';

	if(overlap[3]<33){		
		fetch(viewport[0]-64,viewport[0],viewport[2]-64,viewport[3]+64);
		overlap[3]=overlap[3]+64;
	}
	if(overlap[1]>96){
		destroy(viewport[1],viewport[1]+64,viewport[2]-64,viewport[3]+64);
		overlap[1]=overlap[1]-64;
	}
	//debugmessage("viewport="+viewport[0]+"-"+viewport[1]+"-"+viewport[2]+"-"+viewport[3]);
	return true;
}

function scrollLeft(){
	overlap[1]=overlap[1]-scrollby;
	overlap[3]=overlap[3]+scrollby;

	viewport[0]=viewport[0]+scrollby
	viewport[1]=viewport[1]+scrollby;

	map.style.left=parseInt(map.style.left)-scrollby+'px';

	if(overlap[1]<33){
		//alert('fetching!'+viewport[1]+","+(viewport[1]+96)+","+(viewport[2]-64)+","+(viewport[3]+64));
		fetch(viewport[1],viewport[1]+64,viewport[2]-64,viewport[3]+64);
		overlap[1]=overlap[1]+64;
	}
	if(overlap[3]>96){
		destroy(viewport[0]-64,viewport[0],viewport[2]-64,viewport[3]+64);
		overlap[3]=overlap[3]-64;
	}
	//debugmessage("viewport="+viewport[0]+"-"+viewport[1]+"-"+viewport[2]+"-"+viewport[3]);
	return true;
}


var windows =new Array();
function newWindow(parent,width,height,title,content){
	windows.push(this);
	this.content = content;
	this.title=title;
	this.height=parseInt(height);
	this.width=parseInt(width);
	this.fullschreenmode=false;
	this.left=0;
	this.top=0;
	this.show=show;
	this.hide=hide;
	this.resize=resize;
	this.setContent=setContent;
	this.move=move;
	this.drag=drag;
	this.dragstart=dragstart;
	this.undrag=undrag;
	this.dragmove=dragmove;
	this.fullscreen=fullscreen;
	
	// create the outer layer
	this.domobject=document.createElement('div');
	this.domobject.className='window';
	
	// create the titlebar	
	this.titlebar=document.createElement('div');
	this.titlebar.className='titlebar';
	this.titleobj=document.createElement('div');
	this.titleobj.innerHTML=title;
	this.titleobj.className='title';
	
	this.titlebar.onmousedown=function(event){getInstance(this).dragstart(event);}
	this.titlebar.onmouseup=function(event){getInstance(this).undrag(event);}
	
	// buttons
	this.sizebutton=document.createElement('input');
	this.sizebutton.type='button';
	this.sizebutton.value='[]';
	this.sizebutton.onclick=function(){getInstance(this).fullscreen();};
	
	
	this.shadebutton=document.createElement('input');
	this.shadebutton.type='button';	
	this.shadebutton.value='_';
	this.shadebutton.onclick=function(){getInstance(this).hide();};

	this.closebutton=document.createElement('input');
	this.closebutton.type='button';	
	this.closebutton.value='X';
	this.shadebutton.onclick=function(){getInstance(this).close();};
	
	this.titlebar.appendChild(this.sizebutton);
	this.titlebar.appendChild(this.closebutton);
	this.titlebar.appendChild(this.shadebutton);
	this.titlebar.appendChild(this.titleobj);
	this.domobject.appendChild(this.titlebar);
	
	this.contentobject=document.createElement('div');
	this.domobject.appendChild(this.contentobject);
	
	this.contentobject.className='content';
	this.contentobject.innerHTML=this.content;
		
	this.domobject.style.height=0+'px';
	this.domobject.style.width=width+'px';
			
	this.isvisible=false;
	parent.appendChild(this.domobject);	
}
function show(){
	if(this.isvisible==false){		
		this.shadebutton.value='_';
		this.resize(this.width,this.height,false);	
		this.shadebutton.onclick=function(){getInstance(this).hide();};
		this.isvisible=true;
	}
	return true;
}
function hide(){	
	//this.domobject.style.display='none';
	if(this.isvisible==true){
		this.isvisible=false;
		this.shadebutton.value='-';
		this.shadebutton.onclick=function(){getInstance(this).show();};
		this.resize(this.width,25,false);		
		this.isvisible=false;
	}
	return true;
}
function resize(width,height,setwindowsize){
	
	if(typeof(this.resizeto)!='object'){
		this.resizeto=new fx.Combo(this.domobject, {height: true, width: true});
	}
	this.resizeto.customSize(height,width);
	if(setwindowsize==true){
		this.height=height;
		this.width=width;
	}	
}
function fullscreen(){
	if(typeof(this.resizeto)!='object'){
		this.resizeto=new fx.Combo(this.domobject, {height: true, width: true});
	}
	if(this.fullscreenmode==true){
		this.fullscreenmode=false;
		this.sizebutton.value='[]';
		this.domobject.style.top=this.top+'px';
		this.domobject.style.left=this.left+'px';
		this.resizeto.customSize(this.height,this.width)	
	} else {
		this.domobject.style.top=0+'px';
		this.domobject.style.left=0+'px';
		this.fullscreenmode=true;
		this.sizebutton.value='][';
		this.resizeto.customSize(this.domobject.parentNode.clientHeight,this.domobject.parentNode.clientWidth)	
		//this.sizebutton.onclick=function(){getInstance(this).resize(null,null,true);};	
	}
}
function move(left,top){
	if(this.isvisible){		
		this.domobject.style.top=top+'px';
		this.domobject.style.left=left+'px';
	} else {
		this.domobject.style.top=top+'px';
		this.domobject.style.left=left+'px';
	}
}
function getInstance(el){
  var i = windows.length;
  while(i--){
      if(windows[i].domobject.id == el.id){
       return windows[i];
     }
  }
}
function setContent(newcontent){
	this.content = newcontent;
	this.contentobject.innerHTML=newcontent;
}
var draggedobject;
function dragstart(event){
	var x,y;
	x = event.clientX + window.scrollX;
	y = event.clientY + window.scrollY;
	this.titlebar.style.cursor='pointer';
	this.cursorStartX = x;
	this.cursorStartY = y;
	
	this.elStartLeft  = parseInt(this.domobject.style.left, 10);
	this.elStartTop   = parseInt(this.domobject.style.top,  10);

	if (isNaN(this.elStartLeft)) this.elStartLeft = 0;
	if (isNaN(this.elStartTop))  this.elStartTop  = 0;
	draggedobject=this;
	document.addEventListener("mousemove", drag,   true);
	document.addEventListener("mouseup",   undrag, true);
	event.preventDefault();
}

function drag(event){
	var x,y;
	x = event.clientX + window.scrollX;
	y = event.clientY + window.scrollY;
	
	draggedobject.domobject.style.left = (draggedobject.elStartLeft + x - draggedobject.cursorStartX) + "px";
	draggedobject.domobject.style.top  = (draggedobject.elStartTop  + y - draggedobject.cursorStartY) + "px";
	event.preventDefault();
	
}
function undrag(event){
	document.removeEventListener("mousemove", drag,   true);
    	document.removeEventListener("mouseup",   undrag, true);
	draggedobject.titlebar.style.cursor=null;
	
}
function dragmove(event){
	var x,y;
	x = event.clientX + window.scrollX;
	y = event.clientY + window.scrollY;
	//alert(x +"="+y);
	//alert((this.left + x - this.dragX)+'='+(this.top + y - this.dragY));
	//this.left=(this.left + x - this.dragX);
	//this.top=(this.top + y - this.dragY);
	//this.domobject.style.left =   (this.left+parseInt(this.domobject.style.left)) + "px";
	//this.domobject.style.top  =  (this.top+parseInt(this.domobject.style.top)) + "px";
	
	this.domobject.style.left = (this.elStartLeft + x - this.cursorStartX) + "px";
  	this.domobject.style.top  = (this.elStartTop  + y - this.cursorStartY) + "px";
}
function selectwindow(parent,title,question,options,functioncall){
	var filler=document.createElement('div');
	filler.style.zIndex=300000;
	setopacity(filler,'60');
	filler.id='WindowModalForcer';
	document.getElementsByTagName('body')[0].appendChild(filler);
	var content='<strong>'+title+'</strong><br /><br />'+question+'<br />';
	var contentbox=document.createElement('div');
	var form=document.createElement('form');
	
	contentbox.className='alertbox';
	contentbox.id='WindowModalForcerAlert';
	contentbox.innerHTML=content;
	var list=document.createElement('ul');
	var option;
	for(var i=0;i<options.length;i++){
		option=document.createElement('li');
		option.innerHTML='<label for="alert_id_'+i+'">'+options[i]+'</label><input id="alert_id_'+i+'" type="radio" name="modalalert" value="'+i+'" />';
		list.appendChild(option);
	}
	form.appendChild(list);
	var confirmbutton=document.createElement('input');
	confirmbutton.id='modalalertconfirmbutton';
	confirmbutton.value='Select'
	confirmbutton.type='button';
	confirmbutton.onclick=function(){		
		var selectedvalue="";
		for(var i=0;i<options.length;i++){
			if(document.getElementById("modalalertconfirmbutton").form.modalalert[i].checked){
				selectedvalue=options[i];
				document.getElementsByTagName('body')[0].removeChild(document.getElementById('WindowModalForcer'));
				document.getElementsByTagName('body')[0].removeChild(document.getElementById('WindowModalForcerAlert'));
				eval(functioncall+'("'+options[i]+'")');
				break;
			}
			
		}
		if(selectedvalue==""){
			alert('please select a value!');
		}
		
	}
	form.appendChild(confirmbutton);
	contentbox.appendChild(form);
	document.getElementsByTagName('body')[0].appendChild(contentbox);
	contentbox.style.left=((window.innerWidth-contentbox.offsetWidth)/2)+'px';
	contentbox.style.zIndex=filler.style.zIndex+1;
	//;
}

function windowinit(){
	var window_one;
	window_one=new Window(document.getElementById('parent'),300,300,'titel','test content <br />');	
}
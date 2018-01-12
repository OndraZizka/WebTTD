var timer=null;
var el;

function change()
{
clearTimeout(timer);
el=document.getElementById("Menu");
if(document.all)
el.style.top=(document.body.scrollTop)+"px"
else
el.style.top=(window.pageYOffset)+"px";
el.style.right="0px";
timer=setTimeout("change();",250);
}

function onload()
{ 
if (document.getElementById) 
{
	el=document.getElementById("Menu");
	change();
}	
}

var el,step;
function scrollit(i)
{ 
if (document.getElementById)
{
if(document.all)
	self.parent.window.scrollTo(self.parent.document.body.scrollTop, self.parent.document.body.scrollTop +i*Math.round(self.parent.document.body.clientHeight/2));
else
	self.parent.window.scrollTo(self.parent.window.pageXOffset, self.parent.window.pageYOffset +i*step);
}
}
function onload()
{
if(document.all)
	step = Math.round(self.parent.document.body.clientHeight/2)
else
	step=100;
el=document.getElementById('ie');
}


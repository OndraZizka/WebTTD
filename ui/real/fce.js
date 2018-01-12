function id(sID){ return document.getElementById(sID); };



// --- Database support functions --- //

/**  Converts a set returned from database as a string to a JS object. E.g.:
 **  ConvertSetToMapOfBooleans( "B,D", "A,B,C,D" ) =>
 **  { A: false, B: true, C: false, D: true } **/
function ConvertSetToMapOfBooleans( asSet, asComplete ){
	if( !asSet ) return "";
	if( "string" == typeof asSet ) asSet = asSet.split(",");
	if( "string" == typeof asComplete ) asComplete = asComplete.split(",");
	if(!( asSet instanceof Array && asComplete instanceof Array  ))
		//throw new TypeError("ConvertSetToArrayOfBooleans( asSet, asComplete ) expects coma separated string or array of strings.");
		OSD("ConvertSetToArrayOfBooleans( asSet, asComplete ) expects coma separated string or array of strings."+asSet+", "+asComplete);
	var oBool = {};
	for( var i in asComplete ) oBool[asComplete[i]] = false;
	for( var i in asSet ) oBool[asSet[i]] = true;
	return oBool;
}

/***
 **  Converts a JS object mapping string-boolean tuples
 **  to a set storable in a database as a string. E.g.:
 **  ConvertMapOfBooleansToSet( { A: false, B: true, C: false, D: true }, "A,B,C,D", "," ) =>
 **  "B,C"
 ***/
function ConvertMapOfBooleansToSet( abMap, asComplete, sJoin ){
	if( "string" == typeof asComplete ) asComplete = asComplete.split(",");
	if( "string" != typeof sJoin ) sJoin = ",";

  //OSD("abMap: "+abMap);

	var as = [];
	for( var i in asComplete )  if( abMap[asComplete[i]] )  as.push( asComplete[i] );
	return as.join( sJoin );
}




// Adjust the event object, to make it sane 
function fixEvent(e) {
	// Make all the IE-centric parameters be W3C-like
	if( window.event ){
		e = window.event;
		e.target = e.srcElement;
		e.layerX = e.offsetX;
		e.layerY = e.offsetY;
		// Click   IE  W3C
		// Left    1   0  
		// Right   2   2  
		// Middle  4   1  
		if( null != e.button ){
			switch( e.button ){
				case 1: e.button = 0;
				case 4: e.button = 1;
			}
		}
	}
	return e;
} 

function isMSIE(){
	//alert(navigator.appName +" - "+ navigator.appVersion);
	if(navigator.appVersion.indexOf("MSIE") > 0)
		if(parseInt(navigator.appVersion.substring()) >= 4) return true;	
	return false;
}
var bMSIE = isMSIE();
function WindowEventsTarget(win){
	if(!win) win = window;
	return bMSIE ? win.document.body : win
}


function CopyObject( o ){
	if( null == o || "object" != typeof o ) return null;
	var oRet = {};
	for( var i in o )
		oRet[i] = o[i];
	return oRet;
};

function getDiv(div_id){
	return isMSIE() ? document.all[div_id] : document.getElementById(div_id);
}

function setVisible(obj, stav){
	//var s = "v setVisible(); obj: " + obj; if(obj != null)  s += " id: " + obj.id; alert(s);
	if(obj != null && obj != undefined && obj.className != null)
		obj.className = stav?'':'hidden';
}


// String functions //
function nl2br(s){ return s.replace("\r","").replace("\n","<br />\n"); }
function UCFirst(s){ return s.charAt(0).toUpperCase()+s.substring(1); }


// Parses &- or ;- separated name=value argument pairs from query string. //
// Usage:  var asArgs = GetArgs(); 
function GetArgs(oWindow, xSplitBy){
	if(!xSplitBy)  xSplitBy = /[&;]/

	var aArgs = new Object();
	var iPos, aPairs = oWindow.document.location.search.substring(1).split(xSplitBy);
	for(var i = 0; i < aPairs.length; i++){
		if( -1 == (iPos = aPairs[i].indexOf('=')) ) continue;
		aArgs[aPairs[i].substring(0,iPos)] = unescape(aPairs[i].substring(iPos+1));
	}
	return aArgs;
}

window.location.getArgument = function(sName, xSplitBy){
	if(!xSplitBy)  xSplitBy = /[&;]/
	
	var iPos, aPairs = this.search.substring(1).split(xSplitBy);
	for(var i = 0; i < aPairs.length; i++){
		if( -1 == (iPos = aPairs[i].indexOf('=')) ) continue;
		sNameCur = aPairs[i].substring(0,iPos);
		if(sNameCur == sName) return unescape(aPairs[i].substring(iPos+1));
	}
	return null;
}




// --- Array --- //
function ArrayMap(a, fFunc){
	if( (!fFunc) || (typeof(fFunc) != "function") ) return null;
	for( var i in a ){ a[i] = fFunc(a[i]); }
	return a;
}




// Math //
function Round(x, dec){
	if(t >= 0 && t <= 20) return x.toFixed(dec);
	t = Math.power(10, dec); return Math.round(x*t) / t;
}
//Math.prototype.Round = Round();


// Returns a number whatever comes in. Like (int) in PHP.
function forceInt(x){ return parseInt(x) || 0; }


// Returns index of the first a's field not smaller than i. //
function GetInterval(val, a){
	for(var i=0; i < a.length; i++)
		if(val < a[i]) return i;
	return a.length;
}





// Zjistovani pozice tagu //
function Point(iX, iY){
	this.x = iX;
	this.y = iY;
}

function GetXY(aTag){
	var oTmp = aTag;
	var pt = new Point(0,0);
	do{
		pt.x += oTmp.offsetLeft;
		pt.y += oTmp.offsetTop;
		oTmp = oTmp.offsetParent;
	//} while(oTmp.tagName!="BODY");
	} while(oTmp!=null);
	return pt;
}






/** Returns window client area height. */
function GetWindowHeight(){
		if(typeof(window.innerHeight) == 'number')
			return window.innerHeight;
		if(document.documentElement && document.documentElement.clientHeight)
			return document.documentElement.clientHeight;
		if(document.body && document.body.clientHeight)
			return document.body.clientHeight;
		return null;
}


/** Moves the element to the bootom of the page */
function SetFooterPosition(oeContent, oeFooter) {
	var windowHeight = GetWindowHeight();
	if(! (windowHeight > 0) ) return;

	var contentHeight = oeContent.offsetHeight;
	var footerHeight  = oeFooter.offsetHeight;
	
	if(windowHeight - (contentHeight + footerHeight) < 0)
		oeFooter.style.position = 'static';
	else{
		oeFooter.style.position = 'relative';
		oeFooter.style.top = (windowHeight - (contentHeight + footerHeight))+'px';
	}
}









// Dumpovani objektu //
function ObjectToString( obj ){
	var res = "Objektovo vlastnosti:\n=================================\n";
	for(v in obj){
		res += v + " = \"" + obj[v] + "\"\n";
	}
  return res;
}

function DumpObject(obj){ alert( ObjectToString(obj) ); }


/** Returns string describing given object. */
function ObjectToStringEx( obj, sMustContain){
	var res = "Objektovo vlastnosti";
	if(sMustContain) res += " s '"+sMustContain+"'";
	res += ":\n";
	if(!bMSIE) res += "type: " + typeof(obj) + " - " + (obj ? obj.toString() /*obj.constructor.name*/ : "[nic]")+"\n";
	res += "=================================\n";

	if(obj)
	for(v in obj){
		if(sMustContain && v.toString().toLowerCase().indexOf(sMustContain) == -1) continue;
		var sPad = "", sVal = "";
		if(typeof(obj[v]) == "function") sVal = "function";
		else sVal = obj[v];
		for( var k=0; k < Math.max(27 - v.length, 0); k++) sPad += ".";
		res += v + sPad + "\t= \"" + sVal + "\"\n";
	}
  return res;
}


/** Works like ObjectToStringEx(), only calls alert() after few properties. */
function DumpObjectEx(obj, sMustContain){
	var i = 0, iStr = 1;
	var res = "Objektovo vlastnosti";
	if(sMustContain) res += " s '"+sMustContain+"'";
	res += ":\n";
	if(!bMSIE) res += "type: " + typeof(obj) + " - " + (obj ? obj.toString() /*obj.constructor.name*/ : "[nic]")+"\n";
	res += "=================================\n";

	if(obj)
	for(v in obj){
		if(sMustContain && v.toString().toLowerCase().indexOf(sMustContain) == -1) continue;
		i++; var sPad = "", sVal = "";
		if(typeof(obj[v]) == "function") sVal = "function";
		else sVal = obj[v];
		for(k=0; k < Math.max(27 - v.length, 0); k++) sPad += ".";
		res += v + sPad + "\t= \"" + sVal + "\"\n";
		if(!(i%20)){ alert(res); res = "(strana "+(iStr++)+")\n=================================\n"; }
	}
  alert(res);
}



// DOM konstanty pro MSIE //
if(!window.Node){
	var Node = {
		ELEMENT_NODE: 1,
		ATTRIBUTE_NODE: 2,
		TEXT_NODE: 3,
		COMMENT_NODE: 8,
		DOCUMENT_NODE: 9,
		DOCUMENT_FRAGMENT_NODE: 11
	};
}
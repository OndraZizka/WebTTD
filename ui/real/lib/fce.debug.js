/*****  DEBUG  *****/



// OSD() 
function OSD(s){
  //var eOSD = id("messages");
  //eOSD.innerHTML += s + "\n";
  //eOSD.scrollY( 500 );
	arguments.callee.eOSD.appendChild( document.createTextNode(s + "\n") );
};
window.addEventListener("load", function(){ OSD.eOSD = id("messages"); }, false );




// Debug info panel 
function UpdateDebugObjectInfo( obj, sID ){
  var eInfoPanel = id( sID );
  eInfoPanel.innerHTML = "";
  
  var eTable = document.createElement("table");
  eTable.className = "debug_object_info";
  
  for(v in obj){
	
		// Skip constants - first character is uppercase.
		if( v.charAt(0).match(/[A-Z]/) ) continue;
	
		if(typeof(obj[v]) == "function") sVal = "function";
		else sVal = ""+obj[v];
    
    //var eRow = document.createElement("tr");
    //eRow.innerHTML = "<td>"+v+"</td><td>"+sVal+"</td>";
    //eTable.appendChild( eRow );
    
    //if( sVal.charAt(0) === sVal.charAt(0).toUpperCase() ) continue;
    eTable.innerHTML += "<tr><td>"+v+"</td><td>"+sVal+"</td></tr>";
	}
  eInfoPanel.appendChild( eTable );
};






// Debug info panel 
function DumpObjectToPanel( obj ){
  var eInfoPanel = document.createElement("div");
  eInfoPanel.style.position = "absolute";
	eInfoPanel.style.top = "1ex";
	eInfoPanel.style.right = "1ex";
  eInfoPanel.style.border = "1px solid black";
	eInfoPanel.style.backgroundColor = "white";

	eInfoPanel.onclick = function(event){ document.body.removeChild( this ); };
  
  var eTable = document.createElement("table");
  eTable.className = "debug_object_info";
  
  for(v in obj){
	
		// Skip constants - first character is uppercase.
		if( v.charAt(0).match(/[A-Z]/) ) continue;
	
		if(typeof(obj[v]) == "function") sVal = "function";
		else sVal = ""+obj[v];
    
    //if( sVal.charAt(0) === sVal.charAt(0).toUpperCase() ) continue;
    eTable.innerHTML += "<tr><td>"+v+"</td><td><pre>"+sVal+"</pre></td></tr>";
	}
  eInfoPanel.appendChild( eTable );
	document.body.appendChild( eInfoPanel );
};





/*****  /DEBUG  *****/

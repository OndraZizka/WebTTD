/*******************************************************************************************
  className manager  @version 1.00 
	written by Ondra Zizka 2005-08-01, ondra@dynawest.cz, ondra.zizka.cz 
	
	A set of functions that handle the className property.
*******************************************************************************************/



// HasClass()
function HasClass(oElement, sClassName){
	var i, asNames;
	//if(!oElement || typeof(oElement) != "object") return false; // bez toho snaz prijdu na chybu.
	asNames = oElement.className.split(" ");
	for(i = 0; i < asNames.length; i++)
		if(asNames[i].toLowerCase() == sClassName.toLowerCase()) return true;
	return false;
}

// AddClass()
function AddClass(oElement, sClassName){
	if(!oElement.className) oElement.className = sClassName;
	else if(!HasClass(oElement, sClassName)) oElement.className += " " + sClassName;
}

// RemClass()
function RemClass(oElement, sClassName){
	var i, asClassesCur, asClassesNew;
	if(!oElement.className || oElement.className == "") return;
	
	
	asClassesCur = oElement.className.replace("\t", " ").split(" ");
	asClassesNew = new Array();	
	
	for(i = 0; i < asClassesCur.length; i++){
		if(asClassesCur[i] == sClassName || asClassesCur[i] == "")
			continue;
		asClassesNew.push(asClassesCur[i]);
	}
	
	oElement.className = asClassesNew.join(" ");
}
// this file holds all of the menu options
function buttonaction_chat(){	
	var  message=prompt('Type thy chat message for tile;');
	if(message){
		var xmlhttp = false;
		xmlhttp=createRequestObject();
		// cook up which range we need to get.
		var url = "xml/sendactions.php?id="+clickedtile+"&action=chat&message="+encodeURIComponent(message);
		
		xmlhttp.open("POST", url, true);
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var response=xmlhttp.responseXML;				
			}
		}
		xmlhttp.send(null);
		
		if(fetchchangestimer==null){ // if the updater is not initialised yet, lets do so now!
			fetchchangestimer=fetchchanges();
		}		
		return true;		
	}
	undisplay_action();
	
}
function buttonaction_walk(event){
	alert('Where to walk? (not supported yet);');
}




// Serializuje mno�inu dat. P�eb�r� dva r�zn� typy objekt�:
// - Pole vstupn�ch prvk�.
// - Objekt s p�ry kl��/hodnota
// Funkce vrac� serializovan� �et�zec.
function serialize(a) {
    // Pole v�sledk� serializace.
    var s = [];
		
    // Pokud je p�edan�m parametrem pole, p�edpokl�d�me,
    // �e je to pole prvk� formul��e.
    if ( a.constructor == Array ) {

        // Serializujeme prvky formul��e.
        for ( var i = 0; i < a.length; i++ )
            s.push( a[i].name + "=" + encodeURIComponent( a[i].value ) );
			
    // Jinak p�edpokl�d�me, �e je to objekt s p�ry kl��/hodnota.
    } else {

        // Serializujeme kl��e a hodnoty.
        for ( var j in a )
            s.push( j + "=" + encodeURIComponent( a[j] ) );

    }
		
    // Vr�t�me v�slednou serializovanou formu.
    return s.join("&");
}



// Pokud je pou�it IE, vytvo��me kontejner pro XMLHttpRequest objekt
if ( typeof XMLHttpRequest == "undefined" )
	XMLHttpRequest = function(){
		// Internet Explorer pou��v� pro vytvo�en� nov�ho XMLHttpRequest objektu ActiveXObject.
		return new ActiveXObject(
		// IE 5 pou��v� odli�n� XMLHTTP objekt ne� IE6
			navigator.userAgent.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP"
		);
};


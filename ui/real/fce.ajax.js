


// Serializuje množinu dat. Pøebírá dva rùzné typy objektù:
// - Pole vstupních prvkù.
// - Objekt s páry klíè/hodnota
// Funkce vrací serializovaný øetìzec.
function serialize(a) {
    // Pole výsledkù serializace.
    var s = [];
		
    // Pokud je pøedaným parametrem pole, pøedpokládáme,
    // že je to pole prvkù formuláøe.
    if ( a.constructor == Array ) {

        // Serializujeme prvky formuláøe.
        for ( var i = 0; i < a.length; i++ )
            s.push( a[i].name + "=" + encodeURIComponent( a[i].value ) );
			
    // Jinak pøedpokládáme, že je to objekt s páry klíè/hodnota.
    } else {

        // Serializujeme klíèe a hodnoty.
        for ( var j in a )
            s.push( j + "=" + encodeURIComponent( a[j] ) );

    }
		
    // Vrátíme výslednou serializovanou formu.
    return s.join("&");
}



// Pokud je použit IE, vytvoøíme kontejner pro XMLHttpRequest objekt
if ( typeof XMLHttpRequest == "undefined" )
	XMLHttpRequest = function(){
		// Internet Explorer používá pro vytvoøení nového XMLHttpRequest objektu ActiveXObject.
		return new ActiveXObject(
		// IE 5 používá odlišný XMLHTTP objekt než IE6
			navigator.userAgent.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP"
		);
};


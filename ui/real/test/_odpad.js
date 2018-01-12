






// --- InsertImages --- //
/** Víceménì jen na testování, jen tam nasází pár obrázkù pro zaèátek. **/
function InsertImages( eMap ){

  // Generator 
  
  var iHeight = 7; // Poèet bunìk na výšku 
  var iWidth  = 7; // Poèet bunìk na šíøku 

  for( var y = 0; y < iHeight; y++ ){
    for( var x = 0; x < iWidth; x++ ){
    
      // Image 
      //var eImage = new Image();
      //eImage.src = "img/ttd/louka-zelena.png";
			
      // Div 
      /*var eDiv = document.createElement("div");
      eDiv.className = "field";
      eDiv.onclick = function(){ OSD( "[" + this.data.x + "," + this.data.y + "]" ); };
      eDiv.addEventListener("dragstart", function(){ OSD("ondragstart image"); return false; }, false );
      eDiv.addEventListener("drag", function(){ OSD("ondrag image"); return false; }, false );
      eMap.appendChild( eDiv );
			*/
			var eDiv = eMap.CreateField();

      /*/eDiv.style.top  = y * eMap.iFieldHeight / 2  -  x * eMap.iFieldHeight / 2;
      eDiv.style.left = x * eMap.iFieldWidth  / 2  +  y * eMap.iFieldWidth  / 2 - 100;/*/
			var co = eMap.TransformFieldXYtoCoords( x, y );
      eDiv.style.left = co.x + "px";/**/
      eDiv.style.top  = co.y + "px";
      eDiv.data = { x: x, y: y };
      
			// Data model adjustment 
			var oField = eMap.land.GetCreateField( x, y );
			oField.SetTerrainType( "grass" );
			oField.SetElement( eDiv );
    }//x
  }//y

};
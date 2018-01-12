// HandleMouseMove() 
function HandleMouseMove( event ){ event || (event = fixEvent(event));
	
  UpdateDebugObjectInfo( event, "debug_info_event_mousemove" );
  UpdateDebugObjectInfo( this.oDragStartEvent, "debug_info_event_mousedown" );
  if( this.IsDragging() ){
    //OSD(1);
    var oOffset = {
      x: event.screenX - this.oDragStartEvent.screenX,
      y: event.screenY - this.oDragStartEvent.screenY
    };
    
    this.AdjustPosition( oOffset );
    
    OSD( "[" + event.screenX + " - " + this.oDragStartEvent.screenX + ","
             + event.screenY + " - " + this.oDragStartEvent.screenY + "] "
             + "= [" + oOffset.x + "," + oOffset.y + "]" );
    
  }
};







// --- INIT --- //
function Init(){
  window.eBox = document.getElementById("mapbox");
  //alert(eBox.style.zIndex);
  eBox.style.zIndex = 0;
  window.eMap = document.getElementById("map");
	window.eMap.eBox = eBox;
  window.eOverlay = document.getElementById("overlay");

  InitMap( eMap );
	//DumpObjectToPanel( eMap );
	InitOverlay( eOverlay );
};




// --- InitOverlay() --- //
function InitOverlay( eOverlay ){


	// EVENT - onclick 
  /*eOverlay.onclick = function(event){ event || (event = fixEvent(event));
		// Left mouse button 
		if( event.button == 0 ){
		}
	}/**/
	
	// EVENT - oncontextmenu - prevent popup menu.
	eOverlay.oncontextmenu = function(event){ return false; }
	
	// EVENT - onmousedown
  eOverlay.onmousedown = function(event)
  {
    event || (event = fixEvent(event));

		// Left mouse button 
		if( event.button == 0 ) { 
			this.oSelectStartEvent = { layerX: event.layerX, layerY: event.layerY,  };
			// Get field indexes and update form.
			var oxyCell = eMap.TransformCoordsToFieldXY( event.layerX, event.layerY );
			with( id("form_update_field") ){
				x.value = oxyCell.x;
				y.value = oxyCell.y;
				x2.value = oxyCell.x;
				y2.value = oxyCell.y;
			};
      /*with( window.eMap.land.GetField( oxyCell.x, oxyCell.y )){
        OSD( toString() );
        OSD( GetElement() );
        GetElement().style.border = "4px solid red;";
        GetElement().style.zIndex = "11410";
      }*/
		}
		// Right mouse button 
		else if( event.button == 2 ) { 
			AddClass(this, "dragging");
			//this.oDragStartEvent = CopyObject(event);
			this.oDragStartEvent = { layerX: event.layerX, layerY: event.layerY,  };
		}
		return false;
  };

	// EVENT - onmouseup 
  eOverlay.onmouseup = function(event){ event || (event = fixEvent(event));
		if( event.button == 0 )  this.StopSelecting(); // LMB 
		if( event.button == 2 )  this.StopDragging();  // RMB 
	};
	// EVENT - onmouseout 
	eOverlay.onmouseout = function(event){ event || (event = fixEvent(event));
		
		this.StopDragging();
  };
  eOverlay.IsDragging = function(){ return null != this.oDragStartEvent; };
  eOverlay.StopDragging = function(){
		RemClass(this, "dragging");
		this.oDragStartEvent = null;
	};
  eOverlay.IsSelecting = function(){ return null != this.oSelectStartEvent; };
  eOverlay.StopSelecting = function(){ this.oSelectStartEvent = null; };
	
	
	// EVENT - onmousemove
	eOverlay.onmousemove = function(event){ event || (event = fixEvent(event));
		id("debug_info_mouse_coords_overlay").innerHTML = sprintf("X: %d, Y: %d", event.layerX, event.layerY );

		var oxyCell = eMap.TransformCoordsToFieldXY( event.layerX, event.layerY );
		id("debug_info_cell_indexes").innerHTML = sprintf("X: %d, Y: %d", oxyCell.x, oxyCell.y );

		// Dragging (RMB)
		if( this.IsDragging() ){
		
			// Getting Offset 
			var iOffsetX = event.layerX - this.oDragStartEvent.layerX;
			var iOffsetY = event.layerY - this.oDragStartEvent.layerY;
			id("debug_info_drag_offset").innerHTML = sprintf("X: %d, Y: %d", iOffsetX, iOffsetY );
			
			// Move the #map 
			eMap.AdjustOffset( iOffsetX, iOffsetY );
			eMap.Move();
			//this.oDragStartEvent = CopyObject(event); // Re-set the drag-start coordinates.
			this.oDragStartEvent = { layerX: event.layerX, layerY: event.layerY,  };
		}

		// Selecting (LMB)
		if( this.IsSelecting() ){
			// Get gield indexes and update form - second corner cell. 
			var oxyCell = eMap.TransformCoordsToFieldXY( event.layerX, event.layerY );
			with( id("form_update_field") ){
				x2.value = oxyCell.x;
				y2.value = oxyCell.y;
			};
		}

	};// eOverlay.onmousemove 
	
};// function InitOverlay();









// --- InitMap() --- //
function InitMap( eMap ){


	// Travian: 40 x 74;
	// OpenTTD: 31 x 64;
  eMap.iFieldHeight = 32; // Buòka px na výšku 
  eMap.iFieldWidth  = 64; // Buòka px na šíøku 

	


	/**  Pøevede index buòky na souøadnice pro vykreslení. 
	 **  //Otáèí o 45 stupòù doprava - koukáme jakoby na severo-východ. Sever je nahoøe vlevo.// zmìnìno 
	 **  Otáèí o 45 stupòù doleva - koukáme jakoby na severo-západ. Sever je nahoøe vpravo.
	 **  @returns Object { x, y }
	 **/
	eMap.TransformFieldXYtoCoords = function( x, y, level ){
		return {
			//y: y * this.iFieldHeight / 2 - x * this.iFieldHeight / 2,
			//x: x * this.iFieldWidth  / 2 + y * this.iFieldWidth  / 2
			y: y * this.iFieldHeight / 2 + x * this.iFieldHeight / 2,
			x: x * this.iFieldWidth  / 2 - y * this.iFieldWidth  / 2
		};
	};
	//DumpObjectEx( eMap.TransformCellXYtoCoords( 0, 0) );///
	

	/**  Pøevede souøadnice pozice ukazatele na index buòky. 
	 **  Otáèí o 45 stupòù doleva - koukáme jakoby na severo-západ. Sever je nahoøe vpravo.
	 **  @returns Object { x, y }
	 **/
	eMap.TransformCoordsToFieldXY = function( x, y ){
		var oxy = this.GetOffset();
		x -= oxy.x;
		y -= oxy.y;
		// TODO: Optimalizovat - ulozit predvypocitane a menit pri zmene velikosti (zatim nenastava)
		x -= Math.ceil(this.eBox.clientWidth / 2);
		y -= Math.ceil(this.eBox.clientHeight / 2); /**/
		
		return {
			y: Math.ceil(y / this.iFieldHeight - x / this.iFieldWidth),
			x: Math.ceil(y / this.iFieldHeight + x / this.iFieldWidth)
		};
	};
	

	


	/** Creates the field's DOM representation. **/
	eMap.CreateFieldElement = function(){
		var eDiv = document.createElement("div");
		eDiv.className = "field";
		eDiv.onclick = function(){ OSD( "[" + this.data.x + "," + this.data.y + "]" ); };

		var eDiv2 = document.createElement("div");
		eDiv2.className = "img_holder";
		eDiv.appendChild( eDiv2 );

		this.appendChild( eDiv );
		this.appendChild( document.createTextNode("\n") );
		return eDiv;
	};

	

	/**
   **  Vykreslí jednu buòku.
	 **  Vytvoøí nové <div> s pøíslušnými CSS vlastnostmi podle pøedaného objektu.
	 **/
	eMap.DrawField = function( oField ){
		if( "object" != typeof oField  || !(oField instanceof Xcom.Field) )
			throw new TypeError("eMap.DrawField(): argument is not an Xcom.Field instance.");
		
		var x = oField.x;
		var y = oField.y;
		OSD( sprintf("  eMap.DrawField()[%d,%d]",y,x, oField.level) );///
		
		var eElement = oField.GetElement();
    //OSD( ObjectToStringEx( eElement ) );///
		// Pokud element neexistuje, vytvoøíme ho.
		if( !eElement ){
			OSD("    Creating element...");///
			eElement = this.CreateFieldElement();
			
			// Umístìní 
			var co = this.TransformFieldXYtoCoords( x, y, oField.level );
      OSD( "co.x: "+co.x+" co.y: "+co.y );///
      eElement.style.left   = co.x + "px";
      eElement.style.top    = co.y + "px";
      eElement.style.zIndex = co.y;
      eElement.data = { x: x, y: y };
			
			oField.SetElement( eElement ); // U objektu buòky uložíme, že k ní patøí tento element.
		}
		
		// Samotne upravy elementu podle objektu...
		
		eElement.className = "field";
		
		// ENUM('plain','building','industry','rail','road')
		switch( oField.GetUsageType() ){
			case "plain":
				eElement.className += " plain " + oField.GetTerrainType();
				// Ground: 'grass','farm','stones','bumpy'
				if( "farm" == oField.GetTerrainType() )
					eElement.className += " offset_" + oField.GetAnimationOffset();
				break;
			case "building":
				eElement.className += " building " + oField.GetBuildingType();
				break;
			case "industry":
				eElement.className += " industry " + oField.GetBuildingType();
				break;
			case "station":
				eElement.className += " station " + oField.GetBuildingType();
				break;
			case "rail":
				eElement.className += " rail " + oField.GetRailsString();
				break;
			case "road":
        //alert( ObjectToString( oField ) );///
        //alert( ObjectToString( oField.GetRoadsString() ) );///
				eElement.className += " road " + oField.GetRoadsString();
				break;
		}
		
		//oField.SetElementValid( false );
		this.land.ValidateField( oField );
	};
	

	
	/**  Vykreslí jednu buòku.
	 **  Upraví CSS vlastnosti reprezentujícího <div> podle vlastností objektu buòky.
	 **  Pøípadnì vytvoøí nové <div>.
	 **/
	eMap.DrawFieldXY = function( x, y ){
		//OSD( sprintf("eMap.DrawFieldXY(%d,%d)",x,y) );///

		// Získáme objekt buòky z modelu dat.
		var oField = this.land.GetField( x, y );
		if( !oField ){
			OSD(" ... non-existent field ["+y+","+x+"].");///
			return;
		}
		this.DrawField( oField );
		
	};
	
	
	
	/**  Draws all fields from the given area.  **/
	eMap.DrawArea = function( iLeft, iTop, iRight, iBottom ){
		OSD( sprintf("eMap.DrawArea(%d,%d,%d,%d)", iLeft, iTop, iRight, iBottom) );
		/*var aoFields = this.land.GetCellsInArea( iLeft, iTop, iRight, iBottom );
		for( var i in aoFields ){
			eMap.DrawField( aoFields[i] );
		}*/
		for( var y = iTop; y <= iBottom; y++ ){
			for( var x = iLeft; x <= iRight; x++ ){
				this.DrawFieldXY( x, y );
			}
		}
	};
	
	
	// ===  OFFSET - map position  === //
	eMap.oiOffset = { x: 0, y: 0 };
	eMap.GetOffset = function(){ return { x: this.oiOffset.x, y: this.oiOffset.y }; };
	eMap.SetOffset = function( x, y ){
		if( "object" == typeof x ){ y = x.y; x = x.x; }
		this.oiOffset.x = x;
		this.oiOffset.y = y;
	};
	eMap.AdjustOffset = function( x, y ){
		if( "object" == typeof x ){ y = x.y; x = x.x; }
		this.oiOffset.x += x;
		this.oiOffset.y += y;
	};
	/**  Moves the map accoring to the actual offset.  **/
	eMap.Move = function(){
		this.style.marginLeft = this.oiOffset.x + "px";
		this.style.marginTop  = this.oiOffset.y + "px";
		id("debug_info_map_margin").innerHTML = sprintf("X: %d, Y: %d", this.oiOffset.x, this.oiOffset.y );
	};
	
	


	// Vytvoøíme objekt Land 
  eMap.land = new Xcom.Land( -2, -2, 2, 2 );
	eMap.land.eMap = eMap;
  
  //alert( eMap.land.toString() );///
  //InsertImages( eMap );
	eMap.DrawArea( -2, -2, 2, 2 );
  //alert( eMap.land.toString() );///
	//eMap.DrawArea( -2, -2, 4, 2 );
	//eMap.land.LoadCellsForArea( 0, 0, 6, 6 );
	//eMap.DrawArea( 0, 0, 4, 4 );

  
};// function InitMap();






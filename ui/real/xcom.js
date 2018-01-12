


// ================= //
// === Xcom.Game === //
// ================= //

var Xcom = {

  /** Construction modes enumeration. */
  ConstructionModes: { NONE: 0, DYNAMITE: 1, ROAD: 2, RAIL: 3, INDUSTRY: 4 },

  /** Current construction mode. */
  eConstr: 0,
  
  data: {
    cities: [],
    industries: [],
    roadTracks: [],
    roadVehicles: [],
    companies: [],
    stations: []
  }



};








// ================== //
// === Xcom.Field === //
// ================== //
Xcom.Field = function( x, y ){
	// DB table columns:  x, y, changed, type, level, building, owner, rails, road, farm_offset

	// Non-modificable and internal field properties 
	this.eElement = null;
	this.bElementValid = false;
	
	this.x = x;
	this.y = y;

	// Modificable field properties (game-related)
  this.eUsageType = "plain"; // ENUM('plain','building','industry','rail','road')
  this.eTerrainType  = "stones";
	this.eBuildingType = "";
	this.iLevel = 1;
	this.iOwner = null;
	this.abRails = []; // asi bude objekt...
	this.abRoads = [false,false,false,false];
	this.iAnimationOffset = 0;

};


/** toString() */
Xcom.Field.prototype.toString = function(){
  return sprintf(
    "Xcom.Field{ x: %d, y: %d, lev: %d, usage: %s, terr: %s, build: %s  }",
    this.x, this.y, this.iLevel, this.eUsageType, this.eTerrainType, this.eBuildingType
  );
};


// Element 
Xcom.Field.prototype.SetElement = function( e ){ this.eElement = e; };
Xcom.Field.prototype.GetElement = function(){ return this.eElement; };
Xcom.Field.prototype.IsElementValid = function(){ return this.bElementValid; };
Xcom.Field.prototype.SetElementValid = function( b ){ this.bElementValid = b; };

Xcom.Field.prototype.GetAnimationOffset = function() { return this.iAnimationOffset; }
Xcom.Field.prototype.SetAnimationOffset = function(i){ return this.iAnimationOffset == i ? false : (this.iAnimationOffset = i, true); }


// Basic usage type 
// ENUM('plain','building','industry','rail','road')
/** @returns true, if it changes the state of the object. **/
Xcom.Field.prototype.SetUsageType = function( eUT ){
	//if( this.eUsageType == eUT ) return false;
	//this.eUsageType = eUT; return true;/
	return this.eUsageType == eUT ? false : (this.eUsageType = eUT, true);
};
Xcom.Field.prototype.GetUsageType = function(){ return this.eUsageType; };


// Terrain Type 
// Ground: 'grass','farm','stones','bumpy'
/** @returns true, if it changes the state of the object. **/
Xcom.Field.prototype.SetTerrainType = function( eTT ){
	return this.eTerrainType == eTT ? false : (this.eTerrainType = eTT, true);
};
Xcom.Field.prototype.GetTerrainType = function(){ return this.eTerrainType; };

// Building type 
/** @returns true, if it changes the state of the object. **/
Xcom.Field.prototype.SetBuildingType = function( eBT ){
	return this.eBuildingType == eBT ? false : (this.eBuildingType = eBT, true);
};
Xcom.Field.prototype.GetBuildingType = function(){ return this.eBuildingType; };



// Level 
Xcom.Field.prototype.SetLevel = function(x){ return this.iLevel == x ? false : (this.iLevel = x, true); };
Xcom.Field.prototype.GetLevel = function(){ return this.iLevel; };

// Owner - reference to owner object?
Xcom.Field.prototype.SetOwner = function(x){ return this.iOwner == x ? false : (this.iOwner = x, true); };
Xcom.Field.prototype.GetOwner = function(){ return this.iOwner; };

// Rails - NS, NW, NE, WE, SW, SE 
Xcom.Field.prototype.SetRails = function(x){ return this.abRails == x ? false : (this.abRails = x, true); };
Xcom.Field.prototype.GetRails = function(){ return this.abRails; };
Xcom.Field.prototype.GetRailsString = function(){ return ConvertMapOfBooleansToSet( this.abRails, "NS,NW,NE,WE,SW,SE", "_"); };


// Roads - N, S, W, E --> [bool,bool,bool,bool];
Xcom.Field.prototype.SetRoads = function(x){ return this.abRoads == x ? false : (this.abRoads = x, true); };
Xcom.Field.prototype.GetRoads = function(){ return this.abRoads; };
Xcom.Field.prototype.GetRoadsString = function(){ return ConvertMapOfBooleansToSet( this.abRoads, "N,S,W,E", ""); };



Xcom.Field.TerrainType = {
  LOUKA    : 1,
  LES      : 2,
  HLINA    : 3,
  ZELEZO   : 4,
  OBILI    : 5,
  VESNICE1 : 11,
  VESNICE2 : 12,
  VESNICE3 : 13
};


// Buildings 
//'cinema','cotagge_tall','cottage_small','cottage_small2','cottage_small3','cottage_small4',
//'flats_gray','flats_overhang','flats0','flats1','flats2','flats3','flats4',
//'fountain','hanging','hotel','house_modern','house_modern2','house_pool',
//'house_swiss','houses_2garage','houses_2garden','houses_3','houses_3garden',
//'church','office_tower','offices_block_modern','offices_modern','park1','park2',
//'shop_mall','shop_small','shops_and_offices','shops_and_offices2','shops_modern',
//'stadium_american','stadium_soccer','statue','theater','warehouse'
Xcom.Field.BuildingTypes = {
	church: {}
}

// Rails
// 'NS','WE','NW','NE','WS','SE'

// Roads
//'N','S','W','E'













// ================= //
// === Xcom.Land === //
// ================= //
Xcom.Land = function( iLeft, iTop, iRight, iBottom ){
  
  // 2D Array Init //
  this.data = [];
	this.aoInvalidFields = [];

  // Last updated timestamp of the map sub-areas.
  this.aiLastUpdated = [[]];

  this.subareas = new Xcom.Land.Subareas();


  
  this.iMinX = iLeft;
  this.iMinY = iTop;
  //this.iMaxX = iLeft + iHei - 1;
  this.iMaxX = iRight;
  //this.iMaxY = iTop + iHei - 1;
  this.iMaxY = iBottom;
  
  
  //*/
	for( var y = iTop; y <= iBottom; y++ ){
		var y2 = this.TransformCoord( y );
    this.data[y2] = [];
    for( var x = iLeft; x <= iRight; x++ ){
			var x2 = this.TransformCoord( x );
			var oField = new Xcom.Field( x, y );
      this.data[y2][x2] = oField;
			//this.aoInvalidFields.push( oField );
			this.InvalidateField( oField );
		}
  }/**/
  
  this.LoadCellsForArea( iLeft, iTop, iRight, iBottom );
};


// Platnost elementu - jestli vykreslený DIV odpovídá datùm objektu.

/**  Marks the Field as invalid and queues it to be redrawn. **/
Xcom.Land.prototype.InvalidateField = function( oField ){
	oField.SetElementValid( false );
	// Pøidáme do fronty na DOM update.
	this.aoInvalidFields.push( oField );
};

/**  Marks the Field as valid and removes it from the queue of invalid fields. **/
Xcom.Land.prototype.ValidateField = function( oField ){
	oField.SetElementValid( true );
	// Odstraníme pole z fronty èekající na DOM update.
	for( var i in this.aoInvalidFields ){
		if( this.aoInvalidFields[i] == oField ){
			this.aoInvalidFields.splice( i, 1 ); break;
		}			
	}
};



// Get Min/Max X/Y ()
Xcom.Land.prototype.GetMinX = function(){ return this.iMinX; };
Xcom.Land.prototype.GetMinY = function(){ return this.iMinY; };
Xcom.Land.prototype.GetMaxX = function(){ return this.iMaxX; };
Xcom.Land.prototype.GetMaxY = function(){ return this.iMaxY; };
// Set Min/Max X/Y ()
Xcom.Land.prototype.SetMinX = function(i){ this.iMinX = i; };
Xcom.Land.prototype.SetMinY = function(i){ this.iMinY = i; };
Xcom.Land.prototype.SetMaxX = function(i){ this.iMaxX = i; };
Xcom.Land.prototype.SetMaxY = function(i){ this.iMaxY = i; };
// Adjust Limits
Xcom.Land.prototype.AdjustMinMaxXY = function( x, y ){
	if( x > this.GetMaxX() ) this.SetMaxX( x );
	if( x < this.GetMinX() ) this.SetMinX( x );
	if( y > this.GetMaxY() ) this.SetMaxY( y );
	if( y < this.GetMinY() ) this.SetMinY( y );
}

Xcom.Land.prototype.GetWidth  = function(){ return this.GetMaxX() - this.GetMinX() + 1; };
Xcom.Land.prototype.GetHeight = function(){ return this.GetMaxY() - this.GetMinY() + 1; };


// toString() 
Xcom.Land.prototype.toString = function(){
  var iWid = this.GetWidth();
  var iHei = this.GetHeight();

  var s = "Xcom.Land [" + this.GetMinX() +","+ this.GetMinY() + "]"
               +" -> [" + this.GetMaxX() +","+ this.GetMaxY() + "]"
               +" = [ " + iWid +" x "+ iHei + " ]:\n\n";
  
  s += "  data bounds: [y: "+this.data.length+", x: " + (this.data.length ? this.data[0].length : "N/A") + "]\n\n";
  s += "==============================================================================================================================\n\n";

  try {
    for( var y = this.GetMinY(); y <= this.GetMaxY(); y++ ){
			var coY = this.TransformCoord( y );
      for( var x = this.GetMinX(); x <= this.GetMaxX(); x++ ){
			
				var coX = this.TransformCoord( x );
        var oField = this.GetField( x, y );
				s += "["+y+","+x+"] -> ["+coY+","+coX+"]: ";
				if( oField ) s += (oField.GetTerrainType()+" | ");
				else         s += (" ." + (typeof oField) /*+ " " + ( ("object" == typeof oField) ? oField.constructor : "")*/ + " | ")
				
      }
      s += "\n";
    }
  } catch( e ) { alert( "Xcom.Land.toString() at [y,x]:  ["+y+","+x+"];  " + e ); }
  return s;
};



// TransformCoords() 
Xcom.Land.prototype.TransformCoord  = function( i ){
	if( isNaN(i) ) throw new TypeError("Bad parameters to Xcom.Land.prototype.TransformCoords()."); // Type check
	//var i2 = Math.abs(i) * 2;  if( i < 0 ) i2--; return i2;
	return i < 0 ? (-i)*2-1 : i*2;
}
Xcom.Land.prototype.TransformCoords = function( x, y ){
  if( isNaN(y) || isNaN(x) ) throw new TypeError("Bad parameters to Xcom.Land.prototype.TransformCoords()."); // Type check
	return {
		x: x < 0 ? (-x)*2-1 : x*2,
		y: y < 0 ? (-y)*2-1 : y*2
	};
};

// GetField() 
Xcom.Land.prototype.GetField = function( x, y ){
  if( isNaN(y) || isNaN(x) ) throw new TypeError("Bad parameters to Xcom.Land.prototype.GetField()."); // Type check
  var co = this.TransformCoords( x, y );
  return this.data[co.y] ? this.data[co.y][co.x] : null;
};


// CreateField() 
/**  @returns the Field object at given coordinates. 
 **  If the field does not exist yet, it is created.
 **/
Xcom.Land.prototype.GetCreateField = function( x, y ){
  if( isNaN(y) || isNaN(x) ) throw new TypeError("Bad parameters to Xcom.Land.prototype.GetField()."); // Type check

  var co = this.TransformCoords( x, y );
  
  if( !this.data[co.y] )
    this.data[co.y] = [];
  
  if( !this.data[co.y][co.x] )
    this.data[co.y][co.x] = new Xcom.Field( x, y );
		
	this.AdjustMinMaxXY( x, y );
  
  return this.data[co.y][co.x];
};


// LoadCellForArea() - Select which function should handle.
//Xcom.Land.prototype.LoadCellsForArea = GenerateCellsForArea;
Xcom.Land.prototype.LoadCellsForArea = LoadCellsForAreaAJAX;






/**  Generates cells data.  **/
function GenerateCellsForArea( iLeft, iTop, iRight, iBottom ){

  var oField;
  var iHei = this.GetHeight();
  var iWid = this.GetWidth();
  
  var oWRG = new WeightedRandomGenerator( { LOUKA: 1000, LES: 20, HLINA: 20, ZELEZO: 20, VESNICE1: 50 } )

  for( var y = iTop; y <= iBottom; y++ ){
    for( var x = iLeft; x <= iRight; x++ ){
      oField = this.CreateField( y, x );
      oField.SetTerrainType( Xcom.Field.TerrainType[oWRG.GetRandom()] );
    }
  }
}




/**
 * Loads cells data using AJAX.
 */
function LoadCellsForAreaAJAX( iLeft, iTop, iRight, iBottom, iSince )
{
	OSD( sprintf("Xcom.Land.LoadCellsForAreaAJAX(%d,%d,%d,%d, since: %d) called.", iLeft, iTop, iRight, iBottom, iSince) );///

	// Kontrola 
	if( this.constructor != Xcom.Land ) throw new Exception( "LoadCellsForAreaAJAX() volána mimo kontext tøídy Xcom.Land!" );

	// Vstupní data 
	var sURL = "ajax.LandData.php?" + serialize( { minX: iLeft, maxX: iRight, minY: iTop, maxY: iBottom, since: iSince } );
	
	
	// Vytvoøíme objekt požadavku.
	var xml = new XMLHttpRequest();
	xml.oLand = this; // Uložíme objekt Xcom.Land pro callback fci.
	xml.open("GET", sURL, true);
	xml.onreadystatechange = function(){
    if( xml.readyState != 4 ) return; // Kompletní naètení dat.
		try{
			eval("xml.oData = " + xml.responseText + ";");
			//xml.oData = eval(xml.responseText);// Nefacha, píše "invalid label"...
		}catch( e ){
			alert("!!!! Chyba !!!!  V onreadystatechange handleru: "+e);
			if( e instanceof SyntaxError ) throw new SyntaxError("Syntax error in downloaded JSON data: "+xml.responseText.substring(40));
			throw e;
		}
		xml.oLand.MergeCellsData( xml.oData );
		//xml.oLand.eMap.DrawArea( iLeft, iTop, iRight, iBottom );
		xml.oLand.RedrawQueued();
		xml.oLand = null;
		xml = null;
	};
	xml.send( null );

  // Store that we updated some areas. // TODO: get timestamp from the returned AJAX result.
  this.subareas.SetSubareasLastUpdatedForArea( iLeft, iTop, iRight, iBottom, Math.floor( new Date().getTime() / 1000 ) );

};// function LoadCellsForAreaAJAX();









/**
 *  Saves the field to the server using AJAX.
 **/
Xcom.Land.prototype.UploadField = function( x,y, usage, ground, building, roads, rails ){
	this.UploadArea( x,y, x,y, usage, ground, building, roads, rails );
};


/**
 *  Saves the area to the server using AJAX.
 **/
Xcom.Land.prototype.UploadArea = function( x,y, x2, y2, usage, ground, building, roads, rails ){
	//UploadField( x.value, y.value, usage.value, ground.value, building.value /*, roads.value, rails.value*/

	// Vstupní data 
	var sURL = "ajax.UploadField.php?" + serialize(
		{ x: x, y: y, x2: x2, y2: y2, usage: usage, ground: ground, building: building, roads: roads, rails: rails } );
	
	var xml = new XMLHttpRequest();
	xml.oLand = this; // Uložíme objekt Xcom.Land pro callback fci.
	xml.open("GET", sURL, true);
	xml.onreadystatechange = function(){
    if( xml.readyState != 4 ) return; // Jen kompletní naètení dat.

		try{
			eval("xml.oData = " + xml.responseText + ";");
		}catch( e ){
			alert("!!!! Chyba !!!!  V onreadystatechange handleru: "+e);
			if( e instanceof SyntaxError ) throw new SyntaxError("Syntax error in downloaded JSON data.");
			throw e;
		}
		xml.oLand.MergeCellsData( xml.oData );
		xml.oLand.RedrawQueued();
		xml.oLand = null;

		xml = null;
	};
	xml.send( null );
	
};






/**  Merges cells data from oData with existing cells data. **/
Xcom.Land.prototype.MergeCellsData = function( oData ){
	//alert( "Xcom.Land.prototype.MergeCellsData() called. oData == " + typeof(oData) + " " + oData.constructor.name );///
	OSD( "Xcom.Land.MergeCellsData() called.");///

	// Merge cells;
	var oField;
	for( var y in	oData ){
		for( var x in oData[y] ){
			OSD("  MergeCellsData() ["+y+","+x+"]");///
			oField = this.GetCreateField(x,y);

			// DB table columns:  x, y, changed, type, level, ground, building, owner, rails, road, farm_offset

			// Seznam podmínek, které zpùsobí zneplatnìní buòky.
			// Pokud mutátor zmìní stav buòky, vrací true, jinak false.
			var bChangedAny = !oField.IsElementValid();
			
			oField.SetUsageType( oData[y][x].type ) && (bChangedAny = true);
			oField.SetTerrainType( oData[y][x].ground ) && (bChangedAny = true);
			oField.SetBuildingType( oData[y][x].building ) && (bChangedAny = true);
			oField.SetLevel( oData[y][x].level ) && (bChangedAny = true);
			oField.SetOwner( oData[y][x].owner ) && (bChangedAny = true);
			oField.SetRails( ConvertSetToMapOfBooleans( oData[y][x].rails, "NS,NW,NE,SW,SE,WE" ) );// && (bChangedAny = true);
			oField.SetRoads( ConvertSetToMapOfBooleans( oData[y][x].roads, "N,S,W,E" ) ) && (bChangedAny = true);
			OSD( "    bChangedAny? " + (bChangedAny ? 'Ano.': 'Ne.') );///
			
			if( bChangedAny ){
				this.InvalidateField( oField );
			}
		}// x
	}// y
};// function Xcom.Land.MergeCellsData();



/**  Redraws and validates all fields in the queue of invalidated fields. **/
Xcom.Land.prototype.RedrawQueued = function(){
	OSD( "Xcom.Land.RedrawQueued() called.");///
	// Nemùže být for-in, protože pøi validaci se z pole odstraní a pak to pøeskakuje :)
	/*for( var i in this.aoInvalidFields ){
		var oField = this.aoInvalidFields[i];
		OSD("  RedrawQueued()["+i+"] ["+oField.y+","+oField.x+"]");///
		this.eMap.DrawField( oField );
	}*/
	var oField;
	while( oField = this.aoInvalidFields.shift() ){
		OSD("  RedrawQueued() ["+oField.y+","+oField.x+"]");///
		this.eMap.DrawField( oField );
	}
}




/**  @returns an Array with Field objects within the given area. **/
Xcom.Land.prototype.GetCellsInArea = function( iLeft, iTop, iRight, iBottom ){
	var aoFields = new Array();
	for( var y = this.iTop; y <= this.iBottom; y++ ){
		for( var x = this.iLeft; x <= this.iRight; x++ ){
			var oField = this.GetField( x, y );
			if( oField ) aoFields.push( oField );
		}
	}
	return aoFields;
};					 






// -- SubAreas -- //

Xcom.Land.Subareas = function(){
  this.aaiLastUpdated = [[]];
}


/**
 *  Gets last updated timestamp of the map sub-area (10 x 10) of the given cell.
 */
Xcom.Land.Subareas.prototype.GetSubareaLastUpdatedForCell = function( x, y ){
  var co = TransformCoords( x, y );
  return this.aaiLastUpdated[co.y] ? this.aaiLastUpdated[co.y][co.x] : 0;
};



/**
 *  Sets last updated timestamp for the given sub-area.
 */
Xcom.Land.Subareas.prototype.SetSubareaLastUpdated = function( x, y, iTimestamp ){
  if( null == this.aaiLastUpdated[y] )
    this.aaiLastUpdated[y] = [];
  this.aaiLastUpdated[y][x] = iTimestamp;
};


/**
 *  Set last updated timestamp of the map sub-areas within the given area. (10 x 10).
 */
Xcom.Land.Subareas.prototype.SetSubareasLastUpdatedForArea = function( iLeft, iTop, iRight, iBottom, iTimestamp ){

  //if( iRight - iLeft < 10 || iBottom - iTop < 10 )

  // [-50, -29] .. [25, 15]:  Several fully updated subareas:  [-5,-3], [-5,-2], ... [2,1]

  // We count only FULLY included sub-areas.
  coSub1 = {
    x: Math.ceil(iLeft / 10),
    y: Math.ceil(iTop / 10)
  }
  coSub2 = {
    x: Math.floor(iRight / 10),
    y: Math.floor(iBottom / 10)
  }

  OSD( sprintf("Updated areas [%d,%d]..[%d,%d]; TS %d.", coSub1.x, coSub1.y,  coSub2.x, coSub2.y, iTimestamp ) );

  for( y = coSub1.y; y < coSub2.y; y++) {
    for( x = coSub1.x; x < coSub2.x; x++) {
      this.SetSubareaLastUpdated(x, y, iTimestamp);
    }
  }
};


/**
 *  Returns cell coords transformed for sub-areas table (currently, divided by 10).
 */
Xcom.Land.Subareas.prototype.TransformXYtoSubarea = function( x, y ){
  return {
    x: Math.floor(x / 10),
    y: Math.floor(y / 10)
  };
};



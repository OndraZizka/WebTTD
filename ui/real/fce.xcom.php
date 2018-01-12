<?php


class Rect
{
  public $x, $y, $x2, $y2;

  function __construct($x, $y, $x2, $y2) {

    if( $x > $x2 ) swap( $x, $x2 );
    if( $y > $y2 ) swap( $y, $y2 );

    $this->x = $x;
    $this->y = $y;
    $this->x2 = $x2;
    $this->y2 = $y2;
  }

  function getCoordsAsArray(){
    return Array( $this->x, $this->y, $this->x2, $this->y2 );
  }

}


/**
 * Returns the string for SQL WHERE condition to rescrict the area.
 * @param <type> $iX
 * @param <type> $iY
 * @param <type> $iX2
 * @param <type> $iY2
 * @param <type> $iOnlyChangedSince
 * @return <type>
 */
function GetSqlWhereForArea( /*Rect*/ $area,  $iOnlyChangedSince = null )
{
  list($iX, $iY, $iX2, $iY2) = $area->getCoordsAsArray();


  $sWhereCond = "";
	if( $iX === $iX2  &&  $iY === $iY2 ){
		$sWhereCond = sprintf("x = %d AND y = %d", $iX, $iY);
	}else{
    if( 0 ){
      $sWhereCond = sprintf("x >= %d AND y >= %d  AND  x <= %d AND y <= %d", $iX, $iY, $iX2, $iY2 );
    }else{
      $sWhereCond = sprintf('
              x + y BETWEEN %1$d + %2$d AND %3$d + %4$d
        # AND x + y BETWEEN %2$d+%1$d + (x-%1$d)*2 AND %2$d+%3$d + (x-%3$d)*2
        # AND x + y BETWEEN %2$d+%1$d + (x-%1$d)*2 AND %2$d+%3$d + (x-%3$d)*2
        #AND x + y > %2$d+%1$d + (x-%1$d)*2
        AND -x + y < -%2$d+%3$d
        AND -x + y > -%4$d+%1$d
        # AND -x + y BETWEEN -iTop+iRight AND -iBottom+iLeft
        ',
        $iX, $iY, $iX2, $iY2 );
      echo "/* $sWhereCond */\n";
    }
	}
	if( null !== $iOnlyChangedSince ){
		$sWhereCond .= " AND UNIX_TIMESTAMP(changed) >= ".(double)$iOnlyChangedSince;
	}
  return $sWhereCond;
}




/**
 *
 * @global <type> $oDB
 * @global <type> $gt_land
 * @param <type> $iX
 * @param <type> $iY
 * @param <type> $iX2
 * @param <type> $iY2
 * @param <type> $iOnlyChangedSince
 * @return cells[][][]
 */
function LoadCells( /*Rect*/ $area,  $iOnlyChangedSince = null ){

 	global $oDB, $gt_land;

  // WHERE
	$sWhereCond = GetSqlWhereForArea( $area,  $iOnlyChangedSince );

	// SQL query
	$sql = "SELECT x, y, level, type, ground, building, owner, rails, roads, farm_offset FROM $gt_land
		WHERE $sWhereCond
		ORDER BY y ASC, x ASC";

	$oResult =& $oDB->Select($sql);

	// SQL OK ? //
	if( !$oResult->IsOK() ){
    echo "/* ".$oResult->GetError()." */;\n";
    return Array();
	}

  // Pomoci JSON:
  $aaaCells = Array();
  //$oResult->DataSeek(0);
  while($a = $oResult->FetchRow(MYSQL_ASSOC)){
    /*$a['building'] = (string)$a['building'];
    $a['owner'] = (string)$a['owner'];
    $a['roads'] = (string)$a['roads'];
    $a['rails'] = (string)$a['rails'];/**/
    $aaaCells[(int)$a['y']][(int)$a['x']] = $a;
  }
  return $aaaCells;

}//function LoadCells()



function LoadCars( $rtArea, $iOnlyChangedSince ){
 	global $oDB, $gt_cars;
  $gt_cars = "xcom_cars";

  // WHERE
	$sWhereCond = GetSqlWhereForArea( $rtArea,  $iOnlyChangedSince );

	// SQL query
	$sql = "SELECT id, id_track FROM $gt_cars // TODO
		WHERE $sWhereCond
		ORDER BY y ASC, x ASC";

	$oResult =& $oDB->Select($sql);

	// SQL OK ? //
	if( !$oResult->IsOK() ){
    echo "/* ".$oResult->GetError()." */;\n";
    return Array();
	}

  // Pomoci JSON:
  $aaaCells = Array();
  //$oResult->DataSeek(0);
  while($a = $oResult->FetchRow(MYSQL_ASSOC)){
    $aaaCells[(int)$a['y']][(int)$a['x']] = $a;
  }
  return $aaaCells;

}



function LoadTowns( $rtArea, $iOnlyChangedSince ){

}



function LoadStations( $rtArea, $iOnlyChangedSince ){

}





/**
 *
 * @param string $sTable
 * @param string $saCols
 * @param Rect $area
 */
function SelectDataForArea( /*Rect*/ $area, $sTable, $saCols, $sOrder = 0 ){
  // WHERE
	$sWhereCond = GetSqlWhereForArea( $area,  $iOnlyChangedSince );

	// SQL query
	$sql = "SELECT $saCols FROM $sTable
		WHERE $sWhereCond
		ORDER BY $sOrder";

	$oResult =& $oDB->Select($sql);


	// SQL OK ? //
	if( !$oResult->IsOK() ){
		echo "/* ".$oResult->GetError()." */;\n";
	}else{
		// Pomoci JSON:
		$aaaCells = Array();
		//$oResult->DataSeek(0);
		while($a = $oResult->FetchRow(MYSQL_ASSOC)){
			$a['building'] = (string)$a['building'];
			$a['owner'] = (string)$a['owner'];
			$a['roads'] = (string)$a['roads'];
			$a['rails'] = (string)$a['rails'];/**/
			$aaaCells[(int)$a['y']][(int)$a['x']] = $a;
		}
    return $aaaCells;
  }
  
}










/**  UpdateArea()  */
function UpdateArea( $iX, $iY, $iX2, $iY2, $asData ){
	 
	if( $iX > $iX2 ) swap( $iX, $iX2 );
	if( $iY > $iY2 ) swap( $iY, $iY2 );

	// --- SQL --- //
	global $oDB, $gt_land;
	
	// VALUES 
	$asSqlValues = Array();
		//$asSqlValues[] = "changed = NULL";
		if(isset($asData['usage']))    $asSqlValues[] = "type     = ".asq($asData['usage']);
		if(isset($asData['ground']))   $asSqlValues[] = "ground   = ".asq($asData['ground']);
		if(isset($asData['building'])) $asSqlValues[] = "building = ".asq($asData['building']);
		//if(isset($asData['roads']))    $asSqlValues[] = "roads    = ".asq( join(',',array_keys($asData['roads'])) );// Direct form submit 
		if(isset($asData['roads'])) $asSqlValues[] = "roads = ".asq($asData['roads']);
		//if(isset($asData['rails']))    $asSqlValues[] = "rails    = ".asq( join(',',array_keys($asData['rails'])) );
		if(isset($asData['rails'])) $asSqlValues[] = "rails = ".asq($asData['rails']);
		// owner, rails, roads, farm_offset";
	$sSqlValues = join(', ', $asSqlValues);
	
	// WHERE 
	if( $iX === $iX2  &&  $iY === $iY2 ){
		$sWhereCond = sprintf("x = %d AND y = %d", (int)$iX, (int)$iY);
	}else{
		$sWhereCond = sprintf("x >= %d AND y >= %d  AND  x <= %d AND y <= %d", (int)$iX, (int)$iY, (int)$iX2, (int)$iY2 );
	}
	
	//$sql = "INSERT INTO $gt_land SET x = $iX, y = $iY, $sSqlValues ON DUPLICATE KEY UPDATE $sSqlValues";
	$sql = "UPDATE $gt_land SET $sSqlValues WHERE $sWhereCond";
	
	$oResult =& $oDB->Execute($sql);
	
	// SQL OK //
	if( !$oResult->IsOK() ){
		echo "// ".$oResult->GetError()."\n";
	}else{				 
	
	}
}// function UpdateArea()







/**  GetCurrentDBTime()
 **  @returns current database time.  **/
function GetCurrentDBTime(){

	global $oDB;
	
	$sql = "SELECT UNIX_TIMESTAMP();";
	$oResult =& $oDB->Select($sql);
	
	if( !$oResult->IsOK() ){
		return FALSE;
	}else{
		return $oResult->GetCell(0,0);
	}

}// function GetCurrentDBTime()

?>
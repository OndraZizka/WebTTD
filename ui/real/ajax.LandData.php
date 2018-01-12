<?php

/**
  Naинtб danou obdйlnнkovou oblast z DB a odesнlб data jako JSON. 
	Oиekбvanэ vstup:  minX, minY, maxX, maxY
*/

//ob_start("ob_gzhandler");
//ini_set("zlib.output_compression", "On");
//ini_set("zlib.output_compression_level", 0);
if(!@$global_inc) require_once '_local.inc.php4'; error_reporting(E_WARNING);
require_once "fce.xcom.php";
nocache();



// --- INIT --- //
require_once $g_Dir.'init.php';

// --- AKCE --- //
//require_once $g_DirCode.'pub.a._.php4';



/**  HandleRequest()  */
function HandleRequest(){
	global $_INPUT;

	// Check 
	if(! (isset($_INPUT['minX']) && isset($_INPUT['maxX']) && isset($_INPUT['minY']) && isset($_INPUT['maxY']) ) ){
		echo "// Nezadanй hodnoty! PoЮadovбno: minX, maxX, minY, maxY.\n";
		echo "// ?minX=2&maxX=6&minY=1&maxY=5\n";
		return;
	}

	$iMinX = (int)$_INPUT['minX'];
	$iMaxX = (int)$_INPUT['maxX'];
	$iMinY = (int)$_INPUT['minY'];
	$iMaxY = (int)$_INPUT['maxY'];
	$iSince = @(int)$_INPUT['since'];

  echo "// $iSince\n";

  echo "// ".!@$_INPUT['poll']."\n";


  $rtArea = new Rect($iMinX, $iMinY, $iMaxX, $iMaxY);


  // One-off download.
  if( ! @$_INPUT['poll'] ){
    $aRetData = Array();
    $aRetData['cells'] = LoadCells( $rtArea, $iSince );
    /*$aRetData['cars'] = LoadCars( $rtArea, $iSince );
    $aRetData['towns'] = LoadTowns( $rtArea, $iSince );
    $aRetData['stations'] = LoadStations( $rtArea, $iSince );*/
    echo json_encode( $aRetData['cells'] )."\n";
  }
  // AJAX poll.
  else {
    ignore_user_abort(false);
    //while( ! ( connection_aborted() || connection_timeout() ) ){
    while( connection_status() == 0 ){
      $aaaCells = LoadArea( $iMinX, $iMinY, $iMaxX, $iMaxY, $iSince );
      if( count($aaaCells) != 0 ){
        echo 'window.top.eMap.land.Update( ' . json_encode( $aaaCells )." );\n";
      }else {
        echo ";\n";
      }
      flush();
      $iSince = time();
      sleep(1);
    }
  }

}// function HandleRequest()





/// --- main --- ///
header("Content-Type: text/javascript");
if( $oDB->GetErrorsNum() ){
	foreach( $oDB->GetErrors() as $oError ){ // cDBA_Error{}
		echo "// Error: ".$oError->GetString()."\n";
	}
}

HandleRequest();	

?>
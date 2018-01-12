<?php if(!@$global_inc) require_once '_local.inc.php4'; error_reporting(E_ALL);
require_once "fce.xcom.php";
nocache();


if( '127.0.0.1' != $_SERVER["REMOTE_ADDR"] )
	die();///////////

//UploadField( x.value, y.value, usage.value, ground.value, building.value /*, roads.value, rails.value*/


// --- INIT --- //
require_once $g_Dir.'init.php';

// --- AKCE --- //
//require_once $g_DirCode.'pub.a._.php4';



/**  HandleRequest()  */
function HandleRequest(){
	global $_INPUT;
	global $oDB;

	// Check 
	if(! (isset($_INPUT['x']) && isset($_INPUT['y']) && isset($_INPUT['usage']) ) ){
		echo "// Nezadané hodnoty! Požadováno: x, y, usage.\n";
		return;
	}
	
	$iX = (int)$_INPUT['x'];
	$iY = (int)$_INPUT['y'];
	$iX2 = (int)$_INPUT['x2'];
	$iY2 = (int)$_INPUT['y2'];
	
	$iTime = GetCurrentDBTime();

	UpdateArea( $iX, $iY, $iX2, $iY2, $_INPUT );
	$aaaCells = LoadArea( $iX, $iY, $iX2, $iY2,  $iTime );
	echo json_encode( $aaaCells )."\n";
	
	
}// function HandleRequest()



	




// Content-Type: text/javascript
header("Content-Type: text/javascript");

// Errors duting init 
if( $oDB->GetErrorsNum() ){
	foreach( $oDB->GetErrors() as $oError ){ // cDBA_Error{}
		echo "// Error: ".$oError->GetString()."\n";
	}
}

// Handle the request 
HandleRequest();

?>
<?php if(!@$global_inc) require_once '_local.inc.php4'; error_reporting(E_ALL);
nocache();


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
	 
	// SQL //
	global $gt_land;
	
	$asSqlValues = Array();
		//$asSqlValues[] = "changed = NULL";
		if(isset($_REQUEST['usage']))    $asSqlValues[] = "type     = ".asq($_INPUT['usage']);
		if(isset($_REQUEST['ground']))   $asSqlValues[] = "ground   = ".asq($_INPUT['ground']);
		if(isset($_REQUEST['building'])) $asSqlValues[] = "building = ".asq($_INPUT['building']);
		//if(isset($_REQUEST['roads']))    $asSqlValues[] = "roads    = ".asq( join(',',array_keys($_REQUEST['roads'])) );// Direct form submit 
		if(isset($_REQUEST['roads'])) $asSqlValues[] = "roads = ".asq($_INPUT['roads']);
		//if(isset($_REQUEST['rails']))    $asSqlValues[] = "rails    = ".asq( join(',',array_keys($_REQUEST['rails'])) );
		if(isset($_REQUEST['rails'])) $asSqlValues[] = "rails = ".asq($_INPUT['rails']);
		// owner, rails, roads, farm_offset";
	$sSqlValues = join(', ', $asSqlValues);

	
	$sql = "INSERT INTO $gt_land SET x = $iX, y = $iY, $sSqlValues ON DUPLICATE KEY UPDATE $sSqlValues";
	
	$oResult =& $oDB->Execute($sql);
	
	// SQL OK //
	if( !$oResult->IsOK() ){
		echo "// ".$oResult->GetError()."\n";
	}else{				 
	
	}
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
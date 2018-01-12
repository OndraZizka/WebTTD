<?php $BASIC_INC_INCLUDED = 1;
if(!defined('INCLUDED_inc.php4')):
define('INCLUDED_inc.php4', true);
if(!defined('INCLUDED_inc.php3')) include_once('inc.php3');


/*************************************************************
   inc.php4 verze 1.0.9 
   Historie:
   1.0.10 - Upravena fce   CallInfo() - pridan parametr $iOffset
   1.0.9  - pridana fce    CallInfo()
   1.0.8  - opravena fce   PrintStackTrace() - pridan parametr $iSkipLevels
   1.0.7  - opravena fce   PrintStackTrace()
   1.0.6  - pridana fce    is_subclass()
   1.0.5  - pridana fce    PrintStackTrace()
   1.0.4  - pridana fce    AdjustedPrintR()
   1.0.3  - upravena includovaci hlavicka 
   1.0.2  - upravena       CreateInputArray()
   1.0.1  - pøidány fce    ArrayToJavaScript(),
          	              ArrayToJavaScriptSimple(),
                          GetArrayIndexTypes()
*************************************************************/


/***************************************************************************
*  Returns whether specified class is subclass of the other class.         *
***************************************************************************/
function is_subclass($sClass, $sExpectedParentClass){
	do if( $sExpectedParentClass === $sClass ) return true;
	while( false != ($sClass = get_parent_class($sClass)) );
	return false;
}
// Test: 
//class A {} class B extends A {} class C extends B {} echo (int) is_subclass('C', 'A');



/***************************************************************************
*  Vrací info o volani funkce, ze ktere je volana tato,                    *
*  pripadne o $iOffset urovni vyse v callstacku.                           *
***************************************************************************/
function CallInfo($iOffset=-1){
	$aaStack = debug_backtrace();
	$iCalls = Count($aaStack);
	$aCall = $aaStack[min(-$iOffset,$iCalls-1)]; // Prevent getting behind the end of array.
	$sArgs = implode( ', ', array_map('gettype', $aCall['args']) );
	return str_repeat('   ', Count($aaStack)-2). @$aCall['class']."::".$aCall['function']."($sArgs)  in  ".$aCall['file']." @ ".$aCall['line'];
}
function IndentByCallDepth(){
	$aaStack = debug_backtrace();
	return str_repeat('   ', Count($aaStack)-2);
}


/***************************************************************************
*  Vrací výpis call-stacku ve stylu Javy                                   *
***************************************************************************/
function PrintStackTrace($iSkipLevels=0){

	$asKeys = explode(' ', 'class function file line object type');
	$aaStack = debug_backtrace();
	//array_shift($aaStack);                                    // Odstraneni volani teto funkce 
	//array_unshift($aaStack, array_combine($asKeys, $asKeys)); // Pridani headeru 

	/** function line file class object type args */
	
	// Count column widths //
	$aiWidths = array_combine($asKeys, Array(0,0,0,0,0,0));
	//echo AdjustedPrintR($aiWidths);///
	foreach($aaStack as $aStackRecord){
		foreach($aiWidths as $sKey => $iWid)
			@$aiWidths[$sKey] = max($iWid, strlen((string)$aStackRecord[$sKey]));
	}
	
	// Create the string //
	$sRet = "\n";
	foreach($aaStack as $aStackRecord){
		if( $iSkipLevels-- > 0 ) continue;
		/*foreach($aiWidths as $sKey => $iWid){
			$sVal = (string)@$aStackRecord[$sKey];
			$sRet .= " | " . $sVal . str_repeat(' ', $iWid - strlen($sVal) );
		} $sRet .= "  |\n"; */
		$sVal = (string)@$aStackRecord['class'];
		$sRet .= $sVal . str_repeat(' ', max(0, $aiWidths['class'] - strlen($sVal)) );
		$sVal = (string)@$aStackRecord['type'];
		$sRet .= $sVal . str_repeat(' ', max(0, $aiWidths['type'] - strlen($sVal)) );
		$sVal = (string)@$aStackRecord['function'].'()';
		$sRet .= $sVal . str_repeat(' ', max(0, $aiWidths['function']+2 - strlen($sVal)) );
		$sVal = '  in  '.(string)@$aStackRecord['file'];
		$sRet .= $sVal . str_repeat(' ', max(0, $aiWidths['file'] - strlen($sVal)) );
		$sVal = '  @  '.(string)@$aStackRecord['line'];
		$sRet .= $sVal . str_repeat(' ', max(0, $aiWidths['line'] - strlen($sVal)) );
		$sRet .= "  \n";
	}
	return $sRet;
}


/***************************************************************************
*  Vraci upraveny vystup funkce print_r() - setri mistem                   *
***************************************************************************/
function AdjustedPrintR(&$x){
	//ob_start();
	$s = print_r($x, true);
	//$s = ob_get_contents();
	//ob_end_flush();
	
	$aasReplaces = Array(
		 Array("\n \\*RECURSION\\*", " *RECURSION*")        // *RECURSION\\* on the same line 
		,Array("(Object|Array)\n([[:space:]]*)\\(", "\\1(") // Opening parentheses on the same line 
		,Array("\\(\n[[:space:]]+\\)", "()")          // Empty structures 
		,Array("\\)\n\n([[:space:]]*)\\)", ")\n\\1)") // Empty line between closing parentheses - odd  
		,Array("\\)\n\n([[:space:]]*)\\)", ")\n\\1)") // Empty line between closing parentheses - even 
		//,Array("", "")
	);
	
	foreach($aasReplaces as $asReplace){
		$s = ereg_replace($asReplace[0], $asReplace[1], $s);
	}
	
	return $s;
}



/*************************************************************
  Vrati pole se všemi hodnotami ze vstupnich dat              
	nebo ze zadanych defautnich hodnot.                         
	Nakonec podle $asVarData nìkteré hodnoty                    
	pøejmenuje a pøetypuje na zadaný typ.                       
	
	 =  Default values 
	+= Input values (EGPCSX in arbitrary order)
	*= Selected values are retyped and renamed 
	
	Example of use: 
  	CreateInputArray(
  		// default values 
  		Array('id'=>15, 'section'=>'news', 'pi'=>3.14),
  		// metadata - "[#]input_name [type [output_name [default value]]]"
			// - the # means that the variable will be exported to $GLOBALS 
			// - default 'type' means that original type is preserved 
			// - default output name is the same as input name 
			// - "default default value" is null 
  		Array('id i', '#section s', 'pagenum i')
  	);
*************************************************************/
function CreateInputArray($asDefaultValues, $asVarData=Array(), $saExport='', $sOrder=0){

	if('array' != gettype($asDefaultValues)) $asDefaultValues = Array();
	$a =& $asDefaultValues;
	
	// ------- Collect values ------- //

	// Simply use GPC order as set in php.ini 
	if($sOrder === 0){
		$a = array_merge($a, $_REQUEST);
	}
	// Or bother a bit more with the order that user wanted? 
	// $_GET, $_POST, $_COOKIE, $_SERVER, $_FILES, $_ENV, $_REQUEST, and $_SESSION
	else{
		$sOrder = str_replace('e', '_ENV ', $sOrder);
		$sOrder = str_replace('g', '_GET ', $sOrder);
		$sOrder = str_replace('p', '_POST ', $sOrder);
		$sOrder = str_replace('c', '_COOKIE ', $sOrder);
		$sOrder = str_replace('s', '_SERVER ', $sOrder);
		$sOrder = str_replace('x', '_SESSION ', $sOrder);
		$asOrder = explode(' ', trim($sOrder));
		// print_r($asOrder); ///

		for($i = 0; $i < Count($asOrder); $i++){
			$a = array_merge($a, $GLOBALS[$asOrder[$i]]);
		}
	} // if($sOrder === 0) else 
	
	
	// ------- Rename, retype and export values ------- //
	foreach($asVarData as $sVarData){
		
		// Zpracujeme retezec s metadaty 
		$asParts = explode(' ', $sVarData, 4);
		$bExportGlobal = false;
		$sNameIn = $asParts[0];
		if($sNameIn[0] == '#'){
			$sNameIn = substr($sNameIn, 1);
			$bExportGlobal = true;
		}
		$sNameOut = $sNameIn;
		$sDefault = null;
		$cType     = 'x';
		
		if(Count($asParts) >= 2){
			$cType     = $asParts[1];
			if(Count($asParts) >= 3)  $sNameOut = $asParts[2];
			if(Count($asParts) == 4)  $sDefault = $asParts[3];
		}
		
		// Prevedeme, prejmenujeme, pridame neexistujici 
		$xTemp = isset($a[$sNameIn]) ? $a[$sNameIn] : $sDefault;
		if($sNameIn != $sNameOut) unset($a[$sNameIn]); // Vyhodíme pùvodní jméno 
		switch($cType){
			case 'i': $xTemp = (integer) $xTemp; break;
			case 'ui': $xTemp = (integer) max(0,$xTemp); break;
			case 'd': $xTemp = (double)  $xTemp; break;
			case 'ud': $xTemp = (double)  max(0,$xTemp); break;
			case 'f': $xTemp = (float)   $xTemp; break;
			case 's': $xTemp = (string)  $xTemp; break;
		}
		$a[$sNameOut] = $xTemp;
		
		if($bExportGlobal)
			$GLOBALS[$sNameOut] = $xTemp;
		
	} // foreach($asVarData as $sVarData) 
	
	
	// ------- Export some values to global namespace - 2nd way ------- //
	foreach(explode(' ', $saExport) as $sValName)
		$GLOBALS[$sValName] = isset($a[$sValName]) ? $a[$sValName] : null;
	
	//print_r($a); echo "<br>"; ///
	$GLOBALS['_INPUT'] = $a;
	return $a;
}


//CreateInputArray(null, $asVarData=Array('#shit ud shit -1'), $saExport='', $sOrder=0);
//print_r($_INPUT);


/*************************************************************
  Vytahne do globalnich promennych zadane hodnoty.            
  Vstup: Pole stringu nebo string s definici promenne         
	       ve tvaru input_name[ [type ]output_global_name [def]]
 ************************************************************/
function ExtractFromGPC($sName, $sOrder=0){
	//if($sOrder === 0) $sOrder = ( str_replace('e', '', str_replace('s', '', ini_get('variables_order'))) ); // 'gpc'
	
	if(is_string($sName)){
		$asParts = explode(' ', $sName, 4);
		$bExportGlobal = false;
		$sNameIn = $sNameOut = $asParts[0];
		if($sNameIn[0] == '#'){
			$sNameIn = substr($sNameIn, 1);
			$bExportGlobal = true;
		}
		$cType     = 's';
		
		if(Count($asParts) >= 2){
			if(Count($asParts) >= 3){
				$cType     = $asParts[1];
				$sNameOut  = $asParts[2];
				if(Count($asParts) == 4){
					$sDefault = $asParts[3];
				}
			}else{
				$sNameOut  = $asParts[1];
			}
		}
		
		// Simply use GPC order as set in php.ini 
		if($sOrder === 0){
			if(!isset($_REQUEST[$sNameIn])){
				if(!isset($sDefault)) return false;
				else $xVal = $sDefault;
			} else {
				$xVal = $_REQUEST[$sNameIn];
			}
		}
		// Or bother a bit more with the order that user wanted? 
		// $_GET, $_POST, $_COOKIE, $_SERVER, $_FILES, $_ENV, $_REQUEST, and $_SESSION
		else{
			$sOrder = str_replace('e', '_ENV ', $sOrder);
			$sOrder = str_replace('g', '_GET ', $sOrder);
			$sOrder = str_replace('p', '_POST ', $sOrder);
			$sOrder = str_replace('c', '_COOKIE ', $sOrder);
			$sOrder = str_replace('s', '_SERVER ', $sOrder);
			$sOrder = str_replace('x', '_SESSION ', $sOrder);
			$asOrder = explode(' ', trim($sOrder));
			// print_r($asOrder); ///
			$a = Array();
			//for($i = 0; $i < Count($asOrder); $i++)
			//	$a = array_merge($a, $GLOBALS[$asOrder[$i]]);
			for($i = Count($asOrder)-1; $i >= 0 ; $i--)
				if(isset($GLOBALS[$asOrder[$i]][$sNameIn])){
					$xVal = $GLOBALS[$asOrder[$i]][$sNameIn];
					break;
				}
		} // if($sOrder === 0) else 
		

		if(!isset($xVal)){
			//if(!$bExportGlobal) return false;
			//else
				$xVal = '';
		}

	
		
		//echo "\$sNameIn: $sNameIn; \$sNameOut: $sNameOut; \$cType: $cType; \$sDefault: $sDefault;";

		switch($cType){
			default:
			case 's':  $xVal =     (string)$xVal; break;
			case 'i':  $xVal =        (int)$xVal; break;
			case 'i+': $xVal = max(0, (int)$xVal); break;
			case 'd':  $xVal =        (double)$xVal; break;
			case 'd+': $xVal = max(0, (double)$xVal); break;
			//case '': $xVal = ()$xVal; break;
		}
		
		//$GLOBALS[$sName] = $_GET[$sName] or $GLOBALS[$sName] = $_POST[$sName] or $GLOBALS[$sName] = $_COOKIE[$sName];
		$GLOBALS[$sNameOut] = $xVal;
		//echo "<br>"; ///
		return true;
		
	}elseif(is_array($sName)){
		while( list(, $sVal) = each($sName) )
			if(is_string($sVal))
				ExtractFromGPC($sVal, $sOrder);
	}
}
//ExtractFromGPC('work', 'gpc'); echo $work;


/** file_put_contents() pro PHP4 */ 
if(!function_exists('file_put_contents')){
function file_put_contents($sFname, $sData, $bAppend=0, $bBinary=1){
	$fp = fopen($sFname, ($bAppend ? 'a' : 'w') . ($bBinary ? 'b' : '') );
  if(!$fp) return false;
	fwrite($fp, $sData);
	fclose($fp);
}
}





function GetArrayIndexTypes(&$a){
	// Is it an array of unified key type? 
	foreach($a as $xKey => $xVal){
		$iI = $iS = 0;
		switch(gettype($xKey)){
			case 'integer': $iI++; break;
			case 'string':	$iS++; break;
		}
	}
	    if(0 == $iS) $cType = 'i'; // all indexes are integers
	elseif(0 == $iI) $cType = 's'; // all indexes are strings 
	else             $cType = 'x'; // mixed index types 
	
	return $cType;
}


/** Vytvoøí JavaScript Array */
function ArrayToJavaScript($a, &$sResultCode, $sName='aDefaultName'){
	if(!is_array($a)) return null;
	
	$axVals = Array();
	foreach($a as $xKey => $xVal){
		switch(gettype($xVal)){
			case 'integer': break;
			case 'double':  break;
			case 'string':	 $xVal = asq($xVal); break;
			case 'boolean':  $xVal = $xVal ? 'true' : 'false';     break;
			case 'null':     $xVal = 'null';     break;
			case 'array':    
				$sArrayCode = '';
				$bNestable = ArrayToJavaScript($xVal, $sArrayCode);
				if($bNestable) $xVal = $sArrayCode;
				else           $xVal = '"PHP array"';
				break;
			case 'object':   $xVal = '"PHP object"'; break;
			case 'resource': $xVal = '"PHP resource"'; break;
		}
		$axVals[$xKey] = $xVal;
	}	

	$sCode = '';
	$cType = GetArrayIndexTypes($a);
	switch($cType){
		case 'i':
			$sCode = '['.implode(',', $axVals).']';
			$bNestable = true;
			break;
		case 's':
			$asProperties = Array();
			foreach($axVals as $xKey => $xVal){
				$asProperties[] = "$xKey: $xVal";
			}
			$sCode = '{'.implode(', ', $asProperties).'}';
			$bNestable = true;
			break;
		case 'x':
			$sCode = ArrayToJavaScriptSimple($a, $sName);
			$bNestable = false;
			break;
	}	

	$sResultCode = $sCode; // paramater by reference 
	return $bNestable;
}


/** Vytvoøí JavaScript Array */
function ArrayToJavaScriptSimple($a, $sName='aDefaultName'){
	if(!is_array($a)) return false;
	
	$sJSCode = "var $sName = new Array();\n";
	foreach($a as $xKey => $xVal){
		switch(gettype($xVal)){
			case 'integer': break;
			case 'double':  break;
			case 'string':	 $xVal = asq($xVal); break;
			case 'boolean':  $xVal = $xVal ? 'true' : 'false';     break;
			case 'null':     $xVal = 'null';     break;
			//case 'array':    $xVal = '"PHP array"'; break;
			case 'array':
				$sArrayCode = '';
				$bNestable = ArrayToJavaScript($xVal, $sArrayCode);
				if($bNestable) $xVal = $sArrayCode;
				else           $xVal = '"PHP array"';
				break;
			case 'object':   $xVal = '"PHP object"'; break;
			case 'resource': $xVal = '"PHP resource"'; break;
		}
		
		switch(gettype($xKey)){
			case 'integer': $sJSCode .= "{$sName}[$xKey] = $xVal;\n"; break;
			case 'string':	$sJSCode .= "{$sName}[".asq($xKey)."] = $xVal;\n"; break;
		}
		
	}
	$sJSCode .= ')';
	return $sJSCode;
}




/*************************************
  Prevede SQL SET na pole ["..."] = 1 
 ************************************/
function GetSetArray($sSet){
	return SetReverseArrayToTrue(explode(',',$sSet));
}
function SetReverseArrayToTrue($arr){
	array_unshift($arr,"\nfoo\t");
	$arr = array_flip($arr);
	unset($arr["\nfoo\t"]);
	return $arr;
}





/*************************************
  HTTP headers                        
 ************************************/
 
// Tahle moc nefunguje, asi až po poslání response... 
function GetResponseHeader($sName){
	$sName = strtolower($sName);
	foreach(apache_response_headers() as $sHeader){
		$aParts = array_map('trim', explode(':', $sHeader, 2));
		if(2 > Count($aParts)) continue;
		list($sName, $sCurName) = $aParts;
		if($sName == strtolower($sCurName)){ return $sVal; break; }
	}
	return null;
}

function GetRequestHeader($sName){
	$sName = strtolower($sName);
	/*foreach(getallheaders() as $sCurName => $sVal){
		if(strtolower($sName) == strtolower($sCurName)){ return $sVal; break; }
	}*/
	/*foreach(array_change_key_case(getallheaders(), CASE_LOWER) as $sCurName => $sVal){
		if($sName == $sCurName){ return $sVal; break; }
	}*/
	$asHeaders = array_change_key_case(getallheaders(), CASE_LOWER);
	if(isset($asHeaders[$sName])) return $asHeaders[$sName];
	else return null;
}
//print_r(GetResponseHeader('content-type'));
//print_r(GetResponseHeader('Host'));
//print_r(apache_request_headers());












// Tohle je definovano v inc.php3 bez array_reverse() > 4.04 //
//function FormatDate($d){$a=explode('-',$d); return implode('.',array_reverse($a));}

// Track - zbytecna
/*function track($s){
	global $$s, $HTTP_GET_VARS, $HTTP_POST_VARS, $HTTP_COOKIE_VARS;
	return $$s = $HTTP_GET_VARS[$s] OR $what = $HTTP_POST_VARS[$s] OR $what = $HTTP_COOKIE_VARS[$s];
}*/

endif;// if(!defined('INCLUDED_inc.php4'))
?>
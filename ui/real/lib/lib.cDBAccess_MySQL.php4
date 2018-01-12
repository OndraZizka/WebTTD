<?php

require_once dirname(__FILE__).'/'.'lib.cDBAccess.php4';
if(!function_exists('mysql_pconnect'))
	user_error('Function mysql_pconnect() not found! Needed in '.__FILE__);
	

define ('MYSQL_ERR_NO_SUCH_TABLE', 1146);	
define ('MYSQL_ERR_DUPLICATE_KEY', 1022);
define ('MYSQL_ERR_DUPLICATE_ENTRY', 1062);
if(!defined('MYSQL_CLIENT_MULTI_RESULTS'))
	define('MYSQL_CLIENT_MULTI_RESULTS', 131072);	

/*****************************************************************
   cDBAccess_MySQL - Extension of cDBAccess for MySQL 
   Written by Ondra Zizka @ Dynawest, ondra@dynawest.cz 
   @version 1.0.6 
	 
	 History:
	 1.0.6:
	    - Added:  _Connect() - $this->dbflags - flags for database connection.
	 1.0.5:
	   - Changed: SetConnectionCharset() calls parent::SetConnectionCharset()
	 1.0.4:
		- Added:   CheckTable()
		- Changed: GetCell() - removed mysql_data_seek(0) at the end of call.
	 1.0.3:
		- Added:   _IncQueriesCount() - Counts queries performed.
		- Changed: Execute() and Select() now returns cDBA_Result_MySQL object, see IsOK().
		- 
	 1.0.2:
		- Changed function GetCell($iRow, $iField, $xDefault=null):
			When $xDefault is set, returns it when coordinates are out of data bounds.
	  - Several compatibility changes, documentation improvements.
	 1.0.1:
	   Upravena cResult_MySQL::FreeResult()  (rRes muze byt 1 pro dotazy bez vracenych dat)
		 Upravena cResult_MySQL::NumRows() (pokud rRes == 1, vraci ulozeny pocet z mysql_affected_rows())
	 
*****************************************************************/    
class cDBAccess_MySQL extends cDBAccess {
	
	function _Connect(){
		$spoj = @mysql_pconnect($this->dbhost, $this->dbuser, $this->dbpass, $this->dbflags);
		if(!$spoj){
			$this->_AddError(@mysql_error(), @mysql_errno(),
			    "Connect() Host: $this->dbhost, User: $this->dbuser, Using password: ".($this->dbpass ? 'YES' : 'NO').", Flags: $this->dbflags");
			$this->bConnected = false;
			return false;
		}
		$this->bConnected = true;
		return $spoj;
	}

	/** Note: mysql_close() will not close persistent links created by mysql_pconnect().  */
	function _Disconnect(){ return true; /* @mysql_close($spoj); */ }
	
	
	function _AddError($sError, $iErrno, $sSQL){ $this->aoErrors[] = new cDBA_MySQL_Error($sError, $iErrno, $sSQL); }
	
	
	/**  Select the active database.  */
	function UseDatabase($sDatabase){
		$bDbOk = @mysql_select_db($sDatabase);
		if(!$bDbOk){
			$this->_AddError(@mysql_error($this->dbspoj), @mysql_errno($this->dbspoj), "USE ".mysql_escape_string($this->sDatabaseDefault));
			return false;
		}
		return true;
	}
	
	/**  Retrieves the ID generated for an AUTO_INCREMENT column by the previous INSERT query.  */
	function GetLastInsertId(){
		return @mysql_insert_id($this->dbspoj);
	}
	
	
	
	/**  Executes a SQL statement  */
	function _Execute($sSQL){
		if(!$this->dbspoj) do{
			if(!$this->bStrict){
				if($this->Connect()){ break; }
			}
			$this->_AddError('Can\'t execute when not connected.',  2006, $sSQL);
			return null;
		}while(false);
		
		$this->_IncQueriesCount();
		
		// For SELECT, SHOW, DESCRIBE, EXPLAIN statements,  returns a resource on success  or FALSE on error.
		// For other type of SQL statements,                returns TRUE       on success  or FALSE on error.
		$rRes = mysql_query($sSQL, $this->dbspoj);
		if(!$rRes){
			$this->_AddError(mysql_error($this->dbspoj), mysql_errno($this->dbspoj), $sSQL);
		}
		return $rRes;
	}
	
		
	/**  Executes a SQL statement.
	 *   @returns false on failure,
	 *            cResult_MySQL object on success (no matter whether rows were returned).
	              If no rows were returned, cResult_MySQL->rRes contains 1.  */
	function Execute($sSQL){
		if( !isset($sSQL) ) return $this->CreateResult(null, null, 0, '$sSQL parameter not passed to '.__METHOD__.'($sSQL).', 0);
		if( !$this->IsConnected() )
			return $oRes =& $this->CreateResult(null, "", 0, "Not connected.", 1001);
		$rRes = $this->_Execute($sSQL);
		$oRes = false;
		
		// Error 
		if( TRUE == $rRes || is_resource($rRes) ){
			$iRows = mysql_affected_rows($this->dbspoj);
			$oRes = $this->CreateResult($rRes, $sSQL, $iRows, null, null);
			return $oRes;
		}
		// OK 
		//if( false === $rRes || null === $rRes ){
		else if($this->iSelectMode == CDBA_SELECT_RETURNS_CRESULT_ON_ERROR){
			$sError = mysql_error($this->dbspoj);
			$iErrno = mysql_errno($this->dbspoj);
			// !!! Incompatibility with oldre cDBAccess !!!
			// ->> CDBA_SELECT_RETURNS_NULL_ON_ERROR 
			$oRes = $this->CreateResult(null, $sSQL, 0, $sError, $iErrno);
		}
		return $oRes;
	}
	
	/**  Makes a SELECT and returns the result.
	 *   Result returned by reference to let the object know when you unset($res); .
	 *   @returns  Depends on select mode set by SetSelectMode():
	 *	    CDBA_SELECT_RETURNS_NULL_ON_ERROR: Returns null on error.
	 *      CDBA_SELECT_RETURNS_CRESULT_ON_ERROR: Returns cDBA_Result object.
	 *   @see cDBAccess::SetSelectMode()
	 */
	function &Select($sSQL){
		if( !isset($sSQL) ) return $this->CreateResult(null, null, 0, '$sSQL parameter not passed to '.__METHOD__.'($sSQL).', 0);
		if( !$this->IsConnected() ){
			$oRes =& $this->CreateResult(null, "", 0, "Not connected.", 1001); return $oRes;
		}
		$rRes = $this->_Execute($sSQL);
		$oRes = null;
		// OK 
		if($rRes && 'resource' == gettype($rRes) && $this->IsSelectResult($rRes)){
			$iRows = mysql_num_rows($rRes);
			$oRes =& $this->CreateResult($rRes, $sSQL, $iRows, null, null);
			$this->CollectResult($oRes);
		}
		// Error 
		else if($this->iSelectMode == CDBA_SELECT_RETURNS_CRESULT_ON_ERROR){
			$sError = mysql_error($this->dbspoj);
			$iErrno = mysql_errno($this->dbspoj);
			// !!! Incompatibility with oldre cDBAccess !!!
			// ->> CDBA_SELECT_RETURNS_NULL_ON_ERROR
			$oRes =& $this->CreateResult(null, $sSQL, 0, $sError, $iErrno);
		}
		return $oRes;		
	}	
	
	
	/**  Performs a select and returns value from the specified cell. */
	function SelectCell($sSQL, $iRow=0, $iCol=0){
		$oRes = $this->Select($sSQL);
		if(null == $oRes || !$oRes->IsOK()) return null;
		$xVal = $oRes->GetCell($iRow, $iCol, FALSE);
		if( FALSE == $xVal )
			return null;
		return $xVal;
	}
	

	/**  Returns whether the result contains rows (comes from SELECT or SHOW)  */
	function IsSelectResult($rRes){ return mysql_num_fields($rRes); }
	
	
	/**  Creates a result object. Needed to let subclass use another result class.  */
	function CreateResult($rRes, $sSQL, $iRows, $sError, $iErrno){
		$o = new cDBA_MySQL_Result($rRes, $sSQL, $iRows, $sError, $iErrno);
		return $o;
	}
	
	
	
	/**  SetConnectionCharset() - sets connection charset.   [MySQL > 4.1.1]  */
	function SetConnectionCharset($sCharset){
		//echo "\n".CallInfo();///
		parent::SetConnectionCharset($sCharset); // sets the internal variable 
		$sSQL = "SET CHARACTER SET '".mysql_escape_string($sCharset)."'";
		$bSucc = $this->Execute($sSQL);
		//echo "<br>Succ: ".(int)$bSucc;///
		if(!$bSucc){
			$this->_AddError("Error when setting CHARSET to [$sCharset].", 0, '');
			//echo AdjustedPrintR(debug_print_backtrace());///
			return false;
		}
	}
	
	
	/** Returns number of rows affected by the last query performed. 
		@deprecated
		You should use cDBA_Result::NumRows() instead. */
	function AffectedRows(){ return mysql_affected_rows($this->dbspoj); }
	
	
	
	
	/**<***********************************************************************>
	*  Checks whether a table is in given format.                              *
	* @param sTable  table name
	* @param aaCols  expected columns. Members:
	*                ['name']: Column's name   
	*                ['null']: true = can / false = can't be null / not set or null = whatever
	*                ['key']:  pri* = primary / uni* = unique / mul = normal multiple key / not set = whatever 
	* @param bStrict  If true, no other columns accepted 
	***************************************************************************/
	function CheckTable($sTable, $aaCols, $bStrict=false){
		//echo "\n".CallInfo();///
	
		// Get columns 
		$sql = "SHOW COLUMNS FROM ".$sTable;
		$oRes = $this->Select($sql);
		// ERR 1146: Table does not exist. 
		if( null == $oRes || !$oRes->IsOK() )
			return false;
		
		// Look for columns 
		$iOk = 0;
		while($asRow = $oRes->FetchRow()){
			
			// Find the column info for this column 
			$aColInfo = null;
			foreach($aaCols as $aColInfoCur){
				if($aColInfoCur['name'] == $asRow['Field']){
					$aColInfo = $aColInfoCur; break;
				}
			}
			
			// Column not listed in check-list 
			if( null == $aColInfo ){
				// If in strict mode, refuse any other column.
				if( $bStrict ){ $iOk = 0; break; }
				continue; // Else continue to next column.
			}
			// Column found in check-list, check properties 
			else{
				// Type 
				$sType = substr($asRow['Type'], 0, strcspn($asRow['Type'],'(') );
				//echo " ".$asRow['Field']." ".$sType." [".$aColInfo['types']."]";
				
				if(!empty($aColInfo['types']) && !in_array($sType, explode(' ', $aColInfo['types'])))
					continue;
				// NULL 
				if( isset($aColInfo['null']) && null !== $aColInfo['null'] ){
					if( ( $aColInfo['null'] ? 'YES' : 'NO') != $asRow['Null'] )
						continue;
				}
				// Index 
				if( isset($aColInfo['key']) ){
					$sKeyOpt = strtoupper(substr($aColInfo['key'],0,3));
					if($sKeyOpt == 'NON'){
						if( $bStrict &&  '' != $asRow['Key'] ) // none 
							continue;
					}
					elseif( $sKeyOpt != $asRow['Key'] ) // PRI, UNI, MUL 
						continue;
				}
			}
			// One more column is ok, count it. 
			$iOk++;
		}// while($asRow) 
		
		$oRes->FreeResult();
		
		return Count($aaCols) == $iOk;
	}// cDBAccess_MySQL::CheckTable() 
	
	
	
} /* class cDBAccess_MySQL */





/*****************************************************************
   class cDBA_MySQL_Result - a class for SELECT result.
*****************************************************************/
class cDBA_MySQL_Result extends cDBA_Result {
	var $rRes;
	var $sSQL;
	
	// Constructor //
	/*function cDBA_MySQL_Result(&$rRes, $sSQL, $iRows){
		$this->rRes  =& $rRes;    // 
		$this->sSQL  =  $sSQL;    // 
		$this->iRows =  $iRows;   // 
	}*/
	
	/**  Frees a result.  */
	function FreeResult(){
		$bSucc = true;
		if( is_resource($this->rRes) )
			$bSucc = mysql_free_result($this->rRes);
		//unset($this->rRes);
		$this->rRes = null; /*$this->sSQL = '';*/ $this->iRows = 0;
		return $bSucc;
	}
	
	/**  For a result created by queries returning some rows (SELECT, SHOW, DESCRIBE), returns a number of rows in a result.
	     For other queries (done with Execute()) like UPDATE, INSERT, DELETE, returns a number of rows affected by that query. */
	function NumRows(){
		return is_resource($this->rRes) ? mysql_num_rows($this->rRes) : $this->iRows;
	}
	
	/**  Returns content of one cell in a result.  */
	function GetCell($iRow, $iField, $xDefault=null){
		if($iRow   >= $this->NumRows()   || $iRow   < 0)
			return (null !== $xDefault) ? $xDefault : Array("Bad row index [$iRow/".$this->NumRows()."]");
		if($iField >= $this->NumFields() || $iField < 0)
			return (null !== $xDefault) ? $xDefault : Array("Bad field index [$iField/".$this->$this->NumFields()."]");
		$ret = mysql_result($this->rRes, $iRow, $iField);
		//mysql_data_seek($this->rRes, 0);
		return $ret;
	}

	
	function FetchRow($iType=MYSQL_ASSOC){
		$ret = mysql_fetch_array($this->rRes, $iType);
		//if( !$ret ){ echo "x"; var_dump($ret); }
		if( $ret === FALSE || is_array($ret) ) return $ret;
		$aBT = debug_backtrace();
		echo "Not a MySQL result in ".$aBT[1]['file']." @ ".$aBT[1]['line'];
	}
	
	function DataSeek( $iOffset ){
		$iRows = $this->NumRows();
		// Data seek to beginning on empty result set - nothing.
		if( $iRows == 0 )
			if( 0 === $iOffset ) return TRUE;
		// Going off the limits...
		if( $iOffset >= $iRows ){
			$this->AddErrorSql( "Offset [$iOffset] out of result set [$iRow]." ); return FALSE;
		}
		// Do the actual data seek. 
		return mysql_data_seek($this->rRes, $iOffset);
	}
	
	
	// Fields //
	
	function FetchField($iOffset=null){ return ($iOffset === null) ? mysql_fetch_field($this->rRes) : mysql_fetch_field($this->rRes, $iOffset); }
	
	function FieldSeek($iOffset){ return mysql_field_seek($this->rRes, $iOffset); }
	
	function NumFields(){ return mysql_num_fields($this->rRes); }
	
	function FieldType($iOffset){ return mysql_field_type($this->rRes, $iOffset); }
	
	function FieldTable($iOffset){ return mysql_field_table($this->rRes, $iOffset); }
	
	/**  @returns an array of objects with information about columns of the result.  */
	function GetColumns(){
		$aoColumns = Array();
		
		$iFieldsCount = $this->NumFields();
		for( $i = 0; $i < $iFieldsCount; $i++ ){
			$aoColumns[] = $this->FetchField($i);
		}
		return $aoColumns;
	}

} /* class cDBA_Result */





/*****************************************************************
   class cDBA_MySQL_Error  -  specializes the Dump                
*****************************************************************/
class cDBA_MySQL_Error extends cDBA_Error{

	//  Not needed, called default 
	/*function cDBA_MySQL_Error($sError, $iErrno, $sSQL){
		parent::cDBA_Error($sError, $iErrno, $sSQL);
	}*/
	function Dump($f='_DEF_', $bDebug=false){
		if(!$bDebug) return '[MySQL error]';
		$sql = $this->sSQL;
		    if($f=='_DEF_'){ $f = '<div class="mysql_error"><b>MySQL error:</b> <i>%s</i>'.($this->sSQL?'<br/><b>SQL:</b> %s':'')."</div>\n"; $sql = htmlspecialchars($this->sSQL); }
		elseif($f=='_PBB_'){ $f = '[block.mysql_error][b]MySQL error:[/b] %s'.($this->sSQL?'[br/][b]SQL:[/b] [span.sql]%s[/span]':'')."[/block]\n"; $sql = str_replace('[', '[[', $this->sSQL); }
		elseif($f=='_TXT_'){ $f = 'MySQL error: %s'.($this->sSQL ? '  [SQL: %s]' : '')."\n"; }
		return sprintf($f, $this->sError, $sql);
		//$iErrno
	}	
} /* cDBA_MySQL_Error */








/*****************************************************************
   Test   
*****************************************************************/

//
/* Test ?><?


header("Content-Type: text/plain");

$oMySQLConn = new cDBAccess_MySQL('localhost:3350', 'test', 'test');
$oMySQLConn->SetConnectionCharset('cp1250');  // cp1250_general_ci 
$oResult =& $oMySQLConn->Select($sql = "SELECT 1 + 1");
$oResult =& $oMySQLConn->Select($sql = "SHOW DATABASES");
// var_dump($oResult); 
if(!$oResult)
	$oMess->AddErrorSql($oMySQLConn->GetError(), $sql);
else{
	//echo "\n".$oResult->GetCell(0,0);
	while($a = $oResult->FetchRow(MYSQL_NUM)){
		echo "\n". $a[0];
	}
}
$oMySQLConn->FreeResults();
echo "\n".$oResult->NumRows();

echo "\nErrors num: ". $oMySQLConn->GetErrorsNum();
foreach($oMySQLConn->GetErrors() as $i => $oError){
	echo "\n". $oError->Dump('_TXT_', 1);
	//echo "<br/>Error: ". var_export($oError, 1);
}
$oMySQLConn->ClearErrors();
foreach($oMySQLConn->GetErrors() as $i => $oError){
	echo "\n". $oError->Dump('_TXT_', 1);
}


//	CheckTable() test 
echo " ".(int)$bTableOk = $oDB->CheckTable('i18n', Array(
	Array('name'=>'idstr', 'null'=>false, 'key'=>'primary',  'types'=>''),
	Array('name'=>'lang',  'null'=>false, 'key'=>'multiple', 'types'=>''),
	Array('name'=>'val',   'null'=>false, 'key'=>'none',     'types'=>''),
) );


//<?/**/ 
?>
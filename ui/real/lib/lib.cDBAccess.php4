<?php

/*****************************************************************
   cDBAccess - Yet another database access wrapper      
   Written by Ondra Zizka @ Dynawest, ondra@dynawest.cz 
   @version 1.0.5 
	 
	 Changes:
	 1.0.5 - Added:   $this->dbflags - flags for database connection.
	 1.0.4 - Changed: SetConnectionCharset() sets internal variable.
	 1.0.3 - Added:   GetQueriesCount() counts performed queries (those passed to database)
	 1.0.2 - Introduced CDBA_SELECT_RETURNS_CRESULT_ON_ERROR:
	                and CDBA_SELECT_RETURNS_NULL_ON_ERROR:
	         cDBAccess::Select() has $iFlags param. When passed to with -"-,
	         it returns cDBA_Result object even upon failure.
	         The failure is detectable with cDBA_Result->IsOK().
	       - function cDBA_Result::IsOK()
	       - functions cDBA_Result::GetError(), cDBA_Result::GetErrno()
	 1.0.1 - _Query() renamed to _Execute()
	       - var $bConnected;
	       - function GetLastError()
	       - function GetLastErrorString()
	       - function Disconnect()
	       - function GetConnection()
	       - function IsConnected()
*****************************************************************/



define('CDBA_SELECT_RETURNS_NULL_ON_ERROR', 0);
define('CDBA_SELECT_RETURNS_CRESULT_ON_ERROR', 1);


/**  class cDBAccess - Yet another database access wrapper  */
class cDBAccess{

	var $dbspoj;
	var $dbhost;
	var $dbuser;
	var $dbpass;
	var $dbflags;
	function SetFlags($iFlags){ $this->dbflags = $iFlags; }
	function GetFlags(){ return $this->dbflags; }
	
	var $sDatabase;
	var $sDatabaseDefault;
	var $sConnCharset;
	var $sConnCharsetDefault;
	
	var $bStrict;
	var $bConnected;
	var $iSelectMode = CDBA_SELECT_RETURNS_NULL_ON_ERROR;
	function GetSelectMode()            { return $this->iSelectMode; }
	function SetSelectMode($iMode){
		switch( $iMode ){
			case CDBA_SELECT_RETURNS_NULL_ON_ERROR:
			case CDBA_SELECT_RETURNS_CRESULT_ON_ERROR:
				$this->iSelectMode = $iMode;
				return true; break;
			default: user_error('Unknown select mode ['.$iMode.']'); return false; break;
		}
	}
	
	var $aoErrors = Array();
	var $aoSelectResults = Array();
	var $iQueries = 0;
	function GetQueriesCount()         { return $this->iQueries; }
	function _IncQueriesCount(){ $this->iQueries++; }
	

	
	// Constructor 
	function cDBAccess($dbhost="", $dbuser="", $dbpass="", $sDatabaseDefault=null, $sConnCharsetDefault=null){
		$this->dbhost           = $dbhost;                 // 
		$this->dbuser           = $dbuser;                 // 
		$this->dbpass           = $dbpass;                 // 

		$this->sDatabase        = '';                      // 
		$this->sDatabaseDefault = $sDatabaseDefault;       // 
		$this->sConnCharset     = '';                      // 
		$this->sConnCharsetDefault = $sConnCharsetDefault; // 
		
		$this->bConnected       = false;
	}
	
	// Errors //
	function _AddError($sError, $iErrno, $sSQL){ $this->aoErrors[] = new cDBA_Error($sError, $iErrno, $sSQL); }
	function _SetError($sError, $iErrno, $sSQL){
		$this->ClearErrors();
		$this->_AddError($sError, $iErrno, $sSQL);
	}
	function GetErrors()   { return $this->aoErrors; }
	function GetErrorsNum(){ return Count($this->aoErrors); }
	function GetLastError(){ return (!is_array($this->aoErrors) || Count($this->aoErrors) <= 0) ? null : $this->aoErrors[Count($this->aoErrors)-1]; }
	function GetLastErrorString() {
		return (is_array($this->aoErrors) && Count($this->aoErrors) > 0) ? $this->aoErrors[Count($this->aoErrors)-1]->GetString() : ""; }
	function ClearErrors(){ $this->aoErrors = Array(); }


	/** Connection */
	function IsConnected(){ return $this->bConnected && is_resource($this->dbspoj); }

	function Disconnect(){
		if($this->bConnected)
			$this->_Disconnect();
		$this->bConnected = false;
		$this->dbspoj = null;
	}
	/** Abstract - override */
	function _Disconnect(){}
	
	/**  Acquires and returns the real connection. Does not set the memberv value.  */
	function _Connect(){
		$this->Disconnect();
		
		// Verbose intentially to allow copy and paste... 
		$spoj = null;
		if(!$spoj){
			$this->_AddError("cDBAccess is an abstract class. Use some extended class.", 0,
			  "Host: [$this->dbhost], User: [$this->dbuser], Using password: ".($this->dbpass ? 'YES' : 'NO'));
			return false;
		}
		$this->bConnected = true;
		return $spoj;
	}
	
	/**  Connects to the database [and sets the default database].  */
	function Connect(){
		$spoj = $this->_Connect();
		if(!$spoj){ return false; }
		$this->dbspoj = $spoj;
		
		// Default Charset 
		if($this->sConnCharsetDefault){
			$this->SetConnectionCharset($this->sConnCharsetDefault);
		}
		
		// Default database 
		if($this->sDatabaseDefault){
			$this->UseDatabase($this->sDatabaseDefault);
		}
		
		return true;
	}
	function GetConnection(){ return $this->dbspoj; }

	
	/**  Select the active database.  */
	function UseDatabase($sDatabase){ return false; }
	
	


	/**  Executes a SQL statement  */
	function _Execute($sSQL){
		if(!$this->dbspoj) do{
			if(!$this->bStrict){
				if($this->Connect()){ break; }
			}
			$this->_AddError('Can\'t execute when not connected.',  2006, $sSQL);
		}while(false);
		
		return null;
	}
	
	
	/**  Executes a SQL statement  */
	function &Execute($sSQL){
		$rRes = $this->_Execute($sSQL);
		$iRows = 0;
		return $this->CreateResult($rRes, $sSQL, $iRows);
	}
	
	
	/**  Makes a SELECT and returns the result.
	 *   Result returned by reference to let the object know when you unset($res); .
	 *   @returns  Depends on select mode set by SetSelectMode():
	 *	    CDBA_SELECT_RETURNS_NULL_ON_ERROR: Returns null on error.
	 *      CDBA_SELECT_RETURNS_CRESULT_ON_ERROR: Returns cDBA_Result object with error info.
	 *   @see cDBAccess::SetSelectMode()
	 */
	function &Select($sSQL){
		$oRes = null;

		$rRes = $this->_Execute($sSQL);		
		// OK 
		if($rRes && 'resource' == gettype($rRes) && $this->IsSelectResult($rRes)){
			$iRows = 0;//... set in subclass 
			$oRes =& $this->CreateResult($rRes, $sSQL, $iRows, 0,0);
			$this->CollectResult($oRes);
		}
		// Error 
		else if($this->iSelectMode == CDBA_SELECT_RETURNS_CRESULT_ON_ERROR){
			$iRows = 0;
			$sError = 1;//... set in subclass 
			$iErrno = 1;//... set in subclass 
			// !!! Incompatibility with oldre cDBAccess !!!
			// ->> CDBA_SELECT_RETURNS_NULL_ON_ERROR
			$oRes =& $this->CreateResult(null, $sSQL, 0, $sError, $iErrno);
		}
		return $oRes;
	}
	
	/**  Creates a result object. Needed to let subclass use another result class.  */
	function &CreateResult($rRes, $sSQL, $iRows, $sError, $iErrno){
		return new cDBA_Result($rRes, $sSQL, $iRows, $sError, $iErrno);
	}
	
	/**  Returns whether the result contains rows (comes from SELECT or SHOW)  */
	function IsSelectResult($rRes){ return false; }
	
	/**  Collects a result handler from SELECT to free it later.  */
	function CollectResult(&$oRes){
		$this->aoSelectResults[] = &$oRes;
	}
	
	/**  Releases results in stored handlers.  */
	function FreeResults(){
		foreach($this->aoSelectResults as $i => $oRes){
			$this->aoSelectResults[$i]->FreeResult();
			//$this->aoSelectResults[$i] = 0;
			unset($this->aoSelectResults[$i]);
		}
	}
	

	/**  SetConnectionCharset() - sets connection charset.   [MySQL > 4.1.1]  */
	function SetConnectionCharset($sCharset){ $this->sConnCharset = $sCharset; return false; }
	
		

} /* class cDBAccess */




/*****************************************************************
   class cDBA_Error - cDBA Error container   
*****************************************************************/
class cDBA_Error{
	var $sError;
	var $iErrno;
	var $sSQL;
	
	// Constructor 
	function cDBA_Error($sError, $iErrno, $sSQL){
		$this->sError = $sError;    // 
		$this->iErrno = $iErrno;    // 
		$this->sSQL   = $sSQL;      // 
	}
	
	function GetString(){ return $this->sError; }
	function GetNumber(){ return $this->iErrno; }
	function GetSql()   { return $this->sSQL; }
	
	// Dump() //
	function Dump($f='_DEF_', $bDebug=false){
		if(!$bDebug) return '[SQL error]';
		$sql = $this->sSQL;
		    if($f=='_DEF_'){ $f = '<div class="sql_error"><b>MySQL error:</b> <i>%s</i>'.($this->sSQL?'<br/><b>SQL:</b> %s':'')."</div>\n"; $sql = htmlspecialchars($this->sSQL); }
		elseif($f=='_PBB_'){ $f = '[block.sql_error][b]SQL error:[/b] %s'.($this->sSQL?'[br/][b]SQL:[/b] [span.sql]%s[/span]':'')."[/block]\n"; $sql = str_replace('[', '[[', $this->sSQL); }
		elseif($f=='_TXT_'){ $f = 'SQL error: %s'.($this->sSQL ? '  [SQL: %s]' : '')."\n"; }
		return sprintf($f, $this->sError, $sql);
	}

} /* class cDBA_Error */




/*****************************************************************
   class cDBA_Result - a class for SELECT result.   
*****************************************************************/
class cDBA_Result{

	var $rRes;
	var $sSQL;
	var $iRows;
	var $sError;
	function GetError()       { return $this->sError; }
	//function SetError($sError){ $this->sError = $sError; }

	var $iErrno;
	function GetErrno()       { return $this->iErrno; }
	//function SetErrno($iErrno){ $this->iErrno = $iErrno; }

	
	// Constructor //
	function cDBA_Result(&$rRes, $sSQL, $iRows, $sError=null, $iErrno=null){
		$this->rRes  =& $rRes;    // 
		$this->sSQL  =  $sSQL;    // 
		$this->iRows =  $iRows;   // 
		$this->sError = $sError;  // 
		$this->iErrno = $iErrno;  // 
	}
	
	
	/**  Error during query?  */
	function IsOK(){ return empty($this->iErrno) && empty($this->sError) && (TRUE == $this->rRes || is_resource($this->rRes) ); } 
	
	/**  Frees a result.  */
	function FreeResult(){ $this->rRes = null; /*$this->sSQL = '';*/ $this->iRows = 0; return false; }
	
	/**  Returns a number of rows in a result.  */
	function NumRows(){ return $this->iRows; }
	
	/**  Returns content of one cell in a result.  */
	function GetCell($iRow, $iField){ return false; }
	
	function DataSeek($iOffset){ return null; }
	
	function FetchField($iOffset=null){ return ($iOffset == null) ? null : null; }
	
	function FieldSeek($iOffset){ return null; }
	
	function NumFields(){ return null; }
	
	function FieldType($iOffset){ return null; }
	
	function FieldTable($iOffset){ return null; }
	
	/**  @returns an array of objects with information about columns of the result.  */
	function GetColumns(){ return Array(); }

} /* class cDBA_Result */





?>
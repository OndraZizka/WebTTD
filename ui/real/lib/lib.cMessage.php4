<?php

/*****************************************************************
  cMessage - Universal messages handler.
	
	Messages are distinguished by:
	- Class       - short string with message class, e.g. "sql", "io", "net" etc.
	- Error level - E_NOTICE, E_WARNING, E_ERROR
	- Destination - Who is the message for - 1 - user, 2 - developer, 1|2 - both
	
  Changes:
  1.0.1: AddErrorSql
*****************************************************************/


/** cMessage - a single message and metainfo */
class cMessage {
	var $iLevel = 0;   // Message error level: 0, E_NOTICE, E_WARNING, E_ERROR
	var $sType  = 0;   // Message type:        '', sql, ... 
	var $iDest  = 1;   // Zprava urcena:  1 - uivateli; 2 - vıvojáøi; 
	var $sMess  = '';  // Error message 
	var $sMess2 = '';  // Complementary string (like SQL query and such)
	
	/* private */ function cMessage($iLevel, $sType, $sMess, $sMess2, $iDest=1){
	//echo "cMessage::cMessage()";///
		$this->iLevel = $iLevel;   // Message level 
		$this->sType  = $sType;    // Message type  
		$this->iDest  = 1;         // Message destination
		$this->sMess  = $sMess;    // Error message 
		$this->sMess2 = $sMess2;   // Complementary string (like SQL query and such)
	}
	/* public */ function CreateMessageError($sError, $iLevel=E_ERROR, $sType='', $sTxt=null){
		return new cMessage($iLevel, $sType, $sError, $sTxt);
	}
	/* public */ function CreateMessageSqlError($sError, $sSql, $iLevel=E_ERROR, $iErrno=0){
		return new cMessage($iLevel, 'sql', $sError, $sSql, 2);
	}
	
	
	/** cMessage::Dump() - vytvoøí ze zprávy text; formát je v parametru */
	function Dump($sFormat='html'){
		$sLevel = '';
		switch($this->iLevel){
			default: case 0: $sLevel = '';   break;
			case E_NOTICE:   $sLevel = 'not'; break;
			case E_WARNING:  $sLevel = 'war'; break;
			case E_ERROR:    $sLevel = 'err'; break;
		}
		$sClass = 'mess '.$sLevel.' '.$this->sType;

		$s = '';     // $sError = sql_error(mysql_error(), $sql);
		switch($this->sType){
			default:
				switch($sFormat){
					case 'html':
						$sDet = strlen($this->sMess) ? '<span class="det">'.hs($this->sMess2).'</span>' : '';
						$s = '<span class="'.$sClass.'"><span class="txt">'.hs($this->sMess).'</span>'.$sDet.'</span>';
						break;
					case 'txt': default:
						$s = $this->sMess.' ['.$this->sMess2.']';
						break;
				} // switch($sFormat)
			break;
		} // switch($this->sType)

		return $s;
	} //cMessage::Dump()
	
} // class cMessage{}



class cMessageErrorSql extends cMessage {
	var $iErrno;
	function cMessageErrorSql($spoj, $sSql, $iLevel=E_ERROR){
	  //return new cMessage($iLevel, 'sql', $sError, $sSql);
		//mysql_error($spoj), $sql, E_ERROR, mysql_errno($spoj)
		$iErrno = mysql_error($spoj);
		parent::cMessage($iLevel, 'sql', mysql_error($spoj), $sSql);
	}
}

//$x = new cMessageErrorSql(mysql_connect('localhost','root','viewsonic'), "SELECT 1");
//print_r($x);


					 
		





/*******************************************************************************
 *  cMessageStore - container for messages                                      
 ******************************************************************************/
class cMessagesStore{
	var $aoMessages;                             // Pole zpráv 
	var $iIterationFilter = 0;                   // Jaké zprávy se budou iterovat: 1 - zprávy pro uivatele, 2 - devel
	
	function cMessagesStore(){
		$this->aoMessages = Array();                             
		$this->iIterationFilter = $GLOBALS['_DEBUG'] ? 1|2 : 1;
	}
	
	// --- Manipulace se zpravami --- //
	function GetCount(){ return Count($this->aoMessages); }
	function Reset(){ Reset($this->aoMessages); $this->SetIterationFilter(0); }
	function Clear(){ $this->aoMessages = Array(); }
	
	function &GetLast(){ return $this->aoMessages[Count($this->aoMessages)-1]; }
	function &Next1(){
		//if(current($this->aoMessages)) == FALSE) return null;
		if(key($this->aoMessages) === null){ $foo = null; return $bar =& $foo; }
		$poMessage =& $this->aoMessages[key($this->aoMessages)];
		next($this->aoMessages);
		return $poMessage;
	}
	function &Next(){
		if(key($this->aoMessages) === null){ $foo = null; return $bar =& $foo; }
		$iIterationFilter = $this->GetIterationFilter();
		do{
			//echo " K". key($this->aoMessages);
			$poMessage =& $this->aoMessages[key($this->aoMessages)];
			next($this->aoMessages);
		}while(null != key($this->aoMessages) && $poMessage && !($poMessage->iDest & $iIterationFilter));
		return $poMessage;
	}
	
	function Add($iLevel, $sType, $sMess, $sMess2='', $iDest=1){ $this->aoMessages[] = new cMessage($iLevel, $sType, $sMess, $sMess2, $iDest); }
	function AddError($sType, $sMess, $sMess2=''){ $this->aoMessages[] = new cMessage(E_ERROR, $sType, $sMess, $sMess2); }
	function AddWarning($sType, $sMess, $sMess2=''){ $this->aoMessages[] = new cMessage(E_WARNING, $sType, $sMess, $sMess2); }
	function AddNotice($sType, $sMess, $sMess2=''){ $this->aoMessages[] = new cMessage(E_NOTICE, $sType, $sMess, $sMess2); }
	function AddDebugNotice($sType, $sMess, $sMess2=''){ $this->aoMessages[] = new cMessage(E_NOTICE, $sType, $sMess, $sMess2, 2); }
	function AddDebugWarning($sType, $sMess, $sMess2=''){ $this->aoMessages[] = new cMessage(E_WARNING, $sType, $sMess, $sMess2, 2); }
	function AddDebugError($sType, $sMess, $sMess2=''){ $this->aoMessages[] = new cMessage(E_ERROR, $sType, $sMess, $sMess2, 2); }
	
	function AddErrorSql_1($sql, $spoj){
		$sError = mysql_error($spoj);
		$iErrno = 0;
		if('NULL' == gettype($sError)){
			$sError = "Nepodaøilo se získat popis chyby - neplatné resource [$spoj]";
		}else $iErrno = mysql_errno($spoj);
		$this->aoMessages[] =  cMessage::CreateMessageSqlError($sError, $sql, E_ERROR, $iErrno);
	}
	
	function AddErrorSql($sError, $sSql=null, $iErrNo=null){
		$this->aoMessages[] =  cMessage::CreateMessageSqlError($sError, $sSql, E_ERROR, $iErrNo);
	}

	
	
	// --- Manipulace s objektem --- //
	function GetIterationFilter(){ return $this->iIterationFilter; }
	function SetIterationFilter($i){ $iTmp = $this->iIterationFilter; $this->iIterationFilter = $i; return $iTmp; }
	
	
	/**  SendHiddenMessagesByMail() - pošle debug zprávy mailem (SQL errory atd.) */
	function SendMessagesByMail($sMail, $sSubject, $iFilterDest=null, $iFilterLevel=E_ERROR){
		// Defaultne vypisovat zpravy nevypsane uzivateli, a jen errory 
		if($iFilterDest === null) $iFilterDest = ~ $this->iIterationFilter;

		$asMessageTexts = Array();
		// $iIterationFilter = $this->GetIterationFilter();
		do{
			$poMessage =& $this->aoMessages[key($this->aoMessages)];
			next($this->aoMessages);
			
			if(!$poMessage) break;
			// If the message is not hidden, skip 
			if(!($poMessage->iDest  & $iFilterDest))  continue;
			if(!($poMessage->iLevel & $iFilterLevel)) continue;
			
			$asMessageTexts[] = $poMessage->Dump('txt');
		}while($poMessage);
		
		$sAllMessages = '';
		/*foreach($asMessageTexts as $sMessageText){
			$sAllMessages .= $sMessageText;
		}*/
		$sAllMessages = implode("\n\n".str_pad('',50,'=')."\n\n", $asMessageTexts);		
		
		
		$sSubject = strreplace('%date', date('j.n.Y H:i:s'), $sSubject);
		$sSubject = strreplace('%addr', $_SERVER['REMOTE_ADDR'], $sSubject);
		$sSubject = strreplace('%host', $_SERVER['REMOTE_HOST'], $sSubject);
		if(FALSE !== strpos($sSubject, '%dns')) // Jen pokud DNS chce, at to nedelame zbytecne
			$sSubject = strreplace('%dns', gethostbyaddr($_SERVER['REMOTE_HOST']), $sSubject);
		
		$bSucc = @mail($sMail, $sSubject, $sAllMessages);
	}
	
	
}// class cMessagesStore{}




/* Usage: ?><?
// Store for messages 
$aoMess = Array();

// Adding a message to store 
$aoMess[] = cMessage::CreateMessageSqlError(mysql_error($spoj), $sql, E_ERROR, mysql_errno($spoj));?>

<div class="messages">
<?while($oMessage =& $oMess->Next()){
		echo $oMessage->Dump();
}?>
</div>
<?/**/

?>
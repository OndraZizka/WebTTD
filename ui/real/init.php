<?php



// --- INIT & SESSION --- //
	error_reporting($_DEBUG ? E_ALL : 0);
	ini_set('session.gc_maxlifetime', 36000);
	session_start(); 
	if($bSessionJustStarted = !isset($_SESSION['xcom::bSessionStarted'])){
		$_SESSION['xcom::bSessionStarted'] = TRUE;
	}



// --- Prichozi data --- //   CreateInputArray z inc.php4 
	$_INPUT = CreateInputArray(
		Array(), // Default values 
		Array(
			'x i', 'y i'
	));
	



// Komunikace se zobrazovaci casti 
	require_once $g_DirLib.'lib.cMessage.php4';
	$oMess = new cMessagesStore();   // Store for messages 
	$_AKCE  = Array();               // Store for action -> show data  
	//$oMess->AddNotice('test', "Test notice"); ///


	

// --- Databaze --- //
	require_once($g_DirLib.'lib.cDBAccess.php4');
	require_once($g_DirLib.'lib.cDBAccess_MySQL.php4');
	$oMySQLConn = new cDBAccess_MySQL($g_dbhost, $g_dbuser, $g_dbpass);
	$oMySQLConn->SetSelectMode(CDBA_SELECT_RETURNS_CRESULT_ON_ERROR);
	$oMySQLConn->Connect();
	
	if(!$oMySQLConn->IsConnected()){
		//$oMess->AddError('sql', "Nepodaøilo se pøipojit k databázi [$g_dbuser:".($g_dbpass?'***':'')."@$g_dbhost].");	
		$oMess->AddError('sql', $oMySQLConn->GetLastErrorString());
	}else{
		$oMySQLConn->SetConnectionCharset('cp1250');  // cp1250_general_ci 
		$oMySQLConn->UseDatabase($g_dbname);
	}
	$oDB =& $oMySQLConn;




?>
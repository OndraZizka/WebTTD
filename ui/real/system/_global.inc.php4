<?php $GLOBAL_INC_INCLUDED = 1;
/* Tenhle soubor ma byt jediny v adresarove strukture. Je v nem to, co je specificke pouze pro tenhle server. 
   Includuje se to pokud mozno vzdy z mistniho _local.inc.php4 .
*/

// Spolecne polozky na ruznych serverech - casto jmena tabulek, viz nize //
if(file_exists($g_DirSys.'_global_common.inc.php4')) include $g_DirSys.'_global_common.inc.php4';


$_DEBUG = 1;

// Korenovy adresar a includy //
	// SYSTEMOVA absolutni cesta k includum. Pouziva se v includech php. 
	// Relativni cesty se vztahuji k vykonavanemu skriptu.
	$g_Dir = 'd:/web/x-com/real/';
	// Relativni cesta k includum, napr. na .css. Zobrazuje se v URL v HTML.
	$g_Url = '';
	
// MySQL //
	$g_dbname = 'xcom';
	$g_dbuser = 'xcom';
	$g_dbpass = 'xcom';
	$g_dbhost = 'localhost:3350';
	
// Tabulky - pouze ty se jmeny lisicimi se server od serveru //
	//$gt_ = '';
	

// Options //

	
/* Tridy a ostatni std includy */
if(!@$BASIC_INC_INCLUDED) include $g_DirLib.'inc.php4';

?>
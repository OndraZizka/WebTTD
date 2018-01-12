<?php $global_inc = 1;
/* Tenhle soubor ma byt jediny v adresarove strukture. Je v nem to, co je specificke pouze pro tenhle server. 
   Kdyby se to, nedejboze, zas nekam stehovalo, nebudu uz muset vsechno prepisovat znova. Jen tady.           
	 Includuje se to pokud mozno vzdy z mistniho _local.inc.php4 .                                            */

// Spolecne polozky na ruznych serverech - casto jmena tabulek, viz nize //
if(file_exists($g_DirSys.'_global_common.inc.php4')) include $g_DirSys.'_global_common.inc.php4';


$_DEBUG = 1;

// Korenovy adresar a includy //
	// SYSTEMOVA absolutni cesta k includum. Pouziva se v includech php. 
	// Relativni cesty se vztahuji k vykonavanemu skriptu.
	$g_Dir = 'c:/web/bejbycentrum.cz/real/';
	// Relativni cesta k includum, napr. na .css. Zobrazuje se v URL v HTML.
	$g_Url = '';
	
// MySQL //
	$g_dbname = 'bejbycentrumcz';
	$g_dbuser = 'bejbycentrumcz';
	$g_dbpass = 'bejbycentrumcz';
	$g_dbhost = 'localhost:3341';
	
// Tabulky - pouze ty se jmeny lisicimi se server od serveru //
	//$gt_ = '';
	

// Options //
	$opt_sDataPath  = 'C:\\web\\bejbycentrum.cz\\data\\';
	$opt_sFotkyPath = 'C:\\web\\bejbycentrum.cz\\fotky\\';
	
	$opt_sOrdersEmail = 'ondra@dynawest.cz';

	
/* Tridy a ostatni std includy */
if(!@$myemail) include $g_DirLib.'inc.php4';

?>
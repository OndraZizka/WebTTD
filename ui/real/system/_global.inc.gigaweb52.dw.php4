<?php $global_inc = 1;
/* Tenhle soubor ma byt jediny v adresarove strukture. Je v nem to, co je specificke pouze pro tenhle server. 
   Kdyby se to, nedejboze, zas nekam stehovalo, nebudu uz muset vsechno prepisovat znova. Jen tady.           
	 Includuje se to pokud mozno vzdy z mistniho local.inc.php4 .                                             */
	 
// Spolecne polozky na ruznych serverech - casto jmena tabulek, viz nize //
if(file_exists($g_DirSys.'_global_common.inc.php4')) include $g_DirSys.'_global_common.inc.php4';
	

$_DEBUG = 0;

// Korenovy adresar a includy //
	// SYSTEMOVA absolutni cesta k includum. Pouziva se v includech php. 
	// Relativni cesty se vztahuji k vykonavanemu skriptu.
	$g_Dir = '/httpd/bejbycentrumcz/';
	// Relativni cesta k includum, napr. na .css. Zobrazuje se v URL v HTML.
	$g_Url = '';

// MySQL //
	$g_dbname = 'dynawestcz';
	$g_dbuser = 'dynawestcz';
	$g_dbpass = 'oor53np7rj';
	$g_dbhost = 'mysql3.gigaweb.cz';
	
// Tabulky - pouze ty se jmeny lisicimi se server od serveru //
	//$gt_ = '';


// Options //
	$opt_sFotkyPath = 'fotky/';

	$opt_sOrdersEmail = 'objednavky@bejbycentrum.cz, ondra@dynawest.cz';

/* Tridy a ostatni std includy */
if(!@$myemail) include $g_DirLib.'inc.php4';

?>
<?php
$verze = '1.0.0'; // hlavni engine.nekompatibility.drobne upravy

// Mistni promenne, potrebne pro cely adresar 
	$g_title = 'BejbyCentrum - prodejna dмtskэch potшeb';
	$g_title_short = 'BejbyCentrum';
	
	$g_www = 'www.bejbycentrum.cz';
	$g_mail = 'bejbycentrum@bejbycentrum.cz';
	$g_keywords = 'koибrky';
	$g_description = 'prodejna dмtskэch potшeb';
	
	$g_author_mail = 'ondra@dynawest.cz';
	//$g_pass_admin = 'c9cd6dc0000d42864216d7e8bcf500dd'; // md5'd 



// Options //
	$opt_sDefaultSearchString = 'Vyhledat';
	//$opt_AdminPasswordMD5 = 'd41d736cb307a6fcbfa58b8ac409aa49'; // md5'd 
	//$opt_AdminPasswordMD5 = '66c72ac50b64556c301babe2107a70b0'; // md5'd 
	//$opt_AdminPasswordMD5 = 'accabc943d21c07d69b3ed2ed92cf331'; // md5'd 
	$opt_AdminPasswordMD5 = '0b4103bc85a0fc9337f230c4fe4c08b0'; // md5'd 
	
	$opt_FotkyTilesMaxWid = 260;
	$opt_FotkyTilesMaxHei = 300;


// $g_Dir - mela by bejt absolutni SYSTEMOVA cesta k includum. Pouziva se v includech php. 
	$g_Dir           = '';
	$g_DirCode       = $g_Dir.'code/';
	$g_DirLib        = $g_Dir.'lib/';
	$g_DirSys        = $g_Dir.'system/';
	$g_DirPre        = $g_Dir.'pre/';
	$g_DirFotky      = $g_Dir.'fotky/';
	$g_DirBarvy      = $g_Dir.'fotky_barvy/';

// $g_Url - relativni cesta k includum, napr. na .css. Zobrazuje se v URL v HTML           
	$g_Url           = '';
	$g_UrlImg        = $g_Dir.'img/';
	$g_UrlLib        = $g_Dir.'lib/';
	$g_UrlFotky      = $g_Dir.'fotky/';
	$g_UrlBarvy      = $g_Dir.'fotky_barvy/';


if(!@$GLOBAL_INC_INCLUDED) include $g_Dir.'system/_global.inc.php4';
?>
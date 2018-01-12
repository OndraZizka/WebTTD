<?php // inc.php3 verze 8.7 
// 8.1 - FormatNumber() prejmenovano na FormatPrice()
// 8.2 - mtime(): puvodne return (int)$mtime+(int)$time;
// 8.3 - upravena sql_error
// 8.4 - pridana fce date_cz2sql()   (a pak zakomentovana - staci DeformatDate)
// 8.5 - pridana fce Shuffle2DimArray()
// 8.6 - upravena fce Shuffle2DimArray() - p¯id·na moûnost pracovat s indexem 
// 8.7 - upravena fce asq() - moûno zvolit znak uvozovek, defaultnÏ "'" 

//error_reporting(1+2+4+16+32);
define('INCLUDED_inc.php3', true);
$myemail='ondra&#x40;dynawest.cz'; $myemailwww='ondra%40dynawest.cz?on@dra.cz'; 
$mywww='ondra.zizka.cz'; $myicq=56933321;

//* File fce *//
function curfile(){
	if(isset($_SERVER) && is_array($_SERVER) && isset($_SERVER['PHP_SELF']) )
		return basename($_SERVER['PHP_SELF']); // Not in PHP3 
	else return basename($GLOBALS['PHP_SELF']);
} $g_curfile = curfile();
function toEOF($fp, $delka=1024){ while(!feof($fp)){$ret.= fgets($fp, $delka);} return $ret; }

//* Date time fce *//

//function FormatDate($d){$a=explode('-',$d); return checkdate($a[1],$a[2],$a[0]) ? $a[2].'.'.$a[1].'.'.$a[0] : '';}
function FormatDate($d){$a=explode('-',$d); return checkdate((int)$a[1],(int)$a[2],(int)$a[0]) ? czdate2(mktime(0,0,0,$a[1],$a[2],$a[0])) : '';}
function DeformatDate($d){$a=explode('.',$d); return checkdate((int)$a[1],(int)$a[0],(int)$a[2]) ? $a[2].'.'.$a[1].'.'.$a[0] : '';}

// Asi zbytecny - dela min nez DeformatDate
/*function date_cz2sql($s){
		$kdy = explode('.', $s);
		$kdy = array_reverse($kdy);
		return implode('-', $kdy);
}*/

$mesice = Array(
Array(1=>'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'),
Array(1=>'January','February','March','April','May','June','July','August','September','October','November','December'),
Array(1=>'ledna','˙nora','b¯ezna','dubna','kvÏtna','Ëervna','Ëervence','srpna','z·¯Ì','¯Ìjna','listopadu','prosince'),
Array(1=>'Led','⁄no','B¯e','Dub','KvÏ','»en','»ec','Srp','Z·¯','ÿÌj','Lis','Pro'),
Array('Jan'=>1,'Feb'=>2,'Mar'=>3,'Apr'=>4,'May'=>5,'Jun'=>6,'Jul'=>7,'Aug'=>8,'Sep'=>9,'Oct'=>10,'Nov'=>11,'Dec'=>12));
$dny = Array(
Array(1=>'Mon','Tue','Wed','Thu','Fri','Sat','Sun'),
Array(1=>'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'),
Array(1=>'Po', '⁄t', 'St', '»t', 'P·', 'So', 'Ne'),
Array(1=>'PondÏlÌ', '⁄ter˝', 'St¯eda', '»tvrtek', 'P·tek', 'Sobota', 'NedÏle'),
Array(1=>'PondÏlÌ', '⁄ter˝', 'St¯edy', '»tvrtka', 'P·tku', 'Soboty', 'NedÏle'));
$mes2num = Array('Jan'=>1,'Feb'=>2,'Mar'=>3,'Apr'=>4,'May'=>5,'Jun'=>6,'Jul'=>7,'Aug'=>8,'Sep'=>9,'Oct'=>10,'Nov'=>11,'Dec'=>12);
function mtime(){list($mtime, $time) = explode(' ', microtime()); return (double)$time+(double)$mtime;}
function cztime($str){
$str = ereg_replace( ' years', ' let', $str);
$str = ereg_replace( ' hr', 'h', $str);
$str = ereg_replace( ' min', 'm', $str);
$str = ereg_replace( ' sec', 's', $str); return $str;}
//function cztimef($str){cztime($str); return $str;}// old, jen kvuli kompatibilite 
function d($den){return ($den)?$den:7;}
function nextdate($y,$m,$d){
  $nd = getdate(mktime(0,0,0,$m,$d,$y)+86400);
  return Array($nd['year'],$nd['mon'],$nd['mday']);
}
function czdate($t=-1){ return date('j.n.Y', $t == -1 ? time() : $t); }
function czdate2($t=-1){ return date('d.m.Y', $t == -1 ? time() : $t); }
function czdatetime($t=-1){ return date('d.m.Y H:i:s', $t == -1 ? time() : $t); }
function sqldatetime($t=-1){ return date('Y-m-d H:i:s', $t == -1 ? time() : $t); }


function loadgr(){if(!function_exists('ImageGIF')) dl('php3_gd_old.dll');}
function nocache(){header('Pragma: no-cache');header('Cache-Control: no-cache');header('Expires: '.GMDate('D, d M Y H:i:s').' GMT');}

//* Numbers fce *//
//function hex($f){ return sprintf('%0x%04x', $f/0x10000, $f-floor($f/0x10000)*0x10000); }
function hex8($f){ return sprintf('%04X%04X', $f/0x10000, $f-floor($f/0x10000)*0x10000); }
function zao($val, $mist=2){  return round($val*pow(10,$mist))/pow(10,$mist);} // zaokrouhli
//function FormatNumber($n) { $t=""; $i=$j=0; $numdelim=" "; $s=(string)round($n);
//  for ($i = strlen($s) - 1; $i >= 0; $i--) {$t.=$s[$i]; if($i && !(++$j%3)) $t.=$numdelim;}return strrev($t).$n;}
function FormatPrice($n){ return number_format($n, 2, ',', ' '); }
function FormatNumber($n){ return number_format($n, 0, ',', ' '); }
function DeformatNumber($s){ return (double)strtr(str_replace(' ','',(string)$s), ',', '.');}
function isint($c){return ('0'<=$c && $c<='9');}
function intonly($x){for($i=0; $i<strlen($x); $i++){$c=$x[$i]; $ret.= (('0'<=$c && $c<='9')?$c:'');} return $ret;}
function nulls($x,$n=2){$str=""; for($i=0;$i<$n-strlen($x);$i++){$str.="0";}$str.=$x; return (string)$str;}//bylo 2
//function cena($val){  if(indexOf($val,".")>-1)return $val."0"; else return $val.".00";}
function decs($x,$n=2){$rad = pow(10,$n);	$za = (string)(($x* $rad) % $rad);for($i=0;$i<$n-strlen($za);$i++){$za.="0";} return (floor($x).','.$za);}
//* IP fce *//
function ip2int($ip){ $ipp=explode('.', $ip); return (($ipp[0]<<24)+($ipp[1]<<16)+($ipp[2]<<8)+$ipp[3]);}
function int2ip($x){return implode('.', Array( ($x>>24), ($x>>16)&255,  ($x>>8)&255, $x&255));}
	
//* String fce *//

function strpos2(&$s,&$c,$off=0){
	return strpos(' '.$s, $c, $off) - 1;
}

// Rozdeli text podle entru a vraci pole radek 
function SplitByEnters($s){
	$s = str_replace("\r", "", $s);
	$asRadky = explode("\n", $s);
	return $asRadky;
}

// Obfuscate e-mail //
function ObfsMailHref($s){ return str_replace('@','%40',$s); }
function ObfsMailText($s){ return str_replace('@','<span ondblclick="\'go@away.com\';">&#64;</span>',$s); }
function MailFromHeader($sStr, $sMail, $sCP='windows-1250', $sEnc='Q'){
	if($sEnc == 'Q' && function_exists('imap_8bit')) return "=?$sCP?Q?".imap_8bit($sStr)."?= <$sMail>";
	else return "=?$sCP?B?".base64_encode($sStr)."?= <$sMail>";
}

//Sklonuj($a['polozek'],'poloûka','poloûky','poloûek');
function Sklonuj($n, $s1,$s2az4, $s0nebo5avic){
	if($n==1) return $s1;
	elseif($n==0||$n>=5) return $s0nebo5avic;
	else return $s2az4;
}
function hs($s){return htmlspecialchars($s);}
$g_sCzChars = Array('·ËÔÈÏÌÚÛ¯öù˙˘˝û', '¡»œ…ÃÕ“”ÿäç⁄Ÿ›é');
function strtoupper_cz($str){ global $g_sCzChars; return strtoupper(strtr($str, $g_sCzChars[0], $g_sCzChars[1])); }
$nl="<br>\r\n"; $nl2="<br/>\r\n"; $nlx="\r\n"; define('NL',"<br>\r\n"); define('NLX',"\r\n");
function spaces ($x, $n=5){$str=""; for($i=0; $i<$n-strlen($x); $i++){$str.=' ';}$x.=$str; return (string)$x;}
function spacesl($x, $n=5){$str=""; for($i=0; $i<$n-strlen($x); $i++){$str.=' ';}$x=$str.$x; return (string)$x;}
function fecho($val){echo $val; return $val;}
function fechon($val){echo $val."<br>\r\n"; return $val;}
if(!empty($GLOBALS['_DEBUG'])){ function decho($val){if(@$GLOBALS['_DEBUG'])echo $val; return $val;} }
else{ function decho($val){ return $val; } }

//function indexOf($str, $s){$ret=""; $ret = StrPos($str, $s);
  //if($ret > 0) return $ret;  else{ if (SubStr($str, 0, StrLen($s)) == $s) return 0; else return -1;}}
function indexOf($str, $s){return strpos(' '.$str, $s)-1;}
function subs($str, $st, $en){
  if($en==-1){return Substr($str, $st);}
  else{return Substr($str, $st, $en - $st);} }
function strend($str, $en){return Substr($str, strlen($str)-$en);}
function nl2br2($text){
	$text= str_replace("\n\r", '<br/>', $text);
  $text= str_replace("\r\n", '<br/>', $text);
	$text= str_replace("\n", '<br/>', $text);
	$text= str_replace("\r", '<br/>', $text);
	return $text;}
function nl2nic($text){$text = str_replace("\n", '', $text); return $text = str_replace("\r", '', $text);}
function checkmail($estr){$oel=error_reporting(1+2+4+16+32); // jinak by to blilo \. apod.
  return (error_reporting($oel) && !empty($estr) && EregI("^[^@]+@[^.]{2,}\\..{2,}", $estr));}
//* Variables fce *//
function def( &$v, $val)	{if(empty($v))   $v=$val;}
function fed( &$v, $val)	{if(!empty($val))$v=$val;} // kdyz neni nova hodnota prazdna
function swap( &$a, &$b ){ $t = $b; $b = $a; $a = $t; }
//function con($val)         {if(!empty($val)){return $val;}else return "";} // kdyz neni nova hodnota prazdna
function urlSet($valname, $val){return (!empty($val)) ? $valname."=".urlencode($val) : "";} // '' prazdna
function ue(&$str){return urlencode($str);}
function JSString($s,$w=0){ return '"'.str_replace("\n", $w?"\\n\"\n+\"":'\\n', addslashes(str_replace("\r\n", "\n", $s))).'"'; }


//* Array fce *//
function amax($arr){ $curmax=$maxkey=0;
  while (list($xkey, $val) = each($arr)){ if($curmax<$val) {$curmax=$val; $maxkey=$xkey;} }
  return $maxkey;}
function vypis($a){Reset($a);
  while(Current($a)){echo 'Index: '.Key($a).' Hodnota: '.HTMLspecialChars(Current($a))."<br/>\n"; Next($a);}}
function adr2vars($arr, $pref='', $suff=''){
	$adrp=Array('scheme', 'host', 'port', 'user', 'pass', 'path', 'query', 'fragment');
	for($i=0; $i<8; $i++){
		$varnames[$i]=$pref.$adrp[$i].$suff;
		global $$varnames[$i];
		$$varnames[$i] = $arr[$adrp[$i]];
	}
}
function arr2vars($arr, $pref='', $suff=''){
  while (list($xkey, $val) = each($arr)){
	//global ${$pref.$xkey.$suff};
	//echo "global \$$pref$xkey$suff;";
	eval("global \$$pref$xkey$suff;");	
	${$pref.$xkey.$suff} = $val;  }
}
function arr2vars2($arr, $pref='', $suff=''){
  while (list($xkey, $val) = each($arr))	$GLOBALS["$pref$xkey$suff"] = $val;}


// Vytv·¯Ì z 2D pole novÈ surjektivnÌ, podle zadanÈ surjekce:
// 0=0 1=3 2=1 atd.
function Shuffle2DimArray($aa, $aaiIndexes){
	// $aaiIndexes je ¯etÏzec ve form·tu  0=0 1=3 
	if('string' == gettype($aaiIndexes)){
		$asaiIndexDoubles = explode(' ', $aaiIndexes);
		$aaiIndexes = Array();
		foreach($asaiIndexDoubles as $asaiIndexDouble){
			$asiIndexDouble = explode('=', $asaiIndexDouble);
			if($asiIndexDouble[0] == 'i') $asiIndexDouble[0] = -1; // Premenime index 'i' na -1 
			if($asiIndexDouble[1] == 'i') $asiIndexDouble[1] = -1; //    - jen kvuli tomu (int) o radku dolejc.
			$aaiIndexes[] = Array((int)$asiIndexDouble[0], (int)$asiIndexDouble[1]);
		}
	}
	
	// Projedeme pole polÌ a vytvo¯Ìme novÈ surjektivnÌ 
	$aa2 = Array();
	foreach($aa as $i => $a){
		$xIndexToWriteAt = $i;  // Defaultne zapisujeme do noveho pole na stejny index, jako byl ve starem. 
		
		$aNew = Array(); 
		foreach($aaiIndexes as $aiIndex){
			if($aiIndex[1] == -1) $val = $i;                   // Hodnotou ma byt index, na kterem je dane pole (3=i)
			else                  $val = $aa[$i][$aiIndex[1]]; // Hodnotou ma byt hodnota na danem indexu 
			
			if($aiIndex[0] == -1) $xIndexToWriteAt = $aa[$i][$aiIndex[1]]; // Mame v novem poli zapisovat na index dan˝ hodnotou tohoto prvku (i=3). 
			else                  $aNew[$aiIndex[0]] =  $val;  // Norm·lnÏ zapÌöem, kam m·me 
		}
		$aa2[$xIndexToWriteAt] = $aNew;
	}
	return $aa2;
}
//print_r( Shuffle2DimArray($aKategorie, Array(Array(0,0), Array(1,2)) ) );
//print_r( Shuffle2DimArray($aKategorie, '0=0 1=2') );


// //






// SQL fce //

// GetMysqlConn() - vraci spojeni nebo pole s chybou //
function GetMysqlConn($sDBhost, $sDBuser, $sDBpass, $sDBname){
	$conn = @mysql_pconnect($sDBhost, $sDBuser, $sDBpass);
	if(!$conn){ return Array(@mysql_errno(), @mysql_error()); }
	elseif($sDBname && !@mysql_select_db($sDBname)){
		$aError = Array(@mysql_errno(), @mysql_error($conn));
		mysql_close($conn); return $aError;
	}else return $conn;
}

// sql_error - vraci naformatovany sql error //
function sql_error($err=0, $sql=-1, $f='_DEF_', $force=false){
	if($err === 0) $err = mysql_error();
	global $_DEBUG;
	if(!$_DEBUG && !$force ) return '[MySQL error]';
	elseif($f=='_DEF_'){ $f = '<div class="mysql_error"><b>MySQL error:</b> <i>%s</i>'.($sql!==-1?'<br/><b>SQL:</b> %s':'')."</div>\n"; $sql = htmlentities($sql); }
	elseif($f=='_PBB_'){ $f = '[block.mysql_error][b]MySQL error:[/b] %s'.($sql!==-1?'[br/][b]SQL:[/b] [span.sql]%s[/span]':'')."[/block]\n"; $sql = str_replace('[', '[[', $sql); }
	elseif($f=='_TXT_'){ $f = 'MySQL error: %s'.($sql==-1?'  [SQL: %s]':'')."\n"; }
	return sprintf($f, $err, $sql);
}

// Z 'a b' udela "a='{$_POST['a']}', b='{$_POST['b']}'"
function PostVarsToSQL($saKeys){
	$sSqlPart = '';
	$asKeys = explode(' ', $saKeys);
	while(list(,$sKey)=each($asKeys)){
		$sSqlPart.= ", $sKey='".addslashes($_POST[$sKey])."'";
	} $sSqlPart = substr($sSqlPart, 1);
	return $sSqlPart;
}

// Prevede pole do SQL hodnot: {x:'1', y:'2'} => "x='1',y='2' 
function ArrayToSQL($asVars){
	$sSqlPart = '';
	while(list($sKey,$sVar)=each($asVars)){
		$sSqlPart.= ", $sKey='".addslashes($sVar)."'";
	} $sSqlPart = substr($sSqlPart, 1);
	return $sSqlPart;
} // $asUdaje[$sVar] = $_POST[$sVar];

// SQL -> result -> Array 
function SqlToArray($conn, $sql, $iType){
	if(!$res = @mysql_query($sql, $conn)) return sql_error(0, $sql);
	$aa = Array();
	while($a = @mysql_fetch_array($res, $iType))
		$aa[] = $a;
	@mysql_free_result($res); return $aa;
}


/*function sqlSet($valname, $val){ return (!empty($val)) ? $valname."=".$val : "";} // kdyz neni nastavovana hodnota prazdna
function NULLit($val)          { return (!empty($val)) ? "'".$val."'" : "NULL";}  // prazdna hodnota -> NULL
function sqlerr(){if(mysql_errno()!=0) echo "MySQL chyba ".mysql_errno().": ".mysql_error()."<BR>";}

//$Name = mysql_one_data("SELECT name FROM table WHERE id=2"); */
// mysql_one_data - momentalne vraci pri chybe Array('popis chyby', -1 pri chybe | 0 pri prazdnu //
function mysql_one_data($query) {
	if(!$rs=@mysql_query($query)) return Array(@mysql_error(),-1);
	if(0 == @mysql_num_rows($rs)){ @mysql_free_result($rs); return Array('No rows.',0); }
	$r=@mysql_fetch_row($rs); $query=$rs; @mysql_free_result($rs); return($r[0]);
}
//$user = mysql_one_array("SELECT name,address,passw FROM table WHERE id=2");
//You have now $user[name], $user[address], and $user[passw] variables.
function mysql_one_array($query) {$a=mysql_fetch_array($rs=mysql_query($query)); mysql_free_result($rs); return $a;}
// bezpecnost SQL:
function secureint(&$id){
	if(isset($id) && (!is_int($id)) && ((string)(int)$id != $id) ){ $id=0; unset($id); } }
function asq($s,$c='\''){ return $c.addslashes($s).$c; }
function securestr($s){ return '\''.addslashes($s).'\''; }
/**/




// Sends debug info via mail //
function MailDebugInfo($s, $sMailto='', $sPrivateMsg=''){
	if($GLOBALS['_DEBUG']) return;

	$aArrays = Array('SERVER','REQUEST','GET','POST','ENV');
	$sConditions = '';
	while(list(,$sArray)=each($aArrays)){
		$sConditions .= $sArray.":\n";
		//echo '_'.$sArray .' = '. $GLOBALS['_'.$sArray]."\n"; ///
		if(is_array( $GLOBALS['_'.$sArray] ))
		while(list($key,$val)=each($GLOBALS['_'.$sArray])){ $sConditions .= $sArray."::$key = $val\n"; }
		$sConditions .= "\n";
	}
	
	if(!$sMailto) $sMailto = 'chyby@dynawest.cz';
	$bSucc = @mail($sMailto, 'WL - Chyba! ('.date('j.n.Y H:i:s').')',
	   date('j.n.Y H:i:s')." - ve skriptu search.php se vyskytla tato chyba:\n"
	   .$s
		 .($sPrivateMsg ? "\n\nPrivate Msg:\n$sPrivateMsg" : '')
		 ."\n\nParametry skriptu:\n".$_SERVER['REQUEST_URI']."\n\nPodmÌnky skriptu:\n".$sConditions, 'From: nut@tutu.tw'); 
	/*/	echo $sConditions;/// /**/
	return $bSucc;
}

?>
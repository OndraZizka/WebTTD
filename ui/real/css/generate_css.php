<?php

ob_start();
$a = file('img/ttd_web/buildings/images_list.txt');
foreach( $a as $name ){
	$sFileName = trim( $name );
	$sImageName = substr($sFileName, 0, strrpos($sFileName,'.'));
	printf("#map .field.building.%-20s .img_holder { background-image: URL(img/ttd_web/buildings/%s.png); }\n", $sFileName, $sFileName);
}
file_put_contents( 'buildings.css', ob_get_clean() );


ob_start();
$a = file('img/ttd_web/road/images_list.txt');
foreach( $a as $name ){
	$sFileName = trim( $name );
	$sImageName = substr($sFileName, 0, strrpos($sFileName,'.'));
	printf("#map .field.road.%-20s .img_holder { background-image: URL(img/ttd_web/road/%s.png); }\n", $sImageName, $sImageName);
}
file_put_contents( 'road.css', ob_get_clean() );




/**
 Vygeneruje CSS pro animaci pole.
 Element body by m�l periodicky se m�n�c� t��du .cycle_M,
 bunky farem by m�ly st�lou t��du .offset_N,
 kde M a N jsou ��sla od 00 do 89.
*/

ob_start();
for( $iCycle = 0; $iCycle < 90; $iCycle++ ){
	for( $iOffset = 0; $iOffset < 90; $iOffset++ ){
		
		$iFarmPhase = ($iCycle + 90 - $iOffset) % 90 / 10;
		printf("body.farm_cycle_%02d #map .field.farm.offset_%02d .img_holder { background-image: URL('img/ground/farm%d.png'); }\n",
			$iCycle, $iOffset, $iFarmPhase+1 );
	}
}
file_put_contents( 'farm_animation.css', ob_get_clean() );

?>
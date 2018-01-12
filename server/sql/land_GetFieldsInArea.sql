DELIMITER $$

DROP PROCEDURE IF EXISTS `xcom`.`land_GetFieldsInArea` $$
CREATE PROCEDURE `xcom`.`land_GetFieldsInArea` ( iLeft INTEGER, iTop INTEGER, iRight INTEGER, iBottom INTEGER, tsChangedSince TIMESTAMP )
BEGIN
  DROP TEMPORARY TABLE IF EXISTS land_GetFieldsInArea;
  CREATE TEMPORARY TABLE land_GetFieldsInArea ( x INTEGER, y INTEGER, type VARCHAR(255) );

  IF ISNULL(tsChangedSince) THEN

    INSERT INTO land_GetFieldsInArea
    SELECT x, y, type FROM xcom_land AS land
    WHERE x >= iLeft AND x <= iRight
  		AND y >= iTop AND y <= iBottom
  	ORDER BY y ASC, x ASC;

  ELSE

    INSERT INTO land_GetFieldsInArea
    SELECT x, y, type FROM xcom_land AS land
    WHERE x >= iLeft AND x <= iRight
  		AND y >= iTop AND y <= iBottom
      AND changed >= tsChangedSince
  	ORDER BY y ASC, x ASC;

  END IF;

END $$

DELIMITER ;
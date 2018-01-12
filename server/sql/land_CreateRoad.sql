DELIMITER $$

DROP PROCEDURE IF EXISTS `xcom`.`land_CreateRoad` $$
CREATE PROCEDURE `xcom`.`land_CreateRoad` ( x1 INT, y1 INT, northSouth BOOL, len INT, user INT )
BEGIN body: BEGIN

  DROP TEMPORARY TABLE IF EXISTS land_CreateRoad;

  IF northSouth THEN
    CREATE TEMPORARY TABLE land_CreateRoad
    SELECT x, y FROM xcom_land
      WHERE x = x1 AND y BETWEEN y AND y + len
        AND type NOT IN ('plain','road');
    SET @setRoads = 'NS';
  ELSE
    CREATE TEMPORARY TABLE land_CreateRoad
    SELECT x,y,type FROM xcom_land
      WHERE x BETWEEN x AND x + len AND y = y1
        AND type NOT IN ('plain','road');
  END IF;

  /** Something blocking? Then return the blocking cells. */
  SET @iBlocking = (SELECT COUNT(*) FROM land_CreateRoad);
  IF @iBlocking != 0 THEN SELECT * FROM land_CreateRoad; LEAVE body; END IF;

  /** Set the owner of the cells and build the roads. */
  IF northSouth THEN
    UPDATE xcom_land SET owner = user
      WHERE x = x1 AND (y BETWEEN y1 AND y1 + len-1)
        AND type = 'plain';
    UPDATE xcom_land SET
        type = 'road',
        roads = CONCAT( 'N,S,', roads)
      WHERE x = x1 AND (y BETWEEN y1  AND y1 + len-1);
  ELSE
    UPDATE xcom_land SET owner = user
      WHERE (x BETWEEN x1 AND x1 + len-1)  AND y = y1
        AND type = 'plain';
    UPDATE xcom_land SET
        type = 'road',
        roads = CONCAT( 'E,W,', roads)
      WHERE (x BETWEEN x1 AND x1 + len-1)  AND y = y1;
  END IF;

  -- Test:  CALL land_CreateRoad(0,8, false, 11);

END body; END $$

DELIMITER ;
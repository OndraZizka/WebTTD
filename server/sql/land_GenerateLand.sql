DELIMITER $$

DROP PROCEDURE IF EXISTS `xcom`.`lib_GenerateLand` $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `lib_GenerateLand`( iLeft INTEGER, iTop INTEGER, iRight INTEGER, iBottom INTEGER )
BEGIN

  #CALL Logg( CONCAT('lib_GenerateTimes("', dateFrom,'","', dateTo,'","', eResolution, '")') );

  SET @iMinX = iLeft;
  SET @iMaxX = iRight;
  SET @iMinY = iTop;
  SET @iMaxY = iBottom;

  #DROP TEMPORARY TABLE IF EXISTS lib_GenerateLand;
  #CREATE TEMPORARY TABLE lib_GenerateLand LIKE xcom_land;

  SET @iCurY = @iMinY;
  InsertLoopY: LOOP
    IF @iCurY > @iMaxY THEN LEAVE InsertLoopY; END IF;
    SET @iCurX = @iMinX;
    InsertLoopX: LOOP
      IF @iCurX > @iMaxX THEN LEAVE InsertLoopX; END IF;
      ##  x, y, changed, type, ground, building, roads, rails, ref_x, ref_y, owner, level, farm_offset
      INSERT IGNORE INTO xcom_land SET x = @iCurX, y = @iCurY, type = 'plain';
      SET @iCurX = @iCurX + 1;
    END LOOP;
    SET @iCurY = @iCurY + 1;
  END LOOP;

  #SELECT * FROM lib_GenerateLand; ## Just for testing

END $$

DELIMITER ;
DELIMITER $$

DROP PROCEDURE IF EXISTS lib_GenerateLand $$
CREATE PROCEDURE lib_GenerateLand( iWid INTEGER, iHei INTEGER )
BEGIN

  #CALL Logg( CONCAT('lib_GenerateTimes("', dateFrom,'","', dateTo,'","', eResolution, '")') );

  SET @iMinX = 0;
  SET @iMaxX = iWid;
  SET @iMinY = 0;
  SET @iMaxY = iHei;

  #DROP TEMPORARY TABLE IF EXISTS lib_GenerateLand;
  #CREATE TEMPORARY TABLE lib_GenerateLand LIKE xcom_land;

  SET @iCurY = @iMinY;
  InsertLoopY: LOOP
    IF @iCurY > @iMaxY THEN LEAVE InsertLoopY; END IF;
    SET @iCurX = @iMinX;
    InsertLoopX: LOOP
      IF @iCurX > @iMaxX THEN LEAVE InsertLoopX; END IF;
      INSERT INTO xcom_land SET x = @iCurX, y = @iCurY;
      SET @iCurX = @iCurX + 1;
    END LOOP;
    SET @iCurY = @iCurY + 1;
  END LOOP;

  #SELECT * FROM lib_GenerateLand; ## Just for testing

END $$

DELIMITER ;

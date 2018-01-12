DELIMITER $$

DROP FUNCTION IF EXISTS `xcom`.`lib_GetSetBits` $$
CREATE FUNCTION `xcom`.`lib_GetSetBits` ( _set VARCHAR(64), _has VARCHAR(64) ) RETURNS INT DETERMINISTIC NO SQL
BEGIN

  /**
   *  Returns a value for set defined in _set, if it has members defined in _has.
   *  _set:  e.g. "ab,c,def,gh,ac"
   *  _has:  e.g. "ab,gh,ac"
   *  This woould return (binary) 11001
   */

  SET @tail = _has;
    INSERT INTO logg VALUES ( CONCAT('tail: ',@tail) );
  SET @ret = 0;

  loop1: LOOP
    SET @flag = SUBSTRING_INDEX( @tail, ',', 1 );
    INSERT INTO logg VALUES ( CONCAT('flag: ',@flag) );
    #IF( '' = @flag ) THEN LEAVE loop1; END IF;

    SET @ret = @ret  |  1 << (FIND_IN_SET(@flag, _set) -1);
    INSERT INTO logg VALUES ( CONCAT('ret: ',@ret) );

    SET @tail  = SUBSTRING( @tail, LENGTH(@flag)+2 );  ## 1 = ','; And, string is 1-based.
    INSERT INTO logg VALUES ( CONCAT('tail: ',@tail) );
    IF( '' = @tail ) THEN LEAVE loop1; END IF;
  END LOOP loop1;

  RETURN @ret;


END $$

DELIMITER ;
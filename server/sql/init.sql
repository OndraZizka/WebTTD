
CREATE TABLE `xcom`.`xcom_land` (
  `x` SMALLINT NOT NULL,
  `y` SMALLINT NOT NULL,
  `type` ENUM('grass') NOT NULL DEFAULT 'grass',
  PRIMARY KEY (`x`, `y`)
)
ENGINE = MyISAM;


CREATE DATABASE xcom;
GRANT ALL PRIVILEGES ON xcom.* TO 'xcom'@'localhost' IDENTIFIED BY 'xcom';
SET PASSWORD FOR xcom@localhost = OLD_PASSWORD('xcom');

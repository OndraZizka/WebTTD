-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.37-community-nt-log


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema xcom
--

CREATE DATABASE IF NOT EXISTS xcom;
USE xcom;

--
-- Definition of table `xcom_land`
--

DROP TABLE IF EXISTS `xcom_land`;
CREATE TABLE `xcom_land` (
  `x` smallint(6) NOT NULL,
  `y` smallint(6) NOT NULL,
  `changed` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `type` enum('plain','building','industry','rail','road') NOT NULL default 'plain',
  `ground` enum('grass','farm','stones','bumpy') NOT NULL default 'grass',
  `building` enum('cinema','cotagge_tall','cottage_small','cottage_small2','cottage_small3','cottage_small4','flats_gray','flats_overhang','flats0','flats1','flats2','flats3','flats4','fountain','hanging','hotel','house_modern','house_modern2','house_pool','house_swiss','houses_2garage','houses_2garden','houses_3','houses_3garden','church','office_tower','offices_block_modern','offices_modern','park1','park2','shop_mall','shop_small','shops_and_offices','shops_and_offices2','shops_modern','stadium_american','stadium_soccer','statue','theater','warehouse') default NULL,
  `roads` set('N','S','W','E') default NULL,
  `rails` set('NS','NW','NE','SW','SE','WE') default NULL,
  `ref_x` smallint(6) default NULL,
  `ref_y` smallint(6) default NULL,
  `owner` int(10) unsigned default NULL COMMENT 'xcom_users',
  `level` tinyint(3) unsigned NOT NULL default '0',
  `farm_offset` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY  (`x`,`y`)
) ENGINE=MyISAM DEFAULT CHARSET=cp1250;

--
-- Dumping data for table `xcom_land`
--

/*!40000 ALTER TABLE `xcom_land` DISABLE KEYS */;
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (0,0,'2007-10-21 00:23:20','building','farm','flats2','','',NULL,NULL,NULL,1,0),
 (1,0,'2007-10-19 22:26:46','road','grass','','N,S','',NULL,NULL,NULL,1,0),
 (2,0,'2007-10-19 23:14:48','building','grass','statue','','',NULL,NULL,NULL,1,0),
 (3,0,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (4,0,'2007-10-19 23:22:31','road','grass','','N,S','',NULL,NULL,NULL,1,0),
 (5,0,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (6,0,'2007-10-19 23:04:04','building','grass','cottage_small2','','',NULL,NULL,NULL,1,0),
 (7,0,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,0,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,0,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,0,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (0,1,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,1,'2007-10-19 22:26:46','road','','','N,E','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (2,1,'2007-10-19 22:26:46','road','','','S,W','',NULL,NULL,NULL,1,0),
 (3,1,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (4,1,'2007-10-19 23:22:31','road','grass','','N,S','',NULL,NULL,NULL,1,0),
 (5,1,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (6,1,'2007-10-19 22:30:48','building','','','','',NULL,NULL,NULL,1,0),
 (7,1,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,1,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,1,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,1,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (0,2,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,2,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (2,2,'2007-10-19 21:24:08','road','grass','','N,S','',NULL,NULL,NULL,1,0),
 (3,2,'2007-10-19 23:13:48','building','grass','flats2','','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (4,2,'2007-10-19 23:22:31','road','grass','','N,S','',NULL,NULL,NULL,1,0),
 (5,2,'2007-10-19 18:04:09','plain','grass','cottage_small2','','',NULL,NULL,NULL,1,0),
 (6,2,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (7,2,'2007-10-19 00:33:23','building','grass','church','','',NULL,NULL,NULL,1,0),
 (8,2,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,2,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,2,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (0,3,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,3,'2007-10-19 23:13:00','building','','flats1','','',NULL,NULL,NULL,1,0),
 (2,3,'2007-10-19 21:24:05','road','grass','','N,S','',NULL,NULL,NULL,1,0),
 (3,3,'2007-10-19 23:13:00','building','','offices_block_modern','','',NULL,NULL,NULL,1,0),
 (4,3,'2007-10-19 23:22:31','road','grass','','N,S','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (5,3,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (6,3,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (7,3,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,3,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,3,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,3,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (0,4,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,4,'2007-10-19 23:10:19','building','grass','flats0','','',NULL,NULL,NULL,1,0),
 (2,4,'2007-10-19 21:24:07','road','grass','','N,S','',NULL,NULL,NULL,1,0),
 (3,4,'2007-10-19 22:30:48','building','grass','cottage_small','','',NULL,NULL,NULL,1,0),
 (4,4,'2007-10-19 23:22:31','road','grass','','N,S','',NULL,NULL,NULL,1,0),
 (5,4,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (6,4,'2007-10-21 02:09:48','building','bumpy','house_swiss','','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (7,4,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,4,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,4,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,4,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (0,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0),
 (1,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0),
 (2,5,'2007-10-19 23:01:26','road','grass','','N,W,E','',NULL,NULL,NULL,1,0),
 (3,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0),
 (4,5,'2007-10-19 23:22:13','road','grass','','N,W,E','',NULL,NULL,NULL,1,0),
 (5,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0),
 (6,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0),
 (7,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0),
 (8,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (9,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0),
 (10,5,'2007-10-19 23:00:43','road','grass','','W,E','',NULL,NULL,NULL,1,0),
 (0,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (2,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (3,6,'2007-10-19 23:04:04','building','grass','park1','','',NULL,NULL,NULL,1,0),
 (4,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (5,6,'2007-10-20 23:38:23','building','grass','shop_small','','',NULL,NULL,NULL,1,0),
 (6,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (7,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,6,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (0,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (2,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (3,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (4,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (5,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (6,7,'2007-10-21 00:22:00','industry','farm','cottage_small','','',NULL,NULL,NULL,1,0),
 (7,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,7,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (0,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (2,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (3,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (4,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (5,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (6,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (7,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,8,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (0,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (2,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (3,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (4,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (5,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (6,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (7,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,9,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (0,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (1,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (2,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (3,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (4,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (5,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (6,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (7,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (8,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (9,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (10,10,'2007-10-19 00:33:23','plain','grass','','','',NULL,NULL,NULL,1,0),
 (4,-1,'2007-10-21 03:11:07','road','grass','house_swiss','S','',NULL,NULL,NULL,0,0),
 (3,-1,'2007-10-21 03:19:28','plain','grass','house_swiss','S','',NULL,NULL,NULL,0,0),
 (3,-2,'2007-10-21 03:20:36','plain','grass','house_swiss','S','',NULL,NULL,NULL,0,0),
 (3,-3,'2007-10-21 03:20:42','plain','grass','house_swiss','S','',NULL,NULL,NULL,0,0),
 (3,-4,'2007-10-21 03:20:44','plain','grass','house_swiss','S','',NULL,NULL,NULL,0,0),
 (3,-5,'2007-10-21 03:24:14','plain','grass','house_swiss','S','',NULL,NULL,NULL,0,0),
 (3,-6,'2007-10-21 03:24:16','plain','grass','house_swiss','S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (3,-7,'2007-10-21 03:24:30','building','grass','houses_2garage','','',NULL,NULL,NULL,0,0),
 (3,-8,'2007-10-21 03:29:34','building','grass','houses_3','','',NULL,NULL,NULL,0,0),
 (3,-9,'2007-10-21 03:30:28','road','grass','houses_3','W,E','',NULL,NULL,NULL,0,0),
 (4,-9,'2007-10-21 03:30:44','road','grass','houses_3','S,W,E','',NULL,NULL,NULL,0,0),
 (5,-9,'2007-10-21 03:30:40','road','grass','houses_3','W,E','',NULL,NULL,NULL,0,0),
 (4,-8,'2007-10-21 03:30:53','road','grass','houses_3','N,S','',NULL,NULL,NULL,0,0),
 (4,-7,'2007-10-21 03:31:09','road','grass','houses_3','N,S','',NULL,NULL,NULL,0,0),
 (2,-9,'2007-10-21 03:31:25','road','grass','houses_3','N,E','',NULL,NULL,NULL,0,0),
 (2,-10,'2007-10-21 03:31:45','road','grass','houses_3','N,S,W','',NULL,NULL,NULL,0,0),
 (2,-12,'2007-10-21 03:31:52','road','grass','houses_3','N,S,W','',NULL,NULL,NULL,0,0),
 (2,-11,'2007-10-21 03:31:58','road','grass','houses_3','N,S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (1,-9,'2007-10-21 03:32:18','building','grass','cinema','','',NULL,NULL,NULL,0,0),
 (0,-9,'2007-10-21 03:32:40','building','grass','flats4','','',NULL,NULL,NULL,0,0),
 (0,-8,'2007-10-21 03:32:53','building','grass','flats2','','',NULL,NULL,NULL,0,0),
 (1,-10,'2007-10-21 03:33:51','road','grass','flats2','W,E','',NULL,NULL,NULL,0,0),
 (0,-10,'2007-10-21 03:33:56','road','grass','flats2','N,W,E','',NULL,NULL,NULL,0,0),
 (-1,-10,'2007-10-21 03:34:13','road','grass','flats2','S,E','',NULL,NULL,NULL,0,0),
 (-1,-9,'2007-10-21 03:34:47','road','grass','cottage_small2','N,S,W','',NULL,NULL,NULL,0,0),
 (-2,-9,'2007-10-21 03:35:05','road','grass','cottage_small2','W,E','',NULL,NULL,NULL,0,0),
 (-3,-9,'2007-10-21 03:35:10','road','grass','cottage_small2','S,W,E','',NULL,NULL,NULL,0,0),
 (-4,-9,'2007-10-21 03:35:15','road','grass','cottage_small2','W,E','',NULL,NULL,NULL,0,0),
 (-5,-9,'2007-10-21 03:35:22','road','grass','cottage_small2','W,E','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-1,-8,'2007-10-21 03:35:33','road','grass','cottage_small2','N,S','',NULL,NULL,NULL,0,0),
 (-1,-7,'2007-10-21 03:35:35','road','grass','cottage_small2','N,S','',NULL,NULL,NULL,0,0),
 (-1,-6,'2007-10-21 03:35:43','road','grass','cottage_small2','N,S','',NULL,NULL,NULL,0,0),
 (-2,-8,'2007-10-21 03:36:00','building','grass','cinema','N,S','',NULL,NULL,NULL,0,0),
 (-3,-10,'2007-10-21 03:36:08','building','grass','cinema','N,S','',NULL,NULL,NULL,0,0),
 (-2,-10,'2007-10-21 03:36:26','building','grass','flats0','N,S','',NULL,NULL,NULL,0,0),
 (0,-11,'2007-10-21 03:37:52','road','grass','flats0','N,S','',NULL,NULL,NULL,0,0),
 (0,-12,'2007-10-21 03:37:54','road','grass','flats0','N,S','',NULL,NULL,NULL,0,0),
 (0,-13,'2007-10-21 03:43:32','road','bumpy','flats0','N,S,W','',NULL,NULL,NULL,0,0),
 (0,-14,'2007-10-21 03:41:38','road','grass','church','N,S,E','',NULL,NULL,NULL,0,0),
 (1,-12,'2007-10-21 03:38:24','building','grass','flats3','N,S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (1,-11,'2007-10-21 03:38:33','building','grass','flats4','N,S','',NULL,NULL,NULL,0,0),
 (1,-13,'2007-10-21 03:38:51','building','grass','flats0','N,S','',NULL,NULL,NULL,0,0),
 (2,-13,'2007-10-21 03:39:00','road','grass','flats0','N,S','',NULL,NULL,NULL,0,0),
 (2,-14,'2007-10-21 03:39:05','road','grass','flats0','N,S,W,E','',NULL,NULL,NULL,0,0),
 (3,-10,'2007-10-21 03:39:20','building','grass','park1','N,S,W,E','',NULL,NULL,NULL,0,0),
 (4,-10,'2007-10-21 03:39:33','building','grass','houses_3','N,S,W,E','',NULL,NULL,NULL,0,0),
 (3,-11,'2007-10-21 03:39:44','building','grass','houses_3garden','N,S,W,E','',NULL,NULL,NULL,0,0),
 (3,-12,'2007-10-21 03:39:55','building','grass','houses_3','N,S,W,E','',NULL,NULL,NULL,0,0),
 (3,-13,'2007-10-21 03:40:09','building','grass','houses_3garden','N,S,W,E','',NULL,NULL,NULL,0,0),
 (3,-14,'2007-10-21 03:40:21','road','grass','houses_3garden','W,E','',NULL,NULL,NULL,0,0),
 (4,-14,'2007-10-21 03:40:23','road','grass','houses_3garden','W,E','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (5,-14,'2007-10-21 03:40:29','road','grass','houses_3garden','W,E','',NULL,NULL,NULL,0,0),
 (2,-15,'2007-10-21 03:40:42','road','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (2,-16,'2007-10-21 03:40:44','road','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (3,-15,'2007-10-21 03:40:53','building','grass','church','N,S','',NULL,NULL,NULL,0,0),
 (1,-14,'2007-10-21 03:41:30','road','grass','church','W,E','',NULL,NULL,NULL,0,0),
 (0,-15,'2007-10-21 03:41:44','road','grass','church','N,S','',NULL,NULL,NULL,0,0),
 (0,-16,'2007-10-21 03:41:46','road','grass','church','N,S','',NULL,NULL,NULL,0,0),
 (0,-17,'2007-10-21 03:41:55','road','grass','church','N,S','',NULL,NULL,NULL,0,0),
 (1,-15,'2007-10-21 03:42:10','building','grass','houses_2garage','N,S','',NULL,NULL,NULL,0,0),
 (1,-16,'2007-10-21 03:42:25','building','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (1,-17,'2007-10-21 03:42:34','plain','bumpy','houses_3garden','','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (2,-17,'2007-10-21 03:42:44','plain','bumpy','houses_3garden','','',NULL,NULL,NULL,0,0),
 (-1,-13,'2007-10-21 03:43:24','road','bumpy','flats0','W,E','',NULL,NULL,NULL,0,0),
 (-1,-12,'2007-10-21 03:43:11','building','bumpy','flats0','','',NULL,NULL,NULL,0,0),
 (-2,-13,'2007-10-21 03:50:03','road','grass','stadium_soccer','S,W,E','',NULL,NULL,NULL,0,0),
 (-3,-13,'2007-10-21 03:43:42','road','bumpy','flats0','W,E','',NULL,NULL,NULL,0,0),
 (-4,-13,'2007-10-21 03:43:45','road','bumpy','flats0','W,E','',NULL,NULL,NULL,0,0),
 (-5,-13,'2007-10-21 03:43:48','road','bumpy','flats0','W,E','',NULL,NULL,NULL,0,0),
 (-4,-10,'2007-10-21 03:44:20','building','bumpy','houses_2garden','W,E','',NULL,NULL,NULL,0,0),
 (-3,-8,'2007-10-21 03:44:36','road','bumpy','houses_2garden','N,S','',NULL,NULL,NULL,0,0),
 (-3,-7,'2007-10-21 03:44:42','road','bumpy','houses_2garden','N,S','',NULL,NULL,NULL,0,0),
 (-2,-6,'2007-10-21 03:45:40','building','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-3,-6,'2007-10-21 03:44:46','road','bumpy','houses_2garden','N,S','',NULL,NULL,NULL,0,0),
 (-4,-8,'2007-10-21 03:45:12','building','grass','houses_3','N,S','',NULL,NULL,NULL,0,0),
 (-5,-8,'2007-10-21 03:45:23','building','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (-5,-10,'2007-10-21 03:45:32','plain','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (-4,-6,'2007-10-21 03:46:00','building','grass','stadium_soccer','N,S','',NULL,NULL,NULL,0,0),
 (-2,-11,'2007-10-21 03:49:54','road','grass','stadium_soccer','N,S','',NULL,NULL,NULL,0,0),
 (-2,-12,'2007-10-21 03:49:57','road','grass','stadium_soccer','N,S','',NULL,NULL,NULL,0,0),
 (-2,-14,'2007-10-21 03:50:27','building','grass','houses_2garage','S,W,E','',NULL,NULL,NULL,0,0),
 (-1,-14,'2007-10-21 03:50:35','building','grass','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-1,-15,'2007-10-21 03:51:15','building','grass','cottage_small4','S,W,E','',NULL,NULL,NULL,0,0),
 (-3,-14,'2007-10-21 03:51:36','plain','grass','cottage_small4','','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-4,-14,'2007-10-21 03:51:38','plain','grass','cottage_small4','','',NULL,NULL,NULL,0,0),
 (-5,-14,'2007-10-21 04:00:23','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-3,-12,'2007-10-21 03:51:45','plain','grass','cottage_small4','','',NULL,NULL,NULL,0,0),
 (-4,-12,'2007-10-21 03:51:48','plain','grass','cottage_small4','','',NULL,NULL,NULL,0,0),
 (-5,-11,'2007-10-21 03:52:02','plain','grass','cottage_small4','','',NULL,NULL,NULL,0,0),
 (5,-10,'2007-10-21 03:52:33','building','grass','cottage_small','','',NULL,NULL,NULL,0,0),
 (5,-11,'2007-10-21 03:52:39','plain','grass','cottage_small','','',NULL,NULL,NULL,0,0),
 (4,-11,'2007-10-21 03:52:42','plain','grass','cottage_small','','',NULL,NULL,NULL,0,0),
 (4,-12,'2007-10-21 03:52:45','plain','grass','cottage_small','','',NULL,NULL,NULL,0,0),
 (5,-12,'2007-10-21 03:52:50','plain','grass','cottage_small','','',NULL,NULL,NULL,0,0),
 (5,-13,'2007-10-21 03:52:57','plain','grass','cottage_small','','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (4,-13,'2007-10-21 03:52:56','plain','grass','cottage_small','','',NULL,NULL,NULL,0,0),
 (7,-11,'2007-10-21 03:53:11','plain','grass','cottage_small','','',NULL,NULL,NULL,0,0),
 (7,-12,'2007-10-21 03:54:09','plain','grass','cottage_small','S,W,E','',NULL,NULL,NULL,0,0),
 (7,-13,'2007-10-21 03:53:14','plain','grass','cottage_small','','',NULL,NULL,NULL,0,0),
 (7,-9,'2007-10-21 03:53:40','road','grass','cottage_small','W,E','',NULL,NULL,NULL,0,0),
 (8,-9,'2007-10-21 03:53:41','road','grass','cottage_small','W,E','',NULL,NULL,NULL,0,0),
 (6,-9,'2007-10-21 03:53:44','road','grass','cottage_small','N,W,E','',NULL,NULL,NULL,0,0),
 (6,-10,'2007-10-21 03:53:48','road','grass','cottage_small','N,S','',NULL,NULL,NULL,0,0),
 (6,-11,'2007-10-21 03:53:50','road','grass','cottage_small','N,S','',NULL,NULL,NULL,0,0),
 (6,-12,'2007-10-21 03:53:52','road','grass','cottage_small','N,S','',NULL,NULL,NULL,0,0),
 (6,-13,'2007-10-21 03:53:54','road','grass','cottage_small','N,S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (6,-14,'2007-10-21 03:53:58','road','grass','cottage_small','S,W,E','',NULL,NULL,NULL,0,0),
 (8,-10,'2007-10-21 03:54:10','plain','grass','cottage_small','S,W,E','',NULL,NULL,NULL,0,0),
 (8,-12,'2007-10-21 03:54:12','plain','grass','cottage_small','S,W,E','',NULL,NULL,NULL,0,0),
 (8,-13,'2007-10-21 03:54:13','plain','grass','cottage_small','S,W,E','',NULL,NULL,NULL,0,0),
 (8,-11,'2007-10-21 03:54:19','plain','grass','cottage_small','S,W,E','',NULL,NULL,NULL,0,0),
 (7,-10,'2007-10-21 03:54:20','plain','grass','cottage_small','S,W,E','',NULL,NULL,NULL,0,0),
 (1,-8,'2007-10-21 03:54:29','plain','grass','cottage_small','S,W,E','',NULL,NULL,NULL,0,0),
 (2,-8,'2007-10-21 03:55:44','building','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (4,-6,'2007-10-21 03:55:54','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (4,-4,'2007-10-21 03:56:00','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (-1,-5,'2007-10-21 03:56:14','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-3,-5,'2007-10-21 04:01:35','road','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (-4,-5,'2007-10-21 03:56:19','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (-5,-5,'2007-10-21 03:56:20','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (-5,-12,'2007-10-21 03:59:27','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-4,-11,'2007-10-21 03:56:32','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (-3,-11,'2007-10-21 03:56:34','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (-2,-7,'2007-10-21 03:57:12','building','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (-2,-5,'2007-10-21 03:57:22','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (0,-7,'2007-10-21 03:57:27','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (1,-7,'2007-10-21 03:57:29','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (2,-7,'2007-10-21 03:57:31','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (2,-6,'2007-10-21 03:57:33','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (1,-6,'2007-10-21 03:57:34','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (0,-6,'2007-10-21 03:57:36','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (0,-5,'2007-10-21 03:57:44','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (1,-5,'2007-10-21 03:57:45','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (2,-5,'2007-10-21 03:57:46','plain','grass','flats2','S,W,E','',NULL,NULL,NULL,0,0),
 (5,-8,'2007-10-21 03:58:05','building','grass','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-12,'2007-10-21 03:59:36','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-11,'2007-10-21 03:59:38','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-10,'2007-10-21 03:59:45','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-9,'2007-10-21 04:00:02','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-6,-8,'2007-10-21 04:00:06','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-7,-8,'2007-10-21 04:00:07','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-7,-9,'2007-10-21 04:00:09','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-7,-10,'2007-10-21 04:00:59','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-7,-11,'2007-10-21 04:00:13','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-7,-12,'2007-10-21 04:00:15','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-13,'2007-10-21 04:00:20','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-14,'2007-10-21 04:00:35','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-5,-15,'2007-10-21 04:00:27','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-5,-16,'2007-10-21 04:00:31','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-15,'2007-10-21 04:00:36','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-6,-16,'2007-10-21 04:00:38','plain','farm','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-6,'2007-10-21 04:01:08','plain','grass','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-6,-7,'2007-10-21 04:01:10','plain','grass','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-7,-7,'2007-10-21 04:01:19','plain','grass','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-7,-6,'2007-10-21 04:01:17','plain','grass','houses_3garden','S,W,E','',NULL,NULL,NULL,0,0),
 (-3,-4,'2007-10-21 04:01:40','road','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (0,-2,'2007-10-21 04:02:00','plain','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (-1,-2,'2007-10-21 04:02:03','plain','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (-2,-1,'2007-10-21 04:02:05','plain','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (0,-1,'2007-10-21 04:02:07','plain','grass','houses_3garden','N,S','',NULL,NULL,NULL,0,0),
 (1,-1,'2007-10-21 04:02:20','road','grass','houses_3garden','S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-2,1,'2007-10-21 04:02:25','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-1,2,'2007-10-21 04:02:27','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-1,0,'2007-10-21 04:02:29','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-1,1,'2007-10-21 04:02:31','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-1,-1,'2007-10-21 04:02:43','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-2,0,'2007-10-21 04:02:45','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-2,-2,'2007-10-21 04:02:48','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-2,3,'2007-10-21 04:03:16','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-1,3,'2007-10-21 04:02:53','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-1,4,'2007-10-21 04:03:14','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-1,5,'2007-10-21 04:02:57','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (11,5,'2007-10-21 04:02:59','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (11,4,'2007-10-21 04:03:00','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (11,3,'2007-10-21 04:03:01','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (11,2,'2007-10-21 04:03:02','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (11,1,'2007-10-21 04:03:04','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (11,0,'2007-10-21 04:03:06','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (11,6,'2007-10-21 04:03:08','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (11,7,'2007-10-21 04:03:11','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-3,2,'2007-10-21 04:03:17','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-3,1,'2007-10-21 04:03:21','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-3,0,'2007-10-21 04:03:22','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-3,-1,'2007-10-21 04:03:24','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (4,-3,'2007-10-21 04:03:27','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (2,-4,'2007-10-21 04:03:29','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (2,-3,'2007-10-21 04:03:54','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (4,-2,'2007-10-21 04:03:37','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (1,-4,'2007-10-21 04:03:39','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (1,-3,'2007-10-21 04:03:41','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (2,-1,'2007-10-21 04:03:45','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (4,-5,'2007-10-21 04:03:48','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (5,-7,'2007-10-21 04:03:50','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (0,-4,'2007-10-21 04:03:52','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (-1,-4,'2007-10-21 04:03:55','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (0,-3,'2007-10-21 04:03:57','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-1,-3,'2007-10-21 04:04:00','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-2,-4,'2007-10-21 04:04:01','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-2,-3,'2007-10-21 04:04:03','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-3,-3,'2007-10-21 04:04:05','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (-3,-2,'2007-10-21 04:04:07','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (6,-8,'2007-10-21 04:04:10','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (7,-8,'2007-10-21 04:04:11','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (8,-8,'2007-10-21 04:04:13','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (9,-9,'2007-10-21 04:04:15','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (9,-8,'2007-10-21 04:04:16','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (5,-6,'2007-10-21 04:04:18','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (7,-6,'2007-10-21 04:04:19','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (5,-5,'2007-10-21 04:04:21','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (5,-4,'2007-10-21 04:04:22','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (6,-4,'2007-10-21 04:04:26','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (8,-4,'2007-10-21 04:04:28','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (7,-4,'2007-10-21 04:04:29','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (6,-7,'2007-10-21 12:41:32','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (7,-7,'2007-10-21 12:41:34','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (8,-7,'2007-10-21 12:41:35','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0);
INSERT INTO `xcom_land` (`x`,`y`,`changed`,`type`,`ground`,`building`,`roads`,`rails`,`ref_x`,`ref_y`,`owner`,`level`,`farm_offset`) VALUES 
 (9,-7,'2007-10-21 12:41:39','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (8,-6,'2007-10-21 12:41:38','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (9,-6,'2007-10-21 12:41:40','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (6,-6,'2007-10-21 12:41:42','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (6,-5,'2007-10-21 12:41:44','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (7,-5,'2007-10-21 12:41:46','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0),
 (8,-5,'2007-10-21 12:41:47','plain','grass','houses_3garden','S','',NULL,NULL,NULL,0,0);
/*!40000 ALTER TABLE `xcom_land` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

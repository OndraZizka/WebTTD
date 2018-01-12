
package cz.dynawest.logging;


import cz.dynawest.webttd.Game;
import java.io.*;
import java.util.logging.*;


/**
 *
 * @author Ondrej Zizka
 */
public class LoggingUtils
{
  private static final Logger log = Logger.getLogger( LoggingUtils.class.getName() );

  
  /** Sets up logging. Uses "#/logging.properties" as default path. */
  public static void initLogging() {
    initLogging("#/logging.properties");
  }


  /** Sets up logging. */
  public static void initLogging( String filePath ) {
    String logConfigFile = System.getProperty("java.util.logging.config.file", filePath);
    try {
      InputStream is;
      if( logConfigFile.startsWith("#") )
        is = Game.class.getResourceAsStream( logConfigFile.substring(1) );
        // "Use getClass().getClassLoader().findResource("path") instead."
      else
        is = new FileInputStream(logConfigFile);

			log.info("Na��t�m konfiguraci logov�n� ze souboru: "+logConfigFile+" (nastaveno v syst�mov� prom�nn� java.util.logging.config.file)");
      LogManager.getLogManager().readConfiguration( is );
    }catch(IOException ex){
      System.err.println("Chyba p�i na��t�n� nastaven� logov�n� ze souboru ["+logConfigFile+"]. Bude pou�ito v�choz�.");
    }
  }


}// class LoggingUtils

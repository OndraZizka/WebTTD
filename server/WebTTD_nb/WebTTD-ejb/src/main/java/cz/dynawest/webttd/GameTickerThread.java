
package cz.dynawest.webttd;


import cz.dynawest.webttd.modifiers.GameTicker;
import java.util.*;
//import org.apache.log4j.*;
import java.util.logging.*;


/**
 * This thread does all the automatic changes in the game:
 *  <ul>
 *  <li> Towns growth
 *  <li>Industry production adjustments
 *  <li>Failures, disasters...
 *  <li>Subsidies
 *  </ul>
 * @author Ondrej Zizka
 */
public class GameTickerThread extends Thread {

  private static final Logger log = Logger.getLogger( GameTickerThread.class.getName() );

  Game game;
  GameTicker ticker;

  public GameTickerThread( Game game ) {
    this.game = game;
    this.ticker = new GameTicker( game );
    this.setName("WebTTD game ticker");
  }




  @Override
  public void run() {

    log.fine("Running the game.");

    // Stop when the game is stopped.
    while( ! game.isStopped() ){

      // Loop and tick every second.
      while( game.isRunning() ){
        log.fine("Tick...");
        ticker.tick();
        try {
          GameTickerThread.sleep( 1000 );
        }
        catch( InterruptedException ex ) {
          log.fine("Ticker thread interrupted; game state was: RUNNING.");
        }
      }
      // Now game can be paused or stopped.
      if( game.isStopped() ){
        log.fine("Game stopped, ending thread.");
        break;
      }

      try {
        // Game is not running - sleep for a minute, or until interrupted.
        log.fine("Ticker thread will sleep for a minute.");
        GameTickerThread.sleep( 60 * 1000 );
      }
      catch( InterruptedException ex ) {
        log.fine("Ticker thread interrupted; game state was not RUNNING.");
      }
    }
    
  }





}// class GameTickerThread

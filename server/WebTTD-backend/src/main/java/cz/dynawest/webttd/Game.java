
package cz.dynawest.webttd;


import cz.dynawest.webttd.grid.TimestampProvider;
import cz.dynawest.logging.LoggingUtils;
import java.awt.Rectangle;
import java.util.logging.*;
import javax.xml.bind.annotation.*;



/**
 *
 * @author Ondrej Zizka
 */
@XmlRootElement
public class Game implements TimestampProvider {

  private static final Logger log = Logger.getLogger( Game.class.getName() );

  @XmlElement
  public TtdGrid getLand() {    return land;  }
  private TtdGrid land;

  @XmlElement
  public TtdData getData() {    return data;  }
  private TtdData data;

  private GameTickerThread tickerThread;





  // State
  public enum State { INIT, RUNNING, PAUSED, STOPPED }
  private State state = State.STOPPED;
  public synchronized State getState(){ return this.state; }
  public synchronized boolean isRunning(){ return this.state == State.RUNNING; }
  public synchronized boolean isStopped(){ return this.state == State.STOPPED; }


  // Game time. Only serves as optimization, to prevent calling currentTimeMillis() all the time.
  private static volatile long timestamp = System.currentTimeMillis() / 1000;
  public final long getTimestamp(){ return Game.timestamp; }
  public final void touch(){ timestamp = System.currentTimeMillis() / 1000; }


  /**
   * Initialize the game.
   */
  public synchronized void init(){
    //this.initLogging();
    LoggingUtils.initLogging();
    log.info("Initializing the game...");
    this.state = State.INIT;
    this.land = new TtdGrid( this, new Rectangle(-20,-20,20,20) );
    // TODO: Load the grid.
    this.data = new TtdData();
    this.data.loadAllData();


    tickerThread = new GameTickerThread( this );
  }


  /**
   * Run the game.
   */
  public synchronized void run(){
    log.info("Running the game...");
    this.state = State.RUNNING;
    
    // Run the ticker thread.
    tickerThread.start();
  }


  /**
   * Pause.
   */
  public synchronized void pause(){
    log.info("Pausing the game...");
    this.state = State.PAUSED;
    // Pause the ticker thread.
    //gameTicker.interrupt();
  }


  /**
   * Stops the game and persists its state.
   */
  public synchronized void stop(){
    log.info("Stopping the game...");
    switch( this.state ){
      case STOPPED: return;
    }
    
    this.state = State.STOPPED;

    // Stop the ticker thread.
    if( this.tickerThread != null ){
      this.tickerThread.interrupt();
      try { this.tickerThread.join( 2000 ); }
      catch( InterruptedException ex ){ }
    }
    // Persist the game.
  }






  









  @Override
  public String toString() {
    return "Game{ land: "+land+" data: "+data+" }";
  }



}// class Game

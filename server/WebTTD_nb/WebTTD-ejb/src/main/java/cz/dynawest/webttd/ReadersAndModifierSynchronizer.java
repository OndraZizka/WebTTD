
package cz.dynawest.webttd;

import java.util.logging.Logger;


/**
 * Todo: try to use Condition.
 * 
 * @author Ondrej Zizka
 */
public class ReadersAndModifierSynchronizer {

  private static final Logger log = Logger.getLogger( ReadersAndModifierSynchronizer.class.getName() );

  private int readersActive = 0;

  public synchronized void waitUntilReadable(){
      while( this.readersActive < 0 ){
        try{ this.wait(); }
        catch( InterruptedException ex ) { return; }
      }
      this.readersActive++;
      log.info("readersActive: "+this.readersActive);
  }


  public synchronized void lockForWrite(){
      while( this.readersActive > 0 ){
        try{ this.wait(); }
        catch( InterruptedException ex ) { return; }
      }
      this.readersActive = -1;
      log.info("readersActive: "+this.readersActive);
  }

  public synchronized void doneReading(){
      this.readersActive--;
      log.info("readersActive: "+this.readersActive);
      this.notifyAll();
  }

  public synchronized void doneWriting(){
      this.readersActive = 0;
      log.info("readersActive: "+this.readersActive);
      this.notifyAll();
  }

}// class ReadersAndModifierSynchronizer

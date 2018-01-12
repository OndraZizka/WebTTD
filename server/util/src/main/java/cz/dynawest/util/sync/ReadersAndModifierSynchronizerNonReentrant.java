
package cz.dynawest.util.sync;

import java.util.concurrent.locks.*;
import java.util.logging.Logger;


/**
 * 
 * @author Ondrej Zizka
 */
public class ReadersAndModifierSynchronizerNonReentrant implements ReadersAndModifiersSynchronizer {

  private static final Logger log = Logger.getLogger( ReadersAndModifierSynchronizerNonReentrant.class.getName() );

  private int readersActive = 0;
  private boolean wantToWrite = false;

  // Lock and conditions
  private final Lock lock = new ReentrantLock(true);
  private final Condition notReading  = lock.newCondition();
  private final Condition notWriting = lock.newCondition();


  // TODO: Modify methods to use Conditions. See Condition javadoc.

  public void waitUntilReadable(){
    lock.lock();
    try{
      while( this.wantToWrite /*|| this.readersActive < 0*/ ){
        //log.info("readersActive: "+this.readersActive + "; wantToWrite: "+this.wantToWrite);
        try{ notWriting.await(); }
        catch( InterruptedException ex ) { log.warning("Interrupted! ################");  return; }
      }
      this.readersActive++;
      //log.info("readersActive: "+this.readersActive);
    }
    finally{ lock.unlock(); }
  }


  public void lockForWrite(){
    lock.lock();
    try{
      this.wantToWrite = true;
      while( this.readersActive > 0 ){
        try{ notReading.await(); }
        catch( InterruptedException ex ) { log.warning("Interrupted! ################");  return; }
      }
      //this.readersActive = -1;
      //log.info("readersActive: "+this.readersActive);
    }
    finally{ lock.unlock(); }
  }

  public void doneReading(){
    lock.lock();
    try{
      this.readersActive--;
      //log.info("readersActive: "+this.readersActive);
      notReading.signal();
    }
    finally{ lock.unlock(); }
  }

  public void doneWriting(){
    lock.lock();
    try{
      this.wantToWrite = false;
      //this.readersActive = 0;
      //log.info("readersActive: "+this.readersActive);
      notWriting.signalAll();
    }
    finally{ lock.unlock(); }
  }

}// class ReadersAndModifierSynchronizer2

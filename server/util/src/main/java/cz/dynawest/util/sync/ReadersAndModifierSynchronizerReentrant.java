
package cz.dynawest.util.sync;

import java.util.*;
import java.util.Map.Entry;
import java.util.concurrent.locks.*;
import java.util.logging.Logger;




/**
 *
 * TODO: Use AbstractOwnableSynchronizer for writer entries? But why...
 * 
 * @author Ondrej Zizka
 */
public class ReadersAndModifierSynchronizerReentrant implements ReadersAndModifiersSynchronizer {

  private static transient final Logger log = Logger.getLogger( ReadersAndModifierSynchronizerReentrant.class.getName() );

  private int readersActive = 0;  // Currently active readers.
  private int wantToWrite = 0;    // Writers in queue.

  /** Reader threads re-entries. */
  private CounterMap<Thread> depths = new CounterMap<Thread>();
  
  /** Eventual owning writer thread and re-entries count. */
  private Thread owningWriter = null;
  private int owningWriterReentries = 0;


  // Lock and conditions
  private final Lock lock = new ReentrantLock(true);
  private final Condition notReading  = lock.newCondition();
  private final Condition notWriting = lock.newCondition();

  public String toString(){
    return String.format(
      "ReadAct: %d;  WTW: %d; OW: %s, OWR: %d;  depths: %s",
      readersActive, wantToWrite, owningWriter == null ? "null":owningWriter.getName(), owningWriterReentries, depths.toString()
    );
  }




  /**
   * Read lock.
   */
  public void waitUntilReadable() throws InterruptedException {
    lock.lock();
    log.info( "LockR; "+this.toString() );///
    try{
      // Increment the thread entry map.
      Thread th = Thread.currentThread();
      int depth = this.depths.get( th );
      if( 0 == depth ){
        while( this.wantToWrite > 0 ){
          //log.info("readersActive: "+this.readersActive + "; wantToWrite: "+this.wantToWrite);
          try{ notWriting.await(); }
          catch( InterruptedException ex ) {
            //log.warning("Interrupted! ################");  return;
            throw ex;
          }
        }
        this.readersActive++;
      }
      this.depths.set( th, depth + 1 );
      //log.info("readersActive: "+this.readersActive);
    }
    finally{ lock.unlock(); }
  }



  /**
   * Lock for writing.
   */
  public void lockForWrite() throws InterruptedException{
    lock.lock();
    log.info( "LockW; "+this.toString() );///
    try{
      Thread th = Thread.currentThread();

      // Already owning this lock -> only increment re-entries count.
      if( owningWriter == th ){
        this.owningWriterReentries++;
        return;
      }

      this.wantToWrite++;

      // Other writer -> wait for the lock.
      while( owningWriter != null ){
        // Other writer will let us know by notReading.signal();
        // If we used notWriting.await(), this thread would compete with reader threads.
        // Update: wantToWrite is now int instead of boolean -> no competing needed; see doneWriting().
        try{ notReading.await(); }
        catch( InterruptedException ex ) { throw ex; }
      }

      // No writer -> grab this lock.
      //if( owningWriter == null ){
        owningWriter = th;
        this.owningWriterReentries = 1;
      //}

      while( this.readersActive > 0 ){
        try{ notReading.await(); }
        catch( InterruptedException ex ) {
          throw ex;
        }
      }
    }
    finally{ lock.unlock(); }
  }



  /** Done reading. */
  public void doneReading(){
    lock.lock();
    log.info( "DoneR; "+this.toString() );///
    try{
      Thread th = Thread.currentThread();
      int depth = this.depths.decAndGet( th );
      if( 0 == depth ){
        this.readersActive--;
        notReading.signal();
      }
    }
    finally{ lock.unlock(); }
  }



  /** Done writing. */
  public void doneWriting(){
    lock.lock();
    log.info( "DoneW; "+this.toString() );///
    try{
      Thread th = Thread.currentThread();
      if( this.owningWriter != th )
        throw new IllegalThreadStateException("This thread does not own the write lock.");

      if( --this.owningWriterReentries > 0 )
        return;

      this.owningWriter = null;

      // Another writer queued?
      if( --this.wantToWrite > 0 ){
        notReading.signal();      // Let next writer in queue know.
        //notWriting.signalAll();   // Let all the waiting readers know.
      } else {
        notWriting.signalAll();   // Let all the waiting readers know.
      }
    }
    finally{ lock.unlock(); }
  }





  /**
   * Counter map.
   */
  final class CounterMap<K>
  {

    private Map<K, Integer> counter = new HashMap();


    public final int get( K key ){
      Integer cnt = this.counter.get( key );
      if( null == cnt )  cnt = 0;
      return cnt;
    }

    public final void set( K key, int val ){
      this.counter.put( key, val );
    }

    public final int decAndGet( K key ){
      Integer cnt = this.counter.get( key );
      if( null == cnt || 0 == cnt )
        throw new IllegalStateException("Counter went under zero.");
      cnt--;
      if( 0 == cnt )
        this.counter.remove( key );
      else
        this.counter.put( key, cnt );
      return cnt;
    }

    @Override
    public final String toString(){
      return "{"+counter.size()+" readers}";
    }
    public final String toStringLong(){
      StringBuilder sb = new StringBuilder();
      for(  Entry<K, Integer> en : counter.entrySet() ) {
        K key = en.getKey();
        Thread th = (Thread) key; // Remove to make it generic.
        sb.append(th.getName()).append(": ").append(en.getValue()).append("; ");
      }
      return sb.toString();
    }
  }



}// class ReadersAndModifierSynchronizer2




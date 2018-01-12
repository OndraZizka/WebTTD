
package cz.dynawest.webttd;


import cz.dynawest.util.sync.ReadersAndModifiersSynchronizer;
import cz.dynawest.util.sync.ReadersAndModifierSynchronizerReentrant;
import cz.dynawest.logging.LoggingUtils;
import java.util.*;
import java.util.logging.Logger;
import org.testng.annotations.*;

/**
 *
 * @author Ondrej Zizka
 */
public class ReadersAndModifierTest {

  private static final Logger log = Logger.getLogger( ReadersAndModifierTest.class.getName() );

  private static final int INHIBITOR = 100; // more -> slow down
  private static final int TEST_DURATION_SEC = 30;
  private static final int READERS_NUM = 3;


  final ReadersAndModifierTest self = this;


  @BeforeSuite
  public void init(){
    LoggingUtils.initLogging();
  }




  /** Non-reentrant */
  @Test(enabled=false)
  public void xtestReadersAndModifier() throws InterruptedException
  {
    final ReadersAndModifiersSynchronizer pcs = new ReadersAndModifierSynchronizerReentrant();

    Thread proc = createWriterThread( pcs );
    proc.start();

    List<Thread> readers = new ArrayList(READERS_NUM);
    for( int i = 0; i < READERS_NUM; i++ ) {
      Thread t = createReaderThread(i+1, pcs );
      readers.add( t );
    }

    for( Thread thread : readers ) {
      thread.start();
    }

    Thread.sleep( TEST_DURATION_SEC * 1000 );
  }




  /** Reentrant */
  @Test
  public void testReentrancy() throws InterruptedException
  {
    final ReadersAndModifiersSynchronizer pcs = new ReadersAndModifierSynchronizerReentrant();

    Thread proc = createReenteringWriterThread( pcs );
    proc.start();

    List<Thread> readers = new ArrayList(READERS_NUM);
    for( int i = 0; i < READERS_NUM; i++ ) {
      Thread t = createReaderThread(i+1, pcs );
      readers.add( t );
    }

    for( Thread thread : readers ) {
      thread.start();
    }

    Thread.sleep( TEST_DURATION_SEC * 1000 );
  }


  


  /** Creates the re-entering modifier thread. */
  private Thread createReenteringWriterThread( final ReadersAndModifiersSynchronizer pcs ){
      Runnable modifier = new Runnable() {
        public void run() {
          try {
            while( true ){
              log.info("Modifier locking 1. --------------------------------------------------- "+pcs.toString());
              pcs.lockForWrite();
              log.info("Modifier locking 2. --------------------------------------------------- "+pcs.toString());
              pcs.lockForWrite();
              log.info("Modifier locked, modifying for 4500 ms...  ============================ "+pcs.toString());
              Thread.sleep(45 * INHIBITOR);
              pcs.doneWriting();
              log.info("Modifier released 2, ++++++++++++++++++++++++++++++++++++++++++++++++++ "+pcs.toString());
              pcs.doneWriting();
              log.info("Modifier released 1, now sleeping 9500 ms... ++++++++++++++++++++++++++ "+pcs.toString());
              Thread.sleep(95 * INHIBITOR);
            }
          }
          catch( InterruptedException ex ){
            return;
          }
        }
      };
      Thread th = new Thread( modifier );
      th.setName("Writer");
      return th;
  }






  /** Creates the modifier thread. */
  private Thread createWriterThread( final ReadersAndModifiersSynchronizer pcs ){
      Runnable modifier = new Runnable() {
        public void run() {
          try {
            while( true ){
              log.info("Modifier locking. --------------------------------------------------- "+pcs.toString());
              pcs.lockForWrite();
              log.info("Modifier locked, modifying for 4500 ms...  ========================== "+pcs.toString());
              Thread.sleep(45 * INHIBITOR);
              pcs.doneWriting();
              log.info("Modifier released, now sleeping 9500 ms... ++++++++++++++++++++++++++ "+pcs.toString());
              Thread.sleep(95 * INHIBITOR);
            }
          }
          catch( InterruptedException ex ){
            return;
          }
        }
      };
      Thread th = new Thread( modifier );
      th.setName("Writer");
      return th;
  }


  /** Creates reader thread. */
  private Thread createReaderThread( final int num, final ReadersAndModifiersSynchronizer pcs ){

      Runnable cons = new Runnable() {
        public void run() {
          int ms;
          try {
            while( true ){
              log.info("Reader "+num+" waiting until data readable.");
              pcs.waitUntilReadable();
              ms = 10 + new Random().nextInt( 35 );
              log.info("Reader "+num+" satisfied, reading ("+ms+" ms)...");
              Thread.sleep( ms * INHIBITOR );
              pcs.doneReading();
              ms = 5 + new Random().nextInt( 50 );
              log.info("Reader "+num+" has done reading, now sleeping "+ms+" ms...");
              Thread.sleep( ms * INHIBITOR );
            }
          }
          catch( InterruptedException ex ){
            return;
          }
        }
      };
    
      Thread th = new Thread( cons );
      th.setName("R"+num);
      return th;
  }

}// class TestTest

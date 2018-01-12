
package cz.dynawest.webttd;


import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;


/**
 *
 * @author Ondrej Zizka
 */
public class ProducerConsumersSynchronizer {

  private Integer readersActive = 0;

  public void waitUntilReadable(){
    synchronized( this.readersActive ){
      while( this.readersActive < 0 ){
        try {
          this.readersActive.wait();
        }
        catch( InterruptedException ex ) {
          return;
        }
      }
      this.readersActive++;
    }// sync( readersActive )
  }


  public void lockForWrite(){
    synchronized( this.readersActive ){
      while( this.readersActive > 0 ){
        try {
          this.readersActive.wait();
        }
        catch( InterruptedException ex ) {
          return;
        }
      }
      this.readersActive = -1;
    }// sync( readersActive )
  }

  public void doneReading(){
    synchronized( this.readersActive ){
      this.readersActive--;
      this.readersActive.notifyAll();
    }
  }

  public void doneWriting(){
    synchronized( this.readersActive ){
      this.readersActive = 0;
      this.readersActive.notifyAll();
    }
  }

}// class ProducerConsumersSynchronizer

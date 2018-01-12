
package cz.dynawest.util.sync;

/**
 *
 * @author Administrator
 */
public interface ReadersAndModifiersSynchronizer {

  void doneReading();


  void doneWriting();


  /**
   * Lock for writing.
   */
  void lockForWrite() throws InterruptedException;


  void waitUntilReadable() throws InterruptedException;

}// class ReadersAndModifiersSynchronizer

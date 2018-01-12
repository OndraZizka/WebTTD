
package cz.dynawest.util.sync;


import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;


/**
 *
 * @author Ondrej Zizka
 */
public class ReadersAndModifiersSynchronizerRRWLock implements ReadersAndModifiersSynchronizer {

  private final ReadWriteLock lock = new ReentrantReadWriteLock(true);
  private final Lock readLock = lock.readLock();
  private final Lock writeLock = lock.writeLock();


  public void lockForWrite() throws InterruptedException {
    writeLock.lockInterruptibly();
  }
  public void doneWriting() {
    writeLock.unlock();
  }


  public void waitUntilReadable() throws InterruptedException {
    readLock.lockInterruptibly();
  }
  public void doneReading() {
    readLock.unlock();
  }

}// class ReadersAndModifiersSynchronizerRRWLock

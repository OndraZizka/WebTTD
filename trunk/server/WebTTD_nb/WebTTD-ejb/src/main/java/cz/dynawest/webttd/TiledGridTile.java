
package cz.dynawest.webttd;


import cz.dynawest.webttd.model.Cell;
import java.awt.Point;
import java.io.Serializable;
import java.util.*;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;


/**
 *
 * @author Ondrej Zizka
 */
class TiledGridTile<T extends Cell> implements Serializable {

  private CellHolder[][] cells;
  private long lastUpdated = 0;
  //Queue<T> updatedCells = new ArrayDeque();
  //BoundedFifoBuffer updatedCells2;
  private List updatedCells;
  // TODO: Make as a sorted set?

  public final int TILE_SIZE;
  public final int TILE_CELLS;



  // Synchronization
  //protected ReadersAndModifierSynchronizerReentrant sync;
  private final ReadWriteLock rwLock = new ReentrantReadWriteLock();
  protected final Lock readLock = rwLock.readLock();
  protected final Lock writeLock = rwLock.writeLock();





  /** Const */
  public TiledGridTile( int tileSize ) {
    TILE_SIZE = tileSize;
    TILE_CELLS = TILE_SIZE * TILE_SIZE;
    this.cells = (CellHolder[][]) new Object[tileSize][tileSize];
    //this.updatedCells = new ArrayDeque( tileSize * tileSize );
    //this.updatedCells2 = new BoundedFifoBuffer( tileSize * tileSize );
    this.updatedCells = new ArrayList(TILE_SIZE);
  }



  /** Set the cell at given coords. */
  public void set( Point pt, T cell ) throws InterruptedException {
    //sync.lockForWrite();
    try {
      this.cells[pt.y][pt.x] = new CellHolder(cell);
      this.touch( pt );
    }
    finally{
      //sync.doneWriting();
    }
  }

  /** Store when the last update was done. */
  public void touch( Point pt ){
    this.lastUpdated = Game.getTimestamp();
    CellHolder cellHolder = this.get( pt );
    cellHolder.touch();
    this.updatedCells.add( cellHolder );

    // Remove old updated cells.
    if( this.updatedCells.size() > TILE_CELLS * 3 / 2 ){
      this.updatedCells = updatedCells.subList( updatedCells.size() - TILE_CELLS, updatedCells.size() );
    }
  }

  public CellHolder get( Point pt ){
    return this.cells[pt.y][pt.x];
  }

  public List<T> getUpdatedSince( long since )
  {
    if( this.lastUpdated < since )
      return null;
    if( this.updatedCells.isEmpty() )
      return null;

    List<T> ret = new LinkedList();

    //for( int i = updatedCells.size()-1; i >= 0; i-- ){
    ListIterator<CellHolder> it = updatedCells.listIterator( updatedCells.size() );
    while( it.hasPrevious() ){
      CellHolder cellHolder = it.previous();
      if( cellHolder.getTimestamp() > since )
        break;
      ret.add( cellHolder.getCell() );
    }

    return ret;
  }


    /** Cell holder - adds a timestamp to T. */
    class CellHolder {
      private long timestamp;
      public T cell;

      public CellHolder( T cell ) {
        this.cell = cell;
        this.touch();
      }

      public T getCell() {    return cell;  }
      public long getTimestamp() {    return timestamp;  }
      public void touch() {    this.timestamp = Game.getTimestamp();  }
    }


}// class TiledGridTile




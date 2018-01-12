
package cz.dynawest.webttd.grid;


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
class TiledGridTile<T> implements Serializable
{
  TiledGrid<T> container;
  Point base;
  

  private /*CellHolder*/ Object[][] cells; // Can't be CellHolder: "Error - generic array creation."
  private long lastUpdated = 0;
  //Queue<T> updatedCells = new ArrayDeque();
  //BoundedFifoBuffer updatedCells2;
  private List updatedCells;
  // TODO: Make as a sorted set?



  // Synchronization
  //protected ReadersAndModifierSynchronizerReentrant sync;
  private final ReadWriteLock rwLock = new ReentrantReadWriteLock();
  protected final Lock readLock = rwLock.readLock();
  protected final Lock writeLock = rwLock.writeLock();




  // Const
  public TiledGridTile( TiledGrid<T> container, Point base ) {
    this.container = container;
    this.base = base;
    this.cells = new Object[container.TILE_SIZE][container.TILE_SIZE];
    //this.updatedCells = new ArrayDeque( tileSize * tileSize );
    //this.updatedCells2 = new BoundedFifoBuffer( tileSize * tileSize );
    this.updatedCells = new ArrayList( container.TILE_SIZE );
  }


  

  /** Set the cell at given coords. */
  public void set( Point pt, T cell ) {
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
    this.lastUpdated = container.touch();
    CellHolder cellHolder = this.getCellHolder( pt );
    cellHolder.touch();
    this.updatedCells.add( cellHolder );

    // Remove old updated cells.
    if( this.updatedCells.size() > container.TILE_CELLS * 3 / 2 ){
      this.updatedCells = updatedCells.subList( updatedCells.size() - container.TILE_CELLS, updatedCells.size() );
    }
  }

  /** Gets the cell on given coords, or creates and stores a new one if not existed yet. */
  public T getOrCreate( Point pt ){
    CellHolder holder = (CellHolder) this.cells[pt.y][pt.x];
    if( null != holder )
      return holder.cell;

    this.container.getCellObjectFactory();
    T cell = this.container.getCellObjectFactory().createCell( base.x + pt.x, base.y + pt.y );
    this.set( pt, cell );
    return cell;
  }

  private CellHolder getCellHolder( Point pt ){
    return (CellHolder) this.cells[pt.y][pt.x];
  }


  
  /** Returns true if the tile was updated since `since`. */
  boolean isUpdatedSince( long since ) {
    return this.lastUpdated > since;
  }

  /** Gets a list of cells updated since `since`. */
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
        public void touch() {    this.timestamp = container.touch();  }
      }


}// class TiledGridTile




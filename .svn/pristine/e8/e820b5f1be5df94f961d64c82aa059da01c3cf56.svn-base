
package cz.dynawest.webttd.grid;

import cz.dynawest.webttd.model.Point;
import java.awt.Rectangle;
import java.util.*;
import java.util.ArrayList;
import java.util.logging.Logger;

/**
 * Whole grid is organized in tiles, 10 by 10 cells.
 *
 * The top left cell [x1,y1] is always in the top left corned of the tile at [0,0].
 * The grid's dimension is always a multiple of TILE_SIZE.
 *
 *
 * @author Ondrej Zizka
 */
public class TiledGrid<T> implements TimedUnboundGrid<T>
{
  private static final Logger log = Logger.getLogger( TiledGrid.class.getName() );


  // Members

  private int x1;
  private int y1;
  
  public final int TILE_SIZE = 10;
  public final int TILE_CELLS = TILE_SIZE * TILE_SIZE;

  private int tilesHorizontal;
  private int tilesVertical;

  private List<TiledGridTile<T>> tiles;


  
  // Deps

  //private T cellObjectPrototype;
  private GridCellFactory<T> cellObjectFactory;
  public GridCellFactory<T> getCellObjectFactory() {    return cellObjectFactory;  }

  
  // Timestamp.
  private final TimestampProvider timestampProvider;
  public final TimestampProvider getTimestampProvider() {    return timestampProvider;  }
  
  private long lastUpdated = 0;
  public final long touch(){ return this.lastUpdated = this.timestampProvider.getTimestamp(); }





  public GridView<T> createView( Rect rect ){
    return new GridView<T>( this, rect );
  }



  // Helper methods.

  private Point getLowerBounds( Point pt ){
    return new Point(
      getLowerBound(pt.x),
      getLowerBound(pt.y)
    );
  }

  private Point getUpperBounds( Point pt ){
    return new Point(
      getUpperBound(pt.x),
      getUpperBound(pt.y)
    );
  }

  private int getLowerBound( int i ){
    final int mod = i % TILE_SIZE;
    if( mod == 0 )
      return i;

    if( i >= 0 )
      return i  -  i % TILE_SIZE;
    else {
      return i - mod - TILE_SIZE;
    }
  }

  private int getUpperBound( int i ){
    final int mod = i % TILE_SIZE;
    if( mod == 0 )
      return i;

    if( i >= 0 )
      return i - mod + TILE_SIZE;
    else
      return i - mod;
  }

  //private Point get





  // Const

  /**
   * Initializes the cell tiles for the given area (overlapping all of it).
   * @param area  Area to initialize for.
   */
  public TiledGrid( Rectangle area, GridCellFactory<T> cellObjectFactory, TimestampProvider tsp )
  {
    //this.cellObjectPrototype = cellObjectPrototype;
    this.cellObjectFactory = cellObjectFactory;
    this.timestampProvider = tsp;

    // Crop to lower bounds.
    this.x1 = getLowerBound( area.x );
    this.y1 = getLowerBound( area.y );

    // Fill to upper bounds.
    this.tilesHorizontal = getUpperBound( area.width ) / TILE_SIZE;
    this.tilesVertical   = getUpperBound( area.height ) / TILE_SIZE;


    log.info(String.format("x1,y1: [%d,%d];  tilesH, tilesV:  %d x %d",
            this.x1, this.y1, this.tilesHorizontal, this.tilesVertical ));


    // Create the cell tiles.
    this.tiles = new ArrayList( this.tilesHorizontal * this.tilesVertical );
    for( int ty = 0; ty < this.tilesVertical; ty++  ){
      for( int tx = 0; tx < this.tilesHorizontal; tx++  ){
        Point base = new Point( this.x1 + tx*TILE_SIZE, this.y1 + ty*TILE_SIZE );
        this.tiles.add( new TiledGridTile<T>( this, base ) );
      }
    }
  }// const



  private Point getGetTileCoordsForCell( Point cellCoords )
  {
    int tileX = (cellCoords.x - this.x1) / TILE_SIZE;
    int tileY = (cellCoords.y - this.y1) / TILE_SIZE;
    return new Point( tileX, tileY );
  }

  private Point getInTileCoords( Point pt )
  {
    int cellX = (pt.x % TILE_SIZE + TILE_SIZE) % TILE_SIZE;
    int cellY = (pt.y % TILE_SIZE + TILE_SIZE) % TILE_SIZE;
    // More general - not aligned to [0,0].
    //int cellX = (pt.x - this.x1) % TILE_SIZE;
    //int cellY = (pt.y - this.y1) % TILE_SIZE;
    return new Point( cellX, cellY );
  }

  /**
   * Returns the tile from the given internal **tile** coordinates (zero-based).
   * These coords are zero-based and are in bounds of tilesVertical and tilesHorizontal.
   */
  private TiledGridTile<T> getTile( int x, int y ) {
    return this.tiles.get( y * this.tilesHorizontal + x );
  }



  /**
   * Convenience for `get( Point cellPt )`.
   */
  public T getOrCreateCell( int x, int y ){
    return getOrCreateCell( new Point(x,y) );
  }


  /**
   *  Returns the cell from the given coordinates.
   */
  public T getOrCreateCell( Point cellPt )
  {

    // TODO: Use Point's methods.
    if( cellPt.x < this.x1 || cellPt.x > this.getX2() || cellPt.y < this.getY1() || cellPt.y > this.getY2() )
      this.expand( cellPt.x, cellPt.y );

    // Which tile should we look to.
    Point tileCoords = getGetTileCoordsForCell( cellPt );
    TiledGridTile<T> tile = this.getTile( tileCoords.x, tileCoords.y );

    // Get the in-tile coords. Counts with negative values.
    Point inTileCoords = getInTileCoords( cellPt );

    T cell = tile.getOrCreate( inTileCoords );
    return cell;
  }



  /**
   * Set the cell at the given coordinates.
   * @param x
   * @param y
   * @param cell
   */
  public void set( int x, int y, T cell ){
    throw new UnsupportedOperationException("Not impl yet.");
  }




  
  /**
   * Expand the data structures to contain cell [x,y].
   * Always expands by tile size multiples.
   *
   * @param x
   * @param y
   */
  private void expand( int xTo, int yTo )
  {
    log.fine("Expanding to contain ["+xTo+","+yTo+"]xy.  Grid: "+this);

    // How many tiles to add where?

    // Horizontal
    int dTilesLeft = 0;
    int dTilesRight = 0;

    if( xTo < this.x1 ){
      dTilesLeft = - getLowerBound( xTo - this.x1 ) / TILE_SIZE;         // Negative - add this many tiles at left.
      ;
    }else if( xTo > this.getX2() ) {
      dTilesRight = getUpperBound( xTo - this.getX2() ) / TILE_SIZE;    // Positive - add this many tiles at right.
    }

    // Vertical
    int dTilesTop = 0;
    int dTilesBottom = 0;

    if( yTo < this.y1 ){
      dTilesTop = - getLowerBound( yTo - this.y1 ) / TILE_SIZE;         // Negative - add this many tiles at left.
    }else if( yTo > this.getY2() ) {
      dTilesBottom = getUpperBound( yTo - this.getY2() ) / TILE_SIZE;    // Positive - add this many tiles at right.
    }

    expand( dTilesTop, dTilesBottom, dTilesLeft, dTilesRight );

  }


  

  /**
   * Pads the data structures by given numbers of tiles on the top, bottom, right and left.
   * Always expands by tile size multiples.
   */
  private void expand( int dTilesTop, int dTilesBottom, int dTilesLeft, int dTilesRight )
  {
    log.fine( String.format("Expanding: top %d, bottom %d, left %d, right %d.  Grid: "+this, dTilesTop, dTilesBottom, dTilesLeft, dTilesRight) );

    // No change?
    if( (dTilesTop | dTilesBottom | dTilesLeft | dTilesRight) == 0 )
      return;

    // Allocate new array for tiles.
    int newHor  = dTilesLeft + this.tilesHorizontal + dTilesRight;
    int newVert = dTilesTop + this.tilesVertical + dTilesBottom;
    List<TiledGridTile<T>> newTiles = new ArrayList( newVert * newHor );


    // Adjust the top left corner.
    // Important to happen before the cycles - used by getTileBase().
    //this.x1 = getLowerBound( xTo );
    //this.y1 = getLowerBound( yTo );
    this.x1 -= getLowerBound( (dTilesLeft) * TILE_SIZE );
    this.y1 -= getLowerBound( (dTilesTop) * TILE_SIZE );



    // Add above.
    if( dTilesTop != 0 )
      //newTiles.addAll( Collections.nCopies( dTilesTop * newHor, this.createEmptyTile() ));
      for( int ty = 0; ty < dTilesTop; ty++ )
        for( int tx = 0; tx < newHor; tx++ )
          newTiles.add( this.createEmptyTile(  this.getTileBase(tx,ty) ));


    for( int ty = 0; ty < this.tilesVertical; ty++ )
    {
      // Add left.
      if( dTilesLeft != 0 )
        //newTiles.addAll( Collections.nCopies( dTilesLeft, this.createEmptyTile() ) );
        for( int txLeft = 0; txLeft < dTilesLeft; txLeft++ )
          newTiles.add( this.createEmptyTile( this.getTileBase(txLeft,ty+dTilesTop) ));

      
      // Copy original.
      int lineStart = ty * this.tilesHorizontal;
      newTiles.addAll( this.tiles.subList( lineStart, lineStart + this.tilesHorizontal ) );

      // Add right.
      if( dTilesRight != 0 )
        //newTiles.addAll( Collections.nCopies( dTilesRight, this.createEmptyTile() ) );
        for( int txRight = 0; txRight < dTilesRight; txRight++ ){
          Point base = this.getTileBase( dTilesLeft + this.tilesHorizontal + txRight, ty+dTilesTop );
          newTiles.add( this.createEmptyTile( base ));
        }
    }

    // Add bellow.
    if( dTilesBottom != 0 )
      //newTiles.addAll( Collections.nCopies( dTilesBottom * newHor, this.createEmptyTile() ));
      for( int tyBottom = 0; tyBottom < dTilesBottom; tyBottom++ ){
        for( int tx = 0; tx < newHor; tx++ ){
          Point base = this.getTileBase( tx, dTilesTop + this.tilesVertical + tyBottom );
          newTiles.add( this.createEmptyTile( base ));
        }
      }


    // Set the new metrics.
    this.tiles = newTiles;
    this.tilesHorizontal = newHor;
    this.tilesVertical = newVert;

    log.fine( String.format("After: Grid: "+this) );
  }


  /** Convenience method - creates a tile object. */
  private TiledGridTile<T> createEmptyTile( Point base ){
    return new TiledGridTile<T>( this, base );
  }



  protected Point getTileBase( int tx, int ty ){
    return new Point(this.x1 + tx*TILE_SIZE, this.y1 + ty*TILE_SIZE);
  }
  

  private List<TiledGridTile<T>> getTilesInArea( Rect area ){

    Point topLeft = this.getGetTileCoordsForCell( area.getTopLeft() );
    Point bottomRight = this.getGetTileCoordsForCell( area.getBottomRight() );
    
    int count = (bottomRight.x - topLeft.x) * (bottomRight.y - topLeft.y);

    List<TiledGridTile<T>> tilesInArea = new ArrayList(count);

    for( int y = topLeft.y; y <= bottomRight.y; y++ ){
      for( int x = topLeft.x; x <= bottomRight.x; x++ ){
        TiledGridTile<T> tile = this.getTile( x, y );
        tilesInArea.add( tile );
      }
    }

    return tilesInArea;
  }




  /**
   * Returns the cells in the given area updated since the given timestamp.
   */
  public List<T> getUpdatedCellsSince( Rect area, long since )
  {
    List updatedCells = new ArrayList(64);

    for( TiledGridTile<T> tile : tiles ){
      if( tile.isUpdatedSince( since ) ){
        updatedCells.addAll( tile.getUpdatedSince( since ) );
      }
    }
    return updatedCells;
  }



  

  /* Getters */
  @Override public int getX1() { return x1; }
  @Override public int getY1() { return y1; }

  @Override public int getHeight() { return TILE_SIZE * tilesVertical; }
  @Override public int getWidth() { return TILE_SIZE * tilesHorizontal; }

  @Override public int getX2() { return x1 + this.getWidth() -1 ; }
  @Override public int getY2() { return y1 + this.getHeight() -1 ; }

  /* toString() */
  @Override
  public String toString() {
    return String.format("x1,y1: [%d,%d]; wid,hei: %d, %d; x2,y2: [%d,%d];  tiles[%d];",
                getX1(),
                getY1(),
                getWidth(),
                getHeight(),
                getX2(),
                getY2(),
                tiles.size()
            );
  }






}// class TiledGrid

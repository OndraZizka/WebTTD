
package cz.dynawest.webttd;

import java.awt.Point;
import java.awt.Rectangle;
import java.util.*;
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
public class TiledGrid<T> implements UnboundGrid {

  private static final Logger log = Logger.getLogger( Game.class.getName() );

  private int x1;
  private int y1;
  
  private final int TILE_SIZE = 10;
  private final int TILE_CELLS = TILE_SIZE * TILE_SIZE;

  private int tilesHorizontal;
  private int tilesVertical;

  private List<T[][]> tiles;


  // Helper methods.

  private Point getLowerBounds( Point pt ){
    return new Point(
      pt.x - pt.x % this.TILE_SIZE,
      pt.y - pt.y % this.TILE_SIZE
    );
  }

  private Point getUpperBounds( Point pt ){
    return new Point(
      (pt.x  + ( TILE_SIZE - pt.x % TILE_SIZE )) / TILE_SIZE,
      (pt.y + ( TILE_SIZE - pt.y % TILE_SIZE )) / TILE_SIZE
    );
  }

  private int getLowerBound( int i ){
    return i  -  i % this.TILE_SIZE;
  }

  private int getUpperBound( int i ){
    return (i  + ( TILE_SIZE - i % TILE_SIZE ));
  }

  //private Point get



  /**
   * 
   * @param area Area to initialize for.
   */
  public TiledGrid( Rectangle area )
  {
    // Crop to lower bounds.
    this.x1 = getLowerBound( area.x );
    this.y1 = getLowerBound( area.y );

    // Fill to upper bounds.
    this.tilesHorizontal = getUpperBound( area.width ) / TILE_SIZE;
    this.tilesVertical   = getUpperBound( area.height ) / TILE_SIZE;


    log.info(String.format("x1,y1: [%d,%d];  tilesH, tilesV:  %d x %d",
            this.x1, this.y1, this.tilesHorizontal, this.tilesVertical ));


    // Create the cells tiles.
    this.tiles = new ArrayList( this.tilesHorizontal * this.tilesVertical );
    for( int ty = 0; ty < this.tilesVertical; ty++  ){
      for( int tx = 0; tx < this.tilesHorizontal; tx++  ){
        this.tiles.add( /*ty * this.tilesHorizontal + tx,*/  (T[][]) new Object[TILE_SIZE][TILE_SIZE]);
      }
    }
  }// const



  /**
   * 
   * @param x
   * @param y
   * @return
   */
  public T get( int x, int y )
  {
    // TODO: Check bounds.
    if( x < this.x1 || x > this.getX2() || y < this.getY1() || y > this.getY2() )
      this.expand( x, y );

    int tileX = (x - this.x1) / TILE_SIZE;
    int tileY = (y - this.y1) / TILE_SIZE;

    T[][] tile = this.tiles.get( tileY * this.tilesHorizontal + tileX );

    return tile[ y % TILE_SIZE ][ x % TILE_SIZE ];
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
  private void expand( int dTilesTop, int dTilesBottom, int dTilesLeft, int dTilesRight ){

    // No change?
    if( (dTilesTop | dTilesBottom | dTilesLeft | dTilesRight) == 0 )
      return;

    // Allocate new array for tiles.
    int newHor  = dTilesLeft + this.tilesHorizontal + dTilesRight;
    int newVert = dTilesTop + this.tilesVertical + dTilesBottom;
    List<T[][]> newTiles = new ArrayList( newVert * newHor );

    // Add above.
    if( dTilesTop != 0 )
      newTiles.addAll( Collections.nCopies( dTilesTop * newHor, this.createEmptyTile() ));

    for( int y = 0; y < this.tilesVertical; y++ )
    {
      // Add left.
      if( dTilesLeft != 0 )
        newTiles.addAll( Collections.nCopies( dTilesLeft, this.createEmptyTile() ) );

      // Copy original.
      int lineStart = y * this.tilesHorizontal;
      newTiles.addAll( this.tiles.subList( lineStart, lineStart + this.tilesHorizontal ) );

      // Add right.
      if( dTilesRight != 0 )
        newTiles.addAll( Collections.nCopies( dTilesRight, this.createEmptyTile() ) );
    }

    // Add bellow.
    if( dTilesBottom != 0 )
      newTiles.addAll( Collections.nCopies( dTilesBottom * newHor, this.createEmptyTile() ));


    // Set the new metrics.
    this.tiles = newTiles;
    this.tilesHorizontal = newHor;
    this.tilesVertical = newVert;
    //this.x1 = getLowerBound( xTo );
    //this.y1 = getLowerBound( yTo );
    this.x1 -= getLowerBound( (dTilesLeft + dTilesRight) * TILE_SIZE );
    this.y1 -= getLowerBound( (dTilesTop + dTilesBottom) * TILE_SIZE );

  }


  /** Convenience method - creates a tile's array. */
  private T[][] createEmptyTile(){
    return  (T[][]) new Object[TILE_SIZE][TILE_SIZE];
  }


  

  /* Getters */
  public int getX1() { return x1; }
  public int getY1() { return y1; }

  public int getHeight() { return TILE_SIZE * tilesVertical; }
  public int getWidth() { return TILE_SIZE * tilesHorizontal; }

  public int getX2() { return x1 + this.getWidth() -1 ; }
  public int getY2() { return y1 + this.getHeight() -1 ; }




}// class TiledGrid

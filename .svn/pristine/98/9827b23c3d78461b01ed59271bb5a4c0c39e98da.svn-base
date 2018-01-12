
package cz.dynawest.webttd;


import cz.dynawest.webttd.grid.GridCellFactory;
import cz.dynawest.webttd.grid.Rect;
import cz.dynawest.webttd.grid.TiledGrid;
import cz.dynawest.webttd.model.*;
import java.awt.Rectangle;
import java.util.*;





/**
 *
 * @author Ondrej Zizka
 */
public class TtdGrid extends TiledGrid<Cell> {

  public TtdGrid( Game game, Rectangle area ) {
    super( area, new TtdCellFactory(), game ); // TODO: Create using factory.
  }


  /** Returns the cell from given coords; the cell is created if not yet existed. */
  public Cell getCell( int x, int y ){
    Cell cell = super.getOrCreateCell( x, y );
    //if( null != cell )
      return cell;
  }


  
  @Override
  public CellsAreaMetaInfo createView( Rect rect ) {
    return new CellsAreaMetaInfo( this, rect );
  }



  /** Returns the cells in the given area updated since the given timestamp. */
  public List<Cell> getUpdatedCellsSince( Rect area, long since ){
    List<Cell> cells = super.getUpdatedCellsSince( area, since );
    return cells;

    //UpdatedCellsData ud = new UpdatedCellsData( area, cells );
    //return ud;
  }




  /**
   * Verifies whether given track is valid road path.
   * @param track
   * @return
   */
  public boolean verifyRoadPath( Track track, boolean build ){
    // TODO...
    return true;
  }



}// class TtdGrid






/** 
 * Factory to create new cells which not yet exist when calling get().
 */
class TtdCellFactory implements GridCellFactory {

  @Override
  public Cell createCell( int x, int y ) {
    return createCell( new Point(x,y) );
  }

  @Override
  public Cell createCell( Point pt ) {
    return new Cell( pt );
  }

}

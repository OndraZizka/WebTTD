
package cz.dynawest.webttd;


import cz.dynawest.webttd.grid.GridView;
import cz.dynawest.webttd.grid.Rect;
import cz.dynawest.webttd.grid.TimedUnboundGrid;
import cz.dynawest.webttd.model.Cell;
import java.io.Serializable;


/**
 *
 * @author Ondrej Zizka
 */
public class CellsAreaMetaInfo extends GridView<Cell> implements Serializable
{

  public CellsAreaMetaInfo( TimedUnboundGrid<Cell> grid, int x1, int y1, int x2, int y2 ) {
    super( grid, x1, y1, x2, y2 );
  }


  public CellsAreaMetaInfo( TimedUnboundGrid<Cell> grid, Rect area ) {
    super( grid, area );
  }





}// class CellsArea

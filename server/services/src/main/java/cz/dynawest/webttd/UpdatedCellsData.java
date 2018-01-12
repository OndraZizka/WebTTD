
package cz.dynawest.webttd;


import cz.dynawest.webttd.grid.Rect;
import cz.dynawest.webttd.model.Cell;
import java.util.*;
import org.apache.commons.collections.list.UnmodifiableList;


/**
 *
 * @author Ondrej Zizka
 */
public class UpdatedCellsData {

  public final Rect area;
  
  private List<Cell> cells;
  public List<Cell> getCells(){ return cells; }

  public UpdatedCellsData( Rect area, List cells ) {
    this.area = area;
    this.cells = UnmodifiableList.decorate( cells );
  }


}// class UpdateData

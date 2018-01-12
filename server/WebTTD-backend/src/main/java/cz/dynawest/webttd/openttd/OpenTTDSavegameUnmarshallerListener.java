
package cz.dynawest.webttd.openttd;


import cz.dynawest.webttd.TtdGrid;
import cz.dynawest.webttd.grid.Rect;
import cz.dynawest.webttd.model.Cell;
import cz.dynawest.webttd.model.Cell.Building;
import cz.dynawest.webttd.model.Point;
import cz.dynawest.webttd.openttd.savebeans.*;
import java.util.logging.*;
import javax.xml.bind.Unmarshaller;


/**
 *
 * Save data -> this listener -> Game -> grid.
 *
 * @author Ondrej Zizka
 */
public class OpenTTDSavegameUnmarshallerListener extends Unmarshaller.Listener
{
  private static final Logger log = Logger.getLogger( OpenTTDSavegameUnmarshallerListener.class.getName() );

  /** Grid to write to. */
  private TtdGrid grid;

  /** In which area of the grid will the cells be written. */
  private Rect destinationArea;

  /** Next position to "write" the cell at. */
  private Point nextOffset;

  /** Done - ignore any further cells. */
  private boolean done = false;


  /** Const */
  public OpenTTDSavegameUnmarshallerListener( TtdGrid grid, Rect destinationArea ) {
    this.grid = grid;
    this.destinationArea = destinationArea;
    this.nextOffset = new Point(0,0);
  }

  

  @Override
  public void afterUnmarshal( Object target, Object parent ) {
    //  target - non-null instance of JAXB mapped class prior (?) to unmarshalling into it.
    //  parent - instance of JAXB mapped class that will reference target. null when target is root element.
    log.finer("Target: "+target+" Parent: "+((SaveFileBean)parent) );

    if( done )
      return;

    if( ! (parent instanceof SaveFileBean) )
      return;
    
    CellBean cellBean = (CellBean) target;
    /* Convert the cell bean to a WebTTD cell and put it to the grid.  */
    
    Point nextPos = this.destinationArea.getTopLeft().add( nextOffset );
    log.fine("Next offset / pos: " + nextOffset + " / " + nextPos);
    Cell cell = grid.getOrCreateCell( nextPos );

    if( cellBean instanceof BuildingCellBean ){
      cell.setType( Cell.Type.building );
      int buildingType = ((BuildingCellBean)cellBean).buildingType;
      Building bt = convertBuildingType( buildingType );
      cell.setBuilding( bt );
    }
    else if( cellBean instanceof RoadCellBean ){
      RoadCellBean roadCellBean = (RoadCellBean)cellBean;
      cell.setType( Cell.Type.road );
      cell.setRoads( roadCellBean.dirs );
    }
    else if( cellBean instanceof CellBean ){
      cell.setType( Cell.Type.plain );
    }


    // Advance to the next cell to be written.
    ++this.nextOffset.x;
    if( this.nextOffset.x >= this.destinationArea.width ){
      this.nextOffset.x = 0;
      ++this.nextOffset.y;

      // When we have covered the whole area, ignore any further cells.
      if( this.nextOffset.y >= this.destinationArea.height )
        done = true;
    }
    
  }


  /** Converts OpenTTD building type number to a WebTTD building type. */
  private Building convertBuildingType( int buildingType ) {
    // TODO
    return Building.cottage_small;
  }


}// class OpenTTDSavegameUnmarshallerListener

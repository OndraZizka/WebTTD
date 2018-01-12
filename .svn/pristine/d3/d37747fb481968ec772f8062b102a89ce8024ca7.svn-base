
package cz.dynawest.webttd;


import cz.dynawest.webttd.model.Cell;
import cz.dynawest.webttd.model.Point;
import java.util.logging.Logger;
import net.sf.json.JSONObject;


/**
 *
 * @author Ondrej Zizka
 */
public class SimpleJsonConverter implements JsonConverter
{
  private static final Logger log = Logger.getLogger( SimpleJsonConverter.class.getName() );
  

  /** Cells area to JSON. */
  public String toJson( CellsAreaMetaInfo area ){
    

    StringBuilder sb = new StringBuilder( area.getHeight() * area.getWidth() );

    sb.append("{ x1: ").append(area.getX1()).append(", y1: ").append(area.getY1());
    sb.append(", x2: ").append(area.getX2()).append(", y2: ").append(area.getY2());
    sb.append(", cells: [");
    
    // Rows
    for( int y = area.getY1(); y <= area.getY2(); y++ ){
      sb.append("[\n");
      // Cells
      for( int x = area.getX1(); x <= area.getX2(); x++ ){
        log.finest("y,x: "+y+","+x);
        sb.append( toJson( area.getOrCreateCell(x,y) ) );
        sb.append(", \n");
      }
      sb.append("], ");
    }
    sb.append("\n]");

    sb.append("}");

    return sb.toString();
  }


  /** Cell to JSON. */
  public String toJson( Cell cell ){
    JSONObject o = JSONObject.fromObject( cell );
    return o.toString();
  }


  /** Cells[][] to JSON. */
  public String toJson( Point pt, Cell[][] cells ){
    throw new UnsupportedOperationException();
  }

}// class JsonConverter

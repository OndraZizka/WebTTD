
package cz.dynawest.webttd.grid;


import cz.dynawest.util.Unmodifiable;
import java.io.Serializable;
import java.util.List;
import java.util.logging.Logger;



/**
 *
 * @author Ondrej Zizka
 */
@Unmodifiable
public class GridView<T> implements UnboundGrid<T>, Serializable
{
  private static final Logger log = Logger.getLogger( GridView.class.getName() );


  public GridView( TimedUnboundGrid<T> grid, Rect rect ) {
    this.grid = grid;
    this.x1 = rect.x;
    this.y1 = rect.y;
    this.x2 = rect.x + rect.width -1;
    this.y2 = rect.y + rect.height -1;
  }

  public GridView( TimedUnboundGrid<T> grid, int x1, int y1, int x2, int y2 ) {
    this.grid = grid;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }



  private TimedUnboundGrid<T> grid;

  private int x1;
  private int y1;
  private int x2;
  private int y2;

  @Override public int getX1() {    return x1;  }
  @Override public int getX2() {    return x2;  }
  @Override public int getY1() {    return y1;  }
  @Override public int getY2() {    return y2;  }

  @Override public int getWidth() {  return this.getX2() -  this.getX1() + 1;  }
  @Override public int getHeight() { return this.getX2() -  this.getX1() + 1; }

  public Rect getArea(){
    return new Rect( x1, y1, this.getWidth(), this.getHeight() );
  }


  public List<T> getUpdatedCellsSince( long since ) {
    return this.grid.getUpdatedCellsSince( this.getArea(), since );
  }



  @Override
  public T getOrCreateCell( int x, int y ) {
    return grid.getOrCreateCell( x, y );
  }


}// class GridView



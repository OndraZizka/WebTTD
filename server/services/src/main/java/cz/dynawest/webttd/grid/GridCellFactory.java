
package cz.dynawest.webttd.grid;


import cz.dynawest.webttd.model.Point;
import java.util.*;


/**
 *
 * @author Ondrej Zizka
 */
public interface GridCellFactory<T> {

  public T createCell( int x, int y );
  public T createCell( Point pt );

}// class GridCellFactory

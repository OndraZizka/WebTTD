
package cz.dynawest.webttd.grid;

import java.util.List;

/**
 *
 * @author Administrator
 */
public interface TimedUnboundGrid<T> extends UnboundGrid<T> {

  List<T> getUpdatedCellsSince( Rect area, long since );

}// class TimedUnboundGrid

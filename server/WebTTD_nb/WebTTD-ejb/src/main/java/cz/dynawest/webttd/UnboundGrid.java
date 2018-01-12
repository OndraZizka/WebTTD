
package cz.dynawest.webttd;

/**
 *
 * @author Administrator
 */
public interface UnboundGrid<T> {

  public T getOrCreateCell(int x, int y);

  public int getX1();
  public int getY1();

  public int getX2();
  public int getY2();

  public int getWidth();
  public int getHeight();

}// class UnboundGrid


package cz.dynawest.webttd.model;

import javax.persistence.Embeddable;

/**
 *
 * @author Ondrej Zizka
 */
@Embeddable
public class Point extends java.awt.Point {

  public Point( int x, int y ) {    super( x, y );  }
  public Point( Point p ) {    super( p );  }
  public Point() {  }


  public Point add( Point pt ){
    return new Point( this.x + pt.x, this.y + pt.y );
  }


  @Override
  public String toString() {
    return "["+x+","+y+"]";
  }



}// class Point


package cz.dynawest.webttd.grid;


import java.awt.Dimension;
import cz.dynawest.webttd.model.Point;
import java.awt.Rectangle;
import java.io.Serializable;


/**
 *
 * @author Ondrej Zizka
 */
public class Rect extends Rectangle implements Serializable   {

  public Rect( Point p, Dimension d ) {    super( p, d );  }
  public Rect( int width, int height ) {    super( width, height );  }
  public Rect( int x, int y, int width, int height ) {    super( x, y, width, height );  }
  public Rect( Rectangle r ) {    super( r );  }


  public Point getTopLeft(){
    return new Point( this.x, this.y );
  }

  public Point getBottomRight(){
    return new Point( this.x + this.width, this.y + this.height );
  }

  
}// class Rect

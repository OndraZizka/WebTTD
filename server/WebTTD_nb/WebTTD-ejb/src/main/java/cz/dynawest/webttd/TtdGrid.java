
package cz.dynawest.webttd;


import cz.dynawest.webttd.model.*;
import java.awt.Rectangle;
import java.util.*;


/**
 *
 * @author Ondrej Zizka
 */
public class TtdGrid extends TiledGrid {

  public TtdGrid( Rectangle area ) {
    super( area );
  }  

  /**
   * Verifies whether given track is valid road path.
   * @param track
   * @return
   */
  public boolean verifyRoadPath( Track track, boolean build ){
    // TODO...
    return true;
  }

}// class TtdGrid

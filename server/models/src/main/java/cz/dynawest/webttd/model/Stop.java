
package cz.dynawest.webttd.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 *
 * @author Ondrej Zizka
 */
@Entity
public class Stop implements Serializable
{
  @Id private Long id;
  public Long getId() {    return id;  }


  @Embedded
  private Point coords;
  public Point getCoords() {    return coords;  }


  private Station station;
  public Station getStation() {    return station;  }


}// class Stop

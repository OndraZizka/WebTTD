
package cz.dynawest.webttd.model;

import java.io.Serializable;
import java.util.*;
import javax.persistence.*;

/**
 *
 * @author Ond�ej �i�ka
 */
@Entity
public class Station implements Serializable {

  @Id  private Long id;
  public Long getId() {    return id;  }
  
  public String name;
  public Point homeCell;

  public Map<CargoType, Integer> waiting = new HashMap( CargoType.values().length );


  /** Const */
  public Station() {  }
  public Station( String name, Point homeCell ) {
    this.name = name;
    this.homeCell = homeCell;
  }

  

}// class Station

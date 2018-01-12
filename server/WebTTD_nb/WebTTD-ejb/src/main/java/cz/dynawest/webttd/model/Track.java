
package cz.dynawest.webttd.model;

import java.io.Serializable;
import java.util.*;
import java.util.ArrayList;
import javax.persistence.*;

/**
 *
 * @author Ond�ej �i�ka
 */
@Entity
public class Track implements Serializable
{

  @Id private Long id;
  public Long getId() {    return id;  }

  private Stop fromStop;
  private Stop toStop;

  private List<Point> points = new ArrayList();


}// class Track


package cz.dynawest.webttd.model;

import java.util.*;
import javax.persistence.*;

/**
 *
 * @author Ondrej Zizka
 */
@Entity
public class Plan
{


  @Id private Long id;
  public Long getId() {    return id;  }


  private List<Track> tracks = new ArrayList();


}// class Plan

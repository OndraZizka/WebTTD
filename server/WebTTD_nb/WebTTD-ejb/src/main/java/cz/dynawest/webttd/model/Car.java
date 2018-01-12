
package cz.dynawest.webttd.model;

import javax.persistence.*;

/**
 *
 * @author Ondøej Žižka
 */
@Entity
public class Car {

  @Id private Long id;
  public Long getId() {    return id;  }

  private String name;
  public String getName() {    return name;  }
  public void setName( String name ) {    this.name = name;  }

  private Plan plan;

}// class Car

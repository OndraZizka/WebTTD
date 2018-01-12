
package cz.dynawest.webttd.model;

import javax.persistence.*;

/**
 *
 * @author Ondrej Zizka
 */
@Entity
@Table(name="cities")
public class City {

  @Id private Long id;
  public Long getId() {    return id;  }

  private String name;
  @Embedded private Point homeCell;
  private int population;

  public City() {}
  public int getPopulation() {    return population;  }

  /** Const */
  public City( String name, Point homeCell ) {
    this.name = name;
    this.homeCell = homeCell;
  }




}// class City

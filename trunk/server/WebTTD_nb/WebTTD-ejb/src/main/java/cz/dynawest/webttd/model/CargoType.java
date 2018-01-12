
package cz.dynawest.webttd.model;

/**
 *
 * @author Ondøej Žižka
 */
public enum CargoType {

  PASSANGERS(), MAIL("bags"),
  COAL("tons"), OIL("litres"),
  WOOD("tons"), GOODS("crates"), VALUABLES("tons");

  //public final String name;
  public final String unit;


  /** Const */
  private CargoType( String unit ) {
    this.unit = unit;
  }

  private CargoType() {
    this.unit = null;
  }

  
  public final String asString( int amount ){
    if( this.unit == null )
      return amount+" "+this.name();

    return amount+" "+this.unit+" of "+this.name();
  }



}// class CargoType

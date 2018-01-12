
package cz.dynawest.webttd.modifiers;


import cz.dynawest.webttd.Game;
import cz.dynawest.webttd.model.*;


/**
 *
 * @author Ondrej Zizka
 */
class CityGrower extends Modifier {

  public CityGrower( Game game ) {
    super( game );
  }

  

  public void growCity( City city ){
    // TODO: Put some new houses at free cells around the city center.
    // Growth depends on the population, transportation, etc.
  }


}// class CityGrower

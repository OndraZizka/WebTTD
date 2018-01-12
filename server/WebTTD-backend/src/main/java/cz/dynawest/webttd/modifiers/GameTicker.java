
package cz.dynawest.webttd.modifiers;


import cz.dynawest.webttd.*;
import cz.dynawest.webttd.model.City;
import cz.dynawest.webttd.model.Station;
import java.util.*;
import java.util.logging.Logger;


/**
 *  GameTicker modifies the world:
 *
 *   * Waiting transportables in stations
 *   * Towns growth
 *   * Industry production adjustments
 *   * Failures, disasters...
 *   * Subsidies
 *
 * @author Ondrej Zizka
 */
public class GameTicker {

  private static final Logger log = Logger.getLogger( GameTicker.class.getName() );

  // Backref
  private Game game;

  private CityGrower cityGrower;
  private StationUpdater stationUpdater;


  public GameTicker( Game game ) {
    this.game = game;
  }


  /**
   *  Performs a game tick.
   */
  public void tick()
  {
    log.fine("Tick!");
    game.touch();


    // Update waiting transportables in stations.
    List<Station> stations = game.getData().getStations();
    if( null != stations )
    for( Station station : stations ) {
      stationUpdater.updateStation( station );
    }

    // Grow the cities.
    List<City> cities = game.getData().getCities();
    if( null != cities )
    for( City city : cities ) {
      cityGrower.growCity( city );
    }

  }

}// class GameTicker

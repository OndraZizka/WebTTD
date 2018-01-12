
package cz.dynawest.webttd;

import cz.dynawest.webttd.Game.State;

/**
 *
 * @author Administrator
 */
public interface GameLocal {

  TtdData getData();


  State getState();


  boolean isRunning();


  boolean isStopped();


  /**
   * Pause.
   */
  void pause();


  /**
   * Run the game.
   */
  void run();

}// class GameLocal

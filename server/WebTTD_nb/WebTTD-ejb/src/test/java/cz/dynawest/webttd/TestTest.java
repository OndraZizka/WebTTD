
package cz.dynawest.webttd;


import java.util.*;
import org.testng.annotations.Test;

/**
 *
 * @author Ondrej Zizka
 */
public class TestTest {

  //@Test
  public void testGrid() throws InterruptedException
  {
    Game game = new Game();
    game.init();
    game.run();
    Thread.sleep( 5000 );
    game.stop();
  }

}// class TestTest

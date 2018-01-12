
package cz.dynawest.webttd;


/**
 *
 * @author Ondrej Zizka
 */
public class TtdGridTestBase extends TtdTestBase {

  protected Game game;


  @Override
  protected void setUp() throws Exception {
    super.setUp();
    game = new Game();
    game.init();
    log.info( "Game: "+game );
  }


  @Override
  protected void tearDown() throws Exception {
    log.info( "Game: "+game );
    super.tearDown();
  }



}// class TtdGridTestBase

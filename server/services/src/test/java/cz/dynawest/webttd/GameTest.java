
package cz.dynawest.webttd;


import cz.dynawest.webttd.model.Cell;
import cz.dynawest.webttd.grid.Rect;
import cz.dynawest.webttd.model.Point;
import java.util.List;
import java.util.logging.Logger;
import net.sf.json.JSONArray;
import org.apache.commons.lang.math.NumberUtils;
import org.testng.annotations.Test;

/**
 *
 * @author Ondrej Zizka
 */
public class GameTest extends TtdGridTestBase
{
  private static final Logger log = Logger.getLogger( GameTest.class.getName() );


  //@Test(enabled=false)
  public void XtestRun() throws InterruptedException
  {
    Game game = new Game();
    game.init();
    game.run();
    Thread.sleep( 2000 );
    game.stop();
  }



  @Test
  public void XtestGridGetCell()
  {
    TtdGrid land = game.getLand();
    Cell cell55 = land.getOrCreateCell(5,5);

    log.info( "Cell from [5,5]: "+cell55 );
    assertNotNull( cell55 );
  }



  @Test
  public void XtestGridChangeCell()
  {
    TtdGrid land = game.getLand();
    Cell cell55 = land.getOrCreateCell(5,5);

    log.info( "Cell from [5,5]: "+cell55 );
    assertNotNull( cell55 );

    cell55.setRoads("NS");

    cell55 = land.getOrCreateCell(5,5);
    assertEquals( cell55.getRoads(), "NS" );
  }



  @Test
  public void XtestGridGetArea20x20()
  {
    TtdGrid land = game.getLand();

    Cell cell55 = land.getOrCreateCell(3,3);
    cell55.setRoads("NS");

    CellsAreaMetaInfo view = land.createView( new Rect(-10,-10, 20,20) );
    SimpleJsonConverter conv = new SimpleJsonConverter();
    String jsonStr = conv.toJson( view );
    //System.out.println( "JSON: "+jsonStr );
  }



  @Test
  public void testGridGetArea4x4()
  {
    TtdGrid land = game.getLand();

    Cell cell55 = land.getOrCreateCell( new Point(1,1) );
    cell55.setRoads("NS");

    CellsAreaMetaInfo view = land.createView( new Rect(-2,-2, 4,4) );
    SimpleJsonConverter conv = new SimpleJsonConverter();
    String jsonStr = conv.toJson( view );
    System.out.println( "JSON: "+jsonStr );
  }



  
  @Test
  public void XtestGridCellsUpdatedSince(){
    TtdGrid land = game.getLand();

    Cell cell55 = land.getOrCreateCell(3,3);
    cell55.setRoads("NS");
    cell55 = land.getOrCreateCell(3,2);
    cell55.setRoads("NS");
    cell55 = land.getOrCreateCell(3,1);
    cell55.setRoads("NS");

    CellsAreaMetaInfo view = land.createView( new Rect(-4,-4, 8,8) );
    //game.getLand().getUpdatedCellsSince( new Rect( x, y, width, height ), since );
    List<Cell> updatedCells = view.getUpdatedCellsSince( game.getTimestamp() - 10 );

    String jsonStr = JSONArray.fromObject( updatedCells ).toString();

    System.out.println( "JSON: "+jsonStr );
  }






  public void XtestModulo(){
    for( int i = -11; i <= 11; i++)
      log.info(i+": "+ getLowerBound( i ));
      //log.info(i+": "+ getUpperBound( i ));
  }

  private int getUpperBound( int i ){
    final int TILE_SIZE = 10;
    final int mod = i % TILE_SIZE;
    if( mod == 0 )
      return i;

    if( i >= 0 )
      return i - mod + TILE_SIZE;
    else
      return i - mod;
  }


  private int getLowerBound( int i ){
    final int TILE_SIZE = 10;
    final int mod = i % TILE_SIZE;
    if( mod == 0 )
      return i;

    if( i >= 0 )
      return i  -  i % TILE_SIZE;
    else {
      //return i - (TILE_SIZE + (i-1) % TILE_SIZE) -1;
      return i - mod - TILE_SIZE;
    }
  }


}// class TestTest

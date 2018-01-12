
package cz.dynawest.webttd.openttd;


import cz.dynawest.webttd.TtdGridTestBase;
import cz.dynawest.webttd.TtdTestBase;
import cz.dynawest.webttd.grid.Rect;
import cz.dynawest.webttd.openttd.savebeans.BuildingCellBean;
import cz.dynawest.webttd.openttd.savebeans.CellBean;
import cz.dynawest.webttd.openttd.savebeans.RoadCellBean;
import cz.dynawest.webttd.openttd.savebeans.SaveFileBean;
import java.io.File;
import java.util.*;
import java.util.logging.*;
import javax.xml.bind.*;


/**
 *
 * @author Ondrej Zizka
 */
public class JaxbTest extends TtdGridTestBase
{
  private static final Logger log = Logger.getLogger( JaxbTest.class.getName() );

  private static final String SAVE_XML_FILE = "t:\\_projekty\\WebTTD\\java\\server\\SaveTransformer\\MestaXml.xml";


  /** */
  public void testSaveMarshall() throws JAXBException {

    JAXBContext jaxb = JAXBContext.newInstance( SaveFileBean.class );
    Marshaller marsh = jaxb.createMarshaller();


    SaveFileBean save = new SaveFileBean();
    save.cells = new ArrayList<CellBean>();
    save.cells.add( new CellBean() );
    save.cells.add( new RoadCellBean() );
    save.cells.add( new BuildingCellBean() );

    log.info("Cells saved: ");
    marsh.marshal( save, System.out ); // new File("target/OpenTTDSaveJaxbTest.xml")
    System.out.println( "" );

  }



  /** */
  public void testSaveUnmarshall() throws JAXBException {

    JAXBContext jaxb = JAXBContext.newInstance( SaveFileBean.class );
    Unmarshaller unmarshaller = jaxb.createUnmarshaller();
    SaveFileBean res = (SaveFileBean) unmarshaller.unmarshal( new File( SAVE_XML_FILE ) );

    /*log.info("Cells:");
    for( CellBean cell : res.cells ){
      log.finest( "  * "+cell );
    }/**/

  }



  /** With listener. */
  public void testSaveUnmarshallWithListener() throws JAXBException {

    JAXBContext jaxb = JAXBContext.newInstance( SaveFileBean.class );
    Unmarshaller unmarshaller = jaxb.createUnmarshaller();
    unmarshaller.setListener(
            new OpenTTDSavegameUnmarshallerListener( this.game.getLand(), new Rect( -31, -31, 62, 62 ) )
    );
    SaveFileBean res = (SaveFileBean) unmarshaller.unmarshal( new File( SAVE_XML_FILE ) );

    // Show what is now in the grid.
    log.info( "Resulting grid after loading: " + this.game.getLand().toString() );

  }

}// class JaxbTest

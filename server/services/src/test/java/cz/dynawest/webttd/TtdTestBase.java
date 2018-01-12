
package cz.dynawest.webttd;


import cz.dynawest.logging.LoggingUtils;
import java.util.logging.Logger;
import junit.framework.TestCase;
import org.testng.annotations.Test;


/**
 *
 * @author Ondrej Zizka
 */
@Test(enabled=false)
public class TtdTestBase extends TestCase
{
  Logger log = Logger.getLogger( TtdTestBase.class.getName() );
  static {
    LoggingUtils.initLogging();
  }


  @Override
  protected void setUp() throws Exception {
    super.setUp();
    log.info("\n============================================================\n" +
            "  Setting up:  "+ this.getName() + "\n" +
            "============================================================\n");
  }


  @Override
  protected void tearDown() throws Exception {
    super.tearDown();
    log.info("\n=======  Tearing down:  "+ this.getName() + "  ============\n");
  }

  

}// class TtdTestCase

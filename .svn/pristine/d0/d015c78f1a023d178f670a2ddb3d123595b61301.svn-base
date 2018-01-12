
package cz.dynawest.webttd.openttd.savebeans;


import java.io.Serializable;
import java.util.*;
import java.util.logging.*;
import javax.xml.bind.annotation.*;


/**
 *
 * @author Ondrej Zizka
 */
@XmlRootElement(name="load")
public class SaveFileBean implements Serializable
{
  private static final Logger log = Logger.getLogger( SaveFileBean.class.getName() );

  @XmlElementWrapper(name="cells")
  @XmlElements(
  {
    @XmlElement(name="cell", type=CellBean.class),
    @XmlElement(name="buildingCell", type=BuildingCellBean.class),
    @XmlElement(name="roadCell", type=RoadCellBean.class)
  })
  public List<CellBean> cells;

  
  @Override
  public String toString() {
    //return "Cells: ["+StringUtils.join( this.cells, "," )+"]";
    return "SaveFileBean{"+(this.cells == null ? "null" : (cells.size()+" cells") ) +"}";
  }


}// class SaveFileBean

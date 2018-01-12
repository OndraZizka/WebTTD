
package cz.dynawest.webttd.openttd.savebeans;


import java.io.Serializable;
import javax.xml.bind.annotation.*;



/**
 *
 * @author Ondrej Zizka
 */
@XmlType(name="roadCell")
public class RoadCellBean extends CellBean implements Serializable
{
  
  @XmlAttribute
  public String dirs;

}// class RoadCellBean

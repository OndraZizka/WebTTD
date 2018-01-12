
package cz.dynawest.webttd.openttd.savebeans;


import java.io.Serializable;
import javax.xml.bind.annotation.*;

/**
 *
 * @author Ondrej Zizka
 */
@XmlType(name="buildingCell")
public class BuildingCellBean extends CellBean implements Serializable
{

  @XmlAttribute
  public int buildingType;

}// class BuildingCellBean

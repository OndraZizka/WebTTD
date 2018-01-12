
package cz.dynawest.webttd.openttd.savebeans;


import javax.xml.bind.annotation.*;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 *
    <cell ownerType="NOBODY" owner="0" height="1" />
    <buildingCell buildingType="26"  ownerType="NOBODY" owner="0" height="1" />
    <roadCell dirs="WE"  ownerType="TOWN" owner="0" height="1" />
 *
 *
 * @author Ondrej Zizka
 *
 */
@XmlSeeAlso({BuildingCellBean.class, RoadCellBean.class})
public class CellBean
{

  //@XmlEnum
  public enum OwnerType { NOBODY, TOWN, PLAYER }


  @XmlAttribute
  public int owner;

  @XmlAttribute
  public OwnerType ownerType;
  /*
  public OwnerType getOwnerType() {    return ownerType;  }
  public void setOwnerType( OwnerType ownerType ) {    this.ownerType = ownerType;  }
   */


  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString( this );
  }


}// class CellBean

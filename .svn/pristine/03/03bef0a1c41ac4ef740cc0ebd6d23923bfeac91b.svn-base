
package cz.dynawest.webttd.model;

import javax.xml.bind.annotation.*;
import org.apache.commons.lang.StringUtils;


/**
 *
 * @author Ondrej Zizka
 */
@XmlType(propOrder={"x","y","roads"})
public class Cell implements Cloneable {

  @XmlAttribute int x;
  @XmlAttribute int y;

  public int getX() { return x; }
  public int getY() { return y; }


  @XmlAttribute long lastChanged = 0; // TimeStamp



  // --- Cell data --- //


  // Type
  @XmlAttribute private Type type = Type.plain;
  public Type getType() {    return type;  }
  public void setType( Type type ) {    this.type = type;  }


  // Building
  @XmlAttribute private Building building = Building.none;
  public Building getBuilding() {    return building;  }
  public void setBuilding( Building building ) {    this.building = building;  }


  // Roads
  private RoadDirs2 roads = RoadDirs2.NONE;

  /** "[N][S][W][E]" */
  public void setRoads( String roads ){
    //this.roads = new RoadDirs( roads );
    if( "".equals(roads))
      this.roads = RoadDirs2.NONE;
    else
      this.roads = RoadDirs2.valueOf( normalizeRoadsStr(roads) );
  }

  public String getRoads(){ return this.roads.string; }



  public static String normalizeRoadsStr( String str ){
    int flags = 0x0;
    byte[] chars = StringUtils.substring(str,0,4).getBytes();
    for( int i = 0; i < chars.length && i < 4; i++ ){
      if( chars[i] == 'N' )  flags |= 0x1;
      if( chars[i] == 'S' )  flags |= 0x2;
      if( chars[i] == 'W' )  flags |= 0x4;
      if( chars[i] == 'E' )  flags |= 0x8;
    }
    int pos = 0;
    byte[] newChars = new byte[4];
    if( (flags & 0x1) != 0 ) newChars[pos++] = 'N';
    if( (flags & 0x2) != 0 ) newChars[pos++] = 'S';
    if( (flags & 0x4) != 0 ) newChars[pos++] = 'W';
    if( (flags & 0x8) != 0 ) newChars[pos++] = 'E';
    //newChars[pos] = 0x0;
    return new String(newChars, 0, pos);
  }





  /** Const */
  public Cell( int x, int y ) {
    this.x = x;
    this.y = y;
  }
  public Cell( Point pt ) {
    this.x = pt.x;
    this.y = pt.y;
  }








  /* ------ Inner classes ----- */



  public enum Type {
    plain, building, industry, rail, road, roadStop;
  }


  public enum Building {
    none, cinema, cotagge_tall, cottage_small, cottage_small2, cottage_small3, cottage_small4,
    flats_gray, flats_overhang, flats0, flats1, flats2, flats3, flats4, fountain,
    hanging, hotel, house_modern, house_modern2, house_pool, house_swiss, houses_2garage, houses_2garden,
    houses_3, houses_3garden, church, office_tower, offices_block_modern, offices_modern,
    park1, park2, shop_mall, shop_small, shops_and_offices, shops_and_offices2, shops_modern,
    stadium_american, stadium_soccer, statue, theater, warehouse;
  }


  /** Road directions enum. */
  public enum RoadDir {
    NONE(0), N(0x1), S(0x2), W(0x4), E(0x8);
    final int value;
    RoadDir( int value ){ this.value = value; }
  }


  public enum RoadDirs2 {
    NONE, N, S, W, E, NS, NW, NE, NSW, NSE, NWE, NSWE, SW, SE, SWE, WE;

    final int flags;
    final String string;

    /** Constructor: Pre-computes flags from the enum member's name. */
    RoadDirs2() {

      final String dirs = this.name();
      if( "NONE".equals(dirs) ){
        this.flags = 0;
        this.string = "";
        return;
      }

      int fl = 0;
      for( int i = 0; i < dirs.length(); i++ ) {
        switch( dirs.charAt( i ) ){
          case 'N': fl |= RoadDir.N.value; break;
          case 'S': fl |= RoadDir.S.value; break;
          case 'W': fl |= RoadDir.W.value; break;
          case 'E': fl |= RoadDir.E.value; break;
        }
      }
      this.flags = fl;
      this.string = dirs;
    }
  }


  /**
   * Road directions set, based on the RoadDir enum.
   * @Immutable
   */
  public final class RoadDirs {

    // TODO: make unmodifiable.
    int flags;
    String string;

    /** "[N][S][W][E]" */
    public RoadDirs( String dirs ) {
      this.set( dirs );
    }
    public RoadDirs() {
      this.flags = 0;
      this.string = "";
    }

    /** "[N][S][W][E]" */
    private void set( String dirs ){
      int fl = 0;
      dirs = dirs.toUpperCase();
      for( int i = 0; i < dirs.length(); i++ ) {
        switch( dirs.charAt( i ) ){
          case 'N': fl |= RoadDir.N.value; break;
          case 'S': fl |= RoadDir.S.value; break;
          case 'W': fl |= RoadDir.W.value; break;
          case 'E': fl |= RoadDir.E.value; break;
        }
      }
      this.flags = fl;
      this.string = dirs;
    }

    /** N = 0x1 .. E = 0x8 */
    private void set( int dirs ){
      StringBuilder sb = new StringBuilder(4);
      if( (dirs & RoadDir.N.value) == 0 ) sb.append('N');
      if( (dirs & RoadDir.S.value) == 0 ) sb.append('S');
      if( (dirs & RoadDir.W.value) == 0 ) sb.append('W');
      if( (dirs & RoadDir.E.value) == 0 ) sb.append('E');
      this.string = sb.toString();
      this.flags = dirs;
    }

    /** toString() */
    public final String toString(){ return this.string; }
    
  }// class RoadDirs



  public enum RailDir {
    NONE(0), NS(0x1), NW(0x2), NE(0x4), SW(0x8), SE(0x16), WE(0x32);
    int value;
    RailDir( int value ){ this.value = value; }
  }






}// class Cell

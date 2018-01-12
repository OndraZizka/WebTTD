
package cz.dynawest.webttd.model;

/**
 *
 * @author Ondrej Zizka
 */
public class Cell {

  int x;
  int y;

  long lastChanged = 0; // TimeStamp

  private Type type = Type.plain;
  private Building building = Building.none;
  private RoadDirs roads = new RoadDirs();



  /** Const */
  public Cell( int x, int y ) {
    this.x = x;
    this.y = y;
  }

  public void setRoads( String roads ){
    this.roads = new RoadDirs( roads );
  }

  public int getX() { return x; }
  public int getY() { return y; }






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


  public enum RoadDir {
    NONE(0), N(0x1), S(0x2), W(0x4), E(0x8);
    final int value;
    RoadDir( int value ){ this.value = value; }
  }

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
    public void set( String dirs ){
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
    public void set( int dirs ){
      StringBuilder sb = new StringBuilder(4);
      if( (dirs & RoadDir.N.value) == 0 ) sb.append('N');
      if( (dirs & RoadDir.S.value) == 0 ) sb.append('S');
      if( (dirs & RoadDir.W.value) == 0 ) sb.append('W');
      if( (dirs & RoadDir.E.value) == 0 ) sb.append('E');
      this.string = sb.toString();
      this.flags = dirs;
    }
    
  }


  public enum RailDir {
    NONE(0), NS(0x1), NW(0x2), NE(0x4), SW(0x8), SE(0x16), WE(0x32);
    int value;
    RailDir( int value ){ this.value = value; }
  }






}// class Cell

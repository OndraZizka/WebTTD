
public class Cell {

    enum CellClass { GROUND, RAIL, ROAD, BUILDING, TREES, STATION, WATER, VOID, INDUSTRY, TUNNEL, VARIOUS }
    enum OwnerType { NOBODY, PLAYER, TOWN }

    CellClass cls;
    byte height;
    OwnerType ownerType = OwnerType.NOBODY;
    int owner;

    String toXML(){
      return "<cell ownerType=\"$ownerType\" owner=\"$owner\" height=\"$height\" />"
    }

    static Cell create( m )
    {
      CellClass cls;
      Cell cell;
      // Tile class.
      byte typeNum = m[0] >> 4;
      //println "Cls: $typeNum"
      switch( typeNum ){
          case 0: cls = CellClass.GROUND;   cell = new GroundCell(); break;
          case 1: cls = CellClass.RAIL;     break;
          case 2: cls = CellClass.ROAD;     cell = createRoadCell    ( m ); break;
          case 3: cls = CellClass.BUILDING; cell = createBuildingCell( m ); break;
          case 4: cls = CellClass.TREES;    cell = new GroundCell(); cell.trees = true;  break;
          case 5: cls = CellClass.STATION;  break;
          case 6: cls = CellClass.WATER;    break;
          // Tiles of this class form an invisible, one tile wide border at the south (bottom) edges of the map,
          // so as to protect several algorithms from the consequences of a wraparound at the edges.
          case 7: cls = CellClass.VOID;     break; // Void cells at the borders.
          case 8: cls = CellClass.INDUSTRY; cell = createIndustryCell( m ); break;
          case 9: cls = CellClass.TUNNEL;   break;
          case 10: cls = CellClass.VARIOUS; break;
      }
      if( null == cell && cls != CellClass.VOID ){
          println( "Unknown cell class: " + typeNum + "  m[0]: " + m[0] );
          return null;
      }

      // North corner height.
      cell.height = m[0] & 0xF;

      // m1: owner type of the road type 0 (normal road)
      switch( m[1] ){
        case 0x00: cell.ownerType = OwnerType.PLAYER; break;
        case (0x01..0x08): cell.ownerType = OwnerType.PLAYER; break;
        case 0x0F: cell.ownerType = OwnerType.TOWN; break;
        case 0x10: cell.ownerType = OwnerType.NOBODY; break;
        default: cell.ownerType = OwnerType.NOBODY; break;
      }

      cell.owner = m[2];

      return cell;
    }

  
    /*
     * Helpers
     */
    static boolean isBitSet( int value, int index ){
        return ((value >> index) & 1) != 0;
    }

  
    /**
     *  Road
     */
    static RoadCell createRoadCell( m ){

        RoadCell cell = new RoadCell();

        // m5 bit 7 clear: road or level-crossing
        if( ! isBitSet(m[5], 7) ){
            // m5 bit 6 clear: road
            if( ! isBitSet(m[5], 6) ){
                // m5 bits 3..0: road layout road type 0 (normal road): bit set = road piece present:
                //bit 0-3: NW, SW, SE, NE
                // In WebTTD: bit 0-3: W, S, E, N
                cell.dirs = m[5] & 0xFF;
            }
        }
        // m5 bit 7 set, bit 6 clear: road depot
        else {
            if( ! isBitSet(m[5], 6) ){ /* Road depot */ }
        }
        return cell;
    }

    /**
     *  Building
     */
    static BuildingCell createBuildingCell( m ){
        BuildingCell cell = new BuildingCell();
        cell.ownerType = OwnerType.TOWN;
        cell.owner = m[2];
        //m4 : town building type (with m3[6] bit)
        cell.buildingType = m[4] | (m[3] >> 5 & 0x1);
        return cell;
    }

}

public class GroundCell extends Cell {
  boolean trees = false;
}

public class RoadCell extends Cell {
    byte dirs;

    String getDirsAsString(){
      String ret = '';
      // Bit 0-3: NW, SW, SE, NE
      // In WebTTD: bit 0-3: W, S, E, N
      if( dirs & 0x8 ) ret += 'N';
      if( dirs & 0x1 ) ret += 'W';
      if( dirs & 0x2 ) ret += 'S';
      if( dirs & 0x4 ) ret += 'E';
      return ret;
    }

    String toString(){  return "RoadCell{ dirs: $dirs }" }
    String toXML(){
      String s = super.toXML();
      return s.replace('<cell', "<roadCell dirs=\""+getDirsAsString()+"\" ");
    }
}

public class BuildingCell extends Cell {
    byte buildingType;

    String toString(){ return "BuildingCell{ buildingType: "+this.buildingType+" }"; }
    String toXML(){
      String s = super.toXML();
      return s.replace('<cell', "<buildingCell buildingType=\"$buildingType\" ");
    }
}

public class IndustryCell extends Cell {
  
}

package cz.dynawest.webttd;

import cz.dynawest.webttd.model.Cell;
import cz.dynawest.webttd.model.Point;

import org.codehaus.jackson.map.AnnotationIntrospector;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.xc.JaxbAnnotationIntrospector;


/**
 *
 * @author Ondrej Zizka
 */
public class JacksonJsonConverter implements JsonConverter {

  ObjectMapper mapper;

  // Const 
  public JacksonJsonConverter() {
    mapper = new ObjectMapper();
    AnnotationIntrospector introspector = new JaxbAnnotationIntrospector();
    mapper.getDeserializationConfig().setAnnotationIntrospector(introspector);
    mapper.getSerializationConfig().setAnnotationIntrospector(introspector);
    //mapper.getSerializationConfig().setDateFormat( new SimpleDateFormat("yyyy-MM-dd") );
  }



  @Override
  public String toJson( CellsAreaMetaInfo area ) {
    throw new UnsupportedOperationException( "Not supported yet." );
  }


  @Override
  public String toJson( Cell cell ) throws WebTTDException {
    try {
      return mapper.writeValueAsString( cell );
    }
    catch( Exception ex ) {
      throw new WebTTDException( ex.getMessage(), ex );
    }
  }


  @Override
  public String toJson( Point pt, Cell[][] cells ) {
    throw new UnsupportedOperationException( "Not supported yet." );
  }

}// class JacksonJsonConverter

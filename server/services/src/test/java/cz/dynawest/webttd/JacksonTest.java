
package cz.dynawest.webttd;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.xml.bind.annotation.*;
import org.codehaus.jackson.map.AnnotationIntrospector;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.xc.JaxbAnnotationIntrospector;



/**
 *
 * @author Ondrej Zizka
 */
public class JacksonTest {

  public void testJackson() throws IOException
  {
    ObjectMapper mapper = new ObjectMapper();
    AnnotationIntrospector introspector = new JaxbAnnotationIntrospector();
    // make deserializer use JAXB annotations (only)
    mapper.getDeserializationConfig().setAnnotationIntrospector(introspector);
    // make serializer use JAXB annotations (only)
    mapper.getSerializationConfig().setAnnotationIntrospector(introspector);
    mapper.getSerializationConfig().setDateFormat( new SimpleDateFormat("yyyy-MM-dd") );

    mapper.writeValue( System.out, new Car("Red Devil") );
  }

}// class JacksonTest



@XmlRootElement
class Car {
  @XmlAttribute
  public String name;

  @XmlElement
  public String owner = "foo";

  @XmlAttribute
  public Date manufactured = new Date();

  public Car( String name ) {
    this.name = name;
  }
}
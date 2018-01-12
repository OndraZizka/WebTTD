import java.util.regex.*
import java.lang.*;
import groovy.xml.DOMBuilder
//import groovy.xml.dom.DOMCategory



/*
def docElm = parseXmlDump("MestaXml.log");
use (DOMCategory) {
  def chunksText = docElm.chunks;
  print chunksText;
}*/

def data = loadRawCellsData("MestaXml.log");
processXmlDump( data, 'MestaXml.log', 'MestaXml.xml');

return;

storeRawData( data, 'MestaCut-raw.txt' );
storeCellsAsXml( data, 'MestaCut.xml' );



/**
 *  Parses the XML dump, returns documentElement.
 *  Bootloader error: http://jira.codehaus.org/browse/GROOVY-3914
 */
def parseXmlDump( String filePath ){
  //def reader  = new StringReader(XmlExamples.CAR_RECORDS)
  def doc  = DOMBuilder.parse(new FileReader(filePath));
  def docElm = doc.documentElement;
  return docElm;
}


/**
 * Process the file with raw data and output the file with pure XML.
 */
void processXmlDump( data, String inFilePath, String outFilePath ){

  def fos = new FileOutputStream(outFilePath);

  Matcher matcher = "" =~ /Load_MAP([0-9ST])\(\): ([0-9]+) ([0-9]+).*/ ;
  boolean skip = false; 

  new File( inFilePath ).eachLine {  ln ->
    while( true ) {
      if( ln.size() == 0 ) break;

      // Skip the lines with raw cell data.
      /*matcher.reset( ln );
      if( matcher.matches() ) break; /**/
      if( ln =~ / *<chunks>/ )
        skip = true;
      if( ! skip )
        fos.write( (ln+"\n").getBytes() );
      if( ln =~ / *<\/chunks>/ ){
        skip = false;
        fosWriteln fos, '  <cells>';
        storeCellsAsXml( data, fos );
        fosWriteln fos, '  </cells>';
      }
      break;
    }
  }
}

void fosWriteln( fos, String str ){
  fos.write( (str+'\n').getBytes() );
}


/**
 *  Write the transformed structure to a file.
 */
void storeRawData( data, String filePath ){
  FileOutputStream fos = new FileOutputStream(filePath);
  storeRawData( data, fos );
  fos.close();
}
void storeRawData( data, FileOutputStream fos ){
  data.eachWithIndex { it, i ->
    fosTrans.write( ("$i: "+it.toString()+"\n").getBytes() );
  }
}


/**
 * Stores the cells from the List as XML.
 */
void storeCellsAsXml( data, String filePath ){
  FileOutputStream fos = new FileOutputStream(filePath);
  storeCellsAsXml( data, fos );
  fos.close();
}

void storeCellsAsXml( data, FileOutputStream fos ){
  //(65..128).each { num ->
  //  def it = data[num];
  data.each {
    def cell = Cell.create( it );
    if( cell != null ){
        //println cell;
        fos.write( (cell.toXML()+'\n').getBytes() );
    }
  }
}


return;




/**
 *
 */
int convertPartIndex( Object chr ){
  //int i = (chr as char) as int;
  int i = chr;
  i -= ('0' as char);
  if( i > 0  &&  i < 8 ) return i;
  if( i == 36 ) return 0; // T
  if( i == 35 ) return 8  // S
  throw new Exception('Unknown part index.');
}


/**
 * Loads the raw cells data from OpenTTD loading log and returns a List of cell data in 8 binary chunks.
 */
List loadRawCellsData( String filePath ){
    def data = new ArrayList(1024);
    Matcher matcher = "" =~ /Load_MAP([0-9ST])\(\): ([0-9]+) ([0-9]+).*/ ;


    final PROCESS_LINES = 30000;
    def i = 1;
    new File( filePath ).eachLine {  ln ->
      ln = ln.trim();
      while( true ) {
          if( ln.size() == 0 ) break;
          if( i++ > PROCESS_LINES ) return;

          matcher.reset( ln );
          if( ! matcher.matches() ) break;

          int index = matcher[0][2].toInteger();
          int value = matcher[0][3].toInteger();
          //int part  = matcher[0][1]; part -= ('0' as char);
          int part = convertPartIndex( matcher[0][1] );
          //println "L: $part Index: $index Value: $value";

          if( null == data[index] )
              data[index] = new ArrayList(8);
          data[index][part] = value;
          break;
      } // while( false );
    }

    println data.size;
    println data[0].size;

    return data;
}


import groovy.xml.DOMBuilder

def filePath = "MestaXml.log";
def doc  = DOMBuilder.parse(new FileReader(filePath));
def docElm = doc.documentElement;


// === Weighted Random Generator === //

window.WeightedRandomGenerator = function( aiProbs ){

  this.aiProbs = aiProbs;
  this.soucet = 0;
  if( this.aiProbs.constructor == Array ){
  	for( var i=0;  i < this.aiProbs.length;  this.soucet += this.aiProbs[i], i++ ); // secte
  }
  else if( this.aiProbs.constructor == Object ){
  	for( var i in this.aiProbs ){
      this.soucet += this.aiProbs[i];
    }
  }
  else throw new Exception("WeightedRandomGenerator( aiProbs ): Param must be an Array or Object.");
  //alert( "Soucet: " + this.soucet );
};

WeightedRandomGenerator.prototype.GetRandom = function(){
  
	var iRandom = Math.floor( Math.random() * this.soucet );    // cislo od 0 do souctu 
  var x = 0;

  if( this.aiProbs.constructor == Array ){
  	for( var i = 0;  i < this.aiProbs.length;  i++ ){    // zjisti, kam to padlo 
  		x += this.aiProbs[i];
  		if( x > iRandom ) break;
  	}
  	return i;
  }
  else if( this.aiProbs.constructor == Object ){
  	for( var i in this.aiProbs ){
      x += this.aiProbs[i];
  		if( x > iRandom ) break;
    }
  	return i;
  }
  else { /* Will not happen... */ throw new Exception("WeightedRandomGenerator.GetRandom()"); }
};

/*/
oWRG = new WeightedRandomGenerator( { louka: 1000, les: 20, hlina: 20, zelezo: 20, vesnice1: 50 } );

for( var i = 0;  i < 20;  i++ )
  alert( oWRG.GetRandom() );

/**/
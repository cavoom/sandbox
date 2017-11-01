// This function converts an array into a CSV
// Not sure how to make it work when it is not an array of arrays


var stringify = require('csv-stringify');
 
input = [[ '1', '2', '3', '4' ],['a','b','c']];
stringify(input,function(err, output){
  //output.should.eql('1,2,3,4\na,b,c,d');
  if(output){
      console.log(output);
  }
});
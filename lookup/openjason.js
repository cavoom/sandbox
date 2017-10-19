// proof that i don't have to make the json files .js files
// can access them as well!

var jsonfile = require('jsonfile'); // NPM module that saves JSON file
var stuff = require('./data.json');
var file = './testdata.json';
//console.log(stuff[0].sessionId);
var theIds = [];
var item = "";

doStuff((result)=>{

 
jsonfile.writeFile(file, result, {spaces: 2}, function(err) {
  console.error(err)
})

});

// ****************************
function doStuff(callback){
    stuff.forEach(function(item) {
        var combined = {
            "sessionId": item.sessionId,
            "sessionTitle": item.sessionTitle,
            "sessionStart": item.sessionStartTime,
            "sessionEnd": item.sessionEndTime

        }
        theIds.push(combined);

    });
    callback(theIds);
}
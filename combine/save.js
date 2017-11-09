// this routine saves to a file

var sessionsList = require('./session_json_data.json');
console.log(sessionsList.length);
// var jsonfile = require('jsonFile'); // need to do this locally; alexa doesn't like file when manually move



saveIt(sessionsList,(saved)=>{
    console.log(saved);
})

function saveIt(newData, callback){

    var file = './sessions.json'
    var obj = newData;
 
    jsonfile.writeFile(file, obj, {spaces: 2},function (err) {
        if(err){console.error(err)};
    });
    callback('I saved it');
}
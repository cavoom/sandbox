// Program to save a JSON or array


var jsonfile = require('jsonfile')
 
var file = './testdata.json'
var obj = {name: "Dave"};
 
jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})

// AS A FUNCTION
// ***************************************************
function saveEm(obj,callback){
    var file = './sessions3.json'
    //var obj = {name: "Dave"};
    jsonfile.writeFile(file, obj, {spaces: 2},function (err) {
        console.error(err)
    })
    callback('done');
}
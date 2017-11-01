// Program to save a JSON or array


var jsonfile = require('jsonfile')
 
var file = './testdata.json'
var obj = {name: "Dave"};
 
jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})
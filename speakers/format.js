var sessions2 = require('./sessions2.json');
var jsonfile = require('jsonfile');
console.log('it is this length: ', sessions2.length);
console.log(sessions2[204]);


// var sessions3 = JSON.stringify(sessions2,null, 2);
// saveEm(sessions3,(saved)=>{
//     console.log(saved);
// })


// ***************************************************
function saveEm(obj,callback){
    var file = './sessions3.json'
    //var obj = {name: "Dave"};
    jsonfile.writeFile(file, obj, function (err) {
        console.error(err)
    })
    callback('done');
}


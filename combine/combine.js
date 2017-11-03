// This function combines first and lastd names, adds doctor
// and remove middle initial
// changes all to lower case
// for some reason, t changes the original file as well
// not sure why??

var jsonfile = require('jsonfile');
var originalData = require('../analyze/session_json_data.json');
var newData = originalData;
//console.log(newData.length);
var i= 0;
var fullName = "";
//console.log(originalData[0].firstName);

combineEm((newData)=>{
    //console.log(newData[0]);
    saveIt(newData,(savedData)=>{
        console.log(savedData);

    });
    
    
});

// ******************************************************************************
function combineEm(callback){
    while(i < newData.length) {
        var theFirstName = newData[i].firstName;
        if(theFirstName.includes('.')){
            newData[i].firstName = theFirstName.replace(/ .*./, ' '); // removes the middle initial
            }
        fullName = "doctor " + newData[i].firstName + " " + newData[i].lastName;
        fullName = fullName.replace("  ", " "); // removes the double spaces
        newData[i].combinedName = fullName.toLowerCase();


    i++;

    }
    callback(newData);
}

// ******************************************************************************
function saveIt(newData, callback){

    var file = './updatedSessions.json'
    var obj = newData;
 
    jsonfile.writeFile(file, obj, {spaces: 2},function (err) {
        if(err){console.error(err)};
    });
    callback('I saved it');
}
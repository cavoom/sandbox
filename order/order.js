// you can order these dates without converting them to dates
// NOTE that order routine works when comparing only one field
// If you are comparing multiple fields, you need to do this differently
// just sorting by date will remove the first of each one each time when
// the first compare is made!

// ****** STOPPED HERE **********************************
// STEP 1: Order by time
// STEP 2: Go through again and check if IDs are the same
// STEP 3: If IDs are the same then check to see if times different. Push if times different
// STEP 4: If IDs are not the same, push


var jsonfile = require('jsonfile');
var stuff = require('../analyze/session_json_data.json');
console.log(stuff.length+' START ... records in the file');
sortThemByTime(stuff,(sorted)=>{
    console.log(sorted.length+' sorted by Time ');
    removeThem(sorted,(cleaned)=>{
        console.log(cleaned.length+' cleaned records');
            saveThem(cleaned,(readyData)=>{
                console.log(readyData)
            })
    })
})

// function to sort by Id
function sortThemById(stuff, callback){
    stuff.sort(function(a, b){
    // this sorts numbers but not other types
    var dateA=new Date(a.sessionId), dateB=new Date(b.sessionId);
    return dateA-dateB //sort by date ascending
})
callback(stuff);
}

// sort by Time
function sortThemByTime(stuff, callback){
    stuff.sort(function(a, b){
    // this sorts numbers but not other types
    var dateA=new Date(a.sessionStartTime), dateB=new Date(b.sessionStartTime);
    return dateA-dateB //sort by date ascending
})
callback(stuff);
}

// Function to remove dupes
function removeThem(resultz, callback){
    var uniques = [resultz[0]]; // first one is always unique, so just add manually
    var numberRecords = resultz.length;
    i=1;
    
    while (i < numberRecords){
        if(resultz[i].sessionId != resultz[i-1].sessionId ){
            uniques.push(resultz[i]); 
        } else if (resultz[i].sessionStartTime != resultz[i-1].sessionStartTime){
                uniques.push(resultz[i]); 
        }
            i++;
    }
    callback(uniques);
}

// ***************************************************
function saveThem(obj,callback){
    var file = ('./ordered.json');
    jsonfile.writeFile(file, obj, {spaces: 2},function (err) {
        console.error(err)
    })
    callback('done');
}

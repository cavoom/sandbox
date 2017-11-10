// you can order these dates without converting them to dates
// you can also sort objects
// remove dupes

var jsonfile = require('jsonfile');
var stuff = require('../analyze/session_json_data.json');
console.log(stuff.length+' records in the file');
sortThem(stuff,(sorted)=>{
    console.log(sorted.length+' sorted records');
    removeThem(sorted,(cleaned)=>{
        console.log(cleaned.length+' cleaned records');
        saveThem(cleaned,(readyData)=>{
            console.log(readyData)
       })
    })
})

// function to sort stuff
function sortThem(stuff, callback){
    stuff.sort(function(a, b){
    // this sorts numbers but not other types
    var dateA=new Date(a.sessionStartTime), dateB=new Date(b.sessionStartTime)
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
        if(resultz[i].sessionStartTime != resultz[i-1].sessionStartTime ){
            if(resultz[i].sessionTitle != resultz[i-1].sessionTitle){
                uniques.push(resultz[i]);
            } 
        }
            i++;
    }
    callback(uniques);
}

// ***************************************************
function saveThem(obj,callback){
    var file = './orderedDeDupedSessions.json'
    //var obj = {name: "Dave"};
    jsonfile.writeFile(file, obj, {spaces: 2},function (err) {
        console.error(err)
    })
    callback('done');
}


// EXAMPLE 1: Sort dates as text strings
// var date = ["2017-11-08T07:00Z",
// "2017-11-09T07:00Z",
// "2017-11-05T07:00Z",
// "2017-11-11T07:00Z",
// "2017-11-05T14:00Z"];

//var ordered = date.sort();
//console.log(ordered);

// EXAMPLE 2: Compare Objects
// var obj1 = {
//     name: "dave",
//     age: 21,
//     date: "2017-11-05T14:00Z"
//     };
// var obj2 = {
//     name: "dave",
//     age: 21,
//     date: "2017-11-05T14:00Z"
// }

// var compare = Object.is(obj1.name,obj2.name);
// var compare2 = Object.is(obj1.date,obj2.date);
// if(compare && compare2){
//     console.log('so true');
// } else {
//     console.log('not so true');
// };

// console.log(compare);
// console.log(compare2);

// var stuff = [
//     {
//     name: "dave",
//     age: 21,
//     date: "2017-11-25T14:00Z"
//     },
    
//     {  name: "bob",
//         age: 76,
//         date: "2017-11-01T14:00Z"
//     },

//         {  name: "bob",
//         age: 76,
//         date: "2015-11-12T14:00Z"
//     },

//     {
//         name: "sam",
//         age: 7,
//         date: "2017-11-02T17:05Z"
//     },

//     {
//         name: "sam",
//         age: 7,
//         date: "2018-11-03T17:15Z"
//     },
//      {
//         name: "sam",
//         age: 7,
//         date: "2017-11-07T17:25Z"
//     },
//         {
//         name: "sam",
//         age: 7,
//         date: "2017-11-01T17:05Z"
//     },
//         {  name: "bob",
//         age: 76,
//         date: "2015-11-12T14:00Z"
//     }
// ];
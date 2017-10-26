//SETUP TO FIND STUFF

var allData = require('./allData.json');
// console.log(allData.length); // 591 records

var i = 0; // counter for while loop
var testSpeaker = "Seth Corey";
var testSession = "Congenital and Acquired Neutropenia";
var theKeyword = "and";
var timeNow = new Date();
var tempArray = [];

taxonomy((resultingStuff)=>{

//console.log(resultingStuff);
console.log('i found ', resultingStuff.length, 'items that match your search.');

});

// FIND A SPEAKER
// while (i < allData.length){
//     var theSpeaker = allData[i].firstName + " "+allData[i].lastName;

//     if(testSpeaker == theSpeaker){

//         console.log(allData[i]);

//     }

//     i++;

// }

// FIND A SESSION WITH A TAXONOMY KEYWORD
function taxonomy(callback){

while (i < allData.length){

    var title = allData[i].sessionTitle;
    var startTime = allData[i].sessionStartTime;
    startTime = new Date(startTime);
    var endTime = allData[i].sessionEndTime;
    endTime = new Date(endTime);

    if(title.includes(theKeyword) && timeNow >= startTime && timeNow < endTime){

        //console.log(allData[i].sessionId, "-", allData[i].sessionTitle);
        tempArray.push(allData[i].sessionId);

    }

    i++;

}
//console.log('length of array: ',tempArray.length);
callback(tempArray);

}

// STOPPED HERE !!!
// next try the delete method to remove array elements that are repeated
// start at 1. look back 1 item. if it's a dupe, delete the current and
// move to the next





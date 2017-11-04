// this routine gets the speaker names
// sorts them in alpha order
// removes dupes
// and saves to a file

var jsonfile = require('jsonfile');
var sessions = require('./updatedSessions.json');
console.log('Number of sessions: ', sessions.length);

var speakers = [];
var a = 0;
var theSpeaker = "";

getSpeakers((speakerList)=>{
    //sort them
    console.log('Number of speakers: ',speakerList.length);
    sortEm(speakerList,(sorted)=>{
        console.log('Number of sorted: ',sorted.length);
        removem(sorted,(uniques)=>{
            // save them
            console.log('Number of uniques: ',uniques.length);
            saveEm(uniques,(saved)=>{
                console.log(saved);
            })
        })

    })
    
});


// GET SPEAKERS
function getSpeakers(callback){

while(a<sessions.length){
    theSpeaker = sessions[a].combinedName;
    speakers.push(theSpeaker);
    a++;
}
callback(speakers);
}

// SORT: function to sort
function sortEm(result, callback){
    result.sort();
    callback(result)
}

// function save them
function saveEm(obj,callback){
    var file = './speakersList.json'
    //var obj = {name: "Dave"};
    jsonfile.writeFile(file, obj, function (err) {
        console.error(err)
    })
    callback('done');
}

// REMOVE FUNCTION
function removem(resultz, callback){
    var uniques = [resultz[0]]; // first one is always unique, so just add manually
    var numberRecords = resultz.length;
    i=1;
    
    while (i < numberRecords){
        if(resultz[i] != resultz[i-1]){
            uniques.push(resultz[i]);
        }
            i++;
    }

    callback(uniques);
}
// this routine updates the sessions.json file
// removes .s and double spaces

// Using this site to convert it to a CSV file
// http://www.convertcsv.com/json-to-csv.htm

var jsonfile = require('jsonfile');
var sessions = require('./sessions.json');
console.log('Number of sessions: ', sessions.length);

var speakers = [];
var theSpeaker = "";
var replaced = "";

getSpeakers((theSessions)=>{
    //sort them
    //console.log('Number of speakers: ',sessions.length);
    //sortEm(theSessions,(sorted)=>{
        //console.log('Number of sorted: ',sorted.length);
        //removem(sorted,(uniques)=>{
            // save them
            //console.log('Number of uniques: ',uniques.length);
            replacem(theSessions,(replaced)=>{
                console.log('Replaced: ', replaced.length);
                saveEm(replaced,(saved)=>{
                    console.log(saved);
            })
            })

       // })

    //})
    
});


// GET SPEAKERS
function getSpeakers(callback){
    var a = 0;
    while(a<sessions.length){
        theSpeaker = sessions[a].combinedName;
        theSpeaker = theSpeaker.trim();
        sessions[a].combinedName = theSpeaker;
        a++;
}
callback(sessions);
}

// SORT: function to sort
function sortEm(result, callback){
    result.sort();
    callback(result)
}

// function save them
function saveEm(obj,callback){
    var file = './sessions4.json'
    //var obj = {name: "Dave"};
    jsonfile.writeFile(file, obj, {spaces: 2}, function (err) {
        console.error(err)
    })
    callback('done');
}

// REMOVE DUPES FUNCTION
function removem(resultz, callback){
    var uniques = [resultz[0]]; // first one is always unique, so just add manually
    var numberRecords = resultz.length;
    var i=1;
    
    while (i < numberRecords){
        if(resultz[i] != resultz[i-1]){
            uniques.push(resultz[i]);
        }
            i++;
    }

    callback(uniques);
}

// REPLACE PERIODS
 function replacem(uniques, callback){
    var b=0;
    //console.log('at replacem and uniques length is', uniques.length);
    while(b<uniques.length){
        replaced = uniques[b].combinedName;
        if(replaced.includes(".")){
            uniques[b].combinedName = replaced.replace(/\./g," ");
            replaced =uniques[b].combinedName;
            uniques[b].combinedName = replaced.replace(/  /g, " ");
        }

    b++
    }
    callback(uniques);

 }
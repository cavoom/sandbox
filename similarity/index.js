// this module finds the best string similarity between 2 strings
// this module also can find the "best match" in an array
// find the best match and then find all instances of the best match (search with "includes")

// If you don't find an exact match, then do a Simiarity and provide the one most similar
// If nothing greater than 0.5, then say no matches found

var stringSimilarity = require('string-similarity');
var sampleSpeakers = require('./speakers.json');
var speakers = require('../speakers/speakersList.json');
var toMatch = "doctor steve holland";

// DETERMINE SIMILARITY IN TWO STRINGS
//var similarity = stringSimilarity.compareTwoStrings('queso', 'kay so'); 
//console.log('similarity score: ', similarity);

// FIND BEST MATCH
    //var matches = stringSimilarity.findBestMatch('andrew dervan', speakers);
    // console.log(matches.bestMatch);
    // console.log(matches.bestMatch.target);
    // console.log(matches.bestMatch.rating);

    bestMatchTest(toMatch,(theBestMatch)=>{
        console.log(theBestMatch);
    })



// FIND BEST MATCH
// var stringSimilarity = require('string-similarity');
// var speakers = require('../speakers/speakersList.json');
// var toMatch = "doctor ofrat katz";
function bestMatch(toMatch, callback){
    var matches = stringSimilarity.findBestMatch(toMatch, speakers);
    var theBestMatch = "NoMatch";
    if(matches.bestMatch.rating > .8){
        theBestMatch = matches.bestMatch.target
    } 

    callback(theBestMatch)
}

// FOR TEST
function bestMatchTest(toMatch, callback){
    var matches = stringSimilarity.findBestMatch(toMatch, speakers);
    var theBestMatch = "NoMatch";
    theBestMatch = matches.bestMatch;
    callback(theBestMatch)
}
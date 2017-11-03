// this program determines if a keyword is in a string
// also figures out how many records have keywords
// and saves them to a file

var jsonfile = require('jsonfile'); // for saving to JSON
var sessionData = require('../analyze/session_json_data.json');
console.log(sessionData.length);
var a=0;
var wordCounter = 0;
var counter=0;
var theWords = "";
var testWord = "CML"
var item = testWord.toLowerCase();
var hasKeywords = [];

// Find the word
// while(a<sessionData.length){
//     theWords = sessionData[a].keywords;
//     theWords = theWords.toLowerCase();
//     if(theWords.includes(item)){
//         wordCounter++;
//         console.log(theWords);
//     }
//     a++;
// }

// Find the results with keywords and save
findEm((results)=>{
    var file = './haveKeywords.json'
    var obj = results;
    jsonfile.writeFile(file, obj, {spaces: 2}, function (err) {
    console.log(results.length+' have keywords');
});

})


function findEm(callback){
while(a<sessionData.length){

    if(sessionData[a].keywords != ""){
        hasKeywords.push({
            id: sessionData[a].sessionId,
            title: sessionData[a].sessionTitle,
            keywords: sessionData[a].keywords
            }
            );
    }
    a++;
    } 
callback(hasKeywords);
}

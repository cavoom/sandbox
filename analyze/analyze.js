// This program grabs the titles from a JSON file
// Sorts Alpha order
// Removes dupes

var data = require('./session_json_data.json'); // this is our data
var theSessions = [];
var title = "";
var sessionId = "";
var stuff = {};
var item = "Bone Marrow Failure";
var i = 0;

var tempSession = "nothingHere";
var tempSessionCounter = 0;
var tempPaper = "nothingHere";
var tempPaperCounter = 0;
var tempKeywords = "nothingHere";
var tempKeywordsCounter = 0;
var tempKeywordsOrSessionCounter = 0;

console.log(data.length+ ' records to check out');

// findKeywords(data,(notBlank)=>{
//     console.log('I found '+notBlank+ ' records with keywords');
// })

// Find Sessions with Papter Titles
// findPapers(data,(notBlank)=>{
//     console.log('I found '+notBlank+ ' records with no papers');
// })


// find items with "Molecular Interactions"
findItems(data,(notBlank)=>{
    console.log('all done');
})




//sortem();
// getTitles((result)=>{
//     //console.log(result);
//     console.log(result.length+ ' records to deDupe');

//     // NEXT SORT BY TITLE
//     // THEN DEDUPE
    
// //     // //REMOVE DUPES
// //     // removem(result, (noDupes)=>{
// //     //     console.log('I have ',noDupes.length, ' unique records.')

// //     //     // Now call a function to save the results into a file
// //     // })

// });


// Function to get Titles
function getTitles(callback){

for (i=0;i<data.length;i++){
    stuff.id = data[i].Key_SessionID;
    stuff.title = data[i].ReviewCategoryTitle;
    theSessions.push({
        id:stuff.id,
        title: stuff.title});
}
    
    callback(theSessions)
}


// Function to remove dupes
// BUT THESE NEED TO BE SORTED FIRST!!
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

// function to check how many have keywords
function findKeywords(data,callback){
    var x = 0;
    var notBlank = 0;
    while (x<data.length){
        if(data[x].keywords != ""){
            notBlank++;
        }
        x++;
}

    callback(notBlank);
}

// function to check how many don't have paper titles
function findPapers(data,callback){
    var x = 0;
    var isBlank = 0;
    while (x<data.length){
        if(data[x].papertitle == ""){
            isBlank++;
        }
        x++;
}

    callback(isBlank);
}

// function to check on instances of item
function findItems(data,callback){
    
    var x = 0;

    while (x<data.length){
        tempSession = data[x].sessionTitle;

        if(data[x].paperTitle){
                tempPaper = data[x].papertitle};

        if(data[x].keywords){
                tempKeywords = data[x].keywords};

        if(tempKeywords.includes(item) || tempSession.includes(item)){
            tempKeywordsOrSessionCounter++;
        }
        
        x++;
}
    console.log('Taxonomy or Keywords: ', tempKeywordsOrSessionCounter);

    callback('tempTaxonomy');
}
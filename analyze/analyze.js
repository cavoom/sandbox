// This program grabs the titles from a JSON file
// Sorts Alpha order
// Removes dupes


var sessions = require('./ashData103017.json');
var data = sessions.Sync.data.row;
var theSessions = [];
var title = "";
var sessionId = "";
var stuff = {};

var i = 0;

console.log(data.length+ ' records to check out');


sortem();
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

function sortem (){

    var toSort = [{

        name:"lynley",
        age: 24,
        sex: "F"
    },{
        name: "michele",
        age: 27,
        sex: "F"
    },
    {
        name: "hyunnJoo",
        age: 29,
        sex: "F"
    }];

    toSort.sort(name);
    console.log(toSort);


//callback(sorted)

}



// This code takes grabs each title from an array
// removes the common words
// sorts it alpha
// removes dupes
// saves it to a file

var removeWords =  require('remove-words');
var jsonfile = require('jsonfile');
var everything = require('./ashData.json');
var stringify = require('csv-stringify');

var titles = everything.Sync.data.row;
var title = [];
var theList = [];
var x = 0;
var y= 0;
var theStuff = []


loopThru((result)=>{
             console.log('all done and there are '+result.length+' words found.');
             sortEm(result,(sorted)=>{
                console.log(' Sorted ... now removing Dupes ... ');

                removem(sorted, (uniques)=>{
                    console.log('there are '+uniques.length+' unique records');
                    //convert2csv(uniques,(csvList)=>{
                        //csvList = "["+csvList+"]";
                        saveEm(uniques,(finalList)=>{
                            console.log(finalList)
                        })
                    //})
                })
             })
             
})

// Get each of the titles and remove the common words
function loopThru(callback){
while (y<titles.length){
    title = removeWords(titles[y].ReviewCategoryTitle);
    addWords(title,(result)=>{
         y++;
         theStuff = result
    });
};
callback(theStuff)
}

// function to add words to list
function addWords(title,callback){
for (x=0;x<title.length;x++){
    theList.push(title[x]);
    //console.log(theList.length);
    };
callback(theList);
}

// function to sort
function sortEm(result, callback){
    result.sort();
    callback(result)
}

// function save them

function saveEm(obj,callback){
    var file = './testdata.json'
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


// CONVERT TO CSV
function convert2csv(input,callback){
    //input = [[ '1', '2', '3', '4' ]];
    stringify(input, function(err, output){
    //output.should.eql('1,2,3,4\na,b,c,d');
    if(output){
        // console.log(output);
        callback(output)
        }
    })
}
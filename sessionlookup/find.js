//SETUP TO FIND STUFF

var allData = require('./ashData.json');
// console.log(allData.length); // 591 records

var i = 0; // counter for while loop
var testSpeaker = "Seth Corey";
var testSession = "Congenital and Acquired Neutropenia";
var theKeyword = "Bone";
var timeNow = new Date();
var tempArray = [];

taxonomy((resultingStuff)=>{

    //console.log(resultingStuff);
    console.log('i found ', resultingStuff.length, 'items that match your search.');
    //console.log(resultingStuff);
    removem(resultingStuff, (uniques)=>{
    console.log('I found ', uniques.length,' items that are unique.');

        playback(uniques, (message)=>{
            console.log(message);
        })
    
    

})

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
i-0;
while (i < allData.length){

    var title = allData[i].sessionTitle;
    var startTime = allData[i].sessionStartTime;
    startTime = new Date(startTime);
    var endTime = allData[i].sessionEndTime;
    endTime = new Date(endTime);

    if(title.includes(theKeyword) && timeNow >= startTime && timeNow < endTime){

        //console.log(allData[i].sessionId, "-", allData[i].sessionTitle);
        tempArray.push(allData[i]);

    }

    i++;

}
//console.log('length of array: ',tempArray.length);
callback(tempArray);

}

// RETURN UNIQUE OBJECT ARRAY
function removem(resultz, callback){
    var numberRecords = resultz.length;
    //console.log('i am in remove em ', numberRecords);
    var uniques = [resultz[0]];
    console.log(resultz[0].sessionId);
    i=1;

    while (i < numberRecords){

        if(resultz[i].sessionId != resultz[i-1].sessionId){
            // this pushes only uniques to the array
            uniques.push(resultz[i]);
            console.log(resultz[i].sessionId);
        }
            i++;
    }


    
    callback(uniques);
}

// ORDER BY TIME
// PLAY UP THE FIRST ONE
// REMOVE FROM ARRAY
// IF THERE ARE MORE LEFT, SAY NEXT TO HEAR NEXT


function playback(uniques,callback){
    var list = "the stuff is " + uniques[0].sessionId + "," + uniques[1].sessionId + "," + uniques[2].sessionId;
    if(uniques.length <= 3){
        
        console.log('here is the list: ', list);
        console.log('I found '+ uniques.length + '. Here are the first 3: '+ list);
    } else {
        console.log('I found the BIG '+ uniques.length + '. Here are the first 3: '+ list);
   
    }

    callback('all done');
}


// THEN GO TO THE ALEXA SIDE AND SEE IF WE CAN SEARCH BY KEYWORDS
// AND FIND THOSE THAT DON'T HAVE IDENTIFIED KEYWORDS (SHOULD WORK)







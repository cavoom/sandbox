//SETUP TO FIND STUFF

//STOPPED HERE
// THEN GO TO THE ALEXA SIDE AND SEE IF WE CAN SEARCH BY KEYWORDS
// FIND A SESSION ABOUT ... 

var allData = require('./ashData.json');
// console.log(allData.length); // 591 records

var i = 0; // counter for while loop
var testSpeaker = "Seth Corey";
var testSession = "Congenital and Acquired Neutropenia";
var theKeyword = "Boner";
var timeNow = new Date();
//var tempArray = [];

taxonomy((resultingStuff)=>{
    //console.log(resultingStuff);
    console.log('i found ', resultingStuff.length, 'items that match your search.');
    
    if(resultingStuff.length > 0) {
    removem(resultingStuff, (uniques)=>{
        console.log('I found ', uniques.length,' items that are unique.');

        playback(uniques, (nextStatement)=>{
            console.log(nextStatement);
        })
    
        })
    }

});


// FIND A SESSION WITH A TAXONOMY KEYWORD
function taxonomy(callback){
    i-0;
    var searchResults = [];
    while (i < allData.length){
        var title = allData[i].sessionTitle;
        var startTime = allData[i].sessionStartTime;
        startTime = new Date(startTime);
        var endTime = allData[i].sessionEndTime;
        endTime = new Date(endTime);

        if(title.includes(theKeyword) && timeNow >= startTime && timeNow < endTime){
            //console.log(allData[i].sessionId+"-"+allData[i].sessionTitle);
            searchResults.push(allData[i]);
        }

    i++;

}

callback(searchResults);

}

// RETURN UNIQUE OBJECT ARRAY
function removem(resultz, callback){
    var uniques = [resultz[0]];
    var message = '';
    if(resultz.length > 1){
    var numberRecords = resultz.length;
    //console.log('i am in remove em ', numberRecords);
    //console.log(resultz[0].sessionId);
    i=1;

    while (i < numberRecords){

        if(resultz[i].sessionId != resultz[i-1].sessionId){
            // this pushes only uniques to the array
            uniques.push(resultz[i]);
            //console.log(resultz[i].sessionId);
        }
            i++;
    }
}
    callback(uniques);
}


// ORDER BY TIME
// PLAY UP THE FIRST ONE
// REMOVE FROM ARRAY
// IF THERE ARE MORE LEFT, SAY NEXT TO HEAR NEXT

// Playback the results
function playback(uniques,callback){
    var nextStatement = "";
    var theGoods = uniques;
    //var list = "the stuff is " + uniques[0].sessionId + "," + uniques[1].sessionId + "," + uniques[2].sessionId;
    if(uniques.length >1){
        
        //console.log('here is the list: ', list);
        console.log('I found '+ uniques.length + ' sessions that match your search. The first one is '+ uniques[0].sessionTitle );
        uniques.shift();
        //console.log('the next one is ' + uniques[0].sessionTitle);
        //console.log('there are now ', uniques.length, 'records.');
        nextStatement = 'there are '+uniques.length+' other sessions at this time. Would you like to hear them?';
    } else if(uniques.length == 1){
        console.log('I found 1 argh session and it is ',uniques[0].sessionTitle);
        //console.log('there are now ', uniques.length, 'records.');
        uniques.shift();
        console.log('there are now: ', uniques.length);
        nextStatement = 'there are no other sessions at this time. Want to hear about it?';
   
    } else if(uniqueslength == 0){
        nextStatement = 'there are no other sessions at this time.';
    }

    //console.log('NEXT statement is: ', nextStatement);
    callback(nextStatement);
    // send it to session.attributes to save the remaining items!
}

// FIND A SPEAKER
// while (i < allData.length){
//     var theSpeaker = allData[i].firstName + " "+allData[i].lastName;

//     if(testSpeaker == theSpeaker){

//         console.log(allData[i]);

//     }

//     i++;

// }







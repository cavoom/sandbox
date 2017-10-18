var sessions = require('./sessions.js');
var descriptions = require('./descriptions.js');
var counter = 0;
var descriptionCounter = 0;
var numberOfSessions = sessions.length;
var numberOfDescriptions = descriptions.length;
console.log('Number of sessions: ', numberOfSessions);
console.log('number of descriptions', numberOfDescriptions);

// NEED TO CONSTRUCT THIS SO THAT WE DON'T GO TO THE NEXT SESSIONS
while (counter < numberOfSessions){
    //console.log(counter, " - ", sessions[counter].id);
    var sessionsId = sessions[counter].id;
    // loop through each description to find a match
    findDescription(sessionsId, (theMatch)=>{
        console.log(sessionsId, theMatch);

    })
    console.log('I am on record #', counter);
    ++counter;
    };

    function findDescription(sessionsId, callback){
        descriptionsCounter = 0;
        while(descriptionCounter<numberOfDescriptions){
            if(sessionsId == descriptions[descriptionsCounter].id){
                console.log('in function for sessionsID', sessionsId);
                callback(descriptions[descriptionsCounter].description);
            }
            ++descriptionCounter;
        }



    }

 




// This is a TEST to convert ASH XML to JSON and Lookup

//https://ash.confex.com/ash/2017/sync.cgi/Freeman_Session_Listing.xml
//https://ash.confex.com/ash/2017/sync.cgi/Freeman_Paper_Listing.xml
//https://ash.confex.com/ash/2017/sync.cgi/Freeman_Person.xml
//https://ash.confex.com/ash/2017/sync.cgi/Freeman_Role.xml
//https://ash.confex.com/ash/2017/sync.cgi/Freeman_RoleAddress.xml
//https://ash.confex.com/ash/2017/sync.cgi/Freeman_COI_PersonBased.xml
// I converted the above XMLs to JSON with this service
// https://codebeautify.org/xmltojson

//var sessions = require('./sessions.js');
//var descriptions = require('./descriptions.js');
var sessions = require('./codebeautify_SESSIONS.js');

//var requests_made = 0;
// var theId = require('./theId.js');
// this is for TEST
var theId = [11086,11085, 11084,11083,11082];

theId.forEach(function(thing){

sessions.forEach(function(session) {

    if(session.Key_SessionID == thing){
        // Now save this as a JSON object array
    console.log(thing, session.SessionTitle, session.StartTime,session.EndTime);
    

    // To Do:

    // create a function that calls our forEach routine with a callback
    // Create a new object with all of the data
    // return the new object to the callback and save it 
        
    }
    
});

})


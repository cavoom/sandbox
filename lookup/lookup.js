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
var theId = [11086,11085, 11084,11083,11082];

attachIdToSession((response)=>{
    console.log(response);
});


// **********************************************************************************

function attachIdToSession(callback){

var combinedObject = {};
var resultingArray = [];

theId.forEach(function(Id){

    sessions.forEach(function(session) {

    if(session.Key_SessionID == Id){
        // Now save this as a JSON object array
        combinedObject = {
            "sessionId":Id,
            "sessionTitle": session.SessionTitle,
            "sessionStartTime":session.StartTime,
            "sessionEndTime": session.EndTime
        }
        resultingArray.push(combinedObject);
        //console.log(resultingArray.length);
        //console.log(combinedObject);
        
        
        }
    });
});

callback(resultingArray);

}
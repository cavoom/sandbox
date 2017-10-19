// This script ADDS the PERSON ID to the SESSION Record

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
var roles = require('./codebeautify_ROLE.js');
var jsonfile = require('jsonfile'); // saves the object created
var file = './data.json'; // saves the result to data.json


attachPersonIdToSession((response)=>{
    //console.log('combined array length: ', response.length);
    //console.log('session array length: ', sessions.length);
    //console.log('role array length', roles.length);
    //console.log(response[590]);
   
// *** NEXT UP - BEFORE WE SAVE, have another callback that now gets the first name
// last name and then as it's callback, it saves the file!
// ********************************************************************************

   // Save Routine
    jsonfile.writeFile(file, response, function (err) {
        if(response){
            console.log('success');
        } else {
        console.error(err) }
    })

});


// **********************************************************************************

function attachPersonIdToSession(callback){

var combinedObject = {};
var resultingArray = [];

roles.forEach(function(role){

    sessions.forEach(function(session) {

    if(session.Key_SessionID == role.Entryid){
        // Now save this as a JSON object array
        combinedObject = {
            "sessionId":session.Key_SessionID,
            "sessionTitle": session.SessionTitle,
            "sessionStartTime":session.StartTime,
            "sessionEndTime": session.EndTime,
            "sessionPerson": role.PersonID
        }
        resultingArray.push(combinedObject);
        //console.log(resultingArray.length);
        //console.log(combinedObject);
        
        
        }
    });
});

callback(resultingArray);

}
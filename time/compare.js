// Comparing Dates

var sessions = require('../analyze/session_json_data.json');
console.log('working with ', sessions.length, ' records');

//var theTimeNow = new Date();
// console.log('time now: ', theTimeNow);
// console.log('the hours ', theTimeNow.getUTCHours());
// console.log('the day', theTimeNow.getUTCDate());

var cleaned = [];

removeOld(sessions,(cleaned)=>{
    console.log(' i have ',cleaned.length,' clean records.');
})


function removeOld(sessions, callback){
    var i=0;
    var currentTime = new Date();
    var theEndTime = new Date();
    //console.log('the current time: ', currentTime);
    while(i<sessions.length){
        theEndTime = new Date(sessions[i].sessionEndTime);
        //console.log(theStartTime.getUTCDate());
        if(theEndTime > currentTime){
            //console.log('yes');
            cleaned.push(sessions[i]);
            }
            i++;
        }
        callback(cleaned);
    }
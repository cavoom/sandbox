var speakers = require('../combine/updatedSessions.json');
//console.log(speakers.length);
var a = 0;
var item = "doctor min lu"
var temp = "";
while (a < speakers.length){
    temp = speakers[a].combinedName;
    if(temp.includes(item)){
        console.log(speakers[a].sessionId)
    }
    a++;
}
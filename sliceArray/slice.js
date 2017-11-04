// this program takes a huge json file and limits it down to a select smaller group
// Alexa has problems with brining over a huge array into session.attributes
// Instead, I'll use slice to keep the first 10 or so ... 


var theSessions = require('../analyze/session_json_data.json');
console.log(theSessions.length);

var results = theSessions.slice(0,10);
console.log(results[0].sessionId);
console.log(results[9].sessionId);
console.log(results.length);

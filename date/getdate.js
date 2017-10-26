// CONVERT DATE STRING TO ZULU DATETIME
let theDate="2017-10-25";
let theStartTime = "2:00:00 PM";
let theEndTime = "4:50:00 PM";

let theZulu = theDate+" "+theStartTime;
let theZulu2 = theDate+" "+theEndTime;
//console.log('zulu time: ',theZulu);
var sessionStart = new Date(theZulu).toISOString();
sessionStart = new Date(sessionStart);
var sessionEnd = new Date(theZulu2).toISOString();
sessionEnd = new Date(sessionEnd);


// COMPARE THE CURRENT DATE TO SESSION START DATE
let nowTime = new Date();
console.log('now  : ', nowTime);
// console.log('start: ', sessionStart);
// console.log('ends : ', sessionEnd);

if(nowTime >= sessionStart && nowTime <= sessionEnd) {
    
    // loop through the json file and check each session
    // create an array with the session found
    console.log('you have a session going on');
} else {
    // do nothing
    console.log('bummer, no sessions in play at this time')
}



// OTHER FUNCTIONS

// USING DATE COMPONENTS
// var theZuluDate = new Date(); // this gets the Zulu date format
// var theYear = theZuluDate.getFullYear(); // this gets the year
// var theDay = theZuluDate.getDay(); // this gets the number 0-7 day of the week
// var theMonth = theZuluDate.getMonth();
// var theHour = theZuluDate.getHours();
// var theMinute = theZuluDate.getMinutes();
// var theHourZulu = theZuluDate.getUTCHours();

// console.log(theZuluDate);
// console.log(theYear);
// console.log(theDay);
// console.log(theMonth); // month starts at 0
// console.log(theHour); // this will be ET
// console.log(theHourZulu); // this will be GMT
// console.log(theMinute);

// COMPARING DATES
// var today, someday, text;
// today = new Date(); // current date
// someday = new Date(); // create a new date
// someday.setFullYear(2100, 0, 14); // set the date

// if (someday > today) {
//     text = "Today is before January 14, 2100.";
// } else {
//     text = "Today is after January 14, 2100.";
// }
// console.log(text);






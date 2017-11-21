//Working with times / dates

var theDayTimeZulu = "2017-12-10T05:30:00Z";
var theDay = new Date(theDayTimeZulu);
var theAmPm = "Nothing"
    theDayOfTheWeek = theDay.getDay();
    //theDay = daysOfWeek[theDay];
    console.log(theDayOfTheWeek);

    var theHour = theDay.getHours();
    console.log('the hour is: ', theHour);
        if(theHour > 11 && theHour != 12){
            theHour = theHour-12;
            theAmPm = "PM";
           // console.log(theHour,theAmPm);
        } 
            
            else if(theHour == 12){
            theAmPm = "PM";
            //console.log(theHour,theAmPm);
            } 
            
            else if(theHour <= 11) {
                theAmPm = "AM";
                //console.log(theHour,theAmPm);
            }
    

    var theMinutes = theDay.getMinutes();

var theTime = theHour+":"+theMinutes+" "+theAmPm;
console.log(theTime);

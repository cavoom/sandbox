var theDay = new Date();
var converted = theDay.toString();
console.log(theDay);
console.log(converted);

var convertedBack =new Date(converted);
console.log(convertedBack);

// Get Day, Year, Hours, Month, Seconds, Time
var theDayOfWeek = theDay.getDay();
console.log(theDayOfWeek);


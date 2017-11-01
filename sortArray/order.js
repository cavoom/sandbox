// this program sorts an array
// different functions for alpha, number and date sorting


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var date1 = '2017-12-13T01:00Z';
var date2 = '2017-12-12T09:00Z';
var date3 = '2017-12-05T10:00Z';
var day = new Date(date1);

console.log('start hour: ',day.getUTCHours());
console.log('start hour: ',day.getHours());

//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri","Sat"];

// var ash = require('./ashData.json');

// // var stuff = [
// //     {
// //     name: "dave",
// //     age: 21,
// //     date: date1
// //     },
    
// //     {  name: "bob",
// //         age: 76,
// //         date: date2
// //     },

// //     {
// //         name: "sam",
// //         age: 7,
// //         date: date3
// //     }

// // ]
// //stuff.sort(); // this sorts arrays, but not arrays of objects

// // this sorts numbers but not other fields
// ash.sort(function(a, b){
//     var dateA=new Date(a.sessionStartTime), dateB=new Date(b.sessionStartTime)

//     return dateA-dateB //sort by date ascending
// })

// console.log(ash);

// // Here's how to get the name of the day that it's on:
// //console.log(dayNames[day.getDay()]);


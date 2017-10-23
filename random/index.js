// //biased logic?
// let randomNumber = randomInt(0,9);
// console.log(randomNumber);
// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }


// // Randomize an array
// // but this one repeats!

// var uniqueRandomArray = require('unique-random-array');
// var rand = uniqueRandomArray([1, 2, 3, 4]);
 
// console.log(rand(), rand(), rand(), rand());
// //=> 4 2 1 4 

// Sorting an array in Random Order
var points = [0,1,2,3,4,5,6,7,8,9,10,11,12];
points.sort(function(a, b){return 0.5 - Math.random()});

console.log(points);





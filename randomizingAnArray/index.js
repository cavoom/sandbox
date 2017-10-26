
//Sorting an array in Random Order
var points = [0,1,2,3,4,5,6,7,8,9,10,11,12];
points.sort(function(a, b){return 0.5 - Math.random()});
console.log(points);

// Remove the first record of tghe array
points.shift();
console.log(points);

// Removing the last record of the array
// points.pop();
// console.log(points);







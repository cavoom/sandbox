// replace text in a string
// removes middle names - anything with two spaces between them

// var string = "j.h. rowli.ng"
// string = string.replace(/\./g," ");
// string = string.replace(/  /g," ");
// console.log(string);

// var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// alphabet = alphabet.replace(/H.*S/, 'HS')
// console.log(alphabet);

// replaces middle names
var name = "david patrick potatoe chip j.e. haas";
var noMiddle = name.replace(/ .* /g,' ');
console.log(noMiddle);


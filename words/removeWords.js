// this tests the remove-words module
// it converts everything to lowercase
// appears to remove dashes

var removeWords =  require('remove-words');

var theString = "the big cat went after the small bird-dog.";

console.log(removeWords(theString));
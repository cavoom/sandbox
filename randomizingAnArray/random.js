// grabbing a random quote to say

// Random number between 1 and 10
//var theRandom = Math.floor((Math.random() * 10) + 1);

var quotes = [
    "whens the general session",
    "when does doctor catherine smith speak",
    "whats going on today",
    "find the next session about bone marrow failure",
    "whats in the ash booth",
    "where is the poster hall",
    "where is the ash store",
    "where is the general session",
    "where do i find the shuttle busses",
    "what bus goes to the ellis hotel",
    "where are the taxis",
    "what is going on today",
    "what time does the poster hall open",
    "where can i get some exercise at ash"
];


// now generate 10 of them
var x = 0;
for(x=0;x<100;x++){
    // between 0 and 13
    console.log(quotes[13]);
    var theRandom = Math.floor((Math.random() * 14));
    console.log(quotes[theRandom]);
}

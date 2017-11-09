// you can order these dates without converting them to dates
// you can also sort objects
// remove dupes

// EXAMPLE 1: Sort dates as text strings
// var date = ["2017-11-08T07:00Z",
// "2017-11-09T07:00Z",
// "2017-11-05T07:00Z",
// "2017-11-11T07:00Z",
// "2017-11-05T14:00Z"];

//var ordered = date.sort();
//console.log(ordered);

// EXAMPLE 2: Sort objects
var obj1 = {
    name: "dave",
    age: 21,
    date: "2017-11-05T14:00Z"
    };
var obj2 = {
    name: "dave",
    age: 21,
    date: "2017-11-05T14:00Z"
}

var compare = Object.is(obj1.name,obj2.name);
var compare2 = Object.is(obj1.date,obj2.date);
if(compare && compare2){
    console.log('so true');
} else {
    console.log('not so true');
};

console.log(compare);
console.log(compare2);

var stuff = [
    {
    name: "dave",
    age: 21,
    date: "2017-11-05T14:00Z"
    },
    
    {  name: "bob",
        age: 76,
        date: "2017-11-01T14:00Z"
    },

    {
        name: "sam",
        age: 7,
        date: "2017-11-05T17:05Z"
    },

    {
        name: "sam",
        age: 7,
        date: "2018-11-05T17:15Z"
    },
     {
        name: "sam",
        age: 7,
        date: "2017-11-05T17:25Z"
    },
        {
        name: "sam",
        age: 7,
        date: "2017-11-06T17:05Z"
    },
        {  name: "bob",
        age: 76,
        date: "2015-11-01T14:00Z"
    }
]

// this sorts numbers but not other fields
// stuff.sort(function(a, b){
//     var dateA=new Date(a.date), dateB=new Date(b.date)

//     return dateA-dateB //sort by date ascending
// })

// console.log(stuff);

// EXAMPLE 3: Remove dupes

// var uniques = [];
// sortEmUp(stuff,(sorted)=>{
//     //console.log(sorted);

//     removem(sorted, (deduped)=>{
//         console.log(deduped);
//         })
//     });


// **** STOPPED HERE -- I NEED TO REMOVE DUPES WITH IDENTICAL DATES AND TILES!!!

// Function to remove dupes
// BUT THESE NEED TO BE SORTED FIRST!!
// Sort and then remove the dupes that have a different time/date
function removem(resultz, callback){
    var uniques = [resultz[0]]; // first one is always unique, so just add manually
    var numberRecords = resultz.length;
    i=1;
    
    while (i < numberRecords){
        if(resultz[i].date != resultz[i-1].date ){
            uniques.push(resultz[i]);
        }
            i++;
    }

    callback(uniques);
}

function sortEmUp(stuff,callback){
    stuff.sort(function(a, b){
    var dateA=new Date(a.date), dateB=new Date(b.date)
    return dateA-dateB //sort by date ascending
})
callback(stuff);
}



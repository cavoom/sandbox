var fruits = ["Banana", "Orange", "Apple", "Mango"];
var date1 = '2017-12-03';
var date2 = '2017-12-02';
var date3 = '2017-12-05';

// *** stoppped here!
console.log(date1);
var stuff = [
    {
    name: "dave",
    age: 21,
    date: date1
    },
    
    {  name: "bob",
        age: 76,
        date: date2
    },

    {
        name: "sam",
        age: 7,
        date: date3
    }

]
//stuff.sort(); // this sorts arrays, but not arrays of objects

// this sorts numbers but not other fields
stuff.sort(function(a, b){
    var dateA=new Date(a.date), dateB=new Date(b.date)
    return dateA-dateB //sort by date ascending
})

console.log(stuff);


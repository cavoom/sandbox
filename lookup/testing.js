var counter = 0;
var stuff = "";
var numberOfRecords = 4;
while (counter < numberOfRecords){
    goDoStuff(counter,(stuff)=>{
        console.log(counter, 'i am in the while loop: ', stuff);
        ++counter;
    })
//console.log('i am in the while loop', counter);
 
}
console.log

function goDoStuff(counter,callback){
// do some stuff    
}
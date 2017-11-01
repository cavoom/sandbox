// This program removes duplicate elements from an array

var resultz = ['cars', 'cars', 'dogs', 'elephants', 'elephants', 'elephants', 'fox','fox'];
console.log(resultz);
removem(resultz,(noDupes)=>{
    console.log(noDupes);
})
// REMOVE FUNCTION
function removem(resultz, callback){
    var uniques = [resultz[0]]; // first one is always unique, so just add manually
    var numberRecords = resultz.length;
    i=1;
    
    while (i < numberRecords){
        if(resultz[i] != resultz[i-1]){
            uniques.push(resultz[i]);
        }
            i++;
    }

    callback(uniques);
}
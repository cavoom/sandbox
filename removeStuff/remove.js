// This program removes duplicate elements from an array
// Part 2 is replace

//var resultz = ['cars', 'cars', 'dogs', 'elephants', 'elephants', 'elephants', 'fox','fox'];
//console.log(resultz);
//removem(resultz,(noDupes)=>{
    //console.log(noDupes);
//})

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

// Replace stuff

var newLocation = "";

  stuff = {
    "sessionId": "11050",
    "sessionTitle": "Congenital and Acquired Neutropenia",
    "firstName": "Brian R ",
    "lastName": "Curtis ",
    "credentials": "PhD D(ABMLI)",
    "sessionStartTime": "2017-12-10T09:30:00Z",
    "sessionEndTime": "2017-12-10T11:00:00Z",
    "startTime": "4:30 AM",
    "endTime": "6:00 AM",
    "sessionLocation": "Bldg B- Lvl 2- B211-B212",
    "key_AorB": "A",
    "sessiondate": "12/10/2017 12:00:00 AM",
    "property": "Georgia World Congress Center",
    "papertitle": "Drug-Induced Neutropenia",
    "keywords": "Diseases, Diseases - Immune Disorders, Diseases - Immune Disorders - Neutropenia, Diseases - Immune Disorders - White Blood Cell Disorders, Mechanisms, Mechanisms - Molecular Interactions, Therapies, Therapies - Non-Biological",
    "combinedName": "doctor brian r curtis "
  }

  console.log(stuff.sessionLocation);
  newLocation = stuff.sessionLocation;
  newLocation = newLocation.replace(/-/g,"\,");
  console.log(newLocation);

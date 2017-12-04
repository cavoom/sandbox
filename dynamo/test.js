// // ***************************************
var AWS = require("aws-sdk");
var params = {};
var saveIntent = "none";
var saveItem = "none";

// generate a random stationId
var stationId = String(Math.floor((Math.random() * 9999999999)));

AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
    });

    var docClient = new AWS.DynamoDB.DocumentClient();

// This goes into each Intent before execution
    analytics(stationId, saveIntent, saveItem, (stuff)=>{
        })

// **************************************************************
function analytics(stationId, saveIntent, saveItem, callback){

    params = {
        TableName:"ash",
        Item:{
            "stationId": stationId,
            "intent": saveIntent,
            "item": saveItem
        }
    };

    docClient.put(params, function(err, data) { // this has a callback, so need to nest our callback!
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            callback(err);
        } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
                callback(data);
            }
        });

}
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

    var params = {
        TableName: "Movies",
        Item: {
            "year":  2020,
            "title": "dank 2 movie",
            "info":  "get some more info 5"
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add movie - Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:");
       }
    });


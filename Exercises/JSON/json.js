var express = require("express");
var fs = require("fs");
var app = express();
var jsonStr = undefined;

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function read(err, jsonObject){
        if(err){
            console.log(err);
        }
        jsonStr = JSON.parse(jsonObject);
        res.json(jsonStr);
    });
});
app.listen(process.argv[2]);
const express = require('express');
const bodyParser = require('body-parser')

const app = express(); 

//get
app.get('/', function(req, res) {  
    res.send('Hello getMethod');
    console.log(items)
});  

//post
app.post('/', function(req, res) {
    res.send("Hello postMethod")
})

//patch
app.patch("/", (request, response) => {
    response.send("Hello patchMethod")
})

//delete
app.delete("/", (request, response) => {
    response.send("Hello deleteMethod")
})

var server = app.listen(3000, function() { });
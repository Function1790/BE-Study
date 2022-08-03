const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.json());

//params
app.get('/params/:id', function(req, res) {  
    res.send("id : " + req.params.id)
});  

//query - GET, DELETE
app.get('/query', function(req, res) {
    res.send("GET : " + req.query.id)
})

app.delete('/query', function(req, res) {
    res.send("DEL : " + req.query.id)
})

//body - POST, PATCH
app.post('/body', function(req, res) {
    res.send("POST : " + req.body)
    console.log(req.body);
})

app.patch('/body', function(req, res) {
    res.send("PATCH : " + req.body)
    console.log(req.body);
})


var server = app.listen(3000, function() { })
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1790',
    database: 'test',
});
connection.connect();

const app = express(); 

app.use(bodyParser.json());

//params
app.get('/', function(req, res) { 
    connection.query('SELECT * from user', (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ', rows);
    }); 
    res.send("i ");
});  

var server = app.listen(3000, function() { })
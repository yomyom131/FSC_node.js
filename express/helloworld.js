const express = require('express');

const app = express();

app.get('/', function (req,res) {
    req.setEncoding('Hello World');
}) 

app.listen(3000, function () {
    console.log('listening: http://localhost:3000');
});
const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("Hello World application");
});

app.listen(80);

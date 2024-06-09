const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("Hello World application on ecs fargate");
});

app.listen(80);

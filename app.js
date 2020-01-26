const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const {mongoose} =  require('./db.js');
const bibleController = require('./Controller/BibleController.js');
var app= express();
var port =  process.env.PORT || 3000
app.use(bodyparser.json());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
app.use('/bible',bibleController);
app.listen(port,()=>console.log('server started at port '+port));


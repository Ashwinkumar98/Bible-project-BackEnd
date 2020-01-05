const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const {mongoose} =  require('./db.js');
const bibleController = require('./Controller/BibleController.js');
var app= express();

app.use(bodyparser.json());
app.use(cors({origin:"http://localhost:3001"}));
app.use('/bible',bibleController);
app.listen(3000,()=>console.log('server started at port 3000'));


const express = require('express');
const router = express.Router();
var {Book} = require('../model/Book');
var {Title} = require('../model/heading');
const bible =  require('../bible.json');

router.get('/:title',(req,res)=>{
    Book.find({title : req.params.title},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(err);
        }
    });
});

router.get('/',(req,res)=>{
    Title.find((err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;
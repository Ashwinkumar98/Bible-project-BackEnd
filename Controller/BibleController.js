const express = require('express');
const router = express.Router();
var {Book} = require('../model/Book');
var {Title} = require('../model/heading');
const bible =  require('../bible.json');

router.get('/:title',(req,res)=>{
    console.log(req.params.title);
    Book.find({title : req.params.title},(err,doc)=>{
        if(!err){
            console.log(doc);
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

router.get('/title/:title/chapterno/:chap/no/:no',(req,res)=>{
    Book.find({title : req.params.title},(err,doc)=>{
        if(!err){
            res.send(doc[0].Chapter[req.params.chap].Verse[req.params.no]);
        }
        else{
            console.log(err);
        }
    });
});

router.get
module.exports = router;
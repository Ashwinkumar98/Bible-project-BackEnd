const mongoose = require('mongoose');

var Book = mongoose.model('Book',{
    title : {
        type : String,
        require:true
    },
    Chapter : [{
        Verse : [{
            Verseid : {
                type:String,
                require : true
            },
            Verse :{
                type : String,
                require : true
            }
        }]
    }]
})

module.exports = {Book};
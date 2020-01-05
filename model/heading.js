const mongoose = require('mongoose');

var Title = mongoose.model('Title',{
   _id : {
       type : Number,
       require : true
   },
   name:{
       type:String,
       require:true
   }
})

module.exports = {Title};
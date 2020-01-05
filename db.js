  
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashwinkumar:aswin58200@cluster0-sadiy.mongodb.net/bible?retryWrites=true&w=majority',(err)=>
{
    if(!err)
    {
        console.log('MongoDb connected Successfully');
    }
    else
    {
        console.log('Not Connected to MongoDb.. :' + JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;
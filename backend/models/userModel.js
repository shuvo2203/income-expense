const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'enter your name']
    },
    email:{
        type:String,
        required:[true, 'enter your email'],
        unique:true
    },
    password:{
        type:String,
        reuqired:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('user', userSchema);
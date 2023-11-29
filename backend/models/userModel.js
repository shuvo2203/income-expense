const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

userSchema.pre("save", async function(){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
})

module.exports = mongoose.model('user', userSchema);
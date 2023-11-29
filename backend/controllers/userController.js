const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


exports.createUser=async(req, res)=>{
    const{name, email, password} = req.body;
    const existUser = await User.findOne({email:email});
    if(existUser){
        res.status(400).json('this user already registered, please login');
    }
    const user = await User.create({
        name,
        email,
        password
    });
    res.status(200).json({
        success:true,
        user
    });
}


exports.login=async(req, res)=>{
    const{email, password} = req.body;
    const user = await User.findOne({email:email}).select("+password");
    if(!user){
        res.status(400).json('user not registered')
    }
    isMatch =await bcrypt.compare(password, user.password);
    if(!isMatch){
        res.status(400).json('wrong password');
    }
    res.status(200).json({
        success:true,
        message:"login successfull",
        user
    });
}
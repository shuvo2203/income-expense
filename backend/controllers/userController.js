const User = require('../models/userModel');



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
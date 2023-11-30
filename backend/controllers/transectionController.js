const Transection = require('../models/transectionModel');
const User = require('../models/userModel')



exports.addTransection=async(req, res)=>{
    const transection = await Transection.create(req.body);
    res.status(200).json({
        success:true,
        transection
    });
}

exports.getAllTransection=async(req, res)=>{
    const allTransection = await Transection.find({userid:req.body.id});
    if(!allTransection){
        res.status(400).json('Transection not found');
    }
    res.status(200).json({
        success:true,
        allTransection
    });
}
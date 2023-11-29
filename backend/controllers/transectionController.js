const Transection = require('../models/transectionModel');



exports.addTransection=async(req, res)=>{
    const{amount,category,description,date} = req.body;
    const transection = await Transection.create({
        amount,category,description,date
    });
    res.status(200).json({
        success:true,
        transection
    });
}

exports.getAllTransection=async(req, res)=>{
    const allTransection = await Transection.find({});
    if(!allTransection){
        res.status(400).json('Transection not found');
    }
    res.status(200).json({
        success:true,
        allTransection
    });
}
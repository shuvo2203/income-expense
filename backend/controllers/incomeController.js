const Income = require('../models/income');



exports.addIncome=async(req, res)=>{
    const{title,amount,type,date,category,description} = req.body;
    const income = await Income.create({
        title,
        amount,
        type,
        date,
        category,
        description
    });
    res.status(200).json({
        success:true,
        income
    });
}

exports.getAllIncome=async(req, res)=>{
    const incomes = await Income.find({});
    if(!incomes){
        res.status(400).json('no income found');
    }
    res.status(200).json({
        success:true,
        incomes
    });
}

exports.deleteIncome=async(req, res)=>{
    await Income.findByIdAndDelete(req.params.id);
    res.status(200).json('income deleted successfully');
}
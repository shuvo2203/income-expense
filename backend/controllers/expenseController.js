const Expense = require('../models/expense');



exports.addExpense=async(req, res)=>{
    const{title,amount,type,date,category,description} = req.body;
    const expense = await Expense.create({
        title,
        amount,
        type,
        date,
        category,
        description
    });
    res.status(200).json({
        success:true,
        expense
    });
}

exports.getAllExpenses=async(req, res)=>{
    const expenses = await Expense.find({});
    if(!expenses){
        res.status(400).json('no income found');
    }
    res.status(200).json({
        success:true,
        expenses
    });
}

exports.deleteExpense=async(req, res)=>{
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json('income deleted successfully');
}
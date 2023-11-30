const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:[true, 'userid is required']
    },
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    category: {
        type: String,
        required: [true, 'category is requied']
    },
    type:{
        type:String,
        required:[true,'type is required']
    },
    refrence: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    date: {
        type: String,
        required: [true, 'date is required']
    }
}, { timestamps: true });

module.exports = mongoose.model('transection', transectionSchema);
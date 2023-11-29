const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    category: {
        type: String,
        required: [true, 'category is requied']
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
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: [true, 'Please Enter Your sender Name']
    },
    receiver: {
        type: String,
        required: [true, 'Please Enter Your receiver Name']
    },
    transamount:{
        type: Number,
        required: [true, 'Please Enter Your Amount']
    }
})


const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = Transaction;

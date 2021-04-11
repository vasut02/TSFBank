const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: [true, 'Please Enter Your Name']
    },
    receiver: {
        type: String,
        required: [true, 'Please Enter Your Name']
    },
    transamount:{
        type: Number,
        required: [true, 'Please Enter Your Amount']
    }
})


const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;

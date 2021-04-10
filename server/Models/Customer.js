const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail')

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Your Name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your Email-Id'],
        unique: true,
        validate: [isEmail, 'Please Type Valid Email-Id'],
        lowercase: true
    },
    mobileNo:{
        type: Number,
        required: [true, 'Please Enter Your Mobile Number'],
        minlength: [10, 'Please enter valid Mobile Number']
    },
    balance:{
        type: Number,
        required: [true, 'Please Select Service'],
    }

})


const Appointment = mongoose.model('Appointment', CustomerSchema);
module.exports = Appointment;

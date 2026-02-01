const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,
    email: { type: String, unique: true },
    phone: { type: String },
    password: String,
    role: {
        type: String,
        enum: ['user', 'counselor'],
        default: 'user'
    },
    isVerified: { type: Boolean, default: false },
    upiId: String,
    fees: Number,
    profilePic: String,
    otp: String,
    otpExpiry: Date,
    fee: Number,
    createdAt: { type: Date, default: Date.now } // <-- ADD THIS LINE
});

module.exports = mongoose.model('User', userSchema);


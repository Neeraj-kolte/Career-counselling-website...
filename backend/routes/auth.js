const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const bcrypt = require('bcryptjs');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

// ❌ Yeh galat hai, isko hata do
// const counsellors = await User.find(...);

// ✔️ Yeh sahi hai, route ke andar likho:
router.get('/counsellors', async (req, res) => {
    try {
      const counsellors = await User.find(
        { role: 'counselor', isVerified: true },
        'fullname email phone fees upiId'
      );
      res.json({ success: true, counsellors });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch counsellors.' });
    }
});


// Nodemailer transporter (from .env)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// 1. Send OTP
router.post('/send-otp', async (req, res) => {
    const { email, role } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser && existingUser.isVerified) {
            return res.json({ success: false, message: 'Email already registered and verified.' });
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

        if (existingUser) {
            existingUser.otp = otp;
            existingUser.otpExpiry = otpExpiry;
            existingUser.role = role;
            await existingUser.save();
        } else {
            const newUser = new User({
                email,
                role,
                otp,
                otpExpiry,
                isVerified: false
            });
            await newUser.save();
        }

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your CareerGuide OTP',
            text: `Your OTP for registration is: ${otp}`
        });

        res.json({ success: true, message: 'OTP sent to email.' });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Failed to send OTP.' });
    }
});

// 2. Verify OTP and Register
router.post('/verify-register', async (req, res) => {
    // const { name, email, password, role, otp } = req.body;
    const { name, email, phone, password, role, otp } = req.body; // <-- phone add karo

     // Phone format fix (India ke liye)
     let fixedPhone = phone;
     if (/^\d{10}$/.test(phone)) {
         fixedPhone = '+91' + phone;
     }
 
     // Validation (international format)
     if (!/^\+\d{10,15}$/.test(fixedPhone)) {
         return res.json({ success: false, message: 'Phone number must be in international format (e.g., +919876543210)' });
     }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.json({ success: false, message: 'User not found.' });
        if (user.isVerified) return res.json({ success: false, message: 'User already verified.' });
        if (user.otp !== otp) return res.json({ success: false, message: 'Invalid OTP.' });
        if (user.otpExpiry < new Date()) return res.json({ success: false, message: 'OTP expired.' });

        const hashedPassword = await bcrypt.hash(password, 10);
        user.fullname = name;
        user.phone = phone; // <-- phone save karo
        user.password = hashedPassword;
        user.role = role;
        user.isVerified = true;
        user.otp = null;
        user.otpExpiry = null;

        await user.save();

        res.json({
            success: true,
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone,
                role: user.role,
                createdAt: user.createdAt // <-- ADD THIS LINE
            }
        });
        
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Registration failed.' });
    }
});

// 3. Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        if (!user.isVerified) {
            return res.status(400).json({ message: 'User not verified. Please verify your account.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.json({
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone,        // <-- ADD THIS LINE
                role: user.role,
                createdAt: user.createdAt // <-- ADD THIS LINE
            }
        });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// Counsellor list API
router.get('/counsellors', async (req, res) => {
    try {
      const counsellors = await User.find({ role: 'counselor', isVerified: true }, );
      res.json({ success: true, counsellors });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch counsellors.' });
    }
  });
  
  

module.exports = router;

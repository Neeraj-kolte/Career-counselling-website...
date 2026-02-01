require('dotenv').config({ path: __dirname + '/project.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const counsellorRoutes = require('./routes/counsellor');
const userRoutes = require('./routes/user');
const Contact = require('./models/contact');
const assessmentRoutes = require('./routes/assessment');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/assessment', assessmentRoutes);

// app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend files
app.use('/api/counsellor', counsellorRoutes);
app.use('/api/user', userRoutes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ----------- AUTH ROUTES (OTP Registration) -----------
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// ----------- GENERAL EMAIL SEND ROUTE -----------
app.post('/send-email', async (req, res) => {
    const { to, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: `"Career Counselling" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text: message
        });

           // Extract name, email, message from the message body (since frontend sends all in message)
        // Format: "From: Name <email>\n\nmessage"
        let name = '', email = '', msg = '';
        const match = message.match(/^From: (.+) <(.+?)>\n\n([\s\S]*)$/);
        if (match) {
            name = match[1];
            email = match[2];
            msg = match[3];
        }

        // Save to DB only if email sent successfully
        if (name && email && msg) {
            await Contact.create({ name, email, message: msg });
        }

        res.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

// ----------- TWILIO CALL ROUTE -----------
app.post('/make-call', (req, res) => {
  let { to } = req.body;
  if (!to) {
    console.error('No phone number provided in request body!');
    return res.status(400).json({ error: 'No phone number provided.' });
    }
    
    // Agar 10 digit ka hai toh +91 laga do (India ke liye)
    if (/^\d{10}$/.test(to)) {
      to = '+91' + to;
      }
      console.log('Twilio Call Request:', { to, from: process.env.TWILIO_PHONE });
    const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


  client.calls.create({
      twiml: '<Response><Say>Hello from Career Counselling. Please wait while we connect you to the recipient.</Say></Response>',
      to: to,
      from: process.env.TWILIO_PHONE
  })
  .then(call => {
      res.json({ success: true, message: 'Call initiated successfully!' });
  })
  .catch(err => {
      console.error('Twilio Call Error:', err);
      res.status(500).json({ error: 'Failed to initiate call.', details: err.message });
  });
});

// (Optional) Serve register.html as default
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📝 OTP endpoint: POST http://localhost:${PORT}/api/send-otp`);
    console.log(`🔑 OTP Verify endpoint: POST http://localhost:${PORT}/api/verify-register`);
    console.log(`📧 Email endpoint: POST http://localhost:${PORT}/send-email`);
    console.log(`📞 Call endpoint: POST http://localhost:${PORT}/make-call`);
});

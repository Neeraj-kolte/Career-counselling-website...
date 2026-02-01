const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assessment');
const CounsellingRequest = require('../models/CounsellingRequest');

router.post('/request', async (req, res) => {
  const { userId, counsellorId, paymentRef, type } = req.body;
  try {
    const userObjId = new mongoose.Types.ObjectId(userId);
    const counsellorObjId = new mongoose.Types.ObjectId(counsellorId);

    const newRequest = new CounsellingRequest({
      userId: userObjId,
      counsellorId: counsellorObjId,
      paymentRef,
      type,
      status: 'pending'
    });
    await newRequest.save();
    res.json({ success: true, request: newRequest });
  } catch (err) {
    console.error("Failed to create request:", err);
    res.json({ success: false, message: "Failed to create request" });
  }
});

// user.js me yeh add karo:
router.get('/my-requests', async (req, res) => {
    const { userId } = req.query;
    try {
      const requests = await CounsellingRequest.find({ userId });
      res.json({ success: true, requests });
    } catch (err) {
      res.json({ success: false, message: "Failed to fetch user requests" });
    }
  });
  
// user.js me yeh add karo:
router.post('/contact-preference', async (req, res) => {
    const { requestId, preference } = req.body;
    try {
      const request = await CounsellingRequest.findById(requestId);
      if (!request) return res.json({ success: false, message: 'Request not found' });
      request.userContactPreference = preference;
      await request.save();
      res.json({ success: true });
    } catch (err) {
      res.json({ success: false, message: 'Failed to save contact preference' });
    }
  });
  
  // routes/user.js (or similar)
  router.get('/assessments', async (req, res) => {
    const { userId } = req.query;
    if (!userId) return res.json({ success: false, message: "Missing userId" });
    try {
      const objUserId = new mongoose.Types.ObjectId(userId);
      const assessments = await Assessment.find({ userId: objUserId }).sort({ createdAt: -1 });
      res.json({ success: true, assessments });
    } catch (err) {
      console.error("Error in /api/user/assessments:", err);
      res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
  });
  


module.exports = router;

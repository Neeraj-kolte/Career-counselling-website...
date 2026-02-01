const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Request = require('../models/CounsellingRequest'); // <-- YEH LINE ADD KARO

// GET profile (by email from query or logged in user)
router.get('/profile', async (req, res) => {
  const email = req.query.email;
  try {
    const user = await User.findOne({ email, role: "counselor" });
    if (!user) return res.json({ success: false, message: "Counsellor not found" });
    res.json({ success: true, profile: user });
  } catch (err) {
    res.json({ success: false, message: "Error fetching profile" });
    }
    });
    
    // POST update profile
    router.post('/profile', async (req, res) => {
      const { fullname, upiId, fees } = req.body;
      // For demo: email from frontend localStorage (secure apps me session/token se lo)
      const email = req.query.email || req.body.email;
      try {
        const user = await User.findOneAndUpdate(
          { email, role: "counselor" },
          { fullname, upiId, fees },
          { new: true }
          );
          if (!user) return res.json({ success: false, message: "Counsellor not found" });
          res.json({ success: true, profile: user });
          } catch (err) {
            res.json({ success: false, message: "Error updating profile" });
            }
            });
            
            // GET all requests for this counsellor
           // GET all requests for this counsellor
router.get('/requests', async (req, res) => {
  const email = req.query.email;
  try {
    const counsellor = await User.findOne({ email, role: "counselor" });
    if (!counsellor) return res.json({ success: false, message: "Counsellor not found" });
    const requests = await Request.find({ counsellorId: counsellor._id })
      .populate('userId', 'fullname email phone') // <-- YAHAN phone add karo!
      .sort({ createdAt: -1 });
    res.json({ success: true, requests });
  } catch (err) {
    res.json({ success: false, message: "Error fetching requests" });
  }
});

        
        // POST accept/decline request
        
        router.post('/requests/:id/status', async (req, res) => {
          const { status } = req.body; // 'accepted' or 'declined'
          try {
            // 1. Purani request fetch karo
            const request = await Request.findById(req.params.id);
            if (!request) return res.json({ success: false, message: "Request not found" });
        
            // 2. Counsellor ki fees nikaalo
            const counsellor = await User.findById(request.counsellorId);
            if (!counsellor) return res.json({ success: false, message: "Counsellor not found" });
        
            const fees = counsellor.fees || 0;
        
            // 3. Request ka status aur fees dono update karo
            const updatedRequest = await Request.findByIdAndUpdate(
              req.params.id,
              { status, fees },
              { new: true }
            );
        
            res.json({ success: true, request: updatedRequest });
          } catch (err) {
            res.json({ success: false, message: "Failed to update status" });
          }
        });
        
        
                
                module.exports = router;
                
                
                
                
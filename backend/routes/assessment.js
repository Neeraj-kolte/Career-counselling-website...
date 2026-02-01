const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assessment'); // Mongoose model
const User = require('../models/User');

// GET /api/assessment/questions
router.get('/questions', async (req, res) => {
  // Fetch questions from DB or static array
  const questions = await Assessment.getQuestions(); // Custom function
  res.json({ success: true, questions });
});

// POST /api/assessment/submit
router.post('/submit', async (req, res) => {
  const { userId, answers } = req.body;
  // Calculate result, save to DB, etc.
  const result = await Assessment.evaluateAndSave(userId, answers);
  res.json(result);
});

module.exports = router;

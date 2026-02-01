const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/user-insights', (req, res) => {
  const userId = req.query.userId;

  // Normally, you'd query your database here based on userId
  const sampleData = {
    userId: userId,
    careers: ['Data Analyst', 'ML Engineer'],
    skillGaps: ['Machine Learning', 'Advanced Excel'],
    courses: ['Coursera - ML Specialization', 'LinkedIn Learning - Excel Mastery'],
    trends: 'AI-related roles are expected to grow by 40% over the next 5 years.'
  };

  res.json(sampleData);
});

app.listen(5000, () => {
    console.log("🚀 Server running at http://localhost:3000");
  });
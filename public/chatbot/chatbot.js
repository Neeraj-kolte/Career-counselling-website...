const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log('API Key:', process.env.OPENAI_API_KEY ? 'Loaded' : 'Missing');

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful career counselor chatbot.' },
        { role: 'user', content: userMessage }
      ],
      max_tokens: 150,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ reply: 'Sorry, something went wrong with the AI response.' });
  }
});

app.listen(PORT, () => {
  console.log('Server running at http://localhost:${3000}');
});
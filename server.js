require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 4000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Chat endpoint with streaming
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    // Set headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: messages,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        console.log(content);
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    // Send end message
    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (error) {
    console.error('Error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Something went wrong' });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Something went wrong' })}\n\n`);
      res.end();
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
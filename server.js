import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.VITE_OPENAI_KEY,
});

// Endpoint to handle chat messages
app.post('/ask-assistant', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o", // or "gpt-4"
            messages: [
                {
                    role: "system",
                    content: "You are a expert portfolio assistant for Lawrence Pinto. Answer questions about his home, education, skills, certifications, work experience, strengths, key highlights and projects. If asked for personal information like email or phone number, politely decline and suggest visiting the portfolio website for contact details. Format your responses using Markdown. For example, use **bold** for headings and - for lists.",
                },
                { role: "user", content: userMessage },
            ],
            max_tokens: 1500, // Limit response length
        });
        
        const formattedReply = markdownToHtml(response.choices[0].message.content);
        res.json({ reply: formattedReply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
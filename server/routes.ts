import { config } from "dotenv";
import type { Express } from "express";
import { createServer, type Server } from "http";
import Anthropic from '@anthropic-ai/sdk';

// Load environment variables from .env file
config();

// the newest Anthropic model is "claude-3-5-sonnet-20241022" which was released October 22, 2024
const MODEL = "claude-3-5-sonnet-20241022";

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("ANTHROPIC_API_KEY environment variable is required");
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export function registerRoutes(app: Express): Server {
  app.post("/api/translate", async (req, res) => {
    try {
      const { text, targetLanguage = 'ja' } = req.body;

      if (!text || typeof text !== "string") {
        return res.status(400).send("Text is required");
      }

      let prompt = "";
      
      if (targetLanguage === 'ja') {
        prompt = `Translate the following English text to Japanese. Provide:
1. The Japanese characters
2. The romaji reading
3. Break down the pronunciation into syllables (separated by hyphens)

Format the response as JSON with "japanese", "romaji", and "syllables" keys.

English text: ${text}`;
      } else if (targetLanguage === 'es') {
        prompt = `Translate the following English text to Mexican Spanish. Use Mexican vocabulary and expressions where appropriate. Provide:
1. The Mexican Spanish translation
2. A pronunciation guide using simple phonetic spelling for Mexican Spanish pronunciation
3. Any important grammar notes (optional)

Format the response as JSON with "translation", "pronunciation", and optionally "grammar" keys.

English text: ${text}`;
      } else {
        return res.status(400).send("Unsupported target language");
      }

      const response = await anthropic.messages.create({
        max_tokens: 1024,
        messages: [{
          role: "user",
          content: prompt
        }],
        model: MODEL,
      });

      // Get the content from the first message - it should be text content
      const content = response.content[0];
      if (content.type !== 'text') {
        throw new Error('Expected text response from Claude');
      }

      try {
        const result = JSON.parse(content.text);
        res.json(result);
      } catch (e) {
        // Fallback in case the response isn't valid JSON
        const lines = content.text.split('\n');
        if (targetLanguage === 'ja') {
          res.json({
            japanese: lines[0] || "",
            romaji: lines[1] || "",
            syllables: lines[2] || "",
          });
        } else {
          res.json({
            translation: lines[0] || "",
            pronunciation: lines[1] || "",
          });
        }
      }
    } catch (error) {
      console.error("Translation error:", error);
      res.status(500).send("Failed to translate text");
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
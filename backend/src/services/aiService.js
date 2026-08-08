import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.geminiApiKey,
});

export async function analyzeReviews(reviews) {
  if (!env.geminiApiKey) {
    throw new Error("GEMINI_API_KEY is missing.");
  }

  const reviewText = reviews
    .map((review, index) => {
      return `
Review ${index + 1}
Rating: ${review.rating}/5
Title: ${review.title}
Review: ${review.body}
`;
    })
    .join("\n");

  const prompt = `
You are ReviewLens, an expert app review analysis system.

Analyze the following app reviews.

Return ONLY valid JSON.

Use exactly this structure:

{
  "summary": "string",
  "pros": ["string"],
  "cons": ["string"],
  "sentiment": {
    "positive": 0,
    "neutral": 0,
    "negative": 0
  },
  "topics": ["string"],
  "recommendation": {
    "verdict": "string",
    "bestFor": ["string"],
    "avoidIf": ["string"],
    "confidence": 0
  }
}

Rules:
- Sentiment percentages must add up to 100.
- Confidence must be between 0 and 100.
- Base everything only on the provided reviews.
- Do not invent facts.
- Keep the summary concise.
- Return JSON only.
- Do not use Markdown.

Reviews:

${reviewText}
`;

  try {
    const response = await ai.models.generateContent({
      model: env.geminiModel,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    if (!response.text) {
      throw new Error("Gemini returned an empty response.");
    }

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini error:", error.message);
    throw new Error(`AI analysis failed: ${error.message}`);
  }
}
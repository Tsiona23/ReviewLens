import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.geminiApiKey,
});

export async function analyzeReviews(reviews) {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    throw new Error("No reviews available for analysis.");
  }

  const reviewText = reviews
    .map((review, index) => {
      return `
Review ${index + 1}
Rating: ${review.rating}/5
Title: ${review.title || "No title"}
Review: ${review.body}
`;
    })
    .join("\n");

  const prompt = `
You are ReviewLens, an AI system that analyzes real app reviews.

Analyze the following user reviews and return ONLY valid JSON.

REVIEWS:
${reviewText}

Return exactly this structure:

{
  "summary": "A concise summary of what users generally think about the app.",
  "pros": [
    "Main positive point",
    "Main positive point",
    "Main positive point"
  ],
  "cons": [
    "Main negative point",
    "Main negative point",
    "Main negative point"
  ],
  "sentiment": {
    "positive": 0,
    "neutral": 0,
    "negative": 0
  },
  "topics": [
    "Topic",
    "Topic",
    "Topic",
    "Topic"
  ],
  "recommendation": {
    "verdict": "Worth Downloading",
    "bestFor": [
      "Type of user who would enjoy this app"
    ],
    "avoidIf": [
      "Type of user who may dislike this app"
    ],
    "confidence": 0
  }
}

Rules:

1. Base everything ONLY on the provided reviews.
2. Do not invent complaints or positive points.
3. sentiment values must be percentages.
4. positive + neutral + negative must equal 100.
5. confidence must be between 0 and 100.
6. Keep pros and cons concise.
7. topics should represent recurring themes.
8. verdict must be one of:
   "Worth Downloading"
   "Maybe"
   "Not Recommended"
9. Return JSON only.
`;

  try {
    const response = await ai.models.generateContent({
      model: env.geminiModel,
      contents: prompt,
    });

    const text = response.text?.trim();

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    const cleaned = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error("AI analysis error:", error);

    throw new Error("Failed to analyze reviews with AI.");
  }
}
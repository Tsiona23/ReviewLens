
import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.geminiApiKey,
});

export async function analyzeReviews(reviews) {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    throw new Error("No reviews available for analysis.");
  }

  // Convert real reviews into a format the AI can understand.
  const reviewText = reviews
    .map((review, index) => {
      return `Review ${index + 1}
Rating: ${review.rating}/5
Title: ${review.title || "No title"}
Review: ${review.body || "No review text"}`;
    })
    .join("\n");

  const prompt = `
You are ReviewLens, an AI system that analyzes real user reviews of mobile applications.

Your job is to identify the overall user experience from the provided reviews.

IMPORTANT:

- Analyze ONLY the reviews provided below.
- Do not use outside knowledge about the app.
- Do not invent features, complaints, or praise.
- Identify recurring patterns rather than relying on one unusual review.
- Ratings can help understand the reviews, but the written review should also be considered.
- Keep the results concise and useful to someone deciding whether to download the app.

REVIEWS:
${reviewText}

Return an analysis using exactly this structure:

{
  "summary": "A concise 2-4 sentence summary of the overall user experience.",

  "pros": [
    "Most important recurring positive point",
    "Second recurring positive point",
    "Third recurring positive point"
  ],

  "cons": [
    "Most important recurring negative point",
    "Second recurring negative point",
    "Third recurring negative point"
  ],

  "topics": [
    "Most frequently discussed topic",
    "Second most frequently discussed topic",
    "Third most frequently discussed topic",
    "Fourth most frequently discussed topic"
  ],

  "recommendation": {
    "verdict": "Worth Downloading",
    "bestFor": [
      "Type of user who would benefit from the app"
    ],
    "avoidIf": [
      "Type of user who may dislike the app"
    ],
    "confidence": 0
  }
}

RULES:

1. Include only recurring or meaningful themes in pros, cons, and topics.

2. Do not invent information that does not appear in the reviews.

3. Keep each pro and con short and specific.

4. topics should contain 3-6 recurring themes.

5. verdict MUST be exactly one of:
   - "Worth Downloading"
   - "Maybe"
   - "Not Recommended"

6. confidence MUST be an integer between 0 and 100.

7. A high confidence score means the reviews provide strong and consistent evidence.
   A lower score means the reviews are mixed, limited, or contradictory.

8. Do NOT generate sentiment percentages.
   Sentiment is calculated separately by ReviewLens from the actual review ratings.

9. Return ONLY valid JSON.
`;

  try {
    console.log(
      `Sending ${reviews.length} real reviews to Gemini...`
    );

    const response = await ai.models.generateContent({
      model: env.geminiModel,
      contents: prompt,

      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text?.trim();

    if (!text) {
      throw new Error(
        "Gemini returned an empty response."
      );
    }

    const analysis = JSON.parse(text);

    // Basic validation before returning the AI result.
    validateAnalysis(analysis);

    console.log(
      "AI analysis generated successfully."
    );

    return analysis;
  } catch (error) {
    console.error("AI analysis error:", error);

    throw new Error(
      "Failed to analyze reviews with AI."
    );
  }
}

/**
 * Validate the structure returned by Gemini.
 */
function validateAnalysis(analysis) {
  if (!analysis || typeof analysis !== "object") {
    throw new Error("Invalid AI analysis.");
  }

  if (typeof analysis.summary !== "string") {
    throw new Error(
      "AI analysis is missing a summary."
    );
  }

  if (!Array.isArray(analysis.pros)) {
    throw new Error(
      "AI analysis is missing pros."
    );
  }

  if (!Array.isArray(analysis.cons)) {
    throw new Error(
      "AI analysis is missing cons."
    );
  }

  if (!Array.isArray(analysis.topics)) {
    throw new Error(
      "AI analysis is missing topics."
    );
  }

  if (!analysis.recommendation) {
    throw new Error(
      "AI analysis is missing a recommendation."
    );
  }

  if (
    ![
      "Worth Downloading",
      "Maybe",
      "Not Recommended",
    ].includes(
      analysis.recommendation.verdict
    )
  ) {
    throw new Error(
      "AI returned an invalid recommendation."
    );
  }

  if (
    !Array.isArray(
      analysis.recommendation.bestFor
    )
  ) {
    throw new Error(
      "AI recommendation is missing bestFor."
    );
  }

  if (
    !Array.isArray(
      analysis.recommendation.avoidIf
    )
  ) {
    throw new Error(
      "AI recommendation is missing avoidIf."
    );
  }

  if (
    typeof analysis.recommendation.confidence !==
      "number" ||
    analysis.recommendation.confidence < 0 ||
    analysis.recommendation.confidence > 100
  ) {
    throw new Error(
      "AI returned an invalid confidence score."
    );
  }
}



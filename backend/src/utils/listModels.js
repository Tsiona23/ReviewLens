import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.geminiApiKey,
});

async function listModels() {
  try {
    const response = await ai.models.list();

    for await (const model of response) {
      console.log(model.name);
    }
  } catch (error) {
    console.error("Failed to list Gemini models:", error);
  }
}

listModels();
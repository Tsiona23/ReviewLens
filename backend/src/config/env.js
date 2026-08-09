import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,

  geminiApiKey: process.env.GEMINI_API_KEY,

  geminiModel:
    process.env.GEMINI_MODEL || "gemini-3.5-flash-lite",
};
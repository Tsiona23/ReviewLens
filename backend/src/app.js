import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

app.use("/api", analyzeRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ReviewLens API is running.",
  });
});

export default app;
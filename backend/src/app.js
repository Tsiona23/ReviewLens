import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
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
import { analyzeReviews } from "../services/aiService.js";
import { getReviewsFromUrl } from "../services/reviewService.js";
import { sampleReviews } from "../utils/sampleReviews.js";

export async function analyzeController(req, res) {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "App URL is required.",
      });
    }

    const reviewData = await getReviewsFromUrl(url);

    const sampledReviews = sampleReviews(
      reviewData.reviews,
      100
    );

    if (sampledReviews.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No reviews were found for this app.",
      });
    }

    const analysis = await analyzeReviews(
      sampledReviews
    );

    return res.json({
      success: true,

      app: {
        url,
        store: reviewData.store,
        appId: reviewData.appId,
      },

      reviewStats: {
        totalAvailable: reviewData.reviews.length,
        analyzed: sampledReviews.length,
      },

      analysis,
    });
  } catch (error) {
    console.error("Analysis error:", error);

    return res.status(500).json({
      success: false,
      message:
        error.message || "Failed to analyze reviews.",
    });
  }
}
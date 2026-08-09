
import { analyzeReviews } from "../services/aiService.js";
import { getReviewsFromUrl } from "../services/reviewService.js";
import { sampleReviews } from "../utils/sampleReviews.js";

export async function analyzeController(req, res) {
  try {
    const { url } = req.body;

    // Validate URL
    if (!url) {
      return res.status(400).json({
        success: false,
        message: "App URL is required.",
      });
    }

    // Get real app information + real reviews
    const reviewData = await getReviewsFromUrl(url);

    // Limit the number of reviews sent to the AI
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

    console.log(
      `Analyzing ${sampledReviews.length} reviews...`
    );

    // Send REAL reviews to AI
    const analysis = await analyzeReviews(
      sampledReviews
    );

    // Return everything to the frontend
    return res.json({
      success: true,

      app: {
        ...reviewData.app,

        store: reviewData.store,
        appId: reviewData.appId,

        // Always use the original URL submitted by user
        url,
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
        error.message ||
        "Failed to analyze reviews.",
    });
  }
}


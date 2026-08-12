import { analyzeReviews } from "../services/aiService.js";
import { getReviewsFromUrl } from "../services/reviewService.js";
import { sampleReviews } from "../utils/sampleReviews.js";
import { calculateSentiment } from "../utils/calculateSentiment.js";

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
      500
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

    // Calculate sentiment directly from review ratings
    const sentiment = calculateSentiment(
      sampledReviews
    );

    console.log("Real sentiment:", sentiment);

    // Send REAL reviews to AI
    const analysis = await analyzeReviews(
      sampledReviews
    );

    // Replace Gemini's sentiment with the
    // sentiment calculated from real ratings
    analysis.sentiment = sentiment;

    // ==========================================
    // RATING DISTRIBUTION
    // ==========================================

    const ratingDistribution = sampledReviews.reduce(
      (distribution, review) => {
        const rating = Number(review.rating);

        if (rating >= 1 && rating <= 5) {
          distribution[rating] += 1;
        }

        return distribution;
      },
      {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      }
    );

    // ==========================================
    // REPRESENTATIVE REVIEWS
    // ==========================================

    const positiveReviews = sampledReviews
      .filter((review) => Number(review.rating) >= 4)
      .sort((a, b) => Number(b.rating) - Number(a.rating));

    const negativeReviews = sampledReviews
      .filter((review) => Number(review.rating) <= 2)
      .sort((a, b) => Number(a.rating) - Number(b.rating));

    const neutralReviews = sampledReviews.filter(
      (review) => Number(review.rating) === 3
    );

    const representativeReviews = [
      ...positiveReviews.slice(0, 2),
      ...negativeReviews.slice(0, 2),
      ...neutralReviews.slice(0, 1),
    ].map((review) => ({
      id: review.id,
      rating: Number(review.rating),
      body: review.body || review.text || "",
      date: review.date || null,
      language: review.language || "en",
      source: review.source || review.store || "google-play",
    }));

    console.log(
      `Selected ${representativeReviews.length} representative reviews.`
    );

    // ==========================================
    // RETURN EVERYTHING TO FRONTEND
    // ==========================================

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

        ratingDistribution,

        representativeReviews,
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



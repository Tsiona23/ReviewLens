import { reviews, sort } from "@mradex77/google-play-scraper";

export async function getGooglePlayReviews(appId) {
  if (!appId) {
    throw new Error("Google Play app ID is required.");
  }

  try {
    console.log(`Fetching reviews for: ${appId}`);

    const result = await reviews({
      appId,
      lang: "en",
      country: "us",
      sort: sort.NEWEST,
      num: 100,
    });

    const reviewList = Array.isArray(result)
      ? result
      : result.data || [];

    console.log(`Received ${reviewList.length} reviews.`);

    return reviewList.map((review, index) => ({
      id: review.id || `google-${index}`,
      rating: Number(review.score || review.rating || 0),
      title: review.title || "",
      body: review.text || review.content || "",
      language: review.lang || "en",
      date: review.date || null,
      source: "google-play",
    }));
  } catch (error) {
    console.error(
      "Google Play review error:",
      error.message
    );

    throw new Error(
      "Unable to retrieve Google Play reviews."
    );
  }
}
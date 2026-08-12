

import gplay from "@mradex77/google-play-scraper";

// ========================================
// GET GOOGLE PLAY APP INFORMATION
// ========================================

export async function getGooglePlayApp(appId) {
  console.log(`Fetching Google Play app information for: ${appId}`);

  try {
    const result = await gplay.app({
      appId,
      lang: "en",
      country: "us",
    });

    return {
      appId: result.appId,
      title: result.title,
      developer: result.developer,
      category: result.genre,
      rating: result.score,
      icon: result.icon,
      url: result.url,
    };
  } catch (error) {
    console.error("Google Play app error:", error);

    throw new Error("Unable to retrieve Google Play app information.");
  }
}


// ========================================
// GET GOOGLE PLAY REVIEWS
// ========================================

export async function getGooglePlayReviews(appId) {
  console.log(`Fetching reviews for: ${appId}`);

  try {
    const result = await gplay.reviews({
      appId,
      lang: "en",
      country: "us",
      sort: gplay.sort.HELPFULNESS,
      num: 500,
    });

    const reviews = Array.isArray(result)
      ? result
      : result.data || [];

    console.log(`Received ${reviews.length} reviews.`);

    return reviews.map((review) => ({
      id: review.id,
      rating: Number(review.score),
      title: review.title || "",
      body: review.text || "",
      language: "en",
      date: review.date,
      source: "google-play",
    }));
  } catch (error) {
    console.error("Google Play review error:", error);

    throw new Error("Unable to retrieve Google Play reviews.");
  }
}


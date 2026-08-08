export function normalizeReviews(reviews, source) {
  return reviews
    .map((review, index) => ({
      id: review.id || `${source}-${index}`,
      rating: Number(review.rating) || 0,
      title: review.title || "",
      body: review.body || "",
      language: review.language || "unknown",
      date: review.date || null,
      source,
    }))
    .filter((review) => review.body.trim().length > 0);
}
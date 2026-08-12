

export function sampleReviews(reviews, maxReviews = 100) {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return [];
  }

  if (reviews.length <= maxReviews) {
    return [...reviews];
  }

  // Reviews are already sorted by helpfulness
  // by the Google Play provider.
  //
  // Keep the most useful reviews rather than
  // randomly selecting reviews.
  return reviews.slice(0, maxReviews);
}


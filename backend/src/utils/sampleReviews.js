export function sampleReviews(reviews, maxReviews = 100) {
  if (!Array.isArray(reviews)) {
    return [];
  }

  if (reviews.length <= maxReviews) {
    return reviews;
  }

  const ratings = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };

  for (const review of reviews) {
    const rating = Number(review.rating);

    if (ratings[rating]) {
      ratings[rating].push(review);
    }
  }

  const sampled = [];

  const ratingsWithReviews = Object.values(ratings).filter(
    (group) => group.length > 0
  );

  const perRating = Math.floor(
    maxReviews / ratingsWithReviews.length
  );

  for (const group of ratingsWithReviews) {
    sampled.push(...group.slice(0, perRating));
  }

  return sampled.slice(0, maxReviews);
}
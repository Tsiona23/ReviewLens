
export function calculateSentiment(reviews) {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return {
      positive: 0,
      neutral: 0,
      negative: 0,
    };
  }

  let positive = 0;
  let neutral = 0;
  let negative = 0;

  for (const review of reviews) {
    const rating = Number(review.rating);

    if (rating >= 4) {
      positive++;
    } else if (rating === 3) {
      neutral++;
    } else if (rating >= 1) {
      negative++;
    }
  }

  const total = positive + neutral + negative;

  return {
    positive: Math.round((positive / total) * 100),
    neutral: Math.round((neutral / total) * 100),
    negative: Math.round((negative / total) * 100),
  };
}


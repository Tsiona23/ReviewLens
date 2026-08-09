import { getGooglePlayReviews } from "../services/providers/googlePlayProvider.js";

const appId = "com.spotify.music";

try {
  console.log("Fetching real Google Play reviews...\n");

  const reviews = await getGooglePlayReviews(appId);

  console.log(`Real reviews received: ${reviews.length}\n`);

  console.log(
    JSON.stringify(reviews.slice(0, 3), null, 2)
  );
} catch (error) {
  console.error("\nTest failed:");
  console.error(error.message);
}
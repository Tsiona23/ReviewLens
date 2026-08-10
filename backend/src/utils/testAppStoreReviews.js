import { getAppStoreReviews } from "../services/providers/appStoreProvider.js";

const APP_ID = "324684580";

console.log("Fetching real App Store reviews...");

try {
  const reviews = await getAppStoreReviews(APP_ID);

  console.log("\nREAL APP STORE REVIEWS:");
  console.log(JSON.stringify(reviews, null, 2));

  console.log(`\nTotal reviews: ${reviews.length}`);
} catch (error) {
  console.error("\nTest failed:");
  console.error(error.message);
}
import { validateAppUrl } from "../utils/validateAppUrl.js";
import { parseGooglePlayUrl } from "../utils/parseGooglePlayUrl.js";
import { parseAppStoreUrl } from "../utils/parseAppStoreUrl.js";
import { getMockReviews } from "./providers/index.js";

export async function getReviewsFromUrl(url) {
  const validation = validateAppUrl(url);

  if (!validation.valid) {
    throw new Error(
      "Unsupported app URL. Please provide a valid Google Play or Apple App Store URL."
    );
  }

  if (validation.store === "google-play") {
    const app = parseGooglePlayUrl(url);

    if (!app) {
      throw new Error("Could not identify the Google Play app.");
    }

    const reviews = await getMockReviews();

    return {
      store: "google-play",
      appId: app.appId,
      reviews,
    };
  }

  if (validation.store === "app-store") {
    const app = parseAppStoreUrl(url);

    if (!app) {
      throw new Error("Could not identify the App Store app.");
    }

    const reviews = await getMockReviews();

    return {
      store: "app-store",
      appId: app.appId,
      reviews,
    };
  }

  throw new Error("Unsupported app store.");
}
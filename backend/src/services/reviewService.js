
import { validateAppUrl } from "../utils/validateAppUrl.js";
import { parseGooglePlayUrl } from "../utils/parseGooglePlayUrl.js";
import { parseAppStoreUrl } from "../utils/parseAppStoreUrl.js";


import {
  getGooglePlayApp,
  getGooglePlayReviews,
} from "./providers/googlePlayProvider.js";
import { getAppStoreApp } from "./providers/appStoreAppProvider.js";


export async function getReviewsFromUrl(url) {
  const validation = validateAppUrl(url);

  if (!validation.valid) {
    throw new Error(
      "Unsupported app URL. Please provide a valid Google Play or Apple App Store URL."
    );
  }

  // =========================
  // GOOGLE PLAY
  // =========================

  if (validation.store === "google-play") {
    const parsedApp = parseGooglePlayUrl(url);

    if (!parsedApp) {
      throw new Error(
        "Could not identify the Google Play app."
      );
    }

    console.log(
      `Analyzing Google Play app: ${parsedApp.appId}`
    );

    // Fetch REAL app information
    const appInfo = await getGooglePlayApp(
      parsedApp.appId
    );

    // Fetch REAL reviews
    const reviews = await getGooglePlayReviews(
      parsedApp.appId
    );

    console.log(
      `App: ${appInfo.title} | Reviews: ${reviews.length}`
    );

    return {
      store: "google-play",

      appId: parsedApp.appId,

      app: appInfo,

      reviews,
    };
  }

  // =========================
  // APP STORE
  // =========================

if (validation.store === "app-store") {
  const parsedApp = parseAppStoreUrl(url);

  if (!parsedApp) {
    throw new Error(
      "Could not identify the App Store app."
    );
  }

  console.log(
    `Analyzing App Store app: ${parsedApp.appId}`
  );

  const appInfo = await getAppStoreApp(
    parsedApp.appId
  );

  throw new Error(
    `App Store review analysis is currently unavailable for "${appInfo.title}". Google Play analysis is currently supported.`
  );
}
  throw new Error("Unsupported app store.");
}


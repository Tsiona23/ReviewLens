import { getGooglePlayApp } from "../services/providers/googlePlayProvider.js";

const appId = "com.spotify.music";

try {
  console.log("Fetching real Google Play app information...");

  const app = await getGooglePlayApp(appId);

  console.log("\nREAL APP INFORMATION:");
  console.log(JSON.stringify(app, null, 2));
} catch (error) {
  console.error("\nTest failed:");
  console.error(error.message);
}

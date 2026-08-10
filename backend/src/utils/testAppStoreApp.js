import { getAppStoreApp } from "../services/providers/appStoreAppProvider.js";

const APP_ID = "553834731";

console.log("Fetching real App Store app information...");

try {
  const app = await getAppStoreApp(APP_ID);

  console.log("\nREAL APP STORE APP INFORMATION:");
  console.log(JSON.stringify(app, null, 2));
} catch (error) {
  console.error("\nTest failed:");
  console.error(error.message);
}
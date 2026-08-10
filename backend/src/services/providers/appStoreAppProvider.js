export async function getAppStoreApp(appId) {
  if (!appId) {
    throw new Error("App Store app ID is required.");
  }

  try {
    console.log(`Fetching App Store app information for: ${appId}`);

    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${encodeURIComponent(appId)}&country=us`
    );

    if (!response.ok) {
      throw new Error(`Apple Lookup API returned ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("App Store app not found.");
    }

    const app = data.results[0];

    return {
      appId: String(app.trackId),
      title: app.trackName || "",
      developer: app.artistName || "",
      category: app.primaryGenreName || "",
      rating: Number(app.averageUserRating || 0),
      icon: app.artworkUrl512 || app.artworkUrl100 || "",
      url: app.trackViewUrl || "",
    };
  } catch (error) {
    console.error(
      "App Store app information error:",
      error.message
    );

    throw new Error("Unable to retrieve App Store app information.");
  }
}
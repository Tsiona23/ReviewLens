import axios from "axios";

/**
 * Extracts the app ID from an Apple App Store URL.
 * @param {string} url - The App Store URL.
 * @returns {string|null} The app ID or null if not found.
 */
function extractAppId(url) {
  try {
    const urlObject = new URL(url);
    const path = urlObject.pathname;
    // Matches the /id<number> pattern in the URL path
    const match = path.match(/\/id(\d+)/);
    return match ? match[1] : null;
  } catch (error) {
    // Return null if the URL is invalid and cannot be parsed
    return null;
  }
}

/**
 * Fetches app details from the Apple App Store using the iTunes Search API.
 * @param {string} storeUrl - The full URL of the app on the App Store.
 * @returns {Promise<object>} A promise that resolves to a standardized app object.
 */
async function getApp(storeUrl) {
  const appId = extractAppId(storeUrl);
  if (!appId) {
    throw new Error("Invalid App Store URL or could not extract App ID.");
  }

  const apiUrl = `https://itunes.apple.com/lookup?id=${appId}`;

  try {
    const response = await axios.get(apiUrl);
    const result = response.data.results[0];

    if (!result) {
      throw new Error(`App with ID ${appId} not found on the App Store.`);
    }

    // Standardize the output object for consistent use in your application
    return {
      appId: result.trackId.toString(),
      title: result.trackName,
      developer: result.artistName,
      icon: result.artworkUrl512 || result.artworkUrl100,
      url: result.trackViewUrl,
      rating: result.averageUserRating,
      reviews: result.userRatingCount,
      description: result.description,
    };
  } catch (error) {
    console.error(`Error fetching App Store data for ID ${appId}:`, error.message);
    throw new Error("Failed to retrieve app details from the App Store.");
  }
}

export const appStoreService = {
  getApp,
};
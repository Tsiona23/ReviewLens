export function parseGooglePlayUrl(url) {
  try {
    const parsedUrl = new URL(url);

    if (
      parsedUrl.hostname !== "play.google.com" ||
      parsedUrl.pathname !== "/store/apps/details"
    ) {
      return null;
    }

    const appId = parsedUrl.searchParams.get("id");

    if (!appId) {
      return null;
    }

    return {
      store: "google-play",
      appId,
    };
  } catch {
    return null;
  }
}
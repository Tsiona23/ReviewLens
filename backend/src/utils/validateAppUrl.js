export function validateAppUrl(url) {
  try {
    const parsedUrl = new URL(url);

    const isGooglePlay =
      parsedUrl.hostname === "play.google.com" &&
      parsedUrl.pathname === "/store/apps/details";

    const isAppStore =
      parsedUrl.hostname === "apps.apple.com" &&
      parsedUrl.pathname.includes("/app/");

    if (isGooglePlay) {
      return {
        valid: true,
        store: "google-play",
      };
    }

    if (isAppStore) {
      return {
        valid: true,
        store: "app-store",
      };
    }

    return {
      valid: false,
      store: null,
    };
  } catch {
    return {
      valid: false,
      store: null,
    };
  }
}
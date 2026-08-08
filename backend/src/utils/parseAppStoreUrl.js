export function parseAppStoreUrl(url) {
  try {
    const parsedUrl = new URL(url);

    if (
      !parsedUrl.hostname.endsWith("apps.apple.com") ||
      !parsedUrl.pathname.includes("/app/")
    ) {
      return null;
    }

    const match = parsedUrl.pathname.match(/\/id(\d+)/);

    if (!match) {
      return null;
    }

    return {
      store: "app-store",
      appId: match[1],
    };
  } catch {
    return null;
  }
}
async function fetchAnalysisFromAPI(appUrl) {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: appUrl }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch analysis from the server.");
  }

  if (!data.success) {
    throw new Error(data.message || "Failed to analyze the app reviews.");
  }

  const analysis = data.analysis || {};
  const recommendation = analysis.recommendation;

  return {
    ...analysis,
    appName: analysis.appName || data.app?.appId || data.app?.store || "App",
    publisher: analysis.publisher || data.app?.store || "",
    verdict: analysis.verdict || (typeof recommendation === "object" ? recommendation.verdict : recommendation) || "",
    confidence: analysis.confidence ?? (typeof recommendation === "object" ? recommendation.confidence : undefined),
    recommendation:
      typeof recommendation === "object" ? recommendation.verdict : recommendation,
  };
}

export async function resultsLoader({ request }) {
  const url = new URL(request.url);
  const appUrl = url.searchParams.get("url");

  // 1. Input Validation: Ensure an app URL is provided.
  if (!appUrl) {
    // This will be caught by the nearest `errorElement`.
    throw new Response(
      JSON.stringify({
        message: "App URL not provided. Please go back and enter a URL.",
      }),
      { status: 400, headers: { "Content-Type": "application/json; charset=utf-8" } }
    );
  }

  try {
    // 2. API Call: Fetch the data.
    const analysis = await fetchAnalysisFromAPI(appUrl);

    // 3. Success: Return the data for the component.
    return { analysis };
  } catch (error) {
    // 4. Error Handling: Catch errors from the API call.
    console.error("Error in resultsLoader:", error);
    // Returning null allows the Results page to render a user-friendly error message
    // instead of crashing to the main errorElement. This is a better UX for API failures.
    return { analysis: null };
  }
}
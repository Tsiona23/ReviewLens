import { mockResult } from "../data/mockResult";

// A small utility to simulate network delay
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This function simulates fetching the analysis from a backend API.
 * In a real application, this would make a network request.
 * @param {string} appUrl - The URL of the app to analyze.
 * @returns {Promise<object>} - A promise that resolves to the analysis object.
 */
async function fetchAnalysisFromAPI(appUrl) {
  // In a real application, you would do something like this:
  // const response = await fetch(`https://your-api.com/analyze?url=${encodeURIComponent(appUrl)}`);
  // if (!response.ok) {
  //   const errorData = await response.json();
  //   throw new Error(errorData.message || "Failed to fetch analysis from the server.");
  // }
  // return response.json();

  console.log(`Simulating API call for: ${appUrl}`);
  await sleep(1500); // Simulate a 1.5 second network delay

  // You can test the error handling by passing a URL containing "fail"
  if (appUrl.includes("fail")) {
    throw new Error("Simulated API failure: The server could not process the request.");
  }

  // On success, return the mock data
  return mockResult;
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
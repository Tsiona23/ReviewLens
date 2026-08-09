const API_URL = "http://localhost:5000/api";

export async function analyzeApp(url) {
  if (!url || !url.trim()) {
    throw new Error("Please enter an app URL.");
  }

  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: url.trim(),
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Failed to analyze the app."
    );
  }

  return data;
}
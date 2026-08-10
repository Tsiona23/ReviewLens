
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "../ui/Button";
import { analyzeApp } from "../../services/analyzeService";

export const SearchBar = () => {
  const [appUrl, setAppUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent submitting while an analysis is already running
    if (loading) return;

    const trimmedUrl = appUrl.trim();

    // Basic empty-input validation
    if (!trimmedUrl) {
      setError("Please enter an app URL.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("Starting ReviewLens analysis...");

      // Send the URL to the backend
      const result = await analyzeApp(trimmedUrl);

      console.log("REAL REVIEWLENS ANALYSIS:", result);

      // Make sure the backend actually returned a successful result
      if (!result || result.success === false) {
        throw new Error(
          result?.message || "The analysis could not be completed."
        );
      }

      // Send the real analysis result to the Results page
      navigate("/results", {
        state: {
          result,
        },
      });
    } catch (error) {
      console.error("Analysis failed:", error);

      setError(
        error?.message ||
          "Something went wrong while analyzing the app. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        id="app-url-input"
        className="
          flex
          items-center
          gap-3
          p-2
          rounded-2xl
          border
          border-gray-800
          bg-gray-950
          max-w-xl
          transition
          focus-within:border-blue-300/40
          focus-within:ring-1
          focus-within:ring-blue-300/20
        "
      >
        <label htmlFor="app-url" className="sr-only">
          Paste app store URL
        </label>

        <Search
          size={20}
          className="ml-3 shrink-0 text-blue-300"
          aria-hidden="true"
        />

        <input
          id="app-url"
          value={appUrl}
          onChange={(event) => {
            setAppUrl(event.target.value);

            // Remove the error once the user starts correcting the input
            if (error) {
              setError("");
            }
          }}
          type="url"
          inputMode="url"
          placeholder="Paste app store URL..."
          disabled={loading}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "app-url-error" : undefined}
          className="
            flex-1
            min-w-0
            bg-transparent
            outline-none
            text-gray-300
            placeholder:text-gray-500
            px-2
            disabled:opacity-50
          "
        />

        <Button
          type="submit"
          disabled={loading}
          className="py-3 px-6 shrink-0"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </Button>
      </form>

      {error && (
        <p
          id="app-url-error"
          role="alert"
          className="mt-3 px-2 text-sm text-red-400"
        >
          {error}
        </p>
      )}

      {loading && (
        <p className="mt-3 px-2 text-sm text-gray-500">
          Fetching real reviews and generating your AI analysis...
        </p>
      )}
    </div>
  );
};


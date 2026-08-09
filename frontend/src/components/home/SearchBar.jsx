
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

    const trimmedUrl = appUrl.trim();

    if (!trimmedUrl) {
      setError("Please enter an app URL.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Send the URL to our backend
      const result = await analyzeApp(trimmedUrl);

      console.log("REAL REVIEWLENS ANALYSIS:", result);

      // Navigate to results page and pass the real result
      navigate("/results", {
        state: {
          result,
        },
      });
    } catch (error) {
      console.error("Analysis failed:", error);

      setError(
        error.message || "Something went wrong while analyzing the app."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl">
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
          transition-all
          duration-300
          focus-within:border-blue-300/50
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
        />

        <input
          id="app-url"
          value={appUrl}
          onChange={(event) => {
            setAppUrl(event.target.value);
            if (error) setError("");
          }}
          type="text"
          placeholder="Paste app store URL..."
          disabled={loading}
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
        <p className="mt-3 px-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};


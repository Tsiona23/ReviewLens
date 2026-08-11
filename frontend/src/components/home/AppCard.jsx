
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";

import { analyzeApp } from "../../services/analyzeService";

export const AppCard = ({ app }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!app?.url) {
      setError("App URL is not available.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log(
        `Analyzing popular app: ${app.name}`
      );

      // Send the real app URL to the backend.
      const result = await analyzeApp(app.url);

      console.log(
        "REAL POPULAR APP ANALYSIS:",
        result
      );

      // Send the real analysis to the Results page.
      navigate("/results", {
        state: {
          result,
        },
      });
    } catch (error) {
      console.error(
        "Popular app analysis failed:",
        error
      );

      setError(
        error.message ||
          "Failed to analyze this app."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-gray-800
        bg-gray-950/70
        p-6
        hover:border-blue-300/40
        transition-all
        duration-300
      "
    >
      {/* App information */}
      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <img
          src={app.image}
          alt={app.name}
          className="
            w-14
            h-14
            rounded-xl
            object-cover
          "
        />

        <div>
          <h3
            className="
              text-lg
              font-semibold
              text-white
            "
          >
            {app.name}
          </h3>

          <div
            className="
              flex
              items-center
              gap-1
              text-sm
              text-yellow-400
            "
          >
            <Star
              size={15}
              fill="currentColor"
            />

            {app.rating}
          </div>
        </div>
      </div>

      {/* Review count */}
      <p
        className="
          mt-5
          text-sm
          text-gray-400
        "
      >
        {app.reviews} reviews available
      </p>

      {/* Error */}
      {error && (
        <p
          className="
            mt-3
            text-sm
            text-red-400
          "
        >
          {error}
        </p>
      )}

      {/* Analyze button */}
      <button
        type="button"
        onClick={handleAnalyze}
        disabled={loading}
        className="
          mt-6
          w-full
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-300
          py-3
          text-sm
          font-semibold
          text-black
          hover:bg-blue-200
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {loading ? "Analyzing..." : "Analyze App"}

        {!loading && (
          <ArrowUpRight size={16} />
        )}
      </button>
    </div>
  );
};


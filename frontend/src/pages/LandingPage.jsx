import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export const LandingPage = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      setError("Please enter an app URL.");
      return;
    }

    // This logic navigates to a results page. It can be adapted
    // to navigate to a loading page or perform a direct API call.
    navigate(`/results?url=${encodeURIComponent(trimmedUrl)}`);
  };

  return (
    // The main content area starts after the fixed navbar, so add padding-top
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-7rem)] items-center justify-center py-20 md:py-32">
        {/* Background overlay */}
        <div className="absolute inset-0 -z-10 bg-gray-950" />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <Container className="relative text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Uncover Actionable Insights from App Reviews
            </h1>
            <p className="mt-4 text-lg text-gray-300 sm:mt-6 sm:text-xl">
              Paste an app store URL to get an instant, AI-powered analysis of
              user feedback.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <div className="min-w-0 flex-1">
                <label htmlFor="landing-app-url" className="sr-only">
                  App URL
                </label>
                <input
                  id="landing-app-url"
                  type="url"
                  required
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) {
                      setError("");
                    }
                  }}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "landing-url-error" : undefined}
                  className="block w-full rounded-xl border border-gray-800 bg-gray-950/50 px-5 py-3 text-base text-gray-100 placeholder-gray-500 transition focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/50"
                  placeholder="Enter Google Play or App Store URL"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Analyze
              </Button>
            </form>
            {error && (
              <p
                id="landing-url-error"
                role="alert"
                className="mt-3 text-sm text-red-400"
              >
                {error}
              </p>
            )}
          </div>
        </Container>
      </section>
      {/* You would include the Live Preview Card component here */}
    </div>
  );
};
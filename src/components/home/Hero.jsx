import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { PreviewCard } from './PreviewCard';
import { previewData } from '../../data/preview';

export const Hero = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateUrl = (value) => {
    return (
      value.includes('play.google.com') ||
      value.includes('apps.apple.com')
    );
  };

  const handleAnalyze = () => {
    if (!url.trim()) {
      setError("Please paste an app URL.");
      return;
    } 

    if (!validateUrl(url)) {
      setError("Please enter a valid Google Play or App Store URL.");
      return;
    }

    localStorage.setItem("reviewlens-url", url);
    // Navigate directly to the results page; the loader will handle fetching.
    navigate(`/results?url=${encodeURIComponent(url)}`);
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10 w-full">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/5 px-4 py-2 text-sm text-blue-300">
              <Sparkles size={16} />
              AI-powered review analysis
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Know if an app is
              <br />
              worth downloading
              <br />
              in seconds.
            </h1>

            <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-8">
              ReviewLens analyzes thousands of app reviews using AI and
              delivers concise summaries, pros, cons, sentiment analysis,
              and personalized recommendations.
            </p>

            <div className="mt-12 flex flex-col md:flex-row gap-4">
              <input
                id="app-url-input"
                type="text"
                aria-label="App URL Input"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAnalyze();
                  }
                }}
                placeholder="Paste a Google Play or App Store URL..."
                aria-describedby="url-error"
                className={`
                  flex-1
                  h-16
                  rounded-full
                  border border-gray-300
                  bg-white/20
                  px-6
                  text-blue-300
                  outline-none
                  transition
                  ${
                    error
                      ? "border-red-500"
                      : "focus:border-gray-900"
                  }
                `}
              />

              <Button
                onClick={handleAnalyze}
                className="h-16 px-8 flex items-center justify-center gap-2"
              > 
                Analyze
                <ArrowRight size={18} />
              </Button>
            </div>

            {error && (
              <p
                id="url-error"
                className="mt-4 text-sm text-red-400"
                aria-live="polite"
              >{error}</p>
            )}

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-gray-300 px-4 py-2 text-sm text-blue-300">
                Google Play
              </span>

              <span className="rounded-full border border-gray-300 px-4 py-2 text-sm text-blue-300">
                App Store
              </span>

              <span className="rounded-full border border-gray-300 px-4 py-2 text-sm text-blue-300">
                AI Summary
              </span>
            </div>
          </motion.div>
        </Container>
        <PreviewCard data={previewData} />
      </div>
    </section>
  );
};
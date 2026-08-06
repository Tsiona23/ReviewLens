import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import PreviewCard from "./PreviewCard";

export default function Hero() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateUrl = (value) => {
    return (
      value.includes("play.google.com") ||
      value.includes("apps.apple.com")
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

    navigate("/loading");
  };

  return (
    <section className="min-h-screen flex items-center">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#111111] px-4 py-2 text-sm text-[#BDBDBD]">

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

          <p className="mt-8 text-lg text-[#BDBDBD] max-w-2xl mx-auto leading-8">

            ReviewLens analyzes thousands of app reviews using AI and
            delivers concise summaries, pros, cons, sentiment analysis,
            and personalized recommendations.

          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-4">

            <input
              type="text"
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
              className={`
                flex-1
                h-16
                rounded-full
                border
                bg-[#111111]
                px-6
                text-white
                outline-none
                transition
                ${
                  error
                    ? "border-red-500"
                    : "border-[#2A2A2A] focus:border-white"
                }
              `}
            />

            <Button
              onClick={handleAnalyze}
              className="h-16 px-8 flex items-center justify-center gap-2"
            >
              Analyze Reviews

              <ArrowRight size={18} />
            </Button>


          </div>

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            <span className="rounded-full border border-[#2A2A2A] px-4 py-2 text-sm text-[#BDBDBD]">
              Google Play
            </span>

            <span className="rounded-full border border-[#2A2A2A] px-4 py-2 text-sm text-[#BDBDBD]">
              App Store
            </span>

            <span className="rounded-full border border-[#2A2A2A] px-4 py-2 text-sm text-[#BDBDBD]">
              AI Summary
            </span>

          </div>

        </motion.div>

      </Container>
      <PreviewCard />
    </section>
  );
}
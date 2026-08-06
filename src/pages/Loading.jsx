import  { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import LoadingAnimation from '../components/loading/LoadingAnimation';
import ProgressBar from '../components/loading/ProgressBar';
import LoadingStep from '../components/loading/LoadingStep';
import ProcessingStats from '../components/loading/ProcessingStats';
import { Container } from '../components/ui/Container';

import { loadingSteps } from '../data/loadingSteps';

// Define constants for "magic numbers" to improve readability and maintainability.
const SIMULATED_DURATION_MS = 4000; // Total time for the fake loading
const UPDATE_INTERVAL_MS = 50; // How often to update the UI

const MAX_REVIEWS_TO_SHOW = 2500;
const MAX_TOPICS_TO_SHOW = 70;

export const Loading = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const appUrl = queryParams.get('url');

  // Only `progress` needs to be in state.
  const [progress, setProgress] = useState(0);

  // Derive dependent values directly from `progress` for simpler state management.
  const currentStepIndex = Math.min(
    loadingSteps.length - 1,
    Math.floor(progress / (100 / loadingSteps.length))
  );
  const reviewsProcessed = Math.floor((progress / 100) * MAX_REVIEWS_TO_SHOW);
  const topicsFound = Math.floor((progress / 100) * MAX_TOPICS_TO_SHOW);

  useEffect(() => {
    if (!appUrl) {
      navigate('/'); // Redirect home if no app URL is provided
      return;
    }

    // Use setTimeout for the final navigation to decouple it from the progress updates.
    const navigationTimeout = setTimeout(() => {
      navigate(`/results?url=${encodeURIComponent(appUrl)}`);
    }, SIMULATED_DURATION_MS);

    // Use setInterval only for updating the visual progress.
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const increment = (UPDATE_INTERVAL_MS / SIMULATED_DURATION_MS) * 100;
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, UPDATE_INTERVAL_MS);

    // Cleanup function to clear timers if the component unmounts.
    return () => {
      clearTimeout(navigationTimeout);
      clearInterval(progressInterval);
    };
  }, [appUrl, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-black text-white"
    >
      <Container className="max-w-md p-8 rounded-lg shadow-lg bg-gray-900">
        <LoadingAnimation />
        <div className="my-8">
          <ProgressBar progress={progress} />
          <p className="text-right text-sm text-gray-400 mt-2">{Math.round(progress)}%</p>
        </div>
        <div className="space-y-3">
          {loadingSteps.map((step, index) => (
            <LoadingStep
              key={step.title || index} // Use a unique property from data for the key if possible
              {...step}
              isActive={index === currentStepIndex}
              isComplete={index < currentStepIndex}
            />
          ))}
        </div>
        <ProcessingStats reviewsProcessed={reviewsProcessed} topicsFound={topicsFound} />
      </Container>
    </motion.div>
  );
};
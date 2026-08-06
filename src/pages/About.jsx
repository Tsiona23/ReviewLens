import { Container } from '../components/ui/Container';
import { usePageTitle } from '../hooks/usePageTitle';
import { GitFork } from 'lucide-react';

export const About = () => {
  usePageTitle('About ReviewLens');

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            ReviewLens
          </h1>

          <div className="space-y-12 text-gray-300">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Why We Built ReviewLens</h2>
              <p className="text-lg leading-relaxed">
                ReviewLens was built to solve a simple problem: understanding user sentiment from thousands of app reviews is hard. We leverage the power of modern AI to analyze, summarize, and present app review data in a clear, concise, and actionable dashboard.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Mission</h2>
              <p className="text-lg leading-relaxed">
                Our mission is to empower users and developers with transparent insights. Whether you're a user trying to decide if an app is worth your time, or a developer looking to improve your product based on feedback, ReviewLens provides the clarity you need.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">How It Works</h2>
              <p className="text-lg leading-relaxed">
                When you paste an app store URL, our system fetches a significant sample of recent reviews. This data is then processed by our AI models to perform several key analyses, including sentiment classification, AI-generated summaries, and the extraction of common pros, cons, and key topics.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Technology Stack</h2>
              <p className="text-lg leading-relaxed">
                This project is built with a modern tech stack, including React, Vite, and Tailwind CSS on the frontend, and a powerful AI backend for the analysis. We believe in using the right tools to deliver a fast, responsive, and insightful user experience.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Roadmap</h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Support for more app stores and platforms.</li>
                <li>Historical trend analysis for app ratings.</li>
                <li>Deeper insights into feature requests and bug reports.</li>
                <li>User accounts to save and compare analyses.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">GitHub</h2>
              <p className="text-lg leading-relaxed">
                ReviewLens is an open-source project. We welcome contributions and feedback from the community. You can find our code on GitHub.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-lg text-white hover:text-gray-400 transition-colors"
              >
                <GitFork size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
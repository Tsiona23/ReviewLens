import { Container } from "../ui/Container";
import { GitFork } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-900">
      <Container className="py-8 md:py-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-white">
              <span className="text-2xl text-blue-300">◐</span>
              <span>ReviewLens</span>
            </a>
            <p className="mt-2 max-w-xs text-gray-400 sm:max-w-sm">
              AI-powered app review analysis that helps users understand apps faster.
            </p>
          </div>
          <a
            href="https://github.com/Tsiona23/ReviewLens"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 text-gray-400 transition hover:text-blue-300"
          >
            <GitFork size={20} />
            <span>GitHub</span>
          </a>
        </div>
        <div className="mt-8 border-t border-gray-900 pt-8 text-center text-sm text-gray-500 md:mt-10 md:text-left">
          © {new Date().getFullYear()} ReviewLens. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
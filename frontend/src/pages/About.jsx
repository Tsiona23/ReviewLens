import { Container } from "../components/ui/Container";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  Lightbulb,
  Target,
  Workflow,
  Code2,
  Map,
  GitFork,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const About = () => {
  usePageTitle("About ReviewLens");

  const roadmap = [
    "Support for more app stores and platforms.",
    "Historical trend analysis for app ratings.",
    "Deeper insights into feature requests and bug reports.",
    "User accounts to save and compare analyses.",
  ];

  const technologies = [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "AI Integration",
    "REST API",
  ];

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-75 bg-blue-300/10 blur-[120px] rounded-full" />

      <Container>
        <div className="relative">

          {/* Header */}
          <div className="max-w-3xl mb-16">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-300/20 bg-blue-300/10 text-blue-300 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
              About ReviewLens
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Turning app reviews into{" "}
              <span className="text-blue-300">
                meaningful insights.
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              ReviewLens helps users and developers understand thousands of
              app reviews through AI-powered summaries, sentiment analysis,
              and actionable insights.
            </p>

          </div>


          {/* Problem + Mission */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-950/70 hover:border-blue-300/30 transition">

              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-blue-300/10 text-blue-300">
                  <Lightbulb size={24}/>
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  Why We Built ReviewLens
                </h2>
              </div>

              <p className="text-gray-400 leading-7">
                ReviewLens was built to solve a simple problem: understanding
                user sentiment from thousands of app reviews is difficult.
                We use AI to analyze, summarize, and present review data in a
                clear and actionable way.
              </p>

            </div>


            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-950/70 hover:border-blue-300/30 transition">

              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-blue-300/10 text-blue-300">
                  <Target size={24}/>
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  Mission
                </h2>
              </div>

              <p className="text-gray-400 leading-7">
                Our mission is to provide transparent insights for both users
                and developers. ReviewLens helps people make better decisions
                without manually reading thousands of reviews.
              </p>

            </div>

          </div>



          {/* How it works */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-gray-950/70 mb-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="p-3 rounded-xl bg-blue-300/10 text-blue-300">
                <Workflow size={24}/>
              </div>

              <h2 className="text-3xl font-semibold text-white">
                How It Works
              </h2>

            </div>


            <p className="text-gray-400 leading-7 mb-8">
              When you paste an app store URL, ReviewLens analyzes reviews
              using AI models to identify sentiment, common problems,
              advantages, and important topics.
            </p>


            <div className="grid md:grid-cols-3 gap-5">

              {[
                ["01","Add App","Paste an app store URL."],
                ["02","Analyze","AI processes reviews."],
                ["03","Understand","Receive useful insights."],
              ].map(([number,title,text]) => (

                <div
                  key={number}
                  className="p-5 rounded-xl border border-gray-800 bg-black/40"
                >

                  <span className="text-blue-300 font-mono">
                    {number}
                  </span>

                  <h3 className="text-white font-semibold mt-3">
                    {title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>



          {/* Technology */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-gray-950/70 mb-8">

            <div className="flex items-center gap-4 mb-5">

              <div className="p-3 rounded-xl bg-blue-300/10 text-blue-300">
                <Code2 size={24}/>
              </div>

              <h2 className="text-3xl font-semibold text-white">
                Technology Stack
              </h2>

            </div>


            <div className="flex flex-wrap gap-3">

              {technologies.map((tech)=>(
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg border border-gray-800 bg-black text-gray-300 hover:text-blue-300 hover:border-blue-300/30 transition"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>



          {/* Roadmap */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-gray-950/70 mb-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="p-3 rounded-xl bg-blue-300/10 text-blue-300">
                <Map size={24}/>
              </div>

              <h2 className="text-3xl font-semibold text-white">
                Roadmap
              </h2>

            </div>


            <div className="space-y-4">

              {roadmap.map((item)=>(

                <div
                  key={item}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-black/40"
                >

                  <CheckCircle2
                    className="text-blue-300"
                    size={20}
                  />

                  <span className="text-gray-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>



          {/* GitHub */}
          <div className="p-8 rounded-2xl border border-blue-300/20 bg-blue-300/5">

            <div className="flex flex-col md:flex-row justify-between gap-6 items-center">

              <div>

                <div className="flex items-center gap-3 mb-3">

                  <GitFork className="text-blue-300"/>

                  <h2 className="text-2xl font-semibold text-white">
                    Open Source
                  </h2>

                </div>

                <p className="text-gray-400">
                  ReviewLens is an open-source project. Explore the code,
                  contribute ideas, and follow the development journey.
                </p>

              </div>


              <a
                href="https://github.com/Tsiona23/ReviewLens.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-300 font-medium hover:bg-blue-200 transition"
              >
                View on GitHub
                <ArrowUpRight size={18}/>
              </a>

            </div>

          </div>


        </div>
      </Container>

    </section>
  );
};
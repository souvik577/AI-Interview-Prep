import {
  Brain,
  FileText,
  BarChart3,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Mock Interviews",
    description:
      "Practice HR and Technical interviews with AI-generated questions and instant feedback.",
  },
  {
    icon: FileText,
    title: "Resume Analyzer",
    description:
      "Upload your resume and receive AI-powered ATS score with personalized suggestions.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track interview progress, scores, and improvement with visual analytics.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            FEATURES
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need
            <br />
            to Ace Interviews
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            From AI mock interviews to resume analysis and performance tracking,
            everything is available in one modern platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import {
  Brain,
  FileText,
  BarChart3,
} from "lucide-react";

import Container from "../../layout/Container";
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
        className="bg-slate-950 py-24 flex justify-center"
        >
        <div className="w-full max-w-6xl px-6">

            {/* Heading */}
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                FEATURES
            </p>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white">
                Everything You Need
                <br />
                to Ace Interviews
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                From AI mock interviews to resume analysis and performance tracking,
                everything is available in one modern platform.
            </p>

            </div>

            {/* Cards */}
            <div className="mx-auto mt-20 flex justify-center gap-8">
                {features.map((feature) => (
                    <div
                    key={feature.title}
                    className="w-[340px] flex-shrink-0"
                    >
                    <FeatureCard {...feature} />
                    </div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default Features;
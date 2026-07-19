import { Upload, Bot, Trophy } from "lucide-react";
import Container from "../../layout/Container";
import StepCard from "./StepCard";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Resume",
    description:
      "Upload your latest resume and let our AI analyze your skills, ATS score, and improvement areas.",
  },
  {
    icon: Bot,
    step: "02",
    title: "Practice with AI",
    description:
      "Take HR and Technical mock interviews powered by AI with realistic questions and voice interaction.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Get Instant Feedback",
    description:
      "Receive detailed feedback, performance insights, and personalized suggestions after every interview.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-slate-950 py-16 sm:py-20 md:py-32 flex justify-center"
    >
        <div className="w-full max-w-6xl px-6">

            {/* Heading */}
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                HOW IT WORKS
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Three Simple Steps
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Start preparing for interviews in minutes with our AI-powered platform.
              </p>
            </div>

            {/* Cards */}
            <div className="mx-auto mt-12 flex flex-col items-center gap-6 md:mt-20 md:flex-row md:justify-center md:gap-8">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="w-full max-w-sm md:w-[340px] md:flex-shrink-0"
                >
                  <StepCard {...step} />
                </div>
              ))}
            </div>

        </div>
    </section>
  );
};

export default HowItWorks;
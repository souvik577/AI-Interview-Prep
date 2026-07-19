import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
    >
      {/* Badge */}
      <Badge className="mb-6 inline-flex items-center border border-cyan-500/30 bg-cyan-500/15 px-4 py-2 text-cyan-300">
        <Sparkles className="mr-2 h-4 w-4" />
        Powered by Gemini AI
      </Badge>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Ace Your Next
        <br />
        <span className="text-cyan-400">Interview</span> with AI
        <br />
        Confidence
      </h1>

      {/* Description */}
      <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
        Practice HR and Technical interviews with AI-generated
        questions, receive instant feedback, improve communication,
        and boost your chances of getting hired.
      </p>

      {/* Buttons */}
      <div className="mt-8">
        <HeroActions />
      </div>

      {/* Statistics */}
      <div className="mt-10">
        <HeroStats />
      </div>
    </motion.div>
  );
};

export default HeroContent;
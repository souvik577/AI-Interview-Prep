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
      className="max-w-xl"
    >
      {/* Badge */}
      <Badge className="mb-6 bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 px-4 py-2">
        <Sparkles className="w-4 h-4 mr-2" />
        Powered by Gemini AI
      </Badge>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
        Ace Your Next
        <br />
        <span className="text-cyan-400">Interview</span>{" "}
        <span>with AI</span>
        <br />
        Confidence
        </h1>
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-slate-300">
        Practice HR and Technical interviews with AI-generated
        questions, receive instant feedback, improve communication,
        and boost your chances of getting hired.
      </p>

      {/* Buttons */}
      <HeroActions />

      {/* Statistics */}
      <HeroStats />
    </motion.div>
  );
};

export default HeroContent;
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroActions = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
      <Button
        size="lg"
        className="h-12 w-full rounded-xl bg-cyan-500 px-7 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 sm:w-auto"
      >
        Start Free
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="h-12 w-full rounded-xl border-slate-600 bg-transparent px-7 text-white transition-all duration-300 hover:bg-slate-800 sm:w-auto"
      >
        <PlayCircle className="mr-2 h-4 w-4" />
        Watch Demo
      </Button>
    </div>
  );
};

export default HeroActions;
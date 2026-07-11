import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroActions = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">

      <Button
        size="lg"
        className="h-12 rounded-xl bg-cyan-500 px-7 text-black font-semibold hover:bg-cyan-400 transition-all duration-300"
      >
        Start Free
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="h-12 rounded-xl border-slate-600 bg-transparent px-7 text-white hover:bg-slate-800"
      >
        <PlayCircle className="mr-2 h-4 w-4" />
        Watch Demo
      </Button>

    </div>
  );
};

export default HeroActions;
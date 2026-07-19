import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Brain,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const HeroPreview = () => {
  return (
    <Card className="mx-auto w-full max-w-md rounded-3xl border border-cyan-500/20 bg-slate-900/80 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-xl lg:max-w-xl">
      <CardContent className="p-5 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-white sm:text-lg">
            Interview Dashboard
          </h3>

          <Badge className="bg-green-500/20 text-green-400">
            Live
          </Badge>
        </div>

        {/* Resume Score */}
        <div className="mt-6 sm:mt-8">
          <div className="flex justify-between text-sm text-slate-300">
            <span>Resume Score</span>
            <span>92%</span>
          </div>

          <Progress value={92} className="mt-2" />
        </div>

        {/* Cards */}
        <div className="mt-6 space-y-4 sm:mt-8">
          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-white sm:text-base">
                Resume Analysis
              </span>
            </div>

            <CheckCircle className="h-5 w-5 text-green-400" />
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <Brain className="h-5 w-5 text-violet-400" />
              <span className="text-sm text-white sm:text-base">
                AI Feedback
              </span>
            </div>

            <span className="text-sm font-semibold text-cyan-400 sm:text-base">
              Excellent
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span className="text-sm text-white sm:text-base">
                Interview Progress
              </span>
            </div>

            <span className="text-sm text-white sm:text-base">
              +18%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroPreview;
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
    <Card className="w-full max-w-xl rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)]">
      <CardContent className="p-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            Interview Dashboard
          </h3>

          <Badge className="bg-green-500/20 text-green-400">
            Live
          </Badge>
        </div>

        {/* Resume Score */}
        <div className="mt-8">
          <div className="flex justify-between text-sm text-slate-300">
            <span>Resume Score</span>
            <span>92%</span>
          </div>

          <Progress value={92} className="mt-2" />
        </div>

        {/* Cards */}
        <div className="mt-8 space-y-4">

          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
            <div className="flex items-center gap-3">
              <FileText className="text-cyan-400" />
              <span className="text-white">Resume Analysis</span>
            </div>

            <CheckCircle className="text-green-400" />
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
            <div className="flex items-center gap-3">
              <Brain className="text-violet-400" />
              <span className="text-white">AI Feedback</span>
            </div>

            <span className="text-cyan-400 font-semibold">
              Excellent
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-green-400" />
              <span className="text-white">
                Interview Progress
              </span>
            </div>

            <span className="text-white">+18%</span>
          </div>

        </div>

      </CardContent>
    </Card>
  );
};

export default HeroPreview;
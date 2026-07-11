import { Brain, FileText, Mic, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Mock Interviews",
  },
  {
    icon: FileText,
    title: "Resume Analyzer",
  },
  {
    icon: Mic,
    title: "Voice Interview",
  },
  {
    icon: Sparkles,
    title: "Personalized Feedback",
  },
];

const AuthBanner = () => {
  return (
    <div className="relative flex w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-950 p-12">
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-10 flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                <Brain className="h-7 w-7 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-white">
                AI<span className="text-cyan-200">Prep</span>
            </h2>
        </div>

        <h1 className="text-5xl font-bold leading-tight text-white">
            Ace Every
            <br />
            Interview with AI
        </h1>

        <p className="mt-6 max-w-md text-lg leading-8 text-cyan-100">
          Master technical and HR interviews with AI-powered mock interviews, resume analysis, and personalized feedback.
        </p>

      </div>

      {/* Features */}
      <div className="relative z-10 mt-16 grid gap-5">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/50 hover:bg-white/15 hover:translate-x-2"
            >
              <div className="rounded-xl bg-white/15 p-3">
                <Icon className="h-6 w-6 text-white" />
              </div>

              <span className="text-lg font-medium text-white">
                {item.title}
              </span>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default AuthBanner;
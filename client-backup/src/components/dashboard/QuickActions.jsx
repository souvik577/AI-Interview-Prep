import { FileText, Bot } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      {/* Resume Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <FileText className="mb-4 text-cyan-400" size={32} />

        <h2 className="text-2xl font-bold text-white">
          Resume Analyzer
        </h2>

        <p className="mt-2 text-slate-400">
          Upload your resume and get AI-powered feedback.
        </p>

        <button className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
            Upload Resume
        </button>
      </div>

      {/* Interview Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <Bot className="mb-4 text-cyan-400" size={32} />

        <h2 className="text-2xl font-bold text-white">
          AI Mock Interview
        </h2>

        <p className="mt-2 text-slate-400">
          Practice with AI and improve your interview skills.
        </p>

        <button className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
            Start Interview
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
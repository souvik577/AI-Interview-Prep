import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardStats } from "../../api/dashboardApi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    bestScore: 0,
    averageScore: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-400">
        Welcome back! Here's your progress.
      </p>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-slate-400">
            Total Analyses
          </h3>

          <p className="mt-3 text-4xl font-bold text-cyan-400">
            {stats.totalAnalyses}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-slate-400">
            Best ATS Score
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-400">
            {stats.bestScore}%
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-slate-400">
            Average Score
          </h3>

          <p className="mt-3 text-4xl font-bold text-yellow-400">
            {stats.averageScore}%
          </p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <div className="mt-6 flex flex-wrap gap-4">

          <Link
            to="/resume"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Upload Resume
          </Link>

          <Link
            to="/interview"
            className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
          >
            AI Interview
          </Link>

          <Link
            to="/history"
            className="rounded-xl bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-600"
          >
            View History
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
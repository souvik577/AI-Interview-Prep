import { useEffect, useState } from "react";
import { getProfileStats } from "../../api/profileApi";
import { auth } from "../../lib/firebase";

const Profile = () => {
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    bestScore: 0,
    averageScore: 0,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfileStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-8 text-4xl font-bold text-white">
        My Profile
      </h1>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold text-cyan-400">
          {auth.currentUser?.displayName}
        </h2>

        <p className="mt-2 text-slate-400">
          {auth.currentUser?.email}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-slate-800 p-6 text-center">
            <h3 className="text-lg text-slate-400">
              Total Analyses
            </h3>

            <p className="mt-3 text-4xl font-bold text-cyan-400">
              {stats.totalAnalyses}
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-6 text-center">
            <h3 className="text-lg text-slate-400">
              Best ATS Score
            </h3>

            <p className="mt-3 text-4xl font-bold text-green-400">
              {stats.bestScore}%
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-6 text-center">
            <h3 className="text-lg text-slate-400">
              Average Score
            </h3>

            <p className="mt-3 text-4xl font-bold text-yellow-400">
              {stats.averageScore}%
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;
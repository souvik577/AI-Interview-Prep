import { Bell } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Topbar = () => {
  const { currentUser } = useAuth();

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 mb-8">
          Welcome back, {currentUser?.displayName || "User"} 👋
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-cyan-400">
          <Bell size={22} />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
          {currentUser?.displayName?.charAt(0).toUpperCase() || "U"}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
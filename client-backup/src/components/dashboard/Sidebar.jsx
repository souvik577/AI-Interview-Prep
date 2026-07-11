import {
  LayoutDashboard,
  FileText,
  Bot,
  History,
  User,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">
      {/* Logo */}
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold text-white">
          AI<span className="text-cyan-400">Prep</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">

          <li>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive
                    ? "border-l-4 border-cyan-400 bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`
                }
            >
                <LayoutDashboard size={20} />
                Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
                to="/resume"
                className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive
                    ? "border-l-4 border-cyan-400 bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`
                }
            >
                <FileText size={20} />
                Resume
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/interview"
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "border-l-4 border-cyan-400 bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Bot size={20} />
              AI Interview
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "border-l-4 border-cyan-400 bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <History size={20} />
              History
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "border-l-4 border-cyan-400 bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <User size={20} />
              Profile
            </NavLink>
          </li>

        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
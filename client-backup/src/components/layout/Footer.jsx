import { Brain, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-20 flex justify-center">
      <div className="w-full max-w-6xl px-6">

        <div className="grid gap-16 md:grid-cols-3">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-cyan-400" />

              <span className="text-2xl font-bold text-white">
                AIPrep
              </span>
            </div>

            <p className="mt-5 max-w-sm text-lg leading-8 text-slate-400">
              Prepare smarter with AI-powered mock interviews,
              resume analysis, and personalized feedback.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-cyan-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="flex items-center gap-3 text-slate-400">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>support@aiprep.com</span>
            </div>

            <div className="mt-6 space-y-2 text-slate-400">
              <p className="hover:text-cyan-400 cursor-pointer transition">
                GitHub
              </p>

              <p className="hover:text-cyan-400 cursor-pointer transition">
                LinkedIn
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 AIPrep. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
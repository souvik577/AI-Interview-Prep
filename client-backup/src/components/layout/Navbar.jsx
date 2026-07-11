import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaRobot } from "react-icons/fa";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaRobot className="text-cyan-400 text-2xl" />
          <span className="text-xl font-bold text-white">
            AI<span className="text-cyan-400">Prep</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-cyan-400 transition">
            How it Works
          </a>

          <a href="#pricing" className="hover:text-cyan-400 transition">
            Pricing
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>

          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>

      </Container>
    </header>
  );
};

export default Navbar;
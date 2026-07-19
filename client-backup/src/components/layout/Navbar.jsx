import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaRobot } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Navigation */}
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>

          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <Container className="py-6">
            <nav className="flex flex-col gap-5 text-slate-300">
              <a
                href="#features"
                className="hover:text-cyan-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="hover:text-cyan-400 transition"
                onClick={() => setIsOpen(false)}
              >
                How it Works
              </a>

              <a
                href="#pricing"
                className="hover:text-cyan-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>

              <div className="flex flex-col gap-3 pt-3">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Login
                  </Button>
                </Link>

                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
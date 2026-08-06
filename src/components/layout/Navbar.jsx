import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GitHub, Menu, Search, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center">
            <Search size={18} />
          </div>

          <span className="font-bold text-xl tracking-tight">
            ReviewLens
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-white"
                    : "text-[#BDBDBD] hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#BDBDBD] hover:text-white transition"
          >
            <GitHub size={20} />
          </a>

        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#2A2A2A] bg-[#111111]"
          >
            <div className="px-6 py-6 flex flex-col gap-6">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white"
                      : "text-[#BDBDBD]"
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </header>
  );
}
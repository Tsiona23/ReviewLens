import { NavLink } from "react-router-dom";
import { Container } from "../ui/Container";

export const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-white transition-opacity hover:opacity-80"
          >
            <span className="text-2xl text-blue-300">◐</span>
            <span>ReviewLens</span>
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-300 ${
                    isActive ? "text-blue-300" : "text-gray-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">{/* Mobile menu button goes here */}</div>
        </div>
      </Container>
    </header>
  );
};
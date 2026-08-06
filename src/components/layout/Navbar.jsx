import { Link, NavLink } from 'react-router-dom';
import { Container } from '../ui/Container';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-700 bg-black/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-[0.04em] text-white">
          ReviewLens
        </Link>
        <nav className="flex items-center gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`
            }
          >
            About
          </NavLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 text-gray-400 hover:text-gray-200"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
};
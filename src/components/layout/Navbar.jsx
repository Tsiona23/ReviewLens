import { Link, NavLink } from 'react-router-dom';
import { Container } from '../ui/Container';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-700 bg-black/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          ReviewLens
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors hover:text-gray-300 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors hover:text-gray-300 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
          >
            About
          </NavLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-300 text-gray-400"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
};
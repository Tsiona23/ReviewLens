import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SkipToContent } from './SkipToContent';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
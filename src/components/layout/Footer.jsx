import { Container } from '../ui/Container';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <Container className="py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ReviewLens. All rights reserved.</p>
      </Container>
    </footer>
  );
};
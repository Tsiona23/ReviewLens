import { useRouteError, Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  let title = "An error occurred!";
  let message = "Something went wrong. Please try again later.";

  if (error.status === 404) {
    title = "Page Not Found";
    message = "Sorry, we couldn't find the page you were looking for.";
  }

  return (
    <section className="py-20 text-center">
      <Container>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-lg text-gray-500 mb-8">{message}</p>
        <Button as={Link} to="/" className="px-6 py-3">
          Back to Home
        </Button>
      </Container>
    </section>
  );
};
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export const LandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Analyzing URL...");
  };

  return (
    // The main content area starts after the fixed navbar, so add padding-top
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20 md:py-32">
        {/* Background overlay */}
        <div className="absolute inset-0 -z-10 bg-gray-950" />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <Container className="relative text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Uncover Actionable Insights from App Reviews
            </h1>
            <p className="mt-4 text-lg text-gray-300 sm:mt-6 sm:text-xl">
              Paste an app store URL to get an instant, AI-powered analysis of
              user feedback.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row"
            >
              <div className="min-w-0 flex-1">
                <label htmlFor="app-url" className="sr-only">
                  App URL
                </label>
                <input
                  id="app-url"
                  type="url"
                  required
                  className="block w-full rounded-xl border border-gray-800 bg-gray-950/50 px-5 py-3 text-base text-gray-100 placeholder-gray-500 transition focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/50"
                  placeholder="Enter Google Play or App Store URL"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Analyze
              </Button>
            </form>
          </div>
        </Container>
      </section>
      {/* You would include the Live Preview Card component here */}
    </div>
  );
};
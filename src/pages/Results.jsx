import { useLoaderData, useNavigation } from 'react-router-dom';
import { Container } from "../components/ui/Container";
import { AppHeader } from "../components/results/AppHeader";
import { DashboardGrid } from '../components/results/DashboardGrid';
import { SkeletonCard } from '../components/results/SkeletonCard';
import { usePageTitle } from '../hooks/usePageTitle';

export const Results = () => {
  const { analysis } = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  // Set page title, handling the case where analysis is not yet available or failed.
  // React hooks must be called unconditionally, so this is placed at the top level.
  usePageTitle(
    isLoading
      ? "Loading Analysis..."
      : analysis
        ? `${analysis.appName} - Analysis`
        : "Analysis Not Found"
  );

  // If not loading and analysis is null/undefined, display an error message.
  if (!isLoading && !analysis) {
    return (
      <section className="py-12 text-center text-gray-600">
        <Container>
          <h2 className="text-2xl font-bold mb-4">App Analysis Not Found</h2>
          <p>Could not retrieve analysis for the requested app. Please try again or check the URL.</p>
        </Container>
      </section>
    );
  }
  return (
    <section className="py-12">
      <Container>
        <AppHeader
          isLoading={isLoading}
          appName={analysis.appName}
          publisher={analysis.publisher} // These will only be accessed if analysis is not null
          rating={analysis.rating}       // due to the check above.
          verdict={analysis.verdict}     // Optional chaining could be added here as extra safety.
        />
        {isLoading ? (
          <div className="grid gap-6 mt-8 md:grid-cols-2">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <DashboardGrid analysis={analysis} />
        )}
      </Container>
    </section>
  );
};
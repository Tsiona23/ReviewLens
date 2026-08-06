import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../components/layout/MainLayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Results } from "../pages/Results";
import { ErrorPage } from "../pages/ErrorPage";
import { resultsLoader } from "./resultsLoader";

export const router = createBrowserRouter([
  {
    element: <MainLayout />, // Pages with Navbar and Footer
    errorElement: <ErrorPage />, // Catches errors in child routes (404s, loader errors, etc.)
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/results", element: <Results />, loader: resultsLoader },
    ],
  }, // The ErrorPage on MainLayout will catch 404s within the layout
  { path: "*", element: <ErrorPage /> }, // This is a final catch-all for routes outside the MainLayout structure
]);
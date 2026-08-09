
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../components/layout/MainLayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Results } from "../pages/Results";
import { ErrorPage } from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/results",
        element: <Results />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);


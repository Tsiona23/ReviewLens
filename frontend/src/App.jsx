import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.jsx";

export const App = () => {
  return <RouterProvider router={router} />;
};
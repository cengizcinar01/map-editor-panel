import { LogtoProvider } from "@logto/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Callback from "./components/Auth/Callback";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AddFavoritePlace from "./pages/AddFavoritePlace/AddFavoritePlace";
import AddStyle from "./pages/AddStyle/AddStyle";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./styles/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add-favorite-place", element: <AddFavoritePlace /> },
      { path: "add-style", element: <AddStyle /> },
    ],
  },
  {
    path: "/callback",
    element: <Callback />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <LogtoProvider
    config={{
      endpoint: [`${import.meta.env.VITE_LOGTO_API_ENDPOINT}`],
      appId: [`${import.meta.env.VITE_LOGTO_APP_ID}`],
      resources: [`${import.meta.env.VITE_LOGTO_RESOURCES}`],
      scopes: import.meta.env.VITE_LOGTO_SCOPES.split(","),
    }}
  >
    <RouterProvider router={router} />
  </LogtoProvider>
);

import { LogtoProvider } from "@logto/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Callback from "./components/Auth/Callback";
import AddStyle from "./pages/AddStyle/AddStyle";
import Dashboard from "./pages/Dashboard/Dashboard";
import RootLayout from "./RootLayout";
import "./styles/main.css";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "callback",
        element: <Callback />,
      },
      {
        path: "add-style",
        element: <AddStyle />,
      },
    ],
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

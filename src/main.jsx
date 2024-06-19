import { LogtoProvider } from "@logto/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddStyle from "./pages/AddStyle/AddStyle";
import Home from "./pages/Home/Home";
import RootLayout from "./RootLayout";

const config = {
  endpoint: `${import.meta.env.VITE_LOGTO_API_ENDPOINT}`,
  appId: `${import.meta.env.VITE_LOGTO_APP_ID}`,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "add-style",
        element: <AddStyle />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <LogtoProvider config={config}>
    <RouterProvider router={router} />
  </LogtoProvider>
);

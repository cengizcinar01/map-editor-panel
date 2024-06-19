import { LogtoProvider } from "@logto/react";
import ReactDOM from "react-dom/client";

const config = {
  endpoint: `${import.meta.env.VITE_LOGTO_API_ENDPOINT}`,
  appId: `${import.meta.env.VITE_LOGTO_APP_ID}`,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <LogtoProvider config={config}></LogtoProvider>
);

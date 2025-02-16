import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import appStore from "./redux/appStore.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Provider>
  </StrictMode>
);

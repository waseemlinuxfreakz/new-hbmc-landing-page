import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LanguageProvider from "./Contex/LanguageProvider.jsx";
import Preloader from "./components/Shared/Preloader/Preloader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
      <Preloader></Preloader>
    </LanguageProvider>
  </React.StrictMode>
);

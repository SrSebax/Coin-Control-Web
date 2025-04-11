// src/main.jsx o src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import { ThemeProvider } from "./context/ThemeContext"; // 👈 import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* 👈 envuelve la app */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

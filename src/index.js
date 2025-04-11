// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { useMediaQuery, CssBaseline } from "@mui/material";
import MobileBlockView from "./view/MobileBlockView";

function RootWrapper() {
  const isMobile = useMediaQuery("(max-width:767px)");

  return isMobile ? <MobileBlockView /> : <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <RootWrapper />
    </ThemeProvider>
  </React.StrictMode>
);

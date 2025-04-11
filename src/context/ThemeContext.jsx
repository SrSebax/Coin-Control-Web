// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import { darkTheme, lightTheme } from "../theme/colors";

const ThemeContext = createContext();

export const useThemeMode = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  // opcional: guardar en localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) setMode(savedMode);
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  const theme = useMemo(() => {
    return mode === "dark" ? darkTheme : lightTheme;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React from "react";
import { Box } from "@mui/material";
import SidebarComponent from "../components/SideBarComponent";
import { Outlet } from "react-router-dom";
import { useThemeMode } from "../context/ThemeContext";

export default function HomeView() {
  const { theme } = useThemeMode();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: theme.background,
        minHeight: "100vh",
      }}
    >
      <SidebarComponent />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          mt: "54px", // espacio del navbar
          ml: "16px", // ancho del sidebar
          color: theme.text,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

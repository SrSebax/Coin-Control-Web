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
          mt: "54px", 
          ml: "16px", 
          color: theme.text,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

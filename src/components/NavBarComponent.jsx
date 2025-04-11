import React from "react";
import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useThemeMode } from "../context/ThemeContext";
import logoLight from "../assets/coin-control-dark.svg";
import logoDark from "../assets/coin-control-light.svg";
import UserInfoComponent from "./UserInfoComponent";

export default function NavbarComponent({ onLogoutClick }) {
  const { theme, mode } = useThemeMode();



  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 96,
        right: 0,
        height: 64,
        backgroundColor: theme.navbar,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        borderBottom: `1px solid ${theme.sidebarBorder}`,
        zIndex: 1201,
      }}
    >
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src={mode === "dark" ? logoLight : logoDark}
          alt="CoinControl Logo"
          sx={{ height: 36 }}
        />
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <UserInfoComponent />

        <Tooltip title="Cerrar sesión" arrow>
          <IconButton
            onClick={onLogoutClick}
            sx={{ color: theme.logout }}
            aria-label="Cerrar sesión"
          >
            <ExitToApp fontSize="medium" />
          </IconButton>
        </Tooltip>
        </Box>    
      </Box>
  );
}

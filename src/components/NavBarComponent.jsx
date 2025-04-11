import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useThemeMode } from "../context/ThemeContext";
import logoLight from "../assets/coin-control-dark.svg";
import logoDark from "../assets/coin-control-light.svg";
import { auth } from "../services/firebase";

export default function NavbarComponent({ onLogoutClick }) {
  const { theme, mode } = useThemeMode();
  const user = auth.currentUser;

  const displayName = user?.displayName || user?.email || "Usuario";
  const initials = displayName
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

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
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              fontSize: "0.85rem",
              bgcolor: theme.primary,
              color: "#fff",
              fontWeight: 500,
            }}
          >
            {initials}
          </Avatar>
          <Typography
            variant="body2"
            sx={{
              color: theme.text,
              fontWeight: 500,
              fontSize: "0.9rem",
              maxWidth: 160,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {displayName}
          </Typography>
        </Box>

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

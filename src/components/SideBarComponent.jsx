import React, { useState } from "react";
import {
  Drawer,
  ListItemButton,
  Box,
  Typography,
  Divider,
  Tooltip,
  IconButton,
  Button,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useThemeMode } from "../context/ThemeContext";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import NavbarComponent from "./NavBarComponent";
import menuItems from "../data/menuItems";
import DynamicDialogComponent from "./DynamicDialogComponent";

const drawerWidth = 96;

export default function SidebarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDialog, setOpenDialog] = useState(false);
  const { theme, toggleMode, mode } = useThemeMode();

  const handleLogout = async () => {
    await signOut(auth);
    setOpenDialog(false);
    navigate("/");
  };

  const logoutActions = (
    <>
      <Button onClick={() => setOpenDialog(false)} sx={{ color: theme.text }}>
        Cancelar
      </Button>
      <Button
        onClick={handleLogout}
        sx={{
          color: theme.danger,
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: theme.danger,
            color: "#fff",
          },
        }}
      >
        Cerrar sesión
      </Button>
    </>
  );

  return (
    <>
      <NavbarComponent onLogoutClick={() => setOpenDialog(true)} />

      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            backgroundColor: theme.sidebar,
            color: theme.text,
            borderRight: `1px solid ${theme.sidebarBorder}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 2,
          },
        }}
      >
        <Tooltip title="Cambiar tema" arrow placement="right">
          <IconButton
            onClick={toggleMode}
            sx={{
              color: theme.text,
              mb: 2,
              backgroundColor: theme.hover,
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: theme.primary,
                color: "#fff",
              },
            }}
            aria-label="Cambiar tema"
          >
            {mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>

        <Divider sx={{ width: "60%", mb: 2, borderColor: theme.divider }} />

        <Box sx={{ flexGrow: 1, width: "100%" }}>
          {menuItems.map((item, index) => {
            const selected = location.pathname.startsWith(item.path);
            return (
              <ListItemButton
                key={index}
                onClick={() => navigate(item.path)}
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 2,
                  transition: "all 0.2s ease",
                  borderRadius: 2,
                  mx: 1,
                  color: selected ? theme.primary : theme.text,
                  backgroundColor: selected ? theme.hover : "transparent",
                  "&:hover": {
                    backgroundColor: theme.hover,
                  },
                }}
              >
                {item.icon}
                <Typography
                  variant="caption"
                  sx={{ mt: 1, fontWeight: 500, fontSize: "0.7rem" }}
                >
                  {item.text}
                </Typography>
              </ListItemButton>
            );
          })}
        </Box>
      </Drawer>

      <DynamicDialogComponent
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="¿Deseas cerrar sesión?"
        message="Se cerrará tu sesión actual y regresarás al inicio."
        actions={logoutActions}
      />
    </>
  );
}

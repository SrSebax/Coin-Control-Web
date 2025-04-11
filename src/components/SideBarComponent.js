import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Dashboard,
  Category,
  Savings,
  ExitToApp,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

const menuItems = [
  { text: "Resumen", icon: <Dashboard />, path: "/home" },
  { text: "Categorías", icon: <Category />, path: "/categorias" },
  { text: "Ahorros", icon: <Savings />, path: "/ahorros" },
];

export default function SidebarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDialog, setOpenDialog] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#1e1e2f",
            color: "#fff",
            borderRight: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      >
        <Box sx={{ mt: 2, px: 2 }}>
          <h2 style={{ fontWeight: "bold", margin: 0 }}>🪙 CoinControl</h2>
        </Box>
        <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#fff" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <List sx={{ mt: "auto", mb: 2 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenDialog(true)}>
              <ListItemIcon sx={{ color: "#e63946" }}>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText
                primary="Cerrar sesión"
                primaryTypographyProps={{
                  color: "#e63946",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>¿Deseas cerrar sesión?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se cerrará tu sesión actual y regresarás al inicio.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="inherit">
            Cancelar
          </Button>
          <Button
            onClick={handleLogout}
            sx={{
              color: "#e63946",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#e63946",
                color: "#fff",
              },
            }}
          >
            Cerrar sesión
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

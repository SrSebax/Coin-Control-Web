import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function LogoutDialogComponent({ open, onClose }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    onClose();
    navigate("/");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>¿Deseas cerrar sesión?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Se cerrará tu sesión actual y regresarás al inicio.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
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
  );
}

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
import { useThemeMode } from "../context/ThemeContext";

export default function LogoutDialogComponent({ open, onClose }) {
  const navigate = useNavigate();
  const { theme } = useThemeMode();

  const handleLogout = async () => {
    await signOut(auth);
    onClose();
    navigate("/");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: theme.dialogBackground,
          color: theme.text,
        },
      }}
    >
      <DialogTitle>¿Deseas cerrar sesión?</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: theme.text }}>
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
      </DialogActions>
    </Dialog>
  );
}

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

export default function DynamicDialogComponent({
  open,
  onClose,
  title,
  message,
  actions,
}) {
  const { theme } = useThemeMode();

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
      <DialogTitle sx={{ color: theme.text }}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: theme.text }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions ? (
          actions
        ) : (
          <>
            <Button onClick={onClose} sx={{ color: theme.text }}>
              Cancelar
            </Button>
            <Button
              onClick={onClose}
              sx={{
                color: theme.primary,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: theme.primary,
                  color: "#fff",
                },
              }}
            >
              Aceptar
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}

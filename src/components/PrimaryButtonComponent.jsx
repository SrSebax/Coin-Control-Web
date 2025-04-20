import { Button } from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

export default function PrimaryButtonComponent({ children, onClick, disabled, ...props }) {
  const { theme } = useThemeMode();

  return (
    <Button
      onClick={onClick}
      disabled={disabled} // Prop disabled para deshabilitar el botón
      sx={{
        backgroundColor: disabled ? theme.disabled : theme.primary, // Cambiar color cuando esté deshabilitado
        color: disabled ? theme.textDisabled : theme.textButton, // Cambiar color del texto cuando esté deshabilitado
        borderRadius: 2,
        textTransform: "none",
        fontWeight: "bold",
        px: 3,
        py: 1.2,
        boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
        ":hover": {
          backgroundColor: disabled ? theme.disabled : theme.primary,
          opacity: disabled ? 1 : 0.9, // Sin cambio de opacidad si está deshabilitado
        },
        cursor: disabled ? "not-allowed" : "pointer", // Cambiar cursor cuando está deshabilitado
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

import { Button } from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

export default function PrimaryButton({ children, onClick, ...props }) {
  const { theme } = useThemeMode();

  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: theme.primary,
        color: theme.textButton,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: "bold",
        px: 3,
        py: 1.2,
        boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
        ":hover": {
          backgroundColor: theme.primary,
          opacity: 0.9,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

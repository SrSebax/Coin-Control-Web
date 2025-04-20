import { Button } from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

export default function SecondaryButton({ children, onClick, ...props }) {
  const { theme } = useThemeMode();

  return (
    <Button
      onClick={onClick}
      sx={{
        border: `2px solid ${theme.secondary}`,
        color: theme.secondary,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: "bold",
        px: 3,
        py: 1.2,
        ":hover": {
          backgroundColor: `${theme.secondary}22`,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

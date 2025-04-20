import React from "react";
import { IconButton } from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

const IconCircleComponent = ({ icon, size, color, onClick }) => {
  const { theme } = useThemeMode();

  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: "transparent",
        borderRadius: "50%",
        border: `2px solid ${color}`,
        padding: "10px",
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: `0 4px 8px rgba(0, 0, 0, 0.1)`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: `0 6px 12px rgba(0, 0, 0, 0.2)`,
        },
        color: theme.icon,
      }}
    >
      {icon}
    </IconButton>
  );
};

export default IconCircleComponent;

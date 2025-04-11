import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";
import { auth } from "../services/firebase";

export default function UserInfoComponent() {
  const { theme } = useThemeMode();
  const user = auth.currentUser;

  const displayName = user?.displayName || user?.email || "Usuario";
  const initials = displayName
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
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
      <Box>
        <Typography
          variant="body2"
          sx={{
            color: theme.text,
            fontWeight: 500,
            fontSize: "0.9rem",
            lineHeight: 1.2,
            maxWidth: 160,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {displayName}
        </Typography>
        
      </Box>
    </Box>
  );
}

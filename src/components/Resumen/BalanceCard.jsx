import React from "react";
import { Paper, Typography } from "@mui/material";
import { useThemeMode } from "../../context/ThemeContext";

export default function BalanceCard() {
  const { theme } = useThemeMode();

  return (
    <Paper
      elevation={3}
      sx={{
        width: 300,
        p: 3,
        backgroundColor: theme.card,
        color: theme.text,
        borderRadius: 2,
      }}
    >
      <Typography variant="subtitle1" fontWeight={600}>
        Balance total
      </Typography>
      <Typography variant="h5" fontWeight={700} mt={1}>
        $2,340.00
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={2}>
        Ingresos: $3,000.00
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Gastos: $660.00
      </Typography>
    </Paper>
  );
}

import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import { useThemeMode } from "../../context/ThemeContext";

export default function UltimosMovimientos() {
  const { theme } = useThemeMode();

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        backgroundColor: theme.card,
        color: theme.text,
        borderRadius: 2,
      }}
    >
      <Typography variant="subtitle1" fontWeight={600}>
        Últimos movimientos
      </Typography>
      <Box mt={2}>
        <MovimientoItem nombre="Starbucks" monto="- $15.00" />
        <Divider sx={{ my: 1 }} />
        <MovimientoItem nombre="Pago quincenal" monto="+ $800.00" />
        <Divider sx={{ my: 1 }} />
        <MovimientoItem nombre="Gasolina" monto="- $40.00" />
      </Box>
    </Paper>
  );
}

function MovimientoItem({ nombre, monto }) {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="body2">{nombre}</Typography>
      <Typography
        variant="body2"
        sx={{
          color: monto.startsWith("-") ? "#f44336" : "#4caf50",
          fontWeight: 500,
        }}
      >
        {monto}
      </Typography>
    </Box>
  );
}

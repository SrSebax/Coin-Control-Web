import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useThemeMode } from "../../context/ThemeContext";
// Aquí luego puedes agregar una gráfica con Chart.js o Recharts

export default function GastosPorCategoria() {
  const { theme } = useThemeMode();

  return (
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        p: 3,
        backgroundColor: theme.card,
        color: theme.text,
        borderRadius: 2,
        minWidth: 300,
      }}
    >
      <Typography variant="subtitle1" fontWeight={600}>
        Gastos por categoría
      </Typography>
      <Box mt={2}>
        <Typography variant="body2">🍔 Comida - $250</Typography>
        <Typography variant="body2">🚗 Transporte - $150</Typography>
        <Typography variant="body2">🏠 Alquiler - $260</Typography>
      </Box>
    </Paper>
  );
}

import React from "react";
import { Box, Typography } from "@mui/material";
import { useThemeMode } from "../../context/ThemeContext";
import BalanceCard from "../../components/Resumen/BalanceCard";
import GastosPorCategoria from "../../components/Resumen/GastosPorCategoria";
import UltimosMovimientos from "../../components/Resumen/UltimosMovimientos";

export default function ResumenView() {
  const { theme } = useThemeMode();

  return (
    <Box
      sx={{
        backgroundColor: theme.background,
        minHeight: "100vh",
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: theme.text }}>
        Resumen general
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={3}>
        <BalanceCard />
        <GastosPorCategoria />
      </Box>

      <Box mt={4}>
        <UltimosMovimientos />
      </Box>
    </Box>
  );
}

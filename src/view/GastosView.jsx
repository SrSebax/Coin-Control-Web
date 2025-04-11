import { Paper, Typography } from "@mui/material";

export default function GastosView() {
  return (
    <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
      <Typography variant="h4" gutterBottom>
        Gastos
      </Typography>
      <Typography>
        Aquí verás los gastos.
      </Typography>
    </Paper>
  );
}

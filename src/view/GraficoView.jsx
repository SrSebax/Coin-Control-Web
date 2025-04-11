import { Paper, Typography } from "@mui/material";

export default function GraficoView() {
  return (
    <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
      <Typography variant="h4" gutterBottom>
        Grafico
      </Typography>
      <Typography>
        Aquí verás el grafico.
      </Typography>
    </Paper>
  );
}

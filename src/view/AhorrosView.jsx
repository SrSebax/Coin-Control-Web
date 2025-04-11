import { Paper, Typography } from "@mui/material";

export default function AhorrosView() {
  return (
    <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
      <Typography variant="h4" gutterBottom>
        Ahorros
      </Typography>
      <Typography>
        Aquí verás tus metas de ahorro.
      </Typography>
    </Paper>
  );
}

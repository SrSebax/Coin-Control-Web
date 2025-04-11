import { Paper, Typography } from "@mui/material";

export default function ResumenView() {
  return (
    <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
      <Typography variant="h4" gutterBottom>
        Resumen
      </Typography>
      <Typography>
        Aquí irá el resumen general de tus finanzas.
      </Typography>
    </Paper>
  );
}

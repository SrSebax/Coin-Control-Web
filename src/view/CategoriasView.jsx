import { Paper, Typography } from "@mui/material";

export default function CategoriasView() {
  return (
    <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
      <Typography variant="h4" gutterBottom>
        Categorias
      </Typography>
      <Typography>
        Aquí verás las categorias.
      </Typography>
    </Paper>
  );
}

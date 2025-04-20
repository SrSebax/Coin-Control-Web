import React from "react";
import { Paper, Typography } from "@mui/material";
import IconCircle from "../../components/IconCircleComponent";
import { iconData } from "../../data/icons";

export default function CategoriasView() {
  return (
    <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
      <Typography variant="h4" gutterBottom>
        Categorias
      </Typography>
      <Typography>
        Aquí verás las categorias.
      </Typography>

      <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        {iconData.map((item, index) => (
          <IconCircle
            key={index}
            icon={item.icon}
            size="50px"
            color={item.color}
            onClick={() => console.log(`${item.label} icon clicked!`)}
          />
        ))}
      </div>
    </Paper>
  );
}

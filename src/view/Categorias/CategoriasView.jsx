import React from "react";
import { Paper, Typography, Box, Divider, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconCircle from "../../components/IconCircleComponent";
import { iconData } from "../../data/icons";
import { useNavigate } from "react-router-dom";
import CustomTitleComponent from "../../components/CustomTitleComponent";
import { useThemeMode } from "../../context/ThemeContext";

export default function CategoriasView() {
  const { theme } = useThemeMode();
  const navigate = useNavigate();

  const categoriasPorTipo = {
    gasto: iconData.filter((item) => item.tipo === "gasto"),
    ingreso: iconData.filter((item) => item.tipo === "ingreso"),
    ahorro: iconData.filter((item) => item.tipo === "ahorro"),
    inversion: iconData.filter((item) => item.tipo === "inversion"),
  };

  const SeccionCategoria = ({ titulo, items }) => (
    <Box mb={4}>
      <Typography variant="h6" sx={{ mb: 1, color: theme.text}}>
        {titulo}
      </Typography>
      <Divider sx={{ mb: 2, borderColor: theme.divider }} />
      <Box display="flex" flexWrap="wrap" gap={2}>
        {items.map((item, index) => (
          <IconCircle
            key={index}
            icon={item.icon}
            size="50px"
            label={item.label}
            color={item.color}
            onClick={() => console.log(`${item.label} icon clicked!`)}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <Box position="relative">
      <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <CustomTitleComponent>Categorías</CustomTitleComponent>

          {/* Botón accesible arriba a la derecha */}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate("/categorias/agregar")}
            sx={{
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              backgroundColor: theme.primary,
              "&:hover": {
                backgroundColor: theme.primary,
              },
            }}
          >
            Agregar categoría
          </Button>
        </Box>

        <SeccionCategoria titulo="Gastos" items={categoriasPorTipo.gasto} />
        <SeccionCategoria titulo="Ingresos" items={categoriasPorTipo.ingreso} />
        <SeccionCategoria titulo="Ahorros" items={categoriasPorTipo.ahorro} />
        <SeccionCategoria
          titulo="Inversiones"
          items={categoriasPorTipo.inversion}
        />
      </Paper>
    </Box>
  );
}

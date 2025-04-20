import {
  HomeRounded,
  SavingsRounded,
  CategoryRounded,
  BarChartRounded,
  Dashboard,
} from "@mui/icons-material";
import React from "react";

const menuItems = [
  {
    text: "Inicio",
    icon: <HomeRounded fontSize="large" />,
    path: "/gastos", // Ahora esta es la página principal
  },
  {
    text: "Resumen",
    icon: <Dashboard fontSize="large" />,
    path: "/resumen",
  },
  {
    text: "Gráfico",
    icon: <BarChartRounded fontSize="large" />,
    path: "/grafico",
  },
  {
    text: "Ahorros",
    icon: <SavingsRounded fontSize="large" />,
    path: "/ahorros",
  },
  {
    text: "Categorías",
    icon: <CategoryRounded fontSize="large" />,
    path: "/categorias",
  },
];

export default menuItems;

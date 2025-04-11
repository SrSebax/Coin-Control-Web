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
    path: "/home",
  },
  {
    text: "Resumen",
    icon: <Dashboard fontSize="large" />,
    path: "/home/resumen",
  },
  {
    text: "Gráfico",
    icon: <BarChartRounded fontSize="large" />,
    path: "/home/grafico",
  },
  {
    text: "Ahorros",
    icon: <SavingsRounded fontSize="large" />,
    path: "/home/ahorros",
  },
  {
    text: "Categorías",
    icon: <CategoryRounded fontSize="large" />,
    path: "/home/categorias",
  },
];

export default menuItems;

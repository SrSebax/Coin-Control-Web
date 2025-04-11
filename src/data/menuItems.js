import { Dashboard, Savings } from "@mui/icons-material";
import React from "react";

const menuItems = [
  { text: "Resumen", icon: <Dashboard fontSize="large" />, path: "/home" },
  {
    text: "Ahorros",
    icon: <Savings fontSize="large" />,
    path: "/home/ahorros",
  },
];

export default menuItems;

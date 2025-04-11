import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import SidebarComponent from "../components/SideBarComponent";

export default function HomeView() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#1e1e2f", minHeight: "100vh" }}>
      <SidebarComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 4, color: "#fff" }}>
        <Container maxWidth="sm">
          <Paper
            elevation={5}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Bienvenido a CoinControl 🪙
            </Typography>
            <Typography variant="body1">
              Estás logueado. ¡Puedes comenzar a gestionar tus finanzas!
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

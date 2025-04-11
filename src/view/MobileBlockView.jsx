import { Box, Typography, Stack, Paper } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

export default function MobileBlockView() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "linear-gradient(135deg, #1e1e2f 0%, #2a2a40 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        py: 4,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          p: { xs: 4, sm: 6 },
          maxWidth: 480,
          width: "100%",
          borderRadius: 4,
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 45px rgba(0,0,0,0.3)",
          animation: "fadeInUp 1s ease-in-out",
          "@keyframes fadeInUp": {
            from: { opacity: 0, transform: "translateY(20px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Stack spacing={3} alignItems="center">
          <WarningAmberRoundedIcon sx={{ fontSize: 60, color: "#ffcc00" }} />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#fff", lineHeight: 1.4 }}
          >
            Acceso no disponible en dispositivos móviles
          </Typography>
          <Typography variant="body1" sx={{ color: "#bbb" }}>
            Esta aplicación está optimizada para pantallas más grandes. Por favor, ingresa desde un computador para tener la mejor experiencia. 💻
          </Typography>
          <LaptopMacIcon sx={{ fontSize: 48, color: "#00bfa5" }} />
        </Stack>
      </Paper>
    </Box>
  );
}

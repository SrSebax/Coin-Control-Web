import React from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useLoginController } from "../../controllers/LoginController";
import AlertMessageComponent from "../../components/AlertMessageComponent";

export default function LoginView() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
    alert,
    handleCloseAlert,
  } = useLoginController();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #1e1e2f 0%, #2a2a40 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 5,
          width: "100%",
          maxWidth: 420,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: 4,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#fff",
            mb: 3,
          }}
        >
          CoinControl
        </Typography>

        <AlertMessageComponent
          open={alert.open}
          severity={alert.type}
          message={alert.message}
          onClose={handleCloseAlert}
        />

        <Stack spacing={2}>
          <TextField
            label="Correo electrónico"
            type="email"
            fullWidth
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 2,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: { color: "#aaa" },
            }}
          />

          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 2,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: { color: "#aaa" },
            }}
          />

          <Stack direction="row" spacing={2}>
            <Button
              onClick={loginWithEmail}
              fullWidth
              variant="contained"
              sx={{
                py: 1.2,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#00bfa5",
                "&:hover": { backgroundColor: "#00a58f" },
              }}
            >
              Iniciar sesión
            </Button>

            <Button
              onClick={registerWithEmail}
              fullWidth
              variant="outlined"
              sx={{
                py: 1.2,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "none",
                color: "#00bfa5",
                borderColor: "#00bfa5",
                "&:hover": {
                  borderColor: "#00a58f",
                  color: "#00a58f",
                },
              }}
            >
              Registrarse
            </Button>
          </Stack>

          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }}>
            <Typography sx={{ color: "#aaa" }}>o</Typography>
          </Divider>

          <Button
            onClick={loginWithGoogle}
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              py: 1.2,
              borderRadius: 2,
              fontWeight: "bold",
              textTransform: "none",
              color: "#fff",
              borderColor: "rgba(255,255,255,0.2)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.3)",
              },
            }}
          >
            Iniciar sesión con Google
          </Button>
        </Stack>
      </Paper>

      <Typography
        variant="body2"
        sx={{
          mt: 4,
          color: "#ccc",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        Desarrollado por <strong style={{ color: "#00bfa5" }}>Sebastian Londoño 🧑‍💻</strong> &nbsp;|&nbsp;
        Diseñado por <strong style={{ color: "#00bfa5" }}>Ana Naranjo 🎨</strong>
      </Typography>
    </Box>
  );
}

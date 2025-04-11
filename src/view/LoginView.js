// src/views/LoginView.js
import React from "react";
import { useLoginController } from "../controllers/LoginController";

export default function LoginView() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
  } = useLoginController();

  return (
    <div style={{ maxWidth: 400, margin: "100px auto", textAlign: "center" }}>
      <h2>CoinControl</h2>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: 10, padding: 8, width: "100%" }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 10, padding: 8, width: "100%" }}
      />

      <div>
        <button onClick={loginWithEmail} style={{ margin: 5 }}>Iniciar sesión</button>
        <button onClick={registerWithEmail} style={{ margin: 5 }}>Registrarse</button>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <button onClick={loginWithGoogle}>Iniciar sesión con Google</button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import HomeView from "../view/HomeView";
import ResumenView from "../view/Resumen/ResumenView";
import AhorrosView from "../view/Ahorros/AhorrosView";
import GraficoView from "../view/Graficos/GraficoView";
import LoginView from "../view/Login/LoginView";
import GastosView from "../view/Gastos/GastosView";
import CategoriasView from "../view/Categorias/CategoriasView";

export default function AppRoutes() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  if (checkingAuth) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <LoginView />}
        />

        {user && (
          <Route path="/home" element={<HomeView />}>
            <Route index element={<GastosView />} />
            <Route path="resumen" element={<ResumenView />} />
            <Route path="ahorros" element={<AhorrosView />} />
            <Route path="categorias" element={<CategoriasView />} />
            <Route path="grafico" element={<GraficoView />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

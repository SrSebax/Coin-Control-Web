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
import AddCategoriaView from "../view/Categorias/AddCategoriaView";

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

  if (checkingAuth) return null;

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz: login o redirección */}
        <Route
          path="/"
          element={user ? <Navigate to="/gastos" /> : <LoginView />}
        />

        {/* Rutas privadas con layout (sidebar) */}
        {user && (
          <Route path="/" element={<HomeView />}>
            {/* Gastos */}
            <Route path="gastos" element={<GastosView />} />
            {/* Resumen */}
            <Route path="resumen" element={<ResumenView />} />
            {/* Ahorros */}
            <Route path="ahorros" element={<AhorrosView />} />
            {/* Categorías */}
            <Route path="categorias" element={<CategoriasView />} />
            <Route path="categorias/agregar" element={<AddCategoriaView />} />
            {/* Gráficos */}
            <Route path="grafico" element={<GraficoView />} />
          </Route>
        )}

        {/* Redirección en caso de ruta inválida */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

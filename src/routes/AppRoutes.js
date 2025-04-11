import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginView from "../view/LoginView";
import HomeView from "../view/HomeView";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ResumenView from "../view/ResumenView";
import AhorrosView from "../view/AhorrosView";

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
            <Route index element={<ResumenView />} />
            <Route path="ahorros" element={<AhorrosView />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

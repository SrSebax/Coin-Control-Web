import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginView from "../view/LoginView";
import HomeView from "../view/HomeView";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

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

  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: "/",
        element: user ? React.createElement(Navigate, { to: "/home" }) : React.createElement(LoginView),
      }),
      React.createElement(Route, {
        path: "/home",
        element: user ? React.createElement(HomeView) : React.createElement(Navigate, { to: "/" }),
      }),
      React.createElement(Route, {
        path: "*",
        element: React.createElement(Navigate, { to: "/" }),
      })
    )
  );
}

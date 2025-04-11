import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export function useLoginController() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ open: false, type: "info", message: "" });
  const navigate = useNavigate();

  const showAlert = (type, message) => {
    setAlert({ open: true, type, message });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "El correo no es válido.";
      case "auth/missing-password":
        return "Debes ingresar una contraseña.";
      case "auth/wrong-password":
        return "La contraseña es incorrecta.";
      case "auth/user-not-found":
        return "No se encontró una cuenta con ese correo.";
      case "auth/email-already-in-use":
        return "Este correo ya está registrado.";
      case "auth/weak-password":
        return "La contraseña debe tener al menos 6 caracteres.";
      case "auth/popup-closed-by-user":
        return "Cierre inesperado. Intenta de nuevo.";
      default:
        return "Ocurrió un error. Intenta nuevamente.";
    }
  };

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showAlert("success", "Inicio de sesión exitoso");
      navigate("/home");
    } catch (error) {
      showAlert("error", getErrorMessage(error.code));
    }
  };

  const registerWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showAlert("success", "Registro exitoso");
      navigate("/home");
    } catch (error) {
      showAlert("error", getErrorMessage(error.code));
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      showAlert("success", "Inicio de sesión con Google exitoso");
      navigate("/home");
    } catch (error) {
      showAlert("error", getErrorMessage(error.code));
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
    alert,
    handleCloseAlert,
  };
}

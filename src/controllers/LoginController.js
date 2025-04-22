import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../services/ApiServices/postService";

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
      // Inicia sesión con email y contraseña
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Realiza el postAuth con el UID de Firebase
      await postAuth({ uid: user.uid });

      showAlert("success", "Inicio de sesión exitoso");
      navigate("/home");
    } catch (error) {
      showAlert("error", getErrorMessage(error.code));
    }
  };

  const registerWithEmail = async () => {
    try {
      // Registra el usuario con email y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Realiza el postAuth con el UID de Firebase
      await postAuth({ uid: user.uid });

      showAlert("success", "Registro exitoso");
      navigate("/home");
    } catch (error) {
      showAlert("error", getErrorMessage(error.code));
    }
  };

  const loginWithGoogle = async () => {
    try {
      // Inicia sesión con Google
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // Realiza el postAuth con el UID de Firebase
      await postAuth({ uid: user.uid });

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

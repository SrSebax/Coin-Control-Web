import { categoriaModel } from "../models/CategoriaModel";

export function isFormValid({ nombre, tipo, icono, color }) {
  return nombre !== "" && tipo !== "" && icono !== null && color;
}

export function handleConfirmGuardar(data, navigate) {
  const categoriaData = categoriaModel(data);
  console.log("Datos de la categoría:", JSON.stringify(categoriaData, null, 2));
  navigate("/categorias");
}

export function handleConfirmCancel(navigate, setOpenDialog) {
  setOpenDialog(false);
  navigate("/categorias");
}

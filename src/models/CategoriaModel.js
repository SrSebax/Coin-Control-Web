export function categoriaModel({
  userUid,
  nombre,
  tipo,
  nuevoTipo,
  icono,
  color,
}) {
  return {
    userUid,
    nombre: nombre,
    tipo: tipo === "otro" ? nuevoTipo : tipo,
    icono,
    color,
  };
}

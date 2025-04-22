export function categoriaModel({
  uid,
  nombre,
  tipo,
  nuevoTipo,
  icono,
  color,
}) {
  return {
    uid,
    nombre: nombre,
    tipo: tipo === "otro" ? nuevoTipo : tipo,
    icono,
    color,
  };
}

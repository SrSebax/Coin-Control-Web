export function categoriaModel({
  uid,
  nombre,
  tipo,
  nuevoTipo,
  monto,
  icono,
  color,
  frecuencia,
}) {
  return {
    uid,
    nombre: nombre,
    tipo: tipo === "otro" ? nuevoTipo : tipo,
    gastoProgramado: monto || null,
    icono,
    color,
    frecuencia,
  };
}

export function categoriaModel({
  nombre,
  tipo,
  nuevoTipo,
  monto,
  icono,
  color,
  frecuencia,
}) {
  return {
    nombre: nombre,
    tipo: tipo === "otro" ? nuevoTipo : tipo,
    gastoProgramado: monto || null,
    icono,
    color,
    frecuencia,
  };
}

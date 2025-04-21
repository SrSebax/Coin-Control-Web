import {
  Home,
  ShoppingCart,
  LocalHospital,
  LocalDining,
  AttachMoney,
  TrendingUp,
  Savings,
  EmojiEvents,
  School,
  DirectionsCar,
  Work,
  CardGiftcard,
  Flight,
  Pets,
  MusicNote,
  Spa,
  Storefront,
  LocalGasStation,
} from "@mui/icons-material";

export const iconData = [
  // GASTOS
  { icon: <Home />, color: "#4CAF50", label: "Hogar", tipo: "gasto" },
  { icon: <ShoppingCart />, color: "#FF9800", label: "Compras", tipo: "gasto" },
  { icon: <LocalHospital />, color: "#F44336", label: "Salud", tipo: "gasto" },
  { icon: <LocalDining />, color: "#2196F3", label: "Comida", tipo: "gasto" },
  { icon: <DirectionsCar />, color: "#607D8B", label: "Transporte", tipo: "gasto" },
  { icon: <Flight />, color: "#00BCD4", label: "Viajes", tipo: "gasto" },
  { icon: <MusicNote />, color: "#9C27B0", label: "Música", tipo: "gasto" },
  { icon: <Pets />, color: "#8D6E63", label: "Mascotas", tipo: "gasto" },
  { icon: <LocalGasStation />, color: "#FF5722", label: "Gasolina", tipo: "gasto" },

  // INGRESOS
  { icon: <AttachMoney />, color: "#009688", label: "Salario", tipo: "ingreso" },
  { icon: <Work />, color: "#3F51B5", label: "Trabajo", tipo: "ingreso" },
  { icon: <CardGiftcard />, color: "#E91E63", label: "Bonos", tipo: "ingreso" },
  { icon: <Storefront />, color: "#673AB7", label: "Ventas", tipo: "ingreso" },

  // AHORROS
  { icon: <Savings />, color: "#CDDC39", label: "Ahorro", tipo: "ahorro" },
  { icon: <EmojiEvents />, color: "#FFC107", label: "Meta", tipo: "ahorro" },

  // INVERSIONES
  { icon: <TrendingUp />, color: "#00C853", label: "Acciones", tipo: "inversion" },
  { icon: <School />, color: "#3E2723", label: "Educación", tipo: "inversion" },
  { icon: <Spa />, color: "#AED581", label: "Bienestar", tipo: "inversion" },
];

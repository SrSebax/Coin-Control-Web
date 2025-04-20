import { Paper, Box } from "@mui/material";

import { useState } from "react";
import CustomTitleComponent from '../../components/CustomTitleComponent';
import CustomSubtitleComponent from '../../components/CustomSubtitleComponent';
import CustomTextComponent from '../../components/CustomTextComponent';
import CustomInputComponent from '../../components/CustomInputComponent';
import CustomSelectComponent from '../../components/CustomSelectComponent';
import CustomRadioGroupComponent from '../../components/CustomRadioGroupComponent';
import CurrencyInputComponent from '../../components/CurrencyInputComponent';
import PrimaryButtonComponent from '../../components/PrimaryButtonComponent';
import SecondaryButtonComponent from '../../components/SecondaryButtonComponent';

export default function AddCategoriaView() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("gasto");
  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");

  return (
    <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
      <CustomTitleComponent>Categorías</CustomTitleComponent>
      <CustomSubtitleComponent>Aquí verás las categorías</CustomSubtitleComponent>
      <CustomTextComponent>Completa el formulario para añadir una nueva categoría.</CustomTextComponent>

      <Box mt={3} display="flex" flexDirection="column" gap={2}>
        <CustomInputComponent
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <CustomSelectComponent
          label="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          options={[
            { label: "Salud", value: "salud" },
            { label: "Casa", value: "casa" },
            { label: "Ocio", value: "ocio" },
          ]}
        />

        <CustomRadioGroupComponent
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          options={[
            { label: "Gasto", value: "gasto" },
            { label: "Ingreso", value: "ingreso" },
          ]}
        />

        <CurrencyInputComponent
          label="Monto estimado (COP)"
          value={monto}
          onChange={setMonto}
        />

        <PrimaryButtonComponent onClick={() => console.log("Guardar")}>Guardar</PrimaryButtonComponent>
        <SecondaryButtonComponent onClick={() => console.log("Cancelar")}>Cancelar</SecondaryButtonComponent>
      </Box>
    </Paper>
  );
}

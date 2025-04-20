import { Paper, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomTitleComponent from "../../components/CustomTitleComponent";
import CustomTextComponent from "../../components/CustomTextComponent";
import CustomInputComponent from "../../components/CustomInputComponent";
import CustomSelectComponent from "../../components/CustomSelectComponent";
import CustomRadioGroupComponent from "../../components/CustomRadioGroupComponent";
import CurrencyInputComponent from "../../components/CurrencyInputComponent";
import PrimaryButtonComponent from "../../components/PrimaryButtonComponent";
import SecondaryButtonComponent from "../../components/SecondaryButtonComponent";
import BackButtonComponent from "../../components/BackButtonComponent";
import DynamicDialogComponent from "../../components/DynamicDialogComponent";
import { useThemeMode } from "../../context/ThemeContext";

export default function AddCategoriaView() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("gasto");
  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const { theme } = useThemeMode();

  const handleGuardar = () => {
    console.log({
      nombre,
      tipo,
      categoria,
      monto,
    });
  };

  const handleConfirmCancel = () => {
    setOpenDialog(false);
    navigate("/categorias");
  };

  const cancelActions = (
    <>
      <Button onClick={() => setOpenDialog(false)} sx={{ color: theme.text }}>
        No, volver
      </Button>
      <Button
        onClick={handleConfirmCancel}
        sx={{
          color: theme.danger,
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: theme.danger,
            color: "#fff",
          },
        }}
      >
        Sí, cancelar
      </Button>
    </>
  );

  return (
    <>
      <Paper sx={{ p: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <BackButtonComponent />
          <CustomTitleComponent>Crear Categorías</CustomTitleComponent>
        </Box>

        <CustomTextComponent>
          Completa el formulario para añadir una nueva categoría.
        </CustomTextComponent>

        <Box mt={3} display="flex" flexDirection="column" gap={3}>
          <Box display="flex" alignItems="center" gap={2}>
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
          </Box>

          <CustomRadioGroupComponent
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            options={[
              { label: "Gasto", value: "gasto" },
              { label: "Ingreso", value: "ingreso" },
            ]}
          />

          <CurrencyInputComponent
            label="Gasto Programado (COP)"
            value={monto}
            onChange={setMonto}
          />

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            justifyContent="flex-end"
          >
            <PrimaryButtonComponent onClick={handleGuardar}>
              Guardar
            </PrimaryButtonComponent>
            <SecondaryButtonComponent onClick={() => setOpenDialog(true)}>
              Cancelar
            </SecondaryButtonComponent>
          </Box>
        </Box>
      </Paper>

      <DynamicDialogComponent
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="¿Cancelar creación?"
        message="Perderás los cambios que hiciste en el formulario. ¿Seguro que quieres cancelar?"
        actions={cancelActions}
      />
    </>
  );
}

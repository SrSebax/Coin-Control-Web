import { useAuth } from "../../context/AuthContext";
import { Paper, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomTitleComponent from "../../components/CustomTitleComponent";
import CustomTextComponent from "../../components/CustomTextComponent";
import CustomInputComponent from "../../components/CustomInputComponent";
import CustomRadioGroupComponent from "../../components/CustomRadioGroupComponent";
import CurrencyInputComponent from "../../components/CurrencyInputComponent";
import PrimaryButtonComponent from "../../components/PrimaryButtonComponent";
import SecondaryButtonComponent from "../../components/SecondaryButtonComponent";
import BackButtonComponent from "../../components/BackButtonComponent";
import DynamicDialogComponent from "../../components/DynamicDialogComponent";
import { useThemeMode } from "../../context/ThemeContext";
import IconPickerComponent from "../../components/Categoria/IconPickerComponent";
import CustomSelectComponent from "../../components/CustomSelectComponent";
import {
  isFormValid,
  handleConfirmGuardar,
  handleConfirmCancel,
} from "../../controllers/CategoriaController";

export default function AddCategoriaView() {
  const { user } = useAuth();
  const userId = user?.uid;
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [monto, setMonto] = useState("");
  const [icono, setIcono] = useState(null);
  const { theme } = useThemeMode();
  const [selectedColor, setSelectedColor] = useState(theme.primary);
  const [frecuencia, setFrecuencia] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const navigate = useNavigate();

  const cancelActions = (
    <>
      <Button onClick={() => setOpenDialog(false)} sx={{ color: theme.text }}>
        No, volver
      </Button>
      <Button
        onClick={() => handleConfirmCancel(navigate, setOpenDialog)}
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

  const guardarActions = (
    <>
      <Button
        onClick={() => setOpenConfirmDialog(false)}
        sx={{ color: theme.text }}
      >
        No, volver
      </Button>
      <Button
        onClick={() =>
          handleConfirmGuardar(
            {
              uid: userId,
              nombre,
              tipo,
              nuevoTipo,
              monto,
              icono,
              color: selectedColor,
              frecuencia,
            },
            navigate
          )
        }
        sx={{
          color: theme.primary,
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: theme.primary,
            color: "#fff",
          },
        }}
      >
        Sí, guardar
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

        <Box mt={3} display="flex" flexDirection="column" gap={2}>
          <CustomInputComponent
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <CustomRadioGroupComponent
            customText="Tipo de categoría"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            options={[
              { label: "Gasto", value: "gasto" },
              { label: "Ingreso", value: "ingreso" },
              { label: "Ahorro", value: "ahorro" },
              { label: "Inversión", value: "inversion" },
              { label: "Otro", value: "otro" },
            ]}
          />

          {tipo === "otro" && (
            <CustomInputComponent
              label="Especifica el tipo de categoría"
              value={nuevoTipo}
              onChange={(e) => setNuevoTipo(e.target.value)}
              sx={{ mb: 2 }}
            />
          )}

          <Box display="flex" gap={2}>
            <CurrencyInputComponent
              label="Gasto Programado (COP)"
              value={monto}
              onChange={setMonto}
            />

            {monto && (
              <CustomSelectComponent
                label="Frecuencia"
                value={frecuencia}
                onChange={(e) => setFrecuencia(e.target.value)}
                options={[
                  { label: "Diario", value: "diario" },
                  { label: "Semanal", value: "semanal" },
                  { label: "Mensual", value: "mensual" },
                  { label: "Quincenal", value: "quincenal" },
                  { label: "Anual", value: "anual" },
                ]}
              />
            )}
          </Box>

          <IconPickerComponent
            selectedIcon={icono}
            onIconSelect={setIcono}
            selectedColor={selectedColor}
            onColorSelect={setSelectedColor}
          />

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            justifyContent="flex-end"
          >
            <PrimaryButtonComponent
              onClick={() => setOpenConfirmDialog(true)}
              disabled={
                !isFormValid({ nombre, tipo, icono, color: selectedColor })
              }
            >
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

      <DynamicDialogComponent
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
        title="¿Guardar categoría?"
        message="¿Estás seguro de que quieres guardar esta nueva categoría?"
        actions={guardarActions}
      />
    </>
  );
}

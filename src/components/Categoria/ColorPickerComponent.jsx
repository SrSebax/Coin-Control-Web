import React from "react";
import { Box, IconButton } from "@mui/material";
import { colorPalette } from "../../data/colorPalette";
import CustomTextComponent from "../CustomTextComponent";

const ColorPickerComponent = ({ selectedColor, onColorSelect }) => {
  return (
    <Box mt={3}>
      <CustomTextComponent>Elegir color</CustomTextComponent>

      <Box display="flex" flexWrap="wrap" gap={1}>
        {colorPalette.map((color) => {
          const isSelected = selectedColor === color;

          return (
            <IconButton
              key={color}
              onClick={() => onColorSelect(color)}
              sx={{
                backgroundColor: color,
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: isSelected
                  ? `3px solid #333` // Borde oscuro para destacar selección
                  : `2px solid rgba(0,0,0,0.05)`, // Borde sutil para todos
                boxShadow: isSelected
                  ? "0 4px 12px rgba(0, 0, 0, 0.25)"
                  : "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "all 0.25s ease-in-out",
                "&:hover": {
                  transform: "scale(1.15)",
                  boxShadow: `0 6px 16px rgba(0, 0, 0, 0.2)`,
                },
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ColorPickerComponent;

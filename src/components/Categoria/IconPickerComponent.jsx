import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { useThemeMode } from "../../context/ThemeContext";
import { categoryIcons } from "../../data/categoryIcons";
import { MoreHorizOutlined } from "@mui/icons-material";
import CustomTextComponent from "../CustomTextComponent";
import ColorPickerComponent from "./ColorPickerComponent";

export default function IconPickerComponent({
  selectedIcon,
  onIconSelect,
  selectedColor,
  onColorSelect,
}) {
  const [visibleCount, setVisibleCount] = useState(6);
  const { theme } = useThemeMode();

  const loadMoreIcons = () => setVisibleCount((prev) => prev + 6);

  return (
    <Box>
      <CustomTextComponent>Elegir ícono</CustomTextComponent>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {categoryIcons.slice(0, visibleCount).map((item) => {
          const isSelected = selectedIcon === item.value;

          return (
            <Tooltip title={item.label} key={item.value}>
              <IconButton
                onClick={() => onIconSelect(item.value)}
                sx={{
                  border: `2.5px solid ${
                    isSelected ? selectedColor : theme.icon
                  }`,
                  borderRadius: "50%",
                  backgroundColor: "transparent",
                  color: isSelected ? selectedColor : theme.icon,
                  boxShadow: isSelected
                    ? `0 4px 6px rgba(0, 0, 0, 0.1)`
                    : "none",
                  transition: "0.3s ease",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: isSelected ? selectedColor : theme.icon,
                    boxShadow: isSelected
                      ? `0 4px 12px rgba(0, 0, 0, 0.15)`
                      : "none",
                  },
                  padding: 1.5,
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          );
        })}

        {visibleCount < categoryIcons.length && (
          <Tooltip title="Mostrar más íconos" sx={{ marginLeft: "auto" }}>
            <IconButton
              onClick={loadMoreIcons}
              sx={{
                backgroundColor: theme.icon,
                borderRadius: "50%",
                width: 36,
                height: 36,
                padding: 1.5,
                alignSelf: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: `0 4px 6px rgba(0, 0, 0, 0.15)`,
                "&:hover": {
                  backgroundColor: theme.primary,
                  boxShadow: `0 6px 12px rgba(0, 0, 0, 0.2)`,
                },
              }}
            >
              <MoreHorizOutlined sx={{ fontSize: "1.2rem" }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {selectedIcon && (
        <Box mt={4}> {/* Espaciado adicional entre el ícono y el selector de color */}
          <ColorPickerComponent
            selectedColor={selectedColor}
            onColorSelect={onColorSelect}
          />
        </Box>
      )}
    </Box>
  );
}

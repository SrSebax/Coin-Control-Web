import { TextField } from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

const CustomInputComponent = ({ label, value, onChange, type = "text", placeholder, ...props }) => {
  const { theme } = useThemeMode();

  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      fullWidth
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          color: theme.text,
          "& fieldset": {
            borderColor: theme.border || "#ccc",
          },
          "&:hover fieldset": {
            borderColor: theme.primary,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.primary,
          },
        },
        "& .MuiInputLabel-root": {
          color: theme.text,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.primary,
        },
        "& input::placeholder": {
          color: theme.text,
          opacity: 0.5,
        },
      }}
      {...props}
    />
  );
};

export default CustomInputComponent;

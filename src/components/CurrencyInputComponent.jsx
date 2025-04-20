import { TextField } from '@mui/material';
import { useThemeMode } from "../context/ThemeContext";

const CurrencyInput = ({ label = 'Monto', value, onChange, ...props }) => {
  const { theme } = useThemeMode();

  const formatCOP = (val) => {
    const number = val.replace(/[^\d]/g, '');
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(number);
  };

  const handleInput = (e) => {
    const raw = e.target.value.replace(/[^\d]/g, '');
    onChange(raw);
  };

  return (
    <TextField
      label={label}
      value={formatCOP(value)}
      onChange={handleInput}
      fullWidth
      variant="outlined"
      InputLabelProps={{
        style: { color: theme.text },
      }}
      InputProps={{
        style: {
          color: theme.text,
          borderColor: theme.primary,
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
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
        "& input::placeholder": {
          color: theme.text,
          opacity: 0.5,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.primary,
        },
      }}
      {...props}
    />
  );
};

export default CurrencyInput;

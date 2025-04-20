import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useThemeMode } from "../context/ThemeContext";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomSelect = ({ label, value, onChange, options = [], ...props }) => {
  const { theme } = useThemeMode();

  return (
    <FormControl fullWidth sx={{
      "& .MuiInputLabel-root": {
        color: theme.text,
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: theme.primary,
      },
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
    }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        IconComponent={(props) => (
          <ExpandMoreIcon {...props} style={{ color: theme.text }} />
        )}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: theme.background,
              color: theme.text,
              borderRadius: 2,
              boxShadow: 4,
            }
          }
        }}
        sx={{
          color: theme.text,
          "& .MuiSvgIcon-root": {
            color: theme.text,
          },
        }}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{ color: theme.text }}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

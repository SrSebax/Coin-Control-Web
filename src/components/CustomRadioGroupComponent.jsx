import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

const CustomRadioGroup = ({ label, value, onChange, options = [], row = true, ...props }) => {
  const { theme } = useThemeMode();

  return (
    <FormControl>
      <FormLabel
        sx={{
          color: theme.text,
          mb: 1,
          fontWeight: 500,
        }}
      >
        {label}
      </FormLabel>
      <RadioGroup
        row={row}
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                sx={{
                  color: theme.text,
                  "&.Mui-checked": {
                    color: theme.primary,
                  },
                }}
              />
            }
            label={option.label}
            sx={{
              color: theme.text,
              mr: 2,
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;

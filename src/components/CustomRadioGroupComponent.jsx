import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";
import CustomTextComponent from "./CustomTextComponent";

const CustomRadioGroupComponent = ({
  customText,
  label,
  value,
  onChange,
  options = [],
  row = true,
  ...props
}) => {
  const { theme } = useThemeMode();

  return (
    <Box display="flex" flexDirection="column">
      {customText && <CustomTextComponent>{customText}</CustomTextComponent>}
      <FormControl sx={{ mb: 2 }}>
        <FormLabel
          sx={{
            color: theme.text,
            fontWeight: 500,
          }}
        >
          {label}
        </FormLabel>
        <RadioGroup row={row} value={value} onChange={onChange} {...props}>
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
    </Box>
  );
};

export default CustomRadioGroupComponent;

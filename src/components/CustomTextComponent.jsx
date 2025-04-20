import { useThemeMode } from "../context/ThemeContext";

const CustomTextComponent = ({ children, color, size = "1rem" }) => {
  const { theme } = useThemeMode();

  return (
    <p
      style={{
        color: color || theme.textSecondary,
        fontSize: size,
      }}
    >
      {children}
    </p>
  );
};

export default CustomTextComponent;

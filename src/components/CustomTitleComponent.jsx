import { useThemeMode } from "../context/ThemeContext";

const CustomTitleComponent = ({
  children,
  fontSize = "1.8rem",
  fontWeight = "bold",
  color,
  fontFamily = "inherit",
  marginBottom = "1rem",
  textAlign = "left",
}) => {
  const { theme } = useThemeMode();

  return (
    <h1
      style={{
        fontSize,
        fontWeight,
        fontFamily,
        marginBottom,
        color: color || theme.text,
        textAlign,
      }}
    >
      {children}
    </h1>
  );
};

export default CustomTitleComponent;

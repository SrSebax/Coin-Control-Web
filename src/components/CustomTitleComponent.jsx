import { useThemeMode } from "../context/ThemeContext";

const CustomTitleComponent = ({ children }) => {
  const { theme } = useThemeMode();

  return (
    <h1
      style={{
        fontSize: "1.8rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: theme.text,
      }}
    >
      {children}
    </h1>
  );
};

export default CustomTitleComponent;

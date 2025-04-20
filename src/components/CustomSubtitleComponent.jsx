import { useThemeMode } from "../context/ThemeContext";

const CustomSubtitleComponent = ({ children }) => {
  const { theme } = useThemeMode();

  return (
    <h2
      style={{
        fontSize: "1.3rem",
        fontWeight: "500",
        marginBottom: "0.75rem",
        color: theme.text,
      }}
    >
      {children}
    </h2>
  );
};

export default CustomSubtitleComponent;

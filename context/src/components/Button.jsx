import { useTheme } from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h3>Active Theme: {theme}</h3>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Buton
      </button>
    </div>
  );
}

export default Button;

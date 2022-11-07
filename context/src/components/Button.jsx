import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
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
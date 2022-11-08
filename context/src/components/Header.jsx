import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h4>Active Theme: {theme}</h4>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Header Buton
      </button>
    </div>
  );
}

export default Header;

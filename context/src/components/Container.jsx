import Button from "./Button";
import Header from "./Header";
import { useTheme } from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Button />
      <hr />
      <Header />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;

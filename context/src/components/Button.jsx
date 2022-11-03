import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button() {
  const data = useContext(ThemeContext);
  console.log(data);
  return (
    <div>
      <h1>Button {data}</h1>
    </div>
  );
}

export default Button;

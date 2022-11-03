import "./App.css";
import Button from "./components/Button";
import ThemeContext from "./context/ThemeContext";

function App() {
  return (
    <div className='App'>
      <ThemeContext.Provider value='dark'>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

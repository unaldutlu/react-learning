import { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // const data = useMemo(() => {
  //   return { name: "unal", number };
  // }, [number]);

  // const data = useMemo(() => {
  //   return { name: "unal" };
  // }, [number]);

  const data = useMemo(() => {
    return calculateObject(number);
  }, [number]);

  // const data = calculateObject();

  return (
    <div className='App'>
      <Header data={data} />
      <hr />
      {number}
      <br />
      <br />
      <button onClick={() => setNumber(number + 1)}>increase</button>
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}
function calculateObject(number) {
  console.log("Calculating...");
  for (let i = 0; i < 10000000; i++) {}
  console.log("Calculating completed!");
  return { name: "Mehmet", number };
}

export default App;
